const express = require('express');
const path = require('path');
const app = express();

const publicPath=path.join(__dirname,'public');

app.set('view engine','ejs');
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
})
app.get('/home',(_, resp)=>{
    resp.sendFile(`${publicPath}/home.html`);
})

app.get('/Profile',(_, resp)=>{
    const user={
        name:"satya Kumar Chaudhary",
        age:23,
        gmail:"satya@gamil.com",
        phone:42464522
    };
    resp.render('Profile',{user});
})


app.get('/contact',(_, resp)=>{
    resp.sendFile(`${publicPath}/contact.html`);
})
app.get('*',(_, resp)=>{
    resp.sendFile(`${publicPath}/NotfoundPage.html`);
})
app.listen(3000);
