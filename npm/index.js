// Generated by CoffeeScript 1.3.3
(function() {
  var Del, Get, List, Method, Post, Put, Resource, createResource, modelNameToResourcePath, mongoose;

  mongoose = require('mongoose');

  Method = require('./lib/Method');

  Resource = require('./lib/Resource');

  Get = require('./lib/crud/Get');

  Put = require('./lib/crud/Put');

  Del = require('./lib/crud/Del');

  List = require('./lib/crud/List');

  Post = require('./lib/crud/Post');

  modelNameToResourcePath = function(modelName) {
    return '/' + modelName.toLowerCase();
  };

  createResource = function(options) {
    var hooks, itemPath, listPath, methodOptions, model, path, resource;
    model = options.model;
    if (!model) {
      throw 'No model';
    }
    path = options.path || modelNameToResourcePath(model.modelName);
    hooks = options.hooks || {};
    methodOptions = {
      upsert: options.upsert,
      mtimeField: options.mtimeField,
      ctimeField: options.ctimeField,
      plainOutput: options.plainOutput
    };
    listPath = path;
    itemPath = "" + path + "/:_id";
    resource = new Resource;
    resource.addMethod('get', new Get(model, itemPath, methodOptions));
    resource.addMethod('put', new Put(model, itemPath, methodOptions));
    resource.addMethod('del', new Del(model, itemPath, methodOptions));
    resource.addMethod('post', new Post(model, listPath, methodOptions));
    resource.addMethod('list', new List(model, listPath, methodOptions));
    resource.use(hooks);
    return resource;
  };

  exports.createResource = createResource;

  exports.Method = Method;

  exports.Resource = Resource;

}).call(this);
