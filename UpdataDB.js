const dbConnect = require("./mongodb");

const updateData=async()=>{
    let data=await dbConnect();
    let result=await data.updateone(
        {name:"satya Kumar Chaudhary"},
        {$set:{name:"ram kumar gupta"}}
)

console.warn(result);
};
updateData;