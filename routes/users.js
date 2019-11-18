const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');

// @route     GET /users
// @desc      Fetch all users
// @access    Public
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    if (!users) {
      return res.status(400).json({ msg: 'There is no users' });
    }
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});

// @route     POST /users
// @desc      Register a user
// @access    Public
router.post(
  '/',
  [
    check('firstName', 'first name is required')
      .not()
      .isEmpty(),
    check('lastName', 'last name is required')
      .not()
      .isEmpty(),
    check('email', 'email is required').isEmail(),
    check(
      'password',
      'please enter a password with a min length of 5 characters'
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).json({ errors: validationErrors.array() });
    }
    const { firstName, lastName, email, password } = req.body;
    try {
      // Check if email already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'user already exists!' });
      }
      user = new User({
        firstName,
        lastName,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 60 * 60 * 60 },
        (err, token) => {
          if (err) {
            throw new Error('could not register');
          }
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error! Status 500');
    }
  }
);

module.exports = router;
