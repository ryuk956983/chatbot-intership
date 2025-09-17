import React, { useState } from 'react';
import { HiUser, HiMail, HiLockClosed } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Components/Spinner';

const RegisterPage = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [otp, setotp] = useState("");

    const [isotp, setisotp] = useState(false);
    const API_URL = import.meta.env.VITE_SERVER_URL


    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const handlesubmit = async () => {

        setLoading(true);
        const details = { name, email, password, otp };
        await axios.post(API_URL + "/user/register", details)
            .then((res) => {
                alert(res.data.message);

                setLoading(false);
                if(res.data.path){
                 window.location.href = "/login";    
                }
               
            }
            ).catch((err) => { console.log(err) });



    }

    const handleotp = async () => {
        if (name, email, password, confirmPassword) {
            if (password === confirmPassword) {
                if (isValidEmail(email)) {
                    setLoading(true)
                    const details = { email };
                    await axios.post(API_URL + "/user/sendotp", details)
                        .then((res) => {
                            alert(res.data.message);
                        }
                        ).catch((err) => { console.log(err) });
                    setisotp(true);
                    setLoading(false);
                } else {
                    alert("Please enter a valid email address");
                    return;
                }

            } else {
                alert("Password and Confirm Password should be same");
                return;
            }

        } else {
            alert("Please fill all the fields");
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-orange-100 flex items-center justify-center px-4 py-8">
            {loading && <Spinner />}
            <div className="bg-white w-full max-w-md shadow-2xl rounded-xl p-8 md:p-10 transition-all">
                <h2 className="text-3xl font-bold text-center text-orange-600 mb-2">
                    Create an Account
                </h2>
                <p className="text-center text-gray-500 mb-6 text-sm">
                    Join the PM Internship Portal and explore opportunities!
                </p>

                <div className="space-y-5">

                    <div className="relative">
                        <label className="block mb-1 text-sm text-gray-700">Full Name</label>
                        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-400 focus-within:border-orange-500">
                            <HiUser className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                name="name"
                                value={name}
                                readOnly={isotp}
                                onChange={(e) => setname(e.target.value)}
                                required
                                placeholder="Your full name"
                                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
                            />
                        </div>
                    </div>


                    <div className="relative">
                        <label className="block mb-1 text-sm text-gray-700">Email Address</label>
                        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-400 focus-within:border-orange-500">
                            <HiMail className="text-gray-400 mr-2" />
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                required
                                readOnly={isotp}
                                placeholder="you@example.com"
                                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
                            />

                        </div>
                    </div>


                    <div className="relative">
                        <label className="block mb-1 text-sm text-gray-700">Password</label>
                        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-400 focus-within:border-orange-500">
                            <HiLockClosed className="text-gray-400 mr-2" />
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                required
                                readOnly={isotp}
                                placeholder="Enter a secure password"
                                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
                            />
                        </div>
                    </div>


                    <div className="relative">
                        <label className="block mb-1 text-sm text-gray-700">Confirm Password</label>
                        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-400 focus-within:border-orange-500">
                            <HiLockClosed className="text-gray-400 mr-2" />
                            <input
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setconfirmPassword(e.target.value)}
                                required
                                readOnly={isotp}
                                placeholder="Re-enter password"
                                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <label className="block mb-1 text-sm text-gray-700">OTP</label>
                        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-400 focus-within:border-orange-500">
                            <HiLockClosed className="text-gray-400 mr-2" />
                            <input
                                type="number"
                                name="otp"
                                value={otp}
                                onChange={(e) => setotp(e.target.value)}
                                required
                                placeholder="Enter OTP"
                                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
                            />
                        </div>
                    </div>


                    {isotp ? <button
                        onClick={() => { handlesubmit() }}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                        Register
                    </button>
                        :
                        <button
                            onClick={() => { handleotp() }}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            Send OTP
                        </button>}
                </div>


                <p className="mt-6 text-sm text-center text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-orange-600 font-medium hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
