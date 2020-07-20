# Bodylight-Scénáře

Scénáře používající platformu Bodylight spojují webové technologie interaktivních aplikací a matematické modely v jazyce Modelika exportované pomocí standardu FMU.
Veřejné scénáře jsou brány z větve `master` repozitáře zdrojových kódů na https://github.com/creative-connections/Bodylight-Scenarios/
a generovány automaticky na adrese 
https://bodylight.physiome.cz/Bodylight-Scenarios/

Tzn. `commit` do této hlavní větve se promítne na stránkách během chvíle (refresh stránky, případně vymazat cache).

# Lokální instalace

Použíjte skripty pro vytvoření virtuálního stroje: 
https://github.com/creative-connections/Bodylight-VirtualMachine
Scénáře jsou pak dostupné na adrese: http://localhost:8080/scenarios/

# Postup tvorby scénáře se simulátorem

   1. exportujte model z Modeliky (.MO) do FMU. 
      - V Dymole otevřete model
      - přepněte do módu `Simulation`
      - v ikonce `t0-t1` nastavte FMI Export: [x] Co-Simulation using Cvode, [x] Include source code, [x] Version 2.0
      - Simulation -> Translate -> FMU 
   2. kompilace FMU modelu do javascriptu s WebAssembly
      - přeložený soubor `modelfile.fmu` zkopírujte do VM (např. přes sdílený adresář `C:/Bodylight-VirtualMachine`, ve VM `/vagrant`)
      - ve VM zkopírujte FMU do `/home/vagrant/Bodylight.js-FMU-Compiler/input` spusťte skript `compile.sh`: 
      ```bash
       cp /vagrant/modelfile.fmu /home/vagrant/Bodylight.js-FMU-Compiler/input
       cd /home/vagrant/Bodylight.js-FMU-Compiler
       ./compile.sh modelfile.fmu      
      ``` 
      - v adresáři  `output/` se vytvoří `modelfile.zip` a `modelfile.log`
   3. vložení JS souboru do dokumentu se simulátorem
      - v adresáři `/home/vagrant/Bodylight-Scenarios` vytvořte např. nový adresář `test` nebo použijte existující.       
      - zkopírujte JS a XML soubor ze ZIP archivu `modelfile.zip` do adresáře `test` vedle dokumentu MD se simulátorem
   4. vytvořte dokument se simulátorem např `test/simulator.md`
      - vložte do něj komponentu `bdl-fmi`(nezapomeňte uzavřít tag `</bdl-fmi>`):
      ```markdown
      # Simulátor
      
      Ovládání: 
      <bdl-fmi id="id1" 
               src="test/modelfile.js" 
               fminame="Physiolibrary_Hydraulic_Examples_MeursModel2011_HemodynamicsMeurs_0flatNorm"
               tolerance="0.000001" starttime="0" guid="{465a543d-dad2-446c-a421-8098630c62c7}"
               valuereferences="637534224,637534448,637534272,16777277"
               valuelabels="Rpp pressure,Right Ventricle Pressure,Left Ventricle Pressure,Rrain"
               inputs="id2,16777277,1,1;id4,16777313,1,60;id6,16777249,1,1"         
               ></bdl-fmi>
      ```  
      - `src` odkazuje relativně k JS souboru s exportovaným modelem
      - otevřte soubor `modelDescription.xml` 
      - do atributu `fminame` vložte přesné jméno z atributu `modelIdentifier` z modelDescription.xml 
      - do atributu `guid` vložte přesně identifikátor `guid` jak je v modelDescription.xml
      - ostatní atributy jsou volitelné 
      - `valuereferences` obsahuje seznam všech referencí na proměnné modelu oddělených čárkou, které budou během simulace umísťovány do pole. Uvěďte všechny proměnné, které budete potřebovat. 
      - `valuelabels` obsahuje názvy proměnných ve stejném pořadí z `valuereferences` (zatím nevyužito, ale vhodné pro dokumentaci proměnných v poli hodnot které je specifikování `valuereferences`)
      - `inputs` obsahuje seznam všech vstupních proměnných (parametrů), každý oddělený `;` každý vstup má položky oddělené čárkou `[id-komponenty],[valuereference],[numerator],[denominator]`
        - [id-komponenty] je id existující jiné komponenty, jejíž výstup se poslouchá a hodnoty se zapisují jako hondota parametru v modelu označené [valuereference]
        - [numerator] a [denominator] mohou být čísla, která se použijí na přepočet jednotek, defaultně 1 `hodnota = hondota_z_komponenty * numerator / denominator`
   5. vložení komponent pro vstup:
      - do dokumentu simulátoru `test/simulator.md` vložte komponentu, která sbírá od uživatele vstupní hodnoty
      - např.:
      ```markdown
      Rrain: <bdl-range 
         id="id2" 
         min="39996" 
         max="3999670" 
         default="399967"></bdl-range>
      ```  
      - `id` je unikátní id komponenty, (referencované z bdl-fmi inputs)
      - `min` a `max` uvádějí numerický rozsah posuvníku
      - `default` definují předvolenou hodnotu
      - do komponenty `bdl-fmi` vložte patřičnou definici do kterého parametru se hodnoty vstupu při změně budou ukládat
      ```markdown
      <bdl-fmi ...
        inputs="id2,16777277,1,1" 
      ></bdl-fmi>
      ```
      - tzn. při změně hodnoty se tato uloží do modelu jako parametr s referencí `16777277` a vynásobí se číslem `1`  a vydělí číslem `1`, tj. hondota se nepřepočítá.
   5. Vložení komponent pro výstup, vizualizaci
      - do dokumentu simulátoru `test/simulator.md` vložte výstupní komponentu, např graf:
      ```markdown
      <bdl-chartjs-time id="id3" 
        fromid="id1" 
        labels="RV pressure,LV pressure" 
        refindex="1" 
        refvalues="2"></bdl-chartjs-time>

      ```
      - `id` je unikátní id komponenty
      - `fromid` je id bdl-fmi komponenty
      - `labels` jsou názvy proměnných v grafu
      - `refindex` je index (od 0) v poli `valuereferences` z komponenty `<bdl-fmi>` odkud se berou hodnoty modelu
      - `refvalues` je počet hodnot přebíraných z pole
      Další typy grafů viz https://bodylight.physiome.cz/Bodylight.js-Components/#index=doc/usersguide.md
                     
