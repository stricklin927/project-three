import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <h4>Connect with Us</h4>
                </Row>
                <Row>
                    <Col>LOGO IMG</Col>
                    <Col>
                        <h5>More</h5>
                        <ul>
                            <li>About ITU</li>
                            <li>Prospective Students</li>
                            <li>Find Faculty and Staff</li>
                            <li>Give</li>
                            <li>Spotlight</li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>Student Resources</h5>
                        <ul>
                            <li>Majors</li>
                            <li>Departments</li>
                            <li>Meet the Staff</li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>Contact Us</h5>
                        <h6>Phone Number</h6>
                            <p>(555)123-4567</p>
                        <h6>Address</h6>
                            <p>1223 Tech Way</p>
                            <p>Detroit, MI 45678</p>
                    </Col>
                </Row>
                <Row>
                    <p> &copy; 2021 InfoTech University </p>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;
/* export default withRouter(Footer); */