var express = require('express');
var router = express.Router();

//API Methods
router.get('/api', function (req, res) {

    connection.query('SELECT * from user' + '', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

})

router.get('/api/:id', function (req, res) {
    connection.query('SELECT * from user where id =' + req.params.id, function (error, results, fields) {
        if (error) throw error;

        res.send(results);
    });
})
router.delete('/api/:id', function (req, res) {
    connection.query('delete from user where id =' + req.params.id, function (error, results, fields) {
        if (error) {
            throw error;
        }
        res.send(results);
    });


})
router.put('/api/:id', function (req, res) {

    var str = "update user set title = ?, first_name=?, last_name=?,country=?, city=?, preferred_currency=?, email=?, phone=?, password=?, subscribed=?, role=? where id =?";
    var data = [
        req.body.title,
        req.body.first_name,
        req.body.last_name,
        req.body.country,
        req.body.city,
        req.body.preferred_currency,
        req.body.email,
        req.body.phone,
        req.body.password,
        req.body.subscribed,
        req.body.role,
        req.params.id];

    connection.query(str, data, function (error, results, fields) {
        if (error) {
            throw error;
        }
        res.send(results);
    });


})
router.post('/api', function (req, res) {
    var sql = 'insert into user(title, first_name, last_name,country, city, preferred_currency, email, phone, password,subscribed,role) values(?,?,?,?,?,?,?,?,?,?,?);';
    var data = [
        req.body.title,
        req.body.first_name,
        req.body.last_name,
        req.body.country,
        req.body.city,
        req.body.preferred_currency,
        req.body.email,
        req.body.phone,
        req.body.password,
        req.body.subscribed,
        req.body.role
    ]
    connection.query(sql, data, function (error, results, fields) {
        if (error) {
            throw error;
        }
        res.send(results);
    });


})

module.exports = router;
