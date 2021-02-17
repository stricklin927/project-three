import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FacMap from '../components/FacMap';

function Facstaff() {
    const [majors, setMajors] = useState([]);

    useEffect(() => {
        axios.get("/api/majors", (res) => {
            console.log(res);
            setMajors(res);
        })
    }, []);


    return(
        <div>
        <h1>Faculty and Staff Page</h1>
        {majors.map(major => {
            return (
            <div>
            <div>{major.name}</div>
            <FacMap department={major.name} />
            </div>
            )
        })}
        </div>
    )
}

export default Facstaff;