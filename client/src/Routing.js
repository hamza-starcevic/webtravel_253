import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import TravelList from "./TravelList/TravelList";
import TravelDetail from "./TravelDetail/TravelDetail";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import UserDashboard from "./UserDashboard/UserDashboard";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <ProtectedRoute path="/travels" component={TravelList} />
      <ProtectedRoute path="/travels/:id" component={TravelDetail} />
      <ProtectedRoute path="/admin" component={AdminDashboard} roles={["admin"]} />
      <ProtectedRoute path="/user" component={UserDashboard} roles={["user"]} />
    </Switch>
  );
};

export default Routing;
