const records = require("./ReadResponse");
const xlsx=require("xlsx");
const { indexOf } = require("./ReadResponse");
var keys=[]
var exclude=["Timestamp","Score","Name","Mobile","Delivery At ","Delivery Address","Location","Email"]
var keySet= new Set();
for(let i=0;i<records.length;i++)
{
    keys=Object.keys(records[i]);

    for(let j=0;j<keys.length;j++)
    {
        if(!exclude.includes(keys[j]))
        keySet.add(keys[j]);
    }
}
//console.log(keySet);
module.exports=keySet;