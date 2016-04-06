var nodemailer = require("nodemailer");


exports.getMailer=function(req,res){

   //your nodemailer logic here to send mail

   var smtpTransport = nodemailer.createTransport("SMTP",{
      service: "Gmail",
      auth: {
          user: "swartessera@gmail.com",
          pass: "beproject"
      }
   });

   // res.render('demo', {
   //   name: 'Satellizer L. Bridget'
   // }, function(err, html) {

    var mailOptions = {
      from: "SwarTessera <swartessera@gmail.com>", // sender address
      to: "Test <test.swartessera@gmail.com>",//, Venz <venzfalcao@gmail.com>, Chi <ajobard96@gmail.com>", // comma separated list of receivers
      subject: "Test mail with html attached from SwarTessera", // Subject line
      //text: "Hello world  - this test e-mail is sent from SwarTessera. o.O", // plaintext body
      //<b>Hello world ✔</b><br><i>This text is actually HTML.</i>
      //'Embedded image: <img src="http://i.imgur.com/e13TSsJ.png">;'
      //forceEmbeddedImages: true,
      html: '<b>Hello world ✔</b>' // You can choose to send an HTML body 
    };

     smtpTransport.sendMail(mailOptions, function(err){
          console.log("Mail sent! ");
     });
   // });
}

