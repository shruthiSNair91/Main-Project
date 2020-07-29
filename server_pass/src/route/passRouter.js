const express=require('express');
const mongoose=require('mongoose');
const TravelPassCount=require('../model/availablePasses'); 
const UserDataPass=require('../model/userDataPass');
const router=express.Router();

var MAX_DAYS = 7;
var MAX_COUNT = 10;

router.get('/pass', function(req, res)
{  
  res.header("Access-Control-Allow-Origin","*");
  res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');

  var result = new Array();
  
  function fetchAvailableDates(onCompleteFetch)
  {
    var itemProcessed = 0;
    var str_dates = [];
    for (let i = 0; i < MAX_DAYS; i++)
    {
      var date = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate())
      date.setDate(date.getDate() + i);
      date.setHours(05,30,0,0);
      str_dates[i] = date;
    }

    //if no dates in db insert date and set count to 0
    str_dates.forEach(function(i, idx, str_date) {
    TravelPassCount.findOne({pass_date:str_dates[idx]})
      .then(function(data)
      { 
        if(data == null)
        {
          console.log("no dates available in db. so inserting into database..");
          var insert_date = 
          {
            pass_date:str_dates[idx],
            pass_count:0
          }
          var obj_date = TravelPassCount( insert_date);
          obj_date.save();
          
          data = new Object();
          data['pass_date'] = insert_date.pass_date;
          data['pass_count'] = insert_date.pass_count;
        }
        
        var IsPassAvailable = false;
        if (data.pass_count < MAX_COUNT)
          IsPassAvailable = true;

        //create response request and push to result array
        var availability = new Object();
        availability['pass_date'] = data.pass_date;
        availability['pass_count'] = data.pass_count;
        availability['isAvailable'] = IsPassAvailable;
        result.push(availability);
        
        itemProcessed++;
        
        if (itemProcessed == str_dates.length)
        {
          onCompleteFetch();
        }
      })
      .catch(error =>
      { 
        throw error
      })
    });
  }

  fetchAvailableDates(function() {
    //sort result array by date
    const sortedResult = result.sort((a, b) => a.pass_date - b.pass_date)
    res.send(sortedResult);
  })
});


router.post('/submitdates', function(req, res)
{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    let items = Object.entries(req.body.dates);
  
    strDates = [];
    items.map(item => {
            strDates.push(item[1]);
        });

   //update database with incremented count
    strDates.forEach(function(i, idx, str_date) {
        TravelPassCount.findOneAndUpdate({pass_date:strDates[idx]}, {$inc:{ pass_count: 1 }} )
         .then(function(data)
         { 
            if(data == null)
            {
                console.log("data is empty");
             }
            else
             {  
                
             }
         });
    });
//Users details insertion

var user={
            Name:req.body.UserDetails.name,
            Address:req.body.UserDetails.address,
            Phone:req.body.UserDetails.phone,
            Tr_purpose:req.body.UserDetails.trPurpose,
            Date1:req.body.UserDetails.date1,
            Date2:req.body.UserDetails.date2 
       }
      // console.log(user);
       var userData=UserDataPass(user);
       userData.save();
       res.send(userData._id);

       console.log('SAved to db..');

});

router.post('/userpassdata', function(req, res)
{  
  res.header("Access-Control-Allow-Origin","*");
  res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');

  console.log(req.body);
  var id=req.body.userid;
  UserDataPass.findById({_id:id})
  .then(function(data){
        console.log(data);
        res.send(data)
  });

});

router.post('/cancelpass', function(req, res)
{  
  res.header("Access-Control-Allow-Origin","*");
  res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
  console.log(req.body);
  var id=req.body.Uid;
  var dates=[];


  UserDataPass.findOneAndDelete({_id:id})
  .then(function (data, docs) { 
    if (data){ 
        console.log("data"+data) ;
        dates.push(data.Date1,data.Date2);
        console.log(dates);

        dates.forEach(function(i, idx, str_date) {
          TravelPassCount.findOneAndUpdate({pass_date:strDates[idx]}, {$inc:{ pass_count: -1 }} )
          .then(function(result){
            console.log("decremented");
          })
        });
    } 
    else{ 
        console.log("Deleted : ", docs); 
     } 
    
}); 
 

});

module.exports=router;