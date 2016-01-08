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
	
	if(req.session.user) {
		res.render('gamepicks');
	} else {
		res.render("signin", {
			message: "You must be signed in to access gamepicks"
		});
	}
});

router.get('/signout', function(req, res) {
	req.session = null;
	res.redirect('/');
});

module.exports = router;
