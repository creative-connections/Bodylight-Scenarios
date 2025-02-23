# PV tool 

Independent component to mimic PV maneuver and estimate optimal PEEP for highest complience from the curve obtained during maneuver.

`<bdl-pvtool id="pvtool" fromid="ventilator" refindex="0" refvalues="2"></bdl-pvtool>`
- `refindex` - index of variable from fmu - with P, default 0
- `refvalues` - how many values to show in pv - default = 2, P and V
- `fromid` - optional, if FMU simulation is available, use it to show PV from simulation

- [x] cursor1 and cursor2 switching
- [x] arrows under cursor1 and cursor2
- [x] graph, default or from fmi
  - [x] start/stop will emulate data and sigmoid curve pv for 20s
  - [x] stops listening fmi
  - [x] starts listening custom data
  - [x] send custom data every 0.1s from min pv to max pv and then back to min pv
  - [x] again pressing the button will start listening fmi
- [x] NICE, start will fire event to decrease breath rate to 3 per minute
- [ ] NICE, after maneuver, breath rate is restored to original value
- [x] cursors will show x,y value from graph
  - [x] cursor 1, left right arrow move cursor on graph
  - [x] cursor 2, left right arrow move 2nd cursor on graph
  - [x] moving cursor will update data in table
  - [x] compliance is recalculated for each cursor move

## Example ##

<bdl-fmi id="ventilator" mode="continuous"  src="modelECMORespiratoryVR_BloodGasesTransport_LungVentilatorSCMV2.js" fminame="modelECMORespiratoryVR_BloodGasesTransport_LungVentilatorSCMV2" tolerance="0.000001" starttime="0" fstepsize="0.1" fpslimit="10" guid="{98a13f8f-d60a-484c-9971-59dd5b4b6bb8}" valuereferences="637534444,637534486,16777227,16777225,16777240,16777241,16777242,335544321,369099031,637534474,16777223,234881080,16777224,905969977,637534474,637534445,637534443" valuelabels="expiration.q_in.p,lungs.volume,RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.Eratio,ventilatorSCMV.pause,ventilation,filter.y,lungs.pressure,TotalResistance,expirationConductance.y,TotalCompliance,lungsPressureMeasure.pressure,lungs.q_in[1].p,lungs.q_in[1].h_outflow,lungs.q_in[1].m_flow" inputs="idrate,16777227,1,60,t;idtv,16777225,1,1000000,t;idiratio,16777240,1,1,t;idpause,16777242,1,100,t;ideratio,16777241,1,1,t;idres,16777223,98.0665,0.001,t;idcomp,16777224,1e-6,98.0665,t;idexp,16777272,1,100000,t" inputlabels="RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.pause,ventilatorSCMV.Eratio,TotalResistance,TotalCompliance,expirationConductance.k"></bdl-fmi>

<bdl-pvtool id="pvtool" fromid="ventilator" refindex="0" refvalues="2"></bdl-pvtool>
