import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function SingleDonor() {
    const [ donor, setDonor ] = useState({});
    const [ name, setName ] = useState("");
    const [ amount, setAmount ] = useState(0);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`/api/people/donors/${id}`).then(res => {
            setDonor(res.data);
        }).catch(err => console.log(err))
    }, [])

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeAmount = e => {
        setAmount(e.target.value);
    }

    const onSubmit = (e) => {
      e.preventDefault();
      const newDonor = {
        name: name,
        amount: parseInt(amount)
      };
        axios.put(`/api/people/donors/${id}`, newDonor).then(res => {
            //console.log(res);
        }).catch(err => console.log(err));
        history.push('/admin/donors');
    }

    return (
        <div className="m-5">
            <form noValidate onSubmit={onSubmit}>
            <h3 className="mb-3">UPDATE FORM</h3>
            <hr />
            <h4 className="mb-4">Update record ID: <span className="badge badge-warning">{id}</span></h4>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Current name: {donor.name}</span>
                </div>
                <input onChange={changeName}
                    value={name}  
                    className="form-control"                   
                    id="name"
                    type="text"
                    placeholder={donor.name} />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Current amount: ${donor.amount}</span>
                </div>
                <input onChange={changeAmount}
                    value={amount}  
                    className="form-control"                   
                    id="amount"
                    type="number"
                    placeholder={donor.amount} />
            </div>
            <button className="mt-3 btn btn-danger" type="submit">Update</button>
            </form>
        </div>
    )
}

export default SingleDonor;