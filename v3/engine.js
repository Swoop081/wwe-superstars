/* WWE Superstars v3 - rules engine (no DOM). UMD: window.Eng / module.exports.
   A card-battle game in the style of WWE SuperCard: 4 stats (Power, Toughness, Speed, Charisma),
   rarity tiers, signature moves, tag-team alignment, support cards, and several game modes.
   Everything plays against computer-built decks, instantly, with no timers, energy or purchases. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./data/cards.js'));
  else root.Eng = factory(root.CARDS);
})(typeof self !== 'undefined' ? self : this, function (CARDS) {
  'use strict';
  const STATS = [
    { k: 'pow', name: 'Power', icon: 'power.png' },
    { k: 'tgh', name: 'Toughness', icon: 'defence.png' },
    { k: 'spd', name: 'Speed', icon: 'agility.png' },
    { k: 'cha', name: 'Charisma', icon: 'charisma.png' }
  ];
  const RAR = [
    { n: 'Common', mult: 2.0, sig: 0, col: '#9aa3b2' }, { n: 'Uncommon', mult: 2.4, sig: 0.15, col: '#5fd38a' },
    { n: 'Rare', mult: 2.9, sig: 0.175, col: '#4da3ff' }, { n: 'Super Rare', mult: 3.5, sig: 0.2, col: '#a56cff' },
    { n: 'Ultra Rare', mult: 4.2, sig: 0.25, col: '#ff6bd6' }, { n: 'Epic', mult: 5.0, sig: 0.3, col: '#ff8a3d' },
    { n: 'Legendary', mult: 6.0, sig: 0.33, col: '#ffd34d' }, { n: 'Survivor', mult: 7.2, sig: 0.36, col: '#ff4d5e' },
    { n: 'WrestleMania', mult: 8.6, sig: 0.4, col: '#7fe7ff' }
  ];
  const T = { levelMax: 100, levelBoost: 0.30, matchBoost: 0.10, matchMax: 100, proBoost: 0.30, fortBoost: 0.05, sigBoost: 0.30, diamond: 1.10, mismatch: 0.95, tieExtra: true };
  // Support cards: one-use boosts per game. pct is applied to the listed stats for the match they are played in.
  const SUPPORTS = [
    { id: 'chair', name: 'Steel Chair', stats: [0], pct: 0.25, rar: 0 }, { id: 'table', name: 'Table', stats: [1], pct: 0.25, rar: 0 },
    { id: 'ladder', name: 'Ladder', stats: [2], pct: 0.25, rar: 0 }, { id: 'mic', name: 'Microphone', stats: [3], pct: 0.25, rar: 0 },
    { id: 'kendo', name: 'Kendo Stick', stats: [0, 2], pct: 0.18, rar: 1 }, { id: 'bell', name: 'Ring Bell', stats: [1, 3], pct: 0.18, rar: 1 },
    { id: 'manager', name: 'Manager', stats: [0, 1, 2, 3], pct: 0.12, rar: 2 }, { id: 'mastermind', name: 'Mastermind', stats: [0, 1, 2, 3], pct: 0.15, rar: 3 },
    { id: 'belt', name: 'Title Belt', stats: [0, 1, 2, 3], pct: 0.2, rar: 4 }, { id: 'spotlight', name: 'Spotlight', stats: [2, 3], pct: 0.32, rar: 3 },
    { id: 'barricade', name: 'Barricade', stats: [0, 1], pct: 0.32, rar: 3 }, { id: 'legacy', name: 'Hall of Fame', stats: [0, 1, 2, 3], pct: 0.28, rar: 6 }
  ];
  const SUP_IDX = Object.fromEntries(SUPPORTS.map((s, i) => [s.id, i]));
  const SYM = { BL: { c: 'blue', d: 'left' }, BR: { c: 'blue', d: 'right' }, YU: { c: 'yellow', d: 'up' }, YD: { c: 'yellow', d: 'down' } };
  const DIRS = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]]; // N NE E SE S SW W NW as (row, col)

  /* ---------- helpers ---------- */
  function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  const pickR = (arr, rng) => arr[Math.floor(rng() * arr.length)];
  function shuffle(a, rng) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  const IDX = Object.fromEntries(CARDS.map((c, i) => [c.n, i]));
  const isF = inst => CARDS[inst.c].g === 'F';

  /* ---------- cards ---------- */
  // inst = {u, c:index into CARDS, lvl 0..100, mt matches played, pro 0|1, fort 0..3}
  function mk(c, o) { return Object.assign({ u: 0, c, lvl: 0, mt: 0, pro: 0, fort: 0 }, o || {}); }
  function cardMult(inst) {
    return RAR[CARDS[inst.c].rar].mult * (1 + T.levelBoost * inst.lvl / T.levelMax) * (1 + T.matchBoost * Math.min(inst.mt, T.matchMax) / T.matchMax)
      * (inst.pro ? 1 + T.proBoost : 1) * (1 + T.fortBoost * (inst.fort || 0)) * (inst.fat == null ? 1 : inst.fat);
  }
  function stats(inst) { const m = cardMult(inst); return CARDS[inst.c].s.map(v => Math.round(v * m)); }
  const total = inst => stats(inst).reduce((a, b) => a + b, 0);
  // Signature move boosts the card's two best stats.
  function sigStats(inst) { const s = CARDS[inst.c].s; return [0, 1, 2, 3].sort((a, b) => s[b] - s[a]).slice(0, 2); }
  const sigChance = inst => RAR[CARDS[inst.c].rar].sig;
  const supPct = s => s.pct;
  // level-up xp: feeding a card gives rarity-based levels
  const feedValue = inst => Math.round((1 + CARDS[inst.c].rar * 2.2) * (1 + inst.lvl / 40) * (inst.pro ? 3 : 1));
  function feed(target, fodder) { const add = fodder.reduce((a, f) => a + feedValue(f), 0); target.lvl = Math.min(T.levelMax, target.lvl + add); return add; }
  // Pro: combine two copies of the same wrestler. Fortify: add up to 3 more copies.
  const canPro = (a, b) => a.u !== b.u && a.c === b.c && !a.pro && !b.pro;
  function makePro(a) { a.pro = 1; a.lvl = Math.min(T.levelMax, a.lvl); return a; }
  const canFort = (a, b) => a.pro && a.fort < 3 && b.c === a.c && !b.pro && a.u !== b.u;

  /* ---------- decks ---------- */
  // Deck = {m:[4 male], f:[2 female], s:[2 support]} of instances / support objects.
  const deckCards = d => d.m.concat(d.f);
  function deckPower(d) { const t = deckCards(d).map(total).sort((a, b) => b - a); return t.length ? t.reduce((a, b) => a + b, 0) / t.length : 0; }
  function bestDeck(cards, supports, sizeM, sizeF, sizeS) {
    const by = (g, n) => cards.filter(c => (isF(c) ? 'F' : 'M') === g).sort((a, b) => total(b) - total(a)).slice(0, n);
    const sups = supports.slice().sort((a, b) => SUPPORTS[b.s].pct * SUPPORTS[b.s].stats.length - SUPPORTS[a.s].pct * SUPPORTS[a.s].stats.length);
    return { m: by('M', sizeM == null ? 4 : sizeM), f: by('F', sizeF == null ? 2 : sizeF), s: sups.slice(0, sizeS == null ? 2 : sizeS) };
  }
  const NAME_A = ['Iron', 'Night', 'Steel', 'Ring', 'Chaos', 'Royal', 'Thunder', 'Cobra', 'Neon', 'Savage', 'Lucky', 'Rogue', 'Dark', 'Mega', 'Crimson', 'Ghost', 'Turbo', 'Atomic'];
  const NAME_B = ['Fan', 'Mark', 'Hawk', 'King', 'Bomb', 'Crusher', 'Wolf', 'Legend', 'Titan', 'Viper', 'Boss', 'Hammer', 'Ace', 'Reaper', 'Dragon', 'Smash'];
  const aiName = rng => pickR(NAME_A, rng) + pickR(NAME_B, rng) + Math.floor(rng() * 90 + 10);
  // A computer-built deck near a target card strength (sum of the 4 stats of an average card).
  function aiDeck(target, rng, o) {
    o = o || {};
    const nM = o.m == null ? 4 : o.m, nF = o.f == null ? 2 : o.f, nS = o.s == null ? 2 : o.s;
    const pool = g => CARDS.map((c, i) => i).filter(i => CARDS[i].g === g);
    const make = (idxs, n) => {
      const out = [];
      const cand = idxs.map(i => { const inst = mk(i, { lvl: Math.floor(rng() * 70), mt: Math.floor(rng() * 80) }); return { inst, t: total(inst) }; });
      while (out.length < n && cand.length) {
        const want = target * (0.88 + rng() * 0.24);
        let best = 0, bd = 1e9;
        for (let k = 0; k < cand.length; k++) { const d = Math.abs(cand[k].t - want); if (d < bd) { bd = d; best = k; } }
        out.push(cand.splice(best, 1)[0].inst);
      }
      return out;
    };
    const lvlSup = Math.min(SUPPORTS.length - 1, Math.max(0, Math.round(target / 80)));
    const sup = []; for (let i = 0; i < nS; i++) sup.push({ u: 0, s: Math.min(SUPPORTS.length - 1, Math.max(0, lvlSup - Math.floor(rng() * 5))) });
    return { m: make(pool('M'), nM), f: make(pool('F'), nF), s: sup };
  }

  /* ---------- match resolution ---------- */
  const SOLO = 'solo', TAG = 'tag', DIVAS = 'divas';
  const TYPE_NAME = { solo: 'Solo', tag: 'Tag Team', divas: 'Divas' };
  function cardsNeeded(t) { return t === TAG ? { m: 2, f: 0 } : t === DIVAS ? { m: 0, f: 1 } : { m: 1, f: 0 }; }
  function makeSpecs(rng) {
    const opts = [];
    for (const a of [SOLO, TAG, DIVAS]) for (const b of [SOLO, TAG, DIVAS]) for (const c of [SOLO, TAG, DIVAS]) {
      const ts = [a, b, c]; let m = 0, f = 0; ts.forEach(t => { m += cardsNeeded(t).m; f += cardsNeeded(t).f; });
      if (m <= 4 && f <= 2 && m + f <= 5) opts.push(ts);
    }
    const ts = pickR(opts, rng);
    return ts.map(type => {
      const two = rng() < 0.4, a = Math.floor(rng() * 4);
      let b = Math.floor(rng() * 3); if (b >= a) b++;
      return { type, stats: two ? [a, b].sort() : [a] };
    });
  }
  function tagMod(c1, c2) {
    const a = SYM[CARDS[c1.c].sym], b = SYM[CARDS[c2.c].sym];
    if (a.c !== b.c) return T.mismatch;
    const opp = { left: 'right', right: 'left', up: 'down', down: 'up' };
    return opp[a.d] === b.d ? T.diamond : 1;
  }
  // Total for one side in one match. cards = instances (1 or 2); sup = support object or null. rng decides signature moves.
  function sideTotal(cards, focus, sup, rng) {
    let sum = 0; const parts = [];
    for (const c of cards) {
      const st = stats(c).slice(), ss = sigStats(c);
      const sig = rng() < sigChance(c);
      if (sig) ss.forEach(i => { st[i] = st[i] * (1 + T.sigBoost); });
      let v = 0; focus.forEach(i => { v += st[i]; });
      parts.push({ u: c.u, c: c.c, base: focus.reduce((a, i) => a + stats(c)[i], 0), sig: sig && ss.some(i => focus.includes(i)), value: Math.round(v) });
      sum += v;
    }
    let tag = 1; if (cards.length === 2) { tag = tagMod(cards[0], cards[1]); sum *= tag; }
    let boost = 0;
    if (sup) { const S = SUPPORTS[sup.s]; if (focus.some(i => S.stats.includes(i))) { boost = S.pct; sum *= (1 + S.pct); } }
    return { total: Math.round(sum), parts, tag, boost };
  }
  function newGame(deckA, deckB, rng, o) {
    o = o || {};
    const g = { rng, specs: o.specs || makeSpecs(rng), a: freshSide(deckA), b: freshSide(deckB), results: [], over: false, winner: null, extra: false };
    return g;
  }
  function freshSide(d) { return { deck: d, used: [], supUsed: [], pts: 0 }; }
  const availCards = (side, g) => deckCards(side.deck).filter(c => !side.used.includes(c));
  const availM = side => side.deck.m.filter(c => !side.used.includes(c));
  const availF = side => side.deck.f.filter(c => !side.used.includes(c));
  const availS = side => side.deck.s.filter(s => !side.supUsed.includes(s));
  // Can a side still field this match type?
  const canField = (side, t) => { const n = cardsNeeded(t); return availM(side).length >= n.m && availF(side).length >= n.f; };
  function validPick(side, spec, picks) {
    const n = cardsNeeded(spec.type);
    const ms = picks.filter(c => !isF(c)), fs = picks.filter(isF);
    return ms.length === n.m && fs.length === n.f && picks.every(c => availCards(side).includes(c)) && new Set(picks).size === picks.length;
  }
  // AI picks cards for a spec. `future` = specs after this one (so it saves strong cards sensibly).
  function aiPick(side, spec, future, rng) {
    const n = cardsNeeded(spec.type), pick = [];
    const val = c => spec.stats.reduce((a, i) => a + stats(c)[i], 0);
    const noisy = c => val(c) * (0.9 + rng() * 0.2);
    // reserve: prefer cards that are comparatively best here vs their general value
    const choose = (pool, k) => {
      if (k === 0) return [];
      const sorted = pool.slice().sort((x, y) => noisy(y) - noisy(x));
      // sometimes hold back the very best for a harder match
      if (sorted.length > k + 1 && rng() < 0.3) return sorted.slice(1, 1 + k);
      return sorted.slice(0, k);
    };
    pick.push(...choose(availM(side), n.m), ...choose(availF(side), n.f));
    // tag: prefer a diamond pair among the top 3 male cards
    if (n.m === 2) {
      const pool = availM(side).sort((x, y) => val(y) - val(x)).slice(0, 4); let bestPair = null, bs = -1;
      for (let i = 0; i < pool.length; i++) for (let j = i + 1; j < pool.length; j++) { const s = (val(pool[i]) + val(pool[j])) * tagMod(pool[i], pool[j]); if (s > bs) { bs = s; bestPair = [pool[i], pool[j]]; } }
      if (bestPair) { pick.length = 0; pick.push(...bestPair, ...choose(availF(side), n.f)); }
    }
    return pick;
  }
  function aiSupport(side, spec, rng) {
    const sups = availS(side); if (!sups.length) return null;
    // use a support if it helps this match and chance favours (about 1 use per game)
    const helpful = sups.filter(s => spec.stats.some(i => SUPPORTS[s.s].stats.includes(i)));
    if (!helpful.length) return null;
    return rng() < 0.45 ? helpful.sort((x, y) => SUPPORTS[y.s].pct - SUPPORTS[x.s].pct)[0] : null;
  }
  // Play match number g.results.length. pa = {cards, sup} for player (side a); side b is the AI (or pb given).
  function playMatch(g, pa, pb) {
    const idx = g.results.length, spec = g.specs[idx] || { type: SOLO, stats: [0, 1, 2, 3], extra: true };
    const future = g.specs.slice(idx + 1);
    pb = pb || { cards: aiPick(g.b, spec, future, g.rng), sup: aiSupport(g.b, spec, g.rng) };
    const ra = sideTotal(pa.cards, spec.stats, pa.sup, g.rng), rb = sideTotal(pb.cards, spec.stats, pb.sup, g.rng);
    pa.cards.forEach(c => g.a.used.push(c)); pb.cards.forEach(c => g.b.used.push(c));
    if (pa.sup) g.a.supUsed.push(pa.sup); if (pb.sup) g.b.supUsed.push(pb.sup);
    let w = ra.total > rb.total ? 'a' : rb.total > ra.total ? 'b' : null;
    if (w === 'a') g.a.pts++; else if (w === 'b') g.b.pts++; else { g.a.pts++; g.b.pts++; }
    const res = { idx, spec, a: Object.assign({ cards: pa.cards, sup: pa.sup }, ra), b: Object.assign({ cards: pb.cards, sup: pb.sup }, rb), winner: w };
    g.results.push(res);
    if (g.results.length >= 3) {
      if (g.a.pts !== g.b.pts) { g.over = true; g.winner = g.a.pts > g.b.pts ? 'a' : 'b'; }
      else if (g.results.length >= 4) { g.over = true; g.winner = w || (g.rng() < 0.5 ? 'a' : 'b'); }
      else g.extra = true;
    }
    return res;
  }
  // Extra (tie-break) match: any one unused card, all four stats.
  function extraSpec() { return { type: SOLO, stats: [0, 1, 2, 3], extra: true }; }
  function playExtra(g, pa) {
    const spec = extraSpec();
    const pickAny = side => { const c = availCards(side).sort((x, y) => total(y) - total(x))[0]; return c ? [c] : []; };
    const pb = { cards: pickAny(g.b), sup: null };
    g.specs[g.results.length] = spec;
    return playMatch(g, pa, pb);
  }
  // Helper for simulations: the player side plays "smart" (assign best cards to matches).
  function smartPick(side, spec, rng) { return aiPick(side, spec, [], rng); }
  function autoPlayGame(g, rng, bot) {
    while (!g.over) {
      const idx = g.results.length;
      if (idx >= 3) { const c = availCards(g.a).sort((x, y) => total(y) - total(x))[0]; playExtra(g, { cards: c ? [c] : [], sup: null }); continue; }
      const spec = g.specs[idx];
      playMatch(g, { cards: bot(g.a, spec, g.specs.slice(idx + 1), rng), sup: aiSupport(g.a, spec, rng) });
    }
    return g;
  }
  const perfect = g => g.over && g.winner === 'a' && g.b.pts === 0;

  /* ---------- opponents (matched to your deck, with a difficulty choice) ---------- */
  function opponents(power, rng, n) {
    n = n || 3;
    const mults = [0.86, 1.0, 1.14];
    const out = [];
    for (let i = 0; i < n; i++) {
      const diff = mults[i % mults.length];
      const wins = Math.floor(30 + rng() * 400), losses = Math.floor(10 + rng() * 300);
      out.push({ name: aiName(rng), diff, label: ['Easier', 'Even', 'Harder'][i % 3], record: wins + '-' + losses, deck: aiDeck(power * diff, rng) });
    }
    return out;
  }
  // Rewards: win 2 picks, loss 1, perfect win 3.
  const picksFor = g => g.winner === 'a' ? (perfect(g) ? 3 : 2) : 1;

  /* ---------- pick table (card picks) ---------- */
  // 12 face-down slots. Finding a Rare or better refreshes the table, like the real thing.
  // Which rarity does a deck strength (average card total) correspond to?
  function powerTier(p) { let b = 0, d = 1e9; RAR.forEach((r, i) => { const x = Math.abs(280 * r.mult * 1.15 - p); if (x < d) { d = x; b = i; } }); return b; }
  function pickTable(power, rng) {
    const tier = powerTier(power);
    const w = [];
    for (let r = 0; r <= 8; r++) w.push(r > tier + 1 ? 0 : r === tier + 1 ? (tier <= 2 ? 0.09 : 0.04) : r === tier ? 0.12 : r >= tier - 1 ? 0.28 : r >= tier - 2 ? 0.2 : 0.08);
    const roll = () => { let tot = w.reduce((a, b) => a + b, 0), x = rng() * tot; for (let r = 0; r <= 8; r++) { x -= w[r]; if (x <= 0) return r; } return 0; };
    const slots = [];
    for (let i = 0; i < 12; i++) {
      if (rng() < 0.17) { const s = SUPPORTS.map((s, k) => k).filter(k => SUPPORTS[k].rar <= tier + 1); slots.push({ k: 'sup', s: pickR(s, rng), open: false }); }
      else { const r = roll(); const pool = CARDS.map((c, k) => k).filter(k => CARDS[k].rar === r); slots.push({ k: 'card', c: pickR(pool, rng), open: false, reset: r >= Math.max(2, tier) }); }
    }
    return slots;
  }
  const isRarePlus = slot => slot.k === 'card' && (slot.reset != null ? slot.reset : CARDS[slot.c].rar >= 2);

  /* ---------- Ring Domination (3x3 board) ---------- */
  function rdNew(deckA, deckB, rng) {
    const hand = d => shuffle(d.m.concat(d.f), rng).slice(0, 5);
    return { rng, board: Array.from({ length: 9 }, () => ({ owner: null, card: null })), hand: { a: hand(deckA), b: hand(deckB) }, turn: 'a', over: false, winner: null, log: [] };
  }
  const rdXY = i => [Math.floor(i / 3), i % 3];
  const rdNeighbours = i => { const [r, c] = rdXY(i); const out = []; DIRS.forEach(([dr, dc], d) => { const rr = r + dr, cc = c + dc; if (rr >= 0 && rr < 3 && cc >= 0 && cc < 3) out.push({ cell: rr * 3 + cc, dir: d }); }); return out; };
  // Legal plays for a card: {cell, target|null}. Place in an empty cell with no enemy neighbour, or challenge an adjacent enemy the card points at.
  function rdMoves(st, side, card) {
    const foe = side === 'a' ? 'b' : 'a', moves = [];
    for (let i = 0; i < 9; i++) {
      if (st.board[i].owner) continue;
      const enemies = rdNeighbours(i).filter(n => st.board[n.cell].owner === foe);
      if (!enemies.length) { moves.push({ cell: i, target: null }); continue; }
      enemies.forEach(n => { if (CARDS[card.c].ar.includes(n.dir)) moves.push({ cell: i, target: n.cell }); });
    }
    return moves;
  }
  function rdPlay(st, side, card, move) {
    const foe = side === 'a' ? 'b' : 'a', info = { side, card, cell: move.cell, target: move.target, duel: null };
    st.hand[side] = st.hand[side].filter(c => c !== card);
    if (move.target == null) { st.board[move.cell] = { owner: side, card }; }
    else {
      const def = st.board[move.target].card, stat = [Math.floor(st.rng() * 4)];
      if (st.rng() < 0.35) { let b = Math.floor(st.rng() * 3); if (b >= stat[0]) b++; stat.push(b); stat.sort(); }
      const x = sideTotal([card], stat, null, st.rng), y = sideTotal([def], stat, null, st.rng);
      const attWins = x.total >= y.total ? x.total > y.total || st.rng() < 0.5 : false;
      info.duel = { stats: stat, att: x, def: y, attWins };
      const winner = attWins ? side : foe, wc = attWins ? card : def;
      st.board[move.cell] = { owner: winner, card: wc }; st.board[move.target] = { owner: winner, card: wc };
    }
    st.log.push(info);
    st.turn = foe;
    // end checks: board full, or both sides without any legal play
    const full = st.board.every(c => c.owner);
    const canMove = s => st.hand[s].some(c => rdMoves(st, s, c).length);
    if (full || (!canMove('a') && !canMove('b'))) { st.over = true; const a = st.board.filter(c => c.owner === 'a').length, b = st.board.filter(c => c.owner === 'b').length; st.winner = a > b ? 'a' : b > a ? 'b' : null; st.score = { a, b }; }
    else if (!canMove(st.turn)) st.turn = st.turn === 'a' ? 'b' : 'a';
    return info;
  }
  function rdAI(st, side) {
    let best = null, bs = -1e9;
    st.hand[side].forEach(card => rdMoves(st, side, card).forEach(m => {
      let s = st.rng() * 5;
      if (m.target != null) {
        const def = st.board[m.target].card, a = total(card), d = total(def);
        s += 40 + 60 * (a / (a + d) - 0.5) * 2;
      } else s += 10 + CARDS[card.c].ar.length * 3;
      s -= total(card) / 100; // save big cards for challenges when possible
      if (m.target == null) s += 0;
      if (s > bs) { bs = s; best = { card, move: m }; }
    }));
    return best;
  }

  /* ---------- Royal Rumble ---------- */
  // 15 cards per side. The ring-holder sacrifices a card to choose the match type (stat); the challenger plays a card against the holder.
  function rrNew(cardsA, cardsB, rng, first) {
    const a = cardsA.slice(), b = cardsB.slice();
    return { rng, a: { reserve: a, out: [] }, b: { reserve: b, out: [] }, ring: first || 'a', holder: null, drain: 1, pts: { a: 0, b: 0 }, round: 0, over: false, winner: null, log: [] };
  }
  // The ring side picks the holder card if none, then names a stat; the other side answers.
  function rrStart(st, holderCard) { const side = st[st.ring]; side.reserve = side.reserve.filter(c => c !== holderCard); st.holder = holderCard; st.drain = 1; }
  function rrRound(st, statIdx, sacrifice, challenger) {
    const ringSide = st.ring, foe = ringSide === 'a' ? 'b' : 'a', R = st[ringSide], F = st[foe];
    if (sacrifice) { R.reserve = R.reserve.filter(c => c !== sacrifice); R.out.push(sacrifice); }
    F.reserve = F.reserve.filter(c => c !== challenger);
    const hv = stats(st.holder)[statIdx] * st.drain, cv = stats(challenger)[statIdx];
    const hs = st.rng() < sigChance(st.holder) && sigStats(st.holder).includes(statIdx), cs = st.rng() < sigChance(challenger) && sigStats(challenger).includes(statIdx);
    const H = hv * (hs ? 1 + T.sigBoost : 1), C = cv * (cs ? 1 + T.sigBoost : 1);
    const holderWins = H >= C;
    const info = { ring: ringSide, stat: statIdx, holder: st.holder, challenger, hv: Math.round(H), cv: Math.round(C), hs, cs, sacrifice, holderWins };
    st.round++;
    if (holderWins) { F.out.push(challenger); st.pts[ringSide]++; st.drain *= 0.9; }
    else { R.out.push(st.holder); st.ring = foe; st.holder = challenger; st.drain = 1; }
    // end: a side with no reserve and the other has... last standing: whoever still has the holder when the opponent has no cards
    const foeNow = st.ring === 'a' ? 'b' : 'a';
    if (!st[foeNow].reserve.length) { st.over = true; st.pts[st.ring] += 3; st.winner = st.pts.a > st.pts.b ? 'a' : st.pts.b > st.pts.a ? 'b' : st.ring; }
    st.log.push(info);
    return info;
  }
  function rrAIStat(st, side) { const h = st.holder; if (!h || st.ring !== side) return 0; const s = stats(h); return s.indexOf(Math.max(...s)); }
  function rrAIChallenger(st, side, statIdx) {
    const res = st[side].reserve, need = stats(st.holder)[statIdx] * st.drain;
    const beats = res.filter(c => stats(c)[statIdx] > need * 1.02).sort((x, y) => stats(x)[statIdx] - stats(y)[statIdx]);
    if (beats.length) return beats[0]; // cheapest card that wins
    return res.slice().sort((x, y) => stats(x)[statIdx] - stats(y)[statIdx])[0]; // sacrifice the weakest
  }
  function rrAISacrifice(st, side) { const r = st[side].reserve; return r.length > 1 ? r.slice().sort((x, y) => total(x) - total(y))[0] : null; }

  /* ---------- Money in the Bank: 5 tougher opponents ---------- */
  const MITB_STEPS = [0.8, 0.92, 1.04, 1.16, 1.3];
  /* ---------- Survivor: 10 players, shared deck, 3rd loss out ---------- */
  function survivorDeck(rng, tier) {
    const t = Math.max(60, tier);
    return aiDeck(t, rng);
  }

  return {
    STATS, RAR, T, SUPPORTS, SUP_IDX, SYM, DIRS, CARDS, IDX, TYPE_NAME,
    mulberry32, pickR, shuffle, mk, stats, total, cardMult, sigStats, sigChance, isF, feed, feedValue, canPro, makePro, canFort,
    deckCards, deckPower, bestDeck, aiDeck, aiName, makeSpecs, tagMod, sideTotal, newGame, availCards, availM, availF, availS, canField, validPick,
    aiPick, aiSupport, playMatch, playExtra, extraSpec, autoPlayGame, smartPick, perfect, opponents, picksFor, pickTable, powerTier, isRarePlus,
    rdNew, rdMoves, rdPlay, rdAI, rdNeighbours, rrNew, rrStart, rrRound, rrAIStat, rrAIChallenger, rrAISacrifice, cardsNeeded,
    MITB_STEPS, survivorDeck
  };
});
