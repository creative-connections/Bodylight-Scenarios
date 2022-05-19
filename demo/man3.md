# Manequin demo 3

ECMO simulator without manequin. 
1. Start simulation with button <i class="fa fa-play"></i>
1. Set exemplar values with button e.g. <bdl-buttonparams title="Set physiologic values" ids="id1,id2,id3,id4,id5,id6,id8,id9" values="0.02,1.25,1.25,17,500,150,0,0"></bdl-buttonparams>. 
2. Set individual value with range component e.g. <bdl-range id="idx4" title="Breath rate [1/min]" min="0" max="40" default="17" step="1" maxlength="8"></bdl-range>
3. See trends in charts:

<div class="w3-row">
<div class="w3-third">

<bdl-fmi id="idfmi" mode="" src="modelECMO_ECMOSimReg.js" fminame="modelECMO_ECMOSimReg" tolerance="0.000001" starttime="0" fstepsize="0.1" guid="{e95f698f-c78d-404c-b23c-765c6a1c8837}" valuereferences="637535798,637535752,905972945,905972991,905970845,905970846,637534528,905970441,905970885,905973186,905973975,905970848,905972838,16777524,905973379,905974175,905974014,905971304,637535866,637534525,905970438,905970882" valuelabels="pO2Arteries.partialPressure,pCO2Arteries.partialPressure,pO2Veins.partialPressure,pCO2Veins.partialPressure,Tissue.chemicalSolution.bloodGases.pO2,Tissue.chemicalSolution.bloodGases.pCO2,Arteries.chemicalSolution.bloodGases.sO2,Veins.chemicalSolution.bloodGases.sO2,Tissue.chemicalSolution.bloodGases.sO2,pH_Arteries.pH,pH_Veins.pH,Tissue.chemicalSolution.bloodGases.pH,flowMeasureCardiacOutput.volumeFlowRate,MinuteVolume.SolutionFlow,flowMeasureAlveols.volumeFlowRate,flowMeasureECMO.volumeFlowRate,flowMeasureSweep.volumeFlowRate,pressureArterial.pressure,PressureVeins.pressure,Arteries.chemicalSolution.bloodGases.cHCO3,Veins.chemicalSolution.bloodGases.cHCO3,Tissue.chemicalSolution.bloodGases.cHCO3" inputs="id1,16777224,1,1,0;id2,16777225,1,7998000,0;id3,16777226,1,7998000,0;id4,16777226,1,60,0;id5,16777227,1,1000000,0;id6,16777228,1,1000000,0;id7,16777229,1,1,0;id8,16777230,1,1,0;id9,16777231,1,60000000,0;id10,16777232,1,1,0" inputlabels="Shunts,StarlingLeft,StarlingRight,RR,TV,DV,VAV,RPM,SWEEP,FiO2"></bdl-fmi>


## **Patient state**

<bdl-buttonparams title="Set physiologic values" ids="id1,id2,id3,id4,id5,id6,id8,id9" values="0.02,1.25,1.25,17,500,150,0,0"></bdl-buttonparams>

### Respiration

<bdl-range id="id4" title="Breath rate [1/min]" min="0" max="40" default="17" step="1" maxlength="8"></bdl-range>

<bdl-range id="id5" title="Breath volume [ml]" min="300" max="2500" default="500" step="100" maxlength="8"></bdl-range>

### Oxygenation params

<bdl-range id="id6" title="Death space volume [ml]" min="0" max="2500" default="150" step="10" maxlength="8"></bdl-range>

<bdl-range id="id1" title="Fraction of P-L shunts [0-1]" min="0" max="1" default="0.02" step="0.02" maxlength="8"></bdl-range>

<bdl-buttonparams title="Set respiration failure" ids="id1,id4,id5,id6" values="0.2,17,500,300"></bdl-buttonparams>

### Heart params
<bdl-range id="id2" title="Power of left heart (StarlingLeft)" min="0" max="1.5" default="1.25" step="0.125" maxlength="8"></bdl-range>

<bdl-range id="id3" title="Power of right heart (StarlingRight)" min="0" max="1.5" default="1.25" step="0.25" maxlength="8"></bdl-range>

<bdl-buttonparams title="Set cardiac failure" ids="id2,id3" values="0.5,0.5"></bdl-buttonparams>

## **ECMO**

<bdl-range id="id7" title="ECMO setting: 0 - VV; 1 - VA" min="0" max="1" default="0" step="1" maxlength="4"></bdl-range>

<bdl-range id="id8" title="rotation of ECMO [rot/min]" min="0" max="5000" default="0" step="250" maxlength="8"></bdl-range>

<bdl-range id="id9" title="Sweep (volume of gases going through ECMO)[ml/min]" min="0" max="8000" default="0" step="250" maxlength="8"></bdl-range>

<bdl-range id="id10" title="Fraction conc. of O2[0-1]" min="0.21" max="1" default="0.21" step="0.01" maxlength="8"></bdl-range>

<bdl-buttonparams title="Set basic VV-ECMO" ids="id7,id8,id9,id10" values="0,3500,2500,0.8"></bdl-buttonparams>
<bdl-buttonparams title="Set basic VA-ECMO" ids="id7,id8,id9,id10" values="1,4000,3000,0.5"></bdl-buttonparams>


</div>
<div class="w3-third">

#### Parcial pressure of blood gases[mmHg]
<bdl-chartjs-time id="id11" width="360" height="240" fromid="idfmi" labels="Arterial pO2, Arterial pCO2, Venous pO2, Venous pCO2,Mixed pO2,Mixed pCO2" initialdata="" refindex="0" refvalues="6" convertors="x*0.00750061683;x*0.00750061683;x*0.00750061683;x*0.00750061683;x*0.00750061683;x*0.00750061683"></bdl-chartjs-time>


#### Oxygen saturation in segments[%]
<bdl-chartjs-time id="id12" width="360" height="240" fromid="idfmi" labels="Arterial sO2, Venous sO2,Mixed sO2" initialdata="" refindex="6" refvalues="3" convertors="x*100;x*100;x*100"></bdl-chartjs-time>

#### pH of blood in segments [-]
<bdl-chartjs-time id="id12" width="360" height="240" fromid="idfmi" labels="Arterial pH,Venous pH,Mixed pH" initialdata="" refindex="9" refvalues="3"></bdl-chartjs-time>

</div>
<div class="w3-third">

#### Flow in segments [l/min]
<bdl-chartjs-time id="id12" width="360" height="240" fromid="idfmi" labels="Minute cardiac output,Minute ventilation rate, Alveolar ventilation, Flowrate of blood through ECMO, Sweep" initialdata="" refindex="12" refvalues="5" convertors="x*60000;x*60000;x*60000;x*60000;x*60000"></bdl-chartjs-time>

#### Blood pressure [mmHg]
<bdl-chartjs-time id="id12" width="360" height="240" fromid="idfmi" labels="Mean arterial pressure, Venous pressure" initialdata="" refindex="17" refvalues="2" convertors="x*0.00750061683; x*0.00750061683"></bdl-chartjs-time>

### Concentration of HCO3 [mmol/l]
<bdl-chartjs-time id="id12" width="360" height="240" fromid="idfmi" labels="Arteriak HCO3,Venous HCO3,Mixed HCO3" initialdata="" refindex="19" refvalues="3" convertors=""></bdl-chartjs-time>

</div></div>