# Konvence
V tomto repozitáři:

(1) každý adresář obsahuje `index.md` - výchozí soubor s popisem kapitoly, nebo tématu

(2) Kořenový `summary.md` obsahuje seznam s linky do všech MD dokumentů k tématu v adresáři.
  
(3) Jazykově specifické dokumenty
  * `index.[lang].md` výchozí MD dokument, v jazyce `[lang]`
  * `summary.[lang].md` obsah v jazyce `[lang]`
  * nahraďte `[lang]` podle jedno-dvou písmenné značky jazyků podle
  RFC 3066. Např. `en` pro Angličtinu, `cs` pro češtinu, `sk` pro slovenštinu ...
    
(4) Všechny interní linky jsou relativní, tj. ve formě `#[adresář]/[dokument].md` nebo `#index=[adresář]/[dokument].md`.
Např. pro hemodynamics/hemo1.cs.md `[Hemodynamika část 1](#index=hemodynamics/hemo1.cs.md)`   

(5) V názvech souborů nepoužívejte mezery a speciální znaky

# Výchozí webová aplikace

Výchozí dokument `index.html` načítá knihovnu `bodylight.bundle.js` 
která umožňuje používat Bodylight komponenty v HTML a v Markdownu.
Obsahuje komponentu `<bdl-markdown-book>` ktera interpretuje 
  - výchozí zdrojový soubor `index.cs.md`
  - a `summary.cs.md` 
Obojí v značkovacím jazyce Markdown a s komponentami bodylight. 
Jakýkoliv interní link (se znakem `#` na začátku) se interpretuje
jako  načtení nového dokumentu v Markdownu a přegenerování obsahu v HTML.
např. Adresa `#hemodynamics/hemo1.md` načte MD dokument v adresáři hemodynamics. 

