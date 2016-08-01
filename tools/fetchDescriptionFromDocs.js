var loader = require('./lib/loader.js');
var parser = require('./lib/parser.js');
var async = require('neo-async');
var fs = require('fs');

if (process.argv[2].length === 0) {
  console.error("no file passed as argument");
  process.exit(1);
}

function cleanupDescription(description) {
  description = description.substring(0, description.indexOf('.'));
  description += '.';
  description = description.replace(/\s\s+/g, ' ');
  return description.trim();
}

function processLine(line, cb) {
  // | [ec2:DetachInternetGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html) | ??? | * | - |
  var cell = line.split("|");
  if (cell.length !== 6) {
    return cb(null, line);
  }
  var link = parser.parseLink(cell[1].trim());
  if (link === null) {
    return cb(null, line);
  }
  if (cell[2].trim() === '???') {
    loader.load(link.doc, function(err, $) {
      if (err) {
        cb(err);
      } else {
        //var description = $('p.simpara').first().text();
        var description = $('div.section > p').first().text();
        cb(null, '|' + cell[1] + '| ' + cleanupDescription(description) + ' |' + cell[3] + '|' + cell[4] + '|');
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
