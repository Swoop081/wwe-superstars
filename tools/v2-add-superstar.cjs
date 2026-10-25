// Add a new Superstar in one command (artwork must already be in assets/superstars/<slug>.webp).
//   node tools/v2-add-superstar.cjs "Name" TIER "FINISHER NAME" M|F power striking technique aerial submission charisma starpower
// TIER: main | upper | mid | lower | opener.  Stats are level-1 values, roughly 35-95.
// Example: node tools/v2-add-superstar.cjs "Rusev" upper "ACCOLADE" M 92 85 55 40 60 70 72
const fs = require('fs'), path = require('path'), cp = require('child_process');
const root = path.join(__dirname, '..');
const [name, tierKey, finisher, gender, ...stats] = process.argv.slice(2);
const TIER = { main: 'Main Event', upper: 'Upper Midcard', mid: 'Midcard', lower: 'Lower Midcard', opener: 'Opener' }[String(tierKey).toLowerCase()];
if (!name || !TIER || !finisher || !/^[MF]$/.test(gender || '') || stats.length !== 7) {
  console.error('Usage: node tools/v2-add-superstar.cjs "Name" main|upper|mid|lower|opener "FINISHER" M|F str stk tec agi sub cha star'); process.exit(1);
}
const file = path.join(root, 'v2', 'data', 'roster.json');
const roster = JSON.parse(fs.readFileSync(file, 'utf8'));
if (roster.some(r => r.n.toLowerCase() === name.toLowerCase())) { console.error(name + ' already exists'); process.exit(1); }
const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
if (!fs.existsSync(path.join(root, 'assets', 'superstars', slug + '.webp'))) { console.error('Artwork not found: assets/superstars/' + slug + '.webp - add the image first, then rerun.'); process.exit(1); }
roster.push({ n: name, a: slug, p: TIER, f: finisher.toUpperCase(), g: gender, s: stats.map(Number) });
fs.writeFileSync(file, JSON.stringify(roster));
cp.execFileSync('node', [path.join(__dirname, 'v2-build-roster.cjs')], { stdio: 'inherit' });
console.log('Added ' + name + ' (' + TIER + '). New cards can be won immediately; owners are unaffected.');
