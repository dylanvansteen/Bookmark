const express = require('express');
const router = express.Router();

router.use('/folder', require('./folder-route'));
router.use('/token', require('./token-route'));

module.exports = router;