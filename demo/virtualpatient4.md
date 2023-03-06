<div class="w3-row">
<div class="w3-half">
<div class="w3-left w3-small">v3.5&nbsp;</div>
Simulation control: <bdl-fmi id="idfmi" mode="continuous" src="modelECMORespiratoryVR_ECMOSimNoRegVentilatorVC8.js" fminame="modelECMORespiratoryVR_ECMOSimNoRegVentilatorVC8" tolerance="0.001" starttime="0" fstepsize="0.2" fpslimit="5" guid="{df14b810-b76e-4be8-bc34-be8fcb02ed2e}" valuereferences="637537985,905970425,905969984,905970853,905970388,905969947,905970816,16777229,16777230,16777583,16777584,16777585,16777223,100663306,16777224,16777225,905970386,637538038,637537985" valuelabels="lungs.volume,Veins.chemicalSolution.bloodGases.sO2,Arteries.chemicalSolution.bloodGases.sO2,Tissue.chemicalSolution.bloodGases.sO2,Veins.chemicalSolution.bloodGases.pH,Arteries.chemicalSolution.bloodGases.pH,Tissue.chemicalSolution.bloodGases.pH,RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.Eratio,ventilatorSCMV.pause,AirO2,AirN2,AirCO2,AirH2O,Veins.chemicalSolution.bloodGases.pCO2,expiration.q_in.p,lungs.volume" inputs="idrate,16777229,1,60,t;idtv,16777230,1,1000000,t;idiratio,16777583,1,1,t;ideratio,16777584,1,1,t;idpause,16777585,1,100,0,t;ido2,16777223,1,100,t;idco2,16777224,1,100,t;idh2o,16777225,1,100,t;idshunts,16777226,1,100,t;iddeadspace,16777231,1,1000000,t;idexp,16777587,1,1000000,t" inputlabels="RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.Eratio,ventilatorSCMV.pause,AirO2,AirCO2,AirH2O,Shunts,DV,expirationConductance.k"></bdl-fmi>



</div>
<div class="w3-half">

API to VR
<bdl-remote-value remoteurl="http://127.0.0.1:5000/vrapi" interval="2000" id="vrapi" inputs="volume;sO2"></bdl-remote-value>


</div>
</div>

<div class="w3-black w3-sans-serif">
<div class="w3-row">

</div><div class="w3-row">
<div class="w3-threequarter">
&nbsp;<bdl-chartjs-time width="850" height="240" fromid="idfmi" labels="lungs volume"  refindex="0" refvalues="1" minichart="true" colorindex=5 initialdata="0,0.01;0.0023,0.0023"></bdl-chartjs-time>
</div>
<div class="w3-quarter">
<div class="w3-card w3-text-aqua w3-large" style="white-space:nowrap">

&nbsp;RR&nbsp;<b class="w3-xxxlarge"><bdl-value fromid="idfmi" refindex="7" convertor="60,1"></bdl-value></b>&nbsp;<span class="w3-small">1/min</span>
</div>

</div>
</div><div class="w3-row">
<div class="w3-threequarter">
<div class="w3-row">
&nbsp;<bdl-chartjs-time width="850" height="240" fromid="idfmi" labels="sO2 veins,sO2 arteries,sO2 tissues" refindex="1" refvalues="3" throttle="1000" colorindex="3" minichart="true" maxdata="4096" initialdata="0,0.01;0.98,0.98;0.98,0.98;0.98,0.98"></bdl-chartjs-time>


</div>
</div>
<div class="w3-quarter">
<div class="w3-card" style="white-space:nowrap">
<div class="w3-text-yellow w3-large">
&nbsp;spO<sub>2</sub><sup>art</sup><b class="w3-xxxlarge"><bdl-value fromid="idfmi" refindex="2" convertor="100,1"></bdl-value></b>&nbsp;<span class="w3-small">%</span><br/></div>

