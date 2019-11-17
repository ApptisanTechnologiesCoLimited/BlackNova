var express = require('express');
var router = express.Router();
var format = require('date-format');

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

        res.send(results[0]);
    });
})//get one artwork
router.delete('/api/:id',function (req, res) {
    connection.query('delete from project where id ='+req.params.id, function (error, results, fields) {
        if (error) {throw error;}
        res.send(results);
    });


})//add an artwork
router.put('/api/:id',function (req, res) {


    var str = "update project set name = ?, customer_name = ?, category = ?, country = ?, desc = ?, num_room =?, hotel_brand = ?, order_num =? where id = ?";
    var date = [req.body.name,
                req.body.customer_name,
                req.body.category,
                req.body.country,
                req.body.desc,
                req.body.num_room,
                req.body.hotel_brand,
                req.body.order_num,
                req.body.id];

    connection.query(str, function (error, results, fields) {
        if (error) {throw error;}
        res.send(results);
    });


})//update an artwork
router.post('/api',function (req, res) {
    connection.query('insert into artwork(name,product,protocol,changedate,img) values( CONCAT("Artwork ",CEILING(RAND()*900+100)),"a product","cccc","2019-12-1","/images/pic1.jpg");', function (error, results, fields) {
        if (error) {throw error;}
        res.send(results);
    });


})//update an artwork THIS IS A TEMP METHOD, IT WILL BE REMOVED AFTER TESTING









module.exports = router;