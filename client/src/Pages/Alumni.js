import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Jumbotron, Container, Form, Row, Column, Col, Button, Card, List, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../alumni.css';
import logo from '../images/ITU4.png';



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
      <Container>
        <Row className="justify-content-center">
          <Col lg={9}>
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
                InfoTech University Foundation
                <br></br>
                1223 Tech Way
                <br></br>
                Detroit, MI 45678
              </p>
            </div>

            <div id="donateNow">
              <h2>Make a Gift Online:</h2>
                <Form>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>Name</Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="First and Last Name" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>AMOUNT</Form.Label>
                    <Col sm={10}>
                      <Form.Control type="password" placeholder="Password" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Form.Check label="Make the amount above a monthly recurring gift." />
                      <Form.Check label="Establish this gift “In Memory” or “In Honor” of an individual(s)." />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm={2}>
                      <Form.Control column sm={2} as="select">
                        <option>In Memory of</option>
                        <option>In Honor of</option>
                      </Form.Control>
                    </Col>
                    <Col sm={10}>
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Button type="submit">Submit</Button>
                    </Col>
                  </Form.Group>
                </Form>
            </div>
          </Col>

          <Col lg={3}>
            <Card className="text-center" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <a href="#donateNow"><Button variant="primary">GIVE NOW</Button></a>
              </Card.Body>
            </Card>


            <ListGroup>
              <ListGroup.Item>
                  {donors.map(giver => {
                      return (
                      <div>
                        <p>{giver.name}
                        <br></br>
                        {giver.amount}</p>
                      </div>
                    )
                })}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>

          


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