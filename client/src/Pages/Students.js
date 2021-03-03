import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MajorsMap from "../components/MajorsMap";
import FacultyCard from "../components/FacultyCard";
import { Jumbotron, Container, Button, ButtonGroup, Row, Col, Card, CardDeck, Table  } from 'react-bootstrap';
import '../students.css';
import lab from '../images/lab.jpg';
import abroad from '../images/abroad.jpg';
import intern from '../images/internship.jpg';




function Students() {
    const [colleges, setColleges] = useState([]);
    const [ displayMajors, setDisplayMajors ] = useState([]);
    const [ majors, setMajors ] = useState([
       "Accounting", 
       "Economics",
       "Finance",
       "Management",
       "Biology",
       "Physics",
       "Quantitative Risk Analytics",
       "Zoology",
       "Computer Science",
       "Data Science",
       "Information Science",
        "Global Health",
        "Nursing",
        "Veterinary Nursing",
        "X-Ray Technician",
        "History",
        "Urban Planning",
        "Youth Development",
        "Journalism",
        "Linguistics",
        "Rhetoric and Writing",
        "Spanish",
        "Theater",
        "Women's and Gender Studies",
        "K-12 Education",
        "Online Teaching"
    ])

    useEffect(() => {
        axios.get('/api/people/colleges').then(res => {
            //console.log(res);
            setColleges(res.data);
        }).catch(err => console.log(err))
    })

    const onClick = (e) => {
        console.log(majors);
        const newMajors = majors.filter(maj => {
            if (e.target.value === maj[0]) {
                return maj;
            }
        })
        setDisplayMajors(newMajors);
        console.log(displayMajors);
    }

    return(
    <div>
        <Jumbotron fluid className="jStudents"></Jumbotron>
        <Container>
            <h1 className="h1Stu"><b>Majors, Colleges, & Beyond</b></h1>
            <h4 className="h4Stu">
                ITU offers more than 100 undergraduate programs meaning more options and more possibilities when you graduate.
            </h4>

            <br></br>

            <h2 className="h2Stu">Choosing a Major</h2>
            <p className="pStu">
                Whether you are undecided on what your major will be or know exactly which major suits you best, our advisors are here to help.
                Students will work directly with their advisors to learn which specific requirements apply to their major so that they stay on track.
                Students are also provided with many opportunities and resources to explore their major options.
            </p>

            <br></br>

            <h2 className="h2Stu">Beyond the Classroom</h2>                
            <CardDeck>
                <Card border="light" style={{ width: '25rem' }}>
                <Card.Img variant="top" src={abroad} />
                    <Card.Body>
                        <Card.Title className="CTStu">Study Abroad</Card.Title>
                        <Card.Text className="CTXStu">
                            Our world is becoming increasingly interconnected, we offer various study abroad programs to help students gain international experience.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card border="light" style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={lab} />
                    <Card.Body>
                        <Card.Title className="CTStu">Research</Card.Title>
                        <Card.Text className="CTXStu">
                            InfoTech University advocates for collaboration and interdisciplinary research initiatives that involve faculty and students.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card border="light" style={{ width: '25rem' }}>
                <Card.Img variant="top" src={intern} />
                <Card.Body>
                        <Card.Title className="CTStu">Intern</Card.Title>
                        <Card.Text className="CTXStu">
                            Many students further their knowledge through one of our internship programs offered in partnership with well-known companies.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
            
        <br></br>

            <h2 className="h2Stu">Explore Majors:</h2>
            <div className="text-center">
            <ButtonGroup>
                <Button variant="outline-secondary" onClick={onClick} value="A">A</Button>
                <Button variant="outline-secondary" onClick={onClick} value="B">B</Button>
                <Button variant="outline-secondary" onClick={onClick} value="C">C</Button>
                <Button variant="outline-secondary" onClick={onClick} value="D">D</Button>
                <Button variant="outline-secondary" onClick={onClick} value="E">E</Button>
                <Button variant="outline-secondary" onClick={onClick} value="F">F</Button>
                <Button variant="outline-secondary" onClick={onClick} value="G">G</Button>
                <Button variant="outline-secondary" onClick={onClick} value="H">H</Button>
                <Button variant="outline-secondary" onClick={onClick} value="I">I</Button>
                <Button variant="outline-secondary" onClick={onClick} value="J">J</Button>
                <Button variant="outline-secondary" onClick={onClick} value="K">K</Button>
                <Button variant="outline-secondary" onClick={onClick} value="L">L</Button>
                <Button variant="outline-secondary" onClick={onClick} value="M">M</Button>
                <Button variant="outline-secondary" onClick={onClick} value="N">N</Button>
                <Button variant="outline-secondary" onClick={onClick} value="O">O</Button>
                <Button variant="outline-secondary" onClick={onClick} value="P">P</Button>
                <Button variant="outline-secondary" onClick={onClick} value="Q">Q</Button>
                <Button variant="outline-secondary" onClick={onClick} value="R">R</Button>
                <Button variant="outline-secondary" onClick={onClick} value="S">S</Button>
                <Button variant="outline-secondary" onClick={onClick} value="T">T</Button>
                <Button variant="outline-secondary" onClick={onClick} value="U">U</Button>
                <Button variant="outline-secondary" onClick={onClick} value="V">V</Button>
                <Button variant="outline-secondary" onClick={onClick} value="W">W</Button>
                <Button variant="outline-secondary" onClick={onClick} value="X">X</Button>
                <Button variant="outline-secondary" onClick={onClick} value="Y">Y</Button>
                <Button variant="outline-secondary" onClick={onClick} value="Z">Z</Button>
            </ButtonGroup>

            {displayMajors.map(maj => {
                return (
                    <h4 className="h4Stu">{maj}</h4>
                )
            })}
        </div>

            <br></br>

        <div>

            <h2 className="h2Stu">Explore Majors by Department</h2>
            {colleges.map(coll => {
                return (
                <Table>
                    <thead>
                        <tr>
                        <th>Major</th>
                        <th>College</th>
                        <th>Staff</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><MajorsMap coll={coll} /></td>
                            <td>{coll.name}</td>
                            <td><FacultyCard coll={coll} /></td>
                        </tr>
                    </tbody>
                </Table>
                )
            })}

        </div>
        </Container>
    </div>
    )
}

export default Students;