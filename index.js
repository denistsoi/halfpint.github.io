/**
 * Module Dependencies
 */

var quesadilla = require('quesadilla');
var express = require('express');
var port = process.env.PORT || 8000;

express()
  .use(quesadilla(__dirname + '/scss'))
  .use(express.static(__dirname))
  .listen(port, function() {
    console.log('Server is listening on port', port);
  });