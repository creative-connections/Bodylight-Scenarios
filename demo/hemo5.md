<div class="w3-row">
<div class="w3-col s12 l4">

## Wiggers diagram

 

<bdl-fmi id="id4" src="BurkhoffFMI.js" 
         fminame="Cardiovascular_Model_Burkhoff_HemodynamicsBurkhoff_0shallow"
         tolerance="0.000001" starttime="0" guid="{b5629132-3ba6-4153-87c2-f3ff108e1920}"
         valuereferences="33554435,33554438,637534265,637534241,637534290,16777312,637534466,637534294,637534268"
         valuelabels="Left Ventricle Volume,Right Ventricle Volume,Pressure in Left Ventricle,Pressure in Aorta, Pressure in Left Atria, Heart Rate, LA elastance,MV open, AOV open"         
         controlid="id5"
         fstepsize="0.002"
         ></bdl-fmi>
         
Simulate only one phase:

<bdl-animate-control 
id="id5" 
fromid="id4" 
speedfactor="20" 
segments="3;5;14;17;29" 
segmentlabels="4b fillin - atrial systole;1 ventricular systole - isovolumic contraction;2 ventricular systole - ejection;3 isovolumic relaxation;4a filling" 
segmentcond="7,eq,0;8,eq,1;8,eq,0;7,eq,1;6,gt,100000" 
simsegments="70;120;175;260;380"></bdl-animate-control> 

<bdl-animate-gif fromid="id5" src="heart.gif" width=400></bdl-animate-gif>
</div>
<div class="w3-col s12 l8">

<bdl-ecg 
  id="id11" 
  fromid="id5"
  labels="ECG I"
  ylabel="ECG (mV)"
  width="300"
  height="40"
  responsive="true"
  maxdata="45" throttle="50"></bdl-ecg>      

<bdl-chartjs-time
   id="id11"  
   width="300"  
   height="100"  
   responsive="true"
   fromid="id4"  
   labels="pressure in left ventricle, pressure in aorta, pressure in left atria" 
   refindex="2"  refvalues="3"
   ylabel="pressure (mmHg)"
   xlabel="time (s)"
   convertors="0.00750062,1;0.00750062,1;0.00750062,1"
   sectionid="id5" 
   maxdata="400" throttle="50"></bdl-chartjs-time>

<bdl-chartjs-time
   id="id11"  
   width="300"  
   height="60"  
   responsive="true"
   fromid="id4"  
   labels="Volume of left ventricle" 
   refindex="0"  refvalues="1"
   ylabel="volume (ml)"
   xlabel="time (s)"
   convertors="1000000,1"
   sectionid="id5" 
   maxdata="400" throttle="50"></bdl-chartjs-time>

  
</div>
</div>


