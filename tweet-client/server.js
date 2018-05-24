var server = require('http').createServer(function (req, res) {
  res.writeHead(200);
  res.end("Waaagh!");
});

server.listen(3000);
