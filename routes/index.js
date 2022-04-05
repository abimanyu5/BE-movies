var express = require('express');
var router = express.Router();
const movies = require('./movies');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index', { title: 'Express' });
    });
    app.use('/movies', movies)
   
};