const express = require("express");
const app = express()
const dataRouter = require("./routes/data.route")
const cors = require("cors");
const dbconnect=require("./db/connect");
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
dbconnect();

app.use("/data",dataRouter);

app.listen(5000,()=>{
    console.log("server is running on port 5000" )
});
module.exports=app;