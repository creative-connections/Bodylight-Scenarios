within ;
package FeMetabolism
  model FeMetabolismModel
    "Implementation of Enulescu et al. PLOS Comput. Biol. 2017 Fe metabolism model: new version"

    //################################################
    // Main varibles in ODES
    //################################################

    // Hepcidin expression
    //################################################
    Real hep(start=0.6649,unit="ug") "Hepcidin ammount (s16 )";
    Real Bmp6(start=15.82,unit="ug") "Bmp6 ammount (s18)";
  //  Real LPS(start=1.000,fixed=true,unit="ug") "LPS (Lipopolysaccharide) ammount (s23)"; //1.00 hodnota z clanku
    Real LPS(start=0.000,unit="ug") "LPS (Lipopolysaccharide) ammount (s23)"; //1.00 hodnota z clanku
    //LPS startovni hodnota musi byt 0 - v prubehu simulace se injektuje LPS - novy parametr LPS_inj_rate a jak dlouho se ma injektovat
    Real Il6mRNA(start=0.000,unit="ug") "IL-6 mRNA ammount (s21)"; //NESEDI JEDNOTKY !!!
    Real Il6(start=0.000,unit="ug") "IL-L ammount (s22)";

    // Ferroportin regulation
    //################################################
    Real Fpn_liv_mRNA(start=0.922424,unit="ug") "Fpn mRNA ammount in liver (s7)";
    Real Fpn_spl_mRNA(start=0.922424,unit="ug") "Fpn mRNA ammount in spleen (s9)";
    Real Fpn_duo_mRNA(start=0.922424,unit="ug") "Fpn mRNA ammount in duodenum (s8)";
    Real Fpn_res_mRNA(start=0.922424,unit="ug") "Fpn mRNA ammount in other organs (s11)";

    Real Fpn_liv(start=1.00003,unit="ug") "Fpn ammount in liver (s12)";
    Real Fpn_spl(start=1.00002,unit="ug") "Fpn ammount in spleen (s14)";
    Real Fpn_duo(start=0.999991,unit="ug") "Fpn ammount in duodenum (s13)";
    Real Fpn_res(start=0.999965,unit="ug") "Fpn ammount in other organs (s15)";

    // Dynamics of the iron pools
    //################################################
    Real Fe_liv(start=76.9948,unit="ug") "Fe ammount in liver (s2)";
    Real Fe_spl(start=17.741,unit="ug") "Fe ammount in spleen (s5)";
    Real Fe_bm(start=63.1707,unit="ug") "Fe ammount in bones (s3)";
    Real Fe_RBC(start=1016.900,unit="ug") "Fe ammount in red blood cells (s6)";
    Real Fe_duo(start=2.97258,unit="ug") "Fe ammount in duodenum (s4)";
    Real Fe_res(start=466.985,unit="ug") "Fe ammount in other organs (s10)";
    Real Fe_ser(start=1.51331,unit="ug") "Fe ammount in serum (s1)";

    Real Fe_total(unit="ug") = Fe_liv + Fe_spl + Fe_bm + Fe_RBC + Fe_duo + Fe_res + Fe_ser "Total Fe amount";
    //1 sec simulation = 1 hour in model
    Real Fe_ser_input(unit="ug.h-1") "Fe ammount in serum: input";
    Real Fe_ser_output(unit="ug.h-1") "Fe ammount in serum: output";

    //################################################
    // Model parameters
    // Format: rate constants (k): k^{X}_{Y} -->> k_{X}_{Y}; (K): K^{X}_{Y} -->> K_{X}_{Y}; MIN/MAX value -->> MIN/MAX in description
    //################################################

    // Hepcidin expression
    //################################################
    parameter Real k_hep_deg(unit="h-1") = 0.07 "Hepcidin degradation rate (k20), 0.067/0.070";
    parameter Real K_Bmp6(unit="ug") = 19.65 "Michaelis-Menten constant Bmp6 synthesis (k37), 16.5/55.7";
    parameter Real v_Bmp6_max(unit="h-1") = 1.6015*K_Bmp6 "Bmp6 maximal synthesis rate (k21*k37 = k21*K_Bmp6) k21 = 1.6015, K_Bmp6 = 19.65, 14.2/126.5";
    parameter Real Tf(unit="ug") = 1000.0 "Paremeter determining the maximal amount of iron that can be bound to transferrin (k32)";
    parameter Real k_Bmp6_deg(unit="h-1") = 2.3962 "Bmp6 degradation rate (k22), 1.0/9.5";
    parameter Real k_LPS_deg(unit="h-1") = 5.8560 "LPS degradation rate, 5.9/5.9";
    parameter Real K_Il6mRNA(unit="ug") = 2.6e-6 "Michaelis-Menten constant Il6mRNA synthesis, 2.6-e6/2.6e-6";
    parameter Real k_Il6mRNA_deg(unit="h-1") = 0.2814 "Il6mRNA degradation rate, 0.28/0.28";
    parameter Real k_Il6_syn(unit="h-1") = 4.1067*157.4 "Il6 synthesis rate, 4.1067*k23, k23 = 157.4, 136/872"; // NESEDI JEDNOTKY!!!
    parameter Real k_Il6_deg(unit="h-1") = 4.4465 "Il6 degradation rate, 4.45/4.45";

    // Ferroportin regulation
    //################################################
    parameter Real K_2(unit="a.u.") = 0.0012836 "Constant FpnmRNA production (k41), 3.0e-4/2.0e-3";
    parameter Real k_FpnmRNA_deg(unit="h-1") = 1.0841 "FpnmRNA degradation rate (k25), 1.02/1.20";
    parameter Real K_liv_1(unit="a.u.") = 30.66 "Constant Fpn_liv_mRNA production (k24), 28.0/32.5";
    parameter Real K_spl_1(unit="a.u.") = 1.0867*K_liv_1 "Constant Fpn_spl_mRNA production (k36*K_liv_1, k36 = 1.086700), 33.1/34.5";
    parameter Real K_duo_1(unit="a.u.") = 0.020001*K_liv_1 "Constant Fpn_duo_mRNA production (k35*K_liv_1, k35 = 0.020001), 0.56/0.79";
    parameter Real K_res_1(unit="a.u.") = 0.36629*K_liv_1 "Constant Fpn_res_mRNA production (k42*K_liv_1, k42 = 0.366290), 7.80/43.7";
    parameter Real k_Fpnliv_syn(unit="h-1") = 0.1297 "Fpnliv synthesis rate (k28), 0.07/0.14";
    parameter Real k_Fpnspl_syn(unit="h-1") = 0.022722 "Fpnspl synthesis rate (k30), 0.015/0.027";
    parameter Real k_Fpnduo_syn(unit="h-1") = 0.030299 "Fpnduo synthesis rate (k29), 0.01/0.25";
    parameter Real k_Fpnres_syn(unit="h-1") = 0.0050598 "Fpnres synthesis rate (k40), 0.004/0.108";
    parameter Real k_liv_1(unit="ug-1") = 0.0033177 "Constant Fpn_liv production (k17), 0.002/0.006";
    parameter Real k_spl_1(unit="ug-1") = 0.014027 "Constant Fpn_spl production (k27), 0.005/0.028";
    parameter Real k_duo_1(unit="ug-1") = 0.16007 "Constant Fpn_duo production (k46), 0.06/0.49";
    parameter Real k_res_1(unit="ug-1") = 0.11376 "Constant Fpn_res production (k47), 0.004/0.152";
    parameter Real k_Fpnliv_deg(unit="h-1") = 0.055363 "Fpnliv degradation rate (k12), 0.01/0.06";
    parameter Real k_Fpnspl_deg(unit="h-1") = k_Fpnliv_deg*0.054621 "Fpnspl degradation rate (k12*k18, k18 = 0.054621), 0.0007/0.0038";
    parameter Real k_Fpnduo_deg(unit="h-1") = k_Fpnliv_deg*0.3815 "Fpnduo degradation rate (k12*k15, k15 = 0.3815), 0.0056/0.147";
    parameter Real k_Fpnres_deg(unit="h-1") = k_Fpnliv_deg*0.52232 "Fpnres degradation rate (k12*k38, k38 = 0.52232), 0.025/0.129";
    parameter Real k_liv_2(unit="a.u.") = 2.5743 "Constant Fpnliv degradation (k13), 2.11/12.93";
    parameter Real k_spl_2(unit="a.u.") = k_liv_2*4.4694 "Constant Fpnspl degradation (k13*k19, k19 = 4.4694), 9.2/73.7";
    parameter Real k_duo_2(unit="a.u.") = k_liv_2*0.55631 "Constant Fpnduo degradation (k13*k16, k16 = 0.55631), 0.78/4.16";
    parameter Real k_res_2(unit="a.u.") = k_liv_2*4.5163 "Constant Fpnres degradation (k13*k39, k39 = 4.5163), 3.7/38.1";

    // Dynamics of the iron pools
    //################################################
    parameter Real v_liv_1(unit="ug.h-1") = 3.9607 "Low liver iron uptake (k4), 2.78/9.81";
    parameter Real v_liv_2(unit="ug.h-1") = 14.3810 "High liver iron uptake (k45)"; //!!! Inconsistecy xml model vs. paper !!!, xml model value adopted;
    parameter Real th(unit="ug") = 2.6870 "Threshold serum iron value (k26), 2.08/3.00";
    parameter Real u_liv(unit="h-1") = 0.077844 "Liver iron export rate (k1), 0.05/0.19";
    parameter Real Fe_liv_max(unit="uq") = 119.55 "Threshold value liver iron export (k43), 100.0/159.0";
    parameter Real v_spl_1(unit="h-1") = 0.0036035 "Spleen iron uptake rate from RBC (k10), 0.002 = value for trace exp., 0.004/0.005";
    parameter Real v_spl_2(unit="h-1") = 0.0096817 "Spleen iron uptake rate from bones (k7), 0.008/0.019";
    parameter Real u_spl(unit="h-1") = 0.24102 "Spleen export rate (k3), 0.21/0.36";
    parameter Real Fe_spl_max(unit="ug") = 88.216 "Threshold value spleen iron export (k44), 57.0/95.0";
    parameter Real v_bm(unit="h-1") = 2.8256 "Bone marrow uptake rate (k5), 2.66/4.16";
    parameter Real v_RBC(unit="h-1") = 0.058008 "RBC uptake rate (k8), 0.055/0.075"; // !!! Problem u rovnice (14) - doplnit prvni term na prave strane
    parameter Real k14(unit="1") = 0.19419 "k14 constant";
    parameter Real k31(unit="1") = 33.333 "k31 constant";
    parameter Real K_duo(unit="ug.h-1") = 177.34 "Saturation parameter duodenal uptake, corresponds to k11, units??"; // !!! Problem u rovnice (14) - doplnit prvni term na prave strane
    parameter Real v_duo(unit="h-1") = 0.70485 "Duodenal uptake rate from blood (k6), 0.6/1.3";
    parameter Real u_duo(unit="h-1") = 0.88356 "Duodenal export rate (k2), 0.66/1.38";
    parameter Real v_res(unit="h-1") = 6.3206 "Other organs uptake rate (k34), 5.4/10.0";
    parameter Real u_res(unit="h-1") = 0.017143 "Other organs export rate (k33), 0.014/0.030";
    parameter Real v_duo_lost(unit="h-1") = 0.091919 "Iron lost rate duodenum (k48), 0.001/0.320";
    parameter Real u_res_lost(unit="h-1") = 0.0033401 "Iron lost rate rest (k9), 0.002/0.004";
    parameter Real Fe_res_max(unit="ug") = 510.68 "Limit value, iron lost rest (k49), 510/947";

    // Food income parameters
    //################################################
    parameter Real v_duo_max(unit="uq.h-1") = 9.86 "Maximal duodenal uptake from food (SI. Eq.14)";
    parameter Real Fe_food(unit="ug.h-1") = 218.6322 "Food iron content (SI. Eq.14), default: 218.6322";


    // Pathophysiology parameters
    //################################################

     type exprese = enumeration(
        Nulova
           "Nulova",
        Polovicni
           "Polovicni",
        Fyziologicka
           "Fyziologicka",
        Zvysena
           "Zvysena");

    // Iron deficiency (anemia)
     parameter Real bleeding(unit="ug.h-1") = 0 "Bleeding, to be set";
     parameter Real malabsorption = 1 "iron malabsorption coefficient: <0;1>; 0 = no absorption, 1 = physiologic";
     parameter Real loss_factor = 1 "iron loss factor, 1 = physiologic, >1 enhanced loss";

    // Iron overload (hemochromatosis)
     parameter Real transfusion(unit="ug.h-1") = 0 "transfusion rate, to be set";
     parameter Boolean unregulated_absorption = false;

    // Hepcidine-related
     parameter Real hep_knockout = 1;
    // parameter exprese hep_exp = exprese.Fyziologicka; //defaultni hodnota, mozne nastaveni: Fyziologicka, Nulova, Polovicni, Zvysena
    // parameter Real hep_knockout=
    //   if hep_exp == exprese.Nulova then 0
    //   elseif hep_exp == exprese.Polovicni then 0.5
    //   elseif hep_exp == exprese.Fyziologicka then 1
    //   else 2;

    // Fpn-related
     parameter Real Fpn_duo_knockout = 1;
    // parameter exprese Fpn_duo_exp = exprese.Fyziologicka; //defaultni hodnota, mozne nastaveni: Fyziologicka, Nulova, Polovicni, Zvysena
    // parameter Real Fpn_duo_knockout=
    //   if Fpn_duo_exp == exprese.Nulova then 0
    //   elseif Fpn_duo_exp == exprese.Polovicni then 0.5
    //   elseif Fpn_duo_exp == exprese.Fyziologicka then 1
    //   else 2;

     parameter Real Fpn_liv_knockout = 1;
    // parameter exprese Fpn_liv_exp = exprese.Fyziologicka; //defaultni hodnota, mozne nastaveni: Fyziologicka, Nulova, Polovicni, Zvysena
    // parameter Real Fpn_liv_knockout=
    //   if Fpn_liv_exp == exprese.Nulova then 0
    //   elseif Fpn_liv_exp == exprese.Polovicni then 0.5
    //   elseif Fpn_liv_exp == exprese.Fyziologicka then 1
    //   else 2;

     parameter Real Fpn_spl_knockout = 1;
    // parameter exprese Fpn_spl_exp = exprese.Fyziologicka; //defaultni hodnota, mozne nastaveni: Fyziologicka, Nulova, Polovicni, Zvysena
    // parameter Real Fpn_spl_knockout=
    //   if Fpn_spl_exp == exprese.Nulova then 0
    //   elseif Fpn_spl_exp == exprese.Polovicni then 0.5
    //   elseif Fpn_spl_exp == exprese.Fyziologicka then 1
    //   else 2;

     parameter Real Fpn_res_knockout = 1;
    // parameter exprese Fpn_res_exp = exprese.Fyziologicka; //defaultni hodnota, mozne nastaveni: Fyziologicka, Nulova, Polovicni, Zvysena
    // parameter Real Fpn_res_knockout=
    //   if Fpn_res_exp == exprese.Nulova then 0
    //   elseif Fpn_res_exp == exprese.Polovicni then 0.5
    //   elseif Fpn_res_exp == exprese.Fyziologicka then 1
    //   else 2;


    // Auxiliary variables
    // ###############################################

    // General

    parameter Real to_ferritin_rate = 3 "rate of flow Fe++ -> Fe+++";
    parameter Real from_ferritin_rate = 1 "rate of flow Fe+++ -> Fe++"; //was to_ferritin_rate/3 which is calculated continuously

    // Duodenum

    Real Fe_duo_2(start=0.74,unit="ug") "Fe++ in duodenum";
    Real Fe_duo_3(start=2.22,unit="ug") "Fe+++ in duodenum, basically in ferritin";

    Real Fe_duo_to_ferritin = to_ferritin_rate * Fe_duo_2;
    Real Fe_duo_from_ferritin = from_ferritin_rate * Fe_duo_3;

    Real Fe_duo_intake = v_duo_max*Fe_food/(Fe_food+K_duo) "Fe intake from food";

    Real Fe_duo_in_food =   (if unregulated_absorption then Fe_duo_intake else Fe_duo_intake*min(1/Fe_duo, 1)*malabsorption) "Fe input to duodenum from intestines, prev:in_1";
    Real Fe_duo_in_ser =   v_duo*Fe_ser "Fe input to duodenum from serum, prev:in_2";
    Real Fe_duo_out_ser =  u_duo*Fe_duo*Fpn_duo "Fe output from duodenum to serum, prev:out_1";
    Real Fe_duo_out_loss =  v_duo_lost*Fe_duo "Fe output from duodenum to intestines (Fe loss), prev:out_2";
    Real Fe_duo_unused = Fe_duo_intake*(1-min(1/Fe_duo, 1)) "Unused Fe going through intestines";

    Real Fpn_duo_in_1 = k_Fpnduo_syn*Fpn_duo_mRNA "Fpn in duodenum creation: standard from mRNA";
    Real Fpn_duo_in_2 = k_Fpnduo_syn*k_duo_1*Fe_duo*Fpn_duo_mRNA "Fpn in duodenum creation by activation of Fe_duo";
    Real Fpn_duo_out_1 = k_Fpnduo_deg*Fpn_duo "Degradation (internalization) of Fpn in duodenum: standard degradation rate";
    Real Fpn_duo_out_2 = k_Fpnduo_deg*k_duo_2*hep*Fpn_duo "Degradation (internalization) of Fpn in duodenum by hepcidine";

    Real Fpn_duo_in =    Fpn_duo_in_1 + Fpn_duo_in_2 "Fpn in duodenum synthesis";
    Real Fpn_duo_out =   Fpn_duo_out_1 + Fpn_duo_out_2 "Fpn in duodenum degradation";

    Real Fpn_duo_mRNA_in =  Fpn_duo_knockout/(1 + Fpn_duo_mRNA_inhib) "Fpn mRNA in duodenum synthesis";
    Real Fpn_duo_mRNA_out = k_FpnmRNA_deg*Fpn_duo_mRNA "Fpn mRNA in duodenum degradation";
    Real Fpn_duo_mRNA_inhib = (K_duo_1*Il6)/(K_2 + Il6) "Fpn mRNA in duodenum production inhibition by IL-6 (or indirectly by LPS)";

    // Liver

    Real Fe_liv_2(start=19.2487,unit="ug") "Fe++ in liver";
    Real Fe_liv_3(start=57.7461,unit="ug") "Fe+++ in liver, basically in ferritin";

    Real Fe_liv_to_ferritin = to_ferritin_rate * Fe_liv_2;
    Real Fe_liv_from_ferritin = from_ferritin_rate * Fe_liv_3;

    Real Fe_liv_in_ser = v_liv_1*min(Fe_ser, th) + v_liv_2*max(Fe_ser - th, 0) "Fe input to liver from serum";
    Real Fe_liv_out_ser = u_liv*min(Fe_liv, Fe_liv_max)*Fpn_liv "Fe output from liver to serum";

    Real Fpn_liv_in_1 = k_Fpnliv_syn*Fpn_liv_mRNA "Fpn in liver creation: standard from mRNA";
    Real Fpn_liv_in_2 = k_Fpnliv_syn*k_liv_1*Fe_liv*Fpn_liv_mRNA "Fpn in liver creation by activation of Fe_liv";
    Real Fpn_liv_out_1 = k_Fpnliv_deg*Fpn_liv "Degradation (internalization) of Fpn in liver: standard degradation rate";
    Real Fpn_liv_out_2 = k_Fpnliv_deg*k_liv_2*hep*Fpn_liv "Degradation (internalization) of Fpn in liver by hepcidine";

    Real Fpn_liv_in = Fpn_liv_in_1 + Fpn_liv_in_2 "Fpn in liver synthesis";
    Real Fpn_liv_out = Fpn_liv_out_1 + Fpn_liv_out_2 "Fpn in liver degradation";

    Real Fpn_liv_mRNA_in = Fpn_liv_knockout/(1 + Fpn_liv_mRNA_inhib) "Fpn mRNA in liver synthesis";
    Real Fpn_liv_mRNA_out = k_FpnmRNA_deg*Fpn_liv_mRNA "Fpn mRNA in liver degradation";
    Real Fpn_liv_mRNA_inhib = (K_liv_1*Il6)/(K_2 + Il6) "Fpn mRNA in liver production inhibition by IL-6 (or indirectly by LPS)";

    // Serum

    Real Fe_ser_in_liv = u_liv*MIN(Fe_liv, Fe_liv_max)*Fpn_liv "Fe flow from liver to serum";
    Real Fe_ser_in_spl = u_spl*MIN(Fe_spl,Fe_spl_max)*Fpn_spl "Fe flow from spleen to serum";
    Real Fe_ser_in_duo = u_duo*Fe_duo*Fpn_duo "Fe flow from duodenum to serum";
    Real Fe_ser_in_res = u_res*Fe_res*Fpn_res "Fe flow from other organs to serum";

    Real Fe_ser_out_liv = v_liv_1*MIN(Fe_ser, th) + v_liv_2*MAX(Fe_ser - th, 0) "Fe flow from serum to liver";
    Real Fe_ser_out_bm =  v_bm*Fe_ser "Fe flow from serum to bone marrow";
    Real Fe_ser_out_duo = v_duo*Fe_ser "Fe flow from serum to duodenum";
    Real Fe_ser_out_res = v_res*Fe_ser "Fe flow from serum to other organs";

    // Hepcidine related stuff

    Real hep_in =  Promoter(Il6, Bmp6)*hep_knockout "Production of hepcidin";
    Real hep_out = k_hep_deg*hep "Degradation of hepcidin";

    Real Il6mRNA_in =  LPS/(LPS + K_Il6mRNA) "Production of IL-6 mRNA";
    Real Il6mRNA_out = k_Il6mRNA_deg*Il6mRNA "Degradation of IL-6 mRNA";

    Real Il6_in =  k_Il6_syn*(Il6mRNA^4) "Production of IL-6";
    Real Il6_out = k_Il6_deg*Il6 "Degradation of IL-6";

    Real Bmp6_in = v_Bmp6_max*(Fe_liv/(K_Bmp6 + Fe_liv))*MIN(Fe_ser, Tf) "Bmp6 production rate";
    Real Bmp6_out = k_Bmp6_deg*Bmp6 "Bmp6 degradation rate";

    // Spleen.

    Real Fe_spl_2(start=4.43,unit="ug") "Fe++ in spleen";
    Real Fe_spl_3(start=14.29,unit="ug") "Fe++ in spleen";

    Real Fe_spl_to_ferritin = to_ferritin_rate * Fe_spl_2;
    Real Fe_spl_from_ferritin = from_ferritin_rate * Fe_spl_3;

    Real Fe_spl_in_RBC = v_spl_1*Fe_RBC "Fe flow to spleen from RBC";
    Real Fe_spl_in_bm = v_spl_2*Fe_bm "Fe flow to spleen from bone marrow";
    Real Fe_spl_out_ser = u_spl*MIN(Fe_spl, Fe_spl_max)*Fpn_spl "Fe flow from spleen to serum";

    Real Fpn_spl_in_1 = k_Fpnspl_syn*Fpn_spl_mRNA "Fpn in spleen creation: standard from mRNA";
    Real Fpn_spl_in_2 = k_Fpnspl_syn*k_spl_1*Fe_spl*Fpn_spl_mRNA "Fpn in spleen creation by activation of Fe_spl";
    Real Fpn_spl_out_1 = k_Fpnspl_deg*Fpn_spl "Degradation (internalization) of Fpn in spleen: standard degradation rate";
    Real Fpn_spl_out_2 = k_Fpnspl_deg*k_spl_2*hep*Fpn_spl "Degradation (internalization) of Fpn in spleen by hepcidine";

    Real Fpn_spl_in = Fpn_spl_in_1 + Fpn_spl_in_2 "Fpn in spleen synthesis";
    Real Fpn_spl_out = Fpn_spl_out_1 + Fpn_spl_out_2 "Fpn in spleen degradation";

    Real Fpn_spl_mRNA_in = Fpn_spl_knockout/(1 + Fpn_spl_mRNA_inhib) "Fpn mRNA in spleen synthesis";
    Real Fpn_spl_mRNA_out = k_FpnmRNA_deg*Fpn_spl_mRNA "Fpn mRNA in spleen degradation";
    Real Fpn_spl_mRNA_inhib = (K_spl_1*Il6)/(K_2 + Il6) "Fpn mRNA in spleen production inhibition by IL-6 (or indirectly by LPS)";

    // Other organs

    Real Fe_res_2(start=116.703,unit="ug") "Fe++ in other organs";
    Real Fe_res_3(start=350.108,unit="ug") "Fe++ in other organs";

    Real Fe_res_to_ferritin = to_ferritin_rate * Fe_res_2;
    Real Fe_res_from_ferritin = from_ferritin_rate * Fe_res_3;

    Real Fe_res_in_ser = v_res*Fe_ser "Fe flow to other organs from serum";
    Real Fe_res_out_ser = u_res*Fe_res*Fpn_res "Fe flow from other organs to serum";
    Real Fe_res_out_loss = u_res_lost*MIN(Fe_res, Fe_res_max)*loss_factor "Fe loss from other organs (skin peeling, etc.)";

    Real Fpn_res_in_1 = k_Fpnres_syn*Fpn_res_mRNA "Fpn in other organs creation: standard from mRNA";
    Real Fpn_res_in_2 = k_Fpnres_syn*k_res_1*Fe_res*Fpn_res_mRNA "Fpn in other organs creation by activation of Fe_res";
    Real Fpn_res_out_1 = k_Fpnres_deg*Fpn_res "Degradation (internalization) of Fpn in other organs: standard degradation rate";
    Real Fpn_res_out_2 = k_Fpnres_deg*k_res_2*hep*Fpn_res "Degradation (internalization) of Fpn in other organs by hepcidine";

    Real Fpn_res_in = Fpn_res_in_1 + Fpn_res_in_2 "Fpn in spleen synthesis";
    Real Fpn_res_out = Fpn_res_out_1 + Fpn_res_out_2 "Fpn in spleen degradation";

    Real Fpn_res_mRNA_in = Fpn_res_knockout/(1 + Fpn_res_mRNA_inhib) "Fpn mRNA in other organs synthesis";
    Real Fpn_res_mRNA_out = k_FpnmRNA_deg*Fpn_res_mRNA "Fpn mRNA in other organs degradation";
    Real Fpn_res_mRNA_inhib = (K_res_1*Il6)/(K_2 + Il6) "Fpn mRNA in other organs production inhibition by IL-6 (or indirectly by LPS)";

    // Bone marrow

    Real Fe_bm_in_ser = v_bm*Fe_ser "Fe flow to bone marrow from serum";
    Real Fe_bm_out_RBC = v_RBC*Fe_bm "Fe flow from bone marrow to RBC";
    Real Fe_bm_out_spl = v_spl_2*Fe_bm "Fe flow from bone marrow to spleen";

    // Red blood cells (RBC)

    Real Fe_RBC_in_bm = v_RBC*Fe_bm "Fe flow to RBC from bone marrow";
    Real Fe_RBC_out_spl = v_spl_1*Fe_RBC "Fe flow from RBC to spleen";

    //################################################
    // INITIAL EQUATIONS
    //################################################

  initial equation

    // Hepcidine-related stuff

    der(hep) = 0; // eq. 1
    der(Bmp6) = 0; // eq. 2
    //der(LPS) = 0; // eq. 3
    der(Il6mRNA) = 0; // eq 4.
    der(Il6) = 0; // eq 5.

    // Duodenum

    der(Fe_duo_2) = 0; // eq 14.
    der(Fe_duo_3) = 0;
    der(Fpn_duo) = 0; // eq 7.3
    der(Fpn_duo_mRNA) = 0; // eq 6.3

    // Serum

    der(Fe_ser) = 0; // eq 16.

    // Liver

    der(Fe_liv_2) = 0;
    der(Fe_liv_3) = 0;
    der(Fpn_liv) = 0; // eq 7.1
    der(Fpn_liv_mRNA) = 0; // eq 6.1

    // Spleen

    der(Fe_spl_2) = 0;
    der(Fe_spl_3) = 0;
    der(Fpn_spl) = 0; // eq 7.2
    der(Fpn_spl_mRNA) = 0; // eq 6.2

    // Other organs

    der(Fe_res_2) = 0;
    der(Fe_res_3) = 0;
    der(Fpn_res) = 0; // eq 7.4
    der(Fpn_res_mRNA) = 0; // eq 6.4

    // Bone marrow

    der(Fe_bm) = 0; //eq 12.

    // Red blood cells

    der(Fe_RBC) = 0; //eq 13.

    //################################################
    // EQUATIONS
    //################################################

  equation

    // Hepcidine-related stuff

    der(hep) = hep_in - hep_out; // eq. 1
    der(Bmp6) = Bmp6_in - Bmp6_out; // eq. 2
    der(LPS) = -k_LPS_deg*LPS; // eq. 3
    der(Il6mRNA) = Il6mRNA_in - Il6mRNA_out; // eq 4.
    der(Il6) = Il6_in - Il6_out; // eq 5.

    // Duodenum

    Fe_duo = Fe_duo_2 + Fe_duo_3;
    der(Fe_duo_2) = Fe_duo_in_food + Fe_duo_in_ser - Fe_duo_out_ser - Fe_duo_out_loss + Fe_duo_from_ferritin - Fe_duo_to_ferritin; // eq 14.
    der(Fe_duo_3) = Fe_duo_to_ferritin - Fe_duo_from_ferritin;
    der(Fpn_duo) = Fpn_duo_in - Fpn_duo_out; // eq 7.3
    der(Fpn_duo_mRNA) = Fpn_duo_mRNA_in - Fpn_duo_mRNA_out; // eq 6.3

    // Serum

    Fe_ser_input = Fe_ser_in_liv + Fe_ser_in_spl + Fe_ser_in_duo + Fe_ser_in_res + transfusion;
    Fe_ser_output = Fe_ser_out_liv + Fe_ser_out_bm + Fe_ser_out_duo + Fe_ser_out_res + bleeding;

    der(Fe_ser) = Fe_ser_input - Fe_ser_output; // eq 16.

    // Liver

    Fe_liv = Fe_liv_2 + Fe_liv_3;
    der(Fe_liv_2) = Fe_liv_in_ser - Fe_liv_out_ser + Fe_liv_from_ferritin - Fe_liv_to_ferritin;
    der(Fe_liv_3) = Fe_liv_to_ferritin - Fe_liv_from_ferritin;
    der(Fpn_liv) = Fpn_liv_in - Fpn_liv_out; // eq 7.1
    der(Fpn_liv_mRNA) = Fpn_liv_mRNA_in - Fpn_liv_mRNA_out; // eq 6.1

    // Spleen

    Fe_spl = Fe_spl_2 + Fe_spl_3;
    der(Fe_spl_2) = Fe_spl_in_RBC + Fe_spl_in_bm - Fe_spl_out_ser + Fe_spl_from_ferritin - Fe_spl_to_ferritin;
    der(Fe_spl_3) = Fe_spl_to_ferritin - Fe_spl_from_ferritin;
    der(Fpn_spl) = Fpn_spl_in - Fpn_spl_out; // eq 7.2
    der(Fpn_spl_mRNA) = Fpn_spl_mRNA_in - Fpn_spl_mRNA_out; // eq 6.2

    // Other organs

    Fe_res = Fe_res_2 + Fe_res_3;
    der(Fe_res_2) = Fe_res_in_ser - Fe_res_out_ser - Fe_res_out_loss + Fe_res_from_ferritin - Fe_res_to_ferritin;
    der(Fe_res_3) = Fe_res_to_ferritin - Fe_res_from_ferritin;
    der(Fpn_res) = Fpn_res_in - Fpn_res_out; // eq 7.4
    der(Fpn_res_mRNA) = Fpn_res_mRNA_in - Fpn_res_mRNA_out; // eq 6.4

    // Bone marrow

    der(Fe_bm) = Fe_bm_in_ser - Fe_bm_out_RBC - Fe_bm_out_spl; //eq 12.

    // Red blood cells

    der(Fe_RBC) = Fe_RBC_in_bm - Fe_RBC_out_spl - bleeding + transfusion; //eq 13.

    annotation (
      Icon(coordinateSystem(preserveAspectRatio=false)),
      Diagram(coordinateSystem(preserveAspectRatio=false)),
      experiment(
        StopTime=10000,
        __Dymola_NumberOfIntervals=100000,
        Tolerance=1e-06,
        __Dymola_Algorithm="Cvode"));
  end FeMetabolismModel;

  function facB1 "facB1 function (id f9)"
    input Real facB1_i1;
    input Real facB1_i2;
    output Real facB1_o1 "result";
  algorithm
    facB1_o1 := ((pSMAD(pSMAD_i1=facB1_i1, pSMAD_i2=facB1_i2))^1.7807)/0.4391;
  end facB1;

  function facB2 "facB2 function (id f10)"
    input Real facB2_i1;
    input Real facB2_i2;
    output Real facB2_o1 "result";
  algorithm
    facB2_o1 := ((pSMAD(pSMAD_i1=facB2_i1, pSMAD_i2=facB2_i2))^1.7807)/16.8738;
  end facB2;

  function facSig "facSig function (id f5)"
    input Real facSig_i1;
    input Real facSig_i2;
    output Real facSig_o1 "result";
  algorithm
    facSig_o1 := (0.1285*2.852*hill(
        hill_i1=facSig_i1,
        hill_i2=1.0242,
        hill_i3=7.7388) - (1 + 0.4135*(0.0583 + 1.949*hill(
        hill_i1=facSig_i2,
        hill_i2=1.4481,
        hill_i3=140.244))))/(1 + 0.4135*0.0583);
  end facSig;

  function facSig1 "facSig1 function (id f6)"
    input Real facSig1_i1;
    output Real facSig1_o1 "result";
  algorithm
    facSig1_o1 := 0.1285*2.852*hill(
        hill_i1=facSig1_i1,
        hill_i2=1.0242,
        hill_i3=7.7388)/(1 + 0.4135*0.0583);
  end facSig1;

  function facST "facST function (id f11)"
    input Real facST_i1;
    input Real facST_i2;
    output Real facST_o1 "result";
  algorithm
    facST_o1 := pSTAT(pSTAT_i1=facST_i1, pSTAT_i2=facST_i2)/206.3988;
  end facST;

  function Freg "Freg function (id f14)"
    input Real Freg_i1;
    input Real Freg_i2;
    output Real Freg_o1 "result";
  algorithm
    Freg_o1 := Freg1(Freg1_i1=Freg_i1, Freg1_i2=Freg_i2)/Freg2(Freg2_i1=Freg_i1,
      Freg2_i2=Freg_i2);
  end Freg;

  function Freg1 "Freg1 function (id f12)"
    input Real Freg1_i1;
    input Real Freg1_i2;
    output Real Freg1_o1 "result";
  algorithm
    Freg1_o1 := 1 + FeMetabolism.facB1(facB1_i1=Freg1_i1, facB1_i2=Freg1_i2)*
      537.649 + FeMetabolism.facB2(facB2_i1=Freg1_i1, facB2_i2=Freg1_i2)*4972.6
       + FeMetabolism.facST(facST_i1=Freg1_i1, facST_i2=Freg1_i2)*584.75 +
      FeMetabolism.facB1(facB1_i1=Freg1_i1, facB1_i2=Freg1_i2)*
      FeMetabolism.facB2(facB2_i1=Freg1_i1, facB2_i2=Freg1_i2)*537.649*4972.6
       + FeMetabolism.facB1(facB1_i1=Freg1_i1, facB1_i2=Freg1_i2)*
      FeMetabolism.facST(facST_i1=Freg1_i1, facST_i2=Freg1_i2)*537.649*584.75*
      5.3869 + FeMetabolism.facB2(facB2_i1=Freg1_i1, facB2_i2=Freg1_i2)*
      FeMetabolism.facST(facST_i1=Freg1_i1, facST_i2=Freg1_i2)*4972.6*584.75 +
      FeMetabolism.facB1(facB1_i1=Freg1_i1, facB1_i2=Freg1_i2)*
      FeMetabolism.facB2(facB2_i1=Freg1_i1, facB2_i2=Freg1_i2)*
      FeMetabolism.facST(facST_i1=Freg1_i1, facST_i2=Freg1_i2)*537.649*4972.6*
      584.75*5.3869;
  end Freg1;

  function Freg2 "Freg2 function (id f13)"
    input Real Freg2_i1;
    input Real Freg2_i2;
    output Real Freg2_o1 "result";
  algorithm
    Freg2_o1 := 1 + FeMetabolism.facB1(facB1_i1=Freg2_i1, facB1_i2=Freg2_i2) +
      FeMetabolism.facB2(facB2_i1=Freg2_i1, facB2_i2=Freg2_i2) +
      FeMetabolism.facST(facST_i1=Freg2_i1, facST_i2=Freg2_i2) +
      FeMetabolism.facB1(facB1_i1=Freg2_i1, facB1_i2=Freg2_i2)*
      FeMetabolism.facB2(facB2_i1=Freg2_i1, facB2_i2=Freg2_i2) +
      FeMetabolism.facB1(facB1_i1=Freg2_i1, facB1_i2=Freg2_i2)*
      FeMetabolism.facST(facST_i1=Freg2_i1, facST_i2=Freg2_i2)*5.3869 +
      FeMetabolism.facB2(facB2_i1=Freg2_i1, facB2_i2=Freg2_i2)*
      FeMetabolism.facST(facST_i1=Freg2_i1, facST_i2=Freg2_i2) +
      FeMetabolism.facB1(facB1_i1=Freg2_i1, facB1_i2=Freg2_i2)*
      FeMetabolism.facB2(facB2_i1=Freg2_i1, facB2_i2=Freg2_i2)*
      FeMetabolism.facST(facST_i1=Freg2_i1, facST_i2=Freg2_i2)*5.3869;
  end Freg2;

  function hill "Hill function (id f4)"
    input Real hill_i1;
    input Real hill_i2;
    input Real hill_i3;
    output Real hill_o1 "result";
    constant Real eps=1e-9;
    Real i1_lim;
    Real i3_lim;
  algorithm
    if hill_i1 < eps then
      i1_lim := eps;
    else
      i1_lim := hill_i1;
    end if;

    if hill_i3 < eps then
      i3_lim := eps;
    else
      i3_lim := hill_i3;
    end if;

    hill_o1 := (i1_lim^hill_i2)/(i1_lim^hill_i2 + i3_lim^hill_i2);
  end hill;

  function Promoter "Promoter occupancy function (id f15)"
    input Real Promoter_i1;
    input Real Promoter_i2;
    output Real Promoter_o1 "result";
  algorithm
    Promoter_o1 := FeMetabolism.Freg(Freg_i1=Promoter_i1, Freg_i2=Promoter_i2)/(
      FeMetabolism.Freg(Freg_i1=Promoter_i1, Freg_i2=Promoter_i2) + 6804.7);
  end Promoter;

  function pSMAD "pSMAD function (id f8)"
    input Real pSMAD_i1;
    input Real pSMAD_i2;
    output Real pSMAD_o1 "result";
  algorithm
    pSMAD_o1 := 0.0583 + 1.949*FeMetabolism.hill(
        hill_i1=pSMAD_i2,
        hill_i2=1.4481,
        hill_i3=140.244)/(1 + 0.1285*pSTAT(pSTAT_i1=pSMAD_i1, pSTAT_i2=pSMAD_i2));
  end pSMAD;

  function pSTAT "pSTAT function (id f7)"
    input Real pSTAT_i1;
    input Real pSTAT_i2;
    output Real pSTAT_o1 "result";
  algorithm
    pSTAT_o1 := (0.5/0.1285)*(FeMetabolism.facSig(facSig_i1=pSTAT_i1, facSig_i2=
      pSTAT_i2) + sqrt((FeMetabolism.facSig(facSig_i1=pSTAT_i1, facSig_i2=
      pSTAT_i2))^2 + 4*FeMetabolism.facSig1(facSig1_i1=pSTAT_i1)));
  end pSTAT;

  function MIN "MINimum function (id f1)"
    input Real MIN_i1;
    input Real MIN_i2;
    output Real MIN_o1 "result";
  algorithm
    MIN_o1 := (MIN_i1 + MIN_i2 - abs(MIN_i1 - MIN_i2))/2;
  end MIN;

  function MAX "MAXimum function (id f2)"
    input Real MAX_i1;
    input Real MAX_i2;
    output Real MAX_o1 "result";
  algorithm
    MAX_o1 := (MAX_i1 + MAX_i2 + abs(MAX_i1 - MAX_i2))/2;
  end MAX;

  model FeMetabolismModel2
    "Implementation of Enulescu et al. PLOS Comput. Biol. 2017 Fe metabolism model: new version"

    //################################################
    // Main varibles in ODES
    //################################################

    // Hepcidin expression
    //################################################
    Real hep(start=0.6649,unit="ug") "Hepcidin ammount (s16 )";
    Real Bmp6(start=15.82,unit="ug") "Bmp6 ammount (s18)";
  //  Real LPS(start=1.000,fixed=true,unit="ug") "LPS (Lipopolysaccharide) ammount (s23)"; //1.00 hodnota z clanku
    Real LPS(start=0.000,unit="ug") "LPS (Lipopolysaccharide) ammount (s23)"; //1.00 hodnota z clanku
    //LPS startovni hodnota musi byt 0 - v prubehu simulace se injektuje LPS - novy parametr LPS_inj_rate a jak dlouho se ma injektovat
    Real Il6mRNA(start=0.000,unit="ug") "IL-6 mRNA ammount (s21)"; //NESEDI JEDNOTKY !!!
    Real Il6(start=0.000,unit="ug") "IL-L ammount (s22)";

    // Ferroportin regulation
    //################################################
    Real Fpn_liv_mRNA(start=0.922424,unit="ug") "Fpn mRNA ammount in liver (s7)";
    Real Fpn_spl_mRNA(start=0.922424,unit="ug") "Fpn mRNA ammount in spleen (s9)";
    Real Fpn_duo_mRNA(start=0.922424,unit="ug") "Fpn mRNA ammount in duodenum (s8)";
    Real Fpn_res_mRNA(start=0.922424,unit="ug") "Fpn mRNA ammount in other organs (s11)";

    Real Fpn_liv(start=1.00003,unit="ug") "Fpn ammount in liver (s12)";
    Real Fpn_spl(start=1.00002,unit="ug") "Fpn ammount in spleen (s14)";
    Real Fpn_duo(start=0.999991,unit="ug") "Fpn ammount in duodenum (s13)";
    Real Fpn_res(start=0.999965,unit="ug") "Fpn ammount in other organs (s15)";

    // Dynamics of the iron pools
    //################################################
    Real Fe_liv(start=76.9948,unit="ug") "Fe ammount in liver (s2)";
    Real Fe_spl(start=17.741,unit="ug") "Fe ammount in spleen (s5)";
    Real Fe_bm(start=63.1707,unit="ug") "Fe ammount in bones (s3)";
    Real Fe_RBC(start=1016.900,unit="ug") "Fe ammount in red blood cells (s6)";
    Real Fe_duo(start=2.97258,unit="ug") "Fe ammount in duodenum (s4)";
    Real Fe_res(start=466.985,unit="ug") "Fe ammount in other organs (s10)";
    Real Fe_ser(start=1.51331,unit="ug") "Fe ammount in serum (s1)";

    Real Fe_total(unit="ug") = Fe_liv + Fe_spl + Fe_bm + Fe_RBC + Fe_duo + Fe_res + Fe_ser "Total Fe amount";
    //1 sec simulation = 1 hour in model
    Real Fe_ser_input(unit="ug.h-1") "Fe ammount in serum: input";
    Real Fe_ser_output(unit="ug.h-1") "Fe ammount in serum: output";

    //################################################
    // Model parameters
    // Format: rate constants (k): k^{X}_{Y} -->> k_{X}_{Y}; (K): K^{X}_{Y} -->> K_{X}_{Y}; MIN/MAX value -->> MIN/MAX in description
    //################################################

    // Hepcidin expression
    //################################################
    parameter Real k_hep_deg(unit="h-1") = 0.07 "Hepcidin degradation rate (k20), 0.067/0.070";
    parameter Real K_Bmp6(unit="ug") = 19.65 "Michaelis-Menten constant Bmp6 synthesis (k37), 16.5/55.7";
    parameter Real v_Bmp6_max(unit="h-1") = 1.6015*K_Bmp6 "Bmp6 maximal synthesis rate (k21*k37 = k21*K_Bmp6) k21 = 1.6015, K_Bmp6 = 19.65, 14.2/126.5";
    parameter Real Tf(unit="ug") = 1000.0 "Paremeter determining the maximal amount of iron that can be bound to transferrin (k32)";
    parameter Real k_Bmp6_deg(unit="h-1") = 2.3962 "Bmp6 degradation rate (k22), 1.0/9.5";
    parameter Real k_LPS_deg(unit="h-1") = 5.8560 "LPS degradation rate, 5.9/5.9";
    parameter Real K_Il6mRNA(unit="ug") = 2.6e-6 "Michaelis-Menten constant Il6mRNA synthesis, 2.6-e6/2.6e-6";
    parameter Real k_Il6mRNA_deg(unit="h-1") = 0.2814 "Il6mRNA degradation rate, 0.28/0.28";
    parameter Real k_Il6_syn(unit="h-1") = 4.1067*157.4 "Il6 synthesis rate, 4.1067*k23, k23 = 157.4, 136/872"; // NESEDI JEDNOTKY!!!
    parameter Real k_Il6_deg(unit="h-1") = 4.4465 "Il6 degradation rate, 4.45/4.45";

    // Ferroportin regulation
    //################################################
    parameter Real K_2(unit="a.u.") = 0.0012836 "Constant FpnmRNA production (k41), 3.0e-4/2.0e-3";
    parameter Real k_FpnmRNA_deg(unit="h-1") = 1.0841 "FpnmRNA degradation rate (k25), 1.02/1.20";
    parameter Real K_liv_1(unit="a.u.") = 30.66 "Constant Fpn_liv_mRNA production (k24), 28.0/32.5";
    parameter Real K_spl_1(unit="a.u.") = 1.0867*K_liv_1 "Constant Fpn_spl_mRNA production (k36*K_liv_1, k36 = 1.086700), 33.1/34.5";
    parameter Real K_duo_1(unit="a.u.") = 0.020001*K_liv_1 "Constant Fpn_duo_mRNA production (k35*K_liv_1, k35 = 0.020001), 0.56/0.79";
    parameter Real K_res_1(unit="a.u.") = 0.36629*K_liv_1 "Constant Fpn_res_mRNA production (k42*K_liv_1, k42 = 0.366290), 7.80/43.7";
    parameter Real k_Fpnliv_syn(unit="h-1") = 0.1297 "Fpnliv synthesis rate (k28), 0.07/0.14";
    parameter Real k_Fpnspl_syn(unit="h-1") = 0.022722 "Fpnspl synthesis rate (k30), 0.015/0.027";
    parameter Real k_Fpnduo_syn(unit="h-1") = 0.030299 "Fpnduo synthesis rate (k29), 0.01/0.25";
    parameter Real k_Fpnres_syn(unit="h-1") = 0.0050598 "Fpnres synthesis rate (k40), 0.004/0.108";
    parameter Real k_liv_1(unit="ug-1") = 0.0033177 "Constant Fpn_liv production (k17), 0.002/0.006";
    parameter Real k_spl_1(unit="ug-1") = 0.014027 "Constant Fpn_spl production (k27), 0.005/0.028";
    parameter Real k_duo_1(unit="ug-1") = 0.16007 "Constant Fpn_duo production (k46), 0.06/0.49";
    parameter Real k_res_1(unit="ug-1") = 0.11376 "Constant Fpn_res production (k47), 0.004/0.152";
    parameter Real k_Fpnliv_deg(unit="h-1") = 0.055363 "Fpnliv degradation rate (k12), 0.01/0.06";
    parameter Real k_Fpnspl_deg(unit="h-1") = k_Fpnliv_deg*0.054621 "Fpnspl degradation rate (k12*k18, k18 = 0.054621), 0.0007/0.0038";
    parameter Real k_Fpnduo_deg(unit="h-1") = k_Fpnliv_deg*0.3815 "Fpnduo degradation rate (k12*k15, k15 = 0.3815), 0.0056/0.147";
    parameter Real k_Fpnres_deg(unit="h-1") = k_Fpnliv_deg*0.52232 "Fpnres degradation rate (k12*k38, k38 = 0.52232), 0.025/0.129";
    parameter Real k_liv_2(unit="a.u.") = 2.5743 "Constant Fpnliv degradation (k13), 2.11/12.93";
    parameter Real k_spl_2(unit="a.u.") = k_liv_2*4.4694 "Constant Fpnspl degradation (k13*k19, k19 = 4.4694), 9.2/73.7";
    parameter Real k_duo_2(unit="a.u.") = k_liv_2*0.55631 "Constant Fpnduo degradation (k13*k16, k16 = 0.55631), 0.78/4.16";
    parameter Real k_res_2(unit="a.u.") = k_liv_2*4.5163 "Constant Fpnres degradation (k13*k39, k39 = 4.5163), 3.7/38.1";

    // Dynamics of the iron pools
    //################################################
    parameter Real v_liv_1(unit="ug.h-1") = 3.9607 "Low liver iron uptake (k4), 2.78/9.81";
    parameter Real v_liv_2(unit="ug.h-1") = 14.3810 "High liver iron uptake (k45)"; //!!! Inconsistecy xml model vs. paper !!!, xml model value adopted;
    parameter Real th(unit="ug") = 2.6870 "Threshold serum iron value (k26), 2.08/3.00";
    parameter Real u_liv(unit="h-1") = 0.077844 "Liver iron export rate (k1), 0.05/0.19";
    parameter Real Fe_liv_max(unit="uq") = 119.55 "Threshold value liver iron export (k43), 100.0/159.0";
    parameter Real v_spl_1(unit="h-1") = 0.0036035 "Spleen iron uptake rate from RBC (k10), 0.002 = value for trace exp., 0.004/0.005";
    parameter Real v_spl_2(unit="h-1") = 0.0096817 "Spleen iron uptake rate from bones (k7), 0.008/0.019";
    parameter Real u_spl(unit="h-1") = 0.24102 "Spleen export rate (k3), 0.21/0.36";
    parameter Real Fe_spl_max(unit="ug") = 88.216 "Threshold value spleen iron export (k44), 57.0/95.0";
    parameter Real v_bm(unit="h-1") = 2.8256 "Bone marrow uptake rate (k5), 2.66/4.16";
    parameter Real v_RBC(unit="h-1") = 0.058008 "RBC uptake rate (k8), 0.055/0.075"; // !!! Problem u rovnice (14) - doplnit prvni term na prave strane
    parameter Real k14(unit="1") = 0.19419 "k14 constant";
    parameter Real k31(unit="1") = 33.333 "k31 constant";
    parameter Real K_duo(unit="ug.h-1") = 177.34 "Saturation parameter duodenal uptake, corresponds to k11, units??"; // !!! Problem u rovnice (14) - doplnit prvni term na prave strane
    parameter Real v_duo(unit="h-1") = 0.70485 "Duodenal uptake rate from blood (k6), 0.6/1.3";
    parameter Real u_duo(unit="h-1") = 0.88356 "Duodenal export rate (k2), 0.66/1.38";
    parameter Real v_res(unit="h-1") = 6.3206 "Other organs uptake rate (k34), 5.4/10.0";
    parameter Real u_res(unit="h-1") = 0.017143 "Other organs export rate (k33), 0.014/0.030";
    parameter Real v_duo_lost(unit="h-1") = 0.091919 "Iron lost rate duodenum (k48), 0.001/0.320";
    parameter Real u_res_lost(unit="h-1") = 0.0033401 "Iron lost rate rest (k9), 0.002/0.004";
    parameter Real Fe_res_max(unit="ug") = 510.68 "Limit value, iron lost rest (k49), 510/947";

    // Food income parameters
    //################################################
    parameter Real v_duo_max(unit="uq.h-1") = 9.86 "Maximal duodenal uptake from food (SI. Eq.14)";
    parameter Real Fe_food(unit="ug.h-1") = 218.6322 "Food iron content (SI. Eq.14), default: 218.6322";

    // Pathophysiology parameters
    //################################################

     type exprese = enumeration(
        Nulova
           "Nulova",
        Polovicni
           "Polovicni",
        Fyziologicka
           "Fyziologicka",
        Zvysena
           "Zvysena");

    // Iron deficiency (anemia)
     parameter Real bleeding(unit="ug.h-1") = 0 "Bleeding, to be set";
     parameter Real malabsorption = 1 "iron malabsorption coefficient: <0;1>; 0 = no absorption, 1 = physiologic";
     parameter Real loss_factor = 1 "iron loss factor, 1 = physiologic, >1 enhanced loss";

    // Iron overload (hemochromatosis)
     parameter Real transfusion(unit="ug.h-1") = 0 "transfusion rate, to be set";
     parameter Boolean unregulated_absorption = false;

    // Hepcidine-related
     parameter Real hep_knockout = 1;
    // parameter exprese hep_exp = exprese.Fyziologicka; //defaultni hodnota, mozne nastaveni: Fyziologicka, Nulova, Polovicni, Zvysena
    // parameter Real hep_knockout=
    //   if hep_exp == exprese.Nulova then 0
    //   elseif hep_exp == exprese.Polovicni then 0.5
    //   elseif hep_exp == exprese.Fyziologicka then 1
    //   else 2;

    // Fpn-related
     parameter Real Fpn_duo_knockout = 1;
    // parameter exprese Fpn_duo_exp = exprese.Fyziologicka; //defaultni hodnota, mozne nastaveni: Fyziologicka, Nulova, Polovicni, Zvysena
    // parameter Real Fpn_duo_knockout=
    //   if Fpn_duo_exp == exprese.Nulova then 0
    //   elseif Fpn_duo_exp == exprese.Polovicni then 0.5
    //   elseif Fpn_duo_exp == exprese.Fyziologicka then 1
    //   else 2;

     parameter Real Fpn_liv_knockout = 1;
    // parameter exprese Fpn_liv_exp = exprese.Fyziologicka; //defaultni hodnota, mozne nastaveni: Fyziologicka, Nulova, Polovicni, Zvysena
    // parameter Real Fpn_liv_knockout=
    //   if Fpn_liv_exp == exprese.Nulova then 0
    //   elseif Fpn_liv_exp == exprese.Polovicni then 0.5
    //   elseif Fpn_liv_exp == exprese.Fyziologicka then 1
    //   else 2;

     parameter Real Fpn_spl_knockout = 1;
    // parameter exprese Fpn_spl_exp = exprese.Fyziologicka; //defaultni hodnota, mozne nastaveni: Fyziologicka, Nulova, Polovicni, Zvysena
    // parameter Real Fpn_spl_knockout=
    //   if Fpn_spl_exp == exprese.Nulova then 0
    //   elseif Fpn_spl_exp == exprese.Polovicni then 0.5
    //   elseif Fpn_spl_exp == exprese.Fyziologicka then 1
    //   else 2;

     parameter Real Fpn_res_knockout = 1;
    // parameter exprese Fpn_res_exp = exprese.Fyziologicka; //defaultni hodnota, mozne nastaveni: Fyziologicka, Nulova, Polovicni, Zvysena
    // parameter Real Fpn_res_knockout=
    //   if Fpn_res_exp == exprese.Nulova then 0
    //   elseif Fpn_res_exp == exprese.Polovicni then 0.5
    //   elseif Fpn_res_exp == exprese.Fyziologicka then 1
    //   else 2;

    // Auxiliary variables
    // ###############################################

    // General

    parameter Real to_ferritin_rate = 3 "rate of flow Fe++ -> Fe+++";
    parameter Real from_ferritin_rate = 1 "rate of flow Fe+++ -> Fe++";

    // Duodenum

    Real Fe_duo_2(start=0.74,unit="ug") "Fe++ in duodenum";
    Real Fe_duo_3(start=2.22,unit="ug") "Fe+++ in duodenum, basically in ferritin";

    Real Fe_duo_to_ferritin = to_ferritin_rate * Fe_duo_2;
    Real Fe_duo_from_ferritin = from_ferritin_rate * Fe_duo_3;

    Real Fe_duo_intake = v_duo_max*Fe_food/(Fe_food+K_duo) "Fe intake from food";

    Real Fe_duo_in_food =   (if unregulated_absorption then Fe_duo_intake else Fe_duo_intake*min(1/Fe_duo, 1)*malabsorption) "Fe input to duodenum from intestines, prev:in_1";
    Real Fe_duo_in_ser =   v_duo*Fe_ser "Fe input to duodenum from serum, prev:in_2";
    Real Fe_duo_out_ser =  u_duo*Fe_duo*Fpn_duo "Fe output from duodenum to serum, prev:out_1";
    Real Fe_duo_out_loss =  v_duo_lost*Fe_duo "Fe output from duodenum to intestines (Fe loss), prev:out_2";
    Real Fe_duo_unused = Fe_duo_intake*(1-min(1/Fe_duo, 1)) "Unused Fe going through intestines";

    Real Fpn_duo_in_1 = k_Fpnduo_syn*Fpn_duo_mRNA "Fpn in duodenum creation: standard from mRNA";
    Real Fpn_duo_in_2 = k_Fpnduo_syn*k_duo_1*Fe_duo*Fpn_duo_mRNA "Fpn in duodenum creation by activation of Fe_duo";
    Real Fpn_duo_out_1 = k_Fpnduo_deg*Fpn_duo "Degradation (internalization) of Fpn in duodenum: standard degradation rate";
    Real Fpn_duo_out_2 = k_Fpnduo_deg*k_duo_2*hep*Fpn_duo "Degradation (internalization) of Fpn in duodenum by hepcidine";

    Real Fpn_duo_in =    Fpn_duo_in_1 + Fpn_duo_in_2 "Fpn in duodenum synthesis";
    Real Fpn_duo_out =   Fpn_duo_out_1 + Fpn_duo_out_2 "Fpn in duodenum degradation";

    Real Fpn_duo_mRNA_in =  Fpn_duo_knockout/(1 + Fpn_duo_mRNA_inhib) "Fpn mRNA in duodenum synthesis";
    Real Fpn_duo_mRNA_out = k_FpnmRNA_deg*Fpn_duo_mRNA "Fpn mRNA in duodenum degradation";
    Real Fpn_duo_mRNA_inhib = (K_duo_1*Il6)/(K_2 + Il6) "Fpn mRNA in duodenum production inhibition by IL-6 (or indirectly by LPS)";

    // Liver

    Real Fe_liv_2(start=19.2487,unit="ug") "Fe++ in liver";
    Real Fe_liv_3(start=57.7461,unit="ug") "Fe+++ in liver, basically in ferritin";

    Real Fe_liv_to_ferritin = to_ferritin_rate * Fe_liv_2;
    Real Fe_liv_from_ferritin = from_ferritin_rate * Fe_liv_3;

    Real Fe_liv_in_ser = v_liv_1*min(Fe_ser, th) + v_liv_2*max(Fe_ser - th, 0) "Fe input to liver from serum";
    Real Fe_liv_out_ser = u_liv*min(Fe_liv, Fe_liv_max)*Fpn_liv "Fe output from liver to serum";

    Real Fpn_liv_in_1 = k_Fpnliv_syn*Fpn_liv_mRNA "Fpn in liver creation: standard from mRNA";
    Real Fpn_liv_in_2 = k_Fpnliv_syn*k_liv_1*Fe_liv*Fpn_liv_mRNA "Fpn in liver creation by activation of Fe_liv";
    Real Fpn_liv_out_1 = k_Fpnliv_deg*Fpn_liv "Degradation (internalization) of Fpn in liver: standard degradation rate";
    Real Fpn_liv_out_2 = k_Fpnliv_deg*k_liv_2*hep*Fpn_liv "Degradation (internalization) of Fpn in liver by hepcidine";

    Real Fpn_liv_in = Fpn_liv_in_1 + Fpn_liv_in_2 "Fpn in liver synthesis";
    Real Fpn_liv_out = Fpn_liv_out_1 + Fpn_liv_out_2 "Fpn in liver degradation";

    Real Fpn_liv_mRNA_in = Fpn_liv_knockout/(1 + Fpn_liv_mRNA_inhib) "Fpn mRNA in liver synthesis";
    Real Fpn_liv_mRNA_out = k_FpnmRNA_deg*Fpn_liv_mRNA "Fpn mRNA in liver degradation";
    Real Fpn_liv_mRNA_inhib = (K_liv_1*Il6)/(K_2 + Il6) "Fpn mRNA in liver production inhibition by IL-6 (or indirectly by LPS)";

    // Serum

    Real Fe_ser_in_liv = u_liv*MIN(Fe_liv, Fe_liv_max)*Fpn_liv "Fe flow from liver to serum";
    Real Fe_ser_in_spl = u_spl*MIN(Fe_spl,Fe_spl_max)*Fpn_spl "Fe flow from spleen to serum";
    Real Fe_ser_in_duo = u_duo*Fe_duo*Fpn_duo "Fe flow from duodenum to serum";
    Real Fe_ser_in_res = u_res*Fe_res*Fpn_res "Fe flow from other organs to serum";

    Real Fe_ser_out_liv = v_liv_1*MIN(Fe_ser, th) + v_liv_2*MAX(Fe_ser - th, 0) "Fe flow from serum to liver";
    Real Fe_ser_out_bm =  v_bm*Fe_ser "Fe flow from serum to bone marrow";
    Real Fe_ser_out_duo = v_duo*Fe_ser "Fe flow from serum to duodenum";
    Real Fe_ser_out_res = v_res*Fe_ser "Fe flow from serum to other organs";

    // Hepcidine related stuff

    Real hep_in =  Promoter(Il6, Bmp6)*hep_knockout "Production of hepcidin";
    Real hep_out = k_hep_deg*hep "Degradation of hepcidin";

    Real Il6mRNA_in =  LPS/(LPS + K_Il6mRNA) "Production of IL-6 mRNA";
    Real Il6mRNA_out = k_Il6mRNA_deg*Il6mRNA "Degradation of IL-6 mRNA";

    Real Il6_in =  k_Il6_syn*(Il6mRNA^4) "Production of IL-6";
    Real Il6_out = k_Il6_deg*Il6 "Degradation of IL-6";

    Real Bmp6_in = v_Bmp6_max*(Fe_liv/(K_Bmp6 + Fe_liv))*MIN(Fe_ser, Tf) "Bmp6 production rate";
    Real Bmp6_out = k_Bmp6_deg*Bmp6 "Bmp6 degradation rate";

    // Spleen.

    Real Fe_spl_2(start=4.43,unit="ug") "Fe++ in spleen";
    Real Fe_spl_3(start=14.29,unit="ug") "Fe++ in spleen";

    Real Fe_spl_to_ferritin = to_ferritin_rate * Fe_spl_2;
    Real Fe_spl_from_ferritin = from_ferritin_rate * Fe_spl_3;

    Real Fe_spl_in_RBC = v_spl_1*Fe_RBC "Fe flow to spleen from RBC";
    Real Fe_spl_in_bm = v_spl_2*Fe_bm "Fe flow to spleen from bone marrow";
    Real Fe_spl_out_ser = u_spl*MIN(Fe_spl, Fe_spl_max)*Fpn_spl "Fe flow from spleen to serum";

    Real Fpn_spl_in_1 = k_Fpnspl_syn*Fpn_spl_mRNA "Fpn in spleen creation: standard from mRNA";
    Real Fpn_spl_in_2 = k_Fpnspl_syn*k_spl_1*Fe_spl*Fpn_spl_mRNA "Fpn in spleen creation by activation of Fe_spl";
    Real Fpn_spl_out_1 = k_Fpnspl_deg*Fpn_spl "Degradation (internalization) of Fpn in spleen: standard degradation rate";
    Real Fpn_spl_out_2 = k_Fpnspl_deg*k_spl_2*hep*Fpn_spl "Degradation (internalization) of Fpn in spleen by hepcidine";

    Real Fpn_spl_in = Fpn_spl_in_1 + Fpn_spl_in_2 "Fpn in spleen synthesis";
    Real Fpn_spl_out = Fpn_spl_out_1 + Fpn_spl_out_2 "Fpn in spleen degradation";

    Real Fpn_spl_mRNA_in = Fpn_spl_knockout/(1 + Fpn_spl_mRNA_inhib) "Fpn mRNA in spleen synthesis";
    Real Fpn_spl_mRNA_out = k_FpnmRNA_deg*Fpn_spl_mRNA "Fpn mRNA in spleen degradation";
    Real Fpn_spl_mRNA_inhib = (K_spl_1*Il6)/(K_2 + Il6) "Fpn mRNA in spleen production inhibition by IL-6 (or indirectly by LPS)";

    // Other organs

    Real Fe_res_2(start=116.703,unit="ug") "Fe++ in other organs";
    Real Fe_res_3(start=350.108,unit="ug") "Fe++ in other organs";

    Real Fe_res_to_ferritin = to_ferritin_rate * Fe_res_2;
    Real Fe_res_from_ferritin = from_ferritin_rate * Fe_res_3;

    Real Fe_res_in_ser = v_res*Fe_ser "Fe flow to other organs from serum";
    Real Fe_res_out_ser = u_res*Fe_res*Fpn_res "Fe flow from other organs to serum";
    Real Fe_res_out_loss = u_res_lost*MIN(Fe_res, Fe_res_max)*loss_factor "Fe loss from other organs (skin peeling, etc.)";

    Real Fpn_res_in_1 = k_Fpnres_syn*Fpn_res_mRNA "Fpn in other organs creation: standard from mRNA";
    Real Fpn_res_in_2 = k_Fpnres_syn*k_res_1*Fe_res*Fpn_res_mRNA "Fpn in other organs creation by activation of Fe_res";
    Real Fpn_res_out_1 = k_Fpnres_deg*Fpn_res "Degradation (internalization) of Fpn in other organs: standard degradation rate";
    Real Fpn_res_out_2 = k_Fpnres_deg*k_res_2*hep*Fpn_res "Degradation (internalization) of Fpn in other organs by hepcidine";

    Real Fpn_res_in = Fpn_res_in_1 + Fpn_res_in_2 "Fpn in spleen synthesis";
    Real Fpn_res_out = Fpn_res_out_1 + Fpn_res_out_2 "Fpn in spleen degradation";

    Real Fpn_res_mRNA_in = Fpn_res_knockout/(1 + Fpn_res_mRNA_inhib) "Fpn mRNA in other organs synthesis";
    Real Fpn_res_mRNA_out = k_FpnmRNA_deg*Fpn_res_mRNA "Fpn mRNA in other organs degradation";
    Real Fpn_res_mRNA_inhib = (K_res_1*Il6)/(K_2 + Il6) "Fpn mRNA in other organs production inhibition by IL-6 (or indirectly by LPS)";

    // Bone marrow

    Real Fe_bm_in_ser = v_bm*Fe_ser "Fe flow to bone marrow from serum";
    Real Fe_bm_out_RBC = v_RBC*Fe_bm "Fe flow from bone marrow to RBC";
    Real Fe_bm_out_spl = v_spl_2*Fe_bm "Fe flow from bone marrow to spleen";

    // Red blood cells (RBC)

    Real Fe_RBC_in_bm = v_RBC*Fe_bm "Fe flow to RBC from bone marrow";
    Real Fe_RBC_out_spl = v_spl_1*Fe_RBC "Fe flow from RBC to spleen";

    //################################################
    // INITIAL EQUATIONS
    //################################################

  initial equation

    // Hepcidine-related stuff

    der(hep) = 0; // eq. 1
    der(Bmp6) = 0; // eq. 2
    //der(LPS) = 0; // eq. 3
    der(Il6mRNA) = 0; // eq 4.
    der(Il6) = 0; // eq 5.

    // Duodenum

    der(Fe_duo_2) = 0; // eq 14.
    der(Fe_duo_3) = 0;
    der(Fpn_duo) = 0; // eq 7.3
    der(Fpn_duo_mRNA) = 0; // eq 6.3

    // Serum

    der(Fe_ser) = 0; // eq 16.

    // Liver

    der(Fe_liv_2) = 0;
    der(Fe_liv_3) = 0;
    der(Fpn_liv) = 0; // eq 7.1
    der(Fpn_liv_mRNA) = 0; // eq 6.1

    // Spleen

    der(Fe_spl_2) = 0;
    der(Fe_spl_3) = 0;
    der(Fpn_spl) = 0; // eq 7.2
    der(Fpn_spl_mRNA) = 0; // eq 6.2

    // Other organs

    der(Fe_res_2) = 0;
    der(Fe_res_3) = 0;
    der(Fpn_res) = 0; // eq 7.4
    der(Fpn_res_mRNA) = 0; // eq 6.4

    // Bone marrow

    der(Fe_bm) = 0; //eq 12.

    // Red blood cells

    der(Fe_RBC) = 0; //eq 13.

    //################################################
    // EQUATIONS
    //################################################

  equation

    // Hepcidine-related stuff

    der(hep) = hep_in - hep_out; // eq. 1
    der(Bmp6) = Bmp6_in - Bmp6_out; // eq. 2
    der(LPS) = -k_LPS_deg*LPS; // eq. 3
    der(Il6mRNA) = Il6mRNA_in - Il6mRNA_out; // eq 4.
    der(Il6) = Il6_in - Il6_out; // eq 5.

    // Duodenum

    Fe_duo = Fe_duo_2 + Fe_duo_3;
    der(Fe_duo_2) = Fe_duo_in_food + Fe_duo_in_ser - Fe_duo_out_ser - Fe_duo_out_loss + Fe_duo_from_ferritin - Fe_duo_to_ferritin; // eq 14.
    der(Fe_duo_3) = Fe_duo_to_ferritin - Fe_duo_from_ferritin;
    der(Fpn_duo) = Fpn_duo_in - Fpn_duo_out; // eq 7.3
    der(Fpn_duo_mRNA) = Fpn_duo_mRNA_in - Fpn_duo_mRNA_out; // eq 6.3

    // Serum

    Fe_ser_input = Fe_ser_in_liv + Fe_ser_in_spl + Fe_ser_in_duo + Fe_ser_in_res + transfusion;
    Fe_ser_output = Fe_ser_out_liv + Fe_ser_out_bm + Fe_ser_out_duo + Fe_ser_out_res + bleeding;

    der(Fe_ser) = Fe_ser_input - Fe_ser_output; // eq 16.

    // Liver

    Fe_liv = Fe_liv_2 + Fe_liv_3;
    der(Fe_liv_2) = Fe_liv_in_ser - Fe_liv_out_ser + Fe_liv_from_ferritin - Fe_liv_to_ferritin;
    der(Fe_liv_3) = Fe_liv_to_ferritin - Fe_liv_from_ferritin;
    der(Fpn_liv) = Fpn_liv_in - Fpn_liv_out; // eq 7.1
    der(Fpn_liv_mRNA) = Fpn_liv_mRNA_in - Fpn_liv_mRNA_out; // eq 6.1

    // Spleen

    Fe_spl = Fe_spl_2 + Fe_spl_3;
    der(Fe_spl_2) = Fe_spl_in_RBC + Fe_spl_in_bm - Fe_spl_out_ser + Fe_spl_from_ferritin - Fe_spl_to_ferritin;
    der(Fe_spl_3) = Fe_spl_to_ferritin - Fe_spl_from_ferritin;
    der(Fpn_spl) = Fpn_spl_in - Fpn_spl_out; // eq 7.2
    der(Fpn_spl_mRNA) = Fpn_spl_mRNA_in - Fpn_spl_mRNA_out; // eq 6.2

    // Other organs

    Fe_res = Fe_res_2 + Fe_res_3;
    der(Fe_res_2) = Fe_res_in_ser - Fe_res_out_ser - Fe_res_out_loss + Fe_res_from_ferritin - Fe_res_to_ferritin;
    der(Fe_res_3) = Fe_res_to_ferritin - Fe_res_from_ferritin;
    der(Fpn_res) = Fpn_res_in - Fpn_res_out; // eq 7.4
    der(Fpn_res_mRNA) = Fpn_res_mRNA_in - Fpn_res_mRNA_out; // eq 6.4

    // Bone marrow

    der(Fe_bm) = Fe_bm_in_ser - Fe_bm_out_RBC - Fe_bm_out_spl; //eq 12.

    // Red blood cells

    der(Fe_RBC) = Fe_RBC_in_bm - Fe_RBC_out_spl - bleeding + transfusion; //eq 13.

    annotation (
      Icon(coordinateSystem(preserveAspectRatio=false)),
      Diagram(coordinateSystem(preserveAspectRatio=false)),
      experiment(
        StopTime=10000,
        __Dymola_NumberOfIntervals=100000,
        Tolerance=1e-06,
        __Dymola_Algorithm="Cvode"));
  end FeMetabolismModel2;
end FeMetabolism;
