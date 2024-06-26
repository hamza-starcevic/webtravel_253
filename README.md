# Travel Agency Portal

## Project Overview
This is a web application for a travel agency portal. It allows users to view travel offers, register, ask questions, and sign up for trips. Admins can manage users and travel offers.

## Technologies Used
- Backend: Node.js, Express, MongoDB
- Frontend: React, Axios, React Router
- Authentication: JSON Web Tokens (JWT)
- Styling: Bootstrap/MUI

## Setup Instructions
1. Clone the repository
2. Install dependencies for both backend and frontend
\\\ash
npm install
cd client
npm install
\\\
3. Start the backend server
\\\ash
nodemon server.js
\\\
4. Start the frontend development server
\\\ash
cd client
npm start
\\\

## API Endpoints
- \POST /api/users/register\: Register a new user
- \POST /api/users/login\: Login a user
- \GET /api/users\: Get all users (admin only)
- \GET /api/trips\: Get all trips
- \GET /api/trips/:id\: Get a single trip
- \POST /api/trips\: Create a new trip (admin only)
- \PUT /api/trips/:id\: Update a trip (admin only)
- \DELETE /api/trips/:id\: Delete a trip (admin only)
