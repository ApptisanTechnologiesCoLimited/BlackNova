var express = require('express');
var router = express.Router();

//API Methods
router.get('/api', function (req, res) {

    connection.query('SELECT * from project', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

})//get all..
router.get('/api/:id',function (req, res) {
    connection.query('SELECT * from project where id ='+req.params.id, function (error, results, fields) {
        if (error) throw error;

        res.send(results);
    });
})//get one artwork
router.delete('/api/:id',function (req, res) {
    connection.query('delete from project where id ='+req.params.id, function (error, results, fields) {
        if (error) {throw error;}
        res.send(results);
    });


})//add an artwork
router.put('/api/:id',function (req, res) {


    var str = "update project set name = ?, customer_name = ?, category = ?, country = ?, description = ?, num_room =?, hotel_brand = ?, order_num =? where id = ?";
    var data = [req.body.name,
                req.body.customer_name,
                req.body.category,
                req.body.country,
                req.body.desc,
                req.body.num_room,
                req.body.hotel_brand,
                req.body.order_num,
                req.params.id];

    connection.query(str, data,function (error, results, fields) {
        if (error) {throw error;}
        res.send(results);
    });


})//update an project
router.post('/api',function (req, res) {

    var str = 'insert into project(name, customer_name, category, country, description, num_room, hotel_brand, order_num) values(?,?,?,?,?,?,?,?);';
    var data = [req.body.name,
        req.body.customer_name,
        req.body.category,
        req.body.country,
        req.body.desc,
        req.body.num_room,
        req.body.hotel_brand,
        req.body.order_num];
    connection.query(str,data, function (error, results, fields) {
        if (error) {throw error;}
        res.send(results);
    });


})//add a project









module.exports = router;