

<div class="w3-row">
<div class="w3-twothird">

<!--bdl-chartjs-time width="300" height="200" fromid="idfmi" labels="" initialdata="" refindex="745" refvalues="3" convertors="1,133.322"></bdl-chartjs-time-->

<bdl-animate-adobe src="Alveoly1.js" width="800" height="600" name="Alveoly1" fromid="idfmi" responsive="true"></bdl-animate-adobe>
<bdl-bind2a-text findex="747" aname="children.0.Alveoly1_Temp_text" convertor="1,1,-273.15" prefix="Temp:" suffix=" °C"></bdl-bind2a-text>
<bdl-bind2a-text findex="745" aname="children.0.Alveoly1_PB_text" convertor="1,133.322" prefix="PB:" suffix=" mmHg"></bdl-bind2a-text>
<bdl-bind2a-text findex="812" aname="children.0.Alveoly1_FiCO2_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="811" aname="children.0.Alveoly1_FiO2_text"></bdl-bind2a-text>
<bdl-bind2a findex="728" aname="children.0.Zkratka_anim" amin="0" amax="99" fmin="0" fmax="1"></bdl-bind2a>


</div>
<div class="w3-third">


| | |
|---:|-----|
| atmospheric pressure | <bdl-range id="id8" min="300" max="3000" default="760" step="1"></bdl-range> |
| Hb in blood | <bdl-range id="id4" min="0" max="40" default="15" step="1"></bdl-range> |
| Temperature | <bdl-range id="id7" min="25" max="42" default="37" step="0.1"></bdl-range> |


<bdl-chartjs-time width="400" height="200" fromid="idfmi" labels="" initialdata="" refindex="728" refvalues="1"></bdl-chartjs-time>

<bdl-chartjs-time width="400" height="200" fromid="idfmi" labels="" initialdata="" refindex="811" refvalues="2"></bdl-chartjs-time>


</div>
</div>