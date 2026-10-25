/* WWE Superstars v2 — game engine (pure logic, no DOM).
   Works in the browser (window.Engine) and in Node (module.exports) so the same code is simulated.

   Core ideas
   - 7 stats per card. Level N+1 is TUNE.m times stronger than level N (multiplicative), for every
     stat and HP, so strengths/weaknesses never wash out and the game can go on forever.
   - A match is scale-free: only the ratio between the two cards matters. Level 10,001 vs 10,000
     plays exactly like level 2 vs 1. Real numbers are only rebuilt for display (fmtVal).
   - Round = the caller names a stat, both cards are compared on it, the winner gets "control".
     Action cards deal the damage; control powers up your action and weakens theirs.
   - Winning stat rounds charges the signature FINISHER move. */
(function (root) {
  'use strict';

  const STATS = [
    { k: 'str', name: 'Power', icon: 'power.png' },
    { k: 'stk', name: 'Striking', icon: 'strike.png' },
    { k: 'tec', name: 'Technique', icon: 'technique.png' },
    { k: 'agi', name: 'Aerial', icon: 'agility.png' },
    { k: 'sub', name: 'Submission', icon: 'submission.png' },
    { k: 'cha', name: 'Charisma', icon: 'charisma.png' },
    { k: 'star', name: 'Star Power', icon: 'star-power.png' }
  ];

  // Every number the balance depends on lives here, so the simulator can tune it.
  const TUNE = {
    m: 1.25,           // power multiplier per level
    hp: 7,             // max HP = hp x average stat (short matches: about 5 rounds)
    noise: 0.3,        // +/- random swing on each stat comparison
    chipBase: 0.12,    // stat winner always deals this x their stat...
    chipMargin: 0.5,   // ...plus this x the winning margin
    ctrlWin: 1.25,     // move power for the stat winner
    ctrlLose: 0.8,     // move power for the stat loser
    combo: 1.5,        // a move that matches the called stat is a COMBO: x this
    meterMax: 3,       // stat wins needed to charge the finisher
    finisher: 3.2,     // finisher damage x average stat (cannot be blocked or cancelled)
    maxRounds: 40,
    floor: 1e-12       // lowest relative power, avoids 0/0 for absurd level gaps
  };

  // Move cards. Each is a wrestling move. Five are tied to a stat: play one when that stat was called and it is a
  // COMBO (x1.5). d = damage (x user's average stat), h = heal (fraction of max HP), weak = opponent's next stat -20%,
  // risk = if you lose the stat the move misses and you take this x your average, cancel/counter = negate their move and
  // hit them back for counter x its damage, fixed = ignores who won the stat, meter = finisher charges gained.
  const ACTIONS = {
    powerslam: { name: 'Powerslam',       icon: 'power.png',        kind: 'Power move',      stats: [0], d: 1.3 },
    strike:    { name: 'Strike Flurry',   icon: 'strike.png',       kind: 'Striking move',   stats: [1], d: 1.2 },
    suplex:    { name: 'Suplex',          icon: 'technique.png',    kind: 'Technical move',  stats: [2], d: 1.3 },
    dive:      { name: 'Top-Rope Dive',   icon: 'agility.png',      kind: 'Aerial move',     stats: [3], d: 1.8, risk: 0.3 },
    hold:      { name: 'Submission Hold', icon: 'submission.png',   kind: 'Submission',      stats: [4], d: 0.8, weak: true },
    chair:     { name: 'Steel Chair',     icon: 'steel-chair.png',  kind: 'Heel move',       d: 1.4, fixed: true },
    reversal:  { name: 'Reversal',        icon: 'reverse-it.png',   kind: 'Counter',         cancel: true, counter: 0.5 },
    crowd:     { name: 'Crowd Pop',       icon: 'crowd-support.png', kind: 'Crowd',          stats: [5, 6], h: 0.22, meter: 1 }
  };
  const ACTION_IDS = Object.keys(ACTIONS);
  const FINISHER = { name: 'Finisher', icon: 'finisher.png' };

  /* ---------- level maths & display ---------- */
  const LOG_M = () => Math.log10(TUNE.m);
  function log10Stat(base, level) { return Math.log10(base) + (level - 1) * LOG_M(); }
  // Compact number from a log10 value: 842, 12.4K, 3.1M ... Dc, then 1.2e45.
  const UNITS = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc'];
  function fmtLog(l) {
    if (!isFinite(l) || l < 0) return '0';
    if (l < 3) return String(Math.round(Math.pow(10, l)));
    if (l < 36) {
      const u = Math.floor(l / 3), v = Math.pow(10, l - u * 3);
      return (v >= 100 ? v.toFixed(0) : v >= 10 ? v.toFixed(1) : v.toFixed(2)).replace(/\.?0+$/, '') + UNITS[u];
    }
    const e = Math.floor(l), mant = Math.pow(10, l - e);
    return mant.toFixed(2).replace(/\.?0+$/, '') + 'e' + e;
  }
  function fmtStat(base, level) { return fmtLog(log10Stat(base, level)); }
  function avgBase(w) { return w.s.reduce((a, b) => a + b, 0) / w.s.length; }
  function fmtHp(w, level) { return fmtLog(Math.log10(avgBase(w) * TUNE.hp) + (level - 1) * LOG_M()); }

  /* ---------- rng ---------- */
  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  const shuffle = (arr, rng) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  /* ---------- match setup ---------- */
  function makeFighter(w, level, ref, rng) {
    const f = Math.max(TUNE.floor, Math.pow(TUNE.m, level - ref));
    const stats = w.s.map(v => v * f);
    const avg = stats.reduce((a, b) => a + b, 0) / stats.length;
    const fighter = {
      w, level, stats, avg, hp: avg * TUNE.hp, max: avg * TUNE.hp,
      meter: 0, boost: 0, weak: false,
      deck: [], hand: [], actions: []
    };
    fighter.deck = shuffle([0, 1, 2, 3, 4, 5, 6], rng);
    while (fighter.hand.length < 3) fighter.hand.push(fighter.deck.pop());
    while (fighter.actions.length < 3) drawAction(fighter, rng);
    return fighter;
  }
  function drawAction(f, rng) {
    const pool = ACTION_IDS.filter(id => !f.actions.includes(id));
    f.actions.push(pool[Math.floor(rng() * pool.length)]);
  }
  function drawStat(f, rng) {
    if (!f.deck.length) f.deck = shuffle([0, 1, 2, 3, 4, 5, 6].filter(i => !f.hand.includes(i)), rng);
    f.hand.push(f.deck.pop());
  }

  function createMatch(wa, la, wb, lb, opts) {
    opts = opts || {};
    const rng = opts.rng || Math.random;
    const ref = Math.max(la, lb);
    const m = {
      rng, ref, round: 0, over: false, winner: null, caller: null, lastCaller: null,
      a: makeFighter(wa, la, ref, rng),
      b: makeFighter(wb, lb, ref, rng),
      // Convert a relative value into the real number shown to the player.
      fmtVal(v) { return fmtLog(Math.log10(Math.max(v, 1e-300)) + (ref - 1) * LOG_M()); }
    };
    return m;
  }
  const other = s => s === 'a' ? 'b' : 'a';

  // Underdog (lower HP %) calls the stat; ties alternate; first round is a coin flip.
  function chooseCaller(m) {
    const ra = m.a.hp / m.a.max, rb = m.b.hp / m.b.max;
    let c;
    if (m.lastCaller === null) c = m.rng() < 0.5 ? 'a' : 'b';
    else if (Math.abs(ra - rb) < 0.02) c = other(m.lastCaller);
    else c = ra < rb ? 'a' : 'b';
    m.caller = c;
    return c;
  }

  /* ---------- action numbers ---------- */
  function actionNumbers(id, f, power, statIdx) {
    const a = ACTIONS[id], combo = !!(a.stats && a.stats.includes(statIdx));
    const p = (a.fixed ? 1 : power) * (combo ? TUNE.combo : 1);
    return { d: a.d ? a.d * f.avg * p : 0, h: a.h ? a.h * f.max * p : 0, b: 0, r: 0, inc: 0, boost: 0,
      weak: !!a.weak, cancel: !!a.cancel, counter: a.counter || 0, meter: a.meter || 0, risk: a.risk || 0, combo };
  }
    function finisherNumbers(f) { return { d: TUNE.finisher * f.avg, h: 0, b: 0, r: 0, inc: 0, boost: 0, weak: false, cancel: false, finisher: true }; }

  /* ---------- one round ---------- */
  // statIdx: the caller's chosen stat. actA/actB: an action id, or 'finisher' (needs a full meter
  // at the START of the round). Everything is computed from the pre-round state, then applied together.
  function resolveRound(m, statIdx, actA, actB) {
    if (m.over) return null;
    const rng = m.rng, A = m.a, B = m.b;
    const ev = { round: ++m.round, caller: m.caller, statIdx, act: { a: actA, b: actB }, fx: { a: {}, b: {} } };
    if (!(m.caller === 'a' ? A : B).hand.includes(statIdx)) throw new Error('stat card not in caller hand');
    const meterBefore = { a: A.meter, b: B.meter };

    // 1. Stat comparison: the caller's card sets the category for both fighters.
    const swing = () => 1 - TUNE.noise + rng() * 2 * TUNE.noise;
    const va = A.stats[statIdx] * swing() * (A.weak ? 0.8 : 1);
    const vb = B.stats[statIdx] * swing() * (B.weak ? 0.8 : 1);
    A.weak = B.weak = false;
    const winner = va > vb ? 'a' : 'b'; // ties favour the defender
    const margin = Math.abs(va - vb), top = Math.max(va, vb);
    ev.vals = { a: va, b: vb }; ev.winner = winner;

    // 2. Action numbers (control powers up the winner's action and weakens the loser's).
    const num = {};
    for (const s of ['a', 'b']) {
      const f = s === 'a' ? A : B, id = s === 'a' ? actA : actB;
      if (id === 'finisher') {
        num[s] = meterBefore[s] >= TUNE.meterMax ? finisherNumbers(f) : { d: 0, h: 0, b: 0, r: 0, inc: 0, boost: 0, weak: false, cancel: false, fizzled: true };
      } else num[s] = actionNumbers(id, f, s === winner ? TUNE.ctrlWin : TUNE.ctrlLose, statIdx);
    }

    // 3. A Reversal negates the opponent's move and hits back for a share of its damage (a finisher cannot be reversed).
    const origD = { a: num.a.d, b: num.b.d }, counterHit = { a: 0, b: 0 }, selfHit = { a: 0, b: 0 }, missed = { a: false, b: false };
    const negate = { a: false, b: false };
    for (const s of ['a', 'b']) if (num[s].cancel && !num[other(s)].finisher) negate[other(s)] = true;
    for (const s of ['a', 'b']) if (num[s].cancel && negate[other(s)]) counterHit[other(s)] = num[s].counter * origD[other(s)];
    for (const s of ['a', 'b']) if (negate[s]) num[s] = { d: 0, h: 0, b: 0, r: 0, inc: 0, boost: 0, weak: false, cancel: false, negated: true };

    // A risky move (the dive) misses if you lose the stat: no damage, and you take the fall.
    for (const s of ['a', 'b']) if (num[s].risk && s !== winner) { num[s].d = 0; missed[s] = true; selfHit[s] = num[s].risk * (s === 'a' ? A : B).avg; }
    // 4. Damage each side tries to deal (action + banked boost + stat-win chip + brawl recoil).
    const gross = {}, boostUsed = { a: 0, b: 0 };
    for (const s of ['a', 'b']) {
      const f = s === 'a' ? A : B;
      let d = num[s].d;
      if (d > 0 && f.boost && !num[s].finisher) { d += f.boost; boostUsed[s] = f.boost; }
      gross[s] = d + (s === winner ? TUNE.chipBase * top + TUNE.chipMargin * margin : 0);
    }
    gross.a += num.b.inc; gross.b += num.a.inc;

    // 5. Blocks and reflects. dealt[s] = damage s actually inflicts; reflectOn[s] = damage thrown back at s.
    const dealt = {}, blocked = {}, reflectOn = { a: 0, b: 0 };
    for (const s of ['a', 'b']) {
      const o = other(s);
      blocked[s] = num[s].finisher ? 0 : Math.min(num[o].b, gross[s]); // what o's block absorbed from s
      dealt[s] = gross[s] - blocked[s];
      reflectOn[s] = num[s].finisher ? 0 : Math.min(num[o].r, blocked[s]);
    }

    // 6. Apply: heals and setups first, then damage lands simultaneously.
    for (const s of ['a', 'b']) {
      const f = s === 'a' ? A : B, o = s === 'a' ? B : A, before = f.hp;
      if (num[s].h) f.hp = Math.min(f.max, f.hp + num[s].h);
      if (boostUsed[s]) f.boost = 0;
      if (num[s].boost) f.boost += num[s].boost;
      if (num[s].weak) o.weak = true;
      ev.fx[s] = { healed: f.hp - before, damage: dealt[s] + reflectOn[other(s)], blocked: blocked[other(s)], reflected: reflectOn[other(s)],
        chip: s === winner ? TUNE.chipBase * top + TUNE.chipMargin * margin : 0, boosted: boostUsed[s], boostGained: num[s].boost || 0,
        negated: !!num[s].negated, fizzled: !!num[s].fizzled, combo: !!num[s].combo, missed: missed[s], selfHit: selfHit[s], counter: counterHit[other(s)], finisher: !!num[s].finisher, weakened: !!num[s].weak };
    }
    A.hp = Math.max(0, A.hp - dealt.b - reflectOn.a - counterHit.a - selfHit.a);
    B.hp = Math.max(0, B.hp - dealt.a - reflectOn.b - counterHit.b - selfHit.b);
    ev.hp = { a: A.hp, b: B.hp };

    // 7. Meter, card cycling.
    for (const s of ['a', 'b']) if (num[s].meter) { const f = s === 'a' ? A : B; f.meter = Math.min(TUNE.meterMax, f.meter + num[s].meter); }
    (winner === 'a' ? A : B).meter = Math.min(TUNE.meterMax, (winner === 'a' ? A : B).meter + 1);
    for (const s of ['a', 'b']) {
      const f = s === 'a' ? A : B, id = s === 'a' ? actA : actB;
      if (id === 'finisher') f.meter = 0;
      else { const i = f.actions.indexOf(id); if (i >= 0) { f.actions.splice(i, 1); drawAction(f, rng); } }
    }
    const caller = m.caller === 'a' ? A : B;
    caller.hand.splice(caller.hand.indexOf(statIdx), 1); drawStat(caller, rng);
    m.lastCaller = m.caller;
    ev.meter = { a: A.meter, b: B.meter };

    // 8. End of match.
    if (A.hp <= 0 || B.hp <= 0 || m.round >= TUNE.maxRounds) {
      m.over = true;
      if (A.hp <= 0 && B.hp <= 0) m.winner = winner;
      else if (A.hp <= 0) m.winner = 'b';
      else if (B.hp <= 0) m.winner = 'a';
      else m.winner = A.hp / A.max >= B.hp / B.max ? 'a' : 'b';
    }
    return ev;
  }

  /* ---------- CPU / simulation policy ---------- */
  function predictedControl(m, side, statIdx) {
    const me = side === 'a' ? m.a : m.b, op = side === 'a' ? m.b : m.a;
    const mine = me.stats[statIdx] * (me.weak ? 0.8 : 1), theirs = op.stats[statIdx] * (op.weak ? 0.8 : 1);
    return mine > theirs ? TUNE.ctrlWin : TUNE.ctrlLose;
  }
  function cpuStat(m, side, skill) {
    const me = side === 'a' ? m.a : m.b, op = side === 'a' ? m.b : m.a;
    if (m.rng() < (skill === undefined ? 0.15 : skill)) return me.hand[Math.floor(m.rng() * me.hand.length)];
    let best = me.hand[0], bs = -Infinity;
    for (const i of me.hand) { const s = me.stats[i] - op.stats[i]; if (s > bs) { bs = s; best = i; } }
    return best;
  }
  function scoreAction(m, side, id, power, statIdx) {
    const me = side === 'a' ? m.a : m.b, op = side === 'a' ? m.b : m.a;
    const n = actionNumbers(id, me, power, statIdx), won = power === TUNE.ctrlWin, pw = won ? 0.75 : 0.25;
    const incoming = op.avg * 1.3 * (won ? 0.8 : 1.25);
    let v = n.d + Math.min(n.h, me.max - me.hp) + n.meter * me.avg * 0.3;
    if (n.risk) v = n.d * pw - n.risk * me.avg * (1 - pw);
    if (n.weak) v += op.avg * 0.25;
    if (n.cancel) v += incoming * 0.6 + incoming * n.counter;
    if (n.d >= op.hp) v += 1e6;
    return v;
  }
    function cpuAction(m, side, statIdx) {
    const me = side === 'a' ? m.a : m.b, op = side === 'a' ? m.b : m.a;
    if (me.meter >= TUNE.meterMax) return 'finisher';
    const power = predictedControl(m, side, statIdx);
    let best = me.actions[0], bs = -Infinity;
    for (const id of me.actions) { const s = scoreAction(m, side, id, power, statIdx); if (s > bs) { bs = s; best = id; } }
    return best;
  }
  // Play a whole match with the CPU policy on both sides (used by the simulator and QA).
  function autoPlay(m, skillA, skillB) {
    let guard = 0;
    while (!m.over && guard++ < 200) {
      const c = chooseCaller(m);
      const idx = cpuStat(m, c, c === 'a' ? skillA : skillB);
      resolveRound(m, idx, cpuAction(m, 'a', idx), cpuAction(m, 'b', idx));
    }
    return m;
  }

  const Engine = {
    STATS, ACTIONS, ACTION_IDS, FINISHER, TUNE,
    fmtLog, fmtStat, fmtHp, log10Stat, avgBase,
    createMatch, chooseCaller, resolveRound, cpuStat, cpuAction, autoPlay, actionNumbers, finisherNumbers, predictedControl,
    mulberry32, other
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = Engine;
  root.Engine = Engine;
})(typeof window !== 'undefined' ? window : globalThis);
