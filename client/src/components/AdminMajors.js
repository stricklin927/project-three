import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MajorsMap from "../components/MajorsMap";
import FacultyCard from "../components/FacultyCard";

function AdminMajors() {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        axios.get('/api/people/colleges').then(res => {
            //console.log(res);
            setColleges(res.data);
        }).catch(err => console.log(err))
    })

    return (
        <div>
            {colleges.map(coll => {
                return (
                <div>
                <h2>{coll.name}</h2>
                <MajorsMap coll={coll} />
                </div>
                )
            })}
        </div>
    )

}

export default AdminMajors;