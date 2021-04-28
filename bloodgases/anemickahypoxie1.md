<style>
img[alt^="image"] {max-width:20px;}
img[alt^="bigimage"] {  max-height:60px}
tbody tr:nth-child(even){background-color:#f1f1f1}
</style>
<h2 class="w3-left w3-margin-right">Anemická hypoxie</h2>

Anemická (také nebo transportní) hypoxie je způsobená nedostatečným počtem funkčních erytrocytů nebo hemoglobinu. Základním znakem tohoto typu hypoxie je arteriální hypoxémie při normálním pO2 v okolí, arteriovenózní diference je stejná. Anemická hypoxie může být způsobena sníženým počtem erytrocytů (krevní ztráty, snížená erytropoéza, zvýšený rozpad), poklesem koncentrace hemoglobinu při dostatečném počtu erytrocytů (tzv. hypochromní anémie), tvorbou patologického Hb nebo vyřazením Hb z funkce vázat O2.^[Anemická hypoxie, [WIKISKRIPTA](https://www.wikiskripta.eu/w/Hypoxie#Anemick.C3.A1_hypoxie) ] ^[Hypoxie, [WIKIPEDIE](https://cs.wikipedia.org/wiki/Hypoxie) ]



<div class="w3-row">
<div class="w3-third">

**Plicní kapiláry v alveolech**
<bdl-chartjs-barplot id="idp11" fromid="idfmi"  refindex="6"  extremelimits="0,1"  normallimits="0,1" responsive="true" labels="SAT" initialdata="0.97"></bdl-chartjs-barplot> 
<bdl-chartjs-barplot  id="idp12"  fromid="idfmi"  refindex="5"  extremelimits="0,150" labels="pO2" normallimits="90,110"  initialdata="94.01"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>
<bdl-chartjs-barplot  id="idp13"  fromid="idfmi"  refindex="7"  extremelimits="0,75" labels="pCO2" normallimits="35,45"  initialdata="40"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>
<bdl-chartjs-barplot  id="idp14"  fromid="idfmi"  refindex="8"  extremelimits="7,8" labels="pH" normallimits="7.38,7.42"  initialdata="7.4"  convertors="1,1" responsive="true"></bdl-chartjs-barplot>

**Smíšená arteriální krev**
<bdl-chartjs-barplot id="id11" fromid="idfmi"  refindex="1"  extremelimits="0,1"  normallimits="0.93,0.99" responsive="true" labels="SAT" initialdata="0.97"></bdl-chartjs-barplot> 
<bdl-chartjs-barplot  id="id12"  fromid="idfmi"  refindex="0"  extremelimits="0,150" labels="pO2" normallimits="90,110"  initialdata="94.01"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>
<bdl-chartjs-barplot  id="id13"  fromid="idfmi"  refindex="10"  extremelimits="0,75" labels="pCO2" normallimits="35,45"  initialdata="40"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>
<bdl-chartjs-barplot  id="id14"  fromid="idfmi"  refindex="11"  extremelimits="7,8" labels="pH" normallimits="7.38,7.42"  initialdata="7.4"  convertors="1,1" responsive="true"></bdl-chartjs-barplot>

**Smíšená krev ve tkáních**
<bdl-chartjs-barplot id="idt11" fromid="idfmi"  refindex="1"  extremelimits="0,1"  normallimits="0.5,0.7" responsive="true" labels="SAT" initialdata="0.97"></bdl-chartjs-barplot> 
<bdl-chartjs-barplot  id="idt12"  fromid="idfmi"  refindex="21"  extremelimits="0,150" labels="pO2" normallimits="30,40"  initialdata="94.01"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>
<bdl-chartjs-barplot  id="idt13"  fromid="idfmi"  refindex="12"  extremelimits="0,75" labels="pCO2" normallimits="40,55"  initialdata="40"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>
<bdl-chartjs-barplot  id="idt14"  fromid="idfmi"  refindex="13"  extremelimits="7,8" labels="pH" normallimits="7.3,7.4"  initialdata="7.4"  convertors="1,1" responsive="true"></bdl-chartjs-barplot>

**Vdechovaný vzduch**

<bdl-chartjs-barplot  id="idt12"  fromid="idfmi"  refindex="16"  extremelimits="0,300" labels="pO2" initialdata="159"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>
<bdl-chartjs-barplot  id="idt13"  fromid="idfmi"  refindex="17"  extremelimits="0,75" labels="pCO2" initialdata="0"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>

</div>
<div class="w3-third">

**Ovládání simulátoru**

<bdl-fmi id="idfmi" src="Physiolibrary_Fluid_Examples_BloodGasesTransport_BloodyMary.js" fminame="Physiolibrary_Fluid_Examples_BloodGasesTransport_BloodyMary" tolerance="0.000001" starttime="0" fstepsize="1" guid="{9cf9ddee-a4c0-4744-9f83-dc25801100f8}" valuereferences="637536357,905971815,905972513,905972516,905971811,905971620,905971622,905971621,905971619,905971618,637536358,905971812,905972514,905972515,905972512,16777244,100663342,100663343,16777223,637536357,905971832,905972513,905972466" valuelabels="arterial.pO2,arterial.sO2, tissueUnit[1].tissue.pO2, tissueUnit[1].tissue.sO2,arterial.pressure,alveolarUnit[1].pO2,alveolarUnit[1].sO2,alveolarUnit[1].pCO2,alveolarUnit[1].pH,alveolarUnit[1].pressure,arterial.pCO2,tissueUnit[1].tissue.pO2,arterial.pH,tissueUnit[1].tissue.pH,tissueUnit[1].tissue.pressure,Blood_Hb,Air_pO2,Air_pCO2,RR,arterial.pO2,arterial.c[2],tissueUnit[1].tissue.pO2,tissueUnit[1].tissue.c[2]" inputs="id1,16777217,1,1,-272.15;id2,16777216,1000,1;id3,16777252,1,100;id4,16777253,1,1000;id5,100663341,1,100;id6,16777244,1,1,0,f;id7,16777238,1,100,0,f;id8,16777251,1,1,f;id9,16777223,1,60,f;id10,16777224,1,1000,f;id11,16777225,1,1000,t;id12,16777226,1,60000,t" inputlabels="system.T_ambient,system.p_ambient,AirO2,AirCO2,AirN2,Blood_Hb,Hct,Blood_BEox,RR,TV,DV,CO"></bdl-fmi>


| parametr | hodnota |
|----------|---------|
| koncentrace Hb v krvinkach (norma 8.4) | <bdl-range id="id6" title="" min="4.4" max="12" default="8.4" step="0.1" maxlength="5"></bdl-range> |


<bdl-animate-adobe src="AlveolaTK.js" width="404" height="227" name="AlveolaTK" fromid="idfmi"></bdl-animate-adobe>

<bdl-bind2a findex="-1" aname="Alveola_anim" amin="0" amax="99" fmin="0" fmax="1" convertor="Math.sin(x/10)**2"></bdl-bind2a>

**Křivka O2 - závislost parciálního tlaku O<sub>2</sub> a jeho koncentrace v krvi**
<bdl-chartjs-xy-points id="idt12"  fromid="idfmi"  refindex="19" refvalues="4"  labels=",arterialní krev,tkáně," responsive="true" xmin="0" xmax="110" min="0" max="10" convertors="1,133.322;1,1;1,133.322;1,1" atitle="Přidat bod" rtitle="Odebrat bod" xlabel="pO2 [mmHg]" ylabel="cO2 [mmol/l]"></bdl-chartjs-xy-points>

</div>
<div class="w3-third">

**Instrukce a otázky**
<div class="w3-tiny">

1. Spusťte simulátor tlačítkem <button><i class="fa fa-play"></i></button> a sledujte v grafu body udávající parciální tlak a koncentraci O<sub>2</sub> v arteriální krvi a ve venózní krvi, která opouští tkáně. 
3. Stiskněte tlačítko <button>Přidat bod</button> pod grafem.
4. <bdl-quiz question="Zastavte simulátor a odečtěte rozdíl koncentrací O2 v arteriální krvi a ve venózní krvi (najeďte myší na graf a odečtěte hodnoty). Jaký je rozdíl koncentrací (hodnota u symbolu delta)?" answers="2.8 mmol/l|8.28mmol/l|37.2 mmHg" correctoptions="true|false|false" explanations="Ano, toto množství O2 si odeberou buňky z krve|Ne, tato hodnota je absolutní hodnota koncentrace v arteriální krvi|Ne, tato hondota je parciální tlak kyslíku ve tkáních"></bdl-quiz>
 
5. Spusťte simulátor a změnte hodnotu koncentrace Hb posuvníkem např. na hodnotu 4.4
6. <bdl-quiz question="Sledujte v grafu body parciálního tlaku kyslíku v krvi. Co se děje s koncentrací O2 při anemické hypoxii?" answers="koncentrace v arteriální i smíšené krvi v tkáních se snižuje| koncentrace se nemění" correctoptions="true|false" explanations="Ano, v grafu se oba body snižují| Ne."></bdl-quiz>
7. <bdl-quiz question="Zastavte simulaci a odečtěte rozdíl koncentrací O<sub>2</sub> v arteriální krvi a v krvi tkání (najeďte myší) na graf. Jaký je rozdíl koncentrací při anémii?" answers="2.8 mmol/l|8.28mmol/l|37.2 mmHg" correctoptions="true|false|false" explanations="Ano, toto množství O2 si odeberou buňky z krve i při anémii|Ne, toto je absolutní hodnota koncentrace v arteriální krvi|Ne, toto je parciální tlak kyslíku ve tkáních"></bdl-quiz>
8. <bdl-quiz question="Čeho jste si všimli" answers="Rozdíl koncentrací je stejný při anemické hypoxii stejně jako při normálním fyziologickém stavu|Při anemii se sníží odběr kyslíku" correctoptions="true|false" explanations="Ano. Metabolismus mitochondrií bez ohledu na vnější příčiny má stejný odběr kyslíku v případě anemixké hypoxie |Ne v tomto případě. Odběr kyslíku se sníží až při výraznější anémii nebo při jiných typech hypoxie."></bdl-quiz>
</div>

</div>
</div>