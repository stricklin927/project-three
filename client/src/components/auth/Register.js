import React, { useState } from 'react';
import axios from "axios";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
//import { connect } from 'react-redux';
//import { useReducer } from "redux";
//import { registerUser } from "../../actions/authActions";
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
        }
        console.log(newUser);
        axios.post("http://localhost:3001/api/users/register", newUser
        //https://landingpageuniversity.herokuapp.com/
        // {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Accept': "*/*",
        //     'Access-Control-Allow-Origin': '*',
        //   },
        //   body: newUser 
        // }
        ).then(res => console.log(res),
        err => console.log(err));
        //props.registerUser(newUser, props.history);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col s8 offset-s2">
                    <Link to="/" className="btn-flat waves-effect">
                        <i className="material-icons left">keyboard_backspace</i>
                        Back to Home
                    </Link>
                    
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <h4>
                            <b>Register</b> below
                        </h4>
                        <p className="gray-text text-darken-1">
                            Already have an account?
                            <Link to="/login">Log in</Link>
                        </p>
                    </div>
                    
                    <form noValidate onSubmit={onSubmit}>
                        <div className="input-field col s12">
                            <input onChange={changeName}
                                value={name}
                                error={errors.name}
                                id="name"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.name
                                  })}
                            />
                            <label htmlFor="name">Name</label>
                            <span className="red-text">{errors.name}</span>
                        </div>
                        <div className="input-field col s12">
                <input
                  onChange={changeEmail}
                  value={email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={changePassword}
                  value={password}
                  //error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={changePasswordTwo}
                  value={password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
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


// Register.propTypes = {
//     registerUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//     auth: state.auth,
//     errors: state.errors
// })

// export default connect(
//     mapStateToProps,
//     { registerUser }
// )(withRouter(Register));

export default Register;