const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server) ;
var routesBattle = require('./Controller/routesBattle')

// simple route
app.get('/', (req, res) => {
  res.sendFile( __dirname + '/acceuil.html');
});

app.get('/:choix', (req, res) => {
  res.sendFile(__dirname + "/" + req.params.choix);
});

var nbclients = 0;

io.on('connection', (socket) => {
  console.log('client connected');
  nbclients++;
  console.log(nbclients);
  console.log('client // ' + socket.request.connection.remoteAddress + " // " + socket.id);

  socket.on('disconnect', function () {
    console.log('client disconnected');
    nbclients--;
    console.log(nbclients);
  });
  socket.on('button', function(page){
    console.log('client // ' + socket.request.connection.remoteAddress + " // " + socket.id);
    io.emit("button", page);
  });
});

app.use('/battle', routesBattle);

server.listen(8080, () => {
  console.log('listening on *:8080');
});
