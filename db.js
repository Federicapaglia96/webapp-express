import mysql from "mysql2";

//connetto il database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database:"movies_db"
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("connected to Mysql")
});

export default connection;