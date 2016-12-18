module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index.hbs', { title: 'Bootd. | Home' });
  });
  app.get('/languages', function(req, res) {
    res.render('languages.hbs', { title: 'Bootd. | Languages'});
  });
  app.get('/dictionary', function(req, res) {
    res.render('dictionary.hbs', { title: 'Bootd. | Dictionary' });
  });
  app.get('/resources', function(req, res) {
    res.render('resources.hbs', { title: 'Bootd. | Resources'});
  });
};
