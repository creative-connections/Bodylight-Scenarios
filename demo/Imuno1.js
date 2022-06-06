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


(lib.trojuhelnicky = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#81CC69").s().p("AhJhbICTA3IhhCAg");
	this.shape.setTransform(22.7754,-83.7497,0.8897,0.8898,-149.9947);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#81CC69").ss(4,1,1).p("AgVBSIArij");
	this.shape_1.setTransform(20.475,-66.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#81CC69").s().p("AhJhbICTA3IhhCAg");
	this.shape_2.setTransform(-16.422,58.2726,0.8897,0.8898,39.2846);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#81CC69").ss(4,1,1).p("AAWhRIgrCj");
	this.shape_3.setTransform(-14.125,45.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#81CC69").s().p("AhJhbICTA3IhhCAg");
	this.shape_4.setTransform(-68.5713,-31.6286,0.8898,0.8899,135.0056);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#81CC69").ss(4,1,1).p("ABSAWIijgr");
	this.shape_5.setTransform(-55.475,-29.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#81CC69").s().p("AhJhbICTA3IhhCAg");
	this.shape_6.setTransform(74.2698,6.0901,0.8898,0.8899,-50.9468);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#81CC69").ss(4,1,1).p("AhRgVICjAr");
	this.shape_7.setTransform(61.125,3.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#81CC69").s().p("AhJhbICTA3IhhCAg");
	this.shape_8.setTransform(-30.8062,-71.3399,0.8898,0.8899,172.7351);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#81CC69").ss(4,1,1).p("AArBKIhViT");
	this.shape_9.setTransform(-23.05,-60.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#81CC69").s().p("AhJhbICTA3IhhCAg");
	this.shape_10.setTransform(37.84,44.8783,0.8898,0.8899,-4.4815);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#81CC69").ss(4,1,1).p("AgqhJIBVCT");
	this.shape_11.setTransform(30.2,33.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#81CC69").s().p("AhJhbICTA3IhhCAg");
	this.shape_12.setTransform(-65.5852,28.2914,0.8898,0.8899,81.2629);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#81CC69").ss(4,1,1).p("ABKgqIiTBV");
	this.shape_13.setTransform(-54.625,20.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#81CC69").s().p("AhJhbICTA3IhhCAg");
	this.shape_14.setTransform(73.6192,-53.8856,0.8898,0.8899,-89.9961);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#81CC69").ss(4,1,1).p("AhJArICThV");
	this.shape_15.setTransform(58.625,-44.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trojuhelnicky, new cjs.Rectangle(-74,-89.8,155.9,153.1), null);


(lib.troj_jeden = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#81CC69").s().p("AhLgzICXg5IhCDZg");
	this.shape.setTransform(-0.7969,3.7127,1,1,-59.9996);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.troj_jeden, new cjs.Rectangle(-9.1,-8.3,18.299999999999997,16.700000000000003), null);


(lib.T3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#479AE1").ss(5,1).p("AAxgTIhgAn");
	this.shape.setTransform(59.9721,-23.6722,0.7206,0.7206);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#479AE1").ss(5,1).p("AAwgUIhfAp");
	this.shape_1.setTransform(58.4768,-27.2214,0.7206,0.7206);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#479AE1").ss(5,1).p("ABKBiIiLg4IA4iL");
	this.shape_2.setTransform(67.4473,-30.0679,0.7206,0.7206);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#479AE1").ss(5,1).p("AgwAVIBggo");
	this.shape_3.setTransform(-59.8707,23.4217,0.7206,0.7206);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#479AE1").ss(5,1).p("AgvAVIBfgp");
	this.shape_4.setTransform(-58.3573,26.9709,0.7206,0.7206);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#479AE1").ss(5,1).p("AhJhhICLA4Ig4CL");
	this.shape_5.setTransform(-67.3459,29.8174,0.7206,0.7206);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#479AE1").ss(5,1).p("AgUgvIAoBg");
	this.shape_6.setTransform(-23.19,-60.0286,0.7206,0.7206);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#479AE1").ss(5,1).p("AgTgwIAoBh");
	this.shape_7.setTransform(-26.7212,-58.5153,0.7206,0.7206);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#479AE1").ss(5,1).p("ABihJIg4CLIiLg4");
	this.shape_8.setTransform(-29.5857,-67.4854,0.7206,0.7206);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#479AE1").ss(5,1).p("AAUAxIgohg");
	this.shape_9.setTransform(24.4084,59.4178,0.7206,0.7206);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#479AE1").ss(5,1).p("AAVAwIgphg");
	this.shape_10.setTransform(27.9576,57.9045,0.7206,0.7206);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#479AE1").ss(5,1).p("AhhBKIA4iLICLA4");
	this.shape_11.setTransform(30.8041,66.8746,0.7206,0.7206);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#479AE1").ss(5,1).p("AhbgjIC3BH");
	this.shape_12.setTransform(-63.2037,-25.2937,0.7206,0.7206);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#479AE1").ss(5,1).p("AAIh3IBICnIinBI");
	this.shape_13.setTransform(-75.5858,-31.3651,0.7206,0.7206);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#479AE1").ss(5,1).p("ABcAkIi3hH");
	this.shape_14.setTransform(63.1249,24.9711,0.7206,0.7206);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#479AE1").ss(5,1).p("AgHB4IhIinICnhI");
	this.shape_15.setTransform(75.507,31.0425,0.7206,0.7206);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#479AE1").ss(5,1).p("AgiBcIBGi3");
	this.shape_16.setTransform(-24.4872,63.2913,0.7206,0.7206);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#479AE1").ss(5,1).p("Ah4gFICmhKIBLCm");
	this.shape_17.setTransform(-30.3784,75.6698,0.7206,0.7206);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#479AE1").ss(5,1).p("AAjhbIhGC3");
	this.shape_18.setTransform(24.3724,-63.5958,0.7206,0.7206);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#479AE1").ss(5,1).p("AB5AFIinBLIhKin");
	this.shape_19.setTransform(30.2996,-75.9718,0.7206,0.7206);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B9DEFC").s().p("Ap+GyQglh3AAh/QAAirBCibQBAiWB0h1QB1h0CWhAQCdhCCpAAQCOAACFAuQCBAtBsBTQicg6imAAQi9AAirBJQimBGiBCBQiACAhGClQhJCtAAC8QAACGAlB/QhEhmgjh0g");
	this.shape_20.setTransform(-11.8716,-13.5889,0.7208,0.7208);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3F84E1").s().p("AhrGdQgagWgMgDQgMgCggAOQgeANgNgEQgNgFgRgcQgRgegMgFQgLgGgiAEQggACgMgIQgLgIgHgfQgIgigJgJIgCABIAGgIQANgRAFAAQAFAAAIAWQAHAUAFABQAFABAMgUQALgTAFAAQAFABAKATQAKAVAFAAQAlAAA3gaQBHgiAQgGQASgEBPgLQA7gHAegUQAfgVAegzQAqhIAJgLQAJgKA9g4QAsgpAMgkQANgigIg7QgLhUAAgNQAAgEATgJQAUgJAAgFQAAgEgVgHQgUgIgBgDQAAgFATgLQATgKgBgFQgBgEgVgFQgVgGgBgEQAAgDACgCQADgCgBgFQAIAJAfAHQAeAFAIAMQAIALgDAgQgEAhAFALQAGAMAdARQAcAQAEAOQAEAMgNAdQgOAgACAMQACAMAXAZQAVAZAAAOQAAAOgVAYQgXAagCAMQgCANAOAeQAMAegEANQgEANgcARQgeARgFAMQgGAMADAhQADAhgIALQgIAMggAGQgiAIgJAJQgIAIgIAiQgHAggLAIQgMAIgggCQgjgEgLAGQgLAFgRAeQgRAcgNAFQgNAEgegNQgggOgMACQgLADgaAWQgZAVgOABQgOgBgZgVgAnBERQgBgBANgPIACgCQACAFADABIgCABQgOALgCAAIgBAAgAmuEFIAAAAIANgJQgIAKgEAAIgBgBgAmuEFIAAAAgAnMEFQgBgBANgPIAGgGQgGgQgEgGIARAMIgHAKIADAJQANgJABABQABABgLAOIgEgHIgDACQgPALgCAAIgBAAg");
	this.shape_21.setTransform(4.9331,6.7513,0.7207,0.7207);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#479AE1").s().p("AgmH9QgagXgMgCQgMgCggANQgeANgNgEQgNgEgQgcQgSgegLgFQgMgGghADQghADgLgIQgLgIgIghQgHghgKgIQgIgJgigIQgggHgHgLQgJgMADggQADgigGgLQgFgMgegRQgcgRgEgOQgEgNAMgdQAOgfgCgNQgCgNgXgaQgVgYAAgOQAAgNAVgZQAXgaACgMQACgMgOggQgMgeAEgNQAEgOAcgQQAegRAFgMQAGgLgDgiQgDggAJgLQAHgMAggHQAigIAIgIQAKgJAHgiQAIgfALgJQAKgIAiADQAhADAMgGQALgGASgdQAQgcANgFQANgDAeAMQAgAOAMgCQAMgCAagWQAZgWANAAQAPAAAYAWQAaAWAMACQAMACAggOQAegMANADQANAFARAcQARAdALAGQAMAGAigDQAggDAMAIQAMAJAGAfQAIAiAJAJQAJAIAhAIQAgAHAIAMQAIAKgDAhQgDAiAGALQAFAMAeARQAcAQAFAOQADANgMAeQgOAgACAMQACAMAXAaQAVAZAAANQAAAOgVAYQgXAagCANQgCANAOAfQAMAdgDANQgFAOgcARQgeARgFAMQgGALADAiQADAhgIALQgIALggAHQghAIgJAJQgJAIgIAiQgGAfgMAJQgMAIgggDQgjgDgLAGQgLAFgRAeQgRAcgNAEQgNAEgegNQgggNgMACQgMACgaAXQgYAVgPAAQgNAAgZgVg");
	this.shape_22.setTransform(-0.0549,-0.1309,0.7207,0.7207);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A6D3FF").s().p("AlGMGQiWhAh1h0Qh0h1hAiWQhCicAAirQAAiqBCicQBAiXB0h0QB1h0CWhAQCchCCqAAQCrAACcBCQCXBAB0B0QB1B0A/CXQBCCcAACqQAACrhCCcQg/CXh1B0Qh0B0iXBAQicBCirAAQiqAAichCg");
	this.shape_23.setTransform(-0.0325,-0.02,0.7208,0.7208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T3, new cjs.Rectangle(-84.4,-84.8,168.8,169.3), null);


(lib.T2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#479AE1").ss(5,1).p("AAwgTIhfAo");
	this.shape.setTransform(60.3217,-23.1113,0.7205,0.7202);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#479AE1").ss(5,1).p("AAwgUIhfAp");
	this.shape_1.setTransform(58.8266,-26.6582,0.7205,0.7202);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#479AE1").ss(5,1).p("ABKBiIiLg4IA4iL");
	this.shape_2.setTransform(67.7957,-29.503,0.7205,0.7202);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#479AE1").ss(5,1).p("AgwAVIBhgo");
	this.shape_3.setTransform(-59.5008,23.9538,0.7205,0.7202);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#479AE1").ss(5,1).p("AgwAUIBggo");
	this.shape_4.setTransform(-57.9877,27.4828,0.7205,0.7202);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#479AE1").ss(5,1).p("AhJhhICLA4Ig4CL");
	this.shape_5.setTransform(-66.9748,30.3455,0.7205,0.7202);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#479AE1").ss(5,1).p("AgTgvIAnBg");
	this.shape_6.setTransform(-22.8263,-59.4453,0.7205,0.7202);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#479AE1").ss(5,1).p("AgTgwIAoBh");
	this.shape_7.setTransform(-26.3569,-57.9329,0.7205,0.7202);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#479AE1").ss(5,1).p("ABihJIg4CLIiLg4");
	this.shape_8.setTransform(-29.2209,-66.8976,0.7205,0.7202);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#479AE1").ss(5,1).p("AAUAwIgohf");
	this.shape_9.setTransform(24.764,59.9277,0.7205,0.7202);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#479AE1").ss(5,1).p("AAVAwIgphg");
	this.shape_10.setTransform(28.3126,58.4153,0.7205,0.7202);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#479AE1").ss(5,1).p("AhhBKIA4iLICLA4");
	this.shape_11.setTransform(31.1586,67.38,0.7205,0.7202);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#479AE1").ss(5,1).p("AhbgjIC3BI");
	this.shape_12.setTransform(-62.8332,-24.7317,0.7205,0.7202);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#479AE1").ss(5,1).p("AAHh8QAyAUAVAxQAVAxgUAxQgUAygxAVQgwAVgygU");
	this.shape_13.setTransform(-75.1491,-30.4523,0.7205,0.7202);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#479AE1").ss(5,1).p("ABcAlIi3hJ");
	this.shape_14.setTransform(63.474,25.5022,0.7205,0.7202);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#479AE1").ss(5,1).p("AgGB9QgygUgVgxQgVgxAUgxQAUgyAxgVQAwgVAyAT");
	this.shape_15.setTransform(75.7899,31.2318,0.7205,0.7202);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#479AE1").ss(5,1).p("AgiBcIBFi3");
	this.shape_16.setTransform(-24.1233,63.7988,0.7205,0.7202);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#479AE1").ss(5,1).p("Ah8gEQATgyAxgVQAxgWAxATQAyATAWAxQAVAwgTAy");
	this.shape_17.setTransform(-29.6924,76.1264,0.7205,0.7202);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#479AE1").ss(5,1).p("AAkhbIhHC3");
	this.shape_18.setTransform(24.728,-63.0103,0.7205,0.7202);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#479AE1").ss(5,1).p("AB9AFQgTAygxAWQgxAVgxgTQgygTgWgxQgVgwATgy");
	this.shape_19.setTransform(30.3332,-75.3469,0.7205,0.7202);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B9DEFC").s().p("Ap+GyQglh4AAh+QAAirBCibQBAiWB0h1QB1h0CWhAQCdhCCpAAQCOAACFAuQCBAtBsBTQicg6imAAQi9AAirBJQimBGiBCBQiACAhGClQhJCtAAC8QAACGAlB/QhDhmgkh0g");
	this.shape_20.setTransform(-11.5261,-13.15,0.7206,0.7202);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3F84E1").s().p("AhrGdQgagWgMgDQgMgCggAOQgeANgNgFQgNgEgRgbQgRgegMgGQgLgGgiAEQggACgMgIQgLgIgHggQgIghgJgJIgCABQgJAKgEgBIAAAAIANgJIAGgIQANgRAFAAQAFAAAIAWQAHAUAFABQAFAAAMgTQALgTAFAAQAFABAKATQAKAVAFAAQAlAAA3gbQBHgiAQgFQASgEBPgLQA7gIAegTQAfgVAeg0QAqhGAJgMQAJgKA9g4QAsgpAMgkQANghgIg7QgLhVAAgNQAAgEATgJQAUgJAAgFQAAgEgVgHQgUgHgBgEQAAgFATgKQATgLgBgFQgBgEgVgFQgVgGgBgEQAAgDACgDQADgBgBgEQAIAIAfAGQAeAHAIAKQAIAMgDAgQgEAhAFALQAGALAdASQAcAQAEAOQAEAMgNAdQgOAgACAMQACAMAXAZQAVAYAAAOQAAAOgVAZQgXAagCAMQgCANAOAfQAMAdgEANQgEAOgcAQQgeARgFAMQgGAMADAhQADAhgIALQgIALggAHQgiAIgJAJQgIAJgIAhQgHAggLAIQgMAIgggCQgjgEgLAGQgLAGgRAeQgRAbgNAEQgNAFgegNQgggOgMACQgLADgaAWQgZAVgOAAQgOAAgZgVgAnBERQgBAAANgQIACgCQACAFADABIgCABQgOALgCAAIgBAAgAnMEFQgBgBANgPIAGgGQgGgQgEgGIARALQAAABgHAKIADAJIgDADQgPAKgCAAIgBAAgAmzD/IgEgHQANgJABABQABABgLAOIAAAAg");
	this.shape_21.setTransform(5.2913,7.285,0.7205,0.7202);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#479AE1").s().p("AgmH8QgagWgMgCQgMgCggAOQgeAMgNgEQgNgEgQgcQgSgegLgGQgMgFghADQghADgLgIQgLgJgIggQgHgggKgKQgIgIgigIQgggIgHgKQgJgMADggQADgjgGgKQgFgMgegRQgcgRgEgOQgEgNAMgdQAOgfgCgOQgCgLgWgbQgWgYAAgOQAAgOAWgYQAWgaACgMQACgNgOgfQgMgeAEgNQAEgOAcgQQAegRAFgMQAGgLgDgiQgCggAIgMQAHgLAggHQAigIAIgJQAKgIAHgiQAIggALgIQAKgIAiADQAhADAMgGQALgGASgdQAQgcANgEQANgEAeANQAgANAMgCQAMgCAagXQAZgVANAAQAPAAAYAVQAaAXAMACQAMACAggNQAegNANAEQANAEARAcQARAdALAGQAMAGAigDQAggDAMAIQAMAIAGAgQAIAiAJAIQAJAJAhAIQAgAHAIALQAIALgDAhQgDAiAGALQAFAMAeARQAcAQAFAOQAEANgNAeQgOAfACANQACAMAXAaQAVAYAAAOQAAAOgVAYQgXAbgCALQgCAOAOAfQANAdgEANQgFAOgcARQgeARgFAMQgGALADAiQADAhgIALQgIALggAHQghAIgJAIQgJAJgIAhQgGAggMAJQgMAIgggDQgjgDgLAFQgLAGgRAeQgRAcgNAEQgNAEgegMQgggOgMACQgMACgaAWQgYAWgPAAQgNAAgZgWg");
	this.shape_22.setTransform(0.3041,0.4068,0.7205,0.7202);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A6D3FF").s().p("AlGMGQiWg/h1h1Qh0h0hAiXQhCicAAirQAAiqBCicQBAiWB0h1QB1h0CWhAQCchCCqAAQCrAACcBCQCXBAB0B0QB1B1A/CWQBCCcAACqQAACrhCCcQg/CXh1B0Qh0B1iXA/QicBCirAAQiqAAichCg");
	this.shape_23.setTransform(0.3095,0.4086,0.7206,0.7202);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T2, new cjs.Rectangle(-84,-98.4,168.7,183.4), null);


(lib.T1regZmena = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#479AE1").ss(5,1).p("AgOgiIAdBF");
	this.shape.setTransform(-59.7752,23.6166,0.9999,0.9999,-89.7316);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#479AE1").ss(5,1).p("AgTgvIAoBf");
	this.shape_1.setTransform(-57.8327,26.9207,0.7205,0.7205,-89.7318);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#479AE1").ss(5,1).p("AA2g+QAjAxgCAKQgCAHhIAiQhAAfgLgJQgJgIgPg2");
	this.shape_2.setTransform(-66.3203,28.3299,0.9999,0.9999,-89.7316);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#479AE1").ss(5,1).p("AgOgiIAdBF");
	this.shape_3.setTransform(60.0771,-23.5673,0.9999,0.9999,90.2684);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#479AE1").ss(5,1).p("AgTgvIAoBf");
	this.shape_4.setTransform(58.3298,-26.7669,0.7205,0.7205,90.2682);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#479AE1").ss(5,1).p("AA2g+QAjAxgCAKQgCAHhIAiQhAAfgLgJQgJgIgPg2");
	this.shape_5.setTransform(66.6223,-28.2807,0.9999,0.9999,90.2684);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#479AE1").ss(5,1).p("AgOgiIAdBF");
	this.shape_6.setTransform(24.5,59.575,1,1,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#479AE1").ss(5,1).p("AgTgvIAoBf");
	this.shape_7.setTransform(28.0288,58.0941,0.7206,0.7206,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#479AE1").ss(5,1).p("AA2g+QAjAxgCAKQgCAHhIAiQhAAfgLgJQgJgIgPg2");
	this.shape_8.setTransform(29.2445,66.0988,1,1,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#479AE1").ss(5,1).p("AgOgiIAdBF");
	this.shape_9.setTransform(-23.1,-59.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#479AE1").ss(5,1).p("AgTgvIAoBf");
	this.shape_10.setTransform(-26.6288,-58.3441,0.7206,0.7206);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#479AE1").ss(5,1).p("AA2g+QAjAxgCAKQgCAHhIAiQhAAfgLgJQgJgIgPg2");
	this.shape_11.setTransform(-27.8445,-66.3487);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#479AE1").ss(5,1).p("AhbgkIC3BJ");
	this.shape_12.setTransform(-63.1209,-25.1132,0.7204,0.7204);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#479AE1").ss(5,1).p("AAHh8QAyAUAVAxQAVAxgUAxQgUAygxAVQgwAVgygU");
	this.shape_13.setTransform(-75.435,-30.8535,0.7204,0.7204);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#479AE1").ss(5,1).p("ABcAlIi3hJ");
	this.shape_14.setTransform(63.1675,25.0996,0.7204,0.7204);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#479AE1").ss(5,1).p("AgGB9QgygUgVgxQgVgxAUgxQAUgyAxgVQAwgVAyAU");
	this.shape_15.setTransform(75.4816,30.8399,0.7204,0.7204);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#479AE1").ss(5,1).p("AgiBcIBGi3");
	this.shape_16.setTransform(-24.4167,63.4256,0.7204,0.7204);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#479AE1").ss(5,1).p("Ah8gEQATgyAxgWQAxgVAxATQAyATAWAxQAVAwgTAy");
	this.shape_17.setTransform(-29.985,75.7478,0.7204,0.7204);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#479AE1").ss(5,1).p("AAjhbIhGC3");
	this.shape_18.setTransform(24.4273,-63.4211,0.7204,0.7204);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#479AE1").ss(5,1).p("AB9AFQgTAygxAWQgxAVgxgTQgygTgWgxQgVgwATgy");
	this.shape_19.setTransform(30.0316,-75.7613,0.7204,0.7204);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B9DEFC").s().p("Ap+GyQglh3AAh/QAAirBCibQBAiWB0h1QB1h0CWhAQCdhCCpAAQCOAACFAuQCBAtBsBTQicg6imAAQi9AAirBJQimBGiBCBQiACAhGClQhJCtAAC8QAACGAlB/QhEhmgjh0g");
	this.shape_20.setTransform(-11.7828,-13.5202,0.7207,0.7207);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3F84E1").s().p("AhrGdQgagWgMgDQgMgCggAOQgeANgNgFQgNgEgRgbQgRgegMgGQgLgGgiAEQggADgMgJQgLgIgHgfQgIgigJgJIgCABIAGgIQANgRAFAAQAFABAIAVQAHAVAFAAQAFAAAMgTQALgSAFAAQAFAAAKAUQAKAUAFAAQAlAAA3gbQBHgiAQgFQASgEBPgLQA7gIAegTQAfgVAeg0QAqhGAJgMQAJgKA9g4QAsgqAMgiQANgigIg7QgLhVAAgNQAAgEATgJQAUgJAAgFQAAgEgVgHQgUgHgBgEQAAgFATgKQATgLgBgFQgBgEgVgFQgVgFgBgEQAAgEACgCQADgCgBgEQAIAIAfAHQAeAGAIAKQAIAMgDAgQgEAhAFALQAGALAdASQAcARAEANQAEAMgNAdQgOAgACAMQACAMAXAZQAVAYAAAOQAAAOgVAZQgXAagCAMQgCANAOAfQAMAegEANQgEANgcAQQgeASgFALQgGAMADAhQADAhgIALQgIALggAHQgiAIgJAJQgIAJgIAiQgHAfgLAIQgMAJgggDQgigEgMAGQgLAGgRAeQgRAbgNAEQgNAFgegNQgggOgMACQgLADgaAWQgZAVgOAAQgOAAgZgVgAnBERQgBgBANgPIACgCIgEgHQANgJABABQABABgLAOQACAFACABIgBABQgPAMgBAAIgBgBgAmuEFIgBAAIAOgJQgIAKgEAAIgBgBgAmvEFIAAAAgAnMEFQgBgBANgPIAGgGQgGgQgEgFIARAKQAAABgHAKIAAAAIADAJIgDADQgPAKgCAAIgBAAg");
	this.shape_21.setTransform(5.0046,6.8874,0.7205,0.7205);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#479AE1").s().p("AgmH8QgagWgMgCQgMgCggAOQgeANgNgFQgNgEgQgcQgSgdgLgHQgMgFghADQghADgLgIQgLgJgIgfQgHgigKgJQgIgIgigIQgggIgHgKQgJgMADggQADgjgGgKQgFgMgegRQgcgQgEgOQgEgNAMgeQAOgfgCgOQgCgLgXgbQgVgYAAgOQAAgNAVgYQAXgbACgMQACgNgOgfQgMgeAEgNQAEgOAcgQQAegRAFgMQAGgLgDgiQgDggAJgMQAHgKAggIQAigIAIgJQAKgIAHgiQAIggALgIQALgIAhADQAhADAMgGQALgGASgdQAQgcANgEQANgEAeANQAgANAMgCQAMgCAagXQAZgVANAAQAPAAAYAVQAaAXAMACQAMACAggNQAegNANAEQANAEARAcQARAdALAGQAMAGAigDQAggDAMAIQAMAIAGAgQAIAiAJAIQAJAJAhAIQAgAIAIAKQAIALgDAhQgDAiAGALQAFAMAeARQAcAQAFAOQADANgMAeQgOAfACANQACAMAXAbQAVAYAAANQAAAOgVAYQgXAbgCALQgCAOAOAfQAMAegDANQgFAOgcAQQgeARgFAMQgGALADAiQADAhgIALQgIALggAHQghAIgJAIQgJAJgIAiQgGAfgMAJQgMAIgggDQgigDgMAFQgLAHgRAdQgRAcgNAEQgNAFgegNQgggOgMACQgMACgaAWQgYAWgPAAQgNAAgZgWg");
	this.shape_22.setTransform(0.0177,0.0068,0.7205,0.7205);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A6D3FF").s().p("AlGMGQiWg/h1h1Qh0h0hAiXQhCicAAirQAAiqBCicQBAiWB0h1QB1h0CWhAQCchCCqAAQCrAACcBCQCXBAB0B0QB1B1A/CWQBCCcAACqQAACrhCCcQg/CXh1B0Qh0B1iXA/QicBCirAAQiqAAichCg");
	this.shape_23.setTransform(0.055,0.0473,0.7207,0.7207);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Vrstva_2
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFCC").ss(9,1).p("Aq5kVICFA1ArtmOQAkAOAPAkQAQAjgPAkQgOAkgjAPQgkAQgkgPAK6EWIiFg1ALuGPQgkgOgPgkQgQgjAPgkQAOgkAjgPQAkgQAkAP");
	this.shape_24.setTransform(0.025,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFCC").s().p("AlGMGQiWg/h1h1Qh0h0hAiXQhCicAAirQAAiqBCicQBAiWB0h1QB1h0CWhAQCchCCqAAQCrAACcBCQCXBAB0B0QB1B1A/CWQBCCcAACqQAACrhCCcQg/CXh1B0Qh0B1iXA/QicBCirAAQiqAAichCg");
	this.shape_25.setTransform(0.0984,0.0786,0.7756,0.7756);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFCC").ss(12,1).p("AEOq8Ig0CFAEOq8QgkgOgQgjQgPgjANgkAGGrxQgOAkgjAPQgjAQgkgOAkNK9IAziFAmFLyQANgkAkgPQAjgQAkAOQAkANAQAkQAPAjgNAk");
	this.shape_26.setTransform(0.025,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFCC").ss(9,1).p("AJ7j5IhGAeALXjiQgxAigKgCQgHgBgag2QgEgIgFgKQgehCAJgLQAIgJA3gPAJpkYIhGAdAElJpIgdhGADtLVQgjgxACgKQABgHA2gaIgehHAElJpQAzgXAKAIQAJAIAPA3AEDJ5QAJgFAKgEQAIgEAHgDAkZpoIAdBGAj3p4IAeBHAj3p4QgJAFgKAEQgIAEgHADQgzAXgKgIQgJgIgPg3AjgrUQAiAxgCAKQgBAHg2AaApmEdIBGgdAp6D9QAEAIAFAKQAeBCgJALQgIAJg3APAp6D9IBGgeArWDmQAxgiAKACQAHABAaA2");
	this.shape_27.setTransform(0.15,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T1regZmena, new cjs.Rectangle(-86.3,-98.8,172.7,186.89999999999998), null);


(lib.T1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#479AE1").ss(5,1).p("AAxgUIhgAo");
	this.shape.setTransform(59.9721,-23.5452,0.7206,0.7206);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#479AE1").ss(5,1).p("AAwgTIhfAo");
	this.shape_1.setTransform(58.4768,-27.0763,0.7206,0.7206);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#479AE1").ss(5,1).p("ABLBeQgpARgogQQgpgRgRgpQgSgnARgpQAQgqApgR");
	this.shape_2.setTransform(67.3944,-29.6163,0.7206,0.7206);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#479AE1").ss(5,1).p("AgwAVIBggo");
	this.shape_3.setTransform(-59.8707,23.5488,0.7206,0.7206);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#479AE1").ss(5,1).p("AgvAVIBfgp");
	this.shape_4.setTransform(-58.3573,27.098,0.7206,0.7206);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#479AE1").ss(5,1).p("AhKhdQApgRAoAQQApARARApQASAogRApQgQAogpAS");
	this.shape_5.setTransform(-67.293,29.62,0.7206,0.7206);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#479AE1").ss(5,1).p("AgUgvIAoBf");
	this.shape_6.setTransform(-23.19,-59.8835,0.7206,0.7206);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#479AE1").ss(5,1).p("AgTgvIAoBf");
	this.shape_7.setTransform(-26.7212,-58.3882,0.7206,0.7206);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#479AE1").ss(5,1).p("ABehKQARApgQAoQgRApgpARQgnASgpgRQgqgQgRgp");
	this.shape_8.setTransform(-29.2612,-67.2879,0.7206,0.7206);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#479AE1").ss(5,1).p("AAUAxIgohg");
	this.shape_9.setTransform(24.4084,59.5449,0.7206,0.7206);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#479AE1").ss(5,1).p("AAVAxIgphg");
	this.shape_10.setTransform(27.9576,58.0315,0.7206,0.7206);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#479AE1").ss(5,1).p("AhdBLQgRgpAQgoQARgpApgRQAogSApARQAoAQASAp");
	this.shape_11.setTransform(30.4795,66.9672,0.7206,0.7206);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#479AE1").ss(5,1).p("AhbgkIC3BJ");
	this.shape_12.setTransform(-63.2037,-25.1306,0.7206,0.7206);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#479AE1").ss(5,1).p("AAHh8QAyAUAVAxQAVAxgUAxQgUAygxAVQgwAVgygU");
	this.shape_13.setTransform(-75.5217,-30.8727,0.7206,0.7206);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#479AE1").ss(5,1).p("ABcAlIi3hJ");
	this.shape_14.setTransform(63.1249,25.0982,0.7206,0.7206);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#479AE1").ss(5,1).p("AgGB9QgygUgVgxQgVgxAUgxQAUgyAxgVQAwgVAyAU");
	this.shape_15.setTransform(75.4429,30.8403,0.7206,0.7206);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#479AE1").ss(5,1).p("AgiBcIBGi3");
	this.shape_16.setTransform(-24.4872,63.4363,0.7206,0.7206);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#479AE1").ss(5,1).p("Ah8gEQATgyAxgWQAxgVAxATQAyATAWAxQAVAwgTAy");
	this.shape_17.setTransform(-30.0572,75.7624,0.7206,0.7206);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#479AE1").ss(5,1).p("AAjhbIhGC3");
	this.shape_18.setTransform(24.3724,-63.4507,0.7206,0.7206);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#479AE1").ss(5,1).p("AB9AFQgTAygxAWQgxAVgxgTQgygTgWgxQgVgwATgy");
	this.shape_19.setTransform(29.9785,-75.7948,0.7206,0.7206);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B9DEFC").s().p("Ap+GyQglh3AAh/QAAirBCibQBAiWB0h1QB1h0CWhAQCdhCCpAAQCOAACFAuQCBAtBsBTQicg6imAAQi9AAirBJQimBGiBCBQiACAhGClQhJCtAAC8QAACGAlB/QhEhmgjh0g");
	this.shape_20.setTransform(-11.8716,-13.5581,0.7208,0.7208);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3F84E1").s().p("AhrGdQgagWgMgDQgMgCggAOQgeANgNgFQgNgEgRgbQgRgegMgGQgLgGgiAEQggADgMgJQgLgIgHgfQgIgigJgJIgCABIAGgIQANgRAFAAQAFABAIAVQAHAVAFAAQAFAAAMgTQALgSAFAAQAFAAAKAUQAKAUAFAAQAlAAA3gbQBHgiAQgFQASgEBPgLQA7gIAegTQAfgVAeg0QAqhGAJgMQAJgKA9g4QAsgqAMgiQANgigIg7QgLhVAAgNQAAgEATgJQAUgJAAgFQAAgEgVgHQgUgHgBgEQAAgFATgKQATgLgBgFQgBgEgVgFQgVgFgBgEQAAgEACgCQADgCgBgEQAIAIAfAHQAeAGAIAKQAIAMgDAgQgEAhAFALQAGALAdASQAcARAEANQAEAMgNAdQgOAgACAMQACAMAXAZQAVAYAAAOQAAAOgVAZQgXAagCAMQgCANAOAfQAMAegEANQgEANgcAQQgeASgFALQgGAMADAhQADAhgIALQgIALggAHQgiAIgJAJQgIAJgIAiQgHAfgLAIQgMAJgggDQgigEgMAGQgLAGgRAeQgRAbgNAEQgNAFgegNQgggOgMACQgLADgaAWQgZAVgOAAQgOAAgZgVgAnBERQgBgBANgPIACgCIgEgHQANgJABABQABABgLAOQACAFACABIgBABQgPAMgBAAIgBgBgAmuEFIgBAAIAOgJQgIAKgEAAIgBgBgAmvEFIAAAAgAnMEFQgBgBANgPIAGgGQgGgQgEgFIARAKQAAABgHAKIAAAAIADAJIgDADQgPAKgCAAIgBAAg");
	this.shape_21.setTransform(4.9331,6.8688,0.7207,0.7207);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#479AE1").s().p("AgmH8QgagWgMgCQgMgCggAOQgeANgNgFQgNgEgQgcQgSgdgLgHQgMgFghADQghADgLgIQgLgJgIgfQgHgigKgJQgIgIgigIQgggIgHgKQgJgMADggQADgjgGgKQgFgMgegRQgcgQgEgOQgEgNAMgeQAOgfgCgOQgCgLgXgbQgVgYAAgOQAAgNAVgYQAXgbACgMQACgNgOgfQgMgeAEgNQAEgOAcgQQAegRAFgMQAGgLgDgiQgDggAJgMQAHgKAggIQAigIAIgJQAKgIAHgiQAIggALgIQALgIAhADQAhADAMgGQALgGASgdQAQgcANgEQANgEAeANQAgANAMgCQAMgCAagXQAZgVANAAQAPAAAYAVQAaAXAMACQAMACAggNQAegNANAEQANAEARAcQARAdALAGQAMAGAigDQAggDAMAIQAMAIAGAgQAIAiAJAIQAJAJAhAIQAgAIAIAKQAIALgDAhQgDAiAGALQAFAMAeARQAcAQAFAOQADANgMAeQgOAfACANQACAMAXAbQAVAYAAANQAAAOgVAYQgXAbgCALQgCAOAOAfQAMAegDANQgFAOgcAQQgeARgFAMQgGALADAiQADAhgIALQgIALggAHQghAIgJAIQgJAJgIAiQgGAfgMAJQgMAIgggDQgigDgMAFQgLAHgRAdQgRAcgNAEQgNAFgegNQgggOgMACQgMACgaAWQgYAWgPAAQgNAAgZgWg");
	this.shape_22.setTransform(-0.0549,-0.0135,0.7207,0.7207);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A6D3FF").s().p("AlGMGQiWg/h1h1Qh0h0hAiXQhCicAAirQAAiqBCicQBAiWB0h1QB1h0CWhAQCchCCqAAQCrAACcBCQCXBAB0B0QB1B1A/CWQBCCcAACqQAACrhCCcQg/CXh1B0Qh0B1iXA/QicBCirAAQiqAAichCg");
	this.shape_23.setTransform(-0.0325,0.0109,0.7208,0.7208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T1, new cjs.Rectangle(-84.4,-84.6,168.8,175.1), null);


(lib.T_reg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#479AE1").ss(5,1).p("AgOgiIAdBF");
	this.shape.setTransform(-59.828,23.6176,0.9999,0.9999,-89.7316);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#479AE1").ss(5,1).p("AgTgvIAoBf");
	this.shape_1.setTransform(-58.0283,26.9649,0.7205,0.7205,-89.7318);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#479AE1").ss(5,1).p("AA2g+QAjAxgCAKQgCAHhIAiQhAAfgLgJQgJgIgPg2");
	this.shape_2.setTransform(-66.3733,28.3312,0.9999,0.9999,-89.7316);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#479AE1").ss(5,1).p("AgOgiIAdBF");
	this.shape_3.setTransform(60.0289,-23.568,1,1,90.2684);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#479AE1").ss(5,1).p("AgTgvIAoBf");
	this.shape_4.setTransform(58.3769,-26.863,0.7205,0.7205,90.2682);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#479AE1").ss(5,1).p("AA2g+QAjAxgCAKQgCAHhIAiQhAAfgLgJQgJgIgPg2");
	this.shape_5.setTransform(66.5744,-28.2816,1,1,90.2684);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#479AE1").ss(5,1).p("AgOgiIAdBF");
	this.shape_6.setTransform(24.45,59.575,1,1,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#479AE1").ss(5,1).p("AgTgvIAoBf");
	this.shape_7.setTransform(27.9788,58.0941,0.7206,0.7206,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#479AE1").ss(5,1).p("AA2g+QAjAxgCAKQgCAHhIAiQhAAfgLgJQgJgIgPg2");
	this.shape_8.setTransform(29.1945,66.0988,1,1,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#479AE1").ss(5,1).p("AgOgiIAdBF");
	this.shape_9.setTransform(-23.15,-59.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#479AE1").ss(5,1).p("AgTgvIAoBf");
	this.shape_10.setTransform(-26.6788,-58.3441,0.7206,0.7206);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#479AE1").ss(5,1).p("AA2g+QAjAxgCAKQgCAHhIAiQhAAfgLgJQgJgIgPg2");
	this.shape_11.setTransform(-27.8945,-66.3487);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#479AE1").ss(5,1).p("AhbgkIC3BJ");
	this.shape_12.setTransform(-63.1617,-25.0958,0.7205,0.7205);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#479AE1").ss(5,1).p("AAHh8QAyAUAVAxQAVAxgUAxQgUAygxAVQgwAVgygU");
	this.shape_13.setTransform(-75.4779,-30.8371,0.7205,0.7205);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#479AE1").ss(5,1).p("ABcAlIi3hJ");
	this.shape_14.setTransform(63.1481,25.1255,0.7205,0.7205);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#479AE1").ss(5,1).p("AgGB9QgygUgVgxQgVgxAUgxQAUgyAxgVQAwgVAyAU");
	this.shape_15.setTransform(75.4643,30.8668,0.7205,0.7205);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#479AE1").ss(5,1).p("AgiBcIBGi3");
	this.shape_16.setTransform(-24.4509,63.458,0.7205,0.7205);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#479AE1").ss(5,1).p("Ah8gEQATgyAxgWQAxgVAxATQAyATAWAxQAVAwgTAy");
	this.shape_17.setTransform(-30.0202,75.7823,0.7205,0.7205);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#479AE1").ss(5,1).p("AAjhbIhGC3");
	this.shape_18.setTransform(24.4013,-63.4102,0.7205,0.7205);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#479AE1").ss(5,1).p("AB9AFQgTAygxAWQgxAVgxgTQgygTgWgxQgVgwATgy");
	this.shape_19.setTransform(30.0066,-75.7525,0.7205,0.7205);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B9DEFC").s().p("Ap+GyQglh3AAh/QAAirBCibQBAiWB0h1QB1h0CWhAQCdhCCpAAQCOAACFAuQCBAtBsBTQicg6imAAQi9AAirBJQimBGiBCBQiACAhGClQhJCtAAC8QAACGAlB/QhEhmgjh0g");
	this.shape_20.setTransform(-11.8283,-13.5154,0.7207,0.7207);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3F84E1").s().p("AhrGdQgagWgMgDQgMgCggAOQgeANgNgFQgNgEgRgbQgRgegMgGQgLgGgiAEQggADgMgJQgLgIgHgfQgIgigJgJIgCABIAGgIQANgRAFAAQAFABAIAVQAHAVAFAAQAFAAAMgTQALgSAFAAQAFAAAKAUQAKAUAFAAQAlAAA3gbQBHgiAQgFQASgEBPgLQA7gIAegTQAfgVAeg0QAqhGAJgMQAJgKA9g4QAsgqAMgiQANgigIg7QgLhVAAgNQAAgEATgJQAUgJAAgFQAAgEgVgHQgUgHgBgEQAAgFATgKQATgLgBgFQgBgEgVgFQgVgFgBgEQAAgEACgCQADgCgBgEQAIAIAfAHQAeAGAIAKQAIAMgDAgQgEAhAFALQAGALAdASQAcARAEANQAEAMgNAdQgOAgACAMQACAMAXAZQAVAYAAAOQAAAOgVAZQgXAagCAMQgCANAOAfQAMAegEANQgEANgcAQQgeASgFALQgGAMADAhQADAhgIALQgIALggAHQgiAIgJAJQgIAJgIAiQgHAfgLAIQgMAJgggDQgigEgMAGQgLAGgRAeQgRAbgNAEQgNAFgegNQgggOgMACQgLADgaAWQgZAVgOAAQgOAAgZgVgAnBERQgBgBANgPIACgCIgEgHQANgJABABQABABgLAOQACAFACABIgBABQgPAMgBAAIgBgBgAmuEFIgBAAIAOgJQgIAKgEAAIgBgBgAmvEFIAAAAgAnMEFQgBgBANgPIAGgGQgGgQgEgFIARAKQAAABgHAKIAAAAIADAJIgDADQgPAKgCAAIgBAAg");
	this.shape_21.setTransform(4.9649,6.8988,0.7206,0.7206);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#479AE1").s().p("AgmH8QgagWgMgCQgMgCggAOQgeANgNgFQgNgEgQgcQgSgdgLgHQgMgFghADQghADgLgIQgLgJgIgfQgHgigKgJQgIgIgigIQgggIgHgKQgJgMADggQADgjgGgKQgFgMgegRQgcgQgEgOQgEgNAMgeQAOgfgCgOQgCgLgXgbQgVgYAAgOQAAgNAVgYQAXgbACgMQACgNgOgfQgMgeAEgNQAEgOAcgQQAegRAFgMQAGgLgDgiQgDggAJgMQAHgKAggIQAigIAIgJQAKgIAHgiQAIggALgIQALgIAhADQAhADAMgGQALgGASgdQAQgcANgEQANgEAeANQAgANAMgCQAMgCAagXQAZgVANAAQAPAAAYAVQAaAXAMACQAMACAggNQAegNANAEQANAEARAcQARAdALAGQAMAGAigDQAggDAMAIQAMAIAGAgQAIAiAJAIQAJAJAhAIQAgAIAIAKQAIALgDAhQgDAiAGALQAFAMAeARQAcAQAFAOQADANgMAeQgOAfACANQACAMAXAbQAVAYAAANQAAAOgVAYQgXAbgCALQgCAOAOAfQAMAegDANQgFAOgcAQQgeARgFAMQgGALADAiQADAhgIALQgIALggAHQghAIgJAIQgJAJgIAiQgGAfgMAJQgMAIgggDQgigDgMAFQgLAHgRAdQgRAcgNAEQgNAFgegNQgggOgMACQgMACgaAWQgYAWgPAAQgNAAgZgWg");
	this.shape_22.setTransform(-0.0223,0.0176,0.7206,0.7206);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A6D3FF").s().p("AlGMGQiWg/h1h1Qh0h0hAiXQhCicAAirQAAiqBCicQBAiWB0h1QB1h0CWhAQCchCCqAAQCrAACcBCQCXBAB0B0QB1B1A/CWQBCCcAACqQAACrhCCcQg/CXh1B0Qh0B1iXA/QicBCirAAQiqAAichCg");
	this.shape_23.setTransform(0.01,0.0527,0.7207,0.7207);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T_reg, new cjs.Rectangle(-84.4,-98.8,168.8,183.39999999999998), null);


(lib.MHC3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#BD5EE1").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(-41.8531,41.6056,0.7206,0.7206);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BD5EE1").ss(5,1).p("Ag4A4IBwhv");
	this.shape_1.setTransform(-36.5744,36.3088,0.7206,0.7206);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BD5EE1").s().p("Ag8A8QgYgZAAgjQAAgiAYgZQAagZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgagZg");
	this.shape_2.setTransform(41.6513,-41.9168,0.7206,0.7206);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BD5EE1").ss(5,1).p("AA4g3IhvBv");
	this.shape_3.setTransform(36.3546,-36.6201,0.7206,0.7206);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BD5EE1").s().p("Ag8A8QgYgZAAgjQAAgiAYgZQAagZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgagZg");
	this.shape_4.setTransform(41.6513,41.6056,0.7206,0.7206);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BD5EE1").ss(5,1).p("AA4A4Ihvhv");
	this.shape_5.setTransform(36.3546,36.3088,0.7206,0.7206);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BD5EE1").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_6.setTransform(-41.8531,-41.9168,0.7206,0.7206);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BD5EE1").ss(5,1).p("Ag4g3IBwBv");
	this.shape_7.setTransform(-36.5744,-36.6201,0.7206,0.7206);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BD5EE1").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_8.setTransform(-61.3104,-0.1556,0.7206,0.7206);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BD5EE1").ss(5,1).p("AhPAAICfAA");
	this.shape_9.setTransform(-53.8518,-0.1737,0.7206,0.7206);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BD5EE1").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAkAAAYAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_10.setTransform(61.0906,-0.1556,0.7206,0.7206);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BD5EE1").ss(5,1).p("ABQAAIifAA");
	this.shape_11.setTransform(53.632,-0.1737,0.7206,0.7206);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BD5EE1").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_12.setTransform(-0.1099,58.901,0.7206,0.7206);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BD5EE1").ss(5,1).p("AAABQIAAif");
	this.shape_13.setTransform(-0.1099,51.4063,0.7206,0.7206);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BD5EE1").s().p("Ag7A8QgZgYAAgkQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAkgZAYQgZAZgjAAQgiAAgZgZg");
	this.shape_14.setTransform(-0.1099,-59.2123,0.7206,0.7206);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BD5EE1").ss(5,1).p("AAAhPIAACf");
	this.shape_15.setTransform(-0.1099,-51.7176,0.7206,0.7206);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F1D2FF").s().p("An8FDQgdhZAAheQAAkCDEi2QDEi3EUAAQBxAABqAiQBmAhBWA+Qh7griGAAQkwAAjZDKQhmBfg4B7Qg6CAAACMQAABiAeBfQg2hLgchWg");
	this.shape_16.setTransform(-9.4644,-10.1388,0.7208,0.7208);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BD5EE1").s().p("AhyEuQhLgJhDgzQgzgng1hFQgWgWgFgIQAOAFAoAbQAjAXAXACQDGAYCkh1QChhxAmiyIAKgoQAEgVgBgTQAyBEAVA3QAbBJgOBGQgPBFg8BAQgrAvhQA2QhRA3g8AZQhBAbg9AAQgQAAgQgCg");
	this.shape_17.setTransform(2.3247,6.1818,0.7206,0.7206);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C597E1").s().p("AhQGHQhLgIhDg1Qgxgmg2hHQg2hGgWg4QgfhLAPhFQAOhGA+g/QApgsBTg5QBUg5A4gYQBUgjBKAIQBLAJBEA1QAwAmA2BHQA1BGAXA3QAfBMgPBFQgOBGg+BAQgpArhTA5QhUA4g4AZQhEAcg9AAQgPAAgOgCg");
	this.shape_18.setTransform(-0.1099,-0.173,0.7206,0.7206);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E8C7F7").s().p("AnYG5QjEi3AAkCQAAkCDEi2QDEi3EUAAQEVAADEC3QDEC2AAECQAAECjEC3QjEC3kVAAQkUAAjEi3g");
	this.shape_19.setTransform(-0.04,-0.0477,0.7208,0.7208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MHC3, new cjs.Rectangle(-67.4,-65.3,134.7,130.39999999999998), null);


(lib.MHC2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#BD5EE1").s().p("Ag7A8QgZgYAAgkQAAgjAZgYQAZgZAiAAQAjAAAZAZQAZAYAAAjQAAAkgZAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(-41.8531,41.6493,0.7206,0.7206);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BD5EE1").ss(5,1).p("Ag4A4IBwhv");
	this.shape_1.setTransform(-36.5744,36.3526,0.7206,0.7206);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BD5EE1").s().p("Ag8A8QgYgYAAgkQAAgjAYgYQAagZAiAAQAjAAAZAZQAZAYAAAjQAAAkgZAYQgZAZgjAAQgiAAgagZg");
	this.shape_2.setTransform(41.6513,-41.8731,0.7206,0.7206);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BD5EE1").ss(5,1).p("AA4g3IhvBw");
	this.shape_3.setTransform(36.3546,-36.5764,0.7206,0.7206);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BD5EE1").s().p("Ag8A8QgYgYAAgkQAAgjAYgYQAagZAiAAQAjAAAZAZQAZAYAAAjQAAAkgZAYQgZAZgjAAQgiAAgagZg");
	this.shape_4.setTransform(41.6513,41.6493,0.7206,0.7206);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BD5EE1").ss(5,1).p("AA4A4Ihvhv");
	this.shape_5.setTransform(36.3546,36.3526,0.7206,0.7206);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BD5EE1").s().p("Ag7A8QgZgYAAgkQAAgjAZgYQAZgZAiAAQAjAAAZAZQAZAYAAAjQAAAkgZAYQgZAZgjAAQgiAAgZgZg");
	this.shape_6.setTransform(-41.8531,-41.8731,0.7206,0.7206);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BD5EE1").ss(5,1).p("Ag4g3IBwBw");
	this.shape_7.setTransform(-36.5744,-36.5764,0.7206,0.7206);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BD5EE1").s().p("Ag7A8QgZgYAAgkQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_8.setTransform(-61.3104,-0.1299,0.7206,0.7206);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BD5EE1").ss(5,1).p("AhPAAICfAA");
	this.shape_9.setTransform(-53.8518,-0.1119,0.7206,0.7206);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BD5EE1").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAkgZAYQgYAZgkAAQgiAAgZgZg");
	this.shape_10.setTransform(61.0906,-0.1299,0.7206,0.7206);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BD5EE1").ss(5,1).p("ABQAAIifAA");
	this.shape_11.setTransform(53.632,-0.1119,0.7206,0.7206);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BD5EE1").s().p("Ag7A8QgZgYAAgkQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAkgZAYQgZAZgjAAQgiAAgZgZg");
	this.shape_12.setTransform(-0.1099,58.9267,0.7206,0.7206);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BD5EE1").ss(5,1).p("AAABQIAAif");
	this.shape_13.setTransform(-0.1099,51.45,0.7206,0.7206);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BD5EE1").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_14.setTransform(-0.1099,-59.1685,0.7206,0.7206);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BD5EE1").ss(5,1).p("AAAhPIAACf");
	this.shape_15.setTransform(-0.1099,-51.6919,0.7206,0.7206);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F1D2FF").s().p("An8FDQgdhZAAheQAAkBDEi4QDEi2EUgBQBxABBqAiQBmAhBWA+Qh7griGAAQkwAAjZDKQhmBfg4B6Qg6CBAACLQAABjAeBgQg2hMgchWg");
	this.shape_16.setTransform(-9.4644,-10.1388,0.7208,0.7208);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BD5EE1").s().p("AhyEuQhLgJhDgzQg0gng0hFQgWgVgFgJQAOAFAoAbQAjAXAXADQDGAXCkh1QChhwAmizIAKgoQAEgUgBgTQAyBDAVA4QAbBJgOBFQgPBGg8A/QgrAvhQA2QhQA3g9AZQhBAag9AAQgQAAgQgBg");
	this.shape_17.setTransform(2.3247,6.2256,0.7206,0.7206);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C597E1").s().p("AhQGHQhLgJhDg0Qgxgmg2hHQg2hGgWg4QgfhLAPhGQAOhFA+hAQApgsBTg4QBTg5A5gYQBUgjBKAIQBLAJBEA1QAwAmA2BHQA1BFAXA4QAfBMgPBFQgOBGg+A/QgqAthSA3QhTA5g5AYQhEAdg8AAQgPAAgPgCg");
	this.shape_18.setTransform(-0.1099,-0.1062,0.7206,0.7206);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E8C7F7").s().p("AnYG5QjEi2AAkDQAAkBDEi3QDEi3EUAAQEVAADEC3QDEC3AAEBQAAEDjEC2QjEC3kVAAQkUAAjEi3g");
	this.shape_19.setTransform(-0.04,-0.0657,0.7208,0.7208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MHC2, new cjs.Rectangle(-67.4,-65.3,134.7,130.39999999999998), null);


(lib.MHC1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#BD5EE1").s().p("Ag7A8QgZgYAAgkQAAgjAZgYQAZgZAiAAQAjAAAZAZQAZAYAAAjQAAAkgZAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(-41.8531,41.7641,0.7206,0.7206);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BD5EE1").ss(5,1).p("Ag4A5IBwhw");
	this.shape_1.setTransform(-36.5744,36.4674,0.7206,0.7206);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BD5EE1").s().p("Ag8A8QgYgZAAgjQAAgiAYgZQAagZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgagZg");
	this.shape_2.setTransform(41.6513,-41.7403,0.7206,0.7206);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BD5EE1").ss(5,1).p("AA4g3IhvBv");
	this.shape_3.setTransform(36.3546,-36.4616,0.7206,0.7206);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BD5EE1").s().p("Ag8A8QgYgYAAgkQAAgjAYgYQAagZAiAAQAjAAAZAZQAZAYAAAjQAAAkgZAYQgZAZgjAAQgiAAgagZg");
	this.shape_4.setTransform(41.6513,41.7641,0.7206,0.7206);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BD5EE1").ss(5,1).p("AA4A5Ihvhw");
	this.shape_5.setTransform(36.3546,36.4674,0.7206,0.7206);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BD5EE1").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_6.setTransform(-41.8531,-41.7403,0.7206,0.7206);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BD5EE1").ss(5,1).p("Ag4g3IBwBv");
	this.shape_7.setTransform(-36.5744,-36.4616,0.7206,0.7206);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BD5EE1").s().p("Ag7A8QgZgYAAgkQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_8.setTransform(-61.3104,0.0029,0.7206,0.7206);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BD5EE1").ss(5,1).p("AhPAAICfAA");
	this.shape_9.setTransform(-53.8518,0.0029,0.7206,0.7206);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BD5EE1").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAkAAAYAZQAZAZAAAiQAAAkgZAYQgYAZgkAAQgiAAgZgZg");
	this.shape_10.setTransform(61.0906,0.0029,0.7206,0.7206);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BD5EE1").ss(5,1).p("ABQAAIifAA");
	this.shape_11.setTransform(53.632,0.0029,0.7206,0.7206);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BD5EE1").s().p("Ag7A8QgZgYAAgkQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAkgZAYQgZAZgjAAQgiAAgZgZg");
	this.shape_12.setTransform(-0.1099,59.0415,0.7206,0.7206);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BD5EE1").ss(5,1).p("AAABQIAAif");
	this.shape_13.setTransform(-0.1099,51.5829,0.7206,0.7206);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BD5EE1").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_14.setTransform(-0.1099,-59.0357,0.7206,0.7206);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#BD5EE1").ss(5,1).p("AAAhPIAACf");
	this.shape_15.setTransform(-0.1099,-51.5771,0.7206,0.7206);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F1D2FF").s().p("An8FDQgdhZAAheQAAkCDEi2QDEi3EUAAQBxAABqAiQBmAhBWA+Qh7griGAAQkwAAjZDKQhmBfg4B7Qg6CAAACMQAABiAeBfQg2hLgchWg");
	this.shape_16.setTransform(-9.4644,-10.0557,0.7208,0.7208);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BD5EE1").s().p("AhyEuQhLgJhDgzQgzgng1hFQgWgWgFgIQAOAFAoAbQAjAWAXADQDGAYCkh1QChhxAmiyIAKgoQAEgVgBgTQAyBEAVA3QAbBJgOBGQgPBFg8BAQgrAvhQA2QhQA3g9AYQhCAcg9AAQgQAAgPgCg");
	this.shape_17.setTransform(2.3247,6.3518,0.7206,0.7206);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C597E1").s().p("AhQGHQhLgJhDg0Qgxgmg2hHQg2hGgWg4QgfhLAPhGQAOhFA+hAQApgsBTg4QBTg5A5gYQBUgjBKAIQBLAJBEA1QAwAmA2BHQA1BFAXA4QAfBMgPBFQgOBGg+A/QgpAshTA4QhTA5g5AYQhEAdg8AAQgPAAgPgCg");
	this.shape_18.setTransform(-0.1099,0.0086,0.7206,0.7206);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E8C7F7").s().p("AnYG5QjEi3AAkCQAAkCDEi2QDEi3EUAAQEVAADEC3QDEC2AAECQAAECjEC3QjEC3kVAAQkUAAjEi3g");
	this.shape_19.setTransform(-0.04,0.0354,0.7208,0.7208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MHC1, new cjs.Rectangle(-67.4,-65.2,134.7,130.4), null);


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
	mask.graphics.p("AqrgEIBwvUIHgBlIGDKEIiPIwIITBSIjMDDIrVGEg");
	mask.setTransform(68.4,98.9);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#479AE1").ss(5,1).p("AAwgTIhfAo");
	this.shape.setTransform(227.375,83.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#479AE1").ss(5,1).p("AAwgUIhgAp");
	this.shape_1.setTransform(225.3,78.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#479AE1").ss(5,1).p("ABKBiIiLg4IA4iL");
	this.shape_2.setTransform(237.723,74.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#479AE1").ss(5,1).p("AgwAVIBhgo");
	this.shape_3.setTransform(61.05,149.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#479AE1").ss(5,1).p("AgwAUIBhgo");
	this.shape_4.setTransform(63.15,154.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#479AE1").ss(5,1).p("AhJhhICLA4Ig4CL");
	this.shape_5.setTransform(50.677,158.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#479AE1").ss(5,1).p("AgTgvIAnBg");
	this.shape_6.setTransform(111.95,33.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#479AE1").ss(5,1).p("AgTgwIAnBh");
	this.shape_7.setTransform(107.05,35.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#479AE1").ss(5,1).p("ABihJIg4CLIiLg5");
	this.shape_8.setTransform(103.075,23.0561);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#479AE1").ss(5,1).p("AAVAwIgphf");
	this.shape_9.setTransform(178,199.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#479AE1").ss(5,1).p("AAVAwIgphg");
	this.shape_10.setTransform(182.925,197.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#479AE1").ss(5,1).p("AhhBKIA4iLICLA4");
	this.shape_11.setTransform(186.875,209.473);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#479AE1").ss(5,1).p("AhbgjIC3BI");
	this.shape_12.setTransform(56.425,81.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#479AE1").ss(5,1).p("AAIh3IBICnIinBI");
	this.shape_13.setTransform(39.243,73.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#479AE1").ss(5,1).p("ABcAlIi3hJ");
	this.shape_14.setTransform(231.725,151.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#479AE1").ss(5,1).p("AgHB4IhIinICnhI");
	this.shape_15.setTransform(248.907,159.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#479AE1").ss(5,1).p("AgiBcIBFi3");
	this.shape_16.setTransform(110.175,204.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#479AE1").ss(5,1).p("Ah4gFICnhKIBKCm");
	this.shape_17.setTransform(101.975,221.702);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#479AE1").ss(5,1).p("AAjhbIhFC3");
	this.shape_18.setTransform(177.975,28.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#479AE1").ss(5,1).p("AB5AFIinBLIhKin");
	this.shape_19.setTransform(186.175,11.2764);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B9DEFC").s().p("Ap+GyQglh3AAh/QAAirBCibQBAiWB0h1QB1h0CWhAQCdhCCpAAQCOAACFAuQCBAtBsBTQicg6imAAQi9AAirBJQimBGiBCBQiACAhGClQhJCtAAC8QAACGAlB/QhDhmgkh0g");
	this.shape_20.setTransform(127.625,97.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3F84E1").s().p("AhrGdQgagWgMgDQgMgCggAOQgeANgNgFQgNgEgRgcQgRgdgLgGQgMgGgiAEQggACgMgIQgLgIgHggQgIghgIgJIgEABQgIAKgEgBIAAAAIAMgJIAHgIQANgSAFAAQAFABAIAWQAHAUAFABQAFABAMgUQALgTAFAAQAFABAKATQAKAVAFAAQAlAAA3gbQBIgiAPgFQASgFBPgKQA7gIAegUQAfgTAeg1QAqhGAJgMQAJgLA9g4QAsgpAMgjQANghgIg7QgLhVAAgNQAAgFATgIQAUgKAAgEQAAgFgVgGQgUgHgBgEQAAgFATgKQATgMgBgEQgBgEgVgFQgVgGgBgEQAAgDACgDQADgBgBgEQAIAIAfAGQAeAHAIAKQAIAMgDAgQgEAhAFALQAGALAdARQAcARAEANQAEANgNAdQgOAgACAMQACAMAXAZQAVAYAAAOQAAAOgVAZQgXAagCAMQgCAMAOAfQAMAegEANQgEANgcARQgeASgFALQgGALADAiQADAhgIALQgIALggAHQgiAIgJAJQgIAJgIAhQgHAggLAIQgLAIghgCQgigEgMAGQgLAGgRAdQgRAcgNAEQgNAFgegNQgggOgMACQgLADgaAWQgZAVgOAAQgOAAgZgVgAnBERQAAgBAMgPIACgCIgEgHQANgJABABQABABgLAOQACAFADABIgBABQgPALgCAAIgBAAgAnMEFQgBgBANgPIAGgGQgGgQgEgFIARAKQAAABgHAKIADAJIgDADQgPAKgCAAIgBAAg");
	this.shape_21.setTransform(150.9714,126.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#479AE1").s().p("AglH8QgbgWgLgCQgNgCgfAOQgfAMgMgEQgOgFgQgcQgSgdgLgGQgLgFgjADQggACgMgHQgLgJgHggQgIghgIgJQgJgIghgIQgggHgJgLQgHgMACggQADgjgFgKQgGgMgdgSQgcgQgFgOQgEgMAMgfQAOgfgCgNQgCgLgWgbQgWgYAAgOQAAgOAWgYQAWgaACgMQACgNgOgfQgMgeAEgNQAFgOAcgQQAdgRAGgMQAFgLgDgiQgCghAHgLQAJgLAggIQAhgHAJgJQAIgIAIgiQAHggALgIQAMgIAgADQAjADALgGQALgGASgdQAQgcAOgEQAMgEAfAMQAfANANgCQALgBAbgXQAYgVANAAQAPAAAYAVQAaAXAMABQANACAfgNQAegMANAEQAOAEAQAcQARAdAMAGQALAGAigDQAhgDALAIQALAIAIAgQAHAiAJAIQAIAJAiAHQAgAIAIALQAIALgDAhQgCAiAFALQAGAMAdARQAcAQAEAOQAEANgMAeQgNAfACANQABAMAXAaQAVAYAAAOQAAAOgVAYQgXAbgBALQgCANANAfQAMAfgEAMQgEAOgcAQQgdASgGAMQgFAKACAjQADAggIAMQgIALggAHQgiAIgIAIQgJAJgHAhQgIAggLAJQgLAHghgCQgigDgLAFQgMAGgRAdQgQAcgOAFQgNAEgegMQgfgOgNACQgMACgaAWQgZAWgOAAQgNAAgYgWg");
	this.shape_22.setTransform(144.05,116.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A6D3FF").s().p("AlGMGQiXhAh0h0Qh0h0hAiXQhCidAAiqQAAiqBCicQBAiWB0h1QB0h0CXhAQCdhCCpAAQCrAACcBCQCXBAB0B0QB0B1BACWQBCCcAACqQAACrhCCcQhACXh0B0Qh0B0iXBAQicBCirAAQipAAidhCg");
	this.shape_23.setTransform(144.05,116.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(28,0.4,108.80000000000001,197.1), null);


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
	mask.graphics.p("AjqIEIAAoIIhchSIhcngIH+A0IhcE8IGjDCIh7ExIijjBIA9HLg");
	mask.setTransform(98.625,65.2);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#479AE1").ss(5,1).p("AAwgTIhfAo");
	this.shape.setTransform(199.425,83.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#479AE1").ss(5,1).p("AAwgUIhfAp");
	this.shape_1.setTransform(197.35,78.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#479AE1").ss(5,1).p("ABKBiIiLg4IA4iL");
	this.shape_2.setTransform(209.773,74.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#479AE1").ss(5,1).p("AgwAVIBhgo");
	this.shape_3.setTransform(33.1,149.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#479AE1").ss(5,1).p("AgwAUIBggo");
	this.shape_4.setTransform(35.2,154.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#479AE1").ss(5,1).p("AhJhhICLA4Ig4CL");
	this.shape_5.setTransform(22.727,158.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#479AE1").ss(5,1).p("AgTgvIAnBg");
	this.shape_6.setTransform(84,33.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#479AE1").ss(5,1).p("AgTgwIAoBh");
	this.shape_7.setTransform(79.1,35.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#479AE1").ss(5,1).p("ABihJIg4CLIiLg5");
	this.shape_8.setTransform(75.125,23.0561);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#479AE1").ss(5,1).p("AAUAwIgohf");
	this.shape_9.setTransform(150.05,199.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#479AE1").ss(5,1).p("AAVAwIgphg");
	this.shape_10.setTransform(154.975,197.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#479AE1").ss(5,1).p("AhhBKIA4iLICLA4");
	this.shape_11.setTransform(158.925,209.473);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#479AE1").ss(5,1).p("AhbgjIC3BI");
	this.shape_12.setTransform(28.475,81.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#479AE1").ss(5,1).p("AAIh3IBICnIinBI");
	this.shape_13.setTransform(11.293,73.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#479AE1").ss(5,1).p("ABcAlIi3hJ");
	this.shape_14.setTransform(203.775,151.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#479AE1").ss(5,1).p("AgHB4IhIinICnhI");
	this.shape_15.setTransform(220.957,159.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#479AE1").ss(5,1).p("AgiBcIBFi3");
	this.shape_16.setTransform(82.225,204.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#479AE1").ss(5,1).p("Ah4gFICnhKIBKCm");
	this.shape_17.setTransform(74.025,221.702);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#479AE1").ss(5,1).p("AAjhbIhFC3");
	this.shape_18.setTransform(150.025,28.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#479AE1").ss(5,1).p("AB5AFIinBLIhKin");
	this.shape_19.setTransform(158.225,11.2764);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B9DEFC").s().p("Ap+GyQglh3AAh/QAAirBCibQBAiWB0h1QB1h0CWhAQCdhCCpAAQCOAACFAuQCBAtBsBTQicg6imAAQi9AAirBJQimBGiBCBQiACAhGClQhJCtAAC8QAACGAlB/QhDhmgkh0g");
	this.shape_20.setTransform(99.675,97.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3F84E1").s().p("AhrGdQgagWgMgDQgMgCggAOQgeANgNgFQgNgEgRgcQgRgdgLgGQgMgGgiAEQggACgMgIQgLgIgHggQgIghgIgJIgEABIAHgIQANgSAFAAQAFABAIAWQAHAUAFABQAFABAMgUQALgTAFAAQAFABAKATQAKAVAFAAQAlAAA3gbQBIgiAPgFQASgFBPgKQA7gIAegUQAfgTAeg1QAqhGAJgMQAJgLA9g4QAsgpAMgjQANghgIg7QgLhVAAgNQAAgFATgIQAUgKAAgEQAAgFgVgGQgUgHgBgEQAAgFATgKQATgMgBgEQgBgEgVgFQgVgGgBgEQAAgDACgDQADgBgBgEQAIAIAfAGQAeAHAIAKQAIAMgDAgQgEAhAFALQAGALAdARQAcARAEANQAEANgNAdQgOAgACAMQACAMAXAZQAVAYAAAOQAAAOgVAZQgXAagCAMQgCAMAOAfQAMAegEANQgEANgcARQgeASgFALQgGALADAiQADAhgIALQgIALggAHQgiAIgJAJQgIAJgIAhQgHAggLAIQgLAIghgCQgigEgMAGQgLAGgRAdQgRAcgNAEQgNAFgegNQgggOgMACQgLADgaAWQgZAVgOAAQgOAAgZgVgAnBERQAAgBAMgPIACgCIgEgHQANgJABABQABABgLAOQACAFADABIgBABQgPALgCAAIgBAAgAmuEFIAAAAIAMgJQgHAKgEAAIgBgBgAnMEFQgBgBANgPIAGgGIADAJIgDADQgPAKgCAAIgBAAgAnEDaIARAKQAAABgHAKQgGgQgEgFg");
	this.shape_21.setTransform(123.0214,126.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#479AE1").s().p("AgmH8QgagWgMgCQgMgCggAOQgeAMgNgEQgNgFgQgcQgSgdgLgGQgMgFghADQghACgLgHQgMgJgHggQgIghgIgJQgJgIgigIQgggHgHgLQgIgMACggQADgjgGgKQgFgMgegSQgcgQgEgOQgEgMAMgfQAOgfgCgNQgCgLgWgbQgWgYAAgOQAAgOAWgYQAWgaACgMQACgNgOgfQgMgeAEgNQAEgOAcgQQAegRAFgMQAGgLgDgiQgCghAIgLQAHgLAggIQAigHAJgJQAIgIAIgiQAHggAMgIQAKgIAiADQAhADAMgGQALgGASgdQAQgcANgEQANgEAeAMQAgANAMgCQAMgBAagXQAZgVANAAQAPAAAYAVQAaAXAMABQAMACAggNQAegMANAEQANAEARAcQARAdALAGQAMAGAigDQAhgDALAIQAMAIAGAgQAIAiAJAIQAJAJAhAHQAgAIAIALQAIALgCAhQgDAiAFALQAFAMAeARQAcAQAFAOQAEANgNAeQgOAfACANQACAMAXAaQAVAYAAAOQAAAOgVAYQgXAbgCALQgCANAOAfQANAfgEAMQgFAOgcAQQgeASgFAMQgFAKADAjQACAggIAMQgIALggAHQghAIgJAIQgJAJgIAhQgGAggMAJQgLAHghgCQgigDgMAFQgLAGgRAdQgRAcgNAFQgNAEgegMQgggOgMACQgMACgaAWQgYAWgOAAQgOAAgZgWg");
	this.shape_22.setTransform(116.1,116.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A6D3FF").s().p("AlGMGQiWhAh1h0Qh0h0hAiXQhCidAAiqQAAiqBCicQBAiWB0h1QB1h0CWhAQCchCCqAAQCrAACcBCQCXBAB0B0QB1B1A/CWQBCCcAACqQAACrhCCcQhACXh0B0Qh0B0iXBAQicBCirAAQiqAAichCg");
	this.shape_23.setTransform(116.1,116.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(56.8,8.5,83.7,113.4), null);


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
	mask.graphics.p("AoiF/IBSgKIEKmiImjj/IAfmEIH+hxIBwG3IAogKIHCDXIBcKCIygE9g");
	mask.setTransform(179.85,80.175);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#479AE1").ss(5,1).p("AAwgTIhfAn");
	this.shape.setTransform(199.425,92.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#479AE1").ss(5,1).p("AAwgUIhfAp");
	this.shape_1.setTransform(197.35,87.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#479AE1").ss(5,1).p("ABKBiIiLg4IA4iL");
	this.shape_2.setTransform(209.773,83.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#479AE1").ss(5,1).p("AgwAUIBhgo");
	this.shape_3.setTransform(33.1,158.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#479AE1").ss(5,1).p("AgwAVIBggo");
	this.shape_4.setTransform(35.2,162.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#479AE1").ss(5,1).p("AhJhhICLA4Ig4CL");
	this.shape_5.setTransform(22.727,166.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#479AE1").ss(5,1).p("AgTgwIAnBh");
	this.shape_6.setTransform(84,42.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#479AE1").ss(5,1).p("AgTgwIAoBh");
	this.shape_7.setTransform(79.1,44.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#479AE1").ss(5,1).p("ABihJIg4CLIiLg5");
	this.shape_8.setTransform(75.125,31.9061);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#479AE1").ss(5,1).p("AAUAwIgohf");
	this.shape_9.setTransform(150.05,207.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#479AE1").ss(5,1).p("AAVAwIgphf");
	this.shape_10.setTransform(154.975,205.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#479AE1").ss(5,1).p("AhhBKIA4iLICLA4");
	this.shape_11.setTransform(158.925,218.323);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#479AE1").ss(5,1).p("AhbgjIC3BI");
	this.shape_12.setTransform(28.475,90.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#479AE1").ss(5,1).p("AAIh3IBICnIinBI");
	this.shape_13.setTransform(11.293,82.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#479AE1").ss(5,1).p("ABcAlIi3hI");
	this.shape_14.setTransform(203.775,160.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#479AE1").ss(5,1).p("AgHB4IhIinICnhI");
	this.shape_15.setTransform(220.957,168.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#479AE1").ss(5,1).p("AgiBcIBFi3");
	this.shape_16.setTransform(82.225,213.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#479AE1").ss(5,1).p("Ah4gFICnhKIBKCm");
	this.shape_17.setTransform(74.025,230.552);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#479AE1").ss(5,1).p("AAjhbIhFC3");
	this.shape_18.setTransform(150.025,37.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#479AE1").ss(5,1).p("AB5AFIinBLIhKin");
	this.shape_19.setTransform(158.225,20.1264);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B9DEFC").s().p("Ap+GyQglh3AAh/QAAirBCibQBAiWB0h1QB1h0CWhAQCdhCCpAAQCOAACFAuQCBAtBsBTQicg6imAAQi9AAirBJQimBGiBCBQiACAhGClQhJCtAAC8QAACGAlB/QhDhmgkh0g");
	this.shape_20.setTransform(99.675,106.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3F84E1").s().p("AhrGdQgagXgMgBQgMgDggAOQgeAMgNgDQgNgFgRgcQgRgegLgFQgMgGgiADQggADgMgIQgLgIgHggQgIgigIgIIgEABQgIAKgEgBIAAAAIAMgJIAHgIQANgSAFABQAFAAAIAVQAHAWAFAAQAFAAAMgTQALgTAFAAQAFABAKATQAKAVAFAAQAlAAA3gaQBIgkAPgEQASgFBPgKQA7gIAegTQAfgUAeg0QAqhIAJgLQAJgKA9g5QAsgpAMgiQANgigIg8QgLhUAAgNQAAgEATgJQAUgKAAgEQAAgEgVgHQgUgIgBgDQAAgEATgMQATgLgBgEQgBgEgVgFQgVgFgBgFQAAgEACgBQADgCgBgFQAIAJAfAHQAeAFAIAMQAIALgDAgQgEAiAFAKQAGALAdASQAcAQAEANQAEANgNAeQgOAeACANQACAMAXAZQAVAZAAAOQAAAOgVAYQgXAagCAMQgCAMAOAfQAMAegEANQgEAOgcAQQgeARgFAMQgGALADAjQADAfgIAMQgIAMggAGQgiAIgJAJQgIAIgIAiQgHAggLAIQgLAIghgDQgigDgMAGQgLAFgRAeQgRAcgNAFQgNADgegMQgggOgMADQgLABgaAXQgZAVgOABQgOgBgZgVgAnBERQAAgBAMgPIACgCIgEgHQANgJABABQABABgLAOQACAFADABIgBABQgPALgCAAIgBAAgAmuEFIAAAAgAnMEFQgBgBANgPIAGgGIADAJIgDACQgPALgCAAIgBAAgAm6DvQgGgQgEgFIARALIgHAKIAAAAg");
	this.shape_21.setTransform(123.0214,134.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#479AE1").s().p("AgmH9QgagXgMgCQgMgCggANQgeANgNgEQgNgFgQgbQgSgegLgFQgMgGghADQghACgLgHQgMgJgHggQgIghgIgIQgJgKgigHQgggHgHgLQgIgMACggQADgigGgMQgFgLgegRQgcgRgEgOQgEgNAMgdQAOgggCgMQgCgNgWgZQgWgZAAgOQAAgNAWgZQAWgaACgMQACgMgOggQgMgeAEgNQAEgOAcgQQAegSAFgKQAGgMgDgiQgCggAIgMQAHgMAggGQAigIAJgIQAIgKAIghQAHggAMgIQAKgIAiADQAhADAMgGQALgFASgeQAQgcANgFQANgDAeAMQAgAOAMgDQAMgCAagVQAZgWANAAQAPAAAYAWQAaAVAMACQAMADAggOQAegMANADQANAFARAcQARAeALAFQAMAGAigDQAhgDALAIQAMAIAGAgQAIAhAJAKQAJAIAhAIQAgAGAIAMQAIAMgCAgQgDAiAFAMQAFAKAeASQAcAQAFAOQAEANgNAeQgOAgACAMQACAMAXAaQAVAZAAANQAAAOgVAZQgXAZgCANQgCAMAOAgQANAdgEANQgFAOgcARQgeARgFALQgFAMADAiQACAggIAMQgIALggAHQghAHgJAKQgJAIgIAhQgGAggMAJQgLAHghgCQgigDgMAGQgLAFgRAeQgRAbgNAFQgNAEgegNQgggNgMACQgMACgaAXQgYAVgOAAQgOAAgZgVg");
	this.shape_22.setTransform(116.1,125.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A6D3FF").s().p("AlGMGQiWhAh1h0Qh0h1hAiWQhCicAAirQAAiqBCicQBAiXB0h0QB1h0CWhAQCchCCqAAQCrAACcBCQCXBAB0B0QB1B0A/CXQBCCcAACqQAACrhCCcQhACWh0B1Qh0B0iXBAQicBCirAAQiqAAichCg");
	this.shape_23.setTransform(116.1,125.35);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(118.1,8.9,114.20000000000002,151.5), null);


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

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvTHgIAKpaIFRhHIFHkUIikF6IEKhSIAAjCIGhh6IL+hmIgzF5In+Mmg");
	mask.setTransform(145.625,195.425);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#479AE1").ss(5,1).p("AAwgTIhfAo");
	this.shape.setTransform(199.425,83.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#479AE1").ss(5,1).p("AAwgUIhfAp");
	this.shape_1.setTransform(197.35,78.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#479AE1").ss(5,1).p("ABKBiIiLg4IA4iL");
	this.shape_2.setTransform(209.773,74.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#479AE1").ss(5,1).p("AgwAVIBhgo");
	this.shape_3.setTransform(33.1,149.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#479AE1").ss(5,1).p("AgwAUIBggo");
	this.shape_4.setTransform(35.2,154.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#479AE1").ss(5,1).p("AhJhhICLA4Ig4CL");
	this.shape_5.setTransform(22.727,158.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#479AE1").ss(5,1).p("AgTgvIAnBg");
	this.shape_6.setTransform(84,33.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#479AE1").ss(5,1).p("AgTgwIAoBh");
	this.shape_7.setTransform(79.1,35.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#479AE1").ss(5,1).p("ABihJIg4CLIiLg5");
	this.shape_8.setTransform(75.125,23.0561);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#479AE1").ss(5,1).p("AAUAwIgohf");
	this.shape_9.setTransform(150.05,199.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#479AE1").ss(5,1).p("AAVAwIgphg");
	this.shape_10.setTransform(154.975,197.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#479AE1").ss(5,1).p("AhhBKIA4iLICLA4");
	this.shape_11.setTransform(158.925,209.473);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#479AE1").ss(5,1).p("AhbgjIC3BI");
	this.shape_12.setTransform(28.475,81.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#479AE1").ss(5,1).p("AAIh3IBICnIinBI");
	this.shape_13.setTransform(11.293,73.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#479AE1").ss(5,1).p("ABcAlIi3hJ");
	this.shape_14.setTransform(203.775,151.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#479AE1").ss(5,1).p("AgHB4IhIinICnhI");
	this.shape_15.setTransform(220.957,159.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#479AE1").ss(5,1).p("AgiBcIBFi3");
	this.shape_16.setTransform(82.225,204.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#479AE1").ss(5,1).p("Ah4gFICnhKIBKCm");
	this.shape_17.setTransform(74.025,221.702);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#479AE1").ss(5,1).p("AAjhbIhFC3");
	this.shape_18.setTransform(150.025,28.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#479AE1").ss(5,1).p("AB5AFIinBLIhKin");
	this.shape_19.setTransform(158.225,11.2764);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B9DEFC").s().p("Ap+GyQglh3AAh/QAAirBCibQBAiWB0h1QB1h0CWhAQCdhCCpAAQCOAACFAuQCBAtBsBTQicg6imAAQi9AAirBJQimBGiBCBQiACAhGClQhJCtAAC8QAACGAlB/QhDhmgkh0g");
	this.shape_20.setTransform(99.675,97.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3F84E1").s().p("AhrGdQgagWgMgDQgMgCggAOQgeANgNgFQgNgEgRgcQgRgdgLgGQgMgGgiAEQggACgMgIQgLgIgHggQgIghgIgJIgEABIAHgIQANgSAFAAQAFABAIAWQAHAUAFABQAFABAMgUQALgTAFAAQAFABAKATQAKAVAFAAQAlAAA3gbQBIgiAPgFQASgFBPgKQA7gIAegUQAfgTAeg1QAqhGAJgMQAJgLA9g4QAsgpAMgjQANghgIg7QgLhVAAgNQAAgFATgIQAUgKAAgEQAAgFgVgGQgUgHgBgEQAAgFATgKQATgMgBgEQgBgEgVgFQgVgGgBgEQAAgDACgDQADgBgBgEQAIAIAfAGQAeAHAIAKQAIAMgDAgQgEAhAFALQAGALAdARQAcARAEANQAEANgNAdQgOAgACAMQACAMAXAZQAVAYAAAOQAAAOgVAZQgXAagCAMQgCAMAOAfQAMAegEANQgEANgcARQgeASgFALQgGALADAiQADAhgIALQgIALggAHQgiAIgJAJQgIAJgIAhQgHAggLAIQgLAIghgCQgigEgMAGQgLAGgRAdQgRAcgNAEQgNAFgegNQgggOgMACQgLADgaAWQgZAVgOAAQgOAAgZgVgAnBERQAAgBAMgPIACgCIgEgHQANgJABABQABABgLAOQACAFADABIgBABQgPALgCAAIgBAAgAmuEFIAAAAIAMgJQgHAKgEAAIgBgBgAnMEFQgBgBANgPIAGgGIADAJIgDADQgPAKgCAAIgBAAgAnEDaIARAKQAAABgHAKQgGgQgEgFg");
	this.shape_21.setTransform(123.0214,126.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#479AE1").s().p("AgmH8QgagWgMgCQgMgCggAOQgeAMgNgEQgNgFgQgcQgSgdgLgGQgMgFghADQghACgLgHQgMgJgHggQgIghgIgJQgJgIgigIQgggHgHgLQgIgMACggQADgjgGgKQgFgMgegSQgcgQgEgOQgEgMAMgfQAOgfgCgNQgCgLgWgbQgWgYAAgOQAAgOAWgYQAWgaACgMQACgNgOgfQgMgeAEgNQAEgOAcgQQAegRAFgMQAGgLgDgiQgCghAIgLQAHgLAggIQAigHAJgJQAIgIAIgiQAHggAMgIQAKgIAiADQAhADAMgGQALgGASgdQAQgcANgEQANgEAeAMQAgANAMgCQAMgBAagXQAZgVANAAQAPAAAYAVQAaAXAMABQAMACAggNQAegMANAEQANAEARAcQARAdALAGQAMAGAigDQAhgDALAIQAMAIAGAgQAIAiAJAIQAJAJAhAHQAgAIAIALQAIALgCAhQgDAiAFALQAFAMAeARQAcAQAFAOQAEANgNAeQgOAfACANQACAMAXAaQAVAYAAAOQAAAOgVAYQgXAbgCALQgCANAOAfQANAfgEAMQgFAOgcAQQgeASgFAMQgFAKADAjQACAggIAMQgIALggAHQghAIgJAIQgJAJgIAhQgGAggMAJQgLAHghgCQgigDgMAFQgLAGgRAdQgRAcgNAFQgNAEgegMQgggOgMACQgMACgaAWQgYAWgOAAQgOAAgZgWg");
	this.shape_22.setTransform(116.1,116.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A6D3FF").s().p("AlGMGQiWhAh1h0Qh0h0hAiXQhCidAAiqQAAiqBCicQBAiWB0h1QB1h0CWhAQCchCCqAAQCrAACcBCQCXBAB0B0QB1B1A/CWQBCCcAACqQAACrhCCcQhACXh0B0Qh0B0iXBAQicBCirAAQiqAAichCg");
	this.shape_23.setTransform(116.1,116.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(47.6,136.2,184.70000000000002,96.80000000000001), null);


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
	mask_1.graphics.p("AqrgEIBwvUIHgBlIGDKEIiPIxIITBRIjMDDIrUGEg");
	mask_1.setTransform(68.425,98.9);

	// Vrstva_3
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#479AE1").ss(5,1).p("AgvAVIBfgo");
	this.shape_24.setTransform(61.075,149.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#479AE1").ss(5,1).p("AgwAUIBhgo");
	this.shape_25.setTransform(63.15,154.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#479AE1").ss(5,1).p("AhJhhICLA4Ig4CL");
	this.shape_26.setTransform(50.727,158.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#479AE1").ss(5,1).p("AAwgTIhfAo");
	this.shape_27.setTransform(227.4,83.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#479AE1").ss(5,1).p("AAwgUIhgAp");
	this.shape_28.setTransform(225.3,78.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#479AE1").ss(5,1).p("ABKBiIiLg4IA4iL");
	this.shape_29.setTransform(237.773,74.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#479AE1").ss(5,1).p("AgTgvIAnBg");
	this.shape_30.setTransform(112,33.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#479AE1").ss(5,1).p("AgUgwIApBh");
	this.shape_31.setTransform(107.075,35.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#479AE1").ss(5,1).p("ABjhJIg5CLIiLg4");
	this.shape_32.setTransform(103.1,23.0511);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#479AE1").ss(5,1).p("AAVAwIgphf");
	this.shape_33.setTransform(178.025,199.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#479AE1").ss(5,1).p("AAVAwIgohg");
	this.shape_34.setTransform(182.95,197.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#479AE1").ss(5,1).p("AhhBKIA4iLICLA4");
	this.shape_35.setTransform(186.9,209.4745);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#479AE1").ss(5,1).p("AhaglIC1BL");
	this.shape_36.setTransform(56.625,82.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#479AE1").ss(5,1).p("AAJh8QAxAUAVAyQAVAygVAwQgUAygxAUQgxAVgygU");
	this.shape_37.setTransform(39.5563,74.7813);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#479AE1").ss(5,1).p("ABcAlIi3hJ");
	this.shape_38.setTransform(231.775,151.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#479AE1").ss(5,1).p("AgHB4IhIinICnhI");
	this.shape_39.setTransform(248.957,159.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#479AE1").ss(5,1).p("AgiBcIBFi3");
	this.shape_40.setTransform(110.2,204.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#479AE1").ss(5,1).p("Ah4gFICmhKIBLCm");
	this.shape_41.setTransform(102.025,221.702);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#479AE1").ss(5,1).p("AAkhbIhHC3");
	this.shape_42.setTransform(178,28.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#479AE1").ss(5,1).p("AB5AFIimBLIhKin");
	this.shape_43.setTransform(186.2,11.2777);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B9DEFC").s().p("Ap+GyQglh4AAh+QAAirBCibQBAiWB0h1QB1h0CWhAQCchCCqAAQCOAACFAuQCAAtBtBTQicg6inAAQi8AAirBJQinBGiACBQiACAhGClQhJCtAAC8QAACFAlCAQhDhmgkh0g");
	this.shape_44.setTransform(127.675,97.675);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3F84E1").s().p("AhqGdQgagWgMgDQgNgCggAOQgeANgNgFQgNgEgRgcQgRgdgLgGQgLgGgjAEQggACgLgIQgLgIgIggQgHghgJgJIgDABQgJAKgDgBIgBAAIANgJIAGgIQANgRAFAAQAFAAAIAWQAHAUAGABQAFABALgUQALgTAGAAQAFABAJATQAKAVAFAAQAmAAA2gbQBHgiARgFQASgEBPgLQA6gIAegTQAfgVAfg0QAphGAJgMQAIgKA+g4QAsgpANgkQAMghgIg7QgLhUAAgOQAAgFAUgIQAUgKgBgEQAAgEgUgHQgVgHAAgEQgBgFATgKQATgMgBgEQAAgEgVgFQgVgFgBgFQgBgDACgDQADgBgBgEQAJAIAfAGQAdAHAIAKQAIAMgDAgQgEAhAGALQAFALAdASQAcAQAEAOQAEAMgNAdQgNAgACAMQABAMAXAZQAVAYAAAOQAAAOgVAZQgXAagCAMQgCAMAOAfQANAegFANQgEANgcARQgdASgGALQgGALADAiQADAhgIALQgIALggAHQghAIgJAJQgJAJgIAhQgHAggLAIQgMAIgggCQgigEgLAGQgLAGgSAdQgQAcgOAEQgNAFgegNQgfgOgNACQgLADgaAWQgZAVgOAAQgOAAgYgVgAnAERQgBgBANgPIABgCQACAFADABIgBABQgPALgCAAIAAAAgAnMEFQAAgBANgPIAFgHQgGgPgEgFIARAKQAAABgHAJIAAABIAEAJIgEADQgQAKgCAAIAAAAgAm2D4QAMgJABABQABABgLAOIgDgHg");
	this.shape_45.setTransform(150.9991,126.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#479AE1").s().p("AgmH8QgagWgMgCQgNgCgfAOQgeAMgNgEQgNgFgRgcQgSgdgKgGQgLgFgjADQggADgMgIQgLgJgHggQgHgggKgKQgJgIghgIQgfgHgIgLQgJgMADggQADgjgGgKQgFgMgegSQgcgQgEgOQgEgMANgfQANgfgCgNQgCgLgXgbQgVgYAAgOQAAgOAVgYQAXgaACgMQACgNgNgfQgNgeAEgNQAEgOAcgQQAegRAFgMQAGgLgDgiQgDggAJgMQAIgLAfgIQAhgHAJgJQAKgIAHgiQAHggALgIQAMgIAgADQAiADAMgGQAKgGASgdQARgcANgEQANgEAeANQAfANANgCQAMgCAagXQAZgVANAAQAPAAAYAVQAaAXAMACQAMACAggNQAdgNAOAEQANAEARAcQASAdAKAGQAMAGAigDQAggDALAIQALAIAIAgQAHAiAJAIQAKAJAhAHQAgAIAIALQAIALgDAhQgDAiAGALQAFAMAeARQAcAQAEAOQAEANgMAeQgOAfACANQACAMAWAaQAWAYAAAOQAAAOgWAYQgWAbgCALQgCANAOAfQAMAfgEAMQgEAOgcAQQgeASgFAMQgGAKADAjQADAhgIALQgIAKggAIQghAIgKAIQgJAKgHAgQgIAggLAJQgLAIgggDQgjgDgLAFQgKAGgSAdQgRAcgNAFQgOAEgdgMQgggOgMACQgMACgaAWQgZAWgOAAQgNAAgZgWg");
	this.shape_46.setTransform(144.1,116.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A6D3FF").s().p("AlGMGQiWg/h1h1Qh0h0hAiXQhCicAAirQAAiqBCicQBAiWB0h1QB1h0CWhAQCchCCqAAQCrAACcBCQCXBAB0B0QB0B1BACWQBCCcAACqQAACrhCCcQhACXh0B0Qh0B1iXA/QicBCirAAQiqAAichCg");
	this.shape_47.setTransform(144.1,116.5);

	var maskedShapeInstanceList = [this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(28.1,0.4,108.80000000000001,197.1), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop,reversed) {
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
	mask_1.graphics.p("AjqIEIAAoIIhchSIhcngIH+AzIhcE9IGjDCIh7ExIijjCIA9HMg");
	mask_1.setTransform(98.675,65.225);

	// Vrstva_3
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#479AE1").ss(5,1).p("AAxgTIhgAo");
	this.shape_24.setTransform(199.45,83.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#479AE1").ss(5,1).p("AAwgUIhfAp");
	this.shape_25.setTransform(197.35,78.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#479AE1").ss(5,1).p("ABKBiIiLg4IA4iL");
	this.shape_26.setTransform(209.823,74.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#479AE1").ss(5,1).p("AgvAVIBfgo");
	this.shape_27.setTransform(33.125,149.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#479AE1").ss(5,1).p("AgwAUIBggo");
	this.shape_28.setTransform(35.2,154.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#479AE1").ss(5,1).p("AhJhhICLA4Ig4CL");
	this.shape_29.setTransform(22.777,158.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#479AE1").ss(5,1).p("AgTgvIAnBg");
	this.shape_30.setTransform(84.05,33.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#479AE1").ss(5,1).p("AgUgwIApBh");
	this.shape_31.setTransform(79.125,35.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#479AE1").ss(5,1).p("ABihJIg4CLIiMg4");
	this.shape_32.setTransform(75.15,23.0511);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#479AE1").ss(5,1).p("AAVAwIgphf");
	this.shape_33.setTransform(150.075,199.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#479AE1").ss(5,1).p("AAVAwIgphg");
	this.shape_34.setTransform(155,197.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#479AE1").ss(5,1).p("AhhBKIA5iLICLA4");
	this.shape_35.setTransform(158.95,209.4745);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#479AE1").ss(5,1).p("AhbgjIC3BI");
	this.shape_36.setTransform(28.475,81.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#479AE1").ss(5,1).p("AAIh3IBICnIinBI");
	this.shape_37.setTransform(11.2901,73.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#479AE1").ss(5,1).p("ABcAlIi3hJ");
	this.shape_38.setTransform(203.825,151.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#479AE1").ss(5,1).p("AgHB4IhIinICnhI");
	this.shape_39.setTransform(221.007,159.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#479AE1").ss(5,1).p("AgiBcIBFi3");
	this.shape_40.setTransform(82.25,204.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#479AE1").ss(5,1).p("Ah4gFICmhKIBLCm");
	this.shape_41.setTransform(74.075,221.702);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#479AE1").ss(5,1).p("AAjhbIhGC3");
	this.shape_42.setTransform(150.05,28.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#479AE1").ss(5,1).p("AB5AFIinBLIhKin");
	this.shape_43.setTransform(158.25,11.2777);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B9DEFC").s().p("Ap+GyQglh4AAh+QAAirBCibQBAiWB0h1QB1h0CWhAQCchCCqAAQCOAACFAuQCAAtBtBTQicg6inAAQi8AAirBJQinBGiACBQiACAhGClQhJCtAAC8QAACFAlCAQhDhmgkh0g");
	this.shape_44.setTransform(99.725,97.675);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3F84E1").s().p("AhqGdQgagWgMgDQgNgCggAOQgeANgNgFQgNgEgRgcQgRgdgLgGQgLgGgjAEQggACgLgIQgLgIgIggQgHghgJgJIgDABQgJAKgDgBIgBAAIANgJIAGgIQANgRAFAAQAFAAAIAWQAHAUAGABQAFABALgUQALgTAGAAQAFABAJATQAKAVAFAAQAmAAA2gbQBHgiARgFQASgEBPgLQA6gIAegTQAfgVAfg0QAphGAJgMQAIgKA+g4QAsgpANgkQAMghgIg7QgLhUAAgOQAAgFAUgIQAUgKgBgEQAAgEgUgHQgVgHAAgEQgBgFATgKQATgMgBgEQAAgEgVgFQgVgFgBgFQgBgDACgDQADgBgBgEQAJAIAfAGQAdAHAIAKQAIAMgDAgQgEAhAGALQAFALAdASQAcAQAEAOQAEAMgNAdQgNAgACAMQABAMAXAZQAVAYAAAOQAAAOgVAZQgXAagCAMQgCAMAOAfQANAegFANQgEANgcARQgdASgGALQgGALADAiQADAhgIALQgIALggAHQghAIgJAJQgJAJgIAhQgHAggLAIQgMAIgggCQgigEgLAGQgLAGgSAdQgQAcgOAEQgNAFgegNQgfgOgNACQgLADgaAWQgZAVgOAAQgOAAgYgVgAnAERQgBgBANgPIABgCQACAFADABIgBABQgPALgCAAIAAAAgAnMEFQAAgBANgPIAFgHQgGgPgEgFIARAKQAAABgHAJIAAABIAEAJIgEADQgQAKgCAAIAAAAgAmzD/IgDgHQAMgJABABQABABgLAOIAAAAg");
	this.shape_45.setTransform(123.0491,126.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#479AE1").s().p("AglH8QgbgWgLgCQgOgCgfAOQgeAMgNgEQgOgFgQgcQgRgdgMgGQgKgFgjADQggADgMgIQgKgJgIggQgIgggIgKQgJgIgigIQgfgHgJgLQgIgMADggQADgjgFgKQgGgMgdgSQgdgQgEgOQgFgMANgfQAOgfgCgNQgCgLgWgbQgWgYAAgOQAAgOAWgYQAWgaACgMQACgNgOgfQgNgeAFgNQAEgOAdgQQAdgRAGgMQAFgLgDgiQgDggAIgMQAJgLAfgIQAigHAJgJQAIgIAIgiQAIggAKgIQALgIAhADQAiADALgGQAMgGARgdQAQgcAOgEQANgEAeANQAfANAOgCQALgCAbgXQAXgVAOAAQAPAAAYAVQAaAXAMACQANACAfgNQAdgNAOAEQAOAEAQAcQARAdAMAGQALAGAigDQAhgDALAIQAKAIAIAgQAIAiAJAIQAIAJAiAHQAgAIAIALQAIALgDAhQgDAiAGALQAGAMAdARQAcAQAEAOQAEANgNAeQgNAfACANQACAMAXAaQAVAYAAAOQAAAOgVAYQgXAbgCALQgCANANAfQANAfgEAMQgEAOgcAQQgdASgGAMQgGAKADAjQADAhgIALQgIAKggAIQgiAIgIAIQgJAKgIAgQgIAggKAJQgMAIgggDQgigDgLAFQgMAGgRAdQgQAcgOAFQgOAEgdgMQgfgOgNACQgMACgaAWQgZAWgOAAQgNAAgYgWg");
	this.shape_46.setTransform(116.15,116.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A6D3FF").s().p("AlGMGQiXg/h0h1Qh0h0hAiXQhCicAAirQAAiqBCicQBAiWB0h1QB0h0CXhAQCchCCqAAQCrAACcBCQCXBAB0B0QB0B1BACWQBCCcAACqQAACrhCCcQhACXh0B0Qh0B1iXA/QicBCirAAQiqAAichCg");
	this.shape_47.setTransform(116.15,116.5);

	var maskedShapeInstanceList = [this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(56.8,8.6,83.8,113.30000000000001), null);


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
	mask_1.graphics.p("AohF/IBRgKIEKmiImjj/IAfmEIH+hxICyEuIgZB/IHBDXIBcKCIygE9g");
	mask_1.setTransform(180.075,80.175);

	// Vrstva_3
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#479AE1").ss(5,1).p("AAxgUIhgAp");
	this.shape_24.setTransform(199.45,93.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#479AE1").ss(5,1).p("AAwgTIhfAo");
	this.shape_25.setTransform(197.35,88.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#479AE1").ss(5,1).p("ABKBiIiLg5IA4iL");
	this.shape_26.setTransform(209.7745,84.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#479AE1").ss(5,1).p("AgvAUIBfgo");
	this.shape_27.setTransform(33.325,158.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#479AE1").ss(5,1).p("AgvAVIBggo");
	this.shape_28.setTransform(35.4,162.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#479AE1").ss(5,1).p("AhJhhICLA4Ig4CL");
	this.shape_29.setTransform(22.977,166.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#479AE1").ss(5,1).p("AgTgwIAnBh");
	this.shape_30.setTransform(84.25,42.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#479AE1").ss(5,1).p("AgUgwIApBh");
	this.shape_31.setTransform(79.325,44.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#479AE1").ss(5,1).p("ABjhJIg5CLIiLg4");
	this.shape_32.setTransform(75.35,31.9011);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#479AE1").ss(5,1).p("AAVAwIgphf");
	this.shape_33.setTransform(150.275,208);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#479AE1").ss(5,1).p("AAVAwIgohf");
	this.shape_34.setTransform(155.2,205.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#479AE1").ss(5,1).p("AhhBKIA4iLICLA4");
	this.shape_35.setTransform(159.15,218.3245);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#479AE1").ss(5,1).p("ABcAmIi3hL");
	this.shape_36.setTransform(203.65,159.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#479AE1").ss(5,1).p("AgIB9QgxgVgVgxQgVgxAVgxQAUgyAxgUQAxgVAxAU");
	this.shape_37.setTransform(220.7125,167.9687);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#479AE1").ss(5,1).p("AhaglIC1BL");
	this.shape_38.setTransform(28.525,90.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#479AE1").ss(5,1).p("AAJh8QAxAVAVAxQAVAygVAwQgUAygxAUQgxAVgygU");
	this.shape_39.setTransform(11.4563,82.7313);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#479AE1").ss(5,1).p("AglBbIBLi1");
	this.shape_40.setTransform(82.65,213.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#479AE1").ss(5,1).p("Ah8gIQAVgyAxgUQAygVAwAUQAyAVAUAxQAVAwgUAy");
	this.shape_41.setTransform(74.4813,230.2062);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#479AE1").ss(5,1).p("AAthXIhZCv");
	this.shape_42.setTransform(159.975,41.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#479AE1").ss(5,1).p("AB6AXQgYAvgzARQgyARgvgYQgwgZgRgzQgRgyAZgv");
	this.shape_43.setTransform(169.5518,24.5111);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B9DEFC").s().p("Ap+GyQglh4AAh+QAAirBCibQBAiWB0h1QB1h0CWhAQCchCCqAAQCOAACFAuQCAAtBtBTQicg6inAAQi8AAirBJQinBGiACBQiACAhGClQhJCtAAC8QAACFAlCAQhDhmgkh0g");
	this.shape_44.setTransform(99.925,106.525);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3F84E1").s().p("AhqGdQgagXgMgBQgNgDggAOQgeAMgNgDQgNgFgRgcQgRgegLgFQgLgGgjADQggAEgLgJQgLgIgIggQgHghgJgJIgDABIAGgHQANgTAFABQAFAAAIAVQAHAWAGAAQAFAAALgTQALgTAGAAQAFABAJATQAKAVAFAAQAmAAA2gaQBHgjARgFQASgEBPgLQA6gHAegUQAfgUAfg0QAphHAJgMQAIgKA+g5QAsgpANgiQAMgigIg8QgLhTAAgOQAAgEAUgJQAUgKgBgEQAAgEgUgHQgVgHAAgEQgBgEATgMQATgLgBgEQAAgEgVgFQgVgFgBgFQgBgEACgBQADgCgBgFQAJAJAfAHQAdAFAIAMQAIALgDAgQgEAiAGAKQAFAMAdARQAcAQAEAOQAEAMgNAeQgNAeACANQABAMAXAZQAVAZAAAOQAAAOgVAYQgXAagCAMQgCAMAOAfQANAegFANQgEAOgcAQQgdARgGAMQgGALADAjQADAggIALQgIALggAHQghAIgJAJQgJAJgIAhQgHAggLAIQgMAJgggEQgigDgLAGQgLAFgSAeQgQAcgOAFQgNADgegMQgfgOgNADQgLABgaAXQgZAVgOABQgOgBgYgVgAnAERQgBgBANgPIABgCQACAFADABIgBABQgPALgCAAIAAAAgAmtEFIgBAAIANgJQgIAKgEAAIAAgBgAmuEFIAAAAgAnMEFQAAgBANgPIAFgHQgGgPgEgFIARALQAAAAgHAJIAAABIAEAJIgEACQgQALgCAAIAAAAgAmzD/IgDgHQAMgJABABQABABgLAOIAAAAg");
	this.shape_45.setTransform(123.2491,134.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#479AE1").s().p("AglH9QgagXgMgCQgNgCggANQgeANgNgEQgOgFgQgbQgSgegKgFQgLgGgjADQggADgLgIQgLgJgIggQgIghgIgIQgKgKghgHQgggHgHgLQgJgMADggQADgigFgMQgGgLgdgRQgdgRgEgOQgFgNANgdQAOgggCgMQgCgNgWgZQgWgZAAgOQAAgNAWgZQAWgaACgMQACgMgOggQgNgeAFgNQAEgOAdgQQAdgSAGgKQAFgLgDgjQgDggAJgLQAHgMAggHQAhgIAKgIQAIgKAIghQAIggALgIQAKgIAhADQAiADAMgGQAKgFASgeQAQgcAOgFQAOgEAdANQAgAOANgCQAMgCAagWQAYgWANAAQAOAAAZAWQAaAWAMACQANACAfgOQAdgNAOAEQANAFARAcQASAeAKAFQAMAGAigDQAggDAMAIQALAIAHAgQAHAhAKAKQAIAIAiAIQAgAHAIAMQAIAKgDAhQgDAiAGAMQAGAKAdASQAcAQAEAOQAEANgNAeQgNAgACAMQACAMAXAaQAVAZAAANQAAAOgVAZQgXAZgCANQgCAMANAgQANAdgEANQgEAOgcARQgdARgGALQgGAMADAiQADAggIAMQgIALggAHQgiAHgIAKQgKAIgHAhQgHAggLAJQgMAIgggDQgigDgMAGQgKAFgSAeQgRAbgNAFQgOAEgdgNQgfgNgNACQgMACgaAXQgZAVgOAAQgNAAgYgVg");
	this.shape_46.setTransform(116.35,125.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A6D3FF").s().p("AlGMGQiXhAh0h0Qh0h0hAiXQhCicAAirQAAiqBCicQBAiXB0h0QB0h0CXhAQCchCCqAAQCrAACcBCQCXBAB0B0QB0B0BACXQBCCcAACqQAACrhCCcQhACXh0B0Qh0B0iXBAQicBCirAAQiqAAichCg");
	this.shape_47.setTransform(116.35,125.35);

	var maskedShapeInstanceList = [this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(118.3,12.6,113.89999999999999,147.8), null);


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
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AvTHgIAKpaIFRhHIFHkUIijF6IEJhSIAAjCIGih6IL+hmIg0F5In+Mmg");
	mask_1.setTransform(145.65,195.425);

	// Vrstva_3
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#479AE1").ss(5,1).p("AAxgTIhgAo");
	this.shape_24.setTransform(199.45,83.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#479AE1").ss(5,1).p("AAwgUIhfAp");
	this.shape_25.setTransform(197.35,78.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#479AE1").ss(5,1).p("ABKBiIiLg4IA4iL");
	this.shape_26.setTransform(209.823,74.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#479AE1").ss(5,1).p("AgvAVIBfgo");
	this.shape_27.setTransform(33.125,149.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#479AE1").ss(5,1).p("AgwAUIBggo");
	this.shape_28.setTransform(35.2,154.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#479AE1").ss(5,1).p("AAVAwIgphf");
	this.shape_29.setTransform(150.075,199.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#479AE1").ss(5,1).p("AAVAwIgphg");
	this.shape_30.setTransform(155,197.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#479AE1").ss(5,1).p("AhhBKIA5iLICLA4");
	this.shape_31.setTransform(158.95,209.4745);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#479AE1").ss(5,1).p("AgTgvIAnBg");
	this.shape_32.setTransform(84.05,33.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#479AE1").ss(5,1).p("AgUgwIApBh");
	this.shape_33.setTransform(79.125,35.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#479AE1").ss(5,1).p("ABihJIg4CLIiMg4");
	this.shape_34.setTransform(75.15,23.0511);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#479AE1").ss(5,1).p("ABbAmIi1hL");
	this.shape_35.setTransform(203.475,150.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#479AE1").ss(5,1).p("AgIB9QgygVgUgxQgVgyAUgwQAVgyAxgUQAwgVAyAU");
	this.shape_36.setTransform(220.5562,159.1312);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#479AE1").ss(5,1).p("AhbgjIC3BI");
	this.shape_37.setTransform(28.475,81.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#479AE1").ss(5,1).p("AAIh3IBICnIinBI");
	this.shape_38.setTransform(11.2901,73.175);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#479AE1").ss(5,1).p("AglBcIBLi3");
	this.shape_39.setTransform(81.55,204.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#479AE1").ss(5,1).p("Ah8gIQAVgyAxgUQAxgVAxAVQAxAUAVAxQAVAxgVAx");
	this.shape_40.setTransform(73.4125,221.8125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#479AE1").ss(5,1).p("AAjhbIhGC3");
	this.shape_41.setTransform(150.05,28.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#479AE1").ss(5,1).p("AB5AFIinBLIhKin");
	this.shape_42.setTransform(158.25,11.2777);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B9DEFC").s().p("Ap+GyQglh4AAh+QAAirBCibQBAiWB0h1QB1h0CWhAQCchCCqAAQCOAACFAuQCAAtBtBTQicg6inAAQi8AAirBJQinBGiACBQiACAhGClQhJCtAAC8QAACFAlCAQhDhmgkh0g");
	this.shape_43.setTransform(99.725,97.675);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3F84E1").s().p("AhqGdQgagWgMgDQgNgCggAOQgeANgNgFQgNgEgRgcQgRgdgLgGQgLgGgjAEQggACgLgIQgLgIgIggQgHghgJgJIgDABQgJAKgDgBIgBAAIANgJIAGgIQANgRAFAAQAFAAAIAWQAHAUAGABQAFABALgUQALgTAGAAQAFABAJATQAKAVAFAAQAmAAA2gbQBHgiARgFQASgEBPgLQA6gIAegTQAfgVAfg0QAphGAJgMQAIgKA+g4QAsgpANgkQAMghgIg7QgLhUAAgOQAAgFAUgIQAUgKgBgEQAAgEgUgHQgVgHAAgEQgBgFATgKQATgMgBgEQAAgEgVgFQgVgFgBgFQgBgDACgDQADgBgBgEQAJAIAfAGQAdAHAIAKQAIAMgDAgQgEAhAGALQAFALAdASQAcAQAEAOQAEAMgNAdQgNAgACAMQABAMAXAZQAVAYAAAOQAAAOgVAZQgXAagCAMQgCAMAOAfQANAegFANQgEANgcARQgdASgGALQgGALADAiQADAhgIALQgIALggAHQghAIgJAJQgJAJgIAhQgHAggLAIQgMAIgggCQgigEgLAGQgLAGgSAdQgQAcgOAEQgNAFgegNQgfgOgNACQgLADgaAWQgZAVgOAAQgOAAgYgVgAnAERQgBgBANgPIABgCQACAFADABIgBABQgPALgCAAIAAAAgAnMEFQAAgBANgPIAFgHQgGgPgEgFIARAKQAAABgHAJIAAABIAEAJIgEADQgQAKgCAAIAAAAgAmzD/IgDgHQAMgJABABQABABgLAOIAAAAg");
	this.shape_44.setTransform(123.0491,126.05);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#479AE1").s().p("AglH8QgbgWgLgCQgOgCgfAOQgeAMgNgEQgOgFgQgcQgRgdgMgGQgKgFgjADQggADgMgIQgKgJgIggQgIgggIgKQgJgIgigIQgfgHgJgLQgIgMADggQADgjgFgKQgGgMgdgSQgdgQgEgOQgFgMANgfQAOgfgCgNQgCgLgWgbQgWgYAAgOQAAgOAWgYQAWgaACgMQACgNgOgfQgNgeAFgNQAEgOAdgQQAdgRAGgMQAFgLgDgiQgDggAIgMQAJgLAfgIQAigHAJgJQAIgIAIgiQAIggAKgIQALgIAhADQAiADALgGQAMgGARgdQAQgcAOgEQANgEAeANQAfANAOgCQALgCAbgXQAXgVAOAAQAPAAAYAVQAaAXAMACQANACAfgNQAdgNAOAEQAOAEAQAcQARAdAMAGQALAGAigDQAhgDALAIQAKAIAIAgQAIAiAJAIQAIAJAiAHQAgAIAIALQAIALgDAhQgDAiAGALQAGAMAdARQAcAQAEAOQAEANgNAeQgNAfACANQACAMAXAaQAVAYAAAOQAAAOgVAYQgXAbgCALQgCANANAfQANAfgEAMQgEAOgcAQQgdASgGAMQgGAKADAjQADAhgIALQgIAKggAIQgiAIgIAIQgJAKgIAgQgIAggKAJQgMAIgggDQgigDgLAFQgMAGgRAdQgQAcgOAFQgOAEgdgMQgfgOgNACQgMACgaAWQgZAWgOAAQgNAAgYgWg");
	this.shape_45.setTransform(116.15,116.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A6D3FF").s().p("AlGMGQiXg/h0h1Qh0h0hAiXQhCicAAirQAAiqBCicQBAiWB0h1QB0h0CXhAQCchCCqAAQCrAACcBCQCXBAB0B0QB0B1BACWQBCCcAACqQAACrhCCcQhACXh0B0Qh0B1iXA/QicBCirAAQiqAAichCg");
	this.shape_46.setTransform(116.15,116.5);

	var maskedShapeInstanceList = [this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(47.6,136.2,196,97.10000000000002), null);


(lib.T3rozpad = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(4.25,7.9,0.7209,0.7209,0,0,0,122,127.5);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(3.45,-3.1,0.7209,0.7209,0,0,0,120.9,120.9);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(0.05,0.1,0.7209,0.7209,0,0,0,116.2,116.7);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.setTransform(-10,0.1,0.7209,0.7209,0,0,0,130.2,116.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T3rozpad, new cjs.Rectangle(-103.8,-90.2,195.8,189.8), null);


(lib.T2rozpad = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(5.95,9.8,0.7037,0.7037,-18.7284,0,0,121.8,127.1);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.setTransform(1.8,-0.4,0.7037,0.7037,-18.7284,0,0,121,120.3);

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.setTransform(-0.15,3.75,0.7037,0.7037,-18.7284,0,0,116.3,116.2);

	this.instance_3 = new lib.ClipGroup_3_1();
	this.instance_3.setTransform(-9.55,6.95,0.7037,0.7037,-18.7284,0,0,130.2,116.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T2rozpad, new cjs.Rectangle(-122.4,-107.8,238.5,219.39999999999998), null);


// stage content:
(lib.Animace_HTML5Canvas_v020622 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// napisy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBtIAAh7IgYAAIAAgUIAYgLIAAgMQAAgbANgMQANgMAcAAQAWAAARAGIgLAfQgNgDgKAAQgKgBgEAGQgDAFAAAJIAAAKIAkAAIAAAfIgkAAIAAB7g");
	this.shape.setTransform(1181.1,116.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyA8QgVgVAAgmQAAgmAUgWQATgVAiAAQAhAAATATQASATAAAhIAAATIhkAAQABASAKALQAKAKARAAQAOAAANgDQAMgDAOgGIAAAhQgLAGgNACQgMADgTAAQgkAAgWgVgAgSgpQgIAIgBAQIA7AAQAAgQgIgIQgIgJgOAAQgMAAgIAJg");
	this.shape_1.setTransform(1166.275,119.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghCdIAAkBIhUAAIAAg4IDrAAIAAA4IhVAAIAAEBg");
	this.shape_2.setTransform(1148.1,107.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9BnQgRgMAAgUQAAgOAJgKQAJgJARgEQgHgDgFgHQgFgGAAgHQAAgJAGgFQAFgGAKgGQgMgFgIgMQgHgLAAgQQAAgaARgOQAQgOAfAAIAPABIAMACIA2AAIAAAWIgZAGQAHALAAANQAAAZgRAOQgSAOgeAAIgIgBIgGAAQgHAFAAAFQAAAJAYAAIAaAAQAZAAANALQAOALAAAVQAAAcgXAPQgXAPgpAAQghAAgSgLgAghA1QgIAFAAAJQAAAJAIAFQAJAFAPAAQAWAAANgGQANgGAAgLQAAgJgHgDQgIgEgQAAIgWAAQgLAAgIAGgAgag7QAAANAHAHQAFAIAMAAQALAAAGgIQAGgHgBgNQAAgcgWAAQgXAAgBAcg");
	this.shape_3.setTransform(1195.8,412.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyA8QgVgVAAgmQAAgmAUgVQATgWAiAAQAhAAATATQASASAAAiIAAATIhkAAQABATAKAKQAKAKARAAQAOAAANgDQAMgDAOgGIAAAhQgLAGgNACQgMADgTAAQgkAAgWgVgAgSgpQgIAIgBAQIA7AAQAAgQgIgIQgIgJgOAAQgMAAgIAJg");
	this.shape_4.setTransform(1179.475,408.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyBPIAAibIAgAAIAHAbIACAAQAHgOALgHQANgIAOAAIAPABIgEAnQgFgBgHAAQgVAAgLAKQgKALAAASIAABPg");
	this.shape_5.setTransform(1165.925,408.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghCdIAAkCIhUAAIAAg3IDrAAIAAA3IhVAAIAAECg");
	this.shape_6.setTransform(1148.1,396.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},510).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},61).wait(63));

	// krizekB
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(9,1,1).p("AgCACIBzBzAgCACIhuBuAB2h0Ih4B2Ah1hwIBzBy");
	this.shape_7.setTransform(712.45,144.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(9,1,1).p("AC8AAQAABOg3A3Qg3A3hOAAQhNAAg3g3Qg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNg");
	this.shape_8.setTransform(694.8,360.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},311).to({state:[{t:this.shape_8},{t:this.shape_7}]},58).to({state:[{t:this.shape_8}]},96).to({state:[]},60).wait(109));

	// T_navic
	this.instance = new lib.T1();
	this.instance.setTransform(116.25,134.7,1,1,0,0,0,0,7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({y:134.05},0).to({regX:0.1,rotation:45,x:177.45,y:130},20).wait(184).to({scaleX:0.9999,scaleY:0.9999,rotation:194.9992,x:545.45,y:129.95},33).wait(31).to({regX:0,regY:7,rotation:229.7387,x:634.7,y:165.95},25).wait(166).to({rotation:326.0015,x:1072.85,y:180.45},42).wait(124));

	// T1_reg
	this.instance_1 = new lib.T1regZmena();
	this.instance_1.setTransform(635.4,391.35,1,1,0,0,0,7.1,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(384).to({_off:false},0).wait(145).to({rotation:85.4578,x:1076.7,y:476.15},38).wait(67));

	// T1
	this.instance_2 = new lib.T_reg();
	this.instance_2.setTransform(116.2,347.55,1,1,0,0,0,0,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({regX:0.1,rotation:41.4058,x:155.2,y:346.8},20).wait(156).to({rotation:48.6351,y:346.85},0).to({scaleX:0.9999,scaleY:0.9999,rotation:223.4461,x:527,y:375.1},34).wait(84).to({regY:-3,rotation:269.6773,x:628,y:391.5},25).to({_off:true},28).wait(250));

	// MHC_navic
	this.instance_3 = new lib.MHC1();
	this.instance_3.setTransform(346.55,72.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({x:345.8,y:72.1},0).to({rotation:-53.9387,x:318.25,y:81.25},20).wait(605));

	// MHC1
	this.instance_4 = new lib.MHC1();
	this.instance_4.setTransform(329,291.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({rotation:-53.9387,x:286.95,y:301.15},20).wait(577));

	// T2
	this.instance_5 = new lib.T2();
	this.instance_5.setTransform(116.25,592.55,1,1,0,0,0,0,7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(70).to({regX:0.1,rotation:105.0002,x:166.25,y:614.65},19).wait(124).to({regY:7,rotation:165.001,x:545.9,y:663.2},34).wait(150).to({regX:0,scaleX:0.9999,scaleY:0.9999,rotation:177.1897,x:642.35,y:676.95},19).wait(21).to({y:721.95,alpha:0},14).to({_off:true},1).wait(182));

	// T2_rozpad
	this.instance_6 = new lib.T2rozpad();
	this.instance_6.setTransform(638.3,686.2,1,1,14.9983,0,0,-3.1,7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;
	var instance_6Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_6.filters = [instance_6Filter_1];
	this.instance_6.cache(-124,-110,243,223);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(437).to({_off:false},0).to({regX:-3,x:640.15,y:730.9,alpha:1},14).wait(183));
	this.timeline.addTween(cjs.Tween.get(instance_6Filter_1).wait(437).to(new cjs.ColorFilter(0.39,0.39,0.39,1,62.22,62.22,62.22,0), 14).wait(183));

	// MHC2
	this.instance_7 = new lib.MHC2();
	this.instance_7.setTransform(329,526.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({regX:-0.1,rotation:-59.9996,x:280.75,y:533.05},19).wait(545));

	// krizek
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(9,1,1).p("AB2h0Ih4B2IBzBzAgCACIhuBuAh1hwIBzBy");
	this.shape_9.setTransform(229.95,758.425);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(142).to({_off:false},0).to({_off:true},15).wait(477));

	// MHC3
	this.instance_8 = new lib.MHC3();
	this.instance_8.setTransform(329,732.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(109).to({rotation:-14.9983,x:292.4,y:739.9},20).wait(505));

	// T3
	this.instance_9 = new lib.T3();
	this.instance_9.setTransform(116.25,805.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(109).to({rotation:20.9461,x:172.25,y:822.2},20).wait(28).to({y:834.2,alpha:0},14).to({_off:true},1).wait(462));

	// T3_rozpad
	this.instance_10 = new lib.T3rozpad();
	this.instance_10.setTransform(165.35,824.45,1,1,20.4442,0,0,-6,4.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;
	var instance_10Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_10.filters = [instance_10Filter_2];
	this.instance_10.cache(-106,-92,200,194);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(157).to({_off:false},0).to({y:836.45,alpha:1},19).wait(458));
	this.timeline.addTween(cjs.Tween.get(instance_10Filter_2).wait(157).to(new cjs.ColorFilter(0.39,0.39,0.39,1,62.22,62.22,62.22,0), 19).wait(458));

	// bunkyZelene
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C8F2BE").s().p("An8GyQgdh3AAh/QAAlbDEj2QBdh0B4hAQB8hCCHAAQBxAABqAuQBmAtBWBTQh8g6iEAAQiWAAiJBJQiEBGhmCBQhnCAg4ClQg6CtAAC8QAACGAeB/Qg2hmgch0g");
	this.shape_10.setTransform(756.4044,77.3846,0.7208,0.7208);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#62C73C").s().p("Ah0GWQhMgMhBhBQgxgyg1hbIgOgVQgLgOgDgHQAMAGApAiQAhAcAXADQDHAgCjibQCgiWAmjwIAJg5QAEgdgBgaQA1BfAVBIQAeBkgOBdQgPBdg/BZQgtBAhRBKQhNBIg/AgQg/Ahg8AAQgRAAgQgDg");
	this.shape_11.setTransform(768.2891,99.2169,0.7206,0.7206);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#81CC69").s().p("AhRIMQhLgMhBhDQgvgxg1heQg4hjgYhIQgihoAPhcQAPheBAhYQAsg+BUhMQBPhJA8ggQBRgtBLAMQBMAMBABDQAvAyA1BdQA5BkAXBHQAiBogPBcQgPBehABYQgsA+hUBMQhPBJg8AgQhAAjg8AAQgQAAgQgCg");
	this.shape_12.setTransform(765.7306,90.9255,0.7206,0.7206);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B1EDA6").s().p("AkDMGQh4g/hdh1QjEj2AAlcQAAlbDEj2QBdh0B4hAQB8hCCHAAQCIAAB9BCQB4BABcB0QDED2AAFbQAAFcjED2QhcB0h4BAQh9BCiIAAQiHAAh8hCg");
	this.shape_13.setTransform(765.8473,90.9542,0.7208,0.7208);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C8F2BE").s().p("An8GyQgdh3AAh/QAAlbDEj2QBdh0B4hAQB8hCCHAAQBxAABqAuQBmAtBWBTQh8g6iEAAQiWAAiJBJQiEBGhmCBQhnCAg4ClQg6CtAAC8QAACGAeB/Qg2hmgch0g");
	this.shape_14.setTransform(756.4111,584.5041,0.7208,0.7208);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#62C73C").s().p("Ah0GWQhMgMhBhBQgxgyg1hbIgOgVQgLgPgDgGQANAGAoAiQAhAcAXADQDHAgCjibQCgiWAmjwIAJg5QAEgdgBgaQA0BeAWBIQAeBlgOBdQgPBdg/BZQgtBAhRBKQhNBIg/AgQg/Ahg8AAQgRAAgQgDg");
	this.shape_15.setTransform(768.3099,606.2602,0.7206,0.7206);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#81CC69").s().p("AhRIMQhLgMhBhEQgvgxg1heQg4hhgYhJQgihnAPhdQAPhdBAhaQAsg9BUhMQBPhJA8ggQBRgsBLALQBMAMBABDQAvAyA1BdQA5BkAXBHQAiBogPBcQgPBehABYQgsA+hUBMQhPBJg8AgQhAAjg8AAQgQAAgQgCg");
	this.shape_16.setTransform(765.7513,597.9682,0.7206,0.7206);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B1EDA6").s().p("AkDMGQh4hAhdh0QjEj2AAlcQAAlbDEj2QBdh0B4hAQB8hCCHAAQCIAAB9BCQB4BABcB0QDED2AAFbQAAFcjED2QhcB0h4BAQh9BCiIAAQiHAAh8hCg");
	this.shape_17.setTransform(765.8542,598.0739,0.7208,0.7208);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C8F2BE").s().p("An8GyQgdh3AAh/QAAlbDEj2QBdh0B4hAQB8hCCHAAQBxAABqAuQBmAtBWBTQh8g6iEAAQiWAAiJBJQiEBGhmCBQhnCAg4ClQg6CtAAC8QAACGAeB/Qg2hmgch0g");
	this.shape_18.setTransform(756.4111,347.6359,0.7208,0.7208);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#62C73C").s().p("Ah0GWQhMgMhBhBQgxgyg1hbIgOgVQgLgOgDgHQAMAGApAiQAhAcAXADQDHAgCjibQCgiWAmjwIAJg5QAEgdgBgaQA1BfAVBIQAeBkgOBdQgPBdg/BZQgtBAhRBKQhNBIg/AgQg/Ahg8AAQgRAAgQgDg");
	this.shape_19.setTransform(768.3099,369.4722,0.7206,0.7206);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#81CC69").s().p("AhRIMQhLgMhBhDQgvgxg1heQg4hjgYhIQgihoAPhcQAPheBAhYQAsg+BUhMQBPhJA8ggQBRgtBLAMQBMAMBABDQAvAyA1BdQA5BkAXBHQAiBogPBcQgPBehABYQgsA+hUBMQhPBJg8AgQhAAjg8AAQgQAAgQgCg");
	this.shape_20.setTransform(765.7513,361.1803,0.7206,0.7206);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B1EDA6").s().p("AkDMGQh4g/hdh1QjEj2AAlcQAAlbDEj2QBdh0B4hAQB8hCCHAAQCIAAB9BCQB4BABcB0QDED2AAFbQAAFcjED2QhcB0h4BAQh9BCiIAAQiHAAh8hCg");
	this.shape_21.setTransform(765.8542,361.2057,0.7208,0.7208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(634));

	// trojuhelnicka_navic
	this.instance_11 = new lib.trojuhelnicky();
	this.instance_11.setTransform(775.7,100.25,0.5613,0.5613,-59.9997,0,0,-0.1,0.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(270).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-59.9996,x:775.65,y:100.1},18).wait(346));

	// trojuhelnicky
	this.instance_12 = new lib.trojuhelnicky();
	this.instance_12.setTransform(774.75,370.1,0.6028,0.6028,-59.9993,0,0,-0.1,0.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(322).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-59.9996,x:774.65,y:370},22).wait(290));

	// Vrstva_3
	this.instance_13 = new lib.troj_jeden();
	this.instance_13.setTransform(711.05,645.65,1,1,-75.0017);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(419).to({_off:false},0).wait(18).to({x:712.05,y:692.65},14).wait(183));

	// Vrstva_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_437 = new cjs.Graphics().p("AjqIxIjIhHIgyjpIkdjPICqlQIiMqSIXlAAIAAdDIn5ixIkSDPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(437).to({graphics:mask_graphics_437,x:762.675,y:595.125}).wait(197));

	// trojuhelnicky2
	this.instance_14 = new lib.trojuhelnicky();
	this.instance_14.setTransform(774.7,607.55,0.5752,0.5752,-59.9993,0,0,-0.1,0.1);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(377).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-59.9996,x:774.65,y:607.4},30).wait(227));

	// pozadi
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E18E82").s().p("EguqBLZMAAAiWxMBdVAAAMAAACWxg");
	this.shape_22.setTransform(1071.1079,460.6678,0.7227,0.9596);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F5B9AC").s().p("EguqBLZMAAAiWxMBdVAAAMAAACWxg");
	this.shape_23.setTransform(639.4362,460.6137,0.7227,0.9596);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FADFD6").s().p("EgjLA42MAAAhxrMBGXAAAMAAABxrg");
	this.shape_24.setTransform(209.8584,460.5646,0.9584,1.2726);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]}).wait(634));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_6, startFrame:437, endFrame:437, x:-124, y:-110, w:243, h:223});
	this.filterCacheList.push({instance: this.instance_6, startFrame:438, endFrame:451, x:-124, y:-110, w:243, h:223});
	this.filterCacheList.push({instance: this.instance_10, startFrame:157, endFrame:157, x:-106, y:-92, w:200, h:194});
	this.filterCacheList.push({instance: this.instance_10, startFrame:158, endFrame:176, x:-106, y:-92, w:200, h:194});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(634,457.5,653,502.1);
// library properties:
lib.properties = {
	id: '7CC3B48E25748543A2FD0BFB3051667B',
	width: 1280,
	height: 920,
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
an.compositions['7CC3B48E25748543A2FD0BFB3051667B'] = {
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