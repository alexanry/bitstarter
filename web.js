var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

var string = fs.readFileSync('index.html');
console.log(string);

app.get('/', function(request, response) {

var buffer = new Buffer(string);


  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
