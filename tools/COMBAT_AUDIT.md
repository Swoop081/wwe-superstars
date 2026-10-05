# Combat audit — v0.7.87

Audit date: 6 October 2026 (Melbourne).

## Result

- 24,659 mechanics checks passed; zero failures.
- 33,280 full matches; zero non-finite HP values, invalid hands, or matches reaching the 200-turn test limit.
- Mean match length: 5.41 exchanges.
- Automated player win rate: 50.20%.
- Coverage: all 80 Superstars, 12 Actions, eight attack categories, 13 match rules, Levels 1/10/50/250.

The harness executes the actual app.js battle, attack, card draw, CPU decision, and Action functions in a Node VM. It replaces browser rendering surfaces and the animated finish presentation. An independent numerical oracle checks all 400 Action/stat pairings across the four levels and 13 stipulations, including unequal levels, healing limits, blocks, reflection, setup bonuses, cancellation, and low-health effects. Additional checks cover health colour thresholds, Road initialization/progression, and the Gauntlet specialist pool.

## Fixed

- Reverse It now reflects damage it blocked, including a fully blocked hit. Previously, reflecting the post-block remainder could return zero.
- Distract Referee no longer consumes a banked stat-attack bonus when cancelling that attack. Healing and setup still apply: the card cancels damage only.
- Action damage descriptions include Hardcore and Comeback modifiers, using the same calculation as combat. Other opposing blocks may still reduce the eventual damage.
- Action logs report healing actually received, blocked/reflected damage, and setup bonuses rather than displaying zero damage for every utility Action.
- Both Action effects and attack modifiers are evaluated from the same pre-exchange state.
- KO HP clamps to zero and repeat taps cannot resolve an ended match again. Double-KO winner selection retains the existing pre-clamp overkill comparison; exact ties remain a player loss.
- Chaos redraws both hands every exchange.
- Gauntlet Specialist uses the documented four-category pool.
- Road losses move back one node, stopping at node one, as stated on the home screen.
- CPU attack valuation includes banked bonuses and match modifiers. Defence valuation caps expected blocking at estimated incoming damage, and uses opponent deck composition rather than the opponent's selected card. This removed observed defensive loops in the final sample.

## Balance observations

Both automated sides use the same decision policy. These results compare positions against randomly sampled roster opponents at equal level, across all stipulations; they are not direct opener-versus-main-event odds.

| Position | Matches | Win rate |
|---|---:|---:|
| Main Event | 14,560 | 53.9% |
| Upper Midcard | 12,480 | 48.4% |
| Midcard | 4,160 | 46.8% |
| Lower Midcard | 1,664 | 43.5% |
| Opener | 416 | 34.6% |

Roster differences remain. Weaker positions can win; this run does not establish optimal play or prove every Action is equally useful. Current base overalls span the authored 670–720 position bands, so the earlier hypothetical 648-versus-740 case is not the current roster configuration.

## Reproduce

From the repository root:

```sh
node tools/simulate_combat.cjs
```

The seed is 20261006. The script writes tools/combat-simulation-results.json and exits nonzero for failed mechanics checks or a match reaching its 200-turn limit. Full matches sample eight opponents per Superstar, level, and stipulation rather than exhaustively testing every roster pairing.

This is a headless mechanics audit. It does not verify iPhone layout, animation/GIF playback, hosted deployment, or device cache refresh. The health-colour checks verify emitted HTML classes, not their appearance on a device. A finite simulation cannot prove that every possible human strategy or random sequence terminates.
