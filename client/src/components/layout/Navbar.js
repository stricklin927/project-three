import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/ITU4.png';
import '../../navbar.css';

function NavbarOne() {
  const [user, setUser] = useState("Visitor");

  useEffect(() => {
  if (localStorage.getItem("user")) {
    //console.log("User is here!");
    const userObj = JSON.parse(localStorage.getItem("user"));
      axios.get(`/api/users/get/${userObj.email}`).then(res => {
        //console.log("Request made!")
        //console.log(res);
        setUser(res.data.name);
      }).catch(err => console.log(err));
  }
}, [])

  const logout = () => {
    localStorage.setItem("user", "");
    localStorage.setItem("token", "");
    setUser("Visitor");
  }

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand><Link to="/Home"><img src={logo} style={{width:"230px", height:"90px"}}></img></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/students">Students</Nav.Link>
          <Nav.Link href="/facstaff">Faculty</Nav.Link>
          <Nav.Link href="/alumni">Alumni</Nav.Link>
        </Nav>
        <button className="btn btn-info mr-3" onClick={logout}>Logout</button>
        <Navbar.Text>
            Signed in as: <a href="/login">{user}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    );
  };

export default NavbarOne;