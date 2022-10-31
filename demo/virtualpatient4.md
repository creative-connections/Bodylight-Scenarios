# Respiratory demo

<div class="w3-row">
<div class="w3-half">

respiratory model

<bdl-range id="idrate" title="Breathing rate (1/min)" min="1" max="120" default="12" step="1" fromid="vrapi" refindex="0"></bdl-range>

<bdl-range id="idmuscle" title="Breathing force (%)" min="10" max="400" default="100" step="1" fromid="vrapi" refindex="0"></bdl-range>



<bdl-fmi id="idfmi" mode="continuous" src="MinimalRespiration.js" fminame="MinimalRespiration" tolerance="0.000001" starttime="0" fstepsize="0.2" guid="{d0393898-9a87-4ac9-904f-355fd73a976f}" valuereferences="637536225,905969702,905969728,16777228,16777223" valuelabels="lungs.volume,pCO2.partialPressure,pO2.partialPressure,Pmin,RespiratoryRate" inputs="idrate,16777223,1,60,t;idmuscle,16777228,-1000,100,t" inputlabels="RespirationRate,Pmin" fpslimit="5"></bdl-fmi>




<bdl-chartjs-time width="400" height="200" fromid="idfmi" labels="alveolar volume" initialdata="" refindex="0" refvalues="1"></bdl-chartjs-time>
<bdl-chartjs-time width="400" height="200" fromid="idfmi" labels="pCO2,pO2" initialdata="" refindex="1" convertors="1,133.322;1,133.322" refvalues="2"></bdl-chartjs-time>


</div>
<div class="w3-half">

API to VR

<bdl-remote-value remoteurl="http://localhost:8080/vrapi" interval="1000" id="vrapi" inputs="volume"></bdl-remote-value>

Data to be send outside:

<bdl-range id="volume" title="Lung volume (m3)" min="0.0001" max="0.01" default="0.002" step="0.000001" fromid="idfmi" refindex="0"></bdl-range>

Data that can be changed from outside:

<bdl-chartjs-time width="400" height="200" fromid="idfmi" labels="respiratory rate [Hz]" initialdata="" refindex="4" refvalues="1"></bdl-chartjs-time>



</div>
</div>
