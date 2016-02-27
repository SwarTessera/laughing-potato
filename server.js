var express = require('express'); //node_module for express server
//MongoDb Driver or Middleware
var mongoose = require('mongoose'); 
var bodyParser = require('body-parser');
var Course =require('./server/models/Course');
var User =require('./server/models/User');
var userController =require('./server/controllers/user');
var courseController =require('./server/controllers/course');

var app = express();

app.set('views',__dirname+'/server/views'); //the folder to lookup
//__dirname (NOTE:double underscore) is a global variable and gives the absolute path of the folder
app.set('view engine','jade');
//jade is template engine
//app.use is used to use middlewares
app.use(express.static('public')); //static route handling
//anything in public folder can be accessed directly.
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true})); 
//assuming POST: name=foo&color=red <--URL encoding
//or
//POST: {"name":"foo", "color":"red"} <--JSON

//Mongoose Connection with MongoDB
mongoose.connect('mongodb://localhost/codegurukul');
mongoose.connection.on('error',function(){
	console.error('MongoDb connection error. Please make sure that Mongodb is running');
});

//Create a new course
// var course =  new Course ({name: "C# for Sociopaths"});
// course.save(); //The Magic!



//Routes
app.get('/',courseController.getIndex);
//req=request =>HTTP REQUEST object
//res=response =>HTTP RESPONSE object

app.get('/addcourse',courseController.getAddCourse);

 app.post('/addcourse',courseController.postAddCourse);

 app.get('/viewcourses',courseController.getViewCourses);

    app.post('/deletecourse/:id',courseController.postDeleteCourse);


//login
app.get('/signup', userController.getSignUp);

app.post('/signup',userController.postSignUp);

app.post('/signin', userController.postSignIn);

app.listen(3020);
console.log("Express is listening at port 3020");