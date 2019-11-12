const express = require('express')
const path = require('path')
const mustacheExpress = require('mustache-express');

const app = express()
const fs = require('fs');

app.use(express.static('public/html'))

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');



rawdata = fs.readFileSync('data.json');
data = JSON.parse(rawdata);

var artworks = require('./artworks');
app.use('/artworks', artworks);


app.get('/artworks/:id',function (req, res) {
  res.send(data.artworks)
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
