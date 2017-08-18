const request = require('supertest');
const app = require('../index');

describe("delete method", function () {
    it("delete user by id", function (done) {
        request(app).delete('/users/id')
            .expect(204, done);
    })
})