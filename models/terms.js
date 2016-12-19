var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var termSchema = new Schema({
  term: {type: 'string', required: true},
  definition: {type: 'string', required: true},
  level: {type: 'string'}
});

module.exports = mongoose.model('Term', termSchema);
