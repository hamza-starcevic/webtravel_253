const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers } = require('../controllers/users');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// User registration
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

// Get all users (admin only)
router.get('/', auth, admin, getAllUsers);

module.exports = router;
