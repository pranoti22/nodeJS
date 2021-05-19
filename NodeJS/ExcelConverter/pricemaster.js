const records=require("./ReadResponse");
const obj=require("./orderFunctions");
const keySet=require("./keyList.js");
const fs=require("fs");
var keyList=[...keySet];
for(var o in records){
    if(records.hasOwnProperty(o)){
    for(var prop in records[o]){
        if(records[o].hasOwnProperty(prop)){
            if(keyList.includes(prop))
           console.log(prop + ':' + records[o][prop]);
        }
    }
}
}
/*for(let i=0;i<keyList.length;i++)
{
records.forEach(element =>{
  console.log(element["Name"]);
        //console.log("");
        //console.log(element[key]);
})
/*{
    if(keyList.includes(key))
    {
       
        
    }
    
}
}*/

