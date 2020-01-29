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
  router.post("/", function(req, res) {
    console.log("hit")
    db.Burger.create(req.body).then(function(dbBurger) {
      res.json(dbBurger)
  });
})

module.exports = router;