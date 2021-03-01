import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function SingleFaculty() {
    const [ prof, setProf ] = useState({});
    const [ name, setName ] = useState("");
    const [ department, setDepartment ] = useState("");
    const [ office, setOffice ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ title, setTitle ] = useState("");
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`/api/people/faculty/${id}`).then(res => {
            console.log(res.data);
            setProf(res.data);
            setName(prof.fullName);
            setDepartment(prof.Department);
            setOffice(prof.OfficeNumber);
            setPhone(prof.PhoneNumber);
            setEmail(prof.Email);
            setTitle(prof.Title);
        }).catch(err => console.log(err))
    }, [])

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
        axios.put(`/api/people/faculty/${id}`, newProf).then(res => {
        }).catch(err => console.log(err));
        history.push('/admin/faculty');
    }

    return (
        <div className="m-5">
            <form noValidate onSubmit={onSubmit}>
            <h3 className="mb-3">UPDATE FORM</h3>
            <hr />
            <h4 className="mb-4">Update record ID: <span className="badge badge-warning">{id}</span></h4>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Current name: {prof.fullName}</span>
                </div>
                <input onChange={changeName}
                    value={name}  
                    className="form-control"                   
                    id="name"
                    type="text"
                    placeholder={prof.fullName} />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Current title: {prof.Title}</span>
                </div>
                <input onChange={changeTitle}
                    value={title}  
                    className="form-control"                   
                    id="title"
                    type="text"
                    placeholder={prof.Title} />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Current department: {prof.Department}</span>
                </div>
                <input onChange={changeDept}
                    value={department}  
                    className="form-control"                   
                    id="department"
                    type="text"
                    placeholder={prof.Department} />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Current office: {prof.OfficeNumber}</span>
                </div>
                <input onChange={changeOffice}
                    value={office}  
                    className="form-control"                   
                    id="office"
                    type="text"
                    placeholder={prof.OfficeNumber} />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Current phone: {prof.PhoneNumber}</span>
                </div>
                <input onChange={changePhone}
                    value={phone}  
                    className="form-control"                   
                    id="phone"
                    type="text"
                    placeholder={prof.PhoneNumber} />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Current email: {prof.Email}</span>
                </div>
                <input onChange={changeEmail}
                    value={email}  
                    className="form-control"                   
                    id="email"
                    type="text"
                    placeholder={prof.Email} />
            </div>
            <button className="mt-3 btn btn-danger" type="submit">Update</button>
            </form>
        </div>
    )
}

export default SingleFaculty;