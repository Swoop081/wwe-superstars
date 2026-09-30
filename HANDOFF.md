# WWE Superstars — Development Handoff

**Date:** 30 September 2026  
**Branch:** main  
**Stable version:** v0.5.7  
**Repository:** swoop081/wwe-superstars  
**Live game:** https://swoop081.github.io/wwe-superstars/

## Critical project rule

WWE Superstars is a completely separate game from WWE Legacy. Do not import WWE Legacy systems, card data, mechanics, or assumptions unless explicitly requested.

## Current state

The core playable loop is working and the user is very happy with the current presentation.

Flow:
1. Start / onboarding.
2. Welcome pack gives 5 unique random Superstars.
3. First copy unlocks a Superstar at Level 1.
4. Duplicates automatically add +1 level to that Superstar.
5. Home → Exhibition → choose an owned Superstar.
6. Fight using six attack categories and HP.
7. Win triggers the winner's finisher presentation.
8. Finisher GIF plays, then the pin count visibly changes 1 → 2 → 3.
9. A win then exposes Claim Reward.
10. Reward is one random Superstar card. New = Level 1; duplicate = +1 level.
11. Loss gives no reward.

## Game philosophy

- One canonical portrait card per Superstar.
- No duplicate inventory.
- Infinite leveling; no maximum level.
- Strongest card naturally becomes whichever Superstar has been pulled most often.
- Do not add catch-up scaling or Collection Level systems.
- Roster variety should come from future eligibility requirements/themes, e.g. Female, Attitude Era, NXT.
- Keep systems simple; make presentation feel premium.
- iPhone/mobile first: huge readable text, large buttons, graphic-heavy screens, minimal tiny UI.

## Combat

Six attack stats:
- Strength
- Strike
- Technique
- Agility
- Charisma
- Ring IQ

HP is derived from the six stats, currently approximately average × 3.4.

Current temporary duplicate growth:
- stats scale approximately +2.5% per level.

Combat:
- Player receives three attack-category choices.
- Category buttons use custom icon assets with the numerical stat below.
- Player and CPU attacks resolve simultaneously.
- Selected stat is direct damage to opponent HP.
- Categories cycle through the available pool and reshuffle.
- Zero HP ends the match.
- Current CPU level formula is temporary and not approved as a permanent balance system.

## Card presentation

Approved current card direction:
- Finished Superstar artwork fills the card.
- In-game rounded outer frame.
- LVL top-left and HP top-right in bright gold/yellow.
- Superstar name near bottom.
- Six compact transparent stat rows, two columns × three rows:
  STR / STK
  TEC / AGI
  CHA / IQ
- No colored stat boxes.
- Collection sorts Level descending → HP descending → alphabetical.
- Exhibition Choose Superstar now uses the same sorting.

Artwork auto-detection:
`assets/superstars/<slug>.png`

`artFile(name)` generates the filename automatically.

## Current roster — 20

1. Roman Reigns — SPEAR
2. Cody Rhodes — CROSS RHODES
3. Rhea Ripley — RIPTIDE
4. CM Punk — GO TO SLEEP
5. IYO SKY — OVER THE MOONSAULT
6. Seth Rollins — CURB STOMP
7. Becky Lynch — MANHANDLE SLAM
8. Randy Orton — RKO
9. Bianca Belair — K.O.D.
10. Gunther — POWERBOMB
11. Sami Zayn — HELLUVA KICK
12. Charlotte Flair — FIGURE EIGHT
13. Tiffany Stratton — PRETTIEST MOONSAULT EVER
14. Liv Morgan — OBLIVION
15. Lola Vice — SPINNING BACKFIST
16. Stone Cold Steve Austin — STONE COLD STUNNER
17. The Rock — ROCK BOTTOM
18. Triple H — PEDIGREE
19. The Undertaker — TOMBSTONE PILEDRIVER
20. Shawn Michaels — SWEET CHIN MUSIC

## Finisher presentation — stable at v0.5.7

This was the major feature completed immediately before this handoff.

The finish scene now:
- Displays YOU WIN / DEFEAT.
- Shows the finisher name.
- Plays a Superstar-specific Tenor finisher GIF.
- Uses a centered square 1:1 media frame sized for mobile.
- Shows PIN COUNT below the GIF.
- Number visibly changes 1 → 2 → 3 with animation.
- Claim Reward / Return Home appears only after the count.

Roman Reigns uses the exact user-selected Tenor Spear GIF:
https://tenor.com/en-AU/view/wwe-bwe-smackdown-roman-reigns-frank-reigns-spear-sami-zayn-gif-18441142363173890199

All 20 Superstars now have Tenor finisher URLs populated in root `finisher-media.json`.

The assistant sourced the other 19 clips as starting choices. User said the result is “fantastic” and will replace individual GIFs later if desired.

Important Tenor lesson:
- Normal Tenor page/share URLs are stored.
- The game parses current Tenor URLs ending in `-gif-<numeric ID>` and converts them for display.
- Earlier attempts using fake direct .gif URLs and raw Tenor pages in iframes failed.
- Current v0.5.7 implementation is confirmed working by the user. Do not regress it.

## Finisher Studio

`card-studio/finishers.html` exists and lists all 20 Superstars, but the user has decided it is easier to send replacement links directly in chat and have the assistant update `finisher-media.json`.

Do not force the Studio workflow.

## Card Studio

Located under `card-studio/`.

It is desktop-oriented and used to create finished Superstar artwork.

Current important behavior:
- User supplies background and wrestler image.
- No Card Studio border; in-game card handles its own frame.
- White Superstar glow supported.
- Glow slider defaults to 60.
- Card Studio has its own hardcoded PEOPLE list. When adding roster members, update this list as well as `app.js`.

## Visual theme

Current approved theme uses WWE Superstars logo colors:
- Primary blue approximately #2463c9.
- Secondary/accent red.
- Overall background uses the logo blue.
- User strongly approved this direction.

## Version/cache rule — IMPORTANT

The app previously suffered from stale iPhone/GitHub Pages builds.

Whenever bumping version, update BOTH:
1. `APP_VERSION` in `app.js`.
2. Every boot/CSS/JS version reference in root `index.html`.

Current synchronized version is **0.5.7**.

Do not make a user-facing gameplay/data change and forget to bump/synchronize the version. The user tests updates immediately on iPhone.

## Save

localStorage key:
`wweSuperstarsSave`

Stores:
- roster: Superstar name → level
- wins
- losses

## Key files

- `index.html`
- `style.css`
- `app.js`
- `finisher-media.json`
- `card-studio/index.html`
- `card-studio/studio.css`
- `card-studio/studio.js`
- `card-studio/finishers.html`
- `assets/`

## Recent important commits

- `d189ac9` — logo-blue overall background
- `cebc65e` — roster expanded to 20
- `b38cdd8` — 8 new Superstars added to Card Studio
- `e78500b` — Exhibition sorting by Level then HP
- `8cb6fff` — initial animated finisher presentation
- `8a6f4d3` — square finisher frame
- `06c556c` — finisher URLs populated for full roster
- `b0f3f22` / `cbf7691` — v0.5.7 version/cache synchronization

## Next-chat instructions

Start from current `main` and v0.5.7. Before changing code, inspect the relevant current files rather than reconstructing them from memory.

Preserve:
- working combat loop,
- card presentation,
- blue/red visual direction,
- Level/HP sorting,
- Tenor finisher presentation,
- 1 → 2 → 3 pin animation,
- all current roster/artwork behavior.

The user iterates quickly and expects requested changes to be committed directly to `main` when they say “do that now.”
