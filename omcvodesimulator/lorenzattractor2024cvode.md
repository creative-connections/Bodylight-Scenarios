# Lorenz Attractor

Model generated by OM 1.23 with CVODE solver. Compiled by EMScripten 3.1.14

<bdl-fmi id="idfmi" mode="continuous" src="LorenzAttractor2024CVODE2.js" fminame="LorenzAttractor2024CVODE2" fmifunctionprefixname="LorenzAttractor2024" tolerance="0.000001" starttime="0" fstepsize="0.001" fpslimit="60" guid="{8c4e810f-3df3-4a00-8276-176fa3c9f9e0}" valuereferences="0,1,2" valuelabels="x,y,z" inputs="id1,8,1,1,f;id2,7,1,1,f;id3,6,1,1,f" inputlabels="sigma,ro,beta" debug="1"></bdl-fmi>

<bdl-range id="id1" title="sigma" min="0" max="100" default="10" step="0.1"></bdl-range>

<bdl-range id="id2" title="ro" min="0" max="1000" default="99.96" step="0.01"></bdl-range>

<bdl-range id="id3" title="beta" min="0" max="10" default="2.67" step="0.01"></bdl-range>


<bdl-chartjs-xy id="id10" width="400" height="400" fromid="idfmi" labels="x,y" initialdata="" refindex="0" refvalues="2" maxdata="8192"></bdl-chartjs-xy>