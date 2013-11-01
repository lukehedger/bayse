var eg = new ExampleObj('arg1');

ExampleObj = function(arg1) {

	this.CONSTANT_ONE = 0;
	
	this._init(arg1);
}

ExampleObj.prototype._init = function(arg1) {
	
	this._arg1 = arg1;
	
	this._controls();
}

ExampleObj.prototype._init = function(arg1) {
	
	$('.example').on('keyup',$.proxy(this._aMethod,this)); // use proxy to define event context
	$(document).on('click','.publish',$.proxy(this._anotherMethod,this)); // attach events to document if elements are created after dom load
}

// spin.js example
$(function loader(){
	var opts = {
	  lines: 13,
	  length: 10,
	  width: 2,
	  radius: 10,
	  corners: 1,
	  rotate: 0,
	  direction: 1,
	  color: '#333',
	  speed: 1.7,
	  trail: 80,
	  shadow: false,
	  hwaccel: false,
	  className: 'spinner',
	  zIndex: 0,
	  top: 'auto',
	  left: 'auto'
	};
	var target = document.getElementById('loading');
	var spinner = new Spinner(opts).spin(target);
});