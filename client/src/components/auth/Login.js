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
            <Link to="/">
              Back to
              home
            </Link>
            <div>
              <h4>
                <b>Login</b> below
              </h4>
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={onSubmit}>
              <div>
                <input
                  onChange={changeEmail}
                  value={email}
                //   error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input
                  onChange={changePassword}
                  value={password}
                //   error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div>
                <button
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default withRouter(Login);