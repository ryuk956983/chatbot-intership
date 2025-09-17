// FooterCTA.jsx
import React from "react";
import {Link} from "react-router-dom"

export default function FooterCTA() {
  return (
    <div className="bg-red-100 pt-10  text-center">
      <h2 className="text-xl font-semibold mb-2">Ready to Start Your Journey?</h2>
      <p className="mb-6 text-gray-700 max-w-xl mx-auto">
        Join thousands of students who have already found their dream internships through our platform
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link to="/profile" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition">
          Create Student Profile
        </Link>
        <Link to="/all"  className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-2 rounded-md transition">
          Browse Internships
        </Link>
      </div>
      <footer className="bg-gray-900 text-gray-300 mt-16 py-10 px-6 text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="text-white font-semibold text-lg mb-3">Inter-AI</h1>
            <p className="max-w-sm">
              Connecting talented students with meaningful internship opportunities across India. Empowering the next generation through hands-on experience and skill development.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white text-gray-400">Facebook</a>
              <a href="#" className="hover:text-white text-gray-400">Twitter</a>
              <a href="#" className="hover:text-white text-gray-400">LinkedIn</a>
              <a href="#" className="hover:text-white text-gray-400">Instagram</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:gap-12 text-sm text-gray-400">
            <div>
              <h4 className="font-semibold mb-2 text-white">Quick Links</h4>
              <ul>
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><Link to="/all" className="hover:text-white">Browse Internships</Link></li>
                <li><a href="#about" className="hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">Support</h4>
              <ul>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-10">
          &copy; 2024 PM Internship Portal. All rights reserved. | Government of India Initiative
        </div>
      </footer>
    </div>
  );
}
