var express = require('express');
var router = express.Router();
var format = require('date-format');

//API Methods
router.get('/api/byroomtype/:rid', function (req, res) {

    connection.query('SELECT * from product where rid ='+req.params.rid, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
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

    var str = "update product set name =?, type=?, aid=?, quantity=? where id =?";
    var data =[
        req.body.name,
        req.body.type,
        req.body.aid,
        req.body.quantity,
        req.params.id
    ];
    connection.query(str,data, function (error, results, fields) {
        if (error) {throw error;}
        res.send(results);
    });


})
router.post('/api',function (req, res) {
    var str = "insert into product(name,type,quantity,format, material, aid, rid) values(?,?,?,?,?,?,?)";
    var data =[
        req.body.name,
        req.body.type,
        req.body.quantity,
        req.body.format,
        req.body.material,
        req.body.aid,
        req.body.rid,
    ];
    connection.query(str,data, function (error, results, fields) {
        if (error) {throw error;}
        res.send(results);
    });


})








module.exports = router;