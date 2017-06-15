var express = require('express');
var router = express.Router({mergeParams: true});
var Campsite = require('.././../models/campsites');
var Comment = require('.././/../models/comment');

/* POST save new campground and show camp grounds list. */
router.post('/', function (req, res, next) {
    /*Checking to see if data has been received*/
    if (req.body.comment && req.body.comment != null) {

        /* Getting the id of the object that is the campsite */
        var objectId = req.params.id;
        /* Getting comment data from grouped form data */
        var commentObject = req.body.comment;

        Campsite.findById(objectId, function (err, foundCampsite) {
            if (err) {
                /* If there is error */
                console.log(err);
            } else {
                /* No errors */
                Comment.create(commentObject, function (err, newComment) {
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
                                res.redirect('/campgrounds/' + objectId);
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
