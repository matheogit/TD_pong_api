var login = require("./login") 

var express = require ('express');
var router = express.Router();

router.route('/').get(login.send);

module.exports = router;