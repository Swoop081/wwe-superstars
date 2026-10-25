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
    hp: 4,             // max HP = hp x average stat (short matches: about 5 rounds)
    noise: 0.3,        // +/- random swing on each stat comparison
    chipBase: 0.12,    // stat winner always deals this x their stat...
    chipMargin: 0.5,   // ...plus this x the winning margin
    ctrlWin: 1.25,     // action power for the stat winner
    ctrlLose: 0.8,     // action power for the stat loser
    meterMax: 3,       // stat wins needed to charge the finisher
    finisher: 3.2,     // finisher damage x average stat (cannot be blocked or cancelled)
    maxRounds: 40,
    floor: 1e-12       // lowest relative power, avoids 0/0 for absurd level gaps
  };

  // Action cards. d = damage, h = heal (fraction of max HP), b = block, r = reflect (of what is blocked),
  // boost = bonus damage on your next damaging action, weak = opponent's next stat comparison x0.8,
  // inc = extra damage the opponent takes on top (brawl recoil), cancel = negates opponent's action.
  // Values with a *avg multiplier are scaled by the user's average stat.
  const ACTIONS = {
    chair:      { name: 'Steel Chair',     icon: 'steel-chair.png',   d: 1.5 },
    lowblow:    { name: 'Low Blow',        icon: 'low-blow.png',      d: 1.0, b: 0.8 },
    cheap:      { name: 'Cheap Shot',      icon: 'cheap-shot.png',    d: 1.1, b: 0.6 },
    brawl:      { name: 'Wild Brawl',      icon: 'wild-brawl.png',    d: 1.75, inc: 0.2 },
    ref:        { name: 'Dirty Tactics',   icon: 'dirty-tactics.png', d: 0.5, cancel: true },
    defence:    { name: 'Defence',         icon: 'defence.png',       h: 0.12, b: 1.5 },
    crowd:      { name: 'Crowd Support',   icon: 'crowd-support.png', h: 0.30 },
    secondwind: { name: 'Second Wind',     icon: 'second-wind.png',   h: 0.20, hLow: 0.40 },
    adrenaline: { name: 'Adrenaline',      icon: 'adrenaline.png',    boost: 1.0 },
    reverse:    { name: 'Reverse It',      icon: 'reverse-it.png',    b: 1.0, r: 1.0 },
    mindgames:  { name: 'Mind Games',      icon: 'mind-games.png',    b: 1.0, weak: true },
    fighting:   { name: 'Fighting Spirit', icon: 'fighting-spirit.png', h: 0.20, boost: 1.0 }
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
  function actionNumbers(id, f, power) {
    const a = ACTIONS[id], n = { d: 0, h: 0, b: 0, r: 0, inc: 0, boost: 0, weak: false, cancel: !!a.cancel };
    if (a.d) n.d = a.d * f.avg * power;
    if (a.h) n.h = (a.hLow && f.hp < f.max / 2 ? a.hLow : a.h) * f.max * power;
    if (a.b) n.b = a.b * f.avg * power;
    if (a.r) n.r = a.r * f.avg * power;
    if (a.inc) n.inc = a.inc * f.avg * power;
    if (a.boost) n.boost = a.boost * f.avg * power;
    n.weak = !!a.weak;
    return n;
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
      } else num[s] = actionNumbers(id, f, s === winner ? TUNE.ctrlWin : TUNE.ctrlLose);
    }

    // 3. Dirty Tactics negates the opponent's whole action (a finisher cannot be negated).
    const negate = { a: false, b: false };
    for (const s of ['a', 'b']) if (num[s].cancel && !num[other(s)].finisher) negate[other(s)] = true;
    for (const s of ['a', 'b']) if (negate[s]) num[s] = { d: 0, h: 0, b: 0, r: 0, inc: 0, boost: 0, weak: false, cancel: false, negated: true };

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
        negated: !!num[s].negated, fizzled: !!num[s].fizzled, finisher: !!num[s].finisher, weakened: !!num[s].weak };
    }
    A.hp = Math.max(0, A.hp - dealt.b - reflectOn.a);
    B.hp = Math.max(0, B.hp - dealt.a - reflectOn.b);
    ev.hp = { a: A.hp, b: B.hp };

    // 7. Meter, card cycling.
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
  function scoreAction(m, side, id, power) {
    const me = side === 'a' ? m.a : m.b, op = side === 'a' ? m.b : m.a;
    const n = actionNumbers(id, me, power), incoming = op.avg * 1.3 * (power === TUNE.ctrlWin ? 0.8 : 1.25);
    const block = Math.min(n.b, incoming);
    let v = n.d + n.inc * -1 + block * 0.8 + Math.min(n.h, me.max - me.hp) * 1.0 + Math.min(n.r, block) * 0.7;
    if (n.boost) v += me.boost ? 0 : n.boost * 0.9;
    if (n.weak) v += op.avg * 0.25;
    if (n.cancel) v += incoming * (me.hp / me.max < 0.3 ? 0.95 : 0.7);
    if (n.d >= op.hp) v += 1e6;
    return v;
  }
  function cpuAction(m, side, statIdx) {
    const me = side === 'a' ? m.a : m.b, op = side === 'a' ? m.b : m.a;
    if (me.meter >= TUNE.meterMax) return 'finisher';
    const power = predictedControl(m, side, statIdx);
    let best = me.actions[0], bs = -Infinity;
    for (const id of me.actions) { const s = scoreAction(m, side, id, power); if (s > bs) { bs = s; best = id; } }
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
