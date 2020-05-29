
loadModule = () => {
  return new Promise(function (resolve, reject) {
    new Circ({
      'locateFile': () => 'js/model.wasm',
      'modelDescriptionFile': 'js/modelDescription.xml'
    }).ready.then(module => {
      module.speed = 3
      module.precision = 0.05
      module.interval = 1000 / (module.speed / module.precision)
      console.log('Interval: ' + module.interval + ' ms')
      console.log('Time step: ' + module.precision)
      module.buildConfig = function (children) {
        var config = {
          'usedParameters': [
            16777250, // id 0 dBV.k
            16777238, // id 1 dSV.k
            16777228, // id 2 CAP.k
            16777227, // id 3 CVS.k
            16777222, // id 4 KRH.k
            16777229, // id 5 CVP.k
            16777223, // id 6 KLH.k
            16777226, // id 7 CAS.k
            16777225, // id 8 RP.k
            16777224, // id 9 RT.k
            16777216, // id 10 RightHeart.pump
            16777217, // id 11 RightHeart.manualBloodFlow
            16777219, // id 12 LeftHeart.pump
            16777220, // id 13 LeftHeart.manualBloodFlow
            16777248, // id 14 bw.k
            16777249, // id 15 bh.k
          ],
          'attachRange': [{
            id: 0,
            component: children.range.a_range,
            loadInitialValue: true,
            initialValue: 0.0,
            min: -3000,
            max: 3000,
            transform: value => value
          }, {
            id: 1,
            component: children.range.b_range,
            loadInitialValue: false,
            initialValue: 0,
            min: -2000,
            max: 2000,
            transform: value => (value * -1.0)
          }, {
            id: 2,
            component: children.range.c_range,
            loadInitialValue: true,
            initialValue: 0.0,
            min: 0.1,
            max: 20,
            transform: value => value
          }, {
            id: 3,
            component: children.range.e_range,
            loadInitialValue: true,
            initialValue: 0.0,
            min: 10,
            max: 1000,
            transform: value => value
          }, {
            id: 4,
            component: children.range.d_range,
            loadInitialValue: true,
            initialValue: 0.0,
            min: 0.1,
            max: 27,
            transform: value => value
          }, {
            id: 5,
            component: children.range.f_range,
            loadInitialValue: true,
            initialValue: 0.0,
            min: 1,
            max: 160,
            transform: value => value
          }, {
            id: 6,
            component: children.range.g_range,
            loadInitialValue: true,
            initialValue: 0.0,
            min: 0.1,
            max: 27,
            transform: value => value
          }, {
            id: 7,
            component: children.range.h_range,
            loadInitialValue: true,
            initialValue: 0.0,
            min: 0.1,
            max: 10,
            transform: value => value
          }, {
            id: 8,
            component: children.range.i_range,
            loadInitialValue: true,
            initialValue: 0.0,
            min: 0.01,
            max: 2,
            transform: value => value
          }, {
            id: 9,
            component: children.range.j_range,
            loadInitialValue: true,
            initialValue: 0.0,
            min: 0.1,
            max: 10,
            transform: value => value
          }, {
            id: 11,
            component: children.range.dpump_range,
            loadInitialValue: true,
            initialValue: 0.0,
            min: 0,
            max: 20,
            transform: value => value
          }, {
            id: 13,
            component: children.range.gpump_range,
            loadInitialValue: true,
            initialValue: 0.0,
            min: 0,
            max: 20,
            transform: value => value
          }, {
            id: 14,
            component: children.range.weight_range,
            loadInitialValue: true,
            initialValue: 0.0,
            min: 20,
            max: 300,
            transform: value => value
          }, {
            id: 15,
            component: children.range.height_range,
            loadInitialValue: true,
            initialValue: 0.0,
            min: 50,
            max: 250,
            transform: value => value
          }],
          'attachCheckbox': [{
            id: 10,
            component: children.checkbox.pspump_checkbox
          }, {
            id: 12,
            component: children.checkbox.lspump_checkbox
          }],
          'usedVariables': [
            100663331, // id 0 V0.y
            100663344, // id 1 SV.y
            16777250, // id 2 dBV.k
            16777238, // id 3 dSV.k
            637534245, // id 4 totalBloodVolume.totalBloodVolume
            905969708, // id 5 TotalUnstressedVolume.y
            905969707, // id 6 TotalStressedVolume.y
            905969705, // id 7 SA_VplusSV_V.y
            905969715, // id 8 PA_VplusPV_V.y
            16777228, // id 9 CAP.k
            16777227, // id 10 CVS.k
            16777222, // id 11 KRH.k
            637534211, // id 12 pulmonaryArteries.pressure
            33554432, // id 13 pulmonaryArteries.volume
            637534209, // id 14 SystemVeins.pressure
            33554433, // id 15 SystemVeins.volume
            16777229, // id 16 CVP.k
            16777223, // id 17 KLH.k
            16777226, // id 18 CAS.k
            637534217, // id 19 PulmonaryVeins.pressure
            33554435, // id 20 PulmonaryVeins.Volume
            637534219, // id 21 SystemArteries.Pressure
            33554434, // id 22 SystemArteries.Volume
            16777225, // id 23 RP.k
            16777224, // id 24 RT.k
            905969720, // id 25 bloodFlowMeter.BloodFlowPerMin
            905969704, // id 26 bloodFlowMeter1.BloodFlowPerMin
            905969714, // id 27 CI.y
            905969721, // id 28 CI_right.y
            16777217, // id 29 RightHeart.manualBloodFlow
            16777220, // id 30 LeftHeart.manualBloodFlow
            16777248, // id 31 bw.k
            16777249, // id 32 bh.k
            100663341, // id 33 bodySurface
            100663342, // id 34 bmi
            100663320, // id 35 PlumonaryArteries.UnstressedVolume
            100663329, // id 36 PlumonaryVeins.UnstressedVolume
            100663326, // id 37 SystemArteries.UnstressedVolume
            100663323, // id 38 SystemVeins.UnstressedVolume
            100663343, // id 39 normalBloodVolume.bV
          ],
          'attachVariables': [{
            id: 4,
            component: children.text.a_text,
            transform: value => (value / 1000),
            round: 1
          }, {
            id: 0, // V0.y
            component: children.text.b_text,
            transform: value => (value / 1000),
            round: 1
          }, {
            id: 5, // TotalUnstressedVolume.y
            component: children.text.e_text,
            transform: value => (value / 1000),
            round: 2
          }, {
            id: 5, // TotalUnstressedVolume.y
            component: children.text.g_text,
            transform: value => (value / 1000),
            round: 2
          }, {
            id: 6, // TotalStressedVolume.y
            component: children.text.f_text,
            transform: value => (value / 1000),
            round: 2
          }, {
            id: 6, // TotalStressedVolume.y
            component: children.text.h_text,
            transform: value => (value / 1000),
            round: 2
          }, {
            id: 7, // SA_VplusSV_V.y
            component: children.text.c_text,
            transform: value => (value / 1000),
            round: 2
          }, {
            id: 8, // PA_VplusPV_V.y
            component: children.text.d_text,
            transform: value => (value / 1000),
            round: 2
          }, {
            id: 9, // cap.k
            component: children.text.i_text,
            transform: value => (value),
            round: 2
          }, {
            id: 10, // CVS.k
            component: children.text.m_text,
            transform: value => (value),
            round: 0
          }, {
            id: 11, // KRH.k
            component: children.text.l_text,
            transform: value => (value),
            round: 1
          }, {
            id: 12, // simpleCirculationChip.PlumonaryArteries.Pressure
            component: children.text.j_text,
            transform: value => (value),
            round: 2
          }, {
            id: 13, //
            component: children.text.k_text,
            transform: value => (value / 1000),
            round: 2
          }, {
            id: 14, // simpleCirculationChip.SV_Pressure
            component: children.text.n_text,
            transform: value => (value),
            round: 2
          }, {
            id: 15, // simpleCirculationChip.SA_Volume
            component: children.text.o_text,
            transform: value => (value / 1000),
            round: 2
          }, {
            id: 16, // CVP.k
            component: children.text.p_text,
            transform: value => (value),
            round: 0
          }, {
            id: 17, // CLH.k
            component: children.text.s_text,
            transform: value => (value),
            round: 1
          }, {
            id: 18, // CAS.k
            component: children.text.t_text,
            transform: value => (value),
            round: 1
          }, {
            id: 19, // simpleCirculationChip.PlumonaryVeins.Pressure
            component: children.text.q_text,
            transform: value => (value),
            round: 1
          }, {
            id: 20, // simpleCirculationChip.PlumonaryVeins.Volume
            component: children.text.r_text,
            transform: value => (value / 1000),
            round: 2
          }, {
            id: 21, // simpleCirculationChip.SystemArteries.Pressure
            component: children.text.u_text,
            transform: value => (value),
            round: 1
          }, {
            id: 22, // simpleCirculationChip.SystemArteries.Volume
            component: children.text.v_text,
            transform: value => (value / 1000),
            round: 2
          }, {
            id: 23, // RP.k
            component: children.text.w_text,
            transform: value => (value),
            round: 2
          }, {
            id: 24, // RT.k
            component: children.text.c1_text,
            transform: value => (value),
            round: 1
          }, {
            id: 25, //
            component: children.text.x_text,
            transform: value => (value / 1000),
            round: 2
          }, {
            id: 26, //
            component: children.text.y_text,
            transform: value => (value / 1000),
            round: 2
          }, {
            id: 27, // CI.y
            component: children.text.b1_text,
            transform: value => (value / 1000),
            round: 2
          }, {
            id: 28, // CI_right.y
            component: children.text.a1_text,
            transform: value => (value / 1000),
            round: 2
          }, {
            id: 29, // RightHeart.manualBloodFlow
            component: children.text.lpump_text,
            transform: value => value,
            round: 2
          }, {
            id: 30, // RightHeart.manualBloodFlow
            component: children.text.spump_text,
            transform: value => value,
            round: 2
          }, {
            id: 31, // bw.k
            component: children.text.weight_text,
            transform: value => value,
            round: 0
          }, {
            id: 32, // bh.k
            component: children.text.height_text,
            transform: value => value,
            round: 0
          }, {
            id: 33, // bodySurface
            component: children.text.surface_text,
            transform: value => value,
            round: 2
          }, {
            id: 34, // bodySurface
            component: children.text.bmi_text,
            transform: value => value,
            round: 2
          }, {
            id: 39,
            component: children.text.anorm_text,
            transform: value => (value / 1000),
            round: 1
          }],
          'attachedAnims': [{
            id: 11,
            component: children.anim.PlniciTlak1_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0.1,
            max: 27
          }, {
            id: 17,
            component: children.anim.PlniciTlak2_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0.1,
            max: 27
          }, {
            id: 6,
            component: children.anim.Obrys_anim,
            transform: value => value,
            overflow: false,
            reverse: false,
            initialValue: 0,
            min: 0,
            max: 5000
          }, {
            id: 6,
            component: children.anim.SpodniHladina_anim,
            transform: value => value,
            overflow: false,
            reverse: false,
            initialValue: 0,
            min: 0,
            max: 5000
          }, {
            id: 5,
            component: children.anim.HorniHladina_anim,
            transform: value => value,
            overflow: false,
            reverse: false,
            initialValue: 0,
            min: 0,
            max: 7000
          }, {
            id: 5,
            component: children.anim.Pruziny_anim,
            transform: value => value,
            overflow: false,
            reverse: false,
            initialValue: 0,
            min: 0,
            max: 7000
          }, {
            id: 23,
            component: children.anim.RP_anim,
            transform: value => value + 0.2,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0.01,
            max: 2
          }, {
            id: 24,
            component: children.anim.RS_anim,
            transform: value => value + 0.2,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0.1,
            max: 10
          }, {
            id: 12,
            component: children.anim.ValecModryHorni_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0.1,
            max: 50
          }, {
            id: 14,
            component: children.anim.ValecModrySpodni_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0.1,
            max: 15
          }, {
            id: 19,
            component: children.anim.ValecCervenyHorni_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0.1,
            max: 20
          }, {
            id: 21,
            component: children.anim.ValecCervenySpodni_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0.1,
            max: 1000
          }, {
            id: 15,
            component: children.anim.ModreRozsireniSL_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 800,
            max: 5500
          }, {
            id: 15,
            component: children.anim.ModreRozsireniSP_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 800,
            max: 5500
          }, {
            id: 13,
            component: children.anim.ModreRozsireniHP_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 100,
            max: 700
          }, {
            id: 13,
            component: children.anim.ModreRozsireniHL_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 100,
            max: 700
          }, {
            id: 20,
            component: children.anim.CerveneRozsireniHL_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 100,
            max: 2000
          }, {
            id: 20,
            component: children.anim.CerveneRozsireniHP_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 100,
            max: 2000
          }, {
            id: 22,
            component: children.anim.CerveneRozsireniPSL_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 100,
            max: 2000
          }, {
            id: 22,
            component: children.anim.CerveneRozsireniPSP_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 100,
            max: 2000
          }, {
            id: 9,
            component: children.anim.TahModryHorniLevy_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0.1,
            max: 20
          }, {
            id: 9,
            component: children.anim.TahModryHorniPravy_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0.1,
            max: 20
          }, {
            id: 10,
            component: children.anim.TahModraSpodniLevy_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0,
            max: 1000
          }, {
            id: 10,
            component: children.anim.TahModraSpodniPravy_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0,
            max: 1000
          }, {
            id: 16,
            component: children.anim.TahCerveneHorniLevy_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0,
            max: 160
          }, {
            id: 16,
            component: children.anim.TahCerveneHorniPravy_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0,
            max: 160
          }, {
            id: 18,
            component: children.anim.TahCervenySpodniLevy_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0,
            max: 10
          }, {
            id: 18,
            component: children.anim.TahCervenySpodniPravy_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0,
            max: 10
          }, {
            id: 26,
            component: children.anim.tvar_anim,
            transform: value => (value / 1000),
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 0.0,
            max: 10
          }, {
            id: 34,
            component: children.anim.telo_anim,
            transform: value => value,
            overflow: false,
            reverse: false,
            initialValue: 0,
            min: 5,
            max: 60
          }, {
            id: 35,
            component: children.anim.HorniModry_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 100,
            max: 400
          }, {
            id: 36,
            component: children.anim.HorniCervena_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 150,
            max: 500
          }, {
            id: 37,
            component: children.anim.SpodniCervena_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 150,
            max: 600
          }, {
            id: 38,
            component: children.anim.SpodniModra_anim,
            transform: value => value,
            overflow: false,
            reverse: true,
            initialValue: 0,
            min: 900,
            max: 3000
          }],

          'attachedAnimations': [{
            id: 25,
            component: children.anim.PumpaModra_anim,
            transform: value => (value / 1000),
            maxSpeed: 10.0,
            position: 0.0,
            minSpeed: 0.0,
            reverse: false,
            min: 0,
            max: 20
          }, {
            id: 26,
            component: children.anim.PumpaCervena_anim,
            transform: value => (value / 1000),
            maxSpeed: 10.0,
            position: 0.0,
            minSpeed: 0.0,
            reverse: false,
            min: 0,
            max: 20
          }, {
            id: 27,
            component: children.anim.LSSipka1_anim,
            transform: value => (value / 1000),
            maxSpeed: 10.0,
            position: 0.0,
            minSpeed: 0.2,
            reverse: false,
            min: 0,
            max: 10
          }, {
            id: 27,
            component: children.anim.LSSipka2_anim,
            transform: value => (value / 1000),
            maxSpeed: 10.0,
            position: 0.0,
            minSpeed: 0.2,
            reverse: false,
            min: 0,
            max: 10
          }, {
            id: 28,
            component: children.anim.PSSipka2_anim,
            transform: value => (value / 1000),
            maxSpeed: 10.0,
            position: 0.0,
            minSpeed: 0.2,
            reverse: false,
            min: 0,
            max: 10
          }, {
            id: 28,
            component: children.anim.PSSipka1_anim,
            transform: value => (value / 1000),
            maxSpeed: 10.0,
            position: 0.0,
            minSpeed: 0.2,
            reverse: false,
            min: 0,
            max: 10
          }]
        }
        config.count = config.usedVariables.length
        config.variables = module.heapArray(
          new Int32Array(config.usedVariables)
        )
        config.output = module.heapArray(new Float64Array(config.count))
        module.config = config
      }

      module.loadInitialValues = function () {
        // ranges load default values
        for (let forr = 0; forr < this.config.attachRange.length; forr++) {
          if (this.config.attachRange[forr].loadInitialValue) {
            this.config.attachRange[forr].initialValue = this.getSingleReal(this.config.usedParameters[this.config.attachRange[forr].id])
          }
        }

        // ranges set default values (TODO: not needed for this prototype)

        // update animations
        module.update()
      }

      /**
       * Attaches ranges to parameters, sets their initial values and registeres
       * listeners for changes
       */
      module.attachRanges = function () {
        this.config.attachRange.forEach(range => {
          var value = range.initialValue

          // initialise range component, important when the range component is
          // not visible at the start of the scene = frame_0 hasn't been invoked

          range.component.frame_0()
          range.component.max = range.max
          range.component.min = range.min
          range.component.setValue(value)
          range.component.addEventListener('change', evt => {
            this.setSingleReal(
              this.config.usedParameters[range.id],
              range.transform(range.component.value)
            )
          })
          range.component.dispatchEvent(new Event('change'))
        })
      }

      module.attachCheckboxes = function () {
        this.config.attachCheckbox.forEach(checkbox => {
          checkbox.component.addEventListener('change', evt => {
            this.setSingleBoolean(
              this.config.usedParameters[checkbox.id],
              checkbox.component.checked ? this.fmi2True : this.fmi2False
            )
          })
        })
      }

      module.step = function (precision) {
        var status = module.fmi2DoStep(module.inst, module.currentStep, precision, 1)

        // todo: proper decimal arithmetic, external library perhaps
        module.currentStep = parseFloat(parseFloat(module.currentStep + precision).toPrecision(8))
        return status
      }

      module.tickerUpdate = function () {
        var values = module.update()
        module.tickAnimations(values)
      }

      module.update = function () {
        module.getRealFromConfig()

        var values = new Float64Array(
          this.config.output.buffer,
          this.config.output.byteOffset,
          this.config.count
        )
        module.updateVariables(values)
        module.updateAnims(values)

        return values
      }

      module.mainloop = function () {
        module.flushSetQueues()
        module.step(module.precision)
      }

      module.tickAnimations = function (values) {
        for (let fora = 0; fora < this.config.attachedAnimations.length; fora++) {
          var anim = this.config.attachedAnimations[fora]

          var value = anim.transform(values[anim.id])
          value = (((value - anim.min) / (anim.max - anim.min)) * (anim.maxSpeed - anim.minSpeed)) + anim.minSpeed
          if (anim.reverse) {
            anim.position = (anim.position - value)
            if (anim.position < 0) {
              anim.position = anim.component.timeline.duration + anim.position
            }
          } else {
            anim.position = (anim.position + value) % anim.component.timeline.duration
          }

          anim.component.gotoAndStop(Math.floor(anim.position))
        }
      }

      module.updateAnims = function (values) {
        for (let fora = 0; fora < this.config.attachedAnims.length; fora++) {
          var anim = this.config.attachedAnims[fora]
          var value = anim.transform(values[anim.id])
          if (value < anim.min) {
            anim.overflow ? anim.min = value : value = anim.min
          }
          if (value > anim.max) {
            anim.overflow ? anim.max = value : value = anim.max
          }
          value = Math.floor((value - anim.min) / (anim.max - anim.min) * 99)
          if (anim.reverse) {
            value = 99 - value
          }
          anim.component.gotoAndStop(value)
        }
      }

      module.updateVariables = function (values) {
        for (let fora = 0; fora < this.config.attachVariables.length; fora++) {
          var att = this.config.attachVariables[fora]
          var value = att.transform(values[att.id])
          if (typeof att.round !== 'undefined') {
            value = value.toFixed(att.round)
          }
          att.component.text = value
        }
      }

      console.log('Model initialised')

      resolve(module)
    }).catch(err => {
      reject(err)
    })
  })
}
