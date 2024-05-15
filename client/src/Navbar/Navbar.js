import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../services/authService';
import './Navbar.css';

const Navbar = () => {
  const isAuthenticated = AuthService.isAuthenticated();
  const role = AuthService.getRole();

  const handleLogout = () => {
    AuthService.logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Travel Agency</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          {isAuthenticated && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/travels">Travels</Link>
              </li>
              {role === "admin" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">Admin Dashboard</Link>
                </li>
              )}
              {role === "user" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/user">User Dashboard</Link>
                </li>
              )}
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
          {!isAuthenticated && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
