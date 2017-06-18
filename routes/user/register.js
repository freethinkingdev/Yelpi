var express = require('express');
var router = express.Router({mergeParams: true});
var User = require('.././../models/user');

/* GET register page which shows register form. */
router.get('/', function (req, res, next) {

    res.render('./user/register', {
        title: 'Register',
        author: 'Pimpek Max'
    });
});

/* POST register page that handles user registration. */
router.post('/', function (req, res, next) {
    var userObject = req.body.user;
    User.regiser(new User(userObject.username), userObject.password, function (err, newUser) {
        if (err) {
            /* If there is error */
            console.log(err);
            return res.render('register');
        } else {
            /* No errors */
            console.log(newUser);
            passport.authenticate("local")(req, res, function () {
                res.redirect('/secret')
            });
        }
    });
    res.render('index', {
        title: 'YelpKloniks',
        author: 'Pimpek Max'
    });
});

module.exports = router;
