module.exports = {
  getEtatPartie: function (req, res) {
    let partieEnCours = partieEnCours = postState()
    let result = {"partieEnCours": partieEnCours}
    res.send(result)
  }
}