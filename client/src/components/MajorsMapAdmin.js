import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import FacultyCard from './FacultyCard';
//import { Container } from 'react-bootstrap';
//import '../students.css';


function MajorsMapAdmin(props) {
    return (
        <div>
            {props.coll.majors.map(major => {
                return (
                    <div>
                    <li class="list-group-item">
                        {major} 
                        <span value={props.coll._id} className="badge badge-danger">Delete</span> 
                        <span value={props.coll._id} className="badge badge-warning">Update</span> 
                    </li>
                    </div>
                )
            })}
        </div>
    )
}

export default MajorsMapAdmin;