var http = require('http');
var qs = require('querystring');

var server = http.createServer(function (req, res) {
  //console.log(req.headers);
  if ('/' == req.url) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end([
      '<form method="POST" action="/url">',
      '<h1>My form</h1>',
      '<fieldset>',
      '<legend>Personal information</legend>',
      '<p>Waht is your name?</p>',
      '<input type="text" name="name">',
      '<p><button>Submit</button></p>',
      '</fieldset>',
      '</form>'
    ].join(''));
  } else if ('/url' == req.url && 'POST' == req.method) {
    var body = '';
    req.on('data', function (chunk) {
      body += chunk;
    });
    req.on('end', function () {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<p>Content-Type: ' + req.headers['content-type']
      + '</p>' + '<p>Data:</p><pre>' + qs.parse(body).name + '</pre>')
    });
  }
});

server.listen(3000);
