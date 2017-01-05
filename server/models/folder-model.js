const mongoose = require('mongoose');

var FolderModel = mongoose.model('folder', {
    name: {
        type: String,
        require: true,
        minlength: 2
    }
});

module.exports = {
    FolderModel
};
