<div class="w3-row">
    <div class="w3-half w3-padding">
        <div class="w3-black">
            <div class="w3-blue" style="position: absolute">
                <bdl-animate-control id="controlbuttons2" controlfmi="true" showstep="false"></bdl-animate-control>
                <!-- not optimalized -O0 --><bdl-fmi id="idfmi" mode="continuous" showcontrols="false"
                    controlid="controlbuttons2" src="modelECMORespiratoryVR_BloodGasesTransport_BloodyMaryPPG2.js"
                    fminame="modelECMORespiratoryVR_BloodGasesTransport_BloodyMaryPPG2" tolerance="0.000001"
                    starttime="0" fstepsize="0.01" fpslimit="1" guid="{83d444de-f6b1-4a60-a953-199d3e7b2d57}"
                    valuereferences="905975257,369103464,905975068,905975254,905974373,905975067,905975342,905972510,16777311,16777312,905975256,335544320,637537073,637538918,637538919"
                    valuelabels="venous.sO2,arterial.sO2,tissueUnit[1].sO2,venous.pH,arterial.pH,tissueUnit[1].pH,AirO2.y,AirN2,AirCO2,AirH2O,venous.pCO2,plethy,respiratoryCenter.VentilationSwitch.y,arterial.pO2,arterial.pCO2"
                    inputs="rate,16777223,1,60,t;idco2,16777311,1,100,t;idh2o,16777312,1,100,t;idshunts,16777227,1,100,t;iddeadspace,16777225,1,1000000,t;ido2,16777547,1,100,t;idventilation,16777511,1,1,t"
                    inputlabels="RR,AirCO2,AirH2O,cShuntFrac,DV,AirO2Fraction.k,respiratoryCenter.ArtificialVentilation.k"></bdl-fmi>
                <bdl-fmi id="ventilator" mode="continuous" showcontrols="false" controlid="controlbuttons2"
                    src="modelECMORespiratoryVR_BloodGasesTransport_LungVentilatorSCMV2.js"
                    fminame="modelECMORespiratoryVR_BloodGasesTransport_LungVentilatorSCMV2" tolerance="0.0001"
                    starttime="0" fstepsize="0.1" fpslimit="10" guid="{67602ceb-0a4d-46bc-8ee5-bb8b3e656885}"
                    valuereferences="637534443,637534485,16777227,16777225,16777240,16777241,16777242,335544321,369099030"
                    valuelabels="expiration.q_in.p,lungs.volume,RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.Eratio,ventilatorSCMV.pause,ventilation,filter.y"
                    inputs="rate,16777227,1,60,t;idtv,16777225,1,1000000,t;idiratio,16777240,1,1,t;idpause,16777242,1,100,t;ideratio,16777241,1,1,t"
                    inputlabels="RR,TV,ventilatorSCMV.Iratio,ventilatorSCMV.pause,ventilatorSCMV.Eratio"></bdl-fmi>
                <bdl-fmi id="hemodynamics" mode="continuous" showcontrols="false" controlid="controlbuttons2"
                    src="modelECMORespiratoryVR_BloodGasesTransport_MeursModel2011_HemodynamicsRegulatedHR.js"
                    fminame="modelECMORespiratoryVR_BloodGasesTransport_MeursModel2011_HemodynamicsRegulatedHR"
                    tolerance="0.000001" starttime="0" fstepsize="0.05" fpslimit="20"
                    guid="{87860081-905b-4adf-b51a-cdbabd18cf3e}"
                    valuereferences="905970357,905970199,905970200,33554460,637534720"
                    valuelabels="EithaPressure.pressure,arterialPressure.systolic,arterialPressure.diastolic,Ecg.ecg,currentHeartReat.y"
                    inputs="sO2,16777391,1,1,t" inputlabels="sO2.k"></bdl-fmi>
            </div>
            <div class="w3-row">
                <div class="w3-twothird">
                    &nbsp;<bdl-chartjs-time width="390" height="60" fromid="ventilator" labels="lungs volume"
                        refindex="1" refvalues="1" minichart="true" colorindex=5
                        initialdata="0,0.01;0.0023,0.0023" maxdata="150"></bdl-chartjs-time><br />
                    &nbsp;<bdl-chartjs-time width="390" height="60" fromid="hemodynamics" labels="ecg" refindex="3"
                        refvalues="1" throttle="100" colorindex="2" minichart="true"
                        initialdata="0,0.01;0,0" maxdata="300"></bdl-chartjs-time>
                    &nbsp;<bdl-chartjs-time width="390" height="150" fromid="hemodynamics" labels="pulsatile sO2"
                        refindex="0" refvalues="1" throttle="100" colorindex="4" minichart="false" convertors="0.0075,1.3,10" min="60" max="140"
                        initialdata="0,0.01;11370,11370" maxdata="300"></bdl-chartjs-time>
                </div>
                <div class="w3-third">
                    <div class="w3-card w3-text-aqua w3-xlarge" style="white-space:nowrap">
                        &nbsp;RR&nbsp;<b class="w3-xxlarge"><bdl-value id="v1" style="display:none" fromid="ventilator" refindex="8"
                                convertor="60,1" precision="2" value="33"></bdl-value></b>&nbsp;<span
                            class="w3-small">1/min</span>
                        <div class="w3-text-light-green w3-xlarge">
                            &nbsp;HR<b class="w3-xxlarge"><bdl-value id="v2" style="display:none" fromid="hemodynamics" refindex="4"
                                    convertor="60,1" tofixed="0"></bdl-value></b>&nbsp;<span
                                class="w3-small">1/min</span>
                        </div>
                        <br />
                        <div class="w3-text-red w3-large">
                            &nbsp;NIBP<b class="w3-xlarge"><bdl-value id="v3" style="display:none" fromid="hemodynamics" refindex="1"
                                    convertor="0.0075,1.3,10" precision="3"></bdl-value>/<bdl-value fromid="hemodynamics" id="v4" style="display:none" 
                                    refindex="2" convertor="0.0075,1.3,10" tofixed="0"></bdl-value></b>
                            <span class="w3-small">mmHg</span>
                        </div>
                        <br />
                        <div class="w3-text-teal w3-xlarge" id="v6" style="display:none">
                            &nbsp;Gly 46 <span class="w3-small">mmol/l</span>
                        </div><br/>
                        <div class="w3-text-orange w3-xlarge" id="v7" style="display:none">
                            &nbsp;CRP 58 <span class="w3-small">mg/l</span>
                        </div><br/>
                        <div class="w3-text-pink w3-xlarge" id="v8" style="display:none">
                            &nbsp;T 37.5 <span class="w3-small">°C</span>
                        </div>                                                
                    </div>
                </div>
            </div>
            <div class="w3-row">
                <div class="w3-twothird">
                    <div class="w3-row">
                        &nbsp;<bdl-chartjs-time width="390" height="120" fromid="idfmi" labels="sO2" refindex="1"
                            refvalues="1" throttle="1000" colorindex="4" minichart="false" min="0.8" max="1.0"
                            initialdata="0,0.01;0.98,0.98" displayxticks="false"></bdl-chartjs-time>
