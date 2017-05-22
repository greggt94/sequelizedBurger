var express = require('express');
var db = require('../models');

var router = express.Router();

router.get("/", function(req, res) {
	db.burgers.findAll({}).then(function(results) {
		res.json(results);
	});
});

router.post("/", function(req, res) {
	db.burgers.create({
		id: req.body.id,
		burger_name: req.body.name,
		devoured: req.body.devoured
	}).then(function(results) {
		res.json(results);
	});
});

router.put("/:id", function (req, res) {
	db.burgers.update({ 
		devoured: req.body.devoured 
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(results) {
		res.json(results);
	});
});

module.exports = router;
