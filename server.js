const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

var routesBattle = require('./Controller/routesBattle')

app.use('/battle', routesBattle);

server.listen(8080, () => {
  console.log('listening on *:8080');
});

function S4() {
  return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}

// then to call it, plus stitch in '4' in the third group
const guid = () => (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();

//branch blasseye---------------------------------------
require('dotenv').config('./.env')
var routesLogin = require('./Controller/auth/routesLogin');
var routesRegister = require('./Controller/auth/routesRegister');

app.use('/auth/login', routesLogin)
app.use('/auth/register', routesRegister)
//------------------------------------------------------
