const express = require('express');
const router = express.Router();

router.use('/folder', require('./folder-route'));

module.exports = router;