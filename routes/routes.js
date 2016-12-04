module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });
    app.get('/terms', function(req, res){
      res.render('terms.ejs');
    });
    app.get('/philosophies', function(req, res) {
      res.render('philosophies.ejs');
    });
    app.get('/links', function(req, res) {
      res.render('links.ejs');
    });
};
