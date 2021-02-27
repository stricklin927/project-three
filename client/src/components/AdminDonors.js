import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../alumni.css';


function AdminDonors(props) {
    const [ donors, setDonors ] = useState([]);
    const [ user, setUser ] = useState({});

    const history = useHistory();

    useEffect(() => {
        axios.get('/api/people/donors').then(res => {
            console.log(res);
            setDonors(res.data);
        })
    }, []);

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

      const onDelete = e => {
          e.preventDefault();
          console.log(e.target);
          const id = e.target.value;
          console.log(id);
          axios.delete(`/api/people/donors/:${id}`).then(res => console.log(res)).catch(err => console.log(err));
      }

    return (
        <div>
            {donors.map(donor => {
                return (
                <div class="card">
                <div class="card-body">
                  <p><strong>{donor.name}</strong>: <em>{donor.amount}</em></p>
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" onClick={onDelete} value={donor._id} className="btn btn-secondary">Delete</button>
                    <button type="button" className="btn btn-secondary">Update</button>
                  </div>
                </div>
              </div>
                )
            })}
        </div>
    )
}

export default AdminDonors;