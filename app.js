var express = require('express')
var app = express()

//Template Engine
// var mustacheExpress = require('mustache-express');
// app.engine('mustache', mustacheExpress());
// app.set('view engine', 'mustache');
// app.set('views', __dirname + '/views');
var cors = require('cors')
app.use(cors())


//Start Database
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'rm-wz9147un8a8u1q73t7o.mysql.rds.aliyuncs.com',
    user: 'blacknova',
    password: 'Apptisan123',
    database: 'blacknova'
});
global.connection = connection;

//Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded


//Other settings
app.use(express.static('public'))

//Config Routes
app.use('/artwork', require('./routes/artwork'));
app.use('/project', require('./routes/project'));
app.use('/roomtype', require('./routes/roomtype'));
app.use('/product', require('./routes/product'));
app.use('/user', require('./routes/user'));


//Server Starts
app.listen(3000, () => console.log('Example app listening on port 3000!'))


