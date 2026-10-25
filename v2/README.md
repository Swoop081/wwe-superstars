# WWE Superstars v2

One card per Superstar. A card scales upward forever: every duplicate merges into your card (+1 level), and every level multiplies all 7 stats and HP by 1.25.

## Play loop (about a minute a match)
1. Pick a fighter, beat an opponent in ~5 rounds.
2. Each round the caller names a stat, both cards are compared on it, the winner gets control (+25% action power, the loser −20%). Action cards deal the damage. Winning stat rounds charges the Finisher.
3. Ladder: each rung is a fixed opponent (level steps up every 3 rungs: warm-up → contender → boss). Win to climb.
4. Gauntlet: 5 fights in a row with one fighter, HP carries over (+30% rest). Clear = 3 picks; partial = ceil(wins/2).
5. Merging: level L needs 1+floor(L/2) duplicates; extras are kept as progress. Every pick screen has one card you already own.
6. Goals (no timers) pay picks; free daily cards bank up to 5. No energy, cooldowns or purchases.
7. Win → pick 1 of 3 cards (new card, or a merge that levels one up). Free daily card (also pick 1 of 3). Every 3rd win in a row = bonus pick.

## Files
- `engine.js` — all rules and balance numbers (`TUNE`). No DOM, so it can be simulated.
- `ui.js`, `style.css`, `index.html` — the mobile UI.
- `data/roster.json` — the Superstars (edit this). `data/roster.js` is generated.

## Add a Superstar
1. Put the artwork at `assets/superstars/<slug>.webp` (slug = name in lowercase with dashes).
2. `node tools/v2-add-superstar.cjs "Name" main|upper|mid|lower|opener "FINISHER" M|F power striking technique aerial submission charisma starpower`

Stats are level-1 values, roughly 35–95 (main events average ~75, openers ~67). Give each card clear strengths and weaknesses.

## Checks
- `node tools/v2-simulate.cjs` — balance and invariants (level+1 wins ~94%, scale-free at level 10,000).
- `python3 -m http.server 8766` then `node tests/v2-browser.cjs` — full UI flow in headless Chromium (needs Playwright).
