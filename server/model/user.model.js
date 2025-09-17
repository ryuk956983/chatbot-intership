const mongoose = require("mongoose");


const internshipSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    skills: {
        type:Array,
        default:[]
    },
    applied_internships: {
        type:Array,
        default:[]
    },
    location: {
        type:String,
        default:""
    },
    sector:{
        type:String,
        default:""
    },

    date_of_registration: { type: Date, default: Date.now() },
    education: {
        type:String,
        default:""
    },
    experience:String

})

module.exports = mongoose.model("users", internshipSchema);