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
                        <td>{prof.fullName}</td>
                        <td>{prof.Title}</td>
                        <td>{prof.Department}</td>
                    </div>
                    )
                })}
            </div>
            )
}

export default FacultyCard;