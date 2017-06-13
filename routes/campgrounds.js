var express = require('express');
var router = express.Router();
var Campsite = require('../models/campsites');
var Comment = require('../models/comment');

var campgroundsArray = [];

/* GET campgrounds page. */
router.get('/', function (req, res, next) {

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
    if (req.body.campname && req.body.campdesc && req.body.campimg) {
        var newCampName = req.body.campname;
        var newCampDesc = req.body.campdesc;
        var newCampImgUrl = req.body.campimg;

        Campsite.create({
                name: newCampName,
                img: newCampImgUrl,
                description: newCampDesc
            },
            function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    // console.log(res);
                    res.redirect('/campgrounds');
                }
            });
        //var newCampSiteObj = {name: newCampName,img: newCampImgURL};
        //campgroundsArray.push(newCampSiteObj);
    }

    else if (req.body.commentAuthor && req.body.commentBody && req.body.siteId) {
        var comAuthor = req.body.commentAuthor;
        var comBody = req.body.commentBody;
        var siteId = req.body.siteId;


        Campsite.findOne({_id: siteId}, function (err, foundCampsite) {
            if (err) {
                /* If there is error */
                console.log(err);
            } else {
                /* No errors */
                Comment.create({
                    text: comBody,
                    author: comAuthor
                }, function (err, newComment) {
                    if (err) {
                        /* If there is error */
                        console.log(err);
                    } else {
                        /* No errors */
                        foundCampsite.comments.push(newComment);
                        foundCampsite.save(function (err, result) {
                            if (err) {
                                /* If there is error */
                                console.log(err);
                            } else {
                                /* No errors */
                                console.log("New post added to the camp site");
                                res.redirect('/campgrounds/' + siteId);
                            }
                        });
                    }
                });
            }
        });
    }

    else {
        console.log('No data received from the user form');
    }
    // console.log("This is post in the same file as get (ROUTE FILE)");
});

module.exports = router;
