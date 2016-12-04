var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;

var mongoose = require('mongoose');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

//Configuration
mongoose.connect(configDB.url);



app.listen
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

app.use(flash()); // use connect-flash for flash messages stored in session

require('./routes/routes.js')(app);

app.listen(port);
console.log('The magic happens on port ' + port);
