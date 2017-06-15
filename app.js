var express             = require('express');
var path                = require('path');
var favicon             = require('serve-favicon');
var logger              = require('morgan');
var cookieParser        = require('cookie-parser');
var bodyParser          = require('body-parser');
var mongoose            = require('mongoose');
mongoose.Promise = require('bluebird');

var expresssSanitizer = require('express-sanitizer');

var index               = require('./routes/index');
var error               = require('./routes/error');
var aboutus             = require('./routes/aboutus');
var users               = require('./routes/users');
var contact             = require('./routes/contact');
var campgrounds         = require('./routes/campgrounds');
var campgroundsnew = require('./routes/campgrounds/new');
var campgroundsdetail = require('./routes/campgrounds/details');
var commentsnew = require('./routes/comments/new');


var seedTheDB = require('./public/javascripts/databseSeedFile');

var app = express();

seedTheDB();


/* Database setup with mongo */
mongoose.connect("mongodb://localhost/yelpikloniks");


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* This is the list of routes used by the application*/

app.use('/', index);
app.use('/aboutus', aboutus);
app.use('/users', users);
app.use('/contact', contact);
app.use('/campgrounds', campgrounds);
app.use('/campgrounds/new', campgroundsnew);
app.use('/campgrounds/:id', campgroundsdetail);
app.use('/campgrounds/:id/comments/new', commentsnew);
app.use('/*', error);

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
  res.render('error');
});

module.exports = app;
