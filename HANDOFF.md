# WWE Superstars — Development Handoff

Updated: 8 October 2026
Branch: `main`
Current app version: **0.9.33**
Repository: `Swoop081/wwe-superstars`

## Current state
Mobile-first WWE collectible card game with Exhibition, 2v2 Tag, Superstar Road, Daily Gauntlet, Daily Shop, My Superstars, Career Stats, rewards/duplicates/level-ups, Action cards, stat attacks and finisher sequences.

Current playable roster: **183 Superstar/persona cards** unless later roster work has landed. Superstar artwork is WebP-only at runtime under `assets/superstars/`.

## Project rules/preferences
- Work directly on `main` when asked.
- Bump `APP_VERSION` plus matching deployment/version refs in `index.html` for code/UI/game changes. User notices missed bumps.
- Do **not** generate images in this project.
- Keep implementation responses concise.
- Cards should have square/right-angle presentation.
- Superstar art uses automatic slugged WebP filenames.
- `style.css` has many accumulated `!important` overrides; inspect source order/selectors before visual changes.

## Typography — latest work
### v0.9.32
Moved toward wrestler/persona-specific name themes rather than generic era fonts. Examples:
- Sting → vigilante/distressed
- Drew McIntyre → medieval
- Undertaker → funeral gothic
- King of Kings → royal
- Triple H → industrial
- DX → handwritten/graffiti
- Bloodline → tribal/royal
- Finn Bálor / Damian Priest → occult
- Gangrel → vampire
- Goldust → theatrical
- Flair personas → luxury
- Tiffany Stratton → glam
- Jeff Hardy/Lita → extreme
- Raven/Mankind → grunge
- Cactus Jack → hardcore
- Dude Love → psychedelic
- Kane → monster
- Demolition/Road Warriors → metal
- Hogan/Warrior/Macho Man → 80s
- nWo → distressed
- Brock Lesnar → combat
- Gunther → Imperium
- William Regal → regal
- Piper → Scottish
- Sheamus → Celtic
- Alexa/Bray → horror
- Kabuki/IYO → kabuki
- lucha wrestlers → lucha
- Big Poppa Pump → graffiti
- CM Punk/Liv → punk

User explicitly wants each wrestler's typography to feel appropriate to that character/persona, not merely random different fonts.

### v0.9.33
Card-face names increased about **20%**. Default `cardNameHtml(name)` breaks at each space, e.g. `DREW / MCINTYRE`. Current explicit exception:
- El Hijo del Vikingo → `EL HIJO` / `DEL VIKINGO`

Add sensible exceptions when found rather than allowing awkward 4–5 line names.

## My Superstars
Now has sorting plus Gallery/List view toggle. User prefers the compact collection-card name treatment (e.g. Drew over two lines). Long names must not overflow; Sensational Sherri exposed this issue previously.

## Superstar Road
- Intended mix: roughly **75% singles / 25% tag**.
- Better deterministic pseudo-random hash added in v0.9.13 after an obvious tag streak.
- Losing Road does not move the player backwards.
- Back-out option added after selecting a wrestler so player can leave the pre-battle screen.
- Road should use the same Superstar font system.

## Exhibition / city imagery
City screens should show recognizable landmarks. Amsterdam previously displayed a newspaper/Wikipedia-style image and was corrected. Avoid text/news/wiki screenshots as city art.

## Shop
Current requested design:
- live countdown to daily reset
- do **not** auto-refresh merely because all 9 offers are purchased
- manual early reset costs **1 coin**
- purchased slots remain sold until reset
- Home Shop coin indicator shows player's balance, not feature price
- feature price remains communicated separately

Several iterations occurred; inspect current implementation before editing.

## Daily Gauntlet
- Five wins completes daily featured Superstar.
- Loss gives a consolation card without consuming Gauntlet progress.
- Completed Gauntlet screen uses/needs the same countdown style as Shop for next daily reset.

