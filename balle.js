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

    /**
     * @param {any} positionX
     */
    set setPosX(positionX){
        this.posX = positionX;
    }

    /**
     * @param {any} positionY
     */
    set setPosY(positionY){
        this.posY = positionY;
    }
}
export default Balle;