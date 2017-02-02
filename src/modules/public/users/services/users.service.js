const env = require('../../../../configs/environment.config')
const convert = require('koa-convert')
const mongoose = require('mongoose')
const koaJwt = require('koa-jwt')

const secret = env.variables.jwt.SECRET
const Users = mongoose.model('User')
const jwt = convert(koaJwt({ secret }))
const findByEmail = async email => Users.find({ email }).lean()
const generateToken = user => jwt.sign(user, secret)
const create = async form => {
  const user = new Users(form)

  return user.save()
}

module.exports = {
  findByEmail,
  generateToken,
  create,
}
