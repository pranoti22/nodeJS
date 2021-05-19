const mysql =require('mysql');
//const { connect } = require('node:http2');


var con=mysql.createConnection({

user:"root",
password:"",
host:"localhost",
database:"mysql",
//port:5432
})

con.connect((err)=>{

    if(!err)
    console.log("success");
    else
    console.log("connection fail"+JSON.stringify(err,undefined,2));
})
con.query("create database RKIT",function(err,result){

    if(err) throw err;
    console.log("DB RKIT created")
    //console.log(result);
})

module.exports=con;