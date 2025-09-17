import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import InternshipCard from './InternshipCards';

const TrendingCard = () => {

  const [recentinternships, setRecentInternships] = useState([]);

  const API_URL = import.meta.env.VITE_SERVER_URL
  const fetchrecent = async () => {
    await axios.get(API_URL +"/data/getrecent").then((res) => {
      setRecentInternships(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    fetchrecent();
  } , []);
  return (
   <main className='p-8 mt-10'>
    <h1 className='text-4xl  font-semibold text-center'>Recent Internships</h1>
    <div className='flex flex-wrap gap-8 mt-10'>
{ recentinternships.length != 0 && recentinternships.map((internships, index) => {
        return <InternshipCard key={index} internships={internships}/>
})}
    </div>
   </main>
  )
}

export default TrendingCard