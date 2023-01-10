
Simulátor

<bdl-fmi id="idfmi" mode="continuous" src="Frvs_SimpleCirculationSurfaceChip.js" fminame="Frvs_SimpleCirculationSurfaceChip" tolerance="0.000001" starttime="0" fstepsize="0.2" fpslimit="5" guid="{3887f849-6a8f-4315-82d4-bb29683e5d59}" valuereferences="637534236,637534244" valuelabels="simpleCirculationChip.RightHeart.Outflow.Q,simpleCirculationChip.LeftHeart.Outflow.Q" inputs="" inputlabels=""></bdl-fmi>


<bdl-chartjs-time width="100" height="100" fromid="idfmi" labels="" initialdata="" refindex="0" refvalues="2"></bdl-chartjs-time>

<bdl-animate-adobe src="ObehovySystem.js" name="ObehovySystem" fromid="idfmi" responsible="true" width="1532" height="913"></bdl-animate-adobe>

