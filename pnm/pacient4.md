<div class="w3-blue" style="position: absolute">
<span class="w3-small">v3.18&nbsp;</span>
<bdl-animate-control id="controlbuttons2" controlfmi="true" showstep="false" playafterstart="true"></bdl-animate-control>
<!-- not optimalized -O0 --><bdl-fmi id="idfmi" mode="continuous" showcontrols="false" controlid="controlbuttons2" src="modelECMORespiratoryVR_BloodGasesTransport_BloodyMaryPPG2.js" fminame="modelECMORespiratoryVR_BloodGasesTransport_BloodyMaryPPG2" tolerance="0.00001" starttime="0" fstepsize="2" fpslimit="0.5" guid="{83d444de-f6b1-4a60-a953-199d3e7b2d57}" valuereferences="905975257,369103464,905975068,905975254,905974373,905975067,905975342,905972510,16777311,16777312,905975256,335544320,637537073,637538918,637538919" valuelabels="venous.sO2,arterial.sO2,tissueUnit[1].sO2,venous.pH,arterial.pH,tissueUnit[1].pH,AirO2.y,AirN2,AirCO2,AirH2O,venous.pCO2,plethy,respiratoryCenter.VentilationSwitch.y,arterial.pO2,arterial.pCO2" inputs="idrate,16777223,1,60,t;idco2,16777311,1,100,t;idh2o,16777312,1,100,t;idshunts,16777227,1,100,t;iddeadspace,16777225,1,1000000,t;ido2,16777547,1,100,t;idventilation,16777511,1,1,t" inputlabels="RR,AirCO2,AirH2O,cShuntFrac,DV,AirO2Fraction.k,respiratoryCenter.ArtificialVentilation.k"></bdl-fmi>
<bdl-fmi id="ventilator" mode="continuous" showcontrols="false" controlid="controlbuttons2" src="modelECMORespiratoryVR_BloodGasesTransport_LungVentilatorSCMV2.js" fminame="modelECMORespiratoryVR_BloodGasesTransport_LungVentilatorSCMV2" tolerance="0.000001" starttime="0" fstepsize="0.1" fpslimit="10" guid="{98a13f8f-d60a-484c-9971-59dd5b4b6bb8}" valuereferences="637534444,637534486,16777227,16777225,16777240,16777241,16777242,335544321,369099031,637534474,16777223,234881080,16777224,905969977,16777247" valuelabels="expiration.q_in.p,lungs.volume,RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.Eratio,ventilatorSCMV.pause,ventilation,filter.y,lungs.pressure,TotalResistance,expirationConductance.y,TotalCompliance,lungsPressureMeasure.pressure,idealValve.Pknee" inputs="idrate,16777227,1,60,t;idtv,16777225,1,1000000,t;idiratio,16777240,1,1,t;idpause,16777242,1,100,t;ideratio,16777241,1,1,t;idres,16777223,98.0665,0.001,t;idcomp,16777224,1e-6,98.0665,t;idexp,16777272,1,100000,t;idpeep,16777247,98.0638,1,t" inputlabels="RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.pause,ventilatorSCMV.Eratio,TotalResistance,TotalCompliance,expirationConductance.k,idealValve.Pknee"></bdl-fmi>
<bdl-fmi id="hemodynamics" mode="continuous" showcontrols="false" controlid="controlbuttons2" src="modelECMORespiratoryVR_BloodGasesTransport_MeursModel2011_HemodynamicsRegulatedHR.js" fminame="modelECMORespiratoryVR_BloodGasesTransport_MeursModel2011_HemodynamicsRegulatedHR" tolerance="0.000001" starttime="0" fstepsize="0.05" fpslimit="20" guid="{87860081-905b-4adf-b51a-cdbabd18cf3e}" valuereferences="905970357,905970199,905970200,33554460,637534720,637534838" valuelabels="EithaPressure.pressure,arterialPressure.systolic,arterialPressure.diastolic,Ecg.ecg,currentHeartReat.y,Eethv.q_in[1].m_flow" inputs="sO2,16777391,1,1,t;idep,16777229,133.322,1,t;idep,16777239,133.322,1,t;idep,16777249,133.322,1,t;idep,16777258,133.322,1,t;idep,16777330,133.322,1,t;idep,16777339,133.322,1,t;idep,16777281,133.322,1,f;idep,16777313,133.322,1,t" inputlabels="sO2.k,Epa.ExternalPressure,Epv.ExternalPressure,LeftAtrium.ExternalPressure,LeftVentricle.ExternalPressure,RightAtrium.ExternalPressure,RightVentricle.ExternalPressure,Eitha.ExternalPressure,Eithv.ExternalPressure"></bdl-fmi>
API to VR <!--bdl-remote-value remoteurl="http://127.0.0.1:5000/vrapi" interval="2000" id="vrapi" inputs="volume;sO2"></bdl-remote-value-->
<bdl-remote-value remoteurl="http://127.0.0.1:5000/vrapi" interval="2000" id="vrapi" inputs="sO2"></bdl-remote-value>
</div>

