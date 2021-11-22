<div class="w3-row">
<div class="w3-third">

# grafy

<p align="center"> <b>Plicní kapiláry v alveolech</b></p>

<bdl-chartjs-barplot fromid="idfmi"  refindex="3"  extremelimits="0,1"  normallimits="0,1" responsive="true" labels="   SAT" initialdata="0.97"></bdl-chartjs-barplot> 
<bdl-chartjs-barplot fromid="idfmi"  refindex="2"  extremelimits="0,150" labels="   pO2" normallimits="90,110"  initialdata="94.01"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>
<bdl-chartjs-barplot  fromid="idfmi"  refindex="0"  extremelimits="0,75" labels="pCO2" normallimits="35,45"  initialdata="40"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>
<bdl-chartjs-barplot fromid="idfmi"  refindex="1"  extremelimits="7,8" labels="     pH" normallimits="7.38,7.42"  initialdata="7.4"  convertors="1,1" responsive="true"></bdl-chartjs-barplot>



<p align="center"> <b>Venózní krev ve tkáních</b></p>

<bdl-chartjs-barplot fromid="idfmi"  refindex="10"  extremelimits="0,1"  normallimits="0,1" responsive="true" labels="   SAT" initialdata="0.97"></bdl-chartjs-barplot> 
<bdl-chartjs-barplot fromid="idfmi"  refindex="9"  extremelimits="0,150" labels="   pO2" normallimits="30,40"  initialdata="94.01"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>
<bdl-chartjs-barplot  fromid="idfmi"  refindex="7"  extremelimits="0,75" labels="pCO2" normallimits="40,55"  initialdata="40"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>
<bdl-chartjs-barplot fromid="idfmi"  refindex="8"  extremelimits="7,8" labels="     pH" normallimits="7.3,7.4"  initialdata="7.4"  convertors="1,1" responsive="true"></bdl-chartjs-barplot>




</div>
<div class="w3-rest w3-right-align">

# parametry

