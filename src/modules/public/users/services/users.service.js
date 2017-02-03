const env = require('../../../../configs/environment.config')
const jsonwebtoken = require('jsonwebtoken')
const mongoose = require('mongoose')
const pify = require('pify')

const jwtSign = pify(jsonwebtoken.sign)
const secret = env.variables.jwt.SECRET
const expiresIn = 60
const Users = mongoose.model('User')
const findByEmail = async email => Users.findOne({ email }).lean()
const generateToken = async user => await jwtSign(user, secret, { expiresIn })

const create = async form => {
  const user = new Users(form)

  return user.save()
}

module.exports = {
  findByEmail,
  generateToken,
  create,
}
