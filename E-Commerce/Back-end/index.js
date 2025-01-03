

const express=require("express");
// const mongoose=require('mongoose');
const User=require('./DB/User');
require('./DB/Config');
const app=express();
app.use(express.json());
app.post('/register', async(req,res)=>{
    let user= new User(req.body);
    let result= await user.save();
    console.log(req.body);
    
    res.send(result);
    //i want to start the code again
    

});
app.listen(5000);



   