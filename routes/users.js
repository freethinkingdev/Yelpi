var express = require('express');
var router = express.Router();

/* GET users page. */
router.get('/', function(req, res, next) {
  res.render('users', {
    title: 'Users',
    author: 'Pimpek'
  });
});

module.exports = router;
