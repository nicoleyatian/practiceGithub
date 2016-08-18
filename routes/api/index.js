var express = require('express');
var router = express.Router();

router.use('/user', require('./user.js'));
router.use('/page', require('./page.js'));

module.exports = router;