// src/pages/UserDashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        const fetchTrips = async () => {
            const res = await axios.get('http://localhost:5000/api/trips', {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            setTrips(res.data);
        };

        fetchTrips();
    }, []);

    return (
        <div>
            <h1>User Dashboard</h1>
            <h2>Available Trips</h2>
            <ul>
                {trips.map(trip => (
                    <li key={trip._id}>{trip.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserDashboard;
