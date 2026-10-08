# WWE Superstars — Development Handoff
Updated: 2026-10-09
Repository: https://github.com/Swoop081/wwe-superstars
Branch: main
Game: https://swoop081.github.io/wwe-superstars/
Current app version: **v0.9.162** (last version commit `4d1fbfe48811b1e66651b8a6bb07fd517b179085`).

## How to continue
The user expects requested changes **implemented and committed to main**, not just proposed. Use GitHub tools to fetch and update source files; validate JavaScript syntax when possible. For each release increment the version in **app.js** (`APP_VERSION`), **index.html** (all occurrences), and **version.json** (last commit). Provide link `https://swoop081.github.io/wwe-superstars/?refresh=NNN` and final commit. Do not claim a deployment is live until verified. GitHub Pages sometimes lags several minutes; user recently stayed on v0.9.159 while main was v0.9.161, then publishing caught up. Do not delete the iPhone Home Screen PWA or clear website data because saves may be local.

## Latest changes (v0.9.159–162)
- **v0.9.159:** Faction Warfare tag partners on the bench now regenerate HP each exchange, same formula as ordinary 2v2 (`Math.max(1,Math.round(avgStat(statsAt(bench.w,bench.l))/6))`), for both teams. This is restricted to `b.faction&&!b.faction.final` in `app.js`, leaving 4v4 WarGames without bench regeneration.
- **v0.9.160:** Faction Warfare division setbacks in `faction-warfare.js`: ladder loss decreases streak by 1 (minimum 0); contender loss resets ladder to 0/3; championship match loss returns to contender; title defence loss strips champion and returns to contender, not the bottom. A successful defence schedules another in four weeks. User specifically clarified these rules.
- **v0.9.161:** Fixed free tags by tapping teammate names. `multiChooseTag(index)` now returns false, all teammate buttons disabled, label says `YOUR TEAM · TAG CARD REQUIRED`. Tagging should require the TAG action card. **Potential follow-up:** verify that TAG action actually swaps the partner in faction multi matches; current free-tap handler disabled and code still has `multiSwap`. Investigate if user reports TAG card not switching.
- **v0.9.162:** Reordered Faction Warfare dashboard in `faction-warfare-ui.js` to display World, Intercontinental and Tag championship panels **above** the `SEASON FACTIONS · 8 TEAMS` grid. The match status/reward note follows the faction grid. User requested this from screenshot.

## Game architecture
Vanilla JavaScript/CSS/HTML deployed via GitHub Pages, optimized for iPhone Home Screen PWA.
- `app.js`: `BASE` roster, collection, battle mechanics, action cards, tag and multi-wrestler mechanics, economy, rewards, World Tour, WWE Live, Daily Gauntlet, rendering and app version.
- `faction-warfare.js`: season rules, opponent generation, three championship divisions, ladder/contender/title/defence progression, WarGames resolution.
- `faction-warfare-ui.js`: faction selection, naming, season dashboard, opponent roster details, match launch, WarGames and rewards.
- `faction-warfare.css`, `style.css`: layout/styling.
- `finisher-media.json`: Tenor finisher GIF URLs.
- `index.html`: app bootloader/version cache busting.
- `version.json`: published app version.

## Faction Warfare rules and current user's season
User's season (last screenshot week 27) is active, faction locked until completion. Four roles: World **Drew McIntyre (LVL 9)**, Intercontinental **Alexa Bliss (LVL 6)**, Tag **Damian Priest (LVL 9)** and **Chelsea Green (LVL 8)**. User levels are live from collection; CPU faction levels fixed when season created. Eight factions total (player + seven CPU). Dashboard factions can be tapped for full card details.

Three independent championship divisions: 3 ladder victories, then Number One Contender match, then Championship match. Ladder losses -1 win; contender losses return to ladder 0/3; championship match losses return to contender; lost title defence returns to contender. Champions defend every four weeks. Mandatory defences take priority. Winning all three championships unlocks 4v4 elimination WarGames. Regular faction tag matches are **first pin wins**, not elimination. Win regular match: two random cards; loss: one random card. WarGames win: level-3 card for each surviving faction wrestler plus two random cards; loss: one random card, retry permitted. Season remains locked until WarGames completed.

CPU faction names include The NXT Generation, The Icons, The Street Profits, Attitude Era, The Bella Empire, The Reckoning, The Vanguard. Team rosters and levels visible on dashboard and details.

## Recent important fixes before v0.9.159
- v0.9.158: milestone `COIN EARNED!` screen after match rewards; one coin every 50 completed matches and every 15 World Tour stages. `awardMatchCoin()` queues `state.pendingCoinAwards`, `nextMatchReward()` calls `showPendingCoinAward`. **Possible gap:** WWE Live/Gauntlet use different reward routes and may not show the pending notification immediately.
- v0.9.157: Bron Breakker finisher GIF set to https://tenor.com/en-AU/view/bron-breakker-bron-breakker-spear-bron-breaker-spear-penta-bron-breakker-netflix-wwe-gif-18246654918055046453
- v0.9.155: bonus reward after 50 wins correctly returns to faction mode instead of home.
- v0.9.154: normal faction tag match first pin/fall wins.
- v0.9.153: compact CPU tag bench list.
- v0.9.152: enlarged faction roster detail cards.
- v0.9.151: tapping faction shows 2x2 full wrestler card grid.
- v0.9.150: faction Home Screen preview shows chosen four superstars while season active.
- v0.9.149: faction locked for season.
- v0.9.148: faction naming at season start.
- v0.9.146: fixed syntax error in faction-warfare.js women's faction name.
- v0.9.141: renamed Superstar Road to World Tour.

## Key functions and code
In `app.js`, `finish(win)` records faction results via `FactionWarfareRules.applyResult` or `finishFinal`. `nextMatchReward()` routes back to `factionDashboard()` after rewards. `battle()` builds hand and displays multi-match tag bench. `multiChooseTag()` currently disabled (v0.9.161), `multiSwap()` performs actual swap. `multiStore()` and `multiSync()` synchronize active wrestler and team arrays. Normal tag apron recovery occurs in `if(b.tag&&!b.multi)`; faction multi recovery is now in `if(b.multi)` branch.
In `faction-warfare.js`, `applyResult(season,division,won)` owns progression; `due`, `available`, `allTitles` govern match selection.
In `faction-warfare-ui.js`, `dashboard()` renders championships first, factions second, status last.

## Other long-running game priorities
User wants distinct custom superstar fonts/themes, individual card art, finisher GIFs, balanced tiers and stats (five equal tiers: Main Event, Upper Mid, Mid, Lower Mid, Openers), and varied match types. Preserve existing art and player progress. Use GitHub commits for all actual game changes. Avoid image generation for code/UI fixes.
