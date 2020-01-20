var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");

  router.get("/", function(req, res) {

    var query = {};
    if (req.query.user_id) {
      query.userId = req.query.user_id;
    }
    db.Burger.findAll({
    
      where: query,
      include: [db.User]
    }).then(function(dbBurger) {
      console.log(dbBurger)
      res.json(dbBurger)
    })
});

  // POST route for saving a new post
  // router.post("/", function(req, res) {
  //   console.log("Hit")
  //   db.Burger.create(req.body).then(function(dbBurger) {
  //     res.json(dbBurger);
  //   });
  // });

module.exports = router;