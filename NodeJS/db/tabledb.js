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

var createTable="create table EMPLOYEE (empId varchar(25),name varchar(40),age INT(3),city varchar(10))";
var dropTable="drop table employee";
con.query(createTable,(err)=>{
    if(err.errno==1050)con.query(dropTable,(err)=>{if(err) throw err; con.query(createTable)})
     console.log("tablr created succesfully");
    })