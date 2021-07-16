var fs = require('fs-extra');
var parser = require('./lib/parser.js');
var Mustache = require('mustache');
var async = require('neo-async');

var services = require("./serviceNames.json");
var ctas = require("./ctas.json");

function getServiceName(service) {
  var name = services[service];
  if (name !== undefined) {
    return name;
  } else {
    return service;
  }
}

var headerTemplate = fs.readFileSync('./template/header.mustache', {encoding: 'utf8'});
var footerTemplate = fs.readFileSync('./template/footer.mustache', {encoding: 'utf8'});

function renderSitemap(data) {
   var template = fs.readFileSync('./template/sitemap.mustache', {encoding: 'utf8'});
   var output = Mustache.render(template, data);
  fs.writeFileSync('../app/sitemap.xml', output);
}

function renderIndex(services) {
   var template = fs.readFileSync('./template/index.mustache', {encoding: 'utf8'});
   var output = Mustache.render(template, {services: services.map(function(service) {return {"service": service, "serviceName": getServiceName(service)}; })}, {
    header: headerTemplate,
    footer: footerTemplate
  });
  fs.writeFileSync('../app/index.html', output);
}

function renderReferenceService(rows) {
  var service = rows[0].service;
  var template = fs.readFileSync('./template/service.mustache', {encoding: 'utf8'});
  var output = Mustache.render(template, {title: getServiceName(service), service: service, serviceName: getServiceName(service), rows: rows, cta: ctas[service]}, {
    header: headerTemplate,
    footer: footerTemplate
  });
  fs.writeFileSync('../app/reference/' + service + '.html', output);
}

function renderReferenceAction(rows) {
  var service = rows[0].service;
  var template = fs.readFileSync('./template/action.mustache', {encoding: 'utf8'});
  fs.mkdirSync('../app/reference/' + rows[0].service);
  rows.forEach(function(row) {
    var output = Mustache.render(template, {title: row.service + ":" + row.action + " - " + getServiceName(row.service), service: service, serviceName: getServiceName(service), row: row}, {
      header: headerTemplate,
      footer: footerTemplate
    });

    fs.writeFileSync('../app/reference/' + row.service + '/' + row.action + '.html', output);
  });
}

fs.emptyDirSync('../app/reference');
fs.copySync('./static/index.html', '../app/reference/index.html');
var files = fs.readdirSync('../services');
var contents = files
  .map(function(file) {
    var content = fs.readFileSync('../services/' + file, {encoding: 'utf8'});
    var lines = content.replace(/[\r]/g, '').split('\n');
    return lines.map(parser.parseLine).filter((row) => row !== null);
  });

contents.forEach((rows) => {renderReferenceService(rows); renderReferenceAction(rows)});

renderIndex(files.map((file) => file.replace('.md', '')));
renderSitemap({services: files.map((file) => file.replace('.md', '')), contents: contents});
