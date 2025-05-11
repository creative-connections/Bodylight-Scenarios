<div class="w3-blue" style="position: absolute;right:1px">
<span class="w3-small">25.05.11&nbsp;</span>
<bdl-animate-control id="controlbuttons1" controlfmi="true" showstep="false" playafterstart="true"playafterstartmillis="1000"></bdl-animate-control>
<bdl-animate-control id="controlbuttons2" controlfmi="true" showstep="false" playafterstart="true"playafterstartmillis="20000"></bdl-animate-control>
<bdl-animate-control id="controlbuttons3" controlfmi="true" showstep="false" playafterstart="true" playafterstartmillis="40000"></bdl-animate-control>
<!-- not optimalized -O0 --><!--bdl-fmi id="idfmi" mode="continuous"   controlid="controlbuttons1" showcontrols="false" src="modelECMORespiratoryVR_BloodGasesTransport_BloodyMaryPPG2A.js" fminame="modelECMORespiratoryVR_BloodGasesTransport_BloodyMaryPPG2A" tolerance="0.000000001" starttime="0" fstepsize="1" fpslimit="0.15" fmuspeed="1" fmuspeed2="1" fmuspeed2after="1" guid="{458ee60c-4cf2-4aab-a727-4537b6fad7c5}" valuereferences="905975255,369103462,905975066,905975252,905974371,905975065,905975340,905972508,16777311,16777312,905975254,335544320,637537071,637538916,637538917,637537577,905973334,637537586,637537578" valuelabels="venous.sO2,arterial.sO2,tissueUnit[1].sO2,venous.pH,arterial.pH,tissueUnit[1].pH,AirO2.y,AirN2,AirCO2,AirH2O,venous.pCO2,plethy,respiratoryCenter.VentilationSwitch.y,arterial.pO2,arterial.pCO2,systemicArteries.chemicalSolution.bloodGases.BEox,systemicVeins.chemicalSolution.bloodGases.BEox,systemicArteries.chemicalSolution.bloodGases.cHCO3,systemicArteries.chemicalSolution.bloodGases.cdCO2" inputs="idrate,16777223,1,60,t;idco2,16777311,1,100,t;idh2o,16777312,1,100,t;idshunts,16777227,1,100,t;iddeadspace,16777225,1,1000000,t;ido2,16777549,1,100,t;idventilation,16777513,1,1,t" inputlabels="RR,AirCO2,AirH2O,cShuntFrac,DV,AirO2Fraction.k,respiratoryCenter.ArtificialVentilation.k"></bdl-fmi-->
<bdl-fmi id="idfmi" mode="continuous"  controlid="controlbuttons1" showcontrols="false" src="modelECMORespiratoryVR_BloodGasesTransport_BloodyMaryPPG2.js" fminame="modelECMORespiratoryVR_BloodGasesTransport_BloodyMaryPPG2" tolerance="0.0001" starttime="0" fstepsize="1" fpslimit="1" fmuspeed="0.01" fmuspeed2="20" fmuspeed2after="4" guid="{c14f4004-988d-4e94-b709-f479c6f29821}" valuereferences="905975255,369103462,905975066,905975252,905974371,905975065,905975340,905972508,16777311,16777312,905975254,335544320,637537071,637538916,637538917,637537577,905973334,637537586,637537578" valuelabels="venous.sO2,arterial.sO2,tissueUnit[1].sO2,venous.pH,arterial.pH,tissueUnit[1].pH,AirO2.y,AirN2,AirCO2,AirH2O,venous.pCO2,plethy,respiratoryCenter.VentilationSwitch.y,arterial.pO2,arterial.pCO2,systemicArteries.chemicalSolution.bloodGases.BEox,systemicVeins.chemicalSolution.bloodGases.BEox,systemicArteries.chemicalSolution.bloodGases.cHCO3,systemicArteries.chemicalSolution.bloodGases.cdCO2" inputs="idrate,16777223,1,60,t;idco2,16777311,1,100,t;idh2o,16777312,1,100,t;idshunts,16777227,1,100,t;iddeadspace,16777225,1,1000000,t;ido2,16777549,1,100,t;idventilation,16777513,1,1,t" inputlabels="RR,AirCO2,AirH2O,cShuntFrac,DV,AirO2Fraction.k,respiratoryCenter.ArtificialVentilation.k"></bdl-fmi>
<!--bdl-fmi id="idfmi" mode="continuous"  controlid="controlbuttons2" showcontrols="false"  src="modelECMORespiratoryVR_BloodGasesTransport_BloodyMaryPPG2.js" fminame="modelECMORespiratoryVR_BloodGasesTransport_BloodyMaryPPG2" tolerance="0.000001" starttime="0" fstepsize="1" fpslimit="0.5" fmuspeed="0.1" fmuspeed2="0.5" guid="{83d444de-f6b1-4a60-a953-199d3e7b2d57}" valuereferences="905975257,369103464,905975068,905975254,905974373,905975067,905975342,905972510,16777311,16777312,905975256,335544320,637537073,637538918,637538919,637537579,905973336,637537588,637537580" valuelabels="venous.sO2,arterial.sO2,tissueUnit[1].sO2,venous.pH,arterial.pH,tissueUnit[1].pH,AirO2.y,AirN2,AirCO2,AirH2O,venous.pCO2,plethy,respiratoryCenter.VentilationSwitch.y,arterial.pO2,arterial.pCO2,systemicArteries.chemicalSolution.bloodGases.BEox,systemicVeins.chemicalSolution.bloodGases.BEox,systemicArteries.chemicalSolution.bloodGases.cHCO3,systemicArteries.chemicalSolution.bloodGases.cdCO2" inputs="idrate,16777223,1,60,t;idco2,16777311,1,100,t;idh2o,16777312,1,100,t;idshunts,16777227,1,100,t;iddeadspace,16777225,1,1000000,t;ido2,16777547,1,100,t;idventilation,16777511,1,1,t" inputlabels="RR,AirCO2,AirH2O,cShuntFrac,DV,AirO2Fraction.k,respiratoryCenter.ArtificialVentilation.k"></bdl-fmi-->
<!--bdl-fmi id="ventilator" mode="continuous" controlid="controlbuttons3" showcontrols="false" fmuspeed="0.1" fmuspeed2="1" fmuspeed2after="10" src="modelECMORespiratoryVR_BloodGasesTransport_LungVentilatorSCMV2.js" fminame="modelECMORespiratoryVR_BloodGasesTransport_LungVentilatorSCMV2" tolerance="0.00000001" starttime="0" fstepsize="0.2" fpslimit="5" guid="{98a13f8f-d60a-484c-9971-59dd5b4b6bb8}" valuereferences="637534444,637534486,16777227,16777225,16777240,16777241,16777242,335544321,369099031,637534474,16777223,234881080,16777224,905969977,637534474,637534445,637534443" valuelabels="expiration.q_in.p,lungs.volume,RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.Eratio,ventilatorSCMV.pause,ventilation,filter.y,lungs.pressure,TotalResistance,expirationConductance.y,TotalCompliance,lungsPressureMeasure.pressure,lungs.q_in[1].p,lungs.q_in[1].h_outflow,lungs.q_in[1].m_flow" inputs="idrate,16777227,1,60,t;idtv,16777225,1,1000000,t;idiratio,16777240,1,1,t;idpause,16777242,1,100,t;ideratio,16777241,1,1,t;idres,16777223,98.0665,0.001,t;idcomp,16777224,1e-6,98.0665,t;idexp,16777272,1,100000,t" inputlabels="RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.pause,ventilatorSCMV.Eratio,TotalResistance,TotalCompliance,expirationConductance.k"></bdl-fmi-->
<bdl-fmi id="ventilator" mode="continuous" controlid="controlbuttons3" showcontrols="false" fmuspeed="0.1" fmuspeed2="1" fmuspeed2after="10" src="modelECMORespiratoryVR_BloodGasesTransport_LungVentilatorSCMV2A.js" fminame="modelECMORespiratoryVR_BloodGasesTransport_LungVentilatorSCMV2" tolerance="0.0000001" starttime="0" fstepsize="0.2" fpslimit="5" guid="{c217df01-9a25-48c2-9d7b-dfd45d17f8dd}" valuereferences="637534450,637534493,16777229,16777227,16777243,16777244,16777245,335544321,369099038,637534480,16777223,234881080,16777226,905969979,637534480,637534451,637534449" valuelabels="expiration.q_in.p,lungs.volume,RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.Eratio,ventilatorSCMV.pause,ventilation,filter.y,lungs.pressure,TotalResistance,expirationConductance.y,TotalCompliance,lungsPressureMeasure.pressure,lungs.q_in[1].p,lungs.q_in[1].h_outflow,lungs.q_in[1].m_flow" inputs="idrate,16777229,1,60,t;idtv,16777227,1,1000000,t;idiratio,16777243,1,1,t;idpause,16777245,1,100,t;ideratio,16777244,1,1,t;idres,16777223,98.0665,0.001,t;idcomp,16777226,1e-6,98.0665,t;idexp,16777272,1,100000,t" inputlabels="RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.pause,ventilatorSCMV.Eratio,TotalResistance,TotalCompliance,expirationConductance.k"></bdl-fmi>
<bdl-fmi id="hemodynamics" mode="continuous"  controlid="controlbuttons2" showcontrols="false" src="modelECMORespiratoryVR_BloodGasesTransport_MeursModel2011_HemodynamicsRegulatedHR.js" fminame="modelECMORespiratoryVR_BloodGasesTransport_MeursModel2011_HemodynamicsRegulatedHR" tolerance="0.000000001" starttime="0" fstepsize="0.03333333333" fpslimit="30" guid="{0da59ef7-219c-4139-ae3d-16e4304b1a41}" valuereferences="905970358,905970200,905970201,33554460,637534721,234881215" valuelabels="EithaPressure.pressure,arterialPressure.systolic,arterialPressure.diastolic,Ecg.ecg,currentHeartReat.y,HRAdd.y" inputs="arterial_sO2,16777391,1,1,t;hradd,16777407,1,1,t" inputlabels="sO2.k,HRAdd.k"></bdl-fmi>
<!--bdl-fmi id="hemodynamics" mode="continuous" controlid="controlbuttons2" showcontrols="false" src="modelECMORespiratoryVR_BloodGasesTransport_MeursModel2011_HemodynamicsRegulatedHR.js" fminame="modelECMORespiratoryVR_BloodGasesTransport_MeursModel2011_HemodynamicsRegulatedHR" tolerance="0.000001" starttime="0" fstepsize="0.05" fpslimit="20" guid="{87860081-905b-4adf-b51a-cdbabd18cf3e}" valuereferences="905970357,905970199,905970200,33554460,637534720" valuelabels="EithaPressure.pressure,arterialPressure.systolic,arterialPressure.diastolic,Ecg.ecg,currentHeartReat.y" inputs="arterial_sO2,16777391,1,1,t;hradd,16777407,1,1,t" inputlabels="sO2.k,HRAdd.k"></bdl-fmi-->
<!-- tolerance="0.000001" starttime="0" fstepsize="0.05" fpslimit="20"  controlid="controlbuttons2" showcontrols="false"
<!--bdl-remote-value remoteurl="http://127.0.0.1:5000/vrapi" interval="2000" id="vrapi" inputs="volume;sO2"></bdl-remote-value-->
<bdl-remote-value remoteurl="vuplex://localhost:5000/vrapi" interval="2000" id="vrapi" inputs="arterial_sO2;arterial_pH;arterial_pCO2;arterial_base_excess;arterial_HCO3;arterial_cdCO2;idrate;heart_rate;nibp1;nibp2"></bdl-remote-value>
</div>
<div class="w3-black w3-sans-serif" style="width:100%">
<div class="w3-row">
<div class="w3-threequarter w3-padding">

