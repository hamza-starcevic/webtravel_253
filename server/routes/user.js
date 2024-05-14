const express = require('express');
const Travel = require('../models/travel');
const Question = require('../models/question');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/travels', auth, async (req, res) => {
  try {
    const travels = await Travel.find();
    res.json(travels);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/travels/:id', auth, async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id).populate('questions');
    res.json(travel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/travels/:id/questions', auth, async (req, res) => {
  const { text } = req.body;

  try {
    const question = new Question({
      user: req.user._id,
      travel: req.params.id,
      text,
    });

    await question.save();

    const travel = await Travel.findById(req.params.id);
    travel.questions.push(question);
    await travel.save();

    res.status(201).json({ message: 'Question added successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/travels/:id/register', auth, async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    if (!travel) return res.status(404).json({ message: 'Travel not found.' });

    // Assuming there's a registeredUsers array in the Travel model
    if (!travel.registeredUsers.includes(req.user._id)) {
      travel.registeredUsers.push(req.user._id);
      await travel.save();
    }

    res.status(200).json({ message: 'Registered for travel successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/history', auth, async (req, res) => {
  try {
    const travels = await Travel.find({
      registeredUsers: req.user._id,
      endDate: { $lt: new Date() },
    });

    res.json(travels);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
