<style>
img[alt^="image"] {max-width:20px;}
img[alt^="bigimage"] {  max-height:60px}
</style>
## 1.3 Simulace vstřebávání železa v tenkém střevě (duodenu) 
<button class="w3-right w3-button w3-theme" onclick="document.getElementById('legenda').style.display='block'">Zobraz legendu</button>

Simulátor spusťte/zastavte tlačítky níže a zkuste zodpovědět otázky v sekci 1.3.2. Během simulace můžete měnit **parametr** koncentrace železa v potravě, který se kontinuálně vstřebává během simulace. Tlačítkem vpravo zobrazíte legendu. 

<div class="w3-row">
<div class="w3-third">

<bdl-fmi id="idfmi" src="FeMetabolism_FeMetabolismModel.js" fminame="FeMetabolism_FeMetabolismModel" tolerance="0.000001" starttime="0" fstepsize="0.1" guid="{aa4a8828-d593-44a2-bf1c-a1ee60c93b33}" valuereferences="637534208,637534209,100663316,16777260,33554448,33554449,637534229,905969689,637534232" valuelabels="Fe_liv,Fe_spl,Fe_duo_intake,Fe_food,Fe_duo_2,Fe_duo_3,Fe_duo_in_food,Fe_duo_unused,Fe_duo_out_loss" inputs="id1,16777260,1,1" inputlabels="Fe_food"></bdl-fmi>
</div>
<div class="w3-rest">

||| 
|-------------|-------|
| Koncentrace železa v potravě [$\frac{\mu g}{h}$] | <bdl-range id="id1" title="" min="0" max="1000" default="219" step="1"></bdl-range> 
</div>
</div>
<div class="w3-row">

<div class="w3-col s8">
Plné šipky představují tok, tj. reálný přenos, dané látky (například atomu/molekuly/proteinu/atd.). Barva šipky odpovídá přenášené látce, tloušťka šipky reflektuje velikost toku v daném směru. Přerušované šipky značí regulaci a to jak pozitivní (aktivační - šipka s ostrým hrotem) a nebo negativní (inhibiční - šipka s tupým koncem). Transparence přerušované šipky odpovídá síle interakce. Čím je regulační šipka průsvitnější, tím je daná interakce slabší a naopak. Indikátor ve tvaru půlkruhu označuje množství dané látky, číslo pod indikátorem představuje relativní množství vztažené k fyziologické normě (&gt;1: více než norma, &lt;1: méně než norma).

<bdl-animate-adobe src="DuodenumFinalObrazovka1.js" width="800" height="600" name="DuodenumFinalObrazovka1" fromid="idfmi"></bdl-animate-adobe>
<bdl-bind2a findex="3" aname="SipkaCervena1_anim" amin="0" amax="100" fmin="1" fmax="1000"></bdl-bind2a>
<bdl-bind2a findex="3" aname="Merak1_anim" amin="0" amax="99" fmin="0" fmax="1000"></bdl-bind2a>
<bdl-bind2a-text findex="3" aname="Hodnota1_text"></bdl-bind2a-text>

<bdl-bind2a findex="6" aname="SipkaCervena2_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaZlutaH_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaFialovaHorni_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaModra_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaModraModryKanalSpodni_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaCervena3_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="CervenaPoolIn_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>

<bdl-bind2a findex="8" aname="CervenaKos_anim" amin="0" amax="100" fmin="0" fmax="0.5"></bdl-bind2a>
<bdl-bind2a-text findex="8" aname="Hodnota5_text"></bdl-bind2a-text>

<bdl-bind2a findex="7" aname="Merak2Cerveny_anim" amin="0" amax="99" fmin="0" fmax="16"></bdl-bind2a>
<bdl-bind2a findex="7" aname="SipkaSeda_anim" amin="0" amax="100" fmin="0" fmax="16"></bdl-bind2a>
<bdl-bind2a-text findex="7" aname="Hodnota2Cerveny_text"></bdl-bind2a-text>

