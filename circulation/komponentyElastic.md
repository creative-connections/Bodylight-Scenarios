# Elasticita

<div class="w3-row">
<div class="w3-half">

Vyzkoušejte si měnit poddajnost cévy a objem.

<bdl-fmi id="idfmi" mode="oneshot" src="TlakElasticita.js" fminame="TlakElasticita" tolerance="0.000001" starttime="0" fstepsize="0.01" guid="{afbf9e4c-92ce-4b7b-8220-a70284960371}" valuereferences="16777218,100663296,16777216,100663296,16777217,100663296" valuelabels="c,P,V,P,V0,P" inputs="id1,16777218,1,1,t;id2,16777216,1,1,t;id3,16777217,1,1,t" inputlabels="c,V,V0"></bdl-fmi>

<bdl-chartjs-xy id="" width="300" height="300" fromid="idfmi" labels="c,P" initialdata="" refindex="0" refvalues="2"></bdl-chartjs-xy>
<bdl-chartjs-xy id="" width="300" height="300" fromid="idfmi" labels="V,P" initialdata="" refindex="2" refvalues="2"></bdl-chartjs-xy>

<bdl-range id="id1" title="c - tuhost" min="0.1" max="1.5" default="0.8" step="0.1"></bdl-range>

<bdl-range id="id2" title="V - objem" min="400" max="1000" default="580" step="10"></bdl-range>


</div>
<div class="w3-half">

Pokud objem náplně cévy (V) bude
menší než reziduální (neelastický) objem (V0), pak
transmurální tlak v cévě bude nulový. Bude-li větší,
pak tlak (P) bude úměrný elastickému objemu (V-V0)
a elasticitě (e) tj. tuhosti cévy a nepřímo úměrný
poddajnosti (c). Tedy:

| | |
|--|--|
| když $V>V_0$ pak | $P = e (V-V_0) =\frac{1}{c}(V-V_0)$ |
| jinak|  $P=0$ |


</div>
</div>






