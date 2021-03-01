import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Jumbotron, Container, Carousel, Row, Col, Card, CardDeck, Button } from 'react-bootstrap';
import '../home.css';
import student from '../images/campus2.jpg';
import faculty from '../images/faculty.jpg';
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
                Paragraph about why ITU is the best university and why prospective students should come here.
                <br></br>
                Pug taxidermy listicle mustache twee health goth neutra pabst. Austin tousled truffaut
                butcher jianbing food truck.Taiyaki thundercats cornhole single-origin coffee chia kale chips 
                affogato pour-over cloud bread irony man bun. Etsy adaptogen typewriter, locavore polaroid raw 
                denim synth narwhal bicycle rights bespoke lyft. Farm-to-table stumptown paleo vexillologist
                PBRB kale chips seitan.
            </p>
        </Container>

        <br></br>

        <Container>
        <CardDeck>
                <Card border="light" style={{ width: '25rem' }}>
                <Card.Img variant="top" src={student} />
                <Card.ImgOverlay>
                    <Card.Body className="text-center">
                        <Card.Title className="CTH">100+ Majors</Card.Title>
                        <Link to="/Students"><Button variant="outline-primary">Learn More</Button></Link>
                    </Card.Body>
                </Card.ImgOverlay>
                </Card>

                <Card border="light" style={{ width: '25rem' }}>
                <Card.Img variant="top" src={faculty} />
                <Card.ImgOverlay>
                    <Card.Body className="text-center">
                        <Card.Title className="CTH">Faculty</Card.Title>
                        <Link to="/Facstaff"><Button variant="outline-primary">Meet Them</Button></Link>
                    </Card.Body>
                 </Card.ImgOverlay>
                </Card>

                <Card border="light" style={{ width: '25rem' }}>
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
                        <h3 className="h3HomeSpotlight">Honoring Black History at ITU</h3>
                        <p className="pHomeSpotlight">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper odio nec lacus facilisis, 
                            non vulputate lacus convallis. Aliquam sagittis mi ligula, et viverra justo lobortis nec. 
                            Duis elementum tincidunt magna, mattis ornare odio placerat ac. Sed vitae lectus nec ex fermentum 
                            ornare ut sit amet nibh. Nam non nulla eu ligula pharetra maximus. Sed nisl massa, viverra id volutpat 
                            ut, pellentesque et tellus. Nunc a justo ex. Etiam sollicitudin placerat consectetur. 
                            Donec vehicula id augue ac aliquam. Curabitur malesuada felis eu gravida gravida. Morbi viverra metus et 
                            enim sollicitudin, ut posuere magna posuere. Praesent eu convallis enim. Ut auctor nibh arcu, eu vehicula 
                            tortor venenatis ut.
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
                    <Col className="pt-4">
                        <div className="collabImg"></div>
                    </Col>
                    <Col lg={6} className="pt-4">
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
                <Row>
                    <Col lg={6} className="pt-4">
                        <div className="instText">
                            <h2 className="h2inst">Small Classroom Instruction</h2>
                            <p className="pHomeInst">
                            Nam non nulla eu ligula pharetra maximus. Sed nisl massa, viverra id volutpat 
                            ut, pellentesque et tellus. Nunc a justo ex. Etiam sollicitudin placerat consectetur. 
                            Donec vehicula id augue ac aliquam. Curabitur malesuada felis eu gravida gravida. Morbi viverra metus et 
                            enim sollicitudin, ut posuere magna posuere. Praesent eu convallis enim. Ut auctor nibh arcu, eu vehicula 
                            tortor venenatis ut.
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