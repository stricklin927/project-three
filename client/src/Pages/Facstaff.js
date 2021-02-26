import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FacMap from '../components/FacMap';

function Facstaff() {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
    axios.get('/api/people/colleges').then(res => {
        //console.log(res);
        setColleges(res.data);
    })
    }, [])

    // useEffect(() => {
    //     axios.get("/api/people/faculty").then(res => {
    //         console.log(res);
    //         setProfessors(res.data);
    //     })
    // }, []);

    // const alpha = () => {
    //     console.log("Alpha clicked")
    //     const sortedProfs = [...professors].sort(function (a, b) {
    //           if (a.lastName > b.lastName) {
    //               return 1;
    //           }
    //           if (b.lastName > a.lastName) {
    //               return -1;
    //           }
    //           return 0;
    //       })
    //     console.log(sortedProfs);
    //     setProfessors(sortedProfs);
    //   }

    //   const reversed = () => {
    //     console.log("Reverse clicked")
    //     const sortedProfs = [...professors].sort(function (a, b) {
    //           if (a.lastName > b.lastName) {
    //               return -1;
    //           }
    //           if (b.lastName > a.lastName) {
    //               return 1;
    //           }
    //           return 0;
    //       })
    //     console.log(sortedProfs);
    //     setProfessors(sortedProfs);
    //   }

    //   const byTitle = () => {
    //     console.log("byTitle clicked")
    //     const sortedProfs = [...professors].sort(function (a, b) {
    //           if (a.Title > b.Title) {
    //               return 1;
    //           }
    //           if (b.Title > a.Title) {
    //               return -1;
    //           }
    //           return 0;
    //       })
    //     console.log(sortedProfs);
    //     setProfessors(sortedProfs);
    //   }

    //   const byDepartment = () => {
    //     console.log("byDepartment clicked")
    //     const sortedProfs = [...professors].sort(function (a, b) {
    //           if (a.Department > b.Department) {
    //               return 1;
    //           }
    //           if (b.Department > a.Department) {
    //               return -1;
    //           }
    //           return 0;
    //       })
    //     console.log(sortedProfs);
    //     setProfessors(sortedProfs);
    //   }

      return(
        <div>
            <div >
                <img src="./images/faculty.gif" className="d-block w-100" alt="..." style={{ height: "600"}}></img>
                <div className="text-center d-none d-md-block pt-3 px-4" style={{border: "1px", backgroundColor: "white", color: "black", width: "500px", height: "200px", right: "100px", position: "absolute", bottom: "150px" }}>
                    <h5 className="font-weight-bold"> Meet Our Faculty! </h5>
                    <p> Dreams take time, effort, and hard work to bring into fruition. 
                        For this very reason, our faculty is dedicated to guiding our students to reaching their full potential. 
                        Going the extra mile for our students is just one part of our norm at ITU. 
                        Let's meet those who strive hard to make it all happen! </p>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <img src="./images/ladyprof.jpg" style={{ width: "600px" }}></img>
                    </div>
                    <div class="col-sm pl-5">
                        <h2 className="h2 text-center pt-5"> Soaring High at ITU </h2>
                        <p> 
                            Every single member of our faculty has a personal hand and intiative in ensuring the success 
                            of our students. Recognizing the efforts and achievements of our employees is just one of the
                            many ways that we lift up our heroes.
                        </p>    
                        <p>
                            The <b>Soaring Achievement Award</b> offers an opportunity for us 
                            to spotlight those who help bring great contributions and successes to ITU.
                        </p>
            
                    </div>
                </div>
                <br></br> 
                <div class="row">
                    <div class="col-sm">
                        <img src="./images/leadbanner.png" style={{width: "1200px"}}></img>
                    </div>
                </div>
                <br></br> 
                <div class="row">
                    <div class="col-sm">
                        <img src="./images/dean.jpg" style={{width: "850px"}}></img>
                        <div className="text-center d-none d-md-block pt-3 px-4" style={{border: "1px ", backgroundColor: "white", color: "black", width: "420px", height: "180px", right: "80px", position: "absolute", bottom: "40px", opacity: "0.8" }}>
                            <h5 className="font-weight-bold"> Words From Our Dean! </h5>
                            <p> "The academic excellence of ITU is, in the end, all about people. 
                                My aim is to promote a culture based in purpose and contributing to the common good, 
                                the power of learning, the value of play, and the importance of well-being." </p>
                        </div>
                    </div>
                    <div class="col-sm">
                        <h5>ITU Departments</h5>
                        <ul>
                            <li>Art</li>
                            <li>Business</li>
                            <li>Computer Science</li>
                            <li>Education</li>
                            <li>Medicine</li>
                            <li>Science</li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <div class="row"> 
                    <img src="./images/spotlight1.gif" style={{ width: "1200px" }}></img>
                </div>
                <br></br>
                <div class="row mx-5">
                    <div class="col-sm">
                        <img src="./images/prof1-1.jpg" style={{width: "250px"}}></img>
                    </div>
                    <div class="col-sm">
                        <img src="./images/prof2-1.jpg" style={{width: "250px"}}></img>
                    </div>
                    <div class="col-sm">
                        <img src="./images/prof3-1.jpg" style={{width: "250px"}}></img>
                    </div>
                </div>  
            </div>
            <br></br>
        
            <h1>Faculty Listing</h1>
            {/* <button onClick={alpha}>Alphabetical Order</button>
            <button onClick={reversed}>Reverse alpha</button>
            <button onClick={byTitle}>Sort by title</button>
            <button onClick={byDepartment}>Sort by department</button> */}
            {colleges.map(coll => {
                return (
                <div>
                    <div>{coll.name}</div>
                    <FacMap coll={coll} />
                </div>
                )
            })}
        </div>
    )
}


export default Facstaff;