# Introduction

Markdown with Bodylight Components v.2
Alveolární ventilace
<bdl-fmi id="idfmi" mode="oneshot" stoptime="140" src="RespirationModeling_Tests_TestAlvVent.js" fminame="RespirationModeling_Tests_TestAlvVent" tolerance="0.000001" starttime="0" fstepsize="1" fpslimit="60" guid="{dda7cfc6-3986-4a16-81c2-b9cafa4a0896}" valuereferences="905969669,905969670,905969671,905969672" valuelabels="alvVent.VAi_BTPS,alvVent.pAO2,alvVent.pACO2,alvVent.VAe_BTPS" inputs="VAi,16777219,1e-6,60,t;pressure,16777220,1,1,t;temperature,16777221,1,1,t;FiO2d,16777222,1,1,t;FiCO2d,16777223,1,1,t;MO2,16777225,1,1,t;MCO2,16777224,1,1,t" inputlabels="VAi.k,pressure.k,temperature.k,FiO2d.k,FiCO2d.k,MO2.k,MCO2.k"></bdl-fmi>


<bdl-range id="VAi" title="Alveolární ventilace" min="2000" max="8000" default="0" step="100"></bdl-range>

<bdl-chartjs-xy width="600" height="200" fromid="idfmi" labels="BTPS, pAO2, pACO2" initialdata="" refindex="0" refvalues="3"></bdl-chartjs-xy>

<bdl-chartjs-time width="600" height="200" fromid="idfmi" labels="BTPS, pAO2, pACO2" initialdata="" refindex="0" refvalues="3"></bdl-chartjs-time>
