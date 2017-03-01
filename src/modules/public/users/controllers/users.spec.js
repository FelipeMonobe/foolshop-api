const request = require('supertest')

const resource = '/users'
const endpoint = request(`http://localhost:3000/api${resource}`)

describe('Users', () => {
  describe(`${resource} [POST]`, () => {
    test('Invalid post object should return status 400 (Bad Request)', () =>
      endpoint
      .post('/', {})
      .expect(500))
  })
})
