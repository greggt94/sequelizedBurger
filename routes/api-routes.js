var express = require('express');
var db = require('../models');

module.exports = function(app) {
    app.get("/burgers", function(req, res) {
        db.burgers.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    app.post("/burgers", function(req, res) {
        db.burgers.create({
            id: req.body.id,
            burger_name: req.body.name,
            devoured: req.body.devoured
        }).then(function(results) {
            res.json(results);
        });
    });

    app.put("/burgers/:id", function(req, res) {
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
};
