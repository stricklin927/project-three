import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";

function Login(props) {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    function changeEmail(e) {
        setEmail(e.target.value);
    }

    function changePassword(e) {
        setPassword(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        }
        console.log(userData);
        props.propsLogin(userData);
        props.history.push('/home');
    };
    

    return (
        <div>
        <div>
          <div>
            <div>
              <h4 className="text-center p-4">
                Enter your <b>Login</b> Email and Password 
              </h4>
            </div>
            <div className="container bg-secondary mx-auto" style={{ width: "50%" }}>
              <form noValidate onSubmit={onSubmit}>
                <div className="input-group py-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text material-icons" id="inputGroup-sizing-default"> account_box </span>
                  </div>
                  <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                    onChange={changeEmail}
                    value={email}
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="input-group pb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text material-icons" id="inputGroup-sizing-default"> vpn_key </span>
                  </div>
                  <input className="form-control "
                    onChange={changePassword}
                    value={password}
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                  
                </div>
                <div className="justify-content-center pb-4">
                  <button className="btn btn-primary btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <br></br>
            <p className="text-center">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
          </div>
        </div>
      </div>
    )
}

export default withRouter(Login);