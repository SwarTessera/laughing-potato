var User =require('../models/User');
var Course =require('../models/Course');
var Icon =require('../models/Icon');
var kickbox = require('kickbox').client('625b73eac9705b0151abe7470b1ee784f52a5d8fa25009acc3b790011072f502').kickbox();

var currentuser;
var loginuser;
var swar;
var tess;

exports.getSignUp = function(req,res){
  res.render('signup', {title:' | Sign up'});
}

exports.postSignUp = function(req,res){
        //Create a new user
        kickbox.verify(req.body.email , function (err, response) {
          // Let's see some results
          if (response.body.result == 'deliverable')
          {
            User.findOne({'profile.email': req.body.email}, function(err,found){
              if(found)
              {
                res.render('signup', {found:found, title:' | Sign up'});
              }
              var user = new User ({profile:{email:req.body.email, gender:req.body.gender}, name: req.body.name, question: req.body.question, answer: req.body.answer});
              user.save();
              currentuser=req.body.name;

              Icon.find(function(err,icons){
                res.render('select-grid', {icons:icons, title:' | Select Password'});
              });
            });
          }
          else
          {
            res.render('signup', {response:response, title:' | Sign up'});
          }
          console.log(response.body);
        });
    }

exports.postSave = function(req,res){
    //Update user with password
    console.log(req.body.pass1);
    User.update({'name': currentuser}, {$set: {'password.i1':req.body.pass1, 'password.i2':req.body.pass2, 'password.i3':req.body.pass3, 'password.i4':req.body.pass4}}, function(err,user){

      res.render('index', {title:' | Home'});
    });
}

exports.postUpdate = function(req,res){
    User.update({'name': loginuser}, {$set: {'authenticate.swar':req.body.swar, 'authenticate.tessera':req.body.tessera}}, function(err,user){

      //res.render('index', {title:' | Home'});
    });

}

exports.postCheck = function(req,res){
    //Access on signin
    User.findOne({'name': loginuser}, function(err,user){
      //var cmpr=req.body.tess===req.body.checker;
      //console.log(user.authenticate.swar==user.uId);
      //var testing=(user.authenticate.swar===user.uId) && (user.authenticate.tessera)
    //console.log(testing);
      

      if(user.authenticate.swar==user.uId)
      {
        console.log(user.authenticate.swar==user.uId);
        var testing=(user.authenticate.swar==user.uId) && (user.authenticate.tessera)
        if (testing === 'true') 
        {
          res.render('final', {user:user, title:' | Welcome'});
        }
        else if (testing === 'false') 
        {
          res.render('signin', {title:' | Redo'});
        }
      }
      else
      {
        res.render('signin', {title:' | Redo'});
      }
  });
}

//in check!
//if (req.body.token==req.body.checker && user.uid==req.body.read)
// {
//   res.render('final', {title:' | Welcome'});
// }
// else
// {
  //send alert also!!!!!!!!
//   res.render('signin', {title:' | Welcome'});
// }

exports.getFinalSignup = function(req,res){
    res.render('index', {title:' | Home'});
}


exports.getImgGrid = function(req,res){
  User.findOne({name:currentuser}, function(err, users){
    if (err) throw err;
    user.password.i1='1';
    user.save();
    //console.log('User successfully updated!');
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
        Icon.find(function(err,icons){
          loginuser=doc.name;
          res.render('select-icon', {doc:doc, iconList:JSON.stringify({data:icons}), title:' | Select Password'});
        });
      }
    }
  });
}