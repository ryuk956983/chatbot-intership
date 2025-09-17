const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator');

require('dotenv').config()
const otpgenerated = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });

const userCTRL = {
    register: async (req, res) => {
        const { name, email, password, otp } = req.body;
        if (otp == otpgenerated) {
            const hashedpassword = await bcrypt.hash(password, 10);
            const newuser = new userModel({
                name,
                email,
                password: hashedpassword,
            });
            await newuser.save();
            res.status(201).json({ message: "User registered successfully", path: true });

        } else {
            res.json({ message: "Invalid OTP" });
        }


    },
    sendotp: async (req, res) => {
        const { email } = req.body;

        const existinguser = await userModel.find({ email });
        if (!existinguser) {
            return res.status(400).json({ message: "User does not exist" });
        } else {
            const { email } = req.body;
            const isUser = await userModel.findOne({ email });

            if (!isUser) {
                const sender = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true,
                    auth: {
                        user: "maverickteam67@gmail.com",
                        pass: "qezmzryqvkzrnhwb"
                    }
                })


                const info = await sender.sendMail({
                    from: "maverickteam67@gmail.com",
                    to: `${email}`,
                    subject: "OTP Verification",
                    text: "OTP Verfification",
                    html: `Hi there, your otp for verfication is <b>${otpgenerated}</b>`
                })


                res.status(200).json({ "message": "OTP sent Succesfully", "panel": true });

            } else {
                res.json({ "message": "User already exists", "panel": false })
            }
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        const existinguser = await userModel.findOne({ email });
        if (existinguser) {
            const ispasswordcorrect = await bcrypt.compare(password, existinguser.password);
            if (ispasswordcorrect) {
                const token = jwt.sign(email, process.env.JWT_SECRET);
                res.cookie("token", token, {
                    maxAge: 1000 * 60 * 60 * 24 * 365 * 20,
                    httpOnly: true,
                    secure: true,
                    sameSite: 'None'
                });
                res.status(200).json({ message: "Login successful", path: true });
            } else {
                res.json({ message: "Email or Password is incorrect" });
            }
        } else {
            return res.json({ message: "Email or Password is incorrect" });
        }

    },
    getuser: async (req, res) => {
        const token = req.cookies.token;
        if (!token) {
            return res.json({ message: "No token found", user: null });
        } else {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (!decoded) {
                return res.json({ message: "Invalid token", user: null });
            } else {
                const user = await userModel.findOne({ email: decoded });
                return res.status(200).json({ message: "User found", user });
            }
        }
    },
    logout: async (req, res) => {
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: 'None'
        });

        res.status(200).json({ message: "Logout successful" });
    },
    postprofile:async(req,res)=>{
    const token = req.cookies.token;
    const email = jwt.verify(token,process.env.JWT_SECRET);
    const {skills,experience,education,sector,location}= req.body;
        
    const user = await userModel.findOne({email});
    await userModel.updateOne({$set:{skills}})

    
    user.experience=experience;
    user.education=education;
    user.sector=sector;
    user.location=location;
    user.save();

    res.json({"message":"Profile saved Succesfully"})

    
    }

}

module.exports = userCTRL;
