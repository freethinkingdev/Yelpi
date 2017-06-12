var Campsites = require('../../models/campsites');
var Comment = require('../../models/comment');

/* Creating sample data for the databse */
var sampleData = [
    {
        name: 'Glacier National Park Camp Site',
        description: 'For detailed information about each campground, such as campground fees and amenities, location, number of sites, RV length accommodated, and historic fill times, please visit the Campground Status page. RVs and truck and trailer combinations are not recommended at these campgrounds: Bowman Lake, Cut Bank, Kintla Lake, Logging Creek, Quartz Creek, and Sprague Creek.',
        imageUrl: 'http://www.mountainphotography.com/images/large/201207_crackerLakeTent.jpg'
    },
    {
        name: 'Great Langdale National Trust Campsite',
        description: 'In this most spectacular of areas, where grand views lurk around every corner, it’s possible to become blasé and complacent, to grow almost immune to the beauty of these great pyramids of rock and the vast, flat pools of water shimmering with the reflection of blue skies.',
        imageUrl: 'https://coolcamping.com/system/images/369/great-langdale-national-trust-campsite-large.jpg'
    },
    {
        name: 'Whitesands Beach Campsite',
        description: 'About as basic as it gets, with facilities consisting of just a rudimentary toilet block, and slightly sloping pitches. But the reason you stay at Whitesands Bay is because you can walk from your tent to the beach in a matter of seconds. It’s always busy in summer and pitches are limited, so if you want quiet and solitude look elsewhere; but if you want to be at the heart of the St David’s beach scene this is as good as it gets.',
        imageUrl: 'http://www.coolplaces.co.uk/system/images/10355/top-ten-scenic-campsites-large.jpg'
    },
    {
        name: 'Ayr Holiday Park',
        description: 'Camping next to a major mine working may not sound like the most appealing idea, but pitch your tent at Tyllwyd Campsite at Cwmystwyth (what a lovely name!) in the heart of the Cambrian Mountains and you’ll be in for a very pleasant surprise. The campsite lies just a short distance from what is considered to be the most important non-ferrous metal mining site in Wales, where humans have scratched away to extract lead, silver and zinc since the Bronze Age. ',
        imageUrl: 'http://www.coolplaces.co.uk/system/images/12039/ayr-holiday-park-sleep-campsites-large.jpg'
    },
    {
        name: 'Tyllwyd, Cwmystwyth Camp Site',
        description: 'Stay under canvas and listen to the waves beating the rugged shores below your hilltop perch. Ayr Holiday Park is the only campsite right in St Ives and as well as stunning views and high-quality facilities it’s also an unbelievably easy trot from the town’s top attractions. Spacious, double glazed and centrally heated static caravans are available if you don’t trust the Cornish weather enough to pitch up with your tent.',
        imageUrl: 'http://www.coolplaces.co.uk/system/images/8445/tyllwyd-cwmystwyth-sleep-campsites-large.jpg'
    }
];


function initi() {
    /* Wiping existing data from the campsite databse */
    Campsites.remove({}, function (err, result) {
        if (err) {
            /* If there is error */
            console.log(err);
        } else {
            /* No errors */
            /* Going through the sample data and adding it to the database*/
            sampleData.forEach(function (site) {
                var newCampSite = new Campsites({
                    name: site.name,
                    description: site.description,
                    img: site.imageUrl
                });

                /* Actual saving data to database*/
                newCampSite.save(function (err, newCampsite) {
                    if (err) {
                        /* If there is error */
                        console.log(err);
                    } else {
                        /* No errors */
                        console.log('New item added to the database');


                        /* Adding sample comment to the posts */
                        Comment.create({
                            text: "This is a sample comment",
                            author: "Tatiana"
                        }, function (err, newComment) {
                            if (err) {
                                /* If there is error */
                                console.log(err);
                            } else {
                                /* No errors */
                                console.log('Comment has been added.');
                                newCampSite.comments.push(newComment);
                                newCampSite.save();
                            }
                        });
                    }
                });

            });
            console.log("Database has been wiped!");
        }
    });


}

/* Exporting the main function */
module.exports = initi;