<bdl-fmi id="idfmi" mode="oneshot" src="BloodyMary_0BodyLight_001_Tests_BloodyMary_001.js" fminame="BloodyMary_0BodyLight_001_Tests_BloodyMary_001" tolerance="0.000001" starttime="0" fstepsize="0.01" guid="{dc327149-75f8-445a-8ebe-42b9cf44ecbd}" valuereferences="905969771,905969770,905969772,905969773,905969781,905969774,905969780,905969681,905969680,905969682,905969683,905969691,905969684,905969690,905969675,100663395,100663394,100663333,905969702,100663396,100663398,100663397,100663399,905969705,905969734,905969718,905969747,905969717,905969746,905969718,905969747,905969723,905969746,905969716,905969745,905969719,905969748,905969727,905969756,905969720,905969749,905969726,905969755,16777270,16777271,16777272,16777273,234881082,16777266,16777265,16777264,16777267,16777221,16777222" valuelabels="alvEq_2units_with_shunts_and_mixing1.PaCO2,alvEq_2units_with_shunts_and_mixing1.pHa,alvEq_2units_with_shunts_and_mixing1.PaO2,alvEq_2units_with_shunts_and_mixing1.sO2a,alvEq_2units_with_shunts_and_mixing1.HCO3a,simplestTissue.O2a,simplestTissue.CO2a,simplestTissue.pCO2_v,simplestTissue.pH_v,simplestTissue.pO2_v,simplestTissue.sO2_v,simplestTissue.cHCO3_v,simplestTissue.O2v,simplestTissue.CO2v,alvEq_2units_with_shunts_and_mixing1.Q,alvEq_2units_with_shunts_and_mixing1.Qpulm,alvEq_2units_with_shunts_and_mixing1.Qsh,alvEq_2units_with_shunts_and_mixing1.VAi,alvEq_2units_with_shunts_and_mixing1.VAe,alvEq_2units_with_shunts_and_mixing1.Q_alv1,alvEq_2units_with_shunts_and_mixing1.Q_alv2,alvEq_2units_with_shunts_and_mixing1.VAi_alv1,alvEq_2units_with_shunts_and_mixing1.VAi_alv2,alvEq_2units_with_shunts_and_mixing1.alvEq1.VAe,alvEq_2units_with_shunts_and_mixing1.alvEq2.VAe,alvEq_2units_with_shunts_and_mixing1.alvEq1.PAO2,alvEq_2units_with_shunts_and_mixing1.alvEq2.PAO2,alvEq_2units_with_shunts_and_mixing1.alvEq1.PACO2,alvEq_2units_with_shunts_and_mixing1.alvEq2.PACO2,alvEq_2units_with_shunts_and_mixing1.alvEq1.bloodctO2content.pO2,alvEq_2units_with_shunts_and_mixing1.alvEq2.bloodctO2content.pO2,alvEq_2units_with_shunts_and_mixing1.alvEq1.bloodctCO2content.pCO2,alvEq_2units_with_shunts_and_mixing1.alvEq2.bloodctO2content.pCO2,alvEq_2units_with_shunts_and_mixing1.alvEq1.pH,alvEq_2units_with_shunts_and_mixing1.alvEq2.pH,alvEq_2units_with_shunts_and_mixing1.alvEq1.sO2,alvEq_2units_with_shunts_and_mixing1.alvEq2.sO2,alvEq_2units_with_shunts_and_mixing1.alvEq1.cHCO3,alvEq_2units_with_shunts_and_mixing1.alvEq2.cHCO3,alvEq_2units_with_shunts_and_mixing1.alvEq1.ctO2,alvEq_2units_with_shunts_and_mixing1.alvEq2.ctO2,alvEq_2units_with_shunts_and_mixing1.alvEq1.ctCO2,alvEq_2units_with_shunts_and_mixing1.alvEq2.ctCO2,VT.k,vAi.fd,Fsh.k,Fq1.k,FAi1.k,CardiacOutput.k,modelSettings.FiO2,modelSettings.FiCO2_start" inputs="id1,16777227,1,1,t;id2,16777275,1,0.00750061683,t;id3,16777269,1,1,272.15,t;id4,16777268,1,1,t;id5,16777270,1,1,t;id6,16777271,1,1,t;id7,16777272,1,1000000,t;id8,16777273,1,1,t;id9,234881082,1,1,t;id10,16777266,1,1,t;id11,16777265,1,1,t;id12,16777264,1,1,t;id13,16777267,1,1,t;id14,16777221,1,1,t;id15,16777222,1,1,t" inputlabels="modelSettings.ctHb,PB.k,bodyTemperature.k,BEox.k,VO2_ml_min.k,RQ.k,VD.k,VT.k,vAi.fd,Fsh.k,Fq1.k,FAi1.k,CardiacOutput.k,modelSettings.FiO2,modelSettings.FiCO2_start"></bdl-fmi>

<bdl-range id="id1" title="koncentrace Hb [mmol/l]" min="4.4" max="16" default="8.4" step="0.2" maxlength="4"></bdl-range>

<bdl-range id="id2" title="atmosférický tlak [mmHg]" min="380" max="3040" default="760" step="95" maxlength="4"></bdl-range>

**Atmosférický tlak na různých místech podle nadmořské výšky:**

<bdl-buttonparams title="Mont Blanc (4807 m.n.m.)" ids="id2" values="380"></bdl-buttonparams>
<bdl-buttonparams title="Sněžka (1603 m.n.m.)" ids="id2" values="642"></bdl-buttonparams>
<bdl-buttonparams title="norma ( 0 m.n.m.)" ids="id2" values="760"></bdl-buttonparams>

**Tlak při potápění pod vodou s dýchacím přístrojem:**

<bdl-buttonparams title="potápění pod vodou(1 m)" ids="id2" values="1520"></bdl-buttonparams>
<bdl-buttonparams title="potápění pod vodou(3 m)" ids="id2" values="3040"></bdl-buttonparams>

<bdl-range id="id3" title="tělesná teplota [°C]" min="35" max="42" default="37" step="0.1" maxlength="4"></bdl-range>
[index](#index.md)

</div>
</div>
