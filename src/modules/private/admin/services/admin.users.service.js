const mongoose = require('mongoose')

const Users = mongoose.model('User')

const ban = async userId => {
  const user = await Users.findById(userId)

  if (!user) return

  user.active = false
  return await user.save()
}

module.exports = {
  ban,
}
