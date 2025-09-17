// StatsSection.jsx
import React from "react";
const stats = [
  { label: "Active Students", value: "10K+" },
  { label: "Partner Companies", value: "500+" },
  { label: "Live Internships", value: "2K+" },
  { label: "Success Rate", value: "95%" }
];

export default function StatsSection() {
  return (
    <div className="flex w-full justify-center bg-neutral-900 text-white py-8">
      <div className="grid grid-cols-4 max-sm:grid-cols-2 max-sm:gap-8 gap-15">
        {stats.map(stat => (
          <div key={stat.label} className="flex flex-col items-center text-orange-500">
            <span className="text-4xl font-bold">{stat.value}</span>
            <span className="text-lg mt-2">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
