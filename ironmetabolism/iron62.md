
<style>
img[alt^="image"] {max-width:20px;}
img[alt^="bigimage"] {  max-height:60px}
tbody tr:nth-child(even){background-color:#f1f1f1}
</style>

<div class="w3-row">
<div class="w3-col s12 m7 l7">
<bdl-fmi id="idfmi" mode="" src="FeMetabolism_FeMetabolismModel.js" fminame="FeMetabolism_FeMetabolismModel" tolerance="0.000001" starttime="0" fstepsize="0.02" fpslimit="60" guid="{9aa10b27-427c-44c9-a381-5815d5706331}" valuereferences="637534208,637534209,100663316,16777260,33554448,33554449,637534229,905969689,637534232,16777271,100663313,16777267,637534234,637534238,33554439,33554443,637534231,637534258,33554447,637534230,637534237,33554434,33554432,16777266,33554436,637534268,637534264" valuelabels="Fe_liv,Fe_spl,Fe_duo_intake,Fe_food,Fe_duo_2,Fe_duo_3,Fe_duo_in_food,Fe_duo_unused,Fe_duo_out_loss,to_ferritin_rate,from_ferritin_rate,Fpn_duo_knockout,Fpn_duo_in_1,Fpn_duo_in,Fpn_duo_mRNA,Fpn_duo,Fe_duo_out_ser,Fe_ser_in_duo,Fe_ser,Fe_duo_in_ser,Fpn_duo_out_2,LPS,hep,hep_knockout,Il6,Il6_in,hep_in" inputs="id1,16777260,1,1;id4,16777267,1,1;id5,16777266,1,1,t;id6,33554434,1,1,t" inputlabels="Fe_food,Fpn_duo_knockout,hep_knockout,LPS"></bdl-fmi>
<bdl-animate-adobe src="DuodenumFinalObrazovka6.js" width="824" height="824" name="DuodenumFinalObrazovka6" fromid="idfmi" responsive="true"></bdl-animate-adobe>
<bdl-bind2a findex="3" aname="SipkaCervena1_anim" amin="0" amax="100" fmin="1" fmax="1000"></bdl-bind2a>
<bdl-bind2a findex="3" aname="Merak1_anim" amin="0" amax="99" fmin="0" fmax="1000"></bdl-bind2a>
<bdl-bind2a-text findex="3" aname="Hodnota1_text" convertor="1,219"></bdl-bind2a-text>

<bdl-bind2a findex="6" aname="SipkaCervena2_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaZlutaH_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaZlutaH1_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaFialovaHorni_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaModra_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaModraModryKanalSpodni_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="SipkaCervena3_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="CervenaPoolIn_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>
<bdl-bind2a findex="6" aname="Hemox_anim" amin="0" amax="100" fmin="0.91" fmax="2.74"></bdl-bind2a>

<bdl-bind2a findex="8" aname="CervenaKos_anim" amin="0" amax="100" fmin="0" fmax="1.1"></bdl-bind2a>
<bdl-bind2a-text findex="8" aname="Hodnota5_text" convertor="1,0.273"></bdl-bind2a-text>
<bdl-bind2a findex="8" aname="Merak5_anim" amin="0" amax="99" fmin="0" fmax="1.1"></bdl-bind2a>


<bdl-bind2a findex="7" aname="Merak2Cerveny_anim" amin="0" amax="99" fmin="0" fmax="14.4"></bdl-bind2a>
<bdl-bind2a findex="7" aname="SipkaSeda_anim" amin="0" amax="100" fmin="0" fmax="14.4"></bdl-bind2a>
<bdl-bind2a-text findex="7" aname="Hodnota2Cerveny_text" convertor="1,3.612"></bdl-bind2a-text>

<bdl-bind2a findex="4" aname="children.0.Fe2Skupina_anim" amin="158" amax="0" fmin="0.5" fmax="2.97"></bdl-bind2a>


<bdl-bind2a findex="4" aname="KanalCerveny_anim" amin="0" amax="99" fmin="0.5" fmax="2.97"></bdl-bind2a>
<bdl-bind2a findex="4" aname="KanalModry_anim" amin="0" amax="99" fmin="0.5" fmax="2.97"></bdl-bind2a>
<bdl-bind2a findex="4" aname="CervenaSrafovanaZastaveni1_anim" amin="99" amax="0" fmin="0.5" fmax="2.97"></bdl-bind2a>
<bdl-bind2a findex="4" aname="children.0.CervenaSrafovanaZastaveni2_anim" amin="99" amax="0" fmin="0.5" fmax="2.97"></bdl-bind2a>
<bdl-bind2a findex="4" aname="Merak4_anim" amin="0" amax="99" fmin="0.5" fmax="2.97"></bdl-bind2a>
<bdl-bind2a findex="6" aname="children.0.DcytB_anim" amin="0" amax="159" fmin="0.91" fmax="2.74"></bdl-bind2a>

<bdl-bind2a-text findex="4" aname="Hodnota4_text" convertor="1,0.7428"></bdl-bind2a-text>

<bdl-bind2a findex="10" aname="SipkaCervenoFialova2_anim" amin="0" amax="100" fmin="0" fmax="10"></bdl-bind2a>
<bdl-bind2a findex="9" aname="SipkaCervenoFialova1_anim" amin="0" amax="100" fmin="0" fmax="10"></bdl-bind2a>
<bdl-bind2a findex="5" aname="Merak3_anim" amin="0" amax="100" fmin="0" fmax="10"></bdl-bind2a>
<bdl-bind2a-text findex="5" aname="Hodnota3_text" convertor="1,2.228"></bdl-bind2a-text>
<bdl-bind2a findex="5" aname="children.0.Fe3Skupina_anim" amin="0" amax="159" fmin="0" fmax="10"></bdl-bind2a>


<bdl-bind2a findex="14" aname="SipkaRuzova2_anim" amin="0" amax="100" fmin="0.026" fmax="0.028"></bdl-bind2a>
<bdl-bind2a findex="13" aname="SipkaFialovaSrafovana_anim" amin="0" amax="100" fmin="0.02" fmax="0.05"></bdl-bind2a>
<bdl-bind2a findex="16" aname="SipkaFialovaSpodni3_anim" amin="0" amax="100" fmin="0.5" fmax="4"></bdl-bind2a>
<bdl-bind2a findex="16" aname="children.0.CervenaVSipkaVehicle1_anim_1" amin="0" amax="159" fmin="0.5" fmax="4"></bdl-bind2a>
<bdl-bind2a findex="16" aname="children.0.SipkaCervenaSpodni_anim" amin="0" amax="159" fmin="0.5" fmax="4"></bdl-bind2a>
<bdl-bind2a findex="16" aname="children.0.Hep_anim" amin="0" amax="159" fmin="0.5" fmax="4"></bdl-bind2a>


<bdl-bind2a findex="15" aname="KanalFialovy_anim" amin="99" amax="0" fmin="0.03" fmax="1.3"></bdl-bind2a>
<bdl-bind2a findex="11" aname="Semafor_anim" amin="4" amax="5" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a-text findex="13" aname="Hodnota6_text" convertor="1,0.0412"></bdl-bind2a-text>
<bdl-bind2a findex="18" aname="children.0.children.628.FeTransferin_anim" amin="0" amax="159" fmin="0.2" fmax="3"></bdl-bind2a>

<bdl-bind2a-text findex="18" aname="Hodnota9_text" convertor="1,1.51"></bdl-bind2a-text>
<bdl-bind2a findex="18" aname="children.0.Merak9_anim" amin="0" amax="99" fmin="0.2" fmax="3"></bdl-bind2a>
<bdl-bind2a findex="13" aname="children.0.Merak6_anim" amin="0" amax="99" fmin="0.01" fmax="0.07"></bdl-bind2a>

<!-- nove sipky 4.2 -->

<bdl-bind2a findex="19" aname="children.0.OranzovoZlutaSipkaDiTF_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="CervenaVSipkaVehicle1_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.children.610.KanalZlutyVehicle_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.children.610.PrechodUvnitrVehicle_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.children.610.KanalCervenyVehicle2_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.CervenaVSipkaVehicle1_anim_2" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.children.610.SipkaZlutaHUvnitrVehicle_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.children.610.OranzovaSipkaSpodniVehicle_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.children.610.SipkaHneda1Vehicle_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.children.610.SipkaHneda2Vehicle_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.OranzovoZlutaSpodni1_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.OranzovoZlutaSpodni2_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.SvetleModraSpodni1_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>



<!-- nove sipky 5 -->
<bdl-bind2a findex="22" aname="children.0.SipkaZlutaSrafovana_anim" amin="149" amax="0" fmin="0.5" fmax="1.5"></bdl-bind2a>

<bdl-bind2a-text findex="22" aname="children.0.Hodnota7_text" convertor="1,1.2"></bdl-bind2a-text>
<bdl-bind2a findex="22" aname="children.0.Merak7_anim" amin="0" amax="99" fmin="0" fmax="4.8"></bdl-bind2a>
<bdl-bind2a findex="23" aname="children.0.children.563.Semafor1_anim" amin="0" amax="6" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="22" aname="children.0.children.563.MerakSemaforu1_anim" amin="0" amax="159" fmin="0" fmax="1.6"></bdl-bind2a>

<!-- nove sipky 6 -->


<bdl-bind2a findex="21" aname="children.0.StrikackaModra_anim" amin="1" amax="29" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="21" aname="children.0.ModraSipkaOdStrikacky_anim" amin="159" amax="0" fmin="0" fmax="1"></bdl-bind2a>

<bdl-bind2a findex="25" aname="children.0.ModraRuzovaPruhovanaSipka_anim" amin="159" amax="0" fmin="0" fmax="3600"></bdl-bind2a>
<bdl-bind2a findex="26" aname="children.0.SipkaRuzovaZluta_anim" amin="159" amax="0" fmin="0.1" fmax="0.5"></bdl-bind2a>
<bdl-bind2a findex="24" aname="children.0.Merak8_anim" amin="0" amax="99" fmin="0" fmax="1600"></bdl-bind2a>
<bdl-bind2a-text findex="24" aname="children.0.Hodnota8_text" convertor="1,100"></bdl-bind2a-text>






</div>
<div class="w3-col s12 m5 l5 w3-justify" style="line-height: 1.3">

<button class="w3-right w3-button w3-theme" onclick="document.getElementById('legenda').style.display='block'">Zobraz legendu</button>
<!-- hidden input - buttonparams must be before fmi component - or input with id must be created explicitly -->
<input id="id6" value="" type="number" style="display:none" />

**Úkoly:**
  1. Nastartujte simulátor.
  2. Regulujte parametry dle otázek.
  3. Odpovězte na otázky.


|Parametry|| 
|-------------|-------|
| Koncentrace železa v potravě [$\frac{\mu g}{h}$] | <bdl-range id="id1" title="" min="0" max="1000" default="219" maxlength="5" step="1"></bdl-range> |
| Knockout genu pro ferroportin(Fpn) | <bdl-checkbox id="id4" titlemin="gen Fpn je knockoutován" titlemax="gen Fpn je aktivní" default="true"></bdl-checkbox>  |
| Knockout genu pro hepcidin | <bdl-checkbox id="id5" titlemin="gen pro hepcidin je knockoutován" titlemax="gen pro expresi hepcidinu je aktivní" default="true"></bdl-checkbox>  |
| LPS injekce jednorázová 1$\mu$g | <bdl-buttonparams title="LPS injekce" ids="id6" values="1" fromid="idfmi"> </bdl-buttonparams>  |

**Otázky**

<bdl-quiz id="q1" type="choice2" question="1/7. Jaká je reakce organismu na akutní bakteriální infekci. (jednorázová injekce LPS = stiskněte jednou tlačítko ´LPS injekce´ - )?" answers="LPS přímo a rychle redukuje aktivitu Fpn. IL6 se zvýší dočasně. Se spožděním několika hodin se koncentrace hepcidinu taktéž zvýší. Po 12 hodinách je hladina železa v séru výrazně nižší. Po 24 hodinách se vše opět vrací k normálu|IL6 se zvýší trvaleji. Hepcidin reguluje přenos železa dlouhodoběji a koncentrace Fe v krvi je dlouhodobě nízká" correctoptions="true|false" explanations="ano, IL6 se zvýší, Zároveň LPS dočasně redukuje expresi Fpn, spolu s hepcidinem se výrazněji se sníží přenos železa z enterocytu do krve. Během 24 hodin se vše normalizuje|ne, toto se děje spíš při chronickém zánětu" buttontitle="zkontrolovat odpověď"></bdl-quiz>

<bdl-quiz id="q2" type="choice2" question="2/7. Jaké bude mít následky dlouhodobý (chronický) zánět (opakovaná injekce LPS)" answers="IL6 se zvýší dočasně. Se spožděním několika hodin se koncentrace hepcidinu taktéž zvýší. Po 12 hodinách je hladina železa v séru výrazně nižší. Po ěč hodinách se vše opět vrací k normálu|IL6 se zvýší trvaleji. Hepcidin reguluje přenos železa dlouhodoběji a koncentrace Fe v krvi je dlouhodobě nízká" correctoptions="false|true" explanations="ne, toto se děje spíš při akutním zánětu|ano, IL6 se zvýší záleží na počtu opakování. Hepcidin reguluje přenos železa z enterocytu do krve dlouhodoběji, tím se snížuje koncentrace Fe v krvi dlouhodobě až o řád oproti normě s důsledky pro jiné orgány." buttontitle="zkontrolovat odpověď"></bdl-quiz>

<bdl-quiz id="q3" type="choice2" question="3/7. Jakými cestami ovlivňuje endotoxin metabolismus železa (které vlivy se objeví při stisknutí tlačítka LPS injekce)?" answers="přímá redukce aktivity genu pro Fpn. Zvýšení produkce hepcidinu|přímá stimulace aktivity genu pro Fpn. Snížení produkce hepcidinu" correctoptions="true|false" explanations="ano|ne" buttontitle="zkontrolovat odpověď"></bdl-quiz>

<bdl-quiz id="q4" type="choice2" question="4/7. Pokud provedeme knock-out genu pro hepcidin, bude zachovaná účinnost reakce na injekci LPS?" answers="Částečně|Ne" correctoptions="true|false" explanations="ano, je zachován vliv na redukci aktivity genu pro Fpn|nesprávná odpověď" buttontitle="zkontrolovat odpověď"></bdl-quiz>

<bdl-quiz id="q5" type="choice2" question="5/7. Zapněte gen hepcidinu a proveďte reset simulace tlačítkem <i class='fa fa-refresh'></i>. Pokud provedeme knock-out genu pro Fpn (gen pro hepcidin je aktivní), bude zachovaná účínnost reakce na injekci LPS?" answers="Částečně|Ne" correctoptions="true|false" explanations="ano, díky zachované redukci hepcidinem|nesprávná odpověď" buttontitle="zkontrolovat odpověď"></bdl-quiz>

<bdl-quiz id="q6" type="choice2" question="6/7. Jaké následky může mít dlouhodobý zánět (stran metabolismu železa)?" answers="nedostatek železa pro jiné procesy, např. snížená produkce nových erytrocytů, anémie, ...|nadbytek železa s důsledky pro další orgány" correctoptions="true|false" explanations="ano, simulace ukazuje dlouhodobý nedostatek nedostatek železa pro jiné metabolické procesy viz další kapitola|ne, viz další kapitola" buttontitle="zkontrolovat odpověď"></bdl-quiz>

<bdl-quiz id="q7" type="choice2" question="7/7. Jaký má LPS dopad na vstřebávání železa v duodenu? Má smysl zvyšovat příjem železa potravou?" answers="Má nepřímý vliv. Zvýšený příjem železa v potravě může pomoci v rekonvalescenci|Má přímý vliv. Nemá smysl zvyšovat příjem železa." correctoptions="true|false" explanations="ano, LPS nemá přímý dopad na vstřebávání železa ale na jeho přenos z enterocytu, tj. nepřímo. Zvyšovat příjem železa má mírný vliv při pozdější rekonvalescenci.|ne" buttontitle="zkontrolovat odpověď"></bdl-quiz>
</div>

<bdl-quiz-control ids="q1,q2,q3,q4,q5,q6,q7"></bdl-quiz-control>


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
|![bigimagefoodiron](simironferritin.png) |__6.Regulace příjmu a výdeje Fe<sup>2+</sup> ve ferritinu__ |
|![bigimageferroportin](imageferroportin.png) |__7.Genová regulace ferroportinu__ |

||Definice|Popis/funkce|
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
|![imagetransferrin](imagetransferrin.png)|Transferin| Transferin|
|![imagehephesdin](smallhephesdin.png)|Hephesdin|Hephesdin|
|![imageferroportin](smallferroportin.png)|Ferroportin|Ferroportin|
|![imagetfr1](imgtfr1.png)|TfR1|Transferinový receptor 1|
|![imageschemasteap3](imgmetaloreduktaza.png)| STEAP3 | Metaloreduktáza |

</div>
