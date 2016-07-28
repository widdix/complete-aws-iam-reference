var request = require('request');
var async = require('neo-async');
var fs = require('fs');

if (process.argv[2].length === 0) {
  console.error("no file passed as argument");
  process.exit(1);
}

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


function processLine(line, cb) {
  // [ec2:DetachInternetGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html) | ... | * | - |
  var cell = line.split("|");
  if (cell.length !== 6) {
    return cb(null, line);
  }
  var link = parseLink(cell[1].trim());
  if (link === null) {
    return cb(null, line);
  }
  if (cell[2].trim() === '...') {
    request({
      url: link.doc,
      method: 'GET'
    }, function(err, res, body) {
      if (err) {
        cb(err);
      } else {
        var description = body.substring(body.indexOf('<h1 class="topictitle">' + link.action + '</h1>'));
        description = description.substring(description.indexOf('<p class="simpara">') + 19);
        description = description.substring(0, description.indexOf('.'));
        description += '.';
        description = description.replace(/\s\s+/g, ' ');
        description = description.trim();
        cb(null, '|' + cell[1] + '| ' + description + ' |' + cell[3] + '|' + cell[4] + '|')
      }
    });
  } else {
    return cb(null, line);
  }
}
var content = fs.readFileSync(process.argv[2], {encoding: 'utf8'});
var lines = content.replace(/[\r]/g, '').split('\n');
async.mapLimit(lines, 8, processLine, function(err, lines) {
  if (err) {
    throw err;
  } else {
    lines.forEach((line) => process.stdout.write(line + '\n'));
  }
});
