const request = require('supertest');
const app = require('../index');

describe("get by id method", function () {
    it("display user by id", function (done) {
        request(app).get('/users/id')
            .expect(200, done);
    })
})