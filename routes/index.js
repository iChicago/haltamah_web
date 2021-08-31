var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('terms', { title: 'الشروط والأحكام' });
});

module.exports = router;
