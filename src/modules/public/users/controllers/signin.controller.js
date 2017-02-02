const UsersService = require('../services/users.service')

const authenticate = async (ctx) => {
  const form = ctx.request.body
  const user = await UsersService.findByEmail(user.email)

  ctx.assert(user, 404, 'No user was found with this email-password combination')
  ctx.status = 200
  ctx.body = UsersService.generateToken(user)
}

module.exports = {
  authenticate,
}
