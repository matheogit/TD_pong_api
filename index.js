const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let ongoingGames = {};

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	socket.on('chat message', (msg) => {
		io.emit('chat message', msg);
	});
	socket.on('move', (msg) => {
		io.emit('move', msg);
		if( msg.contains("quit") ) {
			hash = msg.split(':')[0];
			console.log(msg);
			ongoingGames.get(hash).stop();
		}
	});
});

server.listen(3000, () => {
	console.log('listening on *:3000');
});

app.get('/sologame', (req, res) => {
	gameHash = getRandomHash();
	newPath = '/sologame/'+gameHash;
	res.redirect(newPath);
	console.log(ongoingGames);
	app.get(newPath, (req, res) => {
		res.sendFile(__dirname + '/game.html');
		ongoingGames[gameHash] = res;
	})
});

function getRandomHash() {
	let val = Math.random().toString(36).substring(2, 15);
	return val;
}