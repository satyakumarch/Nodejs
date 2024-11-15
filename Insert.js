 const dbConnect=require('./mongodb');

// const insert=async()=>{
//     const db=await dbConnect();
//     const result=await db.insertOne(
//         { name:"satya Kumar Chaudhary", age:23,gmail:"sayua#gmail.com",phone:42464522},
//         { name:"ram Kumar Chaudhary", age:23,gmail:"ram@gamil.com",phone:42464522},
//         { name:"shyam Kumar Chaudhary", age:23,gmail:"shyam@gamil.com",phone:42464522},

        

//     )
//     if(result.acknowledged){
//         console.log("Data inserted successfully");
//     };
//     insert();
    
// }

const insert = async () => {
    const collection = await dbConnect();
    const result = await collection.insertMany([
        { name: "satya Kumar Chaudhary", age: 23, gmail: "sayua#gmail.com", phone: 42464522 },
        { name: "ram Kumar Chaudhary", age: 23, gmail: "ram@gamil.com", phone: 42464522 },
        { name: "shyam Kumar Chaudhary", age: 23, gmail: "shyam@gamil.com", phone: 42464522 }
    ]);

    if (result.acknowledged) {
        console.log("Data inserted successfully");
    }
};

insert();
