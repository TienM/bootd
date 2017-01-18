var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//term Schema
var TermSchema = new Schema({
  term: String,
  defintion: String,
  level: String,
  language: String
});

//return the model
module.exports = mongoose.model('Term', TermSchema);
