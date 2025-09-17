const express = require("express");
const app = express()
const dataRouter = require("./routes/data.route");
const userRouter = require("./routes/user.route");
const cors = require("cors");
const dbconnect=require("./db/connect");
const cookieParser = require("cookie-parser");
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'https://maverick-internai.onrender.com',  
  credentials: true,                
}));
dbconnect();
app.use(cookieParser());

app.use("/data",dataRouter);
app.use("/user",userRouter);

app.listen(5000,()=>{
    console.log("server is running on port 5000" )
});
module.exports=app;
