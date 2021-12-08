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
    axios.get(process.env.API_AUTH + "/getParties/" + req.params.idJoueur).then(function(reponse){
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
    /*axios.get("process.env.API_AUTH + "/getLeaderBoard").then(function(reponse){
      let parties = reponse.data;
      let leaderBoard = []
      for (let i = 0; i < 3; i++) {
        leaderBoard.push({id:'',score:''})      
      }
      res.send(scoreboard)
    });*/
    let leaderBoard = {0:{id: 1, result: "Defaite", pointsPlayer1: 3, pointsPlayer2: 5, duree: 60, date: "08/12/2021"}, 
                       1:{id: 2, result: "Victoire", pointsPlayer1: 5, pointsPlayer2: 1, duree: 10, date: "08/12/2021"},
                       2:{id: 3, result: "Victoire", pointsPlayer1: 5, pointsPlayer2: 2, duree: 20, date: "08/12/2021"},
                       3:{id: 5, result: "Victoire", pointsPlayer1: 5, pointsPlayer2: 2, duree: 30, date: "08/12/2021"},
                       4:{id: 6, result: "Defaite", pointsPlayer1: 1, pointsPlayer2: 5, duree: 40, date: "08/12/2021"},
                      }
    res.send(leaderBoard)
  }, 
}