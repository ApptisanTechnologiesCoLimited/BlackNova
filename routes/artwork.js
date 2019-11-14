var express = require('express');
var router = express.Router();
var format = require('date-format');

router.get('/all', function (req, res) {

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
router.get('/:id',function (req, res) {
    connection.query('SELECT * from artwork where id ='+req.params.id, function (error, results, fields) {
        if (error) throw error;
        var artwork = results[0];

        res.render('single-artwork',{"artwork":artwork});
    });
})//get one artwork
router.delete('/:id',function (req, res) {
    connection.query('delete from artwork where id ='+req.params.id, function (error, results, fields) {
        if (error) {throw error;}
        res.send("success");
    });


})//add an artwork
router.post('/',function (req, res) {
    connection.query('insert into artwork(name,product,protocol,changedate,img) values( CONCAT("Artwork ",CEILING(RAND()*900+100)),"a product","cccc","2019-12-1","/images/pic1.jpg");', function (error, results, fields) {
        if (error) {throw error;}
        res.send("success");
    });


})//update an artwork
router.put('/:id',function (req, res) {

    var str = "update artwork set name = '"+req.body.name+"', protocol = '"+req.body.protocol+"' where id = "+req.params.id;

    connection.query(str, function (error, results, fields) {
        if (error) {throw error;}
        res.send("success");
    });


})//update an artwork

module.exports = router;