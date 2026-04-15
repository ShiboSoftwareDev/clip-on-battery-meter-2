# TSCIRCUIT Feedback 6th Pass

## Remaining Issues

- `J_BAT_POS.pin1` and `J_BAT_NEG.pin1` still report ambiguity because each imported `MY_18650_02` battery clip has multiple physically separate copper features with the same `portHints={["pin1"]}`. For this part that modeling is intentional: the datasheet identifies the component as one metal battery terminal, so all pads and plated holes belong to one logical terminal. The warning is still useful because it shows the router/checker is treating same-pin, far-apart copper as multiple candidate connection points.

- The build still reports one actual PCB DRC issue: two vias from different nets are too close together. The current reported gap is `0.274mm`, so this needs either a placement nudge, routing constraint change, or a local routing adjustment before calling the PCB output clean.

- The two `MY_18650_02` battery clips are now modeled as `<connector>` components instead of `<chip>` components, which fixed the component semantics, but placement still emits connector-accessibility warnings. These clips are battery contacts rather than edge-facing cable/board connectors, so the warning appears to be a mismatch between generic connector checks and this battery-contact use case.

- `D_PROT has no pin with requires_ground=true` still appears during `tsci build`. `D_PROT` is a series Schottky diode between `BAT_RAW` and the protected `BAT_POS` rail, so it should not require a ground pin. This appears to be semantic-checker noise for a valid two-terminal series component.

## Status

- The incorrect two-terminal modeling of `MY_18650_02` has been fixed.
- The battery clip is no longer modeled as a chip.
- `tsci check netlist` passes with 0 errors and 0 warnings.
- `tsci check placement` passes with 0 errors, with only the connector-accessibility warnings remaining.
