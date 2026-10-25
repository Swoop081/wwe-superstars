// Drives the v3 UI end to end in headless Chromium: every mode must start, play and pay out without errors.
// Usage: static server at repo root (python3 -m http.server 8766), then: SHOTS=/tmp/shots node tests/v3-browser.cjs
let chromium; try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/opt/npm-tools/node_modules/playwright')); }
const assert = require('node:assert/strict');
const BASE = process.env.V3_URL || 'http://127.0.0.1:8766/v3/index.html';
const SH = process.env.SHOTS || '/tmp/shots';
(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 390, height: 800 }, isMobile: true, hasTouch: true });
  const errors = [], bad = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error' && !/TUNNEL|fonts/.test(m.text())) errors.push(m.text()); });
  page.on('response', r => { if (r.status() >= 400 && /assets\//.test(r.url())) bad.push(r.status() + ' ' + r.url()); });
  await page.goto(BASE + '?dev=1', { waitUntil: 'load' });
  await page.evaluate(() => localStorage.clear()); await page.reload({ waitUntil: 'load' });
  await page.click('button.btn:has-text("Start")');
  assert((await page.textContent('body')).includes('Cards'), 'home shown');
  const C = s => page.locator(s);
  const home = async () => { await page.evaluate(() => UI.home()); };

  // Plays a 3-match game screen by screen, always choosing the first legal cards.
  async function playGame() {
    for (let g = 0; g < 60; g++) {
      if (await C('button:has-text("TAP TO CONTINUE")').count()) { await C('button:has-text("TAP TO CONTINUE")').first().click(); return true; }
      if (await C('.tray').count() && await C('.slotarea').count()) {
        const need = await page.evaluate(() => { const e = document.querySelector('.slotempty small'); const m = e && /Tap (\d)/.exec(e.textContent); if (m) return +m[1]; return 0; });
        for (let k = 0; k < need; k++) { const el = C('.tray .cf:not(.used):not(.dim):not(.sel)').first(); await el.click(); }
        if (g === 1) await page.screenshot({ path: SH + '/v3-selected.png' });
        await C('button:has-text("PLAY")').click(); continue;
      }
      const nx = C('button:has-text("NEXT MATCH"), button:has-text("FINISH")');
      if (await nx.count()) { if (g < 6) await page.screenshot({ path: SH + '/v3-reveal.png' }); await nx.first().click(); continue; }
      throw new Error('stuck in game');
    }
    throw new Error('game never ended');
  }
  // Opens every pick on the table until done.
  async function takePicks() {
    for (let g = 0; g < 20; g++) {
      if (await C('button.pk:not(.open)').count()) { await C('button.pk:not(.open)').first().click(); continue; }
      const done = C('button:has-text("Done")'); if (await done.count()) { await done.first().click(); return; }
      return;
    }
  }

  // Wild
  await C('button:has-text("Play Now")').click();
  assert.equal(await C('.opp').count(), 3, 'three opponents');
  await C('.opp').nth(1).click();
  await playGame();
  assert(await C('.pickgrid').count(), 'pick table shown');
  await page.screenshot({ path: SH + '/v3-picks.png' });
  const before = await page.evaluate(() => V3.S.cards.length + V3.S.sups.length);
  await takePicks();
  assert((await page.evaluate(() => V3.S.cards.length + V3.S.sups.length)) >= before + 1, 'picks add cards');

  await home();
  // Collection / book / detail / level up / deck
  await C('button.tile:has-text("Cards")').click(); await page.screenshot({ path: SH + '/v3-collection.png' });
  await C('.grid .cf').first().click(); await page.screenshot({ path: SH + '/v3-detail.png' });
  const lvBefore = await page.evaluate(() => V3.S.cards.map(c => c.lvl).reduce((a, b) => a + b, 0));
  await C('button:has-text("Level up")').click(); await C('button:has-text("Select all unused")').click();
  if (await C('button:has-text("Feed")').isEnabled()) { await C('button:has-text("Feed")').click(); }
  await home(); await C('button.tile:has-text("Book")').click(); assert((await page.textContent('body')).includes('of 239'), 'book');
  await home(); await C('button.tile:has-text("Deck")').click(); await C('button:has-text("Auto-build")').click(); await page.screenshot({ path: SH + '/v3-deck.png' });

  // Modes
  const modeTest = async (id, fn) => { await page.evaluate(i => UI.mode(i), id); try { await fn(); } catch (e) { throw new Error(id + ': ' + e.message); } await home(); };
  await modeTest('campaign', async () => { await C('.stg').first().click(); await playGame(); await takePicks(); });
  await modeTest('mitb', async () => { await C('button:has-text("Start climbing")').click(); await playGame(); await takePicks(); });
  await modeTest('rtg', async () => { for (let r = 0; r < 4; r++) { await playGame(); await C('button:has-text("Next round"), button:has-text("Finish")').first().click(); } await takePicks(); });
  await modeTest('surv', async () => {
    for (let r = 0; r < 12; r++) {
      if (await C('button:has-text("Collect rewards")').count()) break;
      await C('button:has-text("Play round")').click();
      if (await C('.slotarea').count()) await playGame();
    }
    await C('button:has-text("Collect rewards")').click(); await takePicks();
  });
  await modeTest('pcc', async () => { await C('.grid2 .cf').first().click(); await C('.opp').first().click(); await playGame(); await takePicks(); });
  await modeTest('war', async () => { await C('.opp').first().click(); await playGame(); await takePicks(); });
  await modeTest('kotr', async () => { await C('button:has-text("Simulate all")').click(); for (let g = 0; g < 4; g++) { const b = C('button:has-text("Play "), button:has-text("Collect rewards")'); if (await C('button:has-text("Collect rewards")').count()) break; await C('.btn.big').first().click(); } await C('button:has-text("Collect rewards")').click(); await takePicks(); });
  await modeTest('ec', async () => { for (let i = 0; i < 10; i++) { await C('.grid .cf').first().click(); } await C('button:has-text("Collect rewards")').click(); await takePicks(); });
  await modeTest('case', async () => { for (let i = 0; i < 8; i++) { if (await C('.banner').count()) break; for (const k of [1, 2, 3, 4]) await C('.keys button:has-text("' + k + '")').first().click(); await C('button:has-text("Guess")').click(); } await page.screenshot({ path: SH + '/v3-case.png' }); });
  // Ring Domination
  await modeTest('rd', async () => {
    for (let g = 0; g < 40; g++) {
      if (await C('button:has-text("collect rewards")').count()) break;
      await page.waitForTimeout(250);
      if (await C('.hand .cf').count() === 0) continue;
      if (await C('.cell.legal').count() === 0) { await C('.hand .cf').first().click(); }
      if (await C('.cell.legal').count()) { await C('.cell.legal').first().click(); await page.waitForTimeout(1700); }
      else if (await C('.hand .cf').count() > 1) { await C('.hand .cf').nth(1).click(); }
    }
    await page.screenshot({ path: SH + '/v3-rd.png' });
    for (let g = 0; g < 20 && !(await C('button:has-text("collect rewards")').count()); g++) await page.waitForTimeout(500);
    await C('button:has-text("collect rewards")').click(); await takePicks();
  });
  // Royal Rumble
  await modeTest('rr', async () => {
    for (let g = 0; g < 120; g++) {
      if (await C('button:has-text("Collect rewards")').count()) break;
      if (await C('button:has-text("Continue")').count()) { await C('button:has-text("Continue")').click(); continue; }
      if (await C('h3:has-text("Choose your ring-holder")').count()) { await C('.grid .cf').first().click(); continue; }
      if (await C('h3:has-text("Name the match type")').count()) { await C('.tiles4 .stile').first().click(); continue; }
      if (await C('h3:has-text("Sacrifice a card")').count()) { await C('button:has-text("weakest")').click(); continue; }
      if (await C('h3:has-text("Send a challenger")').count()) { if (g === 3) await page.screenshot({ path: SH + '/v3-rr.png' }); await C('.grid .cf').first().click(); continue; }
      throw new Error('rr stuck');
    }
    await C('button:has-text("Collect rewards")').click(); await takePicks();
  });
  assert((await page.content()).indexOf('NaN') < 0, 'no NaN');
  assert.deepEqual(errors, [], 'errors: ' + errors.join(' | '));
  assert.deepEqual(bad, [], 'assets: ' + bad.slice(0, 3).join(' | '));
  console.log('PASS v3 browser flow');
  await browser.close();
})().catch(e => { console.error('FAIL', e.message); process.exit(1); });
