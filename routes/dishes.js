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

    if (!dishes) return res.status(401).json({ msg: 'Authentication denied' });
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
    const { name, country, description, type } = req.body;
    try {
      const newDish = await Dish({
        name,
        country,
        description,
        type,
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
 * @route PUT /dishes/:id
 * @desc add a image
 * @access Private
 */

router.put('/:id', authMiddleware, async (req, res) => {
  const { name, country, description, type } = req.body;
  const dishFields = {};
  if (name) dishFields.name = name;
  if (country) dishFields.country = country;
  if (description) dishFields.description = description;
  if (type) dishFields.type = type;

  try {
    let dish = await Dish.findById(req.params.id);
    if (!dish) {
      return res.status(400).json({ msg: 'no dish found' });
    }
    if (dish.user.toString() !== req.user.id) {
      return res.status(400).json({ msg: 'auth error' });
    }

    dish = await Dish.findByIdAndUpdate(
      req.params.id,
      { $set: dishFields },
      { new: true }
    );
    res.json(dish);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error, Status 500');
  }
});

/**
 * @route DELETE /dishes/id
 * @desc remove a dish
 * @access Private
 */

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    let dish = await Dish.findById(req.params.id);
    if (!dish) {
      return res.status(400).json({ msg: 'no dish found' });
    }
    if (dish.user.toString() !== req.user.id) {
      return res.status(400).json({ msg: 'auth error' });
    }

    dish = await Dish.findByIdAndDelete(req.params.id);
    res.json({ msg: 'dish got deleted!', dish });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error, Status 500');
  }
});

/**
 * @route Post /dishes/image
 * @desc add a image
 * @access Private
 */

module.exports = router;
