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

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  // console.log(req.params.id);
  knex('picks').where({
    user_id : req.params.id
  }).then(function(pickData) {
    console.log(pickData);
    var afc_3 = '3. Cincinatti';
    var afc_4 = '4. Houston';
    var afc_5 = '5. Kansas City';
    var afc_6 = '6. Pittsburgh';
    var nfc_3 = '3. Minnesota';
    var nfc_4 = '4. Washington';
    var nfc_5 = '5. Green Bay';
    var nfc_6 = '6. Seattle';


    var plusWildCard = pickData[0];
    // afc wildcard logic
    if (plusWildCard.afc_g1[0] === 'c') {
      plusWildCard.afcw1 = afc_4;
      plusWildCard.afcw2 = afc_5;
      plusWildCard.afcw3 = afc_3;
      plusWildCard.afcw4 = afc_6;
    } else if (plusWildCard.afc_g1[0] === 'p') {
      plusWildCard.afcw1 = afc_3;
      plusWildCard.afcw2 = afc_6;
      plusWildCard.afcw3 = afc_4;
      plusWildCard.afcw4 = afc_5;
    }
    // nfc wildcard logic
    if (plusWildCard.nfc_g1[0] === 'm') {
      plusWildCard.nfcw1 = nfc_4;
      plusWildCard.nfcw2 = nfc_5;
      plusWildCard.nfcw3 = nfc_3;
      plusWildCard.nfcw4 = nfc_6;
    } else if (plusWildCard.nfc_g1[0] === 's') {
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
