const xlsx=require("xlsx");
var json2xls = require('json2xls');
const fs=require("fs");
const xlsxFile = require('read-excel-file/node');
 var row=[]


const workbook=xlsx.readFile("./DhenuOrders.xlsx",{cellDates:true});
const worksheet=workbook.Sheets['Form Responses 1'];
var writeStream = fs.createWriteStream("file.xls");
const records =xlsx.utils.sheet_to_json(worksheet);

fs.writeFileSync("./ReadData.xlsx",JSON.stringify(records,null,2));

module.exports =records;