<div class="w3-row">
<div class="w3-threequarter">
<div class="w3-black w3-sans-serif" style="max-width:1100px">
<div class="w3-row">
</div><div class="w3-row">
<div class="w3-threequarter">
&nbsp;<bdl-chartjs-time width="750" height="120" fromid="ventilator" labels="lungs pressure"  refindex="9" refvalues="1" minichart="true" colorindex=5 initialdata="0;1.014e+5"></bdl-chartjs-time><br/>
&nbsp;<bdl-chartjs-time width="750" height="60" fromid="hemodynamics" labels="ecg" refindex="3" refvalues="1" throttle="100" colorindex="2" minichart="true" initialdata="0,0.01;0,0"></bdl-chartjs-time>
&nbsp;<bdl-chartjs-time width="750" height="60" fromid="hemodynamics" labels="pulsatile sO2" refindex="0" refvalues="1" throttle="100" colorindex="11" minichart="true" initialdata="0,0.01;11370,11370"></bdl-chartjs-time>
</div>
<div class="w3-quarter">
<div class="w3-card w3-text-aqua w3-large" style="white-space:nowrap">
&nbsp;RR&nbsp;<b class="w3-xxxlarge"><bdl-value fromid="ventilator" refindex="8" convertor="60,1" precision="2"></bdl-value></b>&nbsp;<span class="w3-small">1/min</span>
<div class="w3-text-light-green w3-large">
<br/>
&nbsp;HR<b class="w3-xxxlarge"><bdl-value fromid="hemodynamics" refindex="4" convertor="60,1" tofixed="0"></bdl-value></b>&nbsp;<span class="w3-small">1/min</span>
</div>
<br/>
<div class="w3-text-purple w3-large">
&nbsp;NIBP<b class="w3-xlarge"><bdl-value fromid="hemodynamics" refindex="1" convertor="1,133.322" precision="3"></bdl-value>/<bdl-value fromid="hemodynamics" refindex="2" convertor="1,133.322" tofixed="0"></bdl-value></b>
<span class="w3-small">mmHg</span>
</div>
<div class="w3-text-purple w3-large">
&nbsp;C<sub>ardiac</sub>O<sub>utput</sub><b class="w3-xlarge"><bdl-value fromid="hemodynamics" refindex="5" convertor="60,1" precision="2"></bdl-value></b>
<span class="w3-small">l/min</span>
</div>
</div>
</div>
</div><div class="w3-row">
<div class="w3-threequarter">
<div class="w3-row">
&nbsp;<bdl-chartjs-time width="300" height="120" fromid="idfmi" labels="sO2" refindex="1" refvalues="1" throttle="1000" colorindex="4" minichart="true" initialdata="0,0.01;0.98,0.98" min="0.5" max="1.0"></bdl-chartjs-time>
&nbsp;<bdl-chartjs-time width="300" height="120" fromid="idfmi" labels="pO2,pCO2" refindex="13" refvalues="2" throttle="1000" colorindex="6" minichart="true" ></bdl-chartjs-time>
</div>
</div>
<div class="w3-quarter">
<div class="" style="white-space:nowrap">
<div class="w3-text-yellow w3-large">
&nbsp;sO<sub>2</sub><sup>art</sup><b class="w3-xxxlarge"><bdl-value id="spo2value" fromid="idfmi" refindex="1" convertor="100,1" precision="4"></bdl-value></b>&nbsp;<span class="w3-small">%</span><br/></div>
<div class="w3-text-red w3-large">&nbsp;pO<sub>2</sub><sup>art</sup><b class="w3-large"><bdl-value fromid="idfmi" refindex="13" convertor="1,133.322" precision="2" convertors="1,133.322"></bdl-value></b>&nbsp;<span class="w3-small">mmHg</span><br/></div>
<!--div class="w3-text-green w3-large">&nbsp;pCO<sub>2</sub><sup>art</sup><b class="w3-large"><bdl-value fromid="idfmi" refindex="14" convertor="1,133.322" precision="4" convertors="1,133.322"></bdl-value></b>&nbsp;<span class="w3-small">mmHg</span></div-->
<div class="w3-text-blue w3-large">&nbsp;etCO<sub>2</sub><b class="w3-large"><bdl-value id="etco2value" fromid="idfmi" refindex="14" convertor="1,134" precision="2" convertors="1,133.322"></bdl-value></b>&nbsp;<span class="w3-small">mmHg</span></div>
</div>
</div>
</div>
<div class="w3-row">
<div class="w3-quarter w3-white" style="width:300px;height:300px;zoom:80%">

