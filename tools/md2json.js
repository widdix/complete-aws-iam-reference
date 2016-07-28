var fs = require('fs');

function parseLink(cell) {
  if (cell.indexOf('](') === -1) {
    return null;
  }
  // [ec2:DetachInternetGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html)
  var s = cell.slice(1, -1).split('](');
  var s2 = s[0].split(':');
  return {
    service: s2[0],
    action: s2[1],
    doc: s[1]
  }
}

function parseLine(line) {
  // [ec2:DetachInternetGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html) | ... | * | - |
  var cell = line.split("|");
  if (cell.length !== 5) {
    return null;
  }
  var link = parseLink(cell[0].trim());
  if (link === null) {
    return null;
  }
  return {
    "service": link.service,
    "action": link.action,
    "doc": link.doc,
    "description": cell[1].trim(),
    "resources": cell[2].trim().split(",").map((s) => s.trim()),
    "conditions": cell[3].trim().split(",").map((s) => s.trim()).filter((s) => s !== "-")
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
