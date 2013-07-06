var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {

var buffer = new Buffer(256);

buffer.write (fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
}));

  response.send(buffer.toString("utf8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
