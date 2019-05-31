


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./routes/api');
const users = require('./routes/login.route');
const mongoose = require('./db');


var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json()); 
app.use('/api',api);
app.use('/users',users);


app.listen(3000, () => console.log("server started successfully."));
