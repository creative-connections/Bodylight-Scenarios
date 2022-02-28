<div class="w3-row">
<div class="w3-half">


<bdl-fmi id="idfmi" src="BurkhoffFMI.js" fminame="Cardiovascular_Model_Burkhoff_HemodynamicsBurkhoff_0shallow" tolerance="0.000001" starttime="0" guid="{b5629132-3ba6-4153-87c2-f3ff108e1920}" valuereferences="33554435,637534265,637534241,637534290,16777312,637534466,637534294,637534268,33554438,33554436,33554437,637534348,637534374" valuelabels="Left Ventricle Volume,Pressure in Left Ventricle,Pressure in Aorta, Pressure in Left Atria, Heart Rate, LA elastance,MV open, AOV open,RV.volume,LA.volume,RA.volume,TV.open,PV.open" controlid="id5" fstepsize="0.002" showcontrols="false"></bdl-fmi>
         
Stiskněte tlačítko pro simulaci podle fází srdečního cyklu:

<bdl-animate-control id="id5" fromid="idfmi" speedfactor="20" segments="3;5;14;17;29" segmentlabels="4b plnění atriální systola;1 systola komor - isovolumická kontrakce;2 systola komor - ejekce;3 isovolumická relaxace;4a plnění" segmentcond="6,eq,0;7,eq,1;7,eq,0;6,eq,1;5,gt,100000" simsegments="70;120;175;260;380"></bdl-animate-control> 

<bdl-animate-adobe src="Faze_srdce.js" width="600" height="600" name="Faze_srdce" fromid="id5" fmuid="idfmi"></bdl-animate-adobe>


<bdl-bind2a findex="10" aname="children.0.AtriumRight_anim" amin="0" amax="99"></bdl-bind2a>
<bdl-bind2a findex="6" aname="children.0.ValveMV_anim" amin="99" amax="0" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="7" aname="children.0.ValveAOV_anim" amin="0" amax="99" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="12" aname="children.0.ValvePV_anim" amin="0" amax="99" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="11" aname="children.0.ValveTV_anim" amin="99" amax="0" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="9" aname="children.0.AtriumLeft_anim" amin="0" amax="99"></bdl-bind2a>
<bdl-bind2a findex="0" aname="children.0.ventricles.ventriclesTotal.VentricleLeft_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="8" aname="children.0.ventricles.ventriclesTotal.children.0.VentricleRight_anim" amin="99" amax="0"></bdl-bind2a>


</div>
<div class="w3-half">

Objem krve v levé komoře:

<bdl-chartjs-time id="id11" width="500" height="200" fromid="idfmi" labels="Left Ventricle Volume" refindex="0" refvalues="1" ylabel="objem (ml)" xlabel="čas (s)" convertors="1000000,1" throttle="50"></bdl-chartjs-time>
  
<bdl-quiz question="Co popisuje nejlépe chování otevírání a zavírání chlopní během fází srdečního cyklu?" answers="chlopně se otevírají/zavírají v obou komorách současně|Chlopně se komorách otevírají-zavírají" correctoptions="true|false|false" explanations="Během jednoho srdečního cyklu se vypudí asi 77 ml (151ml - 74ml) krve.|   Za minutu srdce vypudí asi 5 l krve, ale během jedné fáze 77 ml.|   151 ml je maximální náplň krve v levé komoře, ale vypudí se 'jen' 77 ml.">
</bdl-quiz> 

</div>
</div>

