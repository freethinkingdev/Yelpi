var express = require('express');
var router = express.Router();
var Campsite = require('.././../models/campsites');
var Comment = require('.././/../models/comment');


/* POST save new campground and show camp grounds list. */
router.post('/', function (req, res, next) {
    /*Checking to see if data has been received*/
    if (req.body.commentAuthor && req.body.commentBody && req.body.siteId) {
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
