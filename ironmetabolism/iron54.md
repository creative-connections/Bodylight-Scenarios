<style>
img[alt^="image"] {max-width:20px;}
img[alt^="bigimage"] {  max-height:60px}
tbody tr:nth-child(even){background-color:#f1f1f1}
</style>
<div class="w3-row">
<div class="w3-col s12 m7 l7">

<bdl-fmi id="idfmi" mode="" src="FeMetabolism_FeMetabolismModel.js" fminame="FeMetabolism_FeMetabolismModel" tolerance="0.000001" starttime="0" fstepsize="0.25" fpslimit="6" guid="{9aa10b27-427c-44c9-a381-5815d5706331}" valuereferences="637534208,637534209,100663316,16777260,33554448,33554449,637534229,905969689,637534232,16777271,100663313,16777267,637534234,637534238,33554439,33554443,637534231,637534258,33554447,637534230,637534237,33554432,16777266" valuelabels="Fe_liv,Fe_spl,Fe_duo_intake,Fe_food,Fe_duo_2,Fe_duo_3,Fe_duo_in_food,Fe_duo_unused,Fe_duo_out_loss,to_ferritin_rate,from_ferritin_rate,Fpn_duo_knockout,Fpn_duo_in_1,Fpn_duo_in,Fpn_duo_mRNA,Fpn_duo,Fe_duo_out_ser,Fe_ser_in_duo,Fe_ser,Fe_duo_in_ser,Fpn_duo_out_2,hep,hep_knockout" inputs="id1,16777260,1,1;id4,16777267,1,1;id5,16777266,1,1,t" inputlabels="Fe_food,Fpn_duo_knockout,hep_knockout" showtime="true" showtimemultiply="3600"></bdl-fmi>

<bdl-animate-adobe src="DuodenumFinalObrazovka5.js" width="824" height="824" name="DuodenumFinalObrazovka5" fromid="idfmi" responsive="true"></bdl-animate-adobe>

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
<bdl-bind2a findex="16" aname="SipkaFialovaSpodni3_anim" amin="0" amax="100" fmin="0.1" fmax="4"></bdl-bind2a>
<bdl-bind2a findex="16" aname="children.0.CervenaVSipkaVehicle1_anim_1" amin="0" amax="159" fmin="1.5" fmax="4"></bdl-bind2a>
<bdl-bind2a findex="16" aname="children.0.SipkaCervenaSpodni_anim" amin="0" amax="159" fmin="1.5" fmax="4"></bdl-bind2a>
<bdl-bind2a findex="16" aname="children.0.Hep_anim" amin="0" amax="159" fmin="1.5" fmax="4"></bdl-bind2a>


<bdl-bind2a findex="15" aname="KanalFialovy_anim" amin="99" amax="0" fmin="0.03" fmax="1.3"></bdl-bind2a>
<bdl-bind2a findex="11" aname="Semafor_anim" amin="4" amax="5" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a-text findex="13" aname="Hodnota6_text" convertor="1,0.0412"></bdl-bind2a-text>
<bdl-bind2a findex="18" aname="children.0.children.616.FeTransferin_anim" amin="0" amax="159" fmin="0.2" fmax="3"></bdl-bind2a>

<bdl-bind2a-text findex="18" aname="Hodnota9_text" convertor="1,1.51"></bdl-bind2a-text>
<bdl-bind2a findex="18" aname="children.0.Merak9_anim" amin="0" amax="99" fmin="0.2" fmax="3"></bdl-bind2a>
<bdl-bind2a findex="13" aname="children.0.Merak6_anim" amin="0" amax="99" fmin="0.01" fmax="0.07"></bdl-bind2a>

<!-- nove sipky 4.2 -->

<bdl-bind2a findex="19" aname="children.0.OranzovoZlutaSipkaDiTF_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="CervenaVSipkaVehicle1_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.children.598.KanalZlutyVehicle_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.children.598.PrechodUvnitrVehicle_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.children.598.KanalCervenyVehicle2_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.CervenaVSipkaVehicle1_anim_2" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.children.598.SipkaZlutaHUvnitrVehicle_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.children.598.OranzovaSipkaSpodniVehicle_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.children.598.SipkaHneda1Vehicle_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.children.598.SipkaHneda2Vehicle_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.OranzovoZlutaSpodni1_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.OranzovoZlutaSpodni2_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>
<bdl-bind2a findex="19" aname="children.0.SvetleModraSpodni1_anim" amin="0" amax="159" fmin="0.1" fmax="2"></bdl-bind2a>

<!-- nove sipky 5 -->
<bdl-bind2a findex="21" aname="children.0.SipkaZlutaSrafovana_anim" amin="149" amax="0" fmin="0.5" fmax="1.5"></bdl-bind2a>

<bdl-bind2a-text findex="21" aname="children.0.Hodnota7_text" convertor="1,1.2"></bdl-bind2a-text>
<bdl-bind2a findex="21" aname="children.0.Merak7_anim" amin="0" amax="99" fmin="0" fmax="4.8"></bdl-bind2a>
<bdl-bind2a findex="22" aname="children.0.children.570.Semafor1_anim" amin="0" amax="6" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="21" aname="children.0.children.570.MerakSemaforu1_anim" amin="0" amax="159" fmin="0" fmax="1.6"></bdl-bind2a>


</div>
<div class="w3-col s12 m5 l5 w3-justify">

<button class="w3-right w3-button w3-theme" onclick="document.getElementById('legenda').style.display='block'">Zobraz legendu</button>

**Úkoly:**
  1. Nastartujte simulátor.
  2. Vyzkoušejte si, jak ovlivňuje hladina hepcidinu koncentraci feroportinu v mebráně enterocytu.
  3. Vyzkoušejte si, jaké má následky genový knock-out pro hepcidin.
  4. Vyzkoušejte si, jak ovlivňuje hladina železa koncentraci hepcidinu.
  5. Odpovězte na otázky níže.

|Parametry|| 
|-------------|-------|
| Koncentrace železa v potravě [$\frac{\mu g}{h}$] | <bdl-range id="id1" title="" min="0" max="1000" default="219" maxlength="5" step="1"></bdl-range> |
| Knockout genu pro ferroportin(Fpn) | <bdl-checkbox id="id4" titlemin="gen Fpn je knockoutován" titlemax="gen Fpn je aktivní" default="true"></bdl-checkbox>  |
| Knockout genu pro hepcidin | <bdl-checkbox id="id5" titlemin="gen pro hepcidin je knockoutován" titlemax="gen pro expresi hepcidinu je aktivní" default="true"></bdl-checkbox>  |

**Otázky**

<bdl-quiz id="q1" type="choice2" question="Co způsobí genový knock-out hepcidinu a proč?" answers="zvýšený tok železa z enterocytu do krve|snížený tok železa z enterocytu do krve" correctoptions="true|false" explanations="ano, ztratí se zpětnovazební regulace aktivity ferroportinu, čímž se může dočasně zvýšit příjem železa do krva|ne" buttontitle="zkontrolovat odpověď"></bdl-quiz>
<bdl-quiz id="q2" type="choice2" question="Pokud omezíme příjem železa na minimum, jaká bude reakce organismu a jak se změní koncentrace/množství DMT1, Fpn a Hepcidinu?" answers="zvýší se počt membránových proteinů a sníží se hladina hepcidinu|sníží se počet membránových proteinů a zvýší se hladina hepcidinu" correctoptions="true|false" explanations="ano|ne" buttontitle="zkontrolovat odpověď"></bdl-quiz>
<bdl-quiz id="q3" type="choice2" question="Pokud provedeme genový knock-out enterocytárního Fpn, jaký vliv to bude mít na hladinu hepcidinu?" answers="hladina hepcidinu se zvýší|hladina hepcidinu se sníží" correctoptions="false|true" explanations="ne, hladina se nezvýší, naopak sníží neboť je regulována přímo koncentrací železa, které je také nižší|ano" buttontitle="zkontrolovat odpověď"></bdl-quiz>
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
