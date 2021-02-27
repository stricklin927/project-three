import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MajorsMap from "../components/MajorsMap";
import FacultyCard from "../components/FacultyCard";
import { Jumbotron, Container, Button, ButtonGroup, Row, Col, Card  } from 'react-bootstrap';
import '../students.css';
import lab from '../images/lab.jpg';
import abroad from '../images/abroad.jpg';
import intern from '../images/internship.jpg';




function Students() {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        axios.get('/api/people/colleges').then(res => {
            //console.log(res);
            setColleges(res.data);
        })
    })

    return(
    <div>
        <Jumbotron fluid className="jStudents"></Jumbotron>
        <Container>
            <h1>Majors & Colleges</h1>
            <p>
                ITU offers more than 100 undergraduate programs meaning more options and more possibilities when you graduate.
            </p>

            <h2>Choosing a Major</h2>
            <p>
                Whether you are undecided on what your major will be or know exactly which major suits you best, our advisors are here to help.
                Students will work directly with their advisors to learn which specific requirements apply to their major so that they stay on track.
                Students are also provided with many opportunities and resources to explore their major options.
            </p>

            <h2>Beyond the Classroom</h2>
            <p>
                ITU advocates for collaboration and interdisciplinary research initiatives that involve faculty and students.
                Many students further their knowledge through one of our internship programs offered in partnership with well-known companies.
                Our world id becoming increasingly interconnected, we offer various study abroad programs to help students gain international experience.
            </p>

            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header className="text-center">Research</Card.Header>
                        <Card.Img variant="top" src={lab} />
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header className="text-center">Study Abroad</Card.Header>
                        <Card.Img variant="top" src={abroad} />
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header className="text-center">Intern</Card.Header>
                        <Card.Img variant="top" src={intern} />
                    </Card>
                </Col>
            </Row>









        </Container>
            


        <div className="text-center">
            <h2>Explore Majors:</h2>
            <ButtonGroup>
                <Button variant="outline-secondary">A</Button>
                <Button variant="outline-secondary">B</Button>
                <Button variant="outline-secondary">C</Button>
                <Button variant="outline-secondary">D</Button>
                <Button variant="outline-secondary">E</Button>
                <Button variant="outline-secondary">F</Button>
                <Button variant="outline-secondary">G</Button>
                <Button variant="outline-secondary">H</Button>
                <Button variant="outline-secondary">I</Button>
                <Button variant="outline-secondary">J</Button>
                <Button variant="outline-secondary">K</Button>
                <Button variant="outline-secondary">L</Button>
                <Button variant="outline-secondary">M</Button>
                <Button variant="outline-secondary">N</Button>
                <Button variant="outline-secondary">O</Button>
                <Button variant="outline-secondary">P</Button>
                <Button variant="outline-secondary">Q</Button>
                <Button variant="outline-secondary">R</Button>
                <Button variant="outline-secondary">S</Button>
                <Button variant="outline-secondary">T</Button>
                <Button variant="outline-secondary">U</Button>
                <Button variant="outline-secondary">V</Button>
                <Button variant="outline-secondary">W</Button>
                <Button variant="outline-secondary">X</Button>
                <Button variant="outline-secondary">Y</Button>
                <Button variant="outline-secondary">Z</Button>
            </ButtonGroup>

            {colleges.map(coll => {
                return (
                <div>
                <h2>{coll.name}</h2>
                <FacultyCard coll={coll} />
                <MajorsMap coll={coll} />
                </div>
                )
            })}
        </div>
    </div>
    )
}

export default Students;