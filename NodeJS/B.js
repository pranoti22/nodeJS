function Order(id, itemdesrc,qty,price){
console.log("object of order created");
this.id=id;
this.itemdesrc=itemdesrc;
this.price=price;
this.qty=qty;
this.toString=function(){
    return this.id +" "+this.itemdesrc +" "+this.price+" "+this.qty;
}
}
module.exports= Order;