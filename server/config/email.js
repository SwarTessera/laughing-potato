var nodemailer = require('nodemailer');


exports.postMailer=function(req,res){

   //your nodemailer logic here to send mail

   var smtpTransport = nodemailer.createTransport("SMTP",{
      service: "Gmail",
      auth: {
          user: "swartessera@gmail.com",
          pass: "beproject"
      }
   });

    var mailOptions = {
      from: "SwarTessera <swartessera@gmail.com>", // sender address
      to: req.body.email, //"Test <test.swartessera@gmail.com>",//, Venz <venzfalcao@gmail.com>, Chi <ajobard96@gmail.com>", // comma separated list of receivers
      subject: "Test mail with html attached from SwarTessera", // Subject line
      //text: "Hello world  - this test e-mail is sent from SwarTessera. o.O"//, // plaintext body
      //forceEmbeddedImages: true,
      html: '<b>Hello world ✔</b>' // You can choose to send an HTML body 
      //'Embedded image: <img src="http://i.imgur.com/e13TSsJ.png">;'
    };

     smtpTransport.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }
        else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });
}

