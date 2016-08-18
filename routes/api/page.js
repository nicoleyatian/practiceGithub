var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	// Page.findAll()
	// .then(function (pages) {
	// 	res.json(pages);
	// })
	// .catch(next);
});

router.get('/:id', function (req, res, next) {
	// Page.findOne({
	// 	where: {
	// 		id: req.params.id
	// 	}
	// })
	// .then(function (page) {
	// 	res.json(page);
	// })
	// .catch(next);
});

router.post('/', function (req, res, next) {

});

router.put('/:id', function (req, res, next) {

});

router.delete('/:id', function (req, res, next) {

});