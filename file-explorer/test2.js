require('http').createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello, world</h2>');
}).listen(3000);
