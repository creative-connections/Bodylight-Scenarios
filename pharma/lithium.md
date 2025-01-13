<div class="w3-row">
<div class="w3-half">

## lithium carbonate

Pharmacokinetic of drug concentration in plasma after administration.
<bdl-fmi id="idfmi" mode="oneshot" src="Pharmacolibrary_Test_SingleCompartment_PBPKModel.js" fminame="Pharmacolibrary_Test_SingleCompartment_PBPKModel" tolerance="0.000001" starttime="0" stoptime="986400" fstepsize="1000" fpslimit="60" guid="{88014fb9-2d2b-4180-a1c7-6fc5acc651c6}" valuereferences="637534227,16777227,16777226" valuelabels="distribution.C,Cmax,Cmin" inputs="vd,16777220,1,1,t;clearance,16777222,1,1,t;bioavailability,16777221,1,1,t;adminmass,16777224,1,1,t;adminduration,16777223,60,1,t;adminperiod,16777217,3600,1,t;admincount,16777218,1,1,t;cmin,16777226,1,1,f;cmax,16777227,1,1,f;firstadmin,16777216,60,1,t" inputlabels="VdPerKg,Cl,F,adminMassMg,adminDuration,periodicDose.adminPeriod,periodicDose.doseCount,Cmin,Cmax,periodicDose.firstAdminTime"></bdl-fmi>

<bdl-chartjs-time width="600" height="400" fromid="idfmi" labels="drug concentration [g/l],min,max" initialdata="" refindex="0" refvalues="3" maxdata="8192" throttle="50"></bdl-chartjs-time>

</div>
<div class="w3-half">

One compartment model parameters:

<bdl-range id="bioavailability" title="bioavailability" min="0.8" max="1" default="0.95" step="0.05" initdefault="true"></bdl-range><br/>
<bdl-range id="vd" title="volume of distribution [l/kg]" min="1" max="5" default="3" step="0.1" initdefault="true"></bdl-range><br/>
<bdl-range id="clearance" title="clearance [l/h]" min="2" max="20" default="9.4" step="0.1" initdefault="true"></bdl-range><br/>

Therapeutical range min and max:

<bdl-range id="cmin" title="Cmin [g/l]" min="0.001" max="0.01" default="0.004" step="0.001" initdefault="true"></bdl-range><br/>
<bdl-range id="cmax" title="Cmax [g/l]" min="0.001" max="0.02" default="0.008" step="0.001" initdefault="true"></bdl-range><br/>
<br/>

Dose administration parameters:

<bdl-range id="adminmass" title="admin dose mass [mg]" min="500" max="2000" default="1500" step="100" initdefault="true"></bdl-range><br/>
<bdl-range id="firstadmin" title="first dose administration [min]" min="30" max="120" default="30" step="10" initdefault="true"></bdl-range><br/>
<bdl-range id="admincount" title="how many times " min="1" max="21" default="10" step="1" initdefault="true"></bdl-range><br/>
<bdl-range id="adminperiod" title="period between doses [h]" min="1" max="48" default="24" step="1" initdefault="true"></bdl-range><br/>
<bdl-range id="adminduration" title="administration duration [min]" min="1" max="720" default="720" step="1" initdefault="true"></bdl-range><br/>


</div>
</div>

