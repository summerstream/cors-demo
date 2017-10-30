var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/api1',function(req,res){
    res.send('Hello');
});

app.post('/api2',function(req,res){
    res.send('Hello');
});

app.post('/api3',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Content-Type','application/json');
    res.send('Hello');
});

app.options('/api3',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','POST,GET');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    // res.setHeader('Access-Control-Max-Age',86400);
    res.send('allowed.');
});

app.get('/jsonp',function(req,res){
    var p = req.query['callback'];
    res.send(`${p}('hello,world')`);
});

app.use(express.static('public'));

app.listen(3000)