<div class="w3-text-aqua w3-large">
&nbsp;spO<sub>2</sub><sup>mix</sup><b class=""><bdl-value fromid="idfmi" refindex="3" convertor="100,1"></bdl-value></b>&nbsp;<span class="w3-small">%</span>
</div>
<div class="w3-text-purple w3-large">
&nbsp;spO<sub>2</sub><sup>ven</sup><b class=""><bdl-value fromid="idfmi" refindex="1" convertor="100,1"></bdl-value></b>&nbsp;<span class="w3-small">%</span>
</div>
</div>

</div>
<div class="w3-threequarter">
&nbsp;<bdl-chartjs-time width="850" height="240" fromid="idfmi" labels="pH veins,pH arteries,pH mixed" refindex="4" refvalues="3" throttle="1000"  colorindex="0" maxdata="4096" minichart="true" initialdata="0,0.01;7.4,7.4;7.4,7.4;7.4,7.4"></bdl-chartjs-time>

</div>
<div class="w3-quarter">
<div class="w3-card w3-large" style="white-space:nowrap">

<div class="w3-text-red">
&nbsp;p<sub>H</sub><sup>art</sup><b class="w3-xxxlarge"><bdl-value fromid="idfmi" refindex="5"></bdl-value></b>
</div>
<div class="w3-text-green">
&nbsp;p<sub>H</sub><sup>mix</sup><b class=""><bdl-value fromid="idfmi" refindex="6"></bdl-value></b>
</div>
<div class="w3-text-blue">
&nbsp;p<sub>H</sub><sup>ven</sup><b class=""><bdl-value fromid="idfmi" refindex="4"></bdl-value></b>
</div>
</div>
</div>
<div class="w3-row">
<div class="w3-quarter">
<bdl-sachart fromid="idfmi" refindex="4,16" convertors="1,1,0;1,133.322" width="300" height="250" class="w3-left"></bdl-sachart>
</div>

<div class="w3-quarter">
<bdl-animate-adobe src="Plice.js" width="150" height="150" name="Plice" fromid="idfmi" responsive="true"></bdl-animate-adobe>
<bdl-bind2a findex="0" aname="PliceAnimace_anim" amin="0" amax="30" fmin="0.0023" fmax="0.0033"></bdl-bind2a>
</div>
<div class="w3-quarter">

<bdl-chartjs-xy fromid="idfmi" labelx="pressure" labely="volume" labels="pV1,pV2,pV3" refindex="17" refvalues="2" width="250" height="250" convertors="1,133.322;1000,1"></bdl-chartjs-xy>

</div>
<div class="w3-rest w3-text-blue">
&nbsp;P<b class="w3-xxxlarge"><bdl-value fromid="idfmi" refindex="17" convertor="1,133.322"></bdl-value></b>&nbsp;<span class="w3-small">mmHg</span><br/>
&nbsp;V<b class="w3-xxxlarge"><bdl-value fromid="idfmi" refindex="18" convertor="1000,1"></bdl-value></b>&nbsp;<span class="w3-small">l</span>
</div>
</div>

</div>
</div>

<button class="w3-button w3-blue" onclick="document.getElementById('vcontrols').style.display='block'">Ventilator controls</button>

<div style="display:none" id="vcontrols" class="w3-card">
<button class="w3-button w3-red" onclick="document.getElementById('vcontrols').style.display='none'">X</button>

Data to be sent to VR: 
volume:<bdl-range id="volume" title="Lung volume (m3)" min="0.0001" max="0.01" default="0.002" step="0.000001" fromid="idfmi" refindex="0"></bdl-range>
sO2:<bdl-range id="sO2" min="0" max="1" default="0" step="0.01" title="so2"  fromid="idfmi" refindex="2"></bdl-range>

Patient state: <br/>
<bdl-buttonparams title="Normal" ids="idshunts,iddeadspace" values="2,150" fromid="vrapi" thresholdvalue="0" refindex="5" ></bdl-buttonparams> 
<bdl-buttonparams title="Moderate respiration failure" ids="idshunts,iddeadspace" values="38,400" fromid="vrapi" refindex="5" thresholdvalue="1"></bdl-buttonparams> 
<bdl-buttonparams title="Severe failure" ids="idshunts,iddeadspace" values="58,450" fromid="vrapi" refindex="5" thresholdvalue="2"></bdl-buttonparams><br/>
<bdl-range id="patientstate" title="patient state" min="0" max="3" step="1" default="1" fromid="vrapi" refindex="5"></bdl-range>

