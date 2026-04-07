import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["OUT2"],
  pin2: ["OUT1"],
  pin3: ["VCC"],
  pin4: ["IN1_NEG"],
  pin5: ["IN1_POS"],
  pin6: ["IN2_NEG"],
  pin7: ["IN2_POS"],
  pin8: ["IN3_NEG"],
  pin9: ["IN3_POS"],
  pin10: ["IN4_NEG"],
  pin11: ["IN4_POS"],
  pin12: ["GND"],
  pin13: ["OUT4"],
  pin14: ["OUT3"]
} as const

const pinAttributes = {
  pin1: { mustBeConnected: true },
  OUT2: { mustBeConnected: true },
  pin2: { mustBeConnected: true },
  OUT1: { mustBeConnected: true },
  pin3: { requiresPower: true, mustBeConnected: true },
  VCC: { requiresPower: true, mustBeConnected: true },
  pin4: { mustBeConnected: true },
  IN1_NEG: { mustBeConnected: true },
  pin5: { mustBeConnected: true },
  IN1_POS: { mustBeConnected: true },
  pin6: { mustBeConnected: true },
  IN2_NEG: { mustBeConnected: true },
  pin7: { mustBeConnected: true },
  IN2_POS: { mustBeConnected: true },
  pin8: { mustBeConnected: true },
  IN3_NEG: { mustBeConnected: true },
  pin9: { mustBeConnected: true },
  IN3_POS: { mustBeConnected: true },
  pin10: { mustBeConnected: true },
  IN4_NEG: { mustBeConnected: true },
  pin11: { mustBeConnected: true },
  IN4_POS: { mustBeConnected: true },
  pin12: { requiresGround: true, mustBeConnected: true },
  GND: { requiresGround: true, mustBeConnected: true },
  pin13: { mustBeConnected: true },
  OUT4: { mustBeConnected: true },
  pin14: { mustBeConnected: true },
  OUT3: { mustBeConnected: true },
} as any

export const LMV339IDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C7978"
  ]
}}
      manufacturerPartNumber="LMV339IDR"
      footprint={<footprint>
        <smtpad portHints={["pin8"]} pcbX="3.8099999999999454mm" pcbY="2.6189940000000433mm" width="0.5739892mm" height="2.0379944mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="2.5399999999999636mm" pcbY="2.6189940000000433mm" width="0.5739892mm" height="2.0379944mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.2699999999999818mm" pcbY="2.6189940000000433mm" width="0.5739892mm" height="2.0379944mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0mm" pcbY="2.6189940000000433mm" width="0.5739892mm" height="2.0379944mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-1.2700000000000955mm" pcbY="2.6189940000000433mm" width="0.5739892mm" height="2.0379944mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-2.5400000000000773mm" pcbY="2.6189940000000433mm" width="0.5739892mm" height="2.0379944mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-3.810000000000059mm" pcbY="2.6189940000000433mm" width="0.5739892mm" height="2.0379944mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="3.8099999999999454mm" pcbY="-2.6189939999999297mm" width="0.5739892mm" height="2.0379944mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="2.5399999999999636mm" pcbY="-2.6189939999999297mm" width="0.5739892mm" height="2.0379944mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.2699999999999818mm" pcbY="-2.6189939999999297mm" width="0.5739892mm" height="2.0379944mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0mm" pcbY="-2.6189939999999297mm" width="0.5739892mm" height="2.0379944mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.2700000000000955mm" pcbY="-2.6189939999999297mm" width="0.5739892mm" height="2.0379944mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.5400000000000773mm" pcbY="-2.6189939999999297mm" width="0.5739892mm" height="2.0379944mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-3.810000000000059mm" pcbY="-2.6189939999999297mm" width="0.5739892mm" height="2.0379944mm" shape="rect" />
<courtyardoutline outline={[{"x":-4.949000000000069,"y":3.6027999999998883},{"x":4.644200000000069,"y":3.6027999999998883},{"x":4.644200000000069,"y":-3.80600000000004},{"x":-4.949000000000069,"y":-3.80600000000004},{"x":-4.949000000000069,"y":3.6027999999998883}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7978.obj?uuid=265efcdb862f47cf9eef6843d570fde7",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7978.step?uuid=265efcdb862f47cf9eef6843d570fde7",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.099425 },
      }}
      {...props}
    />
  )
}
