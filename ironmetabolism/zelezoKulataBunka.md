# Iron Metabolism in other organs


<div class="w3-row">
  <div class="w3-third">
  
## Physiology

<div class="w3-right-align">
<bdl-range id="id1" title="iron intake rate" min="0" max="1000" default="219" step="1"></bdl-range>
</div>

## Patophysiology

<div class="w3-right-align">
  <bdl-range id="id2" title="bleeding rate" min="0" max="5" step="0.1" default="0"></bdl-range>
  <bdl-range id="id3" title="transfusion rate" min="0" max="5" step="0.1" default="0"></bdl-range>
  <bdl-range id="id4" title="malabsorption rate" min="0" max="1" step="0.01" default="1"></bdl-range>
  <bdl-range id="id5" title="iron loss rate" min="1" max="10" step="0.5" default="1"></bdl-range>
</div>
  
<bdl-fmi id="idfmi" src="FeMetabolism_FeMetabolismModel.js" fminame="FeMetabolism_FeMetabolismModel" tolerance="0.000001" starttime="0" guid="{77176c9f-7521-4126-b26e-904af8f4d077}" valuereferences="637534208,637534209,33554445,33554446" valuelabels="Fe_liv,Fe_spl,Fe_bm,Fe_RBC" inputs="id1,100663316,1,1;id2,16777261,1,1;id3,16777264,1,1;id4,16777262,1,1;id5,16777263,1,1" inputlabels="Fe_duo_intake,bleeding,transfusion,malabsorption,loss_factor"></bdl-fmi>

</div>
<div class="w3-twothird">

## Visualisation

  <bdl-animate-adobe src="ZelezoKulataBunkaFinal.js" width="400" height="300" name="ZelezoKulataBunkaFinal" fromid="idfmi"></bdl-animate-adobe>

  <bdl-bind2a findex="0" aname="SipkaFialovaCervena1_anim" amin="0" amax="100" fmin="75" fmax="76"></bdl-bind2a>

  <bdl-bind2a findex="1" aname="SipkaCervenoFialova1_anim" amin="0" amax="100" fmin="17" fmax="18"></bdl-bind2a>
  <bdl-bind2a findex="2" aname="FialovaUvnitrVehicle_anim" amin="0" amax="100" fmin="62" fmax="63"></bdl-bind2a>
  
## Charts

  <div class="w3-row">
    <div class="w3-third">
      <bdl-chartjs-time id="id10" width="300" height="200" fromid="idfmi" labels="Fe_liv" initialdata="" refindex="0" refvalues="1"></bdl-chartjs-time>
    </div>
    <div class="w3-third">
      <bdl-chartjs-time id="id11" width="300" height="200" fromid="idfmi" labels="Fe_spl" initialdata="" refindex="1" refvalues="1"></bdl-chartjs-time>
    </div>
    <div class="w3-third">
      <bdl-chartjs-time id="id12" width="300" height="200" fromid="idfmi" labels="Fe_bm" initialdata="" refindex="2" refvalues="1"></bdl-chartjs-time>
      <bdl-chartjs-time id="id13" width="300" height="200" fromid="idfmi" labels="Fe_RBC" initialdata="" refindex="3" refvalues="1"></bdl-chartjs-time>

    </div>
  </div>
</div>
</div>


