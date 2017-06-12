/**
 * Created by marsin on 10/06/17.
 */
var mongoose = require('mongoose');
var Comment = require('../models/comment');

var campsitesSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

var Campsite = mongoose.model("Campsite", campsitesSchema);

module.exports = Campsite;