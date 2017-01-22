const mongoose = require('mongoose')
validator = require('mongoose-validators');


var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 2
    },
    lastname: {
        type: String,
        required: true,
        minlength: 2
    },
    emailaddress: {
        type: String,
        required: true,
        minlength: 4,
        unique: true,
        validate: validator.isEmail()
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    }
});

userSchema.on('save', function () {
    let user = this;
    console.log('user: ', user);

});

var UserModel = mongoose.model('user', userSchema);

module.exports = {
    UserModel
};
