const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');

const {envKeys} = require('./config/config');
require('./db/db');

mongoose.Promise = global.Promise;
var app = express();

app.use(body_parser.json());

app.get('/', (req, res) => {
    res.send({
        orderby: 'F. van Steen',
        author: 'D. van Steen',
        version: '1.0.0'
    });
});

app.use('/folder', require('./routes/folder-route'));

app.listen(envKeys.PORT, () => {
    console.log(`Server is listing on port ${envKeys.PORT}`);
});

module.exports = { app };