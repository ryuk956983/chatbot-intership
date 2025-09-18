import React, { useState } from 'react';
 import axios from 'axios';
 import Spinner from './Components/Spinner';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
const [isotp,setisotp]=useState(false);
    const [loading,setLoading]=useState(false);
    const API_URL = import.meta.env.VITE_SERVER_URL

   
    const handleotp = async () => {
    if(email){
        setLoading(true);
        await axios.post(API_URL + "/user/forgotpasswordotp", { email })
            .then((res) => {
                alert(res.data.message);
                if (res.data.panel) {
                    setisotp(true);
                }
                setLoading(false);
            }).catch((err) => { console.log(err) });
    }
    }
    
    const handlepasswordreset = async () => {
      if(isotp && newPassword && confirmPassword ){
      if(newPassword===confirmPassword){
        setLoading(true);
        await axios.post(API_URL + "/user/changepassword", { email, otp, newpassword: newPassword })
            .then((res) => {
                alert(res.data.message);
                if (res.data.path) {
                    window.location.href = "/login";
                }
                setLoading(false);
            }).catch((err) => { console.log(err) });
      }else{
        return alert("Passwords do not match");
      }
      }else{
        alert("Please fill all the fields");
      }
    }
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {loading && <Spinner />}
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-orange-600">Forgot Password</h1>
        <div  className="space-y-4">
         {!isotp && 
        
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
         }
         {isotp && <div>
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP</label>
            <input
              type="text"
              id="otp"
              name="otp"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
 



          <div>
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
</div>}
          {!isotp ? <button
          onClick={()=>{handleotp()}}
            type="submit"
            className="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
           Send OTP
          </button>
          :
          <button
          onClick={()=>{handlepasswordreset()}}
            type="submit"
            className="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Reset Password
          </button>}
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Remember your password?{' '}
            <a href="/login" className="text-orange-600 hover:text-orange-700">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
