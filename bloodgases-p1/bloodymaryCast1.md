
<div class="w3-row">
<div class="w3-twothird">

<bdl-animate-adobe src="Cast1.js" width="800" height="600" name="Cast1" fromid="idfmi" responsive="true"></bdl-animate-adobe>
<bdl-bind2a-text findex="646" aname="children.0.Cast1_CtvCO2_text" convertor="22.3916,1" prefix="Ca CO2:" suffix=" ml CO2/l" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="645" aname="children.0.Cast1_CtvO2_text" convertor="22.3916,1" prefix="Ca O2: " suffix=" ml O2/l" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="740" aname="children.0.Cast1_CtvCO2_text_1" convertor="22.3916,1" prefix="CvCO2:" suffix=" ml O2/l" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="739" aname="children.0.Cast1_CtvO2_text_1" convertor="22.3916,1" prefix="CvO2: " suffix=" ml O2/l" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="652" aname="children.0.Cast1_DCO2_text" convertor="1343496,1" suffix=" ml CO2/min" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="650" aname="children.0.Cast1_DO2_text" convertor="1343496,1" suffix=" ml O2/min" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="654" aname="children.0.Cast1_VDCO2_text" convertor="1343496,1" suffix=" ml O2/min" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="653" aname="children.0.Cast1_VDO2_text" convertor="1343496,1" suffix=" ml O2/min" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="660" aname="children.0.Cast1_PvCO2_text" convertor="1,133.322" prefix="PvCO2: " suffix=" mmHg" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="641" aname="children.0.Cast1_PaCO2_text" convertor="1,133.322" prefix="PaCO2:" suffix=" mmHg" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="643" aname="children.0.Cast1_SaO2_Procenta_text" convertor="100,1" prefix="SaO2:" suffix=" %"></bdl-bind2a-text>
<bdl-bind2a-text findex="642" aname="children.0.Cast1_pHa_text" prefix="pHa: " fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="619" aname="children.0.Cast1_PaO2_text" convertor="1,133.322" prefix="PaO2: " suffix=" mmHg" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="662" aname="children.0.Cast1_SvO2_Procenta_text" convertor="100,1" prefix="SvO2: " suffix=" %" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="661" aname="children.0.Cast1_pHv_text" prefix="pHv: " fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="659" aname="children.0.Cast1_PvO2_text" convertor="1,133.322" prefix="PvO2: " suffix=" mmHg" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="651" aname="children.0.Cast1_O2ER_text" convertor="100,1" prefix="O2ER: " suffix=" %" fixed="1"></bdl-bind2a-text>
<bdl-bind2a-text findex="648" aname="children.0.Cast1_MCO2_text" convertor="1343496,1" suffix=" ml CO2/min" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="647" aname="children.0.Cast1_MO2_text" convertor="1343496,1" suffix=" ml O2/min" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="730" aname="children.0.Cast1_litry1_text" convertor="60000000,1" prefix="Q: " suffix=" ml/min" fixed="0"></bdl-bind2a-text>
<bdl-bind2a findex="653" aname="children.0.children.29.Cast1_O2CervenaSipka1_anim" amin="0" amax="99" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="654" aname="children.0.children.28.Cast1_CO2ModraSipka1_anim" amin="0" amax="99" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="649" aname="children.0.Cast1_CervenaSipka2_anim" amin="0" amax="99" fmin="0" fmax="0.0002"></bdl-bind2a>
<bdl-bind2a findex="649" aname="children.0.Cast1_ModraSipka2_anim" amin="0" amax="99" fmin="0" fmax="0.0002"></bdl-bind2a>
<bdl-bind2a findex="649" aname="children.0.Cast1_CervenaSipka1_anim" amin="0" amax="99" fmin="0" fmax="0.0002"></bdl-bind2a>
<bdl-bind2a findex="649" aname="children.0.Cast1_ModraSipka1_anim" amin="0" amax="99" fmin="0" fmax="0.0002"></bdl-bind2a>
<bdl-bind2a findex="649" aname="children.0.Cast1_CervenySvazek_anim" amin="0" amax="99" fmin="0" fmax="0.0002"></bdl-bind2a>
<bdl-bind2a findex="649" aname="children.0.Cast1_ModrySvazek_anim" amin="0" amax="99" fmin="0" fmax="0.0002"></bdl-bind2a>

<!--
1 mmol O2/CO2 STPD (760 mmHg, 0°C) = 22.3916 ml
mol/sec => ml/min 60000*22.3916=1343496
-->

</div>
<div class="w3-third">

<bdl-value id="maxo2" fromid="idfmi" refindex="768" convertor="Math.round(x*1343496/2 /100)*100" dataevent="true" ></bdl-value>

<bdl-range id="id15" title="cardiac output [ml/min]" min="2000" max="20000" default="5400" step="1" maxlength="2"></bdl-range>

<bdl-range id="id12" title="oxygen consumption rate" min="10" max="900" default="250" step="1"></bdl-range>

<bdl-bind2previous fromid="maxo2" toid="id12" toattribute="max" event="fmivalue"></bdl-bind2previous>


<bdl-range id="id11" title="respiratory quotient" min="0" max="1" default="0.85" step="0.01"></bdl-range>

<bdl-chartjs-time width="400" height="200" fromid="idfmi" refindex="810" refvalues="1"></bdl-chartjs-time>


</div>
</div>

