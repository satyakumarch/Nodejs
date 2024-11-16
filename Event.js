const express=require('express');
const EventEmitter=require('events');
const app=express();
const event=new EventEmitter();
let count=0;

event.on('countapi',()=>{
    count++;
    console.log("Event called",count);
    })


app.get('/',(req,res)=>{
    res.send('API called');
    event.emit('countapi');
});
app.get('/search',(req,res)=>{
    res.send('request search');
    event.emit('countapi');
});
app.get('/update',(req,res)=>{
    res.send('request update');
    event.emit('countapi');
});
app.get('/add',(req,res)=>{
    res.send('request delete');
});
app.listen(4000);