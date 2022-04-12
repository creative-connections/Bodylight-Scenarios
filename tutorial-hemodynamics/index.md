# Introduction

**Hemodynamics model simulation**

Source code of the modeli was created in __Modelica language__, using  __physiolibrary__.
Model of cardiovascular dynamics was implemented by Fernendes model, 2013.

Press buttons to start/stop/step/reset simulation:
<bdl-fmi id="idfmi" mode="continuous" src="Bodylight_tutorial_PulsatileCirculation_Fernandes2013.js" fminame="Bodylight_tutorial_PulsatileCirculation_Fernandes2013" tolerance="0.000001" starttime="0" fstepsize="0.01" guid="{6a58e4de-2642-4c2c-a4e4-35dd447339a7}" valuereferences="637534284,637534252,637534319" valuelabels="aorta.q_in.pressure,leftVentricle.q_in.pressure,arteries.q_in.pressure" inputs="id1,16777296,1,60,t" inputlabels="heartRate.k"></bdl-fmi>



Change the slider value. When released - it is sent to model and simulation is recalculated accordingly:
<bdl-range id="id1" title="heart rate" min="30" max="180" default="60" step="1">
</bdl-range>



<bdl-chartjs-time width="600" height="400" fromid="idfmi" labels="Pressure in aorta [mmHg], left ventricle pressure [mmHg], arterial presssure [mmHg]" initialdata="" refindex="0" refvalues="3"></bdl-chartjs-time>



