var nodemailer = require('nodemailer');
var kickbox = require('kickbox').client('309efea2a9c9c6a7b4a0ea41e0a8007bec83784d4f4ea9fbc984a55916d1d6ee').kickbox();
var quickemailverification = require('quickemailverification').client('0303dc3c45fcfdddb2e9f47a659a41ada608c289c138622764fc588747df').quickemailverification();

var User =require('../models/User');
var Icon =require('../models/Icon');

var emailto;

exports.postQuestion=function(req,res){
  //kickbox.verify(req.body.email , function (err, response) {
  quickemailverification.verify(req.body.email , function (err, response) {
    // Let's see some results
    console.log(response);
    //if (response.body.result == 'deliverable')  //for kickbox
    if (response.body.result == 'valid')        //for quickemailverification
    {
      User.findOne({'profile.email': req.body.email}, function(err,found){
        if(found)
        {
          emailto=req.body.email;
          res.render('question', {found:found, title:' | Question'});
        }
        else
        {
          res.render('resend', {exist:'nope', title:' | Resend'});
        }
      });
    }
    else
    {
      res.render('resend', {response:response, title:' | Resend'});
    }
    console.log(response.body);
  });
}

exports.postMailer=function(req,res){

  //your nodemailer logic here to send mail
  User.findOne({'profile.email': emailto}, function(err,found){
    if(found.answer == req.body.answer)
    {
            var smtpTransport = nodemailer.createTransport("SMTP",{
            service: "Gmail",
            auth: {
                user: "swartessera@gmail.com",
                pass: "beproject"
            }
          });

          var i = found.password.i1;
          var ii = found.password.i2;
          var iii = found.password.i3;
          var iv = found.password.i4;
        
          Icon.find(function(err,icons){
            //var iconSet = JSON.stringify({data:icons});
            //console.log(icons);
            i = icons[i-1].picture;
            ii = icons[ii-1].picture;
            iii = icons[iii-1].picture;
            iv = icons[iv-1].picture;

            var mailOptions = {
              from: "SwarTessera <swartessera@gmail.com>", // sender address
              to: emailto,  // receiver address
              subject: "SwarTessera: login credentials", // Subject line
              //text: "Hello world  - this test e-mail is sent from SwarTessera. o.O"//, // plaintext body
              //forceEmbeddedImages: true,
              html: '<h1 style="text-transform:capitalize;">Hello '+found.name+' ✔</h1><br><fieldset><legend>Your login tokens are:</legend><br><br><img src="'+i+'"><img src="'+ii+'"><img src="'+iii+'"><img src="'+iv+'"></fieldset><br><br><br><h2>Love,<br>SwarTessera</h2>' // HTML body 
            };

            smtpTransport.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log(error);
                    res.json({yo: 'error'});
                }
                else{
                    console.log('Message sent: ' + info.response);
                    res.render('signin', {sent:'yes', title:' | Signin'});
                }
            });
          });
    }
    else
    {
      res.render('question', {match:'no', found:found, title:' | Question'});
    }

  });
}