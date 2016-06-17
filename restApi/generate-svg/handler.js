'use strict';

const spawn = require('child_process').exec;


// Lambda Handler
module.exports.handler = function(event, context) {
  const ps = spawn(
    'node node_modules/node-googlecharts/examples/ColumnChart.js',
    (error, stdout, stderr) => {
      context.done(null, stdout);
    }
  );
};
