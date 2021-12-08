const express = require('express');
const app = express();
const http = require('http');
const { resolve } = require('path');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server) ;
var request = require('request')

var routesBattle = require('./Controller/routesBattle')

const games = {};

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.sendFile( __dirname + '/acceuil.html');
});

app.get('/:choix', (req, res) => {
  res.sendFile(__dirname + "/" + req.params.choix);
});

app.get('/two.html/:choix', (req, res) => {
  res.sendFile(__dirname + "/" + req.params.choix);
});

io.on('connection', (socket) => {


  socket.on('button', function(page){
    io.emit("button", page);
  });
	socket.on('create', () => {
		let newGameId = guid();
		request("http://localhost:8080/battle/newgame/" + newGameId, (error, response, body)=> {
			if (!error && response.statusCode === 200) {
			  const game_json = JSON.parse(body)
			  console.log("Got a response: ", game_json)
			} else {
			  console.log("Got an error: ", error, ", status code: ", response.statusCode)
			}
		})
		games[newGameId] = {
			"gameId": newGameId,
			"clients": [],
		}
		socket.emit('create', {"gameId": newGameId});
	});
	socket.on('join', (data) => {
		let gameId = data.gameId;
		if ( (! games[gameId]) || games[gameId].clients.length >= 2 ) {
			return;
		}
		socket.join(gameId);
		games[gameId].clients[games[gameId].clients.length] = socket;
		let movingBat = "right-bat";
		if ( socket.id === games[data.gameId].clients[0].id ) {
			movingBat = "left-bat";
		}
		socket.emit('side', movingBat)
		if(games[gameId].clients.length >= 2){
			
		socket.to(data.gameId).emit('full');  
		socket.emit('full')  
		}
	});
	socket.on('move', (data) => {
		socket.to(data.gameId).emit('move', {"movingBat": data.movingBat, "position": data.position});
	});
  socket.on('disconnect', function () {
    //console.log('client disconnected');
  });
});

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
var routesLogin = require('./auth/routesLogin');
var routesRegister = require('./auth/routesRegister');

app.use('/login', routesLogin)
app.use('/register', routesRegister)
//------------------------------------------------------