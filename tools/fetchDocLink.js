var loader = require('./lib/loader.js');
var parser = require('./lib/parser.js');
var fs = require('fs');

if (process.argv[2].length === 0) {
  console.error("no uri passed as argument");
  process.exit(1);
}
if (process.argv[3].length === 0) {
  console.error("no file passed as argument");
  process.exit(1);
}

function processLine(data, line) {
  // | [ec2:DetachInternetGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html) | ... | * | - |
  var cell = line.split("|");
  if (cell.length !== 6) {
    return line;
  }
  var link = parser.parseLink(cell[1].trim());
  if (link === null) {
    return line;
  }
  if (link.doc === '') {
    var doc = data.find((row) => row.action === link.action);
    return '| [' + link.service + ':' + link.action + '](' + doc.doc + ') | ' + cell[2] + ' |' + cell[3] + '|' + cell[4] + '|';
  } else {
    return line;
  }
}

loader.load(process.argv[2], function(err, $) {
  if (err) {
    throw err;
  } else {
    var data = [];
    $('ul.itemizedlist').first().find('li a').each(function() {
      var t = $(this);
      var s = t.text().split(':');
      data.push({
        service: s[0],
        action: s[1],
        doc: t.attr("href")
      });
    });

    var content = fs.readFileSync(process.argv[3], {encoding: 'utf8'});
    var lines = content.replace(/[\r]/g, '').split('\n');
    lines
      .map((line) => processLine(data, line))
      .forEach((line) => process.stdout.write(line + '\n'));
  }
});
