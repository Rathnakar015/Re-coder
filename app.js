var express = require('express');
var path=require('path');
var logger=require('morgan');
var cookieParser =require('cookie-parser');
var bodyParser =require('body-parser');
var route =require('./routes/index');
var starter =require('./routes/starter');
var main =require('./routes/main');
var biryani =require('./routes/biryani');

var app = express();

app.locals.videodata = require('./videodata.json');

app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.use('/starter',starter);
app.use('/main',main);
app.use('/biryani',biryani);


app.get('/', function(req, res){

  res.render('logo.ejs', {
       setTimeout: 5000
  });

});

app.get('/home', function(req, res){
  res.render('index.ejs', {


  });
});

app.get('/starter', function(req, res){
  res.render('starter.ejs', {

  });
});
app.get('/main', function(req, res){
  res.render('main.ejs', {

  });
});
app.get('/biryani', function(req, res){
  res.render('biryani.ejs', {

  });
});

app.get('/contact', function(req, res){
  res.render('contact.ejs', {
    title: 'Contact',
    nav: ['Home','About','Contact']
  });
});


app.listen(3000);