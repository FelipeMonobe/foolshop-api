const controller = require('../controllers/signin.controller')
const endpoint = '/users/signin'

module.exports = router => {
  router.get(endpoint, controller.authenticate)

  return router
}
