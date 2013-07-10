var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = new Buffer(2048);
  var text = buf.toString(fs.readFileSync('index.html','utf8'));
  response.send(text);
  /*response.send('Hello World3!');*/
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
