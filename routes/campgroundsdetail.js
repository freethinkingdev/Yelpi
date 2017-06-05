var express = require('express');
var router = express.Router();

/* GET campgrounds page. */
router.get('/', function(req, res, next) {

    var objectId = req.baseUrl.split("/").slice(-1)[0];
    Campsite.findById(objectId, function (err, result) {
        if(err) {
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


    // console.log("This is campsite details route");

});


module.exports = router;
