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


(lib.Group_40_0 = function(mode,startPosition,loop,reversed) {
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

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_40_0, new cjs.Rectangle(-2.4,-0.3,168.20000000000002,139), null);


(lib.Group_3_17 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag8AwQgZgNgFgRQAFggAZgWQAbgXAhAAQAiAAAaAXQAZAWAGAgQgGASgZAMQgaAMgigBQghABgbgMg");
	this.shape.setTransform(9.125,5.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_17, new cjs.Rectangle(0,0,18.3,11.9), null);


(lib.Group_3_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag7AwQgagNgFgRQAFggAagWQAagXAhAAQAiAAAaAXQAaAWAFAgQgFARgaANQgaAMgigBQghABgagMg");
	this.shape.setTransform(9.125,5.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_1, new cjs.Rectangle(0,0,18.3,11.9), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C0C04").s().p("Ag6DrQg7gPgYhPQgXhQAYhgQAZhhA6g6QA6g6A6AOQA7APAYBPQAYBQgZBgQgZBhg7A6QgvAvgtAAQgMAAgLgDg");
	this.shape.setTransform(562.8375,152.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7C0C04").ss(1.1).p("ABlGkIACgFQB9lyBbnIQAujsAYjfQAIhHgIgjQgMg5g2gUQgdgKgiAEQgfAEgeAPQhFAigVBFQgNApgOBkQgNA8geB1QgfB2gMA6QgNA6gMAaQgXAug+A/QhHBIgVAfQhDBkgECXQgBA0AVBwQAUBrgEA6QgFBHgbBcQgFASgwCNQgHASgXA6QgXA5gIAnQgZB3BZANQAzAIAxgnQB7hjBSizQAehEBZkGg");
	this.shape_1.setTransform(565.6122,146.7609);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C97777").s().p("AlDQjQhZgNAZh3QAIgnAXg5QAXg6AHgSQAwiNAFgSQAbhcAFhHQAEg6gUhrQgVhwABg0QAEiXBDhkQAVgfBHhIQA+g/AXguQAMgaANg6QAMg6Afh2QAeh1ANg8QAOhkANgpQAVhFBFgiQAegPAfgEQAigEAdAKQA2AUAMA5QAIAjgIBHQgYDfguDsQhbHIh9FyIgCAFQhZEGgeBEQhSCzh7BjQgpAhgqAAIgRgCg");
	this.shape_2.setTransform(565.6122,146.7609);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C0C04").s().p("AiOCxQgtgkALhNQALhMA8hJQA7hJBJgbQBJgaAsAjQArAkgLBNQgKBMg8BJQg8BJhHAbQggALgaAAQgiAAgZgUg");
	this.shape_3.setTransform(387.5248,471.712,1,1,-0.9495);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#7C0C04").p("AiGHOQCDh8CMiwQBXhsCdjWQCDi0Bui4QAjg6AHghQAMg1gmgmQgogohGACQhJACgtAyQgwBGgfAoQgkAwhHBWQhKBaghArQgjAtgUAQQglAfhNAcQhZAigeASQhhA7g/B/QgTAmgQBUQgQBTgUAnQgPAfgmAoQgyA1gKAMQgPAUgnAjQgqAmgQASQg+BGAkBJQBCCIDJiFQBDgtBThMQBRhNAVgUg");
	this.shape_4.setTransform(397.2236,461.7602,1,1,-0.9495);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C97777").s().p("AqNKlQgkhJA+hGQAQgSAqgmQAngjAPgUQAKgMAyg1QAmgoAPgfQAUgnAQhTQAQhUATgmQA/h/Bhg7QAegSBZgiQBNgcAlgfQAUgQAjgtQAhgrBKhaQBHhWAkgwQAfgoAwhGQAtgyBJgCQBGgCAoAoQAmAmgMA1QgHAhgjA6QhuC4iDC0QidDWhXBsQiMCwiDB8IhmBhQhTBMhDAtQhjBBhDAAQhEAAghhEg");
	this.shape_5.setTransform(397.2236,461.7602,1,1,-0.9495);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7C0C04").s().p("AhqCaQhNgIgXg0QgXgzAsg/QAshABWgnQBVgnBNAJQBNAJAXAzQAYA0gsA/QgtBAhWAmQhFAghAAAQgOAAgPgCg");
	this.shape_6.setTransform(75.9893,701.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#7C0C04").p("Al8GFQCtg0DMheQCAg7Dph6QDFhlC2hzQBDgrA7g5QAXgXAMgNQARgUALgTQAagygUglQgTghg2gRQg6gTgyAQQgbAJhGAqQhXA1iNBBQieBGhMAlQgxAYgcAGQgvALhRgJQhfgKgjADQhxAJhxBXQgjAagzBCQgzBDgkAbQgbAUg0ATQhHAagMAGQgWALgyAOQg3APgWAJQhWAjgBBRQgBCYDugeQBQgKBsgfQA6gQBNgag");
	this.shape_7.setTransform(94.6093,693.5019);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C97777").s().p("AusFeQABhRBWgjQAWgJA3gPQAygOAWgLQAMgGBHgaQA0gTAbgUQAkgbAzhDQAzhCAjgaQBxhXBxgJQAjgDBfAKQBRAJAvgLQAcgGAxgYQBMglCehGQCNhBBXg1QBGgqAbgJQAygQA6ATQA2ARATAhQAUAlgaAyQgLATgRAUQgMANgXAXQg7A5hDArQi2BzjFBlQjpB6iAA7QjMBeitA0QhNAag6AQQhsAfhQAKQgnAFghAAQimAAABh/g");
	this.shape_8.setTransform(94.6093,693.5019);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AA4848").s().p("Egu3g5OMBdvAAAQhYLkjVLMQjaLflYK0QsoZa1VSNQ0pRl5qIPg");
	this.shape_9.setTransform(305.125,366.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(-0.4,0.5,606.6999999999999,741.7), null);


(lib.kanalFialovyStranaVpravo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990099").ss(1.5).p("AhxjXQABAlAPBAQAQBIACAUQAMBmgiBjQgPArgCAQQgGAiANAXQARAeAvALQAnAIAmgHQAtgJAWgnQAWgmgKgvQgCgJgJgcQgHgYgBgOQgBgSAJgYQALgZAEgOQANgqgHgxQgFgegJgYQgEgKgIgPQgKgSgDgHQgKgXADg6QADg2gPgZQgTghg6AAQg7ABgUAiQgUAiACA4g");
	this.shape.setTransform(12.1425,34.0504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC00FF").s().p("AgvFQQgvgLgRgeQgNgXAGgiQACgQAPgrQAihjgMhmQgCgUgQhIQgPhAgBglQgCg4AUgiQAUgiA7gBQA6AAATAhQAPAZgDA2QgDA6AKAXIANAZQAIAPAEAKQAJAYAFAeQAHAxgNAqQgEAOgLAZQgJAYABASQABAOAHAYQAJAcACAJQAKAvgWAmQgWAngtAJQgTAEgRAAQgVAAgUgFg");
	this.shape_1.setTransform(12.1425,34.0504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kanalFialovyStranaVpravo, new cjs.Rectangle(-1.1,-3.8,27.3,74), null);


(lib.kanalFialovyStranaVlevo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990066").ss(1.5).p("AB6jWQgCAjgNA6QgPBFgDAYQgPBrAoB1QAKAfADALQAFAYgGATQgIAbgeAQQgWAMgjAEQg7AEgigZQgcgVgJgmQgJgkALgkQAHgUADgKQAGgRAAgNQgBgSgLgXQgPgagGgNQgXgwAOg1QAHgaAOgYQAEgGAKgPQAKgNAFgIQAMgZgDgtQgDg0AGgTQAJghAigNQAdgLAkAGQAcAGAPANQAaAVAEAuQADASgBATg");
	this.shape.setTransform(12.9292,34.0414);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC00FF").s().p("Ag+E/QgcgVgJgmQgJgkALgkIAKgeQAGgRAAgNQgBgSgLgXQgPgagGgNQgXgwAOg1QAHgaAOgYIAOgVIAPgVQAMgZgDgtQgDg0AGgTQAJghAigNQAdgLAkAGQAcAGAPANQAaAVAEAuQADASgBATQgCAjgNA6QgPBFgDAYQgPBrAoB1QAKAfADALQAFAYgGATQgIAbgeAQQgWAMgjAEIgSAAQguAAgdgVg");
	this.shape_1.setTransform(12.9292,34.0414);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kanalFialovyStranaVlevo, new cjs.Rectangle(-1,-1,29.4,72), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FeTransferin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Transferin = function(mode,startPosition,loop,reversed) {
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
	this.FeTransferin_anim = new lib.FeTransferin();
	this.FeTransferin_anim.name = "FeTransferin_anim";
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

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Transferin, new cjs.Rectangle(135.3,-49,130.5,99.7), null);


(lib.FecervenaBezTextu = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_3_1();
	this.instance.setTransform(10.45,7.2,1,1,0,0,0,9.1,6);
	this.instance.alpha = 0.1992;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQAsAAAeAfQAfAeAAArQAAAsgfAeQgfAfgrAAQgpAAgggfgAg/hAQgbAbAAAlQAAAmAbAaQAaAbAlAAQAmAAAbgbQAagaAAgmQAAgkgagcQgbgagmAAQglAAgaAag");
	this.shape.setTransform(10.475,10.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7181F").s().p("Ag/BAQgbgaAAgmQAAglAbgbQAagaAlAAQAmAAAbAaQAaAcAAAkQAAAmgaAaQgbAbgmAAQglAAgagbg");
	this.shape_1.setTransform(10.475,10.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FecervenaBezTextu, new cjs.Rectangle(0,0,21,21), null);


(lib.FeBezTextu = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_3_17();
	this.instance.setTransform(10.45,7.2,1,1,0,0,0,9.1,6);
	this.instance.alpha = 0.1992;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C1D64").s().p("AhJBKQgfgeABgsQgBgrAfgeQAfgfAqAAQAsAAAeAfQAeAeABArQgBAsgeAeQgfAfgrAAQgpAAgggfgAhAhAQgaAbAAAlQAAAnAaAZQAbAbAlAAQAmAAAbgbQAbgaAAgmQAAglgbgbQgbgagmAAQgkAAgcAag");
	this.shape.setTransform(10.45,10.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#593A9C").s().p("AhABAQgagZAAgnQAAglAagbQAcgaAkAAQAlAAAbAaQAbAbAAAlQAAAmgbAaQgbAbglAAQglAAgbgbg");
	this.shape_1.setTransform(10.475,10.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FeBezTextu, new cjs.Rectangle(0,0,20.9,21), null);


(lib.BunkaSlezinaCelek = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(1245.9,1165.45,1,1,0,0,0,111.7,88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(468));

	// Vrstva_35_kopie
	this.instance_1 = new lib.FecervenaBezTextu();
	this.instance_1.setTransform(1300.65,1010,2.716,2.716,0,0,0,10.8,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(165).to({x:1300.7,y:1010.05},0).wait(1).to({regX:10.5,regY:10.5,scaleX:2.7161,scaleY:2.7161,x:1288.45,y:1019.85},0).wait(1).to({x:1278.05,y:1035.75},0).wait(1).to({x:1268.6,y:1052},0).wait(1).to({x:1260.15,y:1068.7},0).wait(1).to({x:1252.7,y:1085.8},0).wait(1).to({x:1246.2,y:1103.45},0).wait(1).to({x:1240.75,y:1121.65},0).wait(1).to({x:1236.35,y:1140.4},0).wait(1).to({x:1232.95,y:1159.75},0).wait(1).to({x:1230.6,y:1179.75},0).wait(1).to({x:1229.35,y:1200.4},0).wait(1).to({x:1229.15,y:1221.8},0).wait(1).to({x:1229.05,y:1240.1},0).wait(1).to({x:1228.9,y:1258.4},0).wait(1).to({x:1228.75,y:1276.65},0).wait(1).to({x:1228.6,y:1294.95},0).wait(1).to({x:1228.5,y:1313.2},0).wait(1).to({x:1228.35,y:1331.5},0).wait(1).to({x:1228.2,y:1349.75},0).wait(1).to({x:1228.05,y:1368.05},0).wait(1).to({x:1227.95,y:1386.3},0).wait(1).to({x:1227.8,y:1404.6},0).wait(1).to({x:1227.65,y:1422.85},0).wait(1).to({x:1227.5,y:1441.15},0).wait(1).to({x:1227.35,y:1459.4},0).wait(1).to({x:1228.5,y:1466.65},0).wait(1).to({x:1230.15,y:1474.6},0).wait(1).to({x:1232.6,y:1483.4},0).wait(1).to({x:1236.3,y:1493.45},0).wait(1).to({x:1242.3,y:1505.25},0).wait(1).to({x:1252.5,y:1518.9},0).wait(1).to({x:1267.55,y:1531.75},0).wait(1).to({x:1282.95,y:1539.9},0).wait(1).to({x:1296,y:1544.35},0).wait(1).to({x:1307,y:1546.85},0).wait(1).to({x:1316.6,y:1548.25},0).wait(1).to({x:1325.1,y:1549.05},0).wait(1).to({x:1332.85,y:1549.35},0).wait(1).to({x:1339.5,y:1549.4},0).wait(1).to({x:1345.4,y:1550},0).wait(1).to({x:1350.7,y:1551.15},0).wait(1).to({x:1355.45,y:1552.8},0).wait(1).to({x:1359.65,y:1555},0).wait(1).to({x:1363.35,y:1557.7},0).wait(1).to({x:1366.55,y:1560.85},0).wait(1).to({x:1369.3,y:1564.6},0).wait(1).to({x:1371.55,y:1568.85},0).wait(1).to({x:1373.3,y:1573.6},0).wait(1).to({x:1374.6,y:1579},0).wait(1).to({x:1375.45,y:1585},0).wait(1).to({x:1375.75,y:1591.65},0).wait(1).to({x:1375.5,y:1599.05},0).wait(1).to({x:1375.55,y:1607.75},0).wait(1).to({y:1616.45},0).wait(1).to({x:1375.6,y:1625.15},0).wait(1).to({y:1633.85},0).wait(1).to({y:1642.55},0).wait(1).to({x:1375.65,y:1651.25},0).wait(1).to({y:1659.95},0).wait(1).to({y:1668.65},0).wait(1).to({x:1375.7,y:1677.35},0).wait(1).to({y:1686},0).wait(1).to({y:1694.7},0).wait(1).to({x:1375.75,y:1703.4},0).wait(1).to({y:1712.1},0).wait(1).to({y:1720.8},0).wait(1).to({x:1375.8,y:1729.5},0).wait(1).to({y:1738.2},0).wait(1).to({y:1746.9},0).wait(1).to({x:1375.85,y:1755.6},0).wait(1).to({y:1764.3},0).wait(1).to({y:1772.95},0).wait(1).to({x:1374.1,y:1779.85},0).wait(1).to({x:1372.05,y:1786.2},0).wait(1).to({x:1369.75,y:1792.15},0).wait(1).to({x:1367.15,y:1797.6},0).wait(1).to({x:1364.3,y:1802.6},0).wait(1).to({x:1361.15,y:1807.15},0).wait(1).to({x:1357.8,y:1811.3},0).wait(1).to({x:1354.15,y:1815.05},0).wait(1).to({x:1350.2,y:1818.35},0).wait(1).to({x:1346.05,y:1821.25},0).wait(1).to({x:1341.6,y:1823.75},0).wait(1).to({x:1336.85,y:1825.85},0).wait(1).to({x:1331.85,y:1827.55},0).wait(1).to({x:1326.55,y:1828.8},0).wait(1).to({x:1321,y:1829.7},0).wait(1).to({x:1315.1,y:1830.15},0).wait(1).to({x:1308.95,y:1830.2},0).wait(1).to({x:1302.45,y:1829.85},0).wait(1).to({x:1295.65,y:1829.05},0).wait(1).to({x:1288.5,y:1827.8},0).wait(1).to({x:1281,y:1826.1},0).wait(1).to({x:1276.55,y:1825.3},0).wait(1).to({x:1272.05,y:1824.45},0).wait(1).to({x:1267.55,y:1823.6},0).wait(1).to({x:1263.05,y:1822.75},0).wait(1).to({x:1258.55,y:1821.9},0).wait(1).to({x:1254.05,y:1821.05},0).wait(1).to({x:1249.6,y:1820.2},0).wait(1).to({x:1245.1,y:1819.35},0).wait(1).to({x:1240.6,y:1818.5},0).wait(1).to({x:1236.1,y:1817.65},0).wait(1).to({x:1231.6,y:1816.8},0).wait(1).to({x:1227.1,y:1815.95},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.0909},0).wait(1).to({alpha:0},0).wait(187));

	// Vrstva_35
	this.instance_2 = new lib.FecervenaBezTextu();
	this.instance_2.setTransform(1230.65,1006.1,2.716,2.716,0,0,0,10.5,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({y:1006.25},0).wait(1).to({regY:10.5,scaleX:2.7161,scaleY:2.7161,x:1230.5,y:1023.3},0).wait(1).to({x:1230.4,y:1040.95},0).wait(1).to({x:1230.3,y:1058.6},0).wait(1).to({x:1230.2,y:1076.25},0).wait(1).to({x:1230.1,y:1093.9},0).wait(1).to({x:1230,y:1111.55},0).wait(1).to({x:1229.9,y:1129.2},0).wait(1).to({x:1229.8,y:1146.85},0).wait(1).to({x:1229.65,y:1164.5},0).wait(1).to({x:1229.55,y:1182.15},0).wait(1).to({x:1229.45,y:1199.8},0).wait(1).to({x:1229.35,y:1217.45},0).wait(1).to({x:1229.25,y:1235.05},0).wait(1).to({x:1229.15,y:1252.7},0).wait(1).to({x:1229.05,y:1270.35},0).wait(1).to({x:1228.95,y:1288},0).wait(1).to({x:1228.85,y:1305.65},0).wait(1).to({x:1228.7,y:1323.3},0).wait(1).to({x:1228.6,y:1340.95},0).wait(1).to({x:1228.5,y:1358.6},0).wait(1).to({x:1228.4,y:1376.25},0).wait(1).to({x:1228.3,y:1393.9},0).wait(1).to({x:1228.2,y:1411.55},0).wait(1).to({x:1228.1,y:1429.2},0).wait(1).to({x:1228,y:1446.85},0).wait(1).to({x:1227.85,y:1464.45},0).wait(1).to({x:1229,y:1471.75},0).wait(1).to({x:1230.7,y:1479.85},0).wait(1).to({x:1233.3,y:1489.1},0).wait(1).to({x:1237.5,y:1500.05},0).wait(1).to({x:1245.05,y:1513.85},0).wait(1).to({x:1260.1,y:1530.8},0).wait(1).to({x:1279.5,y:1543.2},0).wait(1).to({x:1294.8,y:1548.95},0).wait(1).to({x:1306.8,y:1551.8},0).wait(1).to({x:1316.8,y:1553.3},0).wait(1).to({x:1325.55,y:1554.1},0).wait(1).to({x:1333.35,y:1554.4},0).wait(1).to({x:1340,y:1554.45},0).wait(1).to({x:1345.95,y:1555.05},0).wait(1).to({x:1351.25,y:1556.2},0).wait(1).to({x:1356,y:1557.85},0).wait(1).to({x:1360.15,y:1560.05},0).wait(1).to({x:1363.85,y:1562.75},0).wait(1).to({x:1367.05,y:1565.9},0).wait(1).to({x:1369.8,y:1569.65},0).wait(1).to({x:1372.05,y:1573.85},0).wait(1).to({x:1373.8,y:1578.65},0).wait(1).to({x:1375.1,y:1584.05},0).wait(1).to({x:1375.95,y:1590.05},0).wait(1).to({x:1376.25,y:1596.7},0).wait(1).to({x:1376,y:1604.1},0).wait(1).to({x:1376.05,y:1612.8},0).wait(1).to({y:1621.5},0).wait(1).to({x:1376.1,y:1630.2},0).wait(1).to({y:1638.9},0).wait(1).to({y:1647.6},0).wait(1).to({x:1376.15,y:1656.3},0).wait(1).to({y:1665},0).wait(1).to({y:1673.7},0).wait(1).to({x:1376.2,y:1682.4},0).wait(1).to({y:1691.05},0).wait(1).to({y:1699.75},0).wait(1).to({x:1376.25,y:1708.45},0).wait(1).to({y:1717.15},0).wait(1).to({y:1725.85},0).wait(1).to({x:1376.3,y:1734.55},0).wait(1).to({y:1743.25},0).wait(1).to({y:1751.95},0).wait(1).to({x:1376.35,y:1760.65},0).wait(1).to({y:1769.35},0).wait(1).to({y:1778},0).wait(1).to({x:1374.6,y:1784.9},0).wait(1).to({x:1372.55,y:1791.3},0).wait(1).to({x:1370.2,y:1797.2},0).wait(1).to({x:1367.65,y:1802.65},0).wait(1).to({x:1364.8,y:1807.65},0).wait(1).to({x:1361.65,y:1812.25},0).wait(1).to({x:1358.25,y:1816.4},0).wait(1).to({x:1354.6,y:1820.1},0).wait(1).to({x:1350.7,y:1823.4},0).wait(1).to({x:1346.55,y:1826.3},0).wait(1).to({x:1342.1,y:1828.8},0).wait(1).to({x:1337.35,y:1830.9},0).wait(1).to({x:1332.35,y:1832.55},0).wait(1).to({x:1327.1,y:1833.85},0).wait(1).to({x:1321.5,y:1834.75},0).wait(1).to({x:1315.65,y:1835.2},0).wait(1).to({x:1309.5,y:1835.25},0).wait(1).to({x:1303,y:1834.9},0).wait(1).to({x:1296.2,y:1834.1},0).wait(1).to({x:1289.05,y:1832.85},0).wait(1).to({x:1281.5,y:1831.15},0).wait(1).to({x:1276.9,y:1829.85},0).wait(1).to({x:1272.25,y:1828.55},0).wait(1).to({x:1267.6,y:1827.25},0).wait(1).to({x:1262.95,y:1825.95},0).wait(1).to({x:1258.3,y:1824.65},0).wait(1).to({x:1253.65,y:1823.3},0).wait(1).to({x:1249,y:1822},0).wait(1).to({x:1244.35,y:1820.7},0).wait(1).to({x:1239.7,y:1819.4},0).wait(1).to({x:1235.05,y:1818.1},0).wait(1).to({x:1230.4,y:1816.8},0).wait(1).to({x:1225.75,y:1815.45},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.0909},0).wait(1).to({alpha:0},0).wait(258).to({_off:true},1).wait(68));

	// Vrstva_4
	this.instance_3 = new lib.FecervenaBezTextu();
	this.instance_3.setTransform(1369.25,935.45,2.7161,2.7161,0,0,0,10.5,10.5);

	this.instance_4 = new lib.FecervenaBezTextu();
	this.instance_4.setTransform(1299.05,936.65,2.7161,2.7161,0,0,0,10.5,10.5);

	this.instance_5 = new lib.FecervenaBezTextu();
	this.instance_5.setTransform(1230.05,935.65,2.7161,2.7161,0,0,0,10.5,10.5);

	this.instance_6 = new lib.FecervenaBezTextu();
	this.instance_6.setTransform(1164.7,935.85,2.7161,2.7161,0,0,0,10.5,10.5);

	this.instance_7 = new lib.FecervenaBezTextu();
	this.instance_7.setTransform(1299.35,868.8,2.7161,2.7161,0,0,0,10.5,10.5);

	this.instance_8 = new lib.FecervenaBezTextu();
	this.instance_8.setTransform(1230.6,869.8,2.7161,2.7161,0,0,0,10.5,10.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7834F").s().p("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");
	this.shape.setTransform(1423.1735,1079.8335,2.8001,2.8001,-37.1628);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFB655").ss(2.8).p("AgribQgtgCg+gLQhGgOgkgHQg8gMgiAAQg0gBgnAUQguAZgVA1QgZBDAfA+QAdA9BBAgQBXArBmAWQCxAnCxgRQBogKA5gNQBagVA7gpQBMg3gBhlQgBhphUguQgwgahDAFQgpADhMAVQiAAih2gFg");
	this.shape_1.setTransform(1423.1217,1079.8896,2.8001,2.8001,-37.1628);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF2DA").s().p("AjbC3QhmgWhXgrQhBgggdg9Qgfg+AZhDQAVg1AugZQAngUA0ABQAiAAA8AMIBqAVQA+ALAtACQB2AFCAgiQBMgVApgDQBDgFAwAaQBUAuABBpQABBlhMA3Qg7AphaAVQg5ANhoAKQg4AFg3AAQh5AAh6gbg");
	this.shape_2.setTransform(1423.1217,1079.8896,2.8001,2.8001,-37.1628);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(468));

	// Vrstva_51
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("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gFAFAAQAFgCAEADQAFACABAGQAHAbAMAZQACAEgBAGQgCAFgFACIgFABIgEgBgAhnicQgFgCgDgEQgDgFACgFQAFgaAAgeIAAAAIAAgJQAAgEAEgEQAEgEAFAAQAFAAAEAEQADAEAAAEIAAAJIAAAAQAAAggGAeQgBAEgEAEQgEACgDAAIgDAAgAJJivQgFgCgDgEQgDgFABgFQAGgbAAgdIAAAAIAAgIQAAgGAEgDQADgEAFAAQAFAAAEAEQAEAEAAAFIAAAIIAAAAQAAAggGAeQgCAEgEAEQgDACgEAAIgCAAgAp/jWQgEgEAAgFIAAgGQAAgfAGgdQABgFAEgDQAFgDAFABQAFABADAFQADAEgBAFQgGAaAAAdIAAAGQAAAFgDAEQgEADgFABQgFgBgEgDgAAxjpQgEgEAAgFIAAgGQAAgfAGgdQAAgFAFgDQAEgDAFACQAFAAADAFQADAEgBAFQgFAaAAAdIAAAGQAAAFgEAEQgEADgFABQgFgBgDgDgAhskdQgFgEgBgEQgHgcgOgZQgCgFABgFQACgFAFgCQAEgDAFACQAFABACAFQAPAcAIAeQABAFgCAFQgDAEgFACIgEAAQgDAAgCgBgAJDkxQgEgDgCgEQgHgdgNgYQgDgGACgEQABgFAFgCQAFgDAFACQAEABADAFQAOAcAIAfQACAEgDAFQgDAEgFACIgDAAQgDAAgDgCgApjlMQgFgCgCgEQgCgGADgEQANgcAUgaQADgEAGgBQAFAAAEADQAEADAAAGQABAFgDAEQgTAXgMAaQgCAEgFACIgEABIgFgCgABMlfQgFgCgBgEQgCgGACgEQANgcAVgaQADgEAFAAQAFgBAEADQAEAEABAFQAAAFgDAEQgTAWgLAbQgDAEgEACIgEABIgGgCgAiemGQgFAAgDgDIgPgQQgNgMgMgLQgFgDAAgFQgBgFAEgEQADgEAFgBQAFgBAEAEQAOAKANAOIAQARQADADAAAGQAAAFgEAEQgDADgFAAIgBgBgAISmYQgGgBgDgEIgPgPIgZgXQgEgDgBgFQAAgFADgEQADgFAFAAQAFgBAFAEQAOAKANAOIAQARQADAEAAAFQgBAFgDAEQgEADgEAAIgBAAgAoWmoQgFAAgEgEQgDgEAAgFQABgFAEgDQAYgVAbgOQAFgDAFACQAEABADAGQACAEgBAFQgCAEgEADQgZANgWATQgEADgEAAIgBgBgACZm7QgFAAgDgEQgEgEABgFQAAgFAEgDQAYgVAcgOQAEgDAFACQAFABACAFQADAFgCAFQgBAFgFACQgZANgWATQgDADgFAAIgBgBgAj/nOQgagMgdgGQgFgBgDgEQgDgEACgGQAAgEAFgEQAEgCAFABQAgAGAcANQAFADACAEQABAFgCAFQgCAEgFACIgEABIgFgBgAmznfQgFgCgBgGQgBgEADgFQACgFAFAAQAegIAiAAQAFgBAEAEQADADAAAGQAAAFgDAEQgEADgFAAQgfABgbAHIgDAAQgDAAgDgCgAGwnhQgagMgcgFQgFgCgDgEQgDgFABgFQABgEAEgEQAFgCAFABQAfAGAdANQAEACACAFQACAFgCAFQgDAFgEACIgEAAIgGgBgAD8nxQgEgEgBgFQgCgEADgFQADgFAFgBQAegHAhAAQAFAAAEADQAEAEAAAFQAAAFgEAEQgDAEgFgBQgfABgbAHIgDAAQgEAAgDgBg");
	this.shape_3.setTransform(1266.875,893.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(468));

	// Vrstva_27
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("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");
	this.shape_4.setTransform(1266.4629,990.2751);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(468));

	// Vrstva_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_5.setTransform(1636.7042,1356.7855,2.1372,2.1372,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_6.setTransform(1627.7278,1356.7855,2.1372,2.1372,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_7.setTransform(1618.7514,1356.7855,2.1372,2.1372,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_8.setTransform(1609.775,1356.7855,2.1372,2.1372,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_9.setTransform(1601.3329,1356.7855,2.1372,2.1372,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_10.setTransform(1592.0359,1356.7855,2.1372,2.1372,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_11.setTransform(1584.235,1356.7855,2.1372,2.1372,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_12.setTransform(1575.2586,1356.7855,2.1372,2.1372,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_13.setTransform(1567.4577,1356.7855,2.1372,2.1372,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_14.setTransform(1559.3362,1356.7855,2.1372,2.1372,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_15.setTransform(1551.5353,1356.7855,2.1372,2.1372,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#D61ACD").ss(1,1).p("AAKgMIgTAZ");
	this.shape_16.setTransform(1544.429,1353.9003,2.1372,2.1372,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#D61ACD").ss(1,1).p("AALgKIgVAW");
	this.shape_17.setTransform(1538.0707,1348.6106,2.1372,2.1372,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#D61ACD").ss(1,1).p("AALgKIgWAV");
	this.shape_18.setTransform(1532.6207,1343.1607,2.1372,2.1372,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#D61ACD").ss(1,1).p("AALgKIgWAV");
	this.shape_19.setTransform(1526.7433,1336.7489,2.1372,2.1372,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_20.setTransform(1517.8738,1332.421,2.1372,2.1372,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_21.setTransform(1508.0425,1332.421,2.1372,2.1372,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_22.setTransform(1499.173,1332.421,2.1372,2.1372,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_23.setTransform(1490.0897,1332.421,2.1372,2.1372,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_24.setTransform(1481.1133,1332.421,2.1372,2.1372,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#D61ACD").p("AF6A6Ii0AAQgkAAgXgZIhDhCQgZgYgiAAImGAA");
	this.shape_25.setTransform(1558.5347,1340.9166,2.1372,2.1372,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_26.setTransform(1362.176,1318.2084,2.1372,2.1372,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_27.setTransform(1371.2593,1318.2084,2.1372,2.1372,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_28.setTransform(1380.2357,1318.2084,2.1372,2.1372,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_29.setTransform(1389.2121,1318.2084,2.1372,2.1372,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_30.setTransform(1397.6542,1318.2084,2.1372,2.1372,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_31.setTransform(1406.9512,1318.2084,2.1372,2.1372,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_32.setTransform(1414.7521,1318.2084,2.1372,2.1372,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_33.setTransform(1423.6216,1318.2084,2.1372,2.1372,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_34.setTransform(1431.5294,1318.2084,2.1372,2.1372,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_35.setTransform(1439.544,1318.2084,2.1372,2.1372,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_36.setTransform(1447.4518,1318.2084,2.1372,2.1372,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#2F4EA3").ss(1,1).p("AgJANIATgZ");
	this.shape_37.setTransform(1454.5581,1321.0402,2.1372,2.1372,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#2F4EA3").ss(1,1).p("AgKALIAVgV");
	this.shape_38.setTransform(1460.9164,1326.3299,2.1372,2.1372,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#2F4EA3").ss(1,1).p("AgKALIAVgW");
	this.shape_39.setTransform(1466.3129,1331.7264,2.1372,2.1372,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#2F4EA3").ss(1,1).p("AgKALIAVgW");
	this.shape_40.setTransform(1472.1903,1338.1381,2.1372,2.1372,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_41.setTransform(1481.1133,1342.5729,2.1372,2.1372,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_42.setTransform(1490.8377,1342.5729,2.1372,2.1372,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_43.setTransform(1499.8141,1342.5729,2.1372,2.1372,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_44.setTransform(1508.8974,1342.5729,2.1372,2.1372,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_45.setTransform(1517.8738,1342.5729,2.1372,2.1372,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#2F4EA3").p("Al6g5IC1AAQAiAAAZAZIBDBCQAaAYAhAAIGHAA");
	this.shape_46.setTransform(1440.3989,1334.0774,2.1372,2.1372,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_47.setTransform(1362.176,1308.8046,2.1372,2.1372,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_48.setTransform(1371.2593,1308.8046,2.1372,2.1372,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_49.setTransform(1380.2357,1308.8046,2.1372,2.1372,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_50.setTransform(1389.2121,1308.8046,2.1372,2.1372,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_51.setTransform(1397.6542,1308.8046,2.1372,2.1372,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_52.setTransform(1406.9512,1308.8046,2.1372,2.1372,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_53.setTransform(1414.7521,1308.8046,2.1372,2.1372,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_54.setTransform(1423.6216,1308.8046,2.1372,2.1372,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_55.setTransform(1431.5294,1308.8046,2.1372,2.1372,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_56.setTransform(1439.544,1308.8046,2.1372,2.1372,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_57.setTransform(1447.4518,1308.8046,2.1372,2.1372,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#2F4EA3").ss(1,1).p("AgJgMIATAZ");
	this.shape_58.setTransform(1454.5581,1305.9727,2.1372,2.1372,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#2F4EA3").ss(1,1).p("AgKgKIAVAV");
	this.shape_59.setTransform(1460.9164,1300.6831,2.1372,2.1372,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#2F4EA3").ss(1,1).p("AgKgKIAVAV");
	this.shape_60.setTransform(1466.3129,1295.2865,2.1372,2.1372,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#2F4EA3").ss(1,1).p("AgKgKIAVAV");
	this.shape_61.setTransform(1472.1903,1288.8748,2.1372,2.1372,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_62.setTransform(1481.1133,1284.4401,2.1372,2.1372,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_63.setTransform(1490.8377,1284.4401,2.1372,2.1372,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_64.setTransform(1499.8141,1284.4401,2.1372,2.1372,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_65.setTransform(1508.8974,1284.4401,2.1372,2.1372,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_66.setTransform(1517.8738,1284.4401,2.1372,2.1372,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#2F4EA3").p("Al6A6IC1AAQAiAAAZgYIBDhCQAagZAhAAIGHAA");
	this.shape_67.setTransform(1440.3989,1292.9356,2.1372,2.1372,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAFgEQAEgDAFABQAFABAEADQADAFgBAEQAAAGgEADQgEAEgFAAIAAAAg");
	this.shape_68.setTransform(1595.7768,1089.6464,2.1398,2.1398,18.3782);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAEgDAFABQAFAAAEAEQAEAFAAAEQgBAFgEAFQgEADgFAAIAAAAg");
	this.shape_69.setTransform(1610.3321,1096.737,2.1398,2.1398,18.3782);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGABADADQAEAFgBAEQAAAGgEADQgEAEgFAAIAAAAg");
	this.shape_70.setTransform(1632.0948,1107.8004,2.1398,2.1398,18.3782);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAFQAEADgBAFQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_71.setTransform(1646.5342,1116.7691,2.1398,2.1398,18.3782);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgFQABgFAEgEQAFgDAEAAQAGABADAFQAEAEgBAEQAAAFgFAFQgDADgFAAIAAgBg");
	this.shape_72.setTransform(1660.163,1124.9047,2.1398,2.1398,18.3782);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_73.setTransform(1673.4271,1135.0775,2.1398,2.1398,18.3782);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAFgEQADgDAFABQAGAAAEAEQADAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_74.setTransform(1685.795,1146.1601,2.1398,2.1398,18.3782);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQADgEAFAAQAGABAEAEQADAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_75.setTransform(1697.0346,1158.1406,2.1398,2.1398,18.3782);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEAAgEQABgGAFgDQADgEAFAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_76.setTransform(1682.8354,1164.2306,2.1398,2.1398,18.3782);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgFQABgFAEgEQAFgDAEAAQAGABADAFQAEAEgBAEQAAAFgEAFQgEADgFAAIAAgBg");
	this.shape_77.setTransform(1668.8314,1152.1364,2.1398,2.1398,18.3782);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEAAgFQABgFAFgEQAEgDAFABQAFAAAEAEQADAEgBAFQAAAFgFAEQgDAEgFAAIgBAAg");
	this.shape_78.setTransform(1657.6093,1143.4475,2.1398,2.1398,18.3782);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFAAgEQABgGAFgDQAEgEAFABQAFAAAEAEQADAFgBAEQAAAGgFADQgDADgEAAIgCAAg");
	this.shape_79.setTransform(1645.5675,1133.8817,2.1398,2.1398,18.3782);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAEgEAFAAQAFABAEAFQAEADAAAFQgBAGgFADQgDAEgFAAIgBgBg");
	this.shape_80.setTransform(1610.1798,1113.8228,2.1398,2.1398,18.3782);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAFQAEADgBAFQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_81.setTransform(1597.6014,1106.5999,2.1398,2.1398,18.3782);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_82.setTransform(1583.9603,1100.1513,2.1398,2.1398,18.3782);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_83.setTransform(1559.8461,1114.5341,2.1398,2.1398,18.3782);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_84.setTransform(1575.8051,1121.4717,2.1398,2.1398,18.3782);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEABgFQAAgFAEgEQAEgDAFABQAFAAAEAEQAEAFAAAEQgBAFgFAFQgDADgFAAIgBAAg");
	this.shape_85.setTransform(1590.6709,1126.7326,2.1398,2.1398,18.3782);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEABgEQAAgFAEgEQAEgEAFABQAFABAEADQAEAFAAAEQgBAGgFADQgDAEgFAAIgBAAg");
	this.shape_86.setTransform(1582.051,1134.3536,2.1398,2.1398,18.3782);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAEgEAFAAQAFACAEAEQAEAEAAAFQgBAFgFADQgDAEgFAAIAAgBg");
	this.shape_87.setTransform(1575.0947,1147.826,2.1398,2.1398,18.3782);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgEQABgGAEgDQAFgEAEABQAGABADADQAEAFgBAEQAAAGgFADQgDAEgFAAIAAAAg");
	this.shape_88.setTransform(1591.0186,1155.5968,2.1398,2.1398,18.3782);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAEgDAFABQAFAAAEAEQAEAFAAAEQgBAFgFAFQgDADgFAAIAAAAg");
	this.shape_89.setTransform(1605.8324,1165.2535,2.1398,2.1398,18.3782);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_90.setTransform(1620.7732,1175.9833,2.1398,2.1398,18.3782);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFAAAEQgBAGgFADQgDADgEAAIgCAAg");
	this.shape_91.setTransform(1639.3986,1190.7951,2.1398,2.1398,18.3782);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgFQAAgFAEgEQAFgDAEAAQAGABADAFQAEAEgBAEQAAAFgEAFQgEADgFAAIAAgBg");
	this.shape_92.setTransform(1653.3027,1204.8128,2.1398,2.1398,18.3782);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_93.setTransform(1663.7677,1215.7313,2.1398,2.1398,18.3782);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgFADQgDAEgFAAIAAgBg");
	this.shape_94.setTransform(1674.3742,1228.7245,2.1398,2.1398,18.3782);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgEQABgGAFgEQADgDAFABQAGAAAEAEQADAEgBAFQAAAFgEAEQgEAEgFAAIAAAAg");
	this.shape_95.setTransform(1683.8952,1243.4999,2.1398,2.1398,18.3782);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQADgEAFAAQAGABAEAEQADAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_96.setTransform(1700.1658,1240.3373,2.1398,2.1398,18.3782);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_97.setTransform(1691.4318,1225.7825,2.1398,2.1398,18.3782);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQAEgEAEABQAGAAADAEQAEAFgBAEQAAAGgFADQgDADgEAAIgBAAg");
	this.shape_98.setTransform(1682.9315,1213.8265,2.1398,2.1398,18.3782);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAEgDQAFgEAEABQAGAAADAEQAEAEgBAFQAAAFgEAEQgEAEgFAAIAAAAg");
	this.shape_99.setTransform(1682.2462,1203.3803,2.1398,2.1398,18.3782);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgDABgFQAAgFAEgEQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAAAg");
	this.shape_100.setTransform(1693.8407,1211.0663,2.1398,2.1398,18.3782);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgDABgFQABgFADgEQAFgEAEABQAGAAADAEQAEAFAAAEQgBAGgFADQgDAEgFAAIgBAAg");
	this.shape_101.setTransform(1701.8061,1222.8446,2.1398,2.1398,18.3782);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_102.setTransform(1710.4053,1236.2019,2.1398,2.1398,18.3782);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_103.setTransform(1717.2034,1250.692,2.1398,2.1398,18.3782);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQAEgEAEABQAGAAADAEQAEAFgBAEQAAAGgFADQgDADgEAAIgBAAg");
	this.shape_104.setTransform(1723.9198,1264.5356,2.1398,2.1398,18.3782);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQADgEAFABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_105.setTransform(1730.1917,1278.2315,2.1398,2.1398,18.3782);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_106.setTransform(1744.6354,1278.0696,2.1398,2.1398,18.3782);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_107.setTransform(1740.562,1264.5404,2.1398,2.1398,18.3782);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEABgFQAAgFAEgEQAEgDAFABQAFAAAEAEQAEAFAAAEQgBAFgFAFQgDADgFAAIgBAAg");
	this.shape_108.setTransform(1736.7533,1254.4095,2.1398,2.1398,18.3782);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_109.setTransform(1735.0472,1242.7941,2.1398,2.1398,18.3782);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_110.setTransform(1741.5962,1244.6325,2.1398,2.1398,18.3782);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_111.setTransform(1746.4388,1254.317,2.1398,2.1398,18.3782);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_112.setTransform(1751.1885,1267.5072,2.1398,2.1398,18.3782);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgDABgFQAAgFAEgEQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAAAg");
	this.shape_113.setTransform(1756.1315,1283.5091,2.1398,2.1398,18.3782);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQAEgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_114.setTransform(1760.0187,1298.4004,2.1398,2.1398,18.3782);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAFgEAEAAQAFABAFAEQADAFAAAEQgBAGgFADQgDAEgEAAIgCgBg");
	this.shape_115.setTransform(1762.553,1312.4901,2.1398,2.1398,18.3782);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAEgEAFAAQAFABAEAEQAEAFAAAEQgBAGgFAEQgDADgFAAIgBgBg");
	this.shape_116.setTransform(1758.2417,1327.1632,2.1398,2.1398,18.3782);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#474747").s().p("AgBANQgFAAgEgFQgDgEAAgEQABgGAFgDQAEgEAEAAQAFABAFAEQADAFgBAEQAAAGgEADQgEAEgFAAIgBgBg");
	this.shape_117.setTransform(1753.4975,1319.7254,2.1398,2.1398,18.3782);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#474747").s().p("AgBAOQgFgBgDgFQgEgEABgFQAAgFAEgEQAEgDAFABQAFAAAEAEQAEAEAAAFQgBAFgFAEQgDAEgFAAIgBAAg");
	this.shape_118.setTransform(1737.5678,1325.2552,2.1398,2.1398,18.3782);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_119.setTransform(1737.2396,1338.6757,2.1398,2.1398,18.3782);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgFQABgFAEgEQAFgDAEAAQAGABADAFQAEAEgBAFQAAAEgFAFQgDADgFAAIAAgBg");
	this.shape_120.setTransform(1728.9921,1342.5865,2.1398,2.1398,18.3782);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQABgGADgDQAFgEAEAAQAGABADAEQAEAFAAAEQgBAGgFAEQgDADgFAAIAAgBg");
	this.shape_121.setTransform(1724.2433,1331.0877,2.1398,2.1398,18.3782);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEAAgEQABgGAFgDQADgEAFAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_122.setTransform(1723.7544,1315.9317,2.1398,2.1398,18.3782);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAFgEQAEgDAEABQAGAAADAEQAEAFgBAEQAAAFgFAFQgDADgFAAIAAAAg");
	this.shape_123.setTransform(1720.9662,1300.912,2.1398,2.1398,18.3782);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgFAEQgDADgFAAIAAgBg");
	this.shape_124.setTransform(1719.1282,1289.8166,2.1398,2.1398,18.3782);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQABgGADgDQAFgEAEABQAGAAADAEQAEAFAAAEQgBAGgFADQgDADgEAAIgBAAg");
	this.shape_125.setTransform(1715.0664,1276.2503,2.1398,2.1398,18.3782);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAEgBAFQAAAFgEAEQgEAEgFAAIAAAAg");
	this.shape_126.setTransform(1703.2843,1283.4253,2.1398,2.1398,18.3782);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_127.setTransform(1705.0516,1296.4302,2.1398,2.1398,18.3782);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_128.setTransform(1707.6055,1311.9904,2.1398,2.1398,18.3782);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgFADQgDAEgFAAIAAgBg");
	this.shape_129.setTransform(1709.2873,1328.5991,2.1398,2.1398,18.3782);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_130.setTransform(1708.7211,1345.2811,2.1398,2.1398,18.3782);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_131.setTransform(1706.4896,1359.463,2.1398,2.1398,18.3782);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEABgFQAAgFAEgEQAFgDAEAAQAGABADAEQAEAEgBAFQAAAFgEAFQgEADgFAAIAAgBg");
	this.shape_132.setTransform(1703.3764,1376.4663,2.1398,2.1398,18.3782);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAFQAAAEgFAFQgDADgFAAIAAAAg");
	this.shape_133.setTransform(1716.0725,1381.4735,2.1398,2.1398,18.3782);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgFADQgDAEgFAAIAAgBg");
	this.shape_134.setTransform(1720.4698,1366.588,2.1398,2.1398,18.3782);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFAAgEQABgGAFgDQAEgEAEABQAFAAAFAEQADAFgBAEQAAAGgEADQgEADgEAAIgCAAg");
	this.shape_135.setTransform(1728.6129,1357.9778,2.1398,2.1398,18.3782);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFAAgEQABgGAFgDQAEgEAEAAQAFABAFAEQADAFgBAEQAAAGgEADQgEAEgEAAIgCgBg");
	this.shape_136.setTransform(1736.5163,1361.6754,2.1398,2.1398,18.3782);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_137.setTransform(1734.6801,1372.1694,2.1398,2.1398,18.3782);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAFQAEADgBAFQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_138.setTransform(1731.1821,1387.6209,2.1398,2.1398,18.3782);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_139.setTransform(1744.1904,1392.7481,2.1398,2.1398,18.3782);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAEgBAFQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_140.setTransform(1747.5669,1380.8885,2.1398,2.1398,18.3782);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#474747").s().p("AgBANQgFAAgEgFQgDgEABgEQAAgGAEgDQAFgEAEAAQAFABAFAEQADAFAAAEQgBAGgFADQgDAEgFAAIgBgBg");
	this.shape_141.setTransform(1751.309,1364.6579,2.1398,2.1398,18.3782);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgFADQgDADgEAAIgBAAg");
	this.shape_142.setTransform(1751.0028,1349.6329,2.1398,2.1398,18.3782);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_143.setTransform(1758.5417,1341.9191,2.1398,2.1398,18.3782);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFAAgEQABgGAFgDQAEgEAEAAQAFABAFAEQADAFgBAEQAAAGgEADQgEAEgFAAIgBgBg");
	this.shape_144.setTransform(1764.7265,1350.0618,2.1398,2.1398,18.3782);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEAAgEQACgGAEgDQAEgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_145.setTransform(1778.6002,1352.4171,2.1398,2.1398,18.3782);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_146.setTransform(1779.5578,1335.3317,2.1398,2.1398,18.3782);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#474747").s().p("AgBANQgFAAgEgFQgDgEABgEQAAgGAEgDQAFgEAEAAQAFABAFAEQADAFAAAEQgBAGgFADQgDAEgFAAIgBgBg");
	this.shape_147.setTransform(1778.6686,1318.9561,2.1398,2.1398,18.3782);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_148.setTransform(1776.4782,1301.3329,2.1398,2.1398,18.3782);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_149.setTransform(1772.8803,1284.6759,2.1398,2.1398,18.3782);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgFADQgDAEgFAAIAAgBg");
	this.shape_150.setTransform(1768.6056,1269.1633,2.1398,2.1398,18.3782);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAFgEAEAAQAFABAFAEQADAFAAAEQgBAGgFADQgDAEgEAAIgCgBg");
	this.shape_151.setTransform(1763.5781,1254.4314,2.1398,2.1398,18.3782);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQABgGADgDQAFgEAEAAQAGABADAEQAEAFAAAEQgBAGgFADQgDAEgFAAIAAgBg");
	this.shape_152.setTransform(1757.2091,1241.0251,2.1398,2.1398,18.3782);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGACADAEQAEAEgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_153.setTransform(1749.9184,1227.2162,2.1398,2.1398,18.3782);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_154.setTransform(1742.8988,1214.9221,2.1398,2.1398,18.3782);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQABgGADgDQAFgEAEABQAGAAADAEQAEAFAAAEQgBAGgFADQgDADgEAAIgCAAg");
	this.shape_155.setTransform(1735.6663,1203.3873,2.1398,2.1398,18.3782);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#474747").s().p("AgBANQgFAAgEgFQgDgEABgEQAAgGAEgDQAFgEAEAAQAFABAFAEQADAFAAAEQgBAGgFADQgDAEgEAAIgCgBg");
	this.shape_156.setTransform(1726.9751,1190.5231,2.1398,2.1398,18.3782);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAEgDQAFgEAEABQAGAAADAEQAEAEgBAFQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_157.setTransform(1714.7216,1198.9499,2.1398,2.1398,18.3782);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEABgFQAAgFAEgEQAFgDAEABQAFAAAFAEQADAEAAAFQgBAFgFAEQgDAEgFAAIgBAAg");
	this.shape_158.setTransform(1723.2447,1210.9135,2.1398,2.1398,18.3782);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_159.setTransform(1729.526,1218.5246,2.1398,2.1398,18.3782);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAFgEAEABQAFAAAFAEQADAFAAAEQgBAGgFADQgDADgEAAIgCAAg");
	this.shape_160.setTransform(1729.1626,1229.7497,2.1398,2.1398,18.3782);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGACADAEQAEAEgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_161.setTransform(1720.1753,1223.4225,2.1398,2.1398,18.3782);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAFAAAEQgBAFgFAFQgDADgFAAIAAAAg");
	this.shape_162.setTransform(1712.7554,1209.9089,2.1398,2.1398,18.3782);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_163.setTransform(1703.7024,1198.011,2.1398,2.1398,18.3782);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEAAgEQABgGAEgDQAEgEAFABQAFABAFADQADAFgBAEQAAAGgEADQgEAEgFAAIgBAAg");
	this.shape_164.setTransform(1694.1582,1186.8192,2.1398,2.1398,18.3782);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_165.setTransform(1684.2601,1175.768,2.1398,2.1398,18.3782);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_166.setTransform(1674.0045,1166.5947,2.1398,2.1398,18.3782);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_167.setTransform(1662.6359,1165.8617,2.1398,2.1398,18.3782);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_168.setTransform(1671.3775,1183.6639,2.1398,2.1398,18.3782);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_169.setTransform(1662.9162,1175.8767,2.1398,2.1398,18.3782);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgFQABgFADgEQAFgDAEAAQAGABADAFQAEAEAAAEQgBAFgFAFQgDADgFAAIgBgBg");
	this.shape_170.setTransform(1672.2065,1192.8294,2.1398,2.1398,18.3782);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFAAgEQABgGAEgDQAEgEAFAAQAFACAFAEQADAEgBAEQAAAGgEADQgEAEgFAAIgBgBg");
	this.shape_171.setTransform(1660.1912,1188.2739,2.1398,2.1398,18.3782);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_172.setTransform(1648.0094,1176.4639,2.1398,2.1398,18.3782);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAFQAEAEgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_173.setTransform(1633.7923,1164.2834,2.1398,2.1398,18.3782);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEAAgEQABgGAEgDQAEgEAFABQAFAAAFAEQADAEgBAFQAAAFgEAEQgEAEgFAAIgBAAg");
	this.shape_174.setTransform(1619.4571,1155.1239,2.1398,2.1398,18.3782);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_175.setTransform(1605.9414,1145.6321,2.1398,2.1398,18.3782);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_176.setTransform(1635.7205,1135.2325,2.1398,2.1398,18.3782);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_177.setTransform(1612.35,1121.7592,2.1398,2.1398,18.3782);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAFgEQAEgDAFABQAFAAAEAEQADAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_178.setTransform(1600.3024,1115.7273,2.1398,2.1398,18.3782);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAFgEQAEgDAFABQAFAAAEAEQADAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_179.setTransform(1588.1165,1109.6494,2.1398,2.1398,18.3782);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAEgEAFABQAFAAAEAEQAEAFAAAEQgBAGgFADQgDADgEAAIgBAAg");
	this.shape_180.setTransform(1575.3009,1104.4488,2.1398,2.1398,18.3782);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#474747").s().p("AgJAKQgDgFAAgFQAAgEADgEQAEgFAFAAQAFAAAEAFQAFAEAAAEQAAAFgFAFQgEADgFAAQgFAAgEgDg");
	this.shape_181.setTransform(1561.412,1099.4244,2.1398,2.1398,18.3782);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#2D2D2D").ss(1.5).p("AKvE2Qgxi8h7ijQh7ili2h6QgIgFgJAAQgKAAgIAGQgMAJAAAPQABAPANAIQBCAuAzArQAIAHABAMQAAALgIAIQgHAHgKABQgKAAgIgHQiLh7iyhQQgJgEgKABQgJACgHAHQgKAMADAOQADAPAOAGQAwAWAnAWIgdA0QizhmjUgmIALg2QBoATBZAdQADABAGAAQALAAAJgHQAJgIAAgMQABgKgGgJQgGgIgKgDQgngNg6gPIAJgqQCmAoCSBKQAHADAHAAQALAAAIgHQAJgIABgMQABgJgFgIQgEgIgJgEQkPiJlAgXQgPgBgKALQgJAMADAPQACAJAIAGQAIAGAKABQBfAGBnAVIgIAqQiWggieAAQgKAAgIAGQgIAFgDAJQgFAPAKAMQAIAMAPAAQBjAABgANIgLA2IgcgEQgPgCgKAMQgLAMAEAQQADAIAHAGQAHAGAJAAQC7AWCmBKQCmBJB9B1QAIAIAMAAQAQAAAJgPQAGgJgCgKQgCgLgIgHQhDg/hUg1IAfg2QDKB7B8CxQAIANAQAAQAPAAAJgMQAGgIgBgJQAAgKgFgIQgmg2g2g7QgHgIgBgKQAAgLAIgHQAIgJALAAQALAAAIAIQCKCOBICpQAGANgGANQgGAMgOAEQgLADgKgFQgLgGgEgKIgEgKQgEgJgJgGQgJgFgKACQgOACgHANQgHAMAGANQAVAzAPA3IhNANQgpiZhgiAQgFgIgKgEQgJgDgJADQgPAFgEAPQgFAOAJAMQBKBjAnBxQAmBxABB1QAAAKAFAIQAGAIAJADQAOAFANgJQAMgJAAgPQAAhFgNhFIBNgOQAPBLAABMQAAAKAFAIQAFAIAJADQAPAFANgJQAMgJAAgPQAAh9glh5IA9gQIALAlQACAKAIAGQAIAGAKAAIAIAAQALgEAHgKQAGgLgDgLg");
	this.shape_182.setTransform(1659.2166,1242.032,2.1398,2.1398,18.3782);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#A57656").s().p("AIrJBQgJgDgFgIQgFgIAAgKQAAhMgPhLIhNAOQANBFAABFQAAAPgMAJQgNAJgOgFQgJgDgGgIQgFgIAAgKQgBh1gmhxQgnhxhKhjQgJgMAFgOQAEgPAPgFQAJgDAJADQAKAEAFAIQBgCAApCZIBNgNQgPg3gVgzQgGgNAHgMQAHgNAOgCQAKgCAJAFQAJAGAEAJIAEAKQAEAKALAGQAKAFALgDQAOgEAGgMQAGgNgGgNQhIipiKiOQgIgIgLAAQgLAAgIAJQgIAHAAALQABAKAHAIQA2A7AmA2QAFAIAAAKQABAJgGAIQgJAMgPAAQgQAAgIgNQh8ixjKh7IgfA2QBUA1BDA/QAIAHACALQACAKgGAJQgJAPgQAAQgMAAgIgIQh9h1imhJQimhKi7gWQgJAAgHgGQgHgGgDgIQgEgQALgMQAKgMAPACIAcAEIALg2QhggNhjAAQgPAAgIgMQgKgMAFgPQADgJAIgFQAIgGAKAAQCeAACWAgIAIgqQhngVhfgGQgKgBgIgGQgIgGgCgJQgDgPAJgMQAKgLAPABQFAAXEPCJQAJAEAEAIQAFAIgBAJQgBAMgJAIQgIAHgLAAQgHAAgHgDQiShKimgoIgJAqQA6APAnANQAKADAGAIQAGAJgBAKQAAAMgJAIQgJAHgLAAIgJgBQhZgdhogTIgLA2QDUAmCzBmIAdg0QgngWgwgWQgOgGgDgPQgDgOAKgMQAHgHAJgCQAKgBAJAEQCyBQCLB7QAIAHAKAAQAKgBAHgHQAIgIAAgLQgBgMgIgHQgzgrhCguQgNgIgBgPQAAgPAMgJQAIgGAKAAQAJAAAIAFQC2B6B7ClQB7CjAxC8QADALgGALQgHAKgLAEIgIAAQgKAAgIgGQgIgGgCgKIgLglIg9AQQAlB5AAB9QAAAPgMAJQgIAFgJAAQgGAAgFgBg");
	this.shape_183.setTransform(1659.2166,1242.032,2.1398,2.1398,18.3782);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#8E795A").ss(1.3).p("AHZn5QgIAAgFgEQhlg9h1ggQh1ggh9AAIgBAAQgKAAgHgHQgIgIAAgKQAAgLAIgHQAHgHAKAAIABAAQCEAAB8AiQB8AhBqBBQAJAGACALQADAKgGAIQgHAMgOAAgAoZnMQgMAAgHgKQgHgJACgKQABgLAIgFQBkhMB4gtQB5gtCFgKQALgBAIAHQAIAGAAALQABAKgGAIQgHAIgLABQh+AKhyAqQhyAqhdBHQgHAGgJAAgAMWgzQgJAAgHgGQgHgGgBgKQgQhxhAhmQhAhmhnhOQgIgGgBgLQgCgKAGgIQAHgJAKgBQAKgCAJAHQBvBTBEBvQBFBvARB7QACALgGAJQgHAHgKACgAJSHQQgLAAgIgIQgHgHABgKQAAgLAIgHQBehXAyhtQAyhtAAh0IAAgCQAAgKAHgHQAHgIALAAQAKAAAIAIQAHAHAAAKIAAACQAAB/g2B2Qg3B3hlBeQgHAGgKAAgAs0ABQAAh+A2h3QA2h2BlheQAIgHAKAAQALAAAHAIQAHAIAAAKQgBAKgIAHQhdBYgyBsQgyBtAABzQAAAKgHAIQgIAHgKAAQgKAAgHgGQgIgIAAgKgAoXICQgHAAgIgFQhvhVhEhuQhEhvgSh8QgBgKAGgJQAHgIAKgBQAKgCAIAHQAJAGABALQAQBxA/BnQA/BlBoBPQAIAFABALQACAKgHAJQgHAKgNAAgAABKtIgBAAQiEAAh8giQh8gihqhCQgJgFgCgKQgCgKAFgJQAFgIAKgDQAKgCAJAFQBlA+B1AgQB1AgB9AAIABAAQALAAAHAIQAHAGAAALQAAAKgHAIQgIAHgKAAgABLKqQgKAAgHgHQgHgGgBgKQAAgKAGgIQAHgIAKgBQB+gJBygrQBygpBehHQAIgHALACQAKABAGAJQAHAIgCAKQgBAKgIAHQhkBLh5AtQh5AsiFAKg");
	this.shape_184.setTransform(1493.8552,1312.8471,2.1269,2.1269);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFA64D").s().p("AAAKtQiEAAh8giQh8gihqhCQgJgEgCgLQgCgKAFgJQAFgJAKgCQAKgCAJAFQBlA+B1AgQB1AgB9AAIABAAQALAAAHAHQAHAIAAAKQAAAKgHAIQgIAHgKAAgABLKqQgKAAgHgHQgHgHgBgJQAAgKAGgIQAHgIAKgBQB+gKBygpQBygrBehHQAIgGALABQAKACAGAJQAHAIgCAKQgBAKgIAGQhkBMh5AtQh5AsiFAKgAomH9QhvhVhEhuQhEhvgSh8QgBgKAGgIQAHgJAKgBQAKgCAIAHQAJAGABAKQAQByA/BmQA/BnBoBNQAIAHABAKQACAKgHAJQgHAKgNgBQgHAAgIgEgAI/HJQgHgIABgKQAAgLAIgHQBehXAyhtQAyhtAAh0IAAgBQAAgKAHgIQAHgHALgBQAKABAIAHQAHAIAAAKIAAABQAAB/g2B2Qg3B2hlBfQgHAHgKAAQgLgBgIgHgAssASQgIgGAAgLIAAAAQAAh/A2h1QA2h3BlheQAIgHAKABQALAAAHAHQAHAIAAAKQgBALgIAGQhdBYgyBsQgyBtAABzQAAAKgHAIQgIAHgKABQgKAAgHgIgAMWgzQgJAAgHgGQgHgGgBgJQgQhyhAhmQhAhmhnhOQgIgGgBgLQgCgKAGgIQAHgIAKgCQAKgBAJAGQBvBTBEBvQBFBvARB7QACALgGAIQgHAJgKABgAosnWQgHgJACgKQABgLAIgFQBkhMB4gtQB5gsCFgLQALAAAIAGQAIAHAAAKQABAKgGAJQgHAHgLABQh+AKhyAqQhyAqhdBHQgHAFgJABQgMgBgHgJgAHMn9Qhlg9h1ggQh1ggh9AAIgBAAQgKAAgHgHQgIgHAAgLQAAgLAIgGQAHgIAKAAIABAAQCEAAB8AiQB8AiBqBBQAJAFACAKQADAKgGAJQgHAMgOAAQgIAAgFgEg");
	this.shape_185.setTransform(1493.8552,1312.8471,2.1269,2.1269);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#773A18").ss(0.9).p("AL/AAQAACBg8B1Qg6ByhqBXQjhC5k+AAQk9AAjgi5QhrhXg6hyQg8h1AAiBQAAiAA8h1QA6hxBrhYQDgi5E9AAQE+AADhC5QBqBYA6BxQA8B1AACAg");
	this.shape_186.setTransform(1498.8557,1319.6468,2.1501,2.1501);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFE3CC").s().p("AodG/QhrhXg6hyQg8h2AAiAQAAiAA8h1QA6hyBrhXQDgi5E9AAQE+AADhC5QBqBXA6ByQA8B1AACAQAACAg8B2Qg6ByhqBXQjhC5k+AAQk9AAjgi5g");
	this.shape_187.setTransform(1498.8557,1319.6468,2.1501,2.1501);

	this.instance_9 = new lib.Group_40_0();
	this.instance_9.setTransform(1496.95,1322.9,2.1501,2.1501,0,0,0,81.6,69.2);
	this.instance_9.alpha = 0.3789;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(468));

	// Vrstva_5
	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FF0000").s().p("Ah1BXQgOgTAFgdQAEgcAVgdQASAXAcAEQAdAEAXgQQAXgRAEgdQAFgdgSgYQAjgLAcAEQAdAEAOATQAWAdgUAuQgTAtgxAkQgxAkgwAFIgPAAQgmAAgSgYg");
	this.shape_188.setTransform(1207.4989,1784.2183,4.9387,4.9387,-174.5084);

	this.timeline.addTween(cjs.Tween.get(this.shape_188).wait(468));

	// FeBezTextu_kopie
	this.instance_10 = new lib.FeBezTextu();
	this.instance_10.setTransform(1226.35,1816.25,2.7226,2.7161,0.0061,0,0,8.8,10.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(269).to({_off:false},0).wait(1).to({regX:10.5,scaleX:2.7227,scaleY:2.7162,rotation:0.007,x:1231,y:1820.75,alpha:0.0833},0).wait(1).to({y:1825.25,alpha:0.1667},0).wait(1).to({y:1829.8,alpha:0.25},0).wait(1).to({y:1834.3,alpha:0.3333},0).wait(1).to({y:1838.85,alpha:0.4167},0).wait(1).to({y:1843.35,alpha:0.5},0).wait(1).to({x:1231.05,y:1847.9,alpha:0.5833},0).wait(1).to({y:1852.4,alpha:0.6667},0).wait(1).to({y:1856.95,alpha:0.75},0).wait(1).to({y:1861.45,alpha:0.8333},0).wait(1).to({y:1866,alpha:0.9167},0).wait(1).to({y:1870.5,alpha:1},0).wait(1).to({x:1231.1,y:1875},0).wait(1).to({y:1879.55},0).wait(1).to({y:1884.05},0).wait(1).to({y:1888.6},0).wait(1).to({y:1893.1},0).wait(1).to({y:1897.65},0).wait(1).to({x:1231.15,y:1902.15},0).wait(1).to({y:1906.7},0).wait(1).to({y:1911.2},0).wait(1).to({y:1915.75},0).wait(1).to({y:1920.25},0).wait(1).to({y:1924.75},0).wait(1).to({x:1231.2,y:1929.3},0).wait(1).to({x:1214.35},0).wait(1).to({x:1197.45},0).wait(1).to({x:1180.6},0).wait(1).to({x:1163.75},0).wait(1).to({x:1146.9},0).wait(1).to({x:1130.05},0).wait(1).to({x:1113.2},0).wait(1).to({x:1096.35},0).wait(1).to({x:1079.5},0).wait(1).to({x:1062.65},0).wait(1).to({x:1045.75},0).wait(1).to({x:1028.9},0).wait(1).to({x:1012.05},0).wait(1).to({x:995.2},0).wait(1).to({x:978.35},0).wait(1).to({x:961.5},0).wait(1).to({x:944.65},0).wait(1).to({x:927.8},0).wait(1).to({x:910.95},0).wait(1).to({x:894.05},0).wait(1).to({x:877.2},0).wait(1).to({x:860.35},0).wait(1).to({x:843.5},0).wait(1).to({x:826.65},0).wait(1).to({x:809.8},0).wait(1).to({x:792.95},0).wait(1).to({x:776.1},0).wait(1).to({x:759.25},0).wait(1).to({x:742.35},0).wait(1).to({x:725.5},0).wait(1).to({x:708.65},0).wait(1).to({x:691.8},0).wait(1).to({x:674.95},0).wait(1).to({x:658.1},0).wait(1).to({x:641.25},0).wait(1).to({x:624.4},0).wait(1).to({x:607.55},0).wait(1).to({x:590.65},0).wait(1).to({x:573.8},0).wait(1).to({x:556.95},0).wait(1).to({x:540.1},0).wait(1).to({x:523.25},0).wait(1).to({x:506.4},0).wait(1).to({x:489.55},0).wait(1).to({x:472.7},0).wait(1).to({x:455.4,y:1927.5},0).wait(1).to({x:438.85,y:1924.85},0).wait(1).to({x:423.05,y:1921.3},0).wait(1).to({x:408.1,y:1916.9},0).wait(1).to({x:394.05,y:1911.6},0).wait(1).to({x:380.95,y:1905.4},0).wait(1).to({x:368.8,y:1898.3},0).wait(1).to({x:357.65,y:1890.3},0).wait(1).to({x:347.5,y:1881.4},0).wait(1).to({x:338.45,y:1871.65},0).wait(1).to({x:330.45,y:1861.1},0).wait(1).to({x:323.5,y:1849.8},0).wait(1).to({x:317.55,y:1837.7},0).wait(1).to({x:312.65,y:1824.95},0).wait(1).to({x:308.75,y:1811.55},0).wait(1).to({y:1792.15},0).wait(1).to({y:1772.7},0).wait(1).to({y:1753.3},0).wait(1).to({y:1733.9},0).wait(1).to({x:308.8,y:1714.45},0).wait(1).to({y:1695.05},0).wait(1).to({y:1675.65},0).wait(1).to({y:1656.25},0).wait(1).to({y:1636.8},0).wait(1).to({x:308.85,y:1617.4},0).wait(1).to({y:1598},0).wait(1).to({y:1578.55},0).wait(1).to({y:1559.15},0).wait(1).to({x:308.9,y:1539.75},0).wait(1).to({y:1520.3},0).wait(1).to({y:1500.9},0).wait(1).to({y:1481.5},0).wait(1).to({y:1462.1},0).wait(1).to({x:308.95,y:1442.65},0).wait(1).to({y:1423.25},0).wait(1).to({y:1403.85},0).wait(1).to({y:1384.4},0).wait(1).to({y:1365},0).wait(1).to({x:309,y:1345.6},0).wait(1).to({y:1326.15},0).wait(1).to({y:1306.75},0).wait(1).to({y:1287.35},0).wait(1).to({y:1267.95},0).wait(1).to({x:309.05,y:1248.5},0).wait(1).to({y:1229.1},0).wait(1).to({y:1209.7},0).wait(1).to({y:1190.25},0).wait(1).to({y:1170.85},0).wait(1).to({x:309.1,y:1151.45},0).wait(1).to({y:1132},0).wait(1).to({y:1112.6},0).wait(1).to({y:1093.2},0).wait(1).to({y:1073.8},0).wait(1).to({x:309.15,y:1054.35},0).wait(1).to({y:1034.95},0).wait(1).to({y:1015.55},0).wait(1).to({y:996.1},0).wait(1).to({y:976.7},0).wait(1).to({x:309.2,y:957.3},0).wait(1).to({y:937.85},0).wait(1).to({y:918.45},0).wait(1).to({y:899.05},0).wait(1).to({x:309.25,y:879.65},0).wait(1).to({y:860.2},0).wait(1).to({y:840.8},0).wait(1).to({y:821.4},0).wait(1).to({y:801.95},0).wait(1).to({x:309.3,y:782.55},0).wait(1).to({y:763.15},0).wait(1).to({y:743.7},0).wait(1).to({y:724.3},0).wait(1).to({y:704.9},0).wait(1).to({x:303.1,y:684.55},0).wait(1).to({x:296.95,y:664.2},0).wait(1).to({x:290.75,y:643.85},0).wait(1).to({x:284.55,y:623.5},0).wait(1).to({x:278.35,y:603.2},0).wait(1).to({x:272.15,y:582.85},0).wait(1).to({x:265.95,y:562.5},0).wait(1).to({x:259.75,y:542.15},0).wait(1).to({x:253.55,y:521.8},0).wait(1).to({x:247.35,y:501.45},0).wait(1).to({x:241.15,y:481.1},0).wait(1).to({x:234.95,y:460.75},0).wait(1).to({x:228.8,y:440.45},0).wait(1).to({x:222.6,y:420.1},0).wait(1).to({x:216.4,y:399.75},0).wait(42));

	// FeBezTextu
	this.instance_11 = new lib.FeBezTextu();
	this.instance_11.setTransform(1226.2,1816.25,2.7226,2.7161,0.0061,0,0,9.3,10.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(130).to({_off:false},0).wait(1).to({regX:10.5,scaleX:2.7227,scaleY:2.7162,rotation:0.007,x:1229.5,y:1820.75,alpha:0.0833},0).wait(1).to({y:1825.25,alpha:0.1667},0).wait(1).to({y:1829.8,alpha:0.25},0).wait(1).to({y:1834.3,alpha:0.3333},0).wait(1).to({y:1838.85,alpha:0.4167},0).wait(1).to({y:1843.35,alpha:0.5},0).wait(1).to({x:1229.55,y:1847.9,alpha:0.5833},0).wait(1).to({y:1852.4,alpha:0.6667},0).wait(1).to({y:1856.95,alpha:0.75},0).wait(1).to({y:1861.45,alpha:0.8333},0).wait(1).to({y:1866,alpha:0.9167},0).wait(1).to({y:1870.5,alpha:1},0).wait(1).to({x:1229.6,y:1875},0).wait(1).to({y:1879.55},0).wait(1).to({y:1884.05},0).wait(1).to({y:1888.6},0).wait(1).to({y:1893.1},0).wait(1).to({y:1897.65},0).wait(1).to({x:1229.65,y:1902.15},0).wait(1).to({y:1906.7},0).wait(1).to({y:1911.2},0).wait(1).to({y:1915.75},0).wait(1).to({y:1920.25},0).wait(1).to({y:1924.75},0).wait(1).to({x:1229.7,y:1929.3},0).wait(1).to({x:1212.85},0).wait(1).to({x:1195.95},0).wait(1).to({x:1179.1},0).wait(1).to({x:1162.25},0).wait(1).to({x:1145.4},0).wait(1).to({x:1128.55},0).wait(1).to({x:1111.7},0).wait(1).to({x:1094.85},0).wait(1).to({x:1078},0).wait(1).to({x:1061.15},0).wait(1).to({x:1044.25},0).wait(1).to({x:1027.4},0).wait(1).to({x:1010.55},0).wait(1).to({x:993.7},0).wait(1).to({x:976.85},0).wait(1).to({x:960},0).wait(1).to({x:943.15},0).wait(1).to({x:926.3},0).wait(1).to({x:909.45},0).wait(1).to({x:892.55},0).wait(1).to({x:875.7},0).wait(1).to({x:858.85},0).wait(1).to({x:842},0).wait(1).to({x:825.15},0).wait(1).to({x:808.3},0).wait(1).to({x:791.45},0).wait(1).to({x:774.6},0).wait(1).to({x:757.75},0).wait(1).to({x:740.85},0).wait(1).to({x:724},0).wait(1).to({x:707.15},0).wait(1).to({x:690.3},0).wait(1).to({x:673.45},0).wait(1).to({x:656.6},0).wait(1).to({x:639.75},0).wait(1).to({x:622.9},0).wait(1).to({x:606.05},0).wait(1).to({x:589.15},0).wait(1).to({x:572.3},0).wait(1).to({x:555.45},0).wait(1).to({x:538.6},0).wait(1).to({x:521.75},0).wait(1).to({x:504.9},0).wait(1).to({x:488.05},0).wait(1).to({x:471.2},0).wait(1).to({x:453.9,y:1927.5},0).wait(1).to({x:437.35,y:1924.8},0).wait(1).to({x:421.55,y:1921.3},0).wait(1).to({x:406.6,y:1916.9},0).wait(1).to({x:392.55,y:1911.6},0).wait(1).to({x:379.4,y:1905.4},0).wait(1).to({x:367.25,y:1898.3},0).wait(1).to({x:356.15,y:1890.3},0).wait(1).to({x:346,y:1881.4},0).wait(1).to({x:336.95,y:1871.65},0).wait(1).to({x:328.95,y:1861.1},0).wait(1).to({x:322,y:1849.8},0).wait(1).to({x:316.05,y:1837.7},0).wait(1).to({x:311.15,y:1824.95},0).wait(1).to({x:307.25,y:1811.55},0).wait(1).to({x:307.2,y:1791.95},0).wait(1).to({y:1772.35},0).wait(1).to({y:1752.7},0).wait(1).to({x:307.15,y:1733.1},0).wait(1).to({y:1713.5},0).wait(1).to({y:1693.9},0).wait(1).to({x:307.1,y:1674.3},0).wait(1).to({y:1654.7},0).wait(1).to({y:1635.05},0).wait(1).to({x:307.05,y:1615.45},0).wait(1).to({y:1595.85},0).wait(1).to({y:1576.25},0).wait(1).to({x:307,y:1556.65},0).wait(1).to({y:1537.05},0).wait(1).to({y:1517.4},0).wait(1).to({y:1497.8},0).wait(1).to({x:306.95,y:1478.2},0).wait(1).to({y:1458.6},0).wait(1).to({y:1439},0).wait(1).to({x:306.9,y:1419.4},0).wait(1).to({y:1399.75},0).wait(1).to({y:1380.15},0).wait(1).to({x:306.85,y:1360.55},0).wait(1).to({y:1340.95},0).wait(1).to({y:1321.35},0).wait(1).to({x:306.8,y:1301.75},0).wait(1).to({y:1282.1},0).wait(1).to({y:1262.5},0).wait(1).to({x:306.75,y:1242.9},0).wait(1).to({y:1223.3},0).wait(1).to({y:1203.7},0).wait(1).to({x:306.7,y:1184.1},0).wait(1).to({y:1164.45},0).wait(1).to({y:1144.85},0).wait(1).to({x:306.65,y:1125.25},0).wait(1).to({y:1105.65},0).wait(1).to({y:1086.05},0).wait(1).to({x:306.6,y:1066.45},0).wait(1).to({y:1046.8},0).wait(1).to({y:1027.2},0).wait(1).to({y:1007.6},0).wait(1).to({x:306.55,y:988},0).wait(1).to({y:968.4},0).wait(1).to({y:948.8},0).wait(1).to({x:306.5,y:929.15},0).wait(1).to({y:909.55},0).wait(1).to({y:889.95},0).wait(1).to({x:306.45,y:870.35},0).wait(1).to({y:850.75},0).wait(1).to({y:831.15},0).wait(1).to({x:306.4,y:811.5},0).wait(1).to({y:791.9},0).wait(1).to({y:772.3},0).wait(1).to({x:306.35,y:752.7},0).wait(1).to({y:733.1},0).wait(1).to({y:713.5},0).wait(1).to({x:306.3,y:693.85},0).wait(1).to({y:674.25},0).wait(1).to({y:654.65},0).wait(1).to({x:306.25,y:635.05},0).wait(1).to({y:615.45},0).wait(1).to({y:595.85},0).wait(1).to({y:576.2},0).wait(1).to({x:306.2,y:556.6},0).wait(1).to({y:537},0).wait(1).to({y:517.4},0).wait(1).to({x:306.15,y:497.8},0).wait(1).to({y:478.2},0).wait(1).to({y:458.55},0).wait(1).to({x:306.1,y:438.95},0).wait(1).to({y:419.35},0).wait(1).to({y:399.75},0).wait(181));

	// kanalFialovyStranaVpravo
	this.instance_12 = new lib.kanalFialovyStranaVpravo();
	this.instance_12.setTransform(1354.5,1699.85,1.8075,1.4963,0.3518,0,0,12.5,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(68).to({scaleX:0.7936,x:1341.8,y:1699.75},5).wait(27).to({scaleX:1.8075,x:1354.5,y:1699.85},5).wait(104).to({scaleX:0.7936,x:1341.8,y:1699.75},5).wait(27).to({scaleX:1.8075,x:1354.5,y:1699.85},5).wait(222));

	// kanalFialovyStranaVlevo
	this.instance_13 = new lib.kanalFialovyStranaVlevo();
	this.instance_13.setTransform(1401.15,1703.2,1.7428,1.4963,0.3518,0,0,13.8,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(68).to({regX:13.9,scaleX:0.7724,x:1413},5).wait(27).to({regX:13.8,scaleX:1.7428,x:1401.15},5).wait(104).to({regX:13.9,scaleX:0.7724,x:1413},5).wait(27).to({regX:13.8,scaleX:1.7428,x:1401.15},5).wait(222));

	// Vrstva_34
	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#A62020").ss(1.5).p("AAOgpIgbBT");
	this.shape_189.setTransform(1408.074,1676.1523,1.4976,1.4963,0.3518);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#4B0069").s().p("AhmFhQhVgOgdhyQgPg4AAhNIAEiFQABgLgFheQgDhCALgnQAWhVBzgTQA/gLB9AMQBlAJAXA2QAOAfgQAyIgbBVQgGAlANA/QAQBJAAAbQAAAcgQBGQgOA+AFAkQADAYgCAHQgCAOgQAJQgfASg2AJQgzAJgwAAQgxAAgvgIg");
	this.shape_190.setTransform(1376.3858,1701.1424,1.4976,1.4963,0.3518);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_190},{t:this.shape_189}]}).wait(468));

	// Vrstva_38
	this.instance_14 = new lib.Transferin();
	this.instance_14.setTransform(258.65,360.25,1.3842,1.3842,180,0,0,200.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(468));

	// Pozadi
	this.instance_15 = new lib.ClipGroup();
	this.instance_15.setTransform(1094.6,1095.9,1.1423,1.1423,0,0,0,962.1,959.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(468));

	// Vrstva_24
	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxdYUQhPkEDZjrQBPhVB/hbQAtghChhpQC6h5CwkKQA9hdBNiIQAqhLBNiKQBfimBbkmQBrlXA9iGQBqjoDAiAQCahmEZhK");
	this.shape_191.setTransform(926.6806,537.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_191).wait(468));

	// Vrstva_20
	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#FFE0C6").ss(10,1,1).p("AAEAVQgEgYgEgR");
	this.shape_192.setTransform(815.2,695.8375);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#FFE0C6").ss(10).p("EgyAg4qQBFCmAkClQByH9iqIHQiqIHmKFXQhwBhjjChQj3CwhhBRQl9E6gwFTQgZC0BHEjQBXFoAIBxQAbGUkcFRQkbFQmSAsQjHAVkhg4QlDhIijgZQkTgojhA2QkKBCiEC6QjIEcC0GGQCdFSFWD8QBlBKDUCVQC7CGB0BnQFDEiA2E+QAcCmgtEpQgzFGAKCKQAUEnDLDxQDLDwEgBHQDlA4Edg2QCxghFThzQFdh1CngiQEgg6DlAwQGRBTGFHNQBEBQD8FHQDDD/CICJQEKEOFqCjQFeCcGHAkQGHAkF0hbQGBhdE4jZQBwhPCSh9QCmiRBUhHQEzkHDohnQHrjZLtCmQDJAsG6CBQGiB7DeAtQGFBQFegVQGKgXE+iUQFbihDgkxQDrlAAHloQACiAgei0QgnjMgShmQhBl2BUjcQBBinDAjAQA1g2BuhpQBiheA6hFQEFk6AjmvQAjmvjRleQgzhVhgiAQiCitgZgkQivj6gNjPQgLieBWjvQBxk+AQhLQAojIhDjcQg+jKiHirQhih9jlh6Qj4iEhYhcQikiqAHjfQAFioBuj7QCYlUA0ieQBgkggCjwQgCjKhHjFQhpkijrjwQhChDiChzQh9hug0g2Qjxj6gxmGQgQh9gFjhQgFkEgJhpQgclcjVkHQjakQlMhRQmPhajBgzQlHhXj2hyQithRinjeQhah9gug/QhRhthGhFQl2lrpIiFQpDiDoZCYQlqBmklEGQiNCIhJBDQiAB0htA7Qj9CKlLAk");
	this.shape_193.setTransform(1134.8317,1056.4977);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_193},{t:this.shape_192}]}).wait(468));

	// Layer_1
	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFC892").s().p("EgHzB4xQmHgkleicQlqijkKkOQiIiJjDj/Qj8lHhEhQQmFnNmRhTQjlgwkgA6QinAildB1QlTBzixAhQkdA2jlg4QkghHjLjwQjLjxgUknQgKiKAzlGQAtkpgcimQg2k+lDkiQh0hni7iGQjUiVhlhKQlWj8idlSQi0mGDIkcQCEi6EKhCQDhg2ETAoQCjAZFDBIQEhA4DHgVQGSgsEblQQEclRgbmUQgIhxhXloQhHkjAZi0QAwlTF9k6QBhhRD3iwQDjihBwhhQGKlXCqoHQCqoHhyn9QgkilhEimQAEieBFiaQBCiWB0h8IAZgaIAMgNIASgEQBEgSBEgpQB+hOCSi1QE9mFDYnIQCmlcA9lLQAKg/AKgfQAYguAagsQAnhDAhgrQAsg5AuglQBBgzBBgmQBAglBNgeIB2gwQBIgcBHgSIAJgFQFLgkD9iKQBtg7CAh0QBJhDCNiIQElkGFqhmQIZiYJDCDQJICFF2FrQBGBFBRBtICIC8QCnDeCtBRQD2ByFHBXQDBAzGPBaQFMBRDaEQQDVEHAcFcQAJBpAFEEQAFDhAQB9QAxGGDxD6QA0A2B9BuQCCBzBCBDQDrDwBpEiQBHDFACDKQACDwhgEgQg0CeiYFUQhuD7gFCoQgHDfCkCqQBYBcD4CEQDlB6BiB9QCHCrA+DKQBDDcgoDIQgQBLhxE+QhWDvALCeQANDPCvD6QAZAkCCCtQBgCAAzBVQDRFegjGvQgjGvkFE6Qg6BFhiBeQhuBpg1A2QjADAhBCnQhUDcBBF2QASBmAnDMQAeC0gCCAQgHFojrFAQjgExlbChQk+CUmKAXQleAVmFhQQjegtmih7Qm6iBjJgsQrtimnrDZQjoBnkzEHQhUBHimCRQiSB9hwBPQk4DZmBBdQkJBBkUAAQhuAAhwgKg");
	this.shape_194.setTransform(1134.8317,1056.4977);

	this.timeline.addTween(cjs.Tween.get(this.shape_194).wait(468));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,0,1908.2,1957.6);


// stage content:
(lib.Macrofag2Cast = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BunkaSlezinaCelek();
	this.instance.setTransform(792.9,474.65,0.5181,0.5181,0,0,0,1532.5,916.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(468));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(496.7,550.1,488.7,403.5);
// library properties:
lib.properties = {
	id: '0FC2013FC0296440A7A8E81977B56B6B',
	width: 1000,
	height: 1100,
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
an.compositions['0FC2013FC0296440A7A8E81977B56B6B'] = {
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