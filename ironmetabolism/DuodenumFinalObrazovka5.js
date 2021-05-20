(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.ZlutaProuzkovana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD61C").s().p("AnaOyIgDAAQgFgBgCgDQgDgCgBgFQABgEADgCQACgDAFgBIADAAIA4AAQAEABADADQADACAAAEQAAAFgDACQgDADgEABgAodOlQgdgMgYgXQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQAVAUAZAKQAEACACAEQABADgBAEQgCAEgEACIgDABIgEgBgApzNUQgEgBgCgDQgOgdgDghQAAgEADgDQACgDAEAAQAEgBADADQAEADAAAEQACAdANAZQACADgCAEQgBAEgDACIgFABIgDgBgAqILdQgDgDAAgFIAAg8QAAgEADgCQADgDAEgBQAEABADADQADACAAAEIAAA8QAAAFgDADQgDACgEAAQgEAAgDgCgAqIJlQgDgDAAgEIAAg9QAAgEADgDQADgCAEgBQAEABADACQADADAAAEIAAA9QAAAEgDADQgDACgEABQgEgBgDgCgAqIHsQgDgCAAgFIAAg7QAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAAA7QAAAFgDACQgDADgEABQgEgBgDgDgAqIF1QgDgDAAgFIAAg8QAAgEADgCQADgDAEgBQAEABADADQADACAAAEIAAA8QAAAFgDADQgDACgEAAQgEAAgDgCgAqID9QgDgDAAgEIAAg9QAAgEADgDQADgCAEgBQAEABADACQADADAAAEIAAA9QAAAEgDADQgDACgEABQgEgBgDgCgAqICEQgDgCAAgFIAAg7QAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAAA7QAAAFgDACQgDADgEABQgEgBgDgDgAqIANQgDgDAAgFIAAg7QAAgEADgCQADgDAEgBQAEABADADQADACAAAEIAAA7QAAAFgDADQgDACgEAAQgEAAgDgCgAqIhqQgDgDAAgEIAAg9QAAgEADgDQADgCAEgBQAEABADACQADADAAAEIAAA9QAAAEgDADQgDACgEABQgEgBgDgCgAqIjjQgDgCAAgFIAAg7QAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAAA7QAAAFgDACQgDADgEABQgEgBgDgDgAqIlaQgDgDAAgFIAAg8QAAgEADgCQADgDAEgBQAEABADADQADACAAAEIAAA8QAAAFgDADQgDACgEAAQgEAAgDgCgAqInSQgDgDAAgEIAAg9QAAgEADgDQADgCAEgBQAEABADACQADADAAAEIAAA9QAAAEgDADQgDACgEABQgEgBgDgCgAqIpLQgDgCAAgFIAAg7QAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAAA7QAAAFgDACQgDADgEABQgEgBgDgDgAqIrCQgDgDAAgFIAAgKQAAgbAHgYQABgEAEgCQADgCAEABQAEABACAEQACADgBAEQgGAVAAAZIAAAKQAAAFgDADQgDACgEAAQgEAAgDgCgApksxQgEgDgBgEQAAgEACgEQAHgJAJgIIAAAAQAPgQASgLQADgCAFABQADABACAEQADADgBAEQgBAEgEACQgPAKgOAOIAAAAIgOAPQgCAEgEABIgCAAQgDAAgCgCgAJ7tIQgDgDAAgEIAAgiIg9AAQgEAAgDgDQgCgDgBgEQABgEACgDQADgDAEAAIA9AAIAAghQAAgFADgCQADgDAEgBQAEABADADQADACAAAFIAABXQAAAEgDADQgDADgEAAQgEAAgDgDgAoAtwQgDgCgBgEQgBgEACgEQADgDADgBQARgDASAAIAbAAQAEAAADADQACADAAAEQAAAEgCADQgDADgEAAIgbAAQgQAAgOADIgDAAQgCAAgDgCgAHEtxQgFAAgDgDQgCgDAAgEQAAgEACgDQADgDAFAAIA8AAQAEAAACADQADADABAEQgBAEgDADQgCADgEAAgAFMtxQgFAAgCgDQgDgDgBgEQABgEADgDQACgDAFAAIA7AAQAFAAACADQADADAAAEQAAAEgDADQgCADgFAAgADTtxQgEAAgDgDQgCgDgBgEQABgEACgDQADgDAEAAIA9AAQAEAAADADQACADAAAEQAAAEgCADQgDADgEAAgABctxQgFAAgDgDQgCgDAAgEQAAgEACgDQADgDAFAAIA8AAQAEAAACADQADADABAEQgBAEgDADQgCADgEAAgAgbtxQgFAAgCgDQgDgDgBgEQABgEADgDQACgDAFAAIA6AAQAFAAACADQADADAAAEQAAAEgDADQgCADgFAAgAiUtxQgEAAgDgDQgCgDgBgEQABgEACgDQADgDAEAAIA9AAQAEAAADADQACADAAAEQAAAEgCADQgDADgEAAgAkLtxQgFAAgDgDQgCgDAAgEQAAgEACgDQADgDAFAAIA8AAQAEAAACADQADADABAEQgBAEgDADQgCADgEAAgAmDtxQgFAAgCgDQgDgDgBgEQABgEADgDQACgDAFAAIA7AAQAFAAACADQADADAAAEQAAAEgDADQgCADgFAAg");
	this.shape.setTransform(65.2,94.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ZlutaProuzkovana, new cjs.Rectangle(0,0,130.4,189.1), null);


(lib.Path_102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDA2QgdgOgHgTQAHgmAdgYQAdgaAmAAQAnAAAeAaQAdAZAGAlQgGATgdAOQgeAOgnAAQgmAAgdgOg");
	this.shape.setTransform(10.375,6.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_102, new cjs.Rectangle(0,0,20.8,13.5), null);


(lib.Path_100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A84A4A").s().p("AiMB7QgngHgYgQQAdAHAjgBQAcAAAigHQA7gNA4ggQA/gjAlgmQAZgZAOgYQATgdAHgdQADAdgOAlQgMAfgWAcQgmAxhBAkQhAAjhAAGIgZACQgWAAgUgEg");
	this.shape.setTransform(20.3689,12.6529);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_100, new cjs.Rectangle(0,0,40.8,25.3), null);


(lib.Path_98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A84A4A").s().p("ABOB7QhAgFhAgjQhAghgpgyQgWgbgNgfQgQglAAgbQAKAbAUAdQARAYAYAYQApAoA8AfQA8AgA4ALQAfAGAfAAQAigBAdgKQgXATgmAIQgZAFgZAAIgSAAg");
	this.shape.setTransform(20.675,12.3329);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_98, new cjs.Rectangle(0,0,41.4,24.7), null);


(lib.Path_97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A84A4A").s().p("AiBAiQgggNgagVQgfgZgOgXQAXAUAeAPQAZAMAiAKQA6AQBBgBQBEgBA2gRQAggJAagPQAfgSATgVQgLAZgdAbQgbAWgfANQg6AbhKABIgFAAQhFAAg6gYg");
	this.shape.setTransform(23.3,5.8019);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_97, new cjs.Rectangle(0,0,46.6,11.6), null);


(lib.Path_94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#636363").s().p("AhSDQIAAmgIClAAIAAFvQAAAUgPAPQgPAOgUAAg");
	this.shape.setTransform(8.3,20.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_94, new cjs.Rectangle(0,0,16.6,41.7), null);


(lib.Path_93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#210202").s().p("AiGD/QgVAAgPgPQgOgPAAgUIAAl3IgDAAIABgJQACgagKgWIgHgOQALgLARgBIBPAAIABAAIAFAAIABAAIAJAAIAEgBICXAAIADAAIAAABIBSAAQARAAAMANQALALAAARIAAAqIgdAAIAAF3QAAAUgOAPQgPAPgVAAg");
	this.shape.setTransform(21.5625,28.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_93, new cjs.Rectangle(1.4,3.4,40.4,51), null);


(lib.Path_89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C73D3D").s().p("ADsCAQgMgGgvABIgsACQgegDgdgRQgpgZgVgHQg8gXgtACIgoAIQgJADgEAAQgHAAgJgPIglg2QgegrgKgTQgLgVgagUQgMgKgNgIQgEgEAGgCQAHgDAsARIA8AXQAkAMAqAZQAIAFAUASQAJAIAOgDIAZgKQAQgHADACIAaAZQARAQATACQAiADBHANQAFABAZAhQAaAhAXAIQAaAJAtAHQAFAKgGAFQgXAPgUAAQgMAAgKgGg");
	this.shape.setTransform(30.3456,13.4154);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_89, new cjs.Rectangle(0,0,60.8,26.9), null);


(lib.Path_88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C73D3D").s().p("ADJBfQgIAAgngKQgsgKgLgGQgIgEgdAAIgbACQgTgCgRgLQgagPgNgFQgmgOgqADQgWACgSAFQgIAAgDgCQgGgEgCgRQgDgggPgcQgHgNgQgNIgQgLQgBgBAAgBQAAAAAAAAQAAgBAAAAQABgBABAAQAEgCAcALIAlAOQARAGAfAbQAQAOANABQAHABANgCQAQAAAQAKQARAKAIABQAaACBIATQAXAJAKAQQAMAVAGAEQAMAKAnAFIAlAEIANAEQAEAEghAAIgIAAg");
	this.shape.setTransform(23.8202,9.5365);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_88, new cjs.Rectangle(0,0,47.7,19.1), null);


(lib.Path_87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAbQAGgPAIgKIAMgOQAIgMARgeIABAAQgNAjgPASQgKALgIASQgHARgKAKQAEgNAHgPg");
	this.shape.setTransform(3.175,5.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_87, new cjs.Rectangle(0,0,6.4,11.1), null);


(lib.Path_86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA6AUQgQgugYgFQgbgHguAQQgXAIgSAJIgFgDIA5gdQABgFgDgEQgEgJgNgCQgVgCgrARQABAAAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBQAKgFASgFQAVgIANAAQAogDAgALQARAGAiATQAdgFAYANQAMAHAGAHQADADgGABQgJgNgXgDQgYgEgPAIQAGAHAPBJIgHADQgDgWgHgYg");
	this.shape.setTransform(12.875,6.569);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_86, new cjs.Rectangle(0,0,25.8,13.2), null);


(lib.Path_84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAaAsQgHgOgHgIQgLgOgTgpQgOgfgIgJQAMANAEAHIARAiQAPAcAIALQAIALAFANIAMAeIgPgeg");
	this.shape.setTransform(4.2125,7.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_84, new cjs.Rectangle(0.2,0.2,8.100000000000001,14.700000000000001), null);


(lib.Path_83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAXAMQgVgHgjgVQgdgTgMgDQARAEAIAFIAgASQAcAQAMAEQAWAJAeAVQgigVgSgGg");
	this.shape.setTransform(7.625,3.9375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_83, new cjs.Rectangle(0.1,0.1,15.1,7.800000000000001), null);


(lib.Path_82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("ABDAUQgUgIgPgCQgggEgygVQgqgQgRgDQAXACALAEIAwARQApAPASADQATAEASAGQANAFAcANIgrgPg");
	this.shape.setTransform(11.325,3.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_82, new cjs.Rectangle(0.4,0.1,21.900000000000002,6.9), null);


(lib.Path_81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAaADQgYADgpgGQgjgFgNACQASgDAKAAIAmAFQAhADANgBQAQgBANACQAMABAWAEQgpgGgVACg");
	this.shape.setTransform(8.9375,0.6969);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_81, new cjs.Rectangle(0.2,0,17.5,1.4), null);


(lib.Path_80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AARAsQgGgCgLgLQgNgQgQgdQgOgZgIgJQALALAEAGIAQAcQAPAXAGAJQAJALALADQALAFAUABQgYgBgLgEg");
	this.shape.setTransform(5.325,4.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_80, new cjs.Rectangle(0.1,0.1,10.5,9.700000000000001), null);


(lib.Path_79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AADAdQgDgTgDg0QgDgogCgNQAEARABAKQAFBFAFAYQACANAAATIAAAnQgCgvgEgUg");
	this.shape.setTransform(0.9625,9.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_79, new cjs.Rectangle(0.1,0.1,1.7999999999999998,19.299999999999997), null);


(lib.Path_78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AA2AUQgQgOgJgDIgjgLQgYgGgJgFQgggSgOgFIAZAKQAEACAmANIAxARQALAFANAOQAQAQAOAIQgPgIgQgPg");
	this.shape.setTransform(8.85,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_78, new cjs.Rectangle(0.3,0.1,17.099999999999998,8.6), null);


(lib.Path_77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAlAAQgNgEgGAAQgkAEgLgCIgggDIAQAAIBAgBQAHABAMAFQANAFALACQgLgBgOgGg");
	this.shape.setTransform(6.6,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_77, new cjs.Rectangle(0.4,0,12.4,1.4), null);


(lib.Path_76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAmAAQgNgEgGAAQgkAEgLgBQgbgEgHAAIARAAQAHABA5gCQAIABAMAFQAOAFAKACQgLgBgOgGg");
	this.shape.setTransform(6.475,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_76, new cjs.Rectangle(0.2,0,12.600000000000001,1.4), null);


(lib.Path_75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAnAHQgNgHgFgBQglgCgLgEIgigJIATADQAHACA4AJQAIABALAHQAMAIAKADQgLgDgMgHg");
	this.shape.setTransform(6.2,1.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_75, new cjs.Rectangle(0,0,12.4,3.5), null);


(lib.Path_74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AgvAHIA+gPQAIgCAMADQAPADALgBQgLABgPgCQgOgCgGACIgXAGQgQAGgGAAIgeAEg");
	this.shape.setTransform(6.675,0.9594);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_74, new cjs.Rectangle(0.6,0,12.200000000000001,2), null);


(lib.Path_73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAkANQgKgJgGgCQgjgIgKgGIgfgPQALADAGAEQAGADA2ARQAHADAJAJQALALAJAFQgKgFgLgKg");
	this.shape.setTransform(5.8125,2.8375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_73, new cjs.Rectangle(0.1,0.1,11.5,5.6000000000000005), null);


(lib.Path_72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AgZACIAkgFQAEAAAHACQAIABAHAAQgHAAgIAAQgIgCgDAAQgUAFgGAAIgVABIALgCg");
	this.shape.setTransform(3.675,0.42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_72, new cjs.Rectangle(0,0.1,7.4,0.7000000000000001), null);


(lib.Path_71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("ABIANQgYgMgMgCIgvgFQgggEgMgDQgvgOgQgEIAgAHIA4AJIBDAMQAOADAXALQAZAOAUAHQgVgGgagNg");
	this.shape.setTransform(12.3375,3.2375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_71, new cjs.Rectangle(0.5,0.1,23.8,6.300000000000001), null);


(lib.Path_70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAyALQgQgIgJgCQgvgGgNgEIgvgOQAQADAIADIBUARQAJADAQAHQASAKAOAEQgOgEgTgJg");
	this.shape.setTransform(8.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_70, new cjs.Rectangle(0,0,16.6,4.8), null);


(lib.Path_69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAyALQgRgIgIgCQgvgGgOgFIgugNIBrAXQAKACAQAJQASAJAOAEQgOgEgTgJg");
	this.shape.setTransform(8.325,2.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_69, new cjs.Rectangle(0,0,16.7,4.9), null);


(lib.Path_68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAwAOQgPgKgIgDIgfgGQgWgFgHgDQghgNgLgDQAPADAJAEQAIADBJATQAKACAOALQAQAMAOAFQgOgFgSgLg");
	this.shape.setTransform(8.05,3.0625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_68, new cjs.Rectangle(0.1,0.1,15.9,6), null);


(lib.Path_67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAyAcQAGgYgKgGIghgUQgVgNgHgGQgegbgJgHIAVAQIAlAZIAsAeQAMAIgIAcQgFAWgNAWQANgiADgOg");
	this.shape.setTransform(5.6817,7.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_67, new cjs.Rectangle(0.2,0.1,11,15.3), null);


(lib.Path_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D1E1D").s().p("ApcJ2Qg4gVgSgQQhshkgxh7QgDgJgCgUQgDgVgEgOQieifAAinQAAgzAShPQAahwAPh2QAXgpB5hXQB4hWBEgbQAagKAQgFQAWgNAXAAQAKAAAuAGQBqAPCLgVQBcgODRBCQDCA9DcBoQDeBqCOBjQCcBtgDA9QgDBLhgBHQheBEhkAHQhqAHhxBMQgkAYgxApIhGA5QghAZhTAcQhqAgg8AUQg6ATj1BbQiyBBgkADIgVABQg7AAhAgXg");
	this.shape.setTransform(100.6278,65.2417);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_66, new cjs.Rectangle(0,0,201.3,130.6), null);


(lib.Path_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A83532").s().p("AnaDhQAtgUBAgaQAxgVAkgcQAWgQAngVQAsgWAXgDQDWgXBthCQAXgOArg5QAvg8AOgLQBAgwBJgfQBJgeAaAJQATAGAfANQAYAJAMgBIA/gIQgdAOhTAOQhWAPgcALQgXAJgcAOQg5AbgfAYQghAbguAfQhDAug2AYQgcALgpAMQg7ARgsAOQg6ARh/A0IiIA6QgzAVgxAQQg3ARhRAMQgpAGgeACQCrgZAlgRg");
	this.shape.setTransform(68.25,26.6462);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_64, new cjs.Rectangle(0,0,136.5,53.3), null);


(lib.Path_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C73D3D").s().p("AD/EAQAbg6AZgSQATgPgFgZQgDgQgTggQgqhHASgdQALgTAigUQAbgPgCgCQgXgKghAhQg7A4gMAJQgfAXg2ALIgvAtQguAsgqAGQhNAJg4gUIgmgPQgSgHgOAAQg+gBgMg3QgFgagDgKQgFgPgPACQgXADgWAuQgZAxgaAMQgogsgMgTQgTgdgDgiQgGhBA6gZQAsgTA4AIQAPgBAhgTIBVgzQASgKAWgRIAxgmQAmgeAgAOQAYALAGAUQAEATAJgCQADgBAOgLQAUgSARgJIAhgTQAIgGAEgOQAEgRAEgJQANgiA1gHQASgDAfACIAkACQAJgBAcANQAbAMAQALIAWAUQAMALAKAEQAMAEAJAPIAWAoQA3BqgOBPQgHAogiAdQgYAUgNAmQgGAQgNA1IgHAdQgGAQgKAHQggAWgkA7QgeAygaAGIgiAEQAYgcAhhFg");
	this.shape.setTransform(47.8799,35.3556);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_63, new cjs.Rectangle(0,0,95.8,70.7), null);


(lib.Path_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C73D3D").s().p("AFCBqQg+gNhDAAQgyAAg6gTQgdgPhYgYQhWgXgegCQgMgBgOgMQgQgSgLgKQgrgnhAAAQhPABAMgQQAMgPBCgDQBrgNAfAGQAgAFBdAYQAQADBJAAIBwgBIAcADIAWACQg4gBgeAHQgMADgxARQgfALgagBQgcgCgNAGQgLAFAGADIAuACQAuACAYAIQASAGAjAVQAfAUAWAFIA3AMQAZAFAPAJQAMAGBCAeQAaANgRAAQgNAAgkgHg");
	this.shape.setTransform(37.7021,11.2543);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_62, new cjs.Rectangle(0,0,75.5,22.6), null);


(lib.Path_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnaH2IgIgWQAWgNANgVQAEgHAZgZIAZgYQgIgIgNgBIgMABQgHAAgHAGIgLAMQgFAFgNAJIgGgDQAAgRARgRQAIgLAEgIIAAgGQglgfgbgPQgWgIglgFIgggDQgsAHgpgGQgngFgOgNQgMgKgLgHIgJgFIgZAlQgGAKgYAJIgBAlIgKgUIAAglQAUgIAIgNIAEgMQACgIABgMQAAgXgKgOQgEgHgjgNIg1gVIgBAcIgOgdIABgcIAxARIAvAOQAeAKAOANIAKARQAIANAOAJQASALAdAHQAfAIAYAAQgDgKgCgdIgBgbQACgJgXgNQgggTgPgRQgIgKgJgYIgQgnQgNgQgTgeQgSgYgIgPIgSgcIgLgPQgcgEgUgLQgJgFgRgOIAFgGQAxAaAygFQAGgBAvgNQAGgCAPgIQATgLAYgKQAagLAqAIQAsAJAIgDQATgFArgcQAvgdAggbIBIg6IA4guQAPgNgFgNQgBgEgOgRQhFgwg9gOIgwgEQgoADgoAUQgcANgnAbQgJAHhrAhQhwAigWAMQgtAXg4AjQgIgHAAgEQAagTAhgWQBBgrAhgNQBHgfAVgQQAMgIAsgVQAvgXANgJIBHgwQA6giAogGIBCABQBOADA1AKQAyAJA6AUQAyARARABIA9AEQAeABAWAEQAGABA3gDQAsgCAkAMQAkANAmAIQAkAJANgBIA9ACIAwgCQAmgCALACQAOADAqAEQArAEAJgBQBKgMAzAWIBGAhQAhAQAIgBIAogGQAfgEAMADQASAFBeAqIADBlIgXA8IAEh+QhLg4gVgJQgNgFgiAEIgrAGQgJABgsgTIhAgdQgfgNhVAMQgSADgugMIgygNQgJgBgtADIgsADIh2AEQgMAAglgKIgigLQg6gJgwABIgjAEQgKACACACQABACALABQAtAEARAIQAJAEARAQQASAQAVAcQAvADAZADQAqAEAnALQAcAHAjAFQAhAFAEABIAiAOQAhALAnAEQAoAFA3AXQAcAMATAKQALAEAlgGIA4gIQAVgBAeAIIA3APQAzANANAeQAHAPgDAMQgCACgGAtQgJA2gTAqQgdAggxAZIgsASQAYgtACgkIgBgdQgFgEgRgDQgTgEgGAFQgPANgiAEQgSACgOAGIgKAGQgCAMgNAVIgOAlQgSAqgVAXIg2AUQATgoAKgeIAHgWQAMgMAKglQABgIgEgJQgFgKgGgBQhRgNgnABQgYABgfALQgaAIgYAPQgWAQgNAHIhIAmIgnAfQgNALgFAJQgEAJAMABIAcABQALABAKAEQAOAGAVAFQAIACANgHQAbgQAVgIQAegNAsADQAXABAPAEIABAeQgBAigNAXIgeAPQAMgOgCghIgEgfIgGgBQgJgBgSAEQgPADgbASQghAWgLAFQgZAKgJACQgMACgNgGQgMgHgIAGQgGAFAEAJQAIAPAmANIAAAcQgCAigKAXIgnAUQAQgbADgeIABgYQgEAEgPAGIheAiQgPAHglAJIghAJQgfAJgkAGQAXgQAhgtIAZgmQAPgXAJgHQAOgNAOgLQAIgIAEgTQADgQgBghQAAgcAFgPQAIgVAZglQAUggACgMQABgPgEgvIgGgsQgHhTgcgXQgNgKgcACQgJAAgHgEIgZgRIg2geQgVgMgPgHQgagMgLAEQgKAEgSAVQgWAZgFAEQgLAIgLAGIgbAMQgVAMgOAiQgGARgDAPQgEAUgegHQgfgLgCAAQgdAEgpARQgLAGgjAJQgeAIgXAQQgRANgkANQgSACgPgDIgLgDQgogNgTgBQgWgBgYALQgOAHgIAQQgIAPAAAUQACAdANAbQARAjABAKQAEAOADATQABARACAHIAEAQQADAKAJAFQAJgPAJgJIAHgGIAIAHQgFAFgDAMQgDAKgBALQAMALAAAUQABAgAbAVQANALATAHQAjANA1AWIBHAgQAQAJBtAKQAkAEA/AAQANgOAZgHQAMgDALgBIAKAFQgdAKgPARQgHAJgCAHIgBAcQgFAhgQATIguASQAOgUADgdIAAgZQgLAAgigFIgegGQhJAkgSAGQgLAEgOAIQgRAKgDAFQgFAIgXAOIgFAaQgBAeAUAPIgNAEQgWgQgMgag");
	this.shape.setTransform(99.2,54.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_61, new cjs.Rectangle(0,0,198.4,108.8), null);


(lib.Path_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnQHoIgEgWQARgLARgcQAFgHAVgXIAVgVQgIgIgPgHIgNgGQgSAJgJALQgFAFgNATIgDgCQAEgSAQgRQAJgLACgIIgBgGQgcgjgbgPQgWgIglgFIgggDQgtAHgogFQgmgFgPgNQgMgLgRgFIgPgDIgYAjQgHAKgaAJIAAAnIgGgMIgCgpQAVgIAJgOIAGgNQAEgKACgNQAEgZgKgOQgFgIgigNIhGgZIgDAcIgFgLIABghQAZAKATAGQAOAFAjAKQAeAKAPANQACABAIAQQAHAOANAIQASALAiAIQAiAIAYgBQgDgJABgiIACggQABgIgXgOQgfgTgPgRQgIgKgJgYIgQgmQgdgkgdgyIgSgbIgLgPQg6gJgZgVIACgDQAyAbA7gDQAZgCAlgKQAHgCAKgFQAPgJAYgKQAZgKAkAEQAnAEAHgCQATgGAzgfQA3ghAggaIB+hrQAPgOgFgNQgBgEgOgQQhFgwhIgQIg6gGQgmgFgfANQgTAIgmAaQgKAHhrArQhxAugWALQgsAYhBApQgGgEgBgEQBzhPA1gUQBJggAWgQQAOgKAtgUIBCgcQAPgHA0gcQAzgYAlAAIBQgCQBbAAA1AHQAtAFAvAOQAqAMAWABIA/AEQAhABAUADQASADArABQAsAEAkAMQA3ATA8gEIA/ABQBRAAANADQANACAmACQAmACAKgBQBJgJAyAVIBHAhQAhAPAIgBQA6gIAQAEQASAFBfAvIAABpIgJAeIAAh3QhKgwgVgIQgVgKg9AJQgJABgsgUIg/gdQgVgIgigEQghgDgYADQgUADgwgEQgkgCgSgDQgIgBgsABIgrABIhzgEQgLAAgmgKIgkgLQg6gJg0AEIgoAFQgLAEgKAGQgMAHALABQArAEAZALQAOAGASAQQASARAWAaQBrAHA7APQAdAIAhASIAlAUQAIACAcADQAwADAZADQAnAFArAPQAVAHANAHIAfAMQAVAIAMADIBbAVQA0ANAdAlQAOATAEAPQgBACgFAoQgJAxgUAqQgLAKgdAMIgbAKQAXgsAEglIgCgdQgGgEgQgDQgTgEgGAFQgPAOgiAEQgSACgOAGIgKAFQgCAMgNAWIgOAkQgTAqgTAXIg2AUQASgoAKgeIAHgWQANgMAIglQACgIgEgJQgEgKgIgBQhLgMgrgNIg1gTQgagIgZABQgaABgSAKQgQAJgfAZIgcAXIgdASQgWAOgGAIQgVAcgJATQgMAYABASQABAQAEADQAGAHAUgIQANgGARADQANADAoAOQAMAEAHABQAQABAUgIIAcgLQAMgFAPgJQAcgRAeAAQAPAAAJADIADAcQAAAhgNAXIgPAKQALgPgBghIgEgfQgLgGgcAFQgQADgbAPIgsAXQgXAJgNACQgOADgOgDQgTgDgLADQgKADgLAJQgCAIAjAUIAkATIABAbQgBAggKAXIgXAMQAPgbACggIgBgbQgIADgkgNIgrgSQgHgEgJgCQgPgEgJAFQgPAHgbAbIgYAaIgFgEQADgJAQgVQAPgUALgLIATgQQAHgIAGgWQAOhAAJgcQADgLARgoQAPgiABgNQACgPgBg0IgCgyQgOhXgJgeQgGgSgGgCQgHgCgTAAQgRAAgCgDQgGgFgdgXQgggZgJgEQgJgDgqgEIgpgDQgTADgRANQgRANgEAQQgFAUgHAJQgKANgcAMQgLAEgWAWIgTAUIgLAMQgIAIgEgFQgHgHgGgUQgGgTgFgDQgKgGgXgBQgagBgOAIQgPANg2AlIheA3QgJAHguAZQghgDgcADIgVAEQgLACgNAKQgRAOgGAPQgLAfACAhQABAOAIAnQAEAMACAfQACAaAFAIQAGAJAVAKIAgAOQAAgNAIgPIAHgMIAGAGQgJAJgCAdQAHAIACAHQABAEAAAIQACAiAOAZQAKASAKAHQAnAFAtAQQBDAVAYAPQALAGAtAJQArAIAdADIBvAJQAEgNAagMQANgGANgEIAGADQgcAKgPASQgHAJgBAHQgRA+gZAfIgcAMQAVgYAFggIAAgcQgLAAgkgFIgigGQgGAEglAKIgtANQgKAEgXAPQgYAPgEAGIgUAbIgEAaQAAAdAVAPIgHACQgVgQgIgZg");
	this.shape.setTransform(98.675,52.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_60, new cjs.Rectangle(0,0,197.4,105.8), null);


(lib.Path_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C73D3D").s().p("Ao8A0QCfiaB6gcQCRggCSgTQCQgTA8AEQBUAGBPAJQBtAMAtANQA4AQA7AvQA9AwAGAlQAIAthdAWQhgAWhNgnIAwAIQAyADAHgbQAFgRgOgaQgRghghgIQgWgFgrgcQgegUhCAEIirAVQhkAMg1gMQg9gNhQAHQhHAGgnASQhOAbg5AWQhsAoglAiIiyCPQA2hGBNhMg");
	this.shape.setTransform(74.5315,19.7902);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_59, new cjs.Rectangle(4.2,0,140.70000000000002,39.6), null);


(lib.Path_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("APlDMQgCglgCADQgYgLgwgSQgTgKgOgEQgWgHgygCQhKgPgpgRQgggNgWgEQgcgFgrACQgsAChFgCQhCgDgfgEQgYgDgYACIghADQgNAAglgJQgjgJgKgFIAAgIIAkALQAmALAQgCIBAgEQAwgEAKgMQANgOgCgaQgDgagRgVQgJgPgVgPQgogfg3gBQgnAAgngTQgIgEgQgDQgfgIgoADQh7AJhPgGQhOgFgaAAQhJgBg0AMIhzAVQg9ALgXASQgUAQhJAYQhNAZgdASQglAXhjBcQhkBdgiArIgLAEIANi7QAGgSgBgEQBqhSAVgNIA/grQAygiAOgFIA4gXQAvgTAjgGQAngHBmgVIBwgYQAWgHBKgMQBXgPAgAAIB9ACQBsAJBsAmQBLAeDWBhQBTAkAtALQBAAPBQAqQAYAPAbAGIDIA7QgECFgDAOQgDAQgMAYQAFgegCgog");
	this.shape.setTransform(101.625,27.4242);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_58, new cjs.Rectangle(0,0.1,203.3,54.699999999999996), null);


(lib.Path_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("APtB+QgJgEhYggQhgghgSgIIhMgsQg5gfglABQgzADgzgSQhCgXhkhAQhMgihIgdQgSgLgbgKQg0gUgoADQgcAChGgMQhBgMgfAHQgVAFhTAGQhSAHgsAKQgPAEh6AVQhUAOgdAPQgOAHhDAXQg6AUggAVQgkAXhOBMQhKBJglAuIgLAPIAGhJQAGgSAAgEQBphSAVgNIBAgrQAygiANgFQALgEAqgUQAsgUAjgGQAogGBjgVQBfgVAQgEQAXgGBSgNQBdgOAgAAQBrABAOACQBqAJBsAmQA/AYBoAuQBiArAYAOQARAJAnAPQAqAPAfAIQA/APBOAqQAZAOAoAKIC5A4QAACFgDAOQgDAQgFAFQAHiNgCACg");
	this.shape.setTransform(101.1,26.5492);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_57, new cjs.Rectangle(0,0.1,202.2,53), null);


(lib.Path_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C73D3D").s().p("ADsCAQgMgGgvABIgsACQgegDgdgRQgpgYgVgIQg8gXgtACQgiAIgGAAQgJADgEAAQgHAAgJgPIglg2QgegrgKgTQgLgVgagTQgMgKgNgIQgEgFAGgCQAHgDAsARIA8AXQAoAOAmAXQAIAFAUASQAJAJAOgEIAZgKQAPgHAEACQAEACAWAXQARAQATACQAiADBHAOQAFABAZAgQAaAhAXAIQAaAJAtAIQAFAKgGAEQgMAJgOADQgJADgIAAQgMAAgKgGg");
	this.shape.setTransform(30.3422,13.4095);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_56, new cjs.Rectangle(0,0,60.8,26.8), null);


(lib.Path_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C73D3D").s().p("ADJBfQgGAAgpgKQgsgKgLgGQgHgEgeABIgbABQgTgCgRgKQgbgQgMgFQgmgOgqADQgWACgSAFQgIAAgDgBQgGgFgCgQQgDgggPgdQgHgOgQgMIgQgLQgBgBAAAAQAAgBAAgBQAAAAAAAAQABgBABAAQAEgCAcALIAlAOQARAGAfAbQAQAOANABQAHABANgCQAQAAAQAKQAQAKAJABQAaACBIATQAXAKAKAPQAMAVAGAEQAMAKAnAGIAlADIANAFQAEADggAAIgJAAg");
	this.shape.setTransform(23.8323,9.4868);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_55, new cjs.Rectangle(0,0,47.7,19), null);


(lib.Path_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C73D3D").s().p("AgrAUQgdgLgUAKIgCgCQAMgMARgKQAjgXAeAAQATAAAaADQAMABAJgEQAJgFAFgFIAKgNIAFAEQgQAUgJAGQgCACgRAEQgPAEgJAIQgQAOgFAHQgJANgFATIgDABQgEgSgcgNg");
	this.shape.setTransform(9.475,5.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_54, new cjs.Rectangle(0,0,19,10.3), null);


(lib.Path_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C73D3D").s().p("AgSAgQAJgLABgGQADgPggAgIgDgCQAGgIAKgMQAUgTAUgIQATgFAGgJQgDAPgNAFQgYAKgDAIIgEAKQgDAIgHAHg");
	this.shape.setTransform(4.075,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_53, new cjs.Rectangle(0,0,8.2,6.4), null);


(lib.Path_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjREfIgCgDQAIgnA3gfQAlgWBhgjQBGgZAZhMQAIgXACgbIAAgUQgXARgnABIg3gCQgYgCgUATQgLAJgFAKQAZgwA+ADIAwACQAbAAAOgMQA2grATgqQAKgXAIgiQAOgfABgJQgJgBgOABQgbADgTAOIgBgDQASgPAagCIAcgCQALgPgEglQgBgRgEgPIAEgBQAIAMAAAhQABAjgKARQgHALgGAOQgHAPgBAIQgDAzhNBJQgEBbgiAwQgbAngyAPQh2AqgpAdQgYARgLAdQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(21.2262,29);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_52, new cjs.Rectangle(0,0,42.5,58), null);


(lib.Path_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAbQAGgPAIgKIAMgOQAIgMARgfIABABQgOAlgOAQQgKALgIASQgHASgKAJQAEgOAHgOg");
	this.shape.setTransform(3.175,5.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_51, new cjs.Rectangle(0,0,6.4,11.1), null);


(lib.Path_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABcAkQgugHglgTQgqgUgzgDQgfgCgTgGQgQgFgRgKIAagCQAcgCAbACQAsADAhAPIAvAYQAmAOBcAUIgBACQgvAAgcgEg");
	this.shape.setTransform(16.775,3.9929);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_50, new cjs.Rectangle(0,0,33.6,8), null);


(lib.Path_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA6AUQgQgtgYgGQgbgHguAQQgXAIgSAJIgFgDIA5gdQABgEgDgFQgEgJgNgCQgVgCgrARQABAAAAAAQAAAAAAgBQAAAAgBgBQAAAAgBgBQAJgFATgGQAWgIAMAAQAogDAgALQARAGAiATQAdgFAYANQAMAHAGAIQADACgGACQgIgNgYgEQgXgEgQAIQAGAHAPBJIgHADQgDgWgHgYg");
	this.shape.setTransform(12.8779,6.569);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_49, new cjs.Rectangle(0,0,25.8,13.2), null);


(lib.Path_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIA8QgDgFgFgCQgKgEgLALQgTARgKAbIgCgCIgCAAQACgMAJgXQAKgZAJgNQAdgmAlgWQAUgLAsgRQATgfAfgMQAQgFAMAAQAFgBgEAHQgTgCgWATQgWATgFAUQgHANAzgJQAZgFAbgHIACAEQgaAHggALQhAAVgXARQgdAVgSAoQgJAVgEAQIgHADg");
	this.shape.setTransform(13.525,10.7683);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_48, new cjs.Rectangle(0,0,27.1,21.6), null);


(lib.Path_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBwQATgMAPgbQAHgNAMgeQACgFgFgEIgEgDQgFAGgaAIQgHADg0ACQgJABgMgEIABgDQAYAEAggGQAqgIAIgVQANgfAfgVQARgLAPgHQAWgjAbgHQAOgEAJAEIgBAEQgQgHgaAUQgUARgHAMQATgEAhAPQARAIANAJIgBAFQgPgOgggHQglgJgPAPQgOAOgJAXQgMAigNAdQgQAkgVARQgLAJgGABg");
	this.shape.setTransform(13.4,11.4625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_46, new cjs.Rectangle(0,0,26.8,23), null);


(lib.Path_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai2CJQAIgQAdgdQAWgVAOgLQAHgGADgFQACgFgCgFQgCgEgMgCQgLgDgCgEQAEgHAMgKIAXgPQAkgaAJgcQAHgTAegcQAdgbATgEIACADQgPAGgFAOIgEAWQgBAJAEAHQAEAIAFgEIAPgJIAEACIgMATQgEAGABACQAAABAAAAQAAAAABAAQAAAAABAAQABAAAAAAIAagCQAMgCACgHQACgHAmgcIAlgaIAAABQgNAKgiAiQgJAKAAAIQgBAJAKgDIAJgBQALAAAJABIAKAAQAJgMAYgRIABADQgIADgWAbQgUAZgLASQgOAYglAGQgTAEgFAeQAEAFAWACQATACABADIgHAGQgHgFgKABIgRABQgXgFgwAMQgrAKgNgCIgNgFQgHgEgDAAQgFgBgNAJIgdASQgXANgLAXg");
	this.shape.setTransform(18.3,13.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_45, new cjs.Rectangle(0,0,36.6,27.9), null);


(lib.Path_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AByAyIgIgfQgFgRgPgEQgSgGgPAAQgSgBgjAFQAAAJAeAaQAiAbACAJIgEACIgCgBQgEgLgagNQgUgKgXgUQgagSgDgKQgXgGgigVQgogXgLgTIAGAAQAFAKARAMQAiAZA6ALQANACA1AEQAxAGANAMQAMALASAhQASAjAEAFIgCACQgYgPgKgUg");
	this.shape.setTransform(15.05,8.4375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_44, new cjs.Rectangle(0,0,30.1,16.9), null);


(lib.Path_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E322E").s().p("AssGwQAlgFApgJQBSgQAWgNQAYgPA8gQQA1gPAcgDQAQgCBbgsQBbgrAPgCQAvgFBxgoQCUg1BUg/QBXhCCFg8QBsgyBEgQQAvgMA0gnQAqgfAXgeQAWgcAshlQAthoACgoIgECPQgtCDgcA0QgXArgoAmQgtArgyASQgdANhVAPQhWAQgeAMQgVAJgcANQg3AagfAYQggAaguAfQhEAug2AaQgaAKgpAMQg9ARgsAPQg6AQh+A1IiJA5QgzAVgxAQQhYAch2AJg");
	this.shape.setTransform(81.325,49.3875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_43, new cjs.Rectangle(0,0.4,162.7,98), null);


(lib.Path_42_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#802824").s().p("ACyHyQg9gXgZgWQgGgGgbgqQgcgpgIgRQhRiegJgWQgZg6gxhFQgSgagZgqQgig6gMgjQgMgiAWhPIAZhHIANi9IAIgWIgJDNQgYBCgHAgQgFAUgDAsQgDAgAtBGQAhAyAYAYQAIAKApBWQAsBcAFAIIArBMQAlA+ANATQAQAVAMALQAJAKAOAIQARALBIARIAbA7QgagIgfgLg");
	this.shape.setTransform(23.5026,51.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_42_0, new cjs.Rectangle(0,0,47,103.3), null);


(lib.Path_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#774E2A").s().p("EgfwArcQgyAAgagEQgqgHgbgUQgogegPg9QgKgqABhHMAAYhNpQgCgeAAgQQACgcAQgLQASgMAZAGQAYAHAOARQAOASAGAcQAEASACAiIAcG5QACAgAGASQAIAbATAMQAYAOAdgNQAcgNAOgbQALgXABggQABgSgDgoQgXkRAVkKQAEg6AXgoQAcgyAsAFQAnAEAVAuQAQAjADA2IAhIlQAFBYA1ALQAxAJATgbQAPgXgEgzIgkpKQgEhIAUgzQAYhBA2gDQA2gCAeA9QAZAyADBHIAWHrQABAUgBAyQADAsAUAUQAXAXAiADQAlADAPgcQAKgSACgeIgBgxIgFn1QgBhBAfgzQAjg6AvAXQAbANASAvQApBxgIDGIgHCgQgCBcAJBDQAFAnAUALQAcAQAWgjQAVgfAAgoIAAoHQAAhJAmgLQAXgHAWAVQATASAJAdQAQAvABBCQAAAQgEBiQgCA1AFBKIAKB+IAFBPQAGAuAWAaQAeAiAcASQAjAVAoACQA+ADAygpQApghAIgzIAEhlQADgvAIhYQAJhbADgsQAGhjAEgeQAKhJAZgzQATgmAfAVQAbAUAHAmQALA/AHBfIAKCgQAIBeAZCKQAJAyARAXQAWAgAsABQApABAWgjQASgegCgsIgJiVIgUkjQgDgvAKggQAMgpAhgJQAngKAeApQAYAiAKAzQAUBqAWCaIAmEDQAFAjAHAQQANAdAaAAQAggBANgwQAJghgCgmQgJilABhZQACiNAWhvQAShZAygMQAzgLAaA/QAWA1gEBGQgQDyBbDjQATAyAeABQAYABAOgcQAKgWABghIALmkQABgsAMgdQAQgmAggEQAmgFAWAsQATAkABAyIAKFiQACBTAGAcQAQBNA0gOQAZgGARgmQAnhUgHimQgIi3AUhJQAIgaAPgQQATgUAVAFQAVAGANAhQAQAnAEAyQACAjgDA5IgDAsIgBArQgBAnAMAxQAMAxASAjQAEAIAEADQAFAEAKACQAWAFALgDQAggKgBhEIgJhdQgEgtgChFIgDhzQgChJAbgTQAcgTAdADQAkAFAVAuQAPAgAGAuQAFAmgDA5IgFBeQgBBVAwBDQAzBKBGgTQAngKAZgmQAVggAIgtQANhBABhWQgBgqAAgWQABgmANgWQANgWAagLQAXgKAcgBQAsgBAZAdQAXAZAEAtQAEAqgJBCQgNBWgBAXQgEA/AXA0QALAYAVARQAaAVALgeQAFgOgBghQgCgjABgNIANlTIAEh6QgCgZACgNQADgXATgGQAUgGAVAWQAQARAIAYQAYA/ACBZIgECbQgDBaAHA4QAOB1AygZQAPgIAFgjQABgnACgMIAtlqQAIhBAhgMQAfgLAZAjQAWAdAGAqQAnEYAMFiQAHDUgBGpMgAJA6BQAABAgGAjQgLA2gdAgQghAlg+ANQgpAJhHAAg");
	this.shape.setTransform(224.2301,277.9701);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_42, new cjs.Rectangle(0,0,448.5,556), null);


(lib.Path_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAOQAJgKAHgEIANgHQAJgGATgRIAAAAQgRAVgQAJQgMAHgIAJQgKALgJAEg");
	this.shape.setTransform(3.65,3.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_41, new cjs.Rectangle(0,0,7.3,6.3), null);


(lib.Path_40_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAHQAHgGAIgCIAKgDQAHgEAQgLIABABQgNAPgOADQgJADgHAIQgIAHgIACQADgFAHgIg");
	this.shape.setTransform(2.95,1.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_40_0, new cjs.Rectangle(0,0,5.9,4), null);


(lib.Path_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#420E04").s().p("AgTCqQhtgNhHg7QhHg7AIhFQAIhHBTgpQBTgoBsAMQBtANBHA7QBIA7gJBGQgIBGhTApQg/AghOAAQgZAAgZgEg");
	this.shape.setTransform(26.3797,17.3591);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_40, new cjs.Rectangle(0,0,52.8,34.7), null);


(lib.Path_39_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAaAsQgHgOgHgIQgMgPgSgoQgOgfgIgJQAMANAEAHIARAiQAPAdAIAKQAHALAGANIAMAeIgPgeg");
	this.shape.setTransform(4.2125,7.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_39_0, new cjs.Rectangle(0.2,0.2,8.100000000000001,14.700000000000001), null);


(lib.Path_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#420E04").s().p("AgOB8QhPgKgzgqQg0grAGgzQAGgzA8gdQA9geBNAJQBPAKA0ArQA0AqgGAzQgGAzg8AdQguAXg5AAQgSAAgSgCg");
	this.shape.setTransform(19.125,12.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_39, new cjs.Rectangle(0,0,38.3,25.2), null);


(lib.Path_38_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAtAXQgNgJgLgDQgVgHgigVQgbgRgMgEQAPAEAHAEIAhATQAbAQAMAEQAWAIAfAWIgdgQg");
	this.shape.setTransform(7.775,3.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_38_0, new cjs.Rectangle(0.4,0.1,14.799999999999999,7.7), null);


(lib.Path_37_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("ABDATQgVgHgOgCQgbgDg4gWQgngQgSgCQAVABAMAEIAvARQAqAPARADQAhAGAtAVIgqgPg");
	this.shape.setTransform(11.4,3.4625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_37_0, new cjs.Rectangle(0.5,0.1,21.8,6.800000000000001), null);


(lib.Path_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#420E04").s().p("AgTCqQhtgMhHg8QhIg7AJhFQAJhHBTgpQBSgoBsAMQBtANBHA7QBHA7gIBGQgIBHhTAoQg/AghOAAQgZAAgZgEg");
	this.shape.setTransform(26.4,17.3591);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_37, new cjs.Rectangle(0,0,52.8,34.7), null);


(lib.Path_36_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("Ag+ADIAogDQAigBANgDQARgEAOgBQAMgBAXABIgkADQgQAAgMAEQgVAFguABQglACgMAEQARgGAKgBg");
	this.shape.setTransform(9.1,1.0042);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_36_0, new cjs.Rectangle(0.1,0,18.099999999999998,2.1), null);


(lib.Path_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#420E04").s().p("AgTCqQhtgMhHg8QhHg7AIhFQAIhHBTgpQBTgoBsAMQBtANBHA7QBIA7gJBGQgIBHhTAoQg/AghOAAQgZAAgZgEg");
	this.shape.setTransform(26.4297,17.3091);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_36, new cjs.Rectangle(0,0,52.9,34.7), null);


(lib.Path_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AA1AEQgQgCgLABQgVACgsgFQghgGgOACQARgDAJABIAmAEQAhADAOAAQAQgBANABIAhAGIgigDg");
	this.shape.setTransform(8.975,0.7218);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_35, new cjs.Rectangle(0.3,0,17.4,1.5), null);


(lib.Path_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AARAsQgGgDgLgLQgNgPgQgdQgQgbgGgHQALALAEAGIAQAcQAPAXAGAJQAJAKALAEQALAFAUABQgYAAgLgFg");
	this.shape.setTransform(5.325,4.9375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_34, new cjs.Rectangle(0.1,0.1,10.5,9.700000000000001), null);


(lib.Path_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AADAcQgDgTgDg0QgDgngCgNQAEAQABALQAFBEAFAYQACANAAATIAAAoQgCgwgEgUg");
	this.shape.setTransform(0.975,9.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_33, new cjs.Rectangle(0.1,0.2,1.7999999999999998,19.2), null);


(lib.Path_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AA2AUQgQgOgJgDIgjgKQgZgHgIgFQgjgTgLgEQAQAFAJAFQAJAEBSAcQALAFAOAOQAQAQAOAIQgPgHgRgQg");
	this.shape.setTransform(8.825,4.3625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_32, new cjs.Rectangle(0.3,0.1,17.099999999999998,8.6), null);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAmAAQgNgEgGAAQgkAEgLgBQgbgEgHAAIARAAQAHABA5gCQAIABAMAFQAOAFAKACQgLgBgOgGg");
	this.shape.setTransform(6.475,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_31, new cjs.Rectangle(0.2,0,12.600000000000001,1.4), null);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAlAAQgNgEgGAAQglAEgLgCIgfgDIAPABIBAgBQAIAAAMAFQANAFALACQgLgCgOgFg");
	this.shape.setTransform(6.6,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_30, new cjs.Rectangle(0.4,0.1,12.4,1.2999999999999998), null);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAmAHQgMgHgGgBIgYgCQgRgCgGgCQgYgIgJgBIARADQAHACA4AIQAHACAMAGQAMAJAKADQgLgDgMgHg");
	this.shape.setTransform(6.2625,1.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0.2,0,12.200000000000001,3.5), null);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAiATQgNgBgHgDQgxgbgGgDIgSgIIAiAOQAFACAPAHIAUANQAFADAOACQAQACAJAEQgJgDgQgCg");
	this.shape.setTransform(5.95,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(0,0,11.9,4.8), null);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAlAGQgLgGgHgBIgXgCQgRgCgGgCQgYgIgJgBIARADIA/AKQAIACAKAGQANAJAKADQgLgDgNgIg");
	this.shape.setTransform(6.25,1.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(0.2,0,12.200000000000001,3.5), null);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAgAMQgIgIgGgCIgUgGQgOgEgFgDIgbgOIAPAGQAFADAvAQQAGADAIAIQAIAKAIAFQgIgFgJgJg");
	this.shape.setTransform(4.9625,2.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0.1,0,9.8,5.2), null);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AgvAHIA+gPQAIgBANACQAOADALgBQgMACgOgCQgOgDgGACQgjALgLABIgdADg");
	this.shape.setTransform(6.7,0.9719);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0.7,0.1,12.100000000000001,1.7999999999999998), null);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAjANQgKgKgHgCIgXgGQgQgFgFgDIgdgNIAOAFIA9AVQAGACAKAKQAKAKAKAFQgKgEgLgKg");
	this.shape.setTransform(5.9875,2.9125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_24, new cjs.Rectangle(0.5,0.2,11.1,5.5), null);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AgaACIAkgFQAEAAAHACQAJABAGAAQgGABgJgBQgIgCgDAAQgUAFgGAAIgTABg");
	this.shape.setTransform(3.7625,0.3575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0.2,0,7.2,0.8), null);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("ABHACQgZgIgMAAQgLAAgjACQggABgLgBQgugHgRgBQATABAMABIA4AAQAyAAAPABQAOABAYAIQAbAKAUADQgVgDgbgIg");
	this.shape.setTransform(12.3875,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0.5,0,23.8,2.5), null);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAJBCQAAgGgJgkIgNgwQgCgLAEgSQAFgWgBgPQACAQgEAVQgDAUACAJIAKAhQAIAYABAIQADAoADAKIgGgZg");
	this.shape.setTransform(1.4917,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0.1,0,2.9,18.2), null);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("ABeAVQhlgKgegFQgQgCgZgLQgdgNgVgFQAXAEAdAMQAbALAMABQALACAnACQAjACAMADQAzALASADIgjgFg");
	this.shape.setTransform(12.925,2.6125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,25.9,5.3), null);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAUAjIgigsQgEgEgCgMQgDgMgFgJQAGAJADAMQADALADAFIAOAQQAKALADAEIAPAYIgJgLg");
	this.shape.setTransform(2.8625,4.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,5.8,9.3), null);


(lib.Path_18_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#474747").s().p("AIiJJQgQgEgDgUIgDABQgGgBgDgEQgEgFAAgFQABgGAEgDQAFgEAFABQAAgYgDgYQgDABgEAAQgFgBgEgEQgDgEAAgGQABgFAEgEQAEgDAGAAIACAAIgEgYQgEACgEAAQgGgBgDgEQgEgEABgGQAAgFAFgEQAEgEAFABIACAAIgBgGIggAFQADAEAAAHQAAAFgFAEQgEAEgGgBQgFgBgEgEQgDgEAAgGIABgEIgWAEQAEAUACAUIAHgCQAFABAEAEQAEAFgBAFQgBAGgEADQgEAEgGgBIgBAAIADAuIADAAQAGABADAEQAEAEgBAGQAAAFgEAEQgFADgFAAIAAABQAAAOgMAJQgNAJgOgFQgJgCgGgJQgFgIAAgKIAAgDIgFAAQgGAAgDgFQgEgEABgGQAAgFAEgEQAFgDAFAAIACAAQgBgggEgYQgFAEgFgBQgGAAgDgFQgEgEAAgFQABgGAEgDQAFgEAFAAIAFACIgIgsQgFAEgFgBQgGgBgDgEQgEgEAAgGQABgFAEgEQAFgDAFAAIACAAQgGgXgKgdQgDAEgHAAQgGAAgDgFQgEgEAAgGQABgFAEgEQAFgDAFAAQgHgUgOgfQgEAIgJgBQgGgBgDgEQgEgEAAgGQABgFAEgEQAFgDAFAAIABAAQgOgbgLgSQgDAIgKgBQgFgBgEgEQgDgEAAgGQABgFAEgEQAEgDAFAAIgUgeQgEACgFAAQgFgBgEgEQgDgFAAgFQAAgGAFgDIgCgDQgJgMAFgOQAEgOAPgFQAMgEANAHQAEgIAKABQAFAAAEAEQADAFAAAFQgBAJgJADIAXAiQAEgHAJABQAFAAAEAEQADAFAAAFQgBAKgLACIAOAYQAFgEAFAAQAGABADAEQAEAEgBAGQgBAJgJADIAVApQAEgGAHABQAGABAEAEQADAEAAAGQgBAFgEAEQgEADgGAAQAIASAJAYQAFgDAFAAQAGABADAEQAEAEgBAGQAAAFgEAEQgEADgGAAIAMApIAQgDQgDgDAAgGQABgFAEgEQAFgDAFAAQAGABADAEQAEAFgBAFIAAACIAlgHIgHgWQgBAFgEACQgEADgFAAQgFgBgEgEQgDgEAAgGQABgFAEgEQAEgEAGABIAHADQgHgXgIgUQgFAIgIgBQgGgBgDgEQgEgFABgFQAAgGAEgDQAFgEAFABIADAAIgCgGQgGgNAHgNQAHgNAOgCQAOgDAMAMQABgFAEgDQAEgDAFABQAFABAEAEQAEAEgBAGQAAAFgFAEQgEADgGAAIgCgBIABADQAGAQASADQgDgFAAgFQABgGAEgDQAEgEAGABQAFAAAEAEQAEAFgBAFQAHgGADgJQACgKgEgJIgNgeQgFAGgHgBQgGAAgDgEQgEgFABgFQAAgFAEgEQAEgEAFAAIgUgmQgEAHgJgBQgGAAgDgEQgEgFABgFQAAgFAEgEQAEgDAFAAIgagrQgEAKgKgBQgGAAgDgFQgEgEABgFQAAgGAEgDQAFgEAFAAIgigtQgBAFgEACQgEACgFAAQgFAAgEgEQgDgFAAgFQABgFADgEQAEgDAFAAIgcghQgDAJgKgBQgGgBgDgEQgEgEABgGQABgJAIgCIgSgVQgDAMgMgBQgFAAgEgFQgEgEABgFQABgHAGgEQgJgBgIADQAGAFgBAHQgBAGgEAEQgEADgGAAIgFgCQgBAMAIAIIALANQAEgKAKABQAGAAAEAFQADAEAAAFQgCALgJABIARAVQAEgJAJABQAGABADAEQAEAEgBAGQgBAJgJACIAYAgQAFgGAHABQAGABADAEQAEAEgBAGQgBAKgKACQAEAOgIAKQgJAMgPAAQgQAAgIgMIgEgGQgFAEgGAAQgGgBgDgEQgEgEABgGQABgHAGgDQgMgRgRgUQgBAFgEADQgEADgFgBQgFAAgEgEQgEgFABgFQABgLALgBQgUgXgQgQQAAABAAAAQABAAAAAAQAAABgBAAQAAAAAAABQAAAFgEAEQgFAEgFgBQgGgBgDgEQgEgEABgGQAAgFAEgEQAFgDAFAAIABAAIgogmQgBAFgEADQgEAEgGgBQgFgBgEgEQgDgEAAgGQABgJAJgDIgpghIAAABQAAAGgFADQgEAEgGgBQgFAAgEgFQgDgEAAgFQABgJAJgDIgkgbIAAABQAAAFgEAEQgFADgFAAQgGgBgDgEQgEgEABgGQABgHAGgEIgugdIgGALQAEACADAEQACAEAAAEQgBAGgEAEQgEADgGAAQgFgBgDgDIgLATIAZARIAAgCQABgFAEgEQAFgDAFAAQAGABADAEQAEAEgBAGQAAAIgJADIAmAcIAAgBQAAgGAEgDQAFgEAFABQAGAAADAEQAEAFgBAFQgBAKgJACQAbAVARAQQABgFAEgEQAEgDAFAAQAGABAEAEQADAEAAAGQgCALgKABQALAQgKAQQgJANgQAAQgMAAgIgHIgMgKQgDALgMgBQgFAAgEgFQgDgEAAgGQABgIAIgDIguglQAAAFgFAEQgEADgFAAQgGgBgDgEQgEgFAAgFQABgIAHgDIgughIAAAFQgBAFgEAEQgEADgGAAQgFgBgEgEQgDgEAAgGQABgJAJgDQgZgQgXgMQADAEgBAFQAAAGgEAEQgFADgFAAQgGgBgDgEQgEgFABgFQAAgGAEgDQAFgEAFABQgggRgogSQACADAAAFQAAAFgFAEQgEAEgGgBQgFgBgEgEQgDgEAAgGQABgJAKgDQgqgSgzgRQAFAFAAAHQgBAFgEAEQgEAEgGgBQgFgBgEgEQgEgEABgGQABgLALgBQgfgKgngKQADAEAAAFQgBAFgEAEQgFAEgFgBQgGAAgDgFQgEgEABgGQABgIAHgDIg+gNQABADAAADQgBAFgEAEQgEAEgGgBQgFAAgEgFQgEgEABgGQABgEACgDIg8gJQACADAAAFQgBAGgEADQgFAEgFgBQgGAAgDgFQgEgEABgGQABgGAFgEQgMgFgDgMQgDgMAGgLQAGgKAMgDIgBgHQAAgFAFgEQAEgDAFAAQAGABAEAEQADAFAAAFIgCAEIAPACIAJgrQgEADgGAAQgGgBgDgEQgEgFABgFIAAgBIgwgFQABAEAAADQgBAGgEADQgEAEgGgBQgFAAgEgEQgDgFAAgFQAAgEADgDIg5gDIAAAFQgBAFgEAEQgEAEgGgBQgFgBgEgEQgDgEAAgGIABgCIgRgBQgPAAgIgMQgKgMAFgPQADgJAIgFQAIgFAKAAIACAAIgCgHQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAEgCADIAtABQgCgDABgEQAAgGAEgDQAFgEAFABQAGAAAEAEQADAFAAAFIgDAHIAqADQgCgEAAgEQABgGAEgDQAFgEAFABQAGAAADAEQAEAFgBAFQAAAFgDADIAoAEIgBgFQABgGAEgDQAFgEAFABQAGAAADAEQAEAFgBAFIgCAHIAmAGIAAgGQAAgGAEgDQAFgEAFABQAGAAADAEQAEAFgBAFQAAAFgDADIAaAFIAIgqIg1gJQABADAAADQAAAGgFAEQgEADgGAAQgFgBgEgEQgDgFAAgFQABgFADgDIgrgGIAAADQgBAFgEAEQgEAEgGgBQgFAAgEgFQgEgEABgGIABgDIgsgEIAAABQgBAGgEAEQgEADgGAAQgFgBgEgEQgEgFABgFIABgFQgJgGgDgLQgDgPAJgLQAKgMAPABIASACIgBgHQABgGAEgDQAEgEAGABQAFABAEAEQADAEAAAGIgDAGIAzAGIAAgFQAAgGAEgDQAFgEAFABQAGAAAEAEQADAFAAAFIgCAGQAxAHAnAIIAAgGQAAgGAEgDQAFgEAFABQAGABADAEQAEAEgBAGQAAADgDAFIA2AMIAAgFQABgFAEgEQAEgDAGAAQAFABAEAEQAEAEgBAGQAAAFgEADIA1APQgEgDAAgHQABgFAEgEQAFgDAFAAQAGABADAEQAEAEgBAGQgBAJgJADIA7AUQgCgFAAgEQABgFAEgEQAEgEAGABQAFABAEAEQAEAEgBAGQgBAJgIACIA2AWIgBgFQABgGAEgDQAEgEAGABQAFAAAEAEQAEAFgBAFQAAAHgHAEIAvAWQABgFAEgDQAEgDAFAAQAGABAEAEQADAFAAAFIgDAHIABABQAJAEAEAIQAFAIgBAJQgBANgJAHQgIAHgLAAQgHAAgHgDIgZgNQgBAGgEADQgFAEgFgBQgGAAgDgFQgEgEABgFQABgFADgEIg5gYIAAACQgBAFgEAEQgEAEgGgBQgFAAgEgFQgEgEABgGQABgFADgDIgogOIAAADQAAAFgFAEQgEAEgGgBQgFAAgEgFQgDgEAAgGQABgEADgEIgsgOIAAAAQgBAGgEADQgFAEgFgBQgGAAgDgEQgEgFABgFIABgFIgzgOIgJAqIATAFQgCgDAAgFQABgFAEgEQAEgDAGAAQAFABAEAEQAEAEgBAGQAAAHgHADQAgAJAcAJQAKADAGAJQAGAIgBAKQAAAMgJAIQgJAIgLAAIgJgBQhZgehogSIgLA1IAbAGQgDgEAAgFQABgFAEgEQAFgDAFAAQAGABADAEQAEAEgBAGQAAAGgFAEIA0AMIAAgDQABgFAEgEQAEgDAGAAQAFABAEAEQAEAEgBAGQAAAEgDADIA3ARQgCgDAAgEQABgGAEgDQAFgEAFABQAGAAADAFQAEAEgBAGQgBAHgGADQAcAKAiAOIgBgEQABgFAEgEQAFgEAFABQAGABADAEQAEAEgBAGQgBAGgFAEQAVAIAeAPIAAgCQAAgFAEgEQAFgDAFAAQAGABAEAEQADAFAAAFQgBAGgFADIAqAXIAKgRIgBAAQgGgBgDgEQgEgFABgFQABgGAEgDQAEgEAGABQAHABADAFIAIgPIgYgMQgEAJgKgBQgGAAgDgEQgEgFABgFIACgHIgZgLQgCALgMgBQgGAAgDgFQgEgEABgFQAAgEADgFQgJgIAAgNQgMgEACgLQAAgFAEgEQAFgDAFAAQAEAAADADQAOgKAQAHIAAgBQABgGAEgDQAEgEAGABQAFAAAEAEQAEAFgBAFQAAAGgFADIAlASIAAgDQABgGAEgDQADgEAGAAQAFABAEAEQAEAFgBAFQgBAIgHADQAUAKAVANIAAgCQABgGAEgDQAEgEAGABQAFABAEAEQAEAEgBAGQgBAHgGADIAnAZIAAgCQABgGAEgDQAEgEAGAAQAFABAEAEQAEAFgBAFQgBAJgIADIAoAcIAAgDQAAgGAFgDQAEgEAGABQAFAAAEAFQADAEAAAFQgBAKgLACIAnAfQADgJAKABQAGABADAEQAEAEgBAGQAAAFgGAFIAKAHQAKAKANgEQgFgFABgGQAAgGAEgDQAFgEAFABQAGAAADAEQADgPgLgKIgIgGQgDADgHAAQgFAAgEgFQgEgEABgGIACgFIgQgMQgDAJgKgBQgGgBgDgEQgEgFABgFQABgGAEgDIgjgZQgEAJgJgBQgGAAgDgFQgEgEAAgGQABgFAEgDQgLgJAAgOQABgOALgJQAIgGAKAAQAJAAAIAGIABAAIAAgBQABgFAEgEQAEgEAGABQAFABAEAEQAEAEgBAGQgBAIgHADIAnAdQABgFAEgDQAFgDAFAAQAFABAEAEQADAEAAAGQgBAHgGADIAeAZQADgKALABQAFAAAEAEQAEAFgBAFQgBAIgGADIAeAbQAEgJAKABQAFABAEAEQAEAEgBAGQgBAHgGADIAhAiQAEgKALABQAFABAEAEQADAEAAAGQgBAJgJADIAfAjQABgGAEgDQAEgDAFAAQAGABAEAEQADAFAAAFQgCAMgMAAIAgAoQADgKALABQAFABAEAEQADAEAAAGQgBAFgDADQgEAEgFAAIAdAqQAEgIAJABQAGAAADAFQAEAEgBAFQgBAMgLABIAcAwQAFgHAIAAQAFABAEAEQAEAFgBAFQgBAGgEADQgEAEgFgBIAaA2QAEgHAHABQAGABAEAEQADAFAAAFQgBAGgEADQgFAEgFgBQAKAXAJAaQAFgFAHABQAFAAAEAEQAEAFgBAFQgBAGgEADQgEAEgGgBIgBAAIAQA1QADgCAGAAQAFABAEAEQADAEAAAGQgBAFgEAEQgFADgFAAIgFgCQgFAQgPAEIgIABQgPAAgIgMQgEADgFAAQgGgBgDgEQgEgFABgFQABgLALgBIgHgYIgTAFQACADgBADQAAAGgEAEQgFADgFAAQgLgCgBgKIgRAEIAIAaIABAAQAGABADAEQAEAEgBAGQAAAHgHAEQAFAWAEAVQAEgDAFAAQAGABAEAEQADAFAAAFQgBAGgEADQgFAEgFgBIgDAAIAGA0QAEgCADABQAFAAAEAFQAEAEgBAFQgBAGgEAEQgEADgGAAIgCgBIABAgIAGgBQAGABADAEQAEAFgBAFQAAAGgEADQgFAEgFgBIgEgBQgDANgLAGQgHAEgIAAQgFAAgFgCg");
	this.shape.setTransform(69.6419,58.7139);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18_0, new cjs.Rectangle(0,0,139.3,117.5), null);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAHAnQgNgpgDgMQgCgHACgLQACgNgBgJQACAKgBAMQgCANACAFIAHATQAFAOAAAFIAGAfIgEgQg");
	this.shape.setTransform(1.075,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,2.2,11), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AhuAHIBGgHIBSgJQASgCAgAFQAkAGAaAAQgbAAgkgEQgigEgPABIg4AIQgnAGgQABQhBABgTACQAbgDAQgBg");
	this.shape.setTransform(15.5875,1.0952);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0.2,0,30.8,2.2), null);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("Ah+AqIBNghIBbgmQAUgHAmgHQAsgIAdgJQgeAKgrAJQgoAIgRAHIg+AcQgrAVgRAFQhGAXgXAKQAcgMASgHg");
	this.shape.setTransform(17.775,6.1125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0.5,0,34.6,12.3), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AheBFQAHgFAvgqIA+g3QAOgLAdgPQAigQAVgPQgVARghARQgfAPgLALIgqAnQgdAcgMAJQgqAdgSAPIAZgVg");
	this.shape.setTransform(12.9625,9.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(1,0,24,18.1), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("Ag6AfQAMgHAigOQAmgOAKgFQAMgGAagSQAbgUAWgLQgUALgbAVQgYARgPAHQgdAOhjAsQgLAGgUAJQATgJAtgZg");
	this.shape.setTransform(12.9125,6.5125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0.6,0,24.7,13.1), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AhBAiIBWg3QALgHAUgGQAYgHAQgIQgQAJgXAHQgWAIgJAGIgfAVQgWAQgJAEIgzAcIAagQg");
	this.shape.setTransform(9.175,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,18.4,10), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AhbBCQAHgFAvgpIA+g3QAOgMAegOQAhgQAVgPQgVAQghASQgeAPgMAKIgqAoQgdAbgMAJQgyAkgQAOIAfgbg");
	this.shape.setTransform(12.675,9.2625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0.4,0,24.6,18.6), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("Ag/A+QA8hHASgUQAKgKAVgPQAYgQAPgOQgPAPgYARQgVAPgIAJIgcAjQgTAYgJAJIgtAtIAVgXg");
	this.shape.setTransform(8.7625,8.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0.3,0,17,17.1), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("Ag/A+IAkgqIAqgxQAKgKAVgPQAYgQAPgOQgPAPgYARQgVAQgIAIIgcAjQgTAYgJAJIgtAtIAVgXg");
	this.shape.setTransform(8.7625,8.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0.3,0,17,17.1), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AiHAOQALgBBIgNIBigSQAVgDAnACQArADAfgDQgfAEgsgBQgpgCgSADIhDAPQguAJgSABQhEAGgaAFQAbgFARgCg");
	this.shape.setTransform(18.925,2.0725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0.9,0,36.1,4.2), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("ABIABQgagHgMAAIgvACQggABgMgBQgsgHgUAAQATAAAMABIA5AAQA0AAAPABQAPABAYAIQAcAJAVADQgVgCgdgJg");
	this.shape.setTransform(12.7875,1.1974);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0.7,0,24.3,2.4), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("ABHANQgYgNgMgBIgvgGQgggDgMgEQgugOgPgDIAeAHQANADBuARQAOADAXAMQAZAOAUAGQgUgFgbgNg");
	this.shape.setTransform(12.375,3.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0.6,0.1,23.599999999999998,6.300000000000001), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAtAaQgPgNgGgEIgdgPQgUgJgGgFIgpgaIAWANIBLApQAIAEANANQAPAOALAIQgMgIgPgNg");
	this.shape.setTransform(7.25,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,14.5,9.4), null);


(lib.Path_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BDBD").s().p("AhWAEQAcgXApgSQAmgRAmgHQAkgGAsAHQgqgBglAIQgfAHgqATQgnASgdAUQgkAcgWAZQASggAjgcg");
	this.shape.setTransform(13.95,6.456);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_3, new cjs.Rectangle(0,0,27.9,12.9), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BDBD").s().p("ABQAUQgZgWglgYQgigWgjgNQgrgQgigEQAlgCAqANQAjAKAlAZQAlAXAZAbQAZAaATApQgXgkgagag");
	this.shape.setTransform(12.9,8.2298);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,25.8,16.5), null);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BDBD").s().p("ABQgCQgjgKgrgCQgogDglAFQgsAHghAMQAfgTAsgJQAjgIAtAEQAwAEAfALQAkALAjAaQgmgVgjgIg");
	this.shape.setTransform(15.25,2.7193);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_0, new cjs.Rectangle(0,0,30.5,5.5), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAyALQgRgIgIgCQgvgGgOgFIgugNIAYAGIBTARQAKACAQAJQASAJAOAEQgOgEgTgJg");
	this.shape.setTransform(8.325,2.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,16.7,4.9), null);


(lib.Path_4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BDBD").s().p("AhWAvQgIgOAUgZQAUgWAlgUQAjgTAfgEQAfgDAIAOQAHAPgUAYQgUAWgkATQgkAUgfAEIgLAAQgVAAgGgLg");
	this.shape.setTransform(8.94,5.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_3, new cjs.Rectangle(0,0.1,17.9,11.6), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BDBD").s().p("AAxA6QgggEgjgTQgkgUgUgXQgUgYAIgOQAIgPAfAEQAfAEAjATQAkAUAUAXQAUAYgIAOQgGAMgVAAIgLgBg");
	this.shape.setTransform(8.9,5.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,17.9,11.8), null);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BDBD").s().p("AhFAcQgdgMAAgQQAAgPAdgMQAdgMAoAAQApAAAdAMQAdAMAAAPQAAAQgdAMQgdAMgpAAQgoAAgdgMg");
	this.shape.setTransform(9.925,3.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0,19.9,7.9), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAxALQgRgIgIgCQgvgHgOgEIgsgNIAWAFQAKADBJAPQAKACAQAIQASAJAOAFQgOgEgTgJg");
	this.shape.setTransform(8.425,2.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0.2,0.1,16.5,4.7), null);


(lib.Path_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BDBD").s().p("AhhAfQAHgPAMgOQAVgXAhgRQAhgQAdgFQANgDAVAAQAVACALAGQgLgBgUAFIgeAJQgaAIgeAQQgfAQgVAPQgdAYgJAZQgCgNAIgTg");
	this.shape.setTransform(10.43,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_3, new cjs.Rectangle(0,0,20.9,12.6), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BDBD").s().p("ABWAlQgJgJgOgLQgWgQgfgRQgagQgcgKQglgKgZAGQALgKAUgDQASgDAQADQAgAFAfASQAgASAUAVQANANAIAOQALATABAMQgHgLgOgNg");
	this.shape.setTransform(10.65,6.1125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,21.3,12.3), null);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BDBD").s().p("AhiAAQAPgJAPgGQAdgLAmABQAjABAeAJQAQAFAPAJQASALAGAKQgNgIgQgEQgOgEgQgCQgdgDghgBQgigBgbAEQgkAIgTARQAEgMAQgOg");
	this.shape.setTransform(11.925,2.6208);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0,23.9,5.3), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("ABWAIQgegKgPgBIg2gDQgmgBgOgDQg/gMgOgBQAYACAPACQAQADCBAKQARACAcAKQAgANAZAFQgagEgggMg");
	this.shape.setTransform(14.6,2.4125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0.3,0.1,28.7,4.7), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("ABIABQgagHgMAAQgKgBgjACQggACgMgCQgsgGgUgBQAUAAANACIA3AAQAzAAAPABQAOABAYAIQAbAKAUADQgVgCgbgKg");
	this.shape.setTransform(12.3125,1.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0.4,0,23.900000000000002,2.6), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#471600").s().p("AkODiQgqgagKgxQgIglATghQAPgaAegTQAUgLAngQIBGgaQAngQAcgQQBGgpA+hDQAkgoAXgRQAmgcAlgDQBCgEAnA9QAnA7gZA8QgSAtgtAtQgcAcg5AtQhiBMh0ArQhGAZhAAHIgSABQgnAAgggUg");
	this.shape.setTransform(32.4556,24.563);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,65,49.2), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5E5E5").s().p("AjQAMIAAgXIGhAAIAAAXg");
	this.shape.setTransform(20.875,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,41.8,2.5), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAuANQgPgKgIgDIgfgGQgWgEgHgEIgngOIATAFQAIAEBJATQAKACAOAKQAQAMAOAFQgOgEgSgMg");
	this.shape.setTransform(8.25,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0.5,0.2,15.5,5.8999999999999995), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D66565").s().p("AAyAcQAGgYgKgGIghgUQgVgNgHgGQgZgYgOgKIAWAQIAkAZQAiAXAKAHQAMAIgIAcQgFAWgNAWQANgiADgOg");
	this.shape.setTransform(5.6817,7.7375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0.2,0.2,11,15.200000000000001), null);


(lib.Group_114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BDBD").s().p("AhuBHQgKgJgFgMQgEgNACgLQAKAWASAFQAOAGAWgEQAjgHAqgUQAvgXAYgTQATgQAIgPQALgUgGgUQAQARgHAdQgEAVgSAVQgcAggvAZQgzAZgnABQgeAAgTgPg");
	this.shape.setTransform(12.8514,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_114, new cjs.Rectangle(0,0,25.7,17.2), null);


(lib.Group_113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BDBD").s().p("AhIB8QgmgBgdgPQgkgTgMgbQAxAfBAgIQATgCAlgLIA1gWQA7gdAmgmQAugxAGg5QAJAcgJAlQgGAdgWAfQgjAzhBAjIgeAPIgeAMQgkAJgaAAIgGAAg");
	this.shape.setTransform(18.8314,12.434);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_113, new cjs.Rectangle(0,0,37.7,24.9), null);


(lib.Group_110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BDBD").s().p("AAvBaQgqgFgugaQgygdgWgfQgRgaADgYQABgNAIgLQAIgLALgEQgNAUAFATQADANAQASQAVAVAsAcQAsAbAfAJQAWAHARgCQAYgDANgOQgGAWgbAKQgPAGgUAAIgNgBg");
	this.shape.setTransform(12.809,9.0813);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_110, new cjs.Rectangle(0,0,25.7,18.2), null);


(lib.Group_109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BDBD").s().p("Ag8BbIgdgRIgbgUQgggcgNgXQgUgfgEghQgDgoAPgZQACA5AqAyQAKANAfAaIAxAhQA3AgA1ALQBDAMAzgbQgSAXgkANQgcAKgnAAQhAgCg+gig");
	this.shape.setTransform(18.6428,12.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_109, new cjs.Rectangle(0,0,37.3,25.5), null);


(lib.Group_108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BDBD").s().p("AhjAgQgbgOgJgVQgFgNACgNQACgNAHgJQgCAYANAOQAKAKAWAHQAgAKAxADQAvACAjgHQAXgFAPgIQATgMAFgVQAFAXgTAUQgOARgaALQgnAPg0AAQg6gCgjgSg");
	this.shape.setTransform(13.9832,5.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_108, new cjs.Rectangle(0,0,28,10.5), null);


(lib.Group_107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BDBD").s().p("AglBEIghgEQgrgLgVgNQghgTgTgaQgVgfAAggQAeAzA8AWQARAHAmAIIA7AFQA/ACA1gQQBAgUAfgxQgEAcgaAeQgUAWghASQg5AdhHAAIgFAAIgdgBg");
	this.shape.setTransform(20.7994,6.8813);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_107, new cjs.Rectangle(0,0,41.6,13.8), null);


(lib.Group_84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#210E03").s().p("Ag3jeQAuACAgBBQAiBBgBBaQABBbgiBBQggBBguACg");
	this.shape.setTransform(41.25,22.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#210E03").s().p("AgXCcQghhBAAhbQAAhaAhhBQAghBAwgCIAAG9QgwgCgghBg");
	this.shape_1.setTransform(18.375,22.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#210E03").s().p("AAxBWIgbgcQgagcgNgKIgKgGIgVgOQgKgIABgJQAAgHAIgIQAiggAngVQAEgCACAEQADAEgFADQglAUghAgQgFAFAAADQgBAHAaAOIALAHQANAKAbAdQAVAWAGAGQAEADgDAEQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEgBg");
	this.shape_2.setTransform(51.868,22.2917);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#210E03").s().p("Ag0BPQgCgEAEgDIALgEQAugWASgRQAbgZgMgbQgLgagfgXQgDgCACgFQADgEADADQAiAXAMAeQAPAjgiAeQgTARguAWIgKAEIgDABQgDAAgBgDg");
	this.shape_3.setTransform(8.2222,14.3107);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#210E03").s().p("AgYBbQgBgEAEgCQAKgEAEgTQAEgVALgSQAHgMASgSIAKgLQALgLgDgIQgBgHgPgGQgsgVgwgNQgFgCABgFQACgEAEABQAyAOAtAVQARAHAEANQAEANgPAPIgKALQgRARgHALQgLAQgDAUQgDAZgRAFIgBABQgDAAgCgEg");
	this.shape_4.setTransform(7.8092,32.4063);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#210E03").s().p("ABXBnQgPgKgngNIgugSIg0gUQgWgIgFgQQgFgNAGgNQANggAkgeQAVgSAZgOQAEgDADAFQACAFgEABQgXANgVASQgjAcgMAeQgEALADAIQAEALASAIIBhAlQAoANAQAMQAFADgDAEQgBAAAAABQAAAAgBABQAAAAgBAAQgBAAAAAAg");
	this.shape_5.setTransform(55.8136,16.7304);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#210E03").s().p("Ag8CFQgDgDACgEIAQgXQAagoASgSQAXgYAVgbQASgYgGgPQgDgGgIgGQgtgrg9gWQgFgCACgFQABgFAFACQA9AXAxAsQAJAJAEAHQAJAVgWAbQgUAcgaAZQgQARgaAoIgQAXQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_6.setTransform(6.6542,26.7464);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#210E03").s().p("AAbCDQg/gPgcgdQgGgHgLgQQgZgjgGgXQgEgMAEgKQACgIAMgKQAXgSAhgPQAUgJAngPQBAgXAagPQAFgDACAEQADAFgFACQgdASg+AWQgnAOgTAJQghAOgVASQgKAIgCAFQgCAGADAKQAFAWAYAhIARAWQAZAaA8APQAFABgBAFQgBAEgEAAg");
	this.shape_7.setTransform(57.4821,29.9519);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_8.setTransform(30.425,3.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#210E03").s().p("Ag0ACIAAgDIBpAAIAAADg");
	this.shape_9.setTransform(27.925,3.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_10.setTransform(28.2,6.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#210E03").s().p("Ag0ACIAAgDIBqAAIAAADg");
	this.shape_11.setTransform(30.7,6.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_12.setTransform(30.425,8.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#210E03").s().p("Ag0ADIAAgEIBpAAIAAAEg");
	this.shape_13.setTransform(27.925,8.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_14.setTransform(28.2,11.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#210E03").s().p("Ag0ACIAAgDIBqAAIAAADg");
	this.shape_15.setTransform(30.7,11.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_16.setTransform(30.425,14);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#210E03").s().p("Ag0ACIAAgDIBpAAIAAADg");
	this.shape_17.setTransform(27.925,14);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_18.setTransform(28.2,16.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#210E03").s().p("Ag0ADIAAgFIBqAAIAAAFg");
	this.shape_19.setTransform(30.7,16.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_20.setTransform(30.425,19.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#210E03").s().p("Ag0ADIAAgFIBpAAIAAAFg");
	this.shape_21.setTransform(27.925,19.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_22.setTransform(28.2,21.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#210E03").s().p("Ag0ACIAAgDIBqAAIAAADg");
	this.shape_23.setTransform(30.7,21.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_24.setTransform(30.425,24.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#210E03").s().p("Ag0ADIAAgFIBpAAIAAAFg");
	this.shape_25.setTransform(27.925,24.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_26.setTransform(28.2,27.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#210E03").s().p("Ag0ADIAAgFIBqAAIAAAFg");
	this.shape_27.setTransform(30.7,27.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_28.setTransform(30.425,29.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#210E03").s().p("Ag0ACIAAgDIBpAAIAAADg");
	this.shape_29.setTransform(27.925,29.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_30.setTransform(28.2,32.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#210E03").s().p("Ag0ACIAAgDIBqAAIAAADg");
	this.shape_31.setTransform(30.7,32.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_32.setTransform(30.425,34.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#210E03").s().p("Ag0ACIAAgDIBpAAIAAADg");
	this.shape_33.setTransform(27.925,34.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_34.setTransform(28.2,37.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#210E03").s().p("Ag0ADIAAgFIBqAAIAAAFg");
	this.shape_35.setTransform(30.7,37.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_36.setTransform(30.425,40.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#210E03").s().p("Ag0ACIAAgDIBpAAIAAADg");
	this.shape_37.setTransform(27.925,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_84, new cjs.Rectangle(0,0,69,44.9), null);


(lib.Group_40_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#707070").ss(1.3).p("ADXhoQheBHhyApQhxAqh+AKQgKABgHAIQgGAIAAAKQABAJAHAHQAHAHAKAAIACAAQCFgKB4gtQB5gsBkhLQAIgGABgKQACgKgHgJQgGgIgKgCQgLgBgIAGg");
	this.shape.setTransform(113.3123,126.3609);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#646464").s().p("AjmBuQgKAAgHgHQgHgHgBgJQAAgKAGgIQAHgIAKgBQB+gKBxgqQBygpBehHQAIgGALABQAKACAGAIQAHAJgCAKQgBAKgIAGQhkBLh5AsQh4AtiFAKg");
	this.shape_1.setTransform(113.3123,126.3609);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#727272").ss(1.3).p("ADuAoIgCAAQh9AAh1ggQh1gfhkg+QgJgFgKACQgKACgGAJQgFAJACAKQADAKAIAFQBrBBB8AiQB6AiCFAAIABAAQALAAAHgHQAIgIAAgKQAAgLgHgHQgIgHgKAAg");
	this.shape_2.setTransform(59.0964,128.6714);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A4A").s().p("ADsBaQiFAAh6giQh8gihrhBQgIgFgDgKQgCgKAFgJQAGgJAKgCQAKgCAJAFQBkA+B1AfQB1AgB9AAIACAAQAKAAAIAHQAHAHAAALQAAAKgIAIQgHAHgLAAg");
	this.shape_3.setTransform(59.0964,128.6714);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#888383").ss(1.3).p("AB+jcQAAgKgHgHQgHgIgLAAQgKAAgHAIQgIAHAAAKIAAADQAAB0gyBsQgxBsheBYQgIAHAAAKQAAAKAHAIQAHAIALAAQAKAAAHgGQBlhfA2h2QA2h2AAh/g");
	this.shape_4.setTransform(152.1983,91);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#484848").s().p("Ah2DuQgHgIAAgKQAAgKAIgIQBehWAxhtQAyhsAAh1IAAgCQAAgKAIgIQAHgHAKAAQALAAAHAHQAHAIAAAKIAAACQAAB/g2B2Qg2B2hlBeQgHAHgKAAQgLAAgHgIg");
	this.shape_5.setTransform(152.1983,91);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#747474").ss(1.3).p("ACPC6QhohOg+hmQg/hlgQhyQgBgKgJgGQgIgHgKACQgKABgHAIQgGAJABAKQASB8BEBtQBDBvBvBUQAIAFAHAAQANAAAHgKQAHgIgCgKQgBgLgIgGg");
	this.shape_6.setTransform(16.4069,97.3609);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#515151").s().p("ABwDiQhvhUhDhvQhEhtgSh8QgBgKAGgJQAHgIAKgBQAKgCAIAHQAJAGABAKQAQByA/BlQA+BmBoBOQAIAGABALQACAKgHAIQgHAKgNAAQgHAAgIgFg");
	this.shape_7.setTransform(16.4069,97.3609);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#8E795A").ss(1.3).p("AKNk2QAfAoAYAsQAvBXANBfQABAKAIAGQAHAGAJAAIADAAQALgCAGgIQAGgIgBgLQgRh7hFhvQhFhvhvhTQgIgHgLACQgKABgGAJQgFAHAAAJQABAJAGAHQgagTgbgRQAEACAFAAQAOAAAIgMQAFgJgCgKQgDgKgJgGQhqhBh8ghQh7giiFAAIgBAAQgKAAgHAHQgHAHAAALQAAARAQAGQgZAAgfADQAQgIgBgRQgBgLgIgGQgIgHgKABQiGAKh4AtQh5AthjBLQgIAGgCALQgBAKAGAIQAHAKANAAQAFAAAGgCQgaATgXAWQAGgHAAgKQAAgJgHgHQgHgIgKAAQgLAAgHAHQhlBeg2B2Qg2B2AAB/IAAAAQAAAKAHAHQAHAHALAAQAKAAAHgHQAIgIAAgKQAAheAhhbQASguAZgsQgXAqgQArQgiBbAABeQAACBA8B1QA6ByBrBXQDgC5E9AAQE+AADhi5QBqhXA6hyQA8h1AAiBQAAhzgxhrQgbg7gog1IhFhMAqzj2IA3hP");
	this.shape_8.setTransform(82.465,66.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#585858").s().p("AobHXQhrhXg6hyQg8h1AAiBQAAheAihbQAQgrAXgqQgZAsgSAuQghBbAABeQAAAKgIAIQgHAHgKAAQgLAAgHgHQgHgHAAgKIAAAAQAAh/A2h2QA2h2BlheQAHgHALAAQAKAAAHAIQAHAHAAAJQAAAKgGAHQAXgWAagTQgGACgFAAQgNAAgHgKQgGgIABgKQACgLAIgGQBjhLB5gtQB4gtCGgKQAKgBAIAHQAIAGABALQABARgQAIQAfgDAZAAQgQgGAAgRQAAgLAHgHQAHgHAKAAIABAAQCFAAB7AiQB8AhBqBBQAJAGADAKQACAKgFAJQgIAMgOAAQgFAAgEgCQAbARAaATQgGgHgBgJQAAgJAFgHQAGgJAKgBQALgCAIAHQBvBTBFBvQBFBvARB7QABALgGAIQgGAIgLACIgDAAQgJAAgHgGQgIgGgBgKQgNhfgvhXQgYgsgfgoIhFhMIBFBMQAoA1AbA7QAxBrAABzQAACBg8B1Qg6ByhqBXQjhC5k+AAQk9AAjgi5gAqzj2IA3hPg");
	this.shape_9.setTransform(82.465,66.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_40_0, new cjs.Rectangle(-2.4,-0.3,168.20000000000002,139), null);


(lib.Group_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#210E03").s().p("Ag4jeQAwACAgBCQAhBBAABZQAABaghBCQggBBgwACg");
	this.shape.setTransform(41.225,22.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#210E03").s().p("AgXCcQghhBAAhbQAAhaAhhBQAghBAwgCIAAG9QgwgCgghBg");
	this.shape_1.setTransform(18.325,22.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#210E03").s().p("AAyBWQgHgGgVgXQgWgZgQgMIgLgHQgfgRABgNQAAgHAJgIQAighAmgUQAEgDADAFQADAEgFACQgnAWgfAeQgGAFAAAEQgBAGAbAPIALAHQAOALAZAcQAQARAMAKQADAEgDAEIgEABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_2.setTransform(51.836,22.3304);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#210E03").s().p("Ag0BPQgCgEAEgDIAKgEQAvgWASgRQAbgZgMgbQgNgbgdgWQgEgCADgFQADgDADACQAhAXANAeQAPAjgiAeQgTARguAWIgLAFIgCAAQgCAAgCgDg");
	this.shape_3.setTransform(8.2119,14.3479);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#210E03").s().p("AgTBfQgEAAgBgDQgCgFAFgBQAMgEACgTQAEgWALgRQAHgMASgSIAKgLQAKgLgBgIQgDgIgNgFQgqgUgzgPQgFgBACgFQABgFAFACQAyAOAsAUQASAKADAKQAEANgOAQIgKAKQgTAUgGAJQgKAQgEAUQgDAZgQAFg");
	this.shape_4.setTransform(7.7833,32.3983);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#210E03").s().p("ABXBnQgQgKgmgNIhiglQgVgJgGgQQgEgNAFgNQANggAkgeQAWgSAYgOQAFgDACAFQACAEgEADQgXANgVARQgiAcgMAeQgFALADAJQAFAMARAGIBOAeIAUAHQAoAPAQAKQADADgCAEQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_5.setTransform(55.7679,16.7304);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#210E03").s().p("Ag7CFQgEgDACgEIAQgXQAdgrAQgPQAXgYAVgbQARgYgGgPQgDgFgIgHQgugrg8gWQgFgCACgFQABgFAFACQA+AYAwArQAKAKADAGQAIATgUAeQgVAcgZAYQgRARgaAoIgPAXQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDgBg");
	this.shape_6.setTransform(6.6085,26.7464);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#210E03").s().p("AAbCDQg/gOgcgeQgHgHgLgQQgZgkgFgWQgEgNADgJQAEgJALgJQAXgSAhgPQAVgKAmgNQA+gWAcgRQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQADAEgFACQgcARhAAXQgoAPgSAIQggAPgWARQgJAHgCAGQgDAHADAKQAGAVAYAhQAKAPAGAHQAaAbA8AOQAFABgBAFQgBAEgEAAg");
	this.shape_7.setTransform(57.4658,29.9667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#210E03").s().p("AgcAKIAAgTIA4AAIAAATg");
	this.shape_8.setTransform(30.4,3.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#210E03").s().p("Ag0ACIAAgDIBpAAIAAADg");
	this.shape_9.setTransform(27.9,3.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_10.setTransform(28.175,6.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#210E03").s().p("Ag0ADIAAgFIBpAAIAAAFg");
	this.shape_11.setTransform(30.675,6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#210E03").s().p("AgcAKIAAgTIA4AAIAAATg");
	this.shape_12.setTransform(30.4,8.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#210E03").s().p("Ag0ADIAAgEIBpAAIAAAEg");
	this.shape_13.setTransform(27.9,8.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_14.setTransform(28.175,11.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#210E03").s().p("Ag0ACIAAgDIBpAAIAAADg");
	this.shape_15.setTransform(30.675,11.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#210E03").s().p("AgcAKIAAgTIA4AAIAAATg");
	this.shape_16.setTransform(30.4,14.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#210E03").s().p("Ag0ADIAAgFIBpAAIAAAFg");
	this.shape_17.setTransform(27.9,14.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_18.setTransform(28.175,16.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#210E03").s().p("Ag0ADIAAgFIBpAAIAAAFg");
	this.shape_19.setTransform(30.675,16.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#210E03").s().p("AgcAKIAAgTIA4AAIAAATg");
	this.shape_20.setTransform(30.4,19.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#210E03").s().p("Ag0ADIAAgFIBpAAIAAAFg");
	this.shape_21.setTransform(27.9,19.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_22.setTransform(28.175,21.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#210E03").s().p("Ag0ACIAAgDIBpAAIAAADg");
	this.shape_23.setTransform(30.675,21.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#210E03").s().p("AgcAKIAAgTIA4AAIAAATg");
	this.shape_24.setTransform(30.4,24.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#210E03").s().p("Ag0ADIAAgFIBpAAIAAAFg");
	this.shape_25.setTransform(27.9,24.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_26.setTransform(28.175,27.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#210E03").s().p("Ag0ACIAAgDIBpAAIAAADg");
	this.shape_27.setTransform(30.675,27.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#210E03").s().p("AgcAKIAAgTIA4AAIAAATg");
	this.shape_28.setTransform(30.4,29.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#210E03").s().p("Ag0ACIAAgDIBpAAIAAADg");
	this.shape_29.setTransform(27.9,29.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_30.setTransform(28.175,32.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#210E03").s().p("Ag0ACIAAgDIBpAAIAAADg");
	this.shape_31.setTransform(30.675,32.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#210E03").s().p("AgcAKIAAgTIA4AAIAAATg");
	this.shape_32.setTransform(30.4,35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#210E03").s().p("Ag0ADIAAgFIBpAAIAAAFg");
	this.shape_33.setTransform(27.9,35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#210E03").s().p("AgbAKIAAgTIA3AAIAAATg");
	this.shape_34.setTransform(28.175,37.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#210E03").s().p("Ag0ADIAAgFIBpAAIAAAFg");
	this.shape_35.setTransform(30.675,37.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#210E03").s().p("AgcAKIAAgTIA4AAIAAATg");
	this.shape_36.setTransform(30.4,40.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#210E03").s().p("Ag0ACIAAgDIBpAAIAAADg");
	this.shape_37.setTransform(27.9,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5_0, new cjs.Rectangle(0,0,69,44.9), null);


(lib.Group_3_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7AwQgagMgFgSQAFgfAagXQAagXAhAAQAiAAAaAXQAaAXAFAfQgFASgaAMQgaAMgigBQghABgagMg");
	this.shape.setTransform(9.125,5.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_30, new cjs.Rectangle(0,0,18.3,11.9), null);


(lib.Group_3_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8AwQgZgNgFgRQAFggAZgWQAbgXAhAAQAiAAAaAXQAZAWAGAgQgGASgZAMQgaAMgigBQghABgbgMg");
	this.shape.setTransform(9.125,5.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_17, new cjs.Rectangle(0,0,18.3,11.9), null);


(lib.Group_3_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7AwQgagMgFgSQAFghAagVQAZgWAiAAQAiAAAaAWQAZAVAGAhQgFASgaAMQgZALgjAAQgjAAgYgLg");
	this.shape.setTransform(9.125,5.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_16, new cjs.Rectangle(0,0,18.3,11.9), null);


(lib.Group_3_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7AwQgZgMgGgSQAGghAZgVQAagWAhAAQAiAAAaAWQAaAWAFAgQgFASgaAMQgZALgjAAQgiAAgZgLg");
	this.shape.setTransform(9.125,5.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_15, new cjs.Rectangle(0,0,18.3,11.9), null);


(lib.Group_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7AwQgZgMgGgSQAGggAZgWQAagWAhAAQAiAAAaAWQAaAWAFAgQgFASgaAMQgbALghAAQggAAgbgLg");
	this.shape.setTransform(9.125,5.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_3, new cjs.Rectangle(0,0,18.3,11.9), null);


(lib.Group_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7AwQgagNgFgRQAFggAagWQAagXAhAAQAiAAAaAXQAaAWAFAgQgFARgaANQgaAMgigBQghABgagMg");
	this.shape.setTransform(9.125,5.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_1, new cjs.Rectangle(0,0,18.3,11.9), null);


(lib.TmaveModra1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9B0B").ss(0.1).p("AABA2IgBhr");
	this.shape.setTransform(6.3,5.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9B0B").ss(0.1).p("AAAg1IABBr");
	this.shape_1.setTransform(6.3,5.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9B0B").ss(0.2).p("AAAg1IABBr");
	this.shape_2.setTransform(6.3,5.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9B0B").ss(0.3).p("AAAg1IABBr");
	this.shape_3.setTransform(6.3,5.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF9B0B").ss(0.4).p("AAAg1IABBr");
	this.shape_4.setTransform(6.3,5.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF9B0B").ss(0.5).p("AAAg1IABBr");
	this.shape_5.setTransform(6.3,5.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF9B0B").ss(0.6).p("AAAg1IABBr");
	this.shape_6.setTransform(6.3,5.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF9B0B").ss(0.7).p("AAAg1IABBr");
	this.shape_7.setTransform(6.3,5.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF9B0B").ss(0.8).p("AAAg1IABBr");
	this.shape_8.setTransform(6.3,5.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF9B0B").ss(0.9).p("AAAg1IABBr");
	this.shape_9.setTransform(6.3,5.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF9B0B").p("AAAg1IABBr");
	this.shape_10.setTransform(6.3,5.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF9B0B").ss(1.1).p("AAAg1IABBr");
	this.shape_11.setTransform(6.3,5.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF9B0B").ss(1.2).p("AAAg1IABBr");
	this.shape_12.setTransform(6.3,5.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF9B0B").ss(1.3).p("AAAg1IABBr");
	this.shape_13.setTransform(6.3,5.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF9B0B").ss(1.4).p("AAAg1IABBr");
	this.shape_14.setTransform(6.3,5.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF9B0B").ss(1.5).p("AAAg1IABBr");
	this.shape_15.setTransform(6.3,5.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF9B0B").ss(1.6).p("AAAg1IABBr");
	this.shape_16.setTransform(6.3,5.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF9B0B").ss(1.7).p("AAAg1IABBr");
	this.shape_17.setTransform(6.3,5.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF9B0B").ss(1.8).p("AAAg1IABBr");
	this.shape_18.setTransform(6.3,5.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF9B0B").ss(1.9).p("AAAg1IABBr");
	this.shape_19.setTransform(6.3,5.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF9B0B").ss(2).p("AAAg1IABBr");
	this.shape_20.setTransform(6.3,5.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF9B0B").ss(2.1).p("AAAg1IABBr");
	this.shape_21.setTransform(6.3,5.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF9B0B").ss(2.2).p("AAAg1IABBr");
	this.shape_22.setTransform(6.3,5.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF9B0B").ss(2.3).p("AAAg1IABBr");
	this.shape_23.setTransform(6.3,5.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF9B0B").ss(2.4).p("AAAg1IABBr");
	this.shape_24.setTransform(6.3,5.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF9B0B").ss(2.5).p("AAAg1IABBr");
	this.shape_25.setTransform(6.3,5.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF9B0B").ss(2.6).p("AAAg1IABBr");
	this.shape_26.setTransform(6.3,5.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF9B0B").ss(2.7).p("AAAg1IABBr");
	this.shape_27.setTransform(6.3,5.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF9B0B").ss(2.8).p("AAAg1IABBr");
	this.shape_28.setTransform(6.3,5.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF9B0B").ss(2.9).p("AAAg1IABBr");
	this.shape_29.setTransform(6.3,5.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF9B0B").ss(3).p("AAAg1IABBr");
	this.shape_30.setTransform(6.3,5.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF9B0B").ss(3.1).p("AAAg1IABBr");
	this.shape_31.setTransform(6.3,5.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF9B0B").ss(3.2).p("AAAg1IABBr");
	this.shape_32.setTransform(6.3,5.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF9B0B").ss(3.3).p("AAAg1IABBr");
	this.shape_33.setTransform(6.3,5.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF9B0B").ss(3.4).p("AAAg1IABBr");
	this.shape_34.setTransform(6.3,5.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF9B0B").ss(3.5).p("AAAg1IABBr");
	this.shape_35.setTransform(6.3,5.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF9B0B").ss(3.6).p("AAAg1IABBr");
	this.shape_36.setTransform(6.3,5.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF9B0B").ss(3.7).p("AAAg1IABBr");
	this.shape_37.setTransform(6.3,5.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF9B0B").ss(3.8).p("AAAg1IABBr");
	this.shape_38.setTransform(6.3,5.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF9B0B").ss(3.9).p("AAAg1IABBr");
	this.shape_39.setTransform(6.3,5.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF9B0B").ss(4).p("AAAg1IABBr");
	this.shape_40.setTransform(6.3,5.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF9B0B").ss(4.1).p("AAAg1IABBr");
	this.shape_41.setTransform(6.3,5.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF9B0B").ss(4.2).p("AAAg1IABBr");
	this.shape_42.setTransform(6.3,5.425);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF9B0B").ss(4.3).p("AAAg1IABBr");
	this.shape_43.setTransform(6.3,5.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF9B0B").ss(4.4).p("AAAg1IABBr");
	this.shape_44.setTransform(6.3,5.425);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF9B0B").ss(4.5).p("AAAg1IABBr");
	this.shape_45.setTransform(6.3,5.425);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF9B0B").ss(4.6).p("AAAg1IABBr");
	this.shape_46.setTransform(6.3,5.425);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF9B0B").ss(4.7).p("AAAg1IABBr");
	this.shape_47.setTransform(6.3,5.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF9B0B").ss(4.8).p("AAAg1IABBr");
	this.shape_48.setTransform(6.3,5.425);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF9B0B").ss(4.9).p("AAAg1IABBr");
	this.shape_49.setTransform(6.3,5.425);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF9B0B").ss(5).p("AAAg1IABBr");
	this.shape_50.setTransform(6.3,5.425);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF9B0B").ss(5.1).p("AAAg1IABBr");
	this.shape_51.setTransform(6.3,5.425);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF9B0B").ss(5.2).p("AAAg1IABBr");
	this.shape_52.setTransform(6.3,5.425);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF9B0B").ss(5.3).p("AAAg1IABBr");
	this.shape_53.setTransform(6.3,5.425);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF9B0B").ss(5.4).p("AAAg1IABBr");
	this.shape_54.setTransform(6.3,5.425);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF9B0B").ss(5.5).p("AAAg1IABBr");
	this.shape_55.setTransform(6.3,5.425);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF9B0B").ss(5.6).p("AAAg1IABBr");
	this.shape_56.setTransform(6.3,5.425);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF9B0B").ss(5.7).p("AAAg1IABBr");
	this.shape_57.setTransform(6.3,5.425);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF9B0B").ss(5.8).p("AAAg1IABBr");
	this.shape_58.setTransform(6.3,5.425);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF9B0B").ss(5.9).p("AAAg1IABBr");
	this.shape_59.setTransform(6.3,5.425);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF9B0B").ss(6).p("AAAg1IABBr");
	this.shape_60.setTransform(6.3,5.425);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF9B0B").ss(6).p("AABA2IgBhr");
	this.shape_61.setTransform(6.3,5.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).wait(1));

	// Vrstva_2
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF9B0B").s().p("Ag9gyIB7gEIg6Bsg");
	this.shape_62.setTransform(6.175,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,12.4,24.3);


(lib.SipkaZlutaHUvnitr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFAA00").ss(0.1).p("ACFBFQglhLhNgkQhKgjhRAS");
	this.shape.setTransform(13.6954,6.5805);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFAA00").ss(0.1).p("AiIg7QBRgSBKAjQBNAkAlBL");
	this.shape_1.setTransform(13.6954,6.5805);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFAA00").ss(0.2).p("AiIg7QBRgSBKAjQBNAkAlBL");
	this.shape_2.setTransform(13.6954,6.5805);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFAA00").ss(0.3).p("AiIg7QBRgSBKAjQBNAkAlBL");
	this.shape_3.setTransform(13.6954,6.5805);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFAA00").ss(0.4).p("AiIg7QBRgSBKAjQBNAkAlBL");
	this.shape_4.setTransform(13.6954,6.5805);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFAA00").ss(0.5).p("AiIg7QBRgSBKAjQBNAkAlBL");
	this.shape_5.setTransform(13.6954,6.5805);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFAA00").ss(0.6).p("AiIg7QBRgSBKAjQBNAkAlBL");
	this.shape_6.setTransform(13.6954,6.5805);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFAA00").ss(0.7).p("AiIg7QBRgSBKAjQBNAkAlBL");
	this.shape_7.setTransform(13.6954,6.5805);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFAA00").ss(0.8).p("AiIg7QBRgSBKAjQBNAkAlBL");
	this.shape_8.setTransform(13.6954,6.5805);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFAA00").ss(0.9).p("AiIg7QBRgSBKAjQBNAkAlBL");
	this.shape_9.setTransform(13.6954,6.5805);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFAA00").p("AiIg7QBRgSBKAjQBNAkAlBL");
	this.shape_10.setTransform(13.6954,6.5805);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFAA00").p("AiIg7QBQgSBLAjQBMAkAmBL");
	this.shape_11.setTransform(13.7034,6.5749);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFAA00").ss(1.1).p("AiIg7QBQgSBLAjQBMAkAmBL");
	this.shape_12.setTransform(13.7076,6.5719);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFAA00").ss(1.2).p("AiIg7QBQgSBLAjQBMAkAmBL");
	this.shape_13.setTransform(13.7285,6.5571);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFAA00").ss(1.2).p("AiIg6QBQgSBLAjQBMAkAmBK");
	this.shape_14.setTransform(13.7411,6.5482);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFAA00").ss(1.3).p("AiIg6QBQgSBLAjQBMAkAmBK");
	this.shape_15.setTransform(13.7452,6.5452);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFAA00").ss(1.3).p("AiJg6QBRgSBKAjQBNAkAlBK");
	this.shape_16.setTransform(13.7536,6.5393);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFAA00").ss(1.4).p("AiJg6QBRgSBKAjQBNAkAlBK");
	this.shape_17.setTransform(13.7661,6.5304);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFAA00").ss(1.5).p("AiJg6QBRgSBKAjQBNAkAlBK");
	this.shape_18.setTransform(13.787,6.5155);
	this.shape_18._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFAA00").ss(1.6).p("AiJg6QBQgSBLAjQBMAkAmBK");
	this.shape_19.setTransform(13.8037,6.5036);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFAA00").ss(1.6).p("AiJg6QBQgSBLAjQBMAkAmBL");
	this.shape_20.setTransform(13.8121,6.4977);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFAA00").ss(1.7).p("AiJg6QBQgSBLAjQBMAkAmBL");
	this.shape_21.setTransform(13.8246,6.4888);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFAA00").ss(1.8).p("AiJg6QBQgSBLAjQBMAkAmBL");
	this.shape_22.setTransform(13.8455,6.474);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFAA00").ss(1.8).p("AiKg6QBRgSBKAjQBNAkAlBL");
	this.shape_23.setTransform(13.8539,6.468);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFAA00").ss(1.9).p("AiKg6QBRgSBKAjQBNAkAlBL");
	this.shape_24.setTransform(13.8623,6.4621);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFAA00").ss(2).p("AiKg5QBRgSBKAjQBNAkAlBK");
	this.shape_25.setTransform(13.8831,6.4473);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFAA00").ss(2.1).p("AiKg5QBQgSBLAjQBMAkAmBK");
	this.shape_26.setTransform(13.904,6.4324);
	this.shape_26._off = true;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFAA00").ss(2.2).p("AiKg5QBQgSBLAjQBMAkAmBK");
	this.shape_27.setTransform(13.9208,6.4205);
	this.shape_27._off = true;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFAA00").ss(2.3).p("AiKg5QBQgSBLAjQBMAkAmBK");
	this.shape_28.setTransform(13.9417,6.4057);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFAA00").ss(2.3).p("AiLg5QBRgSBKAjQBNAkAlBL");
	this.shape_29.setTransform(13.95,6.3998);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFAA00").ss(2.4).p("AiLg5QBRgSBKAjQBNAkAlBL");
	this.shape_30.setTransform(13.9626,6.3909);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFAA00").ss(2.5).p("AiLg5QBRgSBKAjQBNAkAlBL");
	this.shape_31.setTransform(13.9793,6.379);
	this.shape_31._off = true;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFAA00").ss(2.6).p("AiLg5QBQgSBLAjQBMAkAmBL");
	this.shape_32.setTransform(14.0002,6.3642);
	this.shape_32._off = true;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFAA00").ss(2.7).p("AiLg4QBQgSBLAjQBMAkAmBK");
	this.shape_33.setTransform(14.0211,6.3493);
	this.shape_33._off = true;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFAA00").ss(2.8).p("AiLg4QBQgSBLAjQBMAkAmBK");
	this.shape_34.setTransform(14.0378,6.3374);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFAA00").ss(2.8).p("AiMg4QBRgSBKAjQBNAkAlBK");
	this.shape_35.setTransform(14.0503,6.3285);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFAA00").ss(2.9).p("AiMg4QBRgSBKAjQBNAkAlBK");
	this.shape_36.setTransform(14.0587,6.3226);
	this.shape_36._off = true;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFAA00").ss(3).p("AiMg4QBRgSBKAjQBNAkAlBK");
	this.shape_37.setTransform(14.0796,6.3078);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFAA00").ss(3).p("AiMg4QBRgSBKAjQBNAkAlBL");
	this.shape_38.setTransform(14.0921,6.2989);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFAA00").ss(3.1).p("AiMg4QBRgSBKAjQBNAkAlBL");
	this.shape_39.setTransform(14.0963,6.2959);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFAA00").ss(3.1).p("AiMg4QBQgSBLAjQBMAkAmBL");
	this.shape_40.setTransform(14.1005,6.2929);
	this.shape_40._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFAA00").ss(3.2).p("AiMg4QBQgSBLAjQBMAkAmBL");
	this.shape_41.setTransform(14.1172,6.2811);
	this.shape_41._off = true;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFAA00").ss(3.3).p("AiMg4QBQgSBLAjQBMAkAmBL");
	this.shape_42.setTransform(14.1381,6.2662);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFAA00").ss(3.3).p("AiNg4QBRgSBKAjQBNAkAlBL");
	this.shape_43.setTransform(14.1506,6.2573);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFAA00").ss(3.4).p("AiNg4QBRgSBKAjQBNAkAlBL");
	this.shape_44.setTransform(14.1548,6.2543);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFAA00").ss(3.4).p("AiNg3QBRgSBKAjQBNAkAlBK");
	this.shape_45.setTransform(14.1632,6.2484);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFAA00").ss(3.5).p("AiNg3QBRgSBKAjQBNAkAlBK");
	this.shape_46.setTransform(14.1757,6.2395);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFAA00").ss(3.5).p("ACABIQglhKhNgkQhKgjhRAS");
	this.shape_47.setTransform(14.1841,6.2336);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13,p:{x:13.7285,y:6.5571}}]},1).to({state:[{t:this.shape_13,p:{x:13.7327,y:6.5541}}]},1).to({state:[{t:this.shape_13,p:{x:13.7369,y:6.5511}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{x:13.7452,y:6.5452}}]},1).to({state:[{t:this.shape_15,p:{x:13.7494,y:6.5422}}]},1).to({state:[{t:this.shape_16,p:{x:13.7536,y:6.5393}}]},1).to({state:[{t:this.shape_16,p:{x:13.7578,y:6.5363}}]},1).to({state:[{t:this.shape_16,p:{x:13.7619,y:6.5333}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19,p:{x:13.8037,y:6.5036}}]},1).to({state:[{t:this.shape_19,p:{x:13.8079,y:6.5007}}]},1).to({state:[{t:this.shape_20,p:{x:13.8121,y:6.4977}}]},1).to({state:[{t:this.shape_20,p:{x:13.8163,y:6.4947}}]},1).to({state:[{t:this.shape_20,p:{x:13.8205,y:6.4918}}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22,p:{x:13.8455,y:6.474}}]},1).to({state:[{t:this.shape_22,p:{x:13.8497,y:6.471}}]},1).to({state:[{t:this.shape_23,p:{x:13.8539,y:6.468}}]},1).to({state:[{t:this.shape_23,p:{x:13.8581,y:6.4651}}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28,p:{x:13.9417,y:6.4057}}]},1).to({state:[{t:this.shape_28,p:{x:13.9458,y:6.4027}}]},1).to({state:[{t:this.shape_29,p:{x:13.95,y:6.3998}}]},1).to({state:[{t:this.shape_29,p:{x:13.9542,y:6.3968}}]},1).to({state:[{t:this.shape_29,p:{x:13.9584,y:6.3938}}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34,p:{x:14.0378,y:6.3374}}]},1).to({state:[{t:this.shape_34,p:{x:14.042,y:6.3345}}]},1).to({state:[{t:this.shape_34,p:{x:14.0461,y:6.3315}}]},1).to({state:[{t:this.shape_35,p:{x:14.0503,y:6.3285}}]},1).to({state:[{t:this.shape_35,p:{x:14.0545,y:6.3256}}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37,p:{x:14.0796,y:6.3078}}]},1).to({state:[{t:this.shape_37,p:{x:14.0838,y:6.3048}}]},1).to({state:[{t:this.shape_37,p:{x:14.0879,y:6.3018}}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42,p:{x:14.1381,y:6.2662}}]},1).to({state:[{t:this.shape_42,p:{x:14.1423,y:6.2633}}]},1).to({state:[{t:this.shape_42,p:{x:14.1464,y:6.2603}}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44,p:{x:14.1548,y:6.2543}}]},1).to({state:[{t:this.shape_44,p:{x:14.159,y:6.2514}}]},1).to({state:[{t:this.shape_45,p:{x:14.1632,y:6.2484}}]},1).to({state:[{t:this.shape_45,p:{x:14.1673,y:6.2454}}]},1).to({state:[{t:this.shape_45,p:{x:14.1715,y:6.2425}}]},1).to({state:[{t:this.shape_46,p:{x:14.1757,y:6.2395}}]},1).to({state:[{t:this.shape_46,p:{x:14.1799,y:6.2365}}]},1).to({state:[{t:this.shape_47}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).wait(4).to({_off:true},1).wait(152));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(8).to({_off:false},0).wait(3).to({_off:true},1).wait(148));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(12).to({_off:false},0).wait(4).to({_off:true},1).wait(143));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(17).to({_off:false},0).wait(4).to({_off:true},1).wait(138));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(22).to({_off:false},0).wait(3).to({_off:true},1).wait(134));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(26).to({_off:false},0).wait(4).to({_off:true},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(31).to({_off:false},0).wait(4).to({_off:true},1).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(36).to({_off:false},0).wait(3).to({_off:true},1).wait(120));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(40).to({_off:false},0).wait(3).to({x:13.6993,y:6.5778},0).to({_off:true},1).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(45).to({_off:false},0).wait(1).to({x:13.7118,y:6.5689},0).wait(1).to({x:13.716,y:6.566},0).wait(1).to({x:13.7202,y:6.563},0).wait(1).to({x:13.7243,y:6.56},0).to({_off:true},1).wait(110));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(59).to({_off:false},0).wait(1).to({x:13.7703,y:6.5274},0).wait(1).to({x:13.7745,y:6.5244},0).wait(1).to({x:13.7787,y:6.5215},0).wait(1).to({x:13.7828,y:6.5185},0).to({_off:true},1).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(64).to({_off:false},0).wait(1).to({x:13.7912,y:6.5126},0).wait(1).to({x:13.7954,y:6.5096},0).wait(1).to({x:13.7996,y:6.5066},0).to({_off:true},1).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(73).to({_off:false},0).wait(1).to({x:13.8288,y:6.4858},0).wait(1).to({x:13.833,y:6.4829},0).wait(1).to({x:13.8372,y:6.4799},0).wait(1).to({x:13.8414,y:6.4769},0).to({_off:true},1).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(82).to({_off:false},0).wait(1).to({x:13.8664,y:6.4591},0).wait(1).to({x:13.8706,y:6.4562},0).wait(1).to({x:13.8748,y:6.4532},0).wait(1).to({x:13.879,y:6.4502},0).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(87).to({_off:false},0).wait(1).to({x:13.8873,y:6.4443},0).wait(1).to({x:13.8915,y:6.4413},0).wait(1).to({x:13.8957,y:6.4384},0).wait(1).to({x:13.8999,y:6.4354},0).to({_off:true},1).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(92).to({_off:false},0).wait(1).to({x:13.9082,y:6.4295},0).wait(1).to({x:13.9124,y:6.4265},0).wait(1).to({x:13.9166,y:6.4235},0).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(96).to({_off:false},0).wait(1).to({x:13.9249,y:6.4176},0).wait(1).to({x:13.9291,y:6.4146},0).wait(1).to({x:13.9333,y:6.4116},0).wait(1).to({x:13.9375,y:6.4087},0).to({_off:true},1).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(106).to({_off:false},0).wait(1).to({x:13.9667,y:6.3879},0).wait(1).to({x:13.9709,y:6.3849},0).wait(1).to({x:13.9751,y:6.382},0).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(110).to({_off:false},0).wait(1).to({x:13.9835,y:6.376},0).wait(1).to({x:13.9876,y:6.3731},0).wait(1).to({x:13.9918,y:6.3701},0).wait(1).to({x:13.996,y:6.3671},0).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(115).to({_off:false},0).wait(1).to({x:14.0044,y:6.3612},0).wait(1).to({x:14.0085,y:6.3582},0).wait(1).to({x:14.0127,y:6.3553},0).wait(1).to({x:14.0169,y:6.3523},0).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(120).to({_off:false},0).wait(1).to({x:14.0252,y:6.3464},0).wait(1).to({x:14.0294,y:6.3434},0).wait(1).to({x:14.0336,y:6.3404},0).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(129).to({_off:false},0).wait(1).to({x:14.0629,y:6.3196},0).wait(1).to({x:14.067,y:6.3167},0).wait(1).to({x:14.0712,y:6.3137},0).wait(1).to({x:14.0754,y:6.3107},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(139).to({_off:false},0).wait(1).to({x:14.1047,y:6.29},0).wait(1).to({x:14.1088,y:6.287},0).wait(1).to({x:14.113,y:6.284},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(143).to({_off:false},0).wait(1).to({x:14.1214,y:6.2781},0).wait(1).to({x:14.1256,y:6.2751},0).wait(1).to({x:14.1297,y:6.2722},0).wait(1).to({x:14.1339,y:6.2692},0).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-6.5,31.7,21.7);


(lib.SipkaVehicle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9B0B").ss(0.1).p("AAAJxIAAzh");
	this.shape.setTransform(5.2,83.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9B0B").ss(0.1).p("AAApwIAATh");
	this.shape_1.setTransform(5.2,83.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9B0B").ss(0.2).p("AAApwIAATh");
	this.shape_2.setTransform(5.2,83.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9B0B").ss(0.3).p("AAApwIAATh");
	this.shape_3.setTransform(5.2,83.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF9B0B").ss(0.4).p("AAApwIAATh");
	this.shape_4.setTransform(5.2,83.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF9B0B").ss(0.5).p("AAApwIAATh");
	this.shape_5.setTransform(5.2,83.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF9B0B").ss(0.6).p("AAApwIAATh");
	this.shape_6.setTransform(5.2,83.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF9B0B").ss(0.7).p("AAApwIAATh");
	this.shape_7.setTransform(5.2,83.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF9B0B").ss(0.8).p("AAApwIAATh");
	this.shape_8.setTransform(5.2,83.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF9B0B").ss(0.9).p("AAApwIAATh");
	this.shape_9.setTransform(5.2,83.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF9B0B").p("AAApwIAATh");
	this.shape_10.setTransform(5.2,83.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF9B0B").ss(1.1).p("AAApwIAATh");
	this.shape_11.setTransform(5.2,83.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF9B0B").ss(1.2).p("AAApwIAATh");
	this.shape_12.setTransform(5.2,83.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF9B0B").ss(1.3).p("AAApwIAATh");
	this.shape_13.setTransform(5.2,83.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF9B0B").ss(1.4).p("AAApwIAATh");
	this.shape_14.setTransform(5.2,83.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF9B0B").ss(1.5).p("AAApwIAATh");
	this.shape_15.setTransform(5.2,83.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF9B0B").ss(1.6).p("AAApwIAATh");
	this.shape_16.setTransform(5.2,83.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF9B0B").ss(1.7).p("AAApwIAATh");
	this.shape_17.setTransform(5.2,83.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF9B0B").ss(1.8).p("AAApwIAATh");
	this.shape_18.setTransform(5.2,83.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF9B0B").ss(1.9).p("AAApwIAATh");
	this.shape_19.setTransform(5.2,83.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF9B0B").ss(2).p("AAApwIAATh");
	this.shape_20.setTransform(5.2,83.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF9B0B").ss(2.1).p("AAApwIAATh");
	this.shape_21.setTransform(5.2,83.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF9B0B").ss(2.2).p("AAApwIAATh");
	this.shape_22.setTransform(5.2,83.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF9B0B").ss(2.3).p("AAApwIAATh");
	this.shape_23.setTransform(5.2,83.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF9B0B").ss(2.4).p("AAApwIAATh");
	this.shape_24.setTransform(5.2,83.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF9B0B").ss(2.5).p("AAApwIAATh");
	this.shape_25.setTransform(5.2,83.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF9B0B").ss(2.6).p("AAApwIAATh");
	this.shape_26.setTransform(5.2,83.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF9B0B").ss(2.7).p("AAApwIAATh");
	this.shape_27.setTransform(5.2,83.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF9B0B").ss(2.8).p("AAApwIAATh");
	this.shape_28.setTransform(5.2,83.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF9B0B").ss(2.9).p("AAApwIAATh");
	this.shape_29.setTransform(5.2,83.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF9B0B").ss(3).p("AAApwIAATh");
	this.shape_30.setTransform(5.2,83.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF9B0B").ss(3.1).p("AAApwIAATh");
	this.shape_31.setTransform(5.2,83.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF9B0B").ss(3.2).p("AAApwIAATh");
	this.shape_32.setTransform(5.2,83.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF9B0B").ss(3.3).p("AAApwIAATh");
	this.shape_33.setTransform(5.2,83.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF9B0B").ss(3.4).p("AAApwIAATh");
	this.shape_34.setTransform(5.2,83.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF9B0B").ss(3.5).p("AAApwIAATh");
	this.shape_35.setTransform(5.2,83.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF9B0B").ss(3.6).p("AAApwIAATh");
	this.shape_36.setTransform(5.2,83.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF9B0B").ss(3.7).p("AAApwIAATh");
	this.shape_37.setTransform(5.2,83.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF9B0B").ss(3.8).p("AAApwIAATh");
	this.shape_38.setTransform(5.2,83.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF9B0B").ss(3.9).p("AAApwIAATh");
	this.shape_39.setTransform(5.2,83.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF9B0B").ss(4).p("AAApwIAATh");
	this.shape_40.setTransform(5.2,83.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF9B0B").ss(4.1).p("AAApwIAATh");
	this.shape_41.setTransform(5.2,83.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF9B0B").ss(4.2).p("AAApwIAATh");
	this.shape_42.setTransform(5.2,83.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF9B0B").ss(4.3).p("AAApwIAATh");
	this.shape_43.setTransform(5.2,83.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF9B0B").ss(4.4).p("AAApwIAATh");
	this.shape_44.setTransform(5.2,83.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF9B0B").ss(4.5).p("AAApwIAATh");
	this.shape_45.setTransform(5.2,83.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF9B0B").ss(4.6).p("AAApwIAATh");
	this.shape_46.setTransform(5.2,83.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF9B0B").ss(4.7).p("AAApwIAATh");
	this.shape_47.setTransform(5.2,83.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF9B0B").ss(4.8).p("AAApwIAATh");
	this.shape_48.setTransform(5.2,83.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF9B0B").ss(4.9).p("AAApwIAATh");
	this.shape_49.setTransform(5.2,83.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF9B0B").ss(5).p("AAApwIAATh");
	this.shape_50.setTransform(5.2,83.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF9B0B").ss(5.1).p("AAApwIAATh");
	this.shape_51.setTransform(5.2,83.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF9B0B").ss(5.2).p("AAApwIAATh");
	this.shape_52.setTransform(5.2,83.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF9B0B").ss(5.3).p("AAApwIAATh");
	this.shape_53.setTransform(5.2,83.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF9B0B").ss(5.4).p("AAApwIAATh");
	this.shape_54.setTransform(5.2,83.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF9B0B").ss(5.5).p("AAApwIAATh");
	this.shape_55.setTransform(5.2,83.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF9B0B").ss(5.6).p("AAApwIAATh");
	this.shape_56.setTransform(5.2,83.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF9B0B").ss(5.7).p("AAApwIAATh");
	this.shape_57.setTransform(5.2,83.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF9B0B").ss(5.8).p("AAApwIAATh");
	this.shape_58.setTransform(5.2,83.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF9B0B").ss(5.9).p("AAApwIAATh");
	this.shape_59.setTransform(5.2,83.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF9B0B").ss(6).p("AAApwIAATh");
	this.shape_60.setTransform(5.2,83.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF9B0B").ss(6).p("AAAJxIAAzh");
	this.shape_61.setTransform(5.2,83.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).wait(1));

	// Vrstva_1
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF9B0B").s().p("Ag9A2IA9hrIA/Brg");
	this.shape_62.setTransform(5.25,16);

	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,10.6,12.5,138.3);


(lib.SipkaModra2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00AAFF").ss(0.1).p("AAAhJIAACT");
	this.shape.setTransform(0,17.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00AAFF").ss(0.1).p("AAABKIAAiT");
	this.shape_1.setTransform(0,17.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00AAFF").ss(0.2).p("AAABKIAAiT");
	this.shape_2.setTransform(0,17.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00AAFF").ss(0.3).p("AAABKIAAiT");
	this.shape_3.setTransform(0,17.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00AAFF").ss(0.4).p("AAABKIAAiT");
	this.shape_4.setTransform(0,17.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00AAFF").ss(0.5).p("AAABKIAAiT");
	this.shape_5.setTransform(0,17.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00AAFF").ss(0.6).p("AAABKIAAiT");
	this.shape_6.setTransform(0,17.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#00AAFF").ss(0.7).p("AAABKIAAiT");
	this.shape_7.setTransform(0,17.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00AAFF").ss(0.8).p("AAABKIAAiT");
	this.shape_8.setTransform(0,17.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00AAFF").ss(0.9).p("AAABKIAAiT");
	this.shape_9.setTransform(0,17.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00AAFF").p("AAABKIAAiT");
	this.shape_10.setTransform(0,17.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00AAFF").ss(1.1).p("AAABKIAAiT");
	this.shape_11.setTransform(0,17.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00AAFF").ss(1.2).p("AAABKIAAiT");
	this.shape_12.setTransform(0,17.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#00AAFF").ss(1.3).p("AAABKIAAiT");
	this.shape_13.setTransform(0,17.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#00AAFF").ss(1.4).p("AAABKIAAiT");
	this.shape_14.setTransform(0,17.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#00AAFF").ss(1.5).p("AAABKIAAiT");
	this.shape_15.setTransform(0,17.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#00AAFF").ss(1.6).p("AAABKIAAiT");
	this.shape_16.setTransform(0,17.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#00AAFF").ss(1.7).p("AAABKIAAiT");
	this.shape_17.setTransform(0,17.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#00AAFF").ss(1.8).p("AAABKIAAiT");
	this.shape_18.setTransform(0,17.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#00AAFF").ss(1.9).p("AAABKIAAiT");
	this.shape_19.setTransform(0,17.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#00AAFF").ss(2).p("AAABKIAAiT");
	this.shape_20.setTransform(0,17.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#00AAFF").ss(2.1).p("AAABKIAAiT");
	this.shape_21.setTransform(0,17.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#00AAFF").ss(2.2).p("AAABKIAAiT");
	this.shape_22.setTransform(0,17.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#00AAFF").ss(2.3).p("AAABKIAAiT");
	this.shape_23.setTransform(0,17.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#00AAFF").ss(2.4).p("AAABKIAAiT");
	this.shape_24.setTransform(0,17.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#00AAFF").ss(2.5).p("AAABKIAAiT");
	this.shape_25.setTransform(0,17.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#00AAFF").ss(2.6).p("AAABKIAAiT");
	this.shape_26.setTransform(0,17.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#00AAFF").ss(2.7).p("AAABKIAAiT");
	this.shape_27.setTransform(0,17.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#00AAFF").ss(2.8).p("AAABKIAAiT");
	this.shape_28.setTransform(0,17.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#00AAFF").ss(2.9).p("AAABKIAAiT");
	this.shape_29.setTransform(0,17.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#00AAFF").ss(3).p("AAABKIAAiT");
	this.shape_30.setTransform(0,17.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#00AAFF").ss(3.1).p("AAABKIAAiT");
	this.shape_31.setTransform(0,17.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#00AAFF").ss(3.2).p("AAABKIAAiT");
	this.shape_32.setTransform(0,17.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#00AAFF").ss(3.3).p("AAABKIAAiT");
	this.shape_33.setTransform(0,17.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#00AAFF").ss(3.4).p("AAABKIAAiT");
	this.shape_34.setTransform(0,17.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#00AAFF").ss(3.5).p("AAABKIAAiT");
	this.shape_35.setTransform(0,17.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#00AAFF").ss(3.6).p("AAABKIAAiT");
	this.shape_36.setTransform(0,17.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#00AAFF").ss(3.7).p("AAABKIAAiT");
	this.shape_37.setTransform(0,17.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#00AAFF").ss(3.8).p("AAABKIAAiT");
	this.shape_38.setTransform(0,17.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#00AAFF").ss(3.9).p("AAABKIAAiT");
	this.shape_39.setTransform(0,17.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#00AAFF").ss(4).p("AAABKIAAiT");
	this.shape_40.setTransform(0,17.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#00AAFF").ss(4.1).p("AAABKIAAiT");
	this.shape_41.setTransform(0,17.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#00AAFF").ss(4.2).p("AAABKIAAiT");
	this.shape_42.setTransform(0,17.375);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#00AAFF").ss(4.3).p("AAABKIAAiT");
	this.shape_43.setTransform(0,17.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#00AAFF").ss(4.4).p("AAABKIAAiT");
	this.shape_44.setTransform(0,17.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#00AAFF").ss(4.5).p("AAABKIAAiT");
	this.shape_45.setTransform(0,17.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#00AAFF").ss(4.6).p("AAABKIAAiT");
	this.shape_46.setTransform(0,17.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#00AAFF").ss(4.7).p("AAABKIAAiT");
	this.shape_47.setTransform(0,17.375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#00AAFF").ss(4.8).p("AAABKIAAiT");
	this.shape_48.setTransform(0,17.375);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#00AAFF").ss(4.9).p("AAABKIAAiT");
	this.shape_49.setTransform(0,17.375);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#00AAFF").ss(5).p("AAABKIAAiT");
	this.shape_50.setTransform(0,17.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#00AAFF").ss(5.1).p("AAABKIAAiT");
	this.shape_51.setTransform(0,17.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#00AAFF").ss(5.2).p("AAABKIAAiT");
	this.shape_52.setTransform(0,17.375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#00AAFF").ss(5.3).p("AAABKIAAiT");
	this.shape_53.setTransform(0,17.375);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#00AAFF").ss(5.4).p("AAABKIAAiT");
	this.shape_54.setTransform(0,17.375);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#00AAFF").ss(5.5).p("AAABKIAAiT");
	this.shape_55.setTransform(0,17.375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#00AAFF").ss(5.6).p("AAABKIAAiT");
	this.shape_56.setTransform(0,17.375);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#00AAFF").ss(5.7).p("AAABKIAAiT");
	this.shape_57.setTransform(0,17.375);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#00AAFF").ss(5.8).p("AAABKIAAiT");
	this.shape_58.setTransform(0,17.375);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#00AAFF").ss(5.9).p("AAABKIAAiT");
	this.shape_59.setTransform(0,17.375);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#00AAFF").ss(6).p("AAABKIAAiT");
	this.shape_60.setTransform(0,17.375);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#00AAFF").ss(6).p("AAAhJIAACT");
	this.shape_61.setTransform(0,17.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,7,6,20.8);


(lib.SipkaHneda2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#682A00").ss(0.1,0,1).p("AAsBMQgcACgWgRQgbgTgFgfQgFggATgaQAPgVAXgI");
	this.shape.setTransform(3.9698,7.6539);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#682A00").ss(0.1,0,1).p("AAOhMQgXAIgPAVQgTAaAFAgQAFAfAbATQAWARAcgC");
	this.shape_1.setTransform(3.9698,7.6539);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#682A00").ss(0.2,0,1).p("AAOhMQgXAIgPAVQgTAaAFAgQAFAfAbATQAWARAcgC");
	this.shape_2.setTransform(3.9698,7.6539);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#682A00").ss(0.3,0,1).p("AAOhMQgXAIgPAVQgTAaAFAgQAFAfAbATQAWARAcgC");
	this.shape_3.setTransform(3.9698,7.6539);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#682A00").ss(0.4,0,1).p("AAOhMQgXAIgPAVQgTAaAFAgQAFAfAbATQAWARAcgC");
	this.shape_4.setTransform(3.9698,7.6539);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#682A00").ss(0.5,0,1).p("AAOhMQgXAIgPAVQgTAaAFAgQAFAfAbATQAWARAcgC");
	this.shape_5.setTransform(3.9698,7.6539);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#682A00").ss(0.6,0,1).p("AAOhMQgXAIgPAVQgTAaAFAgQAFAfAbATQAWARAcgC");
	this.shape_6.setTransform(3.9698,7.6539);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#682A00").ss(0.7,0,1).p("AAOhMQgXAIgPAVQgTAaAFAgQAFAfAbATQAWARAcgC");
	this.shape_7.setTransform(3.9698,7.6539);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#682A00").ss(0.8,0,1).p("AAOhMQgXAIgPAVQgTAaAFAgQAFAfAbATQAWARAcgC");
	this.shape_8.setTransform(3.9698,7.6539);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#682A00").ss(0.9,0,1).p("AAOhMQgXAIgPAVQgTAaAFAgQAFAfAbATQAWARAcgC");
	this.shape_9.setTransform(3.9698,7.6539);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#682A00").ss(1,0,1).p("AAOhMQgXAIgPAVQgTAaAFAgQAFAfAbATQAWARAcgC");
	this.shape_10.setTransform(3.9698,7.6539);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#682A00").ss(1.1,0,1).p("AAOhMQgXAIgPAVQgTAaAFAgQAFAfAbATQAWARAcgC");
	this.shape_11.setTransform(3.9581,7.6545);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#682A00").ss(1.1,0,1).p("AAPhMQgXAIgPAVQgTAaAFAgQAFAfAaATQAWARAdgC");
	this.shape_12.setTransform(3.9478,7.6551);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#682A00").ss(1.2,0,1).p("AAPhMQgXAIgPAVQgTAaAFAgQAFAfAaATQAWARAdgC");
	this.shape_13.setTransform(3.934,7.6559);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#682A00").ss(1.3,0,1).p("AAPhMQgXAIgPAVQgTAaAFAgQAFAfAaATQAWARAdgC");
	this.shape_14.setTransform(3.9099,7.6572);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#682A00").ss(1.3,0,1).p("AAPhMQgXAIgPAVQgTAaAFAgQAFAfAbATQAWARAcgC");
	this.shape_15.setTransform(3.8996,7.6578);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#682A00").ss(1.4,0,1).p("AAPhMQgXAIgPAVQgTAaAFAgQAFAfAbATQAWARAcgC");
	this.shape_16.setTransform(3.8893,7.6584);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#682A00").ss(1.5,0,1).p("AAPhMQgXAIgPAVQgTAaAFAgQAFAfAbATQAWARAcgC");
	this.shape_17.setTransform(3.8652,7.6597);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#682A00").ss(1.5,0,1).p("AAQhMQgXAIgPAVQgTAaAFAgQAFAfAaATQAWARAdgC");
	this.shape_18.setTransform(3.8479,7.6607);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#682A00").ss(1.6,0,1).p("AAQhMQgXAIgPAVQgTAaAFAgQAFAfAaATQAWARAdgC");
	this.shape_19.setTransform(3.841,7.6611);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#682A00").ss(1.6,0,1).p("AAQhLQgXAIgPAVQgTAaAFAfQAFAgAaATQAWARAdgD");
	this.shape_20.setTransform(3.8307,7.641);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#682A00").ss(1.7,0,1).p("AAQhLQgXAIgPAVQgTAaAFAfQAFAgAaATQAWARAdgD");
	this.shape_21.setTransform(3.8204,7.641);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#682A00").ss(1.7,0,1).p("AAQhLQgXAIgPAVQgTAaAFAfQAFAgAbATQAWARAcgD");
	this.shape_22.setTransform(3.7997,7.641);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#682A00").ss(1.8,0,1).p("AAQhLQgXAIgPAVQgTAaAFAfQAFAgAbATQAWARAcgD");
	this.shape_23.setTransform(3.7963,7.641);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#682A00").ss(1.9,0,1).p("AAQhLQgXAIgPAVQgTAaAFAfQAFAgAbATQAWARAcgD");
	this.shape_24.setTransform(3.7756,7.641);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#682A00").ss(2,0,1).p("AAQhLQgXAIgPAVQgTAaAFAfQAFAgAbATQAWARAcgD");
	this.shape_25.setTransform(3.7515,7.641);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#682A00").ss(2,0,1).p("AARhLQgXAIgPAVQgTAaAFAfQAFAgAaATQAWARAdgD");
	this.shape_26.setTransform(3.7481,7.641);
	this.shape_26._off = true;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#682A00").ss(2.1,0,1).p("AARhLQgXAIgPAVQgTAaAFAfQAFAgAaATQAWARAdgD");
	this.shape_27.setTransform(3.7274,7.641);
	this.shape_27._off = true;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#682A00").ss(2.2,0,1).p("AARhLQgXAIgPAVQgTAaAFAfQAFAgAaATQAWARAdgD");
	this.shape_28.setTransform(3.7067,7.641);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#682A00").ss(2.2,0,1).p("AARhLQgXAIgPAVQgTAaAFAfQAFAgAbATQAWARAcgD");
	this.shape_29.setTransform(3.6999,7.641);
	this.shape_29._off = true;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#682A00").ss(2.3,0,1).p("AARhLQgXAIgPAVQgTAaAFAfQAFAgAbATQAWARAcgD");
	this.shape_30.setTransform(3.6826,7.641);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#682A00").ss(2.4,0,1).p("AARhLQgXAIgPAVQgTAaAFAfQAFAgAbATQAWARAcgD");
	this.shape_31.setTransform(3.6585,7.641);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#682A00").ss(2.4,0,1).p("AAShLQgXAIgPAVQgTAaAFAfQAFAgAaATQAWARAdgD");
	this.shape_32.setTransform(3.6482,7.641);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#682A00").ss(2.5,0,1).p("AAShLQgXAIgPAVQgTAaAFAfQAFAgAaATQAWARAdgD");
	this.shape_33.setTransform(3.6379,7.641);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#682A00").ss(2.5,0,1).p("AAwBMQgdADgWgRQgagTgFggQgFgfATgaQAPgVAXgI");
	this.shape_34.setTransform(3.6275,7.641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{x:3.9581,y:7.6545}}]},1).to({state:[{t:this.shape_11,p:{x:3.9547,y:7.6547}}]},1).to({state:[{t:this.shape_11,p:{x:3.9513,y:7.6549}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14,p:{x:3.9099,y:7.6572}}]},1).to({state:[{t:this.shape_14,p:{x:3.9065,y:7.6574}}]},1).to({state:[{t:this.shape_14,p:{x:3.903,y:7.6576}}]},1).to({state:[{t:this.shape_15,p:{x:3.8996,y:7.6578}}]},1).to({state:[{t:this.shape_15,p:{x:3.8962,y:7.658}}]},1).to({state:[{t:this.shape_15,p:{x:3.8927,y:7.6582}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18,p:{x:3.8479,y:7.6607}}]},1).to({state:[{t:this.shape_18,p:{x:3.8445,y:7.6609}}]},1).to({state:[{t:this.shape_19,p:{x:3.841,y:7.6611}}]},1).to({state:[{t:this.shape_19,p:{x:3.8376,y:7.6613}}]},1).to({state:[{t:this.shape_19,p:{x:3.8342,y:7.6615}}]},1).to({state:[{t:this.shape_20,p:{x:3.8307}}]},1).to({state:[{t:this.shape_20,p:{x:3.8273}}]},1).to({state:[{t:this.shape_20,p:{x:3.8238}}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28,p:{x:3.7067}}]},1).to({state:[{t:this.shape_28,p:{x:3.7033}}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31,p:{x:3.6585}}]},1).to({state:[{t:this.shape_31,p:{x:3.6551}}]},1).to({state:[{t:this.shape_31,p:{x:3.6516}}]},1).to({state:[{t:this.shape_32,p:{x:3.6482}}]},1).to({state:[{t:this.shape_32,p:{x:3.6448}}]},1).to({state:[{t:this.shape_32,p:{x:3.6413}}]},1).to({state:[{t:this.shape_33,p:{x:3.6379}}]},1).to({state:[{t:this.shape_33,p:{x:3.6344}}]},1).to({state:[{t:this.shape_33,p:{x:3.631}}]},1).to({state:[{t:this.shape_34}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(5).to({_off:true},1).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(10).to({_off:false},0).wait(6).to({_off:true},1).wait(143));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(17).to({_off:false},0).wait(6).to({_off:true},1).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(24).to({_off:false},0).wait(5).to({_off:true},1).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(30).to({_off:false},0).wait(6).to({_off:true},1).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(37).to({_off:false},0).wait(6).to({_off:true},1).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(44).to({_off:false},0).wait(5).to({_off:true},1).wait(110));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(50).to({_off:false},0).wait(6).to({_off:true},1).wait(103));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(57).to({_off:false},0).wait(3).to({x:3.9685},0).wait(1).to({x:3.965,y:7.6541},0).wait(1).to({x:3.9616,y:7.6543},0).to({_off:true},1).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(66).to({_off:false},0).wait(1).to({x:3.9444,y:7.6553},0).wait(1).to({x:3.9409,y:7.6555},0).wait(1).to({x:3.9375,y:7.6557},0).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(70).to({_off:false},0).wait(1).to({x:3.9306,y:7.6561},0).wait(1).to({x:3.9271,y:7.6563},0).wait(1).to({x:3.9237,y:7.6564},0).wait(1).to({x:3.9203,y:7.6566},0).wait(1).to({x:3.9168,y:7.6568},0).wait(1).to({x:3.9134,y:7.657},0).to({_off:true},1).wait(83));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(83).to({_off:false},0).wait(1).to({x:3.8858,y:7.6586},0).wait(1).to({x:3.8824,y:7.6588},0).wait(1).to({x:3.8789,y:7.659},0).wait(1).to({x:3.8755,y:7.6592},0).wait(1).to({x:3.872,y:7.6593},0).wait(1).to({x:3.8686,y:7.6595},0).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(90).to({_off:false},0).wait(1).to({x:3.8617,y:7.6599},0).wait(1).to({x:3.8583,y:7.6601},0).wait(1).to({x:3.8548,y:7.6603},0).wait(1).to({x:3.8514,y:7.6605},0).to({_off:true},1).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(103).to({_off:false},0).wait(1).to({x:3.8169},0).wait(1).to({x:3.8135},0).wait(1).to({x:3.8101},0).wait(1).to({x:3.8066},0).wait(1).to({x:3.8032},0).to({_off:true},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(110).to({_off:false},0).wait(1).to({x:3.7928},0).wait(1).to({x:3.7894},0).wait(1).to({x:3.7859},0).wait(1).to({x:3.7825},0).wait(1).to({x:3.7791},0).to({_off:true},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(116).to({_off:false},0).wait(1).to({x:3.7722},0).wait(1).to({x:3.7687},0).wait(1).to({x:3.7653},0).wait(1).to({x:3.7618},0).wait(1).to({x:3.7584},0).wait(1).to({x:3.755},0).to({_off:true},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(124).to({_off:false},0).wait(1).to({x:3.7446},0).wait(1).to({x:3.7412},0).wait(1).to({x:3.7377},0).wait(1).to({x:3.7343},0).wait(1).to({x:3.7308},0).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(130).to({_off:false},0).wait(1).to({x:3.724},0).wait(1).to({x:3.7205},0).wait(1).to({x:3.7171},0).wait(1).to({x:3.7136},0).wait(1).to({x:3.7102},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(138).to({_off:false},0).wait(1).to({x:3.6964},0).wait(1).to({x:3.693},0).wait(1).to({x:3.6895},0).wait(1).to({x:3.6861},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(143).to({_off:false},0).wait(1).to({x:3.6792},0).wait(1).to({x:3.6757},0).wait(1).to({x:3.6723},0).wait(1).to({x:3.6689},0).wait(1).to({x:3.6654},0).wait(1).to({x:3.662},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-1.2,10.899999999999999,17.8);


(lib.SipkaHneda1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#682A00").ss(0.1,0,1).p("AAphBQATAXAAAbQABAggWAXQgXAYgfAAQgZABgVgP");
	this.shape.setTransform(6.2373,6.5895);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#682A00").ss(0.1,0,1).p("Ag9AyQAVAPAZgBQAfAAAXgYQAWgXgBggQAAgbgTgX");
	this.shape_1.setTransform(6.2373,6.5895);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#682A00").ss(0.2,0,1).p("Ag9AyQAVAPAZgBQAfAAAXgYQAWgXgBggQAAgbgTgX");
	this.shape_2.setTransform(6.2373,6.5895);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#682A00").ss(0.3,0,1).p("Ag9AyQAVAPAZgBQAfAAAXgYQAWgXgBggQAAgbgTgX");
	this.shape_3.setTransform(6.2373,6.5895);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#682A00").ss(0.4,0,1).p("Ag9AyQAVAPAZgBQAfAAAXgYQAWgXgBggQAAgbgTgX");
	this.shape_4.setTransform(6.2373,6.5895);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#682A00").ss(0.5,0,1).p("Ag9AyQAVAPAZgBQAfAAAXgYQAWgXgBggQAAgbgTgX");
	this.shape_5.setTransform(6.2373,6.5895);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#682A00").ss(0.6,0,1).p("Ag9AyQAVAPAZgBQAfAAAXgYQAWgXgBggQAAgbgTgX");
	this.shape_6.setTransform(6.2373,6.5895);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#682A00").ss(0.7,0,1).p("Ag9AyQAVAPAZgBQAfAAAXgYQAWgXgBggQAAgbgTgX");
	this.shape_7.setTransform(6.2373,6.5895);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#682A00").ss(0.8,0,1).p("Ag9AyQAVAPAZgBQAfAAAXgYQAWgXgBggQAAgbgTgX");
	this.shape_8.setTransform(6.2373,6.5895);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#682A00").ss(0.9,0,1).p("Ag9AyQAVAPAZgBQAfAAAXgYQAWgXgBggQAAgbgTgX");
	this.shape_9.setTransform(6.2373,6.5895);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#682A00").ss(1,0,1).p("Ag9AyQAVAPAZgBQAfAAAXgYQAWgXgBggQAAgbgTgX");
	this.shape_10.setTransform(6.2373,6.5895);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#682A00").ss(1.1,0,1).p("Ag9AyQAVAPAZgBQAfAAAXgYQAWgXgBggQAAgbgTgX");
	this.shape_11.setTransform(6.2435,6.5945);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#682A00").ss(1.1,0,1).p("Ag+AyQAWAPAYgBQAgAAAWgYQAXgXgBggQAAgbgTgX");
	this.shape_12.setTransform(6.2501,6.5998);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#682A00").ss(1.1,0,1).p("Ag+AyQAWAOAYAAQAggBAWgXQAXgYgBgfQAAgcgTgW");
	this.shape_13.setTransform(6.2514,6.6009);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#682A00").ss(1.2,0,1).p("Ag+AyQAWAOAYAAQAggBAWgXQAXgYgBgfQAAgcgTgW");
	this.shape_14.setTransform(6.254,6.603);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#682A00").ss(1.3,0,1).p("Ag+AyQAWAOAYAAQAggBAWgXQAXgYgBgfQAAgcgTgW");
	this.shape_15.setTransform(6.2659,6.6125);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#682A00").ss(1.4,0,1).p("Ag+AyQAWAOAYAAQAggBAWgXQAXgYgBgfQAAgcgTgW");
	this.shape_16.setTransform(6.2764,6.621);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#682A00").ss(1.5,0,1).p("Ag+AyQAWAOAYAAQAggBAWgXQAXgYgBgfQAAgcgTgW");
	this.shape_17.setTransform(6.287,6.6295);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#682A00").ss(1.6,0,1).p("Ag+AyQAWAOAYAAQAggBAWgXQAXgYgBgfQAAgcgTgW");
	this.shape_18.setTransform(6.2988,6.639);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#682A00").ss(1.6,0,1).p("Ag+AyQAVAOAZAAQAfgBAXgXQAWgYgBgfQAAgcgTgW");
	this.shape_19.setTransform(6.3001,6.6401);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#682A00").ss(1.7,0,1).p("Ag+AyQAVAOAZAAQAfgBAXgXQAWgYgBgfQAAgcgTgW");
	this.shape_20.setTransform(6.3094,6.6475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#682A00").ss(1.7,0,1).p("Ag+AxQAVAPAZgBQAfAAAXgYQAWgXgBggQAAgbgTgX");
	this.shape_21.setTransform(6.3133,6.6507);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#682A00").ss(1.8,0,1).p("Ag+AxQAVAPAZgBQAfAAAXgYQAWgXgBggQAAgbgTgX");
	this.shape_22.setTransform(6.3212,6.657);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#682A00").ss(1.9,0,1).p("Ag+AxQAVAPAZgBQAfAAAXgYQAWgXgBggQAAgbgTgX");
	this.shape_23.setTransform(6.3318,6.6655);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#682A00").ss(2,0,1).p("Ag+AxQAVAPAZgBQAfAAAXgYQAWgXgBggQAAgbgTgX");
	this.shape_24.setTransform(6.3423,6.674);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#682A00").ss(2,0,1).p("AAohCQATAXAAAbQABAggWAXQgXAYgfAAQgZABgVgP");
	this.shape_25.setTransform(6.3476,6.6782);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13,p:{x:6.2514,y:6.6009}}]},1).to({state:[{t:this.shape_13,p:{x:6.2527,y:6.6019}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20,p:{x:6.3094,y:6.6475}}]},1).to({state:[{t:this.shape_20,p:{x:6.3107,y:6.6486}}]},1).to({state:[{t:this.shape_20,p:{x:6.312,y:6.6496}}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(3).to({_off:true},1).wait(155));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(5).to({_off:false},0).wait(7).to({_off:true},1).wait(147));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(13).to({_off:false},0).wait(7).to({_off:true},1).wait(139));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(21).to({_off:false},0).wait(8).to({_off:true},1).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(30).to({_off:false},0).wait(7).to({_off:true},1).wait(122));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(38).to({_off:false},0).wait(8).to({_off:true},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(47).to({_off:false},0).wait(7).to({_off:true},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(55).to({_off:false},0).wait(7).to({_off:true},1).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(63).to({_off:false},0).wait(8).to({_off:true},1).wait(88));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(72).to({_off:false},0).wait(4).to({x:6.2382,y:6.5903},0).wait(1).to({x:6.2396,y:6.5913},0).wait(1).to({x:6.2409,y:6.5924},0).wait(1).to({x:6.2422,y:6.5934},0).to({_off:true},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(80).to({_off:false},0).wait(1).to({x:6.2448,y:6.5956},0).wait(1).to({x:6.2461,y:6.5966},0).wait(1).to({x:6.2475,y:6.5977},0).wait(1).to({x:6.2488,y:6.5987},0).to({_off:true},1).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(88).to({_off:false},0).wait(1).to({x:6.2554,y:6.604},0).wait(1).to({x:6.2567,y:6.6051},0).wait(1).to({x:6.258,y:6.6062},0).wait(1).to({x:6.2593,y:6.6072},0).wait(1).to({x:6.2606,y:6.6083},0).wait(1).to({x:6.2619,y:6.6093},0).wait(1).to({x:6.2633,y:6.6104},0).wait(1).to({x:6.2646,y:6.6115},0).to({_off:true},1).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(97).to({_off:false},0).wait(1).to({x:6.2672,y:6.6136},0).wait(1).to({x:6.2685,y:6.6146},0).wait(1).to({x:6.2699,y:6.6157},0).wait(1).to({x:6.2712,y:6.6168},0).wait(1).to({x:6.2725,y:6.6178},0).wait(1).to({x:6.2738,y:6.6189},0).wait(1).to({x:6.2751,y:6.6199},0).to({_off:true},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(105).to({_off:false},0).wait(1).to({x:6.2778,y:6.6221},0).wait(1).to({x:6.2791,y:6.6231},0).wait(1).to({x:6.2804,y:6.6242},0).wait(1).to({x:6.2817,y:6.6252},0).wait(1).to({x:6.283,y:6.6263},0).wait(1).to({x:6.2843,y:6.6274},0).wait(1).to({x:6.2857,y:6.6284},0).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(113).to({_off:false},0).wait(1).to({x:6.2883,y:6.6305},0).wait(1).to({x:6.2896,y:6.6316},0).wait(1).to({x:6.2909,y:6.6327},0).wait(1).to({x:6.2922,y:6.6337},0).wait(1).to({x:6.2936,y:6.6348},0).wait(1).to({x:6.2949,y:6.6358},0).wait(1).to({x:6.2962,y:6.6369},0).wait(1).to({x:6.2975,y:6.638},0).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(123).to({_off:false},0).wait(1).to({x:6.3015,y:6.6411},0).wait(1).to({x:6.3028,y:6.6422},0).wait(1).to({x:6.3041,y:6.6433},0).wait(1).to({x:6.3054,y:6.6443},0).wait(1).to({x:6.3067,y:6.6454},0).wait(1).to({x:6.308,y:6.6464},0).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(133).to({_off:false},0).wait(1).to({x:6.3146,y:6.6517},0).wait(1).to({x:6.3159,y:6.6528},0).wait(1).to({x:6.3173,y:6.6539},0).wait(1).to({x:6.3186,y:6.6549},0).wait(1).to({x:6.3199,y:6.656},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(139).to({_off:false},0).wait(1).to({x:6.3225,y:6.6581},0).wait(1).to({x:6.3239,y:6.6592},0).wait(1).to({x:6.3252,y:6.6602},0).wait(1).to({x:6.3265,y:6.6613},0).wait(1).to({x:6.3278,y:6.6623},0).wait(1).to({x:6.3291,y:6.6634},0).wait(1).to({x:6.3304,y:6.6645},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(147).to({_off:false},0).wait(1).to({x:6.3331,y:6.6666},0).wait(1).to({x:6.3344,y:6.6676},0).wait(1).to({x:6.3357,y:6.6687},0).wait(1).to({x:6.337,y:6.6698},0).wait(1).to({x:6.3383,y:6.6708},0).wait(1).to({x:6.3397,y:6.6719},0).wait(1).to({x:6.341,y:6.6729},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(155).to({_off:false},0).wait(1).to({x:6.3436,y:6.6751},0).wait(1).to({x:6.3449,y:6.6761},0).wait(1).to({x:6.3462,y:6.6772},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,14.3,15);


(lib.SipkaFialovoCervena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3939","#570B84"],[0,1],-1.4,0,19.9,0).s().p("AgEgaIAiAwIg7AFg");
	this.shape.setTransform(3,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

	// Vrstva_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.2,10.5,0.2).ss(0.5).p("ABfhXQAABHgcAxQgdAygnAAQghAAgagkQgaglgIg3");
	this.shape_1.setTransform(12.35,8.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.2,10.5,0.2).ss(0.5).p("AhegtQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_2.setTransform(12.35,8.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.2,10.5,0.2).ss(0.6).p("AhegtQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_3.setTransform(12.35,8.825);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.2,10.5,0.2).ss(0.7).p("AhegtQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_4.setTransform(12.35,8.825);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.2,10.5,0.2).ss(0.8).p("AhegtQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_5.setTransform(12.35,8.825);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.2,10.5,0.2).ss(0.9).p("AhegtQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_6.setTransform(12.35,8.825);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.2,10.5,0.2).p("AhegtQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_7.setTransform(12.35,8.825);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.2,10.5,0.2).ss(1.1).p("AhegtQAIA3AaAlQAaAkAiAAQAnAAAcgyQAcgxAAhH");
	this.shape_8.setTransform(12.35,8.8376);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.2,10.5,0.2).ss(1.1).p("AhegtQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_9.setTransform(12.35,8.8431);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.2,10.5,0.2).ss(1.1).p("AhegtQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_10.setTransform(12.35,8.8541);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.2,10.5,0.2).ss(1.2).p("AhegtQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_11.setTransform(12.35,8.8651);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.2,10.5,0.2).ss(1.2).p("AhegtQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_12.setTransform(12.35,8.8706);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.2,10.5,0.2).ss(1.3).p("AhegtQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_13.setTransform(12.35,8.8926);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.2,10.5,0.2).ss(1.3).p("AhegtQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_14.setTransform(12.35,8.8981);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.1,10.5,0.1).ss(1.3).p("AheguQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_15.setTransform(12.35,8.9036);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.1,10.5,0.1).ss(1.4).p("AheguQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_16.setTransform(12.35,8.9146);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.1,10.5,0.1).ss(1.4).p("AheguQAIA3AaAlQAaAkAiAAQAnAAAcgyQAcgxAAhH");
	this.shape_17.setTransform(12.35,8.9201);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.1,10.5,0.1).ss(1.5).p("AheguQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_18.setTransform(12.35,8.9421);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.1,10.5,0.1).ss(1.5).p("AheguQAIA3AaAlQAaAkAiAAQAnAAAcgyQAcgxAAhH");
	this.shape_19.setTransform(12.35,8.9476);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.1,10.5,0.1).ss(1.5).p("AheguQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_20.setTransform(12.35,8.9531);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.1,10.5,0.1).ss(1.6).p("AheguQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_21.setTransform(12.35,8.9642);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.1,10.5,0.1).ss(1.6).p("AheguQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_22.setTransform(12.35,8.9697);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.1,10.5,0.1).ss(1.7).p("AheguQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_23.setTransform(12.35,8.9917);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0.1,10.5,0.1).ss(1.7).p("AheguQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_24.setTransform(12.35,8.9972);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0,10.5,0).ss(1.7).p("AhegvQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_25.setTransform(12.35,9.0027);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0,10.5,0).ss(1.8).p("AhegvQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_26.setTransform(12.35,9.0137);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0,10.5,0).ss(1.8).p("AhegvQAIA3AaAlQAaAkAiAAQAnAAAcgyQAcgxAAhH");
	this.shape_27.setTransform(12.35,9.0192);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0,10.5,0).ss(1.9).p("AhegvQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_28.setTransform(12.35,9.0412);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0,10.5,0).ss(1.9).p("AhegvQAIA3AaAlQAaAkAiAAQAnAAAcgyQAcgxAAhH");
	this.shape_29.setTransform(12.35,9.0467);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0,10.5,0).ss(1.9).p("AhegvQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_30.setTransform(12.35,9.0522);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0,10.5,0).ss(2).p("AhegvQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_31.setTransform(12.35,9.0632);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0,10.5,0).ss(2).p("AhegvQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_32.setTransform(12.35,9.0687);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0,10.5,0).ss(2.1).p("AhegvQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_33.setTransform(12.35,9.0907);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0,10.5,0).ss(2.1).p("AhegvQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_34.setTransform(12.35,9.0962);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0,10.5,0).ss(2.1).p("AhegwQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_35.setTransform(12.35,9.1017);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0,10.5,0).ss(2.2).p("AhegwQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_36.setTransform(12.35,9.1127);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0,10.5,0).ss(2.2).p("AhegwQAIA3AaAlQAaAkAiAAQAnAAAcgyQAcgxAAhH");
	this.shape_37.setTransform(12.35,9.1182);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0,10.5,0).ss(2.3).p("AhegwQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_38.setTransform(12.35,9.1403);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,0,10.5,0).ss(2.3).p("AhegwQAIA3AaAlQAaAkAiAAQAnAAAcgyQAcgxAAhH");
	this.shape_39.setTransform(12.35,9.1458);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.1,10.5,-0.1).ss(2.3).p("AhegwQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_40.setTransform(12.35,9.1513);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.1,10.5,-0.1).ss(2.3).p("AhegwQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_41.setTransform(12.35,9.1623);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.1,10.5,-0.1).ss(2.4).p("AhegwQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_42.setTransform(12.35,9.1678);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.1,10.5,-0.1).ss(2.4).p("AhegwQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_43.setTransform(12.35,9.1733);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.1,10.5,-0.1).ss(2.5).p("AhegwQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_44.setTransform(12.35,9.1898);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.1,10.5,-0.1).ss(2.5).p("AhegwQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_45.setTransform(12.35,9.1953);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.1,10.5,-0.1).ss(2.5).p("AhegxQAIA3AaAlQAaAkAiAAQAnAAAcgyQAcgxAAhH");
	this.shape_46.setTransform(12.35,9.2008);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.1,10.5,-0.1).ss(2.5).p("AhegxQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_47.setTransform(12.35,9.2063);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.1,10.5,-0.1).ss(2.6).p("AhegxQAIA3AaAlQAaAkAiAAQAnAAAcgyQAcgxAAhH");
	this.shape_48.setTransform(12.35,9.2173);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.1,10.5,-0.1).ss(2.6).p("AhegxQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_49.setTransform(12.35,9.2228);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.1,10.5,-0.1).ss(2.7).p("AhegxQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_50.setTransform(12.35,9.2393);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.1,10.5,-0.1).ss(2.7).p("AhegxQAIA3AaAlQAaAkAiAAQAnAAAcgyQAcgxAAhH");
	this.shape_51.setTransform(12.35,9.2448);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.2,10.5,-0.2).ss(2.7).p("AhegxQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_52.setTransform(12.35,9.2503);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.2,10.5,-0.2).ss(2.7).p("AhegxQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_53.setTransform(12.35,9.2613);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.2,10.5,-0.2).ss(2.8).p("AhegxQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_54.setTransform(12.35,9.2668);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.2,10.5,-0.2).ss(2.8).p("AhegxQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_55.setTransform(12.35,9.2723);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.2,10.5,-0.2).ss(2.9).p("AhegxQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_56.setTransform(12.35,9.2888);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.2,10.5,-0.2).ss(2.9).p("AhegxQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_57.setTransform(12.35,9.2943);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.2,10.5,-0.2).ss(2.9).p("AhegyQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_58.setTransform(12.35,9.3053);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.2,10.5,-0.2).ss(3).p("AhegyQAIA3AaAlQAaAkAiAAQAnAAAcgyQAcgxAAhH");
	this.shape_59.setTransform(12.35,9.3164);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.2,10.5,-0.2).ss(3).p("AhegyQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_60.setTransform(12.35,9.3219);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.2,10.5,-0.2).ss(3.1).p("AhegyQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_61.setTransform(12.35,9.3384);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.2,10.5,-0.2).ss(3.1).p("AhegyQAIA3AaAlQAaAkAiAAQAnAAAcgyQAcgxAAhH");
	this.shape_62.setTransform(12.35,9.3439);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.3,10.5,-0.3).ss(3.1).p("AhegyQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_63.setTransform(12.35,9.3549);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.3,10.5,-0.3).ss(3.1).p("AhegyQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_64.setTransform(12.35,9.3604);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.3,10.5,-0.3).ss(3.2).p("AhegyQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_65.setTransform(12.35,9.3659);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.3,10.5,-0.3).ss(3.2).p("AhegyQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_66.setTransform(12.35,9.3714);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.3,10.5,-0.3).ss(3.3).p("AhegyQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_67.setTransform(12.35,9.3879);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.3,10.5,-0.3).ss(3.3).p("AhegyQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_68.setTransform(12.35,9.3934);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.3,10.5,-0.3).ss(3.3).p("AhegzQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_69.setTransform(12.35,9.4044);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.3,10.5,-0.3).ss(3.4).p("AhegzQAIA3AaAlQAaAkAiAAQAnAAAcgyQAcgxAAhH");
	this.shape_70.setTransform(12.35,9.4154);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.3,10.5,-0.3).ss(3.4).p("AhegzQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_71.setTransform(12.35,9.4209);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.3,10.5,-0.3).ss(3.5).p("AhegzQAIA3AaAlQAaAkAiAAQAnAAAcgyQAcgxAAhH");
	this.shape_72.setTransform(12.35,9.4429);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.3,10.5,-0.3).ss(3.5).p("AhegzQAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_73.setTransform(12.35,9.4484);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.4,10.5,-0.4).ss(3.5).p("AhegzQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_74.setTransform(12.35,9.4539);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.4,10.5,-0.4).ss(3.5).p("AhegzQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_75.setTransform(12.35,9.4594);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.4,10.5,-0.4).ss(3.6).p("AhegzQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_76.setTransform(12.35,9.4649);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.4,10.5,-0.4).ss(3.6).p("AhegzQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_77.setTransform(12.35,9.4704);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.4,10.5,-0.4).ss(3.7).p("AhegzQAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_78.setTransform(12.35,9.4925);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.4,10.5,-0.4).ss(3.7).p("AhegzQAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_79.setTransform(12.35,9.498);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.4,10.5,-0.4).ss(3.7).p("Aheg0QAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_80.setTransform(12.35,9.5035);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.4,10.5,-0.4).ss(3.8).p("Aheg0QAIA3AaAlQAaAkAiAAQAnAAAcgyQAcgxAAhH");
	this.shape_81.setTransform(12.35,9.5145);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.4,10.5,-0.4).ss(3.8).p("Aheg0QAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_82.setTransform(12.35,9.52);
	this.shape_82._off = true;

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.4,10.5,-0.4).ss(3.9).p("Aheg0QAIA3AaAlQAaAkAiAAQAnAAAcgyQAcgxAAhH");
	this.shape_83.setTransform(12.35,9.542);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.4,10.5,-0.4).ss(3.9).p("Aheg0QAIA3AaAlQAaAkAhAAQAnAAAdgyQAcgxAAhH");
	this.shape_84.setTransform(12.35,9.5475);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.5,10.5,-0.5).ss(3.9).p("Aheg0QAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_85.setTransform(12.35,9.553);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.5,10.5,-0.5).ss(4).p("Aheg0QAIA3AaAkQAaAlAhAAQAnAAAdgzQAcgxAAhH");
	this.shape_86.setTransform(12.35,9.564);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.5,10.5,-0.5).ss(4).p("Aheg0QAIA3AaAkQAaAlAiAAQAnAAAcgzQAcgxAAhH");
	this.shape_87.setTransform(12.35,9.5695);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().ls(["#FF3939","#570B84"],[0,1],-10.8,-0.5,10.5,-0.5).ss(4).p("ABfhfQAABHgcAxQgdAzgnAAQghAAgaglQgagkgIg3");
	this.shape_88.setTransform(12.35,9.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8,p:{y:8.8376}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8,p:{y:8.8486}}]},1).to({state:[{t:this.shape_10,p:{y:8.8541}}]},1).to({state:[{t:this.shape_10,p:{y:8.8596}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:8.9036}}]},1).to({state:[{t:this.shape_15,p:{y:8.9091}}]},1).to({state:[{t:this.shape_16,p:{y:8.9146}}]},1).to({state:[{t:this.shape_17,p:{y:8.9201}}]},1).to({state:[{t:this.shape_16,p:{y:8.9256}}]},1).to({state:[{t:this.shape_16,p:{y:8.9311}}]},1).to({state:[{t:this.shape_17,p:{y:8.9366}}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20,p:{y:8.9531}}]},1).to({state:[{t:this.shape_20,p:{y:8.9586}}]},1).to({state:[{t:this.shape_21,p:{y:8.9642}}]},1).to({state:[{t:this.shape_22,p:{y:8.9697}}]},1).to({state:[{t:this.shape_21,p:{y:8.9752}}]},1).to({state:[{t:this.shape_22,p:{y:8.9807}}]},1).to({state:[{t:this.shape_22,p:{y:8.9862}}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25,p:{y:9.0027}}]},1).to({state:[{t:this.shape_25,p:{y:9.0082}}]},1).to({state:[{t:this.shape_26,p:{y:9.0137}}]},1).to({state:[{t:this.shape_27,p:{y:9.0192}}]},1).to({state:[{t:this.shape_26,p:{y:9.0247}}]},1).to({state:[{t:this.shape_26,p:{y:9.0302}}]},1).to({state:[{t:this.shape_27,p:{y:9.0357}}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30,p:{y:9.0522}}]},1).to({state:[{t:this.shape_30,p:{y:9.0577}}]},1).to({state:[{t:this.shape_31,p:{y:9.0632}}]},1).to({state:[{t:this.shape_32,p:{y:9.0687}}]},1).to({state:[{t:this.shape_31,p:{y:9.0742}}]},1).to({state:[{t:this.shape_32,p:{y:9.0797}}]},1).to({state:[{t:this.shape_32,p:{y:9.0852}}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35,p:{y:9.1017}}]},1).to({state:[{t:this.shape_35,p:{y:9.1072}}]},1).to({state:[{t:this.shape_36,p:{y:9.1127}}]},1).to({state:[{t:this.shape_37,p:{y:9.1182}}]},1).to({state:[{t:this.shape_36,p:{y:9.1237}}]},1).to({state:[{t:this.shape_36,p:{y:9.1292}}]},1).to({state:[{t:this.shape_37,p:{y:9.1347}}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40,p:{y:9.1513}}]},1).to({state:[{t:this.shape_40,p:{y:9.1568}}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42,p:{y:9.1678}}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42,p:{y:9.1788}}]},1).to({state:[{t:this.shape_42,p:{y:9.1843}}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47,p:{y:9.2063}}]},1).to({state:[{t:this.shape_47,p:{y:9.2118}}]},1).to({state:[{t:this.shape_48,p:{y:9.2173}}]},1).to({state:[{t:this.shape_49,p:{y:9.2228}}]},1).to({state:[{t:this.shape_49,p:{y:9.2283}}]},1).to({state:[{t:this.shape_48,p:{y:9.2338}}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52,p:{y:9.2503}}]},1).to({state:[{t:this.shape_52,p:{y:9.2558}}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54,p:{y:9.2668}}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54,p:{y:9.2778}}]},1).to({state:[{t:this.shape_54,p:{y:9.2833}}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57,p:{y:9.2943}}]},1).to({state:[{t:this.shape_57,p:{y:9.2998}}]},1).to({state:[{t:this.shape_58,p:{y:9.3053}}]},1).to({state:[{t:this.shape_58,p:{y:9.3108}}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60,p:{y:9.3219}}]},1).to({state:[{t:this.shape_60,p:{y:9.3274}}]},1).to({state:[{t:this.shape_60,p:{y:9.3329}}]},1).to({state:[{t:this.shape_61,p:{y:9.3384}}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_61,p:{y:9.3494}}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65,p:{y:9.3659}}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_65,p:{y:9.3769}}]},1).to({state:[{t:this.shape_65,p:{y:9.3824}}]},1).to({state:[{t:this.shape_67,p:{y:9.3879}}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_67,p:{y:9.3989}}]},1).to({state:[{t:this.shape_69,p:{y:9.4044}}]},1).to({state:[{t:this.shape_69,p:{y:9.4099}}]},1).to({state:[{t:this.shape_70,p:{y:9.4154}}]},1).to({state:[{t:this.shape_71,p:{y:9.4209}}]},1).to({state:[{t:this.shape_70,p:{y:9.4264}}]},1).to({state:[{t:this.shape_71,p:{y:9.4319}}]},1).to({state:[{t:this.shape_71,p:{y:9.4374}}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76,p:{y:9.4649}}]},1).to({state:[{t:this.shape_77,p:{y:9.4704}}]},1).to({state:[{t:this.shape_76,p:{y:9.4759}}]},1).to({state:[{t:this.shape_76,p:{y:9.4814}}]},1).to({state:[{t:this.shape_77,p:{y:9.4869}}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80,p:{y:9.5035}}]},1).to({state:[{t:this.shape_80,p:{y:9.509}}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85,p:{y:9.553}}]},1).to({state:[{t:this.shape_85,p:{y:9.5585}}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3).to({_off:false},0).wait(3).to({_off:true},1).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(7).to({_off:false},0).wait(4).to({_off:true},1).wait(148));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(12).to({_off:false},0).wait(3).to({_off:true},1).wait(144));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(16).to({_off:false},0).wait(4).to({_off:true},1).wait(139));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(21).to({_off:false},0).wait(2).to({y:8.8266},0).wait(1).to({y:8.8321},0).to({_off:true},1).wait(135));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(31).to({_off:false},0).wait(1).to({y:8.8761},0).wait(1).to({y:8.8816},0).wait(1).to({y:8.8871},0).to({_off:true},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(149).to({_off:false},0).wait(1).to({y:9.5255},0).wait(1).to({y:9.531},0).wait(1).to({y:9.5365},0).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,30.4,36.5);


(lib.SipkaFialovaSpodniCelek3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#923EFF").ss(0.1).p("AAAKAIAAz/");
	this.shape.setTransform(6.2,-7.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#923EFF").ss(0.1).p("AAAp/IAAT/");
	this.shape_1.setTransform(6.2,-7.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#923EFF").ss(0.2).p("AAAp/IAAT/");
	this.shape_2.setTransform(6.2,-7.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#923EFF").ss(0.3).p("AAAp/IAAT/");
	this.shape_3.setTransform(6.2,-7.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#923EFF").ss(0.4).p("AAAp/IAAT/");
	this.shape_4.setTransform(6.2,-7.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#923EFF").ss(0.5).p("AAAp/IAAT/");
	this.shape_5.setTransform(6.2,-7.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#923EFF").ss(0.6).p("AAAp/IAAT/");
	this.shape_6.setTransform(6.2,-7.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#923EFF").ss(0.7).p("AAAp/IAAT/");
	this.shape_7.setTransform(6.2,-7.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#923EFF").ss(0.8).p("AAAp/IAAT/");
	this.shape_8.setTransform(6.2,-7.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#923EFF").ss(0.9).p("AAAp/IAAT/");
	this.shape_9.setTransform(6.2,-7.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#923EFF").p("AAAp/IAAT/");
	this.shape_10.setTransform(6.2,-7.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#923EFF").ss(1.1).p("AAAp/IAAT/");
	this.shape_11.setTransform(6.2,-7.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#923EFF").ss(1.2).p("AAAp/IAAT/");
	this.shape_12.setTransform(6.2,-7.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#923EFF").ss(1.3).p("AAAp/IAAT/");
	this.shape_13.setTransform(6.2,-7.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#923EFF").ss(1.4).p("AAAp/IAAT/");
	this.shape_14.setTransform(6.2,-7.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#923EFF").ss(1.5).p("AAAp/IAAT/");
	this.shape_15.setTransform(6.2,-7.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#923EFF").ss(1.6).p("AAAp/IAAT/");
	this.shape_16.setTransform(6.2,-7.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#923EFF").ss(1.7).p("AAAp/IAAT/");
	this.shape_17.setTransform(6.2,-7.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#923EFF").ss(1.8).p("AAAp/IAAT/");
	this.shape_18.setTransform(6.2,-7.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#923EFF").ss(1.9).p("AAAp/IAAT/");
	this.shape_19.setTransform(6.2,-7.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#923EFF").ss(2).p("AAAp/IAAT/");
	this.shape_20.setTransform(6.2,-7.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#923EFF").ss(2.1).p("AAAp/IAAT/");
	this.shape_21.setTransform(6.2,-7.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#923EFF").ss(2.2).p("AAAp/IAAT/");
	this.shape_22.setTransform(6.2,-7.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#923EFF").ss(2.3).p("AAAp/IAAT/");
	this.shape_23.setTransform(6.2,-7.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#923EFF").ss(2.4).p("AAAp/IAAT/");
	this.shape_24.setTransform(6.2,-7.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#923EFF").ss(2.5).p("AAAp/IAAT/");
	this.shape_25.setTransform(6.2,-7.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#923EFF").ss(2.6).p("AAAp/IAAT/");
	this.shape_26.setTransform(6.2,-7.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#923EFF").ss(2.7).p("AAAp/IAAT/");
	this.shape_27.setTransform(6.2,-7.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#923EFF").ss(2.8).p("AAAp/IAAT/");
	this.shape_28.setTransform(6.2,-7.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#923EFF").ss(2.9).p("AAAp/IAAT/");
	this.shape_29.setTransform(6.2,-7.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#923EFF").ss(3).p("AAAp/IAAT/");
	this.shape_30.setTransform(6.2,-7.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#923EFF").ss(3.1).p("AAAp/IAAT/");
	this.shape_31.setTransform(6.2,-7.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#923EFF").ss(3.2).p("AAAp/IAAT/");
	this.shape_32.setTransform(6.2,-7.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#923EFF").ss(3.3).p("AAAp/IAAT/");
	this.shape_33.setTransform(6.2,-7.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#923EFF").ss(3.4).p("AAAp/IAAT/");
	this.shape_34.setTransform(6.2,-7.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#923EFF").ss(3.5).p("AAAp/IAAT/");
	this.shape_35.setTransform(6.2,-7.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#923EFF").ss(3.6).p("AAAp/IAAT/");
	this.shape_36.setTransform(6.2,-7.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#923EFF").ss(3.7).p("AAAp/IAAT/");
	this.shape_37.setTransform(6.2,-7.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#923EFF").ss(3.8).p("AAAp/IAAT/");
	this.shape_38.setTransform(6.2,-7.075);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#923EFF").ss(3.9).p("AAAp/IAAT/");
	this.shape_39.setTransform(6.2,-7.075);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#923EFF").ss(4).p("AAAp/IAAT/");
	this.shape_40.setTransform(6.2,-7.075);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#923EFF").ss(4.1).p("AAAp/IAAT/");
	this.shape_41.setTransform(6.2,-7.075);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#923EFF").ss(4.2).p("AAAp/IAAT/");
	this.shape_42.setTransform(6.2,-7.075);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#923EFF").ss(4.3).p("AAAp/IAAT/");
	this.shape_43.setTransform(6.2,-7.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#923EFF").ss(4.4).p("AAAp/IAAT/");
	this.shape_44.setTransform(6.2,-7.075);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#923EFF").ss(4.5).p("AAAp/IAAT/");
	this.shape_45.setTransform(6.2,-7.075);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#923EFF").ss(4.6).p("AAAp/IAAT/");
	this.shape_46.setTransform(6.2,-7.075);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#923EFF").ss(4.7).p("AAAp/IAAT/");
	this.shape_47.setTransform(6.2,-7.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#923EFF").ss(4.8).p("AAAp/IAAT/");
	this.shape_48.setTransform(6.2,-7.075);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#923EFF").ss(4.9).p("AAAp/IAAT/");
	this.shape_49.setTransform(6.2,-7.075);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#923EFF").ss(5).p("AAAp/IAAT/");
	this.shape_50.setTransform(6.2,-7.075);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#923EFF").ss(5.1).p("AAAp/IAAT/");
	this.shape_51.setTransform(6.2,-7.075);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#923EFF").ss(5.2).p("AAAp/IAAT/");
	this.shape_52.setTransform(6.2,-7.075);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#923EFF").ss(5.3).p("AAAp/IAAT/");
	this.shape_53.setTransform(6.2,-7.075);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#923EFF").ss(5.4).p("AAAp/IAAT/");
	this.shape_54.setTransform(6.2,-7.075);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#923EFF").ss(5.5).p("AAAp/IAAT/");
	this.shape_55.setTransform(6.2,-7.075);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#923EFF").ss(5.6).p("AAAp/IAAT/");
	this.shape_56.setTransform(6.2,-7.075);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#923EFF").ss(5.7).p("AAAp/IAAT/");
	this.shape_57.setTransform(6.2,-7.075);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#923EFF").ss(5.8).p("AAAp/IAAT/");
	this.shape_58.setTransform(6.2,-7.075);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#923EFF").ss(5.9).p("AAAp/IAAT/");
	this.shape_59.setTransform(6.2,-7.075);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#923EFF").ss(6).p("AAAp/IAAT/");
	this.shape_60.setTransform(6.2,-7.075);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#923EFF").ss(6).p("AAAKAIAAz/");
	this.shape_61.setTransform(6.2,-7.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).wait(1));

	// Vrstva_2
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#923EFF").s().p("Ag+g1IB9AAIg/Brg");
	this.shape_62.setTransform(6.25,61.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-74.1,12.5,140.8);


(lib.SipkaCervenaZVehiclu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF1E00").ss(0.1).p("AAAhSIAACl");
	this.shape.setTransform(6.2,17.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF1E00").ss(0.1).p("AAABTIAAil");
	this.shape_1.setTransform(6.2,17.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF1E00").ss(0.2).p("AAABTIAAil");
	this.shape_2.setTransform(6.2,17.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF1E00").ss(0.3).p("AAABTIAAil");
	this.shape_3.setTransform(6.2,17.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF1E00").ss(0.4).p("AAABTIAAil");
	this.shape_4.setTransform(6.2,17.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF1E00").ss(0.5).p("AAABTIAAil");
	this.shape_5.setTransform(6.2,17.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF1E00").ss(0.6).p("AAABTIAAil");
	this.shape_6.setTransform(6.2,17.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF1E00").ss(0.7).p("AAABTIAAil");
	this.shape_7.setTransform(6.2,17.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF1E00").ss(0.8).p("AAABTIAAil");
	this.shape_8.setTransform(6.2,17.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF1E00").ss(0.9).p("AAABTIAAil");
	this.shape_9.setTransform(6.2,17.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF1E00").p("AAABTIAAil");
	this.shape_10.setTransform(6.2,17.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF1E00").ss(1.1).p("AAABTIAAil");
	this.shape_11.setTransform(6.2,17.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF1E00").ss(1.2).p("AAABTIAAil");
	this.shape_12.setTransform(6.2,17.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF1E00").ss(1.3).p("AAABTIAAil");
	this.shape_13.setTransform(6.2,17.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF1E00").ss(1.4).p("AAABTIAAil");
	this.shape_14.setTransform(6.2,17.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF1E00").ss(1.5).p("AAABTIAAil");
	this.shape_15.setTransform(6.2,17.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF1E00").ss(1.6).p("AAABTIAAil");
	this.shape_16.setTransform(6.2,17.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF1E00").ss(1.7).p("AAABTIAAil");
	this.shape_17.setTransform(6.2,17.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF1E00").ss(1.8).p("AAABTIAAil");
	this.shape_18.setTransform(6.2,17.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF1E00").ss(1.9).p("AAABTIAAil");
	this.shape_19.setTransform(6.2,17.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF1E00").ss(2).p("AAABTIAAil");
	this.shape_20.setTransform(6.2,17.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF1E00").ss(2.1).p("AAABTIAAil");
	this.shape_21.setTransform(6.2,17.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF1E00").ss(2.2).p("AAABTIAAil");
	this.shape_22.setTransform(6.2,17.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF1E00").ss(2.3).p("AAABTIAAil");
	this.shape_23.setTransform(6.2,17.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF1E00").ss(2.4).p("AAABTIAAil");
	this.shape_24.setTransform(6.2,17.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF1E00").ss(2.5).p("AAABTIAAil");
	this.shape_25.setTransform(6.2,17.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF1E00").ss(2.6).p("AAABTIAAil");
	this.shape_26.setTransform(6.2,17.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF1E00").ss(2.7).p("AAABTIAAil");
	this.shape_27.setTransform(6.2,17.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF1E00").ss(2.8).p("AAABTIAAil");
	this.shape_28.setTransform(6.2,17.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF1E00").ss(2.9).p("AAABTIAAil");
	this.shape_29.setTransform(6.2,17.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF1E00").ss(3).p("AAABTIAAil");
	this.shape_30.setTransform(6.2,17.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF1E00").ss(3.1).p("AAABTIAAil");
	this.shape_31.setTransform(6.2,17.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF1E00").ss(3.2).p("AAABTIAAil");
	this.shape_32.setTransform(6.2,17.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF1E00").ss(3.3).p("AAABTIAAil");
	this.shape_33.setTransform(6.2,17.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF1E00").ss(3.4).p("AAABTIAAil");
	this.shape_34.setTransform(6.2,17.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF1E00").ss(3.5).p("AAABTIAAil");
	this.shape_35.setTransform(6.2,17.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF1E00").ss(3.6).p("AAABTIAAil");
	this.shape_36.setTransform(6.2,17.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF1E00").ss(3.7).p("AAABTIAAil");
	this.shape_37.setTransform(6.2,17.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF1E00").ss(3.8).p("AAABTIAAil");
	this.shape_38.setTransform(6.2,17.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF1E00").ss(3.9).p("AAABTIAAil");
	this.shape_39.setTransform(6.2,17.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF1E00").ss(4).p("AAABTIAAil");
	this.shape_40.setTransform(6.2,17.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF1E00").ss(4.1).p("AAABTIAAil");
	this.shape_41.setTransform(6.2,17.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF1E00").ss(4.2).p("AAABTIAAil");
	this.shape_42.setTransform(6.2,17.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF1E00").ss(4.3).p("AAABTIAAil");
	this.shape_43.setTransform(6.2,17.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF1E00").ss(4.4).p("AAABTIAAil");
	this.shape_44.setTransform(6.2,17.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF1E00").ss(4.5).p("AAABTIAAil");
	this.shape_45.setTransform(6.2,17.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF1E00").ss(4.6).p("AAABTIAAil");
	this.shape_46.setTransform(6.2,17.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF1E00").ss(4.7).p("AAABTIAAil");
	this.shape_47.setTransform(6.2,17.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF1E00").ss(4.8).p("AAABTIAAil");
	this.shape_48.setTransform(6.2,17.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF1E00").ss(4.9).p("AAABTIAAil");
	this.shape_49.setTransform(6.2,17.25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF1E00").ss(5).p("AAABTIAAil");
	this.shape_50.setTransform(6.2,17.25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF1E00").ss(5.1).p("AAABTIAAil");
	this.shape_51.setTransform(6.2,17.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF1E00").ss(5.2).p("AAABTIAAil");
	this.shape_52.setTransform(6.2,17.25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF1E00").ss(5.3).p("AAABTIAAil");
	this.shape_53.setTransform(6.2,17.25);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF1E00").ss(5.4).p("AAABTIAAil");
	this.shape_54.setTransform(6.2,17.25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF1E00").ss(5.5).p("AAABTIAAil");
	this.shape_55.setTransform(6.2,17.25);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF1E00").ss(5.6).p("AAABTIAAil");
	this.shape_56.setTransform(6.2,17.25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF1E00").ss(5.7).p("AAABTIAAil");
	this.shape_57.setTransform(6.2,17.25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF1E00").ss(5.8).p("AAABTIAAil");
	this.shape_58.setTransform(6.2,17.25);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF1E00").ss(5.9).p("AAABTIAAil");
	this.shape_59.setTransform(6.2,17.25);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF1E00").ss(6).p("AAABTIAAil");
	this.shape_60.setTransform(6.2,17.25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF1E00").ss(6).p("AAAhSIAACl");
	this.shape_61.setTransform(6.2,17.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).wait(1));

	// Vrstva_1
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("Ag1g9IBrA9IhrA+g");
	this.shape_62.setTransform(6.225,5.375,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.5,28.5);


(lib.SedaSipka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B2B2B2").ss(0.1).p("AmvAAINfAA");
	this.shape.setTransform(25.15,-0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B2B2B2").ss(0.2).p("AmvAAINfAA");
	this.shape_1.setTransform(25.15,-0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B2B2B2").ss(0.3).p("AmvAAINfAA");
	this.shape_2.setTransform(25.15,-0.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B2B2B2").ss(0.4).p("AmvAAINfAA");
	this.shape_3.setTransform(25.15,-0.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B2B2B2").ss(0.5).p("AmvAAINfAA");
	this.shape_4.setTransform(25.15,-0.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B2B2B2").ss(0.6).p("AmvAAINfAA");
	this.shape_5.setTransform(25.15,-0.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B2B2B2").ss(0.7).p("AmvAAINfAA");
	this.shape_6.setTransform(25.15,-0.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B2B2B2").ss(0.8).p("AmvAAINfAA");
	this.shape_7.setTransform(25.15,-0.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B2B2B2").ss(0.9).p("AmvAAINfAA");
	this.shape_8.setTransform(25.15,-0.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#B2B2B2").p("AmvAAINfAA");
	this.shape_9.setTransform(25.15,-0.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#B2B2B2").ss(1.1).p("AmuAAINeAA");
	this.shape_10.setTransform(25.15,-0.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#B2B2B2").ss(1.1).p("AmvAAINeAA");
	this.shape_11.setTransform(25.15,-0.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#B2B2B2").ss(1.2).p("AmvAAINfAA");
	this.shape_12.setTransform(25.15,-0.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#B2B2B2").ss(1.3).p("AmvAAINfAA");
	this.shape_13.setTransform(25.15,-0.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#B2B2B2").ss(1.4).p("AmvAAINfAA");
	this.shape_14.setTransform(25.15,-0.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B2B2B2").ss(1.4).p("AmuAAINeAA");
	this.shape_15.setTransform(25.15,-0.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#B2B2B2").ss(1.5).p("AmvAAINeAA");
	this.shape_16.setTransform(25.15,-0.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#B2B2B2").ss(1.5).p("AmvAAINfAA");
	this.shape_17.setTransform(25.15,-0.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#B2B2B2").ss(1.6).p("AmvAAINfAA");
	this.shape_18.setTransform(25.15,-0.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#B2B2B2").ss(1.7).p("AmvAAINfAA");
	this.shape_19.setTransform(25.15,-0.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#B2B2B2").ss(1.7).p("AmuAAINeAA");
	this.shape_20.setTransform(25.15,-0.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#B2B2B2").ss(1.8).p("AmuAAINeAA");
	this.shape_21.setTransform(25.15,-0.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#B2B2B2").ss(1.8).p("AmvABINegB");
	this.shape_22.setTransform(25.15,-0.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#B2B2B2").ss(1.8).p("AmvABINfgB");
	this.shape_23.setTransform(25.15,-0.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#B2B2B2").ss(1.9).p("AmvAAINfAA");
	this.shape_24.setTransform(25.15,-0.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#B2B2B2").ss(1.9).p("AmvABINfgB");
	this.shape_25.setTransform(25.15,-0.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#B2B2B2").ss(2).p("AmvABINfgB");
	this.shape_26.setTransform(25.15,-0.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#B2B2B2").ss(2).p("AmvAAINfAA");
	this.shape_27.setTransform(25.15,-0.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#B2B2B2").ss(2.1).p("AmuABINegB");
	this.shape_28.setTransform(25.15,-0.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#B2B2B2").ss(2.1).p("AmvABINegB");
	this.shape_29.setTransform(25.15,-0.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#B2B2B2").ss(2.2).p("AmvABINfgB");
	this.shape_30.setTransform(25.15,-0.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#B2B2B2").ss(2.3).p("AmvABINfgB");
	this.shape_31.setTransform(25.15,-0.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#B2B2B2").ss(2.4).p("AmvABINfgB");
	this.shape_32.setTransform(25.15,-0.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#B2B2B2").ss(2.4).p("AmuABINegB");
	this.shape_33.setTransform(25.15,-0.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#B2B2B2").ss(2.4).p("AmvABINegB");
	this.shape_34.setTransform(25.15,-0.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#B2B2B2").ss(2.5).p("AmvABINegB");
	this.shape_35.setTransform(25.15,-0.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#B2B2B2").ss(2.5).p("AmvABINfgB");
	this.shape_36.setTransform(25.15,-0.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#B2B2B2").ss(2.6).p("AmvABINfgB");
	this.shape_37.setTransform(25.15,-0.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#B2B2B2").ss(2.7).p("AmvABINfgB");
	this.shape_38.setTransform(25.15,-0.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#B2B2B2").ss(2.7).p("AmuABINegB");
	this.shape_39.setTransform(25.15,-0.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#B2B2B2").ss(2.8).p("AmvABINegB");
	this.shape_40.setTransform(25.15,-0.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#B2B2B2").ss(2.8).p("AmvABINfgB");
	this.shape_41.setTransform(25.15,-0.05);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#B2B2B2").ss(2.9).p("AmvABINfgB");
	this.shape_42.setTransform(25.15,-0.05);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#B2B2B2").ss(3).p("AmvABINfgB");
	this.shape_43.setTransform(25.15,-0.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#B2B2B2").ss(3.1).p("AmuABINegB");
	this.shape_44.setTransform(25.15,-0.05);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#B2B2B2").ss(3.1).p("AmvABINegB");
	this.shape_45.setTransform(25.15,-0.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#B2B2B2").ss(3.2).p("AmvABINfgB");
	this.shape_46.setTransform(25.15,-0.05);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#B2B2B2").ss(3.3).p("AmvABINfgB");
	this.shape_47.setTransform(25.15,-0.05);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#B2B2B2").ss(3.4).p("AmvABINfgB");
	this.shape_48.setTransform(25.15,-0.05);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#B2B2B2").ss(3.4).p("AmuABINegB");
	this.shape_49.setTransform(25.15,-0.05);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#B2B2B2").ss(3.4).p("AmvABINegB");
	this.shape_50.setTransform(25.15,-0.05);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#B2B2B2").ss(3.5).p("AmvABINegB");
	this.shape_51.setTransform(25.15,-0.05);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#B2B2B2").ss(3.5).p("AmvABINfgB");
	this.shape_52.setTransform(25.15,-0.05);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#B2B2B2").ss(3.6).p("AmvABINfgB");
	this.shape_53.setTransform(25.15,-0.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#B2B2B2").ss(3.7).p("AmvABINfgB");
	this.shape_54.setTransform(25.15,-0.05);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#B2B2B2").ss(3.7).p("AmuABINegB");
	this.shape_55.setTransform(25.15,-0.05);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#B2B2B2").ss(3.8).p("AmvABINegB");
	this.shape_56.setTransform(25.15,-0.05);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#B2B2B2").ss(3.8).p("AmvAAINeAA");
	this.shape_57.setTransform(25.15,-0.05);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#B2B2B2").ss(3.8).p("AmvAAINfAA");
	this.shape_58.setTransform(25.15,-0.05);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#B2B2B2").ss(3.9).p("AmvABINfgB");
	this.shape_59.setTransform(25.15,-0.05);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#B2B2B2").ss(3.9).p("AmvAAINfAA");
	this.shape_60.setTransform(25.15,-0.05);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#B2B2B2").ss(4).p("AmvABINfgB");
	this.shape_61.setTransform(25.15,-0.05);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#B2B2B2").ss(4.1).p("AmuABINegB");
	this.shape_62.setTransform(25.15,-0.05);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#B2B2B2").ss(4.1).p("AmvABINegB");
	this.shape_63.setTransform(25.15,-0.05);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#B2B2B2").ss(4.1).p("AmvABINfgB");
	this.shape_64.setTransform(25.15,-0.05);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#B2B2B2").ss(4.2).p("AmvABINfgB");
	this.shape_65.setTransform(25.15,-0.05);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#B2B2B2").ss(4.3).p("AmvABINfgB");
	this.shape_66.setTransform(25.15,-0.05);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#B2B2B2").ss(4.4).p("AmvABINfgB");
	this.shape_67.setTransform(25.15,-0.05);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#B2B2B2").ss(4.4).p("AmuABINegB");
	this.shape_68.setTransform(25.15,-0.05);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#B2B2B2").ss(4.4).p("AmvABINegB");
	this.shape_69.setTransform(25.15,-0.05);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#B2B2B2").ss(4.5).p("AmvABINfgB");
	this.shape_70.setTransform(25.15,-0.05);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#B2B2B2").ss(4.6).p("AmvABINfgB");
	this.shape_71.setTransform(25.15,-0.05);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#B2B2B2").ss(4.7).p("AmvABINfgB");
	this.shape_72.setTransform(25.15,-0.05);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#B2B2B2").ss(4.7).p("AmuABINegB");
	this.shape_73.setTransform(25.15,-0.05);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#B2B2B2").ss(4.8).p("AmvABINegB");
	this.shape_74.setTransform(25.15,-0.05);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#B2B2B2").ss(4.8).p("AmvABINfgB");
	this.shape_75.setTransform(25.15,-0.05);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#B2B2B2").ss(4.9).p("AmvABINfgB");
	this.shape_76.setTransform(25.15,-0.05);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#B2B2B2").ss(5).p("AmvABINfgB");
	this.shape_77.setTransform(25.15,-0.05);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#B2B2B2").ss(5.1).p("AmuABINegB");
	this.shape_78.setTransform(25.15,-0.05);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#B2B2B2").ss(5.1).p("AmvABINegB");
	this.shape_79.setTransform(25.15,-0.05);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#B2B2B2").ss(5.1).p("AmvABINfgB");
	this.shape_80.setTransform(25.15,-0.05);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#B2B2B2").ss(5.2).p("AmvABINfgB");
	this.shape_81.setTransform(25.15,-0.05);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#B2B2B2").ss(5.3).p("AmvABINfgB");
	this.shape_82.setTransform(25.15,-0.05);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#B2B2B2").ss(5.4).p("AmvABINfgB");
	this.shape_83.setTransform(25.15,-0.05);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#B2B2B2").ss(5.4).p("AmuABINegB");
	this.shape_84.setTransform(25.15,-0.05);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#B2B2B2").ss(5.4).p("AmvABINegB");
	this.shape_85.setTransform(25.15,-0.05);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#B2B2B2").ss(5.5).p("AmvABINfgB");
	this.shape_86.setTransform(25.15,-0.05);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#B2B2B2").ss(5.6).p("AmvABINfgB");
	this.shape_87.setTransform(25.15,-0.05);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#B2B2B2").ss(5.7).p("AmvABINfgB");
	this.shape_88.setTransform(25.15,-0.05);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#B2B2B2").ss(5.7).p("AmuABINegB");
	this.shape_89.setTransform(25.15,-0.05);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#B2B2B2").ss(5.8).p("AmvABINegB");
	this.shape_90.setTransform(25.15,-0.05);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#B2B2B2").ss(5.8).p("AmvABINfgB");
	this.shape_91.setTransform(25.15,-0.05);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#B2B2B2").ss(5.9).p("AmvABINfgB");
	this.shape_92.setTransform(25.15,-0.05);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#B2B2B2").ss(6).p("AmvABINfgB");
	this.shape_93.setTransform(25.15,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_93}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-3.1,92.3,6.1);


(lib.RuzovaRNA1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF24FA").ss(0.1).p("Ak3gjIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape.setTransform(31.2,3.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF24FA").ss(0.1).p("Ak3gkIIcAAQAhAAAWAXQAXAXAAAg");
	this.shape_1.setTransform(31.2,3.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF24FA").ss(0.2).p("Ak3gkIIcAAQAhAAAWAXQAXAXAAAg");
	this.shape_2.setTransform(31.2,3.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF24FA").ss(0.3).p("Ak3gkIIcAAQAhAAAWAXQAXAXAAAg");
	this.shape_3.setTransform(31.2,3.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF24FA").ss(0.4).p("Ak3gkIIcAAQAhAAAWAXQAXAXAAAg");
	this.shape_4.setTransform(31.2,3.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF24FA").ss(0.5).p("Ak3gkIIcAAQAhAAAWAXQAXAXAAAg");
	this.shape_5.setTransform(31.2,3.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF24FA").ss(0.6).p("Ak3gkIIcAAQAhAAAWAXQAXAXAAAg");
	this.shape_6.setTransform(31.2,3.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF24FA").ss(0.7).p("Ak3gkIIcAAQAhAAAWAXQAXAXAAAg");
	this.shape_7.setTransform(31.2,3.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF24FA").ss(0.8).p("Ak3gkIIcAAQAhAAAWAXQAXAXAAAg");
	this.shape_8.setTransform(31.2,3.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF24FA").ss(0.9).p("Ak3gkIIcAAQAhAAAWAXQAXAXAAAg");
	this.shape_9.setTransform(31.2,3.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF24FA").p("Ak3gkIIcAAQAhAAAWAXQAXAXAAAg");
	this.shape_10.setTransform(31.2,3.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF24FA").p("Ak3gjIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_11.setTransform(31.2069,3.6431);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF24FA").ss(1.1).p("Ak3gjIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_12.setTransform(31.2162,3.6338);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF24FA").ss(1.2).p("Ak3gjIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_13.setTransform(31.244,3.606);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF24FA").ss(1.2).p("Ak4gjIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_14.setTransform(31.2533,3.5967);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF24FA").ss(1.3).p("Ak4gjIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_15.setTransform(31.2626,3.5874);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF24FA").ss(1.4).p("Ak4gjIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_16.setTransform(31.2904,3.5596);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF24FA").ss(1.4).p("Ak4giIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_17.setTransform(31.309,3.541);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF24FA").ss(1.5).p("Ak4giIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_18.setTransform(31.3182,3.5318);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF24FA").ss(1.6).p("Ak4giIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_19.setTransform(31.3461,3.5039);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF24FA").ss(1.6).p("Ak5giIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_20.setTransform(31.3553,3.4947);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF24FA").ss(1.7).p("Ak5giIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_21.setTransform(31.3646,3.4854);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF24FA").ss(1.8).p("Ak5giIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_22.setTransform(31.3925,3.4575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF24FA").ss(1.8).p("Ak5ghIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_23.setTransform(31.4017,3.4483);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF24FA").ss(1.9).p("Ak5ghIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_24.setTransform(31.4203,3.4297);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF24FA").ss(2).p("Ak5ghIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_25.setTransform(31.4388,3.4112);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF24FA").ss(2).p("Ak6ghIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_26.setTransform(31.4574,3.3926);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF24FA").ss(2.1).p("Ak6ghIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_27.setTransform(31.4667,3.3833);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF24FA").ss(2.2).p("Ak6ghIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_28.setTransform(31.4945,3.3555);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF24FA").ss(2.2).p("Ak6ggIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_29.setTransform(31.5038,3.3462);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF24FA").ss(2.3).p("Ak6ggIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_30.setTransform(31.5131,3.3369);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF24FA").ss(2.4).p("Ak6ggIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_31.setTransform(31.5409,3.3091);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF24FA").ss(2.4).p("Ak7ggIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_32.setTransform(31.5502,3.2998);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF24FA").ss(2.5).p("Ak7ggIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_33.setTransform(31.5687,3.2813);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF24FA").ss(2.6).p("Ak7ggIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_34.setTransform(31.5965,3.2535);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF24FA").ss(2.6).p("Ak7gfIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_35.setTransform(31.6058,3.2442);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF24FA").ss(2.7).p("Ak7gfIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_36.setTransform(31.6151,3.2349);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF24FA").ss(2.8).p("Ak7gfIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_37.setTransform(31.6429,3.2071);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF24FA").ss(2.8).p("Ak8gfIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_38.setTransform(31.6522,3.1978);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF24FA").ss(2.9).p("Ak8gfIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_39.setTransform(31.6708,3.1792);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF24FA").ss(3).p("Ak8gfIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_40.setTransform(31.6893,3.1607);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF24FA").ss(3).p("Ak8geIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_41.setTransform(31.7079,3.1421);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF24FA").ss(3.1).p("Ak8geIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_42.setTransform(31.7171,3.1329);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF24FA").ss(3.2).p("Ak8geIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_43.setTransform(31.745,3.105);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF24FA").ss(3.2).p("Ak9geIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_44.setTransform(31.7542,3.0958);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF24FA").ss(3.3).p("Ak9geIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_45.setTransform(31.7635,3.0865);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF24FA").ss(3.4).p("Ak9geIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_46.setTransform(31.7914,3.0586);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF24FA").ss(3.4).p("Ak9gdIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_47.setTransform(31.8006,3.0494);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF24FA").ss(3.5).p("Ak9gdIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_48.setTransform(31.8192,3.0308);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF24FA").ss(3.6).p("Ak9gdIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_49.setTransform(31.8377,3.0123);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF24FA").ss(3.6).p("Ak+gdIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_50.setTransform(31.8563,2.9937);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF24FA").ss(3.7).p("Ak+gdIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_51.setTransform(31.8656,2.9844);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF24FA").ss(3.8).p("Ak+gdIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_52.setTransform(31.8934,2.9566);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF24FA").ss(3.8).p("Ak+gcIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_53.setTransform(31.9027,2.9473);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF24FA").ss(3.9).p("Ak+gcIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_54.setTransform(31.9212,2.9288);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF24FA").ss(4).p("Ak+gcIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_55.setTransform(31.9398,2.9102);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF24FA").ss(4).p("Ak/gcIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_56.setTransform(31.9583,2.8917);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF24FA").ss(4.1).p("Ak/gcIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_57.setTransform(31.9676,2.8824);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF24FA").ss(4.2).p("Ak/gcIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_58.setTransform(31.9954,2.8546);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF24FA").ss(4.2).p("Ak/gbIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_59.setTransform(32.0047,2.8453);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF24FA").ss(4.3).p("Ak/gbIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_60.setTransform(32.014,2.836);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF24FA").ss(4.4).p("Ak/gbIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_61.setTransform(32.0418,2.8082);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FF24FA").ss(4.4).p("AlAgbIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_62.setTransform(32.0511,2.7989);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FF24FA").ss(4.5).p("AlAgbIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_63.setTransform(32.0697,2.7803);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FF24FA").ss(4.6).p("AlAgbIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_64.setTransform(32.0882,2.7618);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FF24FA").ss(4.6).p("AlAgaIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_65.setTransform(32.1068,2.7432);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FF24FA").ss(4.7).p("AlAgaIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_66.setTransform(32.116,2.734);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FF24FA").ss(4.8).p("AlAgaIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_67.setTransform(32.1439,2.7061);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FF24FA").ss(4.8).p("AlBgaIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_68.setTransform(32.1531,2.6969);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FF24FA").ss(4.9).p("AlBgaIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_69.setTransform(32.1717,2.6783);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FF24FA").ss(5).p("AlBgaIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_70.setTransform(32.1903,2.6597);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FF24FA").ss(5).p("AlBgZIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_71.setTransform(32.2088,2.6412);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FF24FA").ss(5.1).p("AlBgZIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_72.setTransform(32.2181,2.6319);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FF24FA").ss(5.2).p("AlBgZIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_73.setTransform(32.2459,2.6041);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FF24FA").ss(5.2).p("AlCgZIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_74.setTransform(32.2552,2.5948);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FF24FA").ss(5.3).p("AlCgZIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_75.setTransform(32.2645,2.5855);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FF24FA").ss(5.4).p("AlCgZIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_76.setTransform(32.2923,2.5577);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FF24FA").ss(5.4).p("AlCgYIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_77.setTransform(32.3016,2.5484);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FF24FA").ss(5.5).p("AlCgYIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_78.setTransform(32.3201,2.5299);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FF24FA").ss(5.6).p("AlCgYIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_79.setTransform(32.3387,2.5113);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FF24FA").ss(5.6).p("AlDgYIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_80.setTransform(32.3572,2.4928);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FF24FA").ss(5.7).p("AlDgYIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_81.setTransform(32.3665,2.4835);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FF24FA").ss(5.8).p("AlDgYIIcAAQAhAAAWAXQAXAWAAAg");
	this.shape_82.setTransform(32.3943,2.4557);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FF24FA").ss(5.8).p("AlDgXIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_83.setTransform(32.4036,2.4464);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FF24FA").ss(5.9).p("AlDgXIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_84.setTransform(32.4129,2.4371);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FF24FA").ss(6).p("AlDgXIIcAAQAgAAAXAXQAXAWAAAg");
	this.shape_85.setTransform(32.4407,2.4093);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FF24FA").ss(6).p("AlDgXIIcAAQAgAAAXAXQAWAWAAAg");
	this.shape_86.setTransform(32.45,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12,p:{x:31.2162,y:3.6338}}]},1).to({state:[{t:this.shape_12,p:{x:31.2255,y:3.6245}}]},1).to({state:[{t:this.shape_12,p:{x:31.2347,y:3.6153}}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{x:31.2626,y:3.5874}}]},1).to({state:[{t:this.shape_15,p:{x:31.2719,y:3.5781}}]},1).to({state:[{t:this.shape_15,p:{x:31.2811,y:3.5689}}]},1).to({state:[{t:this.shape_16,p:{x:31.2904,y:3.5596}}]},1).to({state:[{t:this.shape_16,p:{x:31.2997,y:3.5503}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18,p:{x:31.3182,y:3.5318}}]},1).to({state:[{t:this.shape_18,p:{x:31.3275,y:3.5225}}]},1).to({state:[{t:this.shape_18,p:{x:31.3368,y:3.5132}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21,p:{x:31.3646,y:3.4854}}]},1).to({state:[{t:this.shape_21,p:{x:31.3739,y:3.4761}}]},1).to({state:[{t:this.shape_21,p:{x:31.3832,y:3.4668}}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23,p:{x:31.4017,y:3.4483}}]},1).to({state:[{t:this.shape_23,p:{x:31.411,y:3.439}}]},1).to({state:[{t:this.shape_24,p:{x:31.4203,y:3.4297}}]},1).to({state:[{t:this.shape_24,p:{x:31.4296,y:3.4204}}]},1).to({state:[{t:this.shape_25,p:{x:31.4388,y:3.4112}}]},1).to({state:[{t:this.shape_25,p:{x:31.4481,y:3.4019}}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27,p:{x:31.4667,y:3.3833}}]},1).to({state:[{t:this.shape_27,p:{x:31.4759,y:3.3741}}]},1).to({state:[{t:this.shape_27,p:{x:31.4852,y:3.3648}}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30,p:{x:31.5131,y:3.3369}}]},1).to({state:[{t:this.shape_30,p:{x:31.5223,y:3.3277}}]},1).to({state:[{t:this.shape_30,p:{x:31.5316,y:3.3184}}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32,p:{x:31.5502,y:3.2998}}]},1).to({state:[{t:this.shape_32,p:{x:31.5594,y:3.2906}}]},1).to({state:[{t:this.shape_33,p:{x:31.5687,y:3.2813}}]},1).to({state:[{t:this.shape_33,p:{x:31.578,y:3.272}}]},1).to({state:[{t:this.shape_33,p:{x:31.5873,y:3.2627}}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36,p:{x:31.6151,y:3.2349}}]},1).to({state:[{t:this.shape_36,p:{x:31.6244,y:3.2256}}]},1).to({state:[{t:this.shape_36,p:{x:31.6336,y:3.2164}}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38,p:{x:31.6522,y:3.1978}}]},1).to({state:[{t:this.shape_38,p:{x:31.6615,y:3.1885}}]},1).to({state:[{t:this.shape_39,p:{x:31.6708,y:3.1792}}]},1).to({state:[{t:this.shape_39,p:{x:31.68,y:3.17}}]},1).to({state:[{t:this.shape_40,p:{x:31.6893,y:3.1607}}]},1).to({state:[{t:this.shape_40,p:{x:31.6986,y:3.1514}}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42,p:{x:31.7171,y:3.1329}}]},1).to({state:[{t:this.shape_42,p:{x:31.7264,y:3.1236}}]},1).to({state:[{t:this.shape_42,p:{x:31.7357,y:3.1143}}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45,p:{x:31.7635,y:3.0865}}]},1).to({state:[{t:this.shape_45,p:{x:31.7728,y:3.0772}}]},1).to({state:[{t:this.shape_45,p:{x:31.7821,y:3.0679}}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47,p:{x:31.8006,y:3.0494}}]},1).to({state:[{t:this.shape_47,p:{x:31.8099,y:3.0401}}]},1).to({state:[{t:this.shape_48,p:{x:31.8192,y:3.0308}}]},1).to({state:[{t:this.shape_48,p:{x:31.8285,y:3.0215}}]},1).to({state:[{t:this.shape_49,p:{x:31.8377,y:3.0123}}]},1).to({state:[{t:this.shape_49,p:{x:31.847,y:3.003}}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51,p:{x:31.8656,y:2.9844}}]},1).to({state:[{t:this.shape_51,p:{x:31.8748,y:2.9752}}]},1).to({state:[{t:this.shape_51,p:{x:31.8841,y:2.9659}}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53,p:{x:31.9027,y:2.9473}}]},1).to({state:[{t:this.shape_53,p:{x:31.9119,y:2.9381}}]},1).to({state:[{t:this.shape_54,p:{x:31.9212,y:2.9288}}]},1).to({state:[{t:this.shape_54,p:{x:31.9305,y:2.9195}}]},1).to({state:[{t:this.shape_55,p:{x:31.9398,y:2.9102}}]},1).to({state:[{t:this.shape_55,p:{x:31.9491,y:2.9009}}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57,p:{x:31.9676,y:2.8824}}]},1).to({state:[{t:this.shape_57,p:{x:31.9769,y:2.8731}}]},1).to({state:[{t:this.shape_57,p:{x:31.9862,y:2.8638}}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60,p:{x:32.014,y:2.836}}]},1).to({state:[{t:this.shape_60,p:{x:32.0233,y:2.8267}}]},1).to({state:[{t:this.shape_60,p:{x:32.0325,y:2.8175}}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62,p:{x:32.0511,y:2.7989}}]},1).to({state:[{t:this.shape_62,p:{x:32.0604,y:2.7896}}]},1).to({state:[{t:this.shape_63,p:{x:32.0697,y:2.7803}}]},1).to({state:[{t:this.shape_63,p:{x:32.0789,y:2.7711}}]},1).to({state:[{t:this.shape_64,p:{x:32.0882,y:2.7618}}]},1).to({state:[{t:this.shape_64,p:{x:32.0975,y:2.7525}}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66,p:{x:32.116,y:2.734}}]},1).to({state:[{t:this.shape_66,p:{x:32.1253,y:2.7247}}]},1).to({state:[{t:this.shape_66,p:{x:32.1346,y:2.7154}}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68,p:{x:32.1531,y:2.6969}}]},1).to({state:[{t:this.shape_68,p:{x:32.1624,y:2.6876}}]},1).to({state:[{t:this.shape_69,p:{x:32.1717,y:2.6783}}]},1).to({state:[{t:this.shape_69,p:{x:32.181,y:2.669}}]},1).to({state:[{t:this.shape_70,p:{x:32.1903,y:2.6597}}]},1).to({state:[{t:this.shape_70,p:{x:32.1995,y:2.6505}}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72,p:{x:32.2181,y:2.6319}}]},1).to({state:[{t:this.shape_72,p:{x:32.2274,y:2.6226}}]},1).to({state:[{t:this.shape_72,p:{x:32.2366,y:2.6134}}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75,p:{x:32.2645,y:2.5855}}]},1).to({state:[{t:this.shape_75,p:{x:32.2737,y:2.5763}}]},1).to({state:[{t:this.shape_75,p:{x:32.283,y:2.567}}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77,p:{x:32.3016,y:2.5484}}]},1).to({state:[{t:this.shape_77,p:{x:32.3108,y:2.5392}}]},1).to({state:[{t:this.shape_78,p:{x:32.3201,y:2.5299}}]},1).to({state:[{t:this.shape_78,p:{x:32.3294,y:2.5206}}]},1).to({state:[{t:this.shape_79,p:{x:32.3387,y:2.5113}}]},1).to({state:[{t:this.shape_79,p:{x:32.348,y:2.502}}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81,p:{x:32.3665,y:2.4835}}]},1).to({state:[{t:this.shape_81,p:{x:32.3758,y:2.4742}}]},1).to({state:[{t:this.shape_81,p:{x:32.3851,y:2.4649}}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84,p:{x:32.4129,y:2.4371}}]},1).to({state:[{t:this.shape_84,p:{x:32.4222,y:2.4278}}]},1).to({state:[{t:this.shape_84,p:{x:32.4314,y:2.4186}}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,67.9,13.8);


(lib.PulkruhZluty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD05C").s().p("An8D+QABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	this.shape.setTransform(50.85,25.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.PulkruhZluty, new cjs.Rectangle(0,0,101.7,50.9), null);


(lib.PulkruhRuzovyRNA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FB28F2").s().p("An8D+QABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	this.shape.setTransform(50.85,25.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.PulkruhRuzovyRNA, new cjs.Rectangle(0,0,101.7,50.9), null);


(lib.PulkruhFialovy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#923EFF").s().p("An8D+QABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	this.shape.setTransform(50.85,25.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.PulkruhFialovy, new cjs.Rectangle(0,0,101.7,50.9), null);


(lib.PulkruhCerveny = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("An8D+QABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	this.shape.setTransform(50.85,25.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.PulkruhCerveny, new cjs.Rectangle(0,0,101.7,50.9), null);


(lib.PrechodUvnitr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6.1,0.2,5.4).ss(0.1).p("AgtA0QAlgCAZgSQAZgRgBgUQgBgSgUgNQgUgNgdgC");
	this.shape.setTransform(4.6103,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).ss(0.1).p("AgtA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgUgNgdgC");
	this.shape_1.setTransform(4.6103,5.2);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).ss(0.2).p("AgtA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgUgNgdgC");
	this.shape_2.setTransform(4.6103,5.2);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).ss(0.3).p("AgtA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgUgNgdgC");
	this.shape_3.setTransform(4.6103,5.2);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).ss(0.4).p("AgtA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgUgNgdgC");
	this.shape_4.setTransform(4.6103,5.2);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).ss(0.5).p("AgtA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgUgNgdgC");
	this.shape_5.setTransform(4.6103,5.2);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).ss(0.6).p("AgtA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgUgNgdgC");
	this.shape_6.setTransform(4.6103,5.2);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).ss(0.7).p("AgtA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgUgNgdgC");
	this.shape_7.setTransform(4.6103,5.2);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).ss(0.8).p("AgtA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgUgNgdgC");
	this.shape_8.setTransform(4.6103,5.2);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).ss(0.9).p("AgtA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgUgNgdgC");
	this.shape_9.setTransform(4.6103,5.2);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).p("AgtA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgUgNgdgC");
	this.shape_10.setTransform(4.6103,5.2);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).ss(1.1).p("AgtA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgUgNgdgC");
	this.shape_11.setTransform(4.6233,5.2);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).ss(1.1).p("AgtA0QAlgCAZgRQAZgRgBgVQgBgSgUgNQgUgMgdgD");
	this.shape_12.setTransform(4.6401,5.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).ss(1.2).p("AgtA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgUgNgdgC");
	this.shape_13.setTransform(4.6456,5.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).ss(1.2).p("AguA0QAmgCAYgRQAagSgBgUQgBgSgVgNQgTgNgegC");
	this.shape_14.setTransform(4.6512,5.2);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).ss(1.2).p("AguA0QAmgDAYgQQAagSgBgUQgBgSgVgNQgTgNgegC");
	this.shape_15.setTransform(4.6596,5.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).ss(1.3).p("AguA0QAmgCAYgRQAagSgBgUQgBgSgVgNQgTgNgegC");
	this.shape_16.setTransform(4.6707,5.2);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.5,-6,0.2,5.4).ss(1.4).p("AguA0QAmgCAYgRQAagSgBgUQgBgSgVgNQgTgNgegC");
	this.shape_17.setTransform(4.693,5.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.6,-6,0.1,5.4).ss(1.4).p("AguA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgTgNgegC");
	this.shape_18.setTransform(4.7014,5.2);
	this.shape_18._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.6,-6,0.1,5.4).ss(1.5).p("AguA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgTgNgegC");
	this.shape_19.setTransform(4.7153,5.2);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.6,-6,0.1,5.4).ss(1.5).p("AguA0QAlgDAZgQQAZgSgBgUQgBgSgUgNQgTgNgegC");
	this.shape_20.setTransform(4.7293,5.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.6,-6,0.1,5.4).ss(1.6).p("AguA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgTgNgegC");
	this.shape_21.setTransform(4.7404,5.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.6,-6,0.1,5.4).ss(1.6).p("AguA0QAlgCAZgRQAZgRgBgVQgBgSgUgNQgTgMgegD");
	this.shape_22.setTransform(4.7488,5.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.6,-6,0.1,5.4).ss(1.6).p("AgvA0QAmgCAYgRQAagSgBgUQgBgSgVgNQgTgNgegC");
	this.shape_23.setTransform(4.7516,5.2);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.6,-6,0.1,5.4).ss(1.7).p("AgvA0QAmgCAYgRQAagSgBgUQgBgSgVgNQgTgNgegC");
	this.shape_24.setTransform(4.7628,5.2);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.6,-6,0.1,5.4).ss(1.8).p("AgvA0QAmgCAYgRQAagSgBgUQgBgSgVgNQgTgNgegC");
	this.shape_25.setTransform(4.7879,5.2);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.6,-6,0.1,5.4).ss(1.8).p("AgvA0QAmgDAYgQQAagSgBgUQgBgSgVgNQgTgNgegC");
	this.shape_26.setTransform(4.799,5.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.7,-6,0,5.4).ss(1.8).p("AgvA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgTgNgegC");
	this.shape_27.setTransform(4.8018,5.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.7,-6,0,5.4).ss(1.9).p("AgvA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgTgNgegC");
	this.shape_28.setTransform(4.8102,5.2);
	this.shape_28._off = true;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.7,-6,0,5.4).ss(1.9).p("AgvA0QAlgCAZgRQAZgRgBgVQgBgSgUgNQgTgMgegD");
	this.shape_29.setTransform(4.8185,5.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.7,-6,0,5.4).ss(2).p("AgvA0QAlgCAZgRQAZgSgBgUQgBgSgUgNQgTgNgegC");
	this.shape_30.setTransform(4.8325,5.2);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().ls(["#FF3939","#570B84"],[0,1],-0.7,-6,0,5.4).ss(2).p("AgvA0QAlgCAZgSQAZgRgBgUQgBgSgUgNQgTgNgegC");
	this.shape_31.setTransform(4.8436,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_13,p:{x:4.6456}}]},1).to({state:[{t:this.shape_13,p:{x:4.6484}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17,p:{x:4.693}}]},1).to({state:[{t:this.shape_17,p:{x:4.6958}}]},1).to({state:[{t:this.shape_17,p:{x:4.6986}}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_21,p:{x:4.7404}}]},1).to({state:[{t:this.shape_21,p:{x:4.7432}}]},1).to({state:[{t:this.shape_21,p:{x:4.746}}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27,p:{x:4.8018}}]},1).to({state:[{t:this.shape_27,p:{x:4.8046}}]},1).to({state:[{t:this.shape_27,p:{x:4.8074}}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(3).to({_off:true},1).wait(155));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(5).to({_off:false},0).wait(7).to({_off:true},1).wait(147));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(13).to({_off:false},0).wait(7).to({_off:true},1).wait(139));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(21).to({_off:false},0).wait(8).to({_off:true},1).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(30).to({_off:false},0).wait(7).to({_off:true},1).wait(122));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(38).to({_off:false},0).wait(8).to({_off:true},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(47).to({_off:false},0).wait(7).to({_off:true},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(55).to({_off:false},0).wait(7).to({_off:true},1).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(63).to({_off:false},0).wait(8).to({_off:true},1).wait(88));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(72).to({_off:false},0).wait(4).to({x:4.6122},0).wait(1).to({x:4.615},0).wait(1).to({x:4.6177},0).wait(1).to({x:4.6205},0).to({_off:true},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(80).to({_off:false},0).wait(1).to({x:4.6261},0).wait(1).to({x:4.6289},0).wait(1).to({x:4.6317},0).wait(1).to({x:4.6345},0).wait(1).to({x:4.6373},0).to({_off:true},1).wait(1).to({_off:false,x:4.6428},0).to({_off:true},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(90).to({_off:false},0).wait(1).to({x:4.654},0).wait(1).to({x:4.6568},0).to({_off:true},1).wait(1).to({_off:false,x:4.6624},0).wait(1).to({x:4.6652},0).wait(1).to({x:4.6679},0).to({_off:true},1).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(97).to({_off:false},0).wait(1).to({x:4.6735},0).wait(1).to({x:4.6763},0).wait(1).to({x:4.6791},0).wait(1).to({x:4.6819},0).wait(1).to({x:4.6847},0).wait(1).to({x:4.6875},0).wait(1).to({x:4.6902},0).to({_off:true},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(108).to({_off:false},0).wait(1).to({x:4.7042},0).wait(1).to({x:4.707},0).wait(1).to({x:4.7098},0).wait(1).to({x:4.7126},0).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(113).to({_off:false},0).wait(1).to({x:4.7181},0).wait(1).to({x:4.7209},0).wait(1).to({x:4.7237},0).wait(1).to({x:4.7265},0).to({_off:true},1).wait(1).to({_off:false,x:4.7321},0).wait(1).to({x:4.7349},0).wait(1).to({x:4.7377},0).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(126).to({_off:false},0).wait(1).to({x:4.7544},0).wait(1).to({x:4.7572},0).wait(1).to({x:4.76},0).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(130).to({_off:false},0).wait(1).to({x:4.7655},0).wait(1).to({x:4.7683},0).wait(1).to({x:4.7711},0).wait(1).to({x:4.7739},0).wait(1).to({x:4.7767},0).wait(1).to({x:4.7795},0).wait(1).to({x:4.7823},0).wait(1).to({x:4.7851},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(139).to({_off:false},0).wait(1).to({x:4.7906},0).wait(1).to({x:4.7934},0).wait(1).to({x:4.7962},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(147).to({_off:false},0).wait(1).to({x:4.813},0).wait(1).to({x:4.8157},0).to({_off:true},1).wait(1).to({_off:false,x:4.8213},0).wait(1).to({x:4.8241},0).wait(1).to({x:4.8269},0).wait(1).to({x:4.8297},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(155).to({_off:false},0).wait(1).to({x:4.8353},0).wait(1).to({x:4.838},0).wait(1).to({x:4.8408},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-4.1,16.6,15.5);


(lib.OranzovaSipkaSpodni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFAA00").ss(0.1).p("Ag9BEQAGg0AkgjQAigkAzgH");
	this.shape.setTransform(6.1593,6.3265);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFAA00").ss(0.2).p("Ag9BEQAGg0AkgjQAigkAzgH");
	this.shape_1.setTransform(6.1593,6.3265);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFAA00").ss(0.3).p("Ag9BEQAGg0AkgjQAigkAzgH");
	this.shape_2.setTransform(6.1593,6.3265);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFAA00").ss(0.4).p("Ag9BEQAGg0AkgjQAigkAzgH");
	this.shape_3.setTransform(6.1593,6.3265);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFAA00").ss(0.5).p("Ag9BEQAGg0AkgjQAigkAzgH");
	this.shape_4.setTransform(6.1593,6.3265);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFAA00").ss(0.6).p("Ag9BEQAGg0AkgjQAigkAzgH");
	this.shape_5.setTransform(6.1593,6.3265);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFAA00").ss(0.7).p("Ag9BEQAGg0AkgjQAigkAzgH");
	this.shape_6.setTransform(6.1593,6.3265);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFAA00").ss(0.8).p("Ag9BEQAGg0AkgjQAigkAzgH");
	this.shape_7.setTransform(6.1593,6.3265);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFAA00").ss(0.9).p("Ag9BEQAGg0AkgjQAigkAzgH");
	this.shape_8.setTransform(6.1593,6.3265);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFAA00").p("Ag9BEQAGg0AkgjQAigkAzgH");
	this.shape_9.setTransform(6.1593,6.3265);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFAA00").p("Ag8BEQAFg0AkgjQAjgkAygH");
	this.shape_10.setTransform(6.1489,6.3157);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFAA00").ss(1.1).p("Ag8BEQAFg0AkgjQAjgkAygH");
	this.shape_11.setTransform(6.1449,6.3117);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFAA00").ss(1.1).p("Ag8BEQAFgzAkgkQAjgkAygH");
	this.shape_12.setTransform(6.1331,6.2994);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFAA00").ss(1.2).p("Ag8BEQAFgzAkgkQAjgkAygH");
	this.shape_13.setTransform(6.1253,6.2913);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFAA00").ss(1.3).p("Ag8BEQAFgzAkgkQAjgkAygH");
	this.shape_14.setTransform(6.1017,6.2668);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFAA00").ss(1.3).p("Ag8BEQAGgzAkgkQAigkAzgH");
	this.shape_15.setTransform(6.0977,6.2627);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFAA00").ss(1.4).p("Ag8BFQAGg0AkgjQAigkAzgH");
	this.shape_16.setTransform(6.082,6.2464);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFAA00").ss(1.5).p("Ag8BFQAGg0AkgjQAigkAzgH");
	this.shape_17.setTransform(6.0584,6.222);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFAA00").ss(1.5).p("Ag7BFQAFg0AkgjQAjgkAygH");
	this.shape_18.setTransform(6.0466,6.2098);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFAA00").ss(1.6).p("Ag7BFQAFg0AkgjQAjgkAygH");
	this.shape_19.setTransform(6.0387,6.2016);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFAA00").ss(1.6).p("Ag7BFQAFgzAkgkQAjgkAygH");
	this.shape_20.setTransform(6.0348,6.1975);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFAA00").ss(1.7).p("Ag7BFQAFgzAkgkQAjgkAygH");
	this.shape_21.setTransform(6.0191,6.1812);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFAA00").ss(1.7).p("Ag7BFQAGgzAkgkQAigkAzgH");
	this.shape_22.setTransform(5.9994,6.1609);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFAA00").ss(1.8).p("Ag7BFQAGgzAkgkQAigkAzgH");
	this.shape_23.setTransform(5.9955,6.1568);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFAA00").ss(1.8).p("Ag7BGQAGg0AkgjQAigkAzgH");
	this.shape_24.setTransform(5.9876,6.1486);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFAA00").ss(1.9).p("Ag7BGQAGg0AkgjQAigkAzgH");
	this.shape_25.setTransform(5.9758,6.1364);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFAA00").ss(2).p("Ag7BGQAGg0AkgjQAigkAzgH");
	this.shape_26.setTransform(5.9522,6.1119);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFAA00").ss(2).p("Ag6BGQAFg0AkgjQAjgkAygH");
	this.shape_27.setTransform(5.9483,6.1079);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFAA00").ss(2).p("Ag6BGQAFgzAkgkQAjgkAygH");
	this.shape_28.setTransform(5.9404,6.0997);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFAA00").ss(2.1).p("Ag6BGQAFgzAkgkQAjgkAygH");
	this.shape_29.setTransform(5.9325,6.0916);
	this.shape_29._off = true;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFAA00").ss(2.2).p("Ag6BGQAFgzAkgkQAjgkAygH");
	this.shape_30.setTransform(5.9089,6.0671);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFAA00").ss(2.2).p("Ag6BGQAGgzAkgkQAigkAzgH");
	this.shape_31.setTransform(5.8971,6.0549);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFAA00").ss(2.3).p("Ag6BHQAGg0AkgjQAigkAzgH");
	this.shape_32.setTransform(5.8893,6.0467);
	this.shape_32._off = true;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFAA00").ss(2.4).p("Ag6BHQAGg0AkgjQAigkAzgH");
	this.shape_33.setTransform(5.8657,6.0223);
	this.shape_33._off = true;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFAA00").ss(2.4).p("Ag5BHQAFg0AkgjQAjgkAygH");
	this.shape_34.setTransform(5.8499,6.006);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFAA00").ss(2.5).p("Ag5BHQAFg0AkgjQAjgkAygH");
	this.shape_35.setTransform(5.846,6.0019);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFAA00").ss(2.5).p("Ag5BHQAFgzAkgkQAjgkAygH");
	this.shape_36.setTransform(5.8421,5.9978);
	this.shape_36._off = true;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFAA00").ss(2.6).p("Ag5BHQAFgzAkgkQAjgkAygH");
	this.shape_37.setTransform(5.8224,5.9775);
	this.shape_37._off = true;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFAA00").ss(2.7).p("Ag5BHQAFgzAkgkQAjgkAygH");
	this.shape_38.setTransform(5.8027,5.9571);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFAA00").ss(2.7).p("Ag5BHQAGgzAkgkQAigkAzgH");
	this.shape_39.setTransform(5.7988,5.953);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFAA00").ss(2.7).p("Ag5BIQAGg0AkgjQAigkAzgH");
	this.shape_40.setTransform(5.7948,5.9489);
	this.shape_40._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFAA00").ss(2.8).p("Ag5BIQAGg0AkgjQAigkAzgH");
	this.shape_41.setTransform(5.7791,5.9326);
	this.shape_41._off = true;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFAA00").ss(2.9).p("Ag5BIQAGg0AkgjQAigkAzgH");
	this.shape_42.setTransform(5.7594,5.9122);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFAA00").ss(2.9).p("Ag4BIQAFg0AkgjQAjgkAygH");
	this.shape_43.setTransform(5.7476,5.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFAA00").ss(2.9).p("Ag4BIQAFgzAkgkQAjgkAygH");
	this.shape_44.setTransform(5.7437,5.8959);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFAA00").ss(3).p("Ag4BIQAFgzAkgkQAjgkAygH");
	this.shape_45.setTransform(5.7358,5.8878);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{x:6.1449,y:6.3117}}]},1).to({state:[{t:this.shape_11,p:{x:6.141,y:6.3076}}]},1).to({state:[{t:this.shape_11,p:{x:6.1371,y:6.3035}}]},1).to({state:[{t:this.shape_12,p:{x:6.1331,y:6.2994}}]},1).to({state:[{t:this.shape_12,p:{x:6.1292,y:6.2953}}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17,p:{x:6.0584,y:6.222}}]},1).to({state:[{t:this.shape_17,p:{x:6.0545,y:6.2179}}]},1).to({state:[{t:this.shape_17,p:{x:6.0505,y:6.2138}}]},1).to({state:[{t:this.shape_18,p:{x:6.0466,y:6.2098}}]},1).to({state:[{t:this.shape_18,p:{x:6.0427,y:6.2057}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23,p:{x:5.9955,y:6.1568}}]},1).to({state:[{t:this.shape_23,p:{x:5.9915,y:6.1527}}]},1).to({state:[{t:this.shape_24,p:{x:5.9876,y:6.1486}}]},1).to({state:[{t:this.shape_24,p:{x:5.9837,y:6.1446}}]},1).to({state:[{t:this.shape_24,p:{x:5.9797,y:6.1405}}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27,p:{x:5.9483,y:6.1079}}]},1).to({state:[{t:this.shape_27,p:{x:5.9443,y:6.1038}}]},1).to({state:[{t:this.shape_28,p:{x:5.9404,y:6.0997}}]},1).to({state:[{t:this.shape_28,p:{x:5.9365,y:6.0956}}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30,p:{x:5.9089,y:6.0671}}]},1).to({state:[{t:this.shape_30,p:{x:5.905,y:6.063}}]},1).to({state:[{t:this.shape_30,p:{x:5.9011,y:6.059}}]},1).to({state:[{t:this.shape_31,p:{x:5.8971,y:6.0549}}]},1).to({state:[{t:this.shape_31,p:{x:5.8932,y:6.0508}}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42,p:{x:5.7594,y:5.9122}}]},1).to({state:[{t:this.shape_42,p:{x:5.7555,y:5.9082}}]},1).to({state:[{t:this.shape_42,p:{x:5.7516,y:5.9041}}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44,p:{x:5.7437,y:5.8959}}]},1).to({state:[{t:this.shape_44,p:{x:5.7398,y:5.8919}}]},1).to({state:[{t:this.shape_45,p:{x:5.7358,y:5.8878}}]},1).to({state:[{t:this.shape_45,p:{x:5.7319,y:5.8837}}]},1).to({state:[{t:this.shape_45,p:{x:5.728,y:5.8796}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3).to({_off:false},0).wait(5).to({_off:true},1).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(9).to({_off:false},0).wait(4).to({_off:true},1).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(14).to({_off:false},0).wait(5).to({_off:true},1).wait(140));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(20).to({_off:false},0).wait(4).to({_off:true},1).wait(135));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(25).to({_off:false},0).wait(5).to({_off:true},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(31).to({_off:false},0).wait(4).to({_off:true},1).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(36).to({_off:false},0).wait(5).to({_off:true},1).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(42).to({_off:false},0).wait(4).to({_off:true},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(47).to({_off:false},0).wait(3).to({x:6.1567,y:6.3239},0).wait(1).to({x:6.1528,y:6.3198},0).to({_off:true},1).wait(108));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(58).to({_off:false},0).wait(1).to({x:6.1213,y:6.2872},0).wait(1).to({x:6.1174,y:6.2831},0).wait(1).to({x:6.1135,y:6.279},0).wait(1).to({x:6.1095,y:6.275},0).wait(1).to({x:6.1056,y:6.2709},0).to({_off:true},1).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(65).to({_off:false},0).wait(1).to({x:6.0938,y:6.2587},0).wait(1).to({x:6.0899,y:6.2546},0).wait(1).to({x:6.0859,y:6.2505},0).to({_off:true},1).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(69).to({_off:false},0).wait(1).to({x:6.0781,y:6.2424},0).wait(1).to({x:6.0741,y:6.2383},0).wait(1).to({x:6.0702,y:6.2342},0).wait(1).to({x:6.0663,y:6.2301},0).wait(1).to({x:6.0623,y:6.2261},0).to({_off:true},1).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(81).to({_off:false},0).wait(1).to({x:6.0309,y:6.1935},0).wait(1).to({x:6.0269,y:6.1894},0).wait(1).to({x:6.023,y:6.1853},0).to({_off:true},1).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(85).to({_off:false},0).wait(1).to({x:6.0151,y:6.1772},0).wait(1).to({x:6.0112,y:6.1731},0).wait(1).to({x:6.0073,y:6.169},0).wait(1).to({x:6.0033,y:6.1649},0).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(96).to({_off:false},0).wait(1).to({x:5.9719,y:6.1323},0).wait(1).to({x:5.9679,y:6.1283},0).wait(1).to({x:5.964,y:6.1242},0).wait(1).to({x:5.9601,y:6.1201},0).wait(1).to({x:5.9561,y:6.116},0).to({_off:true},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(107).to({_off:false},0).wait(1).to({x:5.9286,y:6.0875},0).wait(1).to({x:5.9247,y:6.0834},0).wait(1).to({x:5.9207,y:6.0793},0).wait(1).to({x:5.9168,y:6.0753},0).wait(1).to({x:5.9129,y:6.0712},0).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(118).to({_off:false},0).wait(1).to({x:5.8853,y:6.0427},0).wait(1).to({x:5.8814,y:6.0386},0).wait(1).to({x:5.8775,y:6.0345},0).wait(1).to({x:5.8735,y:6.0304},0).wait(1).to({x:5.8696,y:6.0264},0).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(124).to({_off:false},0).wait(1).to({x:5.8617,y:6.0182},0).wait(1).to({x:5.8578,y:6.0141},0).wait(1).to({x:5.8539,y:6.0101},0).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(130).to({_off:false},0).wait(1).to({x:5.8381,y:5.9938},0).wait(1).to({x:5.8342,y:5.9897},0).wait(1).to({x:5.8303,y:5.9856},0).wait(1).to({x:5.8263,y:5.9815},0).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(135).to({_off:false},0).wait(1).to({x:5.8185,y:5.9734},0).wait(1).to({x:5.8145,y:5.9693},0).wait(1).to({x:5.8106,y:5.9652},0).wait(1).to({x:5.8066,y:5.9612},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(142).to({_off:false},0).wait(1).to({x:5.7909,y:5.9449},0).wait(1).to({x:5.787,y:5.9408},0).wait(1).to({x:5.783,y:5.9367},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(146).to({_off:false},0).wait(1).to({x:5.7752,y:5.9286},0).wait(1).to({x:5.7712,y:5.9245},0).wait(1).to({x:5.7673,y:5.9204},0).wait(1).to({x:5.7634,y:5.9163},0).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-7.2,22.9,23.3);


(lib.Group_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah/BlQg2gZgMgmQAMhFA2guQA3gwBIAAQBJAAA3AvQA2AwAMBEQgMAmg2AZQg4AZhIAAQhHAAg4gZg");
	this.shape.setTransform(19.35,12.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_2, new cjs.Rectangle(0,0,38.7,25.2), null);


(lib.ModraSipkaSvetla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C9FF").s().p("AgYgUIAxAAIgZApg");
	this.shape.setTransform(2.475,1.55,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

	// _Clip_Group_
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00C9FF").ss(0.1).p("AAAAZIAAgx");
	this.shape_1.setTransform(2.5,5.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00C9FF").ss(0.1).p("AAAgYIAAAx");
	this.shape_2.setTransform(2.5,5.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00C9FF").ss(0.2).p("AAAgYIAAAx");
	this.shape_3.setTransform(2.5,5.425);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00C9FF").ss(0.3).p("AAAgYIAAAx");
	this.shape_4.setTransform(2.5,5.425);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00C9FF").ss(0.4).p("AAAgYIAAAx");
	this.shape_5.setTransform(2.5,5.425);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00C9FF").ss(0.5).p("AAAgYIAAAx");
	this.shape_6.setTransform(2.5,5.425);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#00C9FF").ss(0.6).p("AAAgYIAAAx");
	this.shape_7.setTransform(2.5,5.425);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00C9FF").ss(0.7).p("AAAgYIAAAx");
	this.shape_8.setTransform(2.5,5.425);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00C9FF").ss(0.8).p("AAAgYIAAAx");
	this.shape_9.setTransform(2.5,5.425);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00C9FF").ss(0.9).p("AAAgYIAAAx");
	this.shape_10.setTransform(2.5,5.425);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00C9FF").p("AAAgYIAAAx");
	this.shape_11.setTransform(2.5,5.425);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00C9FF").ss(1.1).p("AAAgYIAAAx");
	this.shape_12.setTransform(2.5,5.425);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#00C9FF").ss(1.2).p("AAAgYIAAAx");
	this.shape_13.setTransform(2.5,5.425);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#00C9FF").ss(1.3).p("AAAgYIAAAx");
	this.shape_14.setTransform(2.5,5.425);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#00C9FF").ss(1.4).p("AAAgYIAAAx");
	this.shape_15.setTransform(2.5,5.425);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#00C9FF").ss(1.5).p("AAAgYIAAAx");
	this.shape_16.setTransform(2.5,5.425);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#00C9FF").ss(1.6).p("AAAgYIAAAx");
	this.shape_17.setTransform(2.5,5.425);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#00C9FF").ss(1.7).p("AAAgYIAAAx");
	this.shape_18.setTransform(2.5,5.425);
	this.shape_18._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#00C9FF").ss(1.8).p("AAAgYIAAAx");
	this.shape_19.setTransform(2.5,5.425);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#00C9FF").ss(1.9).p("AAAgYIAAAx");
	this.shape_20.setTransform(2.5,5.425);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#00C9FF").ss(2).p("AAAgYIAAAx");
	this.shape_21.setTransform(2.5,5.425);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#00C9FF").ss(2.1).p("AAAgYIAAAx");
	this.shape_22.setTransform(2.5,5.425);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#00C9FF").ss(2.2).p("AAAgYIAAAx");
	this.shape_23.setTransform(2.5,5.425);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#00C9FF").ss(2.3).p("AAAgYIAAAx");
	this.shape_24.setTransform(2.5,5.425);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#00C9FF").ss(2.4).p("AAAgYIAAAx");
	this.shape_25.setTransform(2.5,5.425);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#00C9FF").ss(2.5).p("AAAgYIAAAx");
	this.shape_26.setTransform(2.5,5.425);
	this.shape_26._off = true;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#00C9FF").ss(2.6).p("AAAgYIAAAx");
	this.shape_27.setTransform(2.5,5.425);
	this.shape_27._off = true;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#00C9FF").ss(2.7).p("AAAgYIAAAx");
	this.shape_28.setTransform(2.5,5.425);
	this.shape_28._off = true;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#00C9FF").ss(2.8).p("AAAgYIAAAx");
	this.shape_29.setTransform(2.5,5.425);
	this.shape_29._off = true;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#00C9FF").ss(2.9).p("AAAgYIAAAx");
	this.shape_30.setTransform(2.5,5.425);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#00C9FF").ss(3).p("AAAgYIAAAx");
	this.shape_31.setTransform(2.5,5.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#00C9FF").ss(3).p("AAAAZIAAgx");
	this.shape_32.setTransform(2.5,5.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3).to({_off:false},0).wait(5).to({_off:true},1).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(9).to({_off:false},0).wait(4).to({_off:true},1).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(14).to({_off:false},0).wait(5).to({_off:true},1).wait(140));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(20).to({_off:false},0).wait(4).to({_off:true},1).wait(135));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(25).to({_off:false},0).wait(5).to({_off:true},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(31).to({_off:false},0).wait(4).to({_off:true},1).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(36).to({_off:false},0).wait(5).to({_off:true},1).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(42).to({_off:false},0).wait(4).to({_off:true},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(47).to({_off:false},0).wait(5).to({_off:true},1).wait(107));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(53).to({_off:false},0).wait(4).to({_off:true},1).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(58).to({_off:false},0).wait(5).to({_off:true},1).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(64).to({_off:false},0).wait(4).to({_off:true},1).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(69).to({_off:false},0).wait(5).to({_off:true},1).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(75).to({_off:false},0).wait(4).to({_off:true},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(80).to({_off:false},0).wait(4).to({_off:true},1).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(85).to({_off:false},0).wait(5).to({_off:true},1).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(91).to({_off:false},0).wait(4).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(96).to({_off:false},0).wait(5).to({_off:true},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(102).to({_off:false},0).wait(4).to({_off:true},1).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(107).to({_off:false},0).wait(5).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(113).to({_off:false},0).wait(4).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(118).to({_off:false},0).wait(5).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(124).to({_off:false},0).wait(4).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(129).to({_off:false},0).wait(5).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(135).to({_off:false},0).wait(4).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(140).to({_off:false},0).wait(5).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(146).to({_off:false},0).wait(4).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(151).to({_off:false},0).wait(5).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.6,5,10);


(lib.ModraSipka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00AAFF").ss(0.1).p("ABAhlQhTBWgrB2");
	this.shape.setTransform(6.3028,10.1589);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00AAFF").ss(0.1).p("Ag+BnQArh2BThW");
	this.shape_1.setTransform(6.3028,10.1589);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00AAFF").ss(0.2).p("Ag+BnQArh2BThW");
	this.shape_2.setTransform(6.3028,10.1589);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00AAFF").ss(0.3).p("Ag+BnQArh2BThW");
	this.shape_3.setTransform(6.3028,10.1589);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00AAFF").ss(0.4).p("Ag+BnQArh2BThW");
	this.shape_4.setTransform(6.3028,10.1589);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00AAFF").ss(0.5).p("Ag+BnQArh2BThW");
	this.shape_5.setTransform(6.3028,10.1589);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00AAFF").ss(0.6).p("Ag+BnQArh2BThW");
	this.shape_6.setTransform(6.3028,10.1589);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#00AAFF").ss(0.7).p("Ag+BnQArh2BThW");
	this.shape_7.setTransform(6.3028,10.1589);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00AAFF").ss(0.8).p("Ag+BnQArh2BThW");
	this.shape_8.setTransform(6.3028,10.1589);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00AAFF").ss(0.9).p("Ag+BnQArh2BThW");
	this.shape_9.setTransform(6.3028,10.1589);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00AAFF").p("Ag+BnQArh2BThW");
	this.shape_10.setTransform(6.3028,10.1589);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00AAFF").ss(1.1).p("Ag+BnQArh2BUhW");
	this.shape_11.setTransform(6.2981,10.153);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00AAFF").ss(1.1).p("Ag+BoQArh3BUhV");
	this.shape_12.setTransform(6.2955,10.1496);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#00AAFF").ss(1.2).p("Ag+BoQArh3BUhV");
	this.shape_13.setTransform(6.2901,10.1429);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#00AAFF").ss(1.3).p("Ag+BoQArh3BUhV");
	this.shape_14.setTransform(6.2847,10.1361);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#00AAFF").ss(1.4).p("Ag+BoQArh3BUhV");
	this.shape_15.setTransform(6.2767,10.126);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#00AAFF").ss(1.5).p("Ag+BoQArh3BUhV");
	this.shape_16.setTransform(6.2687,10.1158);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#00AAFF").ss(1.6).p("Ag+BoQArh3BUhV");
	this.shape_17.setTransform(6.2606,10.1057);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#00AAFF").ss(1.7).p("Ag+BoQArh2BUhW");
	this.shape_18.setTransform(6.2553,10.0989);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#00AAFF").ss(1.7).p("Ag9BpQArh2BThW");
	this.shape_19.setTransform(6.2499,9.9635);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#00AAFF").ss(1.8).p("Ag9BpQArh2BThW");
	this.shape_20.setTransform(6.2472,9.9574);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#00AAFF").ss(1.8).p("Ag9BqQArh3BThV");
	this.shape_21.setTransform(6.2419,9.9451);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#00AAFF").ss(1.9).p("Ag9BqQArh3BThV");
	this.shape_22.setTransform(6.2392,9.9389);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#00AAFF").ss(2).p("Ag9BqQArh3BThV");
	this.shape_23.setTransform(6.2339,9.9267);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#00AAFF").ss(2.1).p("Ag9BqQArh3BThV");
	this.shape_24.setTransform(6.2258,9.9083);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#00AAFF").ss(2.1).p("Ag9BqQArh2BThW");
	this.shape_25.setTransform(6.2205,9.896);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#00AAFF").ss(2.2).p("Ag9BqQArh2BThW");
	this.shape_26.setTransform(6.2178,9.8899);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#00AAFF").ss(2.3).p("Ag9BqQArh2BThW");
	this.shape_27.setTransform(6.2124,9.8776);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#00AAFF").ss(2.4).p("Ag9BqQArh2BThW");
	this.shape_28.setTransform(6.2044,9.8592);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#00AAFF").ss(2.4).p("Ag9BrQArh3BUhV");
	this.shape_29.setTransform(6.199,9.8469);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#00AAFF").ss(2.5).p("Ag9BrQArh3BUhV");
	this.shape_30.setTransform(6.1963,9.8408);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#00AAFF").ss(2.6).p("Ag9BrQArh3BUhV");
	this.shape_31.setTransform(6.1883,9.8224);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#00AAFF").ss(2.7).p("Ag9BrQArh3BUhV");
	this.shape_32.setTransform(6.183,9.8101);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#00AAFF").ss(2.7).p("Ag9BrQArh2BUhW");
	this.shape_33.setTransform(6.1776,9.7978);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#00AAFF").ss(2.8).p("Ag9BrQArh2BUhW");
	this.shape_34.setTransform(6.1749,9.7917);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#00AAFF").ss(2.9).p("Ag9BrQArh2BUhW");
	this.shape_35.setTransform(6.1669,9.7733);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#00AAFF").ss(3).p("Ag9BrQArh2BUhW");
	this.shape_36.setTransform(6.1615,9.761);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#00AAFF").ss(3).p("Ag9BsQArh3BUhV");
	this.shape_37.setTransform(6.1562,9.7487);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#00AAFF").ss(3.1).p("Ag9BsQArh3BUhV");
	this.shape_38.setTransform(6.1535,9.7426);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#00AAFF").ss(3.1).p("Ag8BsQArh3BThV");
	this.shape_39.setTransform(6.1481,9.7303);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#00AAFF").ss(3.2).p("Ag8BsQArh3BThV");
	this.shape_40.setTransform(6.1455,9.7242);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#00AAFF").ss(3.3).p("Ag8BsQArh3BThV");
	this.shape_41.setTransform(6.1401,9.7119);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#00AAFF").ss(3.3).p("Ag8BsQArh2BThW");
	this.shape_42.setTransform(6.1347,9.6996);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#00AAFF").ss(3.4).p("Ag8BsQArh2BThW");
	this.shape_43.setTransform(6.1321,9.6935);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#00AAFF").ss(3.5).p("Ag8BsQArh2BThW");
	this.shape_44.setTransform(6.124,9.6751);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#00AAFF").ss(3.6).p("Ag8BsQArh2BThW");
	this.shape_45.setTransform(6.1187,9.6628);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#00AAFF").ss(3.7).p("Ag8BtQArh3BThV");
	this.shape_46.setTransform(6.1106,9.6444);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#00AAFF").ss(3.8).p("Ag8BtQArh3BThV");
	this.shape_47.setTransform(6.1026,9.626);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#00AAFF").ss(3.8).p("Ag8BtQArh3BUhV");
	this.shape_48.setTransform(6.0999,9.6199);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#00AAFF").ss(3.9).p("Ag8BtQArh3BUhV");
	this.shape_49.setTransform(6.0946,9.6076);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#00AAFF").ss(4).p("Ag8BtQArh2BUhW");
	this.shape_50.setTransform(6.0892,9.5953);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#00AAFF").ss(4.1).p("Ag8BtQArh2BUhW");
	this.shape_51.setTransform(6.0812,9.5769);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#00AAFF").ss(4.2).p("Ag8BtQArh2BUhW");
	this.shape_52.setTransform(6.0731,9.5585);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#00AAFF").ss(4.3).p("Ag8BuQArh3BUhV");
	this.shape_53.setTransform(6.0678,9.5463);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#00AAFF").ss(4.4).p("Ag8BuQArh3BUhV");
	this.shape_54.setTransform(6.0597,9.5278);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#00AAFF").ss(4.5).p("Ag8BuQArh3BUhV");
	this.shape_55.setTransform(6.0517,9.5094);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#00AAFF").ss(4.5).p("Ag7BuQArh3BThV");
	this.shape_56.setTransform(6.049,9.5033);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#00AAFF").ss(4.6).p("Ag7BuQArh2BThW");
	this.shape_57.setTransform(6.0463,9.4972);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#00AAFF").ss(4.7).p("Ag7BuQArh2BThW");
	this.shape_58.setTransform(6.0383,9.4788);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#00AAFF").ss(4.8).p("Ag7BuQArh2BThW");
	this.shape_59.setTransform(6.0303,9.4604);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#00AAFF").ss(4.8).p("Ag7BvQArh3BThV");
	this.shape_60.setTransform(6.0249,9.4481);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#00AAFF").ss(4.9).p("Ag7BvQArh3BThV");
	this.shape_61.setTransform(6.0222,9.4419);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#00AAFF").ss(5).p("Ag7BvQArh3BThV");
	this.shape_62.setTransform(6.0169,9.4297);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#00AAFF").ss(5.1).p("Ag7BvQArh3BThV");
	this.shape_63.setTransform(6.0088,9.4113);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#00AAFF").ss(5.1).p("Ag7BvQArh2BThW");
	this.shape_64.setTransform(6.0035,9.399);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#00AAFF").ss(5.2).p("Ag7BvQArh2BThW");
	this.shape_65.setTransform(6.0008,9.3929);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#00AAFF").ss(5.2).p("Ag7BvQArh2BUhW");
	this.shape_66.setTransform(5.9981,9.3867);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#00AAFF").ss(5.3).p("Ag7BvQArh2BUhW");
	this.shape_67.setTransform(5.9955,9.3806);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#00AAFF").ss(5.4).p("Ag7BvQArh2BUhW");
	this.shape_68.setTransform(5.9874,9.3622);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#00AAFF").ss(5.4).p("Ag7BwQArh3BUhV");
	this.shape_69.setTransform(5.9821,9.3499);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#00AAFF").ss(5.5).p("Ag7BwQArh3BUhV");
	this.shape_70.setTransform(5.9794,9.3438);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#00AAFF").ss(5.6).p("Ag7BwQArh3BUhV");
	this.shape_71.setTransform(5.974,9.3315);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#00AAFF").ss(5.7).p("Ag7BwQArh3BUhV");
	this.shape_72.setTransform(5.966,9.3131);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#00AAFF").ss(5.8).p("Ag7BwQArh2BUhW");
	this.shape_73.setTransform(5.958,9.2947);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#00AAFF").ss(5.9).p("Ag7BwQArh2BUhW");
	this.shape_74.setTransform(5.9526,9.2824);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#00AAFF").ss(5.9).p("Ag6BwQArh2BThW");
	this.shape_75.setTransform(5.9499,9.2763);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#00AAFF").ss(6).p("Ag6BwQArh2BThW");
	this.shape_76.setTransform(5.9446,9.264);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#00AAFF").ss(6).p("ABEhcQhTBWgrB2");
	this.shape_77.setTransform(5.9419,9.2579);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10,p:{x:6.3028,y:10.1589}}]},1).to({state:[{t:this.shape_10,p:{x:6.3028,y:10.1589}}]},1).to({state:[{t:this.shape_10,p:{x:6.3008,y:10.1564}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12,p:{x:6.2955,y:10.1496}}]},1).to({state:[{t:this.shape_12,p:{x:6.2928,y:10.1463}}]},1).to({state:[{t:this.shape_13,p:{x:6.2901,y:10.1429}}]},1).to({state:[{t:this.shape_13,p:{x:6.2874,y:10.1395}}]},1).to({state:[{t:this.shape_14,p:{x:6.2847,y:10.1361}}]},1).to({state:[{t:this.shape_14,p:{x:6.2821,y:10.1327}}]},1).to({state:[{t:this.shape_14,p:{x:6.2794,y:10.1294}}]},1).to({state:[{t:this.shape_15,p:{x:6.2767,y:10.126}}]},1).to({state:[{t:this.shape_15,p:{x:6.274,y:10.1226}}]},1).to({state:[{t:this.shape_15,p:{x:6.2714,y:10.1192}}]},1).to({state:[{t:this.shape_16,p:{x:6.2687,y:10.1158}}]},1).to({state:[{t:this.shape_16,p:{x:6.266,y:10.1125}}]},1).to({state:[{t:this.shape_16,p:{x:6.2633,y:10.1091}}]},1).to({state:[{t:this.shape_17,p:{x:6.2606,y:10.1057}}]},1).to({state:[{t:this.shape_17,p:{x:6.258,y:10.1023}}]},1).to({state:[{t:this.shape_18,p:{x:6.2553,y:10.0989}}]},1).to({state:[{t:this.shape_18,p:{x:6.2526,y:10.0956}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20,p:{x:6.2472,y:9.9574}}]},1).to({state:[{t:this.shape_20,p:{x:6.2446,y:9.9512}}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22,p:{x:6.2392,y:9.9389}}]},1).to({state:[{t:this.shape_22,p:{x:6.2365,y:9.9328}}]},1).to({state:[{t:this.shape_23,p:{x:6.2339,y:9.9267}}]},1).to({state:[{t:this.shape_23,p:{x:6.2312,y:9.9205}}]},1).to({state:[{t:this.shape_23,p:{x:6.2285,y:9.9144}}]},1).to({state:[{t:this.shape_24,p:{x:6.2258,y:9.9083}}]},1).to({state:[{t:this.shape_24,p:{x:6.2231,y:9.9021}}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26,p:{x:6.2178,y:9.8899}}]},1).to({state:[{t:this.shape_26,p:{x:6.2151,y:9.8837}}]},1).to({state:[{t:this.shape_27,p:{x:6.2124,y:9.8776}}]},1).to({state:[{t:this.shape_27,p:{x:6.2097,y:9.8715}}]},1).to({state:[{t:this.shape_27,p:{x:6.2071,y:9.8653}}]},1).to({state:[{t:this.shape_28,p:{x:6.2044,y:9.8592}}]},1).to({state:[{t:this.shape_28,p:{x:6.2017,y:9.853}}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30,p:{x:6.1963,y:9.8408}}]},1).to({state:[{t:this.shape_30,p:{x:6.1937,y:9.8346}}]},1).to({state:[{t:this.shape_30,p:{x:6.191,y:9.8285}}]},1).to({state:[{t:this.shape_31,p:{x:6.1883,y:9.8224}}]},1).to({state:[{t:this.shape_31,p:{x:6.1856,y:9.8162}}]},1).to({state:[{t:this.shape_32,p:{x:6.183,y:9.8101}}]},1).to({state:[{t:this.shape_32,p:{x:6.1803,y:9.804}}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34,p:{x:6.1749,y:9.7917}}]},1).to({state:[{t:this.shape_34,p:{x:6.1722,y:9.7856}}]},1).to({state:[{t:this.shape_34,p:{x:6.1696,y:9.7794}}]},1).to({state:[{t:this.shape_35,p:{x:6.1669,y:9.7733}}]},1).to({state:[{t:this.shape_35,p:{x:6.1642,y:9.7671}}]},1).to({state:[{t:this.shape_36,p:{x:6.1615,y:9.761}}]},1).to({state:[{t:this.shape_36,p:{x:6.1588,y:9.7549}}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38,p:{x:6.1535,y:9.7426}}]},1).to({state:[{t:this.shape_38,p:{x:6.1508,y:9.7365}}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40,p:{x:6.1455,y:9.7242}}]},1).to({state:[{t:this.shape_40,p:{x:6.1428,y:9.7181}}]},1).to({state:[{t:this.shape_41,p:{x:6.1401,y:9.7119}}]},1).to({state:[{t:this.shape_41,p:{x:6.1374,y:9.7058}}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43,p:{x:6.1321,y:9.6935}}]},1).to({state:[{t:this.shape_43,p:{x:6.1294,y:9.6874}}]},1).to({state:[{t:this.shape_43,p:{x:6.1267,y:9.6812}}]},1).to({state:[{t:this.shape_44,p:{x:6.124,y:9.6751}}]},1).to({state:[{t:this.shape_44,p:{x:6.1213,y:9.669}}]},1).to({state:[{t:this.shape_45,p:{x:6.1187,y:9.6628}}]},1).to({state:[{t:this.shape_45,p:{x:6.116,y:9.6567}}]},1).to({state:[{t:this.shape_45,p:{x:6.1133,y:9.6506}}]},1).to({state:[{t:this.shape_46,p:{x:6.1106,y:9.6444}}]},1).to({state:[{t:this.shape_46,p:{x:6.108,y:9.6383}}]},1).to({state:[{t:this.shape_46,p:{x:6.1053,y:9.6322}}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48,p:{x:6.0999,y:9.6199}}]},1).to({state:[{t:this.shape_48,p:{x:6.0972,y:9.6137}}]},1).to({state:[{t:this.shape_49,p:{x:6.0946,y:9.6076}}]},1).to({state:[{t:this.shape_49,p:{x:6.0919,y:9.6015}}]},1).to({state:[{t:this.shape_50,p:{x:6.0892,y:9.5953}}]},1).to({state:[{t:this.shape_50,p:{x:6.0865,y:9.5892}}]},1).to({state:[{t:this.shape_50,p:{x:6.0838,y:9.5831}}]},1).to({state:[{t:this.shape_51,p:{x:6.0812,y:9.5769}}]},1).to({state:[{t:this.shape_51,p:{x:6.0785,y:9.5708}}]},1).to({state:[{t:this.shape_51,p:{x:6.0758,y:9.5647}}]},1).to({state:[{t:this.shape_52,p:{x:6.0731,y:9.5585}}]},1).to({state:[{t:this.shape_52,p:{x:6.0705,y:9.5524}}]},1).to({state:[{t:this.shape_53,p:{x:6.0678,y:9.5463}}]},1).to({state:[{t:this.shape_53,p:{x:6.0651,y:9.5401}}]},1).to({state:[{t:this.shape_53,p:{x:6.0624,y:9.534}}]},1).to({state:[{t:this.shape_54,p:{x:6.0597,y:9.5278}}]},1).to({state:[{t:this.shape_54,p:{x:6.0571,y:9.5217}}]},1).to({state:[{t:this.shape_54,p:{x:6.0544,y:9.5156}}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57,p:{x:6.0463,y:9.4972}}]},1).to({state:[{t:this.shape_57,p:{x:6.0437,y:9.491}}]},1).to({state:[{t:this.shape_57,p:{x:6.041,y:9.4849}}]},1).to({state:[{t:this.shape_58,p:{x:6.0383,y:9.4788}}]},1).to({state:[{t:this.shape_58,p:{x:6.0356,y:9.4726}}]},1).to({state:[{t:this.shape_58,p:{x:6.033,y:9.4665}}]},1).to({state:[{t:this.shape_59,p:{x:6.0303,y:9.4604}}]},1).to({state:[{t:this.shape_59,p:{x:6.0276,y:9.4542}}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61,p:{x:6.0222,y:9.4419}}]},1).to({state:[{t:this.shape_61,p:{x:6.0196,y:9.4358}}]},1).to({state:[{t:this.shape_62,p:{x:6.0169,y:9.4297}}]},1).to({state:[{t:this.shape_62,p:{x:6.0142,y:9.4235}}]},1).to({state:[{t:this.shape_62,p:{x:6.0115,y:9.4174}}]},1).to({state:[{t:this.shape_63,p:{x:6.0088,y:9.4113}}]},1).to({state:[{t:this.shape_63,p:{x:6.0062,y:9.4051}}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67,p:{x:5.9955,y:9.3806}}]},1).to({state:[{t:this.shape_67,p:{x:5.9928,y:9.3745}}]},1).to({state:[{t:this.shape_67,p:{x:5.9901,y:9.3683}}]},1).to({state:[{t:this.shape_68,p:{x:5.9874,y:9.3622}}]},1).to({state:[{t:this.shape_68,p:{x:5.9847,y:9.356}}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70,p:{x:5.9794,y:9.3438}}]},1).to({state:[{t:this.shape_70,p:{x:5.9767,y:9.3376}}]},1).to({state:[{t:this.shape_71,p:{x:5.974,y:9.3315}}]},1).to({state:[{t:this.shape_71,p:{x:5.9713,y:9.3254}}]},1).to({state:[{t:this.shape_71,p:{x:5.9687,y:9.3192}}]},1).to({state:[{t:this.shape_72,p:{x:5.966,y:9.3131}}]},1).to({state:[{t:this.shape_72,p:{x:5.9633,y:9.307}}]},1).to({state:[{t:this.shape_72,p:{x:5.9606,y:9.3008}}]},1).to({state:[{t:this.shape_73,p:{x:5.958,y:9.2947}}]},1).to({state:[{t:this.shape_73,p:{x:5.9553,y:9.2885}}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75,p:{x:5.9499,y:9.2763}}]},1).to({state:[{t:this.shape_75,p:{x:5.9472,y:9.2701}}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,18.8,26.5);


(lib.Path_4_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#420E04").s().p("AgOB7QhPgJgzgrQg0gqAGgzQAGgzA8gdQA9geBNAJQBPAKA0AqQA0ArgGAyQgGA0g8AdQguAXg4AAQgTAAgSgDg");
	this.shape_1.setTransform(19.125,12.5515);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1_1, new cjs.Rectangle(0,0,38.3,25.2), null);


(lib.kanalZlutyStranaVpravo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(1.5).p("AhxjXQABAlAPBAQAQBIACAUQAMBmgiBjQgPArgCAQQgGAiANAXQARAeAvALQAnAIAmgHQAtgJAWgnQAWgmgKgvQgCgJgJgcQgHgYgBgOQgBgSAJgYQALgZAEgOQANgqgHgxQgFgegJgYQgEgKgIgPQgKgSgDgHQgKgXADg6QADg2gPgZQgTghg6AAQg7ABgUAiQgUAiACA4g");
	this.shape.setTransform(12.1425,34.0504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgvFQQgvgLgRgeQgNgXAGgiQACgQAPgrQAihjgMhmQgCgTgQhJQgPhAgBglQgCg4AUgiQAUgiA7gBQA6AAATAhQAPAZgDA2QgDA6AKAXIANAZQAIAPAEAKQAJAYAFAeQAHAxgNAqQgEAOgLAZQgJAYABASQABAOAHAYQAJAcACAJQAKAvgWAmQgWAngtAJQgTAEgRAAQgVAAgUgFg");
	this.shape_1.setTransform(12.1425,34.0504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kanalZlutyStranaVpravo, new cjs.Rectangle(-1.1,-3.8,27.3,74), null);


(lib.kanalZlutyStranaVlevo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(1.5).p("AB6jWQgCAjgNA6QgPBFgDAYQgPBrAoB1QAKAfADALQAFAYgGATQgIAbgeAQQgWAMgjAEQg7AEgigZQgcgVgJgmQgJgkALgkQAHgUADgKQAGgRAAgNQgBgSgLgXQgPgagGgNQgXgwAOg1QAHgaAOgYQAEgGAKgPQAKgNAFgIQAMgZgDgtQgDg0AGgTQAJghAigNQAdgLAkAGQAcAGAPANQAaAVAEAuQADASgBATg");
	this.shape.setTransform(12.9292,34.0414);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("Ag+E/QgcgVgJgmQgJgkALgkIAKgeQAGgRAAgNQgBgSgLgXQgPgagGgNQgXgwAOg1QAHgaAOgYIAOgVIAPgVQAMgZgDgtQgDg0AGgTQAJghAigNQAdgLAkAGQAcAGAPANQAaAVAEAuQADASgBATQgCAjgNA6QgPBFgDAYQgPBrAoB1QAKAfADALQAFAYgGATQgIAbgeAQQgWAMgjAEIgSAAQguAAgdgVg");
	this.shape_1.setTransform(12.9292,34.0414);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kanalZlutyStranaVlevo, new cjs.Rectangle(-1,-1,29.4,72), null);


(lib.kanalModryStranaVpravo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003C8B").ss(1.5).p("AhxjXQABAlAPBAQAQBIACAUQAMBmgiBjQgPArgCAQQgGAiANAXQARAeAvALQAnAIAmgHQAtgJAWgnQAWgmgKgvQgCgJgJgcQgHgYgBgOQgBgSAJgYQALgZAEgOQANgqgHgxQgFgegJgYQgEgKgIgPQgKgSgDgHQgKgXADg6QADg2gPgZQgTghg6AAQg7ABgUAiQgUAiACA4g");
	this.shape.setTransform(12.1425,34.0504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#488CF0").s().p("AgvFQQgvgLgRgeQgNgXAGgiQACgQAPgrQAihjgMhmQgCgTgQhJQgPhAgBglQgCg4AUgiQAUgiA7gBQA6AAATAhQAPAZgDA2QgDA6AKAXIANAZQAIAPAEAKQAJAYAFAeQAHAxgNAqQgEAOgLAZQgJAYABASQABAOAHAYQAJAcACAJQAKAvgWAmQgWAngtAJQgTAEgRAAQgVAAgUgFg");
	this.shape_1.setTransform(12.1425,34.0504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kanalModryStranaVpravo, new cjs.Rectangle(-1.1,-3.8,27.3,74), null);


(lib.kanalModryStranaVlevo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003C8B").ss(1.5).p("AB6jWQgCAjgNA6QgPBFgDAYQgPBrAoB1QAKAfADALQAFAYgGATQgIAbgeAQQgWAMgjAEQg7AEgigZQgcgVgJgmQgJgkALgkQAHgUADgKQAGgRAAgNQgBgSgLgXQgPgagGgNQgXgwAOg1QAHgaAOgYQAEgGAKgPQAKgNAFgIQAMgZgDgtQgDg0AGgTQAJghAigNQAdgLAkAGQAcAGAPANQAaAVAEAuQADASgBATg");
	this.shape.setTransform(12.9292,34.0414);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#488CF0").s().p("Ag+E/QgcgVgJgmQgJgkALgkIAKgeQAGgRAAgNQgBgSgLgXQgPgagGgNQgXgwAOg1QAHgaAOgYIAOgVIAPgVQAMgZgDgtQgDg0AGgTQAJghAigNQAdgLAkAGQAcAGAPANQAaAVAEAuQADASgBATQgCAjgNA6QgPBFgDAYQgPBrAoB1QAKAfADALQAFAYgGATQgIAbgeAQQgWAMgjAEIgSAAQguAAgdgVg");
	this.shape_1.setTransform(12.9292,34.0414);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kanalModryStranaVlevo, new cjs.Rectangle(-1,-1,29.4,72), null);


(lib.kanalFialovyStranaVpravo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990099").ss(1.5).p("AhxjXQABAlAPBAQAQBIACAUQAMBmgiBjQgPArgCAQQgGAiANAXQARAeAvALQAnAIAmgHQAtgJAWgnQAWgmgKgvQgCgJgJgcQgHgYgBgOQgBgSAJgYQALgZAEgOQANgqgHgxQgFgegJgYQgEgKgIgPQgKgSgDgHQgKgXADg6QADg2gPgZQgTghg6AAQg7ABgUAiQgUAiACA4g");
	this.shape.setTransform(12.1425,34.0504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC00FF").s().p("AgvFQQgvgLgRgeQgNgXAGgiQACgQAPgrQAihjgMhmQgCgUgQhIQgPhAgBglQgCg4AUgiQAUgiA7gBQA6AAATAhQAPAZgDA2QgDA6AKAXIANAZQAIAPAEAKQAJAYAFAeQAHAxgNAqQgEAOgLAZQgJAYABASQABAOAHAYQAJAcACAJQAKAvgWAmQgWAngtAJQgTAEgRAAQgVAAgUgFg");
	this.shape_1.setTransform(12.1425,34.0504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kanalFialovyStranaVpravo, new cjs.Rectangle(-1.1,-3.8,27.3,74), null);


(lib.kanalFialovyStranaVlevo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990066").ss(1.5).p("AB6jWQgCAjgNA6QgPBFgDAYQgPBrAoB1QAKAfADALQAFAYgGATQgIAbgeAQQgWAMgjAEQg7AEgigZQgcgVgJgmQgJgkALgkQAHgUADgKQAGgRAAgNQgBgSgLgXQgPgagGgNQgXgwAOg1QAHgaAOgYQAEgGAKgPQAKgNAFgIQAMgZgDgtQgDg0AGgTQAJghAigNQAdgLAkAGQAcAGAPANQAaAVAEAuQADASgBATg");
	this.shape.setTransform(12.9292,34.0414);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC00FF").s().p("Ag+E/QgcgVgJgmQgJgkALgkIAKgeQAGgRAAgNQgBgSgLgXQgPgagGgNQgXgwAOg1QAHgaAOgYIAOgVIAPgVQAMgZgDgtQgDg0AGgTQAJghAigNQAdgLAkAGQAcAGAPANQAaAVAEAuQADASgBATQgCAjgNA6QgPBFgDAYQgPBrAoB1QAKAfADALQAFAYgGATQgIAbgeAQQgWAMgjAEIgSAAQguAAgdgVg");
	this.shape_1.setTransform(12.9292,34.0414);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kanalFialovyStranaVlevo, new cjs.Rectangle(-1,-1,29.4,72), null);


(lib.kanalCervenyStranaVpravo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(1.5).p("AhxjXQABAlAPBAQAQBIACAUQAMBmgiBjQgPArgCAQQgGAiANAXQARAeAvALQAnAIAmgHQAtgJAWgnQAWgmgKgvQgCgJgJgcQgHgYgBgOQgBgSAJgYQALgZAEgOQANgqgHgxQgFgegJgYQgEgKgIgPQgKgSgDgHQgKgXADg6QADg2gPgZQgTghg6AAQg7ABgUAiQgUAiACA4g");
	this.shape.setTransform(12.1425,34.0504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgvFQQgvgLgRgeQgNgXAGgiQACgQAPgrQAihjgMhmQgCgUgQhIQgPhAgBglQgCg4AUgiQAUgiA7gBQA6AAATAhQAPAZgDA2QgDA6AKAXIANAZQAIAPAEAKQAJAYAFAeQAHAxgNAqQgEAOgLAZQgJAYABASQABAOAHAYQAJAcACAJQAKAvgWAmQgWAngtAJQgTAEgRAAQgVAAgUgFg");
	this.shape_1.setTransform(12.1425,34.0504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kanalCervenyStranaVpravo, new cjs.Rectangle(-1.1,-3.8,27.3,74), null);


(lib.Jadro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmqNHIAA6NINVAAIAAaNg");
	mask.setTransform(127.05,74.975);

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D4D2D2").ss(1.3).p("AHZn5QgIAAgFgDQhlg+h1ggQh1ggh9AAIgBAAQgKAAgHgHQgIgHAAgLQAAgKAIgHQAHgIAKAAIABAAQCEAAB8AiQB8AiBqBBQAJAFACALQADAKgGAIQgHAMgOAAgAMWgzQgJAAgHgGQgHgGgBgJQgQhyhAhmQhAhmhnhOQgIgGgBgKQgCgKAGgJQAHgIAKgCQAKgBAJAGQBvBUBEBvQBFBuARB8QACAKgGAJQgHAIgKABgAJSHRQgLAAgIgIQgHgIABgKQAAgLAIgHQBehXAyhsQAyhtAAh1IAAgCQAAgKAHgHQAHgIALAAQAKAAAIAIQAHAHAAAKIAAACQAAB/g2B3Qg3B2hlBeQgHAHgKAAgABLKqQgKAAgHgGQgHgHgBgKQAAgKAGgIQAHgIAKgBQB+gJBygqQBygqBehHQAIgHALACQAKABAGAJQAHAIgCAKQgBAKgIAHQhkBLh5AtQh5AsiFAKgAoZnMQgMAAgHgKQgHgIACgLQABgKAIgGQBkhMB4gtQB5gsCFgLQALAAAIAGQAIAHAAAKQABALgGAIQgHAIgLAAQh+AKhyAqQhyAqhdBHQgHAGgJAAgAs0ABQAAh+A2h2QA2h3BlheQAIgHAKABQALAAAHAIQAHAHAAAKQgBALgIAHQhdBXgyBtQgyBsAABzQAAALgHAHQgIAIgKAAQgKAAgHgHQgIgHAAgLgAoXICQgHAAgIgFQhvhUhEhvQhEhvgSh8QgBgKAGgIQAHgJAKgBQAKgBAIAGQAJAGABALQAQBxA/BnQA/BmBoBOQAIAGABAKQACALgHAIQgHAKgNAAgAABKtIgBAAQiEAAh8giQh8gihqhBQgJgFgCgLQgCgKAFgJQAFgIAKgDQAKgCAJAFQBlA+B1AgQB1AgB9AAIABAAQALAAAHAIQAHAHAAAKQAAALgHAHQgIAHgKAAg");
	this.shape.setTransform(77.575,68.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9D9D9").s().p("AAAKtQiEAAh8giQh8gihqhBQgJgGgCgKQgCgKAFgJQAFgJAKgCQAKgCAJAFQBlA+B1AgQB1AgB9AAIABAAQALAAAHAHQAHAHAAALQAAALgHAHQgIAHgKAAgABLKqQgKAAgHgGQgHgIgBgJQAAgKAGgIQAHgIAKgBQB+gJBygrQBygpBehHQAIgHALABQAKACAGAIQAHAJgCAKQgBAKgIAGQhkBMh5AsQh5AtiFAKgAomH8QhvhThEhwQhEhugSh8QgBgKAGgJQAHgIAKgBQAKgBAIAGQAJAGABALQAQBxA/BnQA/BlBoBPQAIAFABALQACALgHAIQgHAJgNABQgHgBgIgFgAI/HIQgHgHABgLQAAgKAIgHQBehXAyhsQAyhtAAh1IAAgCQAAgKAHgHQAHgIALABQAKgBAIAIQAHAHAAAKIAAACQAAB/g2B3Qg3B2hlBeQgHAGgKAAQgLABgIgJgAssATQgIgIAAgJIAAgBQAAh+A2h3QA2h2BlheQAIgHAKAAQALAAAHAJQAHAHAAAKQgBAKgIAIQhdBXgyBtQgyBsAABzQAAALgHAHQgIAIgKgBQgKAAgHgGgAMWgzQgJAAgHgGQgHgGgBgKQgQhxhAhmQhAhnhnhNQgIgGgBgKQgCgKAGgJQAHgJAKgBQAKgCAJAHQBvBTBEBwQBFBuARB8QACAKgGAJQgHAHgKACgAosnXQgHgIACgKQABgKAIgHQBkhLB4gtQB5gsCFgLQALAAAIAGQAIAGAAALQABALgGAHQgHAJgLAAQh+AKhyAqQhyAqhdBHQgHAGgJgBQgMAAgHgKgAHMn8Qhlg+h1ggQh1ggh9AAIgBAAQgKAAgHgHQgIgHAAgLQAAgKAIgIQAHgHAKAAIABAAQCEAAB8AiQB8AhBqBBQAJAGACAKQADALgGAIQgHAMgOAAQgIAAgFgDg");
	this.shape_1.setTransform(77.575,68.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(0.9).p("AL/AAQAACBg8B1Qg6ByhqBXQjhC5k+AAQk9AAjgi5QhrhXg6hyQg8h1AAiBQAAh/A8h2QA6hxBrhYQDgi5E9AAQE+AADhC5QBqBYA6BxQA8B2AAB/g");
	this.shape_2.setTransform(77.525,68.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ECECEC").s().p("AodG/QhrhYg6hxQg8h1AAiBQAAiAA8h1QA6hyBrhXQDgi5E9AAQE+AADhC5QBqBXA6ByQA8B1AACAQAACBg8B1Qg6BxhqBYQjhC5k+AAQk9AAjgi5g");
	this.shape_3.setTransform(77.525,68.05);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(84.4,-1,76.29999999999998,139);


(lib.HSipka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFAA00").ss(0.1).p("AAAkwIAAJh");
	this.shape.setTransform(0,30.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFAA00").ss(0.1).p("AAAExIAAph");
	this.shape_1.setTransform(0,30.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFAA00").ss(0.2).p("AAAExIAAph");
	this.shape_2.setTransform(0,30.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFAA00").ss(0.3).p("AAAExIAAph");
	this.shape_3.setTransform(0,30.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFAA00").ss(0.4).p("AAAExIAAph");
	this.shape_4.setTransform(0,30.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFAA00").ss(0.5).p("AAAExIAAph");
	this.shape_5.setTransform(0,30.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFAA00").ss(0.6).p("AAAExIAAph");
	this.shape_6.setTransform(0,30.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFAA00").ss(0.7).p("AAAExIAAph");
	this.shape_7.setTransform(0,30.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFAA00").ss(0.8).p("AAAExIAAph");
	this.shape_8.setTransform(0,30.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFAA00").ss(0.9).p("AAAExIAAph");
	this.shape_9.setTransform(0,30.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFAA00").p("AAAExIAAph");
	this.shape_10.setTransform(0,30.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFAA00").ss(1.1).p("AAAExIAAph");
	this.shape_11.setTransform(0,30.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFAA00").ss(1.2).p("AAAExIAAph");
	this.shape_12.setTransform(0,30.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFAA00").ss(1.3).p("AAAExIAAph");
	this.shape_13.setTransform(0,30.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFAA00").ss(1.4).p("AAAExIAAph");
	this.shape_14.setTransform(0,30.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFAA00").ss(1.5).p("AAAExIAAph");
	this.shape_15.setTransform(0,30.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFAA00").ss(1.6).p("AAAExIAAph");
	this.shape_16.setTransform(0,30.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFAA00").ss(1.7).p("AAAExIAAph");
	this.shape_17.setTransform(0,30.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFAA00").ss(1.8).p("AAAExIAAph");
	this.shape_18.setTransform(0,30.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFAA00").ss(1.9).p("AAAExIAAph");
	this.shape_19.setTransform(0,30.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFAA00").ss(2).p("AAAExIAAph");
	this.shape_20.setTransform(0,30.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFAA00").ss(2.1).p("AAAExIAAph");
	this.shape_21.setTransform(0,30.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFAA00").ss(2.2).p("AAAExIAAph");
	this.shape_22.setTransform(0,30.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFAA00").ss(2.3).p("AAAExIAAph");
	this.shape_23.setTransform(0,30.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFAA00").ss(2.4).p("AAAExIAAph");
	this.shape_24.setTransform(0,30.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFAA00").ss(2.5).p("AAAExIAAph");
	this.shape_25.setTransform(0,30.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFAA00").ss(2.6).p("AAAExIAAph");
	this.shape_26.setTransform(0,30.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFAA00").ss(2.7).p("AAAExIAAph");
	this.shape_27.setTransform(0,30.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFAA00").ss(2.8).p("AAAExIAAph");
	this.shape_28.setTransform(0,30.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFAA00").ss(2.9).p("AAAExIAAph");
	this.shape_29.setTransform(0,30.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFAA00").ss(3).p("AAAExIAAph");
	this.shape_30.setTransform(0,30.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFAA00").ss(3.1).p("AAAExIAAph");
	this.shape_31.setTransform(0,30.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFAA00").ss(3.2).p("AAAExIAAph");
	this.shape_32.setTransform(0,30.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFAA00").ss(3.3).p("AAAExIAAph");
	this.shape_33.setTransform(0,30.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFAA00").ss(3.4).p("AAAExIAAph");
	this.shape_34.setTransform(0,30.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFAA00").ss(3.5).p("AAAExIAAph");
	this.shape_35.setTransform(0,30.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFAA00").ss(3.6).p("AAAExIAAph");
	this.shape_36.setTransform(0,30.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFAA00").ss(3.7).p("AAAExIAAph");
	this.shape_37.setTransform(0,30.525);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFAA00").ss(3.8).p("AAAExIAAph");
	this.shape_38.setTransform(0,30.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFAA00").ss(3.9).p("AAAExIAAph");
	this.shape_39.setTransform(0,30.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFAA00").ss(4).p("AAAExIAAph");
	this.shape_40.setTransform(0,30.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFAA00").ss(4.1).p("AAAExIAAph");
	this.shape_41.setTransform(0,30.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFAA00").ss(4.2).p("AAAExIAAph");
	this.shape_42.setTransform(0,30.525);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFAA00").ss(4.3).p("AAAExIAAph");
	this.shape_43.setTransform(0,30.525);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFAA00").ss(4.4).p("AAAExIAAph");
	this.shape_44.setTransform(0,30.525);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFAA00").ss(4.5).p("AAAExIAAph");
	this.shape_45.setTransform(0,30.525);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFAA00").ss(4.6).p("AAAExIAAph");
	this.shape_46.setTransform(0,30.525);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFAA00").ss(4.7).p("AAAExIAAph");
	this.shape_47.setTransform(0,30.525);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFAA00").ss(4.8).p("AAAExIAAph");
	this.shape_48.setTransform(0,30.525);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFAA00").ss(4.9).p("AAAExIAAph");
	this.shape_49.setTransform(0,30.525);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFAA00").ss(5).p("AAAExIAAph");
	this.shape_50.setTransform(0,30.525);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFAA00").ss(5.1).p("AAAExIAAph");
	this.shape_51.setTransform(0,30.525);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFAA00").ss(5.2).p("AAAExIAAph");
	this.shape_52.setTransform(0,30.525);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFAA00").ss(5.3).p("AAAExIAAph");
	this.shape_53.setTransform(0,30.525);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFAA00").ss(5.4).p("AAAExIAAph");
	this.shape_54.setTransform(0,30.525);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFAA00").ss(5.5).p("AAAExIAAph");
	this.shape_55.setTransform(0,30.525);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFAA00").ss(5.6).p("AAAExIAAph");
	this.shape_56.setTransform(0,30.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFAA00").ss(5.7).p("AAAExIAAph");
	this.shape_57.setTransform(0,30.525);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFAA00").ss(5.8).p("AAAExIAAph");
	this.shape_58.setTransform(0,30.525);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFAA00").ss(5.9).p("AAAExIAAph");
	this.shape_59.setTransform(0,30.525);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFAA00").ss(6).p("AAAExIAAph");
	this.shape_60.setTransform(0,30.525);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFAA00").ss(6).p("AAAkwIAAJh");
	this.shape_61.setTransform(0,30.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,6,67.1);


(lib.HepSpodni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.2,-10.5,-0.2).ss(0.1).p("AheBYQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape.setTransform(9.525,8.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.2,-10.5,-0.2).ss(0.2).p("AheBYQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_1.setTransform(9.525,8.325);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.2,-10.5,-0.2).ss(0.3).p("AheBYQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_2.setTransform(9.525,8.325);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.2,-10.5,-0.2).ss(0.4).p("AheBYQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_3.setTransform(9.525,8.325);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.2,-10.5,-0.2).ss(0.5).p("AheBYQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_4.setTransform(9.525,8.325);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.2,-10.5,-0.2).ss(0.6).p("AheBYQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_5.setTransform(9.525,8.325);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.2,-10.5,-0.2).ss(0.7).p("AheBYQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_6.setTransform(9.525,8.325);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.2,-10.5,-0.2).ss(0.8).p("AheBYQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_7.setTransform(9.525,8.325);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.2,-10.5,-0.2).ss(0.9).p("AheBYQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_8.setTransform(9.525,8.325);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.2,-10.5,-0.2).p("AheBYQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_9.setTransform(9.525,8.325);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.2,-10.5,-0.2).ss(1.1).p("AheBYQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_10.setTransform(9.525,8.3108);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.1,-10.5,-0.1).ss(1.1).p("AheBZQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_11.setTransform(9.525,8.2986);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.1,-10.5,-0.1).ss(1.2).p("AheBZQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_12.setTransform(9.525,8.2863);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.1,-10.5,-0.1).ss(1.3).p("AheBZQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_13.setTransform(9.525,8.2618);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.1,-10.5,-0.1).ss(1.3).p("AheBZQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_14.setTransform(9.525,8.2495);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.1,-10.5,-0.1).ss(1.4).p("AheBZQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_15.setTransform(9.525,8.2373);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,-0.1,-10.5,-0.1).ss(1.5).p("AheBZQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_16.setTransform(9.525,8.2066);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0,-10.5,0).ss(1.5).p("AheBaQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_17.setTransform(9.525,8.1943);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0,-10.5,0).ss(1.6).p("AheBaQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_18.setTransform(9.525,8.1821);
	this.shape_18._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0,-10.5,0).ss(1.7).p("AheBaQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_19.setTransform(9.525,8.1575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0,-10.5,0).ss(1.7).p("AheBaQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_20.setTransform(9.525,8.1453);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0,-10.5,0).ss(1.8).p("AheBaQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_21.setTransform(9.525,8.133);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0,-10.5,0).ss(1.9).p("AheBaQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_22.setTransform(9.525,8.1085);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0,-10.5,0).ss(1.9).p("AheBbQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_23.setTransform(9.525,8.0962);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0,-10.5,0).ss(2).p("AheBbQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_24.setTransform(9.525,8.084);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0,-10.5,0).ss(2.1).p("AheBbQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_25.setTransform(9.525,8.0594);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.1,-10.5,0.1).ss(2.1).p("AheBbQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_26.setTransform(9.525,8.0472);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.1,-10.5,0.1).ss(2.2).p("AheBbQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_27.setTransform(9.525,8.0349);
	this.shape_27._off = true;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.1,-10.5,0.1).ss(2.3).p("AheBbQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_28.setTransform(9.525,8.0104);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.1,-10.5,0.1).ss(2.3).p("AheBcQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_29.setTransform(9.525,7.9981);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.1,-10.5,0.1).ss(2.4).p("AheBcQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_30.setTransform(9.525,7.9858);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.1,-10.5,0.1).ss(2.5).p("AheBcQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_31.setTransform(9.525,7.9613);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.2,-10.5,0.2).ss(2.5).p("AheBcQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_32.setTransform(9.525,7.9491);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.2,-10.5,0.2).ss(2.6).p("AheBcQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_33.setTransform(9.525,7.9368);
	this.shape_33._off = true;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.2,-10.5,0.2).ss(2.7).p("AheBcQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_34.setTransform(9.525,7.9123);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.2,-10.5,0.2).ss(2.7).p("AheBdQAAhIAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA4");
	this.shape_35.setTransform(9.525,7.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.2,-10.5,0.2).ss(2.7).p("AheBdQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_36.setTransform(9.525,7.8939);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.2,-10.5,0.2).ss(2.8).p("AheBdQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_37.setTransform(9.525,7.8816);
	this.shape_37._off = true;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.2,-10.5,0.2).ss(2.9).p("AheBdQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_38.setTransform(9.525,7.8571);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.3,-10.5,0.3).ss(2.9).p("AheBdQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_39.setTransform(9.525,7.8448);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.3,-10.5,0.3).ss(3).p("AheBdQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_40.setTransform(9.525,7.8325);
	this.shape_40._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.3,-10.5,0.3).ss(3.1).p("AheBdQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_41.setTransform(9.525,7.808);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.3,-10.5,0.3).ss(3.1).p("AheBeQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_42.setTransform(9.525,7.7958);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.3,-10.5,0.3).ss(3.2).p("AheBeQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_43.setTransform(9.525,7.7835);
	this.shape_43._off = true;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.3,-10.5,0.3).ss(3.3).p("AheBeQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_44.setTransform(9.525,7.759);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.4,-10.5,0.4).ss(3.3).p("AheBeQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_45.setTransform(9.525,7.7467);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.4,-10.5,0.4).ss(3.4).p("AheBeQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_46.setTransform(9.525,7.7344);
	this.shape_46._off = true;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.4,-10.5,0.4).ss(3.5).p("AheBeQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_47.setTransform(9.525,7.7099);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.4,-10.5,0.4).ss(3.5).p("AheBfQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_48.setTransform(9.525,7.6976);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.4,-10.5,0.4).ss(3.6).p("AheBfQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_49.setTransform(9.525,7.6854);
	this.shape_49._off = true;

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.4,-10.5,0.4).ss(3.7).p("AheBfQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_50.setTransform(9.525,7.6608);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.5,-10.5,0.5).ss(3.7).p("AheBfQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_51.setTransform(9.525,7.6486);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.5,-10.5,0.5).ss(3.8).p("AheBfQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_52.setTransform(9.525,7.6363);
	this.shape_52._off = true;

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.5,-10.5,0.5).ss(3.9).p("AheBfQAAhHAcgxQAdgyAnAAQAhAAAaAkQAaAkAIA3");
	this.shape_53.setTransform(9.525,7.6118);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.5,-10.5,0.5).ss(3.9).p("AheBgQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_54.setTransform(9.525,7.5995);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().ls(["#570B84","#FF3939"],[0,1],10.8,0.5,-10.5,0.5).ss(4).p("AheBgQAAhHAcgxQAdgzAnAAQAhAAAaAlQAaAkAIA3");
	this.shape_55.setTransform(9.525,7.5873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10,p:{y:8.3108}}]},1).to({state:[{t:this.shape_10,p:{y:8.3047}}]},1).to({state:[{t:this.shape_11,p:{y:8.2986}}]},1).to({state:[{t:this.shape_11,p:{y:8.2925}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13,p:{y:8.2618}}]},1).to({state:[{t:this.shape_13,p:{y:8.2557}}]},1).to({state:[{t:this.shape_14,p:{y:8.2495}}]},1).to({state:[{t:this.shape_14,p:{y:8.2434}}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{y:8.2066}}]},1).to({state:[{t:this.shape_16,p:{y:8.2005}}]},1).to({state:[{t:this.shape_17,p:{y:8.1943}}]},1).to({state:[{t:this.shape_17,p:{y:8.1882}}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19,p:{y:8.1575}}]},1).to({state:[{t:this.shape_19,p:{y:8.1514}}]},1).to({state:[{t:this.shape_20,p:{y:8.1453}}]},1).to({state:[{t:this.shape_20,p:{y:8.1392}}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22,p:{y:8.1085}}]},1).to({state:[{t:this.shape_22,p:{y:8.1024}}]},1).to({state:[{t:this.shape_23,p:{y:8.0962}}]},1).to({state:[{t:this.shape_23,p:{y:8.0901}}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25,p:{y:8.0594}}]},1).to({state:[{t:this.shape_25,p:{y:8.0533}}]},1).to({state:[{t:this.shape_26,p:{y:8.0472}}]},1).to({state:[{t:this.shape_26,p:{y:8.041}}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28,p:{y:8.0104}}]},1).to({state:[{t:this.shape_28,p:{y:8.0042}}]},1).to({state:[{t:this.shape_29,p:{y:7.9981}}]},1).to({state:[{t:this.shape_29,p:{y:7.992}}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31,p:{y:7.9613}}]},1).to({state:[{t:this.shape_31,p:{y:7.9552}}]},1).to({state:[{t:this.shape_32,p:{y:7.9491}}]},1).to({state:[{t:this.shape_32,p:{y:7.9429}}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34,p:{y:7.9123}}]},1).to({state:[{t:this.shape_34,p:{y:7.9061}}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36,p:{y:7.8939}}]},1).to({state:[{t:this.shape_36,p:{y:7.8877}}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38,p:{y:7.8571}}]},1).to({state:[{t:this.shape_38,p:{y:7.8509}}]},1).to({state:[{t:this.shape_39,p:{y:7.8448}}]},1).to({state:[{t:this.shape_39,p:{y:7.8387}}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41,p:{y:7.808}}]},1).to({state:[{t:this.shape_41,p:{y:7.8019}}]},1).to({state:[{t:this.shape_42,p:{y:7.7958}}]},1).to({state:[{t:this.shape_42,p:{y:7.7896}}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44,p:{y:7.759}}]},1).to({state:[{t:this.shape_44,p:{y:7.7528}}]},1).to({state:[{t:this.shape_45,p:{y:7.7467}}]},1).to({state:[{t:this.shape_45,p:{y:7.7406}}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47,p:{y:7.7099}}]},1).to({state:[{t:this.shape_47,p:{y:7.7038}}]},1).to({state:[{t:this.shape_48,p:{y:7.6976}}]},1).to({state:[{t:this.shape_48,p:{y:7.6915}}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50,p:{y:7.6608}}]},1).to({state:[{t:this.shape_50,p:{y:7.6547}}]},1).to({state:[{t:this.shape_51,p:{y:7.6486}}]},1).to({state:[{t:this.shape_51,p:{y:7.6425}}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53,p:{y:7.6118}}]},1).to({state:[{t:this.shape_53,p:{y:7.6057}}]},1).to({state:[{t:this.shape_54,p:{y:7.5995}}]},1).to({state:[{t:this.shape_54,p:{y:7.5934}}]},1).to({state:[{t:this.shape_55,p:{y:7.5873}}]},1).to({state:[{t:this.shape_55,p:{y:7.5811}}]},1).to({state:[{t:this.shape_55,p:{y:7.575}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3).to({_off:false},0).wait(3).to({_off:true},1).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(7).to({_off:false},0).wait(3).to({_off:true},1).wait(149));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(11).to({_off:false},0).wait(3).to({_off:true},1).wait(145));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(15).to({_off:false},0).wait(3).to({_off:true},1).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(19).to({_off:false},0).wait(3).to({_off:true},1).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(23).to({_off:false},0).wait(3).to({_off:true},1).wait(133));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(27).to({_off:false},0).wait(3).to({_off:true},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(31).to({_off:false},0).wait(3).to({_off:true},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(35).to({_off:false},0).wait(2).to({y:8.3231},0).wait(1).to({y:8.317},0).to({_off:true},1).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(43).to({_off:false},0).wait(1).to({y:8.2802},0).wait(1).to({y:8.2741},0).wait(1).to({y:8.2679},0).to({_off:true},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(51).to({_off:false},0).wait(1).to({y:8.2311},0).wait(1).to({y:8.225},0).wait(1).to({y:8.2189},0).wait(1).to({y:8.2127},0).to({_off:true},1).wait(104));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(60).to({_off:false},0).wait(1).to({y:8.1759},0).wait(1).to({y:8.1698},0).wait(1).to({y:8.1637},0).to({_off:true},1).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(68).to({_off:false},0).wait(1).to({y:8.1269},0).wait(1).to({y:8.1208},0).wait(1).to({y:8.1146},0).to({_off:true},1).wait(88));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(76).to({_off:false},0).wait(1).to({y:8.0778},0).wait(1).to({y:8.0717},0).wait(1).to({y:8.0656},0).to({_off:true},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(84).to({_off:false},0).wait(1).to({y:8.0288},0).wait(1).to({y:8.0226},0).wait(1).to({y:8.0165},0).to({_off:true},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(92).to({_off:false},0).wait(1).to({y:7.9797},0).wait(1).to({y:7.9736},0).wait(1).to({y:7.9675},0).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(100).to({_off:false},0).wait(1).to({y:7.9307},0).wait(1).to({y:7.9245},0).wait(1).to({y:7.9184},0).to({_off:true},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(109).to({_off:false},0).wait(1).to({y:7.8755},0).wait(1).to({y:7.8693},0).wait(1).to({y:7.8632},0).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(117).to({_off:false},0).wait(1).to({y:7.8264},0).wait(1).to({y:7.8203},0).wait(1).to({y:7.8142},0).to({_off:true},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(125).to({_off:false},0).wait(1).to({y:7.7774},0).wait(1).to({y:7.7712},0).wait(1).to({y:7.7651},0).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(133).to({_off:false},0).wait(1).to({y:7.7283},0).wait(1).to({y:7.7222},0).wait(1).to({y:7.716},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(141).to({_off:false},0).wait(1).to({y:7.6792},0).wait(1).to({y:7.6731},0).wait(1).to({y:7.667},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(149).to({_off:false},0).wait(1).to({y:7.6302},0).wait(1).to({y:7.6241},0).wait(1).to({y:7.6179},0).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-13.5,37.599999999999994,36.9);


(lib.Hemox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.8,10.7,8.4,-5.1).ss(0.1).p("AALhnQA0AxARA2QARA3gcAdQgXAYgtgGQgrgGgugg");
	this.shape.setTransform(8.8519,10.36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.8,10.7,8.4,-5.1).ss(0.1).p("AhYBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_1.setTransform(8.8519,10.36);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.8,10.7,8.4,-5.1).ss(0.2).p("AhYBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_2.setTransform(8.8519,10.36);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.8,10.7,8.4,-5.1).ss(0.3).p("AhYBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_3.setTransform(8.8519,10.36);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.8,10.7,8.4,-5.1).ss(0.4).p("AhYBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_4.setTransform(8.8519,10.36);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.8,10.7,8.4,-5.1).ss(0.5).p("AhYBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_5.setTransform(8.8519,10.36);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.8,10.7,8.4,-5.1).ss(0.6).p("AhYBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_6.setTransform(8.8519,10.36);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.8,10.7,8.4,-5.1).ss(0.7).p("AhYBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_7.setTransform(8.8519,10.36);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.8,10.7,8.4,-5.1).ss(0.8).p("AhYBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_8.setTransform(8.8519,10.36);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.8,10.7,8.4,-5.1).ss(0.9).p("AhYBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_9.setTransform(8.8519,10.36);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.8,10.7,8.4,-5.1).p("AhYBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_10.setTransform(8.8519,10.36);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.8,10.7,8.4,-5.1).ss(1.1).p("AhYBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_11.setTransform(8.8578,10.36);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.8,10.7,8.4,-5.1).ss(1.2).p("AhYBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_12.setTransform(8.8682,10.36);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.8,10.7,8.4,-5.1).ss(1.3).p("AhYBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_13.setTransform(8.8786,10.36);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.8,10.7,8.4,-5.1).ss(1.4).p("AhYBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_14.setTransform(8.889,10.36);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.9,10.7,8.4,-5.1).ss(1.5).p("AhYBAQAuAgArAGQAtAGAWgYQAcgdgRg3QgRg2g0gx");
	this.shape_15.setTransform(8.9019,10.36);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.9,10.7,8.4,-5.1).ss(1.6).p("AhYBAQAuAgArAGQAtAGAWgYQAcgdgRg3QgRg2g0gx");
	this.shape_16.setTransform(8.9123,10.36);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.9,10.7,8.4,-5.1).ss(1.7).p("AhYBAQAuAgArAGQAtAGAWgYQAcgdgRg3QgRg2g0gx");
	this.shape_17.setTransform(8.9227,10.36);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.9,10.7,8.4,-5.1).ss(1.8).p("AhYBAQAuAgArAGQAtAGAWgYQAcgdgRg3QgRg2g0gx");
	this.shape_18.setTransform(8.9331,10.36);
	this.shape_18._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.9,10.7,8.4,-5.1).ss(1.9).p("AhYBAQAuAgArAGQAtAGAWgYQAcgdgRg3QgRg2g0gx");
	this.shape_19.setTransform(8.9434,10.36);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.9,10.7,8.3,-5.1).ss(1.9).p("AhZBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_20.setTransform(8.9512,10.36);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.9,10.7,8.3,-5.1).ss(2).p("AhZBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_21.setTransform(8.9538,10.36);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.9,10.7,8.3,-5.1).ss(2.1).p("AhZBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_22.setTransform(8.9642,10.36);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.9,10.7,8.3,-5.1).ss(2.2).p("AhZBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_23.setTransform(8.9746,10.36);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.9,10.7,8.3,-5.1).ss(2.3).p("AhZBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_24.setTransform(8.9849,10.36);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-5.9,10.7,8.3,-5.1).ss(2.4).p("AhZBAQAuAgArAGQAtAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_25.setTransform(8.9953,10.36);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6,10.7,8.3,-5.1).ss(2.4).p("AhZBAQAuAgArAGQAtAGAWgYQAcgdgRg3QgRg2g0gx");
	this.shape_26.setTransform(9.0005,10.36);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6,10.7,8.3,-5.1).ss(2.5).p("AhZBAQAuAgArAGQAtAGAWgYQAcgdgRg3QgRg2g0gx");
	this.shape_27.setTransform(9.0057,10.36);
	this.shape_27._off = true;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6,10.7,8.3,-5.1).ss(2.6).p("AhZBAQAuAgArAGQAtAGAWgYQAcgdgRg3QgRg2g0gx");
	this.shape_28.setTransform(9.0161,10.36);
	this.shape_28._off = true;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6,10.7,8.3,-5.1).ss(2.7).p("AhZBAQAuAgArAGQAtAGAWgYQAcgdgRg3QgRg2g0gx");
	this.shape_29.setTransform(9.0264,10.36);
	this.shape_29._off = true;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6,10.7,8.3,-5.1).ss(2.8).p("AhZBAQAuAgArAGQAtAGAWgYQAcgdgRg3QgRg2g0gx");
	this.shape_30.setTransform(9.0394,10.36);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6,10.7,8.3,-5.1).ss(2.9).p("AhZBAQAuAgArAGQAtAGAWgYQAcgdgRg3QgRg2g0gx");
	this.shape_31.setTransform(9.0498,10.36);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6,10.7,8.2,-5.1).ss(2.9).p("AhaBAQAuAgAsAGQAsAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_32.setTransform(9.0524,10.36);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6,10.7,8.2,-5.1).ss(3).p("AhaBAQAuAgAsAGQAsAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_33.setTransform(9.0601,10.36);
	this.shape_33._off = true;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6,10.7,8.2,-5.1).ss(3.1).p("AhaBAQAuAgAsAGQAsAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_34.setTransform(9.0705,10.36);
	this.shape_34._off = true;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6,10.7,8.2,-5.1).ss(3.2).p("AhaBAQAuAgAsAGQAsAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_35.setTransform(9.0809,10.36);
	this.shape_35._off = true;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6,10.7,8.2,-5.1).ss(3.3).p("AhaBAQAuAgAsAGQAsAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_36.setTransform(9.0913,10.36);
	this.shape_36._off = true;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6.1,10.7,8.2,-5.1).ss(3.4).p("AhaBAQAuAgAsAGQAsAGAWgYQAcgdgRg3QgRg2g0gx");
	this.shape_37.setTransform(9.1016,10.36);
	this.shape_37._off = true;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6.1,10.7,8.2,-5.1).ss(3.5).p("AhaBAQAuAgAsAGQAsAGAWgYQAcgdgRg3QgRg2g0gx");
	this.shape_38.setTransform(9.112,10.36);
	this.shape_38._off = true;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6.1,10.7,8.2,-5.1).ss(3.6).p("AhaBAQAuAgAsAGQAsAGAWgYQAcgdgRg3QgRg2g0gx");
	this.shape_39.setTransform(9.1224,10.36);
	this.shape_39._off = true;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6.1,10.7,8.2,-5.1).ss(3.7).p("AhaBAQAuAgAsAGQAsAGAWgYQAcgdgRg3QgRg2g0gx");
	this.shape_40.setTransform(9.1328,10.36);
	this.shape_40._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6.1,10.7,8.2,-5.1).ss(3.8).p("AhaBAQAuAgAsAGQAsAGAWgYQAcgdgRg3QgRg2g0gx");
	this.shape_41.setTransform(9.1431,10.36);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6.1,10.7,8.1,-5.1).ss(3.8).p("AhbBAQAuAgAsAGQAsAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_42.setTransform(9.1509,10.36);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6.1,10.7,8.1,-5.1).ss(3.9).p("AhbBAQAuAgAsAGQAsAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_43.setTransform(9.1535,10.36);
	this.shape_43._off = true;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6.1,10.7,8.1,-5.1).ss(4).p("AhbBAQAuAgAsAGQAsAGAXgYQAcgdgRg3QgRg2g0gx");
	this.shape_44.setTransform(9.1639,10.36);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().ls(["#FF3939","#4DC4FF"],[0,1],-6.1,10.7,8.1,-5.1).ss(4).p("AAIhnQA0AxARA2QARA3gcAdQgXAYgsgGQgsgGgugg");
	this.shape_45.setTransform(9.1691,10.36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19,p:{x:8.9434}}]},1).to({state:[{t:this.shape_19,p:{x:8.946}}]},1).to({state:[{t:this.shape_19,p:{x:8.9486}}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25,p:{x:8.9953}}]},1).to({state:[{t:this.shape_25,p:{x:8.9979}}]},1).to({state:[{t:this.shape_26,p:{x:9.0005}}]},1).to({state:[{t:this.shape_26,p:{x:9.0031}}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32,p:{x:9.0524}}]},1).to({state:[{t:this.shape_32,p:{x:9.055}}]},1).to({state:[{t:this.shape_32,p:{x:9.0576}}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41,p:{x:9.1431}}]},1).to({state:[{t:this.shape_41,p:{x:9.1457}}]},1).to({state:[{t:this.shape_41,p:{x:9.1483}}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44,p:{x:9.1639}}]},1).to({state:[{t:this.shape_44,p:{x:9.1665}}]},1).to({state:[{t:this.shape_45}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).wait(3).to({_off:true},1).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(7).to({_off:false},0).wait(3).to({_off:true},1).wait(149));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(11).to({_off:false},0).wait(3).to({_off:true},1).wait(145));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(15).to({_off:false},0).wait(3).to({_off:true},1).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(19).to({_off:false},0).wait(3).to({_off:true},1).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(23).to({_off:false},0).wait(3).to({_off:true},1).wait(133));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(27).to({_off:false},0).wait(3).to({_off:true},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(31).to({_off:false},0).wait(3).to({_off:true},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(35).to({_off:false},0).wait(2).to({x:8.8527},0).wait(1).to({x:8.8552},0).to({_off:true},1).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(39).to({_off:false},0).wait(1).to({x:8.8604},0).wait(1).to({x:8.863},0).wait(1).to({x:8.8656},0).to({_off:true},1).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(43).to({_off:false},0).wait(1).to({x:8.8708},0).wait(1).to({x:8.8734},0).wait(1).to({x:8.876},0).to({_off:true},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(47).to({_off:false},0).wait(1).to({x:8.8812},0).wait(1).to({x:8.8838},0).wait(1).to({x:8.8864},0).to({_off:true},1).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(51).to({_off:false},0).wait(1).to({x:8.8916},0).wait(1).to({x:8.8942},0).wait(1).to({x:8.8967},0).wait(1).to({x:8.8993},0).to({_off:true},1).wait(104));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(56).to({_off:false},0).wait(1).to({x:8.9045},0).wait(1).to({x:8.9071},0).wait(1).to({x:8.9097},0).to({_off:true},1).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(60).to({_off:false},0).wait(1).to({x:8.9149},0).wait(1).to({x:8.9175},0).wait(1).to({x:8.9201},0).to({_off:true},1).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(64).to({_off:false},0).wait(1).to({x:8.9253},0).wait(1).to({x:8.9279},0).wait(1).to({x:8.9305},0).to({_off:true},1).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(68).to({_off:false},0).wait(1).to({x:8.9356},0).wait(1).to({x:8.9382},0).wait(1).to({x:8.9408},0).to({_off:true},1).wait(88));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(76).to({_off:false},0).wait(1).to({x:8.9564},0).wait(1).to({x:8.959},0).wait(1).to({x:8.9616},0).to({_off:true},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(80).to({_off:false},0).wait(1).to({x:8.9668},0).wait(1).to({x:8.9694},0).wait(1).to({x:8.972},0).to({_off:true},1).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(84).to({_off:false},0).wait(1).to({x:8.9771},0).wait(1).to({x:8.9797},0).wait(1).to({x:8.9823},0).to({_off:true},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(88).to({_off:false},0).wait(1).to({x:8.9875},0).wait(1).to({x:8.9901},0).wait(1).to({x:8.9927},0).to({_off:true},1).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(96).to({_off:false},0).wait(1).to({x:9.0083},0).wait(1).to({x:9.0109},0).wait(1).to({x:9.0135},0).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(100).to({_off:false},0).wait(1).to({x:9.0186},0).wait(1).to({x:9.0212},0).wait(1).to({x:9.0238},0).to({_off:true},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(104).to({_off:false},0).wait(1).to({x:9.029},0).wait(1).to({x:9.0316},0).wait(1).to({x:9.0342},0).wait(1).to({x:9.0368},0).to({_off:true},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(109).to({_off:false},0).wait(1).to({x:9.042},0).wait(1).to({x:9.0446},0).wait(1).to({x:9.0472},0).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(117).to({_off:false},0).wait(1).to({x:9.0627},0).wait(1).to({x:9.0653},0).wait(1).to({x:9.0679},0).to({_off:true},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(121).to({_off:false},0).wait(1).to({x:9.0731},0).wait(1).to({x:9.0757},0).wait(1).to({x:9.0783},0).to({_off:true},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(125).to({_off:false},0).wait(1).to({x:9.0835},0).wait(1).to({x:9.0861},0).wait(1).to({x:9.0887},0).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(129).to({_off:false},0).wait(1).to({x:9.0939},0).wait(1).to({x:9.0965},0).wait(1).to({x:9.0991},0).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(133).to({_off:false},0).wait(1).to({x:9.1042},0).wait(1).to({x:9.1068},0).wait(1).to({x:9.1094},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(137).to({_off:false},0).wait(1).to({x:9.1146},0).wait(1).to({x:9.1172},0).wait(1).to({x:9.1198},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(141).to({_off:false},0).wait(1).to({x:9.125},0).wait(1).to({x:9.1276},0).wait(1).to({x:9.1302},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(145).to({_off:false},0).wait(1).to({x:9.1354},0).wait(1).to({x:9.138},0).wait(1).to({x:9.1405},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(153).to({_off:false},0).wait(1).to({x:9.1561},0).wait(1).to({x:9.1587},0).wait(1).to({x:9.1613},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-2,38.400000000000006,28.4);


(lib.H2Sipka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAA00").s().p("AgqAAIBVgxIAABjg");
	this.shape.setTransform(2.65,45.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

	// Vrstva_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFAA00").ss(0.1).p("AhoDkIBcAAQAuAAAhghQAhghAAgvIAAlb");
	this.shape_1.setTransform(16,23.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFAA00").ss(0.2).p("AhoDkIBcAAQAuAAAhghQAhghAAgvIAAlb");
	this.shape_2.setTransform(16,23.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFAA00").ss(0.3).p("AhoDkIBcAAQAuAAAhghQAhghAAgvIAAlb");
	this.shape_3.setTransform(16,23.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFAA00").ss(0.4).p("AhoDkIBcAAQAuAAAhghQAhghAAgvIAAlb");
	this.shape_4.setTransform(16,23.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFAA00").ss(0.5).p("AhoDkIBcAAQAuAAAhghQAhghAAgvIAAlb");
	this.shape_5.setTransform(16,23.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFAA00").ss(0.6).p("AhoDkIBcAAQAuAAAhghQAhghAAgvIAAlb");
	this.shape_6.setTransform(16,23.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFAA00").ss(0.7).p("AhoDkIBcAAQAuAAAhghQAhghAAgvIAAlb");
	this.shape_7.setTransform(16,23.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFAA00").ss(0.8).p("AhoDkIBcAAQAuAAAhghQAhghAAgvIAAlb");
	this.shape_8.setTransform(16,23.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFAA00").ss(0.9).p("AhoDkIBcAAQAuAAAhghQAhghAAgvIAAlb");
	this.shape_9.setTransform(16,23.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFAA00").p("AhoDkIBcAAQAuAAAhghQAhghAAgvIAAlb");
	this.shape_10.setTransform(16,23.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFAA00").p("AhoDjIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_11.setTransform(16.0069,23.2569);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFAA00").ss(1.1).p("AhoDjIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_12.setTransform(16.0162,23.2662);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFAA00").ss(1.2).p("AhoDjIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_13.setTransform(16.044,23.294);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFAA00").ss(1.2).p("AhpDjIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_14.setTransform(16.0533,23.3033);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFAA00").ss(1.3).p("AhpDjIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_15.setTransform(16.0626,23.3126);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFAA00").ss(1.4).p("AhpDjIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_16.setTransform(16.0904,23.3404);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFAA00").ss(1.4).p("AhpDiIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_17.setTransform(16.109,23.359);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFAA00").ss(1.5).p("AhpDiIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_18.setTransform(16.1182,23.3682);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFAA00").ss(1.6).p("AhpDiIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_19.setTransform(16.1461,23.3961);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFAA00").ss(1.6).p("AhqDiIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_20.setTransform(16.1553,23.4053);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFAA00").ss(1.7).p("AhqDiIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_21.setTransform(16.1646,23.4146);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFAA00").ss(1.8).p("AhqDiIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_22.setTransform(16.1925,23.4425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFAA00").ss(1.8).p("AhqDhIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_23.setTransform(16.2017,23.4517);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFAA00").ss(1.9).p("AhqDhIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_24.setTransform(16.2203,23.4703);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFAA00").ss(2).p("AhqDhIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_25.setTransform(16.2388,23.4888);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFAA00").ss(2).p("AhrDhIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_26.setTransform(16.2574,23.5074);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFAA00").ss(2.1).p("AhrDhIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_27.setTransform(16.2667,23.5167);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFAA00").ss(2.2).p("AhrDhIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_28.setTransform(16.2945,23.5445);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFAA00").ss(2.2).p("AhrDgIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_29.setTransform(16.3038,23.5538);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFAA00").ss(2.3).p("AhrDgIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_30.setTransform(16.3131,23.5631);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFAA00").ss(2.4).p("AhrDgIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_31.setTransform(16.3409,23.5909);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFAA00").ss(2.4).p("AhsDgIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_32.setTransform(16.3502,23.6002);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFAA00").ss(2.5).p("AhsDgIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_33.setTransform(16.3687,23.6187);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFAA00").ss(2.6).p("AhsDgIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_34.setTransform(16.3965,23.6465);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFAA00").ss(2.6).p("AhsDfIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_35.setTransform(16.4058,23.6558);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFAA00").ss(2.7).p("AhsDfIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_36.setTransform(16.4151,23.6651);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFAA00").ss(2.8).p("AhsDfIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_37.setTransform(16.4429,23.6929);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFAA00").ss(2.8).p("AhtDfIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_38.setTransform(16.4522,23.7022);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFAA00").ss(2.9).p("AhtDfIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_39.setTransform(16.4708,23.7208);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFAA00").ss(3).p("AhtDfIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_40.setTransform(16.4893,23.7393);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFAA00").ss(3).p("AhtDeIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_41.setTransform(16.5079,23.7579);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFAA00").ss(3.1).p("AhtDeIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_42.setTransform(16.5171,23.7671);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFAA00").ss(3.2).p("AhtDeIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_43.setTransform(16.545,23.795);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFAA00").ss(3.2).p("AhuDeIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_44.setTransform(16.5542,23.8042);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFAA00").ss(3.3).p("AhuDeIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_45.setTransform(16.5635,23.8135);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFAA00").ss(3.4).p("AhuDeIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_46.setTransform(16.5914,23.8414);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFAA00").ss(3.4).p("AhuDdIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_47.setTransform(16.6006,23.8506);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFAA00").ss(3.5).p("AhuDdIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_48.setTransform(16.6192,23.8692);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFAA00").ss(3.6).p("AhuDdIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_49.setTransform(16.6377,23.8877);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFAA00").ss(3.6).p("AhvDdIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_50.setTransform(16.6563,23.9063);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFAA00").ss(3.7).p("AhvDdIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_51.setTransform(16.6656,23.9156);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFAA00").ss(3.8).p("AhvDdIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_52.setTransform(16.6934,23.9434);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFAA00").ss(3.8).p("AhvDcIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_53.setTransform(16.7027,23.9527);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFAA00").ss(3.9).p("AhvDcIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_54.setTransform(16.7212,23.9712);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFAA00").ss(4).p("AhvDcIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_55.setTransform(16.7398,23.9898);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFAA00").ss(4).p("AhwDcIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_56.setTransform(16.7583,24.0083);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFAA00").ss(4.1).p("AhwDcIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_57.setTransform(16.7676,24.0176);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFAA00").ss(4.2).p("AhwDcIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_58.setTransform(16.7954,24.0454);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFAA00").ss(4.2).p("AhwDbIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_59.setTransform(16.8047,24.0547);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFAA00").ss(4.3).p("AhwDbIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_60.setTransform(16.814,24.064);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFAA00").ss(4.4).p("AhwDbIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_61.setTransform(16.8418,24.0918);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFAA00").ss(4.4).p("AhxDbIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_62.setTransform(16.8511,24.1011);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFAA00").ss(4.5).p("AhxDbIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_63.setTransform(16.8697,24.1197);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFAA00").ss(4.6).p("AhxDbIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_64.setTransform(16.8882,24.1382);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFAA00").ss(4.6).p("AhxDaIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_65.setTransform(16.9068,24.1568);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFAA00").ss(4.7).p("AhxDaIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_66.setTransform(16.916,24.166);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFAA00").ss(4.8).p("AhxDaIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_67.setTransform(16.9439,24.1939);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFAA00").ss(4.8).p("AhyDaIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_68.setTransform(16.9531,24.2031);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFAA00").ss(4.9).p("AhyDaIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_69.setTransform(16.9717,24.2217);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFAA00").ss(5).p("AhyDaIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_70.setTransform(16.9903,24.2403);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFAA00").ss(5).p("AhyDZIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_71.setTransform(17.0088,24.2588);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFAA00").ss(5.1).p("AhyDZIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_72.setTransform(17.0181,24.2681);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFAA00").ss(5.2).p("AhyDZIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_73.setTransform(17.0459,24.2959);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFAA00").ss(5.2).p("AhzDZIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_74.setTransform(17.0552,24.3052);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFAA00").ss(5.3).p("AhzDZIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_75.setTransform(17.0645,24.3145);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFAA00").ss(5.4).p("AhzDZIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_76.setTransform(17.0923,24.3423);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFAA00").ss(5.4).p("AhzDYIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_77.setTransform(17.1016,24.3516);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFAA00").ss(5.5).p("AhzDYIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_78.setTransform(17.1201,24.3701);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFAA00").ss(5.6).p("AhzDYIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_79.setTransform(17.1387,24.3887);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFAA00").ss(5.6).p("Ah0DYIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_80.setTransform(17.1572,24.4072);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFAA00").ss(5.7).p("Ah0DYIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_81.setTransform(17.1665,24.4165);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFAA00").ss(5.8).p("Ah0DYIBdAAQAtAAAhghQAhghAAgvIAAla");
	this.shape_82.setTransform(17.1943,24.4443);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFAA00").ss(5.8).p("Ah0DXIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_83.setTransform(17.2036,24.4536);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFAA00").ss(5.9).p("Ah0DXIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_84.setTransform(17.2129,24.4629);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFAA00").ss(6).p("Ah0DXIBcAAQAuAAAhghQAhghAAgvIAAla");
	this.shape_85.setTransform(17.2407,24.4907);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFAA00").ss(6).p("Ah1DXIBdAAQAtAAAhghQAighAAgvIAAla");
	this.shape_86.setTransform(17.25,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12,p:{x:16.0162,y:23.2662}}]},1).to({state:[{t:this.shape_12,p:{x:16.0255,y:23.2755}}]},1).to({state:[{t:this.shape_12,p:{x:16.0347,y:23.2847}}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{x:16.0626,y:23.3126}}]},1).to({state:[{t:this.shape_15,p:{x:16.0719,y:23.3219}}]},1).to({state:[{t:this.shape_15,p:{x:16.0811,y:23.3311}}]},1).to({state:[{t:this.shape_16,p:{x:16.0904,y:23.3404}}]},1).to({state:[{t:this.shape_16,p:{x:16.0997,y:23.3497}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18,p:{x:16.1182,y:23.3682}}]},1).to({state:[{t:this.shape_18,p:{x:16.1275,y:23.3775}}]},1).to({state:[{t:this.shape_18,p:{x:16.1368,y:23.3868}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21,p:{x:16.1646,y:23.4146}}]},1).to({state:[{t:this.shape_21,p:{x:16.1739,y:23.4239}}]},1).to({state:[{t:this.shape_21,p:{x:16.1832,y:23.4332}}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23,p:{x:16.2017,y:23.4517}}]},1).to({state:[{t:this.shape_23,p:{x:16.211,y:23.461}}]},1).to({state:[{t:this.shape_24,p:{x:16.2203,y:23.4703}}]},1).to({state:[{t:this.shape_24,p:{x:16.2296,y:23.4796}}]},1).to({state:[{t:this.shape_25,p:{x:16.2388,y:23.4888}}]},1).to({state:[{t:this.shape_25,p:{x:16.2481,y:23.4981}}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27,p:{x:16.2667,y:23.5167}}]},1).to({state:[{t:this.shape_27,p:{x:16.2759,y:23.5259}}]},1).to({state:[{t:this.shape_27,p:{x:16.2852,y:23.5352}}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30,p:{x:16.3131,y:23.5631}}]},1).to({state:[{t:this.shape_30,p:{x:16.3223,y:23.5723}}]},1).to({state:[{t:this.shape_30,p:{x:16.3316,y:23.5816}}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32,p:{x:16.3502,y:23.6002}}]},1).to({state:[{t:this.shape_32,p:{x:16.3594,y:23.6094}}]},1).to({state:[{t:this.shape_33,p:{x:16.3687,y:23.6187}}]},1).to({state:[{t:this.shape_33,p:{x:16.378,y:23.628}}]},1).to({state:[{t:this.shape_33,p:{x:16.3873,y:23.6373}}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36,p:{x:16.4151,y:23.6651}}]},1).to({state:[{t:this.shape_36,p:{x:16.4244,y:23.6744}}]},1).to({state:[{t:this.shape_36,p:{x:16.4336,y:23.6836}}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38,p:{x:16.4522,y:23.7022}}]},1).to({state:[{t:this.shape_38,p:{x:16.4615,y:23.7115}}]},1).to({state:[{t:this.shape_39,p:{x:16.4708,y:23.7208}}]},1).to({state:[{t:this.shape_39,p:{x:16.48,y:23.73}}]},1).to({state:[{t:this.shape_40,p:{x:16.4893,y:23.7393}}]},1).to({state:[{t:this.shape_40,p:{x:16.4986,y:23.7486}}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42,p:{x:16.5171,y:23.7671}}]},1).to({state:[{t:this.shape_42,p:{x:16.5264,y:23.7764}}]},1).to({state:[{t:this.shape_42,p:{x:16.5357,y:23.7857}}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45,p:{x:16.5635,y:23.8135}}]},1).to({state:[{t:this.shape_45,p:{x:16.5728,y:23.8228}}]},1).to({state:[{t:this.shape_45,p:{x:16.5821,y:23.8321}}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47,p:{x:16.6006,y:23.8506}}]},1).to({state:[{t:this.shape_47,p:{x:16.6099,y:23.8599}}]},1).to({state:[{t:this.shape_48,p:{x:16.6192,y:23.8692}}]},1).to({state:[{t:this.shape_48,p:{x:16.6285,y:23.8785}}]},1).to({state:[{t:this.shape_49,p:{x:16.6377,y:23.8877}}]},1).to({state:[{t:this.shape_49,p:{x:16.647,y:23.897}}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51,p:{x:16.6656,y:23.9156}}]},1).to({state:[{t:this.shape_51,p:{x:16.6748,y:23.9248}}]},1).to({state:[{t:this.shape_51,p:{x:16.6841,y:23.9341}}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53,p:{x:16.7027,y:23.9527}}]},1).to({state:[{t:this.shape_53,p:{x:16.7119,y:23.9619}}]},1).to({state:[{t:this.shape_54,p:{x:16.7212,y:23.9712}}]},1).to({state:[{t:this.shape_54,p:{x:16.7305,y:23.9805}}]},1).to({state:[{t:this.shape_55,p:{x:16.7398,y:23.9898}}]},1).to({state:[{t:this.shape_55,p:{x:16.7491,y:23.9991}}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57,p:{x:16.7676,y:24.0176}}]},1).to({state:[{t:this.shape_57,p:{x:16.7769,y:24.0269}}]},1).to({state:[{t:this.shape_57,p:{x:16.7862,y:24.0362}}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60,p:{x:16.814,y:24.064}}]},1).to({state:[{t:this.shape_60,p:{x:16.8233,y:24.0733}}]},1).to({state:[{t:this.shape_60,p:{x:16.8325,y:24.0825}}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62,p:{x:16.8511,y:24.1011}}]},1).to({state:[{t:this.shape_62,p:{x:16.8604,y:24.1104}}]},1).to({state:[{t:this.shape_63,p:{x:16.8697,y:24.1197}}]},1).to({state:[{t:this.shape_63,p:{x:16.8789,y:24.1289}}]},1).to({state:[{t:this.shape_64,p:{x:16.8882,y:24.1382}}]},1).to({state:[{t:this.shape_64,p:{x:16.8975,y:24.1475}}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66,p:{x:16.916,y:24.166}}]},1).to({state:[{t:this.shape_66,p:{x:16.9253,y:24.1753}}]},1).to({state:[{t:this.shape_66,p:{x:16.9346,y:24.1846}}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68,p:{x:16.9531,y:24.2031}}]},1).to({state:[{t:this.shape_68,p:{x:16.9624,y:24.2124}}]},1).to({state:[{t:this.shape_69,p:{x:16.9717,y:24.2217}}]},1).to({state:[{t:this.shape_69,p:{x:16.981,y:24.231}}]},1).to({state:[{t:this.shape_70,p:{x:16.9903,y:24.2403}}]},1).to({state:[{t:this.shape_70,p:{x:16.9995,y:24.2495}}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72,p:{x:17.0181,y:24.2681}}]},1).to({state:[{t:this.shape_72,p:{x:17.0274,y:24.2774}}]},1).to({state:[{t:this.shape_72,p:{x:17.0366,y:24.2866}}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75,p:{x:17.0645,y:24.3145}}]},1).to({state:[{t:this.shape_75,p:{x:17.0737,y:24.3237}}]},1).to({state:[{t:this.shape_75,p:{x:17.083,y:24.333}}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77,p:{x:17.1016,y:24.3516}}]},1).to({state:[{t:this.shape_77,p:{x:17.1108,y:24.3608}}]},1).to({state:[{t:this.shape_78,p:{x:17.1201,y:24.3701}}]},1).to({state:[{t:this.shape_78,p:{x:17.1294,y:24.3794}}]},1).to({state:[{t:this.shape_79,p:{x:17.1387,y:24.3887}}]},1).to({state:[{t:this.shape_79,p:{x:17.148,y:24.398}}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81,p:{x:17.1665,y:24.4165}}]},1).to({state:[{t:this.shape_81,p:{x:17.1758,y:24.4258}}]},1).to({state:[{t:this.shape_81,p:{x:17.1851,y:24.4351}}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84,p:{x:17.2129,y:24.4629}}]},1).to({state:[{t:this.shape_84,p:{x:17.2222,y:24.4722}}]},1).to({state:[{t:this.shape_84,p:{x:17.2314,y:24.4814}}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-3,30.6,54);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag2AkIAAhHIBtAAIAABHg");
	mask.setTransform(5.525,3.6);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjAdQgPgHgEgLQADgSAQgOQAQgOATAAQAVAAAPAOQAPANAEATQgEALgPAHQgQAHgUAAQgTAAgQgHg");
	this.shape.setTransform(5.525,3.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,11.1,7.2), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj2D2IAAnrIHtAAIAAHrg");
	mask.setTransform(24.675,24.55);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1FAFFF").ss(2.1).p("AA8ghIgwgwIhDAAIAACjIBDAAIAwgw");
	this.shape.setTransform(6.6499,24.55);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,15.4,13.6,18.4), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj2D2IAAnrIHtAAIAAHrg");
	mask.setTransform(24.675,24.55);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1FAFFF").ss(2.1).p("Ag7AiIAwAwIBDAAIAAijIhDAAIgwAw");
	this.shape.setTransform(42.7001,24.55);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(35.8,15.4,13.600000000000001,18.4), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj2D2IAAnrIHtAAIAAHrg");
	mask.setTransform(24.675,24.55);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1FAFFF").ss(2.1).p("AAiA7IAwgwIAAhDIijAAIAABDIAwAw");
	this.shape.setTransform(24.675,6.6518);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(15.5,0,18.4,13.6), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj2D2IAAnrIHtAAIAAHrg");
	mask.setTransform(24.675,24.55);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1FAFFF").ss(2.1).p("Aghg6IgwAwIAABDICjAAIAAhDIgwgw");
	this.shape.setTransform(24.675,42.4482);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(15.5,35.5,18.4,13.600000000000001), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2).p("AAAgsIAABZ");
	this.shape.setTransform(109.4,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AokDOQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAokBqQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAokAGQgDgDAAgDIAAgvIAAgOQABgEADgDQADgDAEABQAEAAADADQADADgBAEIAAANIAAAvQAAADgDADQgDADgEAAQgEAAgDgDgAoYhZQgDgCgCgEQgCgDABgEQALgfAYgYQADgDAEAAQAEAAADACQADAEAAAEQAAAEgDADQgUAVgKAaQgBAEgEACIgEABIgEAAgAnXimQgFgBgCgEQgCgDABgEQABgEADgCQAdgSAhgEQAFgBADADQADACABAEQAAAFgCADQgDADgEABQgdADgZAQQgCABgDAAIgCAAgAIMi8QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIASAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAGoi8QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAFEi8QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgADgi8QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAB8i8QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAAYi8QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAhLi8QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAivi8QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAkTi8QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAl3i8QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAg");
	this.shape_1.setTransform(55.175,24.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,-1,110.4,46.5), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(2).p("AAAgsIAABZ");
	this.shape_2.setTransform(1,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AC8DQQgCgDgBgEIAAghQABgEACgDQADgDAEAAQAFAAADADQACADAAAEIAAAhQAAAEgCADQgDADgFAAQgEAAgDgDgAC8CHQgCgDgBgEIAAg8QABgEACgDQADgDAEAAQAFAAADADQACADAAAEIAAA8QAAAEgCADQgDADgFAAQgEAAgDgDgAC8AjQgCgDgBgEIAAg7QABgEACgDQADgDAEAAQAFAAADADQACADAAAEIAAA7QAAAEgCADQgDADgFAAQgEAAgDgDgAC8g8QgDgCAAgEQgEgegOgYQgDgEABgEQABgEAEgCQADgCAEABQAEABADADQARAdADAhQABAFgDADQgCADgFABIgBAAQgDAAgDgDgACQiVQgUgUgZgLQgEgBgBgEQgCgEACgEQABgEAEgBQAEgCAEACQAcALAYAYQACADAAAEQAAAEgCADQgDADgFAAQgEAAgDgDgAA/i9IgTgBIgnAAQgFAAgCgDQgCgDAAgEQAAgEACgDQACgDAFAAIAnAAIAVABQAEAAADAEQACADAAAEQAAAEgEADQgDACgDAAIgBAAgAhei+QgFAAgDgDQgCgDAAgEQAAgEACgDQADgDAFAAIA7AAQAFAAACADQADADABAEQgBAEgDADQgCADgFAAgAjCi+QgFAAgCgDQgDgDAAgEQAAgEADgDQACgDAFAAIA7AAQAFAAACADQADADAAAEQAAAEgDADQgCADgFAAg");
	this.shape_3.setTransform(20.6,24.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,-1,41.2,46.5), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EggeANeIAA67MBUBAAAIAAa7g");
	mask_1.setTransform(329.9335,86.1861);

	// Vrstva_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7C0C04").s().p("AhDBHQgngMgIgdQgIgeAcgcQAcgeAvgMQAvgMAoAMQAnAMAIAdQAIAdgcAdQgcAegwAMQgXAGgWAAQgVAAgUgGg");
	this.shape_4.setTransform(92.425,83.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7C0C04").s().p("AhFAvQgegTgBgbQAAgaAdgUQAdgTApAAQApgBAeATQAeATAAAbQABAagdATQgdAUgqAAIgBAAQgoAAgdgSg");
	this.shape_5.setTransform(306.7512,41.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7C0C04").s().p("AgDBBQgkgCgYgVQgYgVACgaQABgbAbgRQAagRAjACQAjACAZAVQAYAVgCAaQgBAbgbARQgXAQgeAAIgIgBg");
	this.shape_6.setTransform(494.0219,41.3801);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7C0C04").s().p("AgWA9QgogQgWgdQgWgcAKgZQAJgZAjgHQAkgHAnAQQApAPAVAeQAWAcgKAZQgJAZgjAHQgKACgLAAQgaAAgcgLg");
	this.shape_7.setTransform(715.5,95.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#7C0C04").ss(1.4).p("Aq5i5QAPAiAkAYQAWAPAnAPQBNAeCVAtQCPAqBJAdQAqARAXAPQAeATARAbQAMARAKAlQAJAhASAYQAiArAxASQAxASA4gLQApgHAlgdQAjgcAcgDQAPgCAWAJQAUAHBfAnQBKAeAZAGQAdAHAVgIQAUgIAPgQQAQgQAGgVQAHgZgJgbQgFgQgNgXQguhLhognQi+hFkqhyQmRiahWghQgbgLgigFQhAgLg5ANQg3AOgTAeQgPAZAEAiQADASAHARg");
	this.shape_8.setTransform(701.2025,76.8288);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C97777").s().p("AJWFIQgZgGhKgeIhzguQgWgJgPACQgcADgjAcQglAdgpAHQg4ALgxgSQgxgSgigrQgSgYgJghQgKglgMgRQgRgbgegTQgXgPgqgRQhJgdiPgqQiVgthNgeQgngPgWgPQgkgYgPgiQgHgRgDgSQgEgiAPgZQATgeA3gOQA5gNBAALQAiAFAbALIHnC7QEqByC+BFQBoAnAuBLQANAXAFAQQAJAbgHAZQgGAVgQAQQgPAQgUAIQgLAEgNAAQgMAAgOgDg");
	this.shape_9.setTransform(701.2025,76.8288);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#7C0C04").ss(1.4).p("AtEgeQASAaAnAKQAZAHBBAGQAPABClgBQAgAAAIAAQAJABAIACQAhAKAaAnQAgAvAXAQQAmAbA1ADQAzADApgSQAXgLAbgaQAYgaAdgLQAYgJAcgBQAUgBAuAEQCNALA9AMIF0BKQA1AKAkABQA1ACAigSQAbgOAIgoQAHgmgNggQgRgohBgUQgugOiDgTQm1g/gTgCQj3gbgJABQgMAAiXgQQgmgEg5gDQhxgGhxACQhzACgzAMQg3ANgPAfQgKAUAEAaQAEAWAMATg");
	this.shape_10.setTransform(517.6518,36.5074);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C97777").s().p("ALZCwQgkgBg1gKIl0hKQg9gMiNgLQgugEgUABQgcABgYAJQgdALgYAaQgbAagXALQgpASgzgDQg1gDgmgbQgXgQgggvQgagnghgKQgIgCgJgBIgoAAQilABgPgBQhBgGgZgHQgngKgSgaQgMgTgEgWQgEgaAKgUQAPgfA3gNQAzgMBzgCQBxgCBxAGQA5ADAmAEQCXAQAMAAQAJgBD3AbQATACG1A/QCDATAuAOQBBAUARAoQANAggHAmQgIAogbAOQgfARgwAAIgIgBg");
	this.shape_11.setTransform(517.6518,36.5074);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#7C0C04").ss(1.4).p("ApKBAQA6AACUgUQBjgNApAUQAmATAYAVQAMAKAOAQQALAOALAIQAgAYAtAHQA5AKA4gYQAlgQAbgjQAjguAPgMQAygqBlgFQBDgFDLAKQAmACAXgDQArgFAdgXQA0grgJgpQgFgcgggTQgigTgtACIjRAAQmpAFkpANQknANhRARQgkAHgWAKQgpATgNAeQgIARAAATQABAUAIAPQASAgA3AMQAiAGBGABg");
	this.shape_12.setTransform(309.1602,35.9106);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C97777").s().p("Ag1CqQgtgHgggYQgLgIgLgOQgOgQgMgKQgYgVgmgTQgpgUhjANQiUAUg6AAQhGgBgigGQg3gMgSggQgIgPgBgUQAAgTAIgRQANgeApgTQAWgKAkgHQBRgREngNQEpgNGpgFIDRAAQAtgCAiATQAgATAFAcQAJApg0ArQgdAXgrAFQgXADgmgCQjLgKhDAFQhlAFgyAqQgPAMgjAuQgbAjglAQQgnARgoAAQgRAAgRgDg");
	this.shape_13.setTransform(309.1602,35.9106);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#7C0C04").ss(1.4).p("AKplVQAsgJAVAAQAngBAaASQAUANAMAVQAOAXgCAXQgDAegjAcQgYASgtAUQhxAyjLAjQjJAjhgArQgwAVgdAXQggAZgTAhQgOAZgHAnQgHAjgQAXQgcApg1AZQgxAVgzABQgyAAgyghQgwgggrADQgoADhCAgQhQAngkAKQggAIgdACQgYACgggDQgegDgZgPQgdgQgMgYQgbg3AqguQAYgcBCgkQBdgzBLglQDnhvEGhYQBngiB2giIAFgBQAlgKArgLQBTgVCPgaQCogeA7gNg");
	this.shape_14.setTransform(111.5096,65.1624);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C97777").s().p("ArsFdQgegDgZgPQgdgQgMgYQgbg3AqguQAYgcBCgkQBdgzBLglQDnhvEGhYQBngiB2giIAFgBIBQgVQBTgVCPgaQCogeA7gNQAsgJAVAAQAngBAaASQAUANAMAVQAOAXgCAXQgDAegjAcQgYASgtAUQhxAyjLAjQjJAjhgArQgwAVgdAXQggAZgTAhQgOAZgHAnQgHAjgQAXQgcApg1AZQgxAVgzABQgyAAgyghQgwgggrADQgoADhCAgQhQAngkAKQggAIgdACIgUABQgRAAgTgCg");
	this.shape_15.setTransform(111.5096,65.1624);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AA4848").s().p("A36PsQrChSogiXQohiXkqjDQk1jLAAjeQAAjcE1jLQEqjEIhiWQIgiXLChTQLbhWMfAAQMgAALbBWQLCBTIgCXQIhCWEqDEQE1DLAADcQAADek1DLQkqDDohCXQogCXrCBSQrbBWsgAAQsfAArbhWg");
	this.shape_16.setTransform(393.325,135.9);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(122.1,11.6,537.8,160.8), null);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFAFA").s().p("AhmAfQAAgsAhggQAfggAsAAQAfAAAaAQQAaAPAOAaQhsAuhWA0QgLgXAAgYg");
	this.shape_1.setTransform(10.25,7.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(0,0,20.5,15.7), null);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFAFA").s().p("AhmAfQAAgsAhggQAfggAsAAQAfAAAaAQQAaAPAOAaQhsAuhWA0QgLgXAAgYg");
	this.shape_1.setTransform(10.25,7.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,20.5,15.7), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFAFA").s().p("AhmAfQAAgsAhggQAfggAsAAQAfAAAaAQQAaAPAOAaQhsAuhWA0QgLgWAAgZg");
	this.shape_1.setTransform(10.25,7.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,20.5,15.7), null);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFAFA").s().p("AhmAfQAAgsAhggQAfggAsAAQAfAAAaAQQAaAPAOAaQhsAuhWA0QgLgWAAgZg");
	this.shape_1.setTransform(10.25,7.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,20.5,15.7), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D3D3B").s().p("AihEXQA8gEAxAAICvgDQAGAAAEgCQALgFAEgKQACgEAAgIIACk2IAEjZQADB4ABBhIACE2QABAIgDAIQgGAQgQAHQgHADgIAAg");
	this.shape.setTransform(16.1875,28.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,32.4,57), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9F9F9").s().p("AihjzQAAgJADgGQAFgPAPgIQAIgDAJAAICuADQAwAAA9ADIkbAHQgHAAgEABQgLAGgEAKQgCAGAAAFIgCE3QgBBggDB5g");
	this.shape.setTransform(16.2,28.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,32.4,57), null);


(lib.FialovaSipkaFialovyKanalAnimace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE26F7").s().p("AgqgxIBVAxIhVAyg");
	this.shape.setTransform(61.075,131.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

	// Vrstva_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FE26F7").ss(0.1).p("AgzqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_1.setTransform(27.525,65.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FE26F7").ss(0.2).p("AgzqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_2.setTransform(27.525,65.5);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FE26F7").ss(0.3).p("AgzqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_3.setTransform(27.525,65.5);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FE26F7").ss(0.4).p("AgzqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_4.setTransform(27.525,65.5);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FE26F7").ss(0.5).p("AgzqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_5.setTransform(27.525,65.5);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FE26F7").ss(0.6).p("AgzqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_6.setTransform(27.525,65.5);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FE26F7").ss(0.7).p("AgzqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_7.setTransform(27.525,65.5);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FE26F7").ss(0.8).p("AgzqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_8.setTransform(27.525,65.5);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FE26F7").ss(0.9).p("AgzqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_9.setTransform(27.525,65.5);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FE26F7").p("AgzqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_10.setTransform(27.525,65.5);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FE26F7").ss(1.1).p("AgzqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_11.setTransform(27.5108,65.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FE26F7").ss(1.1).p("AgyqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_12.setTransform(27.4986,65.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FE26F7").ss(1.2).p("AgyqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_13.setTransform(27.4863,65.5);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FE26F7").ss(1.3).p("AgyqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_14.setTransform(27.4618,65.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FE26F7").ss(1.3).p("AgyqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_15.setTransform(27.4495,65.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FE26F7").ss(1.4).p("AgyqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_16.setTransform(27.4373,65.5);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FE26F7").ss(1.5).p("AgyqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_17.setTransform(27.4066,65.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FE26F7").ss(1.5).p("AgxqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_18.setTransform(27.3943,65.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FE26F7").ss(1.6).p("AgxqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_19.setTransform(27.3821,65.5);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FE26F7").ss(1.7).p("AgxqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_20.setTransform(27.3575,65.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FE26F7").ss(1.7).p("AgxqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_21.setTransform(27.3453,65.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FE26F7").ss(1.8).p("AgxqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_22.setTransform(27.333,65.5);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FE26F7").ss(1.9).p("AgxqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_23.setTransform(27.3085,65.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FE26F7").ss(1.9).p("AgwqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_24.setTransform(27.2962,65.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FE26F7").ss(2).p("AgwqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_25.setTransform(27.284,65.5);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FE26F7").ss(2.1).p("AgwqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_26.setTransform(27.2594,65.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FE26F7").ss(2.1).p("AgwqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_27.setTransform(27.2472,65.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FE26F7").ss(2.2).p("AgwqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_28.setTransform(27.2349,65.5);
	this.shape_28._off = true;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FE26F7").ss(2.3).p("AgwqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_29.setTransform(27.2104,65.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FE26F7").ss(2.3).p("AgvqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_30.setTransform(27.1981,65.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FE26F7").ss(2.4).p("AgvqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_31.setTransform(27.1858,65.5);
	this.shape_31._off = true;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FE26F7").ss(2.5).p("AgvqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_32.setTransform(27.1613,65.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FE26F7").ss(2.5).p("AgvqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_33.setTransform(27.1491,65.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FE26F7").ss(2.6).p("AgvqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_34.setTransform(27.1368,65.5);
	this.shape_34._off = true;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FE26F7").ss(2.7).p("AgvqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_35.setTransform(27.1123,65.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FE26F7").ss(2.7).p("AguqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_36.setTransform(27.0939,65.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FE26F7").ss(2.8).p("AguqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_37.setTransform(27.0816,65.5);
	this.shape_37._off = true;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FE26F7").ss(2.9).p("AguqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_38.setTransform(27.0571,65.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FE26F7").ss(2.9).p("AguqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_39.setTransform(27.0448,65.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FE26F7").ss(3).p("AguqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_40.setTransform(27.0325,65.5);
	this.shape_40._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FE26F7").ss(3.1).p("AguqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_41.setTransform(27.008,65.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FE26F7").ss(3.1).p("AgtqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_42.setTransform(26.9958,65.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FE26F7").ss(3.2).p("AgtqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_43.setTransform(26.9835,65.5);
	this.shape_43._off = true;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FE26F7").ss(3.3).p("AgtqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_44.setTransform(26.959,65.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FE26F7").ss(3.3).p("AgtqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_45.setTransform(26.9467,65.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FE26F7").ss(3.4).p("AgtqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_46.setTransform(26.9344,65.5);
	this.shape_46._off = true;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FE26F7").ss(3.5).p("AgtqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_47.setTransform(26.9099,65.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FE26F7").ss(3.5).p("AgsqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_48.setTransform(26.8976,65.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FE26F7").ss(3.6).p("AgsqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_49.setTransform(26.8854,65.5);
	this.shape_49._off = true;

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FE26F7").ss(3.7).p("AgsqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_50.setTransform(26.8608,65.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FE26F7").ss(3.7).p("AgsqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_51.setTransform(26.8486,65.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FE26F7").ss(3.8).p("AgsqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_52.setTransform(26.8363,65.5);
	this.shape_52._off = true;

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FE26F7").ss(3.9).p("AgsqTIh+AAQgzAAgkAkQglAkAAAzIAAQxQAAAzAlAkQAkAkAzAAIHkAA");
	this.shape_53.setTransform(26.8118,65.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FE26F7").ss(3.9).p("AgrqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_54.setTransform(26.7995,65.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FE26F7").ss(4).p("AgrqTIh/AAQgzAAgkAkQgkAkAAAzIAAQxQAAAzAkAkQAkAkAzAAIHkAA");
	this.shape_55.setTransform(26.7873,65.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{x:27.5108}}]},1).to({state:[{t:this.shape_11,p:{x:27.5047}}]},1).to({state:[{t:this.shape_12,p:{x:27.4986}}]},1).to({state:[{t:this.shape_12,p:{x:27.4925}}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14,p:{x:27.4618}}]},1).to({state:[{t:this.shape_14,p:{x:27.4557}}]},1).to({state:[{t:this.shape_15,p:{x:27.4495}}]},1).to({state:[{t:this.shape_15,p:{x:27.4434}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17,p:{x:27.4066}}]},1).to({state:[{t:this.shape_17,p:{x:27.4005}}]},1).to({state:[{t:this.shape_18,p:{x:27.3943}}]},1).to({state:[{t:this.shape_18,p:{x:27.3882}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20,p:{x:27.3575}}]},1).to({state:[{t:this.shape_20,p:{x:27.3514}}]},1).to({state:[{t:this.shape_21,p:{x:27.3453}}]},1).to({state:[{t:this.shape_21,p:{x:27.3392}}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23,p:{x:27.3085}}]},1).to({state:[{t:this.shape_23,p:{x:27.3024}}]},1).to({state:[{t:this.shape_24,p:{x:27.2962}}]},1).to({state:[{t:this.shape_24,p:{x:27.2901}}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26,p:{x:27.2594}}]},1).to({state:[{t:this.shape_26,p:{x:27.2533}}]},1).to({state:[{t:this.shape_27,p:{x:27.2472}}]},1).to({state:[{t:this.shape_27,p:{x:27.241}}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29,p:{x:27.2104}}]},1).to({state:[{t:this.shape_29,p:{x:27.2042}}]},1).to({state:[{t:this.shape_30,p:{x:27.1981}}]},1).to({state:[{t:this.shape_30,p:{x:27.192}}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32,p:{x:27.1613}}]},1).to({state:[{t:this.shape_32,p:{x:27.1552}}]},1).to({state:[{t:this.shape_33,p:{x:27.1491}}]},1).to({state:[{t:this.shape_33,p:{x:27.1429}}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35,p:{x:27.1123}}]},1).to({state:[{t:this.shape_35,p:{x:27.1061}}]},1).to({state:[{t:this.shape_35,p:{x:27.1}}]},1).to({state:[{t:this.shape_36,p:{x:27.0939}}]},1).to({state:[{t:this.shape_36,p:{x:27.0877}}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38,p:{x:27.0571}}]},1).to({state:[{t:this.shape_38,p:{x:27.0509}}]},1).to({state:[{t:this.shape_39,p:{x:27.0448}}]},1).to({state:[{t:this.shape_39,p:{x:27.0387}}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41,p:{x:27.008}}]},1).to({state:[{t:this.shape_41,p:{x:27.0019}}]},1).to({state:[{t:this.shape_42,p:{x:26.9958}}]},1).to({state:[{t:this.shape_42,p:{x:26.9896}}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44,p:{x:26.959}}]},1).to({state:[{t:this.shape_44,p:{x:26.9528}}]},1).to({state:[{t:this.shape_45,p:{x:26.9467}}]},1).to({state:[{t:this.shape_45,p:{x:26.9406}}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47,p:{x:26.9099}}]},1).to({state:[{t:this.shape_47,p:{x:26.9038}}]},1).to({state:[{t:this.shape_48,p:{x:26.8976}}]},1).to({state:[{t:this.shape_48,p:{x:26.8915}}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50,p:{x:26.8608}}]},1).to({state:[{t:this.shape_50,p:{x:26.8547}}]},1).to({state:[{t:this.shape_51,p:{x:26.8486}}]},1).to({state:[{t:this.shape_51,p:{x:26.8425}}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53,p:{x:26.8118}}]},1).to({state:[{t:this.shape_53,p:{x:26.8057}}]},1).to({state:[{t:this.shape_54,p:{x:26.7995}}]},1).to({state:[{t:this.shape_54,p:{x:26.7934}}]},1).to({state:[{t:this.shape_55,p:{x:26.7873}}]},1).to({state:[{t:this.shape_55,p:{x:26.7811}}]},1).to({state:[{t:this.shape_55,p:{x:26.775}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3).to({_off:false},0).wait(3).to({_off:true},1).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(7).to({_off:false},0).wait(3).to({_off:true},1).wait(149));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(11).to({_off:false},0).wait(3).to({_off:true},1).wait(145));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(15).to({_off:false},0).wait(3).to({_off:true},1).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(19).to({_off:false},0).wait(3).to({_off:true},1).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(23).to({_off:false},0).wait(3).to({_off:true},1).wait(133));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(27).to({_off:false},0).wait(3).to({_off:true},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(31).to({_off:false},0).wait(3).to({_off:true},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(35).to({_off:false},0).wait(2).to({x:27.5231},0).wait(1).to({x:27.517},0).to({_off:true},1).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(43).to({_off:false},0).wait(1).to({x:27.4802},0).wait(1).to({x:27.4741},0).wait(1).to({x:27.4679},0).to({_off:true},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(51).to({_off:false},0).wait(1).to({x:27.4311},0).wait(1).to({x:27.425},0).wait(1).to({x:27.4189},0).wait(1).to({x:27.4127},0).to({_off:true},1).wait(104));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(60).to({_off:false},0).wait(1).to({x:27.3759},0).wait(1).to({x:27.3698},0).wait(1).to({x:27.3637},0).to({_off:true},1).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(68).to({_off:false},0).wait(1).to({x:27.3269},0).wait(1).to({x:27.3208},0).wait(1).to({x:27.3146},0).to({_off:true},1).wait(88));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(76).to({_off:false},0).wait(1).to({x:27.2778},0).wait(1).to({x:27.2717},0).wait(1).to({x:27.2656},0).to({_off:true},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(84).to({_off:false},0).wait(1).to({x:27.2288},0).wait(1).to({x:27.2226},0).wait(1).to({x:27.2165},0).to({_off:true},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(92).to({_off:false},0).wait(1).to({x:27.1797},0).wait(1).to({x:27.1736},0).wait(1).to({x:27.1675},0).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(100).to({_off:false},0).wait(1).to({x:27.1307},0).wait(1).to({x:27.1245},0).wait(1).to({x:27.1184},0).to({_off:true},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(109).to({_off:false},0).wait(1).to({x:27.0755},0).wait(1).to({x:27.0693},0).wait(1).to({x:27.0632},0).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(117).to({_off:false},0).wait(1).to({x:27.0264},0).wait(1).to({x:27.0203},0).wait(1).to({x:27.0142},0).to({_off:true},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(125).to({_off:false},0).wait(1).to({x:26.9774},0).wait(1).to({x:26.9712},0).wait(1).to({x:26.9651},0).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(133).to({_off:false},0).wait(1).to({x:26.9283},0).wait(1).to({x:26.9222},0).wait(1).to({x:26.916},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(141).to({_off:false},0).wait(1).to({x:26.8792},0).wait(1).to({x:26.8731},0).wait(1).to({x:26.867},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(149).to({_off:false},0).wait(1).to({x:26.8302},0).wait(1).to({x:26.8241},0).wait(1).to({x:26.8179},0).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-2.5,70,139);


(lib.FialovaSipka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3F098E").ss(0.1).p("AD3i0QgzB4iGBeQiDBfi0Aw");
	this.shape.setTransform(25.0399,18.0519);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3F098E").ss(0.1).p("Aj5CxQC0gwCDhfQCGheAzh4");
	this.shape_1.setTransform(25.0399,18.0519);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3F098E").ss(0.2).p("Aj5CxQC0gwCDhfQCGheAzh4");
	this.shape_2.setTransform(25.0399,18.0519);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#3F098E").ss(0.3).p("Aj5CxQC0gwCDhfQCGheAzh4");
	this.shape_3.setTransform(25.0399,18.0519);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#3F098E").ss(0.4).p("Aj5CxQC0gwCDhfQCGheAzh4");
	this.shape_4.setTransform(25.0399,18.0519);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#3F098E").ss(0.5).p("Aj5CxQC0gwCDhfQCGheAzh4");
	this.shape_5.setTransform(25.0399,18.0519);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#3F098E").ss(0.6).p("Aj5CxQC0gwCDhfQCGheAzh4");
	this.shape_6.setTransform(25.0399,18.0519);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#3F098E").ss(0.7).p("Aj5CxQC0gwCDhfQCGheAzh4");
	this.shape_7.setTransform(25.0399,18.0519);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#3F098E").ss(0.8).p("Aj5CxQC0gwCDhfQCGheAzh4");
	this.shape_8.setTransform(25.0399,18.0519);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#3F098E").ss(0.9).p("Aj5CxQC0gwCDhfQCGheAzh4");
	this.shape_9.setTransform(25.0399,18.0519);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#3F098E").p("Aj5CxQC0gwCDhfQCGheAzh4");
	this.shape_10.setTransform(25.0399,18.0519);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#3F098E").p("Aj6CxQC0gwCEhfQCGheAzh4");
	this.shape_11.setTransform(25.0651,18.0561);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#3F098E").ss(1.1).p("Aj6CxQC0gwCEhfQCGheAzh4");
	this.shape_12.setTransform(25.0719,18.0617);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#3F098E").ss(1.2).p("Aj6CxQC0gwCEhfQCGheAzh4");
	this.shape_13.setTransform(25.0925,18.0786);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#3F098E").ss(1.3).p("Aj6CxQC0gwCDhfQCGheAzh4");
	this.shape_14.setTransform(25.1063,18.0899);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#3F098E").ss(1.3).p("Aj6CxQC0gxCDheQCGhfAzh3");
	this.shape_15.setTransform(25.12,18.1012);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#3F098E").ss(1.4).p("Aj6CxQC0gxCDheQCGhfAzh3");
	this.shape_16.setTransform(25.1268,18.1068);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#3F098E").ss(1.5).p("Aj6CxQC0gxCDheQCGhfAzh3");
	this.shape_17.setTransform(25.1474,18.1237);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#3F098E").ss(1.5).p("Aj7CxQC0gxCEheQCGhfAzh3");
	this.shape_18.setTransform(25.1543,18.1293);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#3F098E").ss(1.6).p("Aj7CxQC0gxCEheQCGhfAzh3");
	this.shape_19.setTransform(25.168,18.1406);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#3F098E").ss(1.7).p("Aj7CwQC0gwCEhfQCGheAzh4");
	this.shape_20.setTransform(25.1818,18.1519);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#3F098E").ss(1.8).p("Aj7CwQC0gwCDhfQCGheAzh4");
	this.shape_21.setTransform(25.2023,18.1688);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#3F098E").ss(1.9).p("Aj7CwQC0gwCDhfQCGheAzh4");
	this.shape_22.setTransform(25.2229,18.1857);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#3F098E").ss(2).p("Aj7CwQC0gwCDhfQCGheAzh4");
	this.shape_23.setTransform(25.2367,18.197);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#3F098E").ss(2).p("Aj7CwQC0gxCDheQCGhfAzh3");
	this.shape_24.setTransform(25.2435,18.2026);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#3F098E").ss(2).p("Aj8CwQC0gxCEheQCGhfAzh3");
	this.shape_25.setTransform(25.2504,18.2082);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#3F098E").ss(2.1).p("Aj8CwQC0gxCEheQCGhfAzh3");
	this.shape_26.setTransform(25.2572,18.2139);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#3F098E").ss(2.2).p("Aj8CwQC0gxCEheQCGhfAzh3");
	this.shape_27.setTransform(25.2778,18.2308);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#3F098E").ss(2.3).p("Aj8CwQC0gxCEheQCGhfAzh3");
	this.shape_28.setTransform(25.2916,18.242);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#3F098E").ss(2.3).p("Aj8CvQC0gwCDhfQCGheAzh4");
	this.shape_29.setTransform(25.3053,18.2533);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#3F098E").ss(2.4).p("Aj8CvQC0gwCDhfQCGheAzh4");
	this.shape_30.setTransform(25.3122,18.2589);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#3F098E").ss(2.5).p("Aj8CvQC0gwCDhfQCGheAzh4");
	this.shape_31.setTransform(25.3327,18.2759);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#3F098E").ss(2.6).p("Aj9CvQC0gwCEhfQCGheAzh4");
	this.shape_32.setTransform(25.3533,18.2928);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#3F098E").ss(2.7).p("Aj9CvQC0gxCEheQCGhfAzh3");
	this.shape_33.setTransform(25.3671,18.304);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#3F098E").ss(2.8).p("Aj9CvQC0gxCEheQCGhfAzh3");
	this.shape_34.setTransform(25.3876,18.3209);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#3F098E").ss(2.8).p("Aj9CvQC0gxCDheQCGhfAzh3");
	this.shape_35.setTransform(25.4014,18.3322);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#3F098E").ss(2.9).p("Aj9CvQC0gxCDheQCGhfAzh3");
	this.shape_36.setTransform(25.4082,18.3378);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#3F098E").ss(3).p("Aj9CvQC0gxCDheQCGhfAzh3");
	this.shape_37.setTransform(25.422,18.3491);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#3F098E").ss(3).p("Aj9CuQC0gwCDhfQCGheAzh4");
	this.shape_38.setTransform(25.4288,18.3547);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#3F098E").ss(3.1).p("Aj9CuQC0gwCDhfQCGheAzh4");
	this.shape_39.setTransform(25.4426,18.366);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#3F098E").ss(3.1).p("Aj+CuQC0gwCEhfQCGheAzh4");
	this.shape_40.setTransform(25.4563,18.3773);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#3F098E").ss(3.2).p("Aj+CuQC0gwCEhfQCGheAzh4");
	this.shape_41.setTransform(25.4631,18.3829);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#3F098E").ss(3.3).p("Aj+CuQC0gwCEhfQCGheAzh4");
	this.shape_42.setTransform(25.4769,18.3942);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#3F098E").ss(3.3).p("Aj+CuQC0gxCEheQCGhfAzh3");
	this.shape_43.setTransform(25.4906,18.4055);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#3F098E").ss(3.4).p("Aj+CuQC0gxCEheQCGhfAzh3");
	this.shape_44.setTransform(25.4975,18.4111);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#3F098E").ss(3.4).p("Aj+CuQC0gxCDheQCGhfAzh3");
	this.shape_45.setTransform(25.5043,18.4167);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#3F098E").ss(3.5).p("Aj+CuQC0gxCDheQCGhfAzh3");
	this.shape_46.setTransform(25.5181,18.428);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#3F098E").ss(3.6).p("Aj+CuQC0gxCDheQCGhfAzh3");
	this.shape_47.setTransform(25.5318,18.4393);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#3F098E").ss(3.6).p("Aj+CtQC0gwCDhfQCGheAzh4");
	this.shape_48.setTransform(25.5455,18.4505);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#3F098E").ss(3.7).p("Aj/CtQC0gwCEhfQCGheAzh4");
	this.shape_49.setTransform(25.5524,18.4562);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#3F098E").ss(3.8).p("Aj/CtQC0gwCEhfQCGheAzh4");
	this.shape_50.setTransform(25.573,18.4731);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#3F098E").ss(3.9).p("Aj/CtQC0gwCEhfQCGheAzh4");
	this.shape_51.setTransform(25.5935,18.49);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#3F098E").ss(3.9).p("Aj/CtQC0gwCDhfQCGheAzh4");
	this.shape_52.setTransform(25.6004,18.4956);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#3F098E").ss(4).p("Aj/CtQC0gxCDheQCGhfAzh3");
	this.shape_53.setTransform(25.6073,18.5013);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#3F098E").ss(4.1).p("Aj/CtQC0gxCDheQCGhfAzh3");
	this.shape_54.setTransform(25.6279,18.5182);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#3F098E").ss(4.2).p("Aj/CtQC0gxCDheQCGhfAzh3");
	this.shape_55.setTransform(25.6485,18.5351);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#3F098E").ss(4.2).p("AkACtQC0gxCEheQCGhfAzh3");
	this.shape_56.setTransform(25.6553,18.5407);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#3F098E").ss(4.3).p("AkACtQC0gxCEheQCGhfAzh3");
	this.shape_57.setTransform(25.6622,18.5463);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#3F098E").ss(4.3).p("AkACsQC0gwCEhfQCGheAzh4");
	this.shape_58.setTransform(25.669,18.552);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#3F098E").ss(4.4).p("AkACsQC0gwCEhfQCGheAzh4");
	this.shape_59.setTransform(25.6828,18.5633);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#3F098E").ss(4.5).p("AkACsQC0gwCDhfQCGheAzh4");
	this.shape_60.setTransform(25.7034,18.5802);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#3F098E").ss(4.6).p("AkACsQC0gwCDhfQCGheAzh4");
	this.shape_61.setTransform(25.7171,18.5914);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#3F098E").ss(4.6).p("AkACsQC0gxCDheQCGhfAzh3");
	this.shape_62.setTransform(25.7308,18.6027);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#3F098E").ss(4.7).p("AkACsQC0gxCDheQCGhfAzh3");
	this.shape_63.setTransform(25.7377,18.6083);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#3F098E").ss(4.7).p("AkBCsQC0gxCEheQCGhfAzh3");
	this.shape_64.setTransform(25.7514,18.6196);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#3F098E").ss(4.8).p("AkBCsQC0gxCEheQCGhfAzh3");
	this.shape_65.setTransform(25.7583,18.6252);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#3F098E").ss(4.9).p("AkBCsQC0gxCEheQCGhfAzh3");
	this.shape_66.setTransform(25.7789,18.6422);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#3F098E").ss(5).p("AkBCrQC0gwCEhfQCGheAzh4");
	this.shape_67.setTransform(25.7926,18.6534);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#3F098E").ss(5).p("AkBCrQC0gwCDhfQCGheAzh4");
	this.shape_68.setTransform(25.8063,18.6647);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#3F098E").ss(5.1).p("AkBCrQC0gwCDhfQCGheAzh4");
	this.shape_69.setTransform(25.8132,18.6703);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#3F098E").ss(5.2).p("AkBCrQC0gwCDhfQCGheAzh4");
	this.shape_70.setTransform(25.8338,18.6872);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#3F098E").ss(5.3).p("AkBCrQC0gwCDhfQCGheAzh4");
	this.shape_71.setTransform(25.8475,18.6985);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#3F098E").ss(5.3).p("AkCCrQC0gxCEheQCGhfAzh3");
	this.shape_72.setTransform(25.8543,18.7041);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#3F098E").ss(5.4).p("AkCCrQC0gxCEheQCGhfAzh3");
	this.shape_73.setTransform(25.8681,18.7154);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#3F098E").ss(5.5).p("AkCCrQC0gxCEheQCGhfAzh3");
	this.shape_74.setTransform(25.8887,18.7323);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#3F098E").ss(5.6).p("AkCCrQC0gxCDheQCGhfAzh3");
	this.shape_75.setTransform(25.9024,18.7436);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#3F098E").ss(5.6).p("AkCCqQC0gwCDhfQCGheAzh4");
	this.shape_76.setTransform(25.9161,18.7549);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#3F098E").ss(5.7).p("AkCCqQC0gwCDhfQCGheAzh4");
	this.shape_77.setTransform(25.923,18.7605);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#3F098E").ss(5.8).p("AkCCqQC0gwCDhfQCGheAzh4");
	this.shape_78.setTransform(25.9436,18.7774);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#3F098E").ss(5.8).p("AkDCqQC0gwCEhfQCGheAzh4");
	this.shape_79.setTransform(25.9504,18.783);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#3F098E").ss(5.9).p("AkDCqQC0gwCEhfQCGheAzh4");
	this.shape_80.setTransform(25.9573,18.7887);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#3F098E").ss(6).p("AkDCqQC0gxCEheQCGhfAzh3");
	this.shape_81.setTransform(25.9779,18.8056);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#3F098E").ss(6).p("ADui7QgzB3iGBfQiEBei0Ax");
	this.shape_82.setTransform(25.9848,18.8112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12,p:{x:25.0719,y:18.0617}}]},1).to({state:[{t:this.shape_12,p:{x:25.0788,y:18.0673}}]},1).to({state:[{t:this.shape_12,p:{x:25.0857,y:18.073}}]},1).to({state:[{t:this.shape_13,p:{x:25.0925,y:18.0786}}]},1).to({state:[{t:this.shape_13,p:{x:25.0994,y:18.0842}}]},1).to({state:[{t:this.shape_14,p:{x:25.1063,y:18.0899}}]},1).to({state:[{t:this.shape_14,p:{x:25.1131,y:18.0955}}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{x:25.1268,y:18.1068}}]},1).to({state:[{t:this.shape_16,p:{x:25.1337,y:18.1124}}]},1).to({state:[{t:this.shape_16,p:{x:25.1406,y:18.1181}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18,p:{x:25.1543,y:18.1293}}]},1).to({state:[{t:this.shape_18,p:{x:25.1612,y:18.135}}]},1).to({state:[{t:this.shape_19,p:{x:25.168,y:18.1406}}]},1).to({state:[{t:this.shape_19,p:{x:25.1749,y:18.1462}}]},1).to({state:[{t:this.shape_20,p:{x:25.1818,y:18.1519}}]},1).to({state:[{t:this.shape_20,p:{x:25.1886,y:18.1575}}]},1).to({state:[{t:this.shape_20,p:{x:25.1955,y:18.1631}}]},1).to({state:[{t:this.shape_21,p:{x:25.2023,y:18.1688}}]},1).to({state:[{t:this.shape_21,p:{x:25.2092,y:18.1744}}]},1).to({state:[{t:this.shape_21,p:{x:25.2161,y:18.18}}]},1).to({state:[{t:this.shape_22,p:{x:25.2229,y:18.1857}}]},1).to({state:[{t:this.shape_22,p:{x:25.2298,y:18.1913}}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26,p:{x:25.2572,y:18.2139}}]},1).to({state:[{t:this.shape_26,p:{x:25.2641,y:18.2195}}]},1).to({state:[{t:this.shape_26,p:{x:25.271,y:18.2251}}]},1).to({state:[{t:this.shape_27,p:{x:25.2778,y:18.2308}}]},1).to({state:[{t:this.shape_27,p:{x:25.2847,y:18.2364}}]},1).to({state:[{t:this.shape_28,p:{x:25.2916,y:18.242}}]},1).to({state:[{t:this.shape_28,p:{x:25.2984,y:18.2477}}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30,p:{x:25.3122,y:18.2589}}]},1).to({state:[{t:this.shape_30,p:{x:25.319,y:18.2646}}]},1).to({state:[{t:this.shape_30,p:{x:25.3259,y:18.2702}}]},1).to({state:[{t:this.shape_31,p:{x:25.3327,y:18.2759}}]},1).to({state:[{t:this.shape_31,p:{x:25.3396,y:18.2815}}]},1).to({state:[{t:this.shape_31,p:{x:25.3465,y:18.2871}}]},1).to({state:[{t:this.shape_32,p:{x:25.3533,y:18.2928}}]},1).to({state:[{t:this.shape_32,p:{x:25.3602,y:18.2984}}]},1).to({state:[{t:this.shape_33,p:{x:25.3671,y:18.304}}]},1).to({state:[{t:this.shape_33,p:{x:25.3739,y:18.3097}}]},1).to({state:[{t:this.shape_33,p:{x:25.3808,y:18.3153}}]},1).to({state:[{t:this.shape_34,p:{x:25.3876,y:18.3209}}]},1).to({state:[{t:this.shape_34,p:{x:25.3945,y:18.3266}}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36,p:{x:25.4082,y:18.3378}}]},1).to({state:[{t:this.shape_36,p:{x:25.4151,y:18.3435}}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38,p:{x:25.4288,y:18.3547}}]},1).to({state:[{t:this.shape_38,p:{x:25.4357,y:18.3604}}]},1).to({state:[{t:this.shape_39,p:{x:25.4426,y:18.366}}]},1).to({state:[{t:this.shape_39,p:{x:25.4494,y:18.3717}}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41,p:{x:25.4631,y:18.3829}}]},1).to({state:[{t:this.shape_41,p:{x:25.47,y:18.3886}}]},1).to({state:[{t:this.shape_42,p:{x:25.4769,y:18.3942}}]},1).to({state:[{t:this.shape_42,p:{x:25.4837,y:18.3998}}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45,p:{x:25.5043,y:18.4167}}]},1).to({state:[{t:this.shape_45,p:{x:25.5112,y:18.4224}}]},1).to({state:[{t:this.shape_46,p:{x:25.5181,y:18.428}}]},1).to({state:[{t:this.shape_46,p:{x:25.5249,y:18.4336}}]},1).to({state:[{t:this.shape_47,p:{x:25.5318,y:18.4393}}]},1).to({state:[{t:this.shape_47,p:{x:25.5386,y:18.4449}}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49,p:{x:25.5524,y:18.4562}}]},1).to({state:[{t:this.shape_49,p:{x:25.5592,y:18.4618}}]},1).to({state:[{t:this.shape_49,p:{x:25.5661,y:18.4675}}]},1).to({state:[{t:this.shape_50,p:{x:25.573,y:18.4731}}]},1).to({state:[{t:this.shape_50,p:{x:25.5798,y:18.4787}}]},1).to({state:[{t:this.shape_50,p:{x:25.5867,y:18.4844}}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53,p:{x:25.6073,y:18.5013}}]},1).to({state:[{t:this.shape_53,p:{x:25.6141,y:18.5069}}]},1).to({state:[{t:this.shape_53,p:{x:25.621,y:18.5125}}]},1).to({state:[{t:this.shape_54,p:{x:25.6279,y:18.5182}}]},1).to({state:[{t:this.shape_54,p:{x:25.6347,y:18.5238}}]},1).to({state:[{t:this.shape_54,p:{x:25.6416,y:18.5294}}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58,p:{x:25.669,y:18.552}}]},1).to({state:[{t:this.shape_58,p:{x:25.6759,y:18.5576}}]},1).to({state:[{t:this.shape_59,p:{x:25.6828,y:18.5633}}]},1).to({state:[{t:this.shape_59,p:{x:25.6896,y:18.5689}}]},1).to({state:[{t:this.shape_59,p:{x:25.6965,y:18.5745}}]},1).to({state:[{t:this.shape_60,p:{x:25.7034,y:18.5802}}]},1).to({state:[{t:this.shape_60,p:{x:25.7102,y:18.5858}}]},1).to({state:[{t:this.shape_61,p:{x:25.7171,y:18.5914}}]},1).to({state:[{t:this.shape_61,p:{x:25.7239,y:18.5971}}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63,p:{x:25.7377,y:18.6083}}]},1).to({state:[{t:this.shape_63,p:{x:25.7445,y:18.614}}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65,p:{x:25.7583,y:18.6252}}]},1).to({state:[{t:this.shape_65,p:{x:25.7651,y:18.6309}}]},1).to({state:[{t:this.shape_65,p:{x:25.772,y:18.6365}}]},1).to({state:[{t:this.shape_66,p:{x:25.7789,y:18.6422}}]},1).to({state:[{t:this.shape_66,p:{x:25.7857,y:18.6478}}]},1).to({state:[{t:this.shape_67,p:{x:25.7926,y:18.6534}}]},1).to({state:[{t:this.shape_67,p:{x:25.7994,y:18.6591}}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69,p:{x:25.8132,y:18.6703}}]},1).to({state:[{t:this.shape_69,p:{x:25.82,y:18.676}}]},1).to({state:[{t:this.shape_69,p:{x:25.8269,y:18.6816}}]},1).to({state:[{t:this.shape_70,p:{x:25.8338,y:18.6872}}]},1).to({state:[{t:this.shape_70,p:{x:25.8406,y:18.6929}}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72,p:{x:25.8543,y:18.7041}}]},1).to({state:[{t:this.shape_72,p:{x:25.8612,y:18.7098}}]},1).to({state:[{t:this.shape_73,p:{x:25.8681,y:18.7154}}]},1).to({state:[{t:this.shape_73,p:{x:25.8749,y:18.721}}]},1).to({state:[{t:this.shape_73,p:{x:25.8818,y:18.7267}}]},1).to({state:[{t:this.shape_74,p:{x:25.8887,y:18.7323}}]},1).to({state:[{t:this.shape_74,p:{x:25.8955,y:18.738}}]},1).to({state:[{t:this.shape_75,p:{x:25.9024,y:18.7436}}]},1).to({state:[{t:this.shape_75,p:{x:25.9093,y:18.7492}}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77,p:{x:25.923,y:18.7605}}]},1).to({state:[{t:this.shape_77,p:{x:25.9298,y:18.7661}}]},1).to({state:[{t:this.shape_77,p:{x:25.9367,y:18.7718}}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80,p:{x:25.9573,y:18.7887}}]},1).to({state:[{t:this.shape_80,p:{x:25.9642,y:18.7943}}]},1).to({state:[{t:this.shape_80,p:{x:25.971,y:18.7999}}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,60.2,44.4);


(lib.Cerveny = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#27872F").s().p("An8D+QABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	this.shape.setTransform(50.85,25.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cerveny, new cjs.Rectangle(0,0,101.7,50.9), null);


(lib.CerveneSipkaKos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.1).p("ApzguQAAAlAaAZQAaAaAlAAISTAA");
	this.shape.setTransform(77.775,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(0.2).p("ApzguQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_1.setTransform(77.775,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(0.3).p("ApzguQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_2.setTransform(77.775,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(0.4).p("ApzguQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_3.setTransform(77.775,4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(0.5).p("ApzguQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_4.setTransform(77.775,4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(0.6).p("ApzguQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_5.setTransform(77.775,4.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.7).p("ApzguQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_6.setTransform(77.775,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(0.8).p("ApzguQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_7.setTransform(77.775,4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(0.9).p("ApzguQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_8.setTransform(77.775,4.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").p("ApzguQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_9.setTransform(77.775,4.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(1.1).p("ApzguQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_10.setTransform(77.7588,4.7162);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(1.1).p("ApyguQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_11.setTransform(77.7495,4.7255);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(1.2).p("ApyguQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_12.setTransform(77.731,4.744);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0000").ss(1.2).p("ApygvQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_13.setTransform(77.7217,4.7533);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(1.3).p("ApygvQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_14.setTransform(77.7124,4.7626);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF0000").ss(1.3).p("ApygvQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_15.setTransform(77.6939,4.7811);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF0000").ss(1.4).p("ApygvQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_16.setTransform(77.6846,4.7904);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF0000").ss(1.5).p("ApygvQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_17.setTransform(77.6568,4.8182);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF0000").ss(1.5).p("ApxgvQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_18.setTransform(77.6475,4.8275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF0000").ss(1.6).p("ApxgvQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_19.setTransform(77.6289,4.8461);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF0000").ss(1.6).p("ApxgwQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_20.setTransform(77.6197,4.8553);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF0000").ss(1.7).p("ApxgwQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_21.setTransform(77.6104,4.8646);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(1.7).p("ApxgwQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_22.setTransform(77.5918,4.8832);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF0000").ss(1.8).p("ApxgwQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_23.setTransform(77.5825,4.8925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0000").ss(1.9).p("ApxgwQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_24.setTransform(77.5547,4.9203);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF0000").ss(1.9).p("ApwgwQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_25.setTransform(77.5454,4.9296);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF0000").ss(2).p("ApwgwQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_26.setTransform(77.5362,4.9388);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF0000").ss(2).p("ApwgxQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_27.setTransform(77.5176,4.9574);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF0000").ss(2.1).p("ApwgxQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_28.setTransform(77.5083,4.9667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF0000").ss(2.1).p("ApwgxQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_29.setTransform(77.4991,4.9759);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF0000").ss(2.2).p("ApwgxQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_30.setTransform(77.4805,4.9945);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF0000").ss(2.3).p("ApwgxQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_31.setTransform(77.4619,5.0131);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF0000").ss(2.3).p("ApvgxQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_32.setTransform(77.4434,5.0316);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF0000").ss(2.4).p("ApvgxQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_33.setTransform(77.4341,5.0409);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0000").ss(2.4).p("ApvgyQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_34.setTransform(77.4248,5.0502);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF0000").ss(2.5).p("ApvgyQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_35.setTransform(77.4063,5.0687);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF0000").ss(2.5).p("ApvgyQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_36.setTransform(77.397,5.078);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF0000").ss(2.6).p("ApvgyQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_37.setTransform(77.3785,5.0965);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF0000").ss(2.7).p("ApvgyQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_38.setTransform(77.3599,5.1151);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF0000").ss(2.7).p("ApugyQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_39.setTransform(77.3414,5.1336);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF0000").ss(2.8).p("ApugyQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_40.setTransform(77.3321,5.1429);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF0000").ss(2.8).p("ApugzQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_41.setTransform(77.3228,5.1522);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF0000").ss(2.9).p("ApugzQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_42.setTransform(77.3042,5.1708);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF0000").ss(2.9).p("ApugzQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_43.setTransform(77.295,5.18);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF0000").ss(3).p("ApugzQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_44.setTransform(77.2857,5.1893);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF0000").ss(3.1).p("ApugzQAAAlAaAZQAaAaAlAAISTAA");
	this.shape_45.setTransform(77.2579,5.2171);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF0000").ss(3.1).p("AptgzQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_46.setTransform(77.2486,5.2264);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF0000").ss(3.2).p("AptgzQAAAlAaAZQAaAaAlAAISSAA");
	this.shape_47.setTransform(77.23,5.245);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF0000").ss(3.2).p("Aptg0QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_48.setTransform(77.2208,5.2542);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF0000").ss(3.3).p("Aptg0QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_49.setTransform(77.2115,5.2635);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF0000").ss(3.3).p("Aptg0QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_50.setTransform(77.1929,5.2821);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF0000").ss(3.4).p("Aptg0QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_51.setTransform(77.1836,5.2914);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF0000").ss(3.5).p("Aptg0QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_52.setTransform(77.1558,5.3192);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF0000").ss(3.5).p("Apsg0QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_53.setTransform(77.1465,5.3285);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF0000").ss(3.6).p("Apsg0QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_54.setTransform(77.1373,5.3377);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF0000").ss(3.6).p("Apsg1QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_55.setTransform(77.1187,5.3563);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF0000").ss(3.7).p("Apsg1QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_56.setTransform(77.1094,5.3656);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF0000").ss(3.7).p("Apsg1QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_57.setTransform(77.0909,5.3841);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF0000").ss(3.8).p("Apsg1QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_58.setTransform(77.0816,5.3934);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF0000").ss(3.9).p("Apsg1QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_59.setTransform(77.0538,5.4212);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF0000").ss(3.9).p("Aprg1QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_60.setTransform(77.0445,5.4305);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF0000").ss(4).p("Aprg1QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_61.setTransform(77.0352,5.4398);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FF0000").ss(4).p("Aprg2QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_62.setTransform(77.0167,5.4583);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FF0000").ss(4.1).p("Aprg2QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_63.setTransform(77.0074,5.4676);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FF0000").ss(4.1).p("Aprg2QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_64.setTransform(76.9981,5.4769);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FF0000").ss(4.2).p("Aprg2QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_65.setTransform(76.9796,5.4954);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FF0000").ss(4.3).p("Aprg2QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_66.setTransform(76.961,5.514);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FF0000").ss(4.3).p("Apqg2QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_67.setTransform(76.9425,5.5325);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FF0000").ss(4.4).p("Apqg2QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_68.setTransform(76.9332,5.5418);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FF0000").ss(4.4).p("Apqg3QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_69.setTransform(76.9239,5.5511);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FF0000").ss(4.5).p("Apqg3QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_70.setTransform(76.9053,5.5697);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FF0000").ss(4.5).p("Apqg3QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_71.setTransform(76.8961,5.5789);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FF0000").ss(4.6).p("Apqg3QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_72.setTransform(76.8868,5.5882);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FF0000").ss(4.7).p("Apqg3QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_73.setTransform(76.859,5.616);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FF0000").ss(4.7).p("Appg3QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_74.setTransform(76.8497,5.6253);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FF0000").ss(4.8).p("Appg3QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_75.setTransform(76.8311,5.6439);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FF0000").ss(4.8).p("Appg4QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_76.setTransform(76.8219,5.6531);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FF0000").ss(4.9).p("Appg4QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_77.setTransform(76.8033,5.6717);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FF0000").ss(4.9).p("Appg4QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_78.setTransform(76.794,5.681);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FF0000").ss(5).p("Appg4QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_79.setTransform(76.7847,5.6903);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FF0000").ss(5.1).p("Appg4QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_80.setTransform(76.7569,5.7181);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FF0000").ss(5.1).p("Apog4QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_81.setTransform(76.7476,5.7274);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FF0000").ss(5.2).p("Apog4QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_82.setTransform(76.7291,5.7459);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FF0000").ss(5.2).p("Apog5QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_83.setTransform(76.7198,5.7552);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FF0000").ss(5.3).p("Apog5QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_84.setTransform(76.7105,5.7645);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FF0000").ss(5.3).p("Apog5QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_85.setTransform(76.692,5.783);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FF0000").ss(5.4).p("Apog5QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_86.setTransform(76.6827,5.7923);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FF0000").ss(5.5).p("Apog5QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_87.setTransform(76.6549,5.8201);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FF0000").ss(5.5).p("Apng5QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_88.setTransform(76.6456,5.8294);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FF0000").ss(5.6).p("Apng5QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_89.setTransform(76.6363,5.8387);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FF0000").ss(5.6).p("Apng6QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_90.setTransform(76.6178,5.8572);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FF0000").ss(5.7).p("Apng6QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_91.setTransform(76.6085,5.8665);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FF0000").ss(5.7).p("Apng6QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_92.setTransform(76.5992,5.8758);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FF0000").ss(5.8).p("Apng6QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_93.setTransform(76.5807,5.8943);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FF0000").ss(5.9).p("Apng6QAAAlAaAZQAaAaAlAAISTAA");
	this.shape_94.setTransform(76.5621,5.9129);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FF0000").ss(5.9).p("Apmg6QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_95.setTransform(76.5436,5.9314);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FF0000").ss(6).p("Apmg6QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_96.setTransform(76.5343,5.9407);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FF0000").ss(6).p("Apmg7QAAAlAaAZQAaAaAlAAISSAA");
	this.shape_97.setTransform(76.525,5.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9,p:{x:77.775,y:4.7}}]},1).to({state:[{t:this.shape_9,p:{x:77.775,y:4.7}}]},1).to({state:[{t:this.shape_9,p:{x:77.7681,y:4.7069}}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{x:77.7495,y:4.7255}}]},1).to({state:[{t:this.shape_11,p:{x:77.7403,y:4.7347}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14,p:{x:77.7124,y:4.7626}}]},1).to({state:[{t:this.shape_14,p:{x:77.7031,y:4.7719}}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{x:77.6846,y:4.7904}}]},1).to({state:[{t:this.shape_16,p:{x:77.6753,y:4.7997}}]},1).to({state:[{t:this.shape_16,p:{x:77.666,y:4.809}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18,p:{x:77.6475,y:4.8275}}]},1).to({state:[{t:this.shape_18,p:{x:77.6382,y:4.8368}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21,p:{x:77.6104,y:4.8646}}]},1).to({state:[{t:this.shape_21,p:{x:77.6011,y:4.8739}}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23,p:{x:77.5825,y:4.8925}}]},1).to({state:[{t:this.shape_23,p:{x:77.5733,y:4.9017}}]},1).to({state:[{t:this.shape_23,p:{x:77.564,y:4.911}}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26,p:{x:77.5362,y:4.9388}}]},1).to({state:[{t:this.shape_26,p:{x:77.5269,y:4.9481}}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29,p:{x:77.4991,y:4.9759}}]},1).to({state:[{t:this.shape_29,p:{x:77.4898,y:4.9852}}]},1).to({state:[{t:this.shape_30,p:{x:77.4805,y:4.9945}}]},1).to({state:[{t:this.shape_30,p:{x:77.4712,y:5.0038}}]},1).to({state:[{t:this.shape_31,p:{x:77.4619,y:5.0131}}]},1).to({state:[{t:this.shape_31,p:{x:77.4527,y:5.0223}}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34,p:{x:77.4248,y:5.0502}}]},1).to({state:[{t:this.shape_34,p:{x:77.4156,y:5.0594}}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36,p:{x:77.397,y:5.078}}]},1).to({state:[{t:this.shape_36,p:{x:77.3877,y:5.0873}}]},1).to({state:[{t:this.shape_37,p:{x:77.3785,y:5.0965}}]},1).to({state:[{t:this.shape_37,p:{x:77.3692,y:5.1058}}]},1).to({state:[{t:this.shape_38,p:{x:77.3599,y:5.1151}}]},1).to({state:[{t:this.shape_38,p:{x:77.3506,y:5.1244}}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41,p:{x:77.3228,y:5.1522}}]},1).to({state:[{t:this.shape_41,p:{x:77.3135,y:5.1615}}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44,p:{x:77.2857,y:5.1893}}]},1).to({state:[{t:this.shape_44,p:{x:77.2764,y:5.1986}}]},1).to({state:[{t:this.shape_44,p:{x:77.2671,y:5.2079}}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46,p:{x:77.2486,y:5.2264}}]},1).to({state:[{t:this.shape_46,p:{x:77.2393,y:5.2357}}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49,p:{x:77.2115,y:5.2635}}]},1).to({state:[{t:this.shape_49,p:{x:77.2022,y:5.2728}}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51,p:{x:77.1836,y:5.2914}}]},1).to({state:[{t:this.shape_51,p:{x:77.1744,y:5.3006}}]},1).to({state:[{t:this.shape_51,p:{x:77.1651,y:5.3099}}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54,p:{x:77.1373,y:5.3377}}]},1).to({state:[{t:this.shape_54,p:{x:77.128,y:5.347}}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56,p:{x:77.1094,y:5.3656}}]},1).to({state:[{t:this.shape_56,p:{x:77.1002,y:5.3748}}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58,p:{x:77.0816,y:5.3934}}]},1).to({state:[{t:this.shape_58,p:{x:77.0723,y:5.4027}}]},1).to({state:[{t:this.shape_58,p:{x:77.0631,y:5.4119}}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61,p:{x:77.0352,y:5.4398}}]},1).to({state:[{t:this.shape_61,p:{x:77.0259,y:5.4491}}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64,p:{x:76.9981,y:5.4769}}]},1).to({state:[{t:this.shape_64,p:{x:76.9888,y:5.4862}}]},1).to({state:[{t:this.shape_65,p:{x:76.9796,y:5.4954}}]},1).to({state:[{t:this.shape_65,p:{x:76.9703,y:5.5047}}]},1).to({state:[{t:this.shape_66,p:{x:76.961,y:5.514}}]},1).to({state:[{t:this.shape_66,p:{x:76.9517,y:5.5233}}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69,p:{x:76.9239,y:5.5511}}]},1).to({state:[{t:this.shape_69,p:{x:76.9146,y:5.5604}}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72,p:{x:76.8868,y:5.5882}}]},1).to({state:[{t:this.shape_72,p:{x:76.8775,y:5.5975}}]},1).to({state:[{t:this.shape_72,p:{x:76.8682,y:5.6068}}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74,p:{x:76.8497,y:5.6253}}]},1).to({state:[{t:this.shape_74,p:{x:76.8404,y:5.6346}}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76,p:{x:76.8219,y:5.6531}}]},1).to({state:[{t:this.shape_76,p:{x:76.8126,y:5.6624}}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79,p:{x:76.7847,y:5.6903}}]},1).to({state:[{t:this.shape_79,p:{x:76.7755,y:5.6995}}]},1).to({state:[{t:this.shape_79,p:{x:76.7662,y:5.7088}}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81,p:{x:76.7476,y:5.7274}}]},1).to({state:[{t:this.shape_81,p:{x:76.7384,y:5.7366}}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84,p:{x:76.7105,y:5.7645}}]},1).to({state:[{t:this.shape_84,p:{x:76.7013,y:5.7737}}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86,p:{x:76.6827,y:5.7923}}]},1).to({state:[{t:this.shape_86,p:{x:76.6734,y:5.8016}}]},1).to({state:[{t:this.shape_86,p:{x:76.6642,y:5.8108}}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89,p:{x:76.6363,y:5.8387}}]},1).to({state:[{t:this.shape_89,p:{x:76.627,y:5.848}}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92,p:{x:76.5992,y:5.8758}}]},1).to({state:[{t:this.shape_92,p:{x:76.5899,y:5.8851}}]},1).to({state:[{t:this.shape_93,p:{x:76.5807,y:5.8943}}]},1).to({state:[{t:this.shape_93,p:{x:76.5714,y:5.9036}}]},1).to({state:[{t:this.shape_94,p:{x:76.5621,y:5.9129}}]},1).to({state:[{t:this.shape_94,p:{x:76.5528,y:5.9222}}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12,-3,132.1,14.9);


(lib.CervenaSipkaZpet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF1E00").ss(0.1).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape.setTransform(68.5,81.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF1E00").ss(0.2).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_1.setTransform(68.5,81.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF1E00").ss(0.3).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_2.setTransform(68.5,81.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF1E00").ss(0.4).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_3.setTransform(68.5,81.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF1E00").ss(0.5).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_4.setTransform(68.5,81.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF1E00").ss(0.6).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_5.setTransform(68.5,81.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF1E00").ss(0.7).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_6.setTransform(68.5,81.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF1E00").ss(0.8).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_7.setTransform(68.5,81.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF1E00").ss(0.9).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_8.setTransform(68.5,81.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF1E00").p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_9.setTransform(68.5,81.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF1E00").ss(1.1).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_10.setTransform(68.5,81.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF1E00").ss(1.2).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_11.setTransform(68.5,81.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF1E00").ss(1.3).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_12.setTransform(68.5,81.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF1E00").ss(1.4).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_13.setTransform(68.5,81.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF1E00").ss(1.5).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_14.setTransform(68.5,81.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF1E00").ss(1.6).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_15.setTransform(68.5,81.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF1E00").ss(1.7).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_16.setTransform(68.5,81.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF1E00").ss(1.8).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_17.setTransform(68.5,81.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF1E00").ss(1.9).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_18.setTransform(68.5,81.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF1E00").ss(2).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_19.setTransform(68.5,81.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF1E00").ss(2.1).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_20.setTransform(68.5,81.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF1E00").ss(2.2).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_21.setTransform(68.5,81.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF1E00").ss(2.3).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_22.setTransform(68.5,81.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF1E00").ss(2.4).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_23.setTransform(68.5,81.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF1E00").ss(2.5).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_24.setTransform(68.5,81.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF1E00").ss(2.6).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_25.setTransform(68.5,81.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF1E00").ss(2.7).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_26.setTransform(68.5,81.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF1E00").ss(2.8).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_27.setTransform(68.5,81.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF1E00").ss(2.9).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_28.setTransform(68.5,81.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF1E00").ss(3).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_29.setTransform(68.5,81.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF1E00").ss(3.1).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_30.setTransform(68.5,81.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF1E00").ss(3.2).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_31.setTransform(68.5,81.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF1E00").ss(3.3).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_32.setTransform(68.5,81.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF1E00").ss(3.4).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_33.setTransform(68.5,81.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF1E00").ss(3.5).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_34.setTransform(68.5,81.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF1E00").ss(3.6).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_35.setTransform(68.5,81.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF1E00").ss(3.7).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_36.setTransform(68.5,81.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF1E00").ss(3.8).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_37.setTransform(68.5,81.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF1E00").ss(3.9).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_38.setTransform(68.5,81.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF1E00").ss(4).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_39.setTransform(68.5,81.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF1E00").ss(4.1).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_40.setTransform(68.5,81.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF1E00").ss(4.2).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_41.setTransform(68.5,81.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF1E00").ss(4.3).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_42.setTransform(68.5,81.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF1E00").ss(4.4).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_43.setTransform(68.5,81.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF1E00").ss(4.5).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_44.setTransform(68.5,81.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF1E00").ss(4.6).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_45.setTransform(68.5,81.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF1E00").ss(4.7).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_46.setTransform(68.5,81.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF1E00").ss(4.8).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_47.setTransform(68.5,81.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF1E00").ss(4.9).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_48.setTransform(68.5,81.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF1E00").ss(5).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_49.setTransform(68.5,81.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF1E00").ss(5.1).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_50.setTransform(68.5,81.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF1E00").ss(5.2).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_51.setTransform(68.5,81.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF1E00").ss(5.3).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_52.setTransform(68.5,81.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF1E00").ss(5.4).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_53.setTransform(68.5,81.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF1E00").ss(5.5).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_54.setTransform(68.5,81.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF1E00").ss(5.6).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_55.setTransform(68.5,81.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF1E00").ss(5.7).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_56.setTransform(68.5,81.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF1E00").ss(5.8).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_57.setTransform(68.5,81.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF1E00").ss(5.9).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_58.setTransform(68.5,81.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF1E00").ss(6).p("AqssuIAABDQAAA2AmAmQAmAnA2AAIOkAAQA/AAA5AYQA3AXAqAqQArArAXA3QAYA5AAA+IAARl");
	this.shape_59.setTransform(68.5,81.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,150.1,169);


(lib.CervenaSipkaFialovyKanalDole = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE0100").s().p("AgqgxIBVAxIhVAyg");
	this.shape.setTransform(104.65,17.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

	// Vrstva_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FE0100").ss(0.1).p("An3haIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_1.setTransform(50.9,9.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FE0100").ss(0.2).p("An3haIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_2.setTransform(50.9,9.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FE0100").ss(0.3).p("An3haIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_3.setTransform(50.9,9.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FE0100").ss(0.4).p("An3haIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_4.setTransform(50.9,9.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FE0100").ss(0.5).p("An3haIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_5.setTransform(50.9,9.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FE0100").ss(0.6).p("An3haIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_6.setTransform(50.9,9.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FE0100").ss(0.7).p("An3haIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_7.setTransform(50.9,9.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FE0100").ss(0.8).p("An3haIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_8.setTransform(50.9,9.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FE0100").ss(0.9).p("An3haIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_9.setTransform(50.9,9.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FE0100").p("An3haIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_10.setTransform(50.9,9.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FE0100").p("An3haIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_11.setTransform(50.8931,9.0819);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FE0100").ss(1.1).p("An3haIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_12.setTransform(50.8838,9.0912);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FE0100").ss(1.1).p("An3haIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_13.setTransform(50.8745,9.1005);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FE0100").ss(1.2).p("An3haIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_14.setTransform(50.856,9.119);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FE0100").ss(1.2).p("An2haIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_15.setTransform(50.8467,9.1283);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FE0100").ss(1.3).p("An2haIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_16.setTransform(50.8374,9.1376);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FE0100").ss(1.3).p("An2hbIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_17.setTransform(50.8189,9.1561);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FE0100").ss(1.4).p("An2hbIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_18.setTransform(50.8096,9.1654);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FE0100").ss(1.4).p("An2hbIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_19.setTransform(50.791,9.184);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FE0100").ss(1.5).p("An2hbIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_20.setTransform(50.7818,9.1932);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FE0100").ss(1.5).p("An2hbIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_21.setTransform(50.7725,9.2025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FE0100").ss(1.6).p("An2hbIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_22.setTransform(50.7539,9.2211);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FE0100").ss(1.6).p("An1hbIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_23.setTransform(50.7447,9.2303);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FE0100").ss(1.7).p("An1hbIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_24.setTransform(50.7354,9.2396);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FE0100").ss(1.7).p("An1hcIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_25.setTransform(50.7168,9.2582);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FE0100").ss(1.8).p("An1hcIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_26.setTransform(50.7075,9.2675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FE0100").ss(1.8).p("An1hcIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_27.setTransform(50.6983,9.2767);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FE0100").ss(1.9).p("An1hcIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_28.setTransform(50.6797,9.2953);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FE0100").ss(1.9).p("An1hcIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_29.setTransform(50.6704,9.3046);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FE0100").ss(2).p("An1hcIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_30.setTransform(50.6612,9.3138);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FE0100").ss(2).p("An0hcIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_31.setTransform(50.6426,9.3324);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FE0100").ss(2.1).p("An0hcIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_32.setTransform(50.6333,9.3417);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FE0100").ss(2.1).p("An0hdIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_33.setTransform(50.6241,9.3509);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FE0100").ss(2.2).p("An0hdIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_34.setTransform(50.6055,9.3695);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FE0100").ss(2.2).p("An0hdIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_35.setTransform(50.5962,9.3788);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FE0100").ss(2.3).p("An0hdIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_36.setTransform(50.5869,9.3881);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FE0100").ss(2.3).p("An0hdIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_37.setTransform(50.5684,9.4066);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FE0100").ss(2.4).p("An0hdIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_38.setTransform(50.5591,9.4159);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FE0100").ss(2.4).p("AnzhdIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_39.setTransform(50.5498,9.4252);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FE0100").ss(2.5).p("AnzhdIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_40.setTransform(50.5313,9.4437);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FE0100").ss(2.5).p("AnzheIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_41.setTransform(50.522,9.453);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FE0100").ss(2.6).p("AnzheIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_42.setTransform(50.5035,9.4715);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FE0100").ss(2.6).p("AnzheIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_43.setTransform(50.4942,9.4808);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FE0100").ss(2.7).p("AnzheIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_44.setTransform(50.4849,9.4901);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FE0100").ss(2.7).p("AnzheIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_45.setTransform(50.4664,9.5086);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FE0100").ss(2.8).p("AnzheIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_46.setTransform(50.4571,9.5179);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FE0100").ss(2.8).p("AnyheIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_47.setTransform(50.4478,9.5272);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FE0100").ss(2.9).p("AnyheIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_48.setTransform(50.4292,9.5458);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FE0100").ss(2.9).p("AnyhfIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_49.setTransform(50.42,9.555);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FE0100").ss(3).p("AnyhfIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_50.setTransform(50.4107,9.5643);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FE0100").ss(3).p("AnyhfIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_51.setTransform(50.3921,9.5829);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FE0100").ss(3.1).p("AnyhfIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_52.setTransform(50.3829,9.5921);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FE0100").ss(3.1).p("AnyhfIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_53.setTransform(50.3736,9.6014);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FE0100").ss(3.2).p("AnyhfIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_54.setTransform(50.355,9.62);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FE0100").ss(3.2).p("AnxhfIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_55.setTransform(50.3458,9.6292);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FE0100").ss(3.3).p("AnxhfIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_56.setTransform(50.3365,9.6385);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FE0100").ss(3.3).p("AnxhgIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_57.setTransform(50.3179,9.6571);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FE0100").ss(3.4).p("AnxhgIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_58.setTransform(50.3086,9.6664);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FE0100").ss(3.4).p("AnxhgIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_59.setTransform(50.2994,9.6756);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FE0100").ss(3.5).p("AnxhgIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_60.setTransform(50.2808,9.6942);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FE0100").ss(3.5).p("AnxhgIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_61.setTransform(50.2715,9.7035);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FE0100").ss(3.6).p("AnxhgIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_62.setTransform(50.2623,9.7127);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FE0100").ss(3.6).p("AnwhgIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_63.setTransform(50.2437,9.7313);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FE0100").ss(3.7).p("AnwhgIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_64.setTransform(50.2344,9.7406);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FE0100").ss(3.7).p("AnwhhIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_65.setTransform(50.2159,9.7591);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FE0100").ss(3.8).p("AnwhhIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_66.setTransform(50.2066,9.7684);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FE0100").ss(3.8).p("AnwhhIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_67.setTransform(50.1973,9.7777);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FE0100").ss(3.9).p("AnwhhIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_68.setTransform(50.1788,9.7962);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FE0100").ss(3.9).p("AnwhhIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_69.setTransform(50.1695,9.8055);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FE0100").ss(4).p("AnwhhIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_70.setTransform(50.1602,9.8148);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FE0100").ss(4).p("AnvhhIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_71.setTransform(50.1417,9.8333);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FE0100").ss(4.1).p("AnvhhIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_72.setTransform(50.1324,9.8426);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FE0100").ss(4.1).p("AnvhiIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_73.setTransform(50.1231,9.8519);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FE0100").ss(4.2).p("AnvhiIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_74.setTransform(50.1046,9.8704);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FE0100").ss(4.2).p("AnvhiIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_75.setTransform(50.0953,9.8797);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FE0100").ss(4.3).p("AnvhiIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_76.setTransform(50.086,9.889);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FE0100").ss(4.3).p("AnvhiIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_77.setTransform(50.0675,9.9075);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FE0100").ss(4.4).p("AnvhiIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_78.setTransform(50.0582,9.9168);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FE0100").ss(4.4).p("AnuhiIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_79.setTransform(50.0489,9.9261);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FE0100").ss(4.5).p("AnuhiIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_80.setTransform(50.0303,9.9447);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FE0100").ss(4.5).p("AnuhjIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_81.setTransform(50.0211,9.9539);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FE0100").ss(4.6).p("AnuhjIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_82.setTransform(50.0118,9.9632);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FE0100").ss(4.6).p("AnuhjIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_83.setTransform(49.9932,9.9818);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FE0100").ss(4.7).p("AnuhjIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_84.setTransform(49.984,9.991);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FE0100").ss(4.7).p("AnuhjIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_85.setTransform(49.9747,10.0003);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FE0100").ss(4.8).p("AnuhjIAAAvQAAA0AmAmQAmAmA2AAINyAA");
	this.shape_86.setTransform(49.9561,10.0189);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FE0100").ss(4.8).p("AnthjIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_87.setTransform(49.9469,10.0281);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FE0100").ss(4.9).p("AnthjIAAAvQAAA0AmAmQAmAmA1AAINzAA");
	this.shape_88.setTransform(49.9283,10.0467);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FE0100").ss(4.9).p("AnthkIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_89.setTransform(49.919,10.056);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FE0100").ss(5).p("AnthkIAAAvQAAA1AmAmQAmAmA1AAINzAA");
	this.shape_90.setTransform(49.9097,10.0653);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FE0100").ss(5).p("AnthkIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_91.setTransform(49.8912,10.0838);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FE0100").ss(5.1).p("AnthkIAAAvQAAA1AmAmQAmAmA2AAINyAA");
	this.shape_92.setTransform(49.8819,10.0931);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FE0100").ss(5.1).p("AnthkIAAAvQAAA1AmAlQAmAmA2AAINyAA");
	this.shape_93.setTransform(49.8726,10.1024);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FE0100").ss(5.2).p("AnthkIAAAvQAAA1AmAlQAmAmA2AAINyAA");
	this.shape_94.setTransform(49.8541,10.1209);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FE0100").ss(5.2).p("AnshkIAAAvQAAA1AmAlQAmAmA1AAINzAA");
	this.shape_95.setTransform(49.8448,10.1302);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FE0100").ss(5.3).p("AnshkIAAAvQAAA1AmAlQAmAmA1AAINzAA");
	this.shape_96.setTransform(49.8355,10.1395);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FE0100").ss(5.3).p("AnshlIAAAvQAAA2AmAlQAmAmA1AAINzAA");
	this.shape_97.setTransform(49.817,10.158);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FE0100").ss(5.4).p("AnshlIAAAvQAAA2AmAlQAmAmA1AAINzAA");
	this.shape_98.setTransform(49.8077,10.1673);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FE0100").ss(5.4).p("AnshlIAAAvQAAA2AmAlQAmAmA2AAINyAA");
	this.shape_99.setTransform(49.7984,10.1766);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FE0100").ss(5.5).p("AnshlIAAAvQAAA2AmAlQAmAmA2AAINyAA");
	this.shape_100.setTransform(49.7799,10.1951);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FE0100").ss(5.5).p("AnshlIAAAvQAAA1AmAlQAmAmA2AAINyAA");
	this.shape_101.setTransform(49.7706,10.2044);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FE0100").ss(5.6).p("AnshlIAAAvQAAA1AmAlQAmAmA2AAINyAA");
	this.shape_102.setTransform(49.7613,10.2137);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FE0100").ss(5.6).p("AnrhlIAAAvQAAA1AmAlQAmAmA1AAINzAA");
	this.shape_103.setTransform(49.7428,10.2322);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FE0100").ss(5.7).p("AnrhlIAAAvQAAA1AmAlQAmAmA1AAINzAA");
	this.shape_104.setTransform(49.7335,10.2415);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FE0100").ss(5.7).p("AnrhmIAAAvQAAA2AmAlQAmAmA1AAINzAA");
	this.shape_105.setTransform(49.7242,10.2508);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FE0100").ss(5.8).p("AnrhmIAAAvQAAA2AmAlQAmAmA1AAINzAA");
	this.shape_106.setTransform(49.7057,10.2693);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FE0100").ss(5.8).p("AnrhmIAAAvQAAA2AmAlQAmAmA2AAINyAA");
	this.shape_107.setTransform(49.6964,10.2786);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FE0100").ss(5.9).p("AnrhmIAAAvQAAA2AmAlQAmAmA2AAINyAA");
	this.shape_108.setTransform(49.6871,10.2879);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FE0100").ss(5.9).p("AnrhmIAAAvQAAA1AmAlQAmAmA2AAINyAA");
	this.shape_109.setTransform(49.6686,10.3064);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FE0100").ss(6).p("AnrhmIAAAvQAAA1AmAlQAmAmA2AAINyAA");
	this.shape_110.setTransform(49.6593,10.3157);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FE0100").ss(6).p("AnrhmIAAAvQAAA1AmAlQAmAmA2AAINzAA");
	this.shape_111.setTransform(49.65,10.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13,p:{x:50.8745,y:9.1005}}]},1).to({state:[{t:this.shape_13,p:{x:50.8653,y:9.1097}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{x:50.8374,y:9.1376}}]},1).to({state:[{t:this.shape_16,p:{x:50.8281,y:9.1469}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18,p:{x:50.8096,y:9.1654}}]},1).to({state:[{t:this.shape_18,p:{x:50.8003,y:9.1747}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21,p:{x:50.7725,y:9.2025}}]},1).to({state:[{t:this.shape_21,p:{x:50.7632,y:9.2118}}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24,p:{x:50.7354,y:9.2396}}]},1).to({state:[{t:this.shape_24,p:{x:50.7261,y:9.2489}}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27,p:{x:50.6983,y:9.2767}}]},1).to({state:[{t:this.shape_27,p:{x:50.689,y:9.286}}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30,p:{x:50.6612,y:9.3138}}]},1).to({state:[{t:this.shape_30,p:{x:50.6519,y:9.3231}}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33,p:{x:50.6241,y:9.3509}}]},1).to({state:[{t:this.shape_33,p:{x:50.6148,y:9.3602}}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36,p:{x:50.5869,y:9.3881}}]},1).to({state:[{t:this.shape_36,p:{x:50.5777,y:9.3973}}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39,p:{x:50.5498,y:9.4252}}]},1).to({state:[{t:this.shape_39,p:{x:50.5406,y:9.4344}}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41,p:{x:50.522,y:9.453}}]},1).to({state:[{t:this.shape_41,p:{x:50.5127,y:9.4623}}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44,p:{x:50.4849,y:9.4901}}]},1).to({state:[{t:this.shape_44,p:{x:50.4756,y:9.4994}}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47,p:{x:50.4478,y:9.5272}}]},1).to({state:[{t:this.shape_47,p:{x:50.4385,y:9.5365}}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50,p:{x:50.4107,y:9.5643}}]},1).to({state:[{t:this.shape_50,p:{x:50.4014,y:9.5736}}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53,p:{x:50.3736,y:9.6014}}]},1).to({state:[{t:this.shape_53,p:{x:50.3643,y:9.6107}}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56,p:{x:50.3365,y:9.6385}}]},1).to({state:[{t:this.shape_56,p:{x:50.3272,y:9.6478}}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59,p:{x:50.2994,y:9.6756}}]},1).to({state:[{t:this.shape_59,p:{x:50.2901,y:9.6849}}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62,p:{x:50.2623,y:9.7127}}]},1).to({state:[{t:this.shape_62,p:{x:50.253,y:9.722}}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64,p:{x:50.2344,y:9.7406}}]},1).to({state:[{t:this.shape_64,p:{x:50.2252,y:9.7498}}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67,p:{x:50.1973,y:9.7777}}]},1).to({state:[{t:this.shape_67,p:{x:50.1881,y:9.7869}}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70,p:{x:50.1602,y:9.8148}}]},1).to({state:[{t:this.shape_70,p:{x:50.1509,y:9.8241}}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73,p:{x:50.1231,y:9.8519}}]},1).to({state:[{t:this.shape_73,p:{x:50.1138,y:9.8612}}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76,p:{x:50.086,y:9.889}}]},1).to({state:[{t:this.shape_76,p:{x:50.0767,y:9.8983}}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79,p:{x:50.0489,y:9.9261}}]},1).to({state:[{t:this.shape_79,p:{x:50.0396,y:9.9354}}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82,p:{x:50.0118,y:9.9632}}]},1).to({state:[{t:this.shape_82,p:{x:50.0025,y:9.9725}}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85,p:{x:49.9747,y:10.0003}}]},1).to({state:[{t:this.shape_85,p:{x:49.9654,y:10.0096}}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87,p:{x:49.9469,y:10.0281}}]},1).to({state:[{t:this.shape_87,p:{x:49.9376,y:10.0374}}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90,p:{x:49.9097,y:10.0653}}]},1).to({state:[{t:this.shape_90,p:{x:49.9005,y:10.0745}}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93,p:{x:49.8726,y:10.1024}}]},1).to({state:[{t:this.shape_93,p:{x:49.8634,y:10.1116}}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96,p:{x:49.8355,y:10.1395}}]},1).to({state:[{t:this.shape_96,p:{x:49.8263,y:10.1487}}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99,p:{x:49.7984,y:10.1766}}]},1).to({state:[{t:this.shape_99,p:{x:49.7892,y:10.1858}}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102,p:{x:49.7613,y:10.2137}}]},1).to({state:[{t:this.shape_102,p:{x:49.752,y:10.223}}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105,p:{x:49.7242,y:10.2508}}]},1).to({state:[{t:this.shape_105,p:{x:49.7149,y:10.2601}}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108,p:{x:49.6871,y:10.2879}}]},1).to({state:[{t:this.shape_108,p:{x:49.6778,y:10.2972}}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-3,111.5,25.6);


(lib.CervenaSipka9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.1).p("AlNAAIKbAA");
	this.shape.setTransform(40.575,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(0.2).p("AlNAAIKbAA");
	this.shape_1.setTransform(40.575,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(0.3).p("AlNAAIKbAA");
	this.shape_2.setTransform(40.575,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(0.4).p("AlNAAIKbAA");
	this.shape_3.setTransform(40.575,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(0.5).p("AlNAAIKbAA");
	this.shape_4.setTransform(40.575,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(0.6).p("AlNAAIKbAA");
	this.shape_5.setTransform(40.575,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.7).p("AlNAAIKbAA");
	this.shape_6.setTransform(40.575,5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(0.8).p("AlNAAIKbAA");
	this.shape_7.setTransform(40.575,5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(0.9).p("AlNAAIKbAA");
	this.shape_8.setTransform(40.575,5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").p("AlNAAIKbAA");
	this.shape_9.setTransform(40.575,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(1.1).p("AlNAAIKbAA");
	this.shape_10.setTransform(40.575,5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(1.2).p("AlNAAIKbAA");
	this.shape_11.setTransform(40.575,5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(1.3).p("AlNAAIKbAA");
	this.shape_12.setTransform(40.575,5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0000").ss(1.4).p("AlNAAIKbAA");
	this.shape_13.setTransform(40.575,5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(1.5).p("AlNAAIKbAA");
	this.shape_14.setTransform(40.575,5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF0000").ss(1.6).p("AlNAAIKbAA");
	this.shape_15.setTransform(40.575,5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF0000").ss(1.7).p("AlNAAIKbAA");
	this.shape_16.setTransform(40.575,5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF0000").ss(1.8).p("AlNAAIKbAA");
	this.shape_17.setTransform(40.575,5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF0000").ss(1.9).p("AlNAAIKbAA");
	this.shape_18.setTransform(40.575,5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF0000").ss(2).p("AlNAAIKbAA");
	this.shape_19.setTransform(40.575,5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF0000").ss(2.1).p("AlNAAIKbAA");
	this.shape_20.setTransform(40.575,5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF0000").ss(2.2).p("AlNAAIKbAA");
	this.shape_21.setTransform(40.575,5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(2.3).p("AlNAAIKbAA");
	this.shape_22.setTransform(40.575,5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF0000").ss(2.4).p("AlNAAIKbAA");
	this.shape_23.setTransform(40.575,5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0000").ss(2.5).p("AlNAAIKbAA");
	this.shape_24.setTransform(40.575,5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF0000").ss(2.6).p("AlNAAIKbAA");
	this.shape_25.setTransform(40.575,5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF0000").ss(2.7).p("AlNAAIKbAA");
	this.shape_26.setTransform(40.575,5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF0000").ss(2.8).p("AlNAAIKbAA");
	this.shape_27.setTransform(40.575,5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF0000").ss(2.9).p("AlNAAIKbAA");
	this.shape_28.setTransform(40.575,5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF0000").ss(3).p("AlNAAIKbAA");
	this.shape_29.setTransform(40.575,5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF0000").ss(3.1).p("AlNAAIKbAA");
	this.shape_30.setTransform(40.575,5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF0000").ss(3.2).p("AlNAAIKbAA");
	this.shape_31.setTransform(40.575,5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF0000").ss(3.3).p("AlNAAIKbAA");
	this.shape_32.setTransform(40.575,5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF0000").ss(3.4).p("AlNAAIKbAA");
	this.shape_33.setTransform(40.575,5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0000").ss(3.5).p("AlNAAIKbAA");
	this.shape_34.setTransform(40.575,5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF0000").ss(3.6).p("AlNAAIKbAA");
	this.shape_35.setTransform(40.575,5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF0000").ss(3.7).p("AlNAAIKbAA");
	this.shape_36.setTransform(40.575,5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF0000").ss(3.8).p("AlNAAIKbAA");
	this.shape_37.setTransform(40.575,5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF0000").ss(3.9).p("AlNAAIKbAA");
	this.shape_38.setTransform(40.575,5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF0000").ss(4).p("AlNAAIKbAA");
	this.shape_39.setTransform(40.575,5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF0000").ss(4.1).p("AlNAAIKbAA");
	this.shape_40.setTransform(40.575,5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF0000").ss(4.2).p("AlNAAIKbAA");
	this.shape_41.setTransform(40.575,5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF0000").ss(4.3).p("AlNAAIKbAA");
	this.shape_42.setTransform(40.575,5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF0000").ss(4.4).p("AlNAAIKbAA");
	this.shape_43.setTransform(40.575,5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF0000").ss(4.5).p("AlNAAIKbAA");
	this.shape_44.setTransform(40.575,5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF0000").ss(4.6).p("AlNAAIKbAA");
	this.shape_45.setTransform(40.575,5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF0000").ss(4.7).p("AlNAAIKbAA");
	this.shape_46.setTransform(40.575,5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF0000").ss(4.8).p("AlNAAIKbAA");
	this.shape_47.setTransform(40.575,5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF0000").ss(4.9).p("AlNAAIKbAA");
	this.shape_48.setTransform(40.575,5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF0000").ss(5).p("AlNAAIKbAA");
	this.shape_49.setTransform(40.575,5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF0000").ss(5.1).p("AlNAAIKbAA");
	this.shape_50.setTransform(40.575,5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF0000").ss(5.2).p("AlNAAIKbAA");
	this.shape_51.setTransform(40.575,5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF0000").ss(5.3).p("AlNAAIKbAA");
	this.shape_52.setTransform(40.575,5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF0000").ss(5.4).p("AlNAAIKbAA");
	this.shape_53.setTransform(40.575,5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF0000").ss(5.5).p("AlNAAIKbAA");
	this.shape_54.setTransform(40.575,5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF0000").ss(5.6).p("AlNAAIKbAA");
	this.shape_55.setTransform(40.575,5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF0000").ss(5.7).p("AlNAAIKbAA");
	this.shape_56.setTransform(40.575,5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF0000").ss(5.8).p("AlNAAIKbAA");
	this.shape_57.setTransform(40.575,5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF0000").ss(5.9).p("AlNAAIKbAA");
	this.shape_58.setTransform(40.575,5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF0000").ss(6).p("AlNAAIKbAA");
	this.shape_59.setTransform(40.575,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

	// Vrstva_3
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AgqAAIBVgxIAABjg");
	this.shape_60.setTransform(4.3,4.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,10);


(lib.CervenaMasoCelek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.1).p("AmmAAINOAA");
	this.shape.setTransform(42.45,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(0.1).p("AmnAAINPAA");
	this.shape_1.setTransform(42.45,5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(0.2).p("AmnAAINPAA");
	this.shape_2.setTransform(42.45,5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(0.3).p("AmnAAINPAA");
	this.shape_3.setTransform(42.45,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(0.4).p("AmnAAINPAA");
	this.shape_4.setTransform(42.45,5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(0.5).p("AmnAAINPAA");
	this.shape_5.setTransform(42.45,5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.6).p("AmnAAINPAA");
	this.shape_6.setTransform(42.45,5.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(0.7).p("AmnAAINPAA");
	this.shape_7.setTransform(42.45,5.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(0.8).p("AmnAAINPAA");
	this.shape_8.setTransform(42.45,5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(0.9).p("AmnAAINPAA");
	this.shape_9.setTransform(42.45,5.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").p("AmnAAINPAA");
	this.shape_10.setTransform(42.45,5.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(1.1).p("AmnAAINPAA");
	this.shape_11.setTransform(42.45,5.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(1.2).p("AmnAAINPAA");
	this.shape_12.setTransform(42.45,5.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0000").ss(1.3).p("AmnAAINPAA");
	this.shape_13.setTransform(42.45,5.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(1.4).p("AmnAAINPAA");
	this.shape_14.setTransform(42.45,5.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF0000").ss(1.5).p("AmnAAINPAA");
	this.shape_15.setTransform(42.45,5.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF0000").ss(1.6).p("AmnAAINPAA");
	this.shape_16.setTransform(42.45,5.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF0000").ss(1.7).p("AmnAAINPAA");
	this.shape_17.setTransform(42.45,5.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF0000").ss(1.8).p("AmnAAINPAA");
	this.shape_18.setTransform(42.45,5.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF0000").ss(1.9).p("AmnAAINPAA");
	this.shape_19.setTransform(42.45,5.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF0000").ss(2).p("AmnAAINPAA");
	this.shape_20.setTransform(42.45,5.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF0000").ss(2.1).p("AmnAAINPAA");
	this.shape_21.setTransform(42.45,5.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(2.2).p("AmnAAINPAA");
	this.shape_22.setTransform(42.45,5.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF0000").ss(2.3).p("AmnAAINPAA");
	this.shape_23.setTransform(42.45,5.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0000").ss(2.4).p("AmnAAINPAA");
	this.shape_24.setTransform(42.45,5.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF0000").ss(2.5).p("AmnAAINPAA");
	this.shape_25.setTransform(42.45,5.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF0000").ss(2.6).p("AmnAAINPAA");
	this.shape_26.setTransform(42.45,5.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF0000").ss(2.7).p("AmnAAINPAA");
	this.shape_27.setTransform(42.45,5.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF0000").ss(2.8).p("AmnAAINPAA");
	this.shape_28.setTransform(42.45,5.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF0000").ss(2.9).p("AmnAAINPAA");
	this.shape_29.setTransform(42.45,5.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF0000").ss(3).p("AmnAAINPAA");
	this.shape_30.setTransform(42.45,5.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF0000").ss(3.1).p("AmnAAINPAA");
	this.shape_31.setTransform(42.45,5.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF0000").ss(3.2).p("AmnAAINPAA");
	this.shape_32.setTransform(42.45,5.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF0000").ss(3.3).p("AmnAAINPAA");
	this.shape_33.setTransform(42.45,5.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0000").ss(3.4).p("AmnAAINPAA");
	this.shape_34.setTransform(42.45,5.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF0000").ss(3.5).p("AmnAAINPAA");
	this.shape_35.setTransform(42.45,5.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF0000").ss(3.6).p("AmnAAINPAA");
	this.shape_36.setTransform(42.45,5.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF0000").ss(3.7).p("AmnAAINPAA");
	this.shape_37.setTransform(42.45,5.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF0000").ss(3.8).p("AmnAAINPAA");
	this.shape_38.setTransform(42.45,5.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF0000").ss(3.9).p("AmnAAINPAA");
	this.shape_39.setTransform(42.45,5.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF0000").ss(4).p("AmnAAINPAA");
	this.shape_40.setTransform(42.45,5.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF0000").ss(4.1).p("AmnAAINPAA");
	this.shape_41.setTransform(42.45,5.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF0000").ss(4.2).p("AmnAAINPAA");
	this.shape_42.setTransform(42.45,5.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF0000").ss(4.3).p("AmnAAINPAA");
	this.shape_43.setTransform(42.45,5.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF0000").ss(4.4).p("AmnAAINPAA");
	this.shape_44.setTransform(42.45,5.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF0000").ss(4.5).p("AmnAAINPAA");
	this.shape_45.setTransform(42.45,5.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF0000").ss(4.6).p("AmnAAINPAA");
	this.shape_46.setTransform(42.45,5.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF0000").ss(4.7).p("AmnAAINPAA");
	this.shape_47.setTransform(42.45,5.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF0000").ss(4.8).p("AmnAAINPAA");
	this.shape_48.setTransform(42.45,5.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF0000").ss(4.9).p("AmnAAINPAA");
	this.shape_49.setTransform(42.45,5.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF0000").ss(5).p("AmnAAINPAA");
	this.shape_50.setTransform(42.45,5.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF0000").ss(5.1).p("AmnAAINPAA");
	this.shape_51.setTransform(42.45,5.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF0000").ss(5.2).p("AmnAAINPAA");
	this.shape_52.setTransform(42.45,5.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF0000").ss(5.3).p("AmnAAINPAA");
	this.shape_53.setTransform(42.45,5.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF0000").ss(5.4).p("AmnAAINPAA");
	this.shape_54.setTransform(42.45,5.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF0000").ss(5.5).p("AmnAAINPAA");
	this.shape_55.setTransform(42.45,5.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF0000").ss(5.6).p("AmnAAINPAA");
	this.shape_56.setTransform(42.45,5.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF0000").ss(5.7).p("AmnAAINPAA");
	this.shape_57.setTransform(42.45,5.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF0000").ss(5.8).p("AmnAAINPAA");
	this.shape_58.setTransform(42.45,5.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF0000").ss(5.9).p("AmnAAINPAA");
	this.shape_59.setTransform(42.45,5.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF0000").ss(6).p("AmnAAINPAA");
	this.shape_60.setTransform(42.45,5.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF0000").ss(6).p("AmmAAINOAA");
	this.shape_61.setTransform(42.45,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,2.8,90.7,6.000000000000001);


(lib.CervenaKanalCervenySpodni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgqgxIBVAxIhVAyg");
	this.shape.setTransform(20.8764,49.0726,1,1,3.4957);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

	// Vrstva_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(0.1).p("ABlDpIhbgFQgugDgfgjQgfgjADgvIAVlZ");
	this.shape_1.setTransform(7.8768,25.5594);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(0.1).p("AhKjtIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_2.setTransform(7.8768,25.5594);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(0.2).p("AhKjtIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_3.setTransform(7.8768,25.5594);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(0.3).p("AhKjtIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_4.setTransform(7.8768,25.5594);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(0.4).p("AhKjtIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_5.setTransform(7.8768,25.5594);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.5).p("AhKjtIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_6.setTransform(7.8768,25.5594);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(0.6).p("AhKjtIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_7.setTransform(7.8768,25.5594);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(0.7).p("AhKjtIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_8.setTransform(7.8768,25.5594);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(0.8).p("AhKjtIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_9.setTransform(7.8768,25.5594);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(0.9).p("AhKjtIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_10.setTransform(7.8768,25.5594);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").p("AhKjtIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_11.setTransform(7.8768,25.5594);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(1.1).p("AhKjtIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_12.setTransform(7.8615,25.5746);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0000").ss(1.1).p("AhKjtIgVFZQgDAvAfAjQAfAjAuADIBcAF");
	this.shape_13.setTransform(7.8441,25.592);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(1.2).p("AhKjuIgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_14.setTransform(7.8354,25.6007);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF0000").ss(1.3).p("AhKjuIgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_15.setTransform(7.8179,25.6181);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF0000").ss(1.4).p("AhJjuIgVFaQgDAvAfAiQAfAjAuADIBbAG");
	this.shape_16.setTransform(7.7918,25.6442);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF0000").ss(1.4).p("AhJjuIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_17.setTransform(7.7831,25.6529);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF0000").ss(1.5).p("AhJjuIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_18.setTransform(7.7656,25.6703);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF0000").ss(1.5).p("AhJjuIgVFZQgDAvAfAjQAfAjAuADIBcAF");
	this.shape_19.setTransform(7.7482,25.6877);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF0000").ss(1.6).p("AhJjuIgVFZQgDAvAfAjQAfAjAuADIBcAF");
	this.shape_20.setTransform(7.7395,25.6964);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF0000").ss(1.6).p("AhJjvIgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_21.setTransform(7.7307,25.7051);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(1.7).p("AhJjvIgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_22.setTransform(7.722,25.7138);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF0000").ss(1.8).p("AhIjvIgVFaQgDAvAfAiQAfAjAuADIBbAG");
	this.shape_23.setTransform(7.6959,25.7399);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0000").ss(1.8).p("AhIjvIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_24.setTransform(7.6784,25.7573);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF0000").ss(1.9).p("AhIjvIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_25.setTransform(7.6697,25.766);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF0000").ss(2).p("AhIjvIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_26.setTransform(7.6523,25.7834);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF0000").ss(2).p("AhIjvIgVFZQgDAvAfAjQAfAjAuADIBcAF");
	this.shape_27.setTransform(7.6435,25.7921);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF0000").ss(2).p("AhIjwIgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_28.setTransform(7.6348,25.8008);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF0000").ss(2.1).p("AhIjwIgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_29.setTransform(7.6261,25.8095);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF0000").ss(2.2).p("AhHjwIgVFaQgDAvAfAiQAfAjAuADIBbAG");
	this.shape_30.setTransform(7.5999,25.8356);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF0000").ss(2.3).p("AhHjwIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_31.setTransform(7.5825,25.853);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF0000").ss(2.4).p("AhHjwIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_32.setTransform(7.5563,25.8791);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF0000").ss(2.4).p("AhHjwIgVFZQgDAvAfAjQAfAjAuADIBcAF");
	this.shape_33.setTransform(7.5476,25.8878);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0000").ss(2.5).p("AhHjxIgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_34.setTransform(7.5302,25.9052);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF0000").ss(2.6).p("AhHjxIgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_35.setTransform(7.504,25.9313);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF0000").ss(2.6).p("AhGjxIgVFaQgDAvAfAiQAfAjAuADIBbAG");
	this.shape_36.setTransform(7.4953,25.94);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF0000").ss(2.7).p("AhGjxIgVFaQgDAvAfAiQAfAjAuADIBbAG");
	this.shape_37.setTransform(7.4866,25.9487);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF0000").ss(2.7).p("AhGjxIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_38.setTransform(7.4779,25.9574);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF0000").ss(2.8).p("AhGjxIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_39.setTransform(7.4604,25.9748);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF0000").ss(2.8).p("AhGjxIgVFZQgDAvAfAjQAfAjAuADIBcAF");
	this.shape_40.setTransform(7.443,25.9922);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF0000").ss(2.9).p("AhGjyIgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_41.setTransform(7.4343,26.0009);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF0000").ss(3).p("AhGjyIgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_42.setTransform(7.4168,26.0183);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF0000").ss(3).p("AhFjyIgVFaQgDAvAfAiQAfAjAuADIBbAG");
	this.shape_43.setTransform(7.3994,26.0356);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF0000").ss(3.1).p("AhFjyIgVFaQgDAvAfAiQAfAjAuADIBbAG");
	this.shape_44.setTransform(7.3907,26.0443);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF0000").ss(3.1).p("AhFjyIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_45.setTransform(7.3819,26.053);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF0000").ss(3.2).p("AhFjyIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_46.setTransform(7.3645,26.0704);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF0000").ss(3.3).p("AhFjyIgVFZQgDAvAfAjQAfAjAuADIBcAF");
	this.shape_47.setTransform(7.3471,26.0878);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF0000").ss(3.3).p("AhFjzIgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_48.setTransform(7.3296,26.1052);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF0000").ss(3.4).p("AhFjzIgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_49.setTransform(7.3209,26.1139);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF0000").ss(3.5).p("AhEjzIgVFaQgDAvAfAiQAfAjAuADIBbAG");
	this.shape_50.setTransform(7.2947,26.14);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF0000").ss(3.6).p("AhEjzIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_51.setTransform(7.2773,26.1574);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF0000").ss(3.7).p("AhEjzIgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_52.setTransform(7.2511,26.1835);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF0000").ss(3.7).p("AhEjzIgVFZQgDAvAfAjQAfAjAuADIBcAF");
	this.shape_53.setTransform(7.2424,26.1922);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF0000").ss(3.7).p("AhEj0IgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_54.setTransform(7.2337,26.2009);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF0000").ss(3.8).p("AhEj0IgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_55.setTransform(7.225,26.2096);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF0000").ss(3.9).p("AhDj0IgVFaQgDAvAfAiQAfAjAuADIBbAG");
	this.shape_56.setTransform(7.1988,26.2357);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF0000").ss(4).p("AhDj0IgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_57.setTransform(7.1814,26.2531);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF0000").ss(4.1).p("AhDj0IgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_58.setTransform(7.1552,26.2792);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF0000").ss(4.1).p("AhDj0IgVFZQgDAvAfAjQAfAjAuADIBcAF");
	this.shape_59.setTransform(7.1465,26.2879);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF0000").ss(4.2).p("AhDj1IgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_60.setTransform(7.1291,26.3053);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF0000").ss(4.3).p("AhDj1IgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_61.setTransform(7.1116,26.3227);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FF0000").ss(4.3).p("AhCj1IgVFaQgDAvAfAiQAfAjAuADIBbAG");
	this.shape_62.setTransform(7.0942,26.3401);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FF0000").ss(4.4).p("AhCj1IgVFaQgDAvAfAiQAfAjAuADIBbAG");
	this.shape_63.setTransform(7.0855,26.3488);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FF0000").ss(4.4).p("AhCj1IgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_64.setTransform(7.0767,26.3575);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FF0000").ss(4.5).p("AhCj1IgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_65.setTransform(7.0593,26.3749);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FF0000").ss(4.6).p("AhCj1IgVFZQgDAvAfAjQAfAjAuADIBcAF");
	this.shape_66.setTransform(7.0419,26.3923);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FF0000").ss(4.6).p("AhCj2IgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_67.setTransform(7.0331,26.401);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FF0000").ss(4.7).p("AhCj2IgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_68.setTransform(7.0157,26.4184);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FF0000").ss(4.7).p("AhBj2IgVFaQgDAvAfAiQAfAjAuADIBbAG");
	this.shape_69.setTransform(6.9983,26.4358);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FF0000").ss(4.8).p("AhBj2IgVFaQgDAvAfAiQAfAjAuADIBbAG");
	this.shape_70.setTransform(6.9895,26.4445);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FF0000").ss(4.8).p("AhBj2IgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_71.setTransform(6.9808,26.4532);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FF0000").ss(4.9).p("AhBj2IgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_72.setTransform(6.9634,26.4706);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FF0000").ss(5).p("AhBj2IgVFZQgDAvAfAjQAfAjAuADIBcAF");
	this.shape_73.setTransform(6.9459,26.488);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FF0000").ss(5).p("AhBj3IgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_74.setTransform(6.9285,26.5054);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FF0000").ss(5.1).p("AhBj3IgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_75.setTransform(6.9198,26.5141);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FF0000").ss(5.2).p("AhAj3IgVFaQgDAvAfAiQAfAjAuADIBbAG");
	this.shape_76.setTransform(6.8936,26.5402);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FF0000").ss(5.3).p("AhAj3IgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_77.setTransform(6.8762,26.5576);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FF0000").ss(5.4).p("AhAj3IgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_78.setTransform(6.85,26.5837);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FF0000").ss(5.4).p("AhAj3IgVFZQgDAvAfAjQAfAjAuADIBcAF");
	this.shape_79.setTransform(6.8413,26.5924);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FF0000").ss(5.4).p("AhAj4IgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_80.setTransform(6.8326,26.6011);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FF0000").ss(5.5).p("AhAj4IgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_81.setTransform(6.8238,26.6098);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FF0000").ss(5.6).p("AhAj4IgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_82.setTransform(6.8064,26.6272);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FF0000").ss(5.6).p("Ag/j4IgVFaQgDAvAfAiQAfAjAuADIBbAG");
	this.shape_83.setTransform(6.7977,26.6359);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FF0000").ss(5.7).p("Ag/j4IgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_84.setTransform(6.7802,26.6533);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FF0000").ss(5.8).p("Ag/j4IgVFZQgDAvAfAjQAfAjAuADIBbAF");
	this.shape_85.setTransform(6.7541,26.6794);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FF0000").ss(5.8).p("Ag/j4IgVFZQgDAvAfAjQAfAjAuADIBcAF");
	this.shape_86.setTransform(6.7454,26.6881);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FF0000").ss(5.9).p("Ag/j4IgVFZQgDAvAfAjQAfAjAuADIBcAF");
	this.shape_87.setTransform(6.7366,26.6968);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FF0000").ss(5.9).p("Ag/j5IgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_88.setTransform(6.7279,26.7055);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FF0000").ss(6).p("Ag/j5IgVFaQgDAvAfAiQAfAjAuADIBcAG");
	this.shape_89.setTransform(6.7105,26.7229);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FF0000").ss(6).p("ABxDeIhcgGQgugDgfgjQgfgiADgvIAVla");
	this.shape_90.setTransform(6.7018,26.7316);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{x:7.8768,y:25.5594}}]},1).to({state:[{t:this.shape_11,p:{x:7.8768,y:25.5594}}]},1).to({state:[{t:this.shape_11,p:{x:7.8703,y:25.5659}}]},1).to({state:[{t:this.shape_12,p:{x:7.8615,y:25.5746}}]},1).to({state:[{t:this.shape_12,p:{x:7.8528,y:25.5833}}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14,p:{x:7.8354,y:25.6007}}]},1).to({state:[{t:this.shape_14,p:{x:7.8267,y:25.6094}}]},1).to({state:[{t:this.shape_15,p:{x:7.8179,y:25.6181}}]},1).to({state:[{t:this.shape_15,p:{x:7.8092,y:25.6268}}]},1).to({state:[{t:this.shape_15,p:{x:7.8005,y:25.6355}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17,p:{x:7.7831,y:25.6529}}]},1).to({state:[{t:this.shape_17,p:{x:7.7743,y:25.6616}}]},1).to({state:[{t:this.shape_18,p:{x:7.7656,y:25.6703}}]},1).to({state:[{t:this.shape_18,p:{x:7.7569,y:25.679}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22,p:{x:7.722,y:25.7138}}]},1).to({state:[{t:this.shape_22,p:{x:7.7133,y:25.7225}}]},1).to({state:[{t:this.shape_22,p:{x:7.7046,y:25.7312}}]},1).to({state:[{t:this.shape_23,p:{x:7.6959,y:25.7399}}]},1).to({state:[{t:this.shape_23,p:{x:7.6871,y:25.7486}}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25,p:{x:7.6697,y:25.766}}]},1).to({state:[{t:this.shape_25,p:{x:7.661,y:25.7747}}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29,p:{x:7.6261,y:25.8095}}]},1).to({state:[{t:this.shape_29,p:{x:7.6174,y:25.8182}}]},1).to({state:[{t:this.shape_29,p:{x:7.6087,y:25.8269}}]},1).to({state:[{t:this.shape_30,p:{x:7.5999,y:25.8356}}]},1).to({state:[{t:this.shape_30,p:{x:7.5912,y:25.8443}}]},1).to({state:[{t:this.shape_31,p:{x:7.5825,y:25.853}}]},1).to({state:[{t:this.shape_31,p:{x:7.5738,y:25.8617}}]},1).to({state:[{t:this.shape_31,p:{x:7.5651,y:25.8704}}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33,p:{x:7.5476,y:25.8878}}]},1).to({state:[{t:this.shape_33,p:{x:7.5389,y:25.8965}}]},1).to({state:[{t:this.shape_34,p:{x:7.5302,y:25.9052}}]},1).to({state:[{t:this.shape_34,p:{x:7.5215,y:25.9139}}]},1).to({state:[{t:this.shape_34,p:{x:7.5127,y:25.9226}}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38,p:{x:7.4779,y:25.9574}}]},1).to({state:[{t:this.shape_38,p:{x:7.4691,y:25.9661}}]},1).to({state:[{t:this.shape_39,p:{x:7.4604,y:25.9748}}]},1).to({state:[{t:this.shape_39,p:{x:7.4517,y:25.9835}}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41,p:{x:7.4343,y:26.0009}}]},1).to({state:[{t:this.shape_41,p:{x:7.4255,y:26.0096}}]},1).to({state:[{t:this.shape_42,p:{x:7.4168,y:26.0183}}]},1).to({state:[{t:this.shape_42,p:{x:7.4081,y:26.027}}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45,p:{x:7.3819,y:26.053}}]},1).to({state:[{t:this.shape_45,p:{x:7.3732,y:26.0617}}]},1).to({state:[{t:this.shape_46,p:{x:7.3645,y:26.0704}}]},1).to({state:[{t:this.shape_46,p:{x:7.3558,y:26.0791}}]},1).to({state:[{t:this.shape_47,p:{x:7.3471,y:26.0878}}]},1).to({state:[{t:this.shape_47,p:{x:7.3383,y:26.0965}}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49,p:{x:7.3209,y:26.1139}}]},1).to({state:[{t:this.shape_49,p:{x:7.3122,y:26.1226}}]},1).to({state:[{t:this.shape_49,p:{x:7.3035,y:26.1313}}]},1).to({state:[{t:this.shape_50,p:{x:7.2947,y:26.14}}]},1).to({state:[{t:this.shape_50,p:{x:7.286,y:26.1487}}]},1).to({state:[{t:this.shape_51,p:{x:7.2773,y:26.1574}}]},1).to({state:[{t:this.shape_51,p:{x:7.2686,y:26.1661}}]},1).to({state:[{t:this.shape_51,p:{x:7.2599,y:26.1748}}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55,p:{x:7.225,y:26.2096}}]},1).to({state:[{t:this.shape_55,p:{x:7.2163,y:26.2183}}]},1).to({state:[{t:this.shape_55,p:{x:7.2075,y:26.227}}]},1).to({state:[{t:this.shape_56,p:{x:7.1988,y:26.2357}}]},1).to({state:[{t:this.shape_56,p:{x:7.1901,y:26.2444}}]},1).to({state:[{t:this.shape_57,p:{x:7.1814,y:26.2531}}]},1).to({state:[{t:this.shape_57,p:{x:7.1727,y:26.2618}}]},1).to({state:[{t:this.shape_57,p:{x:7.1639,y:26.2705}}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59,p:{x:7.1465,y:26.2879}}]},1).to({state:[{t:this.shape_59,p:{x:7.1378,y:26.2966}}]},1).to({state:[{t:this.shape_60,p:{x:7.1291,y:26.3053}}]},1).to({state:[{t:this.shape_60,p:{x:7.1203,y:26.314}}]},1).to({state:[{t:this.shape_61,p:{x:7.1116,y:26.3227}}]},1).to({state:[{t:this.shape_61,p:{x:7.1029,y:26.3314}}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64,p:{x:7.0767,y:26.3575}}]},1).to({state:[{t:this.shape_64,p:{x:7.068,y:26.3662}}]},1).to({state:[{t:this.shape_65,p:{x:7.0593,y:26.3749}}]},1).to({state:[{t:this.shape_65,p:{x:7.0506,y:26.3836}}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67,p:{x:7.0331,y:26.401}}]},1).to({state:[{t:this.shape_67,p:{x:7.0244,y:26.4097}}]},1).to({state:[{t:this.shape_68,p:{x:7.0157,y:26.4184}}]},1).to({state:[{t:this.shape_68,p:{x:7.007,y:26.4271}}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71,p:{x:6.9808,y:26.4532}}]},1).to({state:[{t:this.shape_71,p:{x:6.9721,y:26.4619}}]},1).to({state:[{t:this.shape_72,p:{x:6.9634,y:26.4706}}]},1).to({state:[{t:this.shape_72,p:{x:6.9546,y:26.4793}}]},1).to({state:[{t:this.shape_73,p:{x:6.9459,y:26.488}}]},1).to({state:[{t:this.shape_73,p:{x:6.9372,y:26.4967}}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75,p:{x:6.9198,y:26.5141}}]},1).to({state:[{t:this.shape_75,p:{x:6.911,y:26.5228}}]},1).to({state:[{t:this.shape_75,p:{x:6.9023,y:26.5315}}]},1).to({state:[{t:this.shape_76,p:{x:6.8936,y:26.5402}}]},1).to({state:[{t:this.shape_76,p:{x:6.8849,y:26.5489}}]},1).to({state:[{t:this.shape_77,p:{x:6.8762,y:26.5576}}]},1).to({state:[{t:this.shape_77,p:{x:6.8674,y:26.5663}}]},1).to({state:[{t:this.shape_77,p:{x:6.8587,y:26.575}}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81,p:{x:6.8238,y:26.6098}}]},1).to({state:[{t:this.shape_81,p:{x:6.8151,y:26.6185}}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83,p:{x:6.7977,y:26.6359}}]},1).to({state:[{t:this.shape_83,p:{x:6.789,y:26.6446}}]},1).to({state:[{t:this.shape_84,p:{x:6.7802,y:26.6533}}]},1).to({state:[{t:this.shape_84,p:{x:6.7715,y:26.662}}]},1).to({state:[{t:this.shape_84,p:{x:6.7628,y:26.6707}}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88,p:{x:6.7279,y:26.7055}}]},1).to({state:[{t:this.shape_88,p:{x:6.7192,y:26.7142}}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-1.2,58,68.7);


(lib.CervenaKanalCervenyHorni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.1).p("AC3jhQilAqhUBdQhnBwgJDQ");
	this.shape.setTransform(17.886,22.5602);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(0.1).p("AiyDmQAJjQBnhwQBUhdClgq");
	this.shape_1.setTransform(17.886,22.5602);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(0.2).p("AiyDmQAJjQBnhwQBUhdClgq");
	this.shape_2.setTransform(17.886,22.5602);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(0.3).p("AiyDmQAJjQBnhwQBUhdClgq");
	this.shape_3.setTransform(17.886,22.5602);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(0.4).p("AiyDmQAJjQBnhwQBUhdClgq");
	this.shape_4.setTransform(17.886,22.5602);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(0.5).p("AiyDmQAJjQBnhwQBUhdClgq");
	this.shape_5.setTransform(17.886,22.5602);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.6).p("AiyDmQAJjQBnhwQBUhdClgq");
	this.shape_6.setTransform(17.886,22.5602);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(0.7).p("AiyDmQAJjQBnhwQBUhdClgq");
	this.shape_7.setTransform(17.886,22.5602);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(0.8).p("AiyDmQAJjQBnhwQBUhdClgq");
	this.shape_8.setTransform(17.886,22.5602);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(0.9).p("AiyDmQAJjQBnhwQBUhdClgq");
	this.shape_9.setTransform(17.886,22.5602);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").p("AiyDmQAJjQBnhwQBUhdClgq");
	this.shape_10.setTransform(17.886,22.5602);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(1.1).p("AiyDnQAJjRBnhwQBUhdClgp");
	this.shape_11.setTransform(17.8737,22.5446);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(1.2).p("AiyDnQAJjRBnhwQBUhdClgp");
	this.shape_12.setTransform(17.8527,22.518);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0000").ss(1.2).p("AixDnQAIjRBohwQBThdClgp");
	this.shape_13.setTransform(17.8457,22.5091);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(1.3).p("AixDnQAIjRBohwQBThdClgp");
	this.shape_14.setTransform(17.8387,22.5002);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF0000").ss(1.3).p("AixDnQAIjQBohwQBThdClgq");
	this.shape_15.setTransform(17.8317,22.4913);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF0000").ss(1.4).p("AixDnQAIjQBohwQBThdClgq");
	this.shape_16.setTransform(17.8176,22.4735);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF0000").ss(1.5).p("AixDoQAJjRBnhwQBUhdClgp");
	this.shape_17.setTransform(17.7966,22.4468);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF0000").ss(1.6).p("AixDoQAJjRBnhwQBUhdClgp");
	this.shape_18.setTransform(17.7755,22.4201);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF0000").ss(1.7).p("AixDoQAJjRBnhwQBUhdClgp");
	this.shape_19.setTransform(17.7615,22.4023);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF0000").ss(1.7).p("AixDoQAJjQBnhwQBUhdClgq");
	this.shape_20.setTransform(17.7545,22.3934);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF0000").ss(1.7).p("AiwDoQAIjQBohwQBThdClgq");
	this.shape_21.setTransform(17.7475,22.3845);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(1.8).p("AiwDoQAIjQBohwQBThdClgq");
	this.shape_22.setTransform(17.7405,22.3756);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF0000").ss(1.9).p("AiwDpQAIjRBohwQBThdClgp");
	this.shape_23.setTransform(17.7194,22.3489);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0000").ss(2).p("AiwDpQAIjRBohwQBThdClgp");
	this.shape_24.setTransform(17.7054,22.3311);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF0000").ss(2).p("AiwDpQAJjRBnhwQBUhdClgp");
	this.shape_25.setTransform(17.6984,22.3222);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF0000").ss(2.1).p("AiwDpQAJjRBnhwQBUhdClgp");
	this.shape_26.setTransform(17.6844,22.3044);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF0000").ss(2.1).p("AiwDpQAJjQBnhwQBUhdClgq");
	this.shape_27.setTransform(17.6773,22.2955);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF0000").ss(2.2).p("AiwDpQAJjQBnhwQBUhdClgq");
	this.shape_28.setTransform(17.6633,22.2777);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF0000").ss(2.3).p("AivDpQAIjQBohwQBThdClgq");
	this.shape_29.setTransform(17.6493,22.2599);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF0000").ss(2.3).p("AivDqQAIjRBohwQBThdClgp");
	this.shape_30.setTransform(17.6353,22.2421);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF0000").ss(2.4).p("AivDqQAIjRBohwQBThdClgp");
	this.shape_31.setTransform(17.6282,22.2332);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF0000").ss(2.5).p("AivDqQAIjRBohwQBThdClgp");
	this.shape_32.setTransform(17.6072,22.2065);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF0000").ss(2.5).p("AivDqQAIjQBohwQBThdClgq");
	this.shape_33.setTransform(17.6002,22.1976);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0000").ss(2.5).p("AivDqQAJjQBnhwQBUhdClgq");
	this.shape_34.setTransform(17.5932,22.1887);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF0000").ss(2.6).p("AivDqQAJjQBnhwQBUhdClgq");
	this.shape_35.setTransform(17.5862,22.1798);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF0000").ss(2.7).p("AivDqQAJjQBnhwQBUhdClgq");
	this.shape_36.setTransform(17.5721,22.162);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF0000").ss(2.7).p("AivDrQAJjRBnhwQBUhdClgp");
	this.shape_37.setTransform(17.5581,22.1442);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF0000").ss(2.8).p("AivDrQAJjRBnhwQBUhdClgp");
	this.shape_38.setTransform(17.5511,22.1353);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF0000").ss(2.8).p("AiuDrQAIjRBohwQBThdClgp");
	this.shape_39.setTransform(17.5441,22.1264);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF0000").ss(2.9).p("AiuDrQAIjRBohwQBThdClgp");
	this.shape_40.setTransform(17.5301,22.1086);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF0000").ss(2.9).p("AiuDrQAIjQBohwQBThdClgq");
	this.shape_41.setTransform(17.523,22.0997);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF0000").ss(3).p("AiuDrQAIjQBohwQBThdClgq");
	this.shape_42.setTransform(17.516,22.0908);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF0000").ss(3.1).p("AiuDrQAJjQBnhwQBUhdClgq");
	this.shape_43.setTransform(17.495,22.0641);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF0000").ss(3.1).p("AiuDsQAJjRBnhwQBUhdClgp");
	this.shape_44.setTransform(17.481,22.0463);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF0000").ss(3.2).p("AiuDsQAJjRBnhwQBUhdClgp");
	this.shape_45.setTransform(17.4739,22.0374);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF0000").ss(3.3).p("AiuDsQAJjRBnhwQBUhdClgp");
	this.shape_46.setTransform(17.4599,22.0196);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF0000").ss(3.3).p("AitDsQAIjRBohwQBThdClgp");
	this.shape_47.setTransform(17.4459,22.0018);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF0000").ss(3.4).p("AitDsQAIjQBohwQBThdClgq");
	this.shape_48.setTransform(17.4389,21.9929);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF0000").ss(3.5).p("AitDsQAIjQBohwQBThdClgq");
	this.shape_49.setTransform(17.4178,21.9662);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF0000").ss(3.6).p("AitDtQAIjRBohwQBThdClgp");
	this.shape_50.setTransform(17.4038,21.9484);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF0000").ss(3.6).p("AitDtQAJjRBnhwQBUhdClgp");
	this.shape_51.setTransform(17.3968,21.9395);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF0000").ss(3.7).p("AitDtQAJjRBnhwQBUhdClgp");
	this.shape_52.setTransform(17.3828,21.9217);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF0000").ss(3.8).p("AitDtQAJjQBnhwQBUhdClgq");
	this.shape_53.setTransform(17.3617,21.895);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF0000").ss(3.8).p("AisDtQAIjQBohwQBThdClgq");
	this.shape_54.setTransform(17.3477,21.8772);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF0000").ss(3.9).p("AisDtQAIjQBohwQBThdClgq");
	this.shape_55.setTransform(17.3407,21.8683);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF0000").ss(4).p("AisDtQAIjQBohwQBThdClgq");
	this.shape_56.setTransform(17.3266,21.8505);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF0000").ss(4).p("AisDuQAIjRBohwQBThdClgp");
	this.shape_57.setTransform(17.3196,21.8416);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF0000").ss(4.1).p("AisDuQAIjRBohwQBThdClgp");
	this.shape_58.setTransform(17.3056,21.8238);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF0000").ss(4.1).p("AisDuQAJjRBnhwQBUhdClgp");
	this.shape_59.setTransform(17.2986,21.8149);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF0000").ss(4.2).p("AisDuQAJjQBnhwQBUhdClgq");
	this.shape_60.setTransform(17.2846,21.7971);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF0000").ss(4.3).p("AisDuQAJjQBnhwQBUhdClgq");
	this.shape_61.setTransform(17.2705,21.7793);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FF0000").ss(4.4).p("AirDuQAIjQBohwQBThdClgq");
	this.shape_62.setTransform(17.2495,21.7526);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FF0000").ss(4.4).p("AirDvQAIjRBohwQBThdClgp");
	this.shape_63.setTransform(17.2425,21.7438);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FF0000").ss(4.5).p("AirDvQAIjRBohwQBThdClgp");
	this.shape_64.setTransform(17.2285,21.726);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FF0000").ss(4.6).p("AirDvQAIjRBohwQBThdClgp");
	this.shape_65.setTransform(17.2144,21.7082);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FF0000").ss(4.6).p("AirDvQAIjQBohwQBThdClgq");
	this.shape_66.setTransform(17.2074,21.6993);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FF0000").ss(4.7).p("AirDvQAJjQBnhwQBUhdClgq");
	this.shape_67.setTransform(17.1934,21.6815);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FF0000").ss(4.8).p("AirDvQAJjQBnhwQBUhdClgq");
	this.shape_68.setTransform(17.1723,21.6548);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FF0000").ss(4.8).p("AirDwQAJjRBnhwQBUhdClgp");
	this.shape_69.setTransform(17.1653,21.6459);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FF0000").ss(4.9).p("AirDwQAJjRBnhwQBUhdClgp");
	this.shape_70.setTransform(17.1513,21.6281);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FF0000").ss(4.9).p("AiqDwQAIjRBohwQBThdClgp");
	this.shape_71.setTransform(17.1443,21.6192);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FF0000").ss(5).p("AiqDwQAIjRBohwQBThdClgp");
	this.shape_72.setTransform(17.1373,21.6103);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FF0000").ss(5).p("AiqDwQAIjQBohwQBThdClgq");
	this.shape_73.setTransform(17.1232,21.5925);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FF0000").ss(5.1).p("AiqDwQAIjQBohwQBThdClgq");
	this.shape_74.setTransform(17.1162,21.5836);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FF0000").ss(5.2).p("AiqDwQAJjQBnhwQBUhdClgq");
	this.shape_75.setTransform(17.0952,21.5569);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FF0000").ss(5.2).p("AiqDxQAJjRBnhwQBUhdClgp");
	this.shape_76.setTransform(17.0882,21.548);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FF0000").ss(5.3).p("AiqDxQAJjRBnhwQBUhdClgp");
	this.shape_77.setTransform(17.0812,21.5391);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FF0000").ss(5.4).p("AiqDxQAJjRBnhwQBUhdClgp");
	this.shape_78.setTransform(17.0601,21.5124);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FF0000").ss(5.4).p("AipDxQAIjQBohwQBThdClgq");
	this.shape_79.setTransform(17.0461,21.4946);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FF0000").ss(5.5).p("AipDxQAIjQBohwQBThdClgq");
	this.shape_80.setTransform(17.0391,21.4857);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FF0000").ss(5.6).p("AipDxQAIjQBohwQBThdClgq");
	this.shape_81.setTransform(17.025,21.4679);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FF0000").ss(5.7).p("AipDyQAIjRBohwQBThdClgp");
	this.shape_82.setTransform(17.004,21.4412);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FF0000").ss(5.7).p("AipDyQAJjRBnhwQBUhdClgp");
	this.shape_83.setTransform(16.997,21.4323);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FF0000").ss(5.8).p("AipDyQAJjRBnhwQBUhdClgp");
	this.shape_84.setTransform(16.983,21.4145);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FF0000").ss(5.9).p("AipDyQAJjQBnhwQBUhdClgq");
	this.shape_85.setTransform(16.9689,21.3967);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FF0000").ss(6).p("AioDyQAIjQBohwQBThdClgq");
	this.shape_86.setTransform(16.9479,21.37);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FF0000").ss(6).p("ADAjVQilAqhTBdQhoBwgIDQ");
	this.shape_87.setTransform(16.9409,21.3611);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10,p:{x:17.886,y:22.5602}}]},1).to({state:[{t:this.shape_10,p:{x:17.886,y:22.5602}}]},1).to({state:[{t:this.shape_10,p:{x:17.8807,y:22.5535}}]},1).to({state:[{t:this.shape_11,p:{x:17.8737,y:22.5446}}]},1).to({state:[{t:this.shape_11,p:{x:17.8667,y:22.5357}}]},1).to({state:[{t:this.shape_11,p:{x:17.8597,y:22.5269}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{x:17.8317,y:22.4913}}]},1).to({state:[{t:this.shape_15,p:{x:17.8246,y:22.4824}}]},1).to({state:[{t:this.shape_16,p:{x:17.8176,y:22.4735}}]},1).to({state:[{t:this.shape_16,p:{x:17.8106,y:22.4646}}]},1).to({state:[{t:this.shape_16,p:{x:17.8036,y:22.4557}}]},1).to({state:[{t:this.shape_17,p:{x:17.7966,y:22.4468}}]},1).to({state:[{t:this.shape_17,p:{x:17.7896,y:22.4379}}]},1).to({state:[{t:this.shape_17,p:{x:17.7826,y:22.429}}]},1).to({state:[{t:this.shape_18,p:{x:17.7755,y:22.4201}}]},1).to({state:[{t:this.shape_18,p:{x:17.7685,y:22.4112}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22,p:{x:17.7405,y:22.3756}}]},1).to({state:[{t:this.shape_22,p:{x:17.7335,y:22.3667}}]},1).to({state:[{t:this.shape_22,p:{x:17.7264,y:22.3578}}]},1).to({state:[{t:this.shape_23,p:{x:17.7194,y:22.3489}}]},1).to({state:[{t:this.shape_23,p:{x:17.7124,y:22.34}}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25,p:{x:17.6984,y:22.3222}}]},1).to({state:[{t:this.shape_25,p:{x:17.6914,y:22.3133}}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27,p:{x:17.6773,y:22.2955}}]},1).to({state:[{t:this.shape_27,p:{x:17.6703,y:22.2866}}]},1).to({state:[{t:this.shape_28,p:{x:17.6633,y:22.2777}}]},1).to({state:[{t:this.shape_28,p:{x:17.6563,y:22.2688}}]},1).to({state:[{t:this.shape_29,p:{x:17.6493,y:22.2599}}]},1).to({state:[{t:this.shape_29,p:{x:17.6423,y:22.251}}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31,p:{x:17.6282,y:22.2332}}]},1).to({state:[{t:this.shape_31,p:{x:17.6212,y:22.2243}}]},1).to({state:[{t:this.shape_31,p:{x:17.6142,y:22.2154}}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35,p:{x:17.5862,y:22.1798}}]},1).to({state:[{t:this.shape_35,p:{x:17.5791,y:22.1709}}]},1).to({state:[{t:this.shape_36,p:{x:17.5721,y:22.162}}]},1).to({state:[{t:this.shape_36,p:{x:17.5651,y:22.1531}}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39,p:{x:17.5441,y:22.1264}}]},1).to({state:[{t:this.shape_39,p:{x:17.5371,y:22.1175}}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42,p:{x:17.516,y:22.0908}}]},1).to({state:[{t:this.shape_42,p:{x:17.509,y:22.0819}}]},1).to({state:[{t:this.shape_42,p:{x:17.502,y:22.073}}]},1).to({state:[{t:this.shape_43,p:{x:17.495,y:22.0641}}]},1).to({state:[{t:this.shape_43,p:{x:17.488,y:22.0552}}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45,p:{x:17.4739,y:22.0374}}]},1).to({state:[{t:this.shape_45,p:{x:17.4669,y:22.0285}}]},1).to({state:[{t:this.shape_46,p:{x:17.4599,y:22.0196}}]},1).to({state:[{t:this.shape_46,p:{x:17.4529,y:22.0107}}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48,p:{x:17.4389,y:21.9929}}]},1).to({state:[{t:this.shape_48,p:{x:17.4319,y:21.984}}]},1).to({state:[{t:this.shape_48,p:{x:17.4248,y:21.9751}}]},1).to({state:[{t:this.shape_49,p:{x:17.4178,y:21.9662}}]},1).to({state:[{t:this.shape_49,p:{x:17.4108,y:21.9573}}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51,p:{x:17.3968,y:21.9395}}]},1).to({state:[{t:this.shape_51,p:{x:17.3898,y:21.9306}}]},1).to({state:[{t:this.shape_52,p:{x:17.3828,y:21.9217}}]},1).to({state:[{t:this.shape_52,p:{x:17.3757,y:21.9128}}]},1).to({state:[{t:this.shape_52,p:{x:17.3687,y:21.9039}}]},1).to({state:[{t:this.shape_53,p:{x:17.3617,y:21.895}}]},1).to({state:[{t:this.shape_53,p:{x:17.3547,y:21.8861}}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55,p:{x:17.3407,y:21.8683}}]},1).to({state:[{t:this.shape_55,p:{x:17.3337,y:21.8594}}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57,p:{x:17.3196,y:21.8416}}]},1).to({state:[{t:this.shape_57,p:{x:17.3126,y:21.8327}}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59,p:{x:17.2986,y:21.8149}}]},1).to({state:[{t:this.shape_59,p:{x:17.2916,y:21.806}}]},1).to({state:[{t:this.shape_60,p:{x:17.2846,y:21.7971}}]},1).to({state:[{t:this.shape_60,p:{x:17.2775,y:21.7882}}]},1).to({state:[{t:this.shape_61,p:{x:17.2705,y:21.7793}}]},1).to({state:[{t:this.shape_61,p:{x:17.2635,y:21.7704}}]},1).to({state:[{t:this.shape_61,p:{x:17.2565,y:21.7615}}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63,p:{x:17.2425,y:21.7438}}]},1).to({state:[{t:this.shape_63,p:{x:17.2355,y:21.7349}}]},1).to({state:[{t:this.shape_64,p:{x:17.2285,y:21.726}}]},1).to({state:[{t:this.shape_64,p:{x:17.2214,y:21.7171}}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66,p:{x:17.2074,y:21.6993}}]},1).to({state:[{t:this.shape_66,p:{x:17.2004,y:21.6904}}]},1).to({state:[{t:this.shape_67,p:{x:17.1934,y:21.6815}}]},1).to({state:[{t:this.shape_67,p:{x:17.1864,y:21.6726}}]},1).to({state:[{t:this.shape_67,p:{x:17.1794,y:21.6637}}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69,p:{x:17.1653,y:21.6459}}]},1).to({state:[{t:this.shape_69,p:{x:17.1583,y:21.637}}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72,p:{x:17.1373,y:21.6103}}]},1).to({state:[{t:this.shape_72,p:{x:17.1303,y:21.6014}}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74,p:{x:17.1162,y:21.5836}}]},1).to({state:[{t:this.shape_74,p:{x:17.1092,y:21.5747}}]},1).to({state:[{t:this.shape_74,p:{x:17.1022,y:21.5658}}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77,p:{x:17.0812,y:21.5391}}]},1).to({state:[{t:this.shape_77,p:{x:17.0741,y:21.5302}}]},1).to({state:[{t:this.shape_77,p:{x:17.0671,y:21.5213}}]},1).to({state:[{t:this.shape_78,p:{x:17.0601,y:21.5124}}]},1).to({state:[{t:this.shape_78,p:{x:17.0531,y:21.5035}}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80,p:{x:17.0391,y:21.4857}}]},1).to({state:[{t:this.shape_80,p:{x:17.0321,y:21.4768}}]},1).to({state:[{t:this.shape_81,p:{x:17.025,y:21.4679}}]},1).to({state:[{t:this.shape_81,p:{x:17.018,y:21.459}}]},1).to({state:[{t:this.shape_81,p:{x:17.011,y:21.4501}}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83,p:{x:16.997,y:21.4323}}]},1).to({state:[{t:this.shape_83,p:{x:16.99,y:21.4234}}]},1).to({state:[{t:this.shape_84,p:{x:16.983,y:21.4145}}]},1).to({state:[{t:this.shape_84,p:{x:16.9759,y:21.4056}}]},1).to({state:[{t:this.shape_85,p:{x:16.9689,y:21.3967}}]},1).to({state:[{t:this.shape_85,p:{x:16.9619,y:21.3878}}]},1).to({state:[{t:this.shape_85,p:{x:16.9549,y:21.3789}}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-10,49,58.6);


(lib.CervenaFialovaSipka2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#570B84","#FF3939"],[0,1],-48.9,0,5.4,0).s().p("Ag1g9IBrA9IhrA+g");
	this.shape.setTransform(61.8,-7.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

	// Vrstva_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32.1,5.7,22.2,5.7).ss(0.1).p("AEukqIn9AAQglAAgaAaQgaAaAAAlIAAIB");
	this.shape_1.setTransform(29.7,22.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32.1,5.7,22.2,5.7).ss(0.1).p("AkoEwIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_2.setTransform(29.7,22.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32.1,5.7,22.2,5.7).ss(0.2).p("AkoEwIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_3.setTransform(29.7,22.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32.1,5.7,22.2,5.7).ss(0.3).p("AkoEwIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_4.setTransform(29.7,22.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32.1,5.7,22.2,5.7).ss(0.4).p("AkoEwIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_5.setTransform(29.7,22.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32.1,5.7,22.2,5.7).ss(0.5).p("AkoEwIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_6.setTransform(29.7,22.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32.1,5.7,22.2,5.7).ss(0.6).p("AkoEwIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_7.setTransform(29.7,22.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32.1,5.7,22.2,5.7).ss(0.7).p("AkoEwIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_8.setTransform(29.7,22.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32.1,5.7,22.2,5.7).ss(0.8).p("AkoEwIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_9.setTransform(29.7,22.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32.1,5.7,22.2,5.7).ss(0.9).p("AkoEwIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_10.setTransform(29.7,22.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32.1,5.7,22.2,5.7).p("AkoEwIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_11.setTransform(29.7,22.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32.1,5.7,22.2,5.7).ss(1.1).p("AkoEwIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_12.setTransform(29.6838,22.6588);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32.1,5.8,22.2,5.8).ss(1.1).p("AkoExIAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_13.setTransform(29.6745,22.6495);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32.1,5.8,22.2,5.8).ss(1.2).p("AkoExIAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_14.setTransform(29.656,22.631);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32,5.8,22.3,5.8).ss(1.2).p("AknExIAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_15.setTransform(29.6467,22.6217);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32,5.8,22.3,5.8).ss(1.3).p("AknExIAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_16.setTransform(29.6374,22.6124);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32,5.8,22.3,5.8).ss(1.3).p("AknExIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_17.setTransform(29.6189,22.5939);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32,5.8,22.3,5.8).ss(1.4).p("AknExIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_18.setTransform(29.6096,22.5846);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32,5.8,22.3,5.8).ss(1.5).p("AknExIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_19.setTransform(29.5818,22.5568);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32,5.9,22.3,5.9).ss(1.5).p("AknEyIAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_20.setTransform(29.5725,22.5475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().ls(["#570B84","#FF3939"],[0,1],-32,5.9,22.3,5.9).ss(1.6).p("AknEyIAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_21.setTransform(29.5539,22.5289);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.9,5.9,22.4,5.9).ss(1.6).p("AkmEyIAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_22.setTransform(29.5447,22.5197);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.9,5.9,22.4,5.9).ss(1.7).p("AkmEyIAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_23.setTransform(29.5354,22.5104);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.9,5.9,22.4,5.9).ss(1.7).p("AkmEyIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_24.setTransform(29.5168,22.4918);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.9,5.9,22.4,5.9).ss(1.8).p("AkmEyIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_25.setTransform(29.5075,22.4825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.9,5.9,22.4,5.9).ss(1.9).p("AkmEyIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_26.setTransform(29.4797,22.4547);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.9,6,22.4,6).ss(1.9).p("AkmEzIAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_27.setTransform(29.4704,22.4454);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.9,6,22.4,6).ss(2).p("AkmEzIAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_28.setTransform(29.4612,22.4362);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.8,6,22.5,6).ss(2).p("AklEzIAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_29.setTransform(29.4426,22.4176);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.8,6,22.5,6).ss(2.1).p("AklEzIAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_30.setTransform(29.4333,22.4083);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.8,6,22.5,6).ss(2.1).p("AklEzIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_31.setTransform(29.4241,22.3991);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.8,6,22.5,6).ss(2.2).p("AklEzIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_32.setTransform(29.4055,22.3805);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.8,6,22.5,6).ss(2.3).p("AklEzIAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_33.setTransform(29.3869,22.3619);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.8,6.1,22.5,6.1).ss(2.3).p("AklE0IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_34.setTransform(29.3684,22.3434);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.8,6.1,22.5,6.1).ss(2.4).p("AklE0IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_35.setTransform(29.3591,22.3341);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.7,6.1,22.6,6.1).ss(2.4).p("AkkE0IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_36.setTransform(29.3498,22.3248);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.7,6.1,22.6,6.1).ss(2.5).p("AkkE0IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_37.setTransform(29.3313,22.3063);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.7,6.1,22.6,6.1).ss(2.5).p("AkkE0IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_38.setTransform(29.322,22.297);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.7,6.1,22.6,6.1).ss(2.6).p("AkkE0IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_39.setTransform(29.3035,22.2785);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.7,6.1,22.6,6.1).ss(2.7).p("AkkE0IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_40.setTransform(29.2849,22.2599);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.7,6.2,22.6,6.2).ss(2.7).p("AkkE1IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_41.setTransform(29.2664,22.2414);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.7,6.2,22.6,6.2).ss(2.8).p("AkkE1IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_42.setTransform(29.2571,22.2321);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.6,6.2,22.7,6.2).ss(2.8).p("AkjE1IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_43.setTransform(29.2478,22.2228);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.6,6.2,22.7,6.2).ss(2.9).p("AkjE1IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_44.setTransform(29.2292,22.2042);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.6,6.2,22.7,6.2).ss(2.9).p("AkjE1IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_45.setTransform(29.22,22.195);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.6,6.2,22.7,6.2).ss(3).p("AkjE1IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_46.setTransform(29.2107,22.1857);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.6,6.2,22.7,6.2).ss(3.1).p("AkjE1IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_47.setTransform(29.1829,22.1579);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.6,6.3,22.7,6.3).ss(3.1).p("AkjE2IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_48.setTransform(29.1736,22.1486);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.6,6.3,22.7,6.3).ss(3.2).p("AkjE2IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_49.setTransform(29.155,22.13);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.5,6.3,22.8,6.3).ss(3.2).p("AkiE2IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_50.setTransform(29.1458,22.1208);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.5,6.3,22.8,6.3).ss(3.3).p("AkiE2IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_51.setTransform(29.1365,22.1115);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.5,6.3,22.8,6.3).ss(3.3).p("AkiE2IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_52.setTransform(29.1179,22.0929);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.5,6.3,22.8,6.3).ss(3.4).p("AkiE2IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_53.setTransform(29.1086,22.0836);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.5,6.3,22.8,6.3).ss(3.5).p("AkiE2IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_54.setTransform(29.0808,22.0558);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.5,6.4,22.8,6.4).ss(3.5).p("AkiE3IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_55.setTransform(29.0715,22.0465);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.5,6.4,22.8,6.4).ss(3.6).p("AkiE3IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_56.setTransform(29.0623,22.0373);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.4,6.4,22.9,6.4).ss(3.6).p("AkhE3IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_57.setTransform(29.0437,22.0187);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.4,6.4,22.9,6.4).ss(3.7).p("AkhE3IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_58.setTransform(29.0344,22.0094);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.4,6.4,22.9,6.4).ss(3.7).p("AkhE3IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_59.setTransform(29.0159,21.9909);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.4,6.4,22.9,6.4).ss(3.8).p("AkhE3IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_60.setTransform(29.0066,21.9816);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.4,6.4,22.9,6.4).ss(3.9).p("AkhE3IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_61.setTransform(28.9788,21.9538);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.4,6.5,22.9,6.5).ss(3.9).p("AkhE4IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_62.setTransform(28.9695,21.9445);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.4,6.5,22.9,6.5).ss(4).p("AkhE4IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_63.setTransform(28.9602,21.9352);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.3,6.5,23,6.5).ss(4).p("AkgE4IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_64.setTransform(28.9417,21.9167);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.3,6.5,23,6.5).ss(4.1).p("AkgE4IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_65.setTransform(28.9324,21.9074);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.3,6.5,23,6.5).ss(4.1).p("AkgE4IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_66.setTransform(28.9231,21.8981);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.3,6.5,23,6.5).ss(4.2).p("AkgE4IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_67.setTransform(28.9046,21.8796);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.3,6.5,23,6.5).ss(4.3).p("AkgE4IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_68.setTransform(28.886,21.861);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.3,6.6,23,6.6).ss(4.3).p("AkgE5IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_69.setTransform(28.8675,21.8425);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.3,6.6,23,6.6).ss(4.4).p("AkgE5IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_70.setTransform(28.8582,21.8332);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.2,6.6,23.1,6.6).ss(4.4).p("AkfE5IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_71.setTransform(28.8489,21.8239);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.2,6.6,23.1,6.6).ss(4.5).p("AkfE5IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_72.setTransform(28.8303,21.8053);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.2,6.6,23.1,6.6).ss(4.5).p("AkfE5IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_73.setTransform(28.8211,21.7961);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.2,6.6,23.1,6.6).ss(4.6).p("AkfE5IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_74.setTransform(28.8118,21.7868);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.2,6.6,23.1,6.6).ss(4.7).p("AkfE5IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_75.setTransform(28.784,21.759);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.2,6.7,23.1,6.7).ss(4.7).p("AkfE6IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_76.setTransform(28.7747,21.7497);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.2,6.7,23.1,6.7).ss(4.8).p("AkfE6IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_77.setTransform(28.7561,21.7311);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.1,6.7,23.2,6.7).ss(4.8).p("AkeE6IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_78.setTransform(28.7469,21.7219);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.1,6.7,23.2,6.7).ss(4.9).p("AkeE6IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_79.setTransform(28.7283,21.7033);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.1,6.7,23.2,6.7).ss(4.9).p("AkeE6IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_80.setTransform(28.719,21.694);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.1,6.7,23.2,6.7).ss(5).p("AkeE6IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_81.setTransform(28.7097,21.6847);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.1,6.7,23.2,6.7).ss(5.1).p("AkeE6IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_82.setTransform(28.6819,21.6569);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.1,6.8,23.2,6.8).ss(5.1).p("AkeE7IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_83.setTransform(28.6726,21.6476);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31.1,6.8,23.2,6.8).ss(5.2).p("AkeE7IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_84.setTransform(28.6541,21.6291);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31,6.8,23.3,6.8).ss(5.2).p("AkdE7IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_85.setTransform(28.6448,21.6198);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31,6.8,23.3,6.8).ss(5.3).p("AkdE7IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_86.setTransform(28.6355,21.6105);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31,6.8,23.3,6.8).ss(5.3).p("AkdE7IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_87.setTransform(28.617,21.592);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31,6.8,23.3,6.8).ss(5.4).p("AkdE7IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_88.setTransform(28.6077,21.5827);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31,6.8,23.3,6.8).ss(5.5).p("AkdE7IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_89.setTransform(28.5799,21.5549);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31,6.9,23.3,6.9).ss(5.5).p("AkdE8IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_90.setTransform(28.5706,21.5456);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().ls(["#570B84","#FF3939"],[0,1],-31,6.9,23.3,6.9).ss(5.6).p("AkdE8IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_91.setTransform(28.5613,21.5363);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().ls(["#570B84","#FF3939"],[0,1],-30.9,6.9,23.4,6.9).ss(5.6).p("AkcE8IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_92.setTransform(28.5428,21.5178);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().ls(["#570B84","#FF3939"],[0,1],-30.9,6.9,23.4,6.9).ss(5.7).p("AkcE8IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_93.setTransform(28.5335,21.5085);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().ls(["#570B84","#FF3939"],[0,1],-30.9,6.9,23.4,6.9).ss(5.7).p("AkcE8IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_94.setTransform(28.5242,21.4992);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().ls(["#570B84","#FF3939"],[0,1],-30.9,6.9,23.4,6.9).ss(5.8).p("AkcE8IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_95.setTransform(28.5057,21.4807);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().ls(["#570B84","#FF3939"],[0,1],-30.9,6.9,23.4,6.9).ss(5.9).p("AkcE8IAAoBQAAglAagaQAagaAlAAIH9AA");
	this.shape_96.setTransform(28.4871,21.4621);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().ls(["#570B84","#FF3939"],[0,1],-30.9,7,23.4,7).ss(5.9).p("AkcE9IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_97.setTransform(28.4686,21.4436);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().ls(["#570B84","#FF3939"],[0,1],-30.9,7,23.4,7).ss(6).p("AkcE9IAAoCQAAglAagaQAagaAlAAIH9AA");
	this.shape_98.setTransform(28.4593,21.4343);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().ls(["#570B84","#FF3939"],[0,1],-30.9,7,23.4,7).ss(6).p("AE7keIn9AAQgmAAgaAaQgaAaAAAlIAAIC");
	this.shape_99.setTransform(28.45,21.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{x:29.7,y:22.675}}]},1).to({state:[{t:this.shape_11,p:{x:29.7,y:22.675}}]},1).to({state:[{t:this.shape_11,p:{x:29.6931,y:22.6681}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13,p:{x:29.6745,y:22.6495}}]},1).to({state:[{t:this.shape_13,p:{x:29.6653,y:22.6403}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{x:29.6374,y:22.6124}}]},1).to({state:[{t:this.shape_16,p:{x:29.6281,y:22.6031}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18,p:{x:29.6096,y:22.5846}}]},1).to({state:[{t:this.shape_18,p:{x:29.6003,y:22.5753}}]},1).to({state:[{t:this.shape_18,p:{x:29.591,y:22.566}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20,p:{x:29.5725,y:22.5475}}]},1).to({state:[{t:this.shape_20,p:{x:29.5632,y:22.5382}}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23,p:{x:29.5354,y:22.5104}}]},1).to({state:[{t:this.shape_23,p:{x:29.5261,y:22.5011}}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25,p:{x:29.5075,y:22.4825}}]},1).to({state:[{t:this.shape_25,p:{x:29.4983,y:22.4733}}]},1).to({state:[{t:this.shape_25,p:{x:29.489,y:22.464}}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28,p:{x:29.4612,y:22.4362}}]},1).to({state:[{t:this.shape_28,p:{x:29.4519,y:22.4269}}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31,p:{x:29.4241,y:22.3991}}]},1).to({state:[{t:this.shape_31,p:{x:29.4148,y:22.3898}}]},1).to({state:[{t:this.shape_32,p:{x:29.4055,y:22.3805}}]},1).to({state:[{t:this.shape_32,p:{x:29.3962,y:22.3712}}]},1).to({state:[{t:this.shape_33,p:{x:29.3869,y:22.3619}}]},1).to({state:[{t:this.shape_33,p:{x:29.3777,y:22.3527}}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36,p:{x:29.3498,y:22.3248}}]},1).to({state:[{t:this.shape_36,p:{x:29.3406,y:22.3156}}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38,p:{x:29.322,y:22.297}}]},1).to({state:[{t:this.shape_38,p:{x:29.3127,y:22.2877}}]},1).to({state:[{t:this.shape_39,p:{x:29.3035,y:22.2785}}]},1).to({state:[{t:this.shape_39,p:{x:29.2942,y:22.2692}}]},1).to({state:[{t:this.shape_40,p:{x:29.2849,y:22.2599}}]},1).to({state:[{t:this.shape_40,p:{x:29.2756,y:22.2506}}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43,p:{x:29.2478,y:22.2228}}]},1).to({state:[{t:this.shape_43,p:{x:29.2385,y:22.2135}}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46,p:{x:29.2107,y:22.1857}}]},1).to({state:[{t:this.shape_46,p:{x:29.2014,y:22.1764}}]},1).to({state:[{t:this.shape_46,p:{x:29.1921,y:22.1671}}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48,p:{x:29.1736,y:22.1486}}]},1).to({state:[{t:this.shape_48,p:{x:29.1643,y:22.1393}}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51,p:{x:29.1365,y:22.1115}}]},1).to({state:[{t:this.shape_51,p:{x:29.1272,y:22.1022}}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53,p:{x:29.1086,y:22.0836}}]},1).to({state:[{t:this.shape_53,p:{x:29.0994,y:22.0744}}]},1).to({state:[{t:this.shape_53,p:{x:29.0901,y:22.0651}}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56,p:{x:29.0623,y:22.0373}}]},1).to({state:[{t:this.shape_56,p:{x:29.053,y:22.028}}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58,p:{x:29.0344,y:22.0094}}]},1).to({state:[{t:this.shape_58,p:{x:29.0252,y:22.0002}}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60,p:{x:29.0066,y:21.9816}}]},1).to({state:[{t:this.shape_60,p:{x:28.9973,y:21.9723}}]},1).to({state:[{t:this.shape_60,p:{x:28.9881,y:21.9631}}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63,p:{x:28.9602,y:21.9352}}]},1).to({state:[{t:this.shape_63,p:{x:28.9509,y:21.9259}}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66,p:{x:28.9231,y:21.8981}}]},1).to({state:[{t:this.shape_66,p:{x:28.9138,y:21.8888}}]},1).to({state:[{t:this.shape_67,p:{x:28.9046,y:21.8796}}]},1).to({state:[{t:this.shape_67,p:{x:28.8953,y:21.8703}}]},1).to({state:[{t:this.shape_68,p:{x:28.886,y:21.861}}]},1).to({state:[{t:this.shape_68,p:{x:28.8767,y:21.8517}}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71,p:{x:28.8489,y:21.8239}}]},1).to({state:[{t:this.shape_71,p:{x:28.8396,y:21.8146}}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74,p:{x:28.8118,y:21.7868}}]},1).to({state:[{t:this.shape_74,p:{x:28.8025,y:21.7775}}]},1).to({state:[{t:this.shape_74,p:{x:28.7932,y:21.7682}}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76,p:{x:28.7747,y:21.7497}}]},1).to({state:[{t:this.shape_76,p:{x:28.7654,y:21.7404}}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78,p:{x:28.7469,y:21.7219}}]},1).to({state:[{t:this.shape_78,p:{x:28.7376,y:21.7126}}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81,p:{x:28.7097,y:21.6847}}]},1).to({state:[{t:this.shape_81,p:{x:28.7005,y:21.6755}}]},1).to({state:[{t:this.shape_81,p:{x:28.6912,y:21.6662}}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83,p:{x:28.6726,y:21.6476}}]},1).to({state:[{t:this.shape_83,p:{x:28.6634,y:21.6384}}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86,p:{x:28.6355,y:21.6105}}]},1).to({state:[{t:this.shape_86,p:{x:28.6263,y:21.6013}}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88,p:{x:28.6077,y:21.5827}}]},1).to({state:[{t:this.shape_88,p:{x:28.5984,y:21.5734}}]},1).to({state:[{t:this.shape_88,p:{x:28.5892,y:21.5642}}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91,p:{x:28.5613,y:21.5363}}]},1).to({state:[{t:this.shape_91,p:{x:28.552,y:21.527}}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94,p:{x:28.5242,y:21.4992}}]},1).to({state:[{t:this.shape_94,p:{x:28.5149,y:21.4899}}]},1).to({state:[{t:this.shape_95,p:{x:28.5057,y:21.4807}}]},1).to({state:[{t:this.shape_95,p:{x:28.4964,y:21.4714}}]},1).to({state:[{t:this.shape_96,p:{x:28.4871,y:21.4621}}]},1).to({state:[{t:this.shape_96,p:{x:28.4778,y:21.4528}}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-13.4,70.2,69.5);


(lib.CervenaFialovaSipka1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.3,1,15.6,1).ss(0.1).p("AmdFKIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape.setTransform(41.375,33.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.3,1,15.6,1).ss(0.2).p("AmdFKIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_1.setTransform(41.375,33.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.3,1,15.6,1).ss(0.3).p("AmdFKIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_2.setTransform(41.375,33.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.3,1,15.6,1).ss(0.4).p("AmdFKIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_3.setTransform(41.375,33.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.3,1,15.6,1).ss(0.5).p("AmdFKIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_4.setTransform(41.375,33.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.3,1,15.6,1).ss(0.6).p("AmdFKIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_5.setTransform(41.375,33.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.3,1,15.6,1).ss(0.7).p("AmdFKIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_6.setTransform(41.375,33.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.3,1,15.6,1).ss(0.8).p("AmdFKIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_7.setTransform(41.375,33.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.3,1,15.6,1).ss(0.9).p("AmdFKIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_8.setTransform(41.375,33.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.3,1,15.6,1).p("AmdFKIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_9.setTransform(41.375,33.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.3,1,15.6,1).ss(1.1).p("AmdFKIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_10.setTransform(41.3912,33.5412);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.3,1,15.6,1).ss(1.1).p("AmdFKIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_11.setTransform(41.4005,33.5505);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.3,1,15.6,1).ss(1.2).p("AmdFKIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_12.setTransform(41.419,33.569);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.3,1,15.6,1).ss(1.3).p("AmdFKIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_13.setTransform(41.4376,33.5876);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.4,0.9,15.5,0.9).ss(1.3).p("AmeFJIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_14.setTransform(41.4561,33.6061);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.4,0.9,15.5,0.9).ss(1.4).p("AmeFJIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_15.setTransform(41.4654,33.6154);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.4,0.9,15.5,0.9).ss(1.5).p("AmeFJIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_16.setTransform(41.4932,33.6432);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.4,0.9,15.5,0.9).ss(1.5).p("AmeFJIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_17.setTransform(41.5025,33.6525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.4,0.9,15.5,0.9).ss(1.6).p("AmeFJIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_18.setTransform(41.5211,33.6711);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.4,0.9,15.5,0.9).ss(1.7).p("AmeFJIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_19.setTransform(41.5396,33.6896);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.5,0.8,15.4,0.8).ss(1.7).p("AmfFIIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_20.setTransform(41.5582,33.7082);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.5,0.8,15.4,0.8).ss(1.8).p("AmfFIIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_21.setTransform(41.5675,33.7175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.5,0.8,15.4,0.8).ss(1.9).p("AmfFIIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_22.setTransform(41.5953,33.7453);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.5,0.8,15.4,0.8).ss(1.9).p("AmfFIIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_23.setTransform(41.6046,33.7546);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.5,0.8,15.4,0.8).ss(2).p("AmfFIIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_24.setTransform(41.6138,33.7638);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.5,0.8,15.4,0.8).ss(2.1).p("AmfFIIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_25.setTransform(41.6417,33.7917);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.6,0.7,15.3,0.7).ss(2.1).p("AmgFHIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_26.setTransform(41.6509,33.8009);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.6,0.7,15.3,0.7).ss(2.2).p("AmgFHIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_27.setTransform(41.6695,33.8195);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.6,0.7,15.3,0.7).ss(2.3).p("AmgFHIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_28.setTransform(41.6881,33.8381);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.6,0.7,15.3,0.7).ss(2.3).p("AmgFHIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_29.setTransform(41.7066,33.8566);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.6,0.7,15.3,0.7).ss(2.4).p("AmgFHIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_30.setTransform(41.7159,33.8659);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.6,0.7,15.3,0.7).ss(2.5).p("AmgFHIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_31.setTransform(41.7437,33.8937);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.7,0.6,15.2,0.6).ss(2.5).p("AmhFGIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_32.setTransform(41.753,33.903);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.7,0.6,15.2,0.6).ss(2.6).p("AmhFGIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_33.setTransform(41.7715,33.9215);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.7,0.6,15.2,0.6).ss(2.7).p("AmhFGIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_34.setTransform(41.7901,33.9401);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.7,0.6,15.2,0.6).ss(2.7).p("AmhFGIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_35.setTransform(41.8086,33.9586);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.7,0.6,15.2,0.6).ss(2.8).p("AmhFGIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_36.setTransform(41.8179,33.9679);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.7,0.6,15.2,0.6).ss(2.9).p("AmhFGIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_37.setTransform(41.8458,33.9958);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.8,0.5,15.1,0.5).ss(2.9).p("AmiFFIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_38.setTransform(41.855,34.005);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.8,0.5,15.1,0.5).ss(3).p("AmiFFIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_39.setTransform(41.8643,34.0143);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.8,0.5,15.1,0.5).ss(3.1).p("AmiFFIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_40.setTransform(41.8921,34.0421);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.8,0.5,15.1,0.5).ss(3.1).p("AmiFFIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_41.setTransform(41.9014,34.0514);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.8,0.5,15.1,0.5).ss(3.2).p("AmiFFIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_42.setTransform(41.92,34.07);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.8,0.5,15.1,0.5).ss(3.3).p("AmiFFIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_43.setTransform(41.9385,34.0885);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.9,0.4,15,0.4).ss(3.3).p("AmjFEIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_44.setTransform(41.9571,34.1071);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.9,0.4,15,0.4).ss(3.4).p("AmjFEIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_45.setTransform(41.9664,34.1164);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.9,0.4,15,0.4).ss(3.5).p("AmjFEIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_46.setTransform(41.9942,34.1442);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.9,0.4,15,0.4).ss(3.5).p("AmjFEIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_47.setTransform(42.0035,34.1535);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.9,0.4,15,0.4).ss(3.6).p("AmjFEIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_48.setTransform(42.0127,34.1627);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().ls(["#570B84","#FF3939"],[0,1],-50.9,0.4,15,0.4).ss(3.7).p("AmjFEIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_49.setTransform(42.0406,34.1906);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51,0.3,14.9,0.3).ss(3.7).p("AmkFDIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_50.setTransform(42.0591,34.2091);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51,0.3,14.9,0.3).ss(3.8).p("AmkFDIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_51.setTransform(42.0684,34.2184);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51,0.3,14.9,0.3).ss(3.9).p("AmkFDIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_52.setTransform(42.0962,34.2462);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51,0.3,14.9,0.3).ss(3.9).p("AmkFDIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_53.setTransform(42.1055,34.2555);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51,0.3,14.9,0.3).ss(4).p("AmkFDIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_54.setTransform(42.1148,34.2648);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51,0.3,14.9,0.3).ss(4.1).p("AmkFDIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_55.setTransform(42.1426,34.2926);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.1,0.2,14.8,0.2).ss(4.1).p("AmlFCIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_56.setTransform(42.1519,34.3019);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.1,0.2,14.8,0.2).ss(4.2).p("AmlFCIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_57.setTransform(42.1704,34.3204);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.1,0.2,14.8,0.2).ss(4.3).p("AmlFCIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_58.setTransform(42.189,34.339);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.1,0.2,14.8,0.2).ss(4.3).p("AmlFCIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_59.setTransform(42.2075,34.3575);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.1,0.2,14.8,0.2).ss(4.4).p("AmlFCIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_60.setTransform(42.2168,34.3668);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.1,0.2,14.8,0.2).ss(4.5).p("AmlFCIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_61.setTransform(42.2447,34.3947);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.2,0.1,14.7,0.1).ss(4.5).p("AmmFBIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_62.setTransform(42.2539,34.4039);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.2,0.1,14.7,0.1).ss(4.6).p("AmmFBIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_63.setTransform(42.2632,34.4132);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.2,0.1,14.7,0.1).ss(4.7).p("AmmFBIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_64.setTransform(42.291,34.441);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.2,0.1,14.7,0.1).ss(4.7).p("AmmFBIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_65.setTransform(42.3003,34.4503);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.2,0.1,14.7,0.1).ss(4.8).p("AmmFBIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_66.setTransform(42.3189,34.4689);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.2,0.1,14.7,0.1).ss(4.9).p("AmmFBIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_67.setTransform(42.3467,34.4967);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.3,0,14.6,0).ss(4.9).p("AmnFAIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_68.setTransform(42.356,34.506);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.3,0,14.6,0).ss(5).p("AmnFAIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_69.setTransform(42.3653,34.5153);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.3,0,14.6,0).ss(5.1).p("AmnFAIKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_70.setTransform(42.3931,34.5431);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.3,0,14.6,0).ss(5.1).p("AmnFAIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_71.setTransform(42.4024,34.5524);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.3,0,14.6,0).ss(5.2).p("AmnFAIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_72.setTransform(42.4209,34.5709);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.3,0,14.6,0).ss(5.3).p("AmnFAIKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_73.setTransform(42.4395,34.5895);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.4,0,14.5,0).ss(5.3).p("AmoE/IKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_74.setTransform(42.458,34.608);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.4,0,14.5,0).ss(5.4).p("AmoE/IKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_75.setTransform(42.4673,34.6173);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.4,0,14.5,0).ss(5.5).p("AmoE/IKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_76.setTransform(42.4951,34.6451);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.4,-0.1,14.5,-0.1).ss(5.5).p("AmoE/IKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_77.setTransform(42.5044,34.6544);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.4,-0.1,14.5,-0.1).ss(5.6).p("AmoE/IKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_78.setTransform(42.5137,34.6637);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.4,-0.1,14.5,-0.1).ss(5.7).p("AmoE/IKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_79.setTransform(42.5415,34.6915);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.5,-0.1,14.4,-0.1).ss(5.7).p("AmpE+IKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_80.setTransform(42.5508,34.7008);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.5,-0.1,14.4,-0.1).ss(5.8).p("AmpE+IKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_81.setTransform(42.5693,34.7193);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.5,-0.1,14.4,-0.1).ss(5.9).p("AmpE+IKBAAQBLAAA1g1QA1g1AAhKIAAnk");
	this.shape_82.setTransform(42.5879,34.7379);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.5,-0.2,14.4,-0.2).ss(5.9).p("AmpE+IKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_83.setTransform(42.6064,34.7564);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().ls(["#570B84","#FF3939"],[0,1],-51.5,-0.2,14.4,-0.2).ss(6).p("AmpE+IKAAAQBLAAA1g1QA1g1AAhLIAAnk");
	this.shape_84.setTransform(42.6157,34.7657);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9,p:{x:41.375,y:33.525}}]},1).to({state:[{t:this.shape_9,p:{x:41.375,y:33.525}}]},1).to({state:[{t:this.shape_9,p:{x:41.3819,y:33.5319}}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{x:41.4005,y:33.5505}}]},1).to({state:[{t:this.shape_11,p:{x:41.4097,y:33.5597}}]},1).to({state:[{t:this.shape_12,p:{x:41.419,y:33.569}}]},1).to({state:[{t:this.shape_12,p:{x:41.4283,y:33.5783}}]},1).to({state:[{t:this.shape_13,p:{x:41.4376,y:33.5876}}]},1).to({state:[{t:this.shape_13,p:{x:41.4469,y:33.5969}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{x:41.4654,y:33.6154}}]},1).to({state:[{t:this.shape_15,p:{x:41.4747,y:33.6247}}]},1).to({state:[{t:this.shape_15,p:{x:41.484,y:33.634}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17,p:{x:41.5025,y:33.6525}}]},1).to({state:[{t:this.shape_17,p:{x:41.5118,y:33.6618}}]},1).to({state:[{t:this.shape_18,p:{x:41.5211,y:33.6711}}]},1).to({state:[{t:this.shape_18,p:{x:41.5303,y:33.6803}}]},1).to({state:[{t:this.shape_19,p:{x:41.5396,y:33.6896}}]},1).to({state:[{t:this.shape_19,p:{x:41.5489,y:33.6989}}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21,p:{x:41.5675,y:33.7175}}]},1).to({state:[{t:this.shape_21,p:{x:41.5767,y:33.7267}}]},1).to({state:[{t:this.shape_21,p:{x:41.586,y:33.736}}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24,p:{x:41.6138,y:33.7638}}]},1).to({state:[{t:this.shape_24,p:{x:41.6231,y:33.7731}}]},1).to({state:[{t:this.shape_24,p:{x:41.6324,y:33.7824}}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26,p:{x:41.6509,y:33.8009}}]},1).to({state:[{t:this.shape_26,p:{x:41.6602,y:33.8102}}]},1).to({state:[{t:this.shape_27,p:{x:41.6695,y:33.8195}}]},1).to({state:[{t:this.shape_27,p:{x:41.6788,y:33.8288}}]},1).to({state:[{t:this.shape_28,p:{x:41.6881,y:33.8381}}]},1).to({state:[{t:this.shape_28,p:{x:41.6973,y:33.8473}}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30,p:{x:41.7159,y:33.8659}}]},1).to({state:[{t:this.shape_30,p:{x:41.7252,y:33.8752}}]},1).to({state:[{t:this.shape_30,p:{x:41.7344,y:33.8844}}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32,p:{x:41.753,y:33.903}}]},1).to({state:[{t:this.shape_32,p:{x:41.7623,y:33.9123}}]},1).to({state:[{t:this.shape_33,p:{x:41.7715,y:33.9215}}]},1).to({state:[{t:this.shape_33,p:{x:41.7808,y:33.9308}}]},1).to({state:[{t:this.shape_34,p:{x:41.7901,y:33.9401}}]},1).to({state:[{t:this.shape_34,p:{x:41.7994,y:33.9494}}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36,p:{x:41.8179,y:33.9679}}]},1).to({state:[{t:this.shape_36,p:{x:41.8272,y:33.9772}}]},1).to({state:[{t:this.shape_36,p:{x:41.8365,y:33.9865}}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39,p:{x:41.8643,y:34.0143}}]},1).to({state:[{t:this.shape_39,p:{x:41.8736,y:34.0236}}]},1).to({state:[{t:this.shape_39,p:{x:41.8829,y:34.0329}}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41,p:{x:41.9014,y:34.0514}}]},1).to({state:[{t:this.shape_41,p:{x:41.9107,y:34.0607}}]},1).to({state:[{t:this.shape_42,p:{x:41.92,y:34.07}}]},1).to({state:[{t:this.shape_42,p:{x:41.9292,y:34.0792}}]},1).to({state:[{t:this.shape_43,p:{x:41.9385,y:34.0885}}]},1).to({state:[{t:this.shape_43,p:{x:41.9478,y:34.0978}}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45,p:{x:41.9664,y:34.1164}}]},1).to({state:[{t:this.shape_45,p:{x:41.9756,y:34.1256}}]},1).to({state:[{t:this.shape_45,p:{x:41.9849,y:34.1349}}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48,p:{x:42.0127,y:34.1627}}]},1).to({state:[{t:this.shape_48,p:{x:42.022,y:34.172}}]},1).to({state:[{t:this.shape_48,p:{x:42.0313,y:34.1813}}]},1).to({state:[{t:this.shape_49,p:{x:42.0406,y:34.1906}}]},1).to({state:[{t:this.shape_49,p:{x:42.0498,y:34.1998}}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51,p:{x:42.0684,y:34.2184}}]},1).to({state:[{t:this.shape_51,p:{x:42.0777,y:34.2277}}]},1).to({state:[{t:this.shape_51,p:{x:42.0869,y:34.2369}}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54,p:{x:42.1148,y:34.2648}}]},1).to({state:[{t:this.shape_54,p:{x:42.1241,y:34.2741}}]},1).to({state:[{t:this.shape_54,p:{x:42.1333,y:34.2833}}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56,p:{x:42.1519,y:34.3019}}]},1).to({state:[{t:this.shape_56,p:{x:42.1612,y:34.3112}}]},1).to({state:[{t:this.shape_57,p:{x:42.1704,y:34.3204}}]},1).to({state:[{t:this.shape_57,p:{x:42.1797,y:34.3297}}]},1).to({state:[{t:this.shape_58,p:{x:42.189,y:34.339}}]},1).to({state:[{t:this.shape_58,p:{x:42.1983,y:34.3483}}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60,p:{x:42.2168,y:34.3668}}]},1).to({state:[{t:this.shape_60,p:{x:42.2261,y:34.3761}}]},1).to({state:[{t:this.shape_60,p:{x:42.2354,y:34.3854}}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63,p:{x:42.2632,y:34.4132}}]},1).to({state:[{t:this.shape_63,p:{x:42.2725,y:34.4225}}]},1).to({state:[{t:this.shape_63,p:{x:42.2818,y:34.4318}}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65,p:{x:42.3003,y:34.4503}}]},1).to({state:[{t:this.shape_65,p:{x:42.3096,y:34.4596}}]},1).to({state:[{t:this.shape_66,p:{x:42.3189,y:34.4689}}]},1).to({state:[{t:this.shape_66,p:{x:42.3281,y:34.4781}}]},1).to({state:[{t:this.shape_66,p:{x:42.3374,y:34.4874}}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69,p:{x:42.3653,y:34.5153}}]},1).to({state:[{t:this.shape_69,p:{x:42.3745,y:34.5245}}]},1).to({state:[{t:this.shape_69,p:{x:42.3838,y:34.5338}}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71,p:{x:42.4024,y:34.5524}}]},1).to({state:[{t:this.shape_71,p:{x:42.4116,y:34.5616}}]},1).to({state:[{t:this.shape_72,p:{x:42.4209,y:34.5709}}]},1).to({state:[{t:this.shape_72,p:{x:42.4302,y:34.5802}}]},1).to({state:[{t:this.shape_73,p:{x:42.4395,y:34.5895}}]},1).to({state:[{t:this.shape_73,p:{x:42.4487,y:34.5987}}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75,p:{x:42.4673,y:34.6173}}]},1).to({state:[{t:this.shape_75,p:{x:42.4766,y:34.6266}}]},1).to({state:[{t:this.shape_75,p:{x:42.4858,y:34.6358}}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78,p:{x:42.5137,y:34.6637}}]},1).to({state:[{t:this.shape_78,p:{x:42.523,y:34.673}}]},1).to({state:[{t:this.shape_78,p:{x:42.5322,y:34.6822}}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80,p:{x:42.5508,y:34.7008}}]},1).to({state:[{t:this.shape_80,p:{x:42.5601,y:34.7101}}]},1).to({state:[{t:this.shape_81,p:{x:42.5693,y:34.7193}}]},1).to({state:[{t:this.shape_81,p:{x:42.5786,y:34.7286}}]},1).to({state:[{t:this.shape_82,p:{x:42.5879,y:34.7379}}]},1).to({state:[{t:this.shape_82,p:{x:42.5972,y:34.7472}}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84,p:{x:42.6157,y:34.7657}}]},1).to({state:[{t:this.shape_84,p:{x:42.625,y:34.775}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,88.3,72.6);


(lib.PulkruhTmaveSedy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4D").s().p("An8D+QABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	this.shape.setTransform(50.85,25.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.PulkruhTmaveSedy, new cjs.Rectangle(0,0,101.7,50.9), null);


(lib.kanalCervenyStranaVlevo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0000").ss(1.5).p("AB6jWQgCAjgNA6QgPBFgDAYQgPBrAoB1QAKAfADALQAFAYgGATQgIAbgeAQQgWAMgjAEQg7AEgigZQgcgVgJgmQgJgkALgkQAHgUADgKQAGgRAAgNQgBgSgLgXQgPgagGgNQgXgwAOg1QAHgaAOgYQAEgGAKgPQAKgNAFgIQAMgZgDgtQgDg0AGgTQAJghAigNQAdgLAkAGQAcAGAPANQAaAVAEAuQADASgBATg");
	this.shape.setTransform(12.9292,34.0414);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag+E/QgcgVgJgmQgJgkALgkIAKgeQAGgRAAgNQgBgSgLgXQgPgagGgNQgXgwAOg1QAHgaAOgYIAOgVIAPgVQAMgZgDgtQgDg0AGgTQAJghAigNQAdgLAkAGQAcAGAPANQAaAVAEAuQADASgBATQgCAjgNA6QgPBFgDAYQgPBrAoB1QAKAfADALQAFAYgGATQgIAbgeAQQgWAMgjAEIgSAAQguAAgdgVg");
	this.shape_1.setTransform(12.9292,34.0414);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kanalCervenyStranaVlevo, new cjs.Rectangle(-1,-1,29.4,72), null);


(lib.ZlutaProuzkovanaAnimace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.ZlutaProuzkovana();
	this.instance.parent = this;
	this.instance.setTransform(65.2,94.5,1,1,0,0,0,65.2,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},149).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.4,189.1);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.Group_113();
	this.instance.parent = this;
	this.instance.setTransform(18.8,12.4,1,1,0,0,0,18.8,12.4);
	this.instance.alpha = 0.1094;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0,0,37.7,24.9), null);


(lib.Path_2_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.Group_109();
	this.instance.parent = this;
	this.instance.setTransform(18.7,12.7,1,1,0,0,0,18.7,12.7);
	this.instance.alpha = 0.1094;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1_1, new cjs.Rectangle(0,0,37.3,25.5), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.Group_107();
	this.instance.parent = this;
	this.instance.setTransform(20.8,6.9,1,1,0,0,0,20.8,6.9);
	this.instance.alpha = 0.1094;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,41.6,13.8), null);


(lib.Path_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.Group_114();
	this.instance.parent = this;
	this.instance.setTransform(12.8,8.6,1,1,0,0,0,12.8,8.6);
	this.instance.alpha = 0.1094;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(0,0,25.7,17.2), null);


(lib.Path_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.Group_110();
	this.instance.parent = this;
	this.instance.setTransform(12.8,9.1,1,1,0,0,0,12.8,9.1);
	this.instance.alpha = 0.1094;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,25.7,18.2), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.Group_108();
	this.instance.parent = this;
	this.instance.setTransform(14,5.2,1,1,0,0,0,14,5.2);
	this.instance.alpha = 0.1094;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,28,10.5), null);


(lib.ZelenyMerak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFPD+QAAiKhihiQhihhiLAAQiJAAhjBhQhiBiAACKIiuAAQABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	mask.setTransform(50.85,25.425);

	// Vrstva_3
	this.instance = new lib.Cerveny();
	this.instance.parent = this;
	this.instance.setTransform(50.8,50.8,1,1,180,0,0,50.9,50.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:270,x:50.9},49).to({rotation:360,y:50.9},50).wait(1));

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AFPD+QAAiKhihiQhihhiLAAQiJAAhjBhQhiBiAACKIiuAAQABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	this.shape.setTransform(50.85,25.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.7,50.9);


(lib.VodikZlutyBezTextu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.Path_102();
	this.instance.parent = this;
	this.instance.setTransform(10.25,7.45,0.8675,0.8675,0,0,0,10.5,7);
	this.instance.alpha = 0.1992;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C68947").s().p("AhUBVQgkgjAAgyQAAgxAkgjQAjgkAxAAQAyAAAjAkQAkAjAAAxQAAAygkAjQgjAkgyAAQgxAAgjgkgAhJhJQgfAeAAArQAAAsAfAeQAeAfArAAQAsAAAfgfQAegeAAgsQAAgrgegeQgfgfgsAAQgrAAgeAfg");
	this.shape.setTransform(10.3643,10.386,0.8627,0.8627);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFAD1D").s().p("AhJBKQgfgeAAgsQAAgrAfgeQAegfArAAQAsAAAfAfQAeAeAAArQAAAsgeAeQgfAfgsAAQgrAAgegfg");
	this.shape_1.setTransform(10.3643,10.386,0.8627,0.8627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.VodikZlutyBezTextu, new cjs.Rectangle(0,0,20.8,20.8), null);


(lib.SedyMerakFialovy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFPD+QAAiKhihiQhihhiLAAQiJAAhjBhQhiBiAACKIiuAAQABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	mask.setTransform(50.85,25.425);

	// Vrstva_3
	this.instance = new lib.PulkruhFialovy();
	this.instance.parent = this;
	this.instance.setTransform(50.8,50.8,1,1,180,0,0,50.9,50.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:270,x:50.9},49).to({rotation:360,y:50.9},50).wait(1));

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8D8D8").s().p("AFPD+QAAiKhihiQhihhiLAAQiJAAhjBhQhiBiAACKIiuAAQABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	this.shape.setTransform(50.85,25.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.7,50.9);


(lib.MerakZluty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFPD+QAAiKhihiQhihhiLAAQiJAAhjBhQhiBiAACKIiuAAQABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	mask.setTransform(50.85,25.425);

	// Vrstva_3
	this.instance = new lib.PulkruhZluty();
	this.instance.parent = this;
	this.instance.setTransform(50.8,50.8,1,1,180,0,0,50.9,50.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:270,x:50.9},49).to({rotation:360,y:50.9},50).wait(1));

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFPD+QAAiKhihiQhihhiLAAQiJAAhjBhQhiBiAACKIiuAAQABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	this.shape.setTransform(50.85,25.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.7,50.9);


(lib.MerakFialovy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFPD+QAAiKhihiQhihhiLAAQiJAAhjBhQhiBiAACKIiuAAQABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	mask.setTransform(50.85,25.425);

	// Vrstva_3
	this.instance = new lib.PulkruhFialovy();
	this.instance.parent = this;
	this.instance.setTransform(50.8,50.8,1,1,180,0,0,50.9,50.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:270,x:50.9},49).to({rotation:360,y:50.9},50).wait(1));

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFPD+QAAiKhihiQhihhiLAAQiJAAhjBhQhiBiAACKIiuAAQABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	this.shape.setTransform(50.85,25.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.7,50.9);


(lib.MerakCerveny = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFPD+QAAiKhihiQhihhiLAAQiJAAhjBhQhiBiAACKIiuAAQABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	mask.setTransform(50.85,25.425);

	// Vrstva_3
	this.instance = new lib.PulkruhCerveny();
	this.instance.parent = this;
	this.instance.setTransform(50.8,50.8,1,1,180,0,0,50.9,50.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:270,x:50.9},49).to({rotation:360,y:50.9},50).wait(1));

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFPD+QAAiKhihiQhihhiLAAQiJAAhjBhQhiBiAACKIiuAAQABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	this.shape.setTransform(50.85,25.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.7,50.9);


(lib.MerakCerny = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFPD+QAAiKhihiQhihhiLAAQiJAAhjBhQhiBiAACKIiuAAQABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	mask.setTransform(50.85,25.425);

	// Vrstva_3
	this.instance = new lib.PulkruhTmaveSedy();
	this.instance.parent = this;
	this.instance.setTransform(50.8,50.8,1,1,180,0,0,50.9,50.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:270,x:50.9},49).to({rotation:360,y:50.9},50).wait(1));

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFPD+QAAiKhihiQhihhiLAAQiJAAhjBhQhiBiAACKIiuAAQABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	this.shape.setTransform(50.85,25.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.7,50.9);


(lib.kanalZluty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kanalModryStranaVpravo
	this.instance = new lib.kanalZlutyStranaVpravo();
	this.instance.parent = this;
	this.instance.setTransform(7.65,35.35,0.6124,1,0,0,0,12.5,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.2977,x:15.35},159).wait(1));

	// kanalModryStranaVlevo
	this.instance_1 = new lib.kanalZlutyStranaVlevo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53,37.35,0.6015,1,0,0,0,13.8,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.2033,x:47.25},159).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333300").ss(1.5).p("AAOgpIgbBT");
	this.shape.setTransform(50.75,19.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AhmFhQhVgOgdhyQgPg4AAhNIAEiFQABgLgFheQgDhCALgnQAWhVBzgTQA/gLB9AMQBlAJAXA2QAOAfgQAyIgbBVQgGAlANA/QAQBJAAAbQAAAcgQBGQgOA+AFAkQADAYgCAHQgCAOgQAJQgfASg2AJQgzAJgwAAQgxAAgvgIg");
	this.shape_1.setTransform(29.6933,36.1058);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-2.2,70.4,75.60000000000001);


(lib.kanalFialovy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kanalModryStranaVpravo
	this.instance = new lib.kanalFialovyStranaVpravo();
	this.instance.parent = this;
	this.instance.setTransform(7.65,35.35,0.6124,1,0,0,0,12.5,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.2247,x:15.3},99).wait(1));

	// kanalModryStranaVlevo
	this.instance_1 = new lib.kanalFialovyStranaVlevo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53,37.35,0.6015,1,0,0,0,13.8,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:13.9,scaleX:1.1821,x:46.15},99).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A62020").ss(1.5).p("AAOgpIgbBT");
	this.shape.setTransform(50.75,19.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B0069").s().p("AhmFhQhVgOgdhyQgPg4AAhNIAEiFQABgLgFheQgDhCALgnQAWhVBzgTQA/gLB9AMQBlAJAXA2QAOAfgQAyIgbBVQgGAlANA/QAQBJAAAbQAAAcgQBGQgOA+AFAkQADAYgCAHQgCAOgQAJQgfASg2AJQgzAJgwAAQgxAAgvgIg");
	this.shape_1.setTransform(29.6933,36.1058);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-2.1,67.7,75.5);


(lib.KanalCerveny = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kanalModryStranaVpravo
	this.instance = new lib.kanalCervenyStranaVpravo();
	this.instance.parent = this;
	this.instance.setTransform(7.65,35.35,0.6124,1,0,0,0,12.5,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:12.6,scaleX:1.2332,x:15.55},99).wait(1));

	// kanalModryStranaVlevo
	this.instance_1 = new lib.kanalCervenyStranaVlevo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53,37.35,0.6015,1,0,0,0,13.8,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:13.9,scaleX:1.1754,x:46.2},99).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A62020").ss(1.5).p("AAOgpIgbBT");
	this.shape.setTransform(50.75,19.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B1C1C").s().p("AhmFhQhVgOgdhyQgPg4AAhNIAEiFQABgLgFheQgDhCALgnQAWhVBzgTQA/gLB9AMQBlAJAXA2QAOAfgQAyIgbBVQgGAlANA/QAQBJAAAbQAAAcgQBGQgOA+AFAkQADAYgCAHQgCAOgQAJQgfASg2AJQgzAJgwAAQgxAAgvgIg");
	this.shape_1.setTransform(29.6933,36.1058);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-2.1,67.6,75.5);


(lib.kanal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kanalModryStranaVpravo
	this.instance = new lib.kanalModryStranaVpravo();
	this.instance.parent = this;
	this.instance.setTransform(7.65,35.35,0.6124,1,0,0,0,12.5,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.2977,x:15.35},99).wait(1));

	// kanalModryStranaVlevo
	this.instance_1 = new lib.kanalModryStranaVlevo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53,37.35,0.6015,1,0,0,0,13.8,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.2033,x:47.25},99).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#18297C").ss(1.5).p("AAOgpIgbBT");
	this.shape.setTransform(50.75,19.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002F83").s().p("AhmFhQhVgOgdhyQgPg4AAhNIAEiFQABgLgFheQgDhCALgnQAWhVBzgTQA/gLB9AMQBlAJAXA2QAOAfgQAyIgbBVQgGAlANA/QAQBJAAAbQAAAcgQBGQgOA+AFAkQADAYgCAHQgCAOgQAJQgfASg2AJQgzAJgwAAQgxAAgvgIg");
	this.shape_1.setTransform(29.6933,36.1058);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-2.2,70.30000000000001,75.60000000000001);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(5.5,3.6,1,1,0,0,0,5.5,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,11.1,7.2), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_3
	this.instance = new lib.Group_1();
	this.instance.parent = this;
	this.instance.setTransform(24.65,21.8,1,1,0,0,0,5.5,3.6);
	this.instance.alpha = 0.1992;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E1616").s().p("AgsAtQgSgTAAgaQAAgZASgTQATgSAZAAQAaAAATASQASASAAAaQAAAagSATQgUASgZAAQgZAAgTgSgAgmgmQgQARAAAVQAAAXAQAQQAQAQAWAAQAXAAAQgQQAQgQAAgXQAAgWgQgQQgQgQgXAAQgVAAgRAQg");
	this.shape.setTransform(24.675,23.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7181F").s().p("AgmAnQgQgQAAgXQAAgVAQgRQARgQAVAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_1.setTransform(24.675,23.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(18.4,17.5,12.600000000000001,12.7), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_3
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(25,24.6,1,1,0,0,0,24.7,24.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#1FAFFF").ss(2.1).p("AAoAwIgShFIhFgS");
	this.shape_17.setTransform(37.6634,11.5866);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1FAFFF").s().p("AAIAWIgJgRIgEgGIgDgJIgBAAIABAKIAAAIIAAAOIgJAAIAAgrIALAAIAIAQIAEAGIAEAIIgBgJIAAgIIAAgNIAJAAIAAArg");
	this.shape_18.setTransform(24.725,33.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1FAFFF").s().p("AAIAWIgJgRIgEgHIgDgIIgBAAIABAJIAAAJIAAAOIgJAAIAAgrIALAAIAIAQIAEAHIAEAHIgBgJIAAgIIAAgNIAJAAIAAArg");
	this.shape_19.setTransform(24.725,15.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1FAFFF").s().p("AAIAWIgJgRIgEgGIgDgIIgBAAIABAJIAAAJIAAANIgJAAIAAgrIALAAIAIAQIAEAGIAEAIIgBgJIAAgIIAAgNIAJAAIAAArg");
	this.shape_20.setTransform(34.675,25.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1FAFFF").s().p("AAIAWIgJgRIgEgGIgDgIIgBAAIABAJIAAAJIAAANIgJAAIAAgrIALAAIAIAQIAEAGIAEAIIgBgJIAAgIIAAgNIAJAAIAAArg");
	this.shape_21.setTransform(14.825,25.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1FAFFF").ss(2.1).p("AAwgoIhFATIgSBF");
	this.shape_22.setTransform(11.6399,11.6125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1FAFFF").ss(2.1).p("AgvApIBFgTIAShF");
	this.shape_23.setTransform(37.5101,37.3875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1FAFFF").ss(2.1).p("AgngvIASBFIBFAS");
	this.shape_24.setTransform(11.7366,37.3134);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.7,24.6,1,1,0,0,0,24.7,24.6);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.7,24.6,1,1,0,0,0,24.7,24.6);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24.7,24.6,1,1,0,0,0,24.7,24.6);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(24.7,24.6,1,1,0,0,0,24.7,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,0,49.4,49.1), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(16.2,28.5,1,1,0,0,0,16.2,28.5);
	this.instance.alpha = 0.2383;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,32.4,57), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(16.1,28.4,1,1,0,0,0,16.1,28.4);
	this.instance.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,32.4,57), null);


(lib.FecervenaBezTextu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.Group_3_1();
	this.instance.parent = this;
	this.instance.setTransform(10.45,7.2,1,1,0,0,0,9.1,6);
	this.instance.alpha = 0.1992;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQAsAAAeAfQAfAeAAArQAAAsgfAeQgfAfgrAAQgpAAgggfgAg/hAQgbAbAAAlQAAAmAbAaQAaAbAlAAQAmAAAbgbQAagaAAgmQAAgkgagcQgbgagmAAQglAAgaAag");
	this.shape.setTransform(10.475,10.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7181F").s().p("Ag/BAQgbgaAAgmQAAglAbgbQAagaAlAAQAmAAAbAaQAaAcAAAkQAAAmgaAaQgbAbgmAAQglAAgagbg");
	this.shape_1.setTransform(10.475,10.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.FecervenaBezTextu, new cjs.Rectangle(0,0,21,21), null);


(lib.FeBezTextu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.Group_3_17();
	this.instance.parent = this;
	this.instance.setTransform(10.45,7.2,1,1,0,0,0,9.1,6);
	this.instance.alpha = 0.1992;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C1D64").s().p("AhJBKQgfgeABgsQgBgrAfgeQAfgfAqAAQAsAAAeAfQAeAeABArQgBAsgeAeQgfAfgrAAQgpAAgggfgAhAhAQgaAbAAAlQAAAnAaAZQAbAbAlAAQAmAAAbgbQAbgaAAgmQAAglgbgbQgbgagmAAQgkAAgcAag");
	this.shape.setTransform(10.45,10.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#593A9C").s().p("AhABAQgagZAAgnQAAglAagbQAcgaAkAAQAlAAAbAaQAbAbAAAlQAAAmgbAaQgbAbglAAQglAAgbgbg");
	this.shape_1.setTransform(10.475,10.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.FeBezTextu, new cjs.Rectangle(0,0,20.9,21), null);


(lib.FE3Kulicka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.Group_3_2();
	this.instance.parent = this;
	this.instance.setTransform(22.25,15.2,1,1,0,0,0,19.4,12.6);
	this.instance.alpha = 0.1992;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C1D64").s().p("AicCdQhBhCAAhbQAAhbBBhBQBChBBaAAQBcAABBBBQBBBBAABbQAABchBBBQhBBBhcAAQhbAAhBhBgAiHiHQg5A4gBBPQABBQA5A5QA4A4BPAAQBQAAA5g5QA4g4AAhQQAAhPg5g4Qg4g5hQgBQhPABg4A5g");
	this.shape.setTransform(22.2,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#593A9C").s().p("AiHCJQg5g5gBhQQABhPA5g4QA4g5BPgBQBQABA4A5QA5A4AABPQAABQg4A4Qg5A5hQAAQhPAAg4g4g");
	this.shape_1.setTransform(22.2,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.FE3Kulicka, new cjs.Rectangle(0,0,44.4,44.4), null);


(lib.Fe3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.Group_3_30();
	this.instance.parent = this;
	this.instance.setTransform(10.45,7.2,1,1,0,0,0,9.1,6);
	this.instance.alpha = 0.1992;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C1D64").s().p("AhJBKQgfgeAAgsQAAgrAfgeQAfgfAqAAQArAAAfAfQAfAeAAArQAAAsgfAeQgeAfgsAAQgrAAgegfgAhAg/QgaAaAAAlQAAAmAaAbQAcAaAkAAQAmAAAbgaQAagbAAgmQAAglgagaQgbgbgmAAQglAAgbAbg");
	this.shape.setTransform(10.475,10.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#593A9C").s().p("AhABBQgagbAAgmQAAglAagaQAbgbAlAAQAmAAAbAbQAaAaAAAlQAAAmgaAbQgbAagmAAQgkAAgcgag");
	this.shape_1.setTransform(10.475,10.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Fe3, new cjs.Rectangle(0,0,21,21), null);


(lib.Fe2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.Group_3_3();
	this.instance.parent = this;
	this.instance.setTransform(10.4,7.15,1,1,0,0,0,9.1,5.9);
	this.instance.alpha = 0.1992;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("AhJBKQgfgeABgsQgBgqAfgfQAfgfAqAAQArAAAfAfQAeAfAAAqQAAAsgeAeQgfAfgrAAQgqAAgfgfgAhAg/QgbAaAAAlQAAAmAbAbQAbAaAlAAQAmAAAbgaQAagbAAgmQAAglgagaQgbgbgmAAQglAAgbAbg");
	this.shape.setTransform(10.45,10.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7181F").s().p("Ag/BBQgbgbAAgmQAAglAbgaQAbgbAkAAQAmAAAbAbQAaAaAAAlQAAAmgaAbQgbAagmAAQglAAgagag");
	this.shape_1.setTransform(10.425,10.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Fe2, new cjs.Rectangle(0,0,20.9,21), null);


(lib.CervenaPravaCelek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(-1.95,79.5,1.321,1.321,-67.1968,0,0,55,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},159).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.7,0.2,107.4,158.3);


(lib.CervenaLevaCelek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(9.1,28.1,1.2031,1.2031,44.9995,0,0,20.6,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},159).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,-9.1,70.8,74.5);


(lib.BunkaPodklad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EAA66E").ss(1.3).p("EgfwArrQgyAAgbgEQgvgIgegWQgrgggQg+QgMgtABhNMAAXhN5QgBgeACgOQAFgZARgMQAXgQAgAHQAdAHARAWQARAVAHAhQAEASACAjIAcG6QAEA9AYAPQAOAIASgFQANgEALgKQALgJAGgMQAKgVABgdQABgTgDgkQgXkSAVkMQADgoANgkQAPgpAZgVQAagXAhAEQAoAEAZAoQAYAoAEBFIAhIlQAFBNApAIQAhAGAOgMQASgQgEg2IgkpKQgCgpAGgmQAJg/AeghQAbgeAmgCQAmgCAeAbQAhAeAQA+QAJAkACAqIAWIIQgBAkACAQQAEAdAOANQALAMASAGQARAGAOgDQASgCAHgOQAIgNABgWQABgMAAgcIgGoEQgBguARgtQATgyAggUQAggUAjARQAhAQATA0QAdBQAFBpQADA+gGB/QgEBWAAAsQgBBJAIA4QAFAgAMAHQAJAFAIgEQAMgHAKgYQAKgYAAgXIAAoHQAAhUAxgPQAdgIAbAXQAYAUAMAkQAOAsACA4QACAhgDBEIgCAgQgCA8AKCCIAHBaQABAqAEATQAGAhAQATQAfAjAdARQAdAQAhACQA5ACAuglQAfgZAKgjQAGgWAAg0QAAgaABgOQABgqAKhmQAIhRADgtIABgVQAEhRAHgpQAKhDAYgwQATgmAfAGQAVADATAYQASAXAEAaQAJAxAGA/QADAjAFBMQACA2AEAqQAIBcAZCLQAIAvAPAVQATAZAkABQAZABAPgRQAZgZgCgzIgdm4QgEg9ARglQAQglAjgJQAegIAaARQAZAQARAkQAQAeAHAlQAYCBAmEJIARB9IABABQAEAeAGAPQAJAVAQAAQAKAAAHgIQAMgOAGgfQAEgagBgaQgJikABhVQABiSAXhyQAThjA8gNQAlgJAbAYQAcAXANA1QAMAwgEAzQgHB2ATB1QASB2AsBtQARApAUABQAIABAGgHQAIgHAGgRQAFgRAAgUIALmlQABg5AUghQATgiAigFQAegEAWAUQAWATAMAlQAKAgABAkIAKFvQAAB5AfAXQALAHAPgEQASgFAPgfQAZg3AFhJQADgsgFhfQgDhQABgnQAChDAPgzQAJghAVgTQAXgXAcAIQAcAHAQAoQAQApAEA0QADAkgDA6IgCAhQgCAtAAAJQgBAkALAwQAMAwARAhQACAFACABQACACAHABQASAEAIgCQAUgGAAgyQABgbgHgyIgDgVQgFg+gChkIgChFQgBgkAFgXQAHggAUgOQAhgWAjAFQArAFAYAyQASAjAGAzQAFAsgFBVQgDA6AAAEQAAA0AVAxQAUAyAhAZQAjAbAogKQAmgKAXgqQAPgbAGgiQAMg7AChbIAAgcQgBgkABgQQAEgeAMgVQANgXAbgNQAbgOAjgBQAvgBAdAdQAeAeAFA2QADAfgDAmQgCAXgHAsQgJA8gBAWQgDA/AVAuQAGANANAOQANAOAFgBQACgCACgFQAFgOgCgtQgBgcAAgEIAQnYQAAgaADgMQAHgYAXgHQAbgIAZAYQAVATALAeQAWA6AEBLQADAugEBYIgCAyQgEB4APA8QAJAjALAHQAGADAJgEQAMgGABg4IAvl/QAJhKAqgPQAagJAXAOQAVANAQAfQANAbAEAfQAoEZAMFlQAHDSgBGpMgAJA6CQAABCgHAmQgMA4gfAiQgkAohAAOQgsAKhKAAgEgh+gnGQgLAAgIAFQgIAGgCARQgBAKABAWMgAXBN7QgBBFAKApQAOA4AjAaQAYARAlAHQAaAEAxAAMA+sAAAQBGAAAngIQA4gMAfgiQAagdAKgxQAGgjAAg+MAAJg6BQABmogHjSQgLljgokYQgEgZgKgWQgMgYgPgJQgLgHgMAEQgYAJgHA4IgtFqQAAABgCARQgBAigEAQQgHAdgSAJQgYAMgUgNQgUgNgKghQgThAAEiKIACgyQAEhVgDgtQgEhIgUg1QgHgUgNgOQgPgRgMAEQgIACgCAJQgDAIABAUIgQHaQAAADABAbQACA0gHASQgJAagWABQgUABgWgYQgQgRgIgSQgYg2AEhEQACgZAIg9QAHgrACgWQADgjgDgcQgDgigOgVQgVgfgqABQgbABgUAJQgVAKgKAQQgJAQgCAZQgBAPABAfIAAAeQgCBagMBAQgIAqgTAgQgcAygxANQg2AOgvgkQgngegYg4QgXg4AAg6QAAgBADg/QAFhSgFgpQgFgogMgcQgSgsgegEQgYgDgWAQQgVAOACBBIACBGQACBjAFA8IADAUQAJBCgDAgQgFA5gkALQgQAEgZgFQgOgEgHgFQgHgFgGgLQgTglgMgzQgMg0ABgnQAAgLACgtIACggQADg5gCghQgEgwgPgkQgKgbgOgDQgOgEgNARQgMAOgFAUQgOAwgCBAQgBAnADBMQAFBfgEAwQgFBPgbA6QgVAtgfAIQgeAIgXgRQgbgUgJg5QgGghAAg5IgKlvQgBgegIgbQgJgfgQgOQgNgKgQACQgbADgMAmQgIAZgBAiIgLGkQAAASgFAUQgHAegQAPQgPAPgVgBQgogCgXg6QguhxgTh5QgTh5AIh5QADgtgKgpQgLgugVgSQgQgOgWAFQgpAJgQBQQgWBwgBCQQgBBVAJChQABAXgDAaQgHAvgUAWQgPARgXABQgiAAgRgiQgKgTgFgmIAAgCIgSh9QgkkAgZiJQgFgegNgZQgPgfgTgNQgQgKgRAFQgcAHgJAqQgGAbACAlIAdG4QABAegIAbQgJAagQAQQgYAagmgBQgzgBgbglQgUgbgJg1QgaiTgHhXIgGhhQgJiUgNhIQgDgRgMgRQgMgQgLgCQgJgBgJARQgWAtgKBAQgGAngEBNIgBAWQgDAtgIBSQgJBUgDA7IAAAmQAAA4gIAbQgMAsgmAfQg4AshDgDQgugDgogZQgcgTgdgiQgVgYgIgmQgFgXgBguIgHhYQgKiEACg+IACghQADhAgCggQgCg1gNgpQgHgWgOgPQgRgTgRAFQgbAIAAA+IAAIHQAAAegNAeQgNAggVAMQgXANgYgOQgZgOgHgvQgIg6ABhKQAAgtAEhXQAHh+gDg8QgFhkgchNQgRgqgUgJQgUgKgSALQgYAPgPArQgPAnABAnIAGIDQAAAggBAOQgDAagKASQgOAbggAFQgWADgYgIQgYgIgQgQQgUgUgFgjQgEgUABgqIgWoGQgCgsgLgmQgOgugYgVQgTgSgbABQgaACgSAUQgVAXgJAvQgHAnACAtIAkJJQAFBFgeAaQgZAWgvgKQgbgFgRgWQgXgdgDg4IgholQgCgrgMgfQgRgvgjgEQgVgCgQAOQgUAQgMAlQgLAegDAiQgUEQAXEJQADApgBAUQgCAjgMAZQgJASgQANQgQAOgTAGQgfAIgZgPQgWgNgKgdQgIgWgCgkIgcm5QgCgggDgSQgGgYgMgQQgHgIgMgGQgMgGgLAAg");
	this.shape.setTransform(483.2803,279.468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE3CC").s().p("EgfwArrQgyAAgbgEQgvgIgegWQgrgggQg+QgMgtABhNMAAXhN5QgBgeACgOQAFgZARgMQAXgQAgAHQAdAHARAWQARAVAHAhQAEASACAjIAcG6QAEA9AYAPQAOAIASgFQANgEALgKQALgJAGgMQAKgVABgdQABgTgDgkQgXkSAVkMQADgoANgkQAPgpAZgVQAagXAhAEQAoAEAZAoQAYAoAEBFIAhIlQAFBNApAIQAhAGAOgMQASgQgEg2IgkpKQgCgpAGgmQAJg/AeghQAbgeAmgCQAmgCAeAbQAhAeAQA+QAJAkACAqIAWIIQgBAkACAQQAEAdAOANQALAMASAGQARAGAOgDQASgCAHgOQAIgNABgWQABgMAAgcIgGoEQgBguARgtQATgyAggUQAggUAjARQAhAQATA0QAdBQAFBpQADA+gGB/QgEBWAAAsQgBBJAIA4QAFAgAMAHQAJAFAIgEQAMgHAKgYQAKgYAAgXIAAoHQAAhUAxgPQAdgIAbAXQAYAUAMAkQAOAsACA4QACAhgDBEIgCAgQgCA8AKCCIAHBaQABAqAEATQAGAhAQATQAfAjAdARQAdAQAhACQA5ACAuglQAfgZAKgjQAGgWAAg0IABgoQABgqAKhmQAIhRADgtIABgVQAEhRAHgpQAKhDAYgwQATgmAfAGQAVADATAYQASAXAEAaQAJAxAGA/QADAjAFBMQACA2AEAqQAIBcAZCLQAIAvAPAVQATAZAkABQAZABAPgRQAZgZgCgzIgdm4QgEg9ARglQAQglAjgJQAegIAaARQAZAQARAkQAQAeAHAlQAYCBAmEJIARB9IABABQAEAeAGAPQAJAVAQAAQAKAAAHgIQAMgOAGgfQAEgagBgaQgJikABhVQABiSAXhyQAThjA8gNQAlgJAbAYQAcAXANA1QAMAwgEAzQgHB2ATB1QASB2AsBtQARApAUABQAIABAGgHQAIgHAGgRQAFgRAAgUIALmlQABg5AUghQATgiAigFQAegEAWAUQAWATAMAlQAKAgABAkIAKFvQAAB5AfAXQALAHAPgEQASgFAPgfQAZg3AFhJQADgsgFhfQgDhQABgnQAChDAPgzQAJghAVgTQAXgXAcAIQAcAHAQAoQAQApAEA0QADAkgDA6IgCAhIgCA2QgBAkALAwQAMAwARAhQACAFACABQACACAHABQASAEAIgCQAUgGAAgyQABgbgHgyIgDgVQgFg+gChkIgChFQgBgkAFgXQAHggAUgOQAhgWAjAFQArAFAYAyQASAjAGAzQAFAsgFBVIgDA+QAAA0AVAxQAUAyAhAZQAjAbAogKQAmgKAXgqQAPgbAGgiQAMg7AChbIAAgcQgBgkABgQQAEgeAMgVQANgXAbgNQAbgOAjgBQAvgBAdAdQAeAeAFA2QADAfgDAmQgCAXgHAsQgJA8gBAWQgDA/AVAuQAGANANAOQANAOAFgBQACgCACgFQAFgOgCgtIgBggIAQnYQAAgaADgMQAHgYAXgHQAbgIAZAYQAVATALAeQAWA6AEBLQADAugEBYIgCAyQgEB4APA8QAJAjALAHQAGADAJgEQAMgGABg4IAvl/QAJhKAqgPQAagJAXAOQAVANAQAfQANAbAEAfQAoEZAMFlQAHDSgBGpMgAJA6CQAABCgHAmQgMA4gfAiQgkAohAAOQgsAKhKAAgEgiRgnBQgIAGgCARQgBAKABAWMgAXBN7QgBBFAKApQAOA4AjAaQAYARAlAHQAaAEAxAAMA+sAAAQBGAAAngIQA4gMAfgiQAagdAKgxQAGgjAAg+MAAJg6BQABmogHjSQgLljgokYQgEgZgKgWQgMgYgPgJQgLgHgMAEQgYAJgHA4IgtFqIgCASQgBAigEAQQgHAdgSAJQgYAMgUgNQgUgNgKghQgThAAEiKIACgyQAEhVgDgtQgEhIgUg1QgHgUgNgOQgPgRgMAEQgIACgCAJQgDAIABAUIgQHaIABAeQACA0gHASQgJAagWABQgUABgWgYQgQgRgIgSQgYg2AEhEQACgZAIg9QAHgrACgWQADgjgDgcQgDgigOgVQgVgfgqABQgbABgUAJQgVAKgKAQQgJAQgCAZQgBAPABAfIAAAeQgCBagMBAQgIAqgTAgQgcAygxANQg2AOgvgkQgngegYg4QgXg4AAg6IADhAQAFhSgFgpQgFgogMgcQgSgsgegEQgYgDgWAQQgVAOACBBIACBGQACBjAFA8IADAUQAJBCgDAgQgFA5gkALQgQAEgZgFQgOgEgHgFQgHgFgGgLQgTglgMgzQgMg0ABgnIACg4IACggQADg5gCghQgEgwgPgkQgKgbgOgDQgOgEgNARQgMAOgFAUQgOAwgCBAQgBAnADBMQAFBfgEAwQgFBPgbA6QgVAtgfAIQgeAIgXgRQgbgUgJg5QgGghAAg5IgKlvQgBgegIgbQgJgfgQgOQgNgKgQACQgbADgMAmQgIAZgBAiIgLGkQAAASgFAUQgHAegQAPQgPAPgVgBQgogCgXg6QguhxgTh5QgTh5AIh5QADgtgKgpQgLgugVgSQgQgOgWAFQgpAJgQBQQgWBwgBCQQgBBVAJChQABAXgDAaQgHAvgUAWQgPARgXABQgiAAgRgiQgKgTgFgmIAAgCIgSh9QgkkAgZiJQgFgegNgZQgPgfgTgNQgQgKgRAFQgcAHgJAqQgGAbACAlIAdG4QABAegIAbQgJAagQAQQgYAagmgBQgzgBgbglQgUgbgJg1QgaiTgHhXIgGhhQgJiUgNhIQgDgRgMgRQgMgQgLgCQgJgBgJARQgWAtgKBAQgGAngEBNIgBAWQgDAtgIBSQgJBUgDA7IAAAmQAAA4gIAbQgMAsgmAfQg4AshDgDQgugDgogZQgcgTgdgiQgVgYgIgmQgFgXgBguIgHhYQgKiEACg+IACghQADhAgCggQgCg1gNgpQgHgWgOgPQgRgTgRAFQgbAIAAA+IAAIHQAAAegNAeQgNAggVAMQgXANgYgOQgZgOgHgvQgIg6ABhKQAAgtAEhXQAHh+gDg8QgFhkgchNQgRgqgUgJQgUgKgSALQgYAPgPArQgPAnABAnIAGIDQAAAggBAOQgDAagKASQgOAbggAFQgWADgYgIQgYgIgQgQQgUgUgFgjQgEgUABgqIgWoGQgCgsgLgmQgOgugYgVQgTgSgbABQgaACgSAUQgVAXgJAvQgHAnACAtIAkJJQAFBFgeAaQgZAWgvgKQgbgFgRgWQgXgdgDg4IgholQgCgrgMgfQgRgvgjgEQgVgCgQAOQgUAQgMAlQgLAegDAiQgUEQAXEJQADApgBAUQgCAjgMAZQgJASgQANQgQAOgTAGQgfAIgZgPQgWgNgKgdQgIgWgCgkIgcm5QgCgggDgSQgGgYgMgQQgHgIgMgGQgMgGgLAAQgLAAgIAFg");
	this.shape_1.setTransform(483.2803,279.468);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EAA66E").ss(3).p("EAX3gjrQgBBWgNBBQgIAtgVAgQgZAmgnAKQhGATgzhKQgwhDABhVQADg/ACgfQADg5gFgmQgGgugPggQgVgugkgFQgdgDgcATQgbATACBJIADBzQACBFAEAtQACASAHBLQABBEggAKQgLADgWgFQgKgCgFgEQgEgDgEgIQgSgjgMgxQgMgxABgnQAAgRABgaQADgeAAgOQADg5gCgjQgEgygQgnQgNghgVgGQgVgFgTAUQgPAQgIAaQgUBJAIC3QAHCmgnBUQgRAmgZAGQg0AOgQhNQgGgcgChTIgKliQgBgygTgkQgWgsgmAFQggAEgQAmQgMAdgBAsIgLGkQgBAhgKAWQgOAcgYgBQgegBgTgyQhbjjAQjyQAEhGgWg1Qgag/gzALQgyAMgSBZQgWBvgCCNQgBBZAJClQACAmgJAhQgNAwggABQgaAAgNgdQgHgQgFgjQgZisgNhXQgWiagUhqQgKgzgYgiQgegpgnAKQghAJgMApQgKAgADAvIAUEjQAJCSAAADQACAsgSAeQgWAjgpgBQgsgBgWggQgRgXgJgyQgZiKgIheQgHhqgDg2QgHhfgLg/QgHgmgbgUQgfgVgTAmQgZAzgKBJQgEAegGBjQgDAsgJBbQgIBYgDAvQgBAlgDBAQgIAzgpAhQgyApg+gDQgogCgjgVQgcgSgegiQgWgagGguQgDg2gCgZQgHhUgDgqQgFhKACg1QAEhiAAgQQgBhCgQgvQgJgdgTgSQgWgVgXAHQgmALAABJIAAIHQAAAogVAfQgWAjgcgQQgUgLgFgnQgJhDAChcQAFhrACg1QAIjGgphxQgSgvgbgNQgvgXgjA6QgfAzABBBIAFH1QABAtAAAEQgCAegKASQgPAcglgDQgigDgXgXQgUgUgDgsQABgygBgUIgWnrQgDhHgZgyQgeg9g2ACQg2ADgYBBQgUAzAEBIIAkJKQAEAzgPAXQgTAbgxgJQg1gLgFhYIgholQgDg2gQgjQgVgugngEQgsgFgcAyQgXAogEA6QgVEKAXERQADAogBASQgBAggLAXQgOAbgcANQgdANgYgOQgTgMgIgbQgGgSgCggIgcm5QgCgigEgSQgGgcgOgSQgOgRgYgHQgZgGgSAMQgQALgCAcQAAAQACAeMgAYBNpQgBBHAKAqQAPA9AoAeQAbAUAqAHQAaAEAyAAMA+sAAAQBHAAApgJQA+gNAhglQAdggALg2QAGgjAAhAMAAJg6BQABmpgHjUQgMlignkYQgGgqgWgdQgZgjgfALQghAMgIBBIgtFqQgCAMgBAnQgFAjgPAIQgyAZgOh1QgHg4ADhaQAEiOAAgNQgChZgYg/QgIgYgQgRQgVgWgUAGQgTAGgDAXQgCANACAZQAAAVgEBlIgNFTQgBANACAjQABAhgFAOQgLAegagVQgVgRgLgYQgXg0AEg/QABgXANhWQAJhCgEgqQgEgtgXgZQgZgdgsABQgcABgXAKQgaALgNAWQgNAWgBAmQAAAWABAqg");
	this.shape_2.setTransform(483.2801,279.4701);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC892").s().p("EgfwArcQgyAAgagEQgqgHgbgUQgogegPg9QgKgqABhHMAAYhNpQgCgeAAgQQACgcAQgLQASgMAZAGQAYAHAOARQAOASAGAcQAEASACAiIAcG5QACAgAGASQAIAbATAMQAYAOAdgNQAcgNAOgbQALgXABggQABgSgDgoQgXkRAVkKQAEg6AXgoQAcgyAsAFQAnAEAVAuQAQAjADA2IAhIlQAFBYA1ALQAxAJATgbQAPgXgEgzIgkpKQgEhIAUgzQAYhBA2gDQA2gCAeA9QAZAyADBHIAWHrQABAUgBAyQADAsAUAUQAXAXAiADQAlADAPgcQAKgSACgeIgBgxIgFn1QgBhBAfgzQAjg6AvAXQAbANASAvQApBxgIDGIgHCgQgCBcAJBDQAFAnAUALQAcAQAWgjQAVgfAAgoIAAoHQAAhJAmgLQAXgHAWAVQATASAJAdQAQAvABBCQAAAQgEBiQgCA1AFBKIAKB+IAFBPQAGAuAWAaQAeAiAcASQAjAVAoACQA+ADAygpQApghAIgzIAEhlQADgvAIhYQAJhbADgsQAGhjAEgeQAKhJAZgzQATgmAfAVQAbAUAHAmQALA/AHBfIAKCgQAIBeAZCKQAJAyARAXQAWAgAsABQApABAWgjQASgegCgsIgJiVIgUkjQgDgvAKggQAMgpAhgJQAngKAeApQAYAiAKAzQAUBqAWCaIAmEDQAFAjAHAQQANAdAaAAQAggBANgwQAJghgCgmQgJilABhZQACiNAWhvQAShZAygMQAzgLAaA/QAWA1gEBGQgQDyBbDjQATAyAeABQAYABAOgcQAKgWABghIALmkQABgsAMgdQAQgmAggEQAmgFAWAsQATAkABAyIAKFiQACBTAGAcQAQBNA0gOQAZgGARgmQAnhUgHimQgIi3AUhJQAIgaAPgQQATgUAVAFQAVAGANAhQAQAnAEAyQACAjgDA5IgDAsIgBArQgBAnAMAxQAMAxASAjQAEAIAEADQAFAEAKACQAWAFALgDQAggKgBhEIgJhdQgEgtgChFIgDhzQgChJAbgTQAcgTAdADQAkAFAVAuQAPAgAGAuQAFAmgDA5IgFBeQgBBVAwBDQAzBKBGgTQAngKAZgmQAVggAIgtQANhBABhWQgBgqAAgWQABgmANgWQANgWAagLQAXgKAcgBQAsgBAZAdQAXAZAEAtQAEAqgJBCQgNBWgBAXQgEA/AXA0QALAYAVARQAaAVALgeQAFgOgBghQgCgjABgNIANlTIAEh6QgCgZACgNQADgXATgGQAUgGAVAWQAQARAIAYQAYA/ACBZIgECbQgDBaAHA4QAOB1AygZQAPgIAFgjQABgnACgMIAtlqQAIhBAhgMQAfgLAZAjQAWAdAGAqQAnEYAMFiQAHDUgBGpMgAJA6BQAABAgGAjQgLA2gdAgQghAlg+ANQgpAJhHAAg");
	this.shape_3.setTransform(483.2801,279.4701);

	this.instance = new lib.Path_42();
	this.instance.parent = this;
	this.instance.setTransform(486.65,283.4,1,1,0,0,0,224.2,277.9);
	this.instance.alpha = 0.6719;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CECCC8").ss(2,1,1).p("EgPsApzIb8AAQBCAAAmgJQA4gNAcgkQATgZAHgoQAFgaAAguMAADhIFQAAg6gTggQgSggghgBQghAAgTAjQgLAWAKBVQAJBKggAXQgSAOgZgEQgZgDgLgTQgJgRABgkQABg6gDhnQgDhyAAgwQAGg3gBghQgDg9gigQQg8gbgWBBQgJAYgFBNQgJCDAFB5QABAXAFBCQgCA7giAUQgSAKgZgCQgagBgQgNQgNgJgDgWQgBgEgFhBQgKhigRhIQggiMguAmQgJAIgGARQgPAtgDA/QgCAkAABIQgDCMgLBYQgFAjgFAQQgIAYgTAIQgWAKgagKQgjgNgHhWQgCgggDkQQgBgvgDhUQgFhcAAgmQACg4gDggQgGg7gigSQgNgIgSABQgRAAgOAHQgiAQgHAzQgEAcABA0QAAAngGBeQgGBUACAwIAABBQgBBQgIBOQgFAmgGASQgKAdgXALQgSAJgXgBQgYgBgQgLQgZgQgHglQgDgUACghQAIh9gGhuQgHhxgIgpQgXhsg+gMQhBgNgSBQQgHAbgBBdQgBBDgFCEQgCA9gBBDQgDAogWAPQgVAOgggBQgggBgUgPQgPgLgHgVQgGgVgDg2QgCgogBhIQgBhPgBgiQgCg1gGgaQgKgwgcgYQgTgRgRACQgTACgPAZQgpBEgBB5QAAAiABBCQABA7gGAmQgJBCgPAfQgNAbgWAIQgQAFgTgDQgMgCgEgDQgfgNgLgrQgIgcgHhNQgEg3gPhpQgOhsgFgzQgQithcAxQgbAQgMAiQgEANgDAP");
	this.shape_4.setTransform(146.4829,289.944,1.0431,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2ECEA").s().p("EgPqApzIAAgCIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgBIABgEQAMgiAbgQQBcgxAQCtQAFAzAOBsQAPBpAEA3QAHBNAIAcQALArAfANQAEADAMACQATADAQgFQAWgIANgbQAPgfAJhCQAGgmgBg7IgBhkQABh5AphEQAPgZATgCQARgCATARQAcAYAKAwQAGAaACA1IACBxQABBIACAoQADA2AGAVQAHAVAPALQAUAPAgABQAgABAVgOQAWgPADgoIADiAQAFiEABhDQABhdAHgbQAShQBBANQA+AMAXBsQAIApAHBxQAGBugIB9QgCAhADAUQAHAlAZAQQAQALAYABQAXABASgJQAXgLAKgdQAGgSAFgmQAIhOABhQIAAhBQgCgwAGhUQAGheAAgnQgBg0AEgcQAHgzAigQQAOgHARAAQASgBANAIQAiASAGA7QADAggCA4QAAAmAFBcQADBUABAvQADEQACAgQAHBWAjANQAaAKAWgKQATgIAIgYQAFgQAFgjQALhYADiMQAAhIACgkQADg/APgtQAGgRAJgIQAugmAgCMQARBIAKBiIAGBFQADAWANAJQAQANAaABQAZACASgKQAigUACg7IgGhZQgFh5AJiDQAFhNAJgYQAWhBA8AbQAiAQADA9QABAhgGA3IADCiQADBngBA6QgBAkAJARQALATAZADQAZAEASgOQAggXgJhKQgKhVALgWQATgjAhAAQAhABASAgQATAgAAA6MgADBIFQAAAugFAaQgHAogTAZQgcAkg4ANQgmAJhCAAg");
	this.shape_5.setTransform(146.7959,289.944,1.0431,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BunkaPodklad, new cjs.Rectangle(40.6,-2.1,670.3,563.6), null);


(lib.MerakRNA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFPD+QAAiKhihiQhihhiLAAQiJAAhjBhQhiBiAACKIiuAAQABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	mask.setTransform(50.85,25.425);

	// Vrstva_3
	this.instance = new lib.PulkruhRuzovyRNA();
	this.instance.parent = this;
	this.instance.setTransform(50.8,50.8,1,1,180,0,0,50.9,50.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:270,x:50.9},49).to({rotation:360,y:50.9},50).wait(1));

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFPD+QAAiKhihiQhihhiLAAQiJAAhjBhQhiBiAACKIiuAAQABjSCViUQCUiVDSAAQDTAACUCVQCVCUAADSg");
	this.shape.setTransform(50.85,25.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.7,50.9);


(lib.vehicle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAA00").s().p("AgVgYIArAXIgpAag");
	this.shape.setTransform(48.55,68.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// OranzovaSipkaSpodniVehicle_anim
	this.OranzovaSipkaSpodniVehicle_anim = new lib.OranzovaSipkaSpodni();
	this.OranzovaSipkaSpodniVehicle_anim.name = "OranzovaSipkaSpodniVehicle_anim";
	this.OranzovaSipkaSpodniVehicle_anim.parent = this;
	this.OranzovaSipkaSpodniVehicle_anim.setTransform(40.75,73.95,1,1,0,0,0,6.4,5.4);

	this.timeline.addTween(cjs.Tween.get(this.OranzovaSipkaSpodniVehicle_anim).wait(1));

	// Vrstva_2
	this.KanalZlutyVehicle_anim = new lib.kanalZluty();
	this.KanalZlutyVehicle_anim.name = "KanalZlutyVehicle_anim";
	this.KanalZlutyVehicle_anim.parent = this;
	this.KanalZlutyVehicle_anim.setTransform(56.4,68.75,0.4108,0.4106,-90,0,0,30.4,35.9);

	this.timeline.addTween(cjs.Tween.get(this.KanalZlutyVehicle_anim).wait(1));

	// Vrstva_1
	this.instance = new lib.FecervenaBezTextu();
	this.instance.parent = this;
	this.instance.setTransform(136.5,67.9,0.4773,0.4773,0,0,0,10.5,10.6);

	this.instance_1 = new lib.FeBezTextu();
	this.instance_1.parent = this;
	this.instance_1.setTransform(136.55,79.15,0.4785,0.4773,0,0,0,10.6,10.5);

	this.instance_2 = new lib.FeBezTextu();
	this.instance_2.parent = this;
	this.instance_2.setTransform(123.4,97.7,0.4785,0.4773,0,0,0,10.6,10.5);

	this.instance_3 = new lib.FeBezTextu();
	this.instance_3.parent = this;
	this.instance_3.setTransform(115.45,89.85,0.4785,0.4773,0,0,0,10.6,10.5);

	this.instance_4 = new lib.FeBezTextu();
	this.instance_4.parent = this;
	this.instance_4.setTransform(95,90.05,0.4785,0.4773,0,0,0,10.6,10.5);

	this.instance_5 = new lib.FeBezTextu();
	this.instance_5.parent = this;
	this.instance_5.setTransform(87.25,98.15,0.4785,0.4773,0,0,0,10.6,10.5);

	this.instance_6 = new lib.VodikZlutyBezTextu();
	this.instance_6.parent = this;
	this.instance_6.setTransform(81.2,69,0.4785,0.4785,0,0,0,10.5,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9943CB").s().p("AgiBuQgSgRgLgdQAZgBAQgTQARgTgCgZQgCgXgSgRQgTgQgZABQAIgeAQgTQAQgTAVgBQAdgCAYAjQAYAjAEA0QADAzgTAmQgUAmgeACIgDAAQgSAAgSgPg");
	this.shape_1.setTransform(154.9516,73.1257);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#682A00").s().p("AgUgVIApAQIgiAbg");
	this.shape_2.setTransform(166.325,64.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF3939","#570B84"],[0,1],0,-0.6,0.7,10.8).s().p("AgNAAIAbgPIgBAfg");
	this.shape_3.setTransform(144.225,68.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFAA00").s().p("AgnAWIA1g7IAaBLg");
	this.shape_4.setTransform(80.775,2.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#682A00").s().p("AgVgVIArAMIgfAfg");
	this.shape_5.setTransform(37.525,59.825);

	this.KanalCervenyVehicle2_anim = new lib.KanalCerveny();
	this.KanalCervenyVehicle2_anim.name = "KanalCervenyVehicle2_anim";
	this.KanalCervenyVehicle2_anim.parent = this;
	this.KanalCervenyVehicle2_anim.setTransform(108.25,24.45,0.4074,0.4074,0.4142,0,0,31.2,36.6);

	this.SipkaZlutaHUvnitrVehicle_anim = new lib.SipkaZlutaHUvnitr();
	this.SipkaZlutaHUvnitrVehicle_anim.name = "SipkaZlutaHUvnitrVehicle_anim";
	this.SipkaZlutaHUvnitrVehicle_anim.parent = this;
	this.SipkaZlutaHUvnitrVehicle_anim.setTransform(95.7,9,1,1,0,0,0,13.5,6.7);

	this.PrechodUvnitrVehicle_anim = new lib.PrechodUvnitr();
	this.PrechodUvnitrVehicle_anim.name = "PrechodUvnitrVehicle_anim";
	this.PrechodUvnitrVehicle_anim.parent = this;
	this.PrechodUvnitrVehicle_anim.setTransform(147.95,73.9,1,1,0,0,0,4.4,5.2);

	this.SipkaHneda1Vehicle_anim = new lib.SipkaHneda1();
	this.SipkaHneda1Vehicle_anim.name = "SipkaHneda1Vehicle_anim";
	this.SipkaHneda1Vehicle_anim.parent = this;
	this.SipkaHneda1Vehicle_anim.setTransform(43.6,54.9,1,1,0,0,0,6.1,6.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgCAYIAAgWIgUAAIAAgDIAUAAIAAgWIAFAAIAAAWIAUAAIAAADIgUAAIAAAWg");
	this.shape_6.setTransform(195.275,64.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAeIAAg6IAHgBIAIgBIAJACIAHAEQADACABADIACAHIgCAHQgBADgCACQgDAEgFABQgFACgFAAIgDAAIgDgBIAAAYgAgKAAIADABIADAAQAHgBAEgCQAEgDAAgHQAAgFgEgEQgEgDgGAAIgEABIgDAAg");
	this.shape_7.setTransform(190.35,63.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgRAfIgHgBIAAg7IAIAAIAJgBQAHAAAGACQAGACAEAEQAEADADAGQACAFAAAHQAAAHgCAGQgDAGgEAEQgEAEgHADQgGACgJAAIgHAAgAgMgXIgEAAIAAAvIADAAIAFAAQALAAAHgGQAHgHAAgLQAAgHgDgGQgDgFgFgDQgGgDgHAAIgFABg");
	this.shape_8.setTransform(184.975,63.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AARAeIgHgTIgUAAIgGATIgJAAIAVg7IAJAAIAVA7gAAJAFIgGgQIgCgGIgBgFIAAAAIAAAFIgCAGIgGAQIARAAg");
	this.shape_9.setTransform(179.05,63.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAPAeIgTgeIgGgKIgFgKIAAAAIAAAMIAAAMIAAAaIgHAAIAAg7IAJAAIASAdIAGAKIAFAKIAAAAIgBgMIAAgMIAAgZIAIAAIAAA7g");
	this.shape_10.setTransform(173.375,63.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPAeIAAgcIgdAAIAAAcIgHAAIAAg7IAHAAIAAAZIAdAAIAAgZIAIAAIAAA7g");
	this.shape_11.setTransform(195.55,79.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSAeIAAg7IAHAAIAIgBIAJABIAHAFQADACABADIACAHIgCAHQgBADgCACQgDADgFACQgFABgFAAIgDAAIgDAAIAAAYgAgKAAIADABIADAAQAHgBAEgCQAEgDAAgHQAAgFgEgEQgEgDgGAAIgEABIgDAAg");
	this.shape_12.setTransform(190.35,79.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgRAfIgHgBIAAg7IAIAAIAJgBQAHAAAGACQAGACAEAEQAEADADAGQACAFAAAHQAAAHgCAGQgDAGgEAEQgEAEgHADQgGACgJAAIgHAAgAgMgXIgEAAIAAAvIADAAIAFAAQALAAAHgGQAHgHAAgLQAAgHgDgGQgDgFgFgDQgGgDgHAAIgFABg");
	this.shape_13.setTransform(184.975,79.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AARAeIgHgTIgUAAIgGATIgJAAIAVg7IAJAAIAVA7gAAJAFIgGgQIgCgGIgBgFIAAAAIAAAFIgCAGIgGAQIARAAg");
	this.shape_14.setTransform(179.05,79.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAPAeIgTgeIgGgKIgFgKIAAAAIAAAMIAAAMIAAAaIgHAAIAAg7IAJAAIASAdIAGAKIAFAKIAAAAIgBgMIAAgMIAAgZIAIAAIAAA7g");
	this.shape_15.setTransform(173.375,79.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgIAPIAAgdIADAAIAEAAIAEAAIAEACIACADIAAAEIAAADIgCACIgEADIgEAAIgCAAIgBAAIAAAMgAgEgLIAAALIABAAIACAAQACAAACAAQACgCAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgBgBgDAAIgCAAIgBAAg");
	this.shape_16.setTransform(32.775,54.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#C68947").ss(0.5).p("AAcAAQAAALgIAJQgIAIgMAAQgKAAgJgIQgIgJAAgLQAAgLAIgIQAJgIAKAAQAMAAAIAIQAIAIAAALg");
	this.shape_17.setTransform(32.5,54.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFAD1D").s().p("AgTAUQgIgJAAgLQAAgLAIgIQAJgIAKAAQALAAAJAIQAIAIAAALQAAALgIAJQgJAIgLAAQgKAAgJgIg");
	this.shape_18.setTransform(32.5,54.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgIAPIAAgdIADAAIAEAAIAEAAIAEACIACADIAAAEIAAADIgCACIgEADIgEAAIgCAAIgBAAIAAAMgAgEgLIAAALIABAAIACAAQACAAACAAQACgCAAgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgBgDAAIgCAAIgBAAg");
	this.shape_19.setTransform(25.775,54.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#C68947").ss(0.5).p("AAcAAQAAALgIAJQgJAIgLAAQgLAAgIgIQgIgJAAgLQAAgLAIgIQAIgIALAAQALAAAJAIQAIAIAAALg");
	this.shape_20.setTransform(25.6,54.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFAD1D").s().p("AgTAUQgIgJAAgLQAAgLAIgIQAIgIALAAQALAAAJAIQAIAIAAALQAAALgIAJQgJAIgLAAQgLAAgIgIg");
	this.shape_21.setTransform(25.6,54.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#442306").s().p("AgYAnIgRgvIApgfIApAfIgPAvg");
	this.shape_22.setTransform(17.9,55.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#D15400").ss(0.3).p("Ag2AAIBuAA");
	this.shape_23.setTransform(27.2,54.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#D15400").ss(0.3).p("AAAgKIAAAV");
	this.shape_24.setTransform(13.9,53.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D15400").s().p("AgmAZIAAgxIAvgRIAfApIgfApg");
	this.shape_25.setTransform(13,48.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFAA00").s().p("AgsAaIAAgzIAsgaIAtAaIAAAzIgtAag");
	this.shape_26.setTransform(4.525,48.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgIAPIAAgdIADAAIAEAAIAEAAIAEACIACADIAAAEIAAADIgCACIgEADIgEAAIgCAAIgBAAIAAAMgAgEgLIAAALIABAAIACAAQACAAACAAQACgCAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgBgBgDAAIgCAAIgBAAg");
	this.shape_27.setTransform(58.875,39.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#C68947").ss(0.5).p("AAcAAQAAALgIAJQgIAIgMAAQgKAAgJgIQgIgJAAgLQAAgKAIgJQAJgIAKAAQAMAAAIAIQAIAJAAAKg");
	this.shape_28.setTransform(58.75,39.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFAD1D").s().p("AgTAUQgIgIAAgMQAAgLAIgIQAJgIAKAAQAMAAAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgKAAgJgIg");
	this.shape_29.setTransform(58.75,39.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgIAPIAAgdIADAAIAEAAIAEAAIAEACIACADIAAAEIAAADIgCACIgEADIgEAAIgCAAIgBAAIAAAMgAgEgLIAAALIABAAIACAAQACAAACAAQACgCAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgBgBgDAAIgCAAIgBAAg");
	this.shape_30.setTransform(52.025,39.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#C68947").ss(0.5).p("AAcAAQAAALgIAJQgIAIgMAAQgKAAgJgIQgIgJAAgLQAAgKAIgJQAJgIAKAAQAMAAAIAIQAIAJAAAKg");
	this.shape_31.setTransform(51.75,39.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFAD1D").s().p("AgTAUQgIgIAAgMQAAgLAIgIQAJgIAKAAQALAAAJAIQAIAIAAALQAAAMgIAIQgJAIgLAAQgKAAgJgIg");
	this.shape_32.setTransform(51.75,39.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgIAPIAAgdIADAAIAEAAIAEAAIAEACIACADIAAAEIAAADIgCACIgEADIgEAAIgCAAIgBAAIAAAMgAgEgLIAAALIABAAIACAAQACAAACAAQACgCAAgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgBgDAAIgCAAIgBAAg");
	this.shape_33.setTransform(45.025,39.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#C68947").ss(0.5).p("AAcAAQAAALgIAJQgJAIgLAAQgLAAgIgIQgIgJAAgLQAAgKAIgJQAIgIALAAQALAAAJAIQAIAJAAAKg");
	this.shape_34.setTransform(44.85,39.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFAD1D").s().p("AgTAUQgIgIAAgMQAAgLAIgIQAIgIALAAQALAAAJAIQAIAIAAALQAAAMgIAIQgJAIgLAAQgLAAgIgIg");
	this.shape_35.setTransform(44.85,39.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#442306").s().p("AgYAnIgRgvIApgeIApAeIgPAvg");
	this.shape_36.setTransform(37.15,40.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#D15400").ss(0.3).p("AheAAIC8AA");
	this.shape_37.setTransform(50.35,39.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#D15400").ss(0.3).p("AAAgKIAAAV");
	this.shape_38.setTransform(33.15,38.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D15400").s().p("AgnAZIAAgxIAxgQIAdAoIgdApg");
	this.shape_39.setTransform(32.2,33.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFAA00").s().p("AgsAaIAAgzIAsgaIAtAaIAAAzIgtAag");
	this.shape_40.setTransform(23.775,33.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF9B0B").s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIAAQAIAAAHAGQAGAGAAAIQAAAJgGAGQgHAGgIAAQgIAAgGgGg");
	this.shape_41.setTransform(110.8,102.075);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00B3EA").s().p("AgNAPQgHgHAAgIQAAgHAGgHQAGgGAIgBIgBAIQAAAJAGAGQAGAFAJABIABAAQgFAOgPgBQgIAAgGgGg");
	this.shape_42.setTransform(108.475,103.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#00B3EA").ss(0.7).p("AAAheIAAC9");
	this.shape_43.setTransform(108.55,114.225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00B3EA").s().p("AgDAnQgEAAgDgDQgEgDAAgFIAAg3QAAgFAEgDQADgDAEAAIAHAAQAEAAAEADQADADAAAFIAAA3QAAAFgDADQgEADgEAAg");
	this.shape_44.setTransform(108.55,125.475);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF9B0B").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_45.setTransform(100.125,102.075);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00B3EA").s().p("AgUAIIABAAQAJgBAHgFQAFgGAAgJIgCgIQAJABAGAGQAGAHAAAHQAAAIgGAHQgHAGgIAAQgOABgGgOg");
	this.shape_46.setTransform(102.425,103.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#00B3EA").ss(0.7).p("AAAheIAAC9");
	this.shape_47.setTransform(102.35,114.225);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00B3EA").s().p("AgDAnQgEAAgDgDQgEgDAAgFIAAg3QAAgFAEgDQADgDAEAAIAHAAQAEAAAEADQADADAAAFIAAA3QAAAFgDADQgEADgEAAg");
	this.shape_48.setTransform(102.35,125.475);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF9B0B").s().p("AAXBbQgngIghghQghghgIgmQgHgoAWgWIALgJQgMARABAVQABAVAPAPQAQAPAVABQAVABAQgNQgNAQABAVQABAVAPAQQAPAPAVABQAVACARgNQgEAHgEAEQgRARgbAAQgIAAgKgCg");
	this.shape_49.setTransform(117.3813,95.7188);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF9B0B").s().p("AhUBMQgFgGgDgFQARANAVgCQAVgBAPgPQAPgQABgVQABgVgNgQQAQANAVgBQAVgBAQgPQAPgPABgVQABgVgMgRIALAJQAWAWgHAoQgIAmghAhQghAhgnAIQgKACgIAAQgbAAgRgRg");
	this.shape_50.setTransform(93.1188,96.0688);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#EAA66E").ss(1.4).p("AAAnfQjGAAiMCNQiNCNAADFQAADHCNCMQCMCNDGAAQDGAACNiNQCNiMAAjHQAAjFiNiNQiMiNjHAAgAAAIZQjdAAieidQidieAAjeQAAjdCdieQCeidDdAAQDeAACeCdQCdCeAADdQAADeidCeQieCdjeAAg");
	this.shape_51.setTransform(106.725,74.825);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFE3CC").s().p("Al7F8QidieAAjeQAAjdCdieQCeidDdAAQDeAACeCdQCdCeAADdQAADeidCeQieCdjeAAQjdAAieidgAlSlSQiNCNAADFQAADHCNCMQCMCNDGAAQDGAACNiNQCNiMAAjHQAAjFiNiNQiMiNjHAAQjGAAiMCNg");
	this.shape_52.setTransform(106.725,74.825);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AlnFnQiViVAAjSQAAjSCViVQCViUDSAAQDTAACVCUQCVCVAADSQAADSiVCVQiVCWjTAAQjSAAiViWg");
	this.shape_53.setTransform(106.725,74.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.SipkaHneda1Vehicle_anim},{t:this.PrechodUvnitrVehicle_anim},{t:this.SipkaZlutaHUvnitrVehicle_anim},{t:this.KanalCervenyVehicle2_anim},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// SipkaHneda2Vehicle_anim
	this.SipkaHneda2Vehicle_anim = new lib.SipkaHneda2();
	this.SipkaHneda2Vehicle_anim.name = "SipkaHneda2Vehicle_anim";
	this.SipkaHneda2Vehicle_anim.parent = this;
	this.SipkaHneda2Vehicle_anim.setTransform(163.9,72.4,1,1,0,0,0,4.2,7.7);

	this.timeline.addTween(cjs.Tween.get(this.SipkaHneda2Vehicle_anim).wait(1));

}).prototype = getMCSymbolPrototype(lib.vehicle, new cjs.Rectangle(0,-1.2,200.6,130.79999999999998), null);


(lib.Semafor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_12
	this.instance = new lib.Path_4_2();
	this.instance.parent = this;
	this.instance.setTransform(66.55,55.3,1,1,0,0,0,10.3,7.8);
	this.instance.alpha = 0.5313;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1FF00").s().p("AhMBNQgggfAAguQAAgsAgggQAfggAtAAQAtAAAgAgQAgAgAAAsQAAAuggAfQggAggtAAQgtAAgfggg");
	this.shape.setTransform(67.15,58.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},5).wait(5));

	// Vrstva_13
	this.instance_1 = new lib.Path_3_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(66.55,55.3,1,1,0,0,0,10.3,7.8);
	this.instance_1.alpha = 0.0781;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#445400").s().p("AhMBNQgggfAAguQAAgsAgggQAfggAtAAQAtAAAgAgQAgAgAAAsQAAAuggAfQggAggtAAQgtAAgfggg");
	this.shape_1.setTransform(67.15,58.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1}]}).to({state:[]},5).wait(5));

	// Vrstva_14
	this.instance_2 = new lib.Path_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(66.55,82.95,1,1,0,0,0,10.3,7.8);
	this.instance_2.alpha = 0.1289;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#720000").s().p("AhMBNQggggAAgtQAAgsAgggQAfggAtAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAggtAAQgtAAgfggg");
	this.shape_2.setTransform(67.15,86.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.instance_2}]},5).wait(5));

	// Vrstva_15
	this.instance_3 = new lib.Path_0_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(66.55,82.95,1,1,0,0,0,10.3,7.8);
	this.instance_3.alpha = 0.2383;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhMBNQggggAAgtQAAgsAgggQAfggAtAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAggtAAQgtAAgfggg");
	this.shape_3.setTransform(67.15,86.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.instance_3}]}).to({state:[]},5).wait(5));

	// _Path_
	this.instance_4 = new lib.Path();
	this.instance_4.parent = this;
	this.instance_4.setTransform(68.45,74.3,1,1,0,0,0,16.1,28.4);
	this.instance_4.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},5).wait(5));

	// _Path__1
	this.instance_5 = new lib.Path_1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(65.6,70.65,1,1,0,0,0,16.2,28.5);
	this.instance_5.alpha = 0.2383;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},5).wait(5));

	// Vrstva_18
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C1C1C1").s().p("AiRE1QgPAAgLgKQgLgMAAgPIAAofQAAgQALgKQALgLAPAAIEjAAQAPAAALALQALAKAAAQIAAIfQAAAPgLAMQgLAKgPAAg");
	this.shape_4.setTransform(67.125,72.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.9,41.7,36.50000000000001,61.8);


(lib.ModraCervenaFE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(23.7,23,1,1,0,0,0,24.7,24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ModraCervenaFE, new cjs.Rectangle(-1,-1.6,49.4,49.1), null);


(lib.Fetransferin1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.FE3Kulicka();
	this.instance.parent = this;
	this.instance.setTransform(22.2,22.2,1,1,0,0,0,22.2,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Fetransferin1, new cjs.Rectangle(0,0,44.4,44.4), null);


(lib.FeTransferin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_2
	this.instance = new lib.Fetransferin1();
	this.instance.parent = this;
	this.instance.setTransform(87.2,22.2,1,1,0,0,0,22.2,22.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({alpha:1},80).wait(1));

	// Vrstva_1
	this.instance_1 = new lib.Fetransferin1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.2,22.2,1,1,0,0,0,22.2,22.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},79).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.4,44.4);


(lib.FeCelek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5600BD").s().p("AgFIAQgKAAgKgDIgDgCIAAgDIACgDIADgBQAJADAKAAIADACIABADIgBADIgEABIAAAAgAALH+IgCgDIABgDIADgCQAKgBAKgEIADABIACACIAAAEIgCACQgLAEgLABIAAAAIgDgBgAgtH2QgJgFgJgHIgCgDIABgDIADgCIADABQAIAGAJAFIACACIAAAEIgCACIgCAAIgCAAgAAyHyIgDgCIAAgDIACgDQAIgFAHgHIADgBIADABIACADIgCAEQgIAHgIAFIgDABIgBAAgAhNHcIgDgCQgHgIgFgJIAAgEIACgCIADAAIADABIALARIABADIgCADIgCABIgBAAgABOHWIgCgDIABgEQAGgIAFgJIACgDIAEABIACACIAAAEQgFAKgHAJIgDACIgBAAIgCgBgAhiG4IgCgDQgDgKAAgLIABgDIADgCIADACIACADQAAAJADAKIAAADIgDADIgCAAIgCgBgABhGwIgDgCIgBgDQACgJAAgKIAAgBIgBgRIAAgDIADgCIAEABIACADQABAJAAAJIAAABQAAALgCAKIgCADIgDAAIAAAAgAhjGSIgDgCIgBgDQABgKADgKIACgDIADAAIADACIAAAEQgDAJAAAJIgCADIgDABIAAAAgAkkGKQgLgBgKgDIgCgBIgBgEIACgDIAEAAQAJACAJABIADABIACADIgCADIgDACIAAAAgAEaGJQgKAAgKgDIgDgCIAAgEIACgCIADgBQAJADAKAAIADACIABADIgBADIgEABIAAAAgAkUGIIgBgDIABgDIACgCQAKgCAKgDIAEAAIACADIAAADIgDADQgKADgLACIgBAAIgDgBgAErGHIgCgCIABgEIADgCQAKgBAKgDIADAAIACACIAAAEIgCACQgLAEgLABIAAAAIgDgBgAlMF/QgKgEgJgHIgBgDIABgEIADgBIADABQAIAGAJAEIACADIAAADIgDACIgBABIgCgBgADyF/QgJgFgJgHIgCgDIABgDIADgCIADABQAIAGAJAFIACACIAAAEIgCACIgCAAIgCAAgAjsF8IgDgCIgBgEIACgDQAIgFAIgGIADgCIADACIABADIgBADQgIAHgJAGIgDABIAAAAgAFSF7IgDgCIAAgDIACgDQAIgFAHgHIADgBIADABIACADIgCADQgIAIgIAGIgDAAIgBAAgABbF2IgDgDQgEgJgFgIIgBgDIACgDIADgBIADACQAHAJAEAKIAAADIgDADIgBAAIgCAAgAhZFsIgCgDIAAgEQAFgIAGgHIADgCIAEABIABADIgBAEQgGAGgEAIIgDACIgBAAIgCAAgAlsFlIgDgCQgHgIgFgJIgBgDIACgDIAEAAIADACIALAQIABADIgCADIgDABIAAAAgADSFlIgDgCQgHgIgFgJIAAgDIACgDIADAAIADACIALAQIABADIgCADIgCABIgBAAgAjRFgIgBgEIAAgDQAHgJAEgJIADgCIADAAIACADIAAADQgFAKgGAKIgDABIgBAAIgDAAgAFuFfIgCgDIABgEQAGgIAFgJIACgCIAEAAIACACIAAAEQgFAKgHAJIgDACIgBAAIgCgBgABBFTIgOgLIgCgDIABgDIADgCIADAAIAPAMIACADIgBADIgEACIAAAAIgDgBgAg8FNIgDgCIgBgEIACgCQAIgHAJgEIADAAIADACIAAADIgCADIgQAKIgDABIAAAAgAmBFCIgCgDQgDgKgBgLIABgEIADgBIAEABIABADQAAAKADAKIAAADIgDACIgBAAIgCAAgAC9FBIgCgDQgDgKAAgLIABgDIADgCIADABIACAEQAAAJADAKIAAADIgDACIgCABIgCgBgAAiE+QgKgDgJgBIgDgCIgBgEIACgCIADgBQALABAKAEIACACIAAAEIgCACIgCABIgBgBgAgZE7IgCgDIAAgEIADgBQAKgDAMAAIACABIACADIgCADIgCACQgKAAgKACIgBAAIgCAAgAi+E6IgDgCIAAgEQABgJABgJIAAgBIgCgRIABgDIADgCIADAAIACAEQACAJAAAJIAAABQAAAKgCAKIgCADIgDABIgBAAgAGBE5IgDgCIgBgDQACgJAAgKIAAAAIgBgRIAAgEIADgCIAEABIACADQABAJAAAKIAAAAQAAALgCAKIgCACIgDABIAAAAgAmDEcIgDgCIgBgDQABgLADgKIADgCIADgBIADADIAAADQgDAJgBAKIgCADIgCABIgBAAgAC8EbIgDgCIgBgDQABgKADgKIACgDIADAAIADACIAAAEQgDAJAAAJIgCADIgDABIAAAAgAjED/IgCgCQgEgJgGgIIAAgDIACgEIADAAIADACQAGAJAEAJIAAAEIgCACIgCABIgCgBgAF7D/IgDgCQgEgKgFgIIgBgDIACgDIADgBIADACQAHAJAEAKIAAAEIgDACIgBAAIgCAAgAl5D1IgCgCIABgEQAEgIAHgIIADgBIADABIACADIgBADQgGAHgEAIIgDABIgCABIgCgBgADGD1IgCgDIAAgEQAFgIAGgHIADgCIAEABIABAEIgBADQgGAGgEAIIgDACIgBAAIgCAAgAjdDcIgOgLIgCgCIAAgEIADgCIAEABIAPALIABAEIgBADIgDABIgBAAIgCgBgAFhDcIgOgLIgCgDIABgDIADgCIADAAIAPAMIACADIgBADIgEACIAAAAIgDgBgAlcDWIgCgCIgBgDIABgDQAJgGAJgFIADAAIADACIAAADIgCADIgQAKIgDABIgBAAgADjDWIgDgCIgBgDIACgDQAIgHAJgEIADgBIADADIAAADIgCADIgQAKIgDABIAAAAgAj9DIQgJgDgKgCIgCgCIgBgDIABgDIAEgBQAKACAKADIADADIAAADIgCADIgDAAIgBAAgAFCDIQgKgEgJgBIgDgCIgBgDIACgDIADgBQALABAKAEIACACIAAAEIgCACIgCABIgBAAgAk5DEIgCgDIABgDIADgCQAKgDAMAAIADABIABAEIgBADIgDABQgLAAgJADIgCAAIgCgBgAEGDDIgCgCIAAgDIADgCQAKgDAMAAIADABIACADIgCADIgDACQgKAAgKACIgBAAIgCgBgAmdBqQgKAAgKgDIgDgCIAAgDIACgDIADgBQAJADAKAAIADACIABADIgBADIgEABIAAAAgAmMBoIgCgDIABgDIADgCQAKgBAKgDIADAAIACACIAAAEIgCACQgLAEgLABIAAAAIgDgBgAGTBoQgLgBgKgCIgCgCIgBgEIACgDIAEAAQAJACAJABIADABIACAEIgCACIgDACIAAAAgAGjBmIgBgDIABgEIACgBQAKgCAKgDIAEAAIACADIAAADIgDADQgKADgLACIgBAAIgDgBgAnFBgQgJgFgJgHIgCgDIABgDIADgCIADABQAIAGAJAFIACACIAAAEIgCACIgCAAIgCAAgAFrBdQgKgEgJgHIgBgDIABgEIADgBIADABQAIAGAJAEIACADIAAADIgDACIgBABIgCgBgAllBcIgDgCIAAgDIACgDQAIgFAHgHIADgBIADABIACADIgCADQgIAIgIAGIgDAAIgBAAgAHLBaIgDgCIgBgEIACgCQAIgGAIgHIADgBIADACIABADIgBADQgIAHgJAGIgDABIAAAAgAnlBGIgDgCQgHgIgFgJIAAgEIACgCIADAAIADACIALAQIABADIgCADIgCABIgBAAgAFLBDIgDgCQgHgIgFgJIgBgDIACgDIAEAAIADACIALAQIABADIgCADIgDABIAAAAgAlJBAIgCgDIABgEQAGgIAFgJIACgCIAEAAIACACIAAAEQgFAKgHAJIgDACIgBAAIgCgBgAHmA+IgBgEIAAgDQAHgJAEgJIADgCIADAAIACADIAAADQgFAKgGAJIgDACIgBAAIgDAAgAn6AiIgCgDQgDgKAAgLIABgDIADgCIADABIACAEQAAAJADAKIAAADIgDADIgCAAIgCgBgAE2AgIgCgDQgDgKgBgLIABgEIADgBIAEABIABADQAAAKADAKIAAADIgDACIgBAAIgCAAgAk2AaIgDgCIgBgDQACgJAAgKIAAAAIgBgRIAAgDIADgCIAEABIACADQABAJAAAJIAAAAQAAALgCAKIgCADIgDAAIAAAAgAH5AYIgDgCIAAgEQABgJABgJIAAAAIgCgRIABgDIADgCIADAAIACAEQACAJAAAJIAAAAQAAAKgCAKIgCADIgDABIgBAAgAn7gDIgDgCIgBgDQABgKADgKIACgDIADAAIADACIAAAEQgDAJAAAJIgCADIgDABIAAAAgAE0gFIgDgCIgBgDQABgLADgKIADgCIADAAIADACIAAADQgDAJgBAKIgCADIgDABIAAAAgAk8gfIgDgCQgEgKgFgIIgBgDIACgDIADgBIADACQAHAJAEAKIAAAEIgDACIgBAAIgCAAgAHzghIgCgDQgEgJgGgIIAAgEIACgDIADAAIADACQAGAJAEAJIAAAEIgCADIgCAAIgCAAgAnxgpIgCgDIAAgEQAFgIAGgHIADgCIAEABIABAEIgBADQgGAGgEAIIgDACIgBAAIgCAAgAE+gsIgCgDIABgDQAEgIAHgIIADgBIADABIACADIgBADQgGAHgEAIIgDACIgCAAIgCgBgAlWhCIgOgLIgCgDIABgDIADgCIADAAIAPAMIACADIgBADIgEACIAAAAIgDgBgAHahFIgOgKIgCgDIAAgEIADgCIAEABIAPALIABAEIgBADIgDABIgBAAIgCgBgAnUhIIgDgCIgBgEIACgCQAIgHAJgEIADgBIADADIAAADIgCADIgQAKIgDABIAAAAgAFbhLIgCgCIgBgDIABgDQAJgGAJgFIADAAIADACIAAAEIgCACIgQAKIgDABIgBAAgAl1hXQgKgDgJgBIgDgCIgBgDIACgDIADgBQALABAKAEIACACIAAAEIgCACIgCABIgBgBgAG6hZQgJgDgKgCIgCgCIgBgDIABgDIAEgBQAKACAKAEIADACIAAADIgCADIgDAAIgBAAgAmxhaIgCgDIAAgDIADgCQAKgDAMAAIADABIACADIgCADIgDACQgKAAgKACIgBAAIgCAAgAF+hdIgCgDIABgDIADgCQAKgDAMAAIADABIABAEIgBADIgDABQgLAAgJACIgCABIgCgBgAEZi1QgKgBgKgDIgDgBIAAgEIACgDIADAAQAJACAKABIADABIABADIgBADIgEACIAAAAgAkki1QgLgBgKgDIgCgBIgBgEIACgDIAEAAQAJACAJABIADABIACADIgCADIgDACIAAAAgAEqi3IgCgDIABgDIADgCQAKgCAKgDIADAAIACADIAAADIgCADQgLADgLACIAAAAIgDgBgAkUi3IgBgDIABgDIACgCQAKgCAKgDIAEAAIACADIAAADIgDADQgKADgLACIgBAAIgDgBgADxjAQgJgEgJgHIgCgDIABgEIADgBIADABQAIAGAJAEIACADIAAADIgCACIgCABIgCgBgAlMjAQgKgEgJgHIgBgDIABgEIADgBIADABQAIAGAJAEIACADIAAADIgDACIgBABIgCgBgAFRjDIgDgCIAAgEIACgDQAIgFAHgGIADgCIADACIACADIgCADQgIAHgIAGIgDABIgBAAgAjsjDIgDgCIgBgEIACgDQAIgFAIgGIADgCIADACIABADIgBADQgIAHgJAGIgDABIAAAAgADRjaIgDgCQgHgIgFgJIAAgDIACgDIADAAIADACIALAQIABADIgCADIgDABIAAAAgAlsjaIgDgCQgHgIgFgJIgBgDIACgDIAEAAIADACIALAQIABADIgCADIgDABIAAAAgAFtjfIgCgEIABgDQAGgJAFgJIACgCIAEAAIACADIAAADQgFAKgHAKIgDABIgBAAIgCAAgAjRjfIgBgEIAAgDQAHgJAEgJIADgCIADAAIACADIAAADQgFAKgGAKIgDABIgBAAIgDAAgAC8j9IgCgDQgDgKAAgLIABgEIADgBIADABIACADQAAAKADAKIAAADIgDACIgCAAIgCAAgAmBj9IgCgDQgDgKgBgLIABgEIADgBIAEABIABADQAAAKADAKIAAADIgDACIgBAAIgCAAgAGAkFIgDgCIgBgEQACgJAAgJIAAgBIgBgRIAAgDIADgCIAEAAIACAEQABAJAAAJIAAABQAAAKgCAKIgCADIgDABIAAAAgAi+kFIgDgCIAAgEQABgJABgJIAAgBIgCgRIABgDIADgCIADAAIACAEQACAJAAAJIAAABQAAAKgCAKIgCADIgDABIgBAAgAC7kjIgDgCIgBgDQABgLADgKIACgCIADgBIADADIAAADQgDAJAAAKIgCADIgDABIAAAAgAmDkjIgDgCIgBgDQABgLADgKIADgCIADgBIADADIAAADQgDAJgBAKIgCADIgCABIgBAAgAgFkvQgLAAgKgDIgCgCIgBgEIACgCIAEAAQAJACAJAAIADACIACADIgCADIgDABIAAAAgAAKkxIgBgDIABgDIACgCQAKgBAKgEIAEABIACACIAAAEIgDACQgKAEgLABIgBAAIgDgBgAgtk5QgKgFgJgHIgBgDIABgDIADgCIADABQAIAGAJAFIACACIAAAEIgDACIgBAAIgCAAgAAyk9IgDgCIgBgDIACgDQAIgFAIgHIADgBIADABIABAEIgBADQgIAHgJAFIgDABIAAAAgAF6lAIgDgCQgEgJgFgIIgBgDIACgEIADAAIADACQAHAJAEAJIAAAEIgDACIgBABIgCgBgAjElAIgCgCQgEgJgGgIIAAgDIACgEIADAAIADACQAGAJAEAJIAAAEIgCACIgCABIgCgBgADFlKIgCgCIAAgEQAFgIAGgIIADgBIAEABIABADIgBADQgGAHgEAIIgDABIgBABIgCgBgAl5lKIgCgCIABgEQAEgIAHgIIADgBIADABIACADIgBADQgGAHgEAIIgDABIgCABIgCgBgAhNlTIgDgCQgHgIgFgJIgBgEIACgCIAEgBIADACIALAQIABAEIgCADIgDABIAAAAgABNlZIgBgDIAAgDQAHgJAEgJIADgDIADABIACACIAAAEQgFAKgGAJIgDACIgBAAIgDgBgAFgljIgOgLIgCgCIABgEIADgCIADABIAPALIACAEIgBADIgEABIAAAAIgDgBgAjdljIgOgLIgCgCIAAgEIADgCIAEABIAPALIABAEIgBADIgDABIgBAAIgCgBgADilpIgDgCIgBgDIACgDQAIgGAJgFIADAAIADACIAAADIgCADIgQAKIgDABIAAAAgAlclpIgCgCIgBgDIABgDQAJgGAJgFIADAAIADACIAAADIgCADIgQAKIgDABIgBAAgAhil3IgCgCQgDgLgBgLIABgDIADgCIAEACIABACQAAAKADAKIAAAEIgDABIgBABIgCgBgAFBl3QgKgDgJgCIgDgCIgBgDIACgDIADgBQALACAKADIACADIAAADIgCADIgCAAIgBAAgAj9l3QgJgDgKgCIgCgCIgBgDIABgDIAEgBQAKACAKADIADADIAAADIgCADIgDAAIgBAAgAEFl7IgCgDIAAgDIADgCQAKgDAMAAIADABIACAEIgCADIgDABQgKAAgKADIgBAAIgCgBgAk5l7IgCgDIABgDIADgCQAKgDAMAAIADABIABAEIgBADIgDABQgLAAgJADIgCAAIgCgBgABgl/IgDgCIAAgDQABgJABgKIAAgBIgCgRIABgDIADgCIADABIACADQACAJAAAJIAAABQAAALgCAKIgCACIgDABIgBAAgAhkmdIgDgBIgBgEQABgKADgKIADgDIADAAIADACIAAADQgDAKgBAJIgCADIgCABIgBAAgABam5IgCgDQgEgJgGgIIAAgDIACgDIADgBIADACQAGAJAEAKIAAADIgCADIgCAAIgCAAgAhanDIgCgDIABgDQAEgJAHgHIADgCIADABIACADIgBAEQgGAGgEAIIgDACIgCAAIgCAAgABBncIgOgLIgCgDIAAgDIADgCIAEABIAPALIABADIgBADIgDACIgBAAIgCgBgAg9niIgCgCIgBgEIABgCQAJgHAJgEIADAAIADACIAAADIgCADIgQAKIgDABIgBAAgAAhnxQgJgDgKgBIgCgCIgBgEIABgCIAEgBQAKABAKAEIADACIAAAEIgCACIgDABIgBgBgAgan1IgCgCIABgEIADgCQAKgCAMAAIACABIABADIgBAEIgCABQgLAAgJACIgCAAIgCgBg");
	this.shape.setTransform(51.2988,51.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

	// Vrstva_2
	this.instance = new lib.Fe3();
	this.instance.parent = this;
	this.instance.setTransform(52.65,92.05,1,1,0,0,0,11.9,10.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},18).wait(141));

	// Fe3
	this.instance_1 = new lib.Fe3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.5,80.25,1,1,0,0,0,11.9,10.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({alpha:1},19).wait(121));

	// Fe3
	this.instance_2 = new lib.Fe3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(93.55,51.25,1,1,0,0,0,11.9,10.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).to({alpha:1},19).wait(101));

	// Fe3
	this.instance_3 = new lib.Fe3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(81.4,22.65,1,1,0,0,0,11.9,10.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).to({alpha:1},19).wait(81));

	// Fe3
	this.instance_4 = new lib.Fe3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(52.65,10.5,1,1,0,0,0,11.9,10.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80).to({_off:false},0).to({alpha:1},20).wait(60));

	// Fe3
	this.instance_5 = new lib.Fe3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(23.95,22.65,1,1,0,0,0,11.9,10.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(101).to({_off:false},0).to({alpha:1},19).wait(40));

	// Fe3
	this.instance_6 = new lib.Fe3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(11.9,51.55,1,1,0,0,0,11.9,10.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(121).to({_off:false},0).to({alpha:1},19).wait(20));

	// Fe3
	this.instance_7 = new lib.Fe3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(23.95,80.25,1,1,0,0,0,11.9,10.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(141).to({_off:false},0).to({alpha:1},18).wait(1));

	// Vrstva_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA8024").s().p("AB1GXQAAgxgigiQgjgigwAAQgvAAgiAiQgiAiAAAxQAAAMACAKQg3gPg1geIARgOQAigiAAgwQAAgxgigiQgigigwAAQgxAAgiAiIgOARQgdgygQg6QANADAKAAQAwAAAigiQAigjAAgwQAAgvgigiQgigigwAAIgXACQAQg7AdgxIAOARQAiAiAxAAQAwAAAigiQAigiAAgwQAAgxgigiIgRgOQAxgdA7gQQgCAKAAANQAAAwAiAiQAiAiAvAAQAwAAAjgiQAigiAAgwQAAgKgDgNQA6AQAyAdIgRAOQgiAiAAAxQAAAwAiAiQAiAiAxAAQAwAAAigiQAHgHAHgKQAeA0APA4IgWgCQgxAAgiAiQgiAiAAAvQAAAwAiAjQAiAiAxAAQAKAAAMgDQgPA4geA0QgGgJgIgIQgigigwAAQgxAAgiAiQgiAiAAAxQAAAwAiAiQAHAHAKAHQg1Afg3AOQADgMAAgKg");
	this.shape_1.setTransform(51.175,51.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.6,102.5);


(lib.Fe2Celek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Fe2
	this.instance = new lib.Fe2();
	this.instance.parent = this;
	this.instance.setTransform(3.05,44.05,1,1,0,0,0,11.6,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).to({_off:true},1).wait(139));

	// Fe2
	this.instance_1 = new lib.Fe2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.8,70.2,1,1,0,0,0,11.6,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({alpha:0},19).to({_off:true},1).wait(119));

	// Fe2
	this.instance_2 = new lib.Fe2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(53.3,19.05,1,1,0,0,0,11.6,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(139).to({alpha:0},19).wait(1));

	// Fe2
	this.instance_3 = new lib.Fe2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(53.3,44.05,1,1,0,0,0,11.6,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({alpha:0},19).to({_off:true},1).wait(99));

	// Fe2
	this.instance_4 = new lib.Fe2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(79.35,44.05,1,1,0,0,0,11.6,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80).to({alpha:0},19).to({_off:true},1).wait(59));

	// Fe2
	this.instance_5 = new lib.Fe2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(53.3,69.25,1,1,0,0,0,11.6,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100).to({alpha:0},19).to({_off:true},1).wait(39));

	// Fe2
	this.instance_6 = new lib.Fe2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(27.8,19.85,1,1,0,0,0,11.6,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120).to({alpha:0},18).to({_off:true},1).wait(20));

	// Fe2
	this.instance_7 = new lib.Fe2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(27.8,44.05,1,1,0,0,0,11.6,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60).to({alpha:0},19).to({_off:true},1).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,8.6,97.2,72.10000000000001);


(lib.Transferin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.FeTransferin_anim = new lib.FeTransferin();
	this.FeTransferin_anim.name = "FeTransferin_anim";
	this.FeTransferin_anim.parent = this;
	this.FeTransferin_anim.setTransform(167.35,-27.45,1,1,0,0,0,22.2,22.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9B0B").s().p("AhXBXQgjgkgBgzQABgyAjgkQAlglAyAAQAzAAAlAkQAkAlAAAyQAAAzgkAkQglAlgzAAQgyAAglglg");
	this.shape.setTransform(199.5,38.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9B0B").s().p("AnMCGQjAiCAAi2QAAglAKgnQASB2BaBOQBcBPB5AAQB7AABdhRQBbhRAOh5QAPB5BcBRQBcBRB7AAQB6gBBbhOQBahPASh2QAKAmAAAmQAAC3i/CBQi/CCkPAAQkNAAi/iBg");
	this.shape_1.setTransform(200.525,-0.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#923EFF").s().p("AFVDUQgDgDgBgEQgBgEAEgDQACgEAEAAQAegDAZgLQAFgCADACQAEABACAEQACAEgCAEQgBADgFACQgdANggADIgBAAQgEAAgCgCgAkzDUQgDgDgBgEQAAgEACgDQADgEAEAAQAdgDAagLQAFgCADACQAEABACAEQABAEgBAEQgBADgFACQgdANggADIgBAAQgEAAgCgCgAEdDUQgggGgbgPQgEgCgCgEQgBgEACgDQACgEAEgBQAEgBAEACQAZANAdAFQADABADADQACADAAAFQgBAEgEACQgCACgDAAIgCAAgAlrDUQgggGgbgPQgFgCgBgEQgBgEACgDQACgEAEgBQAEgBAEACQAZANAdAFQAEABACADQACADAAAFQgCAEgDACQgCACgDAAIgCAAgAHHCnQgEgBgCgDQgEgDABgEQABgEADgDIAMgLQAPgPALgQQACgEAEAAQAEgBAEACQADACABAEQABAEgCAEQgNASgQAQIgOANQgCACgDAAIgCAAgAjBCnQgEgBgCgDQgEgDABgEQAAgEAEgDIAMgLQAPgPALgQQACgEAEAAQAEgBADACQAEACABAEQAAAEgBAEQgNASgQAQIgOANQgCACgDAAIgCAAgACuCaIgCgCQgVgWgOgYQgDgEACgEQABgEADgCQAEgCAEABQAEABACAEQANAWAUAUIACACQACADAAAEQAAAEgCADQgDADgEAAQgFAAgDgDgAnaCaIgBgCQgWgWgOgYQgDgEACgEQABgEADgCQAEgCAEABQAEABADAEQAMAWATAUIADACQACADAAAEQAAAEgCADQgEADgDAAQgEAAgEgDgAIGBFQgDgBgCgDQgCgEABgEQAHgbAAgeQAAgDADgDQADgDAEAAQAEAAADADQADADAAADQAAAhgIAeQgBADgEADIgFABIgDgBgAiCBFQgDgBgCgDQgDgEACgEQAHgbAAgeQAAgDADgDQADgDAEAAQAEAAADADQADADAAADQAAAhgIAeQgBADgEADIgFABIgDgBgAB3A2QgEgCAAgEQgFgXAAgZIAAgQQABgEADgDQADgDAEAAQAEAAADAEQACADAAAEIAAAPQAAAXAFAVQAAAEgCADQgDAEgDABIgCAAQgDAAgDgCgAoRA2QgEgCAAgEQgFgXAAgZIABgQQAAgEADgDQADgDAEAAQAEAAADAEQADADgBAEIAAAPQAAAXAFAVQAAAEgCADQgCAEgEABIgCAAQgDAAgDgCgAIKgRQgEgDgBgEQgCgegMgZQgCgEACgEQABgEADgCQAEgBAEABQAEABACAEQAMAdAFAhQAAAEgDADQgDADgDABIgCAAQgDAAgCgCgAh+gRQgEgDgBgEQgDgegLgZQgCgEACgEQABgEADgCQAEgBAEABQAEABACAEQANAdADAhQABAEgDADQgCADgFABIgBAAQgDAAgCgCgACChBQgEgBgBgEQgCgEACgEQALgdAVgaQADgDADgBQAEAAAEADQADACAAAEQABAEgDAEQgTAXgKAbQgCADgEACIgDABIgEgBgAoGhBQgEgBgBgEQgDgEADgEQALgdAVgaQADgDAEgBQADAAAEADQADACAAAEQABAEgCAEQgUAXgKAbQgCADgEACIgDABIgEgBgAHWh/IgIgKQgQgPgSgMQgDgCgBgEQAAgEABgEQADgDAEgBQAEgBAEACQATANARARIAKAKQACADAAAEQAAAEgDADQgEADgDAAQgEAAgEgDgAixh/IgJgKQgQgPgSgMQgDgCAAgEQgBgEACgEQACgDAEgBQAEgBAEACQATANARARIAKAKQACADAAAEQAAAEgDADQgDADgEAAQgFAAgCgDgADMicQgEgBgCgDQgDgEABgEQAAgEAEgCQAZgTAegJQAEgCADACQAEACACAEQABAEgCAEQgCADgEACQgbAIgXARQgCACgDAAIgCAAgAm8icQgEgBgCgDQgDgEABgEQAAgEAEgCQAZgTAegJQAEgCAEACQADACABAEQACAEgCAEQgCADgEACQgbAIgXARQgCACgDAAIgCAAgAF5i7QgZgGgbAAIgIAAQgDAAgEgDQgDgDAAgEQAAgEADgDQAEgDADAAIAIAAQAdAAAbAHQAFABACADQACAEgBAEQgCAEgDACQgDACgDAAIgBgBgAkPi7QgZgGgbAAIgIAAQgEAAgDgDQgCgDAAgEQAAgEACgDQADgDAEAAIAIAAQAdAAAbAHQAEABADADQABAEAAAEQgCAEgDACQgDACgDAAIgBgBg");
	this.shape_2.setTransform(199.65,-27.5958);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.FeTransferin_anim}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Transferin, new cjs.Rectangle(135.3,-49.6,130.5,100.30000000000001), null);


(lib.Zelezo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SvetleModraSpodni1_anim = new lib.ModraSipkaSvetla();
	this.SvetleModraSpodni1_anim.name = "SvetleModraSpodni1_anim";
	this.SvetleModraSpodni1_anim.parent = this;
	this.SvetleModraSpodni1_anim.setTransform(666.45,663.8,1,1,0,0,0,2.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.SvetleModraSpodni1_anim).wait(161));

	// Layer_1
	this.CervenaPoolIn_anim = new lib.CervenaSipka9();
	this.CervenaPoolIn_anim.name = "CervenaPoolIn_anim";
	this.CervenaPoolIn_anim.parent = this;
	this.CervenaPoolIn_anim.setTransform(542.8,266.7);

	this.timeline.addTween(cjs.Tween.get(this.CervenaPoolIn_anim).wait(161));

	// Vrstva_1
	this.SipkaZlutaSrafovana_anim = new lib.ZlutaProuzkovanaAnimace();
	this.SipkaZlutaSrafovana_anim.name = "SipkaZlutaSrafovana_anim";
	this.SipkaZlutaSrafovana_anim.parent = this;
	this.SipkaZlutaSrafovana_anim.setTransform(339.05,776.2,1,1,0,0,0,65.2,94.5);

	this.timeline.addTween(cjs.Tween.get(this.SipkaZlutaSrafovana_anim).wait(161));

	// Vrstva_33
	this.instance = new lib.Transferin();
	this.instance.parent = this;
	this.instance.setTransform(634.5,923.45,1,1,0,0,0,200.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(161));

	// Vrstva_32
	this.SipkaFialovaSrafovana_anim = new lib.FialovaSipkaFialovyKanalAnimace();
	this.SipkaFialovaSrafovana_anim.name = "SipkaFialovaSrafovana_anim";
	this.SipkaFialovaSrafovana_anim.parent = this;
	this.SipkaFialovaSrafovana_anim.setTransform(370.9,591.3,1,1,0,0,0,34.4,67.3);

	this.timeline.addTween(cjs.Tween.get(this.SipkaFialovaSrafovana_anim).wait(161));

	// Vrstva_1
	this.Semafor_anim = new lib.Semafor();
	this.Semafor_anim.name = "Semafor_anim";
	this.Semafor_anim.parent = this;
	this.Semafor_anim.setTransform(420.75,426.85,0.6471,0.6471,0,0,0,18.3,30.9);

	this.CervenaVSipkaVehicle1_anim = new lib.CervenaSipkaZpet();
	this.CervenaVSipkaVehicle1_anim.name = "CervenaVSipkaVehicle1_anim";
	this.CervenaVSipkaVehicle1_anim.parent = this;
	this.CervenaVSipkaVehicle1_anim.setTransform(599.55,426.45,1,1,0,0,0,68.5,81.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.CervenaVSipkaVehicle1_anim},{t:this.Semafor_anim}]}).wait(161));

	// Vrstva_13
	this.instance_1 = new lib.FeBezTextu();
	this.instance_1.parent = this;
	this.instance_1.setTransform(691.8,705.6,0.4785,0.4773,0,0,0,10.6,10.6);

	this.instance_2 = new lib.FeBezTextu();
	this.instance_2.parent = this;
	this.instance_2.setTransform(683.9,713.8,0.4785,0.4773,0,0,0,10.6,10.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9B0B").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAHgGAHAAQAJAAAGAGQAGAGABAIQgBAJgGAGQgGAGgJAAQgHAAgHgGg");
	this.shape.setTransform(654.65,701.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B3EA").s().p("AgNAPQgHgHAAgIQAAgHAGgHQAGgGAIgBIgBAIQAAAJAGAGQAGAFAJABIABAAQgFAOgPgBQgIAAgGgGg");
	this.shape_1.setTransform(663.725,694.1,1,1,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00B3EA").ss(0.7).p("AAAheIAAC9");
	this.shape_2.setTransform(663.65,683.625,1,1,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00B3EA").s().p("AgDAnQgEAAgDgDQgEgDAAgFIAAg3QAAgFAEgDQADgDAEAAIAHAAQAEAAAEADQADADAAAFIAAA3QAAAFgDADQgEADgEAAg");
	this.shape_3.setTransform(663.65,672.375,1,1,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9B0B").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_4.setTransform(678.725,701.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00B3EA").s().p("AgUAIIABAAQAJgBAHgFQAFgGAAgJIgCgIQAJABAGAGQAGAHAAAHQAAAIgGAHQgHAGgIAAQgOABgGgOg");
	this.shape_5.setTransform(669.775,694.1,1,1,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00B3EA").ss(0.7).p("AAAheIAAC9");
	this.shape_6.setTransform(669.85,683.625,1,1,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00B3EA").s().p("AgDAnQgEAAgDgDQgEgDAAgFIAAg3QAAgFAEgDQADgDAEAAIAHAAQAEAAAEADQADADAAAFIAAA3QAAAFgDADQgEADgEAAg");
	this.shape_7.setTransform(669.85,672.375,1,1,180);

	this.instance_3 = new lib.FeBezTextu();
	this.instance_3.parent = this;
	this.instance_3.setTransform(649.95,714.05,0.4785,0.4773,0,0,0,10.6,10.6);

	this.instance_4 = new lib.FeBezTextu();
	this.instance_4.parent = this;
	this.instance_4.setTransform(642.25,706.1,0.4785,0.4773,0,0,0,10.6,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9B0B").s().p("ABMA3QgBgVgPgPQgQgPgVgBQgVgBgQANQANgQgBgVQgBgVgPgQQgPgPgVgBQgVgCgRANQAEgHAEgEQAXgWAnAHQAnAIAhAhQAhAhAIAmQAHAogWAWIgLAJQAMgRgBgVg");
	this.shape_8.setTransform(648.0688,707.9813);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9B0B").s().p("AhLBUQgWgWAHgoQAIgmAhghQAhghAngIQAngHAXAWQAFAGADAFQgRgNgVACQgVABgPAPQgPAQgBAVQgBAVANAQQgQgNgVABQgVABgQAPQgPAPgBAVQgBAVAMARIgLgJg");
	this.shape_9.setTransform(685.7313,707.6313);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.instance_4},{t:this.instance_3},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1}]}).wait(161));

	// Vrstva_11
	this.instance_5 = new lib.vehicle();
	this.instance_5.parent = this;
	this.instance_5.setTransform(662.05,603.55,0.829,0.829,0,0,0,100.4,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(161));

	// Vrstva_20
	this.OranzovoZlutaSpodni2_anim = new lib.TmaveModra1();
	this.OranzovoZlutaSpodni2_anim.name = "OranzovoZlutaSpodni2_anim";
	this.OranzovoZlutaSpodni2_anim.parent = this;
	this.OranzovoZlutaSpodni2_anim.setTransform(673.75,697.15,0.3623,0.3623,132.4792,0,0,6.2,10.3);

	this.OranzovoZlutaSpodni1_anim = new lib.TmaveModra1();
	this.OranzovoZlutaSpodni1_anim.name = "OranzovoZlutaSpodni1_anim";
	this.OranzovoZlutaSpodni1_anim.parent = this;
	this.OranzovoZlutaSpodni1_anim.setTransform(659.55,697.2,0.3624,0.3624,-128.7691,0,0,6.2,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.OranzovoZlutaSpodni1_anim},{t:this.OranzovoZlutaSpodni2_anim}]}).wait(161));

	// Vrstva_14
	this.OranzovoZlutaSipkaDiTF_anim = new lib.SipkaVehicle();
	this.OranzovoZlutaSipkaDiTF_anim.name = "OranzovoZlutaSipkaDiTF_anim";
	this.OranzovoZlutaSipkaDiTF_anim.parent = this;
	this.OranzovoZlutaSipkaDiTF_anim.setTransform(668.95,721.15,1,1,0,0,0,6.3,5.4);

	this.timeline.addTween(cjs.Tween.get(this.OranzovoZlutaSipkaDiTF_anim).wait(161));

	// Vrstva_9
	this.CervenaVSipkaVehicle1_anim_1 = new lib.SipkaCervenaZVehiclu();
	this.CervenaVSipkaVehicle1_anim_1.name = "CervenaVSipkaVehicle1_anim_1";
	this.CervenaVSipkaVehicle1_anim_1.parent = this;
	this.CervenaVSipkaVehicle1_anim_1.setTransform(429.9,635.15,1,1,180,0,0,6.2,5.4);

	this.CervenaVSipkaVehicle1_anim_2 = new lib.SipkaCervenaZVehiclu();
	this.CervenaVSipkaVehicle1_anim_2.name = "CervenaVSipkaVehicle1_anim_2";
	this.CervenaVSipkaVehicle1_anim_2.parent = this;
	this.CervenaVSipkaVehicle1_anim_2.setTransform(668.35,536.8,1,1,0,0,0,6.2,5.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Ag1g9IBrA9IhrA+g");
	this.shape_10.setTransform(530.975,340.725,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.CervenaVSipkaVehicle1_anim_2},{t:this.CervenaVSipkaVehicle1_anim_1}]}).wait(161));

	// KanalFialovy
	this.KanalFialovy_anim = new lib.kanalFialovy();
	this.KanalFialovy_anim.name = "KanalFialovy_anim";
	this.KanalFialovy_anim.parent = this;
	this.KanalFialovy_anim.setTransform(430.1,668.9,0.6592,0.6592,0,0,0,30.5,35.9);

	this.timeline.addTween(cjs.Tween.get(this.KanalFialovy_anim).wait(161));

	// KanalModry
	this.KanalModry_anim = new lib.kanal();
	this.KanalModry_anim.name = "KanalModry_anim";
	this.KanalModry_anim.parent = this;
	this.KanalModry_anim.setTransform(666.95,196.15,0.6592,0.6592,0,0,0,30.5,35.9);

	this.timeline.addTween(cjs.Tween.get(this.KanalModry_anim).wait(161));

	// KanalCerveny
	this.KanalCerveny_anim = new lib.KanalCerveny();
	this.KanalCerveny_anim.name = "KanalCerveny_anim";
	this.KanalCerveny_anim.parent = this;
	this.KanalCerveny_anim.setTransform(460.75,199.35,0.6592,0.6592,0,0,0,30.5,35.9);

	this.timeline.addTween(cjs.Tween.get(this.KanalCerveny_anim).wait(161));

	// Vrstva_7
	this.Merak2Cerveny_anim = new lib.ZelenyMerak();
	this.Merak2Cerveny_anim.name = "Merak2Cerveny_anim";
	this.Merak2Cerveny_anim.parent = this;
	this.Merak2Cerveny_anim.setTransform(823.75,108.9,0.6406,0.6401,0,0,0,50.9,51);

	this.timeline.addTween(cjs.Tween.get(this.Merak2Cerveny_anim).wait(161));

	// CervenaZastaveni
	this.CervenaSrafovanaZastaveni1_anim = new lib.CervenaLevaCelek();
	this.CervenaSrafovanaZastaveni1_anim.name = "CervenaSrafovanaZastaveni1_anim";
	this.CervenaSrafovanaZastaveni1_anim.parent = this;
	this.CervenaSrafovanaZastaveni1_anim.setTransform(502.9,240.7,0.8414,0.8414,-45.4783,0,0,3.1,30.8);

	this.timeline.addTween(cjs.Tween.get(this.CervenaSrafovanaZastaveni1_anim).wait(161));

	// CervenaZastaveni2
	this.CervenaSrafovanaZastaveni2_anim = new lib.CervenaPravaCelek();
	this.CervenaSrafovanaZastaveni2_anim.name = "CervenaSrafovanaZastaveni2_anim";
	this.CervenaSrafovanaZastaveni2_anim.parent = this;
	this.CervenaSrafovanaZastaveni2_anim.setTransform(592.55,241.8,0.7778,0.7778,65.9898,0,0,11.5,74.2);

	this.timeline.addTween(cjs.Tween.get(this.CervenaSrafovanaZastaveni2_anim).wait(161));

	// ZlutaSipka
	this.SipkaZlutaH_anim = new lib.HSipka();
	this.SipkaZlutaH_anim.name = "SipkaZlutaH_anim";
	this.SipkaZlutaH_anim.parent = this;
	this.SipkaZlutaH_anim.setTransform(455.65,107.85,1,1,0,0,0,0,30.5);

	this.timeline.addTween(cjs.Tween.get(this.SipkaZlutaH_anim).wait(161));

	// ZlutaSipkaVodik
	this.SipkaZlutaH1_anim = new lib.H2Sipka();
	this.SipkaZlutaH1_anim.name = "SipkaZlutaH1_anim";
	this.SipkaZlutaH1_anim.parent = this;
	this.SipkaZlutaH1_anim.setTransform(441.3,234.6,1,1,0,0,0,13,9.1);

	this.timeline.addTween(cjs.Tween.get(this.SipkaZlutaH1_anim).wait(161));

	// Vrstva_12
	this.SipkaCervenoFialova1_anim = new lib.CervenaFialovaSipka1();
	this.SipkaCervenoFialova1_anim.name = "SipkaCervenoFialova1_anim";
	this.SipkaCervenoFialova1_anim.parent = this;
	this.SipkaCervenoFialova1_anim.setTransform(461,368.6,1,1,0,0,0,27.3,33.3);

	this.timeline.addTween(cjs.Tween.get(this.SipkaCervenoFialova1_anim).wait(161));

	// SipkaKos
	this.CervenaKos_anim = new lib.CerveneSipkaKos();
	this.CervenaKos_anim.name = "CervenaKos_anim";
	this.CervenaKos_anim.parent = this;
	this.CervenaKos_anim.setTransform(612.55,324.7,1,1,0,0,0,70.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.CervenaKos_anim).wait(161));

	// CervenaSipka
	this.SipkaCervena2_anim = new lib.CervenaKanalCervenyHorni();
	this.SipkaCervena2_anim.name = "SipkaCervena2_anim";
	this.SipkaCervena2_anim.parent = this;
	this.SipkaCervena2_anim.setTransform(486.4,115.6,1,1,0,0,0,15.6,22.8);

	this.timeline.addTween(cjs.Tween.get(this.SipkaCervena2_anim).wait(161));

	// Vrstva_16
	this.SipkaCervena3_anim = new lib.CervenaKanalCervenySpodni();
	this.SipkaCervena3_anim.name = "SipkaCervena3_anim";
	this.SipkaCervena3_anim.parent = this;
	this.SipkaCervena3_anim.setTransform(468.4,242.45,1,1,-4.2116,0,0,4.9,18.5);

	this.timeline.addTween(cjs.Tween.get(this.SipkaCervena3_anim).wait(161));

	// Vrstva_17
	this.SipkaRuzova2_anim = new lib.RuzovaRNA1();
	this.SipkaRuzova2_anim.name = "SipkaRuzova2_anim";
	this.SipkaRuzova2_anim.parent = this;
	this.SipkaRuzova2_anim.setTransform(458.55,502.1,1,1,0,0,0,30.9,3.9);

	this.timeline.addTween(cjs.Tween.get(this.SipkaRuzova2_anim).wait(161));

	// SipkaFialova
	this.SipkaFialovaHorni_anim = new lib.FialovaSipka();
	this.SipkaFialovaHorni_anim.name = "SipkaFialovaHorni_anim";
	this.SipkaFialovaHorni_anim.parent = this;
	this.SipkaFialovaHorni_anim.setTransform(594.55,67.2,1,1,0,0,0,25.3,17.9);

	this.timeline.addTween(cjs.Tween.get(this.SipkaFialovaHorni_anim).wait(161));

	// SipkaModra
	this.SipkaModra_anim = new lib.ModraSipka();
	this.SipkaModra_anim.name = "SipkaModra_anim";
	this.SipkaModra_anim.parent = this;
	this.SipkaModra_anim.setTransform(675.7,122.3,1,1,0,0,0,6.4,10.3);

	this.timeline.addTween(cjs.Tween.get(this.SipkaModra_anim).wait(161));

	// CervenaSipka
	this.SipkaCervena1_anim = new lib.CervenaMasoCelek();
	this.SipkaCervena1_anim.name = "SipkaCervena1_anim";
	this.SipkaCervena1_anim.parent = this;
	this.SipkaCervena1_anim.setTransform(264.85,63.9,1,1,0,0,0,42.2,5.3);

	this.timeline.addTween(cjs.Tween.get(this.SipkaCervena1_anim).wait(161));

	// Vrstva_23
	this.SipkaCervenaSpodni_anim = new lib.CervenaSipkaFialovyKanalDole();
	this.SipkaCervenaSpodni_anim.name = "SipkaCervenaSpodni_anim";
	this.SipkaCervenaSpodni_anim.parent = this;
	this.SipkaCervenaSpodni_anim.setTransform(481.75,715.25,1,1,0,0,0,51.9,17.9);

	this.timeline.addTween(cjs.Tween.get(this.SipkaCervenaSpodni_anim).wait(161));

	// Vrstva_24
	this.SipkaSeda_anim = new lib.SedaSipka();
	this.SipkaSeda_anim.name = "SipkaSeda_anim";
	this.SipkaSeda_anim.parent = this;
	this.SipkaSeda_anim.setTransform(829.45,64.1,1,1,0,0,0,33.9,0);

	this.timeline.addTween(cjs.Tween.get(this.SipkaSeda_anim).wait(161));

	// Vrstva_25
	this.instance_6 = new lib.Jadro();
	this.instance_6.parent = this;
	this.instance_6.setTransform(82.6,524.8,1,1,0,0,0,81,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(161));

	// Vrstva_27
	this.Hep_anim = new lib.HepSpodni();
	this.Hep_anim.name = "Hep_anim";
	this.Hep_anim.parent = this;
	this.Hep_anim.setTransform(577.1,686.5,1,1,0,0,0,8.6,6.5);

	this.timeline.addTween(cjs.Tween.get(this.Hep_anim).wait(161));

	// Vrstva_28
	this.Hemox_anim = new lib.Hemox();
	this.Hemox_anim.name = "Hemox_anim";
	this.Hemox_anim.parent = this;
	this.Hemox_anim.setTransform(660.05,281,1,1,8.1954,0,0,8.8,10.5);

	this.timeline.addTween(cjs.Tween.get(this.Hemox_anim).wait(161));

	// Vrstva_31
	this.DcytB_anim = new lib.SipkaFialovoCervena();
	this.DcytB_anim.name = "DcytB_anim";
	this.DcytB_anim.parent = this;
	this.DcytB_anim.setTransform(531.5,112.9,1,1,0,0,0,11.4,10.1);

	this.timeline.addTween(cjs.Tween.get(this.DcytB_anim).wait(161));

	// Vrstva_2
	this.Hodnota9_text = new cjs.Text("8888", "12px 'Arial'", "#FFFFFF");
	this.Hodnota9_text.name = "Hodnota9_text";
	this.Hodnota9_text.textAlign = "center";
	this.Hodnota9_text.lineHeight = 15;
	this.Hodnota9_text.lineWidth = 27;
	this.Hodnota9_text.parent = this;
	this.Hodnota9_text.setTransform(636.7,1007);

	this.Hodnota7_text = new cjs.Text("8888", "12px 'Arial'", "#FFFFFF");
	this.Hodnota7_text.name = "Hodnota7_text";
	this.Hodnota7_text.textAlign = "center";
	this.Hodnota7_text.lineHeight = 15;
	this.Hodnota7_text.lineWidth = 27;
	this.Hodnota7_text.parent = this;
	this.Hodnota7_text.setTransform(355.95,831.3);

	this.Hodnota6_text = new cjs.Text("8888", "12px 'Arial'", "#141414");
	this.Hodnota6_text.name = "Hodnota6_text";
	this.Hodnota6_text.textAlign = "center";
	this.Hodnota6_text.lineHeight = 15;
	this.Hodnota6_text.lineWidth = 27;
	this.Hodnota6_text.parent = this;
	this.Hodnota6_text.setTransform(353.9,500.6);

	this.Hodnota5_text = new cjs.Text("8888", "12px 'Arial'", "#141414");
	this.Hodnota5_text.name = "Hodnota5_text";
	this.Hodnota5_text.textAlign = "center";
	this.Hodnota5_text.lineHeight = 15;
	this.Hodnota5_text.lineWidth = 27;
	this.Hodnota5_text.parent = this;
	this.Hodnota5_text.setTransform(713.35,382.95);

	this.Hodnota4_text = new cjs.Text("8888", "12px 'Arial'", "#141414");
	this.Hodnota4_text.name = "Hodnota4_text";
	this.Hodnota4_text.textAlign = "center";
	this.Hodnota4_text.lineHeight = 15;
	this.Hodnota4_text.lineWidth = 27;
	this.Hodnota4_text.parent = this;
	this.Hodnota4_text.setTransform(454.75,333.7);

	this.Hodnota3_text = new cjs.Text("8888", "9px 'Arial'", "#141414");
	this.Hodnota3_text.name = "Hodnota3_text";
	this.Hodnota3_text.textAlign = "center";
	this.Hodnota3_text.lineHeight = 12;
	this.Hodnota3_text.lineWidth = 21;
	this.Hodnota3_text.parent = this;
	this.Hodnota3_text.setTransform(353.95,333.5,1.2161,1.2161);

	this.Hodnota2Cerveny_text = new cjs.Text("8888", "12px 'Arial'", "#141414");
	this.Hodnota2Cerveny_text.name = "Hodnota2Cerveny_text";
	this.Hodnota2Cerveny_text.textAlign = "center";
	this.Hodnota2Cerveny_text.lineHeight = 15;
	this.Hodnota2Cerveny_text.parent = this;
	this.Hodnota2Cerveny_text.setTransform(823.35,97.6);

	this.Hodnota1_text = new cjs.Text("8888", "12px 'Arial'", "#141414");
	this.Hodnota1_text.name = "Hodnota1_text";
	this.Hodnota1_text.textAlign = "center";
	this.Hodnota1_text.lineHeight = 15;
	this.Hodnota1_text.parent = this;
	this.Hodnota1_text.setTransform(266.2,97.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Hodnota1_text},{t:this.Hodnota2Cerveny_text},{t:this.Hodnota3_text},{t:this.Hodnota4_text},{t:this.Hodnota5_text},{t:this.Hodnota6_text},{t:this.Hodnota7_text},{t:this.Hodnota9_text}]}).wait(161));

	// Vrstva_5
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#D4D2D2").ss(1.3).p("AMWgzQgJAAgHgGQgHgGgBgJQgQhyhAhmQhAhmhnhOQgIgGgBgKQgCgKAGgJQAHgIAKgCQAKgBAJAGQBvBUBEBvQBFBuARB8QACAKgGAJQgHAIgKABgAHZn5QgIAAgFgDQhlg+h1ggQh1ggh9AAIgBAAQgKAAgHgHQgIgHAAgLQAAgKAIgHQAHgIAKAAIABAAQCEAAB8AiQB8AiBqBBQAJAFACALQADAKgGAIQgHAMgOAAgAJSHRQgLAAgIgIQgHgIABgKQAAgLAIgHQBehXAyhsQAyhtAAh1IAAgCQAAgKAHgHQAHgIALAAQAKAAAIAIQAHAHAAAKIAAACQAAB/g2B3Qg3B2hlBeQgHAHgKAAgABLKqQgKAAgHgGQgHgHgBgKQAAgKAGgIQAHgIAKgBQB+gJBygqQBygqBehHQAIgHALACQAKABAGAJQAHAIgCAKQgBAKgIAHQhkBLh5AtQh5AsiFAKgAoZnMQgMAAgHgKQgHgIACgLQABgKAIgGQBkhMB4gtQB5gsCFgLQALAAAIAGQAIAHAAAKQABALgGAIQgHAIgLAAQh+AKhyAqQhyAqhdBHQgHAGgJAAgAs0ABQAAh+A2h2QA2h3BlheQAIgHAKABQALAAAHAIQAHAHAAAKQgBALgIAHQhdBXgyBtQgyBsAABzQAAALgHAHQgIAIgKAAQgKAAgHgHQgIgHAAgLgAoXICQgHAAgIgFQhvhUhEhvQhEhvgSh8QgBgKAGgIQAHgJAKgBQAKgBAIAGQAJAGABALQAQBxA/BnQA/BmBoBOQAIAGABAKQACALgHAIQgHAKgNAAgAABKtIgBAAQiEAAh8giQh8gihqhBQgJgFgCgLQgCgKAFgJQAFgIAKgDQAKgCAJAFQBlA+B1AgQB1AgB9AAIABAAQALAAAHAIQAHAHAAAKQAAALgHAHQgIAHgKAAg");
	this.shape_11.setTransform(913.725,524.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D9D9D9").s().p("AAAKtQiEAAh8giQh8gihqhBQgJgGgCgKQgCgKAFgJQAFgJAKgCQAKgCAJAFQBlA+B1AgQB1AgB9AAIABAAQALAAAHAHQAHAHAAALQAAALgHAHQgIAHgKAAgABLKqQgKAAgHgGQgHgIgBgJQAAgKAGgIQAHgIAKgBQB+gJBygrQBygpBehHQAIgHALABQAKACAGAIQAHAJgCAKQgBAKgIAGQhkBMh5AsQh5AtiFAKgAomH8QhvhThEhwQhEhugSh8QgBgKAGgJQAHgIAKgBQAKgBAIAGQAJAGABALQAQBxA/BnQA/BlBoBPQAIAFABALQACALgHAIQgHAJgNABQgHgBgIgFgAI/HIQgHgHABgLQAAgKAIgHQBehXAyhsQAyhtAAh1IAAgCQAAgKAHgHQAHgIALABQAKgBAIAIQAHAHAAAKIAAACQAAB/g2B3Qg3B2hlBeQgHAGgKAAQgLABgIgJgAssATQgIgIAAgJIAAgBQAAh+A2h3QA2h2BlheQAIgHAKAAQALAAAHAJQAHAHAAAKQgBAKgIAIQhdBXgyBtQgyBsAABzQAAALgHAHQgIAIgKgBQgKAAgHgGgAMWgzQgJAAgHgGQgHgGgBgKQgQhxhAhmQhAhnhnhNQgIgGgBgKQgCgKAGgJQAHgJAKgBQAKgCAJAHQBvBTBEBwQBFBuARB8QACAKgGAJQgHAHgKACgAosnXQgHgIACgKQABgKAIgHQBkhLB4gtQB5gsCFgLQALAAAIAGQAIAGAAALQABALgGAHQgHAJgLAAQh+AKhyAqQhyAqhdBHQgHAGgJgBQgMAAgHgKgAHMn8Qhlg+h1ggQh1ggh9AAIgBAAQgKAAgHgHQgIgHAAgLQAAgKAIgIQAHgHAKAAIABAAQCEAAB8AiQB8AhBqBBQAJAGACAKQADALgGAIQgHAMgOAAQgIAAgFgDg");
	this.shape_12.setTransform(913.725,524.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#CCCCCC").ss(0.9).p("AL/AAQAACBg8B1Qg6ByhqBXQjhC5k+AAQk9AAjgi5QhrhXg6hyQg8h1AAiBQAAh/A8h2QA6hxBrhYQDgi5E9AAQE+AADhC5QBqBYA6BxQA8B2AAB/g");
	this.shape_13.setTransform(913.675,524.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ECECEC").s().p("AodG/QhrhYg6hxQg8h1AAiBQAAiAA8h1QA6hyBrhXQDgi5E9AAQE+AADhC5QBqBXA6ByQA8B1AACAQAACBg8B1Qg6BxhqBYQjhC5k+AAQk9AAjgi5g");
	this.shape_14.setTransform(913.675,524.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(161));

	// Vrstva_1
	this.Merak1_anim = new lib.SedyMerakFialovy();
	this.Merak1_anim.name = "Merak1_anim";
	this.Merak1_anim.parent = this;
	this.Merak1_anim.setTransform(266.1,108.75,0.6406,0.6401,0,0,0,50.9,51);

	this.Merak6_anim = new lib.MerakRNA();
	this.Merak6_anim.name = "Merak6_anim";
	this.Merak6_anim.parent = this;
	this.Merak6_anim.setTransform(354,512.5,0.6411,0.6411,0,0,0,51,51);

	this.Merak3_anim = new lib.MerakFialovy();
	this.Merak3_anim.name = "Merak3_anim";
	this.Merak3_anim.parent = this;
	this.Merak3_anim.setTransform(353.95,345.15,0.6411,0.6411,0,0,0,50.9,50.9);

	this.instance_7 = new lib.ModraCervenaFE();
	this.instance_7.parent = this;
	this.instance_7.setTransform(404.95,78.05,1,1,0,0,0,23.2,23.3);

	this.instance_8 = new lib.ModraCervenaFE();
	this.instance_8.parent = this;
	this.instance_8.setTransform(295.7,26.1,1,1,0,0,0,23.2,23.3);

	this.instance_9 = new lib.ModraCervenaFE();
	this.instance_9.parent = this;
	this.instance_9.setTransform(843.55,28.15,1,1,0,0,0,23.2,23.3);

	this.instance_10 = new lib.FecervenaBezTextu();
	this.instance_10.parent = this;
	this.instance_10.setTransform(429.9,597.7,1,1,0,0,0,10.5,10.5);

	this.instance_11 = new lib.FeBezTextu();
	this.instance_11.parent = this;
	this.instance_11.setTransform(593.9,710.8,1,1,0,0,0,10.5,10.5);

	this.instance_12 = new lib.FecervenaBezTextu();
	this.instance_12.parent = this;
	this.instance_12.setTransform(565,710.8,1,1,0,0,0,10.5,10.5);

	this.instance_13 = new lib.FecervenaBezTextu();
	this.instance_13.parent = this;
	this.instance_13.setTransform(668.95,519.75,1,1,0,0,0,10.5,10.5);

	this.instance_14 = new lib.VodikZlutyBezTextu();
	this.instance_14.parent = this;
	this.instance_14.setTransform(606.35,630.2,1.0048,1.0048,0,0,0,10.4,10.5);

	this.instance_15 = new lib.VodikZlutyBezTextu();
	this.instance_15.parent = this;
	this.instance_15.setTransform(629.45,559,1.0048,1.0048,0,0,0,10.4,10.5);

	this.instance_16 = new lib.VodikZlutyBezTextu();
	this.instance_16.parent = this;
	this.instance_16.setTransform(414.25,270.2,1.0048,1.0048,0,0,0,10.4,10.5);

	this.instance_17 = new lib.FecervenaBezTextu();
	this.instance_17.parent = this;
	this.instance_17.setTransform(632.75,270.95,1,1,0,0,0,10.5,10.5);

	this.instance_18 = new lib.ModraCervenaFE();
	this.instance_18.parent = this;
	this.instance_18.setTransform(667.1,256.7,0.3484,0.3484,0,0,0,23.3,23.3);

	this.instance_19 = new lib.ModraCervenaFE();
	this.instance_19.parent = this;
	this.instance_19.setTransform(667.1,156.65,0.3484,0.3484,0,0,0,23.3,23.3);

	this.instance_20 = new lib.ModraCervenaFE();
	this.instance_20.parent = this;
	this.instance_20.setTransform(702.6,91.05,1,1,0,0,0,23.2,23.3);

	this.instance_21 = new lib.FecervenaBezTextu();
	this.instance_21.parent = this;
	this.instance_21.setTransform(469.95,154.85,0.4773,0.4773,0,0,0,10.5,10.6);

	this.instance_22 = new lib.VodikZlutyBezTextu();
	this.instance_22.parent = this;
	this.instance_22.setTransform(455.75,154.85,0.4796,0.4796,0,0,0,10.5,10.5);

	this.instance_23 = new lib.VodikZlutyBezTextu();
	this.instance_23.parent = this;
	this.instance_23.setTransform(455.05,62.7,1.0048,1.0048,0,0,0,10.5,10.4);

	this.instance_24 = new lib.FecervenaBezTextu();
	this.instance_24.parent = this;
	this.instance_24.setTransform(798.95,27.55,1,1,0,0,0,10.5,10.5);

	this.instance_25 = new lib.FeBezTextu();
	this.instance_25.parent = this;
	this.instance_25.setTransform(774.7,27.55,1,1,0,0,0,10.5,10.5);

	this.instance_26 = new lib.FeBezTextu();
	this.instance_26.parent = this;
	this.instance_26.setTransform(607.45,99.9,1,1,0,0,0,10.5,10.5);

	this.instance_27 = new lib.FeBezTextu();
	this.instance_27.parent = this;
	this.instance_27.setTransform(621.85,36.35,1,1,0,0,0,10.5,10.5);

	this.instance_28 = new lib.FeBezTextu();
	this.instance_28.parent = this;
	this.instance_28.setTransform(545.55,89.3,1,1,0,0,0,10.5,10.5);

	this.instance_29 = new lib.FecervenaBezTextu();
	this.instance_29.parent = this;
	this.instance_29.setTransform(520.8,89.3,1,1,0,0,0,10.5,10.5);

	this.instance_30 = new lib.FecervenaBezTextu();
	this.instance_30.parent = this;
	this.instance_30.setTransform(396.5,28.05,1,1,0,0,0,10.5,10.5);

	this.instance_31 = new lib.FeBezTextu();
	this.instance_31.parent = this;
	this.instance_31.setTransform(560.6,49,1,1,0,0,0,10.5,10.5);

	this.instance_32 = new lib.FeBezTextu();
	this.instance_32.parent = this;
	this.instance_32.setTransform(534.55,28.05,1,1,0,0,0,10.5,10.5);

	this.instance_33 = new lib.FeBezTextu();
	this.instance_33.parent = this;
	this.instance_33.setTransform(507.05,59.8,1,1,0,0,0,10.5,10.5);

	this.instance_34 = new lib.FeBezTextu();
	this.instance_34.parent = this;
	this.instance_34.setTransform(479.15,27.4,1,1,0,0,0,10.5,10.5);

	this.instance_35 = new lib.FeBezTextu();
	this.instance_35.parent = this;
	this.instance_35.setTransform(359.6,63.05,1,1,0,0,0,10.5,10.5);

	this.Merak4_anim = new lib.MerakCerveny();
	this.Merak4_anim.name = "Merak4_anim";
	this.Merak4_anim.parent = this;
	this.Merak4_anim.setTransform(455,345.2,0.6411,0.6411,0,0,0,51,50.9);

	this.Merak9_anim = new lib.MerakFialovy();
	this.Merak9_anim.name = "Merak9_anim";
	this.Merak9_anim.parent = this;
	this.Merak9_anim.setTransform(636.8,1018.55,0.6411,0.6411,0,0,0,51,51);

	this.Merak7_anim = new lib.MerakZluty();
	this.Merak7_anim.name = "Merak7_anim";
	this.Merak7_anim.parent = this;
	this.Merak7_anim.setTransform(356.05,842,0.6411,0.6411,0,0,0,51,51);

	this.instance_36 = new lib.Path_98();
	this.instance_36.parent = this;
	this.instance_36.setTransform(153.3,970.35,2.2488,2.2488,-11.2261,0,0,20.9,12.9);
	this.instance_36.alpha = 0.1797;

	this.instance_37 = new lib.Path_1_4();
	this.instance_37.parent = this;
	this.instance_37.setTransform(160.7,941.4,2.2488,2.2488,-11.2261,0,0,13.3,9.9);
	this.instance_37.alpha = 0.1094;

	this.instance_38 = new lib.Path_2_1_1();
	this.instance_38.parent = this;
	this.instance_38.setTransform(159.55,949.15,2.2488,2.2488,-11.2261,0,0,19.1,13.4);
	this.instance_38.alpha = 0.1094;

	this.instance_39 = new lib.Path_3_1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(157.3,928.25,2.2488,2.2488,-11.2261,0,0,10.8,6.9);
	this.instance_39.alpha = 0.1406;

	this.instance_40 = new lib.Path_4_1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(156,935.8,2.2488,2.2488,-11.2261,0,0,9.2,6.5);
	this.instance_40.alpha = 0.1406;

	this.instance_41 = new lib.Path_5_1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(163.7,925.05,2.2488,2.2488,-11.2261,0,0,13.3,8.8);
	this.instance_41.alpha = 0.3281;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A84A4A").s().p("AA9BVQgrgBgwgbQgxgagZgjQgZgjANgYQANgXArACQAsACAvAaQAxAaAZAjQAZAjgNAYQgMAVgmAAIgGAAg");
	this.shape_15.setTransform(155.3115,929.5686,2.241,2.241,-11.292);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC5F5E").s().p("AhTCaQhfg0gqhRQgrhRAjhAQAjg/BbgJQBcgIBeAzQBeA0ArBRQAqBRgiA/QgjBAhcAJIgaABQhNAAhSgsg");
	this.shape_16.setTransform(150.0339,944.2198,2.241,2.241,-11.292);

	this.instance_42 = new lib.Path_40();
	this.instance_42.parent = this;
	this.instance_42.setTransform(172.4,975.2,2.25,2.25,-11.2167,0,0,26.4,17.4);
	this.instance_42.alpha = 0.1992;

	this.instance_43 = new lib.Path_94();
	this.instance_43.parent = this;
	this.instance_43.setTransform(945.65,71.05,1.4322,1.4322,0,0,0,9.3,21.9);
	this.instance_43.alpha = 0.3594;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#515151").ss(3,1).p("AAAiRIAAEj");
	this.shape_17.setTransform(942.2984,65.7623,1.4182,1.4182);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#515151").ss(3,1).p("AAAiRIAAEj");
	this.shape_18.setTransform(930.0308,65.7623,1.4182,1.4182);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#515151").ss(3,1).p("AAAiRIAAEj");
	this.shape_19.setTransform(917.6924,65.7623,1.4182,1.4182);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#515151").ss(3,1).p("AAAiRIAAEj");
	this.shape_20.setTransform(905.4248,65.7623,1.4182,1.4182);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BABABA").ss(3,1).p("AAAiRIAAEj");
	this.shape_21.setTransform(943.4329,65.7623,1.4182,1.4182);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#BABABA").ss(3,1).p("AAAiRIAAEj");
	this.shape_22.setTransform(931.1654,65.7623,1.4182,1.4182);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#BABABA").ss(3,1).p("AAAiRIAAEj");
	this.shape_23.setTransform(918.8979,65.7623,1.4182,1.4182);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BABABA").ss(3,1).p("AAAiRIAAEj");
	this.shape_24.setTransform(906.5594,65.7623,1.4182,1.4182);

	this.instance_44 = new lib.Path_1_0();
	this.instance_44.parent = this;
	this.instance_44.setTransform(931.9,37.9,1.4322,1.4322,0,0,0,22.1,2.3);
	this.instance_44.alpha = 0.1602;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#303030").p("AiyAAIFlAA");
	this.shape_25.setTransform(925.8659,38.6024,1.4234,1.4234);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#918E8D").s().p("AjPApIAAgpQAAgQAMgMQALgMAQAAIFRAAQAQAAAMAMQALAMABAQIAAApg");
	this.shape_26.setTransform(925.9015,32.0903,1.4234,1.4234);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#918E8D").s().p("AiAD0QgVAAgOgOQgPgPAAgVIAAmXQAAgTAPgHQAKgEAZAAIEBAAQAZAAAKAEQAPAHAAATIAAGXQAAAVgPAPQgPAOgUAAg");
	this.shape_27.setTransform(925.9015,63.9036,1.4234,1.4234);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#8C8C8C").ss(2).p("AA8AdIh3AAQgJAAgGgGQgGgGAAgJIAAgPQAAgJAGgGQAHgGAIAAIB3AAQAJAAAGAGQAGAGAAAJIAAAPQAAAJgGAGQgGAGgJAAg");
	this.shape_28.setTransform(925.7236,25.3291,1.4234,1.4234);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#353333").ss(2).p("AA8AdIh3AAQgJAAgGgGQgGgGAAgJIAAgPQAAgJAGgGQAHgGAIAAIB3AAQAJAAAGAGQAGAGAAAJIAAAPQAAAJgGAGQgGAGgJAAg");
	this.shape_29.setTransform(926.5776,26.1831,1.4234,1.4234);

	this.instance_45 = new lib.Path_93();
	this.instance_45.parent = this;
	this.instance_45.setTransform(930.5,62.6,1.4327,1.4327,0,0,0,21.2,27.4);
	this.instance_45.alpha = 0.6289;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00AAFF").s().p("Ag9g1IB7ABIg+Bqg");
	this.shape_30.setTransform(666.85,240.225);

	this.instance_46 = new lib.Group_3_16();
	this.instance_46.parent = this;
	this.instance_46.setTransform(223,24,1,1,0,0,0,9.1,5.9);
	this.instance_46.alpha = 0.1992;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3C1D64").s().p("AhJBKQgfgfAAgrQAAgrAfgeQAegfArAAQArAAAfAfQAfAfAAAqQAAArgfAfQgfAfgrAAQgqAAgfgfgAhAhAQgaAbAAAlQAAAnAaAZQAbAbAlAAQAmAAAagbQAbgaAAgmQAAglgbgbQgZgagnAAQglAAgbAag");
	this.shape_31.setTransform(223.025,27.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#593A9C").s().p("AhABAQgagZAAgnQAAglAagbQAbgaAlAAQAnAAAZAaQAbAbAAAlQAAAmgbAaQgaAbgmAAQglAAgbgbg");
	this.shape_32.setTransform(223.025,27.375);

	this.instance_47 = new lib.Group_3_15();
	this.instance_47.parent = this;
	this.instance_47.setTransform(249.65,24,1,1,0,0,0,9.1,5.9);
	this.instance_47.alpha = 0.1992;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#660000").s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQAsAAAeAfQAfAeAAArQAAArgfAfQgfAfgrAAQgqAAgfgfgAg/hAQgbAbAAAlQAAAmAbAaQAbAbAkAAQAmAAAbgbQAagZAAgnQAAglgagbQgbgagmAAQglAAgaAag");
	this.shape_33.setTransform(249.675,27.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C7181F").s().p("Ag/BAQgbgaAAgmQAAglAbgbQAagaAlAAQAmAAAbAaQAaAbAAAlQAAAngaAZQgbAbgmAAQgkAAgbgbg");
	this.shape_34.setTransform(249.675,27.375);

	this.SipkaCervenoFialova2_anim = new lib.CervenaFialovaSipka2();
	this.SipkaCervenoFialova2_anim.name = "SipkaCervenoFialova2_anim";
	this.SipkaCervenoFialova2_anim.parent = this;
	this.SipkaCervenoFialova2_anim.setTransform(421.8,331.1,1,1,0,0,0,24.7,27.8);

	this.Merak5_anim = new lib.MerakCerny();
	this.Merak5_anim.name = "Merak5_anim";
	this.Merak5_anim.parent = this;
	this.Merak5_anim.setTransform(713.4,394.1,0.6411,0.6411,0,0,0,50.9,51);

	this.Fe2Skupina_anim = new lib.Fe2Celek();
	this.Fe2Skupina_anim.name = "Fe2Skupina_anim";
	this.Fe2Skupina_anim.parent = this;
	this.Fe2Skupina_anim.setTransform(518.7,291,1,1,0,0,0,42.9,39.3);

	this.Fe3Skupina_anim = new lib.FeCelek();
	this.Fe3Skupina_anim.name = "Fe3Skupina_anim";
	this.Fe3Skupina_anim.parent = this;
	this.Fe3Skupina_anim.setTransform(369.2,400.9,1,1,0,0,0,52.8,51.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF24FA").s().p("AgqAAIBVgxIAABjg");
	this.shape_35.setTransform(424.775,498.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF953E").s().p("Ag4jeQAwACAgBCQAhBBAABZQAABaghBCQggBBgwACg");
	this.shape_36.setTransform(313.275,248.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF953E").s().p("AgXCcQgghBAAhbQAAhaAghBQAhhBAugCIAAG9QgugCghhBg");
	this.shape_37.setTransform(290.4,248.275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#472809").ss(1,1,1).p("AAahRQgoAXgfAeQgHAGAAAFQgBAJARAJQAIAGAPAJQANALAUAVQAZAaAIAI");
	this.shape_38.setTransform(323.8971,248.275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#472809").ss(1,1,1).p("AAAhMQAgAXAMAcQAPAignAeQgPAMg1Aa");
	this.shape_39.setTransform(280.2583,240.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#472809").ss(1,1,1).p("Ag4hZQAxAOAsAUQARAIACAJQADALgMANQgcAegEAFQgOATgDAXQgDAXgOAE");
	this.shape_40.setTransform(279.8716,258.35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#472809").ss(1,1,1).p("AAHhiQgeAQgYAXQgcAagLAaQgFAMAEALQAEAOAUAIQAPAGA/AYQAMAFAbAJQAXAIANAJ");
	this.shape_41.setTransform(327.8279,242.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#472809").ss(1,1,1).p("Ag8h/QA8AXAwAqQAKAKACAFQAHASgTAaQgXAegXAVQgOAPgQAYQgKAOgSAc");
	this.shape_42.setTransform(278.6942,252.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#472809").ss(1,1,1).p("AAcB+Qg+gPgagbQgEgFgNgSQgYghgGgXQgEgKADgJQADgJAKgHQAhgaBDgZQBOgcAbgQ");
	this.shape_43.setTransform(329.5058,255.925);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#680700").ss(2).p("AgbAAIA3AA");
	this.shape_44.setTransform(302.475,229.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#680700").ss(0.5).p("Ag0AAIBpAA");
	this.shape_45.setTransform(299.975,229.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#680700").ss(2).p("AAcAAIg3AA");
	this.shape_46.setTransform(300.225,232.15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#680700").ss(0.5).p("AA1AAIhpAA");
	this.shape_47.setTransform(302.725,232.15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#680700").ss(2).p("AgbAAIA3AA");
	this.shape_48.setTransform(302.475,234.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#680700").ss(0.5).p("Ag0AAIBpAA");
	this.shape_49.setTransform(299.975,234.75);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#680700").ss(2).p("AAcAAIg3AA");
	this.shape_50.setTransform(300.225,237.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#680700").ss(0.5).p("AA1AAIhpAA");
	this.shape_51.setTransform(302.725,237.35);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#680700").ss(2).p("AgbAAIA3AA");
	this.shape_52.setTransform(302.475,240);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#680700").ss(0.5).p("Ag0AAIBpAA");
	this.shape_53.setTransform(299.975,240);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#680700").ss(2).p("AAcAAIg3AA");
	this.shape_54.setTransform(300.225,242.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#680700").ss(0.5).p("AA1AAIhpAA");
	this.shape_55.setTransform(302.725,242.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#680700").ss(2).p("AgbAAIA3AA");
	this.shape_56.setTransform(302.475,245.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#680700").ss(0.5).p("Ag0AAIBpAA");
	this.shape_57.setTransform(299.975,245.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#680700").ss(2).p("AAcAAIg3AA");
	this.shape_58.setTransform(300.225,247.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#680700").ss(0.5).p("AA1AAIhpAA");
	this.shape_59.setTransform(302.725,247.85);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#680700").ss(2).p("AgbAAIA3AA");
	this.shape_60.setTransform(302.475,250.45);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#680700").ss(0.5).p("Ag0AAIBpAA");
	this.shape_61.setTransform(299.975,250.45);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#680700").ss(2).p("AAcAAIg3AA");
	this.shape_62.setTransform(300.225,253.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#680700").ss(0.5).p("AA1AAIhpAA");
	this.shape_63.setTransform(302.725,253.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#680700").ss(2).p("AgbAAIA3AA");
	this.shape_64.setTransform(302.475,255.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#680700").ss(0.5).p("Ag0AAIBpAA");
	this.shape_65.setTransform(299.975,255.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#680700").ss(2).p("AAcAAIg3AA");
	this.shape_66.setTransform(300.225,258.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#680700").ss(0.5).p("AA1AAIhpAA");
	this.shape_67.setTransform(302.725,258.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#680700").ss(2).p("AgbAAIA3AA");
	this.shape_68.setTransform(302.475,260.95);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#680700").ss(0.5).p("Ag0AAIBpAA");
	this.shape_69.setTransform(299.975,260.95);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#680700").ss(2).p("AAcAAIg3AA");
	this.shape_70.setTransform(300.225,263.55);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#680700").ss(0.5).p("AA1AAIhpAA");
	this.shape_71.setTransform(302.725,263.55);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#680700").ss(2).p("AgbAAIA3AA");
	this.shape_72.setTransform(302.475,266.15);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#680700").ss(0.5).p("Ag0AAIBpAA");
	this.shape_73.setTransform(299.975,266.15);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF953E").s().p("Ag4jeQAwACAgBCQAhBBAABZQAABaghBCQggBBgwACg");
	this.shape_74.setTransform(770.725,248.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF953E").s().p("AgXCcQghhBAAhbQAAhaAhhBQAghBAwgCIAAG9QgwgCgghBg");
	this.shape_75.setTransform(747.825,248.275);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#472809").ss(1,1,1).p("AAahRQgnAWggAfQgHAGAAAFQgBAJARAJQAIAGAPAJQANALAUAVQAZAaAIAI");
	this.shape_76.setTransform(781.3243,248.275);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#472809").ss(1,1,1).p("AAAhMQAgAXAMAcQAPAignAeQgPAMg1Aa");
	this.shape_77.setTransform(737.7083,240.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#472809").ss(1,1,1).p("Ag4hZQAxAOAtAUQAQAIACAJQADAKgMAOQgbAdgEAGQgOATgEAXQgEAXgNAE");
	this.shape_78.setTransform(737.279,258.35);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#472809").ss(1,1,1).p("AAHhiQgeAQgYAXQgcAagLAaQgFANAEAKQAEAOAUAIQADABBLAdQAMAFAaAJQAXAIAOAJ");
	this.shape_79.setTransform(785.2658,242.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#472809").ss(1,1,1).p("Ag8h/QA8AWAwArQAJAKACAFQAIARgTAbQgVAbgZAYQgOAPgQAYQgTAcgJAO");
	this.shape_80.setTransform(736.1311,252.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#472809").ss(1,1,1).p("AAdB+Qg+gPgbgbQgEgFgNgSQgZgkgFgUQgDgMADgHQACgIALgIQAggaBDgZQBPgcAagQ");
	this.shape_81.setTransform(786.95,255.925);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#680700").ss(2).p("AgcAAIA5AA");
	this.shape_82.setTransform(759.9,229.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#680700").ss(0.5).p("Ag1AAIBrAA");
	this.shape_83.setTransform(757.4,229.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#680700").ss(2).p("AAcAAIg3AA");
	this.shape_84.setTransform(757.675,232.15);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#680700").ss(0.5).p("AA1AAIhpAA");
	this.shape_85.setTransform(760.175,232.15);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#680700").ss(2).p("AgcAAIA5AA");
	this.shape_86.setTransform(759.9,234.75);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#680700").ss(0.5).p("Ag1AAIBrAA");
	this.shape_87.setTransform(757.4,234.75);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#680700").ss(2).p("AAcAAIg3AA");
	this.shape_88.setTransform(757.675,237.35);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#680700").ss(0.5).p("AA1AAIhpAA");
	this.shape_89.setTransform(760.175,237.35);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#680700").ss(2).p("AgcAAIA5AA");
	this.shape_90.setTransform(759.9,240);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#680700").ss(0.5).p("Ag1AAIBrAA");
	this.shape_91.setTransform(757.4,240);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#680700").ss(2).p("AAcAAIg3AA");
	this.shape_92.setTransform(757.675,242.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#680700").ss(0.5).p("AA1AAIhpAA");
	this.shape_93.setTransform(760.175,242.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#680700").ss(2).p("AgcAAIA5AA");
	this.shape_94.setTransform(759.9,245.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#680700").ss(0.5).p("Ag1AAIBrAA");
	this.shape_95.setTransform(757.4,245.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#680700").ss(2).p("AAcAAIg3AA");
	this.shape_96.setTransform(757.675,247.85);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#680700").ss(0.5).p("AA1AAIhpAA");
	this.shape_97.setTransform(760.175,247.85);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#680700").ss(2).p("AgcAAIA5AA");
	this.shape_98.setTransform(759.9,250.45);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#680700").ss(0.5).p("Ag1AAIBrAA");
	this.shape_99.setTransform(757.4,250.45);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#680700").ss(2).p("AAcAAIg3AA");
	this.shape_100.setTransform(757.675,253.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#680700").ss(0.5).p("AA1AAIhpAA");
	this.shape_101.setTransform(760.175,253.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#680700").ss(2).p("AgcAAIA5AA");
	this.shape_102.setTransform(759.9,255.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#680700").ss(0.5).p("Ag1AAIBrAA");
	this.shape_103.setTransform(757.4,255.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#680700").ss(2).p("AAcAAIg3AA");
	this.shape_104.setTransform(757.675,258.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#680700").ss(0.5).p("AA1AAIhpAA");
	this.shape_105.setTransform(760.175,258.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#680700").ss(2).p("AgcAAIA5AA");
	this.shape_106.setTransform(759.9,260.95);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#680700").ss(0.5).p("Ag1AAIBrAA");
	this.shape_107.setTransform(757.4,260.95);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#680700").ss(2).p("AAcAAIg3AA");
	this.shape_108.setTransform(757.675,263.55);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#680700").ss(0.5).p("AA1AAIhpAA");
	this.shape_109.setTransform(760.175,263.55);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#680700").ss(2).p("AgcAAIA5AA");
	this.shape_110.setTransform(759.9,266.15);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#680700").ss(0.5).p("Ag1AAIBrAA");
	this.shape_111.setTransform(757.4,266.15);

	this.instance_48 = new lib.Group_5_0();
	this.instance_48.parent = this;
	this.instance_48.setTransform(764.4,249.55,1,1,0,0,0,34.5,22.4);
	this.instance_48.alpha = 0.4805;

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFEA2C").ss(4).p("Ak+AhIBQhTIBKBQIBbhQIBWBTIBOhTIBTBTIAfAPQAvAOBRgC");
	this.shape_112.setTransform(340.5528,867.721);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#A0A0A0").ss(3.6).p("ABIhKQBFAAAIAAQApgDAhgQQApgVA0AYQAEABAnAVQAaANASAFQAiAJAQAJQAcARgMAZQgNAdhFAJQgaAEhFABQgogEgWgBQgogBgQAQQgBACgIALQgFAHgGADQgQAJgYgPQgPgKgLgMQgVgXglgHQgGgBg+gEQhSgGhEAJQg7ALgdAFQg0AIglgDQgXgCgMADQgVAFgKAFQgRAJgMARQgLASAAAT");
	this.shape_113.setTransform(355.1903,883.1986,1.3229,1.3229);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#783C82").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_114.setTransform(890.5128,895.8689,1.8708,1.8708);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#783C82").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_115.setTransform(872.5994,893.811,1.8708,1.8708);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#783C82").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_116.setTransform(866.7997,888.7597,1.8708,1.8708);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#783C82").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_117.setTransform(866.3788,864.2048,1.8708,1.8708);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#783C82").s().p("AgEAAQgBgFAFAAQAFAAABAFQgBAGgFAAQgFAAABgGg");
	this.shape_118.setTransform(889.6241,857.8907,1.8708,1.8708);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#783C82").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_119.setTransform(910.3905,888.1984,1.8708,1.8708);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#783C82").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_120.setTransform(908.4729,882.9133,1.8708,1.8708);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#783C82").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_121.setTransform(875.0782,883.0068,1.8708,1.8708);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#783C82").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAABQgDACgCAAQgGAAAAgHg");
	this.shape_122.setTransform(867.0804,882.2585,1.8708,1.8708);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#783C82").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_123.setTransform(872.3655,888.1049,1.8708,1.8708);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#783C82").s().p("AgKAMQgFgGAAgGQAAgGAFgFQAFgEAFAAQAHAAAFAEQAEAFAAAGQAAAHgEAFQgFAEgHAAQgFAAgFgEg");
	this.shape_124.setTransform(881.9536,893.811,1.8708,1.8708);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#783C82").s().p("AgFAGQgCgDAAgDQAAgHAHAAQAIAAAAAHQAAADgCADQgCACgEAAQgCAAgDgCg");
	this.shape_125.setTransform(894.8157,892.9223,1.8708,1.8708);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#783C82").s().p("AgGAHQgDgDAAgEQAAgEADgDQADgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgDgDg");
	this.shape_126.setTransform(904.0296,889.4145,1.8708,1.8708);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#783C82").s().p("AgHAHQgCgDAAgEQAAgDACgDQAEgDADgBQAEABADADQADADAAADQAAAEgDADQgDAEgEAAQgDAAgEgEg");
	this.shape_127.setTransform(912.3549,872.2962,1.8708,1.8708);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#783C82").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_128.setTransform(909.5019,877.4878,1.8708,1.8708);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#783C82").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_129.setTransform(905.2925,868.4142,1.8708,1.8708);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#783C82").s().p("AgFAHQgDgDAAgEQAAgDADgDQACgCADAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_130.setTransform(898.838,860.6034,1.8708,1.8708);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#783C82").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_131.setTransform(887.4258,863.4097,1.8708,1.8708);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#783C82").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_132.setTransform(875.2653,868.6013,1.8708,1.8708);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#783C82").s().p("AgHAAQAAgCACgDQACgCADAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_133.setTransform(864.9757,871.5946,1.8708,1.8708);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#783C82").s().p("AgGAHQgDgDAAgEQAAgDADgEQADgDADAAQAEAAADADQADAEAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_134.setTransform(872.6461,875.1025,1.8708,1.8708);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#783C82").s().p("AgJAAQAAgJAJAAQAKAAgBAJQABAKgKgBQgJABAAgKg");
	this.shape_135.setTransform(881.5794,857.61,1.8708,1.8708);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#783C82").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAADgCADQgDACgDAAQgHgBAAgHg");
	this.shape_136.setTransform(872.3655,859.5744,1.8708,1.8708);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#783C82").s().p("AguArQgVgSABgZQgBgYAVgSQATgSAbAAQAcAAATASQAVASAAAYQAAAZgVASQgTASgcAAQgbAAgTgSg");
	this.shape_137.setTransform(890.2789,877.3475,1.8708,1.8708);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#B36498").s().p("AAZCVQgSgGgGgBQgGAAgXAEQgVAEgLgFQgGgCgNgLQgMgJgKgCQgFgBgOAAQgLAAgHgDQgPgHgDgTQgBgKADgYQgBAHgdgXQgEgKAAgNQgBgLAFgHIAGgHQAFgJgCgPQgDgUABgEQACgOANgJIAXgPQAFgEADgJIAFgPQAFgPAPgJQAPgIAQACQAKABAUAJQASAIALABQAJABAbgIQAYgGAMAHQAJAEAJAOQALAPAHAEIAaAIQAPAEAEAJQAEAGgCAOQgBAPACAGQADAIAJAHIASAKQAKAFAFAIQAHAJgDAIQgCAEgGAGIgIAIQgHAKADAZQADAZgIAJQgJANgcgBIgTgBQgMABgHAEQgGAEgMAPQgLANgLABIgDABQgJAAgMgEg");
	this.shape_138.setTransform(888.221,873.5404,1.8708,1.8708);

	this.instance_49 = new lib.Path_100();
	this.instance_49.parent = this;
	this.instance_49.setTransform(520.05,1007.5,2.2094,2.2094,0,0,0,20.6,13.1);
	this.instance_49.alpha = 0.1797;

	this.instance_50 = new lib.Path_1_6();
	this.instance_50.parent = this;
	this.instance_50.setTransform(506.25,983.4,2.2094,2.2094,0,0,0,13,9.1);
	this.instance_50.alpha = 0.1094;

	this.instance_51 = new lib.Path_2_3();
	this.instance_51.parent = this;
	this.instance_51.setTransform(508.9,990.65,2.2094,2.2094,0,0,0,19,12.8);
	this.instance_51.alpha = 0.1094;

	this.instance_52 = new lib.Path_3_3();
	this.instance_52.parent = this;
	this.instance_52.setTransform(502.9,972.8,2.2094,2.2094,0,0,0,10.6,6.8);
	this.instance_52.alpha = 0.1406;

	this.instance_53 = new lib.Path_4_3();
	this.instance_53.parent = this;
	this.instance_53.setTransform(507.05,980.1,2.2094,2.2094,0,0,0,9.2,6.2);
	this.instance_53.alpha = 0.1406;

	this.instance_54 = new lib.Path_5_3();
	this.instance_54.parent = this;
	this.instance_54.setTransform(501.05,967.85,2.2094,2.2094,0,0,0,14.2,6.9);
	this.instance_54.alpha = 0.3281;

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#A84A4A").s().p("Ah1A/QgMgYAZgjQAagiAwgaQAwgaAsgCQArgBANAXQAMAYgZAjQgaAjgwAaQgwAagrABIgEAAQgoAAgNgWg");
	this.shape_139.setTransform(502.3672,974.5982,2.2044,2.2044);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#CC5F5E").s().p("AhoDEQhbgJgihAQgihAArhQQAshSBfgyQBegzBbAJQBcAKAiBAQAiBAgrBQQgrBRhgAzQhQAqhMAAQgPAAgPgBg");
	this.shape_140.setTransform(508.9361,988.342,2.2044,2.2044);

	this.instance_55 = new lib.Path_97();
	this.instance_55.parent = this;
	this.instance_55.setTransform(1023.3,899.55,2.1331,2.1331,0,0,0,24.2,6.4);
	this.instance_55.alpha = 0.1797;

	this.instance_56 = new lib.Path_1_3();
	this.instance_56.parent = this;
	this.instance_56.setTransform(1022.35,866.75,2.1331,2.1331,0,0,0,14.8,5.8);
	this.instance_56.alpha = 0.1094;

	this.instance_57 = new lib.Path_2_0();
	this.instance_57.parent = this;
	this.instance_57.setTransform(1022.65,878.4,2.1331,2.1331,0,0,0,21.6,7.3);
	this.instance_57.alpha = 0.1094;

	this.instance_58 = new lib.Path_3_0();
	this.instance_58.parent = this;
	this.instance_58.setTransform(1022.7,848.75,2.1331,2.1331,0,0,0,12.7,3.1);
	this.instance_58.alpha = 0.1406;

	this.instance_59 = new lib.Path_4_0();
	this.instance_59.parent = this;
	this.instance_59.setTransform(1023.35,861.25,2.1331,2.1331,0,0,0,10.8,4.5);
	this.instance_59.alpha = 0.1406;

	this.instance_60 = new lib.Path_5_0();
	this.instance_60.parent = this;
	this.instance_60.setTransform(1026.15,845.45,2.1331,2.1331,0,0,0,16,3.4);
	this.instance_60.alpha = 0.3281;

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#A84A4A").s().p("AhdAuQgngTAAgbQAAgaAngTQAngTA2AAQA3AAAnATQAnATAAAaQAAAbgnATQgnATg3AAQg2AAgngTg");
	this.shape_141.setTransform(1018.7097,855.2992,2.1263,2.1263);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CC5F5E").s().p("Ai3B7QhMgzAAhIQAAhIBMgyQBMg0BrAAQBsAABMA0QBMAyAABIQAABIhMAzQhMA0hsAAQhrAAhMg0g");
	this.shape_142.setTransform(1018.0718,870.0241,2.1263,2.1263);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#D61ACD").p("AgOAAIAdAA");
	this.shape_143.setTransform(406.45,506.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#D61ACD").p("AgOAAIAdAA");
	this.shape_144.setTransform(406.45,503.45);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#D61ACD").p("AgOAAIAdAA");
	this.shape_145.setTransform(406.45,500.45);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#D61ACD").p("AgOAAIAdAA");
	this.shape_146.setTransform(406.45,497.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#D61ACD").p("AgOAAIAdAA");
	this.shape_147.setTransform(406.45,494.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#D61ACD").p("AgOAAIAdAA");
	this.shape_148.setTransform(406.45,490.95);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#D61ACD").p("AAAAPIAAgd");
	this.shape_149.setTransform(397.9,522);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#D61ACD").p("AAAAPIAAgd");
	this.shape_150.setTransform(394.7,522);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#D61ACD").p("AAAAPIAAgd");
	this.shape_151.setTransform(391.7,522);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#D61ACD").p("AAAAPIAAgd");
	this.shape_152.setTransform(388.55,522);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#D61ACD").p("AAAAPIAAgd");
	this.shape_153.setTransform(385.45,522);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#D61ACD").p("AAAAPIAAgd");
	this.shape_154.setTransform(382.2,522);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#D61ACD").p("AgOAAIAdAA");
	this.shape_155.setTransform(402.95,506.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#D61ACD").p("AgOAAIAdAA");
	this.shape_156.setTransform(402.95,503.45);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#D61ACD").p("AgOAAIAdAA");
	this.shape_157.setTransform(402.95,500.45);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#D61ACD").p("AgOAAIAdAA");
	this.shape_158.setTransform(402.95,497.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#D61ACD").p("AgOAAIAdAA");
	this.shape_159.setTransform(402.95,494.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#D61ACD").p("AgOAAIAdAA");
	this.shape_160.setTransform(402.95,490.95);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#D61ACD").p("AEOBXIhtAAQgNAAgKgKQgKgKAAgNIAAjUQAAgOgJgJQgKgKgNAAQgNAAgKAKQgKAJAAAOIAAE9QAAANgJAKQgKAKgNAAIksAA");
	this.shape_161.setTransform(395.2,504.625);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_162.setTransform(459.15,511.775);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_163.setTransform(463.35,511.775);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_164.setTransform(467.55,511.775);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_165.setTransform(471.75,511.775);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_166.setTransform(475.7,511.775);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_167.setTransform(480.05,511.775);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_168.setTransform(483.7,511.775);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_169.setTransform(487.9,511.775);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_170.setTransform(491.55,511.775);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_171.setTransform(495.35,511.775);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_172.setTransform(499,511.775);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#D61ACD").ss(1,1).p("AAKgMIgTAZ");
	this.shape_173.setTransform(502.325,513.125);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#D61ACD").ss(1,1).p("AALgKIgVAW");
	this.shape_174.setTransform(505.3,515.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#D61ACD").ss(1,1).p("AALgKIgWAV");
	this.shape_175.setTransform(507.85,518.15);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#D61ACD").ss(1,1).p("AALgKIgWAV");
	this.shape_176.setTransform(510.6,521.15);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_177.setTransform(514.75,523.175);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_178.setTransform(519.35,523.175);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_179.setTransform(523.5,523.175);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_180.setTransform(527.75,523.175);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_181.setTransform(531.95,523.175);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#D61ACD").p("AF6A6Ii0AAQgkAAgXgZIhDhCQgZgYgiAAImGAA");
	this.shape_182.setTransform(495.725,519.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_183.setTransform(587.6,529.825);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_184.setTransform(583.35,529.825);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_185.setTransform(579.15,529.825);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_186.setTransform(574.95,529.825);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_187.setTransform(571,529.825);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_188.setTransform(566.65,529.825);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_189.setTransform(563,529.825);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_190.setTransform(558.85,529.825);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_191.setTransform(555.15,529.825);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_192.setTransform(551.4,529.825);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_193.setTransform(547.7,529.825);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#2F4EA3").ss(1,1).p("AgJANIATgZ");
	this.shape_194.setTransform(544.375,528.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#2F4EA3").ss(1,1).p("AgKALIAVgV");
	this.shape_195.setTransform(541.4,526.025);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#2F4EA3").ss(1,1).p("AgKALIAVgW");
	this.shape_196.setTransform(538.875,523.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#2F4EA3").ss(1,1).p("AgKALIAVgW");
	this.shape_197.setTransform(536.125,520.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_198.setTransform(531.95,518.425);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_199.setTransform(527.4,518.425);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_200.setTransform(523.2,518.425);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_201.setTransform(518.95,518.425);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_202.setTransform(514.75,518.425);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#2F4EA3").p("Al6g5IC1AAQAiAAAZAZIBDBCQAaAYAhAAIGHAA");
	this.shape_203.setTransform(551,522.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_204.setTransform(587.6,534.225);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_205.setTransform(583.35,534.225);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_206.setTransform(579.15,534.225);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_207.setTransform(574.95,534.225);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_208.setTransform(571,534.225);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_209.setTransform(566.65,534.225);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_210.setTransform(563,534.225);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_211.setTransform(558.85,534.225);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_212.setTransform(555.15,534.225);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_213.setTransform(551.4,534.225);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_214.setTransform(547.7,534.225);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#2F4EA3").ss(1,1).p("AgJgMIATAZ");
	this.shape_215.setTransform(544.375,535.55);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#2F4EA3").ss(1,1).p("AgKgKIAVAV");
	this.shape_216.setTransform(541.4,538.025);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#2F4EA3").ss(1,1).p("AgKgKIAVAV");
	this.shape_217.setTransform(538.875,540.55);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#2F4EA3").ss(1,1).p("AgKgKIAVAV");
	this.shape_218.setTransform(536.125,543.55);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_219.setTransform(531.95,545.625);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_220.setTransform(527.4,545.625);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_221.setTransform(523.2,545.625);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_222.setTransform(518.95,545.625);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_223.setTransform(514.75,545.625);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#2F4EA3").p("Al6A6IC1AAQAiAAAZgYIBDhCQAagZAhAAIGHAA");
	this.shape_224.setTransform(551,541.65);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#570B84","#FF3939"],[0,1],-5.4,0,60.5,0).s().p("Ag1AAIBrg+IAAB8g");
	this.shape_225.setTransform(430.15,401.85);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#B7834F").s().p("AkWDoQgqgdgLgyQgIgqAUgiQAQgdAigVQASgLApgQIAbgJQBJgcAkgVQBGgoA7hCQAmgpAXgRQAngeApgCQAggCAdAOQAdAOAUAdQAWAeAFAkQAFAkgNAgQgUAwgwAvQgcAcg4AsQhjBNh1ArQgiAMgcAHQglAKgmADIgSABQgsAAgkgXgAkQCWQADADABAEIAFAkIADANQABAHAEAEIAEAFIADACQAWANAkgCIABgBQAJgPgbgrQgCgEABgDQABgEAEgCQADgCAEAAQAEABACAEQANAXAFAMQADAKABAJIABAIQACADAEABQAEAAAMgCQAKgCAGgEQAEgCgCgEIgJgdQgJgVgKgRQgCgEABgDQACgEADgCQAJgEAEAIQAPAcAFALIAEAPIADALQADAHAFACQAGADATgGQAFgCAAgFIgBgKIgPgyQgMgigOggQgBgEABgDQACgEADgCQAEgBAEABQAEACABADQANAcAMAlIAPAyQABAIAGACQAFADAGgBIAMgEIAJgDQAFgDACgDQADgGgHgTIgehBQgCgEABgEQACgEAEgBQAJgEAEAJQASAqASAoQADAHAHgDIASgJQAGgDgCgGQgTg5gegxQgCgDABgEQABgEADgCQAEgCADABQAEABACADQAgAzARA1QABAEAEABQADABADgCIARgKQAGgDgCgGQgTgygZgpQgCgEAAgDQABgEAEgCQADgCAEAAQAEABACAEQAZAnASAwQACAEADABQAEABADgCIAIgGQAHgFAAgFQAAgIgEgKIgSg2QgCgEACgEQACgDAEgCQAJgDADAKIALAgIADANQADAIAFADQAJAGALgHQAMgIgFgSQgFgRgJgTQgLgWgegvIgSgdQgCgEABgEQABgEADgCQAEgCAEABQADABACADIATAdIAgA1QAQAeAIAZQABAEAEABQAEACADgDIAOgMQAFgFgEgFQgJgOgJgZIgJgZQgHgOgJgHQgDgDAAgEQAAgEACgDQADgDAEAAQAEAAADACQALAKAIAQQAFAKAHATQAGATAGAJQACAEAEAAQAEABACgDIALgLQAGgGABgCQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBgGgJgQIgOgXQgOgVgTgWQgDgCAAgEQAAgFADgCQAIgHAGAHQARATAOAUIANAVIAGAKQADAGAFABQALACABgQQAAgKgJgPQgUgjgWgcQgGgHAHgHQADgCAEAAQAFABACADQALAMAMATIAHAMIAJAMQAGAGACAAQAFAAADgDQAJgJgGgiQgEgegTgZQgbgmgogHQgFgBgDAEQgDAFADAEQANATAHAUQACAEgCAEQgCAEgDABIgBAAQgJACgDgIQgIgXgQgVIgGgHQgDgEgFAAQgHgBgNAGQgDABgBAEQgBADACADQAHAKAKAVQAKAYAKAMQACADAAAEQAAAEgEACQAAABgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgGACgEgFQgKgLgNgdQgKgWgGgIQgFgHgIAHQgGAFgEAIIgBAEIABAFQABAFAFAGQAOATAQAXIAMASQACAEgBAEQgBADgDADIgDABQgHACgEgGIgMgSQgMgUgMgPIgHgKQgFgFgGgBQgGAAgHAHIgKAMIgQAQQgHAHABAIIACAHIABABQANAPATAnQABAEgBAEQgCAEgDABIgCABQgIACgDgHIgQghIgIgNQgGgIgGAAIgFAAQgGACgNALQgFAEAEAGQAKAPANAXIAQAdQACAEAAAEQgBADgEACIgCABQgHABgEgEIgRgeQgMgYgIgLQgCgDgDAAQgEgBgCACIgUANQgGAEAEAGIAWAnQACAEgBADQgBADgDACIgDABQgGADgFgHIgIgNQgKgSgEgFIgCgDQgDgCgFACIgUAKQgHADADAHIATAgQAMAUADADQAEADACAEQACAJgKADQgGABgGgGQgFgGgMgWIgDgEQgKgPgIgOQgDgGgHACIgNAGIgLAFQgDACACAGIAFAJIAIAQQAFAJgJAEIgCABQgIACgDgHIgHgNIgFgKQgDgGgEgCQgEgCgHADQgIACABAFQAAADAGAHIAmBKQACAEgCAEQgBAEgEABIgCABQgIACgDgIQgPgkgcgvQgEgFgGACIgZALIgLAFQgHAEgBADQgCAEAEAFIAGAIIALATIAHASQAGASAFAFQADADAAAEQAAAFgDACIgEADQgGABgEgEQgJgKgGgVIgGgQQgFgJgGgIQgIgKgFAAQgJAAgMAXQgRAdAHAiQAEASAJAOQAGAMADACQAFACACgCQABgBgBgEIgBgGIgDgZQgBgEADgDQACgDAEgBIACAAQADAAACACg");
	this.shape_226.setTransform(702.4694,470.7583,1,1,-37.2165);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#FFB655").ss(1.9).p("AhGgxQgcAQgnAQQguARgYAJQgnAQgUALQgeATgPAaQgTAhAIAlQAKAxAqAaQAnAYAygFQBAgHBGgZQB0grBihMQA5gtAcgcQAtgtASgtQAZg8gng7Qgng9hCAEQglADgmAcQgXARgkAoQg+BDhGApg");
	this.shape_227.setTransform(702.4986,470.734,1,1,-37.2165);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFF2DA").s().p("AkODiQgqgagKgxQgIglATghQAPgaAegTQAUgLAngQIBGgaQAngQAcgQQBGgpA+hDQAkgoAXgRQAmgcAlgDQBCgEAnA9QAnA7gZA8QgSAtgtAtQgcAcg5AtQhiBMh0ArQhGAZhAAHIgSABQgnAAgggUg");
	this.shape_228.setTransform(702.4986,470.734,1,1,-37.2165);

	this.instance_61 = new lib.Path_1_2();
	this.instance_61.parent = this;
	this.instance_61.setTransform(704.4,472.8,1,1,-37.2165,0,0,34,25.1);
	this.instance_61.alpha = 0.25;

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#B7834F").s().p("ABPEoQgbgOgUgfQgLgSgQglIgJgYQgahCgVgjQgohAg+g1QgogjgQgVQgcgkgEglQgCgeANgbQAMgcAagTQAcgVAhgFQAigGAdAMQAuARAtAsQAaAZAqAzQBKBbArBrQAJAWAKAjQAJAgAFAlQAHA0gaAoQgZAoguALQgNADgNAAQgZAAgVgMgACFDMIADAEQABAGgEADQgIAIgUAIQgIACgHADQgHAEgIAHIgGAFQgEADAAAEQAAAJAXAKQAbAPAfgIQAPgCAPgKIAHgDQAEgDABgCQADgFgDgCQgBgBgEABIgFABIgXAEQgEABgDgDQgDgCgBgEQgBgIAJgCIAigGIAMgCQAHgCADgDIAEgEIACgDQAMgVgDgiIgBAAQgOgIgnAZQgDACgEgBQgEAAgCgDQgEgIAHgFQAQgLARgGQAIgDAJgCIAHgBQADgBAAgEQABgEgDgLQgCgKgDgFQgDgEgDACIgbAKIgiASQgIAEgFgIQgCgDABgEQABgDAEgCIAkgTIANgFIALgDQAGgCACgFQACgEgCgIIgEgLQgCgHgNAEIgvAPQgeALgeAOQgIAEgFgIQgDgIAIgFQAagMAigMIAfgLIAPgEQAHgCACgFQACgEgBgGIgEgLIgDgIQgCgFgDgCQgGgCgRAHIg9AdQgDACgEgCQgDgBgCgDQgBgEABgDQABgEAEgBIBMgkQACgBABgDQABgDgBgDIgJgQQgCgFgHACQg0ASgsAdQgIAFgFgIQgFgGAIgFQAugfAxgRQADgBABgEQACgDgCgDIgKgPQgDgGgGADQgvATgkAYQgDACgEgBQgEgBgCgDQgCgDABgEQABgDADgCQAlgZArgRQADgCABgDQABgDgCgDIgFgIQgEgGgGAAIgRAEIgxATQgJACgDgIQgDgIAIgEIAegKIAMgEQAHgDADgEQAFgJgGgKQgHgLgRAFQgOAFgUAJQgTALgsAdIgbARQgHAFgFgHQgFgJAIgEIAagRQA+grAlgMQAEgBABgEQABgEgDgDIgLgMQgFgFgFAEQgKAIgZAJQggAMgLANQgCADgEAAQgDAAgDgCQgDgCgBgEQAAgEACgDQAOgQAlgOQARgGAJgFQADgCAAgEQABgEgDgCIgKgKIgEgEIgEgCIgEAAIgUAKIgVANQgTAOgUASQgCADgEAAQgEAAgDgDQgCgCAAgEQAAgEADgDQAQgPATgOIATgNIAKgFQAFgEABgFQABgKgOAAQgJgBgPAJQgfASgaAXQgHAGgGgHQgGgHAHgGIAcgWIAMgHQAGgEAEgEQAFgFAAgCQAAgEgCgEQgJgIgfAGQgbAFgYARQgiAagGAnQgBAEAEADQAEACAEgDQASgMASgIQAJgCADAIIAAAAQABAEgBADQgCADgDABQgWAJgTAPIgGAFQgDADAAAFQgBAHAGALQABADADABQAEABACgCQAKgHATgJQAXgLAJgJQADgCAEAAQAEAAACADIACAEQACAFgFAEQgLAKgZAMQgRAIgLAIQgGAFAGAHQAFAFAHADIAEABIAFgBQAGgBAEgEQASgPAUgOIARgMQAHgEAGAHIABADQACAGgGADIgwAkIgJAHQgFAEAAAFQAAAGAHAHIALAJIAPAOQAHAGAHgBIAIgDQAQgOAhgQQAJgEADAIIABABQACAIgHADIgeAQIgMAIQgHAFAAAGIABAFQABAEAEAFIAHAHQAEAFAFgEQAOgKAVgMIAbgQQADgCADABQAEAAACAEIAAACQACAGgEAEQgLAIgRAJQgVALgLAIQgGAFAFAGIANARQADAGAGgEIAkgVQADgCACAAQAEABACAEIABACQACAGgGAEIgMAIIgVANIgCADQgDAEAGAKIAGAMQAEAGAGgDIAYgQIAFgDIAWgOQABgFAFAAQADgBADACQAEACAAADQACAGgGAGQgFAEgUANIgDACQgUANgIAEQgFAEACAGIAGAMIAEAKQADADAGgCIAIgFIAPgIQAHgEAFAHIABACQACAIgHADIgLAGIgKAFQgFADgCAEQgCAFACAGQADAGAFAAQACgBAHgFIBEglQAIgEAEAIIABACQACAHgHADQgjARgpAZQgGAEADAGIAKAWIAFAKQAEAHADABQAEACAFgEIAHgGIARgLQAGgDALgEQARgGAEgFQADgCAEAAQAEAAACACg");
	this.shape_229.setTransform(594.565,410.8518,0.9947,0.9947,-25.4274);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#FFB655").ss(1.8).p("AgsBDQAQAaAQAkQAJAVAQArQAQAkALASQATAcAYAOQAdAQAlgIQAsgLAXgnQAWglgGguQgIg9gZg/QgqhrhJhZQgqgzgcgaQgqgpgrgQQg4gWg2AlQg4AmAFA+QADAiAbAjQARAVAmAgQBAA3AnBBg");
	this.shape_230.setTransform(594.535,410.8129,0.9947,0.9947,-25.4274);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFF2DA").s().p("ABTEhQgYgOgTgcQgLgSgQgkIgZhAQgQgkgQgaQgnhBhAg3QgmgggRgVQgbgjgDgiQgFg+A4gmQA2glA4AWQArAQAqApQAcAaAqAzQBJBZAqBrQAZA/AIA9QAGAugWAlQgXAngsALQgNADgLAAQgXAAgTgLg");
	this.shape_231.setTransform(594.535,410.8129,0.9947,0.9947,-25.4274);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAFgEQAEgDAFABQAFABAEADQADAFgBAEQAAAGgEADQgEAEgFAAIAAAAg");
	this.shape_232.setTransform(526.8,416.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAEgDAFABQAFAAAEAEQAEAFAAAEQgBAFgEAFQgEADgFAAIAAAAg");
	this.shape_233.setTransform(534.3,417.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGABADADQAEAFgBAEQAAAGgEADQgEAEgFAAIAAAAg");
	this.shape_234.setTransform(545.5819,419.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAFQAEADgBAFQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_235.setTransform(553.3072,421.45);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgFQABgFAEgEQAFgDAEAAQAGABADAFQAEAEgBAEQAAAFgFAFQgDADgFAAIAAgBg");
	this.shape_236.setTransform(560.5503,423.05);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_237.setTransform(567.9319,425.6072);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAFgEQADgDAFABQAGAAAEAEQADAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_238.setTransform(575.05,428.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQADgEAFAAQAGABAEAEQADAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_239.setTransform(581.8,432.3572);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEAAgEQABgGAFgDQADgEAFAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_240.setTransform(576.4,437.1503);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgFQABgFAEgEQAFgDAEAAQAGABADAFQAEAEgBAEQAAAFgEAFQgEADgFAAIAAgBg");
	this.shape_241.setTransform(568.4072,433.85);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEAAgFQABgFAFgEQAEgDAFABQAFAAAEAEQADAEgBAFQAAAFgFAEQgDAEgFAAIgBAAg");
	this.shape_242.setTransform(562.15,431.65);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFAAgEQABgGAFgDQAEgEAFABQAFAAAEAEQADAFgBAEQAAAGgFADQgDADgEAAIgCAAg");
	this.shape_243.setTransform(555.4,429.1819);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAEgEAFAAQAFABAEAFQAEADAAAFQgBAGgFADQgDAEgFAAIgBgBg");
	this.shape_244.setTransform(536.75,425.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAFQAEADgBAFQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_245.setTransform(530.1072,424.15);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_246.setTransform(523.1072,423.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_247.setTransform(514.5319,433.2319);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_248.setTransform(522.6319,433.9572);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEABgFQAAgFAEgEQAEgDAFABQAFAAAEAEQAEAFAAAEQgBAFgFAFQgDADgFAAIgBAAg");
	this.shape_249.setTransform(530,434.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEABgEQAAgFAEgEQAEgEAFABQAFABAEADQAEAFAAAEQgBAGgFADQgDAEgFAAIgBAAg");
	this.shape_250.setTransform(527.3,438.75);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAEgEAFAAQAFACAEAEQAEAEAAAFQgBAFgFADQgDAEgFAAIAAgBg");
	this.shape_251.setTransform(526.2,445.75);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgEQABgGAEgDQAFgEAEABQAGABADADQAEAFgBAEQAAAGgFADQgDAEgFAAIAAAAg");
	this.shape_252.setTransform(534.4072,446.85);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAEgDAFABQAFAAAEAEQAEAFAAAEQgBAFgFAFQgDADgFAAIAAAAg");
	this.shape_253.setTransform(542.4,448.95);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_254.setTransform(550.6072,451.5072);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFAAAEQgBAGgFADQgDADgEAAIgCAAg");
	this.shape_255.setTransform(561.05,455.3319);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgFQAAgFAEgEQAFgDAEAAQAGABADAFQAEAEgBAEQAAAFgEAFQgEADgFAAIAAgBg");
	this.shape_256.setTransform(569.2819,459.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_257.setTransform(575.5319,462.8003);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgFADQgDAEgFAAIAAgBg");
	this.shape_258.setTransform(582.1503,467);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgEQABgGAFgEQADgDAFABQAGAAAEAEQADAEgBAFQAAAFgEAEQgEAEgFAAIAAAAg");
	this.shape_259.setTransform(588.55,472.15);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQADgEAFAAQAGABAEAEQADAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_260.setTransform(595.3,468.35);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_261.setTransform(589.2819,463.1819);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQAEgEAEABQAGAAADAEQAEAFgBAEQAAAGgFADQgDADgEAAIgBAAg");
	this.shape_262.setTransform(583.7503,459.1319);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAEgDQAFgEAEABQAGAAADAEQAEAEgBAFQAAAFgEAEQgEAEgFAAIAAAAg");
	this.shape_263.setTransform(581.9072,454.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgDABgFQAAgFAEgEQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAAAg");
	this.shape_264.setTransform(588.1819,456.3003);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgDABgFQABgFADgEQAFgEAEABQAGAAADAEQAEAFAAAEQgBAGgFADQgDAEgFAAIgBAAg");
	this.shape_265.setTransform(593.45,460.3503);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_266.setTransform(599.2319,465.0072);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_267.setTransform(604.3819,470.4319);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQAEgEAEABQAGAAADAEQAEAFgBAEQAAAGgFADQgDADgEAAIgBAAg");
	this.shape_268.setTransform(609.4003,475.5819);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQADgEAFABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_269.setTransform(614.2,480.7319);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_270.setTransform(620.5819,478.5319);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_271.setTransform(616.7819,473.1319);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEABgFQAAgFAEgEQAEgDAFABQAFAAAEAEQAEAFAAAEQgBAFgFAFQgDADgFAAIgBAAg");
	this.shape_272.setTransform(613.6,469.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_273.setTransform(611.1319,464.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_274.setTransform(614.3072,464.1503);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_275.setTransform(617.8819,467.7319);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_276.setTransform(621.9319,472.8819);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgDABgFQAAgFAEgEQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAAAg");
	this.shape_277.setTransform(626.4819,479.2503);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQAEgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_278.setTransform(630.4,485.2819);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAFgEAEAAQAFABAFAEQADAFAAAEQgBAGgFADQgDAEgEAAIgCgBg");
	this.shape_279.setTransform(633.6,491.1572);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAEgEAFAAQAFABAEAEQAEAFAAAEQgBAGgFAEQgDADgFAAIgBgBg");
	this.shape_280.setTransform(633.85,498.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#474747").s().p("AgBANQgFAAgEgFQgDgEAAgEQABgGAFgDQAEgEAEAAQAFABAFAEQADAFgBAEQAAAGgEADQgEAEgFAAIgBgBg");
	this.shape_281.setTransform(630.65,495.7003);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#474747").s().p("AgBAOQgFgBgDgFQgEgEABgFQAAgFAEgEQAEgDAFABQAFAAAEAEQAEAEAAAFQgBAFgFAEQgDAEgFAAIgBAAg");
	this.shape_282.setTransform(624.4,500.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_283.setTransform(626.2319,506.5003);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgFQABgFAEgEQAFgDAEAAQAGABADAFQAEAEgBAFQAAAEgFAFQgDADgFAAIAAgBg");
	this.shape_284.setTransform(623.1503,509.45);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQABgGADgDQAFgEAEAAQAGABADAEQAEAFAAAEQgBAGgFAEQgDADgFAAIAAgBg");
	this.shape_285.setTransform(619.35,505.05);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEAAgEQABgGAFgDQADgEAFAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_286.setTransform(616.9,498.4003);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAFgEQAEgDAEABQAGAAADAEQAEAFgBAEQAAAFgFAFQgDADgFAAIAAAAg");
	this.shape_287.setTransform(613.4503,492.15);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgFAEQgDADgFAAIAAgBg");
	this.shape_288.setTransform(611.0003,487.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQABgGADgDQAFgEAEABQAGAAADAEQAEAFAAAEQgBAGgFADQgDADgEAAIgBAAg");
	this.shape_289.setTransform(607.2,482.0819);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAEgBAFQAAAFgEAEQgEAEgFAAIAAAAg");
	this.shape_290.setTransform(603.0319,487);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_291.setTransform(605.7319,492.5072);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_292.setTransform(609.1572,499.0319);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgFADQgDAEgFAAIAAgBg");
	this.shape_293.setTransform(612.3503,506.15);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_294.setTransform(614.5572,513.6319);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_295.setTransform(615.6572,520.2503);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEABgFQAAgFAEgEQAFgDAEAAQAGABADAEQAEAEgBAFQAAAFgEAFQgEADgFAAIAAgBg");
	this.shape_296.setTransform(616.7819,528.25);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAFQAAAEgFAFQgDADgFAAIAAAAg");
	this.shape_297.setTransform(623.1503,528.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgFADQgDAEgFAAIAAgBg");
	this.shape_298.setTransform(622.9072,521.3503);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFAAgEQABgGAFgDQAEgEAEABQAFAAAFAEQADAFgBAEQAAAGgEADQgEADgEAAIgCAAg");
	this.shape_299.setTransform(625.25,516.3319);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFAAgEQABgGAFgDQAEgEAEAAQAFABAFAEQADAFgBAEQAAAGgEADQgEAEgEAAIgCgBg");
	this.shape_300.setTransform(629.3,516.8072);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_301.setTransform(630.0319,521.7319);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAFQAEADgBAFQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_302.setTransform(630.7572,529.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_303.setTransform(637.2819,529.4572);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAEgBAFQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_304.setTransform(637.0319,523.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#474747").s().p("AgBANQgFAAgEgFQgDgEABgEQAAgGAEgDQAFgEAEAAQAFABAFAEQADAFAAAEQgBAGgFADQgDAEgFAAIgBgBg");
	this.shape_305.setTransform(636.3,515.9503);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgFADQgDADgEAAIgBAAg");
	this.shape_306.setTransform(633.9503,509.3319);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_307.setTransform(636.1572,504.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFAAgEQABgGAFgDQAEgEAEAAQAFABAFAEQADAFgBAEQAAAGgEADQgEAEgFAAIgBgBg");
	this.shape_308.setTransform(640.1,507.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEAAgEQACgGAEgDQAEgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_309.setTransform(646.6,506.5003);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_310.setTransform(644.5072,498.7819);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#474747").s().p("AgBANQgFAAgEgFQgDgEABgEQAAgGAEgDQAFgEAEAAQAFABAFAEQADAFAAAEQgBAGgFADQgDAEgFAAIgBgBg");
	this.shape_311.setTransform(641.7,491.6503);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_312.setTransform(638.1319,484.1572);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_313.setTransform(634.0819,477.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgFADQgDAEgFAAIAAgBg");
	this.shape_314.setTransform(629.9003,471.05);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAFgEAEAAQAFABAFAEQADAFAAAEQgBAGgFADQgDAEgEAAIgCgBg");
	this.shape_315.setTransform(625.5,465.2572);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQABgGADgDQAFgEAEAAQAGABADAEQAEAFAAAEQgBAGgFADQgDAEgFAAIAAgBg");
	this.shape_316.setTransform(620.7,460.25);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGACADAEQAEAEgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_317.setTransform(615.4319,455.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_318.setTransform(610.5072,450.7819);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQABgGADgDQAFgEAEABQAGAAADAEQAEAFAAAEQgBAGgFADQgDADgEAAIgCAAg");
	this.shape_319.setTransform(605.6,446.7319);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#474747").s().p("AgBANQgFAAgEgFQgDgEABgEQAAgGAEgDQAFgEAEAAQAFABAFAEQADAFAAAEQgBAGgFADQgDAEgEAAIgCgBg");
	this.shape_320.setTransform(599.85,442.3072);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAEgDQAFgEAEABQAGAAADAEQAEAEgBAFQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_321.setTransform(595.6572,447.85);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEABgFQAAgFAEgEQAFgDAEABQAFAAAFAEQADAEAAAFQgBAFgFAEQgDAEgFAAIgBAAg");
	this.shape_322.setTransform(601.2,451.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_323.setTransform(605.1072,454.35);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAFgEAEABQAFAAAFAEQADAFAAAEQgBAGgFADQgDADgEAAIgCAAg");
	this.shape_324.setTransform(606.6,459.3819);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGACADAEQAEAEgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_325.setTransform(601.6819,457.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAFAAAEQgBAFgFAFQgDADgFAAIAAAAg");
	this.shape_326.setTransform(596.4,453);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_327.setTransform(590.6319,449.0572);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEAAgEQABgGAEgDQAEgEAFABQAFABAFADQADAFgBAEQAAAGgEADQgEAEgFAAIgBAAg");
	this.shape_328.setTransform(584.75,445.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_329.setTransform(578.7319,442.0572);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_330.setTransform(572.8319,439.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_331.setTransform(567.6819,440.85);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_332.setTransform(574.1819,447.4572);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_333.setTransform(569.2819,445.2503);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgFQABgFADgEQAFgDAEAAQAGABADAFQAEAEAAAEQgBAFgFAFQgDADgFAAIgBgBg");
	this.shape_334.setTransform(575.9,451.4);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFAAgEQABgGAEgDQAEgEAFAAQAFACAFAEQADAEgBAEQAAAGgEADQgEAEgFAAIgBgBg");
	this.shape_335.setTransform(569.9,451.15);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_336.setTransform(562.7572,447.7072);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAFQAEAEgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_337.setTransform(554.6572,444.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEAAgEQABgGAEgDQAEgEAFABQAFAAAFAEQADAEgBAFQAAAFgEAEQgEAEgFAAIgBAAg");
	this.shape_338.setTransform(546.95,442.45);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_339.setTransform(539.5572,440.2319);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_340.setTransform(551.2319,431.2319);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_341.setTransform(538.8819,428.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAFgEQAEgDAFABQAFAAAEAEQADAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_342.setTransform(532.65,427.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAFgEQAEgDAFABQAFAAAEAEQADAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_343.setTransform(526.35,426.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAEgEAFABQAFAAAEAEQAEAFAAAEQgBAGgFADQgDADgEAAIgBAAg");
	this.shape_344.setTransform(519.9,426.4819);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#474747").s().p("AgJAKQgDgFAAgFQAAgEADgEQAEgFAFAAQAFAAAEAFQAFAEAAAEQAAAFgFAFQgEADgFAAQgFAAgEgDg");
	this.shape_345.setTransform(513,426.3);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#2D2D2D").ss(1.5).p("AKvE2Qgxi8h7ijQh7ili2h6QgIgFgJAAQgKAAgIAGQgMAJAAAPQABAPANAIQBCAuAzArQAIAHABAMQAAALgIAIQgHAHgKABQgKAAgIgHQiLh7iyhQQgJgEgKABQgJACgHAHQgKAMADAOQADAPAOAGQAwAWAnAWIgdA0QizhmjUgmIALg2QBoATBZAdQADABAGAAQALAAAJgHQAJgIAAgMQABgKgGgJQgGgIgKgDQgngNg6gPIAJgqQCmAoCSBKQAHADAHAAQALAAAIgHQAJgIABgMQABgJgFgIQgEgIgJgEQkPiJlAgXQgPgBgKALQgJAMADAPQACAJAIAGQAIAGAKABQBfAGBnAVIgIAqQiWggieAAQgKAAgIAGQgIAFgDAJQgFAPAKAMQAIAMAPAAQBjAABgANIgLA2IgcgEQgPgCgKAMQgLAMAEAQQADAIAHAGQAHAGAJAAQC7AWCmBKQCmBJB9B1QAIAIAMAAQAQAAAJgPQAGgJgCgKQgCgLgIgHQhDg/hUg1IAfg2QDKB7B8CxQAIANAQAAQAPAAAJgMQAGgIgBgJQAAgKgFgIQgmg2g2g7QgHgIgBgKQAAgLAIgHQAIgJALAAQALAAAIAIQCKCOBICpQAGANgGANQgGAMgOAEQgLADgKgFQgLgGgEgKIgEgKQgEgJgJgGQgJgFgKACQgOACgHANQgHAMAGANQAVAzAPA3IhNANQgpiZhgiAQgFgIgKgEQgJgDgJADQgPAFgEAPQgFAOAJAMQBKBjAnBxQAmBxABB1QAAAKAFAIQAGAIAJADQAOAFANgJQAMgJAAgPQAAhFgNhFIBNgOQAPBLAABMQAAAKAFAIQAFAIAJADQAPAFANgJQAMgJAAgPQAAh9glh5IA9gQIALAlQACAKAIAGQAIAGAKAAIAIAAQALgEAHgKQAGgLgDgLg");
	this.shape_346.setTransform(577.3888,475.1353);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#A57656").s().p("AIrJBQgJgDgFgIQgFgIAAgKQAAhMgPhLIhNAOQANBFAABFQAAAPgMAJQgNAJgOgFQgJgDgGgIQgFgIAAgKQgBh1gmhxQgnhxhKhjQgJgMAFgOQAEgPAPgFQAJgDAJADQAKAEAFAIQBgCAApCZIBNgNQgPg3gVgzQgGgNAHgMQAHgNAOgCQAKgCAJAFQAJAGAEAJIAEAKQAEAKALAGQAKAFALgDQAOgEAGgMQAGgNgGgNQhIipiKiOQgIgIgLAAQgLAAgIAJQgIAHAAALQABAKAHAIQA2A7AmA2QAFAIAAAKQABAJgGAIQgJAMgPAAQgQAAgIgNQh8ixjKh7IgfA2QBUA1BDA/QAIAHACALQACAKgGAJQgJAPgQAAQgMAAgIgIQh9h1imhJQimhKi7gWQgJAAgHgGQgHgGgDgIQgEgQALgMQAKgMAPACIAcAEIALg2QhggNhjAAQgPAAgIgMQgKgMAFgPQADgJAIgFQAIgGAKAAQCeAACWAgIAIgqQhngVhfgGQgKgBgIgGQgIgGgCgJQgDgPAJgMQAKgLAPABQFAAXEPCJQAJAEAEAIQAFAIgBAJQgBAMgJAIQgIAHgLAAQgHAAgHgDQiShKimgoIgJAqQA6APAnANQAKADAGAIQAGAJgBAKQAAAMgJAIQgJAHgLAAIgJgBQhZgdhogTIgLA2QDUAmCzBmIAdg0QgngWgwgWQgOgGgDgPQgDgOAKgMQAHgHAJgCQAKgBAJAEQCyBQCLB7QAIAHAKAAQAKgBAHgHQAIgIAAgLQgBgMgIgHQgzgrhCguQgNgIgBgPQAAgPAMgJQAIgGAKAAQAJAAAIAFQC2B6B7ClQB7CjAxC8QADALgGALQgHAKgLAEIgIAAQgKAAgIgGQgIgGgCgKIgLglIg9AQQAlB5AAB9QAAAPgMAJQgIAFgJAAQgGAAgFgBg");
	this.shape_347.setTransform(577.3888,475.1353);

	this.instance_62 = new lib.Path_18_0();
	this.instance_62.parent = this;
	this.instance_62.setTransform(579.15,475.85,1,1,0,0,0,69.7,58.7);
	this.instance_62.alpha = 0.5195;

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#8E795A").ss(1.3).p("AHZn5QgIAAgFgEQhlg9h1ggQh1ggh9AAIgBAAQgKAAgHgHQgIgIAAgKQAAgLAIgHQAHgHAKAAIABAAQCEAAB8AiQB8AhBqBBQAJAGACALQADAKgGAIQgHAMgOAAgAoZnMQgMAAgHgKQgHgJACgKQABgLAIgFQBkhMB4gtQB5gtCFgKQALgBAIAHQAIAGAAALQABAKgGAIQgHAIgLABQh+AKhyAqQhyAqhdBHQgHAGgJAAgAMWgzQgJAAgHgGQgHgGgBgKQgQhxhAhmQhAhmhnhOQgIgGgBgLQgCgKAGgIQAHgJAKgBQAKgCAJAHQBvBTBEBvQBFBvARB7QACALgGAJQgHAHgKACgAJSHQQgLAAgIgIQgHgHABgKQAAgLAIgHQBehXAyhtQAyhtAAh0IAAgCQAAgKAHgHQAHgIALAAQAKAAAIAIQAHAHAAAKIAAACQAAB/g2B2Qg3B3hlBeQgHAGgKAAgAs0ABQAAh+A2h3QA2h2BlheQAIgHAKAAQALAAAHAIQAHAIAAAKQgBAKgIAHQhdBYgyBsQgyBtAABzQAAAKgHAIQgIAHgKAAQgKAAgHgGQgIgIAAgKgAoXICQgHAAgIgFQhvhVhEhuQhEhvgSh8QgBgKAGgJQAHgIAKgBQAKgCAIAHQAJAGABALQAQBxA/BnQA/BlBoBPQAIAFABALQACAKgHAJQgHAKgNAAgAABKtIgBAAQiEAAh8giQh8gihqhCQgJgFgCgKQgCgKAFgJQAFgIAKgDQAKgCAJAFQBlA+B1AgQB1AgB9AAIABAAQALAAAHAIQAHAGAAALQAAAKgHAIQgIAHgKAAgABLKqQgKAAgHgHQgHgGgBgKQAAgKAGgIQAHgIAKgBQB+gJBygrQBygpBehHQAIgHALACQAKABAGAJQAHAIgCAKQgBAKgIAHQhkBLh5AtQh5AsiFAKg");
	this.shape_348.setTransform(520.275,527.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFA64D").s().p("AAAKtQiEAAh8giQh8gihqhCQgJgEgCgLQgCgKAFgJQAFgJAKgCQAKgCAJAFQBlA+B1AgQB1AgB9AAIABAAQALAAAHAHQAHAIAAAKQAAAKgHAIQgIAHgKAAgABLKqQgKAAgHgHQgHgHgBgJQAAgKAGgIQAHgIAKgBQB+gKBygpQBygrBehHQAIgGALABQAKACAGAJQAHAIgCAKQgBAKgIAGQhkBMh5AtQh5AsiFAKgAomH9QhvhVhEhuQhEhvgSh8QgBgKAGgIQAHgJAKgBQAKgCAIAHQAJAGABAKQAQByA/BmQA/BnBoBNQAIAHABAKQACAKgHAJQgHAKgNgBQgHAAgIgEgAI/HJQgHgIABgKQAAgLAIgHQBehXAyhtQAyhtAAh0IAAgBQAAgKAHgIQAHgHALgBQAKABAIAHQAHAIAAAKIAAABQAAB/g2B2Qg3B2hlBfQgHAHgKAAQgLgBgIgHgAssASQgIgGAAgLIAAAAQAAh/A2h1QA2h3BlheQAIgHAKABQALAAAHAHQAHAIAAAKQgBALgIAGQhdBYgyBsQgyBtAABzQAAAKgHAIQgIAHgKABQgKAAgHgIgAMWgzQgJAAgHgGQgHgGgBgJQgQhyhAhmQhAhmhnhOQgIgGgBgLQgCgKAGgIQAHgIAKgCQAKgBAJAGQBvBTBEBvQBFBvARB7QACALgGAIQgHAJgKABgAosnWQgHgJACgKQABgLAIgFQBkhMB4gtQB5gsCFgLQALAAAIAGQAIAHAAAKQABAKgGAJQgHAHgLABQh+AKhyAqQhyAqhdBHQgHAFgJABQgMgBgHgJgAHMn9Qhlg9h1ggQh1ggh9AAIgBAAQgKAAgHgHQgIgHAAgLQAAgLAIgGQAHgIAKAAIABAAQCEAAB8AiQB8AiBqBBQAJAFACAKQADAKgGAJQgHAMgOAAQgIAAgFgEg");
	this.shape_349.setTransform(520.275,527.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#773A18").ss(0.9).p("AL/AAQAACBg8B1Qg6ByhqBXQjhC5k+AAQk9AAjgi5QhrhXg6hyQg8h1AAiBQAAiAA8h1QA6hxBrhYQDgi5E9AAQE+AADhC5QBqBYA6BxQA8B1AACAg");
	this.shape_350.setTransform(520.225,526.95);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFE3CC").s().p("AodG/QhrhXg6hyQg8h2AAiAQAAiAA8h1QA6hyBrhXQDgi5E9AAQE+AADhC5QBqBXA6ByQA8B1AACAQAACAg8B2Qg6ByhqBXQjhC5k+AAQk9AAjgi5g");
	this.shape_351.setTransform(520.225,526.95);

	this.instance_63 = new lib.Group_40_0();
	this.instance_63.parent = this;
	this.instance_63.setTransform(519.75,530.05,1,1,0,0,0,81.6,69.2);
	this.instance_63.alpha = 0.3789;

	this.instance_64 = new lib.Path_94();
	this.instance_64.parent = this;
	this.instance_64.setTransform(724.6,329.5,1,1,0,0,0,8.3,20.9);
	this.instance_64.alpha = 0.3594;

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#515151").ss(3,1).p("AAAiRIAAEj");
	this.shape_352.setTransform(727.95,328.525);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#515151").ss(3,1).p("AAAiRIAAEj");
	this.shape_353.setTransform(719.3,328.525);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#515151").ss(3,1).p("AAAiRIAAEj");
	this.shape_354.setTransform(710.6,328.525);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#515151").ss(3,1).p("AAAiRIAAEj");
	this.shape_355.setTransform(701.95,328.525);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#BABABA").ss(3,1).p("AAAiRIAAEj");
	this.shape_356.setTransform(728.75,328.525);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#BABABA").ss(3,1).p("AAAiRIAAEj");
	this.shape_357.setTransform(720.1,328.525);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#BABABA").ss(3,1).p("AAAiRIAAEj");
	this.shape_358.setTransform(711.45,328.525);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#BABABA").ss(3,1).p("AAAiRIAAEj");
	this.shape_359.setTransform(702.75,328.525);

	this.instance_65 = new lib.Path_1_0();
	this.instance_65.parent = this;
	this.instance_65.setTransform(714.95,306.3,1,1,0,0,0,20.9,1.2);
	this.instance_65.alpha = 0.1602;

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#303030").p("AiyAAIFlAA");
	this.shape_360.setTransform(714.975,308.1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#918E8D").s().p("AjPApIAAgpQAAgQAMgMQALgMAQAAIFRAAQAQAAAMAMQALAMABAQIAAApg");
	this.shape_361.setTransform(715,303.525);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#918E8D").s().p("AiAD0QgVAAgOgOQgPgPAAgVIAAmXQAAgTAPgHQAKgEAZAAIEBAAQAZAAAKAEQAPAHAAATIAAGXQAAAVgPAPQgPAOgUAAg");
	this.shape_362.setTransform(715,325.875);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#8C8C8C").ss(2).p("AA8AdIh3AAQgJAAgGgGQgGgGAAgJIAAgPQAAgJAGgGQAHgGAIAAIB3AAQAJAAAGAGQAGAGAAAJIAAAPQAAAJgGAGQgGAGgJAAg");
	this.shape_363.setTransform(714.875,298.775);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#353333").ss(2).p("AA8AdIh3AAQgJAAgGgGQgGgGAAgJIAAgPQAAgJAGgGQAHgGAIAAIB3AAQAJAAAGAGQAGAGAAAJIAAAPQAAAJgGAGQgGAGgJAAg");
	this.shape_364.setTransform(715.475,299.375);

	this.instance_66 = new lib.Path_93();
	this.instance_66.parent = this;
	this.instance_66.setTransform(716.45,324.6,1,1,0,0,0,20.9,27.2);
	this.instance_66.alpha = 0.6289;

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FF0000").s().p("Ag1g9IBrA9IhrA+g");
	this.shape_365.setTransform(686.675,329.125);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#3093E5").s().p("AinCnQgbgcAAgvQABguAag0QAiAhAvAAQAvAAAhghQAgghAAgvQAAgvggghQAzgbAvAAQAvgBAcAbQApAqgUBNQgUBNhGBGQhFBFhNAUQgZAGgWAAQgsAAgcgbg");
	this.shape_366.setTransform(668.0874,294.6751,0.9994,0.9994,8.1949);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.lf(["#FF3939","#4DC4FF"],[0,1],-1.6,-0.2,12.6,-16).s().p("AgdgbIA7AJIgkAug");
	this.shape_367.setTransform(650.0605,285.7682,0.9978,0.9978,8.195);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.lf(["#570B84","#FF3939"],[0,1],1.5,0,-19.8,0).s().p("AgdgUIA7gGIgZA1g");
	this.shape_368.setTransform(587.375,694.45);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#00AAFF").s().p("Ag7g8IB3AjIhZBWg");
	this.shape_369.setTransform(669.925,135.15);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FF0000").s().p("Ag9g1IB7ABIg+Bqg");
	this.shape_370.setTransform(470.925,141.925);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#3F098E").s().p("Ag6AYIBZhTIAdB3g");
	this.shape_371.setTransform(566.45,84.65);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#B2B2B2").s().p("AhVhjICrBjIirBjg");
	this.shape_372.setTransform(869.1,64.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFAA00").s().p("Ag+g1IB8AAIg+Brg");
	this.shape_373.setTransform(455.65,141.95);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FF0000").s().p("AhVhjICrBjIirBjg");
	this.shape_374.setTransform(314.825,64.1);

	this.instance_67 = new lib.Group_84();
	this.instance_67.parent = this;
	this.instance_67.setTransform(307,249.9,1,1,0,0,0,34.5,22.4);
	this.instance_67.alpha = 0.4805;

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FF0000").s().p("ABQAzQghghgvAAQguAAghAhQgiAhABAvQg5gSggggQgjghAAgnQAAg5BGgpQBFgpBhAAQBiAABFApQBGApAAA5QAAAngiAhQgiAgg4ASQAAgvghghg");
	this.shape_375.setTransform(578.35,674.275);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#9943CB").s().p("AimBbQhGgpAAg5QAAgnAigiQAhggA5gTQgBAwAiAhQAhAiAuAAQAvAAAhgiQAhgiAAgvQA4ATAhAgQAiAiABAnQAAA5hGApQhFAphigBQhhABhFgpg");
	this.shape_376.setTransform(532.35,127.9);

	this.instance_68 = new lib.Path_0();
	this.instance_68.parent = this;
	this.instance_68.setTransform(204.85,64.4,0.5763,0.5763,0,0,0,5.9,8.3);
	this.instance_68.alpha = 0.3008;

	this.instance_69 = new lib.Path_1();
	this.instance_69.parent = this;
	this.instance_69.setTransform(175.9,52.35,0.5763,0.5763,0,0,0,8.4,4.1);
	this.instance_69.alpha = 0.3008;

	this.instance_70 = new lib.Path_2();
	this.instance_70.parent = this;
	this.instance_70.setTransform(153.2,45.75,0.5763,0.5763,0,0,0,12.4,2.1);
	this.instance_70.alpha = 0.3008;

	this.instance_71 = new lib.Path_3();
	this.instance_71.parent = this;
	this.instance_71.setTransform(159.15,27.25,0.5763,0.5763,0,0,0,14.8,3.9);
	this.instance_71.alpha = 0.3008;

	this.instance_72 = new lib.Path_4();
	this.instance_72.parent = this;
	this.instance_72.setTransform(191.5,40.85,0.5763,0.5763,0,0,0,8.7,4.3);
	this.instance_72.alpha = 0.3008;

	this.instance_73 = new lib.Path_5();
	this.instance_73.parent = this;
	this.instance_73.setTransform(197,39.85,0.5763,0.5763,0,0,0,8.6,3.9);
	this.instance_73.alpha = 0.3008;

	this.instance_74 = new lib.Path_6();
	this.instance_74.parent = this;
	this.instance_74.setTransform(179.3,33.25,0.5763,0.5763,0,0,0,7.7,6.2);
	this.instance_74.alpha = 0.3008;

	this.instance_75 = new lib.Path_7();
	this.instance_75.parent = this;
	this.instance_75.setTransform(198.35,44.05,0.5763,0.5763,0,0,0,12.6,4.3);
	this.instance_75.alpha = 0.3008;

	this.instance_76 = new lib.Path_8();
	this.instance_76.parent = this;
	this.instance_76.setTransform(166.15,30.75,0.5763,0.5763,0,0,0,13.3,3.1);
	this.instance_76.alpha = 0.3008;

	this.instance_77 = new lib.Path_9();
	this.instance_77.parent = this;
	this.instance_77.setTransform(139.4,29.45,0.5763,0.5763,0,0,0,19.4,3.5);
	this.instance_77.alpha = 0.3008;

	this.instance_78 = new lib.Path_10();
	this.instance_78.parent = this;
	this.instance_78.setTransform(106.9,46.5,0.5763,0.5763,0,0,0,9.1,9.9);
	this.instance_78.alpha = 0.3008;

	this.instance_79 = new lib.Path_11();
	this.instance_79.parent = this;
	this.instance_79.setTransform(106.9,39.85,0.5763,0.5763,0,0,0,9.1,9.5);
	this.instance_79.alpha = 0.3008;

	this.instance_80 = new lib.Path_12();
	this.instance_80.parent = this;
	this.instance_80.setTransform(112.4,37.35,0.5763,0.5763,0,0,0,13,10.7);
	this.instance_80.alpha = 0.3008;

	this.instance_81 = new lib.Path_13();
	this.instance_81.parent = this;
	this.instance_81.setTransform(125.55,43.25,0.5763,0.5763,0,0,0,9.5,5.9);
	this.instance_81.alpha = 0.3008;

	this.instance_82 = new lib.Path_14();
	this.instance_82.parent = this;
	this.instance_82.setTransform(112.55,48.8,0.5763,0.5763,0,0,0,13.3,7.4);
	this.instance_82.alpha = 0.3008;

	this.instance_83 = new lib.Path_15();
	this.instance_83.parent = this;
	this.instance_83.setTransform(119.5,35.7,0.5763,0.5763,0,0,0,13.3,10.4);
	this.instance_83.alpha = 0.3008;

	this.instance_84 = new lib.Path_16();
	this.instance_84.parent = this;
	this.instance_84.setTransform(129.1,33.1,0.5763,0.5763,0,0,0,18.2,7.2);
	this.instance_84.alpha = 0.3008;

	this.instance_85 = new lib.Path_17();
	this.instance_85.parent = this;
	this.instance_85.setTransform(148.65,29.25,0.5763,0.5763,0,0,0,15.9,1.8);
	this.instance_85.alpha = 0.3008;

	this.instance_86 = new lib.Path_18();
	this.instance_86.parent = this;
	this.instance_86.setTransform(116.3,66.85,0.5763,0.5763,0,0,0,1.6,7.4);
	this.instance_86.alpha = 0.3008;

	this.instance_87 = new lib.Path_19();
	this.instance_87.parent = this;
	this.instance_87.setTransform(115.75,68.7,0.5763,0.5763,0,0,0,3.2,6.3);
	this.instance_87.alpha = 0.3008;

	this.instance_88 = new lib.Path_20();
	this.instance_88.parent = this;
	this.instance_88.setTransform(141.3,88.9,0.5763,0.5763,0,0,0,13.3,4.5);
	this.instance_88.alpha = 0.3008;

	this.instance_89 = new lib.Path_21();
	this.instance_89.parent = this;
	this.instance_89.setTransform(117.45,68.8,0.5763,0.5763,0,0,0,1.9,10.8);
	this.instance_89.alpha = 0.3008;

	this.instance_90 = new lib.Path_22();
	this.instance_90.parent = this;
	this.instance_90.setTransform(138.95,41.35,0.5763,0.5763,0,0,0,12.8,2.6);
	this.instance_90.alpha = 0.3008;

	this.instance_91 = new lib.Path_23();
	this.instance_91.parent = this;
	this.instance_91.setTransform(167.9,78.05,0.5763,0.5763,0,0,0,4.1,2.3);
	this.instance_91.alpha = 0.3008;

	this.instance_92 = new lib.Path_24();
	this.instance_92.parent = this;
	this.instance_92.setTransform(169.2,80.45,0.5763,0.5763,0,0,0,6.3,4.9);
	this.instance_92.alpha = 0.3008;

	this.instance_93 = new lib.Path_25();
	this.instance_93.parent = this;
	this.instance_93.setTransform(176.85,63.45,0.5763,0.5763,0,0,0,7.1,2.8);
	this.instance_93.alpha = 0.3008;

	this.instance_94 = new lib.Path_26();
	this.instance_94.parent = this;
	this.instance_94.setTransform(111.5,79,0.5763,0.5763,0,0,0,5.1,4);
	this.instance_94.alpha = 0.3008;

	this.instance_95 = new lib.Path_27();
	this.instance_95.parent = this;
	this.instance_95.setTransform(128.15,85.4,0.5763,0.5763,0,0,0,6.5,2.7);
	this.instance_95.alpha = 0.3008;

	this.instance_96 = new lib.Path_28();
	this.instance_96.parent = this;
	this.instance_96.setTransform(118.3,83.9,0.5763,0.5763,0,0,0,6.3,4);
	this.instance_96.alpha = 0.3008;

	this.instance_97 = new lib.Path_29();
	this.instance_97.parent = this;
	this.instance_97.setTransform(190.2,65.6,0.5763,0.5763,0,0,0,6.8,3.6);
	this.instance_97.alpha = 0.3008;

	this.instance_98 = new lib.Path_30();
	this.instance_98.parent = this;
	this.instance_98.setTransform(180.5,61.9,0.5763,0.5763,0,0,0,6.9,2.7);
	this.instance_98.alpha = 0.3008;

	this.instance_99 = new lib.Path_31();
	this.instance_99.parent = this;
	this.instance_99.setTransform(171.4,77.15,0.5763,0.5763,0,0,0,6.8,2.1);
	this.instance_99.alpha = 0.3008;

	this.instance_100 = new lib.Path_32();
	this.instance_100.parent = this;
	this.instance_100.setTransform(202.6,59.85,0.5763,0.5763,0,0,0,9,6);
	this.instance_100.alpha = 0.3008;

	this.instance_101 = new lib.Path_33();
	this.instance_101.parent = this;
	this.instance_101.setTransform(169.4,60.6,0.5763,0.5763,0,0,0,1.3,11.5);
	this.instance_101.alpha = 0.3516;

	this.instance_102 = new lib.Path_34();
	this.instance_102.parent = this;
	this.instance_102.setTransform(174.65,59.55,0.5763,0.5763,0,0,0,5.7,5.5);
	this.instance_102.alpha = 0.3516;

	this.instance_103 = new lib.Path_35();
	this.instance_103.parent = this;
	this.instance_103.setTransform(188.9,41.7,0.5763,0.5763,0,0,0,9.2,1.6);
	this.instance_103.alpha = 0.3008;

	this.instance_104 = new lib.Path_36_0();
	this.instance_104.parent = this;
	this.instance_104.setTransform(155.4,42.75,0.5763,0.5763,0,0,0,9.5,2.1);
	this.instance_104.alpha = 0.3008;

	this.instance_105 = new lib.Path_37_0();
	this.instance_105.parent = this;
	this.instance_105.setTransform(208.75,44.65,0.5763,0.5763,0,0,0,11.7,4.1);
	this.instance_105.alpha = 0.3008;

	this.instance_106 = new lib.Path_38_0();
	this.instance_106.parent = this;
	this.instance_106.setTransform(197.35,58.3,0.5763,0.5763,0,0,0,8.1,4.6);
	this.instance_106.alpha = 0.3008;

	this.instance_107 = new lib.Path_39_0();
	this.instance_107.parent = this;
	this.instance_107.setTransform(170.3,56,0.5763,0.5763,0,0,0,4.5,8.8);
	this.instance_107.alpha = 0.3516;

	this.instance_108 = new lib.Path_40_0();
	this.instance_108.parent = this;
	this.instance_108.setTransform(108.3,57.6,0.5763,0.5763,0,0,0,3.1,3.4);
	this.instance_108.alpha = 0.25;

	this.instance_109 = new lib.Path_41();
	this.instance_109.parent = this;
	this.instance_109.setTransform(105.4,58.8,0.5763,0.5763,0,0,0,3.9,4.2);
	this.instance_109.alpha = 0.25;

	this.instance_110 = new lib.Path_42_0();
	this.instance_110.parent = this;
	this.instance_110.setTransform(111.7,71.8,0.5763,0.5763,0,0,0,23.7,52.5);
	this.instance_110.alpha = 0.75;

	this.instance_111 = new lib.Path_43();
	this.instance_111.parent = this;
	this.instance_111.setTransform(170.65,73.2,0.5763,0.5763,0,0,0,81.8,51);
	this.instance_111.alpha = 0.5508;

	this.instance_112 = new lib.Path_44();
	this.instance_112.parent = this;
	this.instance_112.setTransform(123.45,89.65,0.5763,0.5763,0,0,0,15.3,10.1);
	this.instance_112.alpha = 0.1211;

	this.instance_113 = new lib.Path_45();
	this.instance_113.parent = this;
	this.instance_113.setTransform(127.4,52.15,0.5763,0.5763,0,0,0,18.5,15.8);
	this.instance_113.alpha = 0.1016;

	this.instance_114 = new lib.Path_46();
	this.instance_114.parent = this;
	this.instance_114.setTransform(138.6,67,0.5763,0.5763,0,0,0,13.8,12.8);
	this.instance_114.alpha = 0.0781;

	this.instance_115 = new lib.Path_48();
	this.instance_115.parent = this;
	this.instance_115.setTransform(108.8,58.45,0.5763,0.5763,0,0,0,13.7,11.7);
	this.instance_115.alpha = 0.1016;

	this.instance_116 = new lib.Path_49();
	this.instance_116.parent = this;
	this.instance_116.setTransform(190.2,50.3,0.5763,0.5763,0,0,0,13,7.4);
	this.instance_116.alpha = 0.0781;

	this.instance_117 = new lib.Path_50();
	this.instance_117.parent = this;
	this.instance_117.setTransform(164,37.5,0.5763,0.5763,0,0,0,16.9,5.4);
	this.instance_117.alpha = 0.1016;

	this.instance_118 = new lib.Path_51();
	this.instance_118.parent = this;
	this.instance_118.setTransform(157.2,72.7,0.5763,0.5763,0,0,0,3.3,6.4);
	this.instance_118.alpha = 0.25;

	this.instance_119 = new lib.Path_52();
	this.instance_119.parent = this;
	this.instance_119.setTransform(146.5,69.7,0.5763,0.5763,0,0,0,21.4,29.9);
	this.instance_119.alpha = 0.1016;

	this.instance_120 = new lib.Path_53();
	this.instance_120.parent = this;
	this.instance_120.setTransform(148.3,51.6,0.5763,0.5763,0,0,0,4.5,4.1);
	this.instance_120.alpha = 0.3516;

	this.instance_121 = new lib.Path_54();
	this.instance_121.parent = this;
	this.instance_121.setTransform(146,50.45,0.5763,0.5763,0,0,0,9.7,6);
	this.instance_121.alpha = 0.3516;

	this.instance_122 = new lib.Path_55();
	this.instance_122.parent = this;
	this.instance_122.setTransform(186.2,58.6,0.5763,0.5763,0,0,0,24.1,10.7);
	this.instance_122.alpha = 0.4492;

	this.instance_123 = new lib.Path_56();
	this.instance_123.parent = this;
	this.instance_123.setTransform(184.05,57.65,0.5763,0.5763,0,0,0,30.7,14.6);
	this.instance_123.alpha = 0.3516;

	this.instance_124 = new lib.Path_57();
	this.instance_124.parent = this;
	this.instance_124.setTransform(159.25,39.3,0.5763,0.5763,0,0,0,101.5,27.4);
	this.instance_124.alpha = 0.4492;

	this.instance_125 = new lib.Path_58();
	this.instance_125.parent = this;
	this.instance_125.setTransform(159.05,39.8,0.5763,0.5763,0,0,0,101.8,28.3);
	this.instance_125.alpha = 0.4492;

	this.instance_126 = new lib.Path_59();
	this.instance_126.parent = this;
	this.instance_126.setTransform(144.4,39.25,0.5763,0.5763,0,0,0,74.8,20.5);
	this.instance_126.alpha = 0.25;

	this.instance_127 = new lib.Path_60();
	this.instance_127.parent = this;
	this.instance_127.setTransform(159,69.65,0.5763,0.5763,0,0,0,98.9,54.3);
	this.instance_127.alpha = 0.3984;

	this.instance_128 = new lib.Path_61();
	this.instance_128.parent = this;
	this.instance_128.setTransform(159.25,69,0.5763,0.5763,0,0,0,99.5,55.8);
	this.instance_128.alpha = 0.1797;

	this.instance_129 = new lib.Path_62();
	this.instance_129.parent = this;
	this.instance_129.setTransform(174.45,48.8,0.5763,0.5763,0,0,0,37.9,12.6);
	this.instance_129.alpha = 0.3984;

	this.instance_130 = new lib.Path_63();
	this.instance_130.parent = this;
	this.instance_130.setTransform(144.2,67.35,0.5763,0.5763,0,0,0,48,36.6);
	this.instance_130.alpha = 0.25;

	this.instance_131 = new lib.Path_64();
	this.instance_131.parent = this;
	this.instance_131.setTransform(164.6,86.1,0.5763,0.5763,0,0,0,68.5,28.4);
	this.instance_131.alpha = 0.8984;

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#D66565").s().p("ApdKUQgxgRgsgZQgPgIgthLIgqhJQhGiPgSgnIhOh6QhChmgCgmQgCgtAUhCIAUg5IAOi8IAGgXQAjgdBSg7QBdhCAhgRQArgVAtgQQAvgQAcgCQAUgCCZgiQCZgiATgCQCCgMAZAAQCWAACJAzQBmAmCTBCQBuAzA7AOQBCARA6AfQA1AdAFAAIDaA/IgHCTQg/CugSAZQggAsgnAgQhJA8hXALQhaAMhIAbQgxATgiAXQhAAug2AkQhnBFguANQh2AihHAaQg+AXkNBrQhBAbgrAIIiOAUQgPgEgYgIg");
	this.shape_377.setTransform(157.409,62.34,0.5725,0.5725);

	this.instance_132 = new lib.Path_66();
	this.instance_132.parent = this;
	this.instance_132.setTransform(154.7,66.65,0.5763,0.5763,0,0,0,100.9,66.7);
	this.instance_132.alpha = 0.25;

	this.instance_133 = new lib.Path_67();
	this.instance_133.parent = this;
	this.instance_133.setTransform(147.55,63.1,0.5763,0.5763,0,0,0,5.8,9);
	this.instance_133.alpha = 0.3008;

	this.instance_134 = new lib.Path_68();
	this.instance_134.parent = this;
	this.instance_134.setTransform(118.5,50.9,0.5763,0.5763,0,0,0,8.2,4.2);
	this.instance_134.alpha = 0.3008;

	this.instance_135 = new lib.Path_69();
	this.instance_135.parent = this;
	this.instance_135.setTransform(134.2,39.45,0.5763,0.5763,0,0,0,8.5,3.2);
	this.instance_135.alpha = 0.3008;

	this.instance_136 = new lib.Path_70();
	this.instance_136.parent = this;
	this.instance_136.setTransform(139.7,38.6,0.5763,0.5763,0,0,0,8.5,3);
	this.instance_136.alpha = 0.3008;

	this.instance_137 = new lib.Path_71();
	this.instance_137.parent = this;
	this.instance_137.setTransform(141.05,42.65,0.5763,0.5763,0,0,0,12.8,4.9);
	this.instance_137.alpha = 0.3008;

	this.instance_138 = new lib.Path_72();
	this.instance_138.parent = this;
	this.instance_138.setTransform(110.55,76.65,0.5763,0.5763,0,0,0,4,1.2);
	this.instance_138.alpha = 0.3008;

	this.instance_139 = new lib.Path_73();
	this.instance_139.parent = this;
	this.instance_139.setTransform(111.7,79.2,0.5763,0.5763,0,0,0,6,4.3);
	this.instance_139.alpha = 0.3008;

	this.instance_140 = new lib.Path_74();
	this.instance_140.parent = this;
	this.instance_140.setTransform(119.5,62.15,0.5763,0.5763,0,0,0,7.1,1.8);
	this.instance_140.alpha = 0.3008;

	this.instance_141 = new lib.Path_75();
	this.instance_141.parent = this;
	this.instance_141.setTransform(132.85,64.2,0.5763,0.5763,0,0,0,6.4,2.8);
	this.instance_141.alpha = 0.3008;

	this.instance_142 = new lib.Path_76();
	this.instance_142.parent = this;
	this.instance_142.setTransform(122.95,60.6,0.5763,0.5763,0,0,0,6.5,1.7);
	this.instance_142.alpha = 0.3008;

	this.instance_143 = new lib.Path_77();
	this.instance_143.parent = this;
	this.instance_143.setTransform(114.3,75.9,0.5763,0.5763,0,0,0,7,2.5);
	this.instance_143.alpha = 0.3008;

	this.instance_144 = new lib.Path_78();
	this.instance_144.parent = this;
	this.instance_144.setTransform(145.35,58.6,0.5763,0.5763,0,0,0,9,6.4);
	this.instance_144.alpha = 0.3008;

	this.instance_145 = new lib.Path_79();
	this.instance_145.parent = this;
	this.instance_145.setTransform(112.2,59.2,0.5763,0.5763,0,0,0,1.3,11.7);
	this.instance_145.alpha = 0.3516;

	this.instance_146 = new lib.Path_80();
	this.instance_146.parent = this;
	this.instance_146.setTransform(117.25,58.3,0.5763,0.5763,0,0,0,5.5,5.9);
	this.instance_146.alpha = 0.3516;

	this.instance_147 = new lib.Path_81();
	this.instance_147.parent = this;
	this.instance_147.setTransform(131.55,40.45,0.5763,0.5763,0,0,0,9.1,2.3);
	this.instance_147.alpha = 0.3008;

	this.instance_148 = new lib.Path_82();
	this.instance_148.parent = this;
	this.instance_148.setTransform(151.5,43.4,0.5763,0.5763,0,0,0,11.7,4.5);
	this.instance_148.alpha = 0.3008;

	this.instance_149 = new lib.Path_83();
	this.instance_149.parent = this;
	this.instance_149.setTransform(140,57,0.5763,0.5763,0,0,0,7.8,5.3);
	this.instance_149.alpha = 0.3008;

	this.instance_150 = new lib.Path_84();
	this.instance_150.parent = this;
	this.instance_150.setTransform(113.15,54.8,0.5763,0.5763,0,0,0,4.5,8.3);
	this.instance_150.alpha = 0.3516;

	this.instance_151 = new lib.Path_86();
	this.instance_151.parent = this;
	this.instance_151.setTransform(133.05,49,0.5763,0.5763,0,0,0,13.3,7.7);
	this.instance_151.alpha = 0.0781;

	this.instance_152 = new lib.Path_87();
	this.instance_152.parent = this;
	this.instance_152.setTransform(100,71.35,0.5763,0.5763,0,0,0,3.4,7);
	this.instance_152.alpha = 0.25;

	this.instance_153 = new lib.Path_88();
	this.instance_153.parent = this;
	this.instance_153.setTransform(128.95,57.3,0.5763,0.5763,0,0,0,24.1,11);
	this.instance_153.alpha = 0.4492;

	this.instance_154 = new lib.Path_89();
	this.instance_154.parent = this;
	this.instance_154.setTransform(126.85,56.3,0.5763,0.5763,0,0,0,30.7,14.8);
	this.instance_154.alpha = 0.3516;

	this.instance_155 = new lib.Path_36();
	this.instance_155.parent = this;
	this.instance_155.setTransform(1026.15,889.9,2.1345,2.1345,0,0,0,26.4,17.4);
	this.instance_155.alpha = 0.1992;

	this.instance_156 = new lib.Path_37();
	this.instance_156.parent = this;
	this.instance_156.setTransform(517.3,1014.7,2.2102,2.2102,0,0,0,26.4,17.4);
	this.instance_156.alpha = 0.1992;

	this.instance_157 = new lib.Path_39();
	this.instance_157.parent = this;
	this.instance_157.setTransform(894.55,893.15,1.8762,1.8762,0,0,0,19.2,12.6);
	this.instance_157.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.shape_377},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.shape_376},{t:this.shape_375},{t:this.instance_67},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.instance_66},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.instance_65},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.instance_64},{t:this.instance_63},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.instance_62},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.instance_61},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.shape_140},{t:this.shape_139},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.instance_48},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.Fe3Skupina_anim},{t:this.Fe2Skupina_anim},{t:this.Merak5_anim},{t:this.SipkaCervenoFialova2_anim},{t:this.shape_34},{t:this.shape_33},{t:this.instance_47},{t:this.shape_32},{t:this.shape_31},{t:this.instance_46},{t:this.shape_30},{t:this.instance_45},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance_44},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance_43},{t:this.instance_42},{t:this.shape_16},{t:this.shape_15},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.Merak7_anim},{t:this.Merak9_anim},{t:this.Merak4_anim},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.Merak3_anim},{t:this.Merak6_anim},{t:this.Merak1_anim}]}).wait(161));

	// Vrstva_8
	this.SipkaModraModryKanalSpodni_anim = new lib.SipkaModra2();
	this.SipkaModraModryKanalSpodni_anim.name = "SipkaModraModryKanalSpodni_anim";
	this.SipkaModraModryKanalSpodni_anim.parent = this;
	this.SipkaModraModryKanalSpodni_anim.setTransform(666.7,223.95,1,1,0,0,0,0,12.3);

	this.timeline.addTween(cjs.Tween.get(this.SipkaModraModryKanalSpodni_anim).wait(161));

	// SipkaFialovaSpodniCelek3
	this.SipkaFialovaSpodni3_anim = new lib.SipkaFialovaSpodniCelek3();
	this.SipkaFialovaSpodni3_anim.name = "SipkaFialovaSpodni3_anim";
	this.SipkaFialovaSpodni3_anim.parent = this;
	this.SipkaFialovaSpodni3_anim.setTransform(598.1,831.75,1,1,0,0,0,6.3,33.4);

	this.timeline.addTween(cjs.Tween.get(this.SipkaFialovaSpodni3_anim).wait(161));

	// Vrstva_6
	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FF0000").s().p("AiKFoQgLgBgKgCIgDgDIAAgDIACgDIAEAAQAJACAJABIADABIABAEIgBADIgDABIAAAAgAh6FmIgCgDIABgEIADgBQAKgCAKgDIADAAIADADIgBADIgCACQgLAEgKACIgBAAIgDgBgAB0FeQgLAAgKgDIgDgCIAAgEIACgCIAEAAQAJACAJAAIADACIABADIgBADIgDABIAAAAgAizFdQgJgEgJgHIgCgDIABgDIADgCIAEABQAIAGAIAEIADADIgBADIgCADIgCAAIgCgBgACEFcIgCgDIABgDIADgCQAKgBAKgEIADABIADACIgBAEIgCACQgLAEgKABIgBAAIgDgBgAhTFaIgCgCIgBgEIACgCQAIgGAHgHIAEgBIADACIABADIgCADQgHAHgJAGIgDABIgBAAgABLFUQgJgFgJgHIgCgDIABgDIADgCIAEABQAIAGAIAFIADACIgBAEIgCACIgCAAIgCAAgACrFQIgCgCIgBgDIACgDQAIgFAHgHIAEgBIADABIABAEIgCADQgHAHgJAFIgDABIgBAAgAjTFDIgDgBQgHgJgFgIIAAgEIACgDIAEAAIACACIALAQIABADIgBADIgDABIgBAAgAg3E9IgCgDIABgDQAGgJAFgJIACgCIAEAAIACADIAAADQgFAKgGAJIgDACIgBAAIgDgBgAArE6IgDgCQgHgIgFgJIAAgEIACgCIAEgBIACACIALAQIABAEIgBADIgDABIgBAAgADHE0IgCgDIABgDQAGgJAFgJIACgDIAEABIACACIAAAEQgFAKgGAJIgDACIgBAAIgDgBgAjnEgIgCgDQgEgKAAgMIABgDIADgBIADABIACADQAAAKADAJIAAAEIgDACIgBAAIgCAAgAgkEYIgDgCIgBgEQACgJAAgKIAAAAIgBgRIABgDIADgCIADAAIACADQABAKAAAJIAAAAQAAALgCAKIgCADIgCABIgBAAgAAXEWIgCgCQgEgLAAgLIABgDIADgCIADACIACACQAAAKADAKIAAAEIgDABIgBABIgCgBgADaEOIgDgCIgBgDQACgJAAgKIAAgBIgBgRIABgDIADgCIADABIACADQABAJAAAJIAAABQAAALgCAKIgCACIgCABIgBAAgAjpD6IgDgCIgBgDQABgLADgKIACgCIAEAAIACACIABADQgDAJgBAKIgCADIgDABIAAAAgAAVDwIgDgBIgBgEQABgKADgKIACgDIAEAAIACACIABADQgDAKgBAJIgCADIgDABIAAAAgAgqDeIgCgDQgEgJgGgIIgBgEIACgCIAEgBIADACQAGAJAEAJIAAAEIgCADIgCAAIgCAAgADUDUIgCgDQgEgJgGgIIgBgDIACgDIAEgBIADACQAGAJAEAKIAAADIgCADIgCAAIgCAAgAjfDTIgCgDIAAgDQAFgIAGgIIAEgBIADABIABADIgBADQgFAHgFAHIgCADIgCAAIgCgBgAAfDKIgCgDIAAgDQAFgJAGgHIAEgCIADABIABADIgBAEQgFAGgFAIIgCACIgCAAIgCAAgAhEC6IgOgKIgCgDIABgEIADgCIADABIAPALIACADIgBAEIgDABIgBAAIgDgBgAjCC0IgDgBIgBgEIACgDQAIgGAJgFIAEAAIACACIABAEIgDACIgPAKIgDABIgBAAgAC6CxIgOgLIgCgDIABgDIADgCIADABIAPALIACADIgBADIgDACIgBAAIgDgBgAA8CrIgDgCIgBgEIACgCQAIgHAJgEIAEAAIACACIABADIgDADIgPAKIgDABIgBAAgAhjCmQgJgDgKgCIgDgBIgBgEIACgDIAEgBQAKACAKAEIACACIABADIgDADIgCAAIgBAAgAifCiIgCgDIABgDIACgCQALgDALAAIAEABIABAEIgBADIgEABQgKAAgKACIgBABIgCgBgACbCcQgJgDgKgBIgDgCIgBgEIACgCIAEgBQAKABAKAEIACACIABAEIgDACIgCABIgBgBgABfCYIgCgCIABgEIACgCQALgCALAAIAEABIABADIgBAEIgEABQgKAAgKACIgBAAIgCgBgAB0BjQgLgBgKgCIgDgDIAAgDIACgDIAEAAQAJACAJABIADABIABAEIgBADIgDABIAAAAgAiKBjQgLgBgKgCIgDgDIAAgDIACgDIAEAAQAJACAJABIADABIABAEIgBADIgDABIAAAAgACEBhIgCgDIABgEIADgBQAKgCAKgDIADAAIADADIgBADIgCACQgLAEgKACIgBAAIgDgBgAh6BhIgCgDIABgEIADgBQAKgCAKgDIADAAIADADIgBADIgCACQgLAEgKACIgBAAIgDgBgAF4BhQgKAAgKgDIgDgCIAAgDIACgDIADAAQAJACAKAAIADACIABADIgCADIgDABIAAAAgAmCBhQgKAAgKgDIgDgCIAAgDIACgDIADAAQAJACAKAAIADACIABADIgCADIgDABIAAAAgAGJBfIgCgDIABgDIADgCQAKgBAJgEIAEABIACACIAAAEIgDACQgKAEgLABIgBAAIgCgBgAlxBfIgCgDIABgDIADgCQAKgBAJgEIAEABIACACIAAAEIgDACQgKAEgLABIgBAAIgCgBgABLBYQgJgEgJgHIgCgDIABgDIADgCIAEABQAIAGAIAEIADADIgBADIgCADIgCAAIgCgBgAizBYQgJgEgJgHIgCgDIABgDIADgCIAEABQAIAGAIAEIADADIgBADIgCADIgCAAIgCgBgAFQBXQgKgFgIgHIgCgDIABgDIADgCIADABQAIAGAJAFIACACIAAAEIgDACIgBAAIgCAAgAmqBXQgKgFgIgHIgCgDIABgDIADgCIADABQAIAGAJAFIACACIAAAEIgDACIgBAAIgCAAgACrBVIgCgCIgBgEIACgCQAIgGAHgHIAEgBIADACIABADIgCADQgHAHgJAGIgDABIgBAAgAhTBVIgCgCIgBgEIACgCQAIgGAHgHIAEgBIADACIABADIgCADQgHAHgJAGIgDABIgBAAgAGwBTIgDgCIgBgDIACgDQAIgFAIgHIADgBIADABIABADIgBAEQgIAHgJAFIgCABIgBAAgAlKBTIgDgCIgBgDIACgDQAIgFAIgHIADgBIADABIABADIgBAEQgIAHgJAFIgCABIgBAAgAArA+IgDgBQgHgJgFgIIAAgEIACgDIAEAAIACACIALAQIABADIgBADIgDABIgBAAgAjTA+IgDgBQgHgJgFgIIAAgEIACgDIAEAAIACACIALAQIABADIgBADIgDABIgBAAgAEwA9IgDgCQgHgIgFgJIAAgEIACgCIADgBIADACIALAQIABAEIgCADIgDABIAAAAgAnKA9IgDgCQgHgIgFgJIAAgEIACgCIADgBIADACIALAQIABAEIgCADIgDABIAAAAgADHA4IgCgDIABgDQAGgJAFgJIACgCIAEAAIACADIAAADQgFAKgGAJIgDACIgBAAIgDgBgAg3A4IgCgDIABgDQAGgJAFgJIACgCIAEAAIACADIAAADQgFAKgGAJIgDACIgBAAIgDgBgAHMA3IgCgDIABgEQAGgIAEgJIADgDIADABIADACIgBAEQgEAKgHAJIgDACIgBAAIgCgBgAkuA3IgCgDIABgEQAGgIAEgJIADgDIADABIADACIgBAEQgEAKgHAJIgDACIgBAAIgCgBgAAXAbIgCgDQgEgKAAgMIABgCIADgBIADABIACACQAAAKADAJIAAAEIgDACIgBAAIgCAAgAjnAbIgCgDQgEgKAAgMIABgCIADgBIADABIACACQAAAKADAJIAAAEIgDACIgBAAIgCAAgAEbAZIgCgCQgDgLgBgLIACgCIADgCIADACIABABQABAKADAKIgBAEIgCACIgCAAIgCgBgAnfAZIgCgCQgDgLgBgLIACgCIADgCIADACIABABQABAKADAKIgBAEIgCACIgCAAIgCgBgADaATIgDgCIgBgEQACgJAAgJIAAAAIgBgRIABgDIADgCIADAAIACADQABAKAAAJIAAAAQAAAKgCAKIgCADIgCABIgBAAgAgkATIgDgCIgBgEQACgJAAgJIAAAAIgBgRIABgDIADgCIADAAIACADQABAKAAAJIAAAAQAAAKgCAKIgCADIgCABIgBAAgAHeARIgCgCIgBgDQACgJAAgJIAAgBIgCgRIABgDIADgCIADABIACADQACAJAAAJIAAABQAAAKgCAKIgCADIgDAAIgBAAgAkcARIgCgCIgBgDQACgJAAgJIAAgBIgCgRIABgDIADgCIADABIACADQACAJAAAJIAAABQAAAKgCAKIgCADIgDAAIgBAAgAAVgKIgDgCIgBgDQABgLADgKIACgCIAEAAIACACIABADQgDAJgBAKIgCADIgDABIAAAAgAjpgKIgDgCIgBgDQABgLADgKIACgCIAEAAIACACIABADQgDAJgBAKIgCADIgDABIAAAAgAEZgMIgDgCIgBgDQABgKAEgKIACgDIADAAIADACIAAADQgDAKgBAJIgBADIgDABIgBAAgAnhgMIgDgCIgBgDQABgKAEgKIACgDIADAAIADACIAAADQgDAKgBAJIgBADIgDABIgBAAgADUgmIgCgDQgEgJgGgIIgBgEIACgCIAEgBIADACQAGAJAEAJIAAAEIgCADIgCAAIgCAAgAgqgmIgCgDQgEgJgGgIIgBgEIACgCIAEgBIADACQAGAJAEAJIAAAEIgCADIgCAAIgCAAgAHZgoIgDgDQgEgJgFgIIgBgDIACgDIADgBIADACQAGAJAFAKIAAADIgDADIgCAAIgBAAgAkhgoIgDgDQgEgJgFgIIgBgDIACgDIADgBIADACQAGAJAFAKIAAADIgDADIgCAAIgBAAgAAfgxIgCgDIAAgDQAFgIAGgIIAEgBIADABIABADIgBADQgFAHgFAHIgCADIgCAAIgCgBgAjfgxIgCgDIAAgDQAFgIAGgIIAEgBIADABIABADIgBADQgFAHgFAHIgCADIgCAAIgCgBgAEkgyIgCgDIAAgDQAEgJAHgHIADgCIADABIACADIgBAEQgGAGgEAIIgDACIgBAAIgCAAgAnWgyIgCgDIAAgDQAEgJAHgHIADgCIADABIACADIgBAEQgGAGgEAIIgDACIgBAAIgCAAgAC6hKIgOgKIgCgDIABgEIADgCIADABIAPALIACADIgBAEIgDABIgBAAIgDgBgAhEhKIgOgKIgCgDIABgEIADgCIADABIAPALIACADIgBAEIgDABIgBAAIgDgBgAG/hLIgOgLIgCgDIABgDIACgCIAEABIAPALIABADIgBADIgDACIAAAAIgDgBgAk7hLIgOgLIgCgDIABgDIACgCIAEABIAPALIABADIgBADIgDACIAAAAIgDgBgAA8hQIgDgBIgBgEIACgDQAIgGAJgFIAEAAIACACIABAEIgDACIgPAKIgDABIgBAAgAjChQIgDgBIgBgEIACgDQAIgGAJgFIAEAAIACACIABAEIgDACIgPAKIgDABIgBAAgAFBhRIgDgCIgBgEIACgCQAIgHAJgEIADAAIADACIAAADIgCADIgQAKIgDABIAAAAgAm5hRIgDgCIgBgEIACgCQAIgHAJgEIADAAIADACIAAADIgCADIgQAKIgDABIAAAAgACbheQgJgDgKgCIgDgBIgBgEIACgDIAEgBQAKACAKAEIACACIABADIgDADIgCAAIgBAAgAhjheQgJgDgKgCIgDgBIgBgEIACgDIAEgBQAKACAKAEIACACIABADIgDADIgCAAIgBAAgAGfhgQgJgDgJgBIgDgCIgBgEIACgCIADgBQAKABAKAEIADACIAAAEIgCACIgCABIgCgBgAlbhgQgJgDgJgBIgDgCIgBgEIACgCIADgBQAKABAKAEIADACIAAAEIgCACIgCABIgCgBgABfhiIgCgDIABgDIACgCQALgDALAAIAEABIABAEIgBADIgEABQgKAAgKACIgBABIgCgBgAifhiIgCgDIABgDIACgCQALgDALAAIAEABIABAEIgBADIgEABQgKAAgKACIgBABIgCgBgAFkhjIgCgDIAAgEIADgCQAKgCAMAAIADABIABADIgBAEIgDABQgLAAgJACIgBAAIgCAAgAmWhjIgCgDIAAgEIADgCQAKgCAMAAIADABIABADIgBAEIgDABQgLAAgJACIgBAAIgCAAgAiKiPQgLAAgKgDIgDgCIAAgEIACgCIAEAAQAJACAJAAIADACIABADIgBADIgDABIAAAAgAh6iRIgCgCIABgEIADgCQAKgBAKgEIADABIADACIgBAEIgCACQgLAEgKABIgBAAIgDgBgABziWQgLgBgKgCIgDgCIAAgEIACgDIAEAAQAJACAJABIADABIABAEIgBACIgDACIAAAAgACDiYIgCgDIABgEIADgBQAKgCAKgDIADAAIADADIgBADIgCADQgLADgKACIgBAAIgDgBgAiziZQgJgFgJgHIgCgDIABgDIADgCIAEABQAIAGAIAFIADACIgBAEIgCACIgCAAIgCAAgAhTidIgCgCIgBgDIACgDQAIgFAHgHIAEgBIADABIABAEIgCACQgHAIgJAFIgDABIgBAAgABKihQgJgEgJgHIgCgDIABgEIADgBIAEABQAIAGAIAEIADADIgBADIgCACIgCABIgCgBgACqikIgCgCIgBgEIACgCQAIgGAHgHIAEgBIADACIABADIgCADQgHAHgJAGIgDABIgBAAgAjTizIgDgCQgHgIgFgJIAAgDIACgDIAEgBIACACIALAQIABAEIgBADIgDABIgBAAgAg3i5IgCgDIABgDQAGgJAFgJIACgDIAEABIACACIAAAEQgFAKgGAJIgDACIgBAAIgDgBgAAqi7IgDgCQgHgIgFgJIAAgDIACgDIAEAAIACACIALAQIABADIgBADIgDABIgBAAgADGjAIgCgEIABgDQAGgJAFgJIACgCIAEAAIACADIAAADQgFAKgGAJIgDACIgBAAIgDAAgAjnjXIgCgCQgEgLAAgLIABgDIADgCIADABIACADQAAAKADAKIAAAEIgDABIgBABIgCgBgAAWjeIgCgDQgEgKAAgLIABgEIADgBIADABIACADQAAAKADAKIAAADIgDACIgBAAIgCAAgAgkjfIgDgCIgBgDQACgJAAgKIAAgBIgBgQIABgEIADgCIADABIACADQABAJAAAJIAAABQAAALgCAKIgCACIgCABIgBAAgADZjmIgDgCIgBgEQACgJAAgJIAAgBIgBgRIABgDIADgCIADAAIACAEQABAJAAAJIAAABQAAAKgCAKIgCADIgCABIgBAAgAjpj9IgDgBIgBgEQABgKADgKIACgDIAEAAIACACIABADQgDAKgBAJIgCADIgDABIAAAAgAAUkEIgDgCIgBgDQABgLADgKIACgCIAEAAIACACIABADQgDAJgBAKIgCADIgDABIAAAAgAgqkZIgCgDQgEgJgGgIIgBgDIACgDIAEgBIADACQAGAJAEAKIAAADIgCADIgCAAIgCAAgADTkgIgCgDQgEgJgGgIIgBgEIACgDIAEAAIADACQAGAJAEAJIAAAEIgCADIgCAAIgCAAgAjfkjIgCgDIAAgDQAFgJAGgHIAEgCIADABIABADIgBAEQgFAGgFAIIgCACIgCAAIgCAAgAAekrIgCgDIAAgDQAFgIAGgIIAEgBIADABIABADIgBADQgFAHgFAIIgCACIgCAAIgCgBgAhEk8IgOgLIgCgDIABgDIADgCIADABIAPALIACADIgBADIgDACIgBAAIgDgBgAjClCIgDgCIgBgDIACgDQAIgHAJgEIAEgBIACADIABADIgDADIgPAKIgDABIgBAAgAC5lEIgOgKIgCgDIABgEIADgCIADABIAPALIACAEIgBADIgDABIgBAAIgDgBgAA7lKIgDgCIgBgDIACgDQAIgGAJgFIAEAAIACACIABAEIgDACIgPAKIgDABIgBAAgAhjlQQgJgEgKgBIgDgCIgBgEIACgCIAEgBQAKABAKAEIACACIABAEIgDACIgCABIgBAAgAiflVIgCgCIABgEIACgCQALgCALAAIAEABIABADIgBAEIgEABQgKAAgKACIgBAAIgCgBgACalYQgJgDgKgCIgDgCIgBgDIACgDIAEgBQAKACAKAEIACACIABADIgDADIgCAAIgBAAgABelcIgCgDIABgDIACgCQALgDALAAIAEABIABAEIgBADIgEABQgKAAgKACIgBABIgCgBg");
	this.shape_378.setTransform(515.8738,296.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_378).wait(161));

	// BunkaPodklad
	this.instance_158 = new lib.BunkaPodklad();
	this.instance_158.parent = this;
	this.instance_158.setTransform(467.7,393.95,1,1,0,0,0,424.1,279.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_158).wait(161));

	// Vrstva_1
	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#783C82").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_379.setTransform(1044.0406,1007.9921,2.3471,2.3471);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#783C82").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_380.setTransform(1021.5674,1005.4103,2.3471,2.3471);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#783C82").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_381.setTransform(1014.2914,999.0146,2.3471,2.3471);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#783C82").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_382.setTransform(1013.7633,968.2679,2.3471,2.3471);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#783C82").s().p("AgFAAQABgFAEAAQAGAAgBAFQABAGgGAAQgEAAgBgGg");
	this.shape_383.setTransform(1042.9258,960.2878,2.3471,2.3471);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#783C82").s().p("AgFAAQAAgEAFAAQAFAAABAEQgBAFgFAAQgFAAAAgFg");
	this.shape_384.setTransform(1068.9783,998.3691,2.3471,2.3471);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#783C82").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_385.setTransform(1066.5726,991.7386,2.3471,2.3471);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#783C82").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_386.setTransform(1024.6773,991.856,2.3471,2.3471);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#783C82").s().p("AgGAAQAAgGAGAAQACAAADACQACACAAACQAAAHgHAAQgGAAAAgHg");
	this.shape_387.setTransform(1014.6435,990.8585,2.3471,2.3471);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#783C82").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_388.setTransform(1021.274,998.1931,2.3471,2.3471);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#783C82").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAGgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape_389.setTransform(1033.3028,1005.4103,2.3471,2.3471);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#783C82").s().p("AgHAAQAAgDACgCQADgDACAAQAEAAACADQACACAAADQAAADgCADQgCADgEgBQgHAAAAgIg");
	this.shape_390.setTransform(1049.4389,1004.2368,2.3471,2.3471);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#783C82").s().p("AgHAHQgDgDAAgEQAAgDADgDQADgDAEAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_391.setTransform(1060.9983,999.836,2.3471,2.3471);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#783C82").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQAEADAAADQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_392.setTransform(1071.4428,978.3603,2.3471,2.3471);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#783C82").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_393.setTransform(1067.8635,984.8148,2.3471,2.3471);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#783C82").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_394.setTransform(1062.5825,973.4314,2.3471,2.3471);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#783C82").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_395.setTransform(1054.4851,963.7497,2.3471,2.3471);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#783C82").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_396.setTransform(1040.168,967.2704,2.3471,2.3471);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#783C82").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_397.setTransform(1024.912,973.7835,2.3471,2.3471);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#783C82").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_398.setTransform(1012.003,977.5388,2.3471,2.3471);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#783C82").s().p("AgGAIQgDgEAAgEQAAgEADgCQADgDADAAQAEAAADADQADACAAAEQAAAEgDAEQgDADgEAAQgDAAgDgDg");
	this.shape_399.setTransform(1021.6261,981.9396,2.3471,2.3471);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#783C82").s().p("AgGAHQgDgDABgEQgBgDADgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDADgEAAQgDAAgDgDg");
	this.shape_400.setTransform(1032.8333,959.9357,2.3471,2.3471);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#783C82").s().p("AgHAAQAAgHAHAAQADAAADADQACACAAACQAAADgCACQgDADgDAAQgHAAAAgIg");
	this.shape_401.setTransform(1021.274,962.4002,2.3471,2.3471);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#783C82").s().p("AgvArQgTgSgBgZQABgYATgSQAUgSAbAAQAcAAAUASQATASAAAYQAAAZgTASQgUASgcAAQgaAAgVgSg");
	this.shape_402.setTransform(1043.7473,984.6974,2.3471,2.3471);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#B36498").s().p("AAZCVQgTgGgFAAQgFgBgZAFQgTADgMgFQgGgCgOgKQgMgKgJgCQgZACgMgFQgPgHgDgVQgBgIADgZQgBAHgcgWQgGgKAAgOQAAgLAFgHIAFgHQAHgIgCgPQgDgVAAgEQACgOANgJIAYgPQAEgFADgIIAEgOQAGgPAQgJQAPgJAQACQAKABASAJQATAJAKABQAJAAAdgHQAWgHAOAHQAHAEALAOQAKAPAIAEIAYAIQAQAFAFAIQADAHgBANQgCAPACAGQADAIAJAHIASAKQAKAFAGAJQAGAIgEAJQgBAEgGAFIgIAJQgHAJADAZQADAZgHAKQgKAMgcgBIgUAAQgLAAgIAFQgEACgOARQgKAMgLABIgFAAQgIAAgLgDg");
	this.shape_403.setTransform(1041.1655,979.9439,2.3471,2.3471);

	this.instance_159 = new lib.Path_4_1_1();
	this.instance_159.parent = this;
	this.instance_159.setTransform(1048.5,1002.5,2.3523,2.3523,0,0,0,19.1,12.6);
	this.instance_159.alpha = 0.1992;

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#CECCC8").ss(2.1).p("AbK8+QgChigJiAQgLiIgNhZQgHhRgHgpQgNhKgkgjQgQgPgTgFQgUgGgSAHQgaAKgNAeQgJAUgGAnQgQBrACCVQAAAdAJDiQABAXgJATQgKAUgQAJQgnAWgcg4QgYgyABg/QACg/gDgiQgEgjACg/QACg3gFgcQgGgugYgdQgNgRgTgGQgTgGgSAIQgVAJgMAbQgHASgFAiQgSB5gBAoQgBAoADCeQABAdgQAXQgPAXgYAEQgkAHgVgsQgRglgBg2QgHiBgEhFQgGh9AIhIQAIhMgOg2QgShFgwgDQgrgBgYA5QgUAugEBDQgEBEAFDLQAEDLgEBFQgFBggqAPQgmANgZg0QgVgtAAg8QAAhMgLjcQgLjdAAhMQAAgvgEgYQgHgmgVgXQgMgNgPgFQgPgEgPAGQgUAJgKAcQgFASgDAiQgFBTAAC5QgBC5gFBSQgFBLgdAzQgiA8gwgZQgYgMgNgcQgNgbACgfQAHhJgEiTQgFinACg8QACg2gDgcQgGgtgVgeQgMgRgQgIQgSgJgRAEQgfAFgSAmQgNAagGAwQgOBbABCHQABAeAGDFQACA8gVAuQgYA1gmgSQgRgIgKgUQgKgUABgXQADhBgKilQgKifADhEQADgfgOgaQgOgbgYgLQgwgWggA9QgaA0gCBKQgCAqABDGQAACzgEA+QgCAngKAZQgNAhgZAEQgaAEgTghQgPgagHgpQgPhdgHjGQgDhqgCi8QAAhKgVgyQgYhAgwAHQgXAEgSASQgSATgHAbQgjCHAWEiQADAngCB+QgCBigDBDQgBAWAABAQgGA1glgBQgWgBgQgUQgPgTgBgbQgFhUgFkKQgGkEgEhRQgCgZgMgUQgNgUgTgIQgkgNgZAnQgWAhgFAzQgFA2AEBEQACAoAHBMQALCNgfBcQgIAWgNAMQgeAZghghQgdgegMgwQgWhegEjcQgDjbgXhbQgFgRgKgKQgLgLgOgBQgggDgNA4QgUBVACDkQADDTggBeQgGASgMANQgMANgPAFQgoAMgYg1QgUgsgBg+IgDlZQgBhBgTgsQgXg4grAHQgZADgRAVQgRAVgEAdQgOBcAHCsQAIC2gKBSQgDAigIATQgMAbgYAJQgSAGgSgHQgRgGgNgPQgZgcgHguQgFgcAAg4IAAnSQAAg5gFgcQgHgugZgdQgOgRgSgHQgUgHgSAHQgfAMgMAsQgJAfABA0IANIcQAAAXgKATQgKAUgRAJQgmASgagzQgWgsAAg7IgElZQAAgqgEgXQgFgjgQgVQgLgPgUgFQgTgFgQAIQgVAMgFAcQgCAJAAAqMgAdBNfQgBAxAEAbQAFAqARAbQAYApA1AQQAkALA9ABQIjALPxgCQQwgBHlAHQBPABA4hBQA4hBgBhdQgDp1gD1rQgC0VgDrOQgBjLgChlg");
	this.shape_404.setTransform(932.4478,401.2758);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#F2ECEA").s().p("EAYaAqTQnlgHwwABQvxACojgLQg9gBgkgLQg1gQgYgpQgRgbgFgqQgEgbABgxMAAdhNfQAAgqACgJQAFgcAVgMQAQgIATAFQAUAFALAPQAQAVAFAjQAEAXAAAqIAEFZQAAA7AWAsQAaAzAmgSQARgJAKgUQAKgTAAgXIgNocQgBg0AJgfQAMgsAfgMQASgHAUAHQASAHAOARQAZAdAHAuQAFAcAAA5IAAHSQAAA4AFAcQAHAuAZAcQANAPARAGQASAHASgGQAYgJAMgbQAIgTADgiQAKhSgIi2QgHisAOhcQAEgdARgVQARgVAZgDQArgHAXA4QATAsABBBIADFZQABA+AUAsQAYA1AogMQAPgFAMgNQAMgNAGgSQAghegDjTQgCjkAUhVQANg4AgADQAOABALALQAKAKAFARQAXBbADDbQAEDcAWBeQAMAwAdAeQAhAhAegZQANgMAIgWQAfhcgLiNQgHhMgCgoQgEhEAFg2QAFgzAWghQAZgnAkANQATAIANAUQAMAUACAZQAEBRAGEEQAFEKAFBUQABAbAPATQAQAUAWABQAlABAGg1IABhWQADhDAChiQACh+gDgnQgWkiAjiHQAHgbASgTQASgSAXgEQAwgHAYBAQAVAyAABKQACC8ADBqQAHDGAPBdQAHApAPAaQATAhAagEQAZgEANghQAKgZACgnQAEg+AAizQgBjGACgqQAChKAag0QAgg9AwAWQAYALAOAbQAOAagDAfQgDBEAKCfQAKClgDBBQgBAXAKAUQAKAUARAIQAmASAYg1QAVgugCg8IgHjjQgBiHAOhbQAGgwANgaQASgmAfgFQARgEASAJQAQAIAMARQAVAeAGAtQADAcgCA2QgCA8AFCnQAECTgHBJQgCAfANAbQANAcAYAMQAwAZAig8QAdgzAFhLQAFhSABi5QAAi5AFhTQADgiAFgSQAKgcAUgJQAPgGAPAEQAPAFAMANQAVAXAHAmQAEAYAAAvQAABMALDdQALDcAABMQAAA8AVAtQAZA0AmgNQAqgPAFhgQAEhFgEjLQgFjLAEhEQAEhDAUguQAYg5ArABQAwADASBFQAOA2gIBMQgIBIAGB9IALDGQABA2ARAlQAVAsAkgHQAYgEAPgXQAQgXgBgdQgDieABgoQABgoASh5QAFgiAHgSQAMgbAVgJQASgIATAGQATAGANARQAYAdAGAuQAFAcgCA3QgCA/AEAjQADAigCA/QgBA/AYAyQAcA4AngWQAQgJAKgUQAJgTgBgXIgJj/QgCiVAQhrQAGgnAJgUQANgeAagKQASgHAUAGQATAFAQAPQAkAjANBKQAHApAHBRQANBZALCIQAJCAACBiIADEwQADLOACUVQADVrADJ1QABBdg4BBQg4BAhNAAIgCAAg");
	this.shape_405.setTransform(932.4478,401.2758);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_405},{t:this.shape_404},{t:this.instance_159},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379}]}).wait(161));

	// Vrstva_1
	this.instance_160 = new lib.ClipGroup_7();
	this.instance_160.parent = this;
	this.instance_160.setTransform(601.4,956.2,1.9047,1.9442,0,0,0,393.2,122.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_160).wait(161));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.5,1.2,1498.4,1192.8);


// stage content:
(lib.DuodenumFinalObrazovka5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vrstva_1
	this.instance = new lib.Zelezo();
	this.instance.parent = this;
	this.instance.setTransform(424.85,489.6,1.0079,1.0078,0,0,0,482.9,478.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(329.5,548.5,970.0999999999999,662);
// library properties:
lib.properties = {
	id: 'D1DA884E8A8E9644BF2AE8963AD70D63',
	width: 1080,
	height: 1080,
	fps: 30,
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
an.compositions['D1DA884E8A8E9644BF2AE8963AD70D63'] = {
	getStage: function() { return exportRoot.getStage(); },
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;