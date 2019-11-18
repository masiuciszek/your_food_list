const express = require('express')
;
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.get('/', async (req, res) => {
  res.send('test');
});

module.exports = router;
