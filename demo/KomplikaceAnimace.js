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


(lib.Telo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2075C9").s().p("AAFg6IA3AeIh3BXg");
	this.shape.setTransform(47.925,23.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2075C9").s().p("AhQg6IBsgjIA1AVIhqCmg");
	this.shape_1.setTransform(62.75,27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC4B0").s().p("AgCBoQgrgBgogQIAGixICigNIAEDBQgrAOgqAAIgEAAg");
	this.shape_2.setTransform(56.9,10.428);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#409BFF").s().p("AhYLtQjXgRjQhKQgzmkBzmAQBIjxA7hvQBojBCagvQBAgUBJAGQA7AEAyATQDUBRBTGNQBSGEhFItQjeA9jiAAQhDAAhFgGg");
	this.shape_3.setTransform(52.7663,92.9439);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Telo, new cjs.Rectangle(0,0,105.6,168.4), null);


(lib.ruka2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFD3C0").s().p("AADAbQgJgggghHQgIgSgBgKQgBgRALgJQANgJARAIQAKAFAMAQQAeAqADA0IgjCYQAIgxgSg8g");
	this.shape.setTransform(72.4458,34.5618);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD3C0").s().p("AkwKlQgjgEgggMIgKgJQgVgTgHgOQgNgZAEggQADgYANgfQAQgkAPgUIALgKIAPgMQAIgHAEgHIABAAIAEgEIAugiQANgKADgKIABgDQHJlAAvlmQAJhIgFiiQgEhzAUgFQAcgGAyBiQA1BoAUB2QAvEVirEtQhcCjh4B3QhxBzilA9IgEABQgeAGgfAAQgRAAgSgCg");
	this.shape_1.setTransform(49.3608,67.939);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ruka2, new cjs.Rectangle(7.4,0,84,135.9), null);


(lib.Ruka1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFD3C0").s().p("Ag3gaQANgxAlgkQAPgOALgDQASgFALAMQAJALgEARQgDAJgLAQQgsBBgQAdQgdA3gDAxg");
	this.shape.setTransform(22.9723,34.666);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD3C0").s().p("ACkLLIgVgIIgLgEQiZhbhbiKQheiMg8iyQhtlIBjkHQArhvBIhcQBEhXAaALQATAJgaBwQglCegEBJQgZF8GuGpIACAGIADANQACAMANApQAKAgADAVQAFArgPAnQgQAsghAOQgQAHgkABIgQAAIgggBg");
	this.shape_1.setTransform(32.4303,71.617);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ruka1, new cjs.Rectangle(0,0,64.9,143.2), null);


(lib.Rameno2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2075C9").s().p("Ah3DAQjAhMiTiUQg8g+gdg0Qgdg0ANgWQALgSAuAIQARACBnAbQDcA6C6gGQDmgIDjhgIBbHAQiNAviNAJQgkADgjAAQixAAidg+g");
	this.shape.setTransform(56.8106,25.4007);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rameno2, new cjs.Rectangle(0,0,113.6,50.8), null);


(lib.Rameno1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2075C9").s().p("AiiDYQjSg2iziPIEEkOQDDBVCvBIQC/BPC9BIQBeAngCAaQgBAehAAfQhAAfhkATQhpAThmAAQiMAAiJgkg");
	this.shape.setTransform(55.1512,25.2007);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rameno1, new cjs.Rectangle(0,0,110.3,50.4), null);


(lib.pusa = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#050000").s().p("AgvBmQghghgJg2QgJg0AUgqQAUgrAlgGQAkgHAhAiQAhAhAJA1QAJA1gTAqQgUArgmAGIgMABQgdAAgcgcg");
	this.shape.setTransform(9.3275,13.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pusa, new cjs.Rectangle(0,0,18.7,26.1), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#DD7C6F").ss(1.3).p("AgGhIQAEgMANAAQALAAAJAJQAcAcglA6QgXAngmAiQgEABABgCQAAgBACgB");
	this.shape.setTransform(5.0046,9.1063);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(-0.3,-0.3,10.600000000000001,18.900000000000002), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AmTAsQAGgmAdgYQAdgZAmAAIJaAAQAnAAAdAZQAdAYAGAmg");
	this.shape.setTransform(40.375,4.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,80.8,8.9), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7014A0").s().p("AkGAaQgYAAgSgPQgTgNgFgXIKRAAQgGAXgRANQgTAPgYAAg");
	this.shape.setTransform(32.9,2.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,65.8,5.1), null);


(lib.Path_1_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D1D1D1").s().p("AktAsQgmAAgdgZQgdgYgGgmIMnAAQgGAmgdAYQgdAZgnAAg");
	this.shape.setTransform(40.375,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,80.8,8.8), null);


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
	this.shape.graphics.f("#D1D1D1").s().p("AksAsQgnAAgdgaQgdgXgGgmIMnAAQgGAmgdAXQgdAagnAAg");
	this.shape.setTransform(40.375,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,80.8,8.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AmTAsQAGgmAdgYQAdgZAnAAIJZAAQAnAAAdAZQAdAYAGAmg");
	this.shape.setTransform(40.375,4.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,80.8,8.9), null);


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
	this.shape.graphics.f("#A05D11").s().p("AkGAaQgXAAgTgPQgTgOgFgWIKRAAQgGAWgRAOQgTAPgYAAg");
	this.shape.setTransform(32.9,2.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,65.8,5.1), null);


(lib.blesk = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#AD0AEA").s().p("ABaB3IocBuIIJuqIioKhIIkhJIokMyg");
	this.shape.setTransform(45.1,70.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blesk, new cjs.Rectangle(0,0,90.2,141.9), null);


(lib.Sertralin = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgBAkIgJgBIgIgDIACgHIAHADIAIABQAEAAADgBQAEgCACgEQACgEAAgGIAAgGQgCAEgEACQgFACgEABQgHgBgEgDQgFgDgCgFQgEgFAAgHQAAgJAEgGQADgFAFgEQAGgDAFAAQADAAAEACIAEADIAEAEIABgIIAIAAIgBAGIAAAIIAAAcQAAAJgCAGQgCAFgDADQgEAEgFABIgHACIgBgBgAgJgXQgEAFgBAJQAAAEADAFQABADADACQAEADADAAQAFAAAEgDQACgCACgEIABgCIAAgDIAAgJIAAgCIgBgCQgBgEgDgDQgEgCgFgBQgFABgEAFg");
	this.shape.setTransform(62.95,99.3063);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbAaIAAgcQAAgHgCgEQgDgEgGAAQgEAAgCACQgDADgBADIgBACIAAADIAAAeIgIAAIAAgdQAAgHgDgDQgCgEgGAAQgDAAgCABIgEADIgCAFIgBACIAAACIAAAeIgJAAIAAgkIAAgHIAAgHIAIAAIAAAJIABAAIADgFQACgCADgBQADgCAEAAQAGAAADADQADADACAEIADgDIADgDIAEgDIAHgBQADAAAEACQAEACACAFQADAEAAAJIAAAdg");
	this.shape_1.setTransform(55.875,98.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLAfQgFgEgDgIQgDgIAAgLQAAgKADgIQADgIAFgEQAGgEAGAAQAKAAAGAJQAGAJAAAQQAAARgGAJQgGAJgLAAQgGAAgFgEgAgJgUQgEAHAAANQAAAOAEAHQAEAHAFAAQAFAAADgEQADgDABgGQACgHAAgIQAAgIgCgGQgBgGgDgDQgDgEgFAAQgFAAgEAHg");
	this.shape_2.setTransform(46.675,97.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLAfQgFgEgDgIQgDgIAAgLQAAgKADgIQADgIAFgEQAGgEAGAAQAKAAAGAJQAGAJAAAQQAAARgGAJQgGAJgLAAQgGAAgFgEgAgJgUQgEAHAAANQAAAOAEAHQAEAHAFAAQAFAAADgEQADgDABgGQACgHAAgIQAAgIgCgGQgBgGgDgDQgDgEgFAAQgFAAgEAHg");
	this.shape_3.setTransform(41.325,97.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AACAiIAAg6IgLAGIgBgHIANgIIAIAAIAABDg");
	this.shape_4.setTransform(35.525,97.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAEIAAgGIAZAAIAAAGg");
	this.shape_5.setTransform(29.5,98);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLAfQgFgEgDgIQgDgIAAgLQAAgKADgIQADgIAFgEQAGgEAGAAQAKAAAGAJQAGAJAAAQQAAARgGAJQgGAJgLAAQgGAAgFgEgAgJgUQgEAHAAANQAAAOAEAHQAEAHAFAAQAFAAADgEQADgDABgGQACgHAAgIQAAgIgCgGQgBgGgDgDQgDgEgFAAQgFAAgEAHg");
	this.shape_6.setTransform(23.025,97.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNAhIgHgDIACgHIAGADIAJABQADAAAEgCIAGgFQACgDAAgFQgBgGgEgEQgFgEgJAAIgFABIgEAAIAEggIAgAAIAAAHIgZAAIgDASIADgBIACAAIAIABIAGADQAFACACAEQADAEAAAGQAAAHgEAFQgCAFgHADQgFADgGAAIgKgBg");
	this.shape_7.setTransform(17.55,97.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAMAmIAAgoQABgIgDgEQgDgEgGAAQgEAAgDACQgDADgBADIgBADIAAADIAAAqIgXAAIAAgxIAAgOIgBgLIAUAAIACALIAFgFQADgDAEgCQAEgCAGAAQAIAAAGADQAGAEADAHQADAHABALIAAArg");
	this.shape_8.setTransform(65.575,78);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKA1IAAhJIAWAAIAABJgAgIghQgDgDAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_9.setTransform(59.075,76.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLA2IAAhrIAXAAIAABrg");
	this.shape_10.setTransform(54.9,76.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWAkQgFgEgDgFQgDgFAAgGQAAgKAFgGQAGgFAJgDQALgDAMAAIAAgBIgCgFQgBgCgDgBQgCgCgFAAQgGAAgFACQgGABgDADIgFgPIAMgFQAHgCAJAAQAMAAAIAFQAGAEAEAHQADAHAAAJIAAAZIAAAKIABAIIgVAAIgBgHIgBAAQgDAEgGADQgFACgGAAQgIAAgFgDgAAAADQgEABgDADQgEACAAAFQAAAEAEACQACADAEAAQADAAADgDQADgCACgEIAAgCIABgCIAAgIIgEAAIgHABg");
	this.shape_11.setTransform(48.6,78.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVAmIAAgxIgBgOIAAgLIAUAAIABAPIAAAAQABgGAEgDIAHgGIAHgBIADAAIACAAIAAAWIgDgBIgDAAQgHAAgEAEQgEADgBAFIAAADIAAABIAAAmg");
	this.shape_12.setTransform(42.275,78);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAAAuQgEgBgDgDQgDgDgCgFQgBgGgBgIIAAgeIgKAAIAAgRIAKAAIAAgQIAWgEIAAAUIAQAAIAAARIgQAAIAAAbQAAAHACACQACADAFAAIAEAAIADAAIAAARIgGACIgJABQgGgBgDgCg");
	this.shape_13.setTransform(36.2,77.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAmIAAgxIgBgOIAAgLIAUAAIABAPIAAAAQABgGAEgDIAHgGIAHgBIADAAIACAAIAAAWIgDgBIgDAAQgHAAgEAEQgEADgBAFIAAADIAAABIAAAmg");
	this.shape_14.setTransform(30.575,78);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAdQgKgKAAgSQAAgGACgHQACgHAFgGQAEgGAIgDQAHgEAIAAQAMAAAIAGQAHAFADAJQAEAIgBAJIAAAFIAAADIgvAAQAAAFADADQADAEAFABQADACAGAAIALgBIAJgCIADAPIgMAEIgPABQgSAAgKgKgAAOgHIgBgHQgBgDgDgDQgDgCgFAAQgEAAgDACIgFAGQgBADAAAEIAaAAIAAAAg");
	this.shape_15.setTransform(23.3781,78.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWAzIgMgEIAFgUIALAFQAHACAHAAQAHAAAEgDQAFgDAAgFQAAgFgEgDQgEgEgJgDQgNgEgHgHQgIgHAAgLQAAgJAFgHQAFgHAIgEQAJgEALAAQAJAAAGACIALADIgFATIgJgDQgFgCgHAAQgHAAgEADQgDADAAAEQAAAFAEADQAFADAJADQANAFAHAHQAGAHAAALQAAAJgEAHQgFAHgJAEQgJAFgNAAQgJAAgIgCg");
	this.shape_16.setTransform(15.175,76.675);

	this.instance = new lib.Path_0();
	this.instance.setTransform(40.55,34.2,1,1,0,0,0,40.4,4.4);
	this.instance.alpha = 0.3398;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(40.55,141.25,1,1,0,0,0,40.4,4.4);
	this.instance_1.alpha = 0.4414;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AkbFKQgcAAgUgTQgTgUAAgcIAAoNQAAgcATgUQAUgTAcAAII3AAQAcAAAUATQATAUAAAcIAAINQAAAcgTAUQgUATgcAAg");
	this.shape_17.setTransform(40.525,93.175);

	this.instance_2 = new lib.Path();
	this.instance_2.setTransform(40.5,27.2,1,1,0,0,0,32.9,2.6);
	this.instance_2.alpha = 0.5313;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFC676").s().p("AlIAZQAFgWATgNQASgOAYAAIINAAQAYAAATAOQARANAGAWg");
	this.shape_18.setTransform(40.5,2.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#A36E16").ss(1.6,1).p("AAAhPIAACg");
	this.shape_19.setTransform(11.85,15.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#A36E16").ss(1.6,1).p("AAAhPIAACg");
	this.shape_20.setTransform(18.2,15.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#A36E16").ss(1.6,1).p("AAAhPIAACg");
	this.shape_21.setTransform(24.5,15.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#A36E16").ss(1.6,1).p("AAAhPIAACg");
	this.shape_22.setTransform(30.85,15.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#A36E16").ss(1.6,1).p("AAAhPIAACg");
	this.shape_23.setTransform(37.2,15.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#A36E16").ss(1.6,1).p("AAAhPIAACg");
	this.shape_24.setTransform(43.5,15.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#A36E16").ss(1.6,1).p("AAAhPIAACg");
	this.shape_25.setTransform(49.85,15.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#A36E16").ss(1.6,1).p("AAAhPIAACg");
	this.shape_26.setTransform(56.15,15.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#A36E16").ss(1.6,1).p("AAAhPIAACg");
	this.shape_27.setTransform(62.5,15.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#A36E16").ss(1.6,1).p("AAAhPIAACg");
	this.shape_28.setTransform(68.85,15.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FCD9A2").ss(1.6,1).p("AAAhQIAACh");
	this.shape_29.setTransform(12.2,15.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FCD9A2").ss(1.6,1).p("AAAhQIAACh");
	this.shape_30.setTransform(18.5,15.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FCD9A2").ss(1.6,1).p("AAAhQIAACh");
	this.shape_31.setTransform(24.85,15.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FCD9A2").ss(1.6,1).p("AAAhQIAACh");
	this.shape_32.setTransform(31.2,15.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FCD9A2").ss(1.6,1).p("AAAhQIAACh");
	this.shape_33.setTransform(37.5,15.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FCD9A2").ss(1.6,1).p("AAAhQIAACh");
	this.shape_34.setTransform(43.85,15.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FCD9A2").ss(1.6,1).p("AAAhQIAACh");
	this.shape_35.setTransform(50.15,15.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FCD9A2").ss(1.6,1).p("AAAhQIAACh");
	this.shape_36.setTransform(56.5,15.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FCD9A2").ss(1.6,1).p("AAAhQIAACh");
	this.shape_37.setTransform(62.85,15.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FCD9A2").ss(1.6,1).p("AAAhQIAACh");
	this.shape_38.setTransform(69.15,15.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F4AB39").s().p("Aj4CVQgiAAgYgYQgYgZAAgiIAAiEQAAgiAYgYQAYgYAiAAIHxAAQAiAAAYAYQAYAYAAAiIAACEQAAAigYAZQgYAYgiAAg");
	this.shape_39.setTransform(40.525,14.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E8E8E8").s().p("AksJDQgrAAgfgeQgegeAAgsIAAu1QAAgsAegeQAfgeArgBIJZAAQArABAfAeQAeAeAAAsIAAO1QAAAsgeAeQgfAegrAAg");
	this.shape_40.setTransform(40.525,87.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance_2},{t:this.shape_17},{t:this.instance_1},{t:this.instance},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sertralin, new cjs.Rectangle(0,0,81.1,145.7), null);


(lib.Hlava = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#681A0D").ss(1.3,1).p("Ag7AIQAYgNAjgBQAdgCAfAI");
	this.shape.setTransform(54,62.5375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#681A0D").ss(1.3,1).p("Ag8AGQA8gUA9AR");
	this.shape_1.setTransform(22.675,64.0846);

	this.instance = new lib.Path_4();
	this.instance.setTransform(105.7,72.4,1,1,0,0,0,5,9.1);
	this.instance.alpha = 0.3281;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F49C8E").s().p("AApiNQATEAACAJQACAJh+AJg");
	this.shape_2.setTransform(33.6016,84.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#230700").s().p("AgTAVQgJgJAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAJQgIAIgMAAQgLAAgIgIg");
	this.shape_3.setTransform(51.05,72.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#230700").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_4.setTransform(26.05,72.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#230700").s().p("AEOBuQAYhgAIgYQAPgxAWglQgQAIgnALQgqALglARQjXBjh3AqQhPAbg6AJQhuASg4gCQhdgEgxgzQgcgcgNgmQgQgqAIgnQANhABshEQArgcA3gUQBCgYB9geQCSgjCcgZQCGgVBJgEQAsgCAgAGQBNANApARQBFAcAjA1QAvBKgVBqQgMA5gXAqIg2B0QgPgEgPgBQg9gBg0A0QgmAiggAoQgrA4gfBFQgHiKAhiCg");
	this.shape_5.setTransform(62.6238,37.8233);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD3C0").s().p("AgjC3IiEiZQA0iPBxg5QAjgTAagGQAugMAcASQAWAPAHAjQAEAVACA2QABAygKAvQgSBZgyAvQgbAagaAEQgIACgJAAQgbAAgdgSg");
	this.shape_6.setTransform(102.9298,70.3206);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD3C0").s().p("AjxKIQh/gehFhQQgvg4gXhWQgRhAgHhiQgFhTAAhIQABjBAoiFQAahZArg/QBgiQDBhHQC4hECvAgQBLAOA/AlQBDAnApA7QBVB4gUDRQgTDUhsDcQhoDXiMBhQhXA7hqAVQgyAJgwAAQg5AAg3gNg");
	this.shape_7.setTransform(62.3884,73.4619);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hlava, new cjs.Rectangle(0,0,125.3,139.6), null);


(lib.Alpazoram = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgBAkIgJgBIgIgDIACgHIAHADIAIABQAEAAADgBQAEgCACgEQACgEAAgGIAAgGQgCAEgEACQgEACgFABQgHgBgEgDQgFgDgCgFQgDgFgBgHQAAgJAEgGQADgFAFgEQAGgDAFAAQAEAAADACIAEADIAEAEIABgIIAIAAIgBAGIAAAIIAAAcQAAAJgCAGQgBAFgEADQgEAEgFABIgHACIgBgBgAgJgXQgEAFgBAJQABAEACAFQABADADACQADADAEAAQAFAAADgDQADgCADgEIAAgCIAAgDIAAgJIAAgCIAAgCQgCgEgDgDQgEgCgFgBQgFABgEAFg");
	this.shape.setTransform(52.25,94.8063);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbAaIAAgcQAAgHgCgEQgDgEgGAAQgEAAgCACQgDADgBADIgBACIAAADIAAAeIgIAAIAAgdQAAgHgDgDQgCgEgGAAQgDAAgCABIgEADIgCAFIgBACIAAACIAAAeIgJAAIAAgkIAAgHIAAgHIAIAAIAAAJIABAAIADgFQACgCADgBQADgCAEAAQAGAAADADQADADACAEIADgDIADgDIAEgDIAHgBQADAAAEACQAEACACAFQADAEAAAJIAAAdg");
	this.shape_1.setTransform(45.175,93.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOAhIgGgDIACgHIAGADIAIABQAEAAADgCIAHgFQABgDAAgFQAAgGgEgEQgEgEgKAAIgFABIgEAAIAEggIAfAAIAAAHIgZAAIgCASIACgBIADAAIAHABIAHADQAEACADAEQADAEAAAGQAAAHgDAFQgDAFgGADQgGADgHAAIgKgBg");
	this.shape_2.setTransform(35.85,92.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAFIADgIIABgIIAJgBIgDAJIgDAIIgDAHIgGABIACgIg");
	this.shape_3.setTransform(32.125,96.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAfQgFgEgDgIQgDgIAAgLQAAgKADgIQADgIAFgEQAGgEAGAAQAKAAAGAJQAGAJAAAQQAAARgGAJQgGAJgLAAQgGAAgFgEgAgJgUQgEAHAAANQAAAOAEAHQAEAHAFAAQAFAAADgEQADgDABgGQACgHAAgIQAAgIgCgGQgBgGgDgDQgDgEgFAAQgFAAgEAHg");
	this.shape_4.setTransform(28.475,92.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAaAeIAAgfQAAgGgCgEQgCgDgEAAQgDAAgCACIgDAEIgBADIAAACIAAAhIgQAAIAAggQgBgFgCgEQgCgDgDAAQgEAAgDACQgCACAAADIAAACIgBACIAAAhIgRAAIAAgnIAAgKIgBgIIAPAAIABAHIAAAAIAEgDIAFgEQAEgCAFAAQAFAAAEADQAEADACAEIAEgEIADgCIAGgDIAFgBQAGAAAEADQAFADACAGQADAFAAAIIAAAig");
	this.shape_5.setTransform(64.35,77.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAbQgEgCgCgEQgCgEAAgFQAAgHAEgFQAEgEAIgCQAHgDAKAAIAAgBIgBgDIgDgDIgGgBIgJABIgHADIgDgLIAJgEQAFgBAHAAQAKAAAFADQAGAEACAFQADAGAAAHIAAATIAAAIIAAAGIgQAAIgBgGIAAAAQgDADgEACQgEACgFAAQgGAAgEgDgAAAACQgDABgCACQgDACAAAEQAAADACACQACABADAAQADAAACgCQADgBABgDIAAgCIAAgBIAAgHIgIABg");
	this.shape_6.setTransform(56.075,77.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIAqIAAhTIARAAIAABTg");
	this.shape_7.setTransform(51.45,75.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOAaQgHgDgEgHQgEgGAAgKQAAgIAEgHQADgHAIgDQAGgEAJAAQAIAAAHAEQAHADAEAHQADAHAAAIQAAAKgFAHQgDAGgIAEQgGADgIAAQgIAAgGgEgAgFgOQgDADgCAEIgBAHIABAJQACAEADACQADACACAAQAGAAADgFQADgEAAgIIgBgHQgBgEgDgDQgDgCgEAAQgDAAgCACg");
	this.shape_8.setTransform(46.45,77.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAdIAAgLIASgVIAFgGIADgFIgYAAIAAgOIAvAAIAAALIgSAVIgFAFIgDAFIAaAAIAAAPg");
	this.shape_9.setTransform(40.35,77.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRAbQgEgCgCgEQgCgEAAgFQAAgHAEgFQAEgEAIgCQAHgDAKAAIAAgBIgBgDIgDgDIgGgBIgJABIgHADIgDgLIAJgEQAFgBAHAAQAKAAAFADQAGAEACAFQADAGAAAHIAAATIAAAIIAAAGIgQAAIgBgGIAAAAQgDADgEACQgEACgFAAQgGAAgEgDgAAAACQgDABgCACQgDACAAAEQAAADACACQACABADAAQADAAACgCQADgBABgDIAAgCIAAgBIAAgHIgIABg");
	this.shape_10.setTransform(34.375,77.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgRAeIAAgmIAAgLIAAgIIAPAAIABALIAEgHQACgDADgBIAHgCIABAAIACABIAAAQIgCAAIgDAAQgFABgDABQgDADgBAEIgBACIAAABIAAAeg");
	this.shape_11.setTransform(29.5,77.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdApIAAg9IAAgKIAAgJIAQAAIABAIIAAAAQADgEAFgDQAEgCAGAAQAGAAAGADQAFAEADAGQAEAHAAAJQAAALgEAFQgEAHgGAEQgFADgHAAIgIgCQgEgCgCgDIAAAAIAAAdgAgGgYQgDADgBAEIAAABIAAACIAAAIIAAACIAAACQABACACADQAEACADAAQAGAAACgEQAEgEAAgHQAAgFgCgDIgEgGQgCgCgEAAQgDAAgDACg");
	this.shape_12.setTransform(23.65,78.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAqIAAhTIARAAIAABTg");
	this.shape_13.setTransform(18.35,75.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AARAoIgGgVIgWAAIgGAVIgSAAIAYhPIAXAAIAYBPgAAIAGIgFgQIgCgIIgBgHIgCAHIgCAIIgEAQIAQAAg");
	this.shape_14.setTransform(12.875,76.025);

	this.instance = new lib.Path_3();
	this.instance.setTransform(40.55,34.2,1,1,0,0,0,40.4,4.4);
	this.instance.alpha = 0.3398;

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.setTransform(40.55,141.25,1,1,0,0,0,40.4,4.4);
	this.instance_1.alpha = 0.4414;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AkbFLQgcAAgUgVQgTgTAAgcIAAoNQAAgcATgUQAUgUAcAAII3AAQAcAAAUAUQATAUAAAcIAAINQAAAcgTATQgUAVgcAAg");
	this.shape_15.setTransform(40.525,93.2);

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(40.5,27.2,1,1,0,0,0,32.9,2.6);
	this.instance_2.alpha = 0.5313;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E37AFF").s().p("AlIAaQAGgXASgNQASgOAYAAIIOAAQAXAAASAOQATANAFAXg");
	this.shape_16.setTransform(40.5,2.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#9819A3").ss(1.6,1).p("AAAhQIAACg");
	this.shape_17.setTransform(11.85,15.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#9819A3").ss(1.6,1).p("AAAhQIAACg");
	this.shape_18.setTransform(18.2,15.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#9819A3").ss(1.6,1).p("AAAhQIAACg");
	this.shape_19.setTransform(24.5,15.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#9819A3").ss(1.6,1).p("AAAhQIAACg");
	this.shape_20.setTransform(30.85,15.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#9819A3").ss(1.6,1).p("AAAhQIAACg");
	this.shape_21.setTransform(37.2,15.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#9819A3").ss(1.6,1).p("AAAhQIAACg");
	this.shape_22.setTransform(43.5,15.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#9819A3").ss(1.6,1).p("AAAhQIAACg");
	this.shape_23.setTransform(49.85,15.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#9819A3").ss(1.6,1).p("AAAhQIAACg");
	this.shape_24.setTransform(56.15,15.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#9819A3").ss(1.6,1).p("AAAhQIAACg");
	this.shape_25.setTransform(62.5,15.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#9819A3").ss(1.6,1).p("AAAhQIAACg");
	this.shape_26.setTransform(68.8,15.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F2A6FC").ss(1.6,1).p("AAAhQIAACh");
	this.shape_27.setTransform(12.2,15.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F2A6FC").ss(1.6,1).p("AAAhQIAACh");
	this.shape_28.setTransform(18.5,15.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F2A6FC").ss(1.6,1).p("AAAhQIAACh");
	this.shape_29.setTransform(24.85,15.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F2A6FC").ss(1.6,1).p("AAAhQIAACh");
	this.shape_30.setTransform(31.15,15.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F2A6FC").ss(1.6,1).p("AAAhQIAACh");
	this.shape_31.setTransform(37.5,15.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F2A6FC").ss(1.6,1).p("AAAhQIAACh");
	this.shape_32.setTransform(43.85,15.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F2A6FC").ss(1.6,1).p("AAAhQIAACh");
	this.shape_33.setTransform(50.15,15.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F2A6FC").ss(1.6,1).p("AAAhQIAACh");
	this.shape_34.setTransform(56.5,15.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F2A6FC").ss(1.6,1).p("AAAhQIAACh");
	this.shape_35.setTransform(62.8,15.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F2A6FC").ss(1.6,1).p("AAAhQIAACh");
	this.shape_36.setTransform(69.15,15.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DD3DF4").s().p("Aj4CVQgiAAgZgYQgYgZABgiIAAiEQgBgiAYgYQAZgYAiAAIHxAAQAjAAAYAYQAXAYAAAiIAACEQAAAigXAZQgYAYgjAAg");
	this.shape_37.setTransform(40.5,14.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E8E8E8").s().p("AktJDQgqABgfgfQgegeAAgrIAAu3QAAgqAegfQAegfArAAIJaAAQArAAAfAfQAeAfAAAqIAAO3QAAArgeAeQgfAfgrgBg");
	this.shape_38.setTransform(40.525,87.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_2},{t:this.shape_15},{t:this.instance_1},{t:this.instance},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Alpazoram, new cjs.Rectangle(0,0,81.1,145.7), null);


(lib.KomplikaceCelek = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// blesk
	this.instance = new lib.blesk();
	this.instance.setTransform(-36.65,-42.25,0.0689,0.0689,0,0,0,45,71.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({_off:false},0).to({regX:45.2,scaleX:0.5303,scaleY:0.5303,x:-88.4,y:-42.7},5).to({alpha:0},4).to({_off:true},1).wait(19).to({_off:false,regX:45,scaleX:0.0689,scaleY:0.0689,x:-36.65,y:-42.25,alpha:1},0).to({regX:45.2,scaleX:0.5303,scaleY:0.5303,x:-88.4,y:-42.7},5).to({alpha:0},4).to({_off:true},1).wait(19).to({_off:false,regX:45,scaleX:0.0689,scaleY:0.0689,x:-36.65,y:-42.25,alpha:1},0).to({regX:45.2,scaleX:0.5303,scaleY:0.5303,x:-88.4,y:-42.7},5).to({alpha:0},4).to({_off:true},1).wait(19).to({_off:false,regX:45,scaleX:0.0689,scaleY:0.0689,x:-36.65,y:-42.25,alpha:1},0).to({regX:45.3,regY:71,scaleX:0.2528,scaleY:0.2528,x:-88.35,y:-42.7},5).to({regX:45.5,regY:71.2,scaleX:0.1067,scaleY:0.1067,alpha:0},4).to({_off:true},1).wait(19).to({_off:false,regX:45,regY:71.1,scaleX:0.0689,scaleY:0.0689,x:-36.65,y:-42.25,alpha:1},0).to({regX:45.5,regY:71.2,scaleX:0.175,scaleY:0.175,x:-88.35,y:-42.7},5).to({scaleX:0.1067,scaleY:0.1067,alpha:0},4).to({_off:true},1).wait(19).to({_off:false,regX:45,regY:71.1,scaleX:0.0689,scaleY:0.0689,x:-36.65,y:-42.25,alpha:1},0).to({regX:45.2,regY:71.3,scaleX:0.0996,scaleY:0.0996,x:-88.4,y:-42.7},5).to({alpha:0},4).wait(96));

	// blesk
	this.instance_1 = new lib.blesk();
	this.instance_1.setTransform(-25.9,-29.5,0.1352,0.1352,0,0,0,45.1,71);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105).to({_off:false},0).to({regX:45.3,scaleX:0.554,scaleY:0.554,x:-20.3,y:10},4).to({regX:45.2,scaleX:0.4873,scaleY:0.4873,x:-20.35,alpha:0},4).to({_off:true},10).wait(11).to({_off:false,regX:45.1,scaleX:0.1352,scaleY:0.1352,x:-25.9,y:-29.5,alpha:1},0).to({regX:45.3,scaleX:0.554,scaleY:0.554,x:-20.3,y:10},4).to({regX:45.2,scaleX:0.4873,scaleY:0.4873,x:-20.35,alpha:0},4).to({_off:true},10).wait(11).to({_off:false,regX:45.1,scaleX:0.1352,scaleY:0.1352,x:-25.9,y:-29.5,alpha:1},0).to({regX:45.3,scaleX:0.554,scaleY:0.554,x:-20.3,y:10},4).to({regX:45.2,scaleX:0.4873,scaleY:0.4873,x:-20.35,alpha:0},4).to({_off:true},10).wait(11).to({_off:false,regX:45.1,scaleX:0.1352,scaleY:0.1352,x:-25.9,y:-29.5,alpha:1},0).to({regX:45.3,regY:71.1,scaleX:0.3199,scaleY:0.3199,x:-20.3,y:10},4).to({regX:45.5,regY:70.9,scaleX:0.0924,scaleY:0.0924,x:-20.35,y:9.95,alpha:0},4).to({_off:true},10).wait(11).to({_off:false,regX:45.1,regY:71,scaleX:0.1352,scaleY:0.1352,x:-25.9,y:-29.5,alpha:1},0).to({regX:45.4,regY:71.2,scaleX:0.1939,scaleY:0.1939,x:-20.3,y:10},4).to({regY:71,scaleX:0.1134,scaleY:0.1134,x:-20.35,alpha:0},4).to({_off:true},10).wait(11).to({_off:false,regX:45.1,scaleX:0.1352,scaleY:0.1352,x:-25.9,y:-29.5,alpha:1},0).to({regX:45.4,regY:71.4,scaleX:0.0672,scaleY:0.0672,x:-20.3,y:10},4).to({regX:45.6,regY:71,scaleX:0.057,scaleY:0.057,x:-20.35,alpha:0},4).wait(105));

	// blesk
	this.instance_2 = new lib.blesk();
	this.instance_2.setTransform(-35.65,-31.75,0.1243,0.1243,0,0,0,45.1,71.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).to({regX:45.4,regY:71.5,scaleX:0.5556,scaleY:0.5556,x:-64.5,y:0.4},6).to({alpha:0},5).wait(18).to({regX:45.1,regY:71.2,scaleX:0.1243,scaleY:0.1243,x:-35.65,y:-31.75,alpha:1},0).to({regX:45.4,regY:71.5,scaleX:0.5556,scaleY:0.5556,x:-64.5,y:0.4},6).to({alpha:0},5).wait(18).to({regX:45.1,regY:71.2,scaleX:0.1243,scaleY:0.1243,x:-35.65,y:-31.75,alpha:1},0).to({regX:45.4,regY:71.5,scaleX:0.5556,scaleY:0.5556,x:-64.5,y:0.4},6).to({alpha:0},5).wait(18).to({regX:45.1,regY:71.2,scaleX:0.1243,scaleY:0.1243,x:-35.65,y:-31.75,alpha:1},0).to({regX:45.4,regY:71.5,scaleX:0.3076,scaleY:0.3076,x:-64.5,y:0.35},6).to({regX:45.5,regY:71.4,scaleX:0.0946,scaleY:0.0946,alpha:0},5).wait(18).to({regX:45.1,regY:71.2,scaleX:0.1243,scaleY:0.1243,x:-35.65,y:-31.75,alpha:1},0).to({regX:45.5,regY:71.7,scaleX:0.1417,scaleY:0.1417,x:-64.5,y:0.35},6).to({regX:45.6,scaleX:0.1305,scaleY:0.1305,x:-64.45,alpha:0},5).wait(18).to({regX:45.1,regY:71.2,scaleX:0.1243,scaleY:0.1243,x:-35.65,y:-31.75,alpha:1},0).to({regX:45.2,regY:71.8,scaleX:0.1017,scaleY:0.1017,x:-64.5,y:0.35},6).to({regX:45.7,regY:71.6,scaleX:0.0733,scaleY:0.0733,alpha:0},5).wait(113));

	// Vrstva_1
	this.instance_3 = new lib.pusa();
	this.instance_3.setTransform(-30.8,-40.2,1,0.1379,0,0,0,9.3,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({regY:13,scaleY:1,y:-40.25},0).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).wait(3).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).wait(4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).wait(3).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).wait(5).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).wait(3).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).wait(4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).wait(3).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},1).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).wait(3).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).wait(4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).wait(3).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).to({regY:13,scaleY:1,y:-40.25},4).to({regY:13.1,scaleY:0.1379,y:-40.2},4).wait(96));

	// Hlava
	this.instance_4 = new lib.Hlava();
	this.instance_4.setTransform(-7.45,-87.4,1,1,0,0,0,62.6,69.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(363));

	// Vrstva_20
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(173,10,234,0)").s().p("AAUAaIh2AYIByjNIglCUIB4gQIh4Czg");
	this.shape.setTransform(19.425,167.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(173,10,234,0.043)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_1.setTransform(19.425,167.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(173,10,234,0.086)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_2.setTransform(19.425,167.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(173,10,234,0.129)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_3.setTransform(19.425,167.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(173,10,234,0.173)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_4.setTransform(19.425,167.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(173,10,234,0.216)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_5.setTransform(19.425,167.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(173,10,234,0.263)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_6.setTransform(19.425,167.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(173,10,234,0.306)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_7.setTransform(19.425,167.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(173,10,234,0.349)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_8.setTransform(19.425,167.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(173,10,234,0.392)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_9.setTransform(19.425,167.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(173,10,234,0.435)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_10.setTransform(19.425,167.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(173,10,234,0.478)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_11.setTransform(19.425,167.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(173,10,234,0.522)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_12.setTransform(19.425,167.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(173,10,234,0.565)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_13.setTransform(19.425,167.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(173,10,234,0.608)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_14.setTransform(19.425,167.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(173,10,234,0.651)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_15.setTransform(19.425,167.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(173,10,234,0.694)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_16.setTransform(19.425,167.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(173,10,234,0.737)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_17.setTransform(19.425,167.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(173,10,234,0.784)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_18.setTransform(19.425,167.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(173,10,234,0.827)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_19.setTransform(19.425,167.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(173,10,234,0.871)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_20.setTransform(19.425,167.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(173,10,234,0.914)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_21.setTransform(19.425,167.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(173,10,234,0.957)").s().p("AAUAaIh2AZIByjOIglCUIB4gQIh4Czg");
	this.shape_22.setTransform(19.425,167.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AD0AEA").s().p("AAUAaIh2AYIByjNIglCUIB4gQIh4Czg");
	this.shape_23.setTransform(19.425,167.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},172).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(168));

	// Alpazoram
	this.instance_5 = new lib.Alpazoram();
	this.instance_5.setTransform(18.75,116,1,1,0,0,0,40.5,72.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(172).to({_off:false},0).to({alpha:1},23).wait(168));

	// Sertralin
	this.instance_6 = new lib.Sertralin();
	this.instance_6.setTransform(-220.35,68.55,1,1,0,0,0,40.5,72.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).to({alpha:1},41).wait(283));

	// Vrstva_23
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2075C9").s().p("AjQFIQBhidAhirQAaiLgSirQgJhQAAgMQAAgkAOgGQATgHAjAbQAjAcAmA0QBfB/AjCYQAiCUgkCgQgXBogzBkg");
	this.shape_24.setTransform(15.6239,57.6161,1.5491,1.2905);
	this.shape_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(304).to({_off:false},0).wait(59));

	// Telo
	this.instance_7 = new lib.Telo();
	this.instance_7.setTransform(-16.95,60,1,1,0,0,0,52.8,84.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(363));

	// Rameno2
	this.instance_8 = new lib.Rameno2();
	this.instance_8.setTransform(6,27.95,1,1,-34.2313,0,0,22.6,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(23).to({rotation:0,y:28},9).to({rotation:-34.2313,y:27.95},10).to({rotation:0,y:28},10).to({rotation:-34.2313,y:27.95},9).to({rotation:0,y:28},9).to({rotation:-34.2313,y:27.95},10).to({rotation:0,y:28},9).to({rotation:-34.2313,y:27.95},9).to({rotation:0,y:28},9).to({rotation:-34.2313,y:27.95},10).to({rotation:0,y:28},10).to({rotation:-34.2313,y:27.95},9).to({rotation:0,y:28},9).to({rotation:-34.2313,y:27.95},10).to({rotation:0,y:28},9).wait(10).to({rotation:-34.2313,y:27.95},10).to({rotation:0,y:28},9).wait(11).to({rotation:-34.2313,y:27.95},10).to({rotation:0,y:28},10).to({rotation:-34.2313,y:27.95},9).to({rotation:0,y:28},9).to({rotation:-34.2313,y:27.95},10).to({rotation:0,y:28},9).wait(10).to({rotation:-34.2313,y:27.95},10).to({rotation:0,y:28},9).to({_off:true},14).wait(59));

	// Rameno1
	this.instance_9 = new lib.Rameno1();
	this.instance_9.setTransform(-38.5,22.65,1,1,10.944,0,0,79.2,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(23).to({rotation:0},9).to({rotation:10.944},10).to({rotation:0},10).to({rotation:10.944},9).to({rotation:0},9).to({rotation:10.944},10).to({rotation:0},9).to({rotation:10.944},9).to({rotation:0},9).to({rotation:10.944},10).to({rotation:0},10).to({rotation:10.944},9).to({rotation:0},9).to({rotation:10.944},10).to({rotation:0},9).wait(10).to({rotation:10.944},10).to({rotation:0},9).wait(11).to({rotation:10.944},10).to({rotation:0},10).to({rotation:10.944},9).to({rotation:0},9).to({rotation:10.944},10).to({rotation:0},9).wait(10).to({rotation:10.944},10).to({rotation:0},9).to({_off:true},14).wait(59));

	// ruka2
	this.instance_10 = new lib.ruka2();
	this.instance_10.setTransform(55.7,-14.05,1,1,-20.6907,0,0,8.7,120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(23).to({regY:120.4,rotation:0,x:67.65,y:28.85},9).to({regY:120.5,rotation:-20.6907,x:55.7,y:-14.05},10).to({regY:120.4,rotation:0,x:67.65,y:28.85},10).to({regY:120.5,rotation:-20.6907,x:55.7,y:-14.05},9).to({regY:120.4,rotation:0,x:67.65,y:28.85},9).to({regY:120.5,rotation:-20.6907,x:55.7,y:-14.05},10).to({regY:120.4,rotation:0,x:67.65,y:28.85},9).to({regY:120.5,rotation:-20.6907,x:55.7,y:-14.05},9).to({regY:120.4,rotation:0,x:67.65,y:28.85},9).to({regY:120.5,rotation:-20.6907,x:55.7,y:-14.05},10).to({regY:120.4,rotation:0,x:67.65,y:28.85},10).to({regY:120.5,rotation:-20.6907,x:55.7,y:-14.05},9).to({regY:120.4,rotation:0,x:67.65,y:28.85},9).to({regY:120.5,rotation:-20.6907,x:55.7,y:-14.05},10).to({regY:120.4,rotation:0,x:67.65,y:28.85},9).wait(10).to({regY:120.5,rotation:-20.6907,x:55.7,y:-14.05},10).to({regY:120.4,rotation:0,x:67.65,y:28.85},9).wait(11).to({regY:120.5,rotation:-20.6907,x:55.7,y:-14.05},10).to({regY:120.4,rotation:0,x:67.65,y:28.85},10).to({regY:120.5,rotation:-20.6907,x:55.7,y:-14.05},9).to({regY:120.4,rotation:0,x:67.65,y:28.85},9).to({regY:120.5,rotation:-20.6907,x:55.7,y:-14.05},10).to({regY:120.4,rotation:0,x:67.65,y:28.85},9).wait(10).to({regY:120.5,rotation:-20.6907,x:55.7,y:-14.05},10).to({regY:120.4,rotation:0,x:67.65,y:28.85},9).to({_off:true},14).wait(59));

	// Ruka1
	this.instance_11 = new lib.Ruka1();
	this.instance_11.setTransform(-84.3,-0.5,1,1,11.6966,0,0,53.3,129.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({regX:53.2,rotation:0,x:-93.45,y:7},9).to({regX:53.3,rotation:11.6966,x:-84.3,y:-0.5},10).to({regX:53.2,rotation:0,x:-93.45,y:7},10).to({regX:53.3,rotation:11.6966,x:-84.3,y:-0.5},9).to({regX:53.2,rotation:0,x:-93.45,y:7},9).to({regX:53.3,rotation:11.6966,x:-84.3,y:-0.5},10).to({regX:53.2,rotation:0,x:-93.45,y:7},9).to({regX:53.3,rotation:11.6966,x:-84.3,y:-0.5},9).to({regX:53.2,rotation:0,x:-93.45,y:7},9).to({regX:53.3,rotation:11.6966,x:-84.3,y:-0.5},10).to({regX:53.2,rotation:0,x:-93.45,y:7},10).to({regX:53.3,rotation:11.6966,x:-84.3,y:-0.5},9).to({regX:53.2,rotation:0,x:-93.45,y:7},9).to({regX:53.3,rotation:11.6966,x:-84.3,y:-0.5},10).to({regX:53.2,rotation:0,x:-93.45,y:7},9).wait(10).to({regX:53.3,rotation:11.6966,x:-84.3,y:-0.5},10).to({regX:53.2,rotation:0,x:-93.45,y:7},9).wait(11).to({regX:53.3,rotation:11.6966,x:-84.3,y:-0.5},10).to({regX:53.2,rotation:0,x:-93.45,y:7},10).to({regX:53.3,rotation:11.6966,x:-84.3,y:-0.5},9).to({regX:53.2,rotation:0,x:-93.45,y:7},9).to({regX:53.3,rotation:11.6966,x:-84.3,y:-0.5},10).to({regX:53.2,rotation:0,x:-93.45,y:7},9).wait(10).to({regX:53.3,rotation:11.6966,x:-84.3,y:-0.5},10).to({regX:53.2,rotation:0,x:-93.45,y:7},9).to({_off:true},14).wait(59));

	// Izolovaný_režim
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2075C9").s().p("Ai3EeQAOjSBhixQA3hlBEhUQBQhiAhAPQBOAhjULEg");
	this.shape_25.setTransform(-54.1208,45.2433,1.5491,1.2905);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFBFA9").s().p("AAAB7QgFgPgLgnQgdhsAHhwIBPAZQgBETgXACIAAABQgIgBgJgcg");
	this.shape_26.setTransform(-73.42,102.0798,1.5491,1.2905);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25}]},304).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.8,-157.2,411.1,346.1);


// stage content:
(lib.KomplikaceAnimace = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// KomplikaceCelek__TBS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEAEgEQADgDAEgBQAFABAEADQADAEAAAEQAAAFgDAEQgEADgFABQgEgBgEgDg");
	this.shape.setTransform(316.575,576.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_1.setTransform(308.575,570.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXAyIAAhCIAAgQIAAgOIAPAAIABATIAAAAQAEgKAGgGQAHgFAJAAIADAAIACAAIAAARIgDAAIgDgBQgJABgGAFQgGAHgBAKIgBADIAAAFIAAAzg");
	this.shape_2.setTransform(300.725,573);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgEgGAAgHQAAgSAPgIQAPgJAcAAIAAgCQAAgEgBgFQgCgGgFgDQgFgEgIgBQgHAAgGACQgIACgEAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAGADAJQADAKAAAJIAAAjIABAMIAAAMIgPAAIgCgNIAAAAQgEAGgIAEQgHAFgKAAQgJAAgHgFgAABAAQgIACgHAFQgFAEgBAKQABAJAEAEQAFADAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_3.setTransform(291.8,573.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYBHIAAg4QAAgIgDgGQgCgFgFgFQgFgDgIAAQgHAAgHAFQgGAFgCAHIgBADIgBAFIAAA6IgRAAIAAiNIARAAIAAA8IABAAIAFgHIAHgFIAJgEQADgBAFAAQAFAAAGACQAGACAFAEQAFAFAEAIQADAHAAANIAAA5g");
	this.shape_4.setTransform(281.725,570.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAsQgLgGgGgLQgGgLAAgPQAAgOAGgMQAHgLALgHQAMgGAPAAQAIAAAGABIAKAEIgEANIgIgDIgMgCQgLABgHAEQgIAFgDAJQgEAIAAAJQAAALAEAIQAEAIAIAFQAHAEAJAAQAIAAAFgBIAJgEIADAOIgLADQgHACgKAAQgOAAgKgGg");
	this.shape_5.setTransform(271.775,573.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_6.setTransform(264.8286,571.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAaBEIgEgLIgFgVQgDgOgGgGQgGgGgLgBIgRAAIAAA7IgRAAIAAiEIAQgCIASgBQAMAAAKADQAKACAFAGQAGAFACAGQADAHAAAIQAAAJgEAGQgDAHgFAFQgGAEgHACIAAABQAIACAFAHQAEAHADALIAFAXIAFAOgAgTg1IgHABIAAAxIASAAQANAAAJgHQAHgHABgLQAAgNgJgGQgIgHgNAAIgLABg");
	this.shape_7.setTransform(257.45,571.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYBCQgHgEgDgGQgEgGAAgHQAAgSAPgJQAQgJAbAAIAAgCQAAgFgBgEQgCgFgFgEQgEgDgJgBQgHAAgGACQgIACgEADIgFgLQAHgEAIgCQAIgDAJAAQAOABAIAFQAIAGADAJQADAJAAAJIAAAkIABAMIABALIgQAAIgCgMIAAAAQgEAGgIAEQgHAEgKAAQgKAAgGgEgAABAUQgIACgGAFQgGAEgBAKQABAIAEAEQAFAEAGAAQAJAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIARgcIATAAIgZAcg");
	this.shape_8.setTransform(242.2,571.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_9.setTransform(232.975,573.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYBCQgHgEgDgGQgDgGgBgHQABgSAPgJQAPgJAbAAIAAgCQAAgFgBgEQgCgFgFgEQgFgDgIgBQgHAAgGACQgIACgFADIgDgLQAFgEAJgCQAIgDAJAAQAOABAIAFQAIAGADAJQADAJAAAJIAAAkIABAMIABALIgQAAIgBgMIgBAAQgFAGgHAEQgIAEgJAAQgKAAgGgEgAABAUQgJACgFAFQgHAEAAAKQABAIAEAEQAFAEAHAAQAIAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIARgcIATAAIgZAcg");
	this.shape_10.setTransform(223.2,571.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_11.setTransform(212.675,570.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgLAAgPQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAIAHAGQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_12.setTransform(201.825,573.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_13.setTransform(190.375,570.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAJAYIgDgvIASAAIgEAvgAgTAYIgDgvIAQAAIgDAvg");
	this.shape_14.setTransform(177.45,566.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgKALIAEgRIADgQIATgCIgGASIgGARIgGANIgNABIAFgOg");
	this.shape_15.setTransform(173.85,577.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgHAAgGAFQgFAEgDAHIgBAEIAAAFIAAA7IgRAAIAAg6QAAgLgEgIQgGgHgKAAQgFAAgFADQgEACgDAEQgDAEgBAEIgBAFIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAOAAIABAQIABAAIAHgJQAEgEAGgDQAFgCAJAAQAKAAAHAFQAFAFAEAJIABAAIAEgHIAGgGQAFgDAEgBQAFgCAHAAQAHgBAHAEQAIAEAFAIQAFAKABAQIAAA5g");
	this.shape_16.setTransform(163.6,573);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQBFIAAhgIAQAAIAABggAgRgoIARgcIATAAIgYAcg");
	this.shape_17.setTransform(153.75,571.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgOBAQgLgGgGgLQgGgLAAgPQAAgPAGgLQAHgLALgHQAMgGAPAAQAIAAAGABIAKAEIgEANIgIgDIgMgCQgLABgHAEQgIAFgDAIQgEAIAAAKQAAALAEAIQAEAIAIAFQAHAEAJAAQAIAAAFgBIAJgEIADAOIgLADQgHACgKAAQgOAAgKgGgAAAgpIgSgcIAOAAIAKATIABAAIAMgTIANAAIgTAcg");
	this.shape_18.setTransform(146.175,571.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgCgGQgDgHgEgEQgGgDgIgBQgHABgGAFQgHAEgCAIIgBAEIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIAAAAQADgFAEgEQAEgEAHgDQAGgCAIAAQAEAAAGACQAGABAFAFQAGAEADAIQADAJABAMIAAA5g");
	this.shape_19.setTransform(136.05,573);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgLAAgPQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAIAHAGQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_20.setTransform(124.975,573.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AATBHIgggvIgJAKIAAAlIgSAAIAAiNIASAAIAABYIAAAAIAEgFIAFgGIAbggIAVAAIgkAnIAqA5g");
	this.shape_21.setTransform(115.625,570.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSAxQgIgCgFgDIAFgNIAKAEQAGACAHAAQAIAAAFgDQAFgEAAgHQAAgGgFgEQgEgEgIgDQgNgGgHgFQgGgIAAgIQAAgIAEgHQAEgGAHgEQAIgDAJAAQAIAAAGACIAKADIgEAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAEAEQAFADAJADQAMAFAGAGQAHAHgBALQABAMgKAIQgJAJgRAAQgIAAgGgCg");
	this.shape_22.setTransform(106.15,573.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgEgGAAgHQAAgSAPgIQAQgJAbAAIAAgCQAAgEgBgFQgCgGgFgDQgFgEgIgBQgHAAgHACQgHACgEAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAGADAKQADAJAAAJIAAAjIABAMIABAMIgQAAIgCgNIAAAAQgEAGgIAEQgHAFgKAAQgKAAgGgFgAABAAQgIACgHAFQgFAEgBAKQABAJAEADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_23.setTransform(943.4,547.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgnA4IAHgDIAIgGIAIgIQAEgEADgHIABgCIAAgDIAAgCIgBgCIgkhYIATAAIAVA5IAEAKIACAJIADgJIAEgLIATg4IASAAIgaBFIgLAbIgKAUQgFAHgHAFQgGAGgGACQgFADgEABg");
	this.shape_24.setTransform(928.85,550.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgVBEQgJgCgGgEIAFgNQAEADAIACQAHACAJABQAIgBAHgDQAHgDAEgIQAEgHAAgNIAAgKIAAAAQgEAHgIAEQgIAFgKAAQgMAAgJgGQgKgHgFgKQgFgJAAgOQAAgQAGgMQAGgLAKgHQAKgFALAAQAIAAAGACQAGACAEAFQAEADACAFIAAAAIABgPIAPAAIAAALIgBAQIAAA2QAAARgDALQgDAKgHAHQgIAGgJADQgJACgJAAQgIAAgJgCgAgSguQgIAKAAARQAAAJADAIQADAIAGAEQAHAEAIAAQAIAAAHgEQAHgFADgHIABgFIAAgFIAAgRIAAgEIgBgEQgCgIgHgFQgGgFgKgBQgLAAgIAKg");
	this.shape_25.setTransform(918.175,549.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_26.setTransform(907.925,547.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_27.setTransform(900.525,545.65);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAIAHAGQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgIgCgIQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_28.setTransform(892.675,547.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AATBHIgggvIgJAKIAAAlIgSAAIAAiNIASAAIAABYIAAAAIAEgFIAFgGIAbggIAVAAIgkAnIAqA5g");
	this.shape_29.setTransform(883.325,545.65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgTAxQgHgCgFgDIAEgNIALAEQAGACAHAAQAIAAAFgEQAEgDAAgHQABgGgEgEQgFgEgJgDQgNgGgGgFQgGgIAAgIQAAgIAEgHQAEgGAHgEQAIgDAKAAQAHAAAGACIALADIgFAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAFAEQAEADAIADQANAFAGAGQAGAHAAALQAAAMgJAIQgJAJgRAAQgIAAgHgCg");
	this.shape_30.setTransform(868.5,547.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAIAHAGQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgIgCgIQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_31.setTransform(853.675,547.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgPBEQgIgEgFgKIgBAAIgBAQIgPAAIABgLIAAgOIAAh0IARAAIAAA9IABAAQAEgIAIgFQAJgFALAAQALAAAKAHQAJAFAFAMQAFAKAAAPQAAAQgHAMQgGALgJAHQgKAFgLAAQgKAAgIgEgAgQgIQgHAFgDAJIAAAEIgBAEIAAARIAAADIABAEQACAJAHAFQAHAGAKAAQANAAAIgKQAHgKAAgRQAAgKgCgIQgEgHgGgFQgHgFgJAAQgIAAgIAGg");
	this.shape_32.setTransform(842.8,545.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_33.setTransform(831.825,547.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgCgGQgDgHgFgEQgFgDgHgBQgJAAgGAGQgGAEgCAIIgBAEIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIABAAQACgFAEgEQAEgEAHgDQAGgCAHAAQAGAAAGACQAFABAGAFQAEAEAEAJQADAIAAAMIAAA5g");
	this.shape_34.setTransform(821.25,547.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgHAAgGAFQgFAEgCAHIgBAEIgBAFIAAA7IgQAAIAAg6QgBgLgFgIQgEgHgLAAQgFAAgFADQgEACgDAEQgDAEgBAEIgBAFIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIAAAAIAHgJQAEgFAGgCQAGgCAHAAQAKAAAIAFQAFAFAEAJIAAAAIAGgHIAFgGQAEgDAFgBQAFgCAIAAQAGgBAHAEQAIAEAFAIQAFAKAAAQIAAA5g");
	this.shape_35.setTransform(802,547.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_36.setTransform(788.675,547.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgRBIIAAhSIgOAAIAAgOIAOAAIAAgEQAAgLACgIQADgJAGgGQAFgFAFgCQAGgCAHAAIAJAAIAFACIgCAOIgEgBIgHgBQgHAAgEAEQgEAEgCAGQgBAGAAAIIAAAFIAWAAIAAAOIgWAAIAABSg");
	this.shape_37.setTransform(781.5,545.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUBAQgKgGgGgLQgGgLAAgPQAAgOAGgLQAFgMAKgHQALgGANgBQALABAIAEQAIAEAFAHQAEAHACAHQACAIAAAHIAAAFIgBADIhDAAQAAAMAFAHQAFAIAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAEQgIACgLAAQgOAAgLgGgAAaAKQAAgFgCgGQgCgHgFgEQgGgFgKAAQgHAAgGAFQgGAEgDAHQgDAFgBAGIAzAAIAAAAgAgGgpIAQgcIAUAAIgYAcg");
	this.shape_38.setTransform(773.075,545.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgTBEQgHgBgEgDIADgOIALAFQAGACAHAAQAIAAAFgEQAEgEAAgGQABgGgEgEQgFgEgJgEQgNgFgGgHQgGgHAAgHQAAgIAEgHQAEgGAHgEQAIgEAJAAQAIAAAGACIALAEIgFANIgIgEQgFgBgHAAQgHAAgEADQgEAEAAAGQAAAFAFADQAEAEAIADQANAFAGAHQAGAHAAAKQAAANgJAIQgJAIgRAAQgIAAgHgCgAgEgpIgTgcIANAAIALATIABAAIALgTIANAAIgTAcg");
	this.shape_39.setTransform(764.1,545.925);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgTAxQgGgCgFgDIADgNIALAEQAGACAHAAQAJAAAEgEQAEgDABgHQAAgGgFgEQgDgEgJgDQgOgGgFgFQgHgIAAgIQAAgIAEgHQAEgGAIgEQAHgDAKAAQAHAAAGACIAKADIgEAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAEAEQAFADAIADQANAFAGAGQAGAHABALQAAAMgKAIQgJAJgQAAQgIAAgIgCg");
	this.shape_40.setTransform(750.85,547.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgHAAgGAFQgGAEgCAHIgBAEIAAAFIAAA7IgRAAIAAg6QAAgLgEgIQgGgHgKAAQgFAAgEADQgFACgDAEQgDAEgBAEIgCAFIAAAEIAAA6IgRAAIAAhGIAAgOIgBgMIAPAAIABAQIABAAIAHgJQAEgFAGgCQAFgCAJAAQAJAAAIAFQAFAFAEAJIABAAIAEgHIAGgGQAFgDAEgBQAFgCAHAAQAHgBAIAEQAHAEAFAIQAFAKABAQIAAA5g");
	this.shape_41.setTransform(733.2,547.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYBCQgHgEgDgGQgEgGAAgHQAAgSAPgJQAPgJAcAAIAAgCQAAgFgBgEQgCgFgFgEQgFgDgIgBQgHAAgGACQgIACgEADIgFgLQAHgEAIgCQAIgDAJAAQAOABAIAFQAIAGADAJQADAJAAAJIAAAkIABAMIAAALIgPAAIgCgMIgBAAQgDAGgIAEQgHAEgKAAQgJAAgHgEgAABAUQgIACgHAFQgFAEgBAKQABAIAEAEQAFAEAGAAQAJAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIARgcIATAAIgZAcg");
	this.shape_42.setTransform(719.75,545.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_43.setTransform(709.225,545.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgZBCQgGgEgDgGQgEgGABgHQAAgSAOgJQAPgJAbAAIAAgCQABgFgCgEQgBgFgFgEQgFgDgIgBQgHAAgHACQgHACgEADIgFgLQAHgEAIgCQAIgDAIAAQAPABAIAFQAIAGADAJQADAJAAAJIAAAkIAAAMIABALIgPAAIgCgMIgBAAQgDAGgIAEQgHAEgKAAQgJAAgIgEgAABAUQgIACgHAFQgFAEgBAKQAAAIAFAEQAFAEAGAAQAJAAAGgFQAGgEACgHIABgDIAAgCIAAgRQgKAAgJABgAgHgpIARgcIATAAIgZAcg");
	this.shape_44.setTransform(698.8,545.925);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAYBHIAAg3QAAgJgDgGQgCgFgFgFQgFgDgIAAQgHAAgHAFQgGAFgCAHIgBADIgBAFIAAA6IgRAAIAAiNIARAAIAAA8IABAAIAFgHIAHgFIAJgEQADgBAFAAQAFAAAGACQAGACAFAEQAFAFAEAIQADAHAAANIAAA5g");
	this.shape_45.setTransform(688.725,545.65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAIAHAGQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgIgCgIQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_46.setTransform(677.625,547.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgsBFIAAhnIAAgRIgBgPIAPAAIACARIAAAAQAFgJAJgFQAIgFALAAQAMAAAJAGQAKAGAEALQAGALAAAPQAAARgGALQgHALgKAGQgKAGgLAAQgIAAgJgEQgHgEgEgHIgBAAIAAA0gAgQgwQgHAGgDAKIAAADIgBAEIAAAQIAAAEIABAEQADAIAHAFQAGAGAKAAQAIAAAHgFQAGgEAEgJQADgHAAgLQAAgKgCgIQgEgIgGgFQgHgFgJAAQgJAAgHAGg");
	this.shape_47.setTransform(666.75,549.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_48.setTransform(650.425,547.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgSAxQgHgCgGgDIAFgNIAKAEQAGACAHAAQAIAAAFgEQAFgDgBgHQABgGgEgEQgEgEgKgDQgMgGgHgFQgGgIAAgIQAAgIAEgHQAEgGAHgEQAIgDAJAAQAIAAAGACIALADIgFAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAFAEQAEADAIADQANAFAGAGQAGAHAAALQAAAMgJAIQgJAJgRAAQgHAAgHgCg");
	this.shape_49.setTransform(641.45,547.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AATBHIgggvIgJAKIAAAlIgSAAIAAiNIASAAIAABYIAAAAIAEgFIAFgGIAbggIAVAAIgkAnIAqA5g");
	this.shape_50.setTransform(628.275,545.65);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgDgGgBgHQABgSAPgIQAOgJAbAAIAAgCQABgEgCgFQgBgGgFgDQgFgEgIgBQgHAAgGACQgHACgGAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAGADAKQADAJAAAJIAAAjIAAAMIACAMIgQAAIgBgNIgBAAQgFAGgHAEQgHAFgKAAQgJAAgIgFgAABAAQgJACgFAFQgHAEAAAKQABAJAEADQAFAEAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_51.setTransform(617.65,547.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgsBFIAAhnIAAgRIgBgPIAPAAIABARIABAAQAFgJAJgFQAIgFALAAQAMAAAJAGQAKAGAEALQAGALAAAPQAAARgGALQgHALgKAGQgJAGgMAAQgIAAgJgEQgHgEgEgHIgBAAIAAA0gAgPgwQgIAGgDAKIAAADIgBAEIAAAQIAAAEIABAEQACAIAIAFQAGAGAKAAQAIAAAHgFQAGgEAEgJQADgHABgLQAAgKgDgIQgEgIgHgFQgGgFgJAAQgJAAgGAGg");
	this.shape_52.setTransform(607.7,549.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgEgGABgHQAAgSAOgIQAPgJAbAAIAAgCQABgEgCgFQgBgGgFgDQgFgEgIgBQgHAAgHACQgGACgFAEIgFgMQAHgDAIgDQAIgCAIAAQAPAAAIAFQAIAGADAKQADAJAAAJIAAAjIAAAMIABAMIgPAAIgCgNIgBAAQgDAGgIAEQgHAFgKAAQgJAAgIgFgAABAAQgIACgHAFQgFAEgBAKQAAAJAFADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQQgKAAgJAAg");
	this.shape_53.setTransform(591.25,547.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgWBGQgIgEgFgJQgFgJAAgRIAAg4IARAAIAAA1QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgCADgEQAEgDABgEIABgEIABgFIAAg7IARAAIAABGIABAOIAAAMIgPAAIgBgQIgBAAIgGAJQgFAEgGACQgGADgIAAQgIAAgHgDgAgOgoQgFgGAAgHQAAgJAFgFQAGgFAIAAQAJAAAFAFQAGAFAAAIQAAAIgGAGQgFAFgJAAQgIAAgGgFgAgHg9QgCADAAAFQAAAEADADQACADAEAAQAFAAACgDQADgDAAgFQAAgEgDgEQgCgDgFAAQgEAAgDAEg");
	this.shape_54.setTransform(575.875,545.625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgDgGQgCgHgEgEQgGgDgIgBQgHAAgGAGQgHAEgCAIIgBAEIgBAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAQACgFAFgEQAEgEAHgDQAGgCAIAAQAFAAAFACQAGABAFAFQAFAEAEAJQAEAIAAAMIAAA5g");
	this.shape_55.setTransform(564.8,547.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_56.setTransform(553.275,545.75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgnBNIAHgDIAIgGIAIgIQAEgFADgGIABgDIAAgCIAAgCIgBgCIgkhZIATAAIAWA5IADAKIACAKIADgKIADgLIATg4IATAAIgaBFIgMAcIgJATQgGAIgFAFQgHAGgGACQgGADgDAAgAgHg+IAQgcIAUAAIgYAcg");
	this.shape_57.setTransform(543.5,548.025);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_58.setTransform(535.175,546.625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgXAyIAAhCIAAgQIAAgOIAPAAIABATIAAAAQAEgKAGgGQAHgFAJAAIADAAIACAAIAAARIgDAAIgDgBQgJABgGAFQgGAHgBAKIgBADIAAAFIAAAzg");
	this.shape_59.setTransform(523.875,547.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgZBCQgGgEgDgGQgDgGAAgHQgBgSAQgJQAPgJAaAAIAAgCQABgFgCgEQgBgFgFgEQgEgDgJgBQgHAAgHACQgHACgFADIgDgLQAFgEAJgCQAIgDAIAAQAPABAIAFQAIAGADAJQADAJAAAJIAAAkIAAAMIABALIgPAAIgBgMIgCAAQgEAGgHAEQgIAEgJAAQgJAAgIgEgAABAUQgJACgFAFQgHAEAAAKQABAIAEAEQAFAEAHAAQAIAAAGgFQAGgEACgHIABgDIAAgCIAAgRQgKAAgJABgAgHgpIAQgcIAUAAIgYAcg");
	this.shape_60.setTransform(514.95,545.925);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgsBFIAAhnIAAgRIgBgPIAPAAIABARIABAAQAFgJAJgFQAJgFAKAAQAMAAAJAGQAKAGAEALQAGALAAAPQAAARgGALQgHALgKAGQgKAGgLAAQgJAAgHgEQgIgEgEgHIgBAAIAAA0gAgPgwQgIAGgDAKIAAADIgBAEIAAAQIAAAEIABAEQACAIAIAFQAGAGAKAAQAIAAAHgFQAHgEADgJQADgHABgLQAAgKgEgIQgDgIgHgFQgGgFgJAAQgJAAgGAGg");
	this.shape_61.setTransform(505,549.775);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgHAAgGAFQgFAEgCAHIgBAEIgBAFIAAA7IgQAAIAAg6QAAgLgGgIQgFgHgJAAQgGAAgFADQgEACgDAEQgDAEgCAEIgBAFIAAAEIAAA6IgRAAIAAhGIAAgOIAAgMIAPAAIABAQIAAAAIAHgJQAEgFAGgCQAGgCAHAAQALAAAGAFQAGAFAEAJIAAAAIAGgHIAFgGQAEgDAGgBQAEgCAIAAQAGgBAHAEQAIAEAFAIQAFAKAAAQIAAA5g");
	this.shape_62.setTransform(485.3,547.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgRBFIAAhgIARAAIAABggAgSgoIASgcIASAAIgXAcg");
	this.shape_63.setTransform(475.45,545.825);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgmBFIAAgKIArg5IAGgGIAGgIIAAAAIgzAAIAAgPIBJAAIAAALIgrA4IgGAHIgGAIIAAAAIA3AAIAAAOgAgDgoIgTgcIAOAAIAKATIABAAIAMgTIANAAIgTAcg");
	this.shape_64.setTransform(467.975,545.825);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgXAyIAAhCIAAgQIAAgOIAPAAIABATIAAAAQAEgKAGgGQAHgFAJAAIADAAIACAAIAAARIgDAAIgDgBQgJABgGAFQgGAHgBAKIgBADIAAAFIAAAzg");
	this.shape_65.setTransform(460.775,547.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_66.setTransform(450.975,545.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgoA4IAIgDIAIgGIAIgIQAEgEADgHIABgCIABgDIgBgCIgBgCIgjhYIATAAIAUA5IAEAKIACAJIADgJIAEgLIATg4IATAAIgbBFIgLAbIgKAUQgGAHgGAFQgGAGgFACQgHADgDABg");
	this.shape_67.setTransform(441.2,550.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_68.setTransform(431.425,547.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgHAAgGAFQgFAEgDAHIgBAEIAAAFIAAA7IgRAAIAAg6QAAgLgEgIQgGgHgKAAQgFAAgFADQgEACgDAEQgDAEgBAEIgBAFIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAOAAIABAQIABAAIAHgJQAEgFAGgCQAFgCAJAAQAKAAAHAFQAFAFAEAJIABAAIAEgHIAGgGQAFgDAEgBQAFgCAHAAQAHgBAHAEQAIAEAFAIQAFAKABAQIAAA5g");
	this.shape_69.setTransform(412.9,547.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgDgGAAgHQAAgSAOgIQAPgJAbAAIAAgCQABgEgBgFQgCgGgFgDQgFgEgIgBQgHAAgHACQgGACgFAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAGADAKQADAJAAAJIAAAjIAAAMIABAMIgPAAIgCgNIgBAAQgDAGgIAEQgHAFgKAAQgJAAgIgFgAABAAQgIACgHAFQgFAEgBAKQAAAJAFADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_70.setTransform(399.45,547.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_71.setTransform(391.525,546.625);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgoA4IAIgDIAIgGIAIgIQAEgEADgHIABgCIABgDIgBgCIgBgCIgjhYIATAAIAUA5IAEAKIACAJIADgJIAEgLIATg4IATAAIgbBFIgLAbIgKAUQgFAHgHAFQgGAGgFACQgGADgEABg");
	this.shape_72.setTransform(378.3,550.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AATBHIgggvIgJAKIAAAlIgSAAIAAiNIASAAIAABYIAAAAIAEgFIAFgGIAbggIAVAAIgkAnIAqA5g");
	this.shape_73.setTransform(369.425,545.65);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgOAsQgLgGgGgLQgGgLAAgPQAAgOAGgMQAHgLALgHQAMgGAPAAQAIAAAGABIAKAEIgEANIgIgDIgMgCQgLABgHAEQgIAFgDAJQgEAIAAAJQAAALAEAIQAEAIAIAFQAHAEAJAAQAIAAAFgBIAJgEIADAOIgLADQgHACgKAAQgOAAgKgGg");
	this.shape_74.setTransform(359.525,547.925);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgoA4IAIgDIAIgGIAIgIQAEgEADgHIABgCIAAgDIAAgCIgBgCIgjhYIATAAIAUA5IAEAKIACAJIADgJIAEgLIATg4IASAAIgaBFIgLAbIgKAUQgFAHgHAFQgGAGgFACQgGADgEABg");
	this.shape_75.setTransform(350.5,550.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_76.setTransform(339.775,545.75);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgmBFIAAgKIArg5IAGgGIAGgIIAAAAIgzAAIAAgPIBJAAIAAALIgrA4IgGAHIgGAIIAAAAIA3AAIAAAOgAgDgoIgTgcIAOAAIAKATIABAAIAMgTIANAAIgTAcg");
	this.shape_77.setTransform(330.325,545.825);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_78.setTransform(321.275,547.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgKALIAEgRIADgQIATgCIgGASIgGARIgGANIgNABIAFgOg");
	this.shape_79.setTransform(308.85,552.725);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgRBFIAAhgIARAAIAABggAgSgoIASgcIASAAIgXAcg");
	this.shape_80.setTransform(305.45,545.825);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgVBFIAAhCIAAgPIgBgPIAPAAIABAUIABAAQADgKAGgGQAIgGAJAAIACABIADAAIAAARIgDgBIgDAAQgKAAgGAGQgFAGgCAJIgBAEIAAAFIAAAzgAgGgoIgTgcIAOAAIALATIAAAAIAMgTIANAAIgTAcg");
	this.shape_81.setTransform(299.375,545.825);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgDgGgBgHQABgSAPgIQAOgJAcAAIAAgCQAAgEgCgFQgBgGgFgDQgFgEgIgBQgHAAgGACQgHACgGAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAGADAKQADAJAAAJIAAAjIABAMIABAMIgQAAIgBgNIgBAAQgFAGgHAEQgIAFgJAAQgKAAgGgFgAABAAQgJACgFAFQgHAEAAAKQABAJAEADQAFAEAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_82.setTransform(290.6,547.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_83.setTransform(280.075,545.75);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_84.setTransform(269.775,547.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgCgGQgDgHgFgEQgFgDgHgBQgJAAgFAGQgHAEgCAIIgBAEIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIABAAQACgFAEgEQAEgEAHgDQAGgCAHAAQAGAAAGACQAFABAGAFQAEAEAEAJQADAIAAAMIAAA5g");
	this.shape_85.setTransform(259.2,547.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgOAsQgLgGgGgLQgGgLAAgPQAAgOAGgMQAHgLALgHQAMgGAPAAQAIAAAGABIAKAEIgEANIgIgDIgMgCQgLABgHAEQgIAFgDAJQgEAIAAAJQAAALAEAIQAEAIAIAFQAHAEAJAAQAIAAAFgBIAJgEIADAOIgLADQgHACgKAAQgOAAgKgGg");
	this.shape_86.setTransform(243.925,547.925);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAIAHAGQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgIgCgIQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_87.setTransform(233.825,547.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgIAAgFAFQgGAEgCAHIgBAEIAAAFIAAA7IgRAAIAAg6QABgLgGgIQgEgHgKAAQgGAAgEADQgFACgDAEQgDAEgCAEIgBAFIAAAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIAAAQIABAAIAHgJQAEgFAGgCQAGgCAHAAQALAAAGAFQAHAFADAJIABAAIAEgHIAGgGQAFgDAFgBQAFgCAGAAQAHgBAIAEQAHAEAFAIQAFAKABAQIAAA5g");
	this.shape_88.setTransform(220,547.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_89.setTransform(203.9286,546);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgHAAgGAFQgFAEgCAHIgBAEIgBAFIAAA7IgQAAIAAg6QAAgLgGgIQgFgHgJAAQgGAAgFADQgEACgDAEQgDAEgCAEIgBAFIAAAEIAAA6IgRAAIAAhGIAAgOIAAgMIAPAAIABAQIAAAAIAHgJQAEgFAGgCQAGgCAHAAQALAAAGAFQAHAFADAJIAAAAIAGgHIAFgGQAEgDAGgBQAEgCAIAAQAGgBAHAEQAIAEAFAIQAFAKAAAQIAAA5g");
	this.shape_90.setTransform(193.25,547.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_91.setTransform(174.575,547.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgTAxQgHgCgFgDIAEgNIALAEQAGACAHAAQAIAAAFgEQAEgDAAgHQABgGgEgEQgFgEgJgDQgNgGgGgFQgGgIAAgIQAAgIAEgHQAEgGAIgEQAHgDAKAAQAHAAAGACIALADIgFAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAFAEQAEADAIADQANAFAGAGQAGAHABALQAAAMgKAIQgJAJgRAAQgIAAgHgCg");
	this.shape_92.setTransform(165.6,547.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_93.setTransform(151.325,547.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgmBFIAAgKIArg5IAGgGIAGgIIAAAAIgzAAIAAgPIBJAAIAAALIgrA4IgGAHIgGAIIAAAAIA3AAIAAAOgAgDgoIgTgcIAOAAIAKATIABAAIAMgTIANAAIgTAcg");
	this.shape_94.setTransform(142.175,545.825);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgDgGQgCgHgEgEQgGgDgIgBQgHAAgGAGQgHAEgCAIIgBAEIgBAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAQACgFAFgEQAEgEAHgDQAGgCAIAAQAFAAAFACQAGABAFAFQAGAEADAJQAEAIAAAMIAAA5g");
	this.shape_95.setTransform(132.35,547.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_96.setTransform(121.825,547.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgUBEQgFgBgDgBIACgPIAHACIAIABQAHAAAFgDQAGgDADgHQACgIAAgMIAAhYIARAAIAABZQABASgGAKQgFAKgJAEQgKAFgKAAIgKgBg");
	this.shape_97.setTransform(112.45,546.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAEAKIAFgQIADgPIASgCIgGARIgHAQIgGANIgLABIAEgOgAgYAKIAEgQIADgPIARgCIgFARIgGAQIgHANIgLABIAFgOg");
	this.shape_98.setTransform(105.575,552.675);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEAEgEQADgDAEgBQAFABAEADQADAEAAAEQAAAFgDAEQgEADgFABQgEgBgEgDg");
	this.shape_99.setTransform(200.375,501.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgQBFIAAhgIAQAAIAABggAgSgoIASgcIATAAIgYAcg");
	this.shape_100.setTransform(196.65,495.425);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgCgGQgCgHgFgEQgFgDgJgBQgHABgGAFQgHAEgCAIIgBAEIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIABAAQABgFAFgEQAFgEAGgCQAGgDAHAAQAFAAAGACQAGABAGAFQAFAEADAIQADAJABAMIAAA5g");
	this.shape_101.setTransform(187.9,497.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgZBCQgGgEgDgGQgEgGABgHQAAgSAOgJQAPgJAbAAIAAgCQABgFgCgEQgBgFgFgEQgFgDgIgBQgHAAgHACQgGACgFADIgFgLQAHgEAIgCQAIgDAJAAQAOABAIAFQAIAGADAJQADAJAAAJIAAAkIAAAMIABALIgPAAIgCgMIgBAAQgDAGgIAEQgHAEgKAAQgJAAgIgEgAABAUQgIACgHAFQgFAEgBAKQAAAIAFAEQAFAEAGAAQAJAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIAQgcIAUAAIgZAcg");
	this.shape_102.setTransform(177.25,495.525);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgDgGQgBgHgGgEQgFgDgHgBQgIABgHAFQgGAEgCAIIgBAEIgBAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAQADgFAEgEQAFgEAGgCQAGgDAIAAQAEAAAHACQAFABAFAFQAFAEAEAIQAEAJgBAMIAAA5g");
	this.shape_103.setTransform(167.15,497.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_104.setTransform(158.225,496.225);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgSAxQgHgCgGgDIAFgNIAKAEQAGACAHAAQAJAAAEgDQAFgEgBgHQABgGgFgEQgDgEgKgDQgNgFgGgGQgGgIAAgIQAAgIAEgHQAEgGAHgEQAIgDAJAAQAIAAAGACIAKADIgEAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAFAEQAEADAJADQAMAFAGAGQAHAHgBALQAAAMgJAJQgJAIgRAAQgHAAgHgCg");
	this.shape_105.setTransform(151.05,497.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgUBAQgKgGgGgLQgGgLAAgPQAAgOAGgLQAFgMAKgHQALgGANgBQALABAIAEQAIAEAFAHQAEAHACAHQACAIAAAHIAAAFIgBADIhDAAQAAAMAFAHQAFAIAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAEQgIACgLAAQgOAAgLgGgAAaAKQAAgFgCgGQgCgHgFgEQgGgFgKAAQgHAAgGAFQgGAEgDAHQgDAFgBAGIAzAAIAAAAgAgFgpIgTgcIANAAIALATIABAAIAMgTIANAAIgTAcg");
	this.shape_106.setTransform(142.125,495.525);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgIAAgFAFQgGAEgCAHIgBAEIAAAFIAAA7IgRAAIAAg6QAAgLgEgIQgGgHgJAAQgGAAgEADQgFACgDAEQgDAEgCAEIgBAFIAAAEIAAA6IgRAAIAAhGIAAgOIgBgMIAPAAIABAQIABAAIAHgJQAEgEAGgDQAFgCAJAAQAJAAAHAFQAHAFADAJIABAAIAEgHIAGgGQAFgDAFgBQAFgCAGAAQAHgBAIAEQAHAEAFAIQAFAKABAQIAAA5g");
	this.shape_107.setTransform(128.75,497.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgEgGAAgHQAAgSAPgIQAQgJAbAAIAAgCQAAgEgBgFQgCgGgFgDQgEgEgJgBQgHAAgGACQgIACgEAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAHADAIQADAKAAAJIAAAjIABAMIABAMIgQAAIgCgNIAAAAQgEAGgIAEQgHAFgKAAQgKAAgGgFgAABAAQgIACgHAFQgFAEgBAKQABAJAEAEQAFADAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_108.setTransform(115.3,497.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgmAxIAAgKIArg5IAGgHIAGgHIAAgBIgzAAIAAgOIBJAAIAAAKIgrA4IgGAHIgGAIIAAAAIA3AAIAAAPg");
	this.shape_109.setTransform(106.475,497.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_110.setTransform(946.0286,470.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgTAxQgHgCgEgDIADgNIALAEQAGACAHAAQAIAAAFgEQAEgDABgHQAAgGgFgEQgEgEgIgDQgOgFgFgGQgHgIAAgIQAAgIAEgHQAEgGAIgEQAHgDAKAAQAHAAAGACIAKADIgEAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAEAEQAFADAJADQAMAFAGAGQAHAHAAALQAAAMgKAIQgJAJgQAAQgJAAgHgCg");
	this.shape_111.setTransform(939.75,472.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_112.setTransform(924.875,471.025);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgRBFIAAhgIARAAIAABggAgSgoIASgcIASAAIgXAcg");
	this.shape_113.setTransform(920.15,470.225);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgWBLIALgCQAFgDADgDQADgDAAgEQACgDAAgIIABgSIAAhQIASAAIAABXQAAAOgDAJQgDAKgGAGQgEAEgFADQgEACgGABIgKABgAAEhFQgDgDAAgEQAAgFADgDQADgEAFABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgFAAgDgDg");
	this.shape_114.setTransform(913.475,472.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgDgGgBgHQABgSAPgIQAOgJAbAAIAAgCQABgEgCgFQgBgGgFgDQgFgEgIgBQgHAAgGACQgHACgGAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAGADAKQADAJAAAJIAAAjIAAAMIACAMIgQAAIgBgNIgBAAQgFAGgHAEQgHAFgKAAQgJAAgIgFgAABAAQgJACgFAFQgHAEAAAKQAAAJAFADQAFAEAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_115.setTransform(907,472.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgDgGQgCgHgEgEQgGgDgIgBQgHAAgGAGQgHAEgCAIIgBAEIgBAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAQACgFAFgEQAEgEAHgDQAGgCAIAAQAFAAAFACQAGABAFAFQAGAEADAJQAEAIAAAMIAAA5g");
	this.shape_116.setTransform(896.9,472.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_117.setTransform(878.825,472.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgTAxQgHgCgEgDIADgNIALAEQAGACAHAAQAIAAAFgEQAEgDAAgHQABgGgEgEQgFgEgJgDQgNgFgGgGQgGgIAAgIQAAgIAEgHQAEgGAHgEQAIgDAJAAQAIAAAGACIALADIgFAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAFAEQAEADAIADQANAFAGAGQAGAHAAALQAAAMgJAIQgJAJgRAAQgIAAgHgCg");
	this.shape_118.setTransform(869.85,472.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgRBFIAAhgIARAAIAABggAgSgoIASgcIASAAIgXAcg");
	this.shape_119.setTransform(856.85,470.225);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgTBEQgHgBgFgDIAFgOIAKAFQAGACAHAAQAIAAAFgEQAFgEgBgGQABgGgEgEQgFgEgJgEQgMgFgHgHQgGgHAAgHQAAgIAEgHQAEgGAHgEQAIgEAJAAQAIAAAGACIALAEIgFANIgIgEQgFgBgHAAQgHAAgEADQgEAEAAAGQAAAFAFADQAEAEAIADQANAFAGAHQAGAHAAAKQAAANgJAIQgJAIgRAAQgHAAgIgCgAgFgpIgSgcIANAAIALATIABAAIALgTIAOAAIgUAcg");
	this.shape_120.setTransform(849.7,470.325);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_121.setTransform(840.275,472.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgIgCgIQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_122.setTransform(829.225,472.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AATBHIggguIgJAJIAAAlIgSAAIAAiNIASAAIAABYIAAAAIAEgFIAFgGIAbggIAVAAIgkAnIAqA5g");
	this.shape_123.setTransform(819.875,470.05);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgIgCgIQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_124.setTransform(808.825,472.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgsBFIAAhnIAAgRIgBgPIAPAAIABARIABAAQAFgJAJgFQAJgFAKAAQAMAAAJAGQAKAGAEALQAGALAAAPQAAARgGALQgHALgKAGQgKAGgLAAQgJAAgHgEQgIgEgEgHIgBAAIAAA0gAgPgwQgIAGgDAKIAAADIgBAEIAAAQIAAAEIABAEQACAIAIAFQAGAGAKAAQAIAAAHgFQAHgEADgJQADgHABgLQAAgKgEgIQgDgIgHgFQgGgFgJAAQgJAAgGAGg");
	this.shape_125.setTransform(797.95,474.175);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgDgGgBgHQABgSAPgIQAOgJAcAAIAAgCQAAgEgCgFQgBgGgFgDQgFgEgIgBQgHAAgGACQgHACgGAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAGADAKQADAJAAAJIAAAjIABAMIABAMIgQAAIgBgNIgBAAQgFAGgHAEQgIAFgJAAQgKAAgGgFgAABAAQgJACgFAFQgHAEAAAKQABAJAEADQAFAEAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_126.setTransform(779.3,472.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgWBGQgIgEgFgJQgFgJAAgRIAAg4IARAAIAAA1QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgCADgEQAEgDABgEIABgEIABgFIAAg7IARAAIAABGIABAOIAAAMIgPAAIgBgQIgBAAIgGAJQgFAEgGACQgGADgIAAQgIAAgHgDgAgOgoQgFgGAAgHQAAgJAFgFQAGgFAIAAQAJAAAFAFQAGAFAAAIQAAAIgGAGQgFAFgJAAQgIAAgGgFgAgHg9QgCADAAAFQAAAEADADQACADAEAAQAFAAACgDQADgDAAgFQAAgEgDgEQgCgDgFAAQgEAAgDAEg");
	this.shape_127.setTransform(761.725,470.025);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_128.setTransform(750.225,470.15);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgYBCQgHgEgDgGQgEgGAAgHQABgSAPgJQAPgJAbAAIAAgCQAAgFgBgEQgCgFgFgEQgFgDgIgBQgHAAgGACQgIACgFADIgEgLQAGgEAJgCQAIgDAJAAQAOABAIAFQAIAGADAJQADAJAAAJIAAAkIABAMIABALIgQAAIgBgMIgBAAQgFAGgHAEQgIAEgJAAQgKAAgGgEgAABAUQgJACgFAFQgHAEAAAKQABAIAEAEQAFAEAGAAQAJAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIARgcIATAAIgYAcg");
	this.shape_129.setTransform(739.8,470.325);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgXAyIAAhCIAAgQIAAgOIAPAAIABATIAAAAQAEgKAGgGQAHgFAJAAIADAAIACAAIAAARIgDAAIgDgBQgJABgGAFQgGAHgBAJIgBAEIAAAFIAAAzg");
	this.shape_130.setTransform(732.625,472.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgEgGAAgHQAAgSAPgIQAQgJAbAAIAAgCQAAgEgBgFQgCgGgFgDQgEgEgJgBQgHAAgGACQgIACgEAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAGADAKQADAJAAAJIAAAjIABAMIABAMIgQAAIgCgNIAAAAQgEAGgIAEQgHAFgKAAQgKAAgGgFgAABAAQgIACgHAFQgFAEgBAKQABAJAEADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_131.setTransform(723.7,472.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgHAAgGAFQgFAEgDAHIgBAEIAAAEIAAA8IgRAAIAAg6QAAgLgEgIQgGgHgKAAQgFAAgEADQgFACgDAEQgDAEgBAEIgBAFIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAOAAIABAQIABAAIAHgJQAEgEAGgDQAFgCAJAAQAKAAAHAFQAFAFAEAJIABAAIAEgHIAGgGQAFgDAEgBQAFgCAHAAQAHgBAIAEQAHAEAFAIQAFAKABAQIAAA5g");
	this.shape_132.setTransform(710.8,472.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgDgGAAgHQAAgSAOgIQAPgJAbAAIAAgCQABgEgBgFQgCgGgFgDQgFgEgIgBQgHAAgHACQgGACgFAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAGADAKQADAJAAAJIAAAjIAAAMIABAMIgPAAIgCgNIgBAAQgDAGgIAEQgHAFgKAAQgKAAgHgFgAABAAQgIACgHAFQgFAEgBAKQAAAJAFADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_133.setTransform(697.35,472.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AATBHIggguIgJAJIAAAlIgSAAIAAiNIASAAIAABYIAAAAIAEgFIAFgGIAbggIAVAAIgkAnIAqA5g");
	this.shape_134.setTransform(688.575,470.05);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_135.setTransform(670.025,472.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgRBFIAAhgIARAAIAABggAgSgoIASgcIASAAIgXAcg");
	this.shape_136.setTransform(655.45,470.225);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_137.setTransform(649.875,470.05);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_138.setTransform(641.575,470.15);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgnA4IAHgDIAIgFIAIgJQAEgEADgHIABgCIABgDIgBgCIgBgCIgkhYIAUAAIAVA5IADAKIACAJIADgJIADgLIATg4IAUAAIgbBFIgMAbIgJAUQgGAHgFAFQgHAGgFACQgHADgDABg");
	this.shape_139.setTransform(631.8,474.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgPBEQgIgEgGgKIAAAAIgBAQIgPAAIAAgLIAAgOIAAh0IASAAIAAA9IAAAAQAFgIAJgFQAHgFALAAQANAAAIAHQAKAFAFAMQAFAKAAAPQAAAQgGAMQgHALgKAHQgJAFgLAAQgKAAgIgEgAgPgIQgIAFgDAJIgBAEIAAAEIAAARIAAADIABAEQADAJAGAFQAIAGAJAAQANAAAIgKQAIgKAAgRQgBgKgDgIQgDgHgHgFQgGgFgJAAQgJAAgGAGg");
	this.shape_140.setTransform(621.8,470.15);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_141.setTransform(603.275,472.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgmBFIAAgKIArg5IAGgGIAGgIIAAAAIgzAAIAAgPIBJAAIAAALIgrA4IgGAHIgGAIIAAAAIA3AAIAAAOgAgDgoIgTgcIAOAAIAKATIABAAIAMgTIANAAIgTAcg");
	this.shape_142.setTransform(594.125,470.225);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgKALIAEgRIADgQIATgCIgGASIgGARIgGANIgNABIAFgOg");
	this.shape_143.setTransform(580.05,477.125);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgYBCQgHgEgDgGQgEgGAAgHQAAgSAPgJQAPgJAcAAIAAgCQAAgFgBgEQgCgFgFgEQgFgDgIgBQgHAAgGACQgIACgEADIgFgLQAHgEAIgCQAIgDAJAAQAOABAIAFQAIAGADAJQADAJAAAJIAAAkIABAMIAAALIgPAAIgCgMIgBAAQgDAGgIAEQgHAEgKAAQgKAAgGgEgAABAUQgIACgHAFQgFAEgBAKQABAIAEAEQAFAEAGAAQAJAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIARgcIATAAIgZAcg");
	this.shape_144.setTransform(573.05,470.325);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AATBHIggguIgJAJIAAAlIgSAAIAAiNIASAAIAABYIAAAAIAEgFIAFgGIAbggIAVAAIgkAnIAqA5g");
	this.shape_145.setTransform(564.275,470.05);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgRBFIAAhgIARAAIAABggAgSgoIASgcIASAAIgXAcg");
	this.shape_146.setTransform(557.25,470.225);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAaBTIgEgLIgFgVQgDgOgGgGQgGgGgLgBIgQAAIAAA7IgSAAIAAiEIAQgCIASgBQANAAAJADQAJACAHAGQAEAFAEAGQACAHAAAIQAAAJgDAGQgEAGgFAFQgGAFgHACIAAABQAHACAGAHQAEAHACALIAGAXIAFAOgAgTgmIgGABIAAAwIASAAQANAAAHgHQAJgGAAgLQgBgNgIgGQgIgHgNAAIgLABgAgMg7IgUgXIAPAAIAMAOIAAAAIAMgOIAOAAIgUAXg");
	this.shape_147.setTransform(549.2,468.875);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEAEgEQADgDAEgBQAFABAEADQADAEAAAEQAAAFgDAEQgEADgFABQgEgBgEgDg");
	this.shape_148.setTransform(533.825,476.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_149.setTransform(525.825,470.15);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgXAyIAAhCIAAgQIAAgOIAPAAIABATIAAAAQAEgKAGgGQAHgFAJAAIADAAIACAAIAAARIgDAAIgDgBQgJABgGAFQgGAHgBAJIgBAEIAAAFIAAAzg");
	this.shape_150.setTransform(517.975,472.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgEgGAAgHQAAgSAQgIQAPgJAbAAIAAgCQAAgEgBgFQgCgGgFgDQgEgEgJgBQgHAAgGACQgIACgEAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAGADAKQADAJAAAJIAAAjIABAMIABAMIgQAAIgBgNIgBAAQgEAGgIAEQgHAFgKAAQgKAAgGgFgAABAAQgIACgGAFQgGAEgBAKQABAJAEADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_151.setTransform(509.05,472.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAYBHIAAg3QAAgJgDgGQgCgFgFgFQgFgDgIAAQgHAAgHAFQgGAFgCAHIgBADIgBAFIAAA6IgRAAIAAiNIARAAIAAA8IABAAIAFgHIAHgFIAJgEQADgBAFAAQAFAAAGACQAGACAFAEQAFAFAEAIQADAHAAANIAAA5g");
	this.shape_152.setTransform(498.975,470.05);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgOAsQgLgGgGgLQgGgLAAgPQAAgOAGgMQAHgLALgHQAMgGAPAAQAIAAAGABIAKAEIgEANIgIgDIgMgCQgLABgHAEQgIAFgDAJQgEAIAAAJQAAALAEAIQAEAIAIAFQAHAEAJAAQAIAAAFgBIAJgEIADAOIgLADQgHACgKAAQgOAAgKgGg");
	this.shape_153.setTransform(489.025,472.325);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_154.setTransform(482.0786,470.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAaBEIgEgLIgFgVQgDgOgGgGQgGgGgLgBIgRAAIAAA7IgRAAIAAiEIAQgCIASgBQAMAAAKADQAKACAFAGQAFAFAEAGQACAHAAAIQAAAJgDAGQgEAHgFAFQgGAEgHACIAAABQAIACAFAHQAEAHADALIAFAXIAFAOgAgTg1IgHABIAAAxIATAAQANAAAHgHQAJgHAAgLQAAgNgJgGQgIgHgNAAIgLABg");
	this.shape_155.setTransform(474.7,470.375);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgHAAgGAFQgFAEgCAHIgBAEIgBAEIAAA8IgQAAIAAg6QAAgLgGgIQgFgHgJAAQgGAAgFADQgEACgDAEQgDAEgCAEIAAAFIAAAEIAAA6IgSAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAIAHgJQAEgEAGgDQAGgCAHAAQALAAAGAFQAGAFAEAJIAAAAIAGgHIAFgGQAEgDAGgBQAEgCAIAAQAGgBAHAEQAIAEAFAIQAFAKAAAQIAAA5g");
	this.shape_156.setTransform(452.9,472.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgZBCQgGgEgDgGQgDgGAAgHQAAgSAPgJQAOgJAbAAIAAgCQABgFgCgEQgBgFgFgEQgFgDgIgBQgHAAgGACQgHACgGADIgDgLQAFgEAJgCQAIgDAIAAQAPABAIAFQAIAGADAJQADAJAAAJIAAAkIAAAMIACALIgQAAIgBgMIgBAAQgFAGgHAEQgHAEgKAAQgJAAgIgEgAABAUQgJACgFAFQgHAEAAAKQAAAIAFAEQAFAEAHAAQAIAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIAQgcIAUAAIgYAcg");
	this.shape_157.setTransform(439.45,470.325);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_158.setTransform(430.225,472.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_159.setTransform(412.875,472.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgTAxQgGgCgFgDIADgNIALAEQAGACAHAAQAJAAAEgEQAEgDABgHQAAgGgFgEQgDgEgJgDQgOgFgFgGQgHgIAAgIQAAgIAEgHQAEgGAIgEQAHgDAKAAQAHAAAGACIAKADIgEAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAEAEQAFADAIADQANAFAGAGQAGAHABALQAAAMgKAIQgJAJgQAAQgIAAgIgCg");
	this.shape_160.setTransform(403.9,472.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_161.setTransform(387.425,472.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgWBLIALgCQAFgDADgDQADgDAAgEQACgDAAgIIABgSIAAhQIASAAIAABXQAAAOgDAJQgDAKgGAGQgEAEgFADQgEACgGABIgKABgAAEhFQgDgDAAgEQAAgFADgDQADgEAFABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgFAAgDgDg");
	this.shape_162.setTransform(378.925,472.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_163.setTransform(372.075,472.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgVBFIAAhCIAAgPIgBgPIAPAAIABAUIABAAQADgKAGgGQAIgGAJAAIACABIADAAIAAARIgDgBIgDAAQgKAAgGAGQgFAGgCAJIgBAEIAAAFIAAAzgAgGgoIgTgcIAOAAIALATIAAAAIAMgTIANAAIgTAcg");
	this.shape_164.setTransform(363.675,470.225);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgUBAQgKgGgGgLQgGgLAAgPQAAgOAGgLQAFgMAKgHQALgGANgBQALABAIAEQAIAEAFAHQAEAHACAHQACAIAAAHIAAAFIgBADIhDAAQAAAMAFAHQAFAIAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAEQgIACgLAAQgOAAgLgGgAAaAKQAAgFgCgGQgCgHgFgEQgGgFgKAAQgHAAgGAFQgGAEgDAHQgDAFgBAGIAzAAIAAAAgAgFgpIgTgcIANAAIALATIABAAIAMgTIANAAIgTAcg");
	this.shape_165.setTransform(355.025,470.325);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_166.setTransform(345.225,472.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgSAxQgHgCgGgDIAFgNIAKAEQAGACAHAAQAJAAAEgEQAFgDgBgHQABgGgFgEQgDgEgKgDQgNgFgGgGQgGgIAAgIQAAgIAEgHQAEgGAHgEQAIgDAJAAQAIAAAGACIAKADIgEAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAEAEQAFADAJADQAMAFAGAGQAHAHgBALQAAAMgJAIQgJAJgRAAQgHAAgHgCg");
	this.shape_167.setTransform(336.45,472.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AAKAYIgEgvIARAAIgDAvgAgTAYIgEgvIARAAIgDAvg");
	this.shape_168.setTransform(321.6,465.85);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgKALIAEgRIADgQIATgCIgGASIgHARIgFANIgNABIAFgOg");
	this.shape_169.setTransform(318,477.125);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_170.setTransform(312.775,471.025);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_171.setTransform(304.575,472.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgmBFIAAgKIArg5IAGgGIAGgIIAAAAIgzAAIAAgPIBJAAIAAALIgrA4IgGAHIgGAIIAAAAIA3AAIAAAOgAgDgoIgTgcIAOAAIAKATIABAAIAMgTIANAAIgTAcg");
	this.shape_172.setTransform(295.425,470.225);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgXAyIAAhCIAAgQIAAgOIAPAAIABATIAAAAQAEgKAGgGQAHgFAJAAIADAAIACAAIAAARIgDAAIgDgBQgJABgGAFQgGAHgBAJIgBAEIAAAFIAAAzg");
	this.shape_173.setTransform(288.225,472.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_174.setTransform(278.425,470.15);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgnA4IAHgDIAIgFIAIgJQAEgEADgHIABgCIABgDIgBgCIgBgCIgkhYIAUAAIAVA5IADAKIACAJIADgJIADgLIATg4IAUAAIgbBFIgMAbIgJAUQgGAHgFAFQgHAGgFACQgHADgDABg");
	this.shape_175.setTransform(268.65,474.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_176.setTransform(258.875,472.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgIgCgIQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_177.setTransform(240.975,472.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_178.setTransform(233.125,470.05);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgDgGgBgHQABgSAPgIQAOgJAbAAIAAgCQABgEgCgFQgBgGgFgDQgFgEgIgBQgHAAgGACQgHACgGAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAGADAKQADAJAAAJIAAAjIAAAMIACAMIgQAAIgBgNIgBAAQgFAGgHAEQgHAFgKAAQgJAAgIgFgAABAAQgJACgFAFQgHAEAAAKQABAJAEADQAFAEAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_179.setTransform(225.7,472.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_180.setTransform(215.175,470.15);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_181.setTransform(204.875,472.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgCgGQgDgHgFgEQgEgDgIgBQgJAAgFAGQgHAEgCAIIgBAEIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIABAAQACgFAEgEQAFgEAGgDQAGgCAHAAQAGAAAFACQAGABAGAFQAFAEADAJQADAIAAAMIAAA5g");
	this.shape_182.setTransform(194.3,472.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgIgCgIQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_183.setTransform(175.675,472.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_184.setTransform(166.925,471.025);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_185.setTransform(151.175,472.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgTAxQgHgCgEgDIADgNIALAEQAGACAHAAQAIAAAFgEQAEgDAAgHQABgGgEgEQgFgEgJgDQgNgFgGgGQgGgIAAgIQAAgIAEgHQAEgGAHgEQAIgDAJAAQAIAAAGACIALADIgFAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAFAEQAEADAIADQANAFAGAGQAGAHAAALQAAAMgJAIQgJAJgQAAQgJAAgHgCg");
	this.shape_186.setTransform(142.2,472.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgmBFIAAgKIArg5IAGgGIAGgIIAAAAIgzAAIAAgPIBJAAIAAALIgrA4IgGAHIgGAIIAAAAIA3AAIAAAOgAgDgoIgTgcIAOAAIAKATIABAAIAMgTIANAAIgTAcg");
	this.shape_187.setTransform(126.425,470.225);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgZA/QgLgGgGgNQgHgMAAgVIAAhOIASAAIAABPQAAAPAEAJQAEAJAHAFQAHAFAJgBQAOAAAJgKQAJgKAAgWIAAhPIASAAIAABNQAAAVgHANQgHANgLAFQgMAHgNAAQgOgBgLgFg");
	this.shape_188.setTransform(115.775,470.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AAEAKIAFgQIADgPIASgCIgGARIgHAQIgGANIgLABIAEgOgAgYAKIAEgQIADgPIARgCIgFARIgGAQIgHANIgLABIAFgOg");
	this.shape_189.setTransform(105.575,477.075);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEAEgEQADgDAEgBQAFABAEADQADAEAAAEQAAAFgDAEQgEADgFABQgEgBgEgDg");
	this.shape_190.setTransform(600.725,425.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgWBGQgIgEgFgJQgFgJAAgRIAAg4IARAAIAAA1QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgCADgEQAEgDABgEIABgEIABgFIAAg7IARAAIAABGIABAOIAAAMIgPAAIgBgQIgBAAIgGAJQgFAEgGACQgGADgIAAQgIAAgHgDgAgOgoQgFgGAAgHQAAgJAFgFQAGgFAIAAQAJAAAFAFQAGAFAAAIQAAAIgGAGQgFAFgJAAQgIAAgGgFgAgHg9QgCADAAAFQAAAEADADQACADAEAAQAFAAACgDQADgDAAgFQAAgEgDgEQgCgDgFAAQgEAAgDAEg");
	this.shape_191.setTransform(593.025,419.625);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgOBAQgLgGgGgLQgGgLAAgPQAAgPAGgLQAHgLALgHQAMgGAPAAQAIAAAGABIAKAEIgEANIgIgDIgMgCQgLABgHAEQgIAFgDAIQgEAIAAAKQAAALAEAIQAEAIAIAFQAHAEAJAAQAIAAAFgBIAJgEIADAOIgLADQgHACgKAAQgOAAgKgGgAAAgpIgSgcIAOAAIAKATIABAAIAMgTIANAAIgTAcg");
	this.shape_192.setTransform(583.125,419.925);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_193.setTransform(576.1786,420);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_194.setTransform(567.875,419.75);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgLAAgPQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAIAHAGQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_195.setTransform(557.025,421.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgXAyIAAhCIAAgQIAAgOIAPAAIABATIAAAAQAEgKAGgGQAHgFAJAAIADAAIACAAIAAARIgDAAIgDgBQgJABgGAFQgGAHgBAJIgBAEIAAAFIAAAzg");
	this.shape_196.setTransform(549.025,421.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_197.setTransform(534.975,419.75);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgLAAgPQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAIAHAGQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_198.setTransform(524.125,421.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_199.setTransform(512.025,419.65);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAHACAIQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHAEQAHADAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_200.setTransform(504.725,421.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgSBEQgHgBgGgDIAFgOIAKAFQAGACAHAAQAJAAAEgEQAFgEgBgGQABgGgFgEQgDgEgKgEQgMgFgHgHQgGgHAAgHQAAgIAEgHQAEgGAHgEQAIgEAJAAQAIAAAGACIALAEIgFANIgIgEQgFgBgHAAQgHAAgEADQgEAEAAAGQAAAFAEADQAFAEAJADQAMAFAGAHQAHAHgBAKQAAANgJAIQgJAIgRAAQgHAAgHgCgAgFgpIgTgcIAOAAIALATIAAAAIAMgTIAOAAIgTAcg");
	this.shape_201.setTransform(495.75,419.925);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAHACAIQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHAEQAHADAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_202.setTransform(486.825,421.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_203.setTransform(475.825,419.75);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgLAAgPQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAIAHAGQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_204.setTransform(464.975,421.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAHACAIQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHAEQAHADAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_205.setTransform(450.275,421.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgmBFIAAgKIArg5IAGgGIAGgIIAAAAIgzAAIAAgPIBJAAIAAALIgrA4IgGAHIgGAIIAAAAIA3AAIAAAOgAgDgoIgTgcIAOAAIAKATIABAAIAMgTIANAAIgTAcg");
	this.shape_206.setTransform(441.125,419.825);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgKALIAEgRIADgQIATgCIgGASIgGARIgGANIgNABIAFgOg");
	this.shape_207.setTransform(430.35,426.725);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgYBCQgHgEgDgGQgDgGgBgHQABgSAPgJQAOgJAcAAIAAgCQAAgFgCgEQgBgFgFgEQgFgDgIgBQgHAAgGACQgHACgGADIgDgLQAFgEAJgCQAIgDAIAAQAPABAIAFQAIAGADAJQADAJAAAJIAAAkIABAMIABALIgQAAIgBgMIgBAAQgFAGgHAEQgIAEgJAAQgKAAgGgEgAABAUQgJACgFAFQgHAEAAAKQABAIAEAEQAFAEAHAAQAIAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIAQgcIAUAAIgYAcg");
	this.shape_208.setTransform(423.35,419.925);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_209.setTransform(414.125,421.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgZBCQgGgEgDgGQgDgGgBgHQABgSAPgJQAOgJAbAAIAAgCQABgFgCgEQgBgFgFgEQgFgDgIgBQgHAAgGACQgHACgGADIgDgLQAFgEAJgCQAIgDAIAAQAPABAIAFQAIAGADAJQADAJAAAJIAAAkIAAAMIACALIgQAAIgBgMIgBAAQgFAGgHAEQgHAEgKAAQgJAAgIgEgAABAUQgJACgFAFQgHAEAAAKQAAAIAFAEQAFAEAHAAQAIAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIAQgcIAUAAIgYAcg");
	this.shape_210.setTransform(404.35,419.925);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgDgGQgCgHgEgEQgGgDgIgBQgHABgGAFQgHAEgCAIIgBAEIgBAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAQACgFAFgEQAEgEAHgDQAGgCAIAAQAFAAAFACQAGABAFAFQAFAEAEAIQAEAJAAAMIAAA5g");
	this.shape_211.setTransform(394.25,421.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgmAxIAAgKIArg5IAGgHIAGgHIAAgBIgzAAIAAgOIBJAAIAAAKIgrA4IgGAHIgGAIIAAAAIA3AAIAAAPg");
	this.shape_212.setTransform(384.425,421.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_213.setTransform(377.7786,420);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgVBFIAAhCIAAgPIgBgPIAPAAIABAUIABAAQADgKAGgGQAIgGAJAAIACABIADAAIAAARIgDgBIgDAAQgKAAgGAGQgFAGgCAJIgBAEIAAAFIAAAzgAgGgoIgTgcIAOAAIALATIAAAAIAMgTIANAAIgTAcg");
	this.shape_214.setTransform(372.575,419.825);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgtBFIAAhnIAAgRIAAgPIAPAAIABARIABAAQAFgJAJgFQAJgFAKAAQAMAAAJAGQAJAGAGALQAFALAAAPQAAARgGALQgGALgKAGQgLAGgLAAQgJAAgHgEQgIgEgFgHIAAAAIAAA0gAgPgwQgIAGgDAKIgBADIAAAEIAAAQIAAAEIABAEQADAIAGAFQAIAGAJAAQAIAAAHgFQAGgEAEgJQAEgHAAgLQgBgKgDgIQgDgIgHgFQgGgFgJAAQgJAAgGAGg");
	this.shape_215.setTransform(363.5,423.775);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_216.setTransform(348.475,421.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgUBAQgKgGgGgLQgGgLAAgPQAAgOAGgLQAFgMAKgHQALgGANgBQALABAIAEQAIAEAFAHQAEAHACAHQACAIAAAHIAAAFIgBADIhDAAQAAAMAFAHQAFAIAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAEQgIACgLAAQgOAAgLgGgAAaAKQAAgFgCgGQgCgHgFgEQgGgFgKAAQgHAAgGAFQgGAEgDAHQgDAFgBAGIAzAAIAAAAgAgFgpIgTgcIANAAIALATIABAAIAMgTIANAAIgTAcg");
	this.shape_217.setTransform(338.675,419.925);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_218.setTransform(330.275,420.625);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgTBEQgHgBgFgDIAEgOIALAFQAGACAHAAQAIAAAFgEQAEgEAAgGQABgGgEgEQgFgEgJgEQgNgFgFgHQgHgHAAgHQAAgIAEgHQAEgGAHgEQAIgEAJAAQAIAAAGACIALAEIgFANIgIgEQgFgBgHAAQgHAAgEADQgEAEAAAGQAAAFAFADQAEAEAIADQANAFAGAHQAGAHAAAKQAAANgJAIQgJAIgRAAQgIAAgHgCgAgEgpIgTgcIANAAIALATIABAAIALgTIANAAIgTAcg");
	this.shape_219.setTransform(323.1,419.925);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_220.setTransform(314.475,421.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgZBCQgGgEgDgGQgEgGABgHQgBgSAPgJQAQgJAaAAIAAgCQABgFgCgEQgBgFgFgEQgEgDgJgBQgHAAgHACQgHACgFADIgDgLQAFgEAJgCQAIgDAIAAQAPABAIAFQAIAGADAJQADAJAAAJIAAAkIAAAMIABALIgPAAIgCgMIgBAAQgEAGgHAEQgIAEgJAAQgJAAgIgEgAABAUQgIACgHAFQgGAEAAAKQAAAIAFAEQAFAEAHAAQAIAAAGgFQAGgEACgHIABgDIAAgCIAAgRQgKAAgJABgAgHgpIAQgcIAUAAIgYAcg");
	this.shape_221.setTransform(304.7,419.925);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgDgGQgBgHgGgEQgEgDgJgBQgIABgGAFQgGAEgCAIIgBAEIgBAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAQACgFAFgEQAFgEAGgDQAGgCAIAAQAEAAAHACQAFABAFAFQAFAEAEAIQADAJAAAMIAAA5g");
	this.shape_222.setTransform(294.6,421.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AAYBHIAAg4QAAgIgDgGQgCgFgFgFQgFgDgIAAQgHAAgHAFQgGAFgCAHIgBADIgBAFIAAA6IgRAAIAAiNIARAAIAAA8IABAAIAFgHIAHgFIAJgEQADgBAFAAQAFAAAGACQAGACAFAEQAFAFAEAIQADAHAAANIAAA5g");
	this.shape_223.setTransform(279.275,419.65);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgOAsQgLgGgGgLQgGgLAAgPQAAgOAGgMQAHgLALgHQAMgGAPAAQAIAAAGABIAKAEIgEANIgIgDIgMgCQgLABgHAEQgIAFgDAJQgEAIAAAJQAAALAEAIQAEAIAIAFQAHAEAJAAQAIAAAFgBIAJgEIADAOIgLADQgHACgKAAQgOAAgKgGg");
	this.shape_224.setTransform(269.325,421.925);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgQBFIAAhgIAQAAIAABggAgSgoIASgcIATAAIgYAcg");
	this.shape_225.setTransform(263.25,419.825);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgCgGQgCgHgFgEQgFgDgJgBQgHABgGAFQgHAEgCAIIgBAEIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIABAAQABgFAFgEQAFgEAGgDQAGgCAHAAQAFAAAGACQAGABAGAFQAFAEADAIQADAJABAMIAAA5g");
	this.shape_226.setTransform(254.5,421.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_227.setTransform(242.975,419.75);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAHACAIQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHAEQAHADAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_228.setTransform(232.675,421.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_229.setTransform(225.275,419.65);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgSAxQgHgCgGgDIAFgNIAKAEQAGACAHAAQAJAAAEgDQAFgEgBgHQABgGgEgEQgEgEgKgDQgNgFgGgGQgGgIAAgIQAAgIAEgHQAEgGAHgEQAIgDAJAAQAIAAAGACIAKADIgEAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAEAEQAFADAJADQAMAFAGAGQAHAHgBALQAAAMgJAIQgJAJgRAAQgHAAgHgCg");
	this.shape_230.setTransform(219,421.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgLAAgPQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAIAHAGQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_231.setTransform(209.525,421.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgsBFIAAhnIAAgRIgBgPIAPAAIABARIABAAQAFgJAJgFQAIgFALAAQAMAAAJAGQAKAGAEALQAGALAAAPQAAARgGALQgHALgKAGQgJAGgMAAQgIAAgJgEQgHgEgEgHIgBAAIAAA0gAgPgwQgIAGgDAKIAAADIgBAEIAAAQIAAAEIABAEQACAIAIAFQAGAGAKAAQAIAAAHgFQAGgEAEgJQADgHABgLQAAgKgDgIQgEgIgHgFQgGgFgJAAQgIAAgHAGg");
	this.shape_232.setTransform(198.65,423.775);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgmAxIAAgKIArg5IAGgHIAGgHIAAgBIgzAAIAAgOIBJAAIAAAKIgrA4IgGAHIgGAIIAAAAIA3AAIAAAPg");
	this.shape_233.setTransform(184.125,421.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgUBAQgKgGgGgLQgGgLAAgPQAAgOAGgLQAFgMAKgHQALgGANgBQALABAIAEQAIAEAFAHQAEAHACAHQACAIAAAHIAAAFIgBADIhDAAQAAAMAFAHQAFAIAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAEQgIACgLAAQgOAAgLgGgAAaAKQAAgFgCgGQgCgHgFgEQgGgFgKAAQgHAAgGAFQgGAEgDAHQgDAFgBAGIAzAAIAAAAgAgGgpIAQgcIAUAAIgYAcg");
	this.shape_234.setTransform(170.625,419.925);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgDgGQgBgHgGgEQgEgDgJgBQgIABgGAFQgGAEgCAIIgBAEIgBAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAQACgFAFgEQAFgEAGgDQAGgCAIAAQAEAAAHACQAFABAFAFQAFAEAEAIQADAJAAAMIAAA5g");
	this.shape_235.setTransform(160.05,421.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_236.setTransform(148.525,419.75);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAHACAIQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHAEQAHADAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_237.setTransform(138.225,421.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgWBLIALgCQAFgDADgDQADgDAAgEQACgDAAgIIABgSIAAhQIASAAIAABXQAAAOgDAJQgDAKgGAGQgEAEgFADQgEACgGABIgKABgAAEhFQgDgDAAgEQAAgFADgDQADgEAFABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgFAAgDgDg");
	this.shape_238.setTransform(129.725,422.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_239.setTransform(121.7286,420);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgVBFIAAhCIAAgPIgBgPIAPAAIABAUIABAAQADgKAGgGQAIgGAJAAIACABIADAAIAAARIgDgBIgDAAQgKAAgGAGQgFAGgCAJIgBAEIAAAFIAAAzgAgGgoIgTgcIAOAAIALATIAAAAIAMgTIANAAIgTAcg");
	this.shape_240.setTransform(116.525,419.825);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgpBEIAAiEIAQgCIASgBQAMAAAJADQAKADAGAFQAFAFADAHQADAHAAAJQAAAKgCAHQgDAHgFAEQgGAHgMAEQgKAEgMAAIgHAAIgHgBIAAA2gAgQg1IgHABIAAA0IAHABIAIAAQAOAAAKgGQAIgIABgOQgBgNgIgHQgJgGgOAAIgJAAg");
	this.shape_241.setTransform(107.85,419.975);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEAEgEQADgDAEgBQAFABAEADQADAEAAAEQAAAFgDAEQgEADgFABQgEgBgEgDg");
	this.shape_242.setTransform(545.625,375.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHAEQAHADAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_243.setTransform(538.675,371.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgOAsQgLgGgGgLQgGgLAAgPQAAgOAGgMQAHgLALgHQAMgGAPAAQAIAAAGABIAKAEIgEANIgIgDIgMgCQgLABgHAEQgIAFgDAJQgEAIAAAJQAAALAEAIQAEAIAIAFQAHAEAJAAQAIAAAFgBIAJgEIADAOIgLADQgHACgKAAQgOAAgKgGg");
	this.shape_244.setTransform(529.375,371.525);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_245.setTransform(518.825,369.35);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgXAyIAAhCIAAgQIAAgOIAPAAIABATIAAAAQAEgKAGgGQAHgFAJAAIADAAIACAAIAAARIgDAAIgDgBQgJABgGAFQgGAHgBAKIgBADIAAAFIAAAzg");
	this.shape_246.setTransform(510.975,371.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgTAxQgHgCgFgDIAFgNIAKAEQAGACAHAAQAIAAAFgDQAFgEgBgHQABgGgEgEQgFgEgJgDQgMgFgHgGQgGgIAAgIQAAgIAEgHQAEgGAHgEQAIgDAJAAQAIAAAGACIALADIgFAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAFAEQAEADAIADQANAFAGAGQAGAHAAALQAAAMgJAJQgJAIgRAAQgHAAgIgCg");
	this.shape_247.setTransform(503.2,371.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgDgGAAgHQAAgSAOgIQAPgJAcAAIAAgCQAAgEgBgFQgCgGgFgDQgFgEgIgBQgHAAgHACQgGACgFAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAHADAIQADAKAAAJIAAAjIAAAMIABAMIgPAAIgCgNIgBAAQgDAGgIAEQgHAFgKAAQgJAAgHgFgAABAAQgIACgHAFQgFAEgBAKQAAAJAFAEQAFADAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_248.setTransform(489.9,371.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgDgGQgBgHgGgEQgFgDgHgBQgIABgHAFQgGAEgCAIIgBAEIgBAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIABAAQACgFAEgEQAEgEAHgCQAGgDAHAAQAFAAAHACQAFABAGAFQAEAEAEAIQAEAJgBAMIAAA5g");
	this.shape_249.setTransform(479.8,371.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgCQAEgCADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_250.setTransform(464.525,371.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgHAAgGAFQgFAEgCAHIgBAEIgBAFIAAA7IgQAAIAAg6QAAgLgGgIQgFgHgJAAQgGAAgFADQgEACgDAEQgDAEgCAEIAAAFIAAAEIAAA6IgSAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAIAHgJQAEgEAGgDQAGgCAHAAQALAAAGAFQAGAFAEAJIAAAAIAGgHIAFgGQAEgDAGgBQAEgCAIAAQAGgBAHAEQAIAEAFAIQAFAKAAAQIAAA5g");
	this.shape_251.setTransform(450.65,371.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHAEQAHADAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_252.setTransform(433.075,371.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_253.setTransform(424.775,370.225);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHAEQAHADAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_254.setTransform(416.575,371.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_255.setTransform(405.575,369.35);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgEgGABgHQgBgSAPgIQAQgJAaAAIAAgCQABgEgCgFQgBgGgFgDQgEgEgJgBQgHAAgHACQgHACgFAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAHADAIQADAKAAAJIAAAjIAAAMIABAMIgPAAIgCgNIgBAAQgEAGgHAEQgIAFgJAAQgJAAgIgFgAABAAQgIACgHAFQgGAEAAAKQAAAJAFAEQAFADAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_256.setTransform(395.15,371.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_257.setTransform(388.225,369.25);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AATBHIgggvIgJAKIAAAlIgSAAIAAiNIASAAIAABYIAAAAIAEgFIAFgGIAbggIAVAAIgkAnIAqA5g");
	this.shape_258.setTransform(381.675,369.25);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AAKAYIgEgvIARAAIgDAvgAgUAYIgCgvIARAAIgEAvg");
	this.shape_259.setTransform(368.55,365.05);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgKALIAEgRIADgQIATgCIgGASIgGARIgGANIgNABIAFgOg");
	this.shape_260.setTransform(364.95,376.325);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_261.setTransform(360.6786,369.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgIAAgFAFQgGAEgBAHIgCAEIAAAFIAAA7IgRAAIAAg6QAAgLgEgIQgFgHgLAAQgFAAgFADQgEACgDAEQgDAEgBAEIgBAFIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAOAAIABAQIABAAIAHgJQAEgEAGgDQAFgCAJAAQAJAAAIAFQAFAFAEAJIAAAAIAGgHIAFgGQAFgDAEgBQAGgCAHAAQAGgBAHAEQAIAEAFAIQAFAKAAAQIAAA5g");
	this.shape_262.setTransform(350,371.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgEgGABgHQAAgSAOgIQAPgJAbAAIAAgCQABgEgCgFQgBgGgFgDQgFgEgIgBQgHAAgHACQgGACgFAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAHADAIQADAKAAAJIAAAjIAAAMIABAMIgPAAIgCgNIgBAAQgDAGgIAEQgHAFgKAAQgJAAgIgFgAABAAQgIACgHAFQgFAEgBAKQAAAJAFAEQAFADAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_263.setTransform(336.55,371.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_264.setTransform(329.625,369.25);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_265.setTransform(324.9286,369.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgSAxQgIgCgEgDIADgNIALAEQAGACAHAAQAIAAAFgDQAFgEAAgHQAAgGgFgEQgEgEgIgDQgNgFgGgGQgHgIAAgIQAAgIAEgHQAEgGAIgEQAHgDAKAAQAHAAAGACIAKADIgEAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAEAEQAFADAJADQAMAFAGAGQAHAHAAALQAAAMgKAJQgJAIgQAAQgJAAgGgCg");
	this.shape_266.setTransform(318.65,371.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_267.setTransform(308.0786,369.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgIAAgFAFQgGAEgCAHIAAAEIgBAFIAAA7IgRAAIAAg6QABgLgGgIQgEgHgKAAQgGAAgEADQgFACgDAEQgDAEgCAEIgBAFIAAAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIAAAQIABAAIAHgJQAEgEAGgDQAGgCAHAAQALAAAGAFQAHAFADAJIABAAIAEgHIAGgGQAFgDAFgBQAFgCAGAAQAHgBAIAEQAHAEAFAIQAFAKABAQIAAA5g");
	this.shape_268.setTransform(297.4,371.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgQBFIAAhgIAQAAIAABggAgSgoIASgcIATAAIgYAcg");
	this.shape_269.setTransform(287.55,369.425);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgCgGQgCgHgFgEQgGgDgIgBQgHABgGAFQgHAEgCAIIgBAEIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIABAAQABgFAFgEQAEgEAHgCQAGgDAHAAQAFAAAGACQAGABAGAFQAFAEADAIQADAJABAMIAAA5g");
	this.shape_270.setTransform(278.8,371.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_271.setTransform(269.875,370.225);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgTAxQgGgCgFgDIADgNIALAEQAGACAHAAQAJAAAEgDQAEgEAAgHQABgGgEgEQgFgEgIgDQgOgFgFgGQgHgIAAgIQAAgIAEgHQAEgGAIgEQAHgDAKAAQAHAAAGACIALADIgFAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAFAEQAEADAIADQANAFAGAGQAGAHABALQAAAMgKAJQgJAIgQAAQgJAAgHgCg");
	this.shape_272.setTransform(262.7,371.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgDgGAAgHQAAgSAOgIQAPgJAcAAIAAgCQAAgEgBgFQgCgGgFgDQgFgEgIgBQgHAAgHACQgGACgFAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAHADAIQADAKAAAJIAAAjIAAAMIABAMIgPAAIgCgNIgBAAQgDAGgIAEQgHAFgKAAQgJAAgHgFgAABAAQgIACgHAFQgFAEgBAKQAAAJAFAEQAFADAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_273.setTransform(253.65,371.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_274.setTransform(246.725,369.25);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_275.setTransform(239.625,371.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_276.setTransform(227.175,370.225);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgDgGgBgHQABgSAPgIQAOgJAbAAIAAgCQABgEgCgFQgBgGgFgDQgFgEgIgBQgHAAgGACQgHACgGAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAHADAIQADAKAAAJIAAAjIAAAMIACAMIgQAAIgBgNIgBAAQgFAGgHAEQgHAFgKAAQgJAAgIgFgAABAAQgJACgFAFQgHAEAAAKQABAJAEAEQAFADAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_277.setTransform(218.95,371.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_278.setTransform(209.725,371.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AAYBHIAAg4QAAgIgDgGQgCgGgFgEQgFgDgIAAQgHAAgHAFQgGAFgCAHIgBADIgBAFIAAA6IgRAAIAAiNIARAAIAAA8IABAAIAFgHIAHgFIAJgEQADgBAFAAQAFAAAGACQAGACAFAEQAFAFAEAIQADAHAAANIAAA5g");
	this.shape_279.setTransform(199.625,369.25);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgOAsQgLgGgGgLQgGgLAAgPQAAgOAGgMQAHgLALgHQAMgGAPAAQAIAAAGABIAKAEIgEANIgIgDIgMgCQgLABgHAEQgIAFgDAJQgEAIAAAJQAAALAEAIQAEAIAIAFQAHAEAJAAQAIAAAFgBIAJgEIADAOIgLADQgHACgKAAQgOAAgKgGg");
	this.shape_280.setTransform(189.675,371.525);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgYBCQgHgEgDgGQgDgGgBgHQABgSAPgJQAPgJAbAAIAAgCQAAgFgBgEQgCgFgFgEQgFgDgIgBQgHAAgGACQgIACgFADIgEgLQAGgEAJgCQAIgDAJAAQAOABAIAFQAIAGADAJQADAJAAAJIAAAkIABAMIABALIgQAAIgBgMIgBAAQgFAGgHAEQgIAEgJAAQgKAAgGgEgAABAUQgJACgFAFQgHAEAAAKQABAIAEAEQAFAEAHAAQAIAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIARgcIATAAIgZAcg");
	this.shape_281.setTransform(180,369.525);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgmAxIAAgKIArg5IAGgHIAGgHIAAgBIgzAAIAAgOIBJAAIAAAKIgrA4IgGAHIgGAIIAAAAIA3AAIAAAPg");
	this.shape_282.setTransform(171.175,371.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_283.setTransform(159.275,370.225);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgDgGAAgHQAAgSAOgIQAPgJAbAAIAAgCQABgEgBgFQgCgGgFgDQgFgEgIgBQgHAAgHACQgGACgFAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAHADAIQADAKAAAJIAAAjIABAMIAAAMIgPAAIgCgNIgBAAQgDAGgIAEQgHAFgKAAQgJAAgIgFgAABAAQgIACgHAFQgFAEgBAKQAAAJAFAEQAFADAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_284.setTransform(151.05,371.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_285.setTransform(140.525,369.35);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgZBCQgGgEgDgGQgEgGABgHQgBgSAPgJQAQgJAaAAIAAgCQABgFgCgEQgBgFgFgEQgEgDgJgBQgHAAgHACQgHACgFADIgDgLQAFgEAJgCQAIgDAIAAQAPABAIAFQAIAGADAJQADAJAAAJIAAAkIAAAMIABALIgPAAIgCgMIgBAAQgEAGgHAEQgIAEgJAAQgJAAgIgEgAABAUQgIACgHAFQgGAEAAAKQAAAIAFAEQAFAEAHAAQAIAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIAQgcIAUAAIgYAcg");
	this.shape_286.setTransform(130.1,369.525);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_287.setTransform(123.175,369.25);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_288.setTransform(116.075,371.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgmAxIAAgKIArg5IAGgHIAGgHIAAgBIgzAAIAAgOIBJAAIAAAKIgrA4IgGAHIgGAIIAAAAIA3AAIAAAPg");
	this.shape_289.setTransform(106.475,371.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_290.setTransform(943.325,346.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgTAxQgHgCgEgDIADgNIALAEQAGACAHAAQAIAAAFgEQAEgDABgHQAAgGgFgEQgDgEgJgDQgOgFgFgGQgHgIAAgIQAAgIAEgHQAEgGAIgEQAHgDAKAAQAHAAAGACIAKADIgEAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAEAEQAFADAJADQAMAFAGAGQAHAHAAALQAAAMgKAIQgJAJgQAAQgIAAgIgCg");
	this.shape_291.setTransform(934.35,346.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_292.setTransform(920.275,345.025);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_293.setTransform(914.6786,344.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgOBAQgLgGgGgLQgGgLAAgPQAAgPAGgLQAHgLALgHQAMgGAPAAQAIAAAGABIAKAEIgEANIgIgDIgMgCQgLABgHAEQgIAFgDAIQgEAIAAAKQAAALAEAIQAEAIAIAFQAHAEAJAAQAIAAAFgBIAJgEIADAOIgLADQgHACgKAAQgOAAgKgGgAAAgpIgSgcIAOAAIAKATIABAAIAMgTIANAAIgTAcg");
	this.shape_294.setTransform(907.975,344.325);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_295.setTransform(897.925,346.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgDgGgBgHQABgSAPgIQAOgJAcAAIAAgCQAAgEgCgFQgBgGgFgDQgFgEgIgBQgHAAgGACQgHACgGAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAGADAKQADAJAAAJIAAAjIABAMIABAMIgQAAIgBgNIgBAAQgFAGgHAEQgIAFgJAAQgKAAgGgFgAABAAQgJACgFAFQgHAEAAAKQABAJAEADQAFAEAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_296.setTransform(887.3,346.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgCgGQgDgHgEgEQgGgDgIgBQgHAAgGAGQgHAEgCAIIgBAEIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIAAAAQADgFAEgEQAEgEAHgDQAGgCAIAAQAEAAAGACQAGABAFAFQAGAEADAJQAEAIAAAMIAAA5g");
	this.shape_297.setTransform(877.2,346.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgDgGAAgHQAAgSAOgIQAPgJAcAAIAAgCQAAgEgBgFQgCgGgFgDQgFgEgIgBQgHAAgHACQgGACgFAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAGADAKQADAJAAAJIAAAjIAAAMIABAMIgPAAIgCgNIgBAAQgDAGgIAEQgHAFgKAAQgJAAgHgFgAABAAQgIACgHAFQgFAEgBAKQAAAJAFADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_298.setTransform(859.8,346.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_299.setTransform(845.125,345.025);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_300.setTransform(836.425,346.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgIgCgIQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_301.setTransform(825.375,346.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgDgGQgBgHgGgEQgEgDgJgBQgHAAgHAGQgGAEgCAIIgBAEIgBAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAQACgFAFgEQAFgEAGgDQAGgCAIAAQAEAAAHACQAFABAFAFQAFAEAEAJQADAIAAAMIAAA5g");
	this.shape_302.setTransform(814.35,346.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AAYBHIAAg3QAAgJgDgGQgCgFgFgFQgFgDgIAAQgHAAgHAFQgGAFgCAHIgBADIgBAFIAAA6IgRAAIAAiNIARAAIAAA8IABAAIAFgHIAHgFIAJgEQADgBAFAAQAFAAAGACQAGACAFAEQAFAFAEAIQADAHAAANIAAA5g");
	this.shape_303.setTransform(803.275,344.05);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgnA4IAHgDIAIgFIAIgJQAEgEADgHIABgCIAAgDIAAgCIgBgCIgkhYIATAAIAWA5IADAKIACAJIADgJIADgLIATg4IATAAIgaBFIgMAbIgJAUQgGAHgFAFQgHAGgGACQgFADgEABg");
	this.shape_304.setTransform(793.05,348.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_305.setTransform(783.275,346.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_306.setTransform(766.225,346.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AATBHIggguIgJAJIAAAlIgSAAIAAiNIASAAIAABYIAAAAIAEgFIAFgGIAbggIAVAAIgkAnIAqA5g");
	this.shape_307.setTransform(756.725,344.05);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgUBAQgKgGgGgLQgGgLAAgPQAAgOAGgLQAFgMAKgHQALgGANgBQALABAIAEQAIAEAFAHQAEAHACAHQACAIAAAHIAAAFIgBADIhDAAQAAAMAFAHQAFAIAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAEQgIACgLAAQgOAAgLgGgAAaAKQAAgFgCgGQgCgHgFgEQgGgFgKAAQgHAAgGAFQgGAEgDAHQgDAFgBAGIAzAAIAAAAgAgGgpIAQgcIAUAAIgYAcg");
	this.shape_308.setTransform(746.225,344.325);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_309.setTransform(738.825,344.05);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgRBFIAAhgIARAAIAABggAgSgoIASgcIASAAIgXAcg");
	this.shape_310.setTransform(728.25,344.225);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgDgGQgCgHgEgEQgFgDgJgBQgIAAgGAGQgGAEgCAIIgBAEIgBAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAQACgFAFgEQAFgEAGgDQAGgCAIAAQAFAAAFACQAGABAFAFQAFAEAEAJQAEAIAAAMIAAA5g");
	this.shape_311.setTransform(719.5,346.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgYBCQgHgEgDgGQgEgGAAgHQAAgSAPgJQAQgJAbAAIAAgCQAAgFgBgEQgCgFgFgEQgEgDgJgBQgHAAgGACQgIACgEADIgFgLQAHgEAIgCQAIgDAJAAQAOABAIAFQAIAGADAJQADAJAAAJIAAAkIABAMIABALIgQAAIgCgMIAAAAQgEAGgIAEQgHAEgKAAQgKAAgGgEgAABAUQgJACgGAFQgFAEgBAKQABAIAEAEQAFAEAGAAQAJAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIARgcIATAAIgZAcg");
	this.shape_312.setTransform(708.85,344.325);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_313.setTransform(699.625,346.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgQBFIAAhgIAQAAIAABggAgRgoIARgcIATAAIgYAcg");
	this.shape_314.setTransform(693.3,344.225);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgmBFIAAgKIArg5IAGgGIAGgIIAAAAIgzAAIAAgPIBJAAIAAALIgrA4IgGAHIgGAIIAAAAIA3AAIAAAOgAgDgoIgTgcIAOAAIAKATIABAAIAMgTIANAAIgTAcg");
	this.shape_315.setTransform(685.825,344.225);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_316.setTransform(676.075,346.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_317.setTransform(658.825,346.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgSAxQgIgCgEgDIADgNIALAEQAGACAHAAQAIAAAFgEQAFgDAAgHQAAgGgFgEQgEgEgIgDQgNgFgGgGQgHgIAAgIQAAgIAEgHQAEgGAIgEQAHgDAKAAQAHAAAGACIAKADIgEAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAEAEQAFADAJADQAMAFAGAGQAHAHAAALQAAAMgKAIQgJAJgQAAQgJAAgGgCg");
	this.shape_318.setTransform(649.85,346.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_319.setTransform(634.175,346.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_320.setTransform(625.875,345.025);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgSAxQgIgCgFgDIAFgNIAKAEQAGACAHAAQAIAAAFgEQAFgDAAgHQAAgGgFgEQgEgEgIgDQgNgFgHgGQgGgIAAgIQAAgIAEgHQAEgGAHgEQAIgDAJAAQAIAAAGACIAKADIgEAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAEAEQAFADAJADQAMAFAGAGQAHAHgBALQABAMgKAIQgJAJgRAAQgIAAgGgCg");
	this.shape_321.setTransform(618.7,346.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_322.setTransform(609.275,346.4);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AATBHIggguIgJAJIAAAlIgSAAIAAiNIASAAIAABYIAAAAIAEgFIAFgGIAbggIAVAAIgkAnIAqA5g");
	this.shape_323.setTransform(599.775,344.05);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgmAxIAAgKIArg5IAGgHIAGgHIAAgBIgzAAIAAgOIBJAAIAAAKIgrA4IgGAHIgGAIIAAAAIA3AAIAAAPg");
	this.shape_324.setTransform(589.975,346.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgKALIAEgRIADgQIATgCIgGASIgGARIgGANIgNABIAFgOg");
	this.shape_325.setTransform(576.7,351.125);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_326.setTransform(570.075,346.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_327.setTransform(559.075,344.15);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgWBLIALgCQAFgDADgDQADgDAAgEQACgDAAgIIABgSIAAhQIASAAIAABXQAAAOgDAJQgDAKgGAGQgEAEgFADQgEACgGABIgKABgAAEhFQgDgDAAgEQAAgFADgDQADgEAFABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgFAAgDgDg");
	this.shape_328.setTransform(550.275,346.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgWBGQgIgEgFgJQgFgJAAgRIAAg4IARAAIAAA1QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgCADgEQAEgDABgEIABgEIABgFIAAg7IARAAIAABGIABAOIAAAMIgPAAIgBgQIgBAAIgGAJQgFAEgGACQgGADgIAAQgIAAgHgDgAgOgoQgFgGAAgHQAAgJAFgFQAGgFAIAAQAJAAAFAFQAGAFAAAIQAAAIgGAGQgFAFgJAAQgIAAgGgFgAgHg9QgCADAAAFQAAAEADADQACADAEAAQAFAAACgDQADgDAAgFQAAgEgDgEQgCgDgFAAQgEAAgDAEg");
	this.shape_329.setTransform(543.425,344.025);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgtBFIAAhnIAAgRIAAgPIAQAAIABARIAAAAQAFgJAJgFQAJgFAKAAQAMAAAJAGQAJAGAGALQAFALAAAPQAAARgGALQgHALgJAGQgKAGgMAAQgJAAgIgEQgHgEgFgHIAAAAIAAA0gAgQgwQgHAGgDAKIgBADIAAAEIAAAQIAAAEIABAEQADAIAGAFQAIAGAJAAQAIAAAHgFQAHgEADgJQAEgHgBgLQAAgKgDgIQgDgIgGgFQgHgFgJAAQgIAAgIAGg");
	this.shape_330.setTransform(532.5,348.175);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgIgCgIQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_331.setTransform(514.225,346.3);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_332.setTransform(505.475,345.025);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgmBFIAAgKIArg5IAGgGIAGgIIAAAAIgzAAIAAgPIBJAAIAAALIgrA4IgGAHIgGAIIAAAAIA3AAIAAAOgAgDgoIgTgcIAOAAIAKATIABAAIAMgTIANAAIgTAcg");
	this.shape_333.setTransform(491.225,344.225);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgnA4IAHgDIAIgFIAIgJQAEgEADgHIABgCIAAgDIAAgCIgBgCIgkhYIATAAIAWA5IADAKIACAJIADgJIADgLIATg4IATAAIgaBFIgMAbIgJAUQgGAHgFAFQgHAGgGACQgGADgDABg");
	this.shape_334.setTransform(482.3,348.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_335.setTransform(471.575,344.15);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AAbBEIgrhDIgNAPIAAA0IgSAAIAAiGIASAAIAABBIAAAAIAGgIIAFgHIAogyIAWAAIgwA5IA0BNg");
	this.shape_336.setTransform(461.675,344.4);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEAEgEQADgDAEgBQAFABAEADQADAEAAAEQAAAFgDAEQgEADgFABQgEgBgEgDg");
	this.shape_337.setTransform(446.725,350.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgHAAgGAFQgFAEgCAHIgBAEIgBAEIAAA8IgQAAIAAg6QgBgLgFgIQgEgHgLAAQgFAAgFADQgEACgDAEQgDAEgBAEIgBAFIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIAAAAIAHgJQAEgEAGgDQAGgCAHAAQAKAAAIAFQAFAFAEAJIAAAAIAGgHIAFgGQAEgDAFgBQAGgCAHAAQAGgBAHAEQAIAEAFAIQAFAKAAAQIAAA5g");
	this.shape_338.setTransform(436.15,346.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_339.setTransform(422.825,346.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgPBEQgIgEgGgKIAAAAIgBAQIgPAAIABgLIAAgOIAAh0IARAAIAAA9IABAAQAEgIAIgFQAIgFALAAQAMAAAKAHQAJAFAFAMQAFAKAAAPQAAAQgHAMQgFALgLAHQgJAFgLAAQgKAAgIgEgAgPgIQgIAFgDAJIAAAEIgBAEIAAARIAAADIABAEQACAJAIAFQAGAGAKAAQANAAAIgKQAHgKABgRQAAgKgDgIQgEgHgHgFQgGgFgJAAQgIAAgHAGg");
	this.shape_340.setTransform(412.4,344.15);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgIgCgIQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_341.setTransform(400.875,346.3);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgSAxQgIgCgFgDIAFgNIAKAEQAGACAHAAQAIAAAFgEQAFgDAAgHQAAgGgFgEQgEgEgIgDQgNgFgHgGQgGgIAAgIQAAgIAEgHQAEgGAHgEQAIgDAJAAQAIAAAGACIAKADIgEAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAEAEQAFADAJADQAMAFAGAGQAHAHgBALQABAMgKAIQgJAJgRAAQgIAAgGgCg");
	this.shape_342.setTransform(391.45,346.3);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgWBGQgIgEgFgJQgFgJAAgRIAAg4IARAAIAAA1QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgCADgEQAEgDABgEIABgEIABgFIAAg7IARAAIAABGIABAOIAAAMIgPAAIgBgQIgBAAIgGAJQgFAEgGACQgGADgIAAQgIAAgHgDgAgOgoQgFgGAAgHQAAgJAFgFQAGgFAIAAQAJAAAFAFQAGAFAAAIQAAAIgGAGQgFAFgJAAQgIAAgGgFgAgHg9QgCADAAAFQAAAEADADQACADAEAAQAFAAACgDQADgDAAgFQAAgEgDgEQgCgDgFAAQgEAAgDAEg");
	this.shape_343.setTransform(382.025,344.025);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgsBFIAAhnIAAgRIgBgPIAPAAIACARIAAAAQAFgJAJgFQAIgFALAAQAMAAAJAGQAKAGAEALQAGALAAAPQAAARgGALQgHALgKAGQgKAGgLAAQgIAAgJgEQgHgEgEgHIgBAAIAAA0gAgQgwQgHAGgDAKIAAADIgBAEIAAAQIAAAEIABAEQADAIAHAFQAHAGAJAAQAIAAAHgFQAGgEAEgJQADgHAAgLQAAgKgCgIQgEgIgGgFQgHgFgJAAQgJAAgHAGg");
	this.shape_344.setTransform(371.1,348.175);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgmAxIAAgKIArg5IAGgHIAGgHIAAgBIgzAAIAAgOIBJAAIAAAKIgrA4IgGAHIgGAIIAAAAIA3AAIAAAPg");
	this.shape_345.setTransform(360.825,346.3);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgHAAgGAFQgGAEgBAHIgCAEIAAAEIAAA8IgRAAIAAg6QAAgLgEgIQgFgHgLAAQgFAAgFADQgEACgDAEQgDAEgBAEIgBAFIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAOAAIABAQIABAAIAHgJQAEgEAGgDQAFgCAJAAQAKAAAHAFQAFAFAEAJIABAAIAFgHIAFgGQAFgDAEgBQAGgCAHAAQAGgBAHAEQAIAEAFAIQAFAKAAAQIAAA5g");
	this.shape_346.setTransform(341.45,346.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgoBNIAIgDIAIgGIAIgIQAEgFADgGIABgDIABgCIgBgCIgBgCIgjhZIASAAIAVA5IAEAKIACAKIADgKIAEgLIATg4IATAAIgbBFIgLAcIgKATQgFAIgHAFQgGAGgGACQgFADgEAAgAgHg+IAQgcIAUAAIgZAcg");
	this.shape_347.setTransform(328.45,346.425);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgCgGQgDgHgEgEQgFgDgJgBQgHAAgGAGQgHAEgCAIIgBAEIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIABAAQABgFAFgEQAFgEAGgDQAGgCAHAAQAFAAAGACQAGABAGAFQAFAEADAJQADAIABAMIAAA5g");
	this.shape_348.setTransform(318.4,346.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_349.setTransform(310.4786,344.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgWBLIALgCQAFgDADgDQADgDAAgEQACgDAAgIIABgSIAAhQIASAAIAABXQAAAOgDAJQgDAKgGAGQgEAEgFADQgEACgGABIgKABgAAEhFQgDgDAAgEQAAgFADgDQADgEAFABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgFAAgDgDg");
	this.shape_350.setTransform(304.675,346.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_351.setTransform(293.175,345.025);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_352.setTransform(287.5786,344.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_353.setTransform(280.475,346.3);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgDgGAAgHQAAgSAPgIQAOgJAbAAIAAgCQABgEgCgFQgBgGgFgDQgFgEgIgBQgHAAgGACQgHACgGAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAGADAKQADAJAAAJIAAAjIAAAMIACAMIgQAAIgBgNIgBAAQgFAGgHAEQgHAFgKAAQgJAAgIgFgAABAAQgJACgFAFQgHAEAAAKQABAJAEADQAFAEAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_354.setTransform(270.7,346.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_355.setTransform(262.775,345.025);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgTAxQgHgCgFgDIAEgNIALAEQAGACAHAAQAIAAAFgEQAEgDAAgHQABgGgEgEQgFgEgJgDQgNgFgFgGQgHgIAAgIQAAgIAEgHQAEgGAIgEQAHgDAJAAQAIAAAGACIALADIgFAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAFAEQAEADAIADQANAFAGAGQAGAHABALQAAAMgKAIQgJAJgRAAQgIAAgHgCg");
	this.shape_356.setTransform(255.6,346.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgEgGABgHQAAgSAOgIQAPgJAbAAIAAgCQABgEgCgFQgBgGgFgDQgFgEgIgBQgHAAgHACQgGACgFAEIgFgMQAHgDAIgDQAIgCAIAAQAPAAAIAFQAIAGADAKQADAJAAAJIAAAjIAAAMIABAMIgPAAIgCgNIgBAAQgDAGgIAEQgHAFgKAAQgJAAgIgFgAABAAQgIACgHAFQgFAEgBAKQAAAJAFADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQQgKAAgJAAg");
	this.shape_357.setTransform(246.55,346.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgmAxIAAgKIArg5IAGgHIAGgHIAAgBIgzAAIAAgOIBJAAIAAAKIgrA4IgGAHIgGAIIAAAAIA3AAIAAAPg");
	this.shape_358.setTransform(237.725,346.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_359.setTransform(221.225,346.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AATBHIggguIgJAJIAAAlIgSAAIAAiNIASAAIAABYIAAAAIAEgFIAFgGIAbggIAVAAIgkAnIAqA5g");
	this.shape_360.setTransform(211.725,344.05);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgEgGABgHQAAgSAOgIQAPgJAbAAIAAgCQABgEgCgFQgBgGgFgDQgFgEgIgBQgHAAgHACQgGACgFAEIgFgMQAHgDAIgDQAIgCAIAAQAPAAAIAFQAIAGADAKQADAJAAAJIAAAjIAAAMIABAMIgPAAIgCgNIgBAAQgDAGgIAEQgHAFgKAAQgJAAgIgFgAABAAQgIACgHAFQgFAEgBAKQAAAJAFADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQQgKAAgJAAg");
	this.shape_361.setTransform(201.1,346.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_362.setTransform(193.175,345.025);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgDgGgBgHQABgSAPgIQAPgJAbAAIAAgCQAAgEgBgFQgCgGgFgDQgFgEgIgBQgHAAgGACQgIACgFAEIgDgMQAFgDAJgDQAIgCAJAAQAOAAAIAFQAIAGADAKQADAJAAAJIAAAjIABAMIABAMIgQAAIgBgNIgBAAQgFAGgHAEQgIAFgJAAQgKAAgGgFgAABAAQgJACgFAFQgHAEAAAKQABAJAEADQAFAEAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_363.setTransform(184.95,346.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgCgGQgCgHgFgEQgFgDgJgBQgHAAgGAGQgHAEgCAIIgBAEIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIABAAQABgFAFgEQAFgEAGgDQAGgCAHAAQAFAAAGACQAGABAGAFQAFAEADAJQADAIABAMIAAA5g");
	this.shape_364.setTransform(168.1,346.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_365.setTransform(157.575,346.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgtBFIAAhnIAAgRIAAgPIAPAAIABARIABAAQAFgJAJgFQAJgFAKAAQAMAAAJAGQAKAGAEALQAGALAAAPQAAARgGALQgGALgLAGQgKAGgLAAQgIAAgIgEQgIgEgFgHIAAAAIAAA0gAgPgwQgIAGgDAKIgBADIAAAEIAAAQIAAAEIABAEQACAIAIAFQAGAGAKAAQAJAAAGgFQAHgEADgJQAEgHAAgLQAAgKgEgIQgDgIgHgFQgGgFgJAAQgJAAgGAGg");
	this.shape_366.setTransform(147.15,348.175);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgIgCgIQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_367.setTransform(135.625,346.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AAYBHIAAg3QAAgJgDgGQgCgFgFgFQgFgDgIAAQgHAAgHAFQgGAFgCAHIgBADIgBAFIAAA6IgRAAIAAiNIARAAIAAA8IABAAIAFgHIAHgFIAJgEQADgBAFAAQAFAAAGACQAGACAFAEQAFAFAEAIQADAHAAANIAAA5g");
	this.shape_368.setTransform(124.625,344.05);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgOAsQgLgGgGgLQgGgLAAgPQAAgOAGgMQAHgLALgHQAMgGAPAAQAIAAAGABIAKAEIgEANIgIgDIgMgCQgLABgHAEQgIAFgDAJQgEAIAAAJQAAALAEAIQAEAIAIAFQAHAEAJAAQAIAAAFgBIAJgEIADAOIgLADQgHACgKAAQgOAAgKgGg");
	this.shape_369.setTransform(114.675,346.325);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgSAxQgIgCgFgDIAFgNIAKAEQAGACAHAAQAIAAAFgEQAFgDAAgHQAAgGgFgEQgEgEgIgDQgNgFgHgGQgGgIAAgIQAAgIAEgHQAEgGAHgEQAIgDAJAAQAIAAAGACIAKADIgEAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAEAEQAFADAJADQAMAFAGAGQAHAHgBALQABAMgKAIQgJAJgRAAQgIAAgGgCg");
	this.shape_370.setTransform(106.15,346.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_371.setTransform(942.975,321.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_372.setTransform(934.675,319.825);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_373.setTransform(926.475,321.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgDQgDgJgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_374.setTransform(915.475,318.95);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_375.setTransform(904.675,321.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgPBEQgIgEgFgKIgBAAIgBAQIgPAAIABgLIAAgOIAAh0IARAAIAAA9IAAAAQAFgIAIgFQAJgFALAAQAMAAAIAHQAKAFAFAMQAFAKAAAPQAAAQgHAMQgGALgJAHQgKAFgLAAQgKAAgIgEgAgQgIQgHAFgDAJIgBAEIAAAEIAAARIAAADIABAEQADAJAGAFQAIAGAJAAQANAAAIgKQAHgKAAgRQAAgKgCgIQgEgHgGgFQgHgFgJAAQgIAAgIAGg");
	this.shape_376.setTransform(893.75,318.95);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_377.setTransform(882.775,321.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgDgGQgBgHgGgEQgFgDgHgBQgIABgHAFQgGAEgCAIIgBAEIgBAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIABAAQACgFAEgEQAEgEAHgCQAGgDAHAAQAFAAAHACQAFABAGAFQAEAEAEAIQAEAJgBAMIAAA5g");
	this.shape_378.setTransform(872.2,321);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgmBFIAAgKIArg5IAGgGIAGgIIAAAAIgzAAIAAgPIBJAAIAAALIgrA4IgGAHIgGAIIAAAAIA3AAIAAAOgAgDgoIgTgcIAOAAIAKATIABAAIAMgTIANAAIgTAcg");
	this.shape_379.setTransform(857.225,319.025);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_380.setTransform(847.475,321.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_381.setTransform(831.825,321.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgmBFIAAgKIArg5IAGgGIAGgIIAAAAIgzAAIAAgPIBJAAIAAALIgrA4IgGAHIgGAIIAAAAIA3AAIAAAOgAgDgoIgTgcIAOAAIAKATIABAAIAMgTIANAAIgTAcg");
	this.shape_382.setTransform(822.675,319.025);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgKALIAEgRIADgQIATgCIgGASIgHARIgFANIgNABIAFgOg");
	this.shape_383.setTransform(811,325.925);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgUBAQgKgGgGgLQgGgLAAgPQAAgOAGgLQAFgMAKgHQALgGANgBQALABAIAEQAIAEAFAHQAEAHACAHQACAIAAAHIAAAFIgBADIhDAAQAAAMAFAHQAFAIAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAEQgIACgLAAQgOAAgLgGgAAaAKQAAgFgCgGQgCgHgFgEQgGgFgKAAQgHAAgGAFQgGAEgDAHQgDAFgBAGIAzAAIAAAAgAgFgpIgTgcIANAAIALATIABAAIAMgTIANAAIgTAcg");
	this.shape_384.setTransform(804.125,319.125);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgDQgDgJgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_385.setTransform(793.125,318.95);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgDgGAAgHQgBgSAQgIQAPgJAaAAIAAgCQABgEgCgFQgBgGgFgDQgEgEgJgBQgHAAgHACQgHACgFAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAGADAJQADAKAAAJIAAAjIAAAMIABAMIgPAAIgBgNIgCAAQgEAGgHAEQgIAFgJAAQgJAAgIgFgAABAAQgJACgFAFQgHAEAAAKQABAJAEADQAFAEAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_386.setTransform(782.7,321.1);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgsBFIAAhnIAAgRIgBgPIAPAAIABARIABAAQAFgJAJgFQAJgFAKAAQAMAAAJAGQAKAGAEALQAGALAAAPQAAARgGALQgHALgKAGQgKAGgLAAQgJAAgHgEQgIgEgEgHIgBAAIAAA0gAgPgwQgIAGgDAKIAAADIgBAEIAAAQIAAAEIABAEQACAIAIAFQAGAGAKAAQAIAAAHgFQAGgEAEgJQADgHABgLQAAgKgEgIQgDgIgHgFQgGgFgJAAQgJAAgGAGg");
	this.shape_387.setTransform(772.75,322.975);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgRBFIAAhgIARAAIAABggAgSgoIASgcIASAAIgXAcg");
	this.shape_388.setTransform(765.25,319.025);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgVBFIAAhCIAAgPIgBgPIAPAAIABAUIABAAQADgKAGgGQAIgGAJAAIACABIADAAIAAARIgDgBIgDAAQgKAAgGAGQgFAGgCAJIgBAEIAAAFIAAAzgAgGgoIgTgcIAOAAIALATIAAAAIAMgTIANAAIgTAcg");
	this.shape_389.setTransform(759.175,319.025);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgsBFIAAhnIAAgRIgBgPIAQAAIABARIAAAAQAFgJAJgFQAIgFALAAQAMAAAJAGQAKAGAEALQAGALAAAPQAAARgGALQgHALgJAGQgLAGgLAAQgIAAgJgEQgHgEgEgHIgBAAIAAA0gAgQgwQgHAGgDAKIAAADIgBAEIAAAQIAAAEIABAEQADAIAGAFQAHAGAKAAQAJAAAGgFQAHgEADgJQADgHAAgLQAAgKgCgIQgEgIgGgFQgHgFgJAAQgIAAgIAGg");
	this.shape_390.setTransform(750.1,322.975);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_391.setTransform(734.175,321.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_392.setTransform(719.225,321.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgmAxIAAgKIArg5IAGgHIAGgHIAAgBIgzAAIAAgOIBJAAIAAAKIgrA4IgGAHIgGAIIAAAAIA3AAIAAAPg");
	this.shape_393.setTransform(710.075,321.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_394.setTransform(700.325,321.2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_395.setTransform(689.275,321.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgtBFIAAhnIAAgRIAAgPIAQAAIABARIAAAAQAFgJAJgFQAIgFALAAQAMAAAJAGQAJAGAGALQAFALAAAPQAAARgGALQgGALgKAGQgLAGgLAAQgJAAgHgEQgIgEgFgHIAAAAIAAA0gAgQgwQgHAGgDAKIgBADIAAAEIAAAQIAAAEIABAEQADAIAGAFQAIAGAJAAQAIAAAHgFQAGgEAEgJQADgHAAgLQAAgKgDgIQgDgIgGgFQgHgFgJAAQgIAAgIAGg");
	this.shape_396.setTransform(678.4,322.975);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgEgGAAgHQAAgSAPgIQAPgJAcAAIAAgCQAAgEgBgFQgCgGgFgDQgFgEgIgBQgHAAgHACQgHACgEAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAGADAJQADAKAAAJIAAAjIABAMIABAMIgQAAIgCgNIAAAAQgEAGgIAEQgHAFgKAAQgKAAgGgFgAABAAQgIACgHAFQgFAEgBAKQABAJAEADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_397.setTransform(662.15,321.1);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgUBAQgKgGgGgLQgGgLAAgPQAAgOAGgLQAFgMAKgHQALgGANgBQALABAIAEQAIAEAFAHQAEAHACAHQACAIAAAHIAAAFIgBADIhDAAQAAAMAFAHQAFAIAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAEQgIACgLAAQgOAAgLgGgAAaAKQAAgFgCgGQgCgHgFgEQgGgFgKAAQgHAAgGAFQgGAEgDAHQgDAFgBAGIAzAAIAAAAgAgFgpIgTgcIANAAIALATIABAAIAMgTIANAAIgTAcg");
	this.shape_398.setTransform(647.475,319.125);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgCgGQgDgHgEgEQgGgDgIgBQgHABgGAFQgHAEgCAIIgBAEIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIAAAAQADgFAEgEQAEgEAHgCQAGgDAHAAQAFAAAGACQAGABAFAFQAGAEADAIQADAJABAMIAAA5g");
	this.shape_399.setTransform(636.9,321);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgDgGQgBgHgGgEQgEgDgIgBQgJABgGAFQgGAEgCAIIgBAEIgBAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAQACgFAFgEQAFgEAGgCQAGgDAIAAQAEAAAHACQAFABAFAFQAFAEAEAIQADAJAAAMIAAA5g");
	this.shape_400.setTransform(625.8,321);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_401.setTransform(615.275,321.1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgDQgDgJgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_402.setTransform(604.275,318.95);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_403.setTransform(590.425,319.825);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgYBCQgHgEgDgGQgDgGgBgHQABgSAPgJQAOgJAcAAIAAgCQAAgFgCgEQgBgFgFgEQgFgDgIgBQgHAAgGACQgHACgGADIgDgLQAFgEAJgCQAIgDAIAAQAPABAIAFQAIAGADAJQADAJAAAJIAAAkIABAMIABALIgQAAIgBgMIgBAAQgFAGgHAEQgIAEgJAAQgKAAgGgEgAABAUQgJACgFAFQgHAEAAAKQABAIAEAEQAFAEAHAAQAIAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIAQgcIAUAAIgYAcg");
	this.shape_404.setTransform(582.2,319.125);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgXAyIAAhCIAAgQIAAgOIAPAAIABATIAAAAQAEgKAGgGQAHgFAJAAIADAAIACAAIAAARIgDAAIgDgBQgJABgGAFQgGAHgBAJIgBAEIAAAFIAAAzg");
	this.shape_405.setTransform(575.025,321);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AATBHIgggvIgJAKIAAAlIgSAAIAAiNIASAAIAABYIAAAAIAEgFIAFgGIAbggIAVAAIgkAnIAqA5g");
	this.shape_406.setTransform(566.975,318.85);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_407.setTransform(559.0786,319.2);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgVBFIAAhCIAAgPIgBgPIAPAAIABAUIABAAQADgKAGgGQAIgGAJAAIACABIADAAIAAARIgDgBIgDAAQgKAAgGAGQgFAGgCAJIgBAEIAAAFIAAAzgAgGgoIgTgcIAOAAIALATIAAAAIAMgTIANAAIgTAcg");
	this.shape_408.setTransform(553.875,319.025);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_409.setTransform(546.825,319.825);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgUBAQgKgGgGgLQgGgLAAgPQAAgOAGgLQAFgMAKgHQALgGANgBQALABAIAEQAIAEAFAHQAEAHACAHQACAIAAAHIAAAFIgBADIhDAAQAAAMAFAHQAFAIAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAEQgIACgLAAQgOAAgLgGgAAaAKQAAgFgCgGQgCgHgFgEQgGgFgKAAQgHAAgGAFQgGAEgDAHQgDAFgBAGIAzAAIAAAAgAgFgpIgTgcIANAAIALATIABAAIAMgTIANAAIgTAcg");
	this.shape_410.setTransform(533.475,319.125);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgCgGQgDgHgFgEQgFgDgHgBQgJABgGAFQgGAEgCAIIgBAEIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIABAAQACgFAEgEQAEgEAHgCQAGgDAHAAQAGAAAGACQAFABAGAFQAEAEAEAIQADAJAAAMIAAA5g");
	this.shape_411.setTransform(522.9,321);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_412.setTransform(514.975,318.85);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgZBCQgGgEgDgGQgEgGABgHQAAgSAOgJQAPgJAbAAIAAgCQABgFgCgEQgBgFgFgEQgFgDgIgBQgHAAgHACQgGACgFADIgFgLQAHgEAIgCQAIgDAJAAQAOABAIAFQAIAGADAJQADAJAAAJIAAAkIAAAMIABALIgPAAIgCgMIgBAAQgDAGgIAEQgHAEgKAAQgJAAgIgEgAABAUQgIACgHAFQgFAEgBAKQAAAIAFAEQAFAEAGAAQAJAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIARgcIATAAIgZAcg");
	this.shape_413.setTransform(507.55,319.125);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AA0AyIAAg2QAAgOgFgIQgFgIgLAAQgHAAgGAFQgFAEgCAHIgBAEIgBAEIAAA8IgQAAIAAg6QgBgLgFgIQgEgHgLAAQgFAAgFADQgEACgDAEQgDAEgBAEIgBAFIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIAAAAIAHgJQAEgEAGgDQAGgCAHAAQAKAAAIAFQAFAFAEAJIAAAAIAGgHIAFgGQAEgDAFgBQAGgCAHAAQAGgBAHAEQAIAEAFAIQAFAKAAAQIAAA5g");
	this.shape_414.setTransform(494.65,321);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_415.setTransform(483.9286,319.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AAYAxIgOgXIgFgIIgFgIIAAAAIgEAIIgGAIIgOAXIgTAAIAigxIghgvIAUAAIAOAUIAFAIIAEAIIAAAAIAFgIIAFgIIANgUIAUAAIghAuIAhAyg");
	this.shape_416.setTransform(476.925,321.1);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgDgGAAgHQgBgSAQgIQAPgJAaAAIAAgCQABgEgCgFQgBgGgFgDQgEgEgJgBQgHAAgHACQgHACgFAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAGADAJQADAKAAAJIAAAjIAAAMIABAMIgPAAIgBgNIgCAAQgEAGgHAEQgIAFgJAAQgJAAgIgFgAABAAQgJACgFAFQgHAEAAAKQABAJAEADQAFAEAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_417.setTransform(467.25,321.1);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AA0AyIAAg2QAAgOgFgIQgFgIgLAAQgHAAgGAFQgFAEgDAHIAAAEIgBAEIAAA8IgQAAIAAg6QAAgLgGgIQgFgHgJAAQgGAAgEADQgFACgDAEQgDAEgCAEIgBAFIAAAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAIAHgJQAEgEAGgDQAGgCAHAAQALAAAGAFQAHAFADAJIAAAAIAFgHIAGgGQAEgDAGgBQAEgCAIAAQAGgBAIAEQAHAEAFAIQAFAKABAQIAAA5g");
	this.shape_418.setTransform(454.35,321);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_419.setTransform(435.375,321.2);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_420.setTransform(426.475,319.825);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_421.setTransform(418.275,321.1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_422.setTransform(410.875,318.85);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AgPBEQgIgEgFgKIgBAAIgBAQIgPAAIABgLIAAgOIAAh0IARAAIAAA9IABAAQAEgIAIgFQAJgFALAAQALAAAKAHQAJAFAFAMQAFAKAAAPQAAAQgHAMQgGALgJAHQgKAFgLAAQgKAAgIgEgAgQgIQgHAFgDAJIAAAEIgBAEIAAARIAAADIABAEQADAJAGAFQAIAGAJAAQANAAAIgKQAHgKAAgRQAAgKgCgIQgEgHgGgFQgHgFgJAAQgIAAgIAGg");
	this.shape_423.setTransform(403.15,318.95);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgEgGAAgHQAAgSAPgIQAQgJAbAAIAAgCQAAgEgBgFQgCgGgFgDQgEgEgJgBQgHAAgGACQgIACgEAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAGADAJQADAKAAAJIAAAjIABAMIABAMIgQAAIgCgNIAAAAQgEAGgIAEQgHAFgKAAQgKAAgGgFgAABAAQgIACgGAFQgGAEgBAKQABAJAEADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_424.setTransform(392.05,321.1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_425.setTransform(384.125,319.825);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_426.setTransform(370.275,321.2);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgCgGQgCgHgGgEQgFgDgHgBQgIABgHAFQgGAEgCAIIgBAEIAAAEIAAA6IgSAAIAAhGIAAgOIgBgMIAQAAIABAQIABAAQACgFAEgEQAEgEAHgCQAGgDAHAAQAFAAAHACQAFABAGAFQAEAEAEAIQAEAJgBAMIAAA5g");
	this.shape_427.setTransform(359.2,321);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgDQgDgJgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_428.setTransform(347.675,318.95);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_429.setTransform(337.375,321.1);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AgWBLIALgCQAFgDADgDQADgCAAgFQACgDAAgIIABgSIAAhQIASAAIAABXQAAAOgDAJQgDAKgGAGQgEAEgFADQgEACgGABIgKABgAAEhFQgDgDAAgEQAAgFADgDQADgEAFABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgFAAgDgDg");
	this.shape_430.setTransform(328.875,321.3);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgCgGQgDgHgFgEQgFgDgHgBQgJABgGAFQgGAEgCAIIgBAEIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIABAAQACgFAEgEQAEgEAHgCQAGgDAHAAQAGAAAGACQAFABAGAFQAEAEAEAIQADAJAAAMIAAA5g");
	this.shape_431.setTransform(316.8,321);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_432.setTransform(306.275,321.1);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgWBLIALgCQAFgDADgDQADgCAAgFQACgDAAgIIABgSIAAhQIASAAIAABXQAAAOgDAJQgDAKgGAGQgEAEgFADQgEACgGABIgKABgAAEhFQgDgDAAgEQAAgFADgDQADgEAFABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgFAAgDgDg");
	this.shape_433.setTransform(297.775,321.3);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgoA4IAIgDIAIgGIAIgIQAEgEADgHIABgCIAAgDIAAgCIgBgCIgjhYIASAAIAVA5IAEAKIACAJIADgJIAEgLIATg4IASAAIgaBFIgLAbIgKAUQgFAHgHAFQgGAGgGACQgFADgEABg");
	this.shape_434.setTransform(286.6,323.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgDQgDgJgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_435.setTransform(275.875,318.95);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgmBFIAAgKIArg5IAGgGIAGgIIAAAAIgzAAIAAgPIBJAAIAAALIgrA4IgGAHIgGAIIAAAAIA3AAIAAAOgAgDgoIgTgcIAOAAIAKATIABAAIAMgTIANAAIgTAcg");
	this.shape_436.setTransform(266.425,319.025);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_437.setTransform(257.375,321.1);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AgKALIAEgRIADgQIATgCIgGASIgGARIgGANIgNABIAFgOg");
	this.shape_438.setTransform(245.15,325.925);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AA0AyIAAg2QAAgOgFgIQgFgIgLAAQgIAAgFAFQgFAEgCAHIgBAEIgBAEIAAA8IgQAAIAAg6QgBgLgEgIQgFgHgLAAQgFAAgFADQgEACgDAEQgDAEgBAEIgBAFIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAOAAIACAQIAAAAIAHgJQAEgEAGgDQAFgCAIAAQAKAAAIAFQAFAFAEAJIAAAAIAGgHIAFgGQAEgDAFgBQAGgCAHAAQAGgBAHAEQAIAEAFAIQAFAKAAAQIAAA5g");
	this.shape_439.setTransform(234.9,321);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgRBFIAAhgIARAAIAABggAgSgoIASgcIASAAIgXAcg");
	this.shape_440.setTransform(225.05,319.025);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AgTAxQgHgCgFgDIAFgNIAKAEQAGACAHAAQAIAAAFgEQAFgDgBgHQABgGgEgEQgFgEgJgDQgMgFgHgGQgGgIAAgIQAAgIAEgHQAEgGAHgEQAIgDAJAAQAIAAAGACIALADIgFAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAFAEQAEADAIADQANAFAGAGQAGAHAAALQAAAMgJAJQgJAIgRAAQgHAAgIgCg");
	this.shape_441.setTransform(217.9,321.1);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_442.setTransform(208.425,321.1);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgXAyIAAhCIAAgQIAAgOIAPAAIABATIAAAAQAEgKAGgGQAHgFAJAAIADAAIACAAIAAARIgDAAIgDgBQgJABgGAFQgGAHgBAJIgBAEIAAAFIAAAzg");
	this.shape_443.setTransform(200.425,321);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AgsBFIAAhnIAAgRIgBgPIAQAAIABARIAAAAQAFgJAJgFQAIgFALAAQAMAAAJAGQAKAGAEALQAGALAAAPQAAARgGALQgHALgJAGQgKAGgMAAQgIAAgJgEQgHgEgEgHIgBAAIAAA0gAgQgwQgHAGgDAKIAAADIgBAEIAAAQIAAAEIABAEQADAIAGAFQAIAGAJAAQAJAAAGgFQAHgEADgJQADgHAAgLQAAgKgCgIQgEgIgGgFQgHgFgJAAQgIAAgIAGg");
	this.shape_444.setTransform(191.2,322.975);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgKALIAEgRIADgQIATgCIgGASIgHARIgFANIgNABIAFgOg");
	this.shape_445.setTransform(177.8,325.925);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_446.setTransform(171.175,321.1);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_447.setTransform(162.875,319.825);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AgWBLIALgCQAFgDADgDQADgCAAgFQACgDAAgIIABgSIAAhQIASAAIAABXQAAAOgDAJQgDAKgGAGQgEAEgFADQgEACgGABIgKABgAAEhFQgDgDAAgEQAAgFADgDQADgEAFABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgFAAgDgDg");
	this.shape_448.setTransform(156.175,321.3);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_449.setTransform(149.825,321.1);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_450.setTransform(140.225,321.1);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgRBFIAAhgIARAAIAABggAgSgoIASgcIASAAIgXAcg");
	this.shape_451.setTransform(133.9,319.025);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgmBFIAAgKIArg5IAGgGIAGgIIAAAAIgzAAIAAgPIBJAAIAAALIgrA4IgGAHIgGAIIAAAAIA3AAIAAAOgAgDgoIgTgcIAOAAIAKATIABAAIAMgTIANAAIgTAcg");
	this.shape_452.setTransform(126.425,319.025);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgZA/QgLgGgGgNQgHgMAAgVIAAhOIASAAIAABPQAAAPAEAJQAEAJAHAFQAHAFAJgBQAOAAAJgKQAJgKAAgWIAAhPIASAAIAABNQAAAVgHANQgHANgLAFQgMAHgNAAQgOgBgLgFg");
	this.shape_453.setTransform(115.775,319.3);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AAEAKIAFgQIADgPIASgCIgGARIgHAQIgGANIgLABIAEgOgAgYAKIAEgQIADgPIARgCIgFARIgGAQIgHANIgLABIAFgOg");
	this.shape_454.setTransform(105.575,325.875);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEAEgEQADgDAEgBQAFABAEADQADAEAAAEQAAAFgDAEQgEADgFABQgEgBgEgDg");
	this.shape_455.setTransform(620.675,274.5);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AgVBEQgJgCgGgEIAFgNQAEADAIACQAHACAJABQAIgBAHgDQAHgDAEgIQAEgHAAgNIAAgKIAAAAQgEAHgIAEQgIAFgKAAQgMAAgJgGQgKgHgFgKQgFgJAAgOQAAgQAGgMQAGgLAKgHQAKgFALAAQAIAAAGACQAGADAEAEQAEADACAFIAAAAIABgPIAPAAIAAALIgBAQIAAA2QAAARgDALQgDAKgHAHQgIAGgJADQgJACgJAAQgIAAgJgCgAgSguQgIAKAAARQAAAJADAIQADAIAGAEQAHAEAIAAQAIAAAHgEQAHgFADgHIABgFIAAgFIAAgRIAAgEIgBgEQgCgIgHgFQgGgFgKgBQgLAAgIAKg");
	this.shape_456.setTransform(612.825,272.7);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgHAAgGAFQgFAEgDAHIgBAEIAAAEIAAA8IgRAAIAAg6QAAgLgEgIQgGgHgKAAQgFAAgFADQgEACgDAEQgDAEgBAEIgBAFIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAOAAIABAQIABAAIAHgJQAEgEAGgDQAFgCAJAAQAJAAAIAFQAFAFAEAJIABAAIAEgHIAGgGQAFgDAEgBQAFgCAHAAQAHgBAHAEQAIAEAFAIQAFAKAAAQIAAA5g");
	this.shape_457.setTransform(599.2,270.6);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AgaA/QgJgCgEgDIAEgNQAEACAIADQAHACAJAAQAHAAAHgEQAHgDAEgGQAFgHAAgIQAAgNgJgIQgJgHgTAAIgKABIgIABIAJg/IA9AAIAAAPIgxAAIgFAhIAFgBIAGAAIAOACQAHACAGAEQAIADAFAIQAFAIAAANQAAAMgGALQgGAJgLAHQgLAFgNAAQgLAAgIgDg");
	this.shape_458.setTransform(581.225,269.15);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AgKALIAEgRIADgQIATgCIgGASIgGARIgGANIgNABIAFgOg");
	this.shape_459.setTransform(574.1,275.525);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AgWA8QgKgIgFgPQgGgPAAgVQAAgWAGgOQAGgPAKgJQAKgHAMAAQAVAAALARQALARAAAgQAAAggMARQgLASgVAAQgNAAgJgHgAgSgnQgHAOAAAaQAAAZAHAOQAHAOALAAQAJgBAGgGQAGgHADgMQADgMAAgQQAAgPgDgMQgDgMgGgHQgGgGgJgBQgLAAgHAOg");
	this.shape_460.setTransform(567.075,269.05);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgIAAgFAFQgGAEgBAHIgCAEIAAAEIAAA8IgRAAIAAg6QAAgLgEgIQgFgHgLAAQgFAAgFADQgEACgDAEQgDAEgBAEIgBAFIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAOAAIABAQIABAAIAHgJQAEgEAGgDQAFgCAJAAQAJAAAIAFQAFAFAEAJIAAAAIAGgHIAFgGQAFgDAEgBQAGgCAHAAQAGgBAHAEQAIAEAFAIQAFAKAAAQIAAA5g");
	this.shape_461.setTransform(549.35,270.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgEgGABgHQAAgSAOgIQAPgJAbAAIAAgCQABgEgBgFQgCgGgFgDQgFgEgIgBQgHAAgHACQgGACgFAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAGADAKQADAJAAAJIAAAjIAAAMIABAMIgPAAIgCgNIgBAAQgDAGgIAEQgHAFgKAAQgJAAgIgFgAABAAQgIACgHAFQgFAEgBAKQAAAJAFADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQQgKAAgJAAg");
	this.shape_462.setTransform(535.9,270.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_463.setTransform(528.975,268.45);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_464.setTransform(521.125,270.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AgmAxIAAgKIArg5IAGgHIAGgHIAAgBIgzAAIAAgOIBJAAIAAAKIgrA4IgGAHIgGAIIAAAAIA3AAIAAAPg");
	this.shape_465.setTransform(511.525,270.7);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgEgGABgHQAAgSAOgIQAPgJAbAAIAAgCQABgEgBgFQgCgGgFgDQgFgEgIgBQgHAAgHACQgGACgFAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAGADAKQADAJAAAJIAAAjIAAAMIABAMIgPAAIgCgNIgBAAQgDAGgIAEQgHAFgKAAQgJAAgIgFgAABAAQgIACgHAFQgFAEgBAKQAAAJAFADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQQgKAAgJAAg");
	this.shape_466.setTransform(502.15,270.7);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("AgXAyIAAhCIAAgQIAAgOIAPAAIABATIAAAAQAEgKAGgGQAHgFAJAAIADAAIACAAIAAARIgDAAIgDgBQgJABgGAFQgGAHgBAJIgBAEIAAAFIAAAzg");
	this.shape_467.setTransform(494.975,270.6);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AgsBFIAAhnIAAgRIgBgPIAPAAIABARIABAAQAFgJAJgFQAIgFALAAQAMAAAJAGQAKAGAEALQAGALAAAPQAAARgGALQgHALgKAGQgJAGgMAAQgIAAgJgEQgHgEgEgHIgBAAIAAA0gAgPgwQgIAGgDAKIAAADIgBAEIAAAQIAAAEIABAEQACAIAIAFQAGAGAKAAQAIAAAHgFQAGgEAEgJQADgHABgLQAAgKgDgIQgEgIgHgFQgGgFgJAAQgIAAgHAGg");
	this.shape_468.setTransform(485.75,272.575);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_469.setTransform(477.375,268.45);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgDgGAAgHQgBgSAQgIQAPgJAaAAIAAgCQABgEgCgFQgBgGgFgDQgEgEgJgBQgHAAgHACQgHACgFAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAGADAKQADAJAAAJIAAAjIAAAMIABAMIgPAAIgBgNIgCAAQgEAGgHAEQgIAFgJAAQgJAAgIgFgAABAAQgJACgFAFQgHAEAAAKQABAJAEADQAFAEAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQQgKAAgJAAg");
	this.shape_470.setTransform(469.95,270.7);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_471.setTransform(457.775,269.425);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgCgGQgDgHgFgEQgFgDgHgBQgJAAgGAGQgGAEgCAIIgBAEIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIABAAQACgFAEgEQAEgEAHgDQAGgCAHAAQAGAAAGACQAFABAGAFQAEAEAEAIQADAJAAAMIAAA5g");
	this.shape_472.setTransform(449.1,270.6);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_473.setTransform(438.575,270.7);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_474.setTransform(431.1786,268.8);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AgOAsQgLgGgGgLQgGgLAAgPQAAgOAGgMQAHgLALgHQAMgGAPAAQAIAAAGABIAKAEIgEANIgIgDIgMgCQgLABgHAEQgIAFgDAJQgEAIAAAJQAAALAEAIQAEAIAIAFQAHAEAJAAQAIAAAFgBIAJgEIADAOIgLADQgHACgKAAQgOAAgKgGg");
	this.shape_475.setTransform(424.475,270.725);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgDgGgBgHQABgSAPgIQAOgJAcAAIAAgCQAAgEgCgFQgBgGgFgDQgFgEgIgBQgHAAgGACQgHACgGAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAGADAKQADAJAAAJIAAAjIABAMIABAMIgQAAIgBgNIgBAAQgFAGgHAEQgIAFgJAAQgKAAgGgFgAABAAQgJACgFAFQgHAEAAAKQABAJAEADQAFAEAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_476.setTransform(414.8,270.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AgsBFIAAhnIAAgRIgBgPIAPAAIACARIAAAAQAFgJAJgFQAIgFALAAQAMAAAJAGQAKAGAEALQAGALAAAPQAAARgGALQgHALgKAGQgKAGgLAAQgIAAgJgEQgHgEgEgHIgBAAIAAA0gAgQgwQgHAGgDAKIAAADIgBAEIAAAQIAAAEIABAEQADAIAHAFQAHAGAJAAQAIAAAHgFQAGgEAEgJQADgHAAgLQAAgKgCgIQgEgIgGgFQgHgFgJAAQgJAAgHAGg");
	this.shape_477.setTransform(404.85,272.575);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AgZBCQgGgEgDgGQgDgGgBgHQABgSAPgJQAOgJAbAAIAAgCQABgFgCgEQgBgFgFgEQgFgDgIgBQgHAAgGACQgHACgGADIgDgLQAFgEAJgCQAIgDAIAAQAPABAIAFQAIAGADAJQADAJAAAJIAAAkIAAAMIACALIgQAAIgBgMIgBAAQgFAGgHAEQgHAEgKAAQgJAAgIgEgAABAUQgJACgFAFQgHAEAAAKQAAAIAFAEQAFAEAHAAQAIAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIAQgcIAUAAIgYAcg");
	this.shape_478.setTransform(389.5,268.725);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_479.setTransform(380.275,270.7);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AgZBCQgGgEgDgGQgDgGAAgHQgBgSAQgJQAPgJAaAAIAAgCQABgFgCgEQgBgFgFgEQgEgDgJgBQgHAAgHACQgHACgFADIgDgLQAFgEAJgCQAIgDAIAAQAPABAIAFQAIAGADAJQADAJAAAJIAAAkIAAAMIABALIgPAAIgBgMIgCAAQgEAGgHAEQgIAEgJAAQgJAAgIgEgAABAUQgJACgFAFQgHAEAAAKQABAIAEAEQAFAEAHAAQAIAAAGgFQAGgEACgHIABgDIAAgCIAAgRQgKAAgJABgAgHgpIAQgcIAUAAIgYAcg");
	this.shape_480.setTransform(370.5,268.725);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_481.setTransform(362.575,269.425);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgTAxQgGgCgFgDIADgNIALAEQAGACAHAAQAJAAAEgEQAEgDABgHQAAgGgEgEQgFgEgJgDQgNgGgFgFQgHgIAAgIQAAgIAEgHQAEgGAIgEQAHgDAKAAQAHAAAGACIALADIgFAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAFAEQAEADAIADQANAFAGAGQAGAHABALQAAAMgKAIQgJAJgQAAQgJAAgHgCg");
	this.shape_482.setTransform(355.4,270.7);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_483.setTransform(345.925,270.7);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgDQgDgJgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_484.setTransform(334.475,268.55);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_485.setTransform(322.5286,268.8);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_486.setTransform(316.825,269.425);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AgSAxQgIgCgEgDIADgNIALAEQAGACAHAAQAIAAAFgEQAFgDAAgHQAAgGgFgEQgEgEgIgDQgNgGgGgFQgHgIAAgIQAAgIAEgHQAEgGAIgEQAHgDAKAAQAHAAAGACIAKADIgEAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAEAEQAFADAJADQAMAFAGAGQAHAHAAALQAAAMgKAIQgJAJgQAAQgJAAgGgCg");
	this.shape_487.setTransform(309.65,270.7);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_488.setTransform(300.175,270.7);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AATBHIgggvIgJAKIAAAlIgSAAIAAiNIASAAIAABYIAAAAIAEgFIAFgGIAbggIAVAAIgkAnIAqA5g");
	this.shape_489.setTransform(290.825,268.45);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AgmAxIAAgKIArg5IAGgHIAGgHIAAgBIgzAAIAAgOIBJAAIAAAKIgrA4IgGAHIgGAIIAAAAIA3AAIAAAPg");
	this.shape_490.setTransform(281.025,270.7);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AgWBDQgIgEgFgJQgFgJAAgRIAAg4IARAAIAAA1QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgCADgEQAEgDABgEIABgEIABgFIAAg7IARAAIAABGIABAOIAAAMIgPAAIgBgQIgBAAIgGAJQgFAEgGACQgGADgIAAQgIAAgHgDgAgIgpIARgcIATAAIgYAcg");
	this.shape_491.setTransform(271.275,268.725);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_492.setTransform(256.025,270.8);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_493.setTransform(247.125,269.425);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgEgGABgHQAAgSAOgIQAPgJAbAAIAAgCQABgEgCgFQgBgGgFgDQgFgEgIgBQgHAAgHACQgGACgFAEIgFgMQAHgDAIgDQAIgCAIAAQAPAAAIAFQAIAGADAKQADAJAAAJIAAAjIAAAMIABAMIgPAAIgCgNIgBAAQgDAGgIAEQgHAFgKAAQgJAAgIgFgAABAAQgIACgHAFQgFAEgBAKQAAAJAFADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQQgKAAgJAAg");
	this.shape_494.setTransform(238.9,270.7);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_495.setTransform(229.675,270.7);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AAYBHIAAg4QAAgIgDgGQgCgFgFgFQgFgDgIAAQgHAAgHAFQgGAFgCAHIgBADIgBAFIAAA6IgRAAIAAiNIARAAIAAA8IABAAIAFgHIAHgFIAJgEQADgBAFAAQAFAAAGACQAGACAFAEQAFAFAEAIQADAHAAANIAAA5g");
	this.shape_496.setTransform(219.575,268.45);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AgOAsQgLgGgGgLQgGgLAAgPQAAgOAGgMQAHgLALgHQAMgGAPAAQAIAAAGABIAKAEIgEANIgIgDIgMgCQgLABgHAEQgIAFgDAJQgEAIAAAJQAAALAEAIQAEAIAIAFQAHAEAJAAQAIAAAFgBIAJgEIADAOIgLADQgHACgKAAQgOAAgKgGg");
	this.shape_497.setTransform(209.625,270.725);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AgZBCQgGgEgDgGQgDgGAAgHQgBgSAQgJQAPgJAaAAIAAgCQABgFgCgEQgBgFgFgEQgEgDgJgBQgHAAgHACQgHACgFADIgDgLQAFgEAJgCQAIgDAIAAQAPABAIAFQAIAGADAJQADAJAAAJIAAAkIAAAMIABALIgPAAIgBgMIgCAAQgEAGgHAEQgIAEgJAAQgJAAgIgEgAABAUQgJACgFAFQgHAEAAAKQABAIAEAEQAFAEAHAAQAIAAAGgFQAGgEACgHIABgDIAAgCIAAgRQgKAAgJABgAgHgpIAQgcIAUAAIgYAcg");
	this.shape_498.setTransform(199.95,268.725);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AgmAxIAAgKIArg5IAGgHIAGgHIAAgBIgzAAIAAgOIBJAAIAAAKIgrA4IgGAHIgGAIIAAAAIA3AAIAAAPg");
	this.shape_499.setTransform(191.125,270.7);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AgUBAQgKgGgGgLQgGgLAAgPQAAgOAGgLQAFgMAKgHQALgGANgBQALABAIAEQAIAEAFAHQAEAHACAHQACAIAAAHIAAAFIgBADIhDAAQAAAMAFAHQAFAIAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAEQgIACgLAAQgOAAgLgGgAAaAKQAAgFgCgGQgCgHgFgEQgGgFgKAAQgHAAgGAFQgGAEgDAHQgDAFgBAGIAzAAIAAAAgAgFgpIgTgcIANAAIALATIABAAIAMgTIANAAIgTAcg");
	this.shape_500.setTransform(177.625,268.725);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgDQgDgJgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_501.setTransform(166.625,268.55);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgEgGABgHQgBgSAPgIQAQgJAaAAIAAgCQABgEgCgFQgBgGgFgDQgEgEgJgBQgHAAgHACQgHACgFAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAGADAKQADAJAAAJIAAAjIAAAMIABAMIgPAAIgCgNIgBAAQgEAGgHAEQgIAFgJAAQgJAAgIgFgAABAAQgIACgHAFQgGAEAAAKQAAAJAFADQAFAEAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQQgKAAgJAAg");
	this.shape_502.setTransform(156.2,270.7);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AgtBFIAAhnIAAgRIAAgPIAPAAIABARIABAAQAFgJAJgFQAJgFAKAAQAMAAAJAGQAKAGAFALQAFALAAAPQAAARgGALQgGALgLAGQgKAGgLAAQgIAAgIgEQgIgEgFgHIAAAAIAAA0gAgPgwQgIAGgDAKIgBADIAAAEIAAAQIAAAEIABAEQACAIAIAFQAGAGAKAAQAJAAAGgFQAHgEADgJQAEgHAAgLQAAgKgEgIQgDgIgHgFQgGgFgJAAQgJAAgGAGg");
	this.shape_503.setTransform(146.25,272.575);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AgRBFIAAhgIARAAIAABggAgSgoIASgcIASAAIgXAcg");
	this.shape_504.setTransform(138.75,268.625);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AgVBFIAAhCIAAgPIgBgPIAPAAIABAUIABAAQADgKAGgGQAIgGAJAAIACABIADAAIAAARIgDgBIgDAAQgKAAgGAGQgFAGgCAJIgBAEIAAAFIAAAzgAgGgoIgTgcIAOAAIALATIAAAAIAMgTIANAAIgTAcg");
	this.shape_505.setTransform(132.675,268.625);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AgsBFIAAhnIAAgRIgBgPIAPAAIACARIAAAAQAFgJAJgFQAIgFALAAQAMAAAJAGQAKAGAEALQAGALAAAPQAAARgGALQgHALgKAGQgKAGgLAAQgIAAgJgEQgHgEgEgHIgBAAIAAA0gAgQgwQgHAGgDAKIAAADIgBAEIAAAQIAAAEIABAEQADAIAHAFQAHAGAJAAQAJAAAGgFQAGgEAEgJQADgHAAgLQAAgKgCgIQgEgIgGgFQgHgFgJAAQgIAAgIAGg");
	this.shape_506.setTransform(123.6,272.575);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("AgKBEIgsiGIASAAIAVBCIAIAZIAHAZIAAAAIAGgZIAIgZIAXhCIATAAIgwCGg");
	this.shape_507.setTransform(107.85,268.8);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEAEgEQADgDAEgBQAFABAEADQADAEAAAEQAAAFgDAEQgEADgFABQgEgBgEgDg");
	this.shape_508.setTransform(225.075,224.1);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("AgUBAQgKgGgGgLQgGgLAAgPQAAgOAGgLQAFgMAKgHQALgGANgBQALABAIAEQAIAEAFAHQAEAHACAHQACAIAAAHIAAAFIgBADIhDAAQAAAMAFAHQAFAIAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAEQgIACgLAAQgOAAgLgGgAAaAKQAAgFgCgGQgCgHgFgEQgGgFgKAAQgHAAgGAFQgGAEgDAHQgDAFgBAGIAzAAIAAAAgAgFgpIgTgcIANAAIALATIABAAIAMgTIANAAIgTAcg");
	this.shape_509.setTransform(217.875,218.325);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgDgGQgBgHgGgEQgEgDgJgBQgHABgHAFQgGAEgCAIIgBAEIgBAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAQACgFAFgEQAFgEAGgCQAGgDAIAAQAEAAAHACQAFABAFAFQAFAEAEAIQADAJAAAMIAAA5g");
	this.shape_510.setTransform(207.3,220.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgCgGQgDgHgFgEQgFgDgHgBQgJABgGAFQgGAEgCAIIgBAEIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAPAAIABAQIABAAQACgFAEgEQAEgEAHgCQAGgDAHAAQAGAAAGACQAFABAGAFQAEAEAEAIQADAJAAAMIAAA5g");
	this.shape_511.setTransform(196.2,220.2);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_512.setTransform(185.675,220.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgEQgDgIgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_513.setTransform(174.675,218.15);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AgVBEQgJgCgGgEIAFgNQAEADAIACQAHACAJABQAIgBAHgDQAHgDAEgIQAEgHAAgMIAAgLIAAAAQgEAHgIAEQgIAFgKAAQgMAAgJgGQgKgHgFgKQgFgJAAgOQAAgQAGgMQAGgLAKgHQAKgFALAAQAIAAAGACQAGADAEAEQAEADACAFIAAAAIABgPIAPAAIAAALIgBAQIAAA2QAAARgDALQgDAKgHAHQgIAGgJADQgJACgJAAQgIAAgJgCgAgSguQgIAKAAARQAAAJADAIQADAIAGAEQAHAEAIAAQAIAAAHgEQAHgFADgHIABgFIAAgFIAAgRIAAgEIgBgEQgCgIgHgFQgGgFgKgBQgLAAgIAKg");
	this.shape_514.setTransform(159.175,222.3);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#000000").s().p("AA0AyIAAg2QAAgOgFgIQgFgIgLAAQgHAAgGAFQgFAEgCAHIgBAEIgBAEIAAA8IgQAAIAAg6QAAgLgGgIQgFgHgJAAQgGAAgFADQgEACgDAEQgDAEgCAEIgBAFIAAAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAIAHgJQAEgEAGgDQAGgCAHAAQALAAAGAFQAHAFADAJIAAAAIAGgHIAFgGQAEgDAGgBQAEgCAIAAQAGgBAHAEQAIAEAFAIQAFAKAAAQIAAA5g");
	this.shape_515.setTransform(145.55,220.2);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("AgWA8QgKgIgFgPQgGgPAAgWQAAgVAGgOQAGgPAKgJQAKgHAMAAQAVAAALARQALARAAAgQAAAggMARQgLASgVAAQgNAAgJgHgAgSgnQgHAOAAAZQAAAaAHAOQAHAOALAAQAJgBAGgGQAGgHADgMQADgMAAgQQAAgPgDgMQgDgMgGgHQgGgGgJAAQgLAAgHANg");
	this.shape_516.setTransform(127.825,218.65);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#000000").s().p("AgWA8QgKgIgFgPQgGgPAAgWQAAgVAGgOQAGgPAKgJQAKgHAMAAQAVAAALARQALARAAAgQAAAggMARQgLASgVAAQgNAAgJgHgAgSgnQgHAOAAAZQAAAaAHAOQAHAOALAAQAJgBAGgGQAGgHADgMQADgMAAgQQAAgPgDgMQgDgMgGgHQgGgGgJAAQgLAAgHANg");
	this.shape_517.setTransform(117.575,218.65);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#000000").s().p("AAFBBIAAhwIgXAMIgCgOIAagPIAQAAIAACBg");
	this.shape_518.setTransform(106.45,218.65);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgDgGAAgHQgBgSAQgIQAPgJAaAAIAAgCQABgEgCgFQgBgGgFgDQgEgEgJgBQgHAAgHACQgHACgFAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAGADAJQADAKAAAJIAAAjIAAAMIABAMIgPAAIgBgNIgCAAQgEAGgHAEQgIAFgJAAQgJAAgIgFgAABAAQgJACgFAFQgHAEAAAKQABAJAEADQAFAEAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_519.setTransform(942.9,195.1);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgDgGQgCgHgEgEQgFgDgJgBQgIABgGAFQgGAEgCAIIgBAEIgBAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAQACgFAFgEQAFgEAGgDQAGgCAIAAQAFAAAFACQAGABAFAFQAFAEAEAIQAEAJAAAMIAAA5g");
	this.shape_520.setTransform(932.8,195);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_521.setTransform(920.6286,193.2);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_522.setTransform(915.925,192.85);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_523.setTransform(911.2286,193.2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AgTBEQgHgBgFgDIAEgOIALAFQAGACAHAAQAIAAAFgEQAEgEAAgGQABgGgEgEQgFgEgJgEQgNgFgFgHQgHgHAAgHQAAgIAEgHQAEgGAHgEQAIgEAJAAQAIAAAGACIALAEIgFANIgIgEQgFgBgHAAQgHAAgEADQgEAEAAAGQAAAFAFADQAEAEAIADQANAFAGAHQAGAHAAAKQAAANgJAIQgJAIgRAAQgIAAgHgCgAgEgpIgTgcIANAAIALATIABAAIALgTIANAAIgTAcg");
	this.shape_524.setTransform(904.95,193.125);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#000000").s().p("AgnBNIAHgDIAIgGIAIgIQAEgFADgGIABgDIAAgCIAAgCIgBgCIgkhZIATAAIAVA5IAEAKIACAKIADgKIAEgLIASg4IATAAIgaBFIgLAcIgKATQgFAIgHAFQgGAGgGACQgFADgEAAgAgHg+IAQgcIAUAAIgYAcg");
	this.shape_525.setTransform(896.45,195.225);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_526.setTransform(886.675,195.1);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#000000").s().p("AgmAxIAAgKIArg5IAGgHIAGgHIAAgBIgzAAIAAgOIBJAAIAAAKIgrA4IgGAHIgGAIIAAAAIA3AAIAAAPg");
	this.shape_527.setTransform(877.075,195.1);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_528.setTransform(863.075,195.2);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("AATBHIggguIgJAJIAAAlIgSAAIAAiNIASAAIAABYIAAAAIAEgFIAFgGIAbggIAVAAIgkAnIAqA5g");
	this.shape_529.setTransform(853.575,192.85);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_530.setTransform(843.275,195.1);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AgYBCQgHgEgDgGQgEgGAAgHQAAgSAPgJQAQgJAbAAIAAgCQAAgFgBgEQgCgFgFgEQgEgDgJgBQgHAAgGACQgIACgEADIgFgLQAHgEAIgCQAIgDAJAAQAOABAIAFQAIAGADAJQADAJAAAJIAAAkIABAMIABALIgQAAIgCgMIAAAAQgEAGgIAEQgHAEgKAAQgKAAgGgEgAABAUQgIACgHAFQgFAEgBAKQABAIAEAEQAFAEAGAAQAJAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIARgcIATAAIgZAcg");
	this.shape_531.setTransform(833.5,193.125);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgDQgDgJgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_532.setTransform(822.975,192.95);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_533.setTransform(807.875,195.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_534.setTransform(799.125,193.825);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_535.setTransform(790.425,195.2);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_536.setTransform(781.525,193.825);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_537.setTransform(769.075,195.1);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_538.setTransform(760.775,193.825);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#000000").s().p("AgSAxQgHgCgGgDIAFgNIAKAEQAGACAHAAQAJAAAEgEQAFgDgBgHQABgGgFgEQgDgEgKgDQgNgFgGgGQgGgIAAgIQAAgIAEgHQAEgGAHgEQAIgDAJAAQAIAAAGACIALADIgFAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAEAEQAFADAJADQAMAFAGAGQAHAHgBALQAAAMgJAIQgJAJgRAAQgHAAgHgCg");
	this.shape_539.setTransform(753.6,195.1);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("AgWBLIALgCQAFgDADgDQADgCAAgFQACgDAAgIIABgSIAAhQIASAAIAABXQAAAOgDAJQgDAKgGAGQgEAEgFADQgEACgGABIgKABgAAEhFQgDgDAAgEQAAgFADgDQADgEAFABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgFAAgDgDg");
	this.shape_540.setTransform(746.175,195.3);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#000000").s().p("AATBHIggguIgJAJIAAAlIgSAAIAAiNIASAAIAABYIAAAAIAEgFIAFgGIAbggIAVAAIgkAnIAqA5g");
	this.shape_541.setTransform(736.675,192.85);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgEgGAAgHQAAgSAPgIQAPgJAcAAIAAgCQAAgEgBgFQgCgGgFgDQgFgEgIgBQgHAAgGACQgIACgEAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAGADAJQADAKAAAJIAAAjIABAMIAAAMIgPAAIgCgNIgBAAQgDAGgIAEQgHAFgKAAQgKAAgGgFgAABAAQgIACgHAFQgFAEgBAKQABAJAEADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_542.setTransform(726.05,195.1);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#000000").s().p("AgtBFIAAhnIAAgRIAAgPIAQAAIABARIAAAAQAFgJAJgFQAJgFAKAAQAMAAAJAGQAJAGAGALQAFALAAAPQAAARgGALQgGALgKAGQgKAGgMAAQgJAAgIgEQgHgEgFgHIAAAAIAAA0gAgQgwQgHAGgDAKIgBADIAAAEIAAAQIAAAEIABAEQADAIAGAFQAIAGAJAAQAIAAAHgFQAHgEADgJQAEgHgBgLQAAgKgDgIQgDgIgGgFQgHgFgJAAQgIAAgIAGg");
	this.shape_543.setTransform(716.1,196.975);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("AgKALIAEgRIADgQIATgCIgGASIgGARIgGANIgNABIAFgOg");
	this.shape_544.setTransform(703.6,199.925);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#000000").s().p("AgVBEQgJgCgGgEIAFgNQAEADAIACQAHACAJABQAIgBAHgDQAHgDAEgIQAEgHAAgNIAAgKIAAAAQgEAHgIAEQgIAFgKAAQgMAAgJgGQgKgHgFgKQgFgJAAgOQAAgQAGgMQAGgLAKgHQAKgFALAAQAIAAAGACQAGADAEAEQAEADACAFIAAAAIABgPIAPAAIAAALIgBAQIAAA2QAAARgDALQgDAKgHAHQgIAGgJADQgJACgJAAQgIAAgJgCgAgSguQgIAKAAARQAAAJADAIQADAIAGAEQAHAEAIAAQAIAAAHgEQAHgFADgHIABgFIAAgFIAAgRIAAgEIgBgEQgCgIgHgFQgGgFgKgBQgLAAgIAKg");
	this.shape_545.setTransform(696.075,197.1);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgHAAgGAFQgFAEgDAHIgBAEIAAAEIAAA8IgRAAIAAg6QAAgLgEgIQgGgHgKAAQgFAAgFADQgEACgDAEQgDAEgBAEIgBAFIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAOAAIABAQIABAAIAHgJQAEgEAGgDQAFgCAJAAQAJAAAIAFQAFAFAEAJIABAAIAEgHIAGgGQAFgDAEgBQAFgCAHAAQAHgBAHAEQAIAEAFAIQAFAKAAAQIAAA5g");
	this.shape_546.setTransform(682.45,195);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#000000").s().p("AgWA8QgKgIgFgPQgGgPAAgVQAAgWAGgOQAGgPAKgJQAKgHAMAAQAVAAALARQALARAAAgQAAAggMARQgLASgVAAQgNAAgJgHgAgSgnQgHAOAAAaQAAAZAHAOQAHAOALAAQAJgBAGgGQAGgHADgMQADgMAAgQQAAgPgDgMQgDgMgGgHQgGgGgJgBQgLAAgHAOg");
	this.shape_547.setTransform(664.725,193.45);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("AgaA/QgJgCgEgDIAEgNQAEACAIADQAHACAJAAQAHAAAHgEQAHgDAEgGQAFgHAAgIQAAgNgJgIQgJgHgTAAIgKABIgIABIAJg/IA9AAIAAAPIgxAAIgFAhIAFgBIAGAAIAOACQAHACAGAEQAIADAFAIQAFAIAAANQAAAMgGAKQgGAKgLAHQgLAFgNAAQgLAAgIgDg");
	this.shape_548.setTransform(654.225,193.55);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_549.setTransform(640.125,195.1);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#000000").s().p("AgOAsQgLgGgGgLQgGgLAAgPQAAgOAGgMQAHgLALgHQAMgGAPAAQAIAAAGABIAKAEIgEANIgIgDIgMgCQgLABgHAEQgIAFgDAJQgEAIAAAJQAAALAEAIQAEAIAIAFQAHAEAJAAQAIAAAFgBIAJgEIADAOIgLADQgHACgKAAQgOAAgKgGg");
	this.shape_550.setTransform(630.825,195.125);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_551.setTransform(621.675,195.1);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#000000").s().p("AgYBCQgHgEgDgGQgDgGgBgHQABgSAPgJQAOgJAcAAIAAgCQAAgFgCgEQgBgFgFgEQgFgDgIgBQgHAAgGACQgHACgGADIgDgLQAFgEAJgCQAIgDAIAAQAPABAIAFQAIAGADAJQADAJAAAJIAAAkIABAMIABALIgQAAIgBgMIgBAAQgFAGgHAEQgIAEgJAAQgKAAgGgEgAABAUQgJACgFAFQgHAEAAAKQABAIAEAEQAFAEAHAAQAIAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIAQgcIAUAAIgYAcg");
	this.shape_552.setTransform(611.9,193.125);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgDQgDgJgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_553.setTransform(601.375,192.95);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_554.setTransform(587.025,195.1);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_555.setTransform(572.975,195.1);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_556.setTransform(563.375,195.1);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#000000").s().p("AgXAyIAAhCIAAgQIAAgOIAPAAIABATIAAAAQAEgKAGgGQAHgFAJAAIADAAIACAAIAAARIgDAAIgDgBQgJABgGAFQgGAHgBAJIgBAEIAAAFIAAAzg");
	this.shape_557.setTransform(555.325,195);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#000000").s().p("AgtBFIAAhnIAAgRIAAgPIAQAAIAAARIABAAQAFgJAJgFQAIgFALAAQAMAAAJAGQAJAGAGALQAFALAAAPQAAARgGALQgGALgKAGQgLAGgLAAQgJAAgHgEQgIgEgFgHIAAAAIAAA0gAgQgwQgHAGgDAKIgBADIAAAEIAAAQIAAAEIABAEQADAIAGAFQAIAGAJAAQAIAAAHgFQAGgEAEgJQADgHAAgLQAAgKgDgIQgDgIgHgFQgGgFgJAAQgJAAgHAGg");
	this.shape_558.setTransform(546.1,196.975);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AgWBLIALgCQAFgDADgDQADgCAAgFQACgDAAgIIABgSIAAhQIASAAIAABXQAAAOgDAJQgDAKgGAGQgEAEgFADQgEACgGABIgKABgAAEhFQgDgDAAgEQAAgFADgDQADgEAFABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgFAAgDgDg");
	this.shape_559.setTransform(536.625,195.3);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_560.setTransform(530.275,195.1);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#000000").s().p("AAhBEIgqhEIgNgWIgMgXIAAAAIABAaIAAAdIAAA6IgRAAIAAiGIAUAAIAqBDIANAXIALAUIAAAAIgBgaIgBgcIAAg4IARAAIAACGg");
	this.shape_561.setTransform(518.675,193.2);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEAEgEQADgDAEgBQAFABAEADQADAEAAAEQAAAFgDAEQgEADgFABQgEgBgEgDg");
	this.shape_562.setTransform(505.925,198.9);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_563.setTransform(498.375,195.2);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#000000").s().p("AAYAyIAAg4QAAgHgDgGQgCgHgEgEQgGgDgIgBQgIABgGAFQgGAEgCAIIgBAEIgBAEIAAA6IgRAAIAAhGIAAgOIgBgMIAQAAIABAQIAAAAQACgFAFgEQAFgEAGgDQAGgCAIAAQAFAAAFACQAGABAFAFQAFAEAEAIQAEAJAAAMIAAA5g");
	this.shape_564.setTransform(487.3,195);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_565.setTransform(479.3786,193.2);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_566.setTransform(474.675,192.85);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#000000").s().p("AgZAuQgGgDgDgHQgDgGAAgHQgBgSAQgIQAPgJAaAAIAAgCQABgEgCgFQgBgGgFgDQgEgEgJgBQgHAAgHACQgHACgFAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAGADAJQADAKAAAJIAAAjIAAAMIABAMIgPAAIgBgNIgCAAQgEAGgHAEQgIAFgJAAQgJAAgIgFgAABAAQgJACgFAFQgHAEAAAKQABAJAEADQAFAEAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_567.setTransform(467.25,195.1);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#000000").s().p("AgXAyIAAhCIAAgQIAAgOIAPAAIABATIAAAAQAEgKAGgGQAHgFAJAAIADAAIACAAIAAARIgDAAIgDgBQgJABgGAFQgGAHgBAJIgBAEIAAAFIAAAzg");
	this.shape_568.setTransform(460.075,195);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_569.setTransform(452.875,193.825);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#000000").s().p("AgXAyIAAhCIAAgQIAAgOIAPAAIABATIAAAAQAEgKAGgGQAHgFAJAAIADAAIACAAIAAARIgDAAIgDgBQgJABgGAFQgGAHgBAJIgBAEIAAAFIAAAzg");
	this.shape_570.setTransform(446.425,195);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_571.setTransform(437.625,195.1);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#000000").s().p("AgTAxQgGgCgFgDIADgNIALAEQAGACAHAAQAJAAAEgEQAEgDABgHQAAgGgFgEQgDgEgJgDQgOgFgFgGQgHgIAAgIQAAgIAEgHQAEgGAIgEQAHgDAKAAQAHAAAGACIAKADIgEAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAEAEQAFADAIADQANAFAGAGQAGAHABALQAAAMgKAIQgJAJgQAAQgIAAgIgCg");
	this.shape_572.setTransform(428.65,195.1);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#000000").s().p("AgQBFIAAhgIAQAAIAABggAgSgoIASgcIATAAIgYAcg");
	this.shape_573.setTransform(418.95,193.025);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#000000").s().p("AgOAsQgLgGgGgLQgGgLAAgPQAAgOAGgMQAHgLALgHQAMgGAPAAQAIAAAGABIAKAEIgEANIgIgDIgMgCQgLABgHAEQgIAFgDAJQgEAIAAAJQAAALAEAIQAEAIAIAFQAHAEAJAAQAIAAAFgBIAJgEIADAOIgLADQgHACgKAAQgOAAgKgGg");
	this.shape_574.setTransform(411.375,195.125);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_575.setTransform(401.275,195.1);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#000000").s().p("AA0AyIAAg2QAAgPgFgHQgFgIgLAAQgIAAgFAFQgFAEgCAHIgBAEIgBAEIAAA8IgQAAIAAg6QgBgLgEgIQgFgHgLAAQgFAAgFADQgEACgDAEQgDAEgBAEIgBAFIAAAEIAAA6IgSAAIAAhGIAAgOIAAgMIAOAAIACAQIAAAAIAHgJQAEgEAGgDQAFgCAIAAQAKAAAIAFQAFAFAEAJIAAAAIAGgHIAFgGQAEgDAFgBQAGgCAHAAQAGgBAHAEQAIAEAFAIQAFAKAAAQIAAA5g");
	this.shape_576.setTransform(387.45,195);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_577.setTransform(373.575,195.1);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#000000").s().p("AgtBFIAAhnIAAgRIAAgPIAPAAIABARIABAAQAFgJAJgFQAJgFAKAAQAMAAAJAGQAKAGAEALQAGALAAAPQAAARgGALQgGALgLAGQgKAGgLAAQgIAAgIgEQgIgEgFgHIAAAAIAAA0gAgPgwQgIAGgDAKIgBADIAAAEIAAAQIAAAEIABAEQACAIAIAFQAGAGAKAAQAJAAAGgFQAHgEADgJQAEgHAAgLQAAgKgEgIQgDgIgHgFQgGgFgJAAQgJAAgGAGg");
	this.shape_578.setTransform(362.7,196.975);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_579.setTransform(350.0786,193.2);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_580.setTransform(345.3786,193.2);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#000000").s().p("AgtBFIAAhnIAAgRIAAgPIAQAAIABARIAAAAQAFgJAJgFQAJgFAKAAQAMAAAJAGQAJAGAGALQAFALAAAPQAAARgGALQgHALgJAGQgKAGgMAAQgJAAgIgEQgHgEgFgHIAAAAIAAA0gAgQgwQgHAGgDAKIgBADIAAAEIAAAQIAAAEIABAEQADAIAGAFQAIAGAJAAQAIAAAHgFQAHgEADgJQAEgHgBgLQAAgKgDgIQgDgIgGgFQgHgFgJAAQgIAAgIAGg");
	this.shape_581.setTransform(337.65,196.975);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgDgGAAgHQAAgSAOgIQAPgJAcAAIAAgCQAAgEgBgFQgCgGgFgDQgFgEgIgBQgHAAgHACQgGACgFAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAGADAJQADAKAAAJIAAAjIAAAMIABAMIgPAAIgCgNIgBAAQgDAGgIAEQgHAFgKAAQgJAAgHgFgAABAAQgIACgHAFQgFAEgBAKQAAAJAFADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_582.setTransform(326.55,195.1);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#000000").s().p("AgXAyIAAhCIAAgQIAAgOIAPAAIABATIAAAAQAEgKAGgGQAHgFAJAAIADAAIACAAIAAARIgDAAIgDgBQgJABgGAFQgGAHgBAJIgBAEIAAAFIAAAzg");
	this.shape_583.setTransform(319.375,195);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_584.setTransform(310.575,195.1);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_585.setTransform(302.275,193.825);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#000000").s().p("AgWAuQgIgDgFgKQgFgJAAgRIAAg3IARAAIAAA0QAAAOAFAIQAFAJAMAAQAFAAAFgDQAEgBADgFQAEgDABgEIABgEIABgFIAAg6IARAAIAABFIABAOIAAANIgPAAIgBgQIgBAAIgGAIQgFAEgGADQgGADgIAAQgIgBgHgDg");
	this.shape_586.setTransform(289.325,195.2);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#000000").s().p("AgIAxIglhgIATAAIATA1IAFANIACAMIABAAIADgMIAFgNIATg1IASAAIgmBgg");
	this.shape_587.setTransform(279.025,195.1);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#000000").s().p("AgXAsQgLgFgGgMQgGgKAAgQQAAgPAGgMQAHgLALgHQAKgFANAAQAOgBAKAHQALAGAGALQAFALAAAPQAAARgHALQgHAMgLAFQgLAGgLAAQgNAAgKgHgAgQgeQgGAFgDAIQgDAJAAAIQAAALADAIQAEAJAHAFQAGAEAIAAQAJAAAGgEQAHgFAEgJQADgIAAgLQAAgHgCgJQgDgJgHgFQgGgGgLAAQgJAAgHAGg");
	this.shape_588.setTransform(268.825,195.1);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#000000").s().p("AgYBCQgKgGgFgLQgGgLAAgPQAAgQAGgKQAGgNAKgFQAKgHAMAAQAKAAAHAFQAIAEADAGIAAAAIAAg6IASAAIAAB0IAAAOIABALIgQAAIgBgRIAAAAQgEAIgJAGQgIAFgLAAQgMAAgJgGgAgNgKQgHAGgDAHQgEAJAAAKQAAAKADAIQADAIAHAFQAGAFAJAAQAJAAAHgGQAHgFADgKIAAgEIAAgDIAAgRIAAgEIAAgDQgDgJgGgFQgHgGgKAAQgIAAgGAEg");
	this.shape_589.setTransform(257.375,192.95);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#000000").s().p("AgXAyIAAhCIAAgQIAAgOIAPAAIABATIAAAAQAEgKAGgGQAHgFAJAAIADAAIACAAIAAARIgDAAIgDgBQgJABgGAFQgGAHgBAJIgBAEIAAAFIAAAzg");
	this.shape_590.setTransform(249.525,195);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgDgGAAgHQAAgSAOgIQAPgJAcAAIAAgCQAAgEgBgFQgCgGgFgDQgFgEgIgBQgHAAgHACQgGACgFAEIgFgMQAHgDAIgDQAIgCAJAAQAOAAAIAFQAIAGADAJQADAKAAAJIAAAjIAAAMIABAMIgPAAIgCgNIgBAAQgDAGgIAEQgHAFgKAAQgJAAgHgFgAABAAQgIACgHAFQgFAEgBAKQAAAJAFADQAFAEAGAAQAJAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_591.setTransform(240.6,195.1);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#000000").s().p("AAYBHIAAg4QAAgIgDgGQgCgFgFgFQgFgDgIAAQgHAAgHAFQgGAFgCAHIgBADIgBAFIAAA6IgRAAIAAiNIARAAIAAA8IABAAIAFgHIAHgFIAJgEQADgBAFAAQAFAAAGACQAGACAFAEQAFAFAEAIQADAHAAANIAAA5g");
	this.shape_592.setTransform(230.525,192.85);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#000000").s().p("AgOAsQgLgGgGgLQgGgLAAgPQAAgOAGgMQAHgLALgHQAMgGAPAAQAIAAAGABIAKAEIgEANIgIgDIgMgCQgLABgHAEQgIAFgDAJQgEAIAAAJQAAALAEAIQAEAIAIAFQAHAEAJAAQAIAAAFgBIAJgEIADAOIgLADQgHACgKAAQgOAAgKgGg");
	this.shape_593.setTransform(220.575,195.125);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_594.setTransform(213.6286,193.2);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#000000").s().p("AAaBEIgEgLIgFgVQgDgOgGgGQgHgGgKgBIgRAAIAAA7IgRAAIAAiEIAQgCIARgBQANAAAKADQAKACAFAGQAGAFACAGQADAHAAAIQAAAJgEAGQgCAHgHAFQgFAEgHACIAAABQAIACAEAHQAFAHADALIAGAXIAEAOgAgTg1IgHABIAAAxIASAAQANAAAJgHQAHgHABgLQAAgNgJgGQgIgHgNAAIgLABg");
	this.shape_595.setTransform(206.25,193.175);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#000000").s().p("AgUAsQgKgGgGgLQgGgKAAgQQAAgNAGgLQAFgMAKgIQALgGANAAQALAAAIAEQAIAFAFAGQAEAIACAHQACAIAAAHIAAAEIgBAEIhDAAQAAALAFAIQAFAHAHADQAHAEAIAAQAKAAAGgCIALgDIADAMIgNAFQgIACgLAAQgOAAgLgHgAAagJQAAgFgCgGQgCgIgFgEQgGgEgKgBQgHABgGAEQgGAEgDAHQgDAHgBAFIAzAAIAAAAg");
	this.shape_596.setTransform(191.125,195.1);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#000000").s().p("AABA9QgEgCgDgDQgDgEgCgGQgCgHAAgIIAAg0IgPAAIAAgOIAPAAIAAgXIARgEIAAAbIAZAAIAAAOIgZAAIAAAzQgBAJAEAFQADAFAHAAIAGgBIAEAAIABANIgHACIgJAAQgGAAgFgCg");
	this.shape_597.setTransform(182.825,193.825);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#000000").s().p("AgTAxQgHgCgEgDIADgNIALAEQAGACAHAAQAIAAAFgEQAEgDABgHQAAgGgFgEQgDgEgJgDQgOgFgFgGQgHgIAAgIQAAgIAEgHQAEgGAIgEQAHgDAKAAQAHAAAGACIAKADIgEAOIgIgFQgFgBgHAAQgHAAgEAEQgEAEAAAFQAAAGAEAEQAFADAJADQAMAFAGAGQAHAHAAALQAAAMgKAIQgJAJgQAAQgIAAgIgCg");
	this.shape_598.setTransform(175.65,195.1);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#000000").s().p("AgWBLIALgCQAFgDADgDQADgCAAgFQACgDAAgIIABgSIAAhQIASAAIAABXQAAAOgDAJQgDAKgGAGQgEAEgFADQgEACgGABIgKABgAAEhFQgDgDAAgEQAAgFADgDQADgEAFABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgFAAgDgDg");
	this.shape_599.setTransform(168.225,195.3);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_600.setTransform(160.2286,193.2);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#000000").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_601.setTransform(155.525,192.85);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#000000").s().p("AgIBEIAAhgIARAAIAABggAgHgwQgDgDAAgEQAAgFADgDQADgEAEABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_602.setTransform(150.8286,193.2);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#000000").s().p("AgWBLIALgCQAFgDADgDQADgCAAgFQACgDAAgIIABgSIAAhQIASAAIAABXQAAAOgDAJQgDAKgGAGQgEAEgFADQgEACgGABIgKABgAAEhFQgDgDAAgEQAAgFADgDQADgEAFABQAFgBADAEQADADAAAFQAAAEgDADQgDADgFAAQgFAAgDgDg");
	this.shape_603.setTransform(145.025,195.3);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#000000").s().p("AgZBCQgGgEgDgGQgEgGABgHQAAgSAOgJQAPgJAbAAIAAgCQABgFgCgEQgBgFgFgEQgFgDgIgBQgHAAgHACQgGACgFADIgFgLQAHgEAIgCQAIgDAIAAQAPABAIAFQAIAGADAJQADAJAAAJIAAAkIAAAMIABALIgPAAIgCgMIgBAAQgDAGgIAEQgHAEgKAAQgJAAgIgEgAABAUQgIACgHAFQgFAEgBAKQAAAIAFAEQAFAEAGAAQAJAAAGgFQAGgEACgHIABgDIAAgCIAAgRIgTABgAgHgpIAQgcIAUAAIgZAcg");
	this.shape_604.setTransform(138.55,193.125);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#000000").s().p("AAYBHIAAg4QAAgIgDgGQgCgFgFgFQgFgDgIAAQgHAAgHAFQgGAFgCAHIgBADIgBAFIAAA6IgRAAIAAiNIARAAIAAA8IABAAIAFgHIAHgFIAJgEQADgBAFAAQAFAAAGACQAGACAFAEQAFAFAEAIQADAHAAANIAAA5g");
	this.shape_605.setTransform(128.475,192.85);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#000000").s().p("AgYAuQgHgDgDgHQgDgGgBgHQABgSAPgIQAOgJAcAAIAAgCQAAgEgCgFQgBgGgFgDQgFgEgIgBQgHAAgGACQgHACgGAEIgDgMQAFgDAJgDQAIgCAIAAQAPAAAIAFQAIAGADAJQADAKAAAJIAAAjIABAMIABAMIgQAAIgBgNIgBAAQgFAGgHAEQgIAFgJAAQgKAAgGgFgAABAAQgJACgFAFQgHAEAAAKQABAJAEADQAFAEAHAAQAIAAAGgEQAGgFACgGIABgEIAAgCIAAgQIgTAAg");
	this.shape_606.setTransform(117.8,195.1);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#000000").s().p("AgwBEIAAgLIBKhsIAAgBIhEAAIAAgOIBaAAIAAALIhJBrIAAABIBKAAIAAAPg");
	this.shape_607.setTransform(107.725,193.2);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#003667").s().p("AhBB0QgbgbAAguQAAgTAGgSQAGgRAMgPQAMgQATgJQASgJAZAAQAfAAATAPQAUAOAIAWQAJAUAAAZIgBAOIgBAKIh9AAQABANAIAIQAIAIAMAEQALAFAOAAQAQgBANgCIAZgFIAIAoQgPAHgSACQgSADgUABQgxgBgbgagAAlATQAAgIgDgJQgDgIgIgHQgHgHgOAAQgMAAgIAHQgIAGgEAIQgEAJAAAJIBHAAIAAAAgAgThQIgng9IAnAAIATAjIABAAIAUgjIAoAAIgoA9g");
	this.shape_608.setTransform(432.9763,130.7);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#003667").s().p("AgUCJQgPgHgLgSIAAAAIgDAcIgzAAIABgaIAAghIAAjgIA9AAIAABwIABAAQAIgNAPgHQAPgIAUAAQAYAAARAMQATAMAKAWQAKAWAAAeQAAAjgNAXQgNAYgUALQgUAMgXAAQgQAAgQgHgAgYgEQgKAHgDAOIgBAFIAAAGIAAAdQAAAGABAEQADANAJAIQAKAIAOAAQASAAALgOQAMgPgBgaQABgPgFgMQgEgNgKgGQgKgHgMAAQgNAAgKAIg");
	this.shape_609.setTransform(410.9,130.575);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#003667").s().p("AgdCCQgYgMgMgXQgNgVAAggQAAgdANgVQANgYAZgOQAYgOAkAAQAMAAAMABQAMACAKAFIgJAtQgGgDgJgCQgIgCgLAAQgZABgNAOQgOAPAAAYQAAASAIANQAGALAMAHQAMAGAOAAQAMAAAIgCIAQgEIAHAtQgJAEgOACQgOACgRABQgggBgWgMgAgFhQIgng9IAnAAIAUAjIABAAIAUgjIAnAAIgnA9g");
	this.shape_610.setTransform(389.65,130.7);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#003667").s().p("AhBB0QgbgbAAguQAAgTAGgSQAGgRAMgPQAMgQATgJQASgJAZAAQAfAAATAPQAUAOAIAWQAJAUAAAZIgBAOIgBAKIh9AAQABANAIAIQAIAIAMAEQALAFAOAAQAQgBANgCIAZgFIAIAoQgPAHgSACQgSADgUABQgxgBgbgagAAlATQAAgIgDgJQgDgIgIgHQgHgHgOAAQgMAAgIAHQgIAGgEAIQgEAJAAAJIBHAAIAAAAgAgUhQIAig9IA4AAIgxA9g");
	this.shape_611.setTransform(369.9763,130.7);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#003667").s().p("AgdCOIAAkbIA7AAIAAEbg");
	this.shape_612.setTransform(353.825,130.35);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#003667").s().p("AgeBiIhIjDIBDAAIAaBbIAGAXIAEAYIABAAIAGgYIAFgXIAZhbIBAAAIhJDDg");
	this.shape_613.setTransform(329.7,134.775);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#003667").s().p("AhBBLQgbgaAAguQAAgSAGgSQAGgTAMgPQAMgPATgKQASgIAZgBQAfAAATAPQAUAOAIAWQAJAWAAAYIgBAOIgBAKIh9AAQABAMAIAIQAIAJAMAEQALAEAOAAQAQAAANgCIAZgGIAIApQgPAGgSADQgSADgUAAQgxAAgbgbgAAlgVQAAgIgDgJQgDgIgIgHQgHgHgOAAQgMAAgIAHQgIAGgEAIQgEAJAAAJIBHAAIAAAAg");
	this.shape_614.setTransform(300.5763,134.75);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#003667").s().p("AgeBaQgXgMgNgXQgMgWAAgfQAAgcAMgXQANgYAZgOQAZgNAkgBQAMAAAMACQAMACAKAEIgKAtQgFgDgIgBQgJgCgMAAQgYAAgNAPQgOAPAAAYQABASAGAMQAIAMAKAGQANAGAOABQALAAAJgCIAPgFIAHAtQgIAEgOADQgOACgSAAQgeAAgYgMg");
	this.shape_615.setTransform(281.6,134.75);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#003667").s().p("Ag7BdQgOgIgIgNQgHgOAAgQQAAgZAOgRQAOgQAagIQAagIAiAAIAAgCQAAgGgDgGQgDgFgHgEQgIgEgOAAQgPAAgPAEQgOAEgKAGIgLgnQAKgGAUgFQATgGAaAAQAgAAATAMQATALAIATQAIATAAAXIAABDIAAAbIACAVIg2AAIgEgUIgBAAQgKAMgOAGQgOAGgRAAQgUAAgOgJgAAAAIQgNADgIAGQgHAHAAAMQAAAMAHAGQAGAFALAAQAKAAAJgGQAIgHADgJIABgFIABgGIAAgVIgFAAQgOAAgJADg");
	this.shape_616.setTransform(261.375,134.775);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#003667").s().p("AAYCOIguhQIgQATIAAA9Ig8AAIAAkbIA8AAIAACqIABAAIAHgMIAHgMIAng5IBJAAIhFBOIBPB0g");
	this.shape_617.setTransform(241.75,130.35);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#003667").s().p("AgeCMIAAjCIA8AAIAADCgAgXhXQgIgIAAgOQAAgNAIgIQAJgJAOAAQAOAAAJAJQAJAIAAANQAAAOgJAIQgJAJgOAAQgOAAgJgJg");
	this.shape_618.setTransform(223.975,130.5);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#003667").s().p("AgdCOIAAkbIA7AAIAAEbg");
	this.shape_619.setTransform(212.925,130.35);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#003667").s().p("AhjCMIAAjRIAAgjIgBgeIA0AAIADAbIABAAQALgQAQgIQARgIAUAAQAWABASALQATAMALAWQALAXAAAfQAAAjgNAWQgNAYgUALQgUAMgWAAQgRgBgNgGQgNgGgHgKIgBAAIAABigAgYhSQgKAIgDAOIgBAFIAAAGIAAAaIAAAHIABAGQADALAKAIQAJAIAOABQATgBALgOQALgOAAgZQAAgQgFgMQgEgNgKgHQgJgHgMAAQgOAAgKAJg");
	this.shape_620.setTransform(195.975,138.525);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#003667").s().p("ABZBkIAAhpQAAgVgHgNQgHgLgPAAQgKAAgHAHQgIAFgCAJIgCAIIgBAIIAABxIg6AAIAAhtQAAgSgHgMQgHgLgOAAQgMAAgHAIQgHAGgCAIIgCAHIgBAIIAABxIg7AAIAAiEIAAgiIgBgcIAyAAIAEAaIABAAQADgGAIgIQAHgHAMgFQAMgEAQgBQAUAAAOAJQANAJAGAPIABAAQAFgHAHgGQAHgGAGgEQAJgFAIgCQAKgDAKAAQAUAAAOAJQAPAKAJASQAIATABAdIAAByg");
	this.shape_621.setTransform(166.3,134.55);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#003667").s().p("Ag0BaQgWgMgOgWQgNgXAAggQAAgeANgXQANgYAXgMQAYgNAeAAQAeAAAXANQAWAMANAXQAMAWAAAeQAAAigPAYQgPAXgXALQgXALgaAAQgdAAgXgMgAgWgxQgIAIgEAOQgEANAAAOQAAARAEANQAFANAJAIQAJAHAMAAQASAAAKgQQAKgQAAgaQAAgOgDgNQgEgOgJgIQgJgJgNAAQgOAAgJAJg");
	this.shape_622.setTransform(137.575,134.775);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#003667").s().p("AAnCHIhBh1IgXAdIAABYIg8AAIAAkNIA8AAIAAB3IABAAIAJgPIAKgOIA8haIBLAAIhaBzIBeCag");
	this.shape_623.setTransform(115.875,131.075);

	this.instance = new lib.KomplikaceCelek();
	this.instance.setTransform(1440.15,375.25,1.3615,1.3615,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(363));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1060.2,643,568.3,-58);
// library properties:
lib.properties = {
	id: '408130C45A2AB04CA835BB0692872F7D',
	width: 1920,
	height: 1080,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
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
an.compositions['408130C45A2AB04CA835BB0692872F7D'] = {
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