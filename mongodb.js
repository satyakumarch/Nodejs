// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const dbname='code-to-code';
// const client = new MongoClient(url);

// async function dbConnect(){
//    let result=await client.connect();
//    let db=result.db(dbname);
//    let collection =db.collection('admission');
//    // let response=await collection.find({}).toArray();
//    // console.log(response);
// }
// module.exports = dbConnect;


// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const databaseName = 'Nodejs2024';
// const client = new MongoClient(url);    // Create a new MongoClient

// async function dbConnect() {
//     let result=await client.connect();
//     db=result.db(databaseName);
//     return db.collection('product');
// }

// module.exports = dbConnect;

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'Nodejs2024';
const client = new MongoClient(url);    // Create a new MongoClient

async function dbConnect() {
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection('product');
}

module.exports = dbConnect;