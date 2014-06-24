(function() {
  require.config({
    paths: {
      "jquery": "../vendor/jquery"
    },
    shim: {
      app: ["jquery"]
    }
  });

  require(["app"], function(App) {
    return new App();
  });

}).call(this);

//# sourceMappingURL=maps/main.js.map