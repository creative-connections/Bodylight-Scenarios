<div class="w3-row">
<div class="w3-col s12 l4">

## Srdeční cyklus a defekty septa

Defekt septa - nenulový odpor mezi pravo a levou síní a pravou a levou komorou.
 
Shrnutí srdečního cyklu:
- (1) isovolumic
ká kontrakce 
- (2) ejekce
- (3) isovolumická relaxace 
- (4) plnění - krev plní síň a komoru    
    - (4a) plnění - diastola atrií 
    - (4b) plnění - systola atrií
    
Defekt septa v pravé síni(0=norm):<bdl-range id="id1" min="0" max="2000000" step="100000" default="0"></bdl-range>      
Defekt septa v pravé komoře(0=norm):<bdl-range id="id2" min="0" max="2000000" step="100000" default="0"></bdl-range>

<bdl-fmi id="id4" src="Cardiovascular_Model_Burkhoff_Pathology_HemodynamicsWithAtriumVentricleSeptalDeffects.js" 
         fminame="Cardiovascular_Model_Burkhoff_Pathology_HemodynamicsWithAtriumVentricleSeptalDeffects"
         tolerance="0.000001" starttime="0" guid="{9e06b025-e9b9-4b06-b532-f67da6a1f6cd}"
         valuereferences="33554435,637534265,637534241,637534290,16777312,637534466,637534294,637534268,33554438,637534345,33554436,637534290,33554437,637534323"
         valuelabels="Left Ventricle Volume,Pressure in Left Ventricle,Pressure in Aorta, Pressure in Left Atria, Heart Rate, LA elastance,MV open, AOV open, RV volume,RV pressure,LA volume, LA pressure, RA volume,RA pressure"         
         controlid="id5"
         fstepsize="0.004"
         inputs="id1,16777327,1,1;id2,16777329,1,1">
         showcontrols="false"></bdl-fmi>

Stiskněte tlačítko pro animaci:

<bdl-animate-control 
id="id5" 
fromid="id4"  
segments="3;5;14;17;29" 
allowcontinuous="true"
segmentlabels="4b plnění atriální systola;1 systola komor - isovolumická kontrakce;2 systola komor - ejekce;3 isovolumická relaxace;4a plnění" 
segmentcond="6,eq,0;7,eq,1;7,eq,0;6,eq,1;5,gt,100000" 
simsegments="70;120;175;260;380"></bdl-animate-control>

<bdl-animate-gif fromid="id5" src="heart.gif" width=300></bdl-animate-gif>
</div>
<div class="w3-col s12 l4">
PV diagram pravé síně:
<bdl-chartjs-xy 
  id="id10" 
  fromid="id4" 
  labels="tlak v levé komoře, objem v levé komoře"    
  refindex="12" 
  maxdata="256"
  width="100"
  height="60"
  responsive="true"
  refvalues="2"></bdl-chartjs-xy>

PV diagram pravé komory:
<bdl-chartjs-xy 
  id="id10" 
  fromid="id4" 
  labels="tlak v levé komoře, objem v levé komoře"    
  refindex="8" 
  maxdata="256"
  width="100"
  height="60"
  responsive="true"
  refvalues="2"></bdl-chartjs-xy>
</div>
<div class="w3-col s12 l4">
PV diagram levé síně:
<bdl-chartjs-xy 
  id="id10" 
  fromid="id4" 
  labels="tlak v levé komoře, objem v levé komoře"    
  refindex="10" 
  maxdata="256"
  width="100"
  height="60"
  responsive="true"
  refvalues="2"></bdl-chartjs-xy>
  
PV diagram levé komory:
<bdl-chartjs-xy 
  id="id10" 
  fromid="id4" 
  labels="tlak v levé komoře, objem v levé komoře"    
  refindex="0" 
  maxdata="256"
  width="100"
  height="60"
  responsive="true"
  refvalues="2"></bdl-chartjs-xy>
  
</div>
</div>


