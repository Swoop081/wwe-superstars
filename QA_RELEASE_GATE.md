# WWE Superstars — v1.0 release gate
Status: NOT READY FOR 1.0. Current candidate: v0.9.107.

## Checks completed by source inspection
- JavaScript syntax compiles.
- 239 superstar names unique; all six base stats numeric; finishers present.
- All 239 superstars now have gender and era/brand filtering coverage.
- All 21 WWE Live event match lists reference existing roster names.
- 13 action IDs unique.
- App, HTML and version.json synchronized.
- Singles, tag, 3v3 and 4v4 selection now expose the same filters.
- Malformed JSON save data no longer prevents boot; a separate recovery backup is written before onboarding (when local storage permits).

## Automated checks added
- tests/qa-static.cjs: 14 assertions covering data, version, selection, and rendering contracts.
- tests/qa-browser.cjs: Chromium mobile smoke for onboarding, navigation, filters, battle turn, shop purchase and duplicate-purchase protection, collection, WWE Live, reload and corrupt-save recovery.
- tests/qa-gameplay.cjs: match-turn HP invariants and damage sanity checks.
- .github/workflows/qa.yml: run both on main and pull requests.

## Must pass before v1.0
- Confirm GitHub Actions static and Chromium browser jobs green. The browser suite was committed but has not been observed passing yet.
- Test every exhibition mode (1v1, 2v2, 3v3, 4v4), player/opponent tag swaps, double knockouts, team elimination, and win/loss.
- Simulate many matches at varying levels and audit action-card damage, blocks, heals, and comeback probability.
- Test Superstar Road milestones, stage progression, rewards, 50-match coins and daily reset at local midnight.
- Test Daily Gauntlet full five-match progression and reward collection.
- Test WWE Live every event logo and media URL, match eligibility, progress persistence and reward.
- Test shop daily offers, purchases, refresh, coins and duplicate upgrades, including insufficient balance.
- Test collection sort/list/gallery, superstar fonts, long names and all portrait assets.
- Test finisher media for every roster member, blocked embeds and no-network fallback.
- Test migration from older saves, storage quota errors, corrupt JSON, reloads, background/foreground and offline mode.
- Test on real iPhone Safari / Home Screen install, Android Chrome, and desktop widths, including landscape and accessibility.
- Test release caching and version update with an actual deployed build.

No claim of 'bug-free' or v1.0-ready until the above are verified.

## QA execution update — 2026-10-08
- Re-evaluated source-level JavaScript syntax, version synchronization, unique roster names, gender/era tags, all eight normalized stat ranges (65–100), finishers, WWE Live references and selection filter wiring: passed.
- Corrected static test to validate normalized eight-stat records instead of raw six-stat records. Previously the test incorrectly inspected the raw BASE declaration.
- Browser/asset/gameplay GitHub Actions runs have not been verified as passing; the available connector exposes only PR-filtered workflow runs, which returned none for the latest commit. CI status remains unknown, not green.
- Release gate remains blocked pending observable mobile Chromium results, missing artwork check, multi-team stress tests and device QA.

## Additional QA — 2026-10-08
- Executed isolated source-code simulations: 120 singles matches and 180 multi-team matches (60 each of 2v2, 3v3 and 4v4). All reached a match-ending state without HP invariant failures; 217 manual substitutions were exercised. These are simulated-DOM tests, not full browser tests.
- Exercised shop purchasing and repeat-purchase prevention in an isolated runtime; coin deductions, level increments, and nonnegative balance passed.
- Balance simulations: 1,000 optimized matches produced approximately 50.7% player wins using the actual finish() callback; 1,000 random-card matches produced approximately 30.1% player wins. No balance changes requested.
- Added tests/qa-match-stress.cjs (300-match browser stress regression), corrected shop smoke selector and added HTTP server readiness check to CI. These new CI tests still need a confirmed passing workflow run.
- User approved existing balance. Do not alter combat difficulty solely to force random selection to 50% wins.

## Mobile QA instrumentation — 2026-10-08
- Added tests/qa-mobile-visual.cjs to capture 12 screenshots across 390px iPhone and 360px Android viewports: home, collection, shop, exhibition, battle and WWE Live. Structural assertions and uncaught JS error checks are included. CI uploads captures as mobile-qa-screenshots artifact, including when the browser test step fails.
- Confirmed eight core portrait paths (Roman Reigns, Cody Rhodes, Rhea Ripley, CM Punk, IYO SKY, Seth Rollins, Becky Lynch, Randy Orton) exist in GitHub; connector cannot decode binary WebP content, so existence is inferred from binary decode response rather than image integrity. Full 239-asset HTTP HEAD audit remains unverified.
- Tried to retrieve push CI status; available workflow lookup returned no runs, so browser, asset and mobile screenshot tests remain unverified. No v1.0 release approval.
