import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector(
        ({ user }) => user.authenticated || false
    );
    console.log(isAuthenticated);
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
};
