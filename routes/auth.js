const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');
const Dish = require('../models/Dish');

/**
 * @route GET /auth
 * @desc get logged in user
 * @access Private
 */
router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/**
 * @route POST /auth
 * @desc LOGIN
 * @access Private
 */
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }
      await user.generateAuthToken();
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

/**
 * @route PUT auth/id
 * @desc update user
 * @access Private
 */
router.put('/:id', authMiddleware, async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const userFields = {};
  if (firstName) userFields.firstName = firstName;
  if (lastName) userFields.lastName = lastName;
  if (email) userFields.email = email;
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({ msg: 'user not found' });
    }
    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: userFields },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/**
 * @route Delete /auth
 * @desc delete user
 * @access Private
 */

router.delete('/', authMiddleware, async (req, res) => {
  try {
    if (!req.user.id) {
      return res.status(404).json({ msg: 'user does not exists!' });
    }
    await Dish.deleteMany({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/**
 * @route Post /auth/logout
 * @desc logout user
 * @access Private
 */

router.post('/logout', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    console.log(Object.assign(user.tokens));
    user.tokens = [];
    await user.save();
    res.send('logged out');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/logout/all', authMiddleware, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      token => token.token !== req.token
    );
    await req.user.save();
    res.send('logged out');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
