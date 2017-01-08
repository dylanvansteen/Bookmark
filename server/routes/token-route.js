const express = require('express')
const router = express.Router();
const _ = require('lodash');
const {ObjectID} = require('mongodb');

const {FolderModel} = require('./../models/folder-model');

router.post('/', function (req, res) {
    const body = _.pick(req.body, ['username', 'password']);

    // new FolderModel(body).save().then((folder) => {
    //     if (!folder)
    //         return res.status(400).send();

    //     res.send(folder);
    // }).catch(err => {
    //     return res.status(400).send();
    // });

    res.status(200).send(body);
});

module.exports = router;


