import { MapPin, Calendar, IndianRupee, GraduationCap, Briefcase } from "lucide-react";
import React from "react";

export default function InternshipCard({internships}) {

const {title, organization , location, duration,type, stipend, skills_required, sector, minimum_education,application_deadline, experience, start_date,apply_link} = internships; 

  return (
    <div className="w-96 mx-auto bg-white shadow-lg rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition-shadow duration-300">

      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-500 text-sm">{organization}</p>
        </div>
        <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
          {type}
        </span>
      </div>

      
      <div className="mt-4 space-y-2 text-gray-600 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <IndianRupee className="w-4 h-4" />
          <span>{stipend}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills_required && skills_required.map((skill) => (
          <span
            key={skill}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

     
      <div className="mt-4 space-y-2 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-purple-500" />
          <span><strong>Sector:</strong> {sector}</span>
        </div>
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-green-500" />
          <span><strong>Minimum Education:</strong> {minimum_education}</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-orange-500" />
          <span><strong>Experience:</strong> {experience}</span>
        </div>
      </div>

      
      <div className="mt-6 flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-xs">Start date - {start_date}</p>
          <p className="text-gray-500 text-xs">Deadline - {application_deadline}</p>
        </div>
        
        < a href={apply_link} target="blank" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full shadow-md transition">
          Apply Now
        </a>
      </div>
    </div>
  );
}
