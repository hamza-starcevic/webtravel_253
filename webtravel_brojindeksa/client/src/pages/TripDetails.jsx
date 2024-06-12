// src/pages/TripDetails.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TripDetails = () => {
    const { id } = useParams();
    const [trip, setTrip] = useState(null);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchTrip = async () => {
            const res = await axios.get(`http://localhost:5000/api/trips/${id}`);
            setTrip(res.data);
            setComments(res.data.comments);
        };

        fetchTrip();
    }, [id]);

    const handleAddComment = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:5000/api/trips/${id}/comments`, { text: comment }, {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            setComments(res.data);
            setComment('');
        } catch (err) {
            console.error(err.message);
        }
    };

    if (!trip) return <div>Loading...</div>;

    return (
        <div>
            <h1>{trip.title}</h1>
            <p>{trip.description}</p>
            <h2>Comments</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment._id}>
                        {comment.text} - <strong>{comment.user.username}</strong>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddComment}>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment"
                    required
                />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
};

export default TripDetails;
