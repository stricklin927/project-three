import React from 'react';
import Login from '../Pages/login';
import Dashboard from '../Pages/dashboard';
import PageNotFound from '../Pages/notfound';

const routes = [
    {
        path: "/",
        component: Login,
        isPrivate: false
    },
    {
        path: "/dashboard",
        component: Dashboard,
        isPrivate: true
    },
    {
        path: "/*",
        component: PageNotFound,
        isPrivate: true
    }
]

export default routes;

