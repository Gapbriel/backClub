var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var config = require('config');


var socios = require('./routes/Socios');


// =============================================================================
// Express CONFIGURATION
// =============================================================================

var app = express();

var httpPort = config.get('port');
app.set('port', process.env.PORT || httpPort);
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/socios', socios);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

// =============================================================================
// DB CONFIGURATION
// =============================================================================

var dbUrl = 'mongodb://' + config.mongodb.instances[0].host + ':' + config.mongodb.instances[0].port + '/' + config.mongodb.db;
app.set('dbUrl', dbUrl);
app.use(function (req, res, next) {

    //readyState = 1 means that connection was established
    if (mongoose.connection.readyState !== 1) {
        return next(new Error('Database connection is not established. Mongoose readyState: ' + mongoose.connection.readyState));
    }

    next();
});


module.exports = app;
