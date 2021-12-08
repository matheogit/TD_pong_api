module.exports = {
    log: function (req, res, next){
        let user = req.body.username //recupération dunom d'utilisateur en paramètre
        let pwd = req.body.passeword //recupération du mot de passe en paramètre
        let body = {"User": user,"Pwd": pwd}
        axios.post('https://svc-pong-esiea.azurewebsites.net/login', {
                body: body
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        let status = a;
        let data = [];
        axios.get('https://svc-pong-esiea.azurewebsites.net/login')
            .then(function (response) {
                console.log(response.status);
                console.log(response.data);
                let result = {"status":response.status,"data":response.data};
                res.send(result);
            });
    },
}