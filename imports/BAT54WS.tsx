import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  // Imported with: tsci import --jlcpcb C3040452
  // JLC search query used during the 5th pass: "BAT54WS Schottky diode SOD-323".
  // The imported part labels pin1 as cathode (C) and pin2 as anode (A).
  pin1: ["C"],
  pin2: ["A"]
} as const

const pinAttributes = {
  pin1: { mustBeConnected: true },
  C: { mustBeConnected: true },
  pin2: { mustBeConnected: true },
  A: { mustBeConnected: true },
} as any

export const BAT54WS = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C3040452"
  ]
}}
      manufacturerPartNumber="BAT54WS"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.139952mm" pcbY="0mm" width="0.8299958mm" height="0.6299962mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="1.139952mm" pcbY="0mm" width="0.8299958mm" height="0.6299962mm" shape="rect" />
<silkscreenpath route={[{"x":0.8889237999999295,"y":-0.49509680000005574},{"x":0.8889237999999295,"y":-0.6349999999999909}]} />
<silkscreenpath route={[{"x":0.8889237999999295,"y":0.6349999999999909},{"x":0.8889237999999295,"y":0.4951730000000225}]} />
<silkscreenpath route={[{"x":-0.8890762000000905,"y":0.6349999999999909},{"x":-1.0200640000000476,"y":0.6349999999999909},{"x":-1.0200640000000476,"y":0.49509679999994205}]} />
<silkscreenpath route={[{"x":-1.0200640000000476,"y":0.49509679999994205},{"x":-0.8890762000000905,"y":0.49509679999994205}]} />
<silkscreenpath route={[{"x":-0.7757160000001022,"y":-0.6349999999999909},{"x":-1.0144760000000588,"y":-0.6349999999999909}]} />
<silkscreenpath route={[{"x":-1.0200640000000476,"y":-0.4951730000000225},{"x":-1.0200640000000476,"y":-0.6199885999999424}]} />
<silkscreenpath route={[{"x":-1.0200640000000476,"y":-0.4951730000000225},{"x":-0.8890762000000905,"y":-0.4951730000000225}]} />
<silkscreenpath route={[{"x":-0.8890762000000905,"y":0.49509679999994205},{"x":-0.8890762000000905,"y":0.6349999999999909}]} />
<silkscreenpath route={[{"x":-0.8890762000000905,"y":-0.5951219999999466},{"x":-0.8890762000000905,"y":-0.4951730000000225}]} />
<silkscreenpath route={[{"x":-0.8890762000000905,"y":-0.6349999999999909},{"x":0.8889237999999295,"y":-0.6349999999999909}]} />
<silkscreenpath route={[{"x":0.19042379999996228,"y":0.3809999999999718},{"x":0.19042379999996228,"y":-0.3810000000000855},{"x":-0.19057620000000952,"y":0},{"x":0.19042379999996228,"y":0.3809999999999718}]} />
<silkscreenpath route={[{"x":-0.8890762000000905,"y":-0.5951219999999466},{"x":-0.8890762000000905,"y":-0.6349999999999909}]} />
<silkscreenpath route={[{"x":-0.8890762000000905,"y":0.6349999999999909},{"x":-0.8890762000000905,"y":0.5951219999999466}]} />
<silkscreenpath route={[{"x":-0.8890762000000905,"y":0.6349999999999909},{"x":0.8889237999999295,"y":0.6349999999999909}]} />
<silkscreenpath route={[{"x":0.5079237999999577,"y":0},{"x":-0.508076200000005,"y":0}]} />
<silkscreenpath route={[{"x":-0.2540761999999859,"y":0.3809999999999718},{"x":-0.2540761999999859,"y":-0.3810000000000855}]} />
<courtyardoutline outline={[{"x":-1.795336000000134,"y":0.9103999999999814},{"x":1.8034639999999627,"y":0.9103999999999814},{"x":1.8034639999999627,"y":-0.9103999999998678},{"x":-1.795336000000134,"y":-0.9103999999998678},{"x":-1.795336000000134,"y":0.9103999999999814}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3040452.obj?uuid=ca55f7f4aa2143938eb241550bbe4129",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3040452.step?uuid=ca55f7f4aa2143938eb241550bbe4129",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.55 },
      }}
      {...props}
    />
  )
}