<!--                        &nbsp;<bdl-chartjs-time width="390" height="60" fromid="idfmi" labels="pO2,pCO2" refindex="13"
                            refvalues="2" throttle="1000" colorindex="6" minichart="true"></bdl-chartjs-time-->
                    </div>
                </div>
                <div class="w3-third">
                    <div class="" style="white-space:nowrap">
                        <div class="w3-text-yellow w3-large">
                            &nbsp;sO<sub>2</sub><sup>art</sup><b class="w3-xxlarge"><bdl-value fromid="idfmi" id="v5" style="display:none" 
                                    refindex="1" convertor="100,1" precision="4"></bdl-value></b>&nbsp;<span
                                class="w3-small">%</span><br /></div>
                                <!--                        <div class="w3-text-red w3-large">&nbsp;pO<sub>2</sub><sup>art</sup><b
                                class="w3-large"><bdl-value fromid="idfmi" refindex="13" convertor="1,133.322"
                                    precision="4" convertors="1,133.322"></bdl-value></b>&nbsp;<span
                                class="w3-small">mmHg</span><br /></div>
                        <div class="w3-text-green w3-large">&nbsp;pCO<sub>2</sub><sup>art</sup><b
                                class="w3-large"><bdl-value fromid="idfmi" refindex="14" convertor="1,133.322"
                                    precision="4" convertors="1,133.322"></bdl-value></b>&nbsp;<span
                                class="w3-small">mmHg</span></div>
