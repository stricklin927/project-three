import React, { useState, useEffect } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import axios from "axios";

function Admin(props) {
    const [user, setUser] = useState({});
    const history = useHistory();
  

    useEffect(() => {
    if (localStorage.getItem("user")) {
      const userObj = JSON.parse(localStorage.getItem("user"));
        axios.get(`/api/users/get/${userObj.email}`).then(res => {
          if (res.data.role === "Customer") {
              setUser(res.data);
              //props.history.push('/home');
          } else if (res.data.role === "Admin") {
          setUser(res.data);
          }
        }).catch(err => console.log(err));
    } else if (!localStorage.getItem("user")) {
      history.push('/home');
    }
  }, [])

  if (user.role === "Customer") {
    history.push('/home');
  }

  return (
      <div>
        <h1>Admin Pages</h1>
        <p>Hello {user.name}! You role is {user.role}. Your email is {user.email}. Welcome!</p>
        {/* <p><strong>NOTE:</strong> The admin section of the project was a reach goal. 
          As such, the section is not at present totally complete. 
          At this moment, only the complete functionality has been built out for the donor section.
          The faculty admin section has complete CRUD capability but calls to an outdated DB, 
          so changes will not update what displays on main pages. 
          The admin majors page only gets the info from the DB, but cannot yet update, delete, or create at this time. 
          That being said, the donors admin page has full CRUD functionality.</p> */}
        <hr />
        <button type="button" className="btn btn-primary btn-block" onClick={() => history.push('/admin/donors')}>Admin Donors</button>
        <button type="button" className="btn btn-primary btn-block" onClick={() => history.push('/admin/faculty')}>Admin Faculty</button>
        <button type="button" className="btn btn-primary btn-block mb-5" onClick={() => history.push('/admin/majors')}>Admin Majors</button>       
      </div>
  )
}

 
export default withRouter(Admin); 