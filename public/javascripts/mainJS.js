/**
 * Created by marsin on 03/06/17.
 */

var mongoose = require("mongoose");

//connect to db
mongoose.connect("mongodb://localhost/demo");
// cat model
var kotSchema = new mongoose.Schema({
    name: String,
    age: Number
});

var Kicia = mongoose.model("Kicia", kotSchema);
//add cat to db
for (var i =1;i<6;i+=2 ) {
    Kicia.create({name:"Kcia",age:i},function (err,res) {
        if(err){console.log(err);}else{console.log(res);}
    });

}
//retrive cat from db

/*
Cat.find({}, function(err,res){
    if(err){
        console.log(err);
    }else{
        res.forEach(function (cat) {
            console.log("Kitten: " +cat);
        });
    }
});*/