# Syntaxe Markdown rozšířená o Bodylight komponenty
 
Markdown je odlehčený značkovací jazyk, který by měl být čitelný 
v prostém textové formátu a zároveň publikovatelný na webu.
```markdown
Hlavní nadpis
==========

* toto
* je
* seznam

Menší podnadpis
---------------

1. toto 
2. se čísluje
1. ale na číslech nezáleží

# Hlavní nadpis jinak

## Menší nadpis jinak

### Ještě menší nadpis jinak

Odstavce se oddělují
prázdným řádkem. Na délce řádků nezáleží

Udělám nový odstavec. Ještě odkaz na 
[dokumentaci](http://daringfireball.net/projects/markdown/syntax)

Horizontální oddělovač:
---

Vlastnosti textu _kurzíva_, *kurzíva*, __tučně__, **tučně**, `neproporcionální`.

<p>Dle libosti ''můžu používat'' html</p>
<bdl-range>Dle libosti ''můžu používat'' komponenty Bodylight</bdl-range>'
``` 

V Markdownu používat HTML značky a komponenty Bodylight.
Tato rozšíření MD jsou povolena: 
* **highlight.js** pro zvýraznění zdrojových kódů v různých jazycích 
 ```markdown
    ```javascript
     // some javascript code
    ``` 
```

```markdown
    ```python
    //some python code
    ```
```
* **markdown-it-katex** pro vyobrazení matematických výrazů, na řádku pomocí znaku `$` nebo na více řádcích `$$`.

Příklad:
```markdown
  Pythagoran theorem $a^2 + b^2 = c^2$. 
  Heat equation:
  $$
\frac{\partial u}{\partial t}
   = h^2 \left( \frac{\partial^2 u}{\partial x^2}
      + \frac{\partial^2 u}{\partial y^2}
      + \frac{\partial^2 u}{\partial z^2} \right)
  $$
  
  
```
Pythagoran theorem is $a^2 + b^2 = c^2$

  Heat equation:
  $$
\frac{\partial u}{\partial t}
   = h^2 \left( \frac{\partial^2 u}{\partial x^2}
      + \frac{\partial^2 u}{\partial y^2}
      + \frac{\partial^2 u}{\partial z^2} \right)
  $$

### HTML v Markdownu
HTML značky lze použít v Markdownu. Navíc je přidána podpora stylů W3.CSS Pro a Font Awesome.
```html
<div class="w3-theme w3-panel w3-card">
<i class="fa fa-info"></i> Informační panel
</div>
```
Se zobrazi jako:
<div class="w3-theme w3-panel w3-card">
<i class="fa fa-info"></i> Informační panel

</div>

* Dokumentace W3.CSS: https://www.w3schools.com/w3css/default.asp
* Dokumentace Font Awesome: https://fontawesome.com/v4.7.0/
  
### Bodylight Komponenty v Markdownu
Použijte značky s prefixem `<bdl-` obdobně jako HTML značky.

Tyto web komponenty jsou k dispozici:

* `<bdl-range></bdl-range>` Renders a range input which may trigger a value
* `<bdl-value></bdl-value>` Renders value of attribute `value` into DOM, it can be bind as output from FMI.
* `<bdl-bind2previous></bdl-bind2previous>` Binds values of 2 components 
* `<bdl-fmi></bdl-fmi>` Creates control buttons in order to control simulation of the model
* `<bdl-receptacle></bdl-receptacle>` Renders a receptacle graphics which is full or empty based on the values provided
* `<bdl-dygraph></bdl-dygraph>` Creates a graph controlled by Dygraph library [^2]
* `<bdl-chartjs></bdl-chartjs>` Creates a chartjs element controlled by Chartjs library.

Další dokumentace (anglicky) je dostupná na 
https://bodylight.physiome.cz/Bodylight.js-Components/#index=doc/usersguide.md
 
