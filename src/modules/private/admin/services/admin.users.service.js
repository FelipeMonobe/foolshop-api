// @flow

const mongoose: any = require('mongoose')

const Users: any = mongoose.model('User')

const ban = async (userId: number): Promise<void> => await Users.findByIdAndUpdate(userId, { active: false }, { new: true })

module.exports = {
  ban,
}
