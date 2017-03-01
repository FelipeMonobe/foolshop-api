// @flow

const mongoose = require('mongoose')
const logger = require('../../../../utils/logger.util')

const Users: any = mongoose.model('User')

const ban: Function = (userId: string): Promise<any> =>
  Users
  .findByIdAndUpdate(userId, { active: false }, { new: true })
  .catch(e => logger.error(e.stack))

module.exports = {
  ban,
}
