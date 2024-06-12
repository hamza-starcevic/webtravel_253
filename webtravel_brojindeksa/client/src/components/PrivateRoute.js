import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token');
    let isAuthenticated = false;
    if (token) {
        try {
            const decoded = jwt_decode(token);
            isAuthenticated = true;
        } catch (err) {
            isAuthenticated = false;
        }
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
