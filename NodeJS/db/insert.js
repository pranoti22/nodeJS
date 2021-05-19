const mysql = require("mysql");
const conConfig=require("./DBConfig");

const conn=mysql.createConnection(conConfig);
const sql="insert into EMPLOYEE values(?,?,?,?)";

conn.query(sql,[1,'A',25,"Pune"],function(error){

    if(error) throw error;
})
conn.query(sql,[1,'P',20,"Mumbai"],function(error){

    if(error) throw error;
})
conn.query(sql,[1,'U',28,"Nashik"],function(error){

    if(error) throw error;
})
const queryOpt={
    sql:sql,
    values:[2,'B',45,"kolhapur"],
    timeout:30000

}

conn.query(queryOpt,function(err,result,fields){

    if(err) throw err;
    console.log(result);
    console.log(fields);
})