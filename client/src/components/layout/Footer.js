import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../images/ITU4.png';
import '../../Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <footer>
            <Container>
                <Row className="justify-content-center">
                    <h2 className="connect">Connect with Us</h2>
                </Row>
                <Row className="justify-content-center">
                    <h2 className="connect">
                        <a href="https://www.facebook.com/"><i className="fab fa-facebook-square"></i></a> <a href="https://www.twitter.com/"><i className="fab fa-twitter-square"></i></a> <a href="https://www.instagram.com/"><i className="fab fa-instagram-square"></i></a> <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                    </h2>
                </Row>
                <br></br>
                <br></br>
                <Row className="justify-content-center">
                    <Col md={12} lg={4}>
                        <Link to="/Home"><img src={logo} className="pt-3 mr-5" style={{width:"250px", height:"108px"}}></img></Link>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} className="border-right">
                        <h5>More</h5>
                        <h6><Link to="/Home">About ITU</Link></h6>
                        <h6><Link to="/Students">Prospective Students</Link></h6>
                        <h6><Link to="/Facstaff">Find Faculty and Staff</Link></h6>
                        <h6><Link to="/Alumni">Give</Link></h6>
                        <h6><Link to="/Home">Spotlight</Link></h6>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} className="border-right">
                        <h5>Student Resources</h5>
                        <h6><Link to="/Students">Majors</Link></h6>
                        <h6><Link to="/Students">Departments</Link></h6>
                        <h6><Link to="/Facstaff">Meet the Staff</Link></h6>
                    </Col>
                    <Col sm={12} md={4} lg={2}>
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
                <Row className="justify-content-center">
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