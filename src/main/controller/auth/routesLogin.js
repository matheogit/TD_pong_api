var login = require("./login") 

var express = require ('express');
var router = express.Router();

router.route('/:user/:pwd').get(login.send);

module.exports = router;