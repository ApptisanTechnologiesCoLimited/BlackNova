var express = require('express');
var router = express.Router();


router.get('/artworks', function (req, res) {
    //res.send(data.artworks)
    res.render('index', { animal: 'Alligator' });
})//get all