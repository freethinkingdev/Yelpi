var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET login page. */
router.get('/', function (req, res, next) {
    res.render('./user/login', {
        title: 'Login',
        author: 'Pimpek Max'
    });
});

/* POST getting login functionality */
router.post('/', passport.authenticate('local',
    {
        successRedirect: '/secret',
        failureRedirect: '/login'
    }),
    function (req, res, next) {
    }
);

module.exports = router;
