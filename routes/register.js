var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var pg = require('pg');
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});

// dummy data from user
var testUser = {
  username: 'xoEugenexoxo',
  firstname: 'Logan',
  lastname: 'King',
  phone: '1234567890',
  email: 'number1eugenefanboy@hotmail.com',
  password: 'notverysecure'
};

// hash with bcryp and send to knex
function hashPassword (user, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      // send hash to database
        callback(user);
    });
});
}

// hashPassword(testUser, nextFunction);

// send user data to datbase
function registerUser (user) {

}

// nav to signup
router.get('/', function(req, res, next) {
  res.render('signup', {title: 'NFL Playoff Bracket Picker', message: 'Sign up here for your bracket.'});
});

// Create User /register/signup
router.post('/', function(req, res) {

  console.log(req.body);

  // Write queries to interact with postgres
  knex('users').insert( {
      username:req.body.username,
      password:req.body.password,
      email:req.body.email
    }).then(function(data) {

    res.redirect('/');

    // {title: 'nfl Picker', message: 'welcome' + req.body.username}

  }, function(failure) {
    console.log(failure);
  });
  // NEED TO HAVE VIEW MADE FOR THIS
}, function(failure) {
  res.write('this is the new page and you failed');
  res.end();
});

module.exports = router;
