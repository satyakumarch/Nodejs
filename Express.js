const express=require('express');
const app=express();

app.get('',(req,res)=>{
    res.send("hello world how are you?");
})
app.get('/about',(req,res)=>{
    res.send(" welcome to about page");
})
app.get('/contact',(req,res)=>{
    res.send(" welcome to contact page to contact with us");

});
app.listen(1000);