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


(lib.Sterd = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#A62020").ss(1.5).p("AAOgpIgbBT");
	this.shape.setTransform(30.4294,13.2283,0.6863,0.6863);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B1C1C").s().p("AhmFhQhVgOgdhyQgPg4AAhNIAEiFQABgLgFheQgDhCALgnQAWhVBzgTQA/gLB9AMQBlAJAXA2QAOAfgQAyIgbBVQgGAlANA/QAQBJAAAbQAAAcgQBGQgOA+AFAkQADAYgCAHQgCAOgQAJQgfASg2AJQgzAJgwAAQgxAAgvgIg");
	this.shape_1.setTransform(15.9784,24.7792,0.6863,0.6863);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sterd, new cjs.Rectangle(0,0,32.4,49.6), null);


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


(lib.ModryStred = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#18297C").ss(1.5).p("AAOgpIgbBT");
	this.shape.setTransform(44.3,19.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002F83").s().p("AhmFhQhVgOgdhyQgPg4AAhNIAEiFQABgLgFheQgDhCALgnQAWhVBzgTQA/gLB9AMQBlAJAXA2QAOAfgQAyIgbBVQgGAlANA/QAQBJAAAbQAAAcgQBGQgOA+AFAkQADAYgCAHQgCAOgQAJQgfASg2AJQgzAJgwAAQgxAAgvgIg");
	this.shape_1.setTransform(23.2433,36.1058);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ModryStred, new cjs.Rectangle(0,0,46.7,72.2), null);


(lib.kanalModryStranaVpravo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#003C8B").ss(1.5).p("AhxjXQABAlAPBAQAQBIACAUQAMBmgiBjQgPArgCAQQgGAiANAXQARAeAvALQAnAIAmgHQAtgJAWgnQAWgmgKgvQgCgJgJgcQgHgYgBgOQgBgSAJgYQALgZAEgOQANgqgHgxQgFgegJgYQgEgKgIgPQgKgSgDgHQgKgXADg6QADg2gPgZQgTghg6AAQg7ABgUAiQgUAiACA4g");
	this.shape.setTransform(12.1425,34.0504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#488CF0").s().p("AgvFQQgvgLgRgeQgNgXAGgiQACgQAPgrQAihjgMhmQgCgTgQhJQgPhAgBglQgCg4AUgiQAUgiA7gBQA6AAATAhQAPAZgDA2QgDA6AKAXIANAZQAIAPAEAKQAJAYAFAeQAHAxgNAqQgEAOgLAZQgJAYABASQABAOAHAYQAJAcACAJQAKAvgWAmQgWAngtAJQgTAEgRAAQgVAAgUgFg");
	this.shape_1.setTransform(12.1425,34.0504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kanalModryStranaVpravo, new cjs.Rectangle(-1.1,-3.8,27.3,74), null);


(lib.kanalModryStranaVlevo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#003C8B").ss(1.5).p("AB6jWQgCAjgNA6QgPBFgDAYQgPBrAoB1QAKAfADALQAFAYgGATQgIAbgeAQQgWAMgjAEQg7AEgigZQgcgVgJgmQgJgkALgkQAHgUADgKQAGgRAAgNQgBgSgLgXQgPgagGgNQgXgwAOg1QAHgaAOgYQAEgGAKgPQAKgNAFgIQAMgZgDgtQgDg0AGgTQAJghAigNQAdgLAkAGQAcAGAPANQAaAVAEAuQADASgBATg");
	this.shape.setTransform(12.9292,34.0414);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#488CF0").s().p("Ag+E/QgcgVgJgmQgJgkALgkIAKgeQAGgRAAgNQgBgSgLgXQgPgagGgNQgXgwAOg1QAHgaAOgYIAOgVIAPgVQAMgZgDgtQgDg0AGgTQAJghAigNQAdgLAkAGQAcAGAPANQAaAVAEAuQADASgBATQgCAjgNA6QgPBFgDAYQgPBrAoB1QAKAfADALQAFAYgGATQgIAbgeAQQgWAMgjAEIgSAAQguAAgdgVg");
	this.shape_1.setTransform(12.9292,34.0414);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kanalModryStranaVlevo, new cjs.Rectangle(-1,-1,29.4,72), null);


(lib.kanalCervenyStranaVpravo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#990000").ss(1.5).p("AhxjXQABAlAPBAQAQBIACAUQAMBmgiBjQgPArgCAQQgGAiANAXQARAeAvALQAnAIAmgHQAtgJAWgnQAWgmgKgvQgCgJgJgcQgHgYgBgOQgBgSAJgYQALgZAEgOQANgqgHgxQgFgegJgYQgEgKgIgPQgKgSgDgHQgKgXADg6QADg2gPgZQgTghg6AAQg7ABgUAiQgUAiACA4g");
	this.shape.setTransform(12.1425,34.0504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgvFQQgvgLgRgeQgNgXAGgiQACgQAPgrQAihjgMhmQgCgUgQhIQgPhAgBglQgCg4AUgiQAUgiA7gBQA6AAATAhQAPAZgDA2QgDA6AKAXIANAZQAIAPAEAKQAJAYAFAeQAHAxgNAqQgEAOgLAZQgJAYABASQABAOAHAYQAJAcACAJQAKAvgWAmQgWAngtAJQgTAEgRAAQgVAAgUgFg");
	this.shape_1.setTransform(12.1425,34.0504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kanalCervenyStranaVpravo, new cjs.Rectangle(-1.1,-3.8,27.3,74), null);


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

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApFCcIAAk3ISLAAIAAE3g");
	mask.setTransform(58.175,15.55);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA1A1").s().p("AlYg0QCGhJCsgVQCYgTCkAXQCqAZCGA8QifgiiVgIQiigLiPAUQihAWiDA5QhIAfg/ApQg3AjhEA7QBZiBCUhOg");
	this.shape.setTransform(58.175,15.5578);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,116.4,31.1), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,11.1,7.2), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,15.4,13.6,18.4), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(35.8,15.4,13.600000000000001,18.4), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(15.5,0,18.4,13.6), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Aj2D2IAAnrIHtAAIAAHrg");
	mask_1.setTransform(24.675,24.55);

	// Vrstva_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1FAFFF").ss(2.1).p("Aghg6IgwAwIAABDICjAAIAAhDIgwgw");
	this.shape_1.setTransform(24.675,42.4482);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(15.5,35.5,18.4,13.600000000000001), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxcNyIAA7jMAi4AAAIAAbjg");
	mask.setTransform(111.65,88.2);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E6B15").s().p("AgIgRIAaAaIgjAKg");
	this.shape.setTransform(110.75,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4E6B15").ss(0.5).p("AAXgWIgtAt");
	this.shape_1.setTransform(113.175,3.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4E6B15").p("AAhAAIhBAA");
	this.shape_2.setTransform(103.225,7.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4E6B15").p("AAcAAIg3AA");
	this.shape_3.setTransform(103.7,5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4E6B15").p("AAAggIAABB");
	this.shape_4.setTransform(108.85,13.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#4E6B15").p("AAAgbIAAA3");
	this.shape_5.setTransform(111.3,13.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(98.9,0,17.599999999999994,18), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhOAzIAAhlICdAAIAABlg");
	mask_1.setTransform(7.875,5.125);

	// Vrstva_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzApQgVgKgGgPQAFgcAWgTQAVgSAegBQAdAAAXATQAVATAGAcQgGAPgVAKQgXAKgdAAQgcAAgXgKg");
	this.shape_1.setTransform(7.875,5.125);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(0,0,15.8,10.3), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AxcNyIAA7jMAi4AAAIAAbjg");
	mask_1.setTransform(111.65,88.2);

	// Vrstva_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6D2403").ss(2.1).p("AA8ghIgwgwIhDAAIAACjIBDAAIAwgw");
	this.shape_1.setTransform(6.6499,105.55);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(0,96.4,13.6,18.39999999999999), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4E6B15").ss(2.1).p("AAwgnIhEASIgTBF");
	this.shape_2.setTransform(79.1384,11.6401);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4E6B15").ss(2.1).p("AgvAoIBEgSIAThF");
	this.shape_3.setTransform(105.0616,37.4099);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4E6B15").ss(2.1).p("AgngvIASBFIBFAS");
	this.shape_4.setTransform(79.2866,37.3634);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#4E6B15").ss(2.1).p("Aghg7IgwAxIAABDICjAAIAAhDIgwgx");
	this.shape_5.setTransform(92.2,42.477);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#4E6B15").ss(2.1).p("AAiA8IAwgwIAAhDIijAAIAABDIAwAw");
	this.shape_6.setTransform(92.2,6.6999);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#4E6B15").ss(2.1).p("Ag7AiIAxAwIBCAAIAAijIhCAAIgxAw");
	this.shape_7.setTransform(110.202,24.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#4E6B15").ss(2.1).p("AA8ghIgxgwIhCAAIAACjIBCAAIAxgw");
	this.shape_8.setTransform(74.198,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(67.6,0.1,49.30000000000001,49.1), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah3BOIAAibIDvAAIAACbg");
	mask.setTransform(11.975,7.8);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOA+QghgPgIgXQAIgrAhgcQAhgeAtAAQAtAAAiAdQAiAeAHAqQgHAXgiAPQgjAQgsAAQgrAAgjgQg");
	this.shape.setTransform(11.975,7.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,24,15.6), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
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


(lib.EnzymFialovy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AgqBcQgYgjgEg0QgDgzATgmQAUgmAegCQAUgCATARQASARALAdQgZABgQATQgRATACAYQACAYASARQATAQAZgBQgIAegQATQgQATgVABIgDAAQgcAAgWghg");
	this.shape.setTransform(7.1484,12.5243);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.EnzymFialovy, new cjs.Rectangle(0,0,14.3,25.1), null);


(lib.kanalCervenyStranaVlevo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CC0000").ss(1.5).p("AB6jWQgCAjgNA6QgPBFgDAYQgPBrAoB1QAKAfADALQAFAYgGATQgIAbgeAQQgWAMgjAEQg7AEgigZQgcgVgJgmQgJgkALgkQAHgUADgKQAGgRAAgNQgBgSgLgXQgPgagGgNQgXgwAOg1QAHgaAOgYQAEgGAKgPQAKgNAFgIQAMgZgDgtQgDg0AGgTQAJghAigNQAdgLAkAGQAcAGAPANQAaAVAEAuQADASgBATg");
	this.shape.setTransform(12.9292,34.0414);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag+E/QgcgVgJgmQgJgkALgkIAKgeQAGgRAAgNQgBgSgLgXQgPgagGgNQgXgwAOg1QAHgaAOgYIAOgVIAPgVQAMgZgDgtQgDg0AGgTQAJghAigNQAdgLAkAGQAcAGAPANQAaAVAEAuQADASgBATQgCAjgNA6QgPBFgDAYQgPBrAoB1QAKAfADALQAFAYgGATQgIAbgeAQQgWAMgjAEIgSAAQguAAgdgVg");
	this.shape_1.setTransform(12.9292,34.0414);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kanalCervenyStranaVlevo, new cjs.Rectangle(-1,-1,29.4,72), null);


(lib.PrvekZeleny = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(111.05,87.25,1,1,0,0,0,111.7,88.2);

	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.setTransform(110.7,87.15,1,1,0,0,0,111.7,88.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E6B15").s().p("AAIAWIgJgRIgEgGIgDgIIgBAAIABAJIAAAJIAAANIgJAAIAAgrIALAAIAIAQIAEAGIAEAIIgBgJIAAgIIAAgNIAJAAIAAArg");
	this.shape.setTransform(91.225,32.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E6B15").s().p("AAIAWIgJgRIgEgGIgDgJIgBAAIABAKIAAAIIAAAOIgJAAIAAgrIALAAIAIAQIAEAGIAEAIIgBgJIAAgJIAAgMIAJAAIAAArg");
	this.shape_1.setTransform(91.225,13.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E6B15").s().p("AAIAWIgJgRIgEgHIgDgIIgBAAIABAJIAAAJIAAAOIgJAAIAAgrIALAAIAIAQIAEAGIAEAIIgBgJIAAgJIAAgMIAJAAIAAArg");
	this.shape_2.setTransform(101.225,23.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4E6B15").s().p("AAIAWIgJgRIgEgHIgDgIIgBAAIABAJIAAAJIAAAOIgJAAIAAgrIALAAIAIAQIAEAGIAEAIIgBgJIAAgJIAAgMIAJAAIAAArg");
	this.shape_3.setTransform(81.925,23.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PrvekZeleny, new cjs.Rectangle(-0.6,-1,223.29999999999998,176.5), null);


(lib.PrvekHnedy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_3_1();
	this.instance.setTransform(110.7,5.65,1,1,0,0,0,111.7,88.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6D2403").p("AAAAhIAAhB");
	this.shape.setTransform(69.5,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6D2403").p("AAAAcIAAg3");
	this.shape_1.setTransform(72.05,35.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6D2403").p("AAAAhIAAhB");
	this.shape_2.setTransform(6.55,34.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6D2403").p("AAAAcIAAg3");
	this.shape_3.setTransform(4.05,35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6D2403").s().p("AAIAWIgJgRIgEgHIgDgIIgBAAIABAJIAAAJIAAAOIgJAAIAAgrIALAAIAIAQIAEAHIAEAHIgBgIIAAgKIAAgMIAJAAIAAArg");
	this.shape_4.setTransform(14.475,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D2403").s().p("AAIAWIgJgRIgEgHIgDgIIgBAAIABAJIAAAJIAAAOIgJAAIAAgrIALAAIAIAQIAEAHIAEAHIgBgIIAAgKIAAgMIAJAAIAAArg");
	this.shape_5.setTransform(62.475,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6D2403").s().p("AAIAWIgJgRIgEgGIgDgIIgBAAIABAIIAAAJIAAAOIgJAAIAAgrIALAAIAIAQIAEAGIAEAIIgBgJIAAgJIAAgMIAJAAIAAArg");
	this.shape_6.setTransform(23.325,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6D2403").s().p("AAIAWIgJgRIgEgGIgDgIIgBAAIABAIIAAAJIAAAOIgJAAIAAgrIALAAIAIAQIAEAGIAEAIIgBgJIAAgJIAAgMIAJAAIAAArg");
	this.shape_7.setTransform(53.075,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#6D2403").ss(2.1).p("Ag9gSIA9AjIA+gj");
	this.shape_8.setTransform(38.1765,8.7979);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#6D2403").ss(2.1).p("AAoAwIgShFIhFgS");
	this.shape_9.setTransform(65.8634,10.6366);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#6D2403").ss(2.1).p("AAwgnIhFASIgSBF");
	this.shape_10.setTransform(10.3366,10.7866);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#6D2403").ss(2.1).p("AAiA7IAwgwIAAhDIijAAIAABDIAwAw");
	this.shape_11.setTransform(23.175,5.7018);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#6D2403").ss(2.1).p("Ag6AiIAwAwIBDAAIAAijIhDAAIgwAw");
	this.shape_12.setTransform(70.7982,23.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#6D2403").ss(2.1).p("AAiA8IAwgwIAAhDIijAAIAABDIAwAw");
	this.shape_13.setTransform(52.9,5.6499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PrvekHnedy, new cjs.Rectangle(-1,-82.5,223.3,176.4), null);


(lib.KrvinkaCela = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_2
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(105.45,32.1,1,1,0,0,0,58.1,15.6);
	this.instance.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Vrstva_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B35959").s().p("AilBGQhEgdAAgpQAAgoBEgdQBHgdBeAAQBfAABGAdQBFAdAAAoQAAAphFAdQhEAdhhAAQhgAAhFgdg");
	this.shape.setTransform(123.2457,68.1839,1.9371,1.9371);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A84A4A").s().p("AjLBpQhVgrAAg+QAAg9BVgrQBTgsB4AAQB4AABUAsQBVArAAA9QAAA+hVArQhUAsh4AAQh3AAhUgsg");
	this.shape_1.setTransform(117.4828,55.3507,1.9371,1.9371);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC5F5E").s().p("AnoEvQgkghgYg3QgXg2gHg/QgOiNBHhnQAxhGBeguQBIgkBpgaQC4guC6AbQDRAfCDBxQAiAeAWAvQAUAtgEAeQABAWgdARQgfAQhLATQhVAVnbBcIkHDWQgygFg+gug");
	this.shape_2.setTransform(113.5122,68.8632,1.9371,1.9371);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC5F5E").s().p("AgTGiIgwgCQhPgHhBgSQhTgWhRgsQgqgWgSgMQgbgRgWgUQhThNgXhpQgWhiAohnQAWg3AggpQArg3BEgkQApgXBZgfQBygpCJgGQCVgGCMAoQBMAWA+AhQBVAtAsA3QA8BPAIBhQAGBFgaBFQgPAngeAwQhWCHiwBBQhcAihhAJQggACgnAAIgeAAg");
	this.shape_3.setTransform(116.1214,81.0664,1.9383,1.9383);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KrvinkaCela, new cjs.Rectangle(0,0,232.3,162.2), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(58.1,15.6,1,1,0,0,0,58.1,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,116.4,31.1), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Clip_Group__0
	this.instance = new lib.Group();
	this.instance.setTransform(117.1,34.45,1,1,0,0,0,58.1,15.6);
	this.instance.alpha = 0.3086;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#D93531").p("AwyhxQA6g+BSghQAvgUBOgQQAqgIAwgCQBXgFBVASQA4AMA4AaQBBAeAyAOQCHAmCRgJQBXgFBHgRQB/geBlhDQArgdA/g9QA/g/BUg5QA0gjAogVQAogVArgNQA1gRAlgFQA/gJA8ANQAhAHAUAIQAiANAaAWQArAjAVA7QANAhAIA4QAKBOgLBOQgXCThjBcQg5A3hPAdQgsAQhJAOQg1AKg9gDQhdgIhRgFQiSgKgvgCQhMgDg0ADQiKAJiKAxQhRAchjAzQhAAhhjBFQhZA9hqAyQheAsg8AOQg5AOg2gFQiGgOhUhYQhMhOgNh6QgIg/AMhUQAWiRBWhdg");
	this.shape_10.setTransform(135.8563,98.3185);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFB6B9").s().p("AtvI+QiGgOhUhYQhMhOgNh6QgIg/AMhUQAWiRBWhdQA6g+BSghQAvgUBOgQQAqgIAwgCQBXgFBVASQA4AMA4AaQBBAeAyAOQCHAmCRgJQBXgFBHgRQB/geBlhDQArgdA/g9QA/g/BUg5QA0gjAogVQAogVArgNQA1gRAlgFQA/gJA8ANQAhAHAUAIQAiANAaAWQArAjAVA7QANAhAIA4QAKBOgLBOQgXCThjBcQg5A3hPAdQgsAQhJAOQg1AKg9gDIiugNQiSgKgvgCQhMgDg0ADQiKAJiKAxQhRAchjAzQhAAhhjBFQhZA9hqAyQheAsg8AOQgpAKgnAAQgPAAgQgBg");
	this.shape_11.setTransform(135.8563,98.3185);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B35959").s().p("AloCZQiWg/AAhaQAAhZCWg/QCWhADSAAQDUAACVBAQCVA/AABZQAABaiVA/QiVBAjUAAQjSAAiWhAg");
	this.shape_12.setTransform(137.9,76.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A84A4A").s().p("Am9DmQi5hfAAiHQAAiGC5hfQC5hfEEAAQEGAAC4BfQC5BfAACGQAACHi5BfQi4BgkGAAQkEAAi5hgg");
	this.shape_13.setTransform(131.375,61.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC5F5E").s().p("AwqKVQhQhJg0h3Qg0h2gNiKQggk1CcjfQBqiYDOhnQCchODmg5QGShjGXA7QHIBCEfD3QBLBBAuBnQAtBigJBCQABAxg/AjQhBAkimAqQixAtwWDLQhgBMi/CdQjECghaBJQhwgLiFhkg");
	this.shape_14.setTransform(126.9502,77.0519);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(76,20,20,0.169)").s().p("AsyFkQgugJhDgfQhMgkg4gtQiVh4BbhmQAWgXAjgLIBEgTQFPhyCugwQEdhPDrgYQBcgKCggHQC2gIBGgGQEFgVAjgBQCogCB3AtQAUAIAIAKQAOARgJAjQgoBhhwA2QhTAohtAMQhDAJhZAJIieAPQjsAXhNAMQitAciAA4Qg8AahtA7Qh0A/g1AYQhjAthFARQhBAPhEAAQgeAAgegDg");
	this.shape_15.setTransform(132.8471,123.0367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,-0.1,255.9,159.1), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.ClipGroup_5();
	this.instance_1.setTransform(5.5,3.6,1,1,0,0,0,5.5,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,11.1,7.2), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_1();
	this.instance.setTransform(24.65,21.8,1,1,0,0,0,5.5,3.6);
	this.instance.alpha = 0.1992;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E1616").s().p("AgsAtQgSgTAAgaQAAgZASgTQATgSAZAAQAaAAATASQASASAAAaQAAAagSATQgUASgZAAQgZAAgTgSgAgmgmQgQARAAAVQAAAXAQAQQAQAQAWAAQAXAAAQgQQAQgQAAgXQAAgWgQgQQgQgQgXAAQgVAAgRAQg");
	this.shape_1.setTransform(24.675,23.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C7181F").s().p("AgmAnQgQgQAAgXQAAgVAQgRQARgQAVAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_2.setTransform(24.675,23.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(18.4,17.5,12.600000000000001,12.7), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.ClipGroup_0_1();
	this.instance_1.setTransform(25,24.6,1,1,0,0,0,24.7,24.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1FAFFF").ss(2.1).p("AAoAwIgShFIhFgS");
	this.shape_16.setTransform(37.6634,11.5866);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1FAFFF").s().p("AAIAWIgJgRIgEgGIgDgJIgBAAIABAKIAAAIIAAAOIgJAAIAAgrIALAAIAIAQIAEAGIAEAIIgBgJIAAgJIAAgMIAJAAIAAArg");
	this.shape_17.setTransform(24.725,33.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1FAFFF").s().p("AAIAWIgJgRIgEgHIgDgIIgBAAIABAJIAAAJIAAAOIgJAAIAAgrIALAAIAIAQIAEAHIAEAHIgBgJIAAgJIAAgMIAJAAIAAArg");
	this.shape_18.setTransform(24.725,15.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1FAFFF").s().p("AAIAWIgJgRIgEgGIgDgIIgBAAIABAJIAAAJIAAANIgJAAIAAgrIALAAIAIAQIAEAGIAEAIIgBgJIAAgJIAAgMIAJAAIAAArg");
	this.shape_19.setTransform(34.675,25.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1FAFFF").s().p("AAIAWIgJgRIgEgGIgDgIIgBAAIABAJIAAAJIAAANIgJAAIAAgrIALAAIAIAQIAEAGIAEAIIgBgJIAAgJIAAgMIAJAAIAAArg");
	this.shape_20.setTransform(14.825,25.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#1FAFFF").ss(2.1).p("AAwgoIhFATIgSBF");
	this.shape_21.setTransform(11.6399,11.6125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1FAFFF").ss(2.1).p("AgvApIBFgTIAShF");
	this.shape_22.setTransform(37.5101,37.3875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1FAFFF").ss(2.1).p("AgngvIASBFIBFAS");
	this.shape_23.setTransform(11.7366,37.3134);

	this.instance_2 = new lib.ClipGroup_1_1();
	this.instance_2.setTransform(24.7,24.6,1,1,0,0,0,24.7,24.6);

	this.instance_3 = new lib.ClipGroup_2();
	this.instance_3.setTransform(24.7,24.6,1,1,0,0,0,24.7,24.6);

	this.instance_4 = new lib.ClipGroup_3();
	this.instance_4.setTransform(24.7,24.6,1,1,0,0,0,24.7,24.6);

	this.instance_5 = new lib.ClipGroup_4();
	this.instance_5.setTransform(24.7,24.6,1,1,0,0,0,24.7,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0,0,49.4,49.1), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(12,7.8,1,1,0,0,0,12,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,24,15.6), null);


(lib.Group_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_4_1();
	this.instance.setTransform(7.9,5.1,1,1,0,0,0,7.9,5.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,15.8,10.3), null);


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


(lib.Co = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_1_1();
	this.instance.setTransform(29.05,10.85,1,1,0,0,0,7.9,5.1);
	this.instance.alpha = 0.1992;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E1616").s().p("Ag/BAQgagbAAglQAAgkAagbQAagaAlAAQAmAAAaAaQAaAbAAAkQAAAlgaAaQgaAbgmAAQglAAgagagAg3g3QgXAZAAAeQAAAfAXAZQAXAWAgAAQAhAAAXgWQAXgZAAgfQAAgggYgXQgWgWghAAQggAAgXAWg");
	this.shape.setTransform(29.025,13.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0303").s().p("Ag3A4QgXgZAAgfQAAgeAXgZQAXgWAgAAQAhAAAWAWQAYAXAAAgQAAAfgXAZQgXAWghAAQggAAgXgWg");
	this.shape_1.setTransform(29.025,13.75);

	this.instance_1 = new lib.Group_2();
	this.instance_1.setTransform(13.75,9.4,1,1,0,0,0,12,7.8);
	this.instance_1.alpha = 0.1992;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A0A0A").s().p("AhgBhQgpgoAAg5QAAg4ApgoQAogpA4AAQA4ABApAoQApAoAAA4QgBA5goAoQgoApg5AAQg3AAgpgpgAhUhUQgjAkAAAwQAAAyAjAjQAjAjAxAAQAygBAigiQAlgkgBgxQAAgxgkgjQgjgjgxAAQgxAAgjAjg");
	this.shape_2.setTransform(13.75,13.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhTBVQgkgjAAgyQAAgwAjgkQAkgjAwAAQAxAAAkAjQAjAjAAAxQABAxgkAkQgiAigzABQgwAAgjgjg");
	this.shape_3.setTransform(13.7264,13.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Co, new cjs.Rectangle(0,0,38.1,27.5), null);


(lib.Pulka = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_8();
	this.instance.setTransform(80.05,49.85,0.626,0.626,0,0,0,127.9,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pulka, new cjs.Rectangle(0,0,160,99.6), null);


(lib.ModraCervenaFE = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_9();
	this.instance.setTransform(23.7,23,1,1,0,0,0,24.7,24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ModraCervenaFE, new cjs.Rectangle(-1,-1.6,49.4,49.1), null);


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

	// Vrstva_17
	this.instance = new lib.FecervenaBezTextu();
	this.instance.setTransform(1218.15,512.2,1.785,1.785,0,0,0,10.6,10.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(234).to({_off:false},0).wait(1).to({regX:10.5,regY:10.5,scaleX:1.8418,scaleY:1.8418,x:1218.1,y:520.7,alpha:0.0667},0).wait(1).to({scaleX:1.8986,scaleY:1.8986,x:1218.25,y:529.4,alpha:0.1333},0).wait(1).to({scaleX:1.9554,scaleY:1.9554,x:1218.4,y:538.1,alpha:0.2},0).wait(1).to({scaleX:2.0123,scaleY:2.0123,x:1218.55,y:546.75,alpha:0.2667},0).wait(1).to({scaleX:2.0691,scaleY:2.0691,x:1218.7,y:555.45,alpha:0.3333},0).wait(1).to({scaleX:2.1259,scaleY:2.1259,x:1218.8,y:564.1,alpha:0.4},0).wait(1).to({scaleX:2.1827,scaleY:2.1827,x:1218.95,y:572.75,alpha:0.4667},0).wait(1).to({scaleX:2.2396,scaleY:2.2396,x:1219.1,y:581.45,alpha:0.5333},0).wait(1).to({scaleX:2.2964,scaleY:2.2964,x:1219.25,y:590.15,alpha:0.6},0).wait(1).to({scaleX:2.3532,scaleY:2.3532,x:1219.4,y:598.8,alpha:0.6667},0).wait(1).to({scaleX:2.41,scaleY:2.41,x:1219.55,y:607.5,alpha:0.7333},0).wait(1).to({scaleX:2.4668,scaleY:2.4668,x:1219.7,y:616.2,alpha:0.8},0).wait(1).to({scaleX:2.5237,scaleY:2.5237,x:1219.85,y:624.85,alpha:0.8667},0).wait(1).to({scaleX:2.5805,scaleY:2.5805,x:1220,y:633.55,alpha:0.9333},0).wait(1).to({scaleX:2.6373,scaleY:2.6373,x:1220.15,y:642.25,alpha:1},0).wait(1).to({scaleX:2.6374,scaleY:2.6374,x:1220.5,y:649.85},0).wait(1).to({scaleX:2.6375,scaleY:2.6375,x:1220.85,y:657.45},0).wait(1).to({scaleX:2.6376,scaleY:2.6376,x:1221.2,y:665.1},0).wait(1).to({scaleX:2.6377,scaleY:2.6377,x:1221.55,y:672.7},0).wait(1).to({scaleX:2.6378,scaleY:2.6378,x:1221.9,y:680.3},0).wait(1).to({x:1222.25,y:687.9},0).wait(1).to({scaleX:2.6379,scaleY:2.6379,x:1222.6,y:695.55},0).wait(1).to({scaleX:2.638,scaleY:2.638,x:1222.95,y:703.15},0).wait(1).to({scaleX:2.6381,scaleY:2.6381,x:1223.3,y:710.75},0).wait(1).to({scaleX:2.6382,scaleY:2.6382,x:1223.65,y:718.35},0).wait(1).to({scaleX:2.6383,scaleY:2.6383,x:1224,y:726},0).wait(1).to({scaleX:2.6384,scaleY:2.6384,x:1224.35,y:733.6},0).wait(1).to({scaleX:2.6385,scaleY:2.6385,x:1224.7,y:741.2},0).wait(1).to({scaleX:2.6386,scaleY:2.6386,x:1225.05,y:748.8},0).wait(1).to({scaleX:2.6387,scaleY:2.6387,x:1225.4,y:756.45},0).wait(1).to({x:1225.7,y:764.05},0).wait(1).to({scaleX:2.6388,scaleY:2.6388,x:1226.05,y:771.65},0).wait(1).to({scaleX:2.6389,scaleY:2.6389,x:1226.4,y:779.25},0).wait(1).to({scaleX:2.639,scaleY:2.639,x:1226.75,y:786.9},0).wait(1).to({scaleX:2.6391,scaleY:2.6391,x:1227.1,y:794.5},0).wait(1).to({scaleX:2.6392,scaleY:2.6392,x:1227.45,y:802.1},0).wait(1).to({scaleX:2.6393,scaleY:2.6393,x:1227.8,y:809.7},0).wait(1).to({scaleX:2.6394,scaleY:2.6394,x:1228.15,y:817.3},0).wait(1).to({scaleX:2.6395,scaleY:2.6395,x:1228.5,y:824.95},0).wait(1).to({scaleX:2.6396,scaleY:2.6396,x:1228.85,y:832.55},0).wait(1).to({x:1229.2,y:840.15},0).wait(1).to({scaleX:2.6397,scaleY:2.6397,x:1229.55,y:847.75},0).wait(1).to({scaleX:2.6398,scaleY:2.6398,x:1229.9,y:855.4},0).wait(1).to({scaleX:2.6399,scaleY:2.6399,x:1230.25,y:863},0).wait(1).to({scaleX:2.64,scaleY:2.64,x:1230.6,y:870.6},0).wait(191));

	// Vrstva_31
	this.instance_1 = new lib.PrvekHnedy();
	this.instance_1.setTransform(1539.85,491.95,1.1974,1.1974,0,0,0,38.8,17.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(409).to({_off:false},0).wait(1).to({regX:38.2,regY:18.5,x:1539.1,y:492.6},0).wait(15).to({x:1532.45,y:489.55,alpha:0.0667},0).wait(1).to({x:1525.75,y:486.45,alpha:0.1333},0).wait(1).to({x:1519.05,y:483.35,alpha:0.2},0).wait(1).to({x:1512.35,y:480.3,alpha:0.2667},0).wait(1).to({x:1505.65,y:477.2,alpha:0.3333},0).wait(1).to({x:1499,y:474.1,alpha:0.4},0).wait(1).to({x:1492.3,y:471,alpha:0.4667},0).wait(1).to({x:1485.6,y:467.95,alpha:0.5333},0).wait(1).to({x:1478.9,y:464.85,alpha:0.6},0).wait(1).to({x:1472.2,y:461.75,alpha:0.6667},0).wait(1).to({x:1465.55,y:458.65,alpha:0.7333},0).wait(1).to({x:1458.85,y:455.6,alpha:0.8},0).wait(1).to({x:1452.15,y:452.5,alpha:0.8667},0).wait(1).to({x:1445.45,y:449.4,alpha:0.9333},0).wait(1).to({x:1438.75,y:446.3,alpha:1},0).wait(31));

	// Vrstva_26
	this.instance_2 = new lib.FecervenaBezTextu();
	this.instance_2.setTransform(1586.8,621.15,1.785,1.785,0,0,0,10.5,10.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(358).to({_off:false},0).wait(1).to({regY:10.5,scaleX:1.8017,scaleY:1.8016,x:1586.75,y:620.95,alpha:0.0909},0).wait(1).to({scaleX:1.8185,scaleY:1.8183,alpha:0.1818},0).wait(1).to({scaleX:1.8353,scaleY:1.835,alpha:0.2727},0).wait(1).to({scaleX:1.8521,scaleY:1.8517,alpha:0.3636},0).wait(1).to({scaleX:1.8688,scaleY:1.8684,alpha:0.4545},0).wait(1).to({scaleX:1.8856,scaleY:1.8851,alpha:0.5455},0).wait(1).to({scaleX:1.9024,scaleY:1.9017,x:1586.8,alpha:0.6364},0).wait(1).to({scaleX:1.9192,scaleY:1.9184,x:1586.75,alpha:0.7273},0).wait(1).to({scaleX:1.9359,scaleY:1.9351,x:1586.8,alpha:0.8182},0).wait(1).to({scaleX:1.9527,scaleY:1.9518,x:1586.75,alpha:0.9091},0).wait(1).to({scaleX:1.9695,scaleY:1.9685,x:1586.8,alpha:1},0).wait(1).to({scaleX:1.9863,scaleY:1.9852,x:1581.35,y:628.85},0).wait(1).to({scaleX:2.003,scaleY:2.0018,x:1575.9,y:636.7},0).wait(1).to({scaleX:2.0198,scaleY:2.0185,x:1570.45,y:644.6},0).wait(1).to({scaleX:2.0366,scaleY:2.0352,x:1565.05,y:652.5},0).wait(1).to({scaleX:2.0534,scaleY:2.0519,x:1559.6,y:660.4},0).wait(1).to({scaleX:2.0701,scaleY:2.0686,x:1554.15,y:668.25},0).wait(1).to({scaleX:2.0869,scaleY:2.0852,x:1548.7,y:676.2},0).wait(1).to({scaleX:2.1037,scaleY:2.1019,x:1543.3,y:684.05},0).wait(1).to({scaleX:2.1205,scaleY:2.1186,x:1537.85,y:691.95},0).wait(1).to({scaleX:2.1372,scaleY:2.1353,x:1532.4,y:699.8},0).wait(1).to({scaleX:2.154,scaleY:2.152,x:1526.95,y:707.75},0).wait(1).to({scaleX:2.1708,scaleY:2.1687,x:1521.55,y:715.6},0).wait(1).to({scaleX:2.1876,scaleY:2.1853,x:1516.1,y:723.5},0).wait(1).to({scaleX:2.2044,scaleY:2.202,x:1510.65,y:731.4},0).wait(1).to({scaleX:2.2211,scaleY:2.2187,x:1505.2,y:739.3},0).wait(1).to({scaleX:2.2379,scaleY:2.2354,x:1499.8,y:747.15},0).wait(1).to({scaleX:2.2547,scaleY:2.2521,x:1494.35,y:755.05},0).wait(1).to({scaleX:2.2715,scaleY:2.2688,x:1488.9,y:762.95},0).wait(1).to({scaleX:2.2882,scaleY:2.2854,x:1483.5,y:770.85},0).wait(1).to({scaleX:2.305,scaleY:2.3021,x:1478.05,y:778.7},0).wait(1).to({scaleX:2.3218,scaleY:2.3188,x:1472.65,y:786.65},0).wait(1).to({scaleX:2.3386,scaleY:2.3355,x:1467.15,y:794.5},0).wait(1).to({scaleX:2.3553,scaleY:2.3522,x:1461.75,y:802.4},0).wait(1).to({scaleX:2.3721,scaleY:2.3688,x:1456.3,y:810.3},0).wait(1).to({scaleX:2.3889,scaleY:2.3855,x:1450.9,y:818.2},0).wait(1).to({scaleX:2.4057,scaleY:2.4022,x:1445.4,y:826.05},0).wait(1).to({scaleX:2.4224,scaleY:2.4189,x:1440,y:833.95},0).wait(1).to({scaleX:2.4392,scaleY:2.4356,x:1434.55,y:841.85},0).wait(1).to({scaleX:2.456,scaleY:2.4523,x:1429.15,y:849.75},0).wait(1).to({scaleX:2.4728,scaleY:2.4689,x:1423.65,y:857.6},0).wait(1).to({scaleX:2.4895,scaleY:2.4856,x:1418.25,y:865.55},0).wait(1).to({scaleX:2.5063,scaleY:2.5023,x:1412.8,y:873.4},0).wait(1).to({scaleX:2.5231,scaleY:2.519,x:1407.35,y:881.3},0).wait(1).to({scaleX:2.5399,scaleY:2.5357,x:1401.9,y:889.15},0).wait(1).to({scaleX:2.5566,scaleY:2.5524,x:1396.5,y:897.1},0).wait(1).to({scaleX:2.5734,scaleY:2.569,x:1391.05,y:904.95},0).wait(1).to({scaleX:2.5902,scaleY:2.5857,x:1385.6,y:912.85},0).wait(1).to({scaleX:2.607,scaleY:2.6024,x:1380.15,y:920.8},0).wait(1).to({scaleX:2.6237,scaleY:2.6191,x:1374.75,y:928.65},0).wait(1).to({scaleX:2.6405,scaleY:2.6358,x:1369.35,y:936.55},0).wait(61));

	// Vrstva_19
	this.instance_3 = new lib.Co();
	this.instance_3.setTransform(1586.05,628.75,1.3951,1.3951,90,0,0,19.2,14.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(358).to({_off:false},0).wait(1).to({regX:19,regY:13.8,x:1584.8,y:627.65,alpha:0.0909},0).wait(1).to({x:1583.15,y:626.85,alpha:0.1818},0).wait(1).to({x:1581.5,y:626.05,alpha:0.2727},0).wait(1).to({x:1579.9,y:625.3,alpha:0.3636},0).wait(1).to({x:1578.25,y:624.5,alpha:0.4545},0).wait(1).to({x:1576.6,y:623.7,alpha:0.5455},0).wait(1).to({x:1574.95,y:622.95,alpha:0.6364},0).wait(1).to({x:1573.35,y:622.15,alpha:0.7273},0).wait(1).to({x:1571.7,y:621.35,alpha:0.8182},0).wait(1).to({x:1570.05,y:620.55,alpha:0.9091},0).wait(1).to({x:1568.45,y:619.8,alpha:1},0).wait(1).to({x:1566.8,y:619},0).wait(1).to({x:1565.15,y:618.2},0).wait(1).to({x:1563.5,y:617.45},0).wait(1).to({x:1561.9,y:616.65},0).wait(1).to({x:1560.25,y:615.85},0).wait(1).to({x:1558.6,y:615.05},0).wait(1).to({x:1556.95,y:614.3},0).wait(1).to({x:1555.35,y:613.5},0).wait(1).to({x:1553.7,y:612.7},0).wait(1).to({x:1552.05,y:611.95},0).wait(1).to({x:1550.45,y:611.15},0).wait(1).to({x:1548.8,y:610.35},0).wait(1).to({x:1547.15,y:609.6},0).wait(1).to({x:1545.5,y:608.8},0).wait(1).to({x:1543.9,y:608},0).wait(1).to({x:1542.25,y:607.2},0).wait(1).to({x:1540.6,y:606.45},0).wait(1).to({x:1538.95,y:605.65},0).wait(1).to({x:1537.35,y:604.85},0).wait(1).to({x:1535.7,y:604.1},0).wait(1).to({x:1534.05,y:603.3},0).wait(1).to({x:1532.45,y:602.5},0).wait(1).to({x:1530.8,y:601.7},0).wait(1).to({x:1529.15,y:600.95},0).wait(1).to({x:1527.5,y:600.15},0).wait(1).to({x:1525.9,y:599.35},0).wait(1).to({x:1524.25,y:598.6},0).wait(1).to({x:1522.6,y:597.8},0).wait(1).to({x:1520.95,y:597},0).wait(1).to({x:1519.35,y:596.25},0).wait(1).to({x:1517.7,y:595.45},0).wait(1).to({x:1516.05,y:594.65},0).wait(1).to({x:1514.45,y:593.85},0).wait(1).to({x:1512.8,y:593.1},0).wait(1).to({x:1511.15,y:592.3},0).wait(1).to({x:1509.5,y:591.5},0).wait(1).to({x:1507.9,y:590.75},0).wait(1).to({x:1506.25,y:589.95},0).wait(1).to({x:1504.6,y:589.15},0).wait(1).to({x:1503,y:588.35},0).wait(61));

	// Vrstva_11
	this.instance_4 = new lib.PrvekZeleny();
	this.instance_4.setTransform(1587.05,620.65,1.1341,1.1341,0,0,0,91.2,23.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(358).to({_off:false},0).wait(1).to({regX:97.7,regY:17.1,x:1593.4,y:611.3,alpha:0.0909},0).wait(1).to({x:1592.45,y:608.9,alpha:0.1818},0).wait(1).to({x:1591.5,y:606.45,alpha:0.2727},0).wait(1).to({x:1590.55,y:604.05,alpha:0.3636},0).wait(1).to({x:1589.6,y:601.6,alpha:0.4545},0).wait(1).to({x:1588.65,y:599.2,alpha:0.5455},0).wait(1).to({x:1587.7,y:596.75,alpha:0.6364},0).wait(1).to({x:1586.75,y:594.35,alpha:0.7273},0).wait(1).to({x:1585.75,y:591.95,alpha:0.8182},0).wait(1).to({x:1584.8,y:589.5,alpha:0.9091},0).wait(1).to({x:1583.85,y:587.1,alpha:1},0).wait(1).to({x:1582.9,y:584.65},0).wait(1).to({x:1581.95,y:582.25},0).wait(1).to({x:1581,y:579.8},0).wait(1).to({x:1580.05,y:577.4},0).wait(1).to({x:1579.1,y:575},0).wait(1).to({x:1578.1,y:572.55},0).wait(1).to({x:1577.15,y:570.15},0).wait(1).to({x:1576.2,y:567.7},0).wait(1).to({x:1575.25,y:565.3},0).wait(1).to({x:1574.3,y:562.85},0).wait(1).to({x:1573.35,y:560.45},0).wait(1).to({x:1572.4,y:558.05},0).wait(1).to({x:1571.45,y:555.6},0).wait(1).to({x:1570.5,y:553.2},0).wait(1).to({x:1569.5,y:550.75},0).wait(1).to({x:1568.55,y:548.35},0).wait(1).to({x:1567.6,y:545.9},0).wait(1).to({x:1566.65,y:543.5},0).wait(1).to({x:1565.7,y:541.1},0).wait(1).to({x:1564.75,y:538.65},0).wait(1).to({x:1563.8,y:536.25},0).wait(1).to({x:1562.85,y:533.8},0).wait(1).to({x:1561.85,y:531.4},0).wait(1).to({x:1560.9,y:528.95},0).wait(1).to({x:1559.95,y:526.55},0).wait(1).to({x:1559,y:524.15},0).wait(1).to({x:1558.05,y:521.7},0).wait(1).to({x:1557.1,y:519.3},0).wait(1).to({x:1556.15,y:516.85},0).wait(1).to({x:1555.2,y:514.45},0).wait(1).to({x:1554.25,y:512},0).wait(1).to({x:1553.25,y:509.6},0).wait(1).to({x:1552.3,y:507.2},0).wait(1).to({x:1551.35,y:504.75},0).wait(1).to({x:1550.4,y:502.35},0).wait(1).to({x:1549.45,y:499.9},0).wait(1).to({x:1548.5,y:497.5},0).wait(1).to({x:1547.55,y:495.05},0).wait(1).to({x:1546.6,y:492.65},0).wait(1).to({x:1545.6,y:490.2},0).wait(16).to({alpha:0.9333},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0},0).wait(31));

	// Vrstva_48
	this.instance_5 = new lib.ModraCervenaFE();
	this.instance_5.setTransform(1371.9,589.35,1.1056,1.1049,0,0,0,20,24.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(294).to({_off:false},0).wait(1).to({regX:-1,regY:-1.6,scaleY:1.105,x:1339.6,y:568.2},0).wait(1).to({x:1332.85,y:576.3},0).wait(1).to({x:1328.45,y:584.85},0).wait(1).to({x:1326.35,y:593.85},0).wait(1).to({x:1326.6,y:603.4},0).wait(1).to({x:1329.1,y:613.35},0).wait(1).to({x:1332.8,y:618.25},0).wait(1).to({x:1336.45,y:623.1},0).wait(1).to({x:1340.1,y:627.95},0).wait(1).to({x:1343.75,y:632.85},0).wait(1).to({x:1347.45,y:637.7},0).wait(1).to({x:1351.1,y:642.55},0).wait(1).to({x:1354.75,y:647.45},0).wait(1).to({x:1358.4,y:652.3},0).wait(1).to({x:1362.1,y:657.15},0).wait(1).to({x:1365.75,y:662.05},0).wait(1).to({x:1369.4,y:666.9},0).wait(1).to({x:1373.05,y:671.75},0).wait(1).to({x:1376.75,y:676.65},0).wait(1).to({x:1380.4,y:681.5},0).wait(1).to({x:1384.05,y:686.35},0).wait(1).to({x:1387.7,y:691.25},0).wait(1).to({x:1391.4,y:696.1},0).wait(1).to({x:1395.05,y:700.95},0).wait(1).to({x:1398.7,y:705.85},0).wait(1).to({x:1402.35,y:710.7},0).wait(1).to({x:1406,y:715.55},0).wait(1).to({x:1411.85,y:721.2},0).wait(1).to({x:1416.3,y:723.95},0).wait(1).to({x:1420.15,y:725.4},0).wait(1).to({x:1423.65,y:726},0).wait(1).to({x:1426.95,y:725.9},0).wait(1).to({x:1430.1,y:725.3},0).wait(1).to({x:1433.1,y:724.25},0).wait(1).to({x:1436.1,y:722.75},0).wait(1).to({x:1439,y:720.9},0).wait(1).to({x:1441.9,y:718.7},0).wait(1).to({x:1444.8,y:716.1},0).wait(1).to({x:1447.65,y:713.2},0).wait(1).to({x:1450.55,y:709.9},0).wait(1).to({x:1453.5,y:706.2},0).wait(1).to({x:1456.5,y:702.15},0).wait(1).to({x:1459.5,y:697.7},0).wait(1).to({x:1462.65,y:692.75},0).wait(1).to({x:1465.85,y:687.25},0).wait(1).to({x:1469.2,y:681.2},0).wait(1).to({x:1472.7,y:674.45},0).wait(1).to({x:1476.4,y:666.9},0).wait(1).to({x:1480.4,y:658.3},0).wait(1).to({x:1484.75,y:648.35},0).wait(1).to({x:1489.7,y:636.4},0).wait(1).to({x:1495.6,y:621.3},0).wait(1).to({x:1503.65,y:599.1},0).wait(1).to({x:1506.85,y:594.5},0).wait(1).to({x:1510.05,y:591.8},0).wait(1).to({x:1513.35,y:590},0).wait(1).to({x:1516.85,y:588.75},0).wait(1).to({x:1520.6,y:587.95},0).wait(1).to({x:1524.7,y:587.6},0).wait(1).to({x:1529.3},0).wait(1).to({x:1534.45,y:588},0).wait(1).to({x:1540.5,y:588.95},0).wait(1).to({x:1548.05,y:590.6},0).wait(1).to({x:1559.15,y:593.85},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.0909},0).wait(1).to({alpha:0},0).wait(101));

	// kanalModryStranaVpravo
	this.instance_6 = new lib.kanalModryStranaVpravo();
	this.instance_6.setTransform(1372.75,700.8,1.6879,1.3753,-36.2255,0,0,12.5,33.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(133).to({_off:false},0).to({alpha:1},15).wait(146).to({scaleX:0.7726,x:1363.55,y:707.55},3).wait(34).to({scaleX:1.6879,x:1372.75,y:700.8},3).wait(136));

	// kanalModryStranaVlevo
	this.instance_7 = new lib.kanalModryStranaVlevo();
	this.instance_7.setTransform(1408.35,678.45,1.6259,1.3753,-36.2255,0,0,13.6,35.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(133).to({_off:false},0).to({alpha:1},15).wait(146).to({regX:13.7,scaleX:0.7595,x:1417.05,y:672},3).wait(34).to({regX:13.6,scaleX:1.6259,x:1408.35,y:678.45},3).wait(136));

	// ModryStred
	this.instance_8 = new lib.ModryStred();
	this.instance_8.setTransform(1389.55,689.95,1.3753,1.3753,-36.2255,0,0,23.5,36.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(133).to({_off:false},0).to({alpha:1},15).wait(322));

	// Vrstva_47
	this.instance_9 = new lib.ModraCervenaFE();
	this.instance_9.setTransform(1259.55,602.45,1.1057,1.1057,0,0,0,18.1,23.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(207).to({_off:false},0).wait(1).to({regX:-1,regY:-1.6,x:1235.75,y:569.9},0).wait(1).to({x:1233.1,y:564.95},0).wait(1).to({x:1230.45,y:560},0).wait(1).to({x:1227.8,y:555.1},0).wait(1).to({x:1225.15,y:550.15},0).wait(1).to({x:1222.5,y:545.2},0).wait(1).to({x:1219.85,y:540.3},0).wait(1).to({x:1217.2,y:535.35},0).wait(1).to({x:1214.5,y:530.4},0).wait(1).to({x:1211.85,y:525.5},0).wait(1).to({x:1209.2,y:520.55},0).wait(1).to({x:1206.55,y:515.6},0).wait(1).to({x:1203.9,y:510.7},0).wait(1).to({x:1201.25,y:505.75},0).wait(1).to({x:1198.6,y:500.8},0).wait(1).to({x:1195.95,y:495.9},0).wait(1).to({x:1193.3,y:490.95},0).wait(1).to({x:1190.6,y:486},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0},0).wait(236));

	// ModraCervenaFE
	this.instance_10 = new lib.ModraCervenaFE();
	this.instance_10.setTransform(1362.5,578.55,0.6885,0.6885,0,0,0,18.2,23.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(148).to({_off:false},0).to({alpha:1},16).wait(30).to({regY:23.5,scaleX:1.1056,scaleY:1.1049,x:1370,y:588.35},12).to({_off:true},88).wait(176));

	// Vrstva_50
	this.instance_11 = new lib.EnzymFialovy();
	this.instance_11.setTransform(1612.3,618.7,3.6026,3.6026,179.1885,0,0,7.2,12.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(133).to({_off:false},0).to({alpha:1},15).wait(322));

	// Vrstva_40
	this.instance_12 = new lib.EnzymFialovy();
	this.instance_12.setTransform(1216.05,482.25,3.6026,3.6026,90.4465,0,0,7.2,12.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(133).to({_off:false},0).to({alpha:1},15).wait(322));

	// ModraCervenaFE
	this.instance_13 = new lib.ModraCervenaFE();
	this.instance_13.setTransform(1259.55,602.45,0.6885,0.6885,0,0,0,18.1,23.4);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(148).to({_off:false},0).to({alpha:1},16).wait(30).to({scaleX:1.1057,scaleY:1.1057},12).to({_off:true},1).wait(263));

	// Pulka
	this.instance_14 = new lib.Pulka();
	this.instance_14.setTransform(1305.7,582,1.0457,1.0457,0,0,0,80,49.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(148).to({_off:false},0).to({alpha:1},16).wait(13).to({alpha:0},17).to({_off:true},35).wait(241));

	// Vrstva_1
	this.instance_15 = new lib.KrvinkaCela();
	this.instance_15.setTransform(358.2,130.6,0.724,0.724,0,0,0,116.1,81.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({x:363.75,y:139.8},0).wait(1).to({x:369.5,y:148.9},0).wait(1).to({x:375.3,y:157.9},0).wait(1).to({x:381.25,y:166.8},0).wait(1).to({x:387.3,y:175.6},0).wait(1).to({x:393.5,y:184.35},0).wait(1).to({x:399.8,y:192.95},0).wait(1).to({x:406.2,y:201.45},0).wait(1).to({x:412.7,y:209.85},0).wait(1).to({x:419.35,y:218.15},0).wait(1).to({x:426.1,y:226.35},0).wait(1).to({x:432.95,y:234.5},0).wait(1).to({x:439.95,y:242.5},0).wait(1).to({x:447,y:250.4},0).wait(1).to({x:454.25,y:258.2},0).wait(1).to({x:461.55,y:265.9},0).wait(1).to({x:469,y:273.55},0).wait(1).to({x:476.55,y:281.05},0).wait(1).to({x:484.2,y:288.45},0).wait(1).to({x:492,y:295.75},0).wait(1).to({x:499.9,y:303},0).wait(1).to({x:507.9,y:310.1},0).wait(1).to({x:516.05,y:317.1},0).wait(1).to({x:524.25,y:324.05},0).wait(1).to({x:532.65,y:330.85},0).wait(1).to({x:541.1,y:337.6},0).wait(1).to({x:549.7,y:344.2},0).wait(1).to({x:558.4,y:350.75},0).wait(1).to({x:567.2,y:357.15},0).wait(1).to({x:576.15,y:363.5},0).wait(1).to({x:585.2,y:369.7},0).wait(1).to({x:594.35,y:375.85},0).wait(1).to({x:603.65,y:381.9},0).wait(1).to({x:613.05,y:387.85},0).wait(1).to({x:622.55,y:393.65},0).wait(1).to({x:632.2,y:399.4},0).wait(1).to({x:641.95,y:405.05},0).wait(1).to({x:651.8,y:410.6},0).wait(1).to({x:661.8,y:416.05},0).wait(1).to({x:671.9,y:421.4},0).wait(1).to({x:682.1,y:426.65},0).wait(1).to({x:692.45,y:431.8},0).wait(1).to({x:702.9,y:436.85},0).wait(1).to({x:713.45,y:441.8},0).wait(1).to({x:724.15,y:446.65},0).wait(1).to({x:734.95,y:451.4},0).wait(1).to({x:745.85,y:456.1},0).wait(1).to({x:756.9,y:460.65},0).wait(1).to({x:768.05,y:465.1},0).wait(1).to({x:779.3,y:469.5},0).wait(1).to({x:790.7,y:473.75},0).wait(1).to({x:802.2,y:477.9},0).wait(1).to({x:805.55,y:478.95},0).wait(1).to({x:808.9,y:479.95},0).wait(1).to({x:812.25,y:480.95},0).wait(1).to({x:815.6,y:481.95},0).wait(1).to({x:818.95,y:483},0).wait(1).to({x:822.25,y:484},0).wait(1).to({x:825.6,y:485},0).wait(1).to({x:828.95,y:486},0).wait(1).to({x:832.3,y:487.05},0).wait(1).to({x:835.65,y:488.05},0).wait(1).to({x:838.95,y:489.05},0).wait(1).to({x:842.3,y:490.05},0).wait(1).to({x:845.65,y:491.1},0).wait(1).to({x:849,y:492.1},0).wait(1).to({x:852.35,y:493.1},0).wait(1).to({x:855.65,y:494.1},0).wait(1).to({x:859,y:495.15},0).wait(1).to({x:862.35,y:496.15},0).wait(1).to({x:865.7,y:497.15},0).wait(1).to({x:869.05,y:498.15},0).wait(1).to({x:872.35,y:499.15},0).wait(1).to({x:876.25,y:500.75},0).wait(1).to({x:880.15,y:502.3},0).wait(1).to({x:884,y:503.85},0).wait(1).to({x:890.3,y:505.4},0).wait(1).to({x:896.6,y:506.95},0).wait(1).to({x:902.85,y:508.5},0).wait(1).to({x:909.15,y:510.05},0).wait(1).to({x:915.45,y:511.6},0).wait(1).to({x:921.7,y:513.15},0).wait(1).to({x:928,y:514.7},0).wait(1).to({x:934.3,y:516.25},0).wait(1).to({x:940.55,y:517.8},0).wait(1).to({x:946.85,y:519.35},0).wait(1).to({x:956.05,y:521.55},0).wait(1).to({x:965.3,y:523.8},0).wait(1).to({x:974.5,y:526},0).wait(1).to({x:983.7,y:528.2},0).wait(1).to({x:992.9,y:530.45},0).wait(1).to({x:1002.15,y:532.65},0).wait(1).to({x:1011.35,y:534.85},0).wait(1).to({x:1020.55,y:537.05},0).wait(1).to({x:1031.6,y:539.15},0).wait(1).to({x:1042.6,y:541.25},0).wait(1).to({x:1053.6,y:543.35},0).wait(1).to({x:1064.6,y:545.4},0).wait(1).to({x:1075.6,y:547.5},0).wait(1).to({x:1086.65,y:549.6},0).wait(1).to({x:1097.65,y:551.7},0).wait(1).to({x:1108.65,y:553.75},0).wait(1).to({x:1119.65,y:555.85},0).wait(1).to({x:1130.65,y:557.95},0).wait(1).to({x:1141.65,y:560},0).wait(1).to({x:1147.55,y:561.05},0).wait(1).to({x:1153.4,y:562.1},0).wait(1).to({x:1159.25,y:563.1},0).wait(1).to({x:1165.1,y:564.15},0).wait(1).to({x:1170.95,y:565.15},0).wait(1).to({x:1176.8,y:566.2},0).wait(1).to({x:1182.65,y:567.2},0).wait(1).to({x:1188.5,y:568.25},0).wait(1).to({x:1194.35,y:569.25},0).wait(1).to({x:1200.2,y:570.3},0).wait(1).to({x:1206.1,y:571.35},0).wait(1).to({x:1211.95,y:572.35},0).wait(1).to({x:1217.8,y:573.4},0).wait(1).to({x:1223.65,y:574.4},0).wait(1).to({x:1229.5,y:575.45},0).wait(1).to({x:1235.35,y:576.45},0).wait(1).to({x:1241.2,y:577.5},0).wait(1).to({x:1247.05,y:578.5},0).wait(1).to({x:1252.9,y:579.55},0).wait(1).to({x:1258.75,y:580.6},0).wait(1).to({x:1264.6,y:581.6},0).wait(1).to({x:1270.5,y:582.65},0).wait(1).to({x:1276.35,y:583.65},0).wait(1).to({x:1282.2,y:584.7},0).wait(1).to({x:1288.05,y:585.7},0).wait(1).to({x:1293.9,y:586.75},0).wait(1).to({x:1299.75,y:587.75},0).wait(1).to({x:1305.6,y:588.8},0).wait(15).to({x:1305.9,y:588.75},0).wait(1).to({x:1305.85,y:588.7,alpha:0.9375},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.8125},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.6875},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4375},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.3125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1875},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.0625},0).wait(1).to({alpha:0},0).wait(1).to({x:1310.6,y:589.7},0).wait(1).to({x:1310.55,y:589.65},0).wait(62).to({_off:true},1).wait(241));

	// kanalCervenyStranaVpravo
	this.instance_16 = new lib.kanalCervenyStranaVpravo();
	this.instance_16.setTransform(1199.6,727.7,1.6271,1.3887,0,0,0,12.7,33.2);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(133).to({_off:false},0).to({alpha:1},15).wait(93).to({scaleX:0.8303,x:1189.55},5).wait(30).to({scaleX:1.6271,x:1199.6},5).wait(189));

	// _kanalCervenyStranaVlevo
	this.instance_17 = new lib.kanalCervenyStranaVlevo();
	this.instance_17.setTransform(1244.15,730.5,1.5414,1.3887,0,0,0,13.8,35.2);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(133).to({_off:false},0).to({alpha:1},15).wait(93).to({scaleX:0.6142,x:1255.35},5).wait(30).to({scaleX:1.5414,x:1244.15},5).wait(189));

	// Sterd
	this.instance_18 = new lib.Sterd();
	this.instance_18.setTransform(1220.55,728.65,2.1825,2.0234,0,0,0,16.1,24.8);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(133).to({_off:false},0).to({alpha:1},15).wait(322));

	// Vrstva_15
	this.instance_19 = new lib.Co();
	this.instance_19.setTransform(1225.75,512.1,1.3952,1.3952,0,0,0,19.2,14.1);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(234).to({_off:false},0).wait(1).to({regX:19,regY:13.8,x:1221.35,y:516.7,alpha:0.0667},0).wait(1).to({x:1217.25,y:521.7,alpha:0.1333},0).wait(1).to({x:1213.15,y:526.7,alpha:0.2},0).wait(1).to({x:1209.1,y:531.75,alpha:0.2667},0).wait(1).to({x:1205,y:536.75,alpha:0.3333},0).wait(1).to({x:1200.9,y:541.75,alpha:0.4},0).wait(1).to({x:1196.8,y:546.8,alpha:0.4667},0).wait(1).to({x:1192.75,y:551.8,alpha:0.5333},0).wait(1).to({x:1188.65,y:556.8,alpha:0.6},0).wait(1).to({x:1184.55,y:561.85,alpha:0.6667},0).wait(1).to({x:1180.45,y:566.85,alpha:0.7333},0).wait(1).to({x:1176.4,y:571.85,alpha:0.8},0).wait(1).to({x:1172.3,y:576.9,alpha:0.8667},0).wait(1).to({x:1168.2,y:581.9,alpha:0.9333},0).wait(1).to({x:1164.1,y:586.9,alpha:1},0).wait(221));

	// Vrstva_14
	this.instance_20 = new lib.PrvekZeleny();
	this.instance_20.setTransform(1217.85,512.55,1.1342,1.1342,0,0,0,91.2,23.2);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(234).to({_off:false},0).wait(1).to({regX:97.7,regY:17.1,x:1218.35,y:506.75,alpha:0.0667},0).wait(1).to({x:1211.55,y:507.9,alpha:0.1333},0).wait(1).to({x:1204.7,y:509,alpha:0.2},0).wait(1).to({x:1197.9,y:510.15,alpha:0.2667},0).wait(1).to({x:1191.05,y:511.25,alpha:0.3333},0).wait(1).to({x:1184.25,y:512.4,alpha:0.4},0).wait(1).to({x:1177.4,y:513.5,alpha:0.4667},0).wait(1).to({x:1170.6,y:514.65,alpha:0.5333},0).wait(1).to({x:1163.75,y:515.75,alpha:0.6},0).wait(1).to({x:1156.95,y:516.9,alpha:0.6667},0).wait(1).to({x:1150.1,y:518,alpha:0.7333},0).wait(1).to({x:1143.3,y:519.15,alpha:0.8},0).wait(1).to({x:1136.45,y:520.25,alpha:0.8667},0).wait(1).to({x:1129.65,y:521.4,alpha:0.9333},0).wait(1).to({x:1122.8,y:522.5,alpha:1},0).wait(15).to({alpha:0.9286},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0},0).wait(193));

	// Vrstva_13
	this.instance_21 = new lib.PrvekHnedy();
	this.instance_21.setTransform(1116.4,524.65,1.1974,1.1974,0,0,0,38.9,17.9);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(249).to({_off:false},0).wait(1).to({regX:38.2,regY:18.5,x:1115.5,y:525.3},0).wait(28).to({x:1112.9,y:529.95,alpha:0.0667},0).wait(1).to({x:1110.25,y:534.55,alpha:0.1333},0).wait(1).to({x:1107.6,y:539.15,alpha:0.2},0).wait(1).to({x:1105,y:543.75,alpha:0.2667},0).wait(1).to({x:1102.35,y:548.35,alpha:0.3333},0).wait(1).to({x:1099.7,y:552.95,alpha:0.4},0).wait(1).to({x:1097.05,y:557.55,alpha:0.4667},0).wait(1).to({x:1094.45,y:562.15,alpha:0.5333},0).wait(1).to({x:1091.8,y:566.75,alpha:0.6},0).wait(1).to({x:1089.15,y:571.35,alpha:0.6667},0).wait(1).to({x:1086.5,y:575.95,alpha:0.7333},0).wait(1).to({x:1083.9,y:580.55,alpha:0.8},0).wait(1).to({x:1081.25,y:585.15,alpha:0.8667},0).wait(1).to({x:1078.6,y:589.75,alpha:0.9333},0).wait(1).to({x:1075.95,y:594.35,alpha:1},0).wait(178));

	// Layer_1
	this.instance_22 = new lib.ClipGroup_7();
	this.instance_22.setTransform(1245.9,1165.45,1,1,0,0,0,111.7,88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(470));

	// Vrstva_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7834F").s().p("AjeDFQgugKgtgPQg2gSgwgXQhIgkgehEQgehDAahFQAWg6AzgcQArgWA5ABQAhABA9AMIApAIQBxAXA6ACQBzAFB+ghQBOgVApgDQBIgGAzAcQApAXAZAoQAYApADAyQADA1gWAwQgWAvgpAdQg9AshhAVQg4ANhmAKQg4AFg4AAQh8AAh6gbgAgWAFQAEAEAAAGQAABTgUBTQgBAFADAEQADAEAFABIAcAAQAEABADgDQAEgDAAgEQARhLAAhGQAAgGAEgEQAFgEAFAAQAGAAAEAEQAEAFAAAFQAABDgPBKQgBAFAEAEQADAFAFgBIAPAAQANgBAEgHIAIgZIAUhQQABgGAFgDQAGgDAFACQAGABADAFQADAFgCAGIgMAwQgBAGgEAMQgDAMADAHQAGAOAUABQAVAAAHgaQAHgaAEgeQAFgnAAhNIAAgyQAAgGAEgEQAFgEAFAAQAGAAAEAFQAEAEAAAGIAAAxQAAA7gCAeQgDAxgLAmQgBAGAEAEQADAFAGgBIAbgEQAJgBAAgKQgBgXAKgoQAHgaABgMQACgVgFgRQgBgFACgFQADgFAGgCQAFgCAGADQAFADABAFQAHAWgDAZQgBAQgIAcQgHAfgBAOQAAAGAEAEQAFADAFgBIAWgFIAIgCQAFgBADgCIACgFQAEgKABgZIABgnQgBgpgHglQAAgFADgFQADgEAGgBQAFgBAFADQAFADABAGQAGAjACAjQABASgBASIgCARQAAAKAGAFQAMALANgSQAFgIACgKIACgUQADg5gGg0QgBgGAEgEQAEgFAFgBQAGAAAFADQAEAEABAGQACASACAkIgBAVQAAANACAIQABAKAEADQAFAEAHgBQALgCAMgUQAGgIAJgUQARgngDgsQgEhDgsgqQgFgFgHAEQgHADABAHQABAkgHAcQgBAGgFADQgFADgGgBIgBAAQgFgCgDgFQgDgEABgGQAJgkgEglIgBgNQgCgGgFgFQgIgGgUgDQgFgBgEAEQgEADAAAGQABAOgFAkQgGApADASQABAGgEAEQgDAFgGABQgEABgCgCQgJgCgBgJQgDgWAGgtQAFgggBgSQgBgMgPADQgMABgJAHIgFAEIgDAHQgDAIABAKQAEAlABAlIAAAgQAAAGgEAFQgEAEgGAAIgFgBQgJgDAAgKIgBggQAAghgDgdIgBgRQgCgLgGgEQgIgFgOADIgWAGIgfAIQgPAEgEAJIgDANQAEAcgHA+QgBAGgFAEQgFAEgFgBIgDgBQgLgEABgLQAFgjABgSIAAgWQgBgOgHgFIgHgEQgGgCgKABIgQACQgKACAAAKQABAagCAmIgCAxQAAAFgEAFQgFAEgFAAIgFgBQgJgDAAgKIACgyQACgpgBgTQAAgEgEgDQgDgEgFABIghABQgKAAgBAKIgDBBQAAAGgEAEQgEAEgGAAIgEgBQgLgDABgLIABgYIABgmIgBgFQgCgGgHgBIgNgCIgUgCQgFAAgDADQgEACAAAFQgDAYABAXIAAAIIAAApQAEAFgDAHQgCAGgFACQgFACgGgBQgJgEgCgMQgCgLACgkIAAgHQAAgiACgSQAAgEgDgDQgCgEgFgBIgUgDQgOgDgEABQgGABgCAJIgBAPIgDAaQAAAGgFAEQgEAEgGgBIgDgBQgLgDABgLIACgVIACgRQABgKgEgFQgEgGgKgCQgKgDgEAHQgCAEABAMIgDA4QgDAlgFAcQAAAGgFADQgFAEgGgBIgCgBQgFgBgCgFQgDgEABgFQAJg6AChNQAAgEgCgEQgDgDgEgBIgngGIgRgCQgMgCgEAEQgGAEABAJIABAOQACANgCATIgGAbQgHAZACANQABAGgDAFQgDAFgGABIgHgBQgIgCgBgIQgEgSAJghIAFgXQABgPgBgPQgCgTgGgDQgGgFgQAGQgHACgQAIQgqAXgSAwQgJAYgBAYIgBAMQAAAHACAFIAEAFQACACADgBQACgBACgGIADgIIAPghQADgFAFgCQAGgCAFACQAGADABAFQACAGgCAFIgQAhIgGARIgHAQQgEAKABAHIACAJIACAFQAQAhAuAaIACgBQAXgMABhIQAAgGAEgEQAFgEAFAAQAGAAAEAEQAEAEAAAGQgBAkgFAWQgDAPgGALIgEAKQgBAFAFAEQADAEASAGQANAGAKAAQAHAAABgFIAGgZIAFgSQADgWAEgnQAAgGAEgEQAFgEAGABQAGAAADAFQAEAEAAAGQgCAggFAfIgGAWIgFAQQgCAKAEAGQAEAHALAEIATAFQAHACAFgHIAFgMIAHgZQAIgZAGgYQALgsAJg3QABgGAFgDQAFgEAFABQAGABADAFQAEAFgBAFQgIA0gMAvIgNAxIgHAXQgFAKAFAIQADAFAKAGIARADIANADQAJACAEgDQAKgFAEgdIAFgmIAKhBQABgGAFgDQAEgEAGABQAGABADAFQAEAFgBAFQgOBbgFAnQAAAFADAEQADADAEABIAdADQAJABADgKQAVhTAAhUQAAgGAEgEQAFgEAFAAQAGAAAEAEg");
	this.shape.setTransform(1423.221,1079.8622,2.8002,2.8002,-37.1619);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFB655").ss(2.8).p("AgribQgtgCg+gLQhGgOgkgHQg8gMgiAAQg0gBgnAUQguAZgVA1QgZBDAfA+QAdA9BBAgQBXArBmAWQCxAnCxgRQBogKA5gNQBagVA7gpQBMg3gBhlQgBhphUguQgwgahDAFQgpADhMAVQiAAih2gFg");
	this.shape_1.setTransform(1423.1692,1079.9184,2.8002,2.8002,-37.1619);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF2DA").s().p("AjbC3QhmgWhXgrQhBgggdg9Qgfg+AZhDQAVg1AugZQAngUA0ABQAiAAA8AMIBqAVQA+ALAtACQB2AFCAgiQBMgVApgDQBDgFAwAaQBUAuABBpQABBlhMA3Qg7AphaAVQg5ANhoAKQg4AFg3AAQh5AAh6gbg");
	this.shape_2.setTransform(1423.1692,1079.9184,2.8002,2.8002,-37.1619);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(470));

	// Vrstva_51
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ATsIRIAEgCQAEgCAFADIADABgAL9IRQgIgSgEgUQgCgFADgEQADgFAFgBQAFgBAEACQAFADABAFQAGAYAJAUgAIwIRIAEgCQAEgCAFADIADABgABBIRQgIgSgEgUQgCgFADgEQADgFAFgBQAFgBAEACQAFADABAFQAGAYAJAUgAiAIRIAEgCQAFgCAFADIADABgApuIRQgIgSgFgUQgBgFADgEQACgFAFgBQAFgBAFACQAEADACAFQAFAYAKAUgAsWIRIAEgCQAFgCAFADIADABgA0EIRQgIgSgFgUQgBgFADgEQACgFAFgBQAFgBAFACQAEADACAFQAFAYAKAUgAUFHvQgFgBgDgEQgDgFABgFQAGgbAAgeIAAAAIAAgIQAAgFAEgDQADgFAFAAQAFAAAEAFQAEADAAAFIAAAIIAAAAQAAAhgGAdQgCAFgEADQgDACgEAAIgCAAgAJJHvQgFgBgDgEQgDgFABgFQAGgbAAgeIAAAAIAAgIQAAgFAEgDQADgFAFAAQAFAAAEAFQAEADAAAFIAAAIIAAAAQAAAhgGAdQgCAFgEADQgDACgEAAIgCAAgAhnHvQgFgBgDgEQgDgFACgFQAFgbAAgeIAAAAIAAgIQAAgFAEgDQAEgFAFAAQAFAAAEAFQADADAAAFIAAAIIAAAAQAAAhgGAdQgBAFgEADQgEACgDAAIgDAAgAr9HvQgFgBgDgEQgDgFACgFQAFgbAAgeIAAAAIAAgIQAAgFAEgDQAEgFAFAAQAFAAAEAFQADADAAAFIAAAIIAAAAQAAAhgGAdQgBAFgEADQgEACgDAAIgDAAgALtG1QgEgEAAgEIAAgHQAAgfAGgcQAAgGAFgCQAEgDAFABQAFAAADAFQADAFgBAEQgFAbAAAcIAAAHQAAAEgEAEQgEAEgFAAQgFAAgDgEgAAxG1QgEgEAAgEIAAgHQAAgfAGgcQAAgGAFgCQAEgDAFABQAFAAADAFQADAFgBAEQgFAbAAAcIAAAHQAAAEgEAEQgEAEgFAAQgFAAgDgEgAp/G1QgEgEAAgEIAAgHQAAgfAGgcQABgGAEgCQAFgDAFABQAFAAADAFQADAFgBAEQgGAbAAAcIAAAHQAAAEgDAEQgEAEgFAAQgFAAgEgEgA0VG1QgEgEAAgEIAAgHQAAgfAGgcQABgGAEgCQAFgDAFABQAFAAADAFQADAFgBAEQgGAbAAAcIAAAHQAAAEgDAEQgEAEgFAAQgFAAgEgEgAT/FuQgEgDgCgFQgHgcgNgZQgDgFACgFQABgEAFgDQAFgCAFABQAEACADAFQAOAbAIAfQACAFgDAFQgDAEgFABIgDABQgDAAgDgCgAJDFuQgEgDgCgFQgHgcgNgZQgDgFACgFQABgEAFgDQAFgCAFABQAEACADAFQAOAbAIAfQACAFgDAFQgDAEgFABIgDABQgDAAgDgCgAhsFuQgFgDgBgFQgHgcgOgZQgCgFABgFQACgEAFgDQAEgCAFABQAFACACAFQAPAbAIAfQABAFgCAFQgDAEgFABIgEABQgDAAgCgCgAsCFuQgFgDgBgFQgHgcgOgZQgCgFABgFQACgEAFgDQAEgCAFABQAFACACAFQAPAbAIAfQABAFgCAFQgDAEgFABIgEABQgDAAgCgCgAMIFAQgFgDgBgEQgCgFACgFQANgcAVgaQADgDAFgBQAFgBAEAEQAEADABAGQAAAFgDAEQgTAWgLAaQgDAEgEACIgEABIgGgBgABMFAQgFgDgBgEQgCgFACgFQANgcAVgaQADgDAFgBQAFgBAEAEQAEADABAGQAAAFgDAEQgTAWgLAaQgDAEgEACIgEABIgGgBgApjFAQgFgDgCgEQgCgFADgFQANgcAUgaQADgDAGgBQAFgBAEAEQAEADAAAGQABAFgDAEQgTAWgMAaQgCAEgFACIgEABIgFgBgAz5FAQgFgDgCgEQgCgFADgFQANgcAUgaQADgDAGgBQAFgBAEAEQAEADAAAGQABAFgDAEQgTAWgMAaQgCAEgFACIgEABIgFgBgATOEGQgGAAgDgEIgPgQIgZgWQgEgEgBgEQAAgFADgEQADgFAFgBQAFAAAFAEQAOAKANANIAQARQADAEAAAFQgBAFgDAEQgEADgEAAIgBAAgAISEGQgGAAgDgEIgPgQIgZgWQgEgEgBgEQAAgFADgEQADgFAFgBQAFAAAFAEQAOAKANANIAQARQADAEAAAFQgBAFgDAEQgEADgEAAIgBAAgAieEGQgFAAgDgEIgPgQIgZgWQgFgEAAgEQgBgFAEgEQADgFAFgBQAFAAAEAEQAOAKANANIAQARQADAEAAAFQAAAFgEAEQgDADgFAAIgBAAgAs0EGQgFAAgDgEIgPgQIgZgWQgFgEAAgEQgBgFAEgEQADgFAFgBQAFAAAEAEQAOAKANANIAQARQADAEAAAFQAAAFgEAEQgDADgFAAIgBAAgANVDkQgFAAgDgFQgEgDABgGQAAgEAEgEQAYgVAcgOQAEgCAFABQAFACACAFQADAFgCAEQgBAFgFADQgZAMgWATQgDADgFAAIgBAAgACZDkQgFAAgDgFQgEgDABgGQAAgEAEgEQAYgVAcgOQAEgCAFABQAFACACAFQADAFgCAEQgBAFgFADQgZAMgWATQgDADgFAAIgBAAgAoWDkQgFAAgEgFQgDgDAAgGQABgEAEgEQAYgVAbgOQAFgCAFABQAEACADAFQACAFgBAEQgCAFgEADQgZAMgWATQgEADgEAAIgBAAgAysDkQgFAAgEgFQgDgDAAgGQABgEAEgEQAYgVAbgOQAFgCAFABQAEACADAFQACAFgBAEQgCAFgEADQgZAMgWATQgEADgEAAIgBAAgARsC9QgagLgcgGQgFgBgDgEQgDgFABgFQABgFAEgDQAFgDAFACQAfAFAdAOQAEACACAFQACAFgCAFQgDAEgEACIgEABIgGgCgAGwC9QgagLgcgGQgFgBgDgEQgDgFABgFQABgFAEgDQAFgDAFACQAfAFAdAOQAEACACAFQACAFgCAFQgDAEgEACIgEABIgGgCgAj/C9QgagLgdgGQgFgBgDgEQgDgFACgFQAAgFAFgDQAEgDAFACQAgAFAcAOQAFACACAFQABAFgCAFQgCAEgFACIgEABIgFgCgAuVC9QgagLgdgGQgFgBgDgEQgDgFACgFQAAgFAFgDQAEgDAFACQAgAFAcAOQAFACACAFQABAFgCAFQgCAEgFACIgEABIgFgCgAO4CtQgEgDgBgFQgCgFADgEQADgFAFgBQAegHAhgBQAFAAAEAEQAEADAAAGQAAAEgEAFQgDADgFAAQgfAAgbAIIgDAAQgEAAgDgCgAD8CtQgEgDgBgFQgCgFADgEQADgFAFgBQAegHAhgBQAFAAAEAEQAEADAAAGQAAAEgEAFQgDADgFAAQgfAAgbAIIgDAAQgEAAgDgCgAmzCtQgFgDgBgFQgBgFADgEQACgFAFgBQAegHAigBQAFAAAEAEQADADAAAGQAAAEgDAFQgEADgFAAQgfAAgbAIIgDAAQgDAAgDgCgAxJCtQgFgDgBgFQgBgFADgEQACgFAFgBQAegHAigBQAFAAAEAEQADADAAAGQAAAEgDAFQgEADgFAAQgfAAgbAIIgDAAQgDAAgDgCgAlvAwQgEgEAAgFQAAgGAEgDQADgEAGAAQAdAAAbgGQAFgCAEADQAFACABAGQABAEgDAFQgCAEgFACQgeAHggAAQgFAAgEgDgAmnAtQgfgHgcgNQgFgCgCgFQgCgFADgEQACgFAFgBQAEgCAFACQAaALAcAHQAFAAADAEQADAFgBAFQgBAFgFADQgDACgEAAIgCAAgAFBAdQgEgEAAgFQAAgGADgDQAEgEAFAAQAeAAAbgHQAEAAAFACQAEADACAFQABAFgDAEQgDAEgFACQgdAGggABQgGAAgDgDgAEIAaQgfgHgcgNQgFgCgBgEQgCgFACgEQACgFAFgBQAFgDAFADQAZALAcAGQAFAAADAEQADAFgBAFQgBAFgEADQgEACgDAAIgDAAgAj3AYQgFgDgCgEQgDgFACgFQACgEAEgDQAZgLAXgTQAEgEAFABQAFABADADQAEAEgBAFQAAAFgEAEQgZAUgcAOIgFABIgEAAgAG4AFQgFgCgCgEQgCgFACgFQABgFAFgCQAZgMAWgTQAEgDAFAAQAFABAEAEQADAEAAAEQgBAFgEAEQgYAVgcANIgGABIgEAAgAoYgIQgNgKgMgMIgTgUQgDgFAAgEQABgGAEgDQAEgDAFAAQAFABADAEIASATIAXAUQAEADAAAFQABAFgDAEQgEAEgFABIgBAAQgEAAgEgDgACYgbQgOgKgLgMIgTgUQgEgFABgEQAAgGAEgDQAEgDAFAAQAFAAAEAFIARATIAXAUQAEADABAFQAAAFgDAEQgDAEgFABIgCAAQgEAAgDgDgAiggzQgEgEgBgFQAAgFADgEQATgXAMgaQACgFAFgBQAFgCAFADQAEACACAEQACAFgCAFQgOAcgUAZQgEAFgFAAIgBAAQgFAAgDgCgAIQhHQgFgDAAgFQgBgFAEgFQASgXANgZQACgFAFgBQAEgCAFACQAFADACAEQABAFgCAFQgOAcgUAZQgDAEgFABIgCAAQgEAAgDgDgApfhgQgFgDgCgEQgOgbgHgfQgBgFADgEQACgEAFgBQAFgCAFADQAEACACAGQAGAbANAZQACAEgCAGQgCAFgEACIgGABIgEAAgABRh0QgFgBgCgFQgOgbgHgfQgCgFADgEQADgFAFAAQAFgCAEADQAFACABAGQAHAbAMAZQACAEgBAGQgCAFgFACIgFABIgEgBgAhnicQgFgCgDgEQgDgFACgFQAFgaAAgeIAAAAIAAgJQAAgEAEgEQAEgEAFAAQAFAAAEAEQADAEAAAEIAAAJIAAAAQAAAggGAeQgBAEgEAEQgEACgDAAIgDAAgAJJivQgFgCgDgEQgDgFABgFQAGgbAAgdIAAAAIAAgIQAAgGAEgDQADgEAFAAQAFAAAEAEQAEAEAAAFIAAAIIAAAAQAAAggGAeQgCAEgEAEQgDACgEAAIgCAAgAp/jWQgEgEAAgFIAAgGQAAgfAGgdQABgFAEgDQAFgDAFABQAFABADAFQADAEgBAFQgGAaAAAdIAAAGQAAAFgDAEQgEADgFABQgFgBgEgDgAAxjpQgEgEAAgFIAAgGQAAgfAGgdQAAgFAFgDQAEgDAFACQAFAAADAFQADAEgBAFQgFAaAAAdIAAAGQAAAFgEAEQgEADgFABQgFgBgDgDgAhskdQgFgEgBgEQgHgcgOgZQgCgFABgFQACgFAFgCQAEgDAFACQAFABACAFQAPAcAIAeQABAFgCAFQgDAEgFACIgEAAQgDAAgCgBgAJDkxQgEgDgCgEQgHgdgNgYQgDgGACgEQABgFAFgCQAFgDAFACQAEABADAFQAOAcAIAfQACAEgDAFQgDAEgFACIgDAAQgDAAgDgCgApjlMQgFgCgCgEQgCgGADgEQANgcAUgaQADgEAGgBQAFAAAEADQAEADAAAGQABAFgDAEQgTAXgMAaQgCAEgFACIgEABIgFgCgABMlfQgFgCgBgEQgCgGACgEQANgcAVgaQADgEAFAAQAFgBAEADQAEAEABAFQAAAFgDAEQgTAWgLAbQgDAEgEACIgEABIgGgCgAiemGQgFAAgDgDIgPgQQgNgMgMgLQgFgDAAgFQgBgFAEgEQADgEAFgBQAFgBAEAEQAOAKANAOIAQARQADADAAAGQAAAFgEAEQgDADgFAAIgBgBgAISmYQgGgBgDgEIgPgPIgZgXQgEgDgBgFQAAgFADgEQADgFAFAAQAFgBAFAEQAOAKANAOIAQARQADAEAAAFQgBAFgDAEQgEADgEAAIgBAAgAoWmoQgFAAgEgEQgDgEAAgFQABgFAEgDQAYgVAbgOQAFgDAFACQAEABADAGQACAEgBAFQgCAEgEADQgZANgWATQgEADgEAAIgBgBgACZm7QgFAAgDgEQgEgEABgFQAAgFAEgDQAYgVAcgOQAEgDAFACQAFABACAFQADAFgCAFQgBAFgFACQgZANgWATQgDADgFAAIgBgBgAj/nOQgagMgdgGQgFgBgDgEQgDgEACgGQAAgEAFgEQAEgCAFABQAgAGAcANQAFADACAEQABAFgCAFQgCAEgFACIgEABIgFgBgAmznfQgFgCgBgGQgBgEADgFQACgFAFAAQAegIAiAAQAFgBAEAEQADADAAAGQAAAFgDAEQgEADgFAAQgfABgbAHIgDAAQgDAAgDgCgAGwnhQgagMgcgFQgFgCgDgEQgDgFABgFQABgEAEgEQAFgCAFABQAfAGAdANQAEACACAFQACAFgCAFQgDAFgEACIgEAAIgGgBgAD8nxQgEgEgBgFQgCgEADgFQADgFAFgBQAegHAhAAQAFAAAEADQAEAEAAAFQAAAFgEAEQgDAEgFgBQgfABgbAHIgDAAQgEAAgDgBg");
	this.shape_3.setTransform(1266.875,893.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(470));

	// Vrstva_27
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AlsG1QgEgDAAgFQAAgGADgDQAEgEAFAAQAegBAbgGQAFgBAEADQAEACACAGQABAEgDAFQgDAEgFABQgdAHggABIgBAAQgFAAgDgEgAmlGyQgfgGgcgNQgFgCgBgFQgCgFACgFQACgEAFgCQAFgCAFADQAZALAcAGQAFABADAEQADAFgBAFQgBAFgEADQgDACgEAAIgDgBgAFDGdQgEgEAAgFQAAgFAEgEQADgEAGAAQAdAAAbgGQAFgCAEADQAFADABAFQABAFgDAEQgCAFgFABQgeAHggAAIAAAAQgFAAgEgDgAj1GdQgFgCgCgEQgCgFACgFQABgFAFgCQAZgMAWgTQAEgEAFABQAGAAADAEQADAEAAAFQgBAFgEAEQgYAVgcANIgFACIgFgBgAELGaQgfgGgcgOQgFgCgCgEQgCgFADgFQACgFAFgCQAEgBAFACQAaAMAcAFQAFABADAFQADAEgBAFQgBAFgFADQgDACgDAAIgDAAgAG7GEQgFgBgCgFQgDgEACgFQACgFAEgCQAagNAWgTQAEgDAFAAQAFABADAEQAEAEgBAFQAAAFgEADQgZAVgcAOIgFABIgEgBgAoVF9QgNgKgMgMIgTgVQgEgEABgFQAAgFAEgDQAEgEAFABQAFAAAEAEIARATQALALAMAJQAEAEABAFQAAAFgDAEQgDAEgFABIgCAAQgEAAgDgDgACaFlQgNgLgMgMIgTgUQgDgEAAgFQABgFAEgEQAEgDAFAAQAFABADAEIASASQALALAMAKQAEADAAAFQABAFgDAEQgEAFgFAAIgBAAQgEAAgEgCgAidFRQgFgDAAgFQgBgGAEgEQASgXANgZQACgFAFgCQAFgBAEACQAFACACAFQABAFgCAFQgNAcgVAZQgDAEgFABIgCAAQgEAAgDgDgAISE5QgEgEgBgFQAAgFADgEQATgXAMgaQACgEAFgCQAFgCAFADQAEACACAFQACAEgCAFQgOAdgUAZQgEAEgFAAIgBAAQgEAAgEgCgApcEkQgFgCgCgEQgOgbgHgfQgCgFADgEQADgFAFgBQAFgBAEACQAFADABAFQAHAcAMAZQACAEgBAFQgCAFgFACIgFACIgEgBgABTEMQgFgCgCgFQgOgbgHgeQgBgFADgFQACgEAFgCQAFgBAFADQAEADACAFQAGAbANAZQACAFgCAFQgCAFgEACIgFABIgFAAgAhkDoQgFgBgDgFQgDgEABgFQAGgbAAgeIAAAAIAAgIQAAgFAEgEQADgDAFAAQAGAAADADQAEAEAAAFIAAAIIAAAAQAAAhgGAdQgBAFgFADQgDACgDAAIgDAAgAJLDPQgFgBgDgEQgCgEABgFQAFgbAAgeIAAgBIAAgHQAAgFAEgEQAEgEAFAAQAFAAAEAEQADAEAAAFIAAAHIAAABQAAAggGAeQgBAFgEADQgDACgEAAIgDgBgAp8CuQgEgDAAgFIAAgGQAAggAGgcQABgFAEgDQAEgDAFABQAFABADAEQADAFgBAFQgFAaAAAdIAAAGQAAAFgEADQgDAEgGAAQgFAAgDgEgAAzCWQgEgEAAgFIAAgGQAAgfAGgdQABgFAEgDQAFgDAFABQAFABADAFQADAEgBAFQgGAbAAAcIAAAGQAAAFgDAEQgEAEgFAAQgFAAgEgEgAhqBnQgEgDgCgFQgHgcgNgZQgDgFACgEQABgFAFgDQAFgCAFABQAEACADAEQAPAcAHAfQACAFgDAEQgDAFgFABIgDABQgDAAgDgCgAJGBPQgFgDgBgFQgHgcgOgaQgCgEABgFQACgFAFgCQAEgCAFABQAFABACAFQAPAcAIAfQABAFgCAEQgDAEgFACIgDAAQgEAAgCgBgAphA5QgFgCgBgFQgCgFACgEQANgdAVgYQADgEAFgBQAFAAAEADQAEADABAFQAAAGgDADQgSAWgMAaQgDAFgEABIgFABIgFgBgABPAhQgFgDgCgFQgCgEADgFQANgbAUgaQADgEAGAAQAFgBAEAEQAEADAAAFQABAFgDAEQgTAWgMAZQgCAFgFACIgEABIgFgBgAibAAQgFAAgEgEIgPgQQgMgMgNgKQgEgDgBgFQAAgFADgFQADgEAFAAQAGgBAEADQAOALANAOIAQARQADADAAAGQAAAFgEADQgEADgFAAIAAAAgAIUgYQgFgBgDgDIgPgRQgMgLgNgKQgEgEgBgFQgBgFAEgEQADgEAFgBQAFAAAEADQAOALANANIAQARQAEAEgBAFQAAAFgEADQgDAEgFAAIgBAAgAoUgiQgFAAgDgEQgEgEABgFQAAgFAEgEQAYgUAcgOQAEgDAFACQAFABACAFQADAFgCAFQgBAEgFADQgZANgWASQgDADgFAAIgBAAgACcg6QgFgBgEgEQgDgEAAgFQABgFAEgDQAYgVAbgOQAFgCAFABQAFACACAFQACAEgBAFQgCAFgEACQgZANgWATQgEADgEAAIgBAAgAj9hJQgagLgcgGQgFgBgDgEQgDgFABgFQABgFAEgDQAFgDAFABQAfAHAdANQAEACACAFQACAFgCAEQgDAFgEACIgFABIgFgCgAmxhZQgEgDgBgFQgCgFADgEQADgFAFgBQAegHAhgBQAFAAAEAEQAEADAAAFQAAAGgEADQgDAEgFAAQgfABgbAGIgDABQgEAAgDgCgAGzhhQgagMgdgGQgFAAgDgFQgCgEABgFQABgFAEgDQAEgDAFABQAgAGAcAOQAFACACAEQABAFgCAFQgCAFgFABIgEABIgFgBgAD/hyQgFgCgBgFQgBgFADgFQACgEAFgBQAegIAiAAQAFAAAEADQADAEAAAFQAAAFgDAEQgEAEgFAAQgeAAgcAHIgDAAQgDAAgDgCgAP/kNQgEgEAAgFQAAgFAEgEQADgEAGAAQAdAAAbgHQAFgBAEADQAFADABAFQABAFgDAEQgCAFgFABQgeAHggAAIAAAAQgFAAgEgDgAFDkNQgEgEAAgFQAAgFAEgEQADgEAGAAQAdAAAbgHQAFgBAEADQAFADABAFQABAFgDAEQgCAFgFABQgeAHggAAIAAAAQgFAAgEgDgAlskNQgEgEAAgFQAAgFADgEQAEgEAFAAQAeAAAbgHQAFgBAEADQAEADACAFQABAFgDAEQgDAFgFABQgdAHggAAIgBAAQgFAAgDgDgAwCkNQgEgEAAgFQAAgFADgEQAEgEAFAAQAeAAAbgHQAFgBAEADQAEADACAFQABAFgDAEQgDAFgFABQgdAHggAAIgBAAQgFAAgDgDgAPHkQQgfgGgcgNQgFgDgCgEQgCgFADgFQACgFAFgCQAEgBAFACQAaAMAcAFQAFABADAFQADAEgBAFQgBAFgFADQgDACgDAAIgDAAgAELkQQgfgGgcgNQgFgDgCgEQgCgFADgFQACgFAFgCQAEgBAFACQAaAMAcAFQAFABADAFQADAEgBAFQgBAFgFADQgDACgDAAIgDAAgAmlkQQgfgGgcgNQgFgDgBgEQgCgFACgFQACgFAFgCQAFgBAFACQAZAMAcAFQAFABADAFQADAEgBAFQgBAFgEADQgDACgEAAIgDAAgAw7kQQgfgGgcgNQgFgDgBgEQgCgFACgFQACgFAFgCQAFgBAFACQAZAMAcAFQAFABADAFQADAEgBAFQgBAFgEADQgDACgEAAIgDAAgAR3kmQgFgBgCgFQgDgEACgFQACgFAEgCQAagNAWgTQAEgDAFAAQAFABADAEQAEAEgBAFQAAAFgEADQgZAVgcAOIgFABIgEgBgAG7kmQgFgBgCgFQgDgEACgFQACgFAEgCQAagNAWgTQAEgDAFAAQAFABADAEQAEAEgBAFQAAAFgEADQgZAVgcAOIgFABIgEgBgAj1kmQgFgBgCgFQgCgEACgFQABgFAFgCQAZgNAWgTQAEgDAFAAQAGABADAEQADAEAAAFQgBAFgEADQgYAVgcAOIgFABIgFgBgAuLkmQgFgBgCgFQgCgEACgFQABgFAFgCQAZgNAWgTQAEgDAFAAQAGABADAEQADAEAAAFQgBAFgEADQgYAVgcAOIgFABIgFgBgANWlFQgNgLgMgMIgTgUQgDgEAAgFQABgFAEgEQAEgDAFAAQAFABADAEIASASQALALAMAKQAEADAAAFQABAFgDAFQgEAEgFAAIgBAAQgEAAgEgCgACalFQgNgLgMgMIgTgUQgDgEAAgFQABgFAEgEQAEgDAFAAQAFABADAEIASASQALALAMAKQAEADAAAFQABAFgDAFQgEAEgFAAIgBAAQgEAAgEgCgAoVlFQgNgLgMgMIgTgUQgEgEABgFQAAgFAEgEQAEgDAFAAQAFABAEAEIARASQALALAMAKQAEADABAFQAAAFgDAFQgDAEgFAAIgCAAQgEAAgDgCgAyrlFQgNgLgMgMIgTgUQgEgEABgFQAAgFAEgEQAEgDAFAAQAGABADAEIARASQALALAMAKQAEADABAFQAAAFgDAFQgDAEgFAAIgCAAQgEAAgDgCgATOlyQgEgDgBgFQAAgFADgEQATgXAMgaIADgEIARAAQACACABAEQACAEgCAFQgOAdgUAZQgEAEgFAAIgBAAQgEAAgEgDgAISlyQgEgDgBgFQAAgFADgEQATgXAMgaIADgEIARAAQACACABAEQACAEgCAFQgOAdgUAZQgEAEgFAAIgBAAQgEAAgEgDgAidlyQgFgDAAgFQgBgFAEgEQASgXANgaIADgEIAQAAQADACABAEQABAEgCAFQgNAdgVAZQgDAEgFAAIgCAAQgEAAgDgDgAszlyQgEgDgBgFQgBgFAEgEQASgXANgaIADgEIAQAAQADACABAEQABAEgCAFQgNAdgVAZQgDAEgFAAIgCAAQgEAAgDgDgAMPmfQgFgBgCgFIgIgTIAbAAIAEAIQACAFgCAFQgCAFgEACIgFABIgFgBgABTmfQgFgBgCgFIgIgTIAbAAIAEAIQACAFgCAFQgCAFgEACIgFABIgFgBgApcmfQgFgBgCgFIgJgTIAbAAIAEAIQACAFgBAFQgCAFgFACIgFABIgEgBgAzymfQgFgBgCgFIgJgTIAbAAIAEAIQACAFgBAFQgCAFgFACIgFABIgEgBg");
	this.shape_4.setTransform(1266.4629,990.2751);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(470));

	// Vrstva_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_5.setTransform(1636.6613,1356.7351,2.1373,2.1373,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_6.setTransform(1627.6845,1356.7351,2.1373,2.1373,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_7.setTransform(1618.7078,1356.7351,2.1373,2.1373,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_8.setTransform(1609.731,1356.7351,2.1373,2.1373,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_9.setTransform(1601.2885,1356.7351,2.1373,2.1373,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_10.setTransform(1591.9911,1356.7351,2.1373,2.1373,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_11.setTransform(1584.1899,1356.7351,2.1373,2.1373,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_12.setTransform(1575.2131,1356.7351,2.1373,2.1373,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_13.setTransform(1567.4119,1356.7351,2.1373,2.1373,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_14.setTransform(1559.29,1356.7351,2.1373,2.1373,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_15.setTransform(1551.4888,1356.7351,2.1373,2.1373,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#D61ACD").ss(1,1).p("AAKgMIgTAZ");
	this.shape_16.setTransform(1544.3821,1353.8497,2.1373,2.1373,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#D61ACD").ss(1,1).p("AALgKIgVAW");
	this.shape_17.setTransform(1538.0236,1348.5598,2.1373,2.1373,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#D61ACD").ss(1,1).p("AALgKIgWAV");
	this.shape_18.setTransform(1532.5734,1343.1096,2.1373,2.1373,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#D61ACD").ss(1,1).p("AALgKIgWAV");
	this.shape_19.setTransform(1526.6957,1336.6976,2.1373,2.1373,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_20.setTransform(1517.8258,1332.3695,2.1373,2.1373,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_21.setTransform(1507.9941,1332.3695,2.1373,2.1373,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_22.setTransform(1499.1242,1332.3695,2.1373,2.1373,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_23.setTransform(1490.0405,1332.3695,2.1373,2.1373,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#D61ACD").ss(1,1).p("AAAgPIAAAf");
	this.shape_24.setTransform(1481.0638,1332.3695,2.1373,2.1373,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#D61ACD").p("AF6A6Ii0AAQgkAAgXgZIhDhCQgZgYgiAAImGAA");
	this.shape_25.setTransform(1558.4885,1340.8654,2.1373,2.1373,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_26.setTransform(1362.1214,1318.1563,2.1373,2.1373,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_27.setTransform(1371.205,1318.1563,2.1373,2.1373,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_28.setTransform(1380.1818,1318.1563,2.1373,2.1373,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_29.setTransform(1389.1586,1318.1563,2.1373,2.1373,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_30.setTransform(1397.6011,1318.1563,2.1373,2.1373,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_31.setTransform(1406.8984,1318.1563,2.1373,2.1373,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_32.setTransform(1414.6997,1318.1563,2.1373,2.1373,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_33.setTransform(1423.5696,1318.1563,2.1373,2.1373,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_34.setTransform(1431.4777,1318.1563,2.1373,2.1373,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_35.setTransform(1439.4927,1318.1563,2.1373,2.1373,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_36.setTransform(1447.4008,1318.1563,2.1373,2.1373,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#2F4EA3").ss(1,1).p("AgJANIATgZ");
	this.shape_37.setTransform(1454.5074,1320.9883,2.1373,2.1373,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#2F4EA3").ss(1,1).p("AgKALIAVgV");
	this.shape_38.setTransform(1460.866,1326.2782,2.1373,2.1373,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#2F4EA3").ss(1,1).p("AgKALIAVgW");
	this.shape_39.setTransform(1466.2628,1331.6749,2.1373,2.1373,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#2F4EA3").ss(1,1).p("AgKALIAVgW");
	this.shape_40.setTransform(1472.1404,1338.0869,2.1373,2.1373,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_41.setTransform(1481.0638,1342.5219,2.1373,2.1373,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_42.setTransform(1490.7886,1342.5219,2.1373,2.1373,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_43.setTransform(1499.7654,1342.5219,2.1373,2.1373,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_44.setTransform(1508.849,1342.5219,2.1373,2.1373,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#2F4EA3").ss(1,1).p("AAAAQIAAgf");
	this.shape_45.setTransform(1517.8258,1342.5219,2.1373,2.1373,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#2F4EA3").p("Al6g5IC1AAQAiAAAZAZIBDBCQAaAYAhAAIGHAA");
	this.shape_46.setTransform(1440.3476,1334.026,2.1373,2.1373,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_47.setTransform(1362.1214,1308.7521,2.1373,2.1373,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_48.setTransform(1371.205,1308.7521,2.1373,2.1373,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_49.setTransform(1380.1818,1308.7521,2.1373,2.1373,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_50.setTransform(1389.1586,1308.7521,2.1373,2.1373,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_51.setTransform(1397.6011,1308.7521,2.1373,2.1373,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_52.setTransform(1406.8984,1308.7521,2.1373,2.1373,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_53.setTransform(1414.6997,1308.7521,2.1373,2.1373,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_54.setTransform(1423.5696,1308.7521,2.1373,2.1373,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_55.setTransform(1431.4777,1308.7521,2.1373,2.1373,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_56.setTransform(1439.4927,1308.7521,2.1373,2.1373,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_57.setTransform(1447.4008,1308.7521,2.1373,2.1373,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#2F4EA3").ss(1,1).p("AgJgMIATAZ");
	this.shape_58.setTransform(1454.5074,1305.9201,2.1373,2.1373,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#2F4EA3").ss(1,1).p("AgKgKIAVAV");
	this.shape_59.setTransform(1460.866,1300.6302,2.1373,2.1373,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#2F4EA3").ss(1,1).p("AgKgKIAVAV");
	this.shape_60.setTransform(1466.2628,1295.2335,2.1373,2.1373,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#2F4EA3").ss(1,1).p("AgKgKIAVAV");
	this.shape_61.setTransform(1472.1404,1288.8215,2.1373,2.1373,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_62.setTransform(1481.0638,1284.3865,2.1373,2.1373,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_63.setTransform(1490.7886,1284.3865,2.1373,2.1373,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_64.setTransform(1499.7654,1284.3865,2.1373,2.1373,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_65.setTransform(1508.849,1284.3865,2.1373,2.1373,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#2F4EA3").ss(1,1).p("AAAgPIAAAf");
	this.shape_66.setTransform(1517.8258,1284.3865,2.1373,2.1373,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#2F4EA3").p("Al6A6IC1AAQAiAAAZgYIBDhCQAagZAhAAIGHAA");
	this.shape_67.setTransform(1440.3476,1292.8824,2.1373,2.1373,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAFgEQAEgDAFABQAFABAEADQADAFgBAEQAAAGgEADQgEAEgFAAIAAAAg");
	this.shape_68.setTransform(1595.8341,1089.6951,2.1399,2.1399,18.3773);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAEgDAFABQAFAAAEAEQAEAFAAAEQgBAFgEAFQgEADgFAAIAAAAg");
	this.shape_69.setTransform(1610.3901,1096.7858,2.1399,2.1399,18.3773);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGABADADQAEAFgBAEQAAAGgEADQgEAEgFAAIAAAAg");
	this.shape_70.setTransform(1632.154,1107.8494,2.1399,2.1399,18.3773);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAFQAEADgBAFQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_71.setTransform(1646.5943,1116.8183,2.1399,2.1399,18.3773);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgFQABgFAEgEQAFgDAEAAQAGABADAFQAEAEgBAEQAAAFgFAFQgDADgFAAIAAgBg");
	this.shape_72.setTransform(1660.2239,1124.9541,2.1399,2.1399,18.3773);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_73.setTransform(1673.4888,1135.1271,2.1399,2.1399,18.3773);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAFgEQADgDAFABQAGAAAEAEQADAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_74.setTransform(1685.8574,1146.2101,2.1399,2.1399,18.3773);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQADgEAFAAQAGABAEAEQADAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_75.setTransform(1697.0977,1158.1909,2.1399,2.1399,18.3773);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEAAgEQABgGAFgDQADgEAFAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_76.setTransform(1682.8979,1164.2815,2.1399,2.1399,18.3773);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgFQABgFAEgEQAFgDAEAAQAGABADAFQAEAEgBAEQAAAFgEAFQgEADgFAAIAAgBg");
	this.shape_77.setTransform(1668.8931,1152.187,2.1399,2.1399,18.3773);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEAAgFQABgFAFgEQAEgDAFABQAFAAAEAEQADAEgBAFQAAAFgFAEQgDAEgFAAIgBAAg");
	this.shape_78.setTransform(1657.6704,1143.4978,2.1399,2.1399,18.3773);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFAAgEQABgGAFgDQAEgEAFABQAFAAAEAEQADAFgBAEQAAAGgFADQgDADgEAAIgCAAg");
	this.shape_79.setTransform(1645.6279,1133.9318,2.1399,2.1399,18.3773);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAEgEAFAAQAFABAEAFQAEADAAAFQgBAGgFADQgDAEgFAAIgBgBg");
	this.shape_80.setTransform(1610.2381,1113.8725,2.1399,2.1399,18.3773);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAFQAEADgBAFQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_81.setTransform(1597.659,1106.6494,2.1399,2.1399,18.3773);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_82.setTransform(1584.0171,1100.2007,2.1399,2.1399,18.3773);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_83.setTransform(1559.9021,1114.5846,2.1399,2.1399,18.3773);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_84.setTransform(1575.8619,1121.5223,2.1399,2.1399,18.3773);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEABgFQAAgFAEgEQAEgDAFABQAFAAAEAEQAEAFAAAEQgBAFgFAFQgDADgFAAIgBAAg");
	this.shape_85.setTransform(1590.7285,1126.7831,2.1399,2.1399,18.3773);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEABgEQAAgFAEgEQAEgEAFABQAFABAEADQAEAFAAAEQgBAGgFADQgDAEgFAAIgBAAg");
	this.shape_86.setTransform(1582.1083,1134.4046,2.1399,2.1399,18.3773);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAEgEAFAAQAFACAEAEQAEAEAAAFQgBAFgFADQgDAEgFAAIAAgBg");
	this.shape_87.setTransform(1575.1519,1147.8778,2.1399,2.1399,18.3773);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgEQABgGAEgDQAFgEAEABQAGABADADQAEAFgBAEQAAAGgFADQgDAEgFAAIAAAAg");
	this.shape_88.setTransform(1591.0767,1155.6487,2.1399,2.1399,18.3773);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAEgDAFABQAFAAAEAEQAEAFAAAEQgBAFgFAFQgDADgFAAIAAAAg");
	this.shape_89.setTransform(1605.8914,1165.3056,2.1399,2.1399,18.3773);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_90.setTransform(1620.833,1176.0358,2.1399,2.1399,18.3773);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFAAAEQgBAGgFADQgDADgEAAIgCAAg");
	this.shape_91.setTransform(1639.4595,1190.848,2.1399,2.1399,18.3773);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgFQAAgFAEgEQAFgDAEAAQAGABADAFQAEAEgBAEQAAAFgEAFQgEADgFAAIAAgBg");
	this.shape_92.setTransform(1653.3645,1204.8661,2.1399,2.1399,18.3773);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_93.setTransform(1663.8301,1215.7849,2.1399,2.1399,18.3773);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgFADQgDAEgFAAIAAgBg");
	this.shape_94.setTransform(1674.4374,1228.7785,2.1399,2.1399,18.3773);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgEQABgGAFgEQADgDAFABQAGAAAEAEQADAEgBAFQAAAFgEAEQgEAEgFAAIAAAAg");
	this.shape_95.setTransform(1683.9591,1243.5545,2.1399,2.1399,18.3773);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQADgEAFAAQAGABAEAEQADAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_96.setTransform(1700.2304,1240.3915,2.1399,2.1399,18.3773);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_97.setTransform(1691.4957,1225.8361,2.1399,2.1399,18.3773);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQAEgEAEABQAGAAADAEQAEAFgBAEQAAAGgFADQgDADgEAAIgBAAg");
	this.shape_98.setTransform(1682.9948,1213.8797,2.1399,2.1399,18.3773);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAEgDQAFgEAEABQAGAAADAEQAEAEgBAFQAAAFgEAEQgEAEgFAAIAAAAg");
	this.shape_99.setTransform(1682.3093,1203.4331,2.1399,2.1399,18.3773);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgDABgFQAAgFAEgEQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAAAg");
	this.shape_100.setTransform(1693.9045,1211.1193,2.1399,2.1399,18.3773);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgDABgFQABgFADgEQAFgEAEABQAGAAADAEQAEAFAAAEQgBAGgFADQgDAEgFAAIgBAAg");
	this.shape_101.setTransform(1701.8705,1222.898,2.1399,2.1399,18.3773);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_102.setTransform(1710.4703,1236.2558,2.1399,2.1399,18.3773);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_103.setTransform(1717.269,1250.7464,2.1399,2.1399,18.3773);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQAEgEAEABQAGAAADAEQAEAFgBAEQAAAGgFADQgDADgEAAIgBAAg");
	this.shape_104.setTransform(1723.9858,1264.5905,2.1399,2.1399,18.3773);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQADgEAFABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_105.setTransform(1730.2583,1278.2871,2.1399,2.1399,18.3773);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_106.setTransform(1744.7026,1278.1249,2.1399,2.1399,18.3773);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_107.setTransform(1740.6289,1264.5951,2.1399,2.1399,18.3773);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEABgFQAAgFAEgEQAEgDAFABQAFAAAEAEQAEAFAAAEQgBAFgFAFQgDADgFAAIgBAAg");
	this.shape_108.setTransform(1736.8199,1254.4638,2.1399,2.1399,18.3773);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_109.setTransform(1735.1135,1242.8479,2.1399,2.1399,18.3773);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_110.setTransform(1741.6628,1244.6863,2.1399,2.1399,18.3773);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_111.setTransform(1746.5058,1254.3711,2.1399,2.1399,18.3773);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_112.setTransform(1751.256,1267.5619,2.1399,2.1399,18.3773);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgDABgFQAAgFAEgEQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAAAg");
	this.shape_113.setTransform(1756.1994,1283.5644,2.1399,2.1399,18.3773);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAFgDQAEgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_114.setTransform(1760.087,1298.4564,2.1399,2.1399,18.3773);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAFgEAEAAQAFABAFAEQADAFAAAEQgBAGgFADQgDAEgEAAIgCgBg");
	this.shape_115.setTransform(1762.6216,1312.5467,2.1399,2.1399,18.3773);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAEgEAFAAQAFABAEAEQAEAFAAAEQgBAGgFAEQgDADgFAAIgBgBg");
	this.shape_116.setTransform(1758.3104,1327.2207,2.1399,2.1399,18.3773);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#474747").s().p("AgBANQgFAAgEgFQgDgEAAgEQABgGAFgDQAEgEAEAAQAFABAFAEQADAFgBAEQAAAGgEADQgEAEgFAAIgBgBg");
	this.shape_117.setTransform(1753.5659,1319.7825,2.1399,2.1399,18.3773);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#474747").s().p("AgBAOQgFgBgDgFQgEgEABgFQAAgFAEgEQAEgDAFABQAFAAAEAEQAEAEAAAFQgBAFgFAEQgDAEgFAAIgBAAg");
	this.shape_118.setTransform(1737.6355,1325.3129,2.1399,2.1399,18.3773);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_119.setTransform(1737.3075,1338.734,2.1399,2.1399,18.3773);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgFQABgFAEgEQAFgDAEAAQAGABADAFQAEAEgBAFQAAAEgFAFQgDADgFAAIAAgBg");
	this.shape_120.setTransform(1729.0596,1342.6451,2.1399,2.1399,18.3773);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQABgGADgDQAFgEAEAAQAGABADAEQAEAFAAAEQgBAGgFAEQgDADgFAAIAAgBg");
	this.shape_121.setTransform(1724.3105,1331.1458,2.1399,2.1399,18.3773);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEAAgEQABgGAFgDQADgEAFAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_122.setTransform(1723.8213,1315.9891,2.1399,2.1399,18.3773);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAFgEQAEgDAEABQAGAAADAEQAEAFgBAEQAAAFgFAFQgDADgFAAIAAAAg");
	this.shape_123.setTransform(1721.0327,1300.9688,2.1399,2.1399,18.3773);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgFAEQgDADgFAAIAAgBg");
	this.shape_124.setTransform(1719.1945,1289.8729,2.1399,2.1399,18.3773);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQABgGADgDQAFgEAEABQAGAAADAEQAEAFAAAEQgBAGgFADQgDADgEAAIgBAAg");
	this.shape_125.setTransform(1715.1322,1276.306,2.1399,2.1399,18.3773);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAEgBAFQAAAFgEAEQgEAEgFAAIAAAAg");
	this.shape_126.setTransform(1703.3497,1283.4815,2.1399,2.1399,18.3773);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_127.setTransform(1705.1173,1296.487,2.1399,2.1399,18.3773);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_128.setTransform(1707.6715,1312.0479,2.1399,2.1399,18.3773);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgFADQgDAEgFAAIAAgBg");
	this.shape_129.setTransform(1709.3537,1328.6573,2.1399,2.1399,18.3773);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_130.setTransform(1708.7877,1345.3401,2.1399,2.1399,18.3773);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_131.setTransform(1706.5564,1359.5228,2.1399,2.1399,18.3773);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEABgFQAAgFAEgEQAFgDAEAAQAGABADAEQAEAEgBAFQAAAFgEAFQgEADgFAAIAAgBg");
	this.shape_132.setTransform(1703.4433,1376.5269,2.1399,2.1399,18.3773);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAFQAAAEgFAFQgDADgFAAIAAAAg");
	this.shape_133.setTransform(1716.14,1381.5342,2.1399,2.1399,18.3773);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgFADQgDAEgFAAIAAgBg");
	this.shape_134.setTransform(1720.5373,1366.6478,2.1399,2.1399,18.3773);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFAAgEQABgGAFgDQAEgEAEABQAFAAAFAEQADAFgBAEQAAAGgEADQgEADgEAAIgCAAg");
	this.shape_135.setTransform(1728.6806,1358.0371,2.1399,2.1399,18.3773);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFAAgEQABgGAFgDQAEgEAEAAQAFABAFAEQADAFgBAEQAAAGgEADQgEAEgEAAIgCgBg");
	this.shape_136.setTransform(1736.5845,1361.7347,2.1399,2.1399,18.3773);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_137.setTransform(1734.7484,1372.2293,2.1399,2.1399,18.3773);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAFQAEADgBAFQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_138.setTransform(1731.2505,1387.6816,2.1399,2.1399,18.3773);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_139.setTransform(1744.2595,1392.8089,2.1399,2.1399,18.3773);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAEgBAFQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_140.setTransform(1747.6359,1380.9487,2.1399,2.1399,18.3773);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#474747").s().p("AgBANQgFAAgEgFQgDgEABgEQAAgGAEgDQAFgEAEAAQAFABAFAEQADAFAAAEQgBAGgFADQgDAEgFAAIgBgBg");
	this.shape_141.setTransform(1751.378,1364.7172,2.1399,2.1399,18.3773);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgFADQgDADgEAAIgBAAg");
	this.shape_142.setTransform(1751.0715,1349.6915,2.1399,2.1399,18.3773);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_143.setTransform(1758.6106,1341.9772,2.1399,2.1399,18.3773);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFAAgEQABgGAFgDQAEgEAEAAQAFABAFAEQADAFgBAEQAAAGgEADQgEAEgFAAIgBgBg");
	this.shape_144.setTransform(1764.7959,1350.1202,2.1399,2.1399,18.3773);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEAAgEQACgGAEgDQAEgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_145.setTransform(1778.6703,1352.4754,2.1399,2.1399,18.3773);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_146.setTransform(1779.6276,1335.3891,2.1399,2.1399,18.3773);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#474747").s().p("AgBANQgFAAgEgFQgDgEABgEQAAgGAEgDQAFgEAEAAQAFABAFAEQADAFAAAEQgBAGgFADQgDAEgFAAIgBgBg");
	this.shape_147.setTransform(1778.7381,1319.0128,2.1399,2.1399,18.3773);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_148.setTransform(1776.5474,1301.3888,2.1399,2.1399,18.3773);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_149.setTransform(1772.949,1284.7311,2.1399,2.1399,18.3773);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgFADQgDAEgFAAIAAgBg");
	this.shape_150.setTransform(1768.6739,1269.2178,2.1399,2.1399,18.3773);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAFgEAEAAQAFABAFAEQADAFAAAEQgBAGgFADQgDAEgEAAIgCgBg");
	this.shape_151.setTransform(1763.646,1254.4853,2.1399,2.1399,18.3773);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQABgGADgDQAFgEAEAAQAGABADAEQAEAFAAAEQgBAGgFADQgDAEgFAAIAAgBg");
	this.shape_152.setTransform(1757.2764,1241.0785,2.1399,2.1399,18.3773);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGACADAEQAEAEgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_153.setTransform(1749.9851,1227.269,2.1399,2.1399,18.3773);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_154.setTransform(1742.965,1214.9744,2.1399,2.1399,18.3773);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQABgGADgDQAFgEAEABQAGAAADAEQAEAFAAAEQgBAGgFADQgDADgEAAIgCAAg");
	this.shape_155.setTransform(1735.732,1203.4392,2.1399,2.1399,18.3773);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#474747").s().p("AgBANQgFAAgEgFQgDgEABgEQAAgGAEgDQAFgEAEAAQAFABAFAEQADAFAAAEQgBAGgFADQgDAEgEAAIgCgBg");
	this.shape_156.setTransform(1727.0402,1190.5745,2.1399,2.1399,18.3773);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAEgDQAFgEAEABQAGAAADAEQAEAEgBAFQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_157.setTransform(1714.7862,1199.0019,2.1399,2.1399,18.3773);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEABgFQAAgFAEgEQAFgDAEABQAFAAAFAEQADAEAAAFQgBAFgFAEQgDAEgFAAIgBAAg");
	this.shape_158.setTransform(1723.3099,1210.9659,2.1399,2.1399,18.3773);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_159.setTransform(1729.5917,1218.5773,2.1399,2.1399,18.3773);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgEQAAgGAEgDQAFgEAEABQAFAAAFAEQADAFAAAEQgBAGgFADQgDADgEAAIgCAAg");
	this.shape_160.setTransform(1729.2284,1229.8029,2.1399,2.1399,18.3773);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGACADAEQAEAEgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_161.setTransform(1720.2406,1223.4756,2.1399,2.1399,18.3773);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAFAAAEQgBAFgFAFQgDADgFAAIAAAAg");
	this.shape_162.setTransform(1712.8201,1209.9614,2.1399,2.1399,18.3773);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_163.setTransform(1703.7665,1198.0631,2.1399,2.1399,18.3773);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEAAgEQABgGAEgDQAEgEAFABQAFABAFADQADAFgBAEQAAAGgEADQgEAEgFAAIgBAAg");
	this.shape_164.setTransform(1694.2217,1186.871,2.1399,2.1399,18.3773);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_165.setTransform(1684.323,1175.8194,2.1399,2.1399,18.3773);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_166.setTransform(1674.0667,1166.6459,2.1399,2.1399,18.3773);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_167.setTransform(1662.6975,1165.9129,2.1399,2.1399,18.3773);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_168.setTransform(1671.4399,1183.7159,2.1399,2.1399,18.3773);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#474747").s().p("AAAANQgGAAgDgFQgEgEABgEQAAgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_169.setTransform(1662.978,1175.9284,2.1399,2.1399,18.3773);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFABgFQABgFADgEQAFgDAEAAQAGABADAFQAEAEAAAEQgBAFgFAFQgDADgFAAIgBgBg");
	this.shape_170.setTransform(1672.269,1192.8818,2.1399,2.1399,18.3773);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#474747").s().p("AgBANQgFAAgEgEQgDgFAAgEQABgGAEgDQAEgEAFAAQAFACAFAEQADAEgBAEQAAAGgEADQgEAEgFAAIgBgBg");
	this.shape_171.setTransform(1660.2531,1188.3262,2.1399,2.1399,18.3773);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAEQAEAFgBAEQAAAGgEADQgEAEgEAAIgBgBg");
	this.shape_172.setTransform(1648.0705,1176.5159,2.1399,2.1399,18.3773);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEAAQAGABADAFQAEAEgBAEQAAAGgEADQgEAEgFAAIAAgBg");
	this.shape_173.setTransform(1633.8525,1164.335,2.1399,2.1399,18.3773);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#474747").s().p("AgBAOQgFgBgEgFQgDgEAAgEQABgGAEgDQAEgEAFABQAFAAAFAEQADAEgBAFQAAAFgEAEQgEAEgFAAIgBAAg");
	this.shape_174.setTransform(1619.5166,1155.1753,2.1399,2.1399,18.3773);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFAAgEQABgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_175.setTransform(1606.0001,1145.6833,2.1399,2.1399,18.3773);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAFgEAEABQAGAAADAEQAEAFgBAEQAAAGgEADQgEADgEAAIgBAAg");
	this.shape_176.setTransform(1635.7804,1135.2828,2.1399,2.1399,18.3773);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEABgFQAAgFAEgEQAFgDAEABQAGAAADAEQAEAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_177.setTransform(1612.4086,1121.8092,2.1399,2.1399,18.3773);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAFgEQAEgDAFABQAFAAAEAEQADAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_178.setTransform(1600.3603,1115.7772,2.1399,2.1399,18.3773);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#474747").s().p("AAAAOQgGgBgDgFQgEgEAAgFQABgFAFgEQAEgDAFABQAFAAAEAEQADAFgBAEQAAAFgEAFQgEADgFAAIAAAAg");
	this.shape_179.setTransform(1588.1737,1109.6992,2.1399,2.1399,18.3773);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#474747").s().p("AAAANQgGAAgDgEQgEgFABgEQAAgGAEgDQAEgEAFABQAFAAAEAEQAEAFAAAEQgBAGgFADQgDADgEAAIgBAAg");
	this.shape_180.setTransform(1575.3574,1104.4985,2.1399,2.1399,18.3773);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#474747").s().p("AgJAKQgDgFAAgFQAAgEADgEQAEgFAFAAQAFAAAEAFQAFAEAAAEQAAAFgFAFQgEADgFAAQgFAAgEgDg");
	this.shape_181.setTransform(1561.4678,1099.4741,2.1399,2.1399,18.3773);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#2D2D2D").ss(1.5).p("AKvE2Qgxi8h7ijQh7ili2h6QgIgFgJAAQgKAAgIAGQgMAJAAAPQABAPANAIQBCAuAzArQAIAHABAMQAAALgIAIQgHAHgKABQgKAAgIgHQiLh7iyhQQgJgEgKABQgJACgHAHQgKAMADAOQADAPAOAGQAwAWAnAWIgdA0QizhmjUgmIALg2QBoATBZAdQADABAGAAQALAAAJgHQAJgIAAgMQABgKgGgJQgGgIgKgDQgngNg6gPIAJgqQCmAoCSBKQAHADAHAAQALAAAIgHQAJgIABgMQABgJgFgIQgEgIgJgEQkPiJlAgXQgPgBgKALQgJAMADAPQACAJAIAGQAIAGAKABQBfAGBnAVIgIAqQiWggieAAQgKAAgIAGQgIAFgDAJQgFAPAKAMQAIAMAPAAQBjAABgANIgLA2IgcgEQgPgCgKAMQgLAMAEAQQADAIAHAGQAHAGAJAAQC7AWCmBKQCmBJB9B1QAIAIAMAAQAQAAAJgPQAGgJgCgKQgCgLgIgHQhDg/hUg1IAfg2QDKB7B8CxQAIANAQAAQAPAAAJgMQAGgIgBgJQAAgKgFgIQgmg2g2g7QgHgIgBgKQAAgLAIgHQAIgJALAAQALAAAIAIQCKCOBICpQAGANgGANQgGAMgOAEQgLADgKgFQgLgGgEgKIgEgKQgEgJgJgGQgJgFgKACQgOACgHANQgHAMAGANQAVAzAPA3IhNANQgpiZhgiAQgFgIgKgEQgJgDgJADQgPAFgEAPQgFAOAJAMQBKBjAnBxQAmBxABB1QAAAKAFAIQAGAIAJADQAOAFANgJQAMgJAAgPQAAhFgNhFIBNgOQAPBLAABMQAAAKAFAIQAFAIAJADQAPAFANgJQAMgJAAgPQAAh9glh5IA9gQIALAlQACAKAIAGQAIAGAKAAIAIAAQALgEAHgKQAGgLgDgLg");
	this.shape_182.setTransform(1659.2793,1242.087,2.1399,2.1399,18.3773);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#A57656").s().p("AIrJBQgJgDgFgIQgFgIAAgKQAAhMgPhLIhNAOQANBFAABFQAAAPgMAJQgNAJgOgFQgJgDgGgIQgFgIAAgKQgBh1gmhxQgnhxhKhjQgJgMAFgOQAEgPAPgFQAJgDAJADQAKAEAFAIQBgCAApCZIBNgNQgPg3gVgzQgGgNAHgMQAHgNAOgCQAKgCAJAFQAJAGAEAJIAEAKQAEAKALAGQAKAFALgDQAOgEAGgMQAGgNgGgNQhIipiKiOQgIgIgLAAQgLAAgIAJQgIAHAAALQABAKAHAIQA2A7AmA2QAFAIAAAKQABAJgGAIQgJAMgPAAQgQAAgIgNQh8ixjKh7IgfA2QBUA1BDA/QAIAHACALQACAKgGAJQgJAPgQAAQgMAAgIgIQh9h1imhJQimhKi7gWQgJAAgHgGQgHgGgDgIQgEgQALgMQAKgMAPACIAcAEIALg2QhggNhjAAQgPAAgIgMQgKgMAFgPQADgJAIgFQAIgGAKAAQCeAACWAgIAIgqQhngVhfgGQgKgBgIgGQgIgGgCgJQgDgPAJgMQAKgLAPABQFAAXEPCJQAJAEAEAIQAFAIgBAJQgBAMgJAIQgIAHgLAAQgHAAgHgDQiShKimgoIgJAqQA6APAnANQAKADAGAIQAGAJgBAKQAAAMgJAIQgJAHgLAAIgJgBQhZgdhogTIgLA2QDUAmCzBmIAdg0QgngWgwgWQgOgGgDgPQgDgOAKgMQAHgHAJgCQAKgBAJAEQCyBQCLB7QAIAHAKAAQAKgBAHgHQAIgIAAgLQgBgMgIgHQgzgrhCguQgNgIgBgPQAAgPAMgJQAIgGAKAAQAJAAAIAFQC2B6B7ClQB7CjAxC8QADALgGALQgHAKgLAEIgIAAQgKAAgIgGQgIgGgCgKIgLglIg9AQQAlB5AAB9QAAAPgMAJQgIAFgJAAQgGAAgFgBg");
	this.shape_183.setTransform(1659.2793,1242.087,2.1399,2.1399,18.3773);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#8E795A").ss(1.3).p("AHZn5QgIAAgFgEQhlg9h1ggQh1ggh9AAIgBAAQgKAAgHgHQgIgIAAgKQAAgLAIgHQAHgHAKAAIABAAQCEAAB8AiQB8AhBqBBQAJAGACALQADAKgGAIQgHAMgOAAgAoZnMQgMAAgHgKQgHgJACgKQABgLAIgFQBkhMB4gtQB5gtCFgKQALgBAIAHQAIAGAAALQABAKgGAIQgHAIgLABQh+AKhyAqQhyAqhdBHQgHAGgJAAgAMWgzQgJAAgHgGQgHgGgBgKQgQhxhAhmQhAhmhnhOQgIgGgBgLQgCgKAGgIQAHgJAKgBQAKgCAJAHQBvBTBEBvQBFBvARB7QACALgGAJQgHAHgKACgAJSHQQgLAAgIgIQgHgHABgKQAAgLAIgHQBehXAyhtQAyhtAAh0IAAgCQAAgKAHgHQAHgIALAAQAKAAAIAIQAHAHAAAKIAAACQAAB/g2B2Qg3B3hlBeQgHAGgKAAgAs0ABQAAh+A2h3QA2h2BlheQAIgHAKAAQALAAAHAIQAHAIAAAKQgBAKgIAHQhdBYgyBsQgyBtAABzQAAAKgHAIQgIAHgKAAQgKAAgHgGQgIgIAAgKgAoXICQgHAAgIgFQhvhVhEhuQhEhvgSh8QgBgKAGgJQAHgIAKgBQAKgCAIAHQAJAGABALQAQBxA/BnQA/BlBoBPQAIAFABALQACAKgHAJQgHAKgNAAgAABKtIgBAAQiEAAh8giQh8gihqhCQgJgFgCgKQgCgKAFgJQAFgIAKgDQAKgCAJAFQBlA+B1AgQB1AgB9AAIABAAQALAAAHAIQAHAGAAALQAAAKgHAIQgIAHgKAAgABLKqQgKAAgHgHQgHgGgBgKQAAgKAGgIQAHgIAKgBQB+gJBygrQBygpBehHQAIgHALACQAKABAGAJQAHAIgCAKQgBAKgIAHQhkBLh5AtQh5AsiFAKg");
	this.shape_184.setTransform(1493.928,1312.9249,2.127,2.127);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFA64D").s().p("AAAKtQiEAAh8giQh8gihqhCQgJgEgCgLQgCgKAFgJQAFgJAKgCQAKgCAJAFQBlA+B1AgQB1AgB9AAIABAAQALAAAHAHQAHAIAAAKQAAAKgHAIQgIAHgKAAgABLKqQgKAAgHgHQgHgHgBgJQAAgKAGgIQAHgIAKgBQB+gKBygpQBygrBehHQAIgGALABQAKACAGAJQAHAIgCAKQgBAKgIAGQhkBMh5AtQh5AsiFAKgAomH9QhvhVhEhuQhEhvgSh8QgBgKAGgIQAHgJAKgBQAKgCAIAHQAJAGABAKQAQByA/BmQA/BnBoBNQAIAHABAKQACAKgHAJQgHAKgNgBQgHAAgIgEgAI/HJQgHgIABgKQAAgLAIgHQBehXAyhtQAyhtAAh0IAAgBQAAgKAHgIQAHgHALgBQAKABAIAHQAHAIAAAKIAAABQAAB/g2B2Qg3B2hlBfQgHAHgKAAQgLgBgIgHgAssASQgIgGAAgLIAAAAQAAh/A2h1QA2h3BlheQAIgHAKABQALAAAHAHQAHAIAAAKQgBALgIAGQhdBYgyBsQgyBtAABzQAAAKgHAIQgIAHgKABQgKAAgHgIgAMWgzQgJAAgHgGQgHgGgBgJQgQhyhAhmQhAhmhnhOQgIgGgBgLQgCgKAGgIQAHgIAKgCQAKgBAJAGQBvBTBEBvQBFBvARB7QACALgGAIQgHAJgKABgAosnWQgHgJACgKQABgLAIgFQBkhMB4gtQB5gsCFgLQALAAAIAGQAIAHAAAKQABAKgGAJQgHAHgLABQh+AKhyAqQhyAqhdBHQgHAFgJABQgMgBgHgJgAHMn9Qhlg9h1ggQh1ggh9AAIgBAAQgKAAgHgHQgIgHAAgLQAAgLAIgGQAHgIAKAAIABAAQCEAAB8AiQB8AiBqBBQAJAFACAKQADAKgGAJQgHAMgOAAQgIAAgFgEg");
	this.shape_185.setTransform(1493.928,1312.9249,2.127,2.127);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#773A18").ss(0.9).p("AL/AAQAACBg8B1Qg6ByhqBXQjhC5k+AAQk9AAjgi5QhrhXg6hyQg8h1AAiBQAAiAA8h1QA6hxBrhYQDgi5E9AAQE+AADhC5QBqBYA6BxQA8B1AACAg");
	this.shape_186.setTransform(1498.8557,1319.6468,2.1501,2.1501);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFE3CC").s().p("AodG/QhrhXg6hyQg8h2AAiAQAAiAA8h1QA6hyBrhXQDgi5E9AAQE+AADhC5QBqBXA6ByQA8B1AACAQAACAg8B2Qg6ByhqBXQjhC5k+AAQk9AAjgi5g");
	this.shape_187.setTransform(1498.8557,1319.6468,2.1501,2.1501);

	this.instance_23 = new lib.Group_40_0();
	this.instance_23.setTransform(1496.95,1322.9,2.1501,2.1501,0,0,0,81.6,69.2);
	this.instance_23.alpha = 0.3789;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(470));

	// Pozadi
	this.instance_24 = new lib.ClipGroup();
	this.instance_24.setTransform(1094.6,1095.9,1.1423,1.1423,0,0,0,962.1,959.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(470));

	// Vrstva_28
	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#FFE0C6").ss(10,1,1).p("AwGlTQAclVGVjhQGLjcHBAPQHHAUEHFyQESGDjQGoQjCGOlDEsQlYFAnVADQnmADjTm0QjMmmCDm+QAEgPAjiHg");
	this.shape_188.setTransform(924.7062,525.5281);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#FFE0C6").ss(10,1,1).p("Axxi/QADgWAhiFQANiWBRh/QBpijDch9QASgKATgKQCGhHCIgsQB4goCFgVQBSgOBdgFQBcgFBQACQA9ABAxAFQBHAIA/APQDhA3CwCgQBEA+A8BOQBCBYAsBaQAhBIATBNQAeCEgRCQQgPB0g0B2QgSAqgUAqQhICVhdCFQhrCYiMCCQgoAngsAlQh6BpiKBHQi3BdjKAeQhpAPhqABQg1AAgvgEQiGgLhugtQjwhgiWkCQgEgHgEgHQhxjKgejeQgejlA+jxg");
	this.shape_189.setTransform(934.2056,528.2239);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#FFE0C6").ss(10,1,1).p("Ay2jAQACgdAgiEQAOieBUiCQBuipDph/QATgKATgKQCOhHCNgsQB6gmCPgUQBRgNBmgDQBlgEBNABQA+ABA2AEQBLAGBAAPQDqAyC8CiQBJA/BABOQBIBYAyBdQAkBHAYBRQAjCEgJCZQgJB5gvB7QgRAtgUAsQhFCdhfCNQhsCciZCEQgsAnguAkQiCBoiTBGQjBBbjSAdQhvANhsABQg4AAgwgEQiMgLhygrQj6heirkBQgEgGgEgHQh/jJgojnQgmjsA3j8g");
	this.shape_190.setTransform(943.7338,530.9045);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#FFE0C6").ss(10,1,1).p("Az8jBQACglAeiCQAPilBYiGQBzivD0iAQAUgLAUgJQCWhJCSgpQB7glCagSQBPgMBwgDQBugCBLAAQA9AAA7AEQBRAFBAANQDyAvDJCjQBOA/BFBPQBNBZA4BeQAnBHAdBUQAoCFgBCiQgDB+grCAQgQAvgSAvQhCClhiCTQhtCjimCEQgvAngxAkQiKBnibBEQjNBajYAaQh2ANhuAAQg7AAgwgEQiUgKh2gqQkDhci/j/QgEgGgFgHQiMjGgyjyQgwjyAxkIg");
	this.shape_191.setTransform(953.3322,533.5958);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#FFE0C6").ss(10,1,1).p("A1CjCQABgsAdiBQAQisBbiKQB4i2EBiBQAUgKAUgKQCfhJCWgpQB9gjCkgRQBOgLB5gBQB3gBBIAAQA+gBA/ADQBWAEBBAMQD6ArDXCkQBSBABLBQQBRBYA+BgQAqBHAjBYQAsCGAHCpQAECEgoCFQgOAygRAxQg/CthkCaQhuCoi0CHQgyAmg0AkQiRBlikBDQjYBZjfAXQh9AMhvAAQg+AAgxgEQiagKh7gpQkMhZjTj+QgFgGgFgGQiajFg9j7Qg4j4ArkUg");
	this.shape_192.setTransform(962.9724,536.2708);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#FFE0C6").ss(10,1,1).p("A2IjDQAAg0Ach/QARizBeiOQB9i8ENiDQAUgKAVgJQCohKCagnQB/giCugPQBNgKCDAAQCAgBBFAAQA/gCBDACQBbADBBALQEDAnDkCmQBXBABPBRQBWBZBFBhQAsBHAoBcQAxCFAQCzQAJCJgjCKQgNA0gQAzQg8C2hmChQhvCujCCHQg0Amg4AkQiYBkitBCQjjBWjnAWQiDALhwAAQhCAAgygEQiggKh/goQkWhWjnj9QgFgGgFgGQiojChHkFQhBj/Alkgg");
	this.shape_193.setTransform(972.644,538.9179);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#FFE0C6").ss(10,1,1).p("A3PjEQAAg7Aah+QASi6BiiSQCCjCEYiEQAWgKAVgKQCwhKCfgmQCAggC4gOQBNgJCMABQCJABBCgBQA/gCBIABQBgABBCAKQELAjDxCoQBcBABUBRQBbBaBKBjQAwBGAtBgQA2CGAYC7QAQCPggCPQgLA2gQA2Qg5C+hoCoQhwCzjPCJQg3Amg7AjQigBii2BBQjuBVjtAUQiKAJhyAAQhFAAgygEQiogJiDgnQkfhUj7j7QgGgGgFgGQi2jAhQkPQhKkFAeksg");
	this.shape_194.setTransform(982.3494,541.5583);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#FFE0C6").ss(10,1,1).p("A4WjEQgBhDAZh8QATjCBliWQCHjHEliGQAWgKAWgKQC4hLCkgkQCCgfDCgMQBLgICVACQCTACA/gCQBAgCBMAAQBlAABDAJQETAfD/CpQBgBBBZBSQBgBaBQBlQAzBFAyBkQA6CHAhDDQAWCUgcCVQgKA4gPA4Qg2DGhqCvQhxC5jdCKQg6Amg9AjQioBgi+BAQj5BUj1ARQiQAIh0AAQhIAAgzgEQiugJiHglQkphSkPj5QgGgGgGgGQjDi+hbkZQhTkMAYk3g");
	this.shape_195.setTransform(992.0435,544.175);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#FFE0C6").ss(10,1,1).p("A5djEQgBhKAXh7QAUjJBpiZQCMjOEwiIQAXgKAWgJQDAhMCpgjQCDgdDNgLQBKgHCeADQCcAEA9gDQBAgDBRgBQBqgBBDAIQEcAbELCrQBlBBBeBTQBlBaBXBnQA1BFA3BnQBACHAoDNQAcCZgXCaQgIA6gPA6QgzDPhsC2QhzC+jpCLQg9AmhBAjQivBfjHA+QkFBSj7AQQiXAHh1gBQhLAAg0gDQi1gJiMglQkxhPkkj3QgGgGgGgGQjSi8hkkjQhckSASlDg");
	this.shape_196.setTransform(1001.7632,546.7294);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#FFE0C6").ss(10,1,1).p("A6kjFQgChRAWh5QAVjRBsidQCRjUE8iJQAYgKAXgJQDIhNCughQCFgcDXgJQBJgGCnAEQClAFA6gDQBBgEBVgCQBvgCBEAHQEkAXEZCtQBpBBBjBTQBqBbBdBpQA4BEA8BrQBECIAxDVQAiCegTCfQgHA9gNA8QgwDXhvC9Qh0DEj3CMQhAAmhDAiQi3BejPA9QkQBRkCANQieAGh3gBQhOAAg1gDQi8gJiPgjQk7hNk4j2QgHgFgGgGQjfi6hvktQhkkYALlQg");
	this.shape_197.setTransform(1011.4711,549.3176);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#FFE0C6").ss(10,1,1).p("A7rjEQgDhZAUh4QAXjYBvihQCWjaFIiKQAZgKAYgJQDQhOCyggQCHgaDhgIQBIgFCwAGQCuAFA3gDQBCgFBagDQBzgCBFAFQEtAUEmCtQBtBCBoBUQBvBbBjBrQA7BEBCBvQBICIA6DdQAoCkgPCkQgGA/gNA+QgtDghwDDQh1DKkFCOQhCAmhHAhQi+BdjYA8QkbBPkJAKQilAGh4gBQhSgBg1gCQjDgJiTgiQlFhKlMj1QgHgFgHgGQjsi4h5k2QhtkfAFlbg");
	this.shape_198.setTransform(1021.2199,551.8936);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#FFE0C6").ss(10,1,1).p("A8xjEQgEhhATh2QAYjfByilQCbjgFUiMQAZgKAYgIQDZhPC2gfQCJgYDrgGQBHgEC6AGQC3AHA0gEQBDgGBegDQB4gEBGAEQE1AQEzCvQByBCBtBVQB0BbBpBtQA+BEBHByQBNCIBCDnQAuCogLCqQgEBBgMBBQgqDohzDKQh2DPkSCPQhFAmhKAhQjFBbjiA7QkmBNkQAJQirAEh6gBQhVAAg2gDQjJgIiYghQlOhIlgjzQgHgFgHgGQj7i2iDlAQh2klAAlng");
	this.shape_199.setTransform(1030.9292,554.4409);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#FFE0C6").ss(10,1,1).p("A95jEQgEhoARh0QAZjnB2ipQCgjmFgiNQAagKAZgJQDhhPC7geQCKgXD1gEQBGgDDDAIQDBAHAxgEQBDgGBigFQB+gFBGAEQE9ALFBCxQB3BCBxBWQB5BbBvBvQBBBDBMB3QBSCIBKDvQA1CugICvQgCBDgLBDQgnDxh1DRQh3DUkgCRQhIAlhNAiQjNBZjqA6QkxBLkWAHQizADh7gBQhYgBg3gCQjQgJicgfQlXhFl1jyQgHgFgIgGQkIi0iNlJQh/ksgHlzg");
	this.shape_200.setTransform(1040.6509,556.9904);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#FFE0C6").ss(10,1,1).p("A/AjEQgFhvAQhzQAajuB5isQCljtFsiPQAagJAagJQDphQDAgcQCMgWEAgDQBEgCDMAJQDKAJAvgFQBDgHBngFQCDgGBGACQFGAIFOCyQB7BCB3BXQB9BcB2BwQBEBDBRB6QBWCJBTD3QA6C0gDC0QgBBFgKBGQgkD5h3DXQh5DbktCSQhLAlhQAhQjUBYjzA4Qk8BKkdAEQi6ADh9gCQhbAAg3gDQjXgIiggeQlhhDmIjwQgIgFgIgGQkWixiXlUQiIkygNl/g");
	this.shape_201.setTransform(1050.4239,559.5281);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#FFE0C6").ss(10,1,1).p("EggIgDEQgFh2AOhyQAbj1B9iwQCqjzF4iQQAbgKAagIQDxhRDFgbQCNgUEKgCQBEgBDVALQDTAKAsgGQBEgIBrgGQCIgHBHABQFOAEFbC0QCABDB7BWQCDBdB7ByQBHBDBXB+QBbCJBbEAQBBC5AAC5QAABIgJBHQghEBh5DfQh6Dgk6CTQhOAlhTAhQjcBWj7A4QlIBIkkACQjBABh9gBQhfgBg4gCQjdgIilgdQlqhAmdjvQgIgFgIgFQkjiwiileQiQk4gUmLg");
	this.shape_202.setTransform(1060.2244,562.0575);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghPgDDQgWmaC4kFQCvj4GEiSQEbhhDegcQCQgTEUAAQBCAADeALQDdAMApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEIQBiEJgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/gZmWg");
	this.shape_203.setTransform(1070.0103,564.575);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghOgDDQgUmZC5kEQCvj5GBiTQEZhhDegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/gXmWg");
	this.shape_204.setTransform(1074.732,565.425);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghOgDDQgRmXC5kEQCwj5F/iTQEVhjDfgcQCPgTEUAAQBDAADeAMQDdALAogHQAogGCNgJQCMgIBIAAQFXAAFoC1QESCLD8DgQBKBDBbCCQBgCJBjEJQBjEIgeEIQgeEKh7DlQh7DmlICUQknCGlnBLQlTBGkrAAQleAAiDgEQjkgIipgcQlzg9mxjuQk9itixlyQiZk/gWmWg");
	this.shape_205.setTransform(1079.4037,566.225);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghNgDDQgOmVC4kEQCxj5F8iVQEThjDfgcQCPgTEUAAQBDAADeAMQDdALAogHQAogGCNgJQCMgIBIAAQFXAAFoC1QESCLD8DgQBKBDBbCCQBgCJBjEJQBjEIgeEIQgeEKh7DlQh7DmlICUQknCGlnBLQlTBGkrAAQleAAiDgEQjkgIipgcQlzg9mxjuQk9itixlyQiZk/gUmWg");
	this.shape_206.setTransform(1084.1224,567.075);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghMgDDQgMmTC5kEQCyj5F5iWQEQhkDfgcQCPgTEUAAQBDAADeAMQDdALAogHQAogGCNgJQCMgIBIAAQFXAAFoC1QESCLD8DgQBKBDBbCCQBgCJBjEJQBjEIgeEIQgeEKh7DlQh7DmlICUQknCGlnBLQlTBGkrAAQleAAiDgEQjkgIipgcQlzg9mxjuQk9itixlyQiZk/gSmWg");
	this.shape_207.setTransform(1088.7886,567.875);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghLgDDQgKmRC6kEQCyj6F2iWQEOhlDfgcQCPgTEUAAQBDAADeAMQDdALAogHQAogGCNgJQCMgIBIAAQFXAAFoC1QESCLD8DgQBKBDBbCCQBgCJBjEJQBjEIgeEIQgeEKh7DlQh7DmlICUQknCGlnBLQlTBGkrAAQleAAiDgEQjkgIipgcQlzg9mxjuQk9itixlyQiZk/gQmWg");
	this.shape_208.setTransform(1093.4996,568.725);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghKgDDQgImPC6kEQCzj6FziXQEMhmDegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/gNmWg");
	this.shape_209.setTransform(1098.1607,569.525);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghJgDDQgGmOC7kDQCzj6FwiYQEKhnDegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/gLmWg");
	this.shape_210.setTransform(1102.8673,570.375);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghIgDDQgDmLC7kEQCzj6FuiZQEHhoDegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/gJmWg");
	this.shape_211.setTransform(1107.5228,571.175);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghHgDDQgBmKC7kDQC0j7FriZQEFhpDegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/gHmWg");
	this.shape_212.setTransform(1112.2251,572.025);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghGgDDQACmIC7kEQC1j7FoiZQEChqDegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/gFmWg");
	this.shape_213.setTransform(1116.8752,572.875);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghFgDDQAEmGC7kDQC2j8FliaQEAhrDegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/gDmWg");
	this.shape_214.setTransform(1121.5752,573.675);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghEgDDQAGmFC8kDQC2j7FjicQD9hrDegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/gBmWg");
	this.shape_215.setTransform(1126.2252,574.525);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghDgDDQAImCC9kDQC2j8FgicQD7htDegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/ABmWg");
	this.shape_216.setTransform(1130.9251,575.325);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghCgDDQALmBC9kDQC3j8FdidQD4htDegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/ADmWg");
	this.shape_217.setTransform(1135.5732,576.175);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghBgDDQANl/C9kCQC4j9FaieQD2huDegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/AFmWg");
	this.shape_218.setTransform(1140.2688,576.975);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#FFE0C6").ss(10,1,1).p("EghAgDDQAQl9C9kDQC4j8FYifQDzhvDegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/AHmWg");
	this.shape_219.setTransform(1144.912,577.825);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#FFE0C6").ss(10,1,1).p("Egg/gDDQASl7C9kDQC5j9FVifQDxhwDegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/AJmWg");
	this.shape_220.setTransform(1149.6028,578.675);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#FFE0C6").ss(10,1,1).p("Egg+gDDQAVl5C+kDQC5j9FSigQDuhxDfgcQCPgTEUAAQBDAADeAMQDdALAogHQAogGCNgJQCMgIBIAAQFXAAFoC1QESCLD8DgQBKBDBbCCQBgCJBjEJQBjEIgeEIQgeEKh7DlQh7DmlICUQknCGlnBLQlTBGkrAAQleAAiDgEQjkgIipgcQlzg9mxjuQk9itixlyQiZk/AKmWg");
	this.shape_221.setTransform(1154.2415,579.475);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#FFE0C6").ss(10,1,1).p("Egg9gDDQAXl4C/kCQC5j9FQihQDrhyDfgcQCPgTEUAAQBDAADeAMQDdALAogHQAogGCNgJQCMgIBIAAQFXAAFoC1QESCLD8DgQBKBDBbCCQBgCJBjEJQBjEIgeEIQgeEKh7DlQh7DmlICUQknCGlnBLQlTBGkrAAQleAAiDgEQjkgIipgcQlzg9mxjuQk9itixlyQiZk/AMmWg");
	this.shape_222.setTransform(1158.878,580.325);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#FFE0C6").ss(10,1,1).p("Egg8gDDQAal2C+kCQC6j9FNiiQDphzDfgcQCPgTEUAAQBDAADeAMQDdALAogHQAogGCNgJQCMgIBIAAQFXAAFoC1QESCLD8DgQBKBDBbCCQBgCJBjEJQBjEIgeEIQgeEKh7DlQh7DmlICUQknCGlnBLQlTBGkrAAQleAAiDgEQjkgIipgcQlzg9mxjuQk9itixlyQiZk/AOmWg");
	this.shape_223.setTransform(1163.5624,581.125);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#FFE0C6").ss(10,1,1).p("Egg6gDDQAcl0C+kCQC7j+FKijQDnhzDegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/ARmWg");
	this.shape_224.setTransform(1168.1949,581.975);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#FFE0C6").ss(10,1,1).p("Egg5gDDQAelyC/kCQC7j+FHijQDlh1DegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/ATmWg");
	this.shape_225.setTransform(1172.8754,582.775);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#FFE0C6").ss(10,1,1).p("Egg4gDDQAglwDAkCQC8j+FEilQDih1DegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/AVmWg");
	this.shape_226.setTransform(1177.5041,583.625);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#FFE0C6").ss(10,1,1).p("Egg3gDDQAjluDAkCQC8j+FCimQDfh2DfgcQCPgTEUAAQBDAADeAMQDdALAogHQAogGCNgJQCMgIBIAAQFXAAFoC1QESCLD8DgQBKBDBbCCQBgCJBjEJQBjEIgeEIQgeEKh7DlQh7DmlICUQknCGlnBLQlTBGkrAAQleAAiDgEQjkgIipgcQlzg9mxjuQk9itixlyQiZk/AWmWg");
	this.shape_227.setTransform(1182.181,584.425);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#FFE0C6").ss(10,1,1).p("Egg2gDDQAlltDBkBQC9j/E+imQDdh3DfgcQCPgTEUAAQBDAADeAMQDdALAogHQAogGCNgJQCMgIBIAAQFXAAFoC1QESCLD8DgQBKBDBbCCQBgCJBjEJQBjEIgeEIQgeEKh7DlQh7DmlICUQknCGlnBLQlTBGkrAAQleAAiDgEQjkgIipgcQlzg9mxjuQk9itixlyQiZk/AYmWg");
	this.shape_228.setTransform(1186.8061,585.275);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#FFE0C6").ss(10,1,1).p("Egg0gDDQAnlrDAkCQC+j/E8imQDbh4DegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/AbmWg");
	this.shape_229.setTransform(1191.4796,586.125);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#FFE0C6").ss(10,1,1).p("EggzgDDQAqlpDAkBQC/kAE5inQDYh5DegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/AdmWg");
	this.shape_230.setTransform(1196.1014,586.925);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#FFE0C6").ss(10,1,1).p("EggygDDQAslnDBkCQC/j/E3ioQDVh6DfgcQCPgTEUAAQBDAADeAMQDdALAogHQAogGCNgJQCMgIBIAAQFXAAFoC1QESCLD8DgQBKBDBbCCQBgCJBjEJQBjEIgeEIQgeEKh7DlQh7DmlICUQknCGlnBLQlTBGkrAAQleAAiDgEQjkgIipgcQlzg9mxjuQk9itixlyQiZk/AemWg");
	this.shape_231.setTransform(1200.7717,587.775);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#FFE0C6").ss(10,1,1).p("EggwgDDQAullDCkBQC/kAE0ipQDTh7DegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/AhmWg");
	this.shape_232.setTransform(1205.3905,588.575);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#FFE0C6").ss(10,1,1).p("EggvgDDQAwlkDCkBQDAkAExipQDRh8DegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/AjmWg");
	this.shape_233.setTransform(1210.0578,589.425);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#FFE0C6").ss(10,1,1).p("EggugDDQAzliDDkAQDAkBEuiqQDOh9DfgcQCPgTEUAAQBDAADeAMQDdALAogHQAogGCNgJQCMgIBIAAQFXAAFoC1QESCLD8DgQBKBDBbCCQBgCJBjEJQBjEIgeEIQgeEKh7DlQh7DmlICUQknCGlnBLQlTBGkrAAQleAAiDgEQjkgIipgcQlzg9mxjuQk9itixlyQiZk/AkmWg");
	this.shape_234.setTransform(1214.6737,590.225);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#FFE0C6").ss(10,1,1).p("EggsgDDQA1lgDCkBQDCkAErisQDMh9DegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/AnmWg");
	this.shape_235.setTransform(1219.3382,591.075);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#FFE0C6").ss(10,1,1).p("EggrgDDQA4leDCkAQDCkBEpisQDJh/DegcQCQgTEUAAQBCAADeAMQDdALApgHQAogGCMgJQCNgIBIAAQFWAAFoC1QESCLD8DgQBKBDBcCCQBgCJBjEJQBiEIgeEIQgeEKh7DlQh7DmlHCUQknCGloBLQlSBGkrAAQlfAAiCgEQjlgIiogcQl0g9mxjuQk9itixlyQiZk/ApmWg");
	this.shape_236.setTransform(1223.9514,591.875);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#FFE0C6").ss(10,1,1).p("EggqgDDQA6lcDDkBQDDkBElitQDHh/DfgcQCPgTEUAAQBDAADeAMQDdALAogHQAogGCNgJQCMgIBIAAQFXAAFoC1QESCLD8DgQBKBDBbCCQBgCJBjEJQBjEIgeEIQgeEKh7DlQh7DmlICUQknCGlnBLQlTBGkrAAQleAAiDgEQjkgIipgcQlzg9mxjuQk9itixlyQiZk/AqmWg");
	this.shape_237.setTransform(1228.6132,592.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_188}]},84).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).wait(337));

	// Vrstva_25
	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#FFE0C6").ss(10,1,1).p("AtcbkQgrihhxkwQh1k8gsicQgkiAg4ijQhBi/gPguQhNj8AAkBQAAkIChllQCCkjCSizQDPkAEqhoQD1hWFvAAQBvAADKATQDLATB2AAQCNAADIgTQBxgLDTgY");
	this.shape_238.setTransform(910.725,557.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#FFE0C6").ss(10,1,1).p("AtobbQgtighskrQg6iggnh6QglhwgVhMQgiiAg0igQg9i6gOgzQgMgsgLgsQgxjPACjQQACkECZlWQCGkoCUizQCbi9DPhrQBCgiBIgaQCbg3DMgWQBygMCDgCQBlgBCtANQASABASABQDCAQB7gBQBCgBBNgEQBagFBogKQB1gMDJgZ");
	this.shape_239.setTransform(911.6211,556.675);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#FFE0C6").ss(10,1,1).p("At1bSQgvidhokqQg3icglh7QgjhugThNQghh/gxifQg5i0gMg3QgMgsgKgsQgujOAEjMQAFkGCWlMQCFkjCVixQCbi5DMhsQBCgiBHgaQCag4DHgXQBvgMCEgFQBkgDCrAKQARAAARABQC8AOB/gDQBBgBBNgEQBagGBmgKQB3gNDCgZ");
	this.shape_240.setTransform(912.5875,555.75);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#FFE0C6").ss(10,1,1).p("AuCbJQgxichjklQg1iagjh8QghhsgThOQgeh/guidQg1iugLg8QgLgrgJgsQgqjMAFjKQAIkGCTlEQCCkcCYixQCZi1DLhrQBBgjBGgaQCYg5DEgYQBsgOCEgGQBkgFCnAHQARABASAAQCzALCFgEQBAgCBMgEQBagGBjgKQB8gOC5ga");
	this.shape_241.setTransform(913.5734,554.825);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#FFE0C6").ss(10,1,1).p("AuPbAQgziZhfkjQgyiWgih+QgfhqgRhPQgdh/gqibQgxiogKhAQgKgrgJgsQgmjKAGjHQALkHCQk7QCBkWCaiwQCYixDJhsQBAgiBFgaQCXg6DAgbQBpgNCEgJQBkgGCkADQAQABASAAQCsAICKgGQA/gBBLgFQBagGBhgLQB/gOCxgb");
	this.shape_242.setTransform(914.5531,553.875);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#FFE0C6").ss(10,1,1).p("Auba3Qg2iXhakgQgviTghiAQgchngRhRQgbh+gniYQgsijgKhFQgJgrgIgrQgjjJAJjDQANkJCNkyQCAkQCbivQCXitDIhsQA/giBEgbQCVg6C9gcQBmgPCDgKQBkgIChAAQAQAAASAAQCkAGCPgHQA/gCBKgFQBZgHBfgKQCDgQCpgc");
	this.shape_243.setTransform(915.517,552.95);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#FFE0C6").ss(10,1,1).p("AuoavQg4iWhWkdQgsiQgeiBQgbhlgQhSQgZh9gjiYQgpicgIhJQgJgrgHgqQgfjIAKjAQAQkKCKkpQB+kKCdiuQCWipDGhtQA/giBDgaQCUg8C4gdQBjgPCEgNQBkgKCdgCQAQgBASAAQCdADCTgIQA+gDBJgFQBagHBcgKQCGgRChgd");
	this.shape_244.setTransform(916.4545,552.025);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#FFE0C6").ss(10,1,1).p("Au0amQg6iUhRkZQgqiNgdiDQgZhjgOhTQgXh9ggiVQgliXgHhOQgIgqgGgqQgcjGAMi9QATkLCHkgQB8kECfitQCVimDEhsQA+giBCgbQCSg8C1gfQBhgQCDgPQBkgLCagGQAQgBARAAQCVABCYgLQA+gDBIgFQBagHBagLQCKgRCYge");
	this.shape_245.setTransform(917.395,551.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#FFE0C6").ss(10,1,1).p("AvAadQg9iShNkWQgniLgbiDQgWhigOhTQgVh9gdiTQggiRgHhTQgHgpgFgqQgYjFANi6QAWkMCEkXQB6j+ChisQCUihDDhtQA9giBBgbQCRg9CxghQBdgQCEgRQBjgNCXgJQAPgBASgBQCOgCCdgLQA8gEBIgFQBZgIBYgKQCNgTCRge");
	this.shape_246.setTransform(918.3247,550.175);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#FFE0C6").ss(10,1,1).p("AvMaVQg/iRhIkTQgliHgZiGQgVhfgMhUQgUh8gZiSQgciLgGhYQgGgogEgqQgVjDAPi3QAZkOCBkOQB4j4CjirQCSidDChtQA8giBAgbQCPg+CugiQBbgSCDgTQBjgOCUgMQAPgBARgCQCGgECigNQA8gEBHgGQBZgHBWgLQCRgUCIgf");
	this.shape_247.setTransform(919.2375,549.25);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#FFE0C6").ss(10,1,1).p("AvYaMQhBiPhEkQQgiiEgXiHQgThdgMhVQgRh8gWiQQgYiGgFhbQgFgpgEgpQgRjCAQizQAckPB+kFQB3jyCliqQCRiaDAhtQA7ghA/gcQCOg/CqgjQBYgSCDgWQBjgQCQgOQAPgCASgCQB+gHCngOQA7gFBGgGQBZgHBUgLQCUgVCAgg");
	this.shape_248.setTransform(920.1246,548.325);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#FFE0C6").ss(10,1,1).p("AvjaDQhEiNg/kNQggiBgViIQgRhbgKhWQgQh8gSiOQgUiAgFhfQgEgpgDgpQgOjAATiwQAekRB7j8QB2jrCmiqQCQiVC/htQA6giA+gcQCMg/CnglQBVgUCDgXQBigRCOgSQAOgCARgDQB3gICsgRQA7gFBFgFQBYgIBSgMQCYgWB3gg");
	this.shape_249.setTransform(920.9985,547.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#FFE0C6").ss(10,1,1).p("AvvZ6QhGiLg7kKQgdh9gUiKQgOhZgKhYQgOh7gPiMQgPh6gEhkQgDgogCgpQgLi/AUitQAikRB4jzQB0jmCoioQCPiSC9huQA5ghA9gcQCLhACjgnQBSgTCDgaQBigTCKgVQAPgDARgCQBvgMCwgRQA7gFBEgHQBYgIBQgLQCbgXBwgh");
	this.shape_250.setTransform(921.8693,546.45);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#FFE0C6").ss(10,1,1).p("Av7ZxQhHiJg3kGQgah7gTiLQgMhXgJhYQgMh7gLiKQgMh1gChpQgCgngCgpQgHi9AWiqQAkkSB1jrQByjfCqioQCOiNC7huQA4ghA8gcQCKhCCfgoQBQgUCCgcQBigVCHgYQAOgCASgDQBngOC2gTQA5gGBEgHQBYgIBNgLQCfgYBngi");
	this.shape_251.setTransform(922.714,545.525);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#FFE0C6").ss(10,1,1).p("AwGZoQhKiHgykEQgYh3gQiNQgKhVgIhZQgKh6gIiIQgIhvgBhtQgCgnAAgpQgEi8AXimQAnkUBzjhQBwjaCsimQCNiKC5huQA4ghA7gdQCIhCCbgqQBNgUCDgeQBhgXCEgbQAOgDARgDQBggRC6gUQA5gGBDgHQBYgJBLgLQCigZBfgj");
	this.shape_252.setTransform(923.5019,544.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#FFE0C6").ss(10,1,1).p("AwQZgQhujDgwnGQggk6AAmdQAAnxCylaQC9lxGjj8QC2huDZg+QCCglEshGQBngbFKgjQEggeB9g0");
	this.shape_253.setTransform(924.25,543.675);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#FFE0C6").ss(10,1,1).p("AwaZeQhsjDgom3QgNicgEimQgFiGACiXQABg7ABg9QAFkPA5jlQAoihBCiLQAJgSAJgSQA4hsBMhkQCojcEKiuQAQgKARgKQCzhxDThAQA5gTBcgYQBwgfCigoQBQgXDVgaQA+gJBIgHQEcggB/g0");
	this.shape_254.setTransform(925.0859,543.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#FFE0C6").ss(10,1,1).p("AwiZbQhsjEggmxQgKiaAAikQgEiDAIiVQACg6ACg8QAIkMA8jjQApifBDiLQAIgSAJgRQA4hsBLhkQCmjaEFixQAQgLAQgKQCwh0DOhCQA4gUBagZQBughCfgpQBPgaDSgcQA9gIBJgJQEWggCCg0");
	this.shape_255.setTransform(925.7943,543.325);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#FFE0C6").ss(10,1,1).p("AwqZZQhqjHgYmqQgIiYAEihQgDiAANiUQADg5AEg8QAMkHA+jiQApidBEiLQAIgSAJgSQA3hqBMhkQCjjYEAi1QAPgMAQgKQCsh2DKhEQA3gVBXgaQBtgjCcgsQBPgbDPgdQA8gJBIgKQESghCEg0");
	this.shape_256.setTransform(926.3943,543.15);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#FFE0C6").ss(10,1,1).p("AwwZXQhpjJgRmkQgEiWAHifQgBh9ASiSQAEg5AFg6QARkCBAjiQAqibBEiLQAIgSAJgRQA3hpBKhlQCijXD6i4QAPgLAQgLQCoh6DFhFQA2gXBVgaQBrgmCZgtQBPgdDMgfQA7gKBIgJQENgjCGg0");
	this.shape_257.setTransform(926.8156,542.975);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#FFE0C6").ss(10,1,1).p("Aw1ZVQhojLgJmeQgBiUALicQABh6AWiRQAFg3AGg6QAVj+BDjhQAriZBEiLQAIgRAJgSQA2hoBLhlQCfjVD1i8QAOgLAQgLQClh9DAhHQA1gZBTgaQBogpCXgtQBPggDIggQA7gLBHgKQEJgjCIg1");
	this.shape_258.setTransform(927.1413,542.775);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#FFE0C6").ss(10,1,1).p("Aw5ZTQhojNgBmYQACiSAPiaQACh3AbiPQAHg3AHg4QAZj5BGjhQAriXBEiLQAIgRAKgSQA1hnBKhlQCdjUDwjAQAOgLAPgLQCih/C6hKQA0gZBRgcQBngrCUgvQBPgiDEghQA7gLBGgLQEFgkCLg1");
	this.shape_259.setTransform(927.425,542.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#FFE0C6").ss(10,1,1).p("Aw9ZQQhnjOAHmSQAEiQATiYQAEhzAgiPQAIg1AIg4QAej0BHjgQAsiVBFiKQAIgSAJgRQA1hmBKhmQCbjSDqjDQAOgMAOgLQCfiCC0hLQA0gcBPgcQBlgtCRgxQBPgkDBgiQA6gMBGgLQEAgmCNg0");
	this.shape_260.setTransform(927.6556,542.425);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxBZOQhmjRAPmLQAHiNAXiWQAGhxAkiNQAJg0AKg3QAhjwBLjfQAsiTBFiKQAIgSAKgRQA0hlBJhmQCZjQDljHQANgMAOgLQCbiFCwhOQAzgdBNgcQBjgwCOgyQBPgmC+gkQA5gMBFgMQD8gmCPg1");
	this.shape_261.setTransform(927.8538,542.25);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxDZMQhljTAWmFQALiMAaiTQAHhuApiLQALgzAKg3QAmjrBNjeQAtiRBFiKQAIgSAKgRQA0hkBIhmQCXjPDfjLQAOgLANgLQCYiICrhQQAygeBKgdQBigyCLg0QBPgoC6glQA5gNBEgMQD4gpCRg0");
	this.shape_262.setTransform(927.995,542.075);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxGZKQhkjVAel/QANiKAeiRQAJhqAuiLQAMgyALg1QAqjmBQjeQAtiPBGiKQAIgRAJgSQA0hiBIhnQCUjNDbjOQANgMANgLQCUiLCmhSQAxgfBIgeQBgg1CIg0QBPgrC3gmQA4gOBEgNQDzgqCUg0");
	this.shape_263.setTransform(928.1038,541.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxIZHQhkjWAml5QARiIAiiOQAKhoAziIQAMgyAOg0QAujiBRjdQAuiNBGiKQAJgRAJgSQAzhhBIhnQCSjLDVjTQANgLANgMQCQiOChhTQAwghBGgeQBeg4CGg2QBOgtC0gnQA4gOBDgOQDugqCWg0");
	this.shape_264.setTransform(928.1749,541.725);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxKZFQhjjYAulzQATiGAmiMQAMhkA3iHQAOgxAPgzQAyjeBUjcQAviLBGiKQAJgRAJgRQAyhgBIhoQCQjKDPjVQANgMAMgMQCNiRCchVQAvgiBEgfQBcg6CDg4QBPgvCvgoQA4gPBCgOQDqgsCZg0");
	this.shape_265.setTransform(928.2312,541.55);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxNZDQhhjbA2lsQAWiDAqiKQANhhA8iHQAPguAQg0QA2jZBXjbQAviJBHiKQAIgRAKgRQAyhfBHhoQCNjIDLjaQALgMANgLQCJiUCYhXQAugkBBggQBag8CBg5QBOgxCsgqQA3gPBCgPQDmgtCag0");
	this.shape_266.setTransform(928.2741,541.35);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxOZBQhhjdA+lmQAZiCAtiHQAPheBBiFQARguAQgyQA7jUBZjcQAwiGBHiKQAIgQAKgSQAxheBHhoQCLjGDFjeQAMgMAMgLQCGiXCShZQAtgmBAggQBYg+B9g7QBPgzCpgrQA2gQBBgQQDhgtCdg1");
	this.shape_267.setTransform(928.2781,541.175);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxQY/QhfjfBFlgQAciAAxiEQAQhbBGiEQASgtASgyQA/jPBbjbQAxiEBHiJQAJgSAJgRQAxhdBGhoQCJjFDAjhQALgMAMgMQCDiZCNhbQAsgnA9ghQBWhBB7g8QBOg2CmgrQA2gSBBgPQDcgvCfg1");
	this.shape_268.setTransform(928.2779,541);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxRY8QhfjgBNlaQAfh+A1iCQAShYBLiCQATgsATgxQBDjLBejbQAxiBBHiKQAJgQAJgSQAxhbBFhpQCHjDC7jlQALgMALgMQB/idCJhcQArgpA7ghQBUhEB4g9QBOg4CigtQA2gRBAgRQDYgwChg0");
	this.shape_269.setTransform(928.2638,540.825);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxTY6QhdjiBUlUQAih7A5iBQAThVBQiAQAUgrAUgwQBIjGBgjaQAyiABIiJQAIgRAKgRQAwhaBFhqQCFjBC1joQAKgNALgMQB8igCDhfQAqgpA6giQBShGB1g/QBOg6CfguQA1gSA/gSQDUgwCkg1");
	this.shape_270.setTransform(928.2693,540.65);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxUY4QhdjlBdlNQAkh6A9h9QAVhSBUh/QAWgrAVgvQBMjBBijaQAzh9BIiJQAJgRAJgRQAwhZBFhqQCCjACwjsQAKgMALgNQB3iiB/hhQApgrA4gjQBQhIByhAQBOg8CcgwQA0gTA/gRQDPgyCmg1");
	this.shape_271.setTransform(928.2187,540.475);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxVY2QhcjnBklHQAoh4BBh7QAWhPBZh9QAXgqAWguQBQi8BljaQA0h7BIiJQAIgQAKgSQAvhYBEhqQCBi+CqjwQAKgMAKgNQB0ilB7hjQAogsA1gkQBOhKBwhCQBOg+CXgxQA0gTA+gTQDLgzCpg0");
	this.shape_272.setTransform(928.1708,540.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxWYzQhbjoBslBQAqh2BFh5QAYhLBeh9QAYgoAYgtQBUi4BnjZQA0h5BJiJQAIgRAKgRQAuhXBEhqQB+i9CmjzQAJgNAKgMQBwioB2hlQAnguAzgkQBMhNBthDQBOhBCUgyQAzgUA+gSQDHg1Cqg0");
	this.shape_273.setTransform(928.1141,540.125);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxWYxQhbjrB0k7QAthzBJh3QAZhIBjh7QAZgoAZgrQBZi0BpjYQA1h4BJiIQAIgRAKgRQAuhWBDhqQB8i7Cgj3QAKgNAJgNQBtirBwhmQAmgwAxglQBLhPBqhFQBOhCCRgzQAygVA9gTQDCg2Ctg0");
	this.shape_274.setTransform(928.0371,539.95);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxYYvQhZjtB8k0QAwhxBMh0QAbhGBoh6QAagmAagsQBdivBsjXQA1h1BJiJQAJgQAKgSQAthUBDhrQB6i5Cbj7QAIgNAJgMQBqivBshoQAlgyAugkQBJhSBnhGQBOhFCOg1QAygVA8gUQC+g2Cvg1");
	this.shape_275.setTransform(927.9612,539.75);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxYYtQhYjvCDkuQAzhwBQhxQAdhDBsh4QAcglAbgrQBhiqBujXQA2h0BKiIQAIgQAKgRQAthUBDhrQB3i4CWj+QAIgNAHgNQBoixBmhqQAkgzAtgmQBHhUBkhHQBOhHCKg2QAxgWA8gUQC5g4Cyg1");
	this.shape_276.setTransform(927.882,539.575);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxZYrQhXjxCLkpQA2hsBUhwQAeg/Bxh3QAdgkAdgqQBlimBwjWQA3hxBKiIQAIgQAKgSQAthSBChsQB1i2CPkCQAIgNAJgNQBji0BihsQAjg1AqgmQBFhXBihJQBNhICHg3QAxgXA8gVQC0g4C0g1");
	this.shape_277.setTransform(927.7849,539.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxZYoQhXjyCTkiQA5hsBYhtQAgg8B1h1QAegkAegpQBpihB0jVQA3hwBKiIQAJgPAJgSQAshRBChsQBzi0CKkGQAIgNAIgNQBgi3BdhuQAig2AognQBDhZBfhKQBNhMCEg4QAwgXA7gWQCwg5C2g1");
	this.shape_278.setTransform(927.6944,539.225);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxaYmQhVj0CakcQA8hqBchqQAhg5B7h0QAfgjAfgoQBticB2jVQA4huBKiHQAJgQAJgSQAshQBBhsQBxizCFkJQAHgNAIgNQBdi6BXhwQAhg3AmgoQBChcBchLQBNhOCAg5QAwgYA6gWQCsg7C4g1");
	this.shape_279.setTransform(927.5989,539.05);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxaYkQhVj3CikWQA/hnBghoQAig2CAhzQAgghAggoQByiXB4jUQA5hsBKiIQAJgPAKgSQArhOBBhtQBuixCAkNQAHgOAHgNQBZi9BThyQAgg4AkgoQA/heBahNQBNhQB8g7QAwgYA5gXQCng8C7g1");
	this.shape_280.setTransform(927.4904,538.875);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxbYhQhUj4CqkQQBChlBkhmQAkgzCEhxQAighAhgmQB2iTB6jTQA5hqBMiJQAIgOAKgSQAqhNBBhtQBsiwB6kQQAHgOAHgNQBWjABOh0QAfg6AhgpQA+hgBXhPQBNhSB5g7QAugaA5gXQCjg9C9g1");
	this.shape_281.setTransform(927.386,538.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxcYfQhTj6CykKQBFhjBnhjQAmgwCJhwQAjggAiglQB6iPB9jTQA6hnBLiIQAJgQAKgQQAqhNBAhtQBpiuB2kUQAGgOAGgOQBTjCBJh2QAeg7AfgqQA8hjBUhQQBNhUB1g9QAvgZA4gYQCeg/DAg0");
	this.shape_282.setTransform(927.3027,538.525);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxcYdQhSj8C5kEQBIhhBrhhQAogtCNhuQAlgeAjglQB+iKCAjSQA6hmBMiIQAIgPAKgSQAqhKBAhuQBmisBxkYQAGgOAGgOQBPjFBEh4QAdg9AdgqQA6hlBRhRQBNhXByg+QAugaA4gZQCag/DBg1");
	this.shape_283.setTransform(927.1682,538.325);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxdYbQhRj/DBj9QBLhfBvhfQApgpCThtQAlgeAlgkQCCiFCCjSQA7hjBMiIQAJgPAKgSQAphJA/huQBlirBrkbQAFgOAGgOQBMjIA/h6QAcg/AbgqQA4hoBOhTQBNhYBvhAQAtgbA3gZQCVhADEg1");
	this.shape_284.setTransform(927.0527,538.15);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxdYZQhQkBDJj3QBOhdBzhcQAqgnCXhrQAngdAmgjQCHiBCEjRQA7hhBNiIQAIgPAKgSQAphHA/hvQBiipBmkfQAFgOAGgOQBIjLA6h8QAbhAAZgrQA2hqBMhVQBMhaBshBQAsgcA3gZQCRhCDGg1");
	this.shape_285.setTransform(926.9362,537.975);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxdYXQhQkDDRjwQBRhbB2haQAsgkCdhqQAngcAogiQCKh8CHjQQA8hfBNiJQAJgPAKgRQAohIA9huQBhinBhkjQAFgOAFgOQBFjOA1h+QAahBAWgsQA1htBIhVQBNhdBohCQAsgcA2gaQCMhDDJg1");
	this.shape_286.setTransform(926.8046,537.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxdYUQhPkEDZjrQBPhVB/hbQAtghChhpQC6h5CwkKQA9hdBNiIQAqhLBNiKQBfimBbkmQBrlXA9iGQBqjoDAiAQCahmEZhK");
	this.shape_287.setTransform(926.6806,537.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_238}]},84).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).wait(337));

	// Vrstva_24
	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxdYUQhPkEDZjrQBPhVB/hbQAtghChhpQC6h5CwkKQA9hdBNiIQAqhLBNiKQBfimBbkmQBrlXA9iGQBqjoDAiAQCahmEZhK");
	this.shape_288.setTransform(926.6806,537.625);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxXYYQgQg5gUhCQgahmAShZQAGhiAyhaQAGgLAGgMQAehDA5hBQAigsAygnQAygmBNgnQAvgWA7gZQANgFAMgGQA0gZA8gdQA6gZAugnQAygfAwgrQAzgrAwg4QAlgqAmg4QAigwAkg9QAJgPAMgUQARgcAXgnQAnhCA2hmQAKgRAKgTQBHiIAtiQQAXhLANhrQABgFAAgFQAMhiAOhBQAGgvACgtQACgsAHghQAPhaAVhJQAEgOAFgNQAWg6AlgvQAxhCBEgwQA+hBB+gjQAhgOAlgMQDFgxDag0");
	this.shape_289.setTransform(926.098,537.825);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#FFE0C6").ss(10,1,1).p("AxEYcQgPg5gjhKQgvhugBhXQgXhsAbheQACgNAEgMQAJhQAuhLQAbg2A0gsQA6guBTggQA3gSBBgQQAOgDAOgDQA3gRBIgNQBIgLAxgcQA9gTA5giQA+gjA6g2QAtgpAtg6QAmgyArhCQAJgPAPgYQASgeAagrQAphFA+hyQAKgTALgVQBVimAliLQAShKgCh/QAAgGAAgFQgCh0AFg9QgCgwgJgyQgKgxABggQgBhcARhYQADgQAFgPQAVhBAvgwQA5g/BWgmQA3g1CmgMQAkgIAqgHQD5gSDOgs");
	this.shape_290.setTransform(924.1386,538.025);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#FFE0C6").ss(10,1,1).p("AweYhQgNg6gzhTQhFh1gUhWQgyh0ADhjQgBgOAAgOQgLhcAjhVQAUhAA3gyQBBg3BZgXQA+gNBHgHQAQgCAQgBQA6gHBVABQBVAEAzgRQBIgHBDgZQBJgaBEg1QA1goA0g8QArg0AwhIQAJgOASgbQAUggAegwQAshHBDiAQALgUAMgXQBjjEAciHQAOhIgRiUQgBgFAAgFQgQiHgDg5QgLgxgVg4QgVg1gEgfQgShfANhnQACgSAFgRQAUhIA4gwQBCg8BogcQAwgoDNAKQApgDAvgBQEsAMDCgk");
	this.shape_291.setTransform(920.2775,538.25);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#FFE0C6").ss(10,1,1).p("AvnY4QgMg5hDhcQhbh8gmhUQhOh+gVhnQgEgPgEgQQgehoAXhfQANhKA6g3QBIhABfgPQBGgJBNABQARABASABQA+ABBhARQBiASA2gFQBTAFBMgRQBVgRBNgzQA+gnA6g/QAxg2A0hMQAKgOAUggQAVghAig0QAwhLBJiLQAMgXAMgYQByjjASiBQAKhIgginQgBgGgBgGQgdiZgMg0QgTgygig9Qggg6gJgeQgihhAIh2QACgVAEgSQAThPBCgwQBKg6B6gTQApgaD1AhQAtACAzAEQFhArC1gc");
	this.shape_292.setTransform(914.7806,536.4521);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#FFE0C6").ss(10,1,1).p("AusZjQgKg5hThkQhwiEg5hSQhriIgshrQgIgRgGgQQgzh2ALhoQAHhUA8g9QBQhIBlgIQBNgEBTAKQATADATADQBCAKBtAgQBwAhA5AFQBeARBUgIQBhgJBXgwQBGgnBBhBQA1g3A7hSQAIgOAYgjQAXgjAlg4QAzhOBPiYQANgZANgaQCAkBAKh7QAEhIgui7QgCgGgBgGQgrisgVgvQgbg0gthBQgshAgOgdQgzhjAEiFQABgWAEgVQAShVBMgxQBSg3CMgKQAhgNEdA4QAxAHA4AKQGVBJCpgU");
	this.shape_293.setTransform(908.8442,532.8439);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#FFE0C6").ss(10,1,1).p("AtuaQQgJg4hjhtQiGiLhLhRQiHiRhEhwQhciWAAiBQAAhoBNhGQBKhDBqAAQBoAABvAdQBGATB5AuQB+AwA7AQQBpAeBdAAQDEAACfiYQA7g5A+hXQASgZBUh8QA/hdBnjPQCPkgAAh2QAAhGg9jPQg7jKgfgtQgkg1g5hGQg3hEgTgdQhDhkAAiVQAAh/Bqg+QBag0CeAAQAfAAGyBrQHJBnCdgL");
	this.shape_294.setTransform(902.625,528.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#FFE0C6").ss(10,1,1).p("AtWaYQgHhAhahmQgeghgYgZQghgigbgeQg/hGgxg0QgLgMgLgLQhUhZgzhEQgigtgbgpQhJhzgYhoQgJgjgCgiQgIhsBBhLQAkguAygXQAhgRArgFQAIgBAIgBQAtgEAwAGQA4AGA6ATQAlAMAwAUQAvATA9AdQBDAeA0AaQAnARAcAKQBpAoBfAIQCmANCPhYQAigUAggaQBEg1BFhVQAFgFAIgKQAggmBGheQAbgkAig1QAwhKA7h3QAHgOAGgOQBGiPAghpQAjhxgChFQgCg2gbhnQgQg7gYhIQgkhtgihDQgXg0gTgVQgRgWgVgXQgbgggpgoQgbgcgWgWQgYgZgNgQQghgmgTgvQgghHgBhbQAAgCAAgDQABhLAug1QAegkAugYQAcgOAhgKQBGgYCFAIQAmAEECA+QBVAVBoAZQEDA7CQAUQAhAFApADQBFAGAwABQACgBACAAQAKABAFABQAIABAJgB");
	this.shape_295.setTransform(900.3812,528.9484);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#FFE0C6").ss(10,1,1).p("As8aiQgGhKhZhnQgfghgagcQgjglgbggQg9hIg3g4QgMgNgMgMQhehhgxhAQgkgvgdgqQhPh3gfhsQgKgkgFgjQgQhvA1hRQAdgzAsgeQAdgXAqgKQAHgCAJgBQAtgKAzAFQA7AGA8AWQAmAOAwAYQAvAWA+AkQBAAgA3AkQAnAUAcAOQBqAyBgAQQCqAbCahMQAlgSAkgYQBMgxBNhSQAFgFAJgKQAmgmBLhdQAfglAlg0QAzhIBAiCQAHgOAHgOQBIiXAbhvQAfh2gEhKQgEg+gchmQgRg+gchIQgphtgrhHQgZgzgZgWQgTgVgYgWQgbgegyglQgdgagagVQgbgYgQgOQgmglgWguQgohIgBhfQAAgDAAgCQAChNA2g1QAjgkAwgWQAegOAjgJQA9gUCZAQQA2AID/A9QBcAWBoAZQEfBCCHASQAcAEAyACQBKAFAwAAQACgBACgBQALACABACQADACAGAA");
	this.shape_296.setTransform(898.0395,528.8493);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#FFE0C6").ss(10,1,1).p("AsiasQgFhUhXhnQgfgigcgfQglgngbghQg9hLg8g+QgNgNgMgMQhohpgwg9QgmgwgfgtQhUh5gnhwQgMglgIgkQgYhzAphXQAXg4AlglQAZgcApgPQAIgDAIgDQAvgOA1AEQA9AFA/AaQAnAQAwAbQAvAaA/AqQA8AjA7AtQAmAXAdARQBsA9BgAYQCvAqCkhCQApgPAngWQBUgsBUhPQAHgGAJgJQAsgnBQhbQAiglAqg0QA2hHBEiMQAHgPAHgOQBKieAYh2QAah5gGhRQgGhFgdhlQgThBgfhKQguhtg0hKQgcgxgegXQgWgVgagVQgcgag5gkQgfgYgfgUQgdgVgTgPQgrgjgbgtQgwhIAAhkQAAgCAAgDQABhOBCg2QAmgjAygVQAhgNAkgHQA0gSCuAYQBEAMD9A9QBiAXBqAZQE6BIB9APQAYAEA6ABQBPAEAyAAQABgBACgBQALACgCADQgDADAFAB");
	this.shape_297.setTransform(895.5819,528.6643);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#FFE0C6").ss(10,1,1).p("AsLa3QgDhehWhnQgegigggiQgngqgagjQg9hNhBhDQgNgNgNgOQhyhwgvg6QgogxghgvQhZh8guh1QgPgmgJgkQggh3AdhcQAPg+AfgsQAVgiApgUQAHgEAIgDQAvgUA5AEQA/AEBCAeQAoASAwAfQAvAdA/AxQA5AlA/A2QAlAbAeAUQBsBIBiAfQCyA4Cwg2QAsgNAqgTQBcgoBbhNQAIgFAKgJQAygnBVhaQAmgmAtg0QA7hFBHiWQAHgPAHgQQBNikAUh9QAWh9gIhXQgIhNgehjQgWhFgihKQgyhtg9hOQgggvgigZQgZgUgdgTQgcgYhBgiQgigWgjgSQgfgUgVgOQgxgigfgsQg4hIAAhoQAAgDAAgDQAChPBLg3QArgiA0gUQAigMAmgGQAsgPDCAgQBTAQD7A8QBoAZBrAZQFVBOB0ANQAUADBDAAQBTADAzAAQABgCABgBQANACgHAEQgHAFACAB");
	this.shape_298.setTransform(893.3968,528.4106);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#FFE0C6").ss(10,1,1).p("ArybCQgDhnhUhnQgfgjghglQgpgtgbgkQg7hPhHhIQgOgOgOgOQh8h4gtg4QgqgygjgwQheh/g1h5QgRgngNgmQgoh6AShiQAHhCAZgzQARgpAogYQAIgFAIgEQAwgZA6ADQBCADBEAiQAqAVAxAiQAuAgBAA3QA1AoBDA/QAlAeAfAYQBtBSBiAmQC3BIC7grQAugLAugRQBkgkBjhJQAIgGALgIQA4goBahYQAqgnAwgzQA+hEBMifQAIgQAHgQQBOisAQiEQASiBgKhdQgKhVgfhhQgXhIgmhLQg2hthHhSQgigugogZQgbgUgfgSQgdgVhKghQgjgTgngRQghgSgZgNQg3ghgjgrQhAhIAAhtQAAgDAAgDQADhPBVg5QAvghA3gTQAkgLAngFQAjgMDXAnQBhAVD5A8QBvAaBsAaQFwBTBqALQAQACBLAAQBZABAzAAQABgCABgCQANADgKAFQgNAGAAAC");
	this.shape_299.setTransform(891.1183,528.0941);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#FFE0C6").ss(10,1,1).p("ArYbOQgBhxhThoQgfgjgkgoQgrgvgbgmQg6hShMhMQgPgPgPgPQiGh/grg1Qgsg0gmgxQhjiDg8h9QgTgogPgmQgwh+AGhoQAAhIATg6QAMguAogdQAHgGAJgFQAwgeA9ACQBFADBGAlQAsAXAwAmQAuAjBBA+QAyAqBGBJQAlAhAfAbQBuBdBjAuQC7BWDGggQAygIAwgPQBtgfBqhHQAJgGALgIQA/goBfhXQAtgnA0gzQBChCBQipQAIgRAHgRQBRizALiKQAOiFgMhkQgMhcgfhgQgahLgqhMQg6hthQhVQglgtgtgaQgdgTgigRQgegThRgeQgmgRgrgQQgkgQgbgNQg9gfgngqQhIhJAAhxQAAgDAAgDQAEhRBeg5QA0ghA6gRQAmgLAngEQAbgIDrAvQBxAZD2A7QB2AcBtAZQGLBaBgAIQANACBTgCQBeAAAzAAQABgCABgDQAOAEgOAGQgSAHgDAD");
	this.shape_300.setTransform(888.6906,527.7599);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#FFE0C6").ss(10,1,1).p("Aq7baQAAh7hRhoQgfgkgngrQgtgxgagoQg6hUhRhSQgQgPgPgPQiQiHgqgyQgug1gog0QhoiFhEiBQgVgpgRgnQg4iCgHhuQgGhMAMhBQAIg0AogjQAHgGAIgGQAxgjBAABQBHACBJApQAtAZAwApQAuAnBCBEQAuAtBKBSQAkAkAgAfQBvBnBlA2QC+BlDRgWQA1gFA0gMQB1gcBxhEQALgGALgHQBFgpBkhVQAxgnA4gzQBFhBBUizQAIgRAHgRQBTi7AIiRQAJiJgOhqQgOhjgghfQgchOgthNQg/huhZhYQgogrgygbQgggTgkgQQgegPhagdQgngPgwgPQgmgOgegNQhDgdgqgpQhQhJAAh2QAAgDAAgDQADhSBpg6QA4ggA8gQQAogKAqgCQARgGEAA3QB/AdD1A7QB7AdBvAZQGmBgBWAFQAJACBcgCQBigCA1AAQAAgCABgDQAPAEgSAHQgXAIgFAE");
	this.shape_301.setTransform(885.9017,527.4205);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#FFE0C6").ss(10,1,1).p("AqbbmQACiFhRhoQgegkgqguQgvg0gagpQg5hXhXhWQgPgQgRgQQiaiPgpgvQgvg2gqg1QhtiJhLiFQgYgqgTgoQhAiFgTh0QgOhSAGhIQAFg5AngoQAHgGAIgHQAxgoBDAAQBKABBLAtQAuAbAxAsQAuAqBBBLQAsAvBNBcQAkAnAhAiQBvByBmA9QDCB0DdgKQA4gDA3gKQB9gXB4hCQAMgGAMgHQBLgpBphUQA0goA8gyQBJg/BXi9QAJgSAHgSQBVjCAEiYQAFiMgQhwQgQhrghhdQgehSgwhOQhDhthjhdQgrgpg3gcQgigSgngPQgfgNhhgbQgqgMg1gOQgngMgigMQhIgcgugoQhYhKAAh6QAAgDAAgDQAEhTByg7QA9ggA+gOQAqgKAsgBQAJgDEUA/QCOAiDyA6QCCAeBvAaQHCBmBNADQAEAABlgDQBngCA1AAQABgDAAgEQAQAFgWAIQgcAKgIAE");
	this.shape_302.setTransform(882.8718,527.0432);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#FFE0C6").ss(10,1,1).p("Ap5bzQADiPhPhpQgPgSg7hDQgxg3gbgqQhChqh0hrQijiXgogsQiwjFhyi+QirkeAAjfQAAhKA2gxQAygtBFAAQB7AAB/B9QAvAvBDBSQAmAwBRBlQCbC8CIBaQDAB+DnAAQDQAADDhnQB6g/C9iYQBNg9BbjHQBojgAAisQAAkbhGi6QhNjMi6imQhJg/hvglQgsgNjCgtQiGgehIg5QhghJAAh/QAAhYCBg+QBug1BsAAQACAAK0ClQLGCnBTAAQAAAABtgEQBtgEA2AAIAAgHQAQAGgZAJQgiAKgKAF");
	this.shape_303.setTransform(879.6241,526.65);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#FFE0C6").ss(10,1,1).p("AqHbiQgEhlgshaQgQghgWgeQgRgag4hBQg0hBgXglQhGh0hyhqQgFgEgFgEQiXiMgug8Qgqgzgog1Qh1ichNiYQgYgvgTgsQgnhXgVhVQgdhtgBhhQgBgfACgeQAGhFAsguQAFgGAGgFQA0gvBEgBQABAAACAAQBdAABTBDQAjAdAjAsQAbAhAiAyQATAZAUAgQAVAkAlA7QASAeAWAiQAhA1AiAtQBfB3BjBXQADACACABQBVBDBfAsQBnAtB7AIQAEABAEAAQCBAGCDghQBRgVBPgnQBgguCAhgQAwgjAzgqQBNhABYirQAIgOAHgQQAphUAchSQAghiANhcQADgbACgbQAChRgEhQQgGh9gWhqQgLgxgSguQgYhAgmg9Qg2hYhHhKQgtgtgygqQguglg1gZQgmgSgugOQgFgBgFgBQgcgIhZgSQg3gLhLgLQgPgDgPgCQhHgOg5gPQgegLgYgNQgigRgXgZQgtgsgOhCQgBgHgBgGQgLg0AsgxQAUgaAlgYQAWgQAWgNQBKgpBUgKQAIgGCQAbQB+APDOArQBiAVCDAcQCbAhCKAdQG/BgBZABQAHAABEgCQARAAAUgBQA/gCAsgBQAigBAcgBQABgEAAgDQARAFgUAHQgaAJgFAD");
	this.shape_304.setTransform(881.6929,529.5619);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#FFE0C6").ss(10,1,1).p("AqSbSQgMhigvhgQgRgjgVgfQgUghgzg/QgzhEgYgnQhLh+hwhoQgFgEgFgEQiTiIg0hNQgqg2gng5QhyimhFiiQgVgxgRgvQghhZgNhcQgUhwAGhjQADggAEgeQALhHAtgvQAGgFAFgGQA3gyBFgBQABAAACAAQBkAABOBJQAhAeAfAzQAYAlAdA1QAQAcAQAjQARAmAdA+QANAgASAkQAbA6AdAwQBRB3BkBsQACACACACQBQBJBcA4QBhA5CBAQQAEAAAEABQCCANCMgdQBUgSBSglQBoguCDhiQAxgkA0gsQBUhGBcipQAIgOAIgQQArhUAghXQAihhAShkQAEgbACgcQAGhSgChWQgDiAgThvQgKgzgTgxQgahAgqhBQg8hbhJhHQgxgvgzgoQgygmg1gXQgogRgxgMQgFgBgFgBQgdgHhcgPQg8gKhLgGQgQgBgPgBQhGgIg+gEQgfgGgYgJQglgKgYgTQgzgggYg5QgCgFgCgGQgWgtAegzQANgcAdgdQASgRAUgSQA+gyBXgVQAPgMCKASQCHACDOAkQBiASCMAbQCbAgCXAdQG9BbBzACQAMAABBgCQARAAAVgBQBCgBAsgDQAhgBAggCQABgDABgDQAQAEgOAGQgSAHABAC");
	this.shape_305.setTransform(883.54,532.3059);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#FFE0C6").ss(10,1,1).p("AqcbFQgThggyhnQgRgkgVggQgXgogug8QgyhIgZgpQhQiIhuhmQgFgFgFgEQiPiDg7heQgqg5glg9Qhuixg+iqQgSg0gOgyQgchbgFhiQgMhzAPhmQAFgiAHgeQAQhIAugwQAGgFAGgGQA5g1BFgBQACAAABAAQBtABBIBOQAfAgAbA5QAUAoAZA5QANAeAMAlQANArAVBBQAJAiAOAmQATA9AYA0QBFB3BkCBQACACACADQBLBPBYBFQBcBECFAXQAFABAEABQCEAUCTgYQBYgPBWglQBvguCFhjQAzgmA2gtQBZhNBgimQAJgOAJgQQAthUAkhdQAjhgAXhqQAGgcADgeQAIhSABhbQAAiDgQh2QgIg0gVg0QgbhBguhDQhChfhLhFQg1gvg1gnQg3gmg0gWQgpgQg1gLQgEAAgGgBQgegGhggNQg/gIhMAAQgRAAgQAAQhDgChEAGQgfAAgZgFQgogDgZgNQg4gUgjgwQgDgEgDgFQghgmAQg1QAGgeAWghQAOgUAQgVQA0g9BZgeQAXgTCDAJQCRgMDOAfQBgAPCWAaQCcAdCjAdQG8BWCMADQARABA9gCQASAAAVgBQBFgBAtgDQAfgCAkgDQACgCACgDQAQADgKAEQgKAFAHAB");
	this.shape_306.setTransform(885.1524,534.8694);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#FFE0C6").ss(10,1,1).p("AqnbAQgahdg1huQgSgmgUghQgagvgqg6QgwhKgagsQhViRhshlQgFgFgFgEQiLiAhChuQgpg8glhCQhqi6g2izQgQg2gLg1QgWheAChoQgCh2AXhqQAHgiAJgfQAWhJAvgwQAFgGAGgGQA9g4BGgBQABAAACAAQB0ABBDBTQAcAjAXA+QARAsAUA9QALAgAIAoQAIAvAOBDQAFAmAJAmQANBCATA3QA2B4BlCVQACADACADQBGBWBVBRQBXBPCJAfQAFABAEABQCFAaCcgTQBbgMBbgkQB1gtCIhlQA1gnA2gvQBghUBkiiQAKgPAJgRQAwhTAnhiQAlhgAdhxQAGgcAFgfQAKhTADhhQADiGgNh8QgGg1gXg2QgchDgyhFQhIhjhNhDQg5gvg2gmQg7gng1gUQgqgPg4gJQgEgBgHAAQgfgFhkgKQhDgGhMAEQgRABgQACQhCAEhJARQggAEgaAAQgqAEgagHQg+gIgugmQgEgEgEgEQgsggADg2QgCggAPglQAKgXANgZQAphHBbgoQAegYB9gBQCbgZDOAZQBfAMCfAZQCcAaCxAeQG6BQClAFQAXAAA4gBQAUAAAUgBQBIgBAugDQAegCAogEQACgCADgDQAQACgEADQgDADAMAA");
	this.shape_307.setTransform(886.9668,536.6125);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#FFE0C6").ss(10,1,1).p("Aqya9Qgghbg5h0QgTgngUgiQgbg2gmg4QgwhOgagtQhaichqhjQgFgFgFgFQiHh7hJh/Qgog/gkhGQhnjDgti9QgOg5gIg4QgRheAKhwQAGh6AfhsQAKgjAMgfQAbhLAvgxQAGgGAHgFQA/g8BGAAQACAAABAAQB8ABA+BYQAaAlATBFQAOAvAPBBQAIAiAEAqQAEAzAGBGQAAAoAFApQAGBFAPA7QApB3BkCqQADADACAEQBBBcBRBeQBRBaCPAnQAFABAEACQCHAgCjgOQBfgJBegjQB9gtCKhmQA3goA4gxQBmhbBoigQAKgPAKgRQAxhSAshoQAmhfAih4QAIgcAFgiQANhSAGhnQAGiJgKiCQgEg2gZg6QgdhDg2hIQhOhnhQhAQg9gwg3gkQhAgog0gSQgsgPg7gHQgEAAgHgBQgggEhogHQhGgFhNAKQgRACgRAEQhBAJhOAdQghAIgaAFQgtALgbgCQhEAEg4gdQgFgCgFgDQg3gZgLg5QgJghAIgqQAFgaAKgcQAfhRBdgyQAmgfB1gKQClglDPASQBdAJCpAYQCdAYC9AeQG5BLC+AFQAcABA0gBQAVAAAUAAQBLgCAvgDQAcgDAsgFQADgBADgCQAQAAACACQAFABARgB");
	this.shape_308.setTransform(888.7398,538.1417);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#FFE0C6").ss(10,1,1).p("Aq8a7QgnhZg8h6QgUgpgTgjQgeg9gig2QguhRgbgvQheimhohiQgGgEgFgFQiDh3hQiRQgnhBgkhKQhjjNgljGQgLg8gGg5QgLhiARh2QAQh+AnhvQANgjANggQAhhMAwgxQAHgGAGgGQBCg/BHAAQABAAACAAQCDABA5BeQAXAmAQBLQALAzAJBFQAGAkAAAtQAAA2gCBJQgEArABAqQgBBLAKA9QAbB4BlC+QACAEACADQA8BkBOBqQBMBlCUAvQAEABAFACQCIAnCsgKQBigGBighQCDgtCNhoQA5gpA5gzQBshhBtieQAKgPALgRQAzhSAvhtQAohfAoh+QAIgdAHgjQAQhTAHhtQAKiMgHiIQgDg3gag8QgehEg6hLQhUhrhSg+QhCgwg4gjQhEgpg1gQQgsgOg/gFQgEgBgHAAQghgDhrgFQhLgDhNAPQgSAEgRAFQhAAOhTApQghANgbAJQgwASgcAEQhKAQhDgTQgGgCgFgCQhCgTgYg6QgSgjACguQAAgcAHghQAVhaBfg9QAtglBugTQCwgyDQAMQBbAGCxAXQCeAWDKAeQG4BGDWAGQAiABAxgBQAVAAAVAAQBOgBAugFQAcgCAwgGQADgCAEgBQAQgBAHABQANgBAXgD");
	this.shape_309.setTransform(890.3589,539.5589);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#FFE0C6").ss(10,1,1).p("ArEa6QguhWg/iBQgUgqgTglQghhDgdg0QgthUgcgxQhjiwhmhgQgFgFgGgFQh+hzhYihQgnhFgihOQhgjXgdjPQgJg9gCg+QgGhkAZh8QAZiBAvhyQAPgkAQggQAnhNAwgzQAHgGAGgGQBFhBBIAAQABAAACAAQCKABA0BjQAVAoALBSQAIA2AFBJQADAlgDAwQgFA6gKBLQgIAugEAsQgHBPAEBBQAOB3BmDTQACAEACAFQA3BpBKB3QBHBwCYA3QAFABAFACQCJAuC0gFQBmgDBlghQCLgsCPhpQA7grA6g1QBzhoBwiaQAMgQALgRQA1hRAzhzQApheAtiFQAKgeAIgkQAShTAKhzQAMiPgDiOQgBg4gdhAQgehFg+hNQhahvhVg7QhFgxg5ghQhKgqg0gPQgugMhBgEQgFAAgHgBQgigBhvgDQhPgBhNAUQgTAFgSAHQg+AUhYAzQgiASgbANQgyAageAJQhQAchNgKQgHAAgHgCQhMgLgmg9QgZglgFgyQgEgfADgkQALhlBghGQA1grBogdQC5g/DRAGQBaADC6AWQCeATDYAfQG2BADvAIQAoABAsAAQAWAAAVgBQBRgBAvgFQAagDA0gHQAEAAAFgCQAPgBAMgBQAVgDAdgE");
	this.shape_310.setTransform(891.8004,540.8698);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#FFE0C6").ss(10,1,1).p("ArKa6Qg1hUhDiIQhKicgnhNQiMkZiFh4Qisiah1kgQh3klAAkUQAAhnAgiDQAiiEA3h1QA8h+BGhIQBOhRBPAAQCVAAAvBqQAeBFAADDQAABXgiCOQgiCOAABoQAAB4BmDnQAzB1BKCIQBBB7CdA+QCOA5DDAAQD9AAD5i3QC3iGCujjQBEhYBCiUQArhcAyiMQAjhfASixQAQiSAAiUQAAh2iAibQhghzhXg5QirhzhbgWQgvgLhFgDQgUAAiOAAQhmAAhfAoQg9AZhdA/QhkBCguAWQhWAohYAAQhiAAg4hEQg1hAAAhnQAAiyEAhkQDDhMDRAAQCiAAH9BFQH/BFETAAQB0AAA8gHQAsgGCOgV");
	this.shape_311.setTransform(893.125,542.125);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#FFE0C6").ss(10,1,1).p("ArcawQgxhZhCiHQgrhbgihEQgVgsgRggQhKiShMhuQg9hXg9hAQgzg0gvhCQhniRhIi9QgSgzgOgwQgihvgMh1QgPh9AHh5QABgZAEgbQALhUAcheQAQgzATgvQAfhMAnhBQAPgYAQgVQA0hJAzgiQBJg6A/AKQBRAIAqAsQAhAfARAtQAIAcAGAkQAJBAgBBnQAAAQAAASQgBA3gKBBQgIAzgLA7QgbCNAKBnQAGBKAqBpQAfBIAwBWQA9BrBXB2QAYAiAgAcQBGA9BsAiQCRAsC/gKQAJgBAIAAQDvgXDVijQAMgIALgJQBYhJBShXQBahiBSh0QA2hIA7iIQAHgRAHgQQAqhoAtiCQAIgXAGgYQAUheAIiEQAHiSgPiOQgLhYhQhpQgZgggfghQhjhphfg1QinhmhmgUQgrgIg7gDQgHAAgIgBQgdAAiEAEQg3ADg2AOQgsAMgrAUQgzAYhHAxQgPAJgPAKQhfBDgwAbQgVALgVAIQhAAbg/AEQhMAHgzgiQgQgLgOgOQgegggQgtQgNgogBgvQgBgXAEgXQAZiYDRheQB/g7CNgZQBAgLBDgDQBNgFCOAJQCJAHC8AVQA8AGBDAJQBtAOBnAMQDuAdC8AIQBWAEBEAAQA6AAAogCQAtgCAigEQAxgHCHgX");
	this.shape_312.setTransform(895.1161,543.9357);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#FFE0C6").ss(10,1,1).p("ArsanQgvhdhAiFQgphagkhHQgVgrgSgiQhKiOhPhzQg6hUg8hJQgwg2gthEQhkidhAi3QgRgzgMgxQgchtgDh5QgIh9AOh4QAEgaAEgaQARhVAfhaQASgzAWgtQAlhMAsg5QARgWASgRQA7g9AzgLQBDgjA0AZQBDAPAhA4QAaAkANAsQAGAfAFAhQAIBAgEBnQAAAQgBARQgDA7gIA9QgGA1gIA6QgTCNASBoQAOBKAvBiQAmBHA2BNQBIBjBiBkQAbAdAjAXQBNAzBrAZQCVAgC8gVQAIgBAIgBQD2gpDFikQALgJALgKQBWhQBMhWQBZhpBMhzQAwhBA6iWQAGgQAHgRQArhxAnh6QAHgYAFgXQARhiABh/QgBiTgfiIQgVhWhUhgQgcgeghgfQhlhghngwQijhZhzgRQgsgIg5gCQgIgBgIAAQgkAAh7AIQg3AGg2ARQgqANgsAWQgzAbhGAxQgOAKgPALQhbBEgyAfQgVAMgTAJQg/Afg+AJQhLANg0gdQgRgIgOgNQgggdgSguQgPgngDgvQgBgYADgWQAVieDDhnQB5hBCPghQBAgOBCgHQBRgKCKAEQCNAAC4ARQA8AGBDAIQBsANBpANQDnAeDIAGQBYADBDAAQA9AAAlgCQAsgCAkgFQA1gJCDgX");
	this.shape_313.setTransform(896.9692,545.5429);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#FFE0C6").ss(10,1,1).p("Ar6ahQgrhhg+iFQgphYgmhKQgVgqgSgjQhJiKhTh5Qg4hRg6hRQgtg4gqhHQhiipg4ivQgQg1gJgxQgXhqAFh/QABh9AVh3QAFgaAGgZQAWhXAihWQAVgyAYgsQAshKAwgyQAUgUAUgOQBCgxAyALQA9gKAqAoQA1AXAXBCQATApAJArQAEAiAEAeQAGBAgGBnQAAARgBARQgFA/gGA5QgFA2gFA5QgMCLAbBpQAVBMA1BbQAsBEA8BGQBTBaBuBSQAfAYAlATQBTAoBrARQCZATC3ggQAIgBAIgCQD+g6C1imQAKgJAKgKQBVhYBHhVQBYhwBGhzQAog7A6ihQAGgRAGgRQArh7AhhxQAHgZAEgWQANhngEh6QgKiTguiDQghhUhYhYQgegcgjgbQhohWhugsQighNh+gPQgtgGg5gCQgIAAgHgBQgtABhyAMQg2AIg2AUQgpAPgsAYQgzAdhFAzQgOAKgOALQhXBFg0AkQgUAMgTALQg+Aig7AOQhLATg1gWQgRgHgPgMQgigagUguQgSgngDgvQgCgXACgXQARilC2huQByhHCRgqQA/gRBDgKQBUgPCFgBQCTgHCzAOQA8AEBDAHQBrAMBsAPQDgAdDTAGQBaACBCAAQA/gBAigBQArgDAmgGQA7gKB9gY");
	this.shape_314.setTransform(898.5045,546.8583);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#FFE0C6").ss(10,1,1).p("AsDaeQgohng9iDQgnhWgohNQgVgpgUglQhIiGhWh+Qg1hNg5hbQgpg6gohJQhgi0gxiqQgOg2gHgxQgRhoANiCQAJh+Adh3QAGgZAHgaQAchYAlhRQAYgyAbgpQAxhKA1gsQAWgRAXgKQBIgkAxAgQA4AOAgA2QAnAfAMBOQAMAtAGArQACAlADAbQAEBAgHBnQgCARgBAQQgGBEgFA0QgDA4gCA3QgFCMAkBqQAcBNA7BUQAyBBBDA+QBdBRB7BBQAiATAnANQBZAfBsAHQCbAIC0grQAIgCAIgCQEEhLCmioQAJgKAKgKQBUhgBBhVQBWh1BAhzQAhg1A6iuQAGgRAFgRQAriFAchoQAGgaADgUQAKhsgLh1QgTiUg9h9QgrhShdhPQgggaglgaQhqhLh2goQichAiKgNQgvgFg4gBQgHgBgIAAQg1ABhpARQg2ALg1AWQgoAQgsAbQgzAfhEAzQgNAMgNALQhVBGg1AoQgTANgSALQg9Aog5ARQhLAbg1gSQgSgFgQgKQgkgXgXgvQgTgngFguQgCgXACgYQAMirCoh1QBshPCTgxQA+gUBDgNQBYgVCAgGQCYgOCvALQA8ADBDAHQBqAKBvAQQDZAeDeADQBcACBBAAQBCAAAfgCQApgDApgHQA/gLB4ga");
	this.shape_315.setTransform(899.6636,547.9953);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#FFE0C6").ss(10,1,1).p("AsLabQglhrg7iCQgmhVgqhQQgVgogVgmQhHiDhaiDQgyhKg4hjQglg9gmhLQhejAgpiiQgMg4gFgxQgLhlAViIQARh+Akh2QAHgZAJgZQAhhaAphNQAbgxAdgoQA3hJA6gkQAYgPAZgHQBPgYAxA3QAyAlAVBGQAZAnADBZQAFAxACAqQgBAoACAYQADBBgKBnQgCARgBAQQgHBHgEAwQgCA4ABA4QADCLAtBqQAjBPBABNQA5A/BJA2QBoBICHAvQAlAOAqAJQBfAUBrgBQCfgFCwg1QAIgDAIgCQEMhdCVipQAJgLAJgLQBShnA8hUQBVh8A6hzQAagtA5i7QAGgSAFgRQAqiPAXhfQAFgbACgTQAHhxgRhwQgbiVhNh3Qg2hPhhhIQgigYgngWQhthCh+gjQiYgziVgLQgxgEg3gBQgIAAgHAAQg+ABhfAVQg1ANg1AZQgoASgrAdQg0AhhCA1QgNAMgNALQhQBHg3AsQgSAPgSAMQg8Arg3AWQhLAhg1gLQgTgEgRgIQglgVgagvQgVgngGgtQgDgYABgYQAJixCah9QBmhVCVg6QA9gXBDgQQBbgaB7gMQCegUCrAHQA8ACBCAGQBpAKByAQQDTAeDoADQBeABBAAAQBFgBAcgCQAngDAsgIQBEgMBzgb");
	this.shape_316.setTransform(900.6888,549.0093);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#FFE0C6").ss(10,1,1).p("AsRaaQgjhwg5iBQglhTgshTQgUgngWgoQhHh+hdiJQgvhHg4hrQgig/gjhPQhcjLggicQgMg5gCgwQgGhkAeiMQAZh+Arh1QAJgZAKgZQAmhbAshJQAegxAfgmQA9hIA/gdQAbgMAbgEQBVgMAxBNQAsA9ALBVQALAugHBkQgCA3gBAoQgDAsABAUQABBBgMBoQgCARgCAPQgJBLgCAsQgBA7AEA3QALCKA2BrQAqBPBFBGQBAA9BQAuQByA/CSAeQApAIAtAFQBlAKBrgKQCigRCthAQAIgDAHgDQEThvCFirQAJgLAIgLQBRhvA2hTQBUiDAzhxQAUgoA5jIQAFgRAFgRQAqiZARhXQAFgcABgSQADh1gYhrQgjiVhchyQhAhNhmg/QglgWgogUQhvg4iHgfQiUgnihgIQgygDg2AAQgIgBgIAAQhFAChWAZQg1AQg1AcQgmATgsAfQg0AkhAA1QgNANgMAMQhNBIg4AxQgSAPgRANQg7Avg1AbQhKAng3gGQgTgBgSgIQgngRgbgvQgXgogIgtQgEgXABgZQAEi3CNiEQBghcCXhCQA8gaBDgUQBfgfB2gRQCkgbClAEQA8ABBDAFQBoAJB0ARQDMAfDzABQBgAAA/AAQBIgBAZgCQAmgDAugJQBIgNBvgd");
	this.shape_317.setTransform(901.5824,549.9299);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#FFE0C6").ss(10,1,1).p("AsXaYQgzi/h2jdQhSiaiAi+QhFhphdjgQh8krAAisQAAhhAmiRQAoiaBBiKQBJicBUhaQBhhnBhAAQBbAAAwBjQAnBPAABqQAAAjgTCCQgUCDAAAgQAABBgPBnQgPBoAAAwQAAFFDUCyQDHCmFNAAQEUAAEgiCQEaiAB1itQBaiFA2hbQBSiKAthxQANgfA4jWQBDj9AAhEQAAmplri7QkViQniAAQiIAAiKBQQhSAvhyBkQhvBxhOBFQiSCAhcAAQhCAAgrhEQgmg8AAhIQAAlDFxizQCVhJC+gmQCpghChAAQCYAADFAeQDEAfD+AAQDYAAApgEQBfgJCtgw");
	this.shape_318.setTransform(902.375,550.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_288}]}).to({state:[{t:this.shape_288}]},53).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[]},1).wait(386));

	// Vrstva_6
	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgpPpQijg3hGhwIgOgYQgJgOgHgIQgRgTgogYIhUgzQg9glgggVQgzgiglghQgogjhSheQhLhWgygnIhhhGQg4gpgbgpQgig1gBg+IABgaQAAgPgDgKQgDgLgKgPIgPgaQgRghgCgpQgBgmAMgnQAKghAVgmQANgYAbgqQAdgtATgXQAdgjAggTQAKgGAagMQAXgMANgIQASgNAlgrQAhgmAagNIAggMQATgIAKgIQAKgIAJgQIAPgaQAXglA7glQBOgxAQgOQAVgSA7hMQAwg9AqgVQAngUA4gBQAhAABCAIIBTALQAtAHAkAKQBAASBMAnQAlATBfA4QB6BGBEAbICMAzQBTAeAzAfQBDAqBWBgQAdAhAPAXQAWAhAFAgIADAaQABAQAEAKQAEAMAMAQIAUAaQAOATAJAcQAGASAIAiIAiCSQAMAyAEAbQAIArAAAjQAAAZgEAmIgGA/QgCARgBA1QgBAtgDAaQgJBBggBLQgWAyguBSQgYAqgOAWQgXAjgWAZQgyA2hIAfQhFAehNAEIhSgBQgyAAgfAGQgUADg1ARQguAOgcACIguACQgbABgSAGQgNAFgSANIgdAVQgxAghEAAQg6AAhCgWg");
	this.shape_319.setTransform(827.592,479.3235);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AAMP+QglgEglgNQgVgHgXgKQgUgJgUgMQgigRgrgfQhAgvgkgoIgPgSIgRgVQgKgMgKgKQgQgRgXgTIgMgKQgmggggggQgugtgTgkIgGgLIgCgCQglgigdgjIgHgIQgjgsg+hTIgCgEIgFgIQgsg/ghglQgPgSgOgPIgBgBQg2gwgeggQgSgRgQgRQgZgcgRgaIgBgCQgOgXgKgXQgKgYgKgjIAAgDIAAgCIgEgYQgDgOgEgKIAAgBIgEgJIgIgPIgCgFIgLgUIgEgIQgOgfgDglIAAgBIAAgCQgCgmAKgoQAGgYALgbIAJgTIABgEQANgbAYglIABgCQAOgXANgRQAJgMAKgKIACgDIACgCIAQgRIAUgXQAKgKAIgHIACgCQAKgJAUgNIABgBQASgMAMgKIADgDQAPgMAXgYIAQgRIABgCQAggiAcgNIACgBIAdgLIACgBIACgBQAOgGALgGIADgCQAKgFAJgKIAEgEQAGgFAJgLIAEgEQAcgaA2gWIAKgFIAEgBQA4gZAcgIIARgGQAYgKAoghIAFgDQAQgHAMgKIAJgHQAUgMATgJIAHgEQAXgNAbgHIAOgEQALgDAPgCQAYgFAhAAIAHAAIAkAAQAcABAbADIACAAIAcACIA2AHIAbAEIAZAFIAdAHQApALAxARIALAEIArARQAcAKAtAUIAKAFIA2AZIA0AZIBXAsIA1AbIAbALIAxAZIA0AaIAjAVQAZAKAVAMQAVAMATAOIAGAFQAgAZAeAkQARAUATAcIACAEIAcArIAIAMIAJARIAAABQAJANAHAMIADAGIABABIAEAKQAFAKAEAOIAGAZIADAJIACAJIADAMIAAABIABAFQADANAFAMIAAAAQAFAOAIAQIAHAQIAGAOIACAFIAFAOIAEAPIADAQIADAKIAGApIAIA2IADAbIADAgIAAAEIAEAdIABAMQADAcABAYIADAOIABAMIACATIACAjIAAAMIAAAAQAAAhgDAdIAAADIgBAHQgEAhgEAUIgBAIIgDATIgHApIgCAHQgDAPgFAOQgFAQgGANIgEAJIgIAaIgNAjQgNAegTAiIgCAEQgPAcgWAkIgWAiIgPAWIgFAHQgWAhgSAVIgDAFQgTAYgTASIgJAIQgZAYgdATIgIAIQgZAXgdASQgVAMgWAKQgsAUg0ALIgMACQgXAEgsAFQgYADgYAFIgfAFQgdAHgqAMQgfAIgYAFIgSACIguAEQgZACgTAEQgPAEgRAGIgLAEIgXAHQgnAKgpAAQgTAAgUgCg");
	this.shape_320.setTransform(833.7833,486.578);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AiBPgQgmgSgqgdQgZgSgwgmQhFg4gigdQg4gxgogrQhlhugChjIgCgCQgjgqgdguIhTiKIgHgMQgmhGgbgoIgbgmQgrgygdgpIgeglQgYgfgQgbQgOgYgLgVIgdg7IgBgEIgIgXIgKgYIgFgLIgJgQQgKgSgEgJQgPgjgDgpIAAgBQgCgmAIgoQAFgaAKgbIAHgUQAMggAWgkQAPgZAPgRQAIgKAMgMIADgDIAQgSQAJgLAJgMQAJgPAIgIQAIgNASgPIAdgbIAngoIAQgRQAhggAggOIAfgMIADgBIAagKQAMgGANgIQAKgFANgKQAlgTA8gNIAPgDQA6gQAhACQAmgBA4gbIAHAAQAggDALgHIAvgJIAIgCQAegFApgFIAagCQAYgCAogBIAkgBIA3ABIAdACQAqADAoAGIAaAFQAwALBIATIAMAEIB4AkIALADQA+AVAuAVQAwAVAoAVQARAMA8AfIAuAdQAqAbAkAfQAYALAUANQAUANATASQAiAfAZArQAOAUAOAhIACAEQARAmAIAYIAGASIAAABQAHANAGANIADAJIAEAKQADAIADASIAGAZIAGATIAFANIAAABIAMAdQAIAXAFAcIADAVIACAPIACAQIADAaQAEAyACAsIgBAbQABARgCAQIAAAEQABAVgBATQgBAagDAbIAFAbIABASIABAjIAAAMQgCAtgCATIgBAHQgDAagHAkIgFASQgIAbgKATQgGAOgJANQgLARgOAQIgLAZQgIASgKASQgQAdgXAjQgSAagYAhIgYAgIgWAcQgaAfgYAZQgVAVgVASQggAZghAUIgIALQgjAtg0AgQgsAbg8AVQgoAOhHASQheAZg6ALQhUAPhGACIgOAAQh0AAhXgog");
	this.shape_321.setTransform(839.9452,494.3319);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AA4PvIgPAAQgjAAgmgDQg4gFgpgKQgbgGgZgKQgTgHgSgJQgXgLgWgPQgggUgqgkQg4gxgngtIgegjQgfglgZglQhAhWgehcQgGgTgEgUIgCgCQgagtgYgzIg9iFIgHgPIgEgLQgehEgUgnIgEgJIgWgpQgggygdgyIgWgkIgDgGIglg8IgXgmIgFgHIgggyIgEgGIgCgDIgLgVIgNgXIgEgHIgCgEIgIgPQgJgPgEgMQgOgjgEgqIAAgBIAAgCQgDglAGgoQAEgaAHgcIABgCIAGgRQAMglASghQAOgYASgSIABgCIATgTIACgCIABgBQALgKAGgJIABgBQAIgKAHgNIABgCQAIgQAFgIIABgCQAIgPANgQIAZgeQAPgUAXgWIACgCIAPgOQAhgdAhgPIAggMIADgBIABAAIAXgIIAdgJIAZgJQArgKA6gCIAQgBIANAAQAtgCAjAGQArAGAygEIAIABIAlAEIAGAAQAeAFAOgBIADAAIAEABQAYADAYAAIAXgBIAagBIAggCIAhgDIAlgDIATgCIAkgCIAcAAIAcAAQAbAAAeADIAZACIA4AJIBDALIAMACIA5ALIBCAMIAKADIAwAJQAkAJAeAKQAdAJAaALIAjAQQAcAPAwAeQAWAPAXASIABAAQAlAdAkAkQAUAPASARIAEAEQASALASANQAXASATAXQAMAOAJAPQAPAXALAeIABACIABAEQALAaAGAeIAEALIADAUIAAABIAJAdIACAIIACALIACAFIAAACQADAHADAKIAEAKIACAIIACAFIAIASIAFANIAAABIAKAeIAEAQIADAPIADAUIADAWIABAPIABARIACAbIABAFIAAAPIABAsIAAAeIgBAcQgBAQgDAQIAAADIAAABQgCAVgEAUIgDAQIAAAEIgFAgIgBAbIgDATIgBARIACASIACAMIABAPIACAiIAAATIgBAIQgBAcgFAcIgBAGIgFATQgHAZgLAUIgEAHIgMAUQgNASgPAPIgJAMIgGAIIgYAaIgBABIgMAXQgNAUgOAVQgRAYgVAcIgGAHIgbAgIgXAbIgRATIgiAkQgWAVgUASQgYAWgYASIgPAKIgIAJQgpArgyAeIgTAMQglAVguATIgPAFQgiANg/AVIgCABQg/AVgpAKQgZAGgWAEQgeAEgbABIgEAAQgpAAglgJg");
	this.shape_322.setTransform(847,498.8415);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("ABZQWQgrgFgmgUQgmAAgzgEQg7gEgmgHQg1gJgpgRQiAg2htisQhKh0g/iaQgthug4iwQgdhdgRguQghhdg3hvQgihFgcglQgIgLgkgrQgcghgOgXQghg3gGhHQgGhAAPhGQAUhYAsgsIAXgUQANgMAHgKQAIgKAGgRIALgcQAYhBA0gxQA1gxBCgUQBYgaCCAZQBxAWBqAuIAyAVQAdALAXAEQAgAFAxgGQATgCBJgLQA3gIAkgCQA6gEBRAHICLAMICBAJQBJAIA0ATQBQAdBLBFQAzAvA2BHQAwAUAiAlQAhAkAPAvQAHAVAHAvQAKBAABAZIAAACIAOAYIAEAJQASAiAIAvIACAPQAIAzgBA6IAAAOIgBArQgBA1gJApQgGAdgKAeIgBAFQgIAlgPA6QAIAWADAZQACAQACATQAFAzgGAjQgGApgXAkQgWAlghAZQgSAOgUAKIgNAXQgaAtgpAwQgcAhgyAzQhJBKgxArQhGA9hCAnQgqAZg3AZQggAOhEAbQhCAbglAKQgtALgmAAIgYgBg");
	this.shape_323.setTransform(854.1986,499.4417);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AghP9IgLgDQgsgJgngTQgqgJgugOIgLgEQgtgOgigRQgugVglgcQghgYgegfQgugzgfg8QgZgzgKg1IgDgVQgDghAEggIgOgiIgmhnIgRg3IgCgIIgJgfQgMgxgNgsIgehxQgIgbgIgYIgEgJQgGgPgIgPQgYg5gdgpIgCgEIgQgbQgrhCglhCIgSgeIgCgEQgkg+gegrIgBgBIgWgdIgUgbIgBgCQgaghgOgaIgHgNQgag3gCg+IAAgBQgCgrAKgrQAGgYAJgYQAGgQAIgOQATgmAbgYQAMgMAMgIIAHgFIARgJIAKgFIAHgEIAHgEIAKgHIAJgHIANgMIACgCQAJgKAJgFIAEgDQASgSAdgJIARgHQAUgIAXgFQARgFASgCQArgIAzAGIAEAAQAwAIAyAJIAEABIBHASQASAFARADIACAAQAIABAIAAQAJABAKgBQAkACAmADIAnAFIANACQAZAEAbACIAQACQATACAQAAQANACAHgBIAGAAQAYABAYgCIAIAAIAigEIAogFIAKgCIAugGIAjgDIAkgCQAdAAAZABIAEAAQBBgLBNAGIAtAFQAmAFAwAJIACABIABAAIAJABIAFAAQA4AFBFAPIAFABIAEABQAwANArAXIAVAMQAaAPAdAVIAHAFQAtAkAoApIAYAbIADADQAmAiAfAsIAJANIAPAOQAVAVAPAbIAIARIAFAKQAHAQAGATQAIAXAEAYIABAIIAGAoIAAABIAEATIACALIACAKIADAUQAEAdABAWIAAABIADALIAEAPIAAAEIACAJIABAFQAGAbAAAmIAAANIAAANIAAACIgBAOIAAAZIgBAUIgBAfIgCAVIgBAQIgCAPIgDARIgCAMQgEAUgGAVIgBAGIgCAFIgLAoIgHAYIgLAgIgBAFIAAAFIgGAeIgBAEIgGAjIgHAcIAAAIQAAAUgCATIgBAKIgEAYQgDAUgGASIgGASQgEAOgGAMQgLAYgSAYIgEAGIgNAQIgNAPIgSAXIgPARIgIAIQgRAQgSAOIgRAWIgBABIgFAHQgaAhglAlIgKAKIgGAGQgaAYgiAfIgVASIgyArIgOAMQgnAfghAXIgTANIgkAXQgvAcgwAUIgEABIgdALIgDABQgeAPgkAMQgpAMhAANIgGABQg7AMgvgBIgWAAQglAAgjgGg");
	this.shape_324.setTransform(855.5353,503.4664);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AAdQiQhigEhtgiQhqgfhUg1Qh8hMhLh1QgqhBgPhBQgShKAVg/QAMgmAZgeIgLgnIgchsQgHgagGgiIgHglQgHg5gKgoQgKg6gOg7QgHgggJgVIgDgHQgHgPgMgRQgcgxgrgsIgYgcQg8hCgog6IgUgcIhKhuIgWgfIgUgdQgYgjgOgcIgHgPQgag8ABg9QABgtAPgrQAJgYANgXQAIgPALgNQAagjAigUQAPgJAQgGIAcgJIASgGIAIgCQAMgDAMgEQAMgGAJAAQAPgFARgCQAagHAoAIIAXADQApAEAzASQAuAOA4AaQAzAcAsASIAEACQAiAQAjAOQAUAIAPACQAKABAKgBQAIAAAMgEQAkgFApgEQAXgBASgDQAJABAFgCQAaAAAcgGQAYgEAfgHIAcgIQAZgIAggIIAigIQAcgHAYgEIAvgFQAigDAlADQAcADAcAFQBfgYBkARQAnAGAwAPIABABIACAAIAPABQBJAGA6AbIADABQArATAsAiQAgAXApAnIAHAHQA8A7ArA4IACACQAsAkAcArQALAQAIARQAOAcAIAhIAGAhIAFAoQAEAdABAdIADAnIAAABIAHAeIACAKIAEAUQAFAhAAAiIAAAQIgBAVQgBAagIApIgFAaIgDAQIgDAZIgDAVIgDAeQgFAfgFAYIgFARQgIAagNAdIgDAFIgCAEQgOAigLAdIgNAgQAAAUgEAYIgBADIgFAkIgJAlQgGAagKAXQgMAegSAeIgMARQgXAhgkAjIgGAGQgQAPgOALIgSAYIgNARQgdAlgfAgIgHAGQgeAegrAkIgSAPQgeAZgkAaIhOA6IgQALQg0AkgvAYIgoAUQgzAWg4APIghAIIgDABQhHAfhfAAIgUAAg");
	this.shape_325.setTransform(857.8731,504.8653);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AAvRZQgYAAgXgDQhNgJhSghQgbgLgYgNQg2gcgigiQgKgJgMgRQgMgRgLgKIgYgYIgIgHIggggQgcgfgUgsQgVgxgQgjIgUgrIgKgTQgJgSgNgTQgOgVgIgQQgJgQgIgRQgahAgChCIABgJQACgkAJgoIgIgnIgBgHIgShsIgBgGQgEgYgDghIgDgoIAAgDQgEg/gGgjIAAgCQgGg9gMg+QgGgigKgUIgDgHQgIgOgPgQIgBgCQgegng4gtIgcgZIgFgFQhKg9gpgxIgFgGIgTgWQgpg0gpg9IgVggIAAgBIgTgdQgXglgOgeIgGgQIgBgCQgZhAAEg8QADguAUgqIAAgBQAMgZAQgVQALgOAOgNQAggeAogPIAEgBQAOgGAOgDIAegEIAUgBIAJAAIACgBIAWAAQAMAAALACQAQACARAEQASAEAXAJIAUAKIAUAJQAgAPAoAbIAJAGQAqAbAzAlQAsAiArAeIAFAEIADACQAfAXAdASQASAMAOAGIAGACIAMADQAIADAKABQAVAGAWAEQATAEAPgBIADAAQAKAAALgEQAHgCALgFIACgBIALgEQAZgIAdgLIA1gUIAHgCIAWgJQAZgKAigLIAigNIALgEIAogMQAbgIAUgEIAAAAQAlgJAjgCIAPgBQAWgBAWABQAigGAiAAQBGgSBrABQBLAAAyALQBDAOArAkIAPAOQAaAKAaAPIASAMQAdASAgAcIAGAFIATASQAiAfApAtIAUAWIADADQAuArAcAnIAIALIAOAVQASAeAMAfIALAgIAHAbIADANQAGAeAEAgIACAXIACASIAAABIAEAhIABAKIADAVIABAPQACAdAAAaIAAAQIAAAWIgBAPQgBAbgFAcIgFAcIgDAQIgBAHIgEATIgFAWIgHAaIAAAEIgOA3IgCAKIgCAJIgMAsIgFARIgCAGIgCAGIgIAXQgIAVgKAWIgOAeIAAABIgOApIgCAEIgKAcIgCAHIgOAmIgLAgIgHARQgOAhgOAXIgEAHIgLASQgWAjgiAmIgEAEIgBACIgeAfIgUAaIgPASIgMAPQgdAhgWAYIgGAGIgHAHQggAhgjAfIgCABIgRAOQgfAagmAbIgCABQgnAcgrAcIgKAHIgGAEQg5AkgnAVIgHAEIgpAVQgfAPgeALIgyAQIggAJIgEABQhFAXhKAAIgDAAg");
	this.shape_326.setTransform(860.0479,503.2463);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AARSdQhmgGhsg9Qheg1gfhEIgOgmQgIgYgHgOQgIgPgTgYQgUgbgHgMQgVgkgJg5QgIhDgGggQgHgrgOgaQgJgRgRgUIgcgjQg2hFgYhdQgMgxgKhbQgIhIgCgxQgCglgBhDQAAhKgBggQgDhCgJg/QgGgmgKgSQgIgPgYgWQgpglhkhDQhfhBgsgpQhBg/hEhuQgphEgSg0QgZhFAHg8QAFgwAZgqQAZgqAogcQAngcAxgJQAwgJAvALQA7AOA7AxQAkAdA/BDQBKBQBoBsQA5A6AgAZQAhAZAlATQAWALAPgBQAKAAAMgHQAGgDAOgKQA0gkBHgjQAqgVBXgmQA4gZAdgLQAwgSApgJQBBgNA+AIQBDAJA1AfQAaARAOAAQALABAZgKQBLgfBUADQBUAEBIAlQAtAXAvAqQAeAYA0A1QBLBKAkAvQA4BHAYBFQAQAtAHA5QAEAoACBBQADBGgCAqQgDA9gMAwQgFAVgRAxQgPAtgGAZIgKA6QgHAkgHAWQgKAggZAqIgrBHQgNAZgWA0QgXA0gNAZQgbAzgsA5QgaAig5BCQgsAzgVAXQglAoghAcQgnAjg1AjQgjAYg/AmQhFAqglAVQg9AigzAVQhwAuhjAAIgegCg");
	this.shape_327.setTransform(862.2179,500.2504);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AA9QyQgngBgogIQgugKg8gVIgcgLQgggNgWgNQgrgXgbgbQgJgJgIgKQgIgKgMgVQgLgTgKgMQgLgOgTgUIgfgkQgIgLgIgOQgPgZgMgiQgQg3gPgkQgLgggOgZIgFgHQgKgRgQgTIgbgjIgLgOQgggwgRg0QgIgXgFgZIgFggQgEgbgDg1IgDgcQgFhGgCgyQgBgsAAg7IAAgOIgBhbQgBhCgFg9QgCgdgFgTIgCgIQgEgTgPgUQgHgOgJgLQgSgfghgeQgRgSgWgSQgYgUgYgSQg2glgogZIgDgCQhEgqg+gvQgNgIgLgIQgPgJgLgJQgagSgTgWQgGgGgEgHQgHgIgFgKQgLgTgFgTQgJggAEghQAFghAQgdQAHgMAJgMQAaglArgZIAHgEQAmgVAsgIQAvgJAwAGIACAAQA+AIA6AjQAcAOAhAcQAQADAYAKIAJADQAaALAeARIA7AiQAjASAZASIAPAJQAVAMAUAJQAcARAcAGIADABQAlAMAjAJQAVAFAPgDQAHgBAIgEIAGgCIAUgNQArgcA5giIATgMQA3gkA7gbIAHgDQAygaAggOQAvgTApgJQAkgJAlgBQAZgCAbADQAiADAgAIQAbAHAeANQAYAMARACIANgBIAXgDQA8gLA2ABIAqADQAzAGAtAQQAdAKAcAOQAuAYAvAmQATAPAXAWQATARAWAVQBFBFAnA2IADAFQApA4AeBGIAFALQAMAeAHAcQAFATADAVIAEAeQAFAgABApIABAOQABAsgBApIgBANQgCA4gJA1QgEAYgLAoIgCAHQgLArgFAbIgKA4IgFAXIgIAiQgLAhgWAqIgZAtIgPAcIgjBMQgWAwgQAcQgPAcgTAcQgQAZgUAaQgdAlg1A+IgRATIgxA2QgjAngiAeQgnAkgwAkIgWAQQghAZgoAaQgqAcggASIggASQgXAMgXAKQgfAPglAOIgNAEQg4AUgqAJQg1AMgvABIgPABIgOgBg");
	this.shape_328.setTransform(866.3485,511.9175);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AAYQfQgogGhDgQIgdgHQgjgKgWgIQgugRghgUIgUgOQgNgIgNgPQgOgOgNgLQgPgMgTgSIgiggIgUgXQgSgXgTgdQgXgsgagmQgPgcgRgZIgFgHIgagjIgagjIgLgPQgggxgPgzQgGgWgEgZIgEggQgCgWgBg6IgBgdIgEh1IAAhnIAAgPIAAhYIAAh+IgBgwIAAgHQgBgYgHgTQgCgSgFgKQgJgngWghQgNgUgTgTQgVgWgagSQgxgigxgTIgEgBQhSgghDgJQgQABgNgBQgTABgMgCQgiAAgYgMIgOgJQgJgGgIgIQgPgPgIgUQgLgdAFgiQAEghATgcQAIgMAKgLQAdgfAugWIAIgDQAmgSAsgJQAugJAxABIABAAQBDACA5AWQAhAKAhAUQANgMAYgFIAJgBQAcgFAjAFIBBAPQAtAIAWAJIAQADQAXAEAXABQAZAGAlgEIAEgBQAoAAAigCQAUgBAPgFIAOgGIAFgCIAUgMQArgbA2gmIATgMQBFgzAjgTIAHgEQAugaAkgRQAsgTAqgLQAjgJAjgDQAagCAbABQAgACAhAGQAaAFAiAJQAWAIAVAEIAMAAQALABALAAQBBABAwAGQAVADAUAEQAzAKArAQQAdALAbAOQAwAYAuAkQAUAPAXAUIApAmQBBBAAoA9IAEAFQAhAxAkBOIAEAKQAPAhAHAXQAGATAFATIAGAdQAGAhACAoIAAANQACAngCAvIgBAMQgCA1gHA5QgDAbgGAkIgCAIIgLBHIgJA1IgEAXQgEARgGARQgKAigUArIgWAuIgOAcIgkBLQgVArgSAgQgQAcgRAbQgRAYgUAaQgfAqgyA4IgRAUIgxA2QgiAkgiAhQgnAlgsAlIgVASQglAeghAYQgoAcghATIghASQgXALgYAKQgcALgqAOIgNAFQg9AUgkAIQg2ANguADIgdABQgmgBgqgGg");
	this.shape_329.setTransform(870.4937,514.1583);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("ABDQqQgjgChKgLQg8gIgegGQgxgKgmgNQhggihchUQhBg7hYhtQgtg3gWgjQghg0gMgxQgIgigBgtIAAhQIABkFQAAibAMhoQAHhCAAgSQABgwgNgiQgTgzgzgjQgugfg9gNQhfgWhKAdQguAXgXAKQgpASgegDQgVgCgTgMQgSgNgLgSQgPgcAGgjQAFghAVgaQAjgrBKgaQBSgeBggHQB2gJBRAhQALghAhgWQAdgUAngGQAbgFAtAAQA3gBASgCQAfgDAmgJQAXgGAsgOQBVgbArgVQAzgZBFg3QBihPAQgLQB5hUB2gNQA1gGBBAIQAqAEBLAPQBWAQAxANQBKASA5AXQBqArBXBKQBaBKA7BgQAZApAqBXIAcA+QAPAkAHAdQAJAmABAwQACAhgDA1QgDBNgIBsQgIBigMA2QgQBDgpBdQg9CJg+BdQgyBKhUBdQhlBxhzBqQgoAkgaAVQgmAdgjAUQgiATgvARQgbAKg6ASQhCAUgeAIQg3ANgsAEQgWACgYAAQgeAAgigDg");
	this.shape_330.setTransform(874.6262,514.3679);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("ABFQvQgZABglgDIgugEIgqgEIgwgFIgrgHQgYgEgVgGQgWgGgUgIQgigNgkgUQgcgRglgaIgUgNQgjgZgbgZQgngggigkIgfghQgpgxgagrQgdgxgQg0QgLgjgGgrIAAgEQgEgbgDgvIgGhnQgDhTAAhNIAAgQQAAhlAFhMIAEhDQAEg8ABgZQAAgZgBgQQgCgVgEgTQgNg3ghgqQgLgOgMgNQgZgdgggQQgOgIgOgFQgsgPg1AHQgUADgTAFQgrAPgfANIgCABQgcANgTAEQgKADgIAAQgQACgOgEIgLgDQgUgIgOgRIgDgEQgSgYABgfIAAAAQABgYAMgXIAJgOQAJgNANgLQAggcA2gSIABAAQBHgYBOgGIAegCQBAgCA6ALQAQADALABQAIAAAIgDQAHAAAIgDIARgDQAUgZAigMIACAAQANgFAUgCIAkgEIACAAQAWgCAhgHIARgCQAsgHAbgKIAdgIIAmgOIA+gbIAPgGIBRgmIAcgPQAYgPAZgRQAVgPAwgoIATgQQA/g1AcgSIAEgDQBvhGCKgFIAQgBQAugBA4AHQAwAFBFANIAxAJQAwAKAlAJQBLASA5AVQAXAJAVAJQBUAmBDA3QAmAfAfAkQAcAfAcAsIATAeIAgA2IAoBDIAAABQAWAmALAXIACAEQANAfAHAeQAKAnABAuQABAfgCAmIgCAQQgDAqgHAyQgFAlgLA4IgCANQgMBJgOA4IgDAJQgXBWgdBJIgBACQgkBcgmBHQgUAjgWAiIgaAlQgcAngxA9IgbAiQgjAqgbAdQgmAqgzAyQgfAegdAaQgfAcgXATIgMAJQglAbglAVQgkAVgsASIgMAEQgdAMgrAOQg3ASgqAMIgcAHQgkAJggAFQgoAGgoABIgOABIgPgBg");
	this.shape_331.setTransform(881.8867,516.3558);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AALQ1IhZgDQg9gDgegEQgygFgngMQgigKgngUQgZgMgtgZQg5ghgdgTQgvgfghgeQh6hwgvjDQgThPgIhhQgFhHgBhrQgBhnAEhMQAGibgBgkQgEhsgghMQgZg8gogYQglgWg7AEQg/AEg3AYQgeAPgPAGQgbALgVgBQgfAAgYgXQgYgWgCgeQgCgYALgYQAKgWAUgSQAfgcA4gQQBJgYBOgDQBOgDBLARQARAEAJgCQAIgCAHgHIAOgMQAjgfAwgBQALAAAaADQAXADANAAQAXgBAjgMQA0gSA+gfQAmgUBHgoIBNguQArgbAfgYQANgKBLhDQA1gwAmgWQBqg+CtAFQBuAECeAeQCiAfBkApQCMA7BQBgQAXAdAfAxIAyBQIAtA/QAaAmANAcQAqBagLB8QgFAwgOA8QgIAigUBIIgjB/QghB1gTA2QggBfglBGQgbAygoA6IhMBnQg5BLgaAeQggAmg4A3QhCBBgvAkQhNA6hlAsQhUAlhwAeQhUAYg+AHQgkAEgsAAIgJAAg");
	this.shape_332.setTransform(889.0488,518.4551);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AjUQ7Qg3gDhEgMQgpgHhRgQIhHgQQgngKgegNQhhgrhMhkQg2hHg5h+QgshigIhAQgEgiACgvIAFhSQACgagBiGQgBhiALg9IALg4QAIgjACgVQADgWABg5QABgzAFgcIAEgbQABgPgEgKQgGgQgZgRIhUg7QgdgUgOgNQgXgUgLgWQgNgYAAgdQgBgdANgZQAMgZAXgRQAXgSAbgFQApgIBWAaQBTAaArgLQAagIAfgXQASgNAigdQAQgMAjgVQAjgWAPgLQAcgVAygwQBchXBEgxQBehCBbgcQBEgVB5gLQBWgHA5gBQBPgBBAAKQBDALB2AlQCIAqBIAkQBvA1BABLQA3BCAjBiQASAyAXBYQAUBQAFAuQAGA2gGBBQgFAvgNBHQgqDgg6CbQgaBEg4B6IgkBKQgVAogVAeQgUAcghAkIg5A+IgxA4QgdAigWAVQg7A5hlA6QieBbieAsQiPApiJAAQgdAAgdgCgAlJMEIAHABQAEABAHgCIgFgDIgDAAIgQAAgApcJfQARAoAyA1QAbAbASAKQARAJAYAEQANACAeACQhWgog5hNIgKgNQgGgHgGgEQgKgIgKAAQgFAAgGACg");
	this.shape_333.setTransform(908.6056,521.4657);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("ApTQuQhEgVhXgvQgxgbgggXQgqgegbgiQgSgVgSgfIgdg4Qgcg2gMgcQgUgugKgnQgThLAGhmQABgfASiVQAJhQAHhmIAJi2QACgzAAgXQgBgpgIgfQgFgTgLgeIgQgvQgSg8AQgoQAKgZAVgPQAXgQAYAEIAMACQAHABAFgBQAHgCAGgHIAJgPQAhg2BcgxQB4g/AagVQAVgRAXgaIApguQCbizCohDQBrgrCEgIQBvgGCHATQDIAcC8BFQBbAhA1AkQAuAhA8BDQApAtAYAjQAhAuARAsQALAdAKApIAPBIIALAwQAGAdACAUQAHA9gNBbQgNBdgaBtQgUBQgiB2QgTBDgRAkQgNAagoA8QgjA2gOAhQgJAWgOAsQgQAngqA+Qg5BRgxA2Qg/BFhDAqQgsAchJAgIh4A1IhUAsQgyAbgkANQgjANgsAKQgaAGg3AJQhYAOg5AHQhQAKhDABIgTAAQh5AAhdgdg");
	this.shape_334.setTransform(922.1791,523.2513);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("ApSQuQhEgVhWgvQgygbgfgXQgqgegcgiQgSgVgRgfIgeg4Qgbg2gMgcQgVgugJgnQgUhLAGhmIACgQIgGgKQgeg1gIhKQgFgzAEhUQAGiUAQiaQAKhiAOhCIAFgXIgDgJQgRg8AQgoQAJgZAWgPQAPgKAPgCQAghAAvgyQA8hABKgeQAogQAlAAQAcABAWAJQASgPAUgXIAoguQCbizCphDQBrgrCEgIQBugGCHATQDIAcC9BFQBbAhA1AkQAuAhA8BDQAoAtAZAjQAgAuASAsQALAdAJApIAQBIIAJAoIAMALQARATAIAgQAFAVADAlQAEA7ABAdQAAAygHAnQgGAfgTA3QgUA7gGAbIgJA0QgFAhgEASQgKAtgYAxQgxBmhgBmIgbAbIgTA2QgPAngrA+Qg4BRgyA2Qg/BFhDAqQgrAchKAgIh4A1IhUAsQgyAbgkANQgiANgtAKQgaAGg2AJQhYAOg6AHQhQAKhCABIgUAAQh5AAhdgdg");
	this.shape_335.setTransform(924.4174,523.7013);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AmARbIgGAAQgdgBgcgDQg6gEg9gPQgfgHgdgJIgGgCIgkgOQgqgRgzgdIgXgNIgGgDQgjgVgagSIgOgKIgHgGQgngdgdgiIgDgEQgSgVgSgcIAAgBIgCgDQgNgTgTgkIgBgBIgDgGIgkhCIgDgIIgCgEQgVgtgMgoIAAgBQgRg8gEhKIAAgyIAAgLIAAgFIAAAAIgFgKIAAgBQgKgUgIgWQgNgigGgkIgDgTQgEgbAAgjQgBghACgsIAAgBQAChBAEg4QAEg9AGg7QAEgjAFglIAHgtIAHgsIAKgtIAIgcIABgDIABgGIAGgRIABgFIAAgBIgBgCIgBgGQgCgQAAgQQAAgYAEgTIAFgPIAFgOQAHgPAMgLIAEgEIAMgKIAQgIIAOgHIAEgHQAig1ApgqIAJgJQAlgkAogZQAYgPAagMQAHgPAJgKQAPgSAlgUQBIgpBRgnQAjgQAbgKQAXgIAdgHQAcgSAfgPQBbg5BUgfIAJgEIAQgFQAvgQA1gJQAygLBDgEIAGAAIAagBQBDgDA/AEQAxADAzAGIAZAEIAjAFQCwAeCqBGIAKAFIAGACQBRAhA0AlIANAJIAWASQAkAfApAwIAEAEIAFAGQAgAkAaAjIAEAGIAGAIQAcApASAmIAHAOIAFAPQAHATAGAWIAFAQIAOA5IAEARIAEARIABAHIAGAQIAAABIAKANQALAQAHAVIAEASQAEARACAaIAAAFIABALQAEAvABAeIAAAPIAAAPQgBAcgDAaIgCAIIgCAPIgIAhIgMAsIgEANIgGAVQgKAggFAWIgDAPIgDAPIgFAYIgCAPIgIAmIgEAPQgLAogWArIgGALQgQAfgTAeQgtBFhBBDIgFAFIgFAGIgXAWIgEAEQgKATgNAcIgDAGQgIAPgNATQgSAagZAhIgEAFIgaAfQglArgcAfIgVAVIgGAGQhBBAhGApIgFADQggASgqATIgrARIgGADIhSAgIgpAQIgEACQg3AaggANIgDACIgDABQgtAVglALIgHACQgiALgqAIIgEABIhPALIgGABQhVALg+AFIgEAAQg2AEgyAAIgrgBg");
	this.shape_336.setTransform(933.8188,526.2979);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AkwRsIgEAAIgOAAIgugCIgxgDIgPgCIgdgDIgHAAQgcgEgegGIgggHQgggHgdgIIgcgJIgRgGQgUgHgVgJIgGgDIgigQIgUgLIgWgNQgbgPgZgQIgUgNIgDgCIgFgDIgIgGQgbgTgYgVIgNgLIgGgFIgLgLQgXgWgWgbIAAgBIgJgKIgDgEQgPgTgPgXIgFgIIgBgCIgBgBIgCgDQgRgagQgeIgBgBIgDgFIAAgBIgEgHQgSghgNgcIgDgJIgCgEIgGgOQgPgmgJgnIAAgBQgHgcgFgeQgEgbgCgYIgBgMIAAgFIgDgKIAAgEIgIgpIgCgKIgCgLIAAgEIAAAAIgEgJIAAgBQgJgUgFgTIgBgGIgEgMQgIgdgDggIAAgCIgBgRQgDgbABglIAAgBIABhQIAAgBIADgtIAGhQIAEgsQADgjAHgnIABgHIAGgqIAHgjIACgKIAIglIADgJQADgOAGgPIABgDIABgDIAHgTIABgGIABgDIACgQIAHgYIABgFIABgEIACgHIAGgSIACgFIAAgBIABgEIABgGIABgIQADgLAFgMQADgKAFgJIAEgFIAIgNIAKgLIAAgBIAIgNIAFgHIAQgSIAEgFIALgJIAPgLIAMgJIAFgGIAbgeQAdggAggaIAJgHIARgNQAagTAbgPIAGgGIAIgIIAHgGQAKgKAKgGQAIgGALgEIAHgHQAHgGAKgGIAHgEQAQgLAkgTIAAAAQBLgnBZggIAxgQIASgFQAZgGAegGIACAAQAfgQAfgNQBCgfA6gUIAKgDQAbgJAcgHIAKgCIAQgEIAogIQAcgFAmgEIA3gFIAGgBQAegCAeAAIAGAAIAbgBIBEABQAiABAhADIAkAEQAgADAeAFIAFABIAaAEIAkAHQCTAfCPBAIAJAEQAbAMAZAMIAJAFIAHADQAqAWAiAWIAlAbIAQAOIAMAKIAWAWIAfAfIADAEQAVAXAXAcIADAEIAFAGIARAWIAEAFQAUAaAQAYIAEAGIAFAHIAPAbIAQAdIANAeIAEAKIACAEIAFAPIANArIAEANIABADIAIAgIACAHIAGAQIABADIAFARIAFAQIACAIIAEARIAAABIABABQAEAGACAHQAHARAEAWIACAKIABAFIAAABIAFAsIAAAGIABALIACAeIAAAfIAAATIgBAQIgBAPIgBAEIAAAJIgIAuIAAACIgCAGIgDAQIgFAXIgCALIgHAaIgFATIgDANIgFAXIgBADIgHAdIgGAYIAAACIgEAPIgEAQIgFAWIgBADIgEAOQgFAUgHASIgGAPIgMAfQgNAagQAbIgGAKIgHALQgQAZgSAZQgjAvgrAtIgFAFIgdAcIgIAKIgFAGIgFAGIgTAWIgDADIgFAFIgUAdIgMARIgEAFQgLAPgOARIgEAEIghAlIgOAQIgFAFIgeAfIgVAVIgWAWIgeAbIgZAVIgGAFQgpAggpAZQggAUgkARIgGADIgGADIgsASIgeAMIgqAQIgHACIgNAFIgtAPIgeALQgbAKgRAFIgFACIgRAHIgHADQgmAPgeAJIgDABIgFABIgJADQgoANgoAIIgBAAIgHACQgiAGgqAGIgEAAIgGABIhRAIIgGAAIg8AEQgqACglAAIgPAAg");
	this.shape_337.setTransform(943.2208,528.9792);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AkXSBQg8gBg4gFIgwgFQgjgEgggGQg1gIhLgZQgigKgcgLQgZgJgUgKQgsgUg4glIgVgOQgpgbgegXIgQgNQgngfglgsQgVgYgWgfIgBgBQgVgbgTgeIgGgJQgZgogSgdIgDgIQgZgugQguQgXhAgJhPQgFgegBgYIgBgMIAAgFIgFgLIgQgvQgRgqgHggIgDgTQgFgdgCglQgBggABg1IAAAAQAChOAEgzQAEhFAIg8QAFgiAIgtIALgyIALgwQAGgaAIgVQAGgNAIgPIABgDIAMgXIAAgFIABgDQACgSAHgYQAIgcAHgSIAIgQQAMgVAUgRIAFgFQAOgLARgIIAQgSQAtgyAwgoQAwgpAxgdQAdgQAcgOIAIgIIAOgTQAJgMAHgHQAKgJATgGIAggLQAQgGAogUQBigxCDgaQAjgHArgGQBzgrBWgVIALgCQA5gMBHgGQApgGBVgBIAHAAQBkgBBCAEQA3AEA0AHIA/AKQC4AiCzBdIALAGQBTAqA6AvQARAPASARQAlAjAqAzIAFAEQAfAmAlA0IAFAGQAjAzAWApQAJARAGAQQAIAUAIAWQALAfAMAuIAKAlIABAHIAJARQANAaAGAjQAGAbADAmIAAAFQAGA5AAAlIgBAfQgBAbgFAgIgCAJIgKAzQgEALgGAjIgJAoIgNA8IgGAfIgGAaQgHAggJAYQgQAxgeA0QgVAlgbAlQg1BJhHBDIgFAFIgeAbIgmAxIgiAlIg2A3IgmAkIhOBHIgZAVQhOA+hSAoQgoATgwASQgUAIgbAJQgxARgvANQgeAKgRAFQg/AVgmAMIgIACQgyAQgsAIQgpAJgsAFIhbAIQhDAEg7AAIgmAAg");
	this.shape_338.setTransform(952.65,531.9659);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AkpSUQg+gDg7gIIgGgBIgrgGQgmgGghgHIgHgCQgvgKhMgaIgJgEIg3gTIgugVIgKgFQgogUg0gkIgJgFIgNgKQgqgdgfgYIgIgHIgIgHQgmgggpgvQgWgZgYgfIgBgBIgDgEQgYgdgRgaIgGgJIgEgEQgZglgSgdIgDgFIgBgDQgbgugSgxQgZhDgNhRIgBgCIgHg1IgCgNIgBgDIAAgCIgEgLIgQgyIgBgDQgQgrgIgdIgBgDIgDgRQgGgegCgmIAAgBQgBggAAg4IAAAAQAChUADgxIAAgBQAFhHAJg8IAAgDQAFgiALgvIALgzIAAgBIANgwIABgCQAHgZAJgUIACgEQAFgLAJgNIACgDIABgCIAMgVIADgGIAAgCIAAgBQAEgQAKgYIADgJQAIgWAHgPIAIgNIABgDQANgVAUgSIAGgFIAGgFIAXgQIASgSIAMgLQAsgrAtgjQA0gpAygeIAOgIIAugXIAHgHQAFgEAMgNQALgKAKgGQAMgJASgHIAggLQAXgIAlgQIAOgGQA5gXBOgSQAtgKAvgJIBSgNIAIgDQB2ghBVgRIAMgCIAdgFQAvgGA4gDIAfgDQAigBBDgBIAGAAIAZAAQBaAAA6AEIAdABIBSAIIBCAKIAaAFQCyAlCsBhIALAGIARAKQBJApA3AuIAmAiIALAMQAhAgAlAtIADAEIAMAPQAZAfAiAvIAFAGIAMASQAeArATAjIARAgIAKAWIAIAVQAOAhANAtIALAlIABAIIAHAPIABADQALAcAHAkQAFAeAEAmIABAGIACAVQAEAsABAhIAAAhIgCASQgBAUgEAXIgBAJIgCAKIgJAqIgEATIgFAeIgIApIgDAUIgIArIgHAhIgEARIgCAJQgHAggKAaQgSAzggA1QgWAmgdAnIgJALQg2BGhEBAIgGAFIgCACIgeAaIgsAuIglAkIgHAHIg2AvIgpAjIgIAIIhNA/IgGAFIgVAPQhSA8hYAoQgqATgxARIgIADIgqANQgwAPg2AOIgFACQgaAHgSAEQhBATgrAKIgIACIgFACQgvAMgsAHQgrAHguAEIhdAFIhJACQgzAAgugDg");
	this.shape_339.setTransform(962.0417,535.0221);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("Ak8SmQhAgFg+gLIgGgBIgsgHQgngIgigJIgHgCQgsgLhSgfIgKgDIg4gWQgcgLgUgKIgJgFQgogVg2gnIgKgHIgNgJQgrgfgggbIgIgHIgJgHQgkgggtgzQgXgZgagfIgBgBIgEgGQgcghgRgXIgGgIIgEgFQgbgkgTgeIgEgGIgCgDQgbgugVg0QgchFgRhUIAAgCIgKg2IgCgOIgBgDIAAgBIgDgMQgIgegIgXIgBgCQgSgugIgcIgBgDIgEgRQgHgggCgnIAAgCQgCgfABg7QABhcADguIAAgBQAEhLALg9IABgDQAFgiAMgyIANg0IAOgxIABgDQAIgZAKgUIADgEIAPgYIADgDIABgCIAOgVIAFgHIAAgBIAAAAIATgoIAEgJQAJgVAIgPIAIgNIACgDQAOgVAUgUIAGgFIAGgFIAWgSIAVgSIAMgLQAxgqAvgjQA3gpA0geIAPgIIAvgaIAHgFIAUgNQANgJAMgHQAPgIASgGIAggMIA/gXIANgEQA4gTBYgQIBggRIBVgOIAIgBQB/gcBXgNIAMgBIAfgEQAvgFA6gCIAhgBQAdgBBMAAIAHAAIAZAAQBhABA4ADIAeABQAsADApAFQAkAEAiAGIAaAFQC4AlC0BrIAKAGIASALQBKAtA5AxQAUASATASIAMALQAiAjAlAuIAEAEIAMAQQAXAeAmAzIAEAGIANASQAgAtAVAkQALARAIAPIAKAVIALAWQAQAkAOAsIALAlIACAIIAGAQIABADQAJAfAHAmQAGAgAFAnIAAAFIADAVQAFAuABAjQAAATgBAQIgBATIgFAsIgBAJIgCAKIgJArIgDAUIgGAgIgGArIgDAVIgHAtIgHAiIgEASIgCAJQgIAfgLAcQgUA1ghA3QgYAogfAoIgJAMQg5BIhIBBIgHAFIgCACQgOANgSAOIgxAtIgoAhIgKAIIg6AuIgrAiIgKAHIhSA+IgIAGIgVAOQhYA6hdAnQgtATgxAQIgJADIgsANQgvAOg9AOIgEABIgvALQhEAQgvAKIgIABIgFABQgvAKgvAFQgtAGgvADQgtADgzAAIgUAAQhQAAhMgHg");
	this.shape_340.setTransform(971.4417,538.1472);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AnYSiQhHgOg4gSQgsgNhggmQhQgfgkgUQgrgXg/gwQg7grgngjQg4gxhghvIg6hGQgggngWgiQhGhtgkibIgPhIQgKgrgKgdQgUgzgIgbQgMgogEg1QgCgeABg/QABhjADgtQAEhPAMg/QAJgxAahcQAKgkAGgRQAKgdANgUQAIgMAOgSIAXgdQAKgPASghQASggAKgQQATgcAfgcQAUgTAmgeQB8hhBpg7QCChKB9ggQA3gOBhgOIDFgeQCsgbBggHQA+gEBQgBICPABQCIACA2ADQBqAFBSARQDMApDJCEQBsBHBOBPQAqAsAvA8QAbAjA3BLQA+BWAaAxQAoBKAYBdQAUBNALBkQAKBWgEA3QgCAbgGAlIgMBBIgNBlQgHA+gKAnQgiCIhyCMQhABQhRBFQgzAshcBCIh3BVQhIAygZAQQiXBhiqAxQg2AQhuAYQhwAXhHALQiCATiAAAQixAAiwgjg");
	this.shape_341.setTransform(980.8271,541.3058);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AkwTOQhagJhegSQgkgHgggIQgigIgegJQgugOhVggIgOgFQhQgfgogVQgWgLgYgPQgegTgjgZIgXgQQgtghgkgeQgigcguguQgTgTgTgVIgkgmIgGgIIgvg4IgOgRQgfgngYglIgRgZQgbgugVgwQgVgygRg8IgLgqIgRhJIAAgBQgKgsgJgeIgBgEIgEgJIgMgjIgLgiQgGgWgEgWQgEgRgCgRIgDgRIgDguIgBgyIAAAAIACgwIACgqIAAgPIAAgOIABgeIADgeQAFg/AKg2IAAgCIAHgfIAHgaIAFgQIAGgQIAFgRIAGgTIACgGIADgLQAKgkAHgTIAHgSQAIgSAJgPQAIgNAOgRIAYgeIAOgVIARgbIAUgfIAMgRQANgRASgSIAXgWQAVgTAngfIADgCQAzgoAugfQBHgxBFgkIAJgFQBOgoBSgbQAxgRAxgLQA8gOBhgNICqgYIAigFQCYgWBqgHIAVgBQBCgEBRAAICTABIBiABQBAABAjACQAmACAhAEQBBAGA6AMQAeAGAfAJQBVAXBZAoQBHAgBBAoQAXAOAYARIAQAKIA8ArIA3ArQAdAYAXAWIAMALQAsAsAyA9IAIALIBNBmIAYAhQAiAuAUAhIAPAbQANAXALAbQAXA2ATBFIAKAnIAMA3IAJA2IAFAiQAEApACAkQACAmgBAfIgBARQgCAWgEAcIgJBAIgBADQgBAPgLBYIgCAKQgHA2gMAoIgCAGQgTBGgjBAQgmBHg9BIQgbAhgfAfQgtAtgyAqQguAmhIAyIggAVQg+AqhAApQg/AqggASIgIAEQh6BIiRAvQgjAMgjAJQgpAMg8ANIhFAOIhMANQhAALgyAHQhyAOhwACIgdABQhjAAhdgKg");
	this.shape_342.setTransform(990.5167,543.8094);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("Ak6ThQhcgJhjgUIhGgPQgjgIgfgJQg0gPhTgfIgOgFQhRgegtgWQgXgLgZgQQgggSgkgZIgYgQQgtgggoggQgkgcgwguQgWgUgSgTQgUgTgSgUIgHgIQgcgggVgaIgNgRQgfgngbgoIgRgaQgegwgWgxQgVgxgUhAIgMgqIgShMIAAgBIgShMIgBgEIgEgKIgLgkIgLgkQgHgXgFgWQgFgSgDgRIgCgRQgDgSgCgeIgCgyIAAgBQAAgbABgWIADgrIAAgQIABgPIABgfIADgfQAGhAALg5IAAgCIAHggQADgNAFgOIAHgPIAGgQIAGgSIAGgSIAEgGIADgMIAAAAIARg4IAIgUQAIgSAJgPQAIgOAOgSIAZgfIAPgVIATgbQAMgRALgOQAGgJAHgIQAOgQAUgTIAYgWQAXgUAogfIADgDQA2gqAugfQBIgxBKgjIAKgEQBPgnBZgaQAzgPAzgLQBAgOBigMICwgXIAjgEQCWgTB2gGIAVgBQBGgDBTgBICXABIBlACQBBAAAmADIBJAFQBCAGA9AOQAfAGAfAJQBXAZBeApQBMAiBAApQAXAOAZARIAQAMIA+AtIA6ArQAgAYAXAWIAMALQAvAsA0A/IAJALIBRBoIAZAiQAkAwAUAhIAQAcQANAYALAcQAXA3AVBIIALAoQAIAgAFAZIALA3IAFAkQAFApACAnQADAmgBAhIgBARIgEAzIgIBCIAAAEQgCAVgLBUIgBALQgIA1gOAsIgCAHQgXBKghA/QgoBJhBBJQgdAhggAgQgwAug0ApQgyAohJAwIgiAVQhBAphEAoQg/AngmASIgIAEQh6BDieAvQglALgjAKQgvALg6AMIhHAOIhPAMQhCAKg0AGQh2ANh0ACIgUAAQhuAAhigKg");
	this.shape_343.setTransform(1000.233,546.2792);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AlETzQhdgJhpgVIhIgQIhEgRQg6gQhRgdIgPgFQhSgegxgXQgYgLgagPQgigTgkgZIgagQQgtgfgsghQgmgdgzgtQgYgUgSgTQgVgTgSgUIgHgIQgcgfgXgdIgOgSQgegngegrIgSgbQgggygWgwQgXgxgVhEIgNgrIgUhOIAAgBIgRhPIgBgEIgEgLIgLgmIgLglIgMgtQgHgUgDgQIgDgRQgEgTgCgeQgDgcAAgZIAAAAQgBgcACgXQAEgaAAgTIAAgQIAAgPIACggIADghQAGhAAMg9IAAgCIAIggQAEgOAGgNIAHgQIAHgPIAHgTIAHgSIAEgGIADgMIABgBQAKglAHgVIAIgUQAIgTAJgQQAJgPAOgSIAaggIARgVIAVgbQAMgRAMgNQAIgJAIgIQAPgQAVgTIAZgWQAYgVApggIAEgDQA4gsAvgfQBKgxBPgiIAKgFQBRgkBegZQA1gOA1gLQBGgNBigMQBagLBcgJIAlgEQCTgRCCgFIAWgBQBJgDBVAAICbABIBpABQBCABAnACQAqACAiAEQBEAGA/APIBAAQQBYAaBiArQBSAkA/AoQAWAOAbAUIARAMIA/AuIA9AsQAjAaAXAUIANALQAxAtA3BAIAJALQAeAlA3BGIAaAjQAnAxAUAhQAJAPAHAPQANAYALAdQAXA3AXBNIAMApQAKAjAFAXQAHAdAFAcIAFAlQAGApACAqQADAnAAAhIgBASQAAAagDAcQgBAegFAmIAAADQgBAcgMBQIgBALQgIA0gQAxIgDAGQgZBQghA9QgqBLhEBLQgeAhgiAgQgyAvg3ApQg2AphLAvIgjAVQhEAohIAnQhAAkgrASIgIAEQh7A+irAvIhKAUQg0AMg4ALIhJAMIhSAMQhDAJg3AFQh7ALh3ABIgMABQh5AAhmgLg");
	this.shape_344.setTransform(1009.945,548.7511);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AlOUGQhfgKhtgVIhLgRIhGgRQg/gRhRgcIgPgFQhSgdg1gYQgagMgagOQgkgUgmgYIgagQQgugegwgiQgogeg1gsQgbgWgRgRQgXgTgTgUIgHgIQgbgfgZggIgOgSQgfgngfguIgTgcQgjg1gXgwQgXgwgYhIIgOgrIgUhQIAAgBQgLgvgGgjIgBgEIgEgMIgLgnIgLgnIgNguQgHgVgEgQIgEgQQgEgUgDggQgEgdgBgYIAAgBQgBgdADgYQAEgbABgSIAAgRIAAgQIABghIAEgiQAHhBANhAIAAgCIAIghQAEgPAHgNIAIgPIAIgPIAIgTIAIgTIAEgFIAEgNIAAgBQAKglAIgWIAIgVQAIgUAKgRQAJgPAOgTIAcghIARgVIAXgbQANgQAOgOIARgRQAQgQAWgSIAbgXQAZgVArgiIAEgDQA7guAvgeQBLgxBVgiIAKgEQBSgiBlgYQA3gOA3gKQBKgMBigMQBegKBfgJIAmgDQCQgPCPgEIAXgBQBNgCBVAAICgABIBsABQBDABAqACQAsACAiAEQBFAHBCAQQAhAHAhAKQBZAaBnAtQBXAnA+AoQAWAOAcAUIARANIBCAxIA/AsQAmAaAXAUIAOALQAzAtA5BCIAKAKQAgAmA4BIIAcAkQApAzAUAhQAJAPAIAQQANAZAMAeQAWA3AZBRIANArQALAlAFAWQAIAeAGAcIAGAmQAFApADAtQADAoAAAjIAAASQAAAcgBAbQgBAigEAkIAAAEQgBAjgLBMIgCALQgIAygTA2IgCAGQgcBWghA7QgrBNhIBMQggAigkAgQg0Avg5AqQg6AqhMAtIglAVQhGAohNAlQhAAigxASIgIAEQh7A4i4AvIhMATIhvAWIhMAMQgrAGgrAFQhEAIg6AEQh+AKh7ABQiHAAhrgLg");
	this.shape_345.setTransform(1019.6482,551.225);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AlZUYQhhgKhygXIhMgQIhJgSQhFgShPgbIgQgFQhSgcg6gZQgagLgcgPQgmgTgngYIgbgRQgugdg0gkQgrgdg3gsQgcgWgSgRQgYgUgTgUIgHgHQgbgegbgjIgPgTQgegngigxIgUgcQgmg3gXgwQgXgwgbhMIgOgsQgPgzgHgfIAAgBQgLgvgFgmIgBgEIgDgNIgLgoIgLgpIgOgvQgJgVgEgQIgFgQQgFgVgEghQgEgfgBgYIAAAAQgBgeADgYQAFgdABgSIAAgSIAAgQQgBgRACgRIAEgjQAIhCANhDIABgDIAIghQAEgQAIgNIAJgPQAHgIADgHIAIgTQAEgLAFgIIAFgFIADgOIABgBQAKgmAIgXIAIgVQAJgUAKgSQAKgRAOgSIAcgiIASgWIAZgbQAOgPAQgOIASgRIApgjIAcgXIBGg4IAEgDQA/gwAugfQBNgxBaggIAMgFQBSggBsgWQA5gNA5gKQBPgMBigKQBhgKBigIIAngCQCOgNCbgDIAYAAQBQgCBXAAIClABIBvABQBEABAsACQAuACAiAEQBGAHBFARQAiAIAiAKQBaAbBsAvQBbAoA+ApQAWAOAdAWIASANQAoAfAbATQAbAUAmAZQAqAbAXATIAPAMQA2AtA7BDIAJALQAiAnA7BJIAdAkQAsA2AUAgQAJAPAIASQANAZAMAgQAWA3AbBVIANArQAOApAFAUQAJAfAFAdQAEASADAWQAGApADAvQADAoABAlIABATQAAAdgBAcQAAAkgCAkIgBADQgBAqgLBHIgCAMQgIAygVA5IgCAHQggBaggA6QgsBPhMBOQghAigmAhQg3Avg8AqQg+ArhNAsIgmAVQhJAmhRAkQhBAfg1ATIgKADQh7A0jEAuQgpALgmAIQg+ANg0AJIhPALIhYAJQhFAHg9AEQiCAJiAAAQiMgBhsgLg");
	this.shape_346.setTransform(1029.4083,553.725);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AhkU3QiUgBhsgMQhigKh3gYIhPgRIhKgRQhLgThOgaIgQgFQhTgcg+gaQgcgLgcgPQgogTgogXIgcgRQgugcg4gmQgtgeg6grQgfgXgRgPQgZgVgUgUIgHgHQgbgdgdgnIgPgTQgegngkgzIgVgdQgog6gZgwQgXgvgdhQIgPgtQgQgzgHghIAAgBQgMgwgEgnIAAgFIgEgNIgKgqIgLgqIgPgwQgKgXgFgOIgFgRQgGgWgEgiQgFghgCgXIAAAAQgCgfAEgZQAGgfABgRIAAgSIAAgRQgBgRACgSIAEglQAJhCAOhHIABgCIAIgiQAFgRAIgNIALgOQAHgJADgHIAJgTQAFgMAFgHIAGgFIADgOIABgCQAKgmAJgYIAIgWQAJgVAKgSQAKgSAOgSQAQgVAOgPIATgWIAagaIAhgeIATgQIAsgjIAegXIBIg6IAFgDQBBgzAvgeQBOgxBfggIAMgEQBTgeBzgVQA7gMA8gJQBTgMBigJQBkgKBlgHIApgCQCLgKCogCIAYAAICsgBICpABIBzABQBFAAAvADQAvACAiADQBHAIBJASQAiAIAjALQBbAcBxAxQBhAqA9ApQAWAOAeAXIASAOQAqAhAbATQAaATAqAbQAsAbAXATIAQALQA4AtA+BFIAKALQAjAoA9BLIAfAlQAuA4AUAgQAJAPAJASQAMAaANAhQAVA4AeBZIAOAsQAPAsAFASQAKAhAGAcIAHAqQAGApADAyQAEAoABAnIABAUIABA6QABAogCAiIAAAEQgBAwgLBDIgCANQgJAwgXA9IgCAIQgjBfgfA4QguBRhPBPQgjAjgoAiQg6Avg9AqQhCAshPArIgoAUQhLAmhVAjQhCAcg7ATIgJADQh8AujQAvIhSASQhDANgyAIQglAFgsAFIhcAIQhGAGhAAEQh+AHh7AAIgQAAg");
	this.shape_347.setTransform(1039.1699,556.2016);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AhpVKQiagChtgLQhjgKh8gZIhRgSIhNgSQhQgThNgZIgRgFQhTgbhCgbQgdgMgdgOQgqgUgpgWIgegRQgugbg8gnQgvgfg8grQghgXgRgOQgbgVgUgUIgHgHQgagdgfgpIgQgUQgdgngng3IgWgdQgrg9gZgvQgYgvgfhUIgQgtQgQg0gJgjIAAgBQgMgxgDgpIAAgEIgDgPIgLgrIgLgsQgHgdgIgTQgMgYgFgOIgGgRQgGgXgFgiQgGgjgCgXQgCggAEgaQAIgfABgSIAAgTIgBgRQgBgRACgTIAFgmQAJhDAPhKIABgDQAEgWAEgMQAGgRAJgNIAMgPQAIgIADgHIAKgTQAFgMAGgHIAFgFIAEgPIABgCQAKgmAJgaIAIgWQAJgWALgTQALgTAOgSQAQgVAOgQIAVgWIAcgaQAQgPATgOIAVgRIAugiIAfgYIBLg7IAFgEQBEg1AvgdQBQgxBlggIAMgEQBUgbB5gVQA9gLA+gIQBYgLBjgJQBmgJBpgGIAqgCQCIgIC0AAIAagBICxAAICtABIB2ABQBGABAxACQAxACAjAEQBIAIBMATIBHAUQBcAcB1AzQBmAtA9AoQAVAOAfAZIATAOQAtAkAaASQAaATAsAbQAwAdAXARIAQAMQA7AuBABGIAKAKQAlApA/BNIAgAmQAxA6AUAgQAJAPAJATQANAbAMAiQAVA4AgBdIAPAuQARAuAFARQALAiAGAdIAIAqQAGApAEA0IAGBTIABAUIACA8QACArgBAhIgBADQAAA4gLA/IgDANQgJAugZBCIgCAIQglBlgfA2QgwBThTBRQgkAjgqAiQg8AwhAAqQhGAthQApIgpAUQhPAmhZAhQhCAahAASIgKAEQh8AojdAvIhUARQhIAOgxAHIhTAJIheAHQhIAFhDADQh1AFhyAAIgqAAg");
	this.shape_348.setTransform(1049.0117,558.6702);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AhtVdQihgChtgMQhlgKiBgaIhTgSIhPgSQhWgVhLgXIgSgFQhUgbhGgcQgfgMgegOQgrgTgqgXIgfgRQgugahAgoQgyggg+gqIg0glQgcgVgVgUIgHgHQgagcghgtIgQgUIhHhgIgWgfQgug/gZgvQgZgugihYIgQguQgRg1gJgkIAAgBQgMgxgCgrIAAgFIgEgPIgKgtIgLgtQgIgfgIgTIgTgmIgGgRQgHgYgGgjQgHglgBgWIAAAAQgDghAEgaQAJgiABgRIAAgTIgBgSQgBgRACgUIAFgnQALhEAPhNIABgDQAFgXAEgMQAGgSAKgNIANgOQAIgJAEgGIAKgUQAGgNAGgGIAGgFIAEgQIABgCQALgmAJgbIAIgXQAJgWAMgUQALgUAOgTQAPgUAQgRIAWgXIAegaQARgOAUgPIAXgQIAwgiIAhgZIBNg8IAFgEQBHg3AwgeQBRgwBqgfIAMgEQBWgZB/gUQBAgKA/gIQBdgLBjgIQBqgIBrgFIArgBQCGgGDBABIAaAAIC2AAICxABIB6ABQBHAAAzADQAzACAjADQBKAJBOAUQAkAJAlAMQBdAdB7A1QBqAuA8ApQAVAOAhAaIATAPQAvAmAZASQAbASAvAdQAyAdAXARIARAMQA9AtBDBIIAKALQAmApBDBPIAhAnQAzA7AUAgQAJAQAKAUQAMAbANAkIA3CZIAQAvQASAxAFAPQAMAjAGAdQAFATAEAZQAGAqAEA2IAHBVIACAVIADA9QACAuAAAgIAAAEQAAA+gLA6IgDAOQgJAugbBGIgDAIQgoBpgeA1QgxBVhXBSQgmAkgsAiQg+AxhDAqQhKAuhRAoIgrAUQhRAkhdAgQhDAYhFASIgKADQh9AkjqAvIhWAQQhOAOguAGQgmAFgwAEIhhAGQhJAEhGACQhrADhnAAIhGAAg");
	this.shape_349.setTransform(1058.865,561.1667);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AhyVwQiogChtgMQiFgOi9gqQiNgfhpgfQiEgnhsgvQg+gbg6ggQhSgsiVhgIg2glQgegWgVgUQgcgcgog1IhwiYQgwhBgbgvQgZgugkhcQgghUgMg1QgNg2gBgvIgDgQIgKgvQgOhDgOgeIgUgmQgMgbgKgzQgHgogCgVQgDgiAFgbQAJgiABgSIAAgTIgBgTQgBgfAIgvQALhHARhRQAFgZAEgLQAHgTAKgMIAOgPQAKgJAEgFIALgVQAGgNAGgGIAHgFIAEgQQAQg7AOgiQAjhTBDg9QAbgZAsgeIBLgyQAegUBZhHQBKg5AwgdQBYg0B3gfQBWgXCGgSQELglEZgJQCLgFDxACIIJADQCPABBHAIQBsAMB6AnQBfAfB/A2QBwAxA7AoQAaASAwAoQAxAoAZARQAaASAyAdQA2AfAXAPQBMA0BVBaQAxA1BdBuQA2A9AUAgQAVAkAYBCIBJDNIAZBBQANAlAHAdQAMAzAIBeIAJBsQAIBfABAwQAABQgOA9QgKAvggBQQgrBvgeAzQhIB8iaB1QiLBqibBHQidBJjSA1Qh+AfkAAxQiWAbhCAIQhNAIhwAFQikAGifAAIhwgBg");
	this.shape_350.setTransform(1068.7446,563.6084);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AhzVxQh5gChcgHIhAgFQiBgOizgpIgNgDQg9gNg5gPQhGgSg6gRIgGgCQhEgUhDgYQg1gTgvgUIgogSQgpgUgngVQg1gchPgxIhihAQgmgYgRgNQgWgQgRgPIgMgLQgbgZghgsIgIgLIg5hLIg3hNIgcgoQgbgpgSggQgOgZgPgkIgRglIgQgnIgCgEQgehOgMg1IgBgCQgNg1gBgwIgEgQIgEgSIgFgdQgLg3gMgfIgFgLIgTgnQgGgQgGgVIgJgpQgGghgCgUIgBgHQgDgiAFgbQAJgiABgSIAAgUIgBgTQAAgVAEgeIAEgaQALhHAShRIAHgaIADgKQAGgSAKgNIAOgPQAJgJAEgGIALgUQAHgNAGgGIAGgFIACgHIADgJQALgoALgeIAJgWIADgIQAJgVAMgTQALgTANgRQAOgTAQgQIAPgOIAKgKIAKgIQAYgWAlgaIBKgyQAggWBXhFQAngfAhgWQAcgUAWgNQBZg0B2gfQAggIAngIIAzgKIA3gJIArgHIAHgBIAxgHQBDgIBGgHQCrgQC4gGQBigDCRAAICKABIH8ACIAMAAQBpAABCAFIArADQBCAIBGAQQAuAMAxAPQAiALAmAOQBDAYBSAkIALAFQBCAcAuAZQAcAPAVAPQAUANAeAXIAZAUQAvAnAbATQAaASAxAeIAsAaIAgAVQA1AkA2A1QAZAYAcAeIAYAcIBTBfIAiAoQAfAkATAaQAOATAIAOIAIAOQALAUAMAaQAIASAIAWIAHATIAVA8IAsB+IAXA+IABAEQANAkAHAeQAMA0AHBcIAJBsQAIBeAAAxQAAAygFArQgEAZgFAXQgLAwgfBOQgVA3gSAoQgTApgPAbQgvBQhQBNIgGAGIgJAIQgVAVgZAUIglAdIgMAJQhPA5hPAtQg9AkhAAeIglAQQgfAOgjANQgiANgjALIhDAXIhHAWIg4AOIhSATQhOARhvAWIhvAVIhVAPQhPAOgtAFIgHABQg0AFhBAEIg5ACIgPABIgvABIhwADQg9ADg5AAIh3ABIgnAAg");
	this.shape_351.setTransform(1073.34,564.6313);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AhzVwQh5gBhdgGIhAgGQiDgPiwgoIgNgDQg8gOg6gQQhHgTg5gRIgHgCQg/gThIgZQg1gSgugUIgpgSQgpgTgngVQg2gdhOgxQgsgbg2gkIg3gmQgWgQgRgPIgMgLQgcgaghgrIgIgKQgYgfghgsQgYghgegtIgbgpQgbgpgRggQgOgagQgiIgQglIgRgnIgCgEQgehMgNg2IgBgDQgNgzgCgyIgDgQIgEgSIgGgdQgLg2gLggIgFgLIgSgnQgGgQgFgVIgJgpIgIg1IgBgHQgCgiAEgbQAJghABgTQABgIgBgMIgBgTQABgWADgcIAFgbQALhGAThRIAHgaIADgKQAHgTAKgMIANgPQAJgJAEgGIAKgVQAHgNAGgGIAHgFIACgHIACgJQANgoAMgdIAHgWIAEgJQAJgTAMgUQAMgTANgRQAOgSAQgQIAQgOIAKgKIAJgIQAYgXAlgZIBJgzIB2hbQAogeAhgXQAcgTAXgNQBag1BzgeQAhgJAngIIAzgKIA3gJIArgGIAHgCIAxgHQBBgJBIgGQCngQC9gFQBigDCRAAICJABIH8ABIANAAQBpAABBAFIAsAEQBCAHBFAQQAuALAxAPQAiALAmAOQBCAYBUAkIALAEQBCAdAuAYQAbAPAWAPQAUANAeAXIAZAUQAvAlAcAUQAbATAwAdIArAbQAUANAMAJQA0AlA1A0QAZAZAbAfQAMAMANAQIBSBgIAhAoQAfAjATAbQAOATAHANIAIAPIAYAtQAJASAIAVIAHATIAWA8IArB/IAWA+IABAEQAMAkAGAeQANA1AHBbIAJBsQAHBcgBAzQAAAxgGArQgDAagGAXQgKAwgfBOQgUA1gTAqQgSAogQAbQgwBRhPBMIgGAGIgJAIQgUAWgaAUIgkAcIgNAJQhQA6hNAsQg+Akg/AdIgmARQgeANgkANIhEAZIhDAXQgkAMgjAKIg3APIhTATQhMARhxAVIhvAVIhVAPQhPAOgtAEIgHABQg0AGhAADIg6ACIgPAAIgvABIhwAEQg+ADg4ABQg/ACg+AAIgggBg");
	this.shape_352.setTransform(1077.907,565.655);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AlKVpIg/gGQiGgPiugpIgNgDQg6gNg7gSIiBglIgGgCQg8gRhMgaQg1gSgugUQgVgIgUgKQgpgSgngVQg3gdhNgxQgsgcg2gkIg2gmQgWgQgSgQIgMgKQgdgbghgpIgIgLQgZgegggsQgXghgegtIgagpQgagqgRggQgOgbgQghIgRglIgRgmIgCgEQgfhLgNg3IgBgEQgNgygCgzIgEgPIgEgTIgFgcQgLg2gLghIgEgLIgSgnQgGgRgFgUIgIgpIgHg2IgBgFQgDgiAEgbQAIgiACgTQABgIgBgLIAAgTQAAgWAEgdIAFgbQAMhGAThRIAHgZIAEgKQAGgTAKgMIAMgQIANgPIALgUQAGgNAGgHIAHgGIACgFIACgJQAOgoANgdIAHgWIAEgIQAIgUAOgUIAZgkQAPgRAQgPIAPgOIALgKIAJgJQAYgWAjgaIBJg0IB2hbQAngdAigXQAcgTAXgNQBbg1BygfQAhgIAngIIAzgKIA3gJIArgHIAHgCIAxgHQBAgJBIgGQCkgPDBgEQBjgDCRgBICJAAIH8ACIAMAAQBqAABAAEIAsAEQBDAHBFAPQAuAMAxAPQAiALAmAOQBBAXBVAjIALAGQBCAcAtAYQAcAPAWAOQAVANAdAXIAaATQAuAkAcAVQAcAUAvAeIArAbIAfAWQA1AnA0AzQAYAZAbAgIAYAcIBSBgIAhAoQAeAkASAbQAOATAIANIAIAPIAZAsQAJASAIAVIAIASIAVA9QATA3AXBHIAVA/IABAEQAMAkAGAeQAMA3AHBZIAJBsQAGBaAAA1QgBAxgGArQgDAZgGAXQgLAygeBMQgUA1gTAqQgSAogQAbQgwBShPBLIgGAHIgIAIQgUAWgaAUQgQAOgVAOIgMAJQhSA6hMArQg+Alg+AdIgmAQQgdAMglAPIhEAYIhDAYIhHAWIg3APIhTATQhLAQhzAVIhuAVIhVAOQhPAOgtAFIgHABQg1AGg/ACIg6ABIgPABIgvABIhwADQg/AEg3ACQhPADhOAAQh4gBhegHg");
	this.shape_353.setTransform(1082.5037,566.7);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AlKVqIhAgHQiHgOirgqIgOgEQg4gNg9gSIiAgmIgGgCQg6gQhPgbQg2gTgtgSIgpgSQgpgSgogWQg3gdhMgwQgsgbg2gmQgjgYgUgPQgVgPgTgQIgLgKQgfgcgggnIgIgKQgagggfgrQgYgggcguIgagrQgZgpgRghIgeg8IgRgkIgSgmIgCgEQgfhJgOg6IgBgCQgMgygDgzIgEgQIgDgSIgGgcQgKg1gLgiIgEgMIgRgoIgLglIgIgoQgFghgCgUIAAgGQgDgiAEgcQAIggABgUIABgUIAAgSQAAgXAFgcIAEgaQANhGAUhRIAHgZIADgKQAHgSAJgOIANgPIAMgQIALgUQAGgNAGgGIAHgGIACgHIACgIQAOgnAPgcQADgNAEgLIADgIQAIgTAOgUQAOgTAMgQQAPgRARgQIAQgNIAKgJIAJgJQAYgXAigbIBIg0IB2haQAngeAigWQAcgTAYgOQBcg1BxgeQAhgJAmgIIAzgKIA3gJIArgHIAHgBQAagGAXgDQA+gJBLgFQCggNDFgGQBkgCCQgBICJAAIH7ABIANAAQBqABBAAEIAsADQBEAHBEAQQAtAKAyAPIBIAYQBAAYBWAkIALAEQBDAdAtAXQAcAPAWAOQAVANAdAVIAaAUQAtAkAdAVQAcAUAuAeIArAcIAfAXQA1ApAyAyQAYAZAbAfIAYAdIBSBhIAgAoQAdAkASAcIAWAgIAHAPIAbArQAJARAJAWIAHASQAKAZALAkIApB/QAPAqAGAVIABACQALAkAHAgQAMA3AHBYIAIBsQAGBZgCA1QgBAxgGAsQgDAYgGAYQgLAzgdBKQgUA1gTAqQgSAogRAcQgwBRhOBLIgGAGIgIAJQgUAWgaAVIglAcIgMAIQhUA6hJArQg/Akg+AdIgmAQIhCAbIhEAZIhDAXQgkAOgiAKIg3APQgkAJgvAKQhKAPh0AWIhuATIhWAQQhPANgsAFIgIABQg1AGg/ACQgYAAgiAAIgOABIgvAAQg2AAg7AEQhAAEg1ACQhPAEhOABQh3gBhfgGg");
	this.shape_354.setTransform(1087.0919,567.75);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AlLVqIhAgGQiJgQipgqIgNgEQg3gNg/gTIh/gmIgGgCQg3gQhTgbQg2gSgtgTIgpgRQgpgTgogVQg4gdhLgwQgrgcg3glIg2gnIgpggIgLgKQgggdgfglIgJgLQgbgfgegrQgXgggcgvQgOgVgLgWQgZgqgQggIgeg8IgSgkIgSglIgCgEQgfhHgPg8IgBgDQgMgwgEg1IgDgPIgEgTIgFgcQgKg0gLgjIgEgMQgLgYgFgQIgKglIgIgoQgFgggBgWIgBgFQgCghADgcQAHggACgVIABgTIAAgTQABgWAEgcIAFgbQANhFAVhRIAIgZIADgKQAGgSAJgOIAMgPIAMgQIALgUQAGgNAGgHIAHgGIACgGIADgJQAOgmAQgcIAGgXIAEgJQAIgSAPgVQAOgTAMgPQAQgSARgOIAQgNIAJgKIAJgIQAYgYAigbQAagVAtggIB2haQAmgdAjgXQAcgSAYgOQBeg2BvgdQAhgKAlgHIA0gKIA3gJIArgIIAHgBIAxgJQA9gJBMgFQCcgNDKgEQBlgDCOAAICJAAIH8AAIAMAAQBrAAA/AEIAsADQBFAHBDAPQAuALAxAPQAiAKAmAOQA/AXBXAkIAMAFQBDAcAsAXQAcAOAXAOQAWAOAdAUIAZATQAtAjAeAWQAcAVAuAeIAqAdIAfAXQA1AqAxAyQAXAYAbAhIAYAdIBRBiIAfAoQAdAkASAcIAVAgIAIAOIAbArQAKARAJAVIAIATQAJAYAMAkIAoB/IAUBAIABADQAKAkAHAfQALA5AHBVIAIBsQAFBZgBA3QgCAwgGArQgDAZgGAXQgLA1gdBJQgTA0gUAqQgSAogRAcQgxBThNBJIgGAHIgIAJQgTAWgaAUQgQANgVAPIgNAJQhVA6hIAqQg/Alg+AcIglARIhDAaIhEAYIhCAZQglAOghAKQgZAIgeAHIhSATQhJAPh2AVIhuAUIhWAOQhPAOgsAFIgIABQg2AFg9ACIg7AAIgOAAIgvAAQg2ABg7AEQhBAFg0ACQhPAFhOAAIgcAAQhlAAhVgGg");
	this.shape_355.setTransform(1091.6797,568.7809);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AlMVqIhAgGQiKgQingrIgNgDQg2gOhAgUIh/gnIgHgCIiKgrQg2gRgtgTIgpgRQgpgSgogVQg4gehLgwQgrgbg2gmIg3gnQgWgQgTgQIgLgKQgigegegkIgJgKQgbgggegqQgXgggbgwQgNgVgMgWQgXgqgRghIgdg7IgTglIgSgkIgCgEQgfhFgQg9IgBgDQgLgvgFg2IgEgQIgDgSIgGgdQgKgzgKgkIgEgMIgPgoQgFgSgEgTIgIgpIgGg1IgBgFQgCggAEgdQAGgfACgWIABgTIAAgTQACgXAEgbIAFgaQANhGAWhQIAIgZIADgLQAHgSAJgNIALgQIAMgQIAKgUQAHgNAGgHIAGgGIACgGIADgIQAQgmAQgcQACgNAEgKIAEgJQAIgSAPgVQAPgUAMgOQAQgRARgOIARgMIAJgKIAJgJQAXgZAigaQAagWAsggIB1haQAngcAjgXQAcgSAYgOQBfg2BtgeQAigJAlgIIA0gJIA2gJIArgIIAHgCQAcgGAWgDQA7gJBOgFQCYgMDOgEQBmgDCOAAICJAAIH7AAIANAAQBrgBA/AEIAsAEQBFAGBCAPQAuAKAyAPQAiALAmANQA+AWBYAlIALAEQBEAdAsAWQAcAOAXAOQAXAOAcAUIAaATIBLA4QAdAWAsAeIAqAeQASANAMAKQA2ArAvAyQAXAYAbAiIAXAdIBRBiIAfAoQAcAkASAcIAUAhIAIAOIAcAqQALAQAJAWIAIASQAJAZAMAkQASA4AVBHQANApAGAXIABADQAKAkAGAfQAMA7AHBTIAHBsQAFBXgCA4QgCAxgGArIgJAwQgMA1gbBIQgUA0gUArQgSAngRAcQgxBThNBJIgGAHIgIAJQgSAXgaAUQgQANgVAOIgNAJQhYA7hFAoQhAAmg9AcIgmAQQgaAMgoAOIhEAZQgaAJgoARQglAOghAKQgZAIgdAHQgkAJgvAJQhHAPh4AVIhuAUIhWAOQhPAOgsAEIgIABQg3AGg8ABIg7AAIgOAAIgvgBQg1ABg8AEQhCAHgzACQhPAFhOABIgdAAQhkAAhVgGg");
	this.shape_356.setTransform(1096.2803,569.8285);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AlNVqIhAgGQiMgQilgsIgNgDQg0gOhCgVIh+gnIgHgCIiKgrQg3gSgtgRIgpgRQgpgSgogWQg5gehKgvQgqgbg3gnIg3goQgVgPgUgRIgLgKQgjgegegiIgIgKQgdghgdgpQgWgggbgwIgYgsIgnhLIgdg8IgUgkIgSgkIgCgEQgghDgQg/IgBgDQgLgugGg3IgDgPIgEgTIgFgcQgKgzgKglIgDgMIgPgoIgJgmIgHgoQgEgfgCgWIAAgEQgCghADgdQAGgeACgXIABgTIABgTQABgXAFgbIAFgaQAOhFAXhRIAHgZIAEgKQAGgSAJgNIALgQQAHgKAEgHIALgUQAGgMAGgIIAGgGIACgGIAEgIQAQglARgcQACgNAEgKIAEgJQAHgSARgVQAPgUAMgOQAQgRASgNIARgMIAJgKIAIgJQAYgZAggaQAbgXArggIB1hZQAmgcAkgYQAcgSAYgOQBhg2BrgdQAigKAlgHIA0gKIA2gJIArgIIAHgCQAcgGAVgDQA7gKBPgEQCVgLDSgEQBngDCMAAICJAAIH8gBIAMAAQBsAAA+AEIAsADQBGAGBCAOQAtAKAyAPQAiALAmANQA9AWBaAlIALAEQBFAdArAVQAcAOAXAOQAYAOAbATIAaATIBLA4IBJA1IAqAeQASANAMALQA2AtAtAxQAWAYAcAiIAXAdIBQBjIAeAoQAcAkARAdIAVAhIAHANQALARATAYQALARAJAVIAIASQAKAZALAkQASA5AUBGQANAoAGAZIABADQAJAjAGAgQAMA8AGBSQAFA2ACA2QAFBVgDA6QgCAwgGArQgEAZgFAXQgMA3gbBGQgTA0gVArQgSAmgRAdQgyBUhMBIIgGAHIgHAKQgSAWgaAUQgQANgWAPIgNAIQhZA8hEAnQhAAmg8AcIgmAQIhDAaIhDAZIhDAaQglAPgfAKQgZAIgeAHQgjAJgwAJQhGAOh5AVIhtATIhXAPQhPANgsAFIgIABQg4AGg7AAQgXABgkgCIgOAAIgvgBQg1ABg8AFQhEAHgxADQhOAGhPABIgmABQheAAhSgHg");
	this.shape_357.setTransform(1100.8796,570.8597);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AlOVrIg/gGQiPgRiigsIgNgEQgzgNhDgWIh/gpIgGgCIiLgqQg3gRgsgSIgqgRQgpgRgogWQg6gehIgvQgqgbg4gnIg3goIgoggIgMgKQgkgggdggIgJgKQgeghgcgoQgWgggagxIgXgtIgmhMIgeg7IgTgkIgTgjIgCgEQgghCgQhAIgBgDQgMgtgHg4IgDgPIgDgTIgFgdQgKgygKgmIgDgLQgJgZgEgQIgJglIgHgpQgEgegCgXIAAgEQgCggADgdIAIg1IABgUIABgSQACgXAFgbIAFgaQAOhGAYhQIAIgYIADgLQAHgRAIgOIALgRIALgQIAKgUQAGgMAGgJIAGgGIACgFIAEgIQARglATgbQABgNAEgLIADgJQAIgRARgWIAcghQAQgRATgNIAQgLIAJgKIAJgJQAXgZAggbQAbgYAqggQApghBMg4QAlgbAlgXQAcgSAZgOQBig3BpgeQAigJAkgHIA1gJIA2gKIArgJIAHgBIAxgKQA5gJBQgFQCSgKDXgEIDzgDICJAAIH7gBIANAAQBsAAA9ADIAtADQBFAGBCAOQAuAKAyAPQAiALAlANQA8AVBbAlIAMAFQBFAcArAVQAcAOAXAOQAYANAcATIAZASIBMA5IBIA1IAqAfIAeAYQA1AuAtAxQAVAYAcAjIAXAeIBPBjIAeAoQAcAkAQAdIAUAhIAIAOQALAQATAYQAMAQAKAVIAHASQAKAYALAlQASA5ATBGQAMAoAGAZIABADQAJAkAGAfQAMA+AGBQQAEA3ADA1QAEBUgEA7QgCAwgGArIgJAwQgNA4gaBFQgTAzgUArQgSAngSAdQgyBUhLBIIgHAHIgHAJQgRAXgaAVQgPAMgXAOIgNAJQhbA8hCAmQhBAmg8AcIgmAQQgYALgqAPIhEAZQgXAIgrATQglAPgfAKQgYAIgeAHIhTASQhFAOh8AVIhsATIhXAOQhPANgsAFIgHABQg6AGg6AAQgWAAglgCIgOAAIgvgBQg0AAg+AGQhEAIgwADQhOAHhPABIg4ABQhTAAhLgGg");
	this.shape_358.setTransform(1105.4703,571.8563);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AlPVsIg/gGQiQgRihgtIgNgEQgxgOhEgXIh/gpIgGgCIiMgqQg3gRgsgRIgqgRQgpgRgogWQg7gehHgvQgqgbg3goQgfgVgYgTIgpggIgMgKQgmgggcgfIgJgKQgeghgcgnQgVgggagyIgXguIgkhMIgeg7IgUgjIgTgjIgCgEQghhAgQhCIgBgDQgMgsgHg6IgDgOIgEgTIgFgdQgJgxgKgnIgDgLQgIgZgEgRIgJglIgGgoQgEgfgBgXIgBgDQgCggADgdQAFgeADgXIABgUIACgSQACgYAFgbIAFgZQAPhGAYhQIAIgYIAEgLQAGgRAIgOIAKgRIALgRIALgTIAMgVIAGgHIACgFIADgIQASgjAUgcQABgMAEgMIADgJQAHgQATgWIAcghQARgRASgNQAJgGAIgEIAJgKIAIgJQAYgaAfgbQAbgZApgfQArgjBJg2QAmgbAlgXQAcgSAZgOQBjg4BogdQAigJAkgHIA1gJIA2gKIArgJIAHgCQAdgHAUgDQA4gJBRgEQCOgJDbgEID0gDICIgBIH8gBIAMAAQBtAAA9ADIAsADQBGAGBBANQAuAKAyAPQAjAKAlANQA7AVBcAlIALAFQBGAcAqAVQAdAOAXANQAZAOAbASIAaASIBLA4IBIA2QAWAQAUAQIAdAZQA2AvArAwQAVAYAbAkIAXAeIBPBkIAeAnQAbAlAQAdIATAhIAIAOQALAPAVAYQAMAQAKAVIAIASQAJAYALAlQASA5ASBGQALAnAGAaIABAEQAJAjAGAgQALA/AGBOQAFA3ACA1QADBTgDA9QgDAvgHArQgDAZgGAXQgMA5gaBEQgTAygUAsQgSAmgSAeQgzBUhKBIIgHAGIgHAKQgQAXgbAVQgOALgYAPIgMAJQheA8hAAmQhBAmg7AbIgmARIhDAZIhDAZIhCAbQgmARgeAKQgYAIgeAHQgkAIgvAJQhEANh9AVIhsATIhXAOQhPANgsAFIgHABQg6AGg6AAQgVAAgmgDIgOAAIgvgBQg0AAg+AGQhFAIgvAEQhOAIhOACIg9AAQhQAAhKgFg");
	this.shape_359.setTransform(1110.0725,572.8909);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AlQVsQgggCgfgEQiSgRieguIgNgEQgwgOhGgYIh+gpIgGgCIiNgqQg3gRgsgRIgqgQQgogRgpgWQg7gfhHguQgpgbg4gpIg3goQgVgQgUgRIgMgJQgnghgcgeIgJgJQgfgigbgmQgVgggZgzIgWguIgkhMQgPghgOgaIgVgkIgUgiIgCgEQggg+gRhDIgBgEQgLgrgJg6IgDgPIgDgTIgFgcQgJgxgJgoIgDgLQgIgZgEgRIgIgmIgGgoIgFg1IAAgDQgCgfADgeIAGg1IACgUIACgSQACgYAGgbIAFgZQAPhFAZhQIAIgYIAEgLQAHgRAHgOIAKgRIALgSIAKgTIAMgVIAGgHIACgFIAEgHQASgjAVgcQABgMAEgMIADgJQAHgQATgWIAdghQARgQATgNIARgJIAJgKIAIgKQAXgaAegbQAcgaAogfQAsglBIg0QAlgaAmgYIA1ggQBlg3BmgdQAigKAkgHIA0gJIA2gKIArgJIAHgCQAegHAUgDQA2gKBTgEQCKgHDggEIDzgDICJgBIH7gCIANAAQBtAAA8ADIAtADQBGAGBBANQAtAJAzAPQAiALAlANQA6AUBeAlIALAFQBGAcAqAUQAdAOAYANQAZAOAaASIAaARQApAdAjAbIBHA3IApAhIAeAZQA2AxApAvQAVAYAbAlIAXAdIBOBlIAdAnQAbAlAPAeIAUAhIAHANQALAQAWAXQAMAPALAVIAIASQAJAYALAlQASA6ARBGQALAlAGAcIABAEQAIAjAGAgQALBBAGBMQAEA3ACA1QADBRgEA+QgDAvgHAsIgJAwQgNA5gYBDQgTAygVAsQgSAmgSAeQgzBVhKBHIgHAGIgGALQgQAXgbAUQgOAMgYAPIgNAIQhfA9g+AkQhCAng6AbIgnAQQgWAKgsAQIhDAZQgVAIgtAUQgmARgeAKQgXAHgeAHQgkAJgwAJQhCAMh/AWIhsASIhXAOQhPANgsAFIgHABQg7AGg5gBQgUAAgngDIgOAAIgvgCQgzAAg/AHQhGAJguAEQhOAIhOADIhAABQhOAAhJgGg");
	this.shape_360.setTransform(1114.695,573.9147);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AlRVtIg/gGQiUgSicguIgMgEQgvgOhHgZQhNgbgxgPIgGgCIiNgqQg4gRgsgQIgqgQQgogRgpgWQg8gfhGguQgpgbg4gpIg3gpIgpggIgMgKQgogigbgcIgJgJQghgigagmQgUgfgZg0IgVgvIgjhMQgPgigOgZIgWgkIgUghIgCgEQggg9gShEIgBgEQgLgqgJg7IgDgPIgEgTIgFgdQgIgwgJgpIgDgKQgHgagEgRIgHglIgGgoQgEgegBgYIAAgCQgCgfADgeIAGg2IACgUIACgSQADgYAFgaIAGgZQAPhFAahQIAJgYIAEgLQAGgRAHgOIAKgRIAKgSIAKgTIAMgWIAGgGIACgFIAEgIQATgiAWgbQABgNADgLIAEgJQAHgQAUgXQARgUAMgMQARgQATgMIASgJIAIgKIAIgKQAXgbAegbQAcgbAngfQAtgmBGgyQAmgaAmgYQAcgRAZgOQBmg5BlgcQAigKAjgHIA1gJIA2gKIArgJIAHgCQAegIAUgDQA1gKBUgDQCHgHDjgEID0gDICIAAIH8gDIAMAAQBuAAA7ADIAtADQBHAFBAANQAuAJAyAPQAjAKAlANQA5AUBeAmIAMAEQBGAcAqAUQAcANAZAOQAaANAaASIAaARQAoAcAkAcIBHA3IAoAiIAdAZQA3AyAoAvQATAYAcAmIAWAeIBOBkIAdAoQAaAlAPAeIATAiIAIAMQALAPAWAXQANAPALAVIAIASQAKAYALAlQARA7ARBFQAJAlAGAdIABADQAIAjAGAgQALBDAFBKQAFA3ABA1QADBQgFBAQgDAugHAsIgJAwQgNA6gYBBQgTAzgVAsQgSAlgSAfQg0BVhJBGIgHAHIgGAKQgPAYgbAUQgOAMgYAOIgNAJQhhA9g9AjQhCAng6AbIgmARQgWAJgtAQIhDAZQgTAHguAWQgnARgdAKQgXAIgeAHQgkAIgvAJQhBAMiBAVIhsASIhXAOQhPANgsAFIgHABQg8AGg3gBIg8gEIgOAAIgvgDQgzAAg/AIQhIAKgsAEQhOAJhOADIhKABQhIAAhFgFg");
	this.shape_361.setTransform(1119.2915,574.9381);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AlSVtQgggCgggEQiVgSiZgvIgNgEQgtgOhJgaQhNgbgwgQIgHgCIiOgqQg4gQgrgQIgqgQQgpgRgpgVQg8gghFguQgpgag4gqIg3gpIgqghIgMgJQgpgjgagaIgKgJQghgjgZglQgVgfgYg1IgUgvIgihNQgPgigOgYIgWgkIgUghIgCgEQghg6gThHIgBgEQgKgogKg9IgDgPIgDgTIgGgcQgIgvgJgqIgCgLIgKgrIgHgmIgGgoQgDgdgBgYIAAgCQgCgfADgeIAGg2IACgUIACgSQADgYAGgaIAFgZQAQhFAbhPIAJgYIADgLIAOgfIAJgSIAKgSIAKgTIAMgVIAGgHIACgFIAEgHQAUgiAXgbQAAgNAEgLIADgKQAHgPAUgXQATgVALgKQASgQATgMQAKgGAJgDIAHgKIAIgJQAXgcAdgcQAcgbAmgfQAvgoBEgwQAmgaAmgXQAcgRAagPQBng4BjgdQAjgKAigHIA2gIQAfgFAWgFIArgKIAHgCQAfgIATgEQAzgJBXgDQCCgGDogEID0gDICIAAIH7gDIANAAQBugBA7ADIAtADQBIAFA/ANQAtAJAzAOIBIAXQA4AUBfAmIAMAEQBHAcApATQAdANAYAOQAbAOAaAQIAaARQAnAbAlAdIBGA4IApAiIAcAaQA3A0AmAuQAUAXAbAnIAWAeIBNBmIAdAnQAZAlAPAfIATAhIAHANQALAOAYAXQAOAPALAVIAIASQAJAXALAmQARA7AQBFQAJAjAGAfIABADQAIAjAFAhQALBDAGBJQAEA3ABA1QACBPgFBAQgEAvgHArIgJAwQgNA8gXBAQgTAxgVAtQgSAlgTAfQg0BWhIBFIgHAHIgGALQgPAYgbAUQgOALgYAPIgNAIQhjA+g6AiQhDAng6AbIgmAQIhDAZIhDAZIhBAeQgnASgcAKQgXAIgeAHQgkAIgvAJQhAALiCAVIhsASIhXAOQhQANgrAEIgIABQg8AGg3gBQgTgBgpgDIgNgBIgvgDQgyAAhBAIQhIALgrAFQhOAKhOADQgoABgnAAQhFAAhDgFg");
	this.shape_362.setTransform(1123.9235,575.9774);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AlTVtQgggCgfgEQiXgSiYgwIgNgEQgrgOhKgbQhOgcgwgQIgGgCIiOgpQg5gQgrgQIgqgQQgpgQgpgWQg9gfhEguQgogbg4gqQgcgUgcgVIgqghIgMgKQgrgjgZgYIgJgKQgigigZglQgUgfgYg1IgUgwQgRgtgPghQgPgigOgYIgXgjIgUghIgCgDQgig5gThJIgBgDQgKgogLg+IgDgOIgDgTIgFgdQgIgugJgrIgCgLIgJgsIgHglIgFgoQgDgdgBgZIAAgBQgBgeACgfIAGg2IACgUIADgRQADgZAGgaIAFgYQARhFAbhQIAJgYIAEgLIANgeIAJgSIAJgTIALgTIAMgVIAFgIIACgEIAEgHQAVghAYgbQAAgNAEgMIADgJQAGgPAWgXQATgVALgKQASgQAUgLQAKgGAIgCIAIgKIAIgKQAXgcAcgcQAcgdAlgeQAxgpBCgvQAlgZAngYQAcgRAagOQBpg5BhgcQAjgKAigHIA2gJQAggFAVgFIArgKIAHgCQAfgJATgDQAygKBXgCQCAgFDsgEID0gDICIgBIH7gDIAMAAQBvAAA7ACIAsADQBJAFA+AMQAuAJAzAPQAiAKAlAMQA3ATBhAmIALAFQBIAcApATQAdANAYANQAcAOAZAPIAaARQAnAaAlAeQAhAZAlAgIApAjIAcAaQA3A1AlAuQASAXAcAnIAWAfQAZAjAzBDIAcAnQAZAlAPAfIASAiIAIANQALANAZAWQAOAPALAVIAIASQAKAXAKAmQARA7APBFIAPBDIABADIAMBEQALBFAFBGQAEA4ABA0QACBOgGBCQgEAugHAsIgJAvQgOA+gWA+QgSAxgWAtQgSAkgTAgQg0BWhIBFIgHAHIgGALQgOAYgbAVQgNAKgaAPIgNAIQhlA/g4AhQhDAng5AbIgmAQIhDAZIhDAZIhBAeQgnATgcAKQgWAIgfAHQgjAIgwAIIjDAgIhrASIhXAOQhQAMgrAFIgIABQg9AGg2gCQgSgBgqgEIgNAAIgvgDQgygBhBAJQhKALgpAFQhOALhOAEQgpACgoAAQhDAAhDgGg");
	this.shape_363.setTransform(1128.5339,577.0134);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AlUVuQgggCgggEQiZgTiVgwIgMgEQgrgOhLgcQhPgdgugQIgHgCIiPgpQg4gQgrgPIgqgQQgpgQgqgWQg9gghDgtQgogag5grIg3gqIgqghIgMgJQgsgkgZgXIgKgJQgjgkgXgjQgUgfgXg3IgTgwQgRgtgPghQgPgjgOgXIgXgjIgVggIgCgEQghg3gUhKIgBgEQgKgmgMg/IgDgOIgDgUIgFgcIgQhaIgCgLIgIgrIgGgmIgGgoIgDg1IAAgBQgBgeACgfIAFg2IADgUIACgSIAKgyIAGgZQAQhEAdhPIAJgYIAEgLIANgfIAIgSIAJgTIAKgTIAMgWIAGgHIACgEIAEgHQAWghAZgbQgBgMAEgMIADgKQAHgOAWgYQATgVALgJQATgQAUgLQAKgFAJgCIAHgKIAIgKQAWgdAcgcQAdgdAjgfQAygrBBgsQAlgZAogYIA2gfQBqg5BfgcQAjgLAigGIA2gJQAggFAVgFIArgKIAHgCQAggJASgEQAxgKBZgCQB7gEDxgDID0gDICIgBIH7gEIAMAAQBvgBA6ADIAtADQBJAFA+ALQAtAJA0AOIBHAXQA2ATBiAmIAMAEQBIAcAoASIA2AaQAcAOAZAPIAaARQAmAZAnAeQAhAaAkAgIAoAkIAcAaQA3A3AjAtQATAXAbAoIAWAfQAZAjAzBEIAbAnQAZAlAOAgIASAhIAHANQALANAaAWQAPAOAMAVIAIASQAJAXALAmQAQA8APBEIAOBDIABADIALBEQALBHAFBFQAEA3ABA1QABBMgGBDQgEAugIAsIgJAvQgOA/gVA9QgSAwgWAuQgSAkgUAgQg0BXhHBEIgIAHQgCAGgDAFQgNAYgcAVQgNAKgZAPIgOAIQhmA/g3AgQhEAog4AaIgmAQIhDAZQgqAPgZAKQgQAHgxAYQgnATgbAKQgWAIgfAHQgjAIgwAJIjDAfIhrARIhYAOQhPANgrAEIgIABQg+AGg1gCIg8gFIgOgBIgvgEQgxgBhCAKIhyASQhOALhOAEQgsACgsAAQhAAAg/gFg");
	this.shape_364.setTransform(1133.165,578.0245);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AlVVuQi8gPixg7QgpgNhagiQhUgggvgPIiPgpQhYgZg2gVQhkgohvhLQhGgvh8hiQg3grgbgZQgqgogagnQgcgrghhcQgihfgZgpIgYgjIgXgjQgig2gUhLQgNgvgQhcIgVh3IgPhcQgHg0gBgqQgDhfAZhsQAUhYAphsQAghTAfgwQAYgkAdgeQgBgSAHgQQAGgOAXgYQAUgVALgJQATgPAVgLQAKgFAJgCIAOgUQBoiHDJh2QCzhrCRgbIA2gIQAhgFAUgFIAygNQAggKASgDQAvgKBbgCQCtgFGzgEIKDgFQB5gBA9ACQBkAEBPAPQBNAOBcAfQA4ATBrAqQBJAcAoASQA9AaAuAcQBgA4B0BuQBLBJAqA3QAXAfArBAQAZAjAzBEQArA8AWAwQARAkAIAKQALANAbAVQAVAVAOAgQAKAXAKAnQAYBZATBqQA3E5gpDuQgZCPg7B6QhACChhBdIgIAHIgFALQgMAZgcAUQgQANgkAUIidBfQhdA2hGAcIhDAZQgqAPgYAKIhBAfQgoAUgaAKQguARhaAOIjDAfIjDAfQhPAMgrAFQhEAHg3gDIg8gGQgngEgWgBQgwgBhDAKIhyATQh5ATh7AAQg/AAhAgFg");
	this.shape_365.setTransform(1137.7592,579.0664);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AlSVuQicgNiSgoQgggJgfgKQgqgOhZghQhTgfgwgQIiPgpIgrgNQg6gRgpgRQhkgohvhKQg7gnhdhIIgrghIgnggQgagUgQgPIghghQgVgXgPgXQgMgTgNgbQgSglgTg0IgHgTQgehPgXglIgYgjIgBgCIgWghQghg0gThGIgCgHQgOgvgPhcIgFgdIgQhZIgOhdQgHgwgBgmIAAgHQgDhgAYhrIAQg+QAJggAMgkIAYhCIABgBQAMghAMgbQAOgiAPgZIAHgMQAQgYATgWIASgUQgBgRAIgQIAHgMQAIgLAOgPIAfgfQATgPAUgLIAEgCQAHgEAHgCIAPgUQAcglAjgjQBXhXCDhRIAXgOQCyhqCRgdIA2gJQAggFAVgGIAygNIAxgNIAUgDQAtgHBJgCQB6gED1gDIDlgCIANAAIDsgBIDygDIClgBIBVgBQA7ABAlACQBkAEBQAPQBNAOBbAfQApANA/AZIA8AWQBIAcApASQA8AaAvAcIAEACQAyAeA4AsQAyApAzAxQAsAqAjAlQAWAZASAWIAfArIAjAzIANASIAvBCIAPAUQAeApAUAlIAQAeQARAjAIALQAIAJAOAMIAQANQAUAVAPAgQAKAXAKAnQAZBZAUBqQAXCAAHBzQAJCngXCNQgJAzgNAwQgYBXgmBOQgbA4ghAxQgtBCg3A1IgHAHIgFALQgNAZgcAUQgQANgiAUIgCABIhrBAIgyAeIg8AiQg4AegvASIhDAZQgqAPgYAKIhBAgQgnATgaAKQgwARhYAPQg+ALiFAVIjCAfIhGAKIg1AHQhDAHg4gCIg8gFIg9gFQgxgBhCAKIhyASQhHALhJAFQgwADgvAAQhCAAhCgGg");
	this.shape_366.setTransform(1142.5201,579.9613);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AlPVuQicgMiSgoIg/gTQgsgNhXghQhSgegxgQIiPgqIgrgNQg5gRgpgRQhlgphvhJQg7gnhdhHIgrggIgoggQgagVgQgOQgSgRgPgQQgVgXgPgYQgMgSgNgbQgSgmgTgyIgIgTQgfhOgXgmIgYgiIgBgDIgWghQghg0gUhFIgCgHQgNgwgQhbIgEgdIgQhZQgKg/gEgeQgGgwgCgmIAAgHQgDhhAYhpQAHgfAJggQAJgfAMglIAYhCIABgBQAMgiALgaQAOgjAPgZIAHgLQAPgZATgWIASgUQAAgRAIgQIAHgLIAWgbQATgUAMgKQASgQAUgMIAEgCIAOgGIAPgUQAcglAigjQBWhXCEhSIAXgOQCwhqCSgfIA2gJQAggGAVgFIAxgNQAggJASgEIATgEQAugHBIgCQB9gFDygCQBdgBCJAAIAMAAIDtgCIDxgDIClgBIBWAAQA6AAAmACQBjAFBRAOQBNAPBbAfQApANA/AYIA8AXQBIAbAoASQA9AbAvAbIADACQAyAeA4AtQA0ApAyAvQArApAkAmQAXAYARAWQAOARASAaIAjAzIANASIAvBCIAPAUQAdApAVAkIAQAfQARAjAIALQAIAJAOAMIAPANQAVAVAOAgQALAXAKAmQAaBaAUBpQAYB/AHB1QAKCmgXCNQgIAzgNAwQgYBXglBPQgbA4ghAxQgsBCg3A1IgIAHIgFALQgNAZgbAUQgRANgiAUIgCABIhqBBIgzAeIg8AhQg4AegvATIhCAZQgqAPgZAKIhAAfQgnATgbAKQgxAShXAPQg/AMiDAVIjCAfIhGALIg1AHQhDAHg4gCQgSgBgqgEQgmgDgXgBQgxAAhBAJIhzARQhHALhJAEQgvACgvAAQhDAAhCgFg");
	this.shape_367.setTransform(1147.2845,580.8616);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AlMVuQidgMiRgnQgggIgggKQgsgOhWgfQhRgegzgQIiNgrIgrgNQg6gSgpgRQhkgphwhIQg8gnhdhGIgqggIgogfIgrgkIghggQgUgXgQgYQgMgSgNgbQgUgmgSgxIgIgTQgghOgXglIgYgjIgBgCIgXghQggg1gUhFIgCgHQgNgvgQhcIgFgcIgOhaQgLg+gEgfQgGgwgBgmIAAgGQgEhhAYhpQAGgfAKggQAIgeANgmIAXhCIABgBQAMgjALgaQAOgiAOgZIAHgMQAPgYATgXIATgUQAAgQAIgQIAHgMIAWgaQASgUAMgLQASgQAUgMIAEgDIAOgGIAOgUQAdgmAhgiQBWhXCEhTIAXgNQCvhqCTghIA0gKQAggGAVgFIAygNQAfgJASgEIATgEQAvgIBIgCQB+gGDwgBQBXgBCPAAIANAAIDrgBIDygDICmgCIBVAAQA6AAAnADQBiAEBRAPQBOAPBbAeQApAOA/AXIA8AXQBHAbApASQA8AbAvAcIAEABQAxAeA4AtQA2ArAwAtQAqAnAmAmQAYAYARAWQAOARASAaIAjAzIANARIAuBDIAPAUQAdAoAVAlIAQAeQARAjAKALQAIAKAMALIAQAOQAUAWAPAfQAKAYALAlQAbBZAVBpQAYB/AIB1QAKCmgWCNQgJAzgNAxQgWBXgmBPQgaA3giAyQgrBCg3A1IgIAHQgBAGgEAFQgOAZgbAUQgQANghAUIgDABIhqBBIgzAeIg9AhQg3AegvATIhCAZQgpAPgZALIhBAeQgmATgcALQgxAShWAPQhBANiBAVIjCAgIhFAKIg2AHQhCAHg5gBQgTgBgpgDQglgDgYgBQgxAAhBAJQhJALgrAFQhGAKhJAEQgtACgtAAQhFAAhEgFg");
	this.shape_368.setTransform(1152.0497,581.7705);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AlJVuQiegMiQgmQgggIgggKQgugNhUgfQhRgdgzgRIiOgqIgqgOQg5gSgqgRQhlgqhuhHQg/gohbhEIgrggIgogfQgagUgRgPQgSgQgPgRQgUgWgQgYQgNgTgNgaQgTgngTgvIgIgUQghhMgYgmIgXgiIgCgDIgWghQghg2gUhDIgCgHQgNgwgPhbIgFgdIgPhZIgOhdQgGgwgBgmIAAgFQgDhjAWhoIAQg/QAIgdANgnIAYhCIAAgCQAMgiALgaQANgjAOgZIAHgMQAPgYATgXIASgTQABgRAIgQIAHgLQAIgLAOgQIAegfQASgQATgNIAEgCQAHgFAHgCIAPgUQAcgmAhgiQBVhXCFhTIAWgOQCvhqCSgiQAMgEApgHQAfgGAWgGIAxgNQAegJATgEIATgDQAvgIBIgDQB/gHDvgBQBSgBCUACIAMAAQB8AABwgBQBrgBCIgDIClgCIBVAAQA5ABAoACQBiAFBRAPQBOAPBbAeQAqANA+AXIA8AXQBGAbArASQA8AbAvAcIADACQAxAdA5AtQA3AsAvArIBQBNQAYAYASAVQAOASASAYIAjAzIAMASIAvBCIAOAVQAdAnAWAmIAQAeQASAiAJAMQAIAJAMAMIAPAOQAUAWAPAgQALAXALAlQAbBZAWBpQAYB9AJB2QALCngWCNQgIAzgNAwQgXBXglBPQgaA4ghAyQgsBCg2A2IgHAGIgGALQgOAYgbAVQgRAOggATIgCABQg7AmgwAcIg0AdIg8AhQg4AeguATIhCAaIhDAZIhAAfQgmATgcAKQgyAShVAQQhCAOh/AVQhgARhiAPIhGAKIg2AHQhCAIg4gBIg8gEIg9gDQgyAAhAAJQhJAKgrAFQhHAKhIADQgtACgtAAQhFAAhEgFg");
	this.shape_369.setTransform(1156.8297,582.683);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AlGVuQifgMiPglIhAgSQgvgNhTgeQhQgcg0gRIiNgsIgrgNQg4gSgqgSQhlgqhvhHQhAgnhbhDIgrggIgogfQgZgUgRgPIgiggQgUgXgQgYQgNgSgNgbQgUgngTguIgIgTQgihMgYgmIgXgiIgCgDIgWghQghg3gUhCIgCgHQgOgwgPhbIgEgdIgPhZIgNhdQgGgwgCgmIAAgFQgDhjAXhnQAGgfAJggIAVhEIAXhDIABgBQAMgkAKgZQANgjAOgZIAGgMQAPgYATgXIASgUQACgQAIgQIAHgLIAWgbIAegfQARgRATgNIAEgDQAHgEAHgDQAGgKAIgKQAdgmAhgiQBUhXCFhUIAWgNQCuhqCTgkQAMgEAogHIA1gMIAxgOIAxgNIATgDQAvgJBHgDQCBgHDsAAQBNgBCbABIAMAAQB8ABBwgBQBngBCMgDICkgCIBWAAQA4AAAoADQBiAFBSAQQBOAPBbAdQArAOA9AWIA8AXQBGAaAqATQA9AbAuAcIAEABQAwAdA5AuQA5AtAtApIBSBMQAXAXASAWQAPARASAZQAQAVATAeIAMARIAuBDIAPAUQAcAnAXAnIAQAdQASAiAJAMQAIAKAMALIAPAPQAUAWAPAfQALAYALAkQAcBZAWBoQAZB9AJB3QAMCmgVCOQgIAzgNAwQgWBXglBQQgaA3ghAyQgsBDg2A1IgHAHIgFALQgPAYgaAUQgSAOggAUIgCABQg6AlgxAdIg0AdIg8AhQg4AdguAUQgWAJgsARQgpAPgZALIhAAeQgmASgdALQgzAShTAQQhEAPh9AVQhgARhiAQIhGAKIg1AHQhCAIg5gBQgVAAgngDQgkgCgZAAQgyAAhAAIQhHAKgtAFQhGAJhJADQgrACgqAAQhIAAhGgFg");
	this.shape_370.setTransform(1161.5973,583.6051);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AlDVuQiggMiPgjIg/gSQgxgNhSgdIiDgtIiOgsIgqgOQg3gSgrgSQhmgqhuhGQhBgohahBIgrggIgpgfQgZgTgRgPQgTgRgPgQQgUgWgRgYQgMgTgOgaQgUgogTgtIgJgTQgihLgZgmIgWgiIgCgDIgWgiQgig3gUhBIgCgHQgNgwgPhbIgFgdIgOhZQgKg8gDghQgGgwgCglIAAgFQgDhkAWhnQAHgfAIgfQAIgdAOgoIAXhDIAAgBQAMgkAJgZQANgjAOgZIAGgMQAPgYATgXIASgUQACgQAJgQIAHgLIAVgbIAeggQARgQATgOIAEgDIANgIIAPgUQAdgmAfghQBUhYCGhUIAVgNQCthqCTgmQAOgEAmgIQAfgGAWgGIAxgOQAdgIAUgEIATgEQAwgJBGgDQCDgIDqAAQBIgBCgACIAMAAQB9ACBugBQBkgBCQgEICkgDIBWAAQA3ABAqADQBgAFBTAQQBPAPBaAdQArAOA9AWIA8AWQBFAaAsAUQA8AbAvAbIADACQAvAdA6AtQA7AuArAoIBTBLQAYAXASAWQAPARARAYIAjAzIAMARIAuBDIAPAUQAbAnAYAnIAQAdQASAiAKAMQAIAKAMAMIAOAOQAUAXAPAfQALAYAMAjQAdBZAWBoQAaB8AJB4QANCmgVCNQgIA0gNAwQgWBXgkBQQgaA4ghAxQgrBDg2A2IgHAHIgGALQgPAXgaAVQgSAOgfAUIgCABQg5AlgyAdIg0AdIg9AhQg3AdgvAUIhBAaQgpAPgaALIg/AeQgmASgdAKQg0AThSARQhGAPh7AWQhfARhiAQIhGAKIg2AHQhBAIg6gBQgVABgmgDQgkgCgZAAQgzABg/AHIh0APQhHAIhJADQgpABgpAAQhJAAhHgFg");
	this.shape_371.setTransform(1166.3652,584.4935);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AlAVuQiggMiPgjIg/gRQgygNhRgcIiDgtIiNgsIgrgOQg2gSgsgTQhlgrhvhFQhCgohahAIgrgfIgogfQgagTgRgPQgSgRgQgQQgUgWgRgYQgMgTgOgaQgVgogTgsIgJgTQgjhKgZgmIgWgiIgCgDIgWgiQgig4gUhAIgCgHQgOgwgOhbIgFgdIgOhZQgJg7gEgiQgGgwgBglIAAgFQgDhlAVhlQAHgfAIggIAWhEIAWhEIABgBQALgkAJgZQANgjANgZIAHgMQAOgYATgXIASgVQACgPAKgQIAHgLIAVgbIAeggQAQgRATgOIAEgDIANgIIAOgUQAegnAfghQBThXCGhVIAVgOQCshpCUgoQAOgFAlgHQAfgHAWgGIAwgOIAxgMIATgEQAxgJBFgEQCFgJDoABQBCgBCnADIALAAQB/ACBsgBQBhgBCTgFIClgCIBVAAQA3ABAqADQBgAFBUAQQBPAQBaAcQAsAOA8AWIA8AWQBFAaArAUQA9AaAuAcIADACQAvAcA7AuQA8AvAqAmIBTBKQAYAXATAWQAPARARAXQAQAWATAdIAMARIAuBEIAOAUQAbAmAZAnIAQAeQASAgAKANQAIALAMALIAOAPQAUAWAOAfQAMAZAMAjQAeBZAXBnQAaB7AKB4QANCngVCNQgHA0gNAwQgVBXglBQQgZA4ghAyQgrBDg1A2IgHAHIgGAKQgQAYgZAUQgTAPgfAUIgCABQg4AkgzAeIg0AdIg9AhQg3AcgvAUQgXALgqAQQgoAPgaALIhAAeQglARgeALQg1AThRARQhHARh5AVQhfAShiAPIhGALIg2AHQhBAIg6AAQgVAAgmgCIg9gBQgzAAg/AIQhFAJgvAEQhHAIhJADIhMABQhMAAhKgFg");
	this.shape_372.setTransform(1171.1339,585.4042);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("Ak+VuQiggMiOgiIhAgQQgzgOhPgbIiEgsIiNgtIgqgOQg2gTgsgSQhmgrhuhFQhDgohZg/IgsgfIgogeIgrgjQgSgQgQgQQgUgWgRgYQgNgTgOgaQgWgogTgrIgIgTQgkhJgZgnIgXgiIgCgDIgWgiQgig4gThAIgCgHQgPgwgOhaIgFgdIgNhZQgJg7gEgiQgGgwgBgmIAAgEQgDhlAVhlQAGgfAJggQAHgbAOgpIAXhEIAAgBQALglAJgYQAMgkANgZIAHgLQAOgYATgYIASgVQADgPAJgPIAHgLIAVgbIAeghQAQgRASgPIAEgDQAGgFAHgDIAOgUQAegoAfggQBThXCFhWIAWgNQCqhqCVgqQAOgEAlgIIA0gNIAxgOQAcgIAUgFIATgDQAxgKBFgEQCHgJDlABQA+gBCsAEIALAAQCAACBrgBQBdgBCXgFQBXgDBOAAQAvgBAmABQA3ABAqADQBgAGBUAQQBPAQBaAcQAtAOA7AVIA8AWQBEAaAtAUQA8AaAuAcIADACQAvAcA7AuQA+AxAoAkIBUBJQAYAWATAWQAQARARAXQAQAVATAeIAMARIAtBEIAOAUQAbAmAZAnIARAdQASAgAKAOQAIALALALIAOAPQAUAXAPAeQALAZAMAjQAfBYAYBnQAaB7ALB5QANCmgUCOQgHAzgMAwQgVBYglBQQgZA3ggAzQgrBDg2A2IgGAHIgGAKQgQAYgaAUQgTAPgeAUIgCABQg4AkgzAeIg1AdIg8AhQg4AcguAUQgZALgpAQIhBAbIhAAdQglARgeALQg2AUhQARQhIARh3AWQhfAShiAQIhGAKIg2AIQhBAHg6ABQgWAAglgBQgkgCgaABQgzABg+AGQhFAJgwAEQhGAHhJADIhNABQhMAAhKgFg");
	this.shape_373.setTransform(1175.9033,586.3083);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("Ak7VuQihgMiNghQgggHgggJQg0gNhOgbIiEgsIiMgtIgqgOQg2gTgsgTQhmgrhvhEQhEgohZg+IgrgeIgpgeQgZgTgSgQQgSgQgQgQQgTgWgSgYQgNgTgOgaQgWgpgTgpIgJgTQglhIgZgoIgXghIgCgEIgWghQgjg5gTg/IgCgHQgOgxgOhaIgFgcIgNhaIgNhdQgFgwgCglIAAgEQgDhmAVhkQAGgfAJggQAHgaAOgqIAWhEIABgBQALgmAIgYQAMgjANgZIAGgMQAOgYATgYIASgVQADgOAKgQIAHgLIAVgbIAdghQAQgRASgPIAEgDQAGgGAGgDIAPgUQAegoAeggQBShXCGhWIAWgOQCphpCVgsQAPgFAkgIIA0gOIAwgNIAxgNIATgEQAxgJBEgFQCJgKDjABQA4AACzAEIALAAQCAADBqgBQBZgBCcgGQBXgDBNAAQAwgBAmABQA2ABArAEQBfAGBVAQQBPAQBaAbQAtAOA7AVIA8AWQBDAaAuAUQA8AbAuAcIADABQAuAcA7AuQBAAyAmAiIBVBIQAZAXATAVQAQARARAXQAQAVATAdIAMASIAsBEIAPAUQAaAlAZAoIASAdQASAgAKANQAJAMAKAKIAOAQQATAXAPAeQAMAZAMAiQAgBZAYBnQAbB5ALB6QAOCmgTCOQgHAzgMAxQgVBXgkBQQgZA4ggAzQgrBDg1A2IgHAHIgGAKQgQAYgaAUQgTAQgeATIgCABQg2Akg1AfIg1AdIg8AgQg4AcguAVIhBAbIhCAaIg/AdQglARgfAMQg3AUhOARQhKASh1AWQhfAShiAQIhGALIg2AHQhAAIg7ABIg7gBIg+AAQgzABg+AGQhEAIgxAEQhGAHhJACIhGABQhQAAhNgFg");
	this.shape_374.setTransform(1180.6734,587.2199);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("Ak4VuQiigLiMggIhAgQQg2gOhNgZIiEgsIiMguIgqgOQg1gTgsgTQhngshuhDQhFgohYg9IgsgeIgpgeQgZgSgSgQQgSgQgQgRQgUgVgRgZQgOgSgNgZQgYgrgTgoIgJgSQglhIgagnIgWgiIgDgDIgVgiQgjg6gTg+IgCgGQgPgxgOhaIgEgdIgOhZQgIg5gEgkQgFgwgBglIAAgDQgEhoAUhiQAGggAJgfIAVhGIAXhDIAAgCIATg9QALgkANgZIAGgMQAOgYATgYIARgUQAEgPAKgPIAHgLIAWgbIAdgiIAhghIADgDIANgKIAOgUQAegoAegfQBShXCGhXIAVgOQCohpCWgtQAQgGAigIIA0gOIAwgOQAcgIAVgEIASgEQAygKBEgFQCLgLDhACQAzgBC4AGIAKAAQCCADBpgCQBWgBCfgGQBYgCBMgBIBWAAQA1ACAsADQBeAGBWARQBQAPBZAcQAuAOA6AVIA8AVQBDAZAuAVQA8AbAuAcIADABQAuAcA7AvQBCAyAlAgIBVBIQAZAWATAVQARASARAVQAQAWATAdIALARIAtBEIAOAVIA0BNIARAdQATAfAKAOIATAWIANAPQATAYAPAfQANAZAMAhQAhBZAYBmQAcB5AMB6QAOCmgTCOQgHA0gMAwQgUBYgkBQQgZA4ggAyQgqBEg1A3IgGAGIgHAKQgRAXgZAVQgUAQgdATIgCABQg2Alg1AeIg1AdIg9AgQg3AdguAUQgbAMgnAPIhBAbIg/AdQglARgfALQg4AUhNASQhMAThyAWQhfAThiAPIhHALIg2AHQhAAIg7ACQgXABgkgBIg9AAQg0ABg9AGQhDAIgyADQhHAHhJABIhFABQhQAAhNgFg");
	this.shape_375.setTransform(1185.4877,588.1325);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("Ak1VuQijgLiMgfIg/gQQg3gNhMgZIiEgrIiMguIgqgPQg0gTgtgTQhngthuhCQhHgphXg7IgsgdIgpgeQgZgSgSgQQgTgRgPgQQgUgVgSgZQgNgTgOgYQgYgrgTgnIgKgTQglhGgbgoIgWgiIgCgDIgWgiQgjg6gTg9IgCgHQgPgxgNhaIgFgcIgNhZQgIg6gEgjQgFgxgBgkIAAgDQgEhoAUhiQAGggAIgfIAWhGIAWhDIAAgCIASg+QALgkANgZIAGgLQANgYAUgZIARgUQAEgPALgPIAHgLIAVgaIAdgjIAhgiIADgDIAMgKIAPgUQAegoAdgfQBRhXCHhYIAVgNQCnhpCVgwQASgGAggIQAdgHAYgIIAvgNIAxgNIASgEQAzgJBDgGQCMgMDfADQAugBC+AGIAKAAQCDAEBogCQBSgBCjgGQBYgDBMgBIBWAAQA1ACAsADQBdAHBXARQBRAPBYAcQAvAOA5AUIA8AVQBDAZAuAVQA8AbAvAcIACACQAtAbA8AvQBDAzAkAfQAkAfAyAoQAZAWAUAUQARASAQAVQAQAVATAdIAMASIAsBEIAOAVIA0BNIASAcQASAfALAPIASAWIAOAPQASAZAPAeQANAZAMAhQAiBYAZBnQAdB4AMB6QAPCngTCOQgHAzgLAwQgVBZgjBPQgZA5ggAyQgqBEg0A3IgGAGIgHAKQgSAXgYAVQgUARgdATIgCABQg1Akg3AfIg0AdIg+AgQg2AcgvAUIhBAbIhCAcIg+AcQglARgfALQg5AVhMASQhOAUhwAWQheAThiAQIhHALIg2AHQhAAHg7ADQgYABgjgBIg9ABQg1ABg9AGQhBAHgzADQhHAGhKACIg8AAQhVAAhQgFg");
	this.shape_376.setTransform(1190.2592,589.0454);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AkyVuQikgLiKgeQgggHgggIQg5gOhKgYIiFgrIiLguIgpgPQg0gTgtgUQhogthuhBQhIgphWg6IgsgdIgqgdIgrgjQgSgQgQgRQgTgUgSgZQgOgTgOgYQgZgsgTglIgKgTQgmhFgbgpIgWghIgCgEQgNgTgJgPQgkg6gSg9IgCgHQgPgxgOhZIgEgcIgNhaQgIg4gEglQgFgxgBgkIAAgCQgDhpAThhQAGggAIgfQAHgYAPguIAWhDIAAgCIASg+QAKgkAMgZIAGgMQANgYAUgZIARgUQAFgOAKgPIAIgLIAVgbIAcgiIAhgjIADgDIALgLIAPgUQAfgpAcgfQBRhWCHhYIAVgOQCmhpCWgxQASgHAfgIIA1gPIAvgNQAbgIAVgFIATgEQAzgKBCgGQCOgNDdADQApAADEAHIAKAAQCEADBngBQBNgBCogHQBZgDBLgBQAvAAAmABQA1ABAtAEQBcAHBYARQBRAPBYAbQAvAOA5AUIA8AWQBCAYAvAVQA8AbAuAcIACACQAuAbA8AvQBEA1AiAcIBXBGQAaAWATAUQASASAQAVQAQAVATAdIAMASIArBEIAOAVIA0BNIATAcQASAeALAPIASAXIANAPQATAZAPAeQANAZAMAhQAjBXAZBnQAeB3AMB8QAQClgSCPQgHAzgLAxQgUBYgjBQQgZA4ggAzQgqBEg0A3IgGAGIgHAKQgSAXgYAUQgUASgdATIgCABQg0Akg3AfIg1AdIg+AgQg2AcgvAUIhBAcIhBAbIg/AcQgkARggALQg6AVhLATQhPAUhtAWQhfAUhiAQIhHALIg2AHQg/AIg8ADIg7ABIg9ABQg1ACg8AFQhBAGg0ADQhHAGhKABIg9AAQhUAAhQgFg");
	this.shape_377.setTransform(1195.0314,589.9496);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AkwVuQikgLiKgeIhAgOQg5gOhKgXIiEgqIiLgwIgpgPQg0gTgtgUQhogthuhAQhJgphWg5IgsgdIgqgdQgYgSgTgRQgSgQgQgQQgTgVgTgZQgOgSgOgZQgZgsgTgkIgKgSQgohFgagpIgWghIgDgEIgVgiQgkg7gTg8IgCgGQgPgygNhZIgFgcIgMhaIgMhdQgFgwgBglIAAgCQgDhpAShgQAGggAJggIAVhFIAWhEIAAgCIARg+QAKgkAMgZIAGgMQANgYAUgZIARgVQAFgNALgPIAHgLIAVgbIAcgjIAggjIADgEIAMgKIAOgUQAfgqAcgeQBQhXCHhZIAVgNQClhpCXgzQASgHAfgIIA0gQIAvgNIAwgNIATgEQAzgKBCgGQCQgODbAEQAjgBDKAIIAKAAQCFAEBlgCQBLgBCrgHQBZgEBLAAQAvgBAmABQA0ACAuAEQBcAHBYARQBRAQBYAaQAwAPA4ATIA8AVQBCAZAvAVQA8AbAuAcIACABQAtAcA9AvQBGA2AgAaIBYBFQAaAWAUAUQARASARAUQAQAVATAdIALASIArBFIAOAUIA1BNIASAcQATAeALAPIASAXIANAQQASAZAPAdQANAaANAgQAkBYAZBmQAeB2ANB8QAQCmgRCPQgHAzgLAxQgTBYgjBQQgZA4gfA0QgqBDg0A4IgGAGIgHAKQgSAXgYAUQgVASgcATIgCABQgzAjg5AgIg1AdIg9AgQg3AbguAVQgdANgkAPIhBAcIg/AbQgkAQggAMQg7AWhKASQhQAWhsAWQheAUhiAQIhHALIg3AHQg+AIg9ADIg6ACIg+ABQg1ACg8AFQg/AGg2ADQhHAFhJABIg0AAQhZAAhVgFg");
	this.shape_378.setTransform(1199.8042,590.8639);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AksVuQilgLiKgcIhAgPQg7gNhIgWIiEgrQg4gShTgdIgpgQQgzgTgugUQhoguhug/QhKgqhVg3IgsgdQgZgQgRgNQgYgRgTgRQgTgQgQgQQgTgVgTgZQgOgTgOgYIgthPIgKgTQgohEgbgoIgWgiIgDgDIgVgjQglg8gSg6IgCgHQgPgxgNhaIgFgcIgMhZQgIg3gDgmQgFgxgBgkIAAgCQgEhqAShfQAGggAJgfQAGgXAPgvIAWhEIAAgCIAQg/QAKgkAMgZIAGgLQAMgYAUgaIARgVQAGgNALgPIAHgLIAVgaIAcgkIAfgkIADgDIALgMIAPgUQAfgpAbgeQBQhXCHhZIAVgOQCkhoCXg2QATgHAegIIA0gQIAvgOIAwgMIASgEQA0gLBCgGQCRgPDZAEQAeAADPAIIAKAAQCGAFBkgCQBHgBCvgIQBagEBKAAQAwgBAmABQAzACAvAEQBbAHBZASQBRAQBYAaQAwAOA4ATIA8AVQBBAYAwAWQA8AbAuAcIACACQAsAbA9AvQBIA3AfAZQAiAbA3ApQAaAVAUAUQASASAQAUQAQAVATAdIALARIArBGIAOAUIA0BNIATAcQATAdAMAQIARAXIAMAQQASAZAQAdQANAbANAfQAlBYAaBlQAeB2AOB9QAQCmgRCOQgGA0gLAwQgTBZgjBQQgYA4gfAzQgqBEg0A4IgFAGIgIAKQgSAXgYAUQgVASgbATIgCABQgzAjg5AhIg2AcIg+AgQg2AbguAVIhBAcIhBAcIg+AcQgkAPghAMQg7AWhJATQhSAXhqAWQheAUhiAQIhHALIg3AIQg+AHg9AEIg6ACIg+ACQg1ADg7AEQg/AFg3ADQhHAEhJABIgsAAQheAAhXgFg");
	this.shape_379.setTransform(1204.5779,591.7557);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AkqVuQilgLiJgbIhAgOQg8gOhHgVQhGgVg/gVQg6gThQgdIgpgQQgygTgvgVQhoguhug+QhLgqhVg2IgsgcQgZgQgRgNQgYgSgTgQQgTgQgQgQQgTgVgTgZQgOgTgPgYIgthPIgLgSQgphDgbgpIgVghIgDgEIgWgiQgkg9gTg6IgCgGQgPgygNhZIgEgcIgNhZQgHg3gDgnQgFgwgBgkIAAgCQgEhrASheQAGggAIgfIAWhGIAVhFIAAgBIAQg/QAJglAMgYIAGgMQAMgYAUgZIAQgWQAHgMALgPIAIgLIAUgbIAcgjIAfglIADgEIALgMIAOgUQAggqAagdQBPhXCIhaIAUgOQCjhoCYg3QAUgIAcgIIA0gQIAvgOIAwgNIASgEQA1gLBAgGQCUgQDWAFQAZAADWAIIAJAAQCHAFBjgBQBEgBCygJQBbgEBJAAQAwgBAmACQAyABAwAFQBaAHBaASQBSAQBXAaQAxAOA3ATIA8AVQBBAXAwAXQA8AaAuAdIACABQAsAbA9AvQBKA4AdAXIBaBEQAaAUAUAVQASARAQAUQAQAUATAeIALARIArBGIAOAUQAWAiAfArIASAcIAfAtIARAWIANARQASAZAPAdQAOAbANAfQAlBYAbBkQAfB1AOB+QARCmgRCPQgGAzgLAxQgSBYgjBRQgYA4gfAzQgpBFg0A3IgFAHIgIAJQgTAXgXAUQgWASgbATIgCABQgxAjg7AhIg1AdIg+AfQg2AbgvAVQgeAPgiAOIhBAcIg+AbQgkAPghANQg9AWhHATQhUAYhnAWQheAUhiAQIhIAMIg2AHQg+AIg9AEIg6ADIg+ACIhxAHQg9AFg4ACQhIAEhJAAIgfAAQhkAAhegFg");
	this.shape_380.setTransform(1209.3529,592.6754);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AknVuQimgLiIgaIhAgOQg+gNhFgVQhFgUhAgVQg8gUhOgdIgpgQQgxgTgvgVQhpgvhug9QhMgqhUg1IgtgcQgYgQgSgNQgYgRgTgQQgTgQgQgRQgTgUgTgZQgOgTgPgYIguhOIgLgSQgphCgcgqIgVghIgDgEIgWgiQglg+gSg4IgCgHQgQgygMhYIgEgdIgNhZQgGg2gEgnQgFgwgBgkIAAgBQgDhsARheQAGggAIgfIAVhGIAWhFIAAgCIAPg+QAJglALgZIAGgMQAMgXAUgaIAQgVQAIgNALgPIAIgKIAUgbIAcgkIAegmIADgEIAKgMIAPgUQAfgqAbgdQBOhXCIhbIAUgNQCihpCYg4QAVgJAbgIIA0gRIAugOIAwgMIASgEQA1gLBBgHQCVgRDUAGQAUgBDbAKIAJAAQCJAFBhgBQBAgBC3gJQBbgEBJgBQAvAAAmABQAyACAwAEQBaAIBbASQBSAQBXAZQAyAPA2ASIA8AVQBAAXAxAXQA8AbAuAcIACABQArAbA+AvIBnBPIBaBCQAaAVAVAUQATASAPASQARAVASAdIALASIArBFIANAVQAWAhAfAsIATAbIAgAtIAQAXIAMARQASAaAPAdQAPAaANAeQAmBYAbBlQAgB0AOB+QASCmgQCPQgGA0gLAwQgSBZgiBQQgYA5gfAzQgpBFgzA4IgGAGIgHAJQgUAWgXAVQgWATgaASIgCABQgxAkg7AhIg2AcIg+AfQg2AbgvAWIhAAcIhBAdIg+AbQgjAPgiAMQg9AWhGAUQhWAZhlAWQheAVhiAQIhIALIg2AHQg+AIg9AFIg6ADIg+ADIhwAHIh2AGQhIADhJAAIgfAAQhlAAhdgFg");
	this.shape_381.setTransform(1214.1473,593.5983);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AkkVtQingKiHgaQgggFghgIQg+gNhFgUQhEgThBgWQg+gUhLgdIgpgQQgxgTgvgWQhpgvhug9QhOgqhTgzIgtgcIgqgcQgXgRgUgRQgTgQgQgQQgTgUgTgaQgPgSgOgYIgvhNIgLgSIhHhrIgVgiIgDgDIgVgjQgmg+gSg4IgCgHQgQgygMhYIgEgcIgMhZIgKhfQgFgvgBgkIAAAAQgDhtARhdQAFghAIgfIAWhGIAVhEIAAgCIAPg/QAIglALgZIAGgMQAMgXAUgbIAQgUQAIgNALgOIAIgLIAVgbIAbglIAdgmIADgDIAKgNIAPgUQAggrAagdQBNhXCJhbIAUgNQChhoCYg7QAWgJAZgIIA0gSIAvgNIAvgNIASgDQA2gMBAgIQCWgRDSAGIDwAKIAJAAQCKAGBggBQA8gBC7gKQBcgEBIgBQAvAAAmAAQAyACAwAFQBaAIBbASQBSAQBXAZQAzAPA1ASIA8AUQA/AYAzAWQA7AbAuAdIACABQArAaA+AwIBnBOIBbBBQAaAVAVATQATASAQATQAQAUATAdIALASIAqBGIANAVQAWAgAfAsIAUAbIAgAtIAQAXIAMARQARAbAQAcQAOAbANAeQAoBXAbBlQAgBzAPB/QATCmgQCPQgGAzgKAxQgSBZgiBQQgYA5gfA0QgpBEgzA4IgFAGIgHAKQgVAWgXAUQgWAUgZASIgCABQgwAkg9AhIg2AcIg+AfIhkAxIhAAdIhBAcIg+AaQgjAPgiANQg+AXhFAUQhXAahjAVQheAVhiARIhIALIg2AHQg+AIg+AGIg6ADIg9AEIhxAGIh2AGQhHADhJgBIgRABQhtAAhjgHg");
	this.shape_382.setTransform(1218.9234,594.5002);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AhBV0Qh2AAhqgGQiogKiHgZIhAgNQhAgNhDgTQhDgThCgWQhBgWhIgbIgpgRQgwgTgwgWQhpgvhug8QhPgrhSgyIgtgbQgZgQgSgMQgXgRgUgRQgUgQgPgQQgTgUgUgaQgOgTgPgXIgvhMIgMgTIhHhqIgVghIgDgEIgWgjQglg+gTg3IgBgHQgQgygMhYIgFgcIgLhZQgHg1gDgqQgFgvgBgkIAAAAQgDhuARhbQAFghAIgfIAVhGIAVhFIAAgCIAOg/QAJgmAKgYIAGgMQAMgXAUgbIAQgVIAUgbIAIgKIAUgbIAbglIAdgnIADgEIAKgNIAPgUQAfgrAZgdQBNhWCJhcIAUgOQCghoCYg8IAwgSIAzgRIAvgOIAvgNIASgEQA2gMA/gHQCagSDPAGQAKAADnALIAIAAQCLAGBfgCQA5gBC+gKQBcgEBIgBQAwAAAlABQAxACAyAFQBYAIBcASQBTARBXAZQAyAOA2ARIA7AVQA/AXAzAXQA8AbAuAcIABACQAqAaA/AwIBnBNIBcBBQAbATAUAUQAUASAPASQARAUASAeIALARIAqBGIAOAVQAUAgAhAsIATAcIAgAtIAQAXIAMARQARAaAQAdQAOAbAOAdQAoBYAcBjQAhBzAPCAQATCmgPCPQgGAzgKAxQgSBZghBRQgXA4gfA0QgoBFg0A4IgFAGIgIAJQgUAWgWAUQgYAUgZATIgCABQguAjg+AiIg2AcQgbAOgkARIhkAwIg/AdIhBAdIg+AaQgjAPgjAMQg/AYhDAUQhZAahhAWQhdAWhiAQIhIAMIg2AHQg+AIg+AGIg6AEIg+AEIhwAGIh2AFQg5ACg6AAIgeAAg");
	this.shape_383.setTransform(1223.7003,595.3938);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("Ag+V0Qk1gBjagnQj1grkFhsQjghdj5iTQg4ghgfgWQgvggggghQghgigjg2Ig8heQhBhegfgxQg3hUgXhEQgTg6gPhzQgXivgDhbQgFiWAfhzQAFgTAQgzQAOgtAHgaIANhAQAIglALgZQAMgcAZgiQAOgUAfgmQASgXA8hVQAvhDAigmQBMhWCJhdQEXi8EHg6QC8gqEhAKIDxALQCRAHBhgCQA1gBDDgKQCagIBfADQEAAKEoBhQCwA6BoBBQAqAaA/AwIBnBMIBdBAQA1AmAeAlQAWAZAYAqIApBGQAXAlAsA8QAzBEARAbQCXDkApFKQAaDiglC3QgeCXhKCAQhPCGh0BXQgvAjhAAjQgpAXhMAkQi/BdhiAoQklB2lkA0QkkAqlkAAIgZAAg");
	this.shape_384.setTransform(1228.474,596.289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_319}]},68).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).wait(337));

	// Vrstva_30
	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFC892").s().p("AkwILQg2AAgxgcQgxgbgcguQgUghgLgtQgHgggGg1QgJhaAChDQAEhVAXhDQA/i5DkiHQC4htDUgjQCdgZBYAxQA1AeAfA3QAfA3gDA9QgCA8gkA0QgkA1g3AXQgiAPgzAGIhYAKQiNAThzBQQg/ArgLAvQgEATACAaIAIAsQAWCDg3BWQgdAtgxAbQgwAag1AAIgCAAg");
	this.shape_385.setTransform(1007.5833,439.9171);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFC892").s().p("AkJI/QgZgBgUgJQgOgFgNgLQgMgHgJgMIgEgFQgKAFgMACQgVACgUgIQgigNgdgqQgfgsgLg3QgHgfgBgrIgBhLIgEg+IgEgSIgGgVIgCgJQgOg2gEgxQgEgjACggIAAgBQACgkAJgfQAJgnASghQAJgkANgfQAvhwByhMQBohGCEgVQA3gIBngFQBvgEAwgGQA3gIAQAAQAogCAdALQAYAKATAUIACAAQBOAPAxAyQAfAdAPAhQAOAaAEAdQAEAegGAeQgFAigTAcQgNAUgPAQQgdAegmALQgKAFgRABIgBADIgHAOQgGAIgEAPQgRAhgaAYIgRAOIgDADQgMANgQAKIgHAFQgTAMgVAKIgEABIgPAHIgLAGQggATgXAQIgOAJQgdAVgdATQgfAWghAVIgXAOQgJAUgKAPQgPAdgXAcIgIAKQgGAZgGAGQgSAtgMAlIgEANIgNAjQgIANgIAcQgIAPgLANQghAugqAPQgbALgbAAIgEAAg");
	this.shape_386.setTransform(1002.7728,443.2102);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFC892").s().p("AlnKoQgsgNgkgdQgkgfgSgpQgVgtgBhDIACh1QABgwgGhDIgJhzIgCgtIgFgIIgmhCIgFgKQgUgjgIgZIgNgjQgXg8gIg3QgGgoADgmIAAgCQADgpANgjQAQguAegkQAHghAPgcQAcg1A2gkQAxgiBAgQQA0gNBFgEQAngCBUACIG0ALQBEABAlAFQA6AHArAUQBQAmAnBYQAmBZgcBUQgdBUhVAtQhWAuhWgaQgNgDgagLIgHAVQgEAIgDAVQgLAsgZAfQgHAKgJAJQgKAYgRAQIgHAJQgTAVgVAQIgRAOIgLALQgfArgeAjQgaAlgaAdQgdAlgiAcIgZATQADAegCAVQgFAygaAsIAAApQgDBFgXAuQghBBhKAfQgrASgqAAQgeAAgdgJg");
	this.shape_387.setTransform(1001.6812,455.7002);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFC892").s().p("AkMLgQgRgDgQgHQgRgGgPgMQgPgEgOgWIgFgGQgcgbgXgpQgMgVgKgXQgJgTgGgZQgNgvgEhEIAAgJIgBhtIgBgVIgCg4IgBgJIgGgwIgCgNIgHgbQgNg8gKgjIgJglIgBgJIgGgIIgmg7IgHgMIgHgKQgXghgJgUIgFgKIgQgiQgfhBgKg7IAAAAQgIgtADgpIAAgCIAAgBQAEgtAQglIABgFQAVguAkgiQAIgOAKgNQALgOANgNQAgggAsgUIAggMQAqgQAygFQAPgDAXAAQAmgDA2ADIApADICGALIB1AMQCuATB9AKIA5AGIAnAGQArAIAdALIASAGQAtATAdAeIAOAOQAkAqALAzQAEAZAAAZQAAAZgHAXQgNAwggAhIgLANIgMAMIg1ApQgnAZgvAVQhBAeg9AOQgdAHgZACQgOAFgTAAIAAABQgEALgCAMQgCAFgBAKIAAAQIgDAVQgFAkgMAbQgFANgHALQgHAVgKARIgEAJIgEALQgJAWgMATIgEAHIgMATIgIAOQgJATgLARIgQAXIgQAiQgSAugUAjIgMAYQgQAggTAaQgJAOgKAMIAAACQgCAegHAWQgGAZgLAXQgJARgMAPIgKAOQgHAhgJAFQgJATgLAPQgWAfgaAQIgJAGQgiATgmABIgGAAQgPAAgPgCg");
	this.shape_388.setTransform(995.8742,454.3792);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFC892").s().p("Ak0MnQgSgMgPgOQgPgPgJgRQgLgRgGgZQgIgHgDgmIgCgKQgLgpgLg1IgLg2QgFgVgDgdQgIgzgEhMIAAgJIgFh4IgBgXIgEg9IgBgKIgJg1IgFgOIgKgdQgWg9gRgnIgQgnIgEgIIgGgJQgSgagagkIgJgMIgIgKQgdgngKgRIgGgKQgLgRgJgSQgmhEgOg/IAAgCQgKgvAEguIAAgCIAAgBQAEgxATgoIADgEQAZgxAsgiQANgNAOgLQAQgMASgKQArgZA1gKQASgEATgCQAwgGA5AEQANAAAeAFQAoAEA+ALIAsAHQA5AKBWANICBAVIFBAzQAhAGAcAGIAqALQAsANAfASQAJAFAIAGQAsAdAXArIAKATQAZA5gIA5QgFAdgMAZQgMAZgSAVQgnAsgyANIgSAJQgIAEgJAEQgsAOgaALQgxARgzAUQhHAbhAAfQgfAPgVANIgdAZQgDALgBANIgBARIACARIABAYQABAmgHAhQgDAPgEAOQgFAXgJAUIgBALIgBALQgCAcgGAXIgCAIIgHAZIgFARQgHAWgKATQgHAOgJAMIgKApQgLA1gMAqIgIAcQgKAngOAgQgHATgIAPIAAABQgHAggJAYQgLAbgPAVQgMARgQAOIgMAOQgOAbgSAIQgRAQgUAKQgkAVglABIgMABQgsgBgmgWg");
	this.shape_389.setTransform(992.0991,455.0908);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFC892").s().p("AktOmQg3gUgmguQglgvgJg5QgEgcADglIAHhBQAKhWgChuQgBg/gHiFQgFhdgEgvIgGhcIgDgKQgHgfgFgaIgVgtQguhjgggwQgVghgpgyQgzg+gOgTQhJhhgVhaQgNg1AFg0QAGg3AZgsQAmhEBQgmQBIgjBXgBQBHgBBaAUQAZAFCFAkQB8AhDZAsQD2AxBhAYQBFARApAQQA6AYAlAjQAzAwAOBIQAPBIgcBAQgcA/g/AmQg/AnhFgGIgBAAQgVAGgZADIhYAKQiNATh0BQQhAAsgLAvQgEATADAZIAHAsQAQBcgXBFQAJAxABAlQAAA8gTAuQgHAQgJAOQgHBygIBKQgJBNgPAxQgVBDgmAqQgPARgTANIgOANQgrAng7ALQgWAFgVAAQgkAAgigNg");
	this.shape_390.setTransform(989.2259,456.4581);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFC892").s().p("Aj1OvQgQgFgPgIQgmgSgdggQgIgKgHgKQgbgngIgtIgDgSQgCgWACgaIABgOIAGg1IABgJQAJhUgChoIAAgEQgBg8gGh7IgBgSQgEhJgDgrIgCgaIgFg9IgBgLIgDgWIgCgKIgFgVIgKgmIgEgIIgSglQgfhBgXgpIgMgTIgTgVIgOgPIg6g+IgVgYIgkgnIgPgQIgVgXQgRgTgWgVQgWgXgOgVQgSgbgNgcIgGgSQgOgogBgqIAAgDQABg3AXgwQAWguAngmQAVgVAZgPQAcgTAegLQApgQAwgEIAKAAQAlgCAqAGQAoAFAtAMIAGACIAYAHQAiABAzAJIAuAJIBrAXICSAiIBiAWIDhAvICCAcQBGARAsAOQAsAPAgASIAaAQQAjAXAVAcQATAVAMAZQALAWAGAVQAMAqgHArQgDASgFASQgOAugjAjIgUASQgqAig2AJIgVAHIgYAHQg2ALgjACIgQABIgtAJQguAIgjALQhDAUg9AkQg+AlgaArIAAABQgKASgEAWQgFAJABAgIAAAZIABArIABAqQAAAdgFAaQAGAwgDAnIgBAMQACAtgIAkIgEARQgFAQgHAQQgCAagFAYIgGAfIgKBtQgEAngFAgQgFAhgHAaQgIAggMAaQgOAggUAYQgOATgRAPIgEAEIgLAKQgLAKgMAJIgQALQgcASghAIQgUAGgVABIgRABQgeAAgcgIg");
	this.shape_391.setTransform(984.7142,455.9333);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFC892").s().p("AjEO2QgQgEgQgGQgogRgfggIgRgUQgdgngJguIgDgSQgDgWACgbIABgOIAGg2IABgKQAJhVgChrIAAgEQgBg9gGh+IgBgSIgIh3IgCgbIgFg/IgCgKIgDgWIgCgLIgFgXIgOgkIgEgJIgSglQghhEgYgoIgNgTIgXgSIgQgNQgbgXglgjIgYgYIgngmIgRgPIgYgUQgRgPgfgSQgegTgQgQQgYgWgSgcIgJgRQgUgngEgrIAAgBQgFg2AVg2QATguAkguQAUgXAVgTQAagXAcgOQAogVAygFIALgBQAngDAqAHQAoAGAuAOIAFACIAYAIQAmgEAyAEQAWACAZADQAyAGA7AOICZAmIBkAXQBuAZB6AZICHAcQBFAPAvANQAwANAgANIAdAMQApASAaAUQAZARASAUQARASAMAUQAXAlAGAtQACASAAAUQgCAzgZArQgGAMgJALQghAsgyAWIgUAKQgMAFgNAEQgxAQgoACIgRAAIguAJQg1AHggAHQhGAPhBAgQg9AegoApIgBABQgPAQgKATQgMANgEAaQgDAMgBALQgCAUABAYIAFArQACAegCAbQAEAxgHAoIgCAMQAFAvgEAkIgCATQgDARgFAQQgEAbgHAYQgEAPgHAPQgEA+gFAyQgDAogFAgQgEAigGAbQgHAjgKAaQgNAhgSAbQgOAVgQAQIgEAEIgLALQgLAKgMAJIgPAMQgaAUghAMQgVAHgWADQgPACgPAAQgYAAgXgGg");
	this.shape_392.setTransform(980.9145,455.4819);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFC892").s().p("Ai7O1Qg2gUgmgvQgmgvgIg5QgEgcADgkIAHhBQAJhXgBhtQgBg/gHiGQgFhdgEguIgHhcIgCgLQgIgfgEgaIgVgtQgvhjgfgwIgOgUQgXgKgXgPQgngag5g0IgrglQgZgUgVgMQgRgKgngQQgmgPgSgLQgngWgagmQgbglgIgsQgQhgBKh0QAqhAAugdQAmgZAzgHQAtgGAyAIQAqAHAyASIAYAKQArgLAvAAQBGgCBbAUQAYAGCGAjQB6AhDbAsQD2AyBhAXQBFARAoARQA7AXAlAkQAyAwAPBIQAOBIgcA/QgcBAg+AmQhAAmhFgFIAAAAQgVAFgaADIhYAKQiNATh0BRQg/ArgLAvQgEATACAZIAIAsQAPBcgWBFQAJAxAAAlQABA8gUAuQgGAQgJAOQgIBygIBLQgIBNgPAxQgVBDgnAqQgQAQgSANIgPAOQgpAmg8AMQgWAEgVAAQgkAAgigMg");
	this.shape_393.setTransform(977.7728,455.0475);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFC892").s().p("AiXOrIgTgKQgMgHgLgJQgTgMgQgZQgJgMgIgOQgfgxgHg7IgCgYQAAgTABgXQAAgOAFg0QADghABgkQACg/gBg/IAAgGIgDhMIgBgJIgEgzIgFgsIgCgUQgLhQgHgtIgDgPIgBgFIgKgrIgJglIgDgKIgTg3IAAgBIgYgrIgBgBQgMgWgMgTQgNgWgQgUIghgtIgHgJIgPgUIgFgDQgWgJgUgMQgqgXg0goIgJgHQgggYgOgIQgYgQgUgKIgGgDIg6gZQgbgLgSgJIgMgHQgkgXgZgjIgEgFQgbgogGgtIAAAAQgHgwAPgzQAPgtAegsIARgWQAPgSAQgOQAcgdAfgQIAJgEQAqgVAygEQAUgDAWABQAaABAdAGQAXAEAYAHIAvAPIAZAKIAbgDIAFAAQAUgEAVgCIASAAQAggBAkAEQAnAEAsAKIANAEIALADQAaACA2AMIBHARIBFAQICIAgICSAfICbAhQCCAaBEAQQBAAQAoAOIAJADQAwASAiAYIASAOQAfAaATAiQAPAbAIAfQAIAdAAAeQAAApgPAnQgIATgLARQgaAqgtAcIgTALQgcAOgdAHQgcAIgdAAQgWAHgaADIgRACQgjAEgaAAIgMACIgtAEQhgAUhUAzQgUAMgSAOQgcAUgRAWQgMAQgGASQgEAJgBAMIgBAOQAAAOABARIAHAtQAEAlgBAiQABApgGAjIgEASQAFArgBAiIgBAKIgCAUQgCAxgPAoQgFAQgIAQIgDApQgFBAgGAxIgGAmQgHAngJAfQgGAWgIASIgFAOQgVAwgfAgQgKALgLAIQgRAOgUAKIgQAKIgDADQgoAXgwADIgKABQgtAAglgSg");
	this.shape_394.setTransform(973.7911,453.6607);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFC892").s().p("Ag3O6IgJAAQgrgJgfgZQgJgGgHgIQgKgJgIgLQgQgMgLgeQgHgNgGgPQgXg0gGg9IgBgZQgBgTABgYQAAgRAEgyIAChGQABhGgCg7IgBgHIgDhNIgBgKIgGg0IgIgsIgEgVQgQhQgMgtIgEgOIgBgGIgSgmIgOgkIgFgKIgZg0IAAgBQgQgXgMgTIAAgBQgPgVgOgSQgOgTgUgUIgmgpIgIgJIgQgTIgGgDQgWgJgVgLQgwgWg0giIgJgGQghgUgRgIIgvgWIgGgDIg7gYQgcgLgTgKIgMgIQglgYgZglIgDgFQgbgpgGguIAAgBQgFgxASg0QARguAigoQAJgLALgKQAQgQATgNQAdgXAkgNIAJgEQAugQAygDQAVgBAVABQAbACAeAGQAXAFAZAHIAvAQIAaAKQANgBAOABIAFAAQAUgFAXgBIARgBQAigCAkAFQAoAFAtAMIANADIALADQAdABA1AJQAhAFAoAJIBHAQICMAiQBCAPBUASICgAhQCDAbBIARQBCAPApAOIAJADQAzARAiAWIATAOQAiAYAVAhQARAaAKAgQAJAdACAfQABAqgOAoQgGAUgLASQgaAsgtAdIgTALQgdAQgeAHQgbALgdADQgXAHgaAEIgRACQgjADgcAAIgNAAIguABQhiAVhWA1QgUANgSAOQgcAWgPAYQgKARgFATQgDAHAAAOIAAAQIACAfIAFAuQAEAmgEAiQADArgFAjIgDAUQAEArgFAjIgBAKIgEAUQgDAzgMApQgFARgGAQIgEAqQgFBDgIAwIgIAnQgJAogNAeQgIAVgJARIgIANQgZAvglAcQgLAJgMAHQgTAMgWAGIgRAHIgDACQgdAKgdAAQgPAAgPgDg");
	this.shape_395.setTransform(969.8179,452.63);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFC892").s().p("Ag0O0IgIgBQgogSgaggQgGgIgGgKQgHgLgGgNQgMgLgGglIgJgeQgRg2gEhAIgBgZIAAgsQgBgVADgwIABhIQgBhLgDg4IAAgHIgEhPIgBgKIgIg2IgLgsIgGgUQgWhSgQgrIgFgOIgCgGIgZgkIgUgiIgGgJIgfgyIAAgBQgUgXgLgRIgBgBQgRgVgQgQQgPgRgZgTQgagVgQgQIgIgIIgSgTIgGgEQgXgIgWgKQg1gWg0gbIgLgFQghgQgUgHIgygUIgGgCQgbgJgigOQgcgLgUgMIgMgIQglgZgZgmIgEgGQgagqgFgwIAAgBQgEgzAUg0QAUgwAmglIAWgTQATgOAVgKQAegUApgJIAKgDQAxgMAxgBQAWAAAVACQAcACAeAHQAYAFAZAIIAxARIAaAKIAbADIAFAAQAVgFAXgDIASgBQAigBAlAFQAoAFAvANIANAFIALADQAhgDAzAHQAiAEApAIIBJAQICRAjQBCAQBXATICkAiQCEAbBOARQBDAQApANIAKADQA2ARAjAUIAUANQAkAXAXAgQATAaAMAfQAKAeADAfQAEAsgNApQgGAUgKATQgZAuguAfIgUAMQgdAQgeAIQgbAOgdAFQgXAJgbAEIgRACQgiADgfgDIgNAAIgwgCQhlAWhWA4QgVANgSAPQgcAXgNAaQgJARgDAUQgCAHABAQIABAQIACAhIAFAuQACAngFAjQAEAsgEAkIgCAUQACAsgHAjIgDALQgCAKgDAJQgDA1gKArQgEARgGARIgDArQgHBFgJAxQgFAVgFASQgLAogRAeQgJATgMAQIgJAOQgeAsgqAYQgNAIgMAFQgWAJgXAEQgJACgKABIgDABQgMACgMAAQggAAghgNg");
	this.shape_396.setTransform(965.8566,452.013);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFC892").s().p("AgwOsIgHgDQgmgbgUgnQgFgKgDgLQgGgOgDgPQgHgKgDgrIgFghQgJg4gDhCIgBgaIAAgtIAAhGIAAhKQgDhRgDg1IAAgHIgFhRIgBgKQgGgdgDgaIgPgsIgHgVQgchRgUgsIgGgOIgDgGIggggIgaggIgHgIIglgwIgBgBQgXgZgMgOIAAgBQgUgUgRgPQgQgPgegRQgegUgQgOIgKgIIgTgSIgFgEIgwgRQg7gVg0gVIgLgEQgigMgWgGIg1gRIgHgCQgegJghgNQgcgLgUgNIgNgIQgmgbgYgoIgEgGQgagsgDgxIAAgBQgEg1AXgzQAXgyApgiIAZgRQAVgMAXgJQAggPAtgGIALgCQA0gIAxABQAXABAVACQAcAEAfAHIAxAOQAVAHAeALIAaAKIAcAFIAFABQAVgGAXgDIATgBQAjgCAmAGQAoAGAwAOIAOAFIAKAEQAkgGAyAFQAjACArAHQAjAGAnAJICVAmQBDAQBaAUICpAjQCFAbBSASQBFAQAqAMIALADQA4AQAkATIAVAMQAmAXAZAeQAWAaANAfQAMAdAEAhQAGAtgLAqQgGAVgKATQgZAxguAgIgUANQgeARgfAIQgaAQgdAJQgXAJgbAFIgSACQghADgigFIgMgBIgzgFQhnAXhYA6QgVAOgRAPQgdAagLAbQgHARgBAWQgBAGACASIABARIADAhIAEAvQABApgIAjQAGAtgCAkIgCAWQAAAsgJAkIgEALIgHATQgDA2gIAsIgIAkIgEAsQgHBIgLAxQgFAVgHASQgNAogUAdQgMATgOAPIgLAOQghAqgxAUQgNAGgOAEQgYAGgYABIgUAAIgDAAQgwgCgqgbg");
	this.shape_397.setTransform(961.8982,451.6882);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFC892").s().p("ABGPUIgVgDIgDgBQgzgLgoglIgFgEQgkgkgOguQgDgMgCgNQgDgPgBgRQgEgLADgwIgBgkIgEh+IAAgbIgCguIAAhHIgDhLQgDhXgEgyIgBgIIgFhSIgCgLQgGgegEgaIgSgtIgJgTQgihTgYgrIgHgOIgEgGQgTgNgUgQIgfgeIgJgIIgrgtIgBgBIgmgmIgBgBQgWgTgTgOQgRgMgigRQgigRgRgMIgLgIQgLgIgJgKIgGgEIgxgQQhAgUg0gPIgMgDIg8gOIg4gNIgHgCQghgJgfgMQgdgLgVgOIgNgJQgmgcgZgpIgDgGQgagugDgyIAAgCQgCg3AZgzQAagzAtgeQANgJAPgHQAWgKAagHQAhgKAygEIALgBQA4gEAxADIAsAFQAdAFAgAIIAyAPIAzASIAbAKIAcAIIAFACQAVgHAZgDIATgCQAjgCAnAGQApAGAxARIAOAFIAKADQAogHAwACQAlAAArAGQAkAGAoAJQAeAHB8AgQBDASBdAUICtAkQCHAcBWATQBHAPArALIALADQA7AQAkARIAXALQAoAWAbAdQAYAZAPAgQANAdAGAiQAIAugLArQgFAWgJAUQgZAzguAiIgUAMQgfATggAIQgZATgdALQgYALgbAFIgSACQggACglgFIgNgCIg0gJQhpAYhaA9QgWAOgQAQQgdAbgJAdQgGARABAYQAAAFADAVIACARIAEAiQACAWAAAaQAAApgJAjQAHAvgBAlIgBAXQgBAsgNAlIgEALQgEAJgFAKQgEA4gGAtIgFAlIgEAtQgIBKgNAxQgGAWgIASQgPAogYAdQgNASgQAOIgNANQgmApg2APQgPAFgPADQgPACgPAAIgWgBg");
	this.shape_398.setTransform(957.9451,451.625);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFC892").s().p("AAyPXQg2gUgmguQglgvgJg5QgEgcADglIAHhBQAKhWgChuQgBg/gHiFQgFhdgEgvIgGhcIgDgKQgHgggFgZIgVgtQguhjgggwIgNgUQgXgLgXgPQgogZg5g1IgqglQgZgUgWgMQgRgJgngQQglgPgTgLQgVgMgRgRQhngfhHgMQhagMgsgJQhMgQgxggQgvgggdgyQgdgzgBg4QgCg4Acg0QAdg0AxgbQAjgUAwgIQAigFA2gBQBfgBBGANQAzAJA9AVQAjAMBKAcIAEACQAWgIAZgDQAugHAxAJQAqAHAyASIAZAJQArgKAugBQBHgBBZAUQAZAFCFAkQB8AhDaAsQD2AxBhAYQBFARApAQQA6AYAlAjQAzAwAOBIQAPBIgcBAQgcA/g/AmQgfATghAJQg2AxhGAGQgfACgogHQgSgDgxgMQhrAZhbA/QhAAsgLAuQgEATADAZIAHAtQAQBcgWBFQAIAxABAlQAAA8gTAuQgHAPgJAPQgHBygIBKQgJBNgPAxQgVBDgnAqQgPARgTANIgOANQgrAng7ALQgWAFgVAAQgkAAgigNg");
	this.shape_399.setTransform(954.0185,451.5597);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFC892").s().p("AA5PCIgTgKQglgVgYghQgJgMgHgNQgHgMgFgNQgHgOgEgUQgBgTADgWIACgOIAKgsQAHgNAJgwIABgIQAOhJgBhiIgBgTQgChJgLh8IgDgdQgHhEgJgrIgPhbIgDgKIgIgXIgJghIgXgsQgthXgngyIgFgGIgOgTQgXgMgXgPQgqgdg5gvIgdgWIgRgLQgZgSgYgMQgUgJglgOQgkgOgWgKQgWgKgUgOQgvgMgrgJQgxgKgogFIgrgEQg5gEgjgBIglgCIgDAAQgqgKgegQIgOgIQgtgcgegtIgEgHQgegzgBg4IAAgBQgCg6Adg0IADgEQAdgyAwgaIAIgEQAJgIALgGQAXgGAdgDIAcgEIA9gFIAdgBQBLgCBAAHQA1AHA+AQIASAFQAlALA5ASIAEACQAXgFAZgCQAugCAyAJIAdAGQAeAHAjALIAYAJQArgFAvACQArACAyAJQAiAGAjAIICeAmIA1AMQBHAQBkARIB8AVIAyAIQBJAMAtAIQBCALAwAGIAaADIAqAJIABABQA/APAnAQIAJADQAyAUAiAeIAMALQAqApAQA8IAFAWQAKA5gRA0QgFAOgGANQgXAvgqAgQgPALgQAJQgNAHgNAGQgTAKgTAHQglAegrAMQgXAFgZABIgTgBQgWAAgfgHIgKgCQgWgBgjgFQhLAUhEAnQgdARgZAUQgWARgOASQgNASgGATQgFAKgBAPIgBANQAAAPABASIAGAsQAFArgDAmQABAsgIAlIAAACQAGAwgDAmIgCARQgCAQgEAPQgEAfgJAcQgFAQgHAPIgHBWQgFA8gGAtIgDASQgLBAgTArIgDAHQgKAVgMASIgKAQQgQAXgTARQgRAPgVALIgEADIgMAIQgoAagwAGIgRABIgJABQgqAAglgRg");
	this.shape_400.setTransform(952.5815,452.5137);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFC892").s().p("ACQPFIgRgCQgugFgmgZIgSgNQgggbgTglQgGgNgFgPQgFgNgDgPQgEgLgCgYIARgiIAHgLQAKgSAKgVQALgRAMgpIACgHQAUhGgDhnIAAgTQgDhTgQh0IgFgcQgKhBgMgvQgLgygNgmIgEgKIgKgZIgMgfIgZgrQgvhRgvg0IgFgGIgQgSIgtgeIhmhIIgfgUIgRgLQgagPgagLQgXgJgjgNIg+gUQgXgJgVgKQgvgLgvgIQgygIgogDIgsgCQg4gBglAGIgkAFIgDABQgrgIgfgPIgOgHQgvgbgeguIgEgHQgfgzgCg4IAAgBQgBg7Aeg1IACgEQAfgyAwgaIAJgFQAHgIAJgIIA0gHIAcgDIA/gHIAdgDQBJgGBFAFQA3ADA+ANIASAEQApAIA4APIAFACQAXgCAaAAQAuABAzAKIAdAHQAeAHAkAKIAZAIQApAAAxAGQArAFAzAKIBFAPICeAkIA2ALQBIAOBmANIB+ARIA0AGIB3AQQBDAIAyABIAaAAIArAKIACABQBAAQAnAPIAJAEQAzAVAiAfIAMALQApAqAPA9IAFAXQAJA5gUA1QgFAOgHANQgYAugtAgQgPAKgQAJQgOAGgOAFQgRAMgTAIQgmAdguAJQgWAEgaAAIgUgCQgUgBgigIIgLgCQgXABggAAQhMAWhEAqQgeASgWAUQgWAUgKAUQgLASgDAVQgDAHABAUIAAANIACAhIAFAtQADArgGAmQAEAugGAlIAAACQAEAwgGAmIgDARQgEAQgGAPQgDAggHAdIgJAgIgHBXQgGA9gIAtIgDASQgOA/gYAqIgEAHQgMAUgOAQIgMAPQgSAWgVAPQgTAOgWAJIgFADIgNAGQgoASgqAAIgJAAg");
	this.shape_401.setTransform(951.1635,453.6129);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFC892").s().p("AB9O3IgQgEQgtgNgjggIgQgQQgcghgNgqQgEgOgDgQIgDgdQgCgKABgcQAQgKARgQIAJgJQAQgQAOgTQASgTAOgjIACgHQAbhDgDhqIgBgUQgEhdgVhrIgGgdQgNg9gSgyQgPgvgRgoIgFgKIgLgZIgPgdQgNgWgOgVQgxhLg3g2IgGgGIgRgQIgsggQgxgjg5gjQgRgKgQgIIgSgJQgagOgcgKQgagJgigLIg/gSIgwgOQgwgJgxgGQgzgHgqgCIgsABQg2ADgnAMQgTAFgRAIIgCABQgsgGgggNIgPgHQgvgZggguIgFgHQggg0gBg6IAAAAQgBg7Afg2IADgEQAfgyAxgbIAIgEQAGgLAHgKQAYAAAdgCIAcgEIA/gJIAegEQBIgJBIABQA6ABA/AIIASADQAtAHA3ALIAFABIAxAEQAvAFA0AKIAcAHIBEARIAZAHQAqAFAwAJQAsAIA0AMIBFAQQBIAQBXASIA2AJQBIAMBqAKICAAMIA0AFIB5AMQBEAFAzgEIAagDIAtALIADABQBBAQAoAQIAJADQAzAWAiAgIAMALQApAsAOA+IAEAXQAIA6gWA1QgGAOgHANQgaAuguAeQgRALgRAHQgOAHgOAEQgRANgSAKQgoAbgvAHQgXADgagCIgVgDQgSgCgkgIIgLgDIg3AIQhMAYhEAtQgfATgUAWQgVAVgIAWQgHATAAAXQgCAFADAYIABANIAEAiIADAsQABAsgJAmQAGAvgCAlIAAACQACAwgKAnIgFARQgFAPgHAPQgDAhgEAeIgGAiIgIBXQgGA/gKAsIgEASQgRA/geAqIgEAGQgOASgQAPIgNAOQgUAVgYAOQgUAMgYAHIgGACIgOAFQgcAHgbAAQgUAAgUgEg");
	this.shape_402.setTransform(949.7435,454.8706);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFC892").s().p("ABrOpQg3gUgmgvQgkgvgJg5QgEgcADgkIAFgpQAegHAfgRQA3ggAcg3QAghAgEhvQgEiBgih5Qgkh9hAhrQhChuhehVQhhhYhzgyQiMg/jWgVQhTgIg5AGQhMAJg0AkIgCACQgtgDghgNQg7gWglg2Qgmg3gBg/QgCg+Ajg4QAjg4A4gbIAJgXQAkAEAugGQAfgFA/gNQCEgXCcANQB9ALCiAmQBeAWC7AwQCnApB1APQBIAKBuAGIC2ALQBkAIAXAAQBFADA0gJIAbgGIAuALQBFARApARQA6AXAlAkQAzAwAOBIQAPBIgcA/QgcBAg/AmQgfATghAIQg2AyhGAFQgfADgogIQgSgDgxgMQhrAZhbBAQhAArgLAvQgEATADAZIAHAsQAQBcgWBFQAIAxABAlQAAA8gTAuQgHAQgJAOQgHBygIBLQgJBNgPAxQgVBDgnAqQgPAQgTANIgOAOQgrAmg7AMQgWAEgVAAQgkAAgigMg");
	this.shape_403.setTransform(948.3193,456.242);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFC892").s().p("AElMzQg0gZgjgpQgYgcgLgZQgKgUgFgVQgIgbgCgfQgCgJAAgbIAQgKQAKgIALgLIAIgKQAcggAKgsQAIgkgCgxQgEgigHgnQgYhxgzhmQgghDgsg5QgXgigbgfQhMhWhig+Qg8gmhAgZQgrgRgsgLQg0gLg4gGQg0gIg+gBIhugCIgyABQguABglAGQgoAFgiAKQgcAIgXAMIgCAAQgrgDgggNIgRgIQgtgXgfgtIgDgEQgggygCg4IAAgCQgDg3Acg0IADgHQAbgvAsgcIAMgHQAFgLAGgKQAhgCAsgJIAHgBIA1gMIAYgMQAlgQArgLIAhgIIA0AAIBgABIAyADQBnAHB7AWQBbAOCYAhIAcAGQCaAhB4APQBFAJBfAIIAKABICkAOIANABIB2ALIAsABQAnABAjgEIAZgDIAtAJQBAAOArANQA1ASAnAZIAEADQAzAkAbA3QAZA2gGAwQgEAhgQAYQgIAKgJAJQgQAOgSAGQgIAKgJAIQgUAWgdAFQgIADgKAAIgWgBQgHABgfgFQgLAFgKAGQguAegxA0IgLAMQguAugMAwIgEAUIgBAWQgCAGACAhQABAwgMAoQgIAcgNAZIgCAOQgBAhgGAaQgIArgVAgIgIAKQgIAMgLAKIgIAYQgHAdgOAXIgXBCQgTA+gXAsQgKAUgLASQgVAigXAaQgQAQgPAOIgMAOQgRATgRAQQgRAJgSAOIgGAEQgeAPgfACIgcgKg");
	this.shape_404.setTransform(939.165,447.2125);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFC892").s().p("AHRK7QgygdghgkQgagbgKgUQgLgSgHgTQgMgYgGgbQgGgKgCgWIAFgMIAFgVIABgKQAMgigDgpQgDgjgMgqQgKgfgOghQgrhihEhSQgqg0g0gtQgdgagegWQhWhAhlglQg9gXhBgMQgrgHgpgCQg0AAgxAHQgwAAg8AIQg1AHgxAFIgvAGIhOALQgnAGghAHQgcAFgXAHIgCAAQgpgEgfgOIgQgIQgsgXgcgrIgDgEQgfgvgDg2IAAgBQgDg2AYgyIADgGQAYguAngeIAMgHIANgTIBHgSIAHgCIAzgOIARgQQAbgYAkgUQAOgIAPgGIAxABIBdgCIAwAAQBlABBzANQBgAJCKAXIAcAFQCNAYB8AQQBEAJBXAJIALACQA8AFBhAMIANACIBzANIApADQAlACAigBIAZgCIArAIQA7AKAuAKQAyANAqASIAEABQA0AaAoAkQAiAlASAgQAKAWADAQQACAHAAAFQAAAKgDADQABAHgBAEQABASgJAIQgBADgDABIgFAEQAEAEgPACIgGAOQgOAkgcA7IgGANQgcAxgOAwIgFATIgEAUQgEAKgCAbQgIAqgUAiQgOAXgQATIgGALQgJAdgMAWQgSAjgbAWIgKAHQgKAIgMAHIgPAOQgLASgaALQgSAbgTAYQgeAwgfAnIgZAgIguA2IgbAgIgKAOIAAAAIgXAlQgLAIgJAXIgEAFQgTAWgUANIgZgOg");
	this.shape_405.setTransform(931.5883,438.325);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFC892").s().p("AIjJIQgvgigegeQgcgbgKgPIgWggQgPgXgLgXQgIgLgGgQIgGgOIgKgWIgFgLQgGgjgPgnQgOghgWgkQgRgbgUgcQg/hThUg9Qg1gog7ggQghgRgigOQhhgphogNQg/gIhBADQgsACgmAHQg0ALgpAUQgsAHg6ARQg0AQgqAKIgsAMQgnAJgjAGIhGAKQgaAEgYABIgDAAQgmgGgegOIgPgIQgqgXgbgpIgDgFQgdgsgEg0IAAAAQgEgzAUgxIADgGQAVgsAkgfIAKgIQAHgJAJgIQAcgNAlgNIAGgDIAxgQQAEgKAGgKQARggAegcQALgKANgKQAWACAZgBQAeAAA7gEIAugCQBjgGBtAFQBkACB8APIAbADIEAAgICUAUIAKABQAvAGBoAQIANACIBvAPIAnAEQAjADAiACIAYAAIAoAGIBnAPQAwAHAtAKIAEABQA1AOA0ATIBVAjQAZALAXAIIATAGQAQAEAMABIARAEQAWAOAMAKIAKAGIAMAJQAOAIADAIQAFAIADAJQASAqgHBBIgBAPQgKA0gRAxIgFAQIgGAUQgHAMgHAVQgQAkgcAcQgTATgVAOIgKAIQgQAZgSARQgbAbgiAMIgMAEQgLAEgOADQgLADgLABQgPAIglAAIg0AjIhQBDIgdAbQgbAZgUAXQgOARgKAQIgIAOIAAABQgIASgEAWQgFAGgBAgIgCAFQgGAegKAXIgXgQg");
	this.shape_406.setTransform(932.8556,429.0435);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFC892").s().p("AHeF2Qg+hIgigiQgTgUgTgPQgohHhCg/QiWiSjXg2QjVg1jOA3QhrAcg5A2QgoAPg4AaQhYAqgnAOQhJAbhBABQhMABg4ghQgqgZgbgrQgagpgFgxQgFgwARgwQARgvAjgiQAjgiA6gaIAugSQADg0AegwQAJgOAKgMQAVACAYgBQAhAABggMQDDgYDcALQC/AJDeAlICbAbQBgARA9AJQCRAUCwAIQCAAFDDAAQBMAAA2gGQA+APAmAQQA6AXAlAkQAzAwAOBIQAPBIgcA/QgcA/g/AmQgfATghAIQg2AyhGAFQgfADgogIQgSgDgxgMQhrAZhbBAQhAArgLAvQgEATADAaIAHAsQAHApAAAkQhxhigTgUg");
	this.shape_407.setTransform(938.1155,419.2271);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFC892").s().p("AIWGBIg1gsIgYgXQgkgpgkgaIgIgGQgTgSgVgNQgOgVgSgTQgmgrgtgmIgFgEQh7hkidgvQgqgNgrgIQh0gVhsAKQgyAFgyANIgKADQgnAHglAMIgKADQg3ATgpAbQgeAPgYAVIgCABQgfANgjASIgaAPIgDACIgbAQQg5AgghAPIgIADQg5AWg2AFIgRAAQgzABgqgPQgVgIgSgLQgegSgXgbQgIgLgIgMQgZgpgGguIAAgDQgFgwAQgvQAEgOAGgNQAPgfAYgZQARgSAWgPIALgIQATgLAVgLQAIgFAjgQIADgOQADgXAKgaQAIgTALgSIAIgMIAKgOQAUAAAXgDIAhgEIBegQQAzgIA3gGQBdgKBrgEQA1gBA0AAQAzAAAyADQBjADBmALQA2AGA4AIQAhAEB5AVICLAWIASACQBTAMBjAJQBEAGBGAEIBFADQBdAEB4AAIAoAAQBJABA6gGIAmAJQAkAJAaAIQAVAHASAIQAiAPAZASQANAJALALQAiAmAOAzIACAFQARBCgVA9IgCAHQgWA7g2AoIgHAEQgaASgbAKQgfAdglAOQgaALgcADIgOABQgZAEgegEQgUgBgugJIgUAFIhDASIgPAFQgfASgfAUIggAVQgbATgUASQgYAYgJAWIgBADIAAABQgFANABAQQgCACAEAgQACAVgBAUIgCARQgwgqgigcg");
	this.shape_408.setTransform(937.8258,418.1688);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFC892").s().p("AIaFgQglgegSgLIgagVQgfgigvgaIgIgFQgTgPgWgNQgQgSgUgSQgrgmgtghIgFgDQiChYidgmQgqgJgrgGQh2gOhmASQgwAJgwATIgKACQgmAIglANIgJAEQg1AUgnAfQgeAQgaAUIgBABQghAOgfASIgZASIgDACQgMAIgMALQgzAigjASIgIAEQg3AYg2AFIgSABQgyAAgrgPQgVgIgSgMQgegSgWgbQgJgLgHgLQgZgpgGgxIAAgCQgFgwAOguQAFgOAGgNQAOgfAWgaQAQgSAVgRIALgIIAngXQAJgIAggQIACgOQAEgUALgcQAHgUALgSIAIgMIAKgNIAqgIIAfgGQAkgJA5gMQAygLA2gIQBZgMBvgJQA1gEAygCQA0gCAwAAQBlgBBkAIQA1AEA4AHQAoADByATICLAVIARACQBQAMBnALQBFAHBFAEIBEAEQBdAEB4ACIAoAAQBFAAA+gFIAmAHQAlAIAaAHQAWAFASAHQAiALAaANIAZAPQAlAjARAvIACAGQAXA+gPA+IgCAIQgQA8gxArIgGAFQgXATgbAMQgdAdglAQQgZALgcAEIgOACQgZAGgdgBQgVACgsgHIgUAFIhDAOIgPAEIg7ApIgfAVQgcATgVARQgYAVgNATIgCACIAAABQgGAIgBALQgEgCABAZQgBANgEAOIgEAMQgwgqgjgbg");
	this.shape_409.setTransform(937.645,416.8194);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFC892").s().p("AIdFCQgjgbgXgMIgbgTQgagbg5gZIgJgFQgTgNgYgLQgSgQgWgPQgwgigsgcIgGgDQiHhNidgbQgrgHgqgDQh4gHhiAbQgtALguAYIgKADQgmAJgjAQIgKAEQgyAXgmAhQgdAQgbAUIgBABQgjAPgcATQgLAIgMALIgCACQgLAJgMANQgtAlgkAVIgIAEQg1Aag3AFIgSABQgxABgsgQQgUgIgSgMQgegSgWgcQgJgKgHgMQgZgpgGgwIAAgCQgFgwANgvQAEgOAGgNQANgfAVgbQAPgTAUgRIALgIIAmgZQALgKAbgRIADgNQAEgSALgfQAIgUAKgRIAIgMIAKgNIAogNIAfgIQAkgMA2gOQAygNA2gKQBUgOBygPQA1gGAygEQA0gFAugBQBmgGBiAFQA1ACA5AGQAtACBsARICLAUIARACQBNALBqANQBGAIBDAFIBDAFQBeAFB3ABIAoAAQBCABBBgEIAnAGIBAALIAoAJQAjAIAbAIIAaAJQAnAgAVAtIADAFQAbA7gIA/IgBAHQgLA+gsAuIgFAGQgVAVgZAOQgdAdgkARQgZAMgcAFIgNACQgYAJgcACQgXAEgpgEIgUAEQghAGgjAEIgPADQgaAWgeAWIgfAWIgyAiQgZATgQAPIgCACIgBAAQgHADgDAGQgGgFgCARIgLAOIgGAGQgvgpglgag");
	this.shape_410.setTransform(937.5328,415.2114);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFC892").s().p("AyJFsQgUgIgSgMQgdgTgWgbQgJgLgHgLQgYgpgHgxIAAgBQgGgwANgwIAJgbQAMgfAUgcQAOgTASgTIANgIQASgMASgOQAMgMAXgSIAEgMQAEgRAMggQAIgUAJgRIAIgLIAKgOIAngRIAdgLQAlgPA0gPQAwgPA2gNQBPgQB2gVQA2gIAwgGQA1gIAtgDQBngLBfACQA0ABA6AEQA0ACBlAOICKAUIASACQBKALBtAOQBHAJBBAGIBDAFQBdAGB3ACIAoAAQA/ABBFgDIAnAEIBBAIIAoAGIA/AIIAbADQArAeAZApIADAFQAgA3gDBAIAAAIQgEA/gnAyIgFAFQgTAXgXARQgcAdgkASQgZANgbAFIgOADQgXALgbAFQgYAHgngCIgTAEQghAFglACIgOAAQgYAagcAWIggAXQgaASgZAOIguAcIgCABIgBAAQgIgCgGACQgHgIgEAIQgJgBgJACIgJABQgtgqgngZQgigYgagMIgcgQQgVgVhEgYIgKgEQgTgLgagLIgrgaIhhg1IgGgCQiOhBidgRQgrgEgqgBQh6AAhcAiQgrAQgsAeIgKADQglAKgjARIgJAFQgwAZgkAlQgdAPgcATIgCABQgkASgZASQgKAIgLANIgCACQgJAKgLAPQgnAogmAYIgIAEQg0Acg3AGIgSABIgFAAQguAAgqgQg");
	this.shape_411.setTransform(937.5143,415.5187);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFC892").s().p("AyKGDQgVgIgSgLQgdgUgWgbIgPgWQgYgpgHgxIAAgBQgGgwAMgvQADgOAFgOQALgfATgdQANgVARgSIANgJQASgNARgPIAgggIAFgMQAEgOANgjQAIgUAJgQIAHgMIAKgOQAQgKAVgLIAdgOQAlgRAxgSQAwgRA1gPQBLgSB5gaIBlgTQA2gKArgFQBogQBdgBQA0gBA7ADQA5ACBfAMQBGAIBEAKIASADIC2AaQBJAKA/AGIBDAGQBdAHB3ACIAnAAQA8ABBJgCIAnADIBBAFIApACQAlACAcgCIAcgCQAuAbAcAmIADAEQAlA0AEBBIAAAIQACBCgiA0IgEAGQgRAYgWATQgaAdgkATQgZAOgaAGIgOAEQgWAOgaAHQgaAKgkAAIgUADQggAFgmgCIgOAAQgVAcgcAXQgPANgQALQgaARgbANQgbAOgXAIIgCABIgBgBIgSgLQgJgLgHABQgNgIgKgEIgMgFQgsgpgpgZQgggVgegMIgegOQgQgPhOgXIgLgDQgTgJgcgJIgvgWIhmgsIgFgBQiTg0ifgIQgrgCgpACQh8AHhYAqQgoAUgqAjIgKADQglAMghASIgJAGQguAbgjAoQgcAPgdASIgCABQgmATgWATQgJAJgKAOIgBACQgIAKgLARQghArgnAbIgIAEQgyAfg4AGIgRABIgHAAQgtAAgpgRg");
	this.shape_412.setTransform(937.6056,418.9681);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFC892").s().p("AyNGcQgUgJgSgMQgdgTgVgcQgJgKgGgLQgYgpgHgyQgGgwAKgwIAIgbQAKggARgeQANgVAQgVIAMgHQATgOAQgPIAdgkIAFgLIASgxQAIgVAIgQIAHgLIALgOQAOgNAVgNIAcgPQAlgVAwgTQAugUA1gRQBGgVB9gfIBkgXQA3gNAogHQBqgUBbgFQA0gCA7ABQBAABBYAKQBDAIBGAKIASACIC3AcQBKALA9AHIBCAGQBdAIB3ADIAnAAICFAAIAnABIBDACIApgBQAlgBAdgHQAQgDANgFQAxAYAfAjIAEAEQArAxAJBCIABAIQAIBDgdA4IgEAHQgOAagVAUQgZAdgjAUQgZAPgaAHIgOAEQgWAQgYAKQgbANgiADIgUADQgfADgngEIgPgCQgSAegcAZQgOANgQAKQgaASgcALQgcALgbAFIgCAAIgCgBIgUgUQgMgPgKgHQgPgPgOgKIgNgKQgsgqgrgYQgegSgigMIgggLQgKgIhZgXIgLgDIgxgPIgzgRIhqghIgGgBQiZgpifACQgsABgoAEQh+APhTAyQglAXgoApIgLADQgkAMggAVIgJAGQgsAdghArIg6AgIgCABQgoAVgSATQgJAJgIAQIgCADIgPAdQgcAugpAeIgHAFQgxAgg4AHIgSABIgFAAQgtAAgrgRg");
	this.shape_413.setTransform(937.793,422.3744);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFC892").s().p("AyQG1Qg2gXgjgtQgkgwgJhBQgIg+ASg9QAQg3AkgzIAMgJQAsgfAWgwIATgwQALgfALgRQAUgeAzggQBMgwBqgmQBBgXCAglQB9gjBEgQQBsgZBYgIQChgPDvAkQBDAJCFAWQB4ATBRAIQBdAJB2ACQBHACCNgBQBGAAAngFQA5gIApgWQA3AXAkAiQAyAwAPBIQAOBIgcBAQgcA/g+AlQggATggAIQg3AyhFAGQgfACgogHIgPgDQgQAhgbAZQgkAjgxAQQgfAJgfABIgBgBQgzhDgigjQgzg1g1gbQgogWg8gOIhogXQgegGhXgVQhJgRgtgIQifgcifALQi8AOhlBNQgjAbgmAuIgLADQgoAPgjAbQgqAggfAuIg7AfQgrAXgQATQgIALgIATIgOAgQgXA0gwAjQgvAjg5AGIgZACQgrAAgqgSg");
	this.shape_414.setTransform(938.0743,425.6864);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_385}]},54).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[]},1).wait(386));

	// Vrstva_29
	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFC892").s().p("AumYdQhSgYg5g6QhAhCgXhiQgWhdAWhfQAmipCbiVQA8g5BWg+QAqgeBzhMIBdg8QA1ggAtgTQBzgzBkANQBIAJA+ArQA+ArAiBAQAiBAABBMQABBLggBBQgzBmiRBWIh5BDQhJAogsAhQgqAfgRAeQgJARgHAZIgMAsQgYBOg+A7Qg+A7hPAUQgkAJglAAQgsAAgtgNgAGOnJQhMgYgzhJQgwhFgJhWQgIhKAShZQANhBAhheQAkhkAfg7QBJiECGhiQB8haCdguQBjgcBBAKQBEAMAzA1QAzA0AKBEQAKBFghBBQgiBBg9AgQgcAOgtAMIhMAUQg1ARgpAcQguAggZArQgMAUgOAlQgQArgIAPQgGAPgPAcQgLAZgBAUQAAAOAGATIAKAhQAPA4gPA7QgQA6gqAoQgpApg7AOQgbAHgaAAQgfAAgegJg");
	this.shape_415.setTransform(927.2024,547.0258);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFC892").s().p("ApYTtQgPgBgPgEIgVgHQgRgGgTgLIgMgHQgzgegmgfIgNgMIgJgIQgxgvglg8IgMgWQgTgjgOgmQgMghgJgiQgYhbAJhPIAAgBQAEgrANgpQAIgZALgXIAAgIQgBgYAEgQQAKghAlgjQAvgsBOgmQAtgXBdgoIAtgVIABgOQAlgJAmgLQAqgKA1gVQA8gVBCgfQAxgYAqgWIAmgWIADgCIgKgLIgMgNQAxgPAfgMQBFgcAsgmQAjgdA0hGIA8hSQAggvAVgoQAOgcAUgwIAhhNQARglArhNQAphKASgpQA7iEgRhoIAWgQQAsgiAugzQBDhEBJhZIAqgxQAQgTALgLIAHgJIAFgBQAVgHATgEQAZgEAXACIAKABQAhAGAYAUQAMAJAJAKQAJALAFAMQAIAQACARIACARIAAAPQACAxgMAxQgHAbgLAaQgKAagPAaQgJAPgKAPIgeAlIgXAZIgGAFQgZAZgZAWQgiAbgYAXIgQAOIABABIADACQAIAKABATIABADQABAOgFAOIgGASQgIAQgLAQIgDADQgNANgHAMIgDADIgyA1IgoArIgsAuIg2A5IgGAGQgTATgOASIgRASIgQASQgRAVgQASIgHAJIgiAqQAWALAQAUQALAMAHANQAGALAEAMIAAACQAGASgBAUQACAQgEAUQgGAygSA0IgBADQgVA6gjAzIgXAeIgKAMIgYAaIggAdIg2AvQgjAagYAZIgRAPIABACQAKANACAXIABAEQAAAKgBAJQADAOgMAUQgGARgOAUIgDAEQgJAOgOARIgXAaIgdAhQgtAwgrApIgEADIg9A4IgYAXIgMAOQgMANgKAOIgKANQgMAOgMARIgIALQgaAogwA0IgDAEIgwA7IgJAMQgIALgHAMQgKAPgIARQgIANgHARIgNAZIgDAGQgIAPgLAPIgHAKQgXAggiATQgVALgXAFIgCAAQgPADgQAAIgOgBg");
	this.shape_416.setTransform(899.8356,579.075);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFC892").s().p("AlBO2QggAAghgOQgSgGgZgRIgQgJQg/grgtgiIgRgPQhFg8g1hOIgRgZQgwhMgghbQgphzADhcQAAg2APgyQAOg1AdgqQAegsAugiQApgfAzgWIADgBQAugUA3gMQAsgKA2gGIAGAAQAXgGBKgEIgNgZIgFgKIgOgfQBwACBwgWQCRgcCFhCQBWgqAxguQAxgsAyhSQBPiABSjUQAOgjAFgTIAEgRIAGgDQAZgNAYgGQAogMAjAGQArAGAcAeQAOAOAIAPQAJARADASQAEAXgHAZQgDATgLAaQgaBBglA9QgpBBg5A5IgiAfIgxAnIgsAfIhIA1QgwAfgXAeIgTATIAFACQAmALAaAhIAFAGQAcAkACApQACAbgJAdIgCAGQgFAVgOAbQgVAqgaAqQgpBDg2A6QgmAogsAjIgyAoIg0AnQgaAUgaAWIhqBoIgFAFQgtA0gVAnQgIAPgFARQgIAWgFAZQgFATgCAcIgDAoIgBAIQgBAYgFAbQgMBEgpApQgWAVgcAMIgBAAQgbALgZAAIgDAAg");
	this.shape_417.setTransform(875.7655,611.3121);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFC892").s().p("AizKLQgjgJgjgcQgWgSgjgnQhBhGgjgsQhThlg/hxQgvhUgmheQgzh+gGhaQgFg6ANg2QANg6AfgsQAgguA1ghQAxgeA7gPQA1gOA/gCQAzgCBDAGICQAPQBYAJA4ABQCqADBvg+QATgLAngbQAmgaAWgMQBKgpA8ASQAtAMAaAtQAaArgJAvQgGAegVAfQgOAWgdAgQiSCjiYBtIg3AoQghAXgWARQhTBDhKBsQgrA/gMAvQgKAmABA5QABAgADBBQACB8g8A2QgYAVghAIQgQAEgRAAQgPAAgPgDg");
	this.shape_418.setTransform(853.4078,644.7197);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFC892").s().p("AihJRQgvgIgxgVIgOgHQgxgQhCgyQgZgQgYgTIg1gpQhAg5gjgnIgJgKQgzg9gdgtQgog3gWgtIgJgQIgBgDQgbgRgagXQhHhAgVhYQgVhZAhhaQAhhaBJg2QBqhPCuADQBeACBsAaQBSATByAnQAsAPAhAOQBRgEAugIIAMgCQBIgSBGggIAMgGQBOglBSgwQAtgcASgCIAZgKQAUgHASgEQA7gNA/APQAOADANAEQAvAQAnAfQAlAdAZApQAKAPAIAQQAcA8AABAIgDAhQgDAhgMAhQgQAvgeArIgPAVQgWAcgdAcQgfAfgvAiQg9Aug/AlIgiAZQgUAPgpAXIhdA0IgHAEQg0AdgjAYQghAXgSAWIgDACIgDAKQgMAbgOAaQgPAbgQAYIgUAfIgMARIgUAZIgRAUQgYAagfATQgyAeg5AGIgOABIgMAAQgqAAgkgMg");
	this.shape_419.setTransform(855.1509,638.9978);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFC892").s().p("ABkJ7QghgGgZgSQgQgMgUgZIghgnQgOgPgWgQIgmgbQhSg9hXhdQg1g6hhh2Iibi9Qg8hKgbgoQgthBgVg8QgZhHAHhHQAIhNAsgzQArgyBHgVQBAgTBKAIQA6AHBLAYQAsAPBWAgQEMBfEcAOQAZACAPgBQAVgBARgGQASgGAZgRIApgbQAggUAigEQAmgFAdAQQAtAYAWBIQAWBCgNAwQgKAjgdAiQgRAVgpAkQiaCIiQCeQguAygWAjQggAygGAvQgEAiAOBcQAMBPgQAsQgLAdgXAXQgYAXgeAJQgUAGgUAAQgLAAgKgBg");
	this.shape_420.setTransform(828.7421,644.7427);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFC892").s().p("ABVKEIgJgBQgQgCgTgIQgdgRgPgBIgCgBIgqgQIgvgUIgcgOQg3gegwgvQgjgdgjgjIgegeQgngqg8hHIgrgyIgvg4Qg3hBgmgvIgjgsIg7hKQgYgdgQgXQgagigRgdQgYgmgOgkQgMgbgGgbQgNg0AEg0QAFg4AXgtQAMgYARgUQAUgYAagSQAkgaAtgNIAWgHQA2gMA7AGIATACQAtAHAxARQAYAJAbANIBAAgQAkAUAlARQAYANAVAIQA0AXA7ASQA0APBAAPQBPATA/AHQBbAIBdgQIAPgDQAYgDASgGQAVgFATgKQAUgKAagSIAagUIARgNQAegVASgGIAUgIQAagJAXAAQAMgBAMACQAsAGAlAkIARARQAhAmAPAnQAEAKACAKQAIAigKAnIgGARQgFAYgPAdQgMAagPAbQgYAqggAqQggAoglAoQgjAjgoAmIhDA+IgJAIQguArggAgIgdAhQgTAegQAdQgIAOgHAWQgCAZgcA0IgDAJQgTA3gVAkIgHAMQgQAZgRAVIgCAEIgEAGQgPAcgWAUIgGAEQgZATgdAIIgWAEIgTABIgSgBg");
	this.shape_421.setTransform(834.3949,638.5902);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFC892").s().p("AgBKjQgYAAgagEQgfgFgZgHQgRgFgQgHQhDgag0gzQgpgdgpglIghghQgqgrhHhRIgwg3Ig1g9QhDhPgjgsIgmgwIhChTIgug5QgfgogTgdQgdgpgSgnQgPgegHgdQgRg5ADg7QAFg+AagzQANgaATgXQAVgaAdgUQAogeAxgQIAagHQA8gOBBAIIAVADQAzAJAyAXQAaALAeASQAdASAmAZQApAcAjAWQAbARAUAKQA2AcBEAXQAzAQBPAUQBcAZBAAEQBiAFBngmIARgHQAXgIAVgKQAVgKAVgNQAYgPAZgUIAbgWIATgOQAlgeAMgFIAVgNQAcgPAYgGIAagGQA0gIA1AUIAYAKQAyAXAiAmIAPASQAaAjAJArQACAJABAKQAHAfgDAhQgBAhgKAjQgOAzgeA0QgeAxgpAtQglApgwAnQghAdguAjIgLAJIhfBJIgmAeQgZAdgaAcQgPAPgQASQgGAOg/A2IgHAIIhQBSIgKALQgYAZgPAYIgDADIgCAIQgJAjgTAeIgDAGQgWAegbAUQgKAIgLAGQgTALgTAHIgLAEQgTAHgWADQgfAAgYAEIgCAAg");
	this.shape_422.setTransform(842.0501,634.4795);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFC892").s().p("AiwLHQhPgWg5g4Qg/gohChAQgtgshRhbIhvh/QhRhcgggpQhLhigngvQhLhZgiguQg7hRgXhGQgVg/AEhBQAEhEAcg4QAfg+A6gsQA5gqBFgRQBDgQBHALQBGAJA/AhQAyAbBQBAQBXBHAoAYQA5AiBNAcQAyARBcAZQBrAeBAABQBpACByg7QBYguBmhZIBGg7QAoggAjgSQBJgkBVAEQBVAFBEAsQBEAsAnBMQAmBMgFBRQgEA+gdA+QgbA4gtAzQgnAtg3AsQgpAghAAqQhVA5hLAqQgvArhDAoIh4BDQhJAogsAgQgrAggRAeIgCADQgCAwgRAsQgVA7gsAuQgYAagcASQg1Apg/AQQgkAJgkAAQgsAAgtgNg");
	this.shape_423.setTransform(851.4589,632.3591);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFC892").s().p("AhRLtQgzgDg0gTIgGgDQgdgNgbgSQgmgXghgiIgEgDQgggXglggQgegbgfgeQgsgshDhLIgSgUIgeghIghgiIgUgYIghglIhDhPQgegkgSgYIgng5IgMgSIgZgeIgnguIgJgMQhChQgjgzQg5hSgZhLIgJgfQgNgzABgxQACgzAPgsQAGgQAIgQQANgaATgWQAbghAkgYIAEgDQAkgWAngLQAZgIAcgDIAegCQA1gCA3APIAWAGQA2ASAzAiIAMAIQApAdA9A6IAJAIIAbAYIAcASIAtAcIAfAYIAXAPQAyAgA7AYIAIADQAzAVBVAZQAhAKAeAHQA4AOArAEIANABQAUABAUgCQAYAAAZgDQBHgHBDgcIAIgEQBPghBZhEIAagUQA7gxAPgLQAdgYAbgRIAVgNQAcgQAXgHQAmgPAogEIAcgCQA5gBAzARQAbAJAYAOQAlAVAdAeQAdAdAVAlQAOAbAKAbQARA0gCA3QgBARgDAQQgGAvgWAvIgGAMQgYAwgmAsIgGAHQggAlgrAkIgXASQgcAVgnAcIgpAbQgyAigvAcQgiAWghAUIgiAbQgfAYg3AgIgLAGIhrA9IgEACQgkAVgbAUIgDADQgYAUgUATIgMAMQgdAdgQAaIgCAEQgCAOgEANQgIAcgMAZIgDAJQgYAvgnAlIgOAMQgaAXgeAPQgWANgYAJQglANgmAEIgdACIgWgBg");
	this.shape_424.setTransform(848.8818,628.3876);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFC892").s().p("AguMMQgagBgZgGQgygIg0gZIgFgEQgbgSgZgUQgkgbgjglIgDgDQgfgXgngkQgfgdgfgfQgvgxhDhJIgSgUIgggiQgRgSgRgQIgVgYIghgnQgqgwgaghQgeglgTgbQgVgggRgdIgKgTIgcgcIgogxIgKgNQhAhPglg5Qg3hUgbhPIgKggQgOg1AAgxQgBg1AQgtQAGgRAIgQQAOgaATgXQAdghAngWIAEgDQAmgUApgHQAbgFAcAAQAPAAAPABQA2AFA0AWIAWAIQAzAYAxAoIAMAKQAmAgA6BBIAJAIIAZAbIAfAOIAwAZIAfAbIAWARQA0AmA3AaIAIAEQA1AaBVAaQAhALAgAIQA5APAsAFIAPABQAUABAUAAQAYABAagBQBNAABCgWIAJgCQBUgbBehCIAcgUIBNg9QAegYAcgTIAUgNQAfgVAVgHQAmgSAmgGQAOgDAPgCQA6gFA2APQAcAHAaANQAnATAgAdQAeAdAXAlQAQAaALAcQATA2gBA3QAAASgCARQgHAxgWAwIgFAMQgZAygoAuIgGAHQghAlgsAkIgXASQgeAXgoAcIgqAdQg0AigxAdQghAXgjAVIgjAbQgbAVg/AkIgMAGQgqAXhDApIgDABQgmAXgZAWIgCADIglAuIgMANQgaAggSAcIgDAEQgDANgFANQgLAbgPAZIgFAHQgcAugrAgIgQALQgdATggAMQgYAJgZAGQgfAGgeAAIgQAAg");
	this.shape_425.setTransform(846.3267,624.47);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFC892").s().p("Ag9MqQgagFgYgKQgzgOgzgdIgFgGIgxgtQghgfgkgnIgDgDQgdgYgpgoQgfgeggggQgzg2hBhIIgTgUIghgjQgTgSgSgPIgVgZIgigoQgrgzgaghQgegmgTgdQgVgigQgeIgJgUQgQgOgOgPQgVgYgUgaIgLgNQg+hPgnhAQg2hVgdhUIgKghQgQg3gCgxQgCg3AQgtQAGgSAIgRQAOgaAVgXQAfgiApgUIAFgCQAngSAsgDQAcgDAcADQAQACAPADQA1ALA0AdIAUALQAxAdAvAwIALALQAjAjA4BHIAIAJIAYAdIAhAMIA0AWIAeAeIAWASQA1AsA0AbIAIAFQA2AeBWAdQAhALAhAKQA8AQAsAGIAPABQAVACAUAAIA1AEQBSAHBBgQIAJgCQBagTBihAIAegUIBSg+IA6gtIAVgPQAigYAQgGQAngWAmgJIAdgHQA6gJA6ALQAdAHAbALQApASAiAcQAiAcAYAlQARAaAMAdQAWA3AAA4QABASgDASQgFAygWAyIgGANQgaAzgpAvIgGAHQghAmgvAmIgYASQgeAYgqAcIgrAdQg2AkgyAdQggAYglAXIgkAbQgXARhIAoIgMAHQgyAbg9AnIgCABQgnAZgXAYIgDADQgPAbgQAZIgKAPIgrBAIgDAEQgFANgGANQgPAbgSAXIgFAHQgiArgvAcIgSAJQggAQgiAIQgZAHgaACIgTAAQgfAAgdgGg");
	this.shape_426.setTransform(843.7427,620.7229);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFC892").s().p("AAFNYQgrgDgngNQgagKgXgOQgygTgzgiIgFgHIgtg2IhEhLIgDgDQgbgZgrgsIhAhBQg3g6hAhHIgUgVIgigjQgUgSgTgOIgVgbIgjgoIhHhXQgdgngTgfQgWgkgOgfIgJgWQgQgNgPgQQgWgXgVgcIgLgOQg9hOgohHQg0hWgfhZIgMgiQgRg6gDgwQgEg5APguQAGgSAJgRQAPgbAWgXQAhgjAqgRIAGgDQApgQAvABQAcAAAdAGIAgAJQA1AQAyAkIAUAPQAuAiAtA3IAKAMQAgAmA2BOIAHAKIAXAeQASAEARAGQAdAIAaALIAeAhIAVATQA3AyAxAeIAIAFQA4AjBVAeQAiAMAjALQA9ASAtAGIAQACQAVACAUAAIA3AJQBYANBAgJIAJgBQBfgMBog/IAegTQAzgkAkgbIA7gvIAVgQQAlgcANgGQAngaAlgMQAPgFAPgDQA6gOA9AJQAfAFAcAKQArAQAlAcQAkAbAaAlQASAaANAeQAZA3ABA6QABATgCASQgFA0gWAzIgHANQgaA2gqAvIgGAHQgiAngxAnIgYATQggAYgrAdIgsAeQg4AkgzAdQggAbgmAYQgSANgUANQgSANhSAuIgLAHQg6Afg3AkIgCABQgoAcgVAaIgCADQgLAegOAdIgJAQQgVAkgWAgIgDAEQgGANgIAMQgSAbgVAVIgGAHQgnApg0AYIgTAHQgiANgkAEQgUADgUAAIgOgBg");
	this.shape_427.setTransform(841.1469,617.0675);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFC892").s().p("AgIOAQgtgJgngTQgbgNgXgSQgxgZgygoIgFgIQgUgfgWgeQgdglgmgsIgCgDIhHhJIhAhEIh7iEIgUgWIgjgjQgVgTgUgNIgWgcIgjgqQgug3gagiQgdgngUgjQgVgjgNgjIgIgXQgRgNgQgQQgWgWgXgeIgMgPQg6hOgrhNQgzhYghhdIgLgjQgTg8gFgvQgFg7APgwQAGgTAJgRQAPgbAXgXQAjgkAtgPIAGgCQArgOAxAFQAeADAdAJQAQAFAQAHQA1AWAxArIATARQArApArA9IAKANQAdAqAzBVIAHAJIAVAhIAmAHQAeAGAcAKQANARARATIAVAVQA4A4AtAfIAIAGQA5AoBWAgQAiANAlALQA+ATAwAIIAPACIAqADIA4AMQBeAVA/gDIAKAAQBkgGBsg8IAhgUQAwgfAqghIA9gxIAVgQQAnghAKgFQAogdAkgPQAPgGAPgFQA7gSBAAHQAgADAeAJQAtAOAnAbQAmAbAdAmQATAZAOAeQAbA5ADA7QABATgCATQgEA2gXA1IgGANQgbA2grAyIgGAHQgkAogyAnIgZAUQggAYgtAeIgtAfQg6Alg0AdQggAcgoAaIgnAaQgOAJhaAyIgMAHQhBAkgyAiIgBABQgpAdgTAcIgCADQgHAigMAgIgIASQgRAngYAhIgEAEQgIANgJAMQgVAagZAUIgGAGQgtAng3ATIgVAHQglAJgmAAIgFAAQgaAAgZgEg");
	this.shape_428.setTransform(838.5712,613.5115);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFC892").s().p("AgVOmQhQgXg4g3QgxgfgxgtQgTgngYgmQgbgpgnguQgYgcgxg1Ii/jOQgkgngVgTQgWgTgVgNIgWgcQhLhZgiguQg7hQgXhGIgHgZQgSgNgRgQQgbgagggqQiBiwhFjRQgUg+gGgvQgHg9APgxQAQgyAngmQAngmAzgNQAugMAzAJQAvAJAtAYQBAAjA3BAQAtAzAuBNQAaAtAxBcIAaAtQAUABAUADQAfAEAeAJQATAbAfAjQA/BEAtAhQBSA+CHArQA/AUAyAIQAeAFAdACIA5AQQBsAeBAABQBpACByg7QBYguBmhZIBGg7QAoggAjgSQBJgkBVAEQBVAFBEAsQBEAsAnBMQAmBMgFBRQgEA+gdA+QgbA3gtAzQgnAtg3AsQgpAghAArQhVA5hLAqQgvArhDAoIh4BDQhJAogsAgQgrAggRAeIgCADQgCAwgRAsQgVA7gsAuQgYAZgcATQg1AphAAQQgkAJgkAAQgsAAgsgNg");
	this.shape_429.setTransform(835.973,610.0993);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFC892").s().p("AgkPBIgHgDIgVgHQgygUgogiIgSgQIgLgKQgUgPgVgSIgrglIgBgCQgNgagPgZIgMgTIgEgGQgWgfgeglIgFgHIgLgLIgLgOIgFgGIg1g/Igzg7IhAhGIgpguIgUgWIgLgMIgdgdIgZgbIgDgCQgVgUgTgPIgWgcQgigpgZghQgdgmgTgbQgggugWgrIgKgXQgKgTgIgUIgCgCIgBgDIgGgSQgRgOgQgSIgUgXQgRgVgRgaQgdgrgZgrQgig9gdhCQgbg9gWhHIgHgWIgIgaQgOgzgGgoIgCgTIAAgBQgCgoAHghIAFgVIAFgPQAFgOAIgNQANgeAWgZIAGgGIALgMQAKgNAMgJQATgSAYgLQAQgIASgFQAagHAcgBQARAAARACQAdADAdALQAPAFAOAHQAoASAlAfIAUATQAWAWAWAcIADAEIAUAZIAQAVIAKAWIAMAeQALAWANAeQANAeALAWIADAHIAAABIAEAIIATAlIAhAMIAPAGIAlASQAOAWATAXIAPASIADADQAeAoAcAiIAgAiQBJBMB0A4IAzAZIAzAUQAcAKAbAHIA0AVQBdAkBBAMIAIAAQBoAOBzgpQBEgYBMgsQAcgQAdgTQA6gqASgIQAdgTAagOIAXgMQAzgZAzgNQAagEAaAAQAdAAAcAEIAGABQAxAHAsAUQAaALAXAQQAeATAXAYIATAUIARAXQAcAhAJAjIAAACQAFAKACAHIABAEIAAAMQAAAfgGAgQgDAPgEAPQgFAQgGAQQgJAUgLAVQgLAUgNATQgLAQgMAPQgNAQgOAPIgWAXQgUATgWATQgWASgcAVQgSAOgVAOIgOALIgoAcQgjAXgkAWIgfASIgSALQgeAZgnAaIguAcIgPAJIhIArIgeARIgOAJIgoAZIgFADIgvAmIgGAEIgRAPQgbAZgPAWIgDAEIgFAVQgFARgHARIgNAeIgGANIgCAEIgJASQgOAZgSAXIgSAVQgQARgSAOIgTANIgHAFQgZARgbAMQgdANgfAGIgJACQgUADgUABIgPABQgxAAgvgQg");
	this.shape_430.setTransform(836.2528,606.6209);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFC892").s().p("AgzPgIgHgDIgVgIQgxgVgpgiIgRgRIgLgKIgogjIgpgnIgCgCQgNgZgQgZIgNgTIgDgFQgWgfgfgmIgGgHIgKgLIgMgNIgFgHQgVgdgcgkIgyg8Ig/hHIgpguIgUgWIgLgMIgcgdIgZgcIgDgCQgTgVgSgRIgWgcIg6hMQgbglgUgeQgegugVgtIgLgXQgLgSgJgSIgBgDIgCgDIgIgRQgPgQgPgTIgSgXQgQgXgQgZQgbgtgXgsQgfg9gahFQgXg7gUhMIgGgWIgHgZQgNg1gEgnIgCgTIAAgDQAAgnAKgiIAGgTIAHgPQAGgOAJgNQAMgdAUgbIAGgHIAKgLQAHgPAJgMQAPgVAVgQQANgKAQgIQAYgNAbgGQAQgEAQgBQAdgCAdAFQAPACAPAFQArAMAnAbQALAHAKAJQAZAVAWAbIADAEIAWAWIASAUIAFAWQADANAGARQAJAWALAgQALAlAIAPIACAHIABABIADAJIARAnIAbAVIAMAIIAfAaQAOAXASAXIAOARIADAEIAvBQIAbAlQBBBbBgBEIAtAiIAuAdQAaAOAZAMQAXAOAaANQBSArBFAUIAHACQBnAZB0gXQBIgNBPggQAfgMAegOQA4gfAagJIA6geIAXgLQA0gaAvgTQAZgFAbgBQAdgCAcABIAFAAQAzADAtAMQAcAHAZAKQAhANAbARIAXAOIAVARQAnAZAPAZIABACIAMAMIABABIACANQADAfgFAgIgFAeQgEAQgFARQgHAWgLAVQgJAUgNAVQgKAQgMAPQgMARgOAQIgVAXQgTAUgVATQgWAUgbAUIgnAeIgOALIgoAdQghAXglAXIgfATIgRALQggAYgoAYQgXAPgXAOIgPAIQgbATgqAZIgdASIgNAJIgoAbIgEADIgsAqIgGAFIgQAPQgaAZgRAXIgDADIgJAUIgQAfIgQAbIgIANIgCADIgJASQgOAagSAXQgJALgKAKQgQAQgSAOIgTANIgIAFQgZAQgcALQgdANggAFIgJABQgUADgUAAIgFAAQg2AAg0gTg");
	this.shape_431.setTransform(836.535,602.7107);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFC892").s().p("AAsQbQg4gBg2gXIgHgDQgLgEgLgFQgxgVgqgjIgPgQIgKgMIgogmIgognIgBgCIgfgyIgNgTIgDgFQgWgeghgmIgHgHIgJgLIgMgOIgFgHQgUgfgagjQgWgegagfIg+hJIgpguIgTgVIgLgMIgdgdIgYgeIgCgCIgkgoIgVgdQgggqgZgkQgZgkgUggQgdgvgVgtIgKgYQgMgQgLgTIgBgCIgCgDIgJgQIgcgmIgRgYIgdgxQgZgugVgtQgdg+gWhHQgUg5gRhRIgGgWIgFgZQgLg3gDgmIAAgBIgBgSIAAgEQACgnAMghIAIgUIAHgOQAIgOAJgMQAMgdASgcIAFgHIAKgNQAEgQAGgNQALgZARgUQAMgOANgLQAVgSAagMQAPgHAQgFQAcgIAeAAIAfACQAuAFAoAXQANAHALAIQAaASAWAbIAEAEQAMAIAMALIATASIABAWIAFAfQAHAWAJAiQALArAEAKIACAIIAAABIADAIIAQAoIAUAeIAJAMIAZAhQANAYARAWIANASIADADQARApAVAuIAVApQA4BqBNBQIAnAqIApAlQAXAUAXARQAWARAXAQQBKAyBIAdIAGACQBmAkB2gGQBLgDBSgSQAhgHAggKIBYgfIA8gZIAYgLQA2gZAqgbQAZgFAbgEQAcgDAdgBIAFgBQAzgCAvAFQAeACAbAFQAjAHAfAJIAcAJIAaAKQAxARAUARIACABQANAHAFgBIACgBIADANQAFAegDAhIgDAfQgCARgFARQgGAWgKAXQgIAUgNAVQgIARgMAQQgLARgOARIgUAYQgSAUgVAUQgVAUgaAVQgSAQgVAPIgOALIgnAfQgfAXgnAYIgfATIgRALQghAWgpAZIguAbIgOAIIhDAuIgcASIgNAKIgnAcIgDAEQgSAVgXAYIgGAFIgPARQgZAZgUAWIgCADIgOATIgUAcIgTAZIgJAMIgCADIgJASQgOAagTAXIgSAVQgRAQgSAOIgUANIgHAFQgaAPgdAKQgdAMghAEIgJABQgQACgQAAIgIAAg");
	this.shape_432.setTransform(836.8667,598.355);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFC892").s().p("AAbRFQg8gDg4gcIgXgKQgwgWgrgiQgMgOgMgQIgmgoIgogrIgggxIgOgTQgXgfgkgpIgHgIIgWgYIgEgIQglg+g0hEIg+hKIgoguIgTgVQgUgWgUgTIgYgfQhDhWgthEQg4hTgjhQIgKgZQgOgQgNgSIgCgDQgZglgagsQgohKgdhFQgZg+gThLQgRg3gPhWIgFgVQgNhJgCguIAAgBIAAgXQAEgnAPghIAJgTQALgWAQgSQALgcAQgdIAOgVQABgSAEgPQALguAegmQAegmAqgVQAqgVAwgCQAxgBArATQArASAgAlIAEAEQANAHANAJIAUARQgDAZABAdQAGAVAGAkIAMA1IABAKIADAJQARA5AQAlQAVAzAaAlIAQAVQAKApASA0QBBC4BZB8QBvCZCTBIQCnBTDfgTQB8gJBlgpQBHgdAugoQA1gMA4gIIAFgBQBUgLBNgBQAnABAiACQAiACAcAFQA9AIAaAIIACABQARAFAHgFIACgDQALAjAAApIgCAgQgCAogQApQgHAVgMAWQgQAigbAjIgTAYQgmAtgtAnQgTAQgVAQQgYAWgcAVQgeAXgoAaIgeATQgoAZg1AfIg8AjIhBAvIgnAcQgLAKgbAVIgDADQgPAXgXAaIgUAXQgiAlgfAfIgZAZQgSASgOAQIgCADIgKARQgOAbgTAXQgXAdgfAWIgcARQgaAPgdAJQgjAMgmADIgYABIgQgBg");
	this.shape_433.setTransform(837.2511,593.7174);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFC892").s().p("AgaRZIgYgFIgMgEQgsgMgpgYIgdgYIgKgIIghgbQgWgTgXgVIgYggIgNgQIgQgSIgtgyIgRgWIgGgIIgVgaIgFgIIAAgBQgYgngfgqIgSgYIgFgIIgPgWQgVgfgmgxIgRgWIgYgdIgTgWQgUgXgVgVIgNgSIgMgOQhEhXgwhKQg5hUgohUIgLgaQgNgRgNgUIgDgDQgSgdgSgeIgOgaQgphPgchHQgKgZgIgaQgOgrgLgyIgKgrQgKgqgJg+IgEgXIgBgMQgKhEgCgsIAAgYIAAgBIADgXQAGgbALgZIAJgQIABgDQANgWAQgTIAHgMQAIgXAMgZIANgWQACgSAEgRQAHgZAMgZQAKgUAMgTQAUgdAYgVQALgKAMgIQAhgYAmgKIAOgDQAugKAtAKIABAAQAvAJAlAfIAEADIAEACQAMAGAMAIQAMAIAKAJIAEAYIAGAcQAIAVAHAgIACAFQALAtABALIACAKIACAKIAUBPIAGAVQAPA1ASArIAKAXIAHAvQAFASACAiIACALQAGAkAIAfIAmB/QAYBIAdAzIABAEQAiA+ArA3IAJAKQAmAlAmAcQARAMAUAMQAUATAXASQAlAaAqAWQBoA2CFANQAgADAiABQBhACBZgUQAZgFAYgHQBJgXA2gkIA6gNIA2gLIAGgCQBUgRBPgMIAYgEIAxgGIA+gGQA3gCAcgCIADAAQAPABAHgFIADgDQAFAFADAHQAJAOAEAOIAEAQQACAKgBAKQAAAJgCAIIAAAIQAAATgEAWQgFAhgNAjIgBACIgLAbQgUAtgfApIgIALQgPATgRATQgPATgTASIgMANQgcAcgnAdIgIAGQgIAHgOAJQggAXgpAbIgTAMIg+AmIgPALIg3AmIgpAdIgoAdIgBABIgDADQgRAXgZAZIgWAWIgSARQgVAVgjAbIgcAYIgFAEIgfAcIgDADIgMAQQgSAYgSAVIgCACQgcAdgcAYIAAABIgEACIgSASQgSARgVAOIgGAEQgfAUgjAKIgYAGIgOADQgVAEgWAAIgHAAQgiAAgggIg");
	this.shape_434.setTransform(837.3917,589.3298);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFC892").s().p("AgESIIgMgBQgvgEgtgSQgRgIgRgLIgLgGQgSgLgSgMQgZgRgYgVQgOgPgOgQIgPgPIgSgRIgxgxIgQgYIgFgIIgUgbIgFgJIgBgCQgZgnghgrIgVgaIgEgIIgNgYQgUgkglgyIgRgXIgZggIgUgYIgpgvIgPgTIgLgPQhEhXg1hPQg6hXgshXIgMgZQgNgUgNgVIgCgDIgkg/IgOgbQgqhTgbhJQgKgbgIgbQgOgtgKg0IgJguQgIgpgIhDIgDgYIgCgNQgJhGgBgtIAAgBIAAgZIAAgCIADgXQAGgcAMgaIAKgRIABgDQAOgWASgTIAIgMQAIgZAKgaIALgYQAEgSAFgRQAIgbALgaQAKgWAMgUQATggAVgXIAUgWQAfgeAkgQIANgGQAtgTAvABIABAAQAzAAAqAZIAEADIAFACQANAFAMAIQANAIALAKIAKAXIALAbQALAWAJAfIACAGQALAnADAUIACAKIACAKQAJAqAFApIAEAXIASBnIAFAbIABAwQADAOgDAqIAAAMQAAAoAEAfIAUCHQAPBSAVAzIACAGQAZBBAoBAIAIAMQApApAkAaQATANAUANQAQAXAVAXQAgAhAoAdQBkBICGAcQAhAIAiAEQBiAMBfgNQAagEAagFQBLgRA/geIA7gPIA4gPIAGgBQBUgXBRgZIAYgHIAxgOIA9gTQAzgMAegNIACAAQANgDAIgHIAEgEIALADIAUACIAKABIAIABQADABADgBIACAHQAIATADAVQAHAggDAlIAAADIgCAdQgGAxgWAwIgGANQgLAWgOAVQgNAWgQAVIgMAPQgaAggkAgIgIAHIgWASQggAbgpAcIgUAOIhAAqIgPAKIg6AoIgrAcIgqAdIgCABIgDADQgUAXgbAYIgZAWIgUAPQgQAQgvAfIgeAWIgGAFIgjAaIgDADIgOAOIgqAqIgCACQggAdgYAaIAAABIgDADIgNAWQgOAWgSATIgFAFQgaAbggASIgXAMIgNAFQgUAJgWAFQglAKgmgBIgIAAIgQAAg");
	this.shape_435.setTransform(839.0579,585.2808);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFC892").s().p("AhVSyQgTgFgUgIIgMgFQgUgJgUgKQgcgQgZgUQgQgOgPgQIgRgOIgUgQQgZgWgcgaIgPgaIgFgIIgSgdIgGgIIgBgDQgagogkgtIgWgaIgEgJIgLgZQgUgqgigyIgSgaIgaghIgVgaIgpgyIgQgVIgMgOQhEhYg5hVQg6hYgxhbIgNgaIgagrIgCgDIgjhDIgOgdQgrhXgbhMQgKgcgHgcQgNgugKg3IgIgwQgGgogIhJIgCgYIgCgPQgHhJgBguIAAgaIAAgDIACgYQAHgdAOgaIAJgSIACgDQAPgXATgTIAKgLQAHgaAJgdIAKgaIAKgkQAJgbAMgcQAKgXAKgVQASgkASgaIATgZQAdgjAhgXIAMgJQAsgcAygHIABAAQA1gKAvAUIAGACIAEACQAOAFAOAIQANAIAMAKQAIAKAIALQAJANAHAOQAOAXALAeIACAGQALAjAFAbIACALIABALQAHAqADAuIABAYQAEA5gBA2IAAAdIgFAyQABAKgJAxIgBANQgGArgBAfQAAAzAEBeQAFBcANAyIACAIQASBFAkBJIAGANQAsAsAkAbQATANAVANQAMAcASAcQAbAnAnAlQBeBaCJAsQAhALAiAHQBjAWBmgGQAbgCAbgDQBNgLBIgZIA9gRIA6gRIAGgDQBUgbBSglIAZgLIAxgXQAggQAcgPQAugXAggXIACgBQALgGAJgIIAEgFIAOgIQAPgKAOgNIAPgPIAPgQIANgSIAGAHQAOARALAUQASAgAJAmIAAADIAHAgQAIA2gOA3IgDAOQgHAYgMAZQgKAYgOAYIgLAQQgYAlgiAjIgIAJIgWAUQgfAegqAfIgUAOQgeAWgkAXIgQALIg8ApIguAdIgsAcIgCABIgEADQgWAWgdAXIgbAVIgWAQQgNAKg5AiIghAVIgHAFIgnAZIgDACIgQANIgwAnIgCACQgkAdgUAbIgBABIgCADIgIAbQgJAagPAZIgEAGQgVAigdAaIgVARIgNAJQgUANgVAKQglATgoAIQgMADgNABIgNABIgcACQgiAAgjgJg");
	this.shape_436.setTransform(842.3863,581.5929);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFC892").s().p("Ah+TmQhQgWg4g4QgxgfgxgsQgTgogYgmQgbgpgnguIgXgbIgEgKQgXhHg4hRQgTgbhYhvQjBj1iJkXQhIiSgehwQgRhEgLhYQgGgxgJhtQgIhmACg0IACgYQAKgoAWgkQAVggAdgZQAQhNAohnQAbhFAZgtQAhg8AognQAvguA8gTQBAgUA5ATQArAPAjAkQAgAiASAuQAeBHgCBzQgCBygaBxIgUBNQgLAvgGAfQgIAvgFBrQgEBlAGAyQAJBNAiBYIAGAOQAvAwAjAaQATANAWAOQAUBQA/BMQBZBrCKA8QCCA5CTABQCJABCOgtQCDgqCAhPQCNhWBUhkQAogwAnhCIAVgjQA+AsAlBGQAmBMgFBRQgEA+gdA+QgbA4gtAzQgnAtg3AsQgpAghAArQhVA5hLAqQgvArhDAoIh4BDQhJAogsAgQgrAggRAeIgCADQgCAwgRAsQgVA7gsAuQgYAZgcATQg1AphAAQQgjAJgkAAQgsAAgtgNg");
	this.shape_437.setTransform(846.4725,578.0602);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFC892").s().p("AhXTfQgVgCgVgFQhDgQg0gnIgSgPQgygdgwgrIgNgXQgPgZgSgaQgUgbgZgeIgVgcIgWgaIgEgKIgGgQQgTgxgkg1IgVgfIgBgBIgGgJQgZgnhFhZIgRgXQgzhBg4hRIgGgHIgRgdQgYgmgagtQhDhzg4h4QhEiPgbhyQgRhEgKhVQgFg1gHhnQgGhiADg2IACgYQAFgTAIgTQAJgSAMgRIADgEQAVgdAZgYIAMgtIASg7QAKghALgfIAEgKQAZhCAZgvIAZgoQAWghAZgaQAXgZAbgRQASgLAXgKIALgEQAVgIAUgEQAaABAXAJIAXAEIAIACQAmAMAhAdIATAUQAVAXAPAdQAKAUAIAYQASA4ACBPQADBQgMBUQgFAfgGAeQgBAKgQBCQgKAtgGAfQgHAogFBMIgDAkQgGBcACA4IAAABQAEBOAeBUIAGAOIABADQAoAuAgAdQARAPAVAOQAPA2AiA0QAPAYAUAYQAZAeAcAaQAwAsA+AmIAGAEQAaAMAcALQBBAaBDANQBFAMBJgBQBPAABRgRQA6gLA5gUQBXgdBWgtQApgWApgaQBohABHhJQAYgYAVgZQAZgeAYgkIAXgkIAGgJIAWgaQAtAhAgAwQAKAQAIAQQAfBAABBEQAAAMgBANQgEA2gYA3IgGAMQgaA3gsAyIgBABQgmAsg3AsIgHAGQgmAeg7AnIgQALQhKAxhEAmIgcAXQglAegvAcIguAbIhIAoIg1AdQglAXgbATQghAYgTAXIgIAMIgCAEQgHAmgMAjIgCAGIgDAIQgOArgaAlQgJAOgLAMQgWAagbAUIgbAUQgeAUgiANIgWAHQgpANgqAAQgQAAgQgCg");
	this.shape_438.setTransform(848.525,579.655);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFC892").s().p("AhaTOQgVgBgVgEQhCgMg1gjIgSgNQgzgcgwgqIgNgVIgkgxQgUgagagcQgJgOgLgOIgUgbIgEgJIgHgQQgVgwgjg0IgWgeIgBgBIgGgJQgXgqhChWIgRgXQgtg7g+hWIgFgHIgQgdIgwhTQhAh0g1h3Qg+iMgbhzQgPhFgJhTQgFg3gFhiQgEhdAFg5IACgYQAFgTAHgTQAKgQANgRIADgDQAVgdAYgXIANgtIASg7IATg/IAEgJQAXg/AbgyQALgUAMgUQAWghAYgaQAXgZAZgRQARgLAWgNIAMgEIAngNQAWAFAUAMIAWACIAIABQAmAJAiAZIAVARQAWAVARAbQAMASAJAWQAXA2AGBMQAFBPgJBUQgEAegFAeQgBAPgOA8QgJArgGAhQgGAqgHBHIgEAjQgHBWgDA8IAAABQABBPAZBSQACAHADAHIABACQAhAvAeAhQAQAPATAQQAQA0AiAzQAQAYATAXQAZAdAcAbQAsAqA+ApIAHAEQAaAMAbAKQBBAYBDAKQBEALBIgDQBOgCBQgSQA4gMA5gUQBVgeBVguQApgWAngZQBmhBBGhJQAXgYAUgaQAYgdAYgkIAWgkIAIgFQALgIALgLQAsAiAeAwQAKAQAIARQAeA/AABCIgBAZQgFA2gYA2IgFAMQgbA2grAxIgBACQgmArg1ArIgIAGQgmAdg5AnIgRALQhJAxhCAmIgdAWQgkAeguAcIguAaIhHAoIg1AdQgkAWgbATQghAXgUAWIgIALIgDAEQgKAkgNAiIgCAFIgCAIQgMArgYAmIgTAaQgVAagaAVIgZAUQgeAWggANIgWAJQgvARgzAAIgOgBg");
	this.shape_439.setTransform(850.5115,581.2645);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFC892").s().p("AiGS7QhBgIg3ggIgSgMQg0gagvgpIgOgUIgmgtIgvg1QgIgOgLgOIgTgaIgEgJIgHgQQgWguglgzIgVgdIgBgBIgGgKQgXgug9hSIgQgXQgpg1hChaIgGgIIgPgeIgthTQg+h0gxh2Qg6iJgYh0QgPhGgIhQQgFg7gDhcQgChZAHg7IADgYIALgmIAYgeIADgEQAXgbAWgYQAIgVAGgXIARg7QAKglAIgZIADgJQAVg8Acg0IAXgnQAVgiAXgaQAWgaAYgRIAmgZIALgEIAngPQASAIAQAPIAWABIAIABQAmAFAjAVIAWAPQAYASASAYQAOARAKAUQAcAzAJBLQAJBMgHBVQgCAegFAeQgBASgLA3IgOBLQgHAsgIBDIgEAjIgQCPIAAABQgEBRAVBPIAEANIABADQAcAvAbAkQAOARARAQQASAzAiAzQAQAXATAXQAYAcAcAbQAqAoA+AsIAGAFQAaALAbAJQBAAVBDAIQBEAJBHgEQBNgEBOgTQA4gNA3gVQBUgfBTguQApgWAmgZQBkhBBEhJQAWgYAUgZQAYgeAXgkIAWgjIAIgDQALgEAMgGQArAiAdAwQAJAQAIARQAcA+gBBCQAAAMgBAMQgFA1gYA2IgGALQgaA2grAwIgBACQglArg1AqIgHAGQgmAdg5AnIgQALQhIAwhCAlIgdAVQgjAegtAcQgLAIghASIhHAoIg1AdQgkAVgaASQghAXgVAVIgJALIgCADIgcBCIgCAFIgCAIQgKArgXAmQgIAOgJANQgUAbgYAVIgYAVQgdAWgfAPIgWAKQgzAVg5AAIgGAAQgSAAgSgCg");
	this.shape_440.setTransform(852.4782,582.8786);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFC892").s().p("AiJSsQg/gFg4gcIgTgLQg1gYgtgoIgPgTIgogqIgxgyIgRgcIgTgbIgDgIIgJgQQgXgtglgyIgWgcIgBgBIgFgKQgWgyg5hOIgQgXIhriOIgGgIIgOgeIgqhUQg7h1gthzQg2iHgXh1QgOhHgGhNQgFg+gBhXQgBhVAJg9IAEgYQAEgTAGgSIAagdIADgDIAsgzIAQgqQAHgZAJgjQAJgnAHgWIADgJQATg4Adg2QAKgUANgUQAUgiAVgZQAWgbAWgSIAmgaIAKgFIAlgQQAOAMANASQALgBAKAAIAIAAQAnACAkASQAMAFALAHQAaAPAUAWQAOAPAMATQAhAwANBJQANBJgFBWIgFA8QgBAWgKAxIgMBKIgQBtIgGAiQgJBJgMBFIAAABQgIBSAQBMIADANIABADQAWAwAZAmQAMATAQARQATAyAiAxQAQAWATAXQAXAcAcAcQAnAkA+AxIAGAFQAaAJAbAIQBAATBCAGQBDAHBHgGQBLgGBNgTQA3gPA3gVQBSgfBRgvQAogWAmgZQBhhBBDhJQAVgXAUgaQAXgeAWgkIAWgjIAJAAIAYgCQApAiAcAwIARAiQAbA9gCBCIgCAXQgGA1gXA0IgGAMQgaA1gqAvIgBACQglAqg0AqIgIAGQglAdg4AmIgQALQhHAwhBAlIgdAUQgjAegsAcIgrAZIhHAnIgzAeQgkAUgbASQghAWgVAUIgKAKIgCADQgTAggNAeIgCAFIgCAIQgJAsgUAmIgQAbQgSAbgXAWQgLAMgNAKQgbAXgfAQIgUAKQgyAYg4AEIgVAAIgVAAg");
	this.shape_441.setTransform(854.4266,584.575);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFC892").s().p("AkCSCIgTgJQg2gWgtgnIgQgTIgqgmIgxgwIgRgbIgRgbIgEgIIgJgRQgYgrgmgwIgWgbIgBgBIgEgKQgWg2g0hMIgQgWIhriNIgGgIIgNgfIgnhVQg5h0gqhyQgxiEgVh3QgNhHgGhKQgEhCABhRQABhQAKhBIAFgXQAEgTAGgTIAbgZIADgEQAYgYATgaQAKgUAHgWQAIgXAIgkQAIgpAHgTIACgJQARg0Aeg5IAWgoQAUgiAUgZQAVgcAVgTIAkgbIAKgEIAkgTQALARAIAUIAWgCIAIAAQAngCAkANQANAEALAGQAcAMAWAUQAQANANASQAlAtARBIQAQBGgCBXIgDA7QgBAagIAtIgKBIIgSBrIgHAhQgLBCgPBKIAAABQgNBUAMBIIACANIABADQAQAxAWApQALAUAOATQAUAwAjAwQAPAWATAWQAXAcAcAbQAkAjA+A0IAGAFQAaAJAbAGQA/ARBBAEQBDAEBGgHQBKgHBMgVQA2gPA1gWQBRggBQgvQAogWAkgZQBghCBAhHQAVgYAUgbQAWgdAVgjIAWgkIAKACIAYAHQAoAjAbAwIAQAhQAZA9gCBBIgCAYQgHAzgXA0IgGALQgaA1gpAuIgBABQglArgzApIgIAGQgkAdg4AmIgQAKQhGAwhAAkIgdATQgiAegrAcQgPAKgbAPIhGAnIg0AdQgjAUgbARQghAWgVATIgLAKIgCACQgXAegOAdIgCAEIgBAIQgHArgTAnQgGAPgIANQgRAbgWAYIgWAWQgaAYgeARIgUALQgwAag3AHQgVACgUAAQg+gBg6gZg");
	this.shape_442.setTransform(856.3262,586.3);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFC892").s().p("AkER5IgTgHQg3gWgsglIgQgRQgWgQgXgTQgZgVgagZIgPgcIgQgbIgDgHIgKgQQgagqgmgwIgWgaIgBgBIgEgKQgVg6gwhHIgQgXQgYgihThqIgGgHIgLggQgKgZgcg8Qg2h1gmhxQgsiCgUh3QgMhHgEhJQgEhEADhLQADhNAMhCIAEgYIAKglQAOgLAOgNIADgDQAZgXASgaQALgUAHgVQAIgXAHgkQAJgrAEgRIADgJQAOgxAgg7QAJgTAMgUQAUgiATgaQAUgcATgTIAjgdIAKgFQASgJARgLQAGAUAFAZIAVgFIAIgBQAngFAmAKQANACAMAFQAeAKAYARQARAMAPAPQApArAVBGQATBDAABYIgBA7QgBAegFAnIgKBIQgHAxgLA3IgIAhQgMA7gUBOIAAABQgRBWAHBFIACANIAAADQAKAxAUAtQAJAUANAVQAVAuAjAwIAiArQAXAbAbAcQAhAgA+A3IAGAGQAaAIAbAGQA+ANBBADQBDACBEgIQBKgKBKgWQA1gQA1gWQBPghBPgvQAngXAjgZQBdhBA/hIQAUgXAUgcQAVgdAVgjIAVgjIALAFIAZAPQAmAjAaAwQAIAQAHARQAZA9gEBAIgCAXQgHAzgXAzIgGALQgaAzgpAvIgBABQgkAqgyApIgIAGQgkAcg3AlIgQALQhFAug/AlIgdASQgiAegqAcIgpAZIhGAmIgzAdQgiATgcASQggAUgXASIgKAJIgDADQgbAcgOAaIgCAEIgBAIQgFAsgRAnIgNAdQgPAbgVAYIgVAXQgZAZgdARIgTANQgvAcg2AKQgUAEgVABIgNAAQg2AAg1gTg");
	this.shape_443.setTransform(858.1638,588.0883);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFC892").s().p("AkFRwQhQgXg4g3QgxgfgxgtQgTgngYgnQgbgogngvIgYgaIgDgKQgXhIg4hRQgTgbhYhvIgHgIIgJggQgIgWgbg/Qjbn0BQmRQAGgcAIggQARgLAQgOQArglATg0QAHgVAHglQAIguAEgNQAPg+A1hdQAohIAigkIAhgfQAYgLAUgQQADAZAAAbQAPgFAPgDQA0gLA0ANQA1ANAnAhQBaBPAFC3QAGCYglCSQgOA4ghBwQgYBjAHBIQAKB0BXB0QAiAtAyAzQAeAfA+A6IAGAGQBXAXBcAAQCJACCOguQCDgqCAhOQCNhXBUhjQAogwAnhCIAUgjQA/ArAlBHQAmBNgFBQQgEA+gdA9QgbA5gtAzQgnAsg3AsQgpAghAAsQhVA5hLAqQgvArhDAnIh4BDQhJAogsAhQgrAfgRAeIgCAEQgCAwgRArQgVA7gsAuQgYAagcATQg0AphAAQQgkAJgkAAQgtAAgsgNg");
	this.shape_444.setTransform(859.9873,589.9047);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFC892").s().p("AtyZRQhQgXg4g3QgxgfgxgtQgTgngYgnQgNgSgPgUIjlpuQgsh1gShGQgThGgViAQgYiNgJhLQgNh5AGhgIAFhMQAWgbAMghQAHgVAHglQAIguAEgNQAMgxAkhGQgCg0AOg3QAQg8AkhIQALgYA5hmIBPiQQAuhTAog4QBdiECHhoQCChjCbhBQEjh6FhAGQCAADDYAYQD8AeBbAFQB0AHCYgBIEMgGQBKgBAoAFQA/AIAsAbQAoAZAcArQAaApAJAyQAKAxgJAvQgKAygcAnQgeAqgwAXQgvAYg0gDQgZgBgngJIhAgOQgggGgpgBIhLAAIjTAGQh4AChbgGQhUgFh9gPQiLgThGgIQj6gdilAXQiEATiBA1Qi1BJhnBuQgxA1guBNQgdAxgwBfQg0BngTA5IgDALQAbBEADBjQAGCYglCSQgOA3ghBwQgYBjAHBIQAKB0BXB1QAiAtAyAzQAeAfA+A6IAGAGQBXAXBdAAQCJACCOguQCDgqCAhOQCMhXBUhkQAogwAnhCIAUgjQA/ArAlBHQAmBNgFBRQgEA+gdA9QgbA5gtAzQgnAsg3AsQgpAghAAsQhVA5hKAqQgvArhDAnIh4BDQhJAogsAhQgrAfgRAeIgCAEQgCAwgRArQgVA7gsAuQgYAagcATQg1AphAAQQgkAJgkAAQgtAAgsgNg");
	this.shape_445.setTransform(922.0872,541.8007);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFC892").s().p("ArbYwIgEAAQgjgDgigHQgcgGgegQQgQgIgQgKQgvgeghglIgDgCQgogjgmgqIgXg1IgLgVIgXglIhekKQgyiLgyiUIgMghQgVg7gPgwIgNguIgHgYQgQhAgRhlIgEgVIgMhMQgLhGgGgwIgBgJQgMhwAEhbIAFhIIABgDQARgZAJgeQAHgVAGghIAAgCIAKg2IABgEQAKgvAeg+IABgJQAAgtALguIADgMQAPg0Acg9IAKgUQAPghAjhBIANgYIA6hwIARgeIASghQAWgmAVgfIAdgoQBLhmBlhVQAZgWAbgUQBfhIBtg1QAmgSAngRQBPghBUgXQBigdBlgMQAagDAbgCQAwgGAzgDIBCgCIAiABQBbAAB9AIIAEABIBtAIQCPALBHACQA9ABBDAAIB6gCICUgEIBlgDQBBgCArADIAgAEIANACQAfAHAaAMQAYALAUARQAOAKALANQAXAZAPAeIAHAQIABABQAQAeAAAfIABAHQADAegKAaIgDAJQgJAVgOAPQgHAIgKAHQgKAIgOAEQgQAFgPgBIgLgBQgKgBgPgFIgSgEIgSgEQgSgDgZADQgLADgjAGIgEACQhaAQghATIgOAEQhEARhAAMIgnAFQg3AJhMgCIg5gCQhfgHhFgIIghgEIgrgEQgogEgkgBQgfgBghABIg/ACIgZABQg+AFg3AJIhAAMQghAHgiAJQgtAMgvARIgWAIQhJAbg7AhIgIAEQhLArg4A1QgyAwguBEIgNATQgcArglBCIgPAbIgbA1QgUAmgMAdIgDAKIACANQAIA+gDBNIgCAeIgBALIAAANQgCBHgNBOQgGAngJAnIAAABQgNA7gcBfIgMA3IgGAdQgFAmgCAkIABAfIADAjQAFAkANAjQANAoAXApIABACQAYAsAmAyIALAOQAXAeAnAuIAFAFIAEACQAWALAYAJQAaAKAaAIIApAMIAkAHIANACIAGACQAnAIAlAAIANABQASADAQgDQAJgBAGgEIACAAQAIgFAGgFIALgHQAZgCAYgEQAXgDAVgEIASgEIAGgBIAIgDIAFgCQAegHAegJIAXgIIAbgLQAggNAZgRQAQgLAOgMIAPgPIAAgBIAMgKQAWgVAWgbIAFgGIADgFIAGgIQAbAdASAkQALAUAHAVIACAHQAJAaADAaQAGArgHArIAAAGQgHApgSAnQgGAQgJAQIgTAfQgRAZgWAYIgPAPQgOAPgSAOIgHALQgOAWgTAXIgWAaQgXAZggAdIgNAMQglAignAcQgXARgXAOQgQAPgTAPQggAYgoAVIgWALIhdArIgKAEIheAnIgJAEQgoAUgTAQIgCACIgCAKQgHAZgPAUIgEAGIgvAwIgIAGQgPALgTAGIgNAFQgSAIgTAFQgaAJgcAAIgHgBg");
	this.shape_446.setTransform(913.8165,542.505);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFC892").s().p("AqVYYIgLAAIgfgCQgYgBgZgMIgDgBQgbgQgZgLQgVgMgYgUQgNgKgMgMQgngmgaghIgCgCQgggmgbgqIgRgzIgKgUIgSgjQgrh7gpiAQgrh9guiQIgKgfQgSg2gNgvIgMgrIgFgXQgQhAgPhaIgDgTIgMhHQgKhAgGguIgBgIQgLhpADhVIAEhDIABgDQANgZAIgdQAFgVAFgeIAAgBIAIgzIABgEQAJgtAZg6IABgIQABgqAKgrIADgMQAMgxAYg4IAJgTQANghAfg8IALgXQAUgqAgg+IAPgdIAQgeQAUgkASgeIAagmQBDhiBZhTIAugqQBVhHBhg4QAhgTAjgSQBHgkBMgbQBagjBbgQQAZgFAZgEQAsgJAvgGQAcgEAggDIAggCQBUgFB1ABIAEAAIBmACQB/AGBKgBQA6AAA8gCIBygEICIgFIBegFQA5gCAtABIAeACIAMABQAdAEAZAIQAYAHAVALQAOAIAMAJQAaARATAVIAKAMIABABQAYARAHATIADAEQANATADARIACAGIABAZQAAAGgDAFQABAGgGADIgHAEIgCgBIgGgDIgEgDQgCAAgBAAQgBgBgBAAQAAAAAAAAQAAABABAAQgEAAgJAHQAAAHgQALIgBADQgrAegTAjQgHAFgDAEQgsAfg2AcIggAMQgwAVhDAGQgZADgbABQhTAAhHgHIgegEIgogEQgngEggAAQgaAAghAEQgjAEgYABIgYACQg3AIg0AKIg8AMQgeAGgiAJQgqAKgtAOIgUAHQhGAXg4AcIgHADQhFAlg4AuQgyAqguA7IgNARQgeAngkA6IgQAYIgcAwIghA9IgEAJIAAAMQgHA8gJBCIgFAbIgBAKIgBAMQgCA+gMBOQgFAkgIAlIAAACQgMA9gYBTIgMAxIgHAbIgNBEIgEAbQgBAQAAAQQgCAiAGAfQAGAmANAoIABACQAPAsAaAxIAJAPQARAfAdAuIADAFIADACIAjAcQATAPAUAMQAOAMAQAKIAbAQIAJAGIAEACQAfATAbAKIAJAEQAMALAJACQAEACABgGIAAAAQAEgFACgHIAEgIQAWAGAUADIAiAIQAJACADADIAEABIAEACIADAAIAmAMIAQAEIAQAFQASAFANACQAHABAFgCIAGgDIAHABIAZgEIADgBIACgBIADgCQAQAgAIAjQAFATACAUIABAGQADAZgCAYQgBAogLAmIgBAFQgLAlgTAhQgHAPgJAOQgJAOgLAOQgSAWgVAUIgPAOQgOAMgSAMIgCALQgGAWgJAXQgFANgIAPQgNAcgYAeIgJANQgcAjgiAeQgTASgVAPQgPAOgRANQgfAXgmASIgVAJQgiANg2ARIgKACQg0APgnAEIgJABIg6ALIgCAAIgCAFQgKALgQADIgEACQgZgEgSAQQgDABgFgBQgGACgJAAIgOgBg");
	this.shape_447.setTransform(906.6269,543.5026);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFC892").s().p("ApaZBIgJgBQgjgFgWgLIgDgBIgCABQgNgEgRgOIgEgDQgcgdgLAFIgGgFQgKgDgQgMIgKgGIgZgRQgRgLgSgWIgCgDQgTgcgQgQQgOgQgSgZIgTgaQgfgvgRgcIgCgDQgZgpgRgpQgGgZgEgXIgIgUIgOghQgmhygkh5QgkhvgoiNIgJgdQgPgxgMguIgKgoIgFgVQgPhAgNhQIgDgRIgKhCQgKg6gFgsIgBgIQgKhgABhRIADg+IAAgDQAKgYAGgcIAIgvIAAgCIAHgwIABgDQAHgsAUg1IABgIQACgnAJgnIACgMQALgvAUgzIAHgRQAMggAag4IAKgVQASgqAbg3IAOgcIANgbIAig/IAXgkQA7heBMhRQAUgVAVgUQBJhHBVg6QAegVAfgTQA/gnBEggQBSgpBRgUQAXgHAXgFQAngMArgKQAbgHAdgEIAegFQBNgLBtgFIADAAIBfgEQBvAABNgEIBsgGIBpgFIB9gHIBXgGQAwgDAwgBIAcABIALAAQAcACAYADQAXADAVAGIAdAJQAbAJAYANIANAIIABABQAgADAOAIIAGACQAXAGAPAJIAHADQAKAHAOAIIAMAGIAOAGQAFADANAAIAGgBIANAAQAGgBAEABIAKACQALAFAHAKQALALACAPIADAFQAEArgGA0QgDAHgBAGQgWAugrArQgMALgNAJQgpAhg6AOQgXAGgZAEQhFAHhKgHIgcgDIglgFQglgDgcACQgWABghAGQgjAHgUACIgWACIhjAWIg3AMIg7ANIhTAUIgSAGQhDATg0AWIgGAEQhCAdg4AoQgyAlguAxIgNAOQgfAkgkAxIgPAWIgdArIgjA4IgEAIIgDAKQgWA6gPA2IgHAZIgCAIIgBALQgCA1gMBOQgEAhgHAkIAAACQgLBAgTBFIgNAuIgIAZQgHAbgMAiIgHAYIgHAbQgJAgAAAcQgDAkAFAnIAAABQAFAsAQAyIAFAPIAfBNIACAGIACACIAXAjIAaAmQAIAQALAPIASAZIAGAJIADAEQAVAeARATIAFAIIABACIAdAVQARAOAJAKQAHAFAAAIIABADIgBAHIABACQALATAIAVIAHARIAFATQAFAZgBAUQgBAMgCAJIgEAKIgBAAIADALQAEASADAWIABAFIAAADIAAAFQAEAigCAhQAAATgDATIgBAGQgCAWgHAXQgIAkgPAiIgCAEQgPAggUAdIgRAZIgWAZQgSATgVARIgPALQgOAKgSAKIACALQAEAWgCAYIgDAcQgEAfgPAgIgGANQgSAlgcAhQgQASgTAPQgNAOgQALQgeAVgkAPIgTAHQgkALgwAHIgJABQgWACgTAAQgZAAgWgEg");
	this.shape_448.setTransform(906.9956,548.8337);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFC892").s().p("Aq6aVQgugEgngSQgqgUgdggQgSgUgUglIgig8IgcgqQgSgagJgRQgMgXgLgjIgSg9QgKgegVgzQgZg6gJgXQgbhJgBg7QgoiAgoiNQgdhigjiJQgQg7gNg4IgJglQgQhJgNhQIgMhMQgJg1gFgqQgKhcAAhOIABg9QAHgYAEgbIAGgtIAGgwQAGgtAQg0QADgqAJgqQALg0AUg3QAMgmAchAQAUgyAfhCIALgZQAZgzAYgrQBAhwBWhhQBVhfBnhOQA3gqA8glQBKgwBHgYQAVgIAVgGQA5gaBDgTIAcgHQBGgRBngMIBagKQCfgJBygNIDSgPQA/gHCEgIIALAAQAygDArAAQAuABArAHIARADQAngJAWgDQAmgHAfAAQAXAAAlAEIA7AGIA5ABQAiABAWAEQBGANAzA4QAzA3AHBGQAIBHglBBQgmBBhAAeQhEAfhsgJIg8gGQgigDgZADQgSACghAJQgiAJgRACIgVACQhAAXhLARIg3ALIhOAQQhKARg3AUIgFACQh9AwhlBbQgrAogqA0IgeAnQgYAegWAjQgtBGgWAzIgDAIIgBAKQgCAsgLBNIgJBCQgOBfgYBFIgJAYQgLAagaAxIgMAYQgPAegHAYQgLAjgEAnQgFAxAIA6IARBXIALAqIAMAwQAGAkAMAmIACAMIABAGQANApAGAdIACALQABAbgFAJQgFAHgMgHIgBAAIgVgaIAZAnQAOAVADASQAFAIgEANIgBAGQgCAHgDAFIgCADQADAsgGA2IgFAiQgJAsgNAmQgKAYgLAUIgOAXIgBAUIgOBgIgBAHQgIAqgOAlQgGATgIARQgIAXgNAYQgQAhgTAdQgUAegXAZQgSAXgXAUQgSARgVANQgRALgfAOIAHALQAUAjAGApQAGAogJAoQgIAngXAiQgXAjghAXQgjAZgtAKQgeAHgeAAIgcgBg");
	this.shape_449.setTransform(913.1882,556.6948);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFC892").s().p("ArFZqQgVgDgTgHQgqgNgfgcQgVgSgUgeIgBgCQgXglgKgUIgGgKIgQgeIgWgqIAAgBQgLgWgOgiIgLgeIgLgbIgbhAIgFgMQgUgugMggQgTg0gLg0IgDgVQglh4gkiLIgKgoQgUhMgZhwQgNg3gMg6IgFgVIgDgNQgPhLgMhFIgMhKIgCgKIgLhPQgKhYgBhLIAAg6IAGgwIADgrIAFguQAFgtALgxQAEgnAJgoQAKgzARg1QAMgqAWg4QASgyAZg5IADgGIALgaQAWgvAWgrQA8huBNhgQBNhgBehSIAwgoQAcgXAcgTQAkgZAhgSQASgJASgIIAfgRQASgJATgIQAVgLAWgKQAigPAogNIAagHQAlgLAsgKIBRgQIBWgOIEGgjQBfgKBpgJIBCgHIB6gIIAKgBQAugDAsgBQArAAAqACIARACQAigGAagCQAjgEAggBQAZAAAhABIA5ACIA3AAQAdAAAZACIAWABQA+AIArAaIAOAJQA0AeAXAvIADAIQATAqgDAyIgCAZQgGAhgLAhQgKAagOAUQgOAagUASQgaAdgmASIgUALQgOAFgLAFQgaAKgYAKQgSAJgbAKIgvAQIgTAFIgkAMQgmAMg+ANIgSAEIgjAHQgmAJgjAJIgRAFQg3AQgvAWIgGADQhuA0hjBfIgRASQgiAjgeAmIgcAmQgVAegRAfIgCADQgfA3gVBEIgCAIIgCAKIgDASQgGAsgKAyQgHAggJAeIgFASQgJAegTAoIgcA8IgDAJIgFAMQgNAdgQAvIgJAZQgHAWgEAVIgCAMQgHAfgCAoIgCApIgBA+IABA+IgBAWIgBAoIgFArIgDAQIgJAvIgDAKIgCAEQgFAZgJARIgFAJIgEAIQgHAPgLAGQgHAEgLgDIgBAAIgSgJIgJgEQgCAKgGAHQgCAKgJAHIgCADQAAAGgCAGIgBAGIgEALIgBAEQgEAsgLAwIgIAfQgJAggMAdIgFANIgVAqIgOAXIgFARIgEAMIgZBKIgDAHQgNAlgRAjQgHAQgIAQQgJATgKASIgEAHQgRAhgSAaQgPAWgOASIgLAMIgGAHIgNAoIgQAmIgJATIgKARIAEALQAMAmAEAkIABALQACAhgGAgQgFAcgKAaIgJATQgSAkgcAZIgPANQgZAUgeALQgnAPgsAAQgUAAgVgDg");
	this.shape_450.setTransform(910.5774,552.9438);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFC892").s().p("Aq8ZJQhmgEg4hIQgUgZgSgoIgdhHQgOgggag0IgohUQgjhMghhtQgqiHgmisQgXhngojRQgdiXgLhNQgUiAgEhmQgNlMCDk+QCDk+DzjkQA9g5A1geQASgKARgHQAqgkA6gcQBBggBogeQEhhRF1gjQDkgUHAgNQBQgCAtAIQBFALAoAmQAhAfASA0QANAmAJA8QAKBJgEAzQgFBEgcAxQg1BYiMArQggAKhUASQhKAQgpAOQibA3icCoQhWBeghBLQgUAtgZB0QgWBqgdA0QgLATgeAsQgbAngMAYQgcA5gHBjIgHB6QgFBHgNAwQgQBAgiAvQgmA1g1AXQgpARg2AAQgpgBg6gLQgUBpgwBgQgVAqgiA5Ih2DIQgnBCgbAhIgPARIAAAAIAUBzQALBFABAvQABA/gPA1QgSA8glAoQg7A/hdAAIgMgBg");
	this.shape_451.setTransform(910.2867,548.8693);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFC892").s().p("ArtZFQg0gKgkgjIgDgDQgWgVgVgjIgUgkIgPgcQgRgegbgyIgCgDIgWgrIgTglIgEgHIgSglQgKgVgIgUQgTgsgSg0QgmhsggiGIgPhCQgKgtgMg/QgOhHgShlIgGgiQgbiWgLhRQgSiBgEhnQgJj2BAjwQAXhXAghSIASgrQASgpAUgoQATgmAYgqQA1heA8hPQBHhdBZhTIACgCQA6g3A2ggQARgLASgIQAWgTAbgRQAXgPAbgPQBDgjBkgfQApgOAqgLQBSgXBagTQBSgSBZgPQB0gTB5gMIAjgEQBzgLCrgJIC3gJQBUgEBagCIALAAQBJgBArAIQAZAFAVAIQAlAOAaAYIAGAGQAaAcAQApIADAHQARAgANA1IADALQAOA6ADAsIABAEQABA9gUAvQgVAvguAlQgpAig/AZIgOAFQghANhBARIgnAKQgtAMgfAMQgbAKgbAMQhBAeg9AsQhFAxhFBGQg2A3gkAyQgWAegPAdQgYAugfBuQgLAngNAhQgSAygUAgIgrA9QgbAlgOAYQgMAVgJAbQgKAZgFAcQgGAZgDAaIgFA5IgEA4IAAAJQgGBHgPAxQgKAjgQAeQgLAWgSAXIgBACQgSAXgTASQgXAUgaAQIgBAAQgbAQggAEIgeAFIggACQgdABgigEIAAACQgIAlgMAmQgKAigOAlQgLAbgNAbQgVAtgiA4IgYAoIgbAqIgbAsIgQAdIgPAcIgIARIgIAPIgRAfIgUAlIgLAUIgJANIgDAEIAWBzQAJAvADAmIABAgQAAAmgGAiQgEAXgHAVQgJAdgPAZQgNAWgSASIgEAEQgRASgTAMQgjAYgrAKQgWAGgYABIgVABQgXAAgUgGg");
	this.shape_452.setTransform(913.4219,549.4227);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFC892").s().p("ArdZMQgygDglgcIgEgCQgYgQgXgeIgYggIgRgaQgVgbgcgxIgDgDIgXgqIgUglIgEgHIgUgkQgNgWgHgSQgWgrgUgzQgqhqghiHIgPhDQgLgugLg/QgNhFgRhpIgGgjQgYiUgKhUQgRiDgEhmQgIj5A7jyQAVhaAehRIASgrQAQgpAVgpIAqhRQA3hjA6hMQBGheBZhVIACgCQA5g2A3gkQASgKARgJQAWgTAbgSQAYgQAagOQBFgoBgghQApgPAqgMQBRgZBagWQBRgSBcgSQB2gWB2gOIAkgEQBwgMCvgLQBegGBagEQBWgEBZgCIALAAQBIAAAsAJQAZAEAVAIQAlAPAaAYIAGAGQAbAdAPApIADAGQAWAZASAuIAEAKQAUAyAJApIABAFQAIA4gMAvQgNAxgoAnQgkAmg7AdIgOAHQghARg+ASIgnANQgsANghAMQgaAKgcAMQhFAeg7ApQhGAvhIBDQg3A1goAxQgWAdgRAdQgdAtgmBpQgNAmgPAgQgVAvgXAgIgsA8QgdAkgPAYQgNAVgLAaQgMAYgHAbQgHAYgEAbQgEAWgDAiIgFA4IgBAJQgHBGgQAyQgLAjgSAeQgKATgUAZIgBACQgTAXgTASQgVAVgYASIgBAAQgbAUgdAGIgcAHIgfAFQgdAGgfgBIAAACIgVBLIgYBIQgKAcgMAbQgWAvghA3IgaAnIgcAqQgPAVgMAWQgIAOgHAQQgHALgHASIgIARIgGAPIgPAhIgQAmQgFAJgDALIgHAPIgCAEQALArAOBHQAJAvADAnIABAgQgBAmgHAiQgEAXgIAVQgKAdgQAYQgNAVgTATIgEADQgTASgSAMQgiAYgqAPQgVAHgWAEQgWAFgSAAQgMAAgKgCg");
	this.shape_453.setTransform(916.7526,550.1317);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFC892").s().p("AsmZCIgEgCQgagLgagZIgbgcIgVgXQgYgagdguIgDgDIgZgqIgVglIgEgHIgWgjQgQgXgGgQQgYgqgXgyQguhpgiiIIgPhCQgKgwgLg/QgNhEgPhsIgFgjQgXiTgJhXQgQiGgDhkQgIj7A2j1QAUhcAchQQAIgXAIgVQARgpAUgqQARgjAagvQA4hoA2hKQBFheBbhXIACgCQA4g1A5gnQARgLARgJQAWgTAbgSQAXgRAagPQBIgrBcgjQApgQApgOQBQgcBbgXQBQgUBegUQB4gZB0gPIAkgEQBugOCzgNQBigHBXgFQBXgEBYgBIALAAQBIAAAtAKQAZAFAVAIQAlAPAaAZIAGAGQAcAdAOApIAEAFQAZATAXAnIAFAIQAaArAQAmIABAEQAQA0gGAwQgGAxghArQgeApg5AiIgNAHQggAVg8AVIgnAOQgqAOgiANIg3AWQhJAeg5AmQhJAthKBBQg4AygrAxQgXAbgUAcQghAugsBjQgQAkgSAgQgXAtgZAgIgvA6QgcAjgSAYQgOAUgNAZQgOAZgIAYQgJAZgGAaQgEAWgEAjIgFA3IgBAJQgIBGgTAyQgMAigTAeQgJARgXAbIgBABQgUAYgSATIgrApIgBAAQgZAYgaAHIgbALIgdAIQgdAKgcACIAAACIgXBLIgXBJQgKAdgMAbQgVAyghA1IgaAnQgSAWgMASQgQAWgMAVIgPAfQgFAKgHAUIgGARIgHAQIgMAiQgHAUgEATQgFAJgBAMIgEAPIgCAFQAOAtAOBFQAKAvACAnIABAgQgBAmgIAjQgFAXgIAVQgLAcgRAYQgNATgVATIgEAEQgUARgSAMQghAYgoAUQgVAJgVAFQgjAPgXgEIgUABQglAAgegQg");
	this.shape_454.setTransform(920.3513,550.9332);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFC892").s().p("AsaZTIgFgBQgbgGgdgVIgfgYIgXgUQgcgYgegsIgDgDIgagqIgXglIgEgGIgXgjQgTgXgGgOQgbgpgYgxQgzhogiiJIgQhDQgKgwgLg/QgLhDgPhvIgEgjQgUiSgJhbQgPiIgDhjQgHj9Axj3QAShfAbhPIAPgtQAQgoAVgsIAqhTQA5htA0hHQBEhfBchZIACgCQA2g0A7gpIAhgVQAXgUAagSQAYgSAagPQBJgvBZglQApgSAogPQBPgdBcgaQBPgWBggVQB6gcBygRIAkgFQBsgOC3gPQBngJBSgEQBagFBWAAIALAAQBIAAAuALQAZAFAVAJQAlAPAaAZIAGAGQAcAeANApIAFAEQAdAMAcAgIAGAGQAgAkAWAkIACADQAXAvACAxQABAxgbAuQgZAug1AmIgMAIQghAZg5AXIgmAQIhNAdIg3AWQhNAeg4AiQhKArhNA/Qg5AwguAwQgYAagWAcQgmAtgyBeQgSAigVAfQgaArgbAgIgxA5IgxA6QgPATgOAYQgRAZgJAWQgLAYgHAaQgGAXgEAiIgGA4IgBAJQgJBFgUAyQgOAigUAeQgIAPgaAcIgBACIgmArIgoAsIgBAAQgYAbgYAJIgZAOIgcAMQgcANgZAFIgBACQgMAjgLAoIgXBLQgKAdgLAcQgVA0ghAzQgNAUgOATIgfAnQgSAWgLAVQgIAOgGARQgEAJgGAWIgGASIgGAQIgKAjQgFAUgCAUQgDAJABANIgCAQIgBAFQAQAvAPBCQAKAwACAnIAAAhQgBAmgJAjQgGAXgIAVQgMAcgSAXQgOASgWATIgEAEQgWARgQAMQggAYgnAYQgUAMgUAHQgjATgUgBQgYAGgWAAQgWAAgTgGg");
	this.shape_455.setTransform(924.1851,552.075);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFC892").s().p("AsRZhIgFAAQgdgBgfgQIgjgTIgZgSQgggWgfgqIgEgEIgbgpIgYgkIgEgHQgKgPgQgSQgWgZgEgLQgegogagwQg3hngkiKIgPhDQgLgygJg/QgLhBgNhzIgFgjQgSiQgIhfQgNiJgDhjQgGj/Asj5QAQhiAZhPQAHgXAIgWQAPgoAVgtIAqhUQA6hxAxhFQBDhgBdhaIACgCQA2g0A8gsIAhgWQAWgUAbgTIAxgiQBLgyBVgmQApgUAngQQBPggBcgcQBOgXBigYQB9gfBwgRIAjgGQBrgPC6gRQBrgKBQgFQBbgFBVAAIALAAQBHABAvALQAZAGAVAJQAlAQAaAZIAGAGQAdAfANApIAEADQAiAFAgAZIAIAFQAmAcAcAhIADADQAdArAJAxQAKAygWAxQgSAxgzArIgLAJQggAdg3AZIgmARIhOAgIg3AWQhRAeg2AfQhMAphPA8Qg6AtgyAvIgxA1QgqAug4BYQgWAggXAfQgcApgeAgIgzA3IgzA4QgRAUgPAWQgTAYgKAWQgOAXgHAZQgHAXgFAiIgHA6IgBAJQgKBDgXAyQgOAjgWAdQgHAMgcAfIgBABIgmArQgSAVgVAbQgXAfgUALIgYAQIgaAPQgdASgWAIIgBABQgNAigMAqIgWBMQgJAdgLAcQgVA2ghAyQgNAVgOARQgVAXgMARQgSAVgLAVQgIAOgFASQgEAIgGAXIgFATIgEARQgGAUgCAPQgEAVABAVQgCAIACAPIABAQIAAAFQATAxAOBAQALAvACApIAAAhQgCAmgKAjQgGAXgJAUQgNAdgTAWQgNARgYATIgFADIgmAeIhFA0QgTAOgSAJQgjAZgSAAQglARghAAIgRgCg");
	this.shape_456.setTransform(928.2037,553.4061);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFC892").s().p("AtPZnIgngPIgbgQQgkgUgggnIgEgEIgdgpIgYgkIgFgHQgLgOgQgSQgZgagEgIQghgngbgwQg8hmgkiLIgQhDQgLgzgJg/QgJg/gNh3IgEgjQgPiPgIhiQgMiMgChiQgGkBAnj7QAPhkAWhOIAPguQAOgoAVguIAqhVQA8h2AuhDQBChgBehcIACgCQA0gzA+gvIAggXQAXgUAagTQAZgTAYgQQBNg2BSgpQApgVAmgRQBOgiBdgfQBNgYBkgaQB/giBugTIAjgGQBpgQC+gTQBwgLBLgFQBdgGBUABIALAAQBHACAwAMQAZAGAVAJQAlAQAaAaIAGAGQAeAgALAoIAFACQAmgBAlARIAJAEQAsAVAjAeIADADQAkAmARAyQARAygQA0QgNA1gvAwIgLAKQggAgg0AbIglAUQgmARgpAQIg4AWQhUAeg0AcQhOAnhSA6Qg7Aqg1AvIg0AzQgvAtg+BTQgYAfgaAeQgfAmggAgIg1A2Ig2A3QgSATgRAVQgVAZgLATQgQAXgIAZQgJAXgFAhIgIA7IgBAJQgLBDgYAyQgQAigXAdQgGAKgfAhIgBABQgWAZgQATQgRAUgTAfQgWAigSAMIgWATIgZATQgcAWgUALIAAABQgOAhgMArIgWBNQgJAegKAcQgWA5ggAwQgNAVgPARIgiAmQgUAWgKAUQgIAOgEATQgDAGgFAaIgFATIgDARQgFAVgBAQQgCAVADAWQAAAHAEAQIADARIAAAFQAWA0APA9QALAwACApQAAARgBARQgCAmgLAjQgGAXgKAUQgOAcgUAVQgOAQgZATIgFAEIgmAdQgfAYgkAgQgTARgQALQgjAegPADQguAcgpACIgFAAIgQABQgYAAgZgIg");
	this.shape_457.setTransform(932.4046,555.0445);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFC892").s().p("AtNZ7QgVgEgVgGIgfgOQgngSggglIgFgEQgMgQgSgZIgagkIgFgGQgLgOgSgSQgcgagDgHQgjgmgeguQhAhlgliMQgIgggIgjQgKg0gJg/QgJg+gLh6IgDgkQgOiNgHhmQgLiOgChgQgFkEAij9QANhnAVhNQAGgZAHgVQAOgpAWgvQAMgcAdg6QA+h6ArhBQBAhgBghfIACgCQAzgxA/gzIAggYIAxgnQAYgTAZgSQBPg5BNgqQApgXAmgSQBNglBeghQBMgZBlgcQCCglBsgUIAjgHQBngSDCgUQB0gNBIgFQBegGBTACIALAAQBHACAxAMQAZAHAVAJQAlARAaAaIAGAGQAeAgALApIAGAAQApgHAqAKIALADQAyANAoAbIAEADQAsAiAXAyQAYAzgJA3QgHA4gtA1IgKALQgfAkgyAdIglAVQgkASgqARIg5AWQhYAfgzAZQhQAkhUA4Qg7Aog5AuIg4AxQgzAuhEBNIg4A6QghAlgiAgQgaAXgeAdIg4A1IglAnQgYAZgMARQgSAXgKAYQgJAXgGAiIgIA6IgCAJQgLBDgbAzQgRAhgYAdQgFAIghAiIgBABQgYAZgPAUQgQAUgSAhQgUAngPANIgUAWIgYAWQgcAbgRAOIgBABQgPAggMAsIgVBNQgIAfgLAcQgVA8ggAvQgNAUgQARIgkAlQgUAWgKAUQgHAOgFATQgCAGgEAbIgDAUIgEASQgDAVAAAQQAAAVAGAXQAAAHAGASIAFARIACAGQAYA2APA6QAMAwABAqQABARgBAQQgDAmgMAkQgHAXgLAUQgOAbgWAVQgNAPgbATIgFAEIgnAcQgeAZgiAlQgSASgQANQghAkgNAEQgtAkgqAKIgFABQgTAFgUAAQgPAAgQgDg");
	this.shape_458.setTransform(936.7407,556.8923);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFC892").s().p("AtNaOQgWgBgYgFIghgLQgqgQgigjIgFgFQgMgOgUgaIgbgkIgFgGQgLgNgUgSQgegbgDgEQgmglgfguQhFhjgmiOIgPhDQgLg1gIg/QgIg9gKh9IgDgkQgMiMgGhpQgJiQgChgQgFkFAdkAQAMhpAThNIAMguQANgpAWgwIAphXQA/h/Apg+QA/hiBhhgIACgCQAxgwBBg2IAggZQAXgUAagUIAwglQBRg+BKgsQApgYAlgTQBNgnBegjQBLgbBngeQCFgoBpgWIAjgHQBlgTDGgWQB4gOBEgFQBhgHBSADIALAAQBFACAyAOQAaAGAVAKQAkARAbAbIAGAGQAfAhAKAoIAGgBQAtgNAvADIAMABQA4AFAvAZIAEACQAzAeAfAyQAfA0gDA6QgCA8gpA5IgJAMQgfAogvAgQgSAMgTALQgjATgsASIg5AWQhdAegwAWQhSAihWA1Qg9Amg8AtIg7AwQg3AthLBIIg9A4QgkAigkAgIg6AzIg6A0IgpAmQgaAYgNAQQgUAWgLAYQgKAXgGAhIgKA7IgCAJQgMBDgdA0QgSAhgZAbQgEAGgjAkIgCABQgZAZgOAUQgPAUgQAlQgTAqgMAPQgHAKgMAPIgXAZQgcAfgNARIgBABQgRAfgMAtQgIAbgMA0QgIAfgKAcQgVA+ggAuQgOAUgQAQIglAlQgVAWgKATQgHAOgEAUIgFAiIgCAUIgDASQgCAXABAQQACAVAIAYQACAHAIASIAHASIACAGQAbA4APA4QAMAwACArQAAARgBARQgEAmgMAjQgIAXgLAUQgQAbgWAVQgOANgcAUIgFADQgaASgNALQgeAYghApIgfAkQghApgKAHQgsArgrARIgGACQgeAMgiAAIgKAAg");
	this.shape_459.setTransform(941.2078,558.88);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFC892").s().p("At/adQhIgLgxgxQgNgNgVgbQgWgdgLgMQgMgNgVgSIgjgdQiChyg4jQQgWhQgMhoQgHg8gJiAQgYldgDiwQgEkIAYkBQANiQAahXQAMgoAWgyQALgYAehAQBAiEAmg7QA/hjBkhjQBKhKB4hhQCiiEB1hAQBLgpBgglQBKgcBoghQCfgyBzgXQBigUDKgYQB9gPBAgFQBqgIBUADQBpAFA+AdQApAUAdAfQAfAiAJAoQA7gZA+gCQBBgCA3AYQA5AZAnAzQAnA1ADA8QAEBIgvBDQgqA9hGApQg0AfhVAeQhgAfgvASQiOA2icBtQheBDivCRIjxDIQgdAYgNAOQgXAWgLAXQgMAWgHAiIgKA8QgVBxhGBLIgrAqQgaAZgOAUQgNAUgPAoQgSAtgJARQgLAUgcAkQgcAlgLATQgSAfgMAtQgIAbgMA1QggCLhEBCIgnAkQgWAWgKATQgGAOgDAUIgEAjIgDAoQgCAXADAQQADAVALAaIAWAsQA7BzADBeQABA5gTAzQgVA3goAjQgOAMgeAUQgfAUgNALQgdAZgfAtQg7BTgLAMQgqA0gtAYQguAZg1AAQgRAAgSgDg");
	this.shape_460.setTransform(945.7871,561.0235);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFC892").s().p("AtWaSIgVgCQgfgDgagLQgVgKgTgOIgHgFIgLgKIgRgQIgXgWIgNgMIgPgMIgTgNIgDgCIgQgLIgFgDIgNgJIgMgJQgfgYgcgeQgugzgihFQgWgrgRgzIgDgKIgFgQQgOgugKg3QgGgdgEgfIgEgVQgJg6gJhyIgBgOIgBgTIgGhSIgGhXIgGhQIgGhVQgGhhAAhIIAAAAQgBhaADhbQAGipARioIACgUQAHg+AJgyQAJg3ANgqIAIgaIANghIAMgfIAOgeIAag5IAPgfIABgBQAkhIAdg0IAUgjIAYgjQASgcAVgbQAbgkAgglIAigmIANgNIAigjQAygzBAg4IAYgVQCYiEB2hGQBKgsBcgnIAHgDQBHgeBhghQCXg1B1gdQAtgLBAgMQBQgQBpgQQBrgQBAgIIAPgCQBmgKBWABQBPABA6APQAQAEAOAGQAoAQAfAaQAhAdAOAiQA7gVA9gCIAPAAQA5AAAwATIARAIQAvAWAiAoIALAPQAUAcAJAfQAFAQADASIABAFIABAJQAFA0gZA2IgHAPIgEAHQgbAugqAkIgUAQIgEADQglAcg4AaIghAPIgBABIhdAlIgmAPIgIADQgkAPgmASIgYAMQgfAQgfASQgdARgfAVIg7ApIgMAIIhLA4IgYASIg+AtIhKA3IglAZIghAXIgyAoIgnAgIhaBLIgdAYQgbAYgPAPIgMAOQgNAPgJAPIgCAFQgMAVgGAdIgCAHIgDALIgIAoIgCAGQgHAegKAdQgKAcgNAcQgUAlgbAeQgEAHgjAlQgYAYgOAVIgLASIgSAoIgHAPQgOAggIAOIgDAGQgMAUgWAfIgFAHQgWAggKASIgGAKQgNAcgMAkIAAABQgJAagMAuIgBAGQgJAjgLAgIgCAGQgPAogSAiQgTAigWAYIggAhIgEAFQgVAWgKATQgHAPgDATQgCAEgDAWIgBAHQgDAOgDAYIgCAKQgBANAAALIAAADQABAPAFARIAEANQABAGAFAOIAKAZIABAFIAMAhIALAjIAFASQAEAMACAMQAGAWADAXIACALQACAUAAASQAAAVgCAVQgDAYgIAZIgFAQQgHASgIAQIgDAFQgPAdgXAXQgMANgXARIgFAFIgMAJQgTAOgKALQgQAPgSAWIgYAhIgFAHIgfArIghAuIgUAZIgCACQgeAhgdATQgSAMgTAIQglAPgqAAIgHAAg");
	this.shape_461.setTransform(945.2056,560.0051);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFC892").s().p("At5aBQgUgGgUgJIgGgEIgMgHIgSgMIgZgRQgHgGgFgDIgBAAIgRgJIgTgLIgDgCIgQgIIgFgDQgKgHgDgBIgNgGQgggVgegbQgygtglhEQgXgpgSgzIgEgKIgFgPQgOgtgMg2IgLg8IgEgVQgLg8gKhtIgBgOIgBgTIgHhRIgHhXIgHhQIgHhTQgHhgAAhJIAAgCQAAhXAEhcQAIipATilIACgUQAHg9AJgzQAKg2AMgqIAJgaIAMghIAMgeIANgeIAag5IAPgeIABgCQAhhDAgg5IAUgjIAWgjQASgcAUgbQAagjAfgoIAggmIAMgNQAPgTAQgRQAxg4A8g3IAXgWQCOiDB4hOQBIgtBZgqIAGgDQBGghBegkQCQg2B3gkQAtgNA9gOQBRgUBjgSQBogTBCgKIAOgCQBkgNBXgCQBMgBA7ALIAfAIQApANAhAVQAhAYATAcQA7gTA9gBIAOAAQA6AAAvARIARAHQAxAUAiAlIAMAOQAUAbALAdQAIAPAEAQIACAGIACAIQALAygSA0IgFAQIgDAIQgUAugmAoIgRARIgEADQghAggzAdIgfARIgCABIhZAqIglAQIgIAEQgjAPglASIgZANQgfAQgeASQgcAQgdAWIg6ArIgMAIIhKA2IgYASIg+ArIhNAxIglAWIgiAUIgzAmIgoAfQgtAkgsAnIgcAYQgaAXgOARIgNAOQgNAOgJAPIgCAFQgNAVgIAbIgBAGIgEAMQgFARgFAVIgCAGQgIAdgKAeQgJAbgNAdQgSAkgZAgQgFAKggAiQgWAagOAVIgLARIgTAnIgHAOQgOAfgJAPIgDAGQgMAUgVAfIgEAHQgVAggKASIgFALQgNAbgOAkIAAABQgLAcgLAqIgCAFQgKAjgLAhIgCAFQgOAngRAjQgRAigUAaIgeAiIgEAEQgTAXgKAUQgHAOgFATQgCAEgEAUIgCAHQgFAOgEAWIgCAKIgDAXIAAADQgBAOACAQIACANQAAAGAFAOIAFAZIABAFQAFAQADARIAHAjIAEASQAEALACAOIAHAsIABALQACAUAAASQgBAWgCAUQgCAXgIAZIgGARQgGASgHAQIgDAEQgOAegVAYQgLAOgUASIgFAFIgKAKQgSAPgKALQgPARgQAWIgYAhIgGAHQgSAZgMASIggAvIgTAaIgCABQgcAigaAUQgRAPgRAIQgmAVgpAEIgUACIgIAAQgYAAgXgGg");
	this.shape_462.setTransform(944.7348,559.1527);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFC892").s().p("AtPZ/QgUgDgUgFIgHgCIgMgEIgTgIIgagLQgHgFgGgCIgBAAIgSgHIgTgIIgDgBIgRgHIgFgCQgKgGgEgBIgNgEQghgQghgZQg0gogohBQgZgogUgyIgEgKIgFgPQgPgsgNg2QgHgdgFgeIgEgVQgNg9gLhqIgBgNIgBgTIgIhRIgHhWQgEgngFgoQgGgugCglQgIheABhLIAAgCQAAhVAGhdQAKinATikIADgUQAHg8AKgzQAKg2AMgqIAIgaIAMghIAMgdIAMgeIAag4IAPgfIAAgCQAfg/Aig9IAUgjIAWgjIAkg3IA2hMIAegnIALgOQAPgTAPgSQAvg7A3g3IAWgWQCEiDB6hVQBGgvBWgsIAGgEQBGgkBagmQCJg5B4gpQAtgPA7gQQBSgYBegVQBkgWBDgNIAPgCQBggPBYgFQBKgDA9AHIAfAGQApAJAjARQAjASAYAWQA6gPA9gBIAOAAQA7AAAuAOIARAGQAxASAkAjIAMANQAVAZANAdQAJANAGAPIACAFIAEAIQARAvgLA0IgDARIgCAHQgNAwghAqIgPATIgDAEQgdAjgwAgIgcATIgCABQgsAbgqAVIgkARIgIADQgiAQglATIgYAMQgfAQgdASQgbARgdAXQgdAXgbAUIgMAJQggAZgpAcIgYARQgdAUgiAUQgmAXgpAWIgmASIgjAQIgzAlIgoAeQgtAkgrAnIgbAYQgZAXgPARIgNAOQgMAOgKAPIgCAFQgOAVgJAZIgCAGIgEAMQgHAQgFAVIgCAGIgTA5QgJAbgMAdQgRAlgWAgQgHANgcAhQgUAZgPAWIgKASIgUAlIgHAOIgYAtIgEAGIgeAzIgEAHQgUAggJATIgGALIgbA+IAAAAQgNAegMAnIgBAFIgWBDIgCAFQgOAlgQAmQgQAigSAaIgbAkIgDAEQgSAXgLAVQgHAOgGASQgDAFgEASIgDAHQgGAOgGAUIgCAJIgGAWIAAADQgCANAAAPIAAANQgBAHADANIACAZIABAFIADAhIAEAjIADASQADALABAOIAGAsIAAALQACAUgBASQAAAWgCAUQgCAWgJAaIgFARIgNAhIgCAFQgNAdgTAaQgKAPgRATIgFAFIgJALQgPAPgKANQgOARgQAWIgYAhIgFAIQgTAYgLATQgVAfgKARIgSAaIgCABQgaAjgYAWQgPAQgPAJQgiAagmAJIgTAFQgUAEgTAAIgNAAg");
	this.shape_463.setTransform(944.4239,558.5321);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFC892").s().p("AtWZ7IgNgCQgKAAgJgDIgcgHQgIgDgGgBIgBABQgIgCgKgEIgBABIgTgHIgDAAIgSgFIgFgBIgPgGQgIgCgFAAQgigMgjgWQg4gigrhAQgagngUgxIgFgKIgFgOQgQgrgOg2IgNg7IgFgTQgPg/gLhmIgCgOIgBgSIgIhRIgIhWQgEgkgGgqQgHgugDgkQgJhcAChNIAAgCQAAhTAIheQALimAWiiIACgUQAIg8AKgzQAKg2AMgpIAIgZIALgiIAMgcIAMgeQAJgXAQghIAPgfIABgCQAcg6AkhCIATgiIAWgkQARgcASgbIAzhNQANgVAPgTIAKgOIAcgnQAug+Azg3IAVgXQB5iBB8hdQBEgyBTguIAGgEQBFgnBWgoQCCg8B7gvQAtgRA4gRQBSgdBagXQBggaBEgOIAOgDQBegSBagIQBHgEA/ADIAfAEQAoAGAmAMQAkANAdAQQA5gMA+gBIAOAAQA7AAAsAMIASAFQAyAPAkAgIANANQAWAXAOAcQALAMAJAOIACAFIAFAIQAXArgDA0IgBARIgBAIQgHAwgcAuIgNAVIgCADQgaAngrAjQgMAKgOAKIgCADQgoAdgqAXIgjASIgIAEQgiAPglAUIgWAMQggARgbARQgbARgcAZQgdAYgaAUIgLAJQghAZgoAbIgXAQIhAAmQgnAUgqATIgnAQIgjAMQgbAQgaATIgnAeQgtAigrAnIgaAaQgYAVgQATIgMAOIgWAdIgDAEQgPAVgKAXIgCAGIgFALQgHARgHAUIgCAFIgTA5IgUA4QgPAlgVAhQgIAQgYAeIghAwIgLASQgHAOgOAXIgHANIgZAsIgDAGIgdA0IgEAHQgSAfgJAUIgFAKIgdA+IAAAAQgQAfgLAkIgCAFIgWBCIgCAFIgcBLQgPAjgQAbIgYAkIgDAFQgQAYgLAUQgIAPgHAQQgEAHgFAQIgDAGQgIAPgHASIgDAIIgIAUIgBADQgDANgCAPIgCAMQgBAIAAAMIAAAaIAAAEIgBAiQAAATABAPIABATQACAKAAAOQABARAEAbIAAAMIAAAmQAAAVgDATQgBAXgJAZIgGARIgLAiIgCAEQgLAdgRAcQgJARgPATIgEAFIgIAMQgOAQgJAOIgcAoIgXAhIgGAIQgTAXgLAUQgTAcgLAUIgRAbIgBACQgZAjgUAXQgPASgMALQgfAegiAOIgSAIQgZALgZACIgoABIgHAAg");
	this.shape_464.setTransform(944.2763,558.0984);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFC892").s().p("AtSZ9QgRAAgNgCQgHgCgHAAIgBABQgIAAgLgDIgBABQgLgDgJgBIgDAAQgIAAgKgDIgFAAQgKgEgGgBQgIgBgGABQgjgIglgTQg6gdgug+QgcglgWgxIgEgKIgGgOQgQgqgQg2QgIgcgGgdIgGgTQgRhBgLhiIgCgNIgBgTIgJhRIgJhUQgEgkgHgqQgIgugDgkQgKhaAChOIAAgCQABhRAJhfQAOilAWiiIADgUQAJg6AKgzQAKg1ALgqIAIgYQAFgRAGgRIALgcIAMgdQAJgYAPggIAPgfIABgCQAag2AmhGIATgiIAVgkIAig4IAwhOIAagpIAKgOIAagoQAshBAug4IAUgXQBviBB+hjQBDg0BPgxIAHgEQBDgqBTgqQB7g/B9g1QAsgTA2gTQBTghBVgZQBcgdBFgRIAPgDQBagUBbgLQBFgHBBAAIAfABQAoADAoAHQAmAIAhAKQA5gIA+gBIAOAAQA8gBArAKIARAEQA0ANAlAdIANAMQAXAVAQAcQAMALALANIADAEIAGAHQAdApAEAzIACASIAAAIQgCAxgWAxIgLAWIgCAEQgVArgnAlQgLAMgNAKIgCADQgkAggrAaIgiATIgIAEQghAQglAUIgVAMQggARgaARQgaARgcAaQgcAagZATIgLAJQggAagoAaIgXAPQgeASgjARQgoATgqAPIgoAMIglAJQgaAPgbASIgnAdQgtAigqAoIgaAZQgWAVgRAUIgMAOIgWAcIgDAEQgQAVgLAWIgCAGIgGAKQgJARgHATIgCAFIgUA4IgTA4QgOAmgTAhQgIATgUAcIggAxIgLARQgGANgQAYIgIANIgaArIgDAGIgbAzIgEAIIgZA0IgFAJIgeA9IAAAAQgRAhgMAgIgBAFQgNAfgLAjIgBAEIgbBMQgNAkgPAbIgVAmIgDAFIgaAsIgPAfQgFAIgGANIgEAGQgKAPgHAQIgFAIIgJATIgCACQgFANgDANIgEANQgCAIgCALIgDAaIgBAFIgEAiQgDATAAAPIgBATQACAJgBAPQAAAQAEAcIAAALIgBAmQgBAWgCATQgBAVgKAaIgFARIgLAiIgBAEQgKAdgPAeQgIARgNAUIgDAGIgHANIgUAgIgbAoIgXAhIgFAIQgTAXgLAUQgRAagMAXIgQAbIgBACQgXAlgSAYIgWAgQgdAigeAUIgQAKQgYAQgYAHIgpAJIgHABIgNABQgIACgIAAIgEAAg");
	this.shape_465.setTransform(944.3576,558.155);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFC892").s().p("AtzaFIAAAAQgLgCgJABIgDAAQgIABgLgBIgFAAQgKgDgGgBQgKAAgFADQgkgFgogQQg9gYgxg8QgdgjgXgxIgFgKIgGgNQgRgpgRg1IgPg5IgGgTQgThDgMheIgCgNIgCgSIgIhQIgKhUQgEgigJgsQgJgugEgiQgKhZADhPIAAgEQABhOAKhgQAQijAYihIADgUQAJg6AKgyQALg1ALgqIAHgYIALgiIALgbIALgdQAJgYAPggIAPgfIABgCQAXgxAphLIATgiIAUgkIAgg4QAUgiAZguQAMgWAMgTIAKgOIAYgpQAqhGAqg3IATgYQBliAB/hrQBBg2BMgzIAHgEQBCgtBQgtQBzhACAg8QAtgVAygVQBUgkBPgcQBZggBHgTIAOgEQBXgXBdgNQBCgJBCgEIAhgBIBRACQAnADAmAEQA5gGA+AAIANAAQA9gBAqAHIARAEQA1ALAmAaIAOALQAYAUARAaQAPAKAMALIAEAEIAHAHQAiAmAMAzIAEASIABAIQAFAygRA1IgJAYIgBADQgSAvgjAoQgJAMgMAMIgDAEQggAigrAcIghAUIgIAFQggAQgkAUIgWAMQgfASgaARQgYAQgbAbQgcAcgYATIgLAJQggAagnAYIgXAPQgfARgiAQQgpAQgsANIgpAIIglAGQgbANgbASQgUANgUAPQgsAhgpAoIgaAaQgUAVgRAVIgNAOIgWAbIgDAEQgRAVgMAUIgDAFIgGALQgKARgIARIgCAFQgLAZgKAfIgSA4QgMAlgRAjQgJAWgQAaIgfAxIgKARQgGAMgSAYIgJAMIgbAsIgDAGIgZAzIgDAHIgXA0IgFAKQgMAagTAiQgUAigLAdIgCAFQgNAegLAjIgCAEIgYBMQgNAkgMAcIgTAnIgDAFIgYAuIgRAeIgMATIgFAGIgUAdIgFAIIgMASIgBACIgNAZIgFAMQgEAIgCALQgDAHgFAUIgBAEIgIAiIgHAiIgBATQABAJgBAQQgCANAEAeIgBALIgBAnIgEAoQAAAUgKAbIgGARIgJAiIgBADQgJAegMAfQgIATgKAUIgCAGIgHAOIgSAhQgLAUgNAVQgJAPgOATIgGAIQgTAXgLAUQgPAYgMAaIgPAcIgBABIgkA/IgTAjQgaAngaAZIgPAOQgWAUgYALIgoARIgHAEIgOADQgLAEgKACQgSAEgNAAQgIgBgGABIgCABIgIABIgNgBg");
	this.shape_466.setTransform(944.5908,558.62);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFC892").s().p("Av1aNQhAgSgzg6QgfgigYgwIgGgKQgUgtgVg9IgRg4QgZhKgPhnIgEgfIgJhQIgLhTQgEghgKgsQgKgugEgiQgLhZADhTQAChMAMhhQASisAcipQAJg5ALg0QAOhEAOgxIALghQAKgcALgcQAOgjAZg0IAAgBQAWgtAqhPIAmhGIAfg5QATgiAXgvQAQggAPgZIAXgqQAohJAmg3QCNjPDvitQDAiLEZiGQC1hXCGgpQCSgsCygUQCOgPC9gBQBLgBAtAHQBAALArAfQAZATASAaQATAJAQANIAJAGQAoAjATAzQAFANADAOQAMAzgMA3IgHAaQgOA1gfAsQgJANgKANQgdAnguAgIggAWQgiASgpAXIgVAMQgfASgZARQgXARgbAcQgbAdgXASQglAggsAbIgXAOQgfAQgjAOQgqAPgtAJQgqAGgmABQgbANgbARQgUANgUAOQgsAhgoAoQgmAlgkAtIgaAfQgVAXgNAVIgIALQgMATgKATQgLAYgKAeIgQA4QggBqg4BTQgHAOgbAhQgTAagMAXQgNAZgOAiQgQAngJAXQgMAZgVAhQgVAkgMAaQgPAfgMAmIgBAEQgLAhgMArQgUBDgSAnQgZA6ggApIgiAoIgOARIgSAZQgIANgIASQgEAHgHAUIgBAEQgHAOgGAUIgKAjIgDASQABAJgCAQQgDAMADAfIgBALQgBAtgEAiQAAATgLAbQgJAcgFAXIgBAEQgMAvgTA4IgIAVQgPAlgXAoQgKASgSAXQgUAXgKAUQgTAhgVAvIgBABQgkBIgLAfQgdA4geAjQgUAZgXAQIgwAeIgOAGQggARgXACQgHABgHACQgJAEgPgBIAAABQgOgCgKAEQgIACgLgBIgGABQgXgFgIAHQglgBgrgNg");
	this.shape_467.setTransform(944.9905,558.8691);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FFC892").s().p("AvYajIgOgDQg5gOgwgvIgUgXQgVgYgSgfIgFgKQgIgNgHgQQgPghgPgqIgKgcIgJgcQgchMgQhkIgEgfIgDgTIgIg+IgCgQIgJhDIgCgNQgFgbgJgmIgCgJQgJgogEgeIgBgHQgLhVAEhRQAChIAMheIABgIQAVisAeipIAQhWIAFgXQAOhEAPgxIACgHIAJgbQAJgcAMgcQAJgZAPgfIAPgfIAAgCQARgiAdg3IATgjIAlhHIAKgTIATgmIAVgqIATgpQALgXAKgTIAJgPIAWgrQAQgeAQgbQAWgmAXgiIAZgkQCKjADTihQBahGBshDQB6hNCQhKQCwhaCJguQAlgMAngLQB1ghB/gPIADAAQAsgFA0gEQA1gEA1gCICDgHIA1gCQAmAAAdAEQA+AIArAdIADACQAaARAUAaQASAKAPANIAIAHIANAMQAeAgAQArQAFANADAOQADALABAMQAGAogJArIgFAaQgFAUgHASQgMAggTAdQgIANgLANQgNATgRARQgTASgZASIgYAQIgIAGIhDAnIgHAFIgUANIgYARIgdAWIgXAUIgaAaQgXAYgVAQIgIAGQggAaglAWIgOAHIgYALQgWAJgXAIIgVAGQgjAJgjADIgQAEQgpAGgmAEIgJAEQgXALgWAQQgUANgUAPIgEADQgoAhgmAoIgBABQghAjgjAvIgCACIgZAgQgTAXgOAWIgHAKQgMAUgJATQgMAYgKAeIgRA4QgiBqg2BUQgHAPgZAhQgSAagMAXQgNAagOAiQgPAmgLAZQgLAagTAhQgVAkgLAaQgPAggMAlIgCAEIgNAoIgLAkQgVBBgTAoIgOAdQgUAlgZAhIgFAGIgdAiIgPARIgOAUIgEAGQgIANgIASQgEAHgHATIgCAEIgEALIgJAXIgMAiIgDASIgBALIgDAOQgEALAAAZIAAAFIgCALIgFAmIgFAnQgBATgLAbQgHAXgFAUIgCAIIgBAEQgMAvgTA5IgHAVQgPAmgVApQgJASgRAYQgSAXgJAVQgSAigTAvIgCABQghBIgLAhIgNAYQgVAmgXAeIgCADQgSAYgUAQIgUAQIgYASIgNAIIgaAQQgMAGgLACQgHACgGADQgJAEgNABIAAABQgKgBgIADIgEACQgIADgLABIgFABQgVgDgJAIIgRABQgdAAgggIg");
	this.shape_468.setTransform(945.1814,560.011);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFC892").s().p("Au7a5IgOgCQg7gIgxgrQgLgJgLgMQgWgWgTgeIgGgJIgQgdQgQghgRgqIgKgcIgKgbQgfhPgRhgIgFgfIgDgUIgIg9IgCgRIgKhEIgCgMQgFgbgKgmIgCgJQgKgpgFgeIgBgHQgMhTAEhTIAAgBQADhHAOhgIABgIQAXisAgiqIARhVIAEgXQAQhFAOgwIACgHIAJgbIAVg5QAKgZAOgfIAQgfIAAgCQARgiAeg4IASgjIAlhHIAJgTIATgnIAUgrIARgpQAKgZAKgSIAIgQIAVgqIAhg6QAVglAXgjIAZglQCLjEDLilQBZhKBphGQB5hSCOhNQCrhdCLgzQAlgOAngMQB3glB8gQIADAAQAqgFA3gEIBqgIQA6gDBJgHIA2gEQAmgBAdACQA+AGAsAcIAEACQAaARAUAZQASAKAPAOIAIAGIAMANQAeAhAQArQAFANADAOIAEAXQAGApgHArIgFAZQgEAUgGATQgMAhgSAdQgIANgKANQgNATgSARQgSASgZATIgYARIgIAGQghAUghAVIgGAFIgTAPIgXASIgcAYIgWAVIgaAaQgXAYgWAQIgIAGQghAZgnASIgOAGQgMAGgNAEQgWAHgYAFIgVAEQgjAFghgCIgPAEIhQANIgIAEQgXAMgXAQQgTAOgTAPIgFAEQgnAhgkArIgBABQgfAigjAyIgBACIgYAhQgTAYgNAWIgHAKQgLAUgKATQgMAZgKAeIgSA3QgjBqg0BVQgIARgXAgQgSAagLAYQgNAbgOAiQgPAlgLAaQgMAbgRAgQgUAkgLAbQgPAigMAkIgCAEIgNAnIgLAkQgWBAgVApIgPAdQgTAjgbAiIgGAGIgdAjIgOARIgOAUIgFAGIgQAfQgFAIgHASIgBAEIgFALIgKAXIgMAhIgFASIgCAKIgEANQgEALgDAZIgBAFIgCAKIgIAlIgIAmQgDAUgKAaQgIAWgFAVIgCAIIgBAEQgMAvgSA7IgHAVQgOAmgTArQgJATgPAXQgQAYgIAVQgRAlgSAtIgCACQgeBGgMAkIgMAZQgTAkgXAhIgBADQgSAZgSASIgTAQIgVAVIgLAJIgYASQgLAIgKAEIgMAGQgHAFgMADIgBAAQgIABgHADIgFADQgHAEgKACIgFABQgTAAgKAIQgSAEgVAAQgSAAgTgDg");
	this.shape_469.setTransform(945.3789,561.2368);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFC892").s().p("AuebOIgPAAQg7gDgzgmQgMgJgMgKQgXgVgUgdIgGgJQgJgNgJgQQgRgfgSgrIgLgcIgKgbQgihRgThdIgFgfIgEgTIgIg+IgDgRIgKhEIgCgNQgFgagMgnIgCgJQgLgpgFgeIgBgHQgNhRAFhVIAAgBQADhGAPhjIACgIQAZisAhiqIAShVIAFgXQAQhGAOgwIADgHIAJgaIAVg5QAKgbAOgeIAQgfIAAgCIAvhaIASgjIAlhIIAJgTQAJgTAIgVIATgsIAQgpQAKgaAJgSIAIgQIAUgrQAPgeARgcQAVglAXgkIAZglQCMjJDEipQBYhNBmhIQB4hYCKhQQCmhgCOg5QAlgPAmgMQB7grB3gQIAEAAQApgFA5gEIBqgJQA4gFBLgKIA2gGQAmgCAdACQBAAEAsAaIAEACQAbAQAVAZQARAKAPAOIAIAHIAMANQAcAiAQArQAFANADAOQADALACAMQAHApgGArIgEAaQgEAUgGATQgKAhgSAeQgIAOgKANQgNATgRARQgRASgbAUIgXAQIgIAGQgjAWgdAWIgHAFIgSAQIgWAUIgaAaIgWAWIgZAaQgXAYgXAQIgIAFQgjAYgoAQIgOAFIgZAIQgXAFgYACIgWACQgiAAgggGIgPAEQgqAHgmAJIgIAFQgXAMgWAQQgTAOgTARIgFAEQgmAigjAsIAAABQgeAighA1IgCACIgXAiQgRAYgNAXIgHAKQgLAUgJATQgMAagLAdQgJAZgKAeQglBqgyBWQgJATgUAfQgRAbgLAYQgNAcgOAhIgaBBQgMAbgQAgQgSAkgMAbQgPAjgMAjIgBAEIgOAnIgMAjQgXBAgWAqIgPAcQgTAhgeAkIgFAHIgdAiIgOASIgPAUIgEAHQgIAMgJATQgFAHgHASIgCAEIgFALIgKAWIgOAhIgGARIgCAKIgGANQgFALgFAXIgCAFIgDAKIgLAkIgKAlQgEAUgKAaQgIAWgFAVIgDAJIgBAEIgdBqIgHAWQgNAngRArQgIAUgOAXQgOAZgIAWIggBSIgBACQgdBGgMAmIgLAZQgSAjgWAkIgBADQgRAagQATIgRASIgTAXIgKAKIgVAVQgJAJgJAFQgGADgFAFQgHAGgLAEIAAABQgIABgGAFIgEADQgHAFgKACIgEADQgSABgJAJQgdAJgjAAIgLAAg");
	this.shape_470.setTransform(945.5709,562.5153);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFC892").s().p("AwCbEQgMgIgMgJQgZgUgWgcIgGgJQgJgMgJgQQgSgegUgrIgMgcIgLgbQglhTgThZIgHggIgDgTIgKg+IgCgSIgLhEIgCgNQgGgZgMgoIgCgJQgMgqgFgdIgCgHQgOhQAFhXIAAgBQAEhFARhlIABgIQAcisAjiqIAThWIAFgWQAQhGAPgwIACgIIAJgbQAKgcAMgcQAKgcAOgdIAQggIAAgCIAwhaIASgjQAVgpAPgfIAIgUQAJgSAIgXIARgsIAPgqQAKgbAIgSIAHgPIAUgrQAPgeAQgeQAVgkAYglIAZgmQCMjOC9isQBWhRBjhLQB3hdCHhSQCihkCQg+QAlgQAmgNQB9gwB0gQIAEgBQAngFA8gEIBqgJQA3gGBNgNIA2gJQAlgDAeAAQBAACAuAZIADACQAcAQAWAYQARALAOAPIAHAGIAMAOQAcAiAQAsIAIAbIAFAXQAHAqgEAqIgEAaQgDAUgFAUQgKAigRAdQgHAOgKAOQgNATgRASQgQAQgcAVIgXARIgJAHQgjAXgbAWIgGAFIgSASIgVAWIgZAbIgUAYIgZAaQgXAXgYAQIgIAFQglAYgoANIgOAEIgbAFQgYADgYAAIgVgBQgjgDgegLIgPADQgpAHgmAMIgJAFQgXANgWARQgTAOgSARIgEAFQglAjgiAuIgBABQgbAighA4IgBACIgWAjQgRAYgMAYIgHAKQgLAUgJATQgMAagLAdQgKAZgKAeQgnBpgvBYQgKAVgSAeQgQAbgLAZQgNAdgNAgIgbBDQgMAbgQAgQgQAkgLAbQgPAkgMAiIgCAEIgOAnIgNAjQgXA+gYArIgQAcQgSAfggAmIgFAHIgdAiIgPATIgOAUIgFAHIgRAeQgFAJgHAQIgDAFIgFAKIgKAWIgQAhIgHAQIgDAKIgGAMQgHALgIAXIgBAEIgFAKIgOAiIgMAlQgFAUgLAaQgHAWgGAVIgCAJIgBAEIgdBsIgHAVQgLAogRAtQgHAUgLAXQgNAZgHAXIgeBTIgBADQgaBFgMAoIgLAZQgQAhgWAoIgBADQgQAbgOAUIgPAUIgRAYIgIALIgSAYQgJAKgIAHIgJAJQgHAIgJAFIAAABQgHADgGAEIgEAEQgGAGgJAEIgEADQgQAEgKAJQggAOgpACIgPACIgLAAQg3AAgwgfg");
	this.shape_471.setTransform(945.7838,563.9882);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFC892").s().p("AvobiQgNgHgNgJQgagSgXgbIgHgIQgKgNgJgPQgTgegVgqIgNgcIgMgbQgohVgUhWIgIggIgDgSIgKhAIgDgRQgFgpgGgcIgDgNQgFgYgNgqIgDgJQgMgqgGgcIgCgHQgQhPAHhZIAAgCQAEhDAShnIACgIQAeitAliqIAThWIAGgWQARhGAOgwIADgIIAJgbQAKgdALgcQALgcAOgdIAPggIABgBIAwhcIASgiQAVgpAOggIAJgUIAQgqIAPgsIAOgrQAJgbAIgTIAGgPIAUgrQAOgeARgfQATgjAZgmIAZgmQCMjTC2iwQBWhUBfhOQB3hjCDhVQCehnCShDQAkgRAmgPQCAg0BxgRIAEgBQAlgFA+gEQA+gFAsgFQA2gHBPgQIA2gLQAlgFAfAAQBAAAAvAXIADACQAcAPAYAYQAQAMAOAPIAHAHIALANQAcAjAQAtIAIAbIAFAWQAHArgDAqIgDAaQgCAVgFATQgJAjgQAdQgHAPgJANQgNAVgRARQgQAQgcAWIgYARIgIAHQgkAZgZAWIgGAFIgRAUIgUAYIgXAdIgUAYIgZAbQgWAWgZAQIgJAFQglAXgqAKIgOADIgcADQgYABgZgDIgVgDQgigHgdgPIgPACQgpAIgmAPIgJAFQgXANgVASQgTAOgSASIgEAFQgkAjghAxIAAABQgZAighA6IgBADIgVAjQgPAZgNAYIgGALIgUAnIgXA3IgVA3QgoBoguBaQgKAXgRAdQgOAbgMAaQgNAdgMAgIgbBDQgMAdgOAfQgRAkgKAcQgPAlgMAhIgCAEIgOAnIgNAiQgZA+gZArQgIAPgJANQgRAcgiApIgFAGIgdAjIgPATIgPAVIgFAGIgRAfQgFAJgIAPIgCAFIgGALIgLAVIgRAgIgHAQIgFAJIgHANQgIALgKAVIgCAEIgGAJIgRAhQgIASgHATQgGAUgKAaQgHAVgGAWIgDAIIgBAFIgdBtIgFAVQgLAogPAvIgQAsQgLAZgHAXIgaBVIgCADIgkBuIgLAaQgOAfgVArIgBADQgOAcgNAVIgNAWQgHALgIAPIgHAMQgIANgHAPIgOATIgIAKQgGAJgIAHIAAAAQgHAFgFAFIgEAEQgGAHgHAFIgEADQgPAHgKAKQgeARgpAHIgPACQgPADgPAAQguAAgpgXg");
	this.shape_472.setTransform(945.9718,565.5157);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFC892").s().p("AvOcAQgOgGgOgIQgbgQgYgbIgHgHQgLgNgKgOQgUgegXgqIgNgcIgNgaQgrhZgVhSIgIggIgEgSIgKhAIgDgSQgGgpgGgcIgDgNQgFgXgPgrIgDgJQgNgqgGgcIgCgHQgRhOAHhbIAAgCQAFhCAUhpIACgIQAgitAnirIAUhVIAGgWQARhGAPgwIACgJIAJgaIAWg7QALgcANgcIAQggIABgCIAxhcIASgiQAVgpANggIAIgVIAPgqIAOguIANgrQAJgcAHgSIAGgQIATgrQAOgeAQgfQATgiAZgoIAZgnQCNjXCvizQBUhZBdhQQB1hoCAhZQCZhpCVhJQAkgSAlgQQCDg5BtgRIAFgBQAkgFBAgFQBAgFAqgGQA0gHBRgUIA2gNQAlgGAggBQBBgCAvAWIADACQAdAOAYAXQAQAMAOAQIAHAHIALAOQAaAkAQAtQAFANADAOIAGAWQAIArgCAqIgCAaQgCAVgFAUQgIAjgPAeQgHAPgJANQgNAVgQARQgPAQgeAXIgXARIgIAHQglAbgXAWIgFAGIgRAVIgTAaIgVAeQgLAQgIAJQgLAOgOAOQgWAWgaAPIgJAFQgnAWgrAHIgOACQgOACgOgBQgZgBgZgFIgVgGQgjgLgbgUIgPADQgoAIgmARIgKAGQgXANgVASQgSAQgSASIgEAFQgiAkggAzIAAABQgXAhggA+IgCACIgTAlQgPAZgMAZIgGAKIgTAoIgYA3IgWA2QgqBpgsBbQgKAYgPAdIgZA1IgZA+IgbBEIgZA8IgaBBIgaBGIgCAEIgPAmIgOAjQgZA8gbAsIgRAcQgRAagkArIgFAGIgdAjIgPATIgQAVIgEAHIgSAfQgGAJgHAPIgDAEIgGALIgLAVIgTAgIgIAPIgGAJIgIAMQgJALgMAUIgDAEIgHAJQgMASgIAOQgJAQgIAUIgRAtQgIAVgGAWIgCAJIgBAFIgdBuIgFAWIgXBYIgOAsQgJAagGAYIgYBWIgBADIgjBwIgKAaQgMAdgVAuIgBADIgYA0IgMAXIgMAcIgGAOIgMAeIgMAWIgHAMQgFAKgHAIIAAAAIgKAMIgDAEQgGAIgHAHIgDADQgNAJgKAKQgeAWgoAKIgPAEQgYAGgXAAQgmAAgjgQg");
	this.shape_473.setTransform(946.1907,567.0979);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFC892").s().p("Au1cdQgPgFgOgIQgdgPgZgZIgHgHQgMgMgLgPQgVgcgXgrIgPgcIgNgaQguhagXhPIgIghIgEgRIgLhBIgDgSQgGgpgHgcIgDgNQgFgXgQgsIgDgJQgOgqgHgcIgCgHQgRhMAHhdIAAgDQAFhBAWhrIACgIQAjitAoirIAVhVIAGgWQAShHAOgvIADgJIAJgbIAWg6QALgeAOgbIAQggIABgCIAxhcIARgiQAVgqANggIAIgVIAOgrIANguIAMgsIAOgvIAGgQQAIgWAKgWQANgeARgfQASgiAagpIAYgnQCPjcCni3QBThcBahTQB0htB9hcQCUhtCXhOQAkgTAlgRQCGg+BqgRIAEgBQAigFBDgFQBDgFAngHQAygJBUgWIA2gPQAlgIAggCQBBgEAwAVIAEACQAeANAZAXQAPANAOAQIAGAHIALAOQAaAkAQAuIAIAbIAFAWQAJArgBAqIgBAaQgCAWgEAUQgHAjgOAfQgHAPgJAOQgMAVgRARQgOAPgeAYIgYASIgIAHQgmAcgUAXIgFAGIgQAWIgSAcIgUAgQgKARgIAJQgLAPgOANQgWAWgbAPIgJAFQgoAUgsAFIgPABQgOAAgPgBQgZgDgagIIgVgIQgigPgagZIgOADQgpAIgmAUIgJAGQgXAOgVATQgSAPgRATIgFAGQghAlgeA0IAAABQgVAhggBBIgBADIgSAlIgaAzIgFAKIgTAoIgZA4IgWA2QgsBogqBcIgYA2IgXA2IgZA+IgbBGIgYA8IgaBBIgaBGIgCAFIgOAlIgPAiQgaA8gcAtQgJAOgJANQgRAYgmAtIgFAHIgdAjIgPATIgQAWIgFAHIgRAeIgOAXIgDAFIgGALIgMAVIgUAfIgJAOIgHAJIgJAMIgZAeIgEAEIgHAIIgXAfQgKAQgJATIgTAuQgHAUgHAXIgDAIIgBAFQgMAsgPBDIgFAWIgVBbIgLAtIgNAyIgVBXIgCADQgSBDgOAvIgJAaQgLAcgUAxIgBADIgWA2IgJAZQgFAMgFASIgFAPIgKAhIgJAYIgFAOIgKAUIAAABIgJANIgDAFIgMAQIgDAFIgWAWQgcAYgnAPIgQAFQghALgfAAQgeAAgdgKg");
	this.shape_474.setTransform(946.4388,568.7612);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFC892").s().p("Au6cvQgwgVgogyQgdgkgig+QhNiNgXhnQgFgXgJg8QgIg1gIgeQgHgYgTg0QgRgxgHgcQgThMAIhhQAGhAAXhtQAvjcA4jaQAZhdARg4QAahRAeg/QAHgPA8huQAphNARg1QALgfAOg8QAOg/AJgdQATg5AihBQAZgvArhDQDalWD+j7QEdkbFBigQCJhDBmgSQAggFBKgGQBFgFAmgIQA+gMB+goQBvgcBJAdQA+AZArBAQAmA4AQBLQASBRgNBJQgOBSgyA1QgSAUgxAmQgtAjgUAZQgQATgVApQgXAsgNARQgdAoguAYQgtAYgyACQgyACgvgVQgvgVggglQg1AHgyAhQgtAdglAuQggAmgdA3QgSAhggBDQjQHDhwEwQgxCFgSAsQgqBigwBDQgSAXgsA1QgoAwgUAcIgvBNQgcAugXAaQgKAMgdAdQgaAZgMAQQghArgXBQQgZBUgmDKQgjC5giBkIgeBSQgRAxgJAhQgHAcgLA4QgLAxgPAgQgkBKhSAhQgqARgnAAQgoAAgkgRg");
	this.shape_475.setTransform(946.6791,570.4433);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFC892").s().p("Auxc0IgKgFQgsgUglgrIgHgIQgbghgfg4IgFgJQhJiIgYhlIgCgIIgOhKIgBgJQgHgugHgdIgCgIQgGgWgRgvIgCgHQgQgrgHgbIgCgHQgShKAIhdIAAgFQADgiAIgvIAShQIACgKQALgoAIgmIAVhNQAJgmAMgnQAbhjAdhiQAahbAUg3QAQgsAQgnQANgfAOgcIBEh8QAnhIATg0IACgFQALgfAPg7IAJgmQAJgiAGgTQAMgjARglQALgZANgZQAagwAqhDQBEhtBGhhQCDi3CLiXIA2g5IA2g2QA4g4A5gxIBShEQArgkAsgfQA+guA9gmQA/gpBAghIAGgDQBAggA7gXQAhgNAegJIAJgCQAVgGAVgDQAWgEAqgEIAqgDIBDgHIAngGQA2gKBigfIAlgMQBWgVA/AOQASADAQAHQAuATAkApQAMANAKAQQAdArAQA3IAJAiQANA+gEA5IgFAjQgLA+ggAuQgKAOgMANQgMAOgdAWIgaAVQgbAUgRARQgMAMgJALQgJALgLASIgRAfIgSAiIgRAbQgVAbgbAUQgNAJgPAIQgeAQghAGQgQADgQAAQgiABgggJQgQgFgPgHQgggOgYgWQgNgKgKgLQgmAGglATQgOAHgOAJQggAVgdAfIgVAXQgYAdgWAmIgPAaQgOAagWAwIgNAbQjIGyhwEqIgIAWQgoBsgUAxIgHAUQgkBVgqA+IgMASIgwA7IgOARQgdAjgTAZIgMAQIgkA6IgLATQgUAigTAXIgNAPIgYAaIgPAPQgPAOgKAMIgMAPQgdAmgWBEIgFARQgYBRgjC9IgDAQQghCtggBiIgFAOIgZBEIgFANQgOAogIAdIgEAOQgGAYgJAtIgDAOQgJApgMAdIgFALQgiBFhJAiIgLAEQgqARgnAAQgiAAgggMg");
	this.shape_476.setTransform(946.7013,570.4465);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFC892").s().p("AuxczIgKgEQgsgUglgsIgHgIQgaghgfg4IgFgJQhKiIgYhkIgCgIIgNhLIgBgIQgHgvgHgcIgCgIQgHgXgRguIgCgHQgQgrgGgcIgCgGQgThKAIhdIAAgFQADgiAIgvIAVhOIACgKQANgqAIgjIAXhMQAJgkAPgmIA/jBQAchZAWg3QAQgrARgmQAOgfAOgbQAMgUA6hnQAohHATg0IADgEQALggAQg6IAKglQAIgiAHgUQAMgiARgmQALgYAOgaQAZgxAqhCQBEhtBEhiQCBi4CIiZIA0g6QAagcAagbQA3g5A3gxIBQhGQArglAqggQA8gwA8gmQA9grA+giIAGgDQA+ggA8gaQAhgNAegKIAJgCIApgIQAXgFAqgDIApgEQAogDAcgDQAWgDARgEQA1gKBjgfIAkgLQBWgVA/AOQASAEAQAHQAuATAkApQALAOALAQQAcArAQA2QAFASAEARQANA9gFA5QgBASgEARQgLA/ghAtQgJAOgMANQgNANgdAXIgaAUQgaAVgRASQgNAMgIAKQgJAMgLASIgRAfIgSAhQgLARgHAKQgUAagcAVQgNAIgPAJQgfAPggAGQgQADgRAAQghABgggKQgQgFgPgGQgfgPgZgWQgMgKgLgKQgmAGglATIgbAQQghAWgdAfIgUAXQgYAdgWAmIgPAaIglBKIgMAbQjIGyhwErIgIAVQgoBtgUAwIgHAUQgkBVgrA+IgMARIgvA8IgOAQQgeAkgSAYIgMARIgkA6IgLATQgVAigSAWIgNAQIgYAaIgPAOQgPAPgKAMIgMAPQgdAlgVBFIgFARQgYBRgkC8IgDAQQghCugfBhIgFAOIgZBEIgFAOQgOAogJAdIgEAOQgGAYgJAtIgDAOQgJApgMAcIgFALQgiBFhJAiIgLAEQgpARgnAAQgjAAgggNg");
	this.shape_477.setTransform(946.6871,570.4499);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFC892").s().p("AuyczIgKgFQgrgUglgsIgHgIQgbghgfg3IgFgKQhJiHgYhlIgCgIIgNhLIgBgIQgHgvgIgcIgCgIQgGgXgRguIgCgHQgQgrgHgbIgBgHQgThKAIhdIAAgEQADgjAIgvIAXhMIADgKQAPgqAIghQAMgmANglQAJgiASgnIBFi8QAehWAYg3QASgqASgmQAOgeAPgbQAOgVA5hkQAohGAVg0IACgFQAMgfAQg5IALgmQAIggAIgVQAMgiARgmQALgYAOgaQAagxAohBQBEhwBDhgQB/i6CDiaQAagfAZgcQAZgeAZgaQA2g7A1gyIBPhHQAqgmApggQA7gzA5gnQA7gtA9giIAGgDQA8ggA9gcQAhgOAdgLIAJgCIAqgIQAXgEApgEIApgDIBEgHQAWgDARgEQA2gKBigfIAkgLQBWgUA/AOQASAEAQAHQAuAUAjApQALAOALAQQAcArAQA3QAFARADASQANA9gFA5IgFAjQgMA+ghAtQgJAOgNANQgNAOgcAWIgaAVQgbAUgRARQgLAMgJAMQgJALgLASIgRAfIgSAhQgKARgIAKQgVAbgcATQgNAJgOAIQgfAPghAGQgQACgQABQgiAAgggKQgPgFgPgHQgggOgYgXIgYgSQgmAHglATQgNAHgOAJQggAWgdAfIgUAXQgYAdgWAmIgPAbQgOAagWAvIgNAbQjIGyhvEqIgIAWQgoBtgUAwIgHAUQglBVgqA+IgMARIgwA7IgOARQgdAjgTAZIgMARIgjA6IgLASQgVAigTAXIgNAPIgYAaIgPAPQgPAOgKAMIgMAPQgcAmgWBEIgFASQgYBRgjC8IgDAQQghCtggBiIgFAOIgZBEIgFANQgOAogIAdIgEAOQgGAYgJAtIgDAOQgJApgMAdIgFALQgiBFhKAhIgLAEQgpARgnAAQgiAAghgNg");
	this.shape_478.setTransform(946.6888,570.4586);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFC892").s().p("AuycyIgKgEQgsgUglgsIgHgIQgaghgfg4IgFgJQhJiIgYhkIgCgJIgNhKIgBgIQgIgvgHgcIgCgIQgGgXgRgvIgCgGQgQgsgHgbIgCgGQgShKAIhdIAAgEQADgjAIgvIAZhLIADgKQASgqAHggQANgkAPglQAJgfAVgoIBLi4QAghTAag2QATgqATglQAPgeAPgbQAQgWA4hhQAphFAWg0IACgFQANgfAQg5IALglQAJggAIgVQAMghASgmQALgZAOgZQAagyAohBQBEhxBBhfQB9i8B/icQAYgfAZgcQAZgfAYgaQAzg8A1gzIBMhJQAqgnAnggQA6g2A3gnQA5gvA8gjIAGgDQA5ggA/geIA9gaIAJgCQAUgFAWgDQAXgEApgEIAqgDQAngDAcgEQAVgDASgEQA2gLBhgfIAlgKQBWgUA/APQARAEARAHQAtAUAjAqQAMAOAKAQQAcArAPA3IAJAiQAMA+gFA5IgFAjQgNA+ghAtQgKANgMANQgOAOgbAWIgbAVQgaAUgRARQgLAMgJAMQgJAMgLASIgRAeIgSAiQgKARgIAKQgVAagcATQgNAJgPAHQgfAQghAFQgQACgQAAQghAAghgKQgPgEgPgHQgfgPgYgXIgZgQQglAGglAUQgOAHgNAJQggAWgdAfIgUAXQgYAegWAmIgOAaQgOAbgXAvIgMAaQjJGzhuEpIgIAWQgpBtgTAwIgIAUQglBVgqA9IgMASQgPAUghAnIgOARQgdAjgSAZIgMARIgkA6IgLASQgVAigSAXIgNAPIgZAaIgOAOIgZAbQgIAIgFAHQgcAmgVBEIgFASQgYBSgjC7IgDAQQghCtggBiIgFANIgZBFIgFANQgOAogIAdIgEAOIgPBFIgDAOQgJApgMAcIgGAMQgiBEhJAhIgMAFQgoAQgmAAQgjAAghgOg");
	this.shape_479.setTransform(946.6755,570.4612);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFC892").s().p("AuzcyIgKgFQgrgUglgrIgHgIQgagigfg3IgFgKQhKiHgXhlIgCgIIgOhKIgBgJQgHgugHgdIgCgIQgGgXgRguIgCgGQgQgsgHgbIgCgGQgShKAIhdIAAgEQADgjAIgvIAchJIADgKQAUgrAHgeQANgjASgkQAIgeAXgnIBSi0QAihRAdg2QATgoAUglIAfg4QATgYA3heQAphEAXg0IACgEQAOggARg4IALglQAKgfAIgVQAMgiASgmIAYgxQAbg0Ang/QBEhyA/hfQB8i+B6idIAwg9QAYgfAXgaQAyg+AzgzQAighAogpQAqgpAmghQA4g3A1goQA4gxA6glIAFgDQA4gfBAghIA8gbIAJgCIAqgIIBAgHIAqgDIBDgHIAngIQA2gLBhgeIAlgLQBWgUA+AQQASAFARAHQAsAVAjAqQAMANAKARQAbArAQA3IAIAiQAMA+gFA5QgCASgEARQgNA9ghAtQgKANgMANQgOAOgcAWIgaAVQgaAVgRARQgLALgJANQgJAMgLARIgQAfIgTAhQgKARgIAKQgVAagcATQgOAJgPAHQgeAPghAFQgQADgRgBQghAAgggKQgQgFgOgHQgfgPgZgXQgNgHgLgIQgmAHgkATQgOAIgNAJQghAWgcAfIgUAXQgXAegXAmIgOAaIglBKIgMAbQjIGyhvEqIgIAWQgpBtgTAvIgHAUQglBVgqA9IgNASQgPAUggAnIgOAQQgeAkgSAZIgMARIgkA6IgLASQgUAigTAWIgNAQIgZAaIgOAOQgPAPgKAMIgMAPQgcAmgVBEIgFASQgYBSgkC7IgDAQQggCtggBhIgFAOIgZBEIgFAOQgOAngJAeIgDAOIgPBFIgDAOQgJApgNAcIgFALQgiBEhKAhIgLAFQgpAQgmAAQgjAAghgOg");
	this.shape_480.setTransform(946.686,570.4521);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFC892").s().p("AuzcyIgKgFQgrgUglgsIgHgIQgbghgeg4IgFgJQhKiHgXhlIgCgJIgOhKIgBgIQgHgvgHgcIgCgIQgGgXgRguIgCgHQgQgrgHgbIgCgHQgShKAIhcIAAgEQADgjAIgvIAehIIAEgJQAWgsAHgcQAOgiATgkQAIgcAagnQAthXArhYQAkhPAfg1IAphMQAQgdARgaQAVgaA2hcQAqhCAXg0IACgEQAPggARg3IAMgkQAKgfAIgWQANghASgmIAYgyQAbg0Amg/QBEhzA+heQB6i/B2ifQAXghAXgdQAXggAXgaQAwg/Axg0QAhghAogrQApgqAlghQA3g6AygoQA2g0A5glIAFgDQA2gfBBgjIA7gcIAJgCQAUgFAWgDQAYgEApgDIApgDQAngEAcgEQAVgDASgEQA3gMBggeIAlgKQBWgUA+ARQASAFAQAHQAtAVAiAqQAMAOAKAQQAbAsAPA2IAIAjQAMA9gGA6IgFAjQgNA9giAtQgKAMgNANQgOAOgbAWIgaAVQgaAVgRARQgLAMgJAMQgJAMgLASIgQAeQgLAVgIAMQgKARgJAKQgUAagdATQgNAJgPAHQgfAOghAFQgQADgQgBQgiAAgggLQgPgFgOgHQgggPgYgXIgZgOQglAHglAUQgNAIgNAJQghAWgcAgIgUAXQgXAdgWAmIgPAbIgkBKIgNAaQjIGyhuEqIgIAWQgpBtgTAvIgIAUQglBVgqA9IgNASQgPAUggAnIgOAQQgeAkgSAYIgMASIgjA6IgLASQgVAigTAWIgNAQIgYAZIgPAPIgZAaQgHAIgFAIQgcAmgUBEIgFASQgYBSgkC6IgDARQghCtgfBhIgFAOIgZBEIgFAOQgOAngJAeIgDANIgPBGIgDAOQgKAogMAcIgFAMQgjBEhJAgIgMAFQgoAQglAAQgkAAghgOg");
	this.shape_481.setTransform(946.6769,570.4536);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFC892").s().p("Au0cyIgKgFQgrgUglgsIgGgIQgbgigfg3IgFgKQhJiHgXhlIgCgIIgOhKIgBgJQgHgugHgdIgCgIQgGgXgRguIgCgGQgQgsgHgbIgCgGQgShKAIhdIAAgDQADgjAIgvQAPgdASgpIAEgJQAYgtAGgaQAPgiAVgiQAIgbAdgnQAwhUAuhWQAmhNAhg1QAWgnAWgkIAhg2QAXgcA2hYQAqhBAYg0IACgEQAQggASg2IAMgkQAKgeAJgXQANghASgmIAYgxQAcg1Alg+QBEh1A7hdQB5jBByigIAsg/QAXghAVgaQAvhBAwg0QAeggApgtQApgsAighQA2g9AwgoQA1g2A3gmIAFgDIB1hEIA8geIAJgCIAqgHQAYgEAogDIApgEQAogDAbgEQAVgDASgFQA3gLBggeIAlgLQBWgTA+ARQASAFAQAIQAsAVAjArQALAOAKAQQAbArAPA3IAIAjQALA9gGA6QgCARgEARQgNA9giAtQgKANgNANQgOAOgcAVIgaAVQgaAVgQARQgLAMgJANQgJAMgLASIgQAeIgTAhQgKAQgJAKQgVAagcATQgOAIgPAIQgfAOghAFQgQACgQgBQghAAgggLQgQgGgOgHQgfgPgYgYIgZgLQgmAHgkAUQgOAIgNAJQggAWgcAgIgUAXQgXAegWAmIgPAaIgkBKIgMAbQjIGyhvEpIgIAWQgpBugTAuIgHAUQglBVgrA9IgMASIgwA7IgOAQQgdAkgSAYIgMASIgkA6IgLASQgVAigSAWIgOAPIgYAaIgPAPQgPAOgJAMQgHAIgFAIQgcAmgVBEIgFASQgYBSgjC6IgDARQghCtggBhIgFAOIgZBEIgFANQgOAogIAdIgEAOQgGAZgIAsIgDAOQgKApgMAcIgFALQgjBEhKAhIgLAEQgoAQgmAAQgjAAgigOg");
	this.shape_482.setTransform(946.6798,570.4554);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFC892").s().p("Au0cxIgKgEQgrgVglgsIgHgIQgaghgfg4IgFgJQhJiHgYhlIgCgJIgNhKIgBgIQgHgvgHgcIgCgIQgHgXgRguIgCgGQgPgsgHgbIgCgGQgShKAIhdIAAgDQADgjAIgvQAQgcATgpIAEgJQAbgtAGgYQAQghAWgiQAIgZAggnQAzhSAxhUQAphJAig1IAuhKIAig1QAageA0hUQArhBAZgzIADgFQAPggATg1IANgkQAKgdAJgXQANghATgmIAYgyQAcg1Akg+QBEh2A6hcQB3jDBtiiIArg/QAWgiAUgaQAuhDAug0QAdggAogvQApgtAhghQA0hAAugpQAzg3A2gnIAFgDIB0hGIA7gfIAJgCIAqgHIBAgIIApgDQAogDAbgEIAogIQA2gMBggeIAlgKQBWgTA+ASQASAFAQAIQAsAVAiArQALAOAKARQAaArAPA3QAFARADASQALA9gGA5QgCASgEARQgOA9gjAsQgJANgNANQgPAOgbAVIgaAVQgaAVgQARQgLAMgJANQgJANgKARIgRAeIgTAhQgKAQgJALQgVAZgdATQgNAIgPAHQgfAOghAFQgQACgRgBQghgBgggLQgPgFgOgHQgfgQgYgYIgagKQglAIglAUQgNAHgNAKQggAWgcAgIgUAXQgXAegWAmIgOAbQgPAbgWAuIgMAbQjIGyhuEpIgIAWQgpBugTAuIgIAUQglBVgqA9IgNASQgQAUggAmIgNARQgeAkgSAYIgMASIgjA6IgLASQgVAhgTAXIgNAPIgZAaIgOAOQgPAPgKAMIgMAQQgbAmgVBEIgFASQgYBTgjC5IgDARQghCsggBhIgFAOIgZBEIgFAOQgOAogIAdIgEAOIgPBFIgDAOQgJApgMAcIgGALQgjBEhKAgIgLAFQgnAPglAAQgkAAgigPg");
	this.shape_483.setTransform(946.6693,570.4618);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFC892").s().p("Au1cxIgKgFQgrgUglgsIgGgIQgbgigeg3IgFgKQhJiHgYhlIgCgIIgNhKIgBgIQgHgvgHgdIgCgHQgHgYgRgtIgCgHQgPgsgHgaIgCgHQgShKAIhcIAAgDQADgjAIgvQARgbAUgoIAFgJQAdguAFgWQARggAYghQAIgXAjgoQA2hPA0hSQArhHAlg1IAvhIIAkg1QAbgfA0hRQArhAAagzIADgFQAQggATg0IAOgkQAKgcAKgYQANggATgnIAYgxQAcg2Akg9QBDh4A5hbQB1jFBpijIAphAQAWgjATgaQAshEAsg1QAcggAogwQAogvAgghQAzhCArgqQAxg6A1gnIAFgDQAugeBFgqIA6ghIAJgCQATgEAXgDQAZgDAngEIApgDIBDgIIAogIQA3gMBfgeIAlgJQBWgTA+ASQARAGARAIQArAWAiArQALAOAKAQQAaAsAPA3QAEARADASQALA9gGA5QgDASgEARQgOA9gjAsQgJAMgOANQgOAOgbAVIgaAVQgaAVgQARQgLAMgJAOQgJAMgKASIgRAeIgTAhQgKAQgJAKQgVAZgdATQgOAIgPAHQgfAOghAEQgQACgQgBQghgBghgLQgPgGgOgHQgfgQgXgYIgbgJQglAIgkAVQgOAHgMAKQggAWgcAgIgUAXQgXAegWAnIgOAaIgkBKIgMAaQjIGyhvEpIgIAWQgpBvgSAtIgIAUQglBVgrA9IgNASIgvA6IgOARQgeAkgRAYIgMASIgkA6IgLASQgVAhgTAXIgNAPIgZAaIgOAOQgPAPgKAMIgMAQQgbAmgUBEIgFASQgYBTgjC5IgDARQghCsggBhIgFAOIgZBEIgFAOQgOAngIAeIgEAOIgPBFIgDAOQgJAogNAcIgFAMQgjBDhKAgIgLAFQgnAPglAAQglAAgigPg");
	this.shape_484.setTransform(946.6726,570.4625);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFC892").s().p("Au2cxIgKgFQgqgUglgsIgGgJQgbgigeg3IgFgJQhKiHgXhlIgCgIIgNhLIgBgIQgHgvgHgcIgCgIQgHgXgRguIgCgGQgQgsgGgbIgCgGQgShKAIhdIAAgCQADgiAIgvQASgbAWgnIAFgJQAegvAGgUQASgfAZghQAIgVAlgnQA6hNA4hQQAshFAng1IAxhGIAlg0QAeghAzhOQArg/AbgzIADgFQARghAUgyIAOgkQAKgbALgZQANggATgmIAYgxQAdg4Aig7QBEh6A2haQBzjGBmilQAUgjATgfQAVgjASgbQArhFAqg1QAbgfAogzQAngwAegiQAyhEAogqQAxg8AzgoIAEgDIBzhKIA5giIAJgCQATgEAXgDQAZgDAngEIApgDQAogEAbgEQAUgDAUgFQA3gMBfgeIAlgKQBWgSA9ATQASAFAQAJQAsAWAhArQALAPAJAQQAbAsAOA3IAIAjQAKA9gHA5QgCASgEARQgOA8gkAsQgJAMgOAOQgPAOgbAVIgaAUQgaAWgPARQgLALgJAOIgTAfIgQAdQgLAVgIAMQgLAQgJAKQgWAZgdASQgOAJgOAHQggANghAEQgQACgQgBQghgBgggMQgPgGgOgHQgfgQgYgYIgagHQgmAIgkAVIgaAQQggAYgcAfIgTAYQgXAegVAmIgPAbIgkBJIgMAbQjIGyhuEoIgIAXQgpBvgSAsIgJAVQglBUgrA9IgNASQgQAVgfAlIgOARQgeAkgRAYIgMASIgkA5IgLASQgVAigSAWIgOAQIgYAZIgPAPQgPAPgJAMQgHAIgFAIQgbAngUBCIgGATQgXBTgjC5IgDAQQghCtggBhIgFAOIgZBEIgFANQgOAogJAdIgDAOQgGAZgJAtIgDANQgJApgNAcIgFALQgjBDhLAgIgLAFQgnAOgkAAQglAAgjgOg");
	this.shape_485.setTransform(946.6645,570.4685);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFC892").s().p("Au2cxIgKgFQgrgVgkgsIgHgIQgagigfg3IgFgJQhJiIgXhkIgCgJIgNhKIgBgIQgHgvgHgcIgCgIQgHgXgRguIgCgGQgQgsgGgbIgCgGQgShKAIhdIAAgCQADgiAIgvQATgaAXgnIAFgJQAhgvAFgSQATgfAbggQAIgTAognQA+hLA6hOQAuhCApg0IA0hGIAmgyQAggjAxhLQAsg+AcgzIADgFQASghAUgxIAPgkQAKgaALgZQAOggATgnIAYgxQAdg4Aig7QBDh7A1hZQBxjIBhimQAUgkASgfQAUgkASgbQAphGAog2QAagfAog1QAmgxAdgiQAwhHAmgqQAvg/AygoIAEgDQArgeBHguIA4gjIAJgCQATgEAYgDQAYgEAogDIAogDQAogEAbgFIAogHQA4gNBegeIAlgJQBWgSA9AUQASAFAQAJQArAWAhAsQALAOAJAQQAbAsANA3IAIAkQAKA9gHA5QgCASgEARQgPA8gkAsQgJALgPAOQgPAOgaAVIgaAUQgaAWgPARQgLALgJAPIgTAeIgQAeQgLAVgIAMQgLAPgJALQgWAYgdASQgOAJgPAGQgfAOgiADQgQACgPgBQgigCgggMQgPgFgOgIQgegQgYgYIgbgGQglAIgkAWQgNAHgNAJQggAYgcAgIgTAXQgXAegVAmIgPAbIgjBKIgNAaQjIGyhtEoIgIAXQgqBvgRAsIgJAVQgmBUgqA9IgNASIgwA6IgOARQgdAkgSAYIgMASIgjA5IgLASQgVAigTAWIgOAQIgYAZIgPAPQgPAPgJALQgHAIgFAJQgbAngUBCIgFATQgYBUgiC4IgDAQQgiCtggBhIgFAOIgZBEIgFANQgOAogIAdIgDAOIgPBFIgDAOQgKApgMAbIgGAMQgjBDhKAgIgMAEQgmAOgkAAQglAAgjgOg");
	this.shape_486.setTransform(946.6686,570.4675);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFC892").s().p("Au3cwIgKgEQgqgVglgsIgGgJQgbgigeg3IgFgJQhJiHgXhlIgCgIIgNhLIgBgHQgHgwgIgcIgCgHQgGgYgRgtIgCgHQgQgsgHgaIgBgHQgShKAIhcIAAgCQADgiAIgvQAUgZAYgmIAGgJQAjgwAFgQQAUgeAcgfQAIgSArgnQBBhIA9hMQAwhAArg0IA2hEIAngyQAigkAxhIQAsg9AegzIACgEQATgiAUgwIAQgkQAKgZAMgaQANgfAUgnIAYgxQAdg5Ahg6QBDh8A0hZIDMlyQATgkARgfQAUglAQgbQAnhIAng2QAYgfAog2QAmgzAcgiQAvhKAjgqQAthBAxgpIAEgDQAogeBJgxIA3gkIAJgCQATgEAYgCQAZgEAngDIAogDQAogEAbgFIAogIQA4gNBegeIAlgIQBWgSA9AUQASAGAQAIQArAXAgAsQALAPAJAQQAaAsAOA3QAEASADASQAKA9gHA5QgDASgEARQgPA8gkArQgJALgPAOQgPAOgaAVIgaAVQgaAVgQARQgJALgKAPIgTAfIgQAdQgLAVgIAMQgKAPgKALQgWAZgeARQgOAJgOAGQggANghADQgQACgQgBQghgCghgMQgOgGgOgHQgfgRgXgYIgcgFQglAJgkAVQgNAIgMAJQggAYgcAgIgTAXQgWAegWAnIgOAbIgkBJIgMAaQjIGyhuEpIgIAWQgpBwgSArIgJAVQglBUgrA9IgNASQgQAVggAlIgNAQQgeAlgRAYIgMASIgkA5IgLASQgVAigTAWIgNAQIgZAZIgOAOIgZAbIgMAQQgaAogUBCIgFATQgYBUgjC4IgDAQQghCtggBgIgFAOIgZBEIgFAOQgOAogIAdIgDAOIgPBFIgDAOQgKAogMAcIgGAMQgjBChLAgIgLAFQgmANgkAAQglAAgkgPg");
	this.shape_487.setTransform(946.6602,570.4734);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFC892").s().p("Au3cwIgKgFQgrgVgkgsIgGgIQgbgigeg3IgFgJQhJiIgXhkIgCgJIgNhKIgBgIQgHgvgIgcIgCgIQgGgXgRguIgCgGQgQgsgHgbIgBgGQgShKAIhdIAAgBQADgiAIgvQAVgYAagmIAGgIQAlgxAEgOQAVgdAegfQAIgQAugnQBEhGBAhJQAyg+AugzIA3hDIAogxQAlgnAwhEQAsg8Afg0IACgEQAUghAVgvIAQgkQAKgYAMgaQAOggAUgnIAYgxQAeg5Agg6QBDh9AxhYQBujMBYipIAjhEQATgmAPgbQAmhKAmg2QAWgeAog5IA/hWQAuhMAhgrQAshDAvgqIAEgDQAmgdBJg0IA4glIAJgCIAqgHIBAgGIAogEQApgEAagEIAogIQA4gNBegeIAlgJQBWgRA9AVQASAFAQAJQAqAYAhAsQAKAOAJARQAaAsANA3QAFASADASQAJA9gHA5QgDASgEAQQgQA8gkArQgJAMgPAOQgQAOgaAUIgaAVQgaAVgPARQgJALgKAQIgTAeIgQAeQgLAVgIAMQgKAOgKALQgXAZgdARQgOAIgPAHQgfANgiADQgQABgQgBQghgCgggNQgPgGgOgHQgegRgXgZIgcgCQglAJgkAVQgNAIgNAJQgfAYgcAgIgTAXQgWAfgWAmIgOAbQgPAcgVAtIgMAbQjIGyhtEoIgIAWQgqBwgRArIgJAVQgmBUgqA9IgOASIgvA6IgOAQQgeAlgRAYIgMASIgjA5IgLASQgVAigTAWIgOAPIgZAaIgOAOQgPAPgJAMIgMAQQgaAogUBCIgGATQgXBUgjC4IgDAQQghCtggBgIgFAOIgZBEIgFANQgOAogIAdIgEAPIgOBFIgDANQgKApgNAcIgFALQgkBDhLAfIgLAFQglANgkAAQgmAAgjgPg");
	this.shape_488.setTransform(946.665,570.4714);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFC892").s().p("Au4cwIgKgFQgqgVgkgsIgHgJQgagigeg3IgFgJQhJiHgXhlIgCgIIgNhLIgBgHQgHgwgIgcIgCgHQgGgYgRgtIgCgGQgQgsgHgbIgBgGQgShKAIhdIAAgBQADgiAIgvQAXgXAaglIAGgJQAogxAEgMQAWgcAfgeQAIgOAxgoQBHhDBDhIQA0g7AwgzIA5hBIAqgwQAngpAuhBQAug7Afg0IACgEQAVghAVguIARgjQAKgYANgbQAOgfAUgnIAYgxQAeg6Afg5QBDh/AwhXQBsjNBUirIAhhFQASgnAPgbQAkhLAkg3IA9hYIA9hYQAshPAfgrQAqhGAugqIAEgDQAkgdBKg2IA3gnIAJgCQASgDAYgDQAagDAmgDIAogEQApgEAagFQATgDAVgFQA5gNBdgeIAlgIQBWgRA9AVQARAGAQAJQArAYAgAsQAKAPAJAQQAaAtANA3IAHAkQAJA8gIA6QgCARgFARQgPA8glArQgJALgQAOQgPAOgaAUIgaAVQgaAVgPARQgJAMgKAPIgTAfIgQAdQgLAWgIALQgKAPgLALQgWAYgeARQgOAIgOAGQggANgiADQgQABgPgBQgigDgggMQgOgGgOgIQgegRgXgZQgPgBgOAAQglAJgkAWQgMAIgNAJQgfAYgcAgIgTAYQgWAegVAmIgPAcIgjBJIgNAaQjHGyhuEoIgIAWQgpBxgSAqIgJAVQglBUgrA9IgOASIgvA6IgOAQQgeAlgRAXIgMATIgjA5IgLASQgVAigTAWIgOAPIgYAZIgPAPQgPAPgJAMIgMAQQgaAogTBCIgGATQgXBVgjC2IgDARQghCtggBgIgFAOIgZBEIgFANQgOAogIAdIgEAOIgOBGIgDANQgKApgNAbIgGAMQgjBChLAfIgLAFQglANgjAAQgnAAgkgPg");
	this.shape_489.setTransform(946.6627,570.4696);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFC892").s().p("Au4cwIgKgFQgqgVglgtIgGgIQgagigfg3IgFgJQhJiHgWhlIgCgJIgNhKIgBgIQgHgvgIgcIgCgIQgHgXgQgtIgCgGQgQgtgHgaIgBgGQgShKAIhdIAAgBQADgiAIgvQAYgWAcglIAGgIQAqgzAEgJQAWgcAhgdQAIgMAzgnQBLhBBGhGIBohrIA8hBIAqgvQApgqAug9QAug7Agg0IADgEQAUgiAXgsIARgjIAXgzIAihGIAZgxIA8hzIBxjWQBrjPBQisIAfhHQARgnANgbQAkhNAig4IA7hZQAlg2AXgkQAqhRAdgrQAphIAsgrIADgDQAigdBMg4IA2goIAJgCIArgGIA/gHIAogDQApgEAbgFIAngIQA5gOBdgdIAkgJQBWgQA9AWQASAGAQAJQAqAYAgAtQAKAPAJAQQAZAsANA4QAFASACASQAKA8gJA5QgCASgFARQgQA7glArQgJALgQAOQgQAOgaAUIgZAVQgaAWgPARQgJALgKAQIgTAfIgPAdQgMAVgIALQgKAPgLALQgWAYgeARIgdAOQggAMghADQgQABgQgBQghgDgggNQgPgGgNgIQgegRgYgZQgOgBgOABQglAKgkAWQgNAIgMAJQggAYgbAgIgSAYQgXAegVAnIgPAbIgjBJIgMAbQjIGxhtEoIgIAWQgqBxgRAqIgJAVQgmBVgrA8IgNARIgwA7IgNAQQgeAkgRAYIgMATIgjA5IgLASQgWAigTAVIgOAQIgYAZIgPAPQgPAPgJAMIgLAQQgaAogUBCIgFATQgYBVgiC2IgDARQghCtghBfIgFAPIgZBDIgFAOQgOAogIAdIgDAOIgPBFIgDAOQgJApgNAbIgGALQgkBDhLAfIgLAEQglAOgjAAQgmAAgkgQg");
	this.shape_490.setTransform(946.6752,570.454);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFC892").s().p("Au5cvIgKgEQgqgWgkgsIgGgIQgbgjgeg3IgFgJQhJiHgWhkIgCgJIgNhKIgBgIQgIgvgHgcIgCgIQgHgYgQgtIgCgGQgQgsgHgbIgCgGQgRhKAIhcIAAgBQADgiAIgvQAZgVAdgkIAHgIQAsg0ADgIQAXgaAjgdQAIgKA2gnQBPg/BIhDIBshpIA+g/IArguQAsgsAtg6QAug6Ahg0IADgEQAVgiAXgsIARgiIAZgyIAihGIAZgxIA8hzIBvjXQBpjRBLiuIAdhHIAehDQAhhOAig5IA5hbQAkg3AVgkQAqhUAagrQAnhKArgsIADgDQAggdBNg6QAegWAXgUIAJgCQARgDAagCQAagEAmgDIAogDQAogEAbgFIAngJQA5gOBcgdIAlgIQBWgQA9AWQASAHAQAJQApAYAgAuQALAOAIARQAZAsANA3IAHAkQAJA9gJA5QgDASgEARQgRA7glArQgKAKgPAOIgqAiIgaAVQgZAWgPARQgJALgKAQIgTAfIgPAdQgMAWgIALQgKAOgLALQgWAYgeARQgPAIgPAGQgfAMgiACQgQABgQgCQghgCgggOQgPgGgNgHQgegSgXgZQgPAAgOACQglAJgjAXIgZARQggAYgbAhIgSAXQgXAfgVAmIgOAbIgkBKIgMAaQjIGyhsEnIgIAWQgrBygQApIgKAVQgmBVgqA7IgOASIgwA7IgNAQQgeAkgRAYIgMATIgjA5IgLASQgVAigTAVIgOAQIgZAZIgOAOQgPAQgJALQgHAIgFAJQgaAogTBCIgFATQgYBVgiC2IgDARQgiCtggBfIgFAOIgZBEIgFAOQgOAogIAdIgDAOIgPBFIgDAOQgKAogMAbIgGAMQgkBChLAfIgMAFQgkANgjAAQgmAAglgRg");
	this.shape_491.setTransform(946.672,570.4514);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFC892").s().p("Au5cvIgKgFQgqgVglgsIgGgJQgagigeg3IgFgJQhJiHgXhlIgCgJIgMhKIgBgHQgIgwgHgcIgCgHQgHgYgRgtIgCgGQgPgtgHgaIgCgGQgRhKAIhdIAAAAQADgiAIgvQAagUAegkIAHgIQAvg0ADgGQAYgZAkgcQAIgJA5gnQBSg8BLhCQA7gzA2gyQAggfAfgfIAtguQAtgtAsg3QAvg5AigzIADgFQAWgiAXgsIASghIAZgyIAjhGIAZgwIA7h0IBujXQBnjTBHivIAbhIIAchEQAghQAgg5IA4hcQAjg5AUgkQAohWAYgtQAlhMAqgsIADgDQAdgdBPg8QAdgXAXgUIAJgCQARgDAagDIBAgGIAogDQAogFAbgFIAogIQA5gOBbgeIAlgHQBWgQA9AXQASAGAQAKQApAZAfAtQALAPAIAQQAZAtAMA3IAHAkQAJA9gJA5QgDASgFARQgRA7gmAqQgJAKgQAPIgpAhIgaAVQgaAWgOARQgJALgKARIgSAfIgQAdQgMAVgIALQgKAOgLAMQgXAXgeARQgOAIgPAFQggAMgiACQgQABgPgCQghgDghgNQgOgGgNgIQgegSgXgZQgPAAgPADQgkAKgkAXQgNAHgMAKQgfAYgbAhIgSAXQgXAfgVAnIgOAbIgjBJIgMAaQjIGyhtEnIgIAWQgqBygRApIgJAVQgmBVgrA7IgOASQgRAWgeAkIgOARQgeAkgQAYIgMATIgkA5IgLASQgVAhgTAWIgOAQIgZAZIgOAOQgPAQgJALIgMARQgZAogTBCIgGATQgXBWgiC1IgDARQgiCsggBgIgFAOIgZBEIgFANQgOAogIAdIgDAPIgPBFIgDANQgKApgNAbIgGAMQgkBBhLAfIgLAFQglANgiAAQgnAAgkgRg");
	this.shape_492.setTransform(946.6784,570.4557);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFC892").s().p("Au6cvIgKgFQgqgVgkgtIgGgIQgagjgeg3IgFgJQhJiHgXhkIgCgJIgMhKIgBgIQgIgvgHgcIgCgIQgHgYgRgsIgCgGQgQgtgGgaIgCgGQgRhKAIhdIAAAAQADgiAIgvQAbgTAggjIAHgIQAxg1ACgEQAZgYAmgcQAIgGA8goQBVg5BPhAQA8gxA4gyIBBg8IAugtQAwgwArgzQAvg3Ajg0IADgEQAXgjAYgrIASghIAagyIAjhFIAZgxIA7hzIBrjYQBmjUBCixIAahJIAahFQAfhSAeg5QAQgcAnhCQAjg6ASgkQAmhZAWgtQAkhOAogtIADgDQAbgcBPhAQAegXAXgVIAJgCIAqgFQAbgDAlgDIAogEQApgEAagFIAogJQA5gOBbgdIAlgIQBWgPA9AXQARAHAQAKQApAZAgAuQAKAPAIAQQAZAtAMA3IAGAkQAJA9gKA5QgCASgFAQQgRA7gnAqQgJALgQAOIgqAhIgZAVQgaAWgOARQgJALgKARIgSAgIgQAcQgMAWgIALQgKAOgLALQgXAXgeARQgPAHgPAGQggAMgiACQgQAAgPgCQghgDgggOQgPgGgNgIQgdgSgXgaQgPACgPADQglALgjAWQgNAIgMAKQgfAYgbAhIgSAYQgWAegVAnQgHALgIAQIgjBJIgMAbQjIGxhsEoIgIAVQgrBzgQAoIgKAWQgmBUgrA7IgOASQgRAWgeAkIgOAQQgeAlgQAYIgMATIgjA5IgLASQgWAhgTAWIgOAPIgYAZIgPAPQgPAPgJAMIgLARQgZAogTBCIgGATQgXBWgjC1IgDAQQghCtggBgIgFAOIgZBEIgFANQgOAogIAdIgEAOIgOBGIgDANQgKApgNAbIgGALQgkBChMAeIgLAFQgjANgiAAQgoAAglgRg");
	this.shape_493.setTransform(946.6727,570.4526);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFC892").s().p("Au6cvQgwgVgogyQgdgkgig+QhNiNgXhnQgFgXgJg8QgIg1gIgeQgHgYgTg0QgRgxgHgcQgThMAIhhQADgiAIgvQAcgRAhgjIA9g/QAagYAngbIBHgsQDCh6CkiWQCMiBBSh3QAigxAkhBIA+h2QCAj7A9iCQBkjWA9iyIAyiQQAdhTAdg5QAOgcAmhEQAjg8AQgkIA5iIQAihRAnguQAYgbBUhFQAegYAVgWIAKgCQAggFBKgGQBFgFAmgIQA+gMB+goQBvgcBJAdQA+AZArBAQAmA4AQBLQASBRgNBJQgOBSgyA1QgSAUgxAmQgtAjgUAZQgQATgVApQgXAsgNARQgdAoguAYQgtAYgyACQgyACgvgVQgvgVggglQg1AHgyAhQgtAdglAuQggAmgdA3QgSAhggBDQjQHDhwEwQgxCFgSAsQgqBigwBDQgSAXgsA1QgoAwgUAcIgvBNQgcAugXAaQgKAMgdAdQgaAZgMAQQghArgXBQQgZBUgmDKQgjC5giBkIgeBSQgRAxgJAhQgHAcgLA4QgLAxgPAgQgkBKhSAhQgqARgnAAQgoAAgkgRg");
	this.shape_494.setTransform(946.6791,570.4433);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_415}]},54).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).wait(337));

	// Vrstva_20
	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#FFE0C6").ss(10,1,1).p("AAEAVQgEgYgEgR");
	this.shape_495.setTransform(815.2,695.8375);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#FFE0C6").ss(10).p("EgyAg4qQBFCmAkClQByH9iqIHQiqIHmKFXQhwBhjjChQj3CwhhBRQl9E6gwFTQgZC0BHEjQBXFoAIBxQAbGUkcFRQkbFQmSAsQjHAVkhg4QlDhIijgZQkTgojhA2QkKBCiEC6QjIEcC0GGQCdFSFWD8QBlBKDUCVQC7CGB0BnQFDEiA2E+QAcCmgtEpQgzFGAKCKQAUEnDLDxQDLDwEgBHQDlA4Edg2QCxghFThzQFdh1CngiQEgg6DlAwQGRBTGFHNQBEBQD8FHQDDD/CICJQEKEOFqCjQFeCcGHAkQGHAkF0hbQGBhdE4jZQBwhPCSh9QCmiRBUhHQEzkHDohnQHrjZLtCmQDJAsG6CBQGiB7DeAtQGFBQFegVQGKgXE+iUQFbihDgkxQDrlAAHloQACiAgei0QgnjMgShmQhBl2BUjcQBBinDAjAQA1g2BuhpQBiheA6hFQEFk6AjmvQAjmvjRleQgzhVhgiAQiCitgZgkQivj6gNjPQgLieBWjvQBxk+AQhLQAojIhDjcQg+jKiHirQhih9jlh6Qj4iEhYhcQikiqAHjfQAFioBuj7QCYlUA0ieQBgkggCjwQgCjKhHjFQhpkijrjwQhChDiChzQh9hug0g2Qjxj6gxmGQgQh9gFjhQgFkEgJhpQgclcjVkHQjakQlMhRQmPhajBgzQlHhXj2hyQithRinjeQhah9gug/QhRhthGhFQl2lrpIiFQpDiDoZCYQlqBmklEGQiNCIhJBDQiAB0htA7Qj9CKlLAk");
	this.shape_496.setTransform(1134.8317,1056.4977);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_496},{t:this.shape_495}]}).wait(470));

	// Layer_1
	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFC892").s().p("EgHzB4xQmHgkleicQlqijkKkOQiIiJjDj/Qj8lHhEhQQmFnNmRhTQjlgwkgA6QinAildB1QlTBzixAhQkdA2jlg4QkghHjLjwQjLjxgUknQgKiKAzlGQAtkpgcimQg2k+lDkiQh0hni7iGQjUiVhlhKQlWj8idlSQi0mGDIkcQCEi6EKhCQDhg2ETAoQCjAZFDBIQEhA4DHgVQGSgsEblQQEclRgbmUQgIhxhXloQhHkjAZi0QAwlTF9k6QBhhRD3iwQDjihBwhhQGKlXCqoHQCqoHhyn9QgkilhEimQAEieBFiaQBCiWB0h8IAZgaIAMgNIASgEQBEgSBEgpQB+hOCSi1QE9mFDYnIQCmlcA9lLQAKg/AKgfQAYguAagsQAnhDAhgrQAsg5AuglQBBgzBBgmQBAglBNgeIB2gwQBIgcBHgSIAJgFQFLgkD9iKQBtg7CAh0QBJhDCNiIQElkGFqhmQIZiYJDCDQJICFF2FrQBGBFBRBtICIC8QCnDeCtBRQD2ByFHBXQDBAzGPBaQFMBRDaEQQDVEHAcFcQAJBpAFEEQAFDhAQB9QAxGGDxD6QA0A2B9BuQCCBzBCBDQDrDwBpEiQBHDFACDKQACDwhgEgQg0CeiYFUQhuD7gFCoQgHDfCkCqQBYBcD4CEQDlB6BiB9QCHCrA+DKQBDDcgoDIQgQBLhxE+QhWDvALCeQANDPCvD6QAZAkCCCtQBgCAAzBVQDRFegjGvQgjGvkFE6Qg6BFhiBeQhuBpg1A2QjADAhBCnQhUDcBBF2QASBmAnDMQAeC0gCCAQgHFojrFAQjgExlbChQk+CUmKAXQleAVmFhQQjegtmih7Qm6iBjJgsQrtimnrDZQjoBnkzEHQhUBHimCRQiSB9hwBPQk4DZmBBdQkJBBkUAAQhuAAhwgKg");
	this.shape_497.setTransform(1134.8317,1056.4977);

	this.timeline.addTween(cjs.Tween.get(this.shape_497).wait(470));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,0,1908.2,1840.5);


// stage content:
(lib.MacrofagHotovy = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(792.65,475.5,0.5181,0.5181,0,0,0,1532.5,916.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(470));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(488.5,492.9,496.6,461.6);
// library properties:
lib.properties = {
	id: '0FC2013FC0296440A7A8E81977B56B6B',
	width: 984,
	height: 984,
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