const controller = require('../controllers/admin.controller')

module.exports = router => {
  router.delete('/admin/users/:userId/ban', controller.ban)

  return router
}
