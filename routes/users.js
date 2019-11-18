const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// @route     GET /users
// @desc      Fetch all users
// @access    Public
router.get('/', [], async (req, res) => {
  res.send('get user');
});

// @route     POST /users
// @desc      Register a user
// @access    Public
router.post('/', async (req, res) => {
  res.send('post user');
});

module.exports = router;
