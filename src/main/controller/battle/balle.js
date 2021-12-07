var partie = require("./partie")

module.exports = {
  getRaquettePos: function (req, res) {
    let game = partie.getGame()
    let positionX = game.balle.getPosX()
    let positionY = game.balle.getPosY()
    let result = {"pos_x": positionX, "pos_y": positionY}
    res.send(result)
  }
}