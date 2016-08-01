var loader = require('./lib/loader.js');

if (process.argv[2].length === 0) {
  console.error("no uri passed as argument");
  process.exit(1);
}

loader.load(process.argv[2], function(err, $) {
  if (err) {
    throw err;
  } else {
    $('ul.itemizedlist').first().find('li a').each(function() {
      var t = $(this);
      process.stdout.write('| [' + t.text() + '](' + t.attr("href") + ') | ... | ... | ... |\n');
    });
  }
});
