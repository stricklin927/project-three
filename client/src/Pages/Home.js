import React, { useHistory } from 'react';

function Home() {
    const history = useHistory();

    if (!localStorage.getItem("token")) {
        history.push('/login');
    } else {
        console.log("There's a token!");
    }


    return(
        <h1>Welcome to Infotech University!</h1>
    )
}

export default Home;