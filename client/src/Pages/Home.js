import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import '../home.css';


// import { useHistory } from 'react-router-dom';

function Home() {
    // const history = useHistory();
    // if (!localStorage.getItem("token")) {
    //     history.push('/login');
    // } else {
    //     console.log("There's a token!");
    // }


    return(
    <div>
        <Jumbotron fluid className="jHome"></Jumbotron>
        <Container>
            <h1>Why ITU? The possibilities and opportunities for a bright future are endless.</h1>
        </Container>

    </div>












    )
}

export default Home;