// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const dbname='code-to-code';
// const client = new MongoClient(url);

// const dbConnect = require("./mongodb");


// async function getData()
// {
//    let result=await client.connect();
//    let db=result.db(dbname);
//    let collection =db.collection('admission');
// // //    let response=await collection.find({}).toArray();
// // //    console.log(response);

 


//   const main = async () => {
//     let data= await dbConnect();
//      data = await data.find({}).toArray();
//     console.warn(data);
// }
// main();
// }
// getData();


// const dbConnect = require('./mongodb');

// const getData = async () => {
//     let db = await dbConnect();
//     let collection = db.collection('product');
//     let data = await collection.find({}).toArray();
//     console.log(data);
// };

// getData();


const dbConnect = require('./mongodb');

const getData = async () => {
    let collection = await dbConnect();
    let data = await collection.find({}).toArray();
    console.log(data);
};

getData();