<div class="w3-row">
<div class="w3-half">
&nbsp;<bdl-chartjs-time responsive="true" width="300" height="50" fromid="ventilator" labels="lungs pressure"  refindex="14" refvalues="1" minichart="true" colorindex=4 initialdata="0,0.01;1.014e+5,1.014e+5" maxdata="120"></bdl-chartjs-time>
<bdl-chartjs-time responsive="true" width="300" height="50" fromid="ventilator" labels="lungs pressure"  refindex="16" refvalues="1" minichart="true" colorindex=3 initialdata="0,0.1;0,0" maxdata="120"></bdl-chartjs-time>
</div>
<div class="w3-half">
&nbsp;<bdl-chartjs-time responsive="true" height="100" fromid="hemodynamics" labels="ecg" refindex="3" refvalues="1" throttle="50" colorindex="2" minichart="true" initialdata="0,0.01;0,0" maxdata="120"></bdl-chartjs-time>
&nbsp;<bdl-chartjs-time responsive="true" height="100" fromid="hemodynamics" labels="pulsatile sO2" refindex="0" refvalues="1" throttle="50" colorindex="1" minichart="true" initialdata="0,0.01;11370,11370" maxdata="120"></bdl-chartjs-time>
</div>
</div>
</div>
<div class="w3-quarter">
<br/>
<br/>

