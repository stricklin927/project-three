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
      console.log(e);
      console.log("Name: " + name);
      console.log("Amount: " + amount);
      const newDonor = {
        name: name,
        amount: parseInt(amount)
      };
        console.log(newDonor);
        axios.put(`/api/people/donors/${id}`, newDonor).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
        history.push('/admin/donors');
    }

    return (
        <div className="m-5">
            <form noValidate onSubmit={onSubmit}>
            <p>ID: {id}</p>
            <p>Name: {donor.name}</p>
            <input onChange={changeName}
                value={name}                     
                id="name"
                type="text"
                placeholder={donor.name} />
            <p>Amount: {donor.amount}</p>
            <input onChange={changeAmount}
                value={amount}
                id="amount"
                type="number"
                placeholder={donor.amount}
                />
                <br />
            <button className="mt-3" type="submit">Update</button>
            </form>
        </div>
    )
}

export default SingleDonor;