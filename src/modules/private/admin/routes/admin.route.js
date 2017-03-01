// @flow

const controller = require('../controllers/admin.controller')
const endpoint: string = '/admin/users'

module.exports = (router: any): any => {
  router.delete(`${endpoint}/:userId/ban`, controller.ban)
  return router
}
