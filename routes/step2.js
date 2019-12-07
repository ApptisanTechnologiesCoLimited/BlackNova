var express = require('express');
var router = express.Router();

//API Methods
router.get('/frames/', function (req, res) {

    connection.query('SELECT * from frame', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

})//get all..

router.get('/frame/:fid', function (req, res) {

    connection.query('SELECT * from frame where id = '+req.params.fid, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

})//get all..

router.get('/buttons/:fid', function (req, res) {

    connection.query('SELECT * from button where fid='+req.params.fid, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

})//get all..

router.get('/button/:id', function (req, res) {

    connection.query('SELECT * from button where id='+req.params.id, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

})//get all..








module.exports = router;