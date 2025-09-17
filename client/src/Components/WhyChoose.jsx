import React from "react";
import { Link } from "react-router-dom";
export default function WhyChooseSection() {
  const features = [
    {
      title: "AI-Powered Matching",
      description: "Get personalized internship recommendations based on your skills, interests, and career goals using advanced machine learning algorithms.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
      color: "text-blue-500"
    },
    {
      title: "Smart Search & Filter",
      description: "Find the perfect internship with intelligent search filters by domain, location, duration, stipend, and company type.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="11" cy="11" r="8" />
          <line strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      color: "text-yellow-400"
    },
    {
      title: "Application Tracking",
      description: "Keep track of all your applications in one place. Monitor status updates from applied to selected with real-time notifications.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
      color: "text-purple-600"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
    
      <div className="text-center mt-2 mb-8">
        <Link to ="/all" className="border border-red-500 text-red-500 px-5 py-2 rounded-md hover:bg-red-500 hover:text-white transition">
          View All Internships &rarr;
        </Link>
      </div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Why Choose Intern AI?</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Experience the future of internship discovery with cutting-edge technology and comprehensive support for your career journey
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map(({ title, description, icon, color }) => (
          <div
            key={title}
            className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
          >
            <div className={`mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 ${color}`}>
              {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}