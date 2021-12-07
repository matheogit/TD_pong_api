var express = require('express');
var serve_static = require('serve-static');
var http = require('http');

var app = express();

app.use(serve_static(__dirname+"/src/main/vue"));
var serveur = http.Server(app);
serveur.listen(8080, function(){});

var routesLogin = require('./auth/routesLogin');
var routesRegister = require('./auth/routesRegister');

app.use('/login', routesLogin)
app.use('/register', routesRegister)

