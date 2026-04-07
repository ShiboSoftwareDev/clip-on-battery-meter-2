import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["GND"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["VCC"]
} as const

export const LM393DR2G = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C7955"
  ]
}}
      manufacturerPartNumber="LM393DR2G"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.9050000000000864mm" pcbY="-2.705100000000016mm" width="0.5684011999999999mm" height="1.950212mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.6349999999999909mm" pcbY="-2.705100000000016mm" width="0.5684011999999999mm" height="1.950212mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.6349999999999909mm" pcbY="-2.705100000000016mm" width="0.5684011999999999mm" height="1.950212mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="1.9049999999999727mm" pcbY="-2.705100000000016mm" width="0.5684011999999999mm" height="1.950212mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-1.9050000000000864mm" pcbY="2.705100000000016mm" width="0.5684011999999999mm" height="1.950212mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.6349999999999909mm" pcbY="2.705100000000016mm" width="0.5684011999999999mm" height="1.950212mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.6349999999999909mm" pcbY="2.705100000000016mm" width="0.5684011999999999mm" height="1.950212mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.9049999999999727mm" pcbY="2.705100000000016mm" width="0.5684011999999999mm" height="1.950212mm" shape="rect" />
<silkscreenpath route={[{"x":-2.4999950000001263,"y":-1.4999970000000076},{"x":2.499994999999899,"y":-1.4999970000000076}]} />
<silkscreenpath route={[{"x":-2.4999950000001263,"y":1.4999969999998939},{"x":2.499994999999899,"y":1.4999969999998939}]} />
<silkscreenpath route={[{"x":-2.4999950000001263,"y":-1.4999970000000076},{"x":-2.4999950000001263,"y":-0.7265669999998181}]} />
<silkscreenpath route={[{"x":-2.4999950000001263,"y":1.4999969999998939},{"x":-2.4999950000001263,"y":0.7262875999999778}]} />
<silkscreenpath route={[{"x":2.499994999999899,"y":1.4999969999998939},{"x":2.499994999999899,"y":-1.4999970000000076}]} />
<silkscreenpath route={[{"x":-2.4999950000001263,"y":-0.7265669999998181},{"x":-2.2625565730616017,"y":-0.6727720384950544},{"x":-2.056152369867391,"y":-0.5436666188794561},{"x":-1.9038872877111999,"y":-0.3537028085727343},{"x":-1.822805887847835,"y":-0.12414516642888884},{"x":-1.8219844264158382,"y":0.11930961309167287},{"x":-1.9015148578508843,"y":0.34940918924542075},{"x":-2.0524945415012326,"y":0.5403962034508822},{"x":-2.25802280368805,"y":0.6708915593560505},{"x":-2.495092800000066,"y":0.7262876000000915}]} />
<courtyardoutline outline={[{"x":-2.7391999999999825,"y":3.653599999999983},{"x":2.7645999999998594,"y":3.653599999999983},{"x":2.7645999999998594,"y":-3.7806000000000495},{"x":-2.7391999999999825,"y":-3.7806000000000495},{"x":-2.7391999999999825,"y":3.653599999999983}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7955.obj?uuid=7abc64c95a1a4a04a4ef38f9097c870b",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7955.step?uuid=7abc64c95a1a4a04a4ef38f9097c870b",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}