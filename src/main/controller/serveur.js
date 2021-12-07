var express = require('express');
var serve_static = require('serve-static');
var http = require('http');

var routesBattle = require('./battle/routesBattle');

var app = express();

app.use(serve_static(__dirname+"/src/main/vue"));
var serveur = http.Server(app);
serveur.listen(8080, function(){});
/********************BATTLE*********************/
app.use('/battle', routesBattle);