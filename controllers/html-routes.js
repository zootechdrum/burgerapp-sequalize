var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {

    res.render("burgerEater");
    }) 

    router.get("/burgers", function(req, res) {

        res.render("index");
        }) 

module.exports = router;