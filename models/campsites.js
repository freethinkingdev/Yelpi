/**
 * Created by marsin on 10/06/17.
 */
var mongoose = require('mongoose');

var campsitesSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String
});

var Campsite = mongoose.model("Campsite", campsitesSchema);

module.exports = Campsite;