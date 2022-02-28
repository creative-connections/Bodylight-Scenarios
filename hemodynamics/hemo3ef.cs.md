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

Ejekční frakce je podíl systolického objemu a end-diastolického objemu
Objem krve v levé komoře:

<bdl-chartjs-time
   id="id11"  
   width="500"  
   height="200"  
   fromid="id4"  
   labels="Left Ventricle Volume" refindex="0"  refvalues="1"
      ylabel="objem (ml)"
      xlabel="čas (s)"
      convertors="1000000,1"  throttle="50"></bdl-chartjs-time>
      
EF = SV / EDV = <br /> <input id="sv" type="number"/> / <input id="edv" type="number"/> <button onclick="document.getElementById('ef').innerHTML = parseFloat(document.getElementById('sv').value) / parseFloat(document.getElementById('edv').value) ">=</button> <span id="ef"></span>

  
<bdl-quiz question="Kolik je ejekční frakce srdce podle této simulace:"
  answers="asi 0.51, tj. 51%|
           asi 0.41, tj. 41%|
           asi 0.31, tj. 31%"
  correctoptions="true|false|false"           
  explanations="Ano. 77/151 = 0.51 |
  Ne|
  Ne">
</bdl-quiz> 

</div>
</div>

