const dataModel = require("../model/data.model");

const data = {
    sendinternships: async (req, res) => {
        const internships = await dataModel.find({});
        res.status(200).json(internships);

       
    }
}

module.exports = data;