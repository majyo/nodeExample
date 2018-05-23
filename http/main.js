var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello');
  setTimeout(function () {
    res.end('Waaagh!');
  }, 500);
});

server.listen(3000);
