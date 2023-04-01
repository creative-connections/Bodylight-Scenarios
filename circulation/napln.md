<div class="w3-row">
<div class="w3-quarter">

<bdl-fmi id="idfmi" mode="continuous" src="Frvs_SimpleCirculationSurfaceChip.js" fminame="Frvs_SimpleCirculationSurfaceChip" tolerance="0.000001" starttime="0" fstepsize="0.2" fpslimit="5" guid="{bd19ad9c-5b98-4ab9-bc89-2a62d5632373}" valuereferences="637534234,637534242,234881031,637534263,637534262,637534259,637534261,33554433,100663310,100663308,100663311,234881026,234881027,234881030,234881029,16777220,637534214,100663297,234881036,100663315,100663306,100663305,234881042,234881041,100663317,100663318,905969671,905969669,905969689,33554433,100663310,637534261,637534263,33554434,637534248,100663307,587202563,637534237,100663312,587202560,33554432,100663314,905969721,905969688,234881024,234881025,637534259,637534262" valuelabels="simpleCirculationChip.RightHeart.Inflow.Q,simpleCirculationChip.LeftHeart.Inflow.Q,CVP.y,simpleCirculationChip.PlumonaryVeins.Pressure,simpleCirculationChip.SystemArteries.Pressure,simpleCirculationChip.PlumonaryArteries.Pressure,simpleCirculationChip.SystemVeins.Pressure,simpleCirculationChip.PlumonaryVeins.Volume,simpleCirculationChip.PlumonaryVeins.Compliance,simpleCirculationChip.TPR_BloodResistance,simpleCirculationChip.TSR_BloodResistance,RT.y,RP.y,CAP.y,CVS.y,CAS.k,simpleCirculationChip.TBV_BloodVolume,bloodVolume1.V0,dSV.y,normalBloodVolume.bV,BMI.bmi,bodySurface.bodySurface,bh.y,bw.y,SV.y,normalV0.y,TotalStressedVolume.y,SA_VplusSV_V.y,PA_VplusPV_V.y,simpleCirculationChip.PV_Volume,simpleCirculationChip.PV_Compliance,simpleCirculationChip.SV_Pressure,simpleCirculationChip.PV_Pressure,simpleCirculationChip.SA_Volume,simpleCirculationChip.SA_SR.BloodFlow,simpleCirculationChip.SA_Compliance,simpleCirculationChip.SystemVeins.bloodFlow.Q,simpleCirculationChip.SV_Volume,simpleCirculationChip.SV_Compliance,simpleCirculationChip.PlumonaryArteries.bloodFlow.Q,simpleCirculationChip.PA_Volume,simpleCirculationChip.PA_Compliance,CIRight.y,CI.y,KRH.y,KLH.y,simpleCirculationChip.PA_Pressure,simpleCirculationChip.SA_Pressure" inputs="f_range,16777223,15.7,50,t;j_range,16777218,1.9,50,t;i_range,16777219,0.19,50,t;c_range,16777222,1.58,50,t;e_range,16777221,105.1,50,t;h_range,16777220,0.78,50,t;a_range,16777235,60,1,-3000,t;b_range,16777228,-2000,50,2000,t;weight_range,16777233,55,50,20,t;height_range,16777234,105,50,70,t;pspump_checkbox.d_range,16777216,8.75,50,t;lspump_checkbox.g_range,16777217,5.25,50,t" inputlabels="CVP.k,RT.k,RP.k,CAP.k,CVS.k,CAS.k,dBV.k,dSV.k,bw.k,bh.k,KRH.k,KLH.k" startafter="6"></bdl-fmi>

# 1. náplň

<bdl-quiz id="q1" question="1.1 Spárujte termíny objemu krve s odpovídající definicí" terms="objem krve|elastický objem (stressed volume)|neelastický objem (unstressed volume)v" answers="celkový objem krve v cirkulaci, v srdci, tepnách a žílách|objem, na nejž působí elastické vlastnosti tepen a žil a který má vliv na tlakové vlastnosti|celkový objem v žilách tepnách, na než nemají vliv elastické vlastnosti cév, nemá vliv na tlak as" type="match"></bdl-quiz>

