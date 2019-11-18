const jwt = require('jsonwebtoken');
const config = require('config');

const authMiddleware = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(400).json({ msg: 'Authentication denied' });
  }
  try {
    const verified = jwt.verify(token, config.get('jwtSecret'));

    req.user = verified.user;
    next();
  } catch (err) {
    res.status(400).json({ msg: 'Token not valid' });
  }
};

module.exports = authMiddleware;
