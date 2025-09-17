const app = require("express");
const router = app.Router();
const dataCTRL = require("../controller/data.controller");

router.get("/getinternships", dataCTRL.sendinternships);

router.post("/getbylocation", dataCTRL.sendbylocation);
router.post("/getrecommendation", dataCTRL.getrecommendation);
router.get("/getrecent",dataCTRL.getrecent);   
router.post("/getall",dataCTRL.getall);
router.get("/keepalive",dataCTRL.keepalive);


module.exports = router;