-->                                
                    </div>
                </div>
            </div>
        </div>
        <div style="display:none" id="vcontrols" class="w3-card">
            <button class="w3-button w3-red"
                onclick="document.getElementById('vcontrols').style.display='none'">X</button>
            <!--bdl-remote-value remoteurl="https://patf-lab06.lf1.cuni.cz:5000/lungsim" interval="1000" id="lungsim"
                inputs="rate;muscle_pressure;blend_duration;compliance;peep;resistance;run"></bdl-remote-value-->
            <!--bdl-remote-value remoteurl="https://patf-lab06.lf1.cuni.cz:5000/cardiohelp" interval="1000" id="cardiohelp"
                inputs="p_art;p_ven;temp;dot_v"></bdl-remote-value-->
            <!--bdl-remote-value remoteurl="https://patf-lab06.lf1.cuni.cz:5000/manequin" interval="1000"
                id="manequin"></bdl-remote-value-->
            <div class="w3-row">
                <div class="w3-half">
                    <div class="w3-row">
                        <div class="w3-twothird">
                           ![body](body.png)
                            <bdl-chartjs-time id="id11" width="500" height="150" fromid="lungsim" refindex="7"
                                refvalues="1" labels="tidal volume"></bdl-chartjs-time>
                        </div>
                        <div class="w3-third w3-tiny">
                            eGolem simulator <bdl-checkbox id="run" default="true" titlemin="STOPPED"
                                titlemax="RUNNING"></bdl-checkbox><br />
                            <bdl-buttonparams title="Normal breathing"
                                ids="blend_duration,compliance,muscle_pressure,peep,resistance,rate"
                                values="4,50,11,5,35,17"></bdl-buttonparams>
                            <bdl-buttonparams title="Kussmaul "
                                ids="blend_duration,compliance,muscle_pressure,peep,resistance,rate"
                                values="4,50,51,5,19,33"></bdl-buttonparams>
                            <bdl-buttonparams title="Type 2 hypocapnic"
                                ids="blend_duration,compliance,muscle_pressure,peep,resistance,rate"
                                values="4,20,8,5,40,40"></bdl-buttonparams>
                            <bdl-range id="blend_duration" min="1" max="10" default="4" step="1"
                                title="how many breaths to change value [1]"></bdl-range><br />
                            <bdl-range id="compliance" min="0.5" max="250" default="50" step="0.5"
                                title="Compliance [ml/cmH2O]"></bdl-range><br />
                            <bdl-range id="muscle_pressure" min="0" max="100" default="11"
                                title="Muscle Pressure [cmH2O]"></bdl-range><br />
                            <bdl-range id="peep" min="4" max="8" default="5"
                                title="Initial pressure [cmH2O]"></bdl-range><br />
                            <bdl-range id="resistance" min="8" max="150" default="35"
                                title="Resistance [cmH2O/(l.s)]"></bdl-range><br />
                            <bdl-range id="rate" min="0" max="100" default="33" step="0.5"
                                title="breath rate [1/min]" initdefault="true"></bdl-range><br />
                            <bdl-range id="id5" title="Breath volume [ml]" min="100" max="2500" default="500" step="1"
                                maxlength="8" fromid="lungsim" refindex="7"></bdl-range>
                        </div>
                    </div>
                </div>
                <div class="w3-half">
                    <div class="w3-row">
                        <div class="w3-third">
                            ![cardiohelp](cardiohelp.jpg)
                        </div>
                        <div class="w3-twothird w3-tiny">
                            <div class="w3-hide">
                                <bdl-value-boolean fromid="cardiohelp" refindex="0" throttle="0"
                                    valuetrue="BUBBLE CONNECTED"
                                    valuefalse="bubble disconnected"></bdl-value-boolean><br />
                                dot_v:<bdl-value fromid="cardiohelp" refindex="1" throttle="0"></bdl-value><br />
                                <bdl-range id="dot_v" min="0" max="1600" default="100" step="1"
                                    title="dot_v [l/min]"></bdl-range><br />
                                <bdl-range id="p_art" min="0" max="160" default="100" step="1" title="p_art [mmHg]"
                                    ids2="p_art" convertors="1,133.322" fromid="idfmi" refindex="17"></bdl-range><br />
                                <bdl-value fromid="cardiohelp" refindex="3" throttle="0"></bdl-value><br />
                                <bdl-range id="p_ven" min="0" max="160" default="20" step="1" title="p_ven [mmHg]"
                                    ids2="p_art" convertors="1,133.322" fromid="idfmi" refindex="18"></bdl-range><br />
                                <bdl-value fromid="cardiohelp" refindex="4" throttle="0"></bdl-value><br />
                                rpm: <bdl-value fromid="cardiohelp" refindex="5" throttle="0"></bdl-value><br />
                                <bdl-range id="temp" min="20" max="42" default="37.5" step="0.1"
                                    title="temp [deg C]"></bdl-range><br />
                                <bdl-value fromid="cardiohelp" refindex="6" throttle="0"></bdl-value><br />
                            </div>
                            <bdl-value-boolean fromid="manequin" refindex="0" throttle="0" valuetrue="CANULA CONNECTED"
                                valuefalse="canula disconnected"></bdl-value-boolean><br />
                            <bdl-value-boolean fromid="manequin" refindex="1" throttle="0" valuetrue="ECMO CONNECTED"
                                valuefalse="ecmo disconnected"></bdl-value-boolean><br />
                            <bdl-value-boolean fromid="manequin" refindex="2" throttle="0" valuetrue="O2 CONNECTED"
                                valuefalse="O2 disconnected"></bdl-value-boolean><br />
                            <bdl-value-boolean fromid="cardiohelp" refindex="2" throttle="0" valuetrue="OXY CONNECTED"
                                valuefalse="oxy disconnected"></bdl-value-boolean><br />
                            <bdl-chartjs-time id="id12" width="200" height="150" fromid="cardiohelp" refindex="5"
                                refvalues="1" labels="RPM" maxdata="86400"></bdl-chartjs-time>
                            ## **ECMO**
                            <div class="w3-hide">
                                <bdl-range id="id7" title="ECMO setting: 0 - VV; 1 - VA" min="0" max="1" default="0"
                                    step="1" maxlength="4"></bdl-range>
                                <bdl-range id="id8" title="rotation of ECMO [rpm]" min="0" max="5000" default="0"
                                    step="50" fromid="cardiohelp" refindex="5"></bdl-range>
                                <bdl-range id="id9" title="Sweep (volume of gases going through ECMO)[ml/min]" min="0"
                                    max="8000" default="0" step="250" maxlength="8"></bdl-range>
                                <bdl-range id="id10" title="Fraction conc. of O2[0-1]" min="0.21" max="1" default="0.21"
                                    step="0.01" maxlength="8"></bdl-range>
                            </div>
                            <bdl-buttonparams title="Set basic VV-ECMO" ids="id7,id8,id9,id10"
                                values="0,3500,2500,0.8"></bdl-buttonparams>
                            <bdl-buttonparams title="Set basic VA-ECMO" ids="id7,id8,id9,id10"
                                values="1,4000,3000,0.5"></bdl-buttonparams>
                        </div>
                    </div>
                </div>
            </div> <!-- controls -->
        </div>
        <sup>v.24.2</sup>
    </div>
    <div class="w3-padding w3-half w3-xlarge">
     <div class="w3-khaki">
        Muž 42 let, přijat na pohotovost v celkově zhoršeném stavu. 
    </div>
    <br/>
