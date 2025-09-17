import { useEffect, useState } from "react";
import InternshipCard from "./Components/InternshipCards";
import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import OverlaySpinner from './Components/Spinner';

export default function InternshipList() {
  const [loading, setLoading] = useState(false);
  const [totalpages, setTotalpages] = useState(0);
  const [internships, setInternships] = useState([]);
  const [locations, setlocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [sectorlist, setsectorlist] = useState([]);
  const [educationlist, seteducationlist] = useState([
    "Bachelor's Degree",
    "Diploma",
    "High School",
    "Master's Degree"
  ]);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [page, setPage] = useState(1);
  const API_URL = import.meta.env.VITE_SERVER_URL

  const handleChange = async (event, value) => {


    setLoading(true)
    setPage(value);
    const details = { page: value ,location:selectedLocation,sector:selectedSector,education:selectedEducation};
    await axios.post(API_URL + `/data/getall`, details).then((res) => {
      setInternships(res.data.internships);
setTotalpages(res.data.internshipscount);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setLoading(false)
    }).catch((err) => {
      console.log(err);
    });

  };



  const fetchfiles = async () => {

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


 




  useEffect(() => {
    fetchfiles();


  }, []);


  useEffect(() => {
    handleChange();
  }, [selectedLocation, selectedSector, selectedEducation]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {loading && <OverlaySpinner />}
      <div className="bg-white p-4 rounded-xl shadow mb-6 grid md:grid-cols-3 gap-4">
        <Autocomplete
          className="flex-1 min-w-54"
          disablePortal
          options={locations}
          onChange={(event, value) => setSelectedLocation(value.city)}
          getOptionLabel={(option) => option.city}
          renderInput={(params) => <TextField {...params} label="Location" />}
        />

        <Autocomplete
          className="flex-1 min-w-54"
          disablePortal
          options={sectorlist}
          onChange={(event, value) => setSelectedSector(value)}
          getOptionLabel={(option) => option}
          renderInput={(params) => <TextField {...params} label="Sector" />}
        />

        <Autocomplete
          className="flex-1 min-w-54"
          disablePortal
          options={educationlist}
          onChange={(event, value) => setSelectedEducation(value)}
          getOptionLabel={(option) => option}
          renderInput={(params) => <TextField {...params} label="Education" />}
        />
      </div>


      <div className="flex flex-wrap gap-6">
        {internships && internships.map((internships) => {

          return <InternshipCard key={internships.id} internships={internships} />
        })}
      </div>
      <div className="w-full flex justify-center mt-10 mb-10">
        <Stack spacing={2}   >
          <Pagination count={totalpages/10} page={page || 1} shape="rounded" onChange={handleChange} />

        </Stack>
      </div>


    </div>
  );
}
