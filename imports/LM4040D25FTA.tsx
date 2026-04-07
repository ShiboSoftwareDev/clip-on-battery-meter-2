import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["CAT"],
  pin2: ["AN"],
  pin3: ["NC"]
} as const

const pinAttributes = {
  pin1: { requiresPower: true, mustBeConnected: true },
  CAT: { requiresPower: true, mustBeConnected: true },
  pin2: { requiresGround: true, mustBeConnected: true },
  AN: { requiresGround: true, mustBeConnected: true },
  pin3: {},
  NC: {},
} as any

export const LM4040D25FTA = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C107244"
  ]
}}
      manufacturerPartNumber="LM4040D25FTA"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="1.2350750000000517mm" pcbY="-0.9499599999999191mm" width="1.0700004mm" height="0.5999987999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="1.2350750000000517mm" pcbY="0.9499599999999191mm" width="1.0700004mm" height="0.5999987999999999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.235074999999938mm" pcbY="0mm" width="1.0700004mm" height="0.5999987999999999mm" shape="rect" />
<silkscreenpath route={[{"x":0.8760714000002281,"y":1.5361919999999145},{"x":-0.8763253999998142,"y":1.5361919999999145},{"x":-0.8763253999998142,"y":0.49458879999997407}]} />
<silkscreenpath route={[{"x":0.8760714000002281,"y":-1.5361920000000282},{"x":-0.8763253999998142,"y":-1.5361920000000282},{"x":-0.8763253999998142,"y":-0.49458879999997407}]} />
<silkscreenpath route={[{"x":0.8760714000002281,"y":0.45539659999997184},{"x":0.8760714000002281,"y":-0.45539659999985815}]} />
<courtyardoutline outline={[{"x":-2.0281269999999267,"y":1.774000000000001},{"x":2.0024730000002364,"y":1.774000000000001},{"x":2.0024730000002364,"y":-1.7993999999999915},{"x":-2.0281269999999267,"y":-1.7993999999999915},{"x":-2.0281269999999267,"y":1.774000000000001}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C107244.obj?uuid=cefd4596db214da394d9632b2b88f8f2",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C107244.step?uuid=cefd4596db214da394d9632b2b88f8f2",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
