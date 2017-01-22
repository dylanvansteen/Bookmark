const express = require('express')
const router = express.Router();
const _ = require('lodash');
const {ObjectID} = require('mongodb');

const {UserModel} = require('./../models/user-model');

router.post('/', function (req, res) {
    const body = _.pick(req.body, ['firstname', 'lastname', 'emailaddress', 'password']);

    new UserModel(body).save().then((user) => {
        if (!user)
            return res.status(400).send();

        res.send(user);
    }, rej => {
        res.send(rej);
    }).catch(err => {
        return res.status(400).send();
    });

    res.status(200).send(body);
});

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


