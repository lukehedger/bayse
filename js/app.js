var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

define(["jquery", "jquery.hammer.min", "child"], function($, Hammer, Child) {
  var App;
  return App = (function() {
    App.prototype._hammer = null;

    function App() {
      this._onModalClose = __bind(this._onModalClose, this);
      var kid;
      this._addListeners();
      console.log('Running...');
      kid = new Child();
    }

    App.prototype._addListeners = function() {
      $(document).on('click', '.example', this._function);
      return $('.example').on('click', this._function);
    };

    App.prototype._onModalOpen = function() {
      return $('body').addClass('modal-open').append('<div class="overlay"></div>');
    };

    App.prototype._onModalClose = function() {
      $('.overlay').fadeOut(200, function() {
        return $(this).remove();
      });
      return $('body').removeClass('modal-open');
    };

    return App;

  })();
});

//# sourceMappingURL=../js/app.js.map
