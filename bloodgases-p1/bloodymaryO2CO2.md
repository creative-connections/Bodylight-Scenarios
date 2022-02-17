<div class="w3-row">
<div class="w3-third">

<bdl-chartjs-fixed-xy width="300" height="300" fromid="idfmi" labels="" initialdata="" refindex="0" refvalues="101" xrefindex="101" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;1,1" xlabel="pO2 [mmHg]" ylabel="ctO2 [mmol/l]" maxdata="5" xrefpointindex="405" refpointindex="407" maxdata="20"></bdl-chartjs-fixed-xy>


<bdl-chartjs-fixed-xy width="300" height="300" fromid="idfmi" labels="" initialdata="" refindex="202" refvalues="101" xrefindex="303" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;1,1" xlabel="pCO2 [mmHg]" ylabel="ctCO2 [mmol/l]" maxdata="5" xrefpointindex="404" refpointindex="406" min="0" max="35" maxdata="20"></bdl-chartjs-fixed-xy>

</div>
<div class="w3-third">

<bdl-chartjs-fixed-xy width="300" height="300" fromid="idfmi" labels="" initialdata="" refindex="408" refvalues="101" xrefindex="101" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;1,1" xlabel="pO2 [mmHg]" ylabel="cdO2 [mmol/l]" maxdata="5" xrefpointindex="405" refpointindex="610" maxdata="20"></bdl-chartjs-fixed-xy>


<bdl-chartjs-fixed-xy width="300" height="300" fromid="idfmi" labels="" initialdata="" refindex="509" refvalues="101" xrefindex="303" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;1,1" xlabel="pCO2 [mmHg]" ylabel="cdCO2 [mmol/l]" maxdata="5" xrefpointindex="404" refpointindex="611" maxdata="20"></bdl-chartjs-fixed-xy>

</div>
<div class="w3-third">

Arteriální krev:pO<sub>2</sub> <bdl-value id="a1" fromid="idfmi" refindex="619" convertor="1,133.322" dataevent="true"></bdl-value> pCO<sub>2</sub> <bdl-value id="a2" fromid="idfmi" refindex="641" convertor="1,133.322" dataevent="true"></bdl-value><bdl-buttonparams id="a3" title="ukázat v grafu" ids="id1,id2" values="40,106"></bdl-buttonparams>
<bdl-bind2previous fromid="a2,a1" toid="a3" toattribute="values" event="fmivalue"></bdl-bind2previous>

Venózní krev:pO<sub>2</sub> <bdl-value id="v1" fromid="idfmi" refindex="659" convertor="1,133.322" dataevent="true"></bdl-value> pCO<sub>2</sub> <bdl-value id="v2" fromid="idfmi" refindex="660" convertor="1,133.322" dataevent="true"></bdl-value> <bdl-buttonparams id="v3" title="ukázat v grafu" ids="id1,id2" values="47,41"></bdl-buttonparams>
<bdl-bind2previous fromid="v2,v1" toid="v3" toattribute="values" event="fmivalue"></bdl-bind2previous>


<bdl-range id="id1" title="pCO2 [mmHg]" min="1" max="80" default="40" step="1" maxlength="2"></bdl-range>

<bdl-range id="id2" title="pO2 [mmHg]" min="1" max="150" default="100" step="1" maxlength="3"></bdl-range>

</div></div>