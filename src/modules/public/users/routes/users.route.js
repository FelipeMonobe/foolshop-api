// @flow

const controller: any = require('../controllers/users.controller')
const endpoint: string = '/users'

module.exports = (router: any): any => {
  router.post(endpoint, controller.create)

  return router
}
