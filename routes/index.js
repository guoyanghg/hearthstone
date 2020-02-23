var express = require('express');
var router = express.Router();
var cardService = require('../services/cardService');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", {activeItem: 0});
});

router.get('/contact', function(req, res, next) {
  res.render("contact", {activeItem: 1});
});

module.exports = router;
