var express = require('express');
var app = express();
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId;
var Factory = require("./module.factory.js");

mongoose.connect('mongodb://localhost/mydatabase');
var db = mongoose.connection;

var factory = new Factory(Schema,mongoose);
factory.createSchemas();
factory.insertPeople();

app.get('/ping', function(req, res) {
    res.send({ping:'hello this is server and I am alive!'});
});

app.get('/ping/:id', function(req, res) {
    res.send({ping:'hello this is server and I am got '+req.params.id});
});

app.get('/person/hektor', function(req, res) {
     var resp = factory.getPerson({name:'hektor'},res);
});

app.listen(3013)
console.log('Server running on port 3013');