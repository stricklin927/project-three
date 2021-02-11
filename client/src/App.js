import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import axios from 'axios';
import './App.css';

import { Provider } from "react-redux";
//import store from "./store";
import routes from "./Config/routes";
import { AuthProvider } from "./Context";
import AppRoute from './components/AppRoutes';

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {

  // function registerUser(data) {
  //   axios.post("/api/users/register", data).then(res => console.log(res),
  //       err => console.log(err));
  // }

  return (
    // <AuthProvider>
    //   <Router>
    //     <Switch>
    //       {routes.map((route) => {
    //         return (<AppRoute exact key={route.path} 
    //                 path={route.path}
    //                 component={route.component}
    //                 isPrivate={route.isPrivate}
    //         /> 
    //         )
    //       })}
    //     </Switch>
    //   </Router>
    // </AuthProvider>


      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
  );
}

export default App;
