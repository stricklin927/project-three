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
                        <p><b>{prof.Title}</b> {prof.fullName}</p>
                        </div>
                    )
                })}
            </div>
            )
}

export default FacultyCard;