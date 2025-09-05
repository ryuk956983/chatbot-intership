const dataModel = require("../model/data.model");

const data = {
    sendinternships: async (req, res) => {
 
        const internships = await dataModel.find({});
        res.status(200).json(internships);
       
    },
    sendbylocation:async(req,res)=>{
             const {location} = req.body;
        const internships = await dataModel.find({location});
        res.status(200).json(internships);
    }
}

module.exports = data;