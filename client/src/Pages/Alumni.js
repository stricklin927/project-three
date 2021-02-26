import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Alumni() {
    const [ donors, setDonors ] = useState([]);
    const [ name, setName ] = useState("");
    const [ amount, setAmount ] = useState(0);
    // const [ newDonor, setNewDonor ] = useState({
    //   name: "",
    //   amount: 0
    // });

    useEffect(() => {
        axios.get('/api/people/donors').then(res => {
            console.log(res);
            setDonors(res.data);
        })
    }, []);

    function changeName(e) {
        const newName = e.target.value;
        setName(newName);
    }

    function changeAmount(e) {
        const newAmount = e.target.value;
        setAmount(newAmount);
    }

    function onSubmit(e) {
      e.preventDefault();
      console.log(e);
      console.log("Name: " + name);
      console.log("Amount: " + amount);
      // setNewDonor({
      //       name: name,
      //       amount: amount
      //   });
      const newDonor = {
        name: name,
        amount: parseInt(amount)
      };
        console.log(newDonor);
        axios.post('/api/people/donors', newDonor).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }

    return(
        <div>
        <h1>Alumni Page</h1>
        {donors.map(giver => {
            return (
                <div>
                    <p>{giver.name}</p>
                    <p>{giver.amount}</p>
                </div>
            )
        })}
        <form noValidate onSubmit={onSubmit}>
              <div>
                <input
                  onChange={changeName}
                  value={name}
                //   error={errors.email}
                  id="name"
                  type="text"
                />
                <label htmlFor="name">Name</label>
              </div>
              <div>
                <input
                  onChange={changeAmount}
                  value={amount}
                //   error={errors.email}
                  id="amount"
                  type="number"
                />
                <label htmlFor="name">Amount</label>
              </div>
              <div>
                <button
                  type="submit"
                >
                  Give now!
                </button>
              </div>
        </form>
        </div>
    )
}

export default Alumni;