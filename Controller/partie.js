var Game = require("../Modele/Game")

var game
module.exports = {
  getEtatPartie: function (req, res) {
    let result = {"partieTerminee": game.termine}
    res.send(result)
  },
  createNewGame: function (req, res) {
    game = new Game(req.params.idGame,1,2)
    res.send(game)
  },
  getGame: function(req, res) {
    return game;
  },
  endGame: function(req, res) {
    game.updateScore(req.params.score_j1,req.params.score_j2);
    game.setGagnant();
    console.log(game)
    game.postState(true);
    res.send(game)
  }
}