// @flow

const logger: any = require('../utils/logger.util')
const env: any = require('./environment.config')
const mongoose: any = require('mongoose')
const pify: any = require('pify')

const connectionStr: string = env.variables.database.CONN

const setup = (): void => {
  mongoose.connect(connectionStr)
  logger.info('|DTB| MongoDB')
}

module.exports = {
  setup,
}
