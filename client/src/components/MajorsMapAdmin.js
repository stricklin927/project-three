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
                    <li class="list-group-item">{major}</li>
                )
            })}
        </div>
    )
}

export default MajorsMapAdmin;