const controller = require('../controllers/signin.controller')
const endpoint = '/users/signin'

module.exports = router => {
  router.post(endpoint, controller.authenticate)

  return router
}
