import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Footer.css';


function Footer() {
    return (
        <footer>
            <Container>
                <Row className="justify-content-lg-center">
                    <h2 className="connect">Connect with Us!</h2>
                </Row>
                <br></br>
                <br></br>
                <Row className="justify-content-lg-center">
                    <Col className="col-4">
                        <img src="/images/ITU4.png" className="pt-3 mr-5" style={{width:"250px", height:"108px"}}></img>
                    </Col>
                    <Col className="col-3 border-right">
                        <h5>More</h5>
                        <h6>About ITU</h6>
                        <h6>Prospective Students</h6>
                        <h6>Find Faculty and Staff</h6>
                        <h6>Give</h6>
                        <h6>Spotlight</h6>
                    </Col>
                    <Col className="col-3 border-right">
                        <h5>Student Resources</h5>
                        <h6>Majors</h6>
                        <h6>Departments</h6>
                        <h6>Meet the Staff</h6>
                    </Col>
                    <Col className="col-2">
                        <h5>Phone</h5>
                        <p>(555)123-4567</p>
                        <h5>Address</h5>
                        <p>1223 Tech Way
                            <br></br>
                            Detroit, MI 45678</p>
                    </Col>
                </Row>  
            </Container>
            <hr></hr>
            <br></br>
            <Container>
                <Row className="justify-content-lg-center">
                    <p className="eo">
                        InfoTech University is committed to a policy of nondiscrimination and equal opportunity for all persons regardless of race, gender, color, religion, creed, national origin or ancestry, age, marital status, disability or veteran status.
                    </p>
                    <br></br>
                    <p className="copyright">&copy; 2021 InfoTech University</p>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
/* export default withRouter(Footer); */