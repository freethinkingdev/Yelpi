var express = require('express');
var router = express.Router();

/* GET about us page. */
router.get('/', function (req, res, next) {
    res.render('SECRET', {
        title: 'About Us',
        author: 'Pimpek'
    });
});

module.exports = router;
