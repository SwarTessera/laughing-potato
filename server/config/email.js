var nodemailer = require("nodemailer");


exports.getMailer=function(res,req){

   //your nodemailer logic here to send mail

   var smtpTransport = nodemailer.createTransport("SMTP",{
      service: "Gmail",
      auth: {
          user: "swartessera@gmail.com",
          pass: "beproject"
      }
   });

   smtpTransport.sendMail({
      from: "SwarTessera <swartessera@gmail.com>", // sender address
      to: "Cheryl <cherylcherry95@gmail.com>", // comma separated list of receivers
      subject: "Mail from Nodemailer", // Subject line
      text: "Hello world  - this mail is sent from nodemailer library" // plaintext body
    }, function(error, response){
      if(error){
          console.log(error);
      }
      else{
          console.log("Mail sent: " + response.message);
      }
   });

}

