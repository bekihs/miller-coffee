
const express = require('express')
const app = express()
var bodyParser = require('body-parser');
const path = require('path'); 
app.use(express.static('./public'));
var nodemailer = require('nodemailer');

// use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL || 'miller.house.coffee@gmail.com',
      pass: process.env.PASS || 'A123a456'
    }
  });

app.post("/sendMail" , (req,res)=>{
  
      
      var mailOptions = {
        from: req.body["mail"],
        to: process.env.EMAIL || 'miller.house.coffee@gmail.com',
        subject: 'CoffeeApp Message' ,
        text: `A new message regarding the coffee house 
        From ${req.body["name"]}
        Phone: ${req.body["phone"]}, 
        Email: ${req.body["mail"]}:
         ${req.body["text"]}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.status(500).send(error)
        } else {
          res.send(info)
          console.log('Email sent: ' + info.response);
        }
      });

      
      
      var mailOptions = {
        from: 'miller.house.coffee@gmail.com',
        to: req.body["mail"],
        subject: 'CoffeeApp Message' ,
        text: `Thank you for contacting us. We will contact you shortly.`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.status(500).send(error)
        } else {
          res.send(info)
          console.log('Email sent: ' + info.response);
        }
      });
})

app.listen(process.env.PORT || '8080')
 