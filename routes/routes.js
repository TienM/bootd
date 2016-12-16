module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index.ejs');
  });
  app.get('/languages', function(req, res) {
    res.render('languages.ejs')
  });
  app.get('/dictionary', function(req, res) {
    res.render('dictionary.ejs')
  });
  app.get('/resources', function(req, res) {
    res.render('resources.ejs')
  });
};
