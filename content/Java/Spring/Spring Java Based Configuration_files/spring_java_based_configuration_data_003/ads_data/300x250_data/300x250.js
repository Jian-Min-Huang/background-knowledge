(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,762,571);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,404,124);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,47);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,250);// helper functions:

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


(lib.補間動畫2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjqAeIAAABQgRAPgUADIgFgKQAJgBAJgEQAJgEAIgHQAMgNAIgSIAJAFQgGAPgIALIATAUIgJAJIgSgWgAgtArIAOgQQAXgZAIglIgaAAIAAgMIAlAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAFAdAJASQAIASAVAWIgLAGQgSgWgIgQQgFgLgGgWQgMAmggAjgABwAuIABgOQAMAEAEABQAMACAGgHQADgFAAgIQABgTgBgDQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIgqAAIgDAMQgFAagRAPIgKgIIABgBQAXgSAAgoIAAgKIgUAAIAAgMIApAAIAAgKIAMAAIAAAKIAoAAIAAAMIg9AAIAAAMIAzAAIADABIABACQABACgBAgQgBANgEAHQgDAFgHADQgEACgGAAQgKAAgPgFgAiMAwIgBgOIANADQAEAAABgBIACgIIABgIQABgtgBgBIgCgBIgLAAIgDAcQgEAfgKAPIgKgDQAQgfABgoIgOAAIAAgLIAOAAIAAgMIAKAAIAAAMIAUAAIACAAQADACAAAEIgBApQAAAegHAIQgDADgHAAQgFAAgJgCgAjMAwIAAgMQAJADADgBIABgDIAAhUIALAAIAABZQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAIgFAEIgHABIgLgBgAlgAnIgkAKIgEgLIAGgBIAAhTQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAmAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAAAwQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgeAAIAAAdIAUgFIgGgNIAKgEQAGANAIAVIgKADgAl4gFIAUAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgIIgXAAgAl4gjIAAAIIAXAAIAAgIQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAgBAAIgRAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAABAAAAgADpAxIAAgSQgXANgRADIgEgLQASgDARgJIghAAIAAgLIAqAAIAAgHIAKAAIAAAHIApAAIAAALIgiAAQAQAJAVAEIgGALQgUgFgSgMIAAASgAlRAwIAAhfQAAAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAIAjAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAIAABQQAAAFgFADQgIADgNgDIAAgMQAKADACgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBIAAhAIgBgBIgRAAIgBABIAABVgAFfgnIApArIgpArgAhKAvIAAgGIgRAAIAAAGIgMAAIAAhXQAAgEAFAAIAfAAQAFAAAAAEIAABXgAhbgfIAAA9IARAAIAAg9QAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgNAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABgAkUATQAKgFAMgJQgLgLgLgHIAHgJQABAAAHAGIAKgPIgWAAIAAgLIAYAAIAAgIIALAAIAAAIIAYAAIAAALIgZAAIgOAXIAGAHQAHgIAHgQIAKAEQgFAMgEAHQgKAQgbAOgAjSAZIAAhFIALAAIAABFgADwACQgTAJgegBIAAgMQAPACAMgCIABAAIgOgDIgCgHIAIgFIgVAAIAAgLIAiAAIAGgHIgdAAIgBABIAAAGIgKAAIAAgQQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAIApAAIAAgFIAKAAIAAAFIAqAAQAEAAAAAFQgBAGgDAJIgBAAIAAAJIgQAAIgPANIAhAGIgFAKgADdgNQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIAQADQAHgCAIgHIgaAAgADwgeIgCACIAqAAIgFgBIACgEQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgpAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-5.1,78.5,10.4);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,42.9).s().p("AksEsQh8h8AAiwQAAivB8h8QB9h9CvAAQCwAAB8B9QB9B8AACvQAACwh9B8Qh8B9iwAAQivAAh9h9g");
	this.shape.setTransform(42.5,42.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,42.9).s().p("AksEsQh8h8AAiwQAAivB8h8QB9h9CvAAQCwAAB8B9QB9B8AACvQAACwh9B8Qh8B9iwAAQivAAh9h9g");
	this.shape_1.setTransform(166.5,42.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(0,0,209,85), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlBAIAAgFIhIAAIAAAFIgQAAIAAh2QAAgFAGAAIBcAAQAGgBAAAHIAAB1gAgjArIBIAAIAAglIhIAAgAgjgpIAAAgIBIAAIAAggQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIhEAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAgAiMA+IAAh4QAAgEAEAAIAsAAQAEAAAAAEIAABhQAAAHgHAEQgJAEgRgDIAAgSQAKAEAEgBQAEgCAAgDIAAhLQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIgTAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIAABqgACFA7IgSgGIgMgKIgGASIgPgDQALgdgBgdIAPgBIgBAYQACAEAFAFIAAgpIgZAAIAAgPIAZAAIAAgLIgWAAIAAgQIAWAAIAAgMIAPAAIAAAMIAPAAIAAAQIgPAAIAAALIAQAAIAAAPIgQAAIAAANIAQAAIAAAQIgQAAIAAAWQANADAPAAIAzAAIgEARgAjOAtIAGgBIAAhlQAAgFAFAAIAuAAQAFAAAAAFIAAA8QAAAFgFAAIgjAAIAAAgIAUgEIgGgRIAOgFQALAhACAKIgOAEIgDgKIgpALgAi4gGIAVAAQAEgBAAgEIAAgHIgZAAgAi4gqIAAAIIAZAAIAAgIQAAgBAAgBQgBgBAAAAQgBgBAAAAQgBAAgBAAIgSAAQgDAAAAAEgACmAoQgJAAgFgFQgEgFAAgIIAAhPQAAAAAAgBQABgBAAAAQABgBAAAAQABAAABAAIAuAAQABAAABAAQAAAAABABQAAAAABABQAAABAAAAIAAAvQAAAEgEAAIgjAAIAAAVIABAGQADADACAAIAOAAQADAAACgCQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQACgCgBgMIAPABQgBASgEAGQgFAKgHAAgACjgqIAAAUIAWAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIAAgSQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIgUAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAABg");
	this.shape.setTransform(20.7,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(0,0,41.5,12.8), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(93.8,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003366").s().p("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");
	this.shape_1.setTransform(92.8,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-22,0,230.6,42.5), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#092A5B","rgba(17,133,207,0)"],[0,1],1,-63,1,46).s().p("A5YJdIAAy5MAyxAAAIAAS5g");
	this.shape.setTransform(162.5,60.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,325,121), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(66.1,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,132.3,17.6), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(16,7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkwBiIgNgGIAGgPQAGADAFABQAGABAHAAQAJAAAGgEQADgEAAgJIAAgGIgJAFQgFADgHAAQgJAAgGgDQgHgDgDgGQgEgEgDgIQgCgHAAgJQAAgJACgHQADgIAEgEQADgFAHgDQAFgEAKAAIAHABIAGADIAGADIAEADIAEgHIARAAIAABHQgBAKgDAHQgCAHgFAFQgGAFgHACQgFADgMAAQgKAAgHgCgAkkAGQgDABgDADIgDAHIgBAKIABAJIADAHQADADADACQADABAFAAIAIgBIAHgDIAAgkIgHgDIgIgCQgFAAgDACgAMdBBQgGgDgGgGQgDgEgEgJQgCgGAAgKQAAgJACgGQAEgJADgEQAGgGAGgCQAHgEAIAAQAJAAAHADQAGADAEAEQAFAEACAGQABAFAAAIIAAAHIAAAHIgxAAIACAHIADAFIAGAEIAHABIANgBIAKgEIAFAQQgFADgIABQgHACgKAAQgJAAgHgDgAMmAEIgFAEQgCACgBADIgBAHIAfAAIAAgCIgBgGIgCgFQgBgCgEgCIgIgBQgEAAgCACgAHaBBQgIgEgEgFQgEgEgDgJQgDgGAAgKQAAgKADgFQADgJAEgEQAFgGAGgCQAHgEAJAAQAIAAAHADQAGADAFAEQAEADACAHQACAIAAAFIgBAOIgxAAIACAHIADAFIAHAEIAHABIAMgBIALgEIAFAQQgGADgIABQgGACgKAAQgKAAgGgDgAHjAEIgGAEQgBACgBADIgCAHIAfAAIAAgIQgBgDgCgCQgBgCgEgCIgHgBQgDAAgDACgADlBBQgHgEgFgFQgEgFgDgIQgCgIAAgIQAAgIACgHQADgHAEgGQAFgFAHgDQAHgEAIAAQAJAAAHADQAIADACAEQAEADADAHQACAIAAAFIgBAOIgxAAQAAAEACADIADAFIAGAEIAHABIANgBIAKgEIAGAQQgHADgHABQgHACgKAAQgIAAgIgDgADuAEIgFAEIgDAFIgBAHIAfAAIAAgIIgDgFIgFgEIgHgBQgEAAgDACgAANBAQgJgEgFgIQgHgHgCgLQgDgKgBgNQABgLADgJQACgKAHgIQAGgIAKgFQAJgEANAAQANAAAHACIAPAFIgGASIgNgFQgHgBgJAAQgHAAgGACQgGADgDAFQgEAEgCAIQgCAGABAIQgBAJACAHQACAGADAGQAEAFAFACQAGADAHAAIAJAAIAIgDIAAgUIgSgDIAAgQIAnAAIAAA0QgKAEgIADQgLACgKAAQgMAAgKgEgAjQBBQgIgDgFgGQgEgFgDgIQgDgGAAgKQAAgJADgGQADgIAEgFQAFgFAHgDQAHgEAKAAQAIAAAIADQAGADAFAEQAFAEABAGQADAGAAAHIgCAOIgzAAIACAHQACADACACIAGAEIAIABIAMgBIAMgEIAFAQQgFADgIABQgIACgKAAQgKAAgHgDgAjHAEQgEABgCADIgCAFIgCAHIAhAAIgBgIQAAgDgDgCIgFgEIgHgBQgEAAgDACgAmVA9QgHgGAAgLQAAgHACgEQADgGADgCQAFgDAHgCQAIgBAKAAIALAAIAAgEQAAgDgCgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgEgCIgEAAIgNACIgNAEIgEgQQAEgCAKgDIARgCQAQAAAJAIQAJAIAAAPIAAAfIAAACIACABIAGAAIAAAPIgLABQgGAAgFgDQgDgCgCgEIAAAAIgLAGIgHACIgHABQgOAAgFgHgAmDAjQgFADAAAEQAAAJALAAIAJgBIAJgEIAAgNIgJAAQgLAAgEACgApeBCQgHgBgIgEIAHgQIAMAFIAMACQAHAAACgCQAEgCAAgEQgBgDgCgCIgagIQgDgBgDgDIgGgHQgBgDAAgGQAAgLAIgGQAJgHAPAAQAJAAAGACIAOAEIgGAOIgLgDIgLgBQgHAAgCABQgDADAAADQAAADADACIAHADIAKACIAIADIAHAEIAFAHQACAEgBAFQABAGgDAFQgCAEgFAEQgCACgIADQgFABgIAAQgLAAgGgCgAs2BBQgIgDgGgGQgFgGgCgHQgDgHAAgJQAAgIADgIQACgGAFgGQAGgFAIgDQAGgEALAAQALAAAGAEQAIADAGAFQAFAGACAGQACAHAAAJQAAAKgCAGQgCAHgFAGQgGAGgIADQgGADgLAAQgLAAgGgDgAssAGQgEAAgDAEIgDAHIgCAKIACAKIADAIQADADAEABIAHABIAHgBQAFgBABgDQADgEABgEQACgDAAgHQAAgFgCgFQgBgDgDgEQgCgEgEAAQgDgCgEAAQgEAAgDACgArpA+QgDgGAAgLIAAhaIAVAAIAABeIAAACIACAAIAJAAIAAAPIgNABQgLAAgFgFgALQBCIgchLIAAgBIAUAAIATA2IAAAAIASg2IAWAAIAAABIgcBLgAKUBCIAAhMIAVAAIAABMgAJABCIAAhsIBFAAIAAATIgwAAIAAAdIArAAIAAASIgrAAIAAAqgAGeBCIAAhGIAAAAIgWAqIgRAAIgWgqIgBAAIAABGIgUAAIAAhsIAUAAIAgA5IAfg5IAUAAIAABsgACYBCIgchLIAAgBIAVAAIASA2IAAAAIATg2IAVAAIAAABIgdBLgABcBCIAAhMIAVAAIAABMgAhZBCIAAgvQAAgHgCgEQgEgEgHAAIgGABIgEABIgGAFIAAA3IgXAAIAAhMIASAAIADAHIAKgGIAGgDIAJgBQAOAAAHAJQAIAHAAAOIAAAxgAnSBCIgSg4IAAAAIgSA4IgXAAIgXhLIAAgBIAVAAIAPA0IAAAAIARg0IAXAAIAQA0IAPg0IAVAAIAAABIgWBLgAqNBCIgbgkIgBAAIAAAkIgVAAIAAhvIAVAAIAABEIABAAIAbghIAXAAIAAABIgcAjIAeAmIAAACgAuPBCIgnhqIAAgCIAYAAIAcBUIABAAIAbhUIAYAAIAAACIgmBqgAOIgOIAAgiIgfAAIAAgRIAfAAIAAgiIAQAAIAAAiIAfAAIAAARIgfAAIAAAigAKWgbQgDgEgBgFQABgEADgEQADgDAGAAQAFAAAEADQADAEAAAEQAAAGgDADQgEADgFAAQgGAAgDgDgABegbQgDgDAAgGQAAgEADgEQAEgDAEAAQAGAAADADQAEAEAAAEQAAAGgEADQgDADgGAAQgFAAgDgDg");
	this.shape.setTransform(160.3,28.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A7KGQIAAsfMA2VAAAIAAMfg");
	this.shape_1.setTransform(159,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-14.9,0,347.9,80), null);


(lib.btnnnn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("EgiwgZsMBFhAAAMAAAAzZMhFhAAAg");
	this.shape.setTransform(222.5,164.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("EgiwAZtMAAAgzZMBFhAAAMAAAAzZg");
	this.shape_1.setTransform(222.5,164.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.man_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.man();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man_1, new cjs.Rectangle(0,0,164,250), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,762,571), null);


(lib.愛車最知道 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(53.4,9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.愛車最知道, new cjs.Rectangle(0.7,0.5,105.5,17.6), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.補間動畫2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(57.1,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:60.1},6).to({x:57.1},5).wait(1));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0057A7").s().p("EgjdACMIAAkXMBG7AAAIAAEXg");
	this.shape.setTransform(227,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,454,28);


(lib.car_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(45));

	// 圖層 2
	this.instance = new lib.元件9();
	this.instance.parent = this;
	this.instance.setTransform(84.1,49.2,1,1,0,0,0,104.5,42.5);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(59));

	// 圖層 1
	this.instance_1 = new lib.car();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,404,124);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_194 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(194).call(this.frame_194).wait(6));

	// 圖層 2
	this.instance = new lib.btnnnn();
	this.instance.parent = this;
	this.instance.setTransform(354.9,137.1,1.99,0.833,0,0,0,222.5,164.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnnnn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(200));

	// footer
	this.instance_1 = new lib.元件1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(159,135,1,1,0,0,0,159,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(200));

	// 即日起
	this.instance_2 = new lib.元件8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(187.4,21.4,1,1,0,0,0,20.7,6.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({x:268.2,alpha:1},14,cjs.Ease.get(1)).to({_off:true},65).wait(2));

	// 新車車主只要月付$999 獨享5年保固4年保養 
	this.instance_3 = new lib.元件7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(104.3,53.6,1,1,0,0,0,104.3,20.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(122).to({_off:false},0).to({x:185.1,alpha:1},14,cjs.Ease.get(1)).to({_off:true},62).wait(2));

	// 即刻加入方案4  
	this.instance_4 = new lib.元件10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(335.2,100,1,1,0,0,0,227,14);
	this.instance_4._off = true;

	this.instance_5 = new lib.補間動畫2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(247.2,100.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0057A7").s().p("EgjdACMIAAkXMBG7AAAIAAEXg");
	this.shape_1.setTransform(417.2,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},128).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.shape_1},{t:this.instance_5}]},52).to({state:[]},4).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(128).to({_off:false},0).to({x:417.2},14,cjs.Ease.get(1)).to({_off:true},52).wait(6));

	// 愛車最知道！ 
	this.instance_6 = new lib.愛車最知道();
	this.instance_6.parent = this;
	this.instance_6.setTransform(90,122.3,1,1,0,0,0,-15,90);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66).to({_off:false},0).to({x:160,y:125,alpha:1},16,cjs.Ease.get(1)).wait(23).to({x:240,alpha:0},14,cjs.Ease.get(-1)).to({_off:true},1).wait(80));

	// car
	this.instance_7 = new lib.car_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-103.7,171.4,1.27,1.27,0,0,0,202,62.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(61).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,x:131.1,y:170.4},15,cjs.Ease.get(1)).to({_off:true},122).wait(2));

	// 原廠服務有多好 
	this.instance_8 = new lib.元件2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(175.9,44.3,1,1,0,0,0,66.1,8.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({x:222.9,alpha:1},15,cjs.Ease.get(1)).wait(26).to({x:375.9,y:41.6},13,cjs.Ease.get(-1)).to({_off:true},1).wait(137));

	// man
	this.instance_9 = new lib.man_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(151,152.8,1,1,0,0,0,82,125);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:105,alpha:1},15,cjs.Ease.get(0.98)).wait(34).to({x:401},13,cjs.Ease.get(-1)).to({_off:true},1).wait(137));

	// 圖層 22
	this.instance_10 = new lib.元件6();
	this.instance_10.parent = this;
	this.instance_10.setTransform(155.4,52.1,1.8,1.143,5,0,0,162.3,60.4);
	this.instance_10.alpha = 0;
	new cjs.ButtonHelper(this.instance_10, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:60.3,scaleY:1.9,x:151.4,y:97.3,alpha:1},15).to({_off:true},183).wait(2));

	// bg
	this.instance_11 = new lib.bg_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-70.9,158.5,1,1,0,0,0,381,285.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:0},15,cjs.Ease.get(0.98)).to({x:14},34).to({regX:381.1,regY:285.6,scaleX:0.67,scaleY:0.67,x:93.6,y:155.8},21,cjs.Ease.get(1)).to({_off:true},128).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301.9,-2,1250.6,571);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.png?1492850662511", id:"bg"},
		{src:"images/car.png?1492850662511", id:"car"},
		{src:"images/logo.jpg?1492850662511", id:"logo"},
		{src:"images/man.png?1492850662511", id:"man"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;