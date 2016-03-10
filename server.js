var express = require('express'); //node_module for express server
//MongoDb Driver or Middleware
var mongoose = require('mongoose'); 
var bodyParser = require('body-parser');
var multer = require('multer');

var Course =require('./server/models/Course');
var User =require('./server/models/User');
var Para =require('./server/models/Para');

var userController =require('./server/controllers/user');
var courseController =require('./server/controllers/course');
//var pictureController =require('./server/controllers/picture');
// var paraController =require('./server/controllers/para');

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

//img upload
var upload = multer({ dest: './uploads/' })
app.post('/upload', upload.single('imageName'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
   res.render('test', {title:' | Icon'});
});

app.get('/ere.jpg', function (req, res) {
    res.sendfile(path.resolve('./uploads/ere.jpg'));
}); 
//app.post('/upload', multer({dest:'./uploads/'}).single('imageName'));
// app.use(multer({ dest: './uploads/',
//  rename: function (fieldname, filename) {
//     return filename+Date.now();
//   },
// onFileUploadStart: function (file) {
//   console.log(file.originalname + ' is starting ...')
// },
// onFileUploadComplete: function (file) {
//   console.log(file.fieldname + ' uploaded to  ' + file.path)
//   done=true;
// }
// }));
//-----------------------------
// app.use(multer({ dest: './uploads/'}).single('imageName'),
//     rename: function (fieldname, filename) {
//         return filename+"_"+Date.now();
//     },
//     onFileUploadStart: function (file) {
//         console.log(file.originalname + ' is starting ...')
//     },
//     onFileUploadComplete: function (file) {
//         console.log(file.fieldname + ' uploaded to  ' + file.path)
//         done=true;
//     }
// }));

/*Handling routes.*/

// app.get('/',function(req,res){
//     res.sendfile("index.html");
// });

// app.post('/log',function(req,res){
//     if(done==true){
//         console.log(req.files);
//         res.end("File uploaded.");
//     }
// });

// app.post('/api/photo',function(req,res){
//   if(done==true){
//     console.log(req.files);
//     res.end("File uploaded.");
//   }
// });

//Routes
app.get('/',courseController.getIndex);
app.get('/select-grid',userController.getImgGrid);
app.get('/addcourse',courseController.getAddCourse);
app.post('/addcourse',courseController.postAddCourse);
//app.post('/upload', pictureController.postUpload);
app.get('/viewcourses',courseController.getViewCourses);
app.post('/deletecourse/:id',courseController.postDeleteCourse);


//login
app.get('/signup', userController.getSignUp);
app.post('/signup',userController.postSignUp);
app.get('/signin', userController.getSignIn);
app.post('/signin', userController.postSignIn);

app.listen(3020);
console.log("Express is listening at port 3020");