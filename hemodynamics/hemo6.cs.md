<div class="w3-row">
<div class="w3-col s12 l4">

## Srdeční cyklus 6 PV diagram

Tlakovo objemový - Pressure Volume (PV) - diagram 
spojuje tlak a objem vybrané části srdce do jednoho grafu.

Během 1 srdečního cyklu křivka v PV diagramu opíše "kruh" viz diagram napravo:
 
Shrnutí srdečního cyklu:
- (1) isovolumická kontrakce 
- (2) ejekce
- (3) isovolumická relaxace 
- (4) plnění - krev plní síň a komoru    
    - (4a) plnění - diastola atrií 
    - (4b) plnění - systola atrií    

<bdl-fmi id="id4" src="hemodynamics/BurkhoffFMI.js" 
         fminame="Cardiovascular_Model_Burkhoff_HemodynamicsBurkhoff_0shallow"
         tolerance="0.000001" starttime="0" guid="{b5629132-3ba6-4153-87c2-f3ff108e1920}"
         valuereferences="33554435,637534265,637534241,637534290,16777312,637534466,637534294,637534268"
         valuelabels="Left Ventricle Volume,Pressure in Left Ventricle,Pressure in Aorta, Pressure in Left Atria, Heart Rate, LA elastance,MV open, AOV open"         
         controlid="id5"         
         showcontrols="false"></bdl-fmi>
</div>          
<div class="w3-col s12 l3">
Stiskněte tlačítko pro animaci:

<bdl-animate-control 
id="id5" 
fromid="id4" 
speedfactor="20" 
segments="3;5;14;17;29" 
segmentlabels="4b plnění atriální systola;1 systola komor - isovolumická kontrakce;2 systola komor - ejekce;3 isovolumická relaxace;4a plnění" 
segmentcond="6,eq,0;7,eq,1;7,eq,0;6,eq,1;5,gt,100000" 
simsegments="14;24;35;52;76"></bdl-animate-control>

<bdl-animate-gif fromid="id5" src="hemodynamics/heart.gif" width=300></bdl-animate-gif>
</div>
<div class="w3-col s12 l5">
PV diagram:
<bdl-chartjs-xy 
  id="id10" 
  fromid="id4" 
  labels="tlak v levé komoře, objem v levé komoře" 
  initialdata=";;0,0.00015;0,28000;0,0.00015;0,1400" 
  refindex="0" 
  maxdata="128"
  width="100"
  height="100"
  refvalues="2"></bdl-chartjs-xy>
  
</div>
</div>


