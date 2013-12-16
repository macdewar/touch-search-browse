
var http    = require('http');
var connect = require('connect');
var url     = require('url');
//var fs      = require('fs');
//var uuid    = require('node-uuid');


//this is going to provide the backend-fixture to the test environment

var docroot = './';

var app = connect.use(
    connect.static(docroot)
  ).use(
    connect.bodyParser()
  ).use(
    connect.query()
  ).use(
    function(req, res){
      res.writeHead(200, {'Content-Type':'text/plain'});
      res.end('Server listening on 127.0.0.1:8125\n');
   });


http.createServer(app).listen(8125, "127.0.0.1");
console.log('Server running on localhost:8125');

