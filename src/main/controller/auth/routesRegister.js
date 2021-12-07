var register = require("./register") 

var express = require ('express');
var router = express.Router();

router.route('/').get(register.send);

module.exports = router;