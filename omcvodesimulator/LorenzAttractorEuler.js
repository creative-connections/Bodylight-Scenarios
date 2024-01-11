
var LorenzAttractorEuler = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(LorenzAttractorEuler) {
  LorenzAttractorEuler = LorenzAttractorEuler || {};



// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof LorenzAttractorEuler !== 'undefined' ? LorenzAttractorEuler : {};

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2DoStep')) {
        Object.defineProperty(Module['ready'], '_fmi2DoStep', { configurable: true, get: function() { abort('You are getting _fmi2DoStep on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2DoStep', { configurable: true, set: function() { abort('You are setting _fmi2DoStep on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2CompletedIntegratorStep')) {
        Object.defineProperty(Module['ready'], '_fmi2CompletedIntegratorStep', { configurable: true, get: function() { abort('You are getting _fmi2CompletedIntegratorStep on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2CompletedIntegratorStep', { configurable: true, set: function() { abort('You are setting _fmi2CompletedIntegratorStep on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2DeSerializeFMUstate')) {
        Object.defineProperty(Module['ready'], '_fmi2DeSerializeFMUstate', { configurable: true, get: function() { abort('You are getting _fmi2DeSerializeFMUstate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2DeSerializeFMUstate', { configurable: true, set: function() { abort('You are setting _fmi2DeSerializeFMUstate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2EnterContinuousTimeMode')) {
        Object.defineProperty(Module['ready'], '_fmi2EnterContinuousTimeMode', { configurable: true, get: function() { abort('You are getting _fmi2EnterContinuousTimeMode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2EnterContinuousTimeMode', { configurable: true, set: function() { abort('You are setting _fmi2EnterContinuousTimeMode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2EnterEventMode')) {
        Object.defineProperty(Module['ready'], '_fmi2EnterEventMode', { configurable: true, get: function() { abort('You are getting _fmi2EnterEventMode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2EnterEventMode', { configurable: true, set: function() { abort('You are setting _fmi2EnterEventMode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2EnterInitializationMode')) {
        Object.defineProperty(Module['ready'], '_fmi2EnterInitializationMode', { configurable: true, get: function() { abort('You are getting _fmi2EnterInitializationMode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2EnterInitializationMode', { configurable: true, set: function() { abort('You are setting _fmi2EnterInitializationMode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2ExitInitializationMode')) {
        Object.defineProperty(Module['ready'], '_fmi2ExitInitializationMode', { configurable: true, get: function() { abort('You are getting _fmi2ExitInitializationMode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2ExitInitializationMode', { configurable: true, set: function() { abort('You are setting _fmi2ExitInitializationMode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2FreeFMUstate')) {
        Object.defineProperty(Module['ready'], '_fmi2FreeFMUstate', { configurable: true, get: function() { abort('You are getting _fmi2FreeFMUstate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2FreeFMUstate', { configurable: true, set: function() { abort('You are setting _fmi2FreeFMUstate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2FreeInstance')) {
        Object.defineProperty(Module['ready'], '_fmi2FreeInstance', { configurable: true, get: function() { abort('You are getting _fmi2FreeInstance on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2FreeInstance', { configurable: true, set: function() { abort('You are setting _fmi2FreeInstance on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetBoolean')) {
        Object.defineProperty(Module['ready'], '_fmi2GetBoolean', { configurable: true, get: function() { abort('You are getting _fmi2GetBoolean on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetBoolean', { configurable: true, set: function() { abort('You are setting _fmi2GetBoolean on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetBooleanStatus')) {
        Object.defineProperty(Module['ready'], '_fmi2GetBooleanStatus', { configurable: true, get: function() { abort('You are getting _fmi2GetBooleanStatus on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetBooleanStatus', { configurable: true, set: function() { abort('You are setting _fmi2GetBooleanStatus on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetContinuousStates')) {
        Object.defineProperty(Module['ready'], '_fmi2GetContinuousStates', { configurable: true, get: function() { abort('You are getting _fmi2GetContinuousStates on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetContinuousStates', { configurable: true, set: function() { abort('You are setting _fmi2GetContinuousStates on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetDerivatives')) {
        Object.defineProperty(Module['ready'], '_fmi2GetDerivatives', { configurable: true, get: function() { abort('You are getting _fmi2GetDerivatives on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetDerivatives', { configurable: true, set: function() { abort('You are setting _fmi2GetDerivatives on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetDirectionalDerivative')) {
        Object.defineProperty(Module['ready'], '_fmi2GetDirectionalDerivative', { configurable: true, get: function() { abort('You are getting _fmi2GetDirectionalDerivative on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetDirectionalDerivative', { configurable: true, set: function() { abort('You are setting _fmi2GetDirectionalDerivative on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetEventIndicators')) {
        Object.defineProperty(Module['ready'], '_fmi2GetEventIndicators', { configurable: true, get: function() { abort('You are getting _fmi2GetEventIndicators on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetEventIndicators', { configurable: true, set: function() { abort('You are setting _fmi2GetEventIndicators on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetFMUstate')) {
        Object.defineProperty(Module['ready'], '_fmi2GetFMUstate', { configurable: true, get: function() { abort('You are getting _fmi2GetFMUstate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetFMUstate', { configurable: true, set: function() { abort('You are setting _fmi2GetFMUstate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetInteger')) {
        Object.defineProperty(Module['ready'], '_fmi2GetInteger', { configurable: true, get: function() { abort('You are getting _fmi2GetInteger on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetInteger', { configurable: true, set: function() { abort('You are setting _fmi2GetInteger on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetIntegerStatus')) {
        Object.defineProperty(Module['ready'], '_fmi2GetIntegerStatus', { configurable: true, get: function() { abort('You are getting _fmi2GetIntegerStatus on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetIntegerStatus', { configurable: true, set: function() { abort('You are setting _fmi2GetIntegerStatus on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetNominalsOfContinuousStates')) {
        Object.defineProperty(Module['ready'], '_fmi2GetNominalsOfContinuousStates', { configurable: true, get: function() { abort('You are getting _fmi2GetNominalsOfContinuousStates on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetNominalsOfContinuousStates', { configurable: true, set: function() { abort('You are setting _fmi2GetNominalsOfContinuousStates on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetReal')) {
        Object.defineProperty(Module['ready'], '_fmi2GetReal', { configurable: true, get: function() { abort('You are getting _fmi2GetReal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetReal', { configurable: true, set: function() { abort('You are setting _fmi2GetReal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetRealOutputDerivatives')) {
        Object.defineProperty(Module['ready'], '_fmi2GetRealOutputDerivatives', { configurable: true, get: function() { abort('You are getting _fmi2GetRealOutputDerivatives on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetRealOutputDerivatives', { configurable: true, set: function() { abort('You are setting _fmi2GetRealOutputDerivatives on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetRealStatus')) {
        Object.defineProperty(Module['ready'], '_fmi2GetRealStatus', { configurable: true, get: function() { abort('You are getting _fmi2GetRealStatus on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetRealStatus', { configurable: true, set: function() { abort('You are setting _fmi2GetRealStatus on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetStatus')) {
        Object.defineProperty(Module['ready'], '_fmi2GetStatus', { configurable: true, get: function() { abort('You are getting _fmi2GetStatus on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetStatus', { configurable: true, set: function() { abort('You are setting _fmi2GetStatus on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetString')) {
        Object.defineProperty(Module['ready'], '_fmi2GetString', { configurable: true, get: function() { abort('You are getting _fmi2GetString on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetString', { configurable: true, set: function() { abort('You are setting _fmi2GetString on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetStringStatus')) {
        Object.defineProperty(Module['ready'], '_fmi2GetStringStatus', { configurable: true, get: function() { abort('You are getting _fmi2GetStringStatus on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetStringStatus', { configurable: true, set: function() { abort('You are setting _fmi2GetStringStatus on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetTypesPlatform')) {
        Object.defineProperty(Module['ready'], '_fmi2GetTypesPlatform', { configurable: true, get: function() { abort('You are getting _fmi2GetTypesPlatform on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetTypesPlatform', { configurable: true, set: function() { abort('You are setting _fmi2GetTypesPlatform on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2GetVersion')) {
        Object.defineProperty(Module['ready'], '_fmi2GetVersion', { configurable: true, get: function() { abort('You are getting _fmi2GetVersion on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2GetVersion', { configurable: true, set: function() { abort('You are setting _fmi2GetVersion on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2Instantiate')) {
        Object.defineProperty(Module['ready'], '_fmi2Instantiate', { configurable: true, get: function() { abort('You are getting _fmi2Instantiate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2Instantiate', { configurable: true, set: function() { abort('You are setting _fmi2Instantiate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2NewDiscreteStates')) {
        Object.defineProperty(Module['ready'], '_fmi2NewDiscreteStates', { configurable: true, get: function() { abort('You are getting _fmi2NewDiscreteStates on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2NewDiscreteStates', { configurable: true, set: function() { abort('You are setting _fmi2NewDiscreteStates on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2Reset')) {
        Object.defineProperty(Module['ready'], '_fmi2Reset', { configurable: true, get: function() { abort('You are getting _fmi2Reset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2Reset', { configurable: true, set: function() { abort('You are setting _fmi2Reset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2SerializedFMUstateSize')) {
        Object.defineProperty(Module['ready'], '_fmi2SerializedFMUstateSize', { configurable: true, get: function() { abort('You are getting _fmi2SerializedFMUstateSize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2SerializedFMUstateSize', { configurable: true, set: function() { abort('You are setting _fmi2SerializedFMUstateSize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2SerializeFMUstate')) {
        Object.defineProperty(Module['ready'], '_fmi2SerializeFMUstate', { configurable: true, get: function() { abort('You are getting _fmi2SerializeFMUstate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2SerializeFMUstate', { configurable: true, set: function() { abort('You are setting _fmi2SerializeFMUstate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2SetBoolean')) {
        Object.defineProperty(Module['ready'], '_fmi2SetBoolean', { configurable: true, get: function() { abort('You are getting _fmi2SetBoolean on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2SetBoolean', { configurable: true, set: function() { abort('You are setting _fmi2SetBoolean on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2SetContinuousStates')) {
        Object.defineProperty(Module['ready'], '_fmi2SetContinuousStates', { configurable: true, get: function() { abort('You are getting _fmi2SetContinuousStates on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2SetContinuousStates', { configurable: true, set: function() { abort('You are setting _fmi2SetContinuousStates on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2SetDebugLogging')) {
        Object.defineProperty(Module['ready'], '_fmi2SetDebugLogging', { configurable: true, get: function() { abort('You are getting _fmi2SetDebugLogging on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2SetDebugLogging', { configurable: true, set: function() { abort('You are setting _fmi2SetDebugLogging on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2SetFMUstate')) {
        Object.defineProperty(Module['ready'], '_fmi2SetFMUstate', { configurable: true, get: function() { abort('You are getting _fmi2SetFMUstate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2SetFMUstate', { configurable: true, set: function() { abort('You are setting _fmi2SetFMUstate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2SetInteger')) {
        Object.defineProperty(Module['ready'], '_fmi2SetInteger', { configurable: true, get: function() { abort('You are getting _fmi2SetInteger on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2SetInteger', { configurable: true, set: function() { abort('You are setting _fmi2SetInteger on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2SetReal')) {
        Object.defineProperty(Module['ready'], '_fmi2SetReal', { configurable: true, get: function() { abort('You are getting _fmi2SetReal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2SetReal', { configurable: true, set: function() { abort('You are setting _fmi2SetReal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2SetRealInputDerivatives')) {
        Object.defineProperty(Module['ready'], '_fmi2SetRealInputDerivatives', { configurable: true, get: function() { abort('You are getting _fmi2SetRealInputDerivatives on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2SetRealInputDerivatives', { configurable: true, set: function() { abort('You are setting _fmi2SetRealInputDerivatives on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2SetString')) {
        Object.defineProperty(Module['ready'], '_fmi2SetString', { configurable: true, get: function() { abort('You are getting _fmi2SetString on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2SetString', { configurable: true, set: function() { abort('You are setting _fmi2SetString on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2SetTime')) {
        Object.defineProperty(Module['ready'], '_fmi2SetTime', { configurable: true, get: function() { abort('You are getting _fmi2SetTime on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2SetTime', { configurable: true, set: function() { abort('You are setting _fmi2SetTime on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2SetupExperiment')) {
        Object.defineProperty(Module['ready'], '_fmi2SetupExperiment', { configurable: true, get: function() { abort('You are getting _fmi2SetupExperiment on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2SetupExperiment', { configurable: true, set: function() { abort('You are setting _fmi2SetupExperiment on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fmi2Terminate')) {
        Object.defineProperty(Module['ready'], '_fmi2Terminate', { configurable: true, get: function() { abort('You are getting _fmi2Terminate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fmi2Terminate', { configurable: true, set: function() { abort('You are setting _fmi2Terminate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_createFmi2CallbackFunctions')) {
        Object.defineProperty(Module['ready'], '_createFmi2CallbackFunctions', { configurable: true, get: function() { abort('You are getting _createFmi2CallbackFunctions on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_createFmi2CallbackFunctions', { configurable: true, set: function() { abort('You are setting _createFmi2CallbackFunctions on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_snprintf')) {
        Object.defineProperty(Module['ready'], '_snprintf', { configurable: true, get: function() { abort('You are getting _snprintf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_snprintf', { configurable: true, set: function() { abort('You are setting _snprintf on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_calloc')) {
        Object.defineProperty(Module['ready'], '_calloc', { configurable: true, get: function() { abort('You are getting _calloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_calloc', { configurable: true, set: function() { abort('You are setting _calloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_malloc')) {
        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, get: function() { abort('You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, set: function() { abort('You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_free')) {
        Object.defineProperty(Module['ready'], '_free', { configurable: true, get: function() { abort('You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_free', { configurable: true, set: function() { abort('You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackSave')) {
        Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, get: function() { abort('You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, set: function() { abort('You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackRestore')) {
        Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, get: function() { abort('You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, set: function() { abort('You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackAlloc')) {
        Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, get: function() { abort('You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, set: function() { abort('You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___data_end')) {
        Object.defineProperty(Module['ready'], '___data_end', { configurable: true, get: function() { abort('You are getting ___data_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___data_end', { configurable: true, set: function() { abort('You are setting ___data_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___wasm_call_ctors')) {
        Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, get: function() { abort('You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, set: function() { abort('You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fflush')) {
        Object.defineProperty(Module['ready'], '_fflush', { configurable: true, get: function() { abort('You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_fflush', { configurable: true, set: function() { abort('You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___errno_location')) {
        Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, get: function() { abort('You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, set: function() { abort('You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_setThrew')) {
        Object.defineProperty(Module['ready'], '_setThrew', { configurable: true, get: function() { abort('You are getting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_setThrew', { configurable: true, set: function() { abort('You are setting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_realloc')) {
        Object.defineProperty(Module['ready'], '_realloc', { configurable: true, get: function() { abort('You are getting _realloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_realloc', { configurable: true, set: function() { abort('You are setting _realloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_testSetjmp')) {
        Object.defineProperty(Module['ready'], '_testSetjmp', { configurable: true, get: function() { abort('You are getting _testSetjmp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_testSetjmp', { configurable: true, set: function() { abort('You are setting _testSetjmp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_saveSetjmp')) {
        Object.defineProperty(Module['ready'], '_saveSetjmp', { configurable: true, get: function() { abort('You are getting _saveSetjmp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_saveSetjmp', { configurable: true, set: function() { abort('You are setting _saveSetjmp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], 'onRuntimeInitialized')) {
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, get: function() { abort('You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, set: function() { abort('You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)

  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
  }
  Module.expectedDataFileDownloads++;
  (function() {
   var loadPackage = function(metadata) {
  
    function runWithFS() {
  
      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
  var fileData0 = [];
fileData0.push.apply(fileData0, [123, 34, 102, 111, 114, 109, 97, 116, 34, 58, 34, 84, 114, 97, 110, 115, 102, 111, 114, 109, 97, 116, 105, 111, 110, 97, 108, 32, 100, 101, 98, 117, 103, 103, 101, 114, 32, 105, 110, 102, 111, 34, 44, 34, 118, 101, 114, 115, 105, 111, 110, 34, 58, 49, 44, 10, 34, 105, 110, 102, 111, 34, 58, 123, 34, 110, 97, 109, 101, 34, 58, 34, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 34, 44, 34, 100, 101, 115, 99, 114, 105, 112, 116, 105, 111, 110, 34, 58, 34, 34, 125, 44, 10, 34, 118, 97, 114, 105, 97, 98, 108, 101, 115, 34, 58, 123, 10, 34, 120, 34, 58, 123, 34, 99, 111, 109, 109, 101, 110, 116, 34, 58, 34, 34, 44, 34, 107, 105, 110, 100, 34, 58, 34, 115, 116, 97, 116, 101, 34, 44, 34, 116, 121, 112, 101, 34, 58, 34, 82, 101, 97, 108, 34, 44, 34, 117, 110, 105, 116, 34, 58, 34, 34, 44, 34, 100, 105, 115, 112, 108, 97, 121, 85, 110, 105, 116, 34, 58, 34, 34, 44, 34, 115, 111, 117, 114, 99, 101, 34, 58, 123, 34, 105, 110, 102, 111, 34, 58, 123, 34, 102, 105, 108, 101, 34, 58, 34, 47, 118, 97, 103, 114, 97, 110, 116, 95, 100, 97, 116, 97, 47, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 109, 111, 34, 44, 34, 108, 105, 110, 101, 83, 116, 97, 114, 116, 34, 58, 50, 44, 34, 108, 105, 110, 101, 69, 110, 100, 34, 58, 50, 44, 34, 99, 111, 108, 83, 116, 97, 114, 116, 34, 58, 49, 44, 34, 99, 111, 108, 69, 110, 100, 34, 58, 51, 48, 125, 125, 125, 44, 10, 34, 122, 34, 58, 123, 34, 99, 111, 109, 109, 101, 110, 116, 34, 58, 34, 34, 44, 34, 107, 105, 110, 100, 34, 58, 34, 115, 116, 97, 116, 101, 34, 44, 34, 116, 121, 112, 101, 34, 58, 34, 82, 101, 97, 108, 34, 44, 34, 117, 110, 105, 116, 34, 58, 34, 34, 44, 34, 100, 105, 115, 112, 108, 97, 121, 85, 110, 105, 116, 34, 58, 34, 34, 44, 34, 115, 111, 117, 114, 99, 101, 34, 58, 123, 34, 105, 110, 102, 111, 34, 58, 123, 34, 102, 105, 108, 101, 34, 58, 34, 47, 118, 97, 103, 114, 97, 110, 116, 95, 100, 97, 116, 97, 47, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 109, 111, 34, 44, 34, 108, 105, 110, 101, 83, 116, 97, 114, 116, 34, 58, 50, 44, 34, 108, 105, 110, 101, 69, 110, 100, 34, 58, 50, 44, 34, 99, 111, 108, 83, 116, 97, 114, 116, 34, 58, 49, 44, 34, 99, 111, 108, 69, 110, 100, 34, 58, 51, 48, 125, 125, 125, 44, 10, 34, 100, 101, 114, 40, 120, 41, 34, 58, 123, 34, 99, 111, 109, 109, 101, 110, 116, 34, 58, 34, 34, 44, 34, 107, 105, 110, 100, 34, 58, 34, 100, 101, 114, 105, 118, 97, 116, 105, 118, 101, 34, 44, 34, 116, 121, 112, 101, 34, 58, 34, 82, 101, 97, 108, 34, 44, 34, 117, 110, 105, 116, 34, 58, 34, 34, 44, 34, 100, 105, 115, 112, 108, 97, 121, 85, 110, 105, 116, 34, 58, 34, 34, 44, 34, 115, 111, 117, 114, 99, 101, 34, 58, 123, 34, 105, 110, 102, 111, 34, 58, 123, 34, 102, 105, 108, 101, 34, 58, 34, 47, 118, 97, 103, 114, 97, 110, 116, 95, 100, 97, 116, 97, 47, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 109, 111, 34, 44, 34, 108, 105, 110, 101, 83, 116, 97, 114, 116, 34, 58, 50, 44, 34, 108, 105, 110, 101, 69, 110, 100, 34, 58, 50, 44, 34, 99, 111, 108, 83, 116, 97, 114, 116, 34, 58, 49, 44, 34, 99, 111, 108, 69, 110, 100, 34, 58, 51, 48, 125, 125, 125, 44, 10, 34, 100, 101, 114, 40, 122, 41, 34, 58, 123, 34, 99, 111, 109, 109, 101, 110, 116, 34, 58, 34, 34, 44, 34, 107, 105, 110, 100, 34, 58, 34, 100, 101, 114, 105, 118, 97, 116, 105, 118, 101, 34, 44, 34, 116, 121, 112, 101, 34, 58, 34, 82, 101, 97, 108, 34, 44, 34, 117, 110, 105, 116, 34, 58, 34, 34, 44, 34, 100, 105, 115, 112, 108, 97, 121, 85, 110, 105, 116, 34, 58, 34, 34, 44, 34, 115, 111, 117, 114, 99, 101, 34, 58, 123, 34, 105, 110, 102, 111, 34, 58, 123, 34, 102, 105, 108, 101, 34, 58, 34, 47, 118, 97, 103, 114, 97, 110, 116, 95, 100, 97, 116, 97, 47, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 109, 111, 34, 44, 34, 108, 105, 110, 101, 83, 116, 97, 114, 116, 34, 58, 50, 44, 34, 108, 105, 110, 101, 69, 110, 100, 34, 58, 50, 44, 34, 99, 111, 108, 83, 116, 97, 114, 116, 34, 58, 49, 44, 34, 99, 111, 108, 69, 110, 100, 34, 58, 51, 48, 125, 125, 125, 44, 10, 34, 98, 101, 116, 97, 34, 58, 123, 34, 99, 111, 109, 109, 101, 110, 116, 34, 58, 34, 34, 44, 34, 107, 105, 110, 100, 34, 58, 34, 112, 97, 114, 97, 109, 101, 116, 101, 114, 34, 44, 34, 116, 121, 112, 101, 34, 58, 34, 82, 101, 97, 108, 34, 44, 34, 117, 110, 105, 116, 34, 58, 34, 34, 44, 34, 100, 105, 115, 112, 108, 97, 121, 85, 110, 105, 116, 34, 58, 34, 34, 44, 34, 115, 111, 117, 114, 99, 101, 34, 58, 123, 34, 105, 110, 102, 111, 34, 58, 123, 34, 102, 105, 108, 101, 34, 58, 34, 47, 118, 97, 103, 114, 97, 110, 116, 95, 100, 97, 116, 97, 47, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 109, 111, 34, 44, 34, 108, 105, 110, 101, 83, 116, 97, 114, 116, 34, 58, 53, 44, 34, 108, 105, 110, 101, 69, 110, 100, 34, 58, 53, 44, 34, 99, 111, 108, 83, 116, 97, 114, 116, 34, 58, 49, 44, 34, 99, 111, 108, 69, 110, 100, 34, 58, 50, 54, 125, 125, 125, 44, 10, 34, 115, 105, 103, 109, 97, 34, 58, 123, 34, 99, 111, 109, 109, 101, 110, 116, 34, 58, 34, 34, 44, 34, 107, 105, 110, 100, 34, 58, 34, 112, 97, 114, 97, 109, 101, 116, 101, 114, 34, 44, 34, 116, 121, 112, 101, 34, 58, 34, 82, 101, 97, 108, 34, 44, 34, 117, 110, 105, 116, 34, 58, 34, 34, 44, 34, 100, 105, 115, 112, 108, 97, 121, 85, 110, 105, 116, 34, 58, 34, 34, 44, 34, 115, 111, 117, 114, 99, 101, 34, 58, 123, 34, 105, 110, 102, 111, 34, 58, 123, 34, 102, 105, 108, 101, 34, 58, 34, 47, 118, 97, 103, 114, 97, 110, 116, 95, 100, 97, 116, 97, 47, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 109, 111, 34, 44, 34, 108, 105, 110, 101, 83, 116, 97, 114, 116, 34, 58, 51, 44, 34, 108, 105, 110, 101, 69, 110, 100, 34, 58, 51, 44, 34, 99, 111, 108, 83, 116, 97, 114, 116, 34, 58, 49, 44, 34, 99, 111, 108, 69, 110, 100, 34, 58, 50, 54, 125, 125, 125, 10, 125, 44, 10, 34, 101, 113, 117, 97, 116, 105, 111, 110, 115, 34, 58, 91, 123, 34, 101, 113, 73, 110, 100, 101, 120, 34, 58, 48, 44, 34, 116, 97, 103, 34, 58, 34, 100, 117, 109, 109, 121, 34, 125, 44, 10, 123, 34, 101, 113, 73, 110, 100, 101, 120, 34, 58, 49, 44, 34, 115, 101, 99, 116, 105, 111, 110, 34, 58, 34, 105, 110, 105, 116, 105, 97, 108, 34, 44, 34, 116, 97, 103, 34, 58, 34, 97, 115, 115, 105, 103, 110, 34, 44, 34, 100, 101, 102, 105, 110, 101, 115, 34, 58, 91, 34, 121, 34, 93, 44, 34, 117, 115, 101, 115, 34, 58, 91, 34, 36, 83, 84, 65, 82, 84, 46, 121, 34, 93, 44, 34, 101, 113, 117, 97, 116, 105, 111, 110, 34, 58, 91, 34, 36, 83, 84, 65, 82, 84, 46, 121, 34, 93, 44, 34, 115, 111, 117, 114, 99, 101, 34, 58, 123, 34, 105, 110, 102, 111, 34, 58, 123, 34, 102, 105, 108, 101, 34, 58, 34, 34, 44, 34, 108, 105, 110, 101, 83, 116, 97, 114, 116, 34, 58, 48, 44, 34, 108, 105, 110, 101, 69, 110, 100, 34, 58, 48, 44, 34, 99, 111, 108, 83, 116, 97, 114, 116, 34, 58, 48, 44, 34, 99, 111, 108, 69, 110, 100, 34, 58, 48, 125, 125, 125, 44, 10, 123, 34, 101, 113, 73, 110, 100, 101, 120, 34, 58, 50, 44, 34, 115, 101, 99, 116, 105, 111, 110, 34, 58, 34, 105, 110, 105, 116, 105, 97, 108, 34, 44, 34, 116, 97, 103, 34, 58, 34, 97, 115, 115, 105, 103, 110, 34, 44, 34, 100, 101, 102, 105, 110, 101, 115, 34, 58, 91, 34, 120, 34, 93, 44, 34, 117, 115, 101, 115, 34, 58, 91, 34, 36, 83, 84, 65, 82, 84, 46, 120, 34, 93, 44, 34, 101, 113, 117, 97, 116, 105, 111, 110, 34, 58, 91, 34, 36, 83, 84, 65, 82, 84, 46, 120, 34, 93, 44, 34, 115, 111, 117, 114, 99, 101, 34, 58, 123, 34, 105, 110, 102, 111, 34, 58, 123, 34, 102, 105, 108, 101, 34, 58, 34, 34, 44, 34, 108, 105, 110, 101, 83, 116, 97, 114, 116, 34, 58, 48, 44, 34, 108, 105, 110, 101, 69, 110, 100, 34, 58, 48, 44, 34, 99, 111, 108, 83, 116, 97, 114, 116, 34, 58, 48, 44, 34, 99, 111, 108, 69, 110, 100, 34, 58, 48, 125, 125, 125, 44, 10, 123, 34, 101, 113, 73, 110, 100, 101, 120, 34, 58, 51, 44, 34, 116, 97, 103, 34, 58, 34, 97, 108, 105, 97, 115, 34, 44, 34, 101, 113, 117, 97, 116, 105, 111, 110, 34, 58, 91, 57, 93, 44, 34, 115, 101, 99, 116, 105, 111, 110, 34, 58, 34, 105, 110, 105, 116, 105, 97, 108, 34, 125, 44, 10, 123, 34, 101, 113, 73, 110, 100, 101, 120, 34, 58, 52, 44, 34, 115, 101, 99, 116, 105, 111, 110, 34, 58, 34, 105, 110, 105, 116, 105, 97, 108, 34, 44, 34, 116, 97, 103, 34, 58, 34, 97, 115, 115, 105, 103, 110, 34, 44, 34, 100, 101, 102, 105, 110, 101, 115, 34, 58, 91, 34, 122, 34, 93, 44, 34, 117, 115, 101, 115, 34, 58, 91, 34, 36, 83, 84, 65, 82, 84, 46, 122, 34, 93, 44, 34, 101, 113, 117, 97, 116, 105, 111, 110, 34, 58, 91, 34, 36, 83, 84, 65, 82, 84, 46, 122, 34, 93, 44, 34, 115, 111, 117, 114, 99, 101, 34, 58, 123, 34, 105, 110, 102, 111, 34, 58, 123, 34, 102, 105, 108, 101, 34, 58, 34, 34, 44, 34, 108, 105, 110, 101, 83, 116, 97, 114, 116, 34, 58, 48, 44, 34, 108, 105, 110, 101, 69, 110, 100, 34, 58, 48, 44, 34, 99, 111, 108, 83, 116, 97, 114, 116, 34, 58, 48, 44, 34, 99, 111, 108, 69, 110, 100, 34, 58, 48, 125, 125, 125, 44, 10, 123, 34, 101, 113, 73, 110, 100, 101, 120, 34, 58, 53, 44, 34, 116, 97, 103, 34, 58, 34, 97, 108, 105, 97, 115, 34, 44, 34, 101, 113, 117, 97, 116, 105, 111, 110, 34, 58, 91, 55, 93, 44, 34, 115, 101, 99, 116, 105, 111, 110, 34, 58, 34, 105, 110, 105, 116, 105, 97, 108, 34, 125, 44, 10, 123, 34, 101, 113, 73, 110, 100, 101, 120, 34, 58, 54, 44, 34, 116, 97, 103, 34, 58, 34, 97, 108, 105, 97, 115, 34, 44, 34, 101, 113, 117, 97, 116, 105, 111, 110, 34, 58, 91, 56, 93, 44, 34, 115, 101, 99, 116, 105, 111, 110, 34, 58, 34, 105, 110, 105, 116, 105, 97, 108, 34, 125, 44, 10, 123, 34, 101, 113, 73, 110, 100, 101, 120, 34, 58, 55, 44, 34, 115, 101, 99, 116, 105, 111, 110, 34, 58, 34, 114, 101, 103, 117, 108, 97, 114, 34, 44, 34, 116, 97, 103, 34, 58, 34, 97, 115, 115, 105, 103, 110, 34, 44, 34, 100, 101, 102, 105, 110, 101, 115, 34, 58, 91, 34, 100, 101, 114, 40, 122, 41, 34, 93, 44, 34, 117, 115, 101, 115, 34, 58, 91, 34, 122, 34, 44, 34, 98, 101, 116, 97, 34, 44, 34, 121, 34, 44, 34, 120, 34, 93, 44, 34, 101, 113, 117, 97, 116, 105, 111, 110, 34, 58, 91, 34, 120, 32, 42, 32, 121, 32, 45, 32, 98, 101, 116, 97, 32, 42, 32, 122, 34, 93, 44, 34, 115, 111, 117, 114, 99, 101, 34, 58, 123, 34, 105, 110, 102, 111, 34, 58, 123, 34, 102, 105, 108, 101, 34, 58, 34, 47, 118, 97, 103, 114, 97, 110, 116, 95, 100, 97, 116, 97, 47, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 109, 111, 34, 44, 34, 108, 105, 110, 101, 83, 116, 97, 114, 116, 34, 58, 57, 44, 34, 108, 105, 110, 101, 69, 110, 100, 34, 58, 57, 44, 34, 99, 111, 108, 83, 116, 97, 114, 116, 34, 58, 49, 44, 34, 99, 111, 108, 69, 110, 100, 34, 58, 50, 49, 125, 125, 125, 44, 10, 123, 34, 101, 113, 73, 110, 100, 101, 120, 34, 58, 56, 44, 34, 115, 101, 99, 116, 105, 111, 110, 34, 58, 34, 114, 101, 103, 117, 108, 97, 114, 34, 44, 34, 116, 97, 103, 34, 58, 34, 97, 115, 115, 105, 103, 110, 34, 44, 34, 100, 101, 102, 105, 110, 101, 115, 34, 58, 91, 34, 100, 101, 114, 40, 121, 41, 34, 93, 44, 34, 117, 115, 101, 115, 34, 58, 91, 34, 121, 34, 44, 34, 122, 34, 44, 34, 114, 111, 34, 44, 34, 120, 34, 93, 44, 34, 101, 113, 117, 97, 116, 105, 111, 110, 34, 58, 91, 34, 120, 32, 42, 32, 40, 114, 111, 32, 45, 32, 122, 41, 32, 45, 32, 121, 34, 93, 44, 34, 115, 111, 117, 114, 99, 101, 34, 58, 123, 34, 105, 110, 102, 111, 34, 58, 123, 34, 102, 105, 108, 101, 34, 58, 34, 47, 118, 97, 103, 114, 97, 110, 116, 95, 100, 97, 116, 97, 47, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 109, 111, 34, 44, 34, 108, 105, 110, 101, 83, 116, 97, 114, 116, 34, 58, 56, 44, 34, 108, 105, 110, 101, 69, 110, 100, 34, 58, 56, 44, 34, 99, 111, 108, 83, 116, 97, 114, 116, 34, 58, 49, 44, 34, 99, 111, 108, 69, 110, 100, 34, 58, 50, 52, 125, 125, 125, 44, 10, 123, 34, 101, 113, 73, 110, 100, 101, 120, 34, 58, 57, 44, 34, 115, 101, 99, 116, 105, 111, 110, 34, 58, 34, 114, 101, 103, 117, 108, 97, 114, 34, 44, 34, 116, 97, 103, 34, 58, 34, 97, 115, 115, 105, 103, 110, 34, 44, 34, 100, 101, 102, 105, 110, 101, 115, 34, 58, 91, 34, 100, 101, 114, 40, 120, 41, 34, 93, 44, 34, 117, 115, 101, 115, 34, 58, 91, 34, 120, 34, 44, 34, 121, 34, 44, 34, 115, 105, 103, 109, 97, 34, 93, 44, 34, 101, 113, 117, 97, 116, 105, 111, 110, 34, 58, 91, 34, 115, 105, 103, 109, 97, 32, 42, 32, 40, 121, 32, 45, 32, 120, 41, 34, 93, 44, 34, 115, 111, 117, 114, 99, 101, 34, 58, 123, 34, 105, 110, 102, 111, 34, 58, 123, 34, 102, 105, 108, 101, 34, 58, 34, 47, 118, 97, 103, 114, 97, 110, 116, 95, 100, 97, 116, 97, 47, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 109, 111, 34, 44, 34, 108, 105, 110, 101, 83, 116, 97, 114, 116, 34, 58, 55, 44, 34, 108, 105, 110, 101, 69, 110, 100, 34, 58, 55, 44, 34, 99, 111, 108, 83, 116, 97, 114, 116, 34, 58, 49, 44, 34, 99, 111, 108, 69, 110, 100, 34, 58, 50, 49, 125, 125, 125, 10, 93, 44, 10, 34, 102, 117, 110, 99, 116, 105, 111, 110, 115, 34, 58, 91, 10, 93, 10, 125]);
Module['FS_createDataFile']('/', 'LorenzAttractor_info.json', fileData0, true, true, false);
var fileData1 = [];
fileData1.push.apply(fileData1, [47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 102, 117, 110, 99, 116, 105, 111, 110, 115, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 102, 117, 110, 99, 116, 105, 111, 110, 115, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 114, 101, 99, 111, 114, 100, 115, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 114, 101, 99, 111, 114, 100, 115, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 49, 101, 120, 111, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 49, 101, 120, 111, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 50, 110, 108, 115, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 50, 110, 108, 115, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 51, 108, 115, 121, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 51, 108, 115, 121, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 52, 115, 101, 116, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 52, 115, 101, 116, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 53, 101, 118, 116, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 53, 101, 118, 116, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 54, 105, 110, 122, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 54, 105, 110, 122, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 55, 100, 108, 121, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 55, 100, 108, 121, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 56, 98, 110, 100, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 56, 98, 110, 100, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 57, 97, 108, 103, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 57, 97, 108, 103, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 48, 97, 115, 114, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 48, 97, 115, 114, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 49, 109, 105, 120, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 49, 109, 105, 120, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 50, 106, 97, 99, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 50, 106, 97, 99, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 51, 111, 112, 116, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 51, 111, 112, 116, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 52, 108, 110, 122, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 52, 108, 110, 122, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 53, 115, 121, 110, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 53, 115, 121, 110, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 54, 100, 97, 101, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 54, 100, 97, 101, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 55, 105, 110, 108, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 55, 105, 110, 108, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 56, 115, 112, 100, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 56, 115, 112, 100, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 105, 110, 105, 116, 95, 102, 109, 117, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 105, 110, 105, 116, 95, 102, 109, 117, 46, 99, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 79, 115, 32, 45, 102, 80, 73, 67, 32, 45, 102, 97, 108, 105, 103, 110, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 45, 109, 102, 112, 109, 97, 116, 104, 61, 115, 115, 101, 32, 45, 102, 110, 111, 45, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 32, 32, 45, 73, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 105, 110, 99, 108, 117, 100, 101, 47, 111, 109, 99, 47, 99, 47, 102, 109, 105, 39, 32, 45, 68, 79, 77, 67, 95, 70, 77, 73, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 32, 32, 32, 45, 99, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 70, 77, 85, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 70, 77, 85, 46, 99, 10, 73, 110, 32, 102, 105, 108, 101, 32, 105, 110, 99, 108, 117, 100, 101, 100, 32, 102, 114, 111, 109, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 70, 77, 85, 46, 99, 58, 53, 55, 58, 10, 102, 109, 105, 45, 101, 120, 112, 111, 114, 116, 47, 102, 109, 117, 50, 95, 109, 111, 100, 101, 108, 95, 105, 110, 116, 101, 114, 102, 97, 99, 101, 46, 99, 46, 105, 110, 99, 58, 32, 73, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 39, 111, 109, 99, 95, 97, 115, 115, 101, 114, 116, 95, 102, 109, 105, 95, 99, 111, 109, 109, 111, 110, 39, 58, 10, 102, 109, 105, 45, 101, 120, 112, 111, 114, 116, 47, 102, 109, 117, 50, 95, 109, 111, 100, 101, 108, 95, 105, 110, 116, 101, 114, 102, 97, 99, 101, 46, 99, 46, 105, 110, 99, 58, 49, 54, 57, 58, 49, 54, 58, 32, 119, 97, 114, 110, 105, 110, 103, 58, 32, 112, 97, 115, 115, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 49, 32, 111, 102, 32, 39, 71, 67, 95, 118, 97, 115, 112, 114, 105, 110, 116, 102, 39, 32, 102, 114, 111, 109, 32, 105, 110, 99, 111, 109, 112, 97, 116, 105, 98, 108, 101, 32, 112, 111, 105, 110, 116, 101, 114, 32, 116, 121, 112, 101, 32, 91, 45, 87, 105, 110, 99, 111, 109, 112, 97, 116, 105, 98, 108, 101, 45, 112, 111, 105, 110, 116, 101, 114, 45, 116, 121, 112, 101, 115, 93, 10, 32, 32, 32, 71, 67, 95, 118, 97, 115, 112, 114, 105, 110, 116, 102, 40, 38, 115, 116, 114, 44, 32, 109, 115, 103, 44, 32, 97, 114, 103, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 94, 126, 126, 126, 10, 73, 110, 32, 102, 105, 108, 101, 32, 105, 110, 99, 108, 117, 100, 101, 100, 32, 102, 114, 111, 109, 32, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 95, 102, 117, 110, 99, 46, 104, 58, 53, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 70, 77, 85, 46, 99, 58, 49, 48, 58, 10, 117, 116, 105, 108, 47, 109, 111, 100, 101, 108, 105, 99, 97, 95, 115, 116, 114, 105, 110, 103, 46, 104, 58, 55, 49, 58, 51, 49, 58, 32, 110, 111, 116, 101, 58, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 39, 99, 111, 110, 115, 116, 32, 99, 104, 97, 114, 32, 42, 42, 39, 32, 98, 117, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 111, 102, 32, 116, 121, 112, 101, 32, 39, 99, 104, 97, 114, 32, 42, 42, 39, 10, 32, 105, 110, 116, 32, 71, 67, 95, 118, 97, 115, 112, 114, 105, 110, 116, 102, 40, 99, 111, 110, 115, 116, 32, 99, 104, 97, 114, 32, 42, 42, 115, 116, 114, 112, 44, 32, 99, 111, 110, 115, 116, 32, 99, 104, 97, 114, 32, 42, 102, 109, 116, 44, 32, 118, 97, 95, 108, 105, 115, 116, 32, 97, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 94, 126, 126, 126, 10, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 70, 77, 85, 46, 99, 58, 32, 65, 116, 32, 116, 111, 112, 32, 108, 101, 118, 101, 108, 58, 10, 99, 99, 49, 58, 32, 119, 97, 114, 110, 105, 110, 103, 58, 32, 117, 110, 114, 101, 99, 111, 103, 110, 105, 122, 101, 100, 32, 99, 111, 109, 109, 97, 110, 100, 32, 108, 105, 110, 101, 32, 111, 112, 116, 105, 111, 110, 32, 39, 45, 87, 110, 111, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 45, 101, 113, 117, 97, 108, 105, 116, 121, 39, 10, 109, 107, 100, 105, 114, 32, 45, 112, 32, 46, 46, 47, 98, 105, 110, 97, 114, 105, 101, 115, 47, 108, 105, 110, 117, 120, 54, 52, 10, 47, 111, 112, 116, 47, 114, 104, 47, 100, 101, 118, 116, 111, 111, 108, 115, 101, 116, 45, 56, 47, 114, 111, 111, 116, 47, 117, 115, 114, 47, 98, 105, 110, 47, 103, 99, 99, 32, 45, 115, 104, 97, 114, 101, 100, 32, 45, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 115, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 102, 117, 110, 99, 116, 105, 111, 110, 115, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 114, 101, 99, 111, 114, 100, 115, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 49, 101, 120, 111, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 50, 110, 108, 115, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 51, 108, 115, 121, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 52, 115, 101, 116, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 53, 101, 118, 116, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 54, 105, 110, 122, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 55, 100, 108, 121, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 56, 98, 110, 100, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 57, 97, 108, 103, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 48, 97, 115, 114, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 49, 109, 105, 120, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 50, 106, 97, 99, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 51, 111, 112, 116, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 52, 108, 110, 122, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 53, 115, 121, 110, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 54, 100, 97, 101, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 55, 105, 110, 108, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 56, 115, 112, 100, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 105, 110, 105, 116, 95, 102, 109, 117, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 70, 77, 85, 46, 111, 32, 32, 32, 45, 76, 34, 47, 118, 97, 103, 114, 97, 110, 116, 95, 100, 97, 116, 97, 34, 32, 32, 32, 45, 87, 108, 44, 45, 66, 100, 121, 110, 97, 109, 105, 99, 32, 45, 76, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 108, 105, 98, 47, 120, 56, 54, 95, 54, 52, 45, 108, 105, 110, 117, 120, 45, 103, 110, 117, 47, 111, 109, 99, 39, 32, 45, 87, 108, 44, 45, 114, 112, 97, 116, 104, 44, 39, 47, 111, 112, 116, 47, 111, 112, 101, 110, 109, 111, 100, 101, 108, 105, 99, 97, 45, 110, 105, 103, 104, 116, 108, 121, 47, 98, 105, 110, 47, 46, 46, 47, 108, 105, 98, 47, 120, 56, 54, 95, 54, 52, 45, 108, 105, 110, 117, 120, 45, 103, 110, 117, 47, 111, 109, 99, 39, 32, 32, 32, 45, 87, 108, 44, 45, 66, 115, 116, 97, 116, 105, 99, 32, 45, 108, 83, 105, 109, 117, 108, 97, 116, 105, 111, 110, 82, 117, 110, 116, 105, 109, 101, 70, 77, 73, 32, 32, 45, 87, 108, 44, 45, 45, 110, 111, 45, 97, 115, 45, 110, 101, 101, 100, 101, 100, 32, 45, 87, 108, 44, 45, 45, 100, 105, 115, 97, 98, 108, 101, 45, 110, 101, 119, 45, 100, 116, 97, 103, 115, 32, 45, 108, 108, 97, 112, 97, 99, 107, 32, 45, 108, 98, 108, 97, 115, 32, 45, 87, 108, 44, 45, 66, 100, 121, 110, 97, 109, 105, 99, 32, 45, 108, 109, 32, 45, 108, 112, 116, 104, 114, 101, 97, 100, 32, 45, 114, 100, 121, 110, 97, 109, 105, 99, 32, 32, 45, 87, 108, 44, 45, 45, 110, 111, 45, 117, 110, 100, 101, 102, 105, 110, 101, 100, 32, 10, 99, 112, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 115, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 70, 77, 85, 46, 108, 105, 98, 115, 32, 46, 46, 47, 98, 105, 110, 97, 114, 105, 101, 115, 47, 108, 105, 110, 117, 120, 54, 52, 47, 10, 104, 101, 97, 100, 32, 45, 110, 50, 48, 32, 77, 97, 107, 101, 102, 105, 108, 101, 32, 62, 32, 46, 46, 47, 114, 101, 115, 111, 117, 114, 99, 101, 115, 47, 108, 105, 110, 117, 120, 54, 52, 46, 115, 117, 109, 109, 97, 114, 121, 10, 109, 97, 107, 101, 32, 100, 105, 115, 116, 99, 108, 101, 97, 110, 10, 109, 97, 107, 101, 91, 49, 93, 58, 32, 69, 110, 116, 101, 114, 105, 110, 103, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 32, 96, 47, 116, 109, 112, 47, 79, 112, 101, 110, 77, 111, 100, 101, 108, 105, 99, 97, 95, 118, 97, 103, 114, 97, 110, 116, 47, 79, 77, 69, 100, 105, 116, 47, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 47, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 102, 109, 117, 116, 109, 112, 47, 115, 111, 117, 114, 99, 101, 115, 39, 10, 114, 109, 32, 45, 102, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 100, 101, 102, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 97, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 115, 111, 32, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 102, 117, 110, 99, 116, 105, 111, 110, 115, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 114, 101, 99, 111, 114, 100, 115, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 49, 101, 120, 111, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 50, 110, 108, 115, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 51, 108, 115, 121, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 52, 115, 101, 116, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 53, 101, 118, 116, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 54, 105, 110, 122, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 55, 100, 108, 121, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 56, 98, 110, 100, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 48, 57, 97, 108, 103, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 48, 97, 115, 114, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 49, 109, 105, 120, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 50, 106, 97, 99, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 51, 111, 112, 116, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 52, 108, 110, 122, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 53, 115, 121, 110, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 54, 100, 97, 101, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 55, 105, 110, 108, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 49, 56, 115, 112, 100, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 105, 110, 105, 116, 95, 102, 109, 117, 46, 111, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 95, 70, 77, 85, 46, 111, 32, 32, 10, 114, 109, 32, 45, 102, 32, 77, 97, 107, 101, 102, 105, 108, 101, 32, 99, 111, 110, 102, 105, 103, 46, 115, 116, 97, 116, 117, 115, 32, 99, 111, 110, 102, 105, 103, 46, 108, 111, 103, 10, 109, 97, 107, 101, 91, 49, 93, 58, 32, 76, 101, 97, 118, 105, 110, 103, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 32, 96, 47, 116, 109, 112, 47, 79, 112, 101, 110, 77, 111, 100, 101, 108, 105, 99, 97, 95, 118, 97, 103, 114, 97, 110, 116, 47, 79, 77, 69, 100, 105, 116, 47, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 47, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 102, 109, 117, 116, 109, 112, 47, 115, 111, 117, 114, 99, 101, 115, 39, 10]);
Module['FS_createDataFile']('/', 'static.log', fileData1, true, true, false);
var fileData2 = [];
fileData2.push.apply(fileData2, [35, 32, 77, 97, 107, 101, 102, 105, 108, 101, 32, 103, 101, 110, 101, 114, 97, 116, 101, 100, 32, 98, 121, 32, 79, 112, 101, 110, 77, 111, 100, 101, 108, 105, 99, 97, 10, 67, 67, 61, 47, 104, 111, 109, 101, 47, 118, 97, 103, 114, 97, 110, 116, 47, 101, 109, 115, 100, 107, 47, 117, 112, 115, 116, 114, 101, 97, 109, 47, 101, 109, 115, 99, 114, 105, 112, 116, 101, 110, 47, 101, 109, 99, 99, 10, 65, 82, 61, 47, 104, 111, 109, 101, 47, 118, 97, 103, 114, 97, 110, 116, 47, 101, 109, 115, 100, 107, 47, 117, 112, 115, 116, 114, 101, 97, 109, 47, 101, 109, 115, 99, 114, 105, 112, 116, 101, 110, 47, 101, 109, 97, 114, 10, 67, 70, 76, 65, 71, 83, 61, 45, 87, 110, 111, 45, 117, 110, 117, 115, 101, 100, 45, 118, 97, 108, 117, 101, 32, 45, 87, 110, 111, 45, 108, 111, 103, 105, 99, 97, 108, 45, 111, 112, 45, 112, 97, 114, 101, 110, 116, 104, 101, 115, 101, 115, 10, 76, 68, 61, 36, 40, 67, 67, 41, 32, 45, 115, 104, 97, 114, 101, 100, 10, 35, 32, 100, 101, 102, 105, 110, 101, 32, 79, 77, 67, 95, 76, 68, 70, 76, 65, 71, 83, 95, 76, 73, 78, 75, 95, 84, 89, 80, 69, 32, 101, 110, 118, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 116, 111, 32, 111, 118, 101, 114, 114, 105, 100, 101, 32, 116, 104, 105, 115, 10, 79, 77, 67, 95, 76, 68, 70, 76, 65, 71, 83, 95, 76, 73, 78, 75, 95, 84, 89, 80, 69, 61, 115, 116, 97, 116, 105, 99, 10, 76, 68, 70, 76, 65, 71, 83, 61, 32, 45, 115, 104, 97, 114, 101, 100, 32, 45, 115, 116, 97, 116, 105, 99, 45, 108, 105, 98, 103, 99, 99, 32, 45, 108, 109, 32, 45, 108, 112, 116, 104, 114, 101, 97, 100, 32, 32, 45, 115, 104, 97, 114, 101, 100, 10, 68, 76, 76, 69, 88, 84, 61, 46, 115, 111, 10, 78, 69, 69, 68, 95, 82, 85, 78, 84, 73, 77, 69, 61, 49, 10, 78, 69, 69, 68, 95, 68, 71, 69, 83, 86, 61, 49, 10, 78, 69, 69, 68, 95, 67, 77, 73, 78, 80, 65, 67, 75, 61, 10, 78, 69, 69, 68, 95, 83, 85, 78, 68, 73, 65, 76, 83, 61, 10, 70, 77, 73, 80, 76, 65, 84, 70, 79, 82, 77, 61, 108, 105, 110, 117, 120, 54, 52, 10, 35, 32, 78, 111, 116, 101, 58, 32, 83, 105, 109, 117, 108, 97, 116, 105, 111, 110, 32, 111, 102, 32, 116, 104, 101, 32, 102, 109, 117, 32, 119, 105, 116, 104, 32, 100, 121, 109, 111, 108, 97, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 119, 105, 116, 104, 32, 45, 102, 105, 110, 108, 105, 110, 101, 45, 115, 109, 97, 108, 108, 45, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 40, 101, 110, 97, 98, 108, 101, 100, 32, 98, 121, 32, 109, 111, 115, 116, 32, 111, 112, 116, 105, 109, 105, 122, 97, 116, 105, 111, 110, 32, 108, 101, 118, 101, 108, 115, 41, 10, 67, 80, 80, 70, 76, 65, 71, 83, 61, 45, 68, 79, 77, 67, 95, 77, 73, 78, 73, 77, 65, 76, 95, 77, 69, 84, 65, 68, 65, 84, 65, 61, 49, 32, 45, 73, 47, 104, 111, 109, 101, 47, 118, 97, 103, 114, 97, 110, 116, 47, 66, 111, 100, 121, 108, 105, 103, 104, 116, 46, 106, 115, 45, 70, 77, 85, 45, 67, 111, 109, 112, 105, 108, 101, 114, 47, 99, 111, 109, 112, 105, 108, 101, 114, 47, 115, 111, 117, 114, 99, 101, 115, 47, 102, 109, 105, 32, 45, 73, 47, 117, 115, 114, 47, 108, 111, 99, 97, 108, 47, 105, 110, 99, 108, 117, 100, 101, 32, 45, 102, 100, 111, 108, 108, 97, 114, 115, 45, 105, 110, 45, 105, 100, 101, 110, 116, 105, 102, 105, 101, 114, 115, 32, 45, 68, 67, 77, 73, 78, 80, 65, 67, 75, 95, 78, 79, 95, 68, 76, 76, 61, 49, 10, 10, 111, 118, 101, 114, 114, 105, 100, 101, 32, 67, 80, 80, 70, 76, 65, 71, 83, 32, 43, 61, 32, 10, 10, 67, 70, 73, 76, 69, 83, 32, 61, 32, 76, 111, 114, 101, 110, 122, 65, 116, 116, 114, 97, 99, 116, 111, 114, 46, 99, 32, 92, 10]);
Module['FS_createDataFile']('/', 'linux64.summary', fileData2, true, true, false);

    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }
  
   }
   loadPackage({"files": []});
  
  })();
  

    // All the pre-js content up to here must remain later on, we need to run
    // it.
    var necessaryPreJSTasks = Module['preRun'].slice();
  
    if (!Module['preRun']) throw 'Module.preRun should exist because file support used it; did a pre-js delete it?';
    necessaryPreJSTasks.forEach(function(task) {
      if (Module['preRun'].indexOf(task) < 0) throw 'All preRun tasks that exist before user pre-js code should remain after; did you replace Module or modify Module.preRun?';
    });
  

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)');
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

var nodeFS;
var nodePath;

if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }

// include: node_shell_read.js


read_ = function shell_read(filename, binary) {
  var ret = tryParseAsDataURI(filename);
  if (ret) {
    return binary ? ret : ret.toString();
  }
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
};

readBinary = function readBinary(filename) {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

// end include: node_shell_read.js
  if (process['argv'].length > 1) {
    thisProgram = process['argv'][1].replace(/\\/g, '/');
  }

  arguments_ = process['argv'].slice(2);

  // MODULARIZE will export the module in the proper place outside, we don't need to export here

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  process['on']('unhandledRejection', abort);

  quit_ = function(status) {
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else
if (ENVIRONMENT_IS_SHELL) {

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      var data = tryParseAsDataURI(f);
      if (data) {
        return intArrayToString(data);
      }
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    data = tryParseAsDataURI(f);
    if (data) {
      return data;
    }
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status) {
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document !== 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {

// include: web_or_worker_shell_read.js


  read_ = function shell_read(url) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    } catch (err) {
      var data = tryParseAsDataURI(url);
      if (data) {
        return intArrayToString(data);
      }
      throw err;
    }
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      } catch (err) {
        var data = tryParseAsDataURI(url);
        if (data) {
          return data;
        }
        throw err;
      }
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      var data = tryParseAsDataURI(url);
      if (data) {
        onload(data.buffer);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = function(title) { document.title = title };
} else
{
  throw new Error('environment detection error');
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];if (!Object.getOwnPropertyDescriptor(Module, 'arguments')) Object.defineProperty(Module, 'arguments', { configurable: true, get: function() { abort('Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
if (Module['thisProgram']) thisProgram = Module['thisProgram'];if (!Object.getOwnPropertyDescriptor(Module, 'thisProgram')) Object.defineProperty(Module, 'thisProgram', { configurable: true, get: function() { abort('Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
if (Module['quit']) quit_ = Module['quit'];if (!Object.getOwnPropertyDescriptor(Module, 'quit')) Object.defineProperty(Module, 'quit', { configurable: true, get: function() { abort('Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] === 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] === 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] === 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] === 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] === 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] === 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] === 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] === 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
assert(typeof Module['TOTAL_MEMORY'] === 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
if (!Object.getOwnPropertyDescriptor(Module, 'read')) Object.defineProperty(Module, 'read', { configurable: true, get: function() { abort('Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
if (!Object.getOwnPropertyDescriptor(Module, 'readAsync')) Object.defineProperty(Module, 'readAsync', { configurable: true, get: function() { abort('Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
if (!Object.getOwnPropertyDescriptor(Module, 'readBinary')) Object.defineProperty(Module, 'readBinary', { configurable: true, get: function() { abort('Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
if (!Object.getOwnPropertyDescriptor(Module, 'setWindowTitle')) Object.defineProperty(Module, 'setWindowTitle', { configurable: true, get: function() { abort('Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';




var STACK_ALIGN = 16;

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  // Make sure functionsInTableMap is actually up to date, that is, that this
  // function is not actually in the wasm Table despite not being tracked in
  // functionsInTableMap.
  for (var i = 0; i < wasmTable.length; i++) {
    assert(wasmTable.get(i) != func, 'function in Table but not functionsInTableMap');
  }

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    assert(typeof sig !== 'undefined', 'Missing signature argument to addFunction: ' + func);
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {
  assert(typeof func !== 'undefined');
  if (typeof sig === 'undefined') {
    err('warning: addFunction(): You should provide a wasm function signature string as a second argument. This is not necessary for asm.js and asm2wasm, but can be required for the LLVM wasm backend, so it is recommended for full portability.');
  }

  return addFunctionWasm(func, sig);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};

function getCompilerSetting(name) {
  throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for getCompilerSetting or emscripten_get_compiler_setting to work';
}



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];if (!Object.getOwnPropertyDescriptor(Module, 'wasmBinary')) Object.defineProperty(Module, 'wasmBinary', { configurable: true, get: function() { abort('Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];if (!Object.getOwnPropertyDescriptor(Module, 'noExitRuntime')) Object.defineProperty(Module, 'noExitRuntime', { configurable: true, get: function() { abort('Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS = 0;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  assert(returnType !== 'array', 'Return type should not be "array".');
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;
  assert(typeof allocator === 'number', 'allocate no longer takes a type argument')
  assert(typeof slab !== 'number', 'allocate no longer takes a number as arg0')

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!');
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      if (u >= 0x200000) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).');
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0 || i == maxBytesToRead / 2) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}

// end include: runtime_strings_extra.js
// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var STACK_BASE = 5282416,
    STACKTOP = STACK_BASE,
    STACK_MAX = 39536;

assert(STACK_BASE % 16 === 0, 'stack must start aligned');

var TOTAL_STACK = 5242880;
if (Module['TOTAL_STACK']) assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime')

var INITIAL_INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;if (!Object.getOwnPropertyDescriptor(Module, 'INITIAL_MEMORY')) Object.defineProperty(Module, 'INITIAL_MEMORY', { configurable: true, get: function() { abort('Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });

assert(INITIAL_INITIAL_MEMORY >= TOTAL_STACK, 'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,
       'JS engine does not provide full typed array support');

// In non-standalone/normal mode, we create the memory here.
// include: runtime_init_memory.js


// Create the main memory. (Note: this isn't used in STANDALONE_WASM mode since the wasm
// memory is created in the wasm, not in JS.)

  if (Module['wasmMemory']) {
    wasmMemory = Module['wasmMemory'];
  } else
  {
    wasmMemory = new WebAssembly.Memory({
      'initial': INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
      ,
      'maximum': 2147483648 / WASM_PAGE_SIZE
    });
  }

if (wasmMemory) {
  buffer = wasmMemory.buffer;
}

// If the user provides an incorrect length, just use that length instead rather than providing the user to
// specifically provide the memory length with Module['INITIAL_MEMORY'].
INITIAL_INITIAL_MEMORY = buffer.byteLength;
assert(INITIAL_INITIAL_MEMORY % WASM_PAGE_SIZE === 0);
assert(65536 % WASM_PAGE_SIZE === 0);
updateGlobalBufferAndViews(buffer);

// end include: runtime_init_memory.js

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  assert((STACK_MAX & 3) == 0);
  // The stack grows downwards
  HEAPU32[(STACK_MAX >> 2)+1] = 0x2135467;
  HEAPU32[(STACK_MAX >> 2)+2] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAP32[0] = 0x63736d65; /* 'emsc' */
}

function checkStackCookie() {
  if (ABORT) return;
  var cookie1 = HEAPU32[(STACK_MAX >> 2)+1];
  var cookie2 = HEAPU32[(STACK_MAX >> 2)+2];
  if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' + cookie2.toString(16) + ' ' + cookie1.toString(16));
  }
  // Also test the global address 0 for integrity.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
}

// end include: runtime_stack_check.js
// include: runtime_assertions.js


// Endianness check (note: assumes compiler arch was little-endian)
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';
})();

function abortFnPtrError(ptr, sig) {
	var possibleSig = '';
	for(var x in debug_tables) {
		var tbl = debug_tables[x];
		if (tbl[ptr]) {
			possibleSig += 'as sig "' + x + '" pointing to function ' + tbl[ptr] + ', ';
		}
	}
	abort("Invalid function pointer " + ptr + " called with signature '" + sig + "'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this). This pointer might make sense in another type signature: " + possibleSig);
}

// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  checkStackCookie();
  assert(!runtimeInitialized);
  runtimeInitialized = true;
  Module['___set_stack_limits'](STACK_BASE, STACK_MAX);
  if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
TTY.init();
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  checkStackCookie();
  FS.ignorePermissions = false;
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  checkStackCookie();
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err('dependency: ' + dep);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  var output = 'abort(' + what + ') at ' + stackTrace();
  what = output;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// include: URIUtils.js


function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = "file://";

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}

// end include: URIUtils.js
function createExportWrapper(name, fixedasm) {
  return function() {
    var displayName = name;
    var asm = fixedasm;
    if (!fixedasm) {
      asm = Module['asm'];
    }
    assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
    assert(!runtimeExited, 'native function `' + displayName + '` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    if (!asm[name]) {
      assert(asm[name], 'exported native function `' + displayName + '` not found');
    }
    return asm[name].apply(null, arguments);
  };
}

var wasmBinaryFile = 'data:application/octet-stream;base64,AGFzbQEAAAABhoOAgAA0YAF/AGACf38Bf2ABfwF/YAN/f38Bf2AGf39/f39/AGACf38AYAR/f39/AX9gA39/fwBgAAF/YAR/f39/AGAAAGAFf39/f38Bf2ADf35/AX5gBX9/f39/AGAHf39/f39/fwF/YAd/f39/f39/AGAEf35+fwBgBn9/f39/fwF/YAZ/f398f38Bf2ADf35/AX9gBn98f39/fwF/YAJ+fwF/YAF/AX5gAnx8AXxgB39/f39/fH8AYAZ/f39/fH8AYAV/f398fABgA39/fABgBH9/fHwAYAF8AGAIf39/f39/f38Bf2AJf39/f39/f39/AX9gCn9/f39/f39/f38Bf2AGf39/f398AX9gBX9/f398AX9gBH9/f3wBf2ADf398AX9gBX9/fH9/AX9gBn9/fHx/fAF/YAR/fn9/AX9gAn98AX9gBH98fH8Bf2ADfn9/AX9gBH9/fn8BfmABfgF+YAJ+fgF+YAF8AX5gAX8BfGACf38BfGADf39/AXxgAn5+AXxgAnx/AXwCmYWAgAAfA2VudhJlbXNjcmlwdGVuX2xvbmdqbXAABQNlbnYMaW52b2tlX2lpaWlpAAsDZW52C3NldFRlbXBSZXQwAAADZW52C2dldFRlbXBSZXQwAAgDZW52Cmludm9rZV9paWkAAwNlbnYOaW52b2tlX3ZpaWlpaWkADwNlbnYJaW52b2tlX3ZpAAUDZW52DGludm9rZV92aWlpaQANA2Vudg1pbnZva2VfaWlpZGlpABIDZW52CWludm9rZV9paQABA2VudghpbnZva2VfdgAAA2Vudg1pbnZva2VfaWlpaWlkACEDZW52DGludm9rZV92aWlkZAAaA2Vudg1pbnZva2VfaWlpaWlpABEDZW52Cmludm9rZV9kaWkAMQNlbnYNX19hc3NlcnRfZmFpbAAJA2VudgVhYm9ydAAKA2Vudg5pbnZva2VfdmlpaWlkaQAYA2VudgtpbnZva2VfdmlpaQAJA2VudgpfX3N5c19vcGVuAAMWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MQhmZF9jbG9zZQACA2VudgxfX3N5c19hY2Nlc3MAAQNlbnYNX19zeXNfZmNudGw2NAADA2VudgtfX3N5c19pb2N0bAADFndhc2lfc25hcHNob3RfcHJldmlldzEHZmRfcmVhZAAGFndhc2lfc25hcHNob3RfcHJldmlldzEIZmRfd3JpdGUABgNlbnYWZW1zY3JpcHRlbl9yZXNpemVfaGVhcAACA2VudhVlbXNjcmlwdGVuX21lbWNweV9iaWcAAwNlbnYXX19oYW5kbGVfc3RhY2tfb3ZlcmZsb3cAChZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxB2ZkX3NlZWsACwNlbnYGbWVtb3J5AgGAAoCAAgPugoCAAOwCCgEBAQEBAQEBBQUFAQEBBQUFBwUBAQMCAwUFBQUBAQEBAQEBBgYGBgYDAwMDAwMGHgEDCAgFBwYFAQEBAQULAhICAQEGAAABAQYBCAgGDgcJAAIEBQACJgIAAgICBgYwBgYGBiQGAwYDBgMBAwEBAwYGDgICAgIGKAMLAwMDAwsLAikDAwMDAwECAQoICgIBAAICCgIAAAACAAAABQcCAAICAgIDAwkFBwQADQkJCQcCBwELCgUGAAcFLQcHLwEAAQAFAgcFAB8LAgABBQAACQIABQUFAAAAAAUBBQAdAgUFAAAFEQcgDwYbBSMFJQAHGRwJIgEKAgIICAECCAEBAQEBAQMDAQEBAQEBAwIWFgICAAICAgYTEwMDAQEGAwYDAwwCAAIDCAEzCw4HAgkqFRUNAxQFLgICAwIICgMCAiwBAQAAAhAQMgYDBQIAAQEBBQICAgECARcXAwMCAwYBAgwBAgACCAACBSsLJwSEgICAAAFwAGcGmoCAgAAEfwFB8LTCAgt/AEHotAILfwFBAAt/AUEACwfoiYCAAD4ZX19pbmRpcmVjdF9mdW5jdGlvbl90YWJsZQEAEV9fd2FzbV9jYWxsX2N0b3JzAB4EZnJlZQDqAgZjYWxsb2MA6wIGbWFsbG9jAOkCCnRlc3RTZXRqbXAA5wIKc2F2ZVNldGptcADmAhVmbWkyTmV3RGlzY3JldGVTdGF0ZXMAZhRmbWkyR2V0VHlwZXNQbGF0Zm9ybQBpDmZtaTJHZXRWZXJzaW9uAGoTZm1pMlNldERlYnVnTG9nZ2luZwBrD2ZtaTJJbnN0YW50aWF0ZQBsEGZtaTJGcmVlSW5zdGFuY2UAcxNmbWkyU2V0dXBFeHBlcmltZW50AHUbZm1pMkVudGVySW5pdGlhbGl6YXRpb25Nb2RlAHYaZm1pMkV4aXRJbml0aWFsaXphdGlvbk1vZGUAeA1mbWkyVGVybWluYXRlAHkJZm1pMlJlc2V0AHoLZm1pMkdldFJlYWwAew5mbWkyR2V0SW50ZWdlcgB+DmZtaTJHZXRCb29sZWFuAH8NZm1pMkdldFN0cmluZwCAAQtmbWkyU2V0UmVhbACBAQ5mbWkyU2V0SW50ZWdlcgCDAQ5mbWkyU2V0Qm9vbGVhbgCFAQ1mbWkyU2V0U3RyaW5nAIcBD2ZtaTJHZXRGTVVzdGF0ZQCJAQ9mbWkyU2V0Rk1Vc3RhdGUAiwEQZm1pMkZyZWVGTVVzdGF0ZQCMARpmbWkyU2VyaWFsaXplZEZNVXN0YXRlU2l6ZQCNARVmbWkyU2VyaWFsaXplRk1Vc3RhdGUAjgEXZm1pMkRlU2VyaWFsaXplRk1Vc3RhdGUAjwEcZm1pMkdldERpcmVjdGlvbmFsRGVyaXZhdGl2ZQCQARJmbWkyRW50ZXJFdmVudE1vZGUAkwEbZm1pMkVudGVyQ29udGludW91c1RpbWVNb2RlAJQBG2ZtaTJDb21wbGV0ZWRJbnRlZ3JhdG9yU3RlcACVAQtmbWkyU2V0VGltZQCWARdmbWkyU2V0Q29udGludW91c1N0YXRlcwCXARJmbWkyR2V0RGVyaXZhdGl2ZXMAmQEWZm1pMkdldEV2ZW50SW5kaWNhdG9ycwCaARdmbWkyR2V0Q29udGludW91c1N0YXRlcwCbASFmbWkyR2V0Tm9taW5hbHNPZkNvbnRpbnVvdXNTdGF0ZXMAnAEbZm1pMlNldFJlYWxJbnB1dERlcml2YXRpdmVzAJ0BHGZtaTJHZXRSZWFsT3V0cHV0RGVyaXZhdGl2ZXMAngEKZm1pMkRvU3RlcACgAQ1mbWkyR2V0U3RhdHVzAKEBEWZtaTJHZXRSZWFsU3RhdHVzAKIBFGZtaTJHZXRJbnRlZ2VyU3RhdHVzAKMBFGZtaTJHZXRCb29sZWFuU3RhdHVzAKQBE2ZtaTJHZXRTdHJpbmdTdGF0dXMApQEGZmZsdXNoALECCHNucHJpbnRmALMCEF9fZXJybm9fbG9jYXRpb24AlgIbY3JlYXRlRm1pMkNhbGxiYWNrRnVuY3Rpb25zAJQCCXN0YWNrU2F2ZQCDAwxzdGFja1Jlc3RvcmUAhAMKc3RhY2tBbGxvYwCFAwdyZWFsbG9jAOwCCHNldFRocmV3AOgCCl9fZGF0YV9lbmQDARJfX3NldF9zdGFja19saW1pdHMAhgMMZHluQ2FsbF9qaWppAIgDCZaBgIAAAQBBAQtmYmBjhgLvAcoBiwLpAe4B9gHrAfgBkwJkkQJtbmePAmGYAX3LAY4CjQL0AfUBzAHPAewBLzBXLEAqKx8gISMlJj1ZWj47PD9BMzQ2MjUxS0pJSEdGRURDQlFSTE1OT1BYU1RVIiRbqwGsAekCqgKqAa8B6gLEAcYBxwHIAesCvwLaArcC1QK7AtEC0gL9Av4CCpT0jIAA7AICAAsoAQR/IwAhAkEQIQMgAiADayEEQQAhBSAEIAA2AgwgBCABNgIIIAUPCygBBH8jACECQRAhAyACIANrIQRBACEFIAQgADYCDCAEIAE2AgggBQ8LKAEEfyMAIQJBECEDIAIgA2shBEEAIQUgBCAANgIMIAQgATYCCCAFDwsoAQR/IwAhAkEQIQMgAiADayEEQQAhBSAEIAA2AgwgBCABNgIIIAUPCygBBH8jACECQRAhAyACIANrIQRBACEFIAQgADYCDCAEIAE2AgggBQ8LKAEEfyMAIQJBECEDIAIgA2shBEEAIQUgBCAANgIMIAQgATYCCCAFDwsoAQR/IwAhAkEQIQMgAiADayEEQQAhBSAEIAA2AgwgBCABNgIIIAUPCygBBH8jACECQRAhAyACIANrIQRBACEFIAQgADYCDCAEIAE2AgggBQ8L+wEDGH8Bfgd8IwAhAkEQIQMgAiADayEEIAQhBSAEIAA2AgwgBCABNgIIQQAhBiAGKQK0GCEaIAUgGjcCACAEKAIMIQcgBygCBCEIIAgoAgAhCSAJKAIIIQogCisDACEbIAQoAgwhCyALKAIEIQwgDCgCACENIA0oAgghDiAOKwMIIRwgGyAcoiEdIAQoAgwhDyAPKAIMIRAgECgCmAIhESARKwMAIR4gBCgCDCESIBIoAgQhEyATKAIAIRQgFCgCCCEVIBUrAxAhHyAeIB+iISAgHSAgoSEhIAQoAgwhFiAWKAIEIRcgFygCACEYIBgoAgghGSAZICE5AygPC/sBAxh/AX4HfCMAIQJBECEDIAIgA2shBCAEIQUgBCAANgIMIAQgATYCCEEAIQYgBikCvBghGiAFIBo3AgAgBCgCDCEHIAcoAgQhCCAIKAIAIQkgCSgCCCEKIAorAwAhGyAEKAIMIQsgCygCDCEMIAwoApgCIQ0gDSsDCCEcIAQoAgwhDiAOKAIEIQ8gDygCACEQIBAoAgghESARKwMQIR0gHCAdoSEeIBsgHqIhHyAEKAIMIRIgEigCBCETIBMoAgAhFCAUKAIIIRUgFSsDCCEgIB8gIKEhISAEKAIMIRYgFigCBCEXIBcoAgAhGCAYKAIIIRkgGSAhOQMgDwvRAQMUfwF+BXwjACECQRAhAyACIANrIQQgBCEFIAQgADYCDCAEIAE2AghBACEGIAYpAsQYIRYgBSAWNwIAIAQoAgwhByAHKAIMIQggCCgCmAIhCSAJKwMQIRcgBCgCDCEKIAooAgQhCyALKAIAIQwgDCgCCCENIA0rAwghGCAEKAIMIQ4gDigCBCEPIA8oAgAhECAQKAIIIREgESsDACEZIBggGaEhGiAXIBqiIRsgBCgCDCESIBIoAgQhEyATKAIAIRQgFCgCCCEVIBUgGzkDGA8LmgIBHH8jACECQRAhAyACIANrIQQCQCAEIhwjAksgHCMDSXIEQBAcCyAcJAALQQAhBUEAIQZBASEHQQQhCCAEIAhqIQkgCSEKIAQgADYCDCAEIAE2AghBACELIAogCzYCACAEKAIMIQwgDCgCDCENIA0gBjoAkwEgBCgCDCEOIA4oAgwhDyAPIAc6AJIBIAQoAgwhECAEKAIIIREgECARECsaIAQoAgwhEiAEKAIIIRMgEiATECcgBCgCDCEUIAQoAgghFSAUIBUQKCAEKAIMIRYgBCgCCCEXIBYgFxApIAQoAgwhGCAYKAIMIRkgGSAGOgCSAUEQIRogBCAaaiEbAkAgGyIdIwJLIB0jA0lyBEAQHAsgHSQACyAFDwsoAQR/IwAhAkEQIQMgAiADayEEQQAhBSAEIAA2AgwgBCABNgIIIAUPC7cBARF/IwAhAkEQIQMgAiADayEEAkAgBCIRIwJLIBEjA0lyBEAQHAsgESQAC0EAIQUgBCAANgIMIAQgATYCCCAEKAIMIQYgBigCDCEHIAcoApwDIQhBASEJIAggCWohCiAHIAo2ApwDIAQoAgwhCyAEKAIIIQwgCyAMECsaIAQoAgwhDSAEKAIIIQ4gDSAOEC1BECEPIAQgD2ohEAJAIBAiEiMCSyASIwNJcgRAEBwLIBIkAAsgBQ8L1AEBE38jACECQRAhAyACIANrIQQCQCAEIhMjAksgEyMDSXIEQBAcCyATJAALQQkhBUEIIQZBByEHIAQgADYCDCAEIAE2AgggBCgCDCEIIAQoAgghCSAIIAkQJyAEKAIIIQogCiAHNgKQASAEKAIMIQsgBCgCCCEMIAsgDBAoIAQoAgghDSANIAY2ApABIAQoAgwhDiAEKAIIIQ8gDiAPECkgBCgCCCEQIBAgBTYCkAFBECERIAQgEWohEgJAIBIiFCMCSyAUIwNJcgRAEBwLIBQkAAsPC5cLAY0BfyMAIQJBECEDIAIgA2shBAJAIAQijQEjAksgjQEjA0lyBEAQHAsgjQEkAAtBACEFIAQgADYCDCAEIAE2AgggBCgCDCEGIAUhByAGIQggByAIRyEJQQEhCiAJIApxIQsCQCALDQAgBCgCCCEMQcwYIQ1BACEOIAwgDSAOEM8BAAtBACEPQQMhEEEGIRFBACESQa86IRNB3zEhFEGMKSEVQeAoIRYgFiEXQQMhGCAXIBhqIRlBgI4CIRogGiEbIAQoAgwhHCAEKAIIIR0gHSAcNgIwIAQoAgwhHiAeIBs2AhAgBCgCCCEfIB8gGRDjASAEKAIMISAgICgCCCEhICEgFTYCVCAEKAIMISIgIigCCCEjICMgFTYCWCAEKAIMISQgJCgCCCElICUgDzYCXCAEKAIMISYgJigCCCEnICcgFDYCYCAEKAIMISggKCgCCCEpICkgEzYCZCAEKAIMISogKigCCCErICsgDzYCaCAEKAIMISwgLCgCCCEtIC0gDzYCOCAEKAIMIS4gLigCCCEvIC8gEjoAcCAEKAIMITAgMCgCCCExIDEgEDYChAEgBCgCDCEyIDIoAgghMyAzIBE2AogBIAQoAgwhNCA0KAIIITUgNSAPNgKMASAEKAIMITYgNigCCCE3IDcgDzYCkAEgBCgCDCE4IDgoAgghOSA5IA82ApQBIAQoAgwhOiA6KAIIITsgOyAPNgKYASAEKAIMITwgPCgCCCE9ID0gEDYCnAEgBCgCDCE+ID4oAgghPyA/IA82AqABIAQoAgwhQCBAKAIIIUEgQSAPNgKkASAEKAIMIUIgQigCCCFDIEMgDzYCqAEgBCgCDCFEIEQoAgghRSBFIA82AqwBIAQoAgwhRiBGKAIIIUcgRyAPNgKwASAEKAIMIUggSCgCCCFJIEkgDzYC6AEgBCgCDCFKIEooAgghSyBLIA82AuwBIAQoAgwhTCBMKAIIIU0gTSAPNgLwASAEKAIMIU4gTigCCCFPIE8gDzYC9AEgBCgCDCFQIFAoAgghUSBRIA82ArQBIAQoAgwhUiBSKAIIIVMgUyAPNgJ4IAQoAgwhVCBUKAIIIVUgVSAPNgK4ASAEKAIMIVYgVigCCCFXIFcgDzYCvAEgBCgCDCFYIFgoAgghWSBZIA82AsgBIAQoAgwhWiBaKAIIIVtBNCFcIFsgXGohXSAEKAIMIV4gXigCCCFfIF8oAmwhYCAEIGA2AgBBi8IAIWEgXSBhIAQQwwEaQQAhYkEFIWNBCiFkIAQoAgwhZSBlKAIIIWYgZiBiNgI8IAQoAgwhZyBnKAIIIWggaCBiNgJAIAQoAgwhaSBpKAIIIWogaiBiNgJIIAQoAgwhayBrKAIIIWwgbCBkNgJEIAQoAgwhbSBtKAIIIW4gbiBiNgLMASAEKAIMIW8gbygCCCFwIHAgYjYC0AEgBCgCDCFxIHEoAgghciByIGI2AtQBIAQoAgwhcyBzKAIIIXQgdCBiNgLYASAEKAIMIXUgdSgCCCF2IHYgYzYC+AEgBCgCDCF3IHcoAggheCB4IGI2AuABIAQoAgwheSB5KAIIIXogeiBiNgLkASAEKAIMIXsgeygCCCF8IHwgYjYCwAEgBCgCDCF9IH0oAgghfiB+IGI2AoABIAQoAgwhfyB/KAIIIYABIIABIGI2AsQBIAQoAgwhgQEggQEoAgghggEgggEgYjYC/AEgBCgCDCGDASCDASgCCCGEASCEASBiNgKAAiAEKAIMIYUBIIUBKAIIIYYBIIYBIGI2AoQCIAQoAgwhhwEghwEoAgghiAEgiAEgYjYCiAIgBCgCDCGJASCJASgCCCGKASCKASBiNgJ0QRAhiwEgBCCLAWohjAECQCCMASKOASMCSyCOASMDSXIEQBAcCyCOASQACw8L0AEBFn8jACECQRAhAyACIANrIQQCQCAEIhYjAksgFiMDSXIEQBAcCyAWJAALQQAhBSAEIAA2AgwgBCABNgIIIAQoAgwhBiAGKAIMIQcgBygCqAEhCCAIIQkgBSEKIAkgCkchC0EBIQwgCyAMcSENAkAgDUUNAEEAIQ4gBCgCDCEPIA8oAgwhECAQKAKoASERIBEQ6gIgBCgCDCESIBIoAgwhEyATIA42AqgBC0EQIRQgBCAUaiEVAkAgFSIXIwJLIBcjA0lyBEAQHAsgFyQACw8LKQEDfyMAIQNBECEEIAMgBGshBSAFIAA2AgwgBSABNgIIIAUgAjYCBA8LLQEEfyMAIQJBECEDIAIgA2shBEEAIQUgBCAANgIMIAQgATYCCCAEIAU2AgQPCzsBBn8jACECQRAhAyACIANrIQRBgQghBUEAIQYgBCAANgIMIAQgATYCCCAEKAIIIQcgByAGNgIAIAUPC1EBCX8jACECQRAhAyACIANrIQRBACEFIAQgADYCDCAEIAE2AgggBCgCDCEGIAYoAgwhByAHKAKkAyEIQQEhCSAIIAlqIQogByAKNgKkAyAFDwtYAQl/IwAhA0EQIQQgAyAEayEFQQAhBiAFIAA2AgwgBSABNgIIIAUgAjYCBCAFKAIMIQcgBygCDCEIIAgoAqgDIQlBASEKIAkgCmohCyAIIAs2AqgDIAYPCyIBBH8jACEBQRAhAiABIAJrIQNBgQghBCADIAA2AgwgBA8LQwEFfyMAIQNBECEEIAMgBGshBSAFIAA2AgwgBSABNgIIIAUgAjYCBCAFKAIEIQYCQAJAIAZFDQAMAQsLQQAhByAHDwt9Awx/AX4BfCMAIQJBECEDIAIgA2shBCAEIQUgBCAANgIMIAQgATYCCEEAIQYgBikCqEohDiAFIA43AgAgBCgCDCEHIAcoAgghCCAIKAIAIQkgCSsDsAEhDyAEKAIMIQogCigCBCELIAsoAgAhDCAMKAIIIQ0gDSAPOQMIDwt8Awx/AX4BfCMAIQJBECEDIAIgA2shBCAEIQUgBCAANgIMIAQgATYCCEEAIQYgBikCsEohDiAFIA43AgAgBCgCDCEHIAcoAgghCCAIKAIAIQkgCSsDUCEPIAQoAgwhCiAKKAIEIQsgCygCACEMIAwoAgghDSANIA85AwAPC30DDH8BfgF8IwAhAkEQIQMgAiADayEEIAQhBSAEIAA2AgwgBCABNgIIQQAhBiAGKQK4SiEOIAUgDjcCACAEKAIMIQcgBygCCCEIIAgoAgAhCSAJKwOQAiEPIAQoAgwhCiAKKAIEIQsgCygCACEMIAwoAgghDSANIA85AxAPC9cBARN/IwAhAkEQIQMgAiADayEEAkAgBCITIwJLIBMjA0lyBEAQHAsgEyQACyAEIAA2AgwgBCABNgIIIAQoAgwhBSAEKAIIIQYgBSAGEDcgBCgCDCEHIAQoAgghCCAHIAgQOCAEKAIMIQkgBCgCCCEKIAkgChApIAQoAgwhCyAEKAIIIQwgCyAMEDkgBCgCDCENIAQoAgghDiANIA4QJyAEKAIMIQ8gBCgCCCEQIA8gEBAoQRAhESAEIBFqIRICQCASIhQjAksgFCMDSXIEQBAcCyAUJAALDwutAQEQfyMAIQJBECEDIAIgA2shBAJAIAQiECMCSyAQIwNJcgRAEBwLIBAkAAtBACEFQQAhBkEBIQcgBCAANgIMIAQgATYCCCAEKAIMIQggCCgCDCEJIAkgBzoAkgEgBCgCDCEKIAQoAgghCyAKIAsQOiAEKAIMIQwgDCgCDCENIA0gBjoAkgFBECEOIAQgDmohDwJAIA8iESMCSyARIwNJcgRAEBwLIBEkAAsgBQ8LPQIEfwF8IwAhAkEgIQMgAiADayEEQQAhBSAFtyEGIAQgADYCHCAEIAE2AhggBCAFNgIUIAQgBjkDCCAFDwtBAgZ/AX4jACECQRAhAyACIANrIQRBACEFIAQhBiAEIAA2AgwgBCABNgIIQQAhByAHKQLASiEIIAYgCDcCACAFDwuJAwEsfyMAIQJBECEDIAIgA2shBAJAIAQiLCMCSyAsIwNJcgRAEBwLICwkAAsgBCAANgIMIAQgATYCCEGHCCEFQQAhBkEBIQdBDSEIIAggByAFIAYQygFBACEJIAkoAtScAiEKAkAgCkUNAEENIQtBACEMIAwoApyTAiENIAsgDREAAAtB6BghDkEAIQ9BASEQQQ0hESARIBAgDiAPEMoBQQAhEiASKALUnAIhEwJAIBNFDQBBDSEUQQAhFSAVKAKckwIhFiAUIBYRAAALQZwpIRdBACEYQQEhGUENIRogGiAZIBcgGBDKAUEAIRsgGygC1JwCIRwCQCAcRQ0AQQ0hHUEAIR4gHigCnJMCIR8gHSAfEQAAC0HtMSEgQQAhIUEBISJBDSEjICMgIiAgICEQygFBACEkICQoAtScAiElAkAgJUUNAEENISZBACEnICcoApyTAiEoICYgKBEAAAtBACEpQRAhKiAEICpqISsCQCArIi0jAksgLSMDSXIEQBAcCyAtJAALICkPCygBBH8jACECQRAhAyACIANrIQRBACEFIAQgADYCDCAEIAE2AgggBQ8LogEBD38jACECQRAhAyACIANrIQQCQCAEIg8jAksgDyMDSXIEQBAcCyAPJAALQQAhBSAEIAA2AgwgBCABNgIIIAQoAgwhBiAGKAIMIQcgBygCsAMhCEEBIQkgCCAJaiEKIAcgCjYCsAMgBCgCDCELIAQoAgghDCALIAwQVkEQIQ0gBCANaiEOAkAgDiIQIwJLIBAjA0lyBEAQHAsgECQACyAFDwsoAQR/IwAhAkEQIQMgAiADayEEQQAhBSAEIAA2AgwgBCABNgIIIAUPCzYBBH8jACEEQRAhBSAEIAVrIQZBACEHIAYgADYCDCAGIAE2AgggBiACNgIEIAYgAzYCACAHDws2AQR/IwAhBEEQIQUgBCAFayEGQQAhByAGIAA2AgwgBiABNgIIIAYgAjYCBCAGIAM2AgAgBw8LNgEEfyMAIQRBECEFIAQgBWshBkEAIQcgBiAANgIMIAYgATYCCCAGIAI2AgQgBiADNgIAIAcPCzYBBH8jACEEQRAhBSAEIAVrIQZBACEHIAYgADYCDCAGIAE2AgggBiACNgIEIAYgAzYCACAHDwtPAQZ/IwAhBEEgIQUgBCAFayEGQQAhB0EEIQggBiAANgIcIAYgATYCGCAGIAI2AhQgBiADNgIQIAYoAhwhCSAGIAk2AgwgBiAINgIIIAcPCy8BBH8jACEDQRAhBCADIARrIQVBASEGIAUgADYCDCAFIAE2AgggBSACNgIEIAYPCy8BBH8jACEDQRAhBCADIARrIQVBASEGIAUgADYCDCAFIAE2AgggBSACNgIEIAYPCy8BBH8jACEDQRAhBCADIARrIQVBASEGIAUgADYCDCAFIAE2AgggBSACNgIEIAYPCy8BBH8jACEDQRAhBCADIARrIQVBASEGIAUgADYCDCAFIAE2AgggBSACNgIEIAYPC/oIAnh/DH4jACEDQdAAIQQgAyAEayEFAkAgBSJ5IwJLIHkjA0lyBEAQHAsgeSQAC0ECIQZBMCEHIAUgB2ohCCAIIQlBACEKQQMhC0EMIQxBCCENQSAhDkEQIQ9BGCEQQRAhESAFIBFqIRIgEiETIAUgADYCTCAFIAE2AkggBSACNgJEIAUoAkwhFCAFIBQ2AkBBCCEVIAkgFWohFkEAIRcgFykD2EoheyAWIHs3AwAgFykD0EohfCAJIHw3AwBBGCEYIBMgGGohGUEAIRogGikD+EohfSAZIH03AwBBECEbIBMgG2ohHCAaKQPwSiF+IBwgfjcDAEEIIR0gEyAdaiEeIBopA+hKIX8gHiB/NwMAIBopA+BKIYABIBMggAE3AwAgBSAKNgIMIAUoAkQhHyAfIAs2AgAgBSgCRCEgICAgCzYCBCAFKAJEISEgISAKNgIIIAsgDRDrAiEiIAUoAkQhIyAjICI2AhAgCyANEOsCISQgBSgCRCElICUgJDYCGCAKIA0Q6wIhJiAFKAJEIScgJyAmNgIUIBAQ6QIhKCAFKAJEISkgKSAoNgIMIA8Q6QIhKiAFKAJEISsgKygCDCEsICwgKjYCACAOEOkCIS0gBSgCRCEuIC4oAgwhLyAvIC02AgQgBSgCRCEwIDAoAgwhMSAxIA02AhAgDBDpAiEyIAUoAkQhMyAzKAIMITQgNCAyNgIMIAUoAkQhNSA1KAIMITYgNiALNgIUIAUoAkQhNyA3IAo2AhwgBSgCRCE4IDgoAgwhOSA5KAIAITogCSkCACGBASA6IIEBNwIAQQghOyA6IDtqITwgCSA7aiE9ID0pAgAhggEgPCCCATcCACAFIAY2AgwCQANAQQQhPiAFKAIMIT8gPyFAID4hQSBAIEFIIUJBASFDIEIgQ3EhRCBERQ0BIAUoAkQhRSBFKAIMIUYgRigCACFHIAUoAgwhSEEBIUkgSCBJayFKQQIhSyBKIEt0IUwgRyBMaiFNIE0oAgAhTiAFKAJEIU8gTygCDCFQIFAoAgAhUSAFKAIMIVJBAiFTIFIgU3QhVCBRIFRqIVUgVSgCACFWIFYgTmohVyBVIFc2AgAgBSgCDCFYQQEhWSBYIFlqIVogBSBaNgIMDAALAAtBACFbQQMhXEECIV1BASFeQRAhXyAFIF9qIWAgYCFhIAUoAkQhYiBiKAIMIWMgYygCBCFkIGEpAgAhgwEgZCCDATcCAEEYIWUgZCBlaiFmIGEgZWohZyBnKQIAIYQBIGYghAE3AgBBECFoIGQgaGohaSBhIGhqIWogaikCACGFASBpIIUBNwIAQQghayBkIGtqIWwgYSBraiFtIG0pAgAhhgEgbCCGATcCACAFKAJEIW4gbigCDCFvIG8oAgwhcCBwIF42AgggBSgCRCFxIHEoAgwhciByKAIMIXMgcyBdNgIEIAUoAkQhdCB0KAIMIXUgdSgCDCF2IHYgXDYCAEHQACF3IAUgd2oheAJAIHgieiMCSyB6IwNJcgRAEBwLIHokAAsgWw8LVAEGfyMAIQNBECEEIAMgBGshBQJAIAUiCCMCSyAIIwNJcgRAEBwLIAgkAAsgBSAANgIMIAUgATYCCCAFIAI2AgRBmwghBkEAIQcgByAGIAcQzwEAC1sBBn8jACEEQRAhBSAEIAVrIQYCQCAGIgkjAksgCSMDSXIEQBAcCyAJJAALIAYgADYCDCAGIAE2AgggBiACNgIEIAYgAzYCAEGbCCEHQQAhCCAIIAcgCBDPAQALdwEGfyMAIQhBICEJIAggCWshCgJAIAoiDSMCSyANIwNJcgRAEBwLIA0kAAsgCiAANgIcIAogATYCGCAKIAI2AhQgCiADNgIQIAogBDYCDCAKIAU2AgggCiAGNgIEIAogBzYCAEGbCCELQQAhDCAMIAsgDBDPAQALTQEGfyMAIQJBECEDIAIgA2shBAJAIAQiByMCSyAHIwNJcgRAEBwLIAckAAsgBCAANgIMIAQgAToAC0GbCCEFQQAhBiAGIAUgBhDPAQALVAEGfyMAIQNBECEEIAMgBGshBQJAIAUiCCMCSyAIIwNJcgRAEBwLIAgkAAsgBSAANgIMIAUgATYCCCAFIAI2AgRBmwghBkEAIQcgByAGIAcQzwEACwwBAX9BlAkhACAADwsMAQF/QfwYIQAgAA8LhgEBDH8jACECQRAhAyACIANrIQQCQCAEIgwjAksgDCMDSXIEQBAcCyAMJAALQQAhBUE4IQYgBCAANgIMIAQgATYCCCAFIAYQ6wIhByAEKAIMIQggCCgCDCEJIAkgBzYCwAFBECEKIAQgCmohCwJAIAsiDSMCSyANIwNJcgRAEBwLIA0kAAsPC2IBB38jACEDQSAhBCADIARrIQUCQCAFIgkjAksgCSMDSXIEQBAcCyAJJAALIAUgADYCHCAFIAE2AhggBSACNgIUIAUoAhQhBiAFIAY2AgBB9g0hB0EAIQggCCAHIAUQzwEAC2kBB38jACEEQSAhBSAEIAVrIQYCQCAGIgojAksgCiMDSXIEQBAcCyAKJAALIAYgADYCHCAGIAE2AhggBiACNgIUIAYgAzYCECAGKAIUIQcgBiAHNgIAQbgfIQhBACEJIAkgCCAGEM8BAAsiAQN/IwAhAkEQIQMgAiADayEEIAQgADYCDCAEIAE2AggPCygBBH8jACECQRAhAyACIANrIQRBfyEFIAQgADYCDCAEIAE2AgggBQ8LKAEEfyMAIQJBECEDIAIgA2shBEF/IQUgBCAANgIMIAQgATYCCCAFDwtBAgZ/AX4jACECQRAhAyACIANrIQRBACEFIAQhBiAEIAA2AgwgBCABNgIIQQAhByAHKQKASyEIIAYgCDcCACAFDwsoAQR/IwAhAkEQIQMgAiADayEEQQAhBSAEIAA2AgwgBCABNgIIIAUPC5IhAt8Cfwp8IwAhAkEQIQMgAiADayEERAAAAAAAACRAIeECRAAAAAAAAPA/IeICQQAhBUEBIQZE////////738h4wJE////////7/8h5AJBqMIAIQdBACEIQRohCUEDIQpBASELQYjLACEMQe/uACENQfAHIQ5EPQrXo3D9WEAh5QJBBCEPQcDqACEQQe8HIRFEVlVVVVVVBUAh5gJBBSESQdjmACETQe4HIRQgCLch5wJBHiEVQQIhFkGm4wAhF0HtByEYQezeACEZQewHIRpB49kAIRtB6wchHEGo1QAhHUHqByEeQcXQACEfQekHISBEAAAAAAAA8L8h6AJB1johIUHoByEiQYsyISNBtCkhJEHpHyElQaEOISZEje21oPfGsD4h6QJE/Knx0k1iYD8h6gIgBCAANgIMIAQgATYCCCAEKAIIIScgJyDnAjkDACAEKAIIISggKCDiAjkDCCAEKAIIISkgKSDqAjkDGCAEKAIIISogKiDpAjkDKCAEKAIIISsgKyAmNgIwIAQoAgghLCAsICU2AjQgBCgCCCEtIC0gJDYCOCAEKAIIIS4gLiAjNgKAAyAEKAIMIS8gLygCACEwIDAgIjYCACAEKAIMITEgMSgCACEyIDIgITYCCCAEKAIMITMgMygCACE0IDQgBzYCDCAEKAIMITUgNSgCACE2IDYgDDYCECAEKAIMITcgNygCACE4IDggFjYCFCAEKAIMITkgOSgCACE6IDogCzYCGCAEKAIMITsgOygCACE8IDwgFjYCHCAEKAIMIT0gPSgCACE+ID4gFTYCICAEKAIMIT8gPygCACFAIEAgCDYCJCAEKAIMIUEgQSgCACFCIEIgBzYCKCAEKAIMIUMgQygCACFEIEQgBzYCLCAEKAIMIUUgRSgCACFGIEYg5AI5AzAgBCgCDCFHIEcoAgAhSCBIIOMCOQM4IAQoAgwhSSBJKAIAIUogSiAGOgBAIAQoAgwhSyBLKAIAIUwgTCAFOgBBIAQoAgwhTSBNKAIAIU4gTiDiAjkDSCAEKAIMIU8gTygCACFQIFAg6AI5A1AgBCgCDCFRIFEoAgAhUiBSICA2AmAgBCgCDCFTIFMoAgAhVCBUIB82AmggBCgCDCFVIFUoAgAhViBWIAc2AmwgBCgCDCFXIFcoAgAhWCBYIAw2AnAgBCgCDCFZIFkoAgAhWiBaIBY2AnQgBCgCDCFbIFsoAgAhXCBcIAs2AnggBCgCDCFdIF0oAgAhXiBeIBY2AnwgBCgCDCFfIF8oAgAhYCBgIBU2AoABIAQoAgwhYSBhKAIAIWIgYiAINgKEASAEKAIMIWMgYygCACFkIGQgBzYCiAEgBCgCDCFlIGUoAgAhZiBmIAc2AowBIAQoAgwhZyBnKAIAIWggaCDkAjkDkAEgBCgCDCFpIGkoAgAhaiBqIOMCOQOYASAEKAIMIWsgaygCACFsIGwgBjoAoAEgBCgCDCFtIG0oAgAhbiBuIAU6AKEBIAQoAgwhbyBvKAIAIXAgcCDiAjkDqAEgBCgCDCFxIHEoAgAhciByIOICOQOwASAEKAIMIXMgcygCACF0IHQgHjYCwAEgBCgCDCF1IHUoAgAhdiB2IB02AsgBIAQoAgwhdyB3KAIAIXggeCAHNgLMASAEKAIMIXkgeSgCACF6IHogDDYC0AEgBCgCDCF7IHsoAgAhfCB8IBY2AtQBIAQoAgwhfSB9KAIAIX4gfiALNgLYASAEKAIMIX8gfygCACGAASCAASAWNgLcASAEKAIMIYEBIIEBKAIAIYIBIIIBIBU2AuABIAQoAgwhgwEggwEoAgAhhAEghAEgCDYC5AEgBCgCDCGFASCFASgCACGGASCGASAHNgLoASAEKAIMIYcBIIcBKAIAIYgBIIgBIAc2AuwBIAQoAgwhiQEgiQEoAgAhigEgigEg5AI5A/ABIAQoAgwhiwEgiwEoAgAhjAEgjAEg4wI5A/gBIAQoAgwhjQEgjQEoAgAhjgEgjgEgBjoAgAIgBCgCDCGPASCPASgCACGQASCQASAFOgCBAiAEKAIMIZEBIJEBKAIAIZIBIJIBIOICOQOIAiAEKAIMIZMBIJMBKAIAIZQBIJQBIOcCOQOQAiAEKAIMIZUBIJUBKAIAIZYBIJYBIBw2AqACIAQoAgwhlwEglwEoAgAhmAEgmAEgGzYCqAIgBCgCDCGZASCZASgCACGaASCaASAHNgKsAiAEKAIMIZsBIJsBKAIAIZwBIJwBIAw2ArACIAQoAgwhnQEgnQEoAgAhngEgngEgFjYCtAIgBCgCDCGfASCfASgCACGgASCgASALNgK4AiAEKAIMIaEBIKEBKAIAIaIBIKIBIBY2ArwCIAQoAgwhowEgowEoAgAhpAEgpAEgFTYCwAIgBCgCDCGlASClASgCACGmASCmASAINgLEAiAEKAIMIacBIKcBKAIAIagBIKgBIAc2AsgCIAQoAgwhqQEgqQEoAgAhqgEgqgEgBzYCzAIgBCgCDCGrASCrASgCACGsASCsASDkAjkD0AIgBCgCDCGtASCtASgCACGuASCuASDjAjkD2AIgBCgCDCGvASCvASgCACGwASCwASAFOgDgAiAEKAIMIbEBILEBKAIAIbIBILIBIAU6AOECIAQoAgwhswEgswEoAgAhtAEgtAEg4gI5A+gCIAQoAgwhtQEgtQEoAgAhtgEgtgEg5wI5A/ACIAQoAgwhtwEgtwEoAgAhuAEguAEgGjYCgAMgBCgCDCG5ASC5ASgCACG6ASC6ASAZNgKIAyAEKAIMIbsBILsBKAIAIbwBILwBIAc2AowDIAQoAgwhvQEgvQEoAgAhvgEgvgEgDDYCkAMgBCgCDCG/ASC/ASgCACHAASDAASAWNgKUAyAEKAIMIcEBIMEBKAIAIcIBIMIBIAs2ApgDIAQoAgwhwwEgwwEoAgAhxAEgxAEgFjYCnAMgBCgCDCHFASDFASgCACHGASDGASAVNgKgAyAEKAIMIccBIMcBKAIAIcgBIMgBIAg2AqQDIAQoAgwhyQEgyQEoAgAhygEgygEgBzYCqAMgBCgCDCHLASDLASgCACHMASDMASAHNgKsAyAEKAIMIc0BIM0BKAIAIc4BIM4BIOQCOQOwAyAEKAIMIc8BIM8BKAIAIdABINABIOMCOQO4AyAEKAIMIdEBINEBKAIAIdIBINIBIAU6AMADIAQoAgwh0wEg0wEoAgAh1AEg1AEgBToAwQMgBCgCDCHVASDVASgCACHWASDWASDiAjkDyAMgBCgCDCHXASDXASgCACHYASDYASDnAjkD0AMgBCgCDCHZASDZASgCACHaASDaASAYNgLgAyAEKAIMIdsBINsBKAIAIdwBINwBIBc2AugDIAQoAgwh3QEg3QEoAgAh3gEg3gEgBzYC7AMgBCgCDCHfASDfASgCACHgASDgASAMNgLwAyAEKAIMIeEBIOEBKAIAIeIBIOIBIBY2AvQDIAQoAgwh4wEg4wEoAgAh5AEg5AEgCzYC+AMgBCgCDCHlASDlASgCACHmASDmASAWNgL8AyAEKAIMIecBIOcBKAIAIegBIOgBIBU2AoAEIAQoAgwh6QEg6QEoAgAh6gEg6gEgCDYChAQgBCgCDCHrASDrASgCACHsASDsASAHNgKIBCAEKAIMIe0BIO0BKAIAIe4BIO4BIAc2AowEIAQoAgwh7wEg7wEoAgAh8AEg8AEg5AI5A5AEIAQoAgwh8QEg8QEoAgAh8gEg8gEg4wI5A5gEIAQoAgwh8wEg8wEoAgAh9AEg9AEgBToAoAQgBCgCDCH1ASD1ASgCACH2ASD2ASAFOgChBCAEKAIMIfcBIPcBKAIAIfgBIPgBIOICOQOoBCAEKAIMIfkBIPkBKAIAIfoBIPoBIOcCOQOwBCAEKAIMIfsBIPsBKAIQIfwBIPwBIBQ2AgAgBCgCDCH9ASD9ASgCECH+ASD+ASATNgIIIAQoAgwh/wEg/wEoAhAhgAIggAIgBzYCDCAEKAIMIYECIIECKAIQIYICIIICIAw2AhAgBCgCDCGDAiCDAigCECGEAiCEAiASNgIUIAQoAgwhhQIghQIoAhAhhgIghgIgCzYCGCAEKAIMIYcCIIcCKAIQIYgCIIgCIBI2AhwgBCgCDCGJAiCJAigCECGKAiCKAiAJNgIgIAQoAgwhiwIgiwIoAhAhjAIgjAIgCDYCJCAEKAIMIY0CII0CKAIQIY4CII4CIAc2AiggBCgCDCGPAiCPAigCECGQAiCQAiAHNgIsIAQoAgwhkQIgkQIoAhAhkgIgkgIg5AI5AzAgBCgCDCGTAiCTAigCECGUAiCUAiDjAjkDOCAEKAIMIZUCIJUCKAIQIZYCIJYCIAY6AEAgBCgCDCGXAiCXAigCECGYAiCYAiAFOgBBIAQoAgwhmQIgmQIoAhAhmgIgmgIg4gI5A0ggBCgCDCGbAiCbAigCECGcAiCcAiDmAjkDUCAEKAIMIZ0CIJ0CKAIQIZ4CIJ4CIBE2AmAgBCgCDCGfAiCfAigCECGgAiCgAiAQNgJoIAQoAgwhoQIgoQIoAhAhogIgogIgBzYCbCAEKAIMIaMCIKMCKAIQIaQCIKQCIAw2AnAgBCgCDCGlAiClAigCECGmAiCmAiAPNgJ0IAQoAgwhpwIgpwIoAhAhqAIgqAIgCzYCeCAEKAIMIakCIKkCKAIQIaoCIKoCIA82AnwgBCgCDCGrAiCrAigCECGsAiCsAiAJNgKAASAEKAIMIa0CIK0CKAIQIa4CIK4CIAg2AoQBIAQoAgwhrwIgrwIoAhAhsAIgsAIgBzYCiAEgBCgCDCGxAiCxAigCECGyAiCyAiAHNgKMASAEKAIMIbMCILMCKAIQIbQCILQCIOQCOQOQASAEKAIMIbUCILUCKAIQIbYCILYCIOMCOQOYASAEKAIMIbcCILcCKAIQIbgCILgCIAY6AKABIAQoAgwhuQIguQIoAhAhugIgugIgBToAoQEgBCgCDCG7AiC7AigCECG8AiC8AiDiAjkDqAEgBCgCDCG9AiC9AigCECG+AiC+AiDlAjkDsAEgBCgCDCG/AiC/AigCECHAAiDAAiAONgLAASAEKAIMIcECIMECKAIQIcICIMICIA02AsgBIAQoAgwhwwIgwwIoAhAhxAIgxAIgBzYCzAEgBCgCDCHFAiDFAigCECHGAiDGAiAMNgLQASAEKAIMIccCIMcCKAIQIcgCIMgCIAo2AtQBIAQoAgwhyQIgyQIoAhAhygIgygIgCzYC2AEgBCgCDCHLAiDLAigCECHMAiDMAiAKNgLcASAEKAIMIc0CIM0CKAIQIc4CIM4CIAk2AuABIAQoAgwhzwIgzwIoAhAh0AIg0AIgCDYC5AEgBCgCDCHRAiDRAigCECHSAiDSAiAHNgLoASAEKAIMIdMCINMCKAIQIdQCINQCIAc2AuwBIAQoAgwh1QIg1QIoAhAh1gIg1gIg5AI5A/ABIAQoAgwh1wIg1wIoAhAh2AIg2AIg4wI5A/gBIAQoAgwh2QIg2QIoAhAh2gIg2gIgBjoAgAIgBCgCDCHbAiDbAigCECHcAiDcAiAFOgCBAiAEKAIMId0CIN0CKAIQId4CIN4CIOICOQOIAiAEKAIMId8CIN8CKAIQIeACIOACIOECOQOQAg8LiwEBCn8jACEFQSAhBiAFIAZrIQcCQCAHIg0jAksgDSMDSXIEQBAcCyANJAALIAcgADYCHCAHIAE2AhggByACNgIUIAcgAzYCECAHIAQ2AgxBpw4hCEEAIQkgCCAJEP8CGkF/IQpBICELIAcgC2ohDAJAIAwiDiMCSyAOIwNJcgRAEBwLIA4kAAsgCg8LbwEKfyMAIQFBECECIAEgAmshAwJAIAMiCSMCSyAJIwNJcgRAEBwLIAkkAAsgAyAANgIMQacOIQRBACEFIAQgBRD/AhpBfyEGQRAhByADIAdqIQgCQCAIIgojAksgCiMDSXIEQBAcCyAKJAALIAYPC5IBAQp/IwAhBkEgIQcgBiAHayEIAkAgCCIOIwJLIA4jA0lyBEAQHAsgDiQACyAIIAA2AhwgCCABNgIYIAggAjYCFCAIIAM5AwggCCAENgIEIAggBTYCAEGnDiEJQQAhCiAJIAoQ/wIaQX8hC0EgIQwgCCAMaiENAkAgDSIPIwJLIA8jA0lyBEAQHAsgDyQACyALDwuKAgEZfyMAIQFBECECIAEgAmshAyADIAA2AgggAygCCCEEIAQoAkQhBUEBIQYgBSAGRiEHAkACQAJAAkACQAJAAkACQCAHDQBBAiEIIAUgCEYhCSAJDQFBBCEKIAUgCkYhCyALDQNBCCEMIAUgDEYhDSANDQJBICEOIAUgDkYhDyAPDQRBwAAhECAFIBBGIREgEQ0FDAYLQe0fIRIgAyASNgIMDAYLQbcpIRMgAyATNgIMDAULQawyIRQgAyAUNgIMDAQLQdg6IRUgAyAVNgIMDAMLQanCACEWIAMgFjYCDAwCC0GpywAhFyADIBc2AgwMAQtBx9AAIRggAyAYNgIMCyADKAIMIRkgGQ8LvwEBF38jACECQRAhAyACIANrIQRBCyEFIAQgADYCCCAEIAE2AgQgBCgCBCEGIAYhByAFIQggByAISCEJQQEhCiAJIApxIQsCQAJAIAtFDQAgBCgCCCEMQRQhDSAMIA1qIQ4gBCgCBCEPQQIhECAPIBB0IREgDiARaiESIBIoAgAhEwJAIBMNACAEKAIIIRQgFCgCOCEVIBVFDQELQQEhFiAEIBY2AgwMAQtBACEXIAQgFzYCDAsgBCgCDCEYIBgPC+BbAsYIfxR8IwAhAkGwAiEDIAIgA2shBAJAIAQixggjAksgxggjA0lyBEAQHAsgxggkAAtBACEFQQEhBkGq1QAhB0Hq2QAhCEEoIQkgCRDpAiEKIAogBTYCAEEEIQsgBSALaiEMIAQgADYCqAIgBCABNgKkAiAEIAU2ApwCIAQoAqgCIQ0gBCANNgKYAiAEKAKYAiEOIA4oAnAhDyAEIA82ApQCIAQoApgCIRAgBCgCpAIhEUEAIRIgEiAFNgLcqAIgBiAQIAcgCCAREAEhE0EAIRQgFCgC3KgCIRVBACEWIBYgBTYC3KgCIBUhFyAFIRggFyAYRyEZQQAhGiAaKALgqAIhGyAbIRwgBSEdIBwgHUchHiAZIB5xIR9BASEgIB8gIHEhIQJAAkACQAJAICFFDQAgFSgCACEiICIgCiAMEOcCISMgI0UNAQwCC0F/ISQgJCElDAILIBUgGxAAAAsgGxACICMhJQsgJSEmEAMhJ0EBISggJiAoRiEpIAwhKiAKISsgJyEsAkACQCApDQACQCATRQ0AQQMhLSAEIC02AqwCIAohLgwCC0EAIS9BAiEwQQohMSAEKAKYAiEyQQAhMyAzIC82AtyoAiAwIDIgMRAEITRBACE1IDUoAtyoAiE2QQAhNyA3IC82AtyoAiA2ITggLyE5IDggOUchOkEAITsgOygC4KgCITwgPCE9IC8hPiA9ID5HIT8gOiA/cSFAQQEhQSBAIEFxIUICQAJAAkACQCBCRQ0AIDYoAgAhQyBDIAogDBDnAiFEIERFDQEMAgtBfyFFIEUhRgwCCyA2IDwQAAALIDwQAiBEIUYLIEYhRxADIUhBASFJIEcgSUYhSiAMISogCiErIEghLCBKDQACQCA0RQ0AQQAhSyAEKAKYAiFMIEwoAgwhTSBNKAIAIU4gBCgCmAIhTyBPKAIMIVAgUCgCECFRIAQoApgCIVIgUigCACFTQQAhVCBUKALYkAIhVSAEKAKkAiFWIFYrAxghyAhBACFXIFcgSzYC3KgCIAQgyAg5A0BB894AIVhBACFZQcAAIVogBCBaaiFbIE4gUSBTIFkgVSBYIFsQBUEAIVxBACFdIF0oAtyoAiFeQQAhXyBfIFw2AtyoAiBeIWAgXCFhIGAgYUchYkEAIWMgYygC4KgCIWQgZCFlIFwhZiBlIGZHIWcgYiBncSFoQQEhaSBoIGlxIWoCQAJAAkACQCBqRQ0AIF4oAgAhayBrIAogDBDnAiFsIGxFDQEMAgtBfyFtIG0hbgwCCyBeIGQQAAALIGQQAiBsIW4LIG4hbxADIXBBASFxIG8gcUYhciAMISogCiErIHAhLCByDQELQQAhc0EDIXQgBCgCmAIhdUEAIXYgdiBzNgLcqAIgdCB1EAZBACF3IHcoAtyoAiF4QQAheSB5IHM2AtyoAiB4IXogcyF7IHoge0chfEEAIX0gfSgC4KgCIX4gfiF/IHMhgAEgfyCAAUchgQEgfCCBAXEhggFBASGDASCCASCDAXEhhAECQAJAAkACQCCEAUUNACB4KAIAIYUBIIUBIAogDBDnAiGGASCGAUUNAQwCC0F/IYcBIIcBIYgBDAILIHggfhAAAAsgfhACIIYBIYgBCyCIASGJARADIYoBQQEhiwEgiQEgiwFGIYwBIAwhKiAKISsgigEhLCCMAQ0AQQAhjQFBASGOAUHQACGPASAEII8BaiGQASCQASGRASAEKAKUAiGSASCSASgCYCGTASAEIJMBNgJMIAQoApQCIZQBIJQBIJEBNgJgIJEBII4BIAogDBDmAiGVARADIZYBIJYBISoglQEhKyCNASEsCwJAA0AgLCGXASArIZgBICohmQEgmQEhmgECQCCXAQ0AQQAhmwFBBCGcAUEBIZ0BQQEhngEgBCgCmAIhnwEgnwEoAmwhoAEgBCgCmAIhoQEgoQEoAnAhogFBACGjASCjASCbATYC3KgCQRghpAEgnQEgpAF0IaUBIKUBIKQBdSGmASCcASCgASCiASCmASCeARABIacBQQAhqAEgqAEoAtyoAiGpAUEAIaoBIKoBIJsBNgLcqAIgqQEhqwEgmwEhrAEgqwEgrAFHIa0BQQAhrgEgrgEoAuCoAiGvASCvASGwASCbASGxASCwASCxAUchsgEgrQEgsgFxIbMBQQEhtAEgswEgtAFxIbUBAkACQAJAAkAgtQFFDQAgqQEoAgAhtgEgtgEgmAEgmQEQ5wIhtwEgtwFFDQEMAgtBfyG4ASC4ASG5AQwCCyCpASCvARAAAAsgrwEQAiC3ASG5AQsguQEhugEQAyG7AUEBIbwBILoBILwBRiG9ASCZASEqIJgBISsguwEhLCC9AQ0BAkAgpwFFDQBBACG+AUECIb8BQQohwAEgBCgCmAIhwQFBACHCASDCASC+ATYC3KgCIL8BIMEBIMABEAQhwwFBACHEASDEASgC3KgCIcUBQQAhxgEgxgEgvgE2AtyoAiDFASHHASC+ASHIASDHASDIAUchyQFBACHKASDKASgC4KgCIcsBIMsBIcwBIL4BIc0BIMwBIM0BRyHOASDJASDOAXEhzwFBASHQASDPASDQAXEh0QECQAJAAkACQCDRAUUNACDFASgCACHSASDSASCYASCZARDnAiHTASDTAUUNAQwCC0F/IdQBINQBIdUBDAILIMUBIMsBEAAACyDLARACINMBIdUBCyDVASHWARADIdcBQQEh2AEg1gEg2AFGIdkBIJkBISogmAEhKyDXASEsINkBDQICQCDDAUUNAEEAIdoBIAQoApgCIdsBINsBKAIMIdwBINwBKAIAId0BIAQoApgCId4BIN4BKAIMId8BIN8BKAIQIeABIAQoApgCIeEBIOEBKAIAIeIBQQAh4wEg4wEoAtiQAiHkAUEAIeUBIOUBINoBNgLcqAJBreMAIeYBQQAh5wEg3QEg4AEg4gEg5wEg5AEg5gEg5wEQBUEAIegBQQAh6QEg6QEoAtyoAiHqAUEAIesBIOsBIOgBNgLcqAIg6gEh7AEg6AEh7QEg7AEg7QFHIe4BQQAh7wEg7wEoAuCoAiHwASDwASHxASDoASHyASDxASDyAUch8wEg7gEg8wFxIfQBQQEh9QEg9AEg9QFxIfYBAkACQAJAAkAg9gFFDQAg6gEoAgAh9wEg9wEgmAEgmQEQ5wIh+AEg+AFFDQEMAgtBfyH5ASD5ASH6AQwCCyDqASDwARAAAAsg8AEQAiD4ASH6AQsg+gEh+wEQAyH8AUEBIf0BIPsBIP0BRiH+ASCZASEqIJgBISsg/AEhLCD+AQ0DC0EBIf8BIAQoAqQCIYACIIACIP8BNgIMC0EAIYECQQUhggIgBCgCmAIhgwIggwIoAmwhhAJBACGFAiCFAiCBAjYC3KgCIIICIIQCEAZBACGGAiCGAigC3KgCIYcCQQAhiAIgiAIggQI2AtyoAiCHAiGJAiCBAiGKAiCJAiCKAkchiwJBACGMAiCMAigC4KgCIY0CII0CIY4CIIECIY8CII4CII8CRyGQAiCLAiCQAnEhkQJBASGSAiCRAiCSAnEhkwICQAJAAkACQCCTAkUNACCHAigCACGUAiCUAiCYASCZARDnAiGVAiCVAkUNAQwCC0F/IZYCIJYCIZcCDAILIIcCII0CEAAACyCNAhACIJUCIZcCCyCXAiGYAhADIZkCQQEhmgIgmAIgmgJGIZsCIJkBISogmAEhKyCZAiEsIJsCDQFBACGcAiAEIJwCNgKgAgNAIAQoAqACIZ0CIAQoApgCIZ4CIJ4CKAJsIZ8CIJ8CKAIIIaACIKACKAJ4IaECIJ0CIaICIKECIaMCIKICIKMCSCGkAkEBIaUCIKQCIKUCcSGmAgJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgpgJFDQAgBCgCmAIhpwIgpwIoAmwhqAIgqAIoAgwhqQIgqQIoArgBIaoCIAQoAqACIasCQQMhrAIgqwIgrAJ0Ia0CIKoCIK0CaiGuAiCuAisDACHJCCAEKAKYAiGvAiCvAigCbCGwAiCwAigCBCGxAiCxAigCACGyAiCyAisDACHKCCDJCCDKCGUhswJBASG0AiCzAiC0AnEhtQIgtQJFDQ1BACG2AkEBIbcCIAQoApgCIbgCILgCKAJsIbkCILkCKAIMIboCILoCKAK8ASG7AiAEKAKgAiG8AiC7AiC8AmohvQIgvQIgtwI6AAAgBCgCmAIhvgIgvgIoAmwhvwIgvwIoAgghwAIgwAIoAnwhwQIgBCgCoAIhwgJBGCHDAiDCAiDDAmwhxAIgwQIgxAJqIcUCIMUCKAIAIcYCIAQoApgCIccCIMcCKAJsIcgCIMgCKAIIIckCIMkCKAJ8IcoCIAQoAqACIcsCQRghzAIgywIgzAJsIc0CIMoCIM0CaiHOAiDOAisDCCHLCCAEKAKYAiHPAiDPAigCbCHQAiDQAigCCCHRAiDRAigCfCHSAiAEKAKgAiHTAkEYIdQCINMCINQCbCHVAiDSAiDVAmoh1gIg1gIrAxAhzAhBACHXAiDXAiC2AjYC3KgCQRAh2AIgBCDYAmoh2QIg2QIgzAg5AwAgBCDLCDkDCCAEIMYCNgIAQd3mACHaAkEGIdsCQQAh3AIg2wIg3AIg3AIg2gIgBBAHQQAh3QJBACHeAiDeAigC3KgCId8CQQAh4AIg4AIg3QI2AtyoAiDfAiHhAiDdAiHiAiDhAiDiAkch4wJBACHkAiDkAigC4KgCIeUCIOUCIeYCIN0CIecCIOYCIOcCRyHoAiDjAiDoAnEh6QJBASHqAiDpAiDqAnEh6wIg6wINAQwCC0EAIewCIAQoApgCIe0CIO0CKAJsIe4CIO4CKAIQIe8CIO8CKAIsIfACIAQoApgCIfECIPECKAJsIfICIAQoApgCIfMCIPMCKAJwIfQCQQAh9QIg9QIg7AI2AtyoAiDwAiDyAiD0AhAEGkEAIfYCIPYCKALcqAIh9wJBACH4AiD4AiDsAjYC3KgCIPcCIfkCIOwCIfoCIPkCIPoCRyH7AkEAIfwCIPwCKALgqAIh/QIg/QIh/gIg7AIh/wIg/gIg/wJHIYADIPsCIIADcSGBA0EBIYIDIIEDIIIDcSGDAyCDAw0EDAULIN8CKAIAIYQDIIQDIJgBIJkBEOcCIYUDIIUDRQ0BDAILQX8hhgMghgMhhwMMBwsg3wIg5QIQAAALIOUCEAIghQMhhwMMBQsg9wIoAgAhiAMgiAMgmAEgmQEQ5wIhiQMgiQNFDQEMAgtBfyGKAyCKAyGLAwwCCyD3AiD9AhAAAAsg/QIQAiCJAyGLAwsgiwMhjAMQAyGNA0EBIY4DIIwDII4DRiGPAyCZASEqIJgBISsgjQMhLCCPAw0GDAELIIcDIZADEAMhkQNBASGSAyCQAyCSA0YhkwMgmQEhKiCYASErIJEDISwgkwMNBQwBC0EAIZQDIAQglAM2AqACAkADQCAEKAKgAiGVAyAEKAKYAiGWAyCWAygCbCGXAyCXAygCCCGYAyCYAygCeCGZAyCVAyGaAyCZAyGbAyCaAyCbA0ghnANBASGdAyCcAyCdA3EhngMgngNFDQFBACGfAyAEKAKYAiGgAyCgAygCbCGhAyChAygCDCGiAyCiAygCvAEhowMgBCgCoAIhpAMgowMgpANqIaUDIKUDLQAAIaYDQf8BIacDIKYDIKcDcSGoA0H/ASGpAyCfAyCpA3EhqgMgqAMgqgNHIasDQQEhrAMgqwMgrANxIa0DAkAgrQNFDQBBACGuAyAEKAKYAiGvAyCvAygCbCGwAyCwAygCDCGxAyCxAygCvAEhsgMgBCgCoAIhswMgsgMgswNqIbQDILQDIK4DOgAAIAQoApgCIbUDILUDKAJsIbYDILYDKAIIIbcDILcDKAJ8IbgDIAQoAqACIbkDQRghugMguQMgugNsIbsDILgDILsDaiG8AyC8AysDECHNCCAEKAKYAiG9AyC9AygCbCG+AyC+AygCDCG/AyC/AygCuAEhwAMgBCgCoAIhwQNBAyHCAyDBAyDCA3QhwwMgwAMgwwNqIcQDIMQDKwMAIc4IIM4IIM0IoCHPCCDEAyDPCDkDAAsgBCgCoAIhxQNBASHGAyDFAyDGA2ohxwMgBCDHAzYCoAIMAAsAC0EAIcgDIAQgyAM2AqACAkADQCAEKAKgAiHJAyAEKAKYAiHKAyDKAygCbCHLAyDLAygCCCHMAyDMAygCeCHNAyDJAyHOAyDNAyHPAyDOAyDPA0gh0ANBASHRAyDQAyDRA3Eh0gMg0gNFDQEgBCgCoAIh0wMCQAJAINMDRQ0AIAQoApgCIdQDINQDKAJsIdUDINUDKAIMIdYDINYDKAK4ASHXAyAEKAKgAiHYA0EDIdkDINgDINkDdCHaAyDXAyDaA2oh2wMg2wMrAwAh0AggBCgCmAIh3AMg3AMoAmwh3QMg3QMoAgwh3gMg3gMrA7ABIdEIINAIINEIYyHfA0EBIeADIN8DIOADcSHhAyDhA0UNAQsgBCgCmAIh4gMg4gMoAmwh4wMg4wMoAgwh5AMg5AMoArgBIeUDIAQoAqACIeYDQQMh5wMg5gMg5wN0IegDIOUDIOgDaiHpAyDpAysDACHSCCAEKAKYAiHqAyDqAygCbCHrAyDrAygCDCHsAyDsAyDSCDkDsAELIAQoAqACIe0DQQEh7gMg7QMg7gNqIe8DIAQg7wM2AqACDAALAAtBACHwA0EHIfEDQYACIfIDIAQg8gNqIfMDIPMDIfQDQfgBIfUDIAQg9QNqIfYDIPYDIfcDIAQoApgCIfgDIPgDKAJsIfkDIAQoApgCIfoDIPoDKAJwIfsDIAQoApgCIfwDIPwDKAJsIf0DIP0DKAIEIf4DIP4DKAIAIf8DIP8DKwMAIdMIQQAhgAQggAQg8AM2AtyoAiDxAyD5AyD7AyDTCCD0AyD3AxAIIYEEQQAhggQgggQoAtyoAiGDBEEAIYQEIIQEIPADNgLcqAIggwQhhQQg8AMhhgQghQQghgRHIYcEQQAhiAQgiAQoAuCoAiGJBCCJBCGKBCDwAyGLBCCKBCCLBEchjAQghwQgjARxIY0EQQEhjgQgjQQgjgRxIY8EAkACQAJAAkAgjwRFDQAggwQoAgAhkAQgkAQgmAEgmQEQ5wIhkQQgkQRFDQEMAgtBfyGSBCCSBCGTBAwCCyCDBCCJBBAAAAsgiQQQAiCRBCGTBAsgkwQhlAQQAyGVBEEBIZYEIJQEIJYERiGXBCCZASEqIJgBISsglQQhLCCXBA0EQQAhmARBCCGZBCAEIIEENgL0ASAEKAKYAiGaBCCaBCgCbCGbBCAEKAKYAiGcBCCcBCgCcCGdBEEAIZ4EIJ4EIJgENgLcqAIgmQQgmwQgnQQQBCGfBEEAIaAEIKAEKALcqAIhoQRBACGiBCCiBCCYBDYC3KgCIKEEIaMEIJgEIaQEIKMEIKQERyGlBEEAIaYEIKYEKALgqAIhpwQgpwQhqAQgmAQhqQQgqAQgqQRHIaoEIKUEIKoEcSGrBEEBIawEIKsEIKwEcSGtBAJAAkACQAJAIK0ERQ0AIKEEKAIAIa4EIK4EIJgBIJkBEOcCIa8EIK8ERQ0BDAILQX8hsAQgsAQhsQQMAgsgoQQgpwQQAAALIKcEEAIgrwQhsQQLILEEIbIEEAMhswRBASG0BCCyBCC0BEYhtQQgmQEhKiCYASErILMEISwgtQQNBAJAAkACQAJAAkACQAJAAkAgnwQNACAEKAKYAiG2BCC2BCgCbCG3BCC3BCgCDCG4BCC4BC0AkwEhuQRBGCG6BCC5BCC6BHQhuwQguwQgugR1IbwEILwEDQBBACG9BEEJIb4EIAQoApgCIb8EIL8EKAJsIcAEQQAhwQQgwQQgvQQ2AtyoAiC+BCDABBAJIcIEQQAhwwQgwwQoAtyoAiHEBEEAIcUEIMUEIL0ENgLcqAIgxAQhxgQgvQQhxwQgxgQgxwRHIcgEQQAhyQQgyQQoAuCoAiHKBCDKBCHLBCC9BCHMBCDLBCDMBEchzQQgyAQgzQRxIc4EQQEhzwQgzgQgzwRxIdAEAkACQAJAAkAg0ARFDQAgxAQoAgAh0QQg0QQgmAEgmQEQ5wIh0gQg0gRFDQEMAgtBfyHTBCDTBCHUBAwCCyDEBCDKBBAAAAsgygQQAiDSBCHUBAsg1AQh1QQQAyHWBEEBIdcEINUEINcERiHYBCCZASEqIJgBISsg1gQhLCDYBA0MQRgh2QQgwgQg2QR0IdoEINoEINkEdSHbBCDbBA0AQQIh3AQgBCgC9AEh3QQg3QQh3gQg3AQh3wQg3gQg3wRGIeAEQQEh4QQg4AQg4QRxIeIEIOIERQ0BC0EAIeMEQQIh5ARBCiHlBCAEKAKYAiHmBEEAIecEIOcEIOMENgLcqAIg5AQg5gQg5QQQBCHoBEEAIekEIOkEKALcqAIh6gRBACHrBCDrBCDjBDYC3KgCIOoEIewEIOMEIe0EIOwEIO0ERyHuBEEAIe8EIO8EKALgqAIh8AQg8AQh8QQg4wQh8gQg8QQg8gRHIfMEIO4EIPMEcSH0BEEBIfUEIPQEIPUEcSH2BCD2BA0BDAILQQAh9wQgBCgCpAIh+AQg+AQg9wQ2AgAgBCgCpAIh+QQg+QQg9wQ2AgQMBQsg6gQoAgAh+gQg+gQgmAEgmQEQ5wIh+wQg+wRFDQEMAgtBfyH8BCD8BCH9BAwCCyDqBCDwBBAAAAsg8AQQAiD7BCH9BAsg/QQh/gQQAyH/BEEBIYAFIP4EIIAFRiGBBSCZASEqIJgBISsg/wQhLCCBBQ0FAkAg6ARFDQBBACGCBSAEKAKYAiGDBSCDBSgCDCGEBSCEBSgCACGFBSAEKAKYAiGGBSCGBSgCDCGHBSCHBSgCECGIBSAEKAKYAiGJBSCJBSgCACGKBUEAIYsFIIsFKALYkAIhjAVBACGNBSCNBSCCBTYC3KgCQcPqACGOBUEAIY8FIIUFIIgFIIoFII8FIIwFII4FII8FEAVBACGQBUEAIZEFIJEFKALcqAIhkgVBACGTBSCTBSCQBTYC3KgCIJIFIZQFIJAFIZUFIJQFIJUFRyGWBUEAIZcFIJcFKALgqAIhmAUgmAUhmQUgkAUhmgUgmQUgmgVHIZsFIJYFIJsFcSGcBUEBIZ0FIJwFIJ0FcSGeBQJAAkACQAJAIJ4FRQ0AIJIFKAIAIZ8FIJ8FIJgBIJkBEOcCIaAFIKAFRQ0BDAILQX8hoQUgoQUhogUMAgsgkgUgmAUQAAALIJgFEAIgoAUhogULIKIFIaMFEAMhpAVBASGlBSCjBSClBUYhpgUgmQEhKiCYASErIKQFISwgpgUNBgtBACGnBUEBIagFIAQoAqQCIakFIKkFIKgFNgIAIAQoAqQCIaoFIKoFIKgFNgIMIAQoAqQCIasFIKsFIKcFNgIEC0EAIawFQQIhrQVBCiGuBSAEKAKYAiGvBUEAIbAFILAFIKwFNgLcqAIgrQUgrwUgrgUQBCGxBUEAIbIFILIFKALcqAIhswVBACG0BSC0BSCsBTYC3KgCILMFIbUFIKwFIbYFILUFILYFRyG3BUEAIbgFILgFKALgqAIhuQUguQUhugUgrAUhuwUgugUguwVHIbwFILcFILwFcSG9BUEBIb4FIL0FIL4FcSG/BQJAAkACQAJAIL8FRQ0AILMFKAIAIcAFIMAFIJgBIJkBEOcCIcEFIMEFRQ0BDAILQX8hwgUgwgUhwwUMAgsgswUguQUQAAALILkFEAIgwQUhwwULIMMFIcQFEAMhxQVBASHGBSDEBSDGBUYhxwUgmQEhKiCYASErIMUFISwgxwUNBAJAILEFRQ0AQQAhyAVBsfMAIckFQZz2ACHKBSAEKAKYAiHLBSDLBSgCDCHMBSDMBSgCACHNBSAEKAKYAiHOBSDOBSgCDCHPBSDPBSgCECHQBSAEKAKYAiHRBSDRBSgCACHSBUEAIdMFINMFKALYkAIh1AUgBCgCpAIh1QUg1QUoAgAh1gUgyQUgygUg1gUbIdcFQQAh2AUg2AUgyAU2AtyoAiAEINcFNgIwQfXuACHZBUEAIdoFQTAh2wUgBCDbBWoh3AUgzQUg0AUg0gUg2gUg1AUg2QUg3AUQBUEAId0FQQAh3gUg3gUoAtyoAiHfBUEAIeAFIOAFIN0FNgLcqAIg3wUh4QUg3QUh4gUg4QUg4gVHIeMFQQAh5AUg5AUoAuCoAiHlBSDlBSHmBSDdBSHnBSDmBSDnBUch6AUg4wUg6AVxIekFQQEh6gUg6QUg6gVxIesFAkACQAJAAkAg6wVFDQAg3wUoAgAh7AUg7AUgmAEgmQEQ5wIh7QUg7QVFDQEMAgtBfyHuBSDuBSHvBQwCCyDfBSDlBRAAAAsg5QUQAiDtBSHvBQsg7wUh8AUQAyHxBUEBIfIFIPAFIPIFRiHzBSCZASEqIJgBISsg8QUhLCDzBQ0FC0EAIfQFQQoh9QUgBCgCmAIh9gUg9gUoAmwh9wVBACH4BSD4BSD0BTYC3KgCIPUFIPcFEAZBACH5BSD5BSgC3KgCIfoFQQAh+wUg+wUg9AU2AtyoAiD6BSH8BSD0BSH9BSD8BSD9BUch/gVBACH/BSD/BSgC4KgCIYAGIIAGIYEGIPQFIYIGIIEGIIIGRyGDBiD+BSCDBnEhhAZBASGFBiCEBiCFBnEhhgYCQAJAAkACQCCGBkUNACD6BSgCACGHBiCHBiCYASCZARDnAiGIBiCIBkUNAQwCC0F/IYkGIIkGIYoGDAILIPoFIIAGEAAACyCABhACIIgGIYoGCyCKBiGLBhADIYwGQQEhjQYgiwYgjQZGIY4GIJkBISogmAEhKyCMBiEsII4GDQRBACGPBkEFIZAGIAQoApgCIZEGIJEGKAJsIZIGQQAhkwYgkwYgjwY2AtyoAiCQBiCSBhAGQQAhlAYglAYoAtyoAiGVBkEAIZYGIJYGII8GNgLcqAIglQYhlwYgjwYhmAYglwYgmAZHIZkGQQAhmgYgmgYoAuCoAiGbBiCbBiGcBiCPBiGdBiCcBiCdBkchngYgmQYgngZxIZ8GQQEhoAYgnwYgoAZxIaEGAkACQAJAAkAgoQZFDQAglQYoAgAhogYgogYgmAEgmQEQ5wIhowYgowZFDQEMAgtBfyGkBiCkBiGlBgwCCyCVBiCbBhAAAAsgmwYQAiCjBiGlBgsgpQYhpgYQAyGnBkEBIagGIKYGIKgGRiGpBiCZASEqIJgBISsgpwYhLCCpBg0EQQAhqgZBCyGrBiAEKAKYAiGsBiCsBigCbCGtBkEAIa4GIK4GIKoGNgLcqAIgqwYgrQYQBkEAIa8GIK8GKALcqAIhsAZBACGxBiCxBiCqBjYC3KgCILAGIbIGIKoGIbMGILIGILMGRyG0BkEAIbUGILUGKALgqAIhtgYgtgYhtwYgqgYhuAYgtwYguAZHIbkGILQGILkGcSG6BkEBIbsGILoGILsGcSG8BgJAAkACQAJAILwGRQ0AILAGKAIAIb0GIL0GIJgBIJkBEOcCIb4GIL4GRQ0BDAILQX8hvwYgvwYhwAYMAgsgsAYgtgYQAAALILYGEAIgvgYhwAYLIMAGIcEGEAMhwgZBASHDBiDBBiDDBkYhxAYgmQEhKiCYASErIMIGISwgxAYNBEEAIcUGQQwhxgZBiAIhxwYgBCDHBmohyAYgyAYhyQYgBCgCmAIhygYgygYoAmwhywZBACHMBiDMBiDFBjYC3KgCIMYGIMsGIMkGEAQhzQZBACHOBiDOBigC3KgCIc8GQQAh0AYg0AYgxQY2AtyoAiDPBiHRBiDFBiHSBiDRBiDSBkch0wZBACHUBiDUBigC4KgCIdUGINUGIdYGIMUGIdcGINYGINcGRyHYBiDTBiDYBnEh2QZBASHaBiDZBiDaBnEh2wYCQAJAAkACQCDbBkUNACDPBigCACHcBiDcBiCYASCZARDnAiHdBiDdBkUNAQwCC0F/Id4GIN4GId8GDAILIM8GINUGEAAACyDVBhACIN0GId8GCyDfBiHgBhADIeEGQQEh4gYg4AYg4gZGIeMGIJkBISogmAEhKyDhBiEsIOMGDQQgBCDNBjYChAIgBCgChAIh5AYCQAJAIOQGRQ0AIAQoAoACIeUGIOUGDQBBASHmBiAEKAKkAiHnBiDnBiDmBjYCECAEKwOIAiHUCCAEKAKkAiHoBiDoBiDUCDkDGAwBCyAEKAKEAiHpBgJAAkAg6QYNACAEKAKAAiHqBiDqBkUNAEEBIesGIAQoAqQCIewGIOwGIOsGNgIQIAQrA/gBIdUIIAQoAqQCIe0GIO0GINUIOQMYDAELIAQoAoQCIe4GAkACQCDuBkUNACAEKAKAAiHvBiDvBkUNAEEBIfAGIAQoAqQCIfEGIPEGIPAGNgIQIAQrA4gCIdYIIAQrA/gBIdcIINYIINcIEPUCIdgIIAQoAqQCIfIGIPIGINgIOQMYDAELIAQoAqQCIfMGIPMGKwMYIdkIIAQoApgCIfQGIPQGKAJsIfUGIPUGKAIEIfYGIPYGKAIAIfcGIPcGKwMAIdoIINkIINoIZSH4BkEBIfkGIPgGIPkGcSH6BgJAIPoGRQ0AQQAh+wYgBCgCpAIh/AYg/AYg+wY2AhALCwsLQQAh/QZBAiH+BkEKIf8GIAQoApgCIYAHQQAhgQcggQcg/QY2AtyoAiD+BiCAByD/BhAEIYIHQQAhgwcggwcoAtyoAiGEB0EAIYUHIIUHIP0GNgLcqAIghAchhgcg/QYhhwcghgcghwdHIYgHQQAhiQcgiQcoAuCoAiGKByCKByGLByD9BiGMByCLByCMB0chjQcgiAcgjQdxIY4HQQEhjwcgjgcgjwdxIZAHAkACQAJAAkAgkAdFDQAghAcoAgAhkQcgkQcgmAEgmQEQ5wIhkgcgkgdFDQEMAgtBfyGTByCTByGUBwwCCyCEByCKBxAAAAsgigcQAiCSByGUBwsglAchlQcQAyGWB0EBIZcHIJUHIJcHRiGYByCZASEqIJgBISsglgchLCCYBw0EAkAgggdFDQBBACGZByAEKAKYAiGaByCaBygCDCGbByCbBygCACGcByAEKAKYAiGdByCdBygCDCGeByCeBygCECGfByAEKAKYAiGgByCgBygCACGhB0EAIaIHIKIHKALYkAIhowcgBCgCpAIhpAcgpAcrAxgh2whBACGlByClByCZBzYC3KgCIAQg2wg5AyBBo/kAIaYHQQAhpwdBICGoByAEIKgHaiGpByCcByCfByChByCnByCjByCmByCpBxAFQQAhqgdBACGrByCrBygC3KgCIawHQQAhrQcgrQcgqgc2AtyoAiCsByGuByCqByGvByCuByCvB0chsAdBACGxByCxBygC4KgCIbIHILIHIbMHIKoHIbQHILMHILQHRyG1ByCwByC1B3EhtgdBASG3ByC2ByC3B3EhuAcCQAJAAkACQCC4B0UNACCsBygCACG5ByC5ByCYASCZARDnAiG6ByC6B0UNAQwCC0F/IbsHILsHIbwHDAILIKwHILIHEAAACyCyBxACILoHIbwHCyC8ByG9BxADIb4HQQEhvwcgvQcgvwdGIcAHIJkBISogmAEhKyC+ByEsIMAHDQULQQEhwQcgBCDBBzYCnAIgmQEhmgEMAwsLIAQoAqACIcIHQQEhwwcgwgcgwwdqIcQHIAQgxAc2AqACDAALAAsgmgEhxQdBACHGB0ENIccHIAQoAkwhyAcgBCgClAIhyQcgyQcgyAc2AmBBACHKByDKByDGBzYC3KgCIMcHEApBACHLByDLBygC3KgCIcwHQQAhzQcgzQcgxgc2AtyoAiDMByHOByDGByHPByDOByDPB0ch0AdBACHRByDRBygC4KgCIdIHINIHIdMHIMYHIdQHINMHINQHRyHVByDQByDVB3Eh1gdBASHXByDWByDXB3Eh2AcCQAJAAkACQCDYB0UNACDMBygCACHZByDZByCYASCZARDnAiHaByDaB0UNAQwCC0F/IdsHINsHIdwHDAILIMwHINIHEAAACyDSBxACINoHIdwHCyDcByHdBxADId4HQQEh3wcg3Qcg3wdGIeAHIMUHISogmAEhKyDeByEsIOAHDQBBACHhB0EOIeIHIAQoApgCIeMHQQAh5Acg5Acg4Qc2AtyoAiDiByDjBxAGQQAh5Qcg5QcoAtyoAiHmB0EAIecHIOcHIOEHNgLcqAIg5gch6Acg4Qch6Qcg6Acg6QdHIeoHQQAh6wcg6wcoAuCoAiHsByDsByHtByDhByHuByDtByDuB0ch7wcg6gcg7wdxIfAHQQEh8Qcg8Acg8QdxIfIHAkACQAJAAkAg8gdFDQAg5gcoAgAh8wcg8wcgmAEgmQEQ5wIh9Acg9AdFDQEMAgtBfyH1ByD1ByH2BwwCCyDmByDsBxAAAAsg7AcQAiD0ByH2Bwsg9gch9wcQAyH4B0EBIfkHIPcHIPkHRiH6ByDFByEqIJgBISsg+AchLCD6Bw0AIAQoApwCIfsHAkAg+wdFDQBBACH8ByAEIPwHNgKsAiCYASEuDAMLQQAh/QdBAiH+B0EKIf8HIAQoApgCIYAIQQAhgQgggQgg/Qc2AtyoAiD+ByCACCD/BxAEIYIIQQAhgwgggwgoAtyoAiGECEEAIYUIIIUIIP0HNgLcqAIghAghhggg/QchhwgghggghwhHIYgIQQAhiQggiQgoAuCoAiGKCCCKCCGLCCD9ByGMCCCLCCCMCEchjQggiAggjQhxIY4IQQEhjwggjgggjwhxIZAIAkACQAJAAkAgkAhFDQAghAgoAgAhkQggkQggmAEgmQEQ5wIhkgggkghFDQEMAgtBfyGTCCCTCCGUCAwCCyCECCCKCBAAAAsgiggQAiCSCCGUCAsglAghlQgQAyGWCEEBIZcIIJUIIJcIRiGYCCDFByEqIJgBISsglgghLCCYCA0AIIIIRQ0BQQAhmQggBCgCmAIhmgggmggoAgwhmwggmwgoAgAhnAggBCgCmAIhnQggnQgoAgwhngggnggoAhAhnwggBCgCmAIhoAggoAgoAgAhoQhBACGiCCCiCCgC2JACIaMIQQAhpAggpAggmQg2AtyoAkGK/AAhpQhBACGmCEEDIacIIJwIIJ8IIKEIIKcIIKMIIKUIIKYIEAVBACGoCEEAIakIIKkIKALcqAIhqghBACGrCCCrCCCoCDYC3KgCIKoIIawIIKgIIa0IIKwIIK0IRyGuCEEAIa8IIK8IKALgqAIhsAggsAghsQggqAghsgggsQggsghHIbMIIK4IILMIcSG0CEEBIbUIILQIILUIcSG2CAJAAkACQAJAILYIRQ0AIKoIKAIAIbcIILcIIJgBIJkBEOcCIbgIILgIRQ0BDAILQX8huQgguQghuggMAgsgqgggsAgQAAALILAIEAIguAghuggLILoIIbsIEAMhvAhBASG9CCC7CCC9CEYhvgggxQchKiCYASErILwIISwgvggNAAsLQQMhvwhBASHACCAEKAKYAiHBCCDBCCDACDYCoAEgBCC/CDYCrAIgmAEhLgsgLiHCCCAEKAKsAiHDCCDCCBDqAkGwAiHECCAEIMQIaiHFCAJAIMUIIscIIwJLIMcIIwNJcgRAEBwLIMcIJAALIMMIDwvnAgEkfyMAIQRBICEFIAQgBWshBgJAIAYiJiMCSyAmIwNJcgRAEBwLICYkAAtBACEHIAYgADYCGCAGIAE2AhQgBiACNgIQIAYgAzYCDCAGKAIMIQggCCEJIAchCiAJIApHIQtBASEMIAsgDHEhDQJAAkAgDQ0AQQYhDkHAACEPIAYoAhghECAQIA82AkQgBigCGCERIBEgDhBgIRICQCASRQ0AIAYoAhghEyATKAIMIRQgFCgCACEVIAYoAhghFiAWKAIMIRcgFygCECEYIAYoAhghGSAZKAIAIRpBACEbIBsoAsiQAiEcIAYoAhQhHSAGKAIQIR4gBiAeNgIEIAYgHTYCAEGa5wEhH0EDISAgGCAaICAgHCAfIAYgFREEAAtBASEhIAYgITYCHAwBC0EAISIgBiAiNgIcCyAGKAIcISNBICEkIAYgJGohJQJAICUiJyMCSyAnIwNJcgRAEBwLICckAAsgIw8LrwEBE38jACEBQRAhAiABIAJrIQMCQCADIhIjAksgEiMDSXIEQBAcCyASJAALQQAhBCADIAA2AgwgAygCDCEFIAUoAnQhBiAGIQcgBCEIIAcgCEchCUEBIQogCSAKcSELAkAgC0UNAEEAIQwgDCgC1KACIQ0gAygCDCEOIA4oAnAhDyANIA8Q9AIaC0EQIRAgAyAQaiERAkAgESITIwJLIBMjA0lyBEAQHAsgEyQACw8LwgEBFX8jACEBQRAhAiABIAJrIQMCQCADIhQjAksgFCMDSXIEQBAcCyAUJAALQQAhBCADIAA2AgwgAygCDCEFIAUoAnQhBiAGIQcgBCEIIAcgCEchCUEBIQogCSAKcSELAkAgC0UNAEEAIQwgDCgC1KACIQ0gAygCDCEOIA4oAnQhDyANIA8Q9AIaC0EAIRAgECgC8JACIREgEREIABpBECESIAMgEmohEwJAIBMiFSMCSyAVIwNJcgRAEBwLIBUkAAsPC5oCAR5/IwAhAkEQIQMgAiADayEEAkAgBCIeIwJLIB4jA0lyBEAQHAsgHiQAC0EAIQVBASEGIAQgADYCDCAEIAE2AgggBCAFNgIEIAQoAgghByAHIAY2AgAgBCgCCCEIIAggBTYCBANAQQAhCSAEKAIIIQogCigCACELIAkhDAJAIAtFDQBBACENIAQoAgghDiAOKAIEIQ8gDyEQIA0hESAQIBFHIRJBfyETIBIgE3MhFCAUIQwLIAwhFUEBIRYgFSAWcSEXAkAgF0UNACAEKAIMIRggBCgCCCEZIBggGRBmIRogBCAaNgIEDAELCyAEKAIEIRtBECEcIAQgHGohHQJAIB0iHyMCSyAfIwNJcgRAEBwLIB8kAAsgGw8L7gICI38BfCMAIQJBICEDIAIgA2shBAJAIAQiIyMCSyAjIwNJcgRAEBwLICMkAAtBi80BIQVBCCEGQX8hB0EAIQggCLchJSAEIAA2AhggBCABNgIUIAQoAhghCSAEIAk2AhAgBCAlOQMIIAQgCDYCBCAEKAIQIQogCiAFIAYgBxBnIQsCQAJAIAtFDQBBAyEMIAQgDDYCHAwBC0EKIQ0gBCgCECEOIA4gDRBgIQ8CQCAPRQ0AIAQoAhAhECAQKAIMIREgESgCACESIAQoAhAhEyATKAIMIRQgFCgCECEVIAQoAhAhFiAWKAIAIRdBACEYIBgoAtiQAiEZQYvNASEaQQAhGyAVIBcgGyAZIBogGyASEQQACyAEKAIQIRwgBCgCFCEdIBwgHRBhIR4gBCAeNgIEIAQoAgQhHyAEIB82AhwLIAQoAhwhIEEgISEgBCAhaiEiAkAgIiIkIwJLICQjA0lyBEAQHAsgJCQACyAgDwuABAE1fyMAIQRBMCEFIAQgBWshBgJAIAYiNyMCSyA3IwNJcgRAEBwLIDckAAtBACEHIAYgADYCKCAGIAE2AiQgBiACNgIgIAYgAzYCHCAGKAIoIQggCCEJIAchCiAJIApHIQtBASEMIAsgDHEhDQJAAkAgDQ0AQQEhDiAGIA42AiwMAQtBACEPIAYoAighECAQKAIEIREgDyESIBEhEyASIBNGIRRBASEVIBQgFXEhFgJAAkAgFkUNACAGKAIgIRcgBiAXNgIYDAELIAYoAhwhGCAGIBg2AhgLIAYoAighGSAZKAJEIRogBigCGCEbIBogG3EhHAJAIBwNAEEGIR0gBigCKCEeIB4gHRBgIR8CQCAfRQ0AIAYoAighICAgKAIMISEgISgCACEiIAYoAighIyAjKAIMISQgJCgCECElIAYoAighJiAmKAIAISdBACEoICgoAsiQAiEpIAYoAiQhKiAGKAIkISsgBigCKCEsICwQXyEtIAYgLTYCCCAGICs2AgQgBiAqNgIAQZbyASEuQQMhLyAlICcgLyApIC4gBiAiEQQAC0EBITBBwAAhMSAGKAIoITIgMiAxNgJEIAYgMDYCLAwBC0EAITMgBiAzNgIsCyAGKAIsITRBMCE1IAYgNWohNgJAIDYiOCMCSyA4IwNJcgRAEBwLIDgkAAsgNA8L3SQCwwN/AXwjACECQdABIQMgAiADayEEAkAgBCLDAyMCSyDDAyMDSXIEQBAcCyDDAyQAC0EAIQVBKCEGIAYQ6QIhByAHIAU2AgBBBCEIIAUgCGohCSAEIAA2AsgBIAQgATYCxAEgBCgCyAEhCiAKKAJwIQsgBCALNgLAASAEKALAASEMIAwoAgAhDSAEIA02ArwBIAQgBTYCuAEgBCgCyAEhDiAOKAKgASEPIAchEAJAAkACQAJAIA9FDQBBACERQQMhEiAEKALIASETQQAhFCAUIBE2AtyoAiASIBMQBkEAIRUgFSgC3KgCIRZBACEXIBcgETYC3KgCIBYhGCARIRkgGCAZRyEaQQAhGyAbKALgqAIhHCAcIR0gESEeIB0gHkchHyAaIB9xISBBASEhICAgIXEhIgJAAkACQAJAICJFDQAgFigCACEjICMgByAJEOcCISQgJEUNAQwCC0F/ISUgJSEmDAILIBYgHBAAAAsgHBACICQhJgsgJiEnEAMhKEEBISkgJyApRiEqIAkhKyAHISwgKCEtAkAgKg0AQQAhLkEBIS9BECEwIAQgMGohMSAxITIgBCgCwAEhMyAzKAJgITQgBCA0NgIMIAQoAsABITUgNSAyNgJgIDIgLyAHIAkQ5gIhNhADITcgNyErIDYhLCAuIS0LA0AgLSE4ICwhOSArITogOiE7AkAgOA0AQQIhPCAEKALAASE9ID0oAmAhPiAEKALAASE/ID8gPjYCACAEKALIASFAIEAoAkQhQSA8IUIgQSFDIEIgQ0YhREEBIUUgRCBFcSFGAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCBGRQ0AQQAhR0EPIUhBiP8AIUlB5IEBIUogR7chxQMgBCgCyAEhSyBLKAJsIUwgBCgCyAEhTSBNKAJwIU5BACFPIE8gRzYC3KgCIEggTCBOIEkgSiDFAxALGkEAIVAgUCgC3KgCIVFBACFSIFIgRzYC3KgCIFEhUyBHIVQgUyBURyFVQQAhViBWKALgqAIhVyBXIVggRyFZIFggWUchWiBVIFpxIVtBASFcIFsgXHEhXSBdDQEMAgtBACFeIAQoAsgBIV8gXygCbCFgIGAoAhAhYSBhKAIkIWIgBCgCyAEhYyBjKAJsIWQgBCgCyAEhZSBlKAJwIWZBACFnIGcgXjYC3KgCIGIgZCBmEAQaQQAhaCBoKALcqAIhaUEAIWogaiBeNgLcqAIgaSFrIF4hbCBrIGxHIW1BACFuIG4oAuCoAiFvIG8hcCBeIXEgcCBxRyFyIG0gcnEhc0EBIXQgcyB0cSF1IHUNBAwFCyBRKAIAIXYgdiA5IDoQ5wIhdyB3RQ0BDAILQX8heCB4IXkMBwsgUSBXEAAACyBXEAIgdyF5DAULIGkoAgAheiB6IDkgOhDnAiF7IHtFDQEMAgtBfyF8IHwhfQwCCyBpIG8QAAALIG8QAiB7IX0LIH0hfhADIX9BASGAASB+IIABRiGBASA6ISsgOSEsIH8hLSCBAQ0FDAELIHkhggEQAyGDAUEBIYQBIIIBIIQBRiGFASA6ISsgOSEsIIMBIS0ghQENBAwBC0EAIYYBQQohhwEgBCgCyAEhiAEgiAEoAmwhiQFBACGKASCKASCGATYC3KgCIIcBIIkBEAZBACGLASCLASgC3KgCIYwBQQAhjQEgjQEghgE2AtyoAiCMASGOASCGASGPASCOASCPAUchkAFBACGRASCRASgC4KgCIZIBIJIBIZMBIIYBIZQBIJMBIJQBRyGVASCQASCVAXEhlgFBASGXASCWASCXAXEhmAECQAJAAkACQCCYAUUNACCMASgCACGZASCZASA5IDoQ5wIhmgEgmgFFDQEMAgtBfyGbASCbASGcAQwCCyCMASCSARAAAAsgkgEQAiCaASGcAQsgnAEhnQEQAyGeAUEBIZ8BIJ0BIJ8BRiGgASA6ISsgOSEsIJ4BIS0goAENA0EAIaEBIAQoAsgBIaIBIKIBKAJsIaMBIKMBKAIQIaQBIKQBKAIoIaUBIAQoAsgBIaYBIKYBKAJsIacBIAQoAsgBIagBIKgBKAJwIakBQQAhqgEgqgEgoQE2AtyoAiClASCnASCpARAEGkEAIasBIKsBKALcqAIhrAFBACGtASCtASChATYC3KgCIKwBIa4BIKEBIa8BIK4BIK8BRyGwAUEAIbEBILEBKALgqAIhsgEgsgEhswEgoQEhtAEgswEgtAFHIbUBILABILUBcSG2AUEBIbcBILYBILcBcSG4AQJAAkACQAJAILgBRQ0AIKwBKAIAIbkBILkBIDkgOhDnAiG6ASC6AUUNAQwCC0F/IbsBILsBIbwBDAILIKwBILIBEAAACyCyARACILoBIbwBCyC8ASG9ARADIb4BQQEhvwEgvQEgvwFGIcABIDohKyA5ISwgvgEhLSDAAQ0DQQAhwQEgBCgCyAEhwgEgwgEoAmwhwwEgwwEoAhAhxAEgxAEoAkQhxQEgBCgCyAEhxgEgxgEoAmwhxwEgBCgCyAEhyAEgyAEoAnAhyQFBACHKASDKASDBATYC3KgCIMUBIMcBIMkBEAQaQQAhywEgywEoAtyoAiHMAUEAIc0BIM0BIMEBNgLcqAIgzAEhzgEgwQEhzwEgzgEgzwFHIdABQQAh0QEg0QEoAuCoAiHSASDSASHTASDBASHUASDTASDUAUch1QEg0AEg1QFxIdYBQQEh1wEg1gEg1wFxIdgBAkACQAJAAkAg2AFFDQAgzAEoAgAh2QEg2QEgOSA6EOcCIdoBINoBRQ0BDAILQX8h2wEg2wEh3AEMAgsgzAEg0gEQAAALINIBEAIg2gEh3AELINwBId0BEAMh3gFBASHfASDdASDfAUYh4AEgOiErIDkhLCDeASEtIOABDQNBACHhASAEKALIASHiASDiASgCbCHjASDjASgCECHkASDkASgCTCHlASAEKALIASHmASDmASgCbCHnASAEKALIASHoASDoASgCcCHpAUEAIeoBIOoBIOEBNgLcqAIg5QEg5wEg6QEQBBpBACHrASDrASgC3KgCIewBQQAh7QEg7QEg4QE2AtyoAiDsASHuASDhASHvASDuASDvAUch8AFBACHxASDxASgC4KgCIfIBIPIBIfMBIOEBIfQBIPMBIPQBRyH1ASDwASD1AXEh9gFBASH3ASD2ASD3AXEh+AECQAJAAkACQCD4AUUNACDsASgCACH5ASD5ASA5IDoQ5wIh+gEg+gFFDQEMAgtBfyH7ASD7ASH8AQwCCyDsASDyARAAAAsg8gEQAiD6ASH8AQsg/AEh/QEQAyH+AUEBIf8BIP0BIP8BRiGAAiA6ISsgOSEsIP4BIS0ggAINA0EAIYECIAQoAsgBIYICIIICKAJsIYMCIIMCKAIQIYQCIIQCKAJQIYUCIAQoAsgBIYYCIIYCKAJsIYcCIAQoAsABIYgCQQAhiQIgiQIggQI2AtyoAiCFAiCHAiCIAhAEGkEAIYoCIIoCKALcqAIhiwJBACGMAiCMAiCBAjYC3KgCIIsCIY0CIIECIY4CII0CII4CRyGPAkEAIZACIJACKALgqAIhkQIgkQIhkgIggQIhkwIgkgIgkwJHIZQCII8CIJQCcSGVAkEBIZYCIJUCIJYCcSGXAgJAAkACQAJAIJcCRQ0AIIsCKAIAIZgCIJgCIDkgOhDnAiGZAiCZAkUNAQwCC0F/IZoCIJoCIZsCDAILIIsCIJECEAAACyCRAhACIJkCIZsCCyCbAiGcAhADIZ0CQQEhngIgnAIgngJGIZ8CIDohKyA5ISwgnQIhLSCfAg0DQQAhoAJBBSGhAiAEKALIASGiAiCiAigCbCGjAkEAIaQCIKQCIKACNgLcqAIgoQIgowIQBkEAIaUCIKUCKALcqAIhpgJBACGnAiCnAiCgAjYC3KgCIKYCIagCIKACIakCIKgCIKkCRyGqAkEAIasCIKsCKALgqAIhrAIgrAIhrQIgoAIhrgIgrQIgrgJHIa8CIKoCIK8CcSGwAkEBIbECILACILECcSGyAgJAAkACQAJAILICRQ0AIKYCKAIAIbMCILMCIDkgOhDnAiG0AiC0AkUNAQwCC0F/IbUCILUCIbYCDAILIKYCIKwCEAAACyCsAhACILQCIbYCCyC2AiG3AhADIbgCQQEhuQIgtwIguQJGIboCIDohKyA5ISwguAIhLSC6Ag0DIDohuwIMAQsgOiG7AgsguwIhvAJBASG9AkEAIb4CIAQoAsgBIb8CIL8CIL4CNgKgASAEIL0CNgK4ASC8AiE7CyA7IcACQQAhwQJBDSHCAiAEKAIMIcMCIAQoAsABIcQCIMQCIMMCNgJgQQAhxQIgxQIgwQI2AtyoAiDCAhAKQQAhxgIgxgIoAtyoAiHHAkEAIcgCIMgCIMECNgLcqAIgxwIhyQIgwQIhygIgyQIgygJHIcsCQQAhzAIgzAIoAuCoAiHNAiDNAiHOAiDBAiHPAiDOAiDPAkch0AIgywIg0AJxIdECQQEh0gIg0QIg0gJxIdMCAkACQAJAAkAg0wJFDQAgxwIoAgAh1AIg1AIgOSA6EOcCIdUCINUCRQ0BDAILQX8h1gIg1gIh1wIMAgsgxwIgzQIQAAALIM0CEAIg1QIh1wILINcCIdgCEAMh2QJBASHaAiDYAiDaAkYh2wIgwAIhKyA5ISwg2QIhLSDbAg0AQQAh3AJBDiHdAiAEKAK8ASHeAiAEKALAASHfAiDfAiDeAjYCACAEKALIASHgAkEAIeECIOECINwCNgLcqAIg3QIg4AIQBkEAIeICIOICKALcqAIh4wJBACHkAiDkAiDcAjYC3KgCIOMCIeUCINwCIeYCIOUCIOYCRyHnAkEAIegCIOgCKALgqAIh6QIg6QIh6gIg3AIh6wIg6gIg6wJHIewCIOcCIOwCcSHtAkEBIe4CIO0CIO4CcSHvAgJAAkACQAJAIO8CRQ0AIOMCKAIAIfACIPACIDkgOhDnAiHxAiDxAkUNAQwCC0F/IfICIPICIfMCDAILIOMCIOkCEAAACyDpAhACIPECIfMCCyDzAiH0AhADIfUCQQEh9gIg9AIg9gJGIfcCIMACISsgOSEsIPUCIS0g9wINACAEKAK4ASH4AgJAAkACQAJAAkACQCD4Ag0AQQAh+QJBAiH6AkEKIfsCIAQoAsgBIfwCQQAh/QIg/QIg+QI2AtyoAiD6AiD8AiD7AhAEIf4CQQAh/wIg/wIoAtyoAiGAA0EAIYEDIIEDIPkCNgLcqAIggAMhggMg+QIhgwMgggMggwNHIYQDQQAhhQMghQMoAuCoAiGGAyCGAyGHAyD5AiGIAyCHAyCIA0chiQMghAMgiQNxIYoDQQEhiwMgigMgiwNxIYwDIIwDDQEMAgsgOSEQDAYLIIADKAIAIY0DII0DIDkgOhDnAiGOAyCOA0UNAQwCC0F/IY8DII8DIZADDAILIIADIIYDEAAACyCGAxACII4DIZADCyCQAyGRAxADIZIDQQEhkwMgkQMgkwNGIZQDIMACISsgOSEsIJIDIS0glAMNACD+AkUNA0EAIZUDIAQoAsgBIZYDIJYDKAIMIZcDIJcDKAIAIZgDIAQoAsgBIZkDIJkDKAIMIZoDIJoDKAIQIZsDIAQoAsgBIZwDIJwDKAIAIZ0DQQAhngMgngMoAtiQAiGfAyAEKALEASGgA0EAIaEDIKEDIJUDNgLcqAIgBCCgAzYCAEH4gwEhogNBAyGjAyCYAyCbAyCdAyCjAyCfAyCiAyAEEAVBACGkA0EAIaUDIKUDKALcqAIhpgNBACGnAyCnAyCkAzYC3KgCIKYDIagDIKQDIakDIKgDIKkDRyGqA0EAIasDIKsDKALgqAIhrAMgrAMhrQMgpAMhrgMgrQMgrgNHIa8DIKoDIK8DcSGwA0EBIbEDILADILEDcSGyAwJAAkACQAJAILIDRQ0AIKYDKAIAIbMDILMDIDkgOhDnAiG0AyC0A0UNAQwCC0F/IbUDILUDIbYDDAILIKYDIKwDEAAACyCsAxACILQDIbYDCyC2AyG3AxADIbgDQQEhuQMgtwMguQNGIboDIMACISsgOSEsILgDIS0gugMNAAwCCwALIBAhuwNBACG8AyAEILwDNgLMASC7AyG9AwwCCwtBAyG+AyAEIL4DNgLMASA5Ib0DCyC9AyG/AyAEKALMASHAAyC/AxDqAkHQASHBAyAEIMEDaiHCAwJAIMIDIsQDIwJLIMQDIwNJcgRAEBwLIMQDJAALIMADDwsNAQF/QamHASEAIAAPCw0BAX9BoooBIQAgAA8LjgcBa38jACEEQTAhBSAEIAVrIQYCQCAGIm0jAksgbSMDSXIEQBAcCyBtJAALQQAhByAGIAA2AiwgBiABNgIoIAYgAjYCJCAGIAM2AiAgBigCLCEIIAYgCDYCFCAGKAIoIQkgBigCFCEKIAogCTYCECAGIAc2AhgCQANAQQshCyAGKAIYIQwgDCENIAshDiANIA5IIQ9BASEQIA8gEHEhESARRQ0BQQAhEiAGKAIUIRNBFCEUIBMgFGohFSAGKAIYIRZBAiEXIBYgF3QhGCAVIBhqIRkgGSASNgIAIAYoAhghGkEBIRsgGiAbaiEcIAYgHDYCGAwACwALQQAhHSAGIB02AhwCQANAIAYoAhwhHiAGKAIkIR8gHiEgIB8hISAgICFJISJBASEjICIgI3EhJCAkRQ0BQQAhJSAGICU2AhAgBiAlNgIYAkADQEELISYgBigCGCEnICchKCAmISkgKCApSCEqQQEhKyAqICtxISwgLEUNAUGwkAIhLSAGKAIYIS5BAiEvIC4gL3QhMCAtIDBqITEgMSgCACEyIAYoAiAhMyAGKAIcITRBAiE1IDQgNXQhNiAzIDZqITcgNygCACE4IDIgOBCoAiE5AkAgOQ0AQQEhOiAGKAIoITsgBigCFCE8QRQhPSA8ID1qIT4gBigCGCE/QQIhQCA/IEB0IUEgPiBBaiFCIEIgOzYCACAGIDo2AhAMAgsgBigCGCFDQQEhRCBDIERqIUUgBiBFNgIYDAALAAsgBigCECFGAkAgRg0AIAYoAhQhRyBHKAIMIUggSCgCACFJIAYoAhQhSiBKKAJAIUsgBigCFCFMIEwoAgAhTUEAIU4gTigCyJACIU8gBigCICFQIAYoAhwhUUECIVIgUSBSdCFTIFAgU2ohVCBUKAIAIVUgBiBVNgIAQYSNASFWQQEhVyBLIE0gVyBPIFYgBiBJEQQACyAGKAIcIVhBASFZIFggWWohWiAGIFo2AhwMAAsAC0EKIVsgBigCFCFcIFwgWxBgIV0CQCBdRQ0AIAYoAhQhXiBeKAIMIV8gXygCACFgIAYoAhQhYSBhKAIMIWIgYigCECFjIAYoAhQhZCBkKAIAIWVBACFmIGYoAtiQAiFnQbCPASFoQQAhaSBjIGUgaSBnIGggaSBgEQQAC0EAIWpBMCFrIAYga2ohbAJAIGwibiMCSyBuIwNJcgRAEBwLIG4kAAsgag8LvyECpAN/B34jACEHQeAAIQggByAIayEJAkAgCSKpAyMCSyCpAyMDSXIEQBAcCyCpAyQAC0EAIQogCSAANgJYIAkgATYCVCAJIAI2AlAgCSADNgJMIAkgBDYCSCAJIAU2AkQgCSAGNgJAQQAhCyALKALUoAIhDCAMEPMCIQ0gCSANNgI8IAkoAkghDiAOKAIAIQ8gDyEQIAohESAQIBFHIRJBASETIBIgE3EhFAJAAkAgFA0AQQAhFSAJIBU2AlwMAQtBACEWIAkoAkghFyAXKAIEIRggGCEZIBYhGiAZIBpHIRtBASEcIBsgHHEhHQJAAkAgHUUNAEEAIR4gCSgCSCEfIB8oAgghICAgISEgHiEiICEgIkchI0EBISQgIyAkcSElICUNAQsgCSgCSCEmICYoAgAhJyAJKAJIISggKCgCECEpIAkoAlghKkHskwEhK0H+kQEhLEEAIS1BAyEuICkgKiAuICwgKyAtICcRBABBACEvIAkgLzYCXAwBC0EAITAgCSgCPCExIDAhMiAxITMgMiAzRiE0QQEhNSA0IDVxITYCQCA2RQ0AQQAhNyA3KQKkkQIhqwMgNyCrAzcC/JACIDcpApyRAiGsAyA3IKwDNwL0kAIgNykClJECIa0DIDcgrQM3AuyQAiA3KQKMkQIhrgMgNyCuAzcC5JACIDcpAoSRAiGvAyA3IK8DNwLckAILQQAhOBDSAUEAITkgOSgC3JACITogOhEKACAJKAJYITsgOyE8IDghPSA8ID1HIT5BASE/ID4gP3EhQAJAAkAgQEUNACAJKAJYIUEgQRCCAyFCIEINAQsgCSgCSCFDIEMoAgAhRCAJKAJIIUUgRSgCECFGIAkoAlghR0GKlgEhSEH+kQEhSUEAIUpBAyFLIEYgRyBLIEkgSCBKIEQRBABBACFMIAkgTDYCXAwBCyAJKAJQIU1B95cBIU4gTSBOEKgCIU8CQCBPRQ0AIAkoAkghUCBQKAIAIVEgCSgCSCFSIFIoAhAhUyAJKAJYIVQgCSgCUCFVQfeXASFWIAkgVjYCBCAJIFU2AgBB8JkBIVdB/pEBIVhBAyFZIFMgVCBZIFggVyAJIFERBABBACFaIAkgWjYCXAwBC0EAIVtBASFcQcABIV0gCSgCSCFeIF4oAgQhXyBcIF0gXxEBACFgIAkgYDYCOCAJKAI4IWEgYSFiIFshYyBiIGNHIWRBASFlIGQgZXEhZgJAIGZFDQBBACFnQQEhaEGYASFpQbgDIWpBjAIha0EUIWwgCSBnNgI0IAkgZzYCMCAJIGc2AiwgCSBnNgIoIAkoAkghbSBtKAIEIW4gCSgCWCFvIG8QggMhcEEBIXEgcCBxaiFyIHIgaCBuEQEAIXMgCSgCOCF0IHQgczYCACAJKAJIIXUgdSgCBCF2IAkoAlAhdyB3EIIDIXhBASF5IHggeWoheiB6IGggdhEBACF7IAkoAjghfCB8IHs2AgggCSgCSCF9IH0oAgQhfiBoIGwgfhEBACF/IAkoAjghgAEggAEgfzYCDCAJKAJIIYEBIIEBKAIEIYIBIGggbCCCAREBACGDASAJIIMBNgI0IAkoAkghhAEghAEoAgQhhQEgaCBrIIUBEQEAIYYBIAkghgE2AjAgCSgCSCGHASCHASgCBCGIASBoIGogiAERAQAhiQEgCSCJATYCLCAJKAIwIYoBIAkoAjQhiwEgiwEgigE2AgggCSgCLCGMASAJKAI0IY0BII0BIIwBNgIMIAkoAkghjgEgjgEoAgQhjwEgaCBpII8BEQEAIZABIAkgkAE2AiggCSgCKCGRAUGYASGSAUEAIZMBIJEBIJMBIJIBEPgCGiAJKAIoIZQBIAkoAjghlQEglQEglAE2AnAgCSgCPCGWASAJKAI4IZcBIJcBIJYBNgJ0IAkoAjQhmAEgCSgCOCGZASCZASCYATYCbCAJKAI4IZoBIAkoAighmwEgmwEgmgE2AjQgCSgCOCGcASCcASgCbCGdASCdASGeASBnIZ8BIJ4BIJ8BRyGgAUEBIaEBIKABIKEBcSGiAQJAIKIBDQAgCSgCSCGjASCjASgCACGkASAJKAJIIaUBIKUBKAIQIaYBIAkoAlghpwFBgZsBIagBQf6RASGpAUEAIaoBQQMhqwEgpgEgpwEgqwEgqQEgqAEgqgEgpAERBABBACGsASAJIKwBNgJcDAILQQAhrQEgCSCtATYCJAJAA0BBCyGuASAJKAIkIa8BIK8BIbABIK4BIbEBILABILEBSCGyAUEBIbMBILIBILMBcSG0ASC0AUUNASAJKAJAIbUBIAkoAjghtgFBFCG3ASC2ASC3AWohuAEgCSgCJCG5AUECIboBILkBILoBdCG7ASC4ASC7AWohvAEgvAEgtQE2AgAgCSgCJCG9AUEBIb4BIL0BIL4BaiG/ASAJIL8BNgIkDAALAAsLQQAhwAEgCSgCOCHBASDBASHCASDAASHDASDCASDDAUchxAFBASHFASDEASDFAXEhxgECQAJAIMYBRQ0AQQAhxwEgCSgCOCHIASDIASgCACHJASDJASHKASDHASHLASDKASDLAUchzAFBASHNASDMASDNAXEhzgEgzgFFDQBBACHPASAJKAI4IdABINABKAIIIdEBINEBIdIBIM8BIdMBINIBINMBRyHUAUEBIdUBINQBINUBcSHWASDWAUUNAEEAIdcBIAkoAjgh2AEg2AEoAgwh2QEg2QEh2gEg1wEh2wEg2gEg2wFHIdwBQQEh3QEg3AEg3QFxId4BIN4BDQELIAkoAkgh3wEg3wEoAgAh4AEgCSgCSCHhASDhASgCECHiASAJKAJYIeMBQeucASHkAUH+kQEh5QFBACHmAUEDIecBIOIBIOMBIOcBIOUBIOQBIOYBIOABEQQAQQAh6AEgCSDoATYCXAwBC0EAIekBQQEh6gFBECHrAUERIewBQQAh7QEg7QEoAtSgAiHuASAJKAI4Ie8BIO8BKAJwIfABIO4BIPABEPQCGkEAIfEBIPEBIOwBNgKskQJBACHyASDyASDrATYCsJECIAkoAjgh8wEg8wEoAgAh9AEgCSgCWCH1ASD0ASD1ARCnAhogCSgCVCH2ASAJKAI4IfcBIPcBIPYBNgIEIAkoAjgh+AEg+AEoAggh+QEgCSgCUCH6ASD5ASD6ARCnAhogCSgCOCH7ASD7ASgCDCH8ASAJKAJIIf0BIP0BKQAAIbADIPwBILADNwAAQRAh/gEg/AEg/gFqIf8BIP0BIP4BaiGAAiCAAigAACGBAiD/ASCBAjYAAEEIIYICIPwBIIICaiGDAiD9ASCCAmohhAIghAIpAAAhsQMggwIgsQM3AAAgCSgCSCGFAiCFAigCECGGAiAJKAI4IYcCIIcCIIYCNgJAIAkoAkAhiAIgCSgCOCGJAiCJAiCIAjYCECAJKAI4IYoCIIoCIOoBNgJEIAkoAkwhiwIgiwIQ5wEhjAIgCSCMAjYCTCAJKAJMIY0CII0CIY4CIOkBIY8CII4CII8CRyGQAkEBIZECIJACIJECcSGSAgJAAkAgkgJFDQBBASGTAiAJKAJIIZQCIJQCKAIEIZUCIAkoAkwhlgIglgIQggMhlwJBASGYAiCXAiCYAmohmQIgmQIgkwIglQIRAQAhmgIgCSgCOCGbAiCbAigCbCGcAiCcAigCCCGdAiCdAiCaAjYCbCAJKAI4IZ4CIJ4CKAJsIZ8CIJ8CKAIIIaACIKACKAJsIaECIAkoAkwhogIgoQIgogIQpwIaDAELQQQhowIgCSgCOCGkAiCkAiCjAhBgIaUCAkAgpQJFDQAgCSgCOCGmAiCmAigCDCGnAiCnAigCACGoAiAJKAI4IakCIKkCKAIMIaoCIKoCKAIQIasCIAkoAjghrAIgrAIoAgAhrQJBACGuAiCuAigCwJACIa8CIAkoAkwhsAIgCSCwAjYCIEHbngEhsQJBACGyAkEgIbMCIAkgswJqIbQCIKsCIK0CILICIK8CILECILQCIKgCEQQACwtBACG1AkEBIbYCQQAhtwIgtwIgtgI2AqScAkEAIbgCILgCILYCNgKonAIgCSgCOCG5AiC5AigCbCG6AiAJKAI4IbsCILsCKAJwIbwCILoCILwCEC4gCSgCOCG9AiC9AigCbCG+AiAJKAI4Ib8CIL8CKAJwIcACIL4CIMACEPkBIAkoAjghwQIgwQIQbyAJKAI4IcICIMICKAJsIcMCIMMCEPQBIAkoAjghxAIgxAIoAmwhxQIgxQIQ9QEgCSgCOCHGAiDGAigCbCHHAiDHAigCECHIAiDIAigC/AEhyQIgCSgCOCHKAiDKAigCbCHLAiDLAigCCCHMAiAJKAI4Ic0CIM0CKAJsIc4CIM4CKAIMIc8CIMwCIM8CIMkCEQUAIAkoAjgh0AIg0AIoAmwh0QIgCSgCOCHSAiDSAigCcCHTAiDRAiDTAhD+ASAJKAI4IdQCINQCILUCNgKkASAJKAI4IdUCINUCILUCNgKoASAJKAI4IdYCINYCKAJsIdcCINcCKAIQIdgCINgCKAKAAiHZAiDZAiHaAiC1AiHbAiDaAiDbAkch3AJBASHdAiDcAiDdAnEh3gICQCDeAkUNAEEBId8CQSAh4AIgCSgCSCHhAiDhAigCBCHiAiDfAiDgAiDiAhEBACHjAiAJKAI4IeQCIOQCIOMCNgKoASAJKAI4IeUCIOUCKAJsIeYCIOYCKAIQIecCIOcCKAKAAiHoAiAJKAI4IekCIOkCKAJsIeoCIAkoAjgh6wIg6wIoAnAh7AIgCSgCOCHtAiDtAigCqAEh7gIg6gIg7AIg7gIg6AIRAwAh7wICQCDvAg0AQQEh8AIgCSgCOCHxAiDxAiDwAjYCpAELC0EBIfICQQAh8wJBCCH0AkEDIfUCIAkoAkgh9gIg9gIoAgQh9wIg9QIg9AIg9wIRAQAh+AIgCSgCOCH5AiD5AiD4AjYCrAEgCSgCSCH6AiD6AigCBCH7AiD1AiD0AiD7AhEBACH8AiAJKAI4If0CIP0CIPwCNgKwASAJKAJIIf4CIP4CKAIEIf8CIPMCIPQCIP8CEQEAIYADIAkoAjghgQMggQMggAM2ArQBIAkoAkghggMgggMoAgQhgwMg8wIg9AIggwMRAQAhhAMgCSgCOCGFAyCFAyCEAzYCuAEgCSgCOCGGAyCGAyDzAjYCvAEgCSgCOCGHAyCHAyDyAjYCoAEgCSgCOCGIAyCIAygCBCGJAyDyAiGKAyCJAyGLAyCKAyCLA0YhjANBASGNAyCMAyCNA3EhjgMCQAJAII4DRQ0AIAkoAjghjwMgjwMQcBoMAQtBACGQAyAJKAI4IZEDIJEDIJADNgJoC0EKIZIDIAkoAjghkwMgkwMgkgMQYCGUAwJAIJQDRQ0AIAkoAjghlQMglQMoAgwhlgMglgMoAgAhlwMgCSgCOCGYAyCYAygCDCGZAyCZAygCECGaAyAJKAI4IZsDIJsDKAIAIZwDQQAhnQMgnQMoAtiQAiGeAyAJKAJQIZ8DIAkgnwM2AhBBk6ABIaADQQAhoQNBECGiAyAJIKIDaiGjAyCaAyCcAyChAyCeAyCgAyCjAyCXAxEEAAsgCSgCOCGkAyCkAxBkIAkoAjghpQMgCSClAzYCXAsgCSgCXCGmA0HgACGnAyAJIKcDaiGoAwJAIKgDIqoDIwJLIKoDIwNJcgRAEBwLIKoDJAALIKYDDwuKAgIZfwN+IwAhA0EgIQQgAyAEayEFAkAgBSIaIwJLIBojA0lyBEAQHAsgGiQAC0EYIQYgBSAGaiEHIAchCCAFIAE2AhwgCCACNgIAQQAhCSAJKALUoAIhCiAKEPMCIQsgBSgCHCEMIAUoAhghDUEQIQ4gACAOaiEPIA8pAgAhHCAFIA5qIRAgECAcNwMAQQghESAAIBFqIRIgEikCACEdIAUgEWohEyATIB03AwAgACkCACEeIAUgHjcDAEEEIRRBASEVIAsgFSAUIAUgDCANEHFBGCEWIAUgFmohFyAXGkEBGkEEGkEgIRggBSAYaiEZAkAgGSIbIwJLIBsjA0lyBEAQHAsgGyQACw8LmQICHX8DfiMAIQRBMCEFIAQgBWshBgJAIAYiICMCSyAgIwNJcgRAEBwLICAkAAtBJCEHIAYgB2ohCCAIIQkgBiAANgIsIAYgAjYCKCAJIAM2AgAgBigCLCEKIAYoAighCyAGKAIkIQxBECENIAEgDWohDiAOKQIAISFBCCEPIAYgD2ohECAQIA1qIREgESAhNwMAQQghEiABIBJqIRMgEykCACEiQQghFCAGIBRqIRUgFSASaiEWIBYgIjcDACABKQIAISMgBiAjNwMIQQYhF0EDIRhBCCEZIAYgGWohGiAKIBggFyAaIAsgDBBxQQEhG0EkIRwgBiAcaiEdIB0aQQMaQQYaIAYoAiwhHiAeKAIAIR8gHyAbEAAAC58DAih/BnwjACEBQRAhAiABIAJrIQNEAAAAAAAAJEAhKUQ9CtejcP1YQCEqRFZVVVVVVQVAIStBACEEIAS3ISxEAAAAAAAA8D8hLUQAAAAAAADwvyEuIAMgADYCDCADKAIMIQUgBSgCbCEGIAYoAgghByAHKAIAIQggCCAuOQNQIAMoAgwhCSAJKAJsIQogCigCCCELIAsoAgAhDCAMIC05A7ABIAMoAgwhDSANKAJsIQ4gDigCCCEPIA8oAgAhECAQICw5A5ACIAMoAgwhESARKAJsIRIgEigCCCETIBMoAgAhFCAUICw5A/ACIAMoAgwhFSAVKAJsIRYgFigCCCEXIBcoAgAhGCAYICw5A9ADIAMoAgwhGSAZKAJsIRogGigCCCEbIBsoAgAhHCAcICw5A7AEIAMoAgwhHSAdKAJsIR4gHigCCCEfIB8oAhAhICAgICs5A1AgAygCDCEhICEoAmwhIiAiKAIIISMgIygCECEkICQgKjkDsAEgAygCDCElICUoAmwhJiAmKAIIIScgJygCECEoICggKTkDkAIPC8QTA/kBfwN+BHwjACEBQeAAIQIgASACayEDAkAgAyL4ASMCSyD4ASMDSXIEQBAcCyD4ASQAC0EJIQRB498BIQVBv98BIQZBACEHQQEhCEEAIQkgCbch/QFB2AAhCiADIAA2AlwgAygCXCELIAsoAgwhDCADIAw2AlggAygCXCENIA0oAmwhDiADIA42AlQgAygCXCEPIA8oAnAhECADIBA2AlAgAygCWCERIBEoAgQhEiAIIAogEhEBACETIAMgEzYCTCADKAJMIRQgFCD9ATkDACADKAJMIRUgFSD9ATkDCCADKAJMIRYgFiD9ATkDECADKAJMIRcgFyAJNgIYIAMoAkwhGCAYIAc6ACggAygCTCEZIBkgBzoAKSADKAJMIRogGisDACH+ASADKAJMIRsgGysDCCH/ASD+ASD/AaAhgAIgAygCTCEcIBwggAI5AzAgAygCTCEdIB0gCTYCOCADKAJMIR4gHiAJNgI8IAMoAkwhHyAfIAk2AkAgAygCTCEgICAgCTYCRCADKAJMISEgISAJNgJIIAMoAkwhIiAiIAk2AkwgAygCWCEjICMoAgQhJCADKAJcISUgJSgCbCEmICYoAgghJyAnKAJsISggKBCCAyEpIAMoAlwhKiAqKAJsISsgKygCCCEsICwoAlghLSAtEIIDIS4gKSAuaiEvQRQhMCAvIDBqITEgMSAIICQRAQAhMiADIDI2AkAgAygCQCEzIDMgBzoAACADKAJAITQgAygCXCE1IDUoAmwhNiA2KAIIITcgNygCbCE4IDQgOBCjAhogAygCQCE5IDkgBhCjAhogAygCQCE6IAMoAlwhOyA7KAJsITwgPCgCCCE9ID0oAlghPiA6ID4QowIaIAMoAkAhPyA/IAUQowIaIAMoAlwhQCBAIAQQYCFBAkAgQUUNACADKAJcIUIgQigCDCFDIEMoAgAhRCADKAJcIUUgRSgCDCFGIEYoAhAhRyADKAJcIUggSCgCACFJQQAhSiBKKALUkAIhSyADKAJAIUwgAyBMNgIgQaXgASFNQQAhTkEgIU8gAyBPaiFQIEcgSSBOIEsgTSBQIEQRBAALQX8hUUEAIVIgAygCQCFTIFMgUhCbAiFUIFQhVSBRIVYgVSBWRyFXQQEhWCBXIFhxIVkCQAJAIFlFDQBBCSFaIAMoAlwhWyBbIFoQYCFcAkAgXEUNACADKAJcIV0gXSgCDCFeIF4oAgAhXyADKAJcIWAgYCgCDCFhIGEoAhAhYiADKAJcIWMgYygCACFkQQAhZSBlKALUkAIhZiADKAJAIWcgAyBnNgIQQaLhASFoQQAhaUEQIWogAyBqaiFrIGIgZCBpIGYgaCBrIF8RBAALQTAhbCADIGxqIW0gbSFuQTghbyADIG9qIXAgcCFxQgAh+gEgcSD6ATcCACADKAJAIXIgbiByENMBIG4pAgAh+wEgcSD7ATcCACADKAJMIXMgAygCPCF0IHMgdBByIAMpAzgh/AEgAyD8ATcDCEEIIXUgAyB1aiF2IHYQ1QEMAQtBCSF3IAMoAlwheCB4IHcQYCF5AkAgeUUNACADKAJcIXogeigCDCF7IHsoAgAhfCADKAJcIX0gfSgCDCF+IH4oAhAhfyADKAJcIYABIIABKAIAIYEBQQAhggEgggEoAtSQAiGDAUH54QEhhAFBACGFASB/IIEBIIUBIIMBIIQBIIUBIHwRBAALQQEhhgEgAygCTCGHASCHASCGATYCGAtBASGIASADKAJUIYkBIIkBKAIIIYoBIIoBKAKEASGLASCLASGMASCIASGNASCMASCNAUghjgFBASGPASCOASCPAXEhkAECQCCQAUUNAEEJIZEBIAMoAlwhkgEgkgEgkQEQYCGTAQJAIJMBRQ0AIAMoAlwhlAEglAEoAgwhlQEglQEoAgAhlgEgAygCXCGXASCXASgCDCGYASCYASgCECGZASADKAJcIZoBIJoBKAIAIZsBQQAhnAEgnAEoAtSQAiGdAUHr4gEhngFBACGfASCZASCbASCfASCdASCeASCfASCWAREEAAtBASGgASADKAJMIaEBIKEBIKABNgIYCyADKAJMIaIBIKIBKAIYIaMBQX8hpAEgowEgpAFqIaUBQQkhpgEgpQEgpgFLGgJAAkACQAJAIKUBDgoAAgICAgICAgIBAgtBACGnASADIKcBNgJEDAILQQkhqAFBACGpAUEBIaoBQQAhqwEgqwEgqgE2AqidAiADIKkBNgJIIAMoAlwhrAEgrAEgqAEQYCGtAQJAIK0BRQ0AIAMoAlwhrgEgrgEoAgwhrwEgrwEoAgAhsAEgAygCXCGxASCxASgCDCGyASCyASgCECGzASADKAJcIbQBILQBKAIAIbUBQQAhtgEgtgEoAtSQAiG3AUHa4wEhuAFBACG5ASCzASC1ASC5ASC3ASC4ASC5ASCwAREEAAtBACG6AUEBIbsBIAMoAlghvAEgvAEoAgQhvQEguwEguwEgvQERAQAhvgEgAyC+ATYCSCADKAJIIb8BIL8BIcABILoBIcEBIMABIMEBRyHCAUEBIcMBIMIBIMMBcSHEAQJAIMQBDQBBBiHFASADKAJcIcYBIMYBIMUBEGAhxwECQCDHAUUNACADKAJcIcgBIMgBKAIMIckBIMkBKAIAIcoBIAMoAlwhywEgywEoAgwhzAEgzAEoAhAhzQEgAygCXCHOASDOASgCACHPAUEAIdABINABKALIkAIh0QFB65wBIdIBQQAh0wFBAyHUASDNASDPASDUASDRASDSASDTASDKAREEAAsLQQAh1QFBASHWASADKAJUIdcBIAMoAlAh2AEgAygCTCHZASADKAJIIdoBINcBINgBINkBINoBINYBEFwh2wEgAyDbATYCRCADKAJIIdwBIAMoAkwh3QEg3QEg3AE2AlRBACHeASDeASDVATYCqJ0CDAELQQYh3wEgAygCXCHgASDgASDfARBgIeEBAkAg4QFFDQAgAygCXCHiASDiASgCDCHjASDjASgCACHkASADKAJcIeUBIOUBKAIMIeYBIOYBKAIQIecBIAMoAlwh6AEg6AEoAgAh6QFBACHqASDqASgCyJACIesBQaHkASHsAUEAIe0BQQMh7gEg5wEg6QEg7gEg6wEg7AEg7QEg5AERBAALQX8h7wEgAyDvATYCRAsgAygCWCHwASDwASgCCCHxASADKAJAIfIBIPIBIPEBEQAAIAMoAkwh8wEgAygCXCH0ASD0ASDzATYCaCADKAJEIfUBQeAAIfYBIAMg9gFqIfcBAkAg9wEi+QEjAksg+QEjA0lyBEAQHAsg+QEkAAsg9QEPC7sEATt/IwAhBkEwIQcgBiAHayEIAkAgCCI/IwJLID8jA0lyBEAQHAsgPyQAC0EYIQkgCCAJaiEKIAohCyAIIAA2AiwgCCABNgIoIAggAjYCJCAIIAQ2AiAgCCAFNgIcIAgoAiwhDCAMKAI0IQ0gCCANNgIUIAgoAiAhDiAIKAIcIQ8gCyAOIA8QwgEaIAMoAgQhEAJAAkAgEEUNACAIKAIUIREgCCgCJCESIBEgEhBgIRMCQCATRQ0AQbCQAiEUIAgoAhQhFSAVKAIMIRYgFigCACEXIAgoAhQhGCAYKAIMIRkgGSgCECEaIAgoAhQhGyAbKAIAIRwgCCgCKCEdIAgoAiQhHkECIR8gHiAfdCEgIBQgIGohISAhKAIAISIgAygCACEjIAMoAgQhJCAIKAIYISUgCCAlNgIIIAggJDYCBCAIICM2AgBB+vABISYgGiAcIB0gIiAmIAggFxEEAAsMAQsgCCgCFCEnIAgoAiQhKCAnICgQYCEpAkAgKUUNAEGwkAIhKiAIKAIUISsgKygCDCEsICwoAgAhLSAIKAIUIS4gLigCDCEvIC8oAhAhMCAIKAIUITEgMSgCACEyIAgoAighMyAIKAIkITRBAiE1IDQgNXQhNiAqIDZqITcgNygCACE4IAgoAhghOSAIIDk2AhBBy/EBITpBECE7IAggO2ohPCAwIDIgMyA4IDogPCAtEQQACwtBMCE9IAggPWohPgJAID4iQCMCSyBAIwNJcgRAEBwLIEAkAAsPC4gGAV9/IwAhAkEgIQMgAiADayEEAkAgBCJfIwJLIF8jA0lyBEAQHAsgXyQAC0EAIQVBIiEGQegHIQcgBCAANgIcIAQgATYCGCAEIAc2AgwgBCgCGCEIQRghCSAGIAl0IQogCiAJdSELIAggCxCmASEMIAQgDDYCGCAEIAU2AhADQEEAIQ0gBCgCGCEOIA4tAAAhD0EYIRAgDyAQdCERIBEgEHUhEiANIRMCQCASRQ0AQegHIRQgBCgCECEVIBUhFiAUIRcgFiAXSCEYIBghEwsgEyEZQQEhGiAZIBpxIRsCQCAbRQ0AQQEhHCAEKAIQIR1BASEeIB0gHmohHyAEIB82AhAgBCAcNgIUAkADQEEDISAgBCgCFCEhICEhIiAgISMgIiAjSCEkQQEhJSAkICVxISYgJkUNAUGgkwIhJ0G8+QEhKCAEKAIUISlBAiEqICkgKnQhKyAoICtqISwgLCgCACEtQQIhLiAtIC50IS8gJyAvaiEwIDAoAgAhMSAxEKcBITIgBCAyNgIIIAQoAhghMyAEKAIIITQgBCgCFCE1QQIhNiA1IDZ0ITcgKCA3aiE4IDgoAgAhOUECITogOSA6dCE7ICcgO2ohPCA8KAIAIT0gPRCCAyE+QQIhPyA+ID9qIUAgMyA0IEAQqQIhQQJAIEENACAEKAIYIUJBOiFDIEIgQxCmASFEIAQgRDYCGCAEKAIYIUVBIiFGIEUgRhCmASFHIAQgRzYCGCAEKAIUIUhBASFJIEggSUchSgJAAkAgSg0AIAQoAhwhSyAEKAIYIUwgSyBMEKgBIU0gBCBNNgIYDAELQQohTiAEKAIYIU9BGCFQIE4gUHQhUSBRIFB1IVIgTyBSEKYBIVMgBCBTNgIYCwsgBCgCFCFUQQEhVSBUIFVqIVYgBCBWNgIUDAALAAtBIiFXIAQoAhghWEEYIVkgVyBZdCFaIFogWXUhWyBYIFsQpgEhXCAEIFw2AhgMAQsLQSAhXSAEIF1qIV4CQCBeImAjAksgYCMDSXIEQBAcCyBgJAALDwu1DQGzAX8jACEBQSAhAiABIAJrIQMCQCADIrIBIwJLILIBIwNJcgRAEBwLILIBJAALQeuhASEEQe8AIQUgAyAANgIcIAMoAhwhBiADIAY2AhggAygCGCEHIAcoAgwhCCAIKAIIIQkgAyAJNgIUIAMgBTYCECADIAU2AgwgAygCGCEKIAMoAhAhCyADKAIMIQwgCiAEIAsgDBBnIQ0CQAJAIA1FDQAMAQtBCiEOIAMoAhghDyAPIA4QYCEQAkAgEEUNACADKAIYIREgESgCDCESIBIoAgAhEyADKAIYIRQgFCgCDCEVIBUoAhAhFiADKAIYIRcgFygCACEYQQAhGSAZKALYkAIhGkHroQEhG0EAIRwgFiAYIBwgGiAbIBwgExEEAAtBASEdIAMoAhghHiAeKAJsIR8gHygCECEgICAoAgwhISADKAIYISIgIigCbCEjIAMoAhghJCAkKAJwISUgIyAlICERBQAgAygCGCEmICYoAmwhJyAnEPoBIAMoAhghKCAoKAKkASEpICkhKiAdISsgKiArRiEsQQEhLSAsIC1xIS4CQCAuRQ0AQQAhLyADKAIYITAgMCgCqAEhMSAxKAIQITIgMhDqAiADKAIYITMgMygCqAEhNCA0IC82AhAgAygCGCE1IDUoAqgBITYgNigCGCE3IDcQ6gIgAygCGCE4IDgoAqgBITkgOSAvNgIYIAMoAhghOiA6KAKoASE7IDsoAhQhPCA8EOoCIAMoAhghPSA9KAKoASE+ID4gLzYCFCADKAIYIT8gPygCqAEhQCBAKAIMIUEgQSgCACFCIEIQ6gIgAygCGCFDIEMoAqgBIUQgRCgCDCFFIEUgLzYCACADKAIYIUYgRigCqAEhRyBHKAIMIUggSCgCBCFJIEkQ6gIgAygCGCFKIEooAqgBIUsgSygCDCFMIEwgLzYCBCADKAIYIU0gTSgCqAEhTiBOKAIMIU8gTygCDCFQIFAQ6gIgAygCGCFRIFEoAqgBIVIgUigCDCFTIFMgLzYCDCADKAIYIVQgVCgCqAEhVSBVKAIMIVYgVhDqAiADKAIYIVcgVygCqAEhWCBYIC82AgwgAygCFCFZIAMoAhghWiBaKAKoASFbIFsgWREAACADKAIYIVwgXCAvNgKoAQtBACFdIAMoAhQhXiADKAIYIV8gXygCrAEhYCBgIF4RAAAgAygCGCFhIGEgXTYCrAEgAygCFCFiIAMoAhghYyBjKAKwASFkIGQgYhEAACADKAIYIWUgZSBdNgKwASADKAIUIWYgAygCGCFnIGcoArQBIWggaCBmEQAAIAMoAhghaSBpIF02ArQBIAMoAhQhaiADKAIYIWsgaygCuAEhbCBsIGoRAAAgAygCGCFtIG0gXTYCuAEgAygCFCFuIAMoAhghbyBvKAK8ASFwIHAgbhEAACADKAIYIXEgcSBdNgK8ASADKAIUIXIgAygCGCFzIHMoAmwhdCB0KAIIIXUgdSgCbCF2IHYgchEAACADKAIYIXcgdygCaCF4IHgheSBdIXogeSB6RyF7QQEhfCB7IHxxIX0CQCB9RQ0AIAMoAhghfiB+EHQaC0EAIX8gAygCFCGAASADKAIYIYEBIIEBKAJsIYIBIIIBKAIIIYMBIIMBIIABEQAAIAMoAhQhhAEgAygCGCGFASCFASgCbCGGASCGASgCDCGHASCHASCEAREAACADKAIUIYgBIAMoAhghiQEgiQEoAnAhigEgigEgiAERAAAgAygCFCGLASADKAIYIYwBIIwBKAJsIY0BII0BIIsBEQAAIAMoAhghjgEgjgEoAgAhjwEgjwEhkAEgfyGRASCQASCRAUchkgFBASGTASCSASCTAXEhlAECQCCUAUUNACADKAIUIZUBIAMoAhghlgEglgEoAgAhlwEglwEglQERAAALQQAhmAEgAygCGCGZASCZASgCCCGaASCaASGbASCYASGcASCbASCcAUchnQFBASGeASCdASCeAXEhnwECQCCfAUUNACADKAIUIaABIAMoAhghoQEgoQEoAgghogEgogEgoAERAAALQQAhowEgAygCGCGkASCkASgCDCGlASClASGmASCjASGnASCmASCnAUchqAFBASGpASCoASCpAXEhqgECQCCqAUUNACADKAIUIasBIAMoAhghrAEgrAEoAgwhrQEgrQEgqwERAAALIAMoAhQhrgEgAygCGCGvASCvASCuAREAABCpAQtBICGwASADILABaiGxAQJAILEBIrMBIwJLILMBIwNJcgRAEBwLILMBJAALDwveBAFAfyMAIQFBICECIAEgAmshAwJAIAMiPyMCSyA/IwNJcgRAEBwLID8kAAtBCSEEIAMgADYCHCADKAIcIQUgBSgCDCEGIAMgBjYCDCADKAIcIQcgBygCbCEIIAMgCDYCGCADKAIcIQkgCSgCcCEKIAMgCjYCFCADKAIcIQsgCygCaCEMIAMgDDYCECADKAIcIQ0gDSAEEGAhDgJAIA5FDQAgAygCHCEPIA8oAgwhECAQKAIAIREgAygCHCESIBIoAgwhEyATKAIQIRQgAygCHCEVIBUoAgAhFkEAIRcgFygC1JACIRhBrOUBIRlBACEaIBQgFiAaIBggGSAaIBERBAALIAMoAhAhGyAbKAIYIRxBfyEdIBwgHWohHkEJIR8gHiAfSxoCQAJAAkACQCAeDgoAAgICAgICAgIBAgtBACEgIAMgIDYCCAwCCyADKAIQISEgISgCVCEiICIQXSEjIAMgIzYCCAwBC0EGISQgAygCHCElICUgJBBgISYCQCAmRQ0AIAMoAhwhJyAnKAIMISggKCgCACEpIAMoAhwhKiAqKAIMISsgKygCECEsIAMoAhwhLSAtKAIAIS5BACEvIC8oAsiQAiEwQf/lASExQQAhMkEDITMgLCAuIDMgMCAxIDIgKREEAAtBfyE0IAMgNDYCCAtBACE1IAMoAhwhNiA2KAIMITcgNygCCCE4IAMoAhwhOSA5KAJoITogOiA4EQAAIAMoAhwhOyA7IDU2AmggAygCCCE8QSAhPSADID1qIT4CQCA+IkAjAksgQCMDSXIE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IKMBIaUBIJgBIaYBIKUBIKYBRyGnAUEAIagBIKgBKALgqAIhqQEgqQEhqgEgmAEhqwEgqgEgqwFHIawBIKcBIKwBcSGtAUEBIa4BIK0BIK4BcSGvAQJAAkACQAJAIK8BRQ0AIKMBKAIAIbABILABIJQBIJUBEOcCIbEBILEBRQ0BDAILQX8hsgEgsgEhswEMAgsgowEgqQEQAAALIKkBEAIgsQEhswELILMBIbQBEAMhtQFBASG2ASC0ASC2AUYhtwEglQEhKyCUASEsILUBIS0gtwENAkEAIbgBQQohuQEgBSgCxAEhugEgugEoAmwhuwFBACG8ASC8ASC4ATYC3KgCILkBILsBEAZBACG9ASC9ASgC3KgCIb4BQQAhvwEgvwEguAE2AtyoAiC+ASHAASC4ASHBASDAASDBAUchwgFBACHDASDDASgC4KgCIcQBIMQBIcUBILgBIcYBIMUBIMYBRyHHASDCASDHAXEhyAFBASHJASDIASDJAXEhygECQAJAAkACQCDKAUUNACC+ASgCACHLASDLASCUASCVARDnAiHMASDMAUUNAQwCC0F/Ic0BIM0BIc4BDAILIL4BIMQBEAAACyDEARACIMwBIc4BCyDOASHPARADIdABQQEh0QEgzwEg0QFGIdIBIJUBISsglAEhLCDQASEtINIBDQJBACHTASAFKALEASHUASDUASDTATYCoAELQQAh1QEgBSDVATYCzAEDQCAFKALMASHWASAFKALQASHXASDWASHYASDXASHZASDYASDZAUkh2gFBASHbASDaASDbAXEh3AECQAJAAkACQAJAAkAg3AFFDQBBACHdAUEWId4BQZiQAiHfASAFKALMASHgAUECIeEBIOABIOEBdCHiASDfASDiAWoh4wEg4wEoAgAh5AEgBSDkATYCGCAFKALEASHlASAFKAIYIeYBQQAh5wEg5wEg3QE2AtyoAiDeASDlASDmARAOIc4DQQAh6AEg6AEoAtyoAiHpAUEAIeoBIOoBIN0BNgLcqAIg6QEh6wEg3QEh7AEg6wEg7AFHIe0BQQAh7gEg7gEoAuCoAiHvASDvASHwASDdASHxASDwASDxAUch8gEg7QEg8gFxIfMBQQEh9AEg8wEg9AFxIfUBIPUBDQEMAgtBASH2ASAFIPYBNgLIAQwGCyDpASgCACH3ASD3ASCUASCV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KAKIASFaQQMhWyBaIFt0IVwgWSBcaiFdIF0rAwAh+wEgBisDUCH8ASAGKAKQASFeIF4oAmwhXyBfKAIEIWAgYCgCACFhIGErAwAh/QEg/AEg/QGhIf4BIAYoAmwhYiAGKAKIASFjQQMhZCBjIGR0IWUgYiBlaiFmIGYrAwAh/wEg/gEg/wGiIYACIPsBIIACoCGBAiAGKAJwIWcgBigCiAEhaEEDIWkgaCBpdCFqIGcgamohayBrIIECOQMAIAYoAogBIWxBASFtIGwgbWohbiAGIG42AogBDAALAAsMAgtBACFvIAYoApABIXAgcCgCbCFxIAYoApABIXIgcigCcCFzIAYoApABIXQgdCgCaCF1IAYrA1AhggIgBigCcCF2IAYoApABIXcgcSBzIHUgggIgdiB3EF4heCAGIHg2AnwgBigCfCF5IHkheiBvIXsgeiB7SCF8QQEhfSB8IH1xIX4CQCB+RQ0AQQchfyAGKAKQASGAASCAASB/EGAhgQECQCCBAUUNACAGKAKQASGCASCCASgCDCGDASCDASgCACGEASAGKAKQASGFASCFASgCDCGGASCGASgCECGHASAGKAKQASGIASCIASgCACGJAUEAIYoBIIoBKALMkAIhiwFBrtwBIYwBQQAhjQFBBCGOASCHASCJASCOASCLASCMASCNASCEAREEAAtBBCGPASAGII8BNgKsAQwFCwwBC0EHIZABIAYoApABIZEBIJEBIJABEGAhkgECQCCSAUUNACAGKAKQASGTASCTASgCDCGUASCUASgCACGVASAGKAKQASGWASCWASgCDCGXASCXASgCECGYASAGKAKQASGZASCZASgCACGaAUEAIZsBIJsBKALMkAIhnAEgBigCkAEhnQEgnQEoAmghngEgngEoAhghnwEgBiCfATYCAEHd3AEhoAFBBCGhASCYASCaASChASCcASCgASAGIJUBEQQAC0EEIaIBIAYgogE2AqwBDAMLQQMhowEgBigCqAEhpAEgBisDUCGDAiCkASCDAhCWARogBigCqAEhpQEgBigCcCGmASClASCmASCjARCXASGnASAGIKcBNgJ0IAYoAnQhqAECQCCoAUUNAEEDIakBIAYgqQE2AnQMAQtBASGqAUHEACGrASAGIKsBaiGsASCsASGtAUHAACGuASAGIK4BaiGvASCvASGw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ATYCCCAGIAI2AgQPC9YCAS1/IwAhAUEQIQIgASACayEDQQAhBCADIAA2AgggAyAENgIEAkACQANAIAMoAgQhBSADKAIIIQYgBigCCCEHIAcoArgBIQggBSEJIAghCiAJIApIIQtBASEMIAsgDHEhDSANRQ0BIAMoAgghDiAOKAIMIQ8gDygC3AEhECADKAIEIREgECARaiESIBItAAAhE0EYIRQgEyAUdCEVIBUgFHUhFiADKAIIIRcgFygCDCEYIBgoAtgBIRkgAygCBCEaIBkgGmohGyAbLQAAIRxBGCEdIBwgHXQhHiAeIB11IR8gFiEgIB8hISAgICFHISJBASEjICIgI3EhJAJAICRFDQBBASElIAMgJToADwwDCyADKAIEISZBASEnICYgJ2ohKCADICg2AgQMAAsAC0EAISkgAyApOgAPCyADLQAPISpBGCErICogK3QhLCAsICt1IS0gLQ8L4QIBJn8jACEBQRAhAiABIAJrIQMCQCADIiUjAksgJSMDSXIEQBAcCyAlJAALIAMgADYCDCADKAIMIQQgBCgCBCEFIAUoAgAhBiADIAY2AgggAygCDCEHIAcoAgghCCADIAg2AgQgAygCDCEJIAkoAgwhCiADIAo2AgAgAygCACELIAsoAogCIQwgAygCCCENIA0oAgghDiADKAIEIQ8gDygCiAEhEEEDIREgECARdCESIAwgDiASEPcCGiADKAIAIRMgEygCjAIhFCADKAIIIRUgFSgCDCEWIAMoAgQhFyAXKAKQASEYQQIhGSAYIBl0IRogFCAWIBoQ9wIaIAMoAgAhGyAbKAKQAiEcIAMoAgghHSAdKAIQIR4gAygCBCEfIB8oApQBISBBACEhICAgIXQhIiAcIB4gIhD3AhpBECEjIAMgI2ohJAJAICQiJiMCSyAmIwNJcgRAEBwLICYkAAsPC+kEAkZ/AXwjACECQTAhAyACIANrIQQCQCAEIkYjAksgRiMDSXIEQBAcCyBGJAALQaCcAiEFIAQgADYCLCAEIAE2AiggBCgCKCEGQQIhByAGIAd0IQggBSAIaiEJIAkoAgAhCgJAAkAgCg0ADAELIAQoAighCyAEKAIsIQwgDCgCBCENIA0oAgAhDiAOKwMAIUggBCBIOQMQQY6cASEPQQEhEEEQIREgBCARaiESIAsgECAPIBIQygFBACET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ASCPASgCACGQASCHASGRASCQASGSASCRASCSAUkhkwFBASGUASCTASCUAXEhlQEglQFFDQEgCCgCZCGWASAIKAJkIZcBIAgoAnAhmAEgmAEoAhghmQEgCCgCeCGaASAIKAKcASGbASCbASgCDCGcASCcASgC2AIhnQEgCCgCcCGeASCeASgCLCGfAUEFIaABIJ8BIKABdCGhASCdASChAWohogEgogEoAgAhowEgmgEgowFsIaQBIAgoAoQBIaUBIKQBIKUBaiGmAUEDIacBIKYBIKcBdCGoASCZASCoAWohqQEgqQErAwAhhgIgCCCGAjkDCCAIIJcBNgIAQdnUACGqASCWASCqASAIEL4CGiAIKAKEASGrAUEBIawBIKsBIKwBaiGtASAIIK0BNgKEAQwACwALIAgoAmQhrgEgCCCuATYCEEHA2QAhrwFBACGwAUEHIbEBQRAhsgEgCCCyAWohswEgsQEgsAEgrwEgswEQywEgCCgCeCG0AUEBIbUBILQBILUBaiG2ASAIILYBNgJ4DAALAAtBACG3ASAIKAJkIbgBILgBEOoCIAggtwE2AngCQANAIAgoAnghuQEgCCgCcCG6ASC6ASgCACG7ASC5ASG8ASC7ASG9ASC8ASC9AUghvgFBASG/ASC+ASC/AXEhwAEgwAFFDQEgCCgCcCHBASDBASgCICHCASAIKAJ4IcMBQQIhxAEgwwEgxAF0IcUBIMIBIMUBaiHGASDGASgCACHHASDHASgCCCHIASAIIMgBNgIgQcDZACHJAUEAIcoBQQchywFBICHMASAIIMwBaiHNASDLASDKASDJASDNARDLASAIKAJ4Ic4BQQEhzwEgzgEgzwFqIdABIAgg0AE2AngMAAsAC0EHIdEBQQAh0gEg0gEoApyTAiHTASDRASDTAREAACAIKAKYASHUASAIKAKcASHVASDVASgCBCHWASDWASgCACHXASDXASsDACGHAiAIIIcCOQMwQcvdACHYAUEwIdkBIAgg2QFqIdoBINQBINgBINoBEM8BAAsgCCgCbCHbASAIKAJwIdwBINwBKAIUId0BIAgoAnAh3gEg3gEoAgAh3wEgCCgCcCHgASDgASgCCCHhASAIKAJwIeIBIOIBKAIEIeMBIAgoAnAh5AEg5AEoAgwh5QEgCCgCcCHmASDmASgCHCHnASAIKAJwIegB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AAsAC0ElIZQBQQAhlQEglQEoApyTAiGWASCUASCWAREAAAsgAygC4AEhlwEglwEoAoQBIZgBQQEhmQEgmAEgmQF0IZoBIAMoAuABIZsBIJsBKAKIASGcASCaASGdASCcASGeASCdASCeAUghnwFBASGgASCfASCgAXEhoQECQCChAUUNAEGAyAAhogFBACGjAUEBIaQBQSUhpQEgpQEgpAEgogEgowEQygEgAygC4AEhpgEgpgEoAoQBIacBQQEhqAEgpwEgqAF0IakBIAMgqQE2AugBAkADQCADKALoASGqASADKALgASGrASCrASgCiAEhrAEgqgEhrQEgrAEhrgEgrQEgrgFIIa8BQQEhsAEgrwEgsAFxIbEBILEBRQ0BIAMoAugBIbIBQQEhswEgsgEgswFqIbQBIAMoAuABIbUBILUBKAIAIbYBIAMoAugBIbcBQeAAIbgBILcBILgBbCG5ASC2ASC5AWohugEgugEoAgghuwEgAygC4AEhvAEgvAEoAgAhvQEgAygC6AEhvgFB4AAhvwEgvgEgvwFsIcABIL0BIMABaiHBASDBASsDUCHTAyADKALgASHCASDCASgCACHDASADKALoASHEAUHgACHFASDEASDFAWwhxgEgwwEgxgFqIccBIMcBKwNIIdQDIAMoAuwBIcgBIMgBKAIEIckBIMkBKAIAIcoBIMoBKAIIIcsBIAMoAugBIcwBQQMhzQEgzAEgzQF0Ic4BIMsBIM4BaiHPASDPASsDACHVAyADKALcASHQASDQASgCiAIh0QEgAygC6AEh0gFBAyHTASDSASDTAXQh1AEg0QEg1AFqIdUBINUBKwMAIdYDQfAAIdYBIAMg1gFqIdcBINcBINYDOQMAQegAIdgBIAMg2AFqIdkBINkBINUDOQMAQeAAIdoBIAMg2gFqIdsBINsBINQDOQMAIAMg0wM5A1ggAyC7ATYCVCADILQBNgJQQawxIdwBQQAh3QFBJSHeAUHQACHfASADIN8BaiHgASDeASDdASDcASDgARDKASADKALoASHhAUEBIeIBIOEBIOIBaiHjASADIOMBNgLoAQwACwALQSUh5AFBACHlASDlASgCnJMCIeYBIOQBIOYBEQAAC0EAIecBIAMoAuABIegBIOgBKAKQASHpASDnASHqASDpASHrASDqASDrAUgh7AFBASHtASDsASDtAXEh7gECQCDuAUUNAEGz0AAh7wFBACHwAUEBIfEBQSUh8gEg8gEg8QEg7wEg8AEQygFBACHzASADIPMBNgLoAQJAA0AgAygC6AEh9AEgAygC4AEh9QEg9QEoApABIfYBIPQBIfcBIPYBIfgBIPcBIPgBSCH5AUEBIfoBIPkBIPoBcSH7ASD7AUUNASADKALoASH8AUEBIf0BIPwBIP0BaiH+ASADKALgASH/ASD/ASgCBCGAAiADKALoASGBAkE8IYICIIECIIICbCGDAiCAAiCDAmohhAIghAIoAgghhQIgAygC4AEhhgIghgIoAgQhhwIgAygC6AEhiAJBPCGJAiCIAiCJAmwhigIghwIgigJqIYsCIIsCKAI0IYwCIAMoAuwBIY0CII0CKAIEIY4CII4CKAIAIY8CII8CKAIMIZACIAMoAugBIZECQQIhkgIgkQIgkgJ0IZMCIJACIJMCaiGUAiCUAigCACGVAiADKALcASGWAiCWAigCjAIhlwIgAygC6AEhmAJBAiGZAiCYAiCZAnQhmgIglwIgmgJqIZsCIJsCKAIAIZwCQZABIZ0CIAMgnQJqIZ4CIJ4CIJwCNgIAIAMglQI2AowBIAMgjAI2AogBIAMghQI2AoQBIAMg/gE2AoABQfvUACGfAkEAIaACQSUhoQJBgAEhogIgAyCiAmohowIgoQIgoAIgnwIgowIQygEgAygC6AEhpAJBASGlAiCkAiClAmohpgIgAyCmAjYC6AEMAAsAC0ElIacCQQAhqAIgqAIoApyTAiGpAiCnAiCpAhEAAAtBACGqAiADKALgASGrAiCrAigClAEhrAIgqgIhrQIgrAIhrgIgrQIgrgJIIa8CQQEhsAIgrwIgsAJxIbECAkAgsQJFDQBB0dkAIbICQQAhswJBASG0AkElIbUCILUCILQCILICILMCEMoBQQAhtgIgAyC2AjYC6AECQANAIAMoAugBIbcCIAMoAuABIbgCILgCKAKUASG5AiC3AiG6AiC5AiG7AiC6AiC7AkghvAJBASG9AiC8AiC9AnEhvgIgvgJFDQFBoeMAIb8CQdLmACHAAiADKALoASHBAkEBIcICIMECIMICaiHDAiADKALgASHEAiDEAigCCCHFAiADKALoASHGAkEsIccCIMYCIMcCbCHIAiDFAiDIAmohyQIgyQIoAgghygIgAygC4AEhywIgywIoAgghzAIgAygC6AEhzQJBLCHOAiDNAiDOAmwhzwIgzAIgzwJqIdACINACLQApIdECQRgh0gIg0QIg0gJ0IdMCINMCINICdSHUAiC/AiDAAiDUAhsh1QIgAygC7AEh1gIg1gIoAgQh1wIg1wIoAgAh2AIg2AIoAhAh2QIgAygC6AEh2gIg2QIg2gJqIdsCINsCLQAAIdwCQRgh3QIg3AIg3QJ0Id4CIN4CIN0CdSHfAiC/AiDAAiDfAhsh4AIgAygC3AEh4QIg4QIoApACIeICIAMoAugBIeMCIOICIOMCaiHkAiDkAi0AACHlAkEYIeYCIOUCIOYCdCHnAiDnAiDmAnUh6AIgvwIgwAIg6AIbIekCQbABIeoCIAMg6gJqIesCIOsCIOkCNgIAIAMg4AI2AqwBIAMg1QI2AqgBIAMgygI2AqQBIAMgwwI2AqABQcLeACHsAkEAIe0CQSUh7gJBoAEh7wIgAyDvAmoh8AIg7gIg7QIg7AIg8AIQygEgAygC6AEh8QJBASHyAiDxAiDyAmoh8wIgAyDzAjYC6AEMAAsAC0ElIfQCQQAh9QIg9QIoApyTAiH2AiD0AiD2AhEAAAtBACH3AiADKALgASH4AiD4AigCmAEh+QIg9wIh+gIg+QIh+wIg+gIg+wJIIfwCQQEh/QIg/AIg/QJxIf4CAkAg/gJFDQBBr+oAIf8CQQAhgANBASGBA0ElIYIDIIIDIIEDIP8CIIADEMoBQQAhgwMgAyCDAzYC6AECQANAIAMoAugBIYQDIAMoAuABIYUDIIUDKAKYASGGAyCEAyGHAyCGAyGIAyCHAyCIA0ghiQNBASGKAyCJAyCKA3EhiwMgiwNFDQEgAygC6AEhjANBASGNAyCMAyCNA2ohjgMgAygC4AEhjwMgjwMoAgwhkAMgAygC6AEhkQNBMCGSAyCRAyCSA2whkwMgkAMgkwNqIZQDIJQDKAIIIZUDIAMoAuABIZYDIJYDKAIMIZcDIAMoAugBIZgDQTAhmQMgmAMgmQNsIZoDIJcDIJoDaiGbAyCbAygCKCGcA0F9IZ0DIJwDIJ0DaiGeA0EEIZ8DIJ4DIJ8DaiGgAyADKALsASGhAyChAygCBCGiAyCiAygCACGjAyCjAygCFCGkAyADKALoASGlA0ECIaYDIKUDIKYDdCGnAyCkAyCnA2ohqAMgqAMoAgAhqQNBfSGqAyCpAyCqA2ohqwNBBCGsAyCrAyCsA2ohrQMgAygC3AEhrgMgrgMoApQCIa8DIAMoAugBIbADQQIhsQMgsAMgsQN0IbIDIK8DILIDaiGzAyCzAygCACG0A0F9IbUDILQDILUDaiG2A0EEIbcDILYDILcDaiG4A0HQASG5AyADILkDaiG6AyC6AyC4AzYCACADIK0DNgLMASADIKADNgLIASADIJUDNgLEASADII4DNgLAAUHA7gAhuwNBACG8A0ElIb0DQcABIb4DIAMgvgNqIb8DIL0DILwDILsDIL8DEMoBIAMoAugBIcADQQEhwQMgwAMgwQNqIcIDIAMgwgM2AugBDAALAAtBJSHDA0EAIcQDIMQDKAKckwIhxQMgwwMgxQMRAAALQSUhxgNBACHHAyDHAygCnJMCIcgDIMYDIMgDEQAAC0HwASHJAyADIMkDaiHKAwJAIMoDIswDIwJLIMwDIwNJcgRAEBwLIMwDJAALDwvHAgEdfyMAIQNBwAAhBCADIARrIQUCQCAFIh4jAksgHiMDSXIEQBAcCyAeJAALIAUgADYCPCAFIAE2AjggBSACNgI0QQAhBiAGKALoowIhBwJAAkAgB0UNACAFKAI8IQhBACEJIAkoArinAiEKIAUoAjQhCyALKAJYIQwgBSgCOCENIAUgDTYCGCAFIAw2AhQgBSAKNgIQQajzACEOQRAhDyAFIA9qIRAgCCAOIBAQvgIaDAELIAUoAjwhESAFKAI0IRIgEigCWCETIAUoAjghFCAFIBQ2AiQgBSATNgIgQZb2ACEVQSAhFiAFIBZqIRcgESAVIBcQvgIaCyAFKAI8IRggBSAYNgIAQfn4ACEZQQAhGkEOIRsgGyAaIBkgBRDKAUHAACEcIAUgHGohHQJAIB0iHyMCSyAfIwNJcgRAEBwLIB8kAAsPC/MGAlt/AnwjACEGQeAAIQcgBiAHayEIAkAgCCJfIwJLIF8jA0lyBEAQHAsgXyQACyAIIAA2AlwgCCABNgJYIAggAjYCVCAIIAM2AlAgCCAEOQNIIAggBTYCRCAIKAJEIQkCQAJAIAlFDQBBh/wAIQogCCgCVCELIAsgChDQASEMIAggDDYCPAwBC0GF/wAhDSAIKAJUIQ4gDiANENABIQ8gCCAPNgI8C0EAIRAgCCgCPCERIBEhEiAQIRMgEiATRiEUQQEhFSAUIBVxIRYCQCAWRQ0AIAgoAlghFyAIKAJUIRggCCAYNgIAQcuBASEZIBcgGSAIEM8BAAsgCCgCRCEaAkACQCAaRQ0AIAgoAjwhG0HvgwEhHEEAIR0gGyAcIB0Q1gIaQQAhHiAIIB42AkACQANAIAgoAkAhHyAIKAJcISAgICgCCCEhICEoAogBISIgHyEjICIhJCAjICRIISVBASEmICUgJnEhJyAnRQ0BIAgoAjwhKCAIKAJQISkgCCgCXCEqICooAgghKyArKAIAISwgCCgCQCEtQeAAIS4gLSAubCEvICwgL2ohMCAwKAIIITEgCCAxNgIUIAggKTYCEEGihwEhMkEQITMgCCAzaiE0ICggMiA0ENYCGiAIKAJAITVBASE2IDUgNmohNyAIIDc2AkAMAAsACyAIKAI8IThBoIoBITlBACE6IDggOSA6ENYCGgwBCyAIKAI8ITsgCCsDSCFhIAggYTkDMEH+jAEhPEEwIT0gCCA9aiE+IDsgPCA+ENYCGkEAIT8gCCA/NgJAAkADQCAIKAJAIUAgCCgCXCFBIEEoAgghQiBCKAKIASFDIEAhRCBDIUUgRCBFSCFGQQEhRyBGIEdxIUggSEUNASAIKAI8IUkgCCgCUCFKIAgoAlwhSyBLKAIEIUwgTCgCACFNIE0oAgghTiAIKAJAIU9BAyFQIE8gUHQhUSBOIFFqIVIgUisDACFiIAggYjkDKCAIIEo2AiBBqI8BIVNBICFUIAggVGohVSBJIFMgVRDWAhogCCgCQCFWQQEhVyBWIFdqIVggCCBYNgJADAALAAsgCCgCPCFZQaCKASFaQQAhWyBZIFogWxDWAhoLIAgoAjwhXCBcELACGkHgACFdIAggXWohXgJAIF4iYCMCSyBgIwNJcgRAEBwLIGAkAAsPC4sJAnl/FHwjACEEQTAhBSAEIAVrIQYCQCAGInsjAksgeyMDSXIEQBAcCyB7JAALQQAhB0QAAAAAAAD4fyF9IAYgADYCLCAGIAE2AiggBiACOQMgIAYgAzkDGCAGKAIsIQggCCgCECEJIAkoAogBIQogBigCLCELIAYoAighDCALIAwgChEFACAGKAIsIQ0gDSgCDCEOIA4gfTkDsAEgBiAHNgIUAkADQCAGKAIUIQ8gBigCLCEQIBAoAgghESARKAJ4IRIgDyETIBIhFCATIBRIIRVBASEWIBUgFnEhFyAXRQ0BIAYrAyAhfiAGKAIsIRggGCgCCCEZIBkoAnwhGiAGKAIUIRtBGCEcIBsgHGwhHSAaIB1qIR4gHisDCCF/IH4gf2MhH0EBISAgHyAgcSEhAkACQCAhRQ0AIAYoAiwhIiAiKAIIISMgIygCfCEkIAYoAhQhJUEYISYgJSAmbCEnICQgJ2ohKCAoKwMIIYABIAYoAiwhKSApKAIMISogKigCuAEhKyAGKAIUISxBAyEtICwgLXQhLiArIC5qIS8gLyCAATkDAAwBCyAGKAIsITAgMCgCCCExIDEoAnwhMiAGKAIUITNBGCE0IDMgNGwhNSAyIDVqITYgNisDCCGBASAGKwMgIYIBIAYoAiwhNyA3KAIIITggOCgCfCE5IAYoAhQhOkEYITsgOiA7bCE8IDkgPGohPSA9KwMIIYMBIIIBIIMBoSGEASAGKAIsIT4gPigCCCE/ID8oAnwhQCAGKAIUIUFBGCFCIEEgQmwhQyBAIENqIUQgRCsDECGFASCEASCFAaMhhgEghgGbIYcBIAYoAiwhRSBFKAIIIUYgRigCfCFHIAYoAhQhSEEYIUkgSCBJbCFKIEcgSmohSyBLKwMQIYgBIIcBIIgBoiGJASCBASCJAaAhigEgBigCLCFMIEwoAgwhTSBNKAK4ASFOIAYoAhQhT0EDIVAgTyBQdCFRIE4gUWohUiBSIIoBOQMACyAGKAIUIVMCQAJAIFNFDQAgBigCLCFUIFQoAgwhVSBVKAK4ASFWIAYoAhQhV0EDIVggVyBYdCFZIFYgWWohWiBaKwMAIYsBIAYoAiwhWyBbKAIMIVwgXCsDsAEhjAEgiwEgjAFjIV1BASFeIF0gXnEhXyBfRQ0BCyAGKAIsIWAgYCgCDCFhIGEoArgBIWIgBigCFCFjQQMhZCBjIGR0IWUgYiBlaiFmIGYrAwAhjQEgBigCLCFnIGcoAgwhaCBoII0BOQOwAQsgBigCFCFpQQEhaiBpIGpqIWsgBiBrNgIUDAALAAsgBisDGCGOASAGKAIsIWwgbCgCDCFtIG0rA7ABIY8BII4BII8BYyFuQQEhbyBuIG9xIXACQAJAIHBFDQBB45EBIXFBACFyQQshcyBzIHIgcSByEJACDAELIAYoAiwhdCB0KAIMIXUgdSsDsAEhkAEgBiCQATkDAEHPkwEhdkEAIXdBCyF4IHggdyB2IAYQkAILQTAheSAGIHlqIXoCQCB6InwjAksgfCMDSXIEQBAcCyB8JAALDwspAQN/IwAhBEEQIQUgBCAFayEGIAYgADYCDCAGIAE2AgggBiACNgIEDwuGEgLvAX8DfCMAIQVB0AAhBiAFIAZrIQcCQCAHIvIBIwJLIPIBIwNJcgRAEBwLIPIBJAALQQAhCEF/IQlBAiEKIAcgADYCTCAHIAE2AkggByACNgJEIAcgAzYCQCAHIAQ5AzggByAKNgI0IAcgCTYCMCAHKAJMIQsgCygCDCEMIAwgCDYCgAFB7ZUBIQ1BACEOQQ0hDyAPIA4gDSAOEMoBIAcoAkQhEEHzlwEhESAQIBEQqAIhEgJAIBJFDQAgBygCTCETIBMQ9AELIAcoAkQhFEHzlwEhFSAUIBUQqAIhFgJAIBZFDQAgBygCTCEXIBcQ9QELQQAhGCAHKAJAIRkgGSEaIBghGyAaIBtHIRxBASEdIBwgHXEhHgJAAkAgHkUNACAHKAJAIR9B75kBISAgHyAgEKgCISEgIQ0BCyAHKAJMISIgIigCECEjICMoAmwhJCAHKAJMISUgBygCSCEmICUgJiAkEQEAGiAHKAJMIScgJygCECEoICgoAlghKSAHKAJMISogBygCSCErICogKyApEQEAGgtBACEsIAcoAkwhLSAtKAIQIS4gLigCVCEvIAcoAkwhMCAHKAJIITEgMCAxIC8RAQAaIAcoAkQhMiAyITMgLCE0IDMgNEchNUEBITYgNSA2cSE3AkAgN0UNACAHKAJEIThB75kBITkgOCA5EKgCITogOkUNACAHKAJEITtB85cBITwgOyA8EKgCIT0gPUUNAEEBIT5BACE/IAcgPzYCNCAHID42AiwCQANAQQMhQCAHKAIsIUEgQSFCIEAhQyBCIENIIURBASFFIEQgRXEhRiBGRQ0BQbCXAiFHIAcoAkQhSCAHKAIsIUlBAiFKIEkgSnQhSyBHIEtqIUwgTCgCACFNIEggTRCoAiFOAkAgTg0AIAcoAiwhTyAHIE82AjQLIAcoAiwhUEEBIVEgUCBRaiFSIAcgUjYCLAwACwALIAcoAjQhUwJAIFMNACAHKAJEIVQgByBUNgIQQeWaASFVQQAhVkEBIVdBECFYIAcgWGohWSBXIFYgVSBZEMsBQdacASFaQQAhW0EBIVwgXCBbIFogWxDLAUEBIV0gByBdNgIsAkADQEEDIV4gBygCLCFfIF8hYCBeIWEgYCBhSCFiQQEhYyBiIGNxIWQgZEUNAUG8lwIhZUGwlwIhZiAHKAIsIWdBAiFoIGcgaHQhaSBmIGlqIWogaigCACFrIAcoAiwhbEECIW0gbCBtdCFuIGUgbmohbyBvKAIAIXAgByBwNgIEIAcgazYCAEHOngEhcUEAIXJBASFzIHMgciBxIAcQywEgBygCLCF0QQEhdSB0IHVqIXYgByB2NgIsDAALAAsgBygCSCF3QYKgASF4QQAheSB3IHggeRDPAQALC0G8lwIhekGwlwIheyAHKAI0IXxBAiF9IHwgfXQhfiB7IH5qIX8gfygCACGAASAHKAI0IYEBQQIhggEggQEgggF0IYMBIHoggwFqIYQBIIQBKAIAIYUBIAcghQE2AiQgByCAATYCIEHJoQEhhgFBACGHAUENIYgBQSAhiQEgByCJAWohigEgiAEghwEghgEgigEQygFBASGLAUEBIYwBIAcoAkwhjQEgjQEoAgwhjgEgjgEgjAE6AJABIAcoAjQhjwEgiwEhkAEgjwEhkQEgkAEgkQFGIZIBQQEhkwEgkgEgkwFxIZQBAkACQCCUAUUNAEEAIZUBIAcglQE2AjAMAQtBAiGWASAHKAI0IZcBIJYBIZgBIJcBIZkBIJgBIJkBRiGaAUEBIZsBIJoBIJsBcSGcAQJAAkAgnAFFDQAgBygCTCGdASAHKAJIIZ4BIJ0BIJ4BEJICIZ8BIAcgnwE2AjAMAQsgBygCSCGgAUH7ogEhoQFBACGiASCgASChASCiARDPAQALCyAHKAJMIaMBIKMBEIwCQZ6kASGkAUEAIaUBQQ0hpgEgpgEgpQEgpAEgpQEQygFBASGnAUEAIagBIAcoAkwhqQEgqQEQ9gEgBygCTCGqASCqARDvASAHKAJMIasBIAcoAkghrAEgqwEgrAEQ6gEgBygCTCGtASAHKAJIIa4BIK0BIK4BEPIBIAcoAkwhrwEgBygCSCGwAUEYIbEBIKgBILEBdCGyASCyASCxAXUhswEgrwEgsAEgswEgpwEQhgIhtAEgtAEhtQEgpwEhtgEgtQEgtgFGIbcBQQEhuAEgtwEguAFxIbkBAkAguQFFDQBBASG6AUEBIbsBIAcoAkwhvAEgBygCSCG9AUEYIb4BILsBIL4BdCG/ASC/ASC+AXUhwAEgvAEgvQEgwAEgugEQhgIhwQEgwQEhwgEgugEhwwEgwgEgwwFGIcQBQQEhxQEgxAEgxQFxIcYBAkAgxgFFDQBB3KYBIccBQQAhyAFBASHJASDJASDIASDHASDIARDLAQsLQQshygFBASHLAUEAIcwBIAcoAkwhzQEgzQEoAgwhzgEgzgEgzAE6AJABIAcoAkwhzwEgBygCSCHQASAHKAJMIdEBINEBKAIMIdIBINIBKwMAIfQBIAcoAkwh0wEg0wEoAgwh1AEg1AErAwgh9QEgzwEg0AEg9AEg9QEQjwIgBygCTCHVASDVASgCECHWASDWASgCTCHXASAHKAJMIdgBIAcoAkgh2QEg2AEg2QEg1wERAQAaIAcoAkwh2gEg2gEoAhAh2wEg2wEoAlAh3AEgBygCTCHdASAHKAJIId4BIN0BIN4BINwBEQEAGiAHKAJMId8BIN8BKAIQIeABIOABKAJ8IeEBIAcoAkwh4gEgBygCSCHjASDiASDjASDLASDhAREDABogBygCTCHkASAHKAJIIeUBIAcoAkwh5gEg5gEoAgwh5wEg5wErAwAh9gEg5AEg5QEg9gEQhwIgBygCTCHoASDoASDKARDwASAHKAJMIekBIOkBIMoBEPEBIAcoAkwh6gEg6gEoAhAh6wEg6wEoAnAh7AEgBygCTCHtASAHKAJIIe4BIO0BIO4BIOwBEQEAGiAHKAIwIe8BQdAAIfABIAcg8AFqIfEBAkAg8QEi8wEjAksg8wEjA0lyBEAQHAsg8wEkAAsg7wEPC+Z/Ao4Lfw98IwAhAkGgIyEDIAIgA2shBAJAIAQijgsjAksgjgsjA0lyBEAQHAsgjgskAAtBASEFQQAhBkGtqQEhB0EoIQggCBDpAiEJIAkgBjYCAEEEIQogBiAKaiELIAQgADYCnCMgBCABNgKYIyAEIAY2ApAjIAQgBzYCjAMgBCgCnCMhDCAMKAIIIQ0gBCANNgKEAyAEIAY2AoADIAQgBjYC9AIgBCgCnCMhDiAOKAIQIQ8gDygCYCEQIBAhESAFIRIgESASRiETQQEhFCATIBRxIRUCQAJAAkACQAJAIBVFDQBBASEWQQAhFyAXKALIoQIhGCAYIRkgFiEaIBkgGkchG0EBIRwgGyAccSEdIB1FDQBBASEeQQAhHyAfKALMoQIhICAgISEgHiEiICEgIkchI0EBISQgIyAkcSElICVFDQBBACEmQQEhJ0EAISggKCAnNgLIoQJBACEpICkgJjYC3KgCQZuqASEqQQYhK0EAISxBDiEtICsgLSAsICogLBAHQQAhLkEAIS8gLygC3KgCITBBACExIDEgLjYC3KgCIDAhMiAuITMgMiAzRyE0QQAhNSA1KALgqAIhNiA2ITcgLiE4IDcgOEchOSA0IDlxITpBASE7IDogO3EhPAJAAkACQAJAIDxFDQAgMCgCACE9ID0gCSALEOcCIT4gPkUNAQwCC0F/IT8gPyFADAILIDAgNhAAAAsgNhACID4hQAsgQCFBEAMhQkF/IUMgQSBDaiFEQQEhRSBEIEVLGiALIUYgCSFHIEIhSCALIUkgCSFKIEIhSwJAIEQOAgIDAAsLQQAhTEECIU0gBCgCnCMhTiBOKAIQIU8gTygCYCFQIFAhUSBNIVIgUSBSRiFTQQEhVCBTIFRxIVUgBCBVNgL4AiAEKAKAAyFWIEwhVwJAIFZFDQBBASFYIAQoApwjIVkgWSgCECFaIFooAmAhWyBbIVwgWCFdIFwgXUYhXkEBIV8gXiBfcSFgAkACQCBgRQ0AQQEhYUEBIWJBACFjIGMoAsyXAiFkIGQhZSBiIWYgZSBmTiFnQQEhaCBnIGhxIWkgYSFqIGkNAQtBACFrIAQoAvgCIWwgbCFtIGshbiBtIG5HIW8gbyFqCyBqIXAgcCFXCyBXIXFBACFyQQUhc0EBIXQgcSB0cSF1IAQgdTYC/AIgBCgCnCMhdkEAIXcgdyByNgLcqAIgcyB2EAZBACF4IHgoAtyoAiF5QQAheiB6IHI2AtyoAiB5IXsgciF8IHsgfEchfUEAIX4gfigC4KgCIX8gfyGAASByIYEBIIABIIEBRyGCASB9IIIBcSGDAUEBIYQBIIMBIIQBcSGFAQJAAkACQAJAIIUBRQ0AIHkoAgAhhgEghgEgCSALEOcCIYcBIIcBRQ0BDAILQX8hiAEgiAEhiQEMAgsgeSB/EAAACyB/EAIghwEhiQELIIkBIYoBEAMhiwFBfyGMASCKASCMAWohjQFBASGOASCNASCOAUsaIAshRiAJIUcgiwEhSCALIUkgCSFKIIsBIUsCQCCNAQ4CAQIAC0EAIY8BQQohkAEgBCgCnCMhkQFBACGSASCSASCPATYC3KgCIJABIJEBEAZBACGTASCTASgC3KgCIZQBQQAhlQEglQEgjwE2AtyoAiCUASGWASCPASGXASCWASCXAUchmAFBACGZASCZASgC4KgCIZoBIJoBIZsBII8BIZwBIJsBIJwBRyGdASCYASCdAXEhngFBASGfASCeASCfAXEhoAECQAJAAkACQCCgAUUNACCUASgCACGhASChASAJIAsQ5wIhogEgogFFDQEMAgtBfyGjASCjASGkAQwCCyCUASCaARAAAAsgmgEQAiCiASGkAQsgpAEhpQEQAyGmAUF/IacBIKUBIKcBaiGoAUEBIakBIKgBIKkBSxogCyFGIAkhRyCmASFIIAshSSAJIUogpgEhSwJAIKgBDgIBAgALIAQoAvwCIaoBAkACQAJAAkACQAJAAkAgqgENAEEAIasBRAAAAAAAAPA/IZALIAQoApwjIawBIKwBKAIMIa0BIK0BIJALOQOIASAEKAKcIyGuASCuASgCECGvASCvASgCXCGwASAEKAKcIyGxASAEKAKYIyGyAUEAIbMBILMBIKsBNgLcqAIgsAEgsQEgsgEQBBpBACG0ASC0ASgC3KgCIbUBQQAhtgEgtgEgqwE2AtyoAiC1ASG3ASCrASG4ASC3ASC4AUchuQFBACG6ASC6ASgC4KgCIbsBILsBIbwBIKsBIb0BILwBIL0BRyG+ASC5ASC+AXEhvwFBASHAASC/ASDAAXEhwQEgwQENAQwCC0EAIcIBIMIBKALIoQIhwwEgCyHEASAJIcUBIMMBDQRBACHGAUECIccBQdABIcgBIAQgyAFqIckBIMkBIcoBIAQoApgjIcsBIMsBKAJgIcwBIAQgzAE2AswBIAQoApgjIc0BIM0BIMoBNgJgIMoBIMcBIAkgCxDmAiHOARADIc8BIM8BIUYgzgEhRyDGASFIDAcLILUBKAIAIdABINABIAkgCxDnAiHRASDRAUUNAQwCC0F/IdIBINIBIdMBDAMLILUBILsBEAAACyC7ARACINEBIdMBDAELQQEh1AEMBAsg0wEh1QEQAyHWAUF/IdcBINUBINcBaiHYAUEBIdkBINgBINkBSxogCyFGIAkhRyDWASFIIAshSSAJIUog1gEhSyDYAQ4CAAECC0EDIdQBDAILQQAh1AEMAQsgCyHaASAJIdsBQQIh1AELA0ACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAINQBDgQAAQIDAwsgSCHcASBHId0BIEYh3gEg3AENDSAEKAL4AiHfAQJAIN8BRQ0AIAQoAvQCIeABIOABRQ0AQQAh4QFBACHiASDiASDhATYC3KgCQcusASHjAUEGIeQBQQAh5QFBDiHmASDkASDmASDlASDjASDlARAHQQAh5wFBACHoASDoASgC3KgCIekBQQAh6gEg6gEg5wE2AtyoAiDpASHrASDnASHsASDrASDsAUch7QFBACHuASDuASgC4KgCIe8BIO8BIfABIOcBIfEBIPABIPEBRyHyASDtASDyAXEh8wFBASH0ASDzASD0AXEh9QEg9QENCwwKCyAEKAL4AiH2AQJAIPYBRQ0AQQEh9wEgBCgCnCMh+AEg+AEoAhAh+QEg+QEg9wE2AmALQQAh+gFEAAAAAAAA8D8hkQsgBCgCnCMh+wEg+wEoAgwh/AEg/AEgkQs5A4gBQQAh/QEg/QEg+gE2AtyoAkG5rgEh/gFBBiH/AUEAIYACQQ4hgQIg/wEggQIggAIg/gEggAIQB0EAIYICQQAhgwIggwIoAtyoAiGEAkEAIYUCIIUCIIICNgLcqAIghAIhhgIgggIhhwIghgIghwJHIYgCQQAhiQIgiQIoAuCoAiGKAiCKAiGLAiCCAiGMAiCLAiCMAkchjQIgiAIgjQJxIY4CQQEhjwIgjgIgjwJxIZACIJACDQcMBgsgxQEhkQIgxAEhkgIgkgIh2gEgkQIh2wFBAiHUAQwnCyDbASGTAiDaASGUAkEBIZUCIAQoApwjIZYCIJYCKAIQIZcCIJcCKAJgIZgCIJgCIZkCIJUCIZoCIJkCIJoCRiGbAkEBIZwCIJsCIJwCcSGdAiCUAiGeAiCTAiGfAiCdAkUNDSAEKAL8AiGgAiCUAiGeAiCTAiGfAiCgAkUNDUEAIaECRAAAAAAAAPC/IZILIAQgkgs5A8ABIAQgoQI2ArwBQQAhogIgogIgoQI2AtyoAkHBsQEhowJBBiGkAkEAIaUCQQ4hpgIgpAIgpgIgpQIgowIgpQIQB0EAIacCQQAhqAIgqAIoAtyoAiGpAkEAIaoCIKoCIKcCNgLcqAIgqQIhqwIgpwIhrAIgqwIgrAJHIa0CQQAhrgIgrgIoAuCoAiGvAiCvAiGwAiCnAiGxAiCwAiCxAkchsgIgrQIgsgJxIbMCQQEhtAIgswIgtAJxIbUCILUCDQIMAQsgSyG2AiBKIbcCIEkhuAIgtgINC0EAIbkCIAQguQI2AsgBA0AgBCgCyAEhugJBACG7AiC7AigCzJcCIbwCILoCIb0CILwCIb4CIL0CIL4CTCG/AkEBIcACIL8CIMACcSHBAgJAAkACQAJAAkACQCDBAkUNAEEAIcICIAQoAsgBIcMCIMMCtyGTC0EAIcQCIMQCKALMlwIhxQIgxQK3IZQLIJMLIJQLoyGVCyAEKAKcIyHGAiDGAigCDCHHAiDHAiCVCzkDiAEgBCgCnCMhyAIgyAIoAgwhyQIgyQIrA4gBIZYLIAQglgs5A8ABIAQrA8ABIZcLQQAhygIgygIgwgI2AtyoAiAEIJcLOQMQQYa1ASHLAkEGIcwCQQAhzQJBDiHOAkEQIc8CIAQgzwJqIdACIMwCIM4CIM0CIMsCINACEAdBACHRAkEAIdICINICKALcqAIh0wJBACHUAiDUAiDRAjYC3KgCINMCIdUCINECIdYCINUCINYCRyHXAkEAIdgCINgCKALgqAIh2QIg2QIh2gIg0QIh2wIg2gIg2wJHIdwCINcCINwCcSHdAkEBId4CIN0CIN4CcSHfAiDfAg0BDAILQQEh4AIgBCDgAjYCvAEMEQsg0wIoAgAh4QIg4QIgtwIguAIQ5wIh4gIg4gJFDQEMAgtBfyHjAiDjAiHkAgwCCyDTAiDZAhAAAAsg2QIQAiDiAiHkAgsg5AIh5QIQAyHmAkF/IecCIOUCIOcCaiHoAkEBIekCIOgCIOkCSxoguAIhRiC3AiFHIOYCIUgguAIhSSC3AiFKIOYCIUsCQCDoAg4CJCYAC0QAAAAAAADwPyGYCyAEKAKcIyHqAiDqAigCDCHrAiDrAisDiAEhmQsgmQsgmAtkIewCQQEh7QIg7AIg7QJxIe4CAkAg7gJFDQBEAAAAAAAA8D8hmgsgBCgCnCMh7wIg7wIoAgwh8AIg8AIgmgs5A4gBIAQgmgs5A8ABC0EAIfECIAQoAsgBIfICIPECIfMCIPICIfQCIPMCIPQCRiH1AkEBIfYCIPUCIPYCcSH3AgJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCD3AkUNAEEAIfgCIAQoApwjIfkCIPkCKAIQIfoCIPoCKAJkIfsCIPsCIfwCIPgCIf0CIPwCIP0CRyH+AkEBIf8CIP4CIP8CcSGAAwJAIIADRQ0AQQAhgQMgBCgCnCMhggMgggMoAhAhgwMggwMoAmQhhAMgBCgCnCMhhQMgBCgCmCMhhgNBACGHAyCHAyCBAzYC3KgCIIQDIIUDIIYDEAQaQQAhiAMgiAMoAtyoAiGJA0EAIYoDIIoDIIEDNgLcqAIgiQMhiwMggQMhjAMgiwMgjANHIY0DQQAhjgMgjgMoAuCoAiGPAyCPAyGQAyCBAyGRAyCQAyCRA0chkgMgjQMgkgNxIZMDQQEhlAMgkwMglANxIZUDIJUDDQIMAwtBACGWA0EAIZcDIJcDIJYDNgLcqAJBh7YBIZgDQRchmQNBACGaA0EOIZsDIJkDIJsDIJoDIJgDIJoDEAdBACGcA0EAIZ0DIJ0DKALcqAIhngNBACGfAyCfAyCcAzYC3KgCIJ4DIaADIJwDIaEDIKADIKEDRyGiA0EAIaMDIKMDKALgqAIhpAMgpAMhpQMgnAMhpgMgpQMgpgNHIacDIKIDIKcDcSGoA0EBIakDIKgDIKkDcSGqAyCqAw0FDAYLQQAhqwMgBCgCnCMhrAMgrAMoAhAhrQMgrQMoAlwhrgMgBCgCnCMhrwMgBCgCmCMhsANBACGxAyCxAyCrAzYC3KgCIK4DIK8DILADEAQaQQAhsgMgsgMoAtyoAiGzA0EAIbQDILQDIKsDNgLcqAIgswMhtQMgqwMhtgMgtQMgtgNHIbcDQQAhuAMguAMoAuCoAiG5AyC5AyG6AyCrAyG7AyC6AyC7A0chvAMgtwMgvANxIb0DQQEhvgMgvQMgvgNxIb8DIL8DDQgMCQsgiQMoAgAhwAMgwAMgtwIguAIQ5wIhwQMgwQNFDQEMAgtBfyHCAyDCAyHDAwwMCyCJAyCPAxAAAAsgjwMQAiDBAyHDAwwKCyCeAygCACHEAyDEAyC3AiC4AhDnAiHFAyDFA0UNAQwCC0F/IcYDIMYDIccDDAcLIJ4DIKQDEAAACyCkAxACIMUDIccDDAULILMDKAIAIcgDIMgDILcCILgCEOcCIckDIMkDRQ0BDAILQX8hygMgygMhywMMAgsgswMguQMQAAALILkDEAIgyQMhywMLIMsDIcwDEAMhzQNBfyHOAyDMAyDOA2ohzwNBASHQAyDPAyDQA0saILgCIUYgtwIhRyDNAyFIILgCIUkgtwIhSiDNAyFLIM8DDgIqLAILIMcDIdEDEAMh0gNBfyHTAyDRAyDTA2oh1ANBASHVAyDUAyDVA0saILgCIUYgtwIhRyDSAyFIILgCIUkgtwIhSiDSAyFLINQDDgIpKwILIMMDIdYDEAMh1wNBfyHYAyDWAyDYA2oh2QNBASHaAyDZAyDaA0saILgCIUYgtwIhRyDXAyFIILgCIUkgtwIhSiDXAyFLINkDDgIoKgILDAMLQQAh2wMgBCgCnCMh3AMg3AMoAhAh3QMg3QMoAlwh3gMgBCgCnCMh3wMgBCgCmCMh4ANBACHhAyDhAyDbAzYC3KgCIN4DIN8DIOADEAQaQQAh4gMg4gMoAtyoAiHjA0EAIeQDIOQDINsDNgLcqAIg4wMh5QMg2wMh5gMg5QMg5gNHIecDQQAh6AMg6AMoAuCoAiHpAyDpAyHqAyDbAyHrAyDqAyDrA0ch7AMg5wMg7ANxIe0DQQEh7gMg7QMg7gNxIe8DAkACQAJAAkAg7wNFDQAg4wMoAgAh8AMg8AMgtwIguAIQ5wIh8QMg8QNFDQEMAgtBfyHyAyDyAyHzAwwCCyDjAyDpAxAAAAsg6QMQAiDxAyHzAwsg8wMh9AMQAyH1A0F/IfYDIPQDIPYDaiH3A0EBIfgDIPcDIPgDSxoguAIhRiC3AiFHIPUDIUgguAIhSSC3AiFKIPUDIUsCQCD3Aw4CJykACwwBCwsLQQAh+QMgBCsDwAEhmwtBACH6AyD6AyD5AzYC3KgCIAQgmws5AwBBzbcBIfsDQQYh/ANBACH9A0EOIf4DIPwDIP4DIP0DIPsDIAQQB0EAIf8DQQAhgAQggAQoAtyoAiGBBEEAIYIEIIIEIP8DNgLcqAIggQQhgwQg/wMhhAQggwQghARHIYUEQQAhhgQghgQoAuCoAiGHBCCHBCGIBCD/AyGJBCCIBCCJBEchigQghQQgigRxIYsEQQEhjAQgiwQgjARxIY0EAkACQAJAAkAgjQRFDQAggQQoAgAhjgQgjgQgtwIguAIQ5wIhjwQgjwRFDQEMAgtBfyGQBCCQBCGRBAwCCyCBBCCHBBAAAAsghwQQAiCPBCGRBAsgkQQhkgQQAyGTBEF/IZQEIJIEIJQEaiGVBEEBIZYEIJUEIJYESxoguAIhRiC3AiFHIJMEIUgguAIhSSC3AiFKIJMEIUsCQCCVBA4CJCYAC0EAIZcEIJcEKALYnAIhmAQCQCCYBEUNAEEAIZkEQRghmgRBkAMhmwQgBCCbBGohnAQgnAQhnQQgBCgCnCMhngQgBCgCmCMhnwQgBCgCjAMhoAQgBCsDwAEhnAtBACGhBCChBCCZBDYC3KgCIJoEIJ4EIJ8EIJ0EIKAEIJwLIJkEEBFBACGiBCCiBCgC3KgCIaMEQQAhpAQgpAQgmQQ2AtyoAiCjBCGlBCCZBCGmBCClBCCmBEchpwRBACGoBCCoBCgC4KgCIakEIKkEIaoEIJkEIasEIKoEIKsERyGsBCCnBCCsBHEhrQRBASGuBCCtBCCuBHEhrwQCQAJAAkACQCCvBEUNACCjBCgCACGwBCCwBCC3AiC4AhDnAiGxBCCxBEUNAQwCC0F/IbIEILIEIbMEDAILIKMEIKkEEAAACyCpBBACILEEIbMECyCzBCG0BBADIbUEQX8htgQgtAQgtgRqIbcEQQEhuAQgtwQguARLGiC4AiFGILcCIUcgtQQhSCC4AiFJILcCIUogtQQhSwJAILcEDgIlJwALCyAEKALIASG5BEEBIboEILkEILoEaiG7BCAEILsENgLIAQwACwALQX8hvAQgvAQhvQQMAQsgqQIoAgAhvgQgvgQgkwIglAIQ5wIhvwQCQCC/BA0AIKkCIK8CEAAACyCvAhACIL8EIb0ECyC9BCHABBADIcEEQX8hwgQgwAQgwgRqIcMEQQEhxAQgwwQgxARLGiCUAiFGIJMCIUcgwQQhSCCUAiFJIJMCIUogwQQhSwJAIMMEDgIgIgALQQAhxQQgxQQoAticAiHGBCCTAiHHBCCUAiHIBAJAIMYERQ0AQQAhyQRBGSHKBEHisgEhywRBkAMhzAQgBCDMBGohzQQgzQQhzgQgBCgChAMhzwRBACHQBCDQBCDJBDYC3KgCIMoEIM4EIMsEIM8EEBJBACHRBCDRBCgC3KgCIdIEQQAh0wQg0wQgyQQ2AtyoAiDSBCHUBCDJBCHVBCDUBCDVBEch1gRBACHXBCDXBCgC4KgCIdgEINgEIdkEIMkEIdoEINkEINoERyHbBCDWBCDbBHEh3ARBASHdBCDcBCDdBHEh3gQCQAJAAkACQCDeBEUNACDSBCgCACHfBCDfBCCTAiCUAhDnAiHgBCDgBEUNAQwCC0F/IeEEIOEEIeIEDAILINIEINgEEAAACyDYBBACIOAEIeIECyDiBCHjBBADIeQEQX8h5QQg4wQg5QRqIeYEQQEh5wQg5gQg5wRLGiCUAiFGIJMCIUcg5AQhSCCUAiFJIJMCIUog5AQhSwJAIOYEDgIhIwALQQAh6ARBGCHpBEEBIeoEQZADIesEIAQg6wRqIewEIOwEIe0EIAQoApwjIe4EIAQoApgjIe8EIAQoAowDIfAEIAQrA8ABIZ0LQQAh8QQg8QQg6AQ2AtyoAiDpBCDuBCDvBCDtBCDwBCCdCyDqBBARQQAh8gQg8gQoAtyoAiHzBEEAIfQEIPQEIOgENgLcqAIg8wQh9QQg6AQh9gQg9QQg9gRHIfcEQQAh+AQg+AQoAuCoAiH5BCD5BCH6BCDoBCH7BCD6BCD7BEch/AQg9wQg/ARxIf0EQQEh/gQg/QQg/gRxIf8EAkACQAJAAkAg/wRFDQAg8wQoAgAhgAUggAUgkwIglAIQ5wIhgQUggQVFDQEMAgtBfyGCBSCCBSGDBQwCCyDzBCD5BBAAAAsg+QQQAiCBBSGDBQsggwUhhAUQAyGFBUF/IYYFIIQFIIYFaiGHBUEBIYgFIIcFIIgFSxoglAIhRiCTAiFHIIUFIUgglAIhSSCTAiFKIIUFIUsCQCCHBQ4CISMACyCTAiHHBCCUAiHIBAsgyAQhiQUgxwQhigVBACGLBUEAIYwFIIwFIIsFNgLcqAJB07MBIY0FQQYhjgVBACGPBUEBIZAFQQ4hkQUgjgUgkQUgkAUgjQUgjwUQB0EAIZIFQQAhkwUgkwUoAtyoAiGUBUEAIZUFIJUFIJIFNgLcqAIglAUhlgUgkgUhlwUglgUglwVHIZgFQQAhmQUgmQUoAuCoAiGaBSCaBSGbBSCSBSGcBSCbBSCcBUchnQUgmAUgnQVxIZ4FQQEhnwUgngUgnwVxIaAFAkACQAJAAkAgoAVFDQAglAUoAgAhoQUgoQUgkwIglAIQ5wIhogUgogVFDQEMAgtBfyGjBSCjBSGkBQwCCyCUBSCaBRAAAAsgmgUQAiCiBSGkBQsgpAUhpQUQAyGmBUF/IacFIKUFIKcFaiGoBUEBIakFIKgFIKkFSxogiQUhRiCKBSFHIKYFIUggiQUhSSCKBSFKIKYFIUsCQCCoBQ4CICIAC0EAIaoFQQEhqwVBICGsBSAEIKwFaiGtBSCtBSGuBSAEKAKYIyGvBSCvBSgCYCGwBSAEILAFNgIcIAQoApgjIbEFILEFIK4FNgJgIK4FIKsFIJMCIJQCEOYCIbIFEAMhswUgswUhSSCyBSFKIKoFIUsMHwtBfyG0BSC0BSG1BQwBCyCEAigCACG2BSC2BSDdASDeARDnAiG3BQJAILcFDQAghAIgigIQAAALIIoCEAIgtwUhtQULILUFIbgFEAMhuQVBfyG6BSC4BSC6BWohuwVBASG8BSC7BSC8BUsaIN4BIUYg3QEhRyC5BSFIIN4BIUkg3QEhSiC5BSFLAkAguwUOAh0fAAtBACG9BSAEKAKcIyG+BSC+BSgCECG/BSC/BSgCXCHABSAEKAKcIyHBBSAEKAKYIyHCBUEAIcMFIMMFIL0FNgLcqAIgwAUgwQUgwgUQBBpBACHEBSDEBSgC3KgCIcUFQQAhxgUgxgUgvQU2AtyoAiDFBSHHBSC9BSHIBSDHBSDIBUchyQVBACHKBSDKBSgC4KgCIcsFIMsFIcwFIL0FIc0FIMwFIM0FRyHOBSDJBSDOBXEhzwVBASHQBSDPBSDQBXEh0QUCQAJAAkACQCDRBUUNACDFBSgCACHSBSDSBSDdASDeARDnAiHTBSDTBUUNAQwCC0F/IdQFINQFIdUFDAILIMUFIMsFEAAACyDLBRACINMFIdUFCyDVBSHWBRADIdcFQX8h2AUg1gUg2AVqIdkFQQEh2gUg2QUg2gVLGiDeASFGIN0BIUcg1wUhSCDeASFJIN0BIUog1wUhSwJAINkFDgIdHwALQQAh2wUgBCDbBTYC/AIMAwtBfyHcBSDcBSHdBQwBCyDpASgCACHeBSDeBSDdASDeARDnAiHfBQJAIN8FDQAg6QEg7wEQAAALIO8BEAIg3wUh3QULIN0FIeAFEAMh4QVBfyHiBSDgBSDiBWoh4wVBASHkBSDjBSDkBUsaIN4BIUYg3QEhRyDhBSFIIN4BIUkg3QEhSiDhBSFLAkAg4wUOAhocAAsLC0EAIeUFQQ0h5gUgBCgCzAEh5wUgBCgCmCMh6AUg6AUg5wU2AmBBACHpBSDpBSDlBTYC3KgCIOYFEApBACHqBSDqBSgC3KgCIesFQQAh7AUg7AUg5QU2AtyoAiDrBSHtBSDlBSHuBSDtBSDuBUch7wVBACHwBSDwBSgC4KgCIfEFIPEFIfIFIOUFIfMFIPIFIPMFRyH0BSDvBSD0BXEh9QVBASH2BSD1BSD2BXEh9wUCQAJAAkACQCD3BUUNACDrBSgCACH4BSD4BSDdASDeARDnAiH5BSD5BUUNAQwCC0F/IfoFIPoFIfsFDAILIOsFIPEFEAAACyDxBRACIPkFIfsFCyD7BSH8BRADIf0FQX8h/gUg/AUg/gVqIf8FQQEhgAYg/wUggAZLGiDeASFGIN0BIUcg/QUhSCDeASFJIN0BIUog/QUhSwJAIP8FDgIYGgALIAQoAvgCIYEGAkAggQZFDQBBAiGCBiAEKAKcIyGDBiCDBigCECGEBiCEBiCCBjYCYAsgBCgC/AIhhQYg3gEhhgYCQCCFBkUNACAEKAL0AiGHBgJAIIcGDQBBACGIBkEAIYkGIIkGIIgGNgLcqAJB8q8BIYoGQRchiwZBACGMBkECIY0GIIsGII0GIIwGIIoGIIwGEAdBACGOBkEAIY8GII8GKALcqAIhkAZBACGRBiCRBiCOBjYC3KgCIJAGIZIGII4GIZMGIJIGIJMGRyGUBkEAIZUGIJUGKALgqAIhlgYglgYhlwYgjgYhmAYglwYgmAZHIZkGIJQGIJkGcSGaBkEBIZsGIJoGIJsGcSGcBgJAAkACQAJAIJwGRQ0AIJAGKAIAIZ0GIJ0GIN0BIN4BEOcCIZ4GIJ4GRQ0BDAILQX8hnwYgnwYhoAYMAgsgkAYglgYQAAALIJYGEAIgngYhoAYLIKAGIaEGEAMhogZBfyGjBiChBiCjBmohpAZBASGlBiCkBiClBksaIN4BIUYg3QEhRyCiBiFIIN4BIUkg3QEhSiCiBiFLAkAgpAYOAhocAAsLQQAhpgZBGiGnBkEBIagGQQAhqQYgqQYgqAY2AsihAiAEKAKcIyGqBkEAIasGIKsGIKYGNgLcqAIgpwYgqgYQBkEAIawGIKwGKALcqAIhrQZBACGuBiCuBiCmBjYC3KgCIK0GIa8GIKYGIbAGIK8GILAGRyGxBkEAIbIGILIGKALgqAIhswYgswYhtAYgpgYhtQYgtAYgtQZHIbYGILEGILYGcSG3BkEBIbgGILcGILgGcSG5BgJAAkACQAJAILkGRQ0AIK0GKAIAIboGILoGIN0BIN4BEOcCIbsGILsGRQ0BDAILQX8hvAYgvAYhvQYMAgsgrQYgswYQAAALILMGEAIguwYhvQYLIL0GIb4GEAMhvwZBfyHABiC+BiDABmohwQZBASHCBiDBBiDCBksaIN4BIUYg3QEhRyC/BiFIIN4BIUkg3QEhSiC/BiFLAkAgwQYOAhkbAAtBACHDBkEbIcQGIAQoApwjIcUGQQAhxgYgxgYgwwY2AtyoAiDEBiDFBhAGQQAhxwYgxwYoAtyoAiHIBkEAIckGIMkGIMMGNgLcqAIgyAYhygYgwwYhywYgygYgywZHIcwGQQAhzQYgzQYoAuCoAiHOBiDOBiHPBiDDBiHQBiDPBiDQBkch0QYgzAYg0QZxIdIGQQEh0wYg0gYg0wZxIdQGAkACQAJAAkAg1AZFDQAgyAYoAgAh1QYg1QYg3QEg3gEQ5wIh1gYg1gZFDQEMAgtBfyHXBiDXBiHYBgwCCyDIBiDOBhAAAAsgzgYQAiDWBiHYBgsg2AYh2QYQAyHaBkF/IdsGINkGINsGaiHcBkEBId0GINwGIN0GSxog3gEhRiDdASFHINoGIUgg3gEhSSDdASFKINoGIUsCQCDcBg4CGRsAC0EAId4GIAQoApwjId8GIN8GKAIQIeAGIOAGKAJsIeEGIAQoApwjIeIGIAQoApgjIeMGQQAh5AYg5AYg3gY2AtyoAiDhBiDiBiDjBhAEGkEAIeUGIOUGKALcqAIh5gZBACHnBiDnBiDeBjYC3KgCIOYGIegGIN4GIekGIOgGIOkGRyHqBkEAIesGIOsGKALgqAIh7AYg7AYh7QYg3gYh7gYg7QYg7gZHIe8GIOoGIO8GcSHwBkEBIfEGIPAGIPEGcSHyBgJAAkACQAJAIPIGRQ0AIOYGKAIAIfMGIPMGIN0BIN4BEOcCIfQGIPQGRQ0BDAILQX8h9QYg9QYh9gYMAgsg5gYg7AYQAAALIOwGEAIg9AYh9gYLIPYGIfcGEAMh+AZBfyH5BiD3BiD5Bmoh+gZBASH7BiD6BiD7BksaIN4BIUYg3QEhRyD4BiFIIN4BIUkg3QEhSiD4BiFLAkAg+gYOAhkbAAtBACH8BiAEKAKcIyH9BiD9BigCECH+BiD+BigCWCH/BiAEKAKcIyGAByAEKAKYIyGBB0EAIYIHIIIHIPwGNgLcqAIg/wYggAcggQcQBBpBACGDByCDBygC3KgCIYQHQQAhhQcghQcg/AY2AtyoAiCEByGGByD8BiGHByCGByCHB0chiAdBACGJByCJBygC4KgCIYoHIIoHIYsHIPwGIYwHIIsHIIwHRyGNByCIByCNB3EhjgdBASGPByCOByCPB3EhkAcCQAJAAkACQCCQB0UNACCEBygCACGRByCRByDdASDeARDnAiGSByCSB0UNAQwCC0F/IZMHIJMHIZQHDAILIIQHIIoHEAAACyCKBxACIJIHIZQHCyCUByGVBxADIZYHQX8hlwcglQcglwdqIZgHQQEhmQcgmAcgmQdLGiDeASFGIN0BIUcglgchSCDeASFJIN0BIUoglgchSwJAIJgHDgIZGwALIN4BIYYGCyCGBiGaByCaByHEASDdASHFAUEBIdQBDBoLQQAhmwdBDSGcByAEKAIcIZ0HIAQoApgjIZ4HIJ4HIJ0HNgJgQQAhnwcgnwcgmwc2AtyoAiCcBxAKQQAhoAcgoAcoAtyoAiGhB0EAIaIHIKIHIJsHNgLcqAIgoQchowcgmwchpAcgowcgpAdHIaUHQQAhpgcgpgcoAuCoAiGnByCnByGoByCbByGpByCoByCpB0chqgcgpQcgqgdxIasHQQEhrAcgqwcgrAdxIa0HAkACQAJAAkAgrQdFDQAgoQcoAgAhrgcgrgcgtwIguAIQ5wIhrwcgrwdFDQEMAgtBfyGwByCwByGxBwwCCyChByCnBxAAAAsgpwcQAiCvByGxBwsgsQchsgcQAyGzB0F/IbQHILIHILQHaiG1B0EBIbYHILUHILYHSxoguAIhRiC3AiFHILMHIUgguAIhSSC3AiFKILMHIUsCQCC1Bw4CFxkACyAEKAK8ASG3BwJAAkACQAJAAkACQAJAAkACQAJAAkAgtwcNAEEAIbgHQQ4huQdBACG6ByC6BygCnJMCIbsHQQAhvAcgvAcguAc2AtyoAiC7ByC5BxAGQQAhvQcgvQcoAtyoAiG+B0EAIb8HIL8HILgHNgLcqAIgvgchwAcguAchwQcgwAcgwQdHIcIHQQAhwwcgwwcoAuCoAiHEByDEByHFByC4ByHGByDFByDGB0chxwcgwgcgxwdxIcgHQQEhyQcgyAcgyQdxIcoHIMoHDQEMAgtBACHLB0EOIcwHQQAhzQcgzQcoAsyXAiHOByAEKAKcIyHPByDPBygCDCHQByDQBygCgAEh0Qcg0QcgzgdqIdIHINAHINIHNgKAAUEAIdMHINMHKAKckwIh1AdBACHVByDVByDLBzYC3KgCINQHIMwHEAZBACHWByDWBygC3KgCIdcHQQAh2Acg2Acgywc2AtyoAiDXByHZByDLByHaByDZByDaB0ch2wdBACHcByDcBygC4KgCId0HIN0HId4HIMsHId8HIN4HIN8HRyHgByDbByDgB3Eh4QdBASHiByDhByDiB3Eh4wcg4wcNBQwGCyC+BygCACHkByDkByC3AiC4AhDnAiHlByDlB0UNAQwCC0F/IeYHIOYHIecHDAILIL4HIMQHEAAACyDEBxACIOUHIecHCyDnByHoBxADIekHQX8h6gcg6Acg6gdqIesHQQEh7Acg6wcg7AdLGiC4AiFGILcCIUcg6QchSCC4AiFJILcCIUog6QchSwJAIOsHDgIcHgALQQAh7QdBACHuByDuByDtBzYC3KgCQfu4ASHvB0EcIfAHQQAh8QdBAiHyByDwByDyByDxByDvByDxBxAHQQAh8wdBACH0ByD0BygC3KgCIfUHQQAh9gcg9gcg8wc2AtyoAiD1ByH3ByDzByH4ByD3ByD4B0ch+QdBACH6ByD6BygC4KgCIfsHIPsHIfwHIPMHIf0HIPwHIP0HRyH+ByD5ByD+B3Eh/wdBASGACCD/ByCACHEhgQgggQgNBgwHCyDXBygCACGCCCCCCCC3AiC4AhDnAiGDCCCDCEUNAQwCC0F/IYQIIIQIIYUIDAILINcHIN0HEAAACyDdBxACIIMIIYUICyCFCCGGCBADIYcIQX8hiAgghgggiAhqIYkIQQEhigggiQggighLGiC4AiFGILcCIUcghwghSCC4AiFJILcCIUoghwghSwJAIIkIDgIXGQALILgCIZ4CILcCIZ8CCyCfAiGLCCCeAiGMCCAEKAL4AiGNCCCLCCGOCCCMCCGPCCCNCEUNFCAEKAL8AiGQCCCLCCGOCCCMCCGPCCCQCEUNFEEAIZEIQQAhkgggkgggkQg2AtyoAkHAuwEhkwhBBiGUCEEAIZUIQQ4hlggglAgglggglQggkwgglQgQB0EAIZcIQQAhmAggmAgoAtyoAiGZCEEAIZoIIJoIIJcINgLcqAIgmQghmwgglwghnAggmwggnAhHIZ0IQQAhngggnggoAuCoAiGfCCCfCCGgCCCXCCGhCCCgCCChCEchogggnQggoghxIaMIQQEhpAggowggpAhxIaUIAkACQAJAAkAgpQhFDQAgmQgoAgAhpgggpgggiwggjAgQ5wIhpwggpwhFDQEMAgtBfyGoCCCoCCGpCAwCCyCZCCCfCBAAAAsgnwgQAiCnCCGpCAsgqQghqggQAyGrCEF/IawIIKoIIKwIaiGtCEEBIa4IIK0IIK4ISxogjAghRiCLCCFHIKsIIUggjAghSSCLCCFKIKsIIUsCQCCtCA4CFhgAC0EAIa8IQQAhsAggsAggrwg2AtyoAkHTswEhsQhBBiGyCEEAIbMIQQEhtAhBDiG1CCCyCCC1CCC0CCCxCCCzCBAHQQAhtghBACG3CCC3CCgC3KgCIbgIQQAhuQgguQggtgg2AtyoAiC4CCG6CCC2CCG7CCC6CCC7CEchvAhBACG9CCC9CCgC4KgCIb4IIL4IIb8IILYIIcAIIL8IIMAIRyHBCCC8CCDBCHEhwghBASHDCCDCCCDDCHEhxAggxAgNBQwGCyD1BygCACHFCCDFCCC3AiC4AhDnAiHGCCDGCEUNAQwCC0F/IccIIMcIIcgIDAILIPUHIPsHEAAACyD7BxACIMYIIcgICyDICCHJCBADIcoIQX8hywggyQggywhqIcwIQQEhzQggzAggzQhLGiC4AiFGILcCIUcgygghSCC4AiFJILcCIUogygghSwJAIMwIDgIREwALQQAhzgggBCgCmCMhzwhBACHQCCDQCCDOCDYC3KgCQby6ASHRCEEdIdIIQQAh0wgg0gggzwgg0Qgg0wgQEkEAIdQIQQAh1Qgg1QgoAtyoAiHWCEEAIdcIINcIINQINgLcqAIg1ggh2Agg1Agh2Qgg2Agg2QhHIdoIQQAh2wgg2wgoAuCoAiHcCCDcCCHdCCDUCCHeCCDdCCDeCEch3wgg2ggg3whxIeAIQQEh4Qgg4Agg4QhxIeIIIOIIDQUMBgsguAgoAgAh4wgg4wggiwggjAgQ5wIh5Agg5AhFDQEMAgtBfyHlCCDlCCHmCAwCCyC4CCC+CBAAAAsgvggQAiDkCCHmCAsg5ggh5wgQAyHoCEF/IekIIOcIIOkIaiHqCEEBIesIIOoIIOsISxogjAghRiCLCCFHIOgIIUggjAghSSCLCCFKIOgIIUsCQCDqCA4CDA4AC0EAIewIIOwItyGeCyAEKAKcIyHtCCDtCCgCDCHuCCDuCCCeCzkDiAFBACHvCCDvCCDsCDYC3KgCQdO8ASHwCEEGIfEIQQAh8ghBDiHzCCDxCCDzCCDyCCDwCCDyCBAHQQAh9AhBACH1CCD1CCgC3KgCIfYIQQAh9wgg9wgg9Ag2AtyoAiD2CCH4CCD0CCH5CCD4CCD5CEch+ghBACH7CCD7CCgC4KgCIfwIIPwIIf0IIPQIIf4IIP0IIP4IRyH/CCD6CCD/CHEhgAlBASGBCSCACSCBCXEhggkgggkNBQwGCyDWCCgCACGDCSCDCSC3AiC4AhDnAiGECSCECUUNAQwCC0F/IYUJIIUJIYYJDAILINYIINwIEAAACyDcCBACIIQJIYYJCyCGCSGHCRADIYgJQX8hiQkghwkgiQlqIYoJILgCIUYgtwIhRyCICSFIILgCIUkgtwIhSiCICSFLIIoJDgIGCAYLIPYIKAIAIYsJIIsJIIsIIIwIEOcCIYwJIIwJRQ0BDAILQX8hjQkgjQkhjgkMAgsg9ggg/AgQAAALIPwIEAIgjAkhjgkLII4JIY8JEAMhkAlBfyGRCSCPCSCRCWohkglBASGTCSCSCSCTCUsaIIwIIUYgiwghRyCQCSFIIIwIIUkgiwghSiCQCSFLAkAgkgkOAgIEAAtBACGUCSAEKAKcIyGVCSCVCSgCECGWCSCWCSgCZCGXCSCXCSGYCSCUCSGZCSCYCSCZCUchmglBASGbCSCaCSCbCXEhnAkCQAJAAkACQAJAAkACQAJAAkACQAJAAkAgnAlFDQBBACGdCSAEKAKcIyGeCSCeCSgCECGfCSCfCSgCZCGgCSAEKAKcIyGhCSAEKAKYIyGiCUEAIaMJIKMJIJ0JNgLcqAIgoAkgoQkgogkQBBpBACGkCSCkCSgC3KgCIaUJQQAhpgkgpgkgnQk2AtyoAiClCSGnCSCdCSGoCSCnCSCoCUchqQlBACGqCSCqCSgC4KgCIasJIKsJIawJIJ0JIa0JIKwJIK0JRyGuCSCpCSCuCXEhrwlBASGwCSCvCSCwCXEhsQkgsQkNAQwCC0EAIbIJQQAhswkgswkgsgk2AtyoAkGHtgEhtAlBFyG1CUEAIbYJQQ4htwkgtQkgtwkgtgkgtAkgtgkQB0EAIbgJQQAhuQkguQkoAtyoAiG6CUEAIbsJILsJILgJNgLcqAIgugkhvAkguAkhvQkgvAkgvQlHIb4JQQAhvwkgvwkoAuCoAiHACSDACSHBCSC4CSHCCSDBCSDCCUchwwkgvgkgwwlxIcQJQQEhxQkgxAkgxQlxIcYJIMYJDQUMBgsgpQkoAgAhxwkgxwkgiwggjAgQ5wIhyAkgyAlFDQEMAgtBfyHJCSDJCSHKCQwCCyClCSCrCRAAAAsgqwkQAiDICSHKCQsgygkhywkQAyHMCUF/Ic0JIMsJIM0JaiHOCUEBIc8JIM4JIM8JSxogjAghRiCLCCFHIMwJIUggjAghSSCLCCFKIMwJIUsCQCDOCQ4CCAoACwwFCyC6CSgCACHQCSDQCSCLCCCMCBDnAiHRCSDRCUUNAQwCC0F/IdIJINIJIdMJDAILILoJIMAJEAAACyDACRACINEJIdMJCyDTCSHUCRADIdUJQX8h1gkg1Akg1glqIdcJQQEh2Akg1wkg2AlLGiCMCCFGIIsIIUcg1QkhSCCMCCFJIIsIIUog1QkhSwJAINcJDgIDBQALQQAh2QkgBCgCnCMh2gkg2gkoAhAh2wkg2wkoAlwh3AkgBCgCnCMh3QkgBCgCmCMh3glBACHfCSDfCSDZCTYC3KgCINwJIN0JIN4JEAQaQQAh4Akg4AkoAtyoAiHhCUEAIeIJIOIJINkJNgLcqAIg4Qkh4wkg2Qkh5Akg4wkg5AlHIeUJQQAh5gkg5gkoAuCoAiHnCSDnCSHoCSDZCSHpCSDoCSDpCUch6gkg5Qkg6glxIesJQQEh7Akg6wkg7AlxIe0JAkACQAJAAkAg7QlFDQAg4QkoAgAh7gkg7gkgiwggjAgQ5wIh7wkg7wlFDQEMAgtBfyHwCSDwCSHxCQwCCyDhCSDnCRAAAAsg5wkQAiDvCSHxCQsg8Qkh8gkQAyHzCUF/IfQJIPIJIPQJaiH1CUEBIfYJIPUJIPYJSxogjAghRiCLCCFHIPMJIUggjAghSSCLCCFKIPMJIUsCQCD1CQ4CAwUACwtBACH3CUEAIfgJIPgJIPcJNgLcqAJB1r0BIfkJQQYh+glBACH7CUEOIfwJIPoJIPwJIPsJIPkJIPsJEAdBACH9CUEAIf4JIP4JKALcqAIh/wlBACGACiCACiD9CTYC3KgCIP8JIYEKIP0JIYIKIIEKIIIKRyGDCkEAIYQKIIQKKALgqAIhhQoghQohhgog/QkhhwoghgoghwpHIYgKIIMKIIgKcSGJCkEBIYoKIIkKIIoKcSGLCgJAAkACQAJAIIsKRQ0AIP8JKAIAIYwKIIwKIIsIIIwIEOcCIY0KII0KRQ0BDAILQX8hjgogjgohjwoMAgsg/wkghQoQAAALIIUKEAIgjQohjwoLII8KIZAKEAMhkQpBfyGSCiCQCiCSCmohkwpBASGUCiCTCiCUCksaIIwIIUYgiwghRyCRCiFIIIwIIUkgiwghSiCRCiFLAkAgkwoOAgIEAAtBACGVCiAEKAKcIyGWCiCWCigCECGXCiCXCigCXCGYCiAEKAKcIyGZCiAEKAKYIyGaCkEAIZsKIJsKIJUKNgLcqAIgmAogmQogmgoQBBpBACGcCiCcCigC3KgCIZ0KQQAhngogngoglQo2AtyoAiCdCiGfCiCVCiGgCiCfCiCgCkchoQpBACGiCiCiCigC4KgCIaMKIKMKIaQKIJUKIaUKIKQKIKUKRyGmCiChCiCmCnEhpwpBASGoCiCnCiCoCnEhqQoCQAJAAkACQCCpCkUNACCdCigCACGqCiCqCiCLCCCMCBDnAiGrCiCrCkUNAQwCC0F/IawKIKwKIa0KDAILIJ0KIKMKEAAACyCjChACIKsKIa0KCyCtCiGuChADIa8KQX8hsAogrgogsApqIbEKQQEhsgogsQogsgpLGiCMCCFGIIsIIUcgrwohSCCMCCFJIIsIIUogrwohSwJAILEKDgICBAALQQAhswpBDiG0CkEAIbUKILUKKAKckwIhtgpBACG3CiC3CiCzCjYC3KgCILYKILQKEAZBACG4CiC4CigC3KgCIbkKQQAhugogugogswo2AtyoAiC5CiG7CiCzCiG8CiC7CiC8CkchvQpBACG+CiC+CigC4KgCIb8KIL8KIcAKILMKIcEKIMAKIMEKRyHCCiC9CiDCCnEhwwpBASHECiDDCiDECnEhxQoCQAJAAkACQCDFCkUNACC5CigCACHGCiDGCiCLCCCMCBDnAiHHCiDHCkUNAQwCC0F/IcgKIMgKIckKDAILILkKIL8KEAAACyC/ChACIMcKIckKCyDJCiHKChADIcsKQX8hzAogygogzApqIc0KQQEhzgogzQogzgpLGiCMCCFGIIsIIUcgywohSCCMCCFJIIsIIUogywohSwJAIM0KDgICBAALIIsIIY4IIIwIIY8ICyCPCCHPCiCOCCHQCkEAIdEKQR4h0gogBCgCnCMh0wpBACHUCiDUCiDRCjYC3KgCINIKINMKEAZBACHVCiDVCigC3KgCIdYKQQAh1wog1wog0Qo2AtyoAiDWCiHYCiDRCiHZCiDYCiDZCkch2gpBACHbCiDbCigC4KgCIdwKINwKId0KINEKId4KIN0KIN4KRyHfCiDaCiDfCnEh4ApBASHhCiDgCiDhCnEh4goCQAJAAkACQCDiCkUNACDWCigCACHjCiDjCiCLCCCMCBDnAiHkCiDkCkUNAQwCC0F/IeUKIOUKIeYKDAILINYKINwKEAAACyDcChACIOQKIeYKCyDmCiHnChADIegKQX8h6Qog5wog6QpqIeoKQQEh6wog6gog6wpLGiDPCiFGINAKIUcg6AohSCDPCiFJINAKIUog6AohSwJAIOoKDgIBAwALQQAh7AogBCgCnCMh7Qog7QooAhAh7gog7gooAmgh7wogBCgCnCMh8AogBCgCmCMh8QpBACHyCiDyCiDsCjYC3KgCIO8KIPAKIPEKEAQh8wpBACH0CiD0CigC3KgCIfUKQQAh9gog9gog7Ao2AtyoAiD1CiH3CiDsCiH4CiD3CiD4Ckch+QpBACH6CiD6CigC4KgCIfsKIPsKIfwKIOwKIf0KIPwKIP0KRyH+CiD5CiD+CnEh/wpBASGACyD/CiCAC3EhgQsCQAJAAkACQCCBC0UNACD1CigCACGCCyCCCyCLCCCMCBDnAiGDCyCDC0UNAQwCC0F/IYQLIIQLIYULDAILIPUKIPsKEAAACyD7ChACIIMLIYULCyCFCyGGCxADIYcLQX8hiAsghgsgiAtqIYkLQQEhigsgiQsgigtLGiDPCiFGINAKIUcghwshSCDPCiFJINAKIUoghwshSyCJCw4CAAIBC0EDIdQBDAILIAQg8wo2ApQjIAQoApQjIYsLIIsIEOoCQaAjIYwLIAQgjAtqIY0LAkAgjQsijwsjAksgjwsjA0lyBEAQHAsgjwskAAsgiwsPC0EAIdQBDAALAAsDAA8LkQICGX8CfiMAIQFBICECIAEgAmshAwJAIAMiGCMCSyAYIwNJcgRAEBwLIBgkAAtBCCEEIAMgBGohBSAFIQZBFCEHQQAhCEHYACEJQd0AIQogAyAANgIcIAMoAhwhCyADIAs2AgggAyAKNgIMIAMgCTYCECADIAg2AhQgAyAINgIYIAcQ6QIhDCADIAw2AgQgAygCBCENIAYpAgAhGiANIBo3AgBBECEOIA0gDmohDyAGIA5qIRAgECgCACERIA8gETYCAEEIIRIgDSASaiETIAYgEmohFCAUKQIAIRsgEyAbNwIAIAMoAgQhFUEgIRYgAyAWaiEXAkAgFyIZIwJLIBkjA0lyBEAQHAsgGSQACyAVDwseAAJAIABBgWBJDQAQlgJBACAAazYCAEF/IQALIAALBgBBgKgCCwYAQdCXAgt8AQN/QQAhAgJAAkACQANAIAJB0PkBai0AACAARg0BQdcAIQMgAkEBaiICQdcARw0ADAILAAsgAiEDIAINAEGw+gEhBAwBC0Gw+gEhAgNAIAItAAAhACACQQFqIgQhAiAADQAgBCECIANBf2oiAw0ACwsgBCABKAIUEN8CCw4AIAAQmgIoArABEJgCCwUAEJcCCwsAIAAgARAVEJUCC4wBAQJ/AkAgASwAACICDQAgAA8LQQAhAwJAIAAgAhClAiIARQ0AAkAgAS0AAQ0AIAAPCyAALQABRQ0AAkAgAS0AAg0AIAAgARCdAg8LIAAtAAJFDQACQCABLQADDQAgACABEJ4CDwsgAC0AA0UNAAJAIAEtAAQNACAAIAEQnwIPCyAAIAEQoAIhAwsgAwtyAQR/IAAtAAEiAkUhAwJAIAAtAABBCHQgAnIiBCABLQAAQQh0IAEtAAFyIgVGDQAgAkUNACAAQQFqIQIDQCACIgAtAAEiAUUhAyAEQQh0QYD+A3EgAXIiBCAFRg0BIABBAWohAiABDQALC0EAIAAgAxsLlAEBBX8gAEECaiECIAAtAAIiA0UhBAJAAkAgAC0AAUEQdCAALQAAQRh0ciADQQh0ciIFIAEtAAFBEHQgAS0AAEEYdHIgAS0AAkEIdHIiBkYNACADRQ0AA0AgAkEBaiEBIAItAAEiAEUhBCAFIAByQQh0IgUgBkYNAiABIQIgAA0ADAILAAsgAiEBC0EAIAFBfmogBBsLpwEBBH8gAEEDaiECIAAtAAMiA0UhBAJAAkAgAC0AAUEQdCAALQAAQRh0ciAALQACQQh0ciADciIFIAEoAAAiAEEYdCAAQQh0QYCA/AdxciAAQQh2QYD+A3EgAEEYdnJyIgFGDQAgA0UNAANAIAJBAWohAyACLQABIgBFIQQgBUEIdCAAciIFIAFGDQIgAyECIAANAAwCCwALIAIhAwtBACADQX1qIAQbC80HARB/AkAjAEGgCGsiAiIQIwJLIBAjA0lyBEAQHAsgECQACyACQZgIakIANwMAIAJBkAhqQgA3AwAgAkIANwOICCACQgA3A4AIQQAhAwJAAkACQAJAAkACQCABLQAAIgQNAEF/IQVBASEGDAELA0AgACADai0AAEUNBCACIARB/wFxIgRBAnRqIANBAWoiAzYCACACQYAIaiAEQQN2QRxxaiIGIAYoAgBBASAEQR9xdHI2AgAgASADai0AACIEDQALQQEhBkF/IQUgA0EBSw0BC0F/IQdBASEIDAELQQAhCEEBIQlBASEEA0ACQAJAIAEgBCAFamotAAAiByABIAZqLQAAIgpHDQACQCAEIAlHDQAgCSAIaiEIQQEhBAwCCyAEQQFqIQQMAQsCQCAHIApNDQAgBiAFayEJQQEhBCAGIQgMAQtBASEEIAghBSAIQQFqIQhBASEJCyAEIAhqIgYgA0kNAAtBASEIQX8hBwJAIANBAUsNACAJIQYMAQtBACEGQQEhC0EBIQQDQAJAAkAgASAEIAdqai0AACIKIAEgCGotAAAiDEcNAAJAIAQgC0cNACALIAZqIQZBASEEDAILIARBAWohBAwBCwJAIAogDE8NACAIIAdrIQtBASEEIAghBgwBC0EBIQQgBiEHIAZBAWohBkEBIQsLIAQgBmoiCCADSQ0ACyAJIQYgCyEICwJAAkAgASABIAggBiAHQQFqIAVBAWpLIgQbIgtqIAcgBSAEGyINQQFqIgkQoQJFDQAgAyANIAMgDUF/c2oiBCANIARLG0EBaiILayEOQQAhDwwBCyADIAtrIg4hDwsgA0F/aiEKIANBP3IhDEEAIQcgACEGA0ACQCAAIAZrIANPDQACQCAAQQAgDBCiAiIERQ0AIAQhACAEIAZrIANJDQMMAQsgACAMaiEACwJAAkACQCACQYAIaiAGIApqLQAAIgRBA3ZBHHFqKAIAIARBH3F2QQFxDQAgAyEEDAELAkAgAyACIARBAnRqKAIAayIERQ0AIA4gBCAEIAtJGyAEIAcbIAQgDxshBAwBCyAJIQQCQAJAIAEgCSAHIAkgB0sbIghqLQAAIgVFDQADQCAFQf8BcSAGIAhqLQAARw0CIAEgCEEBaiIIai0AACIFDQALIAkhBAsDQCAEIAdNDQYgASAEQX9qIgRqLQAAIAYgBGotAABGDQALIAshBCAPIQcMAgsgCCANayEEC0EAIQcLIAYgBGohBgwACwALQQAhBgsCQCACQaAIaiIRIwJLIBEjA0lyBEAQHAsgESQACyAGC0oBA39BACEDAkAgAkUNAAJAA0AgAC0AACIEIAEtAAAiBUcNASABQQFqIQEgAEEBaiEAIAJBf2oiAg0ADAILAAsgBCAFayEDCyADC+cBAQJ/IAJBAEchAwJAAkACQCACRQ0AIABBA3FFDQAgAUH/AXEhBANAIAAtAAAgBEYNAiAAQQFqIQAgAkF/aiICQQBHIQMgAkUNASAAQQNxDQALCyADRQ0BCwJAIAAtAAAgAUH/AXFGDQAgAkEESQ0AIAFB/wFxQYGChAhsIQQDQCAAKAIAIARzIgNBf3MgA0H//ft3anFBgIGChHhxDQEgAEEEaiEAIAJBfGoiAkEDSw0ACwsgAkUNACABQf8BcSEDA0ACQCAALQAAIANHDQAgAA8LIABBAWohACACQX9qIgINAAsLQQALEgAgACAAEIIDaiABEKcCGiAAC+QBAQJ/AkACQCABQf8BcSICRQ0AAkAgAEEDcUUNAANAIAAtAAAiA0UNAyADIAFB/wFxRg0DIABBAWoiAEEDcQ0ACwsCQCAAKAIAIgNBf3MgA0H//ft3anFBgIGChHhxDQAgAkGBgoQIbCECA0AgAyACcyIDQX9zIANB//37d2pxQYCBgoR4cQ0BIAAoAgQhAyAAQQRqIQAgA0F/cyADQf/9+3dqcUGAgYKEeHFFDQALCwJAA0AgACIDLQAAIgJFDQEgA0EBaiEAIAIgAUH/AXFHDQALCyADDwsgACAAEIIDag8LIAALGgAgACABEKQCIgBBACAALQAAIAFB/wFxRhsLzQEBAX8CQAJAIAEgAHNBA3ENAAJAIAFBA3FFDQADQCAAIAEtAAAiAjoAACACRQ0DIABBAWohACABQQFqIgFBA3ENAAsLIAEoAgAiAkF/cyACQf/9+3dqcUGAgYKEeHENAANAIAAgAjYCACABKAIEIQIgAEEEaiEAIAFBBGohASACQX9zIAJB//37d2pxQYCBgoR4cUUNAAsLIAAgAS0AACICOgAAIAJFDQADQCAAIAEtAAEiAjoAASAAQQFqIQAgAUEBaiEBIAINAAsLIAALDAAgACABEKYCGiAAC1kBAn8gAS0AACECAkAgAC0AACIDRQ0AIAMgAkH/AXFHDQADQCABLQABIQIgAC0AASIDRQ0BIAFBAWohASAAQQFqIQAgAyACQf8BcUYNAAsLIAMgAkH/AXFrC3ABA38CQCACDQBBAA8LQQAhAwJAIAAtAAAiBEUNAAJAA0AgBEH/AXEgAS0AACIFRw0BIAJBf2oiAkUNASAFRQ0BIAFBAWohASAALQABIQQgAEEBaiEAIAQNAAwCCwALIAQhAwsgA0H/AXEgAS0AAGsLJAECfwJAIAAQggNBAWoiARDpAiICDQBBAA8LIAIgACABEPcCC2cCAn8BfiAAKAIoIQFBASECAkAgAC0AAEGAAXFFDQBBAkEBIAAoAhQgACgCHEsbIQILAkAgAEIAIAIgAREMACIDQgBTDQAgAyAAKAIIIAAoAgRrrH0gACgCFCAAKAIca6x8IQMLIAMLNgIBfwF+AkAgACgCTEF/Sg0AIAAQqwIPCyAAEIADIQEgABCrAiECAkAgAUUNACAAEIEDCyACCyUBAX4CQCAAEKwCIgFCgICAgAhTDQAQlgJBPTYCAEF/DwsgAacLPQECfwJAAkAgACgCTEF/Sg0AIAAoAgAhAQwBCyAAEIADIQIgACgCACEBIAJFDQAgABCBAwsgAUEFdkEBcQsCAAu8AQEFf0EAIQECQCAAKAJMQQBIDQAgABCAAyEBCyAAEK8CAkAgACgCAEEBcSICDQAQ2AIhAwJAIAAoAjQiBEUNACAEIAAoAjg2AjgLAkAgACgCOCIFRQ0AIAUgBDYCNAsCQCADKAIAIABHDQAgAyAFNgIACxDZAgsgABCxAiEDIAAgACgCDBECACEEAkAgACgCYCIFRQ0AIAUQ6gILAkACQCACDQAgABDqAgwBCyABRQ0AIAAQgQMLIAQgA3ILuAEBAn8CQAJAIABFDQACQCAAKAJMQX9KDQAgABCyAg8LIAAQgAMhASAAELICIQIgAUUNASAAEIEDIAIPC0EAIQICQEEAKALgmwJFDQBBACgC4JsCELECIQILAkAQ2AIoAgAiAEUNAANAQQAhAQJAIAAoAkxBAEgNACAAEIADIQELAkAgACgCFCAAKAIcTQ0AIAAQsgIgAnIhAgsCQCABRQ0AIAAQgQMLIAAoAjgiAA0ACwsQ2QILIAILawECfwJAIAAoAhQgACgCHE0NACAAQQBBACAAKAIkEQMAGiAAKAIUDQBBfw8LAkAgACgCBCIBIAAoAggiAk8NACAAIAEgAmusQQEgACgCKBEMABoLIABBADYCHCAAQgA3AxAgAEIANwIEQQALVAEDfwJAIwBBEGsiBCIFIwJLIAUjA0lyBEAQHAsgBSQACyAEIAM2AgwgACABIAIgAxC6AiEDAkAgBEEQaiIGIwJLIAYjA0lyBEAQHAsgBiQACyADC4EBAAJAIAJBAUcNACABIAAoAgggACgCBGusfSEBCwJAAkAgACgCFCAAKAIcTQ0AIABBAEEAIAAoAiQRAwAaIAAoAhRFDQELIABBADYCHCAAQgA3AxAgACABIAIgACgCKBEMAEIAUw0AIABCADcCBCAAIAAoAgBBb3E2AgBBAA8LQX8LPAEBfwJAIAAoAkxBf0oNACAAIAEgAhC0Ag8LIAAQgAMhAyAAIAEgAhC0AiECAkAgA0UNACAAEIEDCyACCwwAIAAgAawgAhC1AguCAgEGfwJAIwBBIGsiAyIHIwJLIAcjA0lyBEAQHAsgByQACyADIAE2AhAgAyACIAAoAjAiBEEAR2s2AhQgACgCLCEFIAMgBDYCHCADIAU2AhhBfyEEAkACQAJAIAAoAjwgA0EQakECIANBDGoQGBDiAg0AIAMoAgwiBEEASg0BCyAAIARBMHFBEHMgACgCAHI2AgAMAQsgBCADKAIUIgZNDQAgACAAKAIsIgU2AgQgACAFIAQgBmtqNgIIAkAgACgCMEUNACAAIAVBAWo2AgQgAiABakF/aiAFLQAAOgAACyACIQQLAkAgA0EgaiIIIwJLIAgjA0lyBEAQHAsgCCQACyAEC/UCAQR/AkAjAEEgayICIgQjAksgBCMDSXIEQBAcCyAEJAALAkACQAJAAkBBvIgCIAEsAAAQpQINABCWAkEcNgIADAELQZgJEOkCIgMNAQtBACEDDAELIANBAEGQARD4AhoCQCABQSsQpQINACADQQhBBCABLQAAQfIARhs2AgALAkACQCABLQAAQeEARg0AIAMoAgAhAQwBCwJAIABBA0EAEBYiAUGACHENACACIAFBgAhyNgIQIABBBCACQRBqEBYaCyADIAMoAgBBgAFyIgE2AgALIANB/wE6AEsgA0GACDYCMCADIAA2AjwgAyADQZgBajYCLAJAIAFBCHENACACIAJBGGo2AgAgAEGTqAEgAhAXDQAgA0EKOgBLCyADQd4ANgIoIANB3wA2AiQgA0HgADYCICADQeEANgIMAkBBACgCiKgCDQAgA0F/NgJMCyADENcCIQMLAkAgAkEgaiIFIwJLIAUjA0lyBEAQHAsgBSQACyADC58BAQV/AkAjAEEQayICIgUjAksgBSMDSXIEQBAcCyAFJAALAkACQAJAQcCIAiABLAAAEKUCDQAQlgJBHDYCAAwBCyABENwCIQMgAkG2AzYCAEEAIQQgACADQYCAAnIgAhATEJUCIgBBAEgNASAAIAEQuAIiBA0BIAAQFBoLQQAhBAsCQCACQRBqIgYjAksgBiMDSXIEQBAcCyAGJAALIAQL5gEBBH8CQCMAQaABayIEIgYjAksgBiMDSXIEQBAcCyAGJAALIARBCGpByIgCQZABEPcCGgJAAkACQCABQX9qQf////8HSQ0AIAENASAEQZ8BaiEAQQEhAQsgBCAANgI0IAQgADYCHCAEQX4gAGsiBSABIAEgBUsbIgE2AjggBCAAIAFqIgA2AiQgBCAANgIYIARBCGogAiADENACIQAgAUUNASAEKAIcIgEgASAEKAIYRmtBADoAAAwBCxCWAkE9NgIAQX8hAAsCQCAEQaABaiIHIwJLIAcjA0lyBEAQHAsgByQACyAACzQBAX8gACgCFCIDIAEgAiAAKAIQIANrIgMgAyACSxsiAxD3AhogACAAKAIUIANqNgIUIAIL8gEBBX9BACEEAkAgAygCTEEASA0AIAMQgAMhBAsgAiABbCEFIAMgAy0ASiIGQX9qIAZyOgBKAkACQCADKAIIIAMoAgQiB2siBkEBTg0AIAUhBgwBCyAAIAcgBiAFIAYgBUkbIggQ9wIaIAMgAygCBCAIajYCBCAFIAhrIQYgACAIaiEACwJAIAZFDQADQAJAAkAgAxDAAg0AIAMgACAGIAMoAiARAwAiCEEBakEBSw0BCwJAIARFDQAgAxCBAwsgBSAGayABbg8LIAAgCGohACAGIAhrIgYNAAsLIAJBACABGyEAAkAgBEUNACADEIEDCyAACxEAIABB/////wcgASACELoCC1IBA38CQCMAQRBrIgMiBCMCSyAEIwNJcgRAEBwLIAQkAAsgAyACNgIMIAAgASACEL0CIQICQCADQRBqIgUjAksgBSMDSXIEQBAcCyAFJAALIAILZgEDfwJAIwBBEGsiAyIEIwJLIAQjA0lyBEAQHAsgBCQACyAAKAI8IAEgAkH/AXEgA0EIahCJAxDiAiEAIAMpAwghAQJAIANBEGoiBSMCSyAFIwNJcgRAEBwLIAUkAAtCfyABIAAbC4EBAQJ/IAAgAC0ASiIBQX9qIAFyOgBKAkAgACgCFCAAKAIcTQ0AIABBAEEAIAAoAiQRAwAaCyAAQQA2AhwgAEIANwMQAkAgACgCACIBQQRxRQ0AIAAgAUEgcjYCAEF/DwsgACAAKAIsIAAoAjBqIgI2AgggACACNgIEIAFBG3RBH3ULVAEBfwJAAkAgACgCTEEASA0AIAAQgAMhASAAQgBBABC0AhogACAAKAIAQV9xNgIAIAFFDQEgABCBAw8LIABCAEEAELQCGiAAIAAoAgBBX3E2AgALCwoAIABBUGpBCkkLpAIBAX9BASEDAkACQCAARQ0AIAFB/wBNDQECQAJAEMQCKAKwASgCAA0AIAFBgH9xQYC/A0YNAxCWAkEZNgIADAELAkAgAUH/D0sNACAAIAFBP3FBgAFyOgABIAAgAUEGdkHAAXI6AABBAg8LAkACQCABQYCwA0kNACABQYBAcUGAwANHDQELIAAgAUE/cUGAAXI6AAIgACABQQx2QeABcjoAACAAIAFBBnZBP3FBgAFyOgABQQMPCwJAIAFBgIB8akH//z9LDQAgACABQT9xQYABcjoAAyAAIAFBEnZB8AFyOgAAIAAgAUEGdkE/cUGAAXI6AAIgACABQQx2QT9xQYABcjoAAUEEDwsQlgJBGTYCAAtBfyEDCyADDwsgACABOgAAQQELBQAQlwILFQACQCAADQBBAA8LIAAgAUEAEMMCC48BAgF/AX4CQCAAvSIDQjSIp0H/D3EiAkH/D0YNAAJAIAINAAJAAkAgAEQAAAAAAAAAAGINAEEAIQIMAQsgAEQAAAAAAADwQ6IgARDGAiEAIAEoAgBBQGohAgsgASACNgIAIAAPCyABIAJBgnhqNgIAIANC/////////4eAf4NCgICAgICAgPA/hL8hAAsgAAu4AwEFfwJAIwBB0AFrIgUiCCMCSyAIIwNJcgRAEBwLIAgkAAsgBSACNgLMAUEAIQIgBUGgAWpBAEEoEPgCGiAFIAUoAswBNgLIAQJAAkBBACABIAVByAFqIAVB0ABqIAVBoAFqIAMgBBDIAkEATg0AQX8hAQwBCwJAIAAoAkxBAEgNACAAEIADIQILIAAoAgAhBgJAIAAsAEpBAEoNACAAIAZBX3E2AgALIAZBIHEhBgJAAkAgACgCMEUNACAAIAEgBUHIAWogBUHQAGogBUGgAWogAyAEEMgCIQEMAQsgAEHQADYCMCAAIAVB0ABqNgIQIAAgBTYCHCAAIAU2AhQgACgCLCEHIAAgBTYCLCAAIAEgBUHIAWogBUHQAGogBUGgAWogAyAEEMgCIQEgB0UNACAAQQBBACAAKAIkEQMAGiAAQQA2AjAgACAHNgIsIABBADYCHCAAQQA2AhAgACgCFCEDIABBADYCFCABQX8gAxshAQsgACAAKAIAIgMgBnI2AgBBfyABIANBIHEbIQEgAkUNACAAEIEDCwJAIAVB0AFqIgkjAksgCSMDSXIEQBAcCyAJJAALIAEL2RICEX8BfgJAIwBB0ABrIgciFiMCSyAWIwNJcgRAEBwLIBYkAAsgByABNgJMIAdBN2ohCCAHQThqIQlBACEKQQAhC0EAIQECQANAAkAgC0EASA0AAkAgAUH/////ByALa0wNABCWAkE9NgIAQX8hCwwBCyABIAtqIQsLIAcoAkwiDCEBAkACQAJAAkACQCAMLQAAIg1FDQADQAJAAkACQCANQf8BcSINDQAgASENDAELIA1BJUcNASABIQ0DQCABLQABQSVHDQEgByABQQJqIg42AkwgDUEBaiENIAEtAAIhDyAOIQEgD0ElRg0ACwsgDSAMayEBAkAgAEUNACAAIAwgARDJAgsgAQ0HIAcoAkwsAAEQwgIhASAHKAJMIQ0CQAJAIAFFDQAgDS0AAkEkRw0AIA1BA2ohASANLAABQVBqIRBBASEKDAELIA1BAWohAUF/IRALIAcgATYCTEEAIRECQAJAIAEsAAAiD0FgaiIOQR9NDQAgASENDAELQQAhESABIQ1BASAOdCIOQYnRBHFFDQADQCAHIAFBAWoiDTYCTCAOIBFyIREgASwAASIPQWBqIg5BIE8NASANIQFBASAOdCIOQYnRBHENAAsLAkACQCAPQSpHDQACQAJAIA0sAAEQwgJFDQAgBygCTCINLQACQSRHDQAgDSwAAUECdCAEakHAfmpBCjYCACANQQNqIQEgDSwAAUEDdCADakGAfWooAgAhEkEBIQoMAQsgCg0GQQAhCkEAIRICQCAARQ0AIAIgAigCACIBQQRqNgIAIAEoAgAhEgsgBygCTEEBaiEBCyAHIAE2AkwgEkF/Sg0BQQAgEmshEiARQYDAAHIhEQwBCyAHQcwAahDKAiISQQBIDQQgBygCTCEBC0F/IRMCQCABLQAAQS5HDQACQCABLQABQSpHDQACQCABLAACEMICRQ0AIAcoAkwiAS0AA0EkRw0AIAEsAAJBAnQgBGpBwH5qQQo2AgAgASwAAkEDdCADakGAfWooAgAhEyAHIAFBBGoiATYCTAwCCyAKDQUCQAJAIAANAEEAIRMMAQsgAiACKAIAIgFBBGo2AgAgASgCACETCyAHIAcoAkxBAmoiATYCTAwBCyAHIAFBAWo2AkwgB0HMAGoQygIhEyAHKAJMIQELQQAhDQNAIA0hDkF/IRQgASwAAEG/f2pBOUsNCSAHIAFBAWoiDzYCTCABLAAAIQ0gDyEBIA0gDkE6bGpBr4kCai0AACINQX9qQQhJDQALAkACQAJAIA1BE0YNACANRQ0LAkAgEEEASA0AIAQgEEECdGogDTYCACAHIAMgEEEDdGopAwA3A0AMAgsgAEUNCSAHQcAAaiANIAIgBhDLAiAHKAJMIQ8MAgtBfyEUIBBBf0oNCgtBACEBIABFDQgLIBFB//97cSIVIBEgEUGAwABxGyENQQAhFEHYiQIhECAJIRECQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAPQX9qLAAAIgFBX3EgASABQQ9xQQNGGyABIA4bIgFBqH9qDiEEFRUVFRUVFRUOFQ8GDg4OFQYVFRUVAgUDFRUJFQEVFQQACyAJIRECQCABQb9/ag4HDhULFQ4ODgALIAFB0wBGDQkMEwtBACEUQdiJAiEQIAcpA0AhGAwFC0EAIQECQAJAAkACQAJAAkACQCAOQf8BcQ4IAAECAwQbBQYbCyAHKAJAIAs2AgAMGgsgBygCQCALNgIADBkLIAcoAkAgC6w3AwAMGAsgBygCQCALOwEADBcLIAcoAkAgCzoAAAwWCyAHKAJAIAs2AgAMFQsgBygCQCALrDcDAAwUCyATQQggE0EISxshEyANQQhyIQ1B+AAhAQtBACEUQdiJAiEQIAcpA0AgCSABQSBxEMwCIQwgDUEIcUUNAyAHKQNAUA0DIAFBBHZB2IkCaiEQQQIhFAwDC0EAIRRB2IkCIRAgBykDQCAJEM0CIQwgDUEIcUUNAiATIAkgDGsiAUEBaiATIAFKGyETDAILAkAgBykDQCIYQn9VDQAgB0IAIBh9Ihg3A0BBASEUQdiJAiEQDAELAkAgDUGAEHFFDQBBASEUQdmJAiEQDAELQdqJAkHYiQIgDUEBcSIUGyEQCyAYIAkQzgIhDAsgDUH//3txIA0gE0F/ShshDSAHKQNAIRgCQCATDQAgGFBFDQBBACETIAkhDAwMCyATIAkgDGsgGFBqIgEgEyABShshEwwLC0EAIRQgBygCQCIBQeKJAiABGyIMQQAgExCiAiIBIAwgE2ogARshESAVIQ0gASAMayATIAEbIRMMCwsCQCATRQ0AIAcoAkAhDgwCC0EAIQEgAEEgIBJBACANEM8CDAILIAdBADYCDCAHIAcpA0A+AgggByAHQQhqNgJAQX8hEyAHQQhqIQ4LQQAhAQJAA0AgDigCACIPRQ0BAkAgB0EEaiAPEMUCIg9BAEgiDA0AIA8gEyABa0sNACAOQQRqIQ4gEyAPIAFqIgFLDQEMAgsLQX8hFCAMDQwLIABBICASIAEgDRDPAgJAIAENAEEAIQEMAQtBACEPIAcoAkAhDgNAIA4oAgAiDEUNASAHQQRqIAwQxQIiDCAPaiIPIAFKDQEgACAHQQRqIAwQyQIgDkEEaiEOIA8gAUkNAAsLIABBICASIAEgDUGAwABzEM8CIBIgASASIAFKGyEBDAkLIAAgBysDQCASIBMgDSABIAURFAAhAQwICyAHIAcpA0A8ADdBASETIAghDCAJIREgFSENDAULIAcgAUEBaiIONgJMIAEtAAEhDSAOIQEMAAsACyALIRQgAA0FIApFDQNBASEBAkADQCAEIAFBAnRqKAIAIg1FDQEgAyABQQN0aiANIAIgBhDLAkEBIRQgAUEBaiIBQQpHDQAMBwsAC0EBIRQgAUEKTw0FA0AgBCABQQJ0aigCAA0BQQEhFCABQQFqIgFBCkYNBgwACwALQX8hFAwECyAJIRELIABBICAUIBEgDGsiDyATIBMgD0gbIhFqIg4gEiASIA5IGyIBIA4gDRDPAiAAIBAgFBDJAiAAQTAgASAOIA1BgIAEcxDPAiAAQTAgESAPQQAQzwIgACAMIA8QyQIgAEEgIAEgDiANQYDAAHMQzwIMAQsLQQAhFAsCQCAHQdAAaiIXIwJLIBcjA0lyBEAQHAsgFyQACyAUCxkAAkAgAC0AAEEgcQ0AIAEgAiAAEPoCGgsLSwEDf0EAIQECQCAAKAIALAAAEMICRQ0AA0AgACgCACICLAAAIQMgACACQQFqNgIAIAMgAUEKbGpBUGohASACLAABEMICDQALCyABC7sCAAJAIAFBFEsNAAJAAkACQAJAAkACQAJAAkACQAJAIAFBd2oOCgABAgMEBQYHCAkKCyACIAIoAgAiAUEEajYCACAAIAEoAgA2AgAPCyACIAIoAgAiAUEEajYCACAAIAE0AgA3AwAPCyACIAIoAgAiAUEEajYCACAAIAE1AgA3AwAPCyACIAIoAgBBB2pBeHEiAUEIajYCACAAIAEpAwA3AwAPCyACIAIoAgAiAUEEajYCACAAIAEyAQA3AwAPCyACIAIoAgAiAUEEajYCACAAIAEzAQA3AwAPCyACIAIoAgAiAUEEajYCACAAIAEwAAA3AwAPCyACIAIoAgAiAUEEajYCACAAIAExAAA3AwAPCyACIAIoAgBBB2pBeHEiAUEIajYCACAAIAErAwA5AwAPCyAAIAIgAxEFAAsLNgACQCAAUA0AA0AgAUF/aiIBIACnQQ9xQcCNAmotAAAgAnI6AAAgAEIEiCIAQgBSDQALCyABCy4AAkAgAFANAANAIAFBf2oiASAAp0EHcUEwcjoAACAAQgOIIgBCAFINAAsLIAELiAECA38BfgJAAkAgAEKAgICAEFoNACAAIQUMAQsDQCABQX9qIgEgACAAQgqAIgVCCn59p0EwcjoAACAAQv////+fAVYhAiAFIQAgAg0ACwsCQCAFpyICRQ0AA0AgAUF/aiIBIAIgAkEKbiIDQQpsa0EwcjoAACACQQlLIQQgAyECIAQNAAsLIAELnQEBA38CQCMAQYACayIFIgYjAksgBiMDSXIEQBAcCyAGJAALAkAgAiADTA0AIARBgMAEcQ0AIAUgAUH/AXEgAiADayICQYACIAJBgAJJIgMbEPgCGgJAIAMNAANAIAAgBUGAAhDJAiACQYB+aiICQf8BSw0ACwsgACAFIAIQyQILAkAgBUGAAmoiByMCSyAHIwNJcgRAEBwLIAckAAsLEQAgACABIAJB4wBB5AAQxwIL3xgDFH8CfgF8AkAjAEGwBGsiBiIYIwJLIBgjA0lyBEAQHAsgGCQAC0EAIQcgBkEANgIsAkACQCABENMCIhpCf1UNAEEBIQhB0I0CIQkgAZoiARDTAiEaDAELQQEhCAJAIARBgBBxRQ0AQdONAiEJDAELQdaNAiEJIARBAXENAEEAIQhBASEHQdGNAiEJCwJAAkAgGkKAgICAgICA+P8Ag0KAgICAgICA+P8AUg0AIABBICACIAhBA2oiCiAEQf//e3EQzwIgACAJIAgQyQIgAEHrjQJB740CIAVBIHEiCxtB440CQeeNAiALGyABIAFiG0EDEMkCIABBICACIAogBEGAwABzEM8CDAELIAZBEGohDAJAAkACQAJAIAEgBkEsahDGAiIBIAGgIgFEAAAAAAAAAABhDQAgBiAGKAIsIgtBf2o2AiwgBUEgciINQeEARw0BDAMLIAVBIHIiDUHhAEYNAkEGIAMgA0EASBshDiAGKAIsIQ8MAQsgBiALQWNqIg82AixBBiADIANBAEgbIQ4gAUQAAAAAAACwQaIhAQsgBkEwaiAGQdACaiAPQQBIGyIQIREDQAJAAkAgAUQAAAAAAADwQWMgAUQAAAAAAAAAAGZxRQ0AIAGrIQsMAQtBACELCyARIAs2AgAgEUEEaiERIAEgC7ihRAAAAABlzc1BoiIBRAAAAAAAAAAAYg0ACwJAAkAgD0EBTg0AIA8hAyARIQsgECESDAELIBAhEiAPIQMDQCADQR0gA0EdSBshAwJAIBFBfGoiCyASSQ0AIAOtIRtCACEaA0AgCyALNQIAIBuGIBpC/////w+DfCIaIBpCgJTr3AOAIhpCgJTr3AN+fT4CACALQXxqIgsgEk8NAAsgGqciC0UNACASQXxqIhIgCzYCAAsCQANAIBEiCyASTQ0BIAtBfGoiESgCAEUNAAsLIAYgBigCLCADayIDNgIsIAshESADQQBKDQALCwJAIANBf0oNACAOQRlqQQltQQFqIRMgDUHmAEYhFANAQQlBACADayADQXdIGyEKAkACQCASIAtJDQAgEiASQQRqIBIoAgAbIRIMAQtBgJTr3AMgCnYhFUF/IAp0QX9zIRZBACEDIBIhEQNAIBEgESgCACIXIAp2IANqNgIAIBcgFnEgFWwhAyARQQRqIhEgC0kNAAsgEiASQQRqIBIoAgAbIRIgA0UNACALIAM2AgAgC0EEaiELCyAGIAYoAiwgCmoiAzYCLCAQIBIgFBsiESATQQJ0aiALIAsgEWtBAnUgE0obIQsgA0EASA0ACwtBACERAkAgEiALTw0AIBAgEmtBAnVBCWwhEUEKIQMgEigCACIXQQpJDQADQCARQQFqIREgFyADQQpsIgNPDQALCwJAIA5BACARIA1B5gBGG2sgDkEARyANQecARnFrIgMgCyAQa0ECdUEJbEF3ak4NACADQYDIAGoiF0EJbSIVQQJ0IAZBMGpBBHIgBkHUAmogD0EASBtqQYBgaiEKQQohAwJAIBcgFUEJbGsiF0EHSg0AA0AgA0EKbCEDIBdBAWoiF0EIRw0ACwsgCigCACIVIBUgA24iFiADbGshFwJAAkAgCkEEaiITIAtHDQAgF0UNAQtEAAAAAAAA4D9EAAAAAAAA8D9EAAAAAAAA+D8gFyADQQF2IhRGG0QAAAAAAAD4PyATIAtGGyAXIBRJGyEcRAEAAAAAAEBDRAAAAAAAAEBDIBZBAXEbIQECQCAHDQAgCS0AAEEtRw0AIByaIRwgAZohAQsgCiAVIBdrIhc2AgAgASAcoCABYQ0AIAogFyADaiIRNgIAAkAgEUGAlOvcA0kNAANAIApBADYCAAJAIApBfGoiCiASTw0AIBJBfGoiEkEANgIACyAKIAooAgBBAWoiETYCACARQf+T69wDSw0ACwsgECASa0ECdUEJbCERQQohAyASKAIAIhdBCkkNAANAIBFBAWohESAXIANBCmwiA08NAAsLIApBBGoiAyALIAsgA0sbIQsLAkADQCALIgMgEk0iFw0BIANBfGoiCygCAEUNAAsLAkACQCANQecARg0AIARBCHEhFgwBCyARQX9zQX8gDkEBIA4bIgsgEUogEUF7SnEiChsgC2ohDkF/QX4gChsgBWohBSAEQQhxIhYNAEF3IQsCQCAXDQAgA0F8aigCACIKRQ0AQQohF0EAIQsgCkEKcA0AA0AgCyIVQQFqIQsgCiAXQQpsIhdwRQ0ACyAVQX9zIQsLIAMgEGtBAnVBCWwhFwJAIAVBX3FBxgBHDQBBACEWIA4gFyALakF3aiILQQAgC0EAShsiCyAOIAtIGyEODAELQQAhFiAOIBEgF2ogC2pBd2oiC0EAIAtBAEobIgsgDiALSBshDgsgDiAWciIUQQBHIRcCQAJAIAVBX3EiFUHGAEcNACARQQAgEUEAShshCwwBCwJAIAwgESARQR91IgtqIAtzrSAMEM4CIgtrQQFKDQADQCALQX9qIgtBMDoAACAMIAtrQQJIDQALCyALQX5qIhMgBToAACALQX9qQS1BKyARQQBIGzoAACAMIBNrIQsLIABBICACIAggDmogF2ogC2pBAWoiCiAEEM8CIAAgCSAIEMkCIABBMCACIAogBEGAgARzEM8CAkACQAJAAkAgFUHGAEcNACAGQRBqQQhyIRUgBkEQakEJciERIBAgEiASIBBLGyIXIRIDQCASNQIAIBEQzgIhCwJAAkAgEiAXRg0AIAsgBkEQak0NAQNAIAtBf2oiC0EwOgAAIAsgBkEQaksNAAwCCwALIAsgEUcNACAGQTA6ABggFSELCyAAIAsgESALaxDJAiASQQRqIhIgEE0NAAsCQCAURQ0AIABB840CQQEQyQILIBIgA08NASAOQQFIDQEDQAJAIBI1AgAgERDOAiILIAZBEGpNDQADQCALQX9qIgtBMDoAACALIAZBEGpLDQALCyAAIAsgDkEJIA5BCUgbEMkCIA5Bd2ohCyASQQRqIhIgA08NAyAOQQlKIRcgCyEOIBcNAAwDCwALAkAgDkEASA0AIAMgEkEEaiADIBJLGyEVIAZBEGpBCHIhECAGQRBqQQlyIQMgEiERA0ACQCARNQIAIAMQzgIiCyADRw0AIAZBMDoAGCAQIQsLAkACQCARIBJGDQAgCyAGQRBqTQ0BA0AgC0F/aiILQTA6AAAgCyAGQRBqSw0ADAILAAsgACALQQEQyQIgC0EBaiELAkAgFg0AIA5BAUgNAQsgAEHzjQJBARDJAgsgACALIAMgC2siFyAOIA4gF0obEMkCIA4gF2shDiARQQRqIhEgFU8NASAOQX9KDQALCyAAQTAgDkESakESQQAQzwIgACATIAwgE2sQyQIMAgsgDiELCyAAQTAgC0EJakEJQQAQzwILIABBICACIAogBEGAwABzEM8CDAELIAlBCWogCSAFQSBxIhEbIQ4CQCADQQtLDQBBDCADayILRQ0ARAAAAAAAACBAIRwDQCAcRAAAAAAAADBAoiEcIAtBf2oiCw0ACwJAIA4tAABBLUcNACAcIAGaIByhoJohAQwBCyABIBygIByhIQELAkAgBigCLCILIAtBH3UiC2ogC3OtIAwQzgIiCyAMRw0AIAZBMDoADyAGQQ9qIQsLIAhBAnIhFiAGKAIsIRIgC0F+aiIVIAVBD2o6AAAgC0F/akEtQSsgEkEASBs6AAAgBEEIcSEXIAZBEGohEgNAIBIhCwJAAkAgAZlEAAAAAAAA4EFjRQ0AIAGqIRIMAQtBgICAgHghEgsgCyASQcCNAmotAAAgEXI6AAAgASASt6FEAAAAAAAAMECiIQECQCALQQFqIhIgBkEQamtBAUcNAAJAIBcNACADQQBKDQAgAUQAAAAAAAAAAGENAQsgC0EuOgABIAtBAmohEgsgAUQAAAAAAAAAAGINAAsCQAJAIANFDQAgEiAGQRBqa0F+aiADTg0AIAMgDGogFWtBAmohCwwBCyAMIAZBEGprIBVrIBJqIQsLIABBICACIAsgFmoiCiAEEM8CIAAgDiAWEMkCIABBMCACIAogBEGAgARzEM8CIAAgBkEQaiASIAZBEGprIhIQyQIgAEEwIAsgEiAMIBVrIhFqa0EAQQAQzwIgACAVIBEQyQIgAEEgIAIgCiAEQYDAAHMQzwILAkAgBkGwBGoiGSMCSyAZIwNJcgRAEBwLIBkkAAsgAiAKIAogAkgbCysBAX8gASABKAIAQQ9qQXBxIgJBEGo2AgAgACACKQMAIAIpAwgQ5QI5AwALBQAgAL0LBAAgAAsMACAAKAI8ENQCEBQLUgEDfwJAIwBBEGsiAyIEIwJLIAQjA0lyBEAQHAsgBCQACyADIAI2AgwgACABIAIQ0AIhAgJAIANBEGoiBSMCSyAFIwNJcgRAEBwLIAUkAAsgAgsxAQJ/IAAQ2AIiASgCADYCOAJAIAEoAgAiAkUNACACIAA2AjQLIAEgADYCABDZAiAACw0AQcyoAhDgAkHUqAILCQBBzKgCEOECC4IDAQl/AkAjAEEgayIDIgojAksgCiMDSXIEQBAcCyAKJAALIAMgACgCHCIENgIQIAAoAhQhBSADIAI2AhwgAyABNgIYIAMgBSAEayIBNgIUIAEgAmohBkECIQcgA0EQaiEBAkACQAJAAkAgACgCPCADQRBqQQIgA0EMahAZEOICDQADQCAGIAMoAgwiBEYNAiAEQX9MDQMgASAEIAEoAgQiCEsiBUEDdGoiCSAJKAIAIAQgCEEAIAUbayIIajYCACABQQxBBCAFG2oiCSAJKAIAIAhrNgIAIAYgBGshBiAAKAI8IAFBCGogASAFGyIBIAcgBWsiByADQQxqEBkQ4gJFDQALCyAGQX9HDQELIAAgACgCLCIBNgIcIAAgATYCFCAAIAEgACgCMGo2AhAgAiEEDAELQQAhBCAAQQA2AhwgAEIANwMQIAAgACgCAEEgcjYCACAHQQJGDQAgAiABKAIEayEECwJAIANBIGoiCyMCSyALIwNJcgRAEBwLIAskAAsgBAs9AQJ/AkACQCAAKAJMQX9KDQAgACgCACEBDAELIAAQgAMhAiAAKAIAIQEgAkUNACAAEIEDCyABQQR2QQFxC3QBAX9BAiEBAkAgAEErEKUCDQAgAC0AAEHyAEchAQsgAUGAAXIgASAAQfgAEKUCGyIBQYCAIHIgASAAQeUAEKUCGyIBIAFBwAByIAAtAAAiAEHyAEYbIgFBgARyIAEgAEH3AEYbIgFBgAhyIAEgAEHhAEYbCxEBAX4gACAAQj+HIgF8IAGFCwQAIAALCQAgACABEN4CCwIACwIACxYAAkAgAA0AQQAPCxCWAiAANgIAQX8LUwEBfgJAAkAgA0HAAHFFDQAgASADQUBqrYYhAkIAIQEMAQsgA0UNACABQcAAIANrrYggAiADrSIEhoQhAiABIASGIQELIAAgATcDACAAIAI3AwgLUwEBfgJAAkAgA0HAAHFFDQAgAiADQUBqrYghAUIAIQIMAQsgA0UNACACQcAAIANrrYYgASADrSIEiIQhASACIASIIQILIAAgATcDACAAIAI3AwgLlAQCBH8CfgJAIwBBIGsiAiIEIwJLIAQjA0lyBEAQHAsgBCQACwJAAkAgAUL///////////8AgyIGQoCAgICAgMD/Q3wgBkKAgICAgIDAgLx/fFoNACAAQjyIIAFCBIaEIQYCQCAAQv//////////D4MiAEKBgICAgICAgAhUDQAgBkKBgICAgICAgMAAfCEHDAILIAZCgICAgICAgIDAAHwhByAAQoCAgICAgICACIVCAFINASAHQgGDIAd8IQcMAQsCQCAAUCAGQoCAgICAgMD//wBUIAZCgICAgICAwP//AFEbDQAgAEI8iCABQgSGhEL/////////A4NCgICAgICAgPz/AIQhBwwBC0KAgICAgICA+P8AIQcgBkL///////+//8MAVg0AQgAhByAGQjCIpyIDQZH3AEkNACAC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oqMCNwIAIAAgAjYCAEEACyYBAX9BACEBAkAgAEUNACAAKAIEQc6VmhJHDQAgACgCACEBCyABCyoBAX9BHCECAkAgAEUNACAAKAIEQc6VmhJHDQAgACABNgIAQQAhAgsgAgtIAAJAIAC9Qv///////////wCDQoCAgICAgID4/wBWDQAgACAAIAGkIAG9Qv///////////wCDQoCAgICAgID4/wBWGw8LIAELSAACQCAAvUL///////////8Ag0KAgICAgICA+P8AVg0AIAAgACABpSABvUL///////////8Ag0KAgICAgICA+P8AVhsPCyABC5EEAQN/AkAgAkGABEkNACAAIAEgAhAbGiAADwsgACACaiEDAkACQCABIABzQQNxDQACQAJAIAJBAU4NACAAIQIMAQsCQCAAQQNxDQAgACECDAELIAAhAgNAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIANPDQEgAkEDcQ0ACwsCQCADQXxxIgRBwABJDQAgAiAEQUBqIgVLDQADQCACIAEoAgA2AgAgAiABKAIENgIEIAIgASgCCDYCCCACIAEoAgw2AgwgAiABKAIQNgIQIAIgASgCFDYCFCACIAEoAhg2AhggAiABKAIcNgIcIAIgASgCIDYCICACIAEoAiQ2AiQgAiABKAIoNgIoIAIgASgCLDYCLCACIAEoAjA2AjAgAiABKAI0NgI0IAIgASgCODYCOCACIAEoAjw2AjwgAUHAAGohASACQcAAaiICIAVNDQALCyACIARPDQEDQCACIAEoAgA2AgAgAUEEaiEBIAJBBGoiAiAESQ0ADAILAAsCQCADQQRPDQAgACECDAELAkAgA0F8aiIEIABPDQAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCwJAIAIgA08NAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIANHDQALCyAAC/MCAgN/AX4CQCACRQ0AIAIgAGoiA0F/aiABOgAAIAAgAToAACACQQNJDQAgA0F+aiABOgAAIAAgAToAASADQX1qIAE6AAAgACABOgACIAJBB0kNACADQXxqIAE6AAAgACABOgADIAJBCUkNACAAQQAgAGtBA3EiBGoiAyAB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ID0gQSAqIHggKyBCICogdTsKICB5ID0gQyAqIHggKyBEICogdTsKZW5kIGxpbmVhcml6ZWRfbW9kZWw7CgBJbnRlcm5hbCBFcnJvcjogdW5rbm93biBiYXNlIHBhcnRpdGlvbiAlbGQAZGFzc2wAIyNDVk9ERSMjIFNVTkRJQUxTIG5vdCBhdmFpbGFibGUgaW4gRk1VLiBTZWUgT3Blbk1vZGVsaWNhIGNvbW1hbmQgbGluZSBmbGFnICItLWZtaUZsYWdzIiBmcm9tICJvbWMgLS1oZWxwIiBvbiBob3cgdG8gZW5hYmxlIENWT0RFIGluIEZNVXMuCgBtZW1vcnlfcG9vbC5jOiBFcnJvcjogRmFpbGVkIHRvIGFsbG9jYXRlIG1lbW9yeSAoY2FsbG9jIHJldHVybmVkIE5VTEwuKQAAYmFzZV9hcnJheS5jOiBhcnJheSBpcyBOVUxMIQoAYmFzZV9hcnJheV9vayhzb3VyY2UxKQBzb2x2ZXIgd2lsbCB0cnkgdG8gaGFuZGxlIGRpdmlzaW9uIGJ5IHplcm8gYXQgdGltZSAlLjE2ZzogJXMAY3JlYXRlTm9kZURvdWJsZUVuZGVkTGlzdDogT3V0IG9mIG1lbW9yeQBGYWlsZWQgdG8gY29weSBhcnJheS4gRGltZW5zaW9uIHNpemVzIGFyZSBub3QgZXF1YWwgYW5kIGRlc3RpbmF0aW9uIGFycmF5IGlzIG5vdCBmbGV4aWJsZS4AaW5kZXhfc3BlY19vazogdGhlIGluZGV4IHNwZWMgaXMgTlVMTCEKACVkIFggJWQgbWF0cml4OgoAb3V0IG9mIG1lbW9yeQBMZW5ndGggbW9kaWZpZXJzIGFyZSBub3QgbGVnYWwgaW4gTW9kZWxpY2EgZm9ybWF0IHN0cmluZ3M6ICVzACVzAExPR19VTktOT1dOAEVycm9yIHJlYWRpbmcgc3RyZWFtOiB1bmV4cGVjdGVkIGVuZCBvZiBmaWxlLgoARXJyb3I6IGNhbGxlZCBtbWNfaW5pdCAocmVxdWVzdGluZyBnYXJiYWdlIGNvbGxlY3Rpb24pIHdoZW4gT01DIHdhcyBjb21waWxlZCB3aXRoIGEgbWluaW1hbCBydW50aW1lIHN5c3RlbS4AcmIAbiE9MAAlZCBYICVkIG1hdHJpeDoKAG91dCBvZiBtZW1vcnkARkxBR19VTktOT1dOAGJhc2VfYXJyYXlfb2soJnNvdXJjZSkAAEVycm9yIHNvbHZpbmcgbm9ubGluZWFyIHN5c3RlbSAlZCBhdCB0aW1lICVnAHBpdm90ICE9IDAAZmlsZToAPwAlcy8lcwBBc3NlcnRpb24gdHJpZ2dlcmVkIGJ5IGV4dGVybmFsIEMgZnVuY3Rpb24Ac3RvcmVEZWxheWVkRXhwcmVzc2lvbjogaW52YWxpZCBleHByZXNzaW9uIG51bWJlciAlZABjaGVjayBmb3IgZGlzY3JldGUgY2hhbmdlcyBhdCB0aW1lPSUuMTJnAHVwZGF0ZWQgZGlzY3JldGUgU3lzdGVtAHNpemUgbmVlZHMgdG8gYmUgZ3JlYXRlciB6ZXJvAEFsbG9jYXRpbmcgbWVtb3J5IGZvciAlaSBzcGF0aWFsIGRpc3RyaWJ1dGlvbihzKS4AY2FuIG5vdCBpbml0aWFsemUgSmFjb2JpYW5zIGZvciBkeW5hbWljIHN0YXRlIHNlbGVjdGlvbgBDb250aW51b3VzIGNsb2NrZWQgc3lzdGVtcyBhcmVuJ3Qgc3VwcG9ydGVkIHlldC4AIyMjIFNPTFVUSU9OIE9GIFRIRSBJTklUSUFMSVpBVElPTiAjIyMAAQAAAAcAAAABAAAACAAAAAEAAAAJAAAARXJyb3Igd2hpbGUgaW5pdGlhbGl6ZSBEYXRhAHVwZGF0aW5nIG1heC12YWx1ZXMAbW9kZWwgbGluZWFyaXplZF9tb2RlbCAiTG9yZW56QXR0cmFjdG9yIiAKIHBhcmFtZXRlciBJbnRlZ2VyIG4gPSAzICJudW1iZXIgb2Ygc3RhdGVzIjsKICBwYXJhbWV0ZXIgSW50ZWdlciBtID0gMCAibnVtYmVyIG9mIGlucHV0cyI7CiAgcGFyYW1ldGVyIEludGVnZXIgcCA9IDAgIm51bWJlciBvZiBvdXRwdXRzIjsKICBwYXJhbWV0ZXIgSW50ZWdlciBueiA9IDAgImRhdGEgcmVjb3ZlcnkgdmFyaWFibGVzIjsKICBwYXJhbWV0ZXIgUmVhbCB4MFszXSA9ICVzOwogIHBhcmFtZXRlciBSZWFsIHUwWzBdID0gJXM7CiAgcGFyYW1ldGVyIFJlYWwgejBbMF0gPSAlczsKCiAgcGFyYW1ldGVyIFJlYWwgQVtuLCBuXSA9CglbJXNdOwoKICBwYXJhbWV0ZXIgUmVhbCBCW24sIG1dID0gemVyb3MobiwgbSk7JXMKCiAgcGFyYW1ldGVyIFJlYWwgQ1twLCBuXSA9IHplcm9zKHAsIG4pOyVzCgogIHBhcmFtZXRlciBSZWFsIERbcCwgbV0gPSB6ZXJvcyhwLCBtKTslcwoKICBwYXJhbWV0ZXIgUmVhbCBDeltueiwgbl0gPSB6ZXJvcyhueiwgbik7JXMKCiAgcGFyYW1ldGVyIFJlYWwgRHpbbnosIG1dID0gemVyb3MobnosIG0pOyVzCgoKICBSZWFsIHhbbl0oc3RhcnQ9eDApOwogIGlucHV0IFJlYWwgdVttXTsKICBvdXRwdXQgUmVhbCB5W3BdOwogIG91dHB1dCBSZWFsIHpbbnpdOwoKICBSZWFsICd4X3gnID0geFsxXTsKICBSZWFsICd4X3knID0geFsyXTsKICBSZWFsICd4X3onID0geFszXTsKZXF1YXRpb24KICBkZXIoeCkgPSBBICogeCArIEIgKiB1OwogIHkgPSBDICogeCArIEQgKiB1OwogIHogPSBDeiAqIHggKyBEeiAqIHU7CmVuZCBsaW5lYXJpemVkX21vZGVsOwoASW50ZXJuYWwgRXJyb3I6IHVua25vd24gYmFzZS1jbG9jayBwYXJ0aXRpb24gJWxkAG1hdABJbnN0YW50aWF0ZWQAT3V0IG9mIG1lbW9yeSEAYmFzZV9hcnJheS5jOiB0aGUgbnVtYmVyIG9mIGFycmF5IGRpbWVuc2lvbnMgYXJlIDwgMCEKAHV0aWwvYm9vbGVhbl9hcnJheS5jAGRpdmlzaW9uIGJ5IHplcm8gYXQgdGltZSAlLjE2ZywgKGE9JS4xNmcpIC8gKGI9JS4xNmcpLCB3aGVyZSBkaXZpc29yIGIgZXhwcmVzc2lvbiBpczogJXMAcHVzaEZyb250RG91YmxlRW5kZWRMaXN0OiBpbnZhbGlkIGxpc3QtcG9pbnRlcgBzcmMtPm5kaW1zICE9IGRzdC0+bmRpbXMsICVkICE9ICVkCgBpbmRleF9zcGVjX29rOiB0aGUgaW5kZXggc3BlYyBkaW1lbnNpb25zIGFyZSBuZWdhdGl2ZTogJWQhCgAlbGQJAGludmFsaWQgbGlzdC1wb2ludGVyAENvdWxkIG5vdCBwYXJzZSBmb3JtYXQgc3RyaW5nOiBpbnZhbGlkIGNvbnZlcnNpb24gc3BlY2lmaWVyOiAlYyBpbiAlcwAlczolZDogTW9kZWxpY2FBbGxvY2F0ZVN0cmluZyBmYWlsZWQAc3Rkb3V0AEV4cGVjdGVkIHRvIHJlYWQgJWxkLiBSZWFkIG9ubHkgJWxkCgByYisAdXRpbC9yYXRpb25hbC5jACVlCQBlbXB0eSBSaW5nQnVmZmVyAGFib3J0U2xvd1NpbXVsYXRpb24AdXRpbC9zdHJpbmdfYXJyYXkuYwBNb2RlbCBlcnJvci4gMF4oJWkpIGlzIG5vdCBkZWZpbmVkAFNvbHZpbmcgbm9ubGluZWFyIHN5c3RlbSAlZDogaXRlcmF0aW9uIG5vdCBtYWtpbmcgcHJvZ3Jlc3MsIHRyeWluZyB3aXRoIGRpZmZlcmVudCBzdGFydGluZyBwb2ludHMgKCslZykAbWF0aC1zdXBwb3J0L3Bpdm90LmMAaGVscABzaW11bGF0aW9uX2luZm9fanNvbi5jOiBFcnJvcjogY2FuIG5vdCBhbGxvY2F0ZSBtZW1vcnkuAABzdG9yZURlbGF5ZWRFeHByZXNzaW9uOiB0aW1lIGlzIHNtYWxsZXIgdGhhbiBzdGFydGluZyB0aW1lLgBkaXNjcmV0ZSB2YXIgY2hhbmdlZDogJXMgZnJvbSAlZyB0byAlZwByZWluaXQoKSBjYWxsLiBJdGVyYXRpb24gbmVlZGVkIQBvdXQgb2YgbWVtb3J5AEZyZWVpbmcgJWkgc3BhdGlhbCBkaXN0cmlidXRpb24ocykuAFNlbGVjdCAlbGQgc3RhdGVzIGZyb20gJWxkIGNhbmRpZGF0ZXMuAFNoaWZ0IG9mIHN1Yi1jbG9jayBpcyBuZWdhdGl2ZS4gU3ViLWNsb2NrcyBhcmVuJ3QgYWxsb3dlZCB0byBmaXJlIGJlZm9yZSBiYXNlLWNsb2NrLgBzdGF0ZXMgdmFyaWFibGVzAPwrAAAbJAAAJyQAAD8kAABTJAAAZyQAAHckAACfJAAAtyQAAOMkAAD7JAAATG9yZW56QXR0cmFjdG9yAHVwZGF0aW5nIG5vbWluYWwtdmFsdWVzAC4qAEluaXRpYWxpemF0aW9uIE1vZGUAYmFzZV9hcnJheS5jOiBhcnJheSBkaW1lbnNpb25zIHNpemVzIGFyZSBOVUxMIQoAYmFzZV9hcnJheV9vayhzb3VyY2UyKQBkaXZpc2lvbiBieSB6ZXJvIGluIHBhcnRpYWwgZXF1YXRpb246ICVzCmF0IFRpbWU9JWYKc29sdmVyIHdpbGwgdHJ5IHRvIGhhbmRsZSB0aGF0LgBwdXNoQmFja0RvdWJsZUVuZGVkTGlzdDogaW52YWxpZCBsaXN0LXBvaW50ZXIAc3JjLT5kaW1fc2l6ZVslZF0gIT0gZHN0LT5kaW1fc2l6ZVslZF0sICVkICE9ICVkCgBpbmRleF9zcGVjX29rOiB0aGUgaW5kZXggc3BlYyBkaW1lbnNpb25zIHNpemVzIGlzIE5VTEwhCgAKAGVtcHR5IGxpc3QAQ291bGQgbm90IHBhcnNlIGZvcm1hdCBzdHJpbmc6IHRyYWlsaW5nIGRhdGEgYWZ0ZXIgdGhlIGZvcm1hdCBkaXJlY3RpdmUAdXRpbC9Nb2RlbGljYVV0aWxpdGllcy5jAGFzc2VydABFcnJvcjogb21jX2ZyZWFkKCkgZmFpbGVkIHRvIHJlYWQgZmlsZS4KAEZhaWxlZCB0byB3cml0ZSBiYWNrIHRvIGZpbGUAYS5uICE9IDAACgBpbmRleCBbJWRdIG91dCBvZiByYW5nZSBbJWQ6JWRdAGFsYXJtACVkIFggJWQgbWF0cml4OgoAbW9kZWxpY2E6Ly8AU29sdmluZyBub25saW5lYXIgc3lzdGVtICVkOiBpdGVyYXRpb24gbm90IG1ha2luZyBwcm9ncmVzcywgdHJ5aW5nIHRvIGRlY3JlYXNlIGZhY3RvciB0byAlZwBGTEFHX01BWAB4bWwtPmZ1bmN0aW9uTmFtZXMgPT0gTlVMTABVbnRyZWF0ZWQgYXNzZXJ0aW9uIGhhcyBiZWVuIGRldGVjdGVkLgBzdG9yZURlbGF5ZWRbJWRdICglZywlZykgcG9zaXRpb249JWQAZGlzY3JldGUgdmFyIGNoYW5nZWQ6ICVzIGZyb20gJWxkIHRvICVsZAByZWxhdGlvbnMgY2hhbmdlZC4gSXRlcmF0aW9uIG5lZWRlZC4Ac2l6ZXMgb2YgdGhlIHZlY3RvciBuZWVkIHRvIGJlIGVxdWFsAEluaXRpYWxpemluZyBzcGF0aWFsIGRpc3RyaWJ1dGlvbnMgKGluZGV4PSVpKQBbJWxkXSBjYW5kaWRhdGUgJXMAQWN0aXZhdGVkIGJhc2UtY2xvY2sgJWxpIGF0IHRpbWUgJWYAWyVsZF0gUmVhbCAlcyhzdGFydD0lZywgbm9taW5hbD0lZykgPSAlZyAocHJlOiAlZykAL3ZhZ3JhbnRfZGF0YQB1cGRhdGluZyBwcmltYXJ5IHN0YXJ0LXZhbHVlcwAvb3B0L29wZW5tb2RlbGljYS1uaWdodGx5L2Jpbi8uLgBFdmVudCBNb2RlAGJhc2VfYXJyYXkuYzogYXJyYXkgZGltZW5zaW9uIHNpemUgZm9yIGRpbWVuc2lvbiAlZCBpcyAlZCA8IDAhCgBiYXNlX2FycmF5X3NoYXBlX2VxKHNvdXJjZTEsIHNvdXJjZTIpAGRpdmlzaW9uIGJ5IHplcm8gaW4gcGFydGlhbCBlcXVhdGlvbjogJXMKYXQgVGltZT0lZgpbbGluZV0gJWxkIHwgW2ZpbGVdICVzAGluc2VydERvdWJsZUVuZGVkTGlzdDogaW52YWxpZCBsaXN0LXBvaW50ZXIAaW5kZXhfc3BlY19vazogdGhlIGluZGV4IHNwZWMgaW5kZXggYXJyYXkgaXMgTlVMTCEKAGFycmF5IHdpdGggJWQgZGltZW5zaW9ucwoAaW52YWxpZCBmaXN0IGxpc3QtcG9pbnRlcgBJbnZhbGlkIGNvbnZlcnNpb24gc3BlY2lmaWVyIGZvciBSZWFsOiAlYwBMT0dfREFTU0wARmFpbGVkIHRvIG9wZW4gZmlsZSAlcyBmb3IgcmVhZGluZzogJXMKAGIubSAhPSAwAGFycmF5IHdpdGggJWQgZGltZW5zaW9ucwoAQ2FuJ3QgZGVxdWUgbm90aGluZyBvciBuZWdhdGl2ZSBhbW91bnQuAGNsb2NrACVzCQBNYWxmb3JtZWQgVVJJIChjb3VsZG4ndCBnZXQgYSBjbGFzcyBuYW1lKTogJXMAaW1wcm9wZXIgaW5wdXQgcGFyYW1ldGVycyB0byBub25saW5lYXIgZXEuIHN5c3Q6ICVkIGF0IHRpbWUgJWcAdW5iYWxhbmNlZCBjb21tYW5kIGxpbmUgZmxhZyBzdHJ1Y3R1cmU6IEZMQUdfTkFNRQBzaW11bGF0aW9uL3NpbXVsYXRpb25faW5mb19qc29uLmMAZGVsYXlJbXBsOiBleHByTnVtYmVyID0gJWQsIGV4cHJWYWx1ZSA9ICVnLCB0aW1lID0gJWcsIGRlbGF5VGltZSA9ICVnAGRpc2NyZXRlIHZhciBjaGFuZ2VkOiAlcyBmcm9tICVkIHRvICVkAGRpc2NyZXRlIFZhcmlhYmxlIGNoYW5nZWQuIEl0ZXJhdGlvbiBuZWVkZWQuAHNpemUgb2Ygcm93cyBuZWVkIGdyZWF0ZXIgemVybwBJbml0aWFsaXphdGlvbiBvZiBzcGF0aWFsIGRpc3RyaWJ1dGlvbiB3aXRoIGluZGV4ICVpIGZhaWxlZC4AU2VsZWN0ZWQgc3RhdGVzAEFjdGl2YXRlZCBldmVudC1jbG9jayAlbGkgYXQgdGltZSAlZgBkZXJpdmF0aXZlcyB2YXJpYWJsZXMAezhjNGU4MTBmLTNkZjMtNGEwMC04Mjc2LTE3NmZhM2M5ZjllMH0AeABDb250aW51b3VzLVRpbWUgTW9kZQBOb3Qgc2FtZSBudW1iZXIgb2YgZGltZW5zaW9ucwBiYXNlX2FycmF5X29rKCZzb3VyY2UpAGRpdmlzaW9uIGJ5IHplcm8AaW5zZXJ0RG91YmxlRW5kZWRMaXN0OiBpbnZhbGlkIHByZXZpb3VzLW5vZGUtcG9pbnRlcgBpbmRleF9zcGVjX29rOiB0aGUgaW5kZXggc3BlYyBkaW1lbnNpb24gc2l6ZSBmb3IgZGltZW5zaW9uICVkIGlzIG5lZ2F0aXZlOiAlZCEKACVsZCwgAGludmFsaWQgbGlzdC1ub2RlACUtKmxkAExPR19EQVNTTF9TVEFURVMAYi5uICE9IDAAJWUsIABSaW5nQnVmZmVyLUluZm8AY3B1AAoARmFpbGVkIHRvIGxvb2t1cCBVUkkgKGlzIHRoZSBwYWNrYWdlIGxvYWRlZD8pICVzAFVua25vd24gZXF1YXRpb24gc3lzdGVtIGVycm9yOiAlZCAlZCAlZwB1bmJhbGFuY2VkIGNvbW1hbmQgbGluZSBmbGFnIHN0cnVjdHVyZTogRkxBR19ERVNDAHhtbC0+ZXF1YXRpb25JbmZvID09IE5VTEwAaW52YWxpZCBleHByTnVtYmVyID0gJWQAZGlzY3JldGUgdmFyIGNoYW5nZWQ6ICVzIGZyb20gJXMgdG8gJXMAU2ltdWxhdGlvbiB0ZXJtaW5hdGVkIGR1ZSB0byB0b28gbWFueSwgaS5lLiAlZCwgZXZlbnQgaXRlcmF0aW9ucy4KVGhpcyBjb3VsZCBlaXRoZXIgaW5kaWNhdGUgYW4gaW5jb25zaXN0ZW50IHN5c3RlbSBvciBhbiB1bmRlcnNpemVkIGxpbWl0IG9mIGV2ZW50IGl0ZXJhdGlvbnMuClRoZSBsaW1pdCBvZiBldmVudCBpdGVyYXRpb25zIGNhbiBiZSBzcGVjaWZpZWQgdXNpbmcgdGhlIHJ1bnRpbWUgZmxhZyAn4oCTJXM9PHZhbHVlPicuAHNpemUgb2YgY29scyBuZWVkIGdyZWF0ZXIgemVybwBpbml0aWFsUG9pbnRzWzBdID0gJWUgaXMgbm90IHplcm8uAFslbGRdICVzAEFjdGl2YXRlZCBzdWItY2xvY2sgKCVpLCVpKSB3aGljaCB0cmlnZ2VyZWQgZXZlbnQgYXQgdGltZSAlZgBbJWxkXSBSZWFsICVzID0gJWcgKHByZTogJWcpACVzL0xvcmVuekF0dHJhY3Rvcl9pbmZvLmpzb24AAFRlcm1pbmF0ZWQAZWx0c1tpXS5uZGltcyA9PSBuZGltcyAmJiAiTm90IHNhbWUgbnVtYmVyIG9mIGRpbWVuc2lvbnMiACVkIFggJWQgbWF0cml4OgoAZGl2aXNpb24gYnkgemVybyBpbiBwYXJ0aWFsIGVxdWF0aW9uOiAlcwpbbGluZV0gJWxkIHwgW2ZpbGVdICVzAGNsZWFyQmVmb3JlTm9kZURvdWJsZUVuZGVkTGlzdDogaW52YWxpZCBsaXN0LXBvaW50ZXIAaW5kZXhfc3BlY19vazogaW5kZXhbJWRdID09IDAsIHNpemUgPT0gJWQKACVsZABpbnZhbGlkIGRhdGEgbm9kZQAlKmxkAExPR19ERUJVRwBJbnZhbGlkIHJhdGlvbmFsIG51bWJlciAlbGkvJWxpACVlAGl0ZW1TaXplOiAlZCBbc2l6ZSBvZiBvbmUgaXRlbSBpbiBieXRlc10AY3N2T3N0ZXAAYXJyYXkgd2l0aCAlZCBkaW1lbnNpb25zCgBQYXRoIGxvbmdlciB0aGFuIFBBVEhfTUFYOiAlcy8lcywgaWdub3JpbmcgdGhlIHJlc291cmNlc0RpcgB1bmJhbGFuY2VkIGNvbW1hbmQgbGluZSBmbGFnIHN0cnVjdHVyZTogRkxBR19ERVRBSUxFRF9ERVNDAHhtbC0+ZnVuY3Rpb25OYW1lcwBOZWdhdGl2ZSBkZWxheSByZXF1ZXN0ZWQ6IGRlbGF5VGltZSA9ICVnAHNhdmUgYWxsIHplcm8tY3Jvc3NpbmdzAGRhdGEgb3V0IG9mIG1lbW9yeQBpbml0aWFsUG9pbnRzW2VuZF0gPSAlZSBpcyBub3Qgb25lLgBTdGF0ZVNlbGVjdGlvbiBTZXQgJWxkIGF0IHRpbWUgPSAlZgBBY3RpdmF0ZWQgc3ViLWNsb2NrICglaSwlaSkgYXQgdGltZSAlZgBvdGhlciByZWFsIHZhcmlhYmxlcwAAAABdAAAAQ29tcGxleAC1AAAAL3Vzci9saWIvb21saWJyYXJ5AACdAAAATG9yZW56QXR0cmFjdG9yAI0AAAAvdmFncmFudF9kYXRhAAAAZQAAAE1vZGVsaWNhAAAAAC0BAAAvdXNyL2xpYi9vbWxpYnJhcnkvTW9kZWxpY2EgMy4yLjMAAACtAAAATW9kZWxpY2FSZWZlcmVuY2UAAABFAQAAL3Vzci9saWIvb21saWJyYXJ5L01vZGVsaWNhUmVmZXJlbmNlAAAAAKUAAABNb2RlbGljYVNlcnZpY2VzAAAAAG0BAAAvdXNyL2xpYi9vbWxpYnJhcnkvTW9kZWxpY2FTZXJ2aWNlcyAzLjIuMwAAAAEAAAABAAAAAQAAAAIAAAABAAAABAAAAAEAAAD/////AAAAAAAAAAAAAAAAAwAAAAMAAAACAAAAAAAAAAEAAAACAAAAAAAAAAEAAAACAAAAAQAAAAIAAAABAAAA/////y92YWdyYW50X2RhdGEvTG9yZW56QXR0cmFjdG9yLm1vAEVycm9yAHV0aWwvYmFzZV9hcnJheS5jACVjCQBkaXZpc2lvbiByZXN1bHQgaW4gTkFOIGluIHBhcnRpYWwgZXF1YXRpb246ICVzCltsaW5lXSAlbGQgfCBbZmlsZV0gJXMAY2xlYXJCZWZvcmVOb2RlRG91YmxlRW5kZWRMaXN0OiBlbXB0eSBsaXN0AGluZGV4X3NwZWNfb2soZGVzdCkACiA9PT09PT09PT09PT09PT09PSAKAFByaW50aW5nIGxpc3Q6ACUtKi4qZwBMT0dfREVMQVkACiA9PT09PT09PT09PT09PT09PSAKAGZpcnN0RWxlbWVudDogJWQgW3Bvc2l0aW9uIG9mIGZpcnN0IGVsZW1lbnQgaW4gYnVmZmVyXQBjdm9kZU5vbmxpbmVhclNvbHZlckl0ZXJhdGlvbgBiYXNlX2FycmF5X29rKHNvdXJjZSkAJXMvJXMAaW52YWxpZCBjb21tYW5kIGxpbmUgb3B0aW9uOiAlcwB4bWwtPmVxdWF0aW9uSW5mbwBkZWxheUltcGw6IE1pc3NpbmcgaW5pdGlhbCB2YWx1ZSwgdXNpbmcgYXJndW1lbnQgdmFsdWUgJWcgaW5zdGVhZC4AUHJpbnQgdmFsdWVzIGZvciBidWZmZXIgc2VnbWVudCAlZCByZWdhcmRpbmcgcG9pbnQgaW4gdGltZSA6ICVnAGluZGV4IG91dCBvZiBib3VuZHM6ICVkAGluaXRpYWxQb2ludHNbJWldID4gaW5pdGlhbFBvaW50c1slaV0AamFjb2JpYW4gJWR4JWQgW2lkOiAlbGRdAEluaXRpYWxpemVkIHN5bmNocm9ub3VzIHRpbWVycy4AaW50ZWdlciB2YXJpYWJsZXMAeQBVbmtub3duAERpbWVuc2lvbnMgc2l6ZSBub3Qgc2FtZQAKAGNsZWFyQWZ0ZXJOb2RlRG91YmxlRW5kZWRMaXN0OiBpbnZhbGlkIGxpc3QtcG9pbnRlcgB1dGlsL2luZGV4X3NwZWMuYwB1dGlsL2ludGVnZXJfYXJyYXkuYwBpdGVtU2l6ZTogJWQgW3NpemUgb2Ygb25lIGl0ZW0gaW4gYnl0ZXNdACUqLipnAExPR19EU1MAdXRpbC9yZWFsX2FycmF5LmMAbkVsZW1lbnRzOiAlZCBbbnVtYmVyIG9mIGVsZW1lbnRzIGluIGJ1ZmZlcl0AY3ZvZGVMaW5lYXJNdWx0aXN0ZXBNZXRob2QAJXMsIABNYWxmb3JtZWQgVVJJIChkb3VibGUgZG90IGluIGNsYXNzIG5hbWUpOiAlcwBDb21tYW5kIGxpbmUgZmxhZyAnJXMnIHNwZWNpZmllZCBhZ2Fpbi4gSWdub3JpbmcuAFJlcXVlc3RlZCBlcXVhdGlvbiB3aXRoIHByb2ZpbGVyIGluZGV4ICVsZCwgYnV0IHdlIG9ubHkgaGF2ZSAlbGQgc3VjaCBibG9ja3MAJWQgPSBpIDwgbGVuZ3RoID0gJWQAc3RhdGVzIHZhcmlhYmxlcwBfb21jX3ZlY3RvciBzaXplICVkIHNtYWxsZXIgdGhhbiAlZAAlZiA+ICVmACVzJS41ZSAATnVtYmVyIG9mIGJhc2UgY2xvY2tzOiAlaQBbJWxkXSBJbnRlZ2VyICVzKHN0YXJ0PSVsZCkgPSAlbGQgKHByZTogJWxkKQB6AGZtaTJFdmVudFVwZGF0ZQBkaW1zaXplID09IGVsdHNbaV0uZGltX3NpemVbY3VyZGltXSAmJiAiRGltZW5zaW9ucyBzaXplIG5vdCBzYW1lIgBhcnJheSB3aXRoICVkIGRpbWVuc2lvbnMKAGNsZWFyQWZ0ZXJOb2RlRG91YmxlRW5kZWRMaXN0OiBlbXB0eSBsaXN0AHsAbGVuZ3RoOiAlZAAlLSpzAExPR19EU1NfSkFDAGJ1ZmZlclNpemU6ICVkIFtudW1iZXIgb2YgZWxlbWVudHMgd2hpY2ggY291bGQgYmUgc3RvcmVkIGluIGJ1ZmZlcl0AY3gAJXMARmFpbGVkIHRvIHJlc29sdmUgVVJJOyBwYXRoIGxvbmdlciB0aGFuIFBBVEhfTUFYKCVkKTogJXMAQ29tbWFuZCBsaW5lIGZsYWcgJyVzJyBjYW4gYmUgc3BlY2lmaWVkIG9ubHkgb25jZS4AUmVxdWVzdGVkIGVxdWF0aW9uIHdpdGggcHJvZmlsZXIgaW5kZXggJWxkLCBidXQgY291bGQgbm90IGZpbmQgaXQhACVwOiAoJWUsJWUpACVsZDogJXMgPSAlZyAocHJlOiAlZykAaW5kZXggaSBvdXQgb2YgYm91bmRzOiAlZABTcGF0aWFsRGlzdHJpYnV0aW9uIHdhcyBhbGxyZWFkeSBhbGxvY2F0ZWQhACVzAEJhc2UgY2xvY2sgJWkAYm9vbGVhbiB2YXJpYWJsZXMAZGVyKHgpAGV2ZW50SW5mbwBlbHRzAGJhc2VfYXJyYXlfb2soc291cmNlKQBmaXJzdERhdGFEb3VibGVFbmRlZExpc3Q6IGludmFsaWQgbGlzdC1wb2ludGVyACVkLABsaXN0IGVsZW1lbnQgaXMgTlVMTAAlKnMATE9HX0RUAFByaW50aW5nIHJpbmcgYnVmZmVyOgBkYWVNb2RlAAogPT09PT09PT09PT09PT09PT0gCgBmaWxlOi8vAENvbW1hbmQgbGluZSBmbGFnICVzIGlzIHN1cHBvc2VkIHRvIGJlIHJlcGxhY2VkIG9uIHJlcGV0aXRpb24uIFRoaXMgb3B0aW9uIGRvZXMgbm90IGFwcGx5IGZvciBmbGFncy4gRml4IHRoZSByZXBldGl0aW9uIHBvbGljeSBmb3IgdGhlIGZsYWcuAGZvcm1hdABkZWxheTogSW4gZnVuY3Rpb24gZmluZFRpbWUKRW1wdHkgcmluZyBidWZmZXIuAGRlcml2YXRpdmVzIHZhcmlhYmxlcwBpbmRleCBqIG91dCBvZiBib3VuZHM6ICVkAGluaXRpYWxQb2ludHNbJWldID0gaW5pdGlhbFBvaW50c1slaV0gPSBpbml0aWFsUG9pbnRzWyVpXQBFcnJvciwgc2luZ3VsYXIgSmFjb2JpYW4gZm9yIGR5bmFtaWMgc3RhdGUgc2VsZWN0aW9uIGF0IHRpbWUgJWYKVXNlIC1sdiBMT0dfRFNTX0pBQyB0byBnZXQgdGhlIEphY29iaWFuAGlzIGV2ZW50IGNsb2NrAFslbGRdIEJvb2xlYW4gJXMoc3RhcnQ9JXMpID0gJXMgKHByZTogJXMpAGRlcih5KQBmbWkyRXZlbnRVcGRhdGU6IFN0YXJ0IEV2ZW50IFVwZGF0ZSEgTmV4dCBTYW1wbGUgRXZlbnQgJWcAZWx0c1swXS5kaW1fc2l6ZVtjdXJkaW1dACVjLCAAZmlyc3REYXRhRG91YmxlRW5kZWRMaXN0OiBlbXB0eSBsaXN0ACVkfQoAdHJ1ZQBMT0dfRFRfQ09OUwBkZWx0YVhMaW5lYXJpemUAYmFzZV9hcnJheV9vayhkZXN0KQA6Ly8AQ29tbWFuZCBsaW5lIGZsYWcgJXMgaXMgc3VwcG9zZWQgdG8gYmUgY29tYmluZWQgb24gcmVwZXRpdGlvbi4gVGhpcyBvcHRpb24gZG9lcyBub3QgYXBwbHkgZm9yIGZsYWdzLiBGaXggdGhlIHJlcGV0aXRpb24gcG9saWN5IGZvciB0aGUgZmxhZy4AVHJhbnNmb3JtYXRpb25hbCBkZWJ1Z2dlciBpbmZvAGRlbGF5OiBJbiBmdW5jdGlvbiBmaW5kVGltZQpDb3VsZCBub3QgZmluZCB0aW1lAG90aGVyIHJlYWwgdmFsdWVzAF9vbWNfbWF0cml4IHJvd3MoJWQpIHRvbyBzbWFsbCBmb3IgJWQAT25seSBldmVudHMgd2l0aCBvbmUgcHJlLXZhbHVlIGFuZCBvbmUgdmFsdWUgYXJlIGFsbG93ZWQuAGphY29iaWFuICVkeCVkIFtpZDogJWRdAGludGVydmFsOiAlZQB0cnVlAGRlcih6KQBmbWkyRXZlbnRVcGRhdGU6IE5lZWQgdG8gaXRlcmF0ZSBzdGF0ZSB2YWx1ZXMgY2hhbmdlZCEAYS0+bmRpbXMgIT0gYi0+bmRpbXMsICVkICE9ICVkCgAlYwBsYXN0RGF0YURvdWJsZUVuZGVkTGlzdDogaW52YWxpZCBsaXN0LXBvaW50ZXIAWwBmYWxzZQBMT0dfRVZFTlRTAGRlbHRhWFNvbHZlcgBpbmRleF9zcGVjX29rKHNvdXJjZV9zcGVjKQBVbmtub3duIFVSSSBzY2hlbWE6ICVzAEVycm9yOiBVbmtub3cgcmVwZXRpdGlvbiBwb2xpY3kgZm9yIGNvbW1hbmQgbGluZSBmbGFnICVzLgB2ZXJzaW9uAGludGVnZXIgdmFyaWFibGVzAF9vbWNfbWF0cml4IGNvbHMoJWQpIHRvbyBzbWFsbCBmb3IgJWQATGlzdCBvZiBldmVudHMAc2VsZWN0IG5ldyBzdGF0ZXMgYXQgdGltZSAlZgBpbnRlcnZhbENvdW50ZXIvcmVzb2x1dGlvbiA9IDogJWkvJWkAZmFsc2UAYmV0YQBbJWxkXSBzYW1wbGUoJWcsICVnKQBhLT5kaW1fc2l6ZVslZF0gIT0gYi0+ZGltX3NpemVbJWRdLCAlZCAhPSAlZAoACiA9PT09PT09PT09PT09PT09PSAKAGxhc3REYXRhRG91YmxlRW5kZWRMaXN0OiBlbXB0eSBsaXN0ACVkACUATE9HX0VWRU5UU19WAGVtYmVkZGVkU2VydmVyAGluZGV4X3NwZWNfZml0X2Jhc2VfYXJyYXkoc291cmNlX3NwZWMsc291cmNlKQAwIT1uYW1lRGlyQXJyYXkAQ29tbWFuZCBsaW5lIG9wdGlvbiAnJXMnIHNwZWNpZmllZCBhZ2Fpbi4gS2VlcGluZyB0aGUgZmlyc3QgdmFsdWUgJyVzJyBhbmQgaWdub3JpbmcgdGhlIHJlc3QuAGluZm8AJWxkOiAlcyA9ICVsZCAocHJlOiAlbGQpAF9vbWNfdmVjdG9yIGRhdGEgaXMgTlVMTCBwb2ludGVyAEZpbmlzaGVkIGluaXRpYWxpemluZyBzcGF0aWFsIGRpc3RyaWJ1dGlvbiAoaW5kZXg9JWkpAHNlbGVjdCAlcwBOdW1iZXIgb2Ygc3ViLWNsb2NrczogJWkAc3RyaW5nIHZhcmlhYmxlcwBybwBmbWkyRXZlbnRVcGRhdGU6IE5lZWQgdG8gaXRlcmF0ZShkaXNjcmV0ZSBjaGFuZ2VzKSEAaW5kZXggc3BlYyBkaW1lbnNpb25zIGFuZCBhcnJheSBkaW1lbnNpb25zIGRvIG5vdCBhZ3JlZSAlZCAhPSAlZAoAYmFzZV9hcnJheV9vayhkZXN0KQBkYXRhRG91YmxlRW5kZWRMaXN0OiBpbnZhbGlkIG5vZGUtcG9pbnRlcgB9AENvdWxkIG5vdCBwYXJzZSBmb3JtYXQgc3RyaW5nOyByYW4gb3V0IG9mIGJ1ZmZlciBzaXplICglZCk6ICVzAExPR19JTklUAGVtYmVkZGVkU2VydmVyUG9ydABqID09IGRlc3QtPm5kaW1zAHV0aWwvdXRpbGl0eS5jAENvbW1hbmQgbGluZSBvcHRpb24gJyVzJyBjYW4gYmUgc3BlY2lmaWVkIG9ubHkgb25jZS4AdmFyaWFibGVzAGJvb2xlYW4gdmFyaWFibGVzAFZlY3RvcnMgaGF2ZSBub3QgdGhlIHNhbWUgc2l6ZSAlZCAhPSAlZABDYWxsaW5nIHN0b3JlU3BhdGlhbERpc3RyaWJ1dGlvbiAoaW5kZXg9JWksIHRpbWU9JWUpAFN1Yi1jbG9jayAlaSBvZiBiYXNlIGNsb2NrICVpAFslbGRdIFN0cmluZyAlcyhzdGFydD0iJXMiKSA9ICIlcyIgKHByZTogIiVzIikAc2lnbWEAZm1pMkV2ZW50VXBkYXRlOiBuZXdEaXNjcmV0ZVN0YXRlc05lZWRlZCAlcwBzY2FsYXIgcy0+aW5kZXhbJWRdWzBdID09ICVkIGluY29ycmVjdCwgYS0+ZGltX3NpemVbJWRdID09ICVkCgBpbmRleF9zcGVjX29rKHNvdXJjZV9zcGVjKQBkb3VibGVFbmRlZExpc3RMZW46IGludmFsaWQgbGlzdC1wb2ludGVyADoAAExPR19JTklUX0hPTU9UT1BZAG1hdF9zeW5jAGRlc3QtPm5kaW1zID09IChzb3VyY2UtPm5kaW1zIC0gMSkAUmV0dXJuaW5nIHBhdGggKCVzKSBub3QgaW4gdGhlIHJlc291cmNlcyBkaXJlY3RvcnkuIFRoZSBGTVUgbWlnaHQgbm90IHdvcmsgYXMgZXhwZWN0ZWQgaWYgeW91IHNlbmQgaXQgdG8gYSBkaWZmZXJlbnQgc3lzdGVtAENvbW1hbmQgbGluZSBvcHRpb24gJyVzJyBzcGVjaWZpZWQgYWdhaW4uIFZhbHVlIGhhcyBiZWVuIG92ZXJyaWRlbiBmcm9tICclcycgdG8gJyVzJy4AZXF1YXRpb25zACVsZDogJXMgPSAlcyAocHJlOiAlcykAdmVjdG9yMSBkYXRhIGlzIE5VTEwgcG9pbnRlcgBzcGF0aWFsRGlzdHJpYnV0aW9uKCVmLCAlZiwgJWYsICVzKQBzaGlmdDogJWxpLyVsaQAlcy8lc18lcwB0cnVlAGFycmF5IHMtPmluZGV4WyVkXVslZF0gPT0gJWQgaW5jb3JyZWN0LCBhLT5kaW1fc2l6ZVslZF0gPT0gJWQKAGluZGV4X3NwZWNfZml0X2Jhc2VfYXJyYXkoc291cmNlX3NwZWMsc291cmNlKQBQcmludGluZyBkb3VibGUgZW5kZWQgbGlzdDoASU5WQUxJRCBUWVBFICVjLgBMT0dfSU5JVF9WAGVtaXRfcHJvdGVjdGVkAGVsdHMAJXMvAENvbW1hbmQgbGluZSBvcHRpb24gJXMgaXMgc3VwcG9zZWQgdG8gYmUgY29tYmluZWQgb24gcmVwZXRpdGlvbi4gVGhpcyBoYXMgbm90IGJlZSBpbXBsZW1lbnRlZCB5ZXQAZnVuY3Rpb25zAHRydWUAdmVjdG9yMiBkYXRhIGlzIE5VTEwgcG9pbnRlcgB0cnVlAGZhY3RvcjogJWxpLyVsaQAlc18lcwBmYWxzZQBiYXNlX2FycmF5X29rKHNvdXJjZSkAaiA9PSBkZXN0LT5uZGltcwBsaXN0IGxlbmd0aDogJWksIHNpemUgb2YgZWFjaCBpdGVtIGRhdGE6ICVpIChieXRlcykALCAATE9HX0lQT1BUAGVwcwAwICYmICJEaW1lbnNpb24gc2l6ZSA+IDQgbm90IGltcGwuIHlldCIAUGF0aCBsb25nZXIgdGhhbiBQQVRIX01BWDogJXMvJXMARXJyb3I6IFVua25vdyByZXBldGl0aW9uIHBvbGljeSBmb3IgY29tbWFuZCBsaW5lIG9wdGlvbiAlcy4ARXhwZWN0ZWQgJyVjJywgZ290OiAlLjIwcwoAZmFsc2UAVmVjdG9ycyBoYXZlIG5vdCB0aGUgc2FtZSBzaXplICVkICE9ICVkICE9ICVkAGZhbHNlAHNvbHZlck1ldGhvZDogJXMAVGhlIGhvbW90b3B5IHBhdGggd2lsbCBiZSBleHBvcnRlZCB0byAlcy4AZm1pMkV2ZW50VXBkYXRlOiBDaGVja2VkIGZvciBTYW1wbGUgRXZlbnRzISBOZXh0IFNhbXBsZSBFdmVudCAlZwBkZXN0LT5kaW1fc2l6ZQBkZXN0LT5uZGltcyA9PSAoc291cmNlLT5uZGltcyAtIDEpAFBvaW50ZXIgdG8gZmlyc3Q6ICVwAF0ATE9HX0lQT1BUX0ZVTEwAZgBlbHRzWzBdLT5uZGltcyA+PSBrAHJlYWxwYXRoIGZhaWxlZCBmb3IgZXhpc3RpbmcgcGF0aCAlczogJXMASlNPTiBzdHJpbmcgdmFsdWUgJXMgZXhwZWN0ZWQsIGdvdDogJS4yMHMKAHBhcmFtZXRlciB2YWx1ZXMAZGVzdGluYXRpb24gZGF0YSBpcyBOVUxMIHBvaW50ZXIARGlzY3JldGUgY2FsbCBvZiBzdG9yZVNwYXRpYWxEaXN0cmlidXRpb24Abm9uZQB3dABmbWkyRXZlbnRVcGRhdGU6IHRlcm1pbmF0ZWQgYnkgYW4gYXNzZXJ0aW9uLgBiYXNlX2FycmF5X29rKGFycikAZWx0cwBQb2ludGVyIHRvIGxhc3Q6ICVwAExPR19JUE9QVF9KQUMAaGVscABkZXN0LT5uZGltcyA9PSBlbHRzW2ldLT5uZGltcwBQYXRoIGxvbmdlciB0aGFuIFBBVEhfTUFYOiAlcy8sIHJldHVybmluZyAlcwBKU09OIGFycmF5IGV4cGVjdGVkICcsJyBvciAnXScsIGdvdDogJS4yMHMKAHJlYWwgcGFyYW1ldGVycwBWZWN0b3JzIHNpemUgZG9lc24ndCBtYXRjaCB0byBtdWx0aXBseSAlZCAhPSAlZCAAUmVtb3ZlZCBtb3JlIHRoZW4gb25lIGV2ZW50IGZyb20gc3BhdGlhbERpc3RyaWJ1dGlvbi4gU3RlcCBzaXplIHRvIGJpZyEAaG9sZEV2ZW50czogJXMAYXQAZm1pAGluZGV4X3NwZWNfb2soc3BlYykAMCAmJiAiRGltZW5zaW9uIHNpemUgPiA0IG5vdCBpbXBsLiB5ZXQiAExPR19JUE9QVF9IRVNTRQBob21BZGFwdEJlbmQAZGVzdC0+ZGltX3NpemVbal0gPT0gZWx0c1tpXS0+ZGltX3NpemVbal0ALwBGb3VuZCBlbmQgb2YgZmlsZSwgZXhwZWN0ZWQgZW5kIG9mIHN0cmluZwBbJWxkXSBwYXJhbWV0ZXIgUmVhbCAlcyhzdGFydD0lZywgZml4ZWQ9JXMpID0gJWcAdmVjdG9yIGRhdGEgaXMgTlVMTCBwb2ludGVyAHRpbWU6ICVmLCBzcGF0aWFsRGlzdHJpYnV0aW9uIGluZGV4OiAlaSwgbnVtYmVyIG9mIGV2ZW50czogJWkAdHJ1ZQBDb3VsZCBub3Qgd3JpdGUgdG8gYCVzYC4AAGluZGV4X3NwZWNfZml0X2Jhc2VfYXJyYXkoc3BlYywgYXJyKQBlbHRzWzBdLT5uZGltcyA+PSBrAExPR19JUE9QVF9FUlJPUgBob21CYWNrdHJhY2VTdHJhdGVneQBkZXN0LT5kaW1fc2l6ZVtrLTFdID09IG5ld19rX2RpbV9zaXplAC4vAE5vdCBhIG51bWJlciwgZ290ICUuMjBzCgBpbnRlZ2VyIHBhcmFtZXRlcnMAX29tY19tYXRyaXggZGF0YSBpcyBOVUxMIHBvaW50ZXIAQ2FsbGluZyBzcGF0aWFsRGlzdHJpYnV0aW9uIChpbmRleD0laSwgdGltZT0lZSkAZmFsc2UAImxhbWJkYSIAJXM6IHRlcm1pbmF0ZWQgYnkgYW4gYXNzZXJ0aW9uLgAobmRpbXMgPT0gYXJyLT5uZGltcykgJiYgKG5kaW1zID09IHNwZWMtPm5kaW1zKQBkZXN0LT5uZGltcyA9PSBlbHRzW2ldLT5uZGltcwBMT0dfSkFDAGhvbUhFcHMAZWx0c1swXS0+bmRpbXMgPT0gZWx0c1tpXS0+bmRpbXMAcmVhbHBhdGggZmFpbGVkIHRvIHJlc29sdmUgLi8ASlNPTiB2YWx1ZSBleHBlY3RlZCwgZ290OiAlLjIwcwoAWyVsZF0gcGFyYW1ldGVyIEludGVnZXIgJXMoc3RhcnQ9JWxkLCBmaXhlZD0lcykgPSAlbGQAbWF0cml4ZXMgaGF2ZSBub3QgdGhlIHNhbWUgc2l6ZSAoKCVkLCVkKSE9KCVkLCVkKSkAKG91dDAsb3V0MSkgPSBzcGF0aWFsRGlzdHJpYnV0aW9uKCVmLCAlZiwgJWYsICVzKQAlcDogKGJhc2VfaWR4IDolaSwgdHlwZTogJXMsIGFjdGl2YXRpb25UaW1lOiAlZSkAJXMiJXMiAGRlZmF1bHQAbmRpbXMgPT0gYXJyLT5uZGltcwBkZXN0LT5kaW1fc2l6ZVtqXSA9PSBlbHRzW2ldLT5kaW1fc2l6ZVtqXQBMT0dfTFMAaG9tTWF4TGFtYmRhU3RlcHMAZWx0c1swXS0+ZGltX3NpemVbal0gPT0gZWx0c1tpXS0+ZGltX3NpemVbal0AUGF0aCBsb25nZXIgdGhhbiBQQVRIX01BWDogJXMvJXMsIHJldHVybmluZyAlcwBKU09OIG9iamVjdCBleHBlY3RlZCAnLCcgb3IgJ30nLCBnb3Q6ICUuMjBzCgBib29sZWFuIHBhcmFtZXRlcnMAbWF0cml4MSBkYXRhIGlzIE5VTEwgcG9pbnRlcgAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4wICAgICAgICBpbjEgICAgICAgIHggICAgIGlzUG9zaXRpdmVWZWxvY2l0eQBiYXNlLWNsb2NrAAoAMi4wAABkZXN0LT5kaW1fc2l6ZVtrLTFdID09IG5ld19rX2RpbV9zaXplAExPR19MU19WAGhvbU1heE5ld3RvblN0ZXBzAGRlc3QtPm5kaW1zID09IDEASlNPTiBvYmplY3QgZXhwZWN0ZWQgJzonLCBnb3Q6ICUuMjBzCgBbJWxkXSBwYXJhbWV0ZXIgQm9vbGVhbiAlcyhzdGFydD0lcywgZml4ZWQ9JXMpID0gJXMAbWF0cml4MiBkYXRhIGlzIE5VTEwgcG9pbnRlcgB4IGdvdCByZWluaXRpYWxpemVkIGR1cmluZyBhbiBldmVudCBhdCB0aW1lICVmLiBPcGVuTW9kZWxpY2EgY2FuJ3QgaGFuZGxlIHRoYXQuACVwOiAoYmFzZV9pZHg6ICVpLCBzdWJfaWR4OiAlaSwgdHlwZTogJXMsIGFjdGl2YXRpb25UaW1lOiAlZSkAJS4xNmcAbG9nZ2luZyBjYXRlZ29yeSAnJXMnIGlzIG5vdCBzdXBwb3J0ZWQgYnkgbW9kZWwARGltZW5zaW9uICVkIGhhcyBib3VuZHMgMS4uJWQsIGdvdCBhcnJheSBzdWJzY3JpcHQgJWQAZWx0c1swXS0+bmRpbXMgPT0gZWx0c1tpXS0+bmRpbXMATE9HX05MUwBob21NYXhUcmllcwBkZXN0LT5kaW1fc2l6ZVswXSA9PSBhLT5uZGltcwBlcUluZGV4AHN0cmluZyBwYXJhbWV0ZXJzAG1hdHJpeGVzIHNpemUgZG9lc24ndCBtYXRjaCB0byBtdWx0aXBseSglZCE9JWQpAChvdXQwLG91dDEpID0gKCVmLCAlZikAc3ViLWNsb2NrACVzJS4xNmcAZm1pMlNldERlYnVnTG9nZ2luZwBiYXNlX2FycmF5X29rKGEpAGVsdHNbMF0tPmRpbV9zaXplW2pdID09IGVsdHNbaV0tPmRpbV9zaXplW2pdAExPR19OTFNfVgBob21OZWdTdGFydERpcgBiYXNlX2FycmF5X29rKGEpAHBhcmVudABbJWxkXSBwYXJhbWV0ZXIgU3RyaW5nICVzKHN0YXJ0PSIlcyIpID0gIiVzIgBWZWN0b3IgZGF0YSBpcyBOVUxMIHBvaW50ZXIATmVlZCB0byBvdXRwdXQgbW9yZSB0aGVuIG9uZSBldmVudCBmcm9tIHNwYXRpYWxEaXN0cmlidXRpb24uIFN0ZXAgc2l6ZSB0byBiaWchACVwOiBFUlJPUjogVW5rbm93biB0eXBlAHRoZXJlIGFyZSBubyBzYW1wbGUtZXZlbnRzAGVycm9yAGRlc3QtPm5kaW1zID09IDEATE9HX05MU19IT01PVE9QWQBob21vdG9weU9uRmlyc3RUcnkAYmFzZV9hcnJheV9vbmVfZWxlbWVudF9vayhhKQBzZWN0aW9uAE5vIHNwYXJzZSBzdHJ1Y3V0cmUgYXZhaWxhYmxlIGZvciAiJXMiLgAlcwBGb3VuZCBldmVudCBpbiBzcGF0aWFsIGRpc3RyaWJ1dGlvbiBhdCB0aW1lICVmAGludmFsaWQgdGltZXJMaXN0IG5vZGUAZmlyc3Qgc2FtcGxlLWV2ZW50IGF0IHQgPSAlZwBmbWkySW5zdGFudGlhdGU6IE1pc3NpbmcgY2FsbGJhY2sgZnVuY3Rpb24uAGRlc3QtPmRpbV9zaXplWzBdID09IGEtPm5kaW1zAExPR19OTFNfSkFDAG5vSG9tb3RvcHlPbkZpcnN0VHJ5AGEtPm5kaW1zID09IDIALCJ0YWciOiJzeXN0ZW0iAFNwYXJzZSBzdHJ1Y3R1cmUgb2YgJXMgW3NpemU6ICV1eCV1XQBbJTNkXSAlLTQwcyA9ICUyMC4xMmcATGlzdCBvZiBldmVudHMgZm9yIHNwYXRpYWxEaXN0cmlidXRpb25aZXJvQ3Jvc3NpbmcoJWUpID0gJWUKACMjIyBTVEFSVCBJTklUSUFMSVpBVElPTiAjIyMAZm1pMkluc3RhbnRpYXRlOiBNaXNzaW5nIGluc3RhbmNlIG5hbWUuAGJhc2VfYXJyYXlfb2soYSkATE9HX05MU19KQUNfVEVTVABob21UYXVEZWNGYWMAYS0+bmRpbXM9PTIgJiYgZGVzdC0+bmRpbXM9PTIALCJ0YWciOiJ0b3Juc3lzdGVtIgAldSBub256ZXJvIGVsZW1lbnRzAFslMmRdICUyMC4xMmcAaW50ZXJwb2xhdGVUcmFuc3BvcnRlZFF1YW50aXR5OiB3cm9uZyBvcmRlciBvciBzYW1lIHBvc2l0aW9uIQBmbWkAezhjNGU4MTBmLTNkZjMtNGEwMC04Mjc2LTE3NmZhM2M5ZjllMH0AYmFzZV9hcnJheV9vbmVfZWxlbWVudF9vayhhKQBMT0dfTkxTX1JFUwBob21UYXVEZWNGYWNQcmVkaWN0b3IAZGVzdC0+ZGltX3NpemVbMF0gPT0gbSAmJiBkZXN0LT5kaW1fc2l6ZVsxXSA9PSBuAHRhZwBUcmFuc3Bvc2VkIHNwYXJzZSBzdHJ1Y3R1cmUgKHJvd3M6IHN0YXRlcykAbWF0cml4IGRhdGEgaXMgTlVMTCBwb2ludGVyAEFkZGluZyAoJWUsJWUpIGF0ICVzLgAAZm1pMkluc3RhbnRpYXRlOiBXcm9uZyBHVUlEICVzLiBFeHBlY3RlZCAlcy4AYS0+bmRpbXMgPT0gMgBMT0dfTkxTX0VYVFJBUE9MQVRFAGhvbVRhdUluY0ZhYwBkaXNwbGF5ACVzACVzJTEwZyAAZnJvbnQAdW5yZWNvZ25pemVkIG9wdGlvbiAtaWltICVzAGZtaTJJbnN0YW50aWF0ZTogQ291bGQgbm90IGluaXRpYWxpemUgdGhlIGdsb2JhbCBkYXRhIHN0cnVjdHVyZSBmaWxlLgBhLT5uZGltcz09MiAmJiBkZXN0LT5uZGltcz09MgBMT0dfUkVTX0lOSVQAaG9tVGF1SW5jVGhyZXNob2xkAHVua25vd25zAHN0YXR1cyBvZiByZWxhdGlvbnMgYXQgdGltZT0lLjEyZwBWZWN0b3Igc2l6ZSBpcyBncmVhdGVyIHRoYW4gemVybwBiYWNrAGN1cnJlbnQgb3B0aW9ucyBhcmU6AGZtaTJJbnN0YW50aWF0ZTogT3V0IG9mIG1lbW9yeS4AZGVzdC0+ZGltX3NpemVbMF0gPT0gbSAmJiBkZXN0LT5kaW1fc2l6ZVsxXSA9PSBuAExPR19SVABob21UYXVNYXgALCJkZWZpbmVzIjpbAFslbGRdIChwcmU6ICVzKSAlcyA9ICVzAFZlY3RvciBzaXplIGlzIGdyZWF0ZXIgdGhlIHplcm8ATmV3IGZyb250IHBvc2l0aW9uIGlzIG5vdCBzbWFsbGVyIHRoZW4gcHJldmlvdXMgZmlyc3Qgbm9kZS4AfCAlLTE1cyBbJXNdAGZtaTJJbnN0YW50aWF0ZTogSWdub3JpbmcgdW5rbm93biByZXNvdXJjZSBVUkk6ICVzAExPR19TSU1VTEFUSU9OAGhvbVRhdU1pbgBFeHBlY3RlZCBudW1iZXIsIGdvdDogJS4yMHMKACB0cnVlAE5ldyBlbmQgcG9zaXRpb24gaXMgbm90IGJpZ2dlciB0aGVuIHByZXZpb3VzIGxhc3Qgbm9kZS4Ac2VlIGxhc3Qgd2FybmluZwBmbWkySW5zdGFudGlhdGU6IEdVSUQ9JXMATE9HX1NPTFZFUgBob21UYXVTdGFydABHb3QgbnVtYmVyICVmLCBleHBlY3RlZDogJWYKAHN0YXR1cyBvZiB6ZXJvIGNyb3NzaW5ncyBhdCB0aW1lPSUuMTJnAE5ldyBmcm9udCBwb3NpdGlvbiBpcyBub3Qgc21hbGxlciB0aGVuIHByZXZpb3VzIGZpcnN0IGV2ZW50IG5vZGUuAGluaXRpYWxpemF0aW9uIG1ldGhvZDogJS0xNXMgWyVzXQBmbWkyRnJlZUluc3RhbmNlAExPR19TT0xWRVJfVgBpZGFNYXhFcnJvclRlc3RGYWlscwAiOgBbJWxkXSAocHJlOiAlMi5nKSAlMi5nID0gJXMATmV3IGVuZCBwb3NpdGlvbiBpcyBub3QgYmlnZ2VyIHRoZW4gcHJldmlvdXMgbGFzdCBldmVudCBub2RlLgB1bnN1cHBvcnRlZCBvcHRpb24gLWlpbQBmbWkyU2V0dXBFeHBlcmltZW50AExPR19TT0xWRVJfQ09OVEVYVABpZGFNYXhOb25MaW5JdGVycwAAY29weSByaW5nIGJ1ZmZlciBmYWlsZWQsIGJlY2F1c2Ugb2YgZGlmZmVyZW50IHNpemVzLgBBZGRpbmcgZXZlbnQgKCVlLCVlKSBhdCAlcy4AIyMjIEVORCBJTklUSUFMSVpBVElPTiAjIyMAZm1pMlNldHVwRXhwZXJpbWVudDogdG9sZXJhbmNlRGVmaW5lZD0lZCB0b2xlcmFuY2U9JWcgc3RhcnRUaW1lPSVnIHN0b3BUaW1lRGVmaW5lZD0lZCBzdG9wVGltZT0lZwBMT0dfU09USQBpZGFNYXhDb252RmFpbHMAc2V0IFJlYWwgdmFyICVzID0gJWcARXJyb3IgZm9yIHNwYXRpYWxEaXN0cmlidXRpb24gaW4gZnVuY3Rpb24gZmluZE9wcG9zaXRlRW5kU3BhdGlhbERpc3RyaWJ1dGlvbi4KVGhpcyBjYXNlIHNob3VsZCBub3QgYmUgcG9zc2libGUuIFBsZWFzZSBvcGVuIGEgYnVnIHJlb3BydCBhYm91dCBpdC4AQ2Fubm90IGluaXRpYWxpemUgdGhlIGR5bmFtaWMgc3RhdGUgc2VsZWN0aW9uIGluIGFuIHVuaXF1ZSB3YXkuIFVzZSAtbHYgTE9HX0RTUyB0byBzZWUgdGhlIHN3aXRjaGluZyBzdGF0ZSBzZXQuAGZtaTJFbnRlckluaXRpYWxpemF0aW9uTW9kZQBMT0dfU1BBVElBTERJU1RSAGlkYU5vbkxpbkNvbnZDb2VmAHNldCBJbnRlZ2VyIHZhciAlcyA9ICVsZABFcnJvciBmb3Igc3BhdGlhbERpc3RyaWJ1dGlvbiBpbiBmdW5jdGlvbiBwcnVuZVNwYXRpYWxEaXN0cmlidXRpb24uClRoaXMgY2FzZSBzaG91bGQgbm90IGJlIHBvc3NpYmxlLiBQbGVhc2Ugb3BlbiBhIGJ1ZyByZW9wcnQgYWJvdXQgaXQuACwAZm1pMkVudGVySW5pdGlhbGl6YXRpb25Nb2RlLi4uAExPR19TVEFUUwBpZGFMUwBzZXQgQm9vbGVhbiB2YXIgJXMgPSAlcwBBSGV1NjogVGhhdCBzaG91bGQgbm90IGJlIHBvc3NpYmxlIQoATW9kZWwgY29udGFpbnMgaG9tb3RvcHkgb3BlcmF0b3I6IFVzZSBhZGFwdGl2ZSBob21vdG9weSBtZXRob2QgdG8gc29sdmUgaW5pdGlhbGl6YXRpb24gcHJvYmxlbS4gVG8gZGlzYWJsZSBpbml0aWFsaXphdGlvbiB3aXRoIGhvbW90b3B5IG9wZXJhdG9yIHVzZSAiLW5vSG9tb3RvcHlPbkZpcnN0VHJ5Ii4AZm1pMkV4aXRJbml0aWFsaXphdGlvbk1vZGUATE9HX1NUQVRTX1YAaWRhU2NhbGluZwB0aGUgc3RhcnQtYXR0cmlidXRlIG9mIGFsbCB2YXJpYWJsZXMgdG8gdGhlaXIgY3VycmVudCB2YWx1ZXM6AEludGVycG9sYXRlIGF0ICVzAEF1dG9tYXRpY2FsbHkgc2V0IC1ob21vdG9weU9uRmlyc3RUcnksIGJlY2F1c2UgdHJ5aW5nIHdpdGhvdXQgaG9tb3RvcHkgZmlyc3QgaXMgbm90IHN1cHBvcnRlZCBmb3IgdGhlIGFkYXB0aXZlIGdsb2JhbCBhcHByb2FjaCBpbiBjb21iaW5hdGlvbiB3aXRoIEtJTlNPTC4AZm1pMkV4aXRJbml0aWFsaXphdGlvbk1vZGUuLi4ATE9HX1NVQ0NFU1MAaWRhU2Vuc2l0aXZpdHkAUmVhbCB2YXIgJXMoc3RhcnQ9JWcpAGVuZABUcnkgdG8gc29sdmUgdGhlIGluaXRpYWxpemF0aW9uIHByb2JsZW0gd2l0aG91dCBob21vdG9weSBmaXJzdC4AZm1pMkVudGVySW5pdGlhbGl6YXRpb25Nb2RlOiBmYWlsZWQATE9HX1NZTkNIUk9OT1VTAGlnbm9yZUhpZGVSZXN1bHQASW50ZWdlciB2YXIgJXMoc3RhcnQ9JWxkKQBSZW1vdmluZyBub2RlcyAlcyBub2RlICVwAEZhaWxlZCB0byBzb2x2ZSB0aGUgaW5pdGlhbGl6YXRpb24gcHJvYmxlbSB3aXRob3V0IGhvbW90b3B5IG1ldGhvZC4gSWYgaG9tb3RvcHkgaXMgYXZhaWxhYmxlIHRoZSBob21vdG9weSBtZXRob2QgaXMgdXNlZCBub3cuAGZtaTJFbnRlckluaXRpYWxpemF0aW9uTW9kZTogc3VjY2VlZABMT0dfVVRJTABpaWYAQm9vbGVhbiB2YXIgJXMoc3RhcnQ9JXMpAGFmdGVyAEdsb2JhbCBob21vdG9weSB3aXRoIGVxdWlkaXN0YW50IHN0ZXAgc2l6ZSBzdGFydGVkLgBmbWkyRW50ZXJJbml0aWFsaXphdGlvbk1vZGU6IHRlcm1pbmF0ZWQgYnkgYW4gYXNzZXJ0aW9uLgBMT0dfWkVST0NST1NTSU5HUwBpaW0Ac2V0IFN0cmluZyB2YXIgJXMgPSAlcwBiZWZvcmUAZXF1aWRpc3RhbnRfZ2xvYmFsX2hvbW90b3B5LmNzdgBmbWkyRXhpdEluaXRpYWxpemF0aW9uTW9kZTogc3VjY2VlZAB1bmtub3duAGlpdABOZXh0IGV2ZW50IHRpbWUgPSAlZgAlcDogKCVlLCVlKQBob21vdG9weSBwcm9jZXNzCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQBmbWkyVGVybWluYXRlAHRoaXMgc3RyZWFtIGlzIGFsd2F5cyBhY3RpdmUsIGNhbiBiZSBkaXNhYmxlZCB3aXRoIC1sdj0tc3Rkb3V0AGlscwBZb3VyIG1lbW9yeSBpcyBub3Qgc3Ryb25nIGVub3VnaCBmb3Igb3VyIHJpbmdidWZmZXIhAGhvbW90b3B5IHBhcmFtZXRlciBsYW1iZGEgPSAlZwBmbWkyUmVzZXQAdGhpcyBzdHJlYW0gaXMgYWx3YXlzIGFjdGl2ZSwgY2FuIGJlIGRpc2FibGVkIHdpdGggLWx2PS1hc3NlcnQAaW1wUktPcmRlcgBvdXQgb2YgbWVtb3J5AE5vIGluaXRpYWxFcXVhdGlvbl9sYW1iZGEwIHdhcyBnZW5lcmF0ZWQuIFVzaW5nIG5vcm1hbCBpbml0aWFsIGVxdWF0aW9uIHN5c3RlbSB3aXRoIGxhbWJkYT0wIGluc3RlYWQuAGZtaTJHZXRSZWFsAGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgZGFzc2wgc29sdmVyAGltcFJLTFMAZXJyb3IgYWxsb2NhdGluZyBleHRlcm5hbCBvYmplY3RzAGhvbW90b3B5IHBhcmFtZXRlciBsYW1iZGEgPSAlZyBkb25lCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQB2cltdAG91dHB1dHMgdGhlIHN0YXRlcyBhdCBldmVyeSBkYXNzbCBjYWxsAGluaXRpYWxTdGVwU2l6ZQBTZXQgdG9sZXJhbmNlIGZvciB6ZXJvLWNyb3NzaW5nIGh5c3RlcmVzaXMgdG86ICVlAEZhaWxlZCB0byBzb2x2ZSB0aGUgaW5pdGlhbGl6YXRpb24gcHJvYmxlbSB3aXRoIGdsb2JhbCBob21vdG9weSB3aXRoIGVxdWlkaXN0YW50IHN0ZXAgc2l6ZS4AdmFsdWVbXQBhZGRpdGlvbmFsIGRlYnVnIGluZm9ybWF0aW9uAGNzdklucHV0AGV2ZW50X2Rpdl9pbnRlZ2VyIGZhaWx0IGF0IHRpbWUgJWYgYmVjYXVzZSB4MiBpcyB6ZXJvIQBVbmFibGUgdG8gc29sdmUgaW5pdGlhbGl6YXRpb24gcHJvYmxlbS4AZm1pMkdldFJlYWw6ICNyJXUjID0gJS4xNmcAZGVidWcgaW5mb3JtYXRpb24gZm9yIGRlbGF5IG9wZXJhdG9yAGV4SW5wdXRGaWxlAGNvbnRleHQgVU5LTk9XTgBHbG9iYWwgaG9tb3RvcHkgd2l0aCBhZGFwdGl2ZSBzdGVwIHNpemUgc3RhcnRlZC4AZm1pMkdldEludGVnZXIAb3V0cHV0cyBpbmZvcm1hdGlvbiBhYm91dCBkeW5hbWljIHN0YXRlIHNlbGVjdGlvbgBzdGF0ZUZpbGUAY29udGV4dCBPREUgZXZhbHVhdGlvbgBzb2x2ZSBzaW1wbGlmaWVkIGxhbWJkYTAtREFFAGZtaTJHZXRCb29sZWFuAG91dHB1dHMgamFjb2JpYW4gb2YgdGhlIGR5bmFtaWMgc3RhdGUgc2VsZWN0aW9uAGlucHV0UGF0aABjb250ZXh0IGFsZ2VicmFpYyBldmFsdWF0aW9uAHNvbHZpbmcgc2ltcGxpZmllZCBsYW1iZGEwLURBRSBkb25lCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQBmbWkyR2V0U3RyaW5nAGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgZHluYW1pYyB0ZWFyaW5nAGlwb3B0X2hlc3NlAGNvbnRleHQgZXZlbnQgc2VhcmNoAGZtaTJTZXRSZWFsAGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgZHluYW1pYyB0ZWFyaW5nIChsb2NhbCBhbmQgZ2xvYmFsIGNvbnN0cmFpbnRzKQBpcG9wdF9pbml0AGNvbnRleHQgamFjb2JpYW4gZXZhbHVhdGlvbgBmbWkyU2V0UmVhbDogbnZyID0gJWQAYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBkdXJpbmcgZXZlbnQgaXRlcmF0aW9uAGlwb3B0X2phYwBjb250ZXh0IHN5bWJvbGljYSBqYWNvYmlhbiBldmFsdWF0aW9uAGZtaTJTZXRSZWFsOiAjciVkIyA9ICUuMTZnAHZlcmJvc2UgbG9nZ2luZyBvZiBldmVudCBzeXN0ZW0AaXBvcHRfbWF4X2l0ZXIAKysrIFNldCBjb250ZXh0ICVzICsrKyBhdCB0aW1lICVmAGZtaTJTZXRJbnRlZ2VyAGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gZHVyaW5nIGluaXRpYWxpemF0aW9uAGlwb3B0X3dhcm1fc3RhcnQAKysrIEluY3JlYXNlIEphY29iaWFuIGNvbHVtbiBjb250ZXh0ICVzICsrKyB0byAlZABmbWkyU2V0SW50ZWdlcjogbnZyID0gJWQAZmlsdGVyIGZvciBMT0dfSU5JVCB0byBsb2cgb25seSBob21vdG9weSBpbml0aWFsaXphdGlvbgBqYWNvYmlhbgAtLS0gVW5zZXQgY29udGV4dCAlcyAtLS0AZm1pMlNldEludGVnZXI6ICNpJWQjID0gJWQAdmVyYm9zZSBpbmZvcm1hdGlvbiBkdXJpbmcgaW5pdGlhbHppYXRpb24AamFjb2JpYW5UaHJlYWRzAGZtaTJTZXRCb29sZWFuAGluZm9ybWF0aW9uIGZyb20gSXBvcHQAbABmbWkyU2V0Qm9vbGVhbjogbnZyID0gJWQAbW9yZSBpbmZvcm1hdGlvbiBmcm9tIElwb3B0AGxfZGF0YXJlYwBmbWkyU2V0Qm9vbGVhbjogI2IlZCMgPSAlcwBjaGVjayBqYWNvYmlhbiBtYXRyaXggd2l0aCBJcG9wdABsb2dGb3JtYXQAZm1pMlNldFN0cmluZwBjaGVjayBoZXNzaWFuIG1hdHJpeCB3aXRoIElwb3B0AGxzAGZtaTJTZXRTdHJpbmc6IG52ciA9ICVkAHByaW50IG1heCBlcnJvciBpbiB0aGUgb3B0aW1pemF0aW9uAGxzX2lwb3B0AGZtaTJTZXRTdHJpbmc6ICNzJWQjID0gJyVzJwBvdXRwdXRzIHRoZSBqYWNvYmlhbiBtYXRyaXggdXNlZCBieSBkYXNzbABsc3MAZm1pMkdldEZNVXN0YXRlAGxvZ2dpbmcgZm9yIGxpbmVhciBzeXN0ZW1zAGxzc01heERlbnNpdHkAZm1pMlNldEZNVXN0YXRlAHZlcmJvc2UgbG9nZ2luZyBvZiBsaW5lYXIgc3lzdGVtcwBsc3NNaW5TaXplAGZtaTJGcmVlRk1Vc3RhdGUAbG9nZ2luZyBmb3Igbm9ubGluZWFyIHN5c3RlbXMAbHYAZm1pMlNlcmlhbGl6ZWRGTVVzdGF0ZVNpemUAdmVyYm9zZSBsb2dnaW5nIG9mIG5vbmxpbmVhciBzeXN0ZW1zAGx2X3RpbWUAZm1pMlNlcmlhbGl6ZUZNVXN0YXRlAGxvZ2dpbmcgb2YgaG9tb3RvcHkgc29sdmVyIGZvciBub25saW5lYXIgc3lzdGVtcwBtYmkAZm1pMkRlU2VyaWFsaXplRk1Vc3RhdGUAb3V0cHV0cyB0aGUgamFjb2JpYW4gb2Ygbm9ubGluZWFyIHN5c3RlbXMAbWVpAGZtaTJHZXREaXJlY3Rpb25hbERlcml2YXRpdmUAdGVzdHMgdGhlIGFuYWx5dGljYWwgamFjb2JpYW4gb2Ygbm9ubGluZWFyIHN5c3RlbXMAbWF4SW50ZWdyYXRpb25PcmRlcgBmbWkyR2V0RGlyZWN0aW9uYWxEZXJpdmF0aXZlIGlucHV0IGluZGV4AG91dHB1dHMgZXZlcnkgZXZhbHVhdGlvbiBvZiB0aGUgcmVzaWR1YWwgZnVuY3Rpb24AbWF4U3RlcFNpemUAZm1pMkdldERpcmVjdGlvbmFsRGVyaXZhdGl2ZSBvdXRwdXQgaW5kZXgAb3V0cHV0cyBkZWJ1ZyBpbmZvcm1hdGlvbiBhYm91dCBleHRyYXBvbGF0ZSBwcm9jZXNzAG1lYXN1cmVUaW1lUGxvdEZvcm1hdABmbWkyRW50ZXJFdmVudE1vZGUAb3V0cHV0cyByZXNpZHVhbHMgb2YgdGhlIGluaXRpYWxpemF0aW9uAG5ld3RvbkZUb2wAZm1pMk5ld0Rpc2NyZXRlU3RhdGVzAGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIHJlYWwtdGltZSBwcm9jZXNzZXMAbmV3dG9uTWF4U3RlcEZhY3RvcgBmbWkyRW50ZXJDb250aW51b3VzVGltZU1vZGUAYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCBzaW11bGF0aW9uIHByb2Nlc3MAbmV3dG9uWFRvbABmbWkyQ29tcGxldGVkSW50ZWdyYXRvclN0ZXAAYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCBzb2x2ZXIgcHJvY2VzcwBuZXd0b24AZW50ZXJFdmVudE1vZGUAdmVyYm9zZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaW50ZWdyYXRpb24gcHJvY2VzcwBubHMAdGVybWluYXRlU2ltdWxhdGlvbgBjb250ZXh0IGluZm9ybWF0aW9uIGR1cmluZyB0aGUgc29sdmVyIHByb2Nlc3MAbmxzSW5mbwBmbWkyQ29tcGxldGVkSW50ZWdyYXRvclN0ZXA6IE5lZWQgdG8gaXRlcmF0ZSBzdGF0ZSB2YWx1ZXMgY2hhbmdlZCEAZmluYWwgc29sdXRpb24gb2YgdGhlIGluaXRpYWxpemF0aW9uAG5sc0xTAGZtaTJDb21wbGV0ZWRJbnRlZ3JhdG9yU3RlcDogdGVybWluYXRlZCBieSBhbiBhc3NlcnRpb24uAGxvZ2dpbmcgb2YgaW50ZXJuYWwgb3BlcmF0aW9ucyBmb3Igc3BhdGlhbERpc3RyaWJ1dGlvbgBubHNzTWF4RGVuc2l0eQBmbWkyU2V0VGltZQBhZGRpdGlvbmFsIHN0YXRpc3RpY3MgYWJvdXQgdGltZXIvZXZlbnRzL3NvbHZlcgBubHNzTWluU2l6ZQBmbWkyU2V0VGltZTogdGltZT0lLjE2ZwBhZGRpdGlvbmFsIHN0YXRpc3RpY3MgZm9yIExPR19TVEFUUwBub2VtaXQAZm1pMlNldENvbnRpbnVvdXNTdGF0ZXMAdGhpcyBzdHJlYW0gaXMgYWx3YXlzIGFjdGl2ZSwgdW5sZXNzIGRlYWN0aXZhdGVkIHdpdGggLWx2PS1MT0dfU1VDQ0VTUwBub0VxdWlkaXN0YW50VGltZUdyaWQAbngAbG9nIGNsb2NrcyBhbmQgc3ViLWNsb2NrcyBmb3Igc3luY2hyb25vdXMgZmVhdHVyZXMAbm9FcXVpZGlzdGFudE91dHB1dEZyZXF1ZW5jeQB4W10APz8/AG5vRXF1aWRpc3RhbnRPdXRwdXRUaW1lAGZtaTJTZXRDb250aW51b3VzU3RhdGVzOiAjciVkIyA9ICUuMTZnAGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHplcm9jcm9zc2luZ3MAbm9FdmVudEVtaXQAZm1pMkdldERlcml2YXRpdmVzAGluZm8Abm9SZXN0YXJ0AGRlcml2YXRpdmVzW10Ad2FybmluZwBub1Jvb3RGaW5kaW5nAGZtaTJHZXREZXJpdmF0aXZlczogI3IlZCMgPSAlLjE2ZwBlcnJvcgBub1NjYWxpbmcAZm1pMkdldERlcml2YXRpdmVzOiB0ZXJtaW5hdGVkIGJ5IGFuIGFzc2VydGlvbi4AZGVidWcAbm9TdXBwcmVzc0FsZwBmbWkyR2V0RXZlbnRJbmRpY2F0b3JzAFslczolZDolZC0lZDolZDolc10Ab3B0RGVidWdKYWMAZm1pMkdldEV2ZW50SW5kaWNhdG9yczogdGVybWluYXRlZCBieSBhbiBhc3NlcnRpb24uAHJlYWRvbmx5AG9wdGltaXplck5QAGZtaTJHZXRDb250aW51b3VzU3RhdGVzAHdyaXRhYmxlAG9wdGltaXplclRpbWVHcmlkAHN0YXRlc1tdAE1vZGVsaWNhIEFzc2VydDogAG91dHB1dABmbWkyR2V0Q29udGludW91c1N0YXRlczogI3IldSMgPSAlLjE2ZwAhCgBvdXRwdXRQYXRoAGZtaTJHZXROb21pbmFsc09mQ29udGludW91c1N0YXRlcwBXYXJuaW5nLCBhc3NlcnRpb24gdHJpZ2dlcmVkOiAAb3ZlcnJpZGUAeF9ub21pbmFsW10ATW9kZWxpY2EgVGVybWluYXRlOiAAb3ZlcnJpZGVGaWxlAGZtaTJHZXROb21pbmFsc09mQ29udGludW91c1N0YXRlczogeF9ub21pbmFsWzAuLiVkXSA9IDEuMAAlLTE3cyB8IABwb3J0AGZtaTJTZXRSZWFsSW5wdXREZXJpdmF0aXZlcwB8AHIAZm1pMlNldFJlYWxJbnB1dERlcml2YXRpdmVzOiBudnIgPSAlZAAlLTdzIHwgAHJlY29uY2lsZQBmbWkyR2V0UmVhbE91dHB1dERlcml2YXRpdmVzAHwgAHJlY29uY2lsZUJvdW5kYXJ5Q29uZGl0aW9ucwBmbWkyR2V0UmVhbE91dHB1dERlcml2YXRpdmVzOiAjciV1IyA9ICUuMTZnACVzCgBydABmbWkyRG9TdGVwOiBDVk9ERSBpbnRlZ3JhdG9yIHN0ZXAgZmFpbGVkLgAlcwBzAGZtaTJEb1N0ZXA6IFVua25vd24gc29sdmVyIG1ldGhvZCAlZC4AZ2V0QmVzdEp1bXBCdWZmZXIgZ290IHNpbXVsYXRpb25KdW1wQnVmZmVyPSVwCgBzaW5nbGUAZm1pMkNhbmNlbFN0ZXAAZ2V0QmVzdEp1bXBCdWZmZXIgZ290IG1tY19qdW1wZXI9JXAsIGdsb2JhbEp1bXBCdWZmZXI9JXAKAHN0ZXBzAGZtaTJHZXRTdGF0dXMAc3RlYWR5U3RhdGUAZm1pMkdldFJlYWxTdGF0dXMAc3RlYWR5U3RhdGVUb2wAZm1pMkdldEludGVnZXJTdGF0dXMAc3gAZm1pMkdldEJvb2xlYW5TdGF0dXMAa2VlcEhlc3NpYW4AZm1pMkdldFN0cmluZ1N0YXR1cwB3AGZtaTJTZXRFeHRlcm5hbEZ1bmN0aW9uAEZMQUdfTUFYAGxvZwB1bmtub3duAC8AYWJvcnRzIGlmIHRoZSBzaW11bGF0aW9uIGNoYXR0ZXJzAF9mbGFncy5qc29uAGFib3J0cyBhZnRlciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIHNlY29uZHMgKDAgZGlzYWJsZXMpAGZtaTJJbnN0YW50aWF0ZTogVHJ5aW5nIHRvIGZpbmQgc2ltdWxhdGlvbiBzZXR0aW5ncyAlcy4Ac2VsZWN0cyB0aGUgdHlwZSBvZiBjbG9jayB0byB1c2UgLWNsb2NrPVJULCAtY2xvY2s9Q1lDIG9yIC1jbG9jaz1DUFUAZm1pMkluc3RhbnRpYXRlOiBGb3VuZCBzaW11bGF0aW9uIHNldHRpbmdzICVzLgBkdW1wcyB0aGUgY3B1LXRpbWUgaW50byB0aGUgcmVzdWx0IGZpbGUAZm1pMkluc3RhbnRpYXRlOiBVc2luZyBkZWZhdWx0IHNpbXVsYXRpb24gc2V0dGluZ3MuAHZhbHVlIHNwZWNpZmllcyBjc3YtZmlsZXMgZm9yIGRlYnVnIHZhbHVlcyBmb3Igb3B0aW1pemVyIHN0ZXAAZm1pMkluc3RhbnRpYXRlOiBObyBzdGF0ZXMgcHJlc2VudCwgY29udGludWluZyB3aXRob3V0IE9ERSBzb2x2ZXIuAG5vbmxpbmVhciBzb2x2ZXIgaXRlcmF0aW9uIGZvciBDVk9ERSBzb2x2ZXIASW5pdGlhbGl6aW5nIENWT0RFIE9ERSBTb2x2ZXIAbGluZWFyIG11bHRpc3RlcCBtZXRob2QgZm9yIENWT0RFIHNvbHZlcgBmbWkySW5zdGFudGlhdGU6IFVua25vd24gc29sdmVyIG1ldGhvZC4AdmFsdWUgc3BlY2lmaWVzIGEgY3N2LWZpbGUgd2l0aCBpbnB1dHMgYXMgY29ycmVsYXRpb24gY29lZmZpY2llbnQgbWF0cml4IEN4IGZvciBEYXRhUmVjb25jaWxpYXRpb24AZm1pMkZyZWVJbnN0YW5jZTogRnJlZWluZyBzb2x2ZXIgZGF0YS4AZmxhZyB0byBsZXQgdGhlIGludGVncmF0b3IgdXNlIGRhZVJlc2lkdWFscwBmbWkyRnJlZUluc3RhbmNlOiBVbmtub3duIHNvbHZlciBtZXRob2QuAHZhbHVlIHNwZWNpZmllcyB0aGUgZGVsdGEgeCB2YWx1ZSBmb3IgbnVtZXJpY2FsIGRpZmZlcmVudGlhdGlvbiB1c2VkIGJ5IGxpbmVhcml6YXRpb24uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDFlLTUuACVzOiBJbnZhbGlkIGFyZ3VtZW50ICVzID0gTlVMTC4AdmFsdWUgc3BlY2lmaWVzIHRoZSBkZWx0YSB4IHZhbHVlIGZvciBudW1lcmljYWwgZGlmZmVyZW50aWF0aW9uIHVzZWQgYnkgaW50ZWdyYXRvci4gVGhlIGRlZmF1bHQgdmFsdWVzIGlzIHNxcnQoREJMX0VQU0lMT04pLgBsb2dFdmVudHMAZW5hYmxlcyBhbiBlbWJlZGRlZCBzZXJ2ZXIuIFZhbGlkIHZhbHVlczogbm9uZSwgb3BjLWRhIFticm9rZW5dLCBvcGMtdWEgW2V4cGVyaW1lbnRhbF0sIG9yIHRoZSBwYXRoIHRvIGEgc2hhcmVkIG9iamVjdC4AbG9nU2luZ3VsYXJMaW5lYXJTeXN0ZW1zAFtpbnQgKGRlZmF1bHQgNDg0MSldIHZhbHVlIHNwZWNpZmllcyB0aGUgcG9ydCBudW1iZXIgdXNlZCBieSB0aGUgZW1iZWRkZWQgc2VydmVyAGxvZ05vbmxpbmVhclN5c3RlbXMAW2ludCAoZGVmYXVsdCAwKV0gc3luY3MgdGhlIG1hdCBmaWxlIGhlYWRlciBhZnRlciBlbWl0dGluZyBldmVyeSBOIHRpbWUtcG9pbnRzIChkZWZhdWx0IGRpc2FibGVkKQBsb2dEeW5hbWljU3RhdGVTZWxlY3Rpb24AZW1pdHMgcHJvdGVjdGVkIHZhcmlhYmxlcyB0byB0aGUgcmVzdWx0LWZpbGUAbG9nU3RhdHVzV2FybmluZwB2YWx1ZSBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiBjb252ZXJnZW5jZSBpdGVyYXRpb24gdG8gYmUgcGVyZm9ybWVkIGZvciBEYXRhUmVjb25jaWxpYXRpb24AbG9nU3RhdHVzRGlzY2FyZAB2YWx1ZSBzcGVjaWZpZXMgYSBuZXcgc2V0dXAgWE1MIGZpbGUgdG8gdGhlIGdlbmVyYXRlZCBzaW11bGF0aW9uIGNvZGUAbG9nU3RhdHVzRXJyb3IAZ2V0IGRldGFpbGVkIGluZm9ybWF0aW9uIHRoYXQgc3BlY2lmaWVzIHRoZSBjb21tYW5kLWxpbmUgZmxhZwBsb2dTdGF0dXNGYXRhbABbZG91YmxlIChkZWZhdWx0IDAuNSldIG1heGltdW0gdHJhamVjdG9yeSBiZW5kaW5nIHRvIGFjY2VwdCB0aGUgaG9tb3RvcHkgc3RlcABsb2dTdGF0dXNQZW5kaW5nAHZhbHVlIHNwZWNpZmllcyB0aGUgYmFja3RyYWNlIHN0cmF0ZWd5IGluIHRoZSBob21vdG9weSBjb3JyZWN0b3Igc3RlcCAoZml4IChkZWZhdWx0KSwgb3J0aG9nb25hbCkAbG9nQWxsAFtkb3VibGUgKGRlZmF1bHQgMWUtNSldIHRvbGVyYW5jZSByZXNwZWN0aW5nIHJlc2lkdWFscyBmb3IgdGhlIGhvbW90b3B5IEgtZnVuY3Rpb24AbG9nRm1pMkNhbGwAW2ludCAoZGVmYXVsdCBzaXplIGRlcGVuZGVudCldIG1heGltdW0gbGFtYmRhIHN0ZXBzIGFsbG93ZWQgdG8gcnVuIHRoZSBob21vdG9weSBwYXRoACVzOiVkOiAlcwBbaW50IChkZWZhdWx0IDIwKV0gbWF4aW11bSBuZXd0b24gc3RlcHMgaW4gdGhlIGhvbW90b3B5IGNvcnJlY3RvciBzdGVwACVzAFtpbnQgKGRlZmF1bHQgMTApXSBtYXhpbXVtIG51bWJlciBvZiB0cmllcyBmb3Igb25lIGhvbW90b3B5IGxhbWJkYSBzdGVwACVzOiBJbGxlZ2FsIGNhbGwgc2VxdWVuY2UuICVzIGlzIG5vdCBhbGxvd2VkIGluICVzIHN0YXRlLgBzdGFydCB0byBydW4gYWxvbmcgdGhlIGhvbW90b3B5IHBhdGggaW4gdGhlIG5lZ2F0aXZlIGRpcmVjdGlvbgAlczogSWxsZWdhbCB2YWx1ZSByZWZlcmVuY2UgJXUuAGRpcmVjdGx5IHVzZSB0aGUgaG9tb3RvcHkgbWV0aG9kIHRvIHNvbHZlIHRoZSBpbml0aWFsaXphdGlvbiBwcm9ibGVtACVzOiBGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQuAGRpc2FibGUgdGhlIHVzZSBvZiB0aGUgaG9tb3RvcHkgbWV0aG9kIHRvIHNvbHZlIHRoZSBpbml0aWFsaXphdGlvbiBwcm9ibGVtACVzOiBJbnZhbGlkIGFyZ3VtZW50ICVzID0gJWQuIEV4cGVjdGVkICVkLgBbZG91YmxlIChkZWZhdWx0IDEwLjApXSBkZWNyZWFzZSBob21vdG9weSBzdGVwIHNpemUgdGF1IGJ5IHRoaXMgZmFjdG9yIGlmIHRhdSBpcyB0b28gYmlnIGluIHRoZSBob21vdG9weSBjb3JyZWN0b3Igc3RlcAAiAFtkb3VibGUgKGRlZmF1bHQgMi4wKV0gZGVjcmVhc2UgaG9tb3RvcHkgc3RlcCBzaXplIHRhdSBieSB0aGlzIGZhY3RvciBpZiB0YXUgaXMgdG9vIGJpZyBpbiB0aGUgaG9tb3RvcHkgcHJlZGljdG9yIHN0ZXAAAAAA+wcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbWFrZVJBVElPTkFMAGV1bGVyAGhldW4AcnVuZ2VrdXR0YQBpbXBldWxlcgB0cmFwZXpvaWQAaW1wcnVuZ2VrdXR0YQBpcmtzY28AZGFzc2wAaWRhAGN2b2RlAHJ1bmdla3V0dGFTc2MAc3ltU29sdmVyAHN5bVNvbHZlclNzYwBxc3MAb3B0aW1pemF0aW9uAG5vbmUAc3ltYm9saWMAc2V0cyBhbGwgdmFyaWFibGVzIHRvIHRoZWlyIHN0YXJ0IHZhbHVlcyBhbmQgc2tpcHMgdGhlIGluaXRpYWxpemF0aW9uIHByb2Nlc3MAc29sdmVzIHRoZSBpbml0aWFsaXphdGlvbiBwcm9ibGVtIHN5bWJvbGljYWxseSAtIGRlZmF1bHQAAAAAAAAAagAAAFAAAABwaXZvdAAAABkSRDsCPyxHFD0zMAobBkZLRTcPSQ6OFwNAHTxpKzYfSi0cASAlKSEIDBUWIi4QOD4LNDEYZHR1di9BCX85ESNDMkKJiosFBCYoJw0qHjWMBxpIkxOUlQAAAAAAAAAAAElsbGVnYWwgYnl0ZSBzZXF1ZW5jZQBEb21haW4gZXJyb3IAUmVzdWx0IG5vdCByZXByZXNlbnRhYmxlAE5vdCBhIHR0eQBQZXJtaXNzaW9uIGRlbmllZABPcGVyYXRpb24gbm90IHBlcm1pdHRlZABObyBzdWNoIGZpbGUgb3IgZGlyZWN0b3J5AE5vIHN1Y2ggcHJvY2VzcwBGaWxlIGV4aXN0cwBWYWx1ZSB0b28gbGFyZ2UgZm9yIGRhdGEgdHlwZQBObyBzcGFjZSBsZWZ0IG9uIGRldmljZQBPdXQgb2YgbWVtb3J5AFJlc291cmNlIGJ1c3kASW50ZXJydXB0ZWQgc3lzdGVtIGNhbGwAUmVzb3VyY2UgdGVtcG9yYXJpbHkgdW5hdmFpbGFibGUASW52YWxpZCBzZWVrAENyb3NzLWRldmljZSBsaW5rAFJlYWQtb25seSBmaWxlIHN5c3RlbQBEaXJlY3Rvcnkgbm90IGVtcHR5AENvbm5lY3Rpb24gcmVzZXQgYnkgcGVlcgBPcGVyYXRpb24gdGltZWQgb3V0AENvbm5lY3Rpb24gcmVmdXNlZABIb3N0IGlzIGRvd24ASG9zdCBpcyB1bnJlYWNoYWJsZQBBZGRyZXNzIGluIHVzZQBCcm9rZW4gcGlwZQBJL08gZXJyb3IATm8gc3VjaCBkZXZpY2Ugb3IgYWRkcmVzcwBCbG9jayBkZXZpY2UgcmVxdWlyZWQATm8gc3VjaCBkZXZpY2UATm90IGEgZGlyZWN0b3J5AElzIGEgZGlyZWN0b3J5AFRleHQgZmlsZSBidXN5AEV4ZWMgZm9ybWF0IGVycm9yAEludmFsaWQgYXJndW1lbnQAQXJndW1lbnQgbGlzdCB0b28gbG9uZwBTeW1ib2xpYyBsaW5rIGxvb3AARmlsZW5hbWUgdG9vIGxvbmcAVG9vIG1hbnkgb3BlbiBmaWxlcyBpbiBzeXN0ZW0ATm8gZmlsZSBkZXNjcmlwdG9ycyBhdmFpbGFibGUAQmFkIGZpbGUgZGVzY3JpcHRvcgBObyBjaGlsZCBwcm9jZXNzAEJhZCBhZGRyZXNzAEZpbGUgdG9vIGxhcmdlAFRvbyBtYW55IGxpbmtzAE5vIGxvY2tzIGF2YWlsYWJsZQBSZXNvdXJjZSBkZWFkbG9jayB3b3VsZCBvY2N1cgBTdGF0ZSBub3QgcmVjb3ZlcmFibGUAUHJldmlvdXMgb3duZXIgZGllZABPcGVyYXRpb24gY2FuY2VsZWQARnVuY3Rpb24gbm90IGltcGxlbWVudGVkAE5vIG1lc3NhZ2Ugb2YgZGVzaXJlZCB0eXBlAElkZW50aWZpZXIgcmVtb3ZlZABEZXZpY2Ugbm90IGEgc3RyZWFtAE5vIGRhdGEgYXZhaWxhYmxlAERldmljZSB0aW1lb3V0AE91dCBvZiBzdHJlYW1zIHJlc291cmNlcwBMaW5rIGhhcyBiZWVuIHNldmVyZWQAUHJvdG9jb2wgZXJyb3IAQmFkIG1lc3NhZ2UARmlsZSBkZXNjcmlwdG9yIGluIGJhZCBzdGF0ZQBOb3QgYSBzb2NrZXQARGVzdGluYXRpb24gYWRkcmVzcyByZXF1aXJlZABNZXNzYWdlIHRvbyBsYXJnZQBQcm90b2NvbCB3cm9uZyB0eXBlIGZvciBzb2NrZXQAUHJvdG9jb2wgbm90IGF2YWlsYWJsZQBQcm90b2NvbCBub3Qgc3VwcG9ydGVkAFNvY2tldCB0eXBlIG5vdCBzdXBwb3J0ZWQATm90IHN1cHBvcnRlZABQcm90b2NvbCBmYW1pbHkgbm90IHN1cHBvcnRlZABBZGRyZXNzIGZhbWlseSBub3Qgc3VwcG9ydGVkIGJ5IHByb3RvY29sAEFkZHJlc3Mgbm90IGF2YWlsYWJsZQBOZXR3b3JrIGlzIGRvd24ATmV0d29yayB1bnJlYWNoYWJsZQBDb25uZWN0aW9uIHJlc2V0IGJ5IG5ldHdvcmsAQ29ubmVjdGlvbiBhYm9ydGVkAE5vIGJ1ZmZlciBzcGFjZSBhdmFpbGFibGUAU29ja2V0IGlzIGNvbm5lY3RlZABTb2NrZXQgbm90IGNvbm5lY3RlZABDYW5ub3Qgc2VuZCBhZnRlciBzb2NrZXQgc2h1dGRvd24AT3BlcmF0aW9uIGFscmVhZHkgaW4gcHJvZ3Jlc3MAT3BlcmF0aW9uIGluIHByb2dyZXNzAFN0YWxlIGZpbGUgaGFuZGxlAFJlbW90ZSBJL08gZXJyb3IAUXVvdGEgZXhjZWVkZWQATm8gbWVkaXVtIGZvdW5kAFdyb25nIG1lZGl1bSB0eXBlAE5vIGVycm9yIGluZm9ybWF0aW9uAAByd2EAcndhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtKyAgIDBYMHgAKG51bGwpAAAAAAAAAAARAAoAERERAAAAAAUAAAAAAAAJAAAAAAsAAAAAAAAAABEADwoREREDCgcAAQAJCwsAAAkGCwAACwAGEQAAABEREQAAAAAAAAAAAAAAAAAAAAALAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAslAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAGEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8AAABeAAAATJQAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAP//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHCaUAAAAAAABQAAAAAAAAAAAAAAZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXwAAAGYAAABolgAAAAQAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACv////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUI0AAABB8JsCC/gYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary() {
  try {
    if (wasmBinary) {
      return new Uint8Array(wasmBinary);
    }

    var binary = tryParseAsDataURI(wasmBinaryFile);
    if (binary) {
      return binary;
    }
    if (readBinary) {
      return readBinary(wasmBinaryFile);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, and have the Fetch api, use that;
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
      // Let's not use fetch to get objects over file:// as it's most likely Cordova which doesn't support fetch for file://
      && !isFileURI(wasmBinaryFile)
      ) {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary();
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(getBinary);
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmTable = Module['asm']['__indirect_function_table'];
    assert(wasmTable, "table not found in wasm exports");

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.
  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
        !isFileURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);
        return result.then(receiveInstantiatedSource, function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(receiveInstantiatedSource);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiatedSource);
    }
  }
  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  // If instantiation fails, reject the module ready promise.
  instantiateAsync().catch(readyPromiseReject);
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};






  function abortStackOverflow(allocSize) {
      abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (STACK_MAX - stackSave() + allocSize) + ' bytes available!');
    }

  function callRuntimeCallbacks(callbacks) {
      while(callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function dynCallLegacy(sig, ptr, args) {
      assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
      if (args && args.length) {
        // j (64-bit integer) must be passed in as two numbers [low 32, high 32].
        assert(args.length === sig.substring(1).replace(/j/g, '--').length);
      } else {
        assert(sig.length == 1);
      }
      if (args && args.length) {
        return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
      }
      return Module['dynCall_' + sig].call(null, ptr);
    }
  function dynCall(sig, ptr, args) {
      // Without WASM_BIGINT support we cannot directly call function with i64 as
      // part of thier signature, so we rely the dynCall functions generated by
      // wasm-emscripten-finalize
      if (sig.indexOf('j') != -1) {
        return dynCallLegacy(sig, ptr, args);
      }
      assert(wasmTable.get(ptr), 'missing table entry in dynCall: ' + ptr);
      return wasmTable.get(ptr).apply(null, args)
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  function ___assert_fail(condition, filename, line, func) {
      abort('Assertion failed: ' + UTF8ToString(condition) + ', at: ' + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);
    }

  function ___handle_stack_overflow() {
      abort('stack overflow')
    }

  var PATH={splitPath:function(filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function(parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function(path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function(path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function(path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function(path) {
        return PATH.splitPath(path)[3];
      },join:function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function(l, r) {
        return PATH.normalize(l + '/' + r);
      }};
  
  function setErrNo(value) {
      HEAP32[((___errno_location())>>2)]=value;
      return value;
    }
  
  function getRandomDevice() {
      if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
        // for modern web browsers
        var randomBuffer = new Uint8Array(1);
        return function() { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
      } else
      if (ENVIRONMENT_IS_NODE) {
        // for nodejs with or without crypto support included
        try {
          var crypto_module = require('crypto');
          // nodejs has crypto support
          return function() { return crypto_module['randomBytes'](1)[0]; };
        } catch (e) {
          // nodejs doesn't have crypto support
        }
      }
      // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
      return function() { abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };"); };
    }
  
  var PATH_FS={resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function(from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY={ttys:[],init:function () {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function(stream) {
          // flush any pending line data
          stream.tty.ops.flush(stream.tty);
        },flush:function(stream) {
          stream.tty.ops.flush(stream.tty);
        },read:function(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              // we will read data by chunks of BUFSIZE
              var BUFSIZE = 256;
              var buf = Buffer.alloc ? Buffer.alloc(BUFSIZE) : new Buffer(BUFSIZE);
              var bytesRead = 0;
  
              try {
                bytesRead = nodeFS.readSync(process.stdin.fd, buf, 0, BUFSIZE, null);
              } catch(e) {
                // Cross-platform differences: on Windows, reading EOF throws an exception, but on other OSes,
                // reading EOF returns 0. Uniformize behavior by treating the EOF exception to return 0.
                if (e.toString().indexOf('EOF') != -1) bytesRead = 0;
                else throw e;
              }
  
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString('utf-8');
              } else {
                result = null;
              }
            } else
            if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  function mmapAlloc(size) {
      var alignedSize = alignMemory(size, 16384);
      var ptr = _malloc(alignedSize);
      while (size < alignedSize) HEAP8[ptr + size++] = 0;
      return ptr;
    }
  var MEMFS={ops_table:null,mount:function(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },getFileDataAsRegularArray:function(node) {
        if (node.contents && node.contents.subarray) {
          var arr = [];
          for (var i = 0; i < node.usedBytes; ++i) arr.push(node.contents[i]);
          return arr; // Returns a copy of the original data.
        }
        return node.contents; // No-op, the file contents are already in a JS array. Return as-is.
      },getFileDataAsTypedArray:function(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
        return;
      },resizeFileStorage:function(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
          return;
        }
        if (!node.contents || node.contents.subarray) { // Resize a typed array if that is being used as the backing store.
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
          return;
        }
        // Backing with a JS array.
        if (!node.contents) node.contents = [];
        if (node.contents.length > newSize) node.contents.length = newSize;
        else while (node.contents.length < newSize) node.contents.push(0);
        node.usedBytes = newSize;
      },node_ops:{getattr:function(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function(parent, name) {
          throw FS.genericErrors[44];
        },mknod:function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },unlink:function(parent, name) {
          delete parent.contents[name];
        },rmdir:function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
        },readdir:function(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }},stream_ops:{read:function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function(stream, buffer, offset, length, position, canOwn) {
          // The data buffer should be a typed array view
          assert(!(buffer instanceof ArrayBuffer));
          // If the buffer is located in main memory (HEAP), and if
          // memory can grow, we can't hold on to references of the
          // memory buffer, as they may get invalidated. That means we
          // need to do copy its contents.
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              assert(position === 0, 'canOwn must imply no weird position inside the file');
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },llseek:function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },allocate:function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function(stream, address, length, position, prot, flags) {
          // We don't currently support location hints for the address of the mapping
          assert(address === 0);
  
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function(stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            // MAP_PRIVATE calls need not to be synced back to underlying fs
            return 0;
          }
  
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};
  
  var ERRNO_MESSAGES={0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"};
  
  var ERRNO_CODES={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135};
  var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:function(e) {
        if (!(e instanceof FS.ErrnoError)) throw e + ' : ' + stackTrace();
        return setErrNo(e.errno);
      },lookupPath:function(path, opts) {
        path = PATH_FS.resolve(FS.cwd(), path);
        opts = opts || {};
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:function(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function(parentid, name) {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function(parent, name, mode, rdev) {
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:function(node) {
        FS.hashRemoveNode(node);
      },isRoot:function(node) {
        return node === node.parent;
      },isMountpoint:function(node) {
        return !!node.mounted;
      },isFile:function(mode) {
        return (mode & 61440) === 32768;
      },isDir:function(mode) {
        return (mode & 61440) === 16384;
      },isLink:function(mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function(mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function(mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function(mode) {
        return (mode & 61440) === 4096;
      },isSocket:function(mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function(str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return 2;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return 2;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },mayLookup:function(dir) {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },mayCreate:function(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },mayOpen:function(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function(fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },getStream:function(fd) {
        return FS.streams[fd];
      },createStream:function(stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function(){};
          FS.FSStream.prototype = {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          };
        }
        // clone it, so we can return an instance of FSStream
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function(fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function() {
          throw new FS.ErrnoError(70);
        }},major:function(dev) {
        return ((dev) >> 8);
      },minor:function(dev) {
        return ((dev) & 0xff);
      },makedev:function(ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function(dev) {
        return FS.devices[dev];
      },getMounts:function(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:function(populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:function(type, opts, mountpoint) {
        if (typeof type === 'string') {
          // The filesystem was not included, and instead we have an error
          // message stored in the variable.
          throw type;
        }
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.indexOf(current.mount) !== -1) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },lookup:function(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function(path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function(path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:function(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },mkdev:function(path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existant directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        try {
          if (FS.trackingDelegate['willMovePath']) {
            FS.trackingDelegate['willMovePath'](old_path, new_path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate['onMovePath']) FS.trackingDelegate['onMovePath'](old_path, new_path);
        } catch(e) {
          err("FS.trackingDelegate['onMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
      },rmdir:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },unlink:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readlink:function(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:function(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },lstat:function(path) {
        return FS.stat(path, true);
      },chmod:function(path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function(path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function(fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },chown:function(path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function(fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function(fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },utime:function(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function(path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            err("FS.trackingDelegate error on read file: " + path);
          }
        }
        try {
          if (FS.trackingDelegate['onOpenFile']) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate['onOpenFile'](path, trackingFlags);
          }
        } catch(e) {
          err("FS.trackingDelegate['onOpenFile']('"+path+"', flags) threw an exception: " + e.message);
        }
        return stream;
      },close:function(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },isClosed:function(stream) {
        return stream.fd === null;
      },llseek:function(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:function(stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function(stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate['onWriteToFile']) FS.trackingDelegate['onWriteToFile'](stream.path);
        } catch(e) {
          err("FS.trackingDelegate['onWriteToFile']('"+stream.path+"') threw an exception: " + e.message);
        }
        return bytesWritten;
      },allocate:function(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function(stream, address, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
      },msync:function(stream, buffer, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:function(stream) {
        return 0;
      },ioctl:function(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function(path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'r';
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:function(path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'w';
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:function() {
        return FS.currentPath;
      },chdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:function() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function(stream, buffer, offset, length, pos) { return length; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        var random_device = getRandomDevice();
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:function() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: function() {
            var node = FS.createNode('/proc/self', 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: function() { return stream.path } }
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:function() {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 'r');
        var stdout = FS.open('/dev/stdout', 'w');
        var stderr = FS.open('/dev/stderr', 'w');
        assert(stdin.fd === 0, 'invalid handle for stdin (' + stdin.fd + ')');
        assert(stdout.fd === 1, 'invalid handle for stdout (' + stdout.fd + ')');
        assert(stderr.fd === 2, 'invalid handle for stderr (' + stderr.fd + ')');
      },ensureErrnoError:function() {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
            for (var key in ERRNO_CODES) {
              if (ERRNO_CODES[key] === errno) {
                this.code = key;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
  
          // Try to get a maximally helpful stack trace. On Node.js, getting Error.stack
          // now ensures it shows what we want.
          if (this.stack) {
            // Define the stack property for Node.js 4, which otherwise errors on the next line.
            Object.defineProperty(this, "stack", { value: (new Error).stack, writable: true });
            this.stack = demangleAll(this.stack);
          }
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function() {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },init:function(input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:function() {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        var fflush = Module['_fflush'];
        if (fflush) fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function(canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },findObject:function(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          setErrNo(ret.error);
          return null;
        }
      },analyzePath:function(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createPath:function(parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function(parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 'w');
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function(parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },forceLoadFile:function(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) setErrNo(29);
        return success;
      },createLazyFile:function(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (function(from, to) {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            } else {
              return intArrayFromString(xhr.responseText || '', true);
            }
          });
          var lazyArray = this;
          lazyArray.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(29);
            }
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(29);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init(); // XXX perhaps this method should move onto Browser?
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function() {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function() {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          out('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },absolutePath:function() {
        abort('FS.absolutePath has been removed; use PATH_FS.resolve instead');
      },createFolder:function() {
        abort('FS.createFolder has been removed; use FS.mkdir instead');
      },createLink:function() {
        abort('FS.createLink has been removed; use FS.symlink instead');
      },joinPath:function() {
        abort('FS.joinPath has been removed; use PATH.join instead');
      },mmapAlloc:function() {
        abort('FS.mmapAlloc has been replaced by the top level function mmapAlloc');
      },standardizePath:function() {
        abort('FS.standardizePath has been removed; use PATH.normalize instead');
      }};
  var SYSCALLS={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(dirfd, path) {
        if (path[0] !== '/') {
          // relative path
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream) throw new FS.ErrnoError(8);
            dir = dirstream.path;
          }
          path = PATH.join2(dir, path);
        }
        return path;
      },doStat:function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)]=stat.dev;
        HEAP32[(((buf)+(4))>>2)]=0;
        HEAP32[(((buf)+(8))>>2)]=stat.ino;
        HEAP32[(((buf)+(12))>>2)]=stat.mode;
        HEAP32[(((buf)+(16))>>2)]=stat.nlink;
        HEAP32[(((buf)+(20))>>2)]=stat.uid;
        HEAP32[(((buf)+(24))>>2)]=stat.gid;
        HEAP32[(((buf)+(28))>>2)]=stat.rdev;
        HEAP32[(((buf)+(32))>>2)]=0;
        (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(40))>>2)]=tempI64[0],HEAP32[(((buf)+(44))>>2)]=tempI64[1]);
        HEAP32[(((buf)+(48))>>2)]=4096;
        HEAP32[(((buf)+(52))>>2)]=stat.blocks;
        HEAP32[(((buf)+(56))>>2)]=(stat.atime.getTime() / 1000)|0;
        HEAP32[(((buf)+(60))>>2)]=0;
        HEAP32[(((buf)+(64))>>2)]=(stat.mtime.getTime() / 1000)|0;
        HEAP32[(((buf)+(68))>>2)]=0;
        HEAP32[(((buf)+(72))>>2)]=(stat.ctime.getTime() / 1000)|0;
        HEAP32[(((buf)+(76))>>2)]=0;
        (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(80))>>2)]=tempI64[0],HEAP32[(((buf)+(84))>>2)]=tempI64[1]);
        return 0;
      },doMsync:function(addr, stream, len, flags, offset) {
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },doMkdir:function(path, mode) {
        // remove a trailing slash, if one - /a/b/ has basename of '', but
        // we want to create b in the context of this function
        path = PATH.normalize(path);
        if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
        FS.mkdir(path, mode, 0);
        return 0;
      },doMknod:function(path, mode, dev) {
        // we don't want this in the JS API as it uses mknod to create all nodes.
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default: return -28;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },doReadlink:function(path, buf, bufsize) {
        if (bufsize <= 0) return -28;
        var ret = FS.readlink(path);
  
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf+len];
        stringToUTF8(ret, buf, bufsize+1);
        // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
        // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
        HEAP8[buf+len] = endChar;
  
        return len;
      },doAccess:function(path, amode) {
        if (amode & ~7) {
          // need a valid mode
          return -28;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      },doDup:function(path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },doReadv:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.read(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      },doWritev:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.write(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },varargs:undefined,get:function() {
        assert(SYSCALLS.varargs != undefined);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },getStreamFromFD:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream;
      },get64:function(low, high) {
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      }};
  function ___sys_access(path, amode) {try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doAccess(path, amode);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_fcntl64(fd, cmd, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -28;
          }
          var newStream;
          newStream = FS.open(stream.path, stream.flags, 0, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 12:
        /* case 12: Currently in musl F_GETLK64 has same value as F_GETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */ {
          
          var arg = SYSCALLS.get();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)]=2;
          return 0;
        }
        case 13:
        case 14:
        /* case 13: Currently in musl F_SETLK64 has same value as F_SETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
        /* case 14: Currently in musl F_SETLKW64 has same value as F_SETLKW, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
          
          
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -28; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fnctl() returns that, and we set errno ourselves.
          setErrNo(28);
          return -1;
        default: {
          return -28;
        }
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_ioctl(fd, op, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509:
        case 21505: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = SYSCALLS.get();
          HEAP32[((argp)>>2)]=0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        default: abort('bad ioctl syscall ' + op);
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_open(path, flags, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var pathname = SYSCALLS.getStr(path);
      var mode = SYSCALLS.get();
      var stream = FS.open(pathname, flags, mode);
      return stream.fd;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function _abort() {
      abort();
    }

  function _longjmp(env, value) {
      _setThrew(env, value || 1);
      throw 'longjmp';
    }
  function _emscripten_longjmp(a0,a1
  ) {
  return _longjmp(a0,a1);
  }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
  
  var _emscripten_get_now;if (ENVIRONMENT_IS_NODE) {
    _emscripten_get_now = function() {
      var t = process['hrtime']();
      return t[0] * 1e3 + t[1] / 1e6;
    };
  } else if (typeof dateNow !== 'undefined') {
    _emscripten_get_now = dateNow;
  } else _emscripten_get_now = function() { return performance.now(); }
  ;
  
  function emscripten_realloc_buffer(size) {
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1 /*success*/;
      } catch(e) {
        console.error('emscripten_realloc_buffer: Attempted to grow heap from ' + buffer.byteLength  + ' bytes to ' + size + ' bytes, but got error: ' + e);
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    }
  function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      var oldSize = _emscripten_get_heap_size();
      // With pthreads, races can happen (another thread might increase the size in between), so return a failure, and let the caller retry.
      assert(requestedSize > oldSize);
  
      // Memory resize rules:
      // 1. When resizing, always produce a resized heap that is at least 16MB (to avoid tiny heap sizes receiving lots of repeated resizes at startup)
      // 2. Always increase heap size to at least the requested size, rounded up to next page multiple.
      // 3a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap geometrically: increase the heap size according to 
      //                                         MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%),
      //                                         At most overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 3b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap linearly: increase the heap size by at least MEMORY_GROWTH_LINEAR_STEP bytes.
      // 4. Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 5. If we were unable to allocate as much memory, it may be due to over-eager decision to excessively reserve due to (3) above.
      //    Hence if an allocation fails, cut down on the amount of excess growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit was set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = 2147483648;
      if (requestedSize > maxHeapSize) {
        err('Cannot enlarge memory, asked to go up to ' + requestedSize + ' bytes, but the limit is ' + maxHeapSize + ' bytes!');
        return false;
      }
  
      var minHeapSize = 16777216;
  
      // Loop through potential heap size increases. If we attempt a too eager reservation that fails, cut down on the
      // attempted size and reserve a smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for(var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), 65536));
  
        var t0 = _emscripten_get_now();
        var replacement = emscripten_realloc_buffer(newSize);
        var t1 = _emscripten_get_now();
        console.log('Heap resize call from ' + oldSize + ' to ' + newSize + ' took ' + (t1 - t0) + ' msecs. Success: ' + !!replacement);
        if (replacement) {
  
          return true;
        }
      }
      err('Failed to grow the heap from ' + oldSize + ' bytes to ' + newSize + ' bytes, not enough memory!');
      return false;
    }

  function _fd_close(fd) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_read(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)]=num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {try {
  
      
      var stream = SYSCALLS.getStreamFromFD(fd);
      var HIGH_OFFSET = 0x100000000; // 2^32
      // use an unsigned operator on low and shift high by 32-bits
      var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
  
      var DOUBLE_LIMIT = 0x20000000000000; // 2^53
      // we also check for equality since DOUBLE_LIMIT + 1 == DOUBLE_LIMIT
      if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
        return -61;
      }
  
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble=stream.position,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((newOffset)>>2)]=tempI64[0],HEAP32[(((newOffset)+(4))>>2)]=tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_write(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doWritev(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)]=num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _getTempRet0() {
      return (getTempRet0() | 0);
    }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }

var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.staticInit();Module["FS_createFolder"] = FS.createFolder;Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createLink"] = FS.createLink;Module["FS_createDevice"] = FS.createDevice;Module["FS_unlink"] = FS.unlink;;
var ASSERTIONS = true;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {
  if (typeof ENVIRONMENT_IS_NODE === 'boolean' && ENVIRONMENT_IS_NODE) {
    var buf;
    try {
      // TODO: Update Node.js externs, Closure does not recognize the following Buffer.from()
      /**@suppress{checkTypes}*/
      buf = Buffer.from(s, 'base64');
    } catch (_) {
      buf = new Buffer(s, 'base64');
    }
    return new Uint8Array(buf['buffer'], buf['byteOffset'], buf['byteLength']);
  }

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}



__ATINIT__.push({ func: function() { ___wasm_call_ctors() } });
var asmLibraryArg = {
  "__assert_fail": ___assert_fail,
  "__handle_stack_overflow": ___handle_stack_overflow,
  "__sys_access": ___sys_access,
  "__sys_fcntl64": ___sys_fcntl64,
  "__sys_ioctl": ___sys_ioctl,
  "__sys_open": ___sys_open,
  "abort": _abort,
  "emscripten_longjmp": _emscripten_longjmp,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "fd_close": _fd_close,
  "fd_read": _fd_read,
  "fd_seek": _fd_seek,
  "fd_write": _fd_write,
  "getTempRet0": _getTempRet0,
  "invoke_dii": invoke_dii,
  "invoke_ii": invoke_ii,
  "invoke_iii": invoke_iii,
  "invoke_iiidii": invoke_iiidii,
  "invoke_iiiii": invoke_iiiii,
  "invoke_iiiiid": invoke_iiiiid,
  "invoke_iiiiii": invoke_iiiiii,
  "invoke_v": invoke_v,
  "invoke_vi": invoke_vi,
  "invoke_viidd": invoke_viidd,
  "invoke_viii": invoke_viii,
  "invoke_viiii": invoke_viiii,
  "invoke_viiiidi": invoke_viiiidi,
  "invoke_viiiiii": invoke_viiiiii,
  "memory": wasmMemory,
  "setTempRet0": _setTempRet0
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");

/** @type {function(...*):?} */
var _free = Module["_free"] = createExportWrapper("free");

/** @type {function(...*):?} */
var _calloc = Module["_calloc"] = createExportWrapper("calloc");

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = createExportWrapper("malloc");

/** @type {function(...*):?} */
var _testSetjmp = Module["_testSetjmp"] = createExportWrapper("testSetjmp");

/** @type {function(...*):?} */
var _saveSetjmp = Module["_saveSetjmp"] = createExportWrapper("saveSetjmp");

/** @type {function(...*):?} */
var _fmi2NewDiscreteStates = Module["_fmi2NewDiscreteStates"] = createExportWrapper("fmi2NewDiscreteStates");

/** @type {function(...*):?} */
var _fmi2GetTypesPlatform = Module["_fmi2GetTypesPlatform"] = createExportWrapper("fmi2GetTypesPlatform");

/** @type {function(...*):?} */
var _fmi2GetVersion = Module["_fmi2GetVersion"] = createExportWrapper("fmi2GetVersion");

/** @type {function(...*):?} */
var _fmi2SetDebugLogging = Module["_fmi2SetDebugLogging"] = createExportWrapper("fmi2SetDebugLogging");

/** @type {function(...*):?} */
var _fmi2Instantiate = Module["_fmi2Instantiate"] = createExportWrapper("fmi2Instantiate");

/** @type {function(...*):?} */
var _fmi2FreeInstance = Module["_fmi2FreeInstance"] = createExportWrapper("fmi2FreeInstance");

/** @type {function(...*):?} */
var _fmi2SetupExperiment = Module["_fmi2SetupExperiment"] = createExportWrapper("fmi2SetupExperiment");

/** @type {function(...*):?} */
var _fmi2EnterInitializationMode = Module["_fmi2EnterInitializationMode"] = createExportWrapper("fmi2EnterInitializationMode");

/** @type {function(...*):?} */
var _fmi2ExitInitializationMode = Module["_fmi2ExitInitializationMode"] = createExportWrapper("fmi2ExitInitializationMode");

/** @type {function(...*):?} */
var _fmi2Terminate = Module["_fmi2Terminate"] = createExportWrapper("fmi2Terminate");

/** @type {function(...*):?} */
var _fmi2Reset = Module["_fmi2Reset"] = createExportWrapper("fmi2Reset");

/** @type {function(...*):?} */
var _fmi2GetReal = Module["_fmi2GetReal"] = createExportWrapper("fmi2GetReal");

/** @type {function(...*):?} */
var _fmi2GetInteger = Module["_fmi2GetInteger"] = createExportWrapper("fmi2GetInteger");

/** @type {function(...*):?} */
var _fmi2GetBoolean = Module["_fmi2GetBoolean"] = createExportWrapper("fmi2GetBoolean");

/** @type {function(...*):?} */
var _fmi2GetString = Module["_fmi2GetString"] = createExportWrapper("fmi2GetString");

/** @type {function(...*):?} */
var _fmi2SetReal = Module["_fmi2SetReal"] = createExportWrapper("fmi2SetReal");

/** @type {function(...*):?} */
var _fmi2SetInteger = Module["_fmi2SetInteger"] = createExportWrapper("fmi2SetInteger");

/** @type {function(...*):?} */
var _fmi2SetBoolean = Module["_fmi2SetBoolean"] = createExportWrapper("fmi2SetBoolean");

/** @type {function(...*):?} */
var _fmi2SetString = Module["_fmi2SetString"] = createExportWrapper("fmi2SetString");

/** @type {function(...*):?} */
var _fmi2GetFMUstate = Module["_fmi2GetFMUstate"] = createExportWrapper("fmi2GetFMUstate");

/** @type {function(...*):?} */
var _fmi2SetFMUstate = Module["_fmi2SetFMUstate"] = createExportWrapper("fmi2SetFMUstate");

/** @type {function(...*):?} */
var _fmi2FreeFMUstate = Module["_fmi2FreeFMUstate"] = createExportWrapper("fmi2FreeFMUstate");

/** @type {function(...*):?} */
var _fmi2SerializedFMUstateSize = Module["_fmi2SerializedFMUstateSize"] = createExportWrapper("fmi2SerializedFMUstateSize");

/** @type {function(...*):?} */
var _fmi2SerializeFMUstate = Module["_fmi2SerializeFMUstate"] = createExportWrapper("fmi2SerializeFMUstate");

/** @type {function(...*):?} */
var _fmi2DeSerializeFMUstate = Module["_fmi2DeSerializeFMUstate"] = createExportWrapper("fmi2DeSerializeFMUstate");

/** @type {function(...*):?} */
var _fmi2GetDirectionalDerivative = Module["_fmi2GetDirectionalDerivative"] = createExportWrapper("fmi2GetDirectionalDerivative");

/** @type {function(...*):?} */
var _fmi2EnterEventMode = Module["_fmi2EnterEventMode"] = createExportWrapper("fmi2EnterEventMode");

/** @type {function(...*):?} */
var _fmi2EnterContinuousTimeMode = Module["_fmi2EnterContinuousTimeMode"] = createExportWrapper("fmi2EnterContinuousTimeMode");

/** @type {function(...*):?} */
var _fmi2CompletedIntegratorStep = Module["_fmi2CompletedIntegratorStep"] = createExportWrapper("fmi2CompletedIntegratorStep");

/** @type {function(...*):?} */
var _fmi2SetTime = Module["_fmi2SetTime"] = createExportWrapper("fmi2SetTime");

/** @type {function(...*):?} */
var _fmi2SetContinuousStates = Module["_fmi2SetContinuousStates"] = createExportWrapper("fmi2SetContinuousStates");

/** @type {function(...*):?} */
var _fmi2GetDerivatives = Module["_fmi2GetDerivatives"] = createExportWrapper("fmi2GetDerivatives");

/** @type {function(...*):?} */
var _fmi2GetEventIndicators = Module["_fmi2GetEventIndicators"] = createExportWrapper("fmi2GetEventIndicators");

/** @type {function(...*):?} */
var _fmi2GetContinuousStates = Module["_fmi2GetContinuousStates"] = createExportWrapper("fmi2GetContinuousStates");

/** @type {function(...*):?} */
var _fmi2GetNominalsOfContinuousStates = Module["_fmi2GetNominalsOfContinuousStates"] = createExportWrapper("fmi2GetNominalsOfContinuousStates");

/** @type {function(...*):?} */
var _fmi2SetRealInputDerivatives = Module["_fmi2SetRealInputDerivatives"] = createExportWrapper("fmi2SetRealInputDerivatives");

/** @type {function(...*):?} */
var _fmi2GetRealOutputDerivatives = Module["_fmi2GetRealOutputDerivatives"] = createExportWrapper("fmi2GetRealOutputDerivatives");

/** @type {function(...*):?} */
var _fmi2DoStep = Module["_fmi2DoStep"] = createExportWrapper("fmi2DoStep");

/** @type {function(...*):?} */
var _fmi2GetStatus = Module["_fmi2GetStatus"] = createExportWrapper("fmi2GetStatus");

/** @type {function(...*):?} */
var _fmi2GetRealStatus = Module["_fmi2GetRealStatus"] = createExportWrapper("fmi2GetRealStatus");

/** @type {function(...*):?} */
var _fmi2GetIntegerStatus = Module["_fmi2GetIntegerStatus"] = createExportWrapper("fmi2GetIntegerStatus");

/** @type {function(...*):?} */
var _fmi2GetBooleanStatus = Module["_fmi2GetBooleanStatus"] = createExportWrapper("fmi2GetBooleanStatus");

/** @type {function(...*):?} */
var _fmi2GetStringStatus = Module["_fmi2GetStringStatus"] = createExportWrapper("fmi2GetStringStatus");

/** @type {function(...*):?} */
var _fflush = Module["_fflush"] = createExportWrapper("fflush");

/** @type {function(...*):?} */
var _snprintf = Module["_snprintf"] = createExportWrapper("snprintf");

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");

/** @type {function(...*):?} */
var _createFmi2CallbackFunctions = Module["_createFmi2CallbackFunctions"] = createExportWrapper("createFmi2CallbackFunctions");

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = createExportWrapper("stackSave");

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");

/** @type {function(...*):?} */
var _realloc = Module["_realloc"] = createExportWrapper("realloc");

/** @type {function(...*):?} */
var _setThrew = Module["_setThrew"] = createExportWrapper("setThrew");

/** @type {function(...*):?} */
var ___set_stack_limits = Module["___set_stack_limits"] = createExportWrapper("__set_stack_limits");

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");


function invoke_iiiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_vi(index,a1) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiidii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_ii(index,a1) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_v(index) {
  var sp = stackSave();
  try {
    wasmTable.get(index)();
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiid(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viidd(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_dii(index,a1,a2) {
  var sp = stackSave();
  try {
    return wasmTable.get(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiidi(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    wasmTable.get(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0 && e !== 'longjmp') throw e;
    _setThrew(1, 0);
  }
}




// === Auto-generated postamble setup entry stuff ===

Module["intArrayFromString"] = intArrayFromString;
Module["intArrayToString"] = intArrayToString;
Module["ccall"] = ccall;
Module["cwrap"] = cwrap;
Module["setValue"] = setValue;
Module["getValue"] = getValue;
Module["allocate"] = allocate;
Module["UTF8ArrayToString"] = UTF8ArrayToString;
Module["UTF8ToString"] = UTF8ToString;
Module["stringToUTF8Array"] = stringToUTF8Array;
Module["stringToUTF8"] = stringToUTF8;
Module["lengthBytesUTF8"] = lengthBytesUTF8;
Module["stackTrace"] = stackTrace;
Module["addOnPreRun"] = addOnPreRun;
Module["addOnInit"] = addOnInit;
Module["addOnPreMain"] = addOnPreMain;
Module["addOnExit"] = addOnExit;
Module["addOnPostRun"] = addOnPostRun;
Module["writeStringToMemory"] = writeStringToMemory;
Module["writeArrayToMemory"] = writeArrayToMemory;
Module["writeAsciiToMemory"] = writeAsciiToMemory;
Module["addRunDependency"] = addRunDependency;
Module["removeRunDependency"] = removeRunDependency;
Module["FS_createFolder"] = FS.createFolder;
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_createLazyFile"] = FS.createLazyFile;
Module["FS_createLink"] = FS.createLink;
Module["FS_createDevice"] = FS.createDevice;
Module["FS_unlink"] = FS.unlink;
if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() { abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() { abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() { abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() { abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["addFunction"] = addFunction;
if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() { abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() { abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "makeBigInt")) Module["makeBigInt"] = function() { abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() { abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() { abort("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() { abort("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() { abort("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() { abort("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callMain")) Module["callMain"] = function() { abort("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() { abort("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() { abort("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() { abort("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() { abort("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() { abort("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() { abort("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() { abort("'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() { abort("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getHostByName")) Module["getHostByName"] = function() { abort("'getHostByName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() { abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() { abort("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() { abort("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice")) Module["getRandomDevice"] = function() { abort("'getRandomDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "traverseStack")) Module["traverseStack"] = function() { abort("'traverseStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() { abort("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "withBuiltinMalloc")) Module["withBuiltinMalloc"] = function() { abort("'withBuiltinMalloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray")) Module["readAsmConstArgsArray"] = function() { abort("'readAsmConstArgsArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() { abort("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM")) Module["mainThreadEM_ASM"] = function() { abort("'mainThreadEM_ASM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() { abort("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() { abort("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName")) Module["getExecutableName"] = function() { abort("'getExecutableName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "listenOnce")) Module["listenOnce"] = function() { abort("'listenOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext")) Module["autoResumeAudioContext"] = function() { abort("'autoResumeAudioContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy")) Module["dynCallLegacy"] = function() { abort("'dynCallLegacy' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller")) Module["getDynCaller"] = function() { abort("'getDynCaller' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks")) Module["callRuntimeCallbacks"] = function() { abort("'callRuntimeCallbacks' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abortStackOverflow")) Module["abortStackOverflow"] = function() { abort("'abortStackOverflow' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() { abort("'reallyNegative' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "unSign")) Module["unSign"] = function() { abort("'unSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reSign")) Module["reSign"] = function() { abort("'reSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() { abort("'formatString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() { abort("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() { abort("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() { abort("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() { abort("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() { abort("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() { abort("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() { abort("'specialHTMLTargets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString")) Module["maybeCStringToJsString"] = function() { abort("'maybeCStringToJsString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget")) Module["findEventTarget"] = function() { abort("'findEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget")) Module["findCanvasEventTarget"] = function() { abort("'findCanvasEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate")) Module["polyfillSetImmediate"] = function() { abort("'polyfillSetImmediate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() { abort("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() { abort("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() { abort("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["stackTrace"] = stackTrace;
if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() { abort("'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock")) Module["checkWasiClock"] = function() { abort("'checkWasiClock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() { abort("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() { abort("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() { abort("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() { abort("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() { abort("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() { abort("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() { abort("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() { abort("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() { abort("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast")) Module["exceptionLast"] = function() { abort("'exceptionLast' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught")) Module["exceptionCaught"] = function() { abort("'exceptionCaught' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfoAttrs")) Module["ExceptionInfoAttrs"] = function() { abort("'ExceptionInfoAttrs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo")) Module["ExceptionInfo"] = function() { abort("'ExceptionInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo")) Module["CatchInfo"] = function() { abort("'CatchInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef")) Module["exception_addRef"] = function() { abort("'exception_addRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef")) Module["exception_decRef"] = function() { abort("'exception_decRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() { abort("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers")) Module["funcWrappers"] = function() { abort("'funcWrappers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop")) Module["setMainLoop"] = function() { abort("'setMainLoop' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "FS")) Module["FS"] = function() { abort("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "mmapAlloc")) Module["mmapAlloc"] = function() { abort("'mmapAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "MEMFS")) Module["MEMFS"] = function() { abort("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "TTY")) Module["TTY"] = function() { abort("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS")) Module["PIPEFS"] = function() { abort("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS")) Module["SOCKFS"] = function() { abort("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray")) Module["tempFixedLengthArray"] = function() { abort("'tempFixedLengthArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers")) Module["miniTempWebGLFloatBuffers"] = function() { abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType")) Module["heapObjectForWebGLType"] = function() { abort("'heapObjectForWebGLType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap")) Module["heapAccessShiftForWebGLHeap"] = function() { abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() { abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() { abort("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize")) Module["computeUnpackAlignedImageSize"] = function() { abort("'computeUnpackAlignedImageSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() { abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() { abort("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() { abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray")) Module["writeGLArray"] = function() { abort("'writeGLArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() { abort("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() { abort("'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() { abort("'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() { abort("'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() { abort("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() { abort("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() { abort("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() { abort("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() { abort("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() { abort("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() { abort("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() { abort("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() { abort("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() { abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() { abort("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() { abort("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() { abort("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["AsciiToString"] = AsciiToString;
Module["stringToAscii"] = stringToAscii;
if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() { abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() { abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() { abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() { abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() { abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() { abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() { abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() { abort("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["writeStackCookie"] = writeStackCookie;
Module["checkStackCookie"] = checkStackCookie;
if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromBase64")) Module["intArrayFromBase64"] = function() { abort("'intArrayFromBase64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "tryParseAsDataURI")) Module["tryParseAsDataURI"] = function() { abort("'tryParseAsDataURI' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["ALLOC_NORMAL"] = ALLOC_NORMAL;
Module["ALLOC_STACK"] = ALLOC_STACK;

var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  writeStackCookie();

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = run;

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var print = out;
  var printErr = err;
  var has = false;
  out = err = function(x) {
    has = true;
  }
  try { // it doesn't matter if it fails
    var flush = Module['_fflush'];
    if (flush) flush(0);
    // also flush in the JS FS layer
    ['stdout', 'stderr'].forEach(function(name) {
      var info = FS.analyzePath('/dev/' + name);
      if (!info) return;
      var stream = info.object;
      var rdev = stream.rdev;
      var tty = TTY.ttys[rdev];
      if (tty && tty.output && tty.output.length) {
        has = true;
      }
    });
  } catch(e) {}
  out = print;
  err = printErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
  }
}

/** @param {boolean|number=} implicit */
function exit(status, implicit) {
  checkUnflushedContent();

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
    // if exit() was called, we may warn the user if the runtime isn't actually being shut down
    if (!implicit) {
      var msg = 'program exited (with status: ' + status + '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';
      readyPromiseReject(msg);
      err(msg);
    }
  } else {

    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);

    ABORT = true;
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

  noExitRuntime = true;

run();







  return LorenzAttractorEuler.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = LorenzAttractorEuler;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return LorenzAttractorEuler; });
    else if (typeof exports === 'object')
      exports["LorenzAttractorEuler"] = LorenzAttractorEuler;
    