const env: any = require('../../../../configs/environment.config')
const jsonwebtoken: any = require('jsonwebtoken')
const mongoose: any = require('mongoose')
const pify: any = require('pify')

const jwtSign: any = pify(jsonwebtoken.sign)
const secret: string = env.variables.jwt.SECRET
const expiresIn: number = 60
const Users: any = mongoose.model('User')

const findByEmail: any = async email => Users.findOne({ email }).lean()
const generateToken: any = async user => await jwtSign(user, secret, { expiresIn })
const create: any = async form => await Users.create(form)

module.exports = {
  findByEmail,
  generateToken,
  create,
}
