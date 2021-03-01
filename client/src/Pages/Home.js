import React from 'react';
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
                        <Button variant="outline-primary">Learn More</Button>
                    </Card.Body>
                </Card.ImgOverlay>
                </Card>

                <Card border="light" style={{ width: '25rem' }}>
                <Card.Img variant="top" src={faculty} />
                <Card.ImgOverlay>
                    <Card.Body className="text-center">
                        <Card.Title className="CTH">Faculty</Card.Title>
                        <Button variant="outline-primary">Meet Them</Button>
                    </Card.Body>
                 </Card.ImgOverlay>
                </Card>

                <Card border="light" style={{ width: '25rem' }}>
                <Card.Img variant="top" src={alumni} />
                <Card.ImgOverlay>
                    <Card.Body className="text-center">
                        <Card.Title className="CTH">Show Your Support</Card.Title>
                        <Button variant="outline-primary">Give Now</Button>
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




        <div className="somethingDiv">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="somethingText">
                            <h2 className="h2Something">Title of Section</h2>
                            <p className="pHomeSomething">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper odio nec lacus facilisis, 
                                non vulputate lacus convallis. Aliquam sagittis mi ligula, et viverra justo lobortis nec. 
                                Duis elementum tincidunt magna, mattis ornare odio placerat ac. Sed vitae lectus nec ex fermentum 
                                ornare ut sit amet nibh. 
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h1>IMAGE HERE</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>















    </div>
    )
}

export default Home;