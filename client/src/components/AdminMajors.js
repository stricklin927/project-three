import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MajorsMap from "../components/MajorsMap";
import FacultyCard from "../components/FacultyCard";
import MajorsMapAdmin from "../components/MajorsMapAdmin";

function AdminMajors() {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        axios.get('/api/people/colleges').then(res => {
            //console.log(res);
            setColleges(res.data);
        }).catch(err => console.log(err))
    })


    // <div class="card" style="width: 18rem;">
    // <ul class="list-group list-group-flush">
    //     <li class="list-group-item">Cras justo odio</li>
    //     <li class="list-group-item">Dapibus ac facilisis in</li>
    //     <li class="list-group-item">Vestibulum at eros</li>
    // </ul>
    // </div>

    return (
        <div>
            {colleges.map(coll => {
                return (
                <div className="card m-3 p-3">
                <h5 className="card-title">{coll.name}</h5>
                <ul className="list-group list-group-flush">
                <MajorsMapAdmin coll={coll} />
                </ul>
                </div>
                )
            })}
        </div>
    )

}

export default AdminMajors;