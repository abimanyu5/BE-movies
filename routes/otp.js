var express = require('express');
var router = express.Router();
const { otp } = require('../controller');
const { crypt } = require('../middleware');

/* GET users listing. */
router
  .get('/test', function(req, res, next) {
  res.send('respond with a resource');
  })
  .post('/send_email', otp.send_email)
  .post('/verify_otp', otp.verify)

module.exports = router;
