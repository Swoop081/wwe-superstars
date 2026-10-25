# WWE Superstars v3 — SuperCard-style rebuild

Play at `/v3/`. Your artwork is the card; the 4 stats sit in a slim band on the bottom edge.

**Core rules (modelled on WWE SuperCard):** 4 stats (Power, Toughness, Speed, Charisma). A game is 3 matches (Solo / Tag / Divas), each comparing one or two stats; best of 3, a tie adds an extra match. Deck = 4 Superstars + 2 Divas + 2 Support cards. Each card plays once per game. Signature moves trigger by rarity and boost the card's two best stats. Tag symbols: opposite arrows of one colour = diamond (+10%), mixed colours −5%. Win = 2 card picks, perfect win = 3, loss = 1. Picks come from a 12-slot table that refreshes when you find a Rare or better.

**Cards:** 9 rarities (Common → WrestleMania), level 0–100 (feed spare cards), +matches played, Pro (combine two copies) and Fortify (up to 3 more copies).

**Modes:** Wild, Campaign (84 stages, 12 bosses, 3 stars, all open), Money in the Bank, Ring Domination, Royal Rumble (men's and women's), Survivor, People's Champion, Road to Glory, Elimination Chamber, King of the Ring, War (leagues), Crack the Case.

**Fair-play rules:** no purchases, no energy, no cooldowns, no timers, nothing locked behind progression. Opponents are computer decks matched to your deck; shortfalls in any deck are filled with loaner cards.

## Files
- `engine.js` rules (no DOM) · `ui.js` core screens · `modes.js` modes · `icons.js` line icons · `data/cards.js` generated
- Roster source: `v2/data/roster.json` → `node tools/v3-build-cards.cjs`
- Checks: `node tools/v3-simulate.cjs` (balance) and `python3 -m http.server 8766` + `node tests/v3-browser.cjs` (every mode, end to end)
