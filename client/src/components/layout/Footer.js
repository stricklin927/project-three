import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
    return (
        <div className="footer">
            <Row>
                <Col>Connect with Us</Col>
            </Row>
            <Row>
                <Col>LOGO</Col>
                <Col>More</Col>
                <Col>Student Resources</Col>
                <Col>Contact Us</Col>

            </Row>
        </div>
    )
}

export default Footer;
/* export default withRouter(Footer); */