var User =require('../models/User');
var Course =require('../models/Course');


var iconcount=1;

exports.getSignUp = function(req,res){
	res.render('signup', {title:' | Sign up'});
}

exports.postSignUp = function(req,res){
        //Create a new user
        var user = new User ({profile:{email:req.body.email, gender:req.body.gender}, name: req.body.name, question: req.body.question, answer: req.body.answer});
        user.save();
        res.render('select-grid', {title:' | Select Password'});
    }

exports.getImgGrid = function(req,res){
  User.findOne({name:user.name}, function(err, users){
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
        res.render('select-grid', {title:' | Select Password'});
      }
    }
  });
	// User.findOne({ username: req.body.userName}, function (err, doc){
  	// doc is a Document
 //  	if(err)
 //  	{
 //  		console.log(err);
 //  	}
 //  	if(doc)
 //  	{
	//   		if(req.body.password==doc.password)
	//   	{
	//   		res.send('Login was SUCCESSFUL :)');
	//   	}
	//   	else
	//   	{
	//   		res.send('Login was UNSUCCESSFUL :(');
	//   	}	
 //  	}
  	
	// });
  
}