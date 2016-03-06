var User =require('../models/User');
var Course =require('../models/Course');

exports.getSignUp = function(req,res){
	res.render('signup', {title:' | Sign up'});
}

exports.postSignUp = function(req,res){
        //Create a new user
        var user = new User ({profile:{name:req.body.name, gender:req.body.gender}, email: req.body.email, question: req.body.question, answer: req.body.answer});
        user.save();
        res.render('select-grid', {title:' | Select Password'});
    }

exports.getSignIn = function(req,res){
  res.render('signin', {title:' | Sign in'});
}

exports.postSignIn = function(req,res){
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
  res.render('select-grid', {title:' | Select Password'});
}