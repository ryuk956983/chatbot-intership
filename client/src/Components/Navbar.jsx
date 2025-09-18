import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, useLocation } from "react-router-dom";
import useStore from "../../hooks/useStore";
import axios from "axios";
import Spinner from "./Spinner";
import { IoHome } from "react-icons/io5";


const MainNavbar = () => {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const islogin = useStore((state) => state.islogin);
  const API_URL = import.meta.env.VITE_SERVER_URL;
  const [loading, setLoading] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icons: "https://img.icons8.com/?size=100&id=RYh4BCDIOen9&format=png&color=fc6800" },

    { name: "All Internships", path: "/all", icons: "https://img.icons8.com/?size=100&id=oPyMMM7yN11a&format=png&color=fc6800" },
  ];

  useEffect(() => {
    setHamburger(false);
  }, [location]);

  const logout = async () => {
    setLoading(true);
    await axios.get(`${API_URL}/user/logout`, { withCredentials: true })
      .then((res) => {

        alert(res.data.message);
        setUser(null);
        islogin(false);
        setLoading(false);
      }).catch((err) => {
        console.log(err);
      });

    window.location.href = "/";
  }

  return (
    <nav className="bg-white shadow-md h-20 sticky top-0 z-50">
      {loading && <Spinner />}
      <div className="w-full mx-auto flex h-full items-center justify-between px-6">

        <div className="flex items-center gap-6 h-full">
          <img
            className="h-14 object-contain"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPhFEwlIq1yBLpIIviwVKLJxTyMurBwbt4-ADfNvwxtCq18T3I3fO_alSLXVZAeTOZec&usqp=CAU"
            alt="MCA Logo"
          />
          <img
            className="h-10  md:h-14 object-contain"
            src="https://sdjindia.in//job_docs/logo/1731769592pm%20intern.png"
            alt="Dev India Mission"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-600 flex gap-3  items-center text-lg font-medium hover:text-orange-500 transition-all duration-200 ${isActive ? "text-orange-500" : ""
                }`
              }
            >
              <img className="h-6" src={link.icons} alt="" />{link.name}
            </NavLink>

          ))}
          <a href="https://pminternship.mca.gov.in/mca-api/files/get-file-by-path?path=01nFZKl45dbNw8%2FHLL5Ko5AP9FPRHnhR2QYcanDGS3G9buwzlbrMVWGLu9IVpz3GyOQSs5VA%2Bf%2FARTFvC%2B4PKga14%2FT0c9QyUc6dnmgUcvrBr%2BYZv9ZtUj6wsiC%2FUWTiYwnWJRsEoHsPJA%3D%3D" className="text-gray-600 items-center flex gap-3  text-lg font-medium hover:text-orange-500 transition-all duration-200" target="blank"><img className="h-6" src="https://img.icons8.com/?size=100&id=1395&format=png&color=fc6800" alt="" />Guidelines</a>
          <a className='text-gray-600 items-center flex gap-3  text-lg font-medium hover:text-orange-500 transition-all duration-200' href="#about"><img className="h-6" src="https://img.icons8.com/?size=100&id=utVqz5OlvGCj&format=png&color=fc6800" alt="" />About</a>
        </div>

   
        <div className="flex items-center gap-6">
          {!user ? (
            <Link
              to="/login"
              className="hidden md:flex items-center gap-2 px-5 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition-all duration-200"
            >
              <img
                src="https://media.istockphoto.com/id/1200064810/vector/user-profile-login-or-access-authentication-icon-button-people-account-sign-in-logo-sign.jpg?s=170667a&w=0&k=20&c=O-JtGX3Joqxy9tJfwQVznmu6j85yhQdd-kZ3sb2BEqM="
                alt="login"
                className="h-5 w-5 rounded-full object-cover"
              />
              Registration / Login
            </Link>
          ) : (
            <div className="relative ">
              <div onClick={() => { setdropdown(!dropdown) }} className="h-12 w-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold text-xl cursor-pointer ">
                {user?.name[0]?.toUpperCase()}
              </div>

              <div className={`absolute right-0 mt-2 w-40 ${dropdown ? "block" : "hidden"} bg-white shadow-lg rounded-md py-2    transform  ease-in-out z-20`}>
                <p className="px-4 py-2 text-gray-700 font-medium">
                  {user?.name}
                </p>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <button
                  onClick={() => logout()}
                  className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          )}


          <div className="md:hidden cursor-pointer">
            <GiHamburgerMenu onClick={() => { setHamburger(!hamburger) }} size={26} className="text-gray-700" />
          </div>
        </div>
      </div>
      {hamburger && <div className="bg-white md:hidden shadow-md">
        <ul>
          {navLinks.map((link) => (
            <li key={link.name} className="md:hidden border-t border-gray-200">

              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  ` px-4 py-3 flex gap-3 items-center text-gray-600 text-lg font-medium hover:bg-gray-100 hover:text-orange-500 transition-all duration-200 ${isActive ? "text-orange-500" : ""
                  }`
                }
              >

                <img className="h-6" src={link.icons} alt="" /> {link.name}
              </NavLink>
            </li>

          ))}

          <li className="md:hidden border-t py-3 px-4 border-gray-200"><a href="https://pminternship.mca.gov.in/mca-api/files/get-file-by-path?path=01nFZKl45dbNw8%2FHLL5Ko5AP9FPRHnhR2QYcanDGS3G9buwzlbrMVWGLu9IVpz3GyOQSs5VA%2Bf%2FARTFvC%2B4PKga14%2FT0c9QyUc6dnmgUcvrBr%2BYZv9ZtUj6wsiC%2FUWTiYwnWJRsEoHsPJA%3D%3D" className="text-gray-600 items-center flex gap-3  text-lg font-medium hover:text-orange-500 transition-all duration-200" target="blank"><img className="h-6" src="https://img.icons8.com/?size=100&id=1395&format=png&color=fc6800" alt="" />Guidelines</a></li>
          <li className="md:hidden border-t py-3 px-4 border-gray-200"><a className='text-gray-600 items-center flex gap-3  text-lg font-medium hover:text-orange-500 transition-all duration-200' href="#about"><img className="h-6" src="https://img.icons8.com/?size=100&id=utVqz5OlvGCj&format=png&color=fc6800" alt="" />About</a></li>

          {!user && <li className="px-2 py-3">
            <Link
              to="/login"
              className="flex  items-center gap-2 px-5 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition-all duration-200"
            >
              <img
                src="https://media.istockphoto.com/id/1200064810/vector/user-profile-login-or-access-authentication-icon-button-people-account-sign-in-logo-sign.jpg?s=170667a&w=0&k=20&c=O-JtGX3Joqxy9tJfwQVznmu6j85yhQdd-kZ3sb2BEqM="
                alt="login"
                className="h-5 w-5 rounded-full object-cover"
              />
              Registration / Login
            </Link>
          </li>}
        </ul>
      </div>}
    </nav>
  );
};

export default MainNavbar;
