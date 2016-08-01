var cheerio = require('cheerio');
var request = require('request');

exports.load = function(uri, cb) {
  request({
    uri: uri,
    method: "GET",
    encoding: "utf8"
  }, function(err, res, body) {
    if (err) {
      err.path = path;
      err.uri = uri;
      cb(err);
    } else {
      if (res.statusCode === 200) {
        var $ = cheerio.load(body);
        cb(undefined, $);
      } else {
        err = new Error('non 200 status code received');
        err.uri = uri;
        err.path = path;
        err.statusCode = res.statusCode;
        cb(err);
      }
    }
  });
};
