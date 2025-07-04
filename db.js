import mysql from "mysql2";

//connetto il database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD ,
    database:process.env.DB_DATABASE
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("connected to Mysql")
});

export default connection;