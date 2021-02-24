import React, { useState, useEffect } from "react";
import axios from 'axios';

function FacultyCard(props) {
    // const [professors, setProfessors] = useState([]);

    // useEffect(() => {
    //     axios.get("/api/people/faculty", (res) => {
    //         console.log(res);
    //         setProfessors(res.data);
    //     })
    // }, []);

    return (
            <div>
                {props.coll.faculty.map(prof => {
                    return (
                    <div>    
                        <p>{prof.fullName}</p>
                        <p>{prof.Title}</p>
                        <p>{prof.Department}</p>
                    </div>
                    )
                })}
            </div>
            )
}

export default FacultyCard;