import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        const fetchTrips = async () => {
            const res = await axios.get('/api/trips');
            setTrips(res.data);
        };
        fetchTrips();
    }, []);

    return (
        <div>
            <h1>Travel Offers</h1>
            <div>
                {trips.map(trip => (
                    <div key={trip._id}>
                        <h2>{trip.title}</h2>
                        <p>{trip.description}</p>
                        <Link to={/trip/}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
