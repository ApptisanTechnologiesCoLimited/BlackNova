var express = require('express');
var router = express.Router();

//API Methods
router.get('/api', function (req, res) {

    connection.query('SELECT * from roomtype', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

})//get all..
router.get('/api/:id',function (req, res) {
    connection.query('SELECT * from roomtype where id ='+req.params.id, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
})//get one artwork
router.delete('/api/:id',function (req, res) {
    connection.query('delete from roomtype where id ='+req.params.id, function (error, results, fields) {
        if (error) {throw error;}
        res.send(results);
    });


})//add an artwork
router.put('/api/:id',function (req, res) {

    var str = "update roomtype set name = ? where id =?";
    var data = [req.body.name,req.params.id];

    connection.query(str,data, function (error, results, fields) {
        if (error) {throw error;}
        res.send(results);
    });


})//update an artwork
router.post('/api',function (req, res) {
    var sql = 'insert into roomtype(name) values(?);';
    var data =[
        req.body.name
    ]
    connection.query(sql,data, function (error, results, fields) {
        if (error) {throw error;}
        res.send(results);
    });


})//update an artwork THIS IS A TEMP METHOD, IT WILL BE REMOVED AFTER TESTING


//Page Method
// router.get('/page', function (req, res) {
//
//
//     res.render('artworks');
//
// })//get all..
// router.get('/page/:id',function (req, res) {
//     connection.query('SELECT * from artwork where id ='+req.params.id, function (error, results, fields) {
//         if (error) throw error;
//         var artwork = results[0];
//
//         res.render('single-artwork',{"artwork":artwork});
//     });
// })//get one artwork







module.exports = router;