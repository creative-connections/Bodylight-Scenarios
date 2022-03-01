<div class="w3-row">
<div class="w3-half">
Stiskněte tlačítko pro animaci:

<bdl-animate-control 
  id="id4" 
  speedfactor="20" 
  segments="3;5;14;17;29" 
  segmentlabels="4b P-Q segment systola atrií (síní), na konci QRS komplex;1 isovolumická kontrakce, S-T segment, systola komor;2 ejekce, T vlna, repolarizace komor;3 isovolumická relaxace;4a plnění, P vlna, na konci depolarizace atrií (síní)">
  </bdl-animate-control>

<bdl-animate-gif fromid="id4" src="heart.gif" width=450></bdl-animate-gif>

<bdl-ecg 
  id="id11" 
  fromid="id4"
  labels="ECG I (mV)"
  width="300"
  height="50"
  responsive="true"></bdl-ecg>

</div>
<div class="w3-half">

  
## Srdeční cyklus a EKG

Elektrokardiogram (EKG) během srdečního cyklu ukáže tyto události:

1. isovolumická kontrakce 
    - konec QRS komplexu a S-T segment - systola komor
2. ejekce
    - na konci začíná T vlna - repolarizace komor
3. isovolumická relaxace - konec T vlny 
4. plnění - krev plní síň a komoru
    - (4a) plnění - depolarizace atrií (síní) na konci nastává P vlna
    - (4b) plnění - P-Q segment systola atrií (síní), na konci této fáze nastává začátek QRS komplexu

**Úkoly**
1. pusťte animaci synchronizovanou s EKG pod ním.
2. sledujte fáze a zodpovězte:
<bdl-quiz question="Kdy končí začíná QRS komplex:"
  answers="ve fázi 4b|
           ve fázi 1|
           ve fázi 2"
  correctoptions="true|false|false"           
explanations="ano. Na konci 4b fáze začíná QRS komplex, způsobí systolu komor v další fázi|
  ne. Zde QRS komplex končí.|
  ne. Zde se vyskytuje T vlna.">
</bdl-quiz> 

</div>
</div>

