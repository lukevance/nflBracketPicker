var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user');
});

router.get('/bracket', function(req, res, next){
  res.render('bracket');
});

router.get('/gamepicks', function(req, res, next){
  res.render('gamepicks');
});

router.get('/signout', function(req, res) {
	req.session = null;
	res.redirect('/');
});

module.exports = router;
