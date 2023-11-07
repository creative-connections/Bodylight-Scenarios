<div class="w3-row">
<div class="w3-col l4">

<bdl-fmi id="id4" mode="" src="BurkhoffFMI.js" fminame="Cardiovascular_Model_Burkhoff_HemodynamicsBurkhoff_0shallow" tolerance="0.000001" starttime="0" fstepsize="0.02" fpslimit="5" guid="{b5629132-3ba6-4153-87c2-f3ff108e1920}" valuereferences="33554435,637534265,637534241,637534290,16777312,637534466,637534294,637534268,637534345,637534371,637534323,33554438,33554436,33554437,637534348,637534374,16777310,16777306,16777302,16777298" valuelabels="Left Ventricle Volume,Pressure in Left Ventricle,Pressure in Aorta, Pressure in Left Atria, Heart Rate, LA elastance,MV open, AOV open,Pressure in Right Ventricle,Pressure in Right Arterie,Pressure in Right Atria,Right Ventricle Volume,LA.volume,RA.volume,TV.open,PV.open,LVElastance.Ees,LAElastance.Ees,RVElastance.Ees,RAElastance.Ees" inputs="id1,16777312,1,60,t;idlve,16777310,2.053e+8,100,t;idlve,16777306,3.333e+7,100,t;idlve,16777302,5.066e+7,100,t;idlve,16777298,2.666e+7,100,t" inputlabels="heartRate.k,LVElastance.Ees,LAElastance.Ees,RVElastance.Ees,RAElastance.Ees" controlid="id5" showcontrols="false"></bdl-fmi>

<bdl-animate-control id="id5" fromid="id4" speedfactor="20" segments="3;5;14;17;29" segmentlabels="4b plnění-atr.systola;1 systola-isovolumická;2 systola-ejekce;3 isovol. relaxace;4a relaxace-plnění" segmentcond="6,eq,0;7,eq,1;7,eq,0;6,eq,1;5,gt,100000" simsegments="70;120;175;260;380" allowcontinuous="true"></bdl-animate-control>
<div style="width:100px">
<!--bdl-animate-adobe src="Faze_srdce.js" width="150" height="150" name="Faze_srdce" fromid="id5" fmuid="id4" responsive="true"></bdl-animate-adobe>
<bdl-bind2a findex="13" aname="children.0.AtriumRight_anim" amin="0" amax="99"></bdl-bind2a>
<bdl-bind2a findex="6" aname="children.0.ValveMV_anim" amin="99" amax="0" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="7" aname="children.0.ValveAOV_anim" amin="0" amax="99" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="15" aname="children.0.ValvePV_anim" amin="0" amax="99" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="14" aname="children.0.ValveTV_anim" amin="99" amax="0" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="12" aname="children.0.AtriumLeft_anim" amin="0" amax="99"></bdl-bind2a>
<bdl-bind2a findex="0" aname="children.0.ventricles.ventriclesTotal.VentricleLeft_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="11" aname="children.0.ventricles.ventriclesTotal.children.0.VentricleRight_anim" amin="99" amax="0"></bdl-bind2a-->
</div>
Srdeční frekvence <bdl-range id="id1" title="(1/min)" min="40" max="200" default="60" step="1"></bdl-range><br/>
Inotropie <bdl-range id="idlve" title="(%)" min="50" max="200" default="100" step="0.1"></bdl-range><br/>
aplikovat pozitivní inotropní agent: <bdl-buttonparams title="Digoxin 0.125mg" ids="idlve" values="120"></bdl-buttonparams><br/>
aplikovat negativní inotropní agent: <bdl-buttonparams title="Nifedipin 20mg" ids="idlve" values="70"></bdl-buttonparams><br/>
</div>
<div class="w3-col l4">
<!--bdl-chartjs-time id="id11" width="400" height="150" fromid="id4" maxdata="192" labels="Left Ventricle Pressure, Aorta Pressure, Pressure in Left Atria" refindex="1" refvalues="3" ylabel="tlak (mmHg)" xlabel="čas (s)" convertors="0.00750062,1;0.00750062,1;0.00750062,1" throttle="200"></bdl-chartjs-time-->
<bdl-chartjs-time id="id11a" width="400" height="5" fromid="id4" maxdata="192" labels="Left Ventricle, Aorta, Left Atria" refindex="1" refvalues="3" ylabel="pressure (mmHg)" xlabel="time (s)" convertors="0.00750062,1;0.00750062,1;0.00750062,1" babylonjs="textureGround" canvasobj="textureContext"></bdl-chartjs-time>
<bdl-sound-on-increase thresholdvalue="1e-6" fromid="id4" refindex="7" freq="440" volume="0.2"></bdl-sound-on-increase>
<!--bdl-chartjs-time id="id12" width="400" height="150" fromid="id4" maxdata="192" labels="Left Ventricle Volume" refindex="0" refvalues="1" ylabel="objem (ml)" xlabel="čas (s)" convertors="1000000,1" throttle="200"></bdl-chartjs-time-->
<bdl-chartjs-xy id="id10" width="400" height="300" fromid="id4" xlabel="volume (m3)" ylabel="pressure (Pa)" labels="P,PV in left ventricle" initialdata="" refindex="0" refvalues="2" maxdata="1024" convertors="0.00750062,1;1000000,1" babylonjs="textureGround2" canvasobj="textureContext2"></bdl-chartjs-xy>

</div>
<div class="w3-col l4">

</div>
</div>


