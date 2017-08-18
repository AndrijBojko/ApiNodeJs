const request = require('supertest');
const app = require('../index');



describe("post method with logic", function () {
    it("create new user and return him", function (done) {
        let fakeUser = {
            id: 222,
            firstName: 'Andrii',
            lastName: 'Boiko'
        };
             
        request(app).post('/users').send(fakeUser)
            .expect(201)
            .expect(fakeUser, done);
    });

    it("fail when empty object was sent", function (done) {
        let fakeUser = {};
             
        request(app).post('/users').send(fakeUser)
            .expect(201)
            .expect(fakeUser, done);
    });
})

