var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var flash    = require('connect-flash');

app.set('view engine', 'ejs');
app.use(flash()); //for flash messages stored in session

require('./routes/routes.js')(app);

app.listen(3000, function() {
  console.log("The magic happens on port 3000!");
});
