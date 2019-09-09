const express = require('express');
const app =  express();
require('./config/database');
require('dotenv/config');
const cors = require('cors');

const bodyParser = require('body-parser');

//Middleware
app.use(cors());

app.use(bodyParser.json());

//import Route
const postsRoute = require('./routes/posts');
const requestRoute = require('./routes/request');


app.use('/posts', postsRoute);
app.use('/request', requestRoute);

//Routes
app.get('/', (req, res) => {
    res.send('Node RESTful API start!!');
});

//how to we start listening to the server.
app.listen(3000);