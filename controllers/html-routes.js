var express = require("express");
var db = require("../models");

var router = express.Router();

router.get("/", function (req, res) {

    res.render("burgerEater");
})

router.get("/burgers", function (req, res) {
    var burgerInfo = []
    var query = {};
    console.log(req.query.user_id)
    if (req.query.user_id) {
        query.userId = req.query.user_id;
    }
    db.Burger.findAll({

        where: query,
        include: [db.User]
    }).then(function (dbBurger) {
        if (dbBurger.length != 0) {

            for (var i = 0; i < dbBurger.length; i++) {
                burgerInfo.push(dbBurger[i].dataValues)
            }
            hbsObject = {
                burger: burgerInfo
            }
            console.log(dbBurger[0].dataValues)
        } else {
            hbsObject = {
                burger: []
            };
        }
        res.render("index", hbsObject);
    })
})

module.exports = router;