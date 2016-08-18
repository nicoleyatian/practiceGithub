var express = require('express');
var app = express();
var swig = require('swig');
var morgan = require('morgan');
var routes = require('./routes');


app.use(morgan('dev'));

app.use(require('./routes'));

app.use(function (req, res, next) {
	res.send(404);
});

app.use(function (err, req, res, next) {
	res.status(500 || err.status).send(err.message);
});

// db.sync()
// .then(function () {
// 	app.listen(3000, function () {
// 		console.log('Listening on port 3000');
// 	});
// })
// .catch(function (err) {
// 	console.error(err);
// });