<bdl-quizx id="q0" type="choice"
          question="1. Jaké objektivní vyšetření lze u pacienta provést jehož výsledek je znám ihned (během sekund až minut)" 
          answers="A. poslechové vyšetření dechu|B. poslechové vyšetření srdce|C. změření atreriálního tlaku|D. saturace kyslíku v krvi z prstu|E. stanovení glykémie glukometrem z prstu|F. krevní obraz|G. biochemie krve a moči|H. ASTRUP vyšetření tepenné nebo kapilární krve" 
          correctoptions="true|true|true|true|true|false|false|false" 
          explanations="ano|ano|ano|ano|ano|ne|ne|ne" 
          buttontitle="zkontrolovat odpověď" ></bdl-quizx>    
<bdl-quizx id="q1" type="choice2" 
          question="2. Spusťte nebo sledujte simulaci a jaká je přibližně dechová frekvence" 
          answers="A. 17 /min|B. 25 /min|C. 33 /min" 
          correctoptions="false|false|true" 
          explanations="ne|ne|ano" 
          buttontitle="zkontrolovat odpověď" ></bdl-quizx>
<bdl-quizx id="q2" type="choice2" 
          question="3. jaká je přibližně tepová frekvence" 
          answers="A. 51 /min|B. 71 /min|C. 121 /min" 
          correctoptions="false|true|false" 
          explanations="ne|ano|ne" 
          buttontitle="zkontrolovat odpověď" ></bdl-quizx>
