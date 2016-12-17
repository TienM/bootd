var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var flash    = require('connect-flash');

mongoose.connect(process.env.MONGO_URL);

app.set('view engine', 'ejs');
app.use(flash()); //for flash messages stored in session

require('./routes/routes.js')(app);


app.listen(3000, function() {
  console.log("The magic happens on port 3000!");
});

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
