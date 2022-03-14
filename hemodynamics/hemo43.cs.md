<div class="w3-row">
<div class="w3-col s12 l4">

<bdl-fmi id="id4" mode="" src="BurkhoffFMI.js" fminame="Cardiovascular_Model_Burkhoff_HemodynamicsBurkhoff_0shallow" tolerance="0.000001" starttime="0" fstepsize="0.02" guid="{b5629132-3ba6-4153-87c2-f3ff108e1920}" valuereferences="33554435,637534265,637534241,637534290,16777312,637534466,637534294,637534268,637534345,637534371,637534323,33554438,33554436,33554437,637534348,637534374,16777310,16777306,16777302,16777298" valuelabels="Left Ventricle Volume,Pressure in Left Ventricle,Pressure in Aorta, Pressure in Left Atria, Heart Rate, LA elastance,MV open, AOV open,Pressure in Right Ventricle,Pressure in Right Arterie,Pressure in Right Atria,Right Ventricle Volume,LA.volume,RA.volume,TV.open,PV.open,LVElastance.Ees,LAElastance.Ees,RVElastance.Ees,RAElastance.Ees" inputs="id1,16777312,1,60,t;idlve,16777310,2.053e+8,100,t;idlve,16777306,3.333e+7,100,t;idlve,16777302,5.066e+7,100,t;idlve,16777298,2.666e+7,100,t" inputlabels="heartRate.k,LVElastance.Ees,LAElastance.Ees,RVElastance.Ees,RAElastance.Ees"></bdl-fmi>


         
Stiskněte tlačítko pro animaci systoly a diastoly:

<bdl-animate-control id="id5" fromid="id4" speedfactor="20" segments="3;5;14;17;29" allowcontinuous="true" segmentlabels="4b plnění atriální systola;1 systola komor - isovolumická kontrakce;2 systola komor - ejekce;3 isovolumická relaxace;4a plnění" segmentcond="6,eq,0;7,eq,1;7,eq,0;6,eq,1;5,gt,100000" simsegments="7;12;17;26;38"></bdl-animate-control> 
<div style="width:200px">
<bdl-animate-adobe src="Faze_srdce.js" width="600" height="600" name="Faze_srdce" fromid="id5" fmuid="id4" responsive="true"></bdl-animate-adobe>
<bdl-bind2a findex="13" aname="children.0.AtriumRight_anim" amin="0" amax="99"></bdl-bind2a>
<bdl-bind2a findex="6" aname="children.0.ValveMV_anim" amin="99" amax="0" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="7" aname="children.0.ValveAOV_anim" amin="0" amax="99" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="15" aname="children.0.ValvePV_anim" amin="0" amax="99" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="14" aname="children.0.ValveTV_anim" amin="99" amax="0" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="12" aname="children.0.AtriumLeft_anim" amin="0" amax="99"></bdl-bind2a>
<bdl-bind2a findex="0" aname="children.0.ventricles.ventriclesTotal.VentricleLeft_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="11" aname="children.0.ventricles.ventriclesTotal.children.0.VentricleRight_anim" amin="99" amax="0"></bdl-bind2a>

Srdeční frekvence <bdl-range id="id1" title="(1/min)" min="40" max="200" default="60" step="1"></bdl-range>
Inotropie <bdl-range id="idlve" title="(%)" min="50" max="200" default="100" step="0.1"></bdl-range>


</div>


</div>
<div class="w3-col s12 l4">
Tlaky v levé komoře
<bdl-chartjs-time id="id11" width="400" height="300" fromid="id4" maxdata="96" labels="Left Ventricle Pressure, Aorta Pressure, Pressure in Left Atria" refindex="1" refvalues="3" ylabel="tlak (mmHg)" xlabel="čas (s)" convertors="0.00750062,1;0.00750062,1;0.00750062,1" throttle="0"></bdl-chartjs-time>
     
Objem krve v levé komoře:
<bdl-chartjs-time id="id11" width="400" height="300" fromid="id4" maxdata="96" labels="Left Ventricle Volume" refindex="0" refvalues="1" ylabel="objem (ml)" xlabel="čas (s)" convertors="1000000,1" throttle="0"></bdl-chartjs-time>
  
</div>
<div class="w3-col s12 l4">
PV diagram:
<bdl-chartjs-xy id="id10" width="400" height="600" fromid="id4" labels="tlak, objem" initialdata="" refindex="0" refvalues="2" maxdata="1024"></bdl-chartjs-xy>

</div>
</div>


