// @ts-nocheck
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

const { Schema } = mongoose;

const userSchema = Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: Buffer,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, config.get('jwtSecret'));
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

module.exports = mongoose.model('User', userSchema);
