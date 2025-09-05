const app = require("express");
const router = app.Router();
const dataCTRL = require("../controller/data.controller");

router.get("/getinternships", dataCTRL.sendinternships);

router.post("/getbylocation", dataCTRL.sendbylocation);
router.post("/getrecommendation", dataCTRL.getrecommendation);

module.exports = router;