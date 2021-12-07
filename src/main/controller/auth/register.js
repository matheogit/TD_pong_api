module.exports = {
    send: function (req, res){
        let email = req.params.email //recupération du email en paramètre
        let user = req.params.user//recupération dunom d'utilisateur en paramètre
        let pwd = req.params.pwd //recupération du mot de passe en paramètre
        let result = {"Email": email, "User": user,"Psw": pwd}
        res.send(result);
    },
}