<bdl-sachart fromid="idfmi" refindex="3,10" convertors="1,1,0;1,133.322"  class="w3-left" pointSize="50" style="width:100%;height:100%"></bdl-sachart>
</div>

<div class="w3-quarter">
<div style="max-width:200px;margin-left:50px">
<br/>
<!--bdl-animate-adobe src="Plice.js" width="150" height="150" name="Plice" fromid="ventilator" responsive="true"></bdl-animate-adobe>
<bdl-bind2a findex="1" aname="PliceAnimace_anim" amin="0" amax="15" fmin="0.0023" fmax="0.0033"></bdl-bind2a-->
</div>
</div>
<div class="w3-quarter">

<bdl-chartjs-xy fromid="ventilator" labelx="pressure" labely="volume" labels="pV1,pV2,pV3" refindex="0" refvalues="2" width="250" height="250" min="2.2" max="4.5" convertors="1,133.322,-760;1000,1" maxdata="128"></bdl-chartjs-xy>

</div>
<div class="w3-rest">
<div class="w3-text-white w3-large">
&nbsp;C<sub>stat</sub><b class="w3-xxlarge"><bdl-value id="idcstat" fromid="ventilator" refindex="12" convertor="1e+10,98.0665" precision="2"></bdl-value></b>&nbsp;<span class="w3-small">ml/cmH<sub>2</sub>O</span>
</div>
<div class="w3-text-white w3-large">
&nbsp;R<sub>insp</sub><b class="w3-xxlarge"><bdl-value id="idrinsp" fromid="ventilator" refindex="10" convertor="0.001,98.0665" precision="2"></bdl-value></b>
</div>
<div class="w3-text-blue w3-large">
&nbsp;PEEP<b class="w3-xxlarge"><bdl-value fromid="ventilator" refindex="14" convertor="1,98.063" precision="2"></bdl-value></b>
</div></div></div>
</div></div>

<div class="w3-quarter w3-large w3-padding">

4.Pacient byl napojen na umělou plicní ventilaci přístroje Hamilton C6 v režimu SCMV s oxygenací 60% O<sub>2</sub>, dechovou frekvencí 18 dechů za minutu a PEEP 10 cmH<sub>2</sub>O. Uběhlo 24 hodin a pacient je stabilizovaný
 

<bdl-quizx id="q4.1" type="choice2" 
          question="4.1 Spusťte simulaci a počkejte asi 15-20s. Je současné nastavení plicní ventilace dostačující??" 
          answers="A. Ano, Saturace se ustálila na vyšších hodnotách.|B. Ne. Saturace je stále nízká pod 90%" 
          correctoptions="true|false" 
          explanations="ne|ano" 
          buttontitle="zkontrolovat odpověď"></bdl-quizx>
