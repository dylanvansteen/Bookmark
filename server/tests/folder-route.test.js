const request = require('supertest');
const expect = require('expect');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {FolderModel} = require('./../models/folder-model');

const route = '/folder';
const folders = [
    { _id: new ObjectID(), name: 'Home' },
    { _id: new ObjectID(), name: 'Work' },
    { _id: new ObjectID(), name: 'Private' }
]

beforeEach((done) => {
    FolderModel.remove().then(() => {
        FolderModel.insertMany(folders).then(() => {
            done();
        });
    });
});

describe(route, () => {
    describe('/ GET', () => {
        it('should return items', (done) => {
            request(app)
                .get(`${route}/`)
                .expect(200)
                .expect((res) => {
                    expect(res.body.length).toBeMoreThan(2);
                })
                .end(done);
        });
    });

    describe('/ POST', () => {
        it('should create an new item', (done) => {
            const name = 'Vacations';
            request(app)
                .post(`${route}/`)
                .send({
                    name
                })
                .expect(200)
                .expect((res) => {
                    expect(res.body.name).toBe(name);
                })
                .end((err) => {
                    if (err)
                        return done(err);

                    FolderModel.find({ name: name }).then(folder => {
                        expect(folder).toExist();
                        done();
                    });
                });
        });

        it('should give an 400', (done) => {
            request(app)
                .post(`${route}/`)
                .send({
                    name: 'a'
                })
                .expect(400)
                .end(done);
        });
    });

    describe('/ PATCH', () => {
        it('should create an ppdate item', (done) => {
            const name = 'Vacations';
            request(app)
                .patch(`${route}/${folders[0]._id}`)
                .send({
                    name
                })
                .expect(200)
                .expect((res) => {
                    expect(res.body.name).toBe(name);
                })
                .end((err) => {
                    if (err)
                        return done(err);

                    FolderModel.find({ name: name }).then(folder => {
                        expect(folder).toExist();
                        done();
                    });
                });
        });

        it('should give an 400', (done) => {
            request(app)
                .patch(`${route}/${folders[0]._id}`)
                .send({
                    name: 'a'
                })
                .expect(400)
                .end(done);
        });
    });

    describe('/:id GET', () => {
        it('should give an existing item back based on id', (done) => {
            let id = folders[0]._id;

            request(app)
                .get(`${route}/${id}`)
                .expect(200)
                .expect((res) => {
                    expect(res.body.name).toBe(folders[0].name);
                })
                .end(done);
        });

        it('should give an 404', (done) => {
            let id = new ObjectID();

            request(app)
                .get(`${route}/${id}`)
                .expect(404)
                .end(done);
        });
    });

    describe('/:id DELETE', () => {
        it('should delete an existing item back based on id', (done) => {
            let id = folders[0]._id;

            request(app)
                .delete(`${route}/${id}`)
                .expect(204)
                .end((err, res) => {
                    if (err)
                        return done(err)

                    FolderModel.findById(id).then(folder => {
                        expect(folder).toNotExist();
                        done();
                    });
                });
        });

        it('should return an 404', (done) => {
            let id = new ObjectID();

            request(app)
                .delete(`${route}/${id}`)
                .expect(404)
                .end(done);
        });
    });
});