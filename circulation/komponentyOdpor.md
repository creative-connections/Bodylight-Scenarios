# Odpor při průtoku krve

<div class="w3-row">
<div class="w3-half">

Vyzkoušejte měnit veličiny $R$ a tlaku na vstupu $P_{in}$ cévního řečiště. (Výchozí hodnoty jsou pro normální systémovou rezistenci s průtokem 5 $l/min$)

<bdl-range id="id1" title="R - rezistence" min="0.5" max="3.5" default="1.9" step="0.1"></bdl-range> $\frac{mmHg.s.m^2}{ml}$

<bdl-range id="id2" title="Pin - tlak na vstupu" min="15.7" max="50.2" default="25.1" step="0.1"></bdl-range> $mmHg$

<bdl-fmi id="idfmi" mode="oneshot" src="TlakPrutok.js" fminame="TlakPrutok" tolerance="0.000001" starttime="0" fstepsize="0.01" guid="{180a45f3-d7b6-4df8-b1a9-99dfe746691f}" valuereferences="16777216,100663296,16777217,100663296,16777218,100663296" valuelabels="R,Q,Pin,Q,Pout,Q" inputs="id1,16777216,1,1,t;id2,16777217,1,1,t;id3,16777218,1,1,t" inputlabels="R,Pin,Pout"></bdl-fmi>


<bdl-chartjs-xy width="300" height="300" fromid="idfmi" refindex="0" type="line" refvalues="2" labels="R,Q" xlabel="R" ylabel="Q"></bdl-chartjs-xy>

<bdl-chartjs-xy width="300" height="300" fromid="idfmi" refindex="2" type="line" refvalues="2" labels="Pin,Q" xlabel="Pin" ylabel="Q"></bdl-chartjs-xy>




</div>
<div class="w3-half">

Průtoku krve systémovými artériemi, systémovým řečištěm a systémovými vénami je z fyzikálního hlediska kladen odpor. Průtok krve $Q$ lze zjednodušeně vypočítat jako přímo úměrný rozdílu tlaku $P_{in}-P_{out}$ a nepřímo úměrný odporu $R$. Odpor je pro různé typy arterií a vén různý, ale většinou konstantní.

$$ Q = \frac{P_{in}-P_{out}}{R} $$

</div>
</div>


