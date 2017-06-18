var express = require('express');
var router = express.Router();

/* POST login page. */
router.post('/', function (req, res, next) {
    res.render('./user/login', {
        title: 'Login',
        author: 'Pimpek Max'
    });
});

module.exports = router;
