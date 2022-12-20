# Respiratory failure and artificial breathing

<div class="w3-row">
<div class="w3-half">

respiratory model

<bdl-range id="idrate" title="Breathing rate (1/min)" min="1" max="120" default="12" step="1" fromid="vrapi" refindex="0"></bdl-range>

<!--bdl-range id="idmuscle" title="Breathing force (%)" min="10" max="400" default="100" step="1" fromid="vrapi" refindex="0"></bdl-range-->

<bdl-range id="idtv" title="Vt - tidal volume (ml)" min="200" max="1000" default="500" step="1" fromid="vrapi" refindex="1"></bdl-range>

<div class="w3-hide">
<bdl-range id="idiratio" min="1" max="10" default="1" step="1"fromid="vrapi" refindex="2"></bdl-range>
<bdl-range id="ideratio" min="1" max="10" default="1" step="1" fromid="vrapi" refindex="3"></bdl-range>
</div>
Set I:E ratio 
<bdl-buttonparams title="1:1" ids="idiratio,ideratio" values="1,1"></bdl-buttonparams>
<bdl-buttonparams title="1:2" ids="idiratio,ideratio" values="1,2"></bdl-buttonparams>
<bdl-buttonparams title="2:1" ids="idiratio,ideratio" values="2,1"></bdl-buttonparams>
<bdl-buttonparams title="3:2" ids="idiratio,ideratio" values="3,2"></bdl-buttonparams></br>

<bdl-range id="idtv" title="pause (%)" min="10" max="50" default="25" step="1" fromid="vrapi" refindex="4"></bdl-range>

<bdl-fmi id="idfmi" mode="continuous" src="modelECMORespiratoryVR_ECMOSimNoRegVentilatorVC.js" fminame="modelECMORespiratoryVR_ECMOSimNoRegVentilatorVC" tolerance="0.000001" starttime="0" fstepsize="0.1" guid="{2399d9af-2317-424b-bfec-212643b9afd4}" valuereferences="637538923,905970442,905969985,905970886,905970405,905969948,905970849,16777226,16777227,16777696,16777697,16777698" valuelabels="lungs.volume,Veins.chemicalSolution.bloodGases.sO2,Arteries.chemicalSolution.bloodGases.sO2,Tissue.chemicalSolution.bloodGases.sO2,Veins.chemicalSolution.bloodGases.pH,Arteries.chemicalSolution.bloodGases.pH,Tissue.chemicalSolution.bloodGases.pH,RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.Eratio,ventilatorSCMV.pause" inputs="idrate,16777226,1,60,t;idtv,16777227,1,1000000,t;idiratio,16777696,1,1,t;ideratio,16777697,1,1,t;idpause,16777698,1,100,t" inputlabels="RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.Eratio,ventilatorSCMV.pause" fpslimit="5"></bdl-fmi>

<!--bdl-fmi id="idfmi" mode="continuous" src="MinimalRespiration.js" fminame="MinimalRespiration" tolerance="0.000001" starttime="0" fstepsize="0.2" guid="{d0393898-9a87-4ac9-904f-355fd73a976f}" valuereferences="637536225,905969702,905969728,16777228,16777223" valuelabels="lungs.volume,pCO2.partialPressure,pO2.partialPressure,Pmin,RespiratoryRate" inputs="idrate,16777223,1,60,t;idmuscle,16777228,-1000,100,t" inputlabels="RespirationRate,Pmin" fpslimit="5"></bdl-fmi-->


<bdl-chartjs-time width="400" height="200" fromid="idfmi" labels="lungs volume" initialdata="" refindex="0" refvalues="1"></bdl-chartjs-time>

<bdl-chartjs-time width="400" height="200" fromid="idfmi" labels="sO2 veins,sO2 arteries,sO2 tissues" initialdata="" refindex="1" convertors="" refvalues="3"></bdl-chartjs-time>


</div>
<div class="w3-half">

API to VR

<bdl-remote-value remoteurl="http://localhost:5000/vrapi" interval="1000" id="vrapi" inputs="volume"></bdl-remote-value>

Data to be send to VR:

<bdl-range id="volume" title="Lung volume (m3)" min="0.0001" max="0.01" default="0.002" step="0.000001" fromid="idfmi" refindex="0"></bdl-range>

Data that can be changed from VR:

<bdl-chartjs-time width="400" height="100" fromid="idfmi" labels="RR" initialdata="0" refindex="7" refvalues="1"></bdl-chartjs-time>

<bdl-chartjs-time width="400" height="100" fromid="idfmi" labels="Vt (mandatory tidal volume)" initialdata="" refindex="8" refvalues="1"></bdl-chartjs-time>

<bdl-chartjs-time width="400" height="100" fromid="idfmi" labels="I,E ratio" initialdata="" refindex="9" refvalues="2"></bdl-chartjs-time>

<bdl-chartjs-time width="400" height="100" fromid="idfmi" labels="pause %" initialdata="" refindex="11" refvalues="1"></bdl-chartjs-time>




</div>
</div>