<div class="w3-card w3-text-aqua w3-large" style="white-space:nowrap">
&nbsp;RR&nbsp;<b class="w3-xxxlarge"><bdl-value id="idRR"  fromid="ventilator" refindex="8" convertor="60,1" precision="2"></bdl-value></b>&nbsp;<span class="w3-small">1/min</span>
<div class="w3-text-light-green w3-large">
<br/>
&nbsp;HR<b class="w3-xxxlarge"><bdl-value id="idheartrate"  fromid="hemodynamics" refindex="4" convertor="60,1" tofixed="0"></bdl-value></b>&nbsp;<span class="w3-small">1/min</span>
</div>
<br/>
<div class="w3-text-purple w3-large">
&nbsp;NIBP<b class="w3-xlarge"><bdl-value id="idNIBP"  fromid="hemodynamics" refindex="1" convertor="1,133.322" precision="3"></bdl-value>/<bdl-value id="idNIBP2"  fromid="hemodynamics" refindex="2" convertor="1,133.322" tofixed="0"></bdl-value></b>
<span class="w3-small">mmHg</span>
</div>
</div>
</div>
</div>
<div id="monitoring">
<div class="w3-row">
<div class="w3-threequarter w3-padding">
<div class="w3-row">
<div class="w3-half">
&nbsp;<!--bdl-chartjs-time responsive="true" height="50" fromid="idfmi" labels="sO2" refindex="1" refvalues="1" throttle="1000" colorindex="4" minichart="true" initialdata="0,0.01;0.98,0.98" min="0.5" max="1.0"></bdl-chartjs-time-->
</div>
<div class="w3-half">
&nbsp;<!--bdl-chartjs-time responsive="true" height="50" fromid="idfmi" labels="pO2,pCO2" refindex="13" refvalues="2" throttle="1000" colorindex="6" minichart="true" initialdata="0,0.01;0,0"></bdl-chartjs-time-->
</div>
</div>
</div>
<div class="w3-quarter">
<div class="" style="white-space:nowrap">
<div class="w3-text-yellow w3-large">
&nbsp;sO<sub>2</sub><sup>art</sup><b class="w3-xxxlarge"><bdl-value id="spo2value" fromid="idfmi" refindex="1" convertor="100,1" precision="3" ></bdl-value></b>&nbsp;<span class="w3-small">%</span><br/></div>
<div class="w3-text-red w3-large">&nbsp;pO<sub>2</sub><sup>art</sup><b class="w3-large"><bdl-value id="idpo2"  fromid="idfmi" refindex="13" convertor="1,133.322" precision="2" convertors="1,133.322"></bdl-value></b>&nbsp;<span class="w3-small">mmHg</span><br/></div>
<div class="w3-text-green w3-large">&nbsp;pCO<sub>2</sub><sup>art</sup><b class="w3-large"><bdl-value fromid="idfmi" refindex="14" convertor="1,133.322" precision="4" convertors="1,133.322"></bdl-value></b>&nbsp;<span class="w3-small">mmHg</span></div>
<div class="w3-text-blue w3-large">&nbsp;etCO<sub>2</sub><b class="w3-large"><bdl-value id="idetco2"  fromid="idfmi" refindex="14" convertor="1,134" precision="2" convertors="1,133.322" ></bdl-value></b>&nbsp;<span class="w3-small">mmHg</span></div>
</div>
</div>
</div>
<div class="w3-row">
<div class="w3-row">
<div class="w3-threequarter">

