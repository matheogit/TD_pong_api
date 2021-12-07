var express = require('express');
var serve_static = require('serve-static');
var http = require('http');

var app = express();

app.use(serve_static(__dirname+"/src/main/vue"));
var serveur = http.Server(app);
serveur.listen(8080, function(){});
var routesRegister = require('./auth/routesRegister');
app.use('/register', routesRegister)
