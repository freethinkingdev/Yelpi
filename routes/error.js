var express = require('express');
var router = express.Router();

/* Error for the page. */
router.get('/*', function(req, res, next) {
  res.render('error', {
      title: 'Error',
      message: "One Big Error. It seems we have 404 which is page not found. Too bad...",
      author: "Pimpek"
  });
});

module.exports = router;
