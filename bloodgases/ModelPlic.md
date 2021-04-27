<style>
img[alt^="image"] {max-width:20px;}
img[alt^="bigimage"] {  max-height:60px}
tbody tr:nth-child(even){background-color:#f1f1f1}
</style>
<bdl-tabs idlist="uvod,modelplic,modeltkani,krivkao2,krivkaco2,porovnani" 
  titlelist="Úvod,Model plic,Model tkání,Křivka O2,KřivkaCO2,Porovnání O2 a CO2"></bdl-tabs>
<div id="uvod">
Uvod
</div>  
<div id="modelplic" class="w3-row">
<div class="w3-third">

### Ukazatele

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

<bdl-fmi id="idfmi" src="Physiolibrary_Fluid_Examples_BloodGasesTransport_BloodyMary.js" fminame="Physiolibrary_Fluid_Examples_BloodGasesTransport_BloodyMary" tolerance="0.000001" starttime="0" fstepsize="1" guid="{9cf9ddee-a4c0-4744-9f83-dc25801100f8}" valuereferences="637536357,905971815,905972513,905972516,905971811,905971620,905971622,905971621,905971619,905971618,637536358,905971812,905972514,905972515,905972512,16777244,100663342,100663343,16777223,637536357,905971832,905972513,905972466" valuelabels="arterial.pO2,arterial.sO2, tissueUnit[1].tissue.pO2, tissueUnit[1].tissue.sO2,arterial.pressure,alveolarUnit[1].pO2,alveolarUnit[1].sO2,alveolarUnit[1].pCO2,alveolarUnit[1].pH,alveolarUnit[1].pressure,arterial.pCO2,tissueUnit[1].tissue.pO2,arterial.pH,tissueUnit[1].tissue.pH,tissueUnit[1].tissue.pressure,Blood_Hb,Air_pO2,Air_pCO2,RR,arterial.pO2,arterial.c[2],tissueUnit[1].tissue.pO2,tissueUnit[1].tissue.c[2]" inputs="id1,16777217,1,1,-272.15;id2,16777216,1000,1;id3,16777252,1,100;id4,16777253,1,1000;id5,100663341,1,100;id6,16777244,1,1,0,f;id7,16777238,1,100,0,f;id8,16777251,1,1,f;id9,16777223,1,60,f;id10,16777224,1,1000,f;id11,16777225,1,1000,t;id12,16777226,1,60000,t" inputlabels="system.T_ambient,system.p_ambient,AirO2,AirCO2,AirN2,Blood_Hb,Hct,Blood_BEox,RR,TV,DV,CO"></bdl-fmi>


<bdl-animate-adobe src="AlveolaTK.js" width="800" height="600" name="AlveolaTK" fromid="idfmi"></bdl-animate-adobe>

<bdl-bind2a findex="-1" aname="Alveola_anim" amin="0" amax="99" fmin="0" fmax="1" convertor="Math.sin(x/10)**2"></bdl-bind2a>

<h4>Křivka O2 - závislost parciálního tlaku O<sub>2</sub> a jeho koncentrace v krvi</h4>
<bdl-chartjs-xy-points id="idt12"  fromid="idfmi"  refindex="19" refvalues="4"  labels=",arterialní krev,tkáně," responsive="true" xmin="0" xmax="110" min="0" max="10" convertors="1,133.322;1,1;1,133.322;1,1" atitle="Přidat bod" rtitle="Odebrat bod" xlabel="pO2 [mmHg]" ylabel="cO2 [mmol/l]"></bdl-chartjs-xy-points>

</div>
<div class="w3-third w3-tiny">

| parametr | hodnota |
|----------|---------|
| teplota [&deg;C] (norma 37&deg;C) | <bdl-range id="id1" title="" min="22" max="42" default="37" step="0.5" maxlength="5"></bdl-range> |
| tlak vzduchu [kPa] (norma 101 kPa) | <bdl-range id="id2" title="" min="30" max="1000" default="101" step="1" maxlength="5"></bdl-range> |
| koncentrace O2 (norma 21%) | <bdl-range id="id3" title="" min="5" max="50" default="21" step="1" maxlength="5"></bdl-range> |
| koncentrace CO2 (norma 0.3&permil;) | <bdl-range id="id4" title="" min="0.1" max="50" default="0.3" step="0.1" maxlength="5"></bdl-range> |
| koncentrace N2 (norma 72%) | <bdl-range id="id5" title="" min="60" max="90" default="72" step="1" maxlength="5"></bdl-range> |
| koncentrace Hb v krvinkach (norma 8.4) | <bdl-range id="id6" title="" min="1" max="16" default="8.4" step="0.1" maxlength="5"></bdl-range> |
| hematocrit Hct (44%) | <bdl-range id="id7" title="" min="10" max="80" default="44" step="1" maxlength="5"></bdl-range> |
| BeOX (0) | <bdl-range id="id8" title="" min="-10" max="10" default="0" step="1" maxlength="5"></bdl-range> |
| dechová frekvence (norma 17)1/min | <bdl-range id="id9" title="" min="0" max="60" default="17" step="1" maxlength="5"></bdl-range> |
| objem nádechu (tidal volume) (0.5 l) | <bdl-range id="id10" title="" min="0.1" max="1.5" default="0.5" step="0.1" maxlength="7"></bdl-range> |
| mrtvý prostor nádechu (death space) (0.15 l) | <bdl-range id="id11" title="" min="0.05" max="1" default="0.15" step="0.05" maxlength="7"></bdl-range> |
| minutový srdeční výdej (cardiac output) (5 l/min) | <bdl-range id="id12" title="" min="1" max="15" default="5" step="0.5" maxlength="7"></bdl-range> |

</div>
</div>
<div id="modeltkani">
modeltkani
</div>
<div id="krivkao2">
krivkao2
</div>
<div id="krivkaco2">
krivkaco2
</div>
<div id="porovnani">
porovnani
</div>