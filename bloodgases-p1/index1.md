<script src="04_Fe_výskyt_HTML5 Canvas.js?1581502201829"></script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function myinit() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("92696504B88634409BCB40D5ED3339D1");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib._04_Fe_výskyt_HTML5Canvas();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
function playSound(id, loop) {
	return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}
myinit();
</script>
<div>
<div id="animation_container" style="background-color:rgba(222, 231, 233, 1.00); width:800px; height:600px">
		<canvas id="canvas" width="800" height="600" style="position: absolute; display: block; background-color:rgba(222, 231, 233, 1.00);"></canvas>
		<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:800px; height:600px; position: absolute; left: 0px; top: 0px; display: block;">
		</div>
	</div>
<script>

</script>	
</div>

