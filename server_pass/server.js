const express=require('express');

const cors=require('cors');
var bodyparser=require('body-parser');
var app=new express();
const passrouter=require('./src/route/passRouter');
const signUpRouter=require('./src/route/signupRouter')
const moment = require('moment-timezone');
var dateFormat = require('dateformat');
const { request } = require('http');

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/',passrouter);
app.use('/',signUpRouter);

app.listen(5200, function(){
    console.log('Listening to port : 5200');
});
