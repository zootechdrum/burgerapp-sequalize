var express = require("express");
const fetch = require('node-fetch')

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");
var hbsObject = {}


    router.get("/", function(req, res) {

    var query = {};
    console.log(req.query.user_id)
    if (req.query.user_id) {
      query.userId = req.query.user_id;
    }
    db.Burger.findAll({
    
      where: query,
      include: [db.User]
    }).then(function(dbBurger) {
         hbsObject = {
          burger : [dbBurger[0].dataValues]
        };
          res.render("../views/index.handlebars",hbsObject)

    })

  })

//   app.get('/render', function(req, res) {
//     res.render('index', {title: 'res vs app render'}, function(err, html) {
//         console.log(html);
//         res.send('done');
//     })
// })



  // POST route for saving a new post
  router.post("/", function(req, res) {
    db.Burger.create(req.body).then(function(dbBurger) {
      res.json(dbBurger)
  });
})

module.exports = router;