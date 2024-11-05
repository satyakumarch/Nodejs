// console.log("hello --------");

// // console.log("hi---------");
//  setTimeout(() => {
//     console.log("welcome satya kumar chaudhary");
// }, 2000);

// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

//draw back of asyncronous code
let a=10;
let b=0;
setTimeout(() => {
    
    b=30;
    console.log("last execute value",a+b);
}, 2000);
console.log("first execute",a+b);