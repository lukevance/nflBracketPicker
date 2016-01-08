var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var pg = require('pg');
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});

// nav to signin page
router.get('/', function(req, res, next) {
  res.render('signin', {
    title: 'NFL Playoff Bracket Picker',
    message: 'Sign in to play'
  });
});

// post signin info and confirm correct
router.post('/', function(req, res, next) {
  knex('users').select().where({
    username : req.body.username
    // password: req.body.password
  }).then(function(user) {
    if (user) {
      // username/password is correct
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.render('/gamepicks');
        // res.redirect('users/userhome');
      } else {
        // username/password is incorrect
        res.send('incorrect username or password');
      }
    } else {
      console.log('err');
    }
  });
  // .catch(function(err) {
  //   if whole thing doesn't work
  //   console.log(err);
  // });
});

module.exports = router;
