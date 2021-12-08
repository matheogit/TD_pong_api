var login = require("./login") 

var express = require ('express');
var router = express.Router();

router.route('/').get(login.log);

module.exports = router;