<bdl-quiz id="q2" question="1.2 Spusťte simulaci a přiřaďte normální (obvyklé) hodnoty k veličinám" terms="celkový objem krve|elastický objem (stressed volume)|neelastický objem (unstressed volume)" answers="přibližně 5 <i>l</i> | přibližně 1.5l| přibližně 3.5l" type="match"></bdl-quiz>

<bdl-quiz id="q3" question="1.3 V simulaci změňte váhu a výšku postavy. Sledujte BMI a přiřaďte co se děje" terms="zvýšená váha a výška - zachované BMI|snížená váha a snížená výška - zachováno BMI" answers="Zvýšený objem krve | snížený objem krve" type="match"></bdl-quiz>

<bdl-quiz-control ids="q1,q2,q3"></bdl-quiz-control>

</div>
<div class="w3-threequarter">


<!--bdl-chartjs-time width="80" height="100" fromid="idfmi" labels="" initialdata="0" refindex="0" refvalues="1" style="position: absolute;top: 21vw;left: 20%;" minichart="true" convertors="60,1000" throttle="1000" maxdata="4096"></bdl-chartjs-time-->

<!--bdl-chartjs-time width="80" height="100" fromid="idfmi" labels="" initialdata="0" refindex="1" refvalues="1" style="position: absolute;top: 21vw;left: 55%;" minichart="true" colorindex="1" convertors="60,1000" throttle="1000" maxdata="4096"></bdl-chartjs-time-->