<bdl-quizx id="q4.2" type="choice2" 
          question="4.2 Pokračujte v simulaci. Spusťte událost komplikace a pozorujte co se děje na monitoru pacienta." 
          answers="A. Saturace začala klesat, srdeční výdej prudce poklesl|B. Saturace začala stoupat i srdeční výdej." 
          correctoptions="true|false" 
          explanations="ano|ne" 
          buttontitle="zkontrolovat odpověď"><bdl-buttonparams title="Spustit událost" ids="idpeep,idcomp,idshunts,idep" values="10,12,84,14"></bdl-buttonparams></bdl-quizx>
<bdl-quizx id="q4.3" type="choice" 
          question="4.3 Nyní máte asi 5 minut na to provést ještě nějaké akce nebo stanovit pracovní hypotézu, vyberte:" 
          answers="A. Hemothorax|B. Pneumothorax|C. Pneumomediastinum|D. Pneumopericardium|E. Je potřeba další vyšetření, askultace, ultrazvuk aj." 
          correctoptions="false|true|true|true|true" 
          explanations="ne|ano|ano|ano|ano" 
          buttontitle="zkontrolovat odpověď"></bdl-quizx>          
<bdl-quizx id="q4.4" type="choice2" 
               question="4.4 Provedl jste askultaci. Stetoskopem na pravé straně hrudi nejsou slyšet zvuky nádechu a výdechu. Ultrazvuk odhalil vychýlení trachey na pravou stranu. Nyní jste si zavolal pomoc. Vyberte pravděpodobnou komplikaci" 
           answers="B. Pneumothorax|C. Pneumomediastinum|D. Pneumopericardium:" 
           correctoptions="true|false|false" 
           explanations="ano|ne|ne" 
           buttontitle="zkontrolovat odpověď"></bdl-quizx>

<bdl-quiz-summary id="qs1">
  Shrnutí odpovědí:
</bdl-quiz-summary>          
<bdl-quiz-control ids="q4.1,q4.2,q4.3,q4.4,qs1"></bdl-quiz-control>
</div>
</div>

<button class="w3-button w3-blue" onclick="document.getElementById('vcontrols').style.display='block'">Ventilator controls</button>

<!--bdl-chartjs-time width="600" height="200" fromid="idfmi" labels="ventilation" initialdata="0;0" refindex="12" refvalues="1"></bdl-chartjs-time>
<bdl-chartjs-time width="600" height="200" fromid="ventilator" labels="ventilation2" initialdata="0;0" refindex="7" refvalues="1"></bdl-chartjs-time-->

<div style="display:none" id="vcontrols" class="w3-card">
<button class="w3-button w3-red" onclick="document.getElementById('vcontrols').style.display='none'">X</button>

compliance <bdl-value fromid="ventilator" refindex="12" convertor="1e+10,98.0665"></bdl-value> <bdl-range id="idcomp" title="total compliance (ml/cmH20)" min="10" max="200" default="25" step="1" initdefault="true"></bdl-range>

conductance <bdl-value fromid="ventilator" refindex="11"></bdl-value> <bdl-range id="idexp" title="expiration conductance" min="0.001" max="1" default="0.02" step="0.001" initdefault="true"></bdl-range>

Resistance: <bdl-value fromid="ventilator" refindex="10" convertor="0.001,98.0665"></bdl-value> <bdl-range id="idres" title="Resistance" min="1" max="100" default="12" step="1" initdefault="true"></bdl-range>

Peep mmHg: <bdl-range id="idpeep" title="PEEP" min="0" max="20" default="10" step="1" initdefault="true"></bdl-range>

External Pressure Thorax mmHg: <bdl-range id="idep" title="EP" min="-40" max="20" default="2" step="1" initdefault="true"></bdl-range>


Data to be sent to VR: 
volume:<bdl-range id="volume" title="Lung volume (m3)" min="0.0001" max="0.01" default="0.002" step="0.000001" fromid="ventilator" refindex="1"></bdl-range>
sO2:<bdl-range id="sO2" min="0" max="1" default="0.981" step="0.001" title="so2"  fromid="idfmi" refindex="1"></bdl-range>
ventilation:<bdl-range id="idventilation" title="Ventilation(m3/s)" min="0" max="0.009" default="0.0001595" step="0.0000001" fromid="ventilator" refindex="7"></bdl-range>

