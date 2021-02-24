import React, { useState, useEffect } from "react";
import axios from 'axios';

function FacultyCard(props) {
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        axios.get("/api/people/faculty", (res) => {
            console.log(res);
            setProfessors(res.data);
        })
    }, []);

    return (
            <div>
            {professors.map(prof => {
                return prof.Department === props.coll.name ?
                <div>    
                    <p>{prof.fullName}</p>
                    <p>{prof.title}</p>
                </div>
            : null}
            )}
            </div>
            )
}

export default FacultyCard;