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
    console.log(req.body.password);

    function next (user, status) {
      console.log(status);
      if (status === true) {
        redirect('/index');
      } else {
        res.send('incorrect username or password');
      }
    }

    if (user) {
      console.log(user);
      // username/password is correct
      comparePassword(req.body.password, user, next);

    } else {
      console.log('err');
    }

  });
  // .catch(function(err) {
  //   if whole thing doesn't work
  //   console.log(err);
  // });
});

function comparePassword (password, user, callback) {
  bcrypt.compare(password, user.password, function(err, res){
    console.log(err);
      callback(user, res);
  });
}

function redirect (destination) {
  res.redirect(destination);
}

module.exports = router;
