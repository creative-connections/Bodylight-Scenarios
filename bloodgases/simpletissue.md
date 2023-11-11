# Model 2210 - simple tissue

<bdl-fmi id="idfmi" mode="onestep" src="Simplest_Test_TestVentilation_0withoutStream.js" fminame="Simplest_Test_TestVentilation_0withoutStream" tolerance="0.000001" starttime="0" fstepsize="0.1" guid="{5272491b-ab22-4919-8728-5925ff9848a7}" valuereferences="905969745,905969768,905969744,905969767,905969674" valuelabels="alvEq_2units_with_shunts_and_mixing.artBlood.pO2,simplestTissue.pO2_v,alvEq_2units_with_shunts_and_mixing.artBlood.bloodctO2content.pCO2,simplestTissue.pCO2_v,CardiacOutput.y" inputs="id1,16777270,0.0000833,1,t" inputlabels="CardiacOutput.k"></bdl-fmi>

<bdl-chartjs-time width="300" height="200" fromid="idfmi" labels="pO2_a, pO2_v" initialdata="" refindex="0" refvalues="2"></bdl-chartjs-time>
<bdl-chartjs-time width="300" height="200" fromid="idfmi" labels="pCO2_a, pCO2_v" initialdata="" refindex="2" refvalues="2"></bdl-chartjs-time>
<bdl-chartjs-time width="300" height="200" fromid="idfmi" labels="cardiacoutput" initialdata="" refindex="4" refvalues="1"></bdl-chartjs-time>
<bdl-range id="id1" title="cardiacoutput" min="0.1" max="10" default="1" step="0.1"></bdl-range>
