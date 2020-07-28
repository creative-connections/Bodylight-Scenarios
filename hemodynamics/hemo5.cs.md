<div class="w3-row">
<div class="w3-col s12 l4">

## Srdeční cyklus 5 Wiggersův diagram

Wiggersův diagram spojuje některé předchozí průběhy proměnných 
 během srdečního cyklu do jednoho diagramu.

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
         valuereferences="33554435,33554438,637534265,637534241,637534290,16777312,637534466,637534294,637534268"
         valuelabels="Left Ventricle Volume,Right Ventricle Volume,Pressure in Left Ventricle,Pressure in Aorta, Pressure in Left Atria, Heart Rate, LA elastance,MV open, AOV open"         
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
segmentcond="7,eq,0;8,eq,1;8,eq,0;7,eq,1;6,gt,100000" 
simsegments="70;120;175;260;380"></bdl-animate-control> 

<bdl-animate-gif fromid="id5" src="hemodynamics/heart.gif" width=400></bdl-animate-gif>
</div>
<div class="w3-col s12 l8">
Wiggersův diagram:
<bdl-ecg 
  id="id11" 
  fromid="id5"
  labels="EKG svod I"
  ylabel="EKG (mV)"
  width="300"
  height="50"
  maxdata="45"></bdl-ecg>      
<bdl-chartjs-time
   id="id11"  
   width="300"  
   height="130"  
   fromid="id4"  
   labels="tlak v levé komoře, tlak v aortě, tlak v levé síni" 
   refindex="2"  refvalues="3"
   ylabel="tlak (mmHg)"
   xlabel="čas (s)"
   convertors="0.00750062,1;0.00750062,1;0.00750062,1"
   sectionid="id5" 
   maxdata="400"></bdl-chartjs-time>  
<bdl-chartjs-time
   id="id11"  
   width="300"  
   height="80"  
   fromid="id4"  
   labels="Objem levé komory" 
   refindex="0"  refvalues="1"
   ylabel="objem (ml)"
   xlabel="čas (s)"
   convertors="1000000,1"
   sectionid="id5" 
   maxdata="400"></bdl-chartjs-time>

  
</div>
</div>


