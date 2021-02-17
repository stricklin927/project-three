import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import './App.css';
import axios from 'axios';

import { userContext } from "./utils/userContext";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./Pages/Home";
import Alumni from "./Pages/Alumni";
import Facstaff from "./Pages/Facstaff";
import Students from "./Pages/Students";

function App() {

  let history = useHistory();

  function propsSubmit(newUser) {
    console.log(newUser);
    axios.post("/api/users/register", newUser
    ).then(res => {
      console.log(res);
      localStorage.setItem("user", res.config.data);
      localStorage.setItem("token", res.data.token);
    }).catch(err => console.log(err));
}

  function propsLogin(userData) {
    axios.post("/api/users/login", userData)
    .then(res => {
      console.log(res);
      if (res.data.success === true) {
      history.push('/home');
      } else {
        history.push('/login');
      }
    }).catch(err => console.log(err));
  }

  return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={() => <Register propsSubmit={propsSubmit} />} />
          <Route exact path="/login" component={() => <Login propsLogin={propsLogin} />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/alumni" component={Alumni} />
          <Route exact path="/facstaff" component={Facstaff} />
          <Route exact path="/students" component={Students} />
        </div>
      </Router>
  );
}

export default App;
