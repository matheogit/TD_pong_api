module.exports = {
    send: function (req, res){
        let email = req.body.email //recupération du email en paramètre
        let user = req.body.username //recupération dunom d'utilisateur en paramètre
        let pwd = req.body.passeword //recupération du mot de passe en paramètre
        let result = {"Email": email, "User": user,"Pwd": pwd}
        res.send(result);
    },
}