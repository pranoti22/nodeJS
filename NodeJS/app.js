var myorders=require('./myOrders');
var orders=require('./orderList');
var sumOfAllOrders=myorders.calculateTotal(orders);
console.log(sumOfAllOrders);
console.log(myorders.calculateMax(orders));
console.log(myorders.calculateMin(orders));
/*orders.forEach((obj) => {
    console.log(obj.name);
});*/