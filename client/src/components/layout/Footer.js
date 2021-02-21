import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
    return (
        <footer className="footer bg-dark"
            style={{
                position: "absolute",
                bottom: "0px",
                width: "100%",
            }} >
            <Container>
                <Row>
                    <h4 className="text-light pt-3 pb-2 ml-4">Connect with Us!</h4>
                </Row>
                <Row>
                    <Col><img src="/images/ITU4.png" className="pt-3 mr-5" style={{width:"250px", height:"108px"}}></img></Col>
                    <Col className="text-light border-right">
                        <h5 className="font-weight-bold">More</h5>
                        <ul>
                            <li>About ITU</li>
                            <li>Prospective Students</li>
                            <li>Find Faculty and Staff</li>
                            <li>Give</li>
                            <li>Spotlight</li>
                        </ul>
                    </Col>
                    <Col className="text-light border-right">
                        <h5 className="font-weight-bold">Student Resources</h5>
                        <ul>
                            <li>Majors</li>
                            <li>Departments</li>
                            <li>Meet the Staff</li>
                        </ul>
                    </Col>
                    <Col className="text-light">
                        <h5 className="font-weight-bold">Contact Us</h5>
                        <ul>
                            <li>Phone Number</li>
                                <p>(555)123-4567</p>
                            <li>Address</li>
                                <p>1223 Tech Way,
                                <br></br>
                                Detroit, MI 45678
                                </p>
                                
                        </ul>
                    </Col>
                </Row>  
            </Container>
            <hr className="bg-light"></hr>
                <Row className="justify-content-center">
                    <p className="text-light"> &copy; 2021 InfoTech University </p>
                </Row>
        </footer>
    )
}

export default Footer;
/* export default withRouter(Footer); */