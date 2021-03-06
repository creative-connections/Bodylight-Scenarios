<div class="w3-row">
<div class="w3-col s12 l4">

## Srdeční cyklus 2 EKG

EKG efekty během srdečního cyklu


- (1) isovolumická kontrakce 
    - S-T segment - systola komor
- (2) ejekce
    - T vlna - repolarizace komor
- (3) isovolumická relaxace 
- (4) plnění - krev plní síň a komoru
    - otevírají se mitrální a trikuspidální chlopně
    - (4a) plnění - P vlna na konci depolarizace atrií (síní)
    - (4b) plnění - P-Q segment systola atrií (síní), na konci QRS komplex

</div>
<div class="w3-col s12 l8">
Stiskněte tlačítko pro animaci:

<bdl-animate-control 
  id="id4" 
  speedfactor="20" 
  segments="3;5;14;17;29" 
  segmentlabels="4b P-Q segment systola atrií (síní), na konci QRS komplex;1 isovolumická kontrakce, S-T segment, systola komor;2 ejekce, T vlna, repolarizace komor;3 isovolumická relaxace;4a plnění, P vlna, na konci depolarizace atrií (síní)">
  </bdl-animate-control>

<bdl-animate-gif fromid="id4" src="heart.gif" width=600></bdl-animate-gif>

<bdl-ecg 
  id="id11" 
  fromid="id4"
  labels="ECG I (mV)"
  width="300"
  height="30"
  responsive="true"></bdl-ecg>
  
</div>
</div>

<bdl-quiz question="QRS komplex předchází a způsobí:"
  answers="systolu síní|
           systolu komor|
           diastolu komor"
  correctoptions="false|true|false"           
  explanations="systole síní předchází P vlna|
  QRS komplex předchází systole komor|
  T vlna souvisí s repolarizací a relaxací komor">
</bdl-quiz> 
