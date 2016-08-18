var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
	// User.findAll()
	// .then(function (users) {
	// 	res.json(users);
	// })
	// .catch(next);
});

router.get('/:id', function (req, res, next) {
	// User.findOne({
	// 	where: {
	// 		id: req.params.id
	// 	}
	// })
	// .then(function (user) {
	// 	res.json(user);
	// })
	// .catch(next);
});

router.post('/', function (req, res, next) {

});

router.put('/:id', function (req, res, next) {

});

router.delete('/:id', function (req, res, next) {

});