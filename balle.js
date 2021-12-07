class Balle{

    posX;
    posY;

    constructor(posX,posY){
        this.posX = posX;
        this.posY = posY;
    }

    getPosX(){
        return this.posX;
    }

    getPosY(){
        return this.posY;
    }
}

module.exports = Balle