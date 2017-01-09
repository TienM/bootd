var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://TienM:rain01@ds143608.mlab.com:43608/bootd', ['terms']);

//All Tasks
router.get('/terms', function(req, res, next){
  db.terms.find(function(err, terms){
    if (err) {
      res.send(err);
    }
    res.json(terms);
  });
});

module.exports = router;
