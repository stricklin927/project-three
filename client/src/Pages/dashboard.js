import React from 'react';
import { logoutUser } from '../actions/authActions';
import { useAuthDispatch, logout, useAuthState } from "../Context";


function Dashboard(props) {
    const dispatch = useAuthDispatch();
    const userDetails = useAuthState();

    const handleLogout = () => {
        logout(dispatch)
        props.history.push('/login')
    }

    return (
        <div>
            <div>
                <h1>Dashboard</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <p>Welcome to the dashboard, {userDetails.user.email}.</p>
        </div>
    )
}

export default Dashboard;
