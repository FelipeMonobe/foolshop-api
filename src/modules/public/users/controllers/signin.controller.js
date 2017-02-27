// @flow

const UsersService: any = require('../services/users.service')

const authenticate = async (ctx: any): Promise<void> => {
  const form: any = ctx.request.body
  const user: any = await UsersService.findByEmail(form.email)

  ctx.assert(user, 404, 'No user was found with this email-password combination')
  ctx.status = 200
  ctx.body = await UsersService.generateToken(user)
}

module.exports = {
  authenticate,
}
