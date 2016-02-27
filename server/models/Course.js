var mongoose = require('mongoose'); 

//A mongoose Schema
var courseSchema = new mongoose.Schema({
	name: String,
	featured: Boolean,
	published: Date,
	time: String,
	batch: String
});



//Compile Schema into a Mongoose Model
module.exports=mongoose.model('Course',courseSchema);

