const mongoose = require("mongoose");
require('dotenv').config(); 
const mongo_url = process.env.MONGODB_CONNECTION_STRING;


const connect = () => {
    try {

        mongoose.connect(mongo_url);

        console.log("Database connected");
    } catch (Err) {
        console.log("Error Occured", Err);
    }

}

module.exports = connect;
