// @ts-nocheck
const express = require('express');
const multer = require('multer');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');
const authMiddleWare = require('../middleware/authMiddleware');
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

// @route     POST /users/me/avatar
// @desc      upload avatar
// @access    Private
const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload an image'));
    }

    cb(undefined, true);
  },
});

router.post(
  '/me/avatar',
  authMiddleWare,
  upload.single('avatar'),
  async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      user.avatar = req.file.buffer;
      // console.log(user);
      // console.log(user.avatar);
      await user.save();
      // console.log(user);
      res.send();
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error! Status 500');
    }
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

// @route     DELETE /users/me/avatar
// @desc      delete avatar
// @access    Private

router.delete('/me/avatar', authMiddleWare, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.avatar = undefined;
    await user.save();
    res.json({ msg: 'avatar deleted!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error! Status 500');
  }
});

// @route     GET /users/:id/avatar
// @desc      get users avatar
// @access    Private

module.exports = router;
