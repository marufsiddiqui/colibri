// Generated by CoffeeScript 1.3.3
(function() {
  var Get, Method,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Method = require('../Method');

  module.exports = Get = (function(_super) {

    __extends(Get, _super);

    function Get() {
      return Get.__super__.constructor.apply(this, arguments);
    }

    Get.prototype.defaultVerb = function() {
      return 'get';
    };

    Get.prototype.defaultSteps = function() {
      return ['begin', 'input', 'load', 'load', 'serialize', 'output'];
    };

    Get.prototype.input = function(req, res, next) {
      var rest;
      rest = req.rest;
      rest._id = req.param('_id');
      return next(null);
    };

    Get.prototype.load = function(req, res, next) {
      var rest, _id;
      rest = req.rest;
      _id = rest._id;
      return rest.model.findById(_id, function(err, doc) {
        if (err) {
          return next(err);
        } else {
          rest.document = doc;
          if (doc) {
            return next(null);
          } else {
            return res.send(404);
          }
        }
      });
    };

    Get.prototype.serialize = function(req, res, next) {
      var rest;
      rest = req.rest;
      rest.result = rest.document.toObject();
      return next(null);
    };

    return Get;

  })(Method);

}).call(this);
