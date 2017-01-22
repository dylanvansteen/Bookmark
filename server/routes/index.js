const express = require('express');
const router = express.Router();

router.use('/folder', require('./folder-route'));
router.use('/authorization', require('./authorization-route'));

module.exports = router;