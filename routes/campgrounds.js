var express = require('express');
var router = express.Router();
var Campsite = require('../models/campsites');
var Comment = require('../models/comment');

var campgroundsArray = [];

/* GET campgrounds page. */
router.get('/', function (req, res, next) {
    /* Finding campsite object */
    Campsite.find({}, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            campgroundsArray = result;
            // console.log(campgroundsArray);
            res.render('campgrounds', {
                title: 'Camp Grounds',
                author: 'Pimpek',
                campgrounds: campgroundsArray
            });
        }
    });
});


/* POST save new campground and show camp grounds list. */
router.post('/', function (req, res, next) {
    /*Checking to see if data has been received*/
    if (req.body.campsite) {
        /* Getting campsite object from the form object */
        var campsite = req.body.campsite;
        Campsite.create(campsite,
            function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    // console.log(res);
                    res.redirect('/campgrounds');
                }
            });
    }
    else {
        console.log('No data received from the user form');
    }
});

module.exports = router;
