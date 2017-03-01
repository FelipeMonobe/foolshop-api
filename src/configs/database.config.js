// @flow

const logger = require('../utils/logger.util')
const env = require('./environment.config')
const mongoose = require('mongoose')
const pify = require('pify')

const connectionStr: string = env.variables.database.CONN

const setup: Function = (): void => {
  try {
    mongoose.connect(connectionStr)
    return logger.info('|DTB| MongoDB')
  } catch (e) {
    return logger.error(e.stack)
  }
}

module.exports = {
  setup,
}