<div class="w3-row">


<div class="w3-quarter">
&nbsp;
<!--bdl-chartjs-xy fromid="ventilator" labelx="pressure" labely="volume" labels="pV1,pV2,pV3" refindex="0" refvalues="2" width="250" height="250" min="2" max="4.5" convertors="1,133.322,-760;1000,1" maxdata="128" id="idpv"></bdl-chartjs-xy-->

</div>

<div class="w3-quarter">
<div style="width:300px;height:200pxmargin-left:50px">
<br/>
<!--bdl-animate-adobe src="Plice.js" width="130" height="130" name="Plice" fromid="ventilator" responsive="true"></bdl-animate-adobe>
<bdl-bind2a findex="1" aname="PliceAnimace_anim" amin="0" amax="14" fmin="0.0023" fmax="0.0033"></bdl-bind2a-->
</div>
</div>
<div class="w3-quarter" style="width:340px;height:200px;zoom:80%;margin-left:80px">

<!--bdl-sachart fromid="idfmi" refindex="3,10" convertors="1,1,0;1,133.322"  class="w3-left" pointSize="50" style="width:100%;height:100%"></bdl-sachart-->

</div>

</div>

</div>

<!--div class="w3-rest w3-text-blue">
&nbsp;P<b class="w3-xxlarge"><bdl-value id="idP" fromid="ventilator" refindex="0" convertor="1,133.322"></bdl-value></b>&nbsp;<span class="w3-small">mmHg</span><br/>
&nbsp;V<b class="w3-xxlarge"><bdl-value id="idV"  fromid="ventilator" refindex="1" convertor="1000,1"></bdl-value></b>&nbsp;<span class="w3-small">l</span-->
<div class="w3-text-red">
&nbsp;p<sub>H</sub><sup>art</sup><b class="w3-xxxlarge"><bdl-value id="idpH"  fromid="idfmi" refindex="4"></bdl-value></b>
</div>
<div class="w3-text-green">
&nbsp;p<sub>H</sub><sup>mix</sup><b class=""><bdl-value id="idpHmix"  fromid="idfmi" refindex="5"></bdl-value></b>
</div>
<div class="w3-text-blue">
&nbsp;p<sub>H</sub><sup>ven</sup><b class=""><bdl-value id="idpHven"  fromid="idfmi" refindex="3"></bdl-value></b>
</div>
</div></div>
</div>
</div>
<bdl-pvtool id="idpvtool" fromid="no-ventilator" refindex="0" class="w3-small" refvalues="2" style="display:none;margin-left:50px;margin-right:50px"></bdl-pvtool>
</div>
<button class="w3-button w3-blue w3-large" onclick="document.getElementById('monitoring').style.display = 'block';document.getElementById('idpvtool').style.display = 'none';">MONITORING</button>
<button class="w3-button w3-blue w3-large" onclick="document.getElementById('monitoring').style.display = 'none';document.getElementById('idpvtool').style.display = 'block';">PV TOOL</button>&nbsp;&nbsp;
<span class="w3-right"><bdl-buttonparams title="1(normal)" ids="idshunts,iddeadspace,idrate,idcomp,ido2" values="2,150,17,60,21" fromid="vrapi" thresholdvalue="1" refindex="patient_state"></bdl-buttonparams> 
<bdl-buttonparams title="2(pneumonia)" ids="idshunts,iddeadspace,idrate,idcomp,ido2,idpause,idexp" values="95,1050,31,5,21,2,0.31" fromid="vrapi" refindex="patient_state" thresholdvalue="2"></bdl-buttonparams>
<bdl-buttonparams title="3(ventilated)" ids="idshunts,iddeadspace,idrate,idcomp,ido2,idpause,idexp,hradd" values="86,850,15,10,40,30,0.15,-1.2" fromid="vrapi" refindex="patient_state" thresholdvalue="3"></bdl-buttonparams>
<bdl-buttonparams title="4(stabilized)" ids="idshunts,iddeadspace,idrate,idcomp,ido2,hradd" values="50,750,15,10,60,0" fromid="vrapi" refindex="patient_state" thresholdvalue="4"></bdl-buttonparams>
<button class="w3-button w3-blue" onclick="['idRR', 'idheartrate', 'idpH', 'idpHven','idpHmix','spo2value'].forEach(id => document.getElementById(id).style.display = 'inline');">show1</button>
<button class="w3-button w3-blue" onclick="['idNIBP', 'idNIBP2', 'idP', 'idV','idetco2','idpo2','idpv'].forEach(id => document.getElementById(id).style.display = 'inline');">show2</button>
<button class="w3-button w3-blue" onclick="['idRR', 'idheartrate', 'idpH', 'idpHven','idpHmix','spo2value','idNIBP', 'idNIBP2', 'idP', 'idV','idetco2','idpo2','idpv'].forEach(id => document.getElementById(id).style.display = 'none');">hide</button>
<button class="w3-button w3-blue" onclick="console.log('sending vuplex message');const event1 = new CustomEvent('vuplexmessage', {detail: { patient_state: '2', 'version': navigator.userAgent }});window.dispatchEvent(event1);">debugv1</button> 
<button class="w3-button w3-blue" onclick="document.getElementById('vcontrols').style.display='block'">controls</button>
</span>


