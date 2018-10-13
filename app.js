// const mongoose = require('mongoose');
// mongoose.Promise=global.Promise;
// mongoose.connect('mongodb://localhost:27017/Users');
var bodyParser = require('body-parser');
const express = require('express');
var mongoose = require('./mongoose_db');
var {Users}=require('./userModel');

var app=express();
app.use(bodyParser.json());


app.post('/userentry',(req,res)=>{
    //Passing a value to the model
   // console.log(req.body.name);

// var users = new Users(
//     {name:'Bejoy',age:26}
var users= new Users(
    {name : req.body.name,age:req.body.age} 
) ;  


users.save().then((data)=>{
    console.log('Successfully saved',data)
},(error)=>{
    console.log('Error',error)
});

// );
});


// //Passing a value to the model

// var users = new Users(
//     {name:'Bejoy',age:26}
// );

// users.save().then((data)=>{
//     console.log('Successfully saved',data)
// },(error)=>{
//     console.log('Error',error)
// })

app.listen(3000,()=>{
    console.log("Started");
})