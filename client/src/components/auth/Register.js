import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';



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
                  <div className="text-center">
                      <h4 >
                          <b>Register</b> below!
                      </h4>
                      <p>
                          Already have an account?
                          <Link to="/login"> Log in</Link>.
                      </p>
                  </div>
                  
                  <div className="container-fluid bg-secondary mx-auto" style={{ width: "50%", height: " 400px"}}>
                    <form noValidate onSubmit={onSubmit}>
                      <div>
                        <label htmlFor="name" className="pt-2 font-weight-bold">Name</label>
                        <br></br>
                        <input className="form-control"
                          onChange={changeName}
                          value={name}
                          error={errors.name}
                          id="name"
                          type="text"
                        />
                        <span>{errors.name}</span>
                      </div>
                      <div>
                        <label htmlFor="email" className="pt-2 font-weight-bold">Email</label>
                        <br></br>
                        <input className="form-control"
                          onChange={changeEmail}
                          value={email}
                          error={errors.email}
                          id="email"
                          type="email"
                        />
                        <span>{errors.email}</span>
                      </div>
                      <div>
                        <label htmlFor="password" className="pt-2 font-weight-bold">Password</label>
                        <br></br>
                        <input className="form-control"
                          onChange={changePassword}
                          value={password}
                          id="password"
                          type="password"
                        />
                        <span>{errors.password}</span>
                      </div>
                      <div>
                        <label htmlFor="password2" className="pt-2 font-weight-bold">Confirm Password</label>
                        <br></br>
                        <input className="form-control"
                          onChange={changePasswordTwo}
                          value={password2}
                          error={errors.password2}
                          id="password2"
                          type="password"
                        />
                        <span>{errors.password2}</span>
                      </div>
                      <br></br>
                      <div>
                        <button className="btn btn-primary btn-block mb-5"
                          type="submit"
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                  <br></br>
                  <br></br>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Register);