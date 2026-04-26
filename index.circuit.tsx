import { BAT54WS } from "./imports/BAT54WS"
import { LM4040D25FTA } from "./imports/LM4040D25FTA"
import { LMV331IDBVR } from "./imports/LMV331IDBVR"
import { LMV339IDR } from "./imports/LMV339IDR"
import { MY_18650_02 } from "./imports/MY_18650_02"

export default function ClipOnBatteryMeter() {
  return (
    <board
      width="108mm"
      height="40mm"
      layers={2}
      minViaHoleDiameter={0.3}
      minViaPadDiameter={0.45}
    >
      <silkscreentext text="1S LI-ION METER" pcbX={-31} pcbY={16.5} fontSize="1.6mm" anchorAlignment="center" />

      <MY_18650_02
        name="J_BAT_POS"
        pcbX={-43}
        pcbY={0}
        pinAttributes={{
          pin1: { providesPower: true, mustBeConnected: true, includeInBoardPinout: true },
          pin2: { providesPower: true, mustBeConnected: true, includeInBoardPinout: true },
          pin3: { providesPower: true, mustBeConnected: true, includeInBoardPinout: true },
          pin4: { providesPower: true, mustBeConnected: true, includeInBoardPinout: true },
        } as any}
      />
      <MY_18650_02
        name="J_BAT_NEG"
        pcbX={13.25}
        pcbY={0}
        pcbRotation={180}
        pinAttributes={{
          pin1: { requiresGround: true, mustBeConnected: true, includeInBoardPinout: true },
          pin2: { requiresGround: true, mustBeConnected: true, includeInBoardPinout: true },
          pin3: { requiresGround: true, mustBeConnected: true, includeInBoardPinout: true },
          pin4: { requiresGround: true, mustBeConnected: true, includeInBoardPinout: true },
        } as any}
      />

      <BAT54WS name="D_PROT" pcbX={-28} pcbY={-13} schX={-6} schY={2} />
      <BAT54WS name="D_SENSE_CLAMP" pcbX={9} pcbY={-15.5} pcbRotation={90} schX={0} schY={2} />

      <LM4040D25FTA
        name="U_REF"
        pcbX={-15}
        pcbY={11.5}
        pinAttributes={{
          CAT: { requiresPower: true, mustBeConnected: true },
          AN: { requiresGround: true, mustBeConnected: true },
        } as any}
      />
      <LMV339IDR
        name="U1"
        pcbX={39}
        pcbY={12.5}
        pinAttributes={{
          VCC: { requiresPower: true, mustBeConnected: true },
          GND: { requiresGround: true, mustBeConnected: true },
          OUT1: { mustBeConnected: true },
          OUT2: { mustBeConnected: true },
          OUT3: { mustBeConnected: true },
          OUT4: { mustBeConnected: true },
          IN1_NEG: { mustBeConnected: true },
          IN1_POS: { mustBeConnected: true },
          IN2_NEG: { mustBeConnected: true },
          IN2_POS: { mustBeConnected: true },
          IN3_NEG: { mustBeConnected: true },
          IN3_POS: { mustBeConnected: true },
          IN4_NEG: { mustBeConnected: true },
          IN4_POS: { mustBeConnected: true },
        } as any}
      />
      <LMV331IDBVR
        name="U2"
        pcbX={50.5}
        pcbY={15.6}
        pcbRotation={180}
        pinAttributes={{
          VCC_POS: { requiresPower: true, mustBeConnected: true },
          GND: { requiresGround: true, mustBeConnected: true },
          OUT: { mustBeConnected: true },
          IN_NEG: { mustBeConnected: true },
          IN_POS: { mustBeConnected: true },
        } as any}
      />

      <capacitor name="C1" capacitance="100nF" footprint="0603" pcbX={44.8} pcbY={18} />
      <capacitor name="C2" capacitance="100nF" footprint="0603" pcbX={33} pcbY={17.6} />
      <capacitor
        name="C_SENSE"
        capacitance="100nF"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C14663"] }}
        pcbX={18}
        pcbY={-14.5}
        pcbRotation={90}
        schX={-2}
        schY={-2}
      />

      <resistor
        name="RREF"
        resistance="3.9k"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C22978"] }}
        pcbX={-23}
        pcbY={12.5}
        pcbRotation={90}
      />
      <resistor
        name="R_TOP"
        resistance="100k"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C25803"] }}
        pcbX={13}
        pcbY={-11.5}
        pcbRotation={90}
      />
      <resistor
        name="R_BOT"
        resistance="82k"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C23254"] }}
        pcbX={22}
        pcbY={-11.5}
        pcbRotation={90}
      />

      <resistor
        name="RTH_TOP"
        resistance="26k"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C844150"] }}
        pcbX={26}
        pcbY={17}
        pcbRotation={90}
      />
      <resistor
        name="RTH_100"
        resistance="3.6k"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C22980"] }}
        pcbX={26}
        pcbY={13.6}
        pcbRotation={90}
      />
      <resistor
        name="RTH_80"
        resistance="3.6k"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C22980"] }}
        pcbX={26}
        pcbY={9}
        pcbRotation={90}
      />
      <resistor
        name="RTH_60"
        resistance="2.7k"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C13167"] }}
        pcbX={26}
        pcbY={5}
        pcbRotation={90}
      />
      <resistor
        name="RTH_40"
        resistance="4.7k"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C23162"] }}
        pcbX={26}
        pcbY={1}
        pcbRotation={90}
      />
      <resistor
        name="RTH_20"
        resistance="59k"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C23085"] }}
        pcbX={24.5}
        pcbY={-10.2}
        pcbRotation={90}
      />

      <resistor
        name="RHYS1"
        resistance="3.3M"
        footprint="0402"
        supplierPartNumbers={{ jlcpcb: ["C270613"] }}
        pcbX={31}
        pcbY={6.5}
        pcbRotation={0}
        schX={1}
        schY={-1}
      />
      <resistor
        name="RHYS2"
        resistance="3.3M"
        footprint="0402"
        supplierPartNumbers={{ jlcpcb: ["C270613"] }}
        pcbX={35}
        pcbY={6}
        pcbRotation={0}
        schX={3}
        schY={-1}
      />
      <resistor
        name="RHYS3"
        resistance="3.3M"
        footprint="0402"
        supplierPartNumbers={{ jlcpcb: ["C270613"] }}
        pcbX={41}
        pcbY={6}
        pcbRotation={0}
        schX={7}
        schY={-1}
      />
      <resistor
        name="RHYS4"
        resistance="3.3M"
        footprint="0402"
        supplierPartNumbers={{ jlcpcb: ["C270613"] }}
        pcbX={47}
        pcbY={6}
        pcbRotation={0}
        schX={9}
        schY={-1}
      />
      <resistor
        name="RHYS5"
        resistance="3.3M"
        footprint="0402"
        supplierPartNumbers={{ jlcpcb: ["C270613"] }}
        pcbX={52}
        pcbY={6}
        pcbRotation={0}
        schX={-1}
        schY={6}
      />

      <resistor
        name="RPU1"
        resistance="1M"
        footprint="0402"
        supplierPartNumbers={{ jlcpcb: ["C26083"] }}
        pcbX={29}
        pcbY={3.5}
        pcbRotation={0}
      />
      <resistor name="RPU2" resistance="1M" footprint="0402" pcbX={35} pcbY={3.5} pcbRotation={0} />
      <resistor name="RPU3" resistance="1M" footprint="0402" pcbX={41} pcbY={3.5} pcbRotation={0} />
      <resistor name="RPU4" resistance="1M" footprint="0402" pcbX={47} pcbY={3.5} pcbRotation={0} />
      <resistor name="RPU5" resistance="1M" footprint="0402" pcbX={52} pcbY={3.5} pcbRotation={0} />

      <led name="LED1" footprint="0603" color="red" pcbX={28} pcbY={-12.5} />
      <resistor name="RLED1" resistance="1k" footprint="0603" pcbX={28} pcbY={-10} pcbRotation={90} />
      <silkscreentext text="20%" pcbX={28} pcbY={-6.5} fontSize="1.7mm" anchorAlignment="center" />

      <led name="LED2" footprint="0603" color="yellow" pcbX={34} pcbY={-12.5} />
      <resistor name="RLED2" resistance="1k" footprint="0603" pcbX={34} pcbY={-10} pcbRotation={90} />
      <silkscreentext text="40%" pcbX={34} pcbY={-6.5} fontSize="1.7mm" anchorAlignment="center" />

      <led name="LED3" footprint="0603" color="yellow" pcbX={40} pcbY={-12.5} />
      <resistor name="RLED3" resistance="1k" footprint="0603" pcbX={40} pcbY={-10} pcbRotation={90} />
      <silkscreentext text="60%" pcbX={40} pcbY={-6.5} fontSize="1.7mm" anchorAlignment="center" />

      <led name="LED4" footprint="0603" color="green" pcbX={46} pcbY={-12.5} />
      <resistor name="RLED4" resistance="1k" footprint="0603" pcbX={46} pcbY={-10} pcbRotation={90} />
      <silkscreentext text="80%" pcbX={46} pcbY={-6.5} fontSize="1.7mm" anchorAlignment="center" />

      <led name="LED5" footprint="0603" color="green" pcbX={52} pcbY={-12.5} />
      <resistor name="RLED5" resistance="1k" footprint="0603" pcbX={52} pcbY={-10} pcbRotation={90} />
      <silkscreentext text="100%" pcbX={52} pcbY={-6.5} fontSize="1.7mm" anchorAlignment="center" />

      <trace from="J_BAT_POS.pin1" to="net.BAT_RAW" />
      <trace from="J_BAT_POS.pin2" to="net.BAT_RAW" />
      <trace from="J_BAT_POS.pin3" to="net.BAT_RAW" />
      <trace from="J_BAT_POS.pin4" to="net.BAT_RAW" />
      <trace from="J_BAT_NEG.pin1" to="net.GND" />
      <trace from="J_BAT_NEG.pin2" to="net.GND" />
      <trace from="J_BAT_NEG.pin3" to="net.GND" />
      <trace from="J_BAT_NEG.pin4" to="net.GND" />
      <trace from="net.BAT_RAW" to="D_PROT.A" />
      <trace from="D_PROT.C" to="net.BAT_POS" />

      <trace from="net.BAT_POS" to="RREF.pin1" />
      <trace from="RREF.pin2" to="U_REF.CAT" />
      <trace from="U_REF.AN" to="net.GND" />

      <trace from="net.BAT_RAW" to="R_TOP.pin1" />
      <trace from="R_TOP.pin2" to="net.SENSE_DIV" />
      <trace from="R_BOT.pin1" to="net.SENSE_DIV" />
      <trace from="R_BOT.pin2" to="net.GND" />
      <trace from="net.SENSE_DIV" to="C_SENSE.pin1" />
      <trace from="C_SENSE.pin2" to="net.GND" />
      <trace from="net.GND" to="D_SENSE_CLAMP.A" />
      <trace from="net.SENSE_DIV" to="D_SENSE_CLAMP.C" />

      <trace from="U_REF.CAT" to="RTH_TOP.pin1" />
      <trace from="RTH_TOP.pin2" to="net.TH_100" />
      <trace from="RTH_100.pin1" to="net.TH_100" />
      <trace from="RTH_100.pin2" to="net.TH_80" />
      <trace from="RTH_80.pin1" to="net.TH_80" />
      <trace from="RTH_80.pin2" to="net.TH_60" />
      <trace from="RTH_60.pin1" to="net.TH_60" />
      <trace from="RTH_60.pin2" to="net.TH_40" />
      <trace from="RTH_40.pin1" to="net.TH_40" />
      <trace from="RTH_40.pin2" to="net.TH_20" />
      <trace from="RTH_20.pin1" to="net.TH_20" />
      <trace from="RTH_20.pin2" to="R_BOT.pin2" />

      <trace from="net.BAT_POS" to="U1.VCC" />
      <trace from="net.BAT_POS" to="U2.VCC_POS" />
      <trace from="net.GND" to="U1.GND" />
      <trace from="net.GND" to="U2.GND" />
      <trace from="net.BAT_POS" to="C1.pin1" />
      <trace from="C1.pin2" to="net.GND" />
      <trace from="net.BAT_POS" to="C2.pin1" />
      <trace from="C2.pin2" to="net.GND" />

      <trace from="net.SENSE_DIV" to="U1.IN1_NEG" />
      <trace from="net.SENSE_DIV" to="U1.IN2_NEG" />
      <trace from="net.SENSE_DIV" to="U1.IN3_NEG" />
      <trace from="net.SENSE_DIV" to="U1.IN4_NEG" />
      <trace from="net.SENSE_DIV" to="U2.IN_NEG" />

      <trace from="net.TH_20" to="U1.IN1_POS" />
      <trace from="net.TH_40" to="U1.IN2_POS" />
      <trace from="net.TH_60" to="U1.IN3_POS" />
      <trace from="net.TH_80" to="U1.IN4_POS" />
      <trace from="net.TH_100" to="U2.IN_POS" />

      <trace from="U1.OUT1" to="RHYS1.pin1" />
      <trace from="RHYS1.pin2" to="net.TH_20" />
      <trace from="net.BAT_POS" to="RPU1.pin1" />
      <trace from="RPU1.pin2" to="U1.OUT1" />
      <trace from="U1.OUT2" to="RHYS2.pin1" />
      <trace from="RHYS2.pin2" to="net.TH_40" />
      <trace from="net.BAT_POS" to="RPU2.pin1" />
      <trace from="RPU2.pin2" to="U1.OUT2" />
      <trace from="U1.OUT3" to="RHYS3.pin1" />
      <trace from="RHYS3.pin2" to="net.TH_60" />
      <trace from="net.BAT_POS" to="RPU3.pin1" />
      <trace from="RPU3.pin2" to="U1.OUT3" />
      <trace from="U1.OUT4" to="RHYS4.pin1" />
      <trace from="RHYS4.pin2" to="net.TH_80" />
      <trace from="net.BAT_POS" to="RPU4.pin1" />
      <trace from="RPU4.pin2" to="U1.OUT4" />
      <trace from="U2.OUT" to="RHYS5.pin1" />
      <trace from="RHYS5.pin2" to="net.TH_100" />
      <trace from="net.BAT_POS" to="RPU5.pin1" />
      <trace from="RPU5.pin2" to="U2.OUT" />

      <trace from="net.BAT_POS" to="RLED1.pin1" />
      <trace from="RLED1.pin2" to="LED1.anode" />
      <trace from="LED1.cathode" to="U1.OUT1" />

      <trace from="net.BAT_POS" to="RLED2.pin1" />
      <trace from="RLED2.pin2" to="LED2.anode" />
      <trace from="LED2.cathode" to="U1.OUT2" />

      <trace from="net.BAT_POS" to="RLED3.pin1" />
      <trace from="RLED3.pin2" to="LED3.anode" />
      <trace from="LED3.cathode" to="U1.OUT3" />

      <trace from="net.BAT_POS" to="RLED4.pin1" />
      <trace from="RLED4.pin2" to="LED4.anode" />
      <trace from="LED4.cathode" to="U1.OUT4" />

      <trace from="net.BAT_POS" to="RLED5.pin1" />
      <trace from="RLED5.pin2" to="LED5.anode" />
      <trace from="LED5.cathode" to="U2.OUT" />
    </board>
  )
}
