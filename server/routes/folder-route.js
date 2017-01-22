const express = require('express')
const router = express.Router();
const _ = require('lodash');
const {ObjectID} = require('mongodb');

const {FolderModel} = require('./../models/folder-model');

router.get('/', function (req, res) {
    FolderModel.find().then((folders) => {
        res.send(folders)
    });
});

router.post('/', function (req, res) {
    const body = _.pick(req.body, ['name']);

    new FolderModel(body).save().then((folder) => {
        if (!folder)
            return res.status(400).send();

        res.send(folder);
    }).catch(err => {
        return res.status(400).send(err);
    });
});

router.patch('/:id', function (req, res) {
    const id = req.params['id'];
    const body = _.pick(req.body, ['name']);

    if (!ObjectID.isValid(id))
        return res.status(404).send();

    FolderModel.findByIdAndUpdate(id, body, { new: true }).then(folder => {
        if (!folder)
            return res.status(404).send();
        res.send(folder);
    }).catch(err => {
        return res.status(400).send();
    });
});


router.get('/:id', function (req, res) {
    const id = req.params['id'];

    if (!ObjectID.isValid(id))
        return res.status(404).send();

    FolderModel.findById(id).then(folder => {
        if (!folder)
            return res.status(404).send();

        res.send(folder);
    }).catch(err => {
        return res.status(400).send();
    });
});

router.delete('/:id', function (req, res) {
    const id = req.params['id'];

    if (!ObjectID.isValid(id))
        return res.status(404).send();

    FolderModel.findByIdAndRemove(id).then(folder => {
        if (!folder)
            return res.status(404).send();

        res.status(204).send();
    }).catch(err => {
        return res.status(400).send();
    });
});

module.exports = router;


