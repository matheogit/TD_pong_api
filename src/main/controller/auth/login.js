module.exports = {
    log: function (req, res, next){
        let user = req.body.username //recupération dunom d'utilisateur en paramètre
        let pwd = req.body.passeword //recupération du mot de passe en paramètre
        let body = {"User": user,"Pwd": pwd}
        httpRequest()
        httpRequest();
        let status = a;
        let data = [];
        let result = {"status":status,"data":data};
        res.send(result);
    },
}