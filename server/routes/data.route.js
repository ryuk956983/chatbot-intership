const app  = require("express");
const router = app.Router();
const dataCTRL = require("../controller/data.controller");

router.get("/getinternships",dataCTRL.sendinternships);



module.exports=router;