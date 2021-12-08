module.exports = {
    regis: function (req, res){
        let email = req.body.email //recupération du email en paramètre
        let user = req.body.username //recupération dunom d'utilisateur en paramètre
        let pwd = req.body.passeword //recupération du mot de passe en paramètre
        let result = {"mail": email, "user": user,"pwd": pwd}
        axios.post('https://auth-pong-esiea.azurewebsites.net/register', {
                body: body
            })
            .then(function (response) {
                console.log(response.status);
                console.log(response.body);
                let result = {"status":response.status,"data":response.body};
                res.send(result);
            })
            .catch(function (error) {
                console.log(error);
                let result = {"status":error.status,"data":{"message":error}};
                res.send(result);
            });
    },
}