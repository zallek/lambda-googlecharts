'use strict';

const spawn = require('child_process').exec;


// Lambda Handler
module.exports.handler = function(event, context) {
  if (!event.chartOptions) {
    return context.done('BadRequest: no chartOptions');
  }

  const ps = spawn(
    'node node_modules/node-googlecharts/bin/node-googlecharts \'' + JSON.stringify(event) + '\'',
    (error, stdout, stderr) => {
      if (error) {
        context.done(new Error('Fail: ' + error.message));
      } else if (stderr) {
        context.done(new Error('Fail: ' + stderr));
      } else {
        context.done(null, stdout);
      }
    }
  );
};
