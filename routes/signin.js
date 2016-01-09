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
    username: req.body.username
  }).then(function(user) {
    function redirect(destination) {
      res.redirect(destination);
    }

    function next(user, status) {
      // console.log(status);
      // console.log(user);
      if (status === true) {
        //set cookie
        // console.log(user.id);
        req.session.user = {
          username: user.username,
          id: user.id
        };
        // console.log(req.session.user);
        res.redirect('/users/' +req.session.user.id);

      } else {
        res.render('signin', {
          message: "Incorrect username or password"
        });
      }
    }
    if (user[0]) {
      // console.log(user);
      // username/password is correct
      comparePassword(req.body.password, user[0], next);
    } else {
      res.send('incorrect username or password');
    }
  }).catch(function(err) {
    // if whole thing doesn't work
    res.render('signin', {
    message: "Incorrect username or password"
    });
  });
});

function comparePassword(password, user, callback) {
  bcrypt.compare(password, user.password, function(err, res) {
    // console.log(err);
    callback(user, res);
  });
}


module.exports = router;
