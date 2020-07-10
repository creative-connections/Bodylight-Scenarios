<div class="w3-row">
<div class="w3-col s12 l4">

## Srdeční cyklus 3 objem v levé komoře

Objemy během srdečního cyklu:


- (1) isovolumická kontrakce 
    - objem v obou komorách se nemění       
- (2) ejekce
    - objem v obou komorách se snižuje
- (3) isovolumická relaxace 
    - objem v obou komorách se nemění
- (4) plnění - krev plní síň a komoru
    - oběm krve v komorách se postupně zvyšuje
    - (4a) plnění - diastola atrií (síní)
    - (4b) plnění - systola atrií (síní) - rychlost  

</div>
<div class="w3-col s12 l4">

<bdl-fmi id="id4" src="hemodynamics/BurkhoffFMI.js" 
         fminame="Cardiovascular_Model_Burkhoff_HemodynamicsBurkhoff_0shallow"
         tolerance="0.000001" starttime="0" guid="{b5629132-3ba6-4153-87c2-f3ff108e1920}"
         valuereferences="33554435,637534265,637534241,637534290,16777312,637534466,637534294,637534268"
         valuelabels="Left Ventricle Volume,Pressure in Left Ventricle,Pressure in Aorta, Pressure in Left Atria, Heart Rate, LA elastance,MV open, AOV open"         
         controlid="id5"
         fstepsize="0.002"
         showcontrols="false"></bdl-fmi>
         
Stiskněte tlačítko pro animaci systoly a diastoly:

<bdl-animate-control 
id="id5" 
fromid="id4" 
speedfactor="20" 
segments="3;5;14;17;29" 
segmentlabels="4b plnění atriální systola;1 systola komor - isovolumická kontrakce;2 systola komor - ejekce;3 isovolumická relaxace;4a plnění" 
segmentcond="6,eq,0;7,eq,1;7,eq,0;6,eq,1;5,gt,100000" 
simsegments="70;120;175;260;380"></bdl-animate-control> 

<bdl-animate-gif fromid="id5" src="hemodynamics/heart.gif" width=400></bdl-animate-gif>
</div>
<div class="w3-col s12 l4">
Objem krve v levé komoře:

<bdl-chartjs-time
   id="id11"  
   width="400"  
   height="300"  
   fromid="id4"  
   labels="Left Ventricle Volume" refindex="0"  refvalues="1"></bdl-chartjs-time> | 
  
</div>
</div>

<bdl-quiz question="Z grafu odečtěte kolik krve se vypudí z levé komory během ejekční fáze:"
  answers="asi 80 ml|
           asi 5 l|
           asi 150 ml"
  correctoptions="true|false|false"           
  explanations="Během jednoho srdečního cyklu se vypudí asi 80 ml krve.|
  Za minutu srdce vypudí asi 5 l krve, ale během jedné fáze 80 ml.|
  150 ml je maximální náplň krve v levé komoře, ale vypudí se 'jen' 80 ml.">
</bdl-quiz> 

