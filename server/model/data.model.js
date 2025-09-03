const mongoose = require("mongoose");


const internshipSchema = new mongoose.Schema({
    id: Number,
    title: String,
    organization: String,
    location: String,
    duration: String,
    stipend: String,
    skills_required: Array,
    application_deadline: String,
    start_date: String,
    type: String,
    description: String,
    apply_link: String
})

module.exports = mongoose.model("internships", internshipSchema);