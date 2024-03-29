var express = require('express');
var app = express();

app.set("view engine", 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.redirect("/index.htm");
});

app.get('/hello', function(req, res) {
    res.render('my_first_ejs', { name: req.query.nameQuery });
});

app.get('/hello/:nameParam', function(req, res) {
    res.render('my_first_ejs', { name: req.params.nameParam });
})

app.listen(8000, function() {
    console.log('Server On!');
})