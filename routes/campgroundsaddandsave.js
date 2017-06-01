var express = require('express');
var router = express.Router();

/* POST save new campground and show camp grounds list. */
router.post('/', function (req, res, next) {
    /*Checking to see if data has been received*/
    if (req.body.campname && req.body.campdesc) {
        var newCampName = req.body.campname;
        var newCampImgURL = req.body.campdesc;
        // console.log(newCampName);
        // console.log(newCampImgURL);
        campgroundsArray.push({
            name: newCampName,
            img: newCampImgURL
        });
    } else {
        console.log('No data received from the user form');
    }
    res.redirect('/campgrounds');
});

module.exports = router;
