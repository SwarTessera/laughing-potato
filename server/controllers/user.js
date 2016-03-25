var User =require('../models/User');
var Course =require('../models/Course');
var Icon =require('../models/Icon');

var currentuser;

exports.getSignUp = function(req,res){
	res.render('signup', {title:' | Sign up'});
}

exports.postSignUp = function(req,res){
        //Create a new user
        var user = new User ({profile:{email:req.body.email, gender:req.body.gender}, name: req.body.name, question: req.body.question, answer: req.body.answer});
        user.save();
        currentuser=user.name;

        Icon.find(function(err,icons){
          res.render('select-grid', {icons:icons, title:' | Select Password'});
        });
    }

exports.postSave = function(req,res){
    //Update user with password
    User.findOne({name: currentuser}, function(err,user){
      user.password.i1=req.body.pass1;
      user.password.i2=req.body.pass2;
      user.password.i3=req.body.pass3;
      user.password.i4=req.body.pass4;
      user.save();

      res.render('index', {title:' | Home'});
    });
}

exports.getFinalSignup = function(req,res){
    res.render('index', {title:' | Home'});
}


exports.getImgGrid = function(req,res){
  User.findOne({name:currentuser}, function(err, users){
    if (err) throw err;
    user.password.i1='1';
    user.save();
    console.log('User successfully updated!');
  });
  //   User.update({name : {$eq: user.name}}, {$set: {password:{i1: req.params.id}}}, function(err, result){
  //   console.log("Updated successfully");
  //   console.log(result);
  // });
}

exports.postSelectIcon = function(req,res){
        //Save selected img

        var user = new User ({profile:{email:req.body.email, gender:req.body.gender}, name: req.body.name, question: req.body.question, answer: req.body.answer});
        user.save();
        res.render('select-grid', {title:' | Select Password'});
    }

exports.getSignIn = function(req,res){
  res.render('signin', {title:' | Sign in'});
}

exports.postSignIn = function(req,res){
  User.findOne({name: req.body.name}, function(err, doc){
    if (err)
    {
      console.log(err);
    }
    if (doc)
    {
      if(doc.name=='user-secret')
      {
        res.render('icon-upload', {title:' | Upload icons'});
      }
      else
      {
        res.render('select-icon', {doc:doc, title:' | Select Password'});
      }
    }
  });
}