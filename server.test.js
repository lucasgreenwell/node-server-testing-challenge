const request = require('supertest');

const server = require('./server.js');

describe('tests are running', () => {
    it('should run the tests', () => {
        expect(true).toBe(true);
    })
})

describe('GET endpoitn', () => {
    it('should return 200', () => {
        return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
    })
})