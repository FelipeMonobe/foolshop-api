const controller: any = require('../controllers/admin.controller')

module.exports = (router): any => {
  router.delete('/admin/users/:userId/ban', controller.ban)

  return router
}
