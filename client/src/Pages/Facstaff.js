import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import FacMap from '../components/FacMap';

function Facstaff() {
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        axios.get("/api/people/faculty", (res) => {
            console.log(res);
            setProfessors(res.data);
        })
    });


    return(
        <div>
        <h1>Faculty and Staff Page</h1>
        {professors.map(prof => {
            return (
            <div>
            <div>{prof.fullName}</div>
            <div>{prof.Title}</div>
            <div>{prof.Department}</div>
            </div>
            )
        })}
        </div>
    )
}

export default Facstaff;