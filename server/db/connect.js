const mongoose = require("mongoose");

const connect = ()=>{
    try{
mongoose.connect("mongodb+srv://vermaanurag550:CADILLAC9569@cluster0.e9wg5pp.mongodb.net/Internships?retryWrites=true&w=majority&appName=Cluster0")

  console.log("Database connected");
    }catch(Err){
        console.log("Error Occured",Err);
    }
  
} 

module.exports = connect;
