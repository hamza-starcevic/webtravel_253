import React from "react";
import "./UserDashboard.css";

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      <a href="/travels" className="btn btn-primary">Browse Travels</a>
      {/* Add more user functionalities here */}
    </div>
  );
};

export default UserDashboard;
