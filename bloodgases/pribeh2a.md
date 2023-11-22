<div class="w3-row">
<div class="w3-half w3-justify w3-padding">


Jan, si před odjezdem změřil kontrolně pulzním oxymetrem hodnoty na sobě. Ukázala se mu hodnota:

<div class="w3-xlarge w3-center">SpO<sub>2</sub> <b>97</b></div>

Interaktivní grafy podle matematického modelu ukazují teoretické závislosti koncentrace, saturace a parciálních tlaků.

<bdl-quiz id="q1" type="choice2" question="Pulzní oxymetr měří SpO2. V literatuře a laboratorně se stanovuje SaO2. Vyberte" answers="SpO2 a SaO2 jsou stejné hodnoty|SpO2 je saturace periferní krve, SaO2 se změří laboratorně z arteriální krve. Nicméně hodnoty SpO2 a SaO2 jsou téměř totožné a dají se zaměnit." correctoptions="false|true" explanations="ne|ano" buttontitle="zkontrolovat odpověď"></bdl-quiz>
<bdl-quiz id="q2" type="choice2" question="Nastavte v posuvníku takovou hondotu PO2, aby saturace ukazovala přibližně naměřenou hodnotu. Kolik je parciální tlak?" answers="96 mmHg|76 mmHg|56 mmHg" correctoptions="true|false|false" explanations="ano|ne|ne" buttontitle="zkontrolovat odpověď"></bdl-quiz>
<bdl-quiz id="q3" type="choice2" question="Jaká je tedy koncentrace kyslíku v arteriální krvi? Viz disociační křivka vlevo dole" answers="9.1 mmol/l|7.1 mmol/l|5.1 mmol/l" correctoptions="true|false|false" explanations="ano|ne|ne" buttontitle="zkontrolovat odpověď"></bdl-quiz>
<bdl-quiz id="q4" type="choice2" question="Jaká koncentrace  kyslíku je volně rozpuštěna v plasmě(nevázané na hemoglobin)" answers="0.14 mmol/l|0.09 mmol/l|0.04 mmol/l" correctoptions="true|false|false" explanations="ano|ne|ne" buttontitle="zkontrolovat odpověď"></bdl-quiz>
<bdl-quiz id="q5" type="choice2" question="Jakou měrou se podílí volně rozpuštěný kyslík k celkové koncentraci kyslíku v krvi" answers="1.5 %|15%" correctoptions="true|false" explanations="ano 0.14/9.13 = 0.015 což je 1.5%|ne" buttontitle="zkontrolovat odpověď"></bdl-quiz>
<bdl-quiz-control ids="q1,q2,q3,q4,q5"></bdl-quiz-control>




</div>
<div class="w3-half">

<!--bdl-chartjs-fixed-xy width="500" height="200" colorindex="6" fromid="idfmi" labels="" initialdata="" refindex="0" refvalues="101" xrefindex="101" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;100,9.4" xlabel="pO2 [mmHg]" ylabel="SaO2" maxdata="1024" xrefpointindex="405" refpointindex="407" throttle="0"></bdl-chartjs-fixed-xy-->
<bdl-chartjs-time width="500" height="300" fromid="idfmi" labels="sO2" initialdata="" refindex="0" refvalues="1"></bdl-chartjs-time>



<div style="margin-left:60px; width:420px">
<bdl-range  id="id2" title="" min="1" max="150" default="24" step="1" maxlength="3" showicons="false"></bdl-range>
</div>

**Saturační křivka. Závislost parciálního tlaku a saturace hemoglobinu kyslíkem.**

<bdl-chartjs-fixed-xy width="300" height="150" colorindex="6" fromid="idfmi" labels="" initialdata="" refindex="0" refvalues="101" xrefindex="101" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;1,1" xlabel="pO2 [mmHg]" ylabel="ct[O2] mmol/L" maxdata="1024" xrefpointindex="405" refpointindex="407" throttle="0"></bdl-chartjs-fixed-xy><bdl-chartjs-fixed-xy width="200" height="150" fromid="idfmi" labels="" initialdata="" refindex="408" refvalues="101" xrefindex="101" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;1,1" xlabel="pO2 [mmHg]" ylabel="cdO2 [mmol/l]" maxdata="5" xrefpointindex="405" refpointindex="610"  throttle="0"></bdl-chartjs-fixed-xy>

**Disociační křivky závislosti na parciálním tlaku kyslíku v krvi. Vlevo závislost celkové koncentrace kyslíku v arteriální krvi. Vpravo závislost volně rozpuštěného kyslíku nevázaného na hemoglobin v krevní plasmě.**


</div>
</div>

<bdl-fmi id="idfmi" mode="oneshot" src="Simplest_Test_PO2CurveTest.js" fminame="Simplest_Test_PO2CurveTest" tolerance="0.0001" starttime="0" fstepsize="1" stoptime="200" guid="{343b66d4-3a3b-4932-83c5-baf89c7b8489}" valuereferences="637534220,637534222,637534218,905969685,637534221,637534224,637534223,234881076,905969684,905969686" valuelabels="pO2PCO2_by_integration.pO2,pO2PCO2_by_integration.ctO2,pO2PCO2_by_integration.pH,pO2PCO2_by_integration.cHCO3,pO2PCO2_by_integration.sO2,pO2PCO2_by_integration.ceHb,pO2PCO2_by_integration.cdO2,pO2PCO2_by_integration.pCO2,pO2PCO2_by_integration.ctCO2,pO2PCO2_by_integration.cdCO2" inputs="idbeox,16777274,1,1,t;idpco2,16777268,1,1,t" inputlabels="BEox.k,PCO2.k"></bdl-fmi>

