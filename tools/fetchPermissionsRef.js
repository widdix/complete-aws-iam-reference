var loader = require('./lib/loader.js');
var parser = require('./lib/parser.js');

if (process.argv[2].length === 0) {
  console.error("no uri passed as argument");
  process.exit(1);
}

loader.load(process.argv[2], function(err, $) {
  if (err) {
    throw err;
  } else {
    var data = [];
    $('div.table table tbody tr').each(function() {
      var t = $(this);
      var docTD = t.find("td:nth-child(1)");
      var serviceActionTD = t.find("td:nth-child(2)");
      var resourceTD = t.find("td:nth-child(3)");
      var serviceAction = serviceActionTD.text().trim().split(":");
      data.push({
        service: serviceAction[0].trim(),
        action: serviceAction[1].trim(),
        doc: docTD.find("a").attr("href"),
        resource: resourceTD.text().trim()
      });
    });

    data.forEach((line) => process.stdout.write("| [" + line.service + ":" + line.action + "](" + line.doc + ") | ??? | " + line.resource + " | ??? |\n"));
  }
});
