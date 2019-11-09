const express = require('express')
const app = express()
const fs = require('fs');

rawdata = fs.readFileSync('data.json');
data = JSON.parse(rawdata);

app.get('/artworks', (req, res) => res.send(data.artworks))



app.listen(3000, () => console.log('Example app listening on port 3000!'))
