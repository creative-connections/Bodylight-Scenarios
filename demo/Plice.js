(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path_61 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmJyIgEgaIAAgBQgFgqADhBIABgZQACgZAAgjIABg1IACggIAAgaIgDgPQgDgGAAgFQABgHADgIQAEgGAAgHQAAgGgFgGQgEgHAAgGQAAgGACgHQADgGgBgGQAAgGgDgFQgDgFgBgFQAAgFADgHQAFgJABgHQACgHgCgHQgCgIABgFQACgIAGgIQAFgHAAgEQAAgFgGgFQgFgFAAgGQgBgFAEgGQAEgHABgGQAAgFgEgHQgFgIgBgHQAAgHAEgIQADgHgBgGQgBgFgFgGQgFgGAAgGIABgHIACgJQABgIgDgKQgEgKABgIIADgMQACgFgBgFIgCgHQgCgEgBgEQgBgEABgFIAAgIQAAgGgDgGQgDgGgBgEIABgIIADgLIAAgLIgBgKQABgHAEgHQADgGgBgFIgCgGIgEgIIgCgMQgBgGACgcIgBg/QgBgJACgLIADgLIAEgJQACgHAAgIIgDgUIgFgrQgBgMABgSQAAgMgCgLQgDgIAAgKIgBgVIgCgWIgEgYQgBgLADgWQACgcgFgbIASgUIAigBQgDAOAEAQIAPA4QAKAjADAWQAEAoACA/IALFFQACBOAJApIAMAuQAHAcABATQACAegKArIgUBHQgSBMACCyQADClgcBVQgYgqgKgwg");
	this.shape.setTransform(6.541,71.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_61, new cjs.Rectangle(0,0,13.1,143.2), null);


(lib.Path_53 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C49791").s().p("ABdCjQgFgBgIgJQgIgIABgFQgHgDgFgHIgEgIIgDgFQgIgCgFgFQgFgFgFgJQgCgEgBgEIAAgDQgFgBgDgDQgGgDgDgHQgCgEAAgEQgFgBgDgEQgGgGAAgHQgGgBgFgHQgIgMAFgPQgPgFgEgLIgBgHIgOgYIgIgLIgBAIQgEAJgJAEQgLAFgJgEIgBgCQgEAEgEgBQgDgBgCgDIgEgGIgGgHIgQgOIgQgOQgLgLAAgHQAAgEAEABQAEABAMALIAQANIARAOIAIAIQAHAHAAADIAEABQAHABAGgEQAFgFABgJIABgRIAAgBQgIgPgGgHQgJgKgPgMQgJgHgPgQIgKgMIgEgHIgEgHQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQABADAHAEIAoApIAVATQALANAFALQADAAACADQABAEAIAGQAGAEADAEIAEgCQADgDAFAAIAAgBQACgEAOgLIAegeIAPgPQAFgEAFAEQAEAFgEAFIgPARIgfAcQgIAHgGADQgJAEgDADQgDADAAADQABAEADABIAGABQAHAAALgIIAfgXQAMgIAHABQAAAAABAAQAAABABAAQAAAAAAABQABABAAABQgBAIgMAJIgQAMIgRALIgJAHQgFAEABAFIABACIACABQAFABADgBIAFgFIAmgaIAKgFQAFgBADAEQAEAFgDAEQgDAEgFADIgJAGIgnAXQgFACAAABIgBACQAAADABACQADAFAHgCIADgDIADAAIADABIAzggQAGgFAEAAQAEAAACADQACADgBAEQgBAFgIADIg1AgIgIAGQgDADAAACQAAAEACACIABABIADAAQAFAAABgBIAEgEIAlgYQACgBAFABQACAAACADQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAQgBAGgCACIgYAQIgPAIIgGADQgCADABAFIABACQADAEAKgFIAEgDIAIgDIArggQACgCAEACQADABABACQAEAHgGAEIgfAWIgQALQgFADgDABQgEACgBAEQgCAGADAFQACACAEgBIAHgCIAJgDIAegXIAAAAQAGgFAGAFQACACAAAEQAAAEgCACIgjAYIgDAEIgDACIAAADIACAHQADAFAIgEQAGgDAIgGIAcgcIAEgCIAEgBQAHABgBAGIgCAFQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABIgHAFIAAABIgDACIgNALIgGAFIgOAPQgDAEAAACQABADADABQAIADAHgEIACgBIAAgBIABgBIABAAIAcgZQALgKAFgBQADAAACACQACACgBADIgDAFIgkAeIgCAEQgFAGgIABIgLABIgFAAg");
	this.shape.setTransform(16.3393,16.3371);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_53, new cjs.Rectangle(0,0,32.7,32.7), null);


(lib.Path_44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C49791").s().p("AgKAPQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgDAEgEIAHgMQAEgGACgBQAAAAABgBQAAAAABAAQAAAAABAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIgCAFIgLAPIgGAFIgBABIgCgBg");
	this.shape.setTransform(1.258,1.5625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_44, new cjs.Rectangle(0.1,0,2.4,3.2), null);


(lib.Path_43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C49791").s().p("AgSASQgBgDABgDIAYgaIAGgEQADgBADACQACADgBADIgEAGIgUASIgHAFIgBABIgDABQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAAAgBg");
	this.shape.setTransform(1.9693,1.9857);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_43, new cjs.Rectangle(0,0,4,4), null);


(lib.Path_42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C49791").s().p("AgUAbQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQABgEAHgJIATgdQACgBACAAQABgBAAAAQABAAgBAAQAAAAgCAAIAEgEQADgCAEABQAEABgBAEIgDANIgPATIgIAKQgHAHgFABIgBAAIgDgBg");
	this.shape.setTransform(2.2541,2.8135);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_42, new cjs.Rectangle(0,0,4.5,5.7), null);


(lib.Path_41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C49791").s().p("AgNAVQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAIABgFIAGgNIAIgRQACgCADgBIAEgBQADgBABADIABAEQABAEgBACIgLARIgFAIQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgGADIgBAAIgCgBg");
	this.shape.setTransform(1.5388,2.2201);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_41, new cjs.Rectangle(0,0,3.1,4.5), null);


(lib.Path_40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C49791").s().p("AgKAWQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgDAEgIIAAgBIADgGIAAgCIAGgKIACgGIACgCIACAAIgBAAIACgCQADgCADACQACACAAADIAAADIAAAEIgOAYQgFAGgEAAIgBAAg");
	this.shape.setTransform(1.4389,2.1769);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_40, new cjs.Rectangle(0.1,0,2.8,4.4), null);


(lib.Path_39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C49791").s().p("AgFAHIgBgFIABgCIAAAAIABgEIADgDQABAAAAgBQAAAAAAAAQAAgBABAAQAAAAABABIACAAQAEACgBAEIgCADIgBADIAAgCIgBAEIgBACQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABgBAAQgBgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAAAg");
	this.shape.setTransform(0.6861,0.945);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_39, new cjs.Rectangle(0,0,1.4,1.9), null);


(lib.Path_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#995C56").s().p("AjKCKIgVgHQgNgGgCgJQgBgFAFgKQASgfAygjQClhyCXgwQA1gRAhAEQAIAagNAeQgIAUgXAcQgrA0gjAWQghAUhIAUQhJATgfATIgVAMQgVAJgaAEIgUABQgPAAgMgEg");
	this.shape.setTransform(23.9351,14.2338);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0.1,47.9,28.4), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACQFCQgygNgcgJQgqgNgggQQhGgjgmg4Qgkg2gNhaQgFglAAgxIABhXIAChZQABgfACgPIAFgWIADgYQAAgEAEAAQAEAAAAAEQABAVACAHIAEAVQACAWgBAcIgBBeQAABtAGAsQANBWAsA2QAmAvBEAcQAqARBWAVQATAFgFAUQgFARgOAAIgHgBg");
	this.shape.setTransform(17.0792,32.324);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0.1,34.2,64.5), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C49791").s().p("ABgBhQgHgDgHgGQgFgEgCgEQgEABgEgBQgJgBgEgIQgDgEgBgJQgHABgFgEQgGgEgEgGIgEgFQgGAAgHgDQgFgDgEgIIAAgGQgFAAgGgDQgGgCgEgGIgEgFIgBgDIgBAAIgIgEQgDgDgCgDQgCgEgBgEIABgGQgIABgHgFIgKgKQgEgFAAgDQgJABgHgHIgHgHQgFgFgCgEIAAgBIgHgEQgGgEgGgHIgFgGQgDgFABgDQABgDAEAAQABAAABABQAAAAABAAQAAABABAAQAAABAAABIABABIAGAFIAKAGIAAAAIACABIABAAIAEAAIACAAIADgCIABAAIAAAAQADgDAEAAQAEAAACAEQADADgBAEQgBAFgDACIgHACIAGAFIACABIAAAAIABAAIABABIACAAIACgBIABAAIALgGIAJgJIAFgDQAFgBADADQADAEgBAEQgCAHgNAJQgHAFgIADIAMAJIABAAIAAABIACAAIAFAAIACAAIABAAIABgCIABAAIgBABQAEgEAFACQADACABAFQAAAEgEACIAAABIgBABIAAAEIABABIAAABIAAABIADADIABAAIACACIAJgKQAFgFAFAFQADADAAADQAAADgDACIgLALIADACIABAAIAAAAIAEADIABAAIACABIACAAIABAAIABABIADAAIAAgBIABAAIABgBIAFgFQAGgDAEAGQAEAFgGAFIgBAAIgDADIgEACIABABIAAAAIAAABIAAABIABAAIABACIABACIABAAIABABIACABIACAAIACgBIABAAIAAAAIABgBIABgBQADgDAEAAQADAAACACQACACAAADQAAAFgGAEIAEAEIAAAAIACABIAFADIABAAIABABIABAAIABgBIAEgEIAFgDQAEgBADADQADAEgBAEIgCADIgFAEIABAFIACACIAAACIABAAIABACIACABIAEAAIADgBIAFgCIADgBIABgBQAEgHAGAEQAGADgDAHQgDAGgKADIgBAAIAHAFQAFAEAGABQAGACAHAAIACAAQACgFADAAQADgBADADQACACgCAEIgCACIgCADQgDADgGAAQgHAAgJgEg");
	this.shape.setTransform(12.6196,10.0719);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,25.2,20.2), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCBFB1").s().p("AnsGaQgFgDACgEIAGgaQAVgnAUgjQA5hiAcgrQAqhBAyg5QAqgvA6gsQBihJB6htQBqhZBng1QAkgSAagIQAmgMAmADQAlACARAEQAVAGAPAeQAQAdgHAUQgJgBgGgHIgLgOQgVgZgigCQgTgBgcAGIgtANQgsANgsAdQgVAOgaAVIguAnQgvAng+AoQhmBDhcBWIhYBYQgWAYgTAWIgUAWQgNAOgHAJQgYAhgzBWIgkA7QgQAZgFAGIgWAXQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape.setTransform(49.6901,41.1548);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,99.4,82.3), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C49791").s().p("AgrBiQgMgCABgIIAAgBIgOgNIgNgOIgLgMQgGgIgGgEQgDgCABgEQACgEAEABQALACAUARIAQANIAHAHQAEAEAFAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQgBAAAAgBIgCgEQgCgFgFgFIghgeIgJgIIgEgEIgDgGQgCgDADgCQADgDAEABQADAAAIAFIAsAlIAFAHQAAAAABAAQAAABAAAAQABAAAAAAQABABABAAQAHABACgEIABgCQAAgFgDgEIgIgGIgjgeQgFgDgDgGQgEgHABgCIACgCQAEgBAHADIALAHIAqAhIADAEQAFABABgEQADgGgLgHIgKgKIghgdIgBgBIgBgBIgFgDIgHgGQgDgEgBgEQAAgEAFgCQAEgBAGADIAIAFIAOALIATARIAFAIIALAIQAQAIAFgEIAGgGQADgEABgDIAAgDIACgHQABgFgGgGIgMgJQgGgEAAgEQgCgGAHgBQAGAAAIAFIAIACIAAAAIACAAIALABIACgBIABAAIACAAIACgCIABAAIgFgCQgKgFgGgGQgCgCACgEQABgDAEABIAOAFIAEABIADAAIACAAIABgBIABAAIACgBIABgBIAEgEIABgCIACgEIAAAAIABgDIAAgCQABgIAIAAQADgBADADQADADgBADIAAABQgBAKgEAEIgDACQgFAEgCAHIgEALIgHAKIgFAFQgDACgCAEIgDAIQgCAEgFAFIgFAEQgBAMgGAIQgEAFgGACQgCAVgTAIQgLAVgLABQgFAQgPAIQgIAFgHAAIgEgBg");
	this.shape.setTransform(10.7311,9.8464);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,21.5,19.7), null);


