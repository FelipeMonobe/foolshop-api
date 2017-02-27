// @flow

const AdminUsersService: any = require('../services/admin.users.service')

const ban = async (ctx: any): Promise<void> => {
  const userId: string = ctx.params.userId
  const bannedUser: any = await AdminUsersService.ban(userId)

  ctx.assert(bannedUser, 500, 'User not found or already banned')
  ctx.assert(!bannedUser.active, 500, 'Server failed to ban this user')

  ctx.status = 200
  ctx.body = bannedUser
}

module.exports = {
  ban,
}
