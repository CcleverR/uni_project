const express = require('express');
const app=express();
//const cors = require("cors");
//const bodyParser=require('body-parser');
const port = 3001;
const user_info=require('./routes/user_info');
const db=require("./config/db");

app.use(bodyParser.json());



app.use(cors(
{
    origin:"*",
    credentials:true,
    optionsSuccessStatus:200,
}

));

//post 요청시 값을 객체로 바꾸어줌
//app.use(express.urlencoded({extended:true}))

//서버 연결시 발생
app.listen(port,()=>{
    console.log(`Node.js Server is running on port ${port}...`);
});