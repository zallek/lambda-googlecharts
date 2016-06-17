'use strict';

const nodeGoogleCharts = require('node-googlecharts');
const icu = require('full-icu');


// Lambda Handler
module.exports.handler = function(event, context) {

  nodeGoogleCharts(event)
  .then(svg => context.done(null, svg))
  .catch(err => context.done(err));
};
