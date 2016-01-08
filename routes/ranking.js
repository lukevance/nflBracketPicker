var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var pg = require('pg');
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});

router.get('/', function(req, res, next) {
  knex('users').select('username', 'score').orderBy('score', 'desc').then(function(userInfo){
    res.render('ranking', {
      title: 'Scores',
      userInfo: userInfo
     });
  })
});

module.exports = router;
