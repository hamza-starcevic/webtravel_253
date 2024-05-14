const express = require('express');
const User = require('../models/user');
const Travel = require('../models/travel');
const Question = require('../models/question');
const auth = require('../middleware/auth');
const roles = require('../middleware/roles');

const router = express.Router();

// User management
router.post('/users', auth, roles('admin'), async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const user = new User({ username, email, password, role });
    await user.save();
    res.status(201).json({ message: 'User created successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/users/:id', auth, roles('admin'), async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'User updated successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch('/users/:id/status', auth, roles('admin'), async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.active = !user.active;
    await user.save();
    res.json({ message: 'User status updated successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Travel management
router.post('/travels', auth, roles('admin'), async (req, res) => {
  const { title, description, category, startDate, endDate } = req.body;

  try {
    const travel = new Travel({ title, description, category, startDate, endDate });
    await travel.save();
    res.status(201).json({ message: 'Travel created successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/travels/:id', auth, roles('admin'), async (req, res) => {
  try {
    await Travel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Travel updated successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/travels/:id', auth, roles('admin'), async (req, res) => {
  try {
    await Travel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Travel deleted successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Question management
router.delete('/questions/:id', auth, roles('admin'), async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ message: 'Question deleted successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
