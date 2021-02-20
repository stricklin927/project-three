import React from "react";
import { Link } from "react-router-dom";

/* import Navbar from 'react-bootstrap/Nav';
import Nav from 'react-bootstrap/Nav'; */
import { Navbar, Nav } from 'react-bootstrap';

import '../../App.css'

function NavbarOne() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">LOGO InfoTech University</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Prospective Students</Nav.Link>
        <Nav.Link href="#pricing">Faculty</Nav.Link>
        <Nav.Link href="#pricing">Alumni</Nav.Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    );
  };

/* function Navbar() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              Navbar
            </Link>
          </div>
        </nav>
      </div>
    );
  } */

export default NavbarOne;