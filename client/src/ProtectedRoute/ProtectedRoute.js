import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "../services/authService";

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const currentUser = AuthService.getCurrentUser();
        if (!currentUser) {
          // Not logged in so redirect to login page
          return <Redirect to="/login" />;
        }

        // Check if route is restricted by role
        if (roles && roles.indexOf(currentUser.role) === -1) {
          // Role not authorized so redirect to home page
          return <Redirect to="/" />;
        }

        // Authorized so return component
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
