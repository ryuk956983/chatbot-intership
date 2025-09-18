import React, { useState } from 'react';
import { HiMail, HiLockClosed } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Components/Spinner';

const LoginPage = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const API_URL = import.meta.env.VITE_SERVER_URL

const handlelogin = async () => {
    if (email && password) {
        setLoading(true);
        const details = { email, password };
        await axios.post(API_URL + "/user/login", details,{withCredentials:true})
            .then((res) => {
                alert(res.data.message);
                if (res.data.path) {
                    window.location.href = "/";
                }
            setLoading(false);
            }).catch((err) => { console.log(err) });
            
    } else {
        alert("Please fill all the fields");
    }
}

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-orange-100 flex items-center justify-center px-4 py-8">
        {loading && <Spinner /> }
      <div className="bg-white w-full max-w-md shadow-2xl rounded-xl p-8 md:p-10 transition-all">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Login to access your internship opportunities
        </p>

        <div className="space-y-5">
          {/* Email Field */}
          <div className="relative">
            <label className="block mb-1 text-sm text-gray-700">Email Address</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-400 focus-within:border-orange-500">
              <HiMail className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block mb-1 text-sm text-gray-700">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-400 focus-within:border-orange-500">
              <HiLockClosed className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm">
            <Link to="/forgot" className="text-orange-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
          onClick={()=>{handlelogin()}}
            className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <Link to="/register" className="text-orange-600 font-medium hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
