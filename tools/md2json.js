var fs = require('fs');
var parser = require('./lib/parser.js');

function parseLine(line) {
  // [ec2:DetachInternetGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html) | ??? | * | - |
  var cell = line.split("|");
  if (cell.length !== 6) {
    return null;
  }
  var link = parser.parseLink(cell[1].trim());
  if (link === null) {
    return null;
  }
  return {
    "service": link.service,
    "action": link.action,
    "doc": link.doc,
    "description": cell[2].trim(),
    "resources": cell[3].trim().split(",").map((s) => s.trim()),
    "conditions": cell[4].trim().split(",").map((s) => s.trim()).filter((s) => s !== "-")
  };
}
var files = fs.readdirSync('../services');
var rows = files
  .map(function(file) {
    var content = fs.readFileSync('../services/' + file, {encoding: 'utf8'});
    var lines = content.replace(/[\r]/g, '').split('\n');
    return lines.map(parseLine);
  })
  .reduce(function(a, b) {
    return a.concat(b);
  }, [])
  .filter((row) => row !== null);

console.log(JSON.stringify(rows));
