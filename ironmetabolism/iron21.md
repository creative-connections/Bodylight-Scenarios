<style>
img[alt^="image"] {max-width:20px;}
img[alt^="bigimage"] {  max-height:60px}
tbody tr:nth-child(even){background-color:#f1f1f1}
</style>
<div class="w3-row">
<div class="w3-col s12 m7 l7">

<bdl-fmi id="idfmi" mode="" src="FeMetabolism_FeMetabolismModel.js" fminame="FeMetabolism_FeMetabolismModel" tolerance="0.000001" starttime="0" fstepsize="0.01" fpslimit="5" guid="{9aa10b27-427c-44c9-a381-5815d5706331}" valuereferences="637534208,637534209,100663316,16777260,33554448,33554449,637534229,905969689,637534232,16777271,100663313" valuelabels="Fe_liv,Fe_spl,Fe_duo_intake,Fe_food,Fe_duo_2,Fe_duo_3,Fe_duo_in_food,Fe_duo_unused,Fe_duo_out_loss,to_ferritin_rate,from_ferritin_rate" inputs="id1,16777260,1,1;id2,16777271,1,1;id3,100663313,1,1" inputlabels="Fe_food,to_ferritin_rate,from_ferritin_rate" showtime="true" showtimemultiply="3600"></bdl-fmi>


<bdl-animate-adobe src="DuodenumFinalObrazovka2.js" width="824" height="824" name="DuodenumFinalObrazovka2" fromid="idfmi" responsive="true"></bdl-animate-adobe>
<bdl-bind2a findex="3" aname="children.0.SipkaCervena1_anim" amin="0" amax="159" fmin="0" fmax="1000"></bdl-bind2a>
<bdl-bind2a findex="3" aname="Merak1_anim" amin="0" amax="99" fmin="0" fmax="1000"></bdl-bind2a>
<bdl-bind2a-text findex="3" aname="Hodnota1_text" convertor="1,219"></bdl-bind2a-text>
<bdl-bind2a findex="6" aname="children.0.SipkaCervena2_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaZlutaH_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="children.0.SipkaZlutaH1_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaFialovaHorni_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaModra_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaModraModryKanalSpodni_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaCervena3_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="CervenaPoolIn_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="Hemox_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="DcytB_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="8" aname="CervenaKos_anim" amin="0" amax="159" fmin="0.1" fmax="0.4"></bdl-bind2a>
<bdl-bind2a-text findex="8" aname="Hodnota5_text" convertor="10,2.73"></bdl-bind2a-text>
<bdl-bind2a findex="8" aname="Merak5_anim" amin="0" amax="99" fmin="0.1" fmax="0.4"></bdl-bind2a>
<bdl-bind2a findex="7" aname="Merak2Cerveny_anim" amin="0" amax="99" fmin="0" fmax="16"></bdl-bind2a>
<bdl-bind2a findex="7" aname="SipkaSeda_anim" amin="0" amax="100" fmin="0" fmax="16"></bdl-bind2a>
<bdl-bind2a-text findex="7" aname="Hodnota2Cerveny_text" convertor="1,3.612"></bdl-bind2a-text>
<bdl-bind2a findex="4" aname="Fe2Skupina_anim" amin="100" amax="0" fmin="0.5" fmax="1.5"></bdl-bind2a>
<bdl-bind2a findex="4" aname="children.0.KanalCerveny_anim" amin="0" amax="99" fmin="0.64" fmax="0.88"></bdl-bind2a>
<bdl-bind2a findex="4" aname="children.0.KanalModry_anim" amin="0" amax="99" fmin="0.64" fmax="0.88"></bdl-bind2a>
<bdl-bind2a findex="4" aname="children.0.CervenaSrafovanaZastaveni1_anim" amin="159" amax="0" fmin="0.5" fmax="1.5"></bdl-bind2a>
<bdl-bind2a findex="4" aname="children.0.CervenaSrafovanaZastaveni2_anim" amin="159" amax="0" fmin="0.5" fmax="1.5"></bdl-bind2a>
<bdl-bind2a findex="4" aname="Merak4_anim" amin="0" amax="99" fmin="0.5" fmax="1.5"></bdl-bind2a>
<bdl-bind2a-text findex="4" aname="Hodnota4_text" convertor="1,0.7428"></bdl-bind2a-text>
<bdl-bind2a findex="10" aname="SipkaCervenoFialova2_anim" amin="0" amax="159" fmin="0" fmax="10"></bdl-bind2a>
<bdl-bind2a findex="9" aname="SipkaCervenoFialova1_anim" amin="0" amax="159" fmin="0" fmax="10"></bdl-bind2a>
<bdl-bind2a findex="5" aname="Merak3_anim" amin="0" amax="99" fmin="0.8" fmax="3.5"></bdl-bind2a>
<bdl-bind2a-text findex="5" aname="Hodnota3_text" convertor="1,2.2"></bdl-bind2a-text>
<bdl-bind2a findex="5" aname="children.0.Fe3Skupina_anim" amin="0" amax="159" fmin="0.8" fmax="3.5"></bdl-bind2a>

</div>
<div class="w3-col s12 m5 l5 w3-justify">

<button class="w3-right w3-button w3-theme" onclick="document.getElementById('legenda').style.display='block'">Zobraz legendu</button>

**Úkoly:**
  1. Nastartujte simulátor
  2. Regulujte příjem/výdej železa z ferritinu
  3. Můžete nastavit dietární příjem železa
  4. Odpovězte na otázky:

<div class="w3-small">

|Parametry|| 
|-------------:|-------|
| Koncentrace železa v potravě | <bdl-range id="id1" title="" min="0" max="1000" default="219" step="1" listenkey="true"></bdl-range> $\frac{\mu g}{h}$ |
| Přítok železa do ferritinu v buňce | <bdl-range id="id2" title="" min="0" max="10" default="3" step="0.1"></bdl-range>  |
| Odtok železa z ferritinu v buňce | <bdl-range id="id3" title="" min="0" max="10" default="0.3" step="0.1"></bdl-range>  |
</div>

**Otázky**
<bdl-quiz id="q1" type="choice2" question="Jak se mění rovnováha mezi množstvím železa ve ferritinu (Fe3+) a v pohotovém poolu (Fe2+)?" answers="zvýšený Fe3+ svýší i koncentraci Fe2+|zvýšený Fe3+ sníží koncentraci Fe2+" correctoptions="true|false" explanations="|" buttontitle="zkontrolovat odpověď"></bdl-quiz>

<bdl-quiz id="q2" type="choice2" question="Jak vypočítáme rovnovážnou konstantu?" answers="podíl koncentrací|součin koncentrací" correctoptions="true|false" explanations="Ano|Ne" buttontitle="zkontrolovat odpověď"></bdl-quiz>

<bdl-quiz id="q3" type="choice2" question="Která rychlostní konstanta bude větší a jaký stav bude buňka preferovat? A proč?" answers="1. Přítok železa do ferritinu. |2. Odtok železa z ferritinu." correctoptions="true|false" explanations="vyšší koncentrace Fe2+ je pro buňku toxická. Buňka evolučně preferuje ukládání železa do ferritinu.|vyšší koncentrace Fe2+ je pro buňku toxická. Buňka evolučně preferuje ukládání železa do ferritinu."  buttontitle="zkontrolovat odpověď"></bdl-quiz>

<bdl-quiz-control ids="q1,q2,q3"></bdl-quiz-control>
</div>
</div>

<div id="legenda" class="w3-card w3-small w3-padding" style="display:none;z-index:1;position:absolute;top:20px;right:10px;width:500px;background-color:white">
<button class="w3-button w3-theme w3-right" onclick="document.getElementById('legenda').style.display='none'">Skryj legendu <i class="fa fa-close w3-large"></i></button>

|Schéma|Popis/funkce|
|---|---|
|![bigimagefoodiron](simfoodiron.png)|__1. Příjem železa v potravě__ ve formě nehemové ![image1](image1.jpg)Fe<sup>2+</sup>, ![image2](image2.jpg)Fe<sup>3+</sup> a hemové.|
|![bigimagefoodiron](simnonhem.png)|__2. Nehemové železo__ ![image1](image1.jpg) Fe<sup>2+</sup> se vstřebává přes DMT1, ![image2](image2.jpg) Fe <sup>3+</sup> se katalyzuje na Fe<sup>2+</sup> pomocí Dcytb.|
|![bigimagefoodiron](simhem.png) |__3. Hemové železo__ se přenáší do buňky, kde se pomocí HO uvolňuje Fe<sup>2+</sup> |
|![bigimagefoodiron](simironout.png) |__4. Ztráty__ železa vzniklé nevstřebáním|
|![bigimagefoodiron](simironpool.png) |__5.Pohotový pool, sdílená zásoba Fe<sup>2+</sup>__ která reguluje (inhibuje) transportér DMT1 a přenašeč hemu|
|![bigimagefoodiron](simironferritin.png) |__6.Regulace příjmu a výdeje Fe<sup>2+</sup> ve ferritinu__

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

<!-- konec -->
