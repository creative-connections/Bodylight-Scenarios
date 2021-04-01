## Simulace modelu plic

Demonstruje výměnu krevních plynů $O_2$ a $CO_2$ v plicích, která je ovlivněna množstvím parametrů (teplota, BEox, atd.). Je možné rozdělit plíce na několik částí s různými poměry ventilace/perfůze, což umožňuje experimenty vysvětlující jak a proč mají reálné plíce nerovnoměrné rozdělení těchto parametrů. Model též umožňuje zpětně agregovat rozdělené plíce do jediné jednotky beze změny chování (tato agregace změní míru ventilace mrtvého prostoru a pravolevých perfůzních zkratů).

<div class="w3-row">
<div class="w3-third">

### Ukazatele

**Smíšená arteriální krev**
<bdl-chartjs-barplot id="id11" fromid="idfmi"  refindex="1"  extremelimits="0,1"  normallimits="0.93,0.99" responsive="true" labels="SAT" initialdata="0.97"></bdl-chartjs-barplot> 
<bdl-chartjs-barplot  id="id12"  fromid="idfmi"  refindex="0"  extremelimits="0,150" labels="pO2" normallimits="90,110"  initialdata="94.01"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>
<bdl-chartjs-barplot  id="id13"  fromid="idfmi"  refindex="2"  extremelimits="0,75" labels="pCO2" normallimits="35,45"  initialdata="40"  convertors="1,133.322" responsive="true"></bdl-chartjs-barplot>
<bdl-chartjs-barplot  id="id11"  fromid="idfmi"  refindex="3"  extremelimits="7,8" labels="pH" normallimits="7.38,7.42"  initialdata="7.4"  convertors="1,1" responsive="true"></bdl-chartjs-barplot>


</div>
<div class="w3-twothird">

<bdl-fmi id="idfmi" src="Physiolibrary_Fluid_Examples_BloodGasesTransport_BloodyMary.js" fminame="Physiolibrary_Fluid_Examples_BloodGasesTransport_BloodyMary" tolerance="0.000001" starttime="0" fstepsize="0.1" guid="{9cf9ddee-a4c0-4744-9f83-dc25801100f8}" valuereferences="637536357,905971815,637536358,905971812,905971811,905971620,905971622,905971621,905971619,905971618" valuelabels="arterial.pO2,arterial.sO2,arterial.pCO2,arterial.pH,arterial.pressure,alveolarUnit[1].pO2,alveolarUnit[1].sO2,alveolarUnit[1].pCO2,alveolarUnit[1].pH,alveolarUnit[1].pressure" inputs="" inputlabels=""></bdl-fmi>

<bdl-chartjs-time id="id10" width="300" height="200" fromid="idfmi" labels="arterial pO2" initialdata="" refindex="0" refvalues="1" convertors="1,133.322"></bdl-chartjs-time>
<bdl-chartjs-time id="id10" width="300" height="200" fromid="idfmi" labels="alveoral pO2" initialdata="" refindex="5" refvalues="1" convertors="1,133.322"></bdl-chartjs-time>



</div>
</div>