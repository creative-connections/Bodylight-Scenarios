<div class="w3-row">
<div class="w3-col s12 l4">

## Srdeční cyklus 3

Objem náplně v komorách se mění následovně

- (1) isovolumická kontrakce 
    - objem komory se nemění
    - mění se napětí myokardu a tím i tlak       
- (2) ejekce
    - objem krve v komorách se snižuje
    - krev z levé komory proudí přes aortální chlopeň do tělního oběhu
    - krev z pravé komory proudí přes pulmonární chlopeň do plicního oběhu
- (3) isovolumická relaxace 
    - objem krve v komorách se nemění, všechny chlopně zavřené
    - snižuje se napětí myokardu a tlak v komorách    
- (4) plnění - krev plní síň a komoru
    - objem krve v komorách se postupně zvyšuje
    - otevírají se mitrální a trikuspidální chlopně
    - (4a) plnění - diastola atrií (síní)
    - (4b) plnění - systola atrií (síní)
        - rychlost naplňování objemu se mírně zrychlí

</div>
<div class="w3-col s12 l4">
Stiskněte tlačítko pro animaci systoly a diastoly:

<bdl-animate-control 
id="id5" 
fromid="id4" 
speedfactor="20" 
segments="3;5;14;17;29" 
segmentlabels="4b plnění atriální systola;1 systola komor - isovolumická kontrakce;2 systola komor - ejekce;3 isovolumická relaxace;4a plnění" 
segmentcond="6,eq,0;7,eq,1;7,eq,0;6,eq,1;5,gt,100000" 
simsegments="14;24;35;52;76"></bdl-animate-control>

<bdl-animate-gif fromid="id5" src="doc/heart.gif"></bdl-animate-gif>

</div>
<div class="w3-col s12 l4">

<bdl-fmi id="id4" src="BurkhoffFMI.js" 
         fminame="Cardiovascular_Model_Burkhoff_HemodynamicsBurkhoff_0shallow"
         tolerance="0.000001" starttime="0" guid="{b5629132-3ba6-4153-87c2-f3ff108e1920}"
         valuereferences="33554435,637534265,637534241,637534290,16777312,637534466,637534294,637534268"
         valuelabels="Left Ventricle Volume,Pressure in Left Ventricle,Pressure in Aorta, Pressure in Left Atria, Heart Rate, LA elastance,MV open, AOV open"
         inputs="id1,16777312,1,60"
         controlid="id5"
         showcontrols="false"></bdl-fmi>

<bdl-chartjs-time id="id12" width="400" fromid="id4" labels="LV volume" refindex="0" refvalues="1"></bdl-chartjs-time>

</div>
</div>

<bdl-quiz question="Druhý zvuk tepu srdce je způsoben:"
  answers="uzavřením mitrální a trikuspidální chlopně|
           otevřením aortální a pulmonární chlopně|
           uzavřením aortální a pulmonární chlopně"
  correctoptions="false|false|true"           
  explanations="první zvuk tepu srdce, způsoben zavřením mitrální a trikuspidální chlopní|
  otevření chlopní negeneruje výrazný slyšitelný zvuk|
  druhý zvuk tepu srdce, způsoben zavřením aortální a pulmonární chlopní">
</bdl-quiz> 
