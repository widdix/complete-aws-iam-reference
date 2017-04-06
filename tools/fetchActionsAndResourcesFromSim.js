var loader = require('./lib/loader.js');
var fs = require('fs');

if (process.argv[2].length === 0) {
  console.error("no file passed as argument");
  process.exit(1);
}

var content = fs.readFileSync(process.argv[2], {encoding: 'utf8'});
var data = JSON.parse(content);

data.forEach(function(row) {
  var resources = (row.requiredResourceNames || []).map((name) => 'arn:aws:' + row.prefix + ':$region:$account:' + name + '/$' + name).join(',');
  process.stdout.write('| [' + row.prefix + ':' + row.name + ']() | ??? | ' + (resources || '*') + ' | ??? |\n');
});
