

<div class="w3-row">
<div class="w3-half">

<div class="w3-row">
<div class="w3-twothird">


<bdl-remote-value remoteurl="http://patf-lab06.lf1.cuni.cz:5000/lungsim" interval="1000" id="lungsim" inputs="rate;muscle_pressure;blend_duration;compliance;peep;resistance;run"></bdl-remote-value>
<bdl-remote-value remoteurl="http://patf-lab06.lf1.cuni.cz:5000/cardiohelp" interval="1000" id="cardiohelp" inputs="p_art;p_ven;temp;dot_v"></bdl-remote-value>
<bdl-remote-value remoteurl="http://patf-lab06.lf1.cuni.cz:5000/manequin" interval="1000" id="manequin"></bdl-remote-value>

![body](body.png)

<bdl-chartjs-time id="id11" width="500" height="150" fromid="lungsim" refindex="7" refvalues="1" labels="tidal volume"></bdl-chartjs-time>


</div>
<div class="w3-third w3-tiny">

**Human simulator <bdl-checkbox id="run" default="true" titlemin="STOPPED" titlemax="RUNNING"></bdl-checkbox><br/>**
<!--bdl-range id="rate" min="0" max="100" default="7" step="0.5" title="breath rate [1/min]"></bdl-range><br/-->
<div class="w3-hide">
<bdl-range id="blend_duration" min="1" max="10" default="4" step="1" title="how many breaths to change value [1]"></bdl-range><br/>
<bdl-range id="compliance" min="0.5" max="250" default="50" step="0.5" title="Compliance [ml/cmH2O]"></bdl-range><br/>
<bdl-range id="muscle_pressure" min="0" max="100" default="11" title="Muscle Pressure [cmH2O]"></bdl-range><br/>
<bdl-range id="peep" min="4" max="8" default="5" title="Initial pressure [cmH2O]"></bdl-range><br/>
<bdl-range id="resistance" min="8" max="150" default="35" title="Resistance [cmH2O/(l.s)]"></bdl-range><br/>
</div>

<bdl-buttonparams title="Normal breathing" ids="blend_duration,compliance,muscle_pressure,peep,resistance,rate" values="4,50,11,5,35,17"></bdl-buttonparams>

<bdl-buttonparams title="Type 1 hypoxenic" ids="blend_duration,compliance,muscle_pressure,peep,resistance,rate" values="4,30,14,5,39,30"></bdl-buttonparams>

<bdl-buttonparams title="Type 2 hypocapnic" ids="blend_duration,compliance,muscle_pressure,peep,resistance,rate" values="4,20,8,5,40,40"></bdl-buttonparams>


</div>
</div>

<div class="w3-row">
<div class="w3-third">

## **Patient state**

<bdl-buttonparams title="Set physiologic values" ids="id1,id2,id3,rate,id5,id6,id8,id9" values="0.02,1.25,1.25,17,500,150,0,0"></bdl-buttonparams>

### Respiration

<!--bdl-range id="id4" title="Breath rate [1/min]" min="0" max="40" default="17" step="1" maxlength="8"></bdl-range-->
<bdl-range id="rate" min="0" max="100" default="17" step="0.5" title="breath rate [1/min]"></bdl-range><br/>
<bdl-range id="id5" title="Breath volume [ml]" min="100" max="2500" default="500" step="1" maxlength="8" fromid="lungsim" refindex="7"></bdl-range>

</div>
<div class="w3-third">

### Oxygenation params

<bdl-range id="id6" title="Death space volume [ml]" min="0" max="2500" default="150" step="10" maxlength="8"></bdl-range>

<bdl-range id="id1" title="Fraction of P-L shunts [0-1]" min="0" max="1" default="0.02" step="0.02" maxlength="8"></bdl-range>id

<bdl-buttonparams title="Set respiration failure" ids="id1,rate,id5,id6" values="0.2,17,500,300"></bdl-buttonparams>
</div>
<div class="w3-third">

### Heart params
<bdl-range id="id2" title="Power of left heart (StarlingLeft)" min="0" max="1.5" default="1.25" step="0.125" maxlength="8"></bdl-range>

<bdl-range id="id3" title="Power of right heart (StarlingRight)" min="0" max="1.5" default="1.25" step="0.25" maxlength="8"></bdl-range>

<bdl-buttonparams title="Set cardiac failure" ids="id2,id3" values="0.5,0.5"></bdl-buttonparams>

</div></div>

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
<bdl-range id="temp" min="20" max="42" default="37" step="0.1" title="temp [deg C]"></bdl-range><br/>
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
</div>
</div>


<div class="w3-row">
<div class="w3-third">

