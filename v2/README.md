# WWE Superstars v2

One card per Superstar. A card scales upward forever: every duplicate merges into your card (+1 level), and every level multiplies all 7 stats and HP by 1.25.

## Play loop (about a minute a match)
1. Pick a fighter, beat an opponent in ~5 rounds.
2. Each round the caller names a stat, both cards are compared on it, the winner gets control (+25% action power, the loser −20%). Moves deal the damage: a move that matches the called stat is a COMBO. Winning stat rounds charges the Finisher.
3. Win → a random card (new card, or a merge that levels one up). Free daily card. Every 3rd win in a row = bonus card.

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
