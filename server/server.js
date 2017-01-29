const express = require('express');

const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join(__dirname, '..', `dist`)));
app.use(morgan('dev'));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server is listing on port ${port}`);
});

module.exports = { app };