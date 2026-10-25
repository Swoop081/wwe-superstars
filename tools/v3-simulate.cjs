// Balance + invariant checks for the v3 engine.  node tools/v3-simulate.cjs [N]
const E = require('../v3/engine.js');
const N = +process.argv[2] || 3000;
const rng = E.mulberry32(7);
// 1) Even decks: bot vs AI -> ~50%, and a random-picking player does worse (skill matters).
function run(pickFn, diff, n) {
  let w = 0, perfect = 0, tie = 0;
  for (let i = 0; i < n; i++) {
    const power = 880 + rng() * 520;
    const da = E.aiDeck(power, rng), db = E.aiDeck(power * diff, rng);
    const g = E.newGame(da, db, rng); E.autoPlayGame(g, rng, pickFn);
    if (g.winner === 'a') w++; if (E.perfect(g)) perfect++;
  }
  return { win: (w / n * 100).toFixed(1) + '%', perfect: (perfect / n * 100).toFixed(1) + '%' };
}
const randomPick = (side, spec, future, r) => {
  const nd = E.cardsNeeded(spec.type), pick = [];
  pick.push(...E.shuffle(E.availM(side), r).slice(0, nd.m), ...E.shuffle(E.availF(side), r).slice(0, nd.f)); return pick;
};
console.log('smart  vs even   ', run(E.aiPick, 1.0, N));
console.log('random vs even   ', run(randomPick, 1.0, N));
console.log('smart  vs harder ', run(E.aiPick, 1.14, N));
console.log('smart  vs easier ', run(E.aiPick, 0.86, N));
// 2) Invariants: all spec sets are fieldable; every game ends in <=4 matches.
let bad = 0;
for (let i = 0; i < N; i++) { const g = E.newGame(E.aiDeck(1100, rng), E.aiDeck(1100, rng), rng); E.autoPlayGame(g, rng, E.aiPick); if (g.results.length > 4 || !g.over) bad++; if (g.results.some(r => r.a.cards.length === 0 || r.b.cards.length === 0)) bad++; }
console.log('invalid games', bad);
// 3) Level ladder: higher-level decks should win most.
let hi = 0, tot = 0;
for (let i = 0; i < 400; i++) { const lo = E.aiDeck(900, rng), up = E.aiDeck(1300, rng); const g = E.newGame(up, lo, rng); E.autoPlayGame(g, rng, E.aiPick); hi += g.winner === 'a'; tot++; }
console.log('stronger deck (+67%) wins', (hi / tot * 100).toFixed(1) + '%');
// 4) Ring Domination + Royal Rumble complete.
let rdOk = 0, rrOk = 0;
for (let i = 0; i < 300; i++) {
  const da = E.aiDeck(1100, rng), db = E.aiDeck(1100, rng);
  const st = E.rdNew(da, db, rng); let guard = 0;
  while (!st.over && guard++ < 40) { const mv = E.rdAI(st, st.turn); if (!mv) break; E.rdPlay(st, st.turn, mv.card, mv.move); }
  if (st.over) rdOk++;
  const cards = d => E.shuffle(d.m.concat(d.f, E.aiDeck(1100, rng).m, E.aiDeck(1100, rng).m).slice(0, 15), rng);
  const A = cards(da), B = cards(db); const rr = E.rrNew(A, B, rng, 'a');
  E.rrStart(rr, A[0]); let g2 = 0;
  const first = E.rrAIStat(rr, 'a');
  while (!rr.over && g2++ < 80) {
    const ring = rr.ring, foe = ring === 'a' ? 'b' : 'a';
    if (!rr.holder) { const c = rr[ring].reserve[0]; E.rrStart(rr, c); }
    const stat = E.rrAIStat(rr, ring), sac = E.rrAISacrifice(rr, ring), ch = E.rrAIChallenger(rr, foe, stat);
    if (!ch) break; E.rrRound(rr, stat, sac, ch);
  }
  if (rr.over) rrOk++;
}
console.log('ring domination finished', rdOk + '/300', ' royal rumble finished', rrOk + '/300');

// 4) Level dominance: a card one level higher should beat a random same-gender card one level lower most of the time, at any level
// (single stat, signature moves on, no supports).
{
  const out = {};
  for (const L of [1, 2, 10, 100, 300, 1000]) {
    let wins = 0, n = 6000;
    for (let i = 0; i < n; i++) {
      const a = E.mk(Math.floor(rng() * E.CARDS.length), { lvl: L + 1, mt: Math.floor(rng() * 100) });
      const b = E.mk(Math.floor(rng() * E.CARDS.length), { lvl: L, mt: Math.floor(rng() * 100) });
      const f = [Math.floor(rng() * 5)];
      const ta = E.sideTotal([a], f, null, rng).total, tb = E.sideTotal([b], f, null, rng).total;
      if (ta > tb) wins++; else if (ta === tb && rng() < 0.5) wins++;
    }
    out['L' + (L + 1) + ' vs L' + L] = (wins / n * 100).toFixed(1) + '%';
  }
  console.log('level+1 beats level (single stat):', JSON.stringify(out));
}
