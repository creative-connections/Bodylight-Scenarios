<style>
img[alt^="image"] {max-width:20px;}
img[alt^="bigimage"] {  max-height:60px}
tbody tr:nth-child(even){background-color:#f1f1f1}
</style>
<div class="w3-row">
<div class="w3-twothird w3-center">

Obr. simulator
<bdl-animate-adobe src="BunkaSlezinaObrazovka1.js" width="800" height="600" name="BunkaSlezinaObrazovka1" fromid="idfmi" responsive="true"></bdl-animate-adobe>


</div>
<div class="w3-third w3-justify w3-padding w3-small">

<button class="w3-right w3-button w3-theme-d4" onclick="document.getElementById('legenda').style.display='block'"><i class="fa fa-info-circle"> </i></button>
<!-- hidden input  - buttonparams sets this input value explicitly, then it is read by fmi component -->
<input id="idlps" value="" type="number" style="display:none"/>

<bdl-fmi id="idfmi" mode="" src="FeMetabolism_FeMetabolismModel.js" fminame="FeMetabolism_FeMetabolismModel" tolerance="0.000001" starttime="0" fstepsize="0.05" fpslimit="10" guid="{9aa10b27-427c-44c9-a381-5815d5706331}" valuereferences="637534208,637534245,33554450,33554447,33554451,637534243,637534244,16777268,16777266,33554434,33554432,33554436,637534264,637534265,637534270,637534268,33554433,33554441" valuelabels="Fe_liv,Fe_liv_in_ser,Fe_liv_2,Fe_ser,Fe_liv_3,Fe_liv_to_ferritin,Fe_liv_from_ferritin,Fpn_liv_knockout,hep_knockout,LPS,hep,Il6,hep_in,hep_out,Bmp6_in,Il6_in,Bmp6,Fpn_liv" inputs="id1,16777260,1,1;idfpnliv,16777268,1,1,t;idhep,16777266,1,1,t;idlps,33554434,1,1,t;id11,16777262,1,1,t;id10,16777265,1,1,t;idspl,16777269,1,1,t;idres,16777270,1,1,t;id7,16777261,1,1,t;id8,16777264,1,1,t" inputlabels="Fe_food,Fpn_liv_knockout,hep_knockout,LPS,malabsorption,unregulated_absorption,Fpn_spl_knockout,Fpn_res_knockout,bleeding,transfusion" showtime="true" showtimemultiply="3600"></bdl-fmi>


||| 
|-------------|-------|
| množství železa v potravě [$\frac{\mu g}{h}$] | <bdl-range id="id1" title="" min="0" max="1000" default="219" step="1"></bdl-range> |
| Knockout genu pro FPN | <bdl-checkbox id="idfpnliv" titlemin="gen Fpn je knockoutován (neaktivní)" titlemax="gen Fpn je aktivní" default="true"></bdl-checkbox>  |
| Knockout genu pro hepcidin | <bdl-checkbox id="idhep" titlemin="gen pro hepcidin je knockoutován (neaktivní)" titlemax="gen pro expresi hepcidinu je aktivní" default="true"></bdl-checkbox>  |
| LPS injekce jednorázová 1$\mu$g při stisknutí | <bdl-buttonparams title="LPS injekce" ids="idlps" values="1" fromid="idfmi"></bdl-buttonparams>  |
| Malabsorpce (1-norma) | <bdl-range id="id11" title="" min="0" max="1" default="1" step="0.1"></bdl-range>  |
| Regulace DMT1 v duodenu | <bdl-checkbox id="id10" titlemin="absorpce je fyziologicky regulovaná" titlemax="regulace absorpce je vypnuta" default="false"></bdl-checkbox>  |
| Krevní ztráty, krvácení | <bdl-range id="id7" title="" min="0" max="1" default="0" step="0.1"></bdl-range>  $\frac{ml}{h}$ |
| Příjem krve z transfúze  | <bdl-range id="id8" title="" min="0" max="10" default="0" step="1"></bdl-range> $\frac{ml}{h}$ |
| Knockout genu pro FPN ve slezině | <bdl-checkbox id="idspl" titlemin="gen Fpn je knockoutován (neaktivní)" titlemax="gen Fpn je aktivní" default="true"></bdl-checkbox>  |
| Knockout genu pro FPN v dalších orgánech| <bdl-checkbox id="idres" titlemin="gen Fpn je knockoutován (neaktivní)" titlemax="gen Fpn je aktivní" default="true"></bdl-checkbox> | 

S výjimkou erytrofagocytózy byly všechny uvedené dráhy popsány v předchozích kapitolách.

Možnosti regulace:

* Příjem železa
* Knockout genu pro hepcidin
* Knockout genu pro Fpn v různých orgánech
* Navození zánětu injekcí LPS
* Krevní ztráty
* Krevní transfuze
* Dysregulace příjmu železa
* Malabsorpce

Vyzkoušejte a zodpovězte následující dotazy:

* Jaký je význam RES v metabolismu železa?
* Jaký je hlavní cyklus recyklace železa v organismu?
* Jak se změní tok železa do makrofágu v případě přetížení organismu železem? (kvalitativně)
* Jak se změní zásoby železa v makrofágu při zánětu a proč? 
* Jak se změní zásoby železa v makrofágu při knockout hepcidinu a proč?
* Jak se změní sérová hladina železa při knockoutu Fpn v makrofázích a proč?
* K čemu dochází při saturaci transferinu železem a jaké to má důsledky?
* Které kroky syntézy hemu jsou inhibovány olovem?
* Popište dráhu degradace hemu a kde probíhá?
* K čemu slouží haptoglobin a hemopexin a jaký je v nich rozdíl?

</div>
</div>