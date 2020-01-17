var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {

  const arr = []

    db.burgers.findAll({}).then(function(data) {
      
      for(var i = 0; i < data.length; i++){
        arr.push(data[i].dataValues)
        console.log(arr)
      }

      var hbsObject = {
        burger : arr
      }

      res.render("index", hbsObject);
    });
  }) 


// router.post("/api/burger", function(req, res) {
//   burger.create(["burger_name"], [req.body.name], function(result) {
//     // Send back the ID of the new quote
//     res.json(result);
//   });
// });

// router.delete("/api/burger/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.put("/api/burger/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.update(
//     {
//       devoured: req.body.burgerState
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
// });

module.exports = router;