var db = require("../models");

var express = require("express");

var router = express.Router();

  router.get("/", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findAll({
      include: [ {model:db.Burger, as: "burgers"}]
    }).then(function(dbUser) {
      console.log(dbUser)
      res.json(dbUser);
    });
  });


  router.post("/", function(req, res) {
    db.User.create(req.body).then(function(dbAuthor) {
      console.log(dbAuthor)
      res.json(dbAuthor);
    });
  });

  router.delete("/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
module.exports = router;
