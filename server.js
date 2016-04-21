var express = require('express'); //node_module for express server
var mongoose = require('mongoose'); //MongoDb Driver or Middleware
var bodyParser = require('body-parser');
var autoIncrement = require('mongoose-auto-increment');

var User =require('./server/models/User');
var Icon =require('./server/models/Icon');

var userController =require('./server/controllers/user');
var iconController =require('./server/controllers/icon');

var emailer =require('./server/config/email');

var app = express();

app.set('views',__dirname+'/server/views'); 
app.set('view engine','jade');
//app.use is used to use middlewares
app.use(express.static('public')); //static route handling
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true})); 

//Mongoose Connection with MongoDB
mongoose.connect('mongodb://localhost/swartessera');
mongoose.connection.on('error',function(){
	console.error('MongoDb connection error. Please make sure that Mongodb is running');
});

//Routes
app.get('/',userController.getIndex);
app.get('/upload',iconController.getUpload);
app.post('/upload',iconController.postUpload);
app.get('/signup', userController.getSignUp);
app.post('/signup',userController.postSignUp);
app.post('/save', userController.postSave);
app.get('/signin', userController.getSignIn);
app.post('/signin', userController.postSignIn);
app.post('/update', userController.postUpdate);
app.post('/check', userController.postCheck);
app.get('/finalsignup',userController.getFinalSignup);
app.get('/forgot',userController.getForgot);
app.post("/question",emailer.postQuestion);
app.post("/nodemailer",emailer.postMailer);

app.listen(3020);
console.log("Express is listening at port 3020");