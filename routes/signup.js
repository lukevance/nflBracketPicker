var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var pg = require('pg');
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});

// nav to signup
router.get('/', function(req, res, next) {
  res.render('signup', {title: 'NFL Playoff Bracket Picker', message: 'Sign up here for your bracket.'});
});

// Create User /register/signup
router.post('/', function(req, res) {
  // save body in user variable
  var newUser = req.body;

  // test newUser data for validation
  var fail = true;
  var messageData = {};

  if (!newUser.firstname) {
    messageData.firstname = 'Enter your first name.';
  } else if (!newUser.lastname) {
    messageData.lastname = 'Enter your last name.';
  } else if (newUser.email.indexOf('@') === -1) {
    messageData.email = 'Enter a valid email address.';
  } else if (!newUser.username) {
    messageData.username = 'Enter a username';
  } else if (!newUser.password) {
    messageData.password = "Enter a password.";
  } else if (newUser.password !== newUser.confPassword) {
    messageData.password = "Passwords don't match.";
  } else if (newUser.password.length < 8) {
    messageData.password = "Password must be at least 8 characters long.";
  } else {
    fail = false;
  }

  // if errors exist rerender else store user
  if (fail === true) {
    res.render('signup', {error: messageData, data: newUser});
  } else {
    hashPassword(newUser, registerUser);
  }

  // set up functions for encryption
  // hash with bcryp and send to knex
  function hashPassword (user, callback){
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        // send hash to database
          user.password = hash;
          callback(user);
      });
  });
  }

  // send user data to datbase
  function registerUser (user) {
    knex('users').insert( {
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        password: user.password,
        email: user.email
      }).then(function(data) {
        res.redirect('/');
    }, function(failure) {
      console.log(failure);
    });
  }

  // NEED TO HAVE VIEW MADE FOR THIS
}, function(failure) {
  res.write('this is the new page and you failed');
  res.end();
});

module.exports = router;
