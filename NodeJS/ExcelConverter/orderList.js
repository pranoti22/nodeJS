const records=require("./ReadResponse");
const obj=require("./orderFunctions");
const keySet=require("./keyList.js");
const fs=require("fs");
const { indexOf } = require("./ReadResponse");
var keyList=[...keySet];
//var k=keyList.slice(indexOf("Email")+1);
console.log(keyList);
var details={};
var orderMaster=[];
var qtyMap=new Map();
for(let i=0;i<keyList.length;i++)
{
    var orderList=[];
    var total=0;
    
for(let j=0;j<records.length;j++)
{
    if(records[j][keyList[i]])
    {
    
      total=total+records[j][keyList[i]];
      qtyMap.set("total", total);
      orderList.push(new obj.Details(records[j]["Name"],records[j][keyList[i]]));
        
        
    }
    
}
if(orderList.length !=0){
var order=new obj.Orders(keyList[i],orderList,total);
orderMaster.push(order);
}
}

var jsonArray = JSON.parse(JSON.stringify(orderMaster))

console.log(jsonArray);
fs.writeFileSync("./OrderMaster.xlsx",JSON.stringify(jsonArray,null,2));

