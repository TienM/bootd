var express    = require('express'),
    app        = express(),
    path       = require('path'),
    hbs        = require('express-handlebars'),
    morgan     = require('morgan'),
    mongoose   = require('mongoose');

//App Config
  //Views
  app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts'}));
  app.set('view engine', 'hbs');

  //Connect to Database
  mongoose.connect('mongodb://TienM:rain01@ds143608.mlab.com:43608/bootd');
  require('./models/terms.js')(app);
  //Routes
  require('./routes/routes.js')(app);
  //configure app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

  app.use(morgan('dev'));

//Error Stack
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

//production error handler, no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
module.exports = app;

app.listen(process.env.PORT || 3000, function() {
  console.log("The magic happens on port 3000!");
});
