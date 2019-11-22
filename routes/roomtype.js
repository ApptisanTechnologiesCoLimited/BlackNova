var express = require('express');
var router = express.Router();

//API Methods
router.get('/api/byproject/:pid', function (req, res) {

    connection.query('SELECT * from roomtype where pid='+req.params.pid, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

})
router.get('/api/:id', function (req, res) {
    connection.query('SELECT * from roomtype where id =' + req.params.id, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
})
router.delete('/api/:id', function (req, res) {
    connection.query('delete from roomtype where id =' + req.params.id, function (error, results, fields) {
        if (error) {
            throw error;
        }
        res.send(results);
    });


})
router.put('/api/:id', function (req, res) {

    var str = "update roomtype set name = ? where id =?";
    var data = [req.body.name, req.params.id];

    connection.query(str, data, function (error, results, fields) {
        if (error) {
            throw error;
        }
        res.send(results);
    });


})
router.post('/api', function (req, res) {
    var sql = 'insert into roomtype(name, pid) values(?,?);';
    var data = [
        req.body.name,
        req.body.pid
    ]
    connection.query(sql, data, function (error, results, fields) {
        if (error) {
            throw error;
        }
        res.send(results);
    });


})


module.exports = router;