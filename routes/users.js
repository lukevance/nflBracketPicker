var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});




router.get('/bracket', function(req, res, next) {
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

router.post('/gamepicks', function(req, res) {
  console.log(req.body.afc_g1);
  var userSubmission = req.body;
  knex('picks').insert({
    user_id: req.session.user.id,
    afc_g1: userSubmission.afc_g1,
    afc_g2: userSubmission.afc_g2,
    afc_g3: userSubmission.afc_g3,
    afc_g4: userSubmission.afc_g4,
    afc_g5: userSubmission.afc_g5,
    nfc_g1: userSubmission.nfc_g1,
    nfc_g2: userSubmission.nfc_g2,
    nfc_g3: userSubmission.nfc_g3,
    nfc_g4: userSubmission.nfc_g4,
    nfc_g5: userSubmission.nfc_g5,
    sb_winner: userSubmission.sb
  }).then(function(data) {
    // redirect to users/:id
    res.redirect('/users/'+ req.session.user.id);
  }, function(failure) {
    console.log(failure);
  });
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  // console.log(req.params.id);
  knex('picks').where({
    user_id : req.params.id
  }).then(function(pickData) {
    console.log(pickData);
    var afc_3 = '3. Cincinnati Bengals';
    var afc_4 = '4. Houston Texans';
    var afc_5 = '5. Kansas City Chiefs';
    var afc_6 = '6. Pittsburgh Steelers';
    var nfc_3 = '3. Minnesota Vikings';
    var nfc_4 = '4. Washington Redskins';
    var nfc_5 = '5. Green Bay Packers';
    var nfc_6 = '6. Seattle Seahawks';


    var plusWildCard = pickData[0];
    // afc wildcard logic
    if (plusWildCard.afc_g1[0] === '6') {
      plusWildCard.afcw1 = afc_4;
      plusWildCard.afcw2 = afc_5;
      plusWildCard.afcw3 = afc_3;
      plusWildCard.afcw4 = afc_6;
    } else if (plusWildCard.afc_g1[0] === '3') {
      plusWildCard.afcw1 = afc_3;
      plusWildCard.afcw2 = afc_6;
      plusWildCard.afcw3 = afc_4;
      plusWildCard.afcw4 = afc_5;
    }
    // nfc wildcard logic
    if (plusWildCard.nfc_g1[0] === '3') {
      plusWildCard.nfcw1 = nfc_4;
      plusWildCard.nfcw2 = nfc_5;
      plusWildCard.nfcw3 = nfc_3;
      plusWildCard.nfcw4 = nfc_6;
    } else if (plusWildCard.nfc_g1[0] === '6') {
      plusWildCard.nfcw1 = nfc_3;
      plusWildCard.nfcw2 = nfc_6;
      plusWildCard.nfcw3 = nfc_4;
      plusWildCard.nfcw4 = nfc_5;
    }

    console.log(plusWildCard);
    res.render('user', {data:plusWildCard});
  });
});
module.exports = router;
