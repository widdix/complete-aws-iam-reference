var fs = require('fs');
var parser = require('./lib/parser.js');

var files = fs.readdirSync('../services');
var rows = files
  .map(function(file) {
    var content = fs.readFileSync('../services/' + file, {encoding: 'utf8'});
    var lines = content.replace(/[\r]/g, '').split('\n');
    return lines.map(parser.parseLine);
  })
  .reduce(function(a, b) {
    return a.concat(b);
  }, [])
  .filter((row) => row !== null);

console.log(JSON.stringify(rows));