Ventilated gas: <!--bdl-buttonparams title="Normal" ids="ido2,idco2,idh2o" values="21,0.03,6"></bdl-buttonparams>
<bdl-buttonparams title="O2 40%" ids="ido2,idco2,idh2o" values="40,0.03,6"></bdl-buttonparams>
<bdl-buttonparams title="O2 60%" ids="ido2,idco2,idh2o" values="60,0.03,6"></bdl-buttonparams-->
<bdl-range id="ido2" title="O2 %" min="5" max="93" default="21" fromid="vrapi" refindex="4"></bdl-range><br/>
<bdl-range id="iddeadspace" title="dead space" min="100" max="4500" default="400"></bdl-range>
<bdl-range id="idshunts" title="L-V shunts %" min="5" max="95" default="38"></bdl-range>
<bdl-range id="idco2" title="CO2 %" min="0" max="10" default="0.03" step="0.01"></bdl-range>
<bdl-range id="idh2o" title="H2O %" min="0" max="10" default="6" step="0.1"></bdl-range>

Mechanical ventilator setting:<br/>
<bdl-range id="idrate" title="Breathing rate (1/min)" min="1" max="60" default="17" step="1" fromid="vrapi" refindex="3"></bdl-range><br/>
<!--bdl-range id="idmuscle" title="Breathing force (%)" min="10" max="400" default="100" step="1" fromid="vrapi" refindex="0"></bdl-range-->
<bdl-range id="idtv" title="Vt - tidal volume (ml)" min="200" max="1000" default="500" step="1" fromid="vrapi" refindex="2"></bdl-range><br/>
<div class="w3-hide">
<bdl-range id="idiratio" min="1" max="4" default="1" step="1"fromid="vrapi" refindex="1"></bdl-range>
<bdl-range id="ideratio" min="1" max="9" default="4" step="1" fromid="vrapi" refindex="0"></bdl-range>
</div>
Set I:E ratio 
<bdl-buttonparams title="1:1" ids="idiratio,ideratio" values="1,1"></bdl-buttonparams>
<bdl-buttonparams title="1:2" ids="idiratio,ideratio" values="1,2"></bdl-buttonparams>
<bdl-buttonparams title="2:1" ids="idiratio,ideratio" values="2,1"></bdl-buttonparams>
<bdl-buttonparams title="3:2" ids="idiratio,ideratio" values="3,2"></bdl-buttonparams></br>
<bdl-range id="idpause" title="pause (%)" min="0" max="70" default="0" step="1" fromid="vrapi" refindex="6"></bdl-range>

<bdl-range id="idexp" title="expiration conductance" min="1" max="100" default="2"></bdl-range>


<!--bdl-chartjs-time width="150" height="90" fromid="idfmi" labels="RR" initialdata="0" refindex="7" refvalues="1" throttle="1000"></bdl-chartjs-time>
<bdl-chartjs-time width="150" height="90" fromid="idfmi" labels="Vt" initialdata="" refindex="8" refvalues="1" throttle="1000"></bdl-chartjs-time>
<bdl-chartjs-time width="150" height="90" fromid="idfmi" labels="I,E ratio" initialdata="" refindex="9" refvalues="2" throttle="1000"></bdl-chartjs-time>
<bdl-chartjs-time width="150" height="90" fromid="idfmi" labels="pause %" initialdata="" refindex="11" refvalues="1" throttle="1000"></bdl-chartjs-time>
<bdl-chartjs-time width="150" height="90" fromid="idfmi" labels="O2 %" initialdata="" refindex="12" refvalues="1" convertors="100,1" throttle="1000"></bdl-chartjs-time-->

</div>