const mysql=require("mysql2");
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'nimap'
});
db.connect((err)=>
{
   if(err)
    {
        console.error("database is not connected");
    } 
    else{
        console.log("database is connected");
    }
})
module.exports=db;