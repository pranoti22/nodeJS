var obj1=require('./B.js');
var obj2=require('./B');
 var b1=new obj1(1,"laptop",2,45000);
 var b2=new obj2(1,"laptop",3,45000);
console.log(b1.toString()); 
console.log(b2.toString()); 