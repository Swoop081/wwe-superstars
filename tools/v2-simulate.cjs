// Balance + invariant simulator for the v2 engine.  node tools/v2-simulate.cjs [matchesPerCell]
// Both sides use the same CPU policy, so win rates measure card strength, not skill.
const path = require('path');
const Engine = require(path.join(__dirname, '..', 'v2', 'engine.js'));
const ROSTER = require(path.join(__dirname, '..', 'v2', 'data', 'roster.js'));
const N = +process.argv[2] || 6000;
const rng = Engine.mulberry32(20261025);
const pick = a => a[Math.floor(rng() * a.length)];
const failures = [];

function play(wa, la, wb, lb, skillA, skillB) {
  const m = Engine.createMatch(wa, la, wb, lb, { rng });
  Engine.autoPlay(m, skillA, skillB);
  for (const f of [m.a, m.b]) if (!isFinite(f.hp) || f.hp < 0 || f.hp > f.max + 1e-9) failures.push('bad hp ' + wa.n + ' vs ' + wb.n);
  if (!m.over) failures.push('match did not finish');
  return m;
}
function rate(label, fa, fb, la, lb, n) {
  let wins = 0, rounds = 0, fin = 0, capped = 0;
  for (let i = 0; i < n; i++) {
    const a = fa(), b = fb();
    if (a === b) { i--; continue; }
    const m = play(a, la, b, lb);
    if (m.winner === 'a') wins++;
    rounds += m.round; if (m.round >= Engine.TUNE.maxRounds) capped++;
  }
  const r = { label, win: +(wins / n * 100).toFixed(1), rounds: +(rounds / n).toFixed(1), capped };
  console.log(label.padEnd(58), String(r.win).padStart(5) + '% win', String(r.rounds).padStart(5), 'rounds', capped ? '(' + capped + ' hit round cap)' : '');
  return r;
}
const any = () => pick(ROSTER);
const tier = t => { const p = ROSTER.filter(w => w.p === t); return () => pick(p); };
const ME = tier('Main Event'), UM = tier('Upper Midcard'), MID = tier('Midcard'), LM = tier('Lower Midcard'), OP = tier('Opener');

console.log('TUNE', JSON.stringify(Engine.TUNE));
console.log('--- equal level (should hover near 50%, matches 6-9 rounds) ---');
rate('any vs any, L1 vs L1', any, any, 1, 1, N);
console.log('--- tier upsets at equal level (underdog = first card) ---');
rate('Opener vs Main Event, L1 vs L1', OP, ME, 1, 1, N);
rate('Lower Mid vs Upper Mid, L1 vs L1', LM, UM, 1, 1, N);
rate('Midcard vs Main Event, L1 vs L1', MID, ME, 1, 1, N);
console.log('--- the level rule: higher level should mostly win ---');
rate('any L2 vs any L1', any, any, 2, 1, N);
rate('WORST CASE: Opener L2 vs Main Event L1', OP, ME, 2, 1, N);
rate('any L3 vs any L2', any, any, 3, 2, N);
rate('any L3 vs any L1', any, any, 3, 1, N);
console.log('--- scale-free check (must match the small-level rows) ---');
rate('any L11 vs any L10', any, any, 11, 10, N);
rate('any L101 vs any L100', any, any, 101, 100, N);
rate('any L10001 vs any L10000', any, any, 10001, 10000, N);
rate('Opener L10001 vs Main Event L10000', OP, ME, 10001, 10000, N);
rate('any L10000 vs any L10000', any, any, 10000, 10000, N);
console.log('--- extreme gaps must not break (NaN/stall guards) ---');
rate('any L5000 vs any L1', any, any, 5000, 1, 500);
rate('any L1 vs any L5000', any, any, 1, 5000, 500);

// Display formatting spot checks
const w = ROSTER.find(x => x.n === 'Roman Reigns');
console.log('--- display ---');
for (const L of [1, 2, 10, 50, 100, 1000, 10000]) console.log('Roman Reigns L' + L, 'Power', Engine.fmtStat(w.s[0], L), '| HP', Engine.fmtHp(w, L));
if (failures.length) { console.error('FAILURES', failures.slice(0, 10)); process.exit(1); }
console.log('no invariant failures');
