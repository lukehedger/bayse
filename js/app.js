//@ sourceMappingURL=app.map
// Generated by CoffeeScript 1.6.1
(function() {

  define(["jquery", "jquery.hammer.min", "child"], function($, Hammer, Child) {
    var App,
      _this = this;
    return App = (function() {

      App.prototype._hammer = null;

      function App() {
        var kid,
          _this = this;
        this._onModalClose = function() {
          return App.prototype._onModalClose.apply(_this, arguments);
        };
        this._addListeners();
        console.log('Running...');
        kid = new Child();
      }

      App.prototype._addListeners = function() {
        $(document).on('click', '.example', this._function);
        return $('.example').on('click', this._function);
      };

      App.prototype._function = function() {
        return console.log('hello : )');
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

}).call(this);
