var express = require('express');
    router  = express.Router();
    db = mongojs(dbconfig, ['terms']);

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
