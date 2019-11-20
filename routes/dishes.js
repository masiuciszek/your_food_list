// @ts-nocheck
const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');

const multer = require('multer');
const Dish = require('../models/Dish');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');

/**
 * @route GET /dishes
 * @desc Get all user dishes
 * @access Private
 */

router.get('/', authMiddleware, async (req, res) => {
  try {
    const dishes = await Dish.find({ user: req.user.id }).sort({ date: -1 });
    res.json(dishes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error, Status 500');
  }
});

/**
 * @route Post /dishes
 * @desc add a new dish
 * @access Private
 */
router.post(
  '/',
  [
    authMiddleware,
    [
      check('name', 'name is required')
        .not()
        .isEmpty(),
      check('country', 'country is required ')
        .not()
        .isEmpty(),
      check('description', 'max 255 charchters').isLength({ max: 255 }),
    ],
  ],
  async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).json({ errors: validationErrors.array() });
    }
    const { name, country, description } = req.body;
    try {
      const newDish = await Dish({
        ...req.body,
        user: req.user.id,
      });

      const createdDish = await newDish.save();
      res.json(createdDish);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error, Status 500');
    }
  }
);

/**
 * @route Post /dishes/image
 * @desc add a image
 * @access Private
 */

module.exports = router;
