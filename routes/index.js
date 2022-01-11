var express = require('express');
var router = express.Router();
const user = require('./users');
const otp = require('./otp');


/* GET home page. */
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index', { title: 'Express' });
    });
    app.use('/user', user)
    app.use('/otp', otp);
   
};