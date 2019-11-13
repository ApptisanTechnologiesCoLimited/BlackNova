const express = require('express')
const path = require('path')
const mustacheExpress = require('mustache-express');
var format = require('date-format');

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






app.get('/artwork/:id',function (req, res) {
  connection.query('SELECT * from artwork where id ='+req.params.id, function (error, results, fields) {
    if (error) throw error;
    var artwork = results[0];

    res.render('single-artwork',{"artwork":artwork});
  });
})//get one....





app.post('/artworks',function (req, res) {
  res.send(1)// 1 = success, 0 = fail
})//add one

app.put('/artworks/:id', function (req, res) {
  res.send(1)
})//update one

app.delete('/artworks/:id',function (req, res) {
  res.send(1)
})//delete one



app.listen(3000, () => console.log('Example app listening on port 3000!'))
