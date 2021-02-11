import React, { useState } from 'react';
import { loginUser, useAuthState, useAuthDispatch } from '../Context';


function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAuthDispatch();
    const { loading, errorMessage } = useAuthState();

    const handleLogin = async(e) => {
        e.preventDefault();
        let payload = {email, password}
        try {
            let response = await loginUser(dispatch, payload)
            if (!response.user) return
            props.history.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <div>
                <h1>Login Page</h1>
                    { errorMessage ? <p>{errorMessage}</p> : null }
                <form>
                    <div>
                        <div>
                            <label for="email">Email</label>
                            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <button onClick={handleLogin} disabled={loading}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;