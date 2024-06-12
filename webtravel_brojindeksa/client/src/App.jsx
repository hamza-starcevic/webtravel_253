// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import TripDetails from './pages/TripDetails';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <Router>
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<PrivateRoute />}>
                        <Route path="admin" element={<AdminDashboard />} />
                        <Route path="user" element={<UserDashboard />} />
                        <Route path="trips/:id" element={<TripDetails />} /> {/* Add TripDetails route */}
                    </Route>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
