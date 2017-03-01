// @flow

const AdminUsersService = require('../services/admin.users.service')
const logger = require('../../../../utils/logger.util')

const ban: Function = async (ctx: any): Promise<void> => {
  try {
    const userId: string = ctx.params.userId
    const bannedUser: any = await AdminUsersService.ban(userId)
    ctx.assert(bannedUser, 'User not found or already banned')
    ctx.assert(!bannedUser.active, 'User already inactive')

    ctx.body = bannedUser
    ctx.status = 200
  } catch (e) {
    ctx.status = 500
    return logger.error(e.stack)
  }
}

module.exports = {
  ban,
}
