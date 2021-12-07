var Game = require("../../../../Game")

var game
module.exports = {
  getEtatPartie: function (req, res) {
    let partieEnCours = postState()
    let result = {"partieEnCours": partieEnCours}
    res.send(result)
  },
  createNewGame: function (req, res) {
    game = new Game(1,1,2)
    console.log(game)
    res.send(game)
  },
  getGame: function(req, res) {
    return game;
  }
}