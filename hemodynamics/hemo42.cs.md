<div class="w3-row">
<div class="w3-col s12 l4">

## Srdeční cyklus mechanické vlastnosti v obou komorách a síních

- (1) isovolumická kontrakce 
- (2) ejekce
- (3) isovolumická relaxace 
- (4) plnění - krev plní síň a komoru
    - (4a) plnění - diastola atrií (síní)
    - (4b) plnění - systola atrií (síní)

<bdl-fmi id="id4" src="BurkhoffFMI.js" 
         fminame="Cardiovascular_Model_Burkhoff_HemodynamicsBurkhoff_0shallow"
         tolerance="0.000001" starttime="0" guid="{b5629132-3ba6-4153-87c2-f3ff108e1920}"
         valuereferences="33554435,637534265,637534241,637534290,16777312,637534466,637534294,637534268,637534345,637534371,637534323,33554438"
         valuelabels="Left Ventricle Volume,Pressure in Left Ventricle,Pressure in Aorta, Pressure in Left Atria, Heart Rate, LA elastance,MV open, AOV open,Pressure in Right Ventricle,Pressure in Right Arterie,Pressure in Right Atria,Right Ventricle Volume"         
         controlid="id5"
         fstepsize="0.02"
         showcontrols="false"></bdl-fmi>
         
Stiskněte tlačítko pro animaci systoly a diastoly:

<bdl-animate-control 
id="id5" 
fromid="id4" 
speedfactor="20" 
segments="3;5;14;17;29"
allowcontinuous="true" 
segmentlabels="4b plnění atriální systola;1 systola komor - isovolumická kontrakce;2 systola komor - ejekce;3 isovolumická relaxace;4a plnění" 
segmentcond="6,eq,0;7,eq,1;7,eq,0;6,eq,1;5,gt,100000" 
simsegments="7;12;17;26;38"></bdl-animate-control> 

<bdl-animate-gif fromid="id5" src="heart.gif" width=400></bdl-animate-gif>
</div>
<div class="w3-col s12 l4">
Tlaky v levé komoře
<bdl-chartjs-time
   id="id11"  
   width="400"  
   height="300"  
   fromid="id4" 
   maxdata="96" 
   labels="Left Ventricle Pressure, Aorta Pressure, Pressure in Left Atria" 
   refindex="1"  refvalues="3"
   ylabel="tlak (mmHg)"
     xlabel="čas (s)"
     convertors="0.00750062,1;0.00750062,1;0.00750062,1" throttle="0"></bdl-chartjs-time>
     
Objem krve v levé komoře:
<bdl-chartjs-time
   id="id11"  
   width="400"  
   height="300"  
   fromid="id4"
   maxdata="96"  
   labels="Left Ventricle Volume" refindex="0"  refvalues="1"
      ylabel="objem (ml)"
      xlabel="čas (s)"
      convertors="1000000,1" throttle="0"></bdl-chartjs-time>
  
</div>
<div class="w3-col s12 l4">
Tlaky v pravé komoře:
<bdl-chartjs-time
   id="id11"  
   width="400"  
   height="300"  
   fromid="id4"
   maxdata="96"  
   labels="Right Ventricle Pressure, Right Arterie Pressure, Right atria pressure" 
   refindex="8"  refvalues="3"
   ylabel="tlak (mmHg)"
     xlabel="čas (s)"
     convertors="0.00750062,1;0.00750062,1;0.00750062,1" throttle="0"></bdl-chartjs-time>
      
Objem krve v pravé komoře:
<bdl-chartjs-time
   id="id11"  
   width="400"  
   height="300"  
   fromid="id4"
   maxdata="96"  
   labels="Right Ventricle Volume" 
   refindex="11"  refvalues="1"
      ylabel="objem (ml)"
      xlabel="čas (s)"
      convertors="1000000,1" throttle="0"></bdl-chartjs-time>
  
</div>
</div>


