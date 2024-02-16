<div class="w3-row">
<div class="w3-half w3-margin w3-khaki w3-xlarge ">


muž 42 let, přijata na pohotovost v celkově zhoršeném stavu. 
 <!--
 se známou historií DM 1. typu (od dětství)
 Vstupně 
- polyurie
- polydipsie
- v poslední době opakovaně těžká nevolnost
- výrazný neúmyslný pokles váhy v posledních několika týdnech
- „dnes už to nešlo vydržet, bylo moc špatně, na zvracení, točila se hlava“
- naměřila si i v posledních 3 dnech zvýšenou teplotu
- proto volala RZS.
-->
</div>

<div class="w3-half w3-margin">
</div>
</div>

<div class="w3-black">

<div class="w3-blue" style="position: absolute">
<span class="w3-small">v3.19&nbsp;</span>
<!--bdl-fmi id="idfmi" mode="continuous" src="modelECMORespiratoryVR_ECMOSimNoRegVentilatorVC8.js" fminame="modelECMORespiratoryVR_ECMOSimNoRegVentilatorVC8" tolerance="0.0001" starttime="0" fstepsize="0.2" fpslimit="5" guid="{df14b810-b76e-4be8-bc34-be8fcb02ed2e}" valuereferences="637537985,905970425,905969984,905970853,905970388,905969947,905970816,16777229,16777230,16777583,16777584,16777585,16777223,100663306,16777224,16777225,905970386,637538038,637537985" valuelabels="lungs.volume,Veins.chemicalSolution.bloodGases.sO2,Arteries.chemicalSolution.bloodGases.sO2,Tissue.chemicalSolution.bloodGases.sO2,Veins.chemicalSolution.bloodGases.pH,Arteries.chemicalSolution.bloodGases.pH,Tissue.chemicalSolution.bloodGases.pH,RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.Eratio,ventilatorSCMV.pause,AirO2,AirN2,AirCO2,AirH2O,Veins.chemicalSolution.bloodGases.pCO2,expiration.q_in.p,lungs.volume" inputs="idrate,16777229,1,60,t;idtv,16777230,1,1000000,t;idiratio,16777583,1,1,t;ideratio,16777584,1,1,t;idpause,16777585,1,100,0,t;ido2,16777223,1,100,t;idco2,16777224,1,100,t;idh2o,16777225,1,100,t;idshunts,16777226,1,100,t;iddeadspace,16777231,1,1000000,t;idexp,16777587,1,1000000,t" inputlabels="RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.Eratio,ventilatorSCMV.pause,AirO2,AirCO2,AirH2O,Shunts,DV,expirationConductance.k"></bdl-fmi-->
<bdl-animate-control id="controlbuttons2" controlfmi="true" showstep="false"></bdl-animate-control>
<!-- optimalized -O3 --><!--bdl-fmi id="idfmi" showcontrols="false" controlid="controlbuttons2" mode="continuous" src="modelECMORespiratoryVR_BloodGasesTransport_BloodyMaryPPG.js" fminame="modelECMORespiratoryVR_BloodGasesTransport_BloodyMaryPPG" tolerance="0.000001" starttime="0" fstepsize="0.1" fpslimit="10" guid="{135691d3-d2dd-455a-9cee-6772a67e2f41}" valuereferences="905975214,369103423,905975027,905975211,905974332,905975026,16777311,100663310,16777312,16777313,905975213,335544320" valuelabels="venous.sO2,arterial.sO2,tissueUnit[1].sO2,venous.pH,arterial.pH,tissueUnit[1].pH,AirO2,AirN2,AirCO2,AirH2O,venous.pCO2,plethy" inputs="idrate,16777223,1,60,f;ido2,16777311,1,100,t;idco2,16777312,1,100,t;idh2o,16777313,1,100,t;idshunts,16777227,1,100,t;iddeadspace,16777225,1,1000000,t" inputlabels="RR,AirO2,AirCO2,AirH2O,cShuntFrac,DV"></bdl-fmi-->
<!-- not optimalized -O0 --><bdl-fmi id="idfmi" mode="continuous" showcontrols="false" controlid="controlbuttons2" src="modelECMORespiratoryVR_BloodGasesTransport_BloodyMaryPPG2.js" fminame="modelECMORespiratoryVR_BloodGasesTransport_BloodyMaryPPG2" tolerance="0.00001" starttime="0" fstepsize="0.4" fpslimit="0.5" guid="{83d444de-f6b1-4a60-a953-199d3e7b2d57}" valuereferences="905975257,369103464,905975068,905975254,905974373,905975067,905975342,905972510,16777311,16777312,905975256,335544320,637537073,637538918,637538919" valuelabels="venous.sO2,arterial.sO2,tissueUnit[1].sO2,venous.pH,arterial.pH,tissueUnit[1].pH,AirO2.y,AirN2,AirCO2,AirH2O,venous.pCO2,plethy,respiratoryCenter.VentilationSwitch.y,arterial.pO2,arterial.pCO2" inputs="rate,16777223,1,60,t;idco2,16777311,1,100,t;idh2o,16777312,1,100,t;idshunts,16777227,1,100,t;iddeadspace,16777225,1,1000000,t;ido2,16777547,1,100,t;idventilation,16777511,1,1,t" inputlabels="RR,AirCO2,AirH2O,cShuntFrac,DV,AirO2Fraction.k,respiratoryCenter.ArtificialVentilation.k"></bdl-fmi>
<bdl-fmi id="ventilator" mode="continuous" showcontrols="false" controlid="controlbuttons2" src="modelECMORespiratoryVR_BloodGasesTransport_LungVentilatorSCMV2.js" fminame="modelECMORespiratoryVR_BloodGasesTransport_LungVentilatorSCMV2" tolerance="0.0001" starttime="0" fstepsize="0.1" fpslimit="10" guid="{67602ceb-0a4d-46bc-8ee5-bb8b3e656885}" valuereferences="637534443,637534485,16777227,16777225,16777240,16777241,16777242,335544321,369099030" valuelabels="expiration.q_in.p,lungs.volume,RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.Eratio,ventilatorSCMV.pause,ventilation,filter.y" inputs="rate,16777227,1,60,t;idtv,16777225,1,1000000,t;idiratio,16777240,1,1,t;idpause,16777242,1,100,t;ideratio,16777241,1,1,t" inputlabels="RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.pause,ventilatorSCMV.Eratio"></bdl-fmi>
<bdl-fmi id="hemodynamics" mode="continuous" showcontrols="false" controlid="controlbuttons2" src="modelECMORespiratoryVR_BloodGasesTransport_MeursModel2011_HemodynamicsRegulatedHR.js" fminame="modelECMORespiratoryVR_BloodGasesTransport_MeursModel2011_HemodynamicsRegulatedHR" tolerance="0.000001" starttime="0" fstepsize="0.05" fpslimit="20" guid="{87860081-905b-4adf-b51a-cdbabd18cf3e}" valuereferences="905970357,905970199,905970200,33554460,637534720" valuelabels="EithaPressure.pressure,arterialPressure.systolic,arterialPressure.diastolic,Ecg.ecg,currentHeartReat.y" inputs="sO2,16777391,1,1,t" inputlabels="sO2.k"></bdl-fmi>
<!--bdl-remote-value remoteurl="http://127.0.0.1:5000/vrapi" interval="2000" id="vrapi" inputs="volume;sO2"></bdl-remote-value-->
<!--bdl-remote-value remoteurl="http://127.0.0.1:5000/vrapi" interval="2000" id="vrapi" inputs="sO2"></bdl-remote-value-->
</div>

