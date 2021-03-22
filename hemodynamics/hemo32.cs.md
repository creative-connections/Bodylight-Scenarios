## Srdeční revoluce 3

Postupně budovat komplikovanější simulátor s wiggsovým diagramem.
1 obrazovka EKG
1 obrazovka tlakové křivky a kdy se otvírají/zavírají chlopně
1 obrazovka zvuk srdce


### Pracovní zbytky, interaktivnách dialogů a simulátorů 

<bdl-cardiaccycle1>pulsujici srdce a graf tlaku,nebo ekg</bdl-cardiacycle1>  

<bdl-sound-on-increase 
  thresholdvalue="1e+7" freq="660" fromid="id4" refindex="8">
  sound-on-decrease not supported
</bdl-audio-on-increase>

<bdl-quiz options="1,2,3,4" correct="3">Zvyšte v simulátoru tepovou frekvenci postupně z 
60 na 180 tepů za minutu. Kolik srdečních cyklů se vejde do zobrazovacího 
okénka s šířkou 1 s?</bdl-quiz>


Protože srdeční síně a komory nekontrahují současně, fáze srdečního cyklu 
lze detailněji rozdělit na 
* síňo komorová diastola - krev plní síň a komoru
* síňová systola - síň tlačí krev do komory (asi 20%)
* komorová systola- první komorová kontrakce a první zvuk tepu srdce - isovolumická kontrakce
* komorová ejekce 
* komorová relaxace - druhý zvuk tepu srdce - isovolumická relaxace
 
<bdl-cardiaccycle2>pulsujici srdce, graf tlaku a objemu v leve komore</bdl-cardiaccycle2>

<bdl-quiz options="5 ml,10 ml,15 ml,20 ml,25 ml" correct="15 ml">Snižte tepovou
frekvenci na 56 tepů za minutu. Kolik ml krve je napupmováno
během síňové systoly do levé komory?</bdl-quiz>
