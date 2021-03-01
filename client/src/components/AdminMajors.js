import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MajorsMapAdmin from "../components/MajorsMapAdmin";

function AdminMajors() {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        axios.get('/api/people/colleges').then(res => {
            setColleges(res.data);
        }).catch(err => console.log(err))
    })

    return (
        <div>
            {colleges.map(coll => {
                return (
                <div className="card m-3 p-3">
                <h5 className="card-title">{coll.name}</h5>
                <ul className="list-group list-group-flush">
                <MajorsMapAdmin coll={coll} />
                </ul>
                <button type="button" className="btn btn-secondary">Add Major</button>
                </div>
                )
            })}
        </div>
    )

}

export default AdminMajors;