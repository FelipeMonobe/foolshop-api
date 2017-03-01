// @flow

const UsersService = require('../services/users.service')
const logger = require('../../../../utils/logger.util')

const create: Function = async (ctx: any): Promise<void> => {
  try {
    const form: any = ctx.request.body
    ctx.assert(form.email, 'Invalid email')
    ctx.assert(form.password, 'Invalid password')

    const user: any = await UsersService.create(form)
    ctx.assert(user._id, 'Failed to create user')

    ctx.body = user
    ctx.status = 200
  } catch (e) {
    ctx.status = 500
    return logger.error(e.stack)
  }
}

module.exports = {
  create,
}
