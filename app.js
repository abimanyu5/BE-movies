var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
var swaggerUi = require('swagger-ui-express')
var swaggerFile = require('./swagger.json')
var indexRouter = require('./routes/index');
const db = require("./model");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
 // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


indexRouter(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}.`);
// });
// process.on('unhandledRejection', (reason) => {
//     console.log('Reason : ' + reason);
//     // process.exit(1);
// });
db.sequelize.sync().then(() => {
  console.log("db connect");
});

module.exports = app;
