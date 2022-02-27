<div class="w3-row">
<div class="w3-col s12 l4">

## Srdeční cyklus 4 tlaky v levé komoře

Tlaky během srdečního cyklu:

- (1) isovolumická kontrakce 
    - tlak krve se díky kontrakci zvyšuje       
- (2) ejekce
    - tlak krve levé komoře dosáhne tlaku v aortě a chlopeň se mechanicky otevírá
- (3) isovolumická relaxace 
    - tlak v komoře klesne pod tlak v aortě, chlopeň se mechanicky zavře a tlak se dále snižuje
- (4) plnění - krev plní síň a komoru    
    - (4a) plnění - diastola atrií - tlak v komoře je nižší, krev teče dovnitř
    - (4b) plnění - systola atrií - tlak v komoře se mírně zvýší   

</div>
<div class="w3-col s12 l4">

<bdl-fmi id="id4" src="BurkhoffFMI.js" 
         fminame="Cardiovascular_Model_Burkhoff_HemodynamicsBurkhoff_0shallow"
         tolerance="0.000001" starttime="0" guid="{b5629132-3ba6-4153-87c2-f3ff108e1920}"
         valuereferences="33554435,33554438,637534265,637534241,637534290,16777312,637534466,637534294,637534268,637534345,637534371,637534323"
         valuelabels="Left Ventricle Volume,Right Ventricle Volume,Pressure in Left Ventricle,Pressure in Aorta, Pressure in Left Atria, Heart Rate, LA elastance,MV open, AOV open, Pressure in Right Ventricle, Pressure in Pulmonary Arteries,Pressure in Right Atria"         
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

<bdl-animate-gif fromid="id5" src="heart.gif" width=400></bdl-animate-gif>
</div>
<div class="w3-col s12 l4">
Tlak krve v pravé komoře a plicnici:

<bdl-chartjs-time
   id="id11"  
   width="400"  
   height="300"  
   fromid="id4"  
   labels="Right Ventricle Pressure, Right Arterie Pressure" 
   refindex="9"  refvalues="2"
   ylabel="tlak (mmHg)"
     xlabel="čas (s)"
     convertors="0.00750062,1;0.00750062,1;0.00750062,1"></bdl-chartjs-time> 
  
</div>
</div>

<bdl-quiz question="Z grafu odečtěte, jaký je maximální systolický tlak v pravé komoře srdce."
  answers="asi 31 mmHg|
           asi 10 mmHg|
           asi 4 mmHg"
  correctoptions="true|false|false"           
  explanations="31 mmHg je maximální (systolický) tlak v pravé komoře.|
                  10 mmHg je diastolický (minimální) tlak v plicní arterii.|
                  4 mmHg je diastolický (minimální) tlak v pravé komoře.">
</bdl-quiz> 

