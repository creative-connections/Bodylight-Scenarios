# Respiratory demo

<div class="w3-row">
<div class="w3-half">

respiratory model

<bdl-range id="idrate" title="Breathing rate (1/min)" min="1" max="120" default="12" step="1"></bdl-range>

<bdl-range id="idmuscle" title="Breathing force (%)" min="10" max="400" default="100" step="1"></bdl-range>

<bdl-fmi id="idfmi" mode="continuous" src="Respiration_Model2.js" fminame="Respiration_Model" tolerance="0.000001" starttime="0" fstepsize="0.1" guid="{2db185c2-0c36-4398-acdf-0b878ec3b51d}" valuereferences="637536156,905972189,905972214" valuelabels="leftAlveoli.volume,pCO2.partialPressure,pO2.partialPressure" inputs="idrate,16777222,1,60,t;idmuscle,16777233,-250,100,t" inputlabels="RespirationRate,Pmin"></bdl-fmi>

<bdl-chartjs-time width="400" height="200" fromid="idfmi" labels="alveolar volume" initialdata="" refindex="0" refvalues="1"></bdl-chartjs-time>
<bdl-chartjs-time width="400" height="200" fromid="idfmi" labels="pCO2,pO2" initialdata="" refindex="1" refvalues="2"></bdl-chartjs-time>




</div>
<div class="w3-half">

API to VR

</div>
</div>
