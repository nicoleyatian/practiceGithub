var express = require('express');
var router = express.Router();

router.use(require('./static.routing.js'));

router.use('/api', require('./api'));

module.exports = router;