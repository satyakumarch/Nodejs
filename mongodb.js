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


const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbname = 'code-to-code';

const dbConnect = async () => {
    const client = new MongoClient(url);
    await client.connect();
    return client.db(dbname);
};

module.exports = dbConnect;
