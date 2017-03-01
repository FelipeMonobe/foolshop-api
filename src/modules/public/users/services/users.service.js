// @flow

const env = require('../../../../configs/environment.config')
const logger = require('../../../../utils/logger.util')
const jsonwebtoken = require('jsonwebtoken')
const mongoose = require('mongoose')
const pify = require('pify')

const jwtSign: Function = pify(jsonwebtoken.sign)
const secret: string = env.variables.jwt.SECRET
const expiresIn: number = 60
const Users: any = mongoose.model('User')

const findByEmail: Function = (email): Promise<any> =>
  Users
  .findOne({ email })
  .lean()
const findByEmailAndPassword: Function = (email, password): Promise<any> =>
  Users
  .findOne({ email, password })
  .lean()
const generateToken: Function = user =>
  jwtSign(user, secret, { expiresIn })
const create: Function = (form): Promise<any> =>
  Users
  .create(form)

module.exports = {
  findByEmail,
  findByEmailAndPassword,
  generateToken,
  create,
}
