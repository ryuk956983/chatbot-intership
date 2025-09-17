import React, { useRef, } from "react";
import "../index.css";


const TopNavbar = () => {
  const dropdownRef = useRef(null);


  


  return (

    <nav className="bg-blue-950 px-8 max-sm:px-2 shadow-md border-b py-4 border-gray-200 overflow-hidden">
      <div className="w-full  mx-auto flex items-center justify-between  ">

        <div className="flex items-center space-x-2">
          <img
            src="https://media.istockphoto.com/id/1449312317/vector/circle-india-flag-vector.jpg?s=612x612&w=0&k=20&c=4syGgPy2AEv1_OHfqaqiLMIn0R_rJwdwc0_zNHtwnt4="
            alt="Govt of India"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="font-semibold text-white text-sm">
            भारत सरकार / Government Of India
          </span>
        </div>

      


        <div className="relative overflow-hidden" >
          
          <button
            className="focus:outline-none relative z-9 flex gap-2 items-center text-white"
        
            aria-label="Select Language"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadidhcrDRq9goW5I0-lqPwkAH_cB0E8H04Q&s"
              alt="Language"
              className="h-8 w-8 rounded-full object-cover border-2 border-white hover:border-orange-500 transition"
            />
            <div id="google_translate_element" ref={dropdownRef} className="h-4 absolute top-0 "></div>
          </button>

        </div>



      </div>
    </nav>
  );
};

export default TopNavbar;