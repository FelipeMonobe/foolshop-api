// @flow

const UsersService = require('../services/users.service')
const logger = require('../../../../utils/logger.util')

const authenticate: Function = async(ctx: any): Promise<void> => {
  try {
    const form: any = ctx.request.body
    const user: any = await UsersService.findByEmail(form.email, form.password)
    ctx.assert(user, 'No user was found with this email-password combination')

    const token = await UsersService.generateToken(user)
    ctx.assert(token, 'Failed to generate token')

    ctx.body = token
    ctx.status = 200
  } catch (e) {
    ctx.status = 500
    return logger.error(e.stack)
  }
}

module.exports = {
  authenticate,
}
