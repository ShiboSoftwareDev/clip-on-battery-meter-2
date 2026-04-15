# TSCIRCUIT Feedback 4th Pass

## What Improved In The Updated Release

- `pinAttributes` propagation is materially better now.
- Imported wrapped parts with explicit rail pin attributes no longer trigger the broad `requires_power` / `requires_ground` noise that showed up earlier on `U_REF`, `U1`, and `U2`.
- `tsci check netlist` is clean on this design now, which was not true before the update.

## JLC Battery Clip Iteration

- Replaced the generic 2-pin battery entry with the JLC `MY_18650_02` holder (`C2979182`).
- The imported footprint needed manual pin naming because the generated import did not express battery polarity in a useful way for the circuit.
- The imported footprint also needed hand edits because the internal through-holes came in as bare vias. As bare vias, they caused accidental-contact DRCs when routing from the battery pads.
- Converting those internal holes to `platedhole` features with `portHints` removed the worst holder-related routing errors.

## Tooling Feedback

- The old propagation problem does look fixed.
- Generic source-like parts still produce semantic rail warnings in `tsci build`:
  - `J_BAT has no pin with requires_power=true`
  - `D_PROT has no pin with requires_power=true`
  - `D_PROT has no pin with requires_ground=true`
- Those warnings still look noisy rather than electrically meaningful for this design:
  - `J_BAT` is a battery source and should not need a `requires_power` pin to be valid.
  - `D_PROT` is a series diode and also does not map naturally to `requires_power` / `requires_ground`.

## Footprint Modeling Feedback

- `via connectsTo="pin1"` was not enough to make imported holder vias behave like part of the battery terminals in routing.
- `platedhole portHints={["pin1"]}` / `["pin2"]` behaved better for routing, but the resulting netlist now shows extra unconnected connector pins on `J_BAT`.
- That suggests there is still some ambiguity in how imported composite copper features merge back into a single logical pin when a footprint mixes SMT pads and plated holes.

## Autorouting / DRC Feedback

- The current remaining issues are localized autorouter artifacts, not broad schematic problems.
- After several placement passes, `tsci build` still swaps between a small number of top-side DRCs near the comparator input cluster and threshold ladder.
- The current board is much closer than the earlier passes, but it is not fully fabrication-clean yet.

## Current Status

- `bun run typecheck`: passes
- `tsci check netlist`: passes with `Errors: 0`, `Warnings: 0`
- `tsci build`: still reports a small number of physical DRCs plus the source-part rail-warning noise above

## Useful Next Steps For Core / Tooling

- Clarify the intended modeling pattern for source connectors and series passives in rail-semantic checks so `requires_power` / `requires_ground` warnings do not fire on obviously valid source-path parts.
- Improve imported footprint merging when one logical pin is represented by mixed copper primitives such as SMT pads plus plated holes.
- Consider exposing a more explicit way to mark imported copper features as electrically part of an existing component pin without generating extra logical pins.
