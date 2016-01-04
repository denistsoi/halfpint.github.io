/**
 * Module Dependencies
 */

var quesadilla = require('quesadilla');
var express = require('express');
var port = process.env.PORT || 8000;
var sass = require('node-sass');
var fs = require('fs');

// push styles 
if (process.env.PUSH) {
  sass.render({
    file: 'css/main.scss',
  }, function(error, result) { // node-style callback from v3.0.0 onwards
    if (error) console.log(error);
    if(!error){
      // No errors during the compilation, write this result on the disk
      fs.writeFile('css/main.css', result.css, function(err){
        if(!err){
          //file written on disk
          console.log('done');
        }
      });
    }
  });
} else {
  express()
    .use(quesadilla(__dirname + '/css'))
    .use(express.static(__dirname))
    .listen(port, function() {
      console.log('Server is listening on port', port);
    });
}