<!--bdl-chartjs-time width="600" height="200" fromid="idfmi" labels="ventilation" initialdata="0;0" refindex="12" refvalues="1"></bdl-chartjs-time>
<bdl-chartjs-time width="600" height="200" fromid="ventilator" labels="ventilation2" initialdata="0;0" refindex="7" refvalues="1"></bdl-chartjs-time-->

<div style="display:none" id="vcontrols" class="w3-card">
<button class="w3-button w3-red" onclick="document.getElementById('vcontrols').style.display='none'">X</button>

compliance <bdl-value fromid="ventilator" refindex="12" convertor="1e+10,98.0665"></bdl-value> <bdl-range id="idcomp" title="total compliance (ml/cmH20)" min="10" max="200" default="50" step="1" initdefault="true"></bdl-range>

conductance <bdl-value fromid="ventilator" refindex="11"></bdl-value> <bdl-range id="idexp" title="expiration conductance" min="0.001" max="1" default="0.31" step="0.001" initdefault="true"></bdl-range>

Resistance: <bdl-value fromid="ventilator" refindex="10" convertor="0.001,98.0665"></bdl-value> <bdl-range id="idres" title="Resistance" min="0.1" max="100" default="1.3" step="0.1" initdefault="true"></bdl-range>

Heart Rate adding 
Data to be sent to VR: <bdl-range id="hradd" min="-0.5" max="0.5" default="0" step="0.1"></bdl-range>
volume:<bdl-range id="volume" title="Lung volume (m3)" min="0.0001" max="0.01" default="0.002" step="0.000001" fromid="ventilator" refindex="1"></bdl-range>
asO2:<bdl-range id="arterial_sO2" min="0" max="1" default="0.981" step="0.001" title="so2"  fromid="idfmi" refindex="1"></bdl-range>
apH:<bdl-range id="arterial_pH" fromid="idfmi" min="0" max="14" default="0" step="0.00001" refindex="4"></bdl-range>
apCO2:<bdl-range id="arterial_pCO2" fromid="idfmi" refindex="14" min="0" max="1000" default="0" step="1" convertors="1,133.322"></bdl-range>
aBE:<bdl-range id="arterial_base_excess" fromid="idfmi" refindex="16" min="-200" max="200" default="0" step="0.0000001"></bdl-range>
aHCO3:<bdl-range id="arterial_HCO3" fromid="idfmi" refindex="17" min="0" max="100" default="0" step="0.0000001"></bdl-range>
acdCO2:<bdl-range id="arterial_cdCO2" fromid="idfmi" refindex="18"  min="0" max="100" default="0" step="0.0000001"></bdl-range>
ventilation:<bdl-range id="idventilation" title="Ventilation(m3/s)" min="0" max="0.009" default="0.0001595" step="0.0000001" fromid="ventilator" refindex="7"></bdl-range>
nibp1:<bdl-range id="nibp1" fromid="hemodynamics" refindex="1" convertors="1,133.322" precision="3" min="0" max="26000" step="1"></bdl-range>
nibp2<bdl-range id="nibp2" fromid="hemodynamics" refindex="2" convertors="1,133.322" tofixed="0" min="0" max="26000" step="1"></bdl-value>

