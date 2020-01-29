var express = require("express");
const fetch = require('node-fetch')

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");
var hbsObject = {}




//   app.get('/render', function(req, res) {
//     res.render('index', {title: 'res vs app render'}, function(err, html) {
//         console.log(html);
//         res.send('done');
//     })
// })

  // POST route for saving a new Burger
  router.delete("/:id", function(req, res) {
    console.log(req.params.id)
    console.log("hit")
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }

    ).then(function(dbBurger) {
      res.json(dbBurger)
  });
})


  // POST route for saving a new Burger
  router.post("/", function(req, res) {
    db.Burger.create(req.body).then(function(dbBurger) {
      res.json(dbBurger)
  });
})

module.exports = router;