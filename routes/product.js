var express = require('express');
var router = express.Router();
var format = require('date-format');

//API Methods
router.get('/api', function (req, res) {

    connection.query('SELECT * from product', function (error, results, fields) {
        if (error) throw error;
        var artworks =[];
        for (i = 0; i < results.length; i++) {
            results[i].changedate = format("dd.MM.yyyy",results[i].changedate);
            artworks.push(results[i]);
        }
        res.send(artworks);
    });

})
router.get('/api/:id',function (req, res) {
    connection.query('SELECT * from product where id ='+req.params.id, function (error, results, fields) {
        if (error) throw error;
        var artwork = results[0];

        res.send(artwork);
    });
})
router.delete('/api/:id',function (req, res) {
    connection.query('delete from product where id ='+req.params.id, function (error, results, fields) {
        if (error) {throw error;}
        console.log(results);
        res.send(results);
    });


})
router.put('/api/:id',function (req, res) {

    var str = "update product set name =?, type=?, artwork=?, quantity=? where id =?";
    var data =[
        req.body.name,
        req.body.type,
        req.body.artwork,
        req.body.quantity,
        req.params.id
    ];
    connection.query(str,data, function (error, results, fields) {
        if (error) {throw error;}
        res.send(results);
    });


})
router.post('/api',function (req, res) {
    var str = "insert into product(name,type,artwork,quantity) values(?,?,?,?)";
    var data =[
        req.body.name,
        req.body.type,
        req.body.artwork,
        req.body.quantity
    ];
    connection.query(str,data, function (error, results, fields) {
        if (error) {throw error;}
        res.send(results);
    });


})








module.exports = router;