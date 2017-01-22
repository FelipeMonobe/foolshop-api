const controller = require('../controllers/users.js')

module.exports = router => {
  router.get('/users/hello', controller.hello)

  return router
}
