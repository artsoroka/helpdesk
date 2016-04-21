var express    = require('express'); 
var bodyParser = require('body-parser'); 
var app        = express();
var api        = require('./api'); 
var config     = require('../config'); 

app.use(express.static(config.APP.public_dir)); 
app.use(bodyParser.json()); 

app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 

app.use('/api/v1', api); 

app.get('/', function(req, res){
    res.render('mainpage'); 
}); 

module.exports = app; 