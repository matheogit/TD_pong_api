const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

var routesBattle = require('./Controller/routesBattle')

app.use('/battle', routesBattle);

server.listen(8080, () => {
  console.log('listening on *:8080');
});