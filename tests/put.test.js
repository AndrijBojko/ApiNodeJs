const request = require('supertest');
const app = require('../index');

describe("put method", function () {
    it("update user by id", function (done) {
        request(app).put('/users/id')
            .expect(200, done);
    })
})