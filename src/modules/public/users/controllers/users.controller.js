const UsersService = require('../services/users.service')

const create = async (ctx) => {
  const form = ctx.request.body
  const user = await UsersService.create(form)

  ctx.assert(user, 400, 'Invalid data')
  ctx.status = 200
  ctx.body = user
}

module.exports = {
  create,
}
