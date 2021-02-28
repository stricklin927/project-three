import React, { useState, useEffect } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import axios from "axios";

function Admin(props) {
    const [user, setUser] = useState({});
    const history = useHistory();
  
    useEffect(() => {
    if (localStorage.getItem("user")) {
      //console.log("User is here!");
      const userObj = JSON.parse(localStorage.getItem("user"));
        axios.get(`/api/users/get/${userObj.email}`).then(res => {
          //console.log(res);
          if (res.data.role === "Customer") {
              history.push('/home');
          } else if (res.data.role === "Admin") {
          setUser(res.data);
          }
        }).catch(err => console.log(err));
    } else if (!localStorage.getItem("user")) {
      history.push('/home');
    }
  }, [])

  return (
      <div>
        <h1>Admin Pages</h1>
        <p>Hello {user.name}! You role is {user.role}. Your email is {user.email}. Welcome!</p>
        <button type="button" className="btn btn-primary btn-block" onClick={() => history.push('/admin/donors')}>Admin Donors</button>
        <button type="button" className="btn btn-primary btn-block" onClick={() => history.push('/admin/donors')}>Faculty Admin</button>
        {/* <button type="button" className="btn btn-primary btn-block mb-5"><Link to="/admin/majors">Majors Admin</Link></button>        */}
      </div>
  )
}

 
export default withRouter(Admin); 