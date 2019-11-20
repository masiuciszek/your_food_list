// @ts-nocheck
const jwt = require('jsonwebtoken');
const config = require('config');

const authMiddleware = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(400).json({ msg: 'Authentication denied' });
  }
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.token = token;
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

module.exports = authMiddleware;
