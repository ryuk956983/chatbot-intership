import React, { useState, useRef } from "react";
import TopNav from "./Components/TopNavbar";
import Navbar from "./Components/Navbar";
import Homepage from "./Homepage";
import FooterCTA from "./Components/FooterCTA";
import AllInternships from "./AllInternships";
import { Route, Routes, useLocation } from "react-router-dom";
import RegisterPage from "./Register";
import LoginPage from "./Login";
import axios from "axios";
import useStore from "../hooks/useStore";
import { useEffect } from "react";
import UserProfile from "./UserProfile"
import ForgotPassword from "./ForgotPass";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
 

  const islogin = useStore((state) => state.islogin);
  const API_URL = import.meta.env.VITE_SERVER_URL
  const setuserInStore = useStore((state) => state.setUser);

  const fetchuser = async () => {
    await axios.get(`${API_URL}/user/getuser`, { withCredentials: true }).then((res) => {
      if (res.data.user) {
        setuserInStore(res.data.user);
        islogin(true);
      } else {
        islogin(false);
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    fetchuser();
  }, []);



  return (
    <div className="overflow-x-hidden">
      <TopNav />

      <Navbar
        onRegisterClick={() => setShowRegister(true)}
        onLoginClick={() => setShowLogin(true)}
      />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/all" element={<AllInternships />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/forgot" element={<ForgotPassword/>}/>
      </Routes>

      <FooterCTA />
    </div>
  );
}

export default App;