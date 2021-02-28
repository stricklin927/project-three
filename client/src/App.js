import React from 'react';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import './App.css';
import axios from 'axios';

import NavbarOne from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./Pages/Home";
import Alumni from "./Pages/Alumni";
import Facstaff from "./Pages/Facstaff";
import Students from "./Pages/Students";
import Admin from "./Pages/Admin";
import AdminDonors from "./components/AdminDonors";
import SingleDonor from './components/SingleDonor';
import AdminFaculty from './components/AdminFaculty';
import SingleFaculty from './components/SingleFaculty';
import FacultyCreate from './components/FacultyCreate';

function App() {

  let history = useHistory();

  function propsSubmit(newUser) {
    console.log(newUser);
    axios.post("/api/users/register", newUser
    ).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
}

  function propsLogin(userData) {
    axios.post("/api/users/login", userData)
    .then(res => {
      console.log(res);
      localStorage.setItem("user", res.config.data);
      console.log("User set!");
      localStorage.setItem("token", res.data.token);
      console.log("Token set!");
    }).catch(err => console.log(err));
  }

  return (
      <Router>
        <div className="App">
          <NavbarOne />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={() => <Register propsSubmit={propsSubmit} />} />
          <Route path="/login" component={() => <Login propsLogin={propsLogin} history={history} />} />
          <Route path="/home" component={Home} />
          <Route exact path="/alumni" component={Alumni} />
          <Route exact path="/facstaff" component={Facstaff} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/admin" component={() => <Admin history={history} />} />
          <Route exact path="/admin/donors" component={() => <AdminDonors history={history} />} />
          <Route exact path="/admin/faculty" component={AdminFaculty} />
          <Route path='/admin/donors/:id' component={SingleDonor} />
          <Route path='/admin/faculty/:id' component={SingleFaculty} />
          <Route exact path ='/admin/faculty/create' component={FacultyCreate} />
          <Footer />
        </div>
      </Router>
  );
}

export default App;
