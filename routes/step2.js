var express = require('express');
var router = express.Router();

//API Methods
router.get('/frames/', function (req, res) {

    connection.query('SELECT * from frame', function (error, results, fields) {
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








module.exports = router;