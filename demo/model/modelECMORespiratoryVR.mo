within ;
package modelECMORespiratoryVR

  model ECMOSimReg
    //Typy přenosového media
        replaceable package Blood =
          Physiolibrary.Media.BloodBySiggaardAndersen annotation(choicesAllMatching=True);
      replaceable package Air =
          Physiolibrary.Media.Air annotation(choicesAllMatching=True);

    // Parametry pacienta
      parameter Real DVfraction=0.3;
      parameter Real Shunts=0.02;
      parameter Physiolibrary.Types.HydraulicConductance StarlingLeft=
        1.250102626409427e-07*(5/4)                                        "Slope of starling curve [m3/(Pa.s)]";
      parameter Physiolibrary.Types.HydraulicConductance StarlingRight=
        1.250102626409427e-07*(5/4)                                         "Slope of starling curve [m3/(Pa.s)]";
      //parameter Physiolibrary.Types.VolumeFlowRate SF=8.3333333333333e-05
       //                                                         "Systemic blood flow [m3/s]";

      //parameter Physiolibrary.Types.Frequency RR=15/60 "Respiration rate [s-1]";
      //parameter Physiolibrary.Types.Volume TV=0.0005
      //                                            "Tidal volume [m3]";
      //parameter Physiolibrary.Types.Volume DV=0.002
      //                                             "Dead space volume [m3]";
      parameter Physiolibrary.Types.MolarFlowRate O2BMR=0.00024166666666667
                                                                        " [mol/s]";
      parameter Physiolibrary.Types.MolarFlowRate CO2BMR=0.00019333333333333
                                                                         " [mol/s]";

    // Parametry ECMO

        parameter Real VAV=1   "Distribution of blood to veins and arteries, Values from 0 (100 % Veins) to 1(100 % Arteries";
  //       parameter Physiolibrary.Types.VolumeFlowRate ECMOF=0   "ECMO blood flow [m3/s]";
  //       parameter Physiolibrary.Types.VolumeFlowRate O2Flow=1.6666666666667e-05
  //                                                               "O2 flow in ECMO [m3/s]";
  //       parameter Physiolibrary.Types.VolumeFlowRate AirFlow=1.6666666666667e-05
  //                                                                      "Air flow in ECMO[m3/s]";
        parameter Real RPM=0    "Rotation per minute in ECMO pump";
        parameter Physiolibrary.Types.VolumeFlowRate SWEEP=0 "Air + O2 flow in ECMO[m3/s]";
        parameter Real FiO2=0.8       "Fraction of oxygen in gas 0.8";
            parameter Physiolibrary.Types.HydraulicConductance C_shunt=1.250102626409427e-07
        *((Shunts*(1/3)))                          "Conductance of shunt [m3/(Pa.s)]";
      parameter Physiolibrary.Types.HydraulicConductance C_ventilation=
        1.019716212977928e-05*((1/1.5)) "Conductance of ventilation [m3/(Pa.s)]";
      parameter Physiolibrary.Types.HydraulicConductance C_cirkulation=1.250102626409427e-07
        *(1/3*(1 - Shunts))                          "Conductance of circulation [m3/(Pa.s)]";

    Physiolibrary.Fluid.Components.Resistor resistor1(redeclare package Medium =
          Blood, Resistance=7999343.2449*((5.5*20)/8))
      annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-160,-164})));
    Physiolibrary.Fluid.Components.ElasticVessel Arteries(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.00085,
      Compliance(displayUnit="ml/mmHg") = 2.6627185942521e-08,
      ZeroPressureVolume(displayUnit="l") = 0.00045,
      nPorts=7) annotation (Placement(transformation(extent={{-116,-170},{-136,
              -148}})));
    Physiolibrary.Fluid.Components.ElasticVessel Veins(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.00325,
      Compliance(displayUnit="ml/mmHg") = 6.1880080007267e-07,
      ZeroPressureVolume(displayUnit="l") = 0.00295,
      nPorts=7)
      annotation (Placement(transformation(extent={{-266,-172},{-246,-152}})));
    Physiolibrary.Fluid.Components.Resistor resistor2(redeclare package Medium =
          Blood, Resistance=7999343.2449*(20/8))                     annotation (
        Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-220,-164})));
    Physiolibrary.Fluid.Components.ElasticVessel Tissue(
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.0003,
      useThermalPort=true,
      Compliance(displayUnit="ml/mmHg") = 3.0002463033826e-08,
      ZeroPressureVolume(displayUnit="l") = 0.0002,
      nPorts=6) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-190,-248})));
    Physiolibrary.Fluid.Sensors.PressureMeasure PressureCapilarsTissue(
        redeclare package Medium = Blood)
      annotation (Placement(transformation(extent={{-262,-238},{-282,-218}})));
    Chemical.Sources.SubstanceInflowT CO2_in(
      SubstanceFlow(displayUnit="mmol/min") = CO2BMR,
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas()) annotation (
        Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-120,-300})));
    Chemical.Sources.SubstanceOutflow O2_left(useSubstanceFlowInput=false,
        SubstanceFlow(displayUnit="mmol/min") = O2BMR) annotation (Placement(
          transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-266,-300})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2_tissue(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-276,-260},{-256,-280}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pCO2_tissue(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(
          extent={{10,10},{-10,-10}},
          rotation=0,
          origin={-118,-270})));
    Physiolibrary.Fluid.Sensors.PartialPressure pCO2Arteries(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(
          extent={{-10,10},{10,-10}},
          rotation=180,
          origin={-74,-144})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2Arteries(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(
          extent={{-10,10},{10,-10}},
          rotation=180,
          origin={-76,-190})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureArterial(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{-124,-228},{-104,-208}})));
    Physiolibrary.Fluid.Sensors.PressureMeasure PressureVeins(redeclare package
        Medium = Blood)
      annotation (Placement(transformation(extent={{-374,-216},{-394,-196}})));
    Physiolibrary.Fluid.Components.Resistor ECMOResistance(redeclare package
        Medium = Blood, Resistance=7999343.2449*(5/5))
      annotation (Placement(transformation(extent={{-326,92},{-306,112}})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureOxygenator(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{-162,136},{-142,156}})));
    Physiolibrary.Fluid.Components.ElasticVessel ECMOBloodTube(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start=0.00012,
      useThermalPort=true,
      Compliance(displayUnit="ml/mmHg") = 7.5006157584566e-09,
      ZeroPressureVolume(displayUnit="ml") = 0.00012,
      ExternalPressure(displayUnit="mmHg") = 100658.40249833,
      nPorts=4)
      annotation (Placement(transformation(extent={{10,-10},{-10,10}},
          rotation=90,
          origin={-190,102})));
    Physiolibrary.Fluid.Sources.PressureSource AirPressureSource(redeclare
        package Medium = Air)
      annotation (Placement(transformation(extent={{-294,174},{-274,194}})));
    Physiolibrary.Fluid.Components.ElasticVessel ECMOAirTube(
      redeclare package Medium = Air,
      use_concentration_start=true,
      concentration_start={0.21,40/760,0,1 - 0.21 - 40/760},
      useSubstances=true,
      volume_start(displayUnit="l") = 0.001,
      useThermalPort=false,
      Compliance(displayUnit="ml/mmHg") = 7.5006157584566e-09,
      ZeroPressureVolume(displayUnit="l") = 0.001,
      ExternalPressure(displayUnit="mmHg") = 100791.72488574,
      nPorts=4)
      annotation (Placement(transformation(extent={{10,-10},{-10,10}},
          rotation=270,
          origin={-190,184})));

    Physiolibrary.Fluid.Sensors.PressureMeasure pressureECMOAirTube(redeclare
        package Medium = Air)
      annotation (Placement(transformation(extent={{-146,202},{-126,222}})));
    inner Modelica.Fluid.System system(T_ambient=310.15)
      annotation (Placement(transformation(extent={{-524,396},{-504,416}})));
    Physiolibrary.Thermal.Sources.UnlimitedHeat BodyHeat(T=310.15)
      annotation (Placement(transformation(extent={{-230,-350},{-210,-330}})));
    Physiolibrary.Thermal.Components.Conductor conductor(Conductance=69780)
      annotation (Placement(transformation(extent={{-192,-350},{-172,-330}})));
    Physiolibrary.Thermal.Sources.UnlimitedHeat ECMOHeater(T=310.15)
      annotation (Placement(transformation(extent={{-54,98},{-74,118}})));
    Physiolibrary.Thermal.Components.Conductor conductor1(Conductance=69780)
      annotation (Placement(transformation(extent={{-112,98},{-132,118}})));
    Physiolibrary.Fluid.Components.VolumePump heartRight(
      redeclare package Medium = Blood,
      useSolutionFlowInput=true,
      SolutionFlow(displayUnit="l/min"))                       annotation (
        Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-372,-10})));
    Physiolibrary.Fluid.Components.VolumePump heartLeft(
      redeclare package Medium = Blood,
      useSolutionFlowInput=true,
      SolutionFlow(displayUnit="l/min"))                       annotation (
        Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=270,
          origin={8,-6})));
    Physiolibrary.Fluid.Components.ElasticVessel LungsArteries(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.00038,
      Compliance(displayUnit="ml/mmHg") = 3.6002955640592e-08,
      ZeroPressureVolume(displayUnit="l") = 0.0003,
      nPorts=5)
      annotation (Placement(transformation(extent={{-382,432},{-362,452}})));
    Physiolibrary.Fluid.Components.ElasticVessel LungsVeins(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.0004,
      Compliance(displayUnit="ml/mmHg") = 7.5006157584566e-08,
      ZeroPressureVolume(displayUnit="l") = 0.0004,
      nPorts=5)
      annotation (Placement(transformation(extent={{22,430},{2,450}})));
    Physiolibrary.Fluid.Components.Conductor shunt(redeclare package Medium =
          Blood, Conductance(displayUnit="l/(cmH2O.s)") = C_shunt)
               annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-186,392})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasureCardiacOutput(redeclare
        package Medium = Blood) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=270,
          origin={8,-38})));
    Physiolibrary.Fluid.Sources.PressureSource pressureSource(redeclare package
        Medium = Physiolibrary.Media.Air)
      annotation (Placement(transformation(extent={{-376,672},{-356,692}})));
    Physiolibrary.Fluid.Components.VolumePump DeadSpace(
      redeclare package Medium = Physiolibrary.Media.Air,
      useSolutionFlowInput=true)
      annotation (Placement(transformation(extent={{-204,672},{-184,692}})));
    Physiolibrary.Fluid.Sources.VolumeOutflowSource MinuteVolume(
        useSolutionFlowInput=true, redeclare package Medium =
          Physiolibrary.Media.Air) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-4,682})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2Veins(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-338,-174},{-318,-194}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pCO2Veins(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(
          extent={{-10,10},{10,-10}},
          rotation=0,
          origin={-320,-138})));
    Physiolibrary.Fluid.Sources.PressureSource O2PressureSource(redeclare
        package Medium =
                 Air,
      use_concentration_start=false,
      massFractions_start={1,0,0})
      annotation (Placement(transformation(extent={{-294,212},{-274,232}})));
    Physiolibrary.Fluid.Components.VolumePump O2PumpECMO(redeclare package
        Medium =
          Physiolibrary.Media.Air,
      useSolutionFlowInput=true,
      SolutionFlow(displayUnit="l/min"))
      annotation (Placement(transformation(extent={{-256,212},{-236,232}})));
    Physiolibrary.Fluid.Components.VolumePump AirPumpECMO(redeclare package
        Medium = Physiolibrary.Media.Air,
      useSolutionFlowInput=true,
      SolutionFlow(displayUnit="l/min"))
      annotation (Placement(transformation(extent={{-252,174},{-232,194}})));
    Chemical.Components.Diffusion O2Diffusion(KC=1e-4) annotation (Placement(
          transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-202,136})));
    Chemical.Components.Diffusion CO2Diffusion(KC=1e-4) annotation (Placement(
          transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-176,136})));
    Physiolibrary.Types.Constants.HydraulicConductanceConst StarlingSlopeRight(k=
          StarlingRight)
      annotation (Placement(transformation(extent={{-442,-8},{-434,0}})));
    Modelica.Blocks.Math.Product product2 annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-406,-10})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureLungsVein(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{26,104},{46,124}})));
    Physiolibrary.Types.Constants.HydraulicConductanceConst StarlingSlopeLeft(k=
          StarlingLeft)
      annotation (Placement(transformation(extent={{52,118},{60,126}})));
    Modelica.Blocks.Math.Product product1 annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={102,116})));
    Physiolibrary.Fluid.Components.VolumePump volumePump(
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen,
      useSolutionFlowInput=true,
      SolutionFlow=0)
      annotation (Placement(transformation(extent={{-202,-66},{-222,-46}})));
    Physiolibrary.Fluid.Components.VolumePump volumePump1(
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen,
      useSolutionFlowInput=true,
      SolutionFlow(displayUnit="l/min"))
      annotation (Placement(transformation(extent={{-54,-66},{-34,-46}})));
    Modelica.Blocks.Sources.Constant const(k=VAV)
      annotation (Placement(transformation(extent={{-86,28},{-66,48}})));
    Modelica.Blocks.Math.Product product3
      annotation (Placement(transformation(extent={{-10,-10},{10,10}},
          rotation=270,
          origin={-44,-28})));
    Modelica.Blocks.Sources.Constant const1(k=1 - (VAV))
      annotation (Placement(transformation(extent={{-114,-40},{-134,-20}})));
    Modelica.Blocks.Math.Product product4
      annotation (Placement(transformation(extent={{-182,-34},{-202,-14}})));
    Physiolibrary.Fluid.Components.Conductor conductor2(redeclare package
        Medium = Physiolibrary.Media.Air, Conductance=SWEEP/100)
      annotation (Placement(transformation(extent={{-140,174},{-120,194}})));
    Physiolibrary.Types.Constants.PressureConst pressure(k(displayUnit="kPa")=
           4800)
      annotation (Placement(transformation(extent={{316,-142},{324,-134}})));
    Modelica.Blocks.Math.Add add(k1=-1)
      annotation (Placement(transformation(extent={{350,-154},{370,-134}})));
    Modelica.Blocks.Math.Product product5 annotation (Placement(transformation(
          extent={{-10,10},{10,-10}},
          rotation=90,
          origin={486,-116})));
    Modelica.Blocks.Math.Max max1 annotation (Placement(transformation(
          extent={{-10,10},{10,-10}},
          rotation=90,
          origin={480,-34})));
    Modelica.Blocks.Sources.Constant const2(k=0)
      annotation (Placement(transformation(extent={{436,-96},{456,-76}})));
    Physiolibrary.Types.Constants.VolumeConst volume(k(displayUnit="l")=
        0.00035) annotation (Placement(transformation(
          extent={{-4,-4},{4,4}},
          rotation=180,
          origin={400,124})));
    Physiolibrary.Types.Constants.FrequencyConst frequency(k=
          0.01666666666666667*(50/(2 - 0.35))) annotation (Placement(
          transformation(
          extent={{-4,-4},{4,4}},
          rotation=180,
          origin={470,106})));
    Modelica.Blocks.Math.Division division annotation (Placement(transformation(
          extent={{-10,10},{10,-10}},
          rotation=180,
          origin={432,112})));
    Modelica.Blocks.Math.Add TidalVolume annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={364,118})));
    Physiolibrary.Types.Constants.PressureConst CC(k(displayUnit="kPa") = 4300)
      annotation (Placement(transformation(extent={{276,-208},{284,-200}})));
    Modelica.Blocks.Math.Add scitani(k1=-1) annotation (Placement(
          transformation(
          extent={{10,-10},{-10,10}},
          rotation=180,
          origin={332,-196})));
    Physiolibrary.Types.Constants.VolumeFlowRateConst volumeFlowRate1(k(
          displayUnit="l/min") = 0.0019247533333333)
      annotation (Placement(transformation(extent={{428,-218},{436,-210}})));
    Modelica.Blocks.Math.Division Slope annotation (Placement(transformation(
          extent={{10,-10},{-10,10}},
          rotation=180,
          origin={474,-208})));
    Physiolibrary.Types.Constants.PressureConst pressure1(k(displayUnit="kPa")=
           700)
      annotation (Placement(transformation(extent={{356,-212},{364,-204}})));
    Modelica.Blocks.Math.Max max2 annotation (Placement(transformation(
          extent={{10,10},{-10,-10}},
          rotation=180,
          origin={398,-202})));
    Modelica.Blocks.Math.Product product6 annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={204,182})));
    Physiolibrary.Fluid.Sensors.pH pH_Arteries(redeclare package Medium =
          Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-190,-142},{-170,-122}})));
    Modelica.Blocks.Math.Min min1
      annotation (Placement(transformation(extent={{340,128},{320,148}})));
    Physiolibrary.Types.Constants.VolumeConst volume1(k(displayUnit="l")=
        0.00231) annotation (Placement(transformation(
          extent={{-4,-4},{4,4}},
          rotation=180,
          origin={376,146})));
    Modelica.Blocks.Math.Division RespRate annotation (Placement(transformation(
          extent={{-10,10},{10,-10}},
          rotation=180,
          origin={274,152})));
    Modelica.Blocks.Sources.Constant Rotation(k=RPM)
      annotation (Placement(transformation(extent={{-340,56},{-320,76}})));
    Modelica.Blocks.Math.Product product7 annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-284,60})));
    Modelica.Blocks.Sources.Constant ECMOFlowSlope(k=0.0013)
      annotation (Placement(transformation(extent={{-338,16},{-318,36}})));
    Modelica.Blocks.Math.Add add1(k1=-1)
      annotation (Placement(transformation(extent={{-258,64},{-238,44}})));
    Modelica.Blocks.Sources.Constant ECMOFlowIntercept(k=0.4318)
      annotation (Placement(transformation(extent={{-338,-20},{-318,0}})));
    Physiolibrary.Types.Constants.VolumeFlowRateConst volumeFlowRate2(k(
          displayUnit="l/min") = 1.6666666666667e-05)
      annotation (Placement(transformation(extent={{-280,24},{-272,32}})));
    Modelica.Blocks.Math.Product product8 annotation (Placement(transformation(
          extent={{10,-10},{-10,10}},
          rotation=180,
          origin={-208,48})));
    Modelica.Blocks.Sources.Constant FiO2ECMO(k=FiO2)
      annotation (Placement(transformation(extent={{-342,286},{-322,306}})));
    Modelica.Blocks.Sources.Constant FiO2AIR(k=0.21)
      annotation (Placement(transformation(extent={{-342,252},{-322,272}})));
    Modelica.Blocks.Sources.Constant FiO2Pure(k=1)
      annotation (Placement(transformation(extent={{-342,322},{-322,342}})));
    Modelica.Blocks.Math.Add add2(k2=-1)
      annotation (Placement(transformation(extent={{-310,316},{-290,336}})));
    Modelica.Blocks.Math.Add add3(k2=-1)
      annotation (Placement(transformation(extent={{-306,278},{-286,258}})));
    Modelica.Blocks.Math.Add add4
      annotation (Placement(transformation(extent={{-230,310},{-210,330}})));
    Modelica.Blocks.Math.Abs abs1
      annotation (Placement(transformation(extent={{-276,258},{-256,278}})));
    Modelica.Blocks.Math.Division division1
      annotation (Placement(transformation(extent={{10,10},{-10,-10}},
          rotation=90,
          origin={-188,300})));
    Modelica.Blocks.Math.Product product9
      annotation (Placement(transformation(extent={{10,-10},{-10,10}},
          rotation=90,
          origin={-162,256})));
    Modelica.Blocks.Math.Product product10
      annotation (Placement(transformation(extent={{10,-10},{-10,10}},
          rotation=90,
          origin={-216,256})));
    Physiolibrary.Types.Constants.VolumeFlowRateConst volumeFlowRate3(k(
          displayUnit="l/min") = SWEEP)
      annotation (Placement(transformation(extent={{-140,316},{-148,324}})));
    Physiolibrary.Fluid.Sources.PressureSource Sweep(redeclare package Medium =
          Air, use_concentration_start=false)
      annotation (Placement(transformation(extent={{-26,176},{-46,196}})));
    Physiolibrary.Fluid.Components.ElasticVessel Alveoly(
      redeclare package Medium = Physiolibrary.Media.Air,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.0016,
      Compliance(displayUnit="ml/mmHg") = 6.0004926067653e-07,
      ZeroPressureVolume(displayUnit="l") = 0.0013,
      ExternalPressure(displayUnit="mmHg") = 100791.72488574,
      nPorts=3) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-212,616})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasureAlveols(redeclare
        package Medium = Physiolibrary.Media.Air)
      annotation (Placement(transformation(extent={{-168,628},{-148,648}})));
    Physiolibrary.Fluid.Components.Conductor conductor3(redeclare package
        Medium =
          Physiolibrary.Media.Air, Conductance(displayUnit="l/(cmH2O.s)")=
        C_ventilation)
                  annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-286,638})));
    Chemical.Components.GasSolubility O2(KC=1e-4)
      annotation (Placement(transformation(extent={{-240,564},{-220,584}})));
    Chemical.Components.GasSolubility CO2(KC=1e-4)
      annotation (Placement(transformation(extent={{-202,568},{-182,588}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2Lungs(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-294,562},{-274,582}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pCO2Lungs(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(
          extent={{10,-10},{-10,10}},
          rotation=0,
          origin={-136,574})));
    Physiolibrary.Fluid.Components.Conductor conductor4(redeclare package
        Medium =
          Blood, Conductance=C_cirkulation*(8/7))
      annotation (Placement(transformation(extent={{-276,460},{-256,480}})));
    Physiolibrary.Fluid.Components.Conductor conductor5(redeclare package
        Medium =
          Blood, Conductance=C_cirkulation*8)
      annotation (Placement(transformation(extent={{-106,464},{-86,484}})));
    Physiolibrary.Fluid.Components.ElasticVessel LungCapilars(
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.00015,
      Compliance(displayUnit="ml/mmHg") = 3.0002463033826e-08,
      ZeroPressureVolume(displayUnit="l") = 0.0001,
      nPorts=4) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=270,
          origin={-198,530})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureCapilarsLungs(
        redeclare package Medium = Blood)
      annotation (Placement(transformation(extent={{-112,536},{-92,556}})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureAlveols(redeclare
        package Medium = Physiolibrary.Media.Air)
      annotation (Placement(transformation(extent={{-42,608},{-22,628}})));
    Physiolibrary.Fluid.Sensors.pH pH_Veins(redeclare package Medium =
          Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-218,-138},{-238,-118}})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasureSweep(redeclare package
        Medium = Physiolibrary.Media.Air) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-88,184})));
    Physiolibrary.Fluid.Components.Conductor conductor6(redeclare package
        Medium =
          Physiolibrary.Media.Air, Conductance(displayUnit="l/(cmH2O.s)")=
        C_ventilation)
                  annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-98,638})));
    Modelica.Blocks.Math.Max max3 annotation (Placement(transformation(
          extent={{10,10},{-10,-10}},
          rotation=90,
          origin={-148,26})));
    Physiolibrary.Types.Constants.VolumeFlowRateConst volumeFlowRate4(k(
          displayUnit="l/min") = 0)
      annotation (Placement(transformation(extent={{-112,50},{-120,58}})));
    Physiolibrary.Fluid.Sensors.pH pH_LungA(redeclare package Medium =
          Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-420,432},{-400,452}})));
    Physiolibrary.Fluid.Sensors.pH pH_LungV(redeclare package Medium =
          Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{86,430},{66,450}})));
    Modelica.Blocks.Math.Product product11
                                          annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={296,198})));
    Modelica.Blocks.Sources.Constant DeadVolumeFraction(k=DVfraction)
      annotation (Placement(transformation(extent={{364,194},{344,214}})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasureECMO(redeclare package
        Medium = Blood) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-274,102})));
    Modelica.Blocks.Math.Min min2
      annotation (Placement(transformation(extent={{10,-10},{-10,10}},
          rotation=270,
          origin={474,42})));
    Physiolibrary.Types.Constants.VolumeFlowRateConst volumeFlowRate(k(
          displayUnit="l/min") = 0.002)
      annotation (Placement(transformation(extent={{432,-12},{440,-4}})));
    Physiolibrary.Fluid.Sensors.PressureMeasure PressureVeins1(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{-366,504},{-386,524}})));
    Modelica.Blocks.Math.Min min3
      annotation (Placement(transformation(extent={{248,136},{228,156}})));
    Physiolibrary.Types.Constants.FrequencyConst frequency1(k=0.66666666666667)
                                               annotation (Placement(
          transformation(
          extent={{-4,-4},{4,4}},
          rotation=180,
          origin={272,124})));
  equation
    connect(resistor1.q_in, Arteries.q_in[1]) annotation (Line(
        points={{-150,-164},{-125.9,-164},{-125.9,-156.549}},
        color={127,0,0},
        thickness=0.5));
    connect(resistor2.q_in, Tissue.q_in[1]) annotation (Line(
        points={{-210,-164},{-210,-248.1},{-192.167,-248.1}},
        color={127,0,0},
        thickness=0.5));
    connect(resistor1.q_out, Tissue.q_in[2]) annotation (Line(
        points={{-170,-164},{-170,-248.1},{-191.3,-248.1}},
        color={127,0,0},
        thickness=0.5));
    connect(PressureCapilarsTissue.q_in, Tissue.q_in[3]) annotation (Line(
        points={{-268,-234},{-190.433,-234},{-190.433,-248.1}},
        color={127,0,0},
        thickness=0.5));
    connect(O2_left.port_a, Tissue.substances[2]) annotation (Line(points={{-256,
            -300},{-190,-300},{-190,-258}}, color={158,66,200}));
    connect(O2_left.port_a, pO2_tissue.port_a) annotation (Line(points={{-256,-300},
            {-234,-300},{-234,-270},{-256,-270}}, color={158,66,200}));
    connect(pO2_tissue.referenceFluidPort, Tissue.q_in[4]) annotation (Line(
        points={{-266,-260.2},{-266,-248},{-212,-248},{-212,-248.1},{-189.567,
            -248.1}},
        color={127,0,0},
        thickness=0.5));

    connect(pCO2_tissue.referenceFluidPort, Tissue.q_in[5]) annotation (Line(
        points={{-118,-260.2},{-118,-248.1},{-188.7,-248.1}},
        color={127,0,0},
        thickness=0.5));
    connect(CO2_in.port_b, Tissue.substances[3]) annotation (Line(points={{-130,
            -300},{-190,-300},{-190,-258}}, color={158,66,200}));
    connect(CO2_in.port_b, pCO2_tissue.port_a) annotation (Line(points={{-130,-300},
            {-154,-300},{-154,-270},{-128,-270}}, color={158,66,200}));
    connect(resistor2.q_out, Veins.q_in[1]) annotation (Line(
        points={{-230,-164},{-256.1,-164},{-256.1,-159.771}},
        color={127,0,0},
        thickness=0.5));
    connect(pO2Arteries.port_a, Arteries.substances[2]) annotation (Line(points={{-86,
            -190},{-116,-190},{-116,-159}},
                                         color={158,66,200}));
    connect(pO2Arteries.referenceFluidPort, Arteries.q_in[2]) annotation (Line(
        points={{-76,-199.8},{-125.9,-199.8},{-125.9,-157.366}},
        color={127,0,0},
        thickness=0.5));
    connect(pCO2Arteries.referenceFluidPort, Arteries.q_in[3]) annotation (Line(
        points={{-74,-153.8},{-74,-158.183},{-125.9,-158.183}},
        color={127,0,0},
        thickness=0.5));
    connect(pCO2Arteries.port_a, Arteries.substances[3])
      annotation (Line(points={{-84,-144},{-116,-144},{-116,-159}},
                                                           color={158,66,200}));
    connect(BodyHeat.port, conductor.q_in) annotation (Line(
        points={{-210,-340},{-192,-340}},
        color={191,0,0},
        thickness=0.5));
    connect(conductor.q_out, Tissue.heatPort) annotation (Line(
        points={{-172,-340},{-170,-340},{-170,-258},{-179.8,-258},{-179.8,-254}},
        color={191,0,0},
        thickness=0.5));

    connect(PressureVeins.q_in, Veins.q_in[2]) annotation (Line(
        points={{-380,-212},{-250,-212},{-250,-160.514},{-256.1,-160.514}},
        color={127,0,0},
        thickness=0.5));
    connect(pressureECMOAirTube.q_in, ECMOAirTube.q_in[1]) annotation (Line(
        points={{-140,206},{-188.05,206},{-188.05,183.9}},
        color={127,0,0},
        thickness=0.5));
    connect(ECMOHeater.port, conductor1.q_in) annotation (Line(
        points={{-74,108},{-112,108}},
        color={191,0,0},
        thickness=0.5));
    connect(conductor1.q_out, ECMOBloodTube.heatPort) annotation (Line(
        points={{-132,108},{-179.8,108}},
        color={191,0,0},
        thickness=0.5));
    connect(flowMeasureCardiacOutput.q_out, Arteries.q_in[4]) annotation (Line(
        points={{8,-48},{8,-159},{-125.9,-159}},
        color={127,0,0},
        thickness=0.5));
    connect(heartRight.q_in, Veins.q_in[3]) annotation (Line(
        points={{-372,-20},{-372,-161.257},{-256.1,-161.257}},
        color={127,0,0},
        thickness=0.5));
    connect(heartRight.q_out, LungsArteries.q_in[1]) annotation (Line(
        points={{-372,0},{-372,424},{-372.1,424},{-372.1,444.08}},
        color={127,0,0},
        thickness=0.5));
    connect(shunt.q_out, LungsVeins.q_in[1]) annotation (Line(
        points={{-176,392},{12.1,392},{12.1,442.08}},
        color={127,0,0},
        thickness=0.5));
    connect(heartLeft.q_in, LungsVeins.q_in[2]) annotation (Line(
        points={{8,4},{12.1,441.04}},
        color={127,0,0},
        thickness=0.5));
    connect(heartLeft.q_out, flowMeasureCardiacOutput.q_in) annotation (Line(
        points={{8,-16},{8,-28}},
        color={127,0,0},
        thickness=0.5));
    connect(LungsArteries.q_in[2], shunt.q_in) annotation (Line(
        points={{-372.1,443.04},{-372,443.04},{-372,392},{-196,392}},
        color={127,0,0},
        thickness=0.5));
    connect(pressureSource.y, DeadSpace.q_in) annotation (Line(
        points={{-356,682},{-204,682}},
        color={127,0,0},
        thickness=0.5));
    connect(DeadSpace.q_out, MinuteVolume.q_in) annotation (Line(
        points={{-184,682},{-14,682}},
        color={127,0,0},
        thickness=0.5));

    connect(O2PressureSource.y,O2PumpECMO. q_in) annotation (Line(
        points={{-274,222},{-256,222}},
        color={127,0,0},
        thickness=0.5));
    connect(O2PumpECMO.q_out, ECMOAirTube.q_in[2]) annotation (Line(
        points={{-236,222},{-189.35,222},{-189.35,183.9}},
        color={127,0,0},
        thickness=0.5));
    connect(AirPumpECMO.q_out, ECMOAirTube.q_in[3]) annotation (Line(
        points={{-232,184},{-194,184},{-194,188},{-190.65,188},{-190.65,183.9}},
        color={127,0,0},
        thickness=0.5));

    connect(AirPressureSource.y, AirPumpECMO.q_in) annotation (Line(
        points={{-274,184},{-252,184}},
        color={127,0,0},
        thickness=0.5));
    connect(O2Diffusion.port_b, ECMOAirTube.substances[1]) annotation (Line(
          points={{-202,146},{-202,152},{-190,152},{-190,174}},
                                                              color={158,66,200}));
    connect(CO2Diffusion.port_b, ECMOAirTube.substances[2]) annotation (Line(
          points={{-176,146},{-176,152},{-190,152},{-190,174}},
                                                        color={158,66,200}));
    connect(CO2Diffusion.port_a, ECMOBloodTube.substances[3]) annotation (Line(
          points={{-176,126},{-176,112},{-190,112}},color={158,66,200}));
    connect(O2Diffusion.port_a, ECMOBloodTube.substances[2])
      annotation (Line(points={{-202,126},{-202,114},{-190,114},{-190,112}},
                                                       color={158,66,200}));
    connect(StarlingSlopeRight.y, product2.u1)
      annotation (Line(points={{-433,-4},{-418,-4}}, color={0,0,127}));
    connect(PressureVeins.pressure, product2.u2) annotation (Line(points={{-390,
            -210},{-418,-210},{-418,-16}},                         color={0,0,127}));
    connect(product2.y, heartRight.solutionFlow) annotation (Line(points={{-395,
            -10},{-390,-10},{-390,-8},{-379,-8},{-379,-10}},
                                                      color={0,0,127}));
    connect(pressureLungsVein.pressure, product1.u2)
      annotation (Line(points={{42,110},{90,110}},   color={0,0,127}));
    connect(product1.y, heartLeft.solutionFlow) annotation (Line(points={{113,116},
            {122,116},{122,-6},{15,-6}},  color={0,0,127}));
    connect(pressureLungsVein.q_in, LungsVeins.q_in[3]) annotation (Line(
        points={{32,108},{32,88},{12.1,88},{12.1,440}},
        color={127,0,0},
        thickness=0.5));

    connect(const1.y, product4.u2)
      annotation (Line(points={{-135,-30},{-180,-30}},
                                               color={0,0,127}));
    connect(product4.y, volumePump.solutionFlow) annotation (Line(points={{-203,
            -24},{-212,-24},{-212,-49}},              color={0,0,127}));
    connect(pressureArterial.q_in, Arteries.q_in[5]) annotation (Line(
        points={{-118,-224},{-126,-224},{-126,-159.817},{-125.9,-159.817}},
        color={127,0,0},
        thickness=0.5));
    connect(const.y, product3.u1)
      annotation (Line(points={{-65,38},{-38,38},{-38,-16}}, color={0,0,127}));
    connect(product3.y, volumePump1.solutionFlow)
      annotation (Line(points={{-44,-39},{-44,-49}}, color={0,0,127}));
    connect(pressureOxygenator.q_in, ECMOBloodTube.q_in[1]) annotation (Line(
        points={{-156,140},{-156,102.1},{-191.95,102.1}},
        color={127,0,0},
        thickness=0.5));
    connect(volume.y,TidalVolume. u2)
      annotation (Line(points={{395,124},{376,124}},
                                                  color={0,0,127}));
    connect(volumeFlowRate1.y, Slope.u1)
      annotation (Line(points={{437,-214},{462,-214}}, color={0,0,127}));
    connect(scitani.y,max2. u1) annotation (Line(points={{343,-196},{386,-196}},
                                    color={0,0,127}));
    connect(pressure1.y,max2. u2) annotation (Line(points={{365,-208},{386,-208}},
                                    color={0,0,127}));
    connect(CC.y,scitani. u1)
      annotation (Line(points={{285,-204},{320,-204},{320,-202}},
                                                       color={0,0,127}));
    connect(max2.y,Slope. u2)
      annotation (Line(points={{409,-202},{462,-202}}, color={0,0,127}));
    connect(pressure.y,add. u1)
      annotation (Line(points={{325,-138},{348,-138}}, color={0,0,127}));
    connect(add.y,product5. u2) annotation (Line(points={{371,-144},{480,-144},
            {480,-128}}, color={0,0,127}));
    connect(Slope.y,product5. u1) annotation (Line(points={{485,-208},{492,-208},
            {492,-128}}, color={0,0,127}));
    connect(product5.y,max1. u1)
      annotation (Line(points={{486,-105},{486,-46}},  color={0,0,127}));
    connect(const2.y, max1.u2) annotation (Line(points={{457,-86},{474,-86},{
            474,-46}}, color={0,0,127}));
    connect(frequency.y,division. u2)
      annotation (Line(points={{465,106},{444,106}},
                                                   color={0,0,127}));
    connect(division.y,TidalVolume. u1)
      annotation (Line(points={{421,112},{376,112}},
                                                   color={0,0,127}));
    connect(pCO2Arteries.partialPressure, add.u2) annotation (Line(points={{-64,
            -144},{348,-144},{348,-150}}, color={0,0,127}));
    connect(pO2Arteries.partialPressure, scitani.u2) annotation (Line(points={{-66,
            -190},{320,-190}},                                      color={0,0,
            127}));
    connect(MinuteVolume.solutionFlow, division.u1) annotation (Line(points={{
            -4,689},{82,689},{82,690},{484,690},{484,118},{444,118}}, color={0,
            0,127}));
    connect(DeadSpace.solutionFlow, product6.y) annotation (Line(points={{-194,
            689},{-194,724},{178,724},{178,182},{193,182}},
                                                  color={0,0,127}));
    connect(pH_Arteries.referenceFluidPort, Arteries.q_in[6]) annotation (Line(
        points={{-180,-141.8},{-180,-176},{-125.9,-176},{-125.9,-160.634}},
        color={127,0,0},
        thickness=0.5));
    connect(min1.u1, volume1.y) annotation (Line(points={{342,144},{371,144},{
            371,146}}, color={0,0,127}));
    connect(min1.u2, TidalVolume.y) annotation (Line(points={{342,132},{348,132},
            {348,122},{353,122},{353,118}}, color={0,0,127}));
    connect(RespRate.u2, min1.y) annotation (Line(points={{286,146},{306,146},{
            306,138},{319,138}}, color={0,0,127}));
    connect(RespRate.u1, division.u1) annotation (Line(points={{286,158},{484,
            158},{484,118},{444,118}}, color={0,0,127}));
    connect(ECMOFlowSlope.y, product7.u2) annotation (Line(points={{-317,26},{
            -302,26},{-302,52},{-296,52},{-296,54}},
                                              color={0,0,127}));
    connect(ECMOFlowIntercept.y, add1.u1) annotation (Line(points={{-317,-10},{
            -288,-10},{-288,48},{-260,48}},
                                        color={0,0,127}));
    connect(pCO2Veins.referenceFluidPort, Veins.q_in[4]) annotation (Line(
        points={{-320,-128.2},{-272,-128.2},{-272,-162},{-256.1,-162}},
        color={127,0,0},
        thickness=0.5));
    connect(pO2Veins.referenceFluidPort, Veins.q_in[5]) annotation (Line(
        points={{-328,-174.2},{-320,-174.2},{-320,-170},{-256.1,-170},{-256.1,
            -162.743}},
        color={127,0,0},
        thickness=0.5));

    connect(pO2Veins.port_a, Veins.substances[2]) annotation (Line(points={{-318,-184},
            {-304,-184},{-304,-182},{-266,-182},{-266,-162}}, color={158,66,200}));
    connect(pCO2Veins.port_a, Veins.substances[3]) annotation (Line(points={{-310,
            -138},{-294,-138},{-294,-144},{-266,-144},{-266,-162}}, color={158,66,
            200}));
    connect(product7.y, add1.u2) annotation (Line(points={{-273,60},{-260,60}},
                              color={0,0,127}));
    connect(volumeFlowRate2.y, product8.u1) annotation (Line(points={{-271,28},
            {-230,28},{-230,42},{-220,42}},
                             color={0,0,127}));
    connect(add1.y, product8.u2) annotation (Line(points={{-237,54},{-237,54},{
            -220,54}},                  color={0,0,127}));
    connect(FiO2ECMO.y, add2.u2) annotation (Line(points={{-321,296},{-312,296},{-312,
            320}}, color={0,0,127}));
    connect(FiO2Pure.y, add2.u1)
      annotation (Line(points={{-321,332},{-312,332}}, color={0,0,127}));
    connect(FiO2AIR.y, add3.u1)
      annotation (Line(points={{-321,262},{-308,262}}, color={0,0,127}));
    connect(add3.u2, FiO2ECMO.y) annotation (Line(points={{-308,274},{-310,274},{-310,
            296},{-321,296}}, color={0,0,127}));
    connect(add3.y, abs1.u)
      annotation (Line(points={{-285,268},{-278,268}}, color={0,0,127}));
    connect(add2.y, add4.u1)
      annotation (Line(points={{-289,326},{-232,326}}, color={0,0,127}));
    connect(abs1.y, add4.u2) annotation (Line(points={{-255,268},{-248,268},{-248,
            314},{-232,314}}, color={0,0,127}));
    connect(add4.y, division1.u2) annotation (Line(points={{-209,320},{-194,320},{
            -194,312}}, color={0,0,127}));
    connect(volumeFlowRate3.y, division1.u1) annotation (Line(points={{-149,320},{
            -182,320},{-182,312}}, color={0,0,127}));
    connect(product10.u1, add4.u2) annotation (Line(points={{-222,268},{-248,268},
            {-248,314},{-232,314}}, color={0,0,127}));
    connect(product10.u2, division1.y) annotation (Line(points={{-210,268},{-188,268},
            {-188,289}}, color={0,0,127}));
    connect(product10.y, O2PumpECMO.solutionFlow) annotation (Line(points={{-216,245},
            {-216,240},{-246,240},{-246,229}}, color={0,0,127}));
    connect(product9.u1, division1.y) annotation (Line(points={{-168,268},{-188,268},
            {-188,289}}, color={0,0,127}));
    connect(add2.y, product9.u2) annotation (Line(points={{-289,326},{-290,326},{-290,
            342},{-134,342},{-134,268},{-156,268}}, color={0,0,127}));
    connect(product9.y, AirPumpECMO.solutionFlow) annotation (Line(points={{-162,245},
            {-162,230},{-228,230},{-228,191},{-242,191}}, color={0,0,127}));
    connect(conductor2.q_in, ECMOAirTube.q_in[4]) annotation (Line(
        points={{-140,184},{-166,184},{-166,183.9},{-191.95,183.9}},
        color={127,0,0},
        thickness=0.5));
    connect(flowMeasureAlveols.q_in, Alveoly.q_in[1]) annotation (Line(
        points={{-168,638},{-210,638},{-210,615.9},{-213.733,615.9}},
        color={127,0,0},
        thickness=0.5));
    connect(Alveoly.substances[1],O2. gas_port) annotation (Line(points={{-212,
            606},{-212,592},{-220,592},{-220,596},{-234,596},{-234,584},{-230,
            584}},                           color={158,66,200}));
    connect(Alveoly.substances[2],CO2. gas_port) annotation (Line(points={{-212,
            606},{-212,588},{-192,588}},   color={158,66,200}));
    connect(pressureCapilarsLungs.q_in, LungCapilars.q_in[1]) annotation (Line(
        points={{-106,540},{-106,520},{-136,520},{-136,496},{-192,496},{-192,
            512},{-196.05,512},{-196.05,530.1}},
        color={127,0,0},
        thickness=0.5));
    connect(O2.liquid_port, LungCapilars.substances[2]) annotation (Line(points=
           {{-230,564},{-230,512},{-198,512},{-198,540}}, color={158,66,200}));
    connect(CO2.liquid_port, LungCapilars.substances[3]) annotation (Line(
          points={{-192,568},{-198,568},{-198,540}}, color={158,66,200}));
    connect(pO2Lungs.referenceFluidPort, LungCapilars.q_in[2]) annotation (Line(
        points={{-284,562.2},{-284,496},{-192,496},{-192,512},{-197.35,512},{
            -197.35,530.1}},
        color={127,0,0},
        thickness=0.5));
    connect(pCO2Lungs.referenceFluidPort, LungCapilars.q_in[2]) annotation (
        Line(
        points={{-136,564.2},{-136,496},{-192,496},{-192,512},{-197.35,512},{
            -197.35,530.1}},
        color={127,0,0},
        thickness=0.5));

    connect(O2.liquid_port, pO2Lungs.port_a) annotation (Line(points={{-230,564},
            {-230,544},{-256,544},{-256,572},{-274,572}}, color={158,66,200}));
    connect(CO2.liquid_port, pCO2Lungs.port_a) annotation (Line(points={{-192,
            568},{-192,552},{-160,552},{-160,574},{-146,574}},            color=
           {158,66,200}));
    connect(conductor4.q_out, LungCapilars.q_in[3]) annotation (Line(
        points={{-256,470},{-192,470},{-192,512},{-198.65,512},{-198.65,530.1}},
        color={127,0,0},
        thickness=0.5));

    connect(conductor5.q_in, LungCapilars.q_in[4]) annotation (Line(
        points={{-106,474},{-192,474},{-192,512},{-199.95,512},{-199.95,530.1}},
        color={127,0,0},
        thickness=0.5));

    connect(conductor4.q_in, LungsArteries.q_in[3]) annotation (Line(
        points={{-276,470},{-372,470},{-372,440},{-372.1,440},{-372.1,442}},
        color={127,0,0},
        thickness=0.5));

    connect(conductor5.q_out, LungsVeins.q_in[4]) annotation (Line(
        points={{-86,474},{12,474},{12,440},{12.1,440},{12.1,438.96}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor3.q_in, DeadSpace.q_in) annotation (Line(
        points={{-296,638},{-322,638},{-322,682},{-204,682}},
        color={127,0,0},
        thickness=0.5));

    connect(pressureAlveols.q_in, Alveoly.q_in[2]) annotation (Line(
        points={{-36,612},{-212,612},{-212,615.9}},
        color={127,0,0},
        thickness=0.5));
    connect(pH_Arteries.port_a, Arteries.substances[13]) annotation (Line(
          points={{-170,-132},{-116,-132},{-116,-159}},
          color={158,66,200}));
    connect(pH_Veins.referenceFluidPort, Veins.q_in[6]) annotation (Line(
        points={{-228,-137.8},{-228,-146},{-256.1,-146},{-256.1,-163.486}},
        color={127,0,0},
        thickness=0.5));
    connect(pH_Veins.port_a, Veins.substances[13]) annotation (Line(points={{-238,
            -128},{-266,-128},{-266,-162}},                              color=
            {158,66,200}));
    connect(flowMeasureSweep.q_in, conductor2.q_out) annotation (Line(
        points={{-98,184},{-120,184}},
        color={127,0,0},
        thickness=0.5));
    connect(flowMeasureSweep.q_out, Sweep.y) annotation (Line(
        points={{-78,184},{-62,184},{-62,186},{-46,186}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor6.q_in, flowMeasureAlveols.q_out) annotation (Line(
        points={{-108,638},{-148,638}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor6.q_out, MinuteVolume.q_in) annotation (Line(
        points={{-88,638},{-70,638},{-70,682},{-14,682}},
        color={127,0,0},
        thickness=0.5));

    connect(pH_LungA.referenceFluidPort, LungsArteries.q_in[4]) annotation (
        Line(
        points={{-410,432.2},{-410,408},{-372,408},{-372,424},{-372.1,424},{
            -372.1,440.96}},
        color={127,0,0},
        thickness=0.5));

    connect(pH_LungV.referenceFluidPort, LungsVeins.q_in[5]) annotation (Line(
        points={{76,430.2},{76,414},{12,414},{12,424},{12.1,424},{12.1,437.92}},
        color={127,0,0},
        thickness=0.5));

    connect(pH_LungA.port_a, LungsArteries.substances[13])
      annotation (Line(points={{-400,442},{-382,442}}, color={158,66,200}));
    connect(pH_LungV.port_a, LungsVeins.substances[13])
      annotation (Line(points={{66,440},{22,440}}, color={158,66,200}));
    connect(volumePump.q_in, ECMOBloodTube.q_in[2]) annotation (Line(
        points={{-202,-56},{-168,-56},{-168,102.1},{-190.65,102.1}},
        color={127,0,0},
        thickness=0.5));
    connect(volumePump1.q_in, ECMOBloodTube.q_in[3]) annotation (Line(
        points={{-54,-56},{-168,-56},{-168,102.1},{-189.35,102.1}},
        color={127,0,0},
        thickness=0.5));
    connect(min1.y, product11.u1) annotation (Line(points={{319,138},{314,138},
            {314,186},{308,186},{308,192}},
                                       color={0,0,127}));
    connect(DeadVolumeFraction.y, product11.u2)
      annotation (Line(points={{343,204},{308,204}}, color={0,0,127}));
    connect(product11.y, product6.u2) annotation (Line(points={{285,198},{274,
            198},{274,188},{216,188},{216,188}},
                                            color={0,0,127}));
    connect(ECMOResistance.q_out, flowMeasureECMO.q_in) annotation (Line(
        points={{-306,102},{-300,102},{-300,102},{-284,102}},
        color={127,0,0},
        thickness=0.5));
    connect(Rotation.y, product7.u1)
      annotation (Line(points={{-319,66},{-296,66}}, color={0,0,127}));
    connect(product8.y, max3.u2) annotation (Line(points={{-197,48},{-154,48},{
            -154,38}}, color={0,0,127}));
    connect(volumeFlowRate4.y, max3.u1) annotation (Line(points={{-121,54},{
            -142,54},{-142,38}}, color={0,0,127}));
    connect(max3.y, product4.u1) annotation (Line(points={{-148,15},{-148,-18},
            {-180,-18}}, color={0,0,127}));
    connect(max3.y, product3.u2) annotation (Line(points={{-148,15},{-148,0},{
            -50,0},{-50,-16}}, color={0,0,127}));
    connect(flowMeasureECMO.q_out, ECMOBloodTube.q_in[4]) annotation (Line(
        points={{-264,102},{-226,102},{-226,102.1},{-188.05,102.1}},
        color={127,0,0},
        thickness=0.5));
    connect(StarlingSlopeLeft.y, product1.u1)
      annotation (Line(points={{61,122},{90,122}}, color={0,0,127}));
    connect(conductor3.q_out, Alveoly.q_in[3]) annotation (Line(
        points={{-276,638},{-210.267,638},{-210.267,615.9}},
        color={127,0,0},
        thickness=0.5));
    connect(volumeFlowRate.y, min2.u2)
      annotation (Line(points={{441,-8},{468,-8},{468,30}}, color={0,0,127}));
    connect(max1.y, min2.u1)
      annotation (Line(points={{480,-23},{480,30}}, color={0,0,127}));
    connect(min2.y, division.u1) annotation (Line(points={{474,53},{474,80},{
            484,80},{484,118},{444,118}}, color={0,0,127}));
    connect(volumePump.q_out, Veins.q_in[7]) annotation (Line(
        points={{-222,-56},{-256.1,-56},{-256.1,-164.229}},
        color={127,0,0},
        thickness=0.5));
    connect(volumePump1.q_out, Arteries.q_in[7]) annotation (Line(
        points={{-34,-56},{-18,-56},{-18,-161.451},{-125.9,-161.451}},
        color={127,0,0},
        thickness=0.5));
    connect(PressureVeins1.q_in, LungsArteries.q_in[5]) annotation (Line(
        points={{-372,508},{-372,458},{-372.1,458},{-372.1,439.92}},
        color={127,0,0},
        thickness=0.5));
    connect(RespRate.y, min3.u1)
      annotation (Line(points={{263,152},{250,152}}, color={0,0,127}));
    connect(min3.y, product6.u1) annotation (Line(points={{227,146},{224,146},{
            224,158},{216,158},{216,176}}, color={0,0,127}));
    connect(frequency1.y, min3.u2) annotation (Line(points={{267,124},{250,124},
            {250,140}}, color={0,0,127}));
    connect(ECMOResistance.q_in, Tissue.q_in[6]) annotation (Line(
        points={{-326,102},{-346,102},{-346,100},{-352,100},{-352,-250},{
            -187.833,-250},{-187.833,-248.1}},
        color={127,0,0},
        thickness=0.5));
    annotation (Icon(coordinateSystem(preserveAspectRatio=false, extent={{-660,
              -460},{660,740}})),
                            Diagram(coordinateSystem(preserveAspectRatio=false,
            extent={{-660,-460},{660,740}}), graphics={
          Rectangle(
            extent={{-356,378},{-10,-92}},
            lineColor={0,140,72},
            lineThickness=0.5),
          Text(
            extent={{-184,392},{6,326}},
            textColor={0,140,72},
            fontSize=10,
            textString="ECMO circuit"),
          Rectangle(
            extent={{-424,400},{152,-370}},
            lineColor={238,46,47},
            lineThickness=0.5),
          Text(
            extent={{28,390},{110,344}},
            textColor={238,46,47},
            fontSize=10,
            textString="Body"),
          Rectangle(
            extent={{-424,734},{150,410}},
            lineColor={28,108,200},
            lineThickness=0.5),
          Text(
            extent={{6,728},{96,688}},
            textColor={28,108,200},
            fontSize=10,
            textString="Lungs"),
          Rectangle(
            extent={{156,698},{522,-372}},
            lineColor={217,67,180},
            lineThickness=0.5),
          Text(
            extent={{204,724},{508,600}},
            textColor={217,67,180},
            textString="Respiratory regulation",
            fontSize=10)}));
  end ECMOSimReg;

  model ECMOSimNoReg
    //Typy přenosového media
        replaceable package Blood =
          Physiolibrary.Media.BloodBySiggaardAndersen annotation(choicesAllMatching=True);
      replaceable package Air =
          Physiolibrary.Media.Air annotation(choicesAllMatching=True);

    // Parametry pacienta
      parameter Real Shunts=0.02;
      parameter Physiolibrary.Types.HydraulicConductance StarlingLeft=
        1.250102626409427e-07*(5/4)                                        "Slope of starling curve [m3/(Pa.s)]";
      parameter Physiolibrary.Types.HydraulicConductance StarlingRight=
        1.250102626409427e-07*(5/4)                                         "Slope of starling curve [m3/(Pa.s)]";
      //parameter Physiolibrary.Types.VolumeFlowRate SF=8.3333333333333e-05
       //                                                         "Systemic blood flow [m3/s]";

      parameter Physiolibrary.Types.Frequency RR=0.28333333333333
                                                       "Respiration rate [s-1]";
      parameter Physiolibrary.Types.Volume TV=0.0005
                                                  "Tidal volume [m3]";
      parameter Physiolibrary.Types.Volume DV=0.00015
                                                   "Dead space volume [m3]";
      parameter Physiolibrary.Types.MolarFlowRate O2BMR=0.00024166666666667
                                                                        " [mol/s]";
      parameter Physiolibrary.Types.MolarFlowRate CO2BMR=0.00019333333333333
                                                                         " [mol/s]";
      parameter Physiolibrary.Types.HydraulicConductance C_shunt=1.250102626409427e-07
        *((Shunts*(1/3)))                          "Conductance of shunt [m3/(Pa.s)]";
      parameter Physiolibrary.Types.HydraulicConductance C_ventilation=
        1.019716212977928e-05*((1/1.5)) "Conductance of ventilation [m3/(Pa.s)]";
      parameter Physiolibrary.Types.HydraulicConductance C_cirkulation=1.250102626409427e-07
        *(1/3*(1 - Shunts))                          "Conductance of circulation [m3/(Pa.s)]";

    // Parametry ECMO

        parameter Real VAV=0   "Distribution of blood to veins and arteries, Values from 0 (100 % Veins) to 1(100 % Arteries";
  //       parameter Physiolibrary.Types.VolumeFlowRate ECMOF=0   "ECMO blood flow [m3/s]";
  //       parameter Physiolibrary.Types.VolumeFlowRate O2Flow=1.6666666666667e-05
  //                                                               "O2 flow in ECMO [m3/s]";
  //       parameter Physiolibrary.Types.VolumeFlowRate AirFlow=1.6666666666667e-05
  //                                                                      "Air flow in ECMO[m3/s]";
        parameter Real RPM=0    "Rotation per minute in ECMO pump";
        parameter Physiolibrary.Types.VolumeFlowRate SWEEP=0 "Air + O2 flow in ECMO[m3/s]";
        parameter Real FiO2=0.5       "Fraction of oxygen in gas";

    Physiolibrary.Fluid.Components.Resistor resistor1(redeclare package Medium =
          Blood, Resistance=7999343.2449*((5.5*20)/8))
      annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-160,-164})));
    Physiolibrary.Fluid.Components.ElasticVessel Arteries(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.00085,
      Compliance(displayUnit="ml/mmHg") = 2.6627185942521e-08,
      ZeroPressureVolume(displayUnit="l") = 0.00045,
      nPorts=7) annotation (Placement(transformation(extent={{-116,-170},{-136,
              -148}})));
    Physiolibrary.Fluid.Components.ElasticVessel Veins(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.00325,
      Compliance(displayUnit="ml/mmHg") = 6.1880080007267e-07,
      ZeroPressureVolume(displayUnit="l") = 0.00295,
      nPorts=7)
      annotation (Placement(transformation(extent={{-266,-172},{-246,-152}})));
    Physiolibrary.Fluid.Components.Resistor resistor2(redeclare package Medium =
          Blood, Resistance=7999343.2449*(20/8))                     annotation (
        Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-220,-164})));
    Physiolibrary.Fluid.Components.ElasticVessel Tissue(
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.0003,
      useThermalPort=true,
      Compliance(displayUnit="ml/mmHg") = 3.0002463033826e-08,
      ZeroPressureVolume(displayUnit="l") = 0.0002,
      nPorts=6) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-190,-248})));
    Physiolibrary.Fluid.Sensors.PressureMeasure PressureCapilarsTissue(
        redeclare package Medium = Blood)
      annotation (Placement(transformation(extent={{-262,-238},{-282,-218}})));
    Chemical.Sources.SubstanceInflowT CO2_in(
      SubstanceFlow(displayUnit="mmol/min") = CO2BMR,
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas()) annotation (
        Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-120,-300})));
    Chemical.Sources.SubstanceOutflow O2_left(useSubstanceFlowInput=false,
        SubstanceFlow(displayUnit="mmol/min") = O2BMR) annotation (Placement(
          transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-266,-300})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2_tissue(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-276,-260},{-256,-280}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pCO2_tissue(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(
          extent={{10,10},{-10,-10}},
          rotation=0,
          origin={-118,-270})));
    Physiolibrary.Fluid.Sensors.PartialPressure pCO2Arteries(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(
          extent={{-10,10},{10,-10}},
          rotation=180,
          origin={-74,-144})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2Arteries(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(
          extent={{-10,10},{10,-10}},
          rotation=180,
          origin={-76,-190})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureArterial(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{-124,-228},{-104,-208}})));
    Physiolibrary.Fluid.Sensors.PressureMeasure PressureVeins(redeclare package
        Medium = Blood)
      annotation (Placement(transformation(extent={{-374,-216},{-394,-196}})));
    Physiolibrary.Fluid.Components.Resistor ECMOResistance(redeclare package
        Medium = Blood, Resistance=7999343.2449*(5/5))
      annotation (Placement(transformation(extent={{-326,92},{-306,112}})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureOxygenator(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{-162,136},{-142,156}})));
    Physiolibrary.Fluid.Components.ElasticVessel ECMOBloodTube(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start=0.00012,
      useThermalPort=true,
      Compliance(displayUnit="ml/mmHg") = 7.5006157584566e-09,
      ZeroPressureVolume(displayUnit="ml") = 0.00012,
      ExternalPressure(displayUnit="mmHg") = 100658.40249833,
      nPorts=4)
      annotation (Placement(transformation(extent={{10,-10},{-10,10}},
          rotation=90,
          origin={-190,102})));
    Physiolibrary.Fluid.Sources.PressureSource AirPressureSource(redeclare
        package Medium = Air)
      annotation (Placement(transformation(extent={{-294,174},{-274,194}})));
    Physiolibrary.Fluid.Components.ElasticVessel ECMOAirTube(
      redeclare package Medium = Air,
      use_concentration_start=true,
      concentration_start={0.21,40/760,0,1 - 0.21 - 40/760},
      useSubstances=true,
      volume_start(displayUnit="l") = 0.001,
      useThermalPort=false,
      Compliance(displayUnit="ml/mmHg") = 7.5006157584566e-09,
      ZeroPressureVolume(displayUnit="l") = 0.001,
      ExternalPressure(displayUnit="mmHg") = 100791.72488574,
      nPorts=4)
      annotation (Placement(transformation(extent={{10,-10},{-10,10}},
          rotation=270,
          origin={-190,184})));

    Physiolibrary.Fluid.Sensors.PressureMeasure pressureECMOAirTube(redeclare
        package Medium = Air)
      annotation (Placement(transformation(extent={{-146,202},{-126,222}})));
    inner Modelica.Fluid.System system(T_ambient=310.15)
      annotation (Placement(transformation(extent={{-506,666},{-486,686}})));
    Physiolibrary.Thermal.Sources.UnlimitedHeat BodyHeat(T=310.15)
      annotation (Placement(transformation(extent={{-230,-350},{-210,-330}})));
    Physiolibrary.Thermal.Components.Conductor conductor(Conductance=69780)
      annotation (Placement(transformation(extent={{-192,-350},{-172,-330}})));
    Physiolibrary.Thermal.Sources.UnlimitedHeat ECMOHeater(T=310.15)
      annotation (Placement(transformation(extent={{-54,98},{-74,118}})));
    Physiolibrary.Thermal.Components.Conductor conductor1(Conductance=69780)
      annotation (Placement(transformation(extent={{-112,98},{-132,118}})));
    Physiolibrary.Fluid.Components.VolumePump heartRight(
      redeclare package Medium = Blood,
      useSolutionFlowInput=true,
      SolutionFlow(displayUnit="l/min"))                       annotation (
        Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-372,-10})));
    Physiolibrary.Fluid.Components.VolumePump heartLeft(
      redeclare package Medium = Blood,
      useSolutionFlowInput=true,
      SolutionFlow(displayUnit="l/min"))                       annotation (
        Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=270,
          origin={8,-6})));
    Physiolibrary.Fluid.Components.ElasticVessel LungsArteries(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.00038,
      Compliance(displayUnit="ml/mmHg") = 3.6002955640592e-08,
      ZeroPressureVolume(displayUnit="l") = 0.0003,
      nPorts=5)
      annotation (Placement(transformation(extent={{-382,432},{-362,452}})));
    Physiolibrary.Fluid.Components.ElasticVessel LungsVeins(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.0004,
      Compliance(displayUnit="ml/mmHg") = 7.5006157584566e-08,
      ZeroPressureVolume(displayUnit="l") = 0.0004,
      nPorts=5) annotation (Placement(transformation(extent={{22,430},{2,450}})));
    Physiolibrary.Fluid.Components.Conductor shunt(redeclare package Medium =
          Blood, Conductance(displayUnit="l/(cmH2O.s)") = C_shunt)
               annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-186,392})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasureCardiacOutput(redeclare
        package Medium = Blood) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=270,
          origin={8,-38})));
    Physiolibrary.Fluid.Sources.PressureSource pressureSource(redeclare package
        Medium = Physiolibrary.Media.Air)
      annotation (Placement(transformation(extent={{-376,672},{-356,692}})));
    Physiolibrary.Fluid.Components.VolumePump DeadSpace(
      redeclare package Medium = Physiolibrary.Media.Air,
      useSolutionFlowInput=false,
      SolutionFlow=DV*RR)
      annotation (Placement(transformation(extent={{-204,672},{-184,692}})));
    Physiolibrary.Fluid.Sources.VolumeOutflowSource MinuteVolume(
      useSolutionFlowInput=false,
      SolutionFlow=RR*TV,
      redeclare package Medium = Physiolibrary.Media.Air) annotation (Placement(
          transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-4,682})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2Veins(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-338,-174},{-318,-194}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pCO2Veins(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(
          extent={{-10,10},{10,-10}},
          rotation=0,
          origin={-320,-138})));
    Physiolibrary.Fluid.Sources.PressureSource O2PressureSource(redeclare
        package Medium =
                 Air,
      use_concentration_start=false,
      massFractions_start={1,0,0})
      annotation (Placement(transformation(extent={{-294,212},{-274,232}})));
    Physiolibrary.Fluid.Components.VolumePump O2PumpECMO(redeclare package
        Medium =
          Physiolibrary.Media.Air,
      useSolutionFlowInput=true,
      SolutionFlow(displayUnit="l/min"))
      annotation (Placement(transformation(extent={{-256,212},{-236,232}})));
    Physiolibrary.Fluid.Components.VolumePump AirPumpECMO(redeclare package
        Medium = Physiolibrary.Media.Air,
      useSolutionFlowInput=true,
      SolutionFlow(displayUnit="l/min"))
      annotation (Placement(transformation(extent={{-252,174},{-232,194}})));
    Chemical.Components.Diffusion O2Diffusion(KC=1e-4) annotation (Placement(
          transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-202,136})));
    Chemical.Components.Diffusion CO2Diffusion(KC=1e-4) annotation (Placement(
          transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-176,136})));
    Physiolibrary.Types.Constants.HydraulicConductanceConst StarlingSlopeRight(k=
          StarlingRight)
      annotation (Placement(transformation(extent={{-442,-8},{-434,0}})));
    Modelica.Blocks.Math.Product product2 annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-406,-10})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureLungsVein(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{26,104},{46,124}})));
    Physiolibrary.Types.Constants.HydraulicConductanceConst StarlingSlopeLeft(k=
          StarlingLeft)
      annotation (Placement(transformation(extent={{52,118},{60,126}})));
    Modelica.Blocks.Math.Product product1 annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={102,116})));
    Physiolibrary.Fluid.Components.VolumePump VVECMOpump(
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen,
      useSolutionFlowInput=true,
      SolutionFlow=0)
      annotation (Placement(transformation(extent={{-202,-66},{-222,-46}})));
    Physiolibrary.Fluid.Components.VolumePump VAECMOpump(
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen,
      useSolutionFlowInput=true,
      SolutionFlow(displayUnit="l/min"))
      annotation (Placement(transformation(extent={{-54,-66},{-34,-46}})));
    Modelica.Blocks.Sources.Constant const(k=VAV)
      annotation (Placement(transformation(extent={{-86,28},{-66,48}})));
    Modelica.Blocks.Math.Product product3
      annotation (Placement(transformation(extent={{-10,-10},{10,10}},
          rotation=270,
          origin={-44,-28})));
    Modelica.Blocks.Sources.Constant const1(k=1 - (VAV))
      annotation (Placement(transformation(extent={{-114,-40},{-134,-20}})));
    Modelica.Blocks.Math.Product product4
      annotation (Placement(transformation(extent={{-182,-34},{-202,-14}})));
    Physiolibrary.Fluid.Components.Conductor conductor2(redeclare package
        Medium = Physiolibrary.Media.Air, Conductance=SWEEP/100)
      annotation (Placement(transformation(extent={{-140,174},{-120,194}})));
    Physiolibrary.Fluid.Sensors.pH pH_Arteries(redeclare package Medium =
          Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-190,-142},{-170,-122}})));
    Modelica.Blocks.Sources.Constant Rotation(k=RPM)
      annotation (Placement(transformation(extent={{-340,56},{-320,76}})));
    Modelica.Blocks.Math.Product product7 annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-284,60})));
    Modelica.Blocks.Sources.Constant ECMOFlowSlope(k=0.0013)
      annotation (Placement(transformation(extent={{-338,16},{-318,36}})));
    Modelica.Blocks.Math.Add add1(k1=-1)
      annotation (Placement(transformation(extent={{-258,64},{-238,44}})));
    Modelica.Blocks.Sources.Constant ECMOFlowIntercept(k=0.4318)
      annotation (Placement(transformation(extent={{-338,-20},{-318,0}})));
    Physiolibrary.Types.Constants.VolumeFlowRateConst volumeFlowRate2(k(
          displayUnit="l/min") = 1.6666666666667e-05)
      annotation (Placement(transformation(extent={{-280,24},{-272,32}})));
    Modelica.Blocks.Math.Product product8 annotation (Placement(transformation(
          extent={{10,-10},{-10,10}},
          rotation=180,
          origin={-208,48})));
    Modelica.Blocks.Sources.Constant FiO2ECMO(k=FiO2)
      annotation (Placement(transformation(extent={{-342,286},{-322,306}})));
    Modelica.Blocks.Sources.Constant FiO2AIR(k=0.21)
      annotation (Placement(transformation(extent={{-342,252},{-322,272}})));
    Modelica.Blocks.Sources.Constant FiO2Pure(k=1)
      annotation (Placement(transformation(extent={{-342,322},{-322,342}})));
    Modelica.Blocks.Math.Add add2(k2=-1)
      annotation (Placement(transformation(extent={{-310,316},{-290,336}})));
    Modelica.Blocks.Math.Add add3(k2=-1)
      annotation (Placement(transformation(extent={{-306,278},{-286,258}})));
    Modelica.Blocks.Math.Add add4
      annotation (Placement(transformation(extent={{-230,310},{-210,330}})));
    Modelica.Blocks.Math.Abs abs1
      annotation (Placement(transformation(extent={{-276,258},{-256,278}})));
    Modelica.Blocks.Math.Division division1
      annotation (Placement(transformation(extent={{10,10},{-10,-10}},
          rotation=90,
          origin={-188,300})));
    Modelica.Blocks.Math.Product product9
      annotation (Placement(transformation(extent={{10,-10},{-10,10}},
          rotation=90,
          origin={-162,256})));
    Modelica.Blocks.Math.Product product10
      annotation (Placement(transformation(extent={{10,-10},{-10,10}},
          rotation=90,
          origin={-216,256})));
    Physiolibrary.Types.Constants.VolumeFlowRateConst volumeFlowRate3(k(
          displayUnit="l/min") = SWEEP)
      annotation (Placement(transformation(extent={{-140,316},{-148,324}})));
    Physiolibrary.Fluid.Sources.PressureSource Sweep(redeclare package Medium =
          Air, use_concentration_start=false)
      annotation (Placement(transformation(extent={{-26,176},{-46,196}})));
    Physiolibrary.Fluid.Components.ElasticVessel Alveoly(
      redeclare package Medium = Physiolibrary.Media.Air,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.0016,
      Compliance(displayUnit="ml/mmHg") = 6.0004926067653e-07,
      ZeroPressureVolume(displayUnit="l") = 0.0013,
      ExternalPressure(displayUnit="mmHg") = 100791.72488574,
      nPorts=3) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-212,616})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasureAlveols(redeclare
        package Medium =
                 Physiolibrary.Media.Air)
      annotation (Placement(transformation(extent={{-168,628},{-148,648}})));
    Physiolibrary.Fluid.Components.Conductor conductor3(redeclare package
        Medium =
          Physiolibrary.Media.Air, Conductance(displayUnit="l/(cmH2O.s)")=
        C_ventilation)
                  annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-286,638})));
    Chemical.Components.GasSolubility O2(KC=1e-4)
      annotation (Placement(transformation(extent={{-240,564},{-220,584}})));
    Chemical.Components.GasSolubility CO2(KC=1e-4)
      annotation (Placement(transformation(extent={{-196,568},{-176,588}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2Lungs(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-294,562},{-274,582}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pCO2Lungs(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(
          extent={{10,-10},{-10,10}},
          rotation=0,
          origin={-136,574})));
    Physiolibrary.Fluid.Components.Conductor conductor4(redeclare package
        Medium =
          Blood, Conductance=C_cirkulation*(8/7))
      annotation (Placement(transformation(extent={{-276,460},{-256,480}})));
    Physiolibrary.Fluid.Components.Conductor conductor5(redeclare package
        Medium =
          Blood, Conductance=C_cirkulation*8)
      annotation (Placement(transformation(extent={{-106,464},{-86,484}})));
    Physiolibrary.Fluid.Components.ElasticVessel LungCapilars(
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.00015,
      Compliance(displayUnit="ml/mmHg") = 3.0002463033826e-08,
      ZeroPressureVolume(displayUnit="l") = 0.0001,
      nPorts=4) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=270,
          origin={-198,530})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureCapilarsLungs(
        redeclare package Medium = Blood)
      annotation (Placement(transformation(extent={{-112,536},{-92,556}})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureAlveols(redeclare
        package Medium =
                 Physiolibrary.Media.Air)
      annotation (Placement(transformation(extent={{-42,608},{-22,628}})));
    Physiolibrary.Fluid.Sensors.pH pH_Veins(redeclare package Medium =
          Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-218,-138},{-238,-118}})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasureSweep(redeclare package
        Medium = Physiolibrary.Media.Air) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-88,184})));
    Physiolibrary.Fluid.Components.Conductor conductor6(redeclare package
        Medium =
          Physiolibrary.Media.Air, Conductance(displayUnit="l/(cmH2O.s)")=
        C_ventilation)
                  annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-98,638})));
    Modelica.Blocks.Math.Max max3 annotation (Placement(transformation(
          extent={{10,10},{-10,-10}},
          rotation=90,
          origin={-148,26})));
    Physiolibrary.Types.Constants.VolumeFlowRateConst volumeFlowRate4(k(
          displayUnit="l/min") = 0)
      annotation (Placement(transformation(extent={{-112,50},{-120,58}})));
    Physiolibrary.Fluid.Sensors.pH pH_LungA(redeclare package Medium =
          Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-420,432},{-400,452}})));
    Physiolibrary.Fluid.Sensors.pH pH_LungV(redeclare package Medium =
          Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{86,430},{66,450}})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasureECMO(redeclare package
        Medium = Blood) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-274,102})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureLungsArteries(
        redeclare package Medium = Blood)
      annotation (Placement(transformation(extent={{-388,494},{-368,514}})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasureAlveols1(redeclare
        package Medium = Physiolibrary.Media.Air)
      annotation (Placement(transformation(extent={{-60,672},{-40,692}})));
  equation
    connect(resistor1.q_in, Arteries.q_in[1]) annotation (Line(
        points={{-150,-164},{-125.9,-164},{-125.9,-156.549}},
        color={127,0,0},
        thickness=0.5));
    connect(resistor2.q_in, Tissue.q_in[1]) annotation (Line(
        points={{-210,-164},{-210,-248.1},{-192.167,-248.1}},
        color={127,0,0},
        thickness=0.5));
    connect(resistor1.q_out, Tissue.q_in[2]) annotation (Line(
        points={{-170,-164},{-170,-248.1},{-191.3,-248.1}},
        color={127,0,0},
        thickness=0.5));
    connect(PressureCapilarsTissue.q_in, Tissue.q_in[3]) annotation (Line(
        points={{-268,-234},{-190.433,-234},{-190.433,-248.1}},
        color={127,0,0},
        thickness=0.5));
    connect(O2_left.port_a, Tissue.substances[2]) annotation (Line(points={{-256,-300},
            {-190,-300},{-190,-258}}, color={158,66,200}));
    connect(O2_left.port_a, pO2_tissue.port_a) annotation (Line(points={{-256,-300},
            {-234,-300},{-234,-270},{-256,-270}}, color={158,66,200}));
    connect(pO2_tissue.referenceFluidPort, Tissue.q_in[4]) annotation (Line(
        points={{-266,-260.2},{-266,-248},{-212,-248},{-212,-248.1},{-189.567,
            -248.1}},
        color={127,0,0},
        thickness=0.5));

    connect(pCO2_tissue.referenceFluidPort, Tissue.q_in[5]) annotation (Line(
        points={{-118,-260.2},{-118,-248.1},{-188.7,-248.1}},
        color={127,0,0},
        thickness=0.5));
    connect(CO2_in.port_b, Tissue.substances[3]) annotation (Line(points={{-130,-300},
            {-190,-300},{-190,-258}}, color={158,66,200}));
    connect(CO2_in.port_b, pCO2_tissue.port_a) annotation (Line(points={{-130,-300},
            {-154,-300},{-154,-270},{-128,-270}}, color={158,66,200}));
    connect(resistor2.q_out, Veins.q_in[1]) annotation (Line(
        points={{-230,-164},{-256.1,-164},{-256.1,-159.771}},
        color={127,0,0},
        thickness=0.5));
    connect(pO2Arteries.port_a, Arteries.substances[2]) annotation (Line(points={{-86,
            -190},{-116,-190},{-116,-159}},
                                         color={158,66,200}));
    connect(pO2Arteries.referenceFluidPort, Arteries.q_in[2]) annotation (Line(
        points={{-76,-199.8},{-125.9,-199.8},{-125.9,-157.366}},
        color={127,0,0},
        thickness=0.5));
    connect(pCO2Arteries.referenceFluidPort, Arteries.q_in[3]) annotation (Line(
        points={{-74,-153.8},{-74,-158.183},{-125.9,-158.183}},
        color={127,0,0},
        thickness=0.5));
    connect(pCO2Arteries.port_a, Arteries.substances[3])
      annotation (Line(points={{-84,-144},{-116,-144},{-116,-159}},
                                                           color={158,66,200}));
    connect(BodyHeat.port, conductor.q_in) annotation (Line(
        points={{-210,-340},{-192,-340}},
        color={191,0,0},
        thickness=0.5));
    connect(conductor.q_out, Tissue.heatPort) annotation (Line(
        points={{-172,-340},{-170,-340},{-170,-258},{-179.8,-258},{-179.8,-254}},
        color={191,0,0},
        thickness=0.5));

    connect(PressureVeins.q_in, Veins.q_in[2]) annotation (Line(
        points={{-380,-212},{-250,-212},{-250,-160.514},{-256.1,-160.514}},
        color={127,0,0},
        thickness=0.5));
    connect(pressureECMOAirTube.q_in, ECMOAirTube.q_in[1]) annotation (Line(
        points={{-140,206},{-188.05,206},{-188.05,183.9}},
        color={127,0,0},
        thickness=0.5));
    connect(ECMOHeater.port, conductor1.q_in) annotation (Line(
        points={{-74,108},{-112,108}},
        color={191,0,0},
        thickness=0.5));
    connect(conductor1.q_out, ECMOBloodTube.heatPort) annotation (Line(
        points={{-132,108},{-179.8,108}},
        color={191,0,0},
        thickness=0.5));
    connect(flowMeasureCardiacOutput.q_out, Arteries.q_in[4]) annotation (Line(
        points={{8,-48},{8,-159},{-125.9,-159}},
        color={127,0,0},
        thickness=0.5));
    connect(heartRight.q_in, Veins.q_in[3]) annotation (Line(
        points={{-372,-20},{-372,-161.257},{-256.1,-161.257}},
        color={127,0,0},
        thickness=0.5));
    connect(heartRight.q_out, LungsArteries.q_in[1]) annotation (Line(
        points={{-372,0},{-372,424},{-372.1,424},{-372.1,444.08}},
        color={127,0,0},
        thickness=0.5));
    connect(shunt.q_out, LungsVeins.q_in[1]) annotation (Line(
        points={{-176,392},{12.1,392},{12.1,442.08}},
        color={127,0,0},
        thickness=0.5));
    connect(heartLeft.q_in, LungsVeins.q_in[2]) annotation (Line(
        points={{8,4},{12.1,441.04}},
        color={127,0,0},
        thickness=0.5));
    connect(heartLeft.q_out, flowMeasureCardiacOutput.q_in) annotation (Line(
        points={{8,-16},{8,-28}},
        color={127,0,0},
        thickness=0.5));
    connect(LungsArteries.q_in[2], shunt.q_in) annotation (Line(
        points={{-372.1,443.04},{-372,443.04},{-372,392},{-196,392}},
        color={127,0,0},
        thickness=0.5));
    connect(pressureSource.y, DeadSpace.q_in) annotation (Line(
        points={{-356,682},{-204,682}},
        color={127,0,0},
        thickness=0.5));

    connect(O2PressureSource.y,O2PumpECMO. q_in) annotation (Line(
        points={{-274,222},{-256,222}},
        color={127,0,0},
        thickness=0.5));
    connect(O2PumpECMO.q_out, ECMOAirTube.q_in[2]) annotation (Line(
        points={{-236,222},{-189.35,222},{-189.35,183.9}},
        color={127,0,0},
        thickness=0.5));
    connect(AirPumpECMO.q_out, ECMOAirTube.q_in[3]) annotation (Line(
        points={{-232,184},{-194,184},{-194,188},{-190.65,188},{-190.65,183.9}},
        color={127,0,0},
        thickness=0.5));

    connect(AirPressureSource.y, AirPumpECMO.q_in) annotation (Line(
        points={{-274,184},{-252,184}},
        color={127,0,0},
        thickness=0.5));
    connect(O2Diffusion.port_b, ECMOAirTube.substances[1]) annotation (Line(
          points={{-202,146},{-202,152},{-190,152},{-190,174}},
                                                              color={158,66,200}));
    connect(CO2Diffusion.port_b, ECMOAirTube.substances[2]) annotation (Line(
          points={{-176,146},{-176,152},{-190,152},{-190,174}},
                                                        color={158,66,200}));
    connect(CO2Diffusion.port_a, ECMOBloodTube.substances[3]) annotation (Line(
          points={{-176,126},{-176,112},{-190,112}},color={158,66,200}));
    connect(O2Diffusion.port_a, ECMOBloodTube.substances[2])
      annotation (Line(points={{-202,126},{-202,114},{-190,114},{-190,112}},
                                                       color={158,66,200}));
    connect(StarlingSlopeRight.y, product2.u1)
      annotation (Line(points={{-433,-4},{-418,-4}}, color={0,0,127}));
    connect(PressureVeins.pressure, product2.u2) annotation (Line(points={{-390,
            -210},{-418,-210},{-418,-16}},                         color={0,0,127}));
    connect(product2.y, heartRight.solutionFlow) annotation (Line(points={{-395,
            -10},{-390,-10},{-390,-8},{-379,-8},{-379,-10}},
                                                      color={0,0,127}));
    connect(pressureLungsVein.pressure, product1.u2)
      annotation (Line(points={{42,110},{90,110}},   color={0,0,127}));
    connect(product1.y, heartLeft.solutionFlow) annotation (Line(points={{113,116},
            {122,116},{122,-6},{15,-6}},  color={0,0,127}));
    connect(pressureLungsVein.q_in, LungsVeins.q_in[3]) annotation (Line(
        points={{32,108},{32,88},{12.1,88},{12.1,440}},
        color={127,0,0},
        thickness=0.5));

    connect(const1.y, product4.u2)
      annotation (Line(points={{-135,-30},{-180,-30}},
                                               color={0,0,127}));
    connect(product4.y,VVECMOpump. solutionFlow) annotation (Line(points={{-203,
            -24},{-212,-24},{-212,-49}},              color={0,0,127}));
    connect(pressureArterial.q_in, Arteries.q_in[5]) annotation (Line(
        points={{-118,-224},{-126,-224},{-126,-159.817},{-125.9,-159.817}},
        color={127,0,0},
        thickness=0.5));
    connect(const.y, product3.u1)
      annotation (Line(points={{-65,38},{-38,38},{-38,-16}}, color={0,0,127}));
    connect(product3.y, VAECMOpump.solutionFlow)
      annotation (Line(points={{-44,-39},{-44,-49}}, color={0,0,127}));
    connect(pressureOxygenator.q_in, ECMOBloodTube.q_in[1]) annotation (Line(
        points={{-156,140},{-156,102.1},{-191.95,102.1}},
        color={127,0,0},
        thickness=0.5));
    connect(pH_Arteries.referenceFluidPort, Arteries.q_in[6]) annotation (Line(
        points={{-180,-141.8},{-180,-176},{-125.9,-176},{-125.9,-160.634}},
        color={127,0,0},
        thickness=0.5));
    connect(ECMOFlowSlope.y, product7.u2) annotation (Line(points={{-317,26},{-302,
            26},{-302,52},{-296,52},{-296,54}},
                                              color={0,0,127}));
    connect(ECMOFlowIntercept.y, add1.u1) annotation (Line(points={{-317,-10},{-288,
            -10},{-288,48},{-260,48}},  color={0,0,127}));
    connect(pCO2Veins.referenceFluidPort, Veins.q_in[4]) annotation (Line(
        points={{-320,-128.2},{-272,-128.2},{-272,-162},{-256.1,-162}},
        color={127,0,0},
        thickness=0.5));
    connect(pO2Veins.referenceFluidPort, Veins.q_in[5]) annotation (Line(
        points={{-328,-174.2},{-320,-174.2},{-320,-170},{-256.1,-170},{-256.1,
            -162.743}},
        color={127,0,0},
        thickness=0.5));

    connect(pO2Veins.port_a, Veins.substances[2]) annotation (Line(points={{-318,-184},
            {-304,-184},{-304,-182},{-266,-182},{-266,-162}}, color={158,66,200}));
    connect(pCO2Veins.port_a, Veins.substances[3]) annotation (Line(points={{-310,
            -138},{-294,-138},{-294,-144},{-266,-144},{-266,-162}}, color={158,66,
            200}));
    connect(product7.y, add1.u2) annotation (Line(points={{-273,60},{-260,60}},
                              color={0,0,127}));
    connect(volumeFlowRate2.y, product8.u1) annotation (Line(points={{-271,28},{-230,
            28},{-230,42},{-220,42}},
                             color={0,0,127}));
    connect(add1.y, product8.u2) annotation (Line(points={{-237,54},{-237,54},{-220,
            54}},                       color={0,0,127}));
    connect(FiO2ECMO.y, add2.u2) annotation (Line(points={{-321,296},{-312,296},{-312,
            320}}, color={0,0,127}));
    connect(FiO2Pure.y, add2.u1)
      annotation (Line(points={{-321,332},{-312,332}}, color={0,0,127}));
    connect(FiO2AIR.y, add3.u1)
      annotation (Line(points={{-321,262},{-308,262}}, color={0,0,127}));
    connect(add3.u2, FiO2ECMO.y) annotation (Line(points={{-308,274},{-310,274},{-310,
            296},{-321,296}}, color={0,0,127}));
    connect(add3.y, abs1.u)
      annotation (Line(points={{-285,268},{-278,268}}, color={0,0,127}));
    connect(add2.y, add4.u1)
      annotation (Line(points={{-289,326},{-232,326}}, color={0,0,127}));
    connect(abs1.y, add4.u2) annotation (Line(points={{-255,268},{-248,268},{-248,
            314},{-232,314}}, color={0,0,127}));
    connect(add4.y, division1.u2) annotation (Line(points={{-209,320},{-194,320},{
            -194,312}}, color={0,0,127}));
    connect(volumeFlowRate3.y, division1.u1) annotation (Line(points={{-149,320},{
            -182,320},{-182,312}}, color={0,0,127}));
    connect(product10.u1, add4.u2) annotation (Line(points={{-222,268},{-248,268},
            {-248,314},{-232,314}}, color={0,0,127}));
    connect(product10.u2, division1.y) annotation (Line(points={{-210,268},{-188,268},
            {-188,289}}, color={0,0,127}));
    connect(product10.y, O2PumpECMO.solutionFlow) annotation (Line(points={{-216,245},
            {-216,240},{-246,240},{-246,229}}, color={0,0,127}));
    connect(product9.u1, division1.y) annotation (Line(points={{-168,268},{-188,268},
            {-188,289}}, color={0,0,127}));
    connect(add2.y, product9.u2) annotation (Line(points={{-289,326},{-290,326},{-290,
            342},{-134,342},{-134,268},{-156,268}}, color={0,0,127}));
    connect(product9.y, AirPumpECMO.solutionFlow) annotation (Line(points={{-162,245},
            {-162,230},{-228,230},{-228,191},{-242,191}}, color={0,0,127}));
    connect(conductor2.q_in, ECMOAirTube.q_in[4]) annotation (Line(
        points={{-140,184},{-166,184},{-166,183.9},{-191.95,183.9}},
        color={127,0,0},
        thickness=0.5));
    connect(flowMeasureAlveols.q_in, Alveoly.q_in[1]) annotation (Line(
        points={{-168,638},{-210,638},{-210,615.9},{-213.733,615.9}},
        color={127,0,0},
        thickness=0.5));
    connect(Alveoly.substances[1],O2. gas_port) annotation (Line(points={{-212,
            606},{-212,592},{-220,592},{-220,590},{-234,590},{-234,584},{-230,
            584}},                           color={158,66,200}));
    connect(Alveoly.substances[2],CO2. gas_port) annotation (Line(points={{-212,
            606},{-212,588},{-186,588}},   color={158,66,200}));
    connect(pressureCapilarsLungs.q_in, LungCapilars.q_in[1]) annotation (Line(
        points={{-106,540},{-106,520},{-136,520},{-136,496},{-200,496},{-200,
            510},{-196.05,510},{-196.05,530.1}},
        color={127,0,0},
        thickness=0.5));
    connect(O2.liquid_port, LungCapilars.substances[2]) annotation (Line(points=
           {{-230,564},{-230,550},{-198,550},{-198,540}}, color={158,66,200}));
    connect(CO2.liquid_port, LungCapilars.substances[3]) annotation (Line(
          points={{-186,568},{-186,550},{-198,550},{-198,540}}, color={158,66,
            200}));
    connect(pO2Lungs.referenceFluidPort, LungCapilars.q_in[2]) annotation (Line(
        points={{-284,562.2},{-284,496},{-200,496},{-200,510},{-197.35,510},{
            -197.35,530.1}},
        color={127,0,0},
        thickness=0.5));
    connect(pCO2Lungs.referenceFluidPort, LungCapilars.q_in[2]) annotation (
        Line(
        points={{-136,564.2},{-136,494},{-200,494},{-200,510},{-197.35,510},{
            -197.35,530.1}},
        color={127,0,0},
        thickness=0.5));

    connect(O2.liquid_port, pO2Lungs.port_a) annotation (Line(points={{-230,564},
            {-230,550},{-254,550},{-254,572},{-274,572}}, color={158,66,200}));
    connect(CO2.liquid_port, pCO2Lungs.port_a) annotation (Line(points={{-186,
            568},{-186,550},{-160,550},{-160,574},{-146,574}},            color=
           {158,66,200}));
    connect(conductor4.q_out, LungCapilars.q_in[3]) annotation (Line(
        points={{-256,470},{-198,470},{-198,510},{-198.65,510},{-198.65,530.1}},
        color={127,0,0},
        thickness=0.5));

    connect(conductor5.q_in, LungCapilars.q_in[4]) annotation (Line(
        points={{-106,474},{-200,474},{-200,512},{-199.95,512},{-199.95,530.1}},
        color={127,0,0},
        thickness=0.5));

    connect(conductor4.q_in, LungsArteries.q_in[3]) annotation (Line(
        points={{-276,470},{-372,470},{-372,440},{-372.1,440},{-372.1,442}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor5.q_out, LungsVeins.q_in[4]) annotation (Line(
        points={{-86,474},{12,474},{12,440},{12.1,440},{12.1,438.96}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor3.q_in, DeadSpace.q_in) annotation (Line(
        points={{-296,638},{-322,638},{-322,682},{-204,682}},
        color={127,0,0},
        thickness=0.5));

    connect(pressureAlveols.q_in, Alveoly.q_in[2]) annotation (Line(
        points={{-36,612},{-212,612},{-212,615.9}},
        color={127,0,0},
        thickness=0.5));
    connect(pH_Arteries.port_a, Arteries.substances[13]) annotation (Line(
          points={{-170,-132},{-116,-132},{-116,-159}},
          color={158,66,200}));
    connect(pH_Veins.referenceFluidPort, Veins.q_in[6]) annotation (Line(
        points={{-228,-137.8},{-228,-146},{-256.1,-146},{-256.1,-163.486}},
        color={127,0,0},
        thickness=0.5));
    connect(pH_Veins.port_a, Veins.substances[13]) annotation (Line(points={{-238,
            -128},{-266,-128},{-266,-162}},                              color=
            {158,66,200}));
    connect(flowMeasureSweep.q_in, conductor2.q_out) annotation (Line(
        points={{-98,184},{-120,184}},
        color={127,0,0},
        thickness=0.5));
    connect(flowMeasureSweep.q_out, Sweep.y) annotation (Line(
        points={{-78,184},{-62,184},{-62,186},{-46,186}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor6.q_in, flowMeasureAlveols.q_out) annotation (Line(
        points={{-108,638},{-148,638}},
        color={127,0,0},
        thickness=0.5));
    connect(VAECMOpump.q_out, Arteries.q_in[7]) annotation (Line(
        points={{-34,-56},{-18,-56},{-18,-126},{-125.9,-126},{-125.9,-161.451}},
        color={127,0,0},
        thickness=0.5));

    connect(pH_LungA.referenceFluidPort, LungsArteries.q_in[4]) annotation (Line(
        points={{-410,432.2},{-410,408},{-372,408},{-372,424},{-372.1,424},{
            -372.1,440.96}},
        color={127,0,0},
        thickness=0.5));

    connect(pH_LungV.referenceFluidPort, LungsVeins.q_in[5]) annotation (Line(
        points={{76,430.2},{76,414},{12,414},{12,424},{12.1,424},{12.1,437.92}},
        color={127,0,0},
        thickness=0.5));
    connect(pH_LungA.port_a, LungsArteries.substances[13])
      annotation (Line(points={{-400,442},{-382,442}}, color={158,66,200}));
    connect(pH_LungV.port_a, LungsVeins.substances[13])
      annotation (Line(points={{66,440},{22,440}}, color={158,66,200}));
    connect(VVECMOpump.q_in, ECMOBloodTube.q_in[2]) annotation (Line(
        points={{-202,-56},{-168,-56},{-168,102.1},{-190.65,102.1}},
        color={127,0,0},
        thickness=0.5));
    connect(VAECMOpump.q_in, ECMOBloodTube.q_in[3]) annotation (Line(
        points={{-54,-56},{-168,-56},{-168,102.1},{-189.35,102.1}},
        color={127,0,0},
        thickness=0.5));
    connect(ECMOResistance.q_out, flowMeasureECMO.q_in) annotation (Line(
        points={{-306,102},{-300,102},{-300,102},{-284,102}},
        color={127,0,0},
        thickness=0.5));
    connect(Rotation.y, product7.u1)
      annotation (Line(points={{-319,66},{-296,66}}, color={0,0,127}));
    connect(product8.y, max3.u2)
      annotation (Line(points={{-197,48},{-154,48},{-154,38}}, color={0,0,127}));
    connect(volumeFlowRate4.y, max3.u1)
      annotation (Line(points={{-121,54},{-142,54},{-142,38}}, color={0,0,127}));
    connect(max3.y, product4.u1) annotation (Line(points={{-148,15},{-148,-18},{-180,
            -18}}, color={0,0,127}));
    connect(max3.y, product3.u2) annotation (Line(points={{-148,15},{-148,0},{-50,
            0},{-50,-16}}, color={0,0,127}));
    connect(flowMeasureECMO.q_out, ECMOBloodTube.q_in[4]) annotation (Line(
        points={{-264,102},{-226,102},{-226,102.1},{-188.05,102.1}},
        color={127,0,0},
        thickness=0.5));
    connect(StarlingSlopeLeft.y, product1.u1)
      annotation (Line(points={{61,122},{90,122}}, color={0,0,127}));
    connect(conductor3.q_out, Alveoly.q_in[3]) annotation (Line(
        points={{-276,638},{-210.267,638},{-210.267,615.9}},
        color={127,0,0},
        thickness=0.5));
    connect(pressureLungsArteries.q_in, LungsArteries.q_in[5]) annotation (Line(
        points={{-382,498},{-382,439.92},{-372.1,439.92}},
        color={127,0,0},
        thickness=0.5));
    connect(VVECMOpump.q_out, Veins.q_in[7]) annotation (Line(
        points={{-222,-56},{-240,-56},{-240,-54},{-256.1,-54},{-256.1,-164.229}},
        color={127,0,0},
        thickness=0.5));

    connect(ECMOResistance.q_in, Tissue.q_in[6]) annotation (Line(
        points={{-326,102},{-352,102},{-352,-248.1},{-187.833,-248.1}},
        color={127,0,0},
        thickness=0.5));
    connect(flowMeasureAlveols1.q_out, MinuteVolume.q_in) annotation (Line(
        points={{-40,682},{-14,682}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor6.q_out, flowMeasureAlveols1.q_in) annotation (Line(
        points={{-88,638},{-70,638},{-70,682},{-60,682}},
        color={127,0,0},
        thickness=0.5));
    connect(DeadSpace.q_out, flowMeasureAlveols1.q_in) annotation (Line(
        points={{-184,682},{-60,682}},
        color={127,0,0},
        thickness=0.5));
    annotation (Icon(coordinateSystem(preserveAspectRatio=false, extent={{-660,-460},
              {660,740}})), Diagram(coordinateSystem(preserveAspectRatio=false,
            extent={{-660,-460},{660,740}}), graphics={
          Rectangle(
            extent={{-356,378},{-10,-92}},
            lineColor={0,140,72},
            lineThickness=0.5),
          Text(
            extent={{-184,392},{6,326}},
            textColor={0,140,72},
            fontSize=10,
            textString="ECMO circuit"),
          Rectangle(
            extent={{-424,400},{152,-370}},
            lineColor={238,46,47},
            lineThickness=0.5),
          Text(
            extent={{78,388},{136,340}},
            textColor={238,46,47},
            fontSize=10,
            textString="Body"),
          Rectangle(
            extent={{-424,734},{150,410}},
            lineColor={28,108,200},
            lineThickness=0.5),
          Text(
            extent={{6,728},{96,688}},
            textColor={28,108,200},
            fontSize=10,
            textString="Lungs")}));
  end ECMOSimNoReg;

  package Experiments
    model ECMOSimNoRegHealthy
      extends modelECMORespiratoryVR.ECMOSimNoReg(
        Shunts=0.02,
        StarlingLeft=1.250102626409427e-07*(5/4),
        StarlingRight=1.250102626409427e-07*(5/4),
        RR=17/60,
        TV=0.0005,
        DV=0.00015,
        O2BMR=14.5/60000,
        CO2BMR=11.6/60000,
        VAV=0,
        RPM=0,
        SWEEP=0,
        FiO2=0.21);
      annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
            coordinateSystem(preserveAspectRatio=false)));
    end ECMOSimNoRegHealthy;

    model ECMOSimRegHealthy
      extends modelECMORespiratoryVR.ECMOSimReg(
        DVfraction=0.3,
        Shunts=0.02,
        StarlingLeft=1.250102626409427e-07*(5/4),
        StarlingRight=1.250102626409427e-07*(5/4),
        O2BMR=14.5/60000,
        CO2BMR=11.6/60000,
        VAV=0,
        RPM=0,
        SWEEP=0,
        FiO2=0.21);
      annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
            coordinateSystem(preserveAspectRatio=false)));
    end ECMOSimRegHealthy;

    model ECMOSimRegDeadVol
      extends modelECMORespiratoryVR.ECMOSimReg(
        DVfraction=0.97,
        Shunts=0.02,
        StarlingLeft=1.250102626409427e-07*(5/4),
        StarlingRight=1.250102626409427e-07*(5/4),
        O2BMR=14.5/60000,
        CO2BMR=11.6/60000,
        VAV=0,
        RPM=0,
        SWEEP=0,
        FiO2=0.21);
      annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
            coordinateSystem(preserveAspectRatio=false)));
    end ECMOSimRegDeadVol;

    model ECMOSimRegDeadVolVVECMO
      extends modelECMORespiratoryVR.ECMOSimReg(
        DVfraction=0.97,
        Shunts=0.02,
        StarlingLeft=1.250102626409427e-07*(5/4),
        StarlingRight=1.250102626409427e-07*(5/4),
        O2BMR=14.5/60000,
        CO2BMR=11.6/60000,
        VAV=0,
        RPM=3000,
        SWEEP=5000/60000000,
        FiO2=1);
      annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
            coordinateSystem(preserveAspectRatio=false)));
    end ECMOSimRegDeadVolVVECMO;

    model ECMOSimNoRegDeadVol
      extends modelECMORespiratoryVR.ECMOSimNoReg(
        Shunts=0.02,
        StarlingLeft=1.250102626409427e-07*(5/4),
        StarlingRight=1.250102626409427e-07*(5/4),
        RR=17/60,
        TV=0.0005,
        DV=0.00035,
        O2BMR=14.5/60000,
        CO2BMR=11.6/60000,
        VAV=0,
        RPM=0,
        SWEEP=0,
        FiO2=0.21);
      annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
            coordinateSystem(preserveAspectRatio=false)));
    end ECMOSimNoRegDeadVol;

    model ECMOSimNoRegDeadVolVVECMO
      extends modelECMORespiratoryVR.ECMOSimNoReg(
        Shunts=0.02,
        StarlingLeft=1.250102626409427e-07*(5/4),
        StarlingRight=1.250102626409427e-07*(5/4),
        RR=17/60,
        TV=0.0005,
        DV=0.00035,
        O2BMR=14.5/60000,
        CO2BMR=11.6/60000,
        VAV=0,
        RPM=2500,
        SWEEP=2500/60000000,
        FiO2=0.21);
      annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
            coordinateSystem(preserveAspectRatio=false)));
    end ECMOSimNoRegDeadVolVVECMO;

    model ECMOSimNoRegShunts
      extends modelECMORespiratoryVR.ECMOSimNoReg(
        Shunts=0.65,
        StarlingLeft=1.250102626409427e-07*(5/4),
        StarlingRight=1.250102626409427e-07*(5/4),
        RR=17/60,
        TV=0.0005,
        DV=0.00015,
        O2BMR=14.5/60000,
        CO2BMR=11.6/60000,
        VAV=0,
        RPM=0,
        SWEEP=0,
        FiO2=1);
      annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
            coordinateSystem(preserveAspectRatio=false)));
    end ECMOSimNoRegShunts;

    model ECMOSimNoRegShuntsVVECMO
      extends modelECMORespiratoryVR.ECMOSimNoReg(
        Shunts=0.65,
        StarlingLeft=1.250102626409427e-07*(5/4),
        StarlingRight=1.250102626409427e-07*(5/4),
        RR=17/60,
        TV=0.0005,
        DV=0.00015,
        O2BMR=14.5/60000,
        CO2BMR=11.6/60000,
        VAV=0,
        RPM=3500,
        SWEEP=2000/60000000,
        FiO2=0.8);
      annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
            coordinateSystem(preserveAspectRatio=false)));
    end ECMOSimNoRegShuntsVVECMO;

    model ECMOSimRegShunts
      extends modelECMORespiratoryVR.ECMOSimReg(
        DVfraction=0.3,
        Shunts=0.65,
        StarlingLeft=1.250102626409427e-07*(5/4),
        StarlingRight=1.250102626409427e-07*(5/4),
        O2BMR=14.5/60000,
        CO2BMR=11.6/60000,
        VAV=0,
        RPM=0,
        SWEEP=0,
        FiO2=0.21);
      annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
            coordinateSystem(preserveAspectRatio=false)));
    end ECMOSimRegShunts;

    model ECMOSimRegShuntsVVECMO
      extends modelECMORespiratoryVR.ECMOSimReg(
        DVfraction=0.3,
        Shunts=0.65,
        StarlingLeft=1.250102626409427e-07*(5/4),
        StarlingRight=1.250102626409427e-07*(5/4),
        O2BMR=14.5/60000,
        CO2BMR=11.6/60000,
        VAV=0,
        RPM=3500,
        SWEEP=2000/60000000,
        FiO2=0.8);
      annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
            coordinateSystem(preserveAspectRatio=false)));
    end ECMOSimRegShuntsVVECMO;

    model ECMOSimRegHeartFailure
      extends modelECMORespiratoryVR.ECMOSimReg(
        DVfraction=0.3,
        Shunts=0.02,
        StarlingLeft=1.250102626409427e-07*(1/8),
        StarlingRight=1.250102626409427e-07*(2/4),
        O2BMR=14.5/60000,
        CO2BMR=11.6/60000,
        VAV=0,
        RPM=0,
        SWEEP=0,
        FiO2=0.21);
      annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
            coordinateSystem(preserveAspectRatio=false)));
    end ECMOSimRegHeartFailure;

    model ECMOSimRegHeartFailureVAECMO
      extends modelECMORespiratoryVR.ECMOSimReg(
        DVfraction=0.3,
        Shunts=0.02,
        StarlingLeft=1.250102626409427e-07*(1/8),
        StarlingRight=1.250102626409427e-07*(2/4),
        O2BMR=14.5/60000,
        CO2BMR=11.6/60000,
        VAV=1,
        RPM=3000,
        SWEEP=5000/60000000,
        FiO2=0.8);
      annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
            coordinateSystem(preserveAspectRatio=false)));
    end ECMOSimRegHeartFailureVAECMO;

    model ECMOSimNoRegHeartFailure
      extends modelECMORespiratoryVR.ECMOSimNoReg(
        Shunts=0.02,
        StarlingLeft=1.250102626409427e-07*(1/8),
        StarlingRight=1.250102626409427e-07*(2/4),
        RR=17/60,
        TV=0.0005,
        DV=0.00015,
        O2BMR=14.5/60000,
        CO2BMR=11.6/60000,
        VAV=0,
        RPM=0,
        SWEEP=0,
        FiO2=0.21);
      annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
            coordinateSystem(preserveAspectRatio=false)));
    end ECMOSimNoRegHeartFailure;

    model ECMOSimNoRegHeartFailureVAECMO
      extends modelECMORespiratoryVR.ECMOSimNoReg(
        Shunts=0.02,
        StarlingLeft=1.250102626409427e-07*(1/8),
        StarlingRight=1.250102626409427e-07*(2/4),
        RR=17/60,
        TV=0.0005,
        DV=0.00015,
        O2BMR=14.5/60000,
        CO2BMR=11.6/60000,
        VAV=1,
        RPM=3000,
        SWEEP=5000/60000000,
        FiO2=0.8);
      annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
            coordinateSystem(preserveAspectRatio=false)));
    end ECMOSimNoRegHeartFailureVAECMO;
  end Experiments;

  model modelRespiratoryBreathByBreath
    ECMOSimNoReg eCMOSimNoReg
      annotation (Placement(transformation(extent={{-80,-20},{-22,24}})));
    Physiolibrary.Fluid.Examples.MinimalRespiration minimalRespiration
      annotation (Placement(transformation(extent={{36,-10},{56,10}})));
          parameter Real breathrate;
          parameter Real breathforce;
  equation

    annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
          coordinateSystem(preserveAspectRatio=false)));
  end modelRespiratoryBreathByBreath;

  model ICUVentilator
    type ventilatormodes = enumeration(
        volumecontrol,
        pressurecontrol,
        intelligent,
        noninvasive);
    type ventilatorvolume = enumeration(
        SCMV,
        SIMV,
        APVcmv,
        APVsimv);
    type ventilatorpressure = enumeration(
        PCV,
        PSIMV,
        DuoPAP,
        APRV,
        SPONT);
    type ventilatorintelligent = enumeration(
        ASV,
        INTELLIVENT);
    type ventilatornoninvasive = enumeration(
        NIV,
        NIVST,
        nCPAPPS,
        HiFlowO2);
    type pacientcategory = enumeration(
        Adult,
        Child,
        Baby);

    annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
          coordinateSystem(preserveAspectRatio=false)));
  end ICUVentilator;

  model VentilatorVcontrolled
    import Modelica.Units.SI.*;

    replaceable package Air = Physiolibrary.Media.Air;

    parameter Frequency RespirationRate=1/17
   "Respiration rate";
  //  parameter Volume ResidualVolume=0.0013
  // "Lungs residual volume";

    parameter Volume FunctionalResidualCapacity=0.00231
   "Functional residual capacity";
    parameter Physiolibrary.Types.HydraulicResistance TotalResistance=147099.75
   "Total lungs pathways conductance";
    parameter Physiolibrary.Types.HydraulicCompliance TotalCompliance(displayUnit="ml/mmHg")=
       6.0004926067653e-07                        "Total lungs compliance";

    parameter Pressure Pmin(displayUnit="kPa")=-1000
   "Relative external lungs pressure minimum caused by respiratory muscles";
    parameter Pressure Pmax(displayUnit="kPa") = 0
   "Relative external lungs pressure maximum";
    parameter Real RespiratoryMusclePressureCycle[:,3]={
   {0,system.p_ambient + Pmax,0},
   {3/8,system.p_ambient + Pmin,0},
   {4/8,system.p_ambient + (Pmin+Pmax)/2,(Pmax-Pmin)*5},
   {6/8,system.p_ambient + Pmax - (Pmax-Pmin)/16,(Pmax-Pmin)*0.5},
   {1,system.p_ambient + Pmax,0}}
   "Absolute external lungs pressure during respiration cycle scaled to time period (0,1)";

    parameter Volume LungsAirVolume_initial=FunctionalResidualCapacity;

    //parameter Volume VT;

    parameter Physiolibrary.Types.HydraulicConductance expConductance = 1;

    Physiolibrary.Fluid.Sensors.PartialPressure pCO2(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Air)
      annotation (Placement(transformation(extent={{14,-32},{34,-52}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Air)
      annotation (Placement(transformation(extent={{72,-30},{52,-50}})));
  Physiolibrary.Fluid.Components.ElasticVessel lungs(
      redeclare package Medium = Air,
      useSubstances=true,
      use_mass_start=false,
      volume_start=LungsAirVolume_initial,
      use_concentration_start=false,
      massFractions_start=Air.reference_X,
      EnthalpyNotUsed=false,
      ZeroPressureVolume=FunctionalResidualCapacity,
      Compliance=TotalCompliance,
      useExternalPressureInput=false,
      nPorts=4) "Lungs"
   annotation (Placement(transformation(extent={{32,-10},{52,10}})));
    Physiolibrary.Fluid.Sensors.PressureMeasure lungsPressureMeasure(redeclare
        package Medium = Air)        "Lungs pressure"
   annotation (Placement(transformation(extent={{66,-2},{86,18}})));
    inner Modelica.Fluid.System system(T_ambient=310.15)
    "Human body system setting"
   annotation (Placement(transformation(extent={{-90,72},{-70,92}})));
    Physiolibrary.Fluid.Sources.PressureSource environment(redeclare package
        Medium = Air)                        "External environment"
   annotation (Placement(transformation(extent={{-92,40},{-72,60}})));
    Physiolibrary.Fluid.Components.Resistor
                        resistor(
      redeclare package Medium = Air,
      EnthalpyNotUsed=false,
      Resistance=TotalResistance)
   annotation (Placement(transformation(extent={{-8,-26},{12,-6}})));
    Physiolibrary.Types.Constants.FrequencyConst
                                   frequency(k=RespirationRate)
   annotation (Placement(transformation(extent={{-64,-34},{-56,-26}})));
    Physiolibrary.Fluid.Sensors.FlowMeasure
                        flowMeasure(redeclare package Medium = Air)
   annotation (Placement(transformation(extent={{-36,-26},{-16,-6}})));
    Physiolibrary.Fluid.Sources.VolumeInflowSource volumeInflowSource(
        useSolutionFlowInput=true, redeclare package Medium = Air)
      annotation (Placement(transformation(extent={{-70,-90},{-50,-70}})));
    Physiolibrary.Fluid.Components.IdealValve idealValve(redeclare package Medium =
          Air)                       annotation (Placement(
          transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-54,50})));
    Physiolibrary.Fluid.Components.Conductor expiration(redeclare package Medium =
          Air,                                          useConductanceInput=true)
      annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-36,22})));
    VolumeController ventilatorSCMV
      annotation (Placement(transformation(extent={{-78,-62},{-58,-42}})));
    Physiolibrary.Types.Constants.HydraulicConductanceConst expirationConductance(k=
          expConductance)
      annotation (Placement(transformation(extent={{-92,24},{-84,32}})));
    Modelica.Blocks.Math.Product product1
      annotation (Placement(transformation(extent={{-64,18},{-54,28}})));
  equation
    connect(lungsPressureMeasure.
                          q_in,lungs. q_in[1]) annotation (Line(
     points={{72,2},{72,1.95},{41.9,1.95}},
     color={127,0,0},
     thickness=0.5));
    connect(resistor.
              q_out,lungs. q_in[2]) annotation (Line(
     points={{12,-16},{24,-16},{24,0.65},{41.9,0.65}},
     color={127,0,0},
     thickness=0.5));
    connect(flowMeasure.
                     q_out,resistor. q_in)
   annotation (Line(
     points={{-16,-16},{-8,-16}},
     color={127,0,0},
     thickness=0.5));
    connect(pCO2.referenceFluidPort,lungs. q_in[3]) annotation (Line(
        points={{24,-32.2},{24,-1.3},{41.9,-1.3},{41.9,-0.65}},
        color={127,0,0},
        thickness=0.5));
    connect(pO2.referenceFluidPort,lungs. q_in[4]) annotation (Line(
        points={{62,-30.2},{62,2},{60,2},{60,1.7333},{41.9,1.7333},{41.9,-1.95}},
        color={127,0,0},
        thickness=0.5));
    connect(lungs.substances[Air.S.CO2],pCO2. port_a) annotation (Line(points={{32,0},{
            26,0},{26,-26},{38,-26},{38,-42},{34,-42}},color={158,66,200}));
    connect(lungs.substances[Air.S.O2],pO2. port_a) annotation (Line(points={{32,0},{
            26,0},{26,-26},{38,-26},{38,-40},{52,-40}},color={158,66,200}));
    connect(volumeInflowSource.q_out, flowMeasure.q_in) annotation (Line(
        points={{-50,-80},{-36,-80},{-36,-16}},
        color={127,0,0},
        thickness=0.5));
    connect(idealValve.q_out, environment.y) annotation (Line(
        points={{-64,50},{-72,50}},
        color={127,0,0},
        thickness=0.5));
    connect(flowMeasure.q_in, expiration.q_in) annotation (Line(
        points={{-36,-16},{-36,12}},
        color={127,0,0},
        thickness=0.5));
    connect(expiration.q_out, idealValve.q_in) annotation (Line(
        points={{-36,32},{-36,50},{-44,50}},
        color={127,0,0},
        thickness=0.5));
    connect(lungs.fluidVolume, ventilatorSCMV.volume) annotation (Line(points={{52,
            -8},{54,-8},{54,-56},{-4,-56},{-4,-52},{-60.4,-52}}, color={0,0,127}));
    connect(ventilatorSCMV.volumeflowrate, volumeInflowSource.solutionFlow)
      annotation (Line(points={{-74,-60.6},{-74,-66},{-60,-66},{-60,-73}}, color={
            0,0,127}));
    connect(frequency.y, ventilatorSCMV.frequency) annotation (Line(points={{-55,-30},
            {-50,-30},{-50,-38},{-74.2,-38},{-74.2,-46}}, color={0,0,127}));
    connect(product1.u2, ventilatorSCMV.outflowopen) annotation (Line(points={{-65,
            20},{-77.7,20},{-77.7,-52.1}}, color={0,0,127}));
    connect(expirationConductance.y, product1.u1) annotation (Line(points={{-83,28},
            {-76,28},{-76,26},{-65,26}}, color={0,0,127}));
    connect(product1.y, expiration.cond) annotation (Line(points={{-53.5,23},{-50,
            23},{-50,22},{-42,22}}, color={0,0,127}));
    annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
          coordinateSystem(preserveAspectRatio=false)));
  end VentilatorVcontrolled;

  model VolumeController
    import Modelica.Units.SI.*;
    parameter Volume peakvolume = 0.0005; //peak volume
    parameter Real Iratio = 1 "I in I:E ratio";
    parameter Real Eratio = 2 "E in I:E ratio";
    parameter Real pause = 0 "fraction of RC pause"; //0.01 - 0.75
    parameter Physiolibrary.Types.VolumeFlowRate maxflowrate = 1; //technical limit of ventilator
    parameter Boolean connected = true;

    Physiolibrary.Types.RealIO.VolumeInput volume annotation (Placement(
          transformation(extent={{80,-18},{120,22}}), iconTransformation(
          extent={{-20,-20},{20,20}},
          rotation=180,
          origin={76,0}))); //measuredvolume
    Physiolibrary.Types.RealIO.VolumeFlowRateOutput volumeflowrate annotation (
        Placement(transformation(extent={{-60,-76},{-40,-56}}),
          iconTransformation(
          extent={{-20,-20},{20,20}},
          rotation=270,
          origin={-60,-86})));
    Physiolibrary.Types.RealIO.FrequencyInput frequency annotation (Placement(
          transformation(extent={{-72,54},{-32,94}}), iconTransformation(
          extent={{-20,-20},{20,20}},
          rotation=270,
          origin={-62,60})));
    Modelica.Blocks.Interfaces.RealOutput outflowopen annotation (Placement(
          transformation(extent={{-88,-62},{-68,-42}}), iconTransformation(
          extent={{-17,-17},{17,17}},
          rotation=180,
          origin={-97,-1})));

      discrete Time T0 "beginning of respiratory cycle";
      Boolean b(start=false);

      discrete Time TE "duration of expiration"; //HP
      discrete Time TP "duration of pause";
      discrete Time TI "duration of inspiration";
      discrete Time RC "duration of respiratory cycle";
      discrete Physiolibrary.Types.VolumeFlowRate inspiratoryflow;

      //parameter Frequency HR=1.2;

      Time tr "relative time in respiratory cycle"; //tc

      //parameter Time TD1=0.07 "relative time of start of systole";
      //discrete Time TD2 "relative time of end of systole";
      //parameter MassFlowRate QP=0.424 "peak mass flowrate";
  initial equation
        T0 = 0 "set beginning of respiratory cycle";
        RC = 1/frequency "update length of respiratory cycle";
        TP = RC * max(min(0.5, pause),0) "compute pause time";
        TI = (RC - TP)* Iratio/(Iratio+Eratio) "compute inspiration duration";
        TE = (RC - TP)* Eratio/(Iratio+Eratio) "compute start of exp phase";
        inspiratoryflow = peakvolume / TI "compute flowrate needed to achieve volume";
        //TD2 = TD1 + (2/5)/HR "compute end time of systole";
  equation
      b = time - pre(T0) >= pre(RC) "true if new respiratory cycle begins";
      when {b} then
        //update everything in new respiration cycle
        T0 = time "set beginning of cardiac cycle";
        //the rest same as initial equation
        RC = 1/frequency "update length of respiratory cycle";
        TP = RC * pause "compute pause time";
        TI = (RC - TP)* Iratio/(Iratio+Eratio) "compute inspiration duration";
        TE = (RC - TP)* Eratio/(Iratio+Eratio) "compute start of exp phase";
        inspiratoryflow = peakvolume / TI "compute flowrate needed to achieve volume";
      end when;
      tr = time - T0 "relative time in carciac cycle";
      if connected then
      volumeflowrate =
        if tr < TI then inspiratoryflow
        else 0;
      outflowopen =
        if tr < (TI+TP) then 0
        else 1;
      else
        volumeflowrate = 0;
        outflowopen = 1;
      end if;

    annotation (Icon(coordinateSystem(preserveAspectRatio=false), graphics={
            Rectangle(
            extent={{-80,60},{80,-66}},
            lineColor={28,108,200},
            fillColor={238,46,47},
            fillPattern=FillPattern.Solid), Text(
            extent={{-218,-64},{416,-126}},
            textColor={28,108,200},
            textString="%name")}),            Diagram(coordinateSystem(
            preserveAspectRatio=false)),
      experiment(
        StopTime=90,
        Tolerance=1e-07,
        __Dymola_Algorithm="Dassl"));
  end VolumeController;

  model VolumeControllerTest
    VolumeController volumeController
      annotation (Placement(transformation(extent={{-14,-10},{6,10}})));
    Physiolibrary.Types.Constants.FrequencyConst
                                   frequency(k=0.28333333333333)
   annotation (Placement(transformation(extent={{-28,30},{-20,38}})));
  equation
    connect(frequency.y, volumeController.frequency) annotation (Line(points={{
            -19,34},{-10.2,34},{-10.2,6}}, color={0,0,127}));
    annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
          coordinateSystem(preserveAspectRatio=false)));
  end VolumeControllerTest;

  model ECMOSimNoRegVentilatorVC
    //Typy přenosového media
        replaceable package Blood =
          Physiolibrary.Media.Blood annotation(choicesAllMatching=True);
      replaceable package Air =
          Physiolibrary.Media.Air annotation(choicesAllMatching=True);

    parameter Physiolibrary.Types.Fraction AirO2 = 0.21 "O2 content in inspired air";
    parameter Physiolibrary.Types.Fraction AirCO2 = 0.0003 "CO2 content in inspired air";
    parameter Physiolibrary.Types.Fraction AirH2O = 0.06 "H2O content in inspired air";
    parameter Physiolibrary.Types.Fraction AirN2 = 1-AirO2-AirCO2-AirH2O "N2 content in inspired air";

    // Parametry pacienta
      parameter Real Shunts=0.02;
      parameter Physiolibrary.Types.HydraulicConductance StarlingLeft=
        1.250102626409427e-07*(5/4)                                        "Slope of starling curve [m3/(Pa.s)]";
      parameter Physiolibrary.Types.HydraulicConductance StarlingRight=
        1.250102626409427e-07*(5/4)                                         "Slope of starling curve [m3/(Pa.s)]";
      //parameter Physiolibrary.Types.VolumeFlowRate SF=8.3333333333333e-05
       //                                                         "Systemic blood flow [m3/s]";

      parameter Physiolibrary.Types.Frequency RR=0.28333333333333
                                                       "Respiration rate [s-1]";
      parameter Physiolibrary.Types.Volume TV=0.0005
                                                  "Tidal volume [m3]";
      parameter Physiolibrary.Types.Volume DV=0.00015
                                                   "Dead space volume [m3]";
      parameter Physiolibrary.Types.MolarFlowRate O2BMR=0.00024166666666667
                                                                        " [mol/s]";
      parameter Physiolibrary.Types.MolarFlowRate CO2BMR=0.00019333333333333
                                                                         " [mol/s]";
      parameter Physiolibrary.Types.HydraulicConductance C_shunt=1.250102626409427e-07
        *((Shunts*(1/3)))                          "Conductance of shunt [m3/(Pa.s)]";
      parameter Physiolibrary.Types.HydraulicConductance C_ventilation=
        1.019716212977928e-05*((1/1.5)) "Conductance of ventilation [m3/(Pa.s)]";
      parameter Physiolibrary.Types.HydraulicConductance C_cirkulation=1.250102626409427e-07
        *(1/3*(1 - Shunts))                          "Conductance of circulation [m3/(Pa.s)]";

    // Parametry ECMO

        parameter Real VAV=0   "Distribution of blood to veins and arteries, Values from 0 (100 % Veins) to 1(100 % Arteries";
  //       parameter Physiolibrary.Types.VolumeFlowRate ECMOF=0   "ECMO blood flow [m3/s]";
  //       parameter Physiolibrary.Types.VolumeFlowRate O2Flow=1.6666666666667e-05
  //                                                               "O2 flow in ECMO [m3/s]";
  //       parameter Physiolibrary.Types.VolumeFlowRate AirFlow=1.6666666666667e-05
  //                                                                      "Air flow in ECMO[m3/s]";
        parameter Real RPM=0    "Rotation per minute in ECMO pump";
        parameter Physiolibrary.Types.VolumeFlowRate SWEEP=0 "Air + O2 flow in ECMO[m3/s]";
        parameter Real FiO2=0.5       "Fraction of oxygen in gas";

    parameter Modelica.Units.SI.Volume FunctionalResidualCapacity=0.00231
   "Functional residual capacity";
    parameter Physiolibrary.Types.HydraulicResistance TotalResistance=147099.75
   "Total lungs pathways conductance";
    parameter Physiolibrary.Types.HydraulicCompliance TotalCompliance(displayUnit="ml/mmHg")=
       6.0004926067653e-07                        "Total lungs compliance";
    parameter Modelica.Units.SI.Volume LungsAirVolume_initial=FunctionalResidualCapacity;


    inner Modelica.Fluid.System system(T_ambient=310.15)
      annotation (Placement(transformation(extent={{-214,108},{-194,128}})));
    Physiolibrary.Fluid.Components.Conductor shunt(redeclare package Medium =
          Blood, Conductance(displayUnit="l/(cmH2O.s)") = C_shunt)
               annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-54,12})));
    Lungs lungs1(
      redeclare package Blood = Blood,
      redeclare package Air = Air,
      AirO2=AirO2,
      AirCO2=AirCO2,
      AirH2O=AirH2O,
      AirN2=AirN2,
      RR=RR,
      TV=TV,
      DV=DV,
      C_ventilation=C_ventilation,
      C_cirkulation=C_cirkulation,
      Shunts=Shunts) annotation (Placement(transformation(rotation=0, extent={{-218,
              -10},{130,180}})));
    Body body(
      redeclare package Blood = Blood,
      StarlingLeft=StarlingLeft,
      StarlingRight=StarlingRight,
      O2BMR=O2BMR,
      CO2BMR=CO2BMR) annotation (Placement(transformation(rotation=0, extent={{-192,
              -38},{-6,88}})));
    LungVentilatorSCMV lungVentilatorSCMV(
      redeclare package Air = Air,
      AirO2=AirO2,
      AirCO2=AirCO2,
      AirH2O=AirH2O,
      AirN2=AirN2,
      RR=RR,
      TV=TV,
      FunctionalResidualCapacity=FunctionalResidualCapacity,
      TotalResistance=TotalResistance,
      TotalCompliance=TotalCompliance,
      LungsAirVolume_initial=LungsAirVolume_initial) annotation (Placement(
          transformation(rotation=0, extent={{-82,106},{-12,168}})));
  equation

    connect(body.q_out,lungs1.q_in              [1]) annotation (Line(
        points={{-79.7902,-17.1024},{-76,-17.1024},{-76,-2.17647},{-139.419,
            -2.17647}},
        color={127,0,0},
        thickness=0.5));
    connect(shunt.q_out,lungs1.q_in1    [1]) annotation (Line(
        points={{-44,12},{44.6839,12},{44.6839,49.2353}},
        color={127,0,0},
        thickness=0.5));
    connect(body.q_in,lungs1.q_in1         [2]) annotation (Line(
        points={{-27.6492,-17.7171},{-24,-17.7171},{-24,14},{44.6839,14},{
            44.6839,49.2353}},
        color={127,0,0},
        thickness=0.5));
    connect(lungs1.q_in       [2], shunt.q_in) annotation (Line(
        points={{-139.419,-2.17647},{-76,-2.17647},{-76,12},{-64,12}},
        color={127,0,0},
        thickness=0.5));

    annotation (Icon(coordinateSystem(preserveAspectRatio=false, extent={{-240,-80},
              {220,180}})), Diagram(coordinateSystem(preserveAspectRatio=false,
            extent={{-240,-80},{220,180}})),
      experiment(
        StopTime=90,
        Interval=0.2,
        Tolerance=0.001,
        __Dymola_Algorithm="Cvode"));
  end ECMOSimNoRegVentilatorVC;

  model Lungs
    extends Physiolibrary.Icons.Lungs;
    Physiolibrary.Fluid.Components.ElasticVessel LungsArteries(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.00038,
      Compliance(displayUnit="ml/mmHg") = 3.6002955640592e-08,
      ZeroPressureVolume(displayUnit="l") = 0.0003,
      nPorts=5)
      annotation (Placement(transformation(extent={{-247,-138},{-227,-118}})));
    Physiolibrary.Fluid.Components.ElasticVessel LungsVeins(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.0004,
      Compliance(displayUnit="ml/mmHg") = 7.5006157584566e-08,
      ZeroPressureVolume(displayUnit="l") = 0.0004,
      nPorts=5)
      annotation (Placement(transformation(extent={{157,-140},{137,-120}})));
    Physiolibrary.Fluid.Components.VolumePump DeadSpace(
      redeclare package Medium = Air,
      useSolutionFlowInput=false,
      SolutionFlow=DV*RR)
      annotation (Placement(transformation(extent={{-69,102},{-49,122}})));
    Physiolibrary.Fluid.Sources.VolumeOutflowSource MinuteVolume(
      useSolutionFlowInput=false,
      SolutionFlow=RR*TV,
      redeclare package Medium = Air) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={131,112})));
    Physiolibrary.Fluid.Components.ElasticVessel Alveoly(
      redeclare package Medium = Air,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.0016,
      Compliance(displayUnit="ml/mmHg") = 6.0004926067653e-07,
      ZeroPressureVolume(displayUnit="l") = 0.0013,
      ExternalPressure(displayUnit="mmHg") = 100791.72488574,
      nPorts=3) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-77,46})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasureAlveols(redeclare
        package Medium =
                 Air)
      annotation (Placement(transformation(extent={{-33,58},{-13,78}})));
    Physiolibrary.Fluid.Components.Conductor conductor3(redeclare package
        Medium =
          Physiolibrary.Media.Air, Conductance(displayUnit="l/(cmH2O.s)")=
        C_ventilation) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-151,68})));
    Chemical.Components.GasSolubility O2(KC=1e-4)
      annotation (Placement(transformation(extent={{-105,-6},{-85,14}})));
    Chemical.Components.GasSolubility CO2(KC=1e-4)
      annotation (Placement(transformation(extent={{-61,-2},{-41,18}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2Lungs(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Physiolibrary.Media.Blood)
      annotation (Placement(transformation(extent={{-159,-8},{-139,12}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pCO2Lungs(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Physiolibrary.Media.Blood)
      annotation (Placement(transformation(
          extent={{10,-10},{-10,10}},
          rotation=0,
          origin={-1,4})));
    Physiolibrary.Fluid.Components.Conductor conductor4(redeclare package
        Medium =
          Blood, Conductance=C_cirkulation*(8/7))
      annotation (Placement(transformation(extent={{-141,-110},{-121,-90}})));
    Physiolibrary.Fluid.Components.Conductor conductor5(redeclare package
        Medium =
          Blood, Conductance=C_cirkulation*8)
      annotation (Placement(transformation(extent={{29,-106},{49,-86}})));
    Physiolibrary.Fluid.Components.ElasticVessel LungCapilars(
      redeclare package Medium = Physiolibrary.Media.Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.00015,
      Compliance(displayUnit="ml/mmHg") = 3.0002463033826e-08,
      ZeroPressureVolume(displayUnit="l") = 0.0001,
      nPorts=4) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=270,
          origin={-63,-40})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureCapilarsLungs(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{23,-34},{43,-14}})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureAlveols(redeclare
        package Medium =
                 Air)
      annotation (Placement(transformation(extent={{93,38},{113,58}})));
    Physiolibrary.Fluid.Components.Conductor conductor6(redeclare package
        Medium =
          Physiolibrary.Media.Air, Conductance(displayUnit="l/(cmH2O.s)")=
        C_ventilation) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={37,68})));
    Physiolibrary.Fluid.Sensors.pH pH_LungA(redeclare package Medium =
          Physiolibrary.Media.Blood)
      annotation (Placement(transformation(extent={{-285,-138},{-265,-118}})));
    Physiolibrary.Fluid.Sensors.pH pH_LungV(redeclare package Medium =
          Physiolibrary.Media.Blood)
      annotation (Placement(transformation(extent={{221,-140},{201,-120}})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureLungsArteries(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{-253,-76},{-233,-56}})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasureAlveols1(redeclare
        package Medium =
                 Physiolibrary.Media.Air)
      annotation (Placement(transformation(extent={{75,102},{95,122}})));
    Physiolibrary.Fluid.Sources.PressureSource ventilatorGas(
      redeclare package Medium = Air,
      use_concentration_start=true,
      concentration_start={AirO2,AirCO2,AirH2O,AirN2}) "External environment"
      annotation (Placement(transformation(extent={{-277,68},{-203,134}})));
        replaceable package Blood =
          Physiolibrary.Media.Blood annotation(choicesAllMatching=True);
      replaceable package Air =
          Physiolibrary.Media.Air annotation(choicesAllMatching=True);
    parameter Physiolibrary.Types.Fraction AirO2 = 0.21 "O2 content in inspired air";
    parameter Physiolibrary.Types.Fraction AirCO2 = 0.0003 "CO2 content in inspired air";
    parameter Physiolibrary.Types.Fraction AirH2O = 0.06 "H2O content in inspired air";
    parameter Physiolibrary.Types.Fraction AirN2 = 1-AirO2-AirCO2-AirH2O "N2 content in inspired air";
      parameter Physiolibrary.Types.Frequency RR=0.28333333333333
                                                       "Respiration rate [s-1]";
      parameter Physiolibrary.Types.Volume TV=0.0005
                                                  "Tidal volume [m3]";
      parameter Physiolibrary.Types.Volume DV=0.00015
                                                   "Dead space volume [m3]";
      parameter Physiolibrary.Types.HydraulicConductance C_ventilation=
        1.019716212977928e-05*((1/1.5)) "Conductance of ventilation [m3/(Pa.s)]";
      parameter Physiolibrary.Types.HydraulicConductance C_cirkulation=1.250102626409427e-07
        *(1/3*(1 - Shunts))                          "Conductance of circulation [m3/(Pa.s)]";
      parameter Real Shunts=0.02;
    Physiolibrary.Fluid.Interfaces.FluidPorts_a q_in(redeclare package Medium
        = Blood) annotation (Placement(transformation(rotation=0, extent={{-209.5,
              -163},{-150.5,-129}}),
                             iconTransformation(extent={{-209.5,-163},{-150.5,
              -129}})));
    Physiolibrary.Fluid.Interfaces.FluidPorts_a q_in1(redeclare package Medium
        = Blood) annotation (Placement(transformation(rotation=0, extent={{118.5,
              -71},{177.5,-37}}),
                            iconTransformation(extent={{118.5,-71},{177.5,-37}})));
  equation
    connect(flowMeasureAlveols.q_in,Alveoly. q_in[1]) annotation (Line(
        points={{-33,68},{-75,68},{-75,45.9},{-78.7333,45.9}},
        color={127,0,0},
        thickness=0.5));
    connect(Alveoly.substances[1],O2. gas_port) annotation (Line(points={{-77,36},
            {-77,22},{-85,22},{-85,20},{-99,20},{-99,14},{-95,14}},
                                             color={158,66,200}));
    connect(Alveoly.substances[2],CO2. gas_port) annotation (Line(points={{-77,36},
            {-77,18},{-51,18}},            color={158,66,200}));

    connect(O2.liquid_port,LungCapilars. substances[2]) annotation (Line(points={{-95,-6},
            {-95,-20},{-63,-20},{-63,-30}},               color={158,66,200}));
    connect(CO2.liquid_port,LungCapilars. substances[3]) annotation (Line(
          points={{-51,-2},{-51,-20},{-63,-20},{-63,-30}},      color={158,66,
            200}));
    connect(pO2Lungs.port,LungCapilars. q_in[2]) annotation (Line(
        points={{-149,-8},{-149,-74},{-65,-74},{-65,-60},{-62.35,-60},{-62.35,-39.9}},
        color={127,0,0},
        thickness=0.5));
    connect(pCO2Lungs.port,LungCapilars. q_in[2]) annotation (
        Line(
        points={{-1,-6},{-1,-76},{-65,-76},{-65,-60},{-62.35,-60},{-62.35,-39.9}},
        color={127,0,0},
        thickness=0.5));
    connect(O2.liquid_port,pO2Lungs. port_a) annotation (Line(points={{-95,-6},{-95,
            -20},{-119,-20},{-119,2},{-139,2}},           color={158,66,200}));
    connect(CO2.liquid_port,pCO2Lungs. port_a) annotation (Line(points={{-51,-2},{
            -51,-20},{-25,-20},{-25,4},{-11,4}},                          color=
           {158,66,200}));
    connect(conductor4.q_out,LungCapilars. q_in[3]) annotation (Line(
        points={{-121,-100},{-63,-100},{-63,-60},{-63.65,-60},{-63.65,-39.9}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor5.q_in,LungCapilars. q_in[4]) annotation (Line(
        points={{29,-96},{-65,-96},{-65,-58},{-64.95,-58},{-64.95,-39.9}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor4.q_in,LungsArteries. q_in[3]) annotation (Line(
        points={{-141,-100},{-237,-100},{-237,-130},{-237.1,-130},{-237.1,-128}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor5.q_out,LungsVeins. q_in[4]) annotation (Line(
        points={{49,-96},{147,-96},{147,-130},{147.1,-130},{147.1,-131.04}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor3.q_in,DeadSpace. q_in) annotation (Line(
        points={{-161,68},{-187,68},{-187,112},{-69,112}},
        color={127,0,0},
        thickness=0.5));
    connect(pressureAlveols.port,Alveoly. q_in[2]) annotation (Line(
        points={{103,38},{-77,38},{-77,45.9}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor6.q_in,flowMeasureAlveols. q_out) annotation (Line(
        points={{27,68},{-13,68}},
        color={127,0,0},
        thickness=0.5));
    connect(pH_LungA.port,LungsArteries. q_in[4]) annotation (Line(
        points={{-275,-138},{-275,-162},{-237,-162},{-237,-146},{-237.1,-146},{-237.1,
            -129.04}},
        color={127,0,0},
        thickness=0.5));
    connect(pH_LungV.port,LungsVeins. q_in[5]) annotation (Line(
        points={{211,-140},{211,-156},{147,-156},{147,-146},{147.1,-146},{147.1,-132.08}},
        color={127,0,0},
        thickness=0.5));
    connect(pH_LungA.port_a,LungsArteries. substances[13])
      annotation (Line(points={{-265,-128},{-247,-128}},
                                                       color={158,66,200}));
    connect(pH_LungV.port_a,LungsVeins. substances[13])
      annotation (Line(points={{201,-130},{157,-130}},
                                                   color={158,66,200}));
    connect(conductor3.q_out,Alveoly. q_in[3]) annotation (Line(
        points={{-141,68},{-75.2667,68},{-75.2667,45.9}},
        color={127,0,0},
        thickness=0.5));
    connect(pressureLungsArteries.port,LungsArteries. q_in[5]) annotation (Line(
        points={{-243,-76},{-243,-130.08},{-237.1,-130.08}},
        color={127,0,0},
        thickness=0.5));
    connect(flowMeasureAlveols1.q_out,MinuteVolume. q_in) annotation (Line(
        points={{95,112},{121,112}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor6.q_out,flowMeasureAlveols1. q_in) annotation (Line(
        points={{47,68},{65,68},{65,112},{75,112}},
        color={127,0,0},
        thickness=0.5));
    connect(DeadSpace.q_out,flowMeasureAlveols1. q_in) annotation (Line(
        points={{-49,112},{75,112}},
        color={127,0,0},
        thickness=0.5));
    connect(ventilatorGas.y,DeadSpace. q_in) annotation (Line(
        points={{-203,101},{-185,101},{-185,112},{-69,112}},
        color={127,0,0},
        thickness=0.5));
    connect(q_in, LungsArteries.q_in) annotation (Line(points={{-180,-146},{
            -236,-146},{-236,-132},{-237.1,-132},{-237.1,-128}},
                           color={127,0,0}));
    connect(q_in1, LungsVeins.q_in) annotation (Line(points={{148,-54},{148,-96},
            {146,-96},{146,-126},{147.1,-126},{147.1,-130}},
                                        color={127,0,0}));
    annotation (Diagram(coordinateSystem(extent={{-320,-160},{300,180}}),
          graphics={
          Rectangle(
            extent={{-289,164},{285,-160}},
            lineColor={28,108,200},
            lineThickness=0.5),
          Text(
            extent={{141,158},{231,118}},
            textColor={28,108,200},
            fontSize=10,
            textString="Lungs")}), Icon(coordinateSystem(extent={{-320,-160},{300,
              180}})));
  end Lungs;

  model Body
    extends Physiolibrary.Icons.SystemicCirculation;
    Physiolibrary.Fluid.Components.Resistor resistor1(redeclare package Medium =
          Blood, Resistance=7999343.2449*((5.5*20)/8)) annotation (Placement(
          transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-164,210})));
    Physiolibrary.Fluid.Components.ElasticVessel Arteries(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.00085,
      Compliance(displayUnit="ml/mmHg") = 2.6627185942521e-08,
      ZeroPressureVolume(displayUnit="l") = 0.00045,
      nPorts=6)
      annotation (Placement(transformation(extent={{-120,204},{-140,226}})));
    Physiolibrary.Fluid.Components.ElasticVessel Veins(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.00325,
      Compliance(displayUnit="ml/mmHg") = 6.1880080007267e-07,
      ZeroPressureVolume(displayUnit="l") = 0.00295,
      nPorts=6)
      annotation (Placement(transformation(extent={{-270,202},{-250,222}})));
    Physiolibrary.Fluid.Components.Resistor resistor2(redeclare package Medium =
          Blood, Resistance=7999343.2449*(20/8)) annotation (Placement(
          transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-224,210})));
    Physiolibrary.Fluid.Components.ElasticVessel Tissue(
      redeclare package Medium = Physiolibrary.Media.Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.0003,
      useThermalPort=true,
      Compliance(displayUnit="ml/mmHg") = 3.0002463033826e-08,
      ZeroPressureVolume(displayUnit="l") = 0.0002,
      nPorts=5) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-194,126})));
    Physiolibrary.Fluid.Sensors.PressureMeasure PressureCapilarsTissue(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{-266,136},{-286,156}})));
    Chemical.Sources.SubstanceInflowT CO2_in(
      SubstanceFlow(displayUnit="mmol/min") = CO2BMR,
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas()) annotation (
        Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-124,74})));
    Chemical.Sources.SubstanceOutflow O2_left(useSubstanceFlowInput=false,
        SubstanceFlow(displayUnit="mmol/min") = O2BMR) annotation (Placement(
          transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-270,74})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2_tissue(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Physiolibrary.Media.Blood)
      annotation (Placement(transformation(extent={{-280,114},{-260,94}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pCO2_tissue(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Physiolibrary.Media.Blood)
      annotation (Placement(transformation(
          extent={{10,10},{-10,-10}},
          rotation=0,
          origin={-122,104})));
    Physiolibrary.Fluid.Sensors.PartialPressure pCO2Arteries(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Physiolibrary.Media.Blood)
      annotation (Placement(transformation(
          extent={{-10,10},{10,-10}},
          rotation=180,
          origin={-78,230})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2Arteries(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Physiolibrary.Media.Blood)
      annotation (Placement(transformation(
          extent={{-10,10},{10,-10}},
          rotation=180,
          origin={-80,184})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureArterial(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{-128,146},{-108,166}})));
    Physiolibrary.Fluid.Sensors.PressureMeasure PressureVeins(redeclare package
        Medium = Blood)
      annotation (Placement(transformation(extent={{-378,158},{-398,178}})));
    Physiolibrary.Thermal.Sources.UnlimitedHeat BodyHeat(T=310.15)
      annotation (Placement(transformation(extent={{-234,24},{-214,44}})));
    Physiolibrary.Thermal.Components.Conductor conductor(Conductance=69780)
      annotation (Placement(transformation(extent={{-196,24},{-176,44}})));
    Physiolibrary.Fluid.Components.VolumePump heartRight(
      redeclare package Medium = Blood,
      useSolutionFlowInput=true,
      SolutionFlow(displayUnit="l/min")) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-372,252})));
    Physiolibrary.Fluid.Components.VolumePump heartLeft(
      redeclare package Medium = Blood,
      useSolutionFlowInput=true,
      SolutionFlow(displayUnit="l/min")) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=270,
          origin={8,256})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasureCardiacOutput(redeclare
        package Medium = Blood) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=270,
          origin={8,224})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2Veins(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Physiolibrary.Media.Blood)
      annotation (Placement(transformation(extent={{-342,200},{-322,180}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pCO2Veins(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Physiolibrary.Media.Blood)
      annotation (Placement(transformation(
          extent={{-10,10},{10,-10}},
          rotation=0,
          origin={-324,236})));
    Physiolibrary.Types.Constants.HydraulicConductanceConst StarlingSlopeRight(k=
          StarlingRight)
      annotation (Placement(transformation(extent={{-442,254},{-434,262}})));
    Modelica.Blocks.Math.Product product2 annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-406,252})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureLungsVein(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{26,366},{46,386}})));
    Physiolibrary.Types.Constants.HydraulicConductanceConst StarlingSlopeLeft(k=
          StarlingLeft)
      annotation (Placement(transformation(extent={{52,380},{60,388}})));
    Modelica.Blocks.Math.Product product1 annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={102,378})));
    Physiolibrary.Fluid.Sensors.pH pH_Arteries(redeclare package Medium =
          Physiolibrary.Media.Blood)
      annotation (Placement(transformation(extent={{-194,232},{-174,252}})));
    Physiolibrary.Fluid.Sensors.pH pH_Veins(redeclare package Medium =
          Physiolibrary.Media.Blood)
      annotation (Placement(transformation(extent={{-222,236},{-242,256}})));
        replaceable package Blood =
          Physiolibrary.Media.Blood annotation(choicesAllMatching=True);
      parameter Physiolibrary.Types.HydraulicConductance StarlingLeft=
        1.250102626409427e-07*(5/4)                                        "Slope of starling curve [m3/(Pa.s)]";
      parameter Physiolibrary.Types.HydraulicConductance StarlingRight=
        1.250102626409427e-07*(5/4)                                         "Slope of starling curve [m3/(Pa.s)]";
      parameter Physiolibrary.Types.MolarFlowRate O2BMR=0.00024166666666667
                                                                        " [mol/s]";
      parameter Physiolibrary.Types.MolarFlowRate CO2BMR=0.00019333333333333
                                                                         " [mol/s]";
    Physiolibrary.Fluid.Interfaces.FluidPort_a q_in(redeclare package Medium =
          Blood) annotation (Placement(transformation(rotation=0, extent={{58.5,45.5},
              {119.5,86.5}}), iconTransformation(extent={{58.5,45.5},{119.5,86.5}})));
    Physiolibrary.Fluid.Interfaces.FluidPort_b q_out(redeclare package Medium =
          Blood) annotation (Placement(transformation(rotation=0, extent={{-112.5,
              47.5},{-51.5,88.5}}), iconTransformation(extent={{-112.5,47.5},{-51.5,
              88.5}})));
  equation
    connect(resistor1.q_in,Arteries. q_in[1]) annotation (Line(
        points={{-154,210},{-129.9,210},{-129.9,217.383}},
        color={127,0,0},
        thickness=0.5));
    connect(resistor2.q_in,Tissue. q_in[1]) annotation (Line(
        points={{-214,210},{-214,125.9},{-196.08,125.9}},
        color={127,0,0},
        thickness=0.5));
    connect(resistor1.q_out,Tissue. q_in[2]) annotation (Line(
        points={{-174,210},{-174,125.9},{-195.04,125.9}},
        color={127,0,0},
        thickness=0.5));
    connect(PressureCapilarsTissue.port,Tissue. q_in[3]) annotation (Line(
        points={{-276,136},{-194,136},{-194,125.9}},
        color={127,0,0},
        thickness=0.5));
    connect(O2_left.port_a,Tissue. substances[2]) annotation (Line(points={{-260,74},
            {-194,74},{-194,116}},    color={158,66,200}));
    connect(O2_left.port_a,pO2_tissue. port_a) annotation (Line(points={{-260,74},
            {-238,74},{-238,104},{-260,104}},     color={158,66,200}));
    connect(pO2_tissue.port,Tissue. q_in[4]) annotation (Line(
        points={{-270,114},{-270,126},{-216,126},{-216,125.9},{-192.96,125.9}},
        color={127,0,0},
        thickness=0.5));
    connect(pCO2_tissue.port,Tissue. q_in[5]) annotation (Line(
        points={{-122,114},{-122,125.9},{-191.92,125.9}},
        color={127,0,0},
        thickness=0.5));
    connect(CO2_in.port_b,Tissue. substances[3]) annotation (Line(points={{-134,74},
            {-194,74},{-194,116}},    color={158,66,200}));
    connect(CO2_in.port_b,pCO2_tissue. port_a) annotation (Line(points={{-134,74},
            {-158,74},{-158,104},{-132,104}},     color={158,66,200}));
    connect(resistor2.q_out,Veins. q_in[1]) annotation (Line(
        points={{-234,210},{-260.1,210},{-260.1,214.167}},
        color={127,0,0},
        thickness=0.5));
    connect(pO2Arteries.port_a,Arteries. substances[2]) annotation (Line(points={{-90,184},
            {-120,184},{-120,215}},      color={158,66,200}));
    connect(pO2Arteries.port,Arteries. q_in[2]) annotation (Line(
        points={{-80,174},{-129.9,174},{-129.9,216.43}},
        color={127,0,0},
        thickness=0.5));
    connect(pCO2Arteries.port,Arteries. q_in[3]) annotation (Line(
        points={{-78,220},{-78,215.477},{-129.9,215.477}},
        color={127,0,0},
        thickness=0.5));
    connect(pCO2Arteries.port_a,Arteries. substances[3])
      annotation (Line(points={{-88,230},{-120,230},{-120,215}},
                                                           color={158,66,200}));
    connect(BodyHeat.port,conductor. q_in) annotation (Line(
        points={{-214,34},{-196,34}},
        color={191,0,0},
        thickness=0.5));
    connect(conductor.q_out,Tissue. heatPort) annotation (Line(
        points={{-176,34},{-174,34},{-174,116},{-184,116},{-184,120}},
        color={191,0,0},
        thickness=0.5));
    connect(PressureVeins.port,Veins. q_in[2]) annotation (Line(
        points={{-388,158},{-254,158},{-254,213.3},{-260.1,213.3}},
        color={127,0,0},
        thickness=0.5));
    connect(flowMeasureCardiacOutput.q_out,Arteries. q_in[4]) annotation (Line(
        points={{8,214},{8,214.523},{-129.9,214.523}},
        color={127,0,0},
        thickness=0.5));
    connect(heartRight.q_in,Veins. q_in[3]) annotation (Line(
        points={{-372,242},{-372,212.433},{-260.1,212.433}},
        color={127,0,0},
        thickness=0.5));
    connect(heartLeft.q_out,flowMeasureCardiacOutput. q_in) annotation (Line(
        points={{8,246},{8,234}},
        color={127,0,0},
        thickness=0.5));
    connect(StarlingSlopeRight.y,product2. u1)
      annotation (Line(points={{-433,258},{-418,258}},
                                                     color={0,0,127}));
    connect(PressureVeins.pressure,product2. u2) annotation (Line(points={{-394,164},
            {-418,164},{-418,246}},                                color={0,0,127}));
    connect(product2.y,heartRight. solutionFlow) annotation (Line(points={{-395,252},
            {-390,252},{-390,254},{-379,254},{-379,252}},
                                                      color={0,0,127}));
    connect(pressureLungsVein.pressure,product1. u2)
      annotation (Line(points={{42,372},{90,372}},   color={0,0,127}));
    connect(product1.y,heartLeft. solutionFlow) annotation (Line(points={{113,378},
            {122,378},{122,256},{15,256}},color={0,0,127}));
    connect(pressureArterial.port,Arteries. q_in[5]) annotation (Line(
        points={{-118,146},{-130,146},{-130,213.57},{-129.9,213.57}},
        color={127,0,0},
        thickness=0.5));
    connect(pH_Arteries.port,Arteries. q_in[6]) annotation (Line(
        points={{-184,232},{-184,198},{-129.9,198},{-129.9,212.617}},
        color={127,0,0},
        thickness=0.5));
    connect(pCO2Veins.port,Veins. q_in[4]) annotation (Line(
        points={{-324,246},{-276,246},{-276,211.567},{-260.1,211.567}},
        color={127,0,0},
        thickness=0.5));
    connect(pO2Veins.port,Veins. q_in[5]) annotation (Line(
        points={{-332,200},{-324,200},{-324,204},{-260.1,204},{-260.1,210.7}},
        color={127,0,0},
        thickness=0.5));
    connect(pO2Veins.port_a,Veins. substances[2]) annotation (Line(points={{-322,190},
            {-308,190},{-308,192},{-270,192},{-270,212}},     color={158,66,200}));
    connect(pCO2Veins.port_a,Veins. substances[3]) annotation (Line(points={{-314,
            236},{-298,236},{-298,230},{-270,230},{-270,212}},      color={158,66,
            200}));
    connect(pH_Arteries.port_a,Arteries. substances[13]) annotation (Line(
          points={{-174,242},{-120,242},{-120,215}},
          color={158,66,200}));
    connect(pH_Veins.port,Veins. q_in[6]) annotation (Line(
        points={{-232,236},{-232,228},{-260.1,228},{-260.1,209.833}},
        color={127,0,0},
        thickness=0.5));
    connect(pH_Veins.port_a,Veins. substances[13]) annotation (Line(points={{-242,
            246},{-270,246},{-270,212}},                                 color=
            {158,66,200}));
    connect(StarlingSlopeLeft.y,product1. u1)
      annotation (Line(points={{61,384},{90,384}}, color={0,0,127}));
    connect(q_in, heartLeft.q_in) annotation (Line(points={{89,66},{89,338},{8,338},
            {8,266}},      color={127,0,0}));
    connect(q_out, heartRight.q_out) annotation (Line(points={{-82,68},{-82,336},{
            -372,336},{-372,262}},  color={127,0,0}));
    connect(pressureLungsVein.port, q_in) annotation (Line(points={{36,366},{28,366},
            {28,362},{89,362},{89,66}}, color={0,127,255}));
    annotation (Diagram(coordinateSystem(extent={{-450,0},{160,410}}), graphics={
          Rectangle(
            extent={{-424,400},{150,4}},
            lineColor={238,46,47},
            lineThickness=0.5),
          Text(
            extent={{78,388},{136,340}},
            textColor={238,46,47},
            fontSize=10,
            textString="Body")}), Icon(coordinateSystem(extent={{-450,0},{160,410}})));
  end Body;

  model LungVentilatorSCMV
    extends Physiolibrary.Icons.StatusNotBreathing;
    Physiolibrary.Fluid.Components.ElasticVessel lungs(
      redeclare package Medium = Air,
      useSubstances=true,
      use_mass_start=false,
      volume_start=LungsAirVolume_initial,
      use_concentration_start=false,
      massFractions_start=Air.reference_X,
      EnthalpyNotUsed=false,
      ZeroPressureVolume=FunctionalResidualCapacity,
      Compliance=TotalCompliance,
      useExternalPressureInput=false,
      nPorts=2) "Lungs"
      annotation (Placement(transformation(extent={{29,14},{49,34}})));
    Physiolibrary.Fluid.Sensors.PressureMeasure lungsPressureMeasure(redeclare
        package Medium = Air) "Lungs pressure"
      annotation (Placement(transformation(extent={{63,22},{83,42}})));
    Physiolibrary.Fluid.Sources.PressureSource environment(redeclare package
        Medium = Air) "External environment"
      annotation (Placement(transformation(extent={{-95,64},{-75,84}})));
    Physiolibrary.Fluid.Components.Resistor resistor(
      redeclare package Medium = Air,
      EnthalpyNotUsed=false,
      Resistance=TotalResistance)
      annotation (Placement(transformation(extent={{-11,-2},{9,18}})));
    Physiolibrary.Types.Constants.FrequencyConst frequency(k=RR)
      annotation (Placement(transformation(extent={{-111,-20},{-103,-12}})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasure(redeclare package Medium =
          Physiolibrary.Media.Air)
      annotation (Placement(transformation(extent={{-39,-2},{-19,18}})));
    Physiolibrary.Fluid.Components.IdealValve idealValve(redeclare package Medium =
          Air) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-57,74})));
    Physiolibrary.Fluid.Components.Conductor expiration(redeclare package Medium =
          Air, useConductanceInput=true) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-39,46})));
    VolumeController ventilatorSCMV(peakvolume=TV, maxflowrate(displayUnit="l/s"))
      annotation (Placement(transformation(extent={{-81,-38},{-61,-18}})));
    Physiolibrary.Types.Constants.HydraulicConductanceConst expirationConductance(
        k(displayUnit="m3/(Pa.s)") = 1e-5)
      annotation (Placement(transformation(extent={{-95,48},{-87,56}})));
    Modelica.Blocks.Math.Product product5
      annotation (Placement(transformation(extent={{-67,42},{-57,52}})));
    Physiolibrary.Fluid.Components.VolumePump volumePump(redeclare package Medium =
          Physiolibrary.Media.Air, useSolutionFlowInput=true)
      annotation (Placement(transformation(extent={{-51,-70},{-31,-50}})));
    Physiolibrary.Fluid.Sources.PressureSource ventilatorGas1(
      redeclare package Medium = Air,
      use_concentration_start=false,
      concentration_start={AirO2,AirCO2,AirH2O,AirN2}) "External environment"
      annotation (Placement(transformation(extent={{-123,-78},{-87,-44}})));
      replaceable package Air =
          Physiolibrary.Media.Air annotation(choicesAllMatching=True);
    parameter Physiolibrary.Types.Fraction AirO2 = 0.21 "O2 content in inspired air";
    parameter Physiolibrary.Types.Fraction AirCO2 = 0.0003 "CO2 content in inspired air";
    parameter Physiolibrary.Types.Fraction AirH2O = 0.06 "H2O content in inspired air";
    parameter Physiolibrary.Types.Fraction AirN2 = 1-AirO2-AirCO2-AirH2O "N2 content in inspired air";
      parameter Physiolibrary.Types.Frequency RR=0.28333333333333
                                                       "Respiration rate [s-1]";
      parameter Physiolibrary.Types.Volume TV=0.0005
                                                  "Tidal volume [m3]";
    parameter Modelica.Units.SI.Volume FunctionalResidualCapacity=0.00231
   "Functional residual capacity";
    parameter Physiolibrary.Types.HydraulicResistance TotalResistance=147099.75
   "Total lungs pathways conductance";
    parameter Physiolibrary.Types.HydraulicCompliance TotalCompliance(displayUnit="ml/mmHg")=
       6.0004926067653e-07                        "Total lungs compliance";
    parameter Modelica.Units.SI.Volume LungsAirVolume_initial=FunctionalResidualCapacity;
  equation
    connect(lungsPressureMeasure.port,lungs. q_in[1]) annotation (Line(
     points={{73,22},{73,25.3},{38.9,25.3}},
     color={127,0,0},
     thickness=0.5));
    connect(resistor.
              q_out,lungs. q_in[2]) annotation (Line(
     points={{9,8},{21,8},{21,22.7},{38.9,22.7}},
     color={127,0,0},
     thickness=0.5));
    connect(flowMeasure.
                     q_out,resistor. q_in)
   annotation (Line(
     points={{-19,8},{-11,8}},
     color={127,0,0},
     thickness=0.5));
    connect(idealValve.q_out,environment. y) annotation (Line(
        points={{-67,74},{-75,74}},
        color={127,0,0},
        thickness=0.5));
    connect(flowMeasure.q_in,expiration. q_in) annotation (Line(
        points={{-39,8},{-39,36}},
        color={127,0,0},
        thickness=0.5));
    connect(expiration.q_out,idealValve. q_in) annotation (Line(
        points={{-39,56},{-39,74},{-47,74}},
        color={127,0,0},
        thickness=0.5));
    connect(lungs.fluidVolume,ventilatorSCMV. volume) annotation (Line(points={{49,16},
            {51,16},{51,-32},{-7,-32},{-7,-28},{-63.4,-28}},           color={0,0,
            127}));
    connect(frequency.y,ventilatorSCMV. frequency) annotation (Line(points={{-102,
            -16},{-102,-22},{-77.2,-22}},
                                    color={0,0,127}));
    connect(product5.u2,ventilatorSCMV. outflowopen) annotation (Line(points={{-68,44},
            {-80.7,44},{-80.7,-28.1}},       color={0,0,127}));
    connect(expirationConductance.y,product5. u1) annotation (Line(points={{-86,52},
            {-79,52},{-79,50},{-68,50}}, color={0,0,127}));
    connect(product5.y,expiration. cond) annotation (Line(points={{-56.5,47},{-53,
            47},{-53,46},{-45,46}}, color={0,0,127}));
    connect(volumePump.q_out,flowMeasure. q_in) annotation (Line(
        points={{-31,-60},{-29,-60},{-29,-24},{-53,-24},{-53,-8},{-61,-8},{-61,8},
            {-39,8}},
        color={127,0,0},
        thickness=0.5));
    connect(ventilatorSCMV.volumeflowrate,volumePump. solutionFlow) annotation (
        Line(points={{-77,-36.6},{-77,-44},{-41,-44},{-41,-53}},
          color={0,0,127}));
    connect(ventilatorGas1.y,volumePump. q_in) annotation (Line(
        points={{-87,-61},{-93,-61},{-93,-96},{-51,-96},{-51,-60}},
        color={127,0,0},
        thickness=0.5));
    annotation (Diagram(coordinateSystem(extent={{-135,-120},{135,120}}),
          graphics={
          Rectangle(
            extent={{-127,114},{125,-116}},
            lineColor={0,140,72},
            lineThickness=0.5),
          Text(
            extent={{-83,-92},{117,-112}},
            textColor={0,140,72},
            textString="Lung ventilator SCMV
",          fontSize=10)}), Icon(coordinateSystem(extent={{-135,-120},{135,120}})));
  end LungVentilatorSCMV;

  model ECMOSimNoRegVentilatorVCFlat
    //Typy přenosového media
        replaceable package Blood =
          Physiolibrary.Media.BloodBySiggaardAndersen annotation(choicesAllMatching=True);
      replaceable package Air =
          Physiolibrary.Media.Air annotation(choicesAllMatching=True);

    parameter Physiolibrary.Types.Fraction AirO2 = 0.21 "O2 content in inspired air";
    parameter Physiolibrary.Types.Fraction AirCO2 = 0.0003 "CO2 content in inspired air";
    parameter Physiolibrary.Types.Fraction AirH2O = 0.06 "H2O content in inspired air";
    parameter Physiolibrary.Types.Fraction AirN2 = 1-AirO2-AirCO2-AirH2O "N2 content in inspired air";

    // Parametry pacienta
      parameter Real Shunts=0.02;
      parameter Physiolibrary.Types.HydraulicConductance StarlingLeft=
        1.250102626409427e-07*(5/4)                                        "Slope of starling curve [m3/(Pa.s)]";
      parameter Physiolibrary.Types.HydraulicConductance StarlingRight=
        1.250102626409427e-07*(5/4)                                         "Slope of starling curve [m3/(Pa.s)]";
      //parameter Physiolibrary.Types.VolumeFlowRate SF=8.3333333333333e-05
       //                                                         "Systemic blood flow [m3/s]";

      parameter Physiolibrary.Types.Frequency RR=0.28333333333333
                                                       "Respiration rate [s-1]";
      parameter Physiolibrary.Types.Volume TV=0.0005
                                                  "Tidal volume [m3]";
      parameter Physiolibrary.Types.Volume DV=0.00015
                                                   "Dead space volume [m3]";
      parameter Physiolibrary.Types.MolarFlowRate O2BMR=0.00024166666666667
                                                                        " [mol/s]";
      parameter Physiolibrary.Types.MolarFlowRate CO2BMR=0.00019333333333333
                                                                         " [mol/s]";
      parameter Physiolibrary.Types.HydraulicConductance C_shunt=1.250102626409427e-07
        *((Shunts*(1/3)))                          "Conductance of shunt [m3/(Pa.s)]";
      parameter Physiolibrary.Types.HydraulicConductance C_ventilation=
        1.019716212977928e-05*((1/1.5)) "Conductance of ventilation [m3/(Pa.s)]";
      parameter Physiolibrary.Types.HydraulicConductance C_cirkulation=1.250102626409427e-07
        *(1/3*(1 - Shunts))                          "Conductance of circulation [m3/(Pa.s)]";

    // Parametry ECMO

        parameter Real VAV=0   "Distribution of blood to veins and arteries, Values from 0 (100 % Veins) to 1(100 % Arteries";
  //       parameter Physiolibrary.Types.VolumeFlowRate ECMOF=0   "ECMO blood flow [m3/s]";
  //       parameter Physiolibrary.Types.VolumeFlowRate O2Flow=1.6666666666667e-05
  //                                                               "O2 flow in ECMO [m3/s]";
  //       parameter Physiolibrary.Types.VolumeFlowRate AirFlow=1.6666666666667e-05
  //                                                                      "Air flow in ECMO[m3/s]";
        parameter Real RPM=0    "Rotation per minute in ECMO pump";
        parameter Physiolibrary.Types.VolumeFlowRate SWEEP=0 "Air + O2 flow in ECMO[m3/s]";
        parameter Real FiO2=0.5       "Fraction of oxygen in gas";

    parameter Modelica.Units.SI.Volume FunctionalResidualCapacity=0.00231
   "Functional residual capacity";
    parameter Physiolibrary.Types.HydraulicResistance TotalResistance=147099.75
   "Total lungs pathways conductance";
    parameter Physiolibrary.Types.HydraulicCompliance TotalCompliance(displayUnit="ml/mmHg")=
       6.0004926067653e-07                        "Total lungs compliance";
    parameter Modelica.Units.SI.Volume LungsAirVolume_initial=FunctionalResidualCapacity;

    inner Modelica.Fluid.System system(T_ambient=310.15)
      annotation (Placement(transformation(extent={{-388,288},{-368,308}})));
    Physiolibrary.Fluid.Components.Conductor shunt(redeclare package Medium =
          Blood, Conductance(displayUnit="l/(cmH2O.s)") = C_shunt)
               annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-92,-30})));
    Physiolibrary.Fluid.Components.ElasticVessel LungsArteries(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.00038,
      Compliance(displayUnit="ml/mmHg") = 3.6002955640592e-08,
      ZeroPressureVolume(displayUnit="l") = 0.0003,
      nPorts=6)
      annotation (Placement(transformation(extent={{-295,22},{-275,42}})));
    Physiolibrary.Fluid.Components.ElasticVessel LungsVeins(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.0004,
      Compliance(displayUnit="ml/mmHg") = 7.5006157584566e-08,
      ZeroPressureVolume(displayUnit="l") = 0.0004,
      nPorts=7)
      annotation (Placement(transformation(extent={{109,20},{89,40}})));
    Physiolibrary.Fluid.Components.VolumePump DeadSpace(
      redeclare package Medium = Air,
      useSolutionFlowInput=false,
      SolutionFlow=DV*RR)
      annotation (Placement(transformation(extent={{-117,262},{-97,282}})));
    Physiolibrary.Fluid.Sources.VolumeOutflowSource MinuteVolume(
      useSolutionFlowInput=false,
      SolutionFlow=RR*TV,
      redeclare package Medium = Air) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={83,272})));
    Physiolibrary.Fluid.Components.ElasticVessel Alveoly(
      redeclare package Medium = Air,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.0016,
      Compliance(displayUnit="ml/mmHg") = 6.0004926067653e-07,
      ZeroPressureVolume(displayUnit="l") = 0.0013,
      ExternalPressure(displayUnit="mmHg") = 100791.72488574,
      nPorts=3) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-125,206})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasureAlveols(redeclare
        package
        Medium = Air)
      annotation (Placement(transformation(extent={{-81,218},{-61,238}})));
    Physiolibrary.Fluid.Components.Conductor conductor3(redeclare package Medium =
          Physiolibrary.Media.Air, Conductance(displayUnit="l/(cmH2O.s)")=
        C_ventilation) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-199,228})));
    Chemical.Components.GasSolubility O2(KC=1e-4)
      annotation (Placement(transformation(extent={{-153,154},{-133,174}})));
    Chemical.Components.GasSolubility CO2(KC=1e-4)
      annotation (Placement(transformation(extent={{-109,158},{-89,178}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2Lungs(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-207,152},{-187,172}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pCO2Lungs(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(
          extent={{10,-10},{-10,10}},
          rotation=0,
          origin={-49,164})));
    Physiolibrary.Fluid.Components.Conductor conductor4(redeclare package Medium =
          Blood, Conductance=C_cirkulation*(8/7))
      annotation (Placement(transformation(extent={{-189,50},{-169,70}})));
    Physiolibrary.Fluid.Components.Conductor conductor5(redeclare package Medium =
          Blood, Conductance=C_cirkulation*8)
      annotation (Placement(transformation(extent={{-19,54},{1,74}})));
    Physiolibrary.Fluid.Components.ElasticVessel LungCapilars(
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.00015,
      Compliance(displayUnit="ml/mmHg") = 3.0002463033826e-08,
      ZeroPressureVolume(displayUnit="l") = 0.0001,
      nPorts=5) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=270,
          origin={-111,120})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureCapilarsLungs(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{-25,126},{-5,146}})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureAlveols(redeclare
        package
        Medium = Air)
      annotation (Placement(transformation(extent={{45,198},{65,218}})));
    Physiolibrary.Fluid.Components.Conductor conductor6(redeclare package Medium =
          Physiolibrary.Media.Air, Conductance(displayUnit="l/(cmH2O.s)")=
        C_ventilation) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-11,228})));
    Physiolibrary.Fluid.Sensors.pH pH_LungA(redeclare package Medium =
          Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-333,22},{-313,42}})));
    Physiolibrary.Fluid.Sensors.pH pH_LungV(redeclare package Medium =
          Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{173,20},{153,40}})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureLungsArteries(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{-301,84},{-281,104}})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasureAlveols1(redeclare
        package
        Medium = Physiolibrary.Media.Air)
      annotation (Placement(transformation(extent={{27,262},{47,282}})));
    Physiolibrary.Fluid.Sources.PressureSource ventilatorGas(
      redeclare package Medium = Air,
      use_concentration_start=true,
      concentration_start={AirO2,AirCO2,AirH2O,AirN2}) "External environment"
      annotation (Placement(transformation(extent={{-325,228},{-251,294}})));
    Physiolibrary.Fluid.Components.Resistor resistor1(redeclare package Medium =
          Blood, Resistance=7999343.2449*((5.5*20)/8)) annotation (Placement(
          transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-86,-196})));
    Physiolibrary.Fluid.Components.ElasticVessel Arteries(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.00085,
      Compliance(displayUnit="ml/mmHg") = 2.6627185942521e-08,
      ZeroPressureVolume(displayUnit="l") = 0.00045,
      nPorts=6)
      annotation (Placement(transformation(extent={{-42,-202},{-62,-180}})));
    Physiolibrary.Fluid.Components.ElasticVessel Veins(
      redeclare package Medium = Blood,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.00325,
      Compliance(displayUnit="ml/mmHg") = 6.1880080007267e-07,
      ZeroPressureVolume(displayUnit="l") = 0.00295,
      nPorts=6)
      annotation (Placement(transformation(extent={{-192,-204},{-172,-184}})));
    Physiolibrary.Fluid.Components.Resistor resistor2(redeclare package Medium =
          Blood, Resistance=7999343.2449*(20/8)) annotation (Placement(
          transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-146,-196})));
    Physiolibrary.Fluid.Components.ElasticVessel Tissue(
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen,
      useSubstances=true,
      volume_start(displayUnit="l") = 0.0003,
      useThermalPort=true,
      Compliance(displayUnit="ml/mmHg") = 3.0002463033826e-08,
      ZeroPressureVolume(displayUnit="l") = 0.0002,
      nPorts=5) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-116,-280})));
    Physiolibrary.Fluid.Sensors.PressureMeasure PressureCapilarsTissue(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{-188,-270},{-208,-250}})));
    Chemical.Sources.SubstanceInflowT CO2_in(
      SubstanceFlow(displayUnit="mmol/min") = CO2BMR,
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas()) annotation (
        Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-46,-332})));
    Chemical.Sources.SubstanceOutflow O2_left(useSubstanceFlowInput=false,
        SubstanceFlow(displayUnit="mmol/min") = O2BMR) annotation (Placement(
          transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={-192,-332})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2_tissue(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-202,-292},{-182,-312}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pCO2_tissue(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(
          extent={{10,10},{-10,-10}},
          rotation=0,
          origin={-44,-302})));
    Physiolibrary.Fluid.Sensors.PartialPressure pCO2Arteries(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(
          extent={{-10,10},{10,-10}},
          rotation=180,
          origin={0,-176})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2Arteries(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(
          extent={{-10,10},{10,-10}},
          rotation=180,
          origin={-2,-222})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureArterial(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{-50,-260},{-30,-240}})));
    Physiolibrary.Fluid.Sensors.PressureMeasure PressureVeins(redeclare package
        Medium = Blood)
      annotation (Placement(transformation(extent={{-300,-248},{-320,-228}})));
    Physiolibrary.Thermal.Sources.UnlimitedHeat BodyHeat(T=310.15)
      annotation (Placement(transformation(extent={{-156,-382},{-136,-362}})));
    Physiolibrary.Thermal.Components.Conductor conductor(Conductance=69780)
      annotation (Placement(transformation(extent={{-118,-382},{-98,-362}})));
    Physiolibrary.Fluid.Components.VolumePump heartRight(
      redeclare package Medium = Blood,
      useSolutionFlowInput=true,
      SolutionFlow(displayUnit="l/min")) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={-294,-154})));
    Physiolibrary.Fluid.Components.VolumePump heartLeft(
      redeclare package Medium = Blood,
      useSolutionFlowInput=true,
      SolutionFlow(displayUnit="l/min")) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=270,
          origin={86,-150})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasureCardiacOutput(redeclare
        package Medium = Blood) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=270,
          origin={86,-182})));
    Physiolibrary.Fluid.Sensors.PartialPressure pO2Veins(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.Oxygen_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-264,-206},{-244,-226}})));
    Physiolibrary.Fluid.Sensors.PartialPressure pCO2Veins(
      redeclare package stateOfMatter = Chemical.Interfaces.IdealGas,
      substanceData=Chemical.Substances.CarbonDioxide_gas(),
      redeclare package Medium = Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(
          extent={{-10,10},{10,-10}},
          rotation=0,
          origin={-246,-170})));
    Physiolibrary.Types.Constants.HydraulicConductanceConst StarlingSlopeRight(k=
          StarlingRight)
      annotation (Placement(transformation(extent={{-364,-152},{-356,-144}})));
    Modelica.Blocks.Math.Product product2 annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={-328,-154})));
    Physiolibrary.Fluid.Sensors.PressureMeasure pressureLungsVein(redeclare
        package Medium = Blood)
      annotation (Placement(transformation(extent={{104,-40},{124,-20}})));
    Physiolibrary.Types.Constants.HydraulicConductanceConst StarlingSlopeLeft(k=
          StarlingLeft)
      annotation (Placement(transformation(extent={{130,-26},{138,-18}})));
    Modelica.Blocks.Math.Product product1 annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=0,
          origin={180,-28})));
    Physiolibrary.Fluid.Sensors.pH pH_Arteries(redeclare package Medium =
          Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-116,-174},{-96,-154}})));
    Physiolibrary.Fluid.Sensors.pH pH_Veins(redeclare package Medium =
          Physiolibrary.Media.BloodBySiggaardAndersen)
      annotation (Placement(transformation(extent={{-144,-170},{-164,-150}})));
    Physiolibrary.Fluid.Components.ElasticVessel lungs(
      redeclare package Medium = Air,
      useSubstances=true,
      use_mass_start=false,
      volume_start=LungsAirVolume_initial,
      use_concentration_start=false,
      massFractions_start=Air.reference_X,
      EnthalpyNotUsed=false,
      ZeroPressureVolume=FunctionalResidualCapacity,
      Compliance=TotalCompliance,
      useExternalPressureInput=false,
      nPorts=2) "Lungs"
      annotation (Placement(transformation(extent={{411,228},{431,248}})));
    Physiolibrary.Fluid.Sensors.PressureMeasure lungsPressureMeasure(redeclare
        package Medium = Air) "Lungs pressure"
      annotation (Placement(transformation(extent={{445,240},{465,260}})));
    Physiolibrary.Fluid.Sources.PressureSource environment(redeclare package
        Medium = Air) "External environment"
      annotation (Placement(transformation(extent={{287,278},{307,298}})));
    Physiolibrary.Fluid.Components.Resistor resistor(
      redeclare package Medium = Air,
      EnthalpyNotUsed=false,
      Resistance=TotalResistance)
      annotation (Placement(transformation(extent={{371,212},{391,232}})));
    Physiolibrary.Types.Constants.FrequencyConst frequency(k=RR)
      annotation (Placement(transformation(extent={{271,194},{279,202}})));
    Physiolibrary.Fluid.Sensors.FlowMeasure flowMeasure(redeclare package Medium =
          Physiolibrary.Media.Air)
      annotation (Placement(transformation(extent={{343,212},{363,232}})));
    Physiolibrary.Fluid.Components.IdealValve idealValve(redeclare package Medium =
          Air) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=180,
          origin={325,288})));
    Physiolibrary.Fluid.Components.Conductor expiration(redeclare package Medium =
          Air, useConductanceInput=true) annotation (Placement(transformation(
          extent={{-10,-10},{10,10}},
          rotation=90,
          origin={343,260})));
    VolumeController ventilatorSCMV(peakvolume=TV, maxflowrate(displayUnit="l/s"))
      annotation (Placement(transformation(extent={{301,176},{321,196}})));
    Physiolibrary.Types.Constants.HydraulicConductanceConst expirationConductance(k(
          displayUnit="m3/(Pa.s)") = 1e-5)
      annotation (Placement(transformation(extent={{287,262},{295,270}})));
    Modelica.Blocks.Math.Product product5
      annotation (Placement(transformation(extent={{315,256},{325,266}})));
    Physiolibrary.Fluid.Components.VolumePump volumePump(redeclare package Medium =
          Physiolibrary.Media.Air, useSolutionFlowInput=true)
      annotation (Placement(transformation(extent={{331,144},{351,164}})));
    Physiolibrary.Fluid.Sources.PressureSource ventilatorGas1(
      redeclare package Medium = Air,
      use_concentration_start=false,
      concentration_start={AirO2,AirCO2,AirH2O,AirN2}) "External environment"
      annotation (Placement(transformation(extent={{259,136},{295,170}})));
  equation

    connect(flowMeasureAlveols.q_in,Alveoly. q_in[1]) annotation (Line(
        points={{-81,228},{-123,228},{-123,205.9},{-126.733,205.9}},
        color={127,0,0},
        thickness=0.5));
    connect(Alveoly.substances[1],O2. gas_port) annotation (Line(points={{-125,196},
            {-125,182},{-133,182},{-133,180},{-147,180},{-147,174},{-143,174}},
                                             color={158,66,200}));
    connect(Alveoly.substances[2],CO2. gas_port) annotation (Line(points={{-125,196},
            {-125,178},{-99,178}},         color={158,66,200}));
    connect(O2.liquid_port,LungCapilars. substances[2]) annotation (Line(points={{-143,
            154},{-143,140},{-111,140},{-111,130}},       color={158,66,200}));
    connect(CO2.liquid_port,LungCapilars. substances[3]) annotation (Line(
          points={{-99,158},{-99,140},{-111,140},{-111,130}},   color={158,66,
            200}));
    connect(O2.liquid_port,pO2Lungs. port_a) annotation (Line(points={{-143,154},{
            -143,140},{-167,140},{-167,162},{-187,162}},  color={158,66,200}));
    connect(CO2.liquid_port,pCO2Lungs. port_a) annotation (Line(points={{-99,158},
            {-99,140},{-73,140},{-73,164},{-59,164}},                     color=
           {158,66,200}));
    connect(conductor4.q_out,LungCapilars. q_in[2]) annotation (Line(
        points={{-169,60},{-111,60},{-111,100},{-111,120.1},{-109.96,120.1}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor5.q_in,LungCapilars. q_in[2]) annotation (Line(
        points={{-19,64},{-113,64},{-113,102},{-109.96,102},{-109.96,120.1}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor4.q_in,LungsArteries. q_in[3]) annotation (Line(
        points={{-189,60},{-285,60},{-285,30},{-285.1,30},{-285.1,32.4333}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor5.q_out,LungsVeins. q_in[4]) annotation (Line(
        points={{1,64},{99,64},{99,30},{99.1,30},{99.1,30}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor3.q_in,DeadSpace. q_in) annotation (Line(
        points={{-209,228},{-235,228},{-235,272},{-117,272}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor6.q_in,flowMeasureAlveols. q_out) annotation (Line(
        points={{-21,228},{-61,228}},
        color={127,0,0},
        thickness=0.5));
    connect(pH_LungA.port_a,LungsArteries. substances[13])
      annotation (Line(points={{-313,32},{-295,32}},   color={158,66,200}));
    connect(pH_LungV.port_a,LungsVeins. substances[13])
      annotation (Line(points={{153,30},{109,30}}, color={158,66,200}));
    connect(conductor3.q_out,Alveoly. q_in[2]) annotation (Line(
        points={{-189,228},{-125,228},{-125,205.9}},
        color={127,0,0},
        thickness=0.5));
    connect(flowMeasureAlveols1.q_out,MinuteVolume. q_in) annotation (Line(
        points={{47,272},{73,272}},
        color={127,0,0},
        thickness=0.5));
    connect(conductor6.q_out,flowMeasureAlveols1. q_in) annotation (Line(
        points={{-1,228},{17,228},{17,272},{27,272}},
        color={127,0,0},
        thickness=0.5));
    connect(DeadSpace.q_out,flowMeasureAlveols1. q_in) annotation (Line(
        points={{-97,272},{27,272}},
        color={127,0,0},
        thickness=0.5));
    connect(ventilatorGas.y,DeadSpace. q_in) annotation (Line(
        points={{-251,261},{-233,261},{-233,272},{-117,272}},
        color={127,0,0},
        thickness=0.5));
    connect(resistor1.q_in,Arteries. q_in[1]) annotation (Line(
        points={{-76,-196},{-51.9,-196},{-51.9,-188.617}},
        color={127,0,0},
        thickness=0.5));
    connect(resistor2.q_in,Tissue. q_in[1]) annotation (Line(
        points={{-136,-196},{-136,-280.1},{-118.08,-280.1}},
        color={127,0,0},
        thickness=0.5));
    connect(resistor1.q_out,Tissue. q_in[2]) annotation (Line(
        points={{-96,-196},{-96,-280.1},{-117.04,-280.1}},
        color={127,0,0},
        thickness=0.5));
    connect(O2_left.port_a,Tissue. substances[2]) annotation (Line(points={{-182,-332},
            {-116,-332},{-116,-290}}, color={158,66,200}));
    connect(O2_left.port_a,pO2_tissue. port_a) annotation (Line(points={{-182,-332},
            {-160,-332},{-160,-302},{-182,-302}}, color={158,66,200}));
    connect(CO2_in.port_b,Tissue. substances[3]) annotation (Line(points={{-56,-332},
            {-116,-332},{-116,-290}}, color={158,66,200}));
    connect(CO2_in.port_b,pCO2_tissue. port_a) annotation (Line(points={{-56,-332},
            {-80,-332},{-80,-302},{-54,-302}},    color={158,66,200}));
    connect(resistor2.q_out,Veins. q_in[1]) annotation (Line(
        points={{-156,-196},{-182.1,-196},{-182.1,-191.833}},
        color={127,0,0},
        thickness=0.5));
    connect(pO2Arteries.port_a,Arteries. substances[2]) annotation (Line(points={{-12,
            -222},{-42,-222},{-42,-191}},color={158,66,200}));
    connect(pCO2Arteries.port_a,Arteries. substances[3])
      annotation (Line(points={{-10,-176},{-42,-176},{-42,-191}},
                                                           color={158,66,200}));
    connect(BodyHeat.port,conductor. q_in) annotation (Line(
        points={{-136,-372},{-118,-372}},
        color={191,0,0},
        thickness=0.5));
    connect(conductor.q_out,Tissue. heatPort) annotation (Line(
        points={{-98,-372},{-96,-372},{-96,-290},{-105.8,-290},{-105.8,-286}},
        color={191,0,0},
        thickness=0.5));
    connect(heartRight.q_in,Veins. q_in[2]) annotation (Line(
        points={{-294,-164},{-294,-192.7},{-182.1,-192.7}},
        color={127,0,0},
        thickness=0.5));
    connect(heartLeft.q_out,flowMeasureCardiacOutput. q_in) annotation (Line(
        points={{86,-160},{86,-172}},
        color={127,0,0},
        thickness=0.5));
    connect(StarlingSlopeRight.y,product2. u1)
      annotation (Line(points={{-355,-148},{-340,-148}},
                                                     color={0,0,127}));
    connect(PressureVeins.pressure,product2. u2) annotation (Line(points={{-316,-242},
            {-340,-242},{-340,-160}},                              color={0,0,127}));
    connect(product2.y,heartRight. solutionFlow) annotation (Line(points={{-317,-154},
            {-312,-154},{-312,-152},{-301,-152},{-301,-154}},
                                                      color={0,0,127}));
    connect(pressureLungsVein.pressure,product1. u2)
      annotation (Line(points={{120,-34},{168,-34}}, color={0,0,127}));
    connect(product1.y,heartLeft. solutionFlow) annotation (Line(points={{191,-28},
            {200,-28},{200,-150},{93,-150}},
                                          color={0,0,127}));
    connect(pO2Veins.port_a,Veins. substances[2]) annotation (Line(points={{-244,-216},
            {-230,-216},{-230,-214},{-192,-214},{-192,-194}}, color={158,66,200}));
    connect(pCO2Veins.port_a,Veins. substances[3]) annotation (Line(points={{-236,
            -170},{-220,-170},{-220,-176},{-192,-176},{-192,-194}}, color={158,66,
            200}));
    connect(pH_Arteries.port_a,Arteries. substances[13]) annotation (Line(
          points={{-96,-164},{-42,-164},{-42,-191}},
          color={158,66,200}));
    connect(pH_Veins.port_a,Veins. substances[13]) annotation (Line(points={{-164,
            -160},{-192,-160},{-192,-194}},                              color=
            {158,66,200}));
    connect(StarlingSlopeLeft.y,product1. u1)
      annotation (Line(points={{139,-22},{168,-22}},
                                                   color={0,0,127}));
    connect(heartRight.q_out, LungsArteries.q_in[4]) annotation (Line(
        points={{-294,-144},{-294,0},{-285.1,0},{-285.1,31.5667}},
        color={127,0,0},
        thickness=0.5));
    connect(heartLeft.q_in, LungsVeins.q_in[5]) annotation (Line(
        points={{86,-140},{84,-140},{84,12},{96,12},{96,24},{99.1,24},{99.1,
            29.2571}},
        color={127,0,0},
        thickness=0.5));

    connect(shunt.q_in, heartRight.q_out) annotation (Line(
        points={{-102,-30},{-200,-30},{-200,-32},{-294,-32},{-294,-144}},
        color={127,0,0},
        thickness=0.5));
    connect(heartLeft.q_in, shunt.q_out) annotation (Line(
        points={{86,-140},{84,-140},{84,-34},{-82,-34},{-82,-30}},
        color={127,0,0},
        thickness=0.5));
    connect(resistor.
              q_out,lungs. q_in[1]) annotation (Line(
     points={{391,222},{403,222},{403,239.3},{420.9,239.3}},
     color={127,0,0},
     thickness=0.5));
    connect(flowMeasure.
                     q_out,resistor. q_in)
   annotation (Line(
     points={{363,222},{371,222}},
     color={127,0,0},
     thickness=0.5));
    connect(idealValve.q_out,environment. y) annotation (Line(
        points={{315,288},{307,288}},
        color={127,0,0},
        thickness=0.5));
    connect(flowMeasure.q_in,expiration. q_in) annotation (Line(
        points={{343,222},{343,250}},
        color={127,0,0},
        thickness=0.5));
    connect(expiration.q_out,idealValve. q_in) annotation (Line(
        points={{343,270},{343,288},{335,288}},
        color={127,0,0},
        thickness=0.5));
    connect(lungs.fluidVolume,ventilatorSCMV. volume) annotation (Line(points={{431,230},
            {433,230},{433,182},{375,182},{375,186},{318.6,186}},      color={0,0,
            127}));
    connect(frequency.y,ventilatorSCMV. frequency) annotation (Line(points={{280,198},
            {280,192},{304.8,192}}, color={0,0,127}));
    connect(product5.u2,ventilatorSCMV. outflowopen) annotation (Line(points={{314,258},
            {301.3,258},{301.3,185.9}},      color={0,0,127}));
    connect(expirationConductance.y,product5. u1) annotation (Line(points={{296,266},
            {303,266},{303,264},{314,264}},
                                         color={0,0,127}));
    connect(product5.y,expiration. cond) annotation (Line(points={{325.5,261},{329,
            261},{329,260},{337,260}},
                                    color={0,0,127}));
    connect(volumePump.q_out,flowMeasure. q_in) annotation (Line(
        points={{351,154},{353,154},{353,190},{329,190},{329,206},{321,206},{321,222},
            {343,222}},
        color={127,0,0},
        thickness=0.5));
    connect(ventilatorSCMV.volumeflowrate,volumePump. solutionFlow) annotation (
        Line(points={{305,177.4},{305,170},{341,170},{341,161}},
          color={0,0,127}));
    connect(ventilatorGas1.y,volumePump. q_in) annotation (Line(
        points={{295,153},{289,153},{289,118},{331,118},{331,154}},
        color={127,0,0},
        thickness=0.5));
    connect(Alveoly.q_in[3], pressureAlveols.q_in) annotation (Line(
        points={{-123.267,205.9},{-35.5,205.9},{-35.5,202},{51,202}},
        color={127,0,0},
        thickness=0.5));
    connect(LungCapilars.q_in[3], pressureCapilarsLungs.q_in) annotation (Line(
        points={{-111,120.1},{-64.5,120.1},{-64.5,130},{-19,130}},
        color={127,0,0},
        thickness=0.5));
    connect(pressureLungsArteries.q_in, LungsArteries.q_in[5]) annotation (Line(
        points={{-295,88},{-292,88},{-292,52},{-285.1,52},{-285.1,30.7}},
        color={127,0,0},
        thickness=0.5));
    connect(pressureLungsVein.q_in, LungsVeins.q_in[6]) annotation (Line(
        points={{110,-36},{84,-36},{84,12},{96,12},{96,24},{99.1,24},{99.1,
            28.5143}},
        color={127,0,0},
        thickness=0.5));

    connect(LungsVeins.q_in[7], pH_LungV.referenceFluidPort) annotation (Line(
        points={{99.1,27.7714},{99.1,6},{163,6},{163,20.2}},
        color={127,0,0},
        thickness=0.5));
    connect(pH_LungA.referenceFluidPort, LungsArteries.q_in[6]) annotation (Line(
        points={{-323,22.2},{-323,8},{-285.1,8},{-285.1,29.8333}},
        color={127,0,0},
        thickness=0.5));
    connect(pO2Lungs.referenceFluidPort, LungCapilars.q_in[4]) annotation (Line(
        points={{-197,152.2},{-197,120.1},{-112.04,120.1}},
        color={127,0,0},
        thickness=0.5));
    connect(pCO2Lungs.referenceFluidPort, LungCapilars.q_in[5]) annotation (Line(
        points={{-49,154.2},{-49,120.1},{-113.08,120.1}},
        color={127,0,0},
        thickness=0.5));
    connect(Veins.q_in[3], pH_Veins.referenceFluidPort) annotation (Line(
        points={{-182.1,-193.567},{-182,-193.567},{-182,-169.8},{-154,-169.8}},
        color={127,0,0},
        thickness=0.5));
    connect(pCO2Veins.referenceFluidPort, Veins.q_in[4]) annotation (Line(
        points={{-246,-160.2},{-246,-154},{-182.1,-154},{-182.1,-194.433}},
        color={127,0,0},
        thickness=0.5));
    connect(pO2Veins.referenceFluidPort, Veins.q_in[5]) annotation (Line(
        points={{-254,-206.2},{-220,-206.2},{-220,-208},{-182.1,-208},{-182.1,-195.3}},
        color={127,0,0},
        thickness=0.5));

    connect(pH_Arteries.referenceFluidPort, Arteries.q_in[2]) annotation (Line(
        points={{-106,-173.8},{-106,-189.57},{-51.9,-189.57}},
        color={127,0,0},
        thickness=0.5));
    connect(pO2Arteries.referenceFluidPort, Arteries.q_in[3]) annotation (Line(
        points={{-2,-231.8},{-26,-231.8},{-26,-236},{-51.9,-236},{-51.9,
            -190.523}},
        color={127,0,0},
        thickness=0.5));

    connect(pCO2Arteries.referenceFluidPort, Arteries.q_in[4]) annotation (Line(
        points={{0,-185.8},{0,-191.477},{-51.9,-191.477}},
        color={127,0,0},
        thickness=0.5));
    connect(flowMeasureCardiacOutput.q_out, Arteries.q_in[5]) annotation (Line(
        points={{86,-192},{18,-192},{18,-192.43},{-51.9,-192.43}},
        color={127,0,0},
        thickness=0.5));
    connect(pCO2_tissue.referenceFluidPort, Tissue.q_in[3]) annotation (Line(
        points={{-44,-292.2},{-44,-280.1},{-116,-280.1}},
        color={127,0,0},
        thickness=0.5));
    connect(pO2_tissue.referenceFluidPort, Tissue.q_in[4]) annotation (Line(
        points={{-192,-292.2},{-194,-292.2},{-194,-280.1},{-114.96,-280.1}},
        color={127,0,0},
        thickness=0.5));
    connect(PressureCapilarsTissue.q_in, Tissue.q_in[5]) annotation (Line(
        points={{-194,-266},{-154,-266},{-154,-268},{-113.92,-268},{-113.92,-280.1}},
        color={127,0,0},
        thickness=0.5));

    connect(pressureArterial.q_in, Arteries.q_in[6]) annotation (Line(
        points={{-44,-256},{-51.9,-256},{-51.9,-193.383}},
        color={127,0,0},
        thickness=0.5));
    connect(PressureVeins.q_in, Veins.q_in[6]) annotation (Line(
        points={{-306,-244},{-182.1,-244},{-182.1,-196.167}},
        color={127,0,0},
        thickness=0.5));
    connect(lungs.q_in[2], lungsPressureMeasure.q_in) annotation (Line(
        points={{420.9,236.7},{400,236.7},{400,254},{448,254},{448,262},{451,262},
            {451,244}},
        color={127,0,0},
        thickness=0.5));
    annotation (Icon(coordinateSystem(preserveAspectRatio=false, extent={{-400,-400},
              {580,340}})), Diagram(coordinateSystem(preserveAspectRatio=false,
            extent={{-400,-400},{580,340}}), graphics={
          Rectangle(
            extent={{-348,330},{237,0}},
            lineColor={28,108,200},
            lineThickness=0.5),
          Text(
            extent={{93,318},{183,278}},
            textColor={28,108,200},
            fontSize=10,
            textString="Lungs"),
          Rectangle(
            extent={{-348,-2},{226,-398}},
            lineColor={238,46,47},
            lineThickness=0.5),
          Text(
            extent={{156,-18},{214,-66}},
            textColor={238,46,47},
            fontSize=10,
            textString="Body"),
          Rectangle(
            extent={{255,328},{507,98}},
            lineColor={0,140,72},
            lineThickness=0.5),
          Text(
            extent={{299,122},{499,102}},
            textColor={0,140,72},
            textString="Lung ventilator SCMV
",          fontSize=10)}),
      experiment(
        StopTime=90,
        Interval=0.2,
        Tolerance=0.001,
        __Dymola_Algorithm="Cvode"));
  end ECMOSimNoRegVentilatorVCFlat;
  annotation (uses(
      Modelica(version="4.0.0"),
      Chemical(version="1.4.0"),
      Physiolibrary(version="3.0.0-alpha11")), version="1");
end modelECMORespiratoryVR;
