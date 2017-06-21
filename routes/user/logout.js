var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET login page. */
router.get('/', function (req, res, next) {
    req.logout();
    res.redirect('/');
});


module.exports = router;
