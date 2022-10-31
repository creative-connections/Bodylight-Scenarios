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


(lib.Vyrazka = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFA38D").s().p("AhfCXQgRgPgFgNQgIgGAAgKIAAgEQABgLAEgGIAEgTQACgHAGgFQAGgFAGABQgEgBAIgHQgBgHACgSQADgRgDgJQgCgJAEgHQgEgFgCgKIgEgEQgKgKAAgOQAAgNAJgLIAAAAIgDgDQgIgHgDgKQgBgFABgQQACgLAOgJQALgHAQADQANADAIANQAJAGADAHQAFAKACAZQAFAEACAEIADAIIADARIABABQAMgEAIAKIAGACQANgCAGAOIAIAHQADAEABACQANAHgCAQQAkASAUAdQAXAhgGAmQgCARgSgDQgSgDgBgRQAAgLgFgKQgDgCgDgEIgNgTQgLAFgLgIIACACIgEAAIgJgBQgLgBgGgEQgJgFgCgJIgBgDIgFABIAGAJQAGALgGALQgEAJgHADIgQAFIgJABIgKAJIgSAVQAPAQgPAPQgIAHgHAAQgIAAgIgHg");
	this.shape.setTransform(35.604,42.898);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE6959").s().p("AgKAWQgEgCgCgGQgBgCABgEQgDgEAAgDIAAAAQgDgMALgIQAHgFAMACQAFAAAFAIQAEAGgCAIIAAgBIgBAGQgBAFgFAFQgGAHgHABIgEABQgDAAgDgCg");
	this.shape_1.setTransform(14.2773,52.8344);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE6959").s().p("AgCAYQgLgLgDgNQgFgCgDgEQgMgBAAgNIABgBIABAAIADAEQgCgGAFgFQAFgFAGACIALAEQAFgEAHACQAIABADAHQADAFgBAIQAAAEgEADIABABQACACAIACQAMAEgCAMQgCALgMACIgDAAQgMAAgJgJg");
	this.shape_2.setTransform(50.9128,40.9308);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE6959").s().p("AABASQgJABgHgCQgHgCgDgHIgDADQgCADgEgDQgDgDACgDIALgRIABgDIAHgKIAEgEQAFgCAFAAIABABQAFACADAGIAIgBQAKgBAEAJQADAJgEAHIAFAGIADAHQADAJgJAFQgFAEgFAAQgKAAgJgOg");
	this.shape_3.setTransform(59.967,57.8006);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE6959").s().p("AgbAZQgFgDABgFIAEgNQACgFAGgBQABgFAFgEQAEgDAGAAQAEgGAGgDQAJgFAGAFIAFACQADABABAEQADAEgDAFIgDADIgDAEIgDACQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQgBAHgEAEQgFAFgGAAIgGgBIgEABQgEABgGgCIgDAEQgCACgCAAIgEgBg");
	this.shape_4.setTransform(38.1452,53.0141);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE6959").s().p("AAGAVQgHgDgFgGIgQgCQgJgBgFgEQgFgEgBgFQAAgHAGgDQAHgEAMAAIATABQAKgGAKAHQAIAAAHAHQALAJgJAMQgIAMgNgEIgLABIgBAAg");
	this.shape_5.setTransform(51.4456,23.0852);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE6959").s().p("AgIAoQgGgFgBgGIgIgnQgGgJADgKQADgLAMgDQASgEAJARQAGALACAXIACAFQAEAIgFAMQgFAPgQAAQgGAAgGgEg");
	this.shape_6.setTransform(36.0516,26.3029);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FE6959").s().p("AANAnIgEgFIAAAAQgEAAgDgBIgBAAQgJADgJgHQgKgGgDgKQgCgGADgGQADgGAEgCIAGgDQgEgOAKgHQAJgJANACQANACAFANQAEAKgEALIgBADIgBAGQgCAGgFAEIAAABQACAIgHAGIgBAGIAAACIgCgBg");
	this.shape_7.setTransform(21.6997,34.264);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF8A78").s().p("AAAAtQgJgFACgOQgGAAgHgDQgEgCgEgGQgOACgIgNQgIgMAMgKQAFgGABgDQABgMAMgGQAMgHAJALIANAQQANgHANAEQAPAFAEAQQAHAWgSAUQgNAOgOAAQgHAAgHgEg");
	this.shape_8.setTransform(43.01,67.4148);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF8A78").s().p("AgZA2QgJACgIgGQgIgGABgJQAAgGgCgGQgDgNANgIQgDgOALgMQANgNAhgOQANgGANAGQAOAHgBAPQAAAMgKAJIgFADQAFAOgKAHQgPANgOgEIgDgCIgDAHIAAACQACAFgBAFQgBAGgFADIgDACQgEACgEAAIgGgBg");
	this.shape_9.setTransform(57.8719,58.2771);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF8A78").s().p("AgQAzQgGgHACgJQgHgJgJgRQgQACgMgKQgOgKABgTQABgOALgJQALgJAPADQAJABAIAHQAHAAAFAFQAFgKAIgCQAOgBAIAHIADAFIAOAEQAIAGACAFIABABQAGAEAEAFQAGAKgDALIAAADIAFAEQAIAKgCAMQgCAMgLAHQgLAHgVACIghABIgBAAQgJAAgFgIg");
	this.shape_10.setTransform(10.3156,54.0731);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF8A78").s().p("AANBNQgOgCgIgPQgJAAgDgJQgEgIAEgIQAFgJAAgLQAAgGAEgFIgOALQgKADgHgCQgSgFAAgTQAAgFADgFQAEgFAFgBQAKgBAHgFQgMgIgIgNQgFgLAIgJQAJgJALAGQAQAKAFAHQAGgHAJACQAKACADAJIAbAAQANgBACAOQADANgLAFQAEAFAAAHQAAAHgFADQgLALgOADIgEAIQAMABAHAHQAFAHAAAKQgBAJgGAHQgJANgOAAIgFgBg");
	this.shape_11.setTransform(47.3481,40.6864);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF8A78").s().p("AgVA7QgOAAgCgPIAAgPIgGgFQgFgFABgHQABgIAGgDQAHgDAAgHQAAgIgGgFQgGgFACgIQABgIAHgFQAWgQASALQAGAEABAHQACgDAFgBQAKgCAIAEQAIAEADAKQACAKgHAPIgNAVQgEAGgHACQgHACgGgDIgIALQgFAGABAEQAAAPgOAAIgBAAg");
	this.shape_12.setTransform(36.2246,56.9428);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF8A78").s().p("AA0A7IgIADQgMAFgKgJQgJgIgBgMQAAgGgGgMQgGgNgBgFQghAAgTgEQgagHgKgTQgFgJADgKQAEgLALgCQAcgGAJACQAKADAWALIABABIAnAAQAHAAAHABQALACAFAJQAEAIgCAKQAHgCAGADQAHAEADAIQAEALAAANIgBAGQADALgDANQgDAMgOAEIgHABQgJAAgGgGg");
	this.shape_13.setTransform(48.5029,23.7225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FE6959").s().p("AggArQgKgFAAgMQgBgNAJgGIAAgCQgFgEgCgEQgBgHADgDIAAgBQACgDADgCIAEgBIAAAAQAGgGAHgBQAAgJAHgGQAGgGAIgBQAPgBALAGIACABQAKAEgBAJIgCAMQADADABAEQABAJgCAGQgBAIgFAFQgIAIgLADQAAAJgGAGQgGAHgIAAQgNgBgQgGg");
	this.shape_14.setTransform(13.4268,26.3679);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF8A78").s().p("AARAwQgMAEgPgDQgJgBgFgJQgEgJACgIQAEgOAIgJIgBgBIgDgEQgOgBgHgOQgHgPAMgJQAPgMAQAFQANAEAMARQASAYgHAVIADADQAIAIgCASQgCAKgKACIgBAAIgCAAQgGAAgEgHg");
	this.shape_15.setTransform(35.1671,29.5824);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF8A78").s().p("AgXA1IgDgCIgEAAQgGgCgGgDQgLgIABgPQABgPAMgEIABgOQgFgTAMgMQAJgHAHgBQAHgEAFgBIAFAAQAKgDAIAFIAVAOQAJAFACALQACALgGAIQACAagTANQgHAFgNABIgCACQgFAJgIACIgGABQgHAAgGgDg");
	this.shape_16.setTransform(22.0194,37.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFA38D").s().p("Ag6BxQgQgCgFgNIAAgBIgEgPQgGgGgCgJQgCgKAEgJQACgEAAgGQABgMAIgJQAJgJALAAIACgBIAMgBIAHgBQgCgRAQgLQABgSAFgKQAGgNAOgGIADgBQAFgRAGgMQAEgJALgDQAMgCAIAFQAUANAJALQAMAPgBATQgBAbgXALQAEANgJAIQgNAOgUgGQABAOgKAIQgXAVgdAFQAAALgGAXQgEAPgPAAIgCAAg");
	this.shape_17.setTransform(9.2204,26.8144);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFA38D").s().p("AgIAmQgIgFgCgIIgBgOIABgKIgFgDQgHgJADgIQAAgHAEgGQAFgGAHgCQAIgDAHAFQAJAEABAJQADAGAAAIQAGAEADAHQACAGAAAMQAAAJgGAHQgGAGgJACIgCAAQgGAAgHgEg");
	this.shape_18.setTransform(3.9026,50.9137);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFA38D").s().p("ABJBkQgGAAgFgHQgTABgOgPQgGgGgBgIQAAgIAFgGIgGgCIgIgDQgGgBgPADQgPAEgHgCQgMgCgNgMIgHgEQgJgFgCgKQgCgKAFgHIAAgEIgIABQgZAQgXgMQgagOALggQAKgeAZgMQAHgEALABIAFABIALgHQANgGANAGQAOAHgBAQQgBAKgDALIAAABQAEABADACIACABQAHAFADAIQADAJgDAIIADACQAHAEAGAIIACAEIAFgBIAHgEQgBgJAEgHQAFgIAKgCQAOgFARgCQAGgHAJgBQAJgBAIAGQAJAAAHAJQAGAIgBAJQARAAAIANQAJALgFAQQgGAQgPACQgOACgHgLQgLAAgHgIIgGABQAFAMgDASQAFAEABAFQAFAQgIAPQgBACgDAAg");
	this.shape_19.setTransform(62.253,47.7375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFA38D").s().p("AglAXQgKgMAGgLQANggAagCQAPAAAKAKIACACQAKACAFAJQAGAJgCAJQgDAMgJAHQgIAIgNAAQgGAAgGgDQgFAEgIAAQgNAAgKgMg");
	this.shape_20.setTransform(73.9392,35.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFA38D").s().p("AgIAJQgDgDABgEIABgCIADgEIAEgDQAEgGAGAGQADACAAAEQAAACgDACIgDAEIgFADIgBABIgCAAQgCAAgDgCg");
	this.shape_21.setTransform(49.5625,6.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFA38D").s().p("AgZAYQgLgLgBgPQgBgRALgKQALgJALAJQAJAIgGAMIACADIAIAAIAGACQAMAAAGAEQAHADgCAIQgGASgWAEIgJABQgOAAgLgKg");
	this.shape_22.setTransform(45.1099,3.4518);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFA38D").s().p("AACAiQgEgCgBgFQgBgJABgFQADgHAEgDIgEABQgGAAgFgEQgFgDgBgFQgDgNALgIIAKgFQAGgBAFADIABAAQABAAAAAAQAAAAAAAAQABAAAAABQgBAAAAABQAIAIgFAJIgBAFQgCAFgEADQADAAACAAQADACAAADIgCAEIABADIAAADIAAADQAEAMgKAEIgEABIgFgBg");
	this.shape_23.setTransform(20.4772,16.5775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFA38D").s().p("AAnBxQgJgFABgIIAAgSQgEABgFgCQgHAAgFgFQgGgFABgIQABgaALgMIADgNQACgHAHgEIACgBQADgGAHgFIgGgDQgQAJgMAQIAGAGQAAABABAAQAAAAAAAAQAAAAAAAAQgBABAAAAIgCAAIgGgEQgKAMgQgDIgBACQgBAJgKAEQgKAEgJgCQAGADABAIQACAHgEAFQgDAHgIACQgHACgHgEIgBgBQgFAGgEACQgKAFgIgGQgKgIAEgKQAHgWAQgGQAJgDAJADIAEACQgDgGADgJQAHgbARghQAFgKAJgBQAJgCAIAFQAIgHALgGIABgOIgCgIQgCgJAFgIIAAAAQADgIALgDIABgBIADAAIAIgBIADABIABAAIAFACIABABIAEADIABABQALALgEAPQgCAHgFAEQAGgCAHAAIgDgEIAAgEQgBgGAGgDQAEgCAEABIABAAIABABIAEABIAEAEQACADAAADIgBAEQgCAFgFABQALAGABALIACAIQACAIgEAHIgGAIIgGAEQANAGAGANQAFANgDAOIADAHQAEAKgHAIQgGAdgYgBQgCATgSALQgEADgDAAQgEAAgEgDg");
	this.shape_24.setTransform(17.2262,39.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFA38D").s().p("AAEAiQgQgRgUgCQgfgCAEgcQAEgeAeAFQAZAFAWAPQALgJAOAGQAPAGgBAPIgCAMQABAHgFAGQgEAFgHACQgHAKgMABIgEAAQgKAAgHgHg");
	this.shape_25.setTransform(30.8888,22.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFA38D").s().p("AgBA4IAAAAIgIgCQgJgCgKgGQgRgMgGgUQgFgRADgVQAEgYAMgLQAJgHALgBQALAAAIAIQAGAGACAGQAGAAAEADQAGADADAHQADAHgCAHIgLAUIALACQALAGAIANQAPAYgYAQQgLAHgJAAQgMAAgJgMg");
	this.shape_26.setTransform(57.4786,28.8959);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFA38D").s().p("AAAAkQgJgCgGgJQgNgCgHgLQgIgMAEgLQAFgSASgFQAQgFAQAJIAGAFQAJACAFAGQAFAGABAJQAAAHgFAGIgCAEIAAAAQgEAMgKAGQgHAEgIAAIgGgBg");
	this.shape_27.setTransform(71.8966,24.6132);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFA38D").s().p("AgXAoQgGgCgDgGQgEgHACgGIAEgLQgEgNAGgQIAEgFQAFgKAMgEQAIgDAKAFQAJAEAEAIIADACQAGAFACAKQABAIgDAHQgHAPgSABIgDADIgEADIgCAFQgDAGgHACIgFABIgHgCg");
	this.shape_28.setTransform(72.6011,68.2594);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFA38D").s().p("AgGAzQgTgCgEgTIgDgSQgDgGAAgFIAAgJQAAgHACgEQABgNAIgHQAHgIAMgBIACAAQAHgCAHAAQAIABAHAGQAHAGACAIQAGAmgTAcQgJAOgOAAIgFAAg");
	this.shape_29.setTransform(45.7735,74.3323);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFA38D").s().p("AAXBDQgDgGgCgLIgDgSQgFgCgEgDQgIAUgXgIQgXgJAEgXIgBgEIAAgCIgBgBQgSggAZgfQAJgKANACQAMgEAJAEQALAEAEAKIAFAHQAKATAEAUQAGAEADAFQAIAKAAAWQAAARgEAQQgDAJgKACIgEAAQgIAAgDgHg");
	this.shape_30.setTransform(57.9361,83.3365);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFA38D").s().p("AgvBDQgdgUAGgbIABgBQAIgBAJACQgJgUAGgVIABgMQADgLALgEQAGgFAHAAQANgPAOABQAJgEAJADQAHgJANABQANACAFAMQALAFADAKQAEATgHAPQgJAPgTgBQgOAMgOgJIgBAAQADAQgGAOQACASgJAMQgIANgOAAQgLAAgOgKg");
	this.shape_31.setTransform(58.4507,63.4863);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFA38D").s().p("AgHC3QgGABgFgEIgBACQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgDQgFgDgCgGIgCgEQgFgGAFgJQAEgKAJAAQAFgGAIAAQAIgBAFAGIADgIQAEgLAKgEQAKgEALAFQgIgEAQgOQACgKgLAGQgJADgKgEQgIgEgGgIQgOgXAKgfQgOgCgHgRQgBgCgUgEQgeARgqgWQgdAZgmgWQgngWARgrQAPgjAkACQAiACANAcIATAMQAIgYAYgFQAKgCAJADQALAEAEAJIAEALQAEgBAGABQAOgLARAHQAEgLAKgHQgGgPAIgQQAJgQAQgFQALgDAMACIABgBQgRgNACgbQABgOAPgHQAPgHAJAMIABABQAJgDAIACQAPAEALANQAXAGAGAhQAFAhgRAQQgNALgOgDQgMgEgIgMQgDAEgEACIgCABQgCARgNAMQgFAGgJADQgGADgJABQgEACgCgBIAAABQABAHgDAEQgBAHgGAKQAGACAEADQANAJAIAWQAHAUgTAMQAQATgBAfQADANgFAIIgEAIQgHAOgNgBIgNAMQgIAGgHABQgEAPgDAFQgGAKgNADIgHABQgOAAgLgQg");
	this.shape_32.setTransform(25.4697,68.0141);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFA38D").s().p("AADAnQgEAAgEgEQgIACgEAAQgQAAgNgNQgNgMAAgPQABgkAvgCQArgBAUAXQAKAMgDAPQAAATgPAKQgJAGgKgFQgGAEgGAAQgFAAgFgDg");
	this.shape_33.setTransform(38.4241,34.5964);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Vyrazka, new cjs.Rectangle(0,0,78.4,90.8), null);


(lib.Ruka = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F8C3A9").s().p("Ajmc+IgZzqIhJi6QhIhphZhiQgugyhbhVQg2gyggg1QgagugShAQgUhKgqhUQgPgdgig8QgZgtgVgwQgVgwgRg4QgMglgSgdQgig5hAg6QgvgpAGgPQAGgUAsgFQAogFAsAJQA8ANA1AtQAhAcA4BFQAsA2AvBTQAoBHAtAuQA9A/BPAtQBdh7AliMQAJgkAGhDQAMiGgRidQgEgkgIgnQgPhKgThzQgfi0gLhmQgKhiAAhaQABhEAEg1QAfgXAkgBQAkgBAaAUQAiAaADAvQAfF2BtFfQAXBMAXBAIBcAFIBEmzICGogQACgJAHgLQAMgUAUgIQAYgJAXAKQAiALAQAZQATAcgGAjQhCEXgNDmQgIC7gPCeIgMCCIBOg0IEXsEQAKgKATgJQAfgPAcAJQAhAKATApQAPAjgMAxIgiBiQgMAggFAiQgIAxgaBiQgcBmgpB5QgfBcgPBJQgWBogHBtQAugSAlgZQAqgdAggpQAZgeAfg1QAqhIAihNQAhhJAXgnQA7hkBghWQAegNAZAMQAPAIAKAPQAJAQAAATIhZDKQg0B1guBaIjuHSIhJFBIh3GoIgvEIICCSYQi9BfjVAHIgjABQjGAAi3hOg");
	this.shape.setTransform(112.1709,193.2173);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ruka, new cjs.Rectangle(0,0,224.4,386.4), null);


(lib.Mast = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ai0CFQgogWgTgfIgFgIIgBgCQgGgKgEgLQgFgRgBggQAAggAFgPQAHgXAYgWQAZgWAbgJQAZgJAogBQAsABAWgBQAqgEATAAQANgBALABQAtgEAQgBIAIAAIAGgCQARgGANgBQAYgEAYAIQAXAIARARQARASAGAYQAGAZgHAXQgOAwg/AaQgVAJgbAGIgyAKIg8AKQgUADgGAHQgDACgKARQgLAUgVAMQgUAMgYACIgMABQgkAAgogUg");
	this.shape.setTransform(26.2135,15.3008);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mast, new cjs.Rectangle(0,0,52.5,30.6), null);


(lib.Mapa = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFE05C").s().p("AmwJPQgcgMgMgCIglgGQgzgIgWgHQghgKgpgYIgIgFIgFgDIgDgCIgEgBQh7hIjBg+IgzgSQhDgagsgGQgWgDgxAEQhAAFgUgHQgJgDgHgFQgOgIgOgVQgQgYgRgNIgKgHQgNgIgYgIQgagKgKgGQgIgFgGgFQgOgMgXgYQgbgbgFgJQgHgPADgIQACgFAKgJQASgPAFgRQAIgjgvgbQgPgIgzgVQgwgSgWgNQgpgXgDgdQALABANAIIAQAKQAGAFAIAEQAIAFAGgFQAMgNANgUQATgbALgJQAQgMAYgIQAPgFAfgHQAjgJAPgFQBsglCThKQAZgNAogdQAfgXARgJQAcgQAggHQAvgKAYgMQARgJAkgcIAJgHQARgOAxgRQArgQAPgLQAIgFAGgLIAJgWQAFgPAEgGQAGgLAHgCQAigHAmAVQALAGAVAPIAeAUQAQAKAQADQArALAmgcIAAAAQAVgBATgIQALgFAVgNQAVgOANgFQAVgIAYACQAkACAvAbQAjAUASAXIADACQACACADAAQAVACAsAAQA6AAAaAEIA0ALQAtAMAlADQATACAugBQAxgBAaACQAiADARAKQAPAJAFARQAEAPABAXQABAWAFALQAJAQAbAQIANAHQAbANA2AJQAxAIATALIAAAAQAKAGAHAPQAGAQALAGQAMAHAWAAQAbAABXhDQAQgOADgLQACgIgDgNQgFgLAGgLQAIgOADgCQAEgCANADQAVAFATABQAWADAtACQAiABAbACIADAAQBDAGAkAGQA+AKAeARIAKAHQASAOAOAUQANASALAGQATALAqgCQASgBAegFQAPgDAJAAQAMgBARADIAYAIQARAIAOADQAOADARgBIAcgDQAcgEAMABIAGAAQAfADAGADQAEADAFAGQAKALAKAJQAXAVAVAMQAUALAlANIArARQAWAJAKAGQAZAOgDAUIgQABQgrgCgjAQQgjAQgTAeQgDAGAAARQAAANgCACQgJAJgUAGQgTAFgKAHQgaAQgjAoQgXAbgeA1QgZAugTAVQgeAjgwAVQgfANgoAKQgZAGgvAIQg8AKgfAIQgyAOglAWIgHAEQghAVgQADQgXAGgogKQgKgDgUgMIgWgNQgQgKgHAAQgUgDgLADQgIABgHAHQgHAHgIACIgDABQhoAdhEAGQhPAHgogXQgRgKgJgQIgEgDIgCgBQgFgBgEABQgeAOglAFQgqAHgcgIQgKgDgKgGIgRgKQgVgMgYgDQgugGgzgCQhRgDg6AIQgJABACAHQACAKAJAWIANAkQAFATgFAKQgEAKgtAXIgSAKQgQAKgTAQQgfAYgRAIQgNAGghAFQggAEgOAFQgNAFgaAQQgNAKgHADQgMAGgMAAIgBAAQgPAAgkgOg");
	this.shape.setTransform(174.1215,60.556);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mapa, new cjs.Rectangle(0,0,348.3,121.1), null);


(lib.Leky = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhaA3IAAgFICmhvIAPAGIipBvIAAAAIAAAAIABAGg");
	this.shape.setTransform(12.725,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AhaA1QgmgWgBgfQAAgeAmgWQAmgWA1AAQA1AAAnAWQAmAWgBAeQABAfgmAWQgmAWg1AAQg1AAgmgWg");
	this.shape_1.setTransform(13,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEDEDE").s().p("AhaA5QglgWgCgfIAAAAIAAhSIEDAAIAABSIgBAAQgBAfgkAWQgmAWg1AAQg1AAgmgWg");
	this.shape_2.setTransform(13,15.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Leky, new cjs.Rectangle(0,0,26,23), null);


(lib.Krem = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C993E0").s().p("AlaifIGej0IEXKMInDCbg");
	this.shape.setTransform(79.525,92.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9D9D9").s().p("AAqBOIhjiRQgCgDABgDQABgEADgCQAIgEAEAGIBkCSQACACgBAEQgBADgDACIgCABIgFABQgDAAgDgEg");
	this.shape_1.setTransform(17.875,120.5974);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9D9D9").s().p("AArBOIhkiSQgCgCABgEQABgDADgCQADgCAEAAQADABACADIBkCRQACADgBADQgBAEgDACIgBAAIgFACQgEAAgCgEg");
	this.shape_2.setTransform(13.875,122.3095);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9D9D9").s().p("AAqBOIhjiSQgFgGAIgFQADgCAEABQADAAACADIBkCRQAFAHgIAFIgCABIgEABQgEAAgDgEg");
	this.shape_3.setTransform(9.775,124.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9D9D9").s().p("AAqBOIhjiSQgFgGAIgFQADgCAEABQADAAACADIBkCRQAFAHgIAFIgCABIgEABQgEAAgDgEg");
	this.shape_4.setTransform(5.9716,125.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9C9C9C").s().p("AArBOIhkiSQgFgGAIgFQAEgCADABQAEAAACADIBjCRQAFAHgIAFIgBABIgFABQgEAAgCgEg");
	this.shape_5.setTransform(18.9882,120.1363);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9C9C9C").s().p("AAqBOIhjiSQgFgGAIgFQADgCAEABQADAAACADIBkCRQAFAHgIAFIgCABIgEABQgEAAgDgEg");
	this.shape_6.setTransform(15.0216,121.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9C9C9C").s().p("AArBOIhkiRQgEgHAHgFQAEgCADABQAEAAACADIBjCSQACACgBAEQgBADgDACIgBABIgFAAQgEAAgCgDg");
	this.shape_7.setTransform(10.8823,123.5867);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9C9C9C").s().p("AArBOIhkiSQgFgHAIgEQAEgCADAAQAEABACACIBjCSQAFAGgIAGIgBAAIgFACQgEAAgCgEg");
	this.shape_8.setTransform(7.0784,125.3595);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BDBDBD").s().p("AhABuQgIgDgEgHIgvhuQgDgIADgHQADgIAIgDICuhLIA/CSIiuBLQgEACgEAAQgDAAgEgCg");
	this.shape_9.setTransform(12.6125,122.8125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFC1FF").s().p("ArzK9QgVgJgJgVIivmaQgIgUAGgUQAHgVATgLIXlt4QASgKAUAGQATAHAJATIFDLzQAIASgIATQgJASgTAGI5vI0QgKADgJAAQgMAAgLgFg");
	this.shape_10.setTransform(115.5342,70.6289);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BDBDBD").s().p("AgyBZIg2h9IAUjAIC+HJg");
	this.shape_11.setTransform(28,116.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Krem, new cjs.Rectangle(0,0,212.1,141.3), null);


(lib.Path_7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("Ag1AjQg4gLg+gXQg3gGAAgJQAAgJBDgHQBCgHBdAAQBdAABDAHQBDAHAAAJQAAAJg/AHQg6AWgvAKQgOADgrABQgpAAgOgDg");
	this.shape.setTransform(22.675,3.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,45.4,7.6), null);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgoCRQgSgDAAgEQAAgHA1gBIAAhpQgWgDgPgTQgQgUAAgiIAAhXQAAgDASgDQARgCAXAAQAYAAASACQARADAAADIAABXQAAAigQAUQgPATgWADIAABpQA1ABAAAHQAAAEgRADQgSACgYAAQgXAAgRgCg");
	this.shape.setTransform(5.875,14.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,11.8,29.5), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgpBwQgRgCAAgDQAAgCAPgCQAPgCAXgBIAAhRQgWgCgPgOQgQgPAAgbIAAhDQAAgDARgCQASgCAXAAQAYAAASACQARACAAADIAABDQAAAbgQAPQgPAOgWACIAABRQAXABAPACQAPACAAACQAAADgRACQgSACgYAAQgXAAgSgCg");
	this.shape.setTransform(5.9,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,11.8,22.8), null);


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
	this.shape.graphics.f("#000000").s().p("Ag1AkQg7gMg7gXQg3gGAAgJQAAgJBDgHQBCgHBdAAQBeAABCAHQBDAHAAAJQAAAKg/AGQgyAUg3ANQgNACgrABQgqAAgOgCg");
	this.shape.setTransform(22.675,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,45.4,7.6), null);


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
	this.shape.graphics.f("#000000").s().p("AgeBqQgMgDAAgDIgkjAQAAgDAEgCQARgKA5AAQAVAAAQABIAYAEQAKACAGAEIAAABIACADIgkDAQAAADgMADQgNACgSAAQgRAAgNgCg");
	this.shape.setTransform(7.875,10.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,15.8,21.7), null);


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
	this.shape.graphics.f("#000000").s().p("Ag0CPQgWgDAAgEQAAgDAUgCQATgCAcgBIAAhnQgbgDgTgSQgVgUAAgjIAAhVQAAgEAWgCQAWgCAegBQAfABAWACQAWACAAAEIAABVQAAAjgUAUQgTASgcADIAABnQAdABATACQATACAAADQAAAEgWADQgWACgfAAQgeAAgWgCg");
	this.shape.setTransform(7.5,14.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,15,29.1), null);


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
	this.shape.graphics.f("#000000").s().p("AgwCFQgHgDABgCIguj2QAAgIAegGQAdgFApgBQAqABAeAFQAdAGAAAIIgtD2QgBACgGADQgPAFgiABQghgBgPgFg");
	this.shape.setTransform(10.1,13.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,20.2,27.7), null);


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
	this.shape.graphics.f("#A7EECD").s().p("AgbBMQgLgCAAgDIgWiGQAAgGAQgFQARgEAbAAQAcAAARAEQAQAFAAAGIgWCGQAAADgMACQgLACgQAAQgPAAgMgCg");
	this.shape.setTransform(6.125,7.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,12.3,15.7), null);


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
	this.shape.graphics.f("#A7EECD").s().p("AgiBhQgPgCAAgEIgditQAAgHAVgFQAWgFAjAAQAkAAAWAFQAUAFAAAHIgcCtQAAAEgOACQgPADgVAAQgTAAgPgDg");
	this.shape.setTransform(7.85,10.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,15.7,20.1), null);


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
	this.shape.graphics.f("#A7EECD").s().p("Ag6CiQgYgFAAgHIgvkeQAAgNAigIQAkgIA7AAQA8AAAkAIQAiAIAAANIgwEeQAAAHgYAFQgYAEgiAAQgiAAgYgEg");
	this.shape.setTransform(12.975,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,26,33.2), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C4F2E").s().p("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ACQAcgCAAgPQAEgNgLgFQgFgCgIAAIgIAAgABGkJIAdAOQAMAGAaAIQAYAJAKAPQAJAMAOgEQAPgFAAgOQgNgVgagPQgTgKgggLQgegPgRgFQgbgJgYACQgLgBgDALQgCAKAFAIQAKAKATgCIACAAQANAAAQAHgADZlWQAOADADALQAKAZggAiQgKAKALALQALAMALgJQAhgdACgdQADgfgbgWQgZgVgfADQgVAFgOAOQgRAQABATQAEAKAJAFQALAGAIgGQAIgEAGgLIAJgTQAIgEAIAAIAHABgAjtlqQgXAPgIAXQgGAXANAXQALAUAUAPQALAEAJgKQAJgLgKgJIgSgYQgJgQAEgOQABgOAQgEQAOgFALAIIAJATQAFALAJADQAIAGAKgGQAKgFADgJQABgUgQgQQgQgPgUgEIgHAAQgWAAgTAMgAhJmrQgUACgQAKQgRAKgJARQgHASABAQQABAUAOALQAKAEAKgEQAMgFAAgLQADgHgEgLIgGgSQABgMAMgIQANgIALAHQAZANgCApQgBANAOADQANADAHgKQAIgigRgeQgTgeggAAIgFAAgABSmOQAMADAFALQAGAHgGAPQgHAPADAHQAAAMANAFQALAFAKgHQARgQgEgcQgDgbgVgNQgQgPgdgDQgjgCgUAgQgSAfAKAgQAGALANgDQAOgDgBgMQAAgmASgOQAGgGAJAAIAHABg");
	this.shape.setTransform(46.3,46.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWB3QgOgMgHAAQg1ACgEgYQAEgfgIgRQgCgGgPgMQgMgJAAgKQAAgJANgQQAOgRABgIQAFgiARgOQAMgJAjgJIASgIQANgGAFAAQALAAALAJQALAKALgBQAcAAAPAMQATAOACAkQAAANANANQANAMAAAMQAAAJgJAMQgLAQgCAEQgGAPgCAaQgIAUgzAIQgKABgMALQgKAJgNAAQgHAAgPgMg");
	this.shape_1.setTransform(46.1,46.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D7C3C").s().p("Ai9C6QhPhNAAhtQAAhsBPhNQBOhNBvAAQBvAABPBNQBPBNAABsQAABthPBNQhPBNhvAAQhvAAhOhNg");
	this.shape_2.setTransform(46.125,46.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjjDgQhfhdAAiDQAAiCBfhdQBehcCFAAQCGAABeBcQBfBdAACCQAACDhfBdQheBciGAAQiFAAhehcg");
	this.shape_3.setTransform(46.125,46.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEAF01").s().p("Ak5E0QiCiAAAi0QAAizCCiAQCCh/C3AAQC4AACCB/QCCCAAACzQAAC0iCCAQiCB/i4AAQi3AAiCh/g");
	this.shape_4.setTransform(46.125,46.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,92.6,92.6), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEAF01").s().p("AABACQgWgOgDgPIgBgFQAcACAKANQAHALAGAnQgDgPgWgQg");
	this.shape.setTransform(8.425,7.3125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEAF01").s().p("AgZgbIgCgHQAfADAJAOQAGAIAIAtg");
	this.shape_1.setTransform(49.4,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEAF01").s().p("AAOAPQgJgNgEgCQgNgHgDgFQgEgEgGgQQAZgBANAPQANARgBAig");
	this.shape_2.setTransform(104.7509,7.372);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEAF01").s().p("AAQARIgGgKQgEgGgDgBQgMgBgHgKQgEgGgFgPQAdgBAKAOQAJANADAnIgKgQg");
	this.shape_3.setTransform(126.825,7.3741);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEAF01").s().p("AgGA5QgGgHABgOIAAhlIAYAAIAACDQgNgCgGgHg");
	this.shape_4.setTransform(9.1981,22.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEAF01").s().p("AgGA5QgGgHABgOIAAhlIAYAAIAACDQgNgCgGgHg");
	this.shape_5.setTransform(127.7481,22.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEAF01").s().p("AgGA4QgGgHABgPQABgTgBgdIAAg0IAYAAIAACFQgNgDgGgIg");
	this.shape_6.setTransform(49.9981,22.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEAF01").s().p("AgGA5QgGgIAAgPIABhkIAYAAIAACFQgNgDgGgHg");
	this.shape_7.setTransform(105.5731,22.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEAF01").s().p("AAMA0IARgSQAWgXgBggQgBgWgPgKQgPgJgTAJQgpATgEA0IAAAwQgPgCgGgGQgGgGAAgPIAAhjQAHABAMgCQAJACAAAPQAXgQAKgDQARgIARAIQAXAIAOATQARAXgGAeQgFAfgZAYg");
	this.shape_8.setTransform(20.8154,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEAF01").s().p("AALAzQATgSAJgOQALgSAAgUQgBgYgQgKQgQgKgVALQgmAUgDAxIAAAxQgPgCgGgHQgHgHABgOIAAhiIAaAAIADAPQBLg3AjBOQAUAsgtAyg");
	this.shape_9.setTransform(139.3666,23.1085);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEAF01").s().p("AtDA7IAAgEIGlAAIgIggQgEgSgFgJQgEgLgKgPIgPgYQAVgGAJADQAIAEAJASQASAkAEAhQADANAFAEQAEAEAMAAISzgBIAAAFg");
	this.shape_10.setTransform(84.1,5.8971);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEAF01").s().p("AFnBkQgLgCgJgPQgIgNgHgFQgKgHgNAAQgOABgMgLQgEgDgCgGQgCgGABgFQAAgDAHgCQAGgCAFAAQAFAAAMAHQASALAVgBQARgBAWgKQAEgDAGgNIgJgGQgGgEgDABQgKABgOADIgYAGQgjAIgTgcQgMgSAEgQQAEgQAUgGQAPgEAYgCIAogDIADAGIAAgYIk6AAIgBA6QAAAhACAWQACAVARAHQARAGASgLQAcgQABgmIAAg4IAfAAIAACEIgogVIgMAHQgiAQgegTQgegSgBgkIAAhWIgqAAQgLApAgAbIgRACQgGgBgCgKQgGgbghABQgWABgTARQgTASgBAVQgBAJADAKQAEAKAGAFQAVAQAjgPIAsgOQgIAUgRALQgRAKgTgDQgugGgZgpQgQgYARgaQAZgnAlACIAgAFIAAgUIjSAAIAAAWIAXgDIAXgBQAWAAALAKQALAKABAWIABAsIAAAxIgegQQgmAUgigLQgegJgEgXQgDgVAYgRQArgeAuAVQgBgXgSgCQgRgDg5APIAGg2IhtAAIAACWQgTgGgDgCQgKgGADgQQghAdgWAAQgVAAgagbQgqgsApgpQAVgWAVAEQAVAEAmAhIAAg7ImlAAIABgGIaPAAIABAGIhVABIANA0IgZgEQgfABgJADQgFACgGAGIgKALQATALAEABQAHACAQgBQADAAAGAFIgEAEIgFADQgZABgLAEQgFACgFAGIgJAKIAJAKQAFAHAFABQAmALAmgdIAVgTQAEAbgFAIQgEAIgYAFQgxAMgtgWQgIgEgHgHQgHgIgBgGQAAgFAHgJIAMgNIAGgFQgRgQADgMQADgNAWgHQASgGASAAQAMAAAEgGQAEgGgEgNIlVAAIAAA0IgkgEQgVgCgOAAQgPAAgTAKQgDACgDAGIgEAKIAKAFQAGADADgBQAFAAAKgEQAJgDAFgBQAggEAOAEQAIACAIAHQAIAIACAGQABAIgEALQgEAJgGAHQgGAGgLAGIgSAJIAqAeQgQAIgLAAIgEAAgAj0gIQgfAFgMAXQgCADACAHQACAHAEACQASAJAegLQAegMALgTQgQgPgYAAIgMABgAnxgjQgTAPgBARQgBAJAEALQAFALAGAHQAIAJALgCQAKgCAKgIQAVgRAJgPQAEgGACgJQABgKgDgFQgEgGgIgGIgMgHIgCAAQgVAAgUAOg");
	this.shape_11.setTransform(84.075,23.541);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,168.2,33.6), null);


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
	mask.graphics.p("EhENAuhMAAAhdBMBA7AAAQioBBhnCTQhqCYAAC4QABDzCrCtQCtCrDyABQDzgBCsirQCsitAAjzQAAi4hqiYQhniTiohBMBA8AAAMAAABdBg");
	mask.setTransform(436.6,297.7);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A1C3F").s().p("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");
	this.shape.setTransform(438.025,297.5337);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(17.6,10.3,840.9,574.6), null);


(lib.Path_8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E6B372").s().p("AA7C4QhBgMg0gnQgrgigcgxQgRgegJgeIgMixIAtAGQgDAxAJAwQAQBRAwA8QApA1A8AiQA4AfA/AJQgVAEgQAAIgWAAQgYAAgagEg");
	this.shape.setTransform(16.825,18.8474);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,33.7,37.7), null);


(lib.Path_4_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#849C38").s().p("AgoAOIhKgEIgbABQgVABgFgFQgOgLASgFQAKgDASAAQAGgEAUADIAoAFQARACAZgBIApgCIBSgFQA2gCAYAPIAAAIIhUAHQgWACggAAQghAAgrgCg");
	this.shape_1.setTransform(17.3889,1.5932);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0.1,34.8,3.1), null);


(lib.Path_2_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiiAGIFFgmIgDAnIk7AZg");
	this.shape_1.setTransform(16.3,3.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,32.6,6.5), null);


(lib.Path_1_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6B372").s().p("AhgBAQgCgKAJgEQBeghBKhUQAFgHAIAGQAJAHgGAHQhCBYhwAlIgEAAQgHAAgCgHg");
	this.shape_1.setTransform(9.682,7.1212);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0_1, new cjs.Rectangle(0,0,19.4,14.3), null);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#849C38").s().p("AiFDBQgBgKAHgNQAHgPAPgUIAagiIBEhdQBIhiAvhmQAFgLAMAGQAMAFgEALQgQAwgfA0QgXAmgnA1IhnCOIgQAaQgMASgKADIgHABQgIAAgBgHg");
	this.shape_1.setTransform(13.4172,19.9958);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,26.9,40.1), null);


(lib.Path_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6B372").s().p("AAAAPQhDgCh3gSIAAAAQBQAOBpgGQAagBCegQQAEgBAAAFQABAEgEABQhIAUhYAAIgYAAg");
	this.shape_1.setTransform(18.7156,1.544);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,37.5,3.1), null);


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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#849C38").s().p("AgDE9QgFghgCguIgFhPQgGhjAFg3QAGg7gDhkQgDh5ACgoQAAgJAJAAQAJAAAAAJQATC0gMCHQgFA6AHBjQAHBxgBAsQAAAKgKABIgEAAQgHAAgBgIg");
	this.shape_1.setTransform(1.9422,32.5417);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,3.9,65.1), null);


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
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF6EE").s().p("A1OkXINon7Ic1QqItoH7g");
	this.shape_12.setTransform(136.075,78.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DED4CD").s().p("AublIIACmYIc1QpIgBGYg");
	this.shape_13.setTransform(92.4,124.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A69D98").s().p("AmzAyINnn6IgBGYItnH5g");
	this.shape_14.setTransform(228.35,152.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,272,198.1), null);


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
	mask.graphics.p("AqUkdICmhgISDKbIilBgg");
	mask.setTransform(66.075,38.175);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhbApICihdIAUAMIihBdg");
	this.shape.setTransform(123,70.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAvQgegBgWgNQgXgNAAgSQABgRAZgPQAbgQAgAAQAfAAAYAOQAYAOgBARQgBARgaAPQgbAQgfAAIgDAAgAADgfQgTACgRAKQgTALgCAMQgDAMAPAJQAOAIAWgBQAVgCATgLQAQgJAFgLQAFgNgRgKQgMgHgRAAIgLAAg");
	this.shape_1.setTransform(111.4265,67.1528);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAOBDIA/gkQAigUgYgNQgRgLgZAIIgMAEIhEAoIgTgMIBBgmQAOgHACgJQADgIgMgHQgSgKgaAHQgGACgGADIhCAnIgUgLIBRgvIAdgSIAQAKIgQALIABAAQAfgFAYANQALAHACAJQACAIgGAHIAAABQAPgCAMAAQASACAPAIQAOAIAAALQAAAPgaAPIhBAlg");
	this.shape_2.setTransform(94.5005,57.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAqIANgJIgBAAQgcADgXgNQgQgJABgLQAAgJANgIQApgYBBAmIABAAIADgBQAZgPgZgPQgPgJgWgCIAIgKQAZACAWANQAqAYgtAaIgqAYQgSALgFAFgAgsgEQgKAEABAHQAAAFAJAFQAVANAXgIQAFgBADgCIATgLIgDgCQgbgPgVAAQgLAAgJAFg");
	this.shape_3.setTransform(79.7255,49.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag8AtQgOgIABgKQAAgKAVgLIA7giIgQgKIAOgJIASAKIAagQIAZAJIgfASIAdARIgQAJIgdgRIg7AiQgVANAPAIQAHAEAGACIgOAKQgJgDgMgGg");
	this.shape_4.setTransform(72.5218,43.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag1AgQgZgPAAgRQABgQAZgPQAagPAegCQAfgCAYAOQAZAOgGASQgFANgUALIgKAFIhNgsQgTALABAMQABALARAJQARAKASAFIgKAKQgYgGgUgLgAAKgjQgPABgOAHIA6AhQAMgHAEgIQAEgLgQgIQgMgHgRAAIgEAAg");
	this.shape_5.setTransform(61.5335,38.7875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag5AgQgagOABgSQAAgQAagPQAagPAfgBQAhAAAbAQQASAKAFAJIgUAHQgEgHgPgJQgTgMgWACQgVABgSAKQgTALAAAMQgBANARAJQALAGAUAGIgMALQgSgEgUgMg");
	this.shape_6.setTransform(51.8995,32.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgaArIAMgJIAAgBQgcADgXgNQgQgJABgLQAAgJANgIQAUgMAcAFQAaADAgASIABAAIACgBQAagOgZgPQgRgKgVgCIAJgKQAaADAVAMQAqAZgtAZIgqAYQgPAJgIAHgAgtgEQgJAFAAAGQABAGAIAFQAVAMAYgHIAHgDIAUgMIgDgCQgcgPgUAAQgMAAgJAFg");
	this.shape_7.setTransform(39.263,26.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhTAbIBthAIASAKIgVANIABABQAPgFAPABQAPABAKAGIAFAEIgTAKIgGgEQgLgFgPgBQgOAAgNAGIgKAEIg7Aig");
	this.shape_8.setTransform(31.375,19.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgaArIANgJIgBgBQgcAEgXgOQgQgIABgMQAAgJANgIQApgXBBAlIABAAIADgBQAZgPgZgOQgQgJgVgDIAIgKQAaADAVAMQAqAZgtAZIgqAYQgPAJgIAIgAgsgEQgKAFABAGQAAAGAIAFQAVALAYgHIAIgCIATgLIgDgDQgbgPgVAAQgLAAgJAFg");
	this.shape_9.setTransform(20.7255,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhwAmICYhXQAWAJATALQAeARABAPQACAPgUAMQgVAMgYAAQgiABgegTQgKgGgFgEIg9AkgAgNAFQAEAEAKAGQAmAXAigTQAegSglgUQgOgIgGgCg");
	this.shape_10.setTransform(11.5052,5.575);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.3,0.6,131.89999999999998,75.60000000000001), null);


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
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A9fAWId+xbIdBQwI9/Rbg");
	mask_1.setTransform(188.775,109.375);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,0,0), null);


(lib.Path_14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FED191").s().p("AgjA5IgXgOQgQgIgIgJQgLgMgCgPQgBgIAHgMQAHgMgBgGQADgLARgFQAJgDAUgCQAugCARALQAIAFAJANQAFAFASAJQAOAHAFAEIAHAIIAAAKQgCAQgJAJQgIAIgRAGQgJADgOgBQgQgBgHABQgEAAgHAFQgHAEgEABIgHAAQgJAAgKgEg");
	this.shape.setTransform(9.5521,6.1366);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,19.1,12.3), null);


(lib.Path_13_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FED191").s().p("AgoAjQgjgEAHgaQAFgWASAAQAFgGAFgCQAHgCAOABQAIABAegHQAYgFAOAIQALAGgDAHQgCAEgMAIQgIAEgKAAIgSACQgLADgQASQgNAMgPAAIgFAAg");
	this.shape.setTransform(7.0407,3.5359);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_0, new cjs.Rectangle(0,0.1,14.1,7), null);


(lib.Path_13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B26E22").s().p("AC/BJQgZgBgpgOQgPgGgOACQgNABgRAIQgJAEgIABIgSgBIgrgFQgagBgSADIgPAEQgKABgGgDIgNgIQgIgHgGgCQgYgIglgGIg9gGIgbgCQgSgDgCgJQgBgHAGgDIALgGQADgDADgGIAEgIQAKgOAQABQAHABANAFIATAIQAWAGAgAAQASgBAjgEQA/gDAYgkQAIgLADgCQAGgFALgBQAJABAMAFQALAFAIAGQAFADAIAOQAIALAKADQAPAFAYgBIAngBIA9ADQAGAAAPgBQANgBAHADIgCAHQABAFAFALQgOACglAAQgfgBgTAFQgaAIgCAKQgDAKAVAQQAHAGAKAGIAQAJIgQgCg");
	this.shape.setTransform(28.4433,7.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,56.9,14.9), null);


(lib.Path_12_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FED191").s().p("ABCBBQgTgUgHgGIgPgNQgJgIgIgCQgHgCgOgBIgWgCQgNgDgMgKIgUgWQgfgdAFgOIABgDQAHgKAcAJQAgAIATAAQAVAAAJACQAQACAMAJQAMAIAKAWQALAWAJAJQASAPAGAPQAKAWgUALQgDACgEAAQgKAAgMgLg");
	this.shape.setTransform(10.7964,7.5736);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_0, new cjs.Rectangle(0,0,21.6,15.2), null);


(lib.Path_12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#401701").s().p("ADLCFIgbgGIhLgPQghgHgogUQgYgMgZAGQgNACgIAAQgKgBgJgIQgHgFgLgMQgMgMgGgFIgVgRQgNgJgKgCIgRgCQgIgCgHgDIgNgGQgIgDgGADQgEACgDAGQgCAHgFABQgDgLAAgUQAAgYgCgJQgCgRACghQAAgHgDgLIgEgPQgIgDAKACQAKABAEACQAIAEAJAHIAQANIAVARIAUARQALAKADAHQACADAAAFQAAAEAFAEQAHAGARAHQASAGAGAFQARAOARAHQAJAEANgBQAPgBAFABQAFABADAFIAGAIQAIAHAPALIAXASIAXASQAbARApARQAXAKAvASQgLAAgQgEg");
	this.shape.setTransform(22.9722,13.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,46,27.4), null);


(lib.Path_11_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FED191").s().p("AgFAsQgdgDgagYQgIgIgJgQIgHgJQgGgFgBgEQgDgUAhABQASAAAbAFQAKABASgCQASgCAKABQATACAPAHQAVAJgEAQQgCAJgMAOQgKANgKAHQgMAIgSABIgFAAIgbgBg");
	this.shape.setTransform(9.159,4.5277);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_0, new cjs.Rectangle(0,0,18.4,9.1), null);


(lib.Path_11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#401701").s().p("Ai1AzIgBgmQAAgOACgiQADggAAgRIgCABIAAgCQAMgBAOANIAVAWQAhAhA7ADQAoABA8gOQAMgDAagLQAYgHAOAKQASAPAjAfQgfgKgRAAQg3gDgwAKQg3ANglAeQgOALgSAEQgJACgcACQgUACgPAFQgFABgKAGQgKAFgFACQAHgMAAgYg");
	this.shape.setTransform(18.925,8.649);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,37.9,17.3), null);


(lib.Path_10_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FED191").s().p("Ag0BlQgZgIgLgTQgMgVAGgdQAGgaARgUIAIgJQASgUAWgNQAMgHAagNQAfgRAPgCQAUgBALANQAMAOgRAMIgfAVIgMAFQgJADgCACQgCABgBAGIgDAHQgJAVgMAKIgOAOQgFAGAGAMQACAEALAPQAJALABAJQAAAQgWAEQgLACgKAAQgNAAgMgDg");
	this.shape.setTransform(9.7341,10.3927);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_0, new cjs.Rectangle(0,0,19.5,20.8), null);


(lib.Path_10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#401701").s().p("AApBjIgNgFQgMgHgFACQgFAFgIADQgKAFgegIIgmgOIgmgNQgngKgWgPQgfgTgJgfQgGgUgCghQgFgaACgMQAGAAAIALQAKAMgFgCQAGAFAHAKIALARQAPAVAXARQAXAQAeAEQASADAngCIBFgDQAKABAUAEQAUAEALAAQANAAAKgFIAJgHQAHgFADAAQAHgBABAJQABAOABACQAGAOAVAKQALAHAXAJQANAGAEADQAKAHABAJIghgOQgUgIgPgBQgjgCgTAJQgGACgLAJQgLAIgHACIgUADIgKABIgEgBg");
	this.shape.setTransform(23.1442,9.9689);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,46.3,20), null);


(lib.Path_9_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FED191").s().p("AgbAvQghgsgCAAIgZgHQgQgFgFgKQgEgKAHgJQAHgIAKgDQAcgKASgCQAdgDAUAKQAHAEANALQALAKAKADIAkAIQAXAGACANQADAQgQAHQgIACgUACQgTABgKAEQgLAFgMAOQgKALgJAAQgMAAgMgQg");
	this.shape.setTransform(11.001,6.2746);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_0, new cjs.Rectangle(0,0,22,12.6), null);


(lib.Path_9_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#401701").s().p("AhyBBQADgFAIgGIAOgKIAagVQAFgKARgDIAYgDQAPgCAcgIQAXgGAYgYQAGgFAMgQQANgMALADQAAAFgEAIIgHANQgLAXgFASIgCAOQgCAFgGADQgGAEgRAAQgTAAgFABIgfAIQgGADgKAIQgKAIgFACQgHACgNgBIgUgBIgVADIgTACIgDAAg");
	this.shape.setTransform(11.525,6.4834);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_1, new cjs.Rectangle(0,0,23.1,13), null);


(lib.Path_8_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FED191").s().p("AhDBjQgMgMASgRQATgSAngKQAVgFAKgMQAKgMABgVQABgRgFgPQgEgLgJgSQgIgOAHgNQAGgOARADQAFgBADAEQADAFADAPIAIAcQAEARABALQACAUAAAnQABAVgHAMQgHANgTAFIgTADQgLABgHADIgRALQgKAHgJABIgHAAQgSAAgKgJg");
	this.shape.setTransform(7.2706,10.8798);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_0, new cjs.Rectangle(0,0.1,14.6,21.7), null);


(lib.Path_8_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#401701").s().p("AAMAjIhAgzQgqgigcALIgCgBQAzgLAnAIQAeAGAMAFIAaANQARAHALADQAMACAjAAQAbAFgSAZQgPAXgjABIgEAAQgbAAgZgMg");
	this.shape_1.setTransform(12.714,4.7723);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_1, new cjs.Rectangle(0.2,0.1,25.1,9.4), null);


(lib.Path_7_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#401701").s().p("ADGBUIgigMIgggJQgVgFgKgHQgUgMgaACQgdAGgQAAQgJAAgKADQgNAEgGAAQgTACgegJQgjgMgXgDQgZgDgIgDQgRgHgEgRIgEgVQgCgJgKgJIgPgKQgIgGgDgHQACgigBAAQAGgBAIALQAKAMgFgCQAGAFAHALIALARQAPAUAXASQAXAQAeAEQASACAngCIBFgCQAKAAAUAEQAUAFALAAQANAAAKgFIAJgHQAHgFADgBQAHAAABAIQABAPABABQAGAOAVALQALAGAXAJQANAGAEAEQAKAHABAIIgigLg");
	this.shape.setTransform(23.175,9.5239);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_0, new cjs.Rectangle(0,0,46.4,19.1), null);


(lib.Path_7_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#401701").s().p("Ag4BRIgrgHQhAgLgigXIgEgBQgIgEABgJQAAgHAKgEIAPgGQAKgFAJgJIAQgTQAOgPAagSQATgOAggHQAhgGAVAFQAkAJAagBQALgBAWgGQAVgHANABQAMAAARAGIAcAKQAJACARACIgaAEQgRABgJACIgmAIQgXAFgPAHQgmAUgcAWIgVAQQgLAJgFAMQgEALAEALIAKAVIgEAAQgQAAgYgEg");
	this.shape_1.setTransform(20.9194,8.5257);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_1, new cjs.Rectangle(0,0,41.9,17.1), null);


(lib.Path_6_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#401701").s().p("AihAzIgCgmQAAgOADgiQACggAAgRIgBABIgBgCQAMgBAOANIAVAWQAiAhA6ADQApABA7gOIAdgLQARgHAMABQAQABAJAJQAMAVgGAAIg0gBQgdABgXAIIgoAOQgZAIgQAAQgIABgLgDIgTgFIgYgEQgOgDgIgFQgIgKgGgFQgMgKgHAIQgCACABANIABARQgCAKABAFIAGAQQAHARgOAMQgKAIgXAHQAIgMAAgYg");
	this.shape.setTransform(16.9779,8.649);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_0, new cjs.Rectangle(0,0,34,17.3), null);


(lib.Path_6_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEBE63").s().p("AgsBkIgbgWQgagPgMgJQgVgQgEgVIgCgPQgBgFgFgIQgMgWABgKQABgMAGgPQAIgRAJgEQAEgBAMgGQAOgHAMgBQAYgCAdADIAzAIIAzAGQAfAFAQAMQAVAOALAXQANAagNASQgfAygnAPQgJAEgXADQgVADgKAFQgEACgJAIQgGAHgGACQgFACgFAAQgLAAgMgIg");
	this.shape_1.setTransform(15.3712,10.7869);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,30.8,21.6), null);


(lib.Path_5_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#401701").s().p("AhMBMIgZgDQgYgIgGgIQgGgIABgFQABgFAHgFIANgIQAFgEACgJIAEgPQADgIAEgEQAFgEAJgDIAfgMQASgIAOgDIAngMQAYgHAQgDQAJgBAggIQAegGAHALQACACgXAEIgnAIQgXAFgOAHQgnAUgaAXIgWAPQgMAJgEAMQgFALAEALIAKAVIgWgCg");
	this.shape.setTransform(13.7277,7.8191);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_0, new cjs.Rectangle(0,0,27.5,15.7), null);


(lib.Path_5_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEBE63").s().p("AAGBVQgcgGgSgUQgQgXgJgLQgRgUgTAEQgDABgZASQgTAOgFgJQgGgKAFgXQAHgYgEgKIgHgRQgEgKADgIQACgIAGgBIAPgBQAkAAARgCQA5gIAuAEQAQACAhAAQAdACASAGQAgAMAKAeQALAggWAaQgKANgRALIgeARIgOAJQgIAFgIACQgQAFgQAAQgLAAgLgCg");
	this.shape_1.setTransform(16.133,8.752);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0.1,32.3,17.4), null);


(lib.Path_4_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#401701").s().p("ADMCFIgbgGIhMgPQgggHgpgUQgYgMgZAGQgNACgHAAQgKgBgKgIQgGgFgMgMQgLgMgHgFIgUgRQgNgJgLgCIgQgCQgJgCgHgDIgMgGQgJgDgGADQgDACgDAGQgDAHgFABQgCgLgBgUQAAgYgBgJQgDgRACghQABgHgEgLIgDgPQgIgDAKACQAKABAEACQAsAXgMAgIgHAQQgEAKADAJQAFARAVAKQARAIAVADQAKABAHAFIAMANQAGAGAPAKQAOAKAGAFQAKAKAZAEIAnAFQAHABARgBQAQgCAIACQAJACAMAHIAUANQAYANAmAPIAcANQASAIAKABQgLAAgPgEg");
	this.shape.setTransform(22.9347,13.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0,46,27.4), null);


(lib.Path_4_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8BC6E").s().p("ACKDDQgygQgygCQgVAAgLgCQgSgDgGgOQgGgRAIgPQAHgRAbgPQAzgaARgFIA9gOQAlgIAWgKQAWgKgBgcQgCgagRgRIgQgWQgMgMgUgDQgSgDgSAFQgUAGg1ALQgvAJgZAJIglAOQgUAGgTAAQgTABgXAJIgoATIgnAWQgXANgTACQgXACgSgIQgUgIgJgUQgUgrAPgWQAKgPATgBQANAAAWAGIAjAKQAUADARgCQAngGgTgaQgEgGgIgGIgNgLQgHgGgBgIIAAgRQABgcADgKQAIgTAVADQAlAEALAZQAFAMAEAXQAEANAQAFQAOAEANgIQAHgEAJgNQAJgOAFgEQATgOAGgDQAEgCAEABIAHABIAaABQAQABAMACQAXAFBCAGIA+ADQAmADAWAJQAPAGAXAWIAWAWQAKANABAOQAAAbAEAlIAGAbQADAQgCAMQgGAdgjAPQgZALglADQhOAEANAfQABAEAXATQAQAPgHALQgHALgTAAQgRAAgagIg");
	this.shape_2.setTransform(34.2436,20.3062);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(0,0,68.5,40.7), null);


(lib.Path_3_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABrAhQgUgBgfgHIgzgLIgOgBQgIAAgLgCQgZAAgMgBQgVgBgNgHIgEgCQgHgFgFgGQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQAAABABAAQgBgJAGgFQAHgGANABIAUADIA1AMIAWAEQAOADAHAHIAIABQAUACAZAEIARAEQAKAEAFAGQAEAEgCAGQgDAFgFAAIgBAAg");
	this.shape_1.setTransform(11.6333,3.3248);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,23.3,6.7), null);


(lib.Path_2_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgqBiQgFgKALgHQAJgGAKgBIARAAQAIgBADgIQACgGABgKIABgQIAGgPQADgKABgGQAAgFgEgKIgFgPQgDgSABgQIAAgRQgCgKgHgDQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAQgGAHASQADAHACAYQABATAHAUQAGARgFAOIgGARIgEATQgDATgIAKQgKALgRgBIgRgBQgGABgFAIQAAAAgBABQAAAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape.setTransform(4.4206,10.0106);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,8.9,20.1), null);


(lib.Path_2_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEBE63").s().p("Ah3BwQgXgDgLgNQgHgJgHgTQgGgVgGgIQgOgWgdgVQgJgHgcgEQgZgEgKgLQgHgJABgJQACgLAMACQACgDAKgCQAOgDAHgEIAYgPQAigSAfgIQARgEAZAHQAWAHAQALIAMAMQAIAJAFADQAVALAZgBQAKgBAKgHQAOgJAFgBIAWgJQANgFAJgBQAOgDAWAFIAjAKQAOAEAbAOQAJAEANAKQANALAHADIAWAKQALAFAIAIIASARQALALAEAJQAIAUgKAOQgJAPgVgCQghgCgRgNIgRgOQgKgJgIgEQgMgHghgLQgPgGgHADQgEACgIAHQgJAIgEACQgQAKgQgDQgGgCgJgFIgQgHIgOgGQgJgDgEAAQgGABgMAGIgSAJQgZALgHAGQgJAIgCAQQgCATgEAHQgIAMgTAAIgGAAg");
	this.shape_2.setTransform(30.1454,11.1707);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,60.3,22.4), null);


(lib.Path_1_0_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPATIgEAAQgHgBgIgEIgIgIQgMgCgEgHQgDgGACgFQACgFAGgBQAIgDAJAHIADAAQAKgBAGADQAFACADAFIABACQADgGAHgBIAfgCQAQgBAHAMQAGAJgKAGQgKAGgGgJIgBAAIgYACQgGAJgIACIgEAAQgFAAgFgDg");
	this.shape_2.setTransform(6.0681,2.2376);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0_2, new cjs.Rectangle(0,0.1,12.1,4.4), null);


(lib.Path_1_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8BC6E").s().p("AgpAtQgRAAgLgEQgjgLAWgnQAHgOALgKQAQgOALAGQAFgEAOAAIAVABQAmgCAWAKQATAJAHAQQAIASgSANQgIAGgNABIgXABQgKABgPAGIgXAIQgJADgOAAIgFgBg");
	this.shape_2.setTransform(9.1604,4.5508);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,18.3,9.1), null);


(lib.Path_0_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAUIgTgBIgJgBQgFAAgEgDQgJgFgDgJIAAgBQgEgEABgHQACgEADgCQAEgDADAAIAPADIAMAEIAFADQAIAAAFAFQACACABADIAAAAQAGAFgDAIQgEAIgGAAIgBgBg");
	this.shape_2.setTransform(3.2429,2.052);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_2, new cjs.Rectangle(0,0,6.5,4.1), null);


(lib.Path_15 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8BC6E").s().p("ADgDVQgVgFgOgJQgHgDgHgLQgJgLgGgEQgPgHgGgFQgLgMgKgEQg4gbgagPIgbgPQgHgDgIgKQgKgLgFgEIgRgKQgJgFgFgIIgTghQgHgKABgTQACgWgDgJQgEgNgMgOQgMgPgLgDQgOgEgVgCIgkgFQghgGgRgIQgcgNgFgYQgFgWASgNQAOgKAXgDQANgFAYAGQAUAEAWAKQAaAMANAJQASAOAIAWIADAMQADAIADAEQAEAFALAJQAKAJAEAGIASAhQAKAUAOAGQAOAGAaADQAhADAIACIA3ANQAhAKAJAVIAFATQADAMADAGQAEAIAIAHIAOANQAlAiAKAeQAHARABAPQABAWgMAEQgGACgHAAQgLAAgOgEg");
	this.shape_2.setTransform(27.3088,21.7024);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,54.6,43.4), null);


(lib.Group_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#6A3101").s().p("AC3AxQgMgHgHgDQgKgDgJgBIgvgEQgygEgtgKQhfgShggnQgEgCACgEQABgEAEABQBeAjBqARQAyAIA4AEIAnAEQAZAEAGAPQACAEgDAFQgCADgDAAIgCgBg");
	this.shape.setTransform(111.2946,66.4603);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6A3101").s().p("AAhAZIg0gMIgDADIgHADQgHABgMgFIgEgDQgEADgFgDQgDgCgBgGQgBgKAJgDQACgGAEgEQAGgEAGgBQAGgBAFADQAHAFABAJQARADAMAEIAdAHQADAAAEADIAHADIAMAEQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABQgDACgHgBIgKAAIgEABIgDABIgEgBg");
	this.shape_1.setTransform(122.9997,81.1389);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6A3101").s().p("AjzE1QgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAgBAAAAQABAAAAAAQABgBAAAAQAFABAHgKIAJgOIAMgTQAKgQANgYQARgdAGgNQAKgZABgWIABhVQgBgVACgKQADgSAPgEIAPgCQAIgCAEgHQAFgKAJgcIAGgRQADgKAEgGQADgFAIgHIAMgLIA7gzQAigcAdgSQAVgNAFgQIAEgNQADgIAEgFQAPgRAdAGIAAgCIgBgBIgBgCQgDgCgFgBIgYgHIgCgBQgNABgQAEQgDABgDgDQgDgCABgEQAFgMARgCIAeAAQArACAaAMQAcAOAOAZQAOAagGAeQgLA1g9AfQgZAMgnAJIhDAOQgkAJgXANQgLAFgOALIgXASIAAAAQAJgoBGgXQAigLBOgPQBCgTAagqQARgdgHgdQgHgdgdgPQgTgLgagDQAFACADAEQAEAGgCAHQAAADgEAAIgBAAIgTADQgLABgGAFQgHAFgDAMQgEAQgDAEQgHAMgSALIgeATQgXARgpAnIghAfQgOANgGASQgFAUgIAUQgGAQgGAGQgFAEgHACIgNACQgLACAAALIAAAUIgCBYQAAAjgXAmQgUAkgYAiIgXAeQgHAHgHAAIgDAAg");
	this.shape_2.setTransform(109.115,116.5635);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6A3101").s().p("AA6BNQgIgOgKgIQgLgIgQgBIgXgCQgNgDgIgHQgIgIgCgNQgCgGgBgRQAAgNgGgSIgEgSQgDgKgEgHQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQADAMAMAUQAHAPACAQIADAZQAEAPAKAGQAJAEAQABQATABAHADQAXAJAHAZQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgBAAIgCgBg");
	this.shape_3.setTransform(6.175,80.4729);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6A3101").s().p("AglA6QgbgqgPgPQgzgzhJgTQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQA7ALAwAkQAZAIANABIAVACQAEgCAQgBQAOAAAEgGIAKgNQAFgHAGgDIAOgFQAIgDABgJQAAgSAPgLQAAABAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQgJAJACAMQACALgEAHQgDAGgJADIgPAGQgEACgHAJQgGAJgFADIgEACQAOADApALQAYAHAUACQAYADAJAEIAjAVQAcASAJAHQABABAAAAQAAABABAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgpgYIgSgLQgLgGgJgDQgIgDgMgBIgUgCQgNgDgagIQgkgJgtgFQgcgEgMgDQAYAUARAYQASAZAFAFQAOAPASADQAGABgBAGQgBAHgGAAIgBAAQgbAAgZgkg");
	this.shape_4.setTransform(44.1481,12.5753);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6A3101").s().p("AgUAgQgOgIgWgWQgYgWgMgIIgSgKQgGgDgHABIgNADQgPACgMgMQgBgBAAAAQgBgBAAAAQAAgBABAAQAAgBABgBQACgCADACQAGAFAHAAQAGAAAIgDQAJgDAFABQANABAWAPQALAHAVAUQAUARANAIQAkAVAuAGQAVACAcgDIAwgIQADAAABAEQAAAEgDABQgiALhDAAQguAAgkgWg");
	this.shape_5.setTransform(78.9911,61.5056);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6A3101").s().p("AiXAjQgbgEgLgPIgHgLQgEgGgEgDQgGgDgYAAQgEAAgBgFQAAgEAEgBQAcgGAPALQADADADAFIAGAIQAIAMASAEQALADARAAIAdAAIBHgCQAcgCAogJIBEgRQAVgFApgQQAlgLAbAEQAFABgBAFQgBAGgFgBQgdgCglALQgrAPgVAGIhFASQgkAJgZACQgQACgyAAIgdAAQgSAAgMgCg");
	this.shape_6.setTransform(92.3995,80.9734);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6A3101").s().p("AhqAXQgLgFgSgSQgKgKgJgFIgUgJQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAQARgBATARQAZAVAGADQARAIAbgFQAPgDAdgIQAMgCAggKQAbgIASgCQA0gHAtAEQAHABAAAGQAAAGgHAAIg0ACQgVABgcAGQgNADghALQgcAKgSADQgTADgRAAQgaAAgUgHg");
	this.shape_7.setTransform(90.7188,75.8923);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6A3101").s().p("ACECdIgPgNQgJgGgJgDIgmgMIghgSQgHgDgLgCIgSgEQgZgGgjgdIgigcQgTgQgMgPQgBAAAAgBQAAAAgBgBQAAAAABAAQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQARAJAUAQIAiAdQAWASANAGQAIAEALADIATAFQAOADAUALIASAJIgCgsQAAgbgFgRQgGgVgNgLQgEgEgKgFQgKgFgEgFQgFgGgFgNIgHgTQgGgMgPgWQgLgQgSgSIgNgLQgIgGgCgGQAHAAAIAHIANALQANAMASATQALAOALAUIAJASIAFALQADAHADADQAFAFAOAHQAIAFAFAGQAKANAFAQQAFARABAeQACAkACAMIgBAEIAKAEQArAPAEAUIgBADIgBAAIgCgBg");
	this.shape_8.setTransform(113.7929,50.8833);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6A3101").s().p("ADADZQgHgUgJgJQgGgFgJgGIgQgJQgMgHgHgJQgKgNgJgDIgSgCIgUgBQgNgCgDgIIAAgKQAAgJgFgHQgFgIgPgNQgYgVgDgRQgBgGABgJIAAgQQgBgLgGgNIgYgqQgNgZADgWIAAgBIgEADQgIAFgLAAQgIAAgQgEQgQgEgJABQgJABghAPQgaALgSgHQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQARAGAcgNQAfgPANAAQAHAAAQADQAPAEAJgBQAGgBAGgDIAKgGIABgBQAMgdAEgOQAGgSgBgLQAAgJgIgSQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQATAJgEAjQgBAKgEAMQABAAAAABQAAAAABABQAAABAAAAQAAABAAAAQgHASASASIAgAaQAJALAFANQACAIAIAJIAMAPQALARAFARIAFAVQADAMAEAHQAKAPASARIAeAcIAAABIgBABQghgLgegrQgFgIgDgLIgEgVQgFgZgSgUIgMgOIgHgRQgDgKgLgIIgUgOQgUgQgEgRIgEAJIACABQABAAAAABQABAAAAAAQAAABAAAAQABABgBAAQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgDABIgBAEQgEAXAQAdIAZAwQACAIABAWQAAATAHAKQAFAHAPANQAOANAFAJQAFAHABAQQAAAGAHACIANACQAZAGATARQAMALAPAJIAbAOQAJAGAGAJQAGALgDAJQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBgBg");
	this.shape_9.setTransform(85.2581,22.0083);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6A3101").s().p("Ag4AHQgegKgHgNQAAgBABABQAEABAQAIQAKAGAMACQAbAJAVgBIALgDIALgEQAEgBAIAAQAIABAEgBQAHgBAMgHQALgEAOgDQAEAAACAEQABAFgFAAQgRADgNAFIgIAEQgFADgEAAIgIAAIgIAAIgNAEQgJAEgLAAQgYAAgagLg");
	this.shape_10.setTransform(65.0341,108.0417);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6A3101").s().p("AAoAwIgDgOQgCgHgFgFIgOgJQgGgEgGgGIgYgaQgQgRgKgEQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQANADAQARIAbAdQAGAFALAGQAHAEAFAGQALAQgFANQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_11.setTransform(52.5515,113.5625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6A3101").s().p("AiVAbIAAgBQAKgNAVgHQAHgCAMAAIAUAAQAJgBALgEIATgJQANgGAdgGQAvgJAiAIQAxALASAWIAAABQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgSgKQgMgGgHgCQgPgHgVgDQgcgEgzAKQgeAHgLAFQgUAKgIABQgHABgMgBIgUAAQgPABgVANIgBABIgBgBg");
	this.shape_12.setTransform(29.4375,110.2171);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6A3101").s().p("AAkA9QgNgGgdgTIgIgIIgHgCQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAABAAQgLgPgHgGQgSgTgYgNQgYgNgngDQgdgDgMgOQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAKALATACIAhACQAUADAYANQAVALAQAQQAGAGAJAKIAOASIAFABQAMADADgBQAEgBAIgFIAMgGIAcgJIAdgFQADgBAAADQABAEgDABIgQAEIgPAEQgUAFgKAFIgLAGQgHAEgGAAIgFgBQAKAHAYAOQAcAQAdgGQAGgBAmgNQAbgJATABQAEABAAADQAAAEgEAAQgTgCgfALQgkAMgOABIgFAAQgTAAgXgLg");
	this.shape_13.setTransform(30.0679,120.283);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6A3101").s().p("AirDNQgEgvgDgRIgHgbQgFgRgBgKQgEgVANgQIAPgSQAJgKACgJQAHgWAQgXQAHgLAYgeIAlguQAKgNAFgJQAGgMgBgNQgIgHgFgJIgJgOQgEgGADgEIACAAIABABQAAADAEADIAFAGIAHAMQAHALARADIAOADQAGgCAQAEIAhADQATAAANgDQAJgCASgHQAJgCASgCQAFgBAGgEIAJgIQARgNAXAJQAEACgBAFQgCAEgEAAIgNgBQgIAAgGAEIgQANQgGADgPACQgKABgTAGQgaAIgcgEQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgpgJIgegHQAEAQgQAXQgIANgRAUIgkAxQgXAcgGANIAHgCQANgFASgDQARgCASgJQAUgKAIgBIAHgBQAEAAAAgCIgDgIIAAgIQAAgKANgSIAYgjIAKgQQAHgKAGgEQADgBACACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQgBAFgJAMIgkA0QgIAMgBAGQgBAGAFAKQALgEAJgHQAKgHAIgIQAFgGAAgEQAAgGACgEIAFgIQADgEAAgFIABgTQADgRAYgEQAFgBACAFQACAFgGABQgOADgDAFQgDADAAAGIAAAKQAAALgFAHIgFAIIgCALQgCAGgLAJQgLAKgIAEQgJAFgMADIgBAAQgEAFgGABQgUAEgMAHQgVAKgIAAQgYADgMAEIgRAHIgDABIgEAOQgFAJgIAIQgNAMgCAEQgHALAEAVIAGAcQADAQABALQADAfgGAaQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_14.setTransform(80.6234,129.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6A3101").s().p("AjGCtQgLgCgDgNQgDgLAEgLQACgFAGgIIgRgDIglgKQgTgFgJgMIgHgQQgEgIABgFQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAIABABQgBAFAIALQAEAFAGAFQAFAFAIACIAOAEIAwANIAEACQAVgOAJgIQAUgTAagUIgDgDQgDgKgMgRIgBAAIgIgFIgHgFIgRgKQgIgDgMgCIgUgCQgOgBgVgLQgQgIACgMIACgBQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAMAeAKQAHADALABIASABQAQACAOAGIAMAIIgIgMQgHgOgDgVIgGglQgGgrASgOQAHgFASgCQAZgDASADQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIglACQgOABgEABQgKADgEAHQgGAOACAUIAGAhQAFAXADAIQAFAQAIALIAPAVQAIANACALIAAABIA0gmQAZgRAigRIA9gfIBAgfQASgJAHgKIANgXQAOgTAZgMQASgJAfgHQADgBABADQABAEgDABQgmAPgPAMQgOALgGAHIgOAYIgDAFQAJgBAIABQAMACAeANQAMAGAgAJQAWAHAKAKQABABAAAAQABABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBgBQAAAAgBgBQgLgLgWgGIglgKQgZgMgOgDQgNgEgRAEQgJAJgNAGIg7AdIg3AbQgfAPgWAOQg6AngnAhQghAcgJAHQgcATANAWQACADgCACQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_15.setTransform(38.2014,39.7681);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6A3101").s().p("AB5CkQgWgDgngLQgfgKgPgLQgJgGgGgLIgNgVIgIgMIgIgLQgEgHgCgQQgFgggJgZQgHgSgHgMQgKgSgEgJQgEgJACgSQACgTgCgIIAAgCQgFgIgLgJQAAABgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgRAAgIACQgMADgLAHQgXAOgFAcQgCAJACARQABARgBAIIgEAOQgCAIAAAGQABANgBAGQgGAjguAhQgTAOgXAEQgKABgOgBQAWABAYgNQAWgMARgSQAZgbACgUQgBgQABgIIAFgVQABgIgBgSQgCgRACgJQAEgUAMgOQANgPATgHQARgGANACQgNgKgOgGIAAgBQAQAFAlAVIAyAdQAfAVAWADIANADIASgBQAMgCARAAQAoAAAWgIQAVgIAegWQAfgXAPgHQAfgPAVANQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQgBABAAABQAAAAgBABQAAAAgBAAQgBAAAAAAQgfgBggAVIgsAhIgTALIADAAQALABAIAGQAMAIANAVQAOAXAPAGIAUAHQAMAEAEAIQAAAAAAAAQABABAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQgFAAgPgEQgNgEgGgDQgSgHgKgRQgLgXgJgKQgIgJgKgEIgMgDQgOAGgMADQgMADgTAAIgfABQgIABgWAFQgSAFgMgCQgbgDgZgTQgPgKgVgbQABAGgBATQgBAQAFAJIAMAXQAJAPADAIQAKAWAFAXIAFAcQACAJAOARQAEAEAIARQAHANAIAGQAIAHAOAGIAZAJQAlALAVACQAMACARgBIAegCQADAAABAEQAAAEgDABQgRAHgVAAQgLAAgMgCg");
	this.shape_16.setTransform(39.9917,87.4583);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,133.8,150.1), null);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B26E22").s().p("AF/ENIgXgNQg0gZgRgHQgSgGgagDQgegCgPgCQgTgDgRgOIgcgeQgTgUgWgLIgQgIQgJgEgHgBQgIgCgNAAIgVAAIhVgIQgdgCgcgJQgagGgMgFQgKgDgRgJQgRgJgJgDQgagJgkgIIg9gMQgPgDgpgSIgNgIQgHgGADgGQADgFALgGQAIgFAIgCQALgDAZgCQAPgCAdgHIAZgCQAPAAAJgDQAMgFAMgQIASgcQAMgSAIgaQAFgQAHgeQALg1gVgiQADgBgDgEQAAgDAPAGQAJAEANALQAQAMAGADIAqAYQAZAPAOAMQAMALASANIAfAVQAKAHAQARQADADAIAEIAMAGIATAPIATAQQAjAZAqAVQAPAIAXAFIAoAIQAUAFAoARQAnASAWAFIARADIgaABQgPAAgMAHQAEAIAPAIIAXANQARAOgBAGQgBAEgMAQQgIALgDAKQgCAJgBARQgBAYgGAlQAAAcAfATIAIAGIgBAAIgCAAQgIAAgOgHg");
	this.shape_15.setTransform(104.9776,32.5582);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B26E22").s().p("AAeCHQgLgGgXgDQhqgPgtgMQgagHgngSQgugVgSgGQgcgJgSgTQgVgVABgbQALASAPALQASAPALgGQAFgCAEgHQADgIAGgCIAHAAQAFABABgBQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBIABgDQAOgKAPADQAMABARALQAFADAJAIQAJAHAFADQAJAFARAEQAoALATgHQATgIAbgZQANgNAggmQADgDAEgKQAEgJADgCQADgDATAAQANgDAZgNIAUgKQAMgGAIgCQAVgHAigEQAKgBAQgGQATgIAGgBQAfgIAQABQAaABAQARQAHAHAEANQAFAQADAGIALASQAGALADAIQAGAYgfAMIgyANQgVAGgtAAQgsABgWAGQgnAMgjAhQgaAZgJAcQgFAPAIAOIAJAMQAHAHgBAHIAAABQgLgQgLgGg");
	this.shape_16.setTransform(37.1558,15.7234);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B26E22").s().p("AhCDNIglgTQgSgKgiADQgmADgPgEQgOgFg3gfQgNgIghgIQgfgHgNgJQgPgJgTgRQgSgRgJgNIgIgQQgEgKgFgFQgDgEgIgDQgJgEgDgCQgNgKgKgVQAWgOAWgCQADgPgLgRIgSgeQgUgyAEgVQADgQAYgWIABAEIgDACQAIBJAMAjQAFAOANASIAXAfIAYAlQAQAXAOALQAdAXA0AIQAgAFA3AAIAjADQAWACANgCQALgCAKgGIATgLQARgKAEAHQADAFAIAUQAQAYAoALQBMAUA/gkQAngWAkgnQApgsAGgnQACgQAAgZIgBgoQAAgyAFgCQAJgEAHALIAJAQQAeAgA5AJIBfAQQgIAHgeAPQgZAMgOANQgjAhgVAnQgOAagDAeQgEAfAJAaQgRgBgKAHIgWARQgSAMghAJQgcAHgaABQghABg/gNQg/gNgeAAQgFAMAIAVQAFAJgiADIgPABQgQAAgMgEg");
	this.shape_17.setTransform(49.15,63.8868);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,145.8,84.8), null);


(lib.Path_11_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51321E").s().p("AlyCMQhogrgfhDQgphWCjgzQCbgxFkgFQCygDCTAIIAKACQALAEAJAIQAfAaAAA8QACBTgTAvQgYA6g5ALQhTAOkxAFIhaABQj9AAg3gXg");
	this.shape_1.setTransform(51.3775,16.2498);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,0,102.8,32.5), null);


(lib.Path_6_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7684E").s().p("AirBsQAbgOgIgdQgGgXgXgQQgWgPgCgUQgCgeAbgMQAagMALAUQADAGgJAfQgFAPAmgKQAkgKgQgkIgIgUQgBgHAOADQAeAHADAUQABAGgFAuQgCAZgegBQgcgCACAQQADARgFAPQAAAIAcABQAwABAHgBQAUgEAAgZQAAgeAIgQQAKgQAIARQALAVANgBQAOgBAFgdQgCgtABgTQACgfAfANQAfAMAdgUQAOgLASgRQAMgEANAUQAOAVgOALQgGAFgjAQQgdAOgDAJQgFARgMAVIhrBHIjCAeQALgCAKgGg");
	this.shape_2.setTransform(20.5769,11.6042);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_2, new cjs.Rectangle(0,0,41.2,23.3), null);


(lib.Path_5_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7684E").s().p("AgGAvIgCgfQgCgcgPgqQAPAFAaADQAQACgIATQgNAdAAAOQACAlgOAAQgEAAgBgIg");
	this.shape_2.setTransform(2.6362,5.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_2, new cjs.Rectangle(0,0,5.3,11.1), null);


(lib.Path_4_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D7684E").s().p("AgGAPIgQgNQgIgGAJgDQAUgEASgFIAIAJQAFAFgHADIgRALQgFAFgDAAIgEgCg");
	this.shape_3.setTransform(2.7477,1.6613);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_3, new cjs.Rectangle(0.1,0,5.4,3.3), null);


(lib.Path_3_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7684E").s().p("AgaApQADgVAAgPQgCgVgMABQgUADgDgUQgCgTAaAGQAUAEATAJQAPAGAFAAQANgDAMACQARACgGAKQgFAIgZgKQgYgKgEALQgDAJAAAQQAAANgHAIIgSARg");
	this.shape_2.setTransform(6.0541,4.7044);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,12.2,9.5), null);


(lib.Path_2_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D7684E").s().p("AAHBqQAEgQAXgWIABgBQAGACAGgHQAPgTgbAYQgHgBgIgIQgRgRgHgeQgFgUAMAEQAVAFAHgHQALgKgHgJQgOgPgMgRQgHgKgKADIgTAJQgYAMgRgpQgVgxAjgDQAcgCAlAYQAnAXAbAOQAAAlgCA2QgBAogUArQgSAogMABIgDABQgUAAAGggg");
	this.shape_3.setTransform(7.693,13.7508);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0,0,15.4,27.5), null);


(lib.Path_1_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D7684E").s().p("AgFAaQgCgfgCgGQgDgGgKACQgNABgRgJQgSgLAXgFQAQgEAjAfQANALADAAQAFAAgEgUQgHgjAIAJQAEAFAGALQgEgMAMAdQAGAOAOASQAFAMgXAFIglAOIgCAAQgGAAgCgXg");
	this.shape_3.setTransform(6.0693,4.9537);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,12.2,9.9), null);


(lib.Path_16 = function(mode,startPosition,loop,reversed) {
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
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D7684E").s().p("AA0BOQgUgRgHgYQgEgQgbAIQgiALgKgFQgUgHABgKQABgLAXgbQAYAAASgFQAHgCANgeQALgcAMACQAKACgOAXQgTAdAGATQAFAPAWAVQASASABAWQACASgHAAQgFAAgHgGg");
	this.shape_3.setTransform(6.9614,8.3707);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,14,16.8), null);


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
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAvEMQlXg2hBhsQhKh8A4h7QA2h1B/ghQBmgaEDA0QCDAaBuAfIgCBRQgCBfgFBIIgSEFQiegGisgbg");
	mask.setTransform(109.0566,96.1167);

	// Vrstva_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383188").s().p("AhfBEIAMhaIAAgLQgIAHgKASQgLAUgFAGIgEAAQgCgOABgTIACgjQgFABgEAKQgFAKgFAAQgNgbAAgOIAJgDIEUAHIAUACQAEALgNAKQgSAOgCADQgLAMgNgMQgTgRgGAAIgUAsQgCAAgDAIQgDAFgFgEIgGgXIgFgYQgEgDgCAEIgDAGIgeBAIgIAHQgEgCAAgBIAEhOQgFgDgDACIgkBCQgFAGgJASQgJARgGAIQgDAAgDgGg");
	this.shape.setTransform(87.3985,163.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C1C1B").s().p("ACXDIQglAAgTgEIi0gHIgJgHIh6kEQgDgMAHgGIDvhqQAHACAKAPIBWC8QABAJgJAGIixBQIgJgEIhJiWQgBgDADgDIAEgGICAg7IAGADQAEABACADIAsBfIgBAKIhFAeIgJAEQgGABgDgEIgOgdQgIgRACgNIALgGQALAAAFAPQAFARAGAEQAagLAJgIIgahAIgEgBQgeAPg+AaIgCAEIACAFQACAEACABIAvBmIAGAJICShEQAEgHgEgFIhLidIgGgEIjOBeQgCACACADIAFAFIBnDjIAFAGQAEgFAHgSQAHgPAHgDIAGAVQADANADAHIAHgCIAfhDIAGgBQAEANADAXQACAaADAJIAEABIArhgIAHgDIADAFIgIBXIAEAHIAHgKQAEgJADgCIA0hkIAFgEQAEADAAAGIgBAMIgUBmIAFADQAMgHALgVQANgYAFgFQADAfgCAaIACADQALgSAJgHIAYAvIgCAIIgJACQgTgEglABg");
	this.shape_1.setTransform(77.1153,128.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4AF08").s().p("ACOAPIgRgCIkQgHIgKgGIAAgLIAFgDIEtAJIAJAOQgFAGgJAAIgCAAg");
	this.shape_2.setTransform(85.5,152.0019);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383188").s().p("AhYBRQAEgDAKADQAKADAEgCQgkgdgPgRIACgDQAJAAAWAGQAUAFAKgBIgIgIIhLg0QgDgFACgCQALABASAEIAcAGIBJASQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIACgDIg8gzQgBgBABgEIALgBIBDAWQACgBAGACQAEACAAgFQgUgagIgPQABgGAFABIAJACIAvAPQAEgFAAgZQAAgSARAAQAEABAWgEQAPgCAGAKIgMAQIi1DQIgIAFQgLgLgKgbg");
	this.shape_3.setTransform(39.535,132.401);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgLIB0iLQAKgRAagbQAZgaAJgRQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAIAFgCIAHADIATAxQgNACgTgDIAAADQAVARAVAXQgIAAgbgHQgVgFgNADIgBAGIBXA2IAJAHQAGAEgBAFIgHABIhrgdQgEABgJgCIgNgDIAEAIIBEA0IABAGIgGADIhjghIgCAEQAFAJARATQAQASAGALIgFADIhHgVIgGAEIALATQAJAMACAFQgIADgOgFQgTgGgGAAIABAHIBjDlIABAHQABADADABIDPhbIACgHIhCigQgBgGgIgCIiRA7IgEACIACALIAtBoQAAADABADIADAGIADAAIAvgVIAtgSIACgFIgdg/QgHABgNAFIgSAJQgBAGAJAQQAHANgHAIIgMAEQgKgGgIgSQgHgVgFgKQgBgFAFgDIAJgFIBFgeIAJAGIAoBhQAAADgBAEQgDAFAAACIiAA2QgLAAgDgEIg+ibIADgJICzhNQAKgCAGAGIBSC+QAFARgEAHIjwBrIgBAAQgIAAgHgKg");
	this.shape_4.setTransform(55.2221,155.7012);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4AF08").s().p("AhpBzIACgKICyjOIAKgOQAHgIAIABIAGAQIjEDkIgGABg");
	this.shape_5.setTransform(44.775,137.2234);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D41317").s().p("AmViRII7j9IDwIgIo7D9g");
	this.shape_6.setTransform(64.675,144.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383188").s().p("AhfBEIAMhZIAAgMQgIAHgKASQgLATgFAHIgEgBQgCgNABgUIACgiQgFABgEAKQgFAJgFABQgNgbAAgOIAJgDIEUAHIAUACQAEALgNAJQgSAOgCADQgLANgNgMQgTgQgGgBIgUAsIgFAHQgCAGgGgEQgDgJgDgOIgFgZQgEgDgCAFIgDAGIgeA/IgIAJQgEgDAAgBIAEhNQgFgEgDACIgkBCQgFAGgJATQgJAQgGAIQgDAAgDgGg");
	this.shape_7.setTransform(63.3485,108.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C1C1B").s().p("ACXDIQglABgTgFIi0gIIgJgGIh6kEQgDgMAHgGIDvhrQAHADAKAOIBWC9QABAJgJAGIixBQIgJgEIhJiVQgBgEADgDIAEgHICAg6IAGADQAEACACACIAsBeIgBALIhFAfIgJACQgGACgDgDIgOgdQgIgTACgMIALgGQALAAAFAOQAFASAGADQAagJAJgKIgag/IgEgCQgSAKgbALIgvAWIgCACIACAHQACACACABIAvBnIAGAJICShFQAEgGgEgEIhLieIgGgDIjOBcQgCADADADIAEAFIBnDjIAFAFQAEgEAHgSQAHgOAHgEIAGAUQADAOADAHIAHgDIAfhBIAGgCQAEAMADAYQACAZADAKIAEABIAshgIAGgCIADAEIgIBXIAEAIQAIgRAHgGIAzhjIAFgDQAEACAAAHIgBALIgUBmIAFADQAMgHALgUQANgYAFgHQADAggCAbIACACQALgSAJgHIAYAvIgCAHIgJAEQgTgFglABg");
	this.shape_8.setTransform(53.0653,73.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4AF08").s().p("AB9ANIkQgHIgJgGIAAgKIAEgEIEtAJIAJAOQgGAGgKAAIgRgCg");
	this.shape_9.setTransform(61.45,97.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383188").s().p("AhYBRQAEgDAKADQAKADAEgCQgkgdgPgRIACgDQAJAAAWAGQAUAFAKgBIgIgIIhLg0QgCgGABgBQALAAASAFIAcAGIBJASQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIACgEIg8gyQAAAAgBAAQAAgBAAAAQAAgBAAgBQABgBAAgBIALgBIBDAWIAIABQAEACAAgFQgUgagIgPQABgGAFABIAJACIAvAPQAEgFAAgZQAAgSARAAQAEABAWgEQAPgCAGAKIgMAQIi1DQIgIAFQgLgLgKgbg");
	this.shape_10.setTransform(15.4969,77.901);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgLIB1iLQAJgRAagbQAZgbAJgQQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAIAFgCIAHADIATAxQgNACgTgDIAAADQAVARAVAXQgIAAgbgHQgVgFgNADIgBAGIBXA2IAJAHQAGAEgBAEIgHACIhrgdQgEABgJgCIgNgDIAEAIIBEA0IABAGIgGADIhjghIgCAEQAFAJARATQAQASAGALIgFADIhHgVIgGAEIALATQAJAMACAFQgIADgOgFQgTgGgGAAIABAHIBjDlIABAHQABADADABIDPhbIACgHIhCigQgBgGgIgCIiRA7IgEACIACALIAtBoQAAADABADIADAGIADAAIAvgVIAtgSIACgFIgdg/QgIABgMAFIgSAJQgBAGAJAQQAHANgHAIIgMAEQgKgGgIgSQgHgVgFgKQgBgFAFgDIAJgFIBFgeIAJAGIAoBhQAAADgBAEIgDAHIiAA2IgIAAQgEgBgCgDIg+ibIADgJICzhNQAKgCAGAGIBSC+QAFARgEAHIjwBrIgBAAQgIAAgHgKg");
	this.shape_11.setTransform(31.1721,101.2012);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F4AF08").s().p("AhpBzIACgKICyjOIAKgOQAHgIAHABIAHAQIjEDkIgHABg");
	this.shape_12.setTransform(20.75,82.7234);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D41317").s().p("AmViSII7j8IDwIgIo7D9g");
	this.shape_13.setTransform(40.625,90.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#383188").s().p("AhfBEIALhZIABgMQgIAHgKASQgLATgFAHIgEgBQgCgNABgUIABgiQgEABgEAKQgFAKgFAAQgNgbAAgOIAIgDIEUAHIAUACQAEALgMAJQgSAOgCAEQgLAMgNgMQgTgQgGgBIgUAsQgCAAgDAHQgDAGgFgEIgGgXIgFgZQgEgCgCAEIgEAGIgdBAIgIAHQgEgCAAgBIAEhOQgGgDgDACIgjBCIgOAZQgJAQgHAIQgDAAgCgGg");
	this.shape_14.setTransform(144.5735,137.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1C1C1B").s().p("ADPDLQgSgEgmABQglABgTgFIi0gIIgJgGIh6kEQgDgLAHgHIDwhrQAIACAIAQIBXC8QAAAIgIAHIiyBQIgJgEIhJiWQAAgDAGgJICAg7IAGADQAEABACADIAsBeIgBALIhEAfIgKADQgGABgDgEIgOgdQgIgSADgMIALgGQAKAAAFAOQAGASAFAEIASgJQAMgFAGgFIgahAIgFgCQgSAKgbAMIgvAUIgCAEIADAFQABAEACABIAvBmIAGAJIAEgCICPhDQADgGgDgEIhLieIgHgEIjOBdQgCADADADIAEAFIBnDjIAFAGQAEgEAIgTQAGgOAIgEIAFAUQADAOADAHIAHgCIAfhDIAGgBQAEAMADAYQADAaACAJIAEABIAshgIAGgDIAEAFIgIBXIADAHQADgDAEgIQAEgIAEgDIAzhjIAGgDQAEACgBAHIgBALIgUBmIAFADQAMgHALgUQANgZAFgGQADAYgBAiIABACQANgSAIgGIAXAvIgCAHQgGAEgCAAIgBgBg");
	this.shape_15.setTransform(134.2917,103.1031);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F4AF08").s().p("AB+ANIkRgHIgJgGIAAgLIAFgDIEsAJIAIAOQgEAGgKAAIgRgCg");
	this.shape_16.setTransform(142.65,126.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#383188").s().p("AhYBSQAEgFAKAEQAKADADgCQgjgdgPgRIACgEQAIABAXAGQAUAFAKgCIgJgHIhKgzQgCgHABgBQAKABASAEIAcAGIBKASQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIABgEIg7gxIgBgDIABgDIALgBIBDAVIAHACQAEABABgEQgUgagIgPQABgHAFACIAJABIAvAQQAEgFAAgYQAAgTARAAQAEABAWgEQAPgCAGAKIgMAQIi1DQIgIAFQgLgLgKgag");
	this.shape_17.setTransform(96.7429,107.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgLIB0iLQAKgRAZgaQAagbAIgRQABgCAHgDIAHAEIATAxQgLABgUgDIAAADQAaAXAQARQgJAAgagHQgVgFgNADIgCAGIBYA2IAJAHQAGAEgBAFIgHACIhrgeQgEABgJgCIgNgCIADAHIBFA1IABAFIgGADIhjggIgDADQAGAJARATQAQASAGALIgFAEIhHgVIgGADQADAHAIAMIALARQgIAEgPgGQgSgGgGAAIABAIIBjDkIABAHQAAAEADAAIDQhaIACgHIhCihQgCgGgHgCIiVA9IACALIAtBpQgBADAEAIIAEAAIAugVQAagLAUgHIACgFIgdg/QgHABgNAFIgSAJQgBAGAJAQQAHANgHAIIgMAFQgKgHgIgSQgHgVgGgKQAAgFAFgDQAHgDACgCIBFgeIAJAGIAoBhQAAAFgEAJIiBA3IgHgBQgEAAgCgDIg+icIADgJICyhNQAKgCAHAGIBRC/QAGARgEAGIjwBrIAAAAQgJAAgHgKg");
	this.shape_18.setTransform(112.4092,130.4762);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F4AF08").s().p("AhoB0IABgLICzjOIAKgOQAGgIAIABIAFARIjEDjIgFACg");
	this.shape_19.setTransform(101.95,111.9984);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D41317").s().p("AmViRII7j9IDwIgIo7D9g");
	this.shape_20.setTransform(121.85,119.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#383188").s().p("AhfBEIALhaIABgLQgIAHgKASQgLATgFAHIgEgBQgCgNABgUIABgiQgEABgEAKQgFAKgFAAQgNgbAAgOIAIgDIEUAHIAUACQAEALgMAJQgSAOgCAEQgLAMgNgMQgTgQgGgBIgUAsQgCAAgDAHQgDAGgFgEIgGgXIgFgZQgEgCgCAEIgEAGIgdA/IgIAIQgEgCAAgBIAEhOIgEgBQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAABgBAAIgjBCIgOAZQgJAQgHAIQgDAAgCgGg");
	this.shape_21.setTransform(120.5235,83.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1C1C1B").s().p("ADPDLQgSgEgmABQglABgTgFIi0gIIgJgGIh6kEQgDgLAHgHIDwhrQAIACAIAQIBXC8QAAAIgIAHIiyBQIgJgEIhJiWQAAgDAGgJICAg7IAGADQAEABACADIAsBeIgBALIhEAfIgKADQgGABgDgEIgOgdQgIgSADgMIALgGQAKAAAFAOQAGASAFADIASgIQAMgFAGgFIgahAIgFgCQgSAKgbAMIgvAUIgCADIADAGQABAEACABIAvBmIAGAJIAEgCICPhDQADgGgDgEIhLieIgHgEIjOBdQgCADADADIAEAFIBnDjIAFAGQAEgEAIgTQAGgOAIgEIAFAUQADAOADAHIAHgCIAfhDIAGgBQAEAMADAYQADAaACAJIAEABIAshgIAGgDIAEAFIgIBXIADAHQADgDAEgIQAEgIAEgDIAzhjIAGgDQAEACgBAHIgBALIgUBmIAFADQAMgHALgUQANgYAGgHQACAZgBAhIACACQALgRAJgHIAXAvIgCAHQgGAEgCAAIgBgBg");
	this.shape_22.setTransform(110.2417,48.6031);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F4AF08").s().p("AB+ANIkRgHIgJgGIAAgLIAEgDIEtAIIAJAPQgGAGgJAAIgRgCg");
	this.shape_23.setTransform(118.6,72.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#383188").s().p("AhYBSQAEgEAKADQAKADADgCQgjgcgPgSIACgDQAIAAAXAGQAUAFAKgBIgJgIIhKgzQgCgGABgCQAKABASAEIAcAGIBKASQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgDIg7gyIgBgDIABgDIALAAIBDAVIAHABQAFACAAgFQgUgagIgPQABgGAFABIAJACIAvAPQAEgEAAgZQAAgTARAAQADABAXgDQAPgDAGAKIgMAQIi1DQQgGAEgCABQgLgLgKgag");
	this.shape_24.setTransform(72.6929,52.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgLIB0iLQAKgRAZgaQAagbAIgRQABgCAIgDIAGADIATAyQgLABgUgDIAAADQAaAXAQARQgJAAgagHQgVgFgNADIgCAGIBYA2IAJAHQAGAEgBAFIgHACIhrgeQgFABgIgCIgNgDIADAIIBFA1IABAFIgGADIhjggIgDADQAGAJARATQAQASAGALIgFAEIhHgVIgGADQADAHAIAMIALARQgIAEgPgGQgSgGgGAAIABAIIBjDkIABAHQAAAEADAAIDQhaIACgHIhCihQgCgGgHgCIiVA9IACALIAtBpQgBADAEAIIAEAAIAugVQAagLAUgHIACgFIgdg/QgHABgNAFIgSAJQgBAGAJAQQAHANgHAIIgMAFQgKgHgIgSQgHgVgGgKQAAgFAFgDIAJgFIBFgeIAJAGIAoBhQAAAFgEAJIiBA3IgHgBQgEAAgCgDIg+icIADgJICyhNQAKgCAHAGIBRC/QAGARgEAGIjwBrIAAAAQgJAAgHgKg");
	this.shape_25.setTransform(88.3592,75.9762);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F4AF08").s().p("AhpB0IACgLICyjOIALgOQAGgIAIABIAGAQIjEDkIgGACg");
	this.shape_26.setTransform(77.9,57.4984);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D41317").s().p("AmViRII7j9IDwIgIo6D9g");
	this.shape_27.setTransform(97.8,65.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#383188").s().p("AheBEIALhZIAAgMQgIAHgJASQgLATgGAHIgEgBQgCgNABgUIACgiQgFABgEAKQgFAJgFABQgNgbAAgOIAJgDIEoAIQAEAMgNAJQgRAOgCADQgMANgNgMQgTgQgGgBIgUArIgFAIQgCAGgGgEIgGgXIgFgZQgEgCgCADIgDAHIgdA/IgJAJQgEgDABgCIADhMQgFgEgDACIgkBBQgFAHgJATQgJAQgGAIQgDAAgCgGg");
	this.shape_28.setTransform(201.7485,112.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1C1C1B").s().p("ADPDLQgTgEglABQglABgTgFIi0gIIgJgGIh6kEQgDgMAHgGIDvhqQAHACAKAPIBWC8QABAJgJAGIixBQIgJgEIhJiVQgBgEADgDIAEgGICAg7IAGADIAGAEIAsBeIgBALIhFAfIgJADQgGABgDgDIgOgdQgIgSACgNIALgGQALAAAFAPQAFARAGAEIASgJQAMgFAFgFIgahAIgEgCQgSAKgbAMIgvAVIgCADIACAGQACADACABIAvBmIAGAJICShEQAEgHgEgEIhKieIgHgEIjOBeQgCACADADIAEAFIBnDjIAFAGQAEgFAHgSQAHgOAHgEIAGAUQADAOADAHIAHgCIAfhCIAGgCQAEAMADAYQACAaADAJIAEABIAshgIAGgCIADAEIgIBXIAEAIIAHgMIAIgKIAzhkIAFgDQAEACAAAHIgBALIgUBmIAFADQAMgHALgUQANgYAFgGQADAfgCAbIACABQAMgRAIgHIAYAvIgCAIIgIACIgBAAg");
	this.shape_29.setTransform(191.455,77.8786);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4AF08").s().p("AB9ANIkQgHIgJgGIAAgKIAEgEIEtAIIAJAPQgGAGgJAAIgSgCg");
	this.shape_30.setTransform(199.85,101.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#383188").s().p("AhZBRQAEgDAKADQALAEADgDQgkgcgOgSIACgDQAIAAAXAGQATAFALgBIgJgHIhKg1QgDgFACgCQAKABASAEIAcAHIBKARQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgDIg7gzQAAAAAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBIALgBIBDAVIAHABQAEACABgFQgUgagIgPQAAgHAGACIAJACIAvAPQAEgEAAgaQAAgSARAAQAEABAWgDQAPgDAFAKIgMARIi0DQIgIAEQgLgLgLgbg");
	this.shape_31.setTransform(153.9056,81.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1C1C1B").s().p("AhJD5IhvkIIACgLIB1iMQAJgQAagbQAZgbAJgRQABgDAHgCIAHAEIATAxQgKABgWgDIAAADQAZAVARATQgIAAgbgGQgVgGgNAEIgBAFIBXA2IAKAHQAFAEgBAFIgHACIhqgdQgFAAgIgCIgOgCIAEAHIBEA1IABAGIgGACIhjggIgCAEQAFAIARAUQAQARAGAMIgFADIhGgVIgHAEIALASQAJAMACAGQgIADgOgFQgTgHgFAAIAAAIIBjDlIABAGQABAEADAAIDPhaIACgHIhCihQgBgFgIgDIiRA8IgEACIACAKIAtBpQAAACABADIADAGIADAAIAvgUQAbgMASgHIACgEIgdg/QgIAAgMAGIgSAIQgBAGAJAQQAIAOgIAIIgMAEQgKgHgIgSQgHgVgFgJQgBgFAFgEIAJgFIBFgeIAJAHIAoBgQAAADgBAEIgDAHIiAA3IgIgBQgEAAgCgDIg+icIADgJICzhNQAKgBAGAFIBSC/QAFAQgEAIIjwBqIgCAAQgIAAgGgKg");
	this.shape_32.setTransform(169.5721,105.234);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F4AF08").s().p("AhpBzIACgLICyjOIAKgNQAHgIAIABIAGAQIjEDkIgHABg");
	this.shape_33.setTransform(159.15,86.7734);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D41317").s().p("AmViRII7j8IDwIfIo7D8g");
	this.shape_34.setTransform(179.025,94.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#383188").s().p("AheBEIALhaIAAgLQgIAHgJASQgLATgGAHIgEAAQgCgOABgTIACgjQgFABgEAKQgFAJgFABQgNgbAAgOIAJgDIEoAIQAEALgNALQgRANgCAEQgMAMgNgMQgTgRgGAAIgUAsIgFAIQgCAFgGgEIgGgYIgFgYQgEgDgCAFIgDAGIgdA/IgJAIQgEgCABgBIADhOIgEgBQgBAAAAAAQgBgBAAAAQgBAAAAABQgBAAAAAAIgkBBQgFAIgJARQgJARgGAIQgDgBgCgFg");
	this.shape_35.setTransform(177.6985,58.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1C1C1B").s().p("ADPDLQgTgEglABQglABgTgFIi0gIIgJgGIh6kEQgDgMAHgGIDvhqQAHACAKAPIBWC8QABAJgJAGIixBQIgJgEIhJiVQgBgEADgDIAEgGICAg7IAGADIAGAEIAsBeIgBALIhFAfIgJADQgGABgDgDIgOgdQgIgSACgNIAMgGQAKAAAFAOQAFASAGAEIASgJQAMgFAFgFIgahAIgEgCQgSAKgbAMIgvAVIgCADIACAGQACADACABIAvBmIAGAJICShEQAEgHgEgEIhKieIgHgEIjOBdQgCADADADIAEAFIBnDjIAFAGQAEgFAHgSQAHgOAHgEIAGAUQADAOADAHIAHgCIAfhCIAGgCQAEAMADAYQACAaADAJIAEABIAshgIAGgCIAEAEIgJBXIAEAIIAHgMIAIgKIAzhkIAFgDQAEACAAAHIgBALIgUBmIAFADQAMgHALgUQAMgZAGgGQADAggCAbIACABQAMgRAIgHIAYAvIgCAIIgJACIAAAAg");
	this.shape_36.setTransform(167.405,23.3786);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F4AF08").s().p("AB+ANIkRgHIgKgGIAAgLIAGgDIEsAJIAIAOQgFAGgJAAIgRgCg");
	this.shape_37.setTransform(175.8,47.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#383188").s().p("AhZBSQAEgEAKADQALADADgCQgkgdgOgRIACgDQAJABAWAFQATAFALgBIgJgIIhKgzQgDgGACgCQAKAAASAFIAcAHIBKARQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgEIg7gxQgBgCABgEIALAAIBDAVIAHACQAEABABgFQgUgagIgPQAAgHAGACIAJACIAvAPQAEgEAAgZQAAgTARABQAEABAWgFQAPgCAFAKIjADgIgIAFQgKgJgMgcg");
	this.shape_38.setTransform(129.8556,27.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1C1C1B").s().p("AhJD5IhvkIIACgLIB1iMQAJgQAagbQAZgbAJgRQABgCAHgDIAHAEIATAxQgKABgWgDIAAADQAZAVARATQgIAAgbgGQgVgGgNAEIgBAFIBXA2QADADAHAEQAFAEgBAFIgHACIhqgdQgFAAgIgCIgOgCIAEAHIBEA1IABAGIgGACIhjggIgCADQAFAJARAUQAQASAGALIgFADIhGgVIgHAEQADAHAIALIAMASQgIADgPgFQgTgHgFAAIAAAIIBjDlIABAGQAAAEAEAAIDPhaIACgHIhCihQgBgFgIgDIiRA8IgEACIACAKIAtBpQAAACABADIADAGIADAAIAvgUQAbgMASgHIACgEIgdg/QgIAAgMAGIgSAIQgBAGAJAQQAIAOgIAIIgMAEQgKgHgIgSQgHgVgFgJQgBgFAFgEIAJgFIBFgeIAJAHIAoBgQAAADgBAEIgDAHIiAA3IgIgBQgEAAgCgDIg+icIADgJICzhNQAKgBAGAFIBSC/QAFARgEAHIjwBqIgBAAQgJAAgGgKg");
	this.shape_39.setTransform(145.5342,50.7262);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F4AF08").s().p("AhoBzIABgLICyjOIAKgOQAHgHAIABIAFAQIjEDkIgFABg");
	this.shape_40.setTransform(135.1,32.2733);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D41317").s().p("AmViSII7j8IDwIhIo7D8g");
	this.shape_41.setTransform(154.975,39.85);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(68.7,66.1,80.8,60.10000000000001), null);


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

	// Vrstva_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AkPJeQg/gIhqgXIiogjQjqgvgFh3QgBgmAVgoIAWghIhdncQCfisBoiHQBBhVG2gGQDagEDOAOQATgFBXA1QBcA3BeBLQBiBOB2C0QA7BbAoBKIpfAbQgzAChGAVQiNAqhiBgQheBbAoB2QAKAfAaA6QATAxgHAfQgKAvhjAAQgmAAgygHg");
	mask_1.setTransform(155.025,135.2243);

	// Vrstva_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383188").s().p("AhfBEIALhZIABgMQgIAHgKASQgLATgFAHIgEgBQgCgNABgUIABgiQgEABgEAKQgFAKgFAAQgNgbAAgOQACgBAGgCIEUAHIAUACQAEALgMAKQgSAOgCADQgLAMgOgMQgSgQgGgBIgUAsQgCAAgDAIQgDAFgFgEIgGgXIgFgZQgEgCgCAEIgEAGIgdBAIgIAHQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAIAEhOQgGgDgDACIgjBCIgPAZQgIAQgHAIQgDAAgCgGg");
	this.shape_1.setTransform(63.3235,217.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C1C1B").s().p("ADPDLQgSgEgmABQglABgTgFIi0gIIgJgGIh6kEQgDgLAHgHIDwhqQAHABAJAQIBXC8QAAAIgIAHIiyBQIgJgEIhJiVQAAgEAGgJICAg7IAGADQAEABACADIAsBeIgBALIhEAfIgKADQgGABgDgDIgOgdQgIgTACgMIAMgGQAKAAAFAOQAGASAFAEIASgJQAMgFAGgFIgahAIgFgCQgSAKgbAMIgvAUIgCAEIACAFQACAEACABIAvBmIAGAJICShFQAEgGgDgEIhLieIgHgEIjOBdQgCADADADIAEAFIBnDjIAFAGQAEgEAHgTQAHgOAHgEQADAGADAOQADAOADAHIAHgCIAfhDIAGgBQAEAMADAYQADAaACAJIAEABIAshgIAGgDIAEAFIgIBXIADAIQAIgQAHgGIAzhkIAGgDQAEACgBAHIgBALIgUBmIAFADQAMgHALgUQANgZAFgGQADAYgBAiIABACQANgSAIgGIAXAvIgCAHQgGADgCAAIgBAAg");
	this.shape_2.setTransform(53.0417,182.8781);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4AF08").s().p("AB+ANIkRgHIgJgGIgBgLIAGgDIEsAJIAIAOQgEAGgKAAIgRgCg");
	this.shape_3.setTransform(61.4,206.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383188").s().p("AhYBSQAEgEAKADQAKAEADgDQgkgcgOgSIACgDQAIAAAXAGQAUAFAKgCIhTg6QgCgHABgBQAKABASAEIAcAGIBKASQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIABgEIg7gxQgBgCABgEIALgBIBDAWIAHACQAEAAABgEQgUgagIgPQABgHAFACIAJABIAvAQQAEgFAAgYQAAgTARAAQAEABAWgDQAPgDAGAKIgMAQIi1DQIgIAFQgLgLgKgag");
	this.shape_4.setTransform(15.4929,186.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgKIB0iMQAKgRAZgaQAagbAIgRQABgCAHgDIAHAEIATAxQgJABgWgDIAAADQAbAXAPARQgJAAgagHQgVgFgNADIgCAGIBYA2IAJAHQAGAEgBAFIgHACIhrgeQgFABgIgCIgNgCIADAHIBFA1IABAGIgGACIhkggIgCADQAGAJARATQAQASAGALIgFAEIhHgVIgGAEQADAGAIAMQAJAMACAGQgIADgPgFQgSgHgGAAIABAIIBjDkIABAHQAAAEADAAIDQhaIABgHIhCihQAAgGgIgCIiRA8IgEACIACAKIAtBpQgBADAEAIIAEAAIAugUQAbgMATgHIACgFIgdg+QgIAAgMAFIgSAJQgBAGAJAQQAHANgHAIIgMAFQgKgHgIgSQgHgVgGgKQAAgFAFgDQAHgDACgCIBFgeIAJAGIAoBhQAAADgCAEQgCAFAAACIiBA3IgHgBQgEAAgCgDIg+icIADgJICyhNQALgBAGAFIBRC/QAGARgEAHIjwBqIgBAAQgIAAgHgKg");
	this.shape_5.setTransform(31.1592,210.2262);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4AF08").s().p("AhoB0IABgLICzjOIAKgOQAHgIAHABIAFARIjEDjIgFACg");
	this.shape_6.setTransform(20.7,191.7484);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D41317").s().p("AmViRII6j9IDxIhIo7D8g");
	this.shape_7.setTransform(40.6,199.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383188").s().p("AhfBEIAMhaIAAgLQgIAHgKASQgLAUgFAGIgEAAQgCgOABgUIACgiQgFABgEAKQgFAKgFAAQgNgbAAgOIAJgDIEUAHIAUACQAEALgNAKQgSAOgCADQgLAMgNgMQgTgQgGgBIgUAsQgCAAgDAIQgDAFgFgEIgGgXIgFgYQgEgDgCAEIgDAGIgeBAIgIAIQgEgDAAgBIAEhOQgFgDgDACIgkBCQgFAGgJASQgJARgGAIQgDAAgDgGg");
	this.shape_8.setTransform(144.5485,247);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C1C1B").s().p("ACXDIQglAAgTgEIi0gHIgJgHIh6kEQgDgMAHgGIDvhrQAHACAKAPIBWC9QABAIgJAHIixBQIgJgEIhJiWQgBgDADgDIAEgHICAg6IAGADQAEABACADIAsBfIgBAKIhFAeIgJAEQgGABgDgDIgOgeQgIgRACgNIALgGQALAAAFAPQAFARAGADQAagKAJgIIgahAIgEgBQgeAQg+AZIgCAEIACAFQACAEACABIAvBmIAGAJICShEQAEgHgEgFIhLidIgGgDIjOBdQgCACACADIAFAFIBnDjIAFAFQAEgEAHgSQAHgPAHgDIAGAVQADANADAHIAHgCIAfhDIAGgBQAEANADAXQACAaADAJIAEABIArhgIAHgDIADAFIgIBXIAEAHIAHgLQAEgHADgDIA0hkIAFgEQAEADAAAGIgBAMIgUBmIAFADQAMgIALgUQANgXAFgHQADAggCAaIACADQALgSAJgHIAYAvIgCAHIgJADQgTgEglABg");
	this.shape_9.setTransform(134.2653,212.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4AF08").s().p("ACOAPIgRgCIkQgHIgJgGIAAgLIAEgDIEtAJIAIAOQgEAGgJAAIgCAAg");
	this.shape_10.setTransform(142.65,235.8019);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383188").s().p("AhYBRQAEgDAKADQAKADAEgCQgkgdgPgRIACgDQAJAAAWAGQAUAFAKgBIgIgIIhLg0QgDgFACgCQALABASAEIAcAGIBJASQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIACgDIg8gzQgBgBABgEIALgBIBDAWQACgBAGACQAEACAAgFQgUgagIgPQABgGAFABIAJACIAvAPQAEgFAAgZQAAgSARAAQAEABAWgEQAPgCAGAKIgMAQIi1DQIgIAFQgLgLgKgbg");
	this.shape_11.setTransform(96.685,216.201);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgLIB0iLQAKgRAagbQAZgaAJgRQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAIAFgCIAHADIATAxQgNACgTgDIAAADQAVARAVAXQgIAAgbgHQgVgFgNADIgBAGIBXA2IAJAHQAGAEgBAFIgHABIhrgdQgEABgJgCIgNgDIAEAIIBEA0IABAGIgGADIhjghIgCAEQAFAJARATQAQASAGALIgFADIhHgVIgGAEIALATQAJAMACAFQgIADgOgFQgTgGgGAAIABAHIBjDlIABAHQABADADABIDPhbIACgHIhCigQgBgGgIgCIiRA7IgEACIACALIAtBoQAAADABADIADAGIADAAIAvgVIAtgSIACgFIgdg/QgHABgNAFIgSAJQgBAGAJAQQAHANgHAIIgMAEQgKgGgIgSQgHgVgFgKQgBgFAFgDIAJgFIBFgeIAJAGIAoBhQAAADgBAEQgDAFAAACIiAA2QgLAAgDgEIg+ibIADgJICzhNQAKgCAGAGIBSC+QAFARgEAHIjwBrIgBAAQgIAAgHgKg");
	this.shape_12.setTransform(112.3721,239.5012);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4AF08").s().p("AhpBzIACgKICyjOIAKgOQAHgIAIABIAGAQIjEDkIgGABg");
	this.shape_13.setTransform(101.925,221.0234);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D41317").s().p("AmViRII7j9IDwIgIo7D9g");
	this.shape_14.setTransform(121.825,228.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#383188").s().p("AhfBEIAMhZIAAgMQgIAHgKASQgLATgFAHIgEgBQgCgNABgTIACgjQgFABgEAKQgFAKgFAAQgNgbAAgOIAJgDIEUAHIAUACQAEALgNAJQgSAOgCADQgLANgNgMQgTgQgGgBIgUAsIgFAHQgCAGgGgEQgDgJgDgOIgFgZQgEgDgCAFIgDAGIgeA/IgIAIQgEgCAAgBIAEhNQgFgEgDACIgkBBQgFAIgJASQgJAQgGAIQgDAAgDgGg");
	this.shape_15.setTransform(120.4985,192.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1C1C1B").s().p("ACXDIQglABgTgFIi0gIIgJgGIh6kEQgDgMAHgGIDvhqQAHABAKAPIBWC9QABAJgJAGIixBQIgJgEIhJiVQgBgEADgEIAEgGICAg6IAGADQAEACACACIAsBeIgBALIhFAfIgJACQgGACgDgDIgOgdQgIgTACgMIALgGQALAAAFAOQAFASAGAEQAagKAJgKIgag/IgEgCQgeAQg+AbIgCACIACAHQACACACABIAvBnIAGAJICShFQAEgGgEgEIhLieIgGgEIjOBdQgCADADADIAEAFIBnDjIAFAFQAEgEAHgSQAHgOAHgEIAGAUQADAOADAHIAHgDIAfhBIAGgCQAEAMADAYQACAZADAKIAEABIAshgIAGgCIADAEIgIBXIAEAIQAIgQAHgHIAzhjIAFgDQAEACAAAHIgBALIgUBnIAFACQAMgIALgTQANgYAFgHQADAggCAbIACABQALgRAJgHIAYAvIgCAHIgJAEQgTgFglABg");
	this.shape_16.setTransform(110.2153,157.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F4AF08").s().p("AB9ANIkQgHIgJgGIAAgKIAEgEIEtAJIAJAOQgGAGgKAAIgRgCg");
	this.shape_17.setTransform(118.6,181.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#383188").s().p("AhYBRQAEgDAKADQAKADAEgCQgkgdgPgRIACgDQAJAAAWAGQAUAFAKgBIgIgIIhLg0QgCgGABgBQALAAASAFIAcAGIBJASQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIACgEIg8gyQAAAAgBAAQAAgBAAAAQAAgBAAgBQABgBAAgBIALgBIBDAWIAIABQAEACAAgFQgUgagIgPQABgGAFABIAJACIAvAPQAEgFAAgZQAAgSARAAQAEABAWgEQAPgCAGAKIgMAQIi1DQIgIAFQgLgLgKgbg");
	this.shape_18.setTransform(72.6469,161.701);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgLIB1iLQAJgRAagbQAZgbAJgQQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAIAFgCIAHADIATAxQgNACgTgDIAAADQAVARAVAXQgIAAgbgHQgVgFgNADIgBAGIBXA2IAJAHQAGAEgBAEIgHACIhrgdQgEABgJgCIgNgDIAEAIIBEA0IABAGIgGADIhjghIgCAEQAFAJARATQAQASAGALIgFADIhHgVIgGAEQADAHAIAMQAJAMACAFQgIADgOgFQgTgGgGAAIABAHIBjDlIABAHQABADADABIDPhbIACgHIhCigQgBgGgIgCIiRA7IgEACIACALIAtBoQAAADABADIADAGIADAAIAvgVIAtgSIACgFIgdg/QgIABgMAFIgSAJQgBAGAJAQQAHANgHAIIgMAEQgKgGgIgSQgHgVgFgKQgBgFAFgDIAJgFIBFgeIAJAGIAoBhQAAADgBAEIgDAHIiAA2IgIAAQgEgBgCgDIg+ibIADgJICzhNQAKgCAGAGIBSC+QAFARgEAHIjwBrIgBAAQgIAAgHgKg");
	this.shape_19.setTransform(88.3221,185.0012);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4AF08").s().p("AhpBzIACgKICyjOIAKgOQAHgIAHABIAHAQIjEDkIgHABg");
	this.shape_20.setTransform(77.9,166.5234);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D41317").s().p("AmViSII7j8IDwIgIo7D9g");
	this.shape_21.setTransform(97.775,174.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#383188").s().p("AhfBEIAMhaIAAgLQgIAHgJASQgLATgGAHIgEAAQgCgOABgUIACgiQgFABgEAKQgFAKgFAAQgNgbAAgOIAJgDIEUAHIAUACQAEALgNAKQgRANgCAEQgMAMgNgMQgTgRgGAAIgUAsIgFAIQgCAFgGgEQgDgJgDgPIgFgYQgEgDgCAFIgDAGIgeBAIgIAHQgEgCAAgBIAEhOQgFgDgDACIgkBCQgFAGgJASQgJARgGAIQgDgBgDgFg");
	this.shape_22.setTransform(96.4485,138);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1C1C1B").s().p("ADPDLQgTgEglABQglABgTgFIi0gIIgJgGIh6kEQgDgMAHgGIDvhqQAHACAKAPIBWC8QABAJgJAGIixBQIgJgEIhJiVQgBgEADgDIAEgGICAg7IAGADIAGAEIAsBeIgBALIhFAfIgJADQgGABgDgDIgOgdQgIgSACgNIALgGQALAAAFAPQAFARAGAEQAagKAJgJIgahAIgEgBQgSAJgbAMIgvAVIgCADIACAGQACADACABIAvBmIAGAJICShEQAEgHgEgEIhLieIgGgEIjOBeQgCACADADIAEAFIBnDjIAFAGQAEgFAHgSQAHgOAHgEIAGAVQADANADAHIAHgCIAfhCIAGgCQAEAMADAYQACAaADAJIAEABIAshgIAGgCIADAEIgIBXIAEAIQAIgQAHgGIAzhkIAFgDQAEACAAAHIgBALIgUBnIAFACQAMgHALgUQANgYAFgGQADAfgCAbIACABQAMgRAIgHIAYAvIgCAIIgJACIAAAAg");
	this.shape_23.setTransform(86.155,103.1286);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4AF08").s().p("AB9ANIkQgHIgJgGIAAgLIAEgDIEtAJIAJAOQgGAGgJAAIgSgCg");
	this.shape_24.setTransform(94.55,126.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#383188").s().p("AhYBRQAEgDAKADQAKADAEgCQgkgdgPgRIACgDQAJAAAWAGQAUAFAKgBIgIgIIhLg0QgCgGABgBQALAAASAFIAcAGIBJASQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIACgEIg8gyQgBgBABgEIALgBIBDAWIAIABQAEABABgEQgVgagIgPQABgGAFABIAJACIAvAPQAEgFAAgZQAAgSARAAQAEABAWgEQAPgCAGAKIgMAQIi1DQIgIAFQgLgLgKgbg");
	this.shape_25.setTransform(48.5969,107.201);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgLIB1iLQAJgRAagbQAZgbAJgRIADgCIAFgCIAHADIATAxQgKACgWgDIAAACQAWATAUAWQgIAAgbgHQgVgFgNADIgBAFIBXA3IAJAHQAGAEgBAEIgHACIhqgdQgFABgJgCIgNgDIAEAIIBEA0IABAGIgGADIhjghIgCAEQAFAJARATQAQASAGALIgFADIhHgVIgGAEIALATQAJAMACAFQgIADgOgFQgTgGgFAAIAAAHIBjDlIABAHQABADADABIDPhbIACgHIhCigQgBgGgIgCIiRA7IgEACIACALIAtBoQAAACABAEIADAGIADAAIAvgVIAtgSIACgFIgdg/QgIABgMAFIgSAIQgBAHAJAQQAHANgHAIIgMAEQgKgGgIgSQgHgVgFgKQgBgFAFgDIAJgFIBFgeIAJAGIAoBhQAAADgBAEIgDAHIiAA2IgIAAQgEgBgCgDIg+ibIADgKICzhMQAKgCAGAGIBSC+QAFARgEAHIjwBrIgBAAQgIAAgHgKg");
	this.shape_26.setTransform(64.2721,130.5012);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F4AF08").s().p("AhpBzIACgLICyjOIAKgNQAHgIAIABIAGAQIjEDkIgHABg");
	this.shape_27.setTransform(53.85,112.0234);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D41317").s().p("AmViSII7j8IDwIhIo7D8g");
	this.shape_28.setTransform(73.725,119.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#383188").s().p("AhfBEIAMhZIAAgMQgIAHgJASQgLATgGAHIgEgBQgCgNABgUIACgiQgFABgEAKQgFAJgFABQgNgbAAgOIAJgDIEoAIQAEAMgNAJQgRAOgCADQgMANgNgMQgTgQgGgBIgUArIgFAIQgCAGgGgEIgGgXIgFgZQgEgCgCADIgDAHIgdA/IgJAJQgEgDABgCIADhMQgFgEgDACIgkBBQgFAHgJATQgJAQgGAIQgDAAgDgGg");
	this.shape_29.setTransform(72.3985,83.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1C1C1B").s().p("ADPDLQgTgEglABQglABgTgFIi0gIIgJgGIh6kEQgDgMAHgGIDvhqQAHACAKAPIBWC8QABAJgJAGIixBQIgJgEIhJiVQgBgEADgDIAEgGICAg7IAGADIAGAEIAsBeIgBALIhFAfIgJADQgGABgDgDIgOgdQgIgSACgNIALgGQALAAAFAPQAFARAGAEIASgJQAMgFAFgFIgahAIgEgCQgSAKgbAMIgvAVIgCADIACAGQACADACABIAvBmIAGAJICShEQAEgHgEgEIhKieIgHgEIjOBdQgCADADADIAEAFIBnDjIAFAGQAEgFAHgSQAHgOAHgEIAGAUQADAOADAHIAHgCIAfhCIAGgCQAEAMADAYQACAaADAJIAEABIAshgIAGgCIADAEIgIBXIAEAIIAHgMIAIgKIAzhkIAFgDQAEACAAAHIgBALIgUBmIAFADQAMgHALgUQANgYAFgGQADAfgCAbIACABQAMgRAIgHIAYAvIgCAIIgIACIgBAAg");
	this.shape_30.setTransform(62.105,48.6286);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F4AF08").s().p("AB+ANIkRgHIgKgGIAAgKIAGgEIEsAIIAIAPQgFAGgJAAIgRgCg");
	this.shape_31.setTransform(70.5,72.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#383188").s().p("AhZBRQAEgDAKADQALAEADgDQgkgcgOgSIACgDQAIAAAXAGQATAFALgBIgJgIIhKg0QgDgFACgCQAKABASAEIAcAHIBKARQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgDIg7gzQAAAAAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBIALgBIBDAVIAHABQAEACABgFQgUgagIgPQAAgHAGACIAJACIAuAPQAEgFABgZQAAgSARAAQAEABAWgDQAPgDAFAKIgMAQIi0DRIgIAEQgLgLgLgbg");
	this.shape_32.setTransform(24.5556,52.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1C1C1B").s().p("AhJD5IhvkIIACgLIB1iMQAJgQAagbQAZgbAJgRIADgDIAFgCIAHAEIATAxQgKABgWgDIAAADQAZAVARATQgIAAgbgGQgVgGgNAEIgBAFIBXA2IAKAHQAFAEgBAFIgHACIhqgdQgFAAgIgCIgOgCIAEAHIBEA1IABAGIgGACIhjggIgCAEQAFAIARAUQAQARAGAMIgFADIhHgVIgGAEIALASQAJAMACAGQgIADgOgFQgTgHgFAAIAAAIIBjDlIABAGQABAEADAAIDPhaIACgHIhCihQgBgFgIgDIiRA8IgEACIACAKIAtBpQAAACABADIADAGIADAAIAvgUQAbgMASgHIACgEIgdg/QgIAAgMAGIgSAIQgBAGAJAQQAIAOgIAIIgMAEQgKgHgIgSQgHgVgFgJQgBgFAFgEIAJgFIBFgeIAJAHIAoBgQAAADgBAEIgDAHIiAA3IgIgBQgEAAgCgDIg+icIADgJICzhNQAKgBAGAFIBSC/QAFAQgEAIIjwBqIgCAAQgIAAgGgKg");
	this.shape_33.setTransform(40.2221,75.984);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F4AF08").s().p("AhoBzIABgLICyjOIAKgNQAHgIAIABIAFAQIjEDkIgFABg");
	this.shape_34.setTransform(29.8,57.5234);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D41317").s().p("AmViRII7j8IDwIfIo7D8g");
	this.shape_35.setTransform(49.675,65.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#383188").s().p("AhfBEIALhZIABgMQgIAHgKASQgLATgFAHIgEgBQgCgNABgUIABgiQgEABgEAKQgFAKgFAAQgNgbAAgOQACgBAGgCIEUAHIAUACQAEALgMAJQgSAOgCAEQgLAMgNgMQgTgQgGgBIgUAsQgCAAgDAHQgDAGgFgEIgGgXIgFgZQgEgCgCAEIgEAGIgdBAIgIAHQgEgCAAgBIAEhOQgGgDgDACIgjBCIgOAZQgJAQgHAIQgDAAgCgGg");
	this.shape_36.setTransform(201.7235,221.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1C1C1B").s().p("ADPDLQgSgEgmABQglABgTgFIi0gIIgJgGIh6kEQgDgLAHgHIDwhrQAIACAIAQIBXC8QAAAIgIAHIiyBQIgJgEIhJiWQAAgDAGgJICAg7IAGADQAEABACADIAsBeIgBALIhEAfIgKADQgGABgDgEIgOgdQgIgSADgMIALgGQAKAAAFAOQAGASAFAEIASgJQAMgFAGgFIgahAIgFgCQgSAKgbAMIgvAUIgCAEIADAFQABAEACABIAvBmIAGAJIAEgCICPhDQADgGgDgEIhLieIgHgEIjOBdQgCADADADIAEAFIBnDjIAFAGQAEgEAIgTQAGgOAIgEIAFAUQADAOADAHIAHgCIAfhDIAGgBQAEAMADAYQADAaACAJIAEABIAshgIAGgDIAEAFIgIBXIADAHQADgDAEgIQAEgIAEgDIAzhjIAGgDQAEACgBAHIgBALIgUBmIAFADQAMgHALgUQANgZAFgGQADAYgBAiIABACQANgSAIgGIAXAvIgCAHQgGAEgCAAIgBgBg");
	this.shape_37.setTransform(191.4417,186.9031);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F4AF08").s().p("AB+ANIkRgHIgJgGIAAgLIAFgDIEsAJIAJAOQgFAGgKAAIgRgCg");
	this.shape_38.setTransform(199.8,210.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#383188").s().p("AhYBSQAEgFAKAEQAKADADgCQgjgcgPgSIACgEQAIABAXAGQAUAFAKgCIgJgHIhKgzQgCgHABgBQAKABASAEIAcAGIBKASQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIABgEIg7gxIgBgDIABgDIALgBIBDAWIAHABQAEABABgEQgUgagIgPQABgHAFACIAJABIAvAQQAEgFAAgYQAAgTARAAQAEABAWgDQAPgDAGAKIgMAQIi1DQIgIAFQgLgLgKgag");
	this.shape_39.setTransform(153.8929,191);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgLIB0iLQAKgRAZgaQAagbAIgRQABgCAHgDIAHAEIATAxQgLABgUgDIAAADQAaAXAQARQgJAAgagHQgVgFgNADIgCAGIBYA2IAJAHQAGAEgBAFIgHACIhrgeQgEABgJgCIgNgCIADAHIBFA1IABAFIgGADIhjggIgDADQAGAJARATQAQASAGALIgFAEIhHgVIgGADQADAHAIAMIALARQgIAEgPgGQgSgGgGAAIABAIIBjDkIABAHQAAAEADAAIDQhaIACgHIhCihQgCgGgHgCIiVA9IACALIAtBpQgBADAEAIIAEAAIAugVQAagLAUgHIACgFIgdg/QgHABgNAFIgSAJQgBAGAJAQQAHANgHAIIgMAFQgKgHgIgSQgHgVgGgKQAAgFAFgDQAHgDACgCIBFgeIAJAGIAoBhQAAAFgEAJIiBA3IgHgBQgEAAgCgDIg+icIADgJICyhNQAKgCAHAGIBRC/QAGARgEAGIjwBrIAAAAQgJAAgHgKg");
	this.shape_40.setTransform(169.5592,214.2762);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F4AF08").s().p("AhoB0IABgLICzjOIAKgOQAGgIAIABIAFARIjEDjIgFACg");
	this.shape_41.setTransform(159.1,195.7984);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D41317").s().p("AmViRII7j9IDwIgIo7D9g");
	this.shape_42.setTransform(179,203.375);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#383188").s().p("AhfBEIALhaIABgLQgIAHgKASQgLATgFAHIgEgBQgCgNABgUIABgiQgEABgEAKQgFAKgFAAQgNgbAAgOIAIgDIEUAHIAUACQAEALgMAJQgSAOgCAEQgLAMgNgMQgTgQgGgBIgUAsQgCAAgDAHQgDAGgFgEIgGgXIgFgZQgEgCgCAEIgEAGIgdA/IgIAIQgEgCAAgBIAEhOIgEgBQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAABgBAAIgjBCIgOAZQgJAQgHAIQgDAAgCgGg");
	this.shape_43.setTransform(177.6735,167.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1C1C1B").s().p("ADPDLQgSgEgmABQglABgTgFIi0gIIgJgGIh6kEQgDgLAHgHIDwhrQAIACAIAQIBXC8QAAAIgIAHIiyBQIgJgEIhJiWQAAgDAGgJICAg7IAGADQAEABACADIAsBeIgBALIhEAfIgKADQgGABgDgEIgOgdQgIgSADgMIALgGQAKAAAFAOQAGASAFADIASgIQAMgFAGgFIgahAIgFgCQgSAKgbAMIgvAUIgCADIADAGQABAEACABIAvBmIAGAJIAEgCICPhDQADgGgDgEIhLieIgHgEIjOBdQgCADADADIAEAFIBnDjIAFAGQAEgEAIgTQAGgOAIgEIAFAUQADAOADAHIAHgCIAfhDIAGgBQAEAMADAYQADAaACAJIAEABIAshgIAGgDIAEAFIgIBXIADAHQADgDAEgIQAEgIAEgDIAzhjIAGgDQAEACgBAHIgBALIgUBmIAFADQAMgHALgUQANgYAGgHQACAZgBAhIACACQALgRAJgHIAXAvIgCAHQgGAEgCAAIgBgBg");
	this.shape_44.setTransform(167.3917,132.4031);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F4AF08").s().p("AB+ANIkRgHIgJgGIAAgLIAEgDIEtAIIAJAPQgGAGgJAAIgRgCg");
	this.shape_45.setTransform(175.75,156.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#383188").s().p("AhYBSQAEgEAKADQAKADADgCQgjgcgPgSIACgDQAIAAAXAGQAUAFAKgBIgJgIIhKgzQgCgGABgCQAKABASAEIAcAGIBKASQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgDIg7gyIgBgDIABgDIALAAIBDAVIAHABQAFACAAgFQgUgagIgPQABgGAFABIAJACIAvAPQAEgEAAgZQAAgTARAAQADABAXgDQAPgDAGAKIgMAQIi1DQQgGAEgCABQgLgLgKgag");
	this.shape_46.setTransform(129.8429,136.475);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgLIB0iLQAKgRAZgaQAagbAIgRQABgCAIgDIAGADIATAyQgLABgUgDIAAADQAaAXAQARQgJAAgagHQgVgFgNADIgCAGIBYA2IAJAHQAGAEgBAFIgHACIhrgeQgFABgIgCIgNgDIADAIIBFA1IABAFIgGADIhjggIgDADQAGAJARATQAQASAGALIgFAEIhHgVIgGADQADAHAIAMIALARQgIAEgPgGQgSgGgGAAIABAIIBjDkIABAHQAAAEADAAIDQhaIACgHIhCihQgCgGgHgCIiVA9IACALIAtBpQgBADAEAIIAEAAIAugVQAagLAUgHIACgFIgdg/QgHABgNAFIgSAJQgBAGAJAQQAHANgHAIIgMAFQgKgHgIgSQgHgVgGgKQAAgFAFgDQAHgDACgCIBFgeIAJAGIAoBhQAAAFgEAJIiBA3IgHgBQgEAAgCgDIg+icIADgJICyhNQAKgCAHAGIBRC/QAGARgEAGIjwBrIAAAAQgJAAgHgKg");
	this.shape_47.setTransform(145.5092,159.7762);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F4AF08").s().p("AhpB0IACgLICyjOIALgOQAGgIAIABIAGAQIjEDkIgGACg");
	this.shape_48.setTransform(135.05,141.2984);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D41317").s().p("AmViRII7j9IDwIgIo6D9g");
	this.shape_49.setTransform(154.95,148.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#383188").s().p("AhfBEIALhaIABgLQgIAHgKASQgLAUgFAGIgEgBQgCgNABgUIABgiQgEABgEAKQgFAKgFAAQgNgaAAgPIAIgDIEUAHIAUACQAEALgMAJQgSAOgCAEQgLAMgNgMQgTgQgGgBIgUAsQgCAAgDAHQgDAGgFgEIgGgXIgFgZQgEgCgCAEIgEAGIgdA/IgIAIQgEgCAAgBIAEhOIgEgBQgBgBAAAAQgBAAgBAAQAAAAgBAAQAAAAgBABIgjBCIgOAZQgJAQgHAIQgDAAgCgGg");
	this.shape_50.setTransform(153.6235,112.775);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1C1C1B").s().p("ADPDLQgTgEglABQglABgTgFIi1gIIgJgGIh5kEQgDgMAGgGIDwhrQAJACAIAQIBWC8QAAAIgIAHIixBQIgJgEIhJiWQgBgDAHgJIB/g7IAHADQAEABACADIAsBeIgCALIhEAfIgJADQgGABgEgEIgOgdQgIgSADgMIALgGQALAAAFAOQAFASAGADIARgIQANgFAFgFIgahAIgEgCQgTAKgaAMIgvAUIgCADIACAGQACAEACABIAuBmIAHAJIAEgCICOhDQADgGgDgFIhLidIgGgEIjOBdQgCADACADIAEAFIBoDjIAFAFQADgEAIgSQAGgOAIgEIAGAUQADAOADAHIAHgCIAfhDIAFgBQAFAMACAYQADAaADAJIAEABIArhgIAHgDIADAFIgIBXIADAHQADgDAFgIQAEgIADgDIAzhjIAGgDQAEACAAAHIgBALIgUBmIAFADQALgHALgUQANgYAGgHQACAZgBAhIACACQAMgRAIgHIAYAvIgCAHQgGAEgCAAIgBgBg");
	this.shape_51.setTransform(143.3526,77.9031);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F4AF08").s().p("AB+ANIkRgHIgJgGIAAgLIAEgDIEtAJIAJAOQgGAGgJAAIgRgCg");
	this.shape_52.setTransform(151.7,101.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#383188").s().p("AhYBRQAEgDAKADQAKADAEgCIgagWQgQgNgJgLIACgDQAIAAAXAGQAUAFAKgBIgJgIIhKgzQgCgGABgCQAKABASAEIAcAGIBKASQACgBACgFIg8gyIgBgDIABgDIALAAIBDAVIAHABQAFACAAgFQgUgagIgPQABgGAFABIAJACIAvAPQAEgEAAgZQAAgTARAAQADABAXgDQAPgDAGAKIgMAQIi1DQIgIAFQgLgLgKgbg");
	this.shape_53.setTransform(105.7929,81.975);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgLIB0iLQAKgRAZgaQAagbAIgRQABgCAIgDIAGADIATAyQgLABgUgDIAAADQAXATATAVQgJAAgagHQgVgFgNADIgCAGIBYA2IAJAHQAGAEgBAFIgHACIhrgeQgFABgIgCIgNgDIADAIIBFA1IABAFIgGADIhjggIgDADQAGAJARATQAQASAGALIgFAEIhHgVIgGADQADAHAIAMIALARQgIAEgPgGQgSgGgGAAIABAHIBjDlIABAHQAAADADABIDQhaIACgIIhCigQgCgGgHgCIiVA9IACALIAtBpQgBADAEAIIAEAAIAugVQAagLAUgHIACgFIgdg/QgHABgNAFIgSAJQgBAGAJAQQAHANgHAIIgMAFQgKgHgIgSQgHgVgGgKQAAgFAFgDIAJgFIBFgeIAJAGIAoBhQAAAFgEAJIiBA3QgLgBgCgEIg+ibIADgJICyhNQAKgCAHAGIBRC/QAGARgEAGIjwBrIAAAAQgJAAgHgKg");
	this.shape_54.setTransform(121.4592,105.2762);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F4AF08").s().p("AhpB0IACgLICyjOIAKgOQAIgIAHABIAGAQIjEDkIgGACg");
	this.shape_55.setTransform(111,86.7984);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D41317").s().p("AmViRII6j9IDxIgIo6D9g");
	this.shape_56.setTransform(130.9,94.375);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#383188").s().p("AhfBEIALhaIABgLQgIAHgKASQgLAUgFAGIgEgBQgCgNABgUIABgiQgEABgEAKQgFAKgFAAQgNgaAAgPIAIgDIEUAHIAUACQAEALgMAJQgSAOgCAEQgLAMgNgMQgTgQgGgBIgUAsQgCAAgDAHQgDAGgFgEIgGgXIgFgZQgEgCgCAEIgEAGIgdA/IgIAIQgEgCAAgBIAEhOIgEgBQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAABgBAAIgjBCIgOAZQgJAQgHAIQgDAAgCgGg");
	this.shape_57.setTransform(129.5735,58.275);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1C1C1B").s().p("ADPDLQgTgEglABQglABgTgFIi1gIIgJgGIh5kEQgDgMAGgGIDwhrQAJACAIAQIBWC8QAAAIgIAHIixBQIgJgEIhJiWQgBgDAHgJIB/g7IAHADQAEABACADIAsBeIgCALIhEAfIgJADQgGABgEgEIgOgdQgIgSADgMIALgGQALAAAFAOQAFASAGADIARgIQANgFAFgFIgahAIgEgCQgTAKgaAMIgvAUIgCADIACAGQACAEACABIAuBmIAHAJIAEgCICOhDQADgGgDgFIhLidIgGgEIjOBdQgCADACADIAEAFIBoDjIAFAFQADgEAIgSQAGgOAIgEIAGAUQADAOADAHIAHgCIAfhDIAFgBQAFAMACAYQADAaADAJIAEABIArhgIAHgDIADAFIgIBXIAEAHQACgCAFgJQAEgHADgEIAzhjIAGgEQAEADAAAHIgBALIgUBmIAFADQALgHALgUQANgYAGgHQACAZgBAhIACACQAMgRAIgHIAYAvIgCAHQgGAEgCAAIgBgBg");
	this.shape_58.setTransform(119.3026,23.4031);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F4AF08").s().p("AB+ANIkRgIIgJgFIgBgLIAGgDIEsAIIAIAPQgEAGgKAAIgRgCg");
	this.shape_59.setTransform(127.65,47.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#383188").s().p("AhYBRQAEgDAKADQAKADAEgCQgkgcgPgSIACgDQAIAAAXAGQAUAFAKgBIgJgIIhKg0QgCgFABgCQAKABASAEIAcAGIBKASQACgBACgFIg8gyIgBgDIABgDIALAAIBDAVIAHABQAFACAAgFQgUgagIgPQABgGAFABIAJACIAvAPQAEgFAAgZQAAgSARAAQADABAXgEQAPgCAGAKIgMAQIi1DQIgIAFQgLgLgKgbg");
	this.shape_60.setTransform(81.7429,27.451);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgLIB0iLQAKgRAZgbQAagbAIgQQABgCAIgDIAGADIATAyQgLABgUgDIAAADQAXATATAVQgJAAgagHQgVgFgNADIgCAGIBYA2IAJAHQAGAEgBAFIgHACIhrgeQgEABgJgCIgNgDIADAIIBFA0IABAGIgGADIhjggIgDADQAGAJARATQAQASAGALIgFAEIhHgVIgGADQADAHAIAMQAJAMACAFQgIAEgOgGQgTgGgGAAIABAHIBjDlIABAHQAAADADABIDQhaIACgIIhCigQgBgGgIgCIiVA9IACALIAtBpQgBADAEAIIAEAAIAugVQAagLAUgHIACgFIgdg/QgHABgNAFIgSAJQgBAGAJAQQAHANgHAIIgMAFQgKgHgIgSQgHgVgGgKQAAgFAFgDIAJgFIBFgeIAJAGIAoBhQAAAFgEAJIiBA3QgLgBgCgEIg+ibIADgJICyhNQAKgCAHAGIBRC/QAGARgEAGIjwBrIAAAAQgJAAgHgKg");
	this.shape_61.setTransform(97.4092,50.7762);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F4AF08").s().p("AhoB0IABgLICyjOIAKgOQAIgIAHABIAFAQIjEDkIgFACg");
	this.shape_62.setTransform(86.95,32.2984);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D41317").s().p("AmViRII6j9IDxIgIo7D9g");
	this.shape_63.setTransform(106.85,39.875);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#383188").s().p("AheBEIALhZIAAgMQgIAHgJASQgLATgGAHIgEgBQgCgNABgTIACgjQgFABgEAKQgFAKgFAAQgNgbAAgOIAJgDIEoAIQAEAMgNAJQgRAOgCADQgMANgNgMQgTgQgGgBIgUArIgFAIQgCAGgGgEIgGgXIgFgZQgEgDgCAEIgDAHIgdA/IgJAIQgEgCABgBIADhNQgFgEgDACIgkBBQgFAIgJASQgJAQgGAIQgDAAgCgGg");
	this.shape_64.setTransform(258.8985,196.55);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1C1C1B").s().p("ADPDLQgTgEglABQglABgTgFIi0gIIgJgGIh6kEQgDgMAHgGIDvhqQAHACAKAPIBWC8QABAJgJAGIixBQIgJgEIhJiVQgBgEADgDIAEgGICAg7IAGADIAGAEIAsBeIgBALIhFAfIgJADQgGABgDgDIgOgdQgIgSACgNIALgGQALAAAFAPQAFARAGAEIASgJQAMgFAFgFIgahAIgEgCQgSAKgbAMIgvAVIgCADIACAGQACADACABIAvBmIAGAJICShEQAEgHgEgEIhKieIgHgEIjOBeQgCACADADIAEAFIBnDjIAFAGQAEgFAHgSQAHgOAHgEIAGAUQADAOADAHIAHgCIAfhCIAGgCQAEAMADAYQACAaADAJIAEABIAshgIAGgCIADAEIgIBXIAEAIIAHgMIAIgKIAzhkIAFgDQAEACAAAHIgBALIgUBmIAFADQAMgHALgUQANgYAFgGQADAfgCAbIACABQAMgRAIgHIAYAvIgCAIIgIACIgBAAg");
	this.shape_65.setTransform(248.605,161.6786);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F4AF08").s().p("AB9ANIkQgHIgJgGIAAgKIAEgEIEtAIIAJAPQgFAGgKAAIgSgCg");
	this.shape_66.setTransform(257,185.35);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#383188").s().p("AhZBRQAEgDAKADQALADADgCQgkgcgOgSIACgDQAIABAXAFQATAFALgBIgJgIIhKg0QgDgFACgCQAKABASAEIAcAHIBKARQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgDIg7gzQAAAAAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBIALgBIBDAVIAHABQAEACABgFQgUgagIgPQAAgHAGACIAJACIAvAPQAEgEAAgaQAAgSARAAQAEABAWgEQAPgCAFAKIgMARIi0DQIgIAEQgLgLgLgbg");
	this.shape_67.setTransform(211.0556,165.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1C1C1B").s().p("AhJD5IhvkIIACgLIB1iMQAJgQAagbQAZgbAJgRQABgDAHgCIAHAEIATAxQgKABgWgDIAAADQAZAVARATQgIAAgbgGQgVgGgNAEIgBAFIBXA2IAKAHQAFAEgBAFIgHACIhqgdQgFAAgIgCIgOgCIAEAHIBEA1IABAGIgGACIhjggIgCAEQAFAIARAUQAQARAGAMIgFADIhGgVIgHAEQADAGAIAMQAJAMACAGQgIADgOgFQgTgHgFAAIAAAIIBjDlIABAGQABAEADAAIDPhaIACgHIhCihQgBgFgIgDIiRA8IgEACIACAKIAtBpQAAACABADIADAGIADAAIAvgUQAbgMASgHIACgEIgdg/QgIAAgMAGIgSAIQgBAGAJAQQAIAOgIAIIgMAEQgKgHgIgSQgHgVgFgJQgBgFAFgEIAJgFIBFgeIAJAHIAoBgQAAADgBAEIgDAHIiAA3IgIgBQgEAAgCgDIg+icIADgJICzhNQAKgBAGAFIBSC/QAFAQgEAIIjwBqIgCAAQgIAAgGgKg");
	this.shape_68.setTransform(226.7221,189.034);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F4AF08").s().p("AhpBzIACgLICyjOIAKgNQAHgIAIABIAGAQIjEDkIgGABg");
	this.shape_69.setTransform(216.3,170.5734);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D41317").s().p("AmViRII7j8IDwIfIo7D8g");
	this.shape_70.setTransform(236.175,178.15);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#383188").s().p("AheBEIALhaIAAgLQgIAHgJASQgLATgGAHIgEAAQgCgOABgUIACgiQgFABgEAKQgFAKgFAAQgNgbAAgOIAJgDIEoAJQAEAKgNALQgRAOgCADQgMAMgNgMQgTgRgGAAIgUAsIgFAIQgCAFgGgEIgGgYIgFgYQgEgDgCAFIgDAGIgdBAIgJAHQgEgCABgBIADhOIgEgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgkBCQgFAGgJASQgJARgGAIQgDAAgCgGg");
	this.shape_71.setTransform(234.8485,142.05);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1C1C1B").s().p("ADPDLQgTgEglABQglABgTgFIi0gIIgJgGIh6kEQgDgMAHgGIDvhqQAHACAKAPIBWC8QABAJgJAGIixBQIgJgEIhJiVQgBgEADgDIAEgGICAg7IAGADIAGAEIAsBeIgBALIhFAfIgJADQgGABgDgDIgOgdQgIgSACgNIAMgGQAKAAAFAOQAFASAGAEIASgJQAMgFAFgFIgahAIgEgCQgSAKgbAMIgvAVIgCADIACAGQACADACABIAvBmIAGAJICShEQAEgHgEgEIhKieIgHgEIjOBdQgCADADADIAEAFIBnDjIAFAGQAEgFAHgSQAHgOAHgEIAGAUQADAOADAHIAHgCIAfhCIAGgCQAEAMADAYQACAaADAJIAEABIAshgIAGgCIAEAEIgJBXIAEAIIAHgMIAIgKIAzhkIAFgDQAEACAAAHIgBALIgUBmIAFADQAMgHALgUQAMgZAGgGQADAggCAbIACABQAMgRAIgHIAYAvIgCAIIgJACIAAAAg");
	this.shape_72.setTransform(224.555,107.1786);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F4AF08").s().p("AB+ANIkRgHIgKgGIAAgLIAGgDIEsAJIAIAOQgFAGgJAAIgRgCg");
	this.shape_73.setTransform(232.95,130.85);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#383188").s().p("AhZBSQAEgEAKADQALADADgCQgkgdgOgRIACgDQAJABAWAFQATAFALgBIgJgHIhKg0QgDgGACgCQAKABASAEIAcAGIBKASQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgEIg7gxQgBgBABgFIALgBIBDAWIAHACQAEAAABgEQgUgagIgPQAAgGAGABIAJACIAvAPQAEgFAAgYQAAgTARABQAEABAWgFQAPgCAFAKIgMAQIi0DQIgIAFQgKgJgMgcg");
	this.shape_74.setTransform(187.0056,111.25);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1C1C1B").s().p("AhJD5IhvkIIACgLIB1iMQAJgQAagbQAZgbAJgRQABgCAHgDIAHAEIATAxQgKABgWgDIAAADQAZAVARATQgIAAgbgGQgVgGgNAEIgBAFIBXA2QADADAHAEQAFAEgBAFIgHACIhqgdQgFAAgIgCIgOgCIAEAHIBEA1IABAGIgGACIhjggIgCADQAFAJARAUQAQASAGALIgFADIhGgVIgHAEQADAHAIALIAMASQgIADgPgFQgTgHgFAAIAAAIIBjDlIABAGQAAAEAEAAIDPhaIACgHIhCihQgBgFgIgDIiRA8IgEACIACAKIAtBpQAAACABADIADAGIADAAIAvgUQAbgMASgHIACgEIgdg/QgIAAgMAGIgSAIQgBAGAJAQQAIAOgIAIIgMAEQgKgHgIgSQgHgVgFgJQgBgFAFgEIAJgFIBFgeIAJAHIAoBgQAAADgBAEIgDAHIiAA3IgIgBQgEAAgCgDIg+icIADgJICzhNQAKgBAGAFIBSC/QAFARgEAHIjwBqIgBAAQgJAAgGgKg");
	this.shape_75.setTransform(202.6842,134.5262);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F4AF08").s().p("AhoBzIABgLICzjOIAJgOQAHgHAIABIAFAQIjEDkIgFABg");
	this.shape_76.setTransform(192.25,116.0733);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D41317").s().p("AmViSII7j8IDwIhIo7D8g");
	this.shape_77.setTransform(212.125,123.65);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#383188").s().p("AheBEIALhZIAAgMQgIAHgJARQgLAUgGAGIgEAAQgCgNABgUIACgiQgFABgEAKQgFAJgFABQgMgZgBgQIAJgDIEoAIQAEAMgNAJQgRAOgCADQgMANgNgMQgTgQgGgBIgUArIgFAIQgCAGgGgEIgGgXIgFgZQgEgCgCADIgDAHIgdBAIgJAIQgEgDABgCIADhMIgEgCQgBAAAAAAQgBgBAAAAQgBAAAAABQgBAAAAAAIgkBBQgFAHgJATQgJAQgGAIQgDAAgCgGg");
	this.shape_78.setTransform(210.7985,87.55);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#1C1C1B").s().p("ADPDLQgTgEglABQglABgTgFIi0gIIgJgGIh6kEQgDgMAHgGIDwhqQAGACAKAPIBWC8QABAJgIAGIiyBQIgJgEIhJiVQgBgEADgDIAEgGICAg7IAGADIAGAEIAsBeIgBALIhFAfIgJADQgGABgDgDIgOgdQgIgSACgNIAMgGQAKAAAFAOQAFASAGAEIASgJQAMgFAFgFIgahAIgEgCQgSAKgbAMIgvAVIgCADIACAGQACADACABIAvBmIAGAJICShFQAEgGgEgEIhKieIgHgEIjOBdQgCADADADIAEAFIBnDjIAFAGQAEgEAHgTQAHgOAHgEIAGAUQADAOADAHIAHgCIAfhCIAGgCQAEAMADAYQACAZADAKIAEABIAshgIAGgCIAEAEIgJBXIAEAIIAHgMIAIgKIAzhkIAFgDQAFACgBAHIgBALIgUBmIAFADQAMgHALgUQAMgZAGgGQADAggCAbIACABQAMgRAIgHIAYAvIgCAIIgEACIgEAAIgBAAg");
	this.shape_79.setTransform(200.505,52.6833);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F4AF08").s().p("AB+ANIkRgHIgKgGIAAgKIAGgEIEsAIIAIAPQgEAGgLAAIgQgCg");
	this.shape_80.setTransform(208.9,76.35);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#383188").s().p("AhZBRQAEgDAKADQALAEADgDQgkgcgOgSIACgDQAJAAAWAGQATAFALgBIgJgIIhKg0QgDgFACgCQAKABASAEQAUAFAIABIBKASQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIABgDIg7gzQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBIALgBIBDAVIAHABQAEACABgFQgUgagIgPQAAgHAGACIAJACIAvAPQAEgEAAgaQAAgSARAAQAEABAWgDQAPgDAGAKIjBDhIgIAEQgKgKgMgcg");
	this.shape_81.setTransform(162.9806,56.75);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgKIB1iMQAJgQAagbQAZgbAJgRQABgCAHgDIAHAEIATAxQgKABgWgDIAAADQAZAVARATQgIAAgbgGQgVgGgNAEIgBAFIBYA2IAJAHQAFAEgBAFIgHACIhqgdQgFAAgIgCIgOgCIAEAHIBEA1IABAGIgGACIhjggIgCADQAFAJARAUQAQASAGALIgFADIhGgVIgHAEQADAHAIALIAMASQgIADgPgFQgTgHgFAAIAAAIIBjDkIABAHQAAAEAEAAIDPhaIACgHIhCihQgBgFgIgDIiRA8IgEACIACAKIAtBpQAAACABADIADAGIADAAIAvgUQAbgMASgHIACgEIgdg/QgIAAgMAGIgSAIQgBAGAJAQQAIAOgIAIIgMAEQgKgHgIgSQgHgVgFgJQgBgFAFgEIAJgFIBFgeIAJAHIAoBgQAAADgBAEIgDAHIiAA3IgIgBQgEAAgCgDIg+icIADgJICzhNQAKgBAGAFIBSC/QAFARgEAHIjwBqIgBAAQgJAAgGgKg");
	this.shape_82.setTransform(178.6342,80.0262);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F4AF08").s().p("AhoBzIABgLICzjOIAKgOQAGgHAHABIAGAQIjEDkIgFABg");
	this.shape_83.setTransform(168.2,61.5733);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D41317").s().p("AmViRII7j8IDwIfIo7D8g");
	this.shape_84.setTransform(188.075,69.15);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#383188").s().p("AhfBEIALhaIABgLQgIAHgKASQgLAUgFAGIgEgBQgCgNABgUIABgiQgEABgEAKQgFAKgFAAQgNgaAAgPIAIgDIEUAHIAUACQAEALgMAJQgSAOgCAEQgLAMgNgMQgTgQgGgBIgUAsQgCAAgDAHQgDAGgFgEIgGgXIgFgZQgEgCgCAEIgEAGIgdA/IgIAIQgEgCAAgBIAEhOIgEgBQgBgBAAAAQgBAAgBAAQAAAAgBAAQAAAAgBABIgjBCQgFAGgJASQgJARgHAIQgDAAgCgGg");
	this.shape_85.setTransform(292.0235,116.825);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1C1C1B").s().p("ADPDLQgTgEglABQglABgTgFIi1gIIgJgGIh5kEQgDgMAGgGIDwhrQAJACAIAQIBWC8QAAAIgIAHIixBQIgJgEIhJiWQgBgEAHgIIB/g7IAHADQAEABACADIAsBeIgCALIhEAfIgJADQgGABgEgEIgOgdQgIgSADgMIALgGQALAAAFAOQAFASAGADIARgIQANgFAFgFIgahAIgEgCQgTAKgaAMIgvAUIgCADIACAGQACAEACABIAuBmIAHAJIAEgCICOhDQAEgFgEgGIhLidIgGgEIjOBdQgCADACADIAEAFIBoDjIAFAFQADgEAIgSQAGgPAIgDIAGAUQADAOADAHIAHgCIAfhDIAFgBQAFAMACAYQADAaADAJIAEABIArhgIAHgDIADAFIgIBXIAEAHQACgCAFgJQAEgHADgEIAzhjIAGgEQAEADAAAHIgBALIgUBmIAFADQALgHALgUQANgYAGgHQACAZgBAhIACACQAMgRAIgHIAYAvIgCAHIgFACIgDACIgBgBg");
	this.shape_86.setTransform(281.7526,81.9563);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F4AF08").s().p("AB+ANIkRgIIgJgFIgBgLIAGgDIEsAJIAIAOQgEAGgKAAIgRgCg");
	this.shape_87.setTransform(290.1,105.65);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#383188").s().p("AhYBRQAEgDAKADQAKADAEgCQgkgcgPgSIACgDQAIAAAXAGQAUAFAKgBIgIgIIhLg0QgDgFACgCQALABARAEIAcAGIBKASQACgBACgFIg8gyIgBgDIABgDIALAAIBDAVIAHABQAFACAAgFQgUgagIgPQABgGAFABIAJACIAvAPQAEgFAAgZQAAgSARAAQADABAXgEQAPgCAGAKIgMAQIi1DQIgIAFQgLgLgKgbg");
	this.shape_88.setTransform(244.185,86.001);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgLIB0iLQAKgRAZgbQAagbAIgQQABgCAIgDIAGADIATAyQgLABgUgDIAAADQAXATATAVQgIAAgbgHQgVgFgNADIgCAGIBYA2IAJAHQAGAEgBAFIgHABIhrgdQgEABgJgCIgNgDIADAIIBFA0IABAGIgGADIhjggIgDADQAGAJARATQAQASAGALIgFAEIhHgVIgGADIALATQAJAMACAFQgIAEgOgGQgTgGgGAAIABAHIBjDlIABAHQAAADADABIDQhaIACgIIhCigQgBgGgIgCIiVA9IACALIAtBoQgBAEAEAIIAEAAIAugVQAagLAUgHIACgFIgdg/QgHABgNAFIgSAJQgBAGAJAQQAHANgHAIIgMAFQgKgHgIgSQgHgVgGgKQAAgFAFgDIAJgFIBFgeIAJAGIAoBhQAAAFgEAJIiBA3QgLgBgCgEIg+ibIADgJICyhNQAKgCAHAGIBRC/QAGARgEAGIjwBrIAAAAQgJAAgHgKg");
	this.shape_89.setTransform(259.8592,109.3262);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F4AF08").s().p("AhoBzIABgKICyjOIAKgOQAIgIAHABIAFAQIjEDkIgFACg");
	this.shape_90.setTransform(249.4,90.8484);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D41317").s().p("AmViRII6j9IDxIgIo7D9g");
	this.shape_91.setTransform(269.3,98.425);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#383188").s().p("AhfBEIALhaIABgLQgIAHgKASQgLAUgFAGIgEgBQgCgNABgUIABgiQgEABgEAKQgFAKgFAAQgNgaAAgPIAIgDIEUAHIAUACQAEALgMAJQgSAOgCAEQgLAMgNgMQgTgQgGgBIgUAsQgCAAgDAHQgDAGgFgEIgGgXIgFgZQgEgCgCAEIgEAGIgdA/IgIAIQgEgCAAgBIAEhOIgEgBQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAABgBAAIgjBCQgFAGgJASQgJARgHAIQgDAAgCgGg");
	this.shape_92.setTransform(267.9735,62.325);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1C1C1B").s().p("ADPDLQgTgEglABQglABgTgFIi1gIIgJgGIh5kEQgDgMAGgGIDwhrQAJACAIAQIBWC8QABAIgJAHIixBQIgJgEIhJiWQgBgDADgDIAEgGICAg7IAGADQAEABACADIAsBeIgCALIhEAfIgJADQgGABgEgEIgOgdQgIgSADgMIALgGQALAAAFAOQAFASAGADIARgIQANgFAFgFIgahAIgEgCQgTAKgaAMIgvAUIgCADIACAGQACADACABIAuBnIAHAJIAEgCICOhDQAEgFgEgGIhLidIgGgEIjOBdQgCADACADIAEAFIBoDjIAFAFQADgEAIgSQAGgPAIgDIAGAUQADAOADAHIAHgCIAfhDIAGgBQAEAMACAYQADAZADAKIAEABIArhgIAHgDIADAFIgIBXIAEAHQACgCAFgJQAEgHADgEIAzhjIAGgEQAEADAAAHIgBALIgUBmIAFADQALgHALgUQANgYAGgHQACAZgBAhIACACQAMgRAIgHIAYAvIgCAHIgFACIgDACIgBgBg");
	this.shape_93.setTransform(257.7026,27.4563);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F4AF08").s().p("AB+ANIkRgHIgJgGIgBgLIAGgDIEsAJIAIAOQgEAGgKAAIgRgCg");
	this.shape_94.setTransform(266.05,51.125);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#383188").s().p("AhYBRQAEgDAKADQAKADAEgCQgkgcgPgSIACgDQAIAAAXAGQAUAFAKgBIgIgIIhLg0QgDgFACgCQAKABATAEQATAFAJABIBJASQACgBACgFIg8gyIgBgDIABgDIALAAIBDAVIAHABQAFACAAgFQgUgagIgPQABgGAFABIAJACIAvAPQAEgFAAgZQAAgSARAAQADABAXgEQAPgCAGAKIgMAQIi1DQIgIAFQgLgLgKgbg");
	this.shape_95.setTransform(220.135,31.501);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgLIB0iLQAKgRAZgbQAagaAIgRQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAIAFgCIAGADIATAyQgLABgUgDIAAADQAXATATAVQgIAAgbgHQgVgFgNADIgCAGIBYA2IAJAHQAGAEgBAFIgHABIhrgdQgEABgJgCIgNgDIADAIIBFA0IABAGIgGADIhjggIgDADQAGAJARATQAQASAGALIgFAEIhHgVIgGADIALATQAJAMACAFQgIADgOgFQgTgGgGAAIABAHIBjDlIABAHQAAADAEABIDPhaIACgIIhCigQgBgGgIgCIiVA9IACALIAtBoQgBAEAEAIIAEAAIAugVQAagLAUgHIACgFIgdg/QgHABgNAFIgSAJQgBAGAJAQQAHANgHAIIgMAEQgKgGgIgSQgHgVgGgKQAAgFAFgDIAJgFIBFgeIAJAGIAoBhQAAAFgEAJIiBA3QgLgBgCgEIg+ibIADgJICzhNQAJgCAHAGIBRC/QAGAQgEAHIjwBrIAAAAQgJAAgHgKg");
	this.shape_96.setTransform(235.8092,54.8012);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F4AF08").s().p("AhoBzIABgKICzjOIAKgOQAGgIAIABIAFAQIjEDkIgFACg");
	this.shape_97.setTransform(225.35,36.3484);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D41317").s().p("AmViRII7j9IDwIgIo7D9g");
	this.shape_98.setTransform(245.25,43.925);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(65.2,74,179.7,122.5), null);


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
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AlyCMQhogrgfhDQgphWCjgzQCbgxFkgFQCygDCTAIIAKACQALAEAJAIQAfAaAAA8QACBTgTAvQgYA6g5ALQhTAOkxAFIhaABQj9AAg3gXg");
	mask_2.setTransform(79.6775,63.4998);

	// Vrstva_3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383188").s().p("AhfBEIALhZIABgMQgIAHgKASQgLATgFAHIgEgBQgCgNABgUIABgiQgEABgEAKQgFAKgFAAQgNgbAAgOIAIgDIEUAHIAUACQAEALgMAJQgSAOgCAEQgLAMgNgMQgTgQgGgBIgUAsQgCAAgDAHQgDAGgFgEIgGgXIgFgZQgEgCgCAEIgEAGIgdBAIgIAHQgEgCAAgBIAEhOQgGgDgDACIgjBCIgOAZQgJAQgHAIQgDAAgCgGg");
	this.shape_11.setTransform(87.3735,137.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C1C1B").s().p("ADPDLQgSgEgmABQglABgTgFIi0gIIgJgGIh6kEQgDgLAHgHIDwhrQAIACAIAQIBXC8QAAAIgIAHIiyBQIgJgEIhJiWQAAgDAGgJICAg7IAGADQAEABACADIAsBeIgBALIhEAfIgKADQgGABgDgEIgOgdQgIgSADgMIALgGQAKAAAFAOQAGASAFAEIASgJQAMgFAGgFIgahAIgFgCQgSAKgbAMIgvAUIgCAEIADAFQABAEACABIAvBmIAGAJIAEgCICPhDQADgGgDgEIhLieIgHgEIjOBdQgCADADADIAEAFIBnDjIAFAGQAEgEAIgTQAGgOAIgEIAFAUQADAOADAHIAHgCIAfhDIAGgBQAEAMADAYQADAaACAJIAEABIAshgIAGgDIAEAFIgIBXIADAHQADgDAEgIQAEgIAEgDIAzhjIAGgDQAEACgBAHIgBALIgUBmIAFADQAMgHALgUQANgZAFgGQADAYgBAiIABACQANgSAIgGIAXAvIgCAHQgGAEgCAAIgBgBg");
	this.shape_12.setTransform(77.0917,103.1031);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4AF08").s().p("AB+ANIkRgHIgJgGIgBgLIAFgDIEtAJIAIAOQgEAGgKAAIgRgCg");
	this.shape_13.setTransform(85.45,126.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#383188").s().p("AhYBSQAEgFAKAEQAKADADgCQgjgdgPgRIACgEQAIABAXAGQAUAFAKgCIgJgHIhKgzQgCgHABgBQAKABASAEIAcAGIBKASQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIABgEIg7gxIgBgDIABgDIALgBIBDAVIAHACQAEABABgEQgUgagIgPQABgHAFACIAJABIAvAQQAEgFAAgYQAAgTARAAQAEABAWgEQAPgCAGAKIgMAQIi1DQIgIAFQgLgLgKgag");
	this.shape_14.setTransform(39.5429,107.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgLIB0iLQAKgRAZgaQAagbAIgRQABgCAHgDIAHAEIATAxQgLABgUgDIAAADQAaAXAQARQgJAAgagHQgVgFgNADIgCAGIBYA2IAJAHQAGAEgBAFIgHACIhrgeQgEABgJgCIgNgCIADAHIBFA1IABAFIgGADIhjggIgDADQAGAJARATQAQASAGALIgFAEIhHgVIgGADQADAHAIAMIALARQgIAEgPgGQgSgGgGAAIABAIIBjDkIABAHQAAAEADAAIDQhaIACgHIhCihQgCgGgHgCIiVA9IACALIAtBpQgBADAEAIIAEAAIAugVQAagLAUgHIACgFIgdg/QgHABgNAFIgSAJQgBAGAJAQQAHANgHAIIgMAFQgKgHgIgSQgHgVgGgKQAAgFAFgDQAHgDACgCIBFgeIAJAGIAoBhQAAAFgEAJIiBA3IgHgBQgEAAgCgDIg+icIADgJICyhNQAKgCAHAGIBRC/QAGARgEAGIjwBrIAAAAQgJAAgHgKg");
	this.shape_15.setTransform(55.2092,130.4762);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F4AF08").s().p("AhoB0IABgLICyjOIAKgOQAIgIAHABIAFARIjDDjIgGACg");
	this.shape_16.setTransform(44.75,111.9984);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D41317").s().p("AmViRII6j9IDxIgIo7D9g");
	this.shape_17.setTransform(64.65,119.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#383188").s().p("AhfBEIALhaIABgLQgIAHgKASQgLATgFAHIgEgBQgCgNABgUIABgiQgEABgEAKQgFAKgFAAQgNgbAAgOIAIgDIEUAHIAUACQAEALgMAJQgSAOgCAEQgLAMgNgMQgTgQgGgBIgUAsQgCAAgDAHQgDAGgFgEIgGgXIgFgZQgEgCgCAEIgEAGIgdA/IgIAIQgEgCAAgBIAEhOIgEgBQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAABgBAAIgjBCIgOAZQgJAQgHAIQgDAAgCgGg");
	this.shape_18.setTransform(63.3235,83.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1C1C1B").s().p("ADPDLQgSgEgmABQglABgTgFIi0gIIgJgGIh6kEQgDgLAHgHIDwhrQAIACAIAQIBXC8QAAAIgIAHIiyBQIgJgEIhJiWQAAgDAGgJICAg7IAGADQAEABACADIAsBeIgBALIhEAfIgKADQgGABgDgEIgOgdQgIgSADgMIALgGQAKAAAFAOQAGASAFADIASgIQAMgFAGgFIgahAIgFgCQgSAKgbAMIgvAUIgCADIADAGQABAEACABIAvBmIAGAJIAEgCICPhDQADgGgDgEIhLieIgHgEIjOBdQgCADADADIAEAFIBnDjIAFAGQAEgEAIgTQAGgOAIgEIAFAUQADAOADAHIAHgCIAfhDIAGgBQAEAMADAYQADAaACAJIAEABIAshgIAGgDIAEAFIgIBXIADAHQADgDAEgIQAEgIAEgDIAzhjIAGgDQAEACgBAHIgBALIgUBmIAFADQAMgHALgUQANgYAGgHQACAZgBAhIACACQALgRAJgHIAXAvIgCAHQgGAEgCAAIgBgBg");
	this.shape_19.setTransform(53.0417,48.6031);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4AF08").s().p("AB+ANIkRgHIgJgGIgBgLIAGgDIEsAIIAIAPQgEAGgKAAIgRgCg");
	this.shape_20.setTransform(61.4,72.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#383188").s().p("AhYBSQAEgEAKADQAKADADgCQgjgcgPgSIACgDQAIAAAXAGQAUAFAKgBIgJgIIhKgzQgCgGABgCQAKABASAEIAcAGIBKASQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgDIg7gyIgBgDIABgDIALAAIBDAVIAHABQAFACAAgFQgUgagIgPQABgGAFABIAJACIAvAPQAEgEAAgZQAAgTARAAQADABAXgDQAPgDAGAKIgMAQIi1DQQgGAEgCABQgLgLgKgag");
	this.shape_21.setTransform(15.4929,52.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1C1C1B").s().p("AhJD5IhvkJIACgLIB0iLQAKgRAZgaQAagbAIgRQABgCAIgDIAGADIATAyQgLABgUgDIAAADQAaAXAQARQgJAAgagHQgVgFgNADIgCAGIBYA2IAJAHQAGAEgBAFIgHACIhrgeQgFABgIgCIgNgDIADAIIBFA1IABAFIgGADIhjggIgDADQAGAJARATQAQASAGALIgFAEIhHgVIgGADQADAHAIAMIALARQgIAEgPgGQgSgGgGAAIABAIIBjDkIABAHQAAAEADAAIDQhaIACgHIhCihQgCgGgHgCIiVA9IACALIAtBpQgBADAEAIIAEAAIAugVQAagLAUgHIACgFIgdg/QgHABgNAFIgSAJQgBAGAJAQQAHANgHAIIgMAFQgKgHgIgSQgHgVgGgKQAAgFAFgDQAHgDACgCIBFgeIAJAGIAoBhQAAAFgEAJIiBA3IgHgBQgEAAgCgDIg+icIADgJICyhNQAKgCAHAGIBRC/QAGARgEAGIjwBrIAAAAQgJAAgHgKg");
	this.shape_22.setTransform(31.1592,75.9762);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F4AF08").s().p("AhoB0IABgLICzjOIAKgOQAHgIAHABIAFAQIjEDkIgFACg");
	this.shape_23.setTransform(20.7,57.4984);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D41317").s().p("AmViRII6j9IDxIgIo7D9g");
	this.shape_24.setTransform(40.6,65.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#383188").s().p("AheBEIALhZIAAgMQgIAHgJASQgLATgGAHIgEgBQgCgNABgUIACgiQgFABgEAKQgFAJgFABQgNgbAAgOIAJgDIEoAIQAEAMgNAJQgRAOgCADQgMANgNgMQgTgQgGgBIgUArIgFAIQgCAGgGgEIgGgXIgFgZQgEgCgCADIgDAHIgdA/IgJAJQgEgDABgCIADhMQgFgEgDACIgkBBQgFAHgJATQgJAQgGAIQgDAAgCgGg");
	this.shape_25.setTransform(144.5485,112.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1C1C1B").s().p("ADPDLQgTgEglABQglABgTgFIi0gIIgJgGIh6kEQgDgMAHgGIDvhqQAHACAKAPIBWC8QABAJgJAGIixBQIgJgEIhJiVQgBgEADgDIAEgGICAg7IAGADIAGAEIAsBeIgBALIhFAfIgJADQgGABgDgDIgOgdQgIgSACgNIALgGQALAAAFAPQAFARAGAEIASgJQAMgFAFgFIgahAIgEgCQgSAKgbAMIgvAVIgCADIACAGQACADACABIAvBmIAGAJICShEQAEgHgEgEIhKieIgHgEIjOBeQgCACADADIAEAFIBnDjIAFAGQAEgFAHgSQAHgOAHgEIAGAUQADAOADAHIAHgCIAfhCIAGgCQAEAMADAYQACAaADAJIAEABIAshgIAGgCIADAEIgIBXIAEAIIAHgMIAIgKIAzhkIAFgDQAEACAAAHIgBALIgUBmIAFADQAMgHALgUQANgYAFgGQADAfgCAbIACABQAMgRAIgHIAYAvIgCAIIgIACIgBAAg");
	this.shape_26.setTransform(134.255,77.8786);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F4AF08").s().p("AB9ANIkQgHIgJgGIAAgKIAFgEIEsAIIAIAPQgEAGgLAAIgRgCg");
	this.shape_27.setTransform(142.65,101.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#383188").s().p("AhZBRQAEgDAKADQALAEADgDQgkgcgOgSIACgDQAIAAAXAGQATAFALgBIgJgHIhKg1QgDgFACgCQAKABASAEIAcAHIBKARQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgDIg7gzQAAAAAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBIALgBIBDAVIAHABQAEACABgFQgUgagIgPQAAgHAGACIAJACIAvAPQAEgEAAgaQAAgSARAAQAEABAWgDQAPgDAFAKIgMARIi0DQIgIAEQgLgLgLgbg");
	this.shape_28.setTransform(96.7056,81.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1C1C1B").s().p("AhJD5IhvkIIACgLIB1iMQAJgQAagbQAZgbAJgRQABgDAHgCIAHAEIATAxQgKABgWgDIAAADQAZAVARATQgIAAgbgGQgVgGgNAEIgBAFIBXA2IAKAHQAFAEgBAFIgHACIhqgdQgFAAgIgCIgOgCIAEAHIBEA1IABAGIgGACIhjggIgCAEQAFAIARAUQAQARAGAMIgFADIhGgVIgHAEIALASQAJAMACAGQgIADgOgFQgTgHgFAAIAAAIIBjDlIABAGQABAEADAAIDPhaIACgHIhCihQgBgFgIgDIiRA8IgEACIACAKIAtBpQAAACABADIADAGIADAAIAvgUQAbgMASgHIACgEIgdg/QgIAAgMAGIgSAIQgBAGAJAQQAIAOgIAIIgMAEQgKgHgIgSQgHgVgFgJQgBgFAFgEIAJgFIBFgeIAJAHIAoBgQAAADgBAEIgDAHIiAA3IgIgBQgEAAgCgDIg+icIADgJICzhNQAKgBAGAFIBSC/QAFAQgEAIIjwBqIgCAAQgIAAgGgKg");
	this.shape_29.setTransform(112.3721,105.234);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4AF08").s().p("AhoBzIABgLICzjOIAKgNQAGgIAHABIAGAQIjEDkIgGABg");
	this.shape_30.setTransform(101.95,86.7734);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D41317").s().p("AmViRII7j8IDwIfIo7D8g");
	this.shape_31.setTransform(121.825,94.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#383188").s().p("AheBEIALhaIAAgLQgIAHgJASQgLATgGAHIgEAAQgCgOABgTIACgjQgFABgEAKQgFAJgFABQgNgbAAgOIAJgDIEoAIQAEALgNALQgRANgCAEQgMAMgNgMQgTgRgGAAIgUAsIgFAIQgCAFgGgEIgGgYIgFgYQgEgDgCAFIgDAGIgdA/IgJAIQgEgCABgBIADhOIgEgBQgBAAAAAAQgBgBAAAAQgBAAAAABQgBAAAAAAIgkBBQgFAIgJARQgJARgGAIQgDgBgCgFg");
	this.shape_32.setTransform(120.4985,58.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1C1C1B").s().p("ADPDLQgTgEglABQglABgTgFIi0gIIgJgGIh6kEQgDgMAHgGIDvhqQAHACAKAPIBWC8QABAJgJAGIixBQIgJgEIhJiVQgBgEADgDIAEgGICAg7IAGADIAGAEIAsBeIgBALIhFAfIgJADQgGABgDgDIgOgdQgIgSACgNIAMgGQAKAAAFAOQAFASAGAEIASgJQAMgFAFgFIgahAIgEgCQgSAKgbAMIgvAVIgCADIACAGQACADACABIAvBmIAGAJICShEQAEgHgEgEIhKieIgHgEIjOBdQgCADADADIAEAFIBnDjIAFAGQAEgFAHgSQAHgOAHgEIAGAUQADAOADAHIAHgCIAfhCIAGgCQAEAMADAYQACAaADAJIAEABIAshgIAGgCIAEAEIgJBXIAEAIIAHgMIAIgKIAzhkIAFgDQAEACAAAHIgBALIgUBmIAFADQAMgHALgUQAMgZAGgGQADAggCAbIACABQAMgRAIgHIAYAvIgCAIIgJACIAAAAg");
	this.shape_33.setTransform(110.205,23.3786);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F4AF08").s().p("AB9ANIkQgHIgJgGIAAgLIAEgDIEtAJIAJAOQgGAGgKAAIgRgCg");
	this.shape_34.setTransform(118.6,47.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#383188").s().p("AhZBSQAEgEAKADQALADADgCQgkgdgOgRIACgDQAJABAWAFQATAFALgBIgJgIIhKgzQgDgGACgCQAKAAASAFIAcAHIBKARQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgEIg7gxQgBgCABgEIALAAIBDAVIAHACQAEABABgFQgUgagIgPQAAgHAGACIAJACIAvAPQAEgEAAgZQAAgTARABQAEABAWgFQAPgCAFAKIgMAQIi0DQIgIAFQgKgJgMgcg");
	this.shape_35.setTransform(72.6556,27.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1C1C1B").s().p("AhJD5IhvkIIACgLIB1iMQAJgQAagbQAZgbAJgRQABgCAHgDIAHAEIATAxQgKABgWgDIAAADQAZAVARATQgIAAgbgGQgVgGgNAEIgBAFIBXA2QADADAHAEQAFAEgBAFIgHACIhqgdQgFAAgIgCIgOgCIAEAHIBEA1IABAGIgGACIhjggIgCADQAFAJARAUQAQASAGALIgFADIhGgVIgHAEQADAHAIALIAMASQgIADgPgFQgTgHgFAAIAAAIIBjDlIABAGQAAAEAEAAIDPhaIACgHIhCihQgBgFgIgDIiRA8IgEACIACAKIAtBpQAAACABADIADAGIADAAIAvgUQAbgMASgHIACgEIgdg/QgIAAgMAGIgSAIQgBAGAJAQQAIAOgIAIIgMAEQgKgHgIgSQgHgVgFgJQgBgFAFgEIAJgFIBFgeIAJAHIAoBgQAAADgBAEIgDAHIiAA3IgIgBQgEAAgCgDIg+icIADgJICzhNQAKgBAGAFIBSC/QAFARgEAHIjwBqIgBAAQgJAAgGgKg");
	this.shape_36.setTransform(88.3342,50.7262);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F4AF08").s().p("AhpBzIACgLICyjOIALgOQAGgHAHABIAHAQIjEDkIgHABg");
	this.shape_37.setTransform(77.9,32.2733);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D41317").s().p("AmViSII7j8IDwIhIo7D8g");
	this.shape_38.setTransform(97.775,39.85);

	var maskedShapeInstanceList = [this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(28.3,47.3,102.8,32.5), null);


(lib.Cedule = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E6E6E6").s().p("ApkJhQgggSgHgjIiOqKQgHgeAPgbQAQgaAdgKITvmsQAhgLAfAQQAeARAKAhICmJmQAIAfgPAcQgOAbgeALI0HHQQgOAFgOAAQgUAAgTgLg");
	this.shape.setTransform(79.6055,62.0071);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D4728").s().p("AB3IRIkGu3QgKgkATgiQATghAkgKQApgMAjAYQAjAZAEApIBwPVQABAGgEAEQgEAFgGABIgDAAQgKAAgDgLg");
	this.shape_1.setTransform(93.7376,140.3221);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cedule, new cjs.Rectangle(0,0,159.2,194.3), null);


(lib.Vrsek = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path_2_1();
	this.instance.setTransform(16.3,3.2,1,1,0,0,0,16.3,3.2);
	this.instance.alpha = 0.3008;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD9D45").s().p("AiihKIFFgnIgPDVIj9ANg");
	this.shape.setTransform(16.3,11.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Vrsek, new cjs.Rectangle(0,0,32.6,22.7), null);


(lib.RukaCelek = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Krem
	this.instance = new lib.Krem();
	this.instance.setTransform(105.55,-100.45,1,1,0,0,0,106,70.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({x:101.3,y:-99.1,alpha:0.1111},0).wait(1).to({x:97.05,y:-97.75,alpha:0.2222},0).wait(1).to({x:92.75,y:-96.45,alpha:0.3333},0).wait(1).to({x:88.5,y:-95.1,alpha:0.4444},0).wait(1).to({x:84.25,y:-93.75,alpha:0.5556},0).wait(1).to({x:79.95,y:-92.45,alpha:0.6667},0).wait(1).to({x:75.7,y:-91.1,alpha:0.7778},0).wait(1).to({x:71.45,y:-89.75,alpha:0.8889},0).wait(1).to({x:67.15,y:-88.45,alpha:1},0).wait(1).to({x:62.9,y:-87.1},0).wait(1).to({x:58.65,y:-85.75},0).wait(1).to({x:54.35,y:-84.45},0).wait(1).to({x:50.1,y:-83.1},0).wait(1).to({x:45.85,y:-81.75},0).wait(1).to({x:41.55,y:-80.45},0).wait(1).to({x:46.6,y:-81.55},0).wait(1).to({x:51.65,y:-82.7},0).wait(1).to({x:56.7,y:-83.85},0).wait(1).to({x:61.75,y:-85},0).wait(1).to({x:66.8,y:-86.15},0).wait(1).to({x:71.85,y:-87.3},0).wait(1).to({x:71.8},0).wait(1).to({x:71.75},0).wait(1).to({x:71.65},0).wait(1).to({x:71.6},0).wait(1).to({x:71.55},0).wait(1).to({x:71.45},0).wait(1).to({x:71.4},0).wait(1).to({x:71.35},0).wait(1).to({x:71.25},0).wait(1).to({x:74.05,y:-88.6},0).wait(1).to({x:76.85,y:-89.9},0).wait(1).to({x:79.6,y:-91.2},0).wait(1).to({x:82.4,y:-92.5},0).wait(1).to({x:85.2,y:-93.8},0).wait(1).to({x:87.95,y:-95.1},0).wait(1).to({x:90.75,y:-96.4},0).wait(1).to({x:93.55,y:-97.7},0).wait(1).to({x:96.35,y:-99.05},0).wait(1).to({x:99.1,y:-100.35},0).wait(1).to({x:101.9,y:-101.65},0).wait(1).to({x:104.7,y:-102.95},0).wait(1).to({x:107.4,y:-104.25},0).wait(1).to({x:110.2,y:-105.55},0).wait(1).to({x:113,y:-106.85},0).wait(1).to({x:115.75,y:-108.15},0).wait(1).to({x:118.55,y:-109.5},0).wait(1).to({x:121.35,y:-110.8},0).wait(1).to({x:124.1,y:-112.1},0).wait(1).to({x:126.9,y:-113.4},0).wait(1).to({x:129.7,y:-114.7},0).wait(1).to({x:132.45,y:-116},0).wait(1).to({x:135.25,y:-117.3,alpha:0.9091},0).wait(1).to({x:138.05,y:-118.6,alpha:0.8182},0).wait(1).to({x:140.8,y:-119.95,alpha:0.7273},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.0909},0).wait(1).to({alpha:0},0).wait(73));

	// Vrstva_5
	this.instance_1 = new lib.Mast();
	this.instance_1.setTransform(-57.35,-24.25,1,1,0,0,0,26.2,15.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({alpha:0.1111},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:1},0).wait(29).to({alpha:0.9412},0).wait(1).to({alpha:0.8824},0).wait(1).to({alpha:0.8235},0).wait(1).to({alpha:0.7647},0).wait(1).to({alpha:0.7059},0).wait(1).to({alpha:0.6471},0).wait(1).to({alpha:0.5882},0).wait(1).to({alpha:0.5294},0).wait(1).to({alpha:0.4706},0).wait(1).to({alpha:0.4118},0).wait(1).to({alpha:0.3529},0).wait(1).to({alpha:0.2941},0).wait(1).to({alpha:0.2353},0).wait(1).to({alpha:0.1765},0).wait(1).to({alpha:0.1176},0).wait(1).to({alpha:0.0588},0).wait(1).to({alpha:0},0).wait(63));

	// Vrstva_9
	this.instance_2 = new lib.Vyrazka();
	this.instance_2.setTransform(-44,-20.65,1,1,0,0,0,39.1,45.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:39.2,x:-43.9,alpha:0.0693},0).wait(1).to({alpha:0.1386},0).wait(1).to({alpha:0.2079},0).wait(1).to({alpha:0.2771},0).wait(1).to({alpha:0.3464},0).wait(1).to({alpha:0.4157},0).wait(1).to({alpha:0.485},0).wait(1).to({alpha:0.5543},0).wait(1).to({alpha:0.6236},0).wait(1).to({alpha:0.6929},0).wait(1).to({alpha:0.7621},0).wait(1).to({alpha:0.8314},0).wait(1).to({alpha:0.9007},0).wait(1).to({alpha:0.97},0).wait(66).to({alpha:0.9536},0).wait(1).to({alpha:0.9373},0).wait(1).to({alpha:0.9209},0).wait(1).to({alpha:0.9046},0).wait(1).to({alpha:0.8882},0).wait(1).to({alpha:0.8719},0).wait(1).to({alpha:0.8555},0).wait(1).to({alpha:0.8392},0).wait(1).to({alpha:0.8228},0).wait(1).to({alpha:0.8065},0).wait(1).to({alpha:0.7901},0).wait(1).to({alpha:0.7738},0).wait(1).to({alpha:0.7574},0).wait(1).to({alpha:0.7411},0).wait(1).to({alpha:0.7247},0).wait(1).to({alpha:0.7084},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.6757},0).wait(1).to({alpha:0.6593},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.6266},0).wait(1).to({alpha:0.6103},0).wait(1).to({alpha:0.5939},0).wait(1).to({alpha:0.5776},0).wait(1).to({alpha:0.5612},0).wait(1).to({alpha:0.5449},0).wait(1).to({alpha:0.5285},0).wait(1).to({alpha:0.5121},0).wait(1).to({alpha:0.4958},0).wait(1).to({alpha:0.4794},0).wait(1).to({alpha:0.4631},0).wait(1).to({alpha:0.4467},0).wait(1).to({alpha:0.4304},0).wait(1).to({alpha:0.414},0).wait(1).to({alpha:0.3977},0).wait(1).to({alpha:0.3813},0).wait(1).to({alpha:0.365},0).wait(1).to({alpha:0.3486},0).wait(1).to({alpha:0.3323},0).wait(1).to({alpha:0.3159},0).wait(1).to({alpha:0.2996},0).wait(1).to({alpha:0.2832},0).wait(1).to({alpha:0.2669},0).wait(1).to({alpha:0.2505},0).wait(1).to({alpha:0.2342},0).wait(1).to({alpha:0.2178},0).wait(1).to({alpha:0.2015},0).wait(1).to({alpha:0.1851},0).wait(1).to({alpha:0.1688},0).wait(1).to({alpha:0.1524},0).wait(1).to({alpha:0.1361},0).wait(1).to({alpha:0.1197},0).wait(1).to({alpha:0.1033},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.0706},0).wait(1).to({alpha:0.0543},0).wait(1).to({alpha:0.0379},0).wait(1).to({alpha:0.0216},0).wait(1).to({alpha:0.0052},0).wait(11).to({regX:39.1,x:-44,alpha:0},0).wait(1));

	// Ruka
	this.instance_3 = new lib.Ruka();
	this.instance_3.setTransform(-54.4,0,1,1,0,0,0,112.2,193.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.6,-193.2,413.5,386.4);


(lib.Orech1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path_0_2();
	this.instance.setTransform(63.35,90.1,1,1,0,0,0,3.2,2);
	this.instance.alpha = 0.3008;

	this.instance_1 = new lib.Path_1_0_2();
	this.instance_1.setTransform(23,86.9,1,1,0,0,0,6,2.2);
	this.instance_1.alpha = 0.3008;

	this.instance_2 = new lib.Path_2_0();
	this.instance_2.setTransform(81.75,43.15,1,1,0,0,0,4.4,10);
	this.instance_2.alpha = 0.3008;

	this.instance_3 = new lib.Path_3_1();
	this.instance_3.setTransform(59.65,61.35,1,1,0,0,0,11.6,3.3);
	this.instance_3.alpha = 0.3008;

	this.instance_4 = new lib.Path_4_0();
	this.instance_4.setTransform(113,54.05,1,1,0,0,0,22.9,13.7);
	this.instance_4.alpha = 0.6406;

	this.instance_5 = new lib.Path_5_0();
	this.instance_5.setTransform(51,56.4,1,1,0,0,0,13.7,7.8);
	this.instance_5.alpha = 0.6406;

	this.instance_6 = new lib.Path_6_0();
	this.instance_6.setTransform(97.85,89.25,1,1,0,0,0,16.9,8.7);
	this.instance_6.alpha = 0.6406;

	this.instance_7 = new lib.Path_7_0();
	this.instance_7.setTransform(34.05,104.15,1,1,0,0,0,23.2,9.5);
	this.instance_7.alpha = 0.6406;

	this.instance_8 = new lib.Path_8_0();
	this.instance_8.setTransform(77.95,44.95,1,1,0,0,0,7.2,10.9);
	this.instance_8.alpha = 0.4492;

	this.instance_9 = new lib.Path_9_0();
	this.instance_9.setTransform(58.55,131.25,1,1,0,0,0,11,6.2);
	this.instance_9.alpha = 0.4492;

	this.instance_10 = new lib.Path_10_0();
	this.instance_10.setTransform(99.35,103.3,1,1,0,0,0,9.7,10.4);
	this.instance_10.alpha = 0.4492;

	this.instance_11 = new lib.Path_11_0();
	this.instance_11.setTransform(64.3,92,1,1,0,0,0,9.2,4.5);
	this.instance_11.alpha = 0.4492;

	this.instance_12 = new lib.Path_12_0();
	this.instance_12.setTransform(117.25,47.8,1,1,0,0,0,10.8,7.5);
	this.instance_12.alpha = 0.4492;

	this.instance_13 = new lib.Path_13_0();
	this.instance_13.setTransform(31.75,43.15,1,1,0,0,0,7,3.6);
	this.instance_13.alpha = 0.4492;

	this.instance_14 = new lib.Path_14();
	this.instance_14.setTransform(23,86,1,1,0,0,0,9.6,6.1);
	this.instance_14.alpha = 0.4492;

	this.instance_15 = new lib.Group_0();
	this.instance_15.setTransform(80.9,79,1,1,0,0,0,66.9,75);
	this.instance_15.alpha = 0.2617;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6A3101").s().p("Ag8ASIAAgBQAFgDAMgBIAPgGIAcgOQAIgEAHgCIARgDIAPgEQAKgBADAGQAAABABAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgIgBIgIABIgPAEQgOABgQAHQgUALgIADQgJACgHAAQgHAAgFgDg");
	this.shape.setTransform(120.975,86.8818);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6A3101").s().p("ABaBqQgQgKgXgYQgYgYgWgQIgWgPQgPgIgHgIIgCgBQgGAHgBAGQgBAFADAFIAIAJQAHAIAIAKQAKANABAHQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgSgVIgSgTQgJgLAEgMQADgJAFgIIgEgHIgGAJIgGAMQgFAJgCACQgEADgIgBQgPgCgMgJIgQgOQgEgFgCgBQgBAAAAAAIABAAIAGACIAGAEIAKAHQALAJAOABQAJABABgEIAFgLQAGgQAIgEQgHgNgEgEQgJgLgcgQQgxgfANgVQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQgEAKAMAMQAIAIAMAGIAgASQARAKAKAOIANAVQAIALAKAHQA2AkAYAZIASASQAKAKAJAGQAIAEAPAGIAXAJQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQgaAAgYgPg");
	this.shape_1.setTransform(104.8446,50.93);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4B86A").s().p("ABCAnQgMgGgKgBQgIgCgPABQgOAAgXgGQgagGgMAAQgKAAgTAJQgQAIgMgDQgogLARgWQACgDAngiQABAEADgEIAGgGQAEgCAIgBQALgDALAAQAqAAAaAKIAgAOQAPAHANAKIAjASQAXANACAMQACAMgJACQgDABgQAAQgXAAgYgLg");
	this.shape_2.setTransform(60.4624,58.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4B86A").s().p("Ah2BuQgVgSAGgnQACgPAMgVQAOgWAGgMQAUgoASgFQAHgQAPgJQAYgMAfgJQAogKATgCQAmgEARAQQAIAIgEAIQgDAHgLAGIgVAKQgLAEgOgCIgSgDQgMgCgHADQgDACgFAFQgEAFgHABIgMACQgEABgEAEQgDACgDAGQgBADgIACIgOADQgIADgGAEQgGAGgGAMQgDADgHAEIgLAFQghAfALArIAJAWQAFAQgGAFIgEABQgHAAgPgMg");
	this.shape_3.setTransform(101.8701,101.7782);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4B86A").s().p("AgGB0QgqgHgEgSQgCgMALgOQAJgMAMgHQACAEABgMQACgMgCgJQgIgWgCgNIgCgWQAAgOgEgJQgMgRgDgJQgFgPAQgIQANgGALAFQAIAEAIAMQAQAUAEATQABAHgBAMIgBASQACAJAFAIIAKAOQAFAJACAKIABAVQABAPACALQABADADAEQACACgCAFQgGANgUAIQgPAGgLAAIgGgBg");
	this.shape_4.setTransform(84.3713,41.5982);

	this.instance_16 = new lib.Path_15();
	this.instance_16.setTransform(107.4,40.7,1,1,0,0,0,27.3,21.7);
	this.instance_16.alpha = 0.4805;

	this.instance_17 = new lib.Path_1_2();
	this.instance_17.setTransform(32.5,18.55,1,1,0,0,0,9.2,4.5);
	this.instance_17.alpha = 0.4805;

	this.instance_18 = new lib.Path_2_2();
	this.instance_18.setTransform(70.4,133.35,1,1,0,0,0,30.1,11.2);
	this.instance_18.alpha = 0.4805;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9994B").s().p("Aj0BeQgNgIgFgJQgEgHgEgSQgFgXAAgFQABgHAEgIIAHgPIADgMIAFgKIAQgTQAegkAzgLQAigHAhgBIAvgDQAdgBARAFIA7AOQAfAHAcAAQAQABAggCQAdgBATAEQAZAFALALQATAQADAHQAEAKgFAUQgFASgIAGQgTARgwgIIg6gNIglgLQgWgGgPADQgOADg2ACQgsACgYANQgRAJgiAqQgcAigfADIgMABQgaAAgVgMg");
	this.shape_5.setTransform(118.0889,101.6556);

	this.instance_19 = new lib.Path_4_2();
	this.instance_19.setTransform(54.9,45,1,1,0,0,0,34.2,20.3);
	this.instance_19.alpha = 0.4805;

	this.instance_20 = new lib.Path_5_1();
	this.instance_20.setTransform(61.15,93,1,1,0,0,0,16.1,8.8);
	this.instance_20.alpha = 0.4805;

	this.instance_21 = new lib.Path_6_1();
	this.instance_21.setTransform(24.2,87.8,1,1,0,0,0,15.3,10.8);
	this.instance_21.alpha = 0.4805;

	this.instance_22 = new lib.Path_7_1();
	this.instance_22.setTransform(46.85,55.7,1,1,0,0,0,20.9,8.5);
	this.instance_22.alpha = 0.6406;

	this.instance_23 = new lib.Path_8_1();
	this.instance_23.setTransform(46.3,78.15,1,1,0,0,0,12.7,4.8);
	this.instance_23.alpha = 0.6406;

	this.instance_24 = new lib.Path_9_1();
	this.instance_24.setTransform(79.35,104.7,1,1,0,0,0,11.5,6.5);
	this.instance_24.alpha = 0.6406;

	this.instance_25 = new lib.Path_10();
	this.instance_25.setTransform(34.1,104.65,1,1,0,0,0,23.2,10);
	this.instance_25.alpha = 0.6406;

	this.instance_26 = new lib.Path_11();
	this.instance_26.setTransform(99.85,89.25,1,1,0,0,0,18.9,8.7);
	this.instance_26.alpha = 0.6406;

	this.instance_27 = new lib.Path_12();
	this.instance_27.setTransform(113,54.05,1,1,0,0,0,22.9,13.7);
	this.instance_27.alpha = 0.6406;

	this.instance_28 = new lib.Path_13();
	this.instance_28.setTransform(112.75,118,1,1,0,0,0,28.4,7.5);
	this.instance_28.alpha = 0.6094;

	this.instance_29 = new lib.Group_3();
	this.instance_29.setTransform(76.7,77.4,1,1,0,0,0,72.9,42.4);
	this.instance_29.alpha = 0.6094;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DD9D45").s().p("AgBMJQgLAAgLgHIgUgMIgRgMQgKgGgKABQgJACgOAKQgOALgKADQgnAKgugPQgwgRgSghIgbg+QgRgjgbgRQgOgIgXgCQgfgDgIgCQgTgFgKgSQgDgFgOgiIgJgfQgGgQgLgLQgUgTgdgFQgHgBguAAQgygBhEgmQgdgRgNgTQgMgSgGgiQgKg8AXgnQAJgPATgLQATgLASgBQADgPgKgSIgSgdQgUgzADgUQAFgWAmgcIACgBQAjgbAsAAIAdABQATACAKgBQAXAABJgRQA8gOAlAIQAJACBKAfQAzAVAhgLQgOgTgqgUQgogUgOgXQgQgagLgIQgLgJgdgDQhqgPgtgMQgZgHgogSQgtgVgSgGQgdgKgSgTQgWgXACgcQACgXAJgiQAIggAKgYQARgoAzgSQAagKAIgEQAUgLAEgQQAFgQgQgYQgRgZACgOQAFgqBCgaQAkgOBDgRQAWgIAYAJQAJAEAgATQAxAdAigiIBBhAQAogiAqgFQAZgDAQAaQAKAOAOAfQASAfAhgFQAcgEAegbQAMgLAQgWQAQgRAXgCQAagDAaANQAbAOAIAYQADAJgDArQgDAiAPAOQAWAUAugeQAwghAcAQQARAKAdALQAiAMANAGQAhAQASAlQATAngQAgQgDAFgtAlQghAbANAbIAkgCQATAAAQAJQALAFARAQQARAQAKAGQAJAFAxAXQAjARATARQAHAGAKAMIARASQAIAHASANQAPANAFAMQAFANgFAbQgFAYgIAQQgVAoghAIQgIACgXAAQgRAAgMAHQADAJAPAIIAYANQAQAOgBAFQAAAFgNAOQgHAMgDAKQgCAJgBAQQgBAZgGAkQAAAcAeAUQAqAaAGAuQAGAqgYAvQgYAwg4AVQgXAJgoAAQgrgBgTAGQgaAHgDAKQgDAKAVAQQAOALAXAMQATALAHAWQAWBNgoA2QgUAcgYAMQgVAKglACQgKAAhGgUQgvgOgaAcIgbAgQgRARgTAGQgVAHgXgBQgZgBgSgJQgkgYgRgGQgdgKgWAeQgIAMgNAWQgMANgUAAIgEAAg");
	this.shape_6.setTransform(78.1425,77.7456);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.shape_5},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Orech1, new cjs.Rectangle(0,0,156.3,155.5), null);


(lib.NapojSklenice = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFF3C9").s().p("AgxAfQhhgChWgNQhUgNAJgJQARgUEmgDQEngEAKATQAGAMhyARQhuAQhuAAIgeAAg");
	this.shape.setTransform(30.6215,1.1801);

	this.instance = new lib.Path_0_1();
	this.instance.setTransform(29.6,4.65,1,1,0,0,0,18.7,1.6);
	this.instance.alpha = 0.2695;

	this.instance_1 = new lib.Path_1_0_1();
	this.instance_1.setTransform(47.8,27.7,1,1,0,0,0,9.7,7.1);
	this.instance_1.alpha = 0.2695;

	this.instance_2 = new lib.Path_8();
	this.instance_2.setTransform(16.8,18.9,1,1,0,0,0,16.8,18.9);
	this.instance_2.alpha = 0.2695;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE1B1").s().p("AhPC4QhCgMg0gnQgrgigcgxQgRgegJgeIgMixQBMAMBPAFQBDAFBNAAQCTAAClgQQAGAugIA0QgQBgg/BFQg6BAhUAaQguAPgrABIgWAAQgYAAgagEg");
	this.shape_1.setTransform(30.7408,18.8474);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.NapojSklenice, new cjs.Rectangle(-0.3,-1.9,61.9,39.6), null);


(lib.MapaCelek = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Cedule
	this.instance = new lib.Cedule();
	this.instance.setTransform(45.2,6.8,1,1,0,0,0,107.6,194);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:79.6,regY:97.2,x:17.2,y:-90},0).wait(9).to({x:29.7,y:-52.55,alpha:0.2},0).wait(1).to({x:42.2,y:-15.1,alpha:0.4},0).wait(1).to({x:54.65,y:22.35,alpha:0.6},0).wait(1).to({x:67.15,y:59.8,alpha:0.8},0).wait(1).to({x:79.6,y:97.2,alpha:1},0).wait(1).to({rotation:-2.5756,x:75.25,y:98.5},0).wait(1).to({rotation:-5.1512,x:71.1,y:100.05},0).wait(1).to({rotation:-7.7268,x:66.9,y:101.8},0).wait(1).to({rotation:-3.1051,x:74.45,y:98.85},0).wait(1).to({rotation:1.5165,x:82.15,y:96.5},0).wait(1).to({rotation:0.7582,x:80.85,y:96.85},0).wait(1).to({rotation:0,x:79.6,y:97.2},0).wait(44));

	// Vrstva_1
	this.instance_1 = new lib.Mapa();
	this.instance_1.setTransform(251.45,205.95,1,1,0,0,0,174.1,60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.4,-187.2,488,453.7);


(lib.Lahev = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path_9();
	this.instance.setTransform(35.3,57.35,1,1,0,0,0,1.9,32.5);
	this.instance.alpha = 0.3281;

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(23.75,116.95,1,1,0,0,0,13.4,20);
	this.instance_1.alpha = 0.3281;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFCAE").s().p("AgRHzQi9gCi6gqQgJgCgGgIQgGgIAAgJIAAuDQAAgNAKgJQAKgIANADQDCAmDEgBQC6gBC5gkQANgDAKAIQAKAJAAANIAAODQAAAKgGAHQgFAIgKACQjEAtjCAAIgUgBg");
	this.shape.setTransform(44.525,203.1516);

	this.instance_2 = new lib.Path_4_1();
	this.instance_2.setTransform(45.5,2.7,1,1,0,0,0,17.4,1.6);
	this.instance_2.alpha = 0.3281;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#222C00").s().p("AiTBqQgeAAgVgVQgVgVAAgeIAAhEQAAgbARgUQARgUAagEQADAFgEAKIgHATQgFAPABATIAEAhQACAcAKAOQAKAPAcAIQAhAKAuADQAbACA1AAQAsAAA9gKIAlgHQAWgEAOAFQgIAVgTANQgdAJglADg");
	this.shape_1.setTransform(45.775,10.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D3D00").s().p("AiVBrQgeAAgVgVQgWgWAAgeIAAhDQAAgeAWgVQAVgWAeAAIErAAQAeAAAWAWQAVAVAAAeIAABDQAAAegVAWQgWAVgeAAg");
	this.shape_2.setTransform(46.025,10.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D3D00").s().p("AgvV2QiFgEiFghQg6gOglgvQgkgvAAg8IAAzZQAAhnA6hUIDvleIAAstIFLAAIAANaIDNExQA4BUAABmIAATaQAAA7gkAwQglAvg6AOQibAmidAAIgxgBg");
	this.shape_3.setTransform(44.525,155.898);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Lahev, new cjs.Rectangle(0,0,89.1,295.8), null);


(lib.Krabicka = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7530AF").s().p("AAij4IMQHKQmYicmNATQj6ANk7BSQieAphsAog");
	this.shape.setTransform(84.1,24.925);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(158.75,84.4,1,1,0,0,0,66,38.1);

	this.instance_1 = new lib.Group_2();
	this.instance_1.setTransform(136,99.65,1,1,0,0,0,136,99);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Krabicka, new cjs.Rectangle(0,0,272,198.7), null);


(lib.orechyCelek = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Orech1
	this.instance = new lib.Orech1();
	this.instance.setTransform(244.45,112.05,1,1,58.7379,0,0,85.7,74.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({alpha:1},18).wait(43));

	// Orech1
	this.instance_1 = new lib.Orech1();
	this.instance_1.setTransform(78.2,180.7,1,1,0,0,0,78.2,77.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},18).wait(61));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,345.1,258.5);


(lib.LekyCelek = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Krabicka();
	this.instance.setTransform(150,-80.6,1,1,0,0,0,136,99.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-50.65,alpha:0.5},0).wait(1).to({y:-20.7,alpha:1},0).wait(1).to({y:9.25},0).wait(1).to({y:39.2},0).wait(1).to({y:69.15},0).wait(1).to({y:99.05},0).wait(1).to({y:92.05},0).wait(1).to({y:85.05},0).wait(2).to({y:99.05},0).wait(60));

	// Leky
	this.instance_1 = new lib.Leky();
	this.instance_1.setTransform(15,164.9,1,1,0,0,0,13,11.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).wait(36));

	// Leky
	this.instance_2 = new lib.Leky();
	this.instance_2.setTransform(54.5,190.9,1,1,0,0,0,13,11.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).to({alpha:1},5).wait(38));

	// Leky
	this.instance_3 = new lib.Leky();
	this.instance_3.setTransform(13,196.4,1,1,0,0,0,13,11.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).to({alpha:1},5).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-180,286,387.9);


(lib.lahevCelek = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vrstva_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAfQg2gTgcgmQgFgGAGgGQAGgHAGAFQApAfAlAMQAnAOAwgDQALgBACAMQABANgLACQgRADgRAAQghAAgggMg");
	this.shape.setTransform(26.6126,207.7721);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah7AVQgigDgSgDQgfgFgTgJQgHgDACgHQADgHAHgBQAWgCAkAGQAwAHAKABQAyAEA2gBQA8gBAygGQAPgBAogIQAigGAUgBQAMgBABALQAAALgJAEQguAQhDAGQgsAEhIAAIgJAAQg0AAg4gFg");
	this.shape_1.setTransform(39.4434,155.2758);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AApC3QgggWgWguQgNgagUg6QghhdAfhyQADgJALABQAKACgBAKQgIBFAAAbQAAAzAQArQAaBLA0BGQAHAIgJAJQgGAFgFAAQgEAAgDgCg");
	this.shape_2.setTransform(13.8355,173.1228);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(99));

	// Vrstva_8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE1B1").s().p("AgcA2QAooLAwhaQgUEQgUNLIhPAEQALj0AUkGg");
	this.shape_3.setTransform(47.6,153.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE1B1").s().p("AgcA2QA6oMAvhaQgUEQgUNLIhxAGQAUj1AckGg");
	this.shape_4.setTransform(45.9,153.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE1B1").s().p("AgcA2QBKoNAwhaQgUEQgUNLIiTAIQAcj1AlkHg");
	this.shape_5.setTransform(44.2,153.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE1B1").s().p("AgbA2QBaoOAwhaQgUEQgUNLIi1AKQAlj2AukHg");
	this.shape_6.setTransform(42.5,153.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE1B1").s().p("AgbA2QBroPAwhaQgUEQgUNLIjXAMQAtj2A3kIg");
	this.shape_7.setTransform(40.8,154);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},40).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(54));

	// Vrstva_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiDEMQglgRg9gxQgpgigShRIgLhLIgIj5IJbg0IAIB8QAGCDgEAhQgHBAgKAcQgVA/g4A4QgjAegtATQgzAVhJAKIgOAAQhKAAgzgWg");
	mask.setTransform(36.3762,183.6116);

	// Vrstva_6
	this.instance = new lib.NapojSklenice();
	this.instance.setTransform(36.6,231.8,1,1,0,0,0,30.8,18.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({y:196},6).wait(53));

	// Vrstva_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPCJQABg2AEhTIAGiIQABgKAJAAQAKAAAAAKQAACYgKB5QgBAKgKAAQgKAAAAgKg");
	this.shape_8.setTransform(32.125,236.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhBArQgFgHAGgGQAtgsBEgfQALgFAGAKQAGAKgLAFQgUAMhdA7QgDACgCAAQgEAAgEgFg");
	this.shape_9.setTransform(23.415,271.5657);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DEDEDE").s().p("AglKeQiegCiYgYQBxgrBghMQAtglAmgpIAAAAIAAmoQh/gVhVhhQhXhkAAiDIAAlXQCyAdCuAAQC2AACvgdIAAFXQgBCLhfBmQheBliLAKIAAGnQAqAvA2AoQA1ApA7AdQAuAWAzAQQipAaipAAIgeAAg");
	this.shape_10.setTransform(35.45,215.4102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},40).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},16).wait(43));

	// Lahev
	this.instance_1 = new lib.Lahev();
	this.instance_1.setTransform(145.65,159.05,1,1,0,0,0,44.5,147.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({rotation:-9.6816,x:152.6,y:154},0).wait(1).to({rotation:-19.3631,x:159.65,y:149.05},0).wait(1).to({rotation:-29.0447,x:166.6,y:144.05},0).wait(1).to({rotation:-38.7262,x:173.65,y:139.05},0).wait(1).to({rotation:-48.4078,x:180.6,y:134.05},0).wait(1).to({rotation:-58.0894,x:187.6,y:129.05},0).wait(1).to({rotation:-67.7709,x:194.65,y:124},0).wait(1).to({rotation:-77.4525,x:201.6,y:119.05},0).wait(1).to({rotation:-78.968,x:201.55,y:117.2},0).wait(1).to({rotation:-80.4836,x:201.45,y:115.4},0).wait(1).to({rotation:-81.9991,x:201.4,y:113.65},0).wait(1).to({rotation:-83.5147,y:111.85},0).wait(1).to({rotation:-85.0302,x:201.3,y:110},0).wait(1).to({rotation:-86.5458,x:201.25,y:108.25},0).wait(1).to({rotation:-88.0613,x:201.15,y:106.45},0).wait(1).to({rotation:-89.5769,x:201.1,y:104.65},0).wait(1).to({rotation:-91.0924,x:201,y:102.85},0).wait(1).to({rotation:-92.608,y:101},0).wait(1).to({rotation:-94.1235,x:200.85,y:99.2},0).wait(1).to({rotation:-95.6391,y:97.4},0).wait(1).to({rotation:-86.0859,x:196.9,y:101.85},0).wait(1).to({rotation:-76.5328,x:192.95,y:106.2},0).wait(1).to({rotation:-66.9796,x:188.95,y:110.65},0).wait(1).to({rotation:-57.4265,x:185.05,y:115.05},0).wait(1).to({rotation:-47.8733,x:181.1,y:119.4},0).wait(1).to({rotation:-38.3202,x:177.15,y:123.85},0).wait(1).to({rotation:-28.767,x:173.25,y:128.25},0).wait(1).to({rotation:-19.2138,x:169.25,y:132.6},0).wait(1).to({rotation:-9.6607,x:165.3,y:137.1},0).wait(1).to({rotation:-0.1075,x:161.4,y:141.45},0).wait(1).to({rotation:-0.0806,x:157.45,y:145.9},0).wait(1).to({rotation:-0.0538,x:153.5,y:150.2},0).wait(1).to({rotation:-0.0269,x:149.55,y:154.65},0).wait(1).to({rotation:0,x:145.65,y:159.05},0).wait(41));

	// _Path__2
	this.instance_2 = new lib.Vrsek();
	this.instance_2.setTransform(145.9,11.3,1,1,0,0,0,16.3,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:24.2115,x:180,y:-48.35},0).wait(1).to({rotation:48.423,x:204.3,y:-63.5},0).wait(1).to({rotation:72.6345,x:226.2,y:-68.55},0).wait(1).to({rotation:96.846,x:246.95,y:-67.75,alpha:0.9231},0).wait(1).to({rotation:121.0575,x:266.7,y:-63.2,alpha:0.8462},0).wait(1).to({rotation:145.269,x:285.9,y:-55.8,alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).wait(83));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-86.2,349.2,393.2);


(lib.Celek = function(mode,startPosition,loop,reversed) {
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
	this.Leky_anim = new lib.LekyCelek();
	this.Leky_anim.name = "Leky_anim";
	this.Leky_anim.setTransform(564.5,264.5,1,1,0,0,0,143,103.9);
	this.Leky_anim._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Leky_anim).wait(440).to({_off:false},0).wait(70));

	// Vrstva_1
	this.Cheb_anim = new lib.MapaCelek();
	this.Cheb_anim.name = "Cheb_anim";
	this.Cheb_anim.setTransform(593.95,301.5,1,1,0,0,0,212.8,133.2);

	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(232.8,543.4,1,1,0,0,0,188.8,109.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.Cheb_anim}]},368).to({state:[]},65).wait(77));

	// Vrstva_1
	this.Orechy_anim = new lib.orechyCelek();
	this.Orechy_anim.name = "Orechy_anim";
	this.Orechy_anim.setTransform(560.8,264.7,1,1,0,0,0,172.5,129.2);
	this.Orechy_anim._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Orechy_anim).wait(278).to({_off:false},0).to({_off:true},80).wait(152));

	// Vrstva_1
	this.Vino_anim = new lib.lahevCelek();
	this.Vino_anim.name = "Vino_anim";
	this.Vino_anim.setTransform(527.9,321.4,1,1,0,0,0,95.1,153.5);
	this.Vino_anim._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Vino_anim).wait(168).to({_off:false},0).to({_off:true},99).wait(243));

	// Krem
	this.mast_anim = new lib.RukaCelek();
	this.mast_anim.name = "mast_anim";
	this.mast_anim.setTransform(629.45,269);
	this.mast_anim._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mast_anim).wait(9).to({_off:false},0).to({_off:true},150).wait(351));

	// Izolovaný_režim
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#59372A").s().p("Ag9gRIAXAIQAcAHAQgEQAagIAQAEIAOAPQgeALgOACIgBAAQgQAAg+gjg");
	this.shape.setTransform(-194.05,294.7278);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#59372A").s().p("AAWA1QgWgEg0giQg1gggBgMQgBgLAEgJIAEgJIAeAZQAkAdAdAVQAbAVAtANQAXAGARACQg5AAgdgGg");
	this.shape_1.setTransform(-170.96,303);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#841206").s().p("AAEgOQgKgGgbgDIgZgDIAYgGQAcgEARAHQASAHARAdQAIAPAFANQgmgngRgKg");
	this.shape_2.setTransform(-159.85,275.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#841206").s().p("AAdAUIg3gUQgDgBAAgHQABgFgCgBQgCAAgHACQgGABgDgCIgWgRIgKgKIAIAEQALADAHgCQAJAAAIADIAXALQASAIBNA2g");
	this.shape_3.setTransform(-159.3,277.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3B4A1").s().p("AgUgmQACgaASABQAQABAKANIAPASQAHAHAIgCIhvBaQAihAABgmg");
	this.shape_4.setTransform(-173.6,282.9245);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#443029").s().p("AAegBQgMgEgOADQgEAAgKAFQgMAFgGAAQgQgCgGgGQAGACAJAAQAIAAALgGQANgIAFgBQAQgEAPAJQAPAIACAPQgHgMgNgEg");
	this.shape_5.setTransform(-190.4,288.061);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#443029").s().p("AAvAoIgKgDQgGgCgFgEQgEgEgDgGIgEgKQgMgXgWgPQgZgQgYADQAQgJAcAKQAhAMAPAhIAIATIARAKIAUAKQgIgBgOgEg");
	this.shape_6.setTransform(-169.15,297.0118);

	this.instance_1 = new lib.Path_16();
	this.instance_1.setTransform(-100.9,288.8,1,1,0,0,0,7,8.3);
	this.instance_1.alpha = 0.4609;

	this.instance_2 = new lib.Path_1_3();
	this.instance_2.setTransform(-94.5,302.25,1,1,0,0,0,6,5);
	this.instance_2.alpha = 0.4609;

	this.instance_3 = new lib.Path_2_3();
	this.instance_3.setTransform(-89.25,297.1,1,1,0,0,0,7.7,13.8);
	this.instance_3.alpha = 0.4609;

	this.instance_4 = new lib.Path_3_2();
	this.instance_4.setTransform(53.45,337.85,1,1,0,0,0,6,4.7);
	this.instance_4.alpha = 0.4609;

	this.instance_5 = new lib.Path_4_3();
	this.instance_5.setTransform(42.3,353,1,1,0,0,0,2.8,1.7);
	this.instance_5.alpha = 0.4609;

	this.instance_6 = new lib.Path_5_2();
	this.instance_6.setTransform(46.3,342.85,1,1,0,0,0,2.6,5.5);
	this.instance_6.alpha = 0.4609;

	this.instance_7 = new lib.Path_6_2();
	this.instance_7.setTransform(49.5,346.35,1,1,0,0,0,20.6,11.6);
	this.instance_7.alpha = 0.4609;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B2B2B").s().p("Ag0E4QgOgMAAhUQAAhQgugUQgPgHgRABIgOABIA5hXQA5hngChXQgChkBGgnQAcgPAbACQAbACAKARQAsBKABBgQABBdgoBUQgRAigPA4IgWBZQgaBfgrgEIgNABQgbAAgJgHg");
	this.shape_7.setTransform(240.6027,206.0573);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#BFF5FF").ss(2.9,1).p("AgcgNIAFAVQAJAVASgGQAcgIgDgUIgJgS");
	this.shape_8.setTransform(-133.3852,343.9917);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BFF5FF").ss(2.9,1).p("AgagSIAFAVQAJAUASgFQASgEADgPIgBgP");
	this.shape_9.setTransform(-134.9482,347.899);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#BFF5FF").ss(2.9,1).p("AgbgSIAFAVQAJAUASgFQAVgGACgOIgCgO");
	this.shape_10.setTransform(-135.968,351.3582);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8C3A9").s().p("AEFGyQgdgCgLiCIgGiBQgxASg5ASQhyAkgoAAQghABglhfQgqhugngcQgxgkhNgJIhDgCQAGgPASgZQAjgyA2gyIBYhSQA0gyBBgaIBZgkIBIgwQAZgOApgDQBBgFAsAyQArAxAMBYQAEAgAADSQAACfAZAQQAgAVAHAYQAHAagMA5QgNA7gmAqQgiAoghAAIgEgBg");
	this.shape_11.setTransform(-170.0594,309.7164);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#51321E").s().p("AEXIDQhIgmgxgKQhYgTh4AzQhsAvh2heQgggah5gEQiXAAhKgBQhmgCg5hhQgYgngFgrQgFgqAPgcQAZgugWh7QgeiDgGgiQgFgmA1g+QBGhUAWgwQAehGBEghQAVgKAWgGQALgDAHAAIEoDDQEwDDAxAFQAwAFAfA2QASAgAlBOQARAcAPAHQANAFAWgFIA1gPQApgKAtgBQAyAABZAzQBPAuBTBFQBPBDAnAzQAqA3geAFQh1ASg+A6QgdAagGADQgQAJgagJQhdgihkAbQgvAPgVAEQgQADgOAAQgPAAgNgEg");
	this.shape_12.setTransform(-141.1009,344.1758);

	this.instance_8 = new lib.ClipGroup_1_1();
	this.instance_8.setTransform(-44.65,343.75,1,1,0,0,0,109.8,92.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C3C3C").s().p("AAAAHIgGgQIAFAFIAGgEIgDAGIAFAHIgDAFIgEgDg");
	this.shape_13.setTransform(-2.1,346.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3C3C").s().p("AgHATIgBgFQAIgPAAgRQAIAFABADQABADgEAHIgKATg");
	this.shape_14.setTransform(0.4361,348.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3C3C3C").s().p("AgDgHQACgEAEgBQAFABAFADIAEADIghASIANgUg");
	this.shape_15.setTransform(-8.825,347.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C3C3C").s().p("AgHgFIACgBIAXACQgGAHgLACIgSADg");
	this.shape_16.setTransform(4.4,348.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3C3C3C").s().p("AAAAHQgBgDgEgDIgHgEIgFgCQAPgMALAPQAFAFAEAHIgMABQgEAAgCgEg");
	this.shape_17.setTransform(10.625,348.8005);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3C3C3C").s().p("AgEgHQAMgGAOAFQgIAHgNAEIgWAIQADgMAOgGg");
	this.shape_18.setTransform(-8.675,344.6286);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3C3C3C").s().p("AgIADIgDgDIgGgFIAJgGQANgGAFANIAIASIgCAAIgDAAQgPAAgGgLg");
	this.shape_19.setTransform(-5.6,345.6815);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3C3C3C").s().p("AAHAOQgEgCgBgDQgFgNgRgNQAIgEAIACQAJADADAGQAFAKAIATIgCABIgMgGg");
	this.shape_20.setTransform(14.35,349.2636);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3C3C3C").s().p("AgEANQgGgGABgJQAAgEgDgQIAWAJQADABAAAFIgCAcIgDABIgMgJgAgBAGIAEADIADgFIgEgHIACgFIgGADIgEgFg");
	this.shape_21.setTransform(-2.025,346.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3C3C3C").s().p("AAKAIQgIAAgCgFQgEgEgGgCIgNAAIgHABQALgJATAAQAVgBAKAYg");
	this.shape_22.setTransform(-4.325,342.7481);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3C3C3C").s().p("AgRAbIASg2IAMALQABABgCAEIgPAWIABABIATgQIABAEIgiAcg");
	this.shape_23.setTransform(-2.7917,351.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3C3C3C").s().p("AABgDQgFgKgTgFQAJgIAKgDQAGgCABAIIAHAeQAEgWgFgOIAOACQABAhgTAZQACgZgGgJg");
	this.shape_24.setTransform(-6.2476,350.6875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3C3C3C").s().p("AgBAUIgBgDQABgLgEgNIgKgYIADAAIAWAKQAEABABAFIABAIIgCAmIgDABg");
	this.shape_25.setTransform(19.075,351.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3C3C3C").s().p("AgKAmIgNgJQgKgIADgMIADgeQAAgHAFgDIAPgJIABABIgHAOQgJAQAAAOQAAALALAJQAKAJAIAAQAIgBAFgJQAHgLgHgJIgDgFQgDgCgEABQgHABAAAKIABgBIAJgEQAGAKAAACQAAAEgDAEQgDADgFABQgEABgEgCQgEgCgCgEQgEgJAEgLQADgLAKgDQAHgDAFAFQAQAOgEAQQgCANgOAHQgHACgGAAQgGAAgGgDg");
	this.shape_26.setTransform(-9.3686,351.094);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3C3C3C").s().p("AgvA4QgQgEgBgTQgBgdAWgHQAJgDAKAGQAJAFABAJQAAAKgMAHIABgDQAGgMgIgGQgEgDgGAAQgHgBgEAEQgGAFgBAJQgBAJAHAGQALAKAPAAQAKAAALgOQAOgUgOgZQgMgWgXgLIgTgFIgEgCIAAgBIAagHQAHgCAFAGIATAYIACACIABgBIgKgbQALgBAEAMQAHAVABAYIABAFQALgSgFgfIAPALQABABAAAEQgFApgWAWIgCADQAkgPAMgiIAKARQABADgEAFQgaAngsAGIgNABQgOAAgMgEg");
	this.shape_27.setTransform(13.0683,356.1765);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3C3C3C").s().p("AAOA0IgSgLQgIgFgHAHQgHAGgKgCIgegHQgHAAgCgBIgVgIIABgBIAOABIAOAAQAPgDAMgGQArgWAwgpQAHgFATgHQACAAAEABIAFADIAJAHIgmAKIABAEQAJAMAIAbQADAJgKADQgFABgJAIIgJAHQgGAEgGgEQgDgDgCAGIgGAJQgCADgDAAIgFgCg");
	this.shape_28.setTransform(-0.35,354.0504);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3C3C3C").s().p("AiOB6QgIgCgDgGIgGgLIAMAHQAVAJAYgKQAzgUAeg3QAMgXgBgcQgBgNgMgJQgKgJgOABQgMAAgEAJQgEAKAKACIAgAEQAGAAAAAGQACAPgGAaIgPgQIgBgDQAAgOgUgOQgIgGgBgFQgBgFAGgIQAMgQAUgBIAFgBIgGgJIgFgKQgDgOAIgMQAJgOAOABQAeAAAKAeQAIAVgEAkIAAADIAmADQAaADAUALQAMAHAOAUIAPAYIAAACIgjgLQgDgBgDgDQgRgTgcAAQgHAAgYACIAAACIAXADQAKADAMAGIgNACQgIABgFgCQgWgHgPAHIAYAFIABACQgNAFgCAAIgegBIgDAAIAWg1QAOgogTgmQgFgIgNgDQgLgDgHAGQgIAHAAAMQABALAJAIQAKAJAJgEQAKgDgEgLQgFgKgIAEIgIAEQACgMAHgCQAKgCAFAKQAFAKgCAIQgDAHgJACIgRAAQATAPAAAeQAAAdgXAiQgbAogjAUQgZAOgXAAIgPgBg");
	this.shape_29.setTransform(4.0125,344.3135);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F8C3A9").s().p("AvnGLQh5hGBpi6QAhg7A0g/IAtgyIDfA3QDmA5ApgBQCSgCCGgGQDxgLA7gSQBBgVC4hWQCzhVAdgWQATgPAVhVQAXhYAPgSQAXgaBAgUQA8gTApADQAiACgXAZQgWAYgZAFQgRADgnAvQgTAXgQAXIA0gSQA4gVAUgJQAQgHAJg8QAIg6AQgDQAYgEAjA0QAkA0AHAzQAFAkgeA1Ig6BgQgTAjhLAfIhwAvQgiAUj5ChIjxCdQjTAtjAAwQi1AujxAFIgnAAQkHAAh7hHg");
	this.shape_30.setTransform(24.6091,322.7291);

	this.instance_9 = new lib.Path_11_1();
	this.instance_9.setTransform(-17.55,314.8,1,1,0,0,0,51.4,16.2);
	this.instance_9.alpha = 0.3281;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F3B4A1").s().p("AjAAAIgJlBIBlBGQBsBGAogBQAoAAA+hCIA1hBIgpCKQgnCRAGAeQAKA0gLA/QgOBQgqAWQjHBoghABIAAAAQgUAAgMlCg");
	this.shape_31.setTransform(-126.2,313.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F8C3A9").s().p("AksiBQAegpApgsQBThXA8gPIBWgbQA8gUApgEQB7gPAnBmQAvB6gLB5QgMB7hDA+Qg5A1i7BaIiwBPg");
	this.shape_32.setTransform(-111.662,302.1594);

	this.instance_10 = new lib.ClipGroup_0_1();
	this.instance_10.setTransform(-56.6,301.75,1,1,0,0,0,155,134.2);

	this.instance_11 = new lib.ClipGroup_2();
	this.instance_11.setTransform(-16.05,331.05,1,1,0,0,0,81.2,79.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F8C3A9").s().p("AmYjnIBCgRQBNgVA7gWQAjgNCTBNQCVBPBHBKQBfBgBECLQAiBGAQAyIkiANg");
	this.shape_33.setTransform(-0.275,268.5811);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#ECAC93").s().p("AhNAuQgrh5AdgbQAagXBLgVQAngKAhgGIAPBCQAMBLgKAtQgNA0gkArQghAogaAEIgBAAQgbAAgoh1g");
	this.shape_34.setTransform(31.4266,310.3814);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7EA3DA").s().p("AxyjgIEFgfQE6gtEIhGQDZg5GHgMQC2gFBGgHQB6gMBCggQCIhCBHgMQA6gKAYAYQAUATApByQAnBvAAAeQABAiiOBhQifBribAxQiGAqi+AeQjhAjgiAIQhpAajUCLQjTCLgrBGQgYAojUAbIjPATg");
	this.shape_35.setTransform(117.8501,271.8133);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6695C5").s().p("Av9CMQAKgLAYgOQAwgbBEgQQA5gMGlhJQGwhMBEgOQAcgGFhh0QEihfA5AQQBFATA3A1QAyAxAMAzQAKArhIBFQg4A1hRAxQg2Agp2BkIprBdg");
	this.shape_36.setTransform(77.186,228.3163);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#ECAC93").s().p("AjyC/IBrg2QBug/AUgrIA6iTQArhoAbgoQAjgzAqgBQAqgCABA5QAAAug5CGQhACVgDAMQgGAcgIAwQgHAmgXAUQgXAVhVAnIhTAjg");
	this.shape_37.setTransform(228.2502,214.9231);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2B2B2B").s().p("AgxEoQgOgMAAhPQAAhLgrgUQgOgGgRAAIgNACIA2hTQA2higChSQgBhfBCglQAbgOAZACQAZACAKAQQApBGACBaQABBagnBOQgPAhgOA1IgWBVQgYBagogEIgQAAQgXAAgIgGg");
	this.shape_38.setTransform(189.7513,179.6176);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#ECAC93").s().p("AjyC/IBrg2QBug+AUgsIA6iSQAqhpAcgoQAjgyApgCQArgBABA4QAAAug4CGQhBCVgDANQgHAbgGAwQgJAmgWAVQgXAUhWAnIhSAjg");
	this.shape_39.setTransform(179.0502,184.7981);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_11},{t:this.instance_10},{t:this.shape_32},{t:this.shape_31},{t:this.instance_9},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_8},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(510));

	// Vrstva_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egl/AmyQlugzkriAQlRiQjmjnQj7j7hflTQhjlkB0k5QBIjCDLj9QByiJA4hGQBih4A8hdQBqikBSjSQBAilBAjqIBflrQA5jZAviOQBslDE5jlQEqjZFhgqQFZgqG0CIQChAxDcBZQB+AyD4BnQHdDAF2A/QHeBRGFhtQDDg3EFiGQCThMElibQFPijEVgYQFXgfEHC1QH7FbgSLAQgNIOknKNQizGKirD3QjkFIkXCwQiwBvjkBHQi1A5j/ArInCBEQkOApivAtQjxA+kVB3QjABSkxCaQmBDDhsAzQkaCFjjBNQl4B/mQAmQiiAPihAAQjsAAjqghg");
	mask.setTransform(72.9322,89.9736);

	// _Clip_Group_
	this.instance_12 = new lib.ClipGroup_0();
	this.instance_12.setTransform(108.45,-90.2,1,1,0,0,0,436.6,297.7);
	this.instance_12.alpha = 0.4609;

	this.instance_13 = new lib.Group();
	this.instance_13.setTransform(111.4,-268.75,1,1,0,0,0,84,16.8);
	this.instance_13.alpha = 0.4609;

	this.instance_14 = new lib.Group_1();
	this.instance_14.setTransform(107.6,-332.4,1,1,0,0,0,46.3,46.2);
	this.instance_14.alpha = 0.4609;

	this.instance_15 = new lib.Path_7();
	this.instance_15.setTransform(151.7,-52.6,1,1,0,0,0,22.7,3.8);
	this.instance_15.alpha = 0.3906;

	this.instance_16 = new lib.Path_1_0();
	this.instance_16.setTransform(75.4,-59.95,1,1,0,0,0,10.1,13.8);
	this.instance_16.alpha = 0.3906;

	this.instance_17 = new lib.Path_2();
	this.instance_17.setTransform(46.7,-63,1,1,0,0,0,7.5,14.6);
	this.instance_17.alpha = 0.3906;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DFAC95").s().p("AhUAJQgkgDAAgGQAAgEAkgEQAjgEAxABQAxgBAlAEQAjAEAAAEQAAAGgjADQgkADgyABQgygBgigDg");
	this.shape_40.setTransform(151.65,-54.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEF7F4").s().p("AifAQQhDgGAAgKQAAgJBDgGQBCgHBdAAQBdAABDAHQBDAGAAAJQAAAKhDAGQhCAHheAAQhdAAhCgHg");
	this.shape_41.setTransform(151.675,-54.075);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FDE3D6").s().p("AgzAYQgrgJgtgPIglgNIA4gGQBDgGA4AAQBbAABSAMQgxAWhCAOQgOADgrAAQgpAAgOgCg");
	this.shape_42.setTransform(151.45,-51.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CB9260").s().p("ApwBCQgZABgSgTQgTgSAAgaIAAgIQAAgZATgSQASgSAZAAIThAAQAaAAASASQASASAAAZIAAAIQAAAagSASQgSATgagBg");
	this.shape_43.setTransform(-65.125,91.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#B07742").ss(9.3).p("AiiA/IFFh+");
	this.shape_44.setTransform(-123.45,0.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#B07742").ss(9.3).p("AgnLGQgtjhgrkPQhXoeAKjmQADhOAJgOQAGgMATAXQAgAnAMAJQAgAbAjgGQA6gMBJhUQAigmACgDQAMgKgEAYQgLBBAwJiQAYEvAbEk");
	this.shape_45.setTransform(-123.7566,18.7029);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#AD733E").s().p("AqJBNIFUiZIKWAAIEpCZg");
	this.shape_46.setTransform(-66.1,79.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BE854C").s().p("AgRI6QgOAAgLgLQgLgKAAgPIAAwrQAAgPALgLQALgKAOAAIAjAAQAPAAAKAKQAKALAAAPIAAQrQAAAPgKAKQgKALgPAAg");
	this.shape_47.setTransform(-10.15,148.65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BE854C").s().p("AgSI6QgOAAgLgLQgKgKAAgPIAAwrQAAgPAKgLQALgKAOAAIAkAAQAPAAALAKQAKALAAAPIAAQrQAAAPgKAKQgLALgPAAg");
	this.shape_48.setTransform(-121.5,148.65);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#945C29").s().p("AgQGPQgLAAgHgHQgHgHAAgLIAArrQAAgKAHgHQAHgIALAAIAhAAQAKAAAIAIQAHAHAAAKIAALrQAAALgHAHQgIAHgKAAg");
	this.shape_49.setTransform(-24.55,124.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#945C29").s().p("AgSGPQgKAAgIgHQgHgHAAgLIAArrQAAgKAHgHQAIgIAKAAIAlAAQAKAAAHAIQAIAHAAAKIAALrQAAALgIAHQgHAHgKAAg");
	this.shape_50.setTransform(-102.5,124.1);

	this.instance_18 = new lib.Path_3();
	this.instance_18.setTransform(137.55,-66.4,1,1,0,0,0,7.9,10.8);
	this.instance_18.alpha = 0.3906;

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CB9260").s().p("ApwBCQgaABgSgTQgSgSAAgZIAAgIQAAgaASgSQASgSAaAAIThAAQAZAAATASQASASAAAaIAAAIQAAAZgSASQgTATgZgBg");
	this.shape_51.setTransform(332.475,101.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#B07742").ss(9.3).p("ACjA/IlFh+");
	this.shape_52.setTransform(390.8,10.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#B07742").ss(9.3).p("AAoLGQAtjhArkPQBXoegKjmQgDhOgJgOQgGgMgTAXQggAngLAJQghAbgigGQg7gMhJhUQgigmgCgDQgMgKAEAYQAMBBgxJiQgYEvgaEk");
	this.shape_53.setTransform(391.1316,28.7029);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#AD733E").s().p("AqIBNIEpiZIKWAAIFSCZg");
	this.shape_54.setTransform(333.45,89.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#BE854C").s().p("AgRI6QgPAAgKgLQgLgKAAgPIAAwrQAAgPALgLQAKgKAPAAIAjAAQAPAAAKAKQAKALAAAPIAAQrQAAAPgKAKQgKALgPAAg");
	this.shape_55.setTransform(277.5,158.65);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#BE854C").s().p("AgRI6QgPAAgLgLQgKgKAAgPIAAwrQAAgPAKgLQALgKAPAAIAjAAQAPAAALAKQAKALAAAPIAAQrQAAAPgKAKQgLALgPAAg");
	this.shape_56.setTransform(388.875,158.65);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#945C29").s().p("AgQGPQgKAAgHgHQgIgIAAgKIAArrQAAgKAIgIQAHgHAKAAIAhAAQALAAAHAHQAHAIAAAKIAALrQAAAKgHAIQgHAHgLAAg");
	this.shape_57.setTransform(291.9,134.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#945C29").s().p("AgSGPQgKAAgHgHQgIgIAAgKIAArrQAAgKAIgIQAHgHAKAAIAlAAQAKAAAIAHQAHAIAAAKIAALrQAAAKgHAIQgIAHgKAAg");
	this.shape_58.setTransform(369.875,134.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A77A43").s().p("AgZA5Ig2gJQAFgXALgZQAUgvAZgGQAggIAfABQAiAAABAMQAAAQgMAnQgOArgMAIQgGADgQAAQgRAAgcgEg");
	this.shape_59.setTransform(181.776,-30.5325);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9A6A2A").s().p("AglAtIgzgVIAagqQAfgrAZAAQAiAAAdAIQAiAIgDAMQgCAPgWAjQgXAogOAEIgFABQgQAAgrgRg");
	this.shape_60.setTransform(176.1087,-31.7673);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFE745").s().p("AhQBfQhKgBgagPQgagPgLgMIgHgKQgHgYgDgXQgFgxAVgCQA2gGAQAAQAvgCANALQALAJAAgXQABgbAIAAQAKAAANAMQATARAJAFQAJAFAIgFQAFgEAZAVQAOAMAXAZQAHAHAOAAQAXAAAcAHQAhAKAEANQAEALAjgmIASgTQAGgFgIAPQgQAqgHAOQgLAZgbAAQgUAAgqAIQgqAJghAAQg8ACgnAAIgOAAg");
	this.shape_61.setTransform(155.064,-31.8708);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DFAC95").s().p("AjVAWQhYgJAAgNQAAgMBYgJQBZgJB8AAQB9AABZAJQBYAJAAAMQAAANhYAJQhZAJh9AAQh9AAhYgJg");
	this.shape_62.setTransform(164.375,-27.225);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FEF7F4").s().p("AmPApQingRAAgYQAAgXCngRQClgRDqAAQDqAACnARQClARAAAXQAAAYilARQimARjrAAQjqAAilgRg");
	this.shape_63.setTransform(164.35,-27.225);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FDE3D6").s().p("AiAA7QhrgVhxgmIhcghICLgPQCogQCNAAQCOAACgAPQBPAHA0AHQgfAPg0ATQhnAkhmAWQgiAIhrAAIgZAAQhWAAgdgGg");
	this.shape_64.setTransform(163.85,-20.7187);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7F3818").s().p("Ag4gQIBxAAQgQAggpABQgngBgRggg");
	this.shape_65.setTransform(46.8,-63.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D2D7F3").s().p("Ag0AGQgWgDAAgDQAAgCAWgDQAWgDAeABQAfgBAWADQAWADAAACQAAADgWADQgVADggAAQgfAAgVgDg");
	this.shape_66.setTransform(46.7,-76.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D2D7F3").s().p("AgzA+QgXgVAAglIAAhUICVAAIAABUQAAAlgXAVQgVATgfAAQgdAAgWgTg");
	this.shape_67.setTransform(46.7,-68.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D2D7F3").s().p("Ag0BIQgWgCAAgEQAAgDAUgCQATgDAcAAIAAiEIAPAAIAACEQAdAAASADQAUACAAADQAAAEgWACQgWADgfAAQgeAAgWgDg");
	this.shape_68.setTransform(46.7,-56);

	this.instance_19 = new lib.Path_1();
	this.instance_19.setTransform(137.5,-64.45,1,1,0,0,0,6.1,7.9);
	this.instance_19.alpha = 0.5898;

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#74B9C0").s().p("AgeAGQgMgCAAgEQAAgCAMgDQANgDARABQASgBANADQAMADAAACQAAAEgMACQgNACgSABQgRgBgNgCg");
	this.shape_69.setTransform(137.525,-56.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#83CFD7").ss(0.5).p("ABPAAQAAAGgXAFQgYAEggAAQggAAgXgEQgXgFAAgGQAAgGAXgEQAXgEAgAAQAhAAAXAEQAXAEAAAGg");
	this.shape_70.setTransform(137.525,-75.675);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C0F5FF").s().p("AgeBqQgMgDAAgDIgkjAQAAgHAXgEQAXgEAgAAQAhAAAXAEQAXAEAAAHIgkDAQAAADgMADQgNACgSAAQgRAAgNgCg");
	this.shape_71.setTransform(137.525,-66.375);

	this.instance_20 = new lib.Path_0();
	this.instance_20.setTransform(75.45,-57.5,1,1,0,0,0,7.9,10);
	this.instance_20.alpha = 0.5898;

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#74B9C0").s().p("AgnAIQgPgDAAgFQAAgDAPgDQARgEAWAAQAXAAAQAEQAQADAAADQAAAFgQADQgQADgXAAQgWAAgRgDg");
	this.shape_72.setTransform(75.4,-47.125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#83CFD7").ss(0.6).p("ABlAAQAAAIgeAGQgeAGgpAAQgpAAgegGQgdgGAAgIQAAgHAdgGQAegFApAAQAqAAAdAFQAeAGAAAHg");
	this.shape_73.setTransform(75.4,-71.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C0F5FF").s().p("AgnCIQgPgDAAgFIguj2QAAgIAegGQAdgGApABQAqgBAeAGQAdAGAAAIIguD2QAAAFgQADQgQACgXAAQgWAAgRgCg");
	this.shape_74.setTransform(75.4,-59.9);

	this.instance_21 = new lib.Path_4();
	this.instance_21.setTransform(62.75,-60.85,1,1,0,0,0,22.7,3.8);
	this.instance_21.alpha = 0.3906;

	this.instance_22 = new lib.Path_5();
	this.instance_22.setTransform(83,-77.8,1,1,0,0,0,5.9,11.4);
	this.instance_22.alpha = 0.3906;

	this.instance_23 = new lib.Path_6();
	this.instance_23.setTransform(126.6,-68.2,1,1,0,0,0,5.9,14.7);
	this.instance_23.alpha = 0.3906;

	this.instance_24 = new lib.Path();
	this.instance_24.setTransform(109.3,-44.7,1,1,0,0,0,13,16.6);
	this.instance_24.alpha = 0.5898;

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(3,1,1).p("Ag+EgIB9pA");
	this.shape_75.setTransform(116.9,-58.35);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#74B9C0").s().p("AhAANQgbgGAAgHQAAgHAbgFQAbgFAlAAQAnAAAaAFQAbAFAAAHQAAAHgbAGQgaAFgnAAQglAAgbgFg");
	this.shape_76.setTransform(109.25,-27.55);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#83CFD7").p("ACnAAQAAANgxAKQgxAKhFAAQhEAAgxgKQgxgKAAgNQAAgNAxgJQAxgKBEAAQBFAAAxAKQAxAJAAANg");
	this.shape_77.setTransform(109.275,-68.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C0F5FF").s().p("AhADgQgbgFAAgHIhLmYQAAgOAxgJQAxgJBEAAQBFAAAxAJQAxAJAAAOIhLGYQAAAHgbAFQgbAGgmAAQglAAgbgGg");
	this.shape_78.setTransform(109.275,-48.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#821C00").s().p("AoDkmIDAHxQDzA9EFhBQkIBblOAagABjk7IChFxQCIABB4gtQijBaixAcg");
	this.shape_79.setTransform(203.175,39.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#831908").s().p("AvFBbQmSgmAAg1QAAg1GSglQGQgnI1AAQI1AAGRAnQGSAlAAA1QAAA1mSAmQmRAno1gBQo1ABmQgng");
	this.shape_80.setTransform(102.6,-19.05);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#821C00").s().p("Ai0DHQEFBBDzg9IDAnxIhiJiQlOgakIhbgAoDAKQB5AtCHgBIChlxIhNG7Qixgcijhag");
	this.shape_81.setTransform(2.3,39.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#A13921").s().p("ApbHYIAEhVQlOgbkJhbIAFhHQhQgNhLgdQg+gZhdgzIAfhUQARgtALguQAdh4AhkvMAqvAAAQAgElArCCQAaBLAyBkQijBaixAcIAFBHQkIBblPAbIAFBVQkcAvkxAAQkzAAkagvg");
	this.shape_82.setTransform(104.1,32.85);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#75410D").s().p("AkMJrQhugTAAgYQgBgJANgHQA5gxAwidQAsiNAcjFQAbi8AEixQAFi3gVhnICuARICwgRQgWBnAFC3QAFCxAaC8QAcDFAsCNQAwCdA5AxQAMAIAAAIQAAAYhuATQhwARidAAQicAAhwgRg");
	this.shape_83.setTransform(102.6,127.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#8C541D").s().p("Aq4BvQkhguAAhBQAAg/EhguQEiguGWAAQGXAAEhAuQEiAuAAA/QAABBkiAuQkhAtmXAAQmXAAkhgtg");
	this.shape_84.setTransform(102.625,186.225);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#BE854C").s().p("Aq4CUQkhguAAhBIAAibICQAAQCEgiDcgUQDjgVEGAAQEHAADjAVQDcAUCEAiICQAAIAACbQAABBkhAuQkhAumYAAQmYAAkggug");
	this.shape_85.setTransform(102.625,198.125);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#7F3818").s().p("AgsgQIBZAAQgOAhgfAAQgfAAgNghg");
	this.shape_86.setTransform(126.65,-68.675);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D2D7F3").s().p("AgoAGQgSgCAAgEQAAgDASgCQARgDAXAAQAYAAASADQARACAAADQAAAEgRACQgSADgYAAQgXAAgRgDg");
	this.shape_87.setTransform(126.575,-82.025);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D2D7F3").s().p("AgnA/QgTgWAAgkIAAhWIB1AAIAABWQAAAkgTAWQgQATgYAAQgXAAgQgTg");
	this.shape_88.setTransform(126.575,-73.825);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D2D7F3").s().p("AgoBJQgSgCAAgEQAAgHA1gBIAAiGIALAAIAACGQA1ABAAAHQAAAEgRACQgSADgYAAQgXAAgRgDg");
	this.shape_89.setTransform(126.575,-61.05);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#DFAC95").s().p("AhVAJQgjgEAAgFQAAgEAjgEQAkgDAxAAQAzAAAiADQAkAEAAAEQAAAGgkADQgiAEgzAAQgxAAgkgEg");
	this.shape_90.setTransform(62.7,-62.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FEF7F4").s().p("AifAQQhDgGAAgKQAAgIBDgIQBCgGBdAAQBeAABCAGQBDAIAAAIQAAAKhDAGQhCAIheAAQhdAAhCgIg");
	this.shape_91.setTransform(62.725,-62.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FDE3D6").s().p("AgyAYQgsgJgtgPIgkgNIA3gGQBEgGA4AAQBbAABRALQgyAXhBAOQgNADgrAAQgqAAgNgCg");
	this.shape_92.setTransform(62.5,-59.675);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#7F3818").s().p("AgsgMIBZAAQgOAZgfAAQgeAAgOgZg");
	this.shape_93.setTransform(83.1,-78.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D2D7F3").s().p("AgoAFQgSgCAAgDQAAgCASgCQAQgCAYAAQAZAAARACQARACAAACQAAADgRACQgRACgZAAQgXAAgRgCg");
	this.shape_94.setTransform(83,-88.525);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D2D7F3").s().p("AgnAwQgTgQAAgdIAAhBIB1AAIAABBQAAAdgSAQQgRAPgYABQgXgBgQgPg");
	this.shape_95.setTransform(83,-82.15);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D2D7F3").s().p("AgoA5QgSgCAAgDQAAgCAPgCQAQgCAWgBIAAhnIALAAIAABnQAXABAOACQAQACAAACQAAADgRACQgRACgZAAQgXAAgRgCg");
	this.shape_96.setTransform(83,-72.275);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#831908").s().p("A1TDyIOVn2IOXgHIN7IXg");
	this.shape_97.setTransform(102.225,-43.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CB9260").s().p("AkvAgQgNABgKgKQgJgKAAgNQAAgNAJgJQAKgKANAAIJfAAQANAAAKAKQAKAJAAANQAAANgKAKQgKAKgNgBg");
	this.shape_98.setTransform(73,-47.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#663914").ss(4.6).p("AhPAfICfg9");
	this.shape_99.setTransform(44.425,-91.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#663914").ss(4.6).p("AgSFcQgWhvgWiEQgqkJAFhxQABgmAFgHQADgGAJALQAgAnAWgFQAcgFAkgqQARgTABgBQAFgEgCALQgFAgAYErQALCUANCP");
	this.shape_100.setTransform(44.2486,-82.9883);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#AD733E").s().p("Ak9AlICmhKIFEAAICRBKg");
	this.shape_101.setTransform(72.5,-53.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#BE854C").s().p("AgSEPQgHgHAAgLIAAn5QAAgLAHgIQAIgHAKAAQALAAAHAHQAIAIAAALIAAH5QAAALgIAHQgHAIgLAAQgKAAgIgIg");
	this.shape_102.setTransform(99.925,-19.325);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#BE854C").s().p("AgREPQgJgHABgLIAAn5QgBgLAJgHQAHgIAKAAQALAAAIAIQAIAHAAALIAAH5QAAALgIAHQgIAIgLAAQgKAAgHgIg");
	this.shape_103.setTransform(45.35,-19.325);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#945C29").s().p("AgOC9QgFgFgBgJIAAldQABgIAFgHQAHgFAHgBQAJABAFAFQAHAHAAAIIAAFdQAAAJgHAFQgFAHgJAAQgHAAgHgHg");
	this.shape_104.setTransform(92.85,-31.35);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#945C29").s().p("AgOC9QgGgGAAgJIAAlbQAAgJAGgGQAHgHAHAAQAJAAAGAHQAGAGABAJIAAFbQgBAJgGAGQgGAGgJABQgHgBgHgGg");
	this.shape_105.setTransform(54.65,-31.35);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#CB9260").s().p("AlSAkQgPAAgLgKQgLgLAAgPQAAgOALgKQALgLAPAAIKmAAQAPAAAKALQALAKAAAOQAAAPgLALQgKAKgPAAg");
	this.shape_106.setTransform(47.175,-30.675);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#7A4D2D").ss(4.6).p("AhYAjICxhF");
	this.shape_107.setTransform(15.275,-80.125);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#7A4D2D").ss(4.6).p("AgUGFQgZh8gYiUQgwkoAGh+QACgqAEgIQAEgHAKANQAkAqAZgFQAfgGAoguQATgVABgBQAGgGgCANQgGAkAbFNQANCmAOCg");
	this.shape_108.setTransform(15.0921,-70.3818);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#AD733E").s().p("AliAqIC6hTIFpAAICjBTg");
	this.shape_109.setTransform(46.65,-37.35);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#BE854C").s().p("AgUEwQgIgJAAgMIAAo0QAAgMAIgJQAJgJALAAQAMAAAJAJQAIAJAAAMIAAI0QAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_110.setTransform(77.275,0.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#BE854C").s().p("AgUEwQgJgJAAgMIAAo0QAAgMAJgJQAIgJAMAAQAMAAAJAJQAIAJAAAMIAAI0QAAAMgIAJQgJAIgMAAQgMAAgIgIg");
	this.shape_111.setTransform(16.35,0.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#945C29").s().p("AgQDUQgGgHAAgKIAAmFQAAgKAGgGQAIgHAIAAQAJAAAHAHQAHAGAAAKIAAGFQAAAKgHAHQgHAGgJAAQgIAAgIgGg");
	this.shape_112.setTransform(69.4,-12.725);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#945C29").s().p("AgQDTQgHgHAAgKIAAmDQAAgKAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAKIAAGDQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_113.setTransform(26.725,-12.725);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#CB9260").s().p("Al3AoQgQAAgMgLQgMgNAAgQQAAgPAMgMQAMgMAQAAILvAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAg");
	this.shape_114.setTransform(16.325,-12.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#8D5221").ss(5.6).p("AhhAnIDEhN");
	this.shape_115.setTransform(-19,-67.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#8D5221").ss(5.6).p("AgXGuQgciIgaikQg0lIAGiLQACgvAFgJQAEgHALAOQAnAvAcgFQAjgHAtgzQAUgYABgBQAHgGgCAOQgHAoAdFxQAPC3AQCx");
	this.shape_116.setTransform(-19.1865,-56.4628);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#AD733E").s().p("AmIAvIDNhdIGRAAICzBdg");
	this.shape_117.setTransform(15.725,-19.875);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#BE854C").s().p("AgWFQQgKgKABgNIAApxQgBgNAKgKQAKgJAMAAQANAAAKAJQAKAKAAANIAAJxQAAANgKAKQgKAJgNAAQgMAAgKgJg");
	this.shape_118.setTransform(49.6,22.225);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#BE854C").s().p("AgWFQQgKgKAAgOIAApvQAAgOAKgJQAKgKAMAAQAOAAAJAKQAKAJAAAOIAAJvQAAAOgKAKQgJAJgOAAQgMAAgKgJg");
	this.shape_119.setTransform(-17.825,22.225);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#945C29").s().p("AAADxQgKABgHgIQgIgHABgLIAAmwQgBgKAIgHQAHgIAKAAIABAAQAJAAAIAIQAIAHgBAKIAAGwQABALgIAHQgIAIgJgBg");
	this.shape_120.setTransform(40.9,7.35);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#945C29").s().p("AgBDxQgKABgHgIQgIgHAAgLIAAmwQAAgKAIgHQAHgIAKAAIADAAQAKAAAHAIQAIAHAAAKIAAGwQAAALgIAHQgHAIgKgBg");
	this.shape_121.setTransform(-6.325,7.35);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#985E2E").s().p("An+A3QgWAAgQgQQgQgQAAgXQAAgVAQgQQAQgRAWAAIP9AAQAWAAAQARQAQAQAAAVQAAAXgQAQQgQAQgWAAg");
	this.shape_122.setTransform(-29.25,30.525);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#985E2E").ss(7.7).p("AiFA1IELhp");
	this.shape_123.setTransform(-77.25,-43.85);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#985E2E").ss(7.7).p("AggJIQgli5gkjfQhHm+AIi9QAChAAIgMQAFgJAPASQAbAgAJAIQAbAWAcgFQAwgJA9hGQAbggACgBQAKgIgEATQgJA2AoH1QAUD6AWDw");
	this.shape_124.setTransform(-77.4979,-29.1914);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#AD733E").s().p("AoVA/IEXh9IIgAAID1B9g");
	this.shape_125.setTransform(-30.05,20.475);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#BE854C").s().p("AgHHVQgPAAgLgKQgKgLAAgOIAAtiQAAgPAKgKQALgLAPAAIAPAAQAPAAALALQAKAKAAAPIAANiQAAAOgKALQgLAKgPAAg");
	this.shape_126.setTransform(15.975,77.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#BE854C").s().p("AgHHVQgQAAgKgKQgLgLABgOIAAtiQgBgPALgKQAKgLAQAAIAPAAQAQAAAKALQALAKgBAPIAANiQABAOgLALQgKAKgQAAg");
	this.shape_127.setTransform(-75.65,77.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#945C29").s().p("AgJFJQgKgBgHgHQgIgHAAgLIAApdQAAgKAIgIQAHgHAKAAIATAAQAKAAAHAHQAIAIAAAKIAAJdQAAALgIAHQgHAHgKABg");
	this.shape_128.setTransform(4.125,57.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#945C29").s().p("AgKFJQgKgBgIgHQgHgHAAgLIAApdQAAgLAHgHQAIgHAKAAIAVAAQAKAAAIAHQAHAIAAAKIAAJdQAAALgHAHQgIAHgKABg");
	this.shape_129.setTransform(-60.025,57.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#CB9260").s().p("AkvAhQgNAAgKgKQgJgKAAgNQAAgMAJgKQAKgKANAAIJfAAQANAAAKAKQAJAKAAAMQAAANgJAKQgKAKgNAAg");
	this.shape_130.setTransform(138.175,-45.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#663914").ss(4.6).p("ABQAfIifg9");
	this.shape_131.setTransform(166.725,-89.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#663914").ss(4.6).p("AATFcQAWhvAWiEQAqkJgFhxQgBgmgFgHQgDgGgJALQggAngWgFQgcgFgkgqQgQgTgCgBQgFgFACAMQAIAzgzI7");
	this.shape_132.setTransform(166.9014,-80.9985);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#AD733E").s().p("Ak9AmICRhLIFEAAICmBLg");
	this.shape_133.setTransform(138.65,-51.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#BE854C").s().p("AgSEPQgHgHAAgLIAAn5QAAgLAHgIQAIgHAKAAQALAAAHAHQAIAIAAALIAAH5QAAALgIAHQgHAIgLAAQgKAAgIgIg");
	this.shape_134.setTransform(111.25,-17.325);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#BE854C").s().p("AgSEPQgHgHgBgLIAAn5QABgLAHgHQAIgIAKAAQALAAAHAIQAJAHgBALIAAH5QABALgJAHQgHAIgLAAQgKAAgIgIg");
	this.shape_135.setTransform(165.8,-17.325);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#945C29").s().p("AgNC9QgHgFAAgJIAAldQAAgIAHgHQAFgFAIAAQAJAAAFAFQAHAHAAAIIAAFdQAAAJgHAFQgFAHgJgBQgIABgFgHg");
	this.shape_136.setTransform(118.3,-29.35);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#945C29").s().p("AgOC9QgHgHABgIIAAlbQgBgJAHgGQAGgHAIABQAJgBAGAHQAHAGgBAJIAAFbQABAIgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_137.setTransform(156.5,-29.35);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#CB9260").s().p("AlTAkQgPAAgKgKQgLgLAAgPQAAgOALgKQAKgLAPAAIKmAAQAPAAALALQALAKAAAOQAAAPgLALQgLAKgPAAg");
	this.shape_138.setTransform(163.975,-28.675);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#7A4D2D").ss(4.6).p("ABZAjIixhF");
	this.shape_139.setTransform(195.9,-78.125);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#7A4D2D").ss(4.6).p("AAWGFQAZh8AXiUQAwkogGh+QgBgqgFgIQgEgHgKANQgkAqgZgFQgfgGgoguQgTgVgBgBQgGgGACANQAGAkgaFNQgOCmgOCg");
	this.shape_140.setTransform(196.0582,-68.3818);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#AD733E").s().p("AljAqICjhTIFqAAIC5BTg");
	this.shape_141.setTransform(164.5,-35.35);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#BE854C").s().p("AgTEvQgJgIAAgMIAAo1QAAgMAJgIQAIgJALAAQAMAAAJAJQAIAIAAAMIAAI1QAAAMgIAIQgJAJgMAAQgLAAgIgJg");
	this.shape_142.setTransform(133.875,2.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#BE854C").s().p("AgUEvQgJgIAAgMIAAo0QAAgMAJgJQAJgJALAAQAMAAAJAJQAJAJAAAMIAAI0QAAAMgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape_143.setTransform(194.825,2.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#945C29").s().p("AgPDUQgHgHAAgKIAAmFQAAgKAHgGQAGgHAJAAQAJAAAIAHQAGAGAAAKIAAGFQAAAKgGAHQgHAGgKAAQgJAAgGgGg");
	this.shape_144.setTransform(141.75,-10.725);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#945C29").s().p("AgQDTQgHgHAAgKIAAmDQAAgKAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAKIAAGDQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_145.setTransform(184.425,-10.725);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#CB9260").s().p("Al3AoQgQAAgMgMQgMgLAAgRQAAgQAMgLQAMgMAQAAILvAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAg");
	this.shape_146.setTransform(194.825,-10.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#8D5221").ss(5.6).p("ABiAnIjEhN");
	this.shape_147.setTransform(230.15,-65.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#8D5221").ss(5.6).p("AAYGuQAciIAaikQA0lIgGiLQgCgvgFgJQgEgHgLAOQgnAvgcgFQgjgHgsgzQgVgYgBgBQgHgGACAOQAHAogdFxQgPC3gQCx");
	this.shape_148.setTransform(230.3365,-54.4628);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#AD733E").s().p("AmIAvIC0hdIGQAAIDNBdg");
	this.shape_149.setTransform(195.425,-17.875);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#BE854C").s().p("AgWFQQgKgKAAgNIAApxQAAgNAKgKQAKgJAMAAQANAAAKAJQAKAKAAANIAAJxQAAANgKAKQgKAJgNAAQgMAAgKgJg");
	this.shape_150.setTransform(161.55,24.225);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#BE854C").s().p("AgWFQQgKgKAAgOIAApvQAAgOAKgJQAJgKANAAQANAAAKAKQAKAJAAAOIAAJvQAAAOgKAKQgKAJgNAAQgNAAgJgJg");
	this.shape_151.setTransform(228.975,24.225);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#945C29").s().p("AAADxQgKABgHgIQgHgHAAgLIAAmwQAAgJAHgIQAHgIAKABIAAAAQALgBAHAIQAHAIAAAJIAAGwQAAALgHAHQgHAIgLgBg");
	this.shape_152.setTransform(170.275,9.35);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#945C29").s().p("AgBDxQgKABgHgIQgIgHAAgLIAAmwQAAgJAIgIQAHgIAKABIADAAQAKgBAHAIQAIAIAAAJIAAGwQAAALgIAHQgHAIgKgBg");
	this.shape_153.setTransform(217.475,9.35);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#CB9260").s().p("An+A3QgWAAgQgQQgQgQAAgXQAAgVAQgQQAQgRAWAAIP9AAQAWAAAQARQAQAQAAAVQAAAXgQAQQgQAQgWAAg");
	this.shape_154.setTransform(240.4,32.525);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#B07742").ss(7.7).p("ACGA1IkLhp");
	this.shape_155.setTransform(288.4,-41.85);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#B07742").ss(7.7).p("AAhJIQAli5AkjfQBHm+gIi9QgChAgIgMQgFgJgPASQgbAggJAIQgbAWgcgFQgwgJg9hGQgbgfgCgCQgKgIAEATQAJA2goH1QgUD6gWDw");
	this.shape_156.setTransform(288.6482,-27.1914);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#985E2E").s().p("AoVA/ID0h9IIgAAIEXB9g");
	this.shape_157.setTransform(241.2,22.475);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#BE854C").s().p("AgHHVQgPAAgLgKQgKgLAAgPIAAthQAAgPAKgLQALgKAPAAIAPAAQAPAAALAKQAKALAAAPIAANhQAAAPgKALQgLAKgPAAg");
	this.shape_158.setTransform(195.175,79.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#BE854C").s().p("AgHHVQgPAAgLgKQgKgLAAgPIAAthQAAgPAKgLQALgKAPAAIAQAAQAOAAALAKQALALAAAPIAANhQAAAPgLALQgLAKgOAAg");
	this.shape_159.setTransform(286.8,79.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#945C29").s().p("AgJFIQgKAAgHgHQgIgIAAgKIAApdQAAgKAIgIQAHgHAKgBIATAAQAKABAHAHQAIAIAAAKIAAJdQAAAKgIAIQgHAHgKAAg");
	this.shape_160.setTransform(207.025,59.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#945C29").s().p("AgKFIQgKAAgIgHQgHgIAAgKIAApdQAAgKAHgIQAIgHAKgBIAVAAQAKABAIAHQAHAIAAAKIAAJdQAAAKgHAIQgIAHgKAAg");
	this.shape_161.setTransform(271.175,59.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#25356B").s().p("EhdRgrNMC6jAAAMgBmArOMi49ArNg");
	this.shape_162.setTransform(-3.825,-137.825);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#2F457C").s().p("EhdwAt+MAAAg6KMC7hghxMgA+Bb7g");
	this.shape_163.setTransform(0.8,120.3);

	var maskedShapeInstanceList = [this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.instance_18,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.instance_19,this.shape_69,this.shape_70,this.shape_71,this.instance_20,this.shape_72,this.shape_73,this.shape_74,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.instance_20},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.instance_19},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.instance_18},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(510));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332.6,-161.5,1173.7,814.3);


// stage content:
(lib.Animace = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Izolovaný_režim
	this.instance = new lib.Celek();
	this.instance.setTransform(768.55,376.3,1,1,0,0,0,0,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(510));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1127.8,491.1,241.60000000000014,310.5);
// library properties:
lib.properties = {
	id: '3EE573D40FBA5A48A35C0B8E15DAC271',
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
an.compositions['3EE573D40FBA5A48A35C0B8E15DAC271'] = {
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