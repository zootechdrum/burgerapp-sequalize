var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");

  router.get("/", function(req, res) {

    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;

    }
    db.Burger.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbBurger) {
      console.log(dbBurger)
      res.json(dbBurger)
    })
});

module.exports = router;