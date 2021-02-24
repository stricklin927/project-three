import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import FacMap from '../components/FacMap';

function Facstaff() {
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        axios.get("/api/people/faculty").then(res => {
            console.log(res);
            setProfessors(res.data);
        })
    });

    const alpha = () => {
        console.log("Alpha clicked")
        const sortedProfs = [...professors].sort(function (a, b) {
              if (a.lastName > b.lastName) {
                  return -1;
              }
              if (b.lastName > a.lastName) {
                  return 1;
              }
              return 0;
          })
        //console.log(sortedEmps);
        setProfessors(sortedProfs);
      }

      const reversed = () => {
        console.log("Reverse clicked")
        const sortedProfs = [...professors].sort(function (a, b) {
              if (a.lastName > b.lastName) {
                  return 1;
              }
              if (b.lastName > a.lastName) {
                  return -1;
              }
              return 0;
          })
        //console.log(sortedEmps);
        setProfessors(sortedProfs);
      }

      const byTitle = () => {
        console.log("byTitle clicked")
        const sortedProfs = [...professors].sort(function (a, b) {
              if (a.Title > b.Title) {
                  return -1;
              }
              if (b.Title > a.Title) {
                  return 1;
              }
              return 0;
          })
        //console.log(sortedEmps);
        setProfessors(sortedProfs);
      }

      const byDepartment = () => {
        console.log("byDepartment clicked")
        const sortedProfs = [...professors].sort(function (a, b) {
              if (a.Department > b.Department) {
                  return -1;
              }
              if (b.Department > a.Department) {
                  return 1;
              }
              return 0;
          })
        //console.log(sortedEmps);
        setProfessors(sortedProfs);
      }

    return(
        <div>
        <h1>Faculty and Staff Page</h1>
        <button onClick={alpha}>Alphabetical Order</button>
        <button onClick={reversed}>Reverse alpha</button>
        <button onClick={byTitle}>Sort by title</button>
        <button onClick={byDepartment}>Sort by department</button>
        {professors.map(prof => {
            return (
            <div>
            <div>{prof.firstName} {prof.lastName}</div>
            <div>{prof.Title}</div>
            <div>{prof.Department}</div>
            </div>
            )
        })}
        </div>
    )
}

export default Facstaff;