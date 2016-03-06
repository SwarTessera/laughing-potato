var Para =require('../models/Para');

exports.postSignUp = function(req,res){
        //Create a new user
        var user = new User ({profile:{name:req.body.name, gender:req.body.gender}, email: req.body.email, question: req.body.question, answer: req.body.answer});
        user.save();
        res.render('select-grid', {title:' | Select Password'});
    }