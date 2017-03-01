// @flow

const controller = require('../controllers/signin.controller')
const endpoint: string = '/users/signin'

module.exports = (router: any): any => {
  router.post(endpoint, controller.authenticate)
  return router
}
