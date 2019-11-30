const mongoose = require('mongoose');

const { Schema } = mongoose;

// @ts-ignore
const dishSchema = Schema({
  // Relation
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: 'delicious!',
  },
  type: {
    type: String,
    enum: ['breakfast', 'snack', 'main', 'dessert'],
    default: 'main',
  },
  avatar: {
    type: Buffer,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Dish', dishSchema);
