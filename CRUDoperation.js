// make File
// read File
// rename File
// delete File
//update file

// Create a file named 'CRUDoperation.js'
const fs=require('fs');
const path=require('path');
const crud = 'crud'; // Define the 'crud' variable correctly
const dirPath = path.join(__dirname, crud);
const filepath = `${dirPath}/hello.txt`;
 fs.writeFileSync(filepath, "lovely professional university");

//read file
// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item);
// })

//append file
// fs.appendFileSync(filepath," welcome to lpu punjab");
// console.log("file read successfully");

//rename file
// fs.renameSync(filepath,`${dirPath}/satya.txt`);
// console.log("file renamed successfully");

//delete file
// fs.unlinkSync(`${dirPath}/satya.txt`);
// console.log("file deleted successfully");