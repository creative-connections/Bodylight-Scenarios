# Animation driven by model variables
Interactive editor


<bdl-fmi id="id4" mode="" src="BurkhoffFMI.js" fminame="Cardiovascular_Model_Burkhoff_HemodynamicsBurkhoff_0shallow" tolerance="0.000001" starttime="0" fstepsize="0.01" guid="{b5629132-3ba6-4153-87c2-f3ff108e1920}" valuereferences="33554435,637534265,637534241,637534290,16777312,637534466,637534294,637534268,637534345,637534371,637534323,33554438,33554436,33554437,637534348,637534374,16777310,16777306,16777302,16777298,637534265,637534261,637534260,637534266,637534261,637534267,637534268" valuelabels="Left Ventricle Volume,Pressure in Left Ventricle,Pressure in Aorta, Pressure in Left Atria, Heart Rate, LA elastance,MV open, AOV open,Pressure in Right Ventricle,Pressure in Right Arterie,Pressure in Right Atria,Right Ventricle Volume,LA.volume,RA.volume,TV.open,PV.open,LVElastance.Ees,LAElastance.Ees,RVElastance.Ees,RAElastance.Ees,AOV.q_in.pressure,AOV.q_in.q,AOV.q_out.pressure,AOV.q_out.q,AOV.volumeFlowRate,AOV.dp,AOV.open" inputs="id1,16777312,1,60,t;idlve,16777310,2.053e+8,100,t;idlve,16777306,3.333e+7,100,t;idlve,16777302,5.066e+7,100,t;idlve,16777298,2.666e+7,100,t" inputlabels="heartRate.k,LVElastance.Ees,LAElastance.Ees,RVElastance.Ees,RAElastance.Ees"></bdl-fmi>
>

<bdl-animate-control id="id5" fromid="id4" speedfactor="20" segments="3;5;14;17;29" segmentlabels="4b filling-atrial sys.;1 systole-isovolumic;2 systole-ejection;3 isovolumic relaxation;4a filling-relaxation" segmentcond="6,eq,0;7,eq,1;7,eq,0;6,eq,1;5,gt,100000" simsegments="70;120;175;260;380" allowcontinuous="true"></bdl-animate-control>


<div class="w3-row">
<div class="w3-col l2">

<div style="width:150px">
<bdl-animate-adobe src="Faze_srdce.js" width="300" height="300" name="Faze_srdce" fromid="id5" fmuid="id4" responsive="true"></bdl-animate-adobe>
<bdl-bind2a findex="13" aname="children.0.AtriumRight_anim" amin="0" amax="99"></bdl-bind2a>
<bdl-bind2a findex="6" aname="children.0.ValveMV_anim" amin="99" amax="0" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="7" aname="children.0.ValveAOV_anim" amin="0" amax="99" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="15" aname="children.0.ValvePV_anim" amin="0" amax="99" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="14" aname="children.0.ValveTV_anim" amin="99" amax="0" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="12" aname="children.0.AtriumLeft_anim" amin="0" amax="99"></bdl-bind2a>
<bdl-bind2a findex="0" aname="children.0.ventricles.ventriclesTotal.VentricleLeft_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="11" aname="children.0.ventricles.ventriclesTotal.children.0.VentricleRight_anim" amin="99" amax="0"></bdl-bind2a>
</div>

</div>
<div class="w3-col l5">

Aortic valve pressure in [mmHg]:<bdl-value fromid="id4" refindex="20" throttle="100" convertor="0.00750062,1"></bdl-value><br/>
Aortic valve pressure out [mmHg]:<bdl-value fromid="id4" refindex="22" throttle="100" convertor="0.00750062,1"></bdl-value><br/>

Aortic valve pressure diff. [mmHg]:<bdl-value fromid="id4" refindex="25" throttle="100" convertor="0.00750062,1"></bdl-value><br/>
Aortic valve open: <bdl-value fromid="id4" refindex="26" throttle="100"></bdl-value> <bdl-value-boolean valuetrue=" aortic valve open" valuefalse=" aortic valve closed" fromid="id4" refindex="7" throttle="100"></bdl-value-boolean>
<br/>
Aortic valve flow [l/min]: <bdl-value fromid="id4" refindex="21" throttle="100" convertor="1000000,60"></bdl-value><br/>

</div>
<div class="w3-col l5">

Charts as components
<bdl-chartjs-time id="id11" width="400" height="300" fromid="id4" maxdata="256" labels="Left Ventricle Pressure, Aorta Pressure, Pressure in Left Atria" refindex="1" refvalues="3" ylabel="pressure (mmHg)" xlabel="time (s)" convertors="0.00750062,1;0.00750062,1;0.00750062,1" throttle="100"></bdl-chartjs-time>


</div>
</div>
<!---->