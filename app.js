var express = require('express');
var app = express();

var path = require('path');

app.use(express.static('static'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/static/templates/index.html'));
});

app.listen(1337, function () {
  console.log('Server is running! [Port: 1337]');
});
