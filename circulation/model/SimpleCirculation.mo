within ;
package Frvs
  package Parts
    connector BloodFlowConnector "Connector for blood flow"
      flow Real Q "blood flow ml/sec";
      Real Pressure "blood pressure in torr";
      annotation(Icon(coordinateSystem(extent = {{-100.0, -100.0}, {100.0, 100.0}}, preserveAspectRatio = true, initialScale = 0.1, grid = {10, 10}), graphics={  Rectangle(visible = true, origin = {0.0, 0.3056}, fillColor = {255, 0, 0},
                fillPattern =                                                                                                    FillPattern.Solid, extent = {{-100.0, -100.3056}, {100.0, 100.3056}})}), Diagram(coordinateSystem(extent = {{-100.0, -100.0}, {100.0, 100.0}}, preserveAspectRatio = true, initialScale = 0.1, grid = {10, 10}), graphics));
    end BloodFlowConnector;

    connector BloodFlowInflow "Blood flow inflow"
      flow Real Q "blood inflow in ml/sec";
      Real Pressure "Pressure in torr";
      annotation(Icon(coordinateSystem(extent = {{-100.0, -100.0}, {100.0, 100.0}}, preserveAspectRatio = true, initialScale = 0.1, grid = {10, 10}), graphics={  Rectangle(visible = true, origin = {0.0, 0.3056}, fillColor = {255, 0, 0},
                fillPattern =                                                                                                    FillPattern.Solid, extent = {{-100.0, -100.3056}, {100.0, 100.3056}})}), Diagram(coordinateSystem(extent = {{-148.5, -105.0}, {148.5, 105.0}}, preserveAspectRatio = true, initialScale = 0.1, grid = {5, 5}), graphics={  Text(visible = true, lineColor = {0, 0, 255}, extent = {{-160.0, 50.0}, {40.0, 110.0}}, textString = "%name", fontName = "Arial"), Rectangle(visible = true, lineColor = {0, 0, 255}, fillColor = {255, 0, 0},
                fillPattern =                                                                                                    FillPattern.Solid, extent = {{-40.0, -40.0}, {40.0, 40.0}})}));
    end BloodFlowInflow;

    connector BloodFlowOutflow "Blood flow inflow"
      flow Real Q "blood flow outflow in ml/sec";
      Real Pressure "Pressure in torr";
      annotation(Icon(coordinateSystem(extent = {{-100.0, -100.0}, {100.0, 100.0}}, preserveAspectRatio = true, initialScale = 0.1, grid = {10, 10}), graphics={  Rectangle(visible = true, origin = {0.0, 0.3056}, fillColor = {255, 255, 255},
                fillPattern =                                                                                                    FillPattern.Solid, extent = {{-100.0, -100.3056}, {100.0, 100.3056}})}), Diagram(coordinateSystem(extent = {{-148.5, -105.0}, {148.5, 105.0}}, preserveAspectRatio = true, initialScale = 0.1, grid = {5, 5}), graphics={  Text(visible = true, lineColor = {0, 0, 255}, extent = {{-160.0, 50.0}, {40.0, 110.0}}, textString = "%name", fontName = "Arial"), Rectangle(visible = true, lineColor = {0, 0, 255}, fillColor = {255, 255, 255},
                fillPattern =                                                                                                    FillPattern.Solid, extent = {{-40.0, -40.0}, {40.0, 40.0}})}));
    end BloodFlowOutflow;

    partial model BloodFlowOnePort
      Frvs.Parts.BloodFlowInflow Inflow annotation(Placement(visible = true, transformation(origin = {-104.0875, 0.0}, extent = {{-14.85, -10.5}, {14.85, 10.5}}, rotation = 0), iconTransformation(origin = {-100.0, 0.0}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0)));
      Frvs.Parts.BloodFlowOutflow Outflow annotation(Placement(visible = true, transformation(origin = {103.85, -0.5}, extent = {{-14.85, -10.5}, {14.85, 10.5}}, rotation = 0), iconTransformation(origin = {100.0, 0.0}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0)));
      Real PressureDrop "Pressure in torr";
      Real BloodFlow "ml/sec";
    equation
      PressureDrop = Inflow.Pressure - Outflow.Pressure;
      Inflow.Q + Outflow.Q = 0;
      BloodFlow = Inflow.Q;
      annotation(Diagram(coordinateSystem(extent = {{-148.5, -105.0}, {148.5, 105.0}}, preserveAspectRatio = true, initialScale = 0.1, grid = {5, 5}), graphics={  Line(visible = true, points = {{-110.0, 20.0}, {-85.0, 20.0}}, color = {160, 160, 164}), Polygon(visible = true, lineColor = {160, 160, 164}, fillColor = {160, 160, 164},
                fillPattern =                                                                                                                                                                                                        FillPattern.Solid, points = {{-95.0, 23.0}, {-85.0, 20.0}, {-95.0, 17.0}, {-95.0, 23.0}}), Line(visible = true, points = {{90.0, 20.0}, {115.0, 20.0}}, color = {160, 160, 164}), Text(visible = true, lineColor = {160, 160, 164},
                fillPattern =                                                                                                                                                                                                        FillPattern.Solid, extent = {{-110.0, 25.0}, {-90.0, 45.0}}, textString = "Q", fontName = "Arial"), Polygon(visible = true, lineColor = {160, 160, 164}, fillColor = {160, 160, 164},
                fillPattern =                                                                                                                                                                                                        FillPattern.Solid, points = {{105.0, 23.0}, {115.0, 20.0}, {105.0, 17.0}, {105.0, 23.0}}), Text(visible = true, lineColor = {160, 160, 164},
                fillPattern =                                                                                                                                                                                                        FillPattern.Solid, extent = {{90.0, 25.0}, {110.0, 45.0}}, textString = "Q", fontName = "Arial")}));
    end BloodFlowOnePort;

    model VariableBloodResistor
      extends Frvs.Parts.BloodFlowOnePort;
      Modelica.Blocks.Interfaces.RealInput BloodResistance annotation(Placement(visible = true, transformation(origin = {-10.0, 67.9735}, extent = {{-20.0, -20.0}, {20.0, 20.0}}, rotation = 0), iconTransformation(origin = {0.0, 92.5685}, extent = {{-12.5685, -12.5685}, {12.5685, 12.5685}}, rotation = -90)));
    equation
      PressureDrop = BloodFlow * BloodResistance;
      annotation(Icon(coordinateSystem(extent = {{-100.0, -100.0}, {100.0, 100.0}}, preserveAspectRatio = true, initialScale = 0.1, grid = {10, 10}), graphics={  Rectangle(visible = true, fillColor = {255, 255, 255}, extent = {{-50.0, -20.0}, {50.0, 20.0}}), Line(visible = true, origin = {-70.0, 0.0}, points = {{-20.0, 0.0}, {20.0, 0.0}}), Line(visible = true, origin = {70.0, 0.0}, points = {{-20.0, 0.0}, {20.0, 0.0}}), Text(visible = true, extent = {{-148, -81}, {150, -40}}, fontName = "Arial", textString = "%name", lineColor = {0, 0, 0}), Line(visible = true, origin = {0.0, 50.0}, points = {{0.0, 30.0}, {0.0, -30.0}})}), Diagram(coordinateSystem(extent = {{-148.5, -105.0}, {148.5, 105.0}}, preserveAspectRatio = true, initialScale = 0.1, grid = {5, 5}), graphics = {Rectangle(visible = true, fillColor = {255, 255, 255}, extent = {{-60.0, -20.0}, {60.0, 20.0}}), Rectangle(visible = true, origin = {-80.0, 0.0}, fillColor = {255, 255, 255}, extent = {{-20.0, 0.0}, {20.0, 0.0}}), Rectangle(visible = true, origin = {80.0, 0.0}, fillColor = {255, 255, 255}, extent = {{-20.0, 0.0}, {20.0, 0.0}})}));
    end VariableBloodResistor;

    model BloodElasticCompartmentBasic
      "Elastic compartment with zero unpressured volume"
      Frvs.Parts.BloodFlowConnector bloodFlow annotation(Placement(visible = true, transformation(origin = {-5.0, -5.0}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0), iconTransformation(origin = {4.8739, 0.0}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0)));
      Modelica.Blocks.Interfaces.RealInput Compliance annotation(Placement(visible = true, transformation(origin = {0.0957, 88.3047}, extent = {{-20.0, -20.0}, {20.0, 20.0}}, rotation = -90), iconTransformation(origin = {5.0535, 96.446}, extent = {{-11.8243, -11.8243}, {11.8243, 11.8243}}, rotation = -90)));
      Modelica.Blocks.Interfaces.RealOutput Volume(start = InitialVolume) annotation(Placement(visible = true, transformation(origin = {-67.3852, -78.2262}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = -90), iconTransformation(origin = {-70.0, -67.9715}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = -90)));
      Modelica.Blocks.Interfaces.RealOutput Pressure annotation(Placement(visible = true, transformation(origin = {40.0, -80.0}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = -90), iconTransformation(origin = {70.0, -72.5932}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = -90)));
      parameter Real InitialVolume = 100;
    equation
      der(Volume) = bloodFlow.Q;
      Pressure * Compliance = Volume;
      bloodFlow.Pressure = Pressure;
      annotation(Icon(coordinateSystem(extent = {{-100.0, -100.0}, {100.0, 100.0}}, preserveAspectRatio = true, initialScale = 0.1, grid = {10, 10}), graphics={  Ellipse(visible = true, origin = {2.9379, 0.0}, fillColor = {255, 176, 245},
                fillPattern =                                                                                                                                                                                                        FillPattern.Solid, extent = {{-102.9379, -100.0}, {102.9379, 100.0}}), Text(visible = true, origin = {9.6519, -67.3553}, extent = {{-148.0, -81.0}, {152.0, -41.0}}, fontName = "Arial", textString = "%name", lineColor = {0, 0, 0}), Text(visible = true, origin = {117.7696, -2.0682},
                fillPattern =                                                                                                                                                                                                        FillPattern.Solid, extent = {{-100.5547, -50.2773}, {99.1581, -27.9318}}, textString = "P=%Pressure", fontName = "Arial"), Text(visible = true, origin = {-29.1581, -2.0682},
                fillPattern =                                                                                                                                                                                                        FillPattern.Solid, extent = {{-100.5547, -50.2773}, {99.1581, -27.9318}}, textString = "V=%Volume", fontName = "Arial")}), Diagram(coordinateSystem(extent = {{-148.5, -105.0}, {148.5, 105.0}}, preserveAspectRatio = true, initialScale = 0.1, grid = {5, 5}), graphics = {Ellipse(visible = true, origin = {-6.4193, -3.4427}, fillColor = {255, 170, 255}, fillPattern = FillPattern.Solid, extent = {{-56.4193, -53.4427}, {56.4193, 53.4427}}), Line(visible = true, origin = {-58.569, -53.082}, points = {{8.569, 15.3789}, {-8.569, -15.3789}}), Line(visible = true, origin = {32.5, -59.1432}, points = {{-7.5, 10.8568}, {7.5, -10.8568}}), Line(visible = true, origin = {0.0156, 59.0651}, points = {{0.0, 9.0651}, {0.0, -9.0651}})}));
    end BloodElasticCompartmentBasic;

    model BloodElasticCompartment
      "Elastic compartment with zero unpressured volume"
      Frvs.Parts.BloodFlowConnector bloodFlow annotation(Placement(visible = true, transformation(origin = {-5.0, -5.0}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0), iconTransformation(origin = {4.8739, 0.0}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0)));
      Modelica.Blocks.Interfaces.RealInput Compliance "ml/torr" annotation(Placement(visible = true, transformation(origin = {0.0957, 88.3047}, extent = {{-20.0, -20.0}, {20.0, 20.0}}, rotation = -90), iconTransformation(origin = {-54.9465, 86.446}, extent = {{-11.8243, -11.8243}, {11.8243, 11.8243}}, rotation = -90)));
      Modelica.Blocks.Interfaces.RealOutput Volume(start = InitialVolume)
        "volume in ml"                                                                   annotation(Placement(visible = true, transformation(origin = {-67.3852, -78.2262}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = -90), iconTransformation(origin = {-70.0, -67.9715}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = -90)));
      Modelica.Blocks.Interfaces.RealOutput Pressure annotation(Placement(visible = true, transformation(origin = {40.0, -80.0}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = -90), iconTransformation(origin = {70.0, -72.5932}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = -90)));
      Modelica.Blocks.Interfaces.RealInput UnstressedVolume
        "Unstressed volume in ml"                                                     annotation(Placement(visible = true, transformation(origin = {-35.0, 87.5195}, extent = {{-20.0, -20.0}, {20.0, 20.0}}, rotation = -90), iconTransformation(origin = {55.0535, 91.446}, extent = {{-11.8243, -11.8243}, {11.8243, 11.8243}}, rotation = -90)));
      parameter Real InitialVolume = 100;
      Modelica.Blocks.Interfaces.RealOutput StressedVolume
        "Stressed volume in ml"                                                    annotation(Placement(visible = true, transformation(origin = {-10.0, -80.0}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = -90), iconTransformation(origin = {0.0, -97.9715}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = -90)));
    equation
      der(Volume) = bloodFlow.Q;
      Pressure * Compliance = StressedVolume;
      bloodFlow.Pressure = Pressure;
      StressedVolume = max(0, Volume - UnstressedVolume);
      annotation(Icon(coordinateSystem(extent = {{-100.0, -100.0}, {100.0, 100.0}}, preserveAspectRatio = true, initialScale = 0.1, grid = {10, 10}), graphics={  Ellipse(visible = true, origin = {2.9379, 0.0}, fillColor = {255, 176, 245},
                fillPattern =                                                                                                    FillPattern.Solid, extent = {{-102.9379, -100.0}, {102.9379, 100.0}}), Text(visible = true, origin = {9.6519, -67.3553}, extent = {{-148.0, -81.0}, {152.0, -41.0}}, textString = "%name", fontName = "Arial"), Text(visible = true, origin = {-54.9161, 60.0},
                fillPattern =                                                                                                    FillPattern.Solid, extent = {{-7.8409, -8.8149}, {7.8409, 8.8149}}, textString = "C", fontName = "Arial"), Text(visible = true, origin = {54.895, 62.8415},
                fillPattern =                                                                                                    FillPattern.Solid, extent = {{-7.8409, -8.8149}, {7.8409, 8.8149}}, textString = "V", fontName = "Arial")}), Diagram(coordinateSystem(extent = {{-148.5, -105.0}, {148.5, 105.0}}, preserveAspectRatio = true, initialScale = 0.1, grid = {5, 5}), graphics = {Ellipse(visible = true, origin = {-6.4193, -3.4427}, fillColor = {255, 170, 255}, fillPattern = FillPattern.Solid, extent = {{-56.4193, -53.4427}, {56.4193, 53.4427}}), Line(visible = true, origin = {-58.569, -53.082}, points = {{8.569, 15.3789}, {-8.569, -15.3789}}), Line(visible = true, origin = {32.5, -59.1432}, points = {{-7.5, 10.8568}, {7.5, -10.8568}}), Line(visible = true, origin = {0.0156, 59.0651}, points = {{0.0, 9.0651}, {0.0, -9.0651}}), Line(visible = true, origin = {-35.0, 56.084}, points = {{0.0, 13.916}, {0.0, -13.916}}), Line(visible = true, origin = {-10.0, -65.0}, points = {{0.0, 7.5}, {0.0, -7.5}})}));
    end BloodElasticCompartment;

    model HeartPump
      extends Frvs.Parts.BloodFlowOnePort;
      Modelica.Blocks.Interfaces.RealInput StarlingSlope "ml/(torr sec)" annotation(Placement(visible = true, transformation(origin = {0.0, 86.5466}, extent = {{-20.0, -20.0}, {20.0, 20.0}}, rotation = -90), iconTransformation(origin = {0, 90}, extent = {{-11.5666, -11.5666}, {11.5666, 11.5666}}, rotation = -90)));
      parameter Boolean pump = true "true..Q=k*P false..manual";
      Boolean pumpVar = pump;
      parameter Real manualBloodFlow = 5 "blood flow in l/min";
      Modelica.Blocks.Interfaces.RealInput refBloodVolume "ml" annotation(Placement(visible = true, transformation(origin = {-55, 86.5466}, extent = {{-20.0, -20.0}, {20.0, 20.0}}, rotation = -90), iconTransformation(origin = {-80, 60}, extent = {{-11.5666, -11.5666}, {11.5666, 11.5666}}, rotation = -90)));

      Boolean doPump( start = refBloodVolume > 0);
      parameter Real hysteresisVolume = 20;
    equation
      //pumpVar = pump;
      if pumpVar then
        if doPump then
          BloodFlow = manualBloodFlow * 1000 / 60;
        else
          BloodFlow = 1e-3;
        end if;
      else
        BloodFlow = StarlingSlope * Inflow.Pressure;
      end if;

      when refBloodVolume < 0 then
        doPump = false;
      elsewhen refBloodVolume > hysteresisVolume then
        doPump = true;
      end when;

      annotation(Icon(coordinateSystem(extent = {{-100, -100}, {100, 100}}, preserveAspectRatio = true, initialScale = 0.1, grid = {10, 10}), graphics={  Ellipse(visible = true, origin = {0, 1.2494}, fillColor = {255, 170, 255},
                fillPattern =                                                                                                    FillPattern.Solid, extent = {{-95.5726, -98.7506}, {95.5726, 98.7506}}), Polygon(visible = true, origin = {-0.0529, 0.4139}, fillColor = {255, 255, 255}, points = {{-25.0, 24.1954}, {25.0, -24.1954}}), Polygon(visible = true, origin = {-0.0529, 1.2185}, fillColor = {255, 255, 255}, points = {{25.0, 25.0}, {-25.0, -25.0}}), Text(visible = true, origin = {-0.3481, 102.6447}, extent = {{-148.0, -81.0}, {152.0, -41.0}}, textString = "%name", fontName = "Arial")}), Diagram(coordinateSystem(extent = {{-148.5, -105}, {148.5, 105}}, preserveAspectRatio = true, initialScale = 0.1, grid = {5, 5}), graphics={  Ellipse(visible = true, origin = {3.3841, 0.5951}, fillColor = {255, 170, 255},
                fillPattern =                                                                                                                                                                                                        FillPattern.Solid, extent = {{-68.3841, -21.5951}, {68.3841, 21.5951}}), Line(visible = true, origin = {-82.5, 0.0}, points = {{-17.5, 0.0}, {17.5, 0.0}}), Line(visible = true, origin = {86.2148, 0.0}, points = {{-13.7852, 0.0}, {13.7852, 0.0}}), Line(visible = true, origin = {0.0, 53.9102}, points = {{0.0, 31.09}, {0.0, -31.09}})}));
    end HeartPump;

    model BloodFlowMeter
      extends BloodFlowOnePort;
      Modelica.Blocks.Interfaces.RealOutput BloodFlowPerMin annotation(Placement(transformation(extent = {{12, -94}, {32, -74}}), iconTransformation(extent = {{-10, -10}, {10, 10}}, rotation = 270, origin = {4, -84})));
    equation
      BloodFlowPerMin = 60 * Inflow.Q;
      PressureDrop = 0;
      annotation(Icon(graphics={  Ellipse(extent = {{-92, 96}, {92, -82}}, lineColor = {0, 0, 255},
                lineThickness =                                                                                     1)}));
    end BloodFlowMeter;

    model BloodVolume
      Modelica.Blocks.Interfaces.RealOutput v1 annotation(Placement(visible = true, transformation(origin = {70.0, 58.1662}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0), iconTransformation(origin = {60.0, 74.8458}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0)));
      Modelica.Blocks.Interfaces.RealInput V0 annotation(Placement(visible = true, transformation(origin = {-58.1456, 0.0}, extent = {{-20.0, -20.0}, {20.0, 20.0}}, rotation = 0), iconTransformation(origin = {-60.0, 0.0}, extent = {{-20.0, -20.0}, {20.0, 20.0}}, rotation = 0)));
      Modelica.Blocks.Interfaces.RealOutput v2 annotation(Placement(visible = true, transformation(origin = {70, 40}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0), iconTransformation(origin = {60, 23.7798}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0)));
      Modelica.Blocks.Interfaces.RealOutput v3 annotation(Placement(visible = true, transformation(origin = {70, 20}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0), iconTransformation(origin = {60.0, -25.9238}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0)));
      Modelica.Blocks.Interfaces.RealOutput v4 annotation(Placement(visible = true, transformation(origin = {70, -2.2608}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0), iconTransformation(origin = {60, -76.8666}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0)));
      parameter Real pv = 400 / 3800;
      parameter Real sa = 486 / 3800;
      parameter Real sv = 2614 / 3800;
      parameter Real pa = 300 / 3800;
    equation
      v1 = V0 * pa;
      v2 = V0 * pv;
      v3 = V0 * sa;
      v4 = V0 * sv;
      annotation(Diagram(coordinateSystem(extent = {{-148.5, -105}, {148.5, 105}}, preserveAspectRatio = true, initialScale = 0.1, grid = {5, 5}), graphics), Icon(graphics));
    end BloodVolume;

    model TotalBloodVolume
      Modelica.Blocks.Interfaces.RealInput u annotation(Placement(transformation(extent = {{-70, 60}, {-30, 100}})));
      Modelica.Blocks.Interfaces.RealInput u1 annotation(Placement(transformation(extent = {{-64, -4}, {-24, 36}})));
      Modelica.Blocks.Interfaces.RealInput u2 annotation(Placement(transformation(extent = {{-62, -54}, {-22, -14}})));
      Modelica.Blocks.Interfaces.RealInput u3 annotation(Placement(transformation(extent = {{-62, -104}, {-22, -64}})));
      BloodFlowConnector bloodFlowConnector annotation(Placement(transformation(extent = {{80, -8}, {100, 12}})));
      Modelica.Blocks.Interfaces.RealOutput BloodVolume annotation(Placement(transformation(extent = {{74, -58}, {94, -38}})));
      Modelica.Blocks.Interfaces.RealInput DesiredBloodVolume annotation(Placement(transformation(extent = {{-20, -20}, {20, 20}}, rotation = 90, origin = {40, -92})));
      Real totalBloodVolume;
      //parameter Real DesiredBloodVolume = 5637;
    equation
      u + u1 + u2 + u3 = totalBloodVolume;
      bloodFlowConnector.Q = totalBloodVolume - DesiredBloodVolume;
      BloodVolume = totalBloodVolume;
      annotation(Diagram(graphics));
    end TotalBloodVolume;

    model bodySurface
      Modelica.Blocks.Interfaces.RealInput bodyWeight "body weight [kg]" annotation(Placement(transformation(extent = {{-92, 34}, {-52, 74}}), iconTransformation(extent = {{-92, 34}, {-52, 74}})));
      Modelica.Blocks.Interfaces.RealInput bodyHeight "body height [cm]" annotation(Placement(transformation(extent = {{-92, -68}, {-52, -28}}), iconTransformation(extent = {{-92, -68}, {-52, -28}})));
      Modelica.Blocks.Interfaces.RealOutput bodySurface annotation(Placement(transformation(extent = {{76, -10}, {96, 10}}), iconTransformation(extent = {{76, -10}, {96, 10}})));
    equation
      bodySurface = 0.007184 * bodyWeight ^ 0.425 * bodyHeight ^ 0.725;
      annotation(Icon(graphics={  Text(extent = {{-10, 44}, {-58, 62}}, lineColor = {0, 0, 255}, textString = "BW"), Text(extent = {{-12, -58}, {-60, -40}}, lineColor = {0, 0, 255}, textString = "BH"), Text(extent = {{74, -10}, {26, 8}}, lineColor = {0, 0, 255}, textString = "BS"), Rectangle(extent = {{-88, 92}, {92, -88}}, lineColor = {0, 0, 255},
                lineThickness =                                                                                                    0.5)}));
    end bodySurface;

    model BMI "body mass index"
      Modelica.Blocks.Interfaces.RealInput weight "weight in kg" annotation(Placement(transformation(extent = {{-80, 40}, {-40, 80}}), iconTransformation(extent = {{-80, 40}, {-40, 80}})));
      Modelica.Blocks.Interfaces.RealInput height "height in cm" annotation(Placement(transformation(extent = {{-80, -80}, {-40, -40}}), iconTransformation(extent = {{-80, -80}, {-40, -40}})));
      Modelica.Blocks.Interfaces.RealOutput bmi annotation(Placement(transformation(extent = {{60, -10}, {80, 10}}), iconTransformation(extent = {{60, -10}, {80, 10}})));
    equation
      bmi = weight / (height / 100) ^ 2;
      annotation(Diagram(graphics), Icon(coordinateSystem(preserveAspectRatio = false, extent = {{-100, -100}, {100, 100}}), graphics={  Rectangle(extent = {{-80, 100}, {80, -100}}, lineColor = {0, 0, 255},
                lineThickness =                                                                                                    0.5), Text(extent = {{-70, 88}, {-60, 78}}, lineColor = {0, 0, 255},
                lineThickness =                                                                                                    0.5, textString = "W"), Text(extent = {{-70, -32}, {-60, -42}}, lineColor = {0, 0, 255},
                lineThickness =                                                                                                    0.5, textString = "H"), Text(extent = {{46, 24}, {70, 10}}, lineColor = {0, 0, 255},
                lineThickness =                                                                                                    0.5, textString = "BMI"), Text(extent = {{-62, 20}, {34, -26}}, lineColor = {0, 0, 255}, fillColor = {255, 170, 170},
                fillPattern =                                                                                                    FillPattern.Solid, textString = "BMI")}));
    end BMI;

    model NormalBloodVolume
      Modelica.Blocks.Interfaces.RealInput bw annotation(Placement(transformation(extent = {{-40, 0}, {0, 40}}), iconTransformation(extent = {{-40, 0}, {0, 40}})));
      Modelica.Blocks.Interfaces.RealInput bh annotation(Placement(transformation(extent = {{-40, -60}, {0, -20}}), iconTransformation(extent = {{-40, -60}, {0, -20}})));
      Modelica.Blocks.Interfaces.RealOutput bV annotation(Placement(transformation(extent = {{34, -10}, {54, 10}})));
    equation
      bV = 1000 * (0.3669 * (0.01 * bh) ^ 3 + 0.03219 * bw + 0.6041);
      annotation(Diagram(graphics), Icon(graphics={  Rectangle(extent = {{-40, 60}, {54, -80}}, lineColor = {0, 0, 255}), Text(extent = {{-38, 88}, {50, 54}}, lineColor = {0, 0, 255}, textString = "NormalBloodVolume"), Text(extent = {{4, 28}, {52, 12}}, lineColor = {0, 0, 255}, textString = "bw",
                horizontalAlignment =                                                                                                    TextAlignment.Left), Text(extent = {{4, -32}, {52, -50}}, lineColor = {0, 0, 255}, textString = "bh",
                horizontalAlignment =                                                                                                    TextAlignment.Left)}));
    end NormalBloodVolume;
  end Parts;

  package Test
    model SimpleCirculationWithoutUnstressedVolume
      "Simple cirtculation with zero unstressed volumes"
      Parts.HeartPump RightHeart annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}}, rotation = 90, origin = {-68, 20})));
      Parts.HeartPump LeftHeart annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}}, rotation = 270, origin = {40, 20})));
      Parts.BloodElasticCompartmentBasic PlumonaryArteries(InitialVolume = 44) annotation(Placement(transformation(extent = {{-64, 46}, {-44, 66}})));
      Parts.BloodElasticCompartmentBasic PlumonaryVeins(InitialVolume = 263) annotation(Placement(transformation(extent = {{10, 46}, {30, 66}})));
      Frvs.Parts.BloodElasticCompartmentBasic SystemArteries(InitialVolume = 140) annotation(Placement(transformation(extent = {{10.0, -44.0}, {30.0, -24.0}}, origin = {0.0, 0.0}, rotation = 0), visible = true));
      Parts.BloodElasticCompartmentBasic SystemVeins(InitialVolume = 1054) annotation(Placement(transformation(extent = {{-68, -40}, {-48, -20}})));
      Parts.VariableBloodResistor TotalSystemicResistance annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}}, rotation = 180, origin = {-14, -56})));
      Parts.VariableBloodResistor TotalPulmonaryResistance annotation(Placement(transformation(extent = {{-26, 60}, {-6, 80}})));
      Modelica.Blocks.Sources.Constant KRH(k = 16.67) annotation(Placement(transformation(extent = {{-100.0, 13.0}, {-86.0, 27.0}}, origin = {3.0, 0.0}, rotation = 0), visible = true));
      Modelica.Blocks.Sources.Constant KLH(k = 10) annotation(Placement(transformation(extent = {{-7.0, -7.0}, {7.0, 7.0}}, rotation = 180, origin = {67.0, 20.0}), visible = true));
      Modelica.Blocks.Sources.Constant RT(k = 1) annotation(Placement(transformation(extent = {{-7.0, -7.0}, {7.0, 7.0}}, rotation = 180, origin = {7.0, -73.0}), visible = true));
      Modelica.Blocks.Sources.Constant RP(k = 0.07) annotation(Placement(transformation(extent = {{-7.0, -7.0}, {7.0, 7.0}}, rotation = 180, origin = {7.0, 87.0}), visible = true));
      Modelica.Blocks.Sources.Constant CAS(k = 1.5) annotation(Placement(transformation(extent = {{0.0, -17.0}, {14.0, -3.0}}, origin = {0.0, -0.0}, rotation = 0), visible = true));
      Modelica.Blocks.Sources.Constant CVS(k = 200) annotation(Placement(transformation(extent = {{-7, -7}, {7, 7}}, rotation = 180, origin = {-31, -10})));
      Modelica.Blocks.Sources.Constant CAP(k = 3.01) annotation(Placement(transformation(extent = {{-7.0, -7.0}, {7.0, 7.0}}, rotation = 0, origin = {-67.0, 80.0}), visible = true));
      Modelica.Blocks.Sources.Constant CVP(k = 30) annotation(Placement(transformation(extent = {{-7, -7}, {7, 7}}, rotation = 180, origin = {47, 74})));
      Parts.BloodFlowMeter bloodFlowMeter annotation(Placement(transformation(extent = {{-5.5, -6.5}, {5.5, 6.5}}, rotation = 90, origin = {-75.5, -3.5})));
    equation
      connect(TotalSystemicResistance.Inflow, SystemArteries.bloodFlow) annotation(Line(visible = true, points = {{-4, -56}, {6, -56}, {6, -34}, {20.4874, -34}}, thickness = 1));
      connect(SystemArteries.bloodFlow, LeftHeart.Outflow) annotation(Line(visible = true, points = {{20.4874, -34}, {40, -34}, {40, 10}}, thickness = 1));
      connect(SystemArteries.Compliance, CAS.y) annotation(Line(visible = true, origin = {18.5702, -14.7851}, points = {{1.93515, -9.5703}, {1.93515, 4.7851}, {-3.8702, 4.7851}}, color = {0, 0, 127}));
      connect(RT.y, TotalSystemicResistance.BloodResistance) annotation(Line(visible = true, origin = {-9.5667, -70.4189}, points = {{8.8667, -2.5811}, {-4.4333, -2.5811}, {-4.4333, 5.16205}}, color = {0, 0, 127}));
      connect(RP.y, TotalPulmonaryResistance.BloodResistance) annotation(Line(visible = true, origin = {-10.9, 84.4189}, points = {{10.2, 2.5811}, {-5.1, 2.5811}, {-5.1, -5.16205}}, color = {0, 0, 127}));
      connect(LeftHeart.StarlingSlope, KLH.y) annotation(Line(visible = true, points = {{50, 20}, {56.65, 20}, {56.65, 20}, {59.3, 20}}, color = {0, 0, 127}));
      connect(PlumonaryArteries.Compliance, CAP.y) annotation(Line(visible = true, origin = {-55.4298, 75.2149}, points = {{1.93515, -9.5703}, {1.93515, 4.7851}, {-3.8702, 4.7851}}, color = {0, 0, 127}));
      connect(KRH.y, RightHeart.StarlingSlope) annotation(Line(visible = true, origin = {-80.15, 20.0}, points = {{-2.15, 0}, {2.15, 0}}, color = {0, 0, 127}));
      connect(CVS.y, SystemVeins.Compliance) annotation(Line(points = {{-38.7, -10}, {-57.4947, -10}, {-57.4947, -20.3554}}, color = {0, 0, 127}, smooth = Smooth.None));
      connect(PlumonaryVeins.Compliance, CVP.y) annotation(Line(points = {{20.5054, 65.6446}, {20.5054, 74}, {39.3, 74}}, color = {0, 0, 127}, smooth = Smooth.None));
      connect(PlumonaryArteries.bloodFlow, TotalPulmonaryResistance.Inflow) annotation(Line(points = {{-53.5126, 56}, {-42, 56}, {-42, 70}, {-26, 70}}, color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
      connect(PlumonaryVeins.bloodFlow, TotalPulmonaryResistance.Outflow) annotation(Line(points = {{20.4874, 56}, {4, 56}, {4, 70}, {-6, 70}}, color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
      connect(LeftHeart.Inflow, PlumonaryVeins.bloodFlow) annotation(Line(points = {{40, 30}, {40, 56}, {20.4874, 56}}, color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
      connect(RightHeart.Outflow, PlumonaryArteries.bloodFlow) annotation(Line(points = {{-68, 30}, {-68, 56}, {-53.5126, 56}}, color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
      connect(SystemVeins.bloodFlow, TotalSystemicResistance.Outflow) annotation(Line(points = {{-57.5126, -30}, {-34, -30}, {-34, -56}, {-24, -56}}, color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
      connect(SystemVeins.bloodFlow, bloodFlowMeter.Inflow) annotation(Line(points = {{-57.5126, -30}, {-75.5, -30}, {-75.5, -9}}, color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
      connect(bloodFlowMeter.Outflow, RightHeart.Inflow) annotation(Line(points = {{-75.5, 2}, {-68, 2}, {-68, 10}}, color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
      annotation(Diagram(graphics));
    end SimpleCirculationWithoutUnstressedVolume;

    model SimpleCirculationWithUnstressedVolume
      "Simple cirtculation with zero unstressed volumes"
      Frvs.Parts.HeartPump RightHeart annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}}, rotation = 90, origin = {-68, 20})));
      Frvs.Parts.HeartPump LeftHeart annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}}, rotation = 270, origin = {40, 20})));
      Frvs.Parts.VariableBloodResistor TotalSystemicResistance annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}}, rotation = 180, origin = {-14, -56})));
      Frvs.Parts.VariableBloodResistor TotalPulmonaryResistance annotation(Placement(transformation(extent = {{-26, 60}, {-6, 80}})));
      Modelica.Blocks.Sources.Constant KRH(k = 16.67) annotation(Placement(transformation(extent = {{-100.0, 13.0}, {-86.0, 27.0}}, origin = {3.0, 0.0}, rotation = 0), visible = true));
      Modelica.Blocks.Sources.Constant KLH(k = 10) annotation(Placement(transformation(extent = {{-7.0, -7.0}, {7.0, 7.0}}, rotation = 180, origin = {67.0, 20.0}), visible = true));
      Modelica.Blocks.Sources.Constant RT(k = 1) annotation(Placement(transformation(extent = {{-7.0, -7.0}, {7.0, 7.0}}, rotation = 180, origin = {7.0, -73.0}), visible = true));
      Modelica.Blocks.Sources.Constant RP(k = 0.07) annotation(Placement(transformation(extent = {{-7.0, -7.0}, {7.0, 7.0}}, rotation = 180, origin = {7.0, 87.0}), visible = true));
      Modelica.Blocks.Sources.Constant CAS(k = 1.5) annotation(Placement(transformation(extent = {{0.0, -17.0}, {14.0, -3.0}}, origin = {74.0, -53.0}, rotation = -180), visible = true));
      Modelica.Blocks.Sources.Constant CVS(k = 200) annotation(Placement(transformation(extent = {{-7.0, -7.0}, {7.0, 7.0}}, rotation = 0, origin = {-91.0, -27.0}), visible = true));
      Modelica.Blocks.Sources.Constant CAP(k = 3.01) annotation(Placement(transformation(extent = {{-7.0, -7.0}, {7.0, 7.0}}, rotation = 0, origin = {-67.0, 80.0}), visible = true));
      Modelica.Blocks.Sources.Constant CVP(k = 30) annotation(Placement(transformation(extent = {{-7, -7}, {7, 7}}, rotation = 180, origin = {47, 74})));
      Frvs.Parts.BloodFlowMeter bloodFlowMeter annotation(Placement(transformation(extent = {{-5.5, -6.5}, {5.5, 6.5}}, rotation = 90, origin = {-75.5, -3.5})));
      Frvs.Parts.BloodElasticCompartment PlumonaryArteries(InitialVolume = 370) annotation(Placement(visible = true, transformation(origin = {-50.0, 48.3018}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0)));
      Frvs.Parts.BloodElasticCompartment SystemVeins(InitialVolume = 3900) annotation(Placement(visible = true, transformation(origin = {-75.5378, -55.5305}, extent = {{10.0, 10.0}, {-10.0, -10.0}}, rotation = 180)));
      Frvs.Parts.BloodElasticCompartment SystemArteries(InitialVolume = 670) annotation(Placement(visible = true, transformation(origin = {40.0, -57.2238}, extent = {{10.0, -10.0}, {-10.0, 10.0}}, rotation = 0)));
      Frvs.Parts.BloodElasticCompartment PlumonaryVeins(InitialVolume = 700) annotation(Placement(visible = true, transformation(origin = {23.9971, 46.4559}, extent = {{10.0, -10.0}, {-10.0, 10.0}}, rotation = 0)));
      Frvs.Parts.BloodVolume bloodVolume1 annotation(Placement(visible = true, transformation(origin = {-10.0, 0.0}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0)));
      Modelica.Blocks.Sources.Constant V0(k = 4137) annotation(Placement(visible = true, transformation(origin = {50.0, -20.0}, extent = {{-100.0, 13.0}, {-86.0, 27.0}}, rotation = 0)));
      Parts.TotalBloodVolume totalBloodVolume annotation(Placement(transformation(extent = {{-70, -30}, {-50, -10}})));
    equation
      connect(V0.y, bloodVolume1.V0) annotation(Line(visible = true, origin = {-25.65, 0.0}, points = {{-9.65, 8.88178e-016}, {-1.77636e-015, 8.88178e-016}, {-1.77636e-015, 0}, {9.65, 0}}, color = {0, 0, 127}));
      connect(SystemVeins.bloodFlow, TotalSystemicResistance.Outflow) annotation(Line(visible = true, origin = {-37.8688, -52.9218}, points = {{-37.1816, -2.6087}, {1.2579, -3.0782}, {10.8688, -3.0782}, {13.8688, -3.0782}}, thickness = 1));
      connect(CVS.y, SystemVeins.Compliance) annotation(Line(visible = true, origin = {-81.193, -37.1844}, points = {{-2.107, 10.1844}, {0.893, 10.1844}, {0.893, -5.3336}, {0.16055, -5.3336}, {0.16055, -9.7015}}, color = {0, 0, 127}));
      connect(bloodFlowMeter.Inflow, SystemVeins.bloodFlow) annotation(Line(visible = true, origin = {-72.5911, -31.7621}, points = {{-2.9089, 22.7621}, {-2.9089, 1.0876}, {-2.9089, -23.7684}, {-2.45931, -23.7684}}, thickness = 1));
      connect(bloodVolume1.v3, SystemArteries.UnstressedVolume) annotation(Line(visible = true, origin = {26.5347, -19.3902}, points = {{-30.5347, 16.7978}, {7.3074, 16.7978}, {7.3074, -2.4533}, {7.95995, -2.4533}, {7.95995, -28.689}}, color = {0, 0, 127}));
      connect(bloodVolume1.v1, PlumonaryArteries.UnstressedVolume) annotation(Line(visible = true, origin = {-28.466, 49.211}, points = {{24.466, -41.7264}, {24.466, 12.6277}, {-16.4517, 12.6277}, {-16.4517, 8.2354}, {-16.0286, 8.2354}}, color = {0, 0, 127}));
      connect(CAS.y, SystemArteries.Compliance) annotation(Line(visible = true, origin = {50.0964, -44.8597}, points = {{9.2036, 1.8597}, {-4.60175, 1.8597}, {-4.60175, -3.7195}}, color = {0, 0, 127}));
      connect(SystemArteries.bloodFlow, LeftHeart.Outflow) annotation(Line(visible = true, origin = {39.7563, -8.306}, points = {{-0.24369, -48.9178}, {-0.24369, 15.306}, {0.2437, 15.306}, {0.2437, 18.306}}, thickness = 1));
      connect(TotalSystemicResistance.Inflow, SystemArteries.bloodFlow) annotation(Line(visible = true, origin = {22.0781, -56.6119}, points = {{-26.0781, 0.6119}, {4.3218, 0.6119}, {4.3218, -0.6119}, {17.4345, -0.6119}}, thickness = 1));
      connect(TotalPulmonaryResistance.Outflow, PlumonaryVeins.bloodFlow) annotation(Line(visible = true, origin = {16.312, 58.228}, points = {{-22.312, 11.772}, {7.0698, 11.772}, {7.0698, -11.7721}, {7.19771, -11.7721}}, thickness = 1));
      connect(LeftHeart.Inflow, PlumonaryVeins.bloodFlow) annotation(Line(visible = true, origin = {32.2422, 42.1881}, points = {{7.7578, -12.1881}, {7.7578, 3.9602}, {-8.73249, 3.9602}, {-8.73249, 4.2678}}, thickness = 1));
      connect(PlumonaryArteries.bloodFlow, RightHeart.Outflow) annotation(Line(visible = true, origin = {-61.8375, 42.2012}, points = {{12.3249, 6.1006}, {-6.1625, 6.1006}, {-6.1625, -12.2012}}, thickness = 1));
      connect(TotalPulmonaryResistance.Inflow, PlumonaryArteries.bloodFlow) annotation(Line(visible = true, origin = {-45.005, 56.4987}, points = {{19.005, 13.5013}, {-4.995, 13.5013}, {-4.995, -9.4029}, {-4.50761, -9.4029}, {-4.50761, -8.1969}}, thickness = 1));
      connect(CAP.y, PlumonaryArteries.Compliance) annotation(Line(visible = true, origin = {-56.7631, 72.3155}, points = {{-2.5369, 7.6845}, {1.26845, 7.6845}, {1.26845, -15.3691}}, color = {0, 0, 127}));
      connect(RT.y, TotalSystemicResistance.BloodResistance) annotation(Line(visible = true, origin = {-9.5667, -70.4189}, points = {{8.8667, -2.5811}, {-4.4333, -2.5811}, {-4.4333, 5.16205}}, color = {0, 0, 127}));
      connect(RP.y, TotalPulmonaryResistance.BloodResistance) annotation(Line(visible = true, origin = {-10.9, 84.4189}, points = {{10.2, 2.5811}, {-5.1, 2.5811}, {-5.1, -5.16205}}, color = {0, 0, 127}));
      connect(LeftHeart.StarlingSlope, KLH.y) annotation(Line(visible = true, points = {{50, 20}, {56.65, 20}, {56.65, 20}, {59.3, 20}}, color = {0, 0, 127}));
      connect(KRH.y, RightHeart.StarlingSlope) annotation(Line(visible = true, origin = {-80.15, 20.0}, points = {{-2.15, 0}, {2.15, 0}}, color = {0, 0, 127}));
      connect(bloodFlowMeter.Outflow, RightHeart.Inflow) annotation(Line(points = {{-75.5, 2}, {-68, 2}, {-68, 10}}, color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
      connect(totalBloodVolume.bloodFlowConnector, SystemVeins.bloodFlow) annotation(Line(points = {{-51, -19.8}, {-40, -19.8}, {-40, -55.5305}, {-75.0504, -55.5305}}, color = {0, 0, 0}, smooth = Smooth.None, thickness = 0.5));
      connect(CVP.y, PlumonaryVeins.Compliance) annotation(Line(points = {{39.3, 74}, {39.3, 67}, {29.4918, 67}, {29.4918, 55.1005}}, color = {0, 0, 127}, thickness = 0.5, smooth = Smooth.None));
      connect(totalBloodVolume.u, PlumonaryArteries.Volume) annotation(Line(points = {{-65, -12}, {-65, 14}, {-57, 14}, {-57, 41.5046}}, color = {0, 0, 127}, smooth = Smooth.None));
      connect(totalBloodVolume.u1, PlumonaryVeins.Volume) annotation(Line(points = {{-64.4, -18.4}, {-17.2, -18.4}, {-17.2, 39.6587}, {30.9971, 39.6587}}, color = {0, 0, 127}, smooth = Smooth.None));
      connect(totalBloodVolume.u2, SystemArteries.Volume) annotation(Line(points = {{-64.2, -23.4}, {-7.1, -23.4}, {-7.1, -64.0209}, {47, -64.0209}}, color = {0, 0, 127}, smooth = Smooth.None));
      connect(totalBloodVolume.u3, SystemVeins.Volume) annotation(Line(points = {{-64.2, -28.4}, {-64.2, -44.2}, {-82.5378, -44.2}, {-82.5378, -62.3277}}, color = {0, 0, 127}, smooth = Smooth.None));
      connect(bloodVolume1.v2, PlumonaryVeins.UnstressedVolume) annotation(Line(points = {{-4, 2.37798}, {-4, 31.189}, {18.4918, 31.189}, {18.4918, 55.6005}}, color = {0, 0, 127}, smooth = Smooth.None));
      connect(bloodVolume1.v4, SystemVeins.UnstressedVolume) annotation(Line(points = {{-4, -7.68666}, {-37, -7.68666}, {-37, -46.3859}, {-70.0324, -46.3859}}, color = {0, 0, 127}, smooth = Smooth.None));
      annotation(Diagram(coordinateSystem(extent = {{-100, -100}, {100, 100}}, preserveAspectRatio = true, initialScale = 0.1, grid = {10, 10}), graphics));
    end SimpleCirculationWithUnstressedVolume;
  end Test;

  model SimpleCirculation "Simple cirtculation with zero unstressed volumes"
    Parts.HeartPump RightHeart annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}}, rotation = 90, origin = {-74, 20})));
    Parts.HeartPump LeftHeart annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}}, rotation = 270, origin = {40, 20})));
    Parts.VariableBloodResistor TotalSystemicResistance annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}}, rotation = 180, origin = {-14, -56})));
    Parts.VariableBloodResistor TotalPulmonaryResistance annotation(Placement(transformation(extent = {{-26, 60}, {-6, 80}})));
    Modelica.Blocks.Sources.Constant KRH(k = 16.67) annotation(Placement(transformation(extent = {{-100.0, 13.0}, {-86.0, 27.0}}, origin = {-16, 0}, rotation = 0), visible = true));
    Modelica.Blocks.Sources.Constant KLH(k = 10) annotation(Placement(transformation(extent = {{-7.0, -7.0}, {7.0, 7.0}}, rotation = 180, origin = {69, 20}), visible = true));
    Modelica.Blocks.Sources.Constant RT(k = 1) annotation(Placement(transformation(extent = {{-7.0, -7.0}, {7.0, 7.0}}, rotation = 180, origin = {2, -84}), visible = true));
    Modelica.Blocks.Sources.Constant RP(k = 0.07) annotation(Placement(transformation(extent = {{-7.0, -7.0}, {7.0, 7.0}}, rotation = 180, origin = {8, 83}), visible = true));
    Modelica.Blocks.Sources.Constant CAS(k = 1.5) annotation(Placement(transformation(extent = {{0.0, -17.0}, {14.0, -3.0}}, origin = {75, -50}, rotation = -180), visible = true));
    Modelica.Blocks.Sources.Constant CVS(k = 200) annotation(Placement(transformation(extent = {{-7.0, -7.0}, {7.0, 7.0}}, rotation = 0, origin = {-109, -28}), visible = true));
    Modelica.Blocks.Sources.Constant CAP(k = 3.01) annotation(Placement(transformation(extent = {{-7.0, -7.0}, {7.0, 7.0}}, rotation = 0, origin = {-109, 73}), visible = true));
    Modelica.Blocks.Sources.Constant CVP(k = 30) annotation(Placement(transformation(extent = {{-7, -7}, {7, 7}}, rotation = 180, origin = {68, 63})));
    Parts.BloodElasticCompartment PlumonaryArteries(InitialVolume = 370) annotation(Placement(visible = true, transformation(origin = {-50.0, 48.3018}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0)));
    Parts.BloodElasticCompartment SystemVeins(InitialVolume = 3900) annotation(Placement(visible = true, transformation(origin = {-75.5378, -55.5305}, extent = {{10.0, 10.0}, {-10.0, -10.0}}, rotation = 180)));
    Parts.BloodElasticCompartment SystemArteries(InitialVolume = 670) annotation(Placement(visible = true, transformation(origin = {40.0, -57.2238}, extent = {{10.0, -10.0}, {-10.0, 10.0}}, rotation = 0)));
    Parts.BloodElasticCompartment PlumonaryVeins(InitialVolume = 700) annotation(Placement(visible = true, transformation(origin = {23.9971, 46.4559}, extent = {{10.0, -10.0}, {-10.0, 10.0}}, rotation = 0)));
    Parts.BloodVolume bloodVolume1 annotation(Placement(visible = true, transformation(origin = {2, 0}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0)));
    Modelica.Blocks.Sources.Constant V0(k = 4137) annotation(Placement(visible = true, transformation(origin = {75, -20}, extent = {{-100.0, 13.0}, {-86.0, 27.0}}, rotation = 0)));
    Parts.TotalBloodVolume totalBloodVolume annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}}, rotation = 270, origin = {-52, -29})));
  equation
    connect(V0.y, bloodVolume1.V0) annotation(Line(visible = true, origin = {-25.65, 0.0}, points = {{15.35, 8.88178e-016}, {-1.77636e-015, 8.88178e-016}, {-1.77636e-015, 0}, {21.65, 0}}, color = {0, 0, 127}));
    connect(SystemVeins.bloodFlow, TotalSystemicResistance.Outflow) annotation(Line(visible = true, origin = {-37.8688, -52.9218}, points = {{-37.1816, -2.6087}, {1.2579, -3.0782}, {10.8688, -3.0782}, {13.8688, -3.0782}}, thickness = 1));
    connect(CVS.y, SystemVeins.Compliance) annotation(Line(visible = true, origin = {-81.193, -37.1844}, points = {{-20.107, 9.1844}, {0.893, 9.1844}, {0.893, -5.3336}, {0.16055, -5.3336}, {0.16055, -9.7015}}, color = {0, 0, 127}));
    connect(bloodVolume1.v3, SystemArteries.UnstressedVolume) annotation(Line(visible = true, origin = {26.5347, -19.3902}, points = {{-18.5347, 16.7978}, {7.3074, 16.7978}, {7.3074, -2.4533}, {7.95995, -2.4533}, {7.95995, -28.689}}, color = {0, 0, 127}));
    connect(CAS.y, SystemArteries.Compliance) annotation(Line(visible = true, origin = {50.0964, -44.8597}, points = {{10.2036, 4.8597}, {-4.60175, 4.8597}, {-4.60175, -3.7195}}, color = {0, 0, 127}));
    connect(TotalSystemicResistance.Inflow, SystemArteries.bloodFlow) annotation(Line(visible = true, origin = {22.0781, -56.6119}, points = {{-26.0781, 0.6119}, {4.3218, 0.6119}, {4.3218, -0.6119}, {17.4345, -0.6119}}, thickness = 1));
    connect(TotalPulmonaryResistance.Outflow, PlumonaryVeins.bloodFlow) annotation(Line(visible = true, origin = {16.312, 58.228}, points = {{-22.312, 11.772}, {7.0698, 11.772}, {7.0698, -11.7721}, {7.19771, -11.7721}}, thickness = 1));
    connect(LeftHeart.Inflow, PlumonaryVeins.bloodFlow) annotation(Line(visible = true, origin = {32.2422, 42.1881}, points = {{7.7578, -12.1881}, {7.7578, 3.9602}, {-8.73249, 3.9602}, {-8.73249, 4.2678}}, thickness = 1));
    connect(PlumonaryArteries.bloodFlow, RightHeart.Outflow) annotation(Line(visible = true, origin = {-61.8375, 42.2012}, points = {{12.3249, 6.1006}, {-12.1625, 6.1006}, {-12.1625, -12.2012}}, thickness = 1));
    connect(TotalPulmonaryResistance.Inflow, PlumonaryArteries.bloodFlow) annotation(Line(visible = true, origin = {-45.005, 56.4987}, points = {{19.005, 13.5013}, {-4.995, 13.5013}, {-4.995, -9.4029}, {-4.50761, -9.4029}, {-4.50761, -8.1969}}, thickness = 1));
    connect(CAP.y, PlumonaryArteries.Compliance) annotation(Line(visible = true, origin = {-56.7631, 72.3155}, points = {{-44.5369, 0.6845}, {1.26845, 0.6845}, {1.26845, -15.3691}}, color = {0, 0, 127}));
    connect(RT.y, TotalSystemicResistance.BloodResistance) annotation(Line(visible = true, origin = {-9.5667, -70.4189}, points = {{3.8667, -13.5811}, {-4.4333, -13.5811}, {-4.4333, 5.16205}}, color = {0, 0, 127}));
    connect(RP.y, TotalPulmonaryResistance.BloodResistance) annotation(Line(visible = true, origin = {-10.9, 84.4189}, points = {{11.2, -1.4189}, {-5.1, -1.4189}, {-5.1, -5.16205}}, color = {0, 0, 127}));
    connect(LeftHeart.StarlingSlope, KLH.y) annotation(Line(visible = true, points = {{49, 20}, {55.65, 20}, {55.65, 20}, {61.3, 20}}, color = {0, 0, 127}));
    connect(KRH.y, RightHeart.StarlingSlope) annotation(Line(visible = true, origin = {-80.15, 20.0}, points = {{-21.15, 0}, {-21.15, 0}, {-2.85, 0}}, color = {0, 0, 127}));
    connect(CVP.y, PlumonaryVeins.Compliance) annotation(Line(points = {{60.3, 63}, {29.4918, 63}, {29.4918, 55.1005}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(totalBloodVolume.bloodFlowConnector, SystemVeins.bloodFlow) annotation(Line(points = {{-51.8, -38}, {-53, -38}, {-53, -50}, {-75.0504, -50}, {-75.0504, -55.5305}}, color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
    connect(SystemVeins.Volume, totalBloodVolume.u3) annotation(Line(points = {{-82.5378, -62.3277}, {-96, -62.3277}, {-96, -13}, {-60.4, -13}, {-60.4, -24.8}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(SystemArteries.Volume, totalBloodVolume.u2) annotation(Line(points = {{47, -64.0209}, {47, -96}, {-98, -96}, {-98, -15}, {-55.4, -15}, {-55.4, -24.8}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(PlumonaryArteries.Volume, totalBloodVolume.u) annotation(Line(points = {{-57, 41.5046}, {-57, 28}, {-45, 28}, {-45, -24}, {-44, -24}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(PlumonaryVeins.Volume, totalBloodVolume.u1) annotation(Line(points = {{30.9971, 39.6587}, {30.9971, 29}, {-50.4, 29}, {-50.4, -24.6}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(bloodVolume1.v4, SystemVeins.UnstressedVolume) annotation(Line(points = {{8, -7.68666}, {5, -7.68666}, {5, -45}, {-70.0324, -45}, {-70.0324, -46.3859}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(bloodVolume1.v1, PlumonaryArteries.UnstressedVolume) annotation(Line(points = {{8, 7.48458}, {3, 7.48458}, {3, 58}, {-44.4947, 58}, {-44.4947, 57.4464}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(bloodVolume1.v2, PlumonaryVeins.UnstressedVolume) annotation(Line(points = {{8, 2.37798}, {10, 2.37798}, {10, 55.6005}, {18.4918, 55.6005}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(RightHeart.Inflow, SystemVeins.bloodFlow) annotation(Line(points = {{-74, 10}, {-74, -55.5305}, {-75.0504, -55.5305}}, color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
    connect(LeftHeart.Outflow, SystemArteries.bloodFlow) annotation(Line(points = {{40, 10}, {40, -23.6119}, {40, -57.2238}, {39.5126, -57.2238}}, color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
    annotation(Diagram(coordinateSystem(extent = {{-150, -150}, {150, 150}}, preserveAspectRatio = false, initialScale = 0.1, grid = {1, 1}), graphics), Icon(coordinateSystem(preserveAspectRatio = true, extent = {{-150, -150}, {150, 150}}, grid = {1, 1}, initialScale = 0.1)));
  end SimpleCirculation;

  model BodySurface
    Parts.bodySurface bodySurface annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}})));
    Modelica.Blocks.Sources.Constant bw(k = 75) annotation(Placement(transformation(extent = {{-62, 10}, {-42, 30}})));
    Modelica.Blocks.Sources.Constant bh(k = 175) annotation(Placement(transformation(extent = {{-62, -30}, {-42, -10}})));
    Parts.BMI BMI annotation(Placement(transformation(extent = {{30, 36}, {50, 56}})));
  equation
    connect(bw.y, bodySurface.bodyWeight) annotation(Line(points = {{-41, 20}, {-24, 20}, {-24, 5.4}, {-7.2, 5.4}}, color = {0, 0, 127}, thickness = 0.5, smooth = Smooth.None));
    connect(bh.y, bodySurface.bodyHeight) annotation(Line(points = {{-41, -20}, {-24, -20}, {-24, -4.8}, {-7.2, -4.8}}, color = {0, 0, 127}, thickness = 0.5, smooth = Smooth.None));
    connect(bw.y, BMI.weight) annotation(Line(points = {{-41, 20}, {-24, 20}, {-24, 52}, {34, 52}}, color = {0, 0, 127}, thickness = 0.5, smooth = Smooth.None));
    connect(bh.y, BMI.height) annotation(Line(points = {{-41, -20}, {26, -20}, {26, 40}, {34, 40}}, color = {0, 0, 127}, thickness = 0.5, smooth = Smooth.None));
    annotation(Diagram(graphics));
  end BodySurface;

  model SimpleCirculationSurface "Simple cirtculation with unstressed volumes"
    Parts.HeartPump RightHeart(pump = false) annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}}, rotation = 90, origin = {-84, 21})));
    Parts.HeartPump LeftHeart(pump = false) annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}}, rotation = 270, origin = {47, 23})));
    Parts.VariableBloodResistor TotalSystemicResistance annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}}, rotation = 180, origin = {-27, -54})));
    Parts.VariableBloodResistor TotalPulmonaryResistance annotation(Placement(transformation(extent = {{-39, 62}, {-19, 82}})));
    Modelica.Blocks.Sources.Constant KRH(k = 16.67 / 1.903) annotation(Placement(transformation(extent = {{-100, 12.9999}, {-86.0002, 27.0001}}, origin = {-46.9998, 7.99994}, rotation = 0), visible = true));
    Modelica.Blocks.Sources.Constant KLH(k = 10 / 1.903) annotation(Placement(transformation(extent = {{-7.0, -7.0}, {7.0, 7.0}}, rotation = 180, origin = {140, 27}), visible = true));
    Modelica.Blocks.Sources.Constant RT(k = 1 * 1.903) annotation(Placement(transformation(extent = {{-7, -7}, {7, 7}}, rotation = 0, origin = {-141, -133}), visible = true));
    Modelica.Blocks.Sources.Constant RP(k = 0.1 * 1.903) annotation(Placement(transformation(extent = {{-7, -7}, {7, 7}}, rotation = 180, origin = {140, 117}), visible = true));
    Modelica.Blocks.Sources.Constant CAS(k = 1.5 / 1.903) annotation(Placement(transformation(extent = {{37.5011, -18.2143}, {52.5014, -3.2143}}, origin = {185.501, -45.2143}, rotation = -180), visible = true));
    Modelica.Blocks.Sources.Constant CVS(k = 200 / 1.903) annotation(Placement(transformation(extent = {{-6.5, -6.5}, {6.5, 6.5}}, rotation = 0, origin = {-140.5, -31.5}), visible = true));
    Modelica.Blocks.Sources.Constant CAP(k = 3.01 / 1.903) annotation(Placement(transformation(extent = {{-6.5, -6.5}, {6.5, 6.5}}, rotation = 0, origin = {-140.5, 74.5}), visible = true));
    Modelica.Blocks.Sources.Constant CVP(k = 30 / 1.903) annotation(Placement(transformation(extent = {{-6.5, -6.5}, {6.5, 6.5}}, rotation = 180, origin = {140.5, 68.5})));
    Parts.BloodElasticCompartment PlumonaryArteries(InitialVolume = 370 / 1.9031365319240374) annotation(Placement(visible = true, transformation(origin = {-68, 47.3018}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0)));
    Parts.BloodElasticCompartment SystemVeins(InitialVolume = 3900 / 1.9031365319240374) annotation(Placement(visible = true, transformation(origin = {-88.538, -53.5305}, extent = {{10.0, 10.0}, {-10.0, -10.0}}, rotation = 180)));
    Parts.BloodElasticCompartment SystemArteries(InitialVolume = 670 / 1.9031365319240374) annotation(Placement(visible = true, transformation(origin = {47, -54.2238}, extent = {{10.0, -10.0}, {-10.0, 10.0}}, rotation = 0)));
    Parts.BloodElasticCompartment PlumonaryVeins(InitialVolume = 700 / 1.9031365319240374) annotation(Placement(visible = true, transformation(origin = {20.9971, 49.4559}, extent = {{10.0, -10.0}, {-10.0, 10.0}}, rotation = 0)));
    Parts.BloodVolume bloodVolume1 annotation(Placement(visible = true, transformation(origin = {-43, 120}, extent = {{-12, -8}, {12, 8}}, rotation = 0)));
    Modelica.Blocks.Sources.Constant dSV(k = 0) annotation(Placement(visible = true, transformation(origin = {-68.425, 122.786}, extent = {{-78.5754, 10.2143}, {-67.575, 21.2143}}, rotation = 0)));
    Parts.TotalBloodVolume totalBloodVolume annotation(Placement(transformation(extent = {{-9.5, 8.5}, {9.5, -8.5}}, rotation = 270, origin = {-50.5, -25.5})));
    Parts.BloodFlowMeter bloodFlowMeter1 annotation(Placement(transformation(extent = {{-5.5, 6.5}, {5.5, -6.5}}, rotation = 270, origin = {47.5, -9.5})));
    Modelica.Blocks.Math.Add SA_VplusSV_V "Sum of SA and SV volumes " annotation(Placement(transformation(extent = {{-7.5, 7.5}, {7.5, -7.5}}, rotation = 270, origin = {-6.5, -134.5})));
    Modelica.Blocks.Math.MultiSum TotalStressedVolume(nu = 4) annotation(Placement(transformation(extent = {{-7, -7}, {7, 7}}, rotation = 270, origin = {-13, -100})));
    Modelica.Blocks.Math.Add TotalUnstressedVolume(k2 = -1)
      "Sum of SA and SV volumes "                                                       annotation(Placement(transformation(extent = {{-5, -5}, {5, 5}}, rotation = 270, origin = {22, -116})));
    Modelica.Blocks.Sources.Constant bw(k = 75) annotation(Placement(transformation(extent = {{148, -99}, {135, -86}})));
    Modelica.Blocks.Sources.Constant bh(k = 175) annotation(Placement(transformation(extent = {{148, -140}, {136, -128}})));
    Parts.bodySurface bodySurface annotation(Placement(transformation(extent = {{10.5, -12}, {-10.5, 12}}, rotation = 270, origin = {104.5, -80})));
    Parts.BMI BMI annotation(Placement(transformation(extent = {{-11, 6.5}, {11, -6.5}}, rotation = 180, origin = {112, -115.5})));
    Modelica.Blocks.Math.Product CAS_S annotation(Placement(transformation(extent = {{89, -46}, {76, -33}})));
    Modelica.Blocks.Math.Division RPS annotation(Placement(transformation(extent = {{-6.5, 6.5}, {6.5, -6.5}}, rotation = 180, origin = {91.5, 113.5})));
    Modelica.Blocks.Math.Product KLH_S annotation(Placement(transformation(extent = {{93, 16}, {80, 29}})));
    Modelica.Blocks.Math.Product CVP_S annotation(Placement(transformation(extent = {{94, 58}, {81, 71}})));
    Modelica.Blocks.Math.Division RTS annotation(Placement(transformation(extent = {{6.5, 6.5}, {-6.5, -6.5}}, rotation = 180, origin = {-94.5, -137.5})));
    Modelica.Blocks.Math.Product CVS_S annotation(Placement(transformation(extent = {{-116, -41}, {-103, -28}})));
    Modelica.Blocks.Math.Product KRH_S annotation(Placement(transformation(extent = {{-117, 17}, {-104, 30}})));
    Modelica.Blocks.Math.Product CAP_S annotation(Placement(transformation(extent = {{-116, 64}, {-103, 77}})));
    Parts.NormalBloodVolume normalBloodVolume annotation(Placement(transformation(extent = {{88, -121}, {58, -101}})));
    Modelica.Blocks.Sources.Constant dBV(k = 0) annotation(Placement(transformation(extent = {{5, -5}, {-5, 5}}, rotation = 0, origin = {-8, -2}), visible = true));
    Modelica.Blocks.Math.Add BVplusdBV annotation(Placement(transformation(extent = {{-22, -13}, {-33, -2}})));
    Modelica.Blocks.Math.Add V0(k1 = -1, k2 = +1) annotation(Placement(transformation(extent = {{-80, 133}, {-69, 122}})));
    Modelica.Blocks.Math.Gain normalV0(k = 850) annotation(Placement(transformation(extent = {{-124, 106}, {-114, 116}})));
    Modelica.Blocks.Math.Add SV(k2 = +1, k1 = +1) annotation(Placement(transformation(extent = {{-107, 129}, {-96, 118}})));
    Modelica.Blocks.Math.Division CI annotation(Placement(transformation(extent = {{6.5, 6.5}, {-6.5, -6.5}}, rotation = 180, origin = {84.5, -4.5})));
    Modelica.Blocks.Math.Add PA_VplusPV_V "Sum of PA and PV volumes in [ml] " annotation(Placement(transformation(extent = {{-5.5, 5.5}, {5.5, -5.5}}, rotation = 270, origin = {-21.5, 29.5})));
    Parts.BloodFlowMeter SA_SR annotation(Placement(transformation(extent = {{-5.5, 6.5}, {5.5, -6.5}}, rotation = 180, origin = {12.5, -56.5})));
    Parts.BloodFlowMeter bloodFlowMeter annotation(Placement(visible = true, transformation(origin = {-88.5, -0.5}, extent = {{-5.5, 6.5}, {5.5, -6.5}}, rotation = 90)));
    Modelica.Blocks.Math.Division CI_right annotation(Placement(visible = true, transformation(origin = {-113, 0}, extent = {{-6.5, 6.5}, {6.5, -6.5}}, rotation = 180)));
  equation
    connect(CI_right.u2, bodySurface.bodySurface) annotation(Line(points={{-105.2,
            -3.9},{-108,-3.9},{-108,-142},{86,-142},{86,-71},{104.5,-71},{104.5,
            -70.97}},                                                                                                    color = {0, 0, 127}));
    connect(CAP_S.u2, bodySurface.bodySurface) annotation(Line(points = {{-117.3, 66.6}, {-124, 66.6}, {-124, -149}, {85, -149}, {85, -66}, {104.5, -66}, {104.5, -70.97}}, color = {0, 0, 127}));
    connect(CI_right.u1, bloodFlowMeter.BloodFlowPerMin) annotation(Line(points={{-105.2,
            3.9},{-94,3.9},{-94,-0.28},{-93.96,-0.28}},                                                                        color = {0, 0, 127}));
    connect(bloodFlowMeter.Outflow, RightHeart.Inflow) annotation(Line(points = {{-88.5, 5}, {-84, 5}, {-84, 11}}, thickness = 1));
    connect(bloodFlowMeter.Inflow, SystemVeins.bloodFlow) annotation(Line(points={{-88.5,
            -6},{-88.5,-53.5305},{-88.0506,-53.5305}},                                                                                     thickness = 1));
    connect(SystemVeins.bloodFlow, TotalSystemicResistance.Outflow) annotation(Line(visible = true, origin = {-50.8688, -50.9218}, points={{
            -37.1818,-2.6087},{1.2579,-3.0782},{13.8688,-3.0782}},                                                                                                    thickness = 1));
    connect(TotalPulmonaryResistance.Outflow, PlumonaryVeins.bloodFlow) annotation(Line(visible = true, origin = {13.312, 60.228}, points = {{-32.312, 11.772}, {7.0698, 11.772}, {7.0698, -10.7721}, {7.19771, -10.7721}}, thickness = 1));
    connect(LeftHeart.Inflow, PlumonaryVeins.bloodFlow) annotation(Line(visible = true, origin = {39.2422, 45.1881}, points={{7.7578,
            -12.1881},{7.7578,3.9602},{-18.7325,3.9602},{-18.7325,4.2678}},                                                                                                    thickness = 1));
    connect(PlumonaryArteries.bloodFlow, RightHeart.Outflow) annotation(Line(visible = true, origin = {-74.838, 44.2012}, points = {{7.32539, 3.1006}, {-9.162, 3.1006}, {-9.162, -13.2012}}, thickness = 1));
    connect(PlumonaryArteries.bloodFlow, TotalPulmonaryResistance.Inflow) annotation(Line(points={{
            -67.5126,47.3018},{-51.7563,47.3018},{-51.7563,72},{-39,72}},                                                                                                 color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
    connect(SystemVeins.UnstressedVolume, bloodVolume1.v4) annotation(Line(points={{
            -83.0326,-44.3859},{-83.0326,-27},{-98,-27},{-98,105},{-35.8,105},{
            -35.8,113.851}},                                                                                                    color = {0, 0, 127}, smooth = Smooth.None));
    connect(bloodVolume1.v3, SystemArteries.UnstressedVolume) annotation(Line(points={{-35.8,
            117.926},{69,117.926},{69,-35},{41.4947,-35},{41.4947,-45.0792}},                                                                                             color = {0, 0, 127}, smooth = Smooth.None));
    connect(bloodVolume1.v1, PlumonaryArteries.UnstressedVolume) annotation(Line(points={{-35.8,
            125.988},{-62.4947,125.988},{-62.4947,56.4464}},                                                                                            color = {0, 0, 127}, smooth = Smooth.None));
    connect(bloodVolume1.v2, PlumonaryVeins.UnstressedVolume) annotation(Line(points={{-35.8,
            121.902},{15.4917,121.902},{15.4917,58.6005}},                                                                                         color = {0, 0, 127}, smooth = Smooth.None));
    connect(SystemArteries.Volume, SA_VplusSV_V.u2) annotation(Line(points={{54,
            -61.0209},{59,-61.0209},{59,-125.5},{-2,-125.5}},                                                                              color = {0, 0, 127}, smooth = Smooth.None));
    connect(SystemVeins.Volume, SA_VplusSV_V.u1) annotation(Line(points={{-95.538,
            -60.3277},{-95.538,-125.5},{-11,-125.5}},                                                                              color = {0, 0, 127}, smooth = Smooth.None));
    connect(PlumonaryArteries.Volume, totalBloodVolume.u) annotation(Line(points={{-75,
            40.5046},{-75,7},{-57.3,7},{-57.3,-20.75}},                                                                                     color = {0, 0, 127}, smooth = Smooth.None));
    connect(PlumonaryVeins.Volume, totalBloodVolume.u1) annotation(Line(points={{27.9971,
            42.6587},{27.9971,18},{-51.86,18},{-51.86,-21.32}},                                                                                       color = {0, 0, 127}, smooth = Smooth.None));
    connect(totalBloodVolume.u3, SystemVeins.Volume) annotation(Line(points={{-43.36,
            -21.51},{-43.36,7},{0,7},{0,-78},{-95.538,-78},{-95.538,-60.3277}},                                                                                       color = {0, 0, 127}, smooth = Smooth.None));
    connect(totalBloodVolume.BloodVolume, TotalUnstressedVolume.u1) annotation(Line(points = {{-46.42, -33.48}, {-46.42, -38}, {25, -38}, {25, -110}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(TotalStressedVolume.y, TotalUnstressedVolume.u2) annotation(Line(points = {{-13, -108.19}, {2, -108.19}, {2, -110}, {19, -110}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(SystemVeins.StressedVolume, TotalStressedVolume.u[1]) annotation(Line(points={{-88.538,
            -63.3277},{-72.769,-63.3277},{-72.769,-93},{-9.325,-93}},                                                                                                 color = {0, 0, 127}, smooth = Smooth.None));
    connect(SystemArteries.StressedVolume, TotalStressedVolume.u[2]) annotation(Line(points={{47,
            -64.0209},{28,-64.0209},{28,-93},{-11.775,-93}},                                                                                               color = {0, 0, 127}, smooth = Smooth.None));
    connect(PlumonaryArteries.StressedVolume, TotalStressedVolume.u[3]) annotation(Line(points={{-68,
            37.5046},{-68,-72},{-14.225,-72},{-14.225,-93}},                                                                                                   color = {0, 0, 127}, smooth = Smooth.None));
    connect(PlumonaryVeins.StressedVolume, TotalStressedVolume.u[4]) annotation(Line(points={{20.9971,
            39.6587},{20.9971,-83},{-16.675,-83},{-16.675,-93}},                                                                                                    color = {0, 0, 127}, smooth = Smooth.None));
    connect(bw.y, BMI.weight) annotation(Line(points = {{134.35, -92.5}, {124.675, -92.5}, {124.675, -111.6}, {118.6, -111.6}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(bodySurface.bodyWeight, bw.y) annotation(Line(points = {{110.98, -87.56}, {111.53, -87.56}, {111.53, -92.5}, {134.35, -92.5}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(bh.y, BMI.height) annotation(Line(points = {{135.4, -134}, {126, -134}, {126, -119.4}, {118.6, -119.4}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(bodySurface.bodyHeight, bh.y) annotation(Line(points = {{98.74, -87.56}, {98, -87.56}, {98, -134}, {135.4, -134}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CAS.y, CAS_S.u1) annotation(Line(points={{132.25,-34.5},{106.875,
            -34.5},{106.875,-35.6},{90.3,-35.6}},                                                                           color = {0, 0, 127}, smooth = Smooth.None));
    connect(KLH.y, KLH_S.u1) annotation(Line(points = {{132.3, 27}, {104, 27}, {104, 26.4}, {94.3, 26.4}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CVP.y, CVP_S.u1) annotation(Line(points = {{133.35, 68.5}, {106.675, 68.5}, {106.675, 68.4}, {95.3, 68.4}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(bodySurface.bodySurface, CAS_S.u2) annotation(Line(points = {{104.5, -70.97}, {104.5, -59.985}, {90.3, -59.985}, {90.3, -43.4}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(KLH_S.u2, bodySurface.bodySurface) annotation(Line(points = {{94.3, 18.6}, {104.5, 18.6}, {104.5, -70.97}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CVP_S.u2, bodySurface.bodySurface) annotation(Line(points = {{95.3, 60.6}, {104.5, 60.6}, {104.5, -70.97}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(TotalPulmonaryResistance.BloodResistance, RPS.y) annotation(Line(points={{-29,
            81.2569},{-29,113.5},{84.35,113.5}},                                                                                      color = {0, 0, 127}, smooth = Smooth.None));
    connect(PlumonaryVeins.Compliance, CVP_S.y) annotation(Line(points={{26.4917,
            58.1005},{26.4917,64.5},{80.35,64.5}},                                                                             color = {0, 0, 127}, smooth = Smooth.None));
    connect(SystemArteries.Compliance, CAS_S.y) annotation(Line(points={{52.4947,
            -45.5792},{52.4947,-39.5},{75.35,-39.5}},                                                                             color = {0, 0, 127}, smooth = Smooth.None));
    connect(LeftHeart.StarlingSlope, KLH_S.y) annotation(Line(points = {{56, 23}, {79, 23}, {79, 22.5}, {79.35, 22.5}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(totalBloodVolume.bloodFlowConnector, SystemVeins.bloodFlow) annotation(Line(points={{-50.67,
            -34.05},{-64.1,-34.05},{-64.1,-53.5305},{-88.0506,-53.5305}},                                                                                                    color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
    connect(RT.y, RTS.u1) annotation(Line(points = {{-133.3, -133}, {-125, -133}, {-125, -133.6}, {-102.3, -133.6}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CAP.y, CAP_S.u1) annotation(Line(points = {{-133.35, 74.5}, {-124.675, 74.5}, {-124.675, 74.4}, {-117.3, 74.4}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CAP_S.y, PlumonaryArteries.Compliance) annotation(Line(points={{-102.35,
            70.5},{-86.675,70.5},{-86.675,55.9464},{-73.4947,55.9464}},                                                                                  color = {0, 0, 127}, smooth = Smooth.None));
    connect(KRH_S.y, RightHeart.StarlingSlope) annotation(Line(points = {{-103.35, 23.5}, {-99.175, 23.5}, {-99.175, 21}, {-93, 21}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(KRH.y, KRH_S.u1) annotation(Line(points={{-132.3,27.9999},{-126,
            27.9999},{-126,27.4},{-118.3,27.4}},                                                                          color = {0, 0, 127}, smooth = Smooth.None));
    connect(CVS.y, CVS_S.u1) annotation(Line(points = {{-133.35, -31.5}, {-125.175, -31.5}, {-125.175, -30.6}, {-117.3, -30.6}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(TotalSystemicResistance.BloodResistance, RTS.y) annotation(Line(points={{-27,
            -63.2569},{-41,-63.2569},{-41,-137.5},{-87.35,-137.5}},                                                                                       color = {0, 0, 127}, smooth = Smooth.None));
    connect(RTS.u2, bodySurface.bodySurface) annotation(Line(points = {{-102.3, -141.4}, {-125, -141.4}, {-125, -149}, {85, -149}, {85, -66}, {104.5, -66}, {104.5, -70.97}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CVS_S.u2, bodySurface.bodySurface) annotation(Line(points = {{-117.3, -38.4}, {-124, -38.4}, {-124, -149}, {85, -149}, {85, -66}, {104.5, -66}, {104.5, -70.97}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(KRH_S.u2, bodySurface.bodySurface) annotation(Line(points = {{-118.3, 19.6}, {-122, 19.6}, {-122, -149}, {85, -149}, {85, -66}, {104.5, -66}, {104.5, -70.97}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CVS_S.y, SystemVeins.Compliance) annotation(Line(points={{-102.35,
            -34.5},{-102.35,-34.75},{-94.0326,-34.75},{-94.0326,-44.8859}},                                                                            color = {0, 0, 127}, smooth = Smooth.None));
    connect(totalBloodVolume.u2, SystemArteries.Volume) annotation(Line(points={{-47.61,
            -21.51},{-47.61,12},{32,12},{32,-75},{54,-75},{54,-61.0209}},                                                                                          color = {0, 0, 127}, smooth = Smooth.None));
    connect(RP.y, RPS.u1) annotation(Line(points = {{132.3, 117}, {115.8, 117}, {115.8, 117.4}, {99.3, 117.4}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(RPS.u2, bodySurface.bodySurface) annotation(Line(points = {{99.3, 109.6}, {104.5, 109.6}, {104.5, -70.97}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(normalBloodVolume.bw, bw.y) annotation(Line(points = {{76, -109}, {81, -109}, {81, -92.5}, {134.35, -92.5}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(normalBloodVolume.bh, bh.y) annotation(Line(points = {{76, -115}, {83, -115}, {83, -134}, {135.4, -134}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(dBV.y, BVplusdBV.u1) annotation(Line(points = {{-13.5, -2}, {-16.25, -2}, {-16.25, -4.2}, {-20.9, -4.2}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(totalBloodVolume.DesiredBloodVolume, BVplusdBV.y) annotation(Line(points = {{-42.68, -29.3}, {-35, -29.3}, {-35, -7.5}, {-33.55, -7.5}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(normalBloodVolume.bV, BVplusdBV.u2) annotation(Line(points = {{66.4, -111}, {38, -111}, {38, -88}, {7, -88}, {7, -10.8}, {-20.9, -10.8}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(V0.y, bloodVolume1.V0) annotation(Line(points = {{-68.45, 127.5}, {-60.225, 127.5}, {-60.225, 120}, {-50.2, 120}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(V0.u2, normalBloodVolume.bV) annotation(Line(points = {{-81.1, 130.8}, {-88, 130.8}, {-88, 134}, {62, 134}, {62, -111}, {66.4, -111}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(SV.y, V0.u1) annotation(Line(points = {{-95.45, 123.5}, {-88.225, 123.5}, {-88.225, 124.2}, {-81.1, 124.2}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(normalV0.y, SV.u1) annotation(Line(points = {{-113.5, 111}, {-112, 111}, {-112, 120.2}, {-108.1, 120.2}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(dSV.y, SV.u2) annotation(Line(points={{-135.45,138.5},{-121.725,
            138.5},{-121.725,126.8},{-108.1,126.8}},                                                                          color = {0, 0, 127}, smooth = Smooth.None));
    connect(normalV0.u, bodySurface.bodySurface) annotation(Line(points = {{-125, 111}, {-127, 111}, {-127, -149}, {85, -149}, {85, -66}, {104.5, -66}, {104.5, -70.97}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(bloodFlowMeter1.BloodFlowPerMin, CI.u1) annotation(Line(points = {{52.96, -9.72}, {64.48, -9.72}, {64.48, -0.6}, {76.7, -0.6}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CI.u2, bodySurface.bodySurface) annotation(Line(points = {{76.7, -8.4}, {73, -8.4}, {73, -23}, {104.5, -23}, {104.5, -70.97}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(PlumonaryArteries.Volume, PA_VplusPV_V.u1) annotation(Line(points={{-75,
            40.5046},{-75,30},{-38,30},{-38,42},{-24.8,42},{-24.8,36.1}},                                                                                      color = {0, 0, 127}, smooth = Smooth.None));
    connect(PA_VplusPV_V.u2, PlumonaryVeins.Volume) annotation(Line(points={{-18.2,
            36.1},{-18.2,42},{1,42},{1,28},{27.9971,28},{27.9971,42.6587}},                                                                                     color = {0, 0, 127}, smooth = Smooth.None));
    connect(RightHeart.refBloodVolume, SystemVeins.Volume) annotation(Line(points={{-90,13},
            {-101,13},{-101,-78},{-95.538,-78},{-95.538,-60.3277}},                                                                                            color = {0, 0, 127}, smooth = Smooth.None));
    connect(LeftHeart.refBloodVolume, PlumonaryVeins.Volume) annotation(Line(points={{53,31},
            {53,35},{27.9971,35},{27.9971,42.6587}},                                                                                           color = {0, 0, 127}, smooth = Smooth.None));
    connect(LeftHeart.Outflow, bloodFlowMeter1.Inflow) annotation(Line(points = {{47, 13}, {47.5, 13}, {47.5, -4}}, color = {0, 0, 0}, smooth = Smooth.None, thickness = 1));
    connect(bloodFlowMeter1.Outflow, SystemArteries.bloodFlow) annotation(Line(points={{47.5,
            -15},{46.5126,-15},{46.5126,-54.2238}},                                                                                         color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
    connect(SA_SR.Inflow, SystemArteries.bloodFlow) annotation(Line(points={{18,
            -56.5},{33,-56.5},{33,-54.2238},{46.5126,-54.2238}},                                                                              color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
    connect(SA_SR.Outflow, TotalSystemicResistance.Inflow) annotation(Line(points = {{7, -56.5}, {-5, -56.5}, {-5, -54}, {-17, -54}}, color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
    annotation(Diagram(coordinateSystem(extent = {{-150, -150}, {150, 150}}, preserveAspectRatio = false, initialScale = 0.1, grid = {1, 1}), graphics), Icon(coordinateSystem(preserveAspectRatio = true, extent = {{-150, -150}, {150, 150}}, grid = {1, 1}, initialScale = 0.1)));
  end SimpleCirculationSurface;

  model SimpleCirculationSurfaceChip
    "Simple cirtculation with unstressed volumes"
    Modelica.Blocks.Sources.Constant KRH(k = 16.67 / 1.903) annotation(Placement(transformation(extent = {{-100, 12.9999}, {-86.0002, 27.0001}}, origin = {-19.9998, 15.9999}, rotation = 0), visible = true));
    Modelica.Blocks.Sources.Constant KLH(k = 10 / 1.903) annotation(Placement(transformation(extent = {{-7.0, -7.0}, {7.0, 7.0}}, rotation = 180, origin = {108, 39}), visible = true));
    Modelica.Blocks.Sources.Constant RT(k = 1 * 1.903) annotation(Placement(transformation(extent = {{-7, -7}, {7, 7}}, rotation = 90, origin = {-2, -113}), visible = true));
    Modelica.Blocks.Sources.Constant RP(k = 0.1 * 1.903) annotation(Placement(transformation(extent = {{-7, -7}, {7, 7}}, rotation = 180, origin = {46, 139}), visible = true));
    Modelica.Blocks.Sources.Constant CAS(k = 1.5 / 1.903) annotation(Placement(transformation(extent = {{37.5011, -18.2143}, {52.5014, -3.2143}}, origin = {154.501, -31.2143}, rotation = -180), visible = true));
    Modelica.Blocks.Sources.Constant CVS(k = 200 / 1.903) annotation(Placement(transformation(extent = {{-6.5, -6.5}, {6.5, 6.5}}, rotation = 0, origin = {-113.5, -10.5}), visible = true));
    Modelica.Blocks.Sources.Constant CAP(k = 3.01 / 1.903) annotation(Placement(transformation(extent = {{-7, -7}, {7, 7}}, rotation = 0, origin = {-113, 93}), visible = true));
    Modelica.Blocks.Sources.Constant CVP(k = 30 / 1.903) annotation(Placement(transformation(extent = {{-6.5, -6.5}, {6.5, 6.5}}, rotation = 180, origin = {107.5, 97.5})));
    Parts.BloodVolume bloodVolume1 annotation(Placement(visible = true, transformation(origin = {63, -126}, extent = {{-12, -8}, {12, 8}}, rotation = 90)));
    Modelica.Blocks.Sources.Constant dSV(k = 0) annotation(Placement(visible = true, transformation(origin = {160.433, -102.283}, extent = {{-71.433, 9.28444}, {-61.4326, 19.2829}}, rotation = 0)));
    Modelica.Blocks.Math.Add SA_VplusSV_V "Sum of SA and SV volumes " annotation(Placement(transformation(extent = {{-7.5, 7.5}, {7.5, -7.5}}, rotation = 270, origin = {-110.5, -110.5})));
    Modelica.Blocks.Math.Add TotalUnstressedVolume(k2 = -1)
      "Sum of SA and SV volumes "                                                       annotation(Placement(transformation(extent = {{-4.5, -4.5}, {4.5, 4.5}}, rotation = 270, origin = {-74.5, -132.5})));
    Modelica.Blocks.Sources.Constant bw(k = 75) annotation(Placement(transformation(extent = {{149, -124}, {136, -111}})));
    Modelica.Blocks.Sources.Constant bh(k = 175) annotation(Placement(transformation(extent = {{149, -146}, {137, -134}})));
    Parts.bodySurface bodySurface annotation(Placement(transformation(extent = {{10.75, -9.25}, {-10.75, 9.25}}, rotation = 270, origin = {127.75, -97.75})));
    Parts.BMI BMI annotation(Placement(transformation(extent = {{-11, 6.5}, {11, -6.5}}, rotation = 180, origin = {122, -129.5})));
    Modelica.Blocks.Math.Product CAS_S annotation(Placement(transformation(extent = {{96, -37}, {86, -27}})));
    Modelica.Blocks.Math.Division RPS annotation(Placement(transformation(extent = {{-5, 5}, {5, -5}}, rotation = 180, origin = {25, 119})));
    Modelica.Blocks.Math.Product KLH_S annotation(Placement(transformation(extent = {{95, 14}, {85, 24}})));
    Modelica.Blocks.Math.Product CVP_S annotation(Placement(transformation(extent = {{96, 75}, {86, 85}})));
    Modelica.Blocks.Math.Division RTS annotation(Placement(transformation(extent = {{5, 5}, {-5, -5}}, rotation = 270, origin = {9, -97})));
    Modelica.Blocks.Math.Product CVS_S annotation(Placement(transformation(extent = {{-100, -37}, {-90, -27}})));
    Modelica.Blocks.Math.Product KRH_S annotation(Placement(transformation(extent = {{-100, 14}, {-90, 24}})));
    Modelica.Blocks.Math.Product CAP_S annotation(Placement(transformation(extent = {{-100, 74}, {-90, 84}})));
    Parts.NormalBloodVolume normalBloodVolume annotation(Placement(transformation(extent = {{114, -128}, {92, -111}})));
    Modelica.Blocks.Sources.Constant dBV(k = 0) annotation(Placement(transformation(extent = {{5, -5}, {-5, 5}}, rotation = 90, origin = {44, -123}), visible = true));
    Modelica.Blocks.Math.Add BVplusdBV annotation(Placement(transformation(extent = {{46, -148}, {35, -137}})));
    Modelica.Blocks.Math.Add V0(k1 = -1, k2 = +1) annotation(Placement(transformation(extent = {{5, -5}, {-5, 5}}, rotation = 0, origin = {79, -126})));
    Modelica.Blocks.Math.Gain normalV0(k = 762.5) annotation(Placement(transformation(extent = {{115, -87}, {105, -77}})));
    Modelica.Blocks.Math.Add SV(k2 = +1, k1 = +1) annotation(Placement(transformation(extent = {{101, -110}, {91, -100}})));
    Modelica.Blocks.Math.Division CI annotation(Placement(transformation(extent = {{5, 5}, {-5, -5}}, rotation = 180, origin = {139, 5})));
    Modelica.Blocks.Math.Add PA_VplusPV_V "Sum of PA and PV volumes in [ml] " annotation(Placement(transformation(extent = {{-8, 8}, {8, -8}}, rotation = 90, origin = {-72, 135})));
    SimpleCirculationChip simpleCirculationChip annotation(Placement(transformation(rotation = 0, extent = {{-86, -88}, {78, 115}})));
    Modelica.Blocks.Math.Sum TotalStressedVolume(nin = 4) annotation(Placement(transformation(extent = {{-5.5, -5.5}, {5.5, 5.5}}, rotation = 270, origin = {-75.5, -112.5})));
  equation
    connect(bw.y, BMI.weight) annotation(Line(points = {{135.35, -117.5}, {132.675, -117.5}, {132.675, -125.6}, {128.6, -125.6}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(bh.y, BMI.height) annotation(Line(points = {{136.4, -140}, {133, -140}, {133, -133.4}, {128.6, -133.4}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(bodySurface.bodySurface, CAS_S.u2) annotation(Line(points = {{127.75, -88.505}, {127.75, -59.985}, {97, -59.985}, {97, -35}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(KLH_S.u2, bodySurface.bodySurface) annotation(Line(points = {{96, 16}, {127.75, 16}, {127.75, -88.505}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CVP_S.u2, bodySurface.bodySurface) annotation(Line(points = {{97, 77}, {127.75, 77}, {127.75, -88.505}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(RPS.u2, bodySurface.bodySurface) annotation(Line(points = {{31, 116}, {127.75, 116}, {127.75, -88.505}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(KRH_S.y, simpleCirculationChip.RH_StarlingSlope) annotation(Line(points = {{-89.5, 19}, {-85, 19}, {-85, 18.575}, {-81.9, 18.575}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CAP_S.y, simpleCirculationChip.PA_Compliance) annotation(Line(points = {{-89.5, 79}, {-85, 79}, {-85, 79.475}, {-81.9, 79.475}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CVS_S.y, simpleCirculationChip.SV_Compliance) annotation(Line(points = {{-89.5, -32}, {-85, -32}, {-85, -32.175}, {-81.9, -32.175}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(KRH.y, KRH_S.u1) annotation(Line(points={{-105.3,35.9999},{-101,
            35.9999},{-101,22}},                                                                        color = {0, 0, 127}, smooth = Smooth.None));
    connect(CVS.y, CVS_S.u1) annotation(Line(points = {{-106.35, -10.5}, {-101, -10.5}, {-101, -29}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CAP.y, CAP_S.u1) annotation(Line(points = {{-105.3, 93}, {-101, 93}, {-101, 82}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(RPS.y, simpleCirculationChip.TPR_BloodResistance) annotation(Line(points = {{19.5, 119}, {8.3, 119}, {8.3, 109.925}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(RP.y, RPS.u1) annotation(Line(points = {{38.3, 139}, {31, 139}, {31, 122}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CVP.y, CVP_S.u1) annotation(Line(points = {{100.35, 97.5}, {97, 97.5}, {97, 83}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(KLH_S.y, simpleCirculationChip.LH_StarlingSlope) annotation(Line(points = {{84.5, 19}, {80, 19}, {80, 18.575}, {73.9, 18.575}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CVP_S.y, simpleCirculationChip.PV_Compliance) annotation(Line(points = {{85.5, 80}, {80, 80}, {80, 79.475}, {73.9, 79.475}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(KLH.y, KLH_S.u1) annotation(Line(points = {{100.3, 39}, {98, 39}, {98, 22}, {96, 22}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CAS_S.y, simpleCirculationChip.SA_Compliance) annotation(Line(points = {{85.5, -32}, {80, -32}, {80, -32.175}, {73.9, -32.175}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CAS.y, CAS_S.u1) annotation(Line(points={{101.25,-20.5},{97,-20.5},
            {97,-29}},                                                                           color = {0, 0, 127}, smooth = Smooth.None));
    connect(bodySurface.bodyHeight, bh.y) annotation(Line(points = {{123.31, -105.49}, {123.31, -115}, {110, -115}, {110, -140}, {136.4, -140}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(bodySurface.bodyWeight, bw.y) annotation(Line(points = {{132.745, -105.49}, {132.745, -117.5}, {135.35, -117.5}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(simpleCirculationChip.LH_BloodFlowPerMin, CI.u1) annotation(Line(points = {{73.9, 8.425}, {103.95, 8.425}, {103.95, 8}, {133, 8}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CI.u2, bodySurface.bodySurface) annotation(Line(points = {{133, 2}, {128, 2}, {127.75, -88.505}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(normalBloodVolume.bw, BMI.weight) annotation(Line(points = {{105.2, -117.8}, {117, -117.8}, {117, -118}, {133, -118}, {133, -125.6}, {128.6, -125.6}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(normalBloodVolume.bh, bh.y) annotation(Line(points = {{105.2, -122.9}, {106, -122.9}, {106, -140}, {136.4, -140}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(V0.y, bloodVolume1.V0) annotation(Line(points = {{73.5, -126}, {68.225, -126}, {68.225, -133.2}, {63, -133.2}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(normalBloodVolume.bV, V0.u2) annotation(Line(points = {{98.16, -119.5}, {94, -119.5}, {94, -129}, {85, -129}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(SV.y, V0.u1) annotation(Line(points = {{90.5, -105}, {87, -105}, {87, -123}, {85, -123}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(normalV0.u, CAS_S.u2) annotation(Line(points = {{116, -82}, {128, -82}, {128, -59.985}, {97, -59.985}, {97, -35}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(normalV0.y, SV.u2) annotation(Line(points = {{104.5, -82}, {104.5, -108}, {102, -108}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(dSV.y, SV.u1) annotation(Line(points={{99.5004,-87.9993},{102,
            -87.9993},{102,-102}},                                                                      color = {0, 0, 127}, smooth = Smooth.None));
    connect(RTS.y, simpleCirculationChip.TSR_BloodResistance) annotation(Line(points = {{9, -91.5}, {9, -87}, {9, -82.925}, {8.3, -82.925}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(RT.y, RTS.u1) annotation(Line(points = {{-2, -105.3}, {-2, -104}, {6, -104}, {6, -103}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(bodySurface.bodySurface, CAP_S.u2) annotation(Line(points = {{127.75, -88.505}, {127.75, -70}, {80, -70}, {80, -90}, {30, -90}, {30, -140}, {-140, -140}, {-140, 76}, {-101, 76}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(KRH_S.u2, CAP_S.u2) annotation(Line(points = {{-101, 16}, {-121, 16}, {-121, 15}, {-140, 15}, {-140, 76}, {-101, 76}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(CVS_S.u2, CAP_S.u2) annotation(Line(points = {{-101, -35}, {-140, -35}, {-140, 76}, {-101, 76}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(RTS.u2, CAP_S.u2) annotation(Line(points = {{12, -103}, {21, -103}, {21, -111}, {30, -111}, {30, -140}, {-140, -140}, {-140, 76}, {-101, 76}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(dBV.y, BVplusdBV.u1) annotation(Line(points = {{44, -128.5}, {44, -131}, {50, -131}, {50, -139.2}, {47.1, -139.2}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(BVplusdBV.u2, V0.u2) annotation(Line(points = {{47.1, -145.8}, {93, -145.8}, {93, -129}, {85, -129}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(BVplusdBV.y, simpleCirculationChip.TBV_DesiredBloodVolume) annotation(Line(points = {{34.45, -142.5}, {-16.3, -142.5}, {-16.3, -82.925}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(simpleCirculationChip.TBV_BloodVolume, TotalUnstressedVolume.u1) annotation(Line(points = {{-24.5, -82.925}, {-24.5, -124}, {-71.8, -124}, {-71.8, -127.1}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(simpleCirculationChip.SV_Volume, SA_VplusSV_V.u1) annotation(Line(points = {{-81.9, -42.325}, {-115, -42.325}, {-115, -101.5}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(simpleCirculationChip.SA_Volume, SA_VplusSV_V.u2) annotation(Line(points = {{73.9, -42.325}, {78, -42.325}, {78, -94}, {-106, -94}, {-106, -101.5}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(simpleCirculationChip.PA_Volume, PA_VplusPV_V.u2) annotation(Line(points = {{-81.9, 69.325}, {-131, 69.325}, {-131, 117}, {-76.8, 117}, {-76.8, 125.4}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(simpleCirculationChip.PV_Volume, PA_VplusPV_V.u1) annotation(Line(points={{73.9,
            69.325},{83,69.325},{83,128},{-50,128},{-50,117},{-67.2,117},{-67.2,
            125.4}},                                                                                                                                                                    color = {0, 0, 127}, smooth = Smooth.None));
    connect(bloodVolume1.v1, simpleCirculationChip.PA_UnstressedVolume) annotation(Line(points={{57.0123,
            -118.8},{57.0123,-87},{-127,-87},{-127,105},{-90,105},{-90,89.625},
            {-81.9,89.625}},                                                                                                                                                                                color = {0, 0, 127}, smooth = Smooth.None));
    connect(bloodVolume1.v2, simpleCirculationChip.PV_UnstressedVolume) annotation(Line(points={{61.0976,
            -118.8},{61.0976,-87},{83,-87},{83,89.625},{73.9,89.625}},                                                                                                         color = {0, 0, 127}, smooth = Smooth.None));
    connect(bloodVolume1.v3, simpleCirculationChip.SA_UnstressedVolume) annotation(Line(points = {{65.0739, -118.8}, {65.0739, -85}, {85, -85}, {85, -22.025}, {73.9, -22.025}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(bloodVolume1.v4, simpleCirculationChip.SV_UnstressedVolume) annotation(Line(points={{69.1493,
            -118.8},{69.1493,-100},{-102,-100},{-102,-22.025},{-81.9,-22.025}},                                                                                                         color = {0, 0, 127}, smooth = Smooth.None));
    connect(TotalStressedVolume.u[1], simpleCirculationChip.PA_StressedVolume) annotation(Line(points = {{-76.325, -105.9}, {-146, -105.9}, {-146, 53}, {-81.9, 53}, {-81.9, 59.175}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(simpleCirculationChip.SV_StressedVolume, TotalStressedVolume.u[2]) annotation(Line(points = {{-81.9, -52.475}, {-91, -52.475}, {-91, -103}, {-75.775, -103}, {-75.775, -105.9}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(simpleCirculationChip.SA_StressedVolume, TotalStressedVolume.u[3]) annotation(Line(points = {{73.9, -52.475}, {83, -52.475}, {83, -105.9}, {-75.225, -105.9}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(simpleCirculationChip.PV_StressedVolume, TotalStressedVolume.u[4]) annotation(Line(points = {{73.9, 59.175}, {80, 59.175}, {80, -103}, {-74.675, -103}, {-74.675, -105.9}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(TotalStressedVolume.y, TotalUnstressedVolume.u2) annotation(Line(points = {{-75.5, -118.55}, {-75.5, -122.775}, {-77.2, -122.775}, {-77.2, -127.1}}, color = {0, 0, 127}, smooth = Smooth.None));
    annotation(Diagram(coordinateSystem(extent = {{-150, -150}, {150, 150}}, preserveAspectRatio = false, initialScale = 0.1, grid = {1, 1}), graphics), Icon(coordinateSystem(preserveAspectRatio = true, extent = {{-150, -150}, {150, 150}}, grid = {1, 1}, initialScale = 0.1)));
  end SimpleCirculationSurfaceChip;

  model SimpleCirculationChip
    Parts.HeartPump RightHeart(pump = false) annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}}, rotation = 90, origin = {-84, 21})));
    Parts.BloodElasticCompartment PlumonaryArteries(InitialVolume = 370 / 1.9031365319240374) annotation(Placement(visible = true, transformation(origin = {-72, 53.3018}, extent = {{-10.0, -10.0}, {10.0, 10.0}}, rotation = 0)));
    Parts.VariableBloodResistor TotalPulmonaryResistance annotation(Placement(transformation(extent = {{-39, 66}, {-19, 86}})));
    Parts.BloodElasticCompartment PlumonaryVeins(InitialVolume = 700 / 1.9031365319240374) annotation(Placement(visible = true, transformation(origin = {20.9971, 49.4559}, extent = {{10.0, -10.0}, {-10.0, 10.0}}, rotation = 0)));
    Parts.HeartPump LeftHeart(pump = false) annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}}, rotation = 270, origin = {47, 23})));
    Parts.BloodFlowMeter bloodFlowMeter1 annotation(Placement(transformation(extent = {{-5.5, 6.5}, {5.5, -6.5}}, rotation = 270, origin = {47.5, -9.5})));
    Parts.BloodElasticCompartment SystemArteries(InitialVolume = 670 / 1.9031365319240374) annotation(Placement(visible = true, transformation(origin = {47, -54.2238}, extent = {{10.0, -10.0}, {-10.0, 10.0}}, rotation = 0)));
    Parts.BloodFlowMeter SA_SR annotation(Placement(transformation(extent = {{-5.5, 6.5}, {5.5, -6.5}}, rotation = 180, origin = {12.5, -56.5})));
    Parts.VariableBloodResistor TotalSystemicResistance annotation(Placement(transformation(extent = {{-10, -10}, {10, 10}}, rotation = 180, origin = {-27, -54})));
    Parts.BloodElasticCompartment SystemVeins(InitialVolume = 3900 / 1.9031365319240374) annotation(Placement(visible = true, transformation(origin = {-88.538, -53.5305}, extent = {{10.0, 10.0}, {-10.0, -10.0}}, rotation = 180)));
    Parts.BloodFlowMeter bloodFlowMeter annotation(Placement(transformation(extent = {{-5.5, 6.5}, {5.5, -6.5}}, rotation = 90, origin = {-88.5, -0.5})));
    Parts.TotalBloodVolume totalBloodVolume annotation(Placement(transformation(extent = {{-9.5, 8.5}, {9.5, -8.5}}, rotation = 270, origin = {-58.5, -4.5})));
    Modelica.Blocks.Interfaces.RealInput LH_StarlingSlope annotation(Placement(transformation(rotation = 0, extent = {{90, 20}, {80, 30}}), iconTransformation(extent = {{90, 20}, {80, 30}})));
    Modelica.Blocks.Interfaces.RealInput PA_Compliance annotation(Placement(transformation(rotation = 0, extent = {{-110, 80}, {-100, 90}}), iconTransformation(extent = {{-110, 80}, {-100, 90}})));
    Modelica.Blocks.Interfaces.RealOutput PA_StressedVolume annotation(Placement(transformation(rotation = 0, extent = {{-100, 60}, {-110, 70}}), iconTransformation(extent = {{-100, 60}, {-110, 70}})));
    Modelica.Blocks.Interfaces.RealInput PA_UnstressedVolume annotation(Placement(transformation(rotation = 0, extent = {{-110, 90}, {-100, 100}}), iconTransformation(extent = {{-110, 90}, {-100, 100}})));
    Modelica.Blocks.Interfaces.RealOutput PA_Volume(start = PlumonaryArteries.InitialVolume) annotation(Placement(transformation(rotation = 0, extent = {{-100, 70}, {-110, 80}}), iconTransformation(extent = {{-100, 70}, {-110, 80}})));
    Modelica.Blocks.Interfaces.RealInput PV_Compliance annotation(Placement(transformation(rotation = 0, extent = {{90, 80}, {80, 90}}), iconTransformation(extent = {{90, 80}, {80, 90}})));
    Modelica.Blocks.Interfaces.RealOutput PV_StressedVolume annotation(Placement(transformation(rotation = 0, extent = {{80, 60}, {90, 70}}), iconTransformation(extent = {{80, 60}, {90, 70}})));
    Modelica.Blocks.Interfaces.RealInput PV_UnstressedVolume annotation(Placement(transformation(rotation = 0, extent = {{90, 90}, {80, 100}}), iconTransformation(extent = {{90, 90}, {80, 100}})));
    Modelica.Blocks.Interfaces.RealOutput PV_Volume(start = PlumonaryVeins.InitialVolume) annotation(Placement(transformation(rotation = 0, extent = {{80, 70}, {90, 80}}), iconTransformation(extent = {{80, 70}, {90, 80}})));
    Modelica.Blocks.Interfaces.RealInput RH_StarlingSlope annotation(Placement(transformation(rotation = 0, extent = {{-110, 20}, {-100, 30}}), iconTransformation(extent = {{-110, 20}, {-100, 30}})));
    Modelica.Blocks.Interfaces.RealInput SA_Compliance annotation(Placement(transformation(rotation = 0, extent = {{90, -30}, {80, -20}}), iconTransformation(extent = {{90, -30}, {80, -20}})));
    Modelica.Blocks.Interfaces.RealOutput SA_StressedVolume annotation(Placement(transformation(rotation = 0, extent = {{80, -50}, {90, -40}}), iconTransformation(extent = {{80, -50}, {90, -40}})));
    Modelica.Blocks.Interfaces.RealInput SA_UnstressedVolume annotation(Placement(transformation(rotation = 0, extent = {{90, -20}, {80, -10}}), iconTransformation(extent = {{90, -20}, {80, -10}})));
    Modelica.Blocks.Interfaces.RealOutput SA_Volume(start = SystemArteries.InitialVolume) annotation(Placement(transformation(rotation = 0, extent = {{80, -40}, {90, -30}}), iconTransformation(extent = {{80, -40}, {90, -30}})));
    Modelica.Blocks.Interfaces.RealInput SV_Compliance annotation(Placement(transformation(rotation = 0, extent = {{-110, -30}, {-100, -20}}), iconTransformation(extent = {{-110, -30}, {-100, -20}})));
    Modelica.Blocks.Interfaces.RealOutput SV_StressedVolume annotation(Placement(transformation(rotation = 0, extent = {{-100, -50}, {-110, -40}}), iconTransformation(extent = {{-100, -50}, {-110, -40}})));
    Modelica.Blocks.Interfaces.RealInput SV_UnstressedVolume annotation(Placement(transformation(rotation = 0, extent = {{-110, -20}, {-100, -10}}), iconTransformation(extent = {{-110, -20}, {-100, -10}})));
    Modelica.Blocks.Interfaces.RealOutput SV_Volume(start = SystemVeins.InitialVolume) annotation(Placement(transformation(rotation = 0, extent = {{-100, -40}, {-110, -30}}), iconTransformation(extent = {{-100, -40}, {-110, -30}})));
    Modelica.Blocks.Interfaces.RealInput TPR_BloodResistance annotation(Placement(transformation(rotation = 270, extent = {{-5, -5}, {5, 5}}, origin = {-29, 120}), iconTransformation(extent = {{-5, -5}, {5, 5}}, rotation = 270, origin = {5, 115})));
    Modelica.Blocks.Interfaces.RealInput TSR_BloodResistance annotation(Placement(transformation(rotation = 90, extent = {{-5, -5}, {5, 5}}, origin = {-27, -80}), iconTransformation(extent = {{-5, -5}, {5, 5}}, rotation = 90, origin = {5, -75})));
    Modelica.Blocks.Interfaces.RealOutput LH_BloodFlowPerMin annotation(Placement(transformation(rotation = 0, extent = {{80, 10}, {90, 20}}), iconTransformation(extent = {{80, 10}, {90, 20}})));
    Modelica.Blocks.Interfaces.RealOutput TBV_BloodVolume annotation(Placement(transformation(rotation = 270, extent = {{-5, -5}, {5, 5}}, origin = {-54, -80}), iconTransformation(extent = {{-5, -5}, {5, 5}}, rotation = 270, origin = {-35, -75})));
    Modelica.Blocks.Interfaces.RealInput TBV_DesiredBloodVolume annotation(Placement(transformation(rotation = 90, extent = {{-5, -5}, {5, 5}}, origin = {-41, -80}), iconTransformation(extent = {{-5, -5}, {5, 5}}, rotation = 90, origin = {-25, -75})));
    Modelica.Blocks.Interfaces.RealOutput PA_Pressure(start = PlumonaryArteries.InitialVolume) annotation(Placement(transformation(rotation = 0, extent = {{-100, 50}, {-110, 60}}), iconTransformation(extent = {{-100, 50}, {-110, 60}})));
    Modelica.Blocks.Interfaces.RealOutput RH_BloodFlowPerMin(start = PlumonaryArteries.InitialVolume) annotation(Placement(transformation(rotation = 0, extent = {{-109, 2}, {-119, 12}}), iconTransformation(extent = {{-109, 2}, {-119, 12}})));
    Modelica.Blocks.Interfaces.RealOutput SV_Pressure annotation(Placement(transformation(rotation = 0, extent = {{-100, -60}, {-110, -50}}), iconTransformation(extent = {{-100, -60}, {-110, -50}})));
    Modelica.Blocks.Interfaces.RealOutput SA_Pressure annotation(Placement(transformation(rotation = 0, extent = {{80, -60}, {90, -50}}), iconTransformation(extent = {{80, -60}, {90, -50}})));
    Modelica.Blocks.Interfaces.RealOutput PV_Pressure annotation(Placement(transformation(rotation = 0, extent = {{80, 50}, {90, 60}}), iconTransformation(extent = {{80, 50}, {90, 60}})));
  equation
    connect(RightHeart.refBloodVolume, SystemVeins.Volume) annotation(Line(points={{-90,13},
            {-100,13},{-100,-65},{-95.538,-65},{-95.538,-60.3277}},                                                                                            color = {0, 0, 127}, smooth = Smooth.None));
    connect(PlumonaryArteries.bloodFlow, RightHeart.Outflow) annotation(Line(visible = true, origin = {-74.838, 44.2012}, points = {{3.32539, 9.1006}, {-9.162, 9.1006}, {-9.162, -13.2012}}, thickness = 1));
    connect(PlumonaryArteries.bloodFlow, TotalPulmonaryResistance.Inflow) annotation(Line(points = {{-71.5126, 53.3018}, {-51.7563, 53.3018}, {-51.7563, 76}, {-39, 76}}, color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
    connect(TotalPulmonaryResistance.Outflow, PlumonaryVeins.bloodFlow) annotation(Line(visible = true, origin = {13.312, 60.228}, points = {{-32.312, 15.772}, {7.0698, 15.772}, {7.0698, -10.7721}, {7.19771, -10.7721}}, thickness = 1));
    connect(LeftHeart.Inflow, PlumonaryVeins.bloodFlow) annotation(Line(visible = true, origin = {39.2422, 45.1881}, points={{7.7578,
            -12.1881},{7.7578,3.9602},{-18.7325,3.9602},{-18.7325,4.2678}},                                                                                                                                   thickness = 1));
    connect(LeftHeart.Outflow, bloodFlowMeter1.Inflow) annotation(Line(points = {{47, 13}, {47.5, 13}, {47.5, -4}}, color = {0, 0, 0}, smooth = Smooth.None, thickness = 1));
    connect(bloodFlowMeter1.Outflow, SystemArteries.bloodFlow) annotation(Line(points={{47.5,
            -15},{46.5126,-15},{46.5126,-54.2238}},                                                                                         color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
    connect(SA_SR.Inflow, SystemArteries.bloodFlow) annotation(Line(points={{18,
            -56.5},{33,-56.5},{33,-54.2238},{46.5126,-54.2238}},                                                                              color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
    connect(SA_SR.Outflow, TotalSystemicResistance.Inflow) annotation(Line(points = {{7, -56.5}, {-5, -56.5}, {-5, -54}, {-17, -54}}, color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
    connect(SystemVeins.bloodFlow, TotalSystemicResistance.Outflow) annotation(Line(visible = true, origin = {-50.8688, -50.9218}, points = {{-37.1818, -2.6087}, {1.2579, -3.0782}, {13.8688, -3.0782}}, thickness = 1));
    connect(bloodFlowMeter.Inflow, SystemVeins.bloodFlow) annotation(Line(visible = true, origin = {-85.591, -29.7621}, points = {{-2.909, 23.7621}, {-2.909, 1.0876}, {-2.9089, -23.7684}, {-2.45961, -23.7684}}, thickness = 1));
    connect(bloodFlowMeter.Outflow, RightHeart.Inflow) annotation(Line(points = {{-88.5, 5}, {-84, 5}, {-84, 11}}, color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
    connect(totalBloodVolume.bloodFlowConnector, SystemVeins.bloodFlow) annotation(Line(points = {{-58.67, -13.05}, {-64.1, -13.05}, {-64.1, -53.5305}, {-88.0506, -53.5305}}, color = {0, 0, 0}, thickness = 1, smooth = Smooth.None));
    connect(PlumonaryArteries.Volume, totalBloodVolume.u) annotation(Line(points={{-79,
            46.5046},{-79,35},{-65,35},{-65,7},{-65.3,7},{-65.3,0.25}},                                                                                         color = {0, 0, 127}, smooth = Smooth.None));
    connect(totalBloodVolume.u2, SystemArteries.Volume) annotation(Line(points={{-55.61,
            -0.51},{-55.61,12},{27,12},{27,-75},{54,-75},{54,-61.0209}},                                                                                          color = {0, 0, 127}, smooth = Smooth.None));
    connect(totalBloodVolume.u3, SystemVeins.Volume) annotation(Line(points={{-51.36,
            -0.51},{-51.36,20},{0,20},{0,-65},{-95.538,-65},{-95.538,-60.3277}},                                                                                       color = {0, 0, 127}, smooth = Smooth.None));
    connect(LH_StarlingSlope, LeftHeart.StarlingSlope) annotation(Line(points = {{85, 25}, {85, 23}, {74, 23}, {56, 23}}, color = {0, 0, 127}));
    connect(PV_Compliance, PlumonaryVeins.Compliance) annotation(Line(points={{85,85},
            {26.4917,85},{26.4917,58.1005}},                                                                                  color = {0, 0, 127}));
    connect(PV_Volume, PlumonaryVeins.Volume) annotation(Line(points={{85,75},{
            54,75},{54,42.6587},{27.9971,42.6587}},                                                                             color = {0, 0, 127}));
    connect(RH_StarlingSlope, RightHeart.StarlingSlope) annotation(Line(points = {{-105, 25}, {-105, 25}, {-105, 21}, {-93, 21}}, color = {0, 0, 127}));
    connect(SA_Compliance, SystemArteries.Compliance) annotation(Line(points={{85,-25},
            {52.4947,-25},{52.4947,-45.5792}},                                                                                   color = {0, 0, 127}));
    connect(SA_StressedVolume, SystemArteries.StressedVolume) annotation(Line(points={{85,-45},
            {85,-64.0209},{47,-64.0209}},                                                                                           color = {0, 0, 127}));
    connect(SA_UnstressedVolume, SystemArteries.UnstressedVolume) annotation(Line(points={{85,-15},
            {41.4947,-15},{41.4947,-45.0792}},                                                                                               color = {0, 0, 127}));
    connect(SV_Compliance, SystemVeins.Compliance) annotation(Line(points={{-105,
            -25},{-94.0326,-25},{-94.0326,-44.8859}},                                                                             color = {0, 0, 127}));
    connect(SV_StressedVolume, SystemVeins.StressedVolume) annotation(Line(points={{-105,
            -45},{-105,-63.3277},{-88.538,-63.3277}},                                                                                     color = {0, 0, 127}));
    connect(SV_UnstressedVolume, SystemVeins.UnstressedVolume) annotation(Line(points={{-105,
            -15},{-105,-15},{-105,-44.3859},{-83.0326,-44.3859}},                                                                                           color = {0, 0, 127}));
    connect(SV_Volume, SystemVeins.Volume) annotation(Line(points={{-105,-35},{
            -105,-35},{-105,-60.3277},{-95.538,-60.3277}},                                                                             color = {0, 0, 127}));
    connect(TPR_BloodResistance, TotalPulmonaryResistance.BloodResistance) annotation(Line(points={{-29,120},
            {-29,85.2569}},                                                                                                       color = {0, 0, 127}));
    connect(TSR_BloodResistance, TotalSystemicResistance.BloodResistance) annotation(Line(points={{-27,-80},
            {-27,-63.2569}},                                                                                                      color = {0, 0, 127}));
    connect(LH_BloodFlowPerMin, bloodFlowMeter1.BloodFlowPerMin) annotation(Line(points = {{85, 15}, {85, -9.72}, {72, -9.72}, {52.96, -9.72}}, color = {0, 0, 127}));
    connect(TBV_BloodVolume, totalBloodVolume.BloodVolume) annotation(Line(points = {{-54, -80}, {-54, -48}, {-54.42, -48}, {-54.42, -12.48}}, color = {0, 0, 127}));
    connect(PlumonaryArteries.UnstressedVolume, PA_UnstressedVolume) annotation(Line(points={{
            -66.4947,62.4464},{-66.4947,95},{-105,95}},                                                                                          color = {0, 0, 127}, smooth = Smooth.None));
    connect(PlumonaryArteries.Compliance, PA_Compliance) annotation(Line(points={{
            -77.4947,61.9464},{-77.4947,85},{-105,85}},                                                                              color = {0, 0, 127}, smooth = Smooth.None));
    connect(PlumonaryArteries.Volume, PA_Volume) annotation(Line(points={{-79,
            46.5046},{-86,46.5046},{-86,75},{-105,75}},                                                                            color = {0, 0, 127}, smooth = Smooth.None));
    connect(PlumonaryArteries.StressedVolume, PA_StressedVolume) annotation(Line(points={{-72,
            43.5046},{-90,43.5046},{-90,65},{-105,65}},                                                                                            color = {0, 0, 127}, smooth = Smooth.None));
    connect(PlumonaryArteries.Pressure, PA_Pressure) annotation(Line(points={{-65,
            46.0425},{-65,39},{-96,39},{-96,55},{-105,55}},                                                                                  color = {0, 0, 127}, smooth = Smooth.None));
    connect(bloodFlowMeter.BloodFlowPerMin, RH_BloodFlowPerMin) annotation(Line(points = {{-93.96, -0.28}, {-100.48, -0.28}, {-100.48, 7}, {-114, 7}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(SystemVeins.Pressure, SV_Pressure) annotation(Line(points={{-81.538,
            -60.7898},{-81.538,-55},{-105,-55}},                                                                            color = {0, 0, 127}, smooth = Smooth.None));
    connect(SA_StressedVolume, SA_StressedVolume) annotation(Line(points = {{85, -45}, {84, -45}, {84, -26}, {83, -26}, {83, -45}, {85, -45}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(SystemArteries.Volume, SA_Volume) annotation(Line(points={{54,
            -61.0209},{70,-61.0209},{70,-35},{85,-35}},                                                                        color = {0, 0, 127}, smooth = Smooth.None));
    connect(SystemArteries.Pressure, SA_Pressure) annotation(Line(points={{40,
            -61.4831},{40,-55},{85,-55}},                                                                          color = {0, 0, 127}, smooth = Smooth.None));
    connect(PlumonaryVeins.StressedVolume, PV_StressedVolume) annotation(Line(points={{20.9971,
            39.6587},{78,39.6587},{78,65},{85,65}},                                                                                             color = {0, 0, 127}, smooth = Smooth.None));
    connect(PlumonaryVeins.Pressure, PV_Pressure) annotation(Line(points={{13.9971,
            42.1966},{13.9971,55},{85,55}},                                                                               color = {0, 0, 127}, smooth = Smooth.None));
    connect(LeftHeart.refBloodVolume, PlumonaryVeins.Volume) annotation(Line(points={{53,31},
            {60,31},{60,43},{27.9971,43},{27.9971,42.6587}},                                                                                             color = {0, 0, 127}, smooth = Smooth.None));
    connect(totalBloodVolume.u1, PlumonaryVeins.Volume) annotation(Line(points={{-59.86,
            -0.32},{-59.86,25},{27.9971,25},{27.9971,42.6587}},                                                                                      color = {0, 0, 127}, smooth = Smooth.None));
    connect(TBV_DesiredBloodVolume, totalBloodVolume.DesiredBloodVolume) annotation(Line(points = {{-41, -80}, {-41, -61}, {-46, -61}, {-46, -8.3}, {-50.68, -8.3}}, color = {0, 0, 127}, smooth = Smooth.None));
    connect(PlumonaryVeins.UnstressedVolume, PV_UnstressedVolume) annotation(Line(points={{15.4917,
            58.6005},{15.4917,95},{85,95}},                                                                                               color = {0, 0, 127}, smooth = Smooth.None));
    annotation(Diagram(coordinateSystem(extent = {{-110, -80}, {90, 120}}, preserveAspectRatio = false, grid = {1, 1}), graphics), Icon(coordinateSystem(extent = {{-110, -80}, {90, 120}}, preserveAspectRatio = false, grid = {1, 1}), graphics={  Rectangle(extent = {{-106, 115}, {85, -75}}, lineColor = {0, 0, 255},
              fillPattern =                                                                                                    FillPattern.Solid, fillColor = {255, 170, 170}), Text(extent = {{-98, 95}, {-30, 94}}, lineColor = {0, 0, 255}, fontSize = 8, textString = "PA_UnstressedVolume",
              horizontalAlignment =                                                                                                    TextAlignment.Left), Text(extent = {{-98, 84.5}, {-30, 84}}, lineColor = {0, 0, 255}, fontSize = 8, textString = "PA_Compliance",
              horizontalAlignment =                                                                                                    TextAlignment.Left), Text(extent = {{-98, 74.5}, {-30, 75}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Left, textString = "PA_Volume"), Text(extent = {{-98, 64.5}, {-30, 65}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Left, textString = "PA_StressedVolume"), Text(extent = {{-98, 54.5}, {-30, 55}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Left, textString = "PA_Pressure"), Text(extent = {{-97, -54.5}, {-29, -54}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Left, textString = "SV_Pressure"), Text(extent = {{-97, -44.5}, {-29, -44}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Left, textString = "SV_StressedVolume"), Text(extent = {{-97, -34.5}, {-29, -34}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Left, textString = "SV_Volume"), Text(extent = {{-97, -24.5}, {-29, -25}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Left, textString = "SV_Compliance"), Text(extent = {{-97, -14}, {-29, -15}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Left, textString = "SV_UnstressedVolume"), Text(extent = {{9, -14}, {77, -15}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Right, textString = "SA_UnstressedVolume"), Text(extent = {{9, -24.5}, {77, -25}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Right, textString = "SA_Compliance"), Text(extent = {{9, -34.5}, {77, -34}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Right, textString = "SA_Volume"), Text(extent = {{9, -44.5}, {77, -44}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Right, textString = "SA_StressedVolume"), Text(extent = {{9, -54.5}, {77, -54}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Right, textString = "SA_Pressure"), Text(extent = {{9, 74.5}, {77, 75}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Right, textString = "PV_Volume"), Text(extent = {{9, 54.5}, {77, 55}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Right, textString = "PV_Pressure"), Text(extent = {{9, 64.5}, {77, 65}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Right, textString = "PV_StressedVolume"), Text(extent = {{9, 84.5}, {77, 84}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Right, textString = "PV_Compliance"), Text(extent = {{9, 95}, {77, 94}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Right, textString = "PV_UnstressedVolume"), Text(extent = {{9, 14.5}, {77, 15}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Right, textString = "LH_BloodVolumePerMin"), Text(extent = {{9, 24.5}, {77, 25}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Right, textString = "LH_StarlingSlope"), Text(extent = {{-97, 15.5}, {-29, 16}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Left, textString = "RH_BloodVolumePerMin"), Text(extent = {{-97, 25.5}, {-29, 26}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Left, textString = "RH_StarlingSlope"), Text(extent = {{-34, 0.5}, {34, -0.5}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Left, origin = {5, 73.5}, rotation = 270, textString = "TPR_BloodResistance"), Text(extent = {{-34, -0.25}, {34, 0.25}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Left, origin = {5, -34.25}, rotation = 90, textString = "TSR_BloodResistance"), Text(extent = {{-34, -0.25}, {34, 0.25}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Left, origin = {-35, -33.25}, rotation = 90, textString = "TBV_BloodVolume"), Text(extent = {{-34, -0.25}, {34, 0.25}}, lineColor = {0, 0, 255}, fontSize = 8,
              horizontalAlignment =                                                                                                    TextAlignment.Left, origin = {-25, -33.25}, rotation = 90, textString = "TBV_DesiredBloodVolume")}));
  end SimpleCirculationChip;
  annotation(uses(Modelica(version="4.0.0")));
end Frvs;
