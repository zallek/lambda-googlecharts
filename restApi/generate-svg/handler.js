'use strict';

const spawn = require('child_process').exec;


// Lambda Handler
module.exports.handler = function(event, context) {
  const ps = spawn(
    'node node_modules/node-googlecharts/bin/node-googlecharts \'' + JSON.stringify(event) + '\'',
    (error, stdout, stderr) => {
      if (error) {
        context.done(error);
      } else {
        context.done(null, stdout);
      }
    }
  );
};
