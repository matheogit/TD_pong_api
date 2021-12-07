class Balle{

    posX;
    posY;

    constructor(posX,posY){
        this.posX = posX;
        this.posY = posY;
    }

    get getPosX(){
        return this.posX;
    }

    get getPosY(){
        return this.posY;
    }
}