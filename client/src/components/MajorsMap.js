import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FacultyCard from './FacultyCard';

function MajorsMap(props) {
    return (
        <div>
            {props.coll.majors.map(major => {
                return (
                <div>
                <p>{major}</p>
                </div>
                )
            })}
        </div>
    )
}

export default MajorsMap;