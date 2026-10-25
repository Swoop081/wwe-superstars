// Drives the v2 UI end to end in headless Chromium.
// Usage: start a static server at the repo root (python3 -m http.server 8766), then: node tests/v2-browser.cjs
let chromium; try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/opt/npm-tools/node_modules/playwright')); }
const assert = require('node:assert/strict');
const BASE = process.env.V2_URL || 'http://127.0.0.1:8766/v2/index.html';
(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const errors = [], badImages = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('response', r => { if (r.status() >= 400 && /assets\//.test(r.url())) badImages.push(r.status() + ' ' + r.url()); });
  await page.goto(BASE + '?dev=1', { waitUntil: 'load' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'load' });

  // Starter pack
  await page.click('text=Open starter pack');
  assert.equal(await page.locator('.card').count(), 5, 'starter pack shows 5 cards');
  await page.click('text=Let\'s go');
  assert((await page.textContent('.stats-row')).includes('5/239'), 'owns 5 cards');
  await page.screenshot({ path: process.env.SHOTS + '/1-home.png' });

  // Play several full matches by always taking the first option on each screen.
  let rounds = 0, wins = 0, merges = 0;
  for (let match = 0; match < 6; match++) {
    await page.click('button.btn:has-text("Fight")');
    await page.locator('.card.pick').first().click();
    await page.click('text=Start match');
    for (let guard = 0; guard < 80; guard++) {
      if (await page.locator('text=Open reward card').count() || await page.locator('h2:has-text("Defeat")').count()) break;
      if (await page.locator('.statbtn').count()) { await page.locator('.statbtn').first().click(); continue; }
      if (await page.locator('.actbtn.finisher').count()) { await page.locator('.actbtn.finisher').click(); rounds++; continue; }
      if (await page.locator('.actbtn').count()) { if (match === 0 && rounds === 1) await page.screenshot({ path: process.env.SHOTS + '/2-action.png' }); await page.locator('.actbtn').first().click(); rounds++; continue; }
      const next = page.locator('button.btn:has-text("Next round"), button.btn:has-text("Finish match")');
      if (await next.count()) { if (match === 0 && rounds === 1) await page.screenshot({ path: process.env.SHOTS + '/3-result.png' }); await next.first().click(); continue; }
      throw new Error('stuck on unknown screen');
    }
    if (await page.locator('text=Open reward card').count()) {
      wins++; await page.click('text=Open reward card');
      assert.equal(await page.locator('.grid3 .card').count(), 3, 'reward offers 3 cards');
      if (match === 0 || wins === 1) await page.screenshot({ path: process.env.SHOTS + '/4-pick.png' });
      await page.locator('.grid3 .card').nth(wins % 3).click();
      if (await page.locator('.merge:has-text("MERGED")').count()) merges++;
      if (match === 0 || wins === 1) await page.screenshot({ path: process.env.SHOTS + '/4-reward.png' });
      await page.click('button.btn:has-text("Home")');
    } else { await page.click('text=Back home'); }
  }
  assert((await page.textContent('.stats-row')).includes('Ladder rung'), 'rung shown');
  console.log('played 6 matches, rounds', rounds, 'wins', wins, 'merges', merges);

  // Daily free card: claimable once, then locked until tomorrow
  assert(await page.locator('text=Free daily card').count() === 1, 'daily card offered');
  await page.click('text=Free daily card');
  assert.equal(await page.locator('.grid3 .card').count(), 3, 'daily offers 3 cards');
  await page.locator('.grid3 .card').first().click();
  assert(await page.locator('.card.big').count() === 1, 'daily card revealed');
  await page.click('button.btn:has-text("Home")');
  assert(await page.locator('text=Free daily card').count() === 0, 'daily card cannot be claimed twice');
  assert((await page.textContent('body')).includes('Next free card in'), 'daily countdown shown');

  // Level 10,000 rendering
  await page.evaluate(() => UI.dev(10000));
  await page.click('button.btn:has-text("Collection")');
  const t = await page.locator('.card').first().innerText();
  assert(/e\d{3}/.test(t), 'level 10,000 shows scientific notation: ' + t.replace(/\n/g, ' '));
  await page.screenshot({ path: process.env.SHOTS + '/5-collection-L10000.png' });
  // Battle at level 10,000 still works
  await page.click('text=‹ Home'); await page.click('button.btn:has-text("Fight")');
  await page.locator('.card.pick').first().click(); await page.click('text=Start match');
  for (let g = 0; g < 80; g++) {
    if (await page.locator('text=Open reward card').count() || await page.locator('h2:has-text("Defeat")').count()) break;
    if (await page.locator('.statbtn').count()) { await page.locator('.statbtn').first().click(); continue; }
    if (await page.locator('.actbtn').count()) { await page.locator('.actbtn').first().click(); continue; }
    await page.locator('button.btn:has-text("Next round"), button.btn:has-text("Finish match")').first().click();
  }
  assert(!(await page.content()).includes('NaN') && !(await page.content()).includes('Infinity'), 'no NaN/Infinity on screen');
  await page.screenshot({ path: process.env.SHOTS + '/6-end-L10000.png' });

  assert.deepEqual(errors, [], 'console/page errors: ' + errors.join(' | '));
  assert.deepEqual(badImages, [], 'asset requests failed: ' + badImages.slice(0, 5).join(' | '));
  console.log('PASS v2 browser flow');
  await browser.close();
})().catch(e => { console.error('FAIL', e.message); process.exit(1); });
