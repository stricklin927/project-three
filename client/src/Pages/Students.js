import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MajorsMap from "../components/MajorsMap";
import FacultyCard from "../components/FacultyCard";

function Students() {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        axios.get('/api/people/colleges').then(res => {
            console.log(res);
            setColleges(res.data);
        })
    })

    return(
        <div>
        <h1>Students Page</h1>
        {colleges.map(coll => {
            return (
            <div>
            <h2>{coll.name}</h2>
            <FacultyCard coll={coll} />
            <MajorsMap coll={coll} />
            </div>
            )
        })}
        </div>
    )
}

export default Students;