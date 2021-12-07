const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const clients = {};
const games = {};

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/game.html');
});

io.on('connection', (socket) => {
	socket.on('create', () => {
		let newGameId = guid();
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
		}/*
		if ( games[gameId].clients.length == 2 ) {
			updateGameState();
		}*/
		games[gameId].clients[games[gameId].clients.length] = socket;
		games[gameId].clients.forEach(clientSocket => {
			clientSocket.emit('test');
			console.log(clientSocket.id);
		});
		console.log(games[gameId].clients.length);
		socket.on('move', (data) => {
			io.emit('move', data);
		});
	});
});

server.listen(3000, () => {
	console.log('listening on *:3000');
});

function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
 
// then to call it, plus stitch in '4' in the third group
const guid = () => (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();