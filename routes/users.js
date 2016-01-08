var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user');
});

router.get('/bracket', function(req, res, next) {
  res.render('bracket');
});

router.get('/gamepicks', function(req, res, next) {
  res.render('gamepicks');
});

router.get('/signout', function(req, res) {
  req.session = null;
  res.redirect('/');
});

router.post('/gamepicks', function(req, res) {
  var userSubmission = req.body;
  res.send('this worked');
  // knex('picks').insert({
  //   id: id
  //   username: username
  //   afc_g1: userSubmission.
  //   afc_g2: userSubmission.
  //   afc_g3: userSubmission.
  //   afc_g4: userSubmission.
  //   afc_g5: userSubmission.
  //   nfc_g1: userSubmission.
  //   nfc_g2: userSubmission.
  //   nfc_g3: userSubmission.
  //   nfc_g4: userSubmission.
  //   nfc_g5: userSubmission.
  //   sb: userSubmission.
  // }).then(function(data) {
  //   res.redirect('/user');
  //   res.end();
  // }, function(failure) {
  //   console.log(failure);
  // });
});

module.exports = router;
