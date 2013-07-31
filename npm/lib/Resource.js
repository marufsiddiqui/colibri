// Generated by CoffeeScript 1.3.3
(function() {
  var Resource,
    __hasProp = {}.hasOwnProperty;

  module.exports = Resource = (function() {

    function Resource() {
      this.methods = {};
    }

    Resource.prototype.addMethod = function(name, method) {
      return this.methods[name] = method;
    };

    Resource.prototype.hasMethod = function(name) {
      if (this.methods.hasOwnProperty(name)) {
        return true;
      }
      return false;
    };

    Resource.prototype.use = function(plugin) {
      var hooks, methodName, _results;
      _results = [];
      for (methodName in plugin) {
        if (!__hasProp.call(plugin, methodName)) continue;
        hooks = plugin[methodName];
        if (!this.hasMethod(methodName)) {
          throw new Error("Cannot add plugin. No method " + methodName);
        }
        _results.push(this.methods[methodName].use(hooks));
      }
      return _results;
    };

    Resource.prototype.express = function(app) {
      var method, name, _ref, _results;
      _ref = this.methods;
      _results = [];
      for (name in _ref) {
        if (!__hasProp.call(_ref, name)) continue;
        method = _ref[name];
        _results.push(app[method.getVerb()](method.getPath(), method.getMiddleware()));
      }
      return _results;
    };

    return Resource;

  })();

}).call(this);