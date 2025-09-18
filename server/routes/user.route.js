const express=require("express");
const router=express.Router();
const userCTRL=require("../controller/user.control");


router.post("/register",userCTRL.register);
router.post("/sendotp",userCTRL.sendotp);
router.post("/login",userCTRL.login);
router.get("/getuser",userCTRL.getuser);
router.get("/logout",userCTRL.logout);
router.post("/postprofile",userCTRL.postprofile);
router.post("/forgotpasswordotp",userCTRL.frogotpasswordotp);
router.post("/changepassword",userCTRL.changepassword);

module.exports=router;