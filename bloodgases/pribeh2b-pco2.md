<div class="w3-row">
<div class="w3-half w3-justify w3-padding">


Jan, si před odjezdem nechal odebrat žilní krev. Výsledek mu přišel večer emailem:

<div class="w3-xlarge w3-center w3-text-red">art. pCO<sub>2</sub> <b>5.3</b> kPa</div>
<div class="w3-xlarge w3-center w3-text-blue">ven. pCO<sub>2</sub> <b>6.13</b> kPa</div>

1. posuvníkem v interaktivním grafu vyhledejte odpovídající hodnoty
2. odpovězte na otázky:

<bdl-quiz id="q1" type="choice2" question="Pulzní oxymetr měří SpO2. Laboratorně se však stanovuje SaO2. " answers="SpO2 a SaO2 jsou stejné hodnoty|SpO2 je saturace periferní krve, SaO2 se změří laboratorně z arteriální krve. Nicméně hodnoty SpO2 a SaO2 jsou téměř totožné." correctoptions="false|true" explanations="ne|ano" buttontitle="zkontrolovat odpověď"></bdl-quiz>
<bdl-quiz id="q2" type="choice2" question="Nastavte v posuvníku takovou hondotu PO2, aby saturace ukazovala přibližně naměřenou hodnotu. Kolik je parciální tlak?" answers="&#x2250; 93 mmHg|&#x2250; 73 mmHg|&#x2250; 53 mmHg" correctoptions="true|false|false" explanations="ano|ne|ne" buttontitle="zkontrolovat odpověď"></bdl-quiz>
<bdl-quiz id="q3" type="choice2" question="Jaká je tedy koncentrace kyslíku v arteriální krvi? Viz disociační křivka vlevo dole" answers="&#x2250; 8.2 mmol/l|&#x2250; 5.2 mmol/l|&#x2250; 3.2 mmol/l" correctoptions="true|false|false" explanations="ano|ne|ne" buttontitle="zkontrolovat odpověď"></bdl-quiz>
<bdl-quiz id="q4" type="choice2" question="Jaká koncentrace  kyslíku je volně rozpuštěna v plasmě(nevázané na hemoglobin)" answers="&#x2250; 0.13 mmol/l|&#x2250; 0.09 mmol/l|&#x2250; 0.05 mmol/l" correctoptions="true|false|false" explanations="ano|ne|ne" buttontitle="zkontrolovat odpověď"></bdl-quiz>
<bdl-quiz id="q5" type="choice2" question="Jakou měrou se podílí volně rozpuštěný kyslík k celkové koncentraci kyslíku v krvi" answers="1.6 %|16%" correctoptions="true|false" explanations="ano 0.13/8.12 = 0.016 což je 1.6%|ne" buttontitle="zkontrolovat odpověď"></bdl-quiz>
<bdl-quiz-control ids="q1,q2,q3,q4,q5"></bdl-quiz-control>




</div>
<div class="w3-half">

<!--bdl-chartjs-fixed-xy width="500" height="200" colorindex="6" fromid="idfmi" labels="" initialdata="" refindex="0" refvalues="101" xrefindex="101" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;100,9.4" xlabel="pO2 [mmHg]" ylabel="SaO2" maxdata="1024" xrefpointindex="405" refpointindex="407" throttle="0"></bdl-chartjs-fixed-xy-->

<bdl-chartjs-time width="300" height="150" fromid="idfmi" labels="ctCO2" initialdata="" refindex="1" refvalues="1" maxdata="201" showrefpoint="true" ylabel="ctCO2 [mmol/l]"></bdl-chartjs-time>
<bdl-chartjs-time width="200" height="150" fromid="idfmi" labels="cdCO2" ylabel="cdCO2 [mmol/l]" initialdata="" refindex="2" refvalues="1" maxdata="201" showrefpoint="true"></bdl-chartjs-time>


<div style="margin-left:60px; width:420px">
<bdl-range  id="id2" title="" min="1" max="190" default="24" step="1" maxlength="3" showicons="false" fireevent="xdata" ></bdl-range>
</div>

**Saturační křivka. Závislost parciálního tlaku a saturace hemoglobinu kyslíkem.**


<!--bdl-chartjs-fixed-xy width="300" height="150" colorindex="6" fromid="idfmi" labels="" initialdata="" refindex="0" refvalues="101" xrefindex="101" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;1,1" xlabel="pO2 [mmHg]" ylabel="ct[O2] mmol/L" maxdata="1024" xrefpointindex="405" refpointindex="407" throttle="0"></bdl-chartjs-fixed-xy><bdl-chartjs-fixed-xy width="200" height="150" fromid="idfmi" labels="" initialdata="" refindex="408" refvalues="101" xrefindex="101" xrefvalues="101" xtofixed="0" convertors="0.00750061683,1;1,1" xlabel="pO2 [mmHg]" ylabel="cdO2 [mmol/l]" maxdata="5" xrefpointindex="405" refpointindex="610"  throttle="0"></bdl-chartjs-fixed-xy-->

**Disociační křivky závislosti celkové koncentrace (vlevo) a difúzní koncentrace (vpravo) na parciálním tlaku kyslíku v krvi. Difúzní koncentrace volně rozpuštěného kyslíku v plasmě, který není vázán na hemoglobin.**


</div>
</div>

<!--bdl-fmi id="idfmi" mode="oneshot" src="Simplest_Test_PO2CurveTest.js" fminame="Simplest_Test_PO2CurveTest" tolerance="0.0001" starttime="0" fstepsize="1" stoptime="200" guid="{343b66d4-3a3b-4932-83c5-baf89c7b8489}" valuereferences="637534220,637534222,637534218,905969685,637534221,637534224,637534223,234881076,905969684,905969686" valuelabels="pO2PCO2_by_integration.pO2,pO2PCO2_by_integration.ctO2,pO2PCO2_by_integration.pH,pO2PCO2_by_integration.cHCO3,pO2PCO2_by_integration.sO2,pO2PCO2_by_integration.ceHb,pO2PCO2_by_integration.cdO2,pO2PCO2_by_integration.pCO2,pO2PCO2_by_integration.ctCO2,pO2PCO2_by_integration.cdCO2" inputs="idbeox,16777274,1,1,t;idpco2,16777268,1,1,t" inputlabels="BEox.k,PCO2.k"></bdl-fmi-->
<bdl-fmi id="idfmi" mode="oneshot" src="Simplest_Test_PCO2CurveTest.js" fminame="Simplest_Test_PCO2CurveTest" tolerance="0.00001" starttime="0" stoptime="20" fstepsize="0.1" guid="{10fbbc03-8405-427d-b491-c8587bd96365}" valuereferences="637534219,905969684,905969686" valuelabels="pO2PCO2_by_integration.pCO2,pO2PCO2_by_integration.ctCO2,pO2PCO2_by_integration.cdCO2" inputs="" inputlabels=""></bdl-fmi>