Patient state: <br/>
<bdl-buttonparams title="Normal" ids="idshunts,iddeadspace" values="2,150" fromid="vrapi" thresholdvalue="0" refindex="5" ></bdl-buttonparams> 
<bdl-buttonparams title="Moderate respiration failure" ids="idshunts,iddeadspace" values="38,500" fromid="vrapi" refindex="5" thresholdvalue="1"></bdl-buttonparams> 
<bdl-buttonparams title="Severe failure" ids="idshunts,iddeadspace" values="58,850" fromid="vrapi" refindex="5" thresholdvalue="2"></bdl-buttonparams><br/>
<bdl-range id="patientstate" title="patient state" min="0" max="3" step="1" default="1" fromid="vrapi" refindex="5"></bdl-range>

Ventilated gas: <!--bdl-buttonparams title="Normal" ids="ido2,idco2,idh2o" values="21,0.03,6"></bdl-buttonparams>
<bdl-buttonparams title="O2 40%" ids="ido2,idco2,idh2o" values="40,0.03,6"></bdl-buttonparams>
<bdl-buttonparams title="O2 60%" ids="ido2,idco2,idh2o" values="60,0.03,6"></bdl-buttonparams-->
<bdl-range id="ido2" title="O2 %" min="5" max="93" default="60" fromid="vrapi" refindex="4" initdefault="true"></bdl-range><br/>
<bdl-range id="iddeadspace" title="dead space" min="100" max="4500" default="400" initdefault="true"></bdl-range>
<bdl-range id="idshunts" title="L-V shunts %" min="5" max="95" default="44" initdefault="true"></bdl-range>
<bdl-range id="idco2" title="CO2 %" min="0" max="10" default="0.03" step="0.01"></bdl-range>
<bdl-range id="idh2o" title="H2O %" min="0" max="10" default="6" step="0.1"></bdl-range>

Mechanical ventilator setting:<br/>
<bdl-range id="idrate" title="Breathing rate (1/min)" min="1" max="60" default="18" step="1" initdefault="true" fromid="vrapi" refindex="3"></bdl-range><br/>
<!--bdl-range id="idmuscle" title="Breathing force (%)" min="10" max="400" default="100" step="1" fromid="vrapi" refindex="0"></bdl-range-->
<bdl-range id="idtv" title="Vt - tidal volume (ml)" min="200" max="1500" default="800" step="1" fromid="vrapi" refindex="2" initdefault="true"></bdl-range><br/>
<div class="w3-hide">
<bdl-range id="idiratio" min="1" max="4" default="1" step="1"fromid="vrapi" refindex="1"></bdl-range>
<bdl-range id="ideratio" min="1" max="9" default="4" step="1" fromid="vrapi" refindex="0"></bdl-range>
</div>
Set I:E ratio 
<bdl-buttonparams title="1:1" ids="idiratio,ideratio" values="1,1"></bdl-buttonparams>
<bdl-buttonparams title="1:2" ids="idiratio,ideratio" values="1,2"></bdl-buttonparams>
<bdl-buttonparams title="2:1" ids="idiratio,ideratio" values="2,1"></bdl-buttonparams>
<bdl-buttonparams title="3:2" ids="idiratio,ideratio" values="3,2"></bdl-buttonparams></br>
<bdl-range id="idpause" title="pause (%)" min="0" max="70" default="2" step="1" initdefault="true" fromid="vrapi" refindex="6"></bdl-range>


<!--bdl-chartjs-time width="150" height="90" fromid="idfmi" labels="RR" initialdata="0" refindex="7" refvalues="1" throttle="1000"></bdl-chartjs-time>
<bdl-chartjs-time width="150" height="90" fromid="idfmi" labels="Vt" initialdata="" refindex="8" refvalues="1" throttle="1000"></bdl-chartjs-time>
<bdl-chartjs-time width="150" height="90" fromid="idfmi" labels="I,E ratio" initialdata="" refindex="9" refvalues="2" throttle="1000"></bdl-chartjs-time>
<bdl-chartjs-time width="150" height="90" fromid="idfmi" labels="pause %" initialdata="" refindex="11" refvalues="1" throttle="1000"></bdl-chartjs-time>
<bdl-chartjs-time width="150" height="90" fromid="idfmi" labels="O2 %" initialdata="" refindex="12" refvalues="1" convertors="100,1" throttle="1000"></bdl-chartjs-time-->

</div>