<div class="w3-row">
</div>
<div class="w3-row">
<div class="w3-threequarter">
&nbsp;<bdl-chartjs-time width="750" height="120" fromid="ventilator" labels="lungs volume"  refindex="1" refvalues="1" minichart="true" colorindex=5 initialdata="0,0.01;0.0023,0.0023"></bdl-chartjs-time><br/>
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
</div>
</div>
</div>
<div class="w3-row">
<div class="w3-threequarter">
<div class="w3-row">
&nbsp;<bdl-chartjs-time width="300" height="120" fromid="idfmi" labels="sO2" refindex="1" refvalues="1" throttle="1000" colorindex="4" minichart="true" initialdata="0,0.01;0.98,0.98"></bdl-chartjs-time>
&nbsp;<bdl-chartjs-time width="300" height="120" fromid="idfmi" labels="pO2,pCO2" refindex="13" refvalues="2" throttle="1000" colorindex="6" minichart="true" ></bdl-chartjs-time>
</div>
</div>
<div class="w3-quarter">
<div class="" style="white-space:nowrap">
<div class="w3-text-yellow w3-large">
&nbsp;sO<sub>2</sub><sup>art</sup><b class="w3-xxxlarge"><bdl-value fromid="idfmi" refindex="1" convertor="100,1" precision="4"></bdl-value></b>&nbsp;<span class="w3-small">%</span><br/></div>
<div class="w3-text-red w3-large">&nbsp;pO<sub>2</sub><sup>art</sup><b class="w3-large"><bdl-value fromid="idfmi" refindex="13" convertor="1,133.322" precision="4" convertors="1,133.322"></bdl-value></b>&nbsp;<span class="w3-small">mmHg</span><br/></div>
<div class="w3-text-green w3-large">&nbsp;pCO<sub>2</sub><sup>art</sup><b class="w3-large"><bdl-value fromid="idfmi" refindex="14" convertor="1,133.322" precision="4" convertors="1,133.322"></bdl-value></b>&nbsp;<span class="w3-small">mmHg</span></div
</div>
</div>
</div>
<!--div class="w3-row">
<div class="w3-quarter">
<bdl-sachart fromid="idfmi" refindex="3,10" convertors="1,1,0;1,133.322" width="300" height="250" minichart="true" class="w3-left"></bdl-sachart>
</div>

