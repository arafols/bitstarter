var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer(2048);
  response.send(buf.toString(fs.readFileSync("index.html",0)));
  /*response.send('Hello World3!');*/
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
