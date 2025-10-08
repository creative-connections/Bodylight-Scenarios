<div class="w3-row">
<div class="w3-half">

## Pharmacokinetics model simulation
Lithium Carbonate

<bdl-fmi id="idfmi" mode="oneshot" src="Pharmacolibrary_Test_SingleCompartment_LithiumPK.js" fminame="Pharmacolibrary_Test_SingleCompartment_LithiumPK" tolerance="0.000001" starttime="0" fstepsize="4000" stoptime="864000" fpslimit="60" guid="{ca914a49-a68a-45f5-a637-38f5ccf00bb0}" valuereferences="637534227,16777227,16777226,16777228,16777229" valuelabels="lithiumCarbonate.distribution.C,lithiumCarbonate.Cmax,lithiumCarbonate.Cmin,lithiumCarbonate.C1lab,lithiumCarbonate.C2lab" inputs="vd,16777220,1,1,t;clearance,16777222,1,1,t;bioavailability,16777221,1,1,t;adminmass,16777224,1,1,t;adminduration,16777223,60,1,t;adminperiod,16777217,3600,1,t;doseCount,16777218,1,1,t;cmin,16777226,1,1000,f;cmax,16777227,1,1000,f;c1lab,16777228,1,1000,f;c2lab,16777229,1,1,f;firstadmin,16777216,60,1,t" inputlabels="lithiumCarbonate.VdPerKg,lithiumCarbonate.Cl,lithiumCarbonate.F,lithiumCarbonate.adminMassMg,lithiumCarbonate.adminDuration,lithiumCarbonate.periodicDose.adminPeriod,lithiumCarbonate.periodicDose.doseCount,lithiumCarbonate.Cmin,lithiumCarbonate.Cmax,lithiumCarbonate.C1lab,lithiumCarbonate.C2lab,lithiumCarbonate.periodicDose.firstAdminTime"></bdl-fmi>


<bdl-chartjs-time width="400" height="300" fromid="idfmi" labels="drug concentration [mg/l],min,max,lab" initialdata="" refindex="0" refvalues="4" maxdata="10192" throttle="0" responsive="true" convertors="1000,1;1000,1;1000,1;1000,1"></bdl-chartjs-time>

</div>
<div class="w3-half">

##### Optimal dose
1. set C lab value to 12 mg/l: <bdl-range2 id="c1lab" title="C1 lab [mg/l]" min="1" max="20" default="8.5" step="0.1" initdefault="true"></bdl-range2>
2. estimate clearance until C touch lab value <bdl-range2 id="clearance" title="clearance [l/h]" min="2" max="20" default="9.4" step="0.1" initdefault="false"></bdl-range2>
3. change dosage to return C to therapeutic range <bdl-range2 id="adminmass" title="admin dose mass [mg]" min="500" max="2000" default="1500" step="50" initdefault="false"></bdl-range2>

##### PK parameters:

<bdl-range2 id="bioavailability" title="bioavailability" min="0.8" max="1" default="0.95" step="0.05" initdefault="false"></bdl-range2>
<bdl-range2 id="vd" title="volume of distribution [l/kg]" min="1" max="5" default="3" step="0.1" initdefault="false"></bdl-range2>

##### Therapeutical range min and max:

<bdl-range2 id="cmin" title="Cmin [mg/l]" min="1" max="10" default="4" step="1" initdefault="true"></bdl-range2>
<bdl-range2 id="cmax" title="Cmax [mg/l]" min="1" max="20" default="8" step="1" initdefault="true"></bdl-range2>

##### Administration parameters:

<bdl-range2 id="firstadmin" title="first dose administration [min]" min="30" max="120" default="30" step="10" initdefault="false"></bdl-range2>
<bdl-range2 id="admincount" title="how many times " min="1" max="21" default="10" step="1" initdefault="false"></bdl-range2>
<bdl-range2 id="adminperiod" title="period between doses [h]" min="1" max="48" default="24" step="1" initdefault="false"></bdl-range2>
<bdl-range2 id="adminduration" title="administration duration [min]" min="1" max="720" default="720" step="1" initdefault="false"></bdl-range2>

</div>
</div>
