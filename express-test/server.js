var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
  console.log(req.query);
  res.send(req.query.test);
});

app.post('/', function (req, res) {
  console.log(req.body);
  res.send(req.body.test);
});

app.listen(3000);
console.log('listening to port 3000');
