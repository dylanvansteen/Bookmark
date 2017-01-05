const mongoose = require('mongoose');

const {envKeys} = require('./../config/config');

mongoose.connect(envKeys.MONGO_URI, (err) => {
    if (err) {
        console.log('Unable to connect to mongo!!');
    }
})