var express = require('express');
var router = express.Router();

/* GET about us page. */
router.get('/', function (req, res, next) {

    if (req.isAuthenticated()) {
        res.render('SECRET', {
            title: 'This is secret',
            author: 'Pimpek'
        });
    } else {
        res.render('./user/login', {
            title: 'Login',
            author: 'Pimpek'
        });
    }


});

module.exports = router;