<bdl-quizx id="q3" type="choice2" 
          question="4. jaký je arteriální tlak, zvolte nejbližší hodnotu" 
          answers="A. 126/82 mmhg|B. 107/74 mmhg|C. 149/98 mmhg" 
          correctoptions="false|true|false" 
          explanations="ne|ano|ne" 
          buttontitle="zkontrolovat odpověď" ></bdl-quizx>        
<bdl-quizx id="q4" type="choice2" 
          question="5. jaká je saturace kyslíku v krvi, zvolte nejbližší hodnotu" 
          answers="A. 85 %|B. 91%|C. 98%" 
          correctoptions="false|true|false" 
          explanations="ne|ano|ne" 
          buttontitle="zkontrolovat odpověď" ></bdl-quizx>
<bdl-quizx id="q5" type="choice2" 
          question="6. zkuste uhodnout hladinu glykémie z glukometru" 
          answers="A. 3.1 mmol/l|B. 5.7 mmol/l|C. 11 mmol/l|D. 46 mmol/l" 
          correctoptions="false|false|false|true" 
          explanations="ne|ne|ne|ano" 
          buttontitle="zkontrolovat odpověď" ></bdl-quizx>          
<bdl-quiz-summary id="qs1">
  Shrnutí odpovědí:
  <button class="w3-right w3-button w3-theme" onclick="document.querySelectorAll('#v1, #v2, #v3, #v4, #v5, #v6,#v7,#v8').forEach(el => el.style.display = 'inline');">Zobraz hodnoty</button>
</bdl-quiz-summary>           
<bdl-quiz-control ids="q0,q1,q2,q3,q4,q5,qs1"></bdl-quiz-control>                
    </div>
</div>