## Finisher media — recent updates
Current supplied Tenor URLs:
- Sheamus: `https://tenor.com/en-AU/view/sheamus-brogue-kick-randy-orton-wwe-smack-down-gif-18269724`
- Mabel: `https://tenor.com/en-AU/view/mabel-king-garbage-throw-hit-in-the-head-gif-14088856`
- Terry Funk: `https://tenor.com/en-AU/view/wrestling-terry-funk-gif-22913387`
- Trick Williams: `https://tenor.com/en-AU/view/trick-williams-trick-shot-dominik-mysterio-wwe-nxt-no-mercy-gif-5165358998844293037`
- Ultimo Dragon: move changed to **DRAGON BOMB**, `https://tenor.com/en-AU/view/ultimo-dragon-running-powerbomb-rey-mysterio-wcw-hog-wild-gif-9793625920294012721`
- Vince McMahon: `https://tenor.com/en-AU/view/vince-mcmahon-vince-mcmahon-meme-smiling-vince-vince-slay-slaying-vince-gif-16644628425610872887`
- Dusty Rhodes: `https://tenor.com/en-AU/view/americandream-dusti-gif-21430938`
- Damian Priest: `https://tenor.com/en-AU/view/wwe-smackdown-2025-wrestling-damian-priest-south-of-heavens-solo-sikoa-gif-8102207268440910832`
- William Regal: `https://tenor.com/en-AU/view/william-regal-wave-hello-wwf-wwe-gif-737756867811856960`
- Dude Love: `https://tenor.com/en-AU/view/dudelove-dude-love-wwe-farout-gif-5588569869191951268`
- Xavier Woods: `https://tenor.com/en-AU/view/the-new-day-xavier-woods-big-e-wwe-smack-down-gif-15319515`
- Syxx: `https://tenor.com/en-AU/view/4life-wwe-gif-19603531`
- Candice Michelle: `https://tenor.com/en-AU/view/candice-michelle-gif-8376323`
- Tiffany Stratton: `https://tenor.com/en-AU/view/tiffany-stratton-wwe-wwe-smackdown-moonsault-prettiest-moonsault-ever-gif-11183068753270097934`

Tenor page URLs use the existing resolver. Some older URLs produced 404s; user is replacing them as encountered.

## Persona naming convention
User intentionally shortens persona card names:
- **King of Kings**, not “Triple H King of Kings”
- **Big Poppa Pump**, not “Scott Steiner Big Poppa Pump”

Do not automatically expand persona names.

## Latest roster batch
Most recent 17 additions:
Vince McMahon, Shane McMahon, Stephanie McMahon, Toni Storm, Bobby Lashley, MVP, Scott Steiner, Rick Steiner, Big Poppa Pump, Nikki Bella, Brie Bella, Eva Marie, Rick Rude, Ivory, Michelle McCool, Sasha Banks, Carmella.

They were added to playable BASE and Card Studio; moved to top of Card Studio. Their expected WebP art was confirmed on `main`.

## Gameplay/stat model
BASE authors six core stats: `cha, str, stk, tec, agi, iq`. Displayed battle/card categories also include derived Submission, Star Power and Finisher.

Design intent:
- meaningful Level 1 spread, roughly 65–100
- clear strengths and about two weaknesses
- main event / upper mid / mid / lower mid / opener tiers matter
- weaker cards must retain a plausible upset path through Action cards/gameplay
- Action cards should stay meaningful as levels increase

## Key files
- `app.js`: game logic, roster, Road, Shop, Gauntlet, collection, battle, version
- `style.css`: UI/typography; substantial override debt
- `index.html`: loader/deployment refs
- `card-studio/studio.js`: Card Studio roster
- `finisher-media.json`: Tenor media
- `assets/superstars/`: WebP wrestler art
- `assets/`: stat/action/shared UI assets

## Icons
8 stats: Power, Strike, Technique, Agility, Submission, Charisma, Star Power, Finisher.

13 Actions: Defence, Steel Chair, Low Blow, Dirty Tactics, Crowd Support, Adrenaline, Reverse It, Cheap Shot, Second Wind, Tag, Mind Games, Fighting Spirit, Wild Brawl.

Battle UI should not repeat a category/action name beneath artwork when the icon itself already prints that name.

## Progression observation
A first-day test save progressed to 100+ owned cards and Drew McIntyre reached high levels quickly. Keep this in mind if progression/economy balance is audited.

## Version note
Current code/UI version is **0.9.33**. The latest commits after the version bump were media-only `finisher-media.json` URL replacements, so they did not require another app version bump.

Always fetch current `main` before editing; GitHub is authoritative.
