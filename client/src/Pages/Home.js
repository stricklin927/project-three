import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Jumbotron, Container, Carousel, Row, Col, Card, CardDeck, Button } from 'react-bootstrap';
import '../home.css';
import student from '../images/campus2.jpg';
import faculty from '../images/fac3.jpg';
import alumni from '../images/campus1.jpg';


// import { useHistory } from 'react-router-dom';

function Home() {
    // const history = useHistory();
    // if (!localStorage.getItem("token")) {
    //     history.push('/login');
    // } else {
    //     console.log("There's a token!");
    // }


    return(
    <div>
        <Jumbotron fluid className="jHome"></Jumbotron>
        <Container>
            <h1 className="h1Home"><b>WHY ITU?</b></h1>
            <h4 className="h4Home"><i>The</i> <b>possibilities</b> <i>and</i> <b>opportunities</b> <i>for a bright future are endless.</i></h4>
        </Container>

        <br></br>

        <Container>
            <h2 className="h2Home" id="aboutITU">About ITU</h2>
            <p className="pHome">
                
                ITU is committed to cultivating a safe and inclusive campus community characterized by caring
                and respect for others. This promise extends to you whether you are a student, faculty/staff member,
                or visitor. We pride ourselves not only in our inclusiveness, but also in our vibrancy and vitality
                as a campus. School pride is strong on our campus, so strong, some of our students never leave!
                Indeed, we are quite fond of hiring our students and making them life time members of our staff.
                Many of our students become lifetime givers to our institution as well. Beyond the comradery and inclusion,
                however, what really makes ITU one of the most competitive schools in the nation is our state of the art
                facility and academic programming, with some of the brightest minds in the world as students, graduates and faculty.
            </p>
        </Container>

        <br></br>

        <Container>
        <CardDeck>
                <Card border="light">
                    <Card.Img variant="top" src={student} />
                    <Card.ImgOverlay>
                        <Card.Body className="text-center">
                            <Card.Title className="CTH">100+ Majors</Card.Title>
                            <Link to="/Students"><Button variant="outline-primary">Learn More</Button></Link>
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>

                <Card border="light">
                    <Card.Img variant="top" src={faculty} />
                    <Card.ImgOverlay>
                        <Card.Body className="text-center">
                            <Card.Title className="CTH">Faculty</Card.Title>
                            <Link to="/Facstaff"><Button variant="outline-primary">Meet Them</Button></Link>
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>

                <Card border="light">
                    <Card.Img variant="top" src={alumni} />
                    <Card.ImgOverlay>
                        <Card.Body className="text-center">
                            <Card.Title className="CTH">Show Your Support</Card.Title>
                            <Link to="/Alumni"><Button variant="outline-primary">Give Now</Button></Link>
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>
            </CardDeck>        
        </Container>

        <br/><br/>

        <div className="covidDiv">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="covidText">
                            <h2 className="h2HomeCovid">Keeping ITU Students Safe</h2>
                            <p className="pHomeCovid">
                                Protect yourself and others in our community.
                                We must all take personal responsibilty in order to protect the 
                                health and safety of ourselves and each other.
                                That includes wearing a mask, filling out the daily health screening form, 
                                taking part in the Early Detection Program and receiving the flu vaccine.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="imgCovid"></div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="spotlightDiv" id="spotlightHome">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="imgSpotlight"></div>
                    </Col>
                    <Col>
                        <h2 className="h2HomeSpotlight">Spotlight</h2>
                        <h3 className="h3HomeSpotlight">Women's History Month at ITU</h3>
                        <p className="pHomeSpotlight">
                        InfoTech University is proud to celebrate Women’s History Month. Women were
                        vital to the founding of our country and are essential as we move forward. 
                        The month of March allows us to acknowledge and reflect on these leaders, pioneers,
                        homemakers and trailblazers of US history. The university has performances, films,
                        speaker panels and more coming for March 2021.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>




        <div className="holistic">
            <Container>
                <Row>
                    <Col lg={6} className="pt-4">
                        <div className="holisticText">
                            <h2 className="h2holistic">Holistic Campus Environment</h2>
                            <p className="pHomeHolistic">
                            InfoTech University recognizes that supporting students requires more than offering
                            basic student programs and services. As the years have advanced, we see that supporting
                            the whole student outside of the classroom is a better model for success. It's important
                            to have an intentional focus that meets the students where they are. Our student-centered
                            approach creates an evolving plan that tackles any barriers that interfere with success.
                            </p>
                        </div>
                    </Col>
                    <Col className="pt-4">
                        <div className="holisticImg"></div>
                    </Col>
                </Row>
            </Container>
        </div>



        <div className="collab">
            <Container>
                <Row>
                    <Col lg={6} className="pt-4">
                        <div className="collabImg"></div>
                    </Col>
                    <Col className="pt-4" id="pCollab">
                        <div className="collabText">
                            <h2 className="h2collab">Collaborative Learning</h2>
                            <p className="pHomeCollab">
                            Collaborative learning is a situation in which two or more people learn or attempt to learn
                            something together. This approach actively engages learners to process and create information
                            and concepts, rather than using rote memorization of facts and figures. Learners work with
                            each other on projects, where they must collaborate as a group to understand the concepts being
                            presented to them.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>


        <div className="inst">
            <Container>
                <Row className="pb-5">
                    <Col lg={6} className="pt-4">
                        <div className="instText">
                            <h2 className="h2inst">Small Classroom Instruction</h2>
                            <p className="pHomeInst">
                            Research has shown that students learn faster and perform better in smaller classroom environments.
                            A class size less than 20 students often results in increased individual attention, improved student
                            participation, and better communication between the professor and students. Students receive more
                            feedback from peers and expanded opportunities for hands-on learning than those in large classes. The
                            reduced classroom size permits for better assessment of student work and growth.
                            </p>
                        </div>
                    </Col>
                    <Col className="pt-4">
                        <div className="facInstImg"></div>
                    </Col>
                </Row>
            </Container>
        </div>








    </div>
    )
}

export default Home;