var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/bracket', function(req, res, next){
  res.render('bracket');
});

router.get('/gamepicks', function(req, res, next){
  res.render('gamepicks');
});

module.exports = router;
