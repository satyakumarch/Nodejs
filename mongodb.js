const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbname='code-to-code';

const client = new MongoClient(url);

async function getData(){
   let result=await client.connect();
   let db=result.db(dbname);
   let collection =db.collection('admission');
   let response=await collection.find({}).toArray();
   console.log(response);

}
getData();
