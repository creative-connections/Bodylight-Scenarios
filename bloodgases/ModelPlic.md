## Simulace modelu plic

Demonstruje výměnu krevních plynů $O_2$ a $CO_2$ v plicích, která je ovlivněna množstvím parametrů (teplota, BEox, atd.). Je možné rozdělit plíce na několik částí s různými poměry ventilace/perfůze, což umožňuje experimenty vysvětlující jak a proč mají reálné plíce nerovnoměrné rozdělení těchto parametrů. Model též umožňuje zpětně agregovat rozdělené plíce do jediné jednotky beze změny chování (tato agregace změní míru ventilace mrtvého prostoru a pravolevých perfůzních zkratů).

<div class="w3-row">
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
<bdl-chartjs-barplot  id="id13"  fromid="idfmi"  refindex="2"  extremelimits="0,75" labels="pCO2" normallimits="35,45"  initialdata="40"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>
<bdl-chartjs-barplot  id="id14"  fromid="idfmi"  refindex="3"  extremelimits="7,8" labels="pH" normallimits="7.38,7.42"  initialdata="7.4"  convertors="1,1" responsive="true"></bdl-chartjs-barplot>

**Smíšená krev ve tkáních**
<bdl-chartjs-barplot id="idt11" fromid="idfmi"  refindex="10"  extremelimits="0,1"  normallimits="0.5,0.7" responsive="true" labels="SAT" initialdata="0.97"></bdl-chartjs-barplot> 
<bdl-chartjs-barplot  id="idt12"  fromid="idfmi"  refindex="11"  extremelimits="0,150" labels="pO2" normallimits="30,40"  initialdata="94.01"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>
<bdl-chartjs-barplot  id="idt13"  fromid="idfmi"  refindex="12"  extremelimits="0,75" labels="pCO2" normallimits="40,55"  initialdata="40"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>
<bdl-chartjs-barplot  id="idt14"  fromid="idfmi"  refindex="13"  extremelimits="7,8" labels="pH" normallimits="7.3,7.4"  initialdata="7.4"  convertors="1,1" responsive="true"></bdl-chartjs-barplot>

</div>
<div class="w3-third">

<bdl-fmi id="idfmi" src="Physiolibrary_Fluid_Examples_BloodGasesTransport_BloodyMary.js" fminame="Physiolibrary_Fluid_Examples_BloodGasesTransport_BloodyMary" tolerance="0.000001" starttime="0" fstepsize="1" guid="{9cf9ddee-a4c0-4744-9f83-dc25801100f8}" valuereferences="637536357,905971815,637536358,905971812,905971811,905971620,905971622,905971621,905971619,905971618,905972516,905972513,905972514,905972515,905972512" valuelabels="arterial.pO2,arterial.sO2,arterial.pCO2,arterial.pH,arterial.pressure,alveolarUnit[1].pO2,alveolarUnit[1].sO2,alveolarUnit[1].pCO2,alveolarUnit[1].pH,alveolarUnit[1].pressure,tissueUnit[1].tissue.sO2,tissueUnit[1].tissue.pO2,tissueUnit[1].tissue.pCO2,tissueUnit[1].tissue.pH,tissueUnit[1].tissue.pressure" inputs="id1,16777217,1,1;id2,16777216,1000,1" inputlabels="system.T_ambient,system.p_ambient"></bdl-fmi>

<bdl-chartjs-time id="id10" width="300" height="200" fromid="idfmi" labels="arterial pO2" initialdata="" refindex="0" refvalues="1" convertors="1,133.322" maxdata="1024"></bdl-chartjs-time>
<bdl-chartjs-time id="id10" width="300" height="200" fromid="idfmi" labels="alveoral pO2" initialdata="" refindex="5" refvalues="1" convertors="1,133.322" maxdata="1024"></bdl-chartjs-time>
<bdl-chartjs-time id="id10" width="300" height="200" fromid="idfmi" labels="tissue pO2" initialdata="" refindex="11" refvalues="1" convertors="1,133.322" maxdata="1024"></bdl-chartjs-time>
</div>
<div class="w3-third w3-tiny">

| parametr | hodnota |
|----------|---------|
| teplota [&deg;K] (norma 310.15&deg;K = 37&deg;KC | <bdl-range id="id1" title="" min="290.15" max="320.15" default="310.15" step="1" maxlength="6"></bdl-range> |
| tlak vzduchu [kPa] (norma 101 kPa) | <bdl-range id="id2" title="" min="30" max="1000" default="101" step="1" maxlength="7"></bdl-range>KPa |

<bdl-animate-adobe src="AlveolaTK.js" width="800" height="600" name="AlveolaTK" fromid="idfmi"></bdl-animate-adobe>

<bdl-bind2a findex="-1" aname="Alveola_anim" amin="0" amax="99" fmin="0" fmax="1" convertor="Math.sin(x/10)**2"></bdl-bind2a>
</div>
</div>