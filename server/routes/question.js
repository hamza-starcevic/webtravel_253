const express = require('express');
const Question = require('../models/question');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { travelId, text } = req.body;

  try {
    const question = new Question({
      user: req.user._id,
      travel: travelId,
      text,
    });

    await question.save();
    res.status(201).json({ message: 'Question added successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ message: 'Question deleted successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
