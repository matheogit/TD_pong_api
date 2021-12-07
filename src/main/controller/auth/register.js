module.exports = {
    send: function (req, res){
        let email = req.params.email //recupération du email en paramètre
        let user = req.params.user//recupération dunom d'utilisateur en paramètre
        let pwd = req.params.pwd //recupération du mot de passe en paramètre
        res.send("les données suivantes sont envoyées : \n"+email + "\n"+ user+ "\n" +pwd);
    },
}