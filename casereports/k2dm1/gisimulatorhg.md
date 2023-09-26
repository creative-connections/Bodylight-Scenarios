<div class="w3-row">
<div class="w3-half">

# Glucose Insulin metabolism

**1. start/stop simulation**

<bdl-fmi id="idfmi" mode="continuous" src="Metabolism_GlucoseInsulin_Models_GIRegulationComponent.js" fminame="Metabolism_GlucoseInsulin_Models_GIRegulationComponent" tolerance="0.001" starttime="0" fstepsize="360" fpslimit="10" guid="{27b77776-9fac-46c5-9a3f-9c5961d2e919}" valuereferences="335544322,335544321,637534222,335544320,905969685" valuelabels="glucoseConcMmolL,insulinConc,renalLoss.inflow.q,glucoseConc,to_pmolperL.y" inputs="id1,16777226,1,3600000000,t;id2,16777227,1,1,t;id3,16777225,1,3600000000,t;id4,16777222,1,1,t;id5,16777223,1,1,t;id6,16777229,1,1,t;id7,16777219,1,3600000000,t;id8,16777231,1,1,t;id9,33554434,1,1000,t;id11,16777233,1,1,t" inputlabels="renalLoss.desiredFlowRate,renalLoss.threshold,tissueUtilization.desiredFlowRate,insulinProduction.beta_mu,insulinProduction.phi,tissueUtilizationInsulinDependent.Nu_permu,glucoseProduction.desiredFlowRate,kgperm3tommolperl.k,glucosePortion.ingestAmmount,glucosePortion.ingestRate"></bdl-fmi>

**2. set DM type**

<bdl-buttonparams title="hyperins" ids="id4,id6" values="2860,139000" fromid="idfmi"> </bdl-buttonparams>
<bdl-buttonparams title="normal" ids="id4,id6" values="1430,139000" fromid="idfmi"> </bdl-buttonparams>

**3. administer sugar - meal**

<bdl-buttonparams title="10g (teaspoon)" ids="id9" values="10" fromid="idfmi"> </bdl-buttonparams>
<bdl-buttonparams title="50g (meal)" ids="id9" values="50" fromid="idfmi"> </bdl-buttonparams>
<bdl-buttonparams title="100g (1l coke)" ids="id9" values="100" fromid="idfmi"> </bdl-buttonparams>

**4. change other params manually**

<bdl-range id="id1" title="renalLoss [ml/h]" min="6000" max="72000" default="7200" step="100"></bdl-range>

<bdl-range id="id2" title="renalLoss threshold [mg/ml]" min="0.25" max="5" default="3.8" step="0.05"  initdefault="true"></bdl-range> <!--was 2.5 -->

<bdl-range id="id3" title="tissueUtilization [ml/h]" min="300" max="24700" default="2470" step="10"></bdl-range>

<bdl-range id="id4" title="insulin production (beta) [ml.mU/mg.h]" min="10" max="2860" default="1430" step="10"></bdl-range>

<bdl-range id="id5" title="insulin production threshold (phi) [mg/ml]" min="0.2" max="1" default="0.51" step="0.01"></bdl-range>

<bdl-range id="id6" title="tissueUtilization Insulin Dependent (nu) [ml/h/mU]" min="13900" max="239000" default="139000" step="100"></bdl-range>

<bdl-range id="id7" title="glucose Production Rate [mg/h]" min="800" max="86000" default="8400" step="100"></bdl-range>

<bdl-range id="id11" title="glucose ingest rate" min="0.0001" max="0.001" default="0.0005" step="0.0001" initdefault="true"></bdl-range>

</div>
<div class="w3-half">

<bdl-chartjs-time width="400" height="200" fromid="idfmi" labels="glucose [mmol/l]" initialdata="" refindex="0" refvalues="1" throttle="100" timedenom="3600" maxdata="512"></bdl-chartjs-time> <bdl-value fromid="idfmi" refindex="0" default="0" class="w3-xxlarge w3-right w3-blue" throttle="1000"></bdl-value>

<bdl-chartjs-time width="400" height="200" fromid="idfmi" labels="insulin [pmol/L]" initialdata="" refindex="4" refvalues="1" throttle="100" timedenom="3600" maxdata="512" colorindex=1></bdl-chartjs-time> <bdl-value fromid="idfmi" refindex="4" default="0"  class="w3-xxlarge w3-right w3-red" throttle="1000"></bdl-value>

<bdl-chartjs-time width="400" height="200" fromid="idfmi" labels="renal loss [g/h]" initialdata="" refindex="2" refvalues="1" throttle="100"  maxdata="512" colorindex=2 convertors="3600000,1" timedenom="3600"></bdl-chartjs-time> <bdl-value fromid="idfmi" refindex="2" default="0"  class="w3-xxlarge w3-right w3-green" throttle="1000" convertor="3600000,1"></bdl-value>



</div>
</div>


