module.exports = {
  getRaquettePos: function (req, res) {
    let idJoueur = req.params.idJoueur
    let positionJoueur = getPosR(idJoueur)
    let result = {"id": idJoueur, "pos": positionJoueur, "test1": 1}
    res.send(result)
  },
  postRaquettePos: function (req, res) {
    let idJoueur = req.params.idJoueur
    let pos = req.params.pos
    let positionRaquette = setRaquettePos(idJoueur, pos)
    let result = {"id": idJoueur, "pos": positionRaquette, "test2": 2}
    res.send(result)
  },
}