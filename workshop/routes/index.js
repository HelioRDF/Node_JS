var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", nome: "Helio" });
});

router.get("/new", function (req, res, next) {
  res.render("new", { title: "Express", nome: "Helio" });
});

module.exports = router;  