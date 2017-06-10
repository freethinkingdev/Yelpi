var express = require('express');
var router = express.Router({mergeParams: true});
var Campsite = require('../models/campsites');

/* GET campgrounds page. */
router.get('/', function (req, res, next) {
    // var objectId = req.baseUrl.split("/").slice(-1)[0];
    var objectId = req.params.id;
    Campsite.findById(objectId, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            // console.log(res);
            res.render('campgroundsdetail', {
                title: 'Camp Grounds Detail',
                author: 'Pimpek',
                objectArray: result
            });
        }
    });

});


module.exports = router;
