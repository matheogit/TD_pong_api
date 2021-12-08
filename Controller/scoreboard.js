var partie = require("./partie")
var axios = require('axios');

module.exports = {
  addScore: function (req, res) {
    let game = partie.getGame()
    let scoreJ1 = game.score_p1
    let scoreJ2 = game.score_p2
    axios.post("scoreboard/" + scoreJ1 + "/" + scoreJ2).then(function(reponse){
      //scoreboard = reponse.data;
    });
    res.send("Score enregistré")
  },
  getScoreboard: function (req, res) {
    axios.get("https://auth-pong-esiea.azurewebsites.net/getParties/" + req.params.idJoueur).then(function(reponse){
      let parties = reponse.data;
      let scoreboard = []
      for (let i = 0; i < parties.length; i++) {
        scoreboard.push(parties.score)
      }
      scoreboard.sort((x, y) => {return y - x;})
      res.send(scoreboard)
    });
  }
}