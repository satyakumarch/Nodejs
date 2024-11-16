const express =require('express');
const mongodb=require('./mongodb');
const dbConnect = require('./mongodb');

const app=express();

// app.get('/', async(req, res) => {
//     let data= await dbConnect();
//     data=await data.find().toArray();
//     console.log(data);
//      res.send({data});
//     });

     app.post('/',async(_, resp)=>{
        let data=await dbConnect();
        data=await data.find().toArray();
        console.log(data);
        resp.send([
            {name:"satya kumar chaudhary"},
            {age:21},
            {city:"noida"},
            {country:"india"}


        ]);
     })

app.listen(4000);