(lib.Prudusnice = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAC7C5").s().p("AAEAJIAAgBIgBgBIgGgGIgCgBIgBAAIAAAAIgCgCIgBAAQgDgDAEgCIABgBIAEAAIACAAIAFADIAFAEIACACIAAABIAAAEQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgCABIgDgBg");
	this.shape.setTransform(147.4357,187.6488);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAC7C5").s().p("AAEALIgBgCIABABIgCgBIgCgCIgCgEIgEgDIgBgBIgCgCIgBgEIADgCIABAAIADAAIACAAIADACIADACIAEAFIABAAIABACQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBADQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABg");
	this.shape_1.setTransform(143.8,188.8375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAC7C5").s().p("AAFAMIAAAAIgCgCIgCgDIAAgBIgDgGIgBgBIgBgBIgBgBIgBgCIgBAAIgCgCIAAgBIgBAAIgBgCIACgCQABAAABgBQABAAAAAAQABAAAAAAQABABAAAAIAEACIAFAFIAFAHIACAFIgBAEQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_2.setTransform(141.675,189.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAC7C5").s().p("AAEAPIgBgBIgDgCIgBgHIgBgFIAAAAIgCgBIAAABIAAgBIAAAAIgDgDIgBAAIgBgCIgCgDIgBgDIACgDIABgBIABAAIADAAIAFACQAEADADADQAEAFABAEIABAIIgBADIAAABQAAABAAABQgBAAAAABQgBAAAAAAQgBABAAAAIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_3.setTransform(138.8,190.255);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAC7C5").s().p("AAJAOIgBgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIgCgFIgHgMIgFgEQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAFgBADADIAEAGIAJAPIgBACIAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgBgBg");
	this.shape_4.setTransform(136.3688,191.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAC7C5").s().p("AgbAfQACgHAXgTQgDgFAGgHQAKgKABgCIAGgJQADgFAEgBQAGAEgFAKIgKAPQAHAWgmAPIgJADQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_5.setTransform(126.3405,191.1136);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAC7C5").s().p("AgcAbQAAgEAOgHQAEgBAGgHIAGgJQAEgGAEgCQADgCAEgMQAFgKAGAGQACAJgDAMQgEALgIAFIgEACQgFAQgZACIgDAAQgGAAAAgDg");
	this.shape_6.setTransform(123.6864,189.2842);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAC7C5").s().p("AgXAcQgGgDAGgFQAGgDAGgFQADgBAGgJQAGgIAEgBIAIgOQAFgJAGACQACAKgGANQgGAMgJAEIgJAKQgGAGgFAAQgDADgDAAIgFgCg");
	this.shape_7.setTransform(121.9928,186.9676);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAC7C5").s().p("AgeAbQgFgEARgJQAEgBAIgKQAHgIAGABQADgBAJgPQAHgMAGAGQABAKgHAKQgIALgJABIgJAKQgGAHgFAAQgJAGgFAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_8.setTransform(119.7744,185.1143);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAC7C5").s().p("AgfAXQADgFAIgDQALgEADgCQAEgCAFgHQAGgGAEgCQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAPgTQACALgHANQgHAMgKAFQgLAJgLAFQgGACgFAAQgHAAgBgGg");
	this.shape_9.setTransform(117.2472,183.0493);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EAC7C5").s().p("AgjAYQADgEAHgBQAqgbAPgUQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQgDAWgVAQQgTAPgXADQgJgBADgFg");
	this.shape_10.setTransform(115.564,180.7833);

	this.instance = new lib.Path();
	this.instance.setTransform(84.9,170.25,1,1,0,0,0,10.7,9.8);
	this.instance.alpha = 0.5195;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(122.7,192.35,1,1,0,0,0,12.6,10.1);
	this.instance_1.alpha = 0.4688;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAC7C5").s().p("AgHAPIgBgGIAAgDIABgGQABgKAEgDQACgDAEAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAAAQAAABgBAAIgBAEIAAABIAAAAIgBAEIgBABIAAAAIgBACIgBACIgCAGQgBAEgBACIgDADIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBgBg");
	this.shape_11.setTransform(144.3563,204.958);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAC7C5").s().p("AgIAMIAAgBIABAAIAAgCIABgEQACgFAEgFIADgFQADgCACABQAAABABAAQAAABAAAAQAAABAAAAQAAABgBAAQgCAFgGAFIgDAFIgCACIgCABIAAABIgBAAg");
	this.shape_12.setTransform(141.8444,204.6629);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EAC7C5").s().p("AgKAPQgEgDADgIIAEgGIAGgIIACgDQACgCADAAIACAAQAGABgBADIAAABIAAACIgCAFIgIAHIgCADIgBACIAAAAIgDAEIAAAAIgBACIAAgBQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_13.setTransform(138.9683,202.4893);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EAC7C5").s().p("AgIAPQgDgBAAgEIABgFIAFgKIAEgGIACgCQAEgCACABQAFACAAAFIgBADIgDAEIgEAGIgGAIIgEABIgCAAg");
	this.shape_14.setTransform(136.625,200.821);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EAC7C5").s().p("AgJAOQgCgCAAgCIAFgMIAFgGIAFgFQADgBACACQACABABAEIgDAGIgIAJIABgBIgFAHIgDABIgDgBg");
	this.shape_15.setTransform(134.05,198.6333);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAC7C5").s().p("AgLAVQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIADgJIAEgIIABAAIABgCIABgEQACgHABgCIACgBIAFgEQABgBAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAgBABQAAAAAAABIAAADIgBAAIABACIgDAJIgEAIIgGAIQgEAGgCAAIgCABIgDgBg");
	this.shape_16.setTransform(131.2367,196.0388);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EAC7C5").s().p("AgTAfQgHgFAIgKIAOgOIAMgVQAKgQAFAHQACASgQAOIAAABQAAAGgJAHIgNALIgBABIAAAAIgDABIgCAAg");
	this.shape_17.setTransform(129.3034,192.6857);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EAC7C5").s().p("AgaARQAGgDANgMQAKgKAHgCIADAAIALgNQAHgJABAHQACAOgWAPQgCAIgZANQgKAEgEAAQgGAAAJgMg");
	this.shape_18.setTransform(113.5819,178.4898);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EAC7C5").s().p("AgbASQgDgHANgGIATgJQAEgCAIgIQAHgHAGAFQAGANgYANQgRAJgMAAIgHgBg");
	this.shape_19.setTransform(110.7561,177.2314);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAC7C5").s().p("AgiAdQgDgDAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAEgCIAkgWIAMgHQAIgFAEgEIADgEIAAgBIABgBQAAgBABgBQAAAAABAAQAAAAABAAQAAABABAAQABABAAAEIgCAGIgKAOIgRAPQgJAIgIAEQgJAEgIACIgEAAQgEAAgBgBg");
	this.shape_20.setTransform(109.645,173.3848);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EAC7C5").s().p("AglAbQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQADgDAPgFIAPgJIAOgJQAKgFAFgFIAJgIQAFgEADABIABAAQACACgCADIgDAFIgJAKQgVAZgcAGQgIADgFAAIgEgBg");
	this.shape_21.setTransform(107.3833,170.8884);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EAC7C5").s().p("AgfAVQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIABgDQADgDAIgCQAMgGAFgEIAZgUQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQAFAAADAFQADAEgEAEIgQAMIgQAJIgRAHQgGACgEAAIgEgBg");
	this.shape_22.setTransform(105.6356,168.6801);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EAC7C5").s().p("AgoAZIgBgCQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIAFgCIALgEIALgGIAJgIIAMgIIANgGIAHgEIAFgGIAGgEIACAAQAGAEgVAWIgRAKIgXAPQgKAEgGAAQgGAAgEgDg");
	this.shape_23.setTransform(104.6417,165.5207);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EAC7C5").s().p("AgnAgIgBgDIABgDIAEgCQAEgCAPgMIAbgQQARgMADgHIAEgFQACgEABAAQADAAAAAFIgBAHQgEAJgDAEQgGAIgRAJIgQAMIgNAKQgIAFgHAAIgCAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_24.setTransform(103.8,162.16);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EAC7C5").s().p("AgrAgQgBgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIgBAAIABgBIABgBIACgBIAUgJIARgNQADgDAIgEQAKgGAFgFIALgJQAGgHAFgCIAAAAIgHAOIgIAKIgHAIIgMAKIgMAJIgOAJQgHAEgJACIgHABQgEAAgBgCg");
	this.shape_25.setTransform(102.05,159.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EAC7C5").s().p("AgTAUQAAgEAHgHIAXgZQADgEACgBQABAAABAAQAAAAABABQAAAAABABQAAAAAAABQABADgEAEIgEAGIgKAKIgJAJIgLAHIgBABIgBgCg");
	this.shape_26.setTransform(100.6781,156.7135);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EAC7C5").s().p("AAEAMIgKgMIgFgGIgDgIQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAEADAIAJIAMAKIADAFQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgBAAQgCAAgGgEg");
	this.shape_27.setTransform(72.0125,179.3123);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EAC7C5").s().p("AAJAQQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBIgSgVIgCgEIgCgEQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAEACIAWAWIABADIACAEIABADIgCABIgGgCg");
	this.shape_28.setTransform(75.2333,177.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EAC7C5").s().p("AAMAQIgFgEIgTgPIgDgEIgDgEQAAAAAAAAQgBgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIAFACIAYAQQADACACADQABADgCADQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAg");
	this.shape_29.setTransform(77.7621,174.3563);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EAC7C5").s().p("AAPATIgBgBQgEAAgCgCIgCgBIgEgFIgQgPIgGgHIgBgDIABgCIACgBQAAAAABgBQAAAAAAAAQABAAABAAQAAABABAAIADABIAXARIAFAFIACACIACAEIABADQAAABAAAAQAAABAAAAQAAABgBABQAAAAgBABIgCABIgDgBg");
	this.shape_30.setTransform(79.981,171.82);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EAC7C5").s().p("AAPASIgHgEIgKgJQgRgNgFgGQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAQAAAAABABQAHADARAMIAMAIIAGAFQAEAEAAACQABAFgEABIAAAAIgIgDg");
	this.shape_31.setTransform(82.0279,169.3254);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EAC7C5").s().p("AAPAUQgDgBgEgEIgZgUIgFgGQgDgEAAgCQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAABIAnAcIAEAEIAEAGQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABIAAAAIgIgCg");
	this.shape_32.setTransform(83.9719,166.6458);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EAC7C5").s().p("AAaAZIAAAAIgEAAQgFgCgFgEIgngfQgFgEAAgEQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAEAAAFAEIAoAcQAJAHAAABIADAIQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgCABIgDgBg");
	this.shape_33.setTransform(86.6667,165.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EAC7C5").s().p("AATAXIgXgUIgYgUQgDgCACgDQADgDADACQAlAYAOANQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABQgCACgCAAQgCAAgDgCg");
	this.shape_34.setTransform(86.8056,161.4225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EAC7C5").s().p("AAXAbQgKgHgSgRIgbgZQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAABAAQAAAAABAAQAAABABAAIAbAXIAdATQADADAAACIACADQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgEAAIgCAAIgDgBg");
	this.shape_35.setTransform(89.725,155.795);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C49791").s().p("AAeAJIgggCIgigEQgYgDgHgCIgBgCIABgBQAHgCAbgBIAxABIAQABIARABQALACAGACQADABAAADQgBADgDABQgFACgQAAIgOAAg");
	this.shape_36.setTransform(97.7536,138.4143);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C49791").s().p("AgVAKQgLAAgIgDQgEgBAAgEQAAgDAEgBIAngEIAmgDQAFAAACAEQACAEgBACQgCAGgGABIgmACIgUAAg");
	this.shape_37.setTransform(94.7313,140.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C49791").s().p("AgKAFQgFgBABgFIABgDQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIAOABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAHACAAACQAAADgFABIgCABQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgPgCg");
	this.shape_38.setTransform(95.1417,155.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C49791").s().p("AAAAIIgWgCIgHgCQgEgDACgDQACgFAFABIAGAAIAGAAIAMAAIAagBQAGAAABAGQABAFgGACQgJACgMAAIgHAAg");
	this.shape_39.setTransform(94.0488,152.3625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C49791").s().p("AgcAGQgVgDgJgDQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABAAQAJABAUADIAdABQAQgBAOgDIAOgCQAHgBAGABIACACQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgEAFgIACIgPACQgPADgQAAQgOAAgQgDg");
	this.shape_40.setTransform(94.642,148.75);

	this.instance_2 = new lib.Path_39();
	this.instance_2.setTransform(149.55,206.7,1,1,0,0,0,0.7,1);
	this.instance_2.alpha = 0.4883;

	this.instance_3 = new lib.Path_40();
	this.instance_3.setTransform(145.95,205.75,1,1,0,0,0,1.4,2.1);
	this.instance_3.alpha = 0.4883;

	this.instance_4 = new lib.Path_41();
	this.instance_4.setTransform(142.6,205.35,1,1,0,0,0,1.6,2.2);
	this.instance_4.alpha = 0.4883;

	this.instance_5 = new lib.Path_42();
	this.instance_5.setTransform(140.25,202.8,1,1,0,0,0,2.2,2.8);
	this.instance_5.alpha = 0.4883;

	this.instance_6 = new lib.Path_43();
	this.instance_6.setTransform(137.55,202.35,1,1,0,0,0,1.9,1.9);
	this.instance_6.alpha = 0.4883;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C49791").s().p("AglAvIgKgHQgFgEgCgFIgRgdIgFgJQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAIACAAIADABQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAFADIADADIAIANIABADIAGAGIABAAIAAAAIABgCIgBgBIgBgFIAAgDIAAgCIAAgBIgBgEIgCgDIgCgFIAAgEIACgCQABAAAAgBQABAAAAABQABAAAAAAQAAAAABABIAIAMIADAIIABADIACAAIABAAIAAAAIABABIACAAIAEAAIACAAIAEgEIAAgBIgBgFIAAgCIgBgCIAAgBIgCgKIAAAAIAAgDQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQABAAAAgBQABAAABAAQAAAAABABQAAAAABAAIACADQACACADAGIADAIIAAACIAAAFIAAACIACABIACAAIABAAIACgCIABgBIAAAAIABgCIABgEIAAACIABgDIAAgEIAAgCIgBgFIgBgCIAAAAIgBgDIAAgBIgBgBIgBgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAABABAAIACABIADABIADADIAEAGIAEANIAAAAIAAABIAFAAIABgBIACAAIABAAIABAAIADgCIACgCIAAAAIABgBIAAgBIAAgBIAAgDIgBgHIABgEIAAgCIgBgEIABABIgBgEIAAgEQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIAAABIABAAIACACIADAEIAEAIIAAADIAAADIAFAAIAAAAIACAAIADgCIAAgBIAAgBIABAAIAAgCIAAgFIAAgBIgCgKIAAgCIABgCQABgEAEAAQAEgBABADIADAKIgBAHQgBALgFAEIgQAMIgKAHIgLAGQgMAFgNAEIgIACQgJABgHAFQgHAFgGAJIgCADIgCAAIgEAAg");
	this.shape_41.setTransform(142.2271,191.5722);

	this.instance_7 = new lib.Path_44();
	this.instance_7.setTransform(135.5,200,1,1,0,0,0,1.2,1.6);
	this.instance_7.alpha = 0.4883;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C49791").s().p("AgRAZQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAFgNIAFgIIAFgIIAKgNIAEgEQAEgCACACIAAAAIABABQADACgBAEIgFAHIgMAOIgIALIgEAFIgEAEIgCACIgBgBg");
	this.shape_42.setTransform(133.5061,196.6571);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C49791").s().p("AgVAcQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAgGAGgIIAfglQAEgDAEADQAFADgCAFIgFAIIgYAeIgLAJIgDABIgCgBg");
	this.shape_43.setTransform(130.3058,194.7557);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C49791").s().p("AgXAYQgBgEAHgKIAYgfIAAAAIABAAIABgCIADgCQAEgFAFAFQAFADgDAGIgDAEIAAABQgBADgFAFIgSAWIgIAHQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAIgDABQgEgBAAgEg");
	this.shape_44.setTransform(127.6796,192.95);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C49791").s().p("AgUAYIgBgCIAJgOIAIgMIAIgNIAGgFIADgBIABgBIAEAAQAFABgBAEIgCADIgCAEIgFAFIgSAWQgHAHgGADIgBAAIgBgBg");
	this.shape_45.setTransform(125.484,191.0583);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C49791").s().p("AgRASQgBgEAFgHIANgRQAGgHAEgBIACgBQADgBACADQACADgCACIAAACQgBACgHAHIgOAOQgFAHgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_46.setTransform(122.9611,189.4125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C49791").s().p("AgUAXIgCgCQgCgCACgEQADgGAOgNIAHgJIALgJQAFgDAEAEQAEAEgDAFIgEAGIgOAMQgNAOgGADIgDABIgDgBg");
	this.shape_47.setTransform(120.6975,187.1107);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C49791").s().p("AgVATQgEgFAEgEIAdgaIACgBIAEgCQAEgDAEAEQADADgCAEIgCADIgBABIAAABIgFAGIgSAOIgKAGIgEABQgCAAgCgCg");
	this.shape_48.setTransform(120.2204,183.871);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C49791").s().p("AgWAYQgDgCAAgCQAAgCAFgGIAcgeIAHgEQAFgDAEAFQAEAEgEAFIgeAcQgEAEgDABQgFACgCAAIgCAAg");
	this.shape_49.setTransform(116.4317,183.1415);

	this.instance_8 = new lib.Path_53();
	this.instance_8.setTransform(101.3,166.65,1,1,0,0,0,16.4,16.3);
	this.instance_8.alpha = 0.4688;

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C49791").s().p("AAEAJIgPgIIgCgBIgBgDQgBgDADgCIADAAIADAAIAJACIAFABIADACIABABIABACIABABQADAFgGACIgBAAIgCABg");
	this.shape_50.setTransform(73.6125,189.2125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C49791").s().p("AAEAJIgPgFQgFgCAAgEQABgGAGAAIAKABIAHABIAEADIADACQACABAAAEQgBAEgEAAIgDABIAAAAIgCAAIgDAAg");
	this.shape_51.setTransform(75.0269,185.9333);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C49791").s().p("AADASIgDgEQgDgCAAgCIgFgNIgBgGIAAgGQABgEAEACIADADIAAAAIABAAIABADIAJAQQABACgBAEIgBAFQgBABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgDgBg");
	this.shape_52.setTransform(65.625,181.8897);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C49791").s().p("AAGAZIgCgCIgBgBIAAAAIgBAAIgEgHIgLgWIgDgFQgEgGABgCQABgHAFAAQAFAAAIAJIAHAMIAGALIAEAHIgBAAIADAEQADAGgFAEIgFACQgDAAgDgDg");
	this.shape_53.setTransform(69.6649,180.8016);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C49791").s().p("AAMAUIgDgCIgBgBIgFgFIgVgYQgDgDADgDQACgEAEACQAHAEALALIAHAIQAEAEABACIAAAAIACAEQADAEgEADIgEACQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_54.setTransform(73.4981,177.8329);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C49791").s().p("AATAdIgOgOIgigfIgDgCIgCgDIgBgCIAAAAQgBgFAFgCIADgBIAJADIAIAFIAOANIAbAXIABAAQAEADABAEQAAAEgCAEQgDADgEAAIgBABQgEAAgDgDg");
	this.shape_55.setTransform(85.9208,166.4036);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C49791").s().p("AAWAdQgGgBgEgEIgnglIAAAAQgFgFACgFQACgHAHACQAGABAKAIIAfAdQADADACAHQABAEgDADQgCACgDAAIgCAAg");
	this.shape_56.setTransform(85.3089,162.239);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C49791").s().p("AgnA8QgDgBAGgLIAIgMQAMgXAIgKIAZggIAKgRIAEgHQACgFADgBQABAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAEgCAEIgEAIIgJAQIgZAeQgLAPgKAUQgFAKgFAFQgFAGgDAAIgBAAg");
	this.shape_57.setTransform(100.3571,154.3892);

	this.instance_9 = new lib.Path_61();
	this.instance_9.setTransform(89.55,71.85,1,1,0,0,0,6.5,71.6);
	this.instance_9.alpha = 0.1211;

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E2B6B5").s().p("AA8AJQgbgIgjgBIgfAAIgQAAQgJAAgGgBIAAAAQAJgFAVgBIAhgBQAkAAAbAJQAEABgBAEQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAIgCAAg");
	this.shape_58.setTransform(94.435,7.9861);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E2B6B5").s().p("AAjAEQgQgCgSgBIgggBQgUAAgOgCQAAAAgBAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAdgDAlABQASABAuAHQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgGAAQgKAAgOgDg");
	this.shape_59.setTransform(96.4625,12.0705);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E2B6B5").s().p("AAbAFIhRgJQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIACgBQAHgBAWABIA0AGQAUADAHADQAAABAAAAQABAAAAAAQAAAAAAABQAAAAgBAAIgBABIgCABQgGAAgTgEg");
	this.shape_60.setTransform(93.0521,15.9031);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E2B6B5").s().p("AAYAEIgzgEQgQAAgIgBIAAAAQAHgDARgBIAbAAQAjABAPAHQABAAAAAAQAAAAAAABQABAAAAAAQAAAAgBABIgBABIgFAAIgVgCg");
	this.shape_61.setTransform(93.4563,20.6643);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E2B6B5").s().p("AAsAKIgOgFIgegFIgdgDQgUgCgLgCIAAgBQAYgFAlAGQAMABAUAFQAWAFAFAFQABAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgCAAIgNgBg");
	this.shape_62.setTransform(95.2656,28.0735);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E2B6B5").s().p("AA9AMIgOgEIgPgFIgegEQgUgEgOABQgXABgHgBIAAgBIAigGQANgBATAEQAWADALADQASAEAHAIIABACIgBAAIgBAAg");
	this.shape_63.setTransform(95.075,33.3972);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E2B6B5").s().p("AAiAJIgLgEIgWgFIgXgDIgXgEQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAHgCASABQAKAAAMACIAXAGQARAFAFAEQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAIgLgDg");
	this.shape_64.setTransform(94.1458,40.7333);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E2B6B5").s().p("AAtAKIgPgFIgegFQgpgEgUgFIAAAAQAWgFAnAGQAUADAMAEQAWAEAHAEQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgOgDg");
	this.shape_65.setTransform(96.3925,48.5364);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E2B6B5").s().p("AAWAGIgugGQgRgEgFgDIAAgBIABgBIBFAJQAQACAGAEQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAIgXgEg");
	this.shape_66.setTransform(96.2063,51.925);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E2B6B5").s().p("AA4AJIgNgDIgNgFQgNgBgQgBIgeAAIgcABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABgBQAIgEATgDQATgBAOAAQAPAAAQAFQASAEAGAGQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAIgCACIgBgBg");
	this.shape_67.setTransform(95.4833,62.85);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E2B6B5").s().p("AAyAIIgagHQgNgCgMAAIgbAAQgUAAgEgDQADgCAIAAIAOgBIAcAAQAfABAUAKQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgBAAg");
	this.shape_68.setTransform(95.4167,66.7925);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E2B6B5").s().p("AAtALIgOgFIgegIQgJgCgUgBQgVAAgKgCQAAAAgBgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAfgIAeAHIAfAIQAWAGAFAHQABABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgCAAQgFAAgHgDg");
	this.shape_69.setTransform(97.0114,71.0079);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E2B6B5").s().p("AAhAEQgRgDgRgBIg1gBQgKAAgDgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAHgFAYAAQAQgBAUACQAvADAVAKQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgBACQgMgBgWgFg");
	this.shape_70.setTransform(97.7333,75.5938);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E2B6B5").s().p("AA0AGIg0gEQgjgBgSgCQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIACgBIA1AAIAbACQATABAGABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgBAAg");
	this.shape_71.setTransform(97.6438,80.5958);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E2B6B5").s().p("AAmAGIgMgCIgZgCQgKgBgnAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAagCAZAAIAYADQAQADAIAEIABACIgCABIgMgBg");
	this.shape_72.setTransform(97.85,86.27);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E2B6B5").s().p("AAbAGIgbgGIg1gHIgBgCIABgBQAFgCAJABIANACIA2AJQARAEAJAFIABACQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgHAAgTgGg");
	this.shape_73.setTransform(97.5,92.1083);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E2B6B5").s().p("AAWAFQgKgDgMgBIgWgDQgPAAgIgCIAAgBQAGgCASgBIAWACQAIAAAPAEQAOACAHAGQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAIgCABIgCAAQgFAAgPgEg");
	this.shape_74.setTransform(97.7333,96.9775);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E2B6B5").s().p("AAmAJIgmgJQgXgDgQgBQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAGgEANABIAVACIAWAEIAKACQAFABAEAEIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_75.setTransform(98.8762,101.97);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E2B6B5").s().p("AAlAEIg/gDIgMAAQgIgBgDgCQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAQADgCAJAAIAMABIAaAAIAcACQARABAEADQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgCAAIgKgCg");
	this.shape_76.setTransform(97.795,107.78);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E2B6B5").s().p("AAeAHIhGgNIAAgBQAQAAAYADIAVAEQAPACAFACQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgKgBg");
	this.shape_77.setTransform(97.0938,113.0969);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E2B6B5").s().p("AAAAFQgLAAgjgFIAAAAQAdgFARAAIAXABQAPABAIADIABACIgCACQgFACgRAAg");
	this.shape_78.setTransform(97.3625,117.875);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E2B6B5").s().p("AA3AHIgcgEIgbgBQgeAAgZgCQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAQAagBAfABIAcAAQAQABALAEQADABgBADQAAAAAAABQgBABAAAAQAAAAgBABQgBAAAAAAIgBAAg");
	this.shape_79.setTransform(96.5361,128.0831);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EAC7C5").s().p("AgvAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAcACAVgBIAkgCQAHgBADACQAAAAABABQAAAAAAAAQAAAAAAAAQAAABgBAAQgCACgGAAIgNABIgZABQgaAAgXgEg");
	this.shape_80.setTransform(96.8571,135.3083);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EAC7C5").s().p("AArAKIgNgDQgIgCgSgBQgjgBgYgDQgFAAABgFQABgEAEgBQAcgCAjABIAcAEQASAEAFAJQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgFAAgIgDg");
	this.shape_81.setTransform(94.0909,3.9969);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EAC7C5").s().p("ABFAIQg0gEgRAAIgkABIgSABIgSAAIgCgBIABgCQAMgEAZgCIAkgDIAjgCQAVABAOAFQAFABgBAEQAAAGgEAAIgBgBg");
	this.shape_82.setTransform(96.6025,145.3521);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F4DDDC").s().p("AgcAGQgQgBgMgDIgBgBIABgBQASgDAmAAIAcgBQAXgCAFACQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAQgFACgIAAIgPABIgcABIgcAAg");
	this.shape_83.setTransform(96.8292,136.4625);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F4DDDC").s().p("AgkAEQgJAAgCgCQgEgCADgCQADgDAHAAIANAAIAyACIAMACIAMACQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgMAAg");
	this.shape_84.setTransform(95.412,129.725);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EAC7C5").s().p("AA4ALIgRgDQgNgBgZAAIgnAAQgZAAgJgFIgBgBIABgBQAKgFAbgCQAegDAJAAQAVAAARACQAaADAGAKQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQgEACgGAAIgGgBg");
	this.shape_85.setTransform(93.8893,8.55);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EAC7C5").s().p("AA1AKIgRgCQgSgBgSAAIg2AAQgLgBgEgDIgBgCIABgBQAHgFAagCIAlgCQATAAATACIARABQAKACAFAGQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgFAEgIAAIgDAAg");
	this.shape_86.setTransform(94.275,12.5778);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EAC7C5").s().p("AA3AIIgSgDIhJAAQgbgBgKgEQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBQAJgBAdgBIAmgCIAnABIARACQAKADAFAEQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgCACIgJACIgJgBg");
	this.shape_87.setTransform(93.5533,16.3071);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EAC7C5").s().p("AAvAHIgQgBIhbgEQgDAAgBgCIAAgCQABgDADAAQAVgBApAAIAgABQAXAAAGADQABABAAAAQABABAAAAQAAAAAAAAQAAABAAABQgBADgCABQgFABgHAAIgDAAg");
	this.shape_88.setTransform(92.8292,21.48);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EAC7C5").s().p("AAsALIgOgEIgcgEIgegDIgQgBQgKgBgFgDIgBgCIABgCQAGgDAbAAQALgBAVACQAOABAQADQAUAGAFAIQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgGAAgIgDg");
	this.shape_89.setTransform(94.4,28.745);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EAC7C5").s().p("ABCAPQgVgIgLgBIgmgGIgogBIgTgBQgIAAgEgCIAAgBQADgDANgDIATgCQATgCAWABQAUABAVAEQAWAEAJAIQAEAEgDAEQgCAEgDAAIgDAAg");
	this.shape_90.setTransform(95.0021,33.8723);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EAC7C5").s().p("AAvALIgPgEQgSgEgPgCQgrAAgVgEIAAgBQAVgLAsAEIAhAFQAZAFAHAFQACACgBADQAAABAAABQgBAAAAABQgBAAAAAAQgBABgBAAIgCAAQgFAAgIgCg");
	this.shape_91.setTransform(92.9042,39.574);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EAC7C5").s().p("AA/ALQgWgFgKAAIgigCIgigCIgTgBQgKgBgEgCQgBAAAAAAQgBgBAAAAQAAgBABAAQAAAAAAgBQAFgEALgBIASAAIBIAAQAZABAJAHQAFADgCAGQgCAEgFAAIgCAAg");
	this.shape_92.setTransform(93.8196,44.14);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EAC7C5").s().p("ABCAPIgPgEIgQgEQgYgFgMgBIg3gDQgKAAgEgCQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAEgEALgBIAUgBQAUgBASACQARACAVAEIARAEQAKACAEAGQACADgCADQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAIgBAAg");
	this.shape_93.setTransform(96.2556,52.9486);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EAC7C5").s().p("AgyAMQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAFgGATgGQAMgDAQgCQAOgBAOACQATABAGAIQAAAAAAAAQABABAAAAQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgFADgIgBIgMgBQgMgCgOABIgZAEQgQADgGAAIgDAAg");
	this.shape_94.setTransform(96.72,58.14);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EAC7C5").s().p("AAeAMIgJgBIgVgBIgVABQgNgBgJgCQgFgBAAgFQAAgEAFgBIAXgEIAXgDQAPgBAHABIAMACQAFACAFAGQACADgBADQgCAEgEABQgDABgEAAIgFAAg");
	this.shape_95.setTransform(94.5571,64.0917);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EAC7C5").s().p("AATAKIgHgCIgNgCIgQAAQgKgBgGgDQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAFgDAMAAIAQgBIARABIAHABQAEABAFAFQAEACgCAFQgCADgFABIgJAAg");
	this.shape_96.setTransform(93.4731,67.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EAC7C5").s().p("AAZALIgIgBIgRgBQgZAAgOgEQgCgBgBgDQAAgBAAAAQAAAAAAgBQABAAAAgBQABAAAAAAQARgHAXgBQAPgBAHABIAKACQAFACAFAGQACACgCAEQgBADgEABIgIACIgEgBg");
	this.shape_97.setTransform(94.9196,72.7667);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EAC7C5").s().p("AAWAHIgWAAIguAAQgEAAAAgEQAAgDAEAAQAWgEAagBQANgCALABQAOAAAIADQAEACgBAEQgCAEgEABIgXgBg");
	this.shape_98.setTransform(96.6455,77.1938);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#EAC7C5").s().p("AgBAIQgSgCgLgFQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAKAAASgCIAVgBIADABIABAAIACABIAEACQADACgBADQgBAEgCABIgFACIgBAAQAAgBAAAAQABAAgBAAQAAAAgBABQAAAAgBABg");
	this.shape_99.setTransform(94.675,83.25);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EAC7C5").s().p("AAnALIgMgDIgagCQghgBgSgBQgEgBAAgDQgBgEAEAAQAbgGAaAAQAQAAAMACQAVADADAGQADAFgFAEQgDABgFAAIgFAAg");
	this.shape_100.setTransform(97.3139,88.2393);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EAC7C5").s().p("AAYAKIgKgCIgOgCQgOgBgTgFQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQABgEADAAQAUgDAOABIAPABQAFAAAFABIADABIAEACIACADQACACgBADQgBADgDABQgDACgEAAIgCAAg");
	this.shape_101.setTransform(95.3862,93.5008);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EAC7C5").s().p("AAeAMIg5gIQgGAAgGgCIgIgCIAAgCQABgDAHgCIAMgDQAOgCALABQAOABAMACIALADQAIAEACABIAAABQAEACgBAFQgBAEgFAAIgBAAIgEABIgHgBg");
	this.shape_102.setTransform(96.035,98.3438);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EAC7C5").s().p("AgdAEIAGgDIAHgBIAPgDIAOgCIAHAAQAHAAABACQADADgDADQgCACgGAAIgHgBIgpACQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_103.setTransform(93.6167,103.975);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EAC7C5").s().p("AgzAHQgEgBgBgEQgBgDAEgBQAfgHAXAAIAqADQAKACACADQADABgBADQAAADgDACQgCACgLgBg");
	this.shape_104.setTransform(95.0764,108.75);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#EAC7C5").s().p("AApAHIgOgBIgbgDIgagCIgcgBIgCgBIABgCQATgDAkgBIAcAAIAOABQAIABAFADQAAABABABQAAAAAAAAQABAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgDACgGAAIgEgBg");
	this.shape_105.setTransform(94.705,114.4018);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EAC7C5").s().p("AgbAgQgPgDgHgIQgIgIABgNQAAgMANgHQASgKAagCIAYgBIANACQAHABADADQADABAAAEQAAADgDABIgNACIgMAAIgZABQgLABgMAFIgLAFIgDACIABADQABAEAEACIAIACQALACAQgBIAbgCQAKAAAFADIAMAGQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgNAGQgCABgGABIgJAAIgcACIgYgBg");
	this.shape_106.setTransform(96.4757,121.875);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C49791").s().p("AAlADIgNgBIgYgBIgzAAIAAgBQAMgBAOgBIAZgCIAaABQATABAGACQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgMgCg");
	this.shape_107.setTransform(93.0792,133.975);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C49791").s().p("AhNAFIABgCQAYgFA0gDIAoAAIASAAIATACQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgTgBIg5AAIhNAFIgBgBg");
	this.shape_108.setTransform(95.98,144.4125);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#C49791").s().p("AgPACQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgEADAAQAKgBAPAFQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQgKgBgOACQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAgBgBg");
	this.shape_109.setTransform(87.255,117.3659);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C49791").s().p("AgQAFQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBIAEgBIAFgBIASgDIAEAAIAFABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIgFACIgEAAIgWAFg");
	this.shape_110.setTransform(87.7969,100.375);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#C49791").s().p("AgGAFQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIADgBIACgBIADAAIAEgBIAFgBQABAAAAABQABAAAAABQAAAAAAAAQAAABgBAAIgEACIgHADIgCABg");
	this.shape_111.setTransform(86.9638,95.7417);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#C49791").s().p("AgHALQgHgEgCgGQgEgIAFgFQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABABAAQAAAAAAAAQABABAAAAQAAAAAAABIABAEIgBAAIAAACIABAAIAAACIAAABQACADAEACQAFADAEAAIAIgBIADABIAAAAIgCADIgDACIgHABIgEABQgFAAgEgDg");
	this.shape_112.setTransform(86.5559,90.2049);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C49791").s().p("AgRAEQgCgGACgHQACgDADABQAEAAgBAEIgBAGIABADIABABIAAABIACABIACAAIAXACIAAABIgEABIgQADIgHABQgHgCgCgHg");
	this.shape_113.setTransform(87.4556,84.9889);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C49791").s().p("AgBAMQgJgDgCgJIgBgGIAAgDQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAIAEAAQACABABAEIAAADIABAEIABAAIABACIABADIAAgBIACABIABABIAAAAIADABIADAAIACAAIABAAIABAAIAAABIgBABIgCACIgEACIgDAAIgFgBg");
	this.shape_114.setTransform(87.25,79.8617);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#C49791").s().p("AgLAOQgFgFgCgJIgCgHIABgEQAAgCADgDQACgBADACIACAHIABAGIADAHIABABIAAABIABAAIADgBIANAAIAEABIADABQAAAAAAABQABAAAAAAQAAAAgBAAQAAABAAAAIgEACIgTAFIgCAAQgDAAgDgDg");
	this.shape_115.setTransform(87.4125,74.554);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C49791").s().p("AgKARQgCgBgDgFIgDgJQgEgHAAgIQAAgDAEgBQAFAAAAADIAEAOIAEAIIACgBIALgBIAIAAQAEAAACACQAAABAAAAQABAAAAABQAAAAgBAAQAAAAAAAAQgCACgGAAIgPAEIgGACIgDgBg");
	this.shape_116.setTransform(87.5625,69.404);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#C49791").s().p("AgPATQgGgDgCgQQgDgPAHgDQAFgBACADIABADQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgBABIAAAAIAAADIADAPIAAABIADgBQALgBAGACIAIACIAHAFIgKAAIgLABIgIABIgGAAIgFAAg");
	this.shape_117.setTransform(86.6421,59.445);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C49791").s().p("AgqAJQgGgCgEgFQgDgFADgGQACgCADABQABAAAAABQABAAAAAAQAAABABABQAAAAAAABQAAAGAIAAIANABQAOABANgBQAiAAAQAIIhBACIgQAAQgJAAgGgCg");
	this.shape_118.setTransform(89.8058,41.7607);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#C49791").s().p("AgfAFQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgDAGgBQAWgCAJABIAQADIAGACIAHADIAAAAIgIABIgWABQgUAAgKABIAAAAIgEgBg");
	this.shape_119.setTransform(87.9625,19.2729);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#C49791").s().p("AgiAYQgDgMAAgNIAAgNQABgKADgDQACgCADABQADABABADQABACAAAEIgCAGIAAALQAAAJACAIIAMgDQAHgDAJgBQATgBAOAJQAAABAAAAQABAAAAAAQAAAAgBAAQAAAAAAAAQgWgBgMADIgPAFQgKADgHABQgFAAgBgFg");
	this.shape_120.setTransform(87.0917,12.5583);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#C49791").s().p("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GQgCgIAAgDIgQgGQgQgEgJgBIgWAAIgWABQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBgBAAAAQAAgEADgBQAZgKAsANIAQAGQAJADAAgHQABgGgBgGQgBgMgCgFQgCgFgFgCIgLgBQghgFgyABIgmABQgXgBgQgEQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAKAAAPgBIAYgDQAQgCAigBQAYgBAZACIAVACQANACAFAHQAFAGAAALIgCATQgCAPgFADQAEAGAAAJQgBAJgHAFIgBAAIACAPQADANAAAGQAAAJgDAFQABAFgBAXIgDAeIgCALIABADQAFANACAQIABAOQAAAJgBAFQgBADgCACQACAEADAHIAEALQAGATAAAOQAAAMgHAFQAGAIACATQACANgDAOQgDAQgMAGQADAJABALIgBAPQAMAHABAZQAAAQgDAEQgCAFgHADQADAbgHAPIgCACQAQAZgOAbQAQATgJAMIgCACQANAPgCATIABACQAGAIABAOQAAAMgEAKIgEAHQAHAJACANQADAMgCALQgBAJgEAGQADABAAADQAHAggIAWIgCADQAMAZgFAWQgDALgDAFQACAIgCALQgBALgFAHIgFAEIAAABQAGAagHANQANAIAAAdQAAARgKAIIACAOQACAKgCAMQgBAGgDAEIAAAAQAHARgHAUIgEAJQADAGABAMQABAMgDAKQgCAJgCADQARANABAZQABASgFAKQgCAFgGADIgLAEQgZAHgfABIgHAAQgXAAgZgIg");
	this.shape_121.setTransform(96.4758,70.9302);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#DEB1A9").s().p("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gHQgDgGgCgCQgCgCgEAAIgHgCQgDgCgEgEIgGgIQgLgEgFgEIgGgKIgLgKQgDgCgCgGQgDgHgCgCQgCgDgGgCIgHgFQgGgHgEgDIgIgDQgKgDgHgLIgEgHIgHgGIgHgGIgGgNQgCgDgJgGQgHgFgCgEIgCgEIgEgEQgDgDgGgJQgGgIgFgDQgOgKgDgEQgDgLgEgEIgFgEQgEgDgGgMIgCgEIgGgDQgDgCgCgGIgEgJIgFgDQgJgIAAgLIgBgLQgBgDgFgDIgHgFQgCgDgCgKQgEgPgMgKIgDgCIgCABQgJAGgDAMQgDANgKAHIgDADIgCAGQgDALgIAGIgGAGIgCALQgBAKgKAEIgCABIgBACQAAAIgFAHQgFAHgHACIgEABIgCAEQgDANgLADQgHACgBACIgFALQgGAIgJAEQgGADgIAJIgRASQgLAcgTA4IABADQAWBqgRA4QgCAGgFgBQgGgBAAgGQgCgOAAgXIAAglQAAgVgFgdIgKAXIgKATQgEAMgQAKQgNAJgbAKQgIADgbACQgbABgSAHQg7AWgmBpQgBAmAIAXQAGASARAiQAHAQAJAcQAHAFACAIQAHAZAQAmIAZA/QANApAKAaIAMAgIAEANQACAHgCAFQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgIgEgJgSQgJgLgOgYIAAA3IABApQAAAZgIAMQAAABAAAAQgBABAAAAQgBAAAAABQAAAAgBAAIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_122.setTransform(99.7406,133.705);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.instance_9},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.instance_8},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.instance_7},{t:this.shape_41},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_1},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Prudusnice, new cjs.Rectangle(0,0,199.5,267.4), null);


(lib.PlicePrava = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.instance = new lib.Path_0();
	this.instance.setTransform(87.75,41.1,1,1,0,0,0,49.6,41.1);
	this.instance.alpha = 0.7188;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C47B65").ss(0.5,1,1).p("AibrpQgRA+gUCnQgXC7ASC7QALBnAVBWQAUBXAhBcQAbBLAZAwIA0BuQAWAtAJAXQAIAWAFAUQAFARAFAOQAUAtAtAtQAdAeAcAOQASAIAUAE");
	this.shape.setTransform(35.85,199.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCBFB1").s().p("ADLLEIgJgDIgKgEQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQg2gSgpg5QgVgdgnhPQhGiNgqhlQg4iHgeh3QgliTgBh5IAAg9IgDgvQAAgaAHgTIACgEQADggAEgQIADgPQACgaADgZQAEgcAJghQADgIADgXQADgUAEgKIABgBIAAgIIADgUQACgMAFgIIAGgJQADgFABgFQAAgBABAAQAAgBAAAAQAAAAAAABQAAAAAAABQACAFgBAOQgCAMgEAIIgKAbIACADQACALgDATIgFAeIgHA8QgDAagBAUIgDAmQgDAUAAAaIgBAjIAAAVQABABAAAAQgBABAAAAQAAABgBAAQAAABgBAAIAKCAIAJBjIAHA/IAOAqQAFAPAHAiQAHAfAFARQAUA/ARAwQAZBIAXAtQAJATASAYQAGAJAHAQIALAaQAZAzAMAuQAVBLBAA9QAfAdAjAPIgLgDIABAAQAOAEACADQADAEgEABIgCABIgHgCg");
	this.shape_1.setTransform(33.3021,202.6667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E09D94").s().p("ABnKnQgcgggNgSQgWgdgLgaIgPgsQgOgpgcg/IguhmQgshlgghyIgXhTQgNgwgGglQgMhFgFhoQgIiAAOiBQAGhAAMhAIANg/IAIgeQAFgRABgLQgCAugKBEIgPBzQgcD/AuDGIAVBhQAMA6AMAnQAeBgAuBfIAnBKQAWAsALAgIANAoQAIAWAIAQIArBIQAcAqAVASQATAPArAUQAFACgCAGQgCAHgGAAQg5gEgsg4g");
	this.shape_2.setTransform(36.1677,199.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C47B65").ss(0.5,1,1).p("AqSi/QADAIAJASQAKAVAHAJQATAcAoAUQCIBFAkAOQAxARBXAYQBhAaBXASQA3AMAuAHQAxAHAzAKQAlAIA+AOQA7AOA5ALIBxASQA8AKApAAQAugBAdgMQAUgHAMgK");
	this.shape_3.setTransform(87.425,139.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E09D94").s().p("AIGC+QhugIhtgYIhagYQg4gPgjgFIiAgXQjTgliug9QhggkhGgnQgogWgVgWQgWgWgMgpIABgBQAFALAXAZQAKAMASAPQAgAaA4AbQBpA0B5AhQBtAeCLAaIB6AUQBJANAxAMICJAhQBOARA8AHQAwAFAigBQAsgBAlgMIAEAAQAJAAgCAFIgEADQgqAXg+AAIgegBg");
	this.shape_4.setTransform(87.2113,139.7862);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCBFB1").s().p("AGzC3QhogQg0gGQgngEhigRQgvgGgXgEIgigHIgigLIghgIIgigHIhCgQQhJgSg9gSQiagthiguQgggPgRgKQgbgQgPgSQgngugLgoQAAAAABAAQAAAAAAAAQAAgBAAABQABAAAAAAQALAdAWAYQAJAKAPAKIAZAQQAoAbBGAdQB1AuCJAlQA4AQBLARIBCAOQAVAFAtAFIBDAOIBCANICFAZIBEANIBDAMQBIAMBIgFQADAAACACIAJgCQAUgFANgMQAEgDAEAEQAEAEgEADQgPANgWAFIgUAEIgMABIgYABQgyAAhNgKg");
	this.shape_5.setTransform(87.0817,140.661);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8AA9A").s().p("ArFWfQgRgLgPgPQgjglgGhBQgDgkAHhBQAHg7AIiSQAGiDALhKQATiJAOiYQAMiHAYiWQAci1Adh2QAnibAvh+QBOjRBnixQA4hiAcgqQArhBAyg6QApgvA7gsQBhhKB6htQApghAZgTQBGgzBJgmQAkgTAbgIQAmgLAlACQAkADARAEQAfAHARAUQAOARgCAjIgDByIABA/QACAdAFAYQAHAmARAlIAmBMQAnBVAbBbQAoBpAFBbIABAYQACAygBB2QgCCSgCBAQgFCHgGA2QgIBAgJAwIAGAgQgBBmgJBlQgKB9gIAwQgLBGgZA7QgiBTg5BEQg0A2g6ArQgmAcgsAYQg8AggrAcQhdA8hXBEQg5AtghAUQgzAhg6AZQgXAKgaAIQgqAMgtAPIhKAaQgXAJgYAGIgsAJQgUAFgUAGQgQAGgQAIQgZANgZALQgZALgfAMQgTAHgQAJQgQAJgVAPQgMAJgLACIgMABQgYAAgbgQg");
	this.shape_6.setTransform(78.3581,145.5348);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC8279").s().p("AkCC9IAAgBQAQgSAKgHQARgMAOgMQAcgXAcgTQCChcBVg0IAwgdQAcgSATgNQArgfAagsQAFgKAMAEQALAFgEALQgQAtg8AsQgUAOgdASIgyAfQhEAoguAfIhvBKQgRALgqAYIgcASIgcAMIAAAAIgBgBg");
	this.shape_7.setTransform(113.2158,240.8135);

	this.instance_1 = new lib.Path_9();
	this.instance_1.setTransform(110.3,242.4,1,1,0,0,0,23.9,14.2);
	this.instance_1.alpha = 0.2109;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC8B75").s().p("AkhCzQgLhMBFhaQA8hPBohGQBjhDBbgbQBhgcAoAfQAaAVAFA5QACAfgGBHQgFA7gJAfQgPA1gkAjQgcAbgpARQgVAJgiAIQgPADgUABIhLAFQhTAGgqAHQhHANg4ASQgVgfgEgjg");
	this.shape_8.setTransform(109.967,236.7481);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E09D96").s().p("AA5EnQgJgCgBgJIgIhAQgGgkgIgbQgQgygggxQgbgogQhDQgGgZABgjIAEg8QACgrACgWQAEgogGgUIABAAQARAYAFAoQACAVAAAvIgCBAQgBAVALAoQAJAjALAUQAJASAVAfQAdAyAOA5QARBDgKAuQgBAIgHAAIgDAAg");
	this.shape_9.setTransform(144.4664,35.1091);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D89D8D").s().p("AgRDhQhihvgQiAQgNhsAmhvQAkhpAoAAQAKAAANAMQAHAIATAaQAiAtARA/QAjCEAKAqQAQBBACAlQAJB9gaB6QhMgwg5hCg");
	this.shape_10.setTransform(138.739,36.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_1},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PlicePrava, new cjs.Rectangle(0,0,156.7,291.1), null);


(lib.PliceLeva = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDB1A6").s().p("AnxKBQgNgtgOhOIgMhAQgHglABgbQAAgaAKgjQAMgnAFgUQAHgbADgkQACgSACgtQADhNALgvQAMgxAXg4QARgpAgg/IAzhmQAbg4APgvIAdhhQATg6AVgkQAcgwAogaQArgdA6gFQA0gFA3AOQBhAYBiBWQAlAhAyAxIBTBUQA4A3AYAcQApAxAVAvQAEAHgHAEQgHAEgEgHQgNgXgRgXQgegpgtgtQgYgYg7g3QhkhehHgvQhrhHhUgGQgzgEgrAQQguARgeAlQgZAhgTAyQgFAPgXBMQgZBSg6BzIgxBgQgbA3gOAtQgTA4gFAzIgEA+IgEA/QgEApgWBMQgKAigBAYQAAAMABATIACAfQAHCMAYBmQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgRgkgGgSg");
	this.shape.setTransform(54.3315,70.2092);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C47B65").ss(0.5,1,1).p("AkrJhQAwADAxgKQAagFAfgMQA4gVAtgkQBEg3BKinQAihPA1irQAmh6AOgxQAUhJANhCQAdiPABhzQAAg4gDgp");
	this.shape_1.setTransform(132.275,202.9846);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCBFB1").s().p("AkrI6QgEAAgCgCQgDgDACgDQABgCAGAAQBdgBBVgkIAUgJQBOgoA6haQAwhJAfhkIAUhHQAMgrAMgcQAshsAeh5QAjiTAIgoQANhFAEgqIAFg6QACgpgBgMQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAWAHArQACAUgCAoQgDA3gLBDQgIAwgQBAIgbBvQgUBNgLAbIgUAxQgMAdgHATQgQAxgaBmQgaBagnAzQgcAmggAeQhLBFhTAUQgtAKgbADIglAEQgSACgOAAIgFAAg");
	this.shape_2.setTransform(132.825,207.7542);

	this.instance = new lib.Path_3();
	this.instance.setTransform(35.3,211.55,1,1,0,0,0,17.1,32.3);
	this.instance.alpha = 0.1289;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E09D94").s().p("AknI5QAAgFAFgBQBEgGA6gWQBCgYAsgoQArgoAgg/QAUgoAehRIAviEQAahPAQg1IAoiKQAYhXAQgzQAUg+AMhMIAIhHIAGgkQADgVgBgPQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAMAEAfQAEAagBAPQgCAmgHArQgHA3gWBqQgGAggLAoIgVBHQgVBOgVBAQgTA6geBTQgKAbgRAnIgdBCQgUAvgIARQgRAjgTAZQgbAmg2AkQhdA+h9AFQgFAAAAgGg");
	this.shape_3.setTransform(132.6111,206.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2A296").s().p("AI4KtQgOgDgOgMQgVgQgQgIQgcgOgfgFQghgDgRgEQgsgIgngmQhChBgigYQgpgdgfgRQg2geg4gOQgjgJhTgGQhAgEg1gYQghgPgNgIQgWgMgOgSQgagegHg0IgSiNQgThigghJQgSgpgYglQgRgbghgtQglgzg2g8Qg+hDgvg9Igrg5QgRgYgKgTQgXgogPg8IADgBQALAAAaArIAgA1QApA3BhBHQBuBQAmAoQBCBIAsCQQA5C5AwBZQAhA9AtAqQAdAcAkAVQAUANAkARQA9AeBFAPQAnAIA1AFQBfAIBfgQIAPBBQAaBCA1AZQAxAYBAgRQA1gOAlghIAwgrQAcgXAZAAQgOA1gUAoQgYA0gmAoQgdAggWAQQgjAYgdAAQgHAAgGgBg");
	this.shape_4.setTransform(86.55,219.3987);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E8AA9A").s().p("AJCWeQgNgCgOgMQgVgQgQgJQgcgOgfgFQgigDgRgDQgrgJgngmQhDhBghgXQgpgegfgRQg2gdg4gOQgkgJhSgGQhBgFg0gXQghgPgOgIQgVgNgPgRQgZgegHg0IgSiNQgThkgghIQgSgpgYgmQgRgaghguQglgyg3g8Qg9hDgvg9Igrg6QgRgXgKgTQgVglgNgtQgPg0gUhsQgdifgGg5QgKhTAKgvIALgvQAIgkAFgmQAFgrABgmQAAgmADgWQAGgoAWgzQAOgjAuhdQASgkAYgsQAQgcANgfQAQgmAph3IAkhoQALgdARgVQAlgsA3gZQA2gXA+ADQAjACAvANQArALApAZQA0AgBPBEQBBA6BEBHICdCnQBMBPArApQAYAXAQATQBaBtBBCEQAoBRAvCCQAeBSAYBaQAOA3AeCDQAkCbATCEQAoEQgHEjQgFCpgkCcQgPBAgSAqQgaA9grAuQgdAggWAPQgjAZgdAAQgHAAgHgCg");
	this.shape_5.setTransform(85.4827,144.0067);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BC8279").s().p("ADFGEQgTgKgOgWQgLgVgHgUQgKgcgJg9Qgdi9hkiRQgkg0hShTQgjglgTgcQgbgmgKgmQAAgBAAAAQAAgBAAgBQABAAAAAAQABgBAAAAQABgBABAAQAAAAABABQAAAAABAAQAAABAAAAQASAoAlApQARAVAzAxQCECDA+CgQAfBQAOBaQAJA5AHAWQAGARALATIAUAiQAEAHgFAFQgEAEgDAAIgFgCg");
	this.shape_6.setTransform(38.63,208.4788);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC8279").s().p("AEsCWQghgWhOgRQhOgQghgVQgZgPglgmQgogogUgOQg0glhOgcIiLgsQgDgBAAgDQAAgEADgBQA5gIBWAhQBjAkBdBNQAIAGAeAdQAXAXARAKQATALAjAJQAvALAJADQAqAPA7AmIADACQADAEgBADQgBADgFAAIgKgEg");
	this.shape_7.setTransform(109.6042,272.196);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C68271").s().p("AHWH+QjKgmh8hqQgagWghgjIg4g9QhJhNhRg/QgagUgSgGQgNgEgSAAIghAAQhEACg3gWQg/gagZgyQgRghgEg8QgCglABg8IAAhiQgBg6gDgXQgFgwgQgeQgJgMgDgHQgGgMAGgHQAJgLAZAGQAIACAbAMQBAAbA/A1QAyApA6BCIBsB9QBABHA2ArQAiAbB+BLQBmA9AyA1QAmAoA0BVQAkA7ARAmQAXA4ACAxQABAbgPAIQgEABgHAAIgMgBg");
	this.shape_8.setTransform(72.3031,222.4485);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC8B75").s().p("AFmJ/QiuhsiThSQhjg3hKgcQhGgbhcgZIhRgWQgXgFgSgIQhhgng4g/QgjgogSg0QgNgkgQhRQgJgsgEg3QgFhVABiXQACiSAHg4QAEgkAKgNQA0hJCQgGQBygEB8AiQDoBAC6DfQBsCBCcEbQBYChA5CUQBpEThMBAQgLAJgQAEQgLACgdACIgUABQhZAAhrg7g");
	this.shape_9.setTransform(83.1667,218.2122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PliceLeva, new cjs.Rectangle(0,0,170.6,288.1), null);


(lib.Plice_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// PliceLeva
	this.instance = new lib.PliceLeva();
	this.instance.setTransform(267.15,192.5,1,1,0,0,0,85.3,144);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:85.4,regY:144.1,scaleX:1.066,scaleY:1.066,x:265.3,y:192.6},14).to({regX:85.3,regY:144,scaleX:1,scaleY:1,x:267.15,y:192.5},15).wait(1));

	// PlicePrava
	this.instance_1 = new lib.PlicePrava();
	this.instance_1.setTransform(76.4,192.1,1,1,0,0,0,78.4,145.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.0619,scaleY:1.0619,x:76.45},14).to({scaleX:1,scaleY:1,x:76.4},15).wait(1));

	// Prudusnice
	this.instance_2 = new lib.Prudusnice();
	this.instance_2.setTransform(173.35,133.7,1,1,0,0,0,99.8,133.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,0,362.90000000000003,346.7);


// stage content:
(lib.Plice = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_1
	this.PliceAnimace_anim = new lib.Plice_1();
	this.PliceAnimace_anim.name = "PliceAnimace_anim";
	this.PliceAnimace_anim.setTransform(199,200,1,1,0,0,0,174.2,168.8);

	this.timeline.addTween(cjs.Tween.get(this.PliceAnimace_anim).wait(30));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(222.8,231.2,154.5,137.7);
// library properties:
lib.properties = {
	id: 'B7551754CC7A23449A0D4B5EF110C005',
	width: 400,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B7551754CC7A23449A0D4B5EF110C005'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;