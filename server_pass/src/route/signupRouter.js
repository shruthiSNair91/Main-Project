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
        email:req.body,
        phone:req.body,
        pswd:req.body
  }
  var signup=signUp(signupData);
  signup.save();

});