<div class="w3-quarter">
<div style="max-width:200px;margin-left:50px">
<br/>

<bdl-animate-adobe src="Plice.js" width="150" height="150" name="Plice" fromid="ventilator" responsive="true"></bdl-animate-adobe>
<bdl-bind2a findex="1" aname="PliceAnimace_anim" amin="0" amax="15" fmin="0.0023" fmax="0.0033"></bdl-bind2a>

</div>
</div>
<div class="w3-quarter">

<bdl-chartjs-xy fromid="ventilator" labelx="pressure" labely="volume" labels="pV1,pV2,pV3" refindex="0" refvalues="2" width="250" height="250" convertors="1,133.322;1000,1" maxdata="512"></bdl-chartjs-xy>

</div>
<div class="w3-rest w3-text-blue">
&nbsp;P<b class="w3-xxlarge"><bdl-value fromid="ventilator" refindex="0" convertor="1,133.322"></bdl-value></b>&nbsp;<span class="w3-small">mmHg</span><br/>
&nbsp;V<b class="w3-xxlarge"><bdl-value fromid="ventilator" refindex="1" convertor="1000,1"></bdl-value></b>&nbsp;<span class="w3-small">l</span>
<div class="w3-text-red">
&nbsp;p<sub>H</sub><sup>art</sup><b class="w3-xxxlarge"><bdl-value fromid="idfmi" refindex="4"></bdl-value></b>
</div>
<div class="w3-text-green">
&nbsp;p<sub>H</sub><sup>mix</sup><b class=""><bdl-value fromid="idfmi" refindex="5"></bdl-value></b>
</div>
<div class="w3-text-blue">
&nbsp;p<sub>H</sub><sup>ven</sup><b class=""><bdl-value fromid="idfmi" refindex="3"></bdl-value></b>
</div>
</div>
</div-->


</div>
</div>

<!--button class="w3-button w3-blue" onclick="document.getElementById('vcontrols').style.display='block'">eGolem controls</button-->

<!--bdl-chartjs-time width="600" height="200" fromid="idfmi" labels="ventilation" initialdata="0;0" refindex="12" refvalues="1"></bdl-chartjs-time>
<bdl-chartjs-time width="600" height="200" fromid="ventilator" labels="ventilation2" initialdata="0;0" refindex="7" refvalues="1"></bdl-chartjs-time-->

<div style="display:none" id="vcontrols" class="w3-card">
<button class="w3-button w3-red" onclick="document.getElementById('vcontrols').style.display='none'">X</button>
<bdl-remote-value remoteurl="https://patf-lab06.lf1.cuni.cz:5000/lungsim" interval="1000" id="lungsim" inputs="rate;muscle_pressure;blend_duration;compliance;peep;resistance;run"></bdl-remote-value>
<bdl-remote-value remoteurl="https://patf-lab06.lf1.cuni.cz:5000/cardiohelp" interval="1000" id="cardiohelp" inputs="p_art;p_ven;temp;dot_v"></bdl-remote-value>
<bdl-remote-value remoteurl="https://patf-lab06.lf1.cuni.cz:5000/manequin" interval="1000" id="manequin"></bdl-remote-value>

<div class="w3-row">
<div class="w3-half">

<div class="w3-row">
<div class="w3-twothird">

![body](body.png)

<bdl-chartjs-time id="id11" width="500" height="150" fromid="lungsim" refindex="7" refvalues="1" labels="tidal volume"></bdl-chartjs-time>


</div>
<div class="w3-third w3-tiny">

eGolem simulator <bdl-checkbox id="run" default="true" titlemin="STOPPED" titlemax="RUNNING"></bdl-checkbox><br/>

<bdl-buttonparams title="Normal breathing" ids="blend_duration,compliance,muscle_pressure,peep,resistance,rate" values="4,50,11,5,35,17"></bdl-buttonparams>

<bdl-buttonparams title="Kussmaul " ids="blend_duration,compliance,muscle_pressure,peep,resistance,rate" values="4,50,51,5,19,33"></bdl-buttonparams>

<bdl-buttonparams title="Type 2 hypocapnic" ids="blend_duration,compliance,muscle_pressure,peep,resistance,rate" values="4,20,8,5,40,40"></bdl-buttonparams>

