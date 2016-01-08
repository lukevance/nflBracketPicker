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
  knex('users').where({
    username : req.body.username
    // password: req.body.password
  }).then(function(user) {
    console.log(req.body.password);
    console.log('this is the password from the db: ' + user[0].password);

    function redirect (destination) {
      res.redirect(destination);
    }

    function next (user, status) {
      // console.log(status);
      console.log(user);
      if (status === true) {
        //set cookie
        req.session.user = {
          username : user.username
        };
        console.log(req.session.user);
        redirect('/');
      } else {
        res.send('incorrect username or password');
      }
    }

    if (user[0]) {
      // console.log(user);
      // username/password is correct
      comparePassword(req.body.password, user[0], next);

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
    // console.log(err);
      callback(user, res);
  });
}


module.exports = router;
