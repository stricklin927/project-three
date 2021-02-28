import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FacMap from '../components/FacMap';
import { Carousel, Col, Container, Row, Card, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';



import '../facstaff.css';


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
            <Carousel id="carousel">
                <Carousel.Item id="firstSlide">
                    <Carousel.Caption id="firstSlideText" className="p-2">
                        <h3>Meet Our Faculty</h3>
                        <p id="text">Dreams take time, effort, and hard work to bring into fruition. 
                        For this very reason, our faculty is dedicated to guiding our students to reaching their full potential. 
                        Going the extra mile for our students is just one part of our norm at ITU. 
                        Let's meet those who strive hard to make it all happen!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id="secondSlide">
                    <Carousel.Caption id="secondSlideText" className="p-3">
                        <h3>The Art of ITU</h3>
                        <p id="text"> Here at ITU, we strive to create the type of environment that will allow our students to develop and 
                            hone their craft. It is one of our greatest endeavors to ensure that our students can create the future
                            they want by giving them the tools and space to do so creatively.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id="thirdSlide">
                    <Carousel.Caption id="thirdSlideText" className="p-2">
                    <h3> Pushing Our Promise </h3>
                    <p id="text">Our promise at ITU is to ensure that every student, no matter their background, receives the best education and opportunities
                       possible at our institution. Every single faculty member at ITU understands and embodies this promise, and provides the support
                       needed for our students to thrive.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br></br>
            <br></br>
            <br></br>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={7} xl={7} id="soaringHigh"></Col>
                    <Col sm id="soaringHighText">
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
            
                    </Col>
                </Row>
                <br></br> 
                <Row>
                    <Col sm id="leadBanner"> </Col>
                </Row>
                <br></br> 
                <Row>
                    <Col xs={12} sm={11} md={8} lg={9} xl={8} id="dean">
                        <p id="deanText" className="pt-3 px-5 text-center"> <span className="font-weight-bold h5">Words From Our Dean!</span> <br></br>"The academic excellence of ITU is, in the end, all about people. 
                            My aim is to promote a culture based in purpose and contributing to the common good, 
                            the power of learning, the value of play, and the importance of well-being." </p>
                    </Col>
                    <Col id="departments">
                        <h5>ITU Departments</h5>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Art
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <p className="font-weight-bold">Faculty</p>
                                        <p> Dean Becky Adjunct </p>
                                        <p> Professor Bill Baggins </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Business
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <p className="font-weight-bold">Faculty</p>
                                        <p> Dean John Snow </p>
                                        <p> Professor Greg Gandalf </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        Computer Science
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <p className="font-weight-bold">Faculty</p>
                                        <p> Dean Dana Scully </p>
                                        <p> Professor Natasha Romanoff </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                        Education
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        <p className="font-weight-bold">Faculty</p>
                                        <p> Dean Fox Mulder </p>
                                        <p> Professor Sarah Connor </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                        Medicine
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                        <p className="font-weight-bold">Faculty</p>
                                        <p> Dean Angela Ramonda </p>
                                        <p> Professor Babbage Nelson </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                        Science
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>
                                        <p className="font-weight-bold">Faculty</p>
                                        <p> Dean Mara Jann </p>
                                        <p> Professor Jackie Brown </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="6">
                                        Social Science
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="6">
                                    <Card.Body>
                                        <p className="font-weight-bold">Faculty</p>
                                        <p> Dean Jane Foster </p>
                                        <p> Professor Natalie Emmanuel </p>
                                        <p> Professor Darcy Lewis </p>
                                        <p> Professor Carl Drogo </p>
                                        <p> Professor Clint Barton </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
                <br></br>
                <Row> 
                    <Col sm id="spotlight"> </Col>
                </Row>
                <br></br>
                <Row id="spolightProf" className="">
                    <Col xs={12} sm id="prof1"> </Col>
                    <Col xs={12} sm id="prof2"> </Col>
                    <Col xs={12} sm id="prof3"> </Col>
                </Row>  
            </Container>
            <br></br>
        
            <h1 className="text-center">Faculty Listing</h1>
            {/* <button onClick={alpha}>Alphabetical Order</button>
            <button onClick={reversed}>Reverse alpha</button>
            <button onClick={byTitle}>Sort by title</button>
            <button onClick={byDepartment}>Sort by department</button> */}
            {colleges.map(coll => {
                return (
                <div>
                    <h3>{coll.name}</h3>
                    <FacMap coll={coll} />
                </div>
                )
            })}
        </div>
    )
}

export default Facstaff;