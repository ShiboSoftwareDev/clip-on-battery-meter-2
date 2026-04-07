import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["OUT1"],
  pin2: ["OUT2"],
  pin3: ["VCC_POS"],
  pin4: ["IN2_NEG"],
  pin5: ["IN2_POS"],
  pin6: ["IN1_NEG"],
  pin7: ["IN1_POS"],
  pin8: ["IN3_NEG"],
  pin9: ["IN3_POS"],
  pin10: ["IN4_NEG"],
  pin11: ["IN4_POS"],
  pin12: ["VCC_NEG"],
  pin13: ["OUT4"],
  pin14: ["OUT3"]
} as const

export const LM339DR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C7948"
  ]
}}
      manufacturerPartNumber="LM339DR"
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
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7948.obj?uuid=265efcdb862f47cf9eef6843d570fde7",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7948.step?uuid=265efcdb862f47cf9eef6843d570fde7",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.099425 },
      }}
      {...props}
    />
  )
}