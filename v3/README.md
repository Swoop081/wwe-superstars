# WWE Superstars v3 — SuperCard-style rebuild

Play at `/v3/`. Your artwork is the card; the 4 stats sit in a slim band on the bottom edge.

**Core rules (modelled on WWE SuperCard):** 4 stats (Strength, Technical, Agility, Charisma). A game is 3 matches (Solo / Tag / Women's), each comparing one or two stats; best of 3, a tie adds an extra match. Deck = 3 Superstars + 3 Divas + 2 Support cards. Each card plays once per game. Signature moves trigger by rarity and boost the card's two best stats. Tag symbols: opposite arrows of one colour = diamond (+10%), mixed colours −5%. Win = 2 card picks, perfect win = 3, loss = 1. Picks come from a 12-slot table that refreshes when you find a Rare or better.

**Cards:** 9 rarities (Common → WrestleMania), level 0–100 (feed spare cards), +matches played, Pro (combine two copies) and Fortify (up to 3 more copies).

**Modes:** Play Now, Campaign (84 stages, 12 bosses, 3 stars, all open), Money in the Bank, Ring Domination, Royal Rumble (men's and women's), Survivor, People's Champion, Road to Glory, Elimination Chamber, King of the Ring, War (leagues), Crack the Case.

**Fair-play rules:** no purchases, no energy, no cooldowns, no timers, nothing locked behind progression. Opponents are computer decks matched to your deck; shortfalls in any deck are filled with loaner cards.

## Files
- `engine.js` rules (no DOM) · `ui.js` core screens · `modes.js` modes · `icons.js` line icons · `data/cards.js` generated
- Roster source: `v2/data/roster.json` → `node tools/v3-build-cards.cjs`
- Checks: `node tools/v3-simulate.cjs` (balance) and `python3 -m http.server 8766` + `node tests/v3-browser.cjs` (every mode, end to end)

## First run

A new game starts with a welcome screen (choose a name), a short how-to (cards and stats, deck, how a match works) and your starting team. The **?** button on the home screen replays the guide; tap the avatar to rename. Mode buttons show random wrestler art (thumbnails in `assets/superstars-t/`, 300px wide).

## No rarities (v3.10)

Wrestler cards have no rarity tiers. Every card starts at **level 1** with base stats around 38-70 (average 52). Each level adds a flat **+20** to all five stats (no maximum), which is far more than the gap between wrestlers, so a level 2 card beats a level 1 card about 87% of the time, and the same holds at level 300 or 1,000. Signature moves, support cards, tag diamonds and match experience are percentages of the **base** stats only, so they never outweigh a level lead. You can only level a wrestler up by spending **a duplicate of that same wrestler**: duplicates stack on the card (the green "+N DUP" tag) and each one is worth one level. Pro/Fortify and feeding other cards are gone. Colour is just the stat band; the hidden `rar` value in `data/cards.js` is only a star-power rank used to choose bosses, prizes and weak loaner cards.

Matches: tap the card(s) a match needs and it plays straight away (choose a support card first if you want one). The result screen shows the score, each match with both sides' cards and totals, and your card-pick reward.

Home: one screen with no page scroll. Play Now sits above a swipeable rail of game-mode tiles (4 pages, tiles in different sizes, page bars top right) and a Deck / Cards / Book menu pinned at the bottom. The rail remembers which page you were on.

## One screen, no scrolling (v3.14+)
Every screen fits a single iPhone screen (tested at 390×664, 390×700). Where there is too much to show, it is split behind nested controls instead of scrolling down: card lists are swipeable pages (‹ Page 1 / 4 ›), the card detail page uses tabs (Level up / Signature / Tag & ring), match results and bout results float over the screen, and the pick phase uses an overlay. Run `VH=664 FIT=1 node tests/v3-browser.cjs` to audit every screen.

## Street Fighter movie tie-in
14 fighters (Ryu, Ken Masters, Chun-Li, Guile, Zangief, Dhalsim, Blanka, E. Honda, Balrog, Vega, M. Bison, Cammy, Akuma, Joe) are appended to the end of the card list in `tools/v3-build-cards.cjs` (`mv:1`; indices 239-252 so saves stay valid). Base stats are mid-60s (normal cards ~52), names use the Press Start 2P arcade font. In packs until `T_MOVIE_END` in engine.js (30 Nov 2026); after that packs only contain movie cards you already own, so duplicates level them up. They are never in the starting team.
