var fs = require('fs');
var parser = require('./lib/parser.js');
var Mustache = require('mustache');

function renderSitemap(services) {
   var template = fs.readFileSync('./template/sitemap.mustache', {encoding: 'utf8'});
   var output = Mustache.render(template, {services: services});
  fs.writeFileSync('../app/sitemap.xml', output);
}

function renderIndex(services) {
   var template = fs.readFileSync('./template/index.mustache', {encoding: 'utf8'});
   var output = Mustache.render(template, {services: services}, {
    header: fs.readFileSync('./template/header.mustache', {encoding: 'utf8'}),
    footer: fs.readFileSync('./template/footer.mustache', {encoding: 'utf8'})
  });
  fs.writeFileSync('../app/index.html', output);
}

function renderReferenceService(rows) {
  var service = rows[0].service;
  var template = fs.readFileSync('./template/reference.mustache', {encoding: 'utf8'});
  var output = Mustache.render(template, {service: service, rows: rows}, {
    header: fs.readFileSync('./template/header.mustache', {encoding: 'utf8'}),
    footer: fs.readFileSync('./template/footer.mustache', {encoding: 'utf8'})
  });
  fs.writeFileSync('../app/reference/' + service + '.html', output);
}

var files = fs.readdirSync('../services');
files
  .map(function(file) {
    var content = fs.readFileSync('../services/' + file, {encoding: 'utf8'});
    var lines = content.replace(/[\r]/g, '').split('\n');
    return lines.map(parser.parseLine).filter((row) => row !== null);
  })
  .forEach((rows) => renderReferenceService(rows));

renderIndex(files.map((file) => file.replace('.md', '')));
renderSitemap(files.map((file) => file.replace('.md', '')));
