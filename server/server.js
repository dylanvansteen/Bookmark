const express = require('express');
const body_parser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

const {envKeys} = require('./config/config');
require('./db/db');

mongoose.Promise = global.Promise;
var app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', `dist`)));
app.use(morgan('dev'));

app.get('/asd', (req, res) => {
    res.send({
        orderby: 'F. van Steen',
        author: 'D. van Steen',
        version: '1.0.0'
    });
});

app.use('/api', require('./routes/index'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist/index.html'));
});

app.listen(envKeys.PORT, () => {
    console.log(`Server is listing on port ${envKeys.PORT}`);
});

module.exports = { app };