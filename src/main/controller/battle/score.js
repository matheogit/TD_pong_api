module.exports = {
  getScore: function (req, res) {
    let idJoueur = req.params.idJoueur
    let scoreJoueur = updateScore(idJoueur)
    let result = {"id": id, "score": scoreJoueur}
    res.send(result)
  }
}