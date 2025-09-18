import React from "react";

const EligibilityCard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-orange-600 text-center mb-6">
            Are you Eligible?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-300 rounded-full mb-4">
                <span className="text-3xl font-semibold text-red-500">21</span>
              </div>
              <h3 className="text-xl font-medium text-gray-700">Age</h3>
              <p className="text-lg text-gray-500">21-24 Years</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-300 rounded-full mb-4">
                <span className="text-3xl font-semibold text-blue-500">📂</span>
              </div>
              <h3 className="text-xl font-medium text-gray-700">Job Status</h3>
              <p className="text-lg text-gray-500">Not Employed Full Time</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full mb-4">
                <span className="text-3xl font-semibold text-purple-500">🎓</span>
              </div>
              <h3 className="text-xl font-medium text-gray-700">Education</h3>
              <p className="text-lg text-gray-500">Not Enrolled Full Time</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 bg-green-300 rounded-full mb-4">
                <span className="text-3xl font-semibold text-green-500">👨‍👩‍👦</span>
              </div>
              <h3 className="text-xl font-medium text-center text-gray-700">Family (Self/Spouse/Parents)</h3>
              <p className="text-lg text-gray-500 text-center">
                No one is Earning more than ₹8 Lakhs PA
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-orange-600 text-center mb-6">
            Core Benefits for PM Internship Scheme
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-300 rounded-full mb-4">
                <span className="text-3xl font-semibold text-blue-500">🕒</span>
              </div>
              <h3 className="text-xl font-medium text-gray-700">Real-life Experience</h3>
              <p className="text-lg text-gray-500 text-center">
                12 months real-life experience in India's top companies
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full mb-4">
                <span className="text-3xl font-semibold text-purple-500">💰</span>
              </div>
              <h3 className="text-xl font-medium text-gray-700">Monthly Assistance</h3>
              <p className="text-lg text-gray-500 text-center">
                ₹4500 by Government of India and ₹500 by Industry
              </p>
            </div>

      
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 bg-green-300 rounded-full mb-4">
                <span className="text-3xl font-semibold text-green-500">🎁</span>
              </div>
              <h3 className="text-xl font-medium text-gray-700">One-time Grant</h3>
              <p className="text-lg text-gray-500">₹6000 for incidentals</p>
            </div>

   
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-300 rounded-full mb-4">
                <span className="text-3xl font-semibold text-yellow-500">🏢</span>
              </div>
              <h3 className="text-xl font-medium text-gray-700">Select From Top Companies</h3>
              <p className="text-lg text-gray-500 text-center">
                Select from various sectors and top companies of India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCard;
