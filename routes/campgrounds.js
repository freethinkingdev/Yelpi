var express = require('express');
var router = express.Router();

/*var campgroundsArray = [
  {name: "Dakota Camp", img: 'https://s-media-cache-ak0.pinimg.com/736x/ae/d5/d2/aed5d2f14c3df4caf54bc101a53cdbd5.jpg'},
  {name: "ScoCamp", img: 'http://www.camping-vagues-oceanes.co.uk/sites/default/files/styles/img_250/public/2016_camping_vilanova_park_galerie_espace_aquatique_3.jpg?itok=isOZ26ED'},
  {name: "Montana Grill Camp", img: 'https://3.imimg.com/data3/FB/AR/MY-10292644/jungle-camping-250x250.jpg'},
  {name: "Baidu Night Camp", img: 'http://www.caerddaniel.co.uk/contentimages/0/0/camping%202.jpg'},
  {name: "Studenti Campus", img: 'http://www.trawsdir.co.uk/contentimages/0/0/camping%20touring%206.jpg'},
  {name: "Campus Otinelli", img: 'http://www.trawsdir.co.uk/contentimages/0/0/camping%20touring%201.jpg'}

];*/

var campgroundsArray =[];

/*var campgroundsArray = Campsite.find({}, function(err,res){
    if(err){
        console.log(err);
    }else{
        res.forEach(function (cat) {
            console.log("Kitten: " +cat);
        });
    });*/



/* GET campgrounds page. */
router.get('/', function(req, res, next) {

    Campsite.find({}, function (err, result) {
        if(err) {
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
            desc: newCampDesc},
            function (err,result) {
                if(err){
                    console.log(err);
                }else{
                    // console.log(res);
                    res.redirect('/campgrounds');
                }
        });
        //var newCampSiteObj = {name: newCampName,img: newCampImgURL};
        //campgroundsArray.push(newCampSiteObj);
    } else {
        console.log('No data received from the user form');
    }







    // console.log("This is post in the same file as get (ROUTE FILE)");
});

module.exports = router;
