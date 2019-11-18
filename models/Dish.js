const mongoose = require('mongoose');

const { Schema } = mongoose;

const dishSchema = Schema({
  // Relation
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
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
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Dish', dishSchema);
