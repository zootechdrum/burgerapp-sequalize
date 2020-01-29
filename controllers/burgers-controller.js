var express = require("express");
var fetch = require('node-fetch')

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");
var hbsObject = {}


router.put("/:id", function (req, res) {
  console.log(req.body)

  db.Burger.update({
    devoured: req.body.burgerState
  }, {
      where: { id: req.body.id }
    }

  ).then(function (updatedBurger) {
    console.log(updatedBurger)
    res.json(updatedBurger)
  })
})


// Delete route for Deleting a new Burger
router.delete("/:id", function (req, res) {

  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }
  ).then(function (dbBurger) {
    res.json(dbBurger)
  });
})


// POST route for saving a new Burger
router.post("/", function (req, res) {
  db.Burger.create(req.body).then(function (dbBurger) {
    res.json(dbBurger)
  });
})

module.exports = router;