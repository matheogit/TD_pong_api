module.exports = {
  getRaquettePos: function (req, res) {
    let positionX = 0, positionY = 0;
    [positionX, positionY] = getBallePos()
    let result = {"pos_x": positionX, "pos_y": positionY}
    res.status(200).json(result)
  }
}