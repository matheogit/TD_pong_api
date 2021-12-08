class Player{

    pseudo;
    state;
    #id;

    constructor(nom, etat, id){
        this.pseudo = nom;
        this.state = etat;
        this.id = id;
    }

    get getId(){
        return this.id;
    }

    get getPseudo(){
        return this.pseudo;
    }

    get getState(){
        return this.state;
    }

    set setState(etat){
        this.state = etat;
    }
}
module.exports = Player