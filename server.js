/**
 * Module Dependencies
 */

var express = require('express');
var quesadilla = require('quesadilla');
var enchilada = require('enchilada');
var port = process.env.PORT || 8000;

express()
  .use(quesadilla(__dirname + '/styles'))
  .use(enchilada(__dirname + '/scripts'))
  .use(express.static(__dirname + '/public'))
  .listen(port, function() {
    console.log('Server is listening on port', port);
  });