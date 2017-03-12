const request = require('supertest')

const resource = '/users'
const endpoint = request(`http://${process.env.API_HOST}:${process.env.API_PORT}/api${resource}`)
    
describe('Users', () => {
  describe(`${resource} [POST]`, () => {
    test('Invalid post object should return status 400 (Bad Request)', () =>
      endpoint
      .post('/', {})
      .expect(500))
  })
})

