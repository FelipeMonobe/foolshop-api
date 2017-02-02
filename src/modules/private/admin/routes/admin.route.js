const controller = require('../controllers/admin.controller')

module.exports = router => {
  router.get('/admin/hello', controller.hello)

  return router
}
