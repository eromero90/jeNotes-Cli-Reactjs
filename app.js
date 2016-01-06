var express = require('express');
var app = express();

//Static folder
app.use(express.static('public'));

exports.server = app;