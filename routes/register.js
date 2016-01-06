var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var postgres = require('pg');
var knex = require('knex');

var knexOptions = {
  client: 'pg', //tell knex to use postgres driver module pg
  connection: {
    host: '127.0.0.1', //connect to local db
    port: 5432, //on the default postgres port
    user: 'lukevance', //put your username here
    debug: false, //when facing issues can be nice to set to true
    database: 'nfl_picker' //name of database
  }
};

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
router.get('/signup', function(req, res, next) {
  res.render('signup', {title: 'NFL Playoff Bracket Picker', message: 'Sign up here for your bracket.'});
});

// get post from form
router.post('/signup', function(req, res, next) {
  // get body from bodyParser and post to db from knex
});

module.exports = router;