<bdl-fmi id="idfmi" mode="" src="modelECMO_ECMOSimNoReg.js" fminame="modelECMO_ECMOSimNoReg" tolerance="0.000001" starttime="0" fstepsize="0.1" guid="{1dfd8846-2f82-40f8-8b34-bd76b3a3c1ea}" valuereferences="905971254,905971208,905972945,905972991,905970845,905970846,905969984,905970441,905970885,905973162,905973946,905970848,905972838,100666550,905973350,905974145,905973985,905971304,637535866,905969981,905970438,905970882,905971135" valuelabels="pO2Arteries.partialPressure,pCO2Arteries.partialPressure,pO2Veins.partialPressure,pCO2Veins.partialPressure,Tissue.chemicalSolution.bloodGases.pO2,Tissue.chemicalSolution.bloodGases.pCO2,Arteries.chemicalSolution.bloodGases.sO2,Veins.chemicalSolution.bloodGases.sO2,Tissue.chemicalSolution.bloodGases.sO2,pH_Arteries.pH,pH_Veins.pH,Tissue.chemicalSolution.bloodGases.pH,flowMeasureCardiacOutput.volumeFlowRate,MinuteVolume.SolutionFlow,flowMeasureAlveols.volumeFlowRate,flowMeasureECMO.volumeFlowRate,flowMeasureSweep.volumeFlowRate,pressureArterial.pressure,PressureVeins.pressure,Arteries.chemicalSolution.bloodGases.cHCO3,Veins.chemicalSolution.bloodGases.cHCO3,Tissue.chemicalSolution.bloodGases.cHCO3,pO2_tissue.temperature" inputs="id1,16777223,1,1,0;id2,16777224,1,7998000,0;id3,16777225,1,7998000,0;rate,16777226,1,60,0;id5,16777227,1,1000000,0;id6,16777228,1,1000000,0;id7,16777232,1,1,0;id8,16777233,1,1,0;id9,16777234,1,60000000,0;id10,16777235,1,1,0" inputlabels="Shunts,StarlingLeft,StarlingRight,RR,TV,DV,VAV,RPM,SWEEP,FiO2"></bdl-fmi>


#### Parcial pressure of blood gases [mmHg]
<bdl-chartjs-time id="id11" width="360" height="240" fromid="idfmi" labels="Arterial pO2, Arterial pCO2, Venous pO2, Venous pCO2,Mixed pO2,Mixed pCO2" initialdata="" refindex="0" refvalues="6" convertors="x*0.00750061683;x*0.00750061683;x*0.00750061683;x*0.00750061683;x*0.00750061683;x*0.00750061683"></bdl-chartjs-time>

#### $O_2$ saturation in segments[%]
<bdl-chartjs-time id="id12" width="360" height="240" fromid="idfmi" labels="Arterial sO2, Venous sO2,Mixed sO2" initialdata="" refindex="6" refvalues="3" convertors="x*100;x*100;x*100"></bdl-chartjs-time>

</div>
<div class="w3-third">


#### $p_H$ of blood in segments
<bdl-chartjs-time id="id12" width="360" height="240" fromid="idfmi" labels="Arterial pH,Venous pH,Mixed pH" initialdata="" refindex="9" refvalues="3"></bdl-chartjs-time>

#### Flow in segments [$\frac{l}{min}$]
<bdl-chartjs-time id="id12" width="360" height="240" fromid="idfmi" labels="Minute cardiac output,Minute ventilation rate, Alveolar ventilation, Flowrate of blood through ECMO, Sweep" initialdata="" refindex="12" refvalues="5" convertors="x*60000;x*60000;x*60000;x*60000;x*60000"></bdl-chartjs-time>

</div>
<div class="w3-third">


#### Blood pressure [mmHg]
<bdl-chartjs-time id="id12" width="360" height="240" fromid="idfmi" labels="Mean arterial pressure, Venous pressure" initialdata="" refindex="17" refvalues="2" convertors="x*0.00750061683; x*0.00750061683"></bdl-chartjs-time>

### Concentration of $HCO_3^-$ [$\frac{mmol}{l}$]
<bdl-chartjs-time id="id12" width="360" height="240" fromid="idfmi" labels="Arteriak HCO3,Venous HCO3,Mixed HCO3" initialdata="" refindex="19" refvalues="3" convertors=""></bdl-chartjs-time>

temperature: <bdl-value id="temperaturemodel" fromid="idfmi" refindex="22" convertor="1,1,-272.15"></bdl-value><bdl-bind2previous fromid="temperaturemodel" toid="temp"></bdl-bind2previous>

</div></div>
