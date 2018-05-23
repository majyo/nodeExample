var http = require('http');

var server = http.createServer(function (req, res) {
  console.log(req.headers);
  res.writeHead(200, {'Content-Type': 'image/jpg'});
  require('fs').createReadStream('testimg.jpg').pipe(res);
});

server.listen(3000);