<bdl-animate-adobe src="ObehovySystem.js" name="ObehovySystem" fromid="idfmi" responsive="true" width="1532" height="913" id="idadobe"></bdl-animate-adobe>
<bdl-bind2a findex="9" aname="weight_range" amin="0" amax="99"></bdl-bind2a>
<bdl-bind2a-text findex="19" aname="anorm_text" convertor="1,1000" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="22" aname="height_text" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="23" aname="weight_text" fixed="0"></bdl-bind2a-text>
<bdl-bind2a-text findex="33" aname="v_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="47" aname="u_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="29" aname="r_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="32" aname="q_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="37" aname="o_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="31" aname="n_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="40" aname="k_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="46" aname="j_text"></bdl-bind2a-text>
<bdl-bind2a-text findex="26" aname="h_text" convertor="1,1000" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="17" aname="g_text" convertor="1,1000" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="20" aname="bmi_text" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="21" aname="surface_text" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="27" aname="c_text" convertor="1,1000" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="28" aname="d_text" convertor="1,1000" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="17" aname="e_text" convertor="1,1000" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="26" aname="f_text" convertor="1,1000" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="43" aname="a1_text" convertor="1,1000" fixed="1"></bdl-bind2a-text>
<bdl-bind2a-text findex="42" aname="b1_text" convertor="1,1000" fixed="1"></bdl-bind2a-text>
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
<bdl-bind2a-text findex="45" aname="lspump_checkbox.s_text" fixed="2"></bdl-bind2a-text>
<bdl-bind2a-text findex="44" aname="pspump_checkbox.l_text" fixed="2"></bdl-bind2a-text>
<bdl-bind2a findex="43" aname="tvar_anim" amin="0" amax="99"></bdl-bind2a>
<bdl-bind2a findex="20" aname="telo_anim" amin="0" amax="99" fmin="16.5" fmax="40"></bdl-bind2a>
<bdl-bind2a findex="41" aname="HorniModry_anim.ModreRozsireniHP_anim.TahModryHorniPravy_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="40" aname="HorniModry_anim.ModreRozsireniHP_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="41" aname="HorniModry_anim.ModreRozsireniHL_anim.TahModryHorniLevy_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="40" aname="HorniModry_anim.ModreRozsireniHL_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="39" aname="HorniModry_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="38" aname="SpodniModra_anim.ModreRozsireniSP_anim.TahModraSpodniPravy_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="37" aname="SpodniModra_anim.ModreRozsireniSP_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="38" aname="SpodniModra_anim.ModreRozsireniSL_anim.TahModraSpodniLevy_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="37" aname="SpodniModra_anim.ModreRozsireniSL_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="36" aname="SpodniModra_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="35" aname="SpodniCervena_anim.CerveneRozsireniPSP_anim.TahCervenySpodniPravy_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="33" aname="SpodniCervena_anim.CerveneRozsireniPSP_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="35" aname="SpodniCervena_anim.CerveneRozsireniPSL_anim.TahCervenySpodniLevy_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="33" aname="SpodniCervena_anim.CerveneRozsireniPSL_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="34" aname="SpodniCervena_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="36" aname="RS_anim" amin="0" amax="99"></bdl-bind2a>
<bdl-bind2a findex="39" aname="RP_anim" amin="0" amax="99"></bdl-bind2a>
<bdl-bind2a findex="32" aname="PlniciTlak2_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="31" aname="PlniciTlak1_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="8" aname="HorniCervena_anim.CerveneRozsireniHP_anim.TahCerveneHorniPravy_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="29" aname="HorniCervena_anim.CerveneRozsireniHP_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="30" aname="HorniCervena_anim.CerveneRozsireniHL_anim.TahCerveneHorniLevy_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="29" aname="HorniCervena_anim.CerveneRozsireniHL_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="8" aname="HorniCervena_anim" amin="0" amax="99"></bdl-bind2a>
<bdl-bind2a findex="26" aname="children.7.Obrys_anim" amin="0" amax="99" fmin="0" fmax="7" convertor="1,1000"></bdl-bind2a>
<bdl-bind2a findex="17" aname="children.7.HorniHladina_anim" amin="0" amax="99" fmin="0" fmax="7" convertor="1,1000"></bdl-bind2a>
<bdl-bind2a findex="26" aname="children.7.SpodniHladina_anim" amin="0" amax="99" fmin="0" fmax="7" convertor="1,1000"></bdl-bind2a>
<bdl-bind2a findex="17" aname="children.7.Pruziny_anim" amin="0" amax="99" fmin="0" fmax="7" convertor="1,1000"></bdl-bind2a>
<bdl-bind2a findex="6" aname="ValecModrySpodni_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="5" aname="ValecModryHorni_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="4" aname="ValecCervenySpodni_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="3" aname="ValecCervenyHorni_anim" amin="99" amax="0"></bdl-bind2a>
<bdl-bind2a findex="-1" aname="lspump_checkbox.children.1.LSSipka1_anim" amin="0" amax="99" fmin="0" fmax="99" convertor="x * 20 % 100"></bdl-bind2a>
<bdl-bind2a findex="-1" aname="lspump_checkbox.children.1.LSSipka2_anim" amin="0" amax="99" fmin="0" fmax="99" convertor="x * 20 % 100"></bdl-bind2a>
<bdl-bind2a findex="-1" aname="pspump_checkbox.children.1.PSSipka1_anim" amin="0" amax="99" fmin="0" fmax="99" convertor="x * 20 % 100"></bdl-bind2a>
<bdl-bind2a findex="-1" aname="pspump_checkbox.children.1.PSSipka2_anim" amin="0" amax="99" fmin="0" fmax="99" convertor="x * 20 % 100"></bdl-bind2a>
<!--bdl-bind2a findex="2" aname="j_range" amin="0" amax="99"></bdl-bind2a-->
<!-- tlakove valce -->
<!-- sipky s toke v srdci -->
<!--bdl-chartjs-time width="800" height="200" fromid="idfmi" refindex="29,33,37,40"></bdl-chartjs-time-->

<!--bdl-chartjs-time width="800" height="200" fromid="idfmi" refindex="19" refvalues="7" labels="normV,bmi,surface,weight,height,SV,normalV0"></bdl-chartjs-time-->

</div>
</div>