<bdl-bind2a findex="4" aname="Fe2Skupina_anim" amin="100" amax="0" fmin="0.5" fmax="1.5"></bdl-bind2a>
<bdl-bind2a findex="4" aname="KanalCerveny_anim" amin="0" amax="99" fmin="0.5" fmax="1.5"></bdl-bind2a>
<bdl-bind2a findex="4" aname="KanalModry_anim" amin="0" amax="99" fmin="0.5" fmax="1.5"></bdl-bind2a>
<bdl-bind2a findex="4" aname="CervenaSrafovanaZastaveni1_anim" amin="99" amax="0" fmin="0.5" fmax="1.5"></bdl-bind2a>
<bdl-bind2a findex="4" aname="Merak4_anim" amin="0" amax="99" fmin="0.5" fmax="1.5"></bdl-bind2a>

<bdl-bind2a-text findex="4" aname="Hodnota4_text"></bdl-bind2a-text>
</div>
<div class="w3-rest">

<div id="legenda" class="w3-card w3-small" style="display:none;z-index:1;position:absolute;top:20px;right:10px;width:400px;background-color:white">
<button class="w3-button w3-theme" onclick="document.getElementById('legenda').style.display='none'">Skryj legendu <i class="fa fa-close"></i></button>

### 1.3.2 Vizualizace
Vizualizace simulátoru shrnuje schématicky předchozí fakta:

|Schéma|Popis/funkce|
|---|---|
|![bigimagefoodiron](simfoodiron.png)|__1. Příjem železa v potravě__ ve formě nehemové ![image1](image1.jpg)Fe<sup>2+</sup>, ![image2](image2.jpg)Fe<sup>3+</sup> a hemové.|
|![bigimagefoodiron](simnonhem.png)|__2. Nehemové železo__ ![image1](image1.jpg) Fe<sup>2+</sup> se vstřebává přes DMT1, ![image2](image2.jpg) Fe <sup>3+</sup> se katalyzuje na Fe<sup>2+</sup> pomocí Dcytb.|
|![bigimagefoodiron](simhem.png) |__3. Hemové železo__ se přenáší do buňky, kde se pomocí HO uvolňuje Fe<sup>2+</sup> |
|![bigimagefoodiron](simironout.png) |__4. Ztráty__ železa vzniklé nevstřebáním|
|![bigimagefoodiron](simironpool.png) |__5.Pohotový pool, sdílená zásoba Fe<sup>2+</sup>__ která reguluje (inhibuje) transportér DMT1 a přenašeč hemu|

### 1.3.3 Ikony
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

</div>


### 1.3.1 Otázky
Kontrolní otázky, vyzkoušejte v simulátoru a zodpovězte tyto otázky
<bdl-quiz question="Sledujte reakci DMT1 a přenašeče hemu v reakci na množství železa v enterocytu a v potravě" answers="DMT1 se rozšíří při poklesu Fe2+ | DMT1 se zúží při poklesu Fe2+" correctoptions="true|false" explanations="pool Fe2+ inhibuje DMT1|pool Fe2+ inhibuje DMT1, při poklesu Fe2+ se rozšíří"></bdl-quiz>
<bdl-quiz question="Proč dochází k zpětné inhibici transportérů železa v závislosti na obsahu železa v buňce?" answers="aby se železo nehromadilo v buňce| Železo se ztrácí konstantí rychlostí" correctoptions="true|false" explanations="Ano, buňka si tak reguluje příjem železa pokud je ho uvnitř buňky dost.|je sice pravda, ale nevysvětluje otázku."></bdl-quiz>
<bdl-quiz question="V jakém případě dochází k vyšším ztrátám vstřebaného železa a proč?" answers="Při krvácení, železo je součást hemoglobinu v krvi|Pití čaje, snižuje vstřebávání železa" correctoptions="true|false" explanations="Ano|Pití čaje může inhibovat vstřebávání železa, ale nemá výrazný vliv na ztráty již vstřebaného železa."></bdl-quiz>
</div>
</div>
</div>
