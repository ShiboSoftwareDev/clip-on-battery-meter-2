import { LM4040D25FTA } from "./imports/LM4040D25FTA"
import { LMV331IDBVR } from "./imports/LMV331IDBVR"
import { LMV339IDR } from "./imports/LMV339IDR"

export default function ClipOnBatteryMeter() {
  return (
    <board width="70mm" height="30mm" layers={2}>
      <silkscreentext text="1S Li-ion clip-on battery meter" pcbX={4} pcbY={-13} fontSize="1.1mm" />
      <silkscreentext text="3.3V 3.55V 3.7V 3.9V 4.1V" pcbX={10} pcbY={12.5} fontSize="0.8mm" />

      <chip
        name="J_BAT"
        pcbX={-29}
        pcbY={0}
        pcbRotation={-90}
        pinLabels={{
          pin1: ["BAT_POS"],
          pin2: ["BAT_NEG"],
        }}
        footprint={
          <footprint>
            <platedhole
              portHints={["pin1"]}
              pcbX="0mm"
              pcbY="-4.5mm"
              shape="circle"
              holeDiameter="1.1mm"
              outerDiameter="2.3mm"
            />
            <platedhole
              portHints={["pin2"]}
              pcbX="0mm"
              pcbY="4.5mm"
              shape="circle"
              holeDiameter="1.1mm"
              outerDiameter="2.3mm"
            />
            <silkscreentext text="+" pcbX="-2.5mm" pcbY="-4.5mm" fontSize="0.9mm" />
            <silkscreentext text="-" pcbX="-2.5mm" pcbY="4.5mm" fontSize="0.9mm" />
          </footprint>
        }
      />

      <LM4040D25FTA name="U_REF" pcbX={-22} pcbY={7} />
      <LMV339IDR name="U1" pcbX={8} pcbY={5.5} />
      <LMV331IDBVR name="U2" pcbX={-7} pcbY={10.5} />

      <capacitor name="C1" capacitance="100nF" footprint="0603" pcbX={4} pcbY={12} />
      <capacitor name="C2" capacitance="100nF" footprint="0603" pcbX={-7} pcbY={14} />

      <resistor name="RREF" resistance="3.9k" footprint="0603" pcbX={-27} pcbY={7.5} pcbRotation={90} />
      <resistor name="R_TOP" resistance="100k" footprint="0603" pcbX={-27} pcbY={-6} pcbRotation={90} />
      <resistor name="R_BOT" resistance="82k" footprint="0603" pcbX={-22} pcbY={-6} pcbRotation={90} />

      <resistor name="RTH_TOP" resistance="26k" footprint="0603" pcbX={-16} pcbY={9.5} pcbRotation={90} />
      <resistor name="RTH_100" resistance="3.6k" footprint="0603" pcbX={-16} pcbY={6} pcbRotation={90} />
      <resistor name="RTH_80" resistance="3.6k" footprint="0603" pcbX={-16} pcbY={2.5} pcbRotation={90} />
      <resistor name="RTH_60" resistance="2.7k" footprint="0603" pcbX={-16} pcbY={-1} pcbRotation={90} />
      <resistor name="RTH_40" resistance="4.7k" footprint="0603" pcbX={-16} pcbY={-4.5} pcbRotation={90} />
      <resistor name="RTH_20" resistance="59k" footprint="0603" pcbX={-16} pcbY={-8} pcbRotation={90} />

      <led name="LED1" footprint="0603" color="red" pcbX={4} pcbY={-8.5} />
      <resistor name="RLED1" resistance="1k" footprint="0603" pcbX={4} pcbY={-4.5} pcbRotation={90} />
      <silkscreentext text="20%" pcbX={4} pcbY={-11.5} fontSize="0.9mm" />

      <led name="LED2" footprint="0603" color="yellow" pcbX={11} pcbY={-8.5} />
      <resistor name="RLED2" resistance="1k" footprint="0603" pcbX={11} pcbY={-4.5} pcbRotation={90} />
      <silkscreentext text="40%" pcbX={11} pcbY={-11.5} fontSize="0.9mm" />

      <led name="LED3" footprint="0603" color="yellow" pcbX={18} pcbY={-8.5} />
      <resistor name="RLED3" resistance="1k" footprint="0603" pcbX={18} pcbY={-4.5} pcbRotation={90} />
      <silkscreentext text="60%" pcbX={18} pcbY={-11.5} fontSize="0.9mm" />

      <led name="LED4" footprint="0603" color="green" pcbX={25} pcbY={-8.5} />
      <resistor name="RLED4" resistance="1k" footprint="0603" pcbX={25} pcbY={-4.5} pcbRotation={90} />
      <silkscreentext text="80%" pcbX={25} pcbY={-11.5} fontSize="0.9mm" />

      <led name="LED5" footprint="0603" color="green" pcbX={32} pcbY={-8.5} />
      <resistor name="RLED5" resistance="1k" footprint="0603" pcbX={32} pcbY={-4.5} pcbRotation={90} />
      <silkscreentext text="100%" pcbX={32} pcbY={-11.5} fontSize="0.9mm" />

      <trace from="J_BAT.BAT_POS" to="net.BAT_POS" />
      <trace from="J_BAT.BAT_NEG" to="net.GND" />

      <trace from="net.BAT_POS" to="RREF.pin1" />
      <trace from="RREF.pin2" to="U_REF.CAT" />
      <trace from="U_REF.AN" to="net.GND" />

      <trace from="net.BAT_POS" to="R_TOP.pin1" />
      <trace from="R_TOP.pin2" to="net.SENSE_DIV" />
      <trace from="R_BOT.pin1" to="net.SENSE_DIV" />
      <trace from="R_BOT.pin2" to="net.GND" />

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
