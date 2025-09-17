import React, { useState } from "react";
import {
    Autocomplete,
    TextField,
    Container,
    Typography,
    Box,
    Button,
    Stack,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";




const SkillsForm = () => {
    const [skills, setskills] = useState([]);
    const [location, setlocation] = useState("");
    const [experience, setexperience] = useState("");
    const [sector, setsector] = useState("");
    const [education, seteducation] = useState("");
    const API_URL = import.meta.env.VITE_SERVER_URL;

    const educationlist = [
        "Bachelor's Degree",
        "Diploma",
        "High School",
        "Master's Degree"
    ];
    const experiencelist = ["Fresher", "1 Year", "2 Years", "3 Years", "4 Years", "5+ Years"];

    const [skillslist, setskillslist] = useState([]);
    const [sectorlist, setsectorlist] = useState([]);
    const [locationlist, setlocationslist] = useState([]);


    const fetchfiles = async () => {
        await axios.get("/files/skills.json")
            .then(res => { setskillslist(res.data) })
            .catch(err => { console.log(err) })

        await axios.get("/files/location.json")
            .then(res => { setlocationslist(res.data) })
            .catch(err => { console.log(err) })

        await axios.get("/files/sectors.json")
            .then(res => { setsectorlist(res.data) })
            .catch(err => { console.log(err) })
    }

    const fetchinfo = async () => {
        await axios.get(API_URL + "/user/getuser", { withCredentials: true })
            .then(res => {

                setskills(res.data.user.skills);
                setlocation(res.data.user.location);
                setexperience(res.data.user.experience);
                setsector(res.data.user.sector);
                seteducation(res.data.user.education)
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (skills && location && sector && education && experience) {



            const details = { skills, experience, education, sector, location }
            console.log(details)
            await axios.post(API_URL + "/user/postprofile", details, { withCredentials: true })
                .then(res => {
                    alert(res.data.message);
                    window.location.reload();
                })
                .catch(err => console.log(err));
        } else {
            alert("Please fill all the details");
        }


    };

    useEffect(() => {
        fetchfiles();
        fetchinfo();
        window.scrollTo(0, 0);
    }, [])

    return (
        <Container maxWidth="sm" sx={{ mt: 4, mb: 8 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
                Enter Your Details
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
                <Stack spacing={3}>


                    <Autocomplete
                        id="multiple-limit-tags"
                        limitTags={6}

                        multiple
                        options={skillslist}
                        getOptionLabel={(option) => option.skill}
                        value={skills}
                        onChange={(event, newValue) => setskills(newValue)}
                        renderInput={(params) => <TextField {...params} label="Skills" />}
                    />


                    <Autocomplete
                        options={sectorlist}
                        value={sector}
                        onChange={(event, newValue) => setsector(newValue)}
                        renderInput={(params) => <TextField {...params} label="Sector of Interest" />}
                    />


                    <Autocomplete
                        options={educationlist}
                        value={education}
                        onChange={(event, newValue) => seteducation(newValue)}
                        renderInput={(params) => <TextField {...params} label="Education" />}
                    />
                    <Autocomplete
                        className="flex-1 min-w-54"

                        options={locationlist}
                        onChange={(event, newValue) => setlocation(newValue.city)}
                        getOptionLabel={(option) => option.city}
                        renderInput={(params) => <TextField {...params} label="Location" />}
                    />


                    <Autocomplete
                        options={experiencelist}
                        value={experience}
                        onChange={(event, newValue) => setexperience(newValue)}
                        renderInput={(params) => <TextField {...params} label="Experience" />}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ mt: 2 }}
                    >
                        Submit
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
};

export default SkillsForm;
