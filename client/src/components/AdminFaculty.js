import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../alumni.css';


function AdminFaculty(props) {
    const [ profs, setProfs ] = useState([]);
    const [ user, setUser ] = useState({});

    const history = useHistory();

    useEffect(() => {
        axios.get('/api/people/faculty').then(res => {
            setProfs(res.data);
        })
    }, []);

    useEffect(() => {
        if (localStorage.getItem("user")) {
          const userObj = JSON.parse(localStorage.getItem("user"));
            axios.get(`/api/users/get/${userObj.email}`).then(res => {
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

      const onDelete = e => {
          e.preventDefault();
          const id = e.target.value;
          const url = `/api/people/faculty/${id}`;
          axios.delete(url).then(res => console.log(res)).then(() => history.push('/admin/faculty')).catch(err => console.log(err))
      }

      const onUpdate = e => {
          e.preventDefault();
          const val = e.target.value;
          console.log(val);
          history.push(`/admin/faculty/${val}`);
      }

    return (
        <div>
            {profs.map(prof => {
                return (
                <div class="card">
                <div class="card-body">
                  <p><strong>{prof.title} {prof.fullName}</strong></p>
                  <p>Department: {prof.Department}</p>
                  <p>Office Number: {prof.OfficeNumber}</p>
                  <p>Phone: {prof.PhoneNumber}</p>
                  <p>Email: {prof.Email}</p>
                  <div className="btn-group" role="group" aria-label="Update and Delete Buttons">
                    <button type="button" onClick={() => history.push("/admin/new-faculty/create")} className="btn btn-secondary">Create</button>
                    <button type="button" onClick={onDelete} value={prof._id} className="btn btn-secondary">Delete</button>
                    <button type="button" value={prof._id} onClick={onUpdate} className="btn btn-secondary">Update</button>
                  </div>
                </div>
              </div>
                )
            })}
        </div>
    )
}

export default AdminFaculty;