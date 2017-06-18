var express = require('express');
var router = express.Router();

/* POST register page. */
router.post('/', function (req, res, next) {


    res.render('./user/register', {
        title: 'Register',
        author: 'Pimpek Max'
    });
});

module.exports = router;
