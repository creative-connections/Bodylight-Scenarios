<div class="w3-row">
<div class="w3-half">

Simulace a management léčby:
**Human simulator <bdl-checkbox id="run" default="true" titlemin="STOPPED" titlemax="RUNNING"></bdl-checkbox><br/>**
<!--bdl-range id="rate" min="0" max="100" default="7" step="0.5" title="breath rate [1/min]"></bdl-range><br/-->
<div class="w3-hide">
<bdl-range id="blend_duration" min="1" max="10" default="4" step="1" title="how many breaths to change value [1]"></bdl-range><br/>
<bdl-range id="compliance" min="0.5" max="250" default="50" step="0.5" title="Compliance [ml/cmH2O]"></bdl-range><br/>
<bdl-range id="muscle_pressure" min="0" max="100" default="33" title="Muscle Pressure [cmH2O]"></bdl-range><br/>
<bdl-range id="peep" min="4" max="8" default="5" title="Initial pressure [cmH2O]"></bdl-range><br/>
<bdl-range id="resistance" min="8" max="150" default="35" title="Resistance [cmH2O/(l.s)]"></bdl-range><br/>
<!--bdl-range id="status" min="0" max="150" default="" title="Helper - use for state"></bdl-range><br/-->
</div>
<bdl-buttonparams title="normální dýchání" ids="blend_duration,compliance,muscle_pressure,peep,resistance,rate,status" values='4,50,33,5,35,17,"k1vysetreniastrup.md"'></bdl-buttonparams>
<bdl-buttonparams title="Kussmaulovo dýchání" ids="blend_duration,compliance,muscle_pressure,peep,resistance,rate,status" values='4,50,50,5,15,25,"index.md"'></bdl-buttonparams>
<bdl-buttonparams title="SA nomogram" ids="status" values='"k1vysetreniastrup.md"'></bdl-buttonparams>
<bdl-buttonparams title="EN nomogram" ids="status" values='"k1vysetreniastrup2.md"'></bdl-buttonparams>

<bdl-chartjs-time id="id11" width="500" height="150" fromid="lungsim" refindex="7" refvalues="1" labels="tidal volume"></bdl-chartjs-time>

<bdl-value fromid="manequin" refindex="3"></bdl-value>

</div>
<div class="w3-half">

<bdl-remote-value remoteurl="https://patf-lab06.lf1.cuni.cz:5000/lungsim" interval="1000" id="lungsim" inputs="rate;muscle_pressure;blend_duration;compliance;peep;resistance;run"></bdl-remote-value>
<bdl-remote-value remoteurl="https://patf-lab06.lf1.cuni.cz:5000/cardiohelp" interval="1000" id="cardiohelp" inputs="p_art;p_ven;temp;dot_v"></bdl-remote-value>
<bdl-remote-value remoteurl="https://patf-lab06.lf1.cuni.cz:5000/manequin" interval="1000" id="manequin" inputs="status"></bdl-remote-value>
<span class="w3-tiny"><a href="https://patf-lab06.lf1.cuni.cz:5000/manequin" target="_blank">visit and enable self-signed cert: https://patf-lab06.lf1.cuni.cz:5000/manequin</a></span>
![body](k1dm1/body.png)

</div>
</div>