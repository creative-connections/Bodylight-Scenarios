<div class="w3-row">
    <div class="w3-half w3-padding">
        <div class="w3-black">
            <div class="w3-blue" style="position: absolute">
                <bdl-animate-control id="controlbuttons2" controlfmi="true" showstep="false"></bdl-animate-control>
                <!-- not optimalized -O0 --><bdl-fmi id="idfmi" mode="continuous" showcontrols="false"
                    controlid="controlbuttons2" src="modelECMORespiratoryVR_BloodGasesTransport_BloodyMaryPPG2.js"
                    fminame="modelECMORespiratoryVR_BloodGasesTransport_BloodyMaryPPG2" tolerance="0.000001"
                    starttime="0" fstepsize="0.01" fpslimit="0.2" guid="{83d444de-f6b1-4a60-a953-199d3e7b2d57}"
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
                        refindex="0" refvalues="1" throttle="100" colorindex="4" minichart="false" convertors="0.0075,1.4" min="60" max="140"
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
                                    convertor="0.0075,1.4" tofixed="0"></bdl-value>/<bdl-value fromid="hemodynamics" id="v4" style="display:none" 
                                    refindex="2" convertor="0.0075,1.4" tofixed="0"></bdl-value></b>
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
        <sup>v.20.3</sup>
        <div class="w3-hide">
            <bdl-range id="rate" min="0" max="100" default="33" step="0.5" title="breath rate [1/min]" initdefault="true"></bdl-range>
        </div>        
    </div>
    <div class="w3-padding w3-half w3-xlarge">
     <div class="w3-sand">
       A 42-year-old man, admitted to the emergency department in an overall deteriorated condition. 
    </div>
    <br/>
<bdl-quizx id="q1.1" type="choice"
          question="1.1 What objective examination can be performed on a patient whose result is known immediately (within seconds to minutes)"
          answers="A. Auscultation of breathing|B. Auscultation of the heart|C. Measurement of arterial pressure|D. Blood oxygen saturation from the finger|E. Glycemia determination by glucometer from the finger|F. Blood count|G. Blood and urine biochemistry|H. ASTRUP examination of arterial or capillary blood"
          correctoptions="true|true|true|true|true|false|false|false"
          explanations="yes|yes|yes|yes|yes|no|no|no"
          buttontitle="check answer" ></bdl-quizx>
<bdl-quizx id="q1.2" type="choice2"
          question="1.2 Start or watch the simulation and what is the approximate respiratory rate. (hint: charts show values of last 15 s)"
          answers="A. 17 /min|B. 25 /min|C. 33 /min"
          correctoptions="false|false|true"
          explanations="no|no|yes"
          buttontitle="check answer" ></bdl-quizx>
<bdl-quizx id="q1.3" type="choice2"
          question="1.3 What is the approximate heart rate? (hint: charts show values of last 15 s)"
          answers="A. 51 /min|B. 71 /min|C. 121 /min"
          correctoptions="false|true|false"
          explanations="no|yes|no"
          buttontitle="check answer" ></bdl-quizx>
<bdl-quizx id="q1.3" type="choice2"
          question="1.4 What is the arterial pressure, choose the closest value (hint: estimate based on chart scale)"
          answers="A. 123/86 mmhg|B. 90/60 mmhg|C. 140/90 mmhg"
          correctoptions="false|true|false"
          explanations="no|yes|no"
          buttontitle="check answer" ></bdl-quizx>
<bdl-quizx id="q1.5" type="choice2"
          question="1.5 What is the blood oxygen saturation, choose the closest value (hint: estimate based on chart scale)"
          answers="A. 85 %|B. 91%|C. 98%"
          correctoptions="false|true|false"
          explanations="no|yes|no"
          buttontitle="check answer" ></bdl-quizx>
<bdl-quizx id="q1.6" type="choice2"
          question="1.6 Patient mentions that he takes insulin. But during infection he starts to take it non-regularly. Glycemia test returns abnormal value. Try to guess the glycemia level returned"
          answers="A. 3.1 mmol/l|B. 5.7 mmol/l|C. 46 mmol/l"
          correctoptions="false|false|true"
          explanations="no|no|yes"
          buttontitle="check answer" ></bdl-quizx>
<bdl-quiz-summary id="qs1">
  Summary of answers:
  <button class="w3-right w3-button w3-theme" onclick="document.querySelectorAll('#v1, #v2, #v3, #v4, #v5, #v6,#v7,#v8').forEach(el => el.style.display = 'inline');">Show values</button>
</bdl-quiz-summary>
<bdl-quiz-control ids="q1.1,q1.2,q1.3,q1.4,q1.5,q1.6,qs1"></bdl-quiz-control>
</div>
</div>

