var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = new Buffer(2048,"utf8");
  response.send(buf.toString(fs.readFileSync("index.html"),0));
  /*response.send('Hello World3!');*/
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
