module.exports = {
    send: function (req, res){
        let pwd = req.params.pwd //recupération du mot de passe en paramètre
        let user = req.params.user//recupération dunom d'utilisateur en paramètre
        res.send("les données suivantes sont envoyées : \n"+ user+ "\n" +pwd);
    },
}