var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function (req, res, next) {
    res.render('./user/login', {
        title: 'Login',
        author: 'Pimpek Max'
    });
});

/* POST getting login functionality */
router.post('/', function (req, res, next) {
    res.render('./user/login', {
        title: 'Login',
        author: 'Pimpek Max'
    });
});

module.exports = router;
