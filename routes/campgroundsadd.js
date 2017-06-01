var express = require('express');
var router = express.Router();



/* GET new campgrounds page. */
router.get('/', function(req, res, next) {
  res.render('campgroundsadd', {
    title: 'Add New Camp Ground',
    author: 'Pimpek Maximus',
    campgrounds: campgroundsArray
  });
});

module.exports = router;
