<style>
img[alt^="image"] {max-width:20px;}
img[alt^="bigimage"] {  max-height:60px}
tbody tr:nth-child(even){background-color:#f1f1f1}
</style>
# 3.2 Simulace příjmu a výdeje železa z enterocytu
<button class="w3-right w3-button w3-theme" onclick="document.getElementById('legenda').style.display='block'">Zobraz legendu</button>

Regulace příjmu Fe a ukládání do ferritinu a výdeje z enterocytu. Vyzkoušejte v simulátoru a zodpovězte otázky.


<div class="w3-row">
<div class="w3-third">

<bdl-fmi id="idfmi" src="FeMetabolism_FeMetabolismModel.js" fminame="FeMetabolism_FeMetabolismModel" tolerance="0.000001" starttime="0" fstepsize="0.5" guid="{ff6d8a55-f24a-4855-bbf0-86edcafe471e}" valuereferences="637534208,637534209,100663315,16777260,33554448,33554449,637534228,905969688,637534231,16777271,16777272,16777267,637534233,637534237,33554439,33554443,637534230,637534257,33554447" valuelabels="Fe_liv,Fe_spl,Fe_duo_intake,Fe_food,Fe_duo_2,Fe_duo_3,Fe_duo_in_food,Fe_duo_unused,Fe_duo_out_loss,to_ferritin_rate,from_ferritin_rate,Fpn_duo_knockout,Fpn_duo_in_1,Fpn_duo_in,Fpn_duo_mRNA,Fpn_duo,Fe_duo_out_ser,Fe_ser_in_duo,Fe_ser" inputs="id1,16777260,1,1;id4,16777267,1,1" inputlabels="Fe_food,Fpn_duo_knockout"></bdl-fmi>

</div>
<div class="w3-rest">

||| 
|-------------|-------|
| Koncentrace železa v potravě [$\frac{\mu g}{h}$] | <bdl-range id="id1" title="" min="0" max="1000" default="219" maxlength="5" step="1"></bdl-range> |
| Knockout genu pro ferroportin(Fpn) | <bdl-checkbox id="id4" titlemin="gen Fpn je knockoutován (neaktivní)" titlemax="gen Fpn je aktivní" default="true"></bdl-checkbox>  |
</div>
</div>
<div class="w3-row">

<div class="w3-col s8">

<bdl-animate-adobe src="DuodenumFinalObrazovka3.js" width="800" height="600" name="DuodenumFinalObrazovka3" fromid="idfmi"></bdl-animate-adobe>

<bdl-bind2a findex="3" aname="SipkaCervena1_anim" amin="0" amax="100" fmin="1" fmax="1000"></bdl-bind2a>
<bdl-bind2a findex="3" aname="Merak1_anim" amin="0" amax="99" fmin="0" fmax="1000"></bdl-bind2a>
<bdl-bind2a-text findex="3" aname="Hodnota1_text" convertor="1,219"></bdl-bind2a-text>

<bdl-bind2a findex="6" aname="SipkaCervena2_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaZlutaH_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaFialovaHorni_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaModra_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaModraModryKanalSpodni_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaCervena3_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="CervenaPoolIn_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="Hemox_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>

<bdl-bind2a findex="8" aname="CervenaKos_anim" amin="0" amax="100" fmin="0" fmax="1.1"></bdl-bind2a>
<bdl-bind2a-text findex="8" aname="Hodnota5_text" convertor="1,0.273"></bdl-bind2a-text>
<bdl-bind2a findex="8" aname="Merak5_anim" amin="0" amax="99" fmin="0" fmax="1.1"></bdl-bind2a>


<bdl-bind2a findex="7" aname="Merak2Cerveny_anim" amin="0" amax="99" fmin="0" fmax="14.4"></bdl-bind2a>
<bdl-bind2a findex="7" aname="SipkaSeda_anim" amin="0" amax="100" fmin="0" fmax="14.4"></bdl-bind2a>
<bdl-bind2a-text findex="7" aname="Hodnota2Cerveny_text" convertor="1,3.612"></bdl-bind2a-text>

<bdl-bind2a findex="4" aname="Fe2Skupina_anim" amin="100" amax="0" fmin="0.5" fmax="2.97"></bdl-bind2a>
<bdl-bind2a findex="4" aname="KanalCerveny_anim" amin="0" amax="99" fmin="0.5" fmax="2.97"></bdl-bind2a>
<bdl-bind2a findex="4" aname="KanalModry_anim" amin="0" amax="99" fmin="0.5" fmax="2.97"></bdl-bind2a>
<bdl-bind2a findex="4" aname="CervenaSrafovanaZastaveni1_anim" amin="99" amax="0" fmin="0.5" fmax="2.97"></bdl-bind2a>
<bdl-bind2a findex="4" aname="Merak4_anim" amin="0" amax="99" fmin="0.5" fmax="2.97"></bdl-bind2a>

<bdl-bind2a-text findex="4" aname="Hodnota4_text" convertor="1,0.7428"></bdl-bind2a-text>

<bdl-bind2a findex="10" aname="SipkaCervenoFialova2_anim" amin="0" amax="100" fmin="0" fmax="10"></bdl-bind2a>
<bdl-bind2a findex="9" aname="SipkaCervenoFialova1_anim" amin="0" amax="100" fmin="0" fmax="10"></bdl-bind2a>
<bdl-bind2a findex="5" aname="Merak3_anim" amin="0" amax="100" fmin="0" fmax="10"></bdl-bind2a>
<bdl-bind2a-text findex="5" aname="Hodnota3_text" convertor="1,2.228"></bdl-bind2a-text>
<bdl-bind2a findex="5" aname="Fe3Skupina_anim" amin="0" amax="100" fmin="0" fmax="10"></bdl-bind2a>

<bdl-bind2a findex="12" aname="SipkaRuzova2_anim" amin="0" amax="100" fmin="0.026" fmax="0.028"></bdl-bind2a>
<bdl-bind2a findex="13" aname="SipkaFialovaSrafovana_anim" amin="0" amax="100" fmin="0.02" fmax="0.05"></bdl-bind2a>
<bdl-bind2a findex="16" aname="SipkaFialovaSpodni3_anim" amin="0" amax="100" fmin="0.1" fmax="3.5"></bdl-bind2a>
<bdl-bind2a findex="15" aname="KanalFialovy_anim" amin="99" amax="0" fmin="0.03" fmax="1.3"></bdl-bind2a>
<bdl-bind2a findex="11" aname="Semafor_anim" amin="4" amax="5" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a-text findex="13" aname="Hodnota6_text" convertor="1,0.0412"></bdl-bind2a-text>
<bdl-bind2a findex="18" aname="children.587.FeTransferin_anim" amin="0" amax="200" fmin="0.2" fmax="3"></bdl-bind2a>
<bdl-bind2a-text findex="18" aname="Hodnota9_text" convertor="1,1.51"></bdl-bind2a-text>
<bdl-bind2a findex="16" aname="CervenaVSipkaVehicle1_anim" amin="0" amax="100" fmin="0.1" fmax="3.5"></bdl-bind2a>



</div>
<div class="w3-rest">

<bdl-chartjs-time id="id10" width="300" height="200" fromid="idfmi" labels="Fpn duo" initialdata="" refindex="15" refvalues="1" maxdata="1024"></bdl-chartjs-time>
<!--bdl-chartjs-time id="id11" width="300" height="200" fromid="idfmi" labels="duoin" initialdata="" refindex="13" refvalues="1" maxdata="1024"></bdl-chartjs-time>
<bdl-chartjs-time id="id12" width="300" height="200" fromid="idfmi" labels="mrna" initialdata="" refindex="14" refvalues="1" maxdata="1024"></bdl-chartjs-time>
<bdl-chartjs-time id="id13" width="300" height="200" fromid="idfmi" labels="duo" initialdata="" refindex="15" refvalues="1" maxdata="1024"></bdl-chartjs-time>
<bdl-chartjs-time id="id14" width="300" height="200" fromid="idfmi" labels="Fe_duo_out_ser" initialdata="" refindex="16" refvalues="1" maxdata="1024"></bdl-chartjs-time>
<bdl-chartjs-time id="id13" width="300" height="200" fromid="idfmi" labels="koncentrace Fe v krvi" initialdata="" refindex="18" refvalues="1" maxdata="1024" xlabel="čas (hodiny)" ylabel="množství orientační (ug)"></bdl-chartjs-time-->


## Kontrolní otázky
* Vyzkoušejte si, jak reaguje počet Fpn transportérů (míra otevření) na množství železa v buňce.
* Vyzkoušejte si hypotetický genový knockout pro Fpn.
* Sledujte vývoj saturace transferinu (~ množství železa v séru) se změnou příjmu železa v potravě

<bdl-quiz question="Co má za následek genový knockout Fpn? Jak se změní koncentrace železa v enterocytu a v séru?" answers="Počet ferroportinu v membráně se sníží. Železo se hromadí v enterocytu a jeho množství v séru klesá|Počet ferroportinu se v membraně zvýší. Železo se transportuje z enterocytu do krve" correctoptions="true|false" explanations="správná odpověď na tuto otázku|nesprávná odpověď. Toto se děje pokud je gen aktivní."></bdl-quiz>
<bdl-quiz question="Jak vypočítáme rovnovážnou konstantu?" answers="podíl koncentrací|součin koncentrací" correctoptions="true|false" explanations="Ano|Ne"></bdl-quiz>
<bdl-quiz question="Která rychlostní konstanta bude větší a jaký stav bude buňka preferovat? A proč?" answers="1. Přítok železa do ferritinu. |2. Odtok železa z ferritinu." correctoptions="true|false" explanations="vyšší koncentrace Fe2+ je pro buňku toxická. Buňka se snaží tedy ukládat železo do ferritinu|Odtok železa z ferritinu udržuje buňka nižší."></bdl-quiz>
</div>
</div>
</div>

<div id="legenda" class="w3-card w3-small w3-padding" style="display:none;z-index:1;position:absolute;top:20px;right:10px;width:500px;background-color:white">
<button class="w3-button w3-theme w3-right" onclick="document.getElementById('legenda').style.display='none'">Skryj legendu <i class="fa fa-close w3-large"></i></button>

## Vizualizace
Vizualizace simulátoru shrnuje schématicky předchozí fakta:

|Schéma|Popis/funkce|
|---|---|
|![bigimagefoodiron](simfoodiron.png)|__1. Příjem železa v potravě__ ve formě nehemové ![image1](image1.jpg)Fe<sup>2+</sup>, ![image2](image2.jpg)Fe<sup>3+</sup> a hemové.|
|![bigimagefoodiron](simnonhem.png)|__2. Nehemové železo__ ![image1](image1.jpg) Fe<sup>2+</sup> se vstřebává přes DMT1, ![image2](image2.jpg) Fe <sup>3+</sup> se katalyzuje na Fe<sup>2+</sup> pomocí Dcytb.|
|![bigimagefoodiron](simhem.png) |__3. Hemové železo__ se přenáší do buňky, kde se pomocí HO uvolňuje Fe<sup>2+</sup> |
|![bigimagefoodiron](simironout.png) |__4. Ztráty__ železa vzniklé nevstřebáním|
|![bigimagefoodiron](simironpool.png) |__5.Pohotový pool, sdílená zásoba Fe<sup>2+</sup>__ která reguluje (inhibuje) transportér DMT1 a přenašeč hemu|
|![bigimagefoodiron](simironferritin.png) |__6.Regulace příjmu a výdeje Fe<sup>2+</sup> ve ferritinu__

## Ikony
Schémata a vizualizace obsahují tyto ikony:

|Ikona|Definice|Popis/funkce|
|---|---|---|
|![image1](image1.jpg)|Fe<sup>2+</sup>|Dvojmocné železo|
|![image2](image2.jpg)|Fe<sup>3+</sup>|Trojmocné železo|
|![image3](image3.jpg)|H<sup>+</sup>|Vodíkový iont|
|![image4](image4.jpg)|Hem|Porfyrinový kruh s centrálním atomem Fe<sup>2+</sup>|
|![image5](image5.jpg)|DMT1|Transportér divalentních kovů, symport Fe<sup>2+</sup> a H<sup>+</sup>|
|![image6](image6.jpg)|Proteinový přenašeč hemu|Proteinový přenašeč hemu (neznámý), přenáší hem z luminální strany duodena do enterocytu.|
|![image7](image7.jpg)|Dcytb|Duodenální cytochrom b reduktáza: redukuje Fe<sup>3+</sup> na Fe<sup>2+</sup>, elektrony dodává askorbát.|
|![image8](image8.jpg)|HO|Hemoxygenáza, uvolňuje Fe<sup>2+</sup> z hemu za vzniku CO a biliverdinu|
|![image9](image9.jpg)|Ztráty železa|Ztráty železa vzniklé nevstřebáním nebo ztrátou buněk, které železo obsahují|
|![image10](image10.jpg)|Pool Fe<sup>2+</sup>|Pohotový pool Fe<sup>2+</sup> železa v buňce, míra zaplnění odpovídá množství (zde 6/8)|
|![imageferritin](imageferritin.png)|Ferritin| Ferritin složený z a) proteinové části apoferitinu (oranžová) a b) iontů Fe3+. Funguje jako zásobárna Fe.|

</div>