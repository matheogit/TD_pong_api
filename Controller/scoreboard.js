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
  getScorePlayer: function (req, res) {
    axios.get("https://auth-pong-esiea.azurewebsites.net/getParties/" + req.params.idJoueur).then(function(reponse){
      let parties = reponse.data;
      let scoreboard = []
      for (let i = 0; i < parties.length; i++) {
        scoreboard.push(parties.score)
      }
      scoreboard.sort((x, y) => {return y - x;})
      res.send(scoreboard)
    });
  },
  getLeaderBoard: function (req, res) {
    /*axios.get("https://auth-pong-esiea.azurewebsites.net/getParties/" + req.params.idJoueur).then(function(reponse){
      let parties = reponse.data;
      let leaderBoard = []
      for (let i = 0; i < 3; i++) {
        leaderBoard.push({id:'',score:''})      
      }
      res.send(scoreboard)
    });*/
    let leaderBoard = {1:{id: "10", score:"50"}, 2:{id: "3", score:"48",},3:{id: "5", score:"35",}}
    res.send(leaderBoard)
  }, 
}