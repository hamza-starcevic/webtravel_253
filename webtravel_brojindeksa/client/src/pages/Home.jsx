// src/pages/Home.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        const fetchTrips = async () => {
            const res = await axios.get('http://localhost:5000/api/trips');
            setTrips(res.data);
        };
        fetchTrips();
    }, []);

    return (
        <div className="home-container">
            <h1>Travel Offers</h1>
            <div className="trips-container">
                {trips.map(trip => (
                    <div key={trip._id} className="trip-card">
                        <h2>{trip.title}</h2>
                        <p>{trip.description}</p>
                        <Link to={`/trips/${trip._id}`} className="details-link">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
