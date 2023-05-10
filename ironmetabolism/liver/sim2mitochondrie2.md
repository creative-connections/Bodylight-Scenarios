<style>
img[alt^="image"] {max-width:20px;}
img[alt^="bigimage"] {  max-height:60px}
tbody tr:nth-child(even){background-color:#f1f1f1}
</style>

*[DMT1]: divalent metal transporter 1
*[holoTf]: Transferin - saturovaný - s navázanými ionty železa

<div class="w3-row">
<div class="w3-col s12 m8 l8">

<bdl-animate-adobe src="Hepatocyt_2_FinalObrazovka3.js" width="800" height="600" name="Hepatocyt_2_FinalObrazovka3" fromid="idfmi" responsive="true"></bdl-animate-adobe>
<bdl-bind2a-text findex="4" aname="children.1.Hodnota8_text" convertor="1,57.717"></bdl-bind2a-text>
<bdl-bind2a-text findex="3" aname="children.1.Hodnota3_text" convertor="1,1.513"></bdl-bind2a-text>
<bdl-bind2a-text findex="2" aname="children.1.Hodnota7_text" convertor="1,19.24"></bdl-bind2a-text>
<bdl-bind2a findex="1" aname="children.1.CervenaSipka5_anim" amin="0" amax="159" fmin="2" fmax="10"></bdl-bind2a>
<bdl-bind2a findex="1" aname="children.1.TransferinSipkaOranzova1_anim" amin="0" amax="159" fmin="2" fmax="10"></bdl-bind2a>
<bdl-bind2a findex="1" aname="children.1.TransferinSipkaOranzova2_anim" amin="0" amax="159" fmin="2" fmax="10"></bdl-bind2a>
<bdl-bind2a findex="2" aname="children.1.Merak7_anim" amin="0" amax="99" fmin="0" fmax="40"></bdl-bind2a>
<bdl-bind2a findex="1" aname="children.1.TransferinSipkaOranova2_anim" amin="0" amax="159" fmin="2" fmax="10"></bdl-bind2a>
<bdl-bind2a findex="1" aname="children.1.ModraSipka2_anim" amin="0" amax="159" fmin="2" fmax="10"></bdl-bind2a>
<bdl-bind2a findex="1" aname="children.1.ModraSipka1_anim" amin="0" amax="159" fmin="2" fmax="10"></bdl-bind2a>
<bdl-bind2a findex="1" aname="children.1.CervenaSipka6_anim" amin="0" amax="159" fmin="2" fmax="10"></bdl-bind2a>
<bdl-bind2a findex="1" aname="children.1.CervenaSipka1_anim" amin="0" amax="159" fmin="2" fmax="10"></bdl-bind2a>
<bdl-bind2a findex="1" aname="children.1.TransferinSipkaOranova1_anim" amin="0" amax="159" fmin="2" fmax="10"></bdl-bind2a>
<bdl-bind2a findex="1" aname="children.1.ZlutyVodikVnitrniCervenyKanal_anim" amin="0" amax="159"></bdl-bind2a>
<bdl-bind2a findex="1" aname="children.1.ZlutyVodikVnejsiCervenyKanal_anim" amin="0" amax="159"></bdl-bind2a>
<bdl-bind2a findex="1" aname="children.1.CervenaSipka4_anim" amin="0" amax="159"></bdl-bind2a>
<bdl-bind2a findex="1" aname="children.1.SipkaFialovaCervenaVnejsi_anim" amin="0" amax="159"></bdl-bind2a>
<bdl-bind2a findex="1" aname="children.1.KanalCerveny_anim" amin="0" amax="99"></bdl-bind2a>
<bdl-bind2a findex="2" aname="children.1.Fe2Skupina_anim" amin="159" amax="0"></bdl-bind2a>
<bdl-bind2a findex="4" aname="children.1.Fe3Skupina_anim" amin="0" amax="159"></bdl-bind2a>
<bdl-bind2a findex="6" aname="children.1.SipkaFialovaCervena1_anim" amin="0" amax="159" fmin="18" fmax="147"></bdl-bind2a>
<bdl-bind2a findex="5" aname="children.1.SipkaCervenoFialova1_anim" amin="0" amax="159" fmin="18" fmax="147"></bdl-bind2a>
<bdl-bind2a findex="4" aname="children.1.Merak8_anim" amin="0" amax="99" fmin="0" fmax="114"></bdl-bind2a>
<bdl-bind2a findex="3" aname="children.1.Merak3_anim" amin="0" amax="99" fmin="0.5" fmax="3"></bdl-bind2a>
<bdl-bind2a findex="7" aname="children.1.SemaforFpn_anim" amin="0" amax="19" fmin="0" fmax="1"></bdl-bind2a>
<bdl-bind2a findex="2" aname="children.1.CervenaSipka7_anim" amin="0" amax="159"></bdl-bind2a>

<div class="w3-small w3-justify w3-theme-l4">Trendy a dynamika simulovaného systému odpovídají fyziologii člověka, veškeré absolutní hodnoty vygenerované simulátorem jsou pouze orientační.</div>
</div>
<div class="w3-col s12 m4 l4 w3-justify w3-small">

<button class="w3-right w3-button w3-theme" onclick="document.getElementById('legenda').style.display='block'">Zobraz legendu</button>
<!-- hidden input  - buttonparams must be before fmi component - or input with id must be created explicitly -->
<input id="id6" value="" type="number" style="display:none"/>

<bdl-fmi id="idfmi" mode="" src="FeMetabolism_FeMetabolismModel.js" fminame="FeMetabolism_FeMetabolismModel" tolerance="0.000001" starttime="0" fstepsize="0.1" fpslimit="60" guid="{9aa10b27-427c-44c9-a381-5815d5706331}" valuereferences="637534208,637534245,33554450,33554447,33554451,637534243,637534244,16777268" valuelabels="Fe_liv,Fe_liv_in_ser,Fe_liv_2,Fe_ser,Fe_liv_3,Fe_liv_to_ferritin,Fe_liv_from_ferritin,Fpn_liv_knockout" inputs="id1,16777260,1,1;idfpnliv,16777268,1,1,t" inputlabels="Fe_food,Fpn_liv_knockout" showtime="true" showtimemultiply="3600"></bdl-fmi>





<div class="w3-border w3-panel">

||| 
|-------------|-------|
| množství železa v potravě [$\frac{\mu g}{h}$] | <bdl-range id="id1" title="" min="0" max="1000" default="219" step="1"></bdl-range> |
| Knockout genu pro FPN | <bdl-checkbox id="idfpnliv" titlemin="gen Fpn je knockoutován (neaktivní)" titlemax="gen Fpn je aktivní" default="true"></bdl-checkbox>  |

</div>

**Úkoly**

Nyní již bez kvízu.

* Co má za následek genový knockout Fpn? Jak se změní koncentrace železa v hepatocytu a v séru?
* Jak se genový knockout Fpn projeví na počtu DMT1 (míra otevření)?
* Jak se genový knockout Fpn projeví na množství železa v krvi? Vysvětlete.
* Vysvětlete pojem IRE a IRP. Jakou mají funkci?
* Jakou roli mají mitochondrie v buňce a k čemu využívají železo?
* Vyjmenujte alespoň 3 molekulární systémy využívající pro svou funkci železo.


</div>
</div>

<div id="legenda" class="w3-card w3-small w3-padding" style="display:none;z-index:1;position:absolute;top:20px;right:10px;width:500px;background-color:white">
legenda
<button class="w3-button w3-theme w3-right" onclick="document.getElementById('legenda').style.display='none'">Skryj legendu <i class="fa fa-close"></i> </button>
button

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
konec legendy
</div>

