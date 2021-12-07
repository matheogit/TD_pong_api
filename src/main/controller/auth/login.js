module.exports = {
    send: function (req, res, next){
        let user = req.body.username //recupération dunom d'utilisateur en paramètre
        let pwd = req.body.passeword //recupération du mot de passe en paramètre
        let result = {"User": user,"Pwd": pwd}
        res.
        res.send(result);
    },
}