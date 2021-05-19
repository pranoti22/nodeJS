const mysql = require("mysql");
//const { commit } = require("./conn");
const conConfig=require("./DBConfig");

const conn=mysql.createConnection(conConfig);

var userId='1 --';
var age=25;

/*var sql= "select * from employee where empId ="+conn.escape(userId)+"and age >25";
conn.query(sql,function(error,result,fields){

    if(error) throw error;
    console.log(sql);
    console.log(result);
})
*/
var sql1="SELECT * from employee WHERE empId ="+userId+" and age>25";
conn.query(sql1,function(error,result,fields){

    if(error) throw error;
    console.log(sql1);
    console.log(result);
})
var sql2="SELECT * from employee WHERE empId =? and age>?";
conn.query(sql2,[userId,age],function(error,result,fields){

    if(error) throw error;
    console.log(sql2);
    console.log(result);
})