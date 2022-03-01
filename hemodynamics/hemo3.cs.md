<div class="w3-row">
<div class="w3-half">


<bdl-fmi id="id4" src="BurkhoffFMI.js" 
         fminame="Cardiovascular_Model_Burkhoff_HemodynamicsBurkhoff_0shallow"
         tolerance="0.000001" starttime="0" guid="{b5629132-3ba6-4153-87c2-f3ff108e1920}"
         valuereferences="33554435,637534265,637534241,637534290,16777312,637534466,637534294,637534268"
         valuelabels="Left Ventricle Volume,Pressure in Left Ventricle,Pressure in Aorta, Pressure in Left Atria, Heart Rate, LA elastance,MV open, AOV open"         
         controlid="id5"
         fstepsize="0.002"
         showcontrols="false"></bdl-fmi>
         
Stiskněte tlačítko pro simulaci podle fází srdečního cyklu:

<bdl-animate-control 
id="id5" 
fromid="id4" 
speedfactor="20" 
segments="3;5;14;17;29" 
segmentlabels="4b plnění atriální systola;1 systola komor - isovolumická kontrakce;2 systola komor - ejekce;3 isovolumická relaxace;4a plnění" 
segmentcond="6,eq,0;7,eq,1;7,eq,0;6,eq,1;5,gt,100000" 
simsegments="70;120;175;260;380"></bdl-animate-control> 

<bdl-animate-gif fromid="id5" src="heart.gif" width=600></bdl-animate-gif>

</div>
<div class="w3-half">

Objem krve v levé komoře. 
1. End-diastolický objem - maximální objem krve v komoře
2. Systolický objem - objem krve vypuzený z komory během systoly

<bdl-chartjs-time
   id="id11"  
   width="500"  
   height="200"  
   fromid="id4"  
   labels="Left Ventricle Volume" refindex="0"  refvalues="1"
      ylabel="objem (ml)"
      xlabel="čas (s)"
      convertors="1000000,1"  throttle="50"></bdl-chartjs-time>
  
<bdl-quiz question="Z grafu odečtěte EDO a SO:"
  answers="EDO = 151ml, SO = 77 ml|
           EDO = 77 ml, SO = 151 ml|
           EDO = 151ml, SO = 74 ml"
  correctoptions="true|false|false"           
  explanations="Ano. Systolický objem je asi 77 ml krve (151ml - 74ml).|
  Ne. |
  Ne. 151 ml je maximální náplň krve v levé komoře, ale 74 ml je minimální náplň. Vypudí se tedy 151-74=77">
</bdl-quiz> 

</div>
</div>

