import React, { useState } from 'react'
import Hero from "./Components/Hero";
import InternshipCards from "./Components/InternshipCards";
import Stats from "./Components/Stats";
import TrendingCard from "./Components/TrendingCard";
import WhyChoose from "./Components/WhyChoose";
import { useEffect ,useRef} from 'react';
import useStore from '../hooks/useStore';
import EligibilityCard from './Components/Eligibility';

const Homepage = () => {
 const sectionRef = useRef(null);
    
 const internships = useStore(state => state.internships);
    useEffect(() => {
        if (!internships) {
            alert("No internships found based on your profile, please update your profile");
        }else{
           sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [internships])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <main className='h=full'>
            <Hero/>

            <section ref={sectionRef} id="#internships" className='p-6 flex flex-col gap-10 mt-10'>
                <h1 className='text-center text-5xl max-sm:text-3xl font-semibold'>Your Recommended Interships will be shown here</h1>
                <div className='flex flex-wrap gap-8 '>
                    {
                        internships.length != 0 && internships.map((internships, ind) => {

                            return <InternshipCards key={ind} internships={internships} />
                        })
                    }
                </div>

            </section>

            <Stats />
            <TrendingCard />
            <EligibilityCard/>
            <section id="about">
                <WhyChoose />
            </section>


        </main>
    )
}

export default Homepage