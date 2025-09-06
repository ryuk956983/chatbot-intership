const dataModel = require("../model/data.model");
const { ChatGoogleGenerativeAI } = require("@langchain/google-genai")
const { z } = require("zod");
const axios = require("axios");


const data = {
    sendinternships: async (req, res) => {

        const internships = await dataModel.find({});
        res.status(200).json(internships);

    },
    sendbylocation: async (req, res) => {
        const { location } = req.body;
        const internships = await dataModel.find({ location });
    
            res.status(200).json(internships);
      

    },
    getrecommendation: async (req, res) => {

        try {


            const { skills, experience, location } = req.body;


            const model = new ChatGoogleGenerativeAI({
                model: "gemini-2.0-flash",
                temperature: 0.3
            });

            const userdata = {
                skills,
                experience,
                location
            }

            const fetchFunction = async () => {
                try {
                    const details = { location: userdata.location }
                   
                    const res = await axios.post("https://chatbot-intership.onrender.com/data/getbylocation", details);
                    return res.data;
                } catch (err) {
                    console.error("Error fetching API data:", err.message);
                    return [];
                }
            };


            (async () => {
                const internships = await fetchFunction();

                if (internships.length==0) {
                    res.json({internships})
                    return;
                };

                const prompt = `
You are a helpful AI assistant.

You will be given:
- A list of internship objects (in JSON format)
- A user profile (also in JSON)

Your task is to analyze the user's profile and match it to the internships.
you have to give only 5 interships that matches perfectly to users data 
Match based on the following priority:
1. Location (most important)
2. Skills (given as an array so check all the elements )
3. Experience
4. Other fields like duration, type, etc.

Return the **top 5 matching internships**, and return result as an array.

---

Internship Data (JSON):
${JSON.stringify(internships)}

---

User Data (JSON):
${JSON.stringify(userdata)}

---

`;

                const structuredLlm = model.withStructuredOutput(z.array(z.number()));

                const result = await structuredLlm.invoke(prompt);



                const docs = await dataModel.find({
                    id: { $in: result }
                });

                res.status(200).json({ internships: docs })



            })();

        } catch (err) {
            console.log(err)
            res.status(500).json({ err })
        }
    }
}

module.exports = data;