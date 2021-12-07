module.exports = {
    regis: function (req, res){
        let email = req.body.email //recupération du email en paramètre
        let user = req.body.username //recupération dunom d'utilisateur en paramètre
        let pwd = req.body.passeword //recupération du mot de passe en paramètre
        let result = {"Email": email, "User": user,"Pwd": pwd}
        httpRequest();
        let status = a;
        let data = [];
        let result = {"status":status,"data":data};
        res.send(result);
    },
}
