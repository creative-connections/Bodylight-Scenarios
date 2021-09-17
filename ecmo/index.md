
# **ECMO simulátor**

<div class="w3-row">
<div class="w3-third">

<bdl-fmi id="idfmi" src="DP_0ferkl_0ECMO_ECMOSimNoReg.js" fminame="DP_0ferkl_0ECMO_ECMOSimNoReg" tolerance="0.000001" starttime="0" fstepsize="0.1" guid="{feaad3bc-9d02-4774-99ab-1d3de5c64e8d}" valuereferences="905971254,905971208,905972945,905972991,905970845,905970846,905969984,905970441,905970885,905973162,905973946,905970848,905972838,100666550,905973350,905974145,905973985,905971304,637535866,905969981,905970438,905970882" valuelabels="pO2Arteries.partialPressure,pCO2Arteries.partialPressure,pO2Veins.partialPressure,pCO2Veins.partialPressure,Tissue.chemicalSolution.bloodGases.pO2,Tissue.chemicalSolution.bloodGases.pCO2,Arteries.chemicalSolution.bloodGases.sO2,Veins.chemicalSolution.bloodGases.sO2,Tissue.chemicalSolution.bloodGases.sO2,pH_Arteries.pH,pH_Veins.pH,Tissue.chemicalSolution.bloodGases.pH,flowMeasureCardiacOutput.volumeFlowRate,MinuteVolume.SolutionFlow,flowMeasureAlveols.volumeFlowRate,flowMeasureECMO.volumeFlowRate,flowMeasureSweep.volumeFlowRate,pressureArterial.pressure,PressureVeins.pressure,Arteries.chemicalSolution.bloodGases.cHCO3,Veins.chemicalSolution.bloodGases.cHCO3,Tissue.chemicalSolution.bloodGases.cHCO3" inputs="id1,16777223,1,1,0;id2,16777224,1,7998000,0;id3,16777225,1,7998000,0;id4,16777226,1,60,0;id5,16777227,1,1000000,0;id6,16777228,1,1000000,0;id7,16777232,1,1,0;id8,16777233,1,1,0;id9,16777234,1,60000000,0;id10,16777235,1,1,0" inputlabels="Shunts,StarlingLeft,StarlingRight,RR,TV,DV,VAV,RPM,SWEEP,FiO2"></bdl-fmi>


## **Parametry pacienta**

<bdl-buttonparams title="Fyziologické hodnoty" ids="id1,id2,id3,id4,id5,id6,id8,id9" values="0.02,1.25,1.25,17,500,150,0,0"></bdl-buttonparams>

### Dechové parametry

<bdl-range id="id4" title="Dechová frekvence [1/min]" min="0" max="40" default="17" step="1" maxlength="8"></bdl-range>

<bdl-range id="id5" title="Dechový objem [ml]" min="300" max="2500" default="500" step="100" maxlength="8"></bdl-range>

### Parametry poruchy okysličení

<bdl-range id="id6" title="Objem mrtvého prostoru [ml]" min="0" max="2500" default="150" step="10" maxlength="8"></bdl-range>

<bdl-range id="id1" title="Frakce P-L zkratů" min="0" max="1" default="0.02" step="0.02" maxlength="8"></bdl-range>

<bdl-buttonparams title="Respirační selhání" ids="id1,id4,id5,id6" values="0.2,17,500,300"></bdl-buttonparams>

### Parametry poruchy srdce
<bdl-range id="id2" title="Výkonnost levého srdce (StarlingLeft)" min="0" max="1.5" default="1.25" step="0.125" maxlength="8"></bdl-range>

<bdl-range id="id3" title="Výkonnost pravého srdce (StarlingRight)" min="0" max="1.5" default="1.25" step="0.25" maxlength="8"></bdl-range>

<bdl-buttonparams title="Srdeční selhání" ids="id2,id3" values="0.5,0.5"></bdl-buttonparams>

## **Parametry ECMO**

<bdl-range id="id7" title="Zapojení ECMO: 0 - VV; 1 - VA" min="0" max="1" default="0" step="1" maxlength="4"></bdl-range>

<bdl-range id="id8" title="Otáčky ECMO [ot./min]" min="0" max="8000" default="0" step="250" maxlength="8"></bdl-range>

<bdl-range id="id9" title="Sweep [ml/min]" min="0" max="8000" default="0" step="250" maxlength="8"></bdl-range>

<bdl-range id="id10" title="FiO2" min="0.21" max="1" default="0.21" step="0.01" maxlength="8"></bdl-range>

<bdl-buttonparams title="Základní VV-ECMO" ids="id7,id8,id9,id10" values="0,3500,2500,0.8"></bdl-buttonparams>
<bdl-buttonparams title="Základní VA-ECMO" ids="id7,id8,id9,id10" values="1,4000,3000,0.5"></bdl-buttonparams>


</div>
<div class="w3-third">

#### Parciální tlaky krevních plynů [mmHg]
<bdl-chartjs-time id="id11" width="360" height="240" fromid="idfmi" labels="Arteriální pO2, Arteriální pCO2, Venózní pO2, Venózní pCO2,Smíšené pO2, Smíšené pCO2" initialdata="" refindex="0" refvalues="6" convertors="x*0.00750061683;x*0.00750061683;x*0.00750061683;x*0.00750061683;x*0.00750061683;x*0.00750061683"></bdl-chartjs-time>


#### Saturace hemoglobinu kyslíkem [%]
<bdl-chartjs-time id="id12" width="360" height="240" fromid="idfmi" labels="Arteriální sO2, Venózní sO2, Smíšené sO2" initialdata="" refindex="6" refvalues="3" convertors="x*100;x*100;x*100"></bdl-chartjs-time>

#### Hodnoty pH krve [-]
<bdl-chartjs-time id="id12" width="360" height="240" fromid="idfmi" labels="Arteriální pH, Venózní pH, Smíšené pH" initialdata="" refindex="9" refvalues="3"></bdl-chartjs-time>

</div>
<div class="w3-third">

#### Průtokové veličiny [l/min]
<bdl-chartjs-time id="id12" width="360" height="240" fromid="idfmi" labels="Minutový srdeční výdej, Minutová ventilace, Alveolární ventilace, Průtok krve ECMO, Sweep" initialdata="" refindex="12" refvalues="5" convertors="x*60000;x*60000;x*60000;x*60000;x*60000"></bdl-chartjs-time>

#### Krevní tlak [mmHg]
<bdl-chartjs-time id="id12" width="360" height="240" fromid="idfmi" labels="Střední arteriální tlak, Venózní tlak" initialdata="" refindex="17" refvalues="2" convertors="x*0.00750061683; x*0.00750061683"></bdl-chartjs-time>

### Koncentrace HCO3 [mmol/l]
<bdl-chartjs-time id="id12" width="360" height="240" fromid="idfmi" labels="Arteriální HCO3, Venózní HCO3, Smíšené HCO3" initialdata="" refindex="19" refvalues="3" convertors=""></bdl-chartjs-time>

</div></div>


