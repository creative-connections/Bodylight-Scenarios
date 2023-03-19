<div class="w3-row">
<div class="w3-half">

<bdl-quiz id="q1" question="1. Spárujte termíny objemu krve s odpovídající definicí" terms="objem krve|elastický objem (stressed volume)|neelastický objem (unstressed volume)v" answers="celkový objem krve v cirkulaci, v srdci, tepnách a žílách|objem, na nejž působí elastické vlastnosti tepen a žil a který má vliv na tlakové vlastnosti|celkový objem v žilách tepnách, na než nemají vliv elastické vlastnosti cév, nemá vliv na tlak as" type="match"></bdl-quiz>

<bdl-quiz id="q2" question="2. Spusťte simulaci a přiřaďte normální (obvyklé) hodnoty k veličinám" terms="celkový objem krve|elastický objem (stressed volume)|neelastický objem (unstressed volume)" answers="přibližně 5 <i>l</i> | přibližně 1.5l| přibližně 3.5l" type="match"></bdl-quiz>
<bdl-quiz-control ids="q1,q2"></bdl-quiz-control>

</div>
<div class="w3-half">

<bdl-fmi id="idfmi" mode="continuous" src="Frvs_SimpleCirculationSurfaceChip.js" fminame="Frvs_SimpleCirculationSurfaceChip" tolerance="0.000001" starttime="0" fstepsize="0.2" fpslimit="5" guid="{d1eaaf2a-6d5e-4113-9f66-e83bf4165a17}" valuereferences="637534234,637534242,234881031,637534263,637534262,637534259,637534261,33554433,100663310,100663308,100663311,234881026,234881027,234881030,234881029,16777220,637534214,100663297,234881036,100663315,100663306,100663305,234881042,234881041,100663317,100663318,905969671" valuelabels="simpleCirculationChip.RightHeart.Inflow.Q,simpleCirculationChip.LeftHeart.Inflow.Q,CVP.y,simpleCirculationChip.PlumonaryVeins.Pressure,simpleCirculationChip.SystemArteries.Pressure,simpleCirculationChip.PlumonaryArteries.Pressure,simpleCirculationChip.SystemVeins.Pressure,simpleCirculationChip.PlumonaryVeins.Volume,simpleCirculationChip.PlumonaryVeins.Compliance,simpleCirculationChip.TPR_BloodResistance,simpleCirculationChip.TSR_BloodResistance,RT.y,RP.y,CAP.y,CVS.y,CAS.k,simpleCirculationChip.TBV_BloodVolume,bloodVolume1.V0,dSV.y,normalBloodVolume.bV,BMI.bmi,bodySurface.bodySurface,bh.y,bw.y,SV.y,normalV0.y,TotalStressedVolume.y" inputs="a_range,16777235,60,1,-3000,t;b_range,16777228,-2000,50,2000,t;weight_range,16777233,55,50,20,t;height_range,16777234,105,50,70,t" inputlabels="dBV.k,dSV.k,bw.k,bh.k"></bdl-fmi>


<bdl-animate-adobe src="ObehovySystem.js" name="ObehovySystem" fromid="idfmi" width="932" height="313" id="idadobe"></bdl-animate-adobe>


<bdl-bind2a findex="9" aname="weight_range" amin="0" amax="99"></bdl-bind2a>
<bdl-bind2a-text findex="19" aname="anorm_text" convertor="1,1000" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="22" aname="height_text" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="23" aname="weight_text" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="26" aname="h_text" convertor="1,1000" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="17" aname="g_text" convertor="1,1000" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="20" aname="bmi_text" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="21" aname="surface_text" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="1" aname="y_text" convertor="60,1000" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="0" aname="x_text" convertor="60,1000" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="12" aname="w_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="11" aname="c1_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="15" aname="t_text" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="14" aname="m_text" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="2" aname="p_text" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="13" aname="i_text" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="17" aname="b_text" convertor="1,1000" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="16" aname="a_text" convertor="1,1000" fixed="2"></bdl-bind2a-text>
<bdl-bind2a findex="10" aname="RS_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="9" aname="RP_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="8" aname="HorniCervena_anim" amin="0" amax="99"></bdl-bind2a>
<bdl-bind2a findex="26" aname="children.7.Obrys_anim" amin="0" amax="99" fmin="0" fmax="7" convertor="1,1000"></bdl-bind2a>
<bdl-bind2a findex="17" aname="children.7.HorniHladina_anim" amin="0" amax="99" fmin="0" fmax="7" convertor="1,1000"></bdl-bind2a>
<bdl-bind2a findex="26" aname="children.7.SpodniHladina_anim" amin="0" amax="99" fmin="0" fmax="7" convertor="1,1000"></bdl-bind2a>
<bdl-bind2a findex="6" aname="ValecModrySpodni_anim" amin="99" amax="0" fmin="2" fmax="10"></bdl-bind2a>
<bdl-bind2a findex="5" aname="ValecModryHorni_anim" amin="99" amax="0" fmin="8" fmax="32"></bdl-bind2a>
<bdl-bind2a findex="4" aname="ValecCervenySpodni_anim" amin="99" amax="0" fmin="60" fmax="180"></bdl-bind2a>
<bdl-bind2a findex="3" aname="ValecCervenyHorni_anim" amin="99" amax="0" fmin="4" fmax="20"></bdl-bind2a>
<bdl-bind2a findex="-1" aname="lspump_checkbox.children.1.LSSipka1_anim" amin="0" amax="99" fmin="0" fmax="99" convertor="x * 20 % 100"></bdl-bind2a>
<bdl-bind2a findex="-1" aname="lspump_checkbox.children.1.LSSipka2_anim" amin="0" amax="99" fmin="0" fmax="99" convertor="x * 20 % 100"></bdl-bind2a>
<bdl-bind2a findex="-1" aname="pspump_checkbox.children.1.PSSipka1_anim" amin="0" amax="99" fmin="0" fmax="99" convertor="x * 20 % 100"></bdl-bind2a>
<bdl-bind2a findex="-1" aname="pspump_checkbox.children.1.PSSipka2_anim" amin="0" amax="99" fmin="0" fmax="99" convertor="x * 20 % 100"></bdl-bind2a>
<!--bdl-bind2a findex="2" aname="j_range" amin="0" amax="99"></bdl-bind2a-->
<!-- tlakove valce -->
<!-- sipky s toke v srdci -->


</div>
</div>

