const express=require('express');
const mongoose=require('mongoose');
const TravelPassCount=require('../model/availablePasses'); 
const UserDataPass=require('../model/userDataPass');
const signUp=require('../model/signupModel');
const router=express.Router();

router.post('/signup', function(req, res)
{  
  res.header("Access-Control-Allow-Origin","*");
  res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
  console.log(req.body);
  var signupData={
        phone:req.body.User.phone,
        pswd:req.body.User.pwd       
  }
  var signup=signUp(signupData);
  signup.save();

});
router.post('/login', function(req, res)
{  
  res.header("Access-Control-Allow-Origin","*");
  res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
  console.log(req.body);

  signUp.findOne({phone : req.body.loguser.phone})
  .then(function(data)
  {
      console.log("valid : "+data);
       res.send(data);
       
  });

});

module.exports=router;