var User =require('../models/User');
var Icon =require('../models/Icon');
var kickbox = require('kickbox').client('309efea2a9c9c6a7b4a0ea41e0a8007bec83784d4f4ea9fbc984a55916d1d6ee').kickbox();
var quickemailverification = require('quickemailverification').client('0303dc3c45fcfdddb2e9f47a659a41ada608c289c138622764fc588747df').quickemailverification();

var currentuser;
var loginuser;
var swar;
var tess;

exports.getIndex = function(req,res){
  res.render('index', {title:'Home | '});
}

exports.getSignUp = function(req,res){
  res.render('signup', {title:'Sign up | '});
}

exports.postSignUp = function(req,res){
  //Create a new user
  //kickbox.verify(req.body.email , function (err, response) {
  quickemailverification.verify(req.body.email , function (err, response) {
    // Let's see some results
    //if (response.body.result == 'deliverable')  //for kickbox
    if (response.body.result == 'valid')        //for quickemailverification
    {
      User.findOne({'profile.email': req.body.email}, function(err,found){
        if(found)
        {
          res.render('signup', {found:found, title:'Sign up | '});
        }
        var user = new User ({profile:{email:req.body.email, gender:req.body.gender}, name: req.body.name, question: req.body.question, answer: req.body.answer});
        user.save();
        currentuser=req.body.name;

        Icon.find(function(err,icons){
            res.render('select-grid', {icons:icons, uId:saved.uId, title:'Grid View | '});
        });
      });
    }
    else
    {
      res.render('signup', {response:response, title:'Sign up | '});
    }
    console.log(response.body);
  });
}

exports.postSave = function(req,res){
  //Update user with password
  console.log(req.body.pass1);
  User.update({'name': currentuser}, {$set: {'password.i1':req.body.pass1, 'password.i2':req.body.pass2, 'password.i3':req.body.pass3, 'password.i4':req.body.pass4}}, function(err,user){
    res.render('index', {title:'Home | '});
  });
}

exports.getSignIn = function(req,res){
  res.render('signin', {title:'Login | '});
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
        res.render('icon-upload', {title:'Upload Icons | '});
      }
      else
      {
        Icon.find(function(err,icons){
          loginuser=doc.name;
          res.render('select-icon', {doc:doc, iconList:JSON.stringify({data:icons}), title:'Select Password | '});
        });
      }
    }
  });
}

exports.postUpdate = function(req,res){
  User.update({'name': loginuser}, {$set: {'authenticate.swar':req.body.swar, 'authenticate.tessera':req.body.tessera}}, function(err,user){
    res.render('select-icon', {save: 'yes', title:'Select Password | '});
  });
}

exports.postCheck = function(req,res){
  //Access on signin
  User.findOne({'name': loginuser}, function(err,user){

    if(user.authenticate.swar==user.uId)
    {
      console.log(user.authenticate.swar==user.uId);
      var testing=(user.authenticate.swar==user.uId) && (user.authenticate.tessera)
      if (testing === 'true') 
      {
        res.render('final', {user:user, title:'Welcome | '});
      }
      else if (testing === 'false') 
      {
        res.render('signin', {title:'Redo | '});
      }
    }
    else
    {
      res.render('signin', {title:'Redo | '});
    }
  });
}

exports.getFinalSignup = function(req,res){
    res.render('index', {title:' | Home'});
}

exports.getForgot = function(req,res){
  res.render('resend', {title:'Forgot | '});
}