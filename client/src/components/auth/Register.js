import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classnames from "classnames";


function Register(props) {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ password2, setPassword2 ] = useState("");
    const [ errors, setErrors ] = useState({});
    
        if (props.errors) {
          setErrors({
            errors: props.errors
          });
        }
      

    function changeName(e) {
        setName(e.target.value);
    }

    function changeEmail(e) {
        setEmail(e.target.value);
    }

    function changePassword(e) {
        setPassword(e.target.value);
    }

    function changePasswordTwo(e) {
        setPassword2(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        const newUser = {
            name: name,
            email: email,
            password: password,
            password2: password2
        };
        console.log(newUser);
        props.propsSubmit(newUser);
        props.history.push('/login');
    }

    return (
        <div>
            <div>
                <div>
                    <Link to="/">
                        Back to Home
                    </Link>
                    
                    <div>
                        <h4>
                            <b>Register</b> below
                        </h4>
                        <p>
                            Already have an account?
                            <Link to="/login">Log in</Link>
                        </p>
                    </div>
                    
                    <form noValidate onSubmit={onSubmit}>
                        <div>
                            <input onChange={changeName}
                                value={name}
                                error={errors.name}
                                id="name"
                                type="text"
                            />
                            <label htmlFor="name">Name</label>
                            <span>{errors.name}</span>
                        </div>
                        <div>
                <input
                  onChange={changeEmail}
                  value={email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
                <span>{errors.email}</span>
              </div>
              <div>
                <input
                  onChange={changePassword}
                  value={password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
                <span>{errors.password}</span>
              </div>
              <div>
                <input
                  onChange={changePasswordTwo}
                  value={password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                />
                <label htmlFor="password2">Confirm Password</label>
                <span>{errors.password2}</span>
              </div>
              <div>
                <button
                  type="submit"
                >
                  Sign up
                </button>
              </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Register);