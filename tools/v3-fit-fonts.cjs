// Assigns a Google Font to every card, measures each name in its font and writes v3/data/fonts.js
// CFONTS[name] = [family, weight, fontSizeInCardWidthUnits, lines]
// Needs: npm pack of @fontsource/<font> tarballs in FONTDIR (we use them only to MEASURE; the game loads the real fonts from Google Fonts).
// Usage: FONTDIR=/path/with/tgz node tools/v3-fit-fonts.cjs
const fs = require('fs'), path = require('path'), vm = require('vm'), cp = require('child_process');
let chromium; try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/opt/npm-tools/node_modules/playwright')); }
const { EXPLICIT, MALE_POOL, FEMALE_POOL } = require('./v3-fontmap.cjs');
const root = path.join(__dirname, '..');
const FONTDIR = process.env.FONTDIR, WORK = process.env.WORK || '/tmp/v3fonts';
const ctx = { globalThis: {} }; vm.createContext(ctx); vm.runInContext(fs.readFileSync(path.join(root, 'v3/data/cards.js'), 'utf8').replace(/^\s*(const|let|var)\s+CARDS/m, 'CARDS'), ctx);
const CARDS = ctx.CARDS || ctx.globalThis.CARDS;
const slug = f => f.toLowerCase().replace(/ /g, '-');
fs.mkdirSync(WORK, { recursive: true });
const unpack = f => {
  const re = new RegExp('^fontsource-' + slug(f).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '-\\d+\\.\\d+\\.\\d+\\.tgz$'), tgz = fs.readdirSync(FONTDIR).find(x => re.test(x));
  if (!tgz) return null;
  const dir = path.join(WORK, slug(f)); if (!fs.existsSync(dir)) { fs.mkdirSync(dir, { recursive: true }); cp.execSync('tar xzf "' + path.join(FONTDIR, tgz) + '" -C "' + dir + '" --strip-components=1'); }
  const files = fs.readdirSync(path.join(dir, 'files')).filter(x => /-latin-\d+-normal\.woff2$/.test(x));
  return files.length ? Object.fromEntries(files.map(x => [+x.match(/latin-(\d+)-normal/)[1], path.join(dir, 'files', x)])) : null;
};
const okFont = f => !!unpack(f);
const SHARE_OK = new Set(["The Rock '98"]);
const used = new Map(), assign = {};
const spec = s => { const [f, w] = s.split(':'); return { f, w: w || '' }; };
const take = (n, s) => { const { f, w } = spec(s); if (!okFont(f)) { console.log('skip (no latin normal)', f); return false; } if (used.has(f) && !SHARE_OK.has(n)) return false; if (!used.has(f)) used.set(f, n); assign[n] = { f, w }; return true; };
const names = CARDS.map(c => c.n), gender = Object.fromEntries(CARDS.map(c => [c.n, c.g]));
for (const n of names) if (EXPLICIT[n] && gender[n] === 'M') take(n, EXPLICIT[n]);
for (const n of names) if (EXPLICIT[n] && gender[n] === 'F') take(n, EXPLICIT[n]);
const pools = { M: MALE_POOL.slice(), F: FEMALE_POOL.slice() };
for (const n of names) if (!assign[n]) { const p = pools[gender[n]]; while (p.length && !take(n, p.shift())); if (!assign[n]) throw new Error('pool empty for ' + n); }
const fams = [...new Set(Object.values(assign).map(a => a.f))];
console.log(names.length, 'cards,', fams.length, 'fonts,', used.size, 'unique owners');

const faces = [];
for (const f of fams) {
  const files = unpack(f), ws = Object.keys(files).map(Number);
  for (const a of Object.values(assign)) if (a.f === f && a.w && !ws.includes(+a.w)) console.log('WARN weight', a.w, 'missing for', f, 'have', ws.join(','));
  faces.push({ f, files });
}
(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--allow-file-access-from-files'] });
  const page = await browser.newPage();
  const css = faces.map(({ f, files }) => Object.entries(files).map(([w, p]) => '@font-face{font-family:"' + f + '";font-weight:' + w + ';src:url("file://' + p + '")}').join('')).join('');
  fs.writeFileSync(path.join(WORK, 'm.html'), '<style>' + css + '</style><body></body>');
  await page.goto('file://' + path.join(WORK, 'm.html'));
  const out = await page.evaluate(async ({ assign, faces }) => {
    const res = {}, cv = document.createElement('canvas').getContext('2d');
    const avail = Object.fromEntries(faces.map(x => [x.f, Object.keys(x.files).map(Number)]));
    const pick = (f, w) => { const a = avail[f]; if (w && a.includes(+w)) return +w; if (a.includes(400)) return 400; return a[0]; };
    for (const [n, a] of Object.entries(assign)) {
      const w = pick(a.f, a.w); await document.fonts.load(w + ' 100px "' + a.f + '"', 'ABC');
      cv.font = w + ' 100px "' + a.f + '"';
      const up = n.toUpperCase().replace(/\s*\(SHIELD\)/, ' (SHIELD)'), words = up.split(/\s+/);
      const wd = s => cv.measureText(s).width + 3 * s.length; // + .03em letter spacing at 100px
      const W = 88, one = W * 100 / wd(up); // font-size in cqw so one line spans W cqw
      let f2 = 0; for (let i = 1; i < words.length; i++) { const m = Math.max(wd(words.slice(0, i).join(' ')), wd(words.slice(i).join(' '))); f2 = Math.max(f2, W * 100 / m); }
      const one1 = Math.min(one, 16), two = Math.min(f2, 13.5);
      res[n] = (one1 >= 11 || !f2) ? [a.f, a.w, +Math.max(7, one1).toFixed(1), 1] : [a.f, a.w, +Math.max(7, two).toFixed(1), 2];
      if (a.w && w !== +a.w) res[n][1] = '';
    }
    return res;
  }, { assign, faces });
  await browser.close();
  const bad = Object.entries(out).filter(([, v]) => v[2] < 8.5);
  console.log('small names:', bad.map(([n, v]) => n + ' ' + v[0] + ' ' + v[2]).join(' | ') || 'none');
  fs.writeFileSync(path.join(root, 'v3/data/fonts.js'), '// generated by tools/v3-fit-fonts.cjs: name -> [Google Font family, weight, font-size (cqw), lines]\nglobalThis.CFONTS = ' + JSON.stringify(out) + ';\n');
  console.log('wrote v3/data/fonts.js');
})();