Patient state: <br/>
<bdl-range id="patientstate" title="patient state" min="0" max="3" step="1" default="1" fromid="vrapi" refindex="patient_state"></bdl-range>
<!-- {
    "E_ratio": 3,
    "I_ratio": 1,
    "Vt_tidal_volume": 500,
    "arterial_HCO3": 0,
    "arterial_base_excess": 0,
    "arterial_cdCO2": 0,
    "arterial_pCO2": 0,
    "arterial_pH": 7,
    "arterial_sO2": 0.9,
    "f_breath_rate": 12,
    "o2_fraction": 21,
    "patient_state": 2,
    "pause_value": 0,
    "sO2": 0.95,
    "volume": 0.0023
}-->
Ventilated gas: <!--bdl-buttonparams title="Normal" ids="ido2,idco2,idh2o" values="21,0.03,6"></bdl-buttonparams>
<bdl-buttonparams title="O2 40%" ids="ido2,idco2,idh2o" values="40,0.03,6"></bdl-buttonparams>
<bdl-buttonparams title="O2 60%" ids="ido2,idco2,idh2o" values="60,0.03,6"></bdl-buttonparams-->
<bdl-range id="ido2" title="O2 %" min="5" max="93" default="21" fromid="vrapi" refindex="o2_fraction"  refconditionvar="patient_state" refconditionvalue="3"></bdl-range><br/>
<bdl-range id="iddeadspace" title="dead space" min="100" max="4500" default="150" initdefault="true"></bdl-range>
<bdl-range id="idshunts" title="L-V shunts %" min="5" max="95" default="2" initdefault="true"></bdl-range>
<bdl-range id="idco2" title="CO2 %" min="0" max="10" default="0.03" step="0.01"></bdl-range>
<bdl-range id="idh2o" title="H2O %" min="0" max="10" default="6" step="0.1"></bdl-range>

