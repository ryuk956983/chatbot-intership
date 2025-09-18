import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import OverlaySpinner from "./Spinner";
import useStore from "../../hooks/useStore";

const HeroSection = () => {


  const [loading, setLoading] = useState(false);
  const [skills, setskills] = useState([]);
  const [locations, setlocations] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [sectorlist, setsectorlist] = useState([]);
  const user = useStore(state => state.user);
  const setInternships = useStore(state => state.setInternships);


  const API_URL = import.meta.env.VITE_SERVER_URL




  const fetchfiles = async () => {
    await axios.get("/files/skills.json").then((res) => {
      setskills(res.data);
    }).catch((err) => {
      console.log(err);
    });

    await axios.get("/files/location.json").then((res) => {
      setlocations(res.data);
    }).catch((err) => {
      console.log(err);
    });

    await axios.get("/files/sectors.json").then((res) => {
      setsectorlist(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  const educationlist = [
    "Bachelor's Degree",
    "Diploma",
    "High School",
    "Master's Degree"
  ];


  const experience = ["Fresher", "1 Year", "2 Years", "3 Years", "4 Years", "5+ Years"];







  const handlesubmit = async () => {
    if (selectedSkills.length === 0 || selectedLocation === null || selectedEducation === null || selectedSector === null || selectedExperience === null) {
      alert("Please fill all the fields");
      return;
    } else {
      const details = {
        skills: selectedSkills.map((el) => el.skill),
        experience: selectedExperience,
        location: selectedLocation,
        education: selectedEducation,
        sector: selectedSector
      }

      setLoading(true);
      await axios.post(`${API_URL}/data/getrecommendation`, details)
        .then((res) => {
          setInternships(res.data.internships);
        }).catch((err) => {
          console.log(err);
        });

      setLoading(false);

    }

  }

  const handlebyprofile = async () => {
    if (!user) {
      alert("Please login to get recommendations");
      return;
    } else {
      if (user.location) {
        const details = {
          skills: user.skills.map((el) => el.skill),
          experience: user.experience,
          location: user.location,
          education: user.education,
          sector: user.sector
        };

        setLoading(true);
        await axios.post(`${API_URL}/data/getrecommendation`, details)
          .then((res) => {
            setInternships(res.data.internships);
          }).catch((err) => {
            console.log(err);
          });

        setLoading(false);
      } else {
        alert("Please update your profile  to get recommendations");
      }


    }
  }


  useEffect(() => {
    fetchfiles();

  }, [])


  return (
    <section
      className="relative bg-cover p-8 bg-center min-h-[90vh] flex flex-col items-center justify-center text-center text-white">
      <img src="https://www.shutterstock.com/image-photo/blurry-view-modern-office-space-600nw-2473153587.jpg " alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" />

      {loading && <OverlaySpinner />}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold">
          Shape Your Future With <br />
          <span className="text-orange-500">Intern-AI</span>
        </h1>
        <p className="mt-3 text-lg max-sm:text-sm">
          Learn from the best and explore opportunities
        </p>


        <div className="mt-8  bg-white rounded-lg shadow-lg p-6  gap-4 text-black max-w-6xl mx-auto ">
          <Autocomplete
            className="w-full"
            multiple
            limitTags={5}
            value={selectedSkills}
            id="multiple-limit-tags"
            options={skills}
            getOptionLabel={(option) => option.skill}
            onChange={(event, value) => setSelectedSkills(value)}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => (
              <TextField {...params} label="Skills" placeholder="Skills" />
            )}

          />

          <div className="flex w-full   gap-4 mt-4 max-lg:flex-col">
            <Autocomplete
              className="flex-1 min-w-54"
              disablePortal
              options={educationlist}
              onChange={(event, value) => setSelectedEducation(value)}
              renderInput={(params) => <TextField {...params} label="Education" />}
            />
            <Autocomplete
              className="flex-1 min-w-54"
              disablePortal
              options={sectorlist}
              onChange={(event, value) => setSelectedSector(value)}
              renderInput={(params) => <TextField {...params} label="Sector" />}
            />
            <Autocomplete
              className="flex-1 min-w-54"
              disablePortal
              options={experience}
              onChange={(event, value) => setSelectedExperience(value)}
              renderInput={(params) => <TextField {...params} label="Experience" />}
            />
            <Autocomplete
              className="flex-1 min-w-54"
              disablePortal
              options={locations}
              onChange={(event, value) => setSelectedLocation(value.city)}
              getOptionLabel={(option) => option.city}
              renderInput={(params) => <TextField {...params} label="Location" />}
            />
          </div>


          <div className="col-span-2 flex justify-center space-x-4 mt-4">
            <button onClick={() => { handlebyprofile() }} className="px-6  cursor-pointer py-2 bg-blue-950 text-white rounded-md hover:bg-orange-600">
              Search by Profile
            </button>
            <button onClick={() => { handlesubmit() }} className="px-6  cursor-pointer py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
              Get Recommendations
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};


export default HeroSection;
