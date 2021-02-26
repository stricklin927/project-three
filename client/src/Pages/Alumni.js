import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Jumbotron, Container, Form } from 'react-bootstrap';
import '../alumni.css';



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
      <div className="jumbotron jumbotron-fluid"></div>
      <div className="container">
        <div>
          <h1 className="difference">Make a DIFFERENCE by GIVING to ITU</h1>
          <h2>Support InfoTech Students</h2>
          <p>
          Gifts to the ITU Fund provide undergraduate scholarships and financial aid for ITU students who need our help. 
          Gifts will help support students who are challenged with accessing basic necessities such as housing, food, medical 
          care or required technology resources required to ensure reliable connectivity for remote education.
          </p>
        </div>

        <div>
          <h4>You can make a difference for ITU students. Your generosity can change a life!</h4>
        </div>

        <div>
          <h2>Make a Gift by Mail:</h2>
          <p>*Please make all checks payable to InfoTech University Fund and mail to:</p>
          <p>
            1223 Tech Way
            <br></br>
            Detroit, MI 45678
          </p>
        </div>

        <div>
          <h2>Make a Gift Online:</h2>
          <p> ADD FORM </p>
        </div>
      </div>

          
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