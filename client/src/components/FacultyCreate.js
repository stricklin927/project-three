import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function FacultyCreate() {
    const [ name, setName ] = useState("");
    const [ department, setDepartment ] = useState("");
    const [ office, setOffice ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ title, setTitle ] = useState("");
    const history = useHistory();

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeDept = (e) => {
        setDepartment(e.target.value);
    }
    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changeOffice = (e) => {
        setOffice(e.target.value);
    }

    const changePhone = (e) => {
        setPhone(e.target.value);
    }
    

    const onSubmit = (e) => {
      e.preventDefault();
      const newProf = {
        fullName: name,
        Department: department,
        Title: title,
        OfficeNumber: office,
        PhoneNumber: phone,
        Email: email
      };
        console.log(newProf);
        axios.post(`/api/people/faculty/`, newProf).then(res => {
            //console.log(res);
        }).catch(err => console.log(err));
        history.push('/admin/faculty');
    }

    return (
        <div>
            <h3>Add New Faculty Form</h3>
            <hr />
        <form noValidate onSubmit={onSubmit}>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Full name:</span>
                </div>
                <input onChange={changeName}
                    value={name}  
                    className="form-control"                   
                    id="name"
                    type="text"
                    placeholder="Jane Doe" />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Current title:</span>
                </div>
                <input onChange={changeTitle}
                    value={title}  
                    className="form-control"                   
                    id="title"
                    type="text"
                    placeholder="Associate Professor" />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Current department:</span>
                </div>
                <input onChange={changeDept}
                    value={department}  
                    className="form-control"                   
                    id="department"
                    type="text"
                    placeholder="Underwater Basket Weaving" />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Current office:</span>
                </div>
                <input onChange={changeOffice}
                    value={office}  
                    className="form-control"                   
                    id="office"
                    type="text"
                    placeholder="2100 Lesh Hall" />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Current phone:</span>
                </div>
                <input onChange={changePhone}
                    value={phone}  
                    className="form-control"                   
                    id="phone"
                    type="text"
                    placeholder="555.555.5555" />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Current email:</span>
                </div>
                <input onChange={changeEmail}
                    value={email}  
                    className="form-control"                   
                    id="email"
                    type="text"
                    placeholder="prof@itu.edu" />
            </div>
            <button className="mt-3 btn btn-danger" type="submit">Add New Faculty</button>
        </form>
        </div>
    )
}

export default FacultyCreate;
