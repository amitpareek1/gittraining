var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

    console.log("inside approve endpoint");
});

module.exports = router;