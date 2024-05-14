import React from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <a href="/travels/create" className="btn btn-primary">Create New Travel</a>
      {/* Add more admin functionalities here */}
    </div>
  );
};

export default AdminDashboard;
