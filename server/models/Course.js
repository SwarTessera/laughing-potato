var mongoose = require('mongoose'); 

//A mongoose Schema
var courseSchema = new mongoose.Schema({
	icon_id: String,
	icon: String
});



//Compile Schema into a Mongoose Model
module.exports=mongoose.model('Course',courseSchema);

