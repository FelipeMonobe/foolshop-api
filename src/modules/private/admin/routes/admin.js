const controller = require('../controllers/admin.js')

module.exports = router => {
  router.get('/admin/hello', controller.hello)

  return router
}
