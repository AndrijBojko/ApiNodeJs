const request = require('supertest');
const app = require('../index');

var expected = [ { id: 1, firstName: 'Andrii', lastName: 'Boiko' } ]

describe("get method", function () {
    it("display all users", function (done) {
        request(app).get('/users')
            .expect(200)
            .expect(expected, done);
    })
})
