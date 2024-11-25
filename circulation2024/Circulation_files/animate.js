/*
 * This file is a mess, TODO: cleanup
 */

var gFontsFamilies = ['Open Sans']

function LoadGFonts (families, comp) {
  var lib = comp.getLibrary()
  var googleObject = {
    type: 'Google',
    loadedFonts: 0,
    totalFonts: families.length,
    callOnLoad: lib.gfontAvailable
  }
  for (var i = 0; i < families.length; i++) {
    isFontAvailable(gFontsFamilies[i], googleObject)
  }
}

function isFontAvailable (font, obj) {
  var timeOut = 5000
  var delay = 200
  var interval = 0
  var timeElapsed = 0
  function checkFont () {
    var node = document.createElement('span')
    node.innerHTML = 'giItT1WQy@!-/#'
    node.style.position = 'absolute'
    node.style.left = '-1000px'
    node.style.top = '-1000px'
    node.style.fontSize = '300px'
    node.style.fontFamily = 'sans-serif'
    node.style.fontVariant = 'normal'
    node.style.fontStyle = 'normal'
    node.style.fontWeight = 'normal'
    node.style.letterSpacing = '0'
    document.body.appendChild(node)
    var width = node.offsetWidth
    node.style.fontFamily = font + ',' + node.style.fontFamily
    var returnVal = false
    if ((node && node.offsetWidth != width) || timeElapsed >= timeOut) {
      obj.loadedFonts++
      if (interval) { clearInterval(interval) }
      obj.callOnLoad(font, obj.totalFonts)
      returnVal = true
    }
    if (node) {
      node.parentNode.removeChild(node)
      node = null
    }
    timeElapsed += delay
    return returnVal
  }
  if (!checkFont()) {
    interval = setInterval(checkFont, delay)
  }
}

var canvas
var stage
var exportRoot
var anim_container
var dom_overlay_container
var fnStartAnimation

function initStage () {
  return new Promise((resolve, reject) => {
    canvas = document.getElementById('canvas')
    anim_container = document.getElementById('animation_container')
    dom_overlay_container = document.getElementById('dom_overlay_container')
    var comp = AdobeAn.getComposition('F02912E2CCB9F84A99475F8834847CCE')

    try {
      if (!(typeof gFontsFamilies === 'undefined' || gFontsFamilies === null)) {
        LoadGFonts(gFontsFamilies, comp)
      }
    } catch (err) {
      console.error(err)
    }
    handleComplete({}, comp)

    var tickCounter = 0
    var waitTicks = () => {
      if (++tickCounter === 2) {
        createjs.Ticker.removeEventListener('tick', waitTicks)
        console.log('Stage initialised')
        resolve()
      }
    }
    createjs.Ticker.addEventListener('tick', waitTicks)
  })
}

var components = {}

function handleComplete (evt, comp) {
  var lib = comp.getLibrary()
  var ss = comp.getSpriteSheet()
  canvas.style.display = 'block'

  lib.exportedComponents = {
    'anim': {},
    'text': {},
    'range': {},
    'checkbox': {}
  }
  lib.addExportedComponent = component => {
    var getNameSuffix = name => {
      return name.substr(name.lastIndexOf('_') + 1, name.length)
    }
    var suffix = getNameSuffix(component.name)
    if (typeof lib.exportedComponents[suffix] !== 'undefined') {
      if (typeof lib.exportedComponents[suffix][component.name] !== 'undefined') {
        console.warn('Duplicate stage name ' + component.name)
      }
      lib.exportedComponents[suffix][component.name] = (component)
    }
  }

  exportRoot = new lib.ObehovySystem()
  stage = new lib.Stage(canvas)

  components = lib.exportedComponents
  delete lib.exportedComponents

  fnStartAnimation = function () {
    stage.update()
    stage.addChild(exportRoot)
    createjs.Ticker.setFPS(lib.properties.fps)
    createjs.Ticker.addEventListener('tick', stage)
  }

  function makeResponsive (isResp, respDim, isScale, scaleType) {
    var lastW, lastH, lastS = 1
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    function resizeCanvas () {
      var w = lib.properties.width, h = lib.properties.height
      var iw = window.innerWidth, ih = window.innerHeight
      var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1
      if (isResp) {
        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
          sRatio = lastS
        } else if (!isScale) {
          if (iw < w || ih < h) { sRatio = Math.min(xRatio, yRatio) }
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio)
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio)
        }
      }
      canvas.width = w * pRatio * sRatio
      canvas.height = h * pRatio * sRatio
      canvas.style.width = anim_container.style.width = dom_overlay_container.style.width = Math.floor(w * sRatio) + 'px'
      canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = Math.floor(h * sRatio) + 'px'
      stage.scaleX = pRatio * sRatio
      stage.scaleY = pRatio * sRatio
      lastW = iw; lastH = ih; lastS = sRatio
    }
  }

  makeResponsive(true, 'both', true, 1)
  AdobeAn.compositionLoaded(lib.properties.id)
  fnStartAnimation()
  stage.setAutoPlay(false)
}

changeFramerate = function (fps) {
  if (createjs.Ticker.framerate === fps) {
    return
  }
  createjs.Ticker.framerate = fps
}

var startFpsCounter = () => {
  var previousTime = performance.now()
  var frameDuration = 0
  updateFps = function () {
    var now = performance.now()
    frameDuration = (frameDuration + (now - previousTime)) / 2
    previousTime = now
  }
  showFps = function () {
    document.getElementById('animation-framerate').innerHTML =
    'Animation framerate: ' + Math.round((1 / frameDuration * 1000)) + 'fps'
  }

  createjs.Ticker.addEventListener('tick', updateFps)
  window.setInterval(showFps, 1000)
}

var getChildren = () => {
  if (typeof (stage.children) === 'undefined') {
    throw new Error('Stage has no children')
  }
  var children = []

  var getChildrenRecursive = node => {
    if (node.name !== null) {
      children.push(node)
    }
    var nodeChildren = node.children
    if (typeof (nodeChildren) !== 'undefined') {
      for (let forc = 0; forc < nodeChildren.length; forc++) {
        getChildrenRecursive(nodeChildren[forc])
      }
    }
  }

  // returns suffix from string 'sample_suff' => 'suff'
  var getNameSuffix = name => {
    return name.substr(name.lastIndexOf('_') + 1, name.length)
  }

  var categorizeChildren = children => {
    var categorized = {
      'anim': {},
      'text': {},
      'range': {},
      'checkbox': {}
    }

    children.forEach(child => {
      console.log(child.name)
      var suffix = getNameSuffix(child.name)
      if (typeof categorized[suffix] !== 'undefined') {
        if (typeof categorized[suffix][child.name] !== 'undefined') {
          console.warn('Duplicate stage name ' + child.name)
        }
        categorized[suffix][child.name] = (child)
      }
    })
    return categorized
  }

  getChildrenRecursive(stage)
  var categorized = categorizeChildren(children)

  return categorized
}
