var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {

    res.render("burgerEater");
    }) 

    router.get("/burgers", function(req, res) {
        hbsObject = {
            burger: [{id:1,burger_name:"Mcdonald",devoured:false}]
          };

        res.render("index",hbsObject);
        }) 

module.exports = router;