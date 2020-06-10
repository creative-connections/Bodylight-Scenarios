# Bodylight-Scénáře
Scénáře používající platofrmu Bodylight.

# Instalace
Tento repozitář obsahuje dokumenty a texty ve formátu markdown (MD).
Navíc texty obsahují webové simulátory používající tzv. web komponenty
Bodylight.js-Components. Pro zobrazení webových komponent v textu použijte návod v
https://github.com/creative-connections/Bodylight.js-Components

Pro instalaci všech nástrojů Bodylight včetně těchto Scěnářů,
můžete použít skripty pro vytvoření virtuálního stroje
https://github.com/creative-connections/Bodylight-VirtualMachine

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
 
