// const fs=require('fs');
// console.log("hello");
// fs.writeFileSync('hello.txt',"welcome to  nodejs");
// console.log("directory name-->",__dirname)//print the currrent directory
// console.log();
// console.log("filename-->",__filename)//print the file name

// const js=require('fs').writeFileSync;
// js('xyz.txt',"welcome to lpu");

// console.log("satya");
// console.log("hi");
// console.log(10+20);



// 11 lecture
//Simple and basic API
// const http=require('http');
// const data=require('./data.js');
// http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.write(JSON.stringify(data));
//     res.end();

// }).listen(3000);


//12 lecture
//input from command line
// const fs=require('fs');
// const input=process.argv;
// console.log(input);
// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);  
// }else if(input[2]=='remove')
//     {
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log('invalid command');
// }
//code to run this file
// node index.js remove satya.txt //to remove file
// node index.js add satya.txt "here is satya kumar chaudhary" //to add file




//21 lecture 
//make a html page
// const express=require('express');
// const path=require('path');
// const app=express();
// const dirPath=path.join(__dirname,'public');
// app.use(express.static(dirPath));
// app.listen(3000);


const dbConnect = require('./mongodb');

dbConnect().then((collection) => {
    collection.find({ name: "satya Kumar Chaudhary" }).toArray().then((data) => {
        console.log(data);
    });
});

const main = async () => {
    let collection = await dbConnect();
    let data = await collection.find({ name: 'satya Kumar Chaudhary' }).toArray();
    console.log(data);
};

main();
