var model
var mainloopId
var tickerUpdate

var DOMContentLoaded = () => {
  // load stage and module
  Promise.all([initStage(), loadModule()]).then(values => {
    startFpsCounter()
    model = values[1]

    model.buildConfig(components)

    console.log(model.guid)
    console.log(model.identifier)
    console.log('Types platform: ' + model.fmi2GetTypesPlatform())
    console.log('FMI Version: ' + model.fmi2GetVersion())

    var fmi2CallbackFunctionsPtr = model.createFmi2CallbackFunctions(model.consoleLoggerPtr)

    model.inst = model.fmi2Instantiate(
      'new instance',
      model.fmi2CoSimulation,
      model.guid,
      '',
      fmi2CallbackFunctionsPtr,
      0,
      0 // debug
    )

    model.startTime = 0.0
    model.currentStep = model.startTime
    var status = model.fmi2SetupExperiment(model.inst, 1, 0.000001, model.startTime, 0)

    status = model.fmi2EnterInitializationMode(model.inst)
    model.loadInitialValues()
    model.attachRanges()
    model.attachCheckboxes()
    status = model.fmi2ExitInitializationMode(model.inst)

    model.mainloop()
    mainloopId = window.setInterval(model.mainloop, model.interval, model.precision)
    tickerUpdate = event => model.tickerUpdate()
    createjs.Ticker.addEventListener('tick', tickerUpdate)

    document.getElementById('canvas').style.visibility = 'visible'

    /*
    window.setInterval(() => {
      console.log('model alive check')
      if (!model.alive) {
        alert('model crashed')
        abort()
      }
      model.alive = false
    }, 1000)
    */
  })
}

document.addEventListener('DOMContentLoaded', DOMContentLoaded, false)

window.setTimeout(function () {
  console.log('2s timeout')
}, 2000)

var abort = () => {
  window.clearInterval(mainloopId)
  createjs.Ticker.removeEventListener('tick', tickerUpdate)
}