Mechanical ventilator setting:<br/>
<bdl-range id="idrate" title="Breath rate (1/min)" min="3" max="60" default="17" step="1" initdefault="true" fromid="vrapi" refindex="f_breath_rate" refconditionvar="patient_state" refconditionvalue="3"></bdl-range><br/>
<!--bdl-range id="idmuscle" title="Breathing force (%)" min="10" max="400" default="100" step="1" fromid="vrapi" refindex="0"></bdl-range-->
<bdl-range id="idtv" title="Vt - tidal volume (ml)" min="200" max="1500" default="800" step="1" fromid="vrapi" refindex="Vt_tidal_volume" initdefault="true"  refconditionvar="patient_state" refconditionvalue="3"></bdl-range><br/>
<bdl-range id="heart_rate" title="HR" min="2" max="200" default="60" step="1" fromid="hemodynamics" refindex="4" convertors="60,1" tofixed="0"></bdl-range><br/>
<div class="w3-hide">
<bdl-range id="idiratio" min="1" max="4" default="1" step="1" fromid="vrapi" refindex="I_ratio" refconditionvar="patient_state" refconditionvalue="3"></bdl-range>
<bdl-range id="ideratio" min="1" max="9" default="4" step="1" fromid="vrapi" refindex="E_ratio"  refconditionvar="patient_state" refconditionvalue="3"></bdl-range>
</div>
Set I:E ratio 
<bdl-buttonparams title="1:1" ids="idiratio,ideratio" values="1,1"></bdl-buttonparams>
<bdl-buttonparams title="1:2" ids="idiratio,ideratio" values="1,2"></bdl-buttonparams>
<bdl-buttonparams title="2:1" ids="idiratio,ideratio" values="2,1"></bdl-buttonparams>
<bdl-buttonparams title="3:2" ids="idiratio,ideratio" values="3,2"></bdl-buttonparams></br>
<bdl-range id="idpause" title="pause (%)" min="0" max="70" default="2" step="1" initdefault="true" fromid="vrapi" refindex="pause_value" refconditionvar="patient_state" refconditionvalue="3"></bdl-range>

</div>