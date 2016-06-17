'use strict';


// Require Logic
var lib = require('../lib');

// Lambda Handler
module.exports.handler = function(event, context) {

  lib.singleAll(event, function(error, response) {
    return context.done(error, response);
  });
};