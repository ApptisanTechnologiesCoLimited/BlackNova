const express = require('express')
const path = require('path')
const mustacheExpress = require('mustache-express');
var format = require('date-format');
var bodyParser = require('body-parser');
var mysql = require('mysql');



const app = express()
const fs = require('fs');

var connection = mysql.createConnection({
  host     : 'rm-wz9147un8a8u1q73t7o.mysql.rds.aliyuncs.com',
  user     : 'blacknova',
  password : 'Apptisan123',
  database : 'blacknova'
});

app.use(express.static('public'))
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


rawdata = fs.readFileSync('data.json');
data = JSON.parse(rawdata);


app.get('/artworks', function (req, res) {

  connection.query('SELECT * from artwork', function (error, results, fields) {
    if (error) throw error;
    var artworks =[];
    for (i = 0; i < results.length; i++) {
      results[i].changedate = format("dd.MM.yyyy",results[i].changedate);
      artworks.push(results[i]);
    }
  res.render('artworks',{"artworks":artworks});
  });

})//get all..
app.get('/artworks/:page_id', function (req, res) {

  connection.query('SELECT * from artwork', function (error, results, fields) {
    if (error) throw error;
    var artworks =[];
    for (i = 0; i < results.length; i++) {
      results[i].changedate = format("dd.MM.yyyy",results[i].changedate);
      artworks.push(results[i]);
    }
    res.render('artworks',{"artworks":artworks});
  });

})//get by pages..
app.get('/artwork/:id',function (req, res) {
  connection.query('SELECT * from artwork where id ='+req.params.id, function (error, results, fields) {
    if (error) throw error;
    var artwork = results[0];

    res.render('single-artwork',{"artwork":artwork});
  });
})//get one artwork
app.delete('/artwork/:id',function (req, res) {
  connection.query('delete from artwork where id ='+req.params.id, function (error, results, fields) {
    if (error) {throw error;}
    res.send("success");
  });


})//add an artwork
app.post('/artwork/',function (req, res) {
  connection.query('insert into artwork(name,product,protocol,changedate,img) values( CONCAT("Artwork ",CEILING(RAND()*900+100)),"a product","cccc","2019-12-1","/images/pic1.jpg");', function (error, results, fields) {
    if (error) {throw error;}
    res.send("success");
  });


})//update an artwork
app.put('/artwork/:id',function (req, res) {

  var str = "update artwork set name = '"+req.body.name+"', protocol = '"+req.body.protocol+"' where id = "+req.params.id;

  connection.query(str, function (error, results, fields) {
    if (error) {throw error;}
    res.send("success");
  });


})//update an artwork







app.listen(3000, () => console.log('Example app listening on port 3000!'))
