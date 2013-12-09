var eg = new ExampleObj('arg1');

ExampleObj = function(arg1) {

	this.CONSTANT_ONE = 0;
	
	this._init(arg1);
}

ExampleObj.prototype._init = function(arg1) {
	
	this._arg1 = arg1;
	
	this._addListeners();
}

ExampleObj.prototype._addListeners = function() {
	
	$('.example').on('keyup',$.proxy(this._aMethod,this)); // use proxy to define event context
	$(document).on('click','.publish',$.proxy(this._anotherMethod,this)); // attach events to document if elements are created after dom load
}