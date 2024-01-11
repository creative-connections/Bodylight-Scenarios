# test with EULER solver

Test Pulsatile circulation - non-linear model exported from OpenModelica FMU/co simulation with EULER solver. See Javascript console for errors.

<bdl-fmi id="idfmi" mode="continuous" src="PulsatileCirculationEulerOM119.js" fminame="PulsatileCirculationEulerOM119" tolerance="0.000001" starttime="0" fstepsize="0.01" fpslimit="60" guid="{62094bf0-ee88-4265-ac79-d3688aec8ad0}" valuereferences="0,43,38" valuelabels="aorta.volume,aorta.q_in.pressure,aorta.q_in.q" inputs="id1,144,1,60,f" inputlabels="heartRate.k" debug="1"></bdl-fmi>




<bdl-chartjs-time width="600" height="200" fromid="idfmi" labels="aorta volume" initialdata="" refindex="0" refvalues="1"></bdl-chartjs-time>
<bdl-chartjs-time width="600" height="200" fromid="idfmi" labels="aorta pressure" initialdata="" refindex="1" refvalues="1"></bdl-chartjs-time>
<bdl-chartjs-time width="600" height="200" fromid="idfmi" labels="aorta q" initialdata="" refindex="2" refvalues="1"></bdl-chartjs-time>

<bdl-range id="id1" title="heart rate" min="10" max="180" default="60" step="1"></bdl-range>
