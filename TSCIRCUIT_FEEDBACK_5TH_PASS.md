# TSCIRCUIT Feedback 5th Pass

## What Changed

- Replaced the anonymous custom `D_PROT` chip with an imported JLC Schottky diode, `BAT54WS` / `C3040452`.
- The diode was found with `tsci search --jlcpcb "BAT54WS Schottky diode SOD-323"` and imported with `tsci import --jlcpcb C3040452`.
- The series protection direction is now explicit in the netlist:
  - `J_BAT.BAT_POS` / `BAT_RAW` connects to `D_PROT.A`.
  - `D_PROT.C` feeds the protected `BAT_POS` rail.
- Added `pinAttributes` to the imported diode so it is no longer reported as fully underspecified.
- Refreshed the PCB and schematic snapshots after the part replacement.

## What Improved

- The board now has a real BOM-backed protection diode instead of an anonymous hand-drawn two-pad chip.
- `tsci check netlist` reports the diode as `BAT54WS` and shows the expected anode/cathode connection.
- `tsci build` has no physical PCB DRC errors after the diode swap.

## Remaining Tooling Noise

- `tsci build` still reports:
  - `J_BAT has no pin with requires_power=true`
  - `D_PROT has no pin with requires_ground=true`
- These still look like semantic-checker noise:
  - `J_BAT` is a source component and correctly provides power through `BAT_POS`.
  - `D_PROT` is a series diode and should not require a ground pin.

## Final Status

- `bun run typecheck`: passes
- `tsci check netlist`: `Errors: 0`, `Warnings: 0`
- `tsci check placement`: `Errors: 0`, `Warnings: 0`
- `tsci build`: passes, no physical PCB DRC errors
- `bun run snapshot:update`: refreshed both snapshots

## Remaining Human Checks

- Verify `MY_18650_02` battery-contact polarity against the manufacturer drawing before fabrication.
- Verify the `BAT54WS` forward drop is acceptable at the expected display current, since the reference/comparator/LED rail is downstream of the diode while the battery sense divider measures `BAT_RAW`.
