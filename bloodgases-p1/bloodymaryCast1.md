

<div class="w3-row">
<div class="w3-quarter">


<bdl-chartjs-fixed-xy width="300" height="300" fromid="idfmi" labels="" initialdata="" refindex="0" refvalues="101" xrefindex="101" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;1,1" xlabel="pO2 [mmHg]" ylabel="ctO2 [mmol/l]" maxdata="5" xrefpointindex="405" refpointindex="407"></bdl-chartjs-fixed-xy>

</div>
<div class="w3-quarter">


<bdl-chartjs-fixed-xy width="300" height="300" fromid="idfmi" labels="" initialdata="" refindex="202" refvalues="101" xrefindex="303" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;1,1" xlabel="pCO2 [mmHg]" ylabel="ctCO2 [mmol/l]" maxdata="5" xrefpointindex="404" refpointindex="406"></bdl-chartjs-fixed-xy>

<bdl-range id="id1" title="pCO2 [mmHg]" min="1" max="80" default="40" step="1" maxlength="2"></bdl-range>


<bdl-range id="id2" title="pO2 [mmHg]" min="1" max="150" default="100" step="1" maxlength="3"></bdl-range>

</div>
<div class="w3-quarter">

<bdl-chartjs-fixed-xy width="300" height="300" fromid="idfmi" labels="" initialdata="" refindex="408" refvalues="101" xrefindex="101" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;1,1" xlabel="pO2 [mmHg]" ylabel="cdO2 [mmol/l]" maxdata="5" xrefpointindex="405" refpointindex="610"></bdl-chartjs-fixed-xy>

</div>
<div class="w3-quarter">

<bdl-chartjs-fixed-xy width="300" height="300" fromid="idfmi" labels="" initialdata="" refindex="509" refvalues="101" xrefindex="303" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;1,1" xlabel="pCO2 [mmHg]" ylabel="cdCO2 [mmol/l]" maxdata="5" xrefpointindex="404" refpointindex="611"></bdl-chartjs-fixed-xy>

</div>
</div>

<bdl-animate-adobe src="Cast1.js" width="800" height="600" name="Cast1" fromid="idfmi" responsive="true"></bdl-animate-adobe>
<bdl-bind2a-text findex="666" aname="children.0.Cast1_DCO2_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="664" aname="children.0.Cast1_DO2_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="668" aname="children.0.Cast1_VDCO2_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="667" aname="children.0.Cast1_VDO2_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="674" aname="children.0.Cast1_PvCO2_text" convertor="1,133.322"></bdl-bind2a-text>
<bdl-bind2a-text findex="674" aname="children.0.Cast1_PaCO2_text" convertor="1,133.322"></bdl-bind2a-text>
<bdl-bind2a-text findex="676" aname="children.0.Cast1_SaO2_Procenta_text" convertor="100,1"></bdl-bind2a-text>
<bdl-bind2a-text findex="675" aname="children.0.Cast1_pHa_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="673" aname="children.0.Cast1_PaO2_text" convertor="1,133.322"></bdl-bind2a-text>
<bdl-bind2a-text findex="676" aname="children.0.Cast1_SvO2_Procenta_text" convertor="100,1"></bdl-bind2a-text>
<bdl-bind2a-text findex="675" aname="children.0.Cast1_pHv_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="673" aname="children.0.Cast1_PvO2_text" convertor="1,133.322"></bdl-bind2a-text>
<bdl-bind2a-text findex="665" aname="children.0.Cast1_O2ER_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="662" aname="children.0.Cast1_MCO2_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="661" aname="children.0.Cast1_MO2_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="663" aname="children.0.Cast1_litry1_text" convertor="1000000,1"></bdl-bind2a-text>
<bdl-bind2a findex="667" aname="children.0.children.110.Cast1_O2CervenaSipka1_anim" amin="0" amax="99" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="668" aname="children.0.children.109.Cast1_CO2ModraSipka1_anim" amin="0" amax="99" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="663" aname="children.0.Cast1_CervenaSipka2_anim" amin="0" amax="99" fmin="0" fmax="0.0002"></bdl-bind2a>
<bdl-bind2a findex="663" aname="children.0.Cast1_ModraSipka2_anim" amin="0" amax="99" fmin="0" fmax="0.0002"></bdl-bind2a>
<bdl-bind2a findex="663" aname="children.0.Cast1_CervenaSipka1_anim" amin="0" amax="99" fmin="0" fmax="0.0002"></bdl-bind2a>
<bdl-bind2a findex="663" aname="children.0.Cast1_ModraSipka1_anim" amin="0" amax="99" fmin="0" fmax="0.0002"></bdl-bind2a>
<bdl-bind2a findex="663" aname="children.0.Cast1_CervenySvazek_anim" amin="0" amax="99" fmin="0" fmax="0.0002"></bdl-bind2a>
<bdl-bind2a findex="663" aname="children.0.Cast1_ModrySvazek_anim" amin="0" amax="99" fmin="0" fmax="0.0002"></bdl-bind2a>









