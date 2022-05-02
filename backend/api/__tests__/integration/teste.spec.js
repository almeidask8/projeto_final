const request = require('supertest');
const app = require("../..");

describe('Testing EndPoint Category', function () {

    it('Register Category', function (done) {
        request(app)
            .post('/api/category')
            .send({ Id: 1, Name: "Ti" })
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('List Category', function (done) {
        request(app)
            .get('/api/category')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('Remove Category from ID 1', function (done) {
        request(app)
            .delete('/api/category/1')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('Register Device', function (done) {
        request(app)
            .post('/api/device')
            .send({
                "id": 1,
                "Color": "Cinza",
                "PartNumber": 789123,
                "Category_fk": 2
            })
            .set('Accept', 'application/json')
            .expect(200, done);
    });


    it('List Device', function (done) {
        request(app)
            .get('/api/device')
            .set('Accept', 'application/json')
            .expect(200, done);
    });


});

