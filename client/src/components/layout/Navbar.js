import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

/* import Navbar from 'react-bootstrap/Nav';
import Nav from 'react-bootstrap/Nav'; */
import { Navbar, Nav } from 'react-bootstrap';

import '../../App.css'

function NavbarOne() {
  const [user, setUser] = useState("Visitor");

  useEffect(() => {
  if (localStorage.getItem("user")) {
    console.log("User is here!");
    const userObj = JSON.parse(localStorage.getItem("user"));
      axios.get(`/api/users/get/${userObj.email}`).then(res => {
        console.log("Request made!")
        console.log(res);
        setUser(res.data.name);
      }).catch(err => console.log(err));
  }
}, [user])

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"><img src="/images/ITU4.png" style={{width:"125px", height:"50px"}}></img></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/students">Students</Nav.Link>
        <Nav.Link href="/facstaff">Faculty</Nav.Link>
        <Nav.Link href="/alumni">Alumni</Nav.Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="/login">{user}</a>
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