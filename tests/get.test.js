const request = require('supertest');
const app = require('../index');

describe("get method", function () {
    it("display all users", function (done) {
        request(app).get('/users')
            .expect(200, done);
    })
})