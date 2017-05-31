var express = require('express');
var router = express.Router();

/* GET about us page. */
router.get('/', function(req, res, next) {
  res.render('contact', {
    title: 'Contact Us',
    author: 'Pimpek Max'
  });
});

module.exports = router;
