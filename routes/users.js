var express = require('express');
var router = express.Router();
const { users } = require('../controller');
const { auth } = require('../middleware');

/* GET users listing. */
router
  .get('/test', function(req, res, next) {
  res.send('respond with a resource');
  })
  .get('/all', auth , users.findAll)
  .post('/create', users.create)
  .post('/signup', users.signup)
  .post('/signin', users.signin)

module.exports = router;