<!--bdl-range id="rate" min="0" max="100" default="7" step="0.5" title="breath rate [1/min]"></bdl-range><br/-->
<bdl-range id="blend_duration" min="1" max="10" default="4" step="1" title="how many breaths to change value [1]"></bdl-range><br/>
<bdl-range id="compliance" min="0.5" max="250" default="50" step="0.5" title="Compliance [ml/cmH2O]"></bdl-range><br/>
<bdl-range id="muscle_pressure" min="0" max="100" default="11" title="Muscle Pressure [cmH2O]"></bdl-range><br/>
<bdl-range id="peep" min="4" max="8" default="5" title="Initial pressure [cmH2O]"></bdl-range><br/>
<bdl-range id="resistance" min="8" max="150" default="35" title="Resistance [cmH2O/(l.s)]"></bdl-range><br/>
<bdl-range id="rate" min="0" max="100" default="17" step="0.5" title="breath rate [1/min]"></bdl-range><br/>
<bdl-range id="id5" title="Breath volume [ml]" min="100" max="2500" default="500" step="1" maxlength="8" fromid="lungsim" refindex="7"></bdl-range>

</div>
</div>
</div>
<div class="w3-half">

<div class="w3-row">
<div class="w3-third">

![cardiohelp](cardiohelp.jpg)

</div>
<div class="w3-twothird w3-tiny">

<div class="w3-hide">
<bdl-value-boolean fromid="cardiohelp" refindex="0" throttle="0" valuetrue="BUBBLE CONNECTED" valuefalse="bubble disconnected"></bdl-value-boolean><br/>
dot_v:<bdl-value fromid="cardiohelp" refindex="1" throttle="0"></bdl-value><br/>
<bdl-range id="dot_v" min="0" max="1600" default="100" step="1" title="dot_v [l/min]"></bdl-range><br/>

<bdl-range id="p_art" min="0" max="160" default="100" step="1" title="p_art [mmHg]" ids2="p_art" convertors="1,133.322" fromid="idfmi" refindex="17"></bdl-range><br/>
<bdl-value fromid="cardiohelp" refindex="3" throttle="0"></bdl-value><br/>
<bdl-range id="p_ven" min="0" max="160" default="20" step="1" title="p_ven [mmHg]" ids2="p_art" convertors="1,133.322" fromid="idfmi" refindex="18"></bdl-range><br/>
<bdl-value fromid="cardiohelp" refindex="4" throttle="0"></bdl-value><br/>
rpm: <bdl-value fromid="cardiohelp" refindex="5" throttle="0"></bdl-value><br/>
<bdl-range id="temp" min="20" max="42" default="37.5" step="0.1" title="temp [deg C]"></bdl-range><br/>
<bdl-value fromid="cardiohelp" refindex="6" throttle="0"></bdl-value><br/>

</div>
<bdl-value-boolean fromid="manequin" refindex="0" throttle="0" valuetrue="CANULA CONNECTED" valuefalse="canula disconnected"></bdl-value-boolean><br/>
<bdl-value-boolean fromid="manequin" refindex="1" throttle="0" valuetrue="ECMO CONNECTED" valuefalse="ecmo disconnected"></bdl-value-boolean><br/>
<bdl-value-boolean fromid="manequin" refindex="2" throttle="0" valuetrue="O2 CONNECTED" valuefalse="O2 disconnected"></bdl-value-boolean><br/>
<bdl-value-boolean fromid="cardiohelp" refindex="2" throttle="0" valuetrue="OXY CONNECTED" valuefalse="oxy disconnected"></bdl-value-boolean><br/>
<bdl-chartjs-time id="id12" width="200" height="150" fromid="cardiohelp" refindex="5" refvalues="1" labels="RPM" maxdata="86400"></bdl-chartjs-time>

## **ECMO**
<div class="w3-hide">
<bdl-range id="id7" title="ECMO setting: 0 - VV; 1 - VA" min="0" max="1" default="0" step="1" maxlength="4"></bdl-range>

<bdl-range id="id8" title="rotation of ECMO [rpm]" min="0" max="5000" default="0" step="50" fromid="cardiohelp" refindex="5"></bdl-range>

<bdl-range id="id9" title="Sweep (volume of gases going through ECMO)[ml/min]" min="0" max="8000" default="0" step="250" maxlength="8"></bdl-range>

<bdl-range id="id10" title="Fraction conc. of O2[0-1]" min="0.21" max="1" default="0.21" step="0.01" maxlength="8"></bdl-range>
</div>

<bdl-buttonparams title="Set basic VV-ECMO" ids="id7,id8,id9,id10" values="0,3500,2500,0.8"></bdl-buttonparams>
<bdl-buttonparams title="Set basic VA-ECMO" ids="id7,id8,id9,id10" values="1,4000,3000,0.5"></bdl-buttonparams>


</div>

</div>
</div>

</div> <!-- controls -->


</div>
</div>

