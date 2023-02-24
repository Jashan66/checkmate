const { Client } = require("pg");
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

 const client = new Client({

    host: "localhost",
    user: process.env.SQL_USERNAME,
    port: 5432,
    password: process.env.SQL_PASSWORD,
    database: "usersDB"
});
client.connect();

app.post("/login", (req,res)=>{

    let userInfo = req.body.userInfo

    
    client.query(`SELECT * FROM userInfo WHERE email = '${userInfo.email_handle}' AND password = '${userInfo.password}' OR handle = '${userInfo.email_handle}' AND password = '${userInfo.password}'`, (err,response)=>{
        
        if (err){
            console.log(err);
        } else{
    
            if (response.rows.length == 0){
                console.log("Empty");
            }else{
                console.log(response.rows);
                res.send(response.rows)
            }

            
        }

        client.end;
    });
});


app.post("/register", (req,res)=>{
    let userInfo = req.body.userInfo;
    client.query(`INSERT INTO userInfo("id","email","handle","password") VALUES ('${userInfo.id}', '${userInfo.email}', '${userInfo.handle}', '${userInfo.password}')`, (err,response)=>{
        if (err){
            console.log(err);
        }
        if (response){
            console.log(response);
        }
    })
})



app.post("/connectDB", (req,res)=>{

    client.query(`SELECT * FROM userInfo`, (err,response)=>{

        if (err){
            console.log(err);
        } else{

            res.send(response.rows)
        }

    })
});





app.listen(3000, (req,res)=>{

    console.log("Server running on port 3000!");
})



