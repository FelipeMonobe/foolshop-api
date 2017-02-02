const controller = require('../controllers/users.controller')
const endpoint = '/users'

module.exports = router => {
  router.post(endpoint, controller.create)

  return router
}
