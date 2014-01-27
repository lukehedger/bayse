var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["jquery", "App"], function($, App) {
  var Child;
  return Child = (function(_super) {
    __extends(Child, _super);

    function Child() {
      this._function();
    }

    return Child;

  })(App);
});

//# sourceMappingURL=../js/child.js.map
