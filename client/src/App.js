import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./Pages/Home";
import Alumni from "./Pages/Alumni";
import Facstaff from "./Pages/Facstaff";
import Students from "./Pages/Students";

function App() {

  return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/alumni" component={Alumni} />
          <Route exact path="/facstaff" component={Facstaff} />
          <Route exact path="/students" component={Students} />
        </div>
      </Router>
  );
}

export default App;
