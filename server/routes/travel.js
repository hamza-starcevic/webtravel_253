const express = require('express');
const Travel = require('../models/travel');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const travels = await Travel.find();
    res.json(travels);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id).populate('questions');
    res.json(travel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/category/:category', async (req, res) => {
  try {
    const travels = await Travel.find({ category: req.params.category });
    res.json(travels);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
