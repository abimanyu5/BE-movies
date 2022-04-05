var express = require('express');
var router = express.Router();
const { movies } = require('../controller');
const { auth } = require('../middleware');

/* GET users listing. */
router
  .get('/test', function(req, res, next) {
  res.send('respond with a resource');
  })
  .get('/all', movies.findAll)
  .get('/one/:id', movies.findById)
  .post('/create', movies.create)
  .put('/update/:id', movies.update)
  .delete('/delete/:id', movies.delete)

module.exports = router;