function Orders(itemName, customerlist,total) {
  this.itemName = itemName;
  this.customerlist =customerlist;
  this.total=total;
}

function Details(name ,qty,billtotal){
    this.name=name;
    this.qty=qty;
}
function Billing(name )
/*
var qtyMap=new Map();
var mapEntry=function(qty){

    if(qtyMap.has(qty))
    {
      let val=qtyMap.get(qty);
      val=val+1;
      qtyMap.set(qty,val);
    }
    else{

      qtyMap.set(qty, 1);
    }
    return qtyMap;
}*/
module.exports={Orders,Details};