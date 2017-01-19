var express = require('express'),
    router  = express.Router(),
    Term    = require('../models/terms');

    router.get('/term/:title', function(req,res){
      var title = req.params.title;
      Product.find({'term' : term }, function(err, Term){
    	console.log(Term);
        res.render('term', { Term: Term });
    	});
    });


module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('dictionary.hbs', { title: 'Bootd. | Home' });
  });
  app.get('/languages', function(req, res) {
    res.render('languages.hbs', { title: 'Bootd. | Languages'});
  });
  app.get('/resources', function(req, res) {
    res.render('resources.hbs', { title: 'Bootd. | Resources'});
  });
  app.get('/studytips', function(req, res) {
    res.render('studytips.hbs', { title: 'Bootd. | Study Tips'});
  });
  app.get('/libraries', function(req, res) {
    res.render('libraries.hbs', { title: 'Bootd. | Libraries'});
  });
  app.get('/cheats', function(req, res) {
    res.render('cheats.hbs', { title: 'Bootd. | References'});
  });
  app.get('/chill', function(req, res) {
    res.render('chill.hbs', { title: 'Bootd | Chill'});
  });
};

router.get('/all', function(req, res, next) {
  Product.find({'term'},function(err, Term){
  console.log(term.length);
  res.render('shop/index', { title: 'Menu', Product: Product });
});
});

module.exports = router;
