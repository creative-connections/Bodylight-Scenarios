
<div class="w3-row">
<div class="w3-third">


<bdl-chartjs-fixed-xy width="300" height="300" fromid="idfmi" labels="" initialdata="" refindex="0" refvalues="101" xrefindex="101" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;1,1" xlabel="pO2 [mmHg]" ylabel="ctO2 [mmol/l]" maxdata="5" xrefpointindex="405" refpointindex="407"></bdl-chartjs-fixed-xy>


<bdl-chartjs-fixed-xy width="300" height="300" fromid="idfmi" labels="" initialdata="" refindex="202" refvalues="101" xrefindex="303" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;1,1" xlabel="pCO2 [mmHg]" ylabel="ctCO2 [mmol/l]" maxdata="5" xrefpointindex="404" refpointindex="406"></bdl-chartjs-fixed-xy>

</div>
<div class="w3-third">

<bdl-chartjs-fixed-xy width="300" height="300" fromid="idfmi" labels="" initialdata="" refindex="408" refvalues="101" xrefindex="101" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;1,1" xlabel="pO2 [mmHg]" ylabel="cdO2 [mmol/l]" maxdata="5" xrefpointindex="405" refpointindex="610"></bdl-chartjs-fixed-xy>


<bdl-chartjs-fixed-xy width="300" height="300" fromid="idfmi" labels="" initialdata="" refindex="509" refvalues="101" xrefindex="303" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;1,1" xlabel="pCO2 [mmHg]" ylabel="cdCO2 [mmol/l]" maxdata="5" xrefpointindex="404" refpointindex="611"></bdl-chartjs-fixed-xy>

</div>
<div class="w3-third">

<bdl-range id="id1" title="pCO2 [mmHg]" min="1" max="80" default="40" step="1" maxlength="2"></bdl-range>


<bdl-range id="id2" title="pO2 [mmHg]" min="1" max="150" default="100" step="1" maxlength="3"></bdl-range>

<bdl-range id="id15" title="Cardiac output ml/min" min="0" max="25000" default="5400" step="100" maxlength="5"></bdl-range>

<bdl-range id="id19" title="Pulonary shunt fractions %" min="1" max="60" default="2" step="1" maxlength="10"></bdl-range>

Cardiac outpu <bdl-value fromid="idfmi" refindex="663" convertors="6e7,1,0"></bdl-value> ml/min

PAO2:
<bdl-value fromid="idfmi" refindex="633"  convertors="1,133.322,0"> </bdl-value>mmHg

<!--bdl-chartjs-time id="id50" width="300" height="200" fromid="idfmi" labels="fsh.y,fsh.k" initialdata="" refindex="742" refvalues="3"></bdl-chartjs-time-->

<bdl-animate-adobe src="AlveolaDve_Smycka_Min_Max_Min_09_12_2021.js" width="300" height="200" name="AlveolaDve_Smycka_Min_Max_Min_09_12_2021" fromid="idfmi" responsive="true"></bdl-animate-adobe>


<bdl-bind2a findex="743" aname="children.0.ZkratkaAnimace2_anim" amin="0" amax="100" fmin="0" fmax="1"></bdl-bind2a>

</div></div>