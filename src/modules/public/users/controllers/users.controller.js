// @flow

const UsersService: any = require('../services/users.service')

const create = async (ctx: any): Promise<void> => {
  const form: any = ctx.request.body
  const user: any = await UsersService.create(form)

  ctx.assert(user, 400, 'Invalid data')
  ctx.status = 200
  ctx.body = user
}

module.exports = {
  create,
}
