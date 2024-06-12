// src/pages/AdminDashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [trips, setTrips] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get('http://localhost:5000/api/users', {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            setUsers(res.data);
        };

        const fetchTrips = async () => {
            const res = await axios.get('http://localhost:5000/api/trips');
            setTrips(res.data);
        };

        fetchUsers();
        fetchTrips();
    }, []);

    const handleAddTrip = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/trips', {
                title,
                description,
                category,
                startDate,
                endDate
            }, {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            setTrips([...trips, res.data]);
            setTitle('');
            setDescription('');
            setCategory('');
            setStartDate('');
            setEndDate('');
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:5000/api/users/${userId}`, {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            setUsers(users.filter(user => user._id !== userId));
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.username} - {user.email}
                        <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <h2>Add Trip</h2>
            <form onSubmit={handleAddTrip}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
                <input
                    type="date"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                />
                <input
                    type="date"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                />
                <button type="submit">Add Trip</button>
            </form>
            <h2>Trips</h2>
            <ul>
                {trips.map(trip => (
                    <li key={trip._id}>{trip.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
