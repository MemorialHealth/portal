var express = require('express')
    bodyParser = require('body-parser');

var app =  express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
    res.render('main', { title: 'MHS Portal' });
});

app.listen(port, function(){
    console.log('MHS Portal listening on port ' + port);
});