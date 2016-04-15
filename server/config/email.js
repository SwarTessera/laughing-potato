var nodemailer = require('nodemailer');
var kickbox = require('kickbox').client('3138ff17fef3bc1609e1c772495711766a66ba4507c3b516e19bb9fb14120ae4').kickbox();

var User =require('../models/User');

exports.postMailer=function(req,res){

   //your nodemailer logic here to send mail

  kickbox.verify(req.body.email , function (err, response) {
    // Let's see some results
    if (response.body.result == 'deliverable')
    {
         var smtpTransport = nodemailer.createTransport("SMTP",{
            service: "Gmail",
            auth: {
                user: "swartessera@gmail.com",
                pass: "beproject"
            }
         });

          var mailOptions = {
            from: "SwarTessera <swartessera@gmail.com>", // sender address
            to: req.body.email,  // receiver address
            subject: "Code test mail", // Subject line
            //text: "Hello world  - this test e-mail is sent from SwarTessera. o.O"//, // plaintext body
            //forceEmbeddedImages: true,
            html: '<b>Hello world ✔</b><br><img src="http://i.imgur.com/e13TSsJ.png">' // You can choose to send an HTML body 
            //'Embedded image: <img src="http://i.imgur.com/e13TSsJ.png">;'
          };

           smtpTransport.sendMail(mailOptions, function(error, info){
              if(error){
                  console.log(error);
                  res.json({yo: 'error'});
              }
              else{
                  console.log('Message sent: ' + info.response);
                  res.render('signin', {title:' | Signin'});
              };
          });
    }
    else
    {
      res.render('resend', {response:response, title:' | Resend'});
    }
    console.